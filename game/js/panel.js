// Нижняя панель: мини-карта, портрет, характеристики, кнопки действий, режим огня, оружие.
// Макет 1280x260 пикселей; в окне уже 1280 панель целиком уменьшается.
var Panel = (function () {
  'use strict';

  var DESIGN_W = 1280, DESIGN_H = 260;
  var root = document.getElementById('panel');
  var inner = document.createElement('div');
  inner.className = 'panel-inner';
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
    endTurn: 'M-8,-10 v20 M-8,-10 h15 l-4,5 l4,5 h-15'
  };
  var BUTTONS = [
    { id: 'step', label: 'ШАГ', key: '1' },
    { id: 'kneel', label: 'ПРИСЕСТЬ', key: '2' },
    { id: 'aim', label: 'ПРИЦЕЛ', key: '3' },
    { id: 'reload', label: 'ЗАРЯДИТЬ', key: '4' },
    { id: 'grenade', label: 'ГРАНАТА', key: '5', disabled: 'Пока не работает' },
    { id: 'gear', label: 'СНАРЯЖ.', key: '6', disabled: 'Пока не работает' },
    { id: 'next', label: 'ДАЛЕЕ', key: '7' },
    { id: 'up', label: 'ВЫШЕ', key: '8', disabled: 'На карте один уровень' },
    { id: 'down', label: 'НИЖЕ', key: '9', disabled: 'На карте один уровень' },
    { id: 'endTurn', label: 'КОНЕЦ ХОДА', key: '0' }
  ];

  function bar(id, label) {
    return '<div class="stat"><div class="stat-head"><span class="stat-label" id="' + id + '-label">' + label + '</span>' +
      '<span class="stat-value"><b id="' + id + '-value"></b><span id="' + id + '-max"></span></span></div>' +
      '<div class="stat-track"><div class="stat-fill" id="' + id + '-fill"></div><div class="stat-ticks"></div></div></div>';
  }

  var buttonsHtml = BUTTONS.map(function (button) {
    return '<div class="action' + (button.disabled ? ' disabled' : '') + '" data-action="' + button.id + '" title="' +
      (button.disabled || button.label) + '"><div class="action-box"><span class="action-key">' + button.key + '</span>' +
      '<svg viewBox="-16 -16 32 32" width="32" height="32"><path d="' + ICONS[button.id] + '"/></svg></div>' +
      '<div class="action-label" id="label-' + button.id + '">' + button.label + '</div></div>';
  }).join('');

  inner.innerHTML =
    '<div class="box minimap"><canvas id="minimap" width="216" height="216"></canvas><span class="caption">КВАДРАТ 47-Б</span></div>' +
    '<div class="box portrait"><img id="portrait" alt=""><div class="scan"></div>' +
      '<div class="nameplate"><span id="callsign"></span><span id="rank"></span></div></div>' +
    '<div class="stats"><div class="unit-name" id="unit-name"></div><div class="unit-sub" id="unit-sub"></div>' +
      bar('tu', 'ОЧКИ ДЕЙСТВИЯ') + bar('hp', 'ЗДОРОВЬЕ') + bar('st', 'ВЫНОСЛИВОСТЬ') + bar('mo', 'МОРАЛЬ') +
      '<div class="chips"><span class="chip" id="chip-stance"></span><span class="chip green" id="chip-optics"></span>' +
      '<span class="chip" id="chip-combat"></span></div></div>' +
    '<div class="actions"><div class="action-grid">' + buttonsHtml + '</div>' +
      '<div class="box firemodes"><div class="box-title">РЕЖИМ ОГНЯ</div><div id="modes"></div></div></div>' +
    '<div class="box weapon"><div class="weapon-name" id="weapon-name"></div><div class="weapon-note" id="weapon-note"></div>' +
      '<div class="no-weapon" id="no-weapon">НЕТ ОРУЖИЯ</div>' +
      '<img id="weapon-image" alt=""><div class="ammo"><div><div class="ammo-label">МАГАЗИН</div>' +
      '<div class="ammo-reserve" id="ammo-reserve"></div></div><div class="ammo-count" id="ammo-count"></div></div>' +
      '<div class="ammo-pips" id="ammo-pips"></div></div>';

  var element = function (id) { return document.getElementById(id); };

  // ---------------- кнопки ----------------
  Array.prototype.forEach.call(inner.querySelectorAll('.action'), function (node) {
    node.addEventListener('click', function () {
      var action = node.getAttribute('data-action');
      if (node.classList.contains('disabled')) return;
      if (action !== 'step') Game.action(action);
    });
  });

  var modesElement = element('modes');   // строки режимов заполняет update()

  // ---------------- мини-карта ----------------
  var minimap = element('minimap');
  var minimapContext = minimap.getContext('2d');
  var mapBackground = null;      // уменьшенная копия фона
  var mapScale = 1, mapOffsetX = 0, mapOffsetY = 0;
  var fieldImage = new Image();
  fieldImage.onload = function () {
    mapScale = Math.min(minimap.width / FIELD.width, minimap.height / FIELD.height) * 1.32;
    mapOffsetX = (minimap.width - FIELD.width * mapScale) / 2;
    mapOffsetY = (minimap.height - FIELD.height * mapScale) / 2 + 14;
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
  fieldImage.src = MAP.minimap;

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

  function update() {
    var unit = Game.selected;
    setClass(inner, 'no-unit', !unit);
    setText('turn-number', ('0' + Game.turn).slice(-2));
    setText('toast', Game.message);
    setClass(element('toast'), 'visible', !!Game.message);
    drawMinimap();
    if (!unit) {
      setText('unit-name', 'Боец не выбран');
      setText('unit-sub', 'Выберите бойца щелчком или клавишей Пробел');
      return;
    }
    setImage('portrait', 'assets/ui/portrait_' + unit.portrait + '.png');
    setClass(inner, 'unarmed', !unit.weapon);
    if (unit.weapon) setImage('weapon-image', 'assets/ui/weapon_' + unit.camo + '.png');
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
    setText('chip-stance', unit.canKneel ? 'СТОЙКА: ' + (unit.kneeling ? 'НА КОЛЕНЕ' : standing) : (unit.kind === 'mech' ? 'ХОДОВАЯ: ОК' : 'СТОЙКА: ' + standing));
    setText('chip-optics', unit.optics);
    setText('chip-combat', 'БРОНЯ ' + (unit.armor || 0) + (unit.weaponType ? ' · ТОЧН ' + unit.accuracy : '') + (unit.reactions ? ' · РЕАК ' + unit.reactions : ''));
    setText('label-kneel', unit.kneeling ? 'ВСТАТЬ' : 'ПРИСЕСТЬ');
    setText('weapon-name', unit.weapon || (unit.kind === 'mech' ? 'ВООРУЖЕНИЕ' : 'ОРУЖИЕ'));
    setText('weapon-note', unit.weapon ? unit.weaponNote : (unit.kind === 'mech' ? 'НЕ УСТАНОВЛЕНО' : 'ТОЛЬКО ТЕЛО, БЕЗ СНАРЯЖЕНИЯ'));
    if (unit.weapon) {
      setText('ammo-reserve', 'ЗАПАС: ' + unit.reserve);
      setHtml('ammo-count', unit.ammo + '<span>/' + unit.magazine + '</span>');
      var pips = '';
      for (var index = 0; index < unit.magazine; index++) pips += '<i' + (index < unit.ammo ? ' class="on"' : '') + '></i>';
      setHtml('ammo-pips', pips);
    }
    // режимы огня оружия юнита; шанс — по цели под курсором в режиме прицела
    var chances = Game.aimChances();
    var modes = Game.modesOf(unit).map(function (mode, index) {
      var classes = 'mode' + (unit.weapon && index === unit.fireMode ? ' active' : '') + (!unit.weapon || mode.cost > unit.timeUnits ? ' short' : '');
      return '<div class="' + classes + '" data-mode="' + index + '"><span class="mode-name">' + mode.name + '</span>' +
        '<span class="mode-cost">' + mode.cost + ' ОД</span><span class="mode-chance">' + (chances ? chances[index] + '%' : '—') + '</span></div>';
    }).join('');
    setHtml('modes', modes);
    // кнопки, на которые не хватает ОД
    var tu = unit.timeUnits;
    setClass(inner.querySelector('[data-action="kneel"]'), 'short', !unit.canKneel || (unit.kneeling ? Game.COST.stand : Game.COST.kneel) > tu);
    setClass(inner.querySelector('[data-action="reload"]'), 'short', !unit.weapon || Game.COST.reload > tu || unit.ammo >= unit.magazine || unit.reserve <= 0);
    setClass(inner.querySelector('[data-action="aim"]'), 'short', !unit.weapon || unit.ammo <= 0 || Game.cheapestCost(unit) > tu);
    setClass(inner.querySelector('[data-action="aim"]'), 'active', Game.aiming);
    setClass(inner.querySelector('[data-action="step"]'), 'active', !Game.aiming);
    setClass(inner, 'busy', Game.busy);
  }

  modesElement.addEventListener('click', function (event) {
    var node = event.target.closest ? event.target.closest('.mode') : null;
    if (node) Game.setFireMode(Number(node.getAttribute('data-mode')));
  });

  // ---------------- масштаб под ширину окна ----------------
  function layout() {
    var scale = Math.min(1, window.innerWidth / DESIGN_W);
    root.style.height = Math.round(DESIGN_H * scale) + 'px';
    inner.style.transform = 'scale(' + scale + ')';
    inner.style.left = Math.round((window.innerWidth - DESIGN_W * scale) / 2) + 'px';
  }
  layout();

  return { update: update, layout: layout };
})();
