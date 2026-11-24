// Нижняя панель: мини-карта, портрет, характеристики, кнопки действий, режим огня, оружие.
// Макет 1280x260 пикселей; в окне уже 1280 панель целиком уменьшается.
var Panel = (function () {
  'use strict';

  var MINIMAP_W = 364, MINIMAP_H = 216;      // мини-карта шире, чем выше: карта в изометрии — ромб примерно 1,6–1,7 : 1
  var SHIFT = MINIMAP_W - 216;                // на столько блоки правее мини-карты сдвинуты против прежней вёрстки
  var ACTIONS_EXTRA = 32;                     // кнопки реже: подписи «КОНЕЦ ХОДА» и «ЭВАКУАЦ.» не сходятся
  var DESIGN_W = 1280 + SHIFT + ACTIONS_EXTRA, DESIGN_H = 260;
  var root = document.getElementById('panel');
  var inner = document.createElement('div');
  inner.className = 'panel-inner';
  inner.style.width = DESIGN_W + 'px';
  root.appendChild(inner);

  var ICONS = {
    step: 'M-7,9 l5,-16 l6,16 M-2,-7 l0,-4 M6,-6 a3,3 0 1 0 0.1,0',
    kneel: 'M0,-11 a3.5,3.5 0 1 0 0.1,0 M0,-4 l0,6 l-7,6 M0,2 l7,6 M-7,-1 l14,0',
    aim: 'M0,-9 a9,9 0 1 0 0.1,0 M-13,0 l6,0 M7,0 l6,0 M0,-13 l0,6 M0,7 l0,6',
    reload: 'M-8,-3 a9,9 0 1 1 1,9 M-11,-9 l3,6 l6,-2',
    grenade: 'M0,3 m-7,0 a7,7 0 1 0 14,0 a7,7 0 1 0 -14,0 M-2,-5 l0,-4 l6,0 M4,-9 l4,-3',
    gear: 'M-9,-7 h18 v15 h-18 z M-9,-1 h18 M-3,-11 h6 v4 h-6 z',
    next: 'M-9,-8 l8,8 l-8,8 M1,-8 l8,8 l-8,8',
    up: 'M0,-10 l-8,8 h5 v9 h6 v-9 h5 z',
    down: 'M0,10 l-8,-8 h5 v-9 h6 v9 h5 z',
    endTurn: 'M-8,-10 v20 M-8,-10 h15 l-4,5 l4,5 h-15',
    evac: 'M-11,4 h22 M-7,4 l-2,6 M7,4 l2,6 M-4,-1 h8 v5 h-8 z M0,-1 v-5 M-12,-7 h24',
    focus: 'M0,-4 a4,4 0 1 0 0.1,0 M0,-13 v6 M0,7 v6 M-13,0 h6 M7,0 h6 M-9,-9 l3,3 M9,-9 l-3,3 M-9,9 l3,-3 M9,9 l-3,-3'
  };
  var BUTTONS = [
    { id: 'step', label: 'ШАГ', key: '1' },
    { id: 'kneel', label: 'ПРИСЕСТЬ', key: '2' },
    { id: 'reload', label: 'ЗАРЯДИТЬ', key: '4' },
    { id: 'gear', label: 'СНАРЯЖ.', key: '6' },
    { id: 'focus', label: 'К БОЙЦУ', key: 'C' },
    { id: 'next', label: 'ДАЛЕЕ', key: '7' },
    { id: 'up', label: 'ВЫШЕ', key: '8' },
    { id: 'down', label: 'НИЖЕ', key: '9' },
    { id: 'endTurn', label: 'КОНЕЦ ХОДА', key: '0' },
    { id: 'evac', label: 'ЭВАКУАЦ.', title: 'Эвакуация на конвертоплане (X)', key: 'X' }
  ];

  function bar(id, label) {
    return '<div class="stat"><div class="stat-head"><span class="stat-label" id="' + id + '-label">' + label + '</span>' +
      '<span class="stat-value"><b id="' + id + '-value"></b><span id="' + id + '-max"></span></span></div>' +
      '<div class="stat-track"><div class="stat-fill" id="' + id + '-fill"></div><div class="stat-ticks"></div></div></div>';
  }

  var buttonsHtml = BUTTONS.map(function (button) {
    return '<div class="action' + (button.disabled ? ' disabled' : '') + '" data-action="' + button.id + '" title="' +
      (button.disabled || button.title || button.label) + '"><div class="action-box"><span class="action-key">' + button.key + '</span>' +
      '<svg viewBox="-16 -16 32 32" width="32" height="32"><path d="' + ICONS[button.id] + '"/></svg></div>' +
      '<div class="action-label" id="label-' + button.id + '">' + button.label + '</div></div>';
  }).join('');

  // Вёрстка: мини-карта · левая рука · портрет · правая рука · характеристики · кнопки.
  // Ячейки рук — как в UFO: щелчок по оружию открывает меню режима огня, по гранате — бросок.
  var style = document.createElement('style');
  style.textContent = [
    '.panel-inner .minimap { width: ' + (MINIMAP_W + 8) + 'px; height: ' + (MINIMAP_H + 8) + 'px; }',
    '.panel-inner .portrait { left: ' + (380 + SHIFT) + 'px; width: 168px; cursor: pointer; }',
    '.panel-inner .hand { position: absolute; top: 18px; width: 124px; height: 224px; cursor: pointer; }',
    '.panel-inner .hand.left { left: ' + (248 + SHIFT) + 'px; } .panel-inner .hand.right { left: ' + (556 + SHIFT) + 'px; }',
    '.panel-inner .hand:hover { border-color: #8a959c; }',
    '.panel-inner .hand.open { border-color: #e8a33a; }',
    '.hand-title { position: absolute; left: 8px; top: 7px; font-size: 9px; font-weight: bold; letter-spacing: 1px; color: #8fd18a; }',
    '.hand-name { position: absolute; left: 8px; right: 6px; top: 20px; font-size: 9px; font-weight: bold; letter-spacing: 0.5px; color: #e4e8ea; line-height: 11px; }',
    '.hand canvas { position: absolute; left: 12px; top: 46px; width: 100px; height: 132px; }',
    '.hand-empty { position: absolute; left: 0; right: 0; top: 100px; text-align: center; color: #56636a; font-size: 11px; font-weight: bold; letter-spacing: 2px; }',
    '.hand-ammo { position: absolute; left: 8px; right: 8px; bottom: 8px; display: flex; justify-content: space-between; align-items: flex-end; }',
    '.hand-rounds { font: bold 20px Consolas, "DejaVu Sans Mono", monospace; }',
    '.hand-rounds span { font-size: 12px; color: #5f6b72; }',
    '.hand-reserve { font: 9px Consolas, "DejaVu Sans Mono", monospace; color: #8a959c; margin-bottom: 3px; }',
    '.panel-inner .stats { left: ' + (694 + SHIFT) + 'px; top: 18px; width: 320px; cursor: pointer; }',
    '.panel-inner .stats:hover .unit-name { color: #ffd28a; }',
    '.panel-inner .actions { left: ' + (1022 + SHIFT) + 'px; top: 30px; width: ' + (250 + ACTIONS_EXTRA) + 'px; }',
    '.panel-inner .action-grid { grid-template-columns: repeat(5, 46px); column-gap: 13px; row-gap: 14px; }',
    '.panel-inner .action-box { width: 46px; height: 50px; }',
    // подпись шире кнопки — по центру под ней, поровну в обе стороны
    '.panel-inner .action-label { letter-spacing: 0.2px; font-size: 8.5px; margin-left: -12px; margin-right: -12px; transform: none; }',
    '.panel-inner .action:last-child .action-label { transform: none; }',
    '.no-unit .hand > * { visibility: hidden; }',
    '.viewing .portrait, .viewing .hand { border-color: #c0462e; }',
    '.viewing .unit-name { color: #ff9a7a; }',
    '.viewing #chip-stance { color: #ff9a7a; border-color: #6a3328; }',
    // всплывающее меню режима огня
    '#fire-menu { position: fixed; z-index: 40; display: none; min-width: 300px; padding: 6px; background: rgba(10, 13, 15, 0.96);',
    '  border: 1px solid #5c6a72; box-shadow: 0 8px 24px rgba(0,0,0,0.6); font-family: Arial, sans-serif; user-select: none; }',
    '#fire-menu.open { display: block; }',
    '#fire-menu .menu-title { font-size: 10px; font-weight: bold; letter-spacing: 1px; color: #8a959c; margin: 2px 6px 6px; }',
    '#fire-menu .menu-item { display: flex; align-items: center; height: 34px; margin-top: 4px; padding: 0 12px; border: 1px solid #3a454b; background: #12181b;',
    '  color: #e4e8ea; font-size: 15px; font-weight: bold; cursor: pointer; }',
    '#fire-menu .menu-item:hover { border-color: #e8a33a; color: #ffd28a; background: #2a2210; }',
    '#fire-menu .menu-item.disabled { opacity: 0.4; cursor: default; }',
    '#fire-menu .menu-item.disabled:hover { border-color: #3a454b; color: #e4e8ea; background: #12181b; }',
    '#fire-menu .menu-label { flex: 1; }',
    '#fire-menu .menu-value { width: 92px; text-align: right; font: 13px Consolas, "DejaVu Sans Mono", monospace; color: #bfd0d8; }',
    '#fire-menu .menu-empty { padding: 8px 12px; color: #8a959c; font-size: 12px; }',
    // окно характеристик
    '#stats-window { position: fixed; inset: 0; z-index: 45; display: none; background: rgba(4, 6, 7, 0.28); font-family: Arial, sans-serif; user-select: none; }',
    '#stats-window.open { display: block; }',
    '#stats-window .sheet { position: absolute; left: 50%; top: 50%; width: 760px; transform-origin: 50% 50%; background: rgba(14, 20, 18, 0.96); border: 1px solid #4c6a58;',
    '  box-shadow: 0 12px 40px rgba(0,0,0,0.6); color: #d8e8d0; padding: 0 0 12px; }',
    '#stats-window .head { margin: 12px; padding: 8px 14px; border: 1px solid #4c6a58; display: flex; align-items: baseline; justify-content: space-between; }',
    '#stats-window .head b { font-size: 22px; color: #c8f0a0; letter-spacing: 1px; }',
    '#stats-window .head span { font-size: 11px; font-weight: bold; letter-spacing: 1px; color: #8fb894; }',
    '#stats-window table { border-collapse: collapse; margin: 0 12px; width: calc(100% - 24px); }',
    '#stats-window td { height: 24px; border-bottom: 1px solid #22382c; padding: 0 8px; }',
    '#stats-window td.name { width: 250px; font-size: 13px; font-weight: bold; letter-spacing: 1px; color: #a8d8a0; }',
    '#stats-window td.value { width: 70px; text-align: right; font: bold 14px Consolas, "DejaVu Sans Mono", monospace; color: #ffc070; border-left: 1px solid #22382c; border-right: 1px solid #22382c; }',
    '#stats-window td.value small { color: #6f8a78; font-weight: normal; font-size: 11px; }',
    '#stats-window .track { position: relative; height: 12px; background: repeating-linear-gradient(90deg, transparent 0 calc(100% / 7 - 1px), #22382c calc(100% / 7 - 1px) calc(100% / 7)); }',
    '#stats-window .track i { position: absolute; left: 0; top: 2px; bottom: 2px; }',
    '#stats-window .track i.max { background: rgba(255,255,255,0.12); }',
    '#stats-window .scale { display: flex; justify-content: space-between; margin: 0 12px 0 352px; font: 10px Consolas, monospace; color: #c8f0a0; padding: 0 0 2px; }',
    '#stats-window .note { margin: 10px 20px 0; font-size: 11px; color: #8fb894; }'
  ].join('\n');
  document.head.appendChild(style);

  function handHtml(side, title) {
    return '<div class="box hand ' + side + '" data-hand="' + (side === 'left' ? 'leftHand' : 'rightHand') + '" title="Щелчок — режим огня или бросок">' +
      '<div class="hand-title" id="hand-' + side + '-title">' + title + '</div><div class="hand-name" id="hand-' + side + '-name"></div>' +
      '<canvas id="hand-' + side + '-canvas" width="200" height="264"></canvas><div class="hand-empty" id="hand-' + side + '-empty">ПУСТО</div>' +
      '<div class="hand-ammo"><div class="hand-rounds" id="hand-' + side + '-rounds"></div><div class="hand-reserve" id="hand-' + side + '-reserve"></div></div></div>';
  }
  inner.innerHTML =
    '<div class="box minimap"><canvas id="minimap" width="' + MINIMAP_W + '" height="' + MINIMAP_H + '"></canvas><span class="caption">КВАДРАТ 47-Б</span></div>' +
    handHtml('left', 'ЛЕВАЯ РУКА') +
    '<div class="box portrait" title="Снаряжение (6, I)"><img id="portrait" alt=""><div class="scan"></div>' +
      '<div class="nameplate"><span id="callsign"></span><span id="rank"></span></div></div>' +
    handHtml('right', 'ПРАВАЯ РУКА') +
    '<div class="stats" title="Подробные характеристики"><div class="unit-name" id="unit-name"></div><div class="unit-sub" id="unit-sub"></div>' +
      bar('tu', 'ОЧКИ ДЕЙСТВИЯ') + bar('hp', 'ЗДОРОВЬЕ') + bar('st', 'ВЫНОСЛИВОСТЬ') + bar('mo', 'МОРАЛЬ') +
      '<div class="chips"><span class="chip" id="chip-stance"></span><span class="chip green" id="chip-optics"></span>' +
      '<span class="chip" id="chip-combat"></span></div></div>' +
    '<div class="actions"><div class="action-grid">' + buttonsHtml + '</div></div>';

  var element = function (id) { return document.getElementById(id); };

  // ---------------- кнопки ----------------
  Array.prototype.forEach.call(inner.querySelectorAll('.action'), function (node) {
    node.addEventListener('click', function () {
      var action = node.getAttribute('data-action');
      if (node.classList.contains('disabled')) return;
      if (action !== 'step') Game.action(action);
    });
  });

  // щелчок по портрету — экран снаряжения
  inner.querySelector('.portrait').addEventListener('click', function () { Game.action('gear'); });

  // ---------------- меню руки: режимы огня, бросок ----------------
  var menu = document.createElement('div');
  menu.id = 'fire-menu';
  document.body.appendChild(menu);
  var menuHand = null;
  function closeMenu() {
    if (!menuHand) return false;
    menu.classList.remove('open');
    var open = inner.querySelector('.hand.open');
    if (open) open.classList.remove('open');
    menuHand = null;
    return true;
  }
  function openMenu(handNode) {
    var unit = Game.shown, slot = handNode.getAttribute('data-hand');
    if (!unit) return;
    if (menuHand === slot) { closeMenu(); return; }
    closeMenu();
    var viewing = unit !== Game.selected;
    var actions = viewing ? [] : Game.handActions(unit, slot), view = Game.handView(unit, slot);
    var html = '<div class="menu-title">' + (view ? view.name : (slot === 'leftHand' ? 'ЛЕВАЯ РУКА' : 'ПРАВАЯ РУКА')) + '</div>';
    if (viewing) html += '<div class="menu-empty">' + (view ? view.name + (view.capacity ? ' · ' + view.rounds + '/' + view.capacity : '') + '. Просмотр пришельца — действий нет.' : 'Рука пуста.') + '</div>';
    else if (!actions.length) html += '<div class="menu-empty">' + (view ? 'С этим предметом действий нет. Переложить — в снаряжении.' : 'Рука пуста. Взять предмет — в снаряжении (6).') + '</div>';
    actions.forEach(function (action, index) {
      html += '<div class="menu-item' + (action.disabled ? ' disabled' : '') + '" data-index="' + index + '" title="' + (action.disabled || '') + '">' +
        '<span class="menu-label">' + action.label + '</span><span class="menu-value">ТОЧН ' + action.chance + '%</span><span class="menu-value">ОД ' + action.cost + '</span></div>';
    });
    menu.innerHTML = html;
    menu.classList.add('open');
    handNode.classList.add('open');
    menuHand = slot;
    // над ячейкой руки, не выходя за край окна
    var box = handNode.getBoundingClientRect(), width = menu.offsetWidth, height = menu.offsetHeight;
    var left = Math.max(8, Math.min(window.innerWidth - width - 8, box.left + box.width / 2 - width / 2));
    menu.style.left = left + 'px';
    menu.style.top = Math.max(8, box.top - height - 8) + 'px';
  }
  menu.addEventListener('click', function (event) {
    var item = event.target.closest ? event.target.closest('.menu-item') : null;
    if (!item || item.classList.contains('disabled')) return;
    var slot = menuHand;
    closeMenu();
    Game.handAction(Game.selected, slot, Number(item.getAttribute('data-index')));
  });
  Array.prototype.forEach.call(inner.querySelectorAll('.hand'), function (node) {
    node.addEventListener('click', function (event) { event.stopPropagation(); openMenu(node); });
  });
  window.addEventListener('mousedown', function (event) {
    if (!menuHand) return;
    if (menu.contains(event.target) || (event.target.closest && event.target.closest('.hand'))) return;
    closeMenu();
  });

  // ---------------- окно характеристик ----------------
  var statsWindow = document.createElement('div');
  statsWindow.id = 'stats-window';
  document.body.appendChild(statsWindow);
  function closeStats() { statsWindow.classList.remove('open'); }
  function openStats() {
    var unit = Game.shown;
    if (!unit) return;
    var extra = Game.statsOf(unit), labels = unit.statLabels;
    var rows = [
      [labels[0], unit.timeUnits, unit.maxTimeUnits, '#c8e060'],
      [labels[2], unit.stamina, unit.maxStamina, '#e8d850'],
      [labels[1], unit.health, unit.maxHealth, '#e05a50'],
      unit.bravery !== undefined ? ['ХРАБРОСТЬ', unit.bravery, null, '#c09ae0'] : null,
      [labels[3], unit.morale, 100, '#a070e0'],
      unit.reactions !== undefined ? ['РЕАКЦИЯ', unit.reactions, null, '#f0b830'] : null,
      unit.accuracy !== undefined ? ['ТОЧНОСТЬ СТРЕЛЬБЫ', unit.accuracy, null, '#80b0e0'] : null,
      unit.throwing !== undefined ? ['ТОЧНОСТЬ БРОСКА', unit.throwing, null, '#e8a040'] : null,
      unit.strength !== undefined ? ['СИЛА', unit.strength, null, '#60c070'] : null,
      unit.strength !== undefined ? ['ВЕС СНАРЯЖЕНИЯ', extra.weight, unit.strength, extra.overload ? '#ff7a5a' : '#9ab0a0'] : null,
      ['БРОНЯ', unit.armor || 0, null, '#e8ece8']
    ].filter(Boolean);
    var maxScale = 140;
    var html = '<div class="sheet"><div class="head"><b>' + unit.rank.charAt(0).toUpperCase() + unit.rank.slice(1) + ' ' + unit.name + '</b><span>' + unit.callsign + (unit.role ? ' · ' + unit.role : '') + '</span></div>' +
      '<div class="scale">' + [0, 20, 40, 60, 80, 100, 120, 140].map(function (value) { return '<span>' + value + '</span>'; }).join('') + '</div><table>';
    rows.forEach(function (row) {
      var value = row[1], maximum = row[2];
      html += '<tr><td class="name">' + row[0] + '</td><td class="value">' + value + (maximum ? '<small>/' + maximum + '</small>' : '') + '</td><td><div class="track">' +
        (maximum ? '<i class="max" style="width:' + Math.min(100, maximum / maxScale * 100).toFixed(1) + '%"></i>' : '') +
        '<i style="width:' + Math.min(100, value / maxScale * 100).toFixed(1) + '%;background:' + row[3] + '"></i></div></td></tr>';
    });
    html += '</table>' + (extra.overload ? '<div class="note">Перегруз: вес снаряжения больше силы на ' + extra.overload + ' — столько ОД теряется в начале хода.</div>' : '') +
      '<div class="note">Щелчок или Esc — закрыть.</div></div>';
    statsWindow.innerHTML = html;
    statsWindow.classList.add('open');
    var sheet = statsWindow.querySelector('.sheet');
    var scale = Math.min(1.4, window.innerWidth * 0.9 / 760, window.innerHeight * 0.85 / sheet.offsetHeight);
    sheet.style.transform = 'translate(-50%, -50%) scale(' + scale + ')';
  }
  inner.querySelector('.stats').addEventListener('click', openStats);
  statsWindow.addEventListener('click', closeStats);
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && statsWindow.classList.contains('open')) { closeStats(); event.stopImmediatePropagation(); }
  }, true);

  // ---------------- мини-карта ----------------
  var minimap = element('minimap');
  var minimapContext = minimap.getContext('2d');
  var mapBackground = null;      // уменьшенная копия фона
  var mapScale = 1, mapOffsetX = 0, mapOffsetY = 0;
  var fieldImage = null;
  function buildMinimapBackground() {
    // карта вписывается целиком (по меньшему из масштабов), по центру
    mapScale = Math.min(minimap.width / FIELD.width, minimap.height / FIELD.height);
    mapOffsetX = (minimap.width - FIELD.width * mapScale) / 2;
    mapOffsetY = (minimap.height - FIELD.height * mapScale) / 2;
    mapBackground = document.createElement('canvas');
    mapBackground.width = minimap.width; mapBackground.height = minimap.height;
    var mapContext = mapBackground.getContext('2d');
    mapContext.fillStyle = '#0b1210';
    mapContext.fillRect(0, 0, minimap.width, minimap.height);
    mapContext.drawImage(fieldImage, mapOffsetX, mapOffsetY, FIELD.width * mapScale, FIELD.height * mapScale);
    // приглушить цвет и наложить сетку, как на тактическом планшете
    mapContext.fillStyle = 'rgba(8, 36, 44, 0.35)';
    mapContext.fillRect(0, 0, minimap.width, minimap.height);
    mapContext.strokeStyle = 'rgba(160, 216, 232, 0.14)';
    for (var line = 0; line <= minimap.width; line += 22) {
      mapContext.beginPath(); mapContext.moveTo(line + 0.5, 0); mapContext.lineTo(line + 0.5, minimap.height); mapContext.stroke();
      mapContext.beginPath(); mapContext.moveTo(0, line + 0.5); mapContext.lineTo(minimap.width, line + 0.5); mapContext.stroke();
    }
  };
  fieldImage = Assets.image(MAP.minimap, Assets.URGENT, buildMinimapBackground);

  function mapPoint(col, row) {
    var point = Iso.toScreen(col, row);
    return { x: mapOffsetX + point.x * mapScale, y: mapOffsetY + point.y * mapScale };
  }

  function drawMinimap() {
    if (!mapBackground) return;
    minimapContext.drawImage(mapBackground, 0, 0);
    Game.obstacles.forEach(function (rock) {
      var point = mapPoint(rock.col + 0.5, rock.row + 0.5);
      minimapContext.fillStyle = '#8f938a';
      minimapContext.fillRect(point.x - 1.5, point.y - 1.5, 3, 3);
    });
    Game.units.forEach(function (unit) {
      var point = mapPoint(unit.x, unit.y);
      minimapContext.strokeStyle = '#000';
      minimapContext.beginPath();
      if (unit.kind === 'alien') {            // пришелец — красный ромб
        minimapContext.fillStyle = '#e2553f';
        minimapContext.moveTo(point.x, point.y - 5); minimapContext.lineTo(point.x + 5, point.y);
        minimapContext.lineTo(point.x, point.y + 5); minimapContext.lineTo(point.x - 5, point.y);
      } else if (unit.kind === 'mech') {      // робот — крупный квадрат
        minimapContext.fillStyle = '#7cc4ff';
        minimapContext.rect(point.x - 5, point.y - 5, 10, 10);
      } else {                                // боец — треугольник
        minimapContext.fillStyle = '#7cc4ff';
        minimapContext.moveTo(point.x, point.y - 4.5); minimapContext.lineTo(point.x + 4, point.y + 3); minimapContext.lineTo(point.x - 4, point.y + 3);
      }
      minimapContext.closePath(); minimapContext.fill(); minimapContext.stroke();
      if (unit === Game.selected) {
        minimapContext.strokeStyle = '#e8a33a';
        minimapContext.lineWidth = 1.5;
        minimapContext.beginPath(); minimapContext.arc(point.x, point.y, 7.5, 0, Math.PI * 2); minimapContext.stroke();
        minimapContext.lineWidth = 1;
      }
    });
    // видимая часть поля
    var view = Game.viewSize();
    minimapContext.strokeStyle = 'rgba(232, 236, 238, 0.75)';
    minimapContext.strokeRect(mapOffsetX + Game.camera.x * mapScale + 0.5, mapOffsetY + Game.camera.y * mapScale + 0.5,
      view.width * mapScale, view.height * mapScale);
  }

  // щелчок или протяжка по мини-карте двигает камеру
  var mapDragging = false;
  function mapToCamera(event) {
    var rect = minimap.getBoundingClientRect();
    var x = (event.clientX - rect.left) * minimap.width / rect.width;
    var y = (event.clientY - rect.top) * minimap.height / rect.height;
    Game.centerOnPixel((x - mapOffsetX) / mapScale, (y - mapOffsetY) / mapScale);
  }
  minimap.addEventListener('mousedown', function (event) { if (event.button === 0) { mapDragging = true; mapToCamera(event); } });
  window.addEventListener('mousemove', function (event) { if (mapDragging) mapToCamera(event); });
  window.addEventListener('mouseup', function () { mapDragging = false; });

  // ---------------- обновление ----------------
  var cache = {};
  function setText(id, text) {
    if (cache[id] !== text) { cache[id] = text; element(id).textContent = text; }
  }
  function setHtml(id, html) {
    if (cache[id] !== html) { cache[id] = html; element(id).innerHTML = html; }
  }
  function setStat(id, value, maximum) {
    setText(id + '-value', String(value));
    setText(id + '-max', '/' + maximum);
    var width = Math.max(0, Math.min(100, value / maximum * 100)).toFixed(1) + '%';
    if (cache[id + '-fill'] !== width) { cache[id + '-fill'] = width; element(id + '-fill').style.width = width; }
  }
  function setImage(id, src) {
    if (cache[id] !== src) { cache[id] = src; element(id).src = src; }
  }
  function setClass(node, name, on) {
    if (node.classList.contains(name) !== on) node.classList.toggle(name, on);
  }

  // ячейка руки: предмет (холст перерисовывается только при смене предмета или патронов), название, патроны
  function updateHand(side, view) {
    var key = view ? view.key : 'empty';
    setText('hand-' + side + '-name', view ? view.name : '');
    element('hand-' + side + '-empty').style.display = view ? 'none' : 'block';
    setHtml('hand-' + side + '-rounds', view && view.capacity ? view.rounds + '<span>/' + view.capacity + '</span>' : '');
    setText('hand-' + side + '-reserve', view && view.reserve !== null && view.reserve !== undefined ? 'ЗАПАС ' + view.reserve : '');
    var canvas = element('hand-' + side + '-canvas');
    if (canvas.dataset.key === key) return;
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (!view) { canvas.dataset.key = key; return; }
    context.save();
    context.filter = 'drop-shadow(0 0 1px rgba(235,240,242,0.85))';
    view.draw(context, 8, 8, canvas.width - 16, canvas.height - 16);
    context.restore();
    // картинка оружия могла ещё не загрузиться: тогда перерисовать на следующем кадре.
    // Пиксели холста не читаются: при открытии из файла (file://) холст с картинкой «заражён» и getImageData запрещён.
    canvas.dataset.key = !view.ready || view.ready() ? key : '';
  }

  // ---------------- метки врагов в поле зрения выбранного бойца ----------------
  // Красные квадраты с номерами справа над панелью (1 — ближайший). Щелчок — взять в прицел (панель остаётся
  // на бойце), правая кнопка — показать пришельца на панели (настройка «Просмотр пришельцев»).
  // Наведение подсвечивает врага на карте; метка цели в прицеле — с жёлтой рамкой.
  var markerStyle = document.createElement('style');
  markerStyle.textContent = [
    '#enemy-marks { position: fixed; right: 14px; z-index: 6; display: flex; flex-direction: column-reverse; gap: 6px; font-family: Arial, sans-serif; user-select: none; }',
    '#enemy-marks .mark { width: 30px; height: 26px; display: flex; align-items: center; justify-content: center; cursor: pointer;',
    '  background: linear-gradient(180deg, #c23a22, #8a2212); border: 2px solid #3a0c06; color: #ffe2a0; font: bold 15px Consolas, "DejaVu Sans Mono", monospace;',
    '  box-shadow: 0 2px 6px rgba(0,0,0,0.5); }',
    '#enemy-marks .mark:hover { border-color: #ff9a5a; }',
    '#enemy-marks .mark.aimed { border-color: #ffd23a; box-shadow: 0 0 0 2px #ffd23a, 0 2px 6px rgba(0,0,0,0.5); }'
  ].join('\n');
  document.head.appendChild(markerStyle);
  var marks = document.createElement('div');
  marks.id = 'enemy-marks';
  document.body.appendChild(marks);
  var marksKey = '', marksUnits = [];
  marks.addEventListener('contextmenu', function (event) { event.preventDefault(); });
  marks.addEventListener('mousedown', function (event) {
    var node = event.target.closest('.mark');
    if (!node) return;
    event.preventDefault(); event.stopPropagation();
    var unit = marksUnits[Number(node.getAttribute('data-index'))];
    if (event.button === 2) Game.inspectUnit(unit);
    else if (event.button === 0) Game.aimAt(unit);
  });
  marks.addEventListener('mouseover', function (event) {
    var node = event.target.closest('.mark');
    Game.markedEnemy = node ? marksUnits[Number(node.getAttribute('data-index'))] : null;
  });
  marks.addEventListener('mouseleave', function () { Game.markedEnemy = null; });
  function updateMarkers() {
    var list = Game.spotted || [];
    marks.style.bottom = (root.getBoundingClientRect().height + 12) + 'px';
    var key = list.map(function (entry) { return Game.units.indexOf(entry.unit) + (entry.unit === Game.aimTarget ? 'a' : ''); }).join(',');
    if (key === marksKey) return;
    marksKey = key;
    marksUnits = list.map(function (entry) { return entry.unit; });
    marks.innerHTML = list.map(function (entry, index) {
      return '<div class="mark' + (entry.unit === Game.aimTarget ? ' aimed' : '') + '" data-index="' + index + '" title="' +
        entry.unit.name + ' · ' + Math.round(entry.distance) + ' м · щелчок — прицел, ПКМ — на панель">' + (index + 1) + '</div>';
    }).join('');
  }

  function update() {
    var unit = Game.shown;
    var viewing = !!unit && unit !== Game.selected;
    setClass(inner, 'viewing', viewing);
    setClass(inner, 'no-unit', !unit);
    setText('turn-number', ('0' + Game.turn).slice(-2));
    setText('toast', Game.message);
    setClass(element('toast'), 'visible', !!Game.message);
    drawMinimap();
    updateMarkers();
    if (!unit) {
      setText('unit-name', 'Боец не выбран');
      setText('unit-sub', 'Выберите бойца щелчком или клавишей Пробел');
      return;
    }
    setImage('portrait', 'assets/ui/portrait_' + unit.portrait + '.png');
    setText('callsign', unit.callsign);
    setText('rank', unit.rank);
    setText('unit-name', unit.name);
    setText('unit-sub', unit.subtitle || (unit.role + ' · 2-Е ОТДЕЛЕНИЕ · ' + unit.missions + ' ВЫХОДОВ'));
    ['tu', 'hp', 'st', 'mo'].forEach(function (id, index) { setText(id + '-label', unit.statLabels[index]); });
    setStat('tu', unit.timeUnits, unit.maxTimeUnits);
    setStat('hp', unit.health, unit.maxHealth);
    setStat('st', unit.stamina, unit.maxStamina);
    setStat('mo', unit.morale, 100);
    var standing = Game.atEase(unit) ? 'ВОЛЬНО' : 'СТОЯ';
    if (viewing) setText('chip-stance', 'ПРОСМОТР · СТРЕЛЯЕТ ' + (Game.selected ? Game.selected.callsign : '—'));
    else setText('chip-stance', unit.canKneel ? 'СТОЙКА: ' + (unit.kneeling ? 'НА КОЛЕНЕ' : standing) : (unit.kind === 'mech' ? 'ХОДОВАЯ: ОК' : 'СТОЙКА: ' + standing));
    setText('chip-optics', unit.optics);
    setText('chip-combat', 'БРОНЯ ' + (unit.armor || 0) + (unit.weaponType ? ' · ТОЧН ' + unit.accuracy : '') + (unit.reactions ? ' · РЕАК ' + unit.reactions : ''));
    setText('label-kneel', (Game.selected || unit).kneeling ? 'ВСТАТЬ' : 'ПРИСЕСТЬ');
    setText('hand-left-title', unit.inventory ? 'ЛЕВАЯ РУКА' : 'НАВЕСНОЕ');
    setText('hand-right-title', unit.inventory ? 'ПРАВАЯ РУКА' : 'ВООРУЖЕНИЕ');
    updateHand('left', Game.handView(unit, 'leftHand'));
    updateHand('right', Game.handView(unit, 'rightHand'));
    // кнопки, на которые не хватает ОД; выше/ниже — по уровням обзора
    var actor = Game.selected || unit, tu = actor.timeUnits;      // кнопки действуют за выбранного бойца
    setClass(inner.querySelector('[data-action="kneel"]'), 'short', !actor.canKneel || (actor.kneeling ? Game.COST.stand : Game.COST.kneel) > tu);
    setClass(inner.querySelector('[data-action="reload"]'), 'short', !actor.weapon || Game.COST.reload > tu || actor.ammo >= actor.magazine || actor.reserve <= 0);
    setClass(inner.querySelector('[data-action="up"]'), 'short', Game.view.level >= Game.LEVELS - 1);
    setClass(inner.querySelector('[data-action="down"]'), 'short', Game.view.level <= 0);
    setClass(inner.querySelector('[data-action="step"]'), 'active', !Game.aiming && !Game.throwing);
    setClass(inner, 'busy', Game.busy);
  }

  // ---------------- масштаб под ширину окна ----------------
  function layout() {
    var scale = Math.min(1, window.innerWidth / DESIGN_W);
    root.style.height = Math.round(DESIGN_H * scale) + 'px';
    inner.style.transform = 'scale(' + scale + ')';
    inner.style.left = Math.round((window.innerWidth - DESIGN_W * scale) / 2) + 'px';
  }
  layout();

  return { update: update, layout: layout, closeMenu: closeMenu };
})();
