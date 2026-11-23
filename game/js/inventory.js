// Экран снаряжения, как в UFO: ячейки на теле бойца, фигура в полный рост, земля под ногами.
// Предмет переносится мышью; при переносе подсвечивается место (зелёным — можно, красным — нельзя) и цена в ОД.
// Открывается щелчком по портрету, кнопкой «СНАРЯЖ.» или клавишами 6 / I. Esc, Enter или «ОК» — закрыть,
// стрелки ◀ ▶ (и клавиши ← →) — соседний боец.
var Inventory = (function () {
  'use strict';

  var CELL = Items.CELL;
  // левый верхний угол каждой ячейки в окне (пиксели); правая рука бойца — слева, как в UFO
  var LAYOUT = {
    rightShoulder: [40, 92], leftShoulder: [330, 92],
    rightHand: [40, 152], leftHand: [330, 152],
    rightLeg: [40, 300], leftLeg: [330, 300],
    backpack: [520, 92], belt: [520, 260],
    ground: [20, 398]
  };
  var FIGURE = [148, 96];
  var WIDTH = 720, HEIGHT = 556;

  var style = document.createElement('style');
  style.textContent = [
    '#inventory { position: fixed; inset: 0; background: rgba(4, 6, 7, 0.28); z-index: 50; display: none; user-select: none; font-family: Arial, sans-serif; }',
    '#inventory.open { display: block; }',
    '#inventory .sheet { position: absolute; left: 50%; top: 50%; width: ' + WIDTH + 'px; height: ' + HEIGHT + 'px; margin: -' + HEIGHT / 2 + 'px 0 0 -' + WIDTH / 2 + 'px;',
    '  background: linear-gradient(rgba(24, 31, 35, 0.96), rgba(14, 18, 21, 0.96)); border: 1px solid #4c5b62; box-shadow: 0 0 0 1px #000, 0 12px 40px rgba(0,0,0,0.6); color: #e4e8ea; transform-origin: 50% 50%; }',
    '#inventory .title { position: absolute; left: 20px; top: 14px; font-size: 21px; font-weight: bold; }',
    '#inventory .subtitle { position: absolute; left: 20px; top: 42px; font-size: 10px; font-weight: bold; letter-spacing: 1px; color: #8a959c; }',
    '#inventory .numbers { position: absolute; right: 150px; top: 16px; text-align: right; font: 13px Consolas, "DejaVu Sans Mono", monospace; line-height: 19px; color: #8a959c; }',
    '#inventory .numbers b { color: #e4e8ea; }',
    '#inventory .numbers .over { color: #ff7a5a; }',
    '#inventory .buttons { position: absolute; right: 16px; top: 14px; display: flex; gap: 6px; }',
    '#inventory button { height: 30px; min-width: 34px; background: #161b1e; border: 1px solid #3a454b; color: #e4e8ea; font: bold 12px Arial, sans-serif; letter-spacing: 1px; cursor: pointer; }',
    '#inventory button:hover { border-color: #e8a33a; color: #ffd28a; }',
    '#inventory .label { position: absolute; font-size: 10px; font-weight: bold; letter-spacing: 1px; color: #8fd18a; white-space: nowrap; }',
    '#inventory .slot { position: absolute; border: 1px solid #6a7b84; background-color: #56636a;',
    '  background-image: linear-gradient(#73838b 1px, transparent 1px), linear-gradient(90deg, #73838b 1px, transparent 1px); background-size: ' + CELL + 'px ' + CELL + 'px;',
    '  box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.35); }',
    '#inventory .slot.single { background-image: none; }',
    '#inventory .figure { position: absolute; height: 230px; filter: drop-shadow(0 6px 6px rgba(0,0,0,0.6)); pointer-events: none; }',
    '#inventory .item { position: absolute; cursor: grab; }',
    '#inventory .item:hover { outline: 1px solid rgba(232, 163, 58, 0.7); }',
    '#inventory .item.dragging { cursor: grabbing; outline: none; z-index: 5; pointer-events: none; opacity: 0.9; }',
    '#inventory .item canvas { display: block; filter: drop-shadow(0 0 1px rgba(235, 240, 242, 0.9)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.6)); }',
    '#inventory .rounds { position: absolute; right: 2px; bottom: 1px; font: bold 10px Consolas, monospace; color: #ffd28a; text-shadow: 0 0 2px #000, 0 0 2px #000; }',
    '#inventory .target { position: absolute; pointer-events: none; border: 2px solid; box-sizing: border-box; }',
    '#inventory .target.ok { border-color: #7ce07a; background: rgba(124, 224, 122, 0.12); }',
    '#inventory .target.bad { border-color: #ff6a50; background: rgba(255, 106, 80, 0.12); }',
    '#inventory .info { position: absolute; left: 20px; right: 20px; bottom: 12px; height: 18px; font-size: 12px; font-weight: bold; letter-spacing: 0.4px; color: #bfd0d8; }',
    '#inventory .info .cost { color: #ffd28a; }',
    '#inventory .info .warn { color: #ff8a6a; }',
    '#inventory .more { position: absolute; font-size: 10px; font-weight: bold; color: #e8a33a; }'
  ].join('\n');
  document.head.appendChild(style);

  var root = document.createElement('div');
  root.id = 'inventory';
  root.innerHTML = '<div class="sheet"><div class="title"></div><div class="subtitle"></div><div class="numbers"></div>' +
    '<div class="buttons"><button data-do="prev" title="Предыдущий боец (←)">◀</button><button data-do="next" title="Следующий боец (→)">▶</button>' +
    '<button data-do="close" title="Закрыть (Esc)">ОК</button></div><div class="body"></div><div class="info"></div></div>';
  document.body.appendChild(root);
  var sheet = root.querySelector('.sheet'), body = root.querySelector('.body'), infoLine = root.querySelector('.info');

  var unit = null, drag = null, message = '', defaultInfo = '', pixelScale = 1;

  function open(target) {
    unit = target;
    message = '';
    root.classList.add('open');
    fit();
    render();
  }
  function close() { root.classList.remove('open'); unit = null; drag = null; }
  function isOpen() { return root.classList.contains('open'); }
  function fit() {
    // окно занимает до 80 % экрана по высоте и до 90 % по ширине, но не больше чем в 1,6 раза крупнее макета
    var scale = Math.min(1.6, window.innerWidth * 0.9 / WIDTH, window.innerHeight * 0.8 / HEIGHT);
    sheet.style.transform = 'scale(' + scale + ')';
    pixelScale = scale * (window.devicePixelRatio || 1);
  }

  function slotRect(slot) {
    var room = Items.SLOTS[slot], corner = LAYOUT[slot];
    return { x: corner[0], y: corner[1], width: room.w * CELL, height: room.h * CELL };
  }
  // прямоугольник предмета в окне: в руке — по центру ячейки
  function itemRect(entry) {
    var info = Items.info(entry.item), rect = slotRect(entry.slot), room = Items.SLOTS[entry.slot];
    var width = info.w * CELL, height = info.h * CELL;
    if (room.single) return { x: rect.x + (rect.width - width) / 2, y: rect.y + (rect.height - height) / 2, width: width, height: height };
    return { x: rect.x + entry.x * CELL, y: rect.y + entry.y * CELL, width: width, height: height };
  }

  function render() {
    if (!unit) return;
    var view = Game.inventoryView(unit);
    root.querySelector('.title').textContent = unit.name;
    root.querySelector('.subtitle').textContent = unit.callsign + ' · ' + (unit.role || unit.rank || '') + ' · СИЛА ' + view.strength;
    root.querySelector('.numbers').innerHTML = 'ОД <b>' + view.timeUnits + '</b>/' + view.maxTimeUnits + '<br>ВЕС <b class="' + (view.overload ? 'over' : '') + '">' + view.weight + '</b>/' + view.strength +
      (view.overload ? '<br><span class="over">ПЕРЕГРУЗ: −' + view.overload + ' ОД В НАЧАЛЕ ХОДА</span>' : '');
    var html = '';
    Object.keys(LAYOUT).forEach(function (slot) {
      var rect = slotRect(slot), room = Items.SLOTS[slot];
      html += '<div class="label" style="left:' + rect.x + 'px;top:' + (rect.y - 15) + 'px">' + room.name + '</div>' +
        '<div class="slot' + (room.single ? ' single' : '') + '" data-slot="' + slot + '" style="left:' + rect.x + 'px;top:' + rect.y + 'px;width:' + rect.width + 'px;height:' + rect.height + 'px"></div>';
    });
    html += '<img class="figure" src="assets/ui/doll_' + unit.camo + '.png" style="left:' + FIGURE[0] + 'px;top:' + FIGURE[1] + 'px" alt="">';
    body.innerHTML = html;
    var groundRows = Items.SLOTS.ground.h, hidden = 0;
    view.entries.concat(view.ground).forEach(function (entry) {
      if (entry.slot === 'ground' && entry.y + Items.info(entry.item).h > groundRows) { hidden++; return; }
      body.appendChild(itemElement(entry));
    });
    if (hidden) {
      var ground = slotRect('ground'), more = document.createElement('div');
      more.className = 'more'; more.style.left = (ground.x + ground.width - 120) + 'px'; more.style.top = (ground.y - 15) + 'px';
      more.textContent = 'ЕЩЁ ПРЕДМЕТОВ: ' + hidden;
      body.appendChild(more);
    }
    defaultInfo = message ? '<span class="warn">' + message + '</span>' : view.canAct ? 'Перетащите предмет мышью. Цена переноса — в ОД.' : '<span class="warn">Переносить предметы можно в свой ход, когда боец стоит на месте</span>';
    showInfo(defaultInfo);
  }

  function itemElement(entry) {
    var rect = itemRect(entry), info = Items.info(entry.item);
    var element = document.createElement('div');
    element.className = 'item';
    element.style.left = rect.x + 'px'; element.style.top = rect.y + 'px';
    element.style.width = rect.width + 'px'; element.style.height = rect.height + 'px';
    // холст в разрешении экрана: окно увеличено, иначе предмет был бы размытым
    var canvas = document.createElement('canvas');
    canvas.width = Math.round(rect.width * pixelScale); canvas.height = Math.round(rect.height * pixelScale);
    canvas.style.width = rect.width + 'px'; canvas.style.height = rect.height + 'px';
    element.appendChild(canvas);
    var draw = function () {
      var context = canvas.getContext('2d');
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.setTransform(pixelScale, 0, 0, pixelScale, 0, 0);
      Items.drawItem(context, entry.item, 3, 3, rect.width - 6, rect.height - 6);
    };
    draw();
    if (info.image) { var image = new Image(); image.onload = draw; image.src = info.image; }
    if (entry.item.rounds !== undefined) {
      var rounds = document.createElement('div');
      rounds.className = 'rounds';
      rounds.textContent = entry.item.rounds;
      element.appendChild(rounds);
    }
    element.addEventListener('mouseenter', function () { if (!drag) showInfo(describe(entry.item)); });
    element.addEventListener('mouseleave', function () { if (!drag) showInfo(defaultInfo); });
    element.addEventListener('mousedown', function (event) {
      if (event.button !== 0) return;
      event.preventDefault();
      var sheetBox = sheet.getBoundingClientRect(), scale = sheetBox.width / WIDTH;
      drag = { entry: entry, element: element, scale: scale,
        offsetX: (event.clientX - sheetBox.left) / scale - rect.x, offsetY: (event.clientY - sheetBox.top) / scale - rect.y, target: null };
      element.classList.add('dragging');
      moveDrag(event);
    });
    return element;
  }
  function describe(item) {
    var info = Items.info(item);
    var text = info.name + (info.note ? ' · ' + info.note : '') + ' · вес ' + info.weight;
    if (item.rounds !== undefined) text += ' · ' + (info.weapon ? 'в магазине ' : 'патронов ') + item.rounds + '/' + Items.capacity(item);
    return text;
  }
  function showInfo(html) { infoLine.innerHTML = html; }

  // куда ляжет предмет: ячейка и клетка под левым верхним углом предмета
  function dropTarget(pointX, pointY) {
    var info = Items.info(drag.entry.item);
    var left = pointX - drag.offsetX, top = pointY - drag.offsetY;
    var slots = Object.keys(LAYOUT);
    for (var index = 0; index < slots.length; index++) {
      var slot = slots[index], rect = slotRect(slot), room = Items.SLOTS[slot];
      if (pointX < rect.x || pointX > rect.x + rect.width || pointY < rect.y || pointY > rect.y + rect.height) continue;
      if (room.single) return { slot: slot, x: 0, y: 0 };
      var x = Math.round((left - rect.x) / CELL), y = Math.round((top - rect.y) / CELL);
      x = Math.max(0, Math.min(room.w - info.w, x)); y = Math.max(0, Math.min(room.h - info.h, y));
      return { slot: slot, x: x, y: y };
    }
    return null;
  }
  function moveDrag(event) {
    if (!drag) return;
    var sheetBox = sheet.getBoundingClientRect();
    var pointX = (event.clientX - sheetBox.left) / drag.scale, pointY = (event.clientY - sheetBox.top) / drag.scale;
    drag.element.style.left = (pointX - drag.offsetX) + 'px';
    drag.element.style.top = (pointY - drag.offsetY) + 'px';
    var target = dropTarget(pointX, pointY);
    var old = body.querySelector('.target');
    if (old) old.remove();
    drag.target = null;
    if (!target) { showInfo(describe(drag.entry.item)); return; }
    var view = Game.inventoryView(unit);
    var list = target.slot === 'ground' ? view.ground : view.entries;
    var fits = Items.fits(list, target.slot, drag.entry.item, target.x, target.y, drag.entry.item);
    var cost = Game.inventoryCost(unit, drag.entry.item.id, target.slot);
    var ok = fits && view.canAct && cost <= view.timeUnits;
    var marker = document.createElement('div');
    var footprint = itemRect({ item: drag.entry.item, slot: target.slot, x: target.x, y: target.y });
    marker.className = 'target ' + (ok ? 'ok' : 'bad');
    marker.style.left = footprint.x + 'px'; marker.style.top = footprint.y + 'px';
    marker.style.width = footprint.width + 'px'; marker.style.height = footprint.height + 'px';
    body.appendChild(marker);
    drag.target = target;
    var reason = !view.canAct ? 'сейчас нельзя' : !fits ? 'не помещается' : cost > view.timeUnits ? 'не хватает ОД' : '';
    showInfo(Items.info(drag.entry.item).name + ' → ' + Items.SLOTS[target.slot].name + ': <span class="cost">' + cost + ' ОД</span>' + (reason ? ' · <span class="warn">' + reason + '</span>' : ''));
  }
  function endDrag() {
    if (!drag) return;
    var target = drag.target, entry = drag.entry;
    drag = null;
    message = '';
    if (target && !(target.slot === entry.slot && target.x === entry.x && target.y === entry.y)) {
      var result = Game.inventoryMove(unit, entry.item.id, target.slot, target.x, target.y);
      if (!result.ok) message = result.message;
    }
    render();
  }
  window.addEventListener('mousemove', moveDrag);
  window.addEventListener('mouseup', endDrag);

  function step(delta) {
    var squad = Game.squad();
    if (!squad.length) return;
    var index = squad.indexOf(unit);
    unit = squad[(index + delta + squad.length) % squad.length];
    Game.selectUnit(unit);
    message = '';
    render();
  }
  root.addEventListener('click', function (event) {
    var button = event.target.closest ? event.target.closest('button') : null;
    if (!button) return;
    var action = button.getAttribute('data-do');
    if (action === 'close') close();
    else if (action === 'prev') step(-1);
    else if (action === 'next') step(1);
  });
  root.addEventListener('contextmenu', function (event) { event.preventDefault(); });
  window.addEventListener('keydown', function (event) {
    if (!isOpen()) return;
    if (event.key === 'Escape' || event.key === 'Enter' || event.key === 'i' || event.key === 'I' || event.key === 'ш' || event.key === 'Ш' || event.key === '6') close();
    else if (event.key === 'ArrowLeft') step(-1);
    else if (event.key === 'ArrowRight') step(1);
  });
  window.addEventListener('resize', function () { if (isOpen()) { fit(); render(); } });

  return { open: open, close: close, isOpen: isOpen, render: render };
})();
