// Разметка тестовой карты «База на плато»: клетки, 4 уровня по высоте, стены по краям клеток.
// Общий модуль: по нему строится 3D-сцена (outpost.js) и данные для игры (проходимость, лестницы).
//
// Клетка (col, row) — квадрат TILE м; col растёт вправо-вниз по экрану, row — влево-вниз.
// Уровень L — этаж высотой LEVEL_H м, пол уровня на высоте L * LEVEL_H.
// Стена W клетки лежит на её левой-верхней грани (между col-1 и col), стена N — на правой-верхней
// (между row-1 и row). Так у каждой грани один хозяин, как в UFO.

// Карта выбирается параметром страницы ?map=: outpost — «База на плато» 24×24 (по умолчанию),
// big — 48×48 из четырёх секторов 24×24: база (пришельцы), просторные здания, стоянка, посадка с конвертопланом;
// base — подземная база в горе по плану docs/base/base_plan.json.
import { BASE_PLAN } from './base_plan.js';
const PARAMS = typeof location !== 'undefined' ? new URLSearchParams(location.search) : new URLSearchParams('');
export const MAP_NAME = PARAMS.get('map') || 'outpost';
export const SECTOR = 24;
export const TILE = 1.25, LEVELS = 4, LEVEL_H = 2.5;
// подземная база: план 56×33 (tools/base/plan.py) лежит посередине поля 58×58 — со столбца BASE_COL и строки BASE_ROW,
// чтобы скале вокруг помещений хватило клеток и с краёв плана
export const TILES = MAP_NAME === 'big' ? SECTOR * 2 : MAP_NAME === 'base' ? 58 : SECTOR;
export const BASE_COL = 1, BASE_ROW = 12;

// типы стен; blocks — нельзя пройти через грань
export const WALL_TYPES = {
  wall: { blocks: true }, window: { blocks: true }, door: { blocks: false },
  rail: { blocks: true }, parapet: { blocks: true }, barrier: { blocks: true },
  hull: { blocks: true },          // обшивка конвертоплана: грань закрыта, тайла стены нет — рисует сама модель
};

// типы пола: 0 нет, 1 грунт, 2 пол помещения, 3 крыша, 4 решётчатый настил, 5 лестница
export const FLOOR = { none: 0, ground: 1, interior: 2, roof: 3, deck: 4, stairs: 5 };

function grid(fill) {
  return Array.from({ length: LEVELS }, () => Array.from({ length: TILES + 1 }, () => new Array(TILES + 1).fill(fill)));
}

export function buildLayout() {
  const floor = grid(0);          // [level][row][col]
  const offset = grid(0);         // подъём пола внутри уровня (лестницы), м
  const wallW = grid(null);       // { type, style }
  const wallN = grid(null);
  const indoor = grid(0);         // клетка под крышей/внутри здания — для авто-среза стен
  const objects = [];             // { kind, level, col, row, cols, rows, rotation, blocks }
  const stairs = [];              // { level, col, row, dirCol, dirRow, count, style }
  const links = [];               // приставные лестницы: { from: [c, r, L], to: [c, r, L], cost, ... }
  const buildings = [];           // контуры для крыш, плит перекрытия и т.п.

  const concrete = [];             // бетонные площадки: { rect: [x0, z0, x1, z1] } или { circle: [x, z, r] }, м
  const blockedCells = [];         // занятые клетки без предмета на них (корпус конвертоплана): [level, col, row]

  // уровень 0 — грунт везде
  // (под землёй грунта нет: пол только в помещениях)
  if (MAP_NAME !== 'base') for (let row = 0; row < TILES; row++) for (let col = 0; col < TILES; col++) floor[0][row][col] = FLOOR.ground;

  // сдвиг сектора: все помощники ниже принимают координаты внутри сектора 24×24
  let ox = 0, oy = 0;
  const setFloor = (level, col0, row0, col1, row1, type) => {
    for (let row = row0; row <= row1; row++) for (let col = col0; col <= col1; col++) floor[level][row + oy][col + ox] = type;
  };
  const setIndoor = (level, col0, row0, col1, row1) => {
    for (let row = row0; row <= row1; row++) for (let col = col0; col <= col1; col++) indoor[level][row + oy][col + ox] = 1;
  };
  const setOffset = (level, col, row, value) => { offset[level][row + oy][col + ox] = value; };
  const setW = (level, col, row, type, style) => { wallW[level][row + oy][col + ox] = type ? { type, style } : null; };
  const setN = (level, col, row, type, style) => { wallN[level][row + oy][col + ox] = type ? { type, style } : null; };
  // периметр прямоугольника [col0..col1] x [row0..row1]
  const perimeter = (level, col0, row0, col1, row1, type, style) => {
    for (let row = row0; row <= row1; row++) { setW(level, col0, row, type, style); setW(level, col1 + 1, row, type, style); }
    for (let col = col0; col <= col1; col++) { setN(level, col, row0, type, style); setN(level, col, row1 + 1, type, style); }
  };
  const lineW = (level, col, row0, row1, type, style) => { for (let row = row0; row <= row1; row++) setW(level, col, row, type, style); };
  const lineN = (level, row, col0, col1, type, style) => { for (let col = col0; col <= col1; col++) setN(level, col, row, type, style); };
  const object = (kind, level, col, row, cols = 1, rows = 1, extra = {}) => objects.push({ kind, level, col: col + ox, row: row + oy, cols, rows, rotation: 0, blocks: true, ...extra });
  const building = (item) => { const placed = { ...item, col0: item.col0 + ox, row0: item.row0 + oy, col1: item.col1 + ox, row1: item.row1 + oy }; buildings.push(placed); return placed; };
  const link = (item) => links.push({ ...item, from: [item.from[0] + ox, item.from[1] + oy, item.from[2]], to: [item.to[0] + ox, item.to[1] + oy, item.to[2]], col: item.col + ox, row: item.row + oy });
  const ladder = (level, col, row, height, side) => objects.push({ kind: 'ladder', level, col: col + ox, row: row + oy, cols: 1, rows: 1, blocks: false, height, side });
  const concreteRect = (col0, row0, col1, row1) => concrete.push({ rect: [(col0 + ox) * TILE, (row0 + oy) * TILE, (col1 + ox) * TILE, (row1 + oy) * TILE] });
  const concreteCircle = (col, row, radius) => concrete.push({ circle: [(col + ox) * TILE, (row + oy) * TILE, radius * TILE] });
  const block = (level, col, row) => blockedCells.push([level, col + ox, row + oy]);
  // лестница: count клеток от (col, row) в направлении (dirCol, dirRow), подъём на один уровень
  const stairRun = (level, col, row, dirCol, dirRow, count, style) => {
    stairs.push({ level, col: col + ox, row: row + oy, dirCol, dirRow, count, style });
    for (let step = 0; step < count; step++) {
      const stepCol = col + dirCol * step, stepRow = row + dirRow * step;
      setFloor(level, stepCol, stepRow, stepCol, stepRow, FLOOR.stairs);
      setOffset(level, stepCol, stepRow, (step + 0.5) / count * LEVEL_H);
      if (level + 1 < LEVELS) setFloor(level + 1, stepCol, stepRow, stepCol, stepRow, FLOOR.none);   // проём над лестницей
    }
  };

  // ================= сектор «База на плато» =================
  function outpostSector() {
  // ---------------- жилой корпус: 2 этажа и крыша ----------------
  building({ name: 'hab', col0: 3, row0: 3, col1: 10, row1: 9, levels: 2, style: 'hab' });
  setFloor(1, 3, 3, 10, 9, FLOOR.interior);
  setFloor(2, 3, 3, 10, 9, FLOOR.roof);
  setIndoor(0, 3, 3, 10, 9); setIndoor(1, 3, 3, 10, 9);
  for (const level of [0, 1]) perimeter(level, 3, 3, 10, 9, 'wall', 'hab');
  perimeter(2, 3, 3, 10, 9, 'parapet', 'hab');
  // этаж 0: две комнаты, коридор, лестничный холл, лаборатория
  lineW(0, 7, 3, 5, 'wall', 'inner'); setW(0, 7, 5, 'door', 'inner');
  lineN(0, 6, 3, 10, 'wall', 'inner'); setN(0, 4, 6, 'door', 'inner'); setN(0, 9, 6, 'door', 'inner');
  lineN(0, 7, 3, 10, 'wall', 'inner'); setN(0, 6, 7, 'door', 'inner'); setN(0, 9, 7, 'door', 'inner');
  lineW(0, 8, 7, 9, 'wall', 'inner');
  setN(0, 6, 10, 'door', 'hab');               // вход с юга (в лестничный холл)
  setW(0, 11, 6, 'door', 'hab');               // вход с востока (в коридор)
  for (const col of [4, 8, 10]) setN(0, col, 10, 'window', 'hab');
  for (const row of [4, 8]) setW(0, 11, row, 'window', 'hab');
  setN(0, 5, 3, 'window', 'hab'); setW(0, 3, 4, 'window', 'hab');
  stairRun(0, 4, 8, 1, 0, 3, 'hab');           // ступени (4,8)-(6,8), выход на этаж 1 в (7,8)
  // этаж 1: большая комната с перегородкой, коридор, площадка у лестницы, серверная
  lineW(1, 7, 3, 5, 'wall', 'inner'); setW(1, 7, 4, 'door', 'inner');
  lineN(1, 6, 3, 10, 'wall', 'inner'); setN(1, 5, 6, 'door', 'inner'); setN(1, 9, 6, 'door', 'inner');
  lineW(1, 8, 7, 9, 'wall', 'inner'); lineN(1, 7, 8, 10, 'wall', 'inner'); setN(1, 9, 7, 'door', 'inner');
  lineN(1, 8, 4, 6, 'rail', 'hab'); lineN(1, 9, 4, 6, 'rail', 'hab'); setW(1, 4, 8, 'rail', 'hab');   // ограждение проёма
  for (const col of [4, 5, 7, 9, 10]) setN(1, col, 10, 'window', 'hab');
  for (const row of [4, 5, 8]) setW(1, 11, row, 'window', 'hab');
  setN(1, 4, 3, 'window', 'hab'); setN(1, 8, 3, 'window', 'hab'); setW(1, 3, 5, 'window', 'hab');
  // обстановка
  object('console', 0, 3, 3); object('console', 0, 4, 3); object('locker', 0, 6, 3);
  object('bunk', 0, 9, 3, 2, 1); object('locker', 0, 10, 5);
  object('labTable', 0, 9, 8, 2, 1); object('cabinet', 0, 10, 9);
  object('crate', 0, 7, 9); object('crate', 0, 3, 7);          // у подножия лестницы (3,8) свободно
  object('rack', 1, 10, 7); object('rack', 1, 10, 8); object('rack', 1, 10, 9);
  object('desk', 1, 4, 3, 2, 1); object('console', 1, 9, 3); object('crate', 1, 3, 5); object('crate', 1, 3, 6);
  // крыша: вентиляция, мачта; приставная лестница с земли на крышу по восточной стене
  object('acUnit', 2, 5, 4, 2, 1); object('acUnit', 2, 8, 6, 1, 1); object('antenna', 2, 4, 8); object('solar', 2, 6, 7, 2, 2);
  link({ from: [11, 9, 0], to: [10, 9, 2], cost: 16, kind: 'ladder', wall: 'W', col: 11, row: 9 });
  ladder(0, 11, 9, 2 * LEVEL_H + 0.9, 'W');

  // ---------------- платформа на опорах с кабиной ----------------
  building({ name: 'deck', col0: 15, row0: 4, col1: 19, row1: 8, style: 'deck' });
  setFloor(1, 15, 4, 19, 8, FLOOR.deck);
  perimeter(1, 15, 4, 19, 8, 'rail', 'deck');
  setN(1, 17, 9, null);                         // проход к наружной лестнице
  for (const [col, row] of [[15, 4], [19, 4], [15, 8], [19, 8], [17, 4]]) object('pylon', 0, col, row);
  stairRun(0, 17, 11, 0, -1, 3, 'deck');        // ступени (17,11)-(17,9), выход на настил в (17,8)
  // кабина на настиле
  building({ name: 'cabin', col0: 16, row0: 4, col1: 18, row1: 6, levels: 1, style: 'cabin', base: 1 });
  perimeter(1, 16, 4, 18, 6, 'wall', 'cabin');
  setN(1, 17, 7, 'door', 'cabin'); setW(1, 19, 5, 'window', 'cabin'); setN(1, 16, 7, 'window', 'cabin');
  setFloor(1, 16, 4, 18, 6, FLOOR.interior);
  setFloor(2, 16, 4, 18, 6, FLOOR.roof);
  perimeter(2, 16, 4, 18, 6, 'parapet', 'cabin');
  setIndoor(1, 16, 4, 18, 6);
  object('console', 1, 16, 4); object('rack', 1, 18, 4);
  object('dish', 2, 17, 5);
  link({ from: [19, 6, 1], to: [18, 6, 2], cost: 10, kind: 'ladder', wall: 'W', col: 19, row: 6 });
  ladder(1, 19, 6, LEVEL_H + 0.9, 'W');
  // под настилом — тень, грунт; бочки и ящики рядом
  object('barrels', 0, 16, 6); object('crate', 0, 18, 7);

  // ---------------- сторожевая вышка: площадка на уровне 3 ----------------
  building({ name: 'tower', col0: 20, row0: 14, col1: 21, row1: 15, style: 'tower' });
  setFloor(3, 20, 14, 21, 15, FLOOR.deck);
  perimeter(3, 20, 14, 21, 15, 'rail', 'tower');
  for (const [col, row] of [[20, 14], [21, 14], [20, 15], [21, 15]]) object('towerLeg', 0, col, row);
  object('searchlight', 3, 21, 14);
  link({ from: [20, 16, 0], to: [20, 15, 3], cost: 24, kind: 'ladder', wall: 'N', col: 20, row: 16 });
  ladder(0, 20, 16, 3 * LEVEL_H + 0.9, 'N');
  setN(3, 20, 16, null);                         // проход с лестницы на площадку

  // ---------------- двор ----------------
  object('container', 0, 13, 13, 2, 4, { color: 'orange' });
  object('container', 0, 1, 12, 2, 4, { color: 'blue' });
  object('truck', 0, 8, 12, 2, 5);                 // армейский грузовик 6×6 с кунгом (vehicles.js)
  object('tank', 0, 21, 4, 2, 3);
  object('generator', 0, 12, 1, 2, 2);
  for (const [col, row] of [[13, 9], [14, 10], [13, 10], [2, 10], [12, 7], [11, 12], [6, 12]]) object('crate', 0, col, row);
  object('barrels', 0, 12, 4); object('barrels', 0, 20, 10);
  object('lamp', 0, 12, 11); object('lamp', 0, 15, 12);
  lineN(0, 20, 10, 13, 'barrier', 'concrete');
  lineW(0, 16, 17, 19, 'barrier', 'concrete');
  // скалы по краям карты
  for (const [col, row, size] of [[0, 21, 2], [2, 22, 1], [0, 19, 1], [22, 0, 2], [21, 0, 1], [23, 9, 1], [22, 22, 2], [23, 20, 1], [8, 0, 1], [0, 6, 1]]) {
    object('rock', 0, col, row, size, size);
  }

  // бетонные площадки двора (как zones в outpost_scene.js)
  concreteRect(1.3, 1.3, 12.6, 11.7); concreteRect(14.2, 3.0, 20.8, 12.8); concreteRect(19.4, 13.4, 22.6, 16.8);
  concreteCircle(4.6, 19.0, 3.6);
  }

  // ================= сектор «Просторные здания» =================
  // Склад — один высокий зал 12×8 клеток без перегородок; офис — 2 этажа по одному-двум большим залам,
  // лестница внутри. Стены те же, что у корпуса базы (тайлы общие).
  function spaciousSector() {
    building({ name: 'warehouse', col0: 2, row0: 2, col1: 13, row1: 9, levels: 1, style: 'hab' });
    setIndoor(0, 2, 2, 13, 9);
    setFloor(1, 2, 2, 13, 9, FLOOR.roof);
    perimeter(0, 2, 2, 13, 9, 'wall', 'hab');
    perimeter(1, 2, 2, 13, 9, 'parapet', 'hab');
    setN(0, 6, 10, 'door', 'hab'); setN(0, 7, 10, 'door', 'hab');       // двойной вход с юга
    setW(0, 14, 5, 'door', 'hab');                                       // вход с востока
    setW(0, 2, 6, 'door', 'hab');                                        // вход с запада
    for (const col of [3, 4, 9, 10, 12]) setN(0, col, 10, 'window', 'hab');
    for (const col of [4, 8, 11]) setN(0, col, 2, 'window', 'hab');
    for (const row of [3, 7, 8]) setW(0, 14, row, 'window', 'hab');
    // стеллажи вдоль северной стены, ящики и бочки островками — между ними просторно
    for (const col of [3, 4, 5, 9, 10, 11]) object('rack', 0, col, 2);
    object('crate', 0, 4, 5); object('crate', 0, 5, 5); object('crate', 0, 4, 6);
    object('crate', 0, 10, 6); object('crate', 0, 11, 6); object('barrels', 0, 12, 8);
    object('desk', 0, 2, 8, 2, 1); object('cabinet', 0, 13, 3);
    object('acUnit', 1, 4, 4, 2, 1); object('acUnit', 1, 9, 6, 2, 1);

    // офис: 8×7 клеток, 2 этажа
    building({ name: 'office', col0: 13, row0: 13, col1: 20, row1: 19, levels: 2, style: 'hab' });
    setFloor(1, 13, 13, 20, 19, FLOOR.interior);
    setFloor(2, 13, 13, 20, 19, FLOOR.roof);
    setIndoor(0, 13, 13, 20, 19); setIndoor(1, 13, 13, 20, 19);
    for (const level of [0, 1]) perimeter(level, 13, 13, 20, 19, 'wall', 'hab');
    perimeter(2, 13, 13, 20, 19, 'parapet', 'hab');
    // этаж 0: два больших зала, широкий проём между ними
    lineW(0, 17, 13, 19, 'wall', 'inner'); setW(0, 17, 15, 'door', 'inner'); setW(0, 17, 16, 'door', 'inner');
    setN(0, 18, 20, 'door', 'hab'); setW(0, 13, 15, 'door', 'hab');
    for (const col of [14, 15, 19]) setN(0, col, 20, 'window', 'hab');
    for (const row of [17, 18]) setW(0, 21, row, 'window', 'hab');
    setN(0, 15, 13, 'window', 'hab'); setN(0, 19, 13, 'window', 'hab');
    stairRun(0, 14, 18, 1, 0, 3, 'hab');           // ступени (14,18)-(16,18), выход на этаж 1 в (17,18)
    // этаж 1: один зал на весь этаж, ограждение проёма лестницы
    lineN(1, 18, 14, 16, 'rail', 'hab'); setW(1, 14, 19, 'rail', 'hab'); setW(1, 14, 18, 'rail', 'hab');
    for (const col of [14, 16, 18, 19]) setN(1, col, 20, 'window', 'hab');
    for (const row of [14, 16, 18]) setW(1, 21, row, 'window', 'hab');
    for (const col of [14, 17, 19]) setN(1, col, 13, 'window', 'hab');
    object('desk', 0, 14, 14, 2, 1); object('console', 0, 19, 14); object('locker', 0, 20, 17);
    object('desk', 1, 15, 14, 2, 1); object('desk', 1, 18, 16, 2, 1); object('rack', 1, 20, 14); object('crate', 1, 20, 19);
    object('antenna', 2, 19, 18); object('acUnit', 2, 15, 15, 2, 1);
    // двор
    object('container', 0, 17, 3, 2, 4, { color: 'orange' });
    object('generator', 0, 9, 13, 2, 2);
    object('barrels', 0, 12, 12); object('crate', 0, 8, 16); object('crate', 0, 9, 17);
    object('lamp', 0, 15, 10); object('lamp', 0, 11, 19);
    lineN(0, 11, 18, 21, 'barrier', 'concrete');
    for (const [col, row, size] of [[22, 22, 2], [0, 21, 2], [22, 0, 1], [23, 11, 1]]) object('rock', 0, col, row, size, size);
    concreteRect(1.3, 1.3, 14.7, 11.7); concreteRect(12.3, 12.3, 21.7, 20.7); concreteRect(6.3, 11.3, 12.7, 13.2);
  }

  // ================= сектор «Стоянка» =================
  // Открытая площадка: три ряда мест 2×4 клетки, разметка краской, машины занимают меньше половины мест.
  function parkingSector() {
    concreteRect(0.6, 0.6, 22.4, 22.4);
    const paint = (col, row, rows) => object('paint', 0, col, row, 1, rows, { blocks: false, line: 'W' });
    // ряд A: места в рядах 2–5, носом на юг к проезду 6–9; ряды B и C спиной к спине: 10–13 и 14–17; проезд 18–21
    for (const [row0, rows] of [[2, 4], [10, 4], [14, 4]]) for (let col = 2; col <= 20; col += 2) paint(col, row0, rows);
    const car = (type, color, col, row, flip) => object('car', 0, col, row, 2, 4, { type, color, flip: !!flip });
    car('suv', 'white', 2, 2); car('van', 'sand', 8, 2); car('suv', 'graphite', 10, 2); car('suv', 'red', 16, 2);
    car('suv', 'blue', 4, 10, true); car('van', 'white', 12, 10, true); car('suv', 'olive', 18, 10, true);
    car('suv', 'graphite', 6, 14); car('suv', 'white', 14, 14);
    object('truck', 0, 21, 15, 2, 5);
    for (const [col, row] of [[1, 7], [11, 7], [21, 7], [1, 19], [11, 19], [21, 19]]) object('lamp', 0, col, row);
    lineW(0, 1, 2, 5, 'barrier', 'concrete'); lineW(0, 1, 10, 17, 'barrier', 'concrete');
    lineN(0, 23, 2, 9, 'barrier', 'concrete'); lineN(0, 23, 13, 20, 'barrier', 'concrete');
    object('crate', 0, 21, 3); object('crate', 0, 21, 4); object('barrels', 0, 22, 12);
    for (const [col, row, size] of [[0, 22, 2], [23, 0, 1]]) object('rock', 0, col, row, size, size);
  }

  // ================= сектор «Посадка»: конвертоплан КТ-6 =================
  // Модель (vehicles.js, TILTROTOR) повёрнута на −90°: нос к меньшим col, рампа к большим col (к камере справа),
  // правый борт с дверью — к большим row (к камере слева). Салон 4×6 клеток: col c0..c0+5, row r0..r0+3;
  // столбец салона A–D = row r0..r0+3, ряд 1–6 = col c0..c0+5. Пол салона на 0,6 м, рампа — col c0+6 и c0+7.
  // Конвертоплан КТ-6: (c0, r0) — угол салона 6×4 клетки; нос к меньшим col (4 клетки), рампа к большим (2 клетки),
  // корпус занимает ряды r0−1 и r0+4, дверь в правом борту — в (c0+4, r0+4). Возвращает зону эвакуации (салон и рампа).
  function tiltrotor(c0, r0) {
    object('tiltrotor', 0, c0, r0, 6, 4, { blocks: false });
    // проходимость: салон, рампа, ступень у двери; корпус и нос — занятые клетки, обшивка — стены hull
    for (let col = c0; col <= c0 + 5; col++) for (let row = r0; row <= r0 + 3; row++) setOffset(0, col, row, 0.6);
    for (let row = r0; row <= r0 + 3; row++) { setOffset(0, c0 + 6, row, 0.45); setOffset(0, c0 + 7, row, 0.15); }
    const door = { col: c0 + 4, row: r0 + 4 };
    setOffset(0, door.col, door.row, 0.3);
    setIndoor(0, c0, r0, c0 + 5, r0 + 3);
    for (let col = c0; col <= c0 + 5; col++) {
      setN(0, col, r0, 'hull', 'tiltrotor');
      if (col !== door.col) setN(0, col, r0 + 4, 'hull', 'tiltrotor');
    }
    for (let row = r0; row <= r0 + 3; row++) setW(0, c0, row, 'hull', 'tiltrotor');
    for (let col = c0 - 4; col <= c0 + 5; col++) {
      block(0, col, r0 - 1);
      if (col !== door.col) block(0, col, r0 + 4);
    }
    for (let col = c0 - 4; col <= c0 - 1; col++) for (let row = r0; row <= r0 + 3; row++) block(0, col, row);
    // зона эвакуации: салон и рампа — кто стоит здесь, улетает (game.js, «ЭВАКУАЦИЯ»)
    const extraction = [];
    for (let col = c0; col <= c0 + 7; col++) for (let row = r0; row <= r0 + 3; row++) extraction.push([col + ox, row + oy, 0]);
    return extraction;
  }

  function landingSector() {
    const c0 = 10, r0 = 10;
    const extraction = tiltrotor(c0, r0);
    // площадка вокруг, ящики и бочки снабжения, фонари, скалы по краям
    concreteRect(4.3, 4.3, 21.7, 19.7);
    object('crate', 0, 20, 8); object('crate', 0, 20, 9); object('crate', 0, 21, 9); object('barrels', 0, 19, 16);
    object('generator', 0, 5, 17, 2, 2);
    for (const [col, row] of [[4, 4], [21, 4], [4, 19], [21, 19]]) object('lamp', 0, col, row);
    for (const [col, row, size] of [[22, 22, 2], [0, 0, 2], [23, 13, 1], [1, 21, 1], [12, 0, 1]]) object('rock', 0, col, row, size, size);
    // отряд в салоне: бойцы у сидений A2–A4 (row r0, смотрят на +row) и D2–D4 (row r0+3, смотрят на −row), K7 — B–C, ряды 1–2, лицом к рампе
    const at = (col, row, direction) => [col + ox, row + oy, 0, direction];
    return {
      squad: [at(c0 + 1, r0, 1), at(c0 + 2, r0, 1), at(c0 + 3, r0, 1), at(c0 + 1, r0 + 3, 5), at(c0 + 2, r0 + 3, 5), at(c0 + 3, r0 + 3, 5)],
      mech: [at(c0, r0 + 1, 7)],
      extraction,
    };
  }

  // ================= подземная база в горе (MAP=base) =================
  // План — tools/base/plan.py (BASE_PLAN, тот же, что docs/base/base_plan.json): x плана — col, y — row со сдвигом
  // (BASE_COL, BASE_ROW). Помещения и коридоры — пол «помещение», под крышей (indoor) на всю высоту помещения. Стены — по граням
  // между разными помещениями и между помещением и скалой, высотой в большее из двух помещений (ангар — 3 уровня,
  // цех — 2). Ангар (платформа подъёмника и техполоса) — один зал; коридоры между собой открыты. Ворота — проёмы
  // на уровне 0 (выше — стена), двери и люки — двери. Клетки скалы вокруг помещений (соседи по 8 направлениям) —
  // каменные блоки rockFill высотой в соседнее помещение: их верх — срез скалы; дальше — темнота.
  function baseMap() {
    ox = BASE_COL; oy = BASE_ROW;
    const plan = BASE_PLAN, width = plan.grid[0], height = plan.grid[1];
    const region = Array.from({ length: height }, () => new Array(width).fill(null));
    const roomLevels = Array.from({ length: height }, () => new Array(width).fill(0));
    const fill = (item, key, levels) => {
      for (let row = item.y; row < item.y + item.height; row++) for (let col = item.x; col < item.x + item.width; col++) { region[row][col] = key; roomLevels[row][col] = levels; }
    };
    plan.rooms.forEach((room, index) => fill(room, room.module === 2 ? 'hangar' : 'room' + index, room.levels));
    plan.corridors.forEach((corridor) => fill(corridor, 'corridor', 1));
    const regionAt = (col, row) => (col >= 0 && row >= 0 && col < width && row < height ? region[row][col] : null);
    const levelsAt = (col, row) => (regionAt(col, row) ? roomLevels[row][col] : 0);
    // пол и «под крышей»
    for (let row = 0; row < height; row++) for (let col = 0; col < width; col++) {
      if (!region[row][col]) continue;
      setFloor(0, col, row, col, row, FLOOR.interior);
      for (let level = 0; level < roomLevels[row][col]; level++) setIndoor(level, col, row, col, row);
    }
    // стены по граням
    for (let row = 0; row <= height; row++) for (let col = 0; col <= width; col++) {
      if (row < height) {
        const west = regionAt(col - 1, row), east = regionAt(col, row);
        if (west !== east) for (let level = 0; level < Math.max(levelsAt(col - 1, row), levelsAt(col, row)); level++) setW(level, col, row, 'wall', 'inner');
      }
      if (col < width) {
        const north = regionAt(col, row - 1), south = regionAt(col, row);
        if (north !== south) for (let level = 0; level < Math.max(levelsAt(col, row - 1), levelsAt(col, row)); level++) setN(level, col, row, 'wall', 'inner');
      }
    }
    // двери и ворота: (x, y) — клетка помещения, side — её грань, size — клеток вдоль грани
    for (const door of plan.doors) {
      const type = door.kind === 'gate' ? null : 'door';
      for (let step = 0; step < door.size; step++) {
        if (door.side === 'N') setN(0, door.x + step, door.y, type, 'inner');
        else if (door.side === 'S') setN(0, door.x + step, door.y + 1, type, 'inner');
        else if (door.side === 'W') setW(0, door.x, door.y + step, type, 'inner');
        else setW(0, door.x + 1, door.y + step, type, 'inner');
      }
    }
    // скала вокруг помещений (в пределах поля)
    for (let row = -1; row <= height; row++) for (let col = -1; col <= width; col++) {
      if (regionAt(col, row) || row + oy < 0 || row + oy >= TILES || col + ox < 0 || col + ox >= TILES) continue;
      let levels = 0;
      for (let deltaRow = -1; deltaRow <= 1; deltaRow++) for (let deltaCol = -1; deltaCol <= 1; deltaCol++) levels = Math.max(levels, levelsAt(col + deltaCol, row + deltaRow));
      if (!levels) continue;
      const variant = ((col + ox) * 7 + (row + oy) * 13) % 3;
      object('rockFill', 0, col, row, 1, 1, { type: `h${levels}v${variant}`, height: levels * LEVEL_H, variant });
    }

    // ---------- ангар 20×20 + техполоса 4×20, высота 4 уровня: платформа подъёмника с конвертопланом ----------
    // (кроме ангара, координаты обстановки ниже — в плане до увеличения ангара, сдвинутые на 8 клеток к востоку и югу)
    object('liftPlatform', 0, 0, 1, 20, 20, { blocks: false });
    const extraction = tiltrotor(8, 9);                  // посередине платформы, нос на запад, рампа к техполосе
    object('barrels', 0, 20, 1); object('barrels', 0, 21, 1); object('generator', 0, 22, 1, 2, 2);   // заправка
    object('crate', 0, 20, 3); object('crate', 0, 21, 3); object('console', 0, 23, 4);                // пульт подъёмника
    object('crate', 0, 22, 17); object('crate', 0, 23, 17); object('crate', 0, 23, 18);              // боеприпасы
    // ---------- мастерские ----------
    object('generator', 0, 24, 17, 2, 2); object('desk', 0, 24, 19, 2, 1); object('desk', 0, 27, 15, 2, 1);   // станки, верстаки
    object('rack', 0, 31, 15); object('rack', 0, 31, 16); object('crate', 0, 31, 20); object('crate', 0, 30, 20);
    object('rack', 0, 24, 11); object('rack', 0, 24, 12); object('crate', 0, 26, 11); object('crate', 0, 27, 11); object('crate', 0, 27, 12);   // склад материалов
    object('generator', 0, 28, 11, 2, 2); object('generator', 0, 31, 11, 2, 2); object('rack', 0, 32, 13); object('barrels', 0, 32, 14);   // электростанция
    // ---------- лаборатории, изолятор ----------
    object('tank', 0, 35, 12, 2, 3); object('cabinet', 0, 33, 12); object('console', 0, 33, 14);
    object('labTable', 0, 36, 16, 2, 1); object('labTable', 0, 36, 19, 2, 1); object('console', 0, 33, 17); object('cabinet', 0, 33, 20); object('rack', 0, 38, 16);
    object('labTable', 0, 41, 17, 2, 1); object('labTable', 0, 42, 19, 2, 1); object('cabinet', 0, 39, 16); object('console', 0, 44, 16); object('crate', 0, 39, 20);
    // ---------- грузовой шлюз ----------
    object('liftPlatform', 0, 52, 9, 4, 4, { blocks: false });
    object('crate', 0, 52, 9); object('crate', 0, 55, 12);
    object('crate', 0, 55, 15); object('crate', 0, 52, 15);                                           // приёмка
    object('console', 0, 52, 19); object('console', 0, 52, 20);                                     // КПП
    object('rack', 0, 48, 15); object('rack', 0, 48, 16); object('rack', 0, 48, 17); object('crate', 0, 48, 19); object('crate', 0, 48, 20); object('crate', 0, 51, 19); object('crate', 0, 51, 20); object('crate', 0, 51, 15);   // общий склад
    object('acUnit', 0, 48, 11, 2, 1); object('tank', 0, 50, 11, 2, 3); object('barrels', 0, 48, 13);   // жизнеобеспечение
    // ---------- снаряжение, оружейная, боеприпасы ----------
    for (const row of [24, 25, 26, 27]) object('locker', 0, 8, row);
    object('locker', 0, 9, 27); object('locker', 0, 11, 27);
    for (const col of [12, 13, 14, 15]) object('locker', 0, col, 27);                                   // стойки комплектов
    object('desk', 0, 12, 24, 2, 1);                                                                 // верстак
    for (const [col, row] of [[18, 24], [19, 24], [19, 25], [19, 27], [18, 27]]) object('crate', 0, col, row);
    // ---------- медпункт, командный пункт ----------
    object('bunk', 0, 20, 27, 2, 1); object('bunk', 0, 22, 27, 2, 1); object('cabinet', 0, 23, 24); object('console', 0, 20, 24);
    for (const col of [25, 26, 28, 29]) object('console', 0, col, 27);
    object('desk', 0, 28, 25, 2, 1); object('rack', 0, 25, 24);
    // ---------- столовая, кухня, отдых ----------
    object('desk', 0, 30, 25, 2, 1); object('desk', 0, 30, 27, 2, 1); object('desk', 0, 34, 26, 2, 1);
    object('cabinet', 0, 38, 24); object('cabinet', 0, 38, 25); object('cabinet', 0, 38, 26); object('crate', 0, 36, 27);
    object('desk', 0, 39, 25, 2, 1); object('console', 0, 43, 24);
    // ---------- каюты и санблоки ----------
    plan.rooms.filter((room) => room.width === 3 && room.height === 3).forEach((room) => {
      const doorOnSouth = plan.doors.some((door) => door.side === 'S' && door.y === room.y + room.height - 1 && door.x >= room.x && door.x < room.x + room.width);
      const bedRow = doorOnSouth ? room.y : room.y + room.height - 1;
      object('bunk', 0, room.x, bedRow, 2, 1);
      object('locker', 0, room.x + 2, doorOnSouth ? room.y + room.height - 1 : room.y);
    });
    object('locker', 0, 32, 29); object('locker', 0, 32, 30); object('locker', 0, 32, 31); object('cabinet', 0, 29, 31); object('cabinet', 0, 30, 31);
    object('locker', 0, 51, 25); object('locker', 0, 51, 26); object('cabinet', 0, 48, 25); object('cabinet', 0, 49, 25);

    const at = (col, row, direction) => [col + ox, row + oy, 0, direction];
    return {
      // отряд — в техполосе ангара напротив рампы, K7 — в галерее у ворот ангара;
      // пришельцы вошли через грузовой лифт: в шахте, шлюзе и приёмке
      squad: [at(21, 9, 1), at(22, 9, 1), at(21, 10, 1), at(22, 10, 1), at(21, 11, 1), at(22, 11, 1)],
      mech: [at(16, 21, 7)],
      aliens: [at(53, 10, 1), at(54, 10, 1), at(53, 11, 1), at(54, 11, 1), at(52, 13, 3), at(55, 14, 3), at(53, 16, 3), at(54, 17, 3)],
      extraction,
    };
  }

  let spawns, extraction = null;
  if (MAP_NAME === 'big') {
    // сектора: (0, 0) база — пришельцы, (1, 0) просторные здания, (0, 1) стоянка, (1, 1) посадка — отряд в конвертоплане
    ox = 0; oy = 0; outpostSector();
    ox = SECTOR; oy = 0; spaciousSector();
    ox = 0; oy = SECTOR; parkingSector();
    ox = SECTOR; oy = SECTOR; const landing = landingSector();
    extraction = landing.extraction;
    spawns = {
      squad: landing.squad, mech: landing.mech,
      // 10 пришельцев на базе: двор, корпус (оба этажа), под настилом, кабина на настиле, вышка
      aliens: [[9, 4, 1, 1], [4, 4, 1, 1], [5, 7, 0, 1], [9, 4, 0, 3], [17, 6, 0, 1], [17, 5, 1, 1], [20, 14, 3, 1],
        [11, 14, 0, 1], [3, 15, 0, 0], [16, 11, 0, 7]],
    };
  } else if (MAP_NAME === 'base') {
    const base = baseMap();
    extraction = base.extraction;
    spawns = { squad: base.squad, mech: base.mech, aliens: base.aliens };
  } else {
    outpostSector();
    spawns = [
      [3, 18, 0, 7], [5, 18, 0, 7], [3, 20, 0, 0], [5, 20, 0, 0],        // бойцы у посадочной площадки
      [9, 4, 1, 1], [17, 6, 0, 1],                                         // пришельцы: этаж 1 корпуса, под настилом
      [10, 18, 0, 6],                                                      // робот
    ];
  }

  return { MAP_NAME, TILE, TILES, LEVELS, LEVEL_H, floor, offset, wallW, wallN, indoor, objects, stairs, links, buildings, spawns, extraction, concrete, blockedCells,
    name: MAP_NAME === 'big' ? 'Посадка у базы (48×48)' : MAP_NAME === 'base' ? 'База «Ямантау»' : 'База на плато', combat: MAP_NAME === 'big' || MAP_NAME === 'base' };
}
