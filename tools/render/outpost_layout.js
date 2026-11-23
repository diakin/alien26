// Разметка тестовой карты «База на плато»: клетки, 4 уровня по высоте, стены по краям клеток.
// Общий модуль: по нему строится 3D-сцена (outpost.js) и данные для игры (проходимость, лестницы).
//
// Клетка (col, row) — квадрат TILE м; col растёт вправо-вниз по экрану, row — влево-вниз.
// Уровень L — этаж высотой LEVEL_H м, пол уровня на высоте L * LEVEL_H.
// Стена W клетки лежит на её левой-верхней грани (между col-1 и col), стена N — на правой-верхней
// (между row-1 и row). Так у каждой грани один хозяин, как в UFO.

export const TILE = 1.25, TILES = 24, LEVELS = 4, LEVEL_H = 2.5;

// типы стен; blocks — нельзя пройти через грань
export const WALL_TYPES = {
  wall: { blocks: true }, window: { blocks: true }, door: { blocks: false },
  rail: { blocks: true }, parapet: { blocks: true }, barrier: { blocks: true },
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

  // уровень 0 — грунт везде
  for (let row = 0; row < TILES; row++) for (let col = 0; col < TILES; col++) floor[0][row][col] = FLOOR.ground;

  const setFloor = (level, col0, row0, col1, row1, type) => {
    for (let row = row0; row <= row1; row++) for (let col = col0; col <= col1; col++) floor[level][row][col] = type;
  };
  const setIndoor = (level, col0, row0, col1, row1) => {
    for (let row = row0; row <= row1; row++) for (let col = col0; col <= col1; col++) indoor[level][row][col] = 1;
  };
  // периметр прямоугольника [col0..col1] x [row0..row1]
  const perimeter = (level, col0, row0, col1, row1, type, style) => {
    for (let row = row0; row <= row1; row++) {
      wallW[level][row][col0] = { type, style };
      wallW[level][row][col1 + 1] = { type, style };
    }
    for (let col = col0; col <= col1; col++) {
      wallN[level][row0][col] = { type, style };
      wallN[level][row1 + 1][col] = { type, style };
    }
  };
  const lineW = (level, col, row0, row1, type, style) => { for (let row = row0; row <= row1; row++) wallW[level][row][col] = { type, style }; };
  const lineN = (level, row, col0, col1, type, style) => { for (let col = col0; col <= col1; col++) wallN[level][row][col] = { type, style }; };
  const setW = (level, col, row, type, style) => { wallW[level][row][col] = { type, style }; };
  const setN = (level, col, row, type, style) => { wallN[level][row][col] = { type, style }; };
  const object = (kind, level, col, row, cols = 1, rows = 1, extra = {}) => objects.push({ kind, level, col, row, cols, rows, rotation: 0, blocks: true, ...extra });
  // лестница: count клеток от (col, row) в направлении (dirCol, dirRow), подъём на один уровень
  const stairRun = (level, col, row, dirCol, dirRow, count, style) => {
    stairs.push({ level, col, row, dirCol, dirRow, count, style });
    for (let step = 0; step < count; step++) {
      const stepCol = col + dirCol * step, stepRow = row + dirRow * step;
      floor[level][stepRow][stepCol] = FLOOR.stairs;
      offset[level][stepRow][stepCol] = (step + 0.5) / count * LEVEL_H;
      if (level + 1 < LEVELS) floor[level + 1][stepRow][stepCol] = FLOOR.none;   // проём над лестницей
    }
  };

  // ---------------- жилой корпус: 2 этажа и крыша ----------------
  const hab = { name: 'hab', col0: 3, row0: 3, col1: 10, row1: 9, levels: 2, style: 'hab' };
  buildings.push(hab);
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
  links.push({ from: [11, 9, 0], to: [10, 9, 2], cost: 16, kind: 'ladder', wall: 'W', col: 11, row: 9 });
  objects.push({ kind: 'ladder', level: 0, col: 11, row: 9, cols: 1, rows: 1, blocks: false, height: 2 * LEVEL_H + 0.9, side: 'W' });

  // ---------------- платформа на опорах с кабиной ----------------
  const deck = { name: 'deck', col0: 15, row0: 4, col1: 19, row1: 8, style: 'deck' };
  buildings.push(deck);
  setFloor(1, 15, 4, 19, 8, FLOOR.deck);
  perimeter(1, 15, 4, 19, 8, 'rail', 'deck');
  wallN[1][9][17] = null;                       // проход к наружной лестнице
  for (const [col, row] of [[15, 4], [19, 4], [15, 8], [19, 8], [17, 4]]) object('pylon', 0, col, row);
  stairRun(0, 17, 11, 0, -1, 3, 'deck');        // ступени (17,11)-(17,9), выход на настил в (17,8)
  // кабина на настиле
  const cabin = { name: 'cabin', col0: 16, row0: 4, col1: 18, row1: 6, levels: 1, style: 'cabin', base: 1 };
  buildings.push(cabin);
  perimeter(1, 16, 4, 18, 6, 'wall', 'cabin');
  setN(1, 17, 7, 'door', 'cabin'); setW(1, 19, 5, 'window', 'cabin'); setN(1, 16, 7, 'window', 'cabin');
  setFloor(1, 16, 4, 18, 6, FLOOR.interior);
  setFloor(2, 16, 4, 18, 6, FLOOR.roof);
  perimeter(2, 16, 4, 18, 6, 'parapet', 'cabin');
  setIndoor(1, 16, 4, 18, 6);
  object('console', 1, 16, 4); object('rack', 1, 18, 4);
  object('dish', 2, 17, 5);
  links.push({ from: [19, 6, 1], to: [18, 6, 2], cost: 10, kind: 'ladder', wall: 'W', col: 19, row: 6 });
  objects.push({ kind: 'ladder', level: 1, col: 19, row: 6, cols: 1, rows: 1, blocks: false, height: LEVEL_H + 0.9, side: 'W' });
  // под настилом — тень, грунт; бочки и ящики рядом
  object('barrels', 0, 16, 6); object('crate', 0, 18, 7);

  // ---------------- сторожевая вышка: площадка на уровне 3 ----------------
  const tower = { name: 'tower', col0: 20, row0: 14, col1: 21, row1: 15, style: 'tower' };
  buildings.push(tower);
  setFloor(3, 20, 14, 21, 15, FLOOR.deck);
  perimeter(3, 20, 14, 21, 15, 'rail', 'tower');
  for (const [col, row] of [[20, 14], [21, 14], [20, 15], [21, 15]]) object('towerLeg', 0, col, row);
  object('searchlight', 3, 21, 14);
  links.push({ from: [20, 16, 0], to: [20, 15, 3], cost: 24, kind: 'ladder', wall: 'N', col: 20, row: 16 });
  objects.push({ kind: 'ladder', level: 0, col: 20, row: 16, cols: 1, rows: 1, blocks: false, height: 3 * LEVEL_H + 0.9, side: 'N' });
  wallN[3][16][20] = null;                       // проход с лестницы на площадку

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

  const spawns = [
    [3, 18, 0, 7], [5, 18, 0, 7], [3, 20, 0, 0], [5, 20, 0, 0],        // бойцы у посадочной площадки
    [9, 4, 1, 1], [17, 6, 0, 1],                                         // пришельцы: этаж 1 корпуса, под настилом
    [10, 18, 0, 6],                                                      // робот
  ];

  return { TILE, TILES, LEVELS, LEVEL_H, floor, offset, wallW, wallN, indoor, objects, stairs, links, buildings, spawns };
}
