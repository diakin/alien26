// Клетки, которые задевает группа (срезы тайлов), и препятствия для пуль — рамки предметов по клеткам.
// Общий модуль: набор тайлов (tileset.js) и данные карты без тайлов (baselogic.js).
import * as THREE from 'three';
import { TILE, TILES, LEVELS, LEVEL_H } from './outpost_layout.js';
const V = (x, y, z) => new THREE.Vector3(x, y, z);

// клетки (и уровни, если levelCut), которые задевают рамки мешей группы
export function touchedSlices(group, levelCut, baseLevel) {
  group.updateMatrixWorld(true);
  const found = new Map();
  group.traverse((node) => {
    if (!node.isMesh) return;
    const box = new THREE.Box3().setFromObject(node);
    if (box.isEmpty()) return;
    const col0 = Math.max(0, Math.floor(box.min.x / TILE)), col1 = Math.min(TILES - 1, Math.floor((box.max.x - 1e-6) / TILE));
    const row0 = Math.max(0, Math.floor(box.min.z / TILE)), row1 = Math.min(TILES - 1, Math.floor((box.max.z - 1e-6) / TILE));
    const level0 = levelCut ? Math.max(0, Math.floor((box.min.y - 0.05) / LEVEL_H)) : baseLevel;
    const level1 = levelCut ? Math.min(LEVELS - 1, Math.floor((box.max.y - 0.05 - 1e-6) / LEVEL_H)) : baseLevel;
    for (let level = level0; level <= level1; level++) for (let row = row0; row <= row1; row++) for (let col = col0; col <= col1; col++) found.set(`${col},${row},${level}`, { col, row, level, levelCut });
  });
  return [...found.values()];
}

// рамки отдельных деталей с пометкой solid (корпус конвертоплана), каждая — по клеткам: салон внутри свободен
function preciseBoxes(group, level) {
  const boxes = [], round = (value) => Math.round(value * 1000) / 1000;
  group.traverse((node) => {
    if (!node.isMesh || !node.userData.solid) return;
    const whole = new THREE.Box3().setFromObject(node);
    const col0 = Math.max(0, Math.floor(whole.min.x / TILE)), col1 = Math.min(TILES - 1, Math.floor((whole.max.x - 1e-6) / TILE));
    const row0 = Math.max(0, Math.floor(whole.min.z / TILE)), row1 = Math.min(TILES - 1, Math.floor((whole.max.z - 1e-6) / TILE));
    for (let row = row0; row <= row1; row++) for (let col = col0; col <= col1; col++) {
      const box = whole.clone().intersect(new THREE.Box3(V(col * TILE, -100, row * TILE), V((col + 1) * TILE, 100, (row + 1) * TILE)));
      if (box.isEmpty() || box.max.y - box.min.y < 0.05) continue;
      boxes.push([level, col, row, round(box.min.x / TILE), round(box.min.z / TILE), round(box.max.x / TILE), round(box.max.z / TILE), round(box.min.y), round(box.max.y)]);
    }
  });
  return boxes;
}

// Предметы с просветами (крона над стволом, фонарь с кронштейном, чаша фонтана, качели): рамка на каждую часть
// модели в каждой клетке, а не одна на весь предмет — иначе под кроной соседних со стволом клеток рамка шла бы
// от земли до верха кроны и закрывала линию огня. Прозрачные части (струи фонтана) пулю не останавливают.
const PER_PART = new Set(['tree', 'fountain', 'streetLamp', 'lamp', 'swing', 'slide', 'carousel', 'busStop', 'balcony', 'column']);
function partBoxes(group, level) {
  const boxes = [], round = (value) => Math.round(value * 1000) / 1000;
  group.traverse((node) => {
    if (!node.isMesh) return;
    const materials = Array.isArray(node.material) ? node.material : [node.material];
    if (materials.every((material) => material.transparent && material.opacity < 0.6)) return;
    const whole = new THREE.Box3().setFromObject(node);
    const col0 = Math.max(0, Math.floor(whole.min.x / TILE)), col1 = Math.min(TILES - 1, Math.floor((whole.max.x - 1e-6) / TILE));
    const row0 = Math.max(0, Math.floor(whole.min.z / TILE)), row1 = Math.min(TILES - 1, Math.floor((whole.max.z - 1e-6) / TILE));
    for (let row = row0; row <= row1; row++) for (let col = col0; col <= col1; col++) {
      const box = whole.clone().intersect(new THREE.Box3(V(col * TILE, -100, row * TILE), V((col + 1) * TILE, 100, (row + 1) * TILE)));
      if (box.isEmpty() || box.max.y - box.min.y < 0.05) continue;
      boxes.push([level, col, row, round(box.min.x / TILE), round(box.min.z / TILE), round(box.max.x / TILE), round(box.max.z / TILE), round(box.min.y), round(box.max.y)]);
    }
  });
  return boxes;
}

// Препятствия для пуль: рамки предметов по клеткам и уровням (без лестниц, вышки и мелочей фасада —
// они тонкие или висят на стенах). [уровень, col, row, x0, z0, x1, z1, y0, y1]: x и z в клетках, y в метрах.
export function solidBoxes(layout, buildObject) {
  const boxes = [];
  for (const item of layout.objects) {
    if (item.kind === 'towerLeg' || item.kind === 'ladder') continue;
    if (item.kind === 'paint' || item.kind === 'liftPlatform') continue;
    const group = buildObject(item, LEVELS - 1);
    if (!group) continue;
    group.updateMatrixWorld(true);
    if (item.kind === 'tiltrotor') { boxes.push(...preciseBoxes(group, item.level)); continue; }
    if (PER_PART.has(item.kind)) { boxes.push(...partBoxes(group, item.level)); continue; }
    for (const slice of touchedSlices(group, false, item.level)) {
      const box = new THREE.Box3();
      group.traverse((node) => { if (node.isMesh) box.union(new THREE.Box3().setFromObject(node)); });
      box.intersect(new THREE.Box3(V(slice.col * TILE, -100, slice.row * TILE), V((slice.col + 1) * TILE, 100, (slice.row + 1) * TILE)));
      if (box.isEmpty() || box.max.y - box.min.y < 0.05) continue;
      const round = (value) => Math.round(value * 1000) / 1000;
      boxes.push([slice.level, slice.col, slice.row, round(box.min.x / TILE), round(box.min.z / TILE), round(box.max.x / TILE), round(box.max.z / TILE), round(box.min.y), round(box.max.y)]);
    }
  }
  return boxes;
}
