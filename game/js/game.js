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
    Object.keys(profile).forEach(function (key) { if (key !== 'loadout') unit[key] = profile[key]; });
    if (profile.loadout) equip(unit, profile.loadout);
    else unit.magazine = unit.weaponType ? Combat.WEAPONS[unit.weaponType].magazine : 0;
    unit.timeUnits = turnTimeUnits(unit);
    return unit;
  }

  // ---------------- снаряжение (как в UFO) ----------------
  // У бойцов и пришельцев снаряжение — предметы в ячейках (js/items.js). Оружие — предмет в правой (или левой) руке:
  // от него берутся тип оружия, патроны в магазине и ёмкость; запас — магазины к нему в остальных ячейках.
  // У K7 снаряжения нет: пушка и лента — свойства машины.
  function equip(unit, loadout) {
    unit.inventory = [];
    loadout.forEach(function (entry) {
      var item = Items.make(entry[0], entry[2]);
      var spot = Items.freeSpot(unit.inventory, entry[1], item);
      if (spot) unit.inventory.push({ item: item, slot: entry[1], x: spot.x, y: spot.y });
    });
    // оружие — из руки, выбранной в меню режима огня (unit.activeHand), иначе из правой, иначе из левой
    var weaponEntry = function () {
      var order = unit.activeHand === 'leftHand' ? ['leftHand', 'rightHand'] : ['rightHand', 'leftHand'];
      for (var orderIndex = 0; orderIndex < order.length; orderIndex++) {
        for (var index = 0; index < unit.inventory.length; index++) {
          var entry = unit.inventory[index];
          if (entry.slot === order[orderIndex] && Items.info(entry.item).weapon) return entry;
        }
      }
      return null;
    };
    var fromWeapon = function (read, empty) { return { configurable: true, get: function () { var entry = weaponEntry(); return entry ? read(entry.item) : empty; } }; };
    Object.defineProperties(unit, {
      weaponType: fromWeapon(function (item) { return Items.info(item).weapon; }, null),
      weapon: fromWeapon(function (item) { return Items.info(item).name; }, null),
      weaponNote: fromWeapon(function (item) { return Items.info(item).note; }, ''),
      weaponImage: fromWeapon(function (item) { return Items.info(item).image; }, null),
      magazine: fromWeapon(function (item) { return Items.capacity(item); }, 0),
      ammoType: fromWeapon(function (item) { return Items.info(item).ammo; }, null),
      ammo: { configurable: true, get: function () { var entry = weaponEntry(); return entry ? entry.item.rounds : 0; },
        set: function (value) { var entry = weaponEntry(); if (entry) entry.item.rounds = value; } },
      reserve: fromWeapon(function (item) { var ammo = Items.info(item).ammo; return unit.inventory.filter(function (entry) { return entry.item.type === ammo; }).length; }, 0)
    });
  }
  function carriedWeight(unit) { return unit.inventory ? Items.weightOf(unit.inventory) : 0; }
  // ОД в начале хода: перегруз (вес больше силы) уменьшает их на величину превышения
  function overload(unit) { return unit.inventory && unit.strength ? Math.max(0, carriedWeight(unit) - unit.strength) : 0; }
  function turnTimeUnits(unit) { return Math.max(0, unit.maxTimeUnits - overload(unit)); }

  // предметы на земле: по клеткам, у каждого место в сетке земли экрана снаряжения
  var groundItems = {};
  function groundKey(col, row, level) { return level + ':' + col + ':' + row; }
  function groundAt(col, row, level) {
    var key = groundKey(col, row, level);
    if (!groundItems[key]) groundItems[key] = [];
    return groundItems[key];
  }
  function dropOnGround(item, col, row, level) {
    var ground = groundAt(col, row, level);
    var spot = Items.freeSpot(ground, 'ground', item);
    if (!spot) {                                   // сетка земли заполнена: ещё ряд ниже
      var rows = Math.max.apply(null, ground.map(function (entry) { return entry.y + Items.info(entry.item).h; }).concat([0]));
      spot = { x: 0, y: rows };
    }
    ground.push({ item: item, slot: 'ground', x: spot.x, y: spot.y });
  }
  // переносить можно в свой ход, стоя на месте, когда не летят пули
  function inventoryActive(unit) { return unit.side === 'squad' && phase === 'squad' && !unit.path.length && !shots.length && !unit.dead; }
  function findItem(unit, itemId) {
    var lists = [unit.inventory, groundAt(unit.col, unit.row, unit.level)];
    for (var index = 0; index < lists.length; index++) {
      for (var entryIndex = 0; entryIndex < lists[index].length; entryIndex++) {
        if (lists[index][entryIndex].item.id === itemId) return { list: lists[index], entry: lists[index][entryIndex] };
      }
    }
    return null;
  }
  function moveItem(unit, itemId, toSlot, x, y) {
    if (!unit.inventory) return { ok: false, message: 'У машины нет снаряжения' };
    if (!inventoryActive(unit)) return { ok: false, message: phase !== 'squad' ? 'Сейчас ход пришельцев' : 'Дождитесь окончания действия' };
    var found = findItem(unit, itemId);
    if (!found) return { ok: false, message: 'Предмет не найден' };
    var target = toSlot === 'ground' ? groundAt(unit.col, unit.row, unit.level) : unit.inventory;
    if (!Items.fits(target, toSlot, found.entry.item, x, y, found.entry.item)) return { ok: false, message: 'Не помещается' };
    var cost = Items.moveCost(found.entry.slot, toSlot);
    if (cost > unit.timeUnits) return { ok: false, message: 'Не хватает очков действия: нужно ' + cost };
    unit.timeUnits -= cost;
    found.list.splice(found.list.indexOf(found.entry), 1);
    found.entry.slot = toSlot; found.entry.x = x; found.entry.y = y;
    target.push(found.entry);
    if (aiming && unit === selected && !weaponOf(unit)) cancelAim();
    return { ok: true, cost: cost };
  }
  var PROFILES = [
    { name: 'Андрей Волков', callsign: 'ВОРОН-1', rank: 'ст. сержант', role: 'ШТУРМОВИК', missions: 14, camo: 'black',
      side: 'squad', accuracy: 64, reactions: 55, strength: 38, bravery: 50, throwing: 58, armor: 10,
      maxTimeUnits: 56, health: 38, maxHealth: 45, stamina: 61, maxStamina: 70, morale: 88, optics: 'ПНВ',
      loadout: [['carbine', 'rightHand', 28], ['carbineMag', 'belt'], ['carbineMag', 'belt'], ['carbineMag', 'belt'], ['carbineMag', 'belt'],
        ['grenade', 'rightShoulder'], ['grenade', 'rightShoulder'], ['medkit', 'backpack']] },
    { name: 'Ирина Соколова', callsign: 'ВОРОН-2', rank: 'сержант', role: 'СТРЕЛОК', missions: 9, camo: 'green',
      side: 'squad', accuracy: 72, reactions: 64, strength: 32, bravery: 60, throwing: 64, armor: 8,
      maxTimeUnits: 60, health: 41, maxHealth: 41, stamina: 66, maxStamina: 66, morale: 92, optics: 'ОЧКИ',
      loadout: [['carbineM', 'rightHand', 30], ['carbineMag', 'belt'], ['carbineMag', 'belt'], ['carbineMag', 'belt'], ['carbineMag', 'belt'],
        ['carbineMag', 'leftLeg'], ['grenade', 'leftShoulder']] },
    { name: 'Тимур Ахметов', callsign: 'ВОРОН-3', rank: 'мл. сержант', role: 'ПУЛЕМЁТЧИК', missions: 11, camo: 'green',
      side: 'squad', accuracy: 58, reactions: 46, strength: 46, bravery: 70, throwing: 52, armor: 12,
      maxTimeUnits: 52, health: 50, maxHealth: 52, stamina: 74, maxStamina: 80, morale: 79, optics: 'ОЧКИ',
      loadout: [['carbineM', 'rightHand', 17], ['carbineMag', 'belt'], ['carbineMag', 'belt'], ['carbineMag', 'belt'],
        ['medkit', 'backpack'], ['grenade', 'backpack'], ['grenade', 'backpack']] },
    { name: 'Олег Ржевский', callsign: 'ВОРОН-4', rank: 'ефрейтор', role: 'РАЗВЕДЧИК', missions: 6, camo: 'black',
      side: 'squad', accuracy: 66, reactions: 72, strength: 30, bravery: 40, throwing: 70, armor: 8,
      maxTimeUnits: 62, health: 33, maxHealth: 40, stamina: 58, maxStamina: 64, morale: 71, optics: 'ПНВ',
      loadout: [['carbine', 'rightHand', 30], ['carbineMag', 'belt'], ['carbineMag', 'belt'], ['grenade', 'rightShoulder']] },
    // пришельцы: ходят и стреляют сами (простой ИИ в фазе пришельцев)
    { kind: 'alien', name: 'Страж, особь 1', callsign: 'ЦЕЛЬ-1', rank: 'страж', subtitle: 'ПРИШЕЛЕЦ · УПРАВЛЯЕТ ИИ', camo: 'alien',
      side: 'aliens', accuracy: 60, reactions: 50, strength: 50, bravery: 80, throwing: 50, armor: 6,
      maxTimeUnits: 64, health: 58, maxHealth: 58, stamina: 90, maxStamina: 90, morale: 100, optics: 'РАЗГРУЗКА',
      loadout: [['plasmaPistol', 'rightHand', 20], ['energyCell', 'belt'], ['energyCell', 'belt']] },
    { kind: 'alien', name: 'Страж, особь 2', callsign: 'ЦЕЛЬ-2', rank: 'страж', subtitle: 'ПРИШЕЛЕЦ · УПРАВЛЯЕТ ИИ', camo: 'alien',
      side: 'aliens', accuracy: 60, reactions: 50, strength: 50, bravery: 80, throwing: 50, armor: 6,
      maxTimeUnits: 64, health: 52, maxHealth: 58, stamina: 84, maxStamina: 90, morale: 100, optics: 'РАЗГРУЗКА',
      loadout: [['plasmaPistol', 'rightHand', 20], ['energyCell', 'belt'], ['energyCell', 'belt']] },
    { kind: 'mech', name: 'Шагающая машина K7', callsign: 'K7', rank: 'машина', subtitle: 'ПОДДЕРЖКА · ЗАНИМАЕТ 2×2 КЛЕТКИ', camo: 'mech',
      side: 'squad', accuracy: 62, reactions: 38, armor: 30, weaponType: 'autocannon',
      weapon: 'АВТОПУШКА АП-30', weaponNote: 'КАЛИБР 30 ММ · ЛЕНТА', ammo: 40, reserve: 3,
      maxTimeUnits: 48, health: 180, maxHealth: 180, stamina: 100, maxStamina: 100, morale: 100, optics: 'ТЕПЛОВИЗОР',
      statLabels: ['ОЧКИ ДЕЙСТВИЯ', 'КОРПУС', 'ЭНЕРГИЯ', 'СВЯЗЬ'] }
  ];
  var units = PROFILES.map(function (profile, index) { return makeUnit(profile, MAP.spawns[index]); });
  // на земле рядом с отрядом: ящик с запасом — магазины, аптечка, граната
  (function () {
    var first = units[0];
    for (var radius = 1; radius < 4; radius++) {
      for (var dy = -radius; dy <= radius; dy++) for (var dx = -radius; dx <= radius; dx++) {
        var col = first.col + dx, row = first.row + dy;
        if (Math.max(Math.abs(dx), Math.abs(dy)) !== radius || dx + dy <= 0 || !walkable(col, row, first.level)) continue;   // перед отрядом, не за спинами
        // ни на клетке, ни на клетке перед ней (её фигура закрыла бы предметы) нет юнита
        var taken = function (testCol, testRow) { return units.some(function (unit) { return testCol >= unit.col && testCol < unit.col + unit.size && testRow >= unit.row && testRow < unit.row + unit.size; }); };
        if (taken(col, row) || taken(col + 1, row + 1)) continue;
        ['carbineMag', 'carbineMag', 'medkit', 'grenade'].forEach(function (type) { dropOnGround(Items.make(type), col, row, first.level); });
        return;
      }
    }
  })();
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
          if (!walkable(cellCol, cellRow, level) || unitAt(cellCol, cellRow, level, mover) || wreckAt(cellCol, cellRow, level)) return false;
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
  // Обстановка: мирная — бойцы на своей базе или на посту, стоящие юниты в стойке «вольно» (если у набора
  // спрайтов она есть); боевая — стойка с оружием наготове. Задаётся картой (MAP.combat), по умолчанию боевая;
  // переключается клавишей T.
  var combat = MAP.combat !== false;
  var indoorWatch = { unit: null, state: '' };   // помещение выбранного бойца: смена — срез стен
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
  function busy() { return !selected || selected.path.length > 0 || shots.length > 0 || throws.length > 0 || phase !== 'squad'; }

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
    if (selected.ammo >= selected.magazine) { say('Магазин полон'); return; }
    if (selected.reserve <= 0) { say('Нет запасных магазинов'); return; }
    if (!selected.inventory) {                       // K7: лента пушки
      if (COST.reload > selected.timeUnits) { say('Не хватает очков действия'); return; }
      selected.timeUnits -= COST.reload;
      selected.reserve--;
      selected.ammo = selected.magazine;
      return;
    }
    // магазин из ближней ячейки: 15 ОД плюс цена «достать»; остаток патронов — обратно магазином на его место
    var ammoType = selected.ammoType;
    var source = null;
    Items.RELOAD_ORDER.some(function (slot) {
      source = selected.inventory.filter(function (entry) { return entry.slot === slot && entry.item.type === ammoType; })
        .sort(function (first, second) { return second.item.rounds - first.item.rounds; })[0] || null;
      return !!source;
    });
    var cost = COST.reload + Items.SLOTS[source.slot].take;
    if (cost > selected.timeUnits) { say('Не хватает очков действия: перезарядка ' + cost + ' ОД'); return; }
    selected.timeUnits -= cost;
    var left = selected.ammo;
    selected.ammo = source.item.rounds;
    if (left > 0) source.item.rounds = left;
    else selected.inventory.splice(selected.inventory.indexOf(source), 1);
    say('Перезарядка: ' + cost + ' ОД');
  }

  // ---------------- руки: предмет, меню действий (режимы огня, бросок) ----------------
  function handEntry(unit, slot) {
    if (!unit || !unit.inventory) return null;
    for (var index = 0; index < unit.inventory.length; index++) if (unit.inventory[index].slot === slot) return unit.inventory[index];
    return null;
  }
  // что показать в ячейке руки на панели. У K7 — автопушка в «правой руке».
  function handView(unit, slot) {
    if (!unit) return null;
    if (!unit.inventory) {
      if (slot !== 'rightHand' || !unit.weaponType) return null;
      return { key: 'mech:' + unit.ammo + ':' + unit.reserve, name: unit.weapon, note: unit.weaponNote, rounds: unit.ammo, capacity: unit.magazine, reserve: unit.reserve,
        draw: function (context, x, y, width, height) { Items.drawImage(context, 'assets/ui/weapon_mech.png', [57, 138, 303, 53], x, y, width, height); },
        ready: function () { var image = Items.imageOf('assets/ui/weapon_mech.png'); return image.complete && image.naturalWidth > 0; } };
    }
    var entry = handEntry(unit, slot);
    if (!entry) return null;
    var info = Items.info(entry.item), weapon = !!info.weapon;
    var reserve = weapon ? unit.inventory.filter(function (other) { return other.item.type === info.ammo; }).length : null;
    return { key: entry.item.id + ':' + entry.item.rounds + ':' + reserve, name: info.name, note: info.note, rounds: entry.item.rounds, capacity: weapon ? Items.capacity(entry.item) : null, reserve: reserve,
      draw: function (context, x, y, width, height) { Items.drawItem(context, entry.item, x, y, width, height); },
      ready: function () { if (!info.image) return true; var image = Items.imageOf(info.image); return image.complete && image.naturalWidth > 0; } };
  }
  function throwCost(unit) { return Math.round(unit.maxTimeUnits * 0.25); }
  function throwRange(unit) { return 6 + (unit.strength || 30) / 3; }            // метры
  function throwChance(unit, distance) { return Math.max(5, Math.min(95, Math.round((unit.throwing || 50) - Math.max(0, distance - 8) * 1.5))); }
  // пункты меню для руки: режимы огня оружия (шанс — без учёта дальности) или бросок гранаты
  function handActions(unit, slot) {
    if (!unit) return [];
    var weapon = null, rounds = 0, entry = handEntry(unit, slot);
    if (!unit.inventory) { if (slot === 'rightHand') { weapon = weaponOf(unit); rounds = unit.ammo; } }
    else if (entry && Items.info(entry.item).weapon) { weapon = Combat.WEAPONS[Items.info(entry.item).weapon]; rounds = entry.item.rounds; }
    if (weapon) {
      return weapon.modes.map(function (mode, index) {
        return { label: mode.name, chance: Combat.hitChance(unit, mode, 0), cost: mode.cost, disabled: rounds <= 0 ? 'магазин пуст' : mode.cost > unit.timeUnits ? 'мало ОД' : '', kind: 'fire', mode: index };
      });
    }
    if (entry && entry.item.type === 'grenade') {
      var cost = throwCost(unit);
      return [{ label: 'Бросить', chance: unit.throwing || 50, cost: cost, disabled: cost > unit.timeUnits ? 'мало ОД' : '', kind: 'throw' }];
    }
    return [];
  }
  function handAction(unit, slot, index) {
    var action = handActions(unit, slot)[index];
    if (!action || action.disabled || unit !== selected || busy()) return false;
    if (action.kind === 'fire') {
      if (unit.inventory) unit.activeHand = slot;
      unit.fireMode = action.mode;
      throwing = null;
      aiming = true;
      say(action.label + ': выберите цель');
    } else if (action.kind === 'throw') {
      aiming = false; aimTarget = null;
      throwing = { slot: slot };
      say('Бросок гранаты: выберите клетку');
    }
    updateHover();
    return true;
  }

  // ---------------- бросок гранаты ----------------
  // Граната летит по дуге в выбранную клетку; промах по броску точности — отклонение тем больше, чем дальше бросок.
  // Взрыв при падении: радиус 3 м, урон 60 в центре и до 30 на краю минус броня, стены и предметы закрывают.
  var throwing = null;                // режим броска: { slot } — рука с гранатой
  var throws = [];                    // летящие гранаты
  var GRENADE = { radius: 3, damage: 60 };
  function throwTarget() {
    var tile = tileUnderMouse();
    if (!tile) return null;
    var point = { x: tile.col + 0.5, y: tile.row + 0.5, h: elevationOf(tile.col, tile.row, tile.level) };
    var from = { x: selected.x, y: selected.y, h: selected.elevation + 1.6 };
    var distance = Combat.distanceMeters(combatWorld, from, point);
    return { tile: tile, point: point, distance: distance, chance: throwChance(selected, distance), cost: throwCost(selected) + turnCostTo(selected, point), far: distance > throwRange(selected) };
  }
  function throwGrenade(target) {
    var entry = throwing && handEntry(selected, throwing.slot);
    if (!entry || entry.item.type !== 'grenade') { throwing = null; return; }
    if (target.far) { say('Слишком далеко: бросок до ' + Math.round(throwRange(selected)) + ' м'); return; }
    if (target.cost > selected.timeUnits) { say('Не хватает очков действия'); return; }
    selected.timeUnits -= target.cost;
    var direction = Iso.directionOf(target.point.x - selected.x, target.point.y - selected.y);
    if (direction >= 0) selected.direction = direction;
    selected.inventory.splice(selected.inventory.indexOf(entry), 1);
    if (!combat) setCombat(true);
    var landing = { x: target.point.x, y: target.point.y, h: target.point.h, level: target.tile.level };
    if (Math.random() * 100 >= target.chance) {        // промах: отклонение
      var angle = Math.random() * Math.PI * 2, spread = (0.6 + Math.random() * (0.5 + target.distance / 6)) / Iso.tileMeters;
      var col = Math.floor(landing.x + Math.cos(angle) * spread), row = Math.floor(landing.y + Math.sin(angle) * spread);
      if (inside(col, row) && floorAt(col, row, landing.level) > 0) { landing.x = col + 0.5; landing.y = row + 0.5; landing.h = elevationOf(col, row, landing.level); }
    }
    var now = performance.now();
    var from = { x: selected.x, y: selected.y, h: selected.elevation + 1.6 };
    throws.push({ from: from, to: landing, start: now + 200, duration: 450 + Combat.distanceMeters(combatWorld, from, landing) * 45, thrower: selected });
    selected.firingUntil = now + 600;
    throwing = null;
    say('Граната брошена');
  }
  function updateThrows(now) {
    throws = throws.filter(function (flight) {
      if (now < flight.start + flight.duration) return true;
      explode(flight.to, now);
      return false;
    });
  }
  function explode(point, now) {
    var anchor = { x: point.x, y: point.y, elevation: point.h, level: point.level };
    particles.push({ kind: 'blast', corpse: anchor, x: 0, y: -6, born: now, life: 420 });
    emitSparks(anchor, now, [0, -8], 26, false);
    for (var puff = 0; puff < 9; puff++) emitSmoke(anchor, now + puff * 40, [(Math.random() - 0.5) * 30, -6 - Math.random() * 10], true);
    for (var flame = 0; flame < 10; flame++) emitFlame(anchor, now, [(Math.random() - 0.5) * 24, -4]);
    var center = { x: point.x, y: point.y, h: point.h + 0.4 };
    units.slice().forEach(function (unit) {
      var body = targetPointOf(unit);
      var distance = Combat.distanceMeters(combatWorld, center, body);
      if (distance > GRENADE.radius + (unit.size > 1 ? 1 : 0)) return;
      var line = Combat.trace(combatWorld, center, body, distance + 0.3, null);
      if (line.kind !== 'unit' || line.unit !== unit) return;          // закрыт стеной или предметом
      var base = GRENADE.damage * (1 - 0.5 * Math.min(1, distance / GRENADE.radius));
      var amount = Combat.damage({ damage: base }, unit.armor, Math.random);
      unit.health = Math.max(0, unit.health - amount);
      flashes.push({ text: amount ? '−' + amount : 'БРОНЯ', point: { x: unit.x, y: unit.y, h: unit.elevation + unit.height + 0.2 }, start: now, until: now + 1300 });
      if (unit.health <= 0) kill(unit);
    });
  }
  function drawThrows() {
    var now = performance.now();
    context.save();
    throws.forEach(function (flight) {
      if (now < flight.start) return;
      var part = Math.min(1, (now - flight.start) / flight.duration);
      var point = lerpPoint(flight.from, flight.to, part);
      point.h += Math.sin(part * Math.PI) * (1 + Combat.distanceMeters(combatWorld, flight.from, flight.to) * 0.18);
      var screen = screenOf(point);
      context.fillStyle = '#3c4428'; context.strokeStyle = '#151810'; context.lineWidth = 1.2;
      context.beginPath(); context.arc(screen.x, screen.y, 4, 0, Math.PI * 2); context.fill(); context.stroke();
    });
    // в режиме броска: круг поражения на клетке под курсором и подпись
    if (throwing && selected && !busy()) {
      var target = throwTarget();
      if (target) {
        var center = screenOf(target.point), radius = GRENADE.radius / Iso.tileMeters;
        context.strokeStyle = target.far ? 'rgba(255, 106, 80, 0.9)' : 'rgba(255, 210, 60, 0.9)';
        context.fillStyle = target.far ? 'rgba(255, 106, 80, 0.1)' : 'rgba(255, 210, 60, 0.1)';
        context.lineWidth = 2;
        context.beginPath();
        for (var step = 0; step <= 32; step++) {
          var angle = step / 32 * Math.PI * 2;
          var edge = screenOf({ x: target.point.x + Math.cos(angle) * radius, y: target.point.y + Math.sin(angle) * radius, h: target.point.h });
          if (step === 0) context.moveTo(edge.x, edge.y); else context.lineTo(edge.x, edge.y);
        }
        context.fill(); context.stroke();
        var text = target.far ? 'СЛИШКОМ ДАЛЕКО' : target.chance + '%  ·  ' + target.cost + ' ОД';
        context.font = 'bold 13px Arial, sans-serif'; context.textAlign = 'center';
        var width = context.measureText(text).width + 14;
        context.fillStyle = 'rgba(0, 0, 0, 0.65)'; context.fillRect(center.x - width / 2, center.y - 46, width, 17);
        context.fillStyle = target.far || target.cost > selected.timeUnits ? '#ff8a6a' : '#bff4ff';
        context.fillText(text, center.x, center.y - 33);
      }
    }
    context.restore();
  }

  // экран снаряжения выбранного бойца (js/inventory.js)
  function openInventory() {
    if (!selected) { say('Выберите бойца'); return; }
    if (!selected.inventory) { say('У ' + selected.callsign + ' нет снаряжения: пушка и лента — часть машины'); return; }
    if (window.Inventory) { keys = {}; Inventory.open(selected); }
  }

  function endTurn() {
    if (phase !== 'squad') return;
    if (shots.length || units.some(function (unit) { return unit.path.length > 0; })) { say('Дождитесь окончания действия'); return; }
    aiming = false; aimTarget = null;
    startAlienPhase();
  }

  function selectUnit(unit, center) {
    if (unit && unit.side !== 'squad') return;
    if (unit !== selected) { aiming = false; aimTarget = null; throwing = null; }
    selected = unit;
    if (unit) viewFollow(unit);
    if (unit && center) centerOn(unit.x, unit.y, unit.elevation);
    updateHover();
  }
  function selectNext() {
    var squad = units.filter(function (unit) { return unit.side === 'squad'; });
    if (!squad.length) return;
    var index = selected ? squad.indexOf(selected) : -1;
    selectUnit(squad[(index + 1) % squad.length], true);
  }

  function setFireMode(index) { if (selected) selected.fireMode = index; }
  function cancelAim() { aiming = false; aimTarget = null; throwing = null; updateHover(); }
  function toggleAim() {
    if (aiming) { cancelAim(); return; }
    if (busy()) return;
    if (!weaponOf(selected)) { say('Нет оружия'); return; }
    if (selected.ammo <= 0) { say('Магазин пуст — перезарядите'); return; }
    aiming = true;
    updateHover();
  }

  // ---------------- стрельба ----------------
  // Как в UFO: шанс попадания решает, летит ли пуля в силуэт цели; промах отклоняется, и пуля может попасть
  // в стену, предмет, пол или другого юнита на линии огня (js/combat.js).
  var aiming = false;                 // режим прицела у выбранного бойца
  var aimTarget = null;               // враг, взятый в прицел: остаётся в прицеле после выстрела, пока жив
  var shots = [];                     // летящие пули и сгустки плазмы
  var flashes = [];                   // вспышки попаданий и цифры урона
  var phase = 'squad';                // чей ход: squad — отряд игрока, aliens — пришельцы (ИИ)
  var SHOT_SPEED = { bullet: 90, plasma: 28, shell: 70 };   // м/с — для вида, не для расчёта
  var corpses = [];                   // тела погибших: остаются на клетке, проходу и пулям не мешают
  var combatWorld = Combat.createWorld({
    map: MAP, units: units, unitBody: unitBody,
    doorOpen: function (col, row, level, orient) {
      for (var index = 0; index < doors.length; index++) {
        var door = doors[index];
        if (door.col === col && door.row === row && door.level === level && door.orient === orient) return door.open > 0.6;
      }
      return false;
    }
  });
  function weaponOf(unit) { return unit && unit.weaponType ? Combat.WEAPONS[unit.weaponType] : null; }
  function modesOf(unit) { var weapon = weaponOf(unit); return weapon ? weapon.modes : FIRE_MODES; }
  function cheapestCost(unit) { var weapon = weaponOf(unit); return weapon ? Math.min.apply(null, weapon.modes.map(function (mode) { return mode.cost; })) : Infinity; }
  // тело юнита для попаданий: вертикальный цилиндр
  function unitBody(unit) {
    return { x: unit.x, y: unit.y, radius: unit.size > 1 ? 0.95 : Combat.UNIT_RADIUS, bottom: unit.elevation, top: unit.elevation + (unit.kneeling ? 1.2 : unit.height) };
  }
  function targetPointOf(unit) { return { x: unit.x, y: unit.y, h: unit.elevation + (unit.kneeling ? 0.75 : unit.height * 0.62) }; }
  // ствол: чуть впереди юнита в сторону цели, на высоте плеча
  function muzzleOf(unit, point) {
    var dx = point.x - unit.x, dy = point.y - unit.y, length = Math.sqrt(dx * dx + dy * dy) || 1;
    var reach = (unit.size > 1 ? 1.4 : 0.32) / Iso.tileMeters;
    var height = unit.kind === 'mech' ? 2.15 : unit.kind === 'alien' ? 1.55 : unit.kneeling ? 1.0 : 1.45;
    return { x: unit.x + dx / length * reach, y: unit.y + dy / length * reach, h: unit.elevation + height };
  }
  function turnCostTo(unit, point) {
    var direction = Iso.directionOf(point.x - unit.x, point.y - unit.y);
    if (direction < 0) return 0;
    return Math.min((direction - unit.direction + 8) % 8, (unit.direction - direction + 8) % 8) * COST.turnStep;
  }
  function isAiming(unit) { return (unit === selected && aiming) || (unit.firingUntil && performance.now() < unit.firingUntil); }

  // цель в режиме прицела: юнит на клетке под курсором (пришелец — ещё и по фигуре), иначе взятый в прицел враг,
  // иначе точка над клеткой
  function aimTargetUnderMouse() {
    var tile = tileUnderMouse();
    var unit = tile ? unitAt(tile.col, tile.row, tile.level) : null;
    if (!unit || unit === selected) {
      var figure = unitUnderMouse(true);
      unit = figure && figure.side === 'aliens' ? figure : null;
    }
    if (unit && unit !== selected) return { unit: unit, point: targetPointOf(unit) };
    if (aimTarget && !aimTarget.dead && units.indexOf(aimTarget) >= 0) return { unit: aimTarget, point: targetPointOf(aimTarget), locked: true };
    if (tile) return { unit: null, point: { x: tile.col + 0.5, y: tile.row + 0.5, h: elevationOf(tile.col, tile.row, tile.level) + 0.6 } };
    return null;
  }
  // оценка выстрела: шанс, стоимость с поворотом, свободна ли прямая линия огня до цели
  function shotPreview(shooter, target, modeIndex) {
    var mode = modesOf(shooter)[modeIndex] || modesOf(shooter)[0];
    var from = muzzleOf(shooter, target.point);
    var distance = Combat.distanceMeters(combatWorld, from, target.point);
    var line = Combat.trace(combatWorld, from, target.point, distance + 0.3, shooter);
    var clear = target.unit ? line.kind === 'unit' && line.unit === target.unit : line.kind === 'none' || line.kind === 'ground' || line.kind === 'floor';
    return { mode: mode, chance: target.unit ? Combat.hitChance(shooter, mode, distance) : null, cost: mode.cost + turnCostTo(shooter, target.point), clear: clear, distance: distance };
  }

  function fire(shooter, target, modeIndex, delay) {
    delay = delay || 0;
    var weapon = weaponOf(shooter);
    if (!weapon) { say('Нет оружия'); return false; }
    var mode = weapon.modes[modeIndex] || weapon.modes[0];
    if (shooter.ammo <= 0) { say('Магазин пуст — перезарядите'); return false; }
    var cost = mode.cost + turnCostTo(shooter, target.point);
    if (cost > shooter.timeUnits) { say('Не хватает очков действия'); return false; }
    shooter.timeUnits -= cost;
    var direction = Iso.directionOf(target.point.x - shooter.x, target.point.y - shooter.y);
    if (direction >= 0) shooter.direction = direction;
    if (!combat) setCombat(true);                       // первый выстрел — боевая обстановка
    var now = performance.now(), count = Math.min(mode.shots, shooter.ammo);
    shooter.firingUntil = now + delay + 900 + count * 160;
    for (var index = 0; index < count; index++) {
      shooter.ammo--;
      shots.push({ shooter: shooter, target: target, mode: mode, weapon: weapon, start: now + delay + 250 + index * 160, result: null });
    }
    return true;
  }
  // выстрел вылетает в свой момент: линия огня считается тогда же (цель могла погибнуть от предыдущей пули очереди)
  function launch(shot) {
    var target = shot.target;
    var point = target.unit && !target.unit.dead ? targetPointOf(target.unit) : target.point;
    var from = muzzleOf(shot.shooter, point);
    var distance = Combat.distanceMeters(combatWorld, from, point);
    var chance = target.unit ? Combat.hitChance(shot.shooter, shot.mode, distance) : 100;
    var radius = target.unit ? unitBody(target.unit).radius : 0.05;
    var aim = Combat.aimPoint(combatWorld, from, point, radius, chance, Math.random);
    shot.from = from;
    shot.result = Combat.trace(combatWorld, from, aim.point, shot.weapon.range, shot.shooter);
    shot.duration = Math.max(60, Combat.distanceMeters(combatWorld, from, shot.result.point) / SHOT_SPEED[shot.weapon.projectile] * 1000);
  }
  function updateShots(now) {
    shots.forEach(function (shot) {
      if (now < shot.start) return;
      if (!shot.result) launch(shot);
      if (!shot.done && now >= shot.start + shot.duration) { shot.done = true; impact(shot, now); }
    });
    shots = shots.filter(function (shot) { return !shot.done; });
    flashes = flashes.filter(function (flash) { return now < flash.until; });
  }
  function impact(shot, now) {
    var result = shot.result;
    flashes.push({ point: result.point, kind: shot.weapon.projectile, start: now, until: now + 320 });
    if (result.kind !== 'unit' || result.unit.dead) return;
    var target = result.unit;
    var amount = Combat.damage(shot.weapon, target.armor, Math.random);
    target.health = Math.max(0, target.health - amount);
    flashes.push({ text: amount ? '−' + amount : 'БРОНЯ', point: { x: target.x, y: target.y, h: target.elevation + target.height + 0.2 }, start: now, until: now + 1300 });
    if (target.health <= 0) kill(target);
    else say(target.callsign + ': попадание, урон ' + amount);
  }
  function kill(unit) {
    unit.dead = true;
    if (unit.inventory) {
      unit.inventory.forEach(function (entry) { dropOnGround(entry.item, unit.col, unit.row, unit.level); });
      unit.inventory = [];
    }
    if (SPRITE_ANCHORS[unit.spriteSet + '_dead_d0']) {
      // падение: кадры *_fall_f0..f5, затем лежит (*_dead). Обломки робота занимают его площадку, над ними дым и искры
      var wreck = unit.kind === 'mech';
      // падение начинается из обычной стойки. С колена (таз на 0,6 м) начинаем с третьего кадра — таз там на 0,69 м;
      // стоя в прицеле таз на той же высоте, что в обычной стойке, отличаются только руки — пропускаем один кадр
      var pose = spriteName(unit);
      var skip = pose.indexOf('_kneelAim_') >= 0 ? 2 : pose.indexOf('_standAim_') >= 0 ? 1 : 0;
      corpses.push({
        fallSkip: skip,
        name: unit.spriteSet + '_dead_d' + unit.direction, set: unit.spriteSet, direction: unit.direction,
        fallStart: performance.now(), fallFrames: SPRITE_ANCHORS[unit.spriteSet + '_fall_f0_d0'] ? FALL_FRAMES : 0,
        frameTime: wreck ? 120 : 85, wreck: wreck, size: unit.size, nextFlame: 0, nextSmoke: 0, nextArc: 0,
        x: unit.x, y: unit.y, elevation: unit.elevation, col: unit.col, row: unit.row, level: unit.level
      });
    }
    var index = units.indexOf(unit);
    if (index >= 0) units.splice(index, 1);
    say(unit.callsign + (unit.side === 'aliens' ? ' уничтожен' : ' выбыл'));
    if (aimTarget === unit) aimTarget = null;
    if (selected === unit) { selected = null; aiming = false; aimTarget = null; selectNext(); }
    if (!units.some(function (other) { return other.side === 'aliens'; })) say('Пришельцы уничтожены');
    else if (!units.some(function (other) { return other.side === 'squad' && other.kind !== 'mech'; })) say('Отряд погиб');
  }

  // ---------------- ответный огонь ----------------
  // Как в UFO, для обеих сторон: когда юнит в свой ход заходит на новую клетку, каждый юнит другой стороны,
  // который его видит (прямая линия огня свободна, в пределах дальности), сравнивает свою готовность с готовностью
  // идущего. Готовность = Реакция × доля оставшихся ОД (у идущего — с учётом ещё не пройденных шагов). Если готовность
  // выше и ОД хватает на самый дешёвый выстрел с поворотом — стреляет. Первым стреляет тот, у кого готовность выше.
  // На ответный огонь идут ОД, оставшиеся с прошлого хода своей стороны. Пока летят пули, идущий стоит на клетке;
  // боец отряда под огнём останавливается, ОД за непройденные шаги возвращаются.
  function readiness(unit, timeUnits) { return (unit.reactions || 0) * timeUnits / unit.maxTimeUnits; }
  function reactionCheck(mover) {
    if (!combat || mover.dead) return;
    var moverScore = readiness(mover, mover.timeUnits + (mover.path.length ? pathCost(mover, mover.path) : 0));
    var target = { unit: mover, point: targetPointOf(mover) };
    var ready = [];
    units.forEach(function (unit) {
      if (unit.side === mover.side || unit.dead || unit.ammo <= 0) return;
      var weapon = weaponOf(unit);
      if (!weapon) return;
      var modeIndex = 0;
      weapon.modes.forEach(function (mode, index) { if (mode.cost < weapon.modes[modeIndex].cost) modeIndex = index; });
      var preview = shotPreview(unit, target, modeIndex);
      if (!preview.clear || preview.distance > weapon.range || preview.cost > unit.timeUnits) return;
      var score = readiness(unit, unit.timeUnits);
      if (score > moverScore) ready.push({ unit: unit, score: score, modeIndex: modeIndex });
    });
    ready.sort(function (first, second) { return second.score - first.score; });
    var fired = false;
    ready.forEach(function (entry, order) {
      if (fire(entry.unit, target, entry.modeIndex, order * 420)) { fired = true; say(entry.unit.callsign + ': ответный огонь по ' + mover.callsign); }
    });
    if (fired && mover.side === 'squad' && mover.path.length) {
      var refund = 0;
      mover.path.forEach(function (step) { refund += step.cost; });
      mover.timeUnits += refund;
      mover.path = [];
      mover.walked = 0;
      if (mover === selected) viewFollow(mover);
    }
  }
  // идёт ли юнит в свой ход (тогда по нему возможен ответный огонь)
  function ownPhase(unit) { return (unit.side === 'aliens') === (phase === 'aliens'); }

  // ---------------- ход пришельцев: простой ИИ ----------------
  // Каждый пришелец по очереди: видит бойца (прямая линия огня свободна, в пределах дальности) — стреляет,
  // пока хватает ОД; не видит — подходит к ближайшему бойцу короткими перебежками (до двух за ход),
  // оставляя ОД на выстрел навскидку. В мирной обстановке пришельцы ничего не делают.
  var aiQueue = [], aiWaitUntil = 0;
  function watchUnit(unit) {
    centerOn(unit.x, unit.y, unit.elevation);
    var level = followLevel(unit);
    setView(level, isIndoor(unit.col, unit.row, unit.level) || isIndoor(unit.col, unit.row, level));
  }
  function setPhaseLabel() {
    var label = document.getElementById('phase');
    if (label) label.textContent = phase === 'squad' ? 'ФАЗА ОТРЯДА' : 'ХОД ПРИШЕЛЬЦЕВ';
  }
  function startAlienPhase() {
    phase = 'aliens';
    setPhaseLabel();
    units.forEach(function (unit) { if (unit.side === 'aliens') { unit.timeUnits = turnTimeUnits(unit); unit.aiMoves = 0; } });
    aiQueue = units.filter(function (unit) { return unit.side === 'aliens'; });
    aiWaitUntil = performance.now() + 500;
    say(combat ? 'Ход пришельцев' : 'Ход пришельцев: мирная обстановка');
  }
  function finishAlienPhase() {
    phase = 'squad';
    turn++;
    units.forEach(function (unit) { if (unit.side === 'squad') unit.timeUnits = turnTimeUnits(unit); });
    setPhaseLabel();
    say('Ход ' + turn);
    if (selected) { viewFollow(selected); centerOn(selected.x, selected.y, selected.elevation); }
    updateHover();
  }
  function visibleTargets(alien) {
    var weapon = weaponOf(alien);
    var result = [];
    units.forEach(function (unit) {
      if (unit.side !== 'squad') return;
      var point = targetPointOf(unit), from = muzzleOf(alien, point);
      var distance = Combat.distanceMeters(combatWorld, from, point);
      if (distance > weapon.range) return;
      var line = Combat.trace(combatWorld, from, point, distance + 0.3, alien);
      if (line.kind === 'unit' && line.unit === unit) result.push({ unit: unit, point: point, distance: distance });
    });
    result.sort(function (first, second) { return first.distance - second.distance; });
    return result;
  }
  function aiMove(alien, reserve) {
    var nearest = null, best = Infinity;
    units.forEach(function (unit) {
      if (unit.side !== 'squad') return;
      var distance = Math.abs(unit.x - alien.x) + Math.abs(unit.y - alien.y) + Math.abs(unit.level - alien.level) * 4;
      if (distance < best) { best = distance; nearest = unit; }
    });
    if (!nearest) return false;
    // клетки вокруг цели, ближние к ней первыми
    var candidates = [];
    for (var radius = 1; radius <= 4; radius++) {
      for (var dy = -radius; dy <= radius; dy++) for (var dx = -radius; dx <= radius; dx++) {
        if (Math.max(Math.abs(dx), Math.abs(dy)) !== radius) continue;
        var col = nearest.col + dx, row = nearest.row + dy;
        if (col < 0 || row < 0 || col >= GRID || row >= GRID) continue;
        candidates.push({ col: col, row: row, level: nearest.level, order: radius * 100 + Math.abs(col - alien.col) + Math.abs(row - alien.row) });
      }
    }
    candidates.sort(function (first, second) { return first.order - second.order; });
    for (var index = 0; index < candidates.length && index < 40; index++) {
      var path = findPath(alien, candidates[index]);
      if (!path || !path.length) continue;
      var saved = alien.timeUnits;
      alien.timeUnits = Math.max(0, saved - reserve);
      var steps = Math.min(6, affordableSteps(alien, path));
      alien.timeUnits = saved;
      if (!steps) return false;
      path = path.slice(0, steps);
      alien.timeUnits -= pathCost(alien, path);
      alien.path = path;
      watchUnit(alien);
      return true;
    }
    return false;
  }
  function updateAI(now) {
    if (phase !== 'aliens' || now < aiWaitUntil || shots.length) return;
    if (units.some(function (unit) { return unit.path.length > 0; })) return;
    if (!combat) { finishAlienPhase(); return; }
    while (aiQueue.length && (aiQueue[0].dead || units.indexOf(aiQueue[0]) < 0)) aiQueue.shift();
    var alien = aiQueue[0];
    if (!alien) { finishAlienPhase(); return; }
    var weapon = weaponOf(alien);
    var targets = weapon && alien.ammo > 0 ? visibleTargets(alien) : [];
    if (targets.length) {
      var target = { unit: targets[0].unit, point: targets[0].point };
      var turnCost = turnCostTo(alien, target.point);
      var modeIndex = alien.timeUnits >= weapon.modes[0].cost + turnCost ? 0 : 1;
      if (weapon.modes[modeIndex] && alien.timeUnits >= weapon.modes[modeIndex].cost + turnCost) {
        watchUnit(alien);
        fire(alien, target, modeIndex);
        aiWaitUntil = now + 450;
        return;
      }
    } else if (weapon && alien.aiMoves < 2 && aiMove(alien, cheapestCost(alien))) {
      alien.aiMoves++;
      aiWaitUntil = now + 200;
      return;
    }
    aiQueue.shift();
    aiWaitUntil = now + 350;
  }

  // кадр падения или лежащего тела
  var FALL_FRAMES = 6;
  function corpseFrame(corpse, now) {
    var frame = (corpse.fallSkip || 0) + Math.floor((now - corpse.fallStart) / corpse.frameTime);
    return frame < corpse.fallFrames ? frame : -1;
  }
  function corpseSprite(corpse, now) {
    var frame = corpseFrame(corpse, now);
    return frame >= 0 ? corpse.set + '_fall_f' + frame + '_d' + corpse.direction : corpse.name;
  }
  // обломки робота на клетке: по ним нельзя пройти
  function wreckAt(col, row, level) {
    for (var index = 0; index < corpses.length; index++) {
      var corpse = corpses[index];
      if (corpse.wreck && corpse.level === level && col >= corpse.col && col < corpse.col + corpse.size && row >= corpse.row && row < corpse.row + corpse.size) return corpse;
    }
    return null;
  }
  // тело погибшего: пока падает — по глубине как юнит, лежащее — как подсветка пола своей клетки;
  // обломки робота высокие и всегда рисуются как юнит
  function corpseItems() {
    var now = performance.now();
    return corpses.filter(function (corpse) { return corpse.level <= view.level; }).map(function (corpse) {
      var name = corpseSprite(corpse, now);
      var image = images[name], anchor = SPRITE_ANCHORS[name];
      var foot = Iso.toScreen(corpse.x, corpse.y, corpse.elevation);
      var rect = image && image.naturalWidth ? { x: Math.round(foot.x - anchor[0]), y: Math.round(foot.y - anchor[1]), width: image.naturalWidth, height: image.naturalHeight }
        : { x: foot.x - 40, y: foot.y - 30, width: 80, height: 40 };
      var standing = corpse.wreck || corpseFrame(corpse, now) >= 0;
      var depth = standing ? depthKey(corpse.col, corpse.row, corpse.level, 3.5) + (corpse.size - 1) * 100 : depthKey(corpse.col, corpse.row, corpse.level, 1.3);
      return { depth: depth, rect: rect, draw: function () { drawSprite(name, corpse.x, corpse.y, corpse.elevation); } };
    });
  }

  // ---------------- дым, пламя и искры над обломками ----------------
  // Точки на спрайте обломков (пробоина, которая горит и дымит; пробоина двигателя; люк с вырванной проводкой)
  // посчитаны при рендере для каждого ракурса: EFFECT_POINTS в data.js, пиксели от точки привязки.
  // Частицы хранятся в пикселях относительно точки привязки обломков, поэтому следуют за камерой.
  // Дым: клубы из заранее нарисованных пятен (объём: светлый верх, тёмный низ), тёмные у пробоины, светлеют
  // и расплываются по мере подъёма, сносятся ветром. Пламя: короткоживущие яркие языки, складываются по яркости,
  // под ними мерцающий отсвет. Проводка: электрическая дуга с голубой вспышкой и сноп искр, падающих вниз.
  var particles = [];
  var puffImages = makePuffImages();
  var flameImage = makeFlameImage();
  function makePuffImages() {
    var result = { dark: [], light: [] };
    [['dark', [58, 54, 50]], ['light', [128, 124, 118]]].forEach(function (entry) {
      for (var variant = 0; variant < 4; variant++) {
        var size = 96, canvas = document.createElement('canvas');
        canvas.width = canvas.height = size;
        var puff = canvas.getContext('2d'), color = entry[1];
        var seed = variant * 7 + 3;
        var random = function () { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
        for (var blob = 0; blob < 9; blob++) {
          var angle = random() * Math.PI * 2, distance = random() * 18, radius = 14 + random() * 12;
          var x = size / 2 + Math.cos(angle) * distance, y = size / 2 + Math.sin(angle) * distance * 0.8;
          var gradient = puff.createRadialGradient(x, y, 0, x, y, radius);
          gradient.addColorStop(0, 'rgba(255,255,255,1)');
          gradient.addColorStop(0.65, 'rgba(255,255,255,0.85)');
          gradient.addColorStop(1, 'rgba(255,255,255,0)');
          puff.fillStyle = gradient;
          puff.fillRect(0, 0, size, size);
        }
        // объём: свет сверху-слева, тень снизу
        puff.globalCompositeOperation = 'source-atop';
        var shade = puff.createLinearGradient(size * 0.3, size * 0.15, size * 0.65, size * 0.9);
        var lit = color.map(function (value) { return Math.min(255, Math.round(value * 1.45)); }), dark = color.map(function (value) { return Math.round(value * 0.6); });
        shade.addColorStop(0, 'rgb(' + lit.join(',') + ')');
        shade.addColorStop(0.5, 'rgb(' + color.join(',') + ')');
        shade.addColorStop(1, 'rgb(' + dark.join(',') + ')');
        puff.fillStyle = shade;
        puff.fillRect(0, 0, size, size);
        result[entry[0]].push(canvas);
      }
    });
    return result;
  }
  function makeFlameImage() {
    var size = 64, canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    var flame = canvas.getContext('2d');
    var gradient = flame.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, 'rgba(255, 250, 220, 1)');
    gradient.addColorStop(0.25, 'rgba(255, 210, 90, 0.95)');
    gradient.addColorStop(0.55, 'rgba(255, 110, 20, 0.6)');
    gradient.addColorStop(1, 'rgba(180, 30, 0, 0)');
    flame.fillStyle = gradient;
    flame.fillRect(0, 0, size, size);
    return canvas;
  }
  function effectPoints(corpse, kind) {
    var points = window.EFFECT_POINTS && EFFECT_POINTS[corpse.name];
    return points && points[kind] && points[kind].length ? points[kind] : [[0, -40]];
  }
  function pick(list) { return list[Math.floor(Math.random() * list.length)]; }
  function emitSmoke(corpse, now, point, dark) {
    particles.push({ kind: 'smoke', corpse: corpse, x: point[0] + (Math.random() - 0.5) * 8, y: point[1] - 4 + (Math.random() - 0.5) * 6, born: now,
      life: 3200 + Math.random() * 1600, size: 16 + Math.random() * 8, grow: 60 + Math.random() * 40, vx: 8 + Math.random() * 10, vy: -(30 + Math.random() * 14),
      spin: (Math.random() - 0.5) * 0.6, angle: Math.random() * Math.PI * 2, variant: Math.floor(Math.random() * 4), peak: dark ? 0.9 : 0.7 });
  }
  function emitFlame(corpse, now, point) {
    particles.push({ kind: 'flame', corpse: corpse, x: point[0] + (Math.random() - 0.5) * 10, y: point[1] + (Math.random() - 0.5) * 4, born: now,
      life: 320 + Math.random() * 380, size: 18 + Math.random() * 12, vx: (Math.random() - 0.5) * 14, vy: -(50 + Math.random() * 45) });
  }
  function emitSparks(corpse, now, point, count, electric) {
    particles.push({ kind: electric ? 'arc' : 'glow', corpse: corpse, x: point[0], y: point[1], born: now, life: electric ? 90 : 160, seed: Math.random() });
    for (var index = 0; index < count; index++) {
      var angle = -Math.PI / 2 + (Math.random() - 0.5) * 2.8, speed = 70 + Math.random() * 180;
      particles.push({ kind: 'spark', corpse: corpse, x: point[0], y: point[1], born: now, life: 250 + Math.random() * 450,
        vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed });
    }
  }
  function updateWrecks(now) {
    corpses.forEach(function (corpse) {
      if (!corpse.wreck || corpseFrame(corpse, now) >= 0) return;
      var fire = effectPoints(corpse, 'fire'), smoke = effectPoints(corpse, 'smoke'), wires = effectPoints(corpse, 'wires');
      if (!corpse.landed) {                         // удар о землю: сноп искр и клубы пыли с дымом
        corpse.landed = true;
        emitSparks(corpse, now, fire[0], 26, false);
        for (var puff = 0; puff < 5; puff++) emitSmoke(corpse, now, pick(smoke), true);
        corpse.nextSmoke = now; corpse.nextFlame = now; corpse.nextArc = now + 400;
      }
      if (now - corpse.nextFlame > 500) corpse.nextFlame = now;      // после паузы (вкладка была скрыта) не догоняем
      while (now >= corpse.nextFlame) { emitFlame(corpse, corpse.nextFlame, pick(fire)); corpse.nextFlame += 28 + Math.random() * 20; }
      if (now >= corpse.nextSmoke) {
        emitSmoke(corpse, now, pick(smoke), Math.random() < 0.7);
        corpse.nextSmoke = now + 170 + Math.random() * 130;
      }
      if (now >= corpse.nextArc) {
        // короткое замыкание: иногда две-три вспышки подряд
        emitSparks(corpse, now, pick(wires), 5 + Math.floor(Math.random() * 10), true);
        corpse.nextArc = now + (Math.random() < 0.35 ? 90 + Math.random() * 80 : 350 + Math.random() * 1300);
      }
    });
    particles = particles.filter(function (particle) { return now < particle.born + particle.life; });
  }
  function drawParticles() {
    if (!particles.length) return;
    var now = performance.now();
    var origins = new Map();
    function originOf(corpse) {
      if (!origins.has(corpse)) {
        var foot = Iso.toScreen(corpse.x, corpse.y, corpse.elevation);
        origins.set(corpse, corpse.level <= view.level ? { x: foot.x - camera.x, y: foot.y - camera.y } : null);
      }
      return origins.get(corpse);
    }
    // доля прожитого: кадр рисуется чуть позже обновления, поэтому ограничиваем 0..1
    function partOf(particle) { return Math.min(1, Math.max(0, (now - particle.born) / particle.life)); }
    context.save();
    // отсвет пламени
    context.globalCompositeOperation = 'lighter';
    corpses.forEach(function (corpse) {
      if (!corpse.wreck || !corpse.landed) return;
      var origin = originOf(corpse);
      if (!origin) return;
      effectPoints(corpse, 'fire').forEach(function (point) {
        var flicker = 0.75 + 0.25 * Math.sin(now / 47) * Math.sin(now / 83 + 1.3);
        var x = origin.x + point[0], y = origin.y + point[1], radius = 46 * flicker;
        var glow = context.createRadialGradient(x, y, 0, x, y, radius);
        glow.addColorStop(0, 'rgba(255, 140, 40, ' + (0.32 * flicker).toFixed(3) + ')');
        glow.addColorStop(1, 'rgba(255, 80, 10, 0)');
        context.fillStyle = glow;
        context.fillRect(x - radius, y - radius, radius * 2, radius * 2);
      });
    });
    // пламя под дымом
    particles.forEach(function (particle) {
      if (particle.kind !== 'flame') return;
      var origin = originOf(particle.corpse);
      if (!origin) return;
      var age = (now - particle.born) / 1000, part = partOf(particle);
      var size = particle.size * (1 - 0.7 * part);
      context.globalAlpha = Math.min(1, part * 8) * (1 - part);
      context.drawImage(flameImage, origin.x + particle.x + particle.vx * age - size / 2, origin.y + particle.y + particle.vy * age - size * 0.6, size, size * 1.25);
    });
    context.globalAlpha = 1;
    // дым
    context.globalCompositeOperation = 'source-over';
    particles.forEach(function (particle) {
      if (particle.kind !== 'smoke') return;
      var origin = originOf(particle.corpse);
      if (!origin) return;
      var age = (now - particle.born) / 1000, part = partOf(particle);
      var x = origin.x + particle.x + particle.vx * age + Math.sin(age * 1.7 + particle.angle) * 4;
      var y = origin.y + particle.y + particle.vy * age * (1 - 0.3 * part);
      var size = particle.size + particle.grow * Math.sqrt(part);
      var alpha = particle.peak * Math.min(1, part * 7) * (1 - Math.pow(part, 1.5));
      context.save();
      context.translate(x, y);
      context.rotate(particle.angle + particle.spin * age);
      context.globalAlpha = alpha * (1 - part);
      context.drawImage(puffImages.dark[particle.variant], -size / 2, -size / 2, size, size);
      context.globalAlpha = alpha * part;
      context.drawImage(puffImages.light[particle.variant], -size / 2, -size / 2, size, size);
      context.restore();
    });
    // искры, вспышки и дуги поверх
    context.globalCompositeOperation = 'lighter';
    context.lineCap = 'round';
    particles.forEach(function (particle) {
      var origin = originOf(particle.corpse);
      if (!origin || particle.kind === 'smoke' || particle.kind === 'flame') return;
      var age = (now - particle.born) / 1000, part = partOf(particle);
      var baseX = origin.x + particle.x, baseY = origin.y + particle.y;
      if (particle.kind === 'blast') {
        var blastRadius = 20 + 70 * Math.sqrt(part);
        var blast = context.createRadialGradient(baseX, baseY, 0, baseX, baseY, blastRadius);
        blast.addColorStop(0, 'rgba(255, 245, 210, ' + (1 - part).toFixed(3) + ')');
        blast.addColorStop(0.4, 'rgba(255, 170, 60, ' + (0.8 * (1 - part)).toFixed(3) + ')');
        blast.addColorStop(1, 'rgba(255, 80, 10, 0)');
        context.fillStyle = blast;
        context.fillRect(baseX - blastRadius, baseY - blastRadius, blastRadius * 2, blastRadius * 2);
      } else if (particle.kind === 'glow' || particle.kind === 'arc') {
        var electric = particle.kind === 'arc', radius = electric ? 26 : 30;
        var glow = context.createRadialGradient(baseX, baseY, 0, baseX, baseY, radius);
        glow.addColorStop(0, electric ? 'rgba(200, 230, 255, ' + (0.9 * (1 - part)).toFixed(3) + ')' : 'rgba(255, 220, 140, ' + (0.85 * (1 - part)).toFixed(3) + ')');
        glow.addColorStop(1, electric ? 'rgba(80, 140, 255, 0)' : 'rgba(255, 140, 40, 0)');
        context.fillStyle = glow;
        context.fillRect(baseX - radius, baseY - radius, radius * 2, radius * 2);
        if (electric) {
          // ломаная дуга: каждый кадр новая форма
          context.strokeStyle = 'rgba(230, 245, 255, ' + (1 - part * 0.5).toFixed(3) + ')';
          context.lineWidth = 1.5;
          context.beginPath();
          var angle = particle.seed * Math.PI * 2, length = 12 + particle.seed * 10;
          context.moveTo(baseX, baseY);
          for (var step = 1; step <= 4; step++) {
            var along = length * step / 4;
            context.lineTo(baseX + Math.cos(angle) * along + (Math.random() - 0.5) * 7, baseY + Math.sin(angle) * along * 0.6 + (Math.random() - 0.5) * 7);
          }
          context.stroke();
        }
      } else if (particle.kind === 'spark') {
        var gravity = 520;
        var x = baseX + particle.vx * age, y = baseY + particle.vy * age + gravity * age * age / 2;
        var tailX = x - particle.vx * 0.025, tailY = y - (particle.vy + gravity * age) * 0.025;
        context.strokeStyle = part < 0.5 ? 'rgba(255, 246, 200, ' + (1 - part * 0.6).toFixed(3) + ')' : 'rgba(255, 150, 50, ' + (1.4 - part * 1.4).toFixed(3) + ')';
        context.lineWidth = 1.6;
        context.beginPath(); context.moveTo(tailX, tailY); context.lineTo(x, y); context.stroke();
      }
    });
    context.restore();
  }

  // ---------------- отрисовка стрельбы ----------------
  function screenOf(point) { var screen = Iso.toScreen(point.x, point.y, point.h); return { x: screen.x - camera.x, y: screen.y - camera.y }; }
  function lerpPoint(first, second, amount) { return { x: first.x + (second.x - first.x) * amount, y: first.y + (second.y - first.y) * amount, h: first.h + (second.h - first.h) * amount }; }
  function drawCombatEffects() {
    var now = performance.now();
    context.save();
    context.lineCap = 'round';
    shots.forEach(function (shot) {
      if (!shot.result || now < shot.start) return;
      var progress = Math.min(1, (now - shot.start) / shot.duration);
      var length = Combat.distanceMeters(combatWorld, shot.from, shot.result.point) || 1;
      var tail = Math.max(0, progress - (shot.weapon.projectile === 'plasma' ? 0.6 : shot.weapon.projectile === 'shell' ? 2.4 : 1.6) / length);
      var head = screenOf(lerpPoint(shot.from, shot.result.point, progress)), back = screenOf(lerpPoint(shot.from, shot.result.point, tail));
      if (now - shot.start < 70) {                      // вспышка у ствола
        var muzzle = screenOf(shot.from);
        context.fillStyle = shot.weapon.projectile === 'plasma' ? 'rgba(120, 220, 255, 0.9)' : 'rgba(255, 220, 120, 0.95)';
        context.beginPath(); context.arc(muzzle.x, muzzle.y, shot.weapon.projectile === 'shell' ? 11 : 6, 0, Math.PI * 2); context.fill();
      }
      if (shot.weapon.projectile === 'plasma') {
        context.strokeStyle = 'rgba(80, 200, 255, 0.5)'; context.lineWidth = 6;
        context.beginPath(); context.moveTo(back.x, back.y); context.lineTo(head.x, head.y); context.stroke();
        context.fillStyle = '#d8f6ff';
        context.shadowColor = '#4fd2ff'; context.shadowBlur = 14;
        context.beginPath(); context.arc(head.x, head.y, 4.5, 0, Math.PI * 2); context.fill();
        context.shadowBlur = 0;
      } else if (shot.weapon.projectile === 'shell') {
        context.strokeStyle = 'rgba(255, 150, 60, 0.95)'; context.lineWidth = 4;
        context.beginPath(); context.moveTo(back.x, back.y); context.lineTo(head.x, head.y); context.stroke();
        context.fillStyle = '#fff2c8';
        context.beginPath(); context.arc(head.x, head.y, 3, 0, Math.PI * 2); context.fill();
      } else {
        context.strokeStyle = 'rgba(255, 230, 150, 0.95)'; context.lineWidth = 2;
        context.beginPath(); context.moveTo(back.x, back.y); context.lineTo(head.x, head.y); context.stroke();
      }
    });
    flashes.forEach(function (flash) {
      var age = (now - flash.start) / (flash.until - flash.start);
      var screen = screenOf(flash.point);
      if (flash.text) {
        context.font = 'bold 15px Arial, sans-serif'; context.textAlign = 'center';
        context.fillStyle = 'rgba(0, 0, 0, ' + (0.7 * (1 - age)) + ')';
        context.fillText(flash.text, screen.x + 1, screen.y - age * 26 + 1);
        context.fillStyle = 'rgba(255, 90, 70, ' + (1 - age) + ')';
        context.fillText(flash.text, screen.x, screen.y - age * 26);
        return;
      }
      context.fillStyle = flash.kind === 'plasma' ? 'rgba(110, 215, 255, ' + (0.85 * (1 - age)) + ')' : 'rgba(255, 210, 110, ' + (0.85 * (1 - age)) + ')';
      var size = flash.kind === 'shell' ? 2 : 1;
      context.beginPath(); context.arc(screen.x, screen.y, (4 + age * 12) * size, 0, Math.PI * 2); context.fill();
    });
    context.restore();
  }
  // рамка цели и подпись: шанс, стоимость, закрыта ли линия огня
  // Маркер прицела: жёлтая рамка вокруг цели и мигающий над ней кружок с крестиком; пока цель в прицеле,
  // маркер остаётся и во время выстрела. Подпись — шанс попадания и стоимость выстрела.
  function drawAimMarker() {
    if (!aiming || !selected) return;
    var target = aimTargetUnderMouse();
    if (!target) return;
    var now = performance.now(), blink = Math.sin(now / 700 * Math.PI * 2) > -0.35 ? 1 : 0.25;
    var anchor;
    context.save();
    context.lineWidth = 2;
    if (target.unit) {
      // рамка по фигуре: ширина и рост юнита, а не весь кадр спрайта (в нём место под тень)
      var position = drawPosition(target.unit), foot = Iso.toScreen(position.x, position.y, position.elevation);
      var halfWidth = target.unit.pickWidth + 6, tall = (target.unit.kneeling ? 1.2 : target.unit.height) * Iso.pixelsPerMeterUp;
      var left = foot.x - camera.x - halfWidth, right = foot.x - camera.x + halfWidth, top = foot.y - camera.y - tall - 8, bottom = foot.y - camera.y + 8 * target.unit.size, corner = 12;
      context.strokeStyle = '#ffd23a';
      context.shadowColor = 'rgba(0, 0, 0, 0.6)'; context.shadowBlur = 3;
      context.beginPath();
      [[left, top, 1, 1], [right, top, -1, 1], [left, bottom, 1, -1], [right, bottom, -1, -1]].forEach(function (item) {
        context.moveTo(item[0] + item[2] * corner, item[1]); context.lineTo(item[0], item[1]); context.lineTo(item[0], item[1] + item[3] * corner);
      });
      context.stroke();
      // мигающий кружок с крестиком над рамкой
      var centerX = (left + right) / 2, centerY = top - 16;
      context.globalAlpha = blink;
      context.beginPath();
      context.arc(centerX, centerY, 9, 0, Math.PI * 2);
      context.moveTo(centerX - 14, centerY); context.lineTo(centerX - 4, centerY); context.moveTo(centerX + 4, centerY); context.lineTo(centerX + 14, centerY);
      context.moveTo(centerX, centerY - 14); context.lineTo(centerX, centerY - 4); context.moveTo(centerX, centerY + 4); context.lineTo(centerX, centerY + 14);
      context.stroke();
      context.globalAlpha = 1;
      context.shadowBlur = 0;
      anchor = { x: centerX, y: centerY - 22 };
    } else {
      var point = screenOf(target.point);
      context.strokeStyle = '#ffd23a';
      context.beginPath(); context.arc(point.x, point.y, 9, 0, Math.PI * 2); context.moveTo(point.x - 14, point.y); context.lineTo(point.x + 14, point.y); context.moveTo(point.x, point.y - 14); context.lineTo(point.x, point.y + 14); context.stroke();
      anchor = { x: point.x, y: point.y - 20 };
    }
    if (!busy()) {
      var preview = shotPreview(selected, target, selected.fireMode);
      var enough = preview.cost <= selected.timeUnits && selected.ammo > 0;
      var lines = [(preview.chance !== null ? preview.chance + '%  ·  ' : '') + preview.cost + ' ОД'];
      if (!preview.clear) lines.push('ЛИНИЯ ОГНЯ ЗАКРЫТА');
      if (selected.ammo <= 0) lines.push('МАГАЗИН ПУСТ');
      context.font = 'bold 13px Arial, sans-serif'; context.textAlign = 'center';
      lines.forEach(function (text, index) {
        var y = anchor.y - (lines.length - 1 - index) * 17;
        var width = context.measureText(text).width + 14;
        context.fillStyle = 'rgba(0, 0, 0, 0.65)';
        context.fillRect(anchor.x - width / 2, y - 13, width, 17);
        context.fillStyle = index === 0 ? (enough ? '#bff4ff' : '#ff8a6a') : '#ffc070';
        context.fillText(text, anchor.x, y);
      });
    }
    context.restore();
  }

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

  // юнит под курсором: по прямоугольнику фигуры, ближний к зрителю важнее.
  // preferEnemy: если под курсором есть пришелец, выбирается он (рамка робота K7 большая и накрывает соседей)
  function unitUnderMouse(preferEnemy) {
    var best = null;
    units.forEach(function (unit) {
      if (unit.level > view.level) return;
      var foot = Iso.toScreen(unit.x, unit.y, unit.elevation);
      var left = foot.x - camera.x - unit.pickWidth, right = foot.x - camera.x + unit.pickWidth;
      var top = foot.y - camera.y - unit.height * Iso.pixelsPerMeterUp, bottom = foot.y - camera.y + 8 * unit.size;
      if (mouse.x >= left && mouse.x <= right && mouse.y >= top && mouse.y <= bottom) {
        var enemy = unit.side === 'aliens', bestEnemy = best && best.side === 'aliens';
        if (!best || (preferEnemy && enemy && !bestEnemy) || ((!preferEnemy || enemy === bestEnemy) && unitDepth(unit) > unitDepth(best))) best = unit;
      }
    });
    return best;
  }

  function updateHover() {
    hoverTile = aiming || throwing || phase !== 'squad' ? null : tileUnderMouse();
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
    if (event.button !== 0 || phase !== 'squad') return;
    if (throwing) {
      var throwAt = !busy() && throwTarget();
      if (throwAt) throwGrenade(throwAt);
      return;
    }
    if (aiming) {
      // выстрел по юниту, по взятому в прицел врагу или по точке над клеткой; враг остаётся в прицеле
      var target = aimTargetUnderMouse();
      if (!target || busy()) return;
      if (target.unit && target.unit.side === 'aliens') aimTarget = target.unit;
      fire(selected, target, selected.fireMode);
      updateHover();
      return;
    }
    // юнит выбирается только по клетке, на которой он стоит (не по фигуре: она заходит на соседние клетки)
    var tile = tileUnderMouse();
    var clickedUnit = tile ? unitAt(tile.col, tile.row, tile.level) : null;
    if (clickedUnit) {
      if (clickedUnit.side === 'squad') selectUnit(clickedUnit, false);
      else if (selected && weaponOf(selected) && !busy()) { aiming = true; aimTarget = clickedUnit; updateHover(); }   // щелчок по врагу — взять в прицел
      return;
    }
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
    if (mouse.dragging && !mouse.moved && event.button === 2 && (aiming || throwing)) { mouse.dragging = false; throwing = null; cancelAim(); return; }
    if (mouse.dragging && !mouse.moved && event.button === 2 && selected && phase === 'squad') {
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
  var ACTION_KEYS = { '2': 'kneel', '3': 'aim', '4': 'reload', '6': 'gear', '7': 'next', '8': 'up', '9': 'down', '0': 'endTurn' };
  window.addEventListener('keydown', function (event) {
    if (window.Inventory && Inventory.isOpen()) return;          // окно снаряжения обрабатывает клавиши само
    keys[event.key] = true;
    if (event.key === 'i' || event.key === 'I' || event.key === 'ш' || event.key === 'Ш') { openInventory(); if (window.Inventory && Inventory.isOpen()) event.stopImmediatePropagation(); return; }
    if (event.key === 'Escape') { if (window.Panel && Panel.closeMenu()) return; if (throwing) { throwing = null; updateHover(); } else if (aiming) cancelAim(); else selectUnit(null); }
    if (event.key === 'g' || event.key === 'G' || event.key === 'п' || event.key === 'П') showGrid = !showGrid;
    if (event.key === 'PageUp' || event.key === 'e' || event.key === 'E' || event.key === 'у' || event.key === 'У') { event.preventDefault(); setView(view.level + 1, view.cut); }
    if (event.key === 'PageDown' || event.key === 'q' || event.key === 'Q' || event.key === 'й' || event.key === 'Й') { event.preventDefault(); setView(view.level - 1, view.cut); }
    if (event.key === 'h' || event.key === 'H' || event.key === 'р' || event.key === 'Р') setView(view.level, !view.cut);
    if (event.key === 't' || event.key === 'T' || event.key === 'е' || event.key === 'Е') setCombat(!combat);
    if (event.key === ' ' || event.key === 'Tab') { event.preventDefault(); selectNext(); }
    if (ACTION_KEYS[event.key]) Game.action(ACTION_KEYS[event.key]);
    if (window.Inventory && Inventory.isOpen()) event.stopImmediatePropagation();   // клавиша открыла окно — оно её не получает
  });
  window.addEventListener('keyup', function (event) { keys[event.key] = false; });

  // ---------------- движение ----------------
  function updateUnit(unit, seconds) {
    if (!unit.path.length) return;
    // под ответным огнём идущий стоит на клетке, пока летят пули
    if (ownPhase(unit) && shots.length && unit.segmentLength === 0) return;
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
      if (ownPhase(unit)) reactionCheck(unit);
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
    if (unit.kneeling) return unit.spriteSet + '_kneelAim_d' + unit.direction;
    if (isAiming(unit) && SPRITE_ANCHORS[unit.spriteSet + '_standAim_d0']) return unit.spriteSet + '_standAim_d' + unit.direction;
    if (atEase(unit)) return unit.spriteSet + '_ease_d' + unit.direction;
    return unit.spriteSet + '_idle_d' + unit.direction;
  }
  // стоит ли юнит «вольно»: мирная обстановка, стоит на ногах и у его набора спрайтов есть такая стойка
  function atEase(unit) {
    return !combat && !unit.kneeling && !!SPRITE_ANCHORS[unit.spriteSet + '_ease_d0'];
  }
  function setCombat(value) {
    combat = !!value;
    var label = document.getElementById('situation');
    if (label) label.textContent = combat ? 'ОБСТАНОВКА: БОЕВАЯ' : 'ОБСТАНОВКА: МИРНАЯ';
    if (label) label.className = combat ? 'situation alert' : 'situation';
    if (window.Panel && window.Game) window.Panel.update();
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
    // предметы на земле (кроме клеток с телами — там видно, что лежит): значок первого предмета, рядом число предметов
    Object.keys(groundItems).forEach(function (key) {
      var list = groundItems[key];
      if (!list.length) return;
      var parts = key.split(':'), level = Number(parts[0]), col = Number(parts[1]), row = Number(parts[2]);
      if (level > view.level || corpses.some(function (corpse) { return corpse.level === level && corpse.col === col && corpse.row === row; })) return;
      var foot = Iso.toScreen(col + 0.5, row + 0.5, elevationOf(col, row, level));
      var rect = { x: foot.x - 22, y: foot.y - 16, width: 44, height: 26 };
      items.push({ depth: depthKey(col, row, level, 1.25), rect: rect, draw: function () {
        var x = foot.x - camera.x, y = foot.y - camera.y;
        context.save();
        context.fillStyle = 'rgba(0, 0, 0, 0.28)';
        context.beginPath(); context.ellipse(x, y + 2, 17, 6, 0, 0, Math.PI * 2); context.fill();
        list.slice(0, 3).forEach(function (entry, index) {
          var info = Items.info(entry.item), long = Math.max(info.w, info.h);
          var width = long > 1 ? 36 : 19, height = long > 1 ? 14 : 19;
          Items.drawItem(context, entry.item, x - width / 2 + (index - 1) * 7, y - height + 3 - index * 2, width, height);
        });
        context.restore();
      } });
    });
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
    corpseItems().forEach(function (item) { rects.push(item.rect); drawList.push(item); });
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
    drawAimMarker();
    drawParticles();
    drawThrows();
    drawCombatEffects();
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

    var dynamic = floorOverlays().concat(corpseItems());
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
    drawAimMarker();
    drawParticles();
    drawThrows();
    drawCombatEffects();
  }

  // ---------------- связь с панелью ----------------
  setCombat(combat);
  setPhaseLabel();
  var Game = window.Game = {
    COST: COST, MAGAZINE: MAGAZINE, FIRE_MODES: FIRE_MODES, GRID: GRID,
    units: units, obstacles: obstacles, camera: camera, KINDS: KINDS,
    get selected() { return selected; },
    get turn() { return turn; },
    get message() { return Date.now() < message.until ? message.text : ''; },
    get busy() { return busy(); },
    get view() { return view; },
    get combat() { return combat; },
    get aiming() { return aiming; },
    get phase() { return phase; },
    modesOf: modesOf,
    cheapestCost: cheapestCost,
    // шансы попадания по цели под курсором для каждого режима огня выбранного бойца (или null)
    aimChances: function () {
      if (!aiming || !selected || busy()) return null;
      var target = aimTargetUnderMouse();
      if (!target || !target.unit) return null;
      return modesOf(selected).map(function (mode, index) { return shotPreview(selected, target, index).chance; });
    },
    setCombat: setCombat,
    atEase: atEase,
    // ---- снаряжение: для экрана снаряжения (js/inventory.js) ----
    squad: function () { return units.filter(function (unit) { return unit.side === 'squad' && unit.inventory; }); },
    inventoryView: function (unit) {
      var weight = carriedWeight(unit);
      return { entries: unit.inventory || [], ground: unit.inventory ? groundAt(unit.col, unit.row, unit.level) : [], weight: weight,
        strength: unit.strength || 0, overload: overload(unit), timeUnits: unit.timeUnits, maxTimeUnits: unit.maxTimeUnits, canAct: inventoryActive(unit) };
    },
    LEVELS: LEVELS,
    handView: handView,
    handActions: handActions,
    handAction: handAction,
    get throwing() { return !!throwing; },
    statsOf: function (unit) { return { weight: carriedWeight(unit), overload: overload(unit) }; },
    inventoryCost: function (unit, itemId, toSlot) { var found = findItem(unit, itemId); return found ? Items.moveCost(found.entry.slot, toSlot) : null; },
    inventoryMove: function (unit, itemId, toSlot, x, y) { return moveItem(unit, itemId, toSlot, x, y); },
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
      if (name === 'aim') toggleAim();
      else if (name === 'kneel') toggleKneel();
      else if (name === 'reload') reload();
      else if (name === 'next') selectNext();
      else if (name === 'endTurn') endTurn();
      else if (name === 'gear') openInventory();
      else if (name === 'up') { if (view.level < LEVELS - 1) setView(view.level + 1, view.cut); }
      else if (name === 'down') { if (view.level > 0) setView(view.level - 1, view.cut); }
      else say('Пока не работает');
      updateHover();
    }
  };

  // ---------------- цикл ----------------
  var lastTime = performance.now();
  function frame(now) {
    window.requestAnimationFrame(frame);          // сразу: ошибка в кадре не останавливает игру
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
    updateShots(now);
    updateThrows(now);
    updateWrecks(now);
    updateAI(now);
    // выбранный юнит сменил этаж (лестница) — обзор переходит на его уровень
    if (phase === 'squad' && selected && followLevel(selected) !== followedLevel) viewFollow(selected);
    // боец вошёл в помещение или вышел из него — стены срезаются или восстанавливаются
    if (phase === 'squad' && selected) {
      var indoorKey = (selected === indoorWatch.unit ? '' : 'new') + (isIndoor(selected.col, selected.row, selected.level) ? 'in' : 'out');
      if (selected === indoorWatch.unit && indoorKey !== indoorWatch.state) viewFollow(selected);
      indoorWatch.unit = selected; indoorWatch.state = indoorKey.replace('new', '');
    }
    if (wasMoving) updateHover();
    render();
    if (window.Panel) window.Panel.update();
  }

  resize();
  setView(selected.level, false);
  centerOn(selected.x, selected.y - 2);
  window.requestAnimationFrame(frame);

  // для автотеста
  window.__game = {
    units: units, camera: camera, view: view, select: function (index) { selectUnit(units[index], false); }, drawPosition: drawPosition,
    fire: function (shooter, target, modeIndex) { return fire(shooter, { unit: target, point: targetPointOf(target) }, modeIndex); },
    preview: function (shooter, target, modeIndex) { return shotPreview(shooter, { unit: target, point: targetPointOf(target) }, modeIndex); },
    trace: function (from, to, range, ignore) { return Combat.trace(combatWorld, from, to, range, ignore); },
    get shots() { return shots.length; }, get phase() { return phase; }, endTurn: function () { endTurn(); }, corpses: corpses, get particles() { return particles; }, kill: function (unit) { kill(unit); }, groundItems: groundItems, get aimTarget() { return aimTarget; }, reactionCheck: function (unit) { reactionCheck(unit); },
    clickTile: function (col, row, level) {
      var point = Iso.toScreen(col + 0.5, row + 0.5, elevationOf(col, row, level || 0));
      return { x: point.x - camera.x, y: point.y - camera.y };
    },
    doors: doors, setView: setView, findPath: function (index, col, row, level) { return findPath(units[index], { col: col, row: row, level: level }); },
    centerOn: centerOn, variantReady: function () { if (TILESET) return tileImage.complete; var variant = variants[variantKey(view.level, view.cut)]; return !!(variant && variant.ready); }
  };
})();
