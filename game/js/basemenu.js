// Меню базы «Ямантау» (base.html?mode=manage): справа на карте — разделы, как на экране базы в UFO.
// Пока это экраны-заготовки: экономики (денег, времени, очередей) в игре ещё нет. «Строить модули» показывает
// построенные модули по плану (js/base_plan.js) и по щелчку на помещении ведёт к нему камеру.
// «Информация по базе» — вкладки: модули и помещения (щелчок — камера к помещению и подсветка), персонал
// (учёные, инженеры, бойцы), склад (оружие и снаряжение, имущество, артефакты). «Снарядить корабль» — экипаж
// и груз конвертоплана КТ-6 для заданий (js/basestore.js).
var BaseMenu = (function () {
  'use strict';
  if (!/[?&]mode=manage/.test(location.search) || !window.BASE_PLAN) return null;

  // сдвиг плана на поле карты — как BASE_COL, BASE_ROW в tools/render/outpost_layout.js
  var PLAN_COL = 1, PLAN_ROW = 6;            // сдвиг плана на поле карты (tools/render/outpost_layout.js, BASE_COL и BASE_ROW)
  var MODULES = Object.keys(BASE_PLAN.modules).map(Number).filter(function (module) { return module > 0; });

  var style = document.createElement('style');
  style.textContent = [
    '#base-menu { position: fixed; right: 16px; top: 214px; width: 250px; z-index: 40; font-family: Arial, sans-serif; user-select: none; }',
    '#base-menu .title { background: rgba(14, 20, 18, 0.92); border: 1px solid #4c6a58; padding: 8px 10px; margin-bottom: 6px; }',
    '#base-menu .title b { display: block; font-size: 15px; color: #c8f0a0; letter-spacing: 1px; }',
    '#base-menu .title span { font-size: 11px; color: #8fb894; }',
    '#base-menu button { display: block; width: 100%; margin-bottom: 4px; height: 30px; background: rgba(18, 24, 27, 0.92); border: 1px solid #4c6a58;',
    '  color: #d8e8d0; font: bold 11px Arial, sans-serif; letter-spacing: 1.5px; cursor: pointer; }',
    '#base-menu button:hover, #base-menu button.active { border-color: #e8a33a; color: #ffd28a; }',
    '#base-window { position: fixed; right: 282px; top: 214px; width: 640px; max-height: calc(100vh - 290px); min-height: 160px; overflow: auto; z-index: 40;',
    '  display: none; background: rgba(14, 20, 18, 0.95); border: 1px solid #4c6a58; color: #d8e8d0; font-family: Arial, sans-serif; padding: 10px 14px 14px; }',
    '#base-window.open { display: block; }',
    '#base-window .head { display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid #22382c; padding-bottom: 6px; margin-bottom: 8px; }',
    '#base-window .head b { font-size: 16px; color: #c8f0a0; letter-spacing: 1px; }',
    '#base-window .head span { font-size: 11px; color: #8fb894; cursor: pointer; }',
    '#base-window .facts { font-size: 12px; color: #a8c8a8; margin-bottom: 8px; }',
    '#base-window table { border-collapse: collapse; width: 100%; font-size: 12px; }',
    '#base-window th { text-align: left; color: #8fb894; font-size: 11px; letter-spacing: 1px; border-bottom: 1px solid #22382c; padding: 4px 6px; }',
    '#base-window td { border-bottom: 1px solid #1a2a22; padding: 4px 6px; vertical-align: top; }',
    '#base-window td.number { text-align: right; font-family: Consolas, "DejaVu Sans Mono", monospace; color: #ffc070; }',
    '#base-window td.state { color: #9fe07a; white-space: nowrap; } #base-window td.state.wait { color: #8a959c; }',
    '#base-window .room { color: #d8e8d0; cursor: pointer; border-bottom: 1px dotted #5f7a68; } #base-window .room:hover { color: #ffd28a; }',
    '#base-window .note { margin-top: 10px; font-size: 11px; color: #8a959c; }',
    '#base-window .tabs { display: flex; gap: 4px; margin-bottom: 8px; }',
    '#base-window .tabs span { padding: 4px 10px; border: 1px solid #2c4436; font-size: 11px; letter-spacing: 1px; color: #a8c8a8; cursor: pointer; }',
    '#base-window .tabs span.active { border-color: #e8a33a; color: #ffd28a; }',
    '#base-window h4 { margin: 10px 0 4px; font-size: 12px; letter-spacing: 1px; color: #c8f0a0; }',
    '#base-window tr.group td { color: #c8f0a0; font-weight: bold; padding-top: 8px; border-bottom-color: #2c4436; }',
    '#base-window td.dim, #base-window span.dim { color: #8a959c; }',
    '#base-window .step { display: inline-block; width: 22px; height: 20px; line-height: 18px; text-align: center; border: 1px solid #4c6a58; margin-left: 3px; cursor: pointer; color: #d8e8d0; }',
    '#base-window .step:hover { border-color: #e8a33a; color: #ffd28a; } #base-window .step.off { opacity: 0.35; cursor: default; }',
    '#base-window .bar { height: 8px; background: #1a2a22; border: 1px solid #2c4436; margin: 4px 0 2px; } #base-window .bar i { display: block; height: 100%; background: #e8a33a; }',
    '#base-window .actions span { display: inline-block; padding: 4px 10px; border: 1px solid #4c6a58; margin: 8px 6px 0 0; font-size: 11px; letter-spacing: 1px; cursor: pointer; }',
    '#base-window .actions span:hover { border-color: #e8a33a; color: #ffd28a; }',
    '#base-window input[type=checkbox] { accent-color: #e8a33a; }'
  ].join('\n');
  document.head.appendChild(style);

  var task = document.getElementById('task');
  if (task) task.textContent = 'База «Ямантау»: мирное время, отряд в ангаре';

  var menu = document.createElement('div');
  menu.id = 'base-menu';
  menu.innerHTML = '<div class="title"><b>БАЗА «ЯМАНТАУ»</b><span>Южный Урал · гора Ямантау · ярус −30 м</span></div>' +
    '<button data-section="info">ИНФОРМАЦИЯ ПО БАЗЕ</button>' +
    '<button data-section="ship">СНАРЯДИТЬ КОРАБЛЬ</button>' +
    '<button data-section="view3d">ОСМОТР В 3D</button>' +
    '<button data-section="modules">СТРОИТЬ МОДУЛИ</button>' +
    '<button data-section="research">ИССЛЕДОВАНИЕ</button>' +
    '<button data-section="manufacture">ИЗГОТОВЛЕНИЕ</button>' +
    '<button data-section="transport">ТРАНСПОРТИРОВКА</button>' +
    '<button data-section="globe">ГЛОБУС</button>';
  document.body.appendChild(menu);
  var panel = document.createElement('div');
  panel.id = 'base-window';
  document.body.appendChild(panel);

  function escape(text) { return String(text).replace(/[&<>"]/g, function (symbol) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[symbol]; }); }
  function cellsOf(test) { return BASE_PLAN.rooms.filter(test).reduce(function (sum, room) { return sum + room.width * room.height; }, 0); }
  function roomsOf(module) { return BASE_PLAN.rooms.filter(function (room) { return room.module === module; }); }
  function roomLink(room) {
    return '<span class="room" data-room="' + BASE_PLAN.rooms.indexOf(room) + '">' + escape(room.name) + '</span>';
  }

  function roomByName(name) { return BASE_PLAN.rooms.filter(function (room) { return room.name === name; })[0]; }
  function placeLink(name) { var room = roomByName(name); return room ? roomLink(room) : escape(name); }
  function squad() { return window.__game && window.__game.soldierProfiles ? window.__game.soldierProfiles() : []; }
  function crewNow() {
    var ship = BaseStore.state.ship;
    return ship.configured && ship.crew.length ? ship.crew : squad().slice(0, BaseStore.SHIP_SEATS).map(function (soldier) { return soldier.callsign; });
  }
  var infoTab = 'modules';
  // вкладки «Информации по базе»
  var INFO = {
    modules: function () {
      var rows = '';
      MODULES.forEach(function (module) {
        var rooms = roomsOf(module);
        rows += '<tr class="group"><td colspan="4">' + escape(BASE_PLAN.modules[module]) + ' · ' + rooms.length + ' пом.</td></tr>';
        rooms.forEach(function (room) {
          var area = Math.round(room.width * room.height * BASE_PLAN.cellMeters * BASE_PLAN.cellMeters);
          rows += '<tr><td>' + roomLink(room) + '</td><td class="number">' + area + ' м²</td><td class="number">' + room.width + '×' + room.height + '</td><td class="dim">' + escape(room.note || '') + '</td></tr>';
        });
      });
      return { facts: 'Помещений ' + BASE_PLAN.rooms.length + ', площадь ' + Math.round(BASE_PLAN.total * BASE_PLAN.cellMeters * BASE_PLAN.cellMeters) + ' м². Щелчок по названию — камера к помещению, оно подсвечивается.',
        body: '<table><tr><th>ПОМЕЩЕНИЕ</th><th>ПЛОЩАДЬ</th><th>КЛЕТОК</th><th>НАЗНАЧЕНИЕ</th></tr>' + rows + '</table>' };
    },
    staff: function () {
      var state = BaseStore.state;
      var people = function (list) {
        return '<table><tr><th>ИМЯ</th><th>СПЕЦИАЛЬНОСТЬ</th><th>РАБОЧЕЕ МЕСТО</th><th>КАЮТА</th></tr>' + list.map(function (person) {
          return '<tr><td>' + escape(person.name) + (person.rescued ? ' <span class="dim">· спасён в задании</span>' : '') + '</td><td>' + escape(person.specialty) + '</td><td>' +
            placeLink(person.workplace) + '</td><td>' + placeLink(person.cabin) + '</td></tr>';
        }).join('') + '</table>';
      };
      var crew = crewNow();
      var soldiers = squad().map(function (soldier, index) {
        var aboard = crew.indexOf(soldier.callsign) >= 0;
        return '<tr><td><b>' + escape(soldier.callsign) + '</b> ' + escape(soldier.name) + '</td><td>' + escape(soldier.rank) + ' · ' + escape((soldier.role || '').toLowerCase()) + '</td><td>' +
          placeLink('Каюта ' + (Math.floor(index / 2) + 1)) + '</td><td class="state' + (aboard ? '' : ' wait') + '">' + (aboard ? 'в экипаже КТ-6' : 'на базе') + '</td></tr>';
      }).join('');
      var support = state.support || [];
      return { facts: 'Комсостав, врачи и дежурная смена — ' + BaseStore.commandStaff().length + ', учёных ' + state.scientists.length + ', инженеров ' + state.engineers.length + ', обслуживающего персонала ' + support.length + ', бойцов ' + squad().length + ', шагающих машин 1 (K7). Щелчок по помещению — камера к нему.',
        body: '<h4>КОМСОСТАВ, ВРАЧИ, ДЕЖУРНАЯ СМЕНА</h4>' + people(BaseStore.commandStaff()) + '<h4>УЧЁНЫЕ</h4>' + people(state.scientists) + '<h4>ИНЖЕНЕРЫ</h4>' + people(state.engineers) + '<h4>ОБСЛУЖИВАЮЩИЙ ПЕРСОНАЛ</h4>' + people(support) +
          '<h4>ОТРЯД</h4><table><tr><th>БОЕЦ</th><th>ЗВАНИЕ · РОЛЬ</th><th>КАЮТА</th><th>СОСТОЯНИЕ</th></tr>' + soldiers +
          '<tr><td><b>K7</b> шагающая машина</td><td>автопушка АП-30</td><td>' + placeLink('Цех (стенд K7)') + '</td><td class="state' + (BaseStore.state.ship.mech ? '' : ' wait') + '">' +
          (BaseStore.state.ship.mech ? 'в экипаже КТ-6' : 'на базе') + '</td></tr></table>' };
    },
    store: function () {
      var state = BaseStore.state;
      var types = Object.keys(state.store).concat(Object.keys(state.ship.cargo)).filter(function (type, index, list) { return list.indexOf(type) === index; });
      var items = types.map(function (type) {
        var info = Items.info({ type: type });
        return '<tr><td>' + escape(info.name) + '</td><td class="dim">' + escape(info.note || '') + '</td><td class="number">' + (state.store[type] || 0) + '</td><td class="number">' + (state.ship.cargo[type] || 0) + '</td></tr>';
      }).join('');
      var property = state.property.map(function (entry) { return '<tr><td>' + escape(entry.name) + '</td><td class="number">' + entry.count + ' ' + escape(entry.unit) + '</td></tr>'; }).join('');
      var artifacts = state.artifacts.length ? state.artifacts.map(function (entry) {
        return '<tr><td>' + escape(entry.name) + '</td><td class="number">' + entry.count + '</td><td class="dim">' + escape(entry.from || '') + '</td></tr>';
      }).join('') : '<tr><td colspan="3" class="state wait">нет: артефакты сдаются на склад после задания (эвакуация или зачистка)</td></tr>';
      return { facts: 'Склады: ' + placeLink('Общий склад') + ', ' + placeLink('Оружейная') + ', ' + placeLink('Склад боеприпасов') + ', изолятор образцов (' + placeLink('Бокс 1') + ', ' + placeLink('Бокс 2') + ', ' + placeLink('Бокс 3') + ').',
        body: '<h4>ОРУЖИЕ И СНАРЯЖЕНИЕ</h4><table><tr><th>ПРЕДМЕТ</th><th></th><th>НА СКЛАДЕ</th><th>НА БОРТУ КТ-6</th></tr>' + items + '</table>' +
          '<h4>ИМУЩЕСТВО</h4><table><tr><th>НАИМЕНОВАНИЕ</th><th>КОЛИЧЕСТВО</th></tr>' + property + '</table>' +
          '<h4>АРТЕФАКТЫ</h4><table><tr><th>НАИМЕНОВАНИЕ</th><th>КОЛИЧЕСТВО</th><th>ОТКУДА</th></tr>' + artifacts + '</table>' };
    }
  };

  var SECTIONS = {
    info: function () {
      var tabs = [['modules', 'МОДУЛИ'], ['staff', 'ПЕРСОНАЛ'], ['store', 'СКЛАД']].map(function (tab) {
        return '<span data-tab="' + tab[0] + '"' + (tab[0] === infoTab ? ' class="active"' : '') + '>' + tab[1] + '</span>';
      }).join('');
      var content = INFO[infoTab]();
      return { title: 'ИНФОРМАЦИЯ ПО БАЗЕ', facts: '<div class="tabs">' + tabs + '</div>' + content.facts, body: content.body,
        note: (BaseStore.state.log.length ? 'Последние события: ' + BaseStore.state.log.slice(-3).map(escape).join(' · ') + '. ' : '') + 'Данные базы хранятся в этом браузере.' };
    },
    ship: function () {
      var state = BaseStore.state, crew = crewNow(), weight = BaseStore.cargoWeight();
      var seats = '<table><tr><th>МЕСТО</th><th>БОЕЦ</th><th>ЗВАНИЕ · РОЛЬ</th></tr>' + squad().map(function (soldier) {
        var seat = crew.indexOf(soldier.callsign);
        return '<tr><td><label><input type="checkbox" data-crew="' + escape(soldier.callsign) + '"' + (seat >= 0 ? ' checked' : '') + '> ' + (seat >= 0 ? seat + 1 : '—') + '</label></td><td><b>' +
          escape(soldier.callsign) + '</b> ' + escape(soldier.name) + '</td><td>' + escape(soldier.rank) + ' · ' + escape((soldier.role || '').toLowerCase()) + '</td></tr>';
      }).join('') + '<tr><td><label><input type="checkbox" data-mech="1"' + (state.ship.mech ? ' checked' : '') + '> рампа</label></td><td><b>K7</b> шагающая машина</td><td>автопушка АП-30</td></tr></table>';
      var types = Object.keys(state.store).concat(Object.keys(state.ship.cargo)).filter(function (type, index, list) { return list.indexOf(type) === index; });
      var cargo = '<table><tr><th>ПРЕДМЕТ</th><th>ВЕС</th><th>НА СКЛАДЕ</th><th>НА БОРТУ</th><th></th></tr>' + types.map(function (type) {
        var info = Items.info({ type: type }), stock = state.store[type] || 0, aboard = state.ship.cargo[type] || 0;
        var canAdd = stock > 0 && weight + info.weight <= BaseStore.SHIP_CAPACITY;
        return '<tr><td>' + escape(info.name) + '</td><td class="number">' + info.weight + '</td><td class="number">' + stock + '</td><td class="number">' + aboard + '</td><td>' +
          '<span class="step' + (aboard ? '' : ' off') + '" data-cargo="' + type + '" data-count="-1">−</span><span class="step' + (canAdd ? '' : ' off') + '" data-cargo="' + type + '" data-count="1">+</span></td></tr>';
      }).join('') + '</table>';
      return { title: 'СНАРЯДИТЬ КОРАБЛЬ', facts: 'Конвертоплан КТ-6 в ангаре. Экипаж: ' + crew.length + ' из ' + BaseStore.SHIP_SEATS + ' мест' + (state.ship.mech ? ' и K7 на рампе' : '') +
          '. Груз: ' + weight + ' из ' + BaseStore.SHIP_CAPACITY + '<div class="bar"><i style="width:' + Math.round(weight / BaseStore.SHIP_CAPACITY * 100) + '%"></i></div>',
        body: '<h4>ЭКИПАЖ</h4>' + seats + '<h4>ГРУЗ (ЯЩИК У РАМПЫ)</h4>' + cargo +
          '<div class="actions"><span data-preset="standard">СТАНДАРТНЫЙ НАБОР</span><span data-preset="empty">РАЗГРУЗИТЬ</span></div>',
        note: 'На задании с конвертопланом высаживаются отмеченные бойцы (по местам в порядке посадки) и K7, если он отмечен; груз лежит в ящике рядом с отрядом. ' +
          'Каждый боец летит со своим снаряжением. Груз пока не расходуется: после задания он снова на борту.' };
    },
    modules: function () {
      var rows = MODULES.map(function (module) {
        var rooms = roomsOf(module);
        return '<tr><td>' + escape(BASE_PLAN.modules[module]) + '</td><td>' + rooms.map(roomLink).join(', ') + '</td>' +
          '<td class="number">' + (BASE_PLAN.cells[module] || 0) + '</td><td class="state">построен</td></tr>';
      }).join('');
      return { title: 'МОДУЛИ БАЗЫ', facts: 'Всего ' + BASE_PLAN.total + ' клеток (' + Math.round(BASE_PLAN.total * BASE_PLAN.cellMeters * BASE_PLAN.cellMeters) + ' м²), из них коридоры — ' + (BASE_PLAN.cells[0] || 0) + '. Щелчок по помещению — камера к нему.',
        body: '<table><tr><th>МОДУЛЬ</th><th>ПОМЕЩЕНИЯ</th><th>КЛЕТОК</th><th>СОСТОЯНИЕ</th></tr>' + rows + '</table>',
        note: 'Строительство новых модулей (большой и малый радары, батареи ПВО, фотолаборатория, склады, мастерские, жилые модули) появится вместе с экономикой базы: деньги, сроки, место в скале.' };
    },
    research: function () {
      var topics = [['Плазменный пистолет', 'оружие пришельцев'], ['Энергоячейка', 'питание плазменного оружия'], ['Вскрытие пришельца-стража', 'тело пришельца'], ['Броня из сплавов пришельцев', 'после изучения образцов']];
      return { title: 'ИССЛЕДОВАНИЕ', facts: 'Учёные: ' + BaseStore.state.scientists.length + ' · лаборатории: 3 (' + cellsOf(function (room) { return room.zone === 'labs' || room.zone === 'isolator'; }) + ' клеток с изолятором) · в работе: нет',
        body: '<table><tr><th>ТЕМА</th><th>ЧТО НУЖНО</th><th>СОСТОЯНИЕ</th></tr>' + topics.map(function (topic) {
          return '<tr><td>' + topic[0] + '</td><td>' + topic[1] + '</td><td class="state wait">нет образца</td></tr>'; }).join('') + '</table>',
        note: 'Образцы с заданий пока не доставляются на базу: перенос артефактов из итогов задания — следующий шаг.' };
    },
    manufacture: function () {
      var items = [['Карабин КС-9', 'оружие отряда'], ['Магазин КС-9', '30 патронов'], ['Граната', 'осколочная'], ['Аптечка', 'полевая']];
      return { title: 'ИЗГОТОВЛЕНИЕ', facts: 'Инженеры: ' + BaseStore.state.engineers.length + ' · цех: 1 (стенд ремонта K7) · очередь: пусто',
        body: '<table><tr><th>ИЗДЕЛИЕ</th><th>ОПИСАНИЕ</th><th>СОСТОЯНИЕ</th></tr>' + items.map(function (item) {
          return '<tr><td>' + item[0] + '</td><td>' + item[1] + '</td><td class="state">можно</td></tr>'; }).join('') + '</table>',
        note: 'Заказ изделий появится вместе с экономикой базы: стоимость, срок, склад.' };
    },
    transport: function () {
      return { title: 'ТРАНСПОРТИРОВКА', facts: 'Грузовой лифт (платформа 5×5 м): свободен · конвертоплан КТ-6: в ангаре',
        body: '<table><tr><th>ГРУЗ</th><th>ОТКУДА</th><th>КУДА</th><th>ПРИБЫТИЕ</th></tr><tr><td colspan="4" class="state wait">грузов в пути нет</td></tr></table>',
        note: 'Доставка закупок и перевозка между базами появятся вместе с экономикой.' };
    },
  };

  var openSection = null;
  function show(name, refresh) {
    if (name === 'globe') { location.href = 'globe.html'; return; }
    if (name === 'view3d') { location.href = 'base3d.html'; return; }
    if (openSection === name && !refresh) { close(); return; }
    var scroll = panel.scrollTop;
    var content = SECTIONS[name]();
    panel.innerHTML = '<div class="head"><b>' + content.title + '</b><span data-close="1">ЗАКРЫТЬ ✕</span></div>' +
      '<div class="facts">' + content.facts + '</div>' + content.body + '<div class="note">' + content.note + '</div>';
    panel.className = 'open';
    openSection = name;
    if (refresh) panel.scrollTop = scroll;
    Array.prototype.forEach.call(menu.querySelectorAll('button'), function (button) { button.classList.toggle('active', button.dataset.section === name); });
  }
  // экипаж — в порядке списка отряда; хотя бы один боец остаётся отмеченным
  function updateCrew() {
    var checked = Array.prototype.filter.call(panel.querySelectorAll('[data-crew]'), function (box) { return box.checked; }).map(function (box) { return box.dataset.crew; });
    if (!checked.length) { show('ship', true); return; }
    var mechBox = panel.querySelector('[data-mech]');
    BaseStore.setCrew(checked, mechBox ? mechBox.checked : true);
    show('ship', true);
  }
  function preset(name) {
    var cargo = BaseStore.state.ship.cargo;
    Object.keys(cargo).forEach(function (type) { BaseStore.moveCargo(type, -cargo[type]); });
    if (name === 'standard') [['carbineMag', 6], ['grenade', 4], ['medkit', 2]].forEach(function (entry) { for (var copy = 0; copy < entry[1]; copy++) BaseStore.moveCargo(entry[0], 1); });
    BaseStore.setCrew(crewNow(), BaseStore.state.ship.mech);
    show('ship', true);
  }
  function close() {
    panel.className = '';
    openSection = null;
    Array.prototype.forEach.call(menu.querySelectorAll('button'), function (button) { button.classList.remove('active'); });
  }
  menu.addEventListener('click', function (event) {
    var button = event.target.closest('button');
    if (button) show(button.dataset.section);
  });
  panel.addEventListener('click', function (event) {
    if (event.target.dataset.close) { close(); return; }
    if (event.target.dataset.tab) { infoTab = event.target.dataset.tab; show('info', true); panel.scrollTop = 0; return; }
    if (event.target.dataset.cargo && !event.target.classList.contains('off')) {
      BaseStore.moveCargo(event.target.dataset.cargo, Number(event.target.dataset.count));
      BaseStore.setCrew(crewNow(), BaseStore.state.ship.mech);
      show('ship', true); return;
    }
    if (event.target.dataset.preset) { preset(event.target.dataset.preset); return; }
    var link = event.target.closest('[data-room]');
    if (!link || !window.__game) return;
    var room = BASE_PLAN.rooms[Number(link.dataset.room)];
    var level = room.floor || 0;
    // помещение второго уровня (жилая зона) — вид переходит на его уровень
    var view = window.__game.view;
    if (window.__game.setView && view && view.level !== level) window.__game.setView(level, view.cut);
    window.__game.centerOn(PLAN_COL + room.x + room.width / 2, PLAN_ROW + room.y + room.height / 2, level * BASE_PLAN.levelMeters);
    // помещение — посередине свободной части экрана слева от окна, а не под окном
    var camera = window.__game.camera, left = panel.getBoundingClientRect().left;
    if (camera && left > 200) camera.x += (window.innerWidth - left) / 2;
    if (window.__game.highlightArea) window.__game.highlightArea(PLAN_COL + room.x, PLAN_ROW + room.y, room.width, room.height, level, 3);
  });
  panel.addEventListener('change', function (event) {
    if (event.target.dataset.crew || event.target.dataset.mech) updateCrew();
  });
  // щелчки и колесо в меню не доходят до карты; Esc закрывает окно раздела
  [menu, panel].forEach(function (element) {
    ['mousedown', 'mouseup', 'wheel', 'contextmenu'].forEach(function (name) { element.addEventListener(name, function (event) { event.stopPropagation(); }); });
  });
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && openSection) { close(); event.stopPropagation(); }
  }, true);

  return { show: show, close: close, get open() { return openSection; } };
})();
