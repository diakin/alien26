// Прототип: карта с уровнями, бойцы, выбор мышью, ходьба по клеткам, лестницы, очки действия.
// Карта (MAP, FIELD) приходит из js/maps/*.js. Панель (panel.js) читает состояние через window.Game.
//
// Отрисовка как в UFO: виден выбранный уровень и все нижние. Фон варианта — готовая картинка
// (уровни 0..V, стены верхнего уровня целые или срезанные). Поверх юнитов перерисовываются
// только те куски картинки (стены, предметы, перекрытия), которые стоят ближе к зрителю.
(function () {
  'use strict';

  var GRID = MAP.tiles, LEVELS = MAP.levels, LEVEL_H = MAP.levelHeight, WALL_STRIDE = GRID + 1;
  var WALK_FRAMES = 16;
  var BOX_HEIGHT = 1.9;                       // высота рамки-курсора, м
  var MAX_STEP = 0.9;                         // наибольший перепад высоты за шаг (ступени), м
  var CLIMB_SPEED = 0.9;                      // по приставной лестнице, м/с
  var CLIMB_STEP = 0.6, CLIMB_FRAMES = 8;     // цикл лазания: две перекладины, 8 кадров
  var CLIMB_SHIFT = 0.15;                     // на лестнице фигура ближе к стене, клеток (перекладины в 0.44 м от центра клетки)
  var DOOR_WIDTH = 0.92, DOOR_REACH = 1.3, DOOR_SPEED = 2.5;   // проём, м; кто ближе — дверь открыта; скорость открытия
  var WALL_BLOCKS = [false, true, true, false, true, true, true];   // нет, стена, окно, дверь, перила, парапет, отбойник

  // типы юнитов: шаг анимации (stride, м за 16 кадров) совпадает с рендером спрайтов
  var KINDS = {
    soldier: { size: 1, speed: 1.5, stride: 1.32, height: 1.85, pickWidth: 26, canKneel: true },
    alien: { size: 1, speed: 1.5, stride: 1.2, height: 2.0, pickWidth: 26, canKneel: false },
    mech: { size: 2, speed: 1.6, stride: 1.6, height: 4.0, pickWidth: 80, canKneel: false, groundOnly: true }
  };

  // стоимость действий в очках действия (ОД)
  var COST = { kneel: 4, stand: 8, turnStep: 1, reload: 15, step: 4, diagonal: 6, stairs: 2 };
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
  Object.keys(SPRITE_ANCHORS).forEach(function (name) {
    load(name, (name.indexOf('rock') === 0 ? 'assets/objects/' : 'assets/units/') + name + '.png');
  });

  // ---------------- клетки карты ----------------
  function inside(col, row) { return col >= 0 && row >= 0 && col < GRID && row < GRID; }
  function floorAt(col, row, level) { return inside(col, row) && level >= 0 && level < LEVELS ? MAP.floor[level][row * GRID + col] : 0; }
  function elevationOf(col, row, level) { return level * LEVEL_H + (inside(col, row) ? MAP.offset[level][row * GRID + col] : 0); }
  function stairOffset(col, row, level) { return MAP.offset[level][row * GRID + col]; }
  function walkable(col, row, level) { return floorAt(col, row, level) > 0 && !MAP.blocked[level][row * GRID + col]; }
  function isIndoor(col, row, level) { return inside(col, row) && MAP.indoor[level][row * GRID + col] === 1; }
  function wallBlocks(walls, level, col, row) { return WALL_BLOCKS[walls[level][row * WALL_STRIDE + col]]; }
  // можно ли пересечь грань между соседними по стороне клетками
  function edgeOpen(col, row, nextCol, nextRow, level) {
    if (nextCol === col + 1) return !wallBlocks(MAP.wallW, level, col + 1, row);
    if (nextCol === col - 1) return !wallBlocks(MAP.wallW, level, col, row);
    if (nextRow === row + 1) return !wallBlocks(MAP.wallN, level, col, row + 1);
    if (nextRow === row - 1) return !wallBlocks(MAP.wallN, level, col, row);
    return true;
  }
  // лестничные марши: на ступени и со ступеней ходят только вдоль марша
  var stairRuns = (MAP.stairs || []).map(function (stair) {
    var run = { level: stair[0], dirCol: stair[3], dirRow: stair[4], tiles: [] };
    for (var step = 0; step < stair[5]; step++) run.tiles.push({ col: stair[1] + stair[3] * step, row: stair[2] + stair[4] * step });
    var last = run.tiles[run.tiles.length - 1];
    run.lastCol = last.col; run.lastRow = last.row;
    return run;
  });
  var stairAt = {};
  stairRuns.forEach(function (run) { run.tiles.forEach(function (tile) { stairAt[run.level + ':' + tile.col + ':' + tile.row] = run; }); });
  function stairRun(col, row, level) { return stairAt[level + ':' + col + ':' + row] || null; }
  function alongRun(run, deltaCol, deltaRow) {
    return (deltaCol === run.dirCol && deltaRow === run.dirRow) || (deltaCol === -run.dirCol && deltaRow === -run.dirRow);
  }

  function nodeKey(col, row, level) { return (level * GRID + row) * GRID + col; }
  function keyNode(key) { return { col: key % GRID, row: Math.floor(key / GRID) % GRID, level: Math.floor(key / (GRID * GRID)) }; }

  // препятствия-спрайты (камни старой карты); на карте базы всё нарисовано в фоне
  var obstacles = MAP.props || [];

  // ---------------- юниты ----------------
  function makeUnit(profile, spawn) {
    var kind = KINDS[profile.kind || 'soldier'];
    var unit = {
      kind: profile.kind || 'soldier', size: kind.size, speed: kind.speed, frameMeters: kind.stride / WALK_FRAMES,
      height: kind.height, pickWidth: kind.pickWidth, canKneel: kind.canKneel, groundOnly: !!kind.groundOnly,
      spriteSet: profile.camo, portrait: profile.camo, statLabels: ['ОЧКИ ДЕЙСТВИЯ', 'ЗДОРОВЬЕ', 'ВЫНОСЛИВОСТЬ', 'МОРАЛЬ'],
      col: spawn[0], row: spawn[1], level: spawn[2], direction: spawn[3],
      x: spawn[0] + kind.size / 2, y: spawn[1] + kind.size / 2, elevation: elevationOf(spawn[0], spawn[1], spawn[2]),
      path: [], walked: 0, moveCol: 0, moveRow: 0, segmentLength: 0, stepFrom: 0,
      kneeling: false, fireMode: 0
    };
    Object.keys(profile).forEach(function (key) { unit[key] = profile[key]; });
    unit.timeUnits = unit.maxTimeUnits;
    return unit;
  }
  var PROFILES = [
    { name: 'Андрей Волков', callsign: 'ВОРОН-1', rank: 'ст. сержант', role: 'ШТУРМОВИК', missions: 14, camo: 'black',
      maxTimeUnits: 56, health: 38, maxHealth: 45, stamina: 61, maxStamina: 70, morale: 88, optics: 'ПНВ',
      weapon: 'КАРАБИН КС-9', weaponNote: 'ПБС · КОЛЛИМАТОР', ammo: 28, reserve: 4 },
    { name: 'Ирина Соколова', callsign: 'ВОРОН-2', rank: 'сержант', role: 'СТРЕЛОК', missions: 9, camo: 'green',
      maxTimeUnits: 60, health: 41, maxHealth: 41, stamina: 66, maxStamina: 66, morale: 92, optics: 'ОЧКИ',
      weapon: 'КАРАБИН КС-9М', weaponNote: 'КОЛЛИМАТОР · ФОНАРЬ', ammo: 30, reserve: 5 },
    { name: 'Тимур Ахметов', callsign: 'ВОРОН-3', rank: 'мл. сержант', role: 'ПУЛЕМЁТЧИК', missions: 11, camo: 'green',
      maxTimeUnits: 52, health: 50, maxHealth: 52, stamina: 74, maxStamina: 80, morale: 79, optics: 'ОЧКИ',
      weapon: 'КАРАБИН КС-9М', weaponNote: 'КОЛЛИМАТОР · ФОНАРЬ', ammo: 17, reserve: 3 },
    { name: 'Олег Ржевский', callsign: 'ВОРОН-4', rank: 'ефрейтор', role: 'РАЗВЕДЧИК', missions: 6, camo: 'black',
      maxTimeUnits: 62, health: 33, maxHealth: 40, stamina: 58, maxStamina: 64, morale: 71, optics: 'ПНВ',
      weapon: 'КАРАБИН КС-9', weaponNote: 'ПБС · КОЛЛИМАТОР', ammo: 30, reserve: 2 },
    // пришельцы и робот — для проверки ходьбы, пока управляются тем же игроком
    { kind: 'alien', name: 'Страж, особь 1', callsign: 'ЦЕЛЬ-1', rank: 'тест', subtitle: 'ПРИШЕЛЕЦ · ТЕСТОВОЕ УПРАВЛЕНИЕ', camo: 'alien',
      maxTimeUnits: 64, health: 58, maxHealth: 58, stamina: 90, maxStamina: 90, morale: 100, optics: 'БЕЗ СНАРЯЖЕНИЯ', weapon: null },
    { kind: 'alien', name: 'Страж, особь 2', callsign: 'ЦЕЛЬ-2', rank: 'тест', subtitle: 'ПРИШЕЛЕЦ · ТЕСТОВОЕ УПРАВЛЕНИЕ', camo: 'alien',
      maxTimeUnits: 64, health: 52, maxHealth: 58, stamina: 84, maxStamina: 90, morale: 100, optics: 'БЕЗ СНАРЯЖЕНИЯ', weapon: null },
    { kind: 'mech', name: 'Шагающая машина K7', callsign: 'K7', rank: 'машина', subtitle: 'ПОДДЕРЖКА · ЗАНИМАЕТ 2×2 КЛЕТКИ', camo: 'mech',
      maxTimeUnits: 48, health: 180, maxHealth: 180, stamina: 100, maxStamina: 100, morale: 100, optics: 'ТЕПЛОВИЗОР',
      statLabels: ['ОЧКИ ДЕЙСТВИЯ', 'КОРПУС', 'ЭНЕРГИЯ', 'СВЯЗЬ'], weapon: null }
  ];
  var units = PROFILES.map(function (profile, index) { return makeUnit(profile, MAP.spawns[index]); });
  var selected = units[0];
  var hoverTile = null, hoverPath = null, hoverAffordable = 0;
  var showGrid = !!MAP.grid;
  var turn = 1;
  var message = { text: '', until: 0 };

  function say(text) { message.text = text; message.until = Date.now() + 2200; }

  // юнит, чья площадка накрывает клетку (col, row) на уровне level
  function unitAt(col, row, level, except) {
    for (var index = 0; index < units.length; index++) {
      var unit = units[index];
      if (unit !== except && unit.level === level && col >= unit.col && col < unit.col + unit.size && row >= unit.row && row < unit.row + unit.size) return unit;
    }
    return null;
  }
  // может ли mover встать углом площадки в (col, row) на уровне level
  function isFreeFor(mover) {
    var size = mover ? mover.size : 1;
    return function (col, row, level) {
      if (mover && mover.groundOnly && level !== 0) return false;
      for (var dy = 0; dy < size; dy++) {
        for (var dx = 0; dx < size; dx++) {
          var cellCol = col + dx, cellRow = row + dy;
          if (!walkable(cellCol, cellRow, level) || unitAt(cellCol, cellRow, level, mover)) return false;
          if (size > 1 && stairOffset(cellCol, cellRow, level) !== 0) return false;
          // внутри площадки большого юнита не должно быть стен
          if (dx > 0 && !edgeOpen(cellCol - 1, cellRow, cellCol, cellRow, level)) return false;
          if (dy > 0 && !edgeOpen(cellCol, cellRow - 1, cellCol, cellRow, level)) return false;
        }
      }
      return true;
    };
  }

  // шаг из (col, row, level) в соседнюю клетку (nextCol, nextRow, nextLevel)
  function canStep(mover, free, col, row, level, nextCol, nextRow, nextLevel) {
    if (!free(nextCol, nextRow, nextLevel)) return false;
    var deltaCol = nextCol - col, deltaRow = nextRow - row;
    var size = mover.size;
    if (size > 1) {
      if (nextLevel !== level) return false;
      for (var dy = 0; dy < size; dy++) {
        for (var dx = 0; dx < size; dx++) {
          var fromCol = col + dx, fromRow = row + dy;
          if (!stepEdgesOpen(fromCol, fromRow, deltaCol, deltaRow, level)) return false;
        }
      }
      if (deltaCol && deltaRow && (!free(col + deltaCol, row, level) || !free(col, row + deltaRow, level))) return false;
      return true;
    }
    var from = elevationOf(col, row, level), to = elevationOf(nextCol, nextRow, nextLevel);
    if (Math.abs(to - from) > MAX_STEP) return false;
    var runFrom = stairRun(col, row, level), runTo = stairRun(nextCol, nextRow, nextLevel);
    if (runFrom && !alongRun(runFrom, deltaCol, deltaRow)) return false;
    if (runTo && !alongRun(runTo, deltaCol, deltaRow)) return false;
    if (deltaCol && deltaRow) {
      if (nextLevel !== level) return false;
      if (stairOffset(col, row, level) || stairOffset(nextCol, nextRow, level) || stairOffset(col + deltaCol, row, level) || stairOffset(col, row + deltaRow, level)) return false;
      if (!free(col + deltaCol, row, level) || !free(col, row + deltaRow, level)) return false;
      return stepEdgesOpen(col, row, deltaCol, deltaRow, level);
    }
    return edgeOpen(col, row, nextCol, nextRow, level) && (nextLevel === level || edgeOpen(col, row, nextCol, nextRow, nextLevel));
  }
  function stepEdgesOpen(col, row, deltaCol, deltaRow, level) {
    if (!deltaCol || !deltaRow) return edgeOpen(col, row, col + deltaCol, row + deltaRow, level);
    return edgeOpen(col, row, col + deltaCol, row, level) && edgeOpen(col, row, col, row + deltaRow, level) &&
      edgeOpen(col + deltaCol, row, col + deltaCol, row + deltaRow, level) && edgeOpen(col, row + deltaRow, col + deltaCol, row + deltaRow, level);
  }

  var DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
  function findPath(mover, goal) {
    var free = isFreeFor(mover);
    if (!free(goal.col, goal.row, goal.level)) return null;
    var goalKey = nodeKey(goal.col, goal.row, goal.level);
    function neighbours(key, visit) {
      var node = keyNode(key);
      for (var index = 0; index < DIRECTIONS.length; index++) {
        var nextCol = node.col + DIRECTIONS[index][0], nextRow = node.row + DIRECTIONS[index][1];
        for (var nextLevel = node.level - 1; nextLevel <= node.level + 1; nextLevel++) {
          if (nextLevel < 0 || nextLevel >= LEVELS) continue;
          if (!canStep(mover, free, node.col, node.row, node.level, nextCol, nextRow, nextLevel)) continue;
          var cost = index < 4 ? COST.step : COST.diagonal;
          if (Math.abs(elevationOf(nextCol, nextRow, nextLevel) - elevationOf(node.col, node.row, node.level)) > 0.2) cost += COST.stairs;
          visit(nodeKey(nextCol, nextRow, nextLevel), cost, null);
        }
      }
      // приставные лестницы: в обе стороны
      if (mover.size === 1) {
        MAP.links.forEach(function (link) {
          var bottom = link.from, top = link.to;
          if (node.col === bottom[0] && node.row === bottom[1] && node.level === bottom[2] && free(top[0], top[1], top[2])) visit(nodeKey(top[0], top[1], top[2]), link.cost, { link: link, up: true });
          if (node.col === top[0] && node.row === top[1] && node.level === top[2] && free(bottom[0], bottom[1], bottom[2])) visit(nodeKey(bottom[0], bottom[1], bottom[2]), link.cost, { link: link, up: false });
        });
      }
    }
    function heuristic(key) {
      var node = keyNode(key);
      var dx = Math.abs(node.col - goal.col), dy = Math.abs(node.row - goal.row);
      return COST.step * (dx + dy) + (COST.diagonal - 2 * COST.step) * Math.min(dx, dy) + Math.abs(node.level - goal.level) * 2;
    }
    var raw = PathFinder.find(nodeKey(mover.col, mover.row, mover.level), goalKey, neighbours, heuristic, 30000);
    if (!raw) return null;
    // шаги для движения: у лестницы — подъём на месте и шаг на площадку (или наоборот)
    var steps = [];
    raw.forEach(function (item) {
      var node = keyNode(item.key);
      var elevation = elevationOf(node.col, node.row, node.level);
      if (item.extra && item.extra.link) {
        var link = item.extra.link, bottom = link.from, top = link.to;
        var topElevation = elevationOf(top[0], top[1], top[2]);
        var face = Iso.directionOf(top[0] - bottom[0], top[1] - bottom[1]);
        var climb = { face: face, faceCol: Math.sign(top[0] - bottom[0]), faceRow: Math.sign(top[1] - bottom[1]), base: elevationOf(bottom[0], bottom[1], bottom[2]) };
        if (item.extra.up) {
          steps.push({ col: bottom[0], row: bottom[1], level: top[2], elevation: topElevation, climb: climb, face: face, cost: item.cost });
          steps.push({ col: top[0], row: top[1], level: top[2], elevation: topElevation, cost: 0 });
        } else {
          steps.push({ col: bottom[0], row: bottom[1], level: top[2], elevation: topElevation, cost: 0, ladderTop: true });
          steps.push({ col: bottom[0], row: bottom[1], level: bottom[2], elevation: climb.base, climb: climb, face: face, cost: item.cost });
        }
        return;
      }
      steps.push({ col: node.col, row: node.row, level: node.level, elevation: elevation, cost: item.cost });
    });
    return steps;
  }

  // сколько первых шагов пути юнит может оплатить; с колена сначала нужно встать
  function affordableSteps(unit, path) {
    var budget = unit.timeUnits - (unit.kneeling ? COST.stand : 0), steps = 0;
    for (var index = 0; index < path.length; index++) {
      if (path[index].cost > budget) break;
      budget -= path[index].cost;
      steps++;
    }
    // не останавливаться посреди лестницы: на верхней точке без подъёма
    while (steps > 0 && path[steps - 1].ladderTop) steps--;
    return steps;
  }
  function pathCost(unit, path) {
    var total = unit.kneeling ? COST.stand : 0;
    path.forEach(function (step) { total += step.cost; });
    return total;
  }

  // ---------------- двери ----------------
  // в фоне проёмы открыты; створку рисуем поверх и сдвигаем в стену, когда рядом кто-то есть
  var doors = (MAP.doors || []).map(function (door) {
    return { col: door[0], row: door[1], level: door[2], orient: door[3] === 0 ? 'W' : 'N', open: 0,
      centerX: door[3] === 0 ? door[0] : door[0] + 0.5, centerY: door[3] === 0 ? door[1] + 0.5 : door[1] };
  });
  function updateDoors(seconds) {
    doors.forEach(function (door) {
      var wanted = units.some(function (unit) {
        if (unit.level !== door.level) return false;
        var dx = unit.x - door.centerX, dy = unit.y - door.centerY;
        return dx * dx + dy * dy < DOOR_REACH * DOOR_REACH;
      }) ? 1 : 0;
      door.open += Math.max(-DOOR_SPEED * seconds, Math.min(DOOR_SPEED * seconds, wanted - door.open));
    });
  }

  // ---------------- уровни обзора и варианты картинки ----------------
  var view = { level: 0, cut: false };
  var followedLevel = -1;             // уровень обзора, под который он подстроен по выбранному юниту (followLevel)
  var variants = {};
  var shownVariant = null;

  function variantKey(level, cut) {
    var key = level + (cut ? 'c' : 'f');
    if (MAP.variants[key]) return key;
    key = level + 'f';
    return MAP.variants[key] ? key : Object.keys(MAP.variants)[0];
  }
  function depthKey(col, row, level, part) { return (col + row) * 100 + level * 10 + part; }

  function requestVariant(key) {
    if (variants[key]) return variants[key];
    var data = MAP.variants[key];
    var variant = { key: key, data: data, pieces: [], ready: false };
    variants[key] = variant;
    variant.background = new Image();
    variant.mask = data.mask ? new Image() : null;
    function tryBuild() {
      if (!variant.background.complete || !variant.background.naturalWidth) return;
      if (variant.mask && (!variant.mask.complete || !variant.mask.naturalWidth)) return;
      if (variant.ready) return;
      buildPieces(variant);
      variant.ready = true;
    }
    if (data.doorAtlas) { variant.doorAtlas = new Image(); variant.doorAtlas.src = data.doorAtlas; }
    variant.background.onload = tryBuild;
    variant.background.src = data.background;
    if (variant.mask) { variant.mask.onload = tryBuild; variant.mask.src = data.mask; }
    return variant;
  }
  // каждый кусок — свой маленький холст: фон, обрезанный маской куска
  function buildPieces(variant) {
    (variant.data.pieces || []).forEach(function (piece) {
      var width = piece[6], height = piece[7];
      var pieceCanvas = document.createElement('canvas');
      pieceCanvas.width = width; pieceCanvas.height = height;
      var pieceContext = pieceCanvas.getContext('2d');
      pieceContext.drawImage(variant.background, piece[4], piece[5], width, height, 0, 0, width, height);
      pieceContext.globalCompositeOperation = 'destination-in';
      pieceContext.drawImage(variant.mask, piece[8], piece[9], width, height, 0, 0, width, height);
      variant.pieces.push({
        col: piece[0], row: piece[1], level: piece[2], part: piece[3], x: piece[4], y: piece[5], width: width, height: height,
        canvas: pieceCanvas, depth: depthKey(piece[0], piece[1], piece[2], piece[3])
      });
    });
  }
  function setView(level, cut) {
    view.level = Math.max(0, Math.min(LEVELS - 1, level));
    view.cut = !!cut;
    if (!TILESET) {
      var variant = requestVariant(variantKey(view.level, view.cut));
      if (variant.ready || !shownVariant) shownVariant = variant;
    }
    updateLevelBar();
    updateHover();
  }

  // ---------------- карта из тайлов (как в UFO) ----------------
  // MAP.tileset: атлас тайлов и теней; слои земля, пол, стены W и N по уровням, предметы.
  // Запись тайла: [x, y, w, h, ax, ay, часть, срез, sx, sy, sw, sh, sax, say]; anchor — угол клетки на полу уровня.
  // Срез — номер тайла того же элемента, срезанного до пояса (стены и фасад текущего уровня в режиме «стены срезаны»).
  var TILESET = MAP.tileset || null;
  var tileImage = null, shadowImage = null, shadowCanvas = null, groundPieces = null, tileViews = {};
  var tileStats = { ground: 0, shadows: 0, pieces: 0 };
  if (TILESET) {
    tileImage = new Image(); tileImage.src = TILESET.image;
    shadowImage = new Image(); shadowImage.src = TILESET.shadows;
    shadowCanvas = document.createElement('canvas');
  }
  // кусок картинки тайла на месте клетки: прямоугольник в пикселях карты и в атласе
  function tilePiece(tile, col, row, level, part, shadow) {
    var entry = TILESET.list[tile];
    var offset = shadow ? 8 : 0;
    if (!entry || entry[offset] < 0) return null;
    var corner = Iso.toScreen(col, row, level * LEVEL_H);
    return {
      x: Math.round(corner.x - entry[offset + 4]), y: Math.round(corner.y - entry[offset + 5]),
      width: entry[offset + 2], height: entry[offset + 3], sx: entry[offset], sy: entry[offset + 1],
      depth: depthKey(col, row, level, part === undefined ? entry[6] : part)
    };
  }
  function cutTile(tile, level, viewLevel, cut) {
    if (!cut || level !== viewLevel) return tile;
    var alternative = TILESET.list[tile][7];
    return alternative >= 0 ? alternative : tile;
  }
  // всё, что видно при уровне обзора и срезе стен: куски по глубине и тени на земле
  function tileView(viewLevel, cut) {
    var key = viewLevel + (cut ? 'c' : 'f');
    if (tileViews[key]) return tileViews[key];
    var pieces = [], shadows = [];
    function add(tile, col, row, level) {
      if (tile < 0) return;
      var piece = tilePiece(tile, col, row, level);
      if (piece) pieces.push(piece);
      var shadow = tilePiece(tile, col, row, level, 0, true);
      if (shadow) shadows.push(shadow);
    }
    for (var level = 0; level <= viewLevel; level++) {
      for (var cell = 0; cell < GRID * GRID; cell++) add(TILESET.floor[level][cell], cell % GRID, Math.floor(cell / GRID), level);
      for (var edge = 0; edge < WALL_STRIDE * WALL_STRIDE; edge++) {
        var col = edge % WALL_STRIDE, row = Math.floor(edge / WALL_STRIDE);
        if (TILESET.wallW[level][edge] >= 0) add(cutTile(TILESET.wallW[level][edge], level, viewLevel, cut), col, row, level);
        if (TILESET.wallN[level][edge] >= 0) add(cutTile(TILESET.wallN[level][edge], level, viewLevel, cut), col, row, level);
      }
    }
    TILESET.objects.forEach(function (item) { if (item[3] <= viewLevel) add(cutTile(item[0], item[3], viewLevel, cut), item[1], item[2], item[3]); });
    pieces.sort(function (first, second) { return first.depth - second.depth; });
    // створки дверей: тот же формат, что у атласа створок прежней карты [дверь, x, y, w, h, sx, sy]
    var doorEntries = [];
    doors.forEach(function (door, index) {
      if (door.level > viewLevel) return;
      var piece = tilePiece(cutTile(TILESET.doors[index], door.level, viewLevel, cut), door.col, door.row, door.level);
      if (piece) doorEntries.push([index, piece.x, piece.y, piece.width, piece.height, piece.sx, piece.sy]);
    });
    tileViews[key] = { key: key, pieces: pieces, shadows: shadows, doors: doorEntries };
    return tileViews[key];
  }
  // прямоугольник, в который сейчас идёт отрисовка (окно или кусок кэша), в пикселях карты
  var target = { x: 0, y: 0, width: 0, height: 0 };
  function visibleRect(item) {
    return item.x < target.x + target.width && item.x + item.width > target.x && item.y < target.y + target.height && item.y + item.height > target.y;
  }
  // нарисовать work() в другой холст: context, камера и рамка отрисовки временно подменяются
  function withTarget(targetContext, x, y, width, height, work) {
    var saved = { context: context, x: camera.x, y: camera.y, target: target };
    context = targetContext; camera.x = x; camera.y = y; target = { x: x, y: y, width: width, height: height };
    try { work(); } finally { context = saved.context; camera.x = saved.x; camera.y = saved.y; target = saved.target; }
  }
  // статическая подсветка пола вида (тонировка, сетка) — входит в кэш, при перерисовке у юнитов повторяется
  function staticItems(current) {
    var key = showGrid ? 'grid' : 'plain';
    if (!current.overlays || current.overlaysKey !== key) { current.overlays = staticOverlays(); current.overlaysKey = key; }
    return current.overlays;
  }

  // Статический слой (земля, тени, все куски, тонировка пола) рисуется кусками CHUNK x CHUNK пикселей карты
  // и хранится: в кадре — только готовые куски окна. Хранится не больше CHUNK_LIMIT кусков (около 1 МБ каждый).
  var CHUNK = 512, CHUNK_LIMIT = 64;
  var chunks = new Map();
  function drawChunks(current) {
    target = { x: camera.x, y: camera.y, width: canvas.width, height: canvas.height };
    var firstX = Math.floor(camera.x / CHUNK), lastX = Math.floor((camera.x + canvas.width - 1) / CHUNK);
    var firstY = Math.floor(camera.y / CHUNK), lastY = Math.floor((camera.y + canvas.height - 1) / CHUNK);
    var viewKey = current.key + (showGrid ? 'g' : '');
    tileStats.chunksBuilt = 0;
    for (var chunkY = firstY; chunkY <= lastY; chunkY++) {
      for (var chunkX = firstX; chunkX <= lastX; chunkX++) {
        var key = viewKey + ':' + chunkX + ':' + chunkY;
        var chunk = chunks.get(key);
        if (chunk) chunks.delete(key);                 // поднять в конец очереди (недавно использованный)
        else { chunk = buildChunk(current, chunkX, chunkY); tileStats.chunksBuilt++; }
        chunks.set(key, chunk);
        context.drawImage(chunk, chunkX * CHUNK - Math.round(camera.x), chunkY * CHUNK - Math.round(camera.y));
      }
    }
    while (chunks.size > CHUNK_LIMIT) chunks.delete(chunks.keys().next().value);
    tileStats.chunks = chunks.size;
  }
  function buildChunk(current, chunkX, chunkY) {
    var chunk = document.createElement('canvas');
    chunk.width = chunk.height = CHUNK;
    withTarget(chunk.getContext('2d'), chunkX * CHUNK, chunkY * CHUNK, CHUNK, CHUNK, function () {
      drawTileGround(current);
      var list = [];
      current.pieces.forEach(function (piece) { if (visibleRect(piece)) list.push({ depth: piece.depth, piece: piece }); });
      staticItems(current).forEach(function (item) { if (visibleRect(item.rect)) list.push(item); });
      list.sort(function (first, second) { return first.depth - second.depth; });
      list.forEach(function (item) { if (item.piece) drawTilePiece(tileImage, item.piece); else item.draw(); });
    });
    return chunk;
  }
  function drawTilePiece(image, piece) {
    context.drawImage(image, piece.sx, piece.sy, piece.width, piece.height, piece.x - Math.round(camera.x), piece.y - Math.round(camera.y), piece.width, piece.height);
  }
  // земля и тени на ней: рисуются до всего остального, тени — одним слоем (объединение, без наложения)
  function drawTileGround(current) {
    if (!groundPieces) {
      groundPieces = [];
      for (var cell = 0; cell < GRID * GRID; cell++) {
        var piece = tilePiece(TILESET.ground[cell], cell % GRID, Math.floor(cell / GRID), 0);
        if (piece) groundPieces.push(piece);
      }
    }
    tileStats.ground = tileStats.shadows = 0;
    groundPieces.forEach(function (piece) { if (visibleRect(piece)) { drawTilePiece(tileImage, piece); tileStats.ground++; } });
    if (shadowCanvas.width !== target.width || shadowCanvas.height !== target.height) { shadowCanvas.width = target.width; shadowCanvas.height = target.height; }
    var shadowContext = shadowCanvas.getContext('2d');
    shadowContext.clearRect(0, 0, shadowCanvas.width, shadowCanvas.height);
    current.shadows.forEach(function (piece) {
      if (!visibleRect(piece)) return;
      shadowContext.drawImage(shadowImage, piece.sx, piece.sy, piece.width, piece.height, piece.x - Math.round(camera.x), piece.y - Math.round(camera.y), piece.width, piece.height);
      tileStats.shadows++;
    });
    // тень только на земле карты: за краем карты её нет
    context.save();
    quadPath(Iso.tileCorners(0, 0, 0, GRID));
    context.clip();
    context.globalAlpha = TILESET.shadowStrength;
    context.drawImage(shadowCanvas, 0, 0);
    context.restore();
  }
  // уровень обзора по юниту: его этаж; стены срезаются, если он в помещении
  // уровень обзора для юнита: его этаж, а на верхней ступени марша — этаж выше, куда ведёт следующий шаг.
  // Тогда курсор сразу выбирает клетки верхнего этажа.
  function followLevel(unit) {
    var run = stairRun(unit.col, unit.row, unit.level);
    if (run && unit.col === run.lastCol && unit.row === run.lastRow && unit.level + 1 < LEVELS) return unit.level + 1;
    return unit.level;
  }
  function viewFollow(unit) {
    if (!unit) return;
    followedLevel = followLevel(unit);
    setView(followedLevel, isIndoor(unit.col, unit.row, unit.level) || isIndoor(unit.col, unit.row, followedLevel));
  }

  // панель уровней в правом верхнем углу
  var levelBar = document.getElementById('levelbar');
  function updateLevelBar() {
    if (!levelBar) return;
    levelBar.querySelector('.level-number').textContent = (view.level + 1) + ' / ' + LEVELS;
    levelBar.querySelector('.walls-state').textContent = view.cut ? 'СРЕЗАНЫ' : 'ЦЕЛЫЕ';
    var marks = levelBar.querySelectorAll('.level-mark');
    for (var index = 0; index < marks.length; index++) marks[index].className = 'level-mark' + (LEVELS - 1 - index <= view.level ? ' on' : '') + (LEVELS - 1 - index === view.level ? ' current' : '');
  }
  if (levelBar) {
    if (LEVELS < 2) levelBar.style.display = 'none';
    levelBar.querySelector('.level-up').addEventListener('click', function () { setView(view.level + 1, view.cut); });
    levelBar.querySelector('.level-down').addEventListener('click', function () { setView(view.level - 1, view.cut); });
    levelBar.querySelector('.walls').addEventListener('click', function () { setView(view.level, !view.cut); });
  }

  // камера: пиксель фона, который виден в левом верхнем углу окна
  var camera = { x: 0, y: 0 };
  function centerOn(col, row, elevation) {
    var point = Iso.toScreen(col, row, elevation || 0);
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

  // ---------------- действия ----------------
  function busy() { return !selected || selected.path.length > 0; }

  function moveSelectedTo(tile) {
    if (busy() || !tile) return;
    var path = findPath(selected, tile);
    if (!path || !path.length) { if (!path) say('Туда не пройти'); return; }
    var steps = affordableSteps(selected, path);
    if (steps === 0) { say('Не хватает очков действия'); return; }
    var fullLength = path.length;
    path = path.slice(0, steps);
    selected.timeUnits -= pathCost(selected, path);
    selected.kneeling = false;
    selected.path = path;
    if (steps < fullLength) say('ОД хватит только на часть пути');
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
    if (!selected.canKneel) { say('Этот юнит не может присесть'); return; }
    var cost = selected.kneeling ? COST.stand : COST.kneel;
    if (cost > selected.timeUnits) { say('Не хватает очков действия'); return; }
    selected.timeUnits -= cost;
    selected.kneeling = !selected.kneeling;
  }

  function reload() {
    if (busy()) return;
    if (!selected.weapon) { say('Нет оружия'); return; }
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
    if (unit) viewFollow(unit);
    if (unit && center) centerOn(unit.x, unit.y, unit.elevation);
    updateHover();
  }
  function selectNext() {
    var index = selected ? units.indexOf(selected) : -1;
    selectUnit(units[(index + 1) % units.length], true);
  }

  function setFireMode(index) { if (selected) selected.fireMode = index; }

  // ---------------- мышь и клавиатура ----------------
  var mouse = { x: 0, y: 0, overView: false, dragging: false, dragStartX: 0, dragStartY: 0, cameraStartX: 0, cameraStartY: 0, moved: false };

  // клетка под курсором: сначала на текущем уровне, ниже — если там нет пола
  function insideQuad(x, y, corners) {
    var inside = false;
    for (var index = 0, previous = 3; index < 4; previous = index++) {
      var first = corners[index], second = corners[previous];
      if ((first.y > y) !== (second.y > y) && x < (second.x - first.x) * (y - first.y) / (second.y - first.y) + first.x) inside = !inside;
    }
    return inside;
  }
  function tileUnderMouse() {
    if (!mouse.overView) return null;
    var pointX = mouse.x + camera.x, pointY = mouse.y + camera.y, best = null;
    stairRuns.forEach(function (run) {
      if (run.level > view.level) return;
      run.tiles.forEach(function (tile) {
        var elevation = elevationOf(tile.col, tile.row, run.level);
        if (insideQuad(pointX, pointY, Iso.tileCorners(tile.col, tile.row, elevation)) && (!best || elevation > best.elevation)) best = { col: tile.col, row: tile.row, level: run.level, elevation: elevation };
      });
    });
    if (best) return { col: best.col, row: best.row, level: best.level };
    for (var level = view.level; level >= 0; level--) {
      var grid = Iso.toGrid(mouse.x + camera.x, mouse.y + camera.y + level * LEVEL_H * Iso.pixelsPerMeterUp);
      var col = Math.floor(grid.col), row = Math.floor(grid.row);
      if (!inside(col, row)) continue;
      if (floorAt(col, row, level) > 0) return { col: col, row: row, level: level };
    }
    return null;
  }

  function spriteRect(unit, position) {
    var name = spriteName(unit), image = images[name], anchor = SPRITE_ANCHORS[name];
    var foot = Iso.toScreen(position.x, position.y, position.elevation);
    if (!image || !anchor || !image.naturalWidth) return { x: foot.x - unit.pickWidth, y: foot.y - unit.height * Iso.pixelsPerMeterUp, width: unit.pickWidth * 2, height: unit.height * Iso.pixelsPerMeterUp };
    return { x: Math.round(foot.x - anchor[0]), y: Math.round(foot.y - anchor[1]), width: image.naturalWidth, height: image.naturalHeight };
  }

  // юнит под курсором: по прямоугольнику фигуры, ближний к зрителю важнее
  function unitUnderMouse() {
    var best = null;
    units.forEach(function (unit) {
      if (unit.level > view.level) return;
      var foot = Iso.toScreen(unit.x, unit.y, unit.elevation);
      var left = foot.x - camera.x - unit.pickWidth, right = foot.x - camera.x + unit.pickWidth;
      var top = foot.y - camera.y - unit.height * Iso.pixelsPerMeterUp, bottom = foot.y - camera.y + 8 * unit.size;
      if (mouse.x >= left && mouse.x <= right && mouse.y >= top && mouse.y <= bottom) {
        if (!best || unitDepth(unit) > unitDepth(best)) best = unit;
      }
    });
    return best;
  }

  function updateHover() {
    hoverTile = tileUnderMouse();
    hoverPath = null;
    hoverAffordable = 0;
    if (hoverTile && !busy() && !unitAt(hoverTile.col, hoverTile.row, hoverTile.level)) {
      hoverPath = findPath(selected, hoverTile);
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
    if (!clickedUnit && tile) clickedUnit = unitAt(tile.col, tile.row, tile.level);
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
    if (mouse.dragging && !mouse.moved && event.button === 2 && selected) {
      // поворот к центру рамки курсора: у робота рамка 2x2, и если она стоит на нём самом — не поворачиваться
      var tile = tileUnderMouse();
      if (tile) turnSelectedTo(tile.col + selected.size / 2, tile.row + selected.size / 2);
      else {
        var grid = Iso.toGrid(mouse.x + camera.x, mouse.y + camera.y + selected.elevation * Iso.pixelsPerMeterUp);
        turnSelectedTo(grid.col, grid.row);
      }
    }
    mouse.dragging = false;
  });

  var keys = {};
  var ACTION_KEYS = { '2': 'kneel', '4': 'reload', '7': 'next', '0': 'endTurn' };
  window.addEventListener('keydown', function (event) {
    keys[event.key] = true;
    if (event.key === 'Escape') selectUnit(null);
    if (event.key === 'g' || event.key === 'G' || event.key === 'п' || event.key === 'П') showGrid = !showGrid;
    if (event.key === 'PageUp' || event.key === 'e' || event.key === 'E' || event.key === 'у' || event.key === 'У') { event.preventDefault(); setView(view.level + 1, view.cut); }
    if (event.key === 'PageDown' || event.key === 'q' || event.key === 'Q' || event.key === 'й' || event.key === 'Й') { event.preventDefault(); setView(view.level - 1, view.cut); }
    if (event.key === 'h' || event.key === 'H' || event.key === 'р' || event.key === 'Р') setView(view.level, !view.cut);
    if (event.key === ' ' || event.key === 'Tab') { event.preventDefault(); selectNext(); }
    if (ACTION_KEYS[event.key]) Game.action(ACTION_KEYS[event.key]);
  });
  window.addEventListener('keyup', function (event) { keys[event.key] = false; });

  // ---------------- движение ----------------
  function updateUnit(unit, seconds) {
    if (!unit.path.length) return;
    var next = unit.path[0];
    // подъём или спуск по приставной лестнице: на месте, меняется только высота
    if (next.climb) {
      if (unit.segmentLength === 0) {
        unit.segmentLength = 1;
        unit.direction = next.face;
      }
      var climb = CLIMB_SPEED * seconds;
      if (Math.abs(next.elevation - unit.elevation) <= climb) {
        unit.elevation = next.elevation;
        unit.level = next.level;
        unit.path.shift();
        unit.segmentLength = 0;
        unit.walked = 0;
      } else {
        unit.elevation += next.elevation > unit.elevation ? climb : -climb;
        unit.level = Math.max(0, Math.min(LEVELS - 1, Math.floor(unit.elevation / LEVEL_H + 0.05)));
      }
      return;
    }
    // перед входом в новую клетку проверить, что она свободна
    if ((unit.col !== next.col || unit.row !== next.row || unit.level !== next.level) && unitAt(next.col, next.row, next.level, unit)) {
      unit.path = []; unit.segmentLength = 0; unit.walked = 0; unit.x = unit.col + unit.size / 2; unit.y = unit.row + unit.size / 2;
      unit.elevation = elevationOf(unit.col, unit.row, unit.level);
      return;
    }
    var targetX = next.col + unit.size / 2, targetY = next.row + unit.size / 2;
    var deltaX = targetX - unit.x, deltaY = targetY - unit.y;
    var distanceTiles = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    if (unit.segmentLength === 0) {
      // начало шага в следующую клетку: направление и длина считаются один раз
      unit.segmentLength = Math.max(distanceTiles, 1e-6);
      unit.moveCol = distanceTiles ? deltaX / distanceTiles : 0;
      unit.moveRow = distanceTiles ? deltaY / distanceTiles : 0;
      unit.stepFrom = unit.elevation;
      var direction = Iso.directionOf(deltaX, deltaY);
      if (direction >= 0) unit.direction = direction;
    }
    var stepTiles = unit.speed * seconds / Iso.tileMeters;
    if (distanceTiles <= stepTiles) {
      unit.x = targetX; unit.y = targetY;
      unit.walked += distanceTiles * Iso.tileMeters;
      unit.col = next.col; unit.row = next.row; unit.level = next.level;
      unit.elevation = next.elevation;
      unit.path.shift();
      unit.segmentLength = 0;
      if (!unit.path.length) { unit.walked = 0; if (unit === selected) viewFollow(unit); }
    } else {
      unit.x += deltaX / distanceTiles * stepTiles;
      unit.y += deltaY / distanceTiles * stepTiles;
      unit.walked += stepTiles * Iso.tileMeters;
      var progress = 1 - (distanceTiles - stepTiles) / unit.segmentLength;
      unit.elevation = unit.stepFrom + (next.elevation - unit.stepFrom) * Math.max(0, Math.min(1, progress));
      // клетка считается занятой, как только юнит прошёл половину шага
      if (distanceTiles < unit.segmentLength / 2) { unit.col = next.col; unit.row = next.row; unit.level = next.level; }
    }
  }

  // кадр лазания: по высоте над основанием лестницы, цикл 0.6 м
  function climbState(unit) {
    var climb = unit.path.length && unit.path[0].climb;
    if (!climb || unit.segmentLength === 0) return null;
    var name = unit.spriteSet + '_climb_f0_d' + unit.direction;
    if (!SPRITE_ANCHORS[name]) return null;
    var height = unit.elevation - climb.base;
    var cycles = Math.floor(height / CLIMB_STEP + 1e-6);
    var frame = Math.min(CLIMB_FRAMES - 1, Math.floor((height - cycles * CLIMB_STEP) / (CLIMB_STEP / CLIMB_FRAMES) + 1e-6));
    return { climb: climb, frame: frame, base: climb.base + cycles * CLIMB_STEP };
  }

  function spriteName(unit) {
    var climbing = climbState(unit);
    if (climbing) return unit.spriteSet + '_climb_f' + climbing.frame + '_d' + unit.direction;
    var moving = unit.path.length && !unit.path[0].climb;
    if (moving) {
      var frame = Math.floor(unit.walked / unit.frameMeters) % WALK_FRAMES;
      return unit.spriteSet + '_walk_f' + frame + '_d' + unit.direction;
    }
    return unit.spriteSet + (unit.kneeling ? '_kneelAim_d' : '_idle_d') + unit.direction;
  }

  // Фигура на экране сдвигается только при смене кадра: внутри кадра опорная нога
  // неподвижна относительно земли, поэтому ноги не скользят.
  function drawPosition(unit) {
    // на лестнице: высота кратна циклу, подъём внутри цикла — в кадре (руки и ноги не скользят по перекладинам)
    var climbing = climbState(unit);
    if (climbing) return { x: unit.x + climbing.climb.faceCol * CLIMB_SHIFT, y: unit.y + climbing.climb.faceRow * CLIMB_SHIFT, elevation: climbing.base };
    if (!unit.path.length || unit.path[0].climb) return { x: unit.x, y: unit.y, elevation: unit.elevation };
    var lagTiles = (unit.walked - Math.floor(unit.walked / unit.frameMeters) * unit.frameMeters) / Iso.tileMeters;
    return { x: unit.x - unit.moveCol * lagTiles, y: unit.y - unit.moveRow * lagTiles, elevation: unit.elevation };
  }
  // на лестнице юнит стоит перед стеной: рисуется после всех кусков своей клетки (парапет, перекрытия)
  function unitDepth(unit) {
    var climbing = unit.path.length && unit.path[0].climb;
    if (climbing) return depthKey(unit.col, unit.row, LEVELS - 1, 3.5);
    var run = stairRun(unit.col, unit.row, unit.level);
    if (run) {
      var last = depthKey(run.lastCol, run.lastRow, run.level, 1.5), first = depthKey(run.tiles[0].col, run.tiles[0].row, run.level, 1.5);
      return Math.max(last, first, depthKey(unit.col, unit.row, unit.level, 3.5));
    }
    return depthKey(unit.col, unit.row, unit.level, 3.5) + (unit.size - 1) * 100;
  }

  // ---------------- отрисовка ----------------
  function line(first, second) {
    context.moveTo(first.x - camera.x, first.y - camera.y);
    context.lineTo(second.x - camera.x, second.y - camera.y);
  }
  // граница пола уровня: стороны клетки, за которыми на этом уровне пола нет
  var boundaryCache = {};
  function boundaryEdges(level) {
    if (boundaryCache[level]) return boundaryCache[level];
    var edges = {};
    for (var row = 0; row < GRID; row++) {
      for (var col = 0; col < GRID; col++) {
        if (!floorAt(col, row, level)) continue;
        // стороны: 0 — к row-1, 1 — к col+1, 2 — к row+1, 3 — к col-1 (по углам ромба 0-1, 1-2, 2-3, 3-0)
        var sides = [!floorAt(col, row - 1, level), !floorAt(col + 1, row, level), !floorAt(col, row + 1, level), !floorAt(col - 1, row, level)];
        if (sides[0] || sides[1] || sides[2] || sides[3]) edges[row * GRID + col] = sides;
      }
    }
    boundaryCache[level] = edges;
    return edges;
  }
  function quadPath(corners) {
    context.beginPath();
    context.moveTo(corners[0].x - camera.x, corners[0].y - camera.y);
    for (var index = 1; index < 4; index++) context.lineTo(corners[index].x - camera.x, corners[index].y - camera.y);
    context.closePath();
  }
  function quadRect(corners, pad) {
    var xs = corners.map(function (point) { return point.x; }), ys = corners.map(function (point) { return point.y; });
    var left = Math.min.apply(null, xs) - pad, top = Math.min.apply(null, ys) - pad;
    return { x: left, y: top, width: Math.max.apply(null, xs) + pad - left, height: Math.max.apply(null, ys) + pad - top };
  }
  // элементы подсветки на полу: рисуются в общем порядке глубины, стены и предметы впереди их закрывают
  // тонировка пола верхнего уровня и сетка: не меняются, пока не сменится уровень обзора или сетка
  function staticOverlays() {
    var items = [];
    var level = view.level;
    var tint = level > 0, edges = boundaryEdges(level);
    if (tint || showGrid) {
      for (var row = 0; row < GRID; row++) {
        for (var col = 0; col < GRID; col++) {
          if (!floorAt(col, row, level)) continue;
          var sides = edges[row * GRID + col];
          if (!tint && !showGrid) continue;
          (function (col, row, sides) {
            var corners = Iso.tileCorners(col, row, elevationOf(col, row, level));
            items.push({ depth: depthKey(col, row, level, 1.2), rect: quadRect(corners, 3), draw: function () {
              if (tint) { quadPath(corners); context.fillStyle = 'rgba(120, 205, 255, 0.15)'; context.fill(); }
              if (showGrid) {
                quadPath(corners);
                context.strokeStyle = 'rgba(10, 20, 6, 0.28)'; context.lineWidth = 2; context.stroke();
                context.strokeStyle = 'rgba(235, 245, 215, 0.3)'; context.lineWidth = 1; context.stroke();
              }
              if (tint && sides) {
                context.strokeStyle = 'rgba(140, 220, 255, 0.95)';
                context.lineWidth = 2.5;
                for (var side = 0; side < 4; side++) {
                  if (!sides[side]) continue;
                  var first = corners[side], second = corners[(side + 1) % 4];
                  context.beginPath();
                  context.moveTo(first.x - camera.x, first.y - camera.y);
                  context.lineTo(second.x - camera.x, second.y - camera.y);
                  context.stroke();
                }
              }
            } });
          })(col, row, sides);
        }
      }
    }
    return items;
  }
  function floorOverlays() {
    var items = [];
    // клетка выбранного юнита
    if (selected && selected.level <= view.level && !selected.path.length) {
      var unitCorners = Iso.tileCorners(selected.col, selected.row, elevationOf(selected.col, selected.row, selected.level), selected.size);
      items.push({ depth: depthKey(selected.col, selected.row, selected.level, 1.3), rect: quadRect(unitCorners, 3), draw: function () {
        quadPath(unitCorners);
        context.fillStyle = 'rgba(255, 210, 60, 0.16)'; context.fill();
        context.strokeStyle = 'rgba(255, 210, 60, 0.85)'; context.lineWidth = 1.6; context.stroke();
      } });
    }
    // клетка под курсором
    if (hoverTile) {
      var size = selected ? selected.size : 1;
      var hoverCorners = Iso.tileCorners(hoverTile.col, hoverTile.row, elevationOf(hoverTile.col, hoverTile.row, hoverTile.level), size);
      var reachable = busy() || (hoverPath && hoverAffordable > 0) || unitAt(hoverTile.col, hoverTile.row, hoverTile.level);
      items.push({ depth: depthKey(hoverTile.col, hoverTile.row, hoverTile.level, 1.4), rect: quadRect(hoverCorners, 3), draw: function () {
        quadPath(hoverCorners);
        context.fillStyle = reachable ? 'rgba(255, 255, 255, 0.22)' : 'rgba(255, 90, 70, 0.25)'; context.fill();
        context.strokeStyle = reachable ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 110, 90, 0.95)'; context.lineWidth = 2; context.stroke();
      } });
    }
    return items;
  }

  // отвес от клетки на верхнем уровне до земли: видно, над какой клеткой земли курсор
  function drawDropLine(tile) {
    var elevation = elevationOf(tile.col, tile.row, tile.level);
    if (elevation < 0.3) return;
    var top = Iso.toScreen(tile.col + 0.5, tile.row + 0.5, elevation), bottom = Iso.toScreen(tile.col + 0.5, tile.row + 0.5, 0);
    context.save();
    context.setLineDash([4, 4]);
    context.strokeStyle = 'rgba(255, 255, 255, 0.55)';
    context.lineWidth = 1.2;
    context.beginPath();
    context.moveTo(top.x - camera.x, top.y - camera.y);
    context.lineTo(bottom.x - camera.x, bottom.y - camera.y);
    context.stroke();
    context.setLineDash([]);
    context.beginPath();
    context.ellipse(bottom.x - camera.x, bottom.y - camera.y, 7, 4, 0, 0, Math.PI * 2);
    context.stroke();
    context.restore();
  }

  // рамка-курсор: клетка на полу и такая же над ней, соединённые рёбрами
  function drawBox(tile, color, part, size) {
    size = size || 1;
    var base = elevationOf(tile.col, tile.row, tile.level);
    var height = size > 1 ? BOX_HEIGHT * 2 : BOX_HEIGHT;
    var bottom = Iso.tileCorners(tile.col, tile.row, base, size), top = Iso.tileCorners(tile.col, tile.row, base + height, size);
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

  function drawSprite(name, col, row, elevation) {
    var image = images[name], anchor = SPRITE_ANCHORS[name];
    if (!image || !image.complete || !anchor) return;
    var foot = Iso.toScreen(col, row, elevation || 0);
    context.drawImage(image, Math.round(foot.x - camera.x - anchor[0]), Math.round(foot.y - camera.y - anchor[1]));
  }

  // маршрут: доступная часть голубая, на остальную не хватает ОД — оранжевая
  function drawPath() {
    if (!hoverPath || !hoverPath.length) return;
    context.save();
    hoverPath.forEach(function (step, index) {
      if (step.ladderTop) return;
      var point = Iso.toScreen(step.col + selected.size / 2, step.row + selected.size / 2, step.elevation);
      var last = index === hoverPath.length - 1;
      context.fillStyle = index < hoverAffordable ? 'rgba(120, 230, 255, 0.85)' : 'rgba(255, 170, 60, 0.9)';
      context.beginPath();
      if (step.climb) context.rect(point.x - camera.x - 4, point.y - camera.y - 4, 8, 8);
      else context.ellipse(point.x - camera.x, point.y - camera.y, last ? 9 : 4, last ? 5 : 2.4, 0, 0, Math.PI * 2);
      context.fill();
    });
    context.restore();
  }

  function drawPathLabel() {
    if (!hoverPath || !hoverPath.length) return;
    var cost = pathCost(selected, hoverPath);
    var enough = hoverAffordable === hoverPath.length;
    var end = hoverPath[hoverPath.length - 1];
    var label = Iso.toScreen(end.col + selected.size / 2, end.row + selected.size / 2, end.elevation + Math.max(BOX_HEIGHT, selected.height) + 0.25);
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
    var head = Iso.toScreen(position.x, position.y, position.elevation + (unit.kneeling && !unit.path.length ? 1.6 : unit.height + 0.3));
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

  // створка: entry = [дверь, x, y, w, h, sx, sy] — место на карте и в атласе; cutLevel — срезанный уровень или -1
  function drawDoor(atlas, entry, cutLevel) {
    var door = doors[entry[0]];
    if (!door || !atlas || !atlas.complete) return;
    var tile = Iso.tileMeters;
    var cut = cutLevel === door.level;
    var top = cut ? 0.8 : 2.12;
    var base = door.level * LEVEL_H;
    var left = (tile - DOOR_WIDTH) / 2 / tile - 0.02, right = (tile + DOOR_WIDTH) / 2 / tile + 0.02;
    // точка в плоскости стены: along — доля клетки вдоль грани, across — сдвиг поперёк, height — м
    function wallPoint(along, across, height) {
      return door.orient === 'W' ? Iso.toScreen(door.col + across, door.row + along, base + height) : Iso.toScreen(door.col + along, door.row + across, base + height);
    }
    var slide = door.open * (DOOR_WIDTH + 0.04) / tile;
    var start = wallPoint(0, 0, 0), shifted = wallPoint(slide, 0, 0);
    context.save();
    context.beginPath();
    [-0.04, 0.04].forEach(function (across) {
      var corners = [wallPoint(left, across, -0.03), wallPoint(right, across, -0.03), wallPoint(right, across, top), wallPoint(left, across, top)];
      context.moveTo(corners[0].x - camera.x, corners[0].y - camera.y);
      for (var index = 1; index < 4; index++) context.lineTo(corners[index].x - camera.x, corners[index].y - camera.y);
      context.closePath();
    });
    context.clip();
    context.drawImage(atlas, entry[5], entry[6], entry[3], entry[4],
      Math.round(entry[1] + shifted.x - start.x - camera.x), Math.round(entry[2] + shifted.y - start.y - camera.y), entry[3], entry[4]);
    context.restore();
  }

  function overlaps(rect, piece) {
    return rect.x < piece.x + piece.width && rect.x + rect.width > piece.x && rect.y < piece.y + piece.height && rect.y + rect.height > piece.y;
  }

  function render() {
    context.fillStyle = '#141210';
    context.fillRect(0, 0, canvas.width, canvas.height);
    if (TILESET) { renderTiles(); return; }
    // показываем вариант, как только он готов; до этого — прежний
    var wanted = variants[variantKey(view.level, view.cut)];
    if (wanted && wanted.ready) shownVariant = wanted;
    if (shownVariant && shownVariant.background.complete) context.drawImage(shownVariant.background, -Math.round(camera.x), -Math.round(camera.y));

    var hoverReachable = hoverTile && (busy() || (hoverPath && hoverAffordable > 0) || unitAt(hoverTile.col, hoverTile.row, hoverTile.level));
    var hoverColor = hoverReachable ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 90, 70, 0.9)';
    // рамка-куб — это только курсор мыши; выбранного бойца отмечает стрелка.
    // Для робота рамка охватывает всю его площадку 2x2.
    var boxSize = selected ? selected.size : 1;
    // объекты по глубине: диагональ клетки (col + row), затем уровень, затем часть клетки
    var drawList = [];
    var rects = [];
    staticOverlays().forEach(function (item) { rects.push(item.rect); drawList.push(item); });
    floorOverlays().forEach(function (item) { rects.push(item.rect); drawList.push(item); });
    if (hoverTile) drawList.push({ depth: depthKey(hoverTile.col, hoverTile.row, hoverTile.level, 1.45), draw: function () { drawBox(hoverTile, hoverColor, 'back', boxSize); } });
    drawList.push({ depth: -1, draw: drawPath });
    units.forEach(function (unit) {
      if (unit.level > view.level) return;          // выше уровня обзора — не видно
      var position = drawPosition(unit);
      rects.push(spriteRect(unit, position));
      drawList.push({ depth: unitDepth(unit), draw: function () { drawSprite(spriteName(unit), position.x, position.y, position.elevation); } });
    });
    obstacles.forEach(function (rock) { drawList.push({ depth: depthKey(rock.col, rock.row, 0, 4), draw: function () { drawSprite(rock.sprite, rock.col + 0.5, rock.row + 0.5); } }); });
    if (shownVariant && shownVariant.ready) {
      shownVariant.pieces.forEach(function (piece) {
        for (var index = 0; index < rects.length; index++) {
          if (overlaps(rects[index], piece)) {
            drawList.push({ depth: piece.depth, draw: function () { context.drawImage(piece.canvas, piece.x - Math.round(camera.x), piece.y - Math.round(camera.y)); } });
            return;
          }
        }
      });
    }
    if (shownVariant && shownVariant.ready && shownVariant.data.doors) {
      shownVariant.data.doors.forEach(function (entry) {
        var door = doors[entry[0]];
        if (!door || door.open > 0.995) return;
        var cutLevel = shownVariant.key.charAt(1) === 'c' ? Number(shownVariant.key.charAt(0)) : -1;
        drawList.push({ depth: depthKey(door.col, door.row, door.level, door.orient === 'W' ? 2.05 : 3.05), draw: function () { drawDoor(shownVariant.doorAtlas, entry, cutLevel); } });
      });
    }
    drawList.sort(function (first, second) { return first.depth - second.depth; });
    drawList.forEach(function (item) { item.draw(); });

    if (selected && selected.level <= view.level) drawSelectionMarker(selected);
    drawPathLabel();
    if (hoverTile) { drawBox(hoverTile, hoverColor, 'front', boxSize); drawDropLine(hoverTile); }
  }

  // Карта из тайлов: статический слой — готовые куски кэша. Подвижное (юниты, створки, подсветка курсора)
  // собирается в группы по перекрытию прямоугольников; в рамке группы поверх кэша рисуются по глубине
  // подвижные элементы и все куски ближе самого дальнего из них. Дальние куски уже есть в кэше под ними,
  // а за рамку ничего не выходит, поэтому ближние куски вне группы не страдают.
  function renderTiles() {
    var current = tileView(view.level, view.cut);
    if (!tileImage.complete || !shadowImage.complete) return;
    drawChunks(current);
    var hoverReachable = hoverTile && (busy() || (hoverPath && hoverAffordable > 0) || unitAt(hoverTile.col, hoverTile.row, hoverTile.level));
    var hoverColor = hoverReachable ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 90, 70, 0.9)';
    var boxSize = selected ? selected.size : 1;

    var dynamic = floorOverlays();
    if (hoverTile) {
      var base = elevationOf(hoverTile.col, hoverTile.row, hoverTile.level), boxHeight = boxSize > 1 ? BOX_HEIGHT * 2 : BOX_HEIGHT;
      var boxCorners = Iso.tileCorners(hoverTile.col, hoverTile.row, base, boxSize).concat(Iso.tileCorners(hoverTile.col, hoverTile.row, base + boxHeight, boxSize));
      dynamic.push({ depth: depthKey(hoverTile.col, hoverTile.row, hoverTile.level, 1.45), rect: quadRect(boxCorners, 3), draw: function () { drawBox(hoverTile, hoverColor, 'back', boxSize); } });
    }
    units.forEach(function (unit) {
      if (unit.level > view.level) return;
      var position = drawPosition(unit);
      dynamic.push({ depth: unitDepth(unit), rect: spriteRect(unit, position), draw: function () { drawSprite(spriteName(unit), position.x, position.y, position.elevation); } });
    });
    current.doors.forEach(function (entry) {
      var door = doors[entry[0]];
      if (!door || door.open > 0.995) return;
      var cutLevel = view.cut ? view.level : -1;
      dynamic.push({ depth: depthKey(door.col, door.row, door.level, door.orient === 'W' ? 2.05 : 3.05), rect: { x: entry[1], y: entry[2], width: entry[3], height: entry[4] },
        draw: function () { drawDoor(tileImage, entry, cutLevel); } });
    });

    // группы по перекрытию: рамка группы — общий прямоугольник её элементов
    var groups = [];
    dynamic.forEach(function (item) {
      if (!visibleRect(item.rect)) return;
      var group = { rect: { x: item.rect.x, y: item.rect.y, width: item.rect.width, height: item.rect.height }, items: [item] };
      for (var merged = true; merged;) {
        merged = false;
        for (var index = groups.length - 1; index >= 0; index--) {
          if (!overlaps(groups[index].rect, group.rect)) continue;
          var other = groups.splice(index, 1)[0];
          var left = Math.min(group.rect.x, other.rect.x), top = Math.min(group.rect.y, other.rect.y);
          var right = Math.max(group.rect.x + group.rect.width, other.rect.x + other.rect.width), bottom = Math.max(group.rect.y + group.rect.height, other.rect.y + other.rect.height);
          group.rect = { x: left, y: top, width: right - left, height: bottom - top };
          group.items = group.items.concat(other.items);
          merged = true;
        }
      }
      groups.push(group);
    });
    tileStats.pieces = 0;
    var overlays = staticItems(current);
    groups.forEach(function (group) {
      var threshold = Infinity;
      group.items.forEach(function (item) { threshold = Math.min(threshold, item.depth); });
      var list = group.items.slice();
      current.pieces.forEach(function (piece) { if (piece.depth > threshold && overlaps(group.rect, piece)) { list.push({ depth: piece.depth, piece: piece }); tileStats.pieces++; } });
      overlays.forEach(function (item) { if (item.depth > threshold && overlaps(group.rect, item.rect)) list.push(item); });
      list.sort(function (first, second) { return first.depth - second.depth; });
      context.save();
      context.beginPath();
      context.rect(Math.floor(group.rect.x - camera.x), Math.floor(group.rect.y - camera.y), Math.ceil(group.rect.width) + 1, Math.ceil(group.rect.height) + 1);
      context.clip();
      list.forEach(function (item) { if (item.piece) drawTilePiece(tileImage, item.piece); else item.draw(); });
      context.restore();
    });

    drawPath();
    if (selected && selected.level <= view.level) drawSelectionMarker(selected);
    drawPathLabel();
    if (hoverTile) { drawBox(hoverTile, hoverColor, 'front', boxSize); drawDropLine(hoverTile); }
  }

  // ---------------- связь с панелью ----------------
  var Game = window.Game = {
    COST: COST, MAGAZINE: MAGAZINE, FIRE_MODES: FIRE_MODES, GRID: GRID,
    units: units, obstacles: obstacles, camera: camera, KINDS: KINDS,
    get selected() { return selected; },
    get turn() { return turn; },
    get message() { return Date.now() < message.until ? message.text : ''; },
    get busy() { return busy(); },
    get view() { return view; },
    viewSize: function () { return { width: canvas.width, height: canvas.height }; },
    // замер отрисовки: средняя длительность кадра и число нарисованных кусков (для проверки карты из тайлов)
    benchmark: function (frames) {
      var started = performance.now();
      // getImageData дожидается растеризации: без него замер покажет только запись команд холста
      for (var index = 0; index < frames; index++) { render(); context.getImageData(0, 0, 1, 1); }
      return { milliseconds: (performance.now() - started) / frames, pieces: tileStats.pieces, chunks: tileStats.chunks };
    },
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
    updateDoors(seconds);
    // выбранный юнит сменил этаж (лестница) — обзор переходит на его уровень
    if (selected && followLevel(selected) !== followedLevel) viewFollow(selected);
    if (wasMoving) updateHover();
    render();
    if (window.Panel) window.Panel.update();
    window.requestAnimationFrame(frame);
  }

  resize();
  setView(selected.level, false);
  centerOn(selected.x, selected.y - 2);
  window.requestAnimationFrame(frame);

  // для автотеста
  window.__game = {
    units: units, camera: camera, view: view, select: function (index) { selectUnit(units[index], false); }, drawPosition: drawPosition,
    clickTile: function (col, row, level) {
      var point = Iso.toScreen(col + 0.5, row + 0.5, elevationOf(col, row, level || 0));
      return { x: point.x - camera.x, y: point.y - camera.y };
    },
    doors: doors, setView: setView, findPath: function (index, col, row, level) { return findPath(units[index], { col: col, row: row, level: level }); },
    centerOn: centerOn, variantReady: function () { if (TILESET) return tileImage.complete; var variant = variants[variantKey(view.level, view.cut)]; return !!(variant && variant.ready); }
  };
})();
