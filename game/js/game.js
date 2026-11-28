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
  var WALL_BLOCKS = [false, true, true, false, true, true, true, true, true];   // нет, стена, окно, дверь, перила, парапет, отбойник, обшивка, сетка

  // типы юнитов: шаг анимации (stride, м за 16 кадров) совпадает с рендером спрайтов
  var KINDS = {
    soldier: { size: 1, speed: 1.5, stride: 1.32, height: 1.85, pickWidth: 26, canKneel: true },
    alien: { size: 1, speed: 1.5, stride: 1.2, height: 2.0, pickWidth: 26, canKneel: false },
    mech: { size: 2, speed: 1.6, stride: 1.6, height: 4.0, pickWidth: 80, canKneel: false, groundOnly: true },
    // гражданские (civilian.js): шаг 0,7 м, цикл 1,4 м; у детей модель меньше в 0,65 раза
    civilian: { size: 1, speed: 1.4, stride: 1.4, height: 1.78, pickWidth: 24, canKneel: true },
    child: { size: 1, speed: 1.1, stride: 0.92, height: 1.2, pickWidth: 18, canKneel: true },
    // персонал базы при обороне: военнослужащие по контракту, модель гражданского с бронежилетом, каской и автоматом
    staff: { size: 1, speed: 1.4, stride: 1.32, height: 1.78, pickWidth: 24, canKneel: true }
  };
  // боец или машина отряда (не гражданский)
  function isFighter(unit) { return unit.side === 'squad' && unit.kind !== 'civilian' && unit.kind !== 'child'; }
  function isCivilian(unit) { return unit.kind === 'civilian' || unit.kind === 'child'; }

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
  // Спрайты грузятся через очередь js/assets.js: сначала стойки (их видно сразу), потом прицел и первый
  // кадр ходьбы, затем остальная ходьба, лестница и падение. Кадр, нужный прямо сейчас, идёт вне очереди.
  var images = {};
  function spriteSource(name) { return (name.indexOf('rock') === 0 ? 'assets/objects/' : 'assets/units/') + name + '.png'; }
  function spritePriority(name) {
    if (/_idle_|_ease_|^rock/.test(name)) return 2;
    if (/_kneelAim_|_standAim_|_walk_f0_/.test(name)) return 3;
    if (/_walk_/.test(name)) return 4;
    return 5;
  }
  // кадры гражданских (civ*) грузятся только когда понадобятся (drawableSprite): на картах без них не тратят трафик
  Object.keys(SPRITE_ANCHORS).forEach(function (name) { if (!/^(civ|staff)/.test(name)) images[name] = Assets.image(spriteSource(name), spritePriority(name)); });
  // Имя кадра, который можно нарисовать сейчас: нужный, а пока он не загружен — стойка того же юнита
  // в том же направлении (или в любом). Для лежащих тел подходит только кадр тела. null — рисовать нечего.
  function drawableSprite(name) {
    if (!images[name] && SPRITE_ANCHORS[name]) images[name] = Assets.image(spriteSource(name), spritePriority(name));
    var image = images[name];
    if (Assets.ready(image)) return name;
    if (image) Assets.want(spriteSource(name));
    var match = /^([a-z]+)_.*_d(\d+)$/.exec(name);
    if (!match) return null;
    var set = match[1], direction = match[2];
    var candidates = /_dead_|_fall_/.test(name) ? [set + '_dead_d' + direction]
      : [set + '_idle_d' + direction, set + '_ease_d' + direction, set + '_walk_f0_d' + direction];
    for (var index = 0; index < candidates.length; index++) if (Assets.ready(images[candidates[index]])) return candidates[index];
    if (/_dead_|_fall_/.test(name)) return null;
    for (var other = 0; other < 8; other++) if (Assets.ready(images[set + '_idle_d' + other])) return set + '_idle_d' + other;
    return null;
  }

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
      side: 'squad', accuracy: 62, reactions: 38, armor: 35, weaponType: 'autocannon',
      weapon: 'АВТОПУШКА АП-30', weaponNote: 'КАЛИБР 30 ММ · ЛЕНТА', ammo: 40, reserve: 3,
      maxTimeUnits: 72, health: 360, maxHealth: 360, stamina: 100, maxStamina: 100, morale: 100, optics: 'ТЕПЛОВИЗОР',
      statLabels: ['ОЧКИ ДЕЙСТВИЯ', 'КОРПУС', 'ЭНЕРГИЯ', 'СВЯЗЬ'] }
  ];
  // ещё два бойца — для карт, где отряд из шести (MAP.spawns.squad)
  var EXTRA_SOLDIERS = [
    { name: 'Сергей Лебедев', callsign: 'ВОРОН-5', rank: 'сержант', role: 'САНИТАР', missions: 8, camo: 'green',
      side: 'squad', accuracy: 60, reactions: 58, strength: 40, bravery: 64, throwing: 56, armor: 10,
      maxTimeUnits: 58, health: 44, maxHealth: 44, stamina: 68, maxStamina: 72, morale: 85, optics: 'ОЧКИ',
      loadout: [['carbine', 'rightHand', 30], ['carbineMag', 'belt'], ['carbineMag', 'belt'], ['carbineMag', 'belt'],
        ['medkit', 'backpack'], ['medkit', 'backpack'], ['grenade', 'leftShoulder']] },
    { name: 'Дина Абрамова', callsign: 'ВОРОН-6', rank: 'ефрейтор', role: 'СНАЙПЕР', missions: 5, camo: 'black',
      side: 'squad', accuracy: 78, reactions: 66, strength: 30, bravery: 55, throwing: 60, armor: 8,
      maxTimeUnits: 60, health: 36, maxHealth: 38, stamina: 60, maxStamina: 62, morale: 80, optics: 'ПНВ',
      loadout: [['carbineM', 'rightHand', 30], ['carbineMag', 'belt'], ['carbineMag', 'belt'], ['carbineMag', 'belt'], ['carbineMag', 'leftLeg']] }
  ];
  // пришелец N: как стражи выше, здоровье и меткость немного разные
  function alienProfile(number) {
    var health = 50 + (number * 7) % 9;
    return { kind: 'alien', name: 'Страж, особь ' + number, callsign: 'ЦЕЛЬ-' + number, rank: 'страж', subtitle: 'ПРИШЕЛЕЦ · УПРАВЛЯЕТ ИИ', camo: 'alien',
      side: 'aliens', accuracy: 56 + (number * 5) % 9, reactions: 46 + (number * 3) % 9, strength: 50, bravery: 80, throwing: 50, armor: 6,
      maxTimeUnits: 64, health: health, maxHealth: 58, stamina: 90, maxStamina: 90, morale: 100, optics: 'РАЗГРУЗКА',
      loadout: [['plasmaPistol', 'rightHand', 20], ['energyCell', 'belt'], ['energyCell', 'belt']] };
  }
  // Элита из портала — серебристый и золотистый стражи: плазменная винтовка (урон в 1,5 раза больше), личный щит спереди (shield, %)
  // и один купол-щит вокруг портала (domeCharges). Портрет — как у обычного стража.
  // Здоровье: у серебристого — вдвое больше, чем у зелёного, у золотистого — ещё вдвое (вчетверо больше зелёного).
  // В спасении в городе из портала приходят серебристые (MAP.mission.portalElite), золотистые — для следующих заданий.
  var ALIEN_MAX_HEALTH = 58;
  var ELITE = {
    silver: { name: 'Серебристый страж', rank: 'серебристый страж', camo: 'aliensilver', health: 2 },
    gold: { name: 'Золотой страж', rank: 'золотой страж', camo: 'aliengold', health: 4 }
  };
  function eliteAlienProfile(number, metal) {
    var profile = alienProfile(number), elite = ELITE[metal] || ELITE.silver;
    profile.name = elite.name + ', особь ' + number; profile.rank = elite.rank; profile.camo = elite.camo; profile.portrait = 'alien';
    profile.subtitle = 'ЭЛИТА · ЛИЧНЫЙ ЩИТ · УПРАВЛЯЕТ ИИ'; profile.accuracy += 6; profile.elite = metal;
    profile.health *= elite.health; profile.maxHealth = ALIEN_MAX_HEALTH * elite.health;
    profile.shield = 100; profile.domeCharges = 1;
    profile.loadout = [['plasmaRifle', 'rightHand', 20], ['energyCell', 'belt'], ['energyCell', 'belt']];
    return profile;
  }
  // Состав по карте: spawns-массив — прежний порядок PROFILES (4 бойца, 2 пришельца, K7);
  // spawns-объект { squad, mech, aliens } — столько бойцов, роботов и пришельцев, сколько точек высадки
  // режим страницы (?mode=manage): мирная база — без пришельцев, обстановка мирная, меню базы (js/basemenu.js)
  var PAGE_MODE = (function () { var match = /[?&]mode=([a-z]+)/.exec(location.search); return match ? match[1] : ''; })();
  // Задание карты (MAP.mission): спасение — гражданские, учёный (vip), таймер портала (timeLimit, с), место портала
  var MISSION = MAP.mission || null;
  // демо: финальный кадр на базе (arrivalUnits, arrivalFinale)
  var ARRIVAL = !!(window.Demo && Demo.arrival) && window.ALIENS_MAP === 'base' && !!window.BaseStore && !!MAP.extraction && PAGE_MODE === 'manage';
  function civilianProfile(person, number) {
    var child = !!person.child;
    return {
      kind: child ? 'child' : 'civilian', name: person.name, camo: 'civ' + person.kind, side: 'civilians', vip: !!person.vip, child: child,
      callsign: person.vip ? 'УЧЁНЫЙ' : (child ? 'РЕБЁНОК-' : 'ГРАЖД-') + number,
      rank: person.vip ? 'важная персона' : child ? 'ребёнок' : 'гражданский', role: person.vip ? 'ВАЖНАЯ ПЕРСОНА' : 'ГРАЖДАНСКИЙ',
      subtitle: 'ГРАЖДАНСКИЙ · БЕЗ ОРУЖИЯ', missions: 0,
      accuracy: 0, reactions: 20, strength: child ? 10 : 22, bravery: 25, throwing: 20, armor: 0,
      maxTimeUnits: child ? 44 : 50, health: child ? 22 : 30, maxHealth: child ? 22 : 30, stamina: 50, maxStamina: 50, morale: 40, optics: '—',
      loadout: []
    };
  }
  // Персонал базы — служащие по контракту с Минобороны: при нападении на базу берут оружие и обороняются.
  // На стороне отряда; по умолчанию действуют сами (staffDecide), игрок может взять любого под управление щелчком.
  // В мирной обстановке — в рабочей одежде без оружия (стойка ease), в бою — бронежилет, каска, автомат (набор staff<вид>).
  function staffProfile(person) {
    return {
      kind: 'staff', name: person.name, camo: 'staff' + person.look, portrait: 'civ' + person.look, side: 'squad', staff: true, ai: true,
      callsign: person.name.split(' ').slice(-1)[0].toUpperCase(), rank: person.specialty, role: 'ПЕРСОНАЛ БАЗЫ',
      subtitle: 'ПЕРСОНАЛ БАЗЫ · ' + person.workplace.toUpperCase(), missions: 0,
      accuracy: 48, reactions: 42, strength: 30, bravery: 45, throwing: 40, armor: 8,
      maxTimeUnits: 54, health: 34, maxHealth: 34, stamina: 56, maxStamina: 56, morale: 60, optics: '—',
      loadout: [['carbine', 'rightHand', 30], ['carbineMag', 'belt'], ['carbineMag', 'belt']]
    };
  }
  // Полиция (MISSION.police — дежурные в отделе): на стороне отряда, действуют сами (staffDecide — как персонал базы:
  // стреляют по замеченным пришельцам, потом укрываются), игрок может взять под управление щелчком.
  // Форма, бронежилет поверх, фуражка, служебный пистолет (спрайты staffpolice_*, tools/render/civilian.js: police).
  function policeProfile(person, number) {
    return {
      kind: 'staff', name: person.name || 'Полицейский', camo: 'staffpolice', portrait: 'civpolice', side: 'squad', staff: true, ai: true, police: true,
      callsign: 'ПОЛИЦИЯ-' + number, rank: person.rank || 'сержант полиции', role: 'ПОЛИЦИЯ',
      subtitle: 'ПОЛИЦИЯ · ДЕЖУРНАЯ ЧАСТЬ', missions: 0,
      accuracy: 46, reactions: 44, strength: 28, bravery: 50, throwing: 35, armor: 10,
      maxTimeUnits: 54, health: 34, maxHealth: 34, stamina: 56, maxStamina: 56, morale: 60, optics: '—',
      loadout: [['pistol', 'rightHand', 17], ['pistolMag', 'belt'], ['pistolMag', 'belt']]
    };
  }
  // снаряжение корабля с базы (basestore.js, «Снарядить корабль»): на заданиях с конвертопланом летят отмеченные
  // бойцы (по местам высадки в порядке посадки), K7 — если отмечен, груз лежит в ящике у отряда
  var SHIP = (function () {
    if (!window.BaseStore || !MAP.extraction || PAGE_MODE === 'manage') return null;
    var ship = BaseStore.state.ship;
    return ship.configured && ship.crew.length ? ship : null;
  })();
  function soldierProfiles() { return PROFILES.filter(function (profile) { return profile.side === 'squad' && !profile.kind; }).concat(EXTRA_SOLDIERS); }
  function roster() {
    var spawns = MAP.spawns;
    if (Array.isArray(spawns)) return PROFILES.map(function (profile, index) { return makeUnit(profile, spawns[index]); });
    var soldiers = soldierProfiles();
    var mech = PROFILES.filter(function (profile) { return profile.kind === 'mech'; })[0];
    var list = [];
    if (ARRIVAL) list = arrivalUnits(soldiers, mech);
    else if (SHIP) {
      var crew = SHIP.crew.map(function (callsign) { return soldiers.filter(function (profile) { return profile.callsign === callsign; })[0]; }).filter(Boolean);
      (spawns.squad || []).slice(0, crew.length).forEach(function (spawn, index) { list.push(makeUnit(crew[index], spawn)); });
      if (SHIP.mech && mechAtBase()) (spawns.mech || []).forEach(function (spawn) { list.push(makeUnit(mech, spawn)); });
    } else {
      (spawns.squad || []).forEach(function (spawn, index) { list.push(makeUnit(soldiers[index % soldiers.length], spawn)); });
      // на карте базы K7 нет, если машина потеряна на задании и новая ещё не собрана (BaseStore.mechState)
      if (window.ALIENS_MAP !== 'base' || mechAtBase()) (spawns.mech || []).forEach(function (spawn) { list.push(makeUnit(mech, spawn)); });
    }
    if (PAGE_MODE !== 'manage') (spawns.aliens || []).forEach(function (spawn, index) { list.push(makeUnit(alienProfile(index + 1), spawn)); });
    // персонал базы (BaseStore.people, js/basestore.js) — на рабочих местах из плана базы (BASE_PLAN): в мирной обстановке
    // стоят, при нападении присели и прячутся, как гражданские задания
    if (window.ALIENS_MAP === 'base' && window.BaseStore && window.BASE_PLAN) list = list.concat(baseStaffUnits(list));
    // спасённые с прошлого задания (учёный, дети) — в салоне КТ-6 на базе, до следующего вылета
    if (window.ALIENS_MAP === 'base' && window.BaseStore && MAP.extraction && !ARRIVAL) list = list.concat(passengerUnits(list));
    // гражданские задания (MAP.mission.civilians): прячутся, пока к ним не подойдёт боец
    if (MISSION && MISSION.civilians && PAGE_MODE !== 'manage') {
      var adults = 0, children = 0;
      MISSION.civilians.forEach(function (person) {
        var number = person.vip ? 0 : person.child ? ++children : ++adults;
        var unit = makeUnit(civilianProfile(person, number), [person.col, person.row, person.level, person.dir]);
        // hidden — спрятались в укрытии (хранилище, домик): стоят; иначе — присели, руки на голове
        unit.kneeling = !person.hidden;
        list.push(unit);
      });
    }
    if (MISSION && MISSION.police && PAGE_MODE !== 'manage') {
      MISSION.police.forEach(function (person, index) { list.push(makeUnit(policeProfile(person, index + 1), [person.col, person.row, person.level, person.dir])); });
    }
    return list;
  }
  // Демо, финальный кадр (js/demo.js, base.html?…&arrival=1): вернувшиеся с задания бойцы (BaseStore.state.arrival),
  // учёный и дети (ship.passengers) стоят на рампе КТ-6 лицом вниз по рампе; K7, если вернулся, — на своём месте
  // в салоне у кабины. Рампа — крайние ряды зоны эвакуации со стороны больших col; места — от края рампы вглубь,
  // от середины по ширине к бортам: впереди посередине учёный и дети, бойцы — по краям и за ними.
  function arrivalUnits(soldiers, mech) {
    var arrival = BaseStore.state.arrival;
    var crew = (arrival ? arrival.crew : soldiers.slice(0, 6).map(function (profile) { return profile.callsign; }))
      .map(function (callsign) { return soldiers.filter(function (profile) { return profile.callsign === callsign; })[0]; }).filter(Boolean);
    var passengers = (BaseStore.state.ship.passengers || []).slice().sort(function (first, second) { return (second.vip ? 2 : second.child ? 1 : 0) - (first.vip ? 2 : first.child ? 1 : 0); });
    var cells = MAP.extraction.filter(function (cell) { return walkable(cell[0], cell[1], cell[2] || 0); });
    var rampCol = Math.max.apply(null, cells.map(function (cell) { return cell[0]; }));
    var noseCol = Math.min.apply(null, cells.map(function (cell) { return cell[0]; }));
    var centerRow = cells.reduce(function (sum, cell) { return sum + cell[1]; }, 0) / cells.length;
    var spots = cells.slice().sort(function (first, second) { return (rampCol - first[0]) - (rampCol - second[0]) || Math.abs(first[1] - centerRow) - Math.abs(second[1] - centerRow); });
    var facing = Iso.directionOf(1, 0);
    if (facing < 0) facing = 1;
    var bayRow = Math.floor(centerRow) - 1 + (centerRow % 1 ? 1 : 0);
    var takenSpots = mech && arrival && arrival.mech ? spots.filter(function (cell) { return cell[0] <= noseCol + 1 && cell[1] >= bayRow && cell[1] <= bayRow + 1; }) : [];
    var free = spots.filter(function (cell) { return takenSpots.indexOf(cell) < 0; });
    // сначала места спасённым (впереди посередине), затем бойцам
    var passengerSpots = free.slice(0, passengers.length), crewSpots = free.slice(passengers.length);
    var list = [], children = 0;
    crew.forEach(function (profile, index) {
      var spot = crewSpots[index];
      if (spot) list.push(makeUnit(profile, [spot[0], spot[1], spot[2] || 0, facing]));
    });
    if (takenSpots.length) list.push(makeUnit(mech, [noseCol, bayRow, 0, facing]));
    passengers.forEach(function (passenger, index) {
      var spot = passengerSpots[index];
      if (!spot) return;
      var profile = civilianProfile({ name: passenger.name, kind: passenger.look, child: passenger.child, vip: passenger.vip }, passenger.child ? ++children : 0);
      profile.staff = true;
      profile.subtitle = 'НА БОРТУ КТ-6 · ПРИБЫЛ С ЗАДАНИЯ';
      list.push(makeUnit(profile, [spot[0], spot[1], spot[2] || 0, facing]));
    });
    return list;
  }
  function mechAtBase() { return !window.BaseStore || !BaseStore.mechState || BaseStore.mechState() === 'ready'; }
  // пассажиры КТ-6 (BaseStore.state.ship.passengers): по свободным клеткам салона у открытой рампы (рампа — со стороны
  // больших col: там салон не закрыт корпусом), ближе к середине по ширине, через одну; лицом к рампе
  function passengerUnits(placed) {
    var passengers = BaseStore.state.ship.passengers || [];
    if (!passengers.length) return [];
    var cells = MAP.extraction.slice(), taken = {};
    placed.forEach(function (unit) { taken[unit.level + ':' + unit.col + ':' + unit.row] = true; });
    var centerRow = cells.reduce(function (sum, cell) { return sum + cell[1]; }, 0) / cells.length;
    var rampCol = Math.max.apply(null, cells.map(function (cell) { return cell[0]; }));
    // крайний ряд клеток — уже рампа: стоят на ряд глубже, в салоне
    var score = function (cell) { return Math.abs(rampCol - 1 - cell[0]) * 1.5 + Math.abs(cell[1] - centerRow); };
    cells.sort(function (first, second) { return score(first) - score(second); });
    var result = [], children = 0;
    passengers.forEach(function (passenger) {
      var spot = cells.filter(function (cell) {
        if (taken[(cell[2] || 0) + ':' + cell[0] + ':' + cell[1]] || !walkable(cell[0], cell[1], cell[2] || 0)) return false;
        for (var dy = -1; dy <= 1; dy++) for (var dx = -1; dx <= 1; dx++) if ((dx || dy) && taken[(cell[2] || 0) + ':' + (cell[0] + dx) + ':' + (cell[1] + dy)]) return false;
        return true;
      })[0] || cells.filter(function (cell) { return !taken[(cell[2] || 0) + ':' + cell[0] + ':' + cell[1]]; })[0];
      if (!spot) return;
      taken[(spot[2] || 0) + ':' + spot[0] + ':' + spot[1]] = true;
      var profile = civilianProfile({ name: passenger.name, kind: passenger.look, child: passenger.child, vip: passenger.vip }, passenger.child ? ++children : 0);
      profile.staff = true;                                  // не «спасается» бойцами, на базе стоит на месте
      profile.subtitle = 'НА БОРТУ КТ-6 · ПРИБЫЛ С ЗАДАНИЯ';
      var facing = Iso.directionOf(1, 0);
      result.push(makeUnit(profile, [spot[0], spot[1], spot[2] || 0, facing >= 0 ? facing : 1]));
    });
    return result;
  }
  // вылет с базы: пассажиры прошлого рейса переходят в каюты
  if (SHIP && window.ALIENS_MAP !== 'base' && window.BaseStore && BaseStore.disembark) BaseStore.disembark();
  // фигуры персонала базы: по одной свободной клетке в помещении рабочего места, от середины помещения к краям;
  // не на клетках у дверей и лестниц, не на клетках, занятых бойцами и пришельцами
  function baseStaffUnits(placed) {
    var PLAN_COL = 1, PLAN_ROW = 6;                    // сдвиг плана на поле (tools/render/outpost_layout.js)
    var taken = {}, avoid = {};
    var key = function (col, row, level) { return level + ':' + col + ':' + row; };
    placed.forEach(function (unit) { for (var dy = 0; dy < unit.size; dy++) for (var dx = 0; dx < unit.size; dx++) taken[key(unit.col + dx, unit.row + dy, unit.level)] = true; });
    (MAP.doors || []).forEach(function (door) {
      avoid[key(door[0], door[1], door[2])] = true;
      if (door[3] === 0) avoid[key(door[0] - 1, door[1], door[2])] = true; else avoid[key(door[0], door[1] - 1, door[2])] = true;
    });
    (MAP.stairs || []).forEach(function (stair) {
      for (var step = -1; step <= stair[5]; step++) avoid[key(stair[1] + stair[3] * step, stair[2] + stair[4] * step, stair[0])] = avoid[key(stair[1] + stair[3] * step, stair[2] + stair[4] * step, stair[0] + 1)] = true;
    });
    var result = [];
    BaseStore.people().forEach(function (person, number) {
      var room = BASE_PLAN.rooms.filter(function (item) { return item.name === person.workplace; })[0];
      if (!room) return;
      var level = room.floor || 0, centerCol = room.x + room.width / 2 - 0.5, centerRow = room.y + room.height / 2 - 0.5, cells = [];
      for (var row = room.y; row < room.y + room.height; row++) for (var col = room.x; col < room.x + room.width; col++) cells.push([col, row]);
      cells.sort(function (first, second) { return Math.hypot(first[0] - centerCol, first[1] - centerRow) - Math.hypot(second[0] - centerCol, second[1] - centerRow); });
      // в одном помещении несколько человек — расходятся по клеткам через одну, чтобы не стоять вплотную
      var spot = null;
      for (var pass = 0; pass < 2 && !spot; pass++) {
        spot = cells.filter(function (cell) {
          var col = cell[0] + PLAN_COL, row = cell[1] + PLAN_ROW;
          if (taken[key(col, row, level)] || avoid[key(col, row, level)] || !walkable(col, row, level)) return false;
          if (pass === 0) for (var dy = -1; dy <= 1; dy++) for (var dx = -1; dx <= 1; dx++) if (taken[key(col + dx, row + dy, level)]) return false;
          return true;
        })[0] || null;
      }
      if (!spot) return;
      var col = spot[0] + PLAN_COL, row = spot[1] + PLAN_ROW;
      taken[key(col, row, level)] = true;
      var profile = staffProfile(person);
      // лицом к середине помещения
      var direction = Iso.directionOf(centerCol - spot[0], centerRow - spot[1]);
      var unit = makeUnit(profile, [col, row, level, direction >= 0 ? direction : (number % 8)]);
      result.push(unit);
    });
    return result;
  }
  var MISSION_RUN = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);   // номер запуска — склад базы принимает итоги один раз
  var units = roster();
  var startUnits = units.slice();      // состав в начале задания — для итогов
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
        var cargo = ['carbineMag', 'carbineMag', 'medkit', 'grenade'];
        if (SHIP) { cargo = []; Object.keys(SHIP.cargo).forEach(function (type) { for (var copy = 0; copy < SHIP.cargo[type]; copy++) cargo.push(type); }); }
        cargo.forEach(function (type) { dropOnGround(Items.make(type), col, row, first.level); });
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
  // укрытия задания (MAP.mission.shelters: [col0, row0, col1, row1, level]) — хранилище банка, детский домик:
  // гражданские спрятались там, пришельцы туда не заходят
  var SHELTERS = MISSION && MISSION.shelters || [];
  function inShelter(col, row, level) {
    for (var index = 0; index < SHELTERS.length; index++) {
      var area = SHELTERS[index];
      if (level === area[4] && col >= area[0] && col <= area[2] && row >= area[1] && row <= area[3]) return true;
    }
    return false;
  }
  // pathIgnore — юниты, которые при прокладке пути не считаются препятствием (группа, идущая вместе: они уйдут с дороги)
  var pathIgnore = [];
  function isFreeFor(mover) {
    var size = mover ? mover.size : 1;
    return function (col, row, level) {
      if (mover && mover.groundOnly && level !== 0) return false;
      for (var dy = 0; dy < size; dy++) {
        for (var dx = 0; dx < size; dx++) {
          var cellCol = col + dx, cellRow = row + dy, blocker = unitAt(cellCol, cellRow, level, mover);
          if (!walkable(cellCol, cellRow, level) || (blocker && pathIgnore.indexOf(blocker) < 0) || wreckAt(cellCol, cellRow, level)) return false;
          if (mover && mover.side === 'aliens' && inShelter(cellCol, cellRow, level)) return false;
          if (size > 1 && stairRun(cellCol, cellRow, level)) return false;       // на лестничный марш большой юнит не встаёт
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
      // по диагонали — только по ровному полу: не через лестничные марши и без перепада между четырьмя клетками
      // (поднятый ровный пол, как в салоне конвертоплана, — можно)
      if (stairRun(col, row, level) || stairRun(nextCol, nextRow, level) || stairRun(col + deltaCol, row, level) || stairRun(col, row + deltaRow, level)) return false;
      var floorHeight = stairOffset(col, row, level);
      if (stairOffset(nextCol, nextRow, level) !== floorHeight || stairOffset(col + deltaCol, row, level) !== floorHeight || stairOffset(col, row + deltaRow, level) !== floorHeight) return false;
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
  // соседи узла для поиска пути: visit(ключ, стоимость шага, лестница)
  function neighbourFunction(mover, free) {
    return function neighbours(key, visit) {
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
    };
  }
  function findPath(mover, goal) {
    var free = isFreeFor(mover);
    if (!free(goal.col, goal.row, goal.level)) return null;
    var goalKey = nodeKey(goal.col, goal.row, goal.level);
    var neighbours = neighbourFunction(mover, free);
    function heuristic(key) {
      var node = keyNode(key);
      var dx = Math.abs(node.col - goal.col), dy = Math.abs(node.row - goal.row);
      return COST.step * (dx + dy) + (COST.diagonal - 2 * COST.step) * Math.min(dx, dy) + Math.abs(node.level - goal.level) * 2;
    }
    var raw = PathFinder.find(nodeKey(mover.col, mover.row, mover.level), goalKey, neighbours, heuristic, 30000);
    return raw ? stepsFromRaw(raw) : null;
  }
  function stepsFromRaw(raw) {
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
  // широкие проёмы (MAP.gates): двери группы открываются и закрываются вместе. Ворота шлюза (airlock — номер шлюза,
  // у шлюза двое ворот) открываются по очереди: пока одни не закрылись, другие не откроются. Кто идёт через проём,
  // ждёт у него, пока створка не поднимется (updateUnit); ждущий важнее тех, кто просто стоит рядом с другими воротами.
  var GATE_SPEED = { gate: 1.3, double: DOOR_SPEED };
  var gates = (MAP.gates || []).map(function (gate, index) {
    gate.doors.forEach(function (doorIndex) { doors[doorIndex].gate = index; });
    return { kind: gate.kind, airlock: gate.airlock, height: gate.height || (gate.kind === 'gate' ? 2.35 : 2.1), doors: gate.doors, open: 0, requested: false };
  });
  var airlockOwner = {};                 // шлюз -> ворота, которым сейчас можно быть открытыми
  function nearDoor(door) {
    return units.some(function (unit) {
      if (unit.dead || unit.level !== door.level) return false;
      var reach = DOOR_REACH + (unit.size - 1) * 0.8;
      var dx = unit.x - door.centerX, dy = unit.y - door.centerY;
      return dx * dx + dy * dy < reach * reach;
    });
  }
  function updateDoors(seconds) {
    doors.forEach(function (door) {
      if (door.gate !== undefined) return;
      var wanted = nearDoor(door) ? 1 : 0;
      door.open += Math.max(-DOOR_SPEED * seconds, Math.min(DOOR_SPEED * seconds, wanted - door.open));
    });
    var waiting = {};
    gates.forEach(function (gate) { if (gate.requested && gate.airlock >= 0) waiting[gate.airlock] = true; });
    gates.forEach(function (gate, index) {
      var wanted = gate.requested || (!(gate.airlock >= 0 && waiting[gate.airlock]) && gate.doors.some(function (doorIndex) { return nearDoor(doors[doorIndex]); }));
      if (gate.airlock >= 0) {
        var owner = airlockOwner[gate.airlock];
        if (owner !== undefined && owner !== index) wanted = false;
        else if (wanted) airlockOwner[gate.airlock] = index;
      }
      var speed = GATE_SPEED[gate.kind] || DOOR_SPEED;
      gate.open += Math.max(-speed * seconds, Math.min(speed * seconds, (wanted ? 1 : 0) - gate.open));
      if (gate.open <= 0 && !wanted && gate.airlock >= 0 && airlockOwner[gate.airlock] === index) { gate.open = 0; delete airlockOwner[gate.airlock]; }
      gate.requested = false;
      gate.doors.forEach(function (doorIndex) { doors[doorIndex].open = gate.open; });
    });
  }
  // ворота, через которые проходит шаг юнита (площадка size×size из (col, row) в (nextCol, nextRow) на том же уровне)
  function gatesOnStep(unit, nextCol, nextRow) {
    if (!gates.length || nextCol === undefined) return [];
    var deltaCol = nextCol - unit.col, deltaRow = nextRow - unit.row, found = [];
    function edge(orient, col, row) {
      var door = doorByEdge[orient + ':' + col + ':' + row + ':' + unit.level];
      if (door && door.gate !== undefined && found.indexOf(door.gate) < 0) found.push(door.gate);
    }
    function cross(col, row, toCol, toRow) {
      if (toCol !== col) edge('W', Math.max(col, toCol), row);
      else if (toRow !== row) edge('N', col, Math.max(row, toRow));
    }
    for (var dy = 0; dy < unit.size; dy++) for (var dx = 0; dx < unit.size; dx++) {
      var col = unit.col + dx, row = unit.row + dy;
      if (deltaCol && deltaRow) {
        cross(col, row, col + deltaCol, row); cross(col, row, col, row + deltaRow);
        cross(col + deltaCol, row, col + deltaCol, row + deltaRow); cross(col, row + deltaRow, col + deltaCol, row + deltaRow);
      } else cross(col, row, col + deltaCol, row + deltaRow);
    }
    return found;
  }

  // ---------------- туман войны ----------------
  // Видно то, что видят бойцы отряда: каждый боец смотрит во все стороны на VISION_CELLS клеток. Луч идёт по клеткам
  // своего уровня; стены, обшивка и закрытые двери его останавливают, окна, перила и парапеты — нет. Над проёмом
  // без пола (с верхнего этажа через окно) луч отмечает видимой клетку ниже. Пришелец виден, если его клетка видна
  // сейчас или он стрелял (до конца следующего хода отряда).
  // Как в UFO, карта разведывается: клетка, которую хоть раз видели, открыта навсегда (fog.explored), остальные
  // закрыты туманом (рисуется ниже, «туман на карте»). Клетка за стеной, в которую упёрся луч, тоже считается
  // разведанной — так видна сама стена (стена W/N принадлежит клетке за ней) и то, что у стены.
  // Работает на картах из тайлов в боевых заданиях; выключается в настройках («Туман войны»).
  var VISION_CELLS = 24, FOG_RAYS = 360;
  var SIGHT_BLOCKS = [false, true, false, 'door', false, false, false, true, false];   // нет, стена, окно, дверь, перила, парапет, отбойник, обшивка, сетка
  // explored — разведанное; version растёт при каждом открытии клеток, по нему пересчитывается картинка тумана
  var fog = { visible: null, explored: null, version: 0, signature: '', checkAt: 0 };
  var doorByEdge = {};
  doors.forEach(function (door) { doorByEdge[door.orient + ':' + door.col + ':' + door.row + ':' + door.level] = door; });
  function fogEnabled() {
    return !!MAP.tileset && MAP.combat !== false && PAGE_MODE !== 'manage' && (!window.Settings || Settings.values.fog !== false);
  }
  function sightBlocked(walls, orient, level, col, row) {
    if (col < 0 || row < 0 || col > GRID || row > GRID) return true;
    var rule = SIGHT_BLOCKS[walls[level][row * WALL_STRIDE + col]];
    if (rule === 'door') { var door = doorByEdge[orient + ':' + col + ':' + row + ':' + level]; return !door || door.open < 0.5; }
    return !!rule;
  }
  // можно ли взгляду перейти из клетки в соседнюю по стороне
  function sightOpen(col, row, nextCol, nextRow, level) {
    if (nextCol === col + 1) return !sightBlocked(MAP.wallW, 'W', level, col + 1, row);
    if (nextCol === col - 1) return !sightBlocked(MAP.wallW, 'W', level, col, row);
    if (nextRow === row + 1) return !sightBlocked(MAP.wallN, 'N', level, col, row + 1);
    if (nextRow === row - 1) return !sightBlocked(MAP.wallN, 'N', level, col, row);
    return true;
  }
  function markSeen(grids, col, row, level) {
    for (var below = level; below >= 0; below--) {
      if (floorAt(col, row, below)) { grids[below][row * GRID + col] = 1; return; }
    }
  }
  // touched — сетки, куда отмечаются клетки за стеной, в которую упёрся луч (для разведки карты)
  function castVision(unit, grids, cells, rays, touched) {
    var level = unit.level, count = rays || FOG_RAYS;
    for (var deltaRow = 0; deltaRow < unit.size; deltaRow++) for (var deltaCol = 0; deltaCol < unit.size; deltaCol++) markSeen(grids, unit.col + deltaCol, unit.row + deltaRow, level);
    for (var ray = 0; ray < count; ray++) {
      var angle = ray / count * Math.PI * 2, range = cells || VISION_CELLS;
      var stepX = Math.cos(angle) * 0.3, stepY = Math.sin(angle) * 0.3;
      var x = unit.x, y = unit.y, col = Math.floor(x), row = Math.floor(y);
      for (var travelled = 0; travelled < range; travelled += 0.3) {
        x += stepX; y += stepY;
        var nextCol = Math.floor(x), nextRow = Math.floor(y);
        if (nextCol === col && nextRow === row) continue;
        if (!inside(nextCol, nextRow)) break;
        var open;
        if (nextCol !== col && nextRow !== row) {
          open = (sightOpen(col, row, nextCol, row, level) && sightOpen(nextCol, row, nextCol, nextRow, level)) ||
            (sightOpen(col, row, col, nextRow, level) && sightOpen(col, nextRow, nextCol, nextRow, level));
        } else open = sightOpen(col, row, nextCol, nextRow, level);
        if (!open) { if (touched) markSeen(touched, nextCol, nextRow, level); break; }
        col = nextCol; row = nextRow;
        markSeen(grids, col, row, level);
      }
    }
  }
  // ---- линии взгляда юнитов для ИИ и ответного огня ----
  // Клетки, которые юнит может видеть на дальность оружия (те же лучи, что у тумана, без ограничения 24 клетками).
  // Нужны как быстрый предварительный отсев перед точной трассировкой Combat.trace: если на том же уровне клетка
  // юниту не видна (стены, закрытые двери), трассировку не делаем. Пересчёт — когда юнит сменил клетку или двери.
  // С большим числом юнитов (персонал базы) без отсева ход пришельцев тормозил: тысячи трассировок на решение.
  var LOS_CELLS = 0, losCache = new Map(), losDoors = { key: '', at: -1 };
  function losDoorKey() {
    var now = performance.now();
    if (now - losDoors.at > 50) { losDoors.key = doors.map(function (door) { return door.open < 0.5 ? 0 : 1; }).join(''); losDoors.at = now; }
    return losDoors.key;
  }
  function losGrids(unit) {
    if (!MAP.wallW || !MAP.wallN) return null;
    if (!LOS_CELLS) LOS_CELLS = Math.ceil(70 / combatWorld.tile) + 1;
    var key = unit.col + ',' + unit.row + ',' + unit.level + ',' + losDoorKey();
    var cached = losCache.get(unit);
    if (cached && cached.key === key) return cached.grids;
    var grids = newFogGrids();
    castVision(unit, grids, LOS_CELLS, 720);
    losCache.set(unit, { key: key, grids: grids });
    return grids;
  }
  // может ли viewer видеть клетку (false — точно нет: тот же уровень и клетка закрыта; true — проверять трассировкой)
  function mayHaveSight(viewer, col, row, level) {
    if (viewer.level !== level) return true;
    var grids = losGrids(viewer);
    if (!grids) return true;
    return !!grids[level][Math.floor(row) * GRID + Math.floor(col)];
  }
  function mayHaveSightOf(viewer, target) {
    for (var deltaRow = 0; deltaRow < target.size; deltaRow++) for (var deltaCol = 0; deltaCol < target.size; deltaCol++) {
      if (mayHaveSight(viewer, target.col + deltaCol, target.row + deltaRow, target.level)) return true;
    }
    return false;
  }
  function newFogGrids() { var grids = []; for (var level = 0; level < LEVELS; level++) grids.push(new Uint8Array(GRID * GRID)); return grids; }
  function computeFog() {
    var computeStart = performance.now();
    var next = newFogGrids(), touched = newFogGrids();
    units.forEach(function (unit) { if (unit.side === 'squad' && !unit.dead) castVision(unit, next, null, null, touched); });
    fog.visible = next;
    // разведка: новые клетки открываются навсегда; куски карты, которые они задевают, перерисовываются
    var opened = false;
    if (!fog.explored) {
      opened = true;
      fog.explored = newFogGrids();
      // в начале задания открыто всё, что на экране: граница тумана — по краю экрана (клетки, центр которых в окне)
      for (var screenRow = 0; screenRow < GRID; screenRow++) for (var screenCol = 0; screenCol < GRID; screenCol++) {
        var point = Iso.toScreen(screenCol + 0.5, screenRow + 0.5, 0);
        if (point.x >= camera.x && point.x <= camera.x + viewWidth && point.y >= camera.y && point.y <= camera.y + viewHeight) fog.explored[0][screenRow * GRID + screenCol] = 1;
      }
      // место высадки открыто сразу: салон конвертоплана (MAP.extraction) и вокруг него на 4 клетки — корпус, винты
      var cells = MAP.extraction || [];
      if (cells.length) {
        var minCol = Infinity, maxCol = -Infinity, minRow = Infinity, maxRow = -Infinity;
        cells.forEach(function (cell) { minCol = Math.min(minCol, cell[0]); maxCol = Math.max(maxCol, cell[0]); minRow = Math.min(minRow, cell[1]); maxRow = Math.max(maxRow, cell[1]); });
        for (var padRow = minRow - 4; padRow <= maxRow + 4; padRow++) for (var padCol = minCol - 4; padCol <= maxCol + 4; padCol++) {
          if (inside(padCol, padRow)) fog.explored[cells[0][2] || 0][padRow * GRID + padCol] = 1;
        }
      }
    }
    for (var level = 0; level < LEVELS; level++) {
      var explored = fog.explored[level], seen = next[level], near = touched[level];
      for (var cell = 0; cell < GRID * GRID; cell++) {
        if (!explored[cell] && (seen[cell] || near[cell])) { explored[cell] = 1; opened = true; }
      }
    }
    if (opened) fog.version++;
    tileStats.computeMs += performance.now() - computeStart; tileStats.computes++;
  }
  // пересчёт, когда сменились клетки бойцов или открылась/закрылась дверь (не чаще 5 раз в секунду)
  function updateFog(now) {
    if (!fogEnabled() || now < fog.checkAt) return;
    fog.checkAt = now + 200;
    var parts = [];
    units.forEach(function (unit) { if (unit.side === 'squad' && !unit.dead) parts.push(unit.col, unit.row, unit.level); });
    doors.forEach(function (door) { parts.push(door.open < 0.5 ? 0 : 1); });
    var signature = parts.join(',');
    if (signature === fog.signature && fog.visible) return;
    fog.signature = signature;
    computeFog();
  }
  function cellVisible(col, row, level) { return !fogEnabled() || !fog.visible || !!fog.visible[level][row * GRID + col]; }
  // виден ли юнит игроку: отряд (и присоединившиеся гражданские) всегда; остальные — пришельцы, гражданские, учёный —
  // если видна их клетка; пришелец ещё и если недавно стрелял. Невидимых нет на карте и на мини-карте.
  function isSeen(unit) {
    if (!unit || unit.side === 'squad' || !fogEnabled() || !fog.visible) return true;
    if (unit.revealedTurn === turn || (unit.revealedTurn === turn - 1 && phase !== 'aliens')) return true;
    for (var deltaRow = 0; deltaRow < unit.size; deltaRow++) for (var deltaCol = 0; deltaCol < unit.size; deltaCol++) {
      if (cellVisible(unit.col + deltaCol, unit.row + deltaRow, unit.level)) return true;
    }
    return false;
  }
  // ---------------- туман на карте ----------------
  // Туман рисуется поверх готовой карты отдельным слоем, кэш карты не трогается — поэтому граница может двигаться
  // за бойцом на каждом шаге. Плотность — картинка в координатах клеток (fogLayer, FOG_PX пикселей на клетку):
  // цвет — бесшовные клубы, прозрачность от 0 на границе с разведанным до полной через FOG_BAND клеток.
  // Одним drawImage она переводится на экран изометрическим преобразованием клетки -> экран (это линейно).
  // Слой кладётся несколько раз на высотах 0, 1, 2 … м (FOG_STEP): на высоте h — только клетки, у которых
  // содержимое (стены граней, предметы по рамкам MAP.solids) дотягивается до h, — так закрываются и дома, и деревья.
  // Цена: туман не встаёт в порядок глубины — верх открытого предмета у самой границы, залезающий на экране
  // на туман позади, слегка затемняется. Та же картинка — туман на мини-карте.
  var FOG_FLOOR_TOP = 0.35;
  var fogColumns = {};
  function fogColumnTops(viewLevel, cut) {
    var key = viewLevel + (cut ? 'c' : 'f');
    if (fogColumns[key]) return fogColumns[key];
    var bases = new Float32Array(GRID * GRID), tops = new Float32Array(GRID * GRID), floors = new Int8Array(GRID * GRID);
    for (var cell = 0; cell < GRID * GRID; cell++) {
      var col = cell % GRID, row = Math.floor(cell / GRID), floor = 0;
      for (var level = viewLevel; level >= 0; level--) if (floorAt(col, row, level)) { floor = level; break; }
      floors[cell] = floor;
      bases[cell] = elevationOf(col, row, floor);
      var top = bases[cell] + FOG_FLOOR_TOP;
      for (level = 0; level <= viewLevel; level++) {
        var wallTop = level * LEVEL_H + (cut && level === viewLevel ? 1.3 : LEVEL_H);
        if (MAP.wallW[level][row * WALL_STRIDE + col] || MAP.wallN[level][row * WALL_STRIDE + col]) top = Math.max(top, wallTop);
      }
      tops[cell] = top;
    }
    // предметы срезом не укорачиваются (срезаются только стены) — столб по полной высоте рамки
    (MAP.solids || []).forEach(function (box) {
      if (box[0] > viewLevel) return;
      var cell = box[2] * GRID + box[1];
      tops[cell] = Math.max(tops[cell], box[8]);
    });
    fogColumns[key] = { bases: bases, tops: tops, floors: floors };
    return fogColumns[key];
  }
  function cellExplored(col, row, level) { return !fog.explored || !!fog.explored[level][row * GRID + col]; }
  var FOG_PX = 4, FOG_BAND = 1.6;
  var fogCloud = null, fogLayerCache = { key: '', canvas: null };
  function fogCloudColors() {
    if (fogCloud) return fogCloud;
    // бесшовные клубы в координатах клеток: периоды 16, 8, 4 и 2 клетки
    var size = GRID * FOG_PX, colors = new Uint8ClampedArray(size * size * 3);
    var lattice = function (cells, seed) {
      var period = Math.max(1, Math.round(GRID / cells)), values = new Float32Array(period * period);
      for (var index = 0; index < values.length; index++) values[index] = fountainHash(seed + index * 1.7);
      return function (x, y) {
        var gx = x * period, gy = y * period, x0 = Math.floor(gx), y0 = Math.floor(gy), fx = gx - x0, fy = gy - y0;
        var sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy);
        var at = function (ix, iy) { return values[((iy % period + period) % period) * period + ((ix % period + period) % period)]; };
        return (at(x0, y0) * (1 - sx) + at(x0 + 1, y0) * sx) * (1 - sy) + (at(x0, y0 + 1) * (1 - sx) + at(x0 + 1, y0 + 1) * sx) * sy;
      };
    };
    var octaves = [[lattice(16, 11), 0.5], [lattice(8, 23), 0.27], [lattice(4, 37), 0.15], [lattice(2, 51), 0.08]];
    for (var y = 0; y < size; y++) for (var x = 0; x < size; x++) {
      var value = 0;
      for (var octave = 0; octave < octaves.length; octave++) value += octaves[octave][0](x / size, y / size) * octaves[octave][1];
      var wisp = Math.max(0, value - 0.48) * 2.2, offset = (y * size + x) * 3;
      colors[offset] = 12 + wisp * 52; colors[offset + 1] = 15 + wisp * 56; colors[offset + 2] = 21 + wisp * 62;
    }
    fogCloud = colors;
    return colors;
  }
  // картинка плотности тумана для уровня обзора: расстояние до ближайшей разведанной клетки (фаска 3-4 в пикселях)
  function fogLayer(viewLevel, cut) {
    if (!fogEnabled() || !fog.explored) return null;
    var key = fog.version + ':' + viewLevel + (cut ? 'c' : 'f');
    if (fogLayerCache.key === key) return fogLayerCache.canvas;
    var layerStart = performance.now();
    var size = GRID * FOG_PX, columns = fogColumnTops(viewLevel, cut), far = 1e9;
    var distance = new Float32Array(size * size);
    for (var y = 0; y < size; y++) {
      var row = Math.floor(y / FOG_PX);
      for (var x = 0; x < size; x++) {
        var col = Math.floor(x / FOG_PX), cell = row * GRID + col;
        distance[y * size + x] = cellExplored(col, row, columns.floors[cell]) ? 0 : far;
      }
    }
    var straight = 1, diagonal = 1.414;
    for (y = 0; y < size; y++) for (x = 0; x < size; x++) {
      var index = y * size + x, best = distance[index];
      if (!best) continue;
      if (x > 0) best = Math.min(best, distance[index - 1] + straight);
      if (y > 0) {
        best = Math.min(best, distance[index - size] + straight);
        if (x > 0) best = Math.min(best, distance[index - size - 1] + diagonal);
        if (x < size - 1) best = Math.min(best, distance[index - size + 1] + diagonal);
      }
      distance[index] = best;
    }
    for (y = size - 1; y >= 0; y--) for (x = size - 1; x >= 0; x--) {
      index = y * size + x; best = distance[index];
      if (!best) continue;
      if (x < size - 1) best = Math.min(best, distance[index + 1] + straight);
      if (y < size - 1) {
        best = Math.min(best, distance[index + size] + straight);
        if (x < size - 1) best = Math.min(best, distance[index + size + 1] + diagonal);
        if (x > 0) best = Math.min(best, distance[index + size - 1] + diagonal);
      }
      distance[index] = best;
    }
    var canvasLayer = fogLayerCache.canvas || document.createElement('canvas');
    canvasLayer.width = canvasLayer.height = size;
    var layerContext = canvasLayer.getContext('2d'), image = layerContext.createImageData(size, size), colors = fogCloudColors();
    var band = FOG_BAND * FOG_PX;
    for (index = 0; index < size * size; index++) {
      var ramp = Math.min(1, distance[index] / band), alpha = ramp * ramp * (3 - 2 * ramp);
      image.data[index * 4] = colors[index * 3]; image.data[index * 4 + 1] = colors[index * 3 + 1]; image.data[index * 4 + 2] = colors[index * 3 + 2];
      image.data[index * 4 + 3] = Math.round(alpha * 255);
    }
    layerContext.putImageData(image, 0, 0);
    fogLayerCache = { key: key, canvas: canvasLayer };
    tileStats.layerMs += performance.now() - layerStart; tileStats.layers++;
    return canvasLayer;
  }
  // маски высот: клетки, чей столб тумана захватывает высоту h (по пикселю на клетку, края смягчаются при растяжке).
  // Каждая маска хранит рамку своих клеток — слой высоты строится и рисуется только в её пределах.
  var FOG_STEP = 1, FOG_HEIGHT_PX = 2, fogHeightMasks = { key: '', list: [] };
  function fogHeights(viewLevel, cut) {
    var key = viewLevel + (cut ? 'c' : 'f');
    if (fogHeightMasks.key === key) return fogHeightMasks.list;
    var columns = fogColumnTops(viewLevel, cut), highest = 0;
    for (var cell = 0; cell < GRID * GRID; cell++) highest = Math.max(highest, columns.tops[cell]);
    var list = [];
    // первый слой — на полметра (скамейки, урны, низкие кусты), дальше через FOG_STEP
    for (var height = 0.5; height < highest; height = height < FOG_STEP ? FOG_STEP : height + FOG_STEP) {
      var minCol = GRID, minRow = GRID, maxCol = -1, maxRow = -1;
      for (cell = 0; cell < GRID * GRID; cell++) {
        if (columns.bases[cell] - 0.5 <= height && columns.tops[cell] >= height) {
          var col = cell % GRID, row = (cell - col) / GRID;
          if (col < minCol) minCol = col; if (col > maxCol) maxCol = col;
          if (row < minRow) minRow = row; if (row > maxRow) maxRow = row;
        }
      }
      if (maxCol < 0) continue;
      // запас в клетку — чтобы сглаженный край маски не обрезался рамкой
      minCol = Math.max(0, minCol - 1); minRow = Math.max(0, minRow - 1);
      maxCol = Math.min(GRID - 1, maxCol + 1); maxRow = Math.min(GRID - 1, maxRow + 1);
      var spanCols = maxCol - minCol + 1, spanRows = maxRow - minRow + 1;
      var maskCanvas = document.createElement('canvas');
      maskCanvas.width = spanCols; maskCanvas.height = spanRows;
      var maskContext = maskCanvas.getContext('2d'), image = maskContext.createImageData(spanCols, spanRows);
      for (row = minRow; row <= maxRow; row++) {
        for (col = minCol; col <= maxCol; col++) {
          cell = row * GRID + col;
          if (columns.bases[cell] - 0.5 <= height && columns.tops[cell] >= height) image.data[((row - minRow) * spanCols + col - minCol) * 4 + 3] = 255;
        }
      }
      maskContext.putImageData(image, 0, 0);
      list.push({ height: height, mask: maskCanvas, col: minCol, row: minRow, cols: spanCols, rows: spanRows, layer: null, version: -1 });
    }
    fogHeightMasks = { key: key, list: list };
    return list;
  }
  // слой тумана на высоте: кусок картинки плотности в рамке маски, обрезанный маской (смешение destination-in).
  // Разрешение ниже основного слоя (FOG_HEIGHT_PX) — граница всё равно размыта.
  function fogHeightLayer(entry, density) {
    if (entry.version === fog.version && entry.layer) return entry.layer;
    var width = entry.cols * FOG_HEIGHT_PX, height = entry.rows * FOG_HEIGHT_PX;
    if (!entry.layer) { entry.layer = document.createElement('canvas'); entry.layer.width = width; entry.layer.height = height; }
    var layerContext = entry.layer.getContext('2d');
    layerContext.imageSmoothingEnabled = true;
    layerContext.globalCompositeOperation = 'copy';
    layerContext.drawImage(density, entry.col * FOG_PX, entry.row * FOG_PX, entry.cols * FOG_PX, entry.rows * FOG_PX, 0, 0, width, height);
    layerContext.globalCompositeOperation = 'destination-in';
    layerContext.drawImage(entry.mask, 0, 0, width, height);
    layerContext.globalCompositeOperation = 'source-over';
    entry.version = fog.version;
    return entry.layer;
  }
  // Сборка слоёв в координатах клеток. Подъём на h метров на экране — это сдвиг вверх, а в координатах клеток —
  // сдвиг на постоянный вектор (обратное преобразование экран -> клетки линейно). Поэтому все высоты складываются
  // в одну картинку клеток простыми сдвигами, без поворота, а на экран идёт один drawImage с изометрией.
  // Пересобирается только при изменении тумана, уровня или поворота (масштаб на сдвиг в клетках не влияет).
  var fogComposite = { canvas: null, key: '', pad: 0 };
  function fogCompositeLayer(density) {
    var zero = Iso.toScreen(0, 0, 0), alongCol = Iso.toScreen(1, 0, 0), alongRow = Iso.toScreen(0, 1, 0), lifted = Iso.toScreen(0, 0, 1);
    var colX = alongCol.x - zero.x, colY = alongCol.y - zero.y, rowX = alongRow.x - zero.x, rowY = alongRow.y - zero.y;
    var determinant = colX * rowY - colY * rowX;
    var liftX = lifted.x - zero.x, liftY = lifted.y - zero.y;
    // сдвиг в клетках на метр подъёма
    var shiftCol = (liftX * rowY - liftY * rowX) / determinant, shiftRow = (colX * liftY - colY * liftX) / determinant;
    var heights = fogHeights(view.level, view.cut);
    var key = [fog.version, view.level, view.cut ? 1 : 0, shiftCol.toFixed(4), shiftRow.toFixed(4), density.width].join(':');
    if (fogComposite.key === key) return fogComposite;
    var top = heights.length ? heights[heights.length - 1].height : 0;
    var pad = Math.ceil((Math.max(Math.abs(shiftCol), Math.abs(shiftRow)) * top + 1) * FOG_PX);
    var size = density.width + 2 * pad;
    if (!fogComposite.canvas) fogComposite.canvas = document.createElement('canvas');
    var canvas = fogComposite.canvas;
    if (canvas.width !== size) { canvas.width = size; canvas.height = size; }
    var compositeContext = canvas.getContext('2d');
    compositeContext.clearRect(0, 0, size, size);
    compositeContext.imageSmoothingEnabled = true;
    compositeContext.drawImage(density, pad, pad);
    heights.forEach(function (entry) {
      var layer = fogHeightLayer(entry, density);
      var left = pad + Math.round((entry.col + shiftCol * entry.height) * FOG_PX), upper = pad + Math.round((entry.row + shiftRow * entry.height) * FOG_PX);
      compositeContext.drawImage(layer, left, upper, entry.cols * FOG_PX, entry.rows * FOG_PX);
    });
    fogComposite.key = key; fogComposite.pad = pad;
    return fogComposite;
  }
  // На экран туман идёт через картинку в половинном разрешении (туман мягкий, детали не нужны) с запасом по краям
  // (FOG_SCREEN_MARGIN доли экрана). Она пересобирается при изменении тумана, масштаба, поворота, уровня
  // или когда камера ушла за запас; в остальные кадры — один drawImage готовой картинки со сдвигом.
  var FOG_SCREEN_SCALE = 0.5, FOG_SCREEN_MARGIN = 0.2, fogScreen = { canvas: null, key: '', camX: 0, camY: 0, marginX: 0, marginY: 0 };
  function drawFogOverlay() {
    var density = fogLayer(view.level, view.cut);
    if (!density) return;
    var composite = fogCompositeLayer(density);
    var camX = Math.round(camera.x), camY = Math.round(camera.y);
    var marginX = Math.round(viewWidth * FOG_SCREEN_MARGIN), marginY = Math.round(viewHeight * FOG_SCREEN_MARGIN);
    var zero = Iso.toScreen(0, 0, 0), alongCol = Iso.toScreen(1, 0, 0), alongRow = Iso.toScreen(0, 1, 0);
    var key = [composite.key, viewWidth, viewHeight, zero.x, zero.y, alongCol.x, alongCol.y, alongRow.x, alongRow.y].join(':');
    var shifted = Math.abs(camX - fogScreen.camX) > fogScreen.marginX || Math.abs(camY - fogScreen.camY) > fogScreen.marginY;
    if (fogScreen.key !== key || shifted) {
      var scale = FOG_SCREEN_SCALE;
      var width = Math.ceil((viewWidth + 2 * marginX) * scale), height = Math.ceil((viewHeight + 2 * marginY) * scale);
      if (!fogScreen.canvas) fogScreen.canvas = document.createElement('canvas');
      var screenCanvas = fogScreen.canvas;
      if (screenCanvas.width !== width || screenCanvas.height !== height) { screenCanvas.width = width; screenCanvas.height = height; }
      var screenContext = screenCanvas.getContext('2d');
      screenContext.setTransform(1, 0, 0, 1, 0, 0);
      screenContext.clearRect(0, 0, width, height);
      screenContext.imageSmoothingEnabled = true;
      screenContext.setTransform((alongCol.x - zero.x) * scale, (alongCol.y - zero.y) * scale, (alongRow.x - zero.x) * scale, (alongRow.y - zero.y) * scale,
        (zero.x - camX + marginX) * scale, (zero.y - camY + marginY) * scale);
      var cellsPad = composite.pad / FOG_PX;
      screenContext.drawImage(composite.canvas, -cellsPad, -cellsPad, composite.canvas.width / FOG_PX, composite.canvas.height / FOG_PX);
      fogScreen.key = key; fogScreen.camX = camX; fogScreen.camY = camY; fogScreen.marginX = marginX; fogScreen.marginY = marginY;
      tileStats.overlayBuilds = (tileStats.overlayBuilds || 0) + 1;
    }
    context.save();
    context.imageSmoothingEnabled = true;
    var built = fogScreen.canvas;
    context.drawImage(built, fogScreen.camX - camX - fogScreen.marginX, fogScreen.camY - camY - fogScreen.marginY, built.width / FOG_SCREEN_SCALE, built.height / FOG_SCREEN_SCALE);
    context.restore();
  }

  // ---------------- уровни обзора и варианты картинки ----------------
  var view = { level: 0, cut: false };
  // Обстановка: мирная — бойцы на своей базе или на посту, стоящие юниты в стойке «вольно» (если у набора
  // спрайтов она есть); боевая — стойка с оружием наготове. Задаётся картой (MAP.combat), по умолчанию боевая;
  // переключается клавишей T.
  var combat = MAP.combat !== false && PAGE_MODE !== 'manage';
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
  // глубина по клетке вида (тайлы) и по клетке карты (юниты, подсветка): при повороте вида клетка карты переводится
  function depthKeyView(col, row, level, part) { return (col + row) * 100 + level * 10 + part; }
  function depthKey(col, row, level, part) {
    if (!Iso.turns()) return depthKeyView(col, row, level, part);
    var cell = Iso.cellToView(col, row);
    return depthKeyView(cell.col, cell.row, level, part);
  }
  // глубина фигуры на нескольких клетках (K7 2×2): по ближней к зрителю клетке
  function footprintDepth(col, row, level, part, size) {
    var best = -Infinity;
    for (var deltaCol = 0; deltaCol < (size || 1); deltaCol++) {
      for (var deltaRow = 0; deltaRow < (size || 1); deltaRow++) best = Math.max(best, depthKey(col + deltaCol, row + deltaRow, level, part));
    }
    return best;
  }

  function requestVariant(key) {
    if (variants[key]) return variants[key];
    var data = MAP.variants[key];
    var variant = { key: key, data: data, pieces: [], ready: false };
    variants[key] = variant;
    function tryBuild() {
      if (!variant.background.complete || !variant.background.naturalWidth) return;
      if (variant.mask && (!variant.mask.complete || !variant.mask.naturalWidth)) return;
      if (variant.ready) return;
      buildPieces(variant);
      variant.ready = true;
    }
    // фон и маска — первыми в очереди загрузки; при обрыве загрузка повторяется (js/assets.js)
    variant.background = Assets.image(data.background, Assets.URGENT);
    variant.mask = data.mask ? Assets.image(data.mask, Assets.URGENT) : null;
    if (data.doorAtlas) variant.doorAtlas = Assets.image(data.doorAtlas, 1);
    Assets.image(data.background, Assets.URGENT, tryBuild);
    if (data.mask) Assets.image(data.mask, Assets.URGENT, tryBuild);
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
        canvas: pieceCanvas, depth: depthKeyView(piece[0], piece[1], piece[2], piece[3])
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
  // атлас может быть разбит на страницы (большие карты): TILESET.images, TILESET.shadowImages; номер страницы — в записи тайла
  var tileImage = null, shadowImage = null, tileImages = [], shadowImages = [], shadowCanvas = null, groundPieces = null, tileViews = {};
  var tileStats = { ground: 0, shadows: 0, pieces: 0, chunkMs: 0, fogMs: 0, computeMs: 0, computes: 0, layerMs: 0, layers: 0 };
  if (TILESET) {
    tileImages = (TILESET.images || [TILESET.image]).map(function (source) { return Assets.image(source, Assets.URGENT); });
    shadowImages = (TILESET.shadowImages || [TILESET.shadows]).map(function (source) { return Assets.image(source, Assets.URGENT); });
    tileImage = tileImages[0]; shadowImage = shadowImages[0];
    shadowCanvas = document.createElement('canvas');
  }

  // ---------------- WebGL-карта и поворот вида на 90° ----------------
  // На картах, где сцену умеет строить js/map3d.js (Map3D.supported, сейчас база), карта рисуется в WebGL
  // ортокамерой игры, а юниты и тела — спрайтами в той же сцене с глубиной своей клетки. Пока сцена строится,
  // показываются тайлы. В WebGL-режиме камеру можно повернуть на 90° («,» / «.», кнопки на панели уровней):
  // логика игры остаётся в координатах карты, Iso переводит их в координаты вида, направление спрайтов
  // юнитов сдвигается на 2 из 8. Настройка «3D-карта (WebGL)» выключает режим.
  var FIELD0 = JSON.parse(JSON.stringify(FIELD));
  var MINIMAP0 = MAP.minimap;
  var gl3d = null, glStarting = false, glFailed = false;
  var glMinimaps = {};
  var viewTurns = 0;
  function glActive() { return !!(gl3d && gl3d.ready && Settings.values.render3d !== false); }
  function viewCount() { return glActive() ? 4 : 1; }
  // грань двери в координатах вида (тайл створки ставится на неё)
  function doorViewEdge(index) {
    var door = doors[index];
    return Iso.edgeToView(door.col, door.row, door.orient);
  }
  function startMap3D() {
    if (glStarting || gl3d || glFailed || !TILESET || !window.Map3D || !Map3D.supported || Settings.values.render3d === false) return;
    glStarting = true;
    try {
      Map3D.init({ field: FIELD0, doors: MAP.doors || [], onProgress: function (part) { glProgress = part; } }).then(function () {
        gl3d = Map3D;
        updateRotateBar();
        updateHover();
      }, function (error) { glFailed = true; console.warn('WebGL-карта не построена:', error); });
    } catch (error) { glFailed = true; console.warn('WebGL-карта недоступна:', error); }
  }
  var glProgress = 0;
  function applyView(turns) {
    viewTurns = turns;
    Iso.setView(FIELD0, turns);
    if (gl3d) gl3d.setTurns(turns);
    if (!turns) MAP.minimap = MINIMAP0;
    else {
      if (!glMinimaps[turns]) {
        var snapshot = gl3d && gl3d.snapshot(Math.round(FIELD0.width / 4));
        glMinimaps[turns] = snapshot ? snapshot.toDataURL('image/jpeg', 0.85) : MINIMAP0;
      }
      MAP.minimap = glMinimaps[turns];
    }
    try { window.dispatchEvent(new CustomEvent('aliens:view', { detail: { turns: turns } })); } catch (error) { /* старый браузер */ }
    updateRotateBar();
  }
  // повернуть вид: точка земли текущего уровня в центре экрана остаётся в центре
  function rotateView(step) {
    if (viewCount() < 2) return;
    var height = view.level * LEVEL_H;
    var center = Iso.toGrid(camera.x + viewWidth / 2, camera.y + viewHeight / 2 + height * Iso.pixelsPerMeterUp);
    applyView((viewTurns + step + 4) % 4);
    centerOn(center.col, center.row, height);
    updateHover();
  }
  // кусок картинки тайла на месте клетки: прямоугольник в пикселях карты и в атласе
  function tilePiece(tile, col, row, level, part, shadow) {
    var entry = TILESET.list[tile];
    var offset = shadow ? 8 : 0;
    if (!entry || entry[offset] < 0) return null;
    var corner = Iso.toScreenView(col, row, level * LEVEL_H);
    return {
      x: Math.round(corner.x - entry[offset + 4]), y: Math.round(corner.y - entry[offset + 5]),
      width: entry[offset + 2], height: entry[offset + 3], sx: entry[offset], sy: entry[offset + 1],
      page: entry[shadow ? 15 : 14] || 0,
      depth: depthKeyView(col, row, level, part === undefined ? entry[6] : part)
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
      var doorTile = TILESET.doors[index];
      if (doorTile === undefined || doorTile < 0) return;          // дверь новее тайлов (baselogic.mjs): створку рисует только WebGL
      var edge = doorViewEdge(index);
      var piece = tilePiece(cutTile(doorTile, door.level, viewLevel, cut), edge.col, edge.row, door.level);
      if (piece) doorEntries.push([index, piece.x, piece.y, piece.width, piece.height, piece.sx, piece.sy, piece.page]);
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
    target = { x: camera.x, y: camera.y, width: viewWidth, height: viewHeight };
    var firstX = Math.floor(camera.x / CHUNK), lastX = Math.floor((camera.x + viewWidth - 1) / CHUNK);
    var firstY = Math.floor(camera.y / CHUNK), lastY = Math.floor((camera.y + viewHeight - 1) / CHUNK);
    var viewKey = current.key + (showGrid ? 'g' : '');
    tileStats.chunksBuilt = 0;
    // куски, устаревшие из-за разведки (stale), пересобираются постепенно: не больше ~5 мс за кадр, но хотя бы один
    var frameStart = performance.now(), staleRebuilt = 0;
    for (var chunkY = firstY; chunkY <= lastY; chunkY++) {
      for (var chunkX = firstX; chunkX <= lastX; chunkX++) {
        var key = viewKey + ':' + chunkX + ':' + chunkY;
        var chunk = chunks.get(key);
        if (chunk) chunks.delete(key);                 // поднять в конец очереди (недавно использованный)
        if (chunk && chunk.stale && (!staleRebuilt || performance.now() - frameStart < 5)) { chunk = null; staleRebuilt++; }
        if (!chunk) { var buildStart = performance.now(); chunk = buildChunk(current, chunkX, chunkY); tileStats.chunksBuilt++; tileStats.chunkMs += performance.now() - buildStart; }
        chunks.set(key, chunk);
        context.drawImage(chunk, chunkX * CHUNK - Math.round(camera.x), chunkY * CHUNK - Math.round(camera.y));
      }
    }
    // при отдалении в окне больше кусков: храним не меньше полутора окон
    var limit = Math.max(CHUNK_LIMIT, Math.ceil((lastX - firstX + 1) * (lastY - firstY + 1) * 1.5));
    while (chunks.size > limit) chunks.delete(chunks.keys().next().value);
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
      list.forEach(function (item) { if (item.piece) drawTilePiece(tileImage, item.piece); else safeDraw(item); });
    });
    return chunk;
  }
  function drawTilePiece(image, piece) {
    if (piece.page) image = tileImages[piece.page];
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
      shadowContext.drawImage(shadowImages[piece.page] || shadowImage, piece.sx, piece.sy, piece.width, piece.height, piece.x - Math.round(camera.x), piece.y - Math.round(camera.y), piece.width, piece.height);
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
  // кнопки поворота вида — в WebGL-режиме; подпись — откуда смотрит камера
  var rotateRow = null;
  function updateRotateBar() {
    if (!levelBar) return;
    if (!rotateRow && viewCount() > 1) {
      rotateRow = document.createElement('div');
      rotateRow.className = 'row';
      rotateRow.innerHTML = '<button class="view-left" title="Повернуть вид (,)">⟲</button>' +
        '<span class="level-number view-side"></span><button class="view-right" title="Повернуть вид (.)">⟳</button>';
      levelBar.appendChild(rotateRow);
      rotateRow.querySelector('.view-left').addEventListener('click', function () { rotateView(-1); });
      rotateRow.querySelector('.view-right').addEventListener('click', function () { rotateView(1); });
    }
    if (!rotateRow) return;
    rotateRow.style.display = viewCount() > 1 ? '' : 'none';
    rotateRow.querySelector('.view-side').textContent = ['ЮВ', 'СВ', 'СЗ', 'ЮЗ'][viewTurns] || '';
  }
  if (levelBar) {
    if (LEVELS < 2) levelBar.style.display = 'none';
    levelBar.querySelector('.level-up').addEventListener('click', function () { setView(view.level + 1, view.cut); });
    levelBar.querySelector('.level-down').addEventListener('click', function () { setView(view.level - 1, view.cut); });
    levelBar.querySelector('.walls').addEventListener('click', function () { setView(view.level, !view.cut); });
  }

  // камера: пиксель фона, который виден в левом верхнем углу окна
  var camera = { x: 0, y: 0 };
  // расстояние от центра экрана в клетках (для громкости)
  function screenDistance(point) {
    var screen = Iso.toScreen(point.x, point.y, point.elevation || point.h || 0);
    return Math.sqrt(Math.pow(screen.x - camera.x - viewWidth / 2, 2) + Math.pow(screen.y - camera.y - viewHeight / 2, 2)) / 61;
  }
  function centerOn(col, row, elevation) {
    var point = Iso.toScreen(col, row, elevation || 0);
    centerOnPixel(point.x, point.y);
  }
  function centerOnPixel(x, y) {
    camera.x = x - viewWidth / 2;
    camera.y = y - viewHeight / 2;
    clampCamera();
  }
  function clampCamera() {
    camera.x = Math.max(-200, Math.min(FIELD.width - viewWidth + 200, camera.x));
    camera.y = Math.max(-200, Math.min(FIELD.height - viewHeight + 200, camera.y));
  }

  // Вид — в пикселях карты (viewWidth × viewHeight): окно в CSS-пикселях (screenWidth × screenHeight), делённое на
  // приближение zoom (колесо мыши). Холст — в renderScale раз меньше окна (настройка «разрешение отрисовки»).
  // Всё рисуется в координатах вида, масштаб renderScale × zoom задаётся преобразованием контекста в начале кадра.
  var viewWidth = window.innerWidth, viewHeight = 600, renderScale = 1;
  var screenWidth = viewWidth, screenHeight = viewHeight, zoom = 1;
  var ZOOM_STEPS = [0.5, 0.63, 0.8, 1, 1.25, 1.6, 2];
  function resize() {
    if (window.Panel) window.Panel.layout();
    screenWidth = window.innerWidth;
    screenHeight = Math.max(200, window.innerHeight - (panelElement ? panelElement.offsetHeight : 0));
    viewWidth = screenWidth / zoom;
    viewHeight = screenHeight / zoom;
    canvas.width = Math.round(screenWidth * renderScale);
    canvas.height = Math.round(screenHeight * renderScale);
    canvas.style.width = screenWidth + 'px';
    canvas.style.height = screenHeight + 'px';
    clampCamera();
  }
  // приближение колесом: точка карты под курсором остаётся на месте
  function setZoom(value, screenX, screenY) {
    if (value === zoom) return;
    var anchorX = camera.x + screenX / zoom, anchorY = camera.y + screenY / zoom;
    zoom = value;
    resize();
    camera.x = anchorX - screenX / zoom; camera.y = anchorY - screenY / zoom;
    clampCamera();
    mouse.x = screenX / zoom; mouse.y = screenY / zoom;
    updateHover();
  }
  canvas.addEventListener('wheel', function (event) {
    event.preventDefault();
    if (!event.deltaY) return;
    var index = ZOOM_STEPS.indexOf(zoom);
    if (index < 0) index = ZOOM_STEPS.indexOf(1);
    index = Math.max(0, Math.min(ZOOM_STEPS.length - 1, index + (event.deltaY < 0 ? 1 : -1)));
    setZoom(ZOOM_STEPS[index], event.clientX, event.clientY);
  }, { passive: false });
  window.addEventListener('resize', resize);

  // ---------------- действия ----------------
  // после итогов задания (кнопка ОК) можно ходить по карте: mission.roam
  function busy() {
    return (mission.over && !mission.roam) || !selected || selected.path.length > 0 || shots.length > 0 || throws.length > 0 || phase !== 'squad' ||
      group.some(function (unit) { return unit.path.length > 0; });
  }

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
    rememberSighted(selected);
    if (steps < fullLength) say('ОД хватит только на часть пути');
  }

  // ---------------- группа (Shift+ПКМ рамкой или щелчком) ----------------
  // group — выделенные вместе юниты отряда (2 и больше); selected — ведущий, его показывает панель.
  // ЛКМ по свободной клетке ведёт всю группу: каждый идёт в клетку со своим смещением от ведущего (строй
  // сохраняется), занятая или непроходимая клетка заменяется ближайшей свободной (до GROUP_SEARCH клеток).
  // Пути прокладываются сквозь членов группы; в пути идущий ждёт, пока товарищ освободит клетку
  // (до BLOCK_WAIT с), иначе останавливается, неистраченные ОД возвращаются.
  var group = [], GROUP_SEARCH = 4, BLOCK_WAIT = 1.5;
  var boxSelect = null;                                     // рамка выделения: { startX, startY } в пикселях карты
  function controllable(unit) { return unit.side === 'squad' && !unit.dead && (!unit.ai || unit.manualTurn === turn); }
  function setGroup(list) {
    list = list.filter(controllable);
    if (list.length < 2) { group = []; if (list.length) selectUnit(list[0], false); return; }
    group = list;
    selectUnit(list.indexOf(selected) >= 0 ? selected : list[0], false, true);
    say('Группа: ' + list.length);
  }
  function unitScreenPoint(unit) {
    var point = Iso.toScreen(unit.x, unit.y, unit.elevation + (unit.height || 1.8) / 2);
    return { x: point.x - camera.x, y: point.y - camera.y };
  }
  function finishBoxSelect() {
    var box = boxSelect;
    boxSelect = null;
    var left = Math.min(box.startX, mouse.x), right = Math.max(box.startX, mouse.x), top = Math.min(box.startY, mouse.y), bottom = Math.max(box.startY, mouse.y);
    var current = group.length ? group.slice() : selected ? [selected] : [];
    if (right - left < 4 && bottom - top < 4) {
      // щелчок: юнит отряда под курсором добавляется в группу или убирается из неё
      var tile = tileUnderMouse(), clicked = tile ? unitAt(tile.col, tile.row, tile.level) : null;
      if (!clicked || !controllable(clicked)) return;
      var at = current.indexOf(clicked);
      if (at >= 0) current.splice(at, 1); else current.push(clicked);
      setGroup(current);
      return;
    }
    setGroup(units.filter(function (unit) {
      if (!controllable(unit) || unit.level > view.level) return false;
      var point = unitScreenPoint(unit);
      return point.x >= left && point.x <= right && point.y >= top && point.y <= bottom;
    }));
  }
  function drawBoxSelect() {
    if (!boxSelect) return;
    var left = Math.min(boxSelect.startX, mouse.x), top = Math.min(boxSelect.startY, mouse.y);
    var width = Math.abs(mouse.x - boxSelect.startX), height = Math.abs(mouse.y - boxSelect.startY);
    context.save();
    context.setLineDash([5 / zoom, 4 / zoom]);
    context.strokeStyle = '#ffd23a'; context.lineWidth = 1 / zoom;
    context.fillStyle = 'rgba(255, 210, 58, 0.08)';
    context.fillRect(left, top, width, height);
    context.strokeRect(left, top, width, height);
    context.restore();
  }
  // свободна ли площадка юнита в клетке, с учётом уже назначенных другим членам группы
  function groupSpotFree(unit, col, row, level, taken) {
    for (var deltaRow = 0; deltaRow < unit.size; deltaRow++) for (var deltaCol = 0; deltaCol < unit.size; deltaCol++) if (taken[nodeKey(col + deltaCol, row + deltaRow, level)]) return false;
    return isFreeFor(unit)(col, row, level);
  }
  function moveGroupTo(tile) {
    if (busy() || !tile) return;
    var leader = selected, members = group.filter(controllable), taken = {}, moved = 0, short = 0, failed = [];
    pathIgnore = members;
    // ведущий — первым: ему достаётся выбранная клетка
    members.sort(function (first, second) { return (first === leader ? -1 : 0) - (second === leader ? -1 : 0); });
    members.forEach(function (unit) {
      var wantCol = tile.col + unit.col - leader.col, wantRow = tile.row + unit.row - leader.row, spot = null;
      for (var radius = 0; radius <= GROUP_SEARCH && !spot; radius++) {
        for (var deltaRow = -radius; deltaRow <= radius && !spot; deltaRow++) for (var deltaCol = -radius; deltaCol <= radius && !spot; deltaCol++) {
          if (Math.max(Math.abs(deltaRow), Math.abs(deltaCol)) !== radius) continue;
          var col = wantCol + deltaCol, row = wantRow + deltaRow;
          if (col < 0 || row < 0 || col + unit.size > GRID || row + unit.size > GRID) continue;
          if (groupSpotFree(unit, col, row, tile.level, taken)) spot = { col: col, row: row, level: tile.level };
        }
      }
      if (!spot) { failed.push(unit); return; }
      var path = findPath(unit, spot);
      if (!path || !path.length) { if (!path) failed.push(unit); return; }
      var steps = affordableSteps(unit, path);
      if (steps === 0) { failed.push(unit); return; }
      if (steps < path.length) short++;
      path = path.slice(0, steps);
      var end = path[path.length - 1];
      for (var takenRow = 0; takenRow < unit.size; takenRow++) for (var takenCol = 0; takenCol < unit.size; takenCol++) taken[nodeKey(end.col + takenCol, end.row + takenRow, end.level)] = true;
      unit.timeUnits -= pathCost(unit, path);
      unit.kneeling = false;
      unit.path = path;
      unit.waited = 0;
      rememberSighted(unit);
      moved++;
    });
    pathIgnore = [];
    if (!moved) say('Группе туда не пройти или не хватает ОД');
    else if (failed.length) say('Не идут: ' + failed.map(function (unit) { return unit.callsign; }).join(', '));
    else if (short) say('Части группы ОД хватит только на часть пути');
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
    reloadUnit(selected);
  }
  // перезарядка юнита (выбранного игроком или персонала под ИИ); true — перезаряжен
  function reloadUnit(selected) {
    if (!selected.weapon) { say('Нет оружия'); return false; }
    if (selected.ammo >= selected.magazine) { say('Магазин полон'); return false; }
    if (selected.reserve <= 0) { say('Нет запасных магазинов'); return false; }
    if (!selected.inventory) {                       // K7: лента пушки
      if (COST.reload > selected.timeUnits) { say('Не хватает очков действия'); return false; }
      selected.timeUnits -= COST.reload;
      selected.reserve--;
      selected.ammo = selected.magazine;
      return true;
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
    if (cost > selected.timeUnits) { say('Не хватает очков действия: перезарядка ' + cost + ' ОД'); return false; }
    selected.timeUnits -= cost;
    var left = selected.ammo;
    selected.ammo = source.item.rounds;
    if (left > 0) source.item.rounds = left;
    else selected.inventory.splice(selected.inventory.indexOf(source), 1);
    if (!selected.ai || selected.manualTurn === turn) say('Перезарядка: ' + cost + ' ОД');
    return true;
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
  function throwRange(unit) { return 6 + (unit.strength || 30) / 3; }            // метры, бросок на одном уровне
  // Бросок сверху вниз (с крыши, с балкона) летит дальше: допустимое расстояние по горизонтали растёт на 1,5 м
  // за каждый метр, на который точка падения ниже ног бросающего. Снизу вверх — прежняя дальность по прямой.
  // С крыши школы или дома напротив граната долетает до портала на проспекте.
  var THROW_DROP_BONUS = 1.5;
  function throwReach(unit, point) {
    var drop = unit.elevation - point.h, base = throwRange(unit);
    if (drop <= 0.5) return { far: Combat.distanceMeters(combatWorld, { x: unit.x, y: unit.y, h: unit.elevation + 1.6 }, point) > base, range: base };
    var range = base + THROW_DROP_BONUS * drop;
    var horizontal = Math.hypot(point.x - unit.x, point.y - unit.y) * Iso.tileMeters;
    return { far: horizontal > range, range: range };
  }
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
  // Граната упала в 1 клетке от пришельца или ближе (по горизонтали, без стены между ними): зелёного убивает
  // наверняка, у стража-элиты снимает ALIEN_MAX_HEALTH — половину здоровья серебристого, четверть золотистого.
  var throwing = null;                // режим броска: { slot } — рука с гранатой
  var throws = [];                    // летящие гранаты
  var GRENADE = { radius: 3, damage: 60 };
  function throwTarget() {
    var tile = tileUnderMouse();
    if (!tile) return null;
    var point = { x: tile.col + 0.5, y: tile.row + 0.5, h: elevationOf(tile.col, tile.row, tile.level) };
    var from = { x: selected.x, y: selected.y, h: selected.elevation + 1.6 };
    var distance = Combat.distanceMeters(combatWorld, from, point);
    var reach = throwReach(selected, point);
    return { tile: tile, point: point, distance: distance, chance: throwChance(selected, distance), cost: throwCost(selected) + turnCostTo(selected, point), far: reach.far, range: reach.range };
  }
  function throwGrenade(target) {
    if (mission.over) { say('Задание окончено'); throwing = null; return; }
    var entry = throwing && handEntry(selected, throwing.slot);
    if (!entry || entry.item.type !== 'grenade') { throwing = null; return; }
    if (target.far) { say('Слишком далеко: бросок до ' + Math.round(target.range) + ' м'); return; }
    if (target.cost > selected.timeUnits) { say('Не хватает очков действия'); return; }
    selected.timeUnits -= target.cost;
    var direction = Iso.directionOf(target.point.x - selected.x, target.point.y - selected.y);
    if (direction >= 0) selected.direction = direction;
    selected.inventory.splice(selected.inventory.indexOf(entry), 1);
    if (!combat) setCombat(true);
    lastShotTurn = turn;
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
    Sound.play('explosion', screenDistance(point));
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
      var close = Math.hypot(unit.x - point.x, unit.y - point.y) <= 1.001 && Math.abs(unit.elevation - point.h) < 1.2;
      if (close && unit.kind === 'alien') amount = unit.elite ? Math.max(amount, ALIEN_MAX_HEALTH) : unit.health;
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
    var shown = shownUnit();
    if (shown && shown !== selected && shown.inventory) { if (window.Inventory) { keys = {}; Inventory.open(shown); } return; }   // просмотр пришельца
    if (!selected) { say('Выберите бойца'); return; }
    if (!selected.inventory) { say('У ' + selected.callsign + ' нет снаряжения: пушка и лента — часть машины'); return; }
    if (window.Inventory) { keys = {}; Inventory.open(selected); }
  }

  function endTurn() {
    // задание окончено, осмотр карты: ход пришельцев не наступает, очки действия восстанавливаются
    if (mission.roam && phase === 'squad' && !units.some(function (unit) { return unit.path.length > 0; })) {
      turn++;
      units.forEach(function (unit) { if (unit.side === 'squad') unit.timeUnits = turnTimeUnits(unit); });
      setPhaseLabel(); say('Осмотр карты: очки действия восстановлены'); return;
    }
    if (phase !== 'squad' || mission.over) return;
    if (shots.length || units.some(function (unit) { return unit.path.length > 0; })) { say('Дождитесь окончания действия'); return; }
    aiming = false; aimTarget = null; inspected = null;
    startStaffPhase();
  }

  function selectUnit(unit, center, keepGroup) {
    if (unit && unit.side !== 'squad') return;
    if (!keepGroup) group = [];
    // персонал базы: выбранный щелчком в этот ход действует по командам игрока, ИИ его пропускает
    if (unit && unit.ai && unit.manualTurn !== turn && combat) { unit.manualTurn = turn; say(unit.callsign + ': управление вручную до конца хода'); }
    inspected = null;
    if (unit !== selected) { aiming = false; aimTarget = null; throwing = null; }
    selected = unit;
    if (unit) viewFollow(unit);
    if (unit && center) centerOn(unit.x, unit.y, unit.elevation);
    updateHover();
  }
  function selectNext() {
    // по очереди — бойцы и машина отряда; персонал базы — только щелчком
    var squad = units.filter(function (unit) { return unit.side === 'squad' && (!unit.ai || unit.manualTurn === turn); });
    if (!squad.length) return;
    var index = selected ? squad.indexOf(selected) : -1;
    selectUnit(squad[(index + 1) % squad.length], true);
  }

  function setFireMode(index) { if (selected) selected.fireMode = index; }
  function cancelAim() {
    aiming = false; aimTarget = null; throwing = null; inspected = null;
    if (aimRaisedView && selected) viewFollow(selected);   // обзор был поднят к цели — вернуть к бойцу
    aimRaisedView = false;
    updateHover();
  }
  // Просмотр пришельца (настройка «Просмотр пришельцев»): после щелчка по пришельцу панель показывает его —
  // руки, портрет, характеристики; снаряжение и окно характеристик открываются для него только для чтения.
  // Действовать по-прежнему выбранный боец: следующий щелчок по пришельцу — выстрел.
  var inspected = null;
  function inspect(unit) { inspected = Settings.values.inspectAliens && unit && unit.side === 'aliens' ? unit : null; }
  function shownUnit() { return inspected && !inspected.dead && units.indexOf(inspected) >= 0 ? inspected : selected; }
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
    domes: function () { return domes; },
    frontShield: function (unit, from) { return unit.shield > 0 && facesPoint(unit, from); },
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
  // дуло на спрайте (для рисования выстрела): положение дула в позе прицеливания, снято с 3D-моделей
  // (tools/render: пистолет пришельца, автомат бойца и персонала). Вперёд, вбок (+ — вправо от направления на цель
  // в координатах клеток), вверх, в метрах. Линия огня по-прежнему считается от muzzleOf.
  var SPRITE_MUZZLE = {
    alien: { stand: [0.91, -0.19, 1.73] },
    aliengold: { stand: [1.23, -0.42, 1.76] },
    staff: { stand: [1.07, 0.13, 1.5], kneel: [1.04, 0.17, 1.14] },
    soldier: { stand: [1.09, 0.16, 1.44], kneel: [1.05, 0.19, 1.14] }
  };
  function spriteMuzzleOf(unit, point) {
    var table = unit.kind === 'mech' ? null : unit.elite ? SPRITE_MUZZLE.aliengold : unit.kind === 'alien' ? SPRITE_MUZZLE.alien : unit.kind === 'staff' ? SPRITE_MUZZLE.staff : SPRITE_MUZZLE.soldier;
    if (!table) return muzzleOf(unit, point);
    var offset = unit.kneeling && table.kneel ? table.kneel : table.stand;
    var dx = point.x - unit.x, dy = point.y - unit.y, length = Math.sqrt(dx * dx + dy * dy) || 1;
    var forwardX = dx / length, forwardY = dy / length, tile = Iso.tileMeters;
    return { x: unit.x + (forwardX * offset[0] + forwardY * offset[1]) / tile, y: unit.y + (forwardY * offset[0] - forwardX * offset[1]) / tile, h: unit.elevation + offset[2] };
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
    return { mode: mode, chance: target.unit ? Combat.hitChance(shooter, mode, distance, target.unit) : null, cost: mode.cost + turnCostTo(shooter, target.point), clear: clear, distance: distance };
  }

  function fire(shooter, target, modeIndex, delay) {
    delay = delay || 0;
    if (mission.over) { say('Задание окончено'); return false; }
    if (shooter.side === 'aliens') shooter.revealedTurn = turn;
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
    lastShotTurn = turn;
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
    var chance = target.unit ? Combat.hitChance(shot.shooter, shot.mode, distance, target.unit) : 100;
    var radius = target.unit ? unitBody(target.unit).radius : 0.05;
    var aim = Combat.aimPoint(combatWorld, from, point, radius, chance, Math.random);
    shot.from = from;
    if (target.unit) intelShot(shot.shooter, target.unit);
    shot.drawFrom = spriteMuzzleOf(shot.shooter, point);
    shot.result = Combat.trace(combatWorld, from, aim.point, shot.weapon.range, shot.shooter, true);
    shot.duration = Math.max(60, Combat.distanceMeters(combatWorld, from, shot.result.point) / SHOT_SPEED[shot.weapon.projectile] * 1000);
    // показ выстрела пришельца: пуля долетает, когда камера уже перешла к месту попадания
    if (shot.arriveNotBefore) shot.duration = Math.max(shot.duration, shot.arriveNotBefore - shot.start);
    Sound.play(shot.weapon.projectile, screenDistance(shot.shooter));
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
    Sound.play('impact', screenDistance(result.point));
    if (result.kind === 'shield') { shieldHit(result, shot, now); return; }
    if (result.kind !== 'unit' || result.unit.dead) return;
    if (shot.view) shot.view.hit = true;
    var target = result.unit;
    var amount = Combat.damage(shot.weapon, target.armor, Math.random);
    target.health = Math.max(0, target.health - amount);
    intelHit(shot.shooter, target, amount, target.health <= 0);
    mechAlarm(shot.shooter, target);
    flashes.push({ text: amount ? '−' + amount : 'БРОНЯ', point: { x: target.x, y: target.y, h: target.elevation + target.height + 0.2 }, start: now, until: now + 1300 });
    if (target.health <= 0) { kill(target); if (shot.view) shot.view.killed = target; }
    else say(target.callsign + ': попадание, урон ' + amount);
  }
  function kill(unit) {
    unit.dead = true;
    var deathDistance = screenDistance(unit);
    if (unit.kind !== 'mech') Sound.play(unit.side === 'aliens' ? 'deathAlien' : 'deathSoldier', deathDistance);   // крик сразу
    setTimeout(function () { Sound.play(unit.kind === 'mech' ? 'crash' : 'fall', deathDistance); }, unit.kind === 'mech' ? 500 : 420);
    // оружие в руках: у бойцов и пришельцев оно нарисовано в спрайте тела рядом с ним, пока лежит на клетке
    var weaponType = unit.weaponType, heldWeapon = null;
    if (unit.inventory) {
      unit.inventory.forEach(function (entry) { if (!heldWeapon && weaponType && Items.info(entry.item).weapon === weaponType) heldWeapon = entry.item; });
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
      // кадры падения и тела персонала и гражданских грузятся по запросу — запрашиваем сразу
      var shownDirection = Iso.viewDirection(unit.direction);
      for (var fallFrame = 0; fallFrame < FALL_FRAMES; fallFrame++) drawableSprite(unit.spriteSet + '_fall_f' + fallFrame + '_d' + shownDirection);
      drawableSprite(unit.spriteSet + '_dead_d' + shownDirection);
      corpses.push({
        fallSkip: skip, weapon: heldWeapon,
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
    if (inspected === unit) inspected = null;
    if (selected === unit) {
      selected = null; aiming = false; aimTarget = null;
      // в ход пришельцев выбор переходит к следующему бойцу без переноса камеры — она показывает падение
      if (phase === 'aliens') selected = units.filter(function (other) { return other.side === 'squad' && !other.ai; })[0] || null;
      else selectNext();
    }
    if (unit.vip) say(unit.name + ' погиб');
    if (!units.some(function (other) { return other.side === 'aliens'; })) {
      // спасение: пока учёный и дети не на борту конвертоплана, задание не кончается (checkDelivery)
      if (rescuePending()) { if (!mission.awaitDelivery) { mission.awaitDelivery = true; say('Пришельцы уничтожены. Доставьте учёного и детей на конвертоплан'); } }
      else { say('Пришельцы уничтожены'); endMission('cleared'); }
    }
    else if (!units.some(function (other) { return isFighter(other) && other.kind !== 'mech' && !other.police; })) { say('Отряд погиб'); endMission('wiped'); }
  }

  // ---------------- гражданские: присоединение к отряду ----------------
  // Гражданский (сторона civilians) прячется и не ходит. Когда боец или машина отряда встаёт на соседнюю клетку
  // (по стороне или по диагонали, без стены между ними), гражданский переходит в отряд: им можно управлять, оружия нет.
  function adjacentOpen(col, row, otherCol, otherRow, level) {
    var deltaCol = otherCol - col, deltaRow = otherRow - row;
    if (Math.abs(deltaCol) > 1 || Math.abs(deltaRow) > 1 || (!deltaCol && !deltaRow)) return false;
    if (!deltaCol || !deltaRow) return edgeOpen(col, row, otherCol, otherRow, level);
    return (edgeOpen(col, row, otherCol, row, level) && edgeOpen(otherCol, row, otherCol, otherRow, level)) ||
      (edgeOpen(col, row, col, otherRow, level) && edgeOpen(col, otherRow, otherCol, otherRow, level));
  }
  function rescueNear(rescuer) {
    if (!isFighter(rescuer) || rescuer.dead) return;
    units.forEach(function (person) {
      if (person.side !== 'civilians' || person.dead || person.level !== rescuer.level || person.staff) return;   // персонал базы остаётся на месте
      for (var deltaRow = 0; deltaRow < rescuer.size; deltaRow++) for (var deltaCol = 0; deltaCol < rescuer.size; deltaCol++) {
        if (!adjacentOpen(rescuer.col + deltaCol, rescuer.row + deltaRow, person.col, person.row, person.level)) continue;
        person.side = 'squad';
        person.timeUnits = phase === 'squad' ? turnTimeUnits(person) : 0;
        say(person.name + (person.child ? ' — с отрядом' : ': присоединился к отряду') + ', ведите к конвертоплану');
        if (window.Panel) window.Panel.update();
        return;
      }
    });
  }

  // ---------------- таймер портала ----------------
  // Часы задания идут в реальном времени, пока вкладка открыта и задание не кончилось. Когда время выходит,
  // открывается портал (MISSION.portal) и рядом с ним появляются крупные силы пришельцев.
  // Вместе с главным открываются боковые порталы (MISSION.sidePortals: at — клетка, wave — сколько пришельцев,
  // elites — номера элиты в волне по порядку появления, name — где он, для сообщений).
  var PORTAL_WAVE = 10;
  var portal = MISSION && MISSION.portal && MISSION.timeLimit ? { col: MISSION.portal[0], row: MISSION.portal[1], level: MISSION.portal[2] || 0, limit: MISSION.timeLimit * 1000, open: false, openedAt: 0 } : null;
  var sidePortals = portal && MISSION.sidePortals ? MISSION.sidePortals.map(function (entry) {
    return { col: entry.at[0], row: entry.at[1], level: entry.at[2] || 0, wave: entry.wave, elites: entry.elites || [], name: entry.name || '', open: false, openedAt: 0 };
  }) : [];
  var missionClock = { elapsed: 0, last: performance.now() };
  function updateMissionClock(now) {
    var delta = now - missionClock.last;
    missionClock.last = now;
    if (!portal || mission.over || document.hidden || delta > 1000 || PAGE_MODE === 'manage') return;
    missionClock.elapsed += delta;
    if (!portal.open && missionClock.elapsed >= portal.limit) openPortal(now);
    else announcePortal();
  }
  // волна у портала: count пришельцев по кольцам вокруг клетки портала; elites — номера элиты по порядку
  function spawnWave(gate, count, elites) {
    gate.open = true; gate.openedAt = performance.now();
    var wave = [], number = startUnits.filter(function (unit) { return unit.side === 'aliens'; }).length;
    for (var radius = 0; radius < 8 && wave.length < count; radius++) {
      for (var deltaRow = -radius; deltaRow <= radius && wave.length < count; deltaRow++) for (var deltaCol = -radius; deltaCol <= radius && wave.length < count; deltaCol++) {
        if (Math.max(Math.abs(deltaCol), Math.abs(deltaRow)) !== radius) continue;
        var col = gate.col + deltaCol, row = gate.row + deltaRow;
        if (!inside(col, row) || !isFreeFor(null)(col, row, gate.level)) continue;
        var elite = elites.indexOf(wave.length) >= 0;
        var alien = makeUnit(elite ? eliteAlienProfile(++number, (MISSION && MISSION.portalElite) || 'silver') : alienProfile(++number), [col, row, gate.level, (deltaCol + deltaRow) > 0 ? 1 : 5]);
        alien.timeUnits = 0;
        units.push(alien); startUnits.push(alien);
        wave.push(alien);
      }
    }
    return wave;
  }
  function openPortal(now) {
    // главный портал: двое из волны — элита (третий и шестой по порядку: у портала, но не в центре); в этом задании — серебристые
    var main = spawnWave(portal, PORTAL_WAVE, [2, 5]);
    portal.openedAt = now;
    var side = 0;
    sidePortals.forEach(function (gate) { side += spawnWave(gate, gate.wave, gate.elites).length; gate.openedAt = now; });
    setCombat(true);
    Sound.play('portal', 0);
    // сколько пришельцев и сколько порталов — не сообщается
    say('Обнаружено появление пришельцев');
    // страж-элита главного портала сразу ставит купол-щит вокруг него
    var keeper = main.filter(function (unit) { return unit.elite && unit.domeCharges > 0 && !unit.dead; })[0];
    if (keeper) raiseDome(keeper);
  }
  function timerText() {
    if (!portal) return '';
    if (portal.open) return 'ПОРТАЛ ОТКРЫТ';
    var left = Math.max(0, Math.ceil((portal.limit - missionClock.elapsed) / 1000));
    var minutes = Math.floor(left / 60), seconds = left % 60;
    return 'ПОРТАЛ ЧЕРЕЗ ' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }
  var timerShown = '';
  function updateTimerLabel() {
    if (!portal) return;
    var label = document.getElementById('portal-timer');
    if (!label) {
      var plate = document.getElementById('turn');
      if (!plate) return;
      label = document.createElement('div');
      label.id = 'portal-timer'; label.className = 'situation alert mono';
      plate.appendChild(label);
    }
    var text = timerText();
    var rescued = units.filter(function (unit) { return isCivilian(unit) && unit.side === 'squad'; }).length;
    var total = startUnits.filter(isCivilian).length;
    text += ' · С ОТРЯДОМ ' + rescued + ' ИЗ ' + total;
    if (text !== timerShown) { label.textContent = text; timerShown = text; }
  }
  // Портал: за PORTAL_GLOW_LEAD до срока на земле появляется круг; каждую минуту он разгорается ярче, а внутри
  // крепнет энергетический вихрь (5 ступеней, переход за 2 с в начале минуты). В срок — вспышка (PORTAL_FLASH мс)
  // и прибытие пришельцев, дальше — открытый портал.
  // подсветка области (меню базы: помещение, к которому перешла камера) — мигающая рамка на полу 3 с
  var highlight = null;
  function highlightArea(col, row, width, height, level, seconds) {
    highlight = { col: col, row: row, width: width, height: height, level: level || 0, until: performance.now() + (seconds || 3) * 1000 };
  }
  function drawHighlight(now) {
    if (!highlight || now > highlight.until || highlight.level > view.level) return;
    var elevation = elevationOf(highlight.col, highlight.row, highlight.level) + 0.05;
    var corners = [Iso.toScreen(highlight.col, highlight.row, elevation), Iso.toScreen(highlight.col + highlight.width, highlight.row, elevation),
      Iso.toScreen(highlight.col + highlight.width, highlight.row + highlight.height, elevation), Iso.toScreen(highlight.col, highlight.row + highlight.height, elevation)];
    context.save();
    context.beginPath();
    corners.forEach(function (point, index) { context[index ? 'lineTo' : 'moveTo'](point.x - camera.x, point.y - camera.y); });
    context.closePath();
    var pulse = 0.5 + 0.5 * Math.sin(now / 160);
    context.fillStyle = 'rgba(255, 210, 120, ' + (0.08 + 0.1 * pulse) + ')'; context.fill();
    context.strokeStyle = 'rgba(255, 200, 90, ' + (0.6 + 0.4 * pulse) + ')'; context.lineWidth = 3; context.stroke();
    context.restore();
  }
  // ---------------- вода фонтанов ----------------
  // Чаша и ваза — в тайлах, струи и рябь рисуются здесь каждый кадр. Капли считаются без состояния: у каждой своя
  // траектория (бросок под силой тяжести) и фаза, положение — функция времени. Струи (метры от центра чаши):
  // центральная вверх из сопла вазы, слив с верхней чаши в нижнюю, слив с нижней в бассейн, восемь косых струй
  // от бортика к центру. Капли раскладываются по клеткам и встают в общий порядок отрисовки, поэтому ваза и
  // бортик закрывают воду за собой, а вода — то, что за ней.
  var FOUNTAINS = MAP.fountains || [];
  var GRAVITY = 9.8;
  var FOUNTAIN_STREAMS = [
    // origin: [радиус, высота], speed: [наружу, вверх], until — высота поверхности, куда падает, count — капель
    { origin: [0, 3.44], speed: [0.35, 4.6], until: 2.33, count: 120, spread: 0.12, width: 1.4, alpha: 0.7, tail: 0.08 },
    { origin: [1.05, 2.36], speed: [0.35, 0], until: 1.48, count: 260, spread: 0.06, width: 2, alpha: 0.35, tail: 0.12 },
    { origin: [1.76, 1.52], speed: [0.45, 0], until: 0.36, count: 420, spread: 0.08, width: 2.4, alpha: 0.32, tail: 0.14 },
    { origin: [4.2, 0.58], speed: [-2.0, 3.0], until: 0.36, count: 440, jets: 8, spread: 0.08, width: 1.8, alpha: 0.55, tail: 0.07 }
  ];
  function fountainHash(value) {
    var mixed = Math.sin(value * 12.9898 + 78.233) * 43758.5453;
    return mixed - Math.floor(mixed);
  }
  function flightTime(stream) {
    var up = stream.speed[1], drop = stream.origin[1] - stream.until;
    return (up + Math.sqrt(up * up + 2 * GRAVITY * drop)) / GRAVITY;
  }
  function fountainItems(now) {
    var items = [];
    var seconds = now / 1000, tile = MAP.tile || 1.25;
    FOUNTAINS.forEach(function (fountain, fountainIndex) {
      var centerCol = fountain[0], centerRow = fountain[1], level = fountain[2];
      if (level > view.level) return;
      var base = elevationOf(Math.floor(centerCol), Math.floor(centerRow), level);
      var reach = 4.6 / tile, top = Iso.toScreen(centerCol, centerRow, base + 4.6);
      var corners = [Iso.toScreen(centerCol - reach, centerRow - reach, base), Iso.toScreen(centerCol + reach, centerRow + reach, base),
        Iso.toScreen(centerCol - reach, centerRow + reach, base), Iso.toScreen(centerCol + reach, centerRow - reach, base), top];
      var bounds = quadRect(corners, 6);
      if (!visibleRect(bounds)) return;
      var buckets = {};
      function bucketFor(x, y) {
        var col = Math.floor(x), row = Math.floor(y), key = col + ',' + row;
        if (!buckets[key]) buckets[key] = { col: col, row: row, near: [], far: [], ripples: [] };
        return buckets[key];
      }
      FOUNTAIN_STREAMS.forEach(function (stream, streamIndex) {
        var time = flightTime(stream), jets = stream.jets || 0;
        for (var drop = 0; drop < stream.count; drop++) {
          var seed = fountainIndex * 1000 + streamIndex * 100 + drop * 0.618;
          var angle = jets ? (drop % jets) / jets * Math.PI * 2 + (fountainHash(seed) - 0.5) * 0.05 : fountainHash(seed) * Math.PI * 2;
          var jitter = 1 + (fountainHash(seed + 3.1) - 0.5) * stream.spread * 2;
          var phase = (seconds / time + fountainHash(seed + 7.7)) % 1;
          var age = phase * time;
          var position = function (moment) {
            var radius = stream.origin[0] + stream.speed[0] * jitter * moment;
            var height = stream.origin[1] + stream.speed[1] * jitter * moment - GRAVITY * moment * moment / 2;
            return { x: centerCol + Math.cos(angle) * radius / tile, y: centerRow + Math.sin(angle) * radius / tile, h: base + Math.max(stream.until, height) };
          };
          var head = position(age), tail = position(Math.max(0, age - stream.tail));
          var bucket = bucketFor(head.x, head.y);
          var fraction = (head.x - Math.floor(head.x)) + (head.y - Math.floor(head.y));
          (fraction > 1 ? bucket.near : bucket.far).push([head, tail, stream]);
          // рябь там, где капли падают: кольцо растёт и гаснет за 0,8 с
          if (drop % 16 === 0) {
            var landing = position(time), cycle = (seconds / 0.8 + fountainHash(seed + 1.9)) % 1;
            bucketFor(landing.x, landing.y).ripples.push([landing, cycle]);
          }
        }
      });
      var colStep = { x: 0, y: 0 }, rowStep = { x: 0, y: 0 };
      var origin = Iso.toScreen(centerCol, centerRow, 0), alongCol = Iso.toScreen(centerCol + 1, centerRow, 0), alongRow = Iso.toScreen(centerCol, centerRow + 1, 0);
      colStep = { x: alongCol.x - origin.x, y: alongCol.y - origin.y }; rowStep = { x: alongRow.x - origin.x, y: alongRow.y - origin.y };
      Object.keys(buckets).forEach(function (key) {
        var bucket = buckets[key];
        var corners = Iso.tileCorners(bucket.col, bucket.row, base).concat(Iso.tileCorners(bucket.col, bucket.row, base + 4.8));
        var rect = quadRect(corners, 4);
        [['far', 3.6], ['near', 4.4]].forEach(function (half) {
          var drops = bucket[half[0]], ripples = half[0] === 'far' ? bucket.ripples : [];
          if (!drops.length && !ripples.length) return;
          items.push({ depth: depthKey(bucket.col, bucket.row, level, half[1]), rect: rect, draw: function () { drawFountainWater(drops, ripples, colStep, rowStep, tile); } });
        });
      });
    });
    return items;
  }
  function drawFountainWater(drops, ripples, colStep, rowStep, tile) {
    context.save();
    context.lineCap = 'round';
    ripples.forEach(function (entry) {
      var center = Iso.toScreen(entry[0].x, entry[0].y, entry[0].h), radius = (0.08 + entry[1] * 0.32) / tile;
      context.strokeStyle = 'rgba(220, 238, 248, ' + (0.45 * (1 - entry[1])).toFixed(3) + ')';
      context.lineWidth = 1;
      context.beginPath();
      for (var step = 0; step <= 16; step++) {
        var angle = step / 16 * Math.PI * 2, along = Math.cos(angle) * radius, across = Math.sin(angle) * radius;
        var x = center.x + along * colStep.x + across * rowStep.x - camera.x, y = center.y + along * colStep.y + across * rowStep.y - camera.y;
        if (step) context.lineTo(x, y); else context.moveTo(x, y);
      }
      context.stroke();
    });
    drops.forEach(function (entry) {
      var head = Iso.toScreen(entry[0].x, entry[0].y, entry[0].h), tail = Iso.toScreen(entry[1].x, entry[1].y, entry[1].h), stream = entry[2];
      context.strokeStyle = 'rgba(226, 242, 252, ' + stream.alpha + ')';
      context.lineWidth = stream.width;
      context.beginPath();
      context.moveTo(tail.x - camera.x, tail.y - camera.y);
      context.lineTo(head.x - camera.x + 0.01, head.y - camera.y);
      context.stroke();
    });
    context.restore();
  }

  var PORTAL_GLOW_LEAD = 5 * 60 * 1000, PORTAL_FLASH = 1600, PORTAL_RADIUS = 2.4;
  // ступень разгорания 0…5 (0 — круга ещё нет) и сила 0…1 с плавным переходом между ступенями
  function portalGlow() {
    if (!portal || portal.open) return { stage: 0, power: 0 };
    var since = missionClock.elapsed - (portal.limit - PORTAL_GLOW_LEAD);
    if (since < 0) return { stage: 0, power: 0 };
    var stage = Math.min(5, Math.floor(since / 60000) + 1), intoMinute = (since % 60000) / 2000;
    return { stage: stage, power: (stage - 1 + Math.min(1, intoMinute)) / 5 };
  }
  var portalStageSaid = 0;
  function announcePortal() {
    var glow = portalGlow();
    if (!glow.stage || glow.stage === portalStageSaid) return;
    portalStageSaid = glow.stage;
    var left = 6 - glow.stage;
    // о боковых порталах не говорится: игрок узнаёт о них, только если увидит
    say(glow.stage === 1 ? 'Появился круг портала: до открытия ' + left + ' мин' : 'Портал разгорается: до открытия ' + left + ' мин');
  }
  function drawPortal(now) {
    if (!portal) return;
    drawPortalAt(portal, now);
    sidePortals.forEach(function (gate) { drawPortalAt(gate, now); });
  }
  function drawPortalAt(gate, now) {
    if (!portal || gate.level > view.level) return;
    var center = Iso.toScreen(gate.col + 0.5, gate.row + 0.5, elevationOf(gate.col, gate.row, gate.level) + 0.05);
    var x = center.x - camera.x, y = center.y - camera.y;
    var cell = Iso.toScreen(gate.col + 1.5, gate.row + 0.5, 0).x - Iso.toScreen(gate.col + 0.5, gate.row + 0.5, 0).x;
    var squash = 35 / 61;
    context.save();
    if (!gate.open) {
      var glow = portalGlow();
      if (!glow.stage) { context.restore(); return; }
      var power = glow.power, radius = cell * PORTAL_RADIUS, pulse = 0.85 + 0.15 * Math.sin(now / (380 - power * 200));
      context.globalCompositeOperation = 'lighter';
      // свечение внутри круга
      var inner = context.createRadialGradient(x, y, 0, x, y, radius);
      inner.addColorStop(0, 'rgba(210, 150, 255, ' + (0.05 + 0.4 * power) * pulse + ')');
      inner.addColorStop(0.7, 'rgba(130, 50, 230, ' + (0.03 + 0.22 * power) * pulse + ')');
      inner.addColorStop(1, 'rgba(90, 20, 160, 0)');
      context.fillStyle = inner;
      context.beginPath(); context.ellipse(x, y, radius, radius * squash, 0, 0, Math.PI * 2); context.fill();
      // вихрь: спиральные рукава, гаснущие к краю; крутятся быстрее и тянутся дальше с каждой минутой
      var arms = 3 + Math.floor(glow.stage / 2), spin = now / 1000 * (0.6 + 3.2 * power), reach = 0.3 + 0.6 * power;
      context.lineCap = 'round';
      for (var arm = 0; arm < arms; arm++) {
        var base = spin + arm * Math.PI * 2 / arms, previousX = 0, previousY = 0;
        for (var step = 0; step <= 18; step++) {
          var part = step / 18, distance = radius * (0.06 + reach * part), angle = base + part * Math.PI * (0.8 + 0.5 * power);
          var pointX = x + Math.cos(angle) * distance, pointY = y + Math.sin(angle) * distance * squash;
          if (step) {
            context.beginPath(); context.moveTo(previousX, previousY); context.lineTo(pointX, pointY);
            context.strokeStyle = 'rgba(230, 190, 255, ' + (0.1 + 0.55 * power) * (1 - part * 0.85) * pulse + ')';
            context.lineWidth = (1 + 3 * power) * (1.2 - part * 0.7);
            context.stroke();
          }
          previousX = pointX; previousY = pointY;
        }
      }
      // ядро вихря
      var core = context.createRadialGradient(x, y, 0, x, y, radius * (0.15 + 0.25 * power));
      core.addColorStop(0, 'rgba(255, 240, 255, ' + (0.1 + 0.6 * power) * pulse + ')');
      core.addColorStop(1, 'rgba(200, 120, 255, 0)');
      context.fillStyle = core;
      context.beginPath(); context.ellipse(x, y, radius * (0.15 + 0.25 * power), radius * (0.15 + 0.25 * power) * squash, 0, 0, Math.PI * 2); context.fill();
      // круг на земле: ярче и толще с каждой минутой
      context.shadowColor = 'rgba(190, 110, 255, 0.9)'; context.shadowBlur = 4 + 22 * power;
      context.strokeStyle = 'rgba(200, 130, 255, ' + (0.35 + 0.6 * power) * pulse + ')';
      context.lineWidth = 1.5 + 3.5 * power;
      context.beginPath(); context.ellipse(x, y, radius, radius * squash, 0, 0, Math.PI * 2); context.stroke();
      // на последних минутах над вихрем встаёт слабый столб света
      if (power > 0.55) {
        var column = context.createLinearGradient(x, y, x, y - cell * 4 * power);
        column.addColorStop(0, 'rgba(210, 160, 255, ' + (power - 0.55) * 0.9 * pulse + ')');
        column.addColorStop(1, 'rgba(210, 160, 255, 0)');
        context.shadowBlur = 0;
        context.fillStyle = column;
        context.fillRect(x - cell * 0.35 * power, y - cell * 4 * power, cell * 0.7 * power, cell * 4 * power);
      }
    } else {
      var size = cell * 2.4;
      for (var ring = 0; ring < 5; ring++) {
        var spin = now / 400 + ring * 1.3, scale = 1 - ring * 0.16;
        var gradient = context.createRadialGradient(x, y, 0, x, y, size * scale);
        gradient.addColorStop(0, 'rgba(240, 200, 255, 0.5)'); gradient.addColorStop(0.6, 'rgba(150, 60, 240, 0.25)'); gradient.addColorStop(1, 'rgba(90, 20, 160, 0)');
        context.fillStyle = gradient;
        context.beginPath(); context.ellipse(x, y, size * scale, size * scale * 35 / 61, Math.sin(spin) * 0.1, 0, Math.PI * 2); context.fill();
      }
      context.strokeStyle = 'rgba(220, 160, 255, 0.85)'; context.lineWidth = 3;
      context.beginPath(); context.ellipse(x, y, size, size * 35 / 61, 0, now / 500, now / 500 + Math.PI * 1.6); context.stroke();
      context.beginPath(); context.moveTo(x, y); context.lineTo(x, y - cell * 3);
      context.strokeStyle = 'rgba(200, 140, 255, ' + (0.3 + 0.2 * Math.sin(now / 200)) + ')'; context.lineWidth = cell * 0.6; context.stroke();
      // вспышка открытия: расходящийся белый свет
      var flashAge = (now - gate.openedAt) / PORTAL_FLASH;
      if (flashAge < 1) {
        var flashRadius = cell * (2 + 9 * Math.sqrt(flashAge)), strength = Math.pow(1 - flashAge, 1.6);
        context.globalCompositeOperation = 'lighter';
        var burst = context.createRadialGradient(x, y, 0, x, y, flashRadius);
        burst.addColorStop(0, 'rgba(255, 255, 255, ' + strength + ')');
        burst.addColorStop(0.35, 'rgba(235, 200, 255, ' + strength * 0.75 + ')');
        burst.addColorStop(1, 'rgba(150, 60, 240, 0)');
        context.fillStyle = burst;
        context.beginPath(); context.ellipse(x, y - cell * 0.6, flashRadius, flashRadius * 0.8, 0, 0, Math.PI * 2); context.fill();
      }
    }
    context.restore();
  }

  // ---------------- щиты золотистых стражей ----------------
  // Личный щит (unit.shield, %): прикрывает спереди (стрелок в секторе ±67° от направления взгляда). Пока заряд больше
  // нуля, попадание спереди не ранит, а снимает заряд (Combat.SHIELD_DRAIN.personal: автомат 10 %, пушка K7 25 %).
  // В начале хода пришельцев щит, в который не попадали с прошлого хода, заряжается на 50 % — с нуля полностью за два
  // хода, частично разряженный — быстрее. Виден только при попадании: дуга прозрачных шестиугольников перед стражем
  // с радужными разводами от точки удара.
  // Купол (domes): одноразовый щит золотистого вокруг портала на 2 хода. Задерживает пули и снаряды, летящие снаружи
  // внутрь (автомат 5 %, пушка K7 15 %), изнутри наружу пропускает; гранаты летят по дуге без трассировки — пролетают.
  var DOME_RADIUS = 4.6, PERSONAL_RECHARGE = 50;
  var domes = [], fadingDomes = [];
  var directionVectors = null;
  function directionVector(direction) {
    if (!directionVectors) {
      directionVectors = {};
      [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, -1]].forEach(function (delta) {
        var length = Math.hypot(delta[0], delta[1]);
        directionVectors[Iso.directionOf(delta[0], delta[1])] = { x: delta[0] / length, y: delta[1] / length };
      });
    }
    return directionVectors[direction] || { x: 0, y: 1 };
  }
  // стрелок спереди: направление на него отличается от взгляда не больше чем на один сектор
  function facesPoint(unit, point) {
    var direction = Iso.directionOf(point.x - unit.x, point.y - unit.y);
    if (direction < 0) return true;
    var difference = Math.abs(direction - unit.direction) % 8;
    return Math.min(difference, 8 - difference) <= 1;
  }
  function raiseDome(keeper) {
    if (!portal || keeper.domeCharges <= 0) return;
    keeper.domeCharges--;
    domes.push({ x: portal.col + 0.5, y: portal.row + 0.5, h: elevationOf(portal.col, portal.row, portal.level), level: portal.level,
      radius: DOME_RADIUS, charge: 100, turnsLeft: phase === 'aliens' ? 3 : 2, hits: [], raisedAt: performance.now() });
    say(keeper.callsign + ': щит вокруг портала на 2 хода');
  }
  function removeDome(dome, now) {
    var index = domes.indexOf(dome);
    if (index >= 0) domes.splice(index, 1);
    dome.fadeStart = now; fadingDomes.push(dome);
  }
  function ageDomes() {
    domes.slice().forEach(function (dome) {
      dome.turnsLeft--;
      if (dome.turnsLeft <= 0) { removeDome(dome, performance.now()); say('Щит вокруг портала погас'); }
    });
  }
  function rechargeShields() {
    units.forEach(function (unit) {
      if (unit.shield === undefined || unit.dead) return;
      if (!unit.shieldHitRound && unit.shield < 100) unit.shield = Math.min(100, unit.shield + PERSONAL_RECHARGE);
      unit.shieldHitRound = false;
    });
  }
  function shieldHit(result, shot, now) {
    var projectile = shot.weapon.projectile;
    if (result.dome) {
      var dome = result.dome, drain = Combat.SHIELD_DRAIN.dome[projectile] || 5;
      dome.charge = Math.max(0, dome.charge - drain);
      dome.hits.push({ point: result.point, start: now });
      flashes.push({ text: '−' + drain + '% ЩИТ', point: { x: result.point.x, y: result.point.y, h: result.point.h + 0.3 }, start: now, until: now + 1100 });
      if (dome.charge <= 0) { removeDome(dome, now); say('Щит вокруг портала пробит'); }
      return;
    }
    var unit = result.unit, loss = Combat.SHIELD_DRAIN.personal[projectile] || 10;
    unit.shield = Math.max(0, unit.shield - loss);
    unit.shieldHitRound = true;
    unit.shieldFlash = { start: now, point: result.point, broken: unit.shield <= 0 };
    flashes.push({ text: '−' + loss + '% ЩИТ', point: { x: unit.x, y: unit.y, h: unit.elevation + unit.height + 0.2 }, start: now, until: now + 1300 });
    say(unit.callsign + (unit.shield <= 0 ? ': личный щит пробит' : ': попадание в щит, заряд ' + unit.shield + '%'));
  }

  // шестиугольник на поверхности: центр center (м, в осях клеток и высоты), касательные first/second, радиус size
  function hexPath(origin, center, first, second, size) {
    context.beginPath();
    for (var corner = 0; corner < 6; corner++) {
      var angle = corner * Math.PI / 3 + Math.PI / 6, cos = Math.cos(angle) * size, sin = Math.sin(angle) * size;
      var point = Iso.toScreen(origin.x + (center[0] + first[0] * cos + second[0] * sin) / Iso.tileMeters, origin.y + (center[1] + first[1] * cos + second[1] * sin) / Iso.tileMeters,
        origin.h + center[2] + first[2] * cos + second[2] * sin);
      if (corner) context.lineTo(point.x - camera.x, point.y - camera.y); else context.moveTo(point.x - camera.x, point.y - camera.y);
    }
    context.closePath();
  }
  function normalize3(vector) { var length = Math.hypot(vector[0], vector[1], vector[2]) || 1; return [vector[0] / length, vector[1] / length, vector[2] / length]; }
  function cross3(first, second) { return [first[1] * second[2] - first[2] * second[1], first[2] * second[0] - first[0] * second[2], first[0] * second[1] - first[1] * second[0]]; }
  // направление «к зрителю» в осях клеток и высоты: туда, где экранный y растёт, и вверх
  function viewerVector(origin) {
    var base = Iso.toScreen(origin.x, origin.y, 0), alongCol = Iso.toScreen(origin.x + 1, origin.y, 0), alongRow = Iso.toScreen(origin.x, origin.y + 1, 0);
    return normalize3([alongCol.y - base.y, alongRow.y - base.y, Math.hypot(alongCol.y - base.y, alongRow.y - base.y) * 1.1]);
  }
  // радужный оттенок разводов: кольца бегут от точки удара
  function rainbowAt(direction, hits, now) {
    var best = null;
    hits.forEach(function (hit) {
      var age = (now - hit.start) / 1000;
      if (age > 1.4) return;
      var spread = Math.acos(Math.max(-1, Math.min(1, direction[0] * hit.direction[0] + direction[1] * hit.direction[1] + direction[2] * hit.direction[2])));
      var ring = Math.exp(-Math.pow((spread - age * 1.6) / 0.28, 2)) * (1 - age / 1.4);
      if (ring > 0.04 && (!best || ring > best.alpha)) best = { alpha: ring, hue: (spread * 260 + now * 0.25 + hit.start * 0.05) % 360 };
    });
    return best;
  }
  // точки купола: полусфера, сетка близка к шестиугольной (спираль Фибоначчи)
  var DOME_CELLS = (function () {
    var cells = [], count = 230;
    for (var index = 0; index < count; index++) {
      var z = 1 - (index + 0.5) / count, radius = Math.sqrt(1 - z * z), angle = index * Math.PI * (3 - Math.sqrt(5));
      cells.push([Math.cos(angle) * radius, Math.sin(angle) * radius, z]);
    }
    return cells;
  })();
  function drawDome(dome, now, fade) {
    if (dome.level > view.level) return;
    var origin = { x: dome.x, y: dome.y, h: dome.h }, viewer = viewerVector(origin);
    var size = dome.radius * Math.sqrt(2 * Math.PI / DOME_CELLS.length / 2.6);
    dome.hits.forEach(function (hit) {
      if (!hit.direction) hit.direction = normalize3([(hit.point.x - dome.x) * Iso.tileMeters, (hit.point.y - dome.y) * Iso.tileMeters, hit.point.h - dome.h]);
    });
    dome.hits = dome.hits.filter(function (hit) { return now - hit.start < 1400; });
    var strength = (0.35 + 0.65 * dome.charge / 100) * fade;
    var pulse = 0.85 + 0.15 * Math.sin(now / 420);
    context.save();
    context.lineWidth = 1;
    // сначала дальняя сторона, потом ближняя
    [false, true].forEach(function (front) {
      DOME_CELLS.forEach(function (cell) {
        var facing = cell[0] * viewer[0] + cell[1] * viewer[1] + cell[2] * viewer[2];
        if ((facing > 0) !== front) return;
        var center = [cell[0] * dome.radius, cell[1] * dome.radius, cell[2] * dome.radius];
        var first = normalize3(Math.abs(cell[2]) > 0.98 ? [1, 0, 0] : cross3([0, 0, 1], cell)), second = cross3(cell, first);
        hexPath(origin, center, first, second, size * 0.92);
        var tint = rainbowAt(cell, dome.hits, now);
        if (tint) { context.fillStyle = 'hsla(' + tint.hue.toFixed(0) + ', 95%, 65%, ' + (tint.alpha * 0.36 * fade).toFixed(3) + ')'; context.fill(); }
        else { context.fillStyle = 'rgba(150, 220, 255, ' + ((front ? 0.05 : 0.025) * strength).toFixed(3) + ')'; context.fill(); }
        context.strokeStyle = 'rgba(170, 235, 255, ' + ((front ? 0.42 : 0.16) * strength * pulse).toFixed(3) + ')';
        context.stroke();
      });
    });
    // подпись над куполом: заряд и сколько ходов осталось
    if (!dome.fadeStart) {
      var top = Iso.toScreen(dome.x, dome.y, dome.h + dome.radius + 0.4);
      context.font = 'bold 12px Arial, sans-serif'; context.textAlign = 'center';
      context.fillStyle = 'rgba(0, 0, 0, 0.6)'; context.fillText('ЩИТ ' + Math.round(dome.charge) + '% · ХОДОВ ' + dome.turnsLeft, top.x - camera.x + 1, top.y - camera.y + 1);
      context.fillStyle = 'rgba(190, 240, 255, 0.95)'; context.fillText('ЩИТ ' + Math.round(dome.charge) + '% · ХОДОВ ' + dome.turnsLeft, top.x - camera.x, top.y - camera.y);
    }
    context.restore();
  }
  // личный щит: дуга шестиугольников перед стражем, видна 0,9 с после попадания
  function drawPersonalShield(unit, now) {
    var flash = unit.shieldFlash;
    if (!flash || now - flash.start > 900 || unit.level > view.level || !isSeen(unit)) return;
    var age = (now - flash.start) / 900, fade = 1 - age;
    var position = drawPosition(unit), origin = { x: position.x, y: position.y, h: position.elevation };
    var facing = directionVector(unit.direction), viewer = viewerVector(origin);
    var hit = normalize3([(flash.point.x - position.x) * Iso.tileMeters, (flash.point.y - position.y) * Iso.tileMeters, 0]);
    var hitHeight = flash.point.h - position.elevation;
    var faceAngle = Math.atan2(facing.y, facing.x), radius = 0.85;
    var cells = [];
    for (var row = 0; row < 9; row++) for (var column = -5; column <= 5; column++) {
      var angle = faceAngle + (column + (row % 2 ? 0.5 : 0)) * 0.23;
      if (Math.abs(angle - faceAngle) > 1.25) continue;
      var outward = [Math.cos(angle), Math.sin(angle), 0];
      cells.push({ outward: outward, height: 0.25 + row * 0.24, front: outward[0] * viewer[0] + outward[1] * viewer[1] > 0 });
    }
    context.save();
    context.lineWidth = 1.2;
    cells.sort(function (first, second) { return first.front - second.front; });
    cells.forEach(function (cell) {
      var center = [cell.outward[0] * radius, cell.outward[1] * radius, cell.height];
      var first = [-cell.outward[1], cell.outward[0], 0], second = [0, 0, 1];
      var spread = Math.hypot(Math.acos(Math.max(-1, Math.min(1, cell.outward[0] * hit[0] + cell.outward[1] * hit[1]))) * radius, cell.height - hitHeight);
      var ring = Math.exp(-Math.pow((spread - age * 1.4) / 0.3, 2));
      var alpha = fade * (0.25 + 0.75 * ring);
      hexPath(origin, center, first, second, 0.12);
      if (flash.broken) context.fillStyle = 'rgba(255, ' + (120 + 100 * Math.random()).toFixed(0) + ', 90, ' + (alpha * 0.5).toFixed(3) + ')';
      else context.fillStyle = 'hsla(' + ((spread * 300 + now * 0.3) % 360).toFixed(0) + ', 95%, 65%, ' + (alpha * 0.45 * ring + 0.05 * fade).toFixed(3) + ')';
      context.fill();
      context.strokeStyle = 'rgba(180, 240, 255, ' + (alpha * (cell.front ? 0.8 : 0.35)).toFixed(3) + ')';
      context.stroke();
    });
    context.restore();
  }
  // заряд личного щита над золотистым стражем
  function drawShieldBar(unit) {
    if (unit.level > view.level || !isSeen(unit)) return;
    var position = drawPosition(unit), top = Iso.toScreen(position.x, position.y, position.elevation + unit.height + 0.35);
    var x = top.x - camera.x - 18, y = top.y - camera.y;
    context.save();
    context.fillStyle = 'rgba(0, 0, 0, 0.55)'; context.fillRect(x - 1, y - 1, 38, 6);
    context.fillStyle = unit.shield > 0 ? 'rgba(140, 225, 255, 0.95)' : 'rgba(255, 110, 80, 0.9)';
    context.fillRect(x, y, 36 * unit.shield / 100, 4);
    context.restore();
  }
  function drawShields(now) {
    domes.forEach(function (dome) { drawDome(dome, now, Math.min(1, (now - dome.raisedAt) / 600)); });
    fadingDomes = fadingDomes.filter(function (dome) { return now - dome.fadeStart < 900; });
    fadingDomes.forEach(function (dome) { drawDome(dome, now, 1 - (now - dome.fadeStart) / 900); });
    units.forEach(function (unit) {
      if (unit.shield === undefined || unit.dead) return;
      drawPersonalShield(unit, now);
      drawShieldBar(unit);
    });
  }

  // ---------------- конец задания и итоги ----------------
  // Задание кончается:
  //   cleared — уничтожены все пришельцы: «хорошо»;
  //   wiped   — погибли все бойцы (K7 без бойцов задание не продолжает): «плохо»;
  //   evac    — эвакуация (кнопка «ЭВАКУАЦИЯ», X): улетают те, кто стоит в зоне эвакуации (на большой карте — салон
  //             и рампа конвертоплана, MAP.extraction; на других картах — клетки в 2 шагах от точек высадки отряда),
  //             остальные остаются в зоне и считаются потерянными. Результат по обстановке: «хорошо», если уничтожено
  //             не меньше половины пришельцев и потери отряда (погибшие и оставленные) меньше числа убитых пришельцев;
  //   abort   — «Завершить миссию» в окне эвакуации: задание прерывается без итогов — на базу ничего не передаётся
  //             (артефакты, спасённые, потери, K7), память пришельцев не сохраняется; результат «ПРЕРВАНО».
  // Окно итогов (js/results.js) открывается, когда долетели пули и проиграно падение.
  // Артефакты — предметы пришельцев (Items: alien) и тела пришельцев. При зачистке вывозится всё: земля, снаряжение
  // выживших, тела; при эвакуации — только снаряжение улетевших; при гибели отряда — ничего.
  var mission = { over: false, kind: null, result: null, endAt: 0, shown: false, evacuated: null, awaitDelivery: false };
  function endMission(kind, delay) {
    if (mission.over) return;
    mission.over = true; mission.kind = kind;
    if (combat && kind !== 'abort') { alienIntel.battles = (alienIntel.battles || 0) + 1; saveIntel(true); }   // память пришельцев — сразу в браузер
    mission.endAt = performance.now() + (delay === undefined ? 2200 : delay);
    aiming = false; throwing = null; aimTarget = null;
    mission.result = missionSummary().result;
  }
  // Задание спасения: учёный (vip) и дети должны быть живы — и в зоне эвакуации (на борту конвертоплана)
  function rescuePending() {
    if (!MISSION || MISSION.kind !== 'rescue') return false;
    return units.some(function (unit) { return isCivilian(unit) && (unit.vip || unit.child) && !unit.dead && !aboard(unit); });
  }
  // пришельцы уничтожены, ждём, пока учёного и детей доведут до конвертоплана; дошли — задание выполнено.
  // Подкрепление из портала, открывшегося за это время, уничтожать не нужно.
  function checkDelivery() {
    if (!mission.awaitDelivery || mission.over) return;
    if (shots.length || throws.length || units.some(function (unit) { return unit.path.length > 0; })) return;
    if (rescuePending()) return;
    say('Учёный и дети на борту');
    endMission('cleared', 900);
  }
  function updateMission(now) {
    checkDelivery();
    if (!mission.over || mission.shown || now < mission.endAt || shots.length || throws.length || shotView) return;
    mission.shown = true;
    if (window.Results) Results.show(missionSummary());
  }

  // зона эвакуации: ключи клеток
  var extractionCells = (function () {
    var cells = {};
    var add = function (col, row, level) { if (inside(col, row) && level >= 0 && level < LEVELS) cells[level * GRID * GRID + row * GRID + col] = true; };
    if (MAP.extraction && MAP.extraction.length) MAP.extraction.forEach(function (cell) { add(cell[0], cell[1], cell[2]); });
    else startUnits.forEach(function (unit) {
      if (unit.side !== 'squad') return;
      for (var deltaRow = -2; deltaRow < unit.size + 2; deltaRow++) for (var deltaCol = -2; deltaCol < unit.size + 2; deltaCol++) add(unit.col + deltaCol, unit.row + deltaRow, unit.level);
    });
    return cells;
  })();
  function inExtraction(col, row, level) { return !!extractionCells[level * GRID * GRID + row * GRID + col]; }
  // на борту — если все клетки юнита в зоне
  function aboard(unit) {
    for (var deltaRow = 0; deltaRow < unit.size; deltaRow++) for (var deltaCol = 0; deltaCol < unit.size; deltaCol++) {
      if (!inExtraction(unit.col + deltaCol, unit.row + deltaRow, unit.level)) return false;
    }
    return true;
  }
  function evacuationPlan() {
    var squad = units.filter(function (unit) { return unit.side === 'squad' && !unit.police; });   // полиция остаётся в городе
    return { aboard: squad.filter(aboard), left: squad.filter(function (unit) { return !aboard(unit); }) };
  }
  var showExtraction = false;          // подсветка зоны, пока открыто подтверждение
  function requestEvacuation() {
    if (mission.over || (gather && (gather.queue.length || gather.current))) return;
    if (phase !== 'squad') { say('Сейчас ход пришельцев'); return; }
    if (shots.length || throws.length || units.some(function (unit) { return unit.path.length > 0; })) { say('Дождитесь окончания действия'); return; }
    var plan = evacuationPlan();
    var person = function (unit) { return { callsign: unit.callsign, name: unit.name, rank: unit.kind === 'mech' ? '' : unit.rank, robot: unit.kind === 'mech' }; };
    showExtraction = true;
    if (!plan.aboard.length) say('В зоне эвакуации никого нет');
    // камера к зоне: в нижнюю половину экрана, сверху — окно подтверждения
    var cellKeys = Object.keys(extractionCells), sumX = 0, sumY = 0;
    cellKeys.forEach(function (key) {
      var number = Number(key), level = Math.floor(number / (GRID * GRID)), row = Math.floor(number / GRID) % GRID, col = number % GRID;
      var point = Iso.toScreen(col + 0.5, row + 0.5, elevationOf(col, row, level));
      sumX += point.x; sumY += point.y;
    });
    if (cellKeys.length) centerOnPixel(sumX / cellKeys.length, sumY / cellKeys.length - viewHeight * 0.18);
    if (!window.Results) return;
    Results.confirmEvacuation({ aboard: plan.aboard.map(person), left: plan.left.map(person) }, function (answer) {
      showExtraction = false;
      if (answer === 'gather') startGather(plan.left);
      else if (answer === 'abort') { say('Миссия завершена'); endMission('abort', 300); }
      else if (answer) evacuate();
    });
  }

  // «Перевести в зону эвакуации»: юниты вне зоны по очереди идут к свободным клеткам зоны обычным ходом
  // (тратят ОД, могут попасть под ответный огонь). Ближние идут первыми и вглубь зоны — так входы остаются
  // свободными для дальних. Кому не хватает ОД — проходит часть пути. Потом окно эвакуации открывается снова.
  var gather = null;
  function zoneCorners(unit) {
    var corners = [];
    Object.keys(extractionCells).forEach(function (key) {
      var number = Number(key), level = Math.floor(number / (GRID * GRID)), row = Math.floor(number / GRID) % GRID, col = number % GRID;
      for (var deltaRow = 0; deltaRow < unit.size; deltaRow++) for (var deltaCol = 0; deltaCol < unit.size; deltaCol++) {
        if (!inExtraction(col + deltaCol, row + deltaRow, level)) return;
      }
      corners.push({ col: col, row: row, level: level });
    });
    return corners;
  }
  function startGather(list) {
    var queue = list.filter(function (unit) { return !unit.dead && units.indexOf(unit) >= 0; });
    // ближние к зоне — первыми
    var zoneCenter = zoneCorners({ size: 1 }).reduce(function (sum, cell, index, all) { sum.col += cell.col / all.length; sum.row += cell.row / all.length; return sum; }, { col: 0, row: 0 });
    queue.sort(function (first, second) { return Math.hypot(first.col - zoneCenter.col, first.row - zoneCenter.row) - Math.hypot(second.col - zoneCenter.col, second.row - zoneCenter.row); });
    gather = { queue: queue, current: null, short: [], underFire: [], tries: {} };
    say('Переход в зону эвакуации: ' + queue.length);
  }
  function gatherNext(unit) {
    var best = null;
    zoneCorners(unit).forEach(function (cell) {
      var path = findPath(unit, cell);
      if (!path || !path.length) return;
      var steps = affordableSteps(unit, path), whole = steps === path.length;
      // дойдёт целиком — чем глубже (длиннее путь), тем лучше; не дойдёт — чем ближе, тем лучше
      var score = whole ? 1000 + path.length : -path.length;
      if (!best || score > best.score) best = { path: path, steps: steps, whole: whole, score: score };
    });
    if (!best || best.steps === 0) { gather.short.push(unit); return; }
    var path = best.path.slice(0, best.steps);
    unit.timeUnits -= pathCost(unit, path);
    unit.kneeling = false;
    unit.path = path;
    rememberSighted(unit);
    unit.stoppedByFire = false;
    gather.current = unit;
    if (!best.whole) gather.short.push(unit);
  }
  // юнит остановился раньше конца пути: под ответным огнём — остаётся на месте; клетку заняли — ещё попытка (до 3)
  function gatherCheckStopped() {
    var unit = gather.current;
    gather.current = null;
    if (!unit || unit.dead || aboard(unit)) return;
    if (unit.stoppedByFire) { gather.underFire.push(unit); gather.short.splice(gather.short.indexOf(unit), 1); return; }
    if (gather.short.indexOf(unit) < 0 && (gather.tries[unit.callsign] = (gather.tries[unit.callsign] || 0) + 1) < 3) gather.queue.unshift(unit);
  }
  function updateGather() {
    if (!gather) return;
    if (mission.over || phase !== 'squad') { gather = null; return; }
    if (shots.length || throws.length || shotView || units.some(function (unit) { return unit.path.length > 0; })) return;
    if (gather.current) gatherCheckStopped();
    var unit = gather.queue.shift();
    if (unit) { if (!unit.dead && !aboard(unit)) gatherNext(unit); return; }
    var short = gather.short.filter(function (item) { return !item.dead && !aboard(item); });
    var underFire = gather.underFire.filter(function (item) { return !item.dead; });
    gather = null;
    var notes = [];
    if (short.length) notes.push('не хватило ОД: ' + short.map(function (item) { return item.callsign; }).join(', '));
    if (underFire.length) notes.push('остановлены огнём: ' + underFire.map(function (item) { return item.callsign; }).join(', '));
    if (notes.length) say(notes.join('; '));
    requestEvacuation();
  }
  function evacuate() {
    var plan = evacuationPlan();
    if (!plan.aboard.length || mission.over) return;
    mission.evacuated = plan.aboard.slice();
    say('Эвакуация: на борту ' + plan.aboard.length);
    endMission('evac', 400);
  }
  function drawExtraction() {
    if (!showExtraction) return;
    context.save();
    Object.keys(extractionCells).forEach(function (key) {
      var number = Number(key), level = Math.floor(number / (GRID * GRID)), row = Math.floor(number / GRID) % GRID, col = number % GRID;
      var corners = Iso.tileCorners(col, row, elevationOf(col, row, level));
      context.beginPath();
      corners.forEach(function (corner, index) { context[index ? 'lineTo' : 'moveTo'](corner.x - camera.x, corner.y - camera.y); });
      context.closePath();
      context.fillStyle = 'rgba(120, 230, 120, 0.28)'; context.fill();
      context.strokeStyle = 'rgba(160, 255, 160, 0.55)'; context.lineWidth = 1; context.stroke();
    });
    context.restore();
  }

  // ---------------- отладка: досягаемость и клетки под огнём (настройки, группа «Отладка») ----------------
  // Досягаемость: клетки текущего уровня, куда выбранный боец дойдёт за оставшиеся ОД (reachable — те же шаги и цены,
  // что у поиска пути; юниты мешают). Жёлтая сплошная граница — все ОД, голубая пунктирная — после хода останется
  // на самый дешёвый выстрел. Пересчёт — когда боец, его ОД, уровень обзора, двери или юниты сменились.
  // Под огнём: клетки текущего уровня в пределах хода отряда (куда дойдёт хоть один юнит отряда за свои ОД: в ход
  // отряда — за оставшиеся, в ход пришельцев — за полные), по стоящему на которых может выстрелить замеченный пришелец —
  // в пределах дальности его оружия и при свободной линии огня от его ствола до корпуса (как при выборе цели:
  // стены, предметы и юниты на линии заслоняют). Считается частями, не больше FIRE_BUDGET мс за кадр; пока юниты
  // идут, показывается прежняя картина.
  var FIRE_BUDGET = 4, STANDING_TARGET = 1.12, FIRE_LINE = 0.7;
  var reachOverlay = { key: '', far: null, near: null, at: 0 };
  var fireOverlay = { key: '', cells: null, building: null, jobs: null, index: 0 };
  function debugOn(key) { return !!(window.Settings && Settings.values[key]); }
  function unitsSignature() {
    return units.map(function (unit) { return unit.col + ',' + unit.row + ',' + unit.level; }).join(';');
  }
  function updateReachOverlay(now) {
    var unit = selected;
    if (!debugOn('debugReach') || !unit || unit.dead || unit.side !== 'squad' || unit.ai || phase !== 'squad' || mission.over) { reachOverlay.far = null; reachOverlay.key = ''; return; }
    if (unit.path.length || now < reachOverlay.at) return;
    reachOverlay.at = now + 200;
    var key = [units.indexOf(unit), unit.timeUnits, view.level, unitsSignature(), losDoorKey()].join('|');
    if (key === reachOverlay.key) return;
    reachOverlay.key = key;
    var reach = reachable(unit, unit.timeUnits);
    var weapon = weaponOf(unit), shotCost = weapon ? Math.min.apply(null, weapon.modes.map(function (mode) { return mode.cost; })) : null;
    var far = {}, near = {};
    reach.keys.forEach(function (nodeKeyValue) {
      var node = keyNode(nodeKeyValue);
      if (node.level !== view.level) return;
      var cell = node.row * GRID + node.col;
      far[cell] = 1;
      if (shotCost !== null && unit.timeUnits - reach.cost[nodeKeyValue] >= shotCost) near[cell] = 1;
    });
    reachOverlay.far = far; reachOverlay.near = shotCost !== null ? near : null;
  }
  function updateFireOverlay(now) {
    if (!debugOn('debugFire') || mission.over) { fireOverlay.cells = null; fireOverlay.key = ''; fireOverlay.jobs = null; return; }
    if (units.some(function (unit) { return unit.path.length > 0; }) || shots.length) return;
    var shooters = units.filter(function (unit) { return unit.side === 'aliens' && !unit.dead && isSeen(unit) && weaponOf(unit); });
    var movers = units.filter(function (unit) { return unit.side === 'squad' && !unit.dead; });
    var budgetOf = function (unit) { return phase === 'squad' ? unit.timeUnits : unit.maxTimeUnits; };
    var key = shooters.map(function (unit) { return units.indexOf(unit); }).join(',') + '|' + view.level + '|' + unitsSignature() + '|' + losDoorKey() +
      '|' + movers.map(budgetOf).join(',');
    if (key !== fireOverlay.key) {
      fireOverlay.key = key;
      fireOverlay.building = {}; fireOverlay.index = 0;
      // пределы хода отряда на текущем уровне (у K7 — клетки всего его следа)
      var withinMove = {};
      if (shooters.length) movers.forEach(function (unit) {
        var reach = reachable(unit, budgetOf(unit));
        reach.keys.forEach(function (nodeKeyValue) {
          var node = keyNode(nodeKeyValue);
          if (node.level !== view.level) return;
          for (var deltaRow = 0; deltaRow < unit.size; deltaRow++) for (var deltaCol = 0; deltaCol < unit.size; deltaCol++) withinMove[(node.row + deltaRow) * GRID + node.col + deltaCol] = 1;
        });
      });
      // задания: пары «пришелец — клетка» в пределах дальности, клетка проходима и не закрыта по сетке обзора
      var jobs = [];
      shooters.forEach(function (shooter) {
        var weapon = weaponOf(shooter), radius = Math.ceil(weapon.range / combatWorld.tile) + 1;
        for (var row = Math.max(0, shooter.row - radius); row <= Math.min(GRID - 1, shooter.row + radius); row++) {
          for (var col = Math.max(0, shooter.col - radius); col <= Math.min(GRID - 1, shooter.col + radius); col++) {
            if (!withinMove[row * GRID + col] || !mayHaveSight(shooter, col, row, view.level)) continue;
            jobs.push({ shooter: shooter, col: col, row: row });
          }
        }
      });
      fireOverlay.jobs = jobs;
      if (!shooters.length) fireOverlay.cells = null;
    }
    var jobs = fireOverlay.jobs;
    if (!jobs || fireOverlay.index >= jobs.length) return;
    var deadline = performance.now() + FIRE_BUDGET;
    while (fireOverlay.index < jobs.length && performance.now() < deadline) {
      var job = jobs[fireOverlay.index++], cell = job.row * GRID + job.col;
      if (fireOverlay.building[cell]) continue;
      var point = { x: job.col + 0.5, y: job.row + 0.5, h: elevationOf(job.col, job.row, view.level) + STANDING_TARGET };
      var from = muzzleOf(job.shooter, point), distance = Combat.distanceMeters(combatWorld, from, point);
      if (distance > weaponOf(job.shooter).range) continue;
      var line = Combat.trace(combatWorld, from, point, distance + 0.3, job.shooter);
      if (line.kind === 'none' || (line.kind === 'unit' && line.unit.col <= job.col && line.unit.col + line.unit.size > job.col && line.unit.row <= job.row && line.unit.row + line.unit.size > job.row)) fireOverlay.building[cell] = 1;
    }
    if (fireOverlay.index >= jobs.length) { fireOverlay.cells = fireOverlay.building; fireOverlay.jobs = null; }
  }
  function cellOf(key) { var cell = Number(key), col = cell % GRID; return { col: col, row: (cell - col) / GRID }; }
  function drawDebugZones() {
    if (fireOverlay.cells && debugOn('debugFire')) {
      // клетки под огнём — красные границы клеток: все клетки одним путём, обводка толщиной FIRE_LINE пикселей экрана
      context.save();
      context.beginPath();
      Object.keys(fireOverlay.cells).forEach(function (key) {
        var cell = cellOf(key), height = elevationOf(cell.col, cell.row, view.level) + 0.02;
        [[0, 0], [1, 0], [1, 1], [0, 1]].forEach(function (corner, index) {
          var point = Iso.toScreen(cell.col + corner[0], cell.row + corner[1], height);
          context[index ? 'lineTo' : 'moveTo'](point.x - camera.x, point.y - camera.y);
        });
        context.closePath();
      });
      context.strokeStyle = 'rgba(255, 40, 25, 0.5)'; context.lineWidth = FIRE_LINE / zoom; context.lineJoin = 'round';
      context.stroke();
      context.restore();
    }
    if (reachOverlay.far && debugOn('debugReach')) {
      zoneEdges(reachOverlay.far, '#ffd23a', []);
      if (reachOverlay.near) zoneEdges(reachOverlay.near, '#5fd0ff', [6, 4]);
    }
  }
  // граница множества клеток: стороны клеток, за которыми соседняя проходимая клетка в множество не входит
  // (вокруг стен, предметов и юнитов линий нет — только внешняя граница и граница за стенами)
  function zoneEdges(set, color, dash) {
    var occupied = {};
    units.forEach(function (unit) {
      if (unit.dead || unit.level !== view.level) return;
      for (var deltaRow = 0; deltaRow < unit.size; deltaRow++) for (var deltaCol = 0; deltaCol < unit.size; deltaCol++) occupied[(unit.row + deltaRow) * GRID + unit.col + deltaCol] = 1;
    });
    var outside = function (col, row) {
      if (col < 0 || row < 0 || col >= GRID || row >= GRID) return true;
      var index = row * GRID + col;
      return !set[index] && walkable(col, row, view.level) && !occupied[index];
    };
    context.save();
    context.beginPath();
    Object.keys(set).forEach(function (key) {
      var cell = cellOf(key), col = cell.col, row = cell.row, index = row * GRID + col, height = elevationOf(col, row, view.level) + 0.03;
      var edge = function (fromCol, fromRow, toCol, toRow) {
        var start = Iso.toScreen(fromCol, fromRow, height), end = Iso.toScreen(toCol, toRow, height);
        context.moveTo(start.x - camera.x, start.y - camera.y); context.lineTo(end.x - camera.x, end.y - camera.y);
      };
      if (outside(col + 1, row)) edge(col + 1, row, col + 1, row + 1);
      if (outside(col - 1, row)) edge(col, row, col, row + 1);
      if (outside(col, row + 1)) edge(col, row + 1, col + 1, row + 1);
      if (outside(col, row - 1)) edge(col, row, col + 1, row);
    });
    context.setLineDash(dash);
    context.lineCap = 'round';
    context.strokeStyle = 'rgba(0, 0, 0, 0.55)'; context.lineWidth = 4; context.stroke();
    context.strokeStyle = color; context.lineWidth = 2; context.stroke();
    context.restore();
  }

  var RESCUE_EXCELLENT_LOSSES = 3;
  function missionSummary() {
    var kind = mission.kind;
    var lost = function (test) { return startUnits.filter(function (unit) { return test(unit) && unit.dead; }); };
    var evacuated = mission.evacuated || [];
    var leftBehind = function (test) { return kind === 'evac' ? units.filter(function (unit) { return test(unit) && evacuated.indexOf(unit) < 0; }) : []; };
    var isSoldier = function (unit) { return isFighter(unit) && unit.kind !== 'mech' && !unit.staff; };
    var isRobot = function (unit) { return unit.kind === 'mech'; };
    var aliens = startUnits.filter(function (unit) { return unit.side === 'aliens'; });
    var killedAliens = lost(function (unit) { return unit.side === 'aliens'; });
    var soldiersDead = lost(isSoldier), soldiersLeft = leftBehind(isSoldier);
    var robotsDead = lost(isRobot), robotsLeft = leftBehind(isRobot);
    var result = kind === 'cleared' ? 'good' : kind === 'wiped' ? 'bad'
      : killedAliens.length * 2 >= aliens.length && soldiersDead.length + soldiersLeft.length < killedAliens.length ? 'good' : 'bad';
    // гражданские: при зачистке спасены все живые, при эвакуации — улетевшие
    var civilians = startUnits.filter(isCivilian);
    var civiliansRescued = kind === 'cleared' ? civilians.filter(function (unit) { return !unit.dead; }) : kind === 'evac' ? evacuated.filter(isCivilian) : [];
    var civiliansDead = civilians.filter(function (unit) { return unit.dead; });
    var vip = civilians.filter(function (unit) { return unit.vip; })[0] || null;
    var vipRescued = !!vip && civiliansRescued.indexOf(vip) >= 0;
    // задание спасения: уничтожать пришельцев не обязательно, главное — вывезти учёного и детей.
    // «Хорошо» — учёный и все дети спасены, потеряно (погибли или не эвакуированы) меньше половины бойцов;
    // «отлично» — спасены все гражданские и потеряно меньше RESCUE_EXCELLENT_LOSSES бойцов;
    // «удовлетворительно» — учёный и дети спасены, но бойцов потеряно половина или больше; иначе «плохо».
    if (MISSION && MISSION.kind === 'rescue') {
      var soldiersLostCount = soldiersDead.length + soldiersLeft.length, soldiersCount = startUnits.filter(isSoldier).length;
      var keyRescued = vipRescued && civilians.every(function (unit) { return !unit.child || civiliansRescued.indexOf(unit) >= 0; });
      result = !keyRescued ? 'bad' : soldiersLostCount * 2 < soldiersCount ? 'good' : 'satisfactory';
      if (result === 'good' && civiliansRescued.length === civilians.length && soldiersLostCount < RESCUE_EXCELLENT_LOSSES) result = 'excellent';
    }
    if (kind === 'abort') result = 'aborted';
    var counts = {}, order = [];
    var count = function (name) { if (!counts[name]) { counts[name] = 0; order.push(name); } counts[name]++; };
    var lists = [];
    if (kind === 'cleared') {
      killedAliens.forEach(function () { count('ТЕЛО ПРИШЕЛЬЦА · СТРАЖ'); });
      Object.keys(groundItems).forEach(function (key) { lists.push(groundItems[key]); });
      units.forEach(function (unit) { if (unit.side === 'squad' && unit.inventory) lists.push(unit.inventory); });
    } else if (kind === 'evac') {
      evacuated.forEach(function (unit) { if (unit.inventory) lists.push(unit.inventory); });
    }
    lists.forEach(function (list) {
      list.forEach(function (entry) { var info = Items.info(entry.item); if (info.alien) count(info.name); });
    });
    // у гражданских — вид (набор спрайтов civ<вид>), ребёнок, учёный: спасённые учёный и дети стоят на базе в салоне КТ-6
    var person = function (unit) {
      var entry = { callsign: unit.callsign, name: unit.name, rank: unit.kind === 'mech' ? '' : unit.rank };
      if (isCivilian(unit)) { entry.look = String(unit.camo || '').replace(/^civ/, ''); entry.child = !!unit.child; entry.vip = !!unit.vip; }
      return entry;
    };
    return {
      kind: kind, result: result, map: MAP.name || '', turn: turn, run: MISSION_RUN, fromBase: !!SHIP, intel: intelSummary(),
      aliensKilled: killedAliens.length, aliensTotal: aliens.length,
      artifacts: order.map(function (name) { return { name: name, count: counts[name] }; }),
      soldiersLost: soldiersDead.map(person), soldiersLeft: soldiersLeft.map(person),
      soldiersTotal: startUnits.filter(isSoldier).length,
      robotsLost: robotsDead.map(person), robotsLeft: robotsLeft.map(person),
      robotsTotal: startUnits.filter(isRobot).length,
      evacuated: evacuated.filter(function (unit) { return !isCivilian(unit); }).length,
      // вернулись на базу: при зачистке — все живые, при эвакуации — улетевшие (финальный кадр демо, js/demo.js)
      soldiersHome: startUnits.filter(function (unit) { return isSoldier(unit) && !unit.dead && (kind !== 'evac' || evacuated.indexOf(unit) >= 0); }).map(function (unit) { return unit.callsign; }),
      robotHome: startUnits.some(function (unit) { return isRobot(unit) && !unit.dead && (kind !== 'evac' || evacuated.indexOf(unit) >= 0); }),
      rescue: MISSION && MISSION.kind === 'rescue' ? {
        civiliansTotal: civilians.length, civiliansRescued: civiliansRescued.map(person), civiliansDead: civiliansDead.map(person),
        childrenTotal: civilians.filter(function (unit) { return unit.child; }).length,
        childrenRescued: civiliansRescued.filter(function (unit) { return unit.child; }).length,
        vip: vip ? person(vip) : null, vipRescued: vipRescued, vipDead: !!vip && vip.dead, portalOpen: !!(portal && portal.open)
      } : null
    };
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
      // дешёвые проверки до трассировки: готовность, ОД на выстрел, дальность, линия взгляда по клеткам
      var score = readiness(unit, unit.timeUnits);
      if (score <= moverScore || weapon.modes[modeIndex].cost > unit.timeUnits) return;
      if (mover.kind === 'mech' && avoidsMech(unit)) return;          // охрана банка с роботом не перестреливается
      if (Combat.distanceMeters(combatWorld, targetPointOf(unit), target.point) > weapon.range + 2) return;
      if (!mayHaveSightOf(unit, mover)) return;
      var preview = shotPreview(unit, target, modeIndex);
      if (!preview.clear || preview.distance > weapon.range || preview.cost > unit.timeUnits) return;
      ready.push({ unit: unit, score: score, modeIndex: modeIndex });
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
      mover.stoppedByFire = true;          // для «Перевести в зону эвакуации»: под огнём дальше не идёт
      if (mover === selected) viewFollow(mover);
    }
  }
  // Боец в свой ход заметил нового врага (у него загорелась бы красная метка) — останавливается на клетке,
  // ОД за непройденную часть пути возвращаются. Враги, видимые уже в начале перехода, не останавливают.
  function visibleEnemiesOf(viewer) {
    var list = [];
    units.forEach(function (unit) {
      if (unit.side !== 'aliens' || unit.dead || !isSeen(unit)) return;
      if (canSee(viewer, unit) !== null) list.push(unit);
    });
    return list;
  }
  function rememberSighted(unit) {
    unit.sightedOnMove = unit.side === 'squad' && combat ? visibleEnemiesOf(unit) : [];
  }
  function sightCheck(mover) {
    if (!combat || mover.dead || mover.side !== 'squad' || phase !== 'squad' || mission.over) return;
    // туман пересчитывается по таймеру; здесь — сразу, чтобы новый враг был учтён на этой же клетке
    fog.checkAt = 0;
    updateFog(performance.now());
    var known = mover.sightedOnMove || [];
    var fresh = visibleEnemiesOf(mover).filter(function (unit) { return known.indexOf(unit) < 0; });
    if (!fresh.length) return;
    var refund = 0;
    mover.path.forEach(function (step) { refund += step.cost; });
    mover.timeUnits += refund;
    mover.path = [];
    mover.walked = 0;
    mover.sightedOnMove = known.concat(fresh);
    spotted.at = 0;
    say(mover.callsign + ': замечен противник' + (fresh.length > 1 ? ' (' + fresh.length + ')' : ''));
    if (mover === selected) viewFollow(mover);
  }
  // идёт ли юнит в свой ход (тогда по нему возможен ответный огонь)
  function ownPhase(unit) { return (unit.side === 'aliens') === (phase === 'aliens'); }

  // ---------------- ход пришельцев: ИИ ----------------
  // Каждый пришелец по очереди принимает решения (aiDecide), пока может: стреляет, уходит в укрытие, занимает позицию
  // или скрытно подходит. В мирной обстановке пришельцы ничего не делают.
  var aiQueue = [], aiWaitUntil = 0;
  function watchUnit(unit) {
    if (!Settings.values.followAliens || !isSeen(unit)) return;
    centerOn(unit.x, unit.y, unit.elevation);
    var level = followLevel(unit);
    setView(level, isIndoor(unit.col, unit.row, unit.level) || isIndoor(unit.col, unit.row, level));
  }
  function setPhaseLabel() {
    var label = document.getElementById('phase');
    if (label) label.textContent = mission.roam ? 'ОСМОТР КАРТЫ' : phase === 'squad' ? 'ФАЗА ОТРЯДА' : phase === 'staff' ? (staffQueue.length && staffQueue.every(function (unit) { return unit.police; }) ? 'ПОЛИЦИЯ' : 'ПЕРСОНАЛ БАЗЫ') : 'ХОД ПРИШЕЛЬЦЕВ';
  }
  // ---- переговоры пришельцев в их ход (Sound.alienTalk) ----
  // В начале хода один пришелец вызывает, один-два отвечают; когда пришелец начинает действовать — иногда короткая
  // реплика, перед первым выстрелом — резкий выкрик. Фразы не накладываются. Видимый пришелец слышен с его места
  // (дальние тише), невидимый — как перехват по рации.
  var talk = { queue: [], freeAt: 0 };
  function alienVoice(alien) {
    var number = Number((/\d+/.exec(alien.callsign || '') || [1])[0]);
    return 78 + (number * 29) % 45;              // низкие голоса: 78–122 Гц
  }
  function sayAlien(alien, mood, now) {
    if (!window.Sound || !Sound.alienTalk || !alien || alien.dead) return;
    now = now || performance.now();
    if (now < talk.freeAt) return;
    var seen = isSeen(alien);
    var seconds = Sound.alienTalk({ pitch: alienVoice(alien), mood: mood, radio: !seen, distance: seen ? screenDistance(alien) : 0 });
    talk.freeAt = now + seconds * 1000 + 60;       // реплики идут почти без пауз
  }
  function updateTalk(now) {
    if (phase !== 'aliens' || !talk.queue.length || now < talk.queue[0].at || now < talk.freeAt) return;
    var entry = talk.queue.shift();
    sayAlien(entry.alien, entry.mood, now);
  }
  function startAlienTalk() {
    var aliens = units.filter(function (unit) { return unit.side === 'aliens' && !unit.dead; });
    if (!aliens.length) return;
    var shuffled = aliens.slice().sort(function () { return Math.random() - 0.5; });
    var now = performance.now();
    talk.queue = [{ at: now + 150, alien: shuffled[0], mood: 'call' }];
    for (var index = 1; index < Math.min(shuffled.length, 1 + 2 + Math.floor(Math.random() * 2)); index++) talk.queue.push({ at: now + 150, alien: shuffled[index], mood: Math.random() < 0.3 ? 'alert' : 'reply' });
  }
  function startAlienPhase() {
    phase = 'aliens';
    if (combat) startAlienTalk();
    setPhaseLabel();
    units.forEach(function (unit) { if (unit.side === 'aliens') { unit.timeUnits = turnTimeUnits(unit); unit.aiMoves = 0; unit.aiShots = 0; } });
    rechargeShields();
    approachField = null; soldierField = null;     // отряд мог переместиться: поля путей строятся заново
    aiQueue = units.filter(function (unit) { return unit.side === 'aliens'; });
    aiWaitUntil = performance.now() + 500;
    say(combat ? 'Ход пришельцев' : 'Ход пришельцев: мирная обстановка');
  }
  function finishAlienPhase() {
    phase = 'squad';
    turn++;
    ageDomes();
    units.forEach(function (unit) { if (unit.side === 'squad') unit.timeUnits = turnTimeUnits(unit); });
    setPhaseLabel();
    say('Ход ' + turn);
    if (selected) { viewFollow(selected); centerOn(selected.x, selected.y, selected.elevation); }
    updateHover();
  }
  // ---- враги в поле зрения выбранного бойца (метки с номерами над панелью) ----
  // Видит — если ничто не заслоняет прямую от глаз бойца до корпуса или головы пришельца, не дальше SIGHT_METERS.
  // Номера по расстоянию: 1 — ближайший. Список обновляется 4 раза в секунду.
  var SIGHT_METERS = 40;
  var spotted = { list: [], at: 0 };
  var markedEnemy = null;             // враг, на метку которого наведена мышь — подсвечивается на карте
  function canSee(viewer, target) {
    var eye = { x: viewer.x, y: viewer.y, h: viewer.elevation + (viewer.kneeling ? 1.0 : Math.min(viewer.height, 2.4) * 0.9) };
    var points = [targetPointOf(target), { x: target.x, y: target.y, h: target.elevation + target.height * 0.9 }];
    for (var index = 0; index < points.length; index++) {
      var distance = Combat.distanceMeters(combatWorld, eye, points[index]);
      if (distance > SIGHT_METERS) return null;
      // свои бойцы на линии взгляда не заслоняют: луч продолжается за ними
      var start = eye, ignore = viewer;
      for (var hops = 0; hops < 4; hops++) {
        var rest = Combat.distanceMeters(combatWorld, start, points[index]);
        var line = Combat.trace(combatWorld, start, points[index], rest + 0.3, ignore);
        if (line.kind === 'unit' && line.unit === target) return distance;
        if (line.kind !== 'unit' || line.unit.side !== 'squad') break;
        start = line.point; ignore = line.unit;
      }
    }
    return null;
  }
  function updateSpotted(now) {
    if (now < spotted.at) return;
    spotted.at = now + 250;
    var viewer = selected;
    if (!viewer || viewer.dead || viewer.side !== 'squad') { spotted.list = []; return; }
    var list = [];
    units.forEach(function (unit) {
      if (unit.side !== 'aliens' || unit.dead || !isSeen(unit)) return;
      var distance = canSee(viewer, unit);
      if (distance !== null) list.push({ unit: unit, distance: distance });
    });
    list.sort(function (first, second) { return first.distance - second.distance; });
    spotted.list = list;
  }
  // прицел по метке: панель остаётся на бойце; если враг за краем экрана — камера сдвигается, чтобы видеть обоих
  function aimAt(unit) {
    if (!unit || unit.dead || phase !== 'squad' || !selected || busy()) return;
    if (!weaponOf(selected)) { say('Нет оружия'); return; }
    throwing = null; aiming = true; aimTarget = unit;
    showTarget(unit);
    raiseViewTo(unit);
    updateHover();
  }
  // Уровни выше уровня обзора не рисуются. Если цель выше — обзор поднимается до её уровня (нижние уровни
  // с бойцом остаются видны), стены срезаются, если цель в помещении. После отмены прицела обзор возвращается к бойцу.
  var aimRaisedView = false;
  function raiseViewTo(unit) {
    var level = followLevel(unit);
    if (level <= view.level) return;
    setView(level, view.cut || isIndoor(unit.col, unit.row, unit.level));
    aimRaisedView = true;
  }
  // Камера к цели прицела: если враг не виден целиком, камера стремится к середине между бойцом и врагом,
  // но сдвигается так, чтобы враг (от ног до головы) остался в кадре с отступами. На дальней дистанции
  // боец и враг вместе не помещаются — тогда в кадре враг, а боец у края или за ним (вернуть — «К БОЙЦУ», C).
  function showTarget(unit) {
    var frame = frameFor(unit.x, unit.y, unit.elevation, unit.height || 2);
    if (frame.inside) return;
    var middle = Iso.toScreen((selected.x + unit.x) / 2, (selected.y + unit.y) / 2, (selected.elevation + unit.elevation) / 2);
    camera.x = Math.max(frame.minX, Math.min(frame.maxX, middle.x - viewWidth / 2));
    camera.y = Math.max(frame.minY, Math.min(frame.maxY, middle.y - viewHeight / 2));
    clampCamera();
  }
  // Кадр для фигуры высотой heightMeters, стоящей в точке (col, row, elevation): виден ли он сейчас целиком
  // с отступами от краёв и блоков интерфейса (сверху — блок хода и подсказка, до ~120 px, и метка шанса над головой;
  // справа — колонка меток), и в каких пределах может стоять камера, чтобы он был виден.
  function frameFor(col, row, elevation, heightMeters) {
    var foot = Iso.toScreen(col, row, elevation);
    var marginLeft = 160, marginRight = 200, marginBottom = 80;
    var marginTop = Math.min(heightMeters * Iso.pixelsPerMeterUp + 200, viewHeight * 0.6);
    var screenX = foot.x - camera.x, screenY = foot.y - camera.y;
    return {
      inside: screenX >= marginLeft && screenX <= viewWidth - marginRight && screenY >= marginTop && screenY <= viewHeight - marginBottom,
      minX: foot.x - (viewWidth - marginRight), maxX: foot.x - marginLeft,
      minY: foot.y - (viewHeight - marginBottom), maxY: foot.y - marginTop
    };
  }
  function drawMarkedEnemy() {
    if (!markedEnemy || markedEnemy.dead) return;
    var tile = { col: markedEnemy.col, row: markedEnemy.row, level: markedEnemy.level };
    drawBox(tile, 'rgba(255, 140, 36, 0.98)', 'back', 1, 3.2);
    drawBox(tile, 'rgba(255, 140, 36, 0.98)', 'front', 1, 3.2);
    drawEnemyHover({ kind: 'enemy', unit: markedEnemy });
  }
  // фокус на бойца: камера к выбранному, уровень обзора и срез стен — по нему, на панели — он
  function focusSelected() {
    if (!selected) { say('Боец не выбран'); return; }
    inspected = null;
    viewFollow(selected);
    centerOn(selected.x, selected.y, selected.elevation);
    updateHover();
  }

  // ---- музыка (js/music.js): общая тема, пока тихо; боевая — если стреляли в этот или прошлый ход
  // либо живые пришелец и боец ближе 25 м видят друг друга (ничто не заслоняет линию от ствола до корпуса) ----
  var lastShotTurn = -10, musicCheckAt = 0, CONTACT_METERS = 25;
  // контакт: пришелец виден отряду (с туманом войны — только обнаруженный) и между ним и бойцом свободная линия огня
  function inContact() {
    return units.some(function (alien) {
      if (alien.side !== 'aliens' || alien.dead || !isSeen(alien)) return false;
      return units.some(function (unit) {
        if (unit.side !== 'squad' || unit.dead) return false;
        if (!mayHaveSightOf(unit, alien)) return false;
        var point = targetPointOf(unit), from = muzzleOf(alien, point);
        var distance = Combat.distanceMeters(combatWorld, from, point);
        if (distance > CONTACT_METERS) return false;
        var line = Combat.trace(combatWorld, from, point, distance + 0.3, alien);
        return line.kind === 'unit' && line.unit === unit;
      });
    });
  }
  // мирная обстановка — общая тема; бой — фон «Тень», при контакте или стрельбе — с пульсом
  // настроение музыки: мирно — общая тема; бой без контакта (пришельцев ещё не видно) — «Высадка»; контакт или стрельба
  // на этом или прошлом ходу — «Штурм»; задание кончилось (эвакуация, зачистка) — «Возвращение»
  function musicMood() {
    // конец задания: если погибли бойцы — душераздирающая тема, иначе «Возвращение»
    // конец задания — музыка по оценке: ХОРОШО и ОТЛИЧНО — «Чествование», УДОВЛЕТВОРИТЕЛЬНО — «Возвращение», ПЛОХО — «Марш»
    if (mission.over) return mission.result === 'good' || mission.result === 'excellent' ? 'triumph' : mission.result === 'satisfactory' ? 'debrief' : 'defeat';
    return !combat ? 'calm' : turn - lastShotTurn <= 1 || inContact() ? 'battle' : 'tactical';
  }
  function updateMusic(now) {
    if (!window.Music || now < musicCheckAt) return;
    musicCheckAt = now + 1000;                     // раз в секунду: трассировки пар пришелец — боец
    Music.setMood(musicMood());
  }

  // враги для стрелка: для пришельцев — отряд, для персонала базы — пришельцы, которых видит отряд (туман войны)
  function isEnemyOf(shooter, unit) {
    if (unit.dead) return false;
    if (shooter.side === 'aliens') return unit.side === 'squad';
    return unit.side === 'aliens' && isSeen(unit);
  }
  function visibleTargets(alien) {
    var weapon = weaponOf(alien);
    var result = [];
    units.forEach(function (unit) {
      if (!isEnemyOf(alien, unit)) return;
      if (!mayHaveSightOf(unit, alien)) return;                 // взгляд взаимный: цель не видит клетку стрелка — и он её
      var point = targetPointOf(unit), from = muzzleOf(alien, point);
      var distance = Combat.distanceMeters(combatWorld, from, point);
      if (distance > weapon.range) return;
      var line = Combat.trace(combatWorld, from, point, distance + 0.3, alien);
      if (line.kind === 'unit' && line.unit === unit) result.push({ unit: unit, point: point, distance: distance });
    });
    result.sort(function (first, second) { return first.distance - second.distance; });
    return result;
  }

  // ---- ИИ пришельцев: укрытия, расстояние по путям, стрельба с отходом ----
  // Клетки, куда пришелец может дойти за свои ОД (Дейкстра по тем же шагам, что и поиск пути; юниты мешают).
  function reachable(mover, budget) {
    var free = isFreeFor(mover), neighbours = neighbourFunction(mover, free);
    var startKey = nodeKey(mover.col, mover.row, mover.level);
    var cost = {}, parent = {}, stepCost = {}, stepExtra = {}, done = {}, open = [startKey];
    cost[startKey] = 0;
    while (open.length) {
      var bestIndex = 0;
      for (var index = 1; index < open.length; index++) if (cost[open[index]] < cost[open[bestIndex]]) bestIndex = index;
      var current = open[bestIndex];
      open[bestIndex] = open[open.length - 1]; open.pop();
      if (done[current]) continue;
      done[current] = true;
      neighbours(current, function (next, step, extra) {
        var total = cost[current] + step;
        if (total > budget || (cost[next] !== undefined && cost[next] <= total)) return;
        cost[next] = total; parent[next] = current; stepCost[next] = step; stepExtra[next] = extra;
        open.push(next);
      });
    }
    return {
      keys: Object.keys(cost).map(Number), cost: cost,
      path: function (key) {
        var raw = [];
        for (var node = key; node !== startKey; node = parent[node]) raw.unshift({ key: node, cost: stepCost[node], extra: stepExtra[node] });
        return stepsFromRaw(raw);
      }
    };
  }
  // Расстояние до ближайшего бойца по настоящим путям (в ОД; юниты не мешают): по нему пришелец приближается,
  // и каждый шаг действительно сокращает путь — без хождения туда-обратно вокруг препятствий.
  var approachField = null;
  function buildApproachField() { approachField = fieldFrom(units.filter(function (unit) { return unit.side === 'squad'; })); }
  // поле расстояний по путям от клеток юнитов (или точек { col, row, level, size: 1 })
  function fieldFrom(sources) {
    var walker = { size: 1 }, neighbours = neighbourFunction(walker, function (col, row, level) { return walkable(col, row, level); });
    var field = {}, open = [];
    sources.forEach(function (unit) {
      var size = unit.size || 1;
      for (var dy = 0; dy < size; dy++) for (var dx = 0; dx < size; dx++) { var key = nodeKey(unit.col + dx, unit.row + dy, unit.level); field[key] = 0; open.push(key); }
    });
    // волна с ведром по стоимости (шаги 4, 6, лестницы — целые)
    var buckets = [open], distance = 0;
    while (distance < buckets.length && distance < 2000) {
      var list = buckets[distance] || [];
      for (var index = 0; index < list.length; index++) {
        var key = list[index];
        if (field[key] !== distance) continue;
        neighbours(key, function (next, step) {
          var total = distance + step;
          if (field[next] !== undefined && field[next] <= total) return;
          field[next] = total;
          (buckets[total] = buckets[total] || []).push(next);
        });
      }
      distance++;
    }
    return field;
  }
  function fieldSteps(key) { return stepsIn(approachField, key); }
  function stepsIn(field, key) { var value = field && field[key]; return value === undefined ? 99 : value / COST.step; }

  // ---- память пришельцев: какие цели трудные ----
  // Пришельцы учатся на столкновениях. По каждому классу целей (K7, бойцы, персонал базы, гражданские) копится:
  // выстрелы, попадания, нанесённый урон и полное здоровье целей при попадании, убитые цели, урон и потери,
  // полученные от этого класса. Отсюда «попаданий до гибели» = здоровье / средний урон за попадание:
  // не меньше INTEL_HARD — трудная цель, не больше INTEL_EASY — лёгкая (нужно хотя бы INTEL_MIN_HITS попаданий).
  // Трудную цель пришелец бьёт, только если на неё можно навалиться группой (INTEL_GROUP здоровых пришельцев рядом
  // её видят); иначе не стреляет по ней в свой ход, держится вне её обзора и подальше, прячется (засада ответным
  // огнём остаётся). Лёгкие цели — в первую очередь. Память общая для всех заданий и хранится в браузере
  // (localStorage, INTEL_KEY); позже её можно будет держать на сервере при регистрации игрока.
  var INTEL_KEY = window.Demo ? Demo.storageKey('aliens26.alienIntel.v1') : 'aliens26.alienIntel.v1', INTEL_HARD = 6, INTEL_EASY = 3, INTEL_MIN_HITS = 3, INTEL_GROUP = 3;
  var INTEL_NAMES = { K7: 'шагающая машина K7', soldier: 'бойцы', staff: 'персонал базы', civilian: 'гражданские' };
  var alienIntel = (function () {
    try { var stored = JSON.parse(localStorage.getItem(INTEL_KEY)); if (stored && stored.version === 1 && stored.classes) return stored; } catch (error) { }
    return { version: 1, classes: {}, battles: 0 };
  })();
  var intelSaveTimer = null;
  function saveIntel(now) {
    if (intelSaveTimer) { clearTimeout(intelSaveTimer); intelSaveTimer = null; }
    var write = function () { intelSaveTimer = null; try { localStorage.setItem(INTEL_KEY, JSON.stringify(alienIntel)); } catch (error) { } };
    if (now) write(); else intelSaveTimer = setTimeout(write, 1500);
  }
  function targetClass(unit) { return unit.kind === 'mech' ? 'K7' : unit.staff ? 'staff' : unit.side === 'squad' ? 'soldier' : 'civilian'; }
  function intelEntry(name) {
    if (!alienIntel.classes[name]) alienIntel.classes[name] = { shots: 0, hits: 0, damage: 0, health: 0, kills: 0, taken: 0, aliensKilled: 0 };
    return alienIntel.classes[name];
  }
  function intelShot(shooter, target) {
    if (!combat || shooter.side !== 'aliens' || !target || target.side === 'aliens') return;
    intelEntry(targetClass(target)).shots++; saveIntel();
  }
  function intelHit(shooter, target, amount, killed) {
    if (!combat || !shooter || !target) return;
    if (shooter.side === 'aliens' && target.side !== 'aliens') {
      var entry = intelEntry(targetClass(target));
      entry.hits++; entry.damage += amount; entry.health += target.maxHealth; if (killed) entry.kills++;
    } else if (shooter.side !== 'aliens' && target.side === 'aliens') {
      var source = intelEntry(targetClass(shooter));
      source.taken += amount; if (killed) source.aliensKilled++;
    } else return;
    saveIntel();
  }
  // попаданий до гибели цели этого класса или null, пока опыта мало
  function intelToughness(name) {
    var entry = alienIntel.classes[name];
    if (!entry || entry.hits < INTEL_MIN_HITS) return null;
    return (entry.health / entry.hits) / Math.max(1, entry.damage / entry.hits);
  }
  function intelRating(unit) {
    var toughness = intelToughness(targetClass(unit));
    if (toughness === null) return 'unknown';
    return toughness >= INTEL_HARD ? 'hard' : toughness <= INTEL_EASY ? 'easy' : 'normal';
  }
  // можно навалиться группой: столько здоровых пришельцев в пределах дальности видят клетку цели
  function groupReady(target) {
    var count = 0;
    units.forEach(function (unit) {
      if (unit.side !== 'aliens' || unit.dead || woundedMode(unit)) return;
      var weapon = weaponOf(unit);
      if (!weapon || Combat.distanceMeters(combatWorld, targetPointOf(unit), targetPointOf(target)) > weapon.range) return;
      if (mayHaveSightOf(unit, target)) count++;
    });
    return count >= INTEL_GROUP;
  }
  // для окна итогов: что пришельцы знают о целях
  function intelSummary() {
    return Object.keys(alienIntel.classes).map(function (name) {
      var entry = alienIntel.classes[name], toughness = intelToughness(name);
      return { name: INTEL_NAMES[name] || name, hits: entry.hits, toughness: toughness, rating: toughness === null ? 'unknown' : toughness >= INTEL_HARD ? 'hard' : toughness <= INTEL_EASY ? 'easy' : 'normal', aliensKilled: entry.aliensKilled };
    });
  }
  window.AlienIntel = { data: function () { return alienIntel; }, reset: function () { alienIntel = { version: 1, classes: {}, battles: 0 }; saveIntel(true); } };

  // ---- тактика пришельцев в задании (MAP.mission.posts, attackers) ----
  // В начале боя пришельцы делятся: attackers (5) — те, кто не стоит у постов, ближние к отряду, — идут в атаку;
  // остальные — охрана: каждый идёт к ближнему посту (зал банка, детская площадка) и держит там оборону — выбирает
  // клетку с укрытием в радиусе поста, стреляет по тем, кого видит, за пределы поста не уходит.
  // Атакующие смотрят, кто из отряда вышел из зоны эвакуации (конвертоплана):
  //   вышел только робот — прячутся в укрытиях, на открытое место не выходят, стреляют лишь из-за укрытия;
  //   вышли бойцы — идут на бойцов (поле путей только до них), бьют прежде всего по ним, держатся вне обзора робота
  //   и не ближе 6 клеток к нему;  никто не вышел — обычный скрытный подход.
  // Подкрепление из портала ролей не получает и действует как обычно.
  var POSTS = MISSION && MISSION.posts || [];
  var rolesAssigned = false, postFields = {}, soldierField = null;
  function assignAlienRoles() {
    rolesAssigned = true;
    if (!POSTS.length) return;
    var aliens = units.filter(function (unit) { return unit.side === 'aliens' && !unit.dead; });
    var squad = units.filter(function (unit) { return unit.side === 'squad'; });
    if (!squad.length) return;
    var centerX = squad.reduce(function (sum, unit) { return sum + unit.x; }, 0) / squad.length;
    var centerY = squad.reduce(function (sum, unit) { return sum + unit.y; }, 0) / squad.length;
    var toSquad = function (alien) { return Math.hypot(alien.x - centerX, alien.y - centerY); };
    var nearestPost = function (alien) {
      var best = null, bestDistance = Infinity;
      POSTS.forEach(function (post) { var distance = Math.hypot(alien.x - post.col - 0.5, alien.y - post.row - 0.5); if (distance < bestDistance) { bestDistance = distance; best = post; } });
      return { post: best, distance: bestDistance };
    };
    var atPost = function (alien) { var near = nearestPost(alien); return near.distance <= near.post.radius + 3; };
    var count = MISSION.attackers || 5;
    var byDistance = aliens.slice().sort(function (first, second) { return toSquad(first) - toSquad(second); });
    var attackers = byDistance.filter(function (alien) { return !atPost(alien); }).slice(0, count);
    byDistance.forEach(function (alien) { if (attackers.length < count && attackers.indexOf(alien) < 0) attackers.push(alien); });
    aliens.forEach(function (alien) {
      if (attackers.indexOf(alien) >= 0) alien.role = 'attack';
      else { alien.role = 'guard'; alien.post = nearestPost(alien).post; }
    });
  }
  // Охрана поста с avoidMech (зал банка): с роботом в перестрелку не вступает — ни в свой ход, ни ответным огнём,
  // в том числе через окна. Когда робот ранит или убивает кого-то из охраны этого поста (post.mechAlarm), охрана
  // отходит из обзора робота вглубь (радиус поста + MECH_RETREAT_EXTRA) и укрывается; по бойцам стреляет только
  // оттуда, где робот её не видит.
  var MECH_RETREAT_EXTRA = 4;
  function avoidsMech(alien) { return alien.role === 'guard' && !!alien.post && !!alien.post.avoidMech; }
  function mechAlarm(shooter, target) {
    if (!shooter || shooter.kind !== 'mech' || !target || !avoidsMech(target) || target.post.mechAlarm) return;
    target.post.mechAlarm = true;
    say('Пришельцы в банке отходят от робота');
  }
  function postField(post) {
    if (!postFields[post.name]) postFields[post.name] = fieldFrom([{ col: post.col, row: post.row, level: post.level }]);
    return postFields[post.name];
  }
  function alienTactic(alien) {
    if (!alien.role) return null;
    if (alien.role === 'guard') return { kind: 'guard', field: postField(alien.post), radius: alien.post.radius };
    var soldiersOut = units.filter(function (unit) { return isFighter(unit) && !unit.dead && unit.kind !== 'mech' && !aboard(unit); });
    if (soldiersOut.length) {
      if (!soldierField) soldierField = fieldFrom(soldiersOut);
      return { kind: 'assault', field: soldierField };
    }
    if (units.some(function (unit) { return unit.side === 'squad' && unit.kind === 'mech' && !unit.dead && !aboard(unit); })) return { kind: 'hide' };
    return null;
  }
  // известные трудные враги рядом (до 20 клеток); cautious — если навалиться на них группой нельзя
  function hardEnemies(alien) {
    var list = units.filter(function (unit) {
      return isEnemyOf(alien, unit) && !unit.dead && intelRating(unit) === 'hard' && Math.max(Math.abs(unit.col - alien.col), Math.abs(unit.row - alien.row)) <= 20;
    });
    return { list: list, cautious: list.some(function (unit) { return !groupReady(unit); }) };
  }
  function hardDistance(node, list) {
    var best = 99;
    list.forEach(function (unit) {
      var size = unit.size || 1;
      var dx = Math.max(0, unit.col - node.col, node.col - (unit.col + size - 1)), dy = Math.max(0, unit.row - node.row, node.row - (unit.row + size - 1));
      best = Math.max(0, Math.min(best, Math.max(dx, dy)));
    });
    return best;
  }
  // клеток до ближайшего робота отряда (по прямой, чебышёв)
  function mechDistance(node) {
    var best = 99;
    units.forEach(function (unit) {
      if (unit.side !== 'squad' || unit.kind !== 'mech' || unit.dead) return;
      var dx = Math.max(0, unit.col - node.col, node.col - (unit.col + unit.size - 1)), dy = Math.max(0, unit.row - node.row, node.row - (unit.row + unit.size - 1));
      best = Math.min(best, Math.max(dx, dy));
    });
    return best;
  }

  function cellBlocked(col, row, level) {
    return !inside(col, row) || !walkable(col, row, level) || !!combatWorld.solids[level * GRID * GRID + row * GRID + col];
  }
  // Сколько бойцов видят пришельца на клетке (свободна прямая линия огня от их ствола, в пределах дальности)
  // и по кому он сам сможет стрелять оттуда.
  function exposureAt(alien, node) {
    var elevation = elevationOf(node.col, node.row, node.level);
    var body = { x: node.col + 0.5, y: node.row + 0.5, h: elevation + alien.height * 0.62 };
    var seen = 0, seenByMech = 0, seenByHard = 0, shootable = [];
    var ownWeapon = weaponOf(alien);
    units.forEach(function (unit) {
      if (!isEnemyOf(alien, unit)) return;
      if (!mayHaveSight(unit, node.col, node.row, node.level)) return;
      var weapon = weaponOf(unit);
      var from = muzzleOf(unit, body);
      var distance = Combat.distanceMeters(combatWorld, from, body);
      if (distance > Math.max(weapon ? weapon.range : 0, ownWeapon ? ownWeapon.range : 0)) return;
      var line = Combat.trace(combatWorld, from, body, distance, unit);
      if (line.kind !== 'none' && !(line.kind === 'unit' && line.unit === alien)) return;
      if (weapon && distance <= weapon.range) { seen++; if (unit.kind === 'mech') seenByMech++; if (intelRating(unit) === 'hard') seenByHard++; }
      if (ownWeapon && distance <= ownWeapon.range) shootable.push({ unit: unit, distance: distance });
    });
    return { seen: seen, seenByMech: seenByMech, seenByHard: seenByHard, shootable: shootable };
  }
  // укрытие: стены и препятствия на гранях клетки со стороны ближайшего бойца
  function coverAt(node, mover) {
    var nearest = null, best = Infinity;
    units.forEach(function (unit) {
      if (mover ? !isEnemyOf(mover, unit) : unit.side !== 'squad') return;
      var distance = Math.abs(unit.x - node.col - 0.5) + Math.abs(unit.y - node.row - 0.5);
      if (distance < best) { best = distance; nearest = unit; }
    });
    if (!nearest) return 0;
    var towardCol = nearest.x - node.col - 0.5, towardRow = nearest.y - node.row - 0.5;
    var length = Math.sqrt(towardCol * towardCol + towardRow * towardRow) || 1;
    var cover = 0;
    [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (direction) {
      if ((direction[0] * towardCol + direction[1] * towardRow) / length < 0.35) return;
      var col = node.col + direction[0], row = node.row + direction[1];
      if (!edgeOpen(node.col, node.row, col, row, node.level) || cellBlocked(col, row, node.level)) cover++;
    });
    return cover;
  }
  // ожидаемый урон по цели: шанс × (урон оружия − броня цели); раненые и без брони — приоритетнее
  function targetValue(alien, target, mode) {
    var weapon = weaponOf(alien), chance = Combat.hitChance(alien, mode, target.distance, target.unit) / 100;
    var damage = Math.max(4, weapon.damage - (target.unit.armor || 0));
    return chance * damage * (1.6 - 0.6 * target.unit.health / target.unit.maxHealth);
  }
  // Раненый пришелец (здоровье меньше WOUNDED_SHARE) ведёт себя по цели задания:
  //   цель — уничтожить всех пришельцев (нет MAP.mission или его kind не 'rescue'): прячется — уходит туда, где его
  //     не видят, и сидит тихо, оставляя ОД на ответный огонь (засада: стреляет по тем, кто вышел на него в ход
  //     отряда); в свой ход стреляет, только если его нашли — его клетку видит хоть один боец; потом снова прячется;
  //   цель другая (спасение): пока пришельцев на карте много (WOUNDED_RETREAT_ALIVE и больше) и среди них есть
  //     здоровые, раненый отходит в тыл — подальше от отряда, в укрытие, не стреляя (охрана — в пределах своего поста);
  //     если пришельцев осталось мало или здоровых не осталось ни одного, раненые мешают отряду выполнить задание,
  //     как здоровые, несмотря на ранения.
  var WOUNDED_SHARE = 0.5, WOUNDED_RETREAT_ALIVE = 3;
  function killAllMission() { return !MISSION || MISSION.kind !== 'rescue'; }
  function woundedMode(alien) {
    if (alien.health >= alien.maxHealth * WOUNDED_SHARE) return null;
    if (killAllMission()) return 'ambush';
    var alive = units.filter(function (unit) { return unit.side === 'aliens' && !unit.dead; });
    var healthy = alive.some(function (unit) { return unit.health >= unit.maxHealth * WOUNDED_SHARE; });
    return alive.length >= WOUNDED_RETREAT_ALIVE && healthy ? 'retreat' : null;
  }
  // Решение пришельца на текущий момент: { fire } | { move } | null — ход закончен.
  // 1. Ранен — прячется (засада) или отходит в тыл, см. woundedMode.
  // 2. Видит цель — стреляет (выгоднейшая цель, прицельно, если после выстрела хватит ОД уйти в укрытие),
  //    после выстрелов уходит из-под огня, если может.
  // 3. Не видит — выбирает клетку: позицию для стрельбы (видно немногим, есть укрытие, 4–10 клеток до бойца)
  //    или подход скрытно (не видно никому, ближе к отряду по пути). Остаток ОД — на ответный огонь.
  function aiDecide(alien) {
    var weapon = weaponOf(alien);
    if (!weapon) return null;
    var modes = weapon.modes, snapIndex = 0;
    modes.forEach(function (mode, index) { if (mode.cost < modes[snapIndex].cost) snapIndex = index; });
    var wounded = woundedMode(alien), hurt = !!wounded;
    var reach = reachable(alien, alien.timeUnits);
    var here = nodeKey(alien.col, alien.row, alien.level);
    var cache = {};
    var info = function (key) {
      if (!cache[key]) { var node = keyNode(key); var exposure = exposureAt(alien, node); cache[key] = { key: key, node: node, seen: exposure.seen, seenByMech: exposure.seenByMech, seenByHard: exposure.seenByHard, shootable: exposure.shootable, cover: coverAt(node), cost: reach.cost[key] || 0 }; }
      return cache[key];
    };
    var tactic = alienTactic(alien);
    var stepsTo = tactic && tactic.field ? function (key) { return stepsIn(tactic.field, key); } : fieldSteps;
    // ближайшая по ОД клетка, где пришельца никто не видит (охрана — в пределах поста)
    var hideSpot = function (budget) {
      var keys = reach.keys.filter(function (key) { return key !== here && reach.cost[key] <= budget && (!tactic || tactic.kind !== 'guard' || stepsTo(key) <= tactic.radius + 1); })
        .sort(function (first, second) { return reach.cost[first] - reach.cost[second]; });
      for (var index = 0; index < keys.length && index < 90; index++) { var item = info(keys[index]); if (item.seen === 0) return item; }
      return null;
    };
    var moveTo = function (item, reason) { return item && item.key !== here ? { move: reach.path(item.key), reason: reason } : null; };

    // засада: в свой ход стреляет, только если его нашли (клетку видит боец); не нашли и не видно — сидит, ждёт
    var found = wounded === 'ambush' && info(here).seen > 0;
    if (wounded === 'ambush' && !found) return null;
    var targets = alien.ammo > 0 && (!hurt || found) ? visibleTargets(alien) : [];
    // вышел один робот: стреляют только из-за укрытия, иначе уходят в укрытие
    if (tactic && tactic.kind === 'hide' && coverAt(keyNode(here)) < 1) targets = [];
    // вышли бойцы: по роботу не стреляют — уходят из его обзора и ищут бойцов
    if (tactic && tactic.kind === 'assault') targets = targets.filter(function (target) { return target.unit.kind !== 'mech'; });
    // охрана банка: по роботу не стреляет никогда; после тревоги — сначала уйти из его обзора, стрелять только оттуда
    var shunMech = avoidsMech(alien), mechAlarmed = shunMech && alien.post.mechAlarm;
    if (shunMech) targets = targets.filter(function (target) { return target.unit.kind !== 'mech'; });
    if (mechAlarmed && info(here).seenByMech > 0) {
      targets = [];
      var limit = tactic.radius + MECH_RETREAT_EXTRA, away = null;
      reach.keys.filter(function (key) { return key !== here && stepsTo(key) <= limit; })
        .sort(function (first, second) { return reach.cost[first] - reach.cost[second]; }).slice(0, 120)
        .forEach(function (key) {
          var item = info(key);
          if (item.seenByMech > 0) return;
          var value = item.cover * 6 - item.seen * 10 - item.cost * 0.1;
          if (!away || value > away.value) away = { item: item, value: value };
        });
      if (away) return moveTo(away.item, 'отход от робота');
    }
    // память: трудную цель — только группой; без группы по ней не стреляют (остаётся ответный огонь из засады)
    var hardNear = hardEnemies(alien);
    targets = targets.filter(function (target) { return intelRating(target.unit) !== 'hard' || groupReady(target.unit); });
    if (targets.length) {
      var best = null;
      targets.forEach(function (target) {
        // вышли бойцы: робота стараются не трогать — бьют по бойцам
        var rating = intelRating(target.unit);
        var value = targetValue(alien, target, modes[0]) * (tactic && tactic.kind === 'assault' && target.unit.kind === 'mech' ? 0.15 : 1) *
          (rating === 'easy' ? 1.6 : rating === 'hard' ? 0.3 : 1);
        if (!best || value > best.value) best = { target: target, value: value };
      });
      var turn = turnCostTo(alien, best.target.point);
      var hide = hideSpot(alien.timeUnits);
      var reserve = hide ? hide.cost : 0;
      var choice = null;
      if (alien.timeUnits - modes[0].cost - turn >= reserve) choice = 0;
      else if (alien.timeUnits - modes[snapIndex].cost - turn >= reserve) choice = snapIndex;
      else if (!alien.aiShots && alien.timeUnits >= modes[snapIndex].cost + turn) choice = snapIndex;   // хотя бы один выстрел
      if (choice !== null) return { fire: { unit: best.target.unit, point: best.target.point }, mode: choice };
      if (hide) return moveTo(hide, 'укрытие');
      return null;
    }
    if (alien.aiMoves >= 3) return null;

    // оценка клеток: сначала грубо по пути и укрытию, видимость — только у лучших (трассировка дорогая)
    var currentSteps = stepsTo(here);
    var rough = reach.keys.map(function (key) {
      var node = keyNode(key), steps = stepsTo(key), score;
      // раненый: подальше от отряда (поле путей от бойцов), охрана — в пределах поста
      if (hurt) score = fieldSteps(key) - (tactic && tactic.kind === 'guard' ? Math.max(0, steps - tactic.radius) * 4 : 0);
      else if (tactic && tactic.kind === 'guard') score = -Math.max(0, steps - tactic.radius) * 3 + coverAt(node) * 2;
      else if (tactic && tactic.kind === 'hide') score = coverAt(node) * 3 - Math.max(0, 10 - steps) * 2 - Math.max(0, currentSteps - steps) * 1.5;
      else score = -Math.abs(steps - 7) * 1.2 - Math.max(0, steps - currentSteps) * 2 + coverAt(node) * 2 - (tactic && tactic.kind === 'assault' ? Math.max(0, 6 - mechDistance(node)) * 3 : 0);
      return { key: key, score: score - reach.cost[key] * 0.02 };
    }).sort(function (first, second) { return second.score - first.score; });
    var candidates = rough.slice(0, 140).map(function (entry) { return entry.key; });
    if (candidates.indexOf(here) < 0) candidates.push(here);
    var choiceItem = null, choiceScore = -Infinity;
    candidates.forEach(function (key) {
      var item = info(key), steps = stepsTo(key), left = alien.timeUnits - item.cost, score;
      // трудные цели без группы в счёт не идут: позиция «для стрельбы» по ним не нужна
      var usable = hardNear.list.length ? item.shootable.filter(function (target) { return intelRating(target.unit) !== 'hard' || groupReady(target.unit); }) : item.shootable;
      var canShoot = usable.length > 0 && left >= modes[snapIndex].cost + 2;
      if (hurt) {
        score = (item.seen === 0 ? 60 : -40 * item.seen) + fieldSteps(key) * 1.5 + item.cover * 4
          - (tactic && tactic.kind === 'guard' ? Math.max(0, steps - tactic.radius) * 8 : 0);
      } else if (tactic && tactic.kind === 'guard') {
        // оборона поста: клетка с укрытием в радиусе поста, откуда можно стрелять; за пределы поста — не уходит
        var guardRadius = mechAlarmed ? tactic.radius + MECH_RETREAT_EXTRA : tactic.radius;
        if (shunMech) canShoot = item.shootable.some(function (target) { return target.unit.kind !== 'mech'; }) && left >= modes[snapIndex].cost + 2;
        score = (canShoot ? 40 + item.cover * 12 - 20 * Math.max(0, item.seen - 1) : item.seen === 0 ? 15 + item.cover * 6 : 4 - 25 * item.seen)
          - Math.max(0, steps - guardRadius) * 8 - (hardNear.cautious ? item.seenByHard * 30 : 0)
          - (mechAlarmed ? item.seenByMech * 90 : 0);
      } else if (tactic && tactic.kind === 'hide') {
        // против одного робота: не видно, есть укрытие, не ближе 10 клеток; стрелять — только из хорошего укрытия
        // к роботу не приближаются: каждая клетка ближе к нему — минус
        score = (item.seen === 0 ? 50 + item.cover * 8 : -60 * item.seen) - Math.max(0, 10 - fieldSteps(key)) * 4 - Math.max(0, currentSteps - steps) * 3;
        if (canShoot && item.cover >= 2 && item.seen <= 1) score = Math.max(score, 30 + item.cover * 10);
        if (key === here && item.seen === 0 && item.cover >= 1) score += 12;      // уже в укрытии и не видно — остаётся
      } else {
        var firing = canShoot ? 45 - 22 * Math.max(0, item.seen - 1) + item.cover * 12 - Math.abs(steps - 7) * 1.5 + left * 0.25 : -Infinity;
        var sneaking = item.seen === 0 ? 20 + item.cover * 6 - steps * 2.2 : 5 - 30 * item.seen - steps * 2;
        score = Math.max(firing, sneaking);
        // вышли бойцы: держатся вне обзора робота и не ближе 6 клеток к нему
        if (tactic && tactic.kind === 'assault') score -= item.seenByMech * 30 + Math.max(0, 6 - mechDistance(item.node)) * 6;
        // трудные цели без группы: осторожно — вне их обзора, не ближе 8 клеток, в укрытии
        if (hardNear.cautious) score -= item.seenByHard * 35 + Math.max(0, 8 - hardDistance(item.node, hardNear.list)) * 6 - item.cover * 4;
      }
      if (key === here) score += 1;                    // при равенстве — остаться
      if (score > choiceScore) { choiceScore = score; choiceItem = item; }
    });
    return moveTo(choiceItem, hurt ? (wounded === 'ambush' ? 'прячется' : 'отход') : choiceItem && choiceItem.shootable.length ? 'позиция' : 'подход');
  }
  // ---------------- персонал базы под ИИ ----------------
  // Действует после хода отряда, до пришельцев. Не рискует: стреляет (одиночным, прицельным — если хватает ОД),
  // только если после выстрела остаётся на отход в укрытие и ещё треть ОД — на ответный огонь; не больше двух выстрелов
  // за ход; после стрельбы уходит туда, где его не видит ни один замеченный пришелец. Ранен — сразу в укрытие.
  // Если врагов не видно и его самого не видно — стоит на месте (не идёт навстречу).
  function staffDecide(unit) {
    var weapon = weaponOf(unit);
    var here = nodeKey(unit.col, unit.row, unit.level);
    var reach = reachable(unit, unit.timeUnits);
    var cache = {};
    var info = function (key) {
      if (!cache[key]) { var node = keyNode(key); var exposure = exposureAt(unit, node); cache[key] = { key: key, node: node, seen: exposure.seen, cover: coverAt(node, unit), cost: reach.cost[key] || 0 }; }
      return cache[key];
    };
    // ближайшая клетка, где никто из замеченных пришельцев не видит; при равной цене — с укрытием
    var hideSpot = function (budget) {
      var keys = reach.keys.filter(function (key) { return reach.cost[key] <= budget; }).sort(function (first, second) { return reach.cost[first] - reach.cost[second]; });
      var best = null;
      for (var index = 0; index < keys.length && index < 120; index++) {
        var item = info(keys[index]);
        if (item.seen > 0) continue;
        if (!best) best = item;
        else if (item.cost <= best.cost + COST.step && item.cover > best.cover) best = item;
        else if (item.cost > best.cost + COST.step) break;
      }
      return best;
    };
    var moveTo = function (item) { return item && item.key !== here ? { move: reach.path(item.key) } : null; };
    var exposed = info(here).seen > 0;
    var hurt = unit.health < unit.maxHealth * 0.5;
    var reserveFire = Math.ceil(unit.maxTimeUnits / 3);
    if (hurt) return exposed ? moveTo(hideSpot(unit.timeUnits)) : null;
    if (weapon && unit.ammo <= 0 && unit.reserve > 0 && !unit.aiReloaded && unit.timeUnits >= COST.reload + 8) return { reload: true };
    var targets = weapon && unit.ammo > 0 && (unit.aiShots || 0) < 2 ? visibleTargets(unit) : [];
    if (targets.length) {
      var best = null;
      targets.forEach(function (target) {
        var value = targetValue(unit, target, weapon.modes[0]);
        if (!best || value > best.value) best = { target: target, value: value };
      });
      var turnCost = turnCostTo(unit, best.target.point);
      var hide = hideSpot(unit.timeUnits);
      var reserve = (hide ? hide.cost : 0) + reserveFire;
      // режимы: прицельный, затем одиночный
      var choice = null;
      [0, 1].forEach(function (index) {
        if (choice === null && weapon.modes[index] && unit.timeUnits - weapon.modes[index].cost - turnCost >= reserve) choice = index;
      });
      if (choice !== null) return { fire: { unit: best.target.unit, point: best.target.point }, mode: choice };
    }
    if (exposed) return moveTo(hideSpot(unit.timeUnits));
    return null;
  }
  var staffQueue = [], staffWaitUntil = 0;
  function startStaffPhase() {
    staffQueue = combat ? units.filter(function (unit) { return unit.ai && !unit.dead && unit.manualTurn !== turn; }) : [];
    if (!staffQueue.length) { startAlienPhase(); return; }
    phase = 'staff';
    setPhaseLabel();
    staffQueue.forEach(function (unit) { unit.aiShots = 0; unit.aiMoves = 0; unit.aiReloaded = false; });
    staffWaitUntil = performance.now() + 300;
    say(staffQueue.every(function (unit) { return unit.police; }) ? 'Полиция' : 'Персонал базы');
  }
  function updateStaffAI(now) {
    if (phase !== 'staff' || mission.over || now < staffWaitUntil || shots.length || shotView) return;
    if (units.some(function (unit) { return unit.path.length > 0; })) return;
    while (staffQueue.length && (staffQueue[0].dead || units.indexOf(staffQueue[0]) < 0)) staffQueue.shift();
    var unit = staffQueue[0];
    if (!unit) { startAlienPhase(); return; }
    var speed = Settings.values.aiSpeed;
    var decision = unit.aiMoves < 3 ? staffDecide(unit) : null;
    if (decision && decision.reload) {
      unit.aiReloaded = true;
      reloadUnit(unit);
      staffWaitUntil = now + 250 / speed;
      return;
    }
    if (decision && decision.fire) {
      if (fire(unit, decision.fire, decision.mode)) unit.aiShots++;
      else unit.aiShots = 2;
      staffWaitUntil = now + 450 / speed;
      return;
    }
    if (decision && decision.move && decision.move.length) {
      unit.timeUnits -= pathCost(unit, decision.move);
      unit.path = decision.move;
      unit.aiMoves++;
      staffWaitUntil = now + 200 / speed;
      return;
    }
    staffQueue.shift();
    staffWaitUntil = now + 120 / speed;
  }

  // ---- показ выстрела пришельца в его ход (при настройке «Камера следит за пришельцами») ----
  // 1) камера на стрелявшем: видны поворот, вспышка у ствола и вылет пули;
  // 2) если место попадания не видно в этом кадре — камера переходит к нему; пули очереди долетают уже при новом кадре
  //    (их полёт для вида растягивается до момента перехода, на расчёт попадания это не влияет);
  // 3) после последней пули — пауза: на цифру урона, промах, а если боец убит — на всё падение;
  // 4) камера возвращается на стрелявшего, и он продолжает ход.
  // Если стрелок и цель видны в одном кадре, камера не двигается, остаётся только пауза из п. 3.
  var shotView = null;
  var SHOT_VIEW_MS = { shooter: 450, arrive: 250, hit: 900, miss: 600, afterFall: 700 };
  function startShotView(shooter, target) {
    if (!Settings.values.followAliens) return;
    var volley = shots.filter(function (shot) { return shot.shooter === shooter && !shot.result; });
    if (!volley.length) return;
    var speed = Settings.values.aiSpeed;
    var view = { shooter: shooter, target: target.unit || null, point: target.point, volley: volley, stage: 'shooter', hit: false, killed: null };
    var targetHeight = target.unit ? target.unit.height : 1;
    var targetFoot = target.unit ? { x: target.unit.x, y: target.unit.y, h: target.unit.elevation } : target.point;
    view.cut = !frameFor(targetFoot.x, targetFoot.y, targetFoot.h, targetHeight).inside;
    if (view.cut) {
      view.switchAt = volley[0].start + SHOT_VIEW_MS.shooter / speed;
      volley.forEach(function (shot, index) { shot.arriveNotBefore = view.switchAt + (SHOT_VIEW_MS.arrive + index * 120) / speed; });
    }
    volley.forEach(function (shot) { shot.view = view; });
    shotView = view;
  }
  // куда смотреть после выстрела: на цель, а если пуля остановилась на укрытии ближе цели — на место попадания
  function lookAtImpact(view) {
    var first = view.volley[0], target = view.target;
    var stoppedShort = false;
    if (first.result && first.result.kind !== 'unit' && target) {
      var shooterX = view.shooter.x, shooterY = view.shooter.y;
      var toImpact = Math.hypot(first.result.point.x - shooterX, first.result.point.y - shooterY);
      var toTarget = Math.hypot(target.x - shooterX, target.y - shooterY);
      stoppedShort = toImpact < toTarget - 1;
    }
    if (target && !stoppedShort) {
      centerOn(target.x, target.y, target.elevation + target.height / 2);
      var level = followLevel(target);
      setView(level, isIndoor(target.col, target.row, target.level) || isIndoor(target.col, target.row, level));
    } else {
      var point = first.result ? first.result.point : view.point;
      centerOn(point.x, point.y, point.h);
    }
  }
  function fallTime(unit) {
    var corpse = corpses.filter(function (item) { return item.x === unit.x && item.y === unit.y; }).pop();
    return corpse ? Math.max(0, (corpse.fallFrames - (corpse.fallSkip || 0)) * corpse.frameTime) : 0;
  }
  function updateShotView(now) {
    var view = shotView;
    if (!view) return;
    var speed = Settings.values.aiSpeed;
    if (view.stage === 'shooter') {
      if (view.cut && now < view.switchAt) return;
      if (view.cut) lookAtImpact(view);
      view.stage = 'impact';
    }
    if (view.stage === 'impact') {
      if (view.volley.some(function (shot) { return !shot.done; })) return;
      var hold = view.killed ? fallTime(view.killed) + SHOT_VIEW_MS.afterFall : view.hit ? SHOT_VIEW_MS.hit : SHOT_VIEW_MS.miss;
      view.until = now + hold / speed;
      view.stage = 'hold';
    }
    if (view.stage === 'hold' && now >= view.until) {
      shotView = null;
      if (view.cut && !view.shooter.dead && units.indexOf(view.shooter) >= 0) watchUnit(view.shooter);
      aiWaitUntil = Math.max(aiWaitUntil, now + 250 / speed);
    }
  }
  function updateAI(now) {
    if (phase !== 'aliens' || mission.over || now < aiWaitUntil || shots.length || shotView) return;
    if (units.some(function (unit) { return unit.path.length > 0; })) return;
    if (!combat) { finishAlienPhase(); return; }
    while (aiQueue.length && (aiQueue[0].dead || units.indexOf(aiQueue[0]) < 0)) aiQueue.shift();
    var alien = aiQueue[0];
    if (!alien) { finishAlienPhase(); return; }
    if (!approachField) buildApproachField();
    if (!rolesAssigned) assignAlienRoles();
    // купол снят или истёк — другой страж-элита у портала ставит свой (одноразовый), это действие на 20 ОД
    if (alien.elite && alien.domeCharges > 0 && !domes.length && portal && portal.open && alien.timeUnits >= 20 &&
        Math.max(Math.abs(alien.col - portal.col), Math.abs(alien.row - portal.row)) <= 6 && alien.level === portal.level) {
      alien.timeUnits -= 20; raiseDome(alien); watchUnit(alien);
      aiWaitUntil = now + 700 / Settings.values.aiSpeed;
      return;
    }
    var decision = aiDecide(alien);
    var firstAction = !alien.aiMoves && !alien.aiShots;
    if (decision && decision.fire) {
      if (!alien.aiShots && Math.random() < 0.7) sayAlien(alien, 'alert', now);
      watchUnit(alien);
      if (fire(alien, decision.fire, decision.mode)) startShotView(alien, decision.fire);
      alien.aiShots = (alien.aiShots || 0) + 1;
      aiWaitUntil = now + 450 / Settings.values.aiSpeed;
      return;
    }
    if (decision && decision.move && decision.move.length) {
      if (firstAction && !talk.queue.length && Math.random() < 0.45) sayAlien(alien, Math.random() < 0.6 ? 'reply' : 'grunt', now);
      alien.timeUnits -= pathCost(alien, decision.move);
      alien.path = decision.move;
      alien.aiMoves++;
      alien.aiLast = decision.reason;
      watchUnit(alien);
      aiWaitUntil = now + 200 / Settings.values.aiSpeed;
      return;
    }
    aiQueue.shift();
    aiWaitUntil = now + 350 / Settings.values.aiSpeed;
  }

  // кадр падения или лежащего тела
  var FALL_FRAMES = 6;
  function corpseFrame(corpse, now) {
    var frame = (corpse.fallSkip || 0) + Math.floor((now - corpse.fallStart) / corpse.frameTime);
    return frame < corpse.fallFrames ? frame : -1;
  }
  function corpseSprite(corpse, now) {
    var frame = corpseFrame(corpse, now);
    var direction = Iso.viewDirection(corpse.direction);
    if (frame >= 0) return corpse.set + '_fall_f' + frame + '_d' + direction;
    // оружие подобрали — тело без оружия рядом (кадр *_deadbare, если он есть у набора)
    if (corpseDepictsWeapon(corpse) === false) return corpse.set + '_deadbare_d' + direction;
    return corpse.set + '_dead_d' + direction;
  }
  // нарисовано ли оружие рядом с телом: true — да и оно лежит на клетке, false — у набора есть кадр без оружия,
  // а оружие с клетки забрали, null — у набора нет такого различия (персонал, гражданские: оружие рисуется значком)
  function corpseDepictsWeapon(corpse) {
    if (!corpse.weapon || !SPRITE_ANCHORS[corpse.set + '_deadbare_d0']) return null;
    return groundAt(corpse.col, corpse.row, corpse.level).some(function (entry) { return entry.item === corpse.weapon; });
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
      var name = drawableSprite(corpseSprite(corpse, now)) || corpseSprite(corpse, now);
      var image = images[name], anchor = SPRITE_ANCHORS[name];
      var foot = Iso.toScreen(corpse.x, corpse.y, corpse.elevation);
      var rect = image && image.naturalWidth ? { x: Math.round(foot.x - anchor[0]), y: Math.round(foot.y - anchor[1]), width: image.naturalWidth, height: image.naturalHeight }
        : { x: foot.x - 40, y: foot.y - 30, width: 80, height: 40 };
      var standing = corpse.wreck || corpseFrame(corpse, now) >= 0;
      var depth = standing ? footprintDepth(corpse.col, corpse.row, corpse.level, 3.5, corpse.size) : footprintDepth(corpse.col, corpse.row, corpse.level, 1.3, corpse.size);
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
        Sound.play('spark', screenDistance(corpse));
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
      // рисуется от дула на спрайте (drawFrom), линия огня — от shot.from
      var from = shot.drawFrom || shot.from;
      var length = Combat.distanceMeters(combatWorld, from, shot.result.point) || 1;
      var tail = Math.max(0, progress - (shot.weapon.projectile === 'plasma' ? 0.6 : shot.weapon.projectile === 'shell' ? 2.4 : 1.6) / length);
      var head = screenOf(lerpPoint(from, shot.result.point, progress)), back = screenOf(lerpPoint(from, shot.result.point, tail));
      if (now - shot.start < 70) {                      // вспышка у ствола
        var muzzle = screenOf(from);
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
        if (!Settings.values.damageNumbers) return;
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
    var name = drawableSprite(spriteName(unit)) || spriteName(unit), image = images[name], anchor = SPRITE_ANCHORS[name];
    var foot = Iso.toScreen(position.x, position.y, position.elevation);
    if (!image || !anchor || !image.naturalWidth) return { x: foot.x - unit.pickWidth, y: foot.y - unit.height * Iso.pixelsPerMeterUp, width: unit.pickWidth * 2, height: unit.height * Iso.pixelsPerMeterUp };
    return { x: Math.round(foot.x - anchor[0]), y: Math.round(foot.y - anchor[1]), width: image.naturalWidth, height: image.naturalHeight };
  }

  // юнит под курсором: по прямоугольнику фигуры, ближний к зрителю важнее.
  // preferEnemy: если под курсором есть пришелец, выбирается он (рамка робота K7 большая и накрывает соседей)
  function unitUnderMouse(preferEnemy) {
    var best = null;
    units.forEach(function (unit) {
      if (unit.level > view.level || !isSeen(unit)) return;
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
    mouse.x = event.clientX / zoom; mouse.y = event.clientY / zoom; mouse.overView = true;
    if (ARRIVAL && event.button === 0) return;                // финальный кадр демо: только осмотр
    if (event.button === 2 && event.shiftKey && phase === 'squad' && !aiming && !throwing) {
      boxSelect = { startX: mouse.x, startY: mouse.y };       // Shift+ПКМ: рамка выделения группы
      return;
    }
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
      if (target.unit && target.unit.side === 'aliens') aimTarget = target.unit;          // панель остаётся на бойце
      fire(selected, target, selected.fireMode);
      updateHover();
      return;
    }
    // юнит выбирается только по клетке, на которой он стоит (не по фигуре: она заходит на соседние клетки)
    var tile = tileUnderMouse();
    var clickedUnit = tile ? unitAt(tile.col, tile.row, tile.level) : null;
    if (clickedUnit) {
      if (clickedUnit.side === 'squad') selectUnit(clickedUnit, false);
      else {
        // щелчок по врагу — взять в прицел (панель и камера остаются на бойце);
        // Ctrl+щелчок или боец без оружия — показать пришельца на панели (настройка «Просмотр пришельцев»)
        if (!event.ctrlKey && selected && weaponOf(selected) && !busy()) { aiming = true; aimTarget = clickedUnit; }
        else inspect(clickedUnit);
        updateHover();
      }
      return;
    }
    if (group.length > 1) moveGroupTo(tile); else moveSelectedTo(tile);
    updateHover();
  });
  window.addEventListener('mousemove', function (event) {
    mouse.x = event.clientX / zoom; mouse.y = event.clientY / zoom;          // в пикселях карты
    mouse.overView = event.target === canvas;
    if (mouse.dragging) {
      if (Math.abs(event.clientX - mouse.dragStartX) + Math.abs(event.clientY - mouse.dragStartY) > 3) mouse.moved = true;
      camera.x = mouse.cameraStartX - (event.clientX - mouse.dragStartX) / zoom;
      camera.y = mouse.cameraStartY - (event.clientY - mouse.dragStartY) / zoom;
      clampCamera();
    }
    updateHover();
  });
  window.addEventListener('mouseup', function (event) {
    if (boxSelect && event.button === 2) { finishBoxSelect(); return; }
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
    if (ARRIVAL) return;                                        // финальный кадр демо: только прокрутка камеры
    if (event.key === 'i' || event.key === 'I' || event.key === 'ш' || event.key === 'Ш') { openInventory(); if (window.Inventory && Inventory.isOpen()) event.stopImmediatePropagation(); return; }
    if (event.key === 'Escape') { if (window.Panel && Panel.closeMenu()) return; if (throwing) { throwing = null; updateHover(); } else if (aiming) cancelAim(); else selectUnit(null); }
    if (event.key === 'g' || event.key === 'G' || event.key === 'п' || event.key === 'П') Settings.set('showGrid', !showGrid);
    if (event.key === 'PageUp' || event.key === 'e' || event.key === 'E' || event.key === 'у' || event.key === 'У') { event.preventDefault(); setView(view.level + 1, view.cut); }
    if (event.key === 'PageDown' || event.key === 'q' || event.key === 'Q' || event.key === 'й' || event.key === 'Й') { event.preventDefault(); setView(view.level - 1, view.cut); }
    if (event.key === 'h' || event.key === 'H' || event.key === 'р' || event.key === 'Р') setView(view.level, !view.cut);
    if (event.code === 'Comma') rotateView(-1);
    if (event.code === 'Period') rotateView(1);
    if (event.key === 't' || event.key === 'T' || event.key === 'е' || event.key === 'Е') setCombat(!combat);
    if (event.key === 'c' || event.key === 'C' || event.key === 'с' || event.key === 'С') focusSelected();
    if (event.key === 'x' || event.key === 'X' || event.key === 'ч' || event.key === 'Ч') requestEvacuation();
    if (event.key === ' ' || event.key === 'Tab') { event.preventDefault(); selectNext(); }
    if (ACTION_KEYS[event.key]) Game.action(ACTION_KEYS[event.key]);
    if (window.Inventory && Inventory.isOpen()) event.stopImmediatePropagation();   // клавиша открыла окно — оно её не получает
  });
  window.addEventListener('keyup', function (event) { keys[event.key] = false; });

  // ---------------- движение ----------------
  // шаги: звук на каждой постановке ноги — дважды за цикл ходьбы (у K7 — тяжёлая стопа)
  function footstep(unit, meters) {
    var stepMeters = unit.frameMeters * WALK_FRAMES / 2;
    var before = Math.floor(unit.stepDistance / stepMeters || 0);
    unit.stepDistance = (unit.stepDistance || 0) + meters;
    if (Math.floor(unit.stepDistance / stepMeters) !== before) footstepSound(unit, unit.kind === 'mech' ? 'stepMech' : unit.kind === 'alien' ? 'stepAlien' : 'stepSoldier');
  }
  function footstepSound(unit, kind) {
    if (unit.level > view.level + 1) return;          // на скрытых верхних этажах не слышно
    if (!isSeen(unit)) return;                         // пришелец в тумане войны — шагов не слышно
    var distance = screenDistance(unit);
    if (distance < 30) Sound.play(kind, distance);
  }
  // ход пришельцев: идущий пришелец ушёл за край кадра — камера снова ставит его в центр (и на его уровень)
  function followMovingAlien(unit) {
    if (phase !== 'aliens' || unit.side !== 'aliens' || !Settings.values.followAliens || shotView || !isSeen(unit)) return;
    if (!frameFor(unit.x, unit.y, unit.elevation, unit.height || 2).inside) watchUnit(unit);
  }
  // кто занимает площадку юнита в следующей клетке (у K7 — 2x2)
  function footprintBlocker(unit, next) {
    for (var deltaRow = 0; deltaRow < unit.size; deltaRow++) for (var deltaCol = 0; deltaCol < unit.size; deltaCol++) {
      var other = unitAt(next.col + deltaCol, next.row + deltaRow, next.level, unit);
      if (other) return other;
    }
    return null;
  }
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
      var climb = CLIMB_SPEED * Settings.values.moveSpeed * seconds;
      // перекладина каждые 0,3 м
      if (Math.floor(unit.elevation / 0.3) !== Math.floor((unit.elevation + (next.elevation > unit.elevation ? climb : -climb)) / 0.3)) footstepSound(unit, 'ladder');
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
    // перед входом в новую клетку проверить, что она свободна; если её занимает идущий свой — подождать (BLOCK_WAIT),
    // иначе остановиться и вернуть ОД за непройденные шаги
    var blocker = (unit.col !== next.col || unit.row !== next.row || unit.level !== next.level) ? footprintBlocker(unit, next) : null;
    if (blocker) {
      if (blocker.path.length && blocker.side === unit.side && (unit.waited || 0) < BLOCK_WAIT) { unit.waited = (unit.waited || 0) + seconds; return; }
      if (unit.side === 'squad') unit.path.forEach(function (step) { unit.timeUnits += step.cost || 0; });
      unit.path = []; unit.segmentLength = 0; unit.walked = 0; unit.waited = 0; unit.x = unit.col + unit.size / 2; unit.y = unit.row + unit.size / 2;
      unit.elevation = elevationOf(unit.col, unit.row, unit.level);
      return;
    }
    unit.waited = 0;
    var targetX = next.col + unit.size / 2, targetY = next.row + unit.size / 2;
    var deltaX = targetX - unit.x, deltaY = targetY - unit.y;
    var distanceTiles = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    // шаг через ворота или двойную дверь: ждать, пока створка поднимется
    if (unit.segmentLength === 0 && next.level === unit.level) {
      var closed = gatesOnStep(unit, next.col, next.row).filter(function (gateIndex) { gates[gateIndex].requested = true; return gates[gateIndex].open < 0.9; });
      if (closed.length) return;
    }
    if (unit.segmentLength === 0) {
      // начало шага в следующую клетку: направление и длина считаются один раз
      unit.segmentLength = Math.max(distanceTiles, 1e-6);
      unit.moveCol = distanceTiles ? deltaX / distanceTiles : 0;
      unit.moveRow = distanceTiles ? deltaY / distanceTiles : 0;
      unit.stepFrom = unit.elevation;
      var direction = Iso.directionOf(deltaX, deltaY);
      if (direction >= 0) unit.direction = direction;
    }
    var stepTiles = unit.speed * Settings.values.moveSpeed * seconds / Iso.tileMeters * (isSeen(unit) ? 1 : 4);
    footstep(unit, stepTiles * Iso.tileMeters);
    followMovingAlien(unit);
    if (distanceTiles <= stepTiles) {
      unit.x = targetX; unit.y = targetY;
      unit.walked += distanceTiles * Iso.tileMeters;
      unit.col = next.col; unit.row = next.row; unit.level = next.level;
      unit.elevation = next.elevation;
      unit.path.shift();
      unit.segmentLength = 0;
      if (!unit.path.length) { unit.walked = 0; if (unit === selected) viewFollow(unit); }
      rescueNear(unit);
      if (ownPhase(unit)) reactionCheck(unit);
      if (unit.path.length) sightCheck(unit);
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
    var name = unit.spriteSet + '_climb_f0_d' + Iso.viewDirection(unit.direction);
    if (!SPRITE_ANCHORS[name]) return null;
    var height = unit.elevation - climb.base;
    var cycles = Math.floor(height / CLIMB_STEP + 1e-6);
    var frame = Math.min(CLIMB_FRAMES - 1, Math.floor((height - cycles * CLIMB_STEP) / (CLIMB_STEP / CLIMB_FRAMES) + 1e-6));
    return { climb: climb, frame: frame, base: climb.base + cycles * CLIMB_STEP };
  }

  function spriteName(unit) {
    var climbing = climbState(unit);
    if (climbing) return unit.spriteSet + '_climb_f' + climbing.frame + '_d' + Iso.viewDirection(unit.direction);
    var moving = unit.path.length && !unit.path[0].climb;
    if (moving) {
      var frame = Math.floor(unit.walked / unit.frameMeters) % WALK_FRAMES;
      // мирная обстановка: персонал идёт без оружия (кадры *_ewalk, шаг тот же)
      var gait = !combat && SPRITE_ANCHORS[unit.spriteSet + '_ewalk_f0_d0'] ? '_ewalk_f' : '_walk_f';
      return unit.spriteSet + gait + frame + '_d' + Iso.viewDirection(unit.direction);
    }
    // гражданский присел — испуганная поза (руки на голове)
    if (unit.kneeling && SPRITE_ANCHORS[unit.spriteSet + '_cower_d0']) return unit.spriteSet + '_cower_d' + Iso.viewDirection(unit.direction);
    if (unit.kneeling) return unit.spriteSet + '_kneelAim_d' + Iso.viewDirection(unit.direction);
    if (isAiming(unit) && SPRITE_ANCHORS[unit.spriteSet + '_standAim_d0']) return unit.spriteSet + '_standAim_d' + Iso.viewDirection(unit.direction);
    if (atEase(unit)) return unit.spriteSet + '_ease_d' + Iso.viewDirection(unit.direction);
    return unit.spriteSet + '_idle_d' + Iso.viewDirection(unit.direction);
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
    return footprintDepth(unit.col, unit.row, unit.level, 3.5, unit.size);
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
      var parts = key.split(':'), level = Number(parts[0]), col = Number(parts[1]), row = Number(parts[2]);
      // на клетке с телом не показываем оружие, нарисованное в спрайте тела; остальное — значками
      var depicted = corpses.filter(function (corpse) { return corpse.level === level && corpse.col === col && corpse.row === row && corpseDepictsWeapon(corpse); })
        .map(function (corpse) { return corpse.weapon; });
      var list = groundItems[key].filter(function (entry) { return depicted.indexOf(entry.item) < 0; });
      if (!list.length || level > view.level) return;
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
    var hover = hoverStyle();
    if (hover) {
      var hoverCorners = Iso.tileCorners(hover.tile.col, hover.tile.row, elevationOf(hover.tile.col, hover.tile.row, hover.tile.level), hover.size);
      items.push({ depth: depthKey(hover.tile.col, hover.tile.row, hover.tile.level, 1.4), rect: quadRect(hoverCorners, 4), draw: function () {
        quadPath(hoverCorners);
        context.fillStyle = hover.color.replace(/[\d.]+\)$/, hover.kind === 'tile' ? '0.22)' : '0.2)'); context.fill();
        context.strokeStyle = hover.color; context.lineWidth = hover.kind === 'tile' ? 2 : 3; context.stroke();
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
  // стиль рамки курсора по тому, что под ней
  function hoverStyle() {
    if (!hoverTile) return null;
    var unit = unitAt(hoverTile.col, hoverTile.row, hoverTile.level);
    if (unit && unit.side === 'squad') return { tile: { col: unit.col, row: unit.row, level: unit.level }, size: unit.size, color: 'rgba(255, 214, 58, 0.98)', width: 3.2, kind: 'own' };
    if (unit && unit.side === 'aliens') return { tile: { col: unit.col, row: unit.row, level: unit.level }, size: unit.size, color: 'rgba(255, 140, 36, 0.98)', width: 3.2, kind: 'enemy', unit: unit };
    var reachable = busy() || (hoverPath && hoverAffordable > 0);
    return { tile: hoverTile, size: selected ? selected.size : 1, color: reachable ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 90, 70, 0.9)', width: 1.4, kind: 'tile' };
  }
  // значок прицела над врагом под курсором
  function drawEnemyHover(style) {
    if (!style || style.kind !== 'enemy') return;
    var foot = Iso.toScreen(style.unit.x, style.unit.y, style.unit.elevation);
    var x = foot.x - camera.x, y = foot.y - camera.y - Math.max(style.unit.height, BOX_HEIGHT) * Iso.pixelsPerMeterUp - 26;
    context.save();
    context.strokeStyle = 'rgba(255, 140, 36, 0.98)'; context.lineWidth = 2.4;
    context.shadowColor = 'rgba(0, 0, 0, 0.7)'; context.shadowBlur = 3;
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI * 2);
    context.moveTo(x - 16, y); context.lineTo(x - 5, y); context.moveTo(x + 5, y); context.lineTo(x + 16, y);
    context.moveTo(x, y - 16); context.lineTo(x, y - 5); context.moveTo(x, y + 5); context.lineTo(x, y + 16);
    context.stroke();
    context.restore();
  }
  function drawBox(tile, color, part, size, width) {
    size = size || 1;
    var base = elevationOf(tile.col, tile.row, tile.level);
    var height = size > 1 ? BOX_HEIGHT * 2 : BOX_HEIGHT;
    var bottom = Iso.tileCorners(tile.col, tile.row, base, size), top = Iso.tileCorners(tile.col, tile.row, base + height, size);
    context.save();
    context.lineWidth = width || 1.6;
    context.strokeStyle = color;
    context.lineCap = 'round';
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

  // Ошибка в одном элементе не должна обрывать кадр: иначе не рисуется всё, что идёт после него по глубине.
  // В консоль — один раз на каждое новое сообщение.
  var drawErrors = {};
  function safeDraw(item) {
    try { item.draw(); } catch (error) {
      var message = String(error && error.message || error);
      if (!drawErrors[message]) { drawErrors[message] = true; console.error('Ошибка отрисовки:', error); }
    }
  }
  // unit — юнит, которому принадлежит кадр: если не загружен ни кадр, ни запасная стойка, рисуется силуэт-заглушка
  function drawSprite(name, col, row, elevation, unit) {
    var foot = Iso.toScreen(col, row, elevation || 0);
    var drawable = drawableSprite(name);
    if (!drawable) { if (unit) drawPlaceholder(unit, foot); return; }
    var anchor = SPRITE_ANCHORS[drawable];
    context.drawImage(images[drawable], Math.round(foot.x - camera.x - anchor[0]), Math.round(foot.y - camera.y - anchor[1]));
  }
  // заглушка, пока графика юнита грузится: тень на земле и полупрозрачный силуэт в цвет стороны
  function drawPlaceholder(unit, foot) {
    var x = foot.x - camera.x, y = foot.y - camera.y;
    var height = unit.height * Iso.pixelsPerMeterUp, width = Math.max(14, (unit.pickWidth || 12) * 1.1);
    context.save();
    context.fillStyle = 'rgba(0, 0, 0, 0.35)';
    context.beginPath(); context.ellipse(x, y, width * 0.75, width * 0.36, 0, 0, Math.PI * 2); context.fill();
    context.fillStyle = 'rgba(14, 20, 22, 0.6)';
    context.strokeStyle = unit.side === 'aliens' ? '#e0673e' : '#9bd88f';
    context.lineWidth = 1.5;
    var radius = width / 2;
    context.beginPath();
    context.moveTo(x - radius, y - 2);
    context.lineTo(x - radius, y - height + radius);
    context.arc(x, y - height + radius, radius, Math.PI, 0);
    context.lineTo(x + radius, y - 2);
    context.closePath();
    context.fill(); context.stroke();
    context.restore();
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

  // маркер над выбранным; у остальных членов группы — меньше и бледнее; рамка выделения группы — поверх
  function drawSelectionMarkers() {
    group.forEach(function (unit) { if (unit !== selected && !unit.dead && unit.level <= view.level) drawSelectionMarker(unit, true); });
    if (selected && selected.level <= view.level) drawSelectionMarker(selected, false);
    drawBoxSelect();
  }
  function drawSelectionMarker(unit, member) {
    var position = drawPosition(unit), size = member ? 6 : 9;
    var head = Iso.toScreen(position.x, position.y, position.elevation + (unit.kneeling && !unit.path.length ? 1.6 : unit.height + 0.3));
    var x = head.x - camera.x, y = head.y - camera.y + Math.sin(Date.now() / 220) * 2;
    context.save();
    context.fillStyle = member ? 'rgba(255, 210, 58, 0.7)' : '#ffd23a';
    context.strokeStyle = '#4a3200';
    context.lineWidth = 1.5;
    context.beginPath();
    context.moveTo(x - size, y - size - 1); context.lineTo(x + size, y - size - 1); context.lineTo(x, y);
    context.closePath(); context.fill(); context.stroke();
    context.restore();
  }

  // створка: entry = [дверь, x, y, w, h, sx, sy] — место на карте и в атласе; cutLevel — срезанный уровень или -1
  function drawDoor(atlas, entry, cutLevel) {
    var door = doors[entry[0]];
    if (!door || !Assets.ready(atlas)) return;
    var tile = Iso.tileMeters;
    var cut = cutLevel === door.level;
    var gate = door.gate !== undefined ? gates[door.gate] : null;
    // створка ворот: часть своего уровня (высокие ворота K7 — из двух частей), как в tools/render/outpost_scene.js (gateLeafTop)
    var top = !gate ? (cut ? 0.8 : 2.12) : cut ? Math.min(gate.height - door.level * LEVEL_H, 0.8)
      : gate.height > (door.level + 1) * LEVEL_H ? LEVEL_H : Math.min(gate.height - door.level * LEVEL_H, LEVEL_H - 0.22);
    var base = door.level * LEVEL_H;
    var left = gate ? -0.02 : (tile - DOOR_WIDTH) / 2 / tile - 0.02, right = gate ? 1.02 : (tile + DOOR_WIDTH) / 2 / tile + 0.02;
    // точка в плоскости стены: along — доля клетки вдоль грани, across — сдвиг поперёк, height — м
    function wallPoint(along, across, height) {
      return door.orient === 'W' ? Iso.toScreen(door.col + across, door.row + along, base + height) : Iso.toScreen(door.col + along, door.row + across, base + height);
    }
    // обычная створка уезжает в стену, створка ворот поднимается к верху проёма
    var slide = gate ? 0 : door.open * (DOOR_WIDTH + 0.04) / tile;
    var lift = gate ? Math.max(0, Math.min(top, door.open * gate.height - door.level * LEVEL_H)) : 0;
    var start = wallPoint(0, 0, 0), shifted = wallPoint(slide, 0, lift);
    context.save();
    context.beginPath();
    [-0.04, 0.04].forEach(function (across) {
      var corners = [wallPoint(left, across, lift - 0.03), wallPoint(right, across, lift - 0.03), wallPoint(right, across, top), wallPoint(left, across, top)];
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
    context.setTransform(renderScale * zoom, 0, 0, renderScale * zoom, 0, 0);
    context.imageSmoothingEnabled = renderScale * zoom !== 1;
    if (glActive()) { renderGL(); return; }
    // тайлы старше разметки (tools/render/baselogic.mjs): пока строится WebGL-карта, старую картинку не показываем
    if (MAP.tilesStale && glStarting && !glFailed) { context.fillStyle = '#141210'; context.fillRect(0, 0, viewWidth, viewHeight); return; }
    context.fillStyle = '#141210';
    context.fillRect(0, 0, viewWidth, viewHeight);
    if (TILESET) { renderTiles(); return; }
    // показываем вариант, как только он готов; до этого — прежний
    var wanted = variants[variantKey(view.level, view.cut)];
    if (wanted && wanted.ready) shownVariant = wanted;
    if (shownVariant && Assets.ready(shownVariant.background)) context.drawImage(shownVariant.background, -Math.round(camera.x), -Math.round(camera.y));

    // рамка-куб — это только курсор мыши; выбранного бойца отмечает стрелка.
    // Для робота рамка охватывает всю его площадку 2x2.
    var hover = hoverStyle();
    // объекты по глубине: диагональ клетки (col + row), затем уровень, затем часть клетки
    var drawList = [];
    var rects = [];
    staticOverlays().forEach(function (item) { rects.push(item.rect); drawList.push(item); });
    floorOverlays().forEach(function (item) { rects.push(item.rect); drawList.push(item); });
    corpseItems().forEach(function (item) { rects.push(item.rect); drawList.push(item); });
    if (hover) drawList.push({ depth: depthKey(hover.tile.col, hover.tile.row, hover.tile.level, 1.45), draw: function () { drawBox(hover.tile, hover.color, 'back', hover.size, hover.width); } });
    drawList.push({ depth: -1, draw: drawPath });
    units.forEach(function (unit) {
      if (unit.level > view.level || !isSeen(unit)) return;          // выше уровня обзора — не видно
      var position = drawPosition(unit);
      rects.push(spriteRect(unit, position));
      drawList.push({ depth: unitDepth(unit), draw: function () { drawSprite(spriteName(unit), position.x, position.y, position.elevation, unit); } });
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
    drawList.forEach(safeDraw);

    drawSelectionMarkers();
    drawPathLabel();
    if (hover) { drawBox(hover.tile, hover.color, 'front', hover.size, hover.width); drawDropLine(hover.tile); drawEnemyHover(hover); }
    drawExtraction();
    drawDebugZones();
    drawPortal(performance.now());
    drawShields(performance.now());
    drawHighlight(performance.now());
    drawMarkedEnemy();
    drawAimMarker();
    drawParticles();
    drawThrows();
    drawCombatEffects();
  }

  // Карта из тайлов: статический слой — готовые куски кэша. Подвижное (юниты, створки, подсветка курсора)
  // собирается в группы по перекрытию прямоугольников; в рамке группы поверх кэша рисуются по глубине
  // подвижные элементы и все куски ближе самого дальнего из них. Дальние куски уже есть в кэше под ними,
  // а за рамку ничего не выходит, поэтому ближние куски вне группы не страдают.
  // ---------------- кадр WebGL-карты ----------------
  // Слои: карта из WebGL -> подсветка пола, тела и юниты (2D) -> то, что перед ними (WebGL, js/map3d.js) -> рамки,
  // маршрут и эффекты. Для слоя «перед ними» Map3D получает прямоугольники фигур с точкой ног.
  var glStatic = { key: '', items: [] };
  function glProxy(rect, col, row, elevation, size) {
    var foot = Iso.toScreen(col, row, elevation || 0);
    return { x0: rect.x, x1: rect.x + rect.width, y0: rect.y, y1: rect.y + rect.height, foot: [col, row, elevation || 0], footY: foot.y, pull: 0.45 * (size || 1) };
  }
  function renderGL() {
    target = { x: camera.x, y: camera.y, width: viewWidth, height: viewHeight };
    context.clearRect(0, 0, viewWidth, viewHeight);
    gl3d.setViewport(Math.round(camera.x), Math.round(camera.y), Math.round(viewWidth), Math.round(viewHeight), renderScale * zoom);
    gl3d.setLevel(view.level, view.cut);
    doors.forEach(function (door, index) { gl3d.setDoor(index, door.open, DOOR_WIDTH + 0.04); });
    gl3d.render();
    context.drawImage(gl3d.canvas, 0, 0, viewWidth, viewHeight);

    // подсветка пола (под стенами уровня, они лягут поверх слоем «перед»)
    var staticKey = (showGrid ? 'g' : '') + view.level + (view.cut ? 'c' : 'f') + viewTurns;
    if (glStatic.key !== staticKey) glStatic = { key: staticKey, items: staticOverlays() };
    var floorItems = glStatic.items.concat(floorOverlays());
    floorItems.sort(function (first, second) { return first.depth - second.depth; });
    floorItems.forEach(function (item) { if (!item.rect || visibleRect(item.rect)) safeDraw(item); });

    // тела и юниты — по глубине клетки, от дальних к ближним
    var now = performance.now(), figures = [], proxies = [];
    corpses.forEach(function (corpse) {
      if (corpse.level > view.level) return;
      var standing = corpse.wreck || corpseFrame(corpse, now) >= 0;
      // кадры персонала и гражданских грузятся по запросу: drawableSprite ставит кадр в загрузку и до загрузки
      // подставляет тело того же юнита (если оно уже загружено)
      var name = drawableSprite(corpseSprite(corpse, now));
      if (!name) return;
      var image = images[name], anchor = SPRITE_ANCHORS[name];
      if (!image || !anchor || !image.naturalWidth) return;
      var foot = Iso.toScreen(corpse.x, corpse.y, corpse.elevation);
      var rect = { x: Math.round(foot.x - anchor[0]), y: Math.round(foot.y - anchor[1]), width: image.naturalWidth, height: image.naturalHeight };
      if (!visibleRect(rect)) return;
      figures.push({ depth: standing ? footprintDepth(corpse.col, corpse.row, corpse.level, 3.5, corpse.size) : footprintDepth(corpse.col, corpse.row, corpse.level, 1.3, corpse.size),
        draw: function () { drawSprite(name, corpse.x, corpse.y, corpse.elevation); } });
      proxies.push(glProxy(rect, corpse.x, corpse.y, corpse.elevation, corpse.size));
    });
    units.forEach(function (unit) {
      if (unit.level > view.level || !isSeen(unit)) return;
      var position = drawPosition(unit), rect = spriteRect(unit, position);
      if (!visibleRect(rect)) return;
      figures.push({ depth: unitDepth(unit), draw: function () { drawSprite(spriteName(unit), position.x, position.y, position.elevation, unit); } });
      proxies.push(glProxy(rect, position.x, position.y, position.elevation, unit.size));
    });
    figures.sort(function (first, second) { return first.depth - second.depth; });
    figures.forEach(safeDraw);

    // стены и предметы перед юнитами и над подсветкой пола
    gl3d.renderOccluders(proxies, view.level * LEVEL_H);
    context.drawImage(gl3d.canvas, 0, 0, viewWidth, viewHeight);

    var hover = hoverStyle();
    drawPath();
    drawSelectionMarkers();
    drawPathLabel();
    if (hover) { drawBox(hover.tile, hover.color, 'back', hover.size, hover.width); drawBox(hover.tile, hover.color, 'front', hover.size, hover.width); drawDropLine(hover.tile); drawEnemyHover(hover); }
    drawExtraction();
    drawDebugZones();
    drawPortal(now);
    drawShields(now);
    drawHighlight(now);
    drawMarkedEnemy();
    drawAimMarker();
    drawParticles();
    drawThrows();
    drawCombatEffects();
  }

  function renderTiles() {
    var current = tileView(view.level, view.cut);
    if (!tileImages.every(Assets.ready) || !shadowImages.every(Assets.ready)) return;
    drawChunks(current);
    var hover = hoverStyle();

    var dynamic = floorOverlays().concat(corpseItems()).concat(fountainItems(performance.now()));
    if (hover) {
      var base = elevationOf(hover.tile.col, hover.tile.row, hover.tile.level), boxHeight = hover.size > 1 ? BOX_HEIGHT * 2 : BOX_HEIGHT;
      var boxCorners = Iso.tileCorners(hover.tile.col, hover.tile.row, base, hover.size).concat(Iso.tileCorners(hover.tile.col, hover.tile.row, base + boxHeight, hover.size));
      dynamic.push({ depth: depthKey(hover.tile.col, hover.tile.row, hover.tile.level, 1.45), rect: quadRect(boxCorners, 4), draw: function () { drawBox(hover.tile, hover.color, 'back', hover.size, hover.width); } });
    }
    units.forEach(function (unit) {
      if (unit.level > view.level || !isSeen(unit)) return;
      var position = drawPosition(unit);
      dynamic.push({ depth: unitDepth(unit), rect: spriteRect(unit, position), draw: function () { drawSprite(spriteName(unit), position.x, position.y, position.elevation, unit); } });
    });
    current.doors.forEach(function (entry) {
      var door = doors[entry[0]];
      if (!door || door.open > 0.995) return;
      var cutLevel = view.cut ? view.level : -1;
      var edge = doorViewEdge(entry[0]);
      dynamic.push({ depth: depthKeyView(edge.col, edge.row, door.level, edge.orient === 'W' ? 2.05 : 3.05), rect: { x: entry[1], y: entry[2], width: entry[3], height: entry[4] },
        draw: function () { drawDoor(tileImages[entry[7] || 0], entry, cutLevel); } });
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
      list.forEach(function (item) { if (item.piece) drawTilePiece(tileImage, item.piece); else safeDraw(item); });
      context.restore();
    });

    drawDebugZones();                          // отладка: под туманом (по земле, в том числе перед юнитами)
    if (fogEnabled()) drawFogOverlay();
    drawPath();
    drawSelectionMarkers();
    drawPathLabel();
    if (hover) { drawBox(hover.tile, hover.color, 'front', hover.size, hover.width); drawDropLine(hover.tile); drawEnemyHover(hover); }
    drawExtraction();
    drawPortal(performance.now());
    drawShields(performance.now());
    drawHighlight(performance.now());
    drawMarkedEnemy();
    drawAimMarker();
    drawParticles();
    drawThrows();
    drawCombatEffects();
  }

  // ---------------- связь с панелью ----------------
  setCombat(combat);
  setPhaseLabel();
  var Game = window.Game = {
    isSeen: function (unit) { return isSeen(unit); },
    // окно итогов закрыто кнопкой ОК: можно ходить по карте и смотреть, стрелять и эвакуироваться нельзя
    freeRoam: function () {
      if (!mission.over) return;
      mission.roam = true; phase = 'squad'; aiQueue = []; staffQueue = [];
      if (!selected) selected = units.filter(function (unit) { return unit.side === 'squad'; })[0] || null;
      setPhaseLabel(); say('Задание окончено: осмотр карты');
    },
    COST: COST, MAGAZINE: MAGAZINE, FIRE_MODES: FIRE_MODES, GRID: GRID,
    units: units, obstacles: obstacles, camera: camera, KINDS: KINDS,
    get selected() { return selected; },
    get shown() { return shownUnit(); },
    get turn() { return turn; },
    get message() { return Date.now() < message.until ? message.text : ''; },
    get busy() { return busy(); },
    get view() { return view; },
    get combat() { return combat; },
    get aiming() { return aiming; },
    get aimTarget() { return aimTarget; },
    get spotted() { return spotted.list; },
    aimAt: aimAt,
    inspectUnit: function (unit) { inspect(unit); },
    set markedEnemy(unit) { markedEnemy = unit; },
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
    viewSize: function () { return { width: viewWidth, height: viewHeight }; },
    // туман для мини-карты: картинка плотности в координатах клеток (FOG_PX пикселей на клетку) или null
    fogLayer: function () { return fogLayer(view.level, view.cut); }, fogPixels: FOG_PX,
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
      else if (name === 'focus') focusSelected();
      else if (name === 'evac') requestEvacuation();
      else say('Пока не работает');
      updateHover();
    }
  };

  // ---------------- цикл ----------------
  var lastTime = performance.now();
  // Счётчик кадров (настройка «Счётчик FPS»): кадров в секунду, средний и худший промежуток между кадрами
  // за полсекунды и время работы скрипта в кадре (без работы видеокарты и браузера).
  var fpsMeter = { since: 0, frames: 0, worst: 0, work: 0, text: '' };
  function measureFrame(now, interval, work) {
    if (!fpsMeter.since) fpsMeter.since = now;
    fpsMeter.frames++; fpsMeter.worst = Math.max(fpsMeter.worst, interval); fpsMeter.work += work;
    var elapsed = now - fpsMeter.since;
    if (elapsed < 500) return;
    fpsMeter.text = 'FPS ' + Math.round(fpsMeter.frames * 1000 / elapsed) + '  ·  кадр ' + (elapsed / fpsMeter.frames).toFixed(1) +
      ' мс (худший ' + fpsMeter.worst.toFixed(0) + ')  ·  скрипт ' + (fpsMeter.work / fpsMeter.frames).toFixed(1) + ' мс';
    fpsMeter.since = now; fpsMeter.frames = 0; fpsMeter.worst = 0; fpsMeter.work = 0;
  }
  function drawFps() {
    if (!Settings.values.showFps || !fpsMeter.text) return;
    context.save();
    context.setTransform(renderScale, 0, 0, renderScale, 0, 0);          // в пикселях окна, без приближения
    context.font = 'bold 11px Consolas, monospace';
    var text = fpsMeter.text + (zoom !== 1 ? '  ·  ×' + zoom : '');
    var width = context.measureText(text).width + 16, x = screenWidth - width - 10, y = screenHeight - 30;
    context.fillStyle = 'rgba(10, 13, 15, 0.78)';
    context.fillRect(x, y, width, 20);
    context.fillStyle = '#bfe8c8';
    context.textBaseline = 'middle';
    context.fillText(text, x + 8, y + 10);
    context.restore();
  }
  function frame(now) {
    window.requestAnimationFrame(frame);          // сразу: ошибка в кадре не останавливает игру
    var workStart = performance.now(), interval = now - lastTime;
    var seconds = Math.min(0.05, (now - lastTime) / 1000);
    lastTime = now;
    var scroll = 700 * seconds / zoom;
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
    updateShotView(now);
    updateStaffAI(now);
    updateAI(now);
    updateGather();
    updateMission(now);
    updateFog(now);
    updateTalk(now);
    updateMissionClock(now);
    updateTimerLabel();
    updateReachOverlay(now);
    updateFireOverlay(now);
    updateMusic(now);
    updateSpotted(now);
    // выбранный юнит сменил этаж (лестница) — обзор переходит на его уровень
    if (phase === 'squad' && selected && followLevel(selected) !== followedLevel) viewFollow(selected);
    // боец вошёл в помещение или вышел из него — стены срезаются или восстанавливаются
    if (phase === 'squad' && selected) {
      var indoorKey = (selected === indoorWatch.unit ? '' : 'new') + (isIndoor(selected.col, selected.row, selected.level) ? 'in' : 'out');
      if (selected === indoorWatch.unit && indoorKey !== indoorWatch.state) viewFollow(selected);
      indoorWatch.unit = selected; indoorWatch.state = indoorKey.replace('new', '');
    }
    if (wasMoving) updateHover();
    if (!gl3d && !glStarting && TILESET && tileImages.every(Assets.ready)) startMap3D();
    render();
    drawLoading();
    if (glStarting && !gl3d && !glFailed) {
      context.save();
      context.font = 'bold 12px Arial, sans-serif';
      context.fillStyle = 'rgba(12, 15, 17, 0.8)';
      context.fillRect(viewWidth / 2 - 110, 70, 220, 24);
      context.fillStyle = '#c8d2d8';
      context.textAlign = 'center';
      context.fillText('Строится 3D-карта… ' + Math.round(glProgress * 100) + ' %', viewWidth / 2, 86);
      context.restore();
    }
    if (window.Panel) window.Panel.update();
    measureFrame(now, interval, performance.now() - workStart);
    drawFps();
  }

  // плашка загрузки графики слева вверху, пока очередь не опустеет
  function drawLoading() {
    var state = Assets.progress();
    if (state.ready >= state.total) return;
    var text = 'ЗАГРУЗКА ГРАФИКИ  ' + state.ready + ' / ' + state.total + (state.waiting ? '   ·   ПОВТОР: ' + state.waiting : '');
    context.save();
    context.setTransform(renderScale, 0, 0, renderScale, 0, 0);
    context.font = 'bold 11px Arial, sans-serif';
    var width = context.measureText(text).width + 28, x = 16, y = 124;      // под кнопкой «НАСТРОЙКИ»
    context.fillStyle = 'rgba(10, 13, 15, 0.86)';
    context.fillRect(x, y, width, 24);
    context.strokeStyle = state.waiting ? '#c0703a' : '#3a454b';
    context.strokeRect(x + 0.5, y + 0.5, width - 1, 23);
    context.fillStyle = 'rgba(232, 163, 58, 0.35)';
    context.fillRect(x + 1, y + 21, (width - 2) * state.ready / state.total, 2);
    context.fillStyle = '#cfd8dc';
    context.textBaseline = 'middle';
    context.fillText(text, x + 14, y + 12);
    context.restore();
  }

  Settings.onChange(function (values, key) {
    showGrid = values.showGrid || (!key && !!MAP.grid);
    var help = document.getElementById('help');
    if (help) help.style.display = values.showHelp ? '' : 'none';
    if (values.renderScale !== renderScale) { renderScale = values.renderScale; resize(); }
    if (key === 'fullscreen') setTimeout(resize, 200);
    if (key === 'render3d') {
      if (values.render3d === false && viewTurns) applyView(0);
      if (values.render3d !== false) startMap3D();
      updateRotateBar();
    }
    if (key === 'fog') { fog.signature = ''; fog.checkAt = 0; fogLayerCache.key = ''; }
  });
  resize();
  setView(selected.level, false);
  centerOn(selected.x, selected.y - 2);
  if (ARRIVAL) arrivalFinale();
  window.requestAnimationFrame(frame);
  // финальный кадр демо: без панели, подсказок и меню, камера на рампе КТ-6, чуть ближе обычного
  function arrivalFinale() {
    ['panel', 'help', 'turn', 'levelbar', 'settings-button'].forEach(function (id) { var element = document.getElementById(id); if (element) element.style.display = 'none'; });
    selectUnit(null);
    resize();
    var cells = MAP.extraction, rampCol = Math.max.apply(null, cells.map(function (cell) { return cell[0]; }));
    var centerRow = cells.reduce(function (sum, cell) { return sum + cell[1]; }, 0) / cells.length;
    setZoom(1.25, screenWidth / 2, screenHeight / 2);
    centerOn(rampCol, centerRow + 0.5, 1.2);
    Demo.finale();
  }

  // для автотеста
  window.__game = {
    units: units, camera: camera, view: view, select: function (index) { selectUnit(units[index], false); }, drawPosition: drawPosition,
    fire: function (shooter, target, modeIndex) { return fire(shooter, { unit: target, point: targetPointOf(target) }, modeIndex); },
    get domes() { return domes; }, startAlienPhase: function () { startAlienPhase(); }, rechargeShields: function () { rechargeShields(); }, ageDomes: function () { ageDomes(); },
    preview: function (shooter, target, modeIndex) { return shotPreview(shooter, { unit: target, point: targetPointOf(target) }, modeIndex); },
    trace: function (from, to, range, ignore) { return Combat.trace(combatWorld, from, to, range, ignore); },
    get shots() { return shots.length; }, get phase() { return phase; }, endTurn: function () { endTurn(); }, corpses: corpses, get particles() { return particles; }, kill: function (unit) { kill(unit); }, musicMood: function () { return musicMood(); }, get turn() { return turn; }, aiDecide: function (unit) { approachField = null; soldierField = null; buildApproachField(); if (!rolesAssigned) assignAlienRoles(); return aiDecide(unit); }, alienTactic: function (unit) { if (!rolesAssigned) assignAlienRoles(); return alienTactic(unit); }, groundItems: groundItems, mission: mission, summary: function () { return missionSummary(); }, get aimTarget() { return aimTarget; }, reactionCheck: function (unit) { reactionCheck(unit); }, tileStats: tileStats, explodeAt: function (col, row, level) { explode({ x: col + 0.5, y: row + 0.5, h: elevationOf(col, row, level || 0), level: level || 0 }, performance.now()); }, moveTo: function (col, row, level) { moveSelectedTo({ col: col, row: row, level: level || 0 }); }, selectedUnit: function () { return selected; },
    clickTile: function (col, row, level) {
      var point = Iso.toScreen(col + 0.5, row + 0.5, elevationOf(col, row, level || 0));
      return { x: point.x - camera.x, y: point.y - camera.y };
    },
    soldierProfiles: function () { return soldierProfiles().map(function (profile) { return { callsign: profile.callsign, name: profile.name, rank: profile.rank, role: profile.role }; }); },
    highlightArea: highlightArea,
    debugOverlays: function () { return { reach: reachOverlay, fire: fireOverlay }; },
    get group() { return group; }, setGroup: function (list) { setGroup(list); }, moveGroupTo: function (col, row, level) { moveGroupTo({ col: col, row: row, level: level }); },
    missionClock: missionClock, get portal() { return portal; }, fog: fog, updateFogNow: function () { computeFog(); }, isSeen: function (unit) { return isSeen(unit); },
    doors: doors, gates: gates, setView: setView, findPath: function (index, col, row, level) { return findPath(units[index], { col: col, row: row, level: level }); },
    centerOn: centerOn, rotateView: rotateView, viewTurns: function () { return viewTurns; }, get gl3d() { return glActive() ? gl3d : null; }, get glProgress() { return glProgress; }, variantReady: function () { if (TILESET) return tileImages.every(Assets.ready); var variant = variants[variantKey(view.level, view.cut)]; return !!(variant && variant.ready); }
  };
})();
