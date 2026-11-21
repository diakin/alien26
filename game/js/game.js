// Прототип: поле, бойцы, выбор мышью, ходьба по клеткам, очки действия.
// Панель интерфейса (panel.js) читает состояние и вызывает действия через window.Game.
(function () {
  'use strict';

  var GRID = FIELD.tiles;
  var WALK_SPEED = 1.5;                       // м/с
  var STRIDE = 1.32;                          // м на полный цикл ходьбы (два шага), как в рендере
  var WALK_FRAMES = 16;
  var FRAME_METERS = STRIDE / WALK_FRAMES;    // на столько смещается фигура при смене кадра
  var BOX_HEIGHT = 1.9;                       // высота рамки-курсора, м

  // стоимость действий в очках действия (ОД)
  var COST = { kneel: 4, stand: 8, turnStep: 1, reload: 15 };
  var MAGAZINE = 30;
  var FIRE_MODES = [
    { name: 'Прицельный', cost: 18 },
    { name: 'Одиночный', cost: 12 },
    { name: 'Очередь', cost: 28 }
  ];

  var canvas = document.getElementById('view');
  var context = canvas.getContext('2d');
  var panelElement = document.getElementById('panel');

  // ---------------- загрузка картинок ----------------
  var images = {};
  function load(name, src) {
    var image = new Image();
    image.src = src;
    images[name] = image;
    return image;
  }
  var background = load('field', 'assets/maps/field01.jpg');
  Object.keys(SPRITE_ANCHORS).forEach(function (name) {
    load(name, (name.indexOf('rock') === 0 ? 'assets/objects/' : 'assets/units/') + name + '.png');
  });

  // ---------------- состояние ----------------
  var obstacles = [
    { sprite: 'rock0', col: 5, row: 6 }, { sprite: 'rock2', col: 9, row: 9 }, { sprite: 'rock1', col: 10, row: 9 },
    { sprite: 'rock3', col: 10, row: 10 }, { sprite: 'rock0', col: 13, row: 4 }, { sprite: 'rock1', col: 4, row: 13 },
    { sprite: 'rock2', col: 15, row: 14 }, { sprite: 'rock3', col: 7, row: 16 }
  ];
  var blocked = new Uint8Array(GRID * GRID);
  obstacles.forEach(function (rock) { blocked[rock.row * GRID + rock.col] = 1; });

  function makeUnit(profile, col, row, direction) {
    var unit = {
      col: col, row: row, x: col + 0.5, y: row + 0.5, direction: direction,
      path: [], walked: 0, moveCol: 0, moveRow: 0, segmentLength: 0,
      kneeling: false, fireMode: 0
    };
    Object.keys(profile).forEach(function (key) { unit[key] = profile[key]; });
    unit.timeUnits = unit.maxTimeUnits;
    return unit;
  }
  var units = [
    makeUnit({ name: 'Андрей Волков', callsign: 'ВОРОН-1', rank: 'ст. сержант', role: 'ШТУРМОВИК', missions: 14, camo: 'black',
      maxTimeUnits: 56, health: 38, maxHealth: 45, stamina: 61, maxStamina: 70, morale: 88, optics: 'ПНВ',
      weapon: 'КАРАБИН КС-9', weaponNote: 'ПБС · КОЛЛИМАТОР', ammo: 28, reserve: 4 }, 3, 3, 0),
    makeUnit({ name: 'Ирина Соколова', callsign: 'ВОРОН-2', rank: 'сержант', role: 'СТРЕЛОК', missions: 9, camo: 'green',
      maxTimeUnits: 60, health: 41, maxHealth: 41, stamina: 66, maxStamina: 66, morale: 92, optics: 'ОЧКИ',
      weapon: 'КАРАБИН КС-9М', weaponNote: 'КОЛЛИМАТОР · ФОНАРЬ', ammo: 30, reserve: 5 }, 5, 3, 0),
    makeUnit({ name: 'Тимур Ахметов', callsign: 'ВОРОН-3', rank: 'мл. сержант', role: 'ПУЛЕМЁТЧИК', missions: 11, camo: 'green',
      maxTimeUnits: 52, health: 50, maxHealth: 52, stamina: 74, maxStamina: 80, morale: 79, optics: 'ОЧКИ',
      weapon: 'КАРАБИН КС-9М', weaponNote: 'КОЛЛИМАТОР · ФОНАРЬ', ammo: 17, reserve: 3 }, 3, 5, 0),
    makeUnit({ name: 'Олег Ржевский', callsign: 'ВОРОН-4', rank: 'ефрейтор', role: 'РАЗВЕДЧИК', missions: 6, camo: 'black',
      maxTimeUnits: 62, health: 33, maxHealth: 40, stamina: 58, maxStamina: 64, morale: 71, optics: 'ПНВ',
      weapon: 'КАРАБИН КС-9', weaponNote: 'ПБС · КОЛЛИМАТОР', ammo: 30, reserve: 2 }, 5, 5, 7)
  ];
  var selected = units[0];
  var hoverTile = null, hoverPath = null, hoverAffordable = 0;
  var showGrid = true;
  var turn = 1;
  var message = { text: '', until: 0 };

  function say(text) { message.text = text; message.until = Date.now() + 2200; }

  // камера: пиксель фона, который виден в левом верхнем углу окна
  var camera = { x: 0, y: 0 };
  function centerOn(col, row) {
    var point = Iso.toScreen(col, row);
    centerOnPixel(point.x, point.y);
  }
  function centerOnPixel(x, y) {
    camera.x = x - canvas.width / 2;
    camera.y = y - canvas.height / 2;
    clampCamera();
  }
  function clampCamera() {
    camera.x = Math.max(-200, Math.min(FIELD.width - canvas.width + 200, camera.x));
    camera.y = Math.max(-200, Math.min(FIELD.height - canvas.height + 200, camera.y));
  }

  function resize() {
    if (window.Panel) window.Panel.layout();
    canvas.width = window.innerWidth;
    canvas.height = Math.max(200, window.innerHeight - (panelElement ? panelElement.offsetHeight : 0));
    clampCamera();
  }
  window.addEventListener('resize', resize);

  // ---------------- правила клеток ----------------
  function inside(col, row) { return col >= 0 && row >= 0 && col < GRID && row < GRID; }
  function unitAt(col, row, except) {
    for (var index = 0; index < units.length; index++) {
      var unit = units[index];
      if (unit !== except && unit.col === col && unit.row === row) return unit;
    }
    return null;
  }
  function isFreeFor(mover) {
    return function (col, row) { return inside(col, row) && !blocked[row * GRID + col] && !unitAt(col, row, mover); };
  }

  // сколько первых шагов пути боец может оплатить; с колена сначала нужно встать
  function affordableSteps(unit, path) {
    var budget = unit.timeUnits - (unit.kneeling ? COST.stand : 0);
    var col = unit.col, row = unit.row, steps = 0;
    for (var index = 0; index < path.length; index++) {
      var cost = (path[index].col !== col && path[index].row !== row) ? 6 : 4;
      if (cost > budget) break;
      budget -= cost;
      col = path[index].col; row = path[index].row;
      steps++;
    }
    return steps;
  }
  function pathCost(unit, path) {
    return PathFinder.cost(unit.col, unit.row, path) + (unit.kneeling ? COST.stand : 0);
  }

  // ---------------- действия ----------------
  function busy() { return !selected || selected.path.length > 0; }

  function moveSelectedTo(tile) {
    if (busy() || !tile) return;
    var path = PathFinder.find(GRID, GRID, selected.col, selected.row, tile.col, tile.row, isFreeFor(selected));
    if (!path || !path.length) return;
    var steps = affordableSteps(selected, path);
    if (steps === 0) { say('Не хватает очков действия'); return; }
    path = path.slice(0, steps);
    var cost = pathCost(selected, path);
    selected.timeUnits -= cost;
    selected.kneeling = false;
    selected.path = path;
    if (steps < PathFinder.find(GRID, GRID, selected.col, selected.row, tile.col, tile.row, isFreeFor(selected)).length) {
      say('ОД хватит только на часть пути');
    }
  }

  // поворот лицом к точке; 1 ОД за каждые 45 градусов
  function turnSelectedTo(gridCol, gridRow) {
    if (busy()) return;
    var direction = Iso.directionOf(gridCol - selected.x, gridRow - selected.y);
    if (direction < 0 || direction === selected.direction) return;
    var steps = Math.min((direction - selected.direction + 8) % 8, (selected.direction - direction + 8) % 8);
    var cost = steps * COST.turnStep;
    if (cost > selected.timeUnits) { say('Не хватает очков действия'); return; }
    selected.timeUnits -= cost;
    selected.direction = direction;
  }

  function toggleKneel() {
    if (busy()) return;
    var cost = selected.kneeling ? COST.stand : COST.kneel;
    if (cost > selected.timeUnits) { say('Не хватает очков действия'); return; }
    selected.timeUnits -= cost;
    selected.kneeling = !selected.kneeling;
  }

  function reload() {
    if (busy()) return;
    if (selected.ammo >= MAGAZINE) { say('Магазин полон'); return; }
    if (selected.reserve <= 0) { say('Нет запасных магазинов'); return; }
    if (COST.reload > selected.timeUnits) { say('Не хватает очков действия'); return; }
    selected.timeUnits -= COST.reload;
    selected.reserve--;
    selected.ammo = MAGAZINE;
  }

  function endTurn() {
    if (units.some(function (unit) { return unit.path.length > 0; })) { say('Дождитесь окончания движения'); return; }
    turn++;
    units.forEach(function (unit) { unit.timeUnits = unit.maxTimeUnits; });
    say('Ход ' + turn);
  }

  function selectUnit(unit, center) {
    selected = unit;
    if (unit && center) centerOn(unit.x, unit.y);
    updateHover();
  }
  function selectNext() {
    var index = selected ? units.indexOf(selected) : -1;
    selectUnit(units[(index + 1) % units.length], true);
  }

  function setFireMode(index) { if (selected) selected.fireMode = index; }

  // ---------------- мышь и клавиатура ----------------
  var mouse = { x: 0, y: 0, overView: false, dragging: false, dragStartX: 0, dragStartY: 0, cameraStartX: 0, cameraStartY: 0, moved: false };

  function tileUnderMouse() {
    if (!mouse.overView) return null;
    var grid = Iso.toGrid(mouse.x + camera.x, mouse.y + camera.y);
    var col = Math.floor(grid.col), row = Math.floor(grid.row);
    return inside(col, row) ? { col: col, row: row } : null;
  }

  // боец под курсором: по прямоугольнику фигуры, ближний к зрителю важнее
  function unitUnderMouse() {
    var best = null;
    units.forEach(function (unit) {
      var foot = Iso.toScreen(unit.x, unit.y);
      var left = foot.x - camera.x - 26, right = foot.x - camera.x + 26;
      var top = foot.y - camera.y - 1.85 * Iso.pixelsPerMeterUp, bottom = foot.y - camera.y + 8;
      if (mouse.x >= left && mouse.x <= right && mouse.y >= top && mouse.y <= bottom) {
        if (!best || unit.x + unit.y > best.x + best.y) best = unit;
      }
    });
    return best;
  }

  function updateHover() {
    hoverTile = tileUnderMouse();
    hoverPath = null;
    hoverAffordable = 0;
    if (hoverTile && !busy() && !unitAt(hoverTile.col, hoverTile.row)) {
      hoverPath = PathFinder.find(GRID, GRID, selected.col, selected.row, hoverTile.col, hoverTile.row, isFreeFor(selected));
      if (hoverPath) hoverAffordable = affordableSteps(selected, hoverPath);
    }
  }

  canvas.addEventListener('contextmenu', function (event) { event.preventDefault(); });
  canvas.addEventListener('mousedown', function (event) {
    mouse.x = event.clientX; mouse.y = event.clientY; mouse.overView = true;
    if (event.button === 2 || event.button === 1) {
      mouse.dragging = true; mouse.moved = false;
      mouse.dragStartX = event.clientX; mouse.dragStartY = event.clientY;
      mouse.cameraStartX = camera.x; mouse.cameraStartY = camera.y;
      return;
    }
    if (event.button !== 0) return;
    var clickedUnit = unitUnderMouse();
    var tile = tileUnderMouse();
    if (!clickedUnit && tile) clickedUnit = unitAt(tile.col, tile.row);
    if (clickedUnit) { selectUnit(clickedUnit, false); return; }
    moveSelectedTo(tile);
    updateHover();
  });
  window.addEventListener('mousemove', function (event) {
    mouse.x = event.clientX; mouse.y = event.clientY;
    mouse.overView = event.target === canvas;
    if (mouse.dragging) {
      if (Math.abs(event.clientX - mouse.dragStartX) + Math.abs(event.clientY - mouse.dragStartY) > 3) mouse.moved = true;
      camera.x = mouse.cameraStartX - (event.clientX - mouse.dragStartX);
      camera.y = mouse.cameraStartY - (event.clientY - mouse.dragStartY);
      clampCamera();
    }
    updateHover();
  });
  window.addEventListener('mouseup', function (event) {
    if (mouse.dragging && !mouse.moved && event.button === 2) {
      var grid = Iso.toGrid(mouse.x + camera.x, mouse.y + camera.y);
      turnSelectedTo(grid.col, grid.row);
    }
    mouse.dragging = false;
  });

  var keys = {};
  var ACTION_KEYS = { '2': 'kneel', '4': 'reload', '7': 'next', '0': 'endTurn' };
  window.addEventListener('keydown', function (event) {
    keys[event.key] = true;
    if (event.key === 'Escape') selectUnit(null);
    if (event.key === 'g' || event.key === 'G' || event.key === 'п' || event.key === 'П') showGrid = !showGrid;
    if (event.key === ' ' || event.key === 'Tab') { event.preventDefault(); selectNext(); }
    if (ACTION_KEYS[event.key]) Game.action(ACTION_KEYS[event.key]);
  });
  window.addEventListener('keyup', function (event) { keys[event.key] = false; });

  // ---------------- движение ----------------
  function updateUnit(unit, seconds) {
    if (!unit.path.length) return;
    var next = unit.path[0];
    // перед входом в новую клетку проверить, что она свободна
    if (unit.col !== next.col || unit.row !== next.row) {
      if (unitAt(next.col, next.row, unit)) { unit.path = []; unit.segmentLength = 0; unit.walked = 0; unit.x = unit.col + 0.5; unit.y = unit.row + 0.5; return; }
    }
    var targetX = next.col + 0.5, targetY = next.row + 0.5;
    var deltaX = targetX - unit.x, deltaY = targetY - unit.y;
    var distanceTiles = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    if (unit.segmentLength === 0) {
      // начало шага в следующую клетку: направление и длина считаются один раз
      unit.segmentLength = distanceTiles;
      unit.moveCol = deltaX / distanceTiles;
      unit.moveRow = deltaY / distanceTiles;
      var direction = Iso.directionOf(deltaX, deltaY);
      if (direction >= 0) unit.direction = direction;
    }
    var stepTiles = WALK_SPEED * seconds / Iso.tileMeters;
    if (distanceTiles <= stepTiles) {
      unit.x = targetX; unit.y = targetY;
      unit.walked += distanceTiles * Iso.tileMeters;
      unit.col = next.col; unit.row = next.row;
      unit.path.shift();
      unit.segmentLength = 0;
      if (!unit.path.length) unit.walked = 0;   // направление сохраняется: стоит лицом туда, куда шёл
    } else {
      unit.x += deltaX / distanceTiles * stepTiles;
      unit.y += deltaY / distanceTiles * stepTiles;
      unit.walked += stepTiles * Iso.tileMeters;
      // клетка считается занятой, как только боец прошёл половину шага
      if (distanceTiles < unit.segmentLength / 2) { unit.col = next.col; unit.row = next.row; }
    }
  }

  function spriteName(unit) {
    if (unit.path.length) {
      var frame = Math.floor(unit.walked / FRAME_METERS) % WALK_FRAMES;
      return unit.camo + '_walk_f' + frame + '_d' + unit.direction;
    }
    return unit.camo + (unit.kneeling ? '_kneelAim_d' : '_idle_d') + unit.direction;
  }

  // Фигура на экране сдвигается только при смене кадра: внутри кадра опорная нога
  // неподвижна относительно земли, поэтому ноги не скользят.
  function drawPosition(unit) {
    if (!unit.path.length) return { x: unit.x, y: unit.y };
    var lagTiles = (unit.walked - Math.floor(unit.walked / FRAME_METERS) * FRAME_METERS) / Iso.tileMeters;
    return { x: unit.x - unit.moveCol * lagTiles, y: unit.y - unit.moveRow * lagTiles };
  }

  // ---------------- отрисовка ----------------
  function drawGrid() {
    context.save();
    context.beginPath();
    for (var line = 0; line <= GRID; line++) {
      var a = Iso.toScreen(line, 0), b = Iso.toScreen(line, GRID);
      context.moveTo(a.x - camera.x, a.y - camera.y); context.lineTo(b.x - camera.x, b.y - camera.y);
      a = Iso.toScreen(0, line); b = Iso.toScreen(GRID, line);
      context.moveTo(a.x - camera.x, a.y - camera.y); context.lineTo(b.x - camera.x, b.y - camera.y);
    }
    // тёмная подложка и светлая линия: видно и на светлой, и на тёмной траве
    context.strokeStyle = 'rgba(10, 20, 6, 0.35)';
    context.lineWidth = 2.2;
    context.stroke();
    context.strokeStyle = 'rgba(235, 245, 215, 0.38)';
    context.lineWidth = 1;
    context.stroke();
    context.restore();
  }

  // рамка-курсор: клетка на земле и такая же над ней, соединённые рёбрами
  function drawBox(col, row, color, part) {
    var bottom = Iso.tileCorners(col, row, 0), top = Iso.tileCorners(col, row, BOX_HEIGHT);
    context.save();
    context.lineWidth = 1.6;
    context.strokeStyle = color;
    function edge(first, second) {
      context.beginPath();
      context.moveTo(first.x - camera.x, first.y - camera.y);
      context.lineTo(second.x - camera.x, second.y - camera.y);
      context.stroke();
    }
    // задние рёбра (за фигурой): угол 0 — дальний от зрителя
    if (part !== 'front') {
      edge(bottom[0], bottom[1]); edge(bottom[3], bottom[0]); edge(bottom[0], top[0]);
      edge(top[0], top[1]); edge(top[3], top[0]);
    }
    if (part !== 'back') {
      edge(bottom[1], bottom[2]); edge(bottom[2], bottom[3]);
      edge(bottom[1], top[1]); edge(bottom[2], top[2]); edge(bottom[3], top[3]);
      edge(top[1], top[2]); edge(top[2], top[3]);
    }
    context.restore();
  }

  function drawSprite(name, col, row) {
    var image = images[name], anchor = SPRITE_ANCHORS[name];
    if (!image || !image.complete || !anchor) return;
    var foot = Iso.toScreen(col, row);
    context.drawImage(image, Math.round(foot.x - camera.x - anchor[0]), Math.round(foot.y - camera.y - anchor[1]));
  }

  // маршрут: доступная часть голубая, на остальную не хватает ОД — оранжевая
  function drawPath() {
    if (!hoverPath || !hoverPath.length) return;
    context.save();
    hoverPath.forEach(function (step, index) {
      var point = Iso.toScreen(step.col + 0.5, step.row + 0.5);
      var last = index === hoverPath.length - 1;
      context.fillStyle = index < hoverAffordable ? 'rgba(120, 230, 255, 0.85)' : 'rgba(255, 170, 60, 0.9)';
      context.beginPath();
      context.ellipse(point.x - camera.x, point.y - camera.y, last ? 9 : 4, last ? 5 : 2.4, 0, 0, Math.PI * 2);
      context.fill();
    });
    context.restore();
  }

  function drawPathLabel() {
    if (!hoverPath || !hoverPath.length) return;
    var cost = pathCost(selected, hoverPath);
    var enough = hoverAffordable === hoverPath.length;
    var end = hoverPath[hoverPath.length - 1];
    var label = Iso.toScreen(end.col + 0.5, end.row + 0.5, BOX_HEIGHT + 0.25);
    context.save();
    context.font = 'bold 13px Arial, sans-serif';
    context.textAlign = 'center';
    context.fillStyle = 'rgba(0, 0, 0, 0.6)';
    context.fillRect(label.x - camera.x - 28, label.y - camera.y - 14, 56, 18);
    context.fillStyle = enough ? '#bff4ff' : '#ffc070';
    context.fillText(cost + ' ОД', label.x - camera.x, label.y - camera.y);
    context.restore();
  }

  function drawSelectionMarker(unit) {
    var position = drawPosition(unit);
    var head = Iso.toScreen(position.x, position.y, unit.kneeling && !unit.path.length ? 1.6 : 2.15);
    var x = head.x - camera.x, y = head.y - camera.y + Math.sin(Date.now() / 220) * 2;
    context.save();
    context.fillStyle = '#ffd23a';
    context.strokeStyle = '#4a3200';
    context.lineWidth = 1.5;
    context.beginPath();
    context.moveTo(x - 9, y - 10); context.lineTo(x + 9, y - 10); context.lineTo(x, y);
    context.closePath(); context.fill(); context.stroke();
    context.restore();
  }

  function render() {
    context.fillStyle = '#141a12';
    context.fillRect(0, 0, canvas.width, canvas.height);
    if (background.complete) context.drawImage(background, -Math.round(camera.x), -Math.round(camera.y));
    if (showGrid) drawGrid();

    var hoverReachable = hoverTile && (busy() || (hoverPath && hoverAffordable > 0) || unitAt(hoverTile.col, hoverTile.row));
    var hoverColor = hoverReachable ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 90, 70, 0.9)';
    // рамка-куб — это только курсор мыши; выбранного бойца отмечает стрелка
    if (hoverTile) drawBox(hoverTile.col, hoverTile.row, hoverColor, 'back');
    drawPath();

    // объекты по глубине: дальше от зрителя (меньше col + row) рисуются раньше
    var drawList = [];
    obstacles.forEach(function (rock) { drawList.push({ depth: rock.col + rock.row + 1, draw: function () { drawSprite(rock.sprite, rock.col + 0.5, rock.row + 0.5); } }); });
    units.forEach(function (unit) {
      var position = drawPosition(unit);
      drawList.push({ depth: position.x + position.y, draw: function () { drawSprite(spriteName(unit), position.x, position.y); } });
    });
    drawList.sort(function (first, second) { return first.depth - second.depth; });
    drawList.forEach(function (item) { item.draw(); });

    if (selected) drawSelectionMarker(selected);
    drawPathLabel();
    if (hoverTile) drawBox(hoverTile.col, hoverTile.row, hoverColor, 'front');
  }

  // ---------------- связь с панелью ----------------
  var Game = window.Game = {
    COST: COST, MAGAZINE: MAGAZINE, FIRE_MODES: FIRE_MODES, GRID: GRID,
    units: units, obstacles: obstacles, camera: camera,
    get selected() { return selected; },
    get turn() { return turn; },
    get message() { return Date.now() < message.until ? message.text : ''; },
    get busy() { return busy(); },
    viewSize: function () { return { width: canvas.width, height: canvas.height }; },
    centerOnPixel: centerOnPixel,
    selectUnit: function (unit) { selectUnit(unit, true); },
    setFireMode: setFireMode,
    action: function (name) {
      if (name === 'kneel') toggleKneel();
      else if (name === 'reload') reload();
      else if (name === 'next') selectNext();
      else if (name === 'endTurn') endTurn();
      else say('Пока не работает');
      updateHover();
    }
  };

  // ---------------- цикл ----------------
  var lastTime = performance.now();
  function frame(now) {
    var seconds = Math.min(0.05, (now - lastTime) / 1000);
    lastTime = now;
    var scroll = 700 * seconds;
    if (keys.ArrowLeft || keys.a || keys.ф) camera.x -= scroll;
    if (keys.ArrowRight || keys.d || keys.в) camera.x += scroll;
    if (keys.ArrowUp || keys.w || keys.ц) camera.y -= scroll;
    if (keys.ArrowDown || keys.s || keys.ы) camera.y += scroll;
    clampCamera();
    var wasMoving = units.some(function (unit) { return unit.path.length > 0; });
    units.forEach(function (unit) { updateUnit(unit, seconds); });
    if (wasMoving) updateHover();
    render();
    if (window.Panel) window.Panel.update();
    window.requestAnimationFrame(frame);
  }

  resize();
  centerOn(selected.x, selected.y + 3);
  window.requestAnimationFrame(frame);

  // для автотеста
  window.__game = {
    units: units, camera: camera, select: function (index) { selected = units[index]; }, drawPosition: drawPosition,
    clickTile: function (col, row) {
      var point = Iso.toScreen(col + 0.5, row + 0.5);
      return { x: point.x - camera.x, y: point.y - camera.y };
    },
    centerOn: centerOn
  };
})();
