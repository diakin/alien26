// Настройки игры: окно (кнопка «НАСТРОЙКИ» слева вверху, клавиши F10 или O) и хранение в браузере (localStorage).
// Значения читаются из Settings.values; изменение применяется сразу, подписчики получают Settings.onChange.
var Settings = (function () {
  'use strict';

  var STORAGE_KEY = 'aliens26.settings';
  var FIELDS = [
    { group: 'ИГРА' },
    { key: 'moveSpeed', label: 'Скорость перемещения юнитов', type: 'range', min: 0.5, max: 6, step: 0.25, value: 3, format: function (value) { return '×' + value.toFixed(2).replace(/0$/, ''); } },
    { key: 'aiSpeed', label: 'Скорость хода пришельцев', type: 'range', min: 0.5, max: 3, step: 0.25, value: 1, format: function (value) { return '×' + value.toFixed(2).replace(/0$/, ''); } },
    { key: 'followAliens', label: 'Камера следит за пришельцами в их ход', type: 'check', value: true },
    { key: 'damageNumbers', label: 'Цифры урона над целью', type: 'check', value: true },
    { key: 'fog', label: 'Туман войны (карты из тайлов)', type: 'check', value: true },
    { key: 'inspectAliens', label: 'Просмотр пришельцев: Ctrl+щелчок или ПКМ по метке', type: 'check', value: true },
    { group: 'ЗВУК' },
    { key: 'soundVolume', label: 'Громкость звуков', type: 'range', min: 0, max: 100, step: 5, value: 70, format: function (value) { return value + '%'; } },
    { key: 'musicVolume', label: 'Громкость музыки', type: 'range', min: 0, max: 100, step: 5, value: 45, format: function (value) { return value + '%'; } },
    { key: 'musicTheme', label: 'Музыка', type: 'select', value: 0, options: [[0, 'По обстановке'], [1, 'Только общая'], [2, 'Только тактическая']] },
    { key: 'musicSet', label: 'Боевая музыка', type: 'select', value: 0, options: [[0, 'Высадка и штурм'], [1, 'Фоновая (как в UFO)'], [2, 'Фоновая и ритмичная']] },
    { key: 'musicPause', label: 'Паузы в музыке', type: 'select', value: 30, options: [[30, '30 с играет, 30 с тишина'], [60, '30 с играет, 60 с тишина'], [0, 'Без пауз']] },
    { key: 'ambienceVolume', label: 'Громкость фона (ветер)', type: 'range', min: 0, max: 100, step: 5, value: 35, format: function (value) { return value + '%'; } },
    { group: 'ГРАФИКА' },
    { key: 'renderScale', label: 'Разрешение отрисовки', type: 'select', value: 1, options: [[1, 'Полное'], [0.75, '75 % — быстрее'], [0.5, '50 % — для слабых машин']] },
    { key: 'fullscreen', label: 'Полный экран', type: 'check', value: false, live: true },
    { key: 'showHelp', label: 'Подсказки управления справа вверху', type: 'check', value: true },
    { key: 'showGrid', label: 'Сетка клеток', type: 'check', value: false }
  ];
  var values = {};
  FIELDS.forEach(function (field) { if (field.key) values[field.key] = field.value; });
  try {
    var saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}');
    // версия 2: скорость перемещения по умолчанию ×3 — старое сохранённое значение не переносится
    if (!saved.version || saved.version < 2) delete saved.moveSpeed;
    // версия 3: регулятор «музыка и фон» разделён на музыку и фон — старое значение переходит к фону
    if (!saved.version || saved.version < 3) { if ('musicVolume' in saved) saved.ambienceVolume = saved.musicVolume; delete saved.musicVolume; }
    Object.keys(saved).forEach(function (key) { if (key in values && key !== 'fullscreen') values[key] = saved[key]; });
  } catch (error) { /* хранилище недоступно — значения по умолчанию */ }
  values.fullscreen = false;               // полный экран браузер включает только по действию игрока

  var listeners = [];
  function onChange(listener) { listeners.push(listener); listener(values, null); }
  function save() {
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(Object.assign({ version: 3 }, values))); } catch (error) { /* не сохраняем */ }
  }
  function set(key, value) {
    values[key] = value;
    save();
    listeners.forEach(function (listener) { listener(values, key); });
  }

  // ---------------- окно ----------------
  var style = document.createElement('style');
  style.textContent = [
    '#settings-button { position: absolute; left: 16px; top: 92px; z-index: 5; height: 24px; padding: 0 10px; background: rgba(10, 13, 15, 0.88); border: 1px solid #3a454b;',
    '  color: #cfd8dc; font: bold 10px Arial, sans-serif; letter-spacing: 1px; cursor: pointer; }',
    '#settings-button:hover { border-color: #e8a33a; color: #ffd28a; }',
    '#settings { position: fixed; inset: 0; z-index: 60; display: none; background: rgba(4, 6, 7, 0.3); font-family: Arial, sans-serif; user-select: none; }',
    '#settings.open { display: block; }',
    '#settings .sheet { position: absolute; left: 50%; top: 50%; width: 560px; transform: translate(-50%, -50%); transform-origin: 50% 50%; background: rgba(18, 24, 27, 0.97);',
    '  border: 1px solid #4c5b62; box-shadow: 0 12px 40px rgba(0,0,0,0.6); color: #e4e8ea; padding: 16px 22px 14px; }',
    '#settings h2 { margin: 0 0 6px; font-size: 20px; letter-spacing: 1px; }',
    '#settings .group { margin: 14px 0 4px; font-size: 10px; font-weight: bold; letter-spacing: 1.5px; color: #8fd18a; border-bottom: 1px solid #2f3a3f; padding-bottom: 4px; }',
    '#settings .row { display: flex; align-items: center; min-height: 29px; font-size: 13px; }',
    '#settings .row label { flex: 1; }',
    '#settings input[type=range] { width: 190px; accent-color: #e8a33a; }',
    '#settings .value { width: 52px; text-align: right; font: bold 12px Consolas, "DejaVu Sans Mono", monospace; color: #ffd28a; }',
    '#settings select { width: 244px; height: 26px; background: #0d1214; color: #e4e8ea; border: 1px solid #3a454b; font-size: 12px; }',
    '#settings input[type=checkbox] { width: 18px; height: 18px; accent-color: #e8a33a; margin-right: 226px; }',
    '#settings .note { font-size: 11px; color: #8a959c; margin-top: 12px; line-height: 15px; }',
    '#settings .buttons { display: flex; justify-content: flex-end; gap: 8px; margin-top: 14px; }',
    '#settings button { height: 30px; padding: 0 16px; background: #161b1e; border: 1px solid #3a454b; color: #e4e8ea; font: bold 12px Arial, sans-serif; letter-spacing: 1px; cursor: pointer; }',
    '#settings button:hover { border-color: #e8a33a; color: #ffd28a; }'
  ].join('\n');
  document.head.appendChild(style);

  var button = document.createElement('button');
  button.id = 'settings-button';
  button.textContent = 'НАСТРОЙКИ (F10)';
  document.body.appendChild(button);

  var root = document.createElement('div');
  root.id = 'settings';
  document.body.appendChild(root);

  function render() {
    var html = '<div class="sheet"><h2>Настройки</h2>';
    FIELDS.forEach(function (field) {
      if (field.group) { html += '<div class="group">' + field.group + '</div>'; return; }
      var value = values[field.key], id = 'setting-' + field.key;
      html += '<div class="row"><label for="' + id + '">' + field.label + '</label>';
      if (field.type === 'range') {
        html += '<input type="range" id="' + id + '" data-key="' + field.key + '" min="' + field.min + '" max="' + field.max + '" step="' + field.step + '" value="' + value + '">' +
          '<span class="value" id="' + id + '-value">' + field.format(value) + '</span>';
      } else if (field.type === 'select') {
        html += '<select id="' + id + '" data-key="' + field.key + '">' + field.options.map(function (option) {
          return '<option value="' + option[0] + '"' + (option[0] === value ? ' selected' : '') + '>' + option[1] + '</option>';
        }).join('') + '</select>';
      } else {
        html += '<input type="checkbox" id="' + id + '" data-key="' + field.key + '"' + (value ? ' checked' : '') + '>';
      }
      html += '</div>';
    });
    html += '<div class="note">«По обстановке»: общая тема, пока тихо; боевая — когда идёт перестрелка или пришелец и боец видят друг друга; ' +
      'с началом или концом боя новая тема включается сразу, даже во время паузы. ' +
      'Разрешение отрисовки ниже полного снижает нагрузку на видеокарту, картинка становится мягче.</div>' +
      '<div class="buttons"><button data-do="reset">ПО УМОЛЧАНИЮ</button><button data-do="close">ГОТОВО</button></div></div>';
    root.innerHTML = html;
  }
  function fieldOf(key) { return FIELDS.filter(function (field) { return field.key === key; })[0]; }
  root.addEventListener('input', function (event) {
    var key = event.target.getAttribute('data-key');
    if (!key) return;
    var field = fieldOf(key), value;
    if (field.type === 'range') { value = Number(event.target.value); document.getElementById('setting-' + key + '-value').textContent = field.format(value); }
    else if (field.type === 'select') value = Number(event.target.value);
    else value = event.target.checked;
    if (key === 'fullscreen') { setFullscreen(value); return; }
    set(key, value);
  });
  root.addEventListener('click', function (event) {
    var action = event.target.getAttribute && event.target.getAttribute('data-do');
    if (action === 'close') close();
    else if (action === 'reset') {
      FIELDS.forEach(function (field) { if (field.key && field.key !== 'fullscreen') set(field.key, field.value); });
      render();
    } else if (event.target === root) close();
  });

  function setFullscreen(on) {
    try {
      if (on && !document.fullscreenElement) document.documentElement.requestFullscreen();
      else if (!on && document.fullscreenElement) document.exitFullscreen();
    } catch (error) { /* браузер не разрешил */ }
  }
  document.addEventListener('fullscreenchange', function () {
    values.fullscreen = !!document.fullscreenElement;
    var box = document.getElementById('setting-fullscreen');
    if (box) box.checked = values.fullscreen;
    listeners.forEach(function (listener) { listener(values, 'fullscreen'); });
  });

  function open() { render(); root.classList.add('open'); }
  function close() { root.classList.remove('open'); }
  function isOpen() { return root.classList.contains('open'); }
  button.addEventListener('click', function () { if (isOpen()) close(); else open(); });
  window.addEventListener('keydown', function (event) {
    if (event.key === 'F10' || ((event.key === 'o' || event.key === 'O' || event.key === 'щ' || event.key === 'Щ') && !isOpen() && !(window.Inventory && Inventory.isOpen()))) {
      event.preventDefault();
      if (isOpen()) close(); else open();
      event.stopImmediatePropagation();
      return;
    }
    if (isOpen()) {
      if (event.key === 'Escape') close();
      event.stopImmediatePropagation();         // пока окно открыто, игра клавиш не получает
    }
  }, true);

  return { values: values, set: set, onChange: onChange, open: open, close: close, isOpen: isOpen };
})();
