// Меню базы «Ямантау» (base.html?mode=manage): справа на карте — разделы, как на экране базы в UFO.
// Пока это экраны-заготовки: экономики (денег, времени, очередей) в игре ещё нет. «Строить модули» показывает
// построенные модули по плану (js/base_plan.js) и по щелчку на помещении ведёт к нему камеру.
var BaseMenu = (function () {
  'use strict';
  if (!/[?&]mode=manage/.test(location.search) || !window.BASE_PLAN) return null;

  // сдвиг плана на поле карты — как BASE_COL, BASE_ROW в tools/render/outpost_layout.js
  var PLAN_COL = 1, PLAN_ROW = 12;

  var style = document.createElement('style');
  style.textContent = [
    '#base-menu { position: fixed; right: 16px; top: 214px; width: 250px; z-index: 40; font-family: Arial, sans-serif; user-select: none; }',
    '#base-menu .title { background: rgba(14, 20, 18, 0.92); border: 1px solid #4c6a58; padding: 8px 10px; margin-bottom: 6px; }',
    '#base-menu .title b { display: block; font-size: 15px; color: #c8f0a0; letter-spacing: 1px; }',
    '#base-menu .title span { font-size: 11px; color: #8fb894; }',
    '#base-menu button { display: block; width: 100%; margin-bottom: 4px; height: 30px; background: rgba(18, 24, 27, 0.92); border: 1px solid #4c6a58;',
    '  color: #d8e8d0; font: bold 11px Arial, sans-serif; letter-spacing: 1.5px; cursor: pointer; }',
    '#base-menu button:hover, #base-menu button.active { border-color: #e8a33a; color: #ffd28a; }',
    '#base-window { position: fixed; right: 282px; top: 214px; width: 600px; max-height: calc(100vh - 500px); min-height: 160px; overflow: auto; z-index: 40;',
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
    '#base-window .note { margin-top: 10px; font-size: 11px; color: #8a959c; }'
  ].join('\n');
  document.head.appendChild(style);

  var task = document.getElementById('task');
  if (task) task.textContent = 'База «Ямантау»: мирное время, отряд в ангаре';

  var menu = document.createElement('div');
  menu.id = 'base-menu';
  menu.innerHTML = '<div class="title"><b>БАЗА «ЯМАНТАУ»</b><span>Южный Урал · гора Ямантау · ярус −30 м</span></div>' +
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

  var SECTIONS = {
    modules: function () {
      var rows = [1, 2, 3, 4, 5, 6, 7, 8].map(function (module) {
        var rooms = roomsOf(module);
        return '<tr><td>' + escape(BASE_PLAN.modules[module]) + '</td><td>' + rooms.map(roomLink).join(', ') + '</td>' +
          '<td class="number">' + (BASE_PLAN.cells[module] || 0) + '</td><td class="state">построен</td></tr>';
      }).join('');
      return { title: 'МОДУЛИ БАЗЫ', facts: 'Всего ' + BASE_PLAN.total + ' клеток (' + Math.round(BASE_PLAN.total * BASE_PLAN.cellMeters * BASE_PLAN.cellMeters) + ' м²), из них коридоры — ' + (BASE_PLAN.cells[0] || 0) + '. Щелчок по помещению — камера к нему.',
        body: '<table><tr><th>МОДУЛЬ</th><th>ПОМЕЩЕНИЯ</th><th>КЛЕТОК</th><th>СОСТОЯНИЕ</th></tr>' + rows + '</table>',
        note: 'Строительство новых модулей появится вместе с экономикой базы: деньги, сроки, второй ярус.' };
    },
    research: function () {
      var topics = [['Плазменный пистолет', 'оружие пришельцев'], ['Энергоячейка', 'питание плазменного оружия'], ['Вскрытие пришельца-стража', 'тело пришельца'], ['Броня из сплавов пришельцев', 'после изучения образцов']];
      return { title: 'ИССЛЕДОВАНИЕ', facts: 'Учёные: 8 · лаборатории: 2 (' + cellsOf(function (room) { return room.module === 5; }) + ' клеток с изолятором) · в работе: нет',
        body: '<table><tr><th>ТЕМА</th><th>ЧТО НУЖНО</th><th>СОСТОЯНИЕ</th></tr>' + topics.map(function (topic) {
          return '<tr><td>' + topic[0] + '</td><td>' + topic[1] + '</td><td class="state wait">нет образца</td></tr>'; }).join('') + '</table>',
        note: 'Образцы с заданий пока не доставляются на базу: перенос артефактов из итогов задания — следующий шаг.' };
    },
    manufacture: function () {
      var items = [['Карабин КС-9', 'оружие отряда'], ['Магазин КС-9', '30 патронов'], ['Граната', 'осколочная'], ['Аптечка', 'полевая']];
      return { title: 'ИЗГОТОВЛЕНИЕ', facts: 'Инженеры: 8 · цех: 1 (стенд ремонта K7) · очередь: пусто',
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
  function show(name) {
    if (name === 'globe') { location.href = 'globe.html'; return; }
    if (openSection === name) { close(); return; }
    var content = SECTIONS[name]();
    panel.innerHTML = '<div class="head"><b>' + content.title + '</b><span data-close="1">ЗАКРЫТЬ ✕</span></div>' +
      '<div class="facts">' + content.facts + '</div>' + content.body + '<div class="note">' + content.note + '</div>';
    panel.className = 'open';
    openSection = name;
    Array.prototype.forEach.call(menu.querySelectorAll('button'), function (button) { button.classList.toggle('active', button.dataset.section === name); });
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
    var link = event.target.closest('[data-room]');
    if (!link || !window.__game) return;
    var room = BASE_PLAN.rooms[Number(link.dataset.room)];
    window.__game.centerOn(PLAN_COL + room.x + room.width / 2, PLAN_ROW + room.y + room.height / 2, 0);
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
