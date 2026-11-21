// Прототип: поле, бойцы, выбор мышью, ходьба по клеткам.
(function () {
  'use strict';

  var GRID = FIELD.tiles;
  var WALK_SPEED = 1.5;                       // м/с
  var STRIDE = 1.32;                          // м на полный цикл ходьбы (два шага), как в рендере
  var WALK_FRAMES = 16;
  var FRAME_METERS = STRIDE / WALK_FRAMES;    // на столько смещается фигура при смене кадра
  var BOX_HEIGHT = 1.9;                       // высота рамки-курсора, м

  var canvas = document.getElementById('view');
  var context = canvas.getContext('2d');
  var hud = document.getElementById('hud');

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

  function makeUnit(name, camo, col, row, direction) {
    return { name: name, camo: camo, col: col, row: row, x: col + 0.5, y: row + 0.5, direction: direction,
      path: [], walked: 0, moveCol: 0, moveRow: 0, segmentLength: 0, timeUnits: 56, maxTimeUnits: 56 };
  }
  var units = [
    makeUnit('Андрей Волков', 'black', 3, 3, 0), makeUnit('Ирина Соколова', 'green', 5, 3, 0),
    makeUnit('Тимур Ахметов', 'green', 3, 5, 0), makeUnit('Олег Ржевский', 'black', 5, 5, 7)
  ];
  var selected = units[0];
  var hoverTile = null, hoverPath = null;
  var showGrid = true;

  // камера: левый верхний пиксель фона, который виден в левом верхнем углу окна
  var camera = { x: 0, y: 0 };
  function centerOn(col, row) {
    var point = Iso.toScreen(col, row);
    camera.x = point.x - canvas.width / 2;
    camera.y = point.y - canvas.height / 2;
    clampCamera();
  }
  function clampCamera() {
    camera.x = Math.max(-200, Math.min(FIELD.width - canvas.width + 200, camera.x));
    camera.y = Math.max(-200, Math.min(FIELD.height - canvas.height + 200, camera.y));
  }

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    clampCamera();
  }
  window.addEventListener('resize', resize);
  resize();
  centerOn(selected.x, selected.y + 3);

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

  // ---------------- мышь и клавиатура ----------------
  var mouse = { x: 0, y: 0, dragging: false, dragStartX: 0, dragStartY: 0, cameraStartX: 0, cameraStartY: 0, moved: false };

  function tileUnderMouse() {
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
    if (hoverTile && selected && selected.path.length === 0 && !unitAt(hoverTile.col, hoverTile.row)) {
      hoverPath = PathFinder.find(GRID, GRID, selected.col, selected.row, hoverTile.col, hoverTile.row, isFreeFor(selected));
    }
  }

  canvas.addEventListener('contextmenu', function (event) { event.preventDefault(); });
  canvas.addEventListener('mousedown', function (event) {
    mouse.x = event.clientX; mouse.y = event.clientY;
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
    if (clickedUnit) { selected = clickedUnit; updateHover(); return; }
    if (selected && tile && selected.path.length === 0) {
      var path = PathFinder.find(GRID, GRID, selected.col, selected.row, tile.col, tile.row, isFreeFor(selected));
      if (path && path.length) {
        var cost = PathFinder.cost(selected.col, selected.row, path);
        // в прототипе очки времени не ограничивают ход: кончились — восстанавливаются
        if (cost > selected.timeUnits) selected.timeUnits = selected.maxTimeUnits;
        selected.timeUnits = Math.max(0, selected.timeUnits - cost);
        selected.path = path;
      }
    }
  });
  window.addEventListener('mousemove', function (event) {
    mouse.x = event.clientX; mouse.y = event.clientY;
    if (mouse.dragging) {
      if (Math.abs(event.clientX - mouse.dragStartX) + Math.abs(event.clientY - mouse.dragStartY) > 3) mouse.moved = true;
      camera.x = mouse.cameraStartX - (event.clientX - mouse.dragStartX);
      camera.y = mouse.cameraStartY - (event.clientY - mouse.dragStartY);
      clampCamera();
    }
    updateHover();
  });
  window.addEventListener('mouseup', function (event) {
    if (mouse.dragging && !mouse.moved && event.button === 2) turnSelectedToMouse();
    mouse.dragging = false;
  });

  // поворот выбранного бойца лицом к точке под курсором
  function turnSelectedToMouse() {
    if (!selected || selected.path.length) return;
    var grid = Iso.toGrid(mouse.x + camera.x, mouse.y + camera.y);
    var direction = Iso.directionOf(grid.col - selected.x, grid.row - selected.y);
    if (direction >= 0) selected.direction = direction;
  }

  var keys = {};
  window.addEventListener('keydown', function (event) {
    keys[event.key] = true;
    if (event.key === 'Escape') { selected = null; updateHover(); }
    if (event.key === 'g' || event.key === 'G' || event.key === 'п' || event.key === 'П') showGrid = !showGrid;
    if (event.key === ' ' || event.key === 'Tab') {
      event.preventDefault();
      var index = selected ? units.indexOf(selected) : -1;
      selected = units[(index + 1) % units.length];
      centerOn(selected.x, selected.y);
      updateHover();
    }
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
    // клетка считается занятой бойцом, как только он пересёк её половину
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
    return unit.camo + '_idle_d' + unit.direction;
  }

  // Фигура на экране сдвигается только при смене кадра: внутри кадра опорная нога
  // неподвижна относительно земли, поэтому ноги не скользят.
  function drawPosition(unit) {
    if (!unit.path.length) return { x: unit.x, y: unit.y };
    var lagTiles = (unit.walked - Math.floor(unit.walked / FRAME_METERS) * FRAME_METERS) / Iso.tileMeters;
    return { x: unit.x - unit.moveCol * lagTiles, y: unit.y - unit.moveRow * lagTiles };
  }

  // ---------------- отрисовка ----------------
  function polygon(points, fill, stroke, width) {
    context.beginPath();
    points.forEach(function (point, index) {
      var x = point.x - camera.x, y = point.y - camera.y;
      if (index === 0) context.moveTo(x, y); else context.lineTo(x, y);
    });
    context.closePath();
    if (fill) { context.fillStyle = fill; context.fill(); }
    if (stroke) { context.strokeStyle = stroke; context.lineWidth = width || 1; context.stroke(); }
  }

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

  function drawPath(withLabel) {
    if (!hoverPath || !hoverPath.length) return;
    var cost = PathFinder.cost(selected.col, selected.row, hoverPath);
    var enough = cost <= selected.timeUnits;
    if (withLabel) { drawPathLabel(cost, enough); return; }
    context.save();
    hoverPath.forEach(function (step, index) {
      var point = Iso.toScreen(step.col + 0.5, step.row + 0.5);
      var last = index === hoverPath.length - 1;
      context.fillStyle = enough ? 'rgba(120, 230, 255, 0.85)' : 'rgba(255, 170, 60, 0.9)';
      context.beginPath();
      context.ellipse(point.x - camera.x, point.y - camera.y, last ? 9 : 4, last ? 5 : 2.4, 0, 0, Math.PI * 2);
      context.fill();
    });
    context.restore();
  }

  function drawPathLabel(cost, enough) {
    var end = hoverPath[hoverPath.length - 1];
    var label = Iso.toScreen(end.col + 0.5, end.row + 0.5, BOX_HEIGHT + 0.25);
    context.save();
    context.font = 'bold 13px Arial, sans-serif';
    context.textAlign = 'center';
    context.fillStyle = 'rgba(0, 0, 0, 0.6)';
    context.fillRect(label.x - camera.x - 26, label.y - camera.y - 14, 52, 18);
    context.fillStyle = enough ? '#bff4ff' : '#ffc070';
    context.fillText(cost + ' ОВ', label.x - camera.x, label.y - camera.y);
    context.restore();
  }

  function drawSelectionMarker(unit) {
    var position = drawPosition(unit);
    var head = Iso.toScreen(position.x, position.y, 2.15);
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

    var hoverReachable = hoverTile && (!selected || selected.path.length || hoverPath || unitAt(hoverTile.col, hoverTile.row));
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
    drawPath(true);
    if (hoverTile) drawBox(hoverTile.col, hoverTile.row, hoverColor, 'front');
    updateHud();
  }

  function updateHud() {
    var text = selected
      ? '<b>' + selected.name + '</b> · клетка ' + selected.col + ', ' + selected.row + ' · ОВ ' + selected.timeUnits + '/' + selected.maxTimeUnits
      : 'Боец не выбран';
    if (hud.getAttribute('data-text') !== text) { hud.innerHTML = text; hud.setAttribute('data-text', text); }
  }

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
    window.requestAnimationFrame(frame);
  }
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
