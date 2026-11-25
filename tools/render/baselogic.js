// Данные карты для игры прямо из разметки, без рендера тайлов: проходимость, стены, двери, места высадки,
// препятствия для пуль. То же, что пишет tilesetbuild.py (map_from_layout) вместе с solids из tileset.js.
// Запуск: node baselogic.mjs ../../game (карта — ?map=, по умолчанию base).
import { TILE, LEVELS, LEVEL_H } from './outpost_layout.js';
import { layout, buildObject } from './outpost_scene.js';
import { solidBoxes } from './solids.js';

const WALL_CODES = { wall: 1, window: 2, door: 3, rail: 4, parapet: 5, barrier: 6, hull: 7 };

function mapFromLayout() {
  const tiles = layout.TILES;
  const flat = (grid, size, convert = (value) => value) => grid.map((levelGrid) => {
    const result = [];
    for (let row = 0; row < size; row++) for (let col = 0; col < size; col++) result.push(convert(levelGrid[row][col]));
    return result;
  });
  const blocked = Array.from({ length: LEVELS }, () => new Array(tiles * tiles).fill(0));
  for (const item of layout.objects) {
    if (item.blocks === false) continue;
    for (let row = item.row; row < item.row + item.rows; row++) for (let col = item.col; col < item.col + item.cols; col++) blocked[item.level][row * tiles + col] = 1;
  }
  for (const [level, col, row] of layout.blockedCells || []) blocked[level][row * tiles + col] = 1;
  const doors = [];
  for (let level = 0; level < LEVELS; level++) {
    for (let row = 0; row <= tiles; row++) for (let col = 0; col <= tiles; col++) {
      for (const [orient, grid] of [['W', layout.wallW], ['N', layout.wallN]]) {
        const wall = grid[level][row][col];
        if (wall && wall.type === 'door') doors.push([col, row, level, orient === 'W' ? 0 : 1]);
      }
    }
  }
  // широкие проёмы: группы дверей (номера в doors) с общим состоянием; airlock — номер шлюза (у шлюза две группы)
  const doorNumber = new Map(doors.map((door, index) => [door.join('|'), index]));
  const gates = (layout.gates || []).map((gate) => ({ kind: gate.kind, airlock: gate.airlock, height: gate.height,
    doors: gate.edges.map(([col, row, orient, level]) => doorNumber.get([col, row, level || 0, orient === 'W' ? 0 : 1].join('|'))) }));
  const round3 = (value) => Math.round(value * 1000) / 1000;
  return {
    name: layout.name, combat: layout.combat, tiles, levels: LEVELS, levelHeight: LEVEL_H, tile: TILE,
    floor: flat(layout.floor, tiles),
    offset: flat(layout.offset, tiles, round3),
    wallW: flat(layout.wallW, tiles + 1, (wall) => (wall ? WALL_CODES[wall.type] || 0 : 0)),
    wallN: flat(layout.wallN, tiles + 1, (wall) => (wall ? WALL_CODES[wall.type] || 0 : 0)),
    indoor: flat(layout.indoor, tiles),
    blocked, doors, ...(gates.length ? { gates } : {}),
    stairs: layout.stairs.map((stair) => [stair.level, stair.col, stair.row, stair.dirCol, stair.dirRow, stair.count]),
    links: layout.links.map((link) => ({ from: link.from, to: link.to, cost: link.cost, kind: link.kind })),
    spawns: layout.spawns,
    extraction: layout.extraction === undefined ? null : layout.extraction,
    ...(layout.mission ? { mission: layout.mission } : {}),
    ...(layout.caption ? { caption: layout.caption } : {}),
    solids: solidBoxes(layout, buildObject),
  };
}

window.logicData = () => mapFromLayout();
window.ready = true;
