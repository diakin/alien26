// Предметы и снаряжение, как в UFO: у юнита ячейки на теле (руки, плечи, ноги, пояс, рюкзак), у клетки — земля.
// Предмет занимает прямоугольник ячеек (w×h), в руке — всегда один предмет. Перенос стоит ОД:
// цена «достать» из ячейки-источника плюс «положить» в ячейку-цель (внутри одной ячейки — 2 ОД).
// Вес снаряжения сравнивается с силой: перегруз уменьшает ОД в начале хода на величину превышения.
var Items = (function () {
  'use strict';

  var CELL = 40;                       // пиксели одной ячейки на экране снаряжения
  var TYPES = {
    carbine: { name: 'КАРАБИН КС-9', note: 'ПБС · КОЛЛИМАТОР', w: 1, h: 3, weight: 8, weapon: 'carbine', ammo: 'carbineMag', crop: [35, 89, 321, 140], image: 'assets/ui/weapon_black.png' },
    carbineM: { name: 'КАРАБИН КС-9М', note: 'КОЛЛИМАТОР · ФОНАРЬ', w: 1, h: 3, weight: 8, weapon: 'carbine', ammo: 'carbineMag', crop: [35, 100, 289, 129], image: 'assets/ui/weapon_green.png' },
    plasmaPistol: { name: 'ПЛАЗМЕННЫЙ ПИСТОЛЕТ', note: 'ЭНЕРГОЯЧЕЙКА', w: 1, h: 2, weight: 4, weapon: 'plasmaPistol', ammo: 'energyCell', crop: [34, 73, 264, 158], image: 'assets/ui/weapon_alien.png' },
    carbineMag: { name: 'МАГАЗИН КС-9', note: 'ПАТРОНЫ 5,45', w: 1, h: 1, weight: 2, rounds: 30, draw: drawMagazine },
    energyCell: { name: 'ЭНЕРГОЯЧЕЙКА', note: 'К ПЛАЗМЕННОМУ ОРУЖИЮ', w: 1, h: 1, weight: 2, rounds: 20, draw: drawCell },
    grenade: { name: 'ГРАНАТА РГ-7', note: 'ОСКОЛОЧНАЯ', w: 1, h: 1, weight: 3, draw: drawGrenade },
    medkit: { name: 'АПТЕЧКА', note: 'ПЕРЕВЯЗКА И ОБЕЗБОЛИВАНИЕ', w: 2, h: 1, weight: 5, draw: drawMedkit }
  };
  // ячейки: размер в клетках, цена «достать» и «положить»; single — помещается один предмет (руки)
  var SLOTS = {
    rightShoulder: { name: 'ПРАВОЕ ПЛЕЧО', w: 2, h: 1, take: 3, put: 3 },
    leftShoulder: { name: 'ЛЕВОЕ ПЛЕЧО', w: 2, h: 1, take: 3, put: 3 },
    rightHand: { name: 'ПРАВАЯ РУКА', w: 2, h: 3, take: 0, put: 4, single: true },
    leftHand: { name: 'ЛЕВАЯ РУКА', w: 2, h: 3, take: 0, put: 4, single: true },
    rightLeg: { name: 'ПРАВАЯ НОГА', w: 2, h: 1, take: 4, put: 4 },
    leftLeg: { name: 'ЛЕВАЯ НОГА', w: 2, h: 1, take: 4, put: 4 },
    backpack: { name: 'ЗА СПИНОЙ', w: 3, h: 3, take: 8, put: 12 },
    belt: { name: 'ЗА РЕМНЁМ', w: 4, h: 1, take: 4, put: 4 },
    ground: { name: 'ЗЕМЛЯ', w: 17, h: 3, take: 8, put: 2 }
  };
  // откуда брать магазин при перезарядке: сначала ближние ячейки
  var RELOAD_ORDER = ['belt', 'leftHand', 'rightShoulder', 'leftShoulder', 'rightLeg', 'leftLeg', 'backpack'];

  var counter = 0;
  function make(type, rounds) {
    var item = { id: ++counter, type: type };
    var info = TYPES[type];
    if (info.weapon) item.rounds = rounds === undefined ? Combat.WEAPONS[info.weapon].magazine : rounds;
    else if (info.rounds) item.rounds = rounds === undefined ? info.rounds : rounds;
    return item;
  }
  function info(item) { return TYPES[item.type]; }
  function capacity(item) { var type = TYPES[item.type]; return type.weapon ? Combat.WEAPONS[type.weapon].magazine : type.rounds || 0; }
  function weightOf(entries) { return entries.reduce(function (total, entry) { return total + TYPES[entry.item.type].weight; }, 0); }

  // помещается ли предмет в ячейку slot в точке (x, y); ignore — сам переносимый предмет
  function fits(entries, slot, item, x, y, ignore) {
    var size = TYPES[item.type], room = SLOTS[slot];
    if (room.single) return !entries.some(function (entry) { return entry.slot === slot && entry.item !== ignore; });
    if (x < 0 || y < 0 || x + size.w > room.w || y + size.h > room.h) return false;
    return !entries.some(function (entry) {
      if (entry.slot !== slot || entry.item === ignore) return false;
      var other = TYPES[entry.item.type];
      return x < entry.x + other.w && entry.x < x + size.w && y < entry.y + other.h && entry.y < y + size.h;
    });
  }
  // первое свободное место в ячейке или null
  function freeSpot(entries, slot, item) {
    var room = SLOTS[slot];
    if (room.single) return fits(entries, slot, item, 0, 0) ? { x: 0, y: 0 } : null;
    for (var x = 0; x < room.w; x++) for (var y = 0; y < room.h; y++) if (fits(entries, slot, item, x, y)) return { x: x, y: y };
    return null;
  }
  function moveCost(from, to) { return from === to ? 2 : SLOTS[from].take + SLOTS[to].put; }

  // ---------------- картинки предметов ----------------
  // Оружие — картинки из панели (горизонтальные), повёрнутые вдоль длинной стороны предмета; остальное рисуется.
  var images = {};
  function imageOf(path) {
    if (!images[path]) { images[path] = new Image(); images[path].src = path; }
    return images[path];
  }
  Object.keys(TYPES).forEach(function (type) { if (TYPES[type].image) imageOf(TYPES[type].image); });
  // рисует предмет в прямоугольник (x, y, width, height) контекста
  function drawItem(context, item, x, y, width, height) {
    var type = TYPES[item.type];
    context.save();
    if (type.image) {
      var image = imageOf(type.image);
      if (image.complete && image.naturalWidth) {
        // crop — рамка оружия в картинке 380×300; вертикальный предмет — поворот на −90°.
        // По короткой стороне допускается небольшой выход за рамку (приклад и магазин), чтобы оружие не было мелким.
        var source = { x: type.crop[0], y: type.crop[1], width: type.crop[2], height: type.crop[3] };
        var vertical = height > width;
        var boxWidth = vertical ? height : width, boxHeight = vertical ? width : height;
        var scale = Math.min(boxWidth / source.width, boxHeight * 1.3 / source.height);
        context.translate(x + width / 2, y + height / 2);
        if (vertical) context.rotate(-Math.PI / 2);
        context.drawImage(image, source.x, source.y, source.width, source.height, -source.width * scale / 2, -source.height * scale / 2, source.width * scale, source.height * scale);
      }
    } else if (type.draw) {
      context.translate(x, y);
      type.draw(context, width, height);
    }
    context.restore();
  }
  function drawMagazine(context, width, height) {
    var centerX = width / 2;
    context.fillStyle = '#2b2e2c';
    context.beginPath();
    context.moveTo(centerX - 7, height * 0.12); context.lineTo(centerX + 6, height * 0.12);
    context.quadraticCurveTo(centerX + 9, height * 0.55, centerX + 14, height * 0.88);
    context.lineTo(centerX + 1, height * 0.9);
    context.quadraticCurveTo(centerX - 4, height * 0.55, centerX - 7, height * 0.12);
    context.fill();
    context.strokeStyle = '#555a55'; context.lineWidth = 1; context.stroke();
    context.fillStyle = '#b8862e';                                  // патрон сверху
    context.fillRect(centerX - 5, height * 0.06, 9, 4);
    for (var rib = 0; rib < 3; rib++) { context.fillStyle = '#3c403c'; context.fillRect(centerX - 3 + rib * 1.6, height * (0.35 + rib * 0.17), 9, 2); }
  }
  function drawCell(context, width, height) {
    var centerX = width / 2;
    context.fillStyle = '#3a4048';
    context.fillRect(centerX - 8, height * 0.18, 16, height * 0.66);
    context.fillStyle = '#5ad8f0';
    context.shadowColor = '#5ad8f0'; context.shadowBlur = 6;
    context.fillRect(centerX - 8, height * 0.44, 16, 5);
    context.shadowBlur = 0;
    context.fillStyle = '#8a949e';
    context.fillRect(centerX - 5, height * 0.1, 10, 4);
  }
  function drawGrenade(context, width, height) {
    var centerX = width / 2, centerY = height * 0.58;
    context.fillStyle = '#4c5638';
    context.beginPath(); context.ellipse(centerX, centerY, 10, 12, 0, 0, Math.PI * 2); context.fill();
    context.strokeStyle = '#384028'; context.lineWidth = 1;
    for (var line = -1; line <= 1; line++) { context.beginPath(); context.moveTo(centerX - 10, centerY + line * 6); context.lineTo(centerX + 10, centerY + line * 6); context.stroke(); }
    context.fillStyle = '#6d6f68';
    context.fillRect(centerX - 4, centerY - 17, 8, 6);
    context.strokeStyle = '#9a9c94'; context.lineWidth = 2;
    context.beginPath(); context.moveTo(centerX + 3, centerY - 15); context.lineTo(centerX + 9, centerY - 6); context.stroke();
    context.beginPath(); context.arc(centerX - 7, centerY - 15, 3.5, 0, Math.PI * 2); context.stroke();
  }
  function drawMedkit(context, width, height) {
    context.fillStyle = '#56603e';
    context.fillRect(6, height * 0.2, width - 12, height * 0.62);
    context.fillStyle = '#434b30';
    context.fillRect(6, height * 0.2, width - 12, 5);
    context.fillStyle = '#e8e6da';
    var centerX = width / 2, centerY = height * 0.53;
    context.fillRect(centerX - 3, centerY - 8, 6, 16);
    context.fillRect(centerX - 8, centerY - 3, 16, 6);
  }

  return {
    CELL: CELL, TYPES: TYPES, SLOTS: SLOTS, RELOAD_ORDER: RELOAD_ORDER,
    make: make, info: info, capacity: capacity, weightOf: weightOf, fits: fits, freeSpot: freeSpot, moveCost: moveCost,
    drawItem: drawItem
  };
})();
