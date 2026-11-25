// 3D-сцена тестовой карты «База на плато»: рендерер, свет, материалы и построители элементов.
// Общий модуль для рендера карты целиком (outpost.js) и для рендера набора тайлов (tileset.js).
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { mulberry32, rockTextures, rockGeometry, screenTexture, setEnvIntensity } from './lib.js';
import { toXZ, bladeGeometry, grassMaterial } from './world.js';
import { buildLayout, rotateLayout, VIEW_TURNS, TILE, TILES, LEVELS, LEVEL_H, FLOOR, WALL_TYPES, MAP_NAME } from './outpost_layout.js';
import { buildArmyTruck, ARMY_TRUCK, buildTiltrotor, buildCar, CARS } from './vehicles.js';
import {
  wallPanelTextures, interiorFloorTextures, roofTextures, gratingTextures, corrugatedTextures,
  concreteTextures, groundBumpTexture, groundTexture,
} from './outpost_textures.js';
import { GALLEY_KINDS, buildGalleyObject } from './galley.js';
import { FURNITURE_KINDS, buildFurnitureObject } from './furniture.js';
import { buildCityWall, buildCityDoorLeaf, buildCityObject, floorMaterial, CITY_MAT, STAIR_MATERIALS, isCityFacade } from './city_scene.js';
const CITY = MAP_NAME === 'city';

export const layout = rotateLayout(buildLayout(), VIEW_TURNS);
export const PPM = 1280 / 18.5;            // пикселей на метр (как спрайты x1)
export const SS = 2;                       // суперсэмплинг
export const SIZE = TILE * TILES;
export const CENTER = new THREE.Vector3(SIZE / 2, 0, SIZE / 2);
export const SLAB = 0.22, THICK = 0.18, PANEL_H = LEVEL_H - SLAB;
export const PART = { ground: 0, floor: 1, wallW: 2, wallN: 3, object: 4, doorW: 5, doorN: 6 };
export const V = (x, y, z) => new THREE.Vector3(x, y, z);

// ---------------- рендерер, свет ----------------
// globalThis.ALIENS_RENDERER_ALPHA — прозрачный холст (WebGL-карта в игре рисует слой «то, что перед юнитами»)
export const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true, alpha: !!(typeof globalThis !== 'undefined' && globalThis.ALIENS_RENDERER_ALPHA) });
renderer.setPixelRatio(1);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild(renderer.domElement);

export const scene = new THREE.Scene();
// подземная база: свет потолочных ламп — почти сверху, мягче, без длинных теней; рассеянный свет сильнее
const UNDERGROUND = MAP_NAME === 'base';
scene.background = new THREE.Color(UNDERGROUND ? 0x0c0b0a : 0x1a1610);
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;
scene.add(UNDERGROUND ? new THREE.HemisphereLight(0xe4ecf4, 0x4c4842, 1.25) : new THREE.HemisphereLight(0xc8dcff, 0x5a4a34, 0.75));
export const sun = new THREE.DirectionalLight(UNDERGROUND ? 0xfff6ea : 0xfff4e0, UNDERGROUND ? 2.6 : 4.2);
{ const offset = toXZ(-11, 7.5), spread = UNDERGROUND ? 0.45 : 1.6; sun.position.set(CENTER.x + offset.x * spread, UNDERGROUND ? 24 : 17.6, CENTER.z + offset.y * spread); }
sun.target.position.copy(CENTER);
sun.castShadow = true;
sun.shadow.mapSize.set(4096, 4096);
Object.assign(sun.shadow.camera, { left: -27, right: 27, top: 27, bottom: -27, near: 1, far: 90 });
sun.shadow.camera.updateProjectionMatrix();
sun.shadow.bias = -0.0003;
sun.shadow.normalBias = 0.025;
sun.shadow.radius = 2;
scene.add(sun, sun.target);

// ---------------- материалы ----------------
const cache = new Map();
const once = (key, make) => { if (!cache.has(key)) cache.set(key, make()); return cache.get(key); };
const standard = (key, options) => once(key, () => new THREE.MeshStandardMaterial(options));

export const MAT = {
  trim: () => standard('trim', { color: 0x3a3e42, roughness: 0.55, metalness: 0.4 }),
  orange: () => standard('orange', { color: 0xd2621e, roughness: 0.5, metalness: 0.2 }),
  yellow: () => standard('yellow', { color: 0xd8a420, roughness: 0.5, metalness: 0.2 }),
  steel: () => standard('steel', { color: 0x8a9096, roughness: 0.35, metalness: 0.8 }),
  darkSteel: () => standard('darkSteel', { color: 0x2c3034, roughness: 0.5, metalness: 0.6 }),
  white: () => standard('white', { color: 0xd8dad6, roughness: 0.45, metalness: 0.1 }),
  rubber: () => standard('rubber', { color: 0x1c1c1c, roughness: 0.9 }),
  paint: () => standard('paint', { color: 0xe2ded0, roughness: 0.8, metalness: 0.0 }),
  glass: () => once('glass', () => new THREE.MeshPhysicalMaterial({ color: 0x101820, roughness: 0.08, metalness: 0.1, clearcoat: 1, envMapIntensity: 1.5 })),
  ceiling: () => standard('ceiling', { color: 0x4a4c4c, roughness: 0.8 }),
  slabEdge: () => standard('slabEdge', { color: 0x5c6062, roughness: 0.7, metalness: 0.2 }),
  lightOn: () => standard('lightOn', { color: 0xfff2d0, emissive: 0xffe2a0, emissiveIntensity: 2.2 }),
  screen: (seed) => once('screen' + seed, () => new THREE.MeshStandardMaterial({ map: screenTexture(['#5fd0ff', '#ffb347', '#7dff9a'][seed % 3], seed, 'text'), emissive: 0xffffff, emissiveMap: screenTexture(['#5fd0ff', '#ffb347', '#7dff9a'][seed % 3], seed, 'text'), emissiveIntensity: 0.9 })),
  wall: (style, variant) => once(`wall_${style}_${variant}`, () => {
    const textures = wallPanelTextures(style, variant);
    return new THREE.MeshStandardMaterial({ map: textures.map, normalMap: textures.normalMap, roughness: style === 'inner' ? 0.8 : 0.6, metalness: style === 'inner' ? 0 : 0.15 });
  }),
  interiorFloor: () => once('interiorFloor', () => { const textures = interiorFloorTextures(); return new THREE.MeshStandardMaterial({ map: textures.map, normalMap: textures.normalMap, roughness: 0.55, metalness: 0.5 }); }),
  roof: () => once('roof', () => { const textures = roofTextures(); return new THREE.MeshStandardMaterial({ map: textures.map, normalMap: textures.normalMap, roughness: 0.9 }); }),
  grating: () => once('grating', () => { const textures = gratingTextures(); return new THREE.MeshStandardMaterial({ map: textures.map, normalMap: textures.normalMap, roughness: 0.5, metalness: 0.7 }); }),
  concrete: () => once('concrete', () => { const textures = concreteTextures(); return new THREE.MeshStandardMaterial({ map: textures.map, roughness: 0.95 }); }),
  container: (color) => once('container_' + color, () => {
    const textures = corrugatedTextures(color === 'orange' ? 3 : 9);
    return new THREE.MeshStandardMaterial({ map: textures.map, normalMap: textures.normalMap, color: color === 'orange' ? 0xc2551c : 0x2f5e8a, roughness: 0.6, metalness: 0.3 });
  }),
  rock: () => once('rock', () => { const textures = rockTextures(5, [150, 116, 88]); return new THREE.MeshStandardMaterial({ normalMap: textures.normalMap, color: 0x9c7a5e, roughness: 0.92 }); }),
  // скала подземной базы: бока блока и срез сверху
  baseRock: (variant) => once('baseRock' + variant, () => { const textures = rockTextures(11 + variant * 7, [120, 112, 102]); return new THREE.MeshStandardMaterial({ normalMap: textures.normalMap, color: 0x5e5750, roughness: 0.95 }); }),   // только рельеф: цветная карта на боках рябит
  rockCut: (variant) => once('rockCut' + variant, () => { const textures = rockTextures(31 + variant * 5, [92, 86, 80]); return new THREE.MeshStandardMaterial({ normalMap: textures.normalMap, color: 0x57524c, roughness: 0.98 }); }),   // без цветной карты: в ней пятна «лишайника»
};

// ---------------- пометки для прохода ID ----------------
function tag(object, part, level, { biasCol = 0, biasRow = 0, auto = false } = {}) {
  object.traverse((node) => {
    if (node.isMesh) {
      node.userData.id = { part, level, biasCol, biasRow, auto };
      node.castShadow = true;
      node.receiveShadow = !node.userData.noShadowReceive;     // скала базы: свет почти сверху — на боках полосы самозатенения
    }
  });
  return object;
}

function box(width, height, depth, material, x, y, z) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
  mesh.position.set(x, y, z);
  return mesh;
}
function cylinder(radiusTop, radiusBottom, height, material, x, y, z, segments = 16) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radiusTop, radiusBottom, height, segments), material);
  mesh.position.set(x, y, z);
  return mesh;
}
// брус между двумя точками
function beam(from, to, size, material) {
  const direction = new THREE.Vector3().subVectors(to, from);
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(size, direction.length(), size), material);
  mesh.position.copy(from).addScaledVector(direction, 0.5);
  mesh.quaternion.setFromUnitVectors(V(0, 1, 0), direction.normalize());
  return mesh;
}
function tube(from, to, radius, material) {
  const direction = new THREE.Vector3().subVectors(to, from);
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, direction.length(), 8), material);
  mesh.position.copy(from).addScaledVector(direction, 0.5);
  mesh.quaternion.setFromUnitVectors(V(0, 1, 0), direction.normalize());
  return mesh;
}

export const hashTile = (col, row, level) => ((col * 73856093) ^ (row * 19349663) ^ (level * 83492791)) >>> 0;
export const isIndoor = (level, col, row) => col >= 0 && row >= 0 && col < TILES && row < TILES && layout.indoor[level][row][col] === 1;

// ---------------- стены ----------------
// коробка стены на грани: along — отрезок вдоль грани от её начала, y — от пола уровня
export function wallBox(orient, col, row, level, along0, along1, y0, y1, materials, thickness = THICK) {
  const length = along1 - along0, height = y1 - y0, base = level * LEVEL_H;
  const geometry = orient === 'W' ? new THREE.BoxGeometry(thickness, height, length) : new THREE.BoxGeometry(length, height, thickness);
  const centerX = orient === 'W' ? col * TILE : col * TILE + (along0 + along1) / 2;
  const centerZ = orient === 'W' ? row * TILE + (along0 + along1) / 2 : row * TILE;
  geometry.translate(centerX, base + (y0 + y1) / 2, centerZ);
  const position = geometry.attributes.position, uv = geometry.attributes.uv;
  for (let index = 0; index < position.count; index++) {
    const along = orient === 'W' ? position.getZ(index) - row * TILE : position.getX(index) - col * TILE;
    uv.setXY(index, along / TILE, (position.getY(index) - base) / PANEL_H);
  }
  return new THREE.Mesh(geometry, materials);
}

function wallMaterials(orient, col, row, level, style) {
  const variant = hashTile(col, row, level) % 3;
  const sideFor = (tileCol, tileRow) => (style === 'inner' || isIndoor(level, tileCol, tileRow)) ? MAT.wall('inner', variant % 2) : MAT.wall(style, variant);
  const front = sideFor(col, row);                                       // сторона клетки-хозяина (+x для W, +z для N)
  const back = orient === 'W' ? sideFor(col - 1, row) : sideFor(col, row - 1);
  const trim = MAT.trim();
  return orient === 'W' ? [front, back, trim, trim, trim, trim] : [trim, trim, trim, trim, front, back];
}

// вид створки двери города: стальная у хранилища, парадная у наружных стен, деревянная внутри
export const doorLeafKind = (wall) => (!CITY ? 'base' : wall.style === 'vault' ? 'vault' : isCityFacade(wall.style) ? 'outer' : 'inner');
export function buildWall(orient, col, row, level, wall, cut) {
  if (CITY && wall.type !== 'barrier') {
    const group = buildCityWall(orient, col, row, level, wall, cut, { wallBox, isIndoor, THICK, PANEL_H });
    if (wall.type === 'door') {
      const width = 0.92, top = Math.min(2.1, cut ? 0.8 : PANEL_H);
      doorLeaves.add(buildDoorLeaf(orient, col, row, level, (TILE - width) / 2, (TILE + width) / 2, top, doorLeafKind(wall)));
    }
    return tag(group, orient === 'W' ? PART.wallW : PART.wallN, level, orient === 'W' ? { biasCol: 0.15 } : { biasRow: 0.15 });
  }
  const group = new THREE.Group();
  const type = wall.type, style = wall.style;
  const full = cut ? 0.8 : PANEL_H;
  const extend = THICK / 2;
  if (type === 'wall' || type === 'door' || type === 'window') {
    const materials = wallMaterials(orient, col, row, level, style === 'concrete' ? 'hab' : style);
    if (type === 'wall' || (type === 'window' && cut)) {
      group.add(wallBox(orient, col, row, level, -extend, TILE + extend, 0, full, materials));
    } else if (type === 'door' && wall.gate) {
      // клетка широкого проёма (ворота шлюза или двойная дверь): стойки только по краям группы, подъёмная створка
      // высокие ворота (маршрут K7) — грани на уровнях 0 и 1: на нижнем проём во всю высоту уровня, на верхнем — до верха ворот
      const { startOpen, endOpen, heavy, left, right, post } = gateShape(orient, col, row, level, wall);
      const top = Math.min(wall.gate.height - level * LEVEL_H, full);
      // нижняя часть высоких ворот: стойки и створка до пола следующего уровня, без щели на месте перекрытия
      const leafTop = gateLeafTop(level, wall, cut);
      if (!startOpen) group.add(wallBox(orient, col, row, level, -extend, 0, 0, full, materials));
      if (!endOpen) group.add(wallBox(orient, col, row, level, TILE, TILE + extend, 0, full, materials));
      if (full > top + 0.01) group.add(wallBox(orient, col, row, level, startOpen ? 0 : -0.001, endOpen ? TILE : TILE + 0.001, top, full, materials));
      const frameMaterial = heavy ? MAT.yellow() : MAT.orange();
      const frame = Array(6).fill(frameMaterial);
      if (!startOpen) group.add(wallBox(orient, col, row, level, 0, post, 0, leafTop, frame, THICK + 0.08));
      if (!endOpen) group.add(wallBox(orient, col, row, level, TILE - post, TILE, 0, leafTop, frame, THICK + 0.08));
      if (full > top + 0.01) group.add(wallBox(orient, col, row, level, left - 0.001, right + 0.001, top, top + 0.12, frame, THICK + 0.08));
      if (level === 0) group.add(wallBox(orient, col, row, level, left, right, 0, 0.03, Array(6).fill(MAT.darkSteel()), THICK + 0.14));
      doorLeaves.add(buildGateLeaf(orient, col, row, level, left, right, leafTop, heavy, wall.gate.height));
    } else if (type === 'door') {
      const width = 0.92, top = Math.min(2.1, full);
      const left = (TILE - width) / 2, right = (TILE + width) / 2;
      group.add(wallBox(orient, col, row, level, -extend, left, 0, full, materials));
      group.add(wallBox(orient, col, row, level, right, TILE + extend, 0, full, materials));
      if (full > top + 0.01) group.add(wallBox(orient, col, row, level, left, right, top, full, materials));
      // оранжевая рамка проёма и порог
      const frame = [MAT.orange(), MAT.orange(), MAT.orange(), MAT.orange(), MAT.orange(), MAT.orange()];
      group.add(wallBox(orient, col, row, level, left - 0.06, left, 0, top, frame, THICK + 0.05));
      group.add(wallBox(orient, col, row, level, right, right + 0.06, 0, top, frame, THICK + 0.05));
      if (full > top + 0.01) group.add(wallBox(orient, col, row, level, left - 0.06, right + 0.06, top, top + 0.07, frame, THICK + 0.05));
      group.add(wallBox(orient, col, row, level, left, right, 0, 0.03, [MAT.darkSteel(), MAT.darkSteel(), MAT.darkSteel(), MAT.darkSteel(), MAT.darkSteel(), MAT.darkSteel()], THICK + 0.1));
      doorLeaves.add(buildDoorLeaf(orient, col, row, level, left, right, top));
      // лампа над внешней дверью
      if (style !== 'inner' && !cut) {
        const outsideSign = isIndoor(level, col, row) ? -1 : 1;
        const lampOffset = outsideSign * (THICK / 2 + 0.06);
        const along = TILE / 2;
        const lamp = orient === 'W'
          ? box(0.12, 0.07, 0.3, MAT.lightOn(), col * TILE + lampOffset, level * LEVEL_H + 2.3, row * TILE + along)
          : box(0.3, 0.07, 0.12, MAT.lightOn(), col * TILE + along, level * LEVEL_H + 2.3, row * TILE + lampOffset);
        group.add(lamp);
      }
    } else {
      const width = 0.82, sill = 0.95, top = 1.9;
      const left = (TILE - width) / 2, right = (TILE + width) / 2;
      group.add(wallBox(orient, col, row, level, -extend, left, 0, full, materials));
      group.add(wallBox(orient, col, row, level, right, TILE + extend, 0, full, materials));
      group.add(wallBox(orient, col, row, level, left, right, 0, sill, materials));
      group.add(wallBox(orient, col, row, level, left, right, top, full, materials));
      const frame = Array(6).fill(MAT.trim());
      group.add(wallBox(orient, col, row, level, left, right, sill - 0.05, sill, frame, THICK + 0.06));
      group.add(wallBox(orient, col, row, level, left, right, top, top + 0.05, frame, THICK + 0.04));
      group.add(wallBox(orient, col, row, level, left, left + 0.04, sill, top, frame, THICK + 0.03));
      group.add(wallBox(orient, col, row, level, right - 0.04, right, sill, top, frame, THICK + 0.03));
      group.add(wallBox(orient, col, row, level, left + 0.04, right - 0.04, sill, top, Array(6).fill(MAT.glass()), 0.03));
    }
  } else if (type === 'rail') {
    const yellow = Array(6).fill(MAT.yellow());
    for (const along of [0, TILE]) group.add(wallBox(orient, col, row, level, along - 0.03, along + 0.03, 0, 1.05, yellow, 0.06));
    group.add(wallBox(orient, col, row, level, 0, TILE, 1.0, 1.06, yellow, 0.05));
    group.add(wallBox(orient, col, row, level, 0, TILE, 0.52, 0.56, yellow, 0.04));
    group.add(wallBox(orient, col, row, level, 0, TILE, 0.0, 0.1, Array(6).fill(MAT.darkSteel()), 0.02));
  } else if (type === 'parapet') {
    const materials = wallMaterials(orient, col, row, level, style);
    group.add(wallBox(orient, col, row, level, -extend - 0.02, TILE + extend + 0.02, -0.02, 0.5, materials, 0.22));
    group.add(wallBox(orient, col, row, level, -extend - 0.04, TILE + extend + 0.04, 0.5, 0.56, Array(6).fill(MAT.steel()), 0.28));
  } else if (type === 'barrier') {
    // бетонный блок-отбойник
    const shape = new THREE.Shape();
    shape.moveTo(-0.3, 0); shape.lineTo(0.3, 0); shape.lineTo(0.3, 0.08); shape.lineTo(0.1, 0.3); shape.lineTo(0.08, 0.82); shape.lineTo(-0.08, 0.82); shape.lineTo(-0.1, 0.3); shape.lineTo(-0.3, 0.08);
    const geometry = new THREE.ExtrudeGeometry(shape, { depth: TILE - 0.05, bevelEnabled: false });
    if (orient === 'W') geometry.translate(0, 0, 0.025);
    else { geometry.rotateY(Math.PI / 2); geometry.translate(0.025, 0, 0); }
    const mesh = new THREE.Mesh(geometry, MAT.concrete());
    mesh.position.set(col * TILE, level * LEVEL_H, row * TILE);
    if (orient === 'N') mesh.position.set(col * TILE, level * LEVEL_H, row * TILE);
    group.add(mesh);
    const stripe = orient === 'W' ? box(0.17, 0.06, TILE - 0.1, MAT.orange(), col * TILE, level * LEVEL_H + 0.62, row * TILE + TILE / 2)
      : box(TILE - 0.1, 0.06, 0.17, MAT.orange(), col * TILE + TILE / 2, level * LEVEL_H + 0.62, row * TILE);
    group.add(stripe);
  }
  return tag(group, orient === 'W' ? PART.wallW : PART.wallN, level, orient === 'W' ? { biasCol: 0.15 } : { biasRow: 0.15 });
}

// створка раздвижной двери: панель в плоскости стены, полоса, окошко, ручка
let doorLeaves = new THREE.Group();
export function buildDoorLeaf(orient, col, row, level, left, right, top, kind = 'base') {
  if (kind !== 'base') {
    const leaf = buildCityDoorLeaf(orient, col, row, level, left, right, top, kind, { wallBox });
    leaf.userData.door = { orient, col, row, level };
    return tag(leaf, orient === 'W' ? PART.doorW : PART.doorN, level, orient === 'W' ? { biasCol: 0.15 } : { biasRow: 0.15 });
  }
  const group = new THREE.Group();
  const leaf = Array(6).fill(MAT.wall('cabin', 0));
  const height = top - 0.01;
  group.add(wallBox(orient, col, row, level, left - 0.02, right + 0.02, 0.01, height, leaf, 0.06));
  const orange = Array(6).fill(MAT.orange()), dark = Array(6).fill(MAT.darkSteel()), glass = Array(6).fill(MAT.glass());
  if (height > 1.1) group.add(wallBox(orient, col, row, level, left, right, 0.98, 1.06, orange, 0.075));
  if (height > 1.9) {
    group.add(wallBox(orient, col, row, level, left + 0.36, left + 0.56, 1.3, 1.85, dark, 0.075));
    group.add(wallBox(orient, col, row, level, left + 0.38, left + 0.54, 1.32, 1.83, glass, 0.08));
  }
  group.add(wallBox(orient, col, row, level, left + 0.06, left + 0.1, Math.min(0.85, height - 0.1), Math.min(1.15, height - 0.05), dark, 0.085));
  group.userData.door = { orient, col, row, level };
  return tag(group, orient === 'W' ? PART.doorW : PART.doorN, level, orient === 'W' ? { biasCol: 0.15 } : { biasRow: 0.15 });
}

// верх створки (и стоек) части ворот на уровне level: у нижней части высоких ворот — пол следующего уровня
export function gateLeafTop(level, wall, cut) {
  if (cut) return Math.min(wall.gate.height - level * LEVEL_H, 0.8);
  return wall.gate.height > (level + 1) * LEVEL_H ? LEVEL_H : Math.min(wall.gate.height - level * LEVEL_H, PANEL_H);
}

// клетка широкого проёма: есть ли соседние клетки той же группы в начале и в конце грани (там нет стойки)
export function gateShape(orient, col, row, level, wall) {
  const sameGroup = (neighbor) => !!(neighbor && neighbor.gate && neighbor.gate.group === wall.gate.group);
  const grid = orient === 'W' ? layout.wallW[level] : layout.wallN[level];
  const startOpen = sameGroup(orient === 'W' ? (grid[row - 1] || [])[col] : grid[row][col - 1]);
  const endOpen = sameGroup(orient === 'W' ? (grid[row + 1] || [])[col] : grid[row][col + 1]);
  const post = 0.1, heavy = wall.gate.kind === 'gate';
  return { startOpen, endOpen, heavy, post, left: startOpen ? 0 : post, right: endOpen ? TILE : TILE - post,
    signature: `gate:${wall.gate.kind}:${wall.gate.height}:${startOpen}:${endOpen}` };
}

// подъёмная створка широкого проёма: секции с рёбрами, у ворот шлюза — чёрно-жёлтая полоса внизу.
// Сворачивается вверх: узел userData.rollUp масштабируется по высоте вокруг верха своей части (map3d.js, setDoor).
// Высокие ворота собраны из частей по уровням; gateHeight — высота всех ворот от пола уровня 0: нижний край створки
// поднимается на open × gateHeight, каждая часть показывает то, что выше края
export function buildGateLeaf(orient, col, row, level, left, right, top, heavy, gateHeight = top) {
  const group = new THREE.Group();
  const pivot = new THREE.Group();
  const topWorld = level * LEVEL_H + top;
  pivot.position.y = topWorld;
  pivot.userData.rollUp = { bottom: level * LEVEL_H, top: topWorld, gateHeight };
  const inner = new THREE.Group();
  inner.position.y = -topWorld;
  pivot.add(inner);
  group.add(pivot);
  const height = top - 0.01;
  const panel = Array(6).fill(heavy ? MAT.wall('hab', 1) : MAT.wall('cabin', 0));
  const rib = Array(6).fill(MAT.darkSteel());
  inner.add(wallBox(orient, col, row, level, left - 0.005, right + 0.005, 0.01, height, panel, 0.07));
  const sections = Math.max(3, Math.round(height / 0.5));
  for (let index = 1; index < sections; index++) {
    const y = 0.01 + (height - 0.01) * index / sections;
    inner.add(wallBox(orient, col, row, level, left, right, y - 0.015, y + 0.015, rib, 0.085));
  }
  if (heavy && height > 0.6 && level === 0) {
    const stripes = 4, yellow = Array(6).fill(MAT.yellow()), black = Array(6).fill(MAT.darkSteel());
    for (let index = 0; index < stripes; index++) {
      const from = left + (right - left) * index / stripes, to = left + (right - left) * (index + 1) / stripes;
      inner.add(wallBox(orient, col, row, level, from, to, 0.04, 0.3, (index + col + row) % 2 ? yellow : black, 0.08));
    }
  }
  group.userData.door = { orient, col, row, level, rollUp: true };
  return tag(group, orient === 'W' ? PART.doorW : PART.doorN, level, orient === 'W' ? { biasCol: 0.15 } : { biasRow: 0.15 });
}

// ---------------- полы и перекрытия ----------------
export function floorTile(col, row, level, type) {
  const group = new THREE.Group();
  const x = col * TILE + TILE / 2, z = row * TILE + TILE / 2, top = level * LEVEL_H;
  if (type === FLOOR.deck) {
    group.add(box(TILE, 0.06, TILE, MAT.grating(), x, top - 0.03, z));
    group.add(box(0.12, 0.22, TILE, MAT.orange(), col * TILE + 0.06, top - 0.17, z));      // балки
    group.add(box(TILE, 0.18, 0.1, MAT.orange(), x, top - 0.15, row * TILE + 0.05));
  } else {
    const style = CITY && layout.floorStyle ? layout.floorStyle[level][row][col] : null;
    const material = style ? floorMaterial(style) : type === FLOOR.roof ? MAT.roof() : MAT.interiorFloor();
    const edge = style ? CITY_MAT.slabEdge() : MAT.slabEdge(), ceiling = style ? CITY_MAT.ceiling() : MAT.ceiling();
    const slab = box(TILE, SLAB, TILE, [edge, edge, material, ceiling, edge, edge], x, top - SLAB / 2, z);
    group.add(slab);
  }
  return tag(group, PART.floor, level, { biasCol: -0.0001, biasRow: -0.0001 });
}

// пол первого этажа в здании — часть земли (не перекрывает юнитов)
export function groundFloorPlates() {
  const group = new THREE.Group();
  for (let row = 0; row < TILES; row++) for (let col = 0; col < TILES; col++) {
    if (!layout.indoor[0][row][col]) continue;
    group.add(box(TILE, 0.04, TILE, MAT.interiorFloor(), col * TILE + TILE / 2, 0.02, row * TILE + TILE / 2));
  }
  // цоколь вокруг корпусов на земле
  for (const building of layout.buildings) {
    if (!building.levels || building.base) continue;
    const x0 = building.col0 * TILE - 0.25, x1 = (building.col1 + 1) * TILE + 0.25, z0 = building.row0 * TILE - 0.25, z1 = (building.row1 + 1) * TILE + 0.25;
    group.add(box(x1 - x0, 0.08, z1 - z0, MAT.concrete(), (x0 + x1) / 2, 0.0, (z0 + z1) / 2));
  }
  return tag(group, PART.ground, 0);
}

// ---------------- лестницы ----------------
export function buildStairs(stair) {
  const group = new THREE.Group();
  const steps = 12, run = stair.count * TILE, rise = LEVEL_H, base = stair.level * LEVEL_H;
  const startX = stair.col * TILE + (stair.dirCol < 0 ? TILE : 0), startZ = stair.row * TILE + (stair.dirRow < 0 ? TILE : 0);
  const along = V(stair.dirCol, 0, stair.dirRow);
  const across = V(-stair.dirRow, 0, stair.dirCol);
  const centerAcross = stair.dirCol !== 0 ? V(0, 0, stair.row * TILE + TILE / 2) : V(stair.col * TILE + TILE / 2, 0, 0);
  const width = TILE * 0.86;
  const point = (distance, height, side) => {
    const result = V(startX, base + height, startZ).addScaledVector(along, distance).addScaledVector(across, side);
    if (stair.dirCol !== 0) result.z = centerAcross.z + side; else result.x = centerAcross.x + side;
    return result;
  };
  const classic = stair.style === 'classic', stairMat = classic ? STAIR_MATERIALS() : null;
  for (let step = 0; step < steps; step++) {
    const distance0 = step / steps * run, distance1 = (step + 1) / steps * run, height = (step + 1) / steps * rise;
    const center = point((distance0 + distance1) / 2, 0, 0);
    const sizeAlong = distance1 - distance0;
    if (classic) {
      const body = stair.dirCol !== 0 ? [sizeAlong, height, width] : [width, height, sizeAlong];
      group.add(box(...body, stairMat.body, center.x, base + height / 2, center.z));
      const tread = stair.dirCol !== 0 ? [sizeAlong + 0.02, 0.035, width] : [width, 0.035, sizeAlong + 0.02];
      group.add(box(...tread, stairMat.tread, center.x, base + height + 0.017, center.z));
    } else if (stair.style === 'hab') {
      // сплошные ступени
      const geometryWidth = stair.dirCol !== 0 ? [sizeAlong, height, width] : [width, height, sizeAlong];
      group.add(box(...geometryWidth, MAT.slabEdge(), center.x, base + height / 2, center.z));
      const tread = stair.dirCol !== 0 ? [sizeAlong, 0.03, width] : [width, 0.03, sizeAlong];
      group.add(box(...tread, MAT.darkSteel(), center.x, base + height + 0.015, center.z));
      const nosing = stair.dirCol !== 0 ? [0.04, 0.035, width] : [width, 0.035, 0.04];
      const nose = point(distance0 + 0.02, 0, 0);
      group.add(box(...nosing, MAT.yellow(), nose.x, base + height + 0.017, nose.z));
    } else {
      // решётчатые ступени на косоурах
      const tread = stair.dirCol !== 0 ? [sizeAlong * 0.9, 0.04, width] : [width, 0.04, sizeAlong * 0.9];
      group.add(box(...tread, MAT.grating(), center.x, base + height - 0.02, center.z));
    }
  }
  // косоуры и перила по обеим сторонам
  for (const side of [-width / 2 - 0.04, width / 2 + 0.04]) {
    if (stair.style !== 'hab') group.add(beam(point(0, 0, side), point(run, rise, side), 0.09, MAT.orange()));
    const railFrom = point(0.05, 0.95, side), railTo = point(run, rise + 0.95, side);
    if ((stair.style === 'hab' || classic) && side < 0) continue;               // у стены перил нет
    group.add(tube(railFrom, railTo, classic ? 0.03 : 0.025, classic ? stairMat.handrail : MAT.yellow()));
    if (classic) {
      for (let distance = 0.1; distance < run; distance += 0.2) group.add(tube(point(distance, distance / run * rise, side), point(distance, distance / run * rise + 0.93, side), 0.009, stairMat.rail));
      continue;
    }
    for (let post = 0; post <= stair.count; post++) {
      const distance = Math.min(run - 0.05, Math.max(0.05, post * TILE));
      group.add(tube(point(distance, distance / run * rise, side), point(distance, distance / run * rise + 0.95, side), 0.022, MAT.yellow()));
    }
  }
  return tag(group, PART.floor, stair.level);
}

// ---------------- приставные лестницы ----------------
export function buildLadder(item, maxTop) {
  const group = new THREE.Group();
  const base = item.level * LEVEL_H, top = Math.min(base + item.height, maxTop);
  if (top <= base + 0.05) return group;
  const offset = THICK / 2 + 0.1;
  const rail = (side) => item.side === 'W'
    ? [V(item.col * TILE + offset, base, item.row * TILE + TILE / 2 + side), V(item.col * TILE + offset, top, item.row * TILE + TILE / 2 + side)]
    : [V(item.col * TILE + TILE / 2 + side, base, item.row * TILE + offset), V(item.col * TILE + TILE / 2 + side, top, item.row * TILE + offset)];
  for (const side of [-0.22, 0.22]) { const [from, to] = rail(side); group.add(tube(from, to, 0.025, MAT.steel())); }
  for (let height = base + 0.3; height < top - 0.05; height += 0.3) {
    const [from] = rail(-0.22), [to] = rail(0.22);
    from.y = to.y = height;
    group.add(tube(from, to, 0.016, MAT.steel()));
  }
  return tag(group, PART.floor, item.level, { auto: true });
}

// ---------------- предметы ----------------
function objectOrigin(item) { return V(item.col * TILE, item.level * LEVEL_H, item.row * TILE); }

// поворот вида на 90° по часовой (rotateLayout): точка (x, z) в метрах -> (SIZE - z, x)
const TURN_MATRIX = new THREE.Matrix4().makeTranslation(TILE * TILES, 0, 0).multiply(new THREE.Matrix4().makeRotationY(-Math.PI / 2));

export function buildObject(item, viewLevel) {
  if (item.source) {
    // предмет повёрнутого вида: строится на исходном месте и поворачивается вместе с картой
    const inner = buildObject({ ...item.source, layer: item.layer }, viewLevel);
    if (!inner) return inner;
    const pivot = new THREE.Group();
    pivot.matrixAutoUpdate = false;
    for (let step = 0; step < item.turns; step++) pivot.matrix.premultiply(TURN_MATRIX);
    pivot.add(inner);
    pivot.updateMatrixWorld(true);
    return pivot;
  }
  const group = new THREE.Group();
  const origin = objectOrigin(item);
  const width = item.cols * TILE, depth = item.rows * TILE;
  const cx = width / 2, cz = depth / 2;
  const rng = mulberry32(hashTile(item.col, item.row, item.level) % 100000 + 7);
  const add = (mesh) => { group.add(mesh); return mesh; };
  if (CITY) {
    const city = buildCityObject(item);
    if (city) { group.add(city); group.position.copy(origin); return tag(group, PART.object, item.level); }
  }
  if (GALLEY_KINDS.has(item.kind)) {
    group.add(buildGalleyObject(item));
    group.position.copy(origin);
    return tag(group, PART.object, item.level);
  }
  if (FURNITURE_KINDS.has(item.kind)) {
    group.add(buildFurnitureObject(item));
    group.position.copy(origin);
    return tag(group, PART.object, item.level);
  }
  switch (item.kind) {
    case 'console': {
      add(box(1.0, 0.75, 0.6, MAT.trim(), cx, 0.375, cz - 0.15));
      const panel = add(box(1.0, 0.05, 0.5, MAT.screen(Math.floor(rng() * 3)), cx, 0.85, cz - 0.05));
      panel.rotation.x = -0.6;
      add(box(1.0, 0.5, 0.08, MAT.darkSteel(), cx, 1.1, cz - 0.42));
      break;
    }
    case 'locker':
      add(box(0.9, 1.9, 0.5, MAT.wall('cabin', 0), cx, 0.95, cz - 0.3));
      add(box(0.02, 1.7, 0.02, MAT.darkSteel(), cx, 0.95, cz - 0.04));
      break;
    case 'cabinet':
      add(box(0.9, 1.2, 0.6, MAT.trim(), cx, 0.6, cz));
      add(box(0.7, 0.08, 0.02, MAT.lightOn(), cx, 1.05, cz + 0.31));
      break;
    case 'bunk':
      for (const height of [0.35, 1.25]) {
        add(box(width - 0.2, 0.08, depth - 0.3, MAT.trim(), cx, height, cz));
        add(box(width - 0.3, 0.12, depth - 0.4, standard('mattress', { color: 0x4e5a48, roughness: 0.95 }), cx, height + 0.1, cz));
      }
      for (const [x, z] of [[0.15, 0.2], [width - 0.15, 0.2], [0.15, depth - 0.2], [width - 0.15, depth - 0.2]]) add(box(0.05, 1.6, 0.05, MAT.steel(), x, 0.8, z));
      break;
    case 'labTable':
      add(box(width - 0.2, 0.06, depth - 0.3, MAT.white(), cx, 0.9, cz));
      for (const x of [0.2, width - 0.2]) add(box(0.06, 0.9, depth - 0.4, MAT.trim(), x, 0.45, cz));
      add(box(0.5, 0.35, 0.4, MAT.trim(), cx - 0.6, 1.1, cz));
      for (let tubeIndex = 0; tubeIndex < 5; tubeIndex++) add(cylinder(0.03, 0.03, 0.22, standard('sample', { color: 0x6ef0b0, emissive: 0x30c080, emissiveIntensity: 1.2 }), cx + 0.2 + tubeIndex * 0.1, 1.04, cz));
      break;
    case 'desk':
      add(box(width - 0.3, 0.05, 0.7, MAT.white(), cx, 0.75, cz - 0.1));
      add(box(width - 0.4, 0.7, 0.05, MAT.trim(), cx, 0.38, cz - 0.4));
      for (const x of [cx - 0.5, cx + 0.5]) {
        add(box(0.55, 0.35, 0.04, MAT.screen(Math.floor(rng() * 3) + 1), x, 1.05, cz - 0.3));
        add(box(0.06, 0.2, 0.06, MAT.darkSteel(), x, 0.85, cz - 0.3));
      }
      break;
    case 'rack':
      add(box(0.7, 2.0, 0.9, MAT.darkSteel(), cx + 0.15, 1.0, cz));
      for (let led = 0; led < 12; led++) add(box(0.02, 0.02, 0.02, standard('led' + (led % 3), { color: 0x000000, emissive: [0x40ff70, 0xffa030, 0x40c0ff][led % 3], emissiveIntensity: 2 }), cx - 0.21, 0.3 + led * 0.14, cz - 0.3 + rng() * 0.6));
      break;
    case 'crate': {
      const stack = 1 + (rng() < 0.45 ? 1 : 0);
      const caseMaterial = rng() < 0.5 ? MAT.wall('cabin', 2) : standard('crateGrey', { color: 0x9a9c96, roughness: 0.55, metalness: 0.2 });
      let height = 0;
      for (let level = 0; level < stack; level++) {
        const size = level ? 0.65 : 0.95, tall = level ? 0.5 : 0.75;
        const angle = (rng() - 0.5) * 0.4;
        const piece = new THREE.Group();
        piece.add(box(size, tall, size * 0.8, caseMaterial, 0, tall / 2, 0));
        for (const side of [-1, 1]) piece.add(box(size + 0.02, 0.08, 0.06, MAT.orange(), 0, tall * 0.5, side * size * 0.3));
        piece.add(box(size + 0.02, 0.04, size * 0.82, MAT.trim(), 0, tall - 0.02, 0));
        piece.position.set(cx + (rng() - 0.5) * 0.1, height, cz + (rng() - 0.5) * 0.1);
        piece.rotation.y = angle;
        add(piece);
        height += tall;
      }
      break;
    }
    case 'barrels':
      for (let barrel = 0; barrel < 3; barrel++) {
        const color = [0x2f5e8a, 0x8a3a1c, 0x5a6248][barrel];
        add(cylinder(0.29, 0.29, 0.9, standard('barrel' + barrel, { color, roughness: 0.55, metalness: 0.5 }), 0.35 + (barrel % 2) * 0.55, 0.45, 0.35 + Math.floor(barrel / 2) * 0.55));
      }
      break;
    case 'acUnit':
      add(box(width - 0.2, 0.9, depth - 0.25, MAT.white(), cx, 0.45, cz));
      for (let fan = 0; fan < item.cols; fan++) {
        const ring = add(cylinder(0.38, 0.38, 0.05, MAT.darkSteel(), 0.62 + fan * TILE, 0.92, cz, 20));
        ring.scale.set(1, 1, 1);
      }
      break;
    case 'antenna':
      add(box(0.5, 0.15, 0.5, MAT.trim(), cx, 0.07, cz));
      add(cylinder(0.05, 0.07, 3.6, MAT.steel(), cx, 1.8, cz));
      for (const height of [2.2, 3.0]) add(box(0.9, 0.04, 0.04, MAT.steel(), cx, height, cz));
      add(box(0.06, 0.06, 0.06, standard('redLight', { color: 0x200000, emissive: 0xff2010, emissiveIntensity: 3 }), cx, 3.62, cz));
      break;
    case 'solar': {
      for (let panel = 0; panel < 2; panel++) {
        const frame = add(box(width - 0.3, 0.05, depth / 2 - 0.15, standard('solar', { color: 0x1a2a44, roughness: 0.2, metalness: 0.4 }), cx, 0.6, panel * depth / 2 + depth / 4));
        frame.rotation.x = -0.45;
        add(box(0.06, 0.6, 0.06, MAT.steel(), cx, 0.3, panel * depth / 2 + depth / 4));
      }
      break;
    }
    case 'dish':
      add(cylinder(0.08, 0.12, 0.8, MAT.steel(), cx, 0.4, cz));
      {
        const dish = add(new THREE.Mesh(new THREE.SphereGeometry(0.6, 20, 10, 0, Math.PI * 2, 0, 0.9), MAT.white()));
        dish.position.set(cx, 1.0, cz); dish.rotation.set(-2.1, 0, 0.4);
        dish.material = once('dishMat', () => new THREE.MeshStandardMaterial({ color: 0xd8dad6, roughness: 0.4, side: THREE.DoubleSide }));
      }
      break;
    case 'pylon': {
      const height = LEVEL_H - 0.24;
      add(box(0.32, height, 0.32, MAT.orange(), cx, height / 2, cz));
      add(box(0.6, 0.06, 0.6, MAT.darkSteel(), cx, 0.03, cz));
      add(box(0.5, 0.12, 0.5, MAT.orange(), cx, height - 0.06, cz));
      break;
    }
    case 'searchlight':
      add(box(0.5, 0.3, 0.5, MAT.trim(), cx, 0.15, cz));
      add(box(0.12, 0.5, 0.12, MAT.darkSteel(), cx, 0.55, cz));
      {
        const head = add(cylinder(0.24, 0.3, 0.45, MAT.darkSteel(), cx, 0.95, cz));
        head.rotation.x = 1.1;
        const lens = add(cylinder(0.22, 0.22, 0.03, MAT.lightOn(), cx, 1.02, cz + 0.2));
        lens.rotation.x = 1.1;
      }
      break;
    case 'container': {
      const material = MAT.container(item.color);
      const body = add(box(width - 0.15, 2.5, depth - 0.15, [material, material, MAT.container(item.color), MAT.trim(), material, material], cx, 1.25, cz));
      void body;
      for (const x of [0.12, width - 0.12]) for (const z of [0.12, depth - 0.12]) for (const y of [0.1, 2.4]) add(box(0.18, 0.2, 0.18, MAT.darkSteel(), x, y, z));
      for (const x of [cx - 0.35, cx + 0.35]) add(box(0.04, 2.3, 0.04, MAT.steel(), x, 1.25, depth - 0.06));
      break;
    }
    case 'truck': {
      // армейский грузовик 6×6 с кунгом (vehicles.js): вдоль рядов, перед в сторону больших рядов
      const truck = buildArmyTruck();
      truck.position.set(cx, 0, (depth - ARMY_TRUCK.length) / 2);
      add(truck);
      break;
    }
    case 'rover': {
      const white = MAT.white();
      add(box(width - 0.4, 0.6, depth - 0.3, white, cx, 0.95, cz));
      add(box(width - 0.5, 0.75, 1.3, white, cx, 1.6, cz + depth / 2 - 1.0));
      add(box(width - 0.6, 0.5, 0.05, MAT.glass(), cx, 1.7, cz + depth / 2 - 0.33));
      for (const side of [-1, 1]) add(box(0.05, 0.4, 1.0, MAT.glass(), cx + side * (width / 2 - 0.24), 1.7, cz + depth / 2 - 1.0));
      add(box(width - 0.4, 0.06, depth - 0.3, MAT.orange(), cx, 1.27, cz));
      add(box(width - 0.6, 0.12, 1.6, MAT.trim(), cx, 1.31, cz - 0.6));
      for (const side of [-1, 1]) for (const z of [0.55, depth / 2, depth - 0.55]) {
        const wheel = add(cylinder(0.42, 0.42, 0.34, MAT.rubber(), cx + side * (width / 2 - 0.2), 0.42, z, 18));
        wheel.rotation.z = Math.PI / 2;
        const hub = add(cylinder(0.18, 0.18, 0.36, MAT.steel(), cx + side * (width / 2 - 0.2), 0.42, z, 10));
        hub.rotation.z = Math.PI / 2;
      }
      add(cylinder(0.02, 0.02, 1.2, MAT.steel(), cx - 0.6, 2.4, cz + depth / 2 - 1.3));
      add(box(0.25, 0.12, 0.08, MAT.lightOn(), cx - 0.6, 1.0, depth - 0.12));
      add(box(0.25, 0.12, 0.08, MAT.lightOn(), cx + 0.6, 1.0, depth - 0.12));
      break;
    }
    case 'tank': {
      for (const z of [0.6, depth - 0.6]) add(box(width - 0.5, 0.6, 0.25, MAT.darkSteel(), cx, 0.3, z));
      const tankBody = add(cylinder(1.0, 1.0, depth - 0.3, MAT.white(), cx, 1.3, cz, 28));
      tankBody.rotation.x = Math.PI / 2;
      const band = add(cylinder(1.02, 1.02, 0.25, MAT.orange(), cx, 1.3, cz, 28));
      band.rotation.x = Math.PI / 2;
      for (const z of [0.15, depth - 0.15]) { const cap = add(new THREE.Mesh(new THREE.SphereGeometry(1.0, 24, 12), MAT.white())); cap.position.set(cx, 1.3, z); cap.scale.set(1, 1, 0.25); }
      add(tube(V(cx + 0.6, 0.3, depth - 0.4), V(cx + 0.6, 2.2, depth - 0.4), 0.06, MAT.steel()));
      break;
    }
    case 'generator':
      add(box(width - 0.3, 1.4, depth - 0.4, standard('genBody', { color: 0x5d6a52, roughness: 0.6, metalness: 0.3 }), cx, 0.7, cz));
      for (let vent = 0; vent < 6; vent++) add(box(width - 0.6, 0.04, 0.02, MAT.darkSteel(), cx, 0.35 + vent * 0.15, depth - 0.19));
      for (const x of [cx - 0.5, cx + 0.4]) add(cylinder(0.08, 0.08, 0.9, MAT.darkSteel(), x, 1.8, cz - 0.3));
      add(box(width - 0.2, 0.08, depth - 0.3, MAT.yellow(), cx, 1.42, cz));
      break;
    case 'lamp':
      add(box(0.4, 0.15, 0.4, MAT.concrete(), cx, 0.07, cz));
      add(cylinder(0.06, 0.08, 4.2, MAT.darkSteel(), cx, 2.1, cz));
      add(box(0.7, 0.08, 0.1, MAT.darkSteel(), cx + 0.3, 4.15, cz));
      add(box(0.36, 0.1, 0.24, MAT.trim(), cx + 0.6, 4.1, cz));
      add(box(0.3, 0.02, 0.2, MAT.lightOn(), cx + 0.6, 4.04, cz));
      break;
    case 'rock': {
      const radius = item.cols * TILE * 0.55;
      const geometry = rockGeometry(radius, item.col * 3 + item.row, { flatten: 0.55, roughness: 0.45, detail: 3 });
      const mesh = add(new THREE.Mesh(geometry, MAT.rock()));
      mesh.position.set(cx, radius * 0.18, cz);
      mesh.rotation.y = rng() * 6;
      break;
    }
    case 'tiltrotor': {
      // конвертоплан КТ-6: item.col, item.row — угол салона (c0, r0); модель повёрнута на −90° (нос к меньшим col).
      // item.layer — один слой модели (floor | back | shell) для тайлов; без него — модель целиком
      const model = buildTiltrotor();
      if (item.layer) [...model.children].forEach((child) => { if (child.name !== item.layer) model.remove(child); });
      model.rotation.y = -Math.PI / 2;
      // сдвиг на 6 мм: грани корпуса, выровненные по клеткам, не должны лежать в плоскостях среза тайлов
      // (иначе отсечение прорезает их через пиксель — сетка из точек)
      model.position.set(8 * TILE - 0.006, 0, 2 * TILE + 0.006);
      add(model);
      break;
    }
    case 'car': {
      // легковая машина вдоль рядов, перед к большим рядам; flip — перед к меньшим
      const info = CARS[item.type] || CARS.suv;
      const holder = new THREE.Group();
      const model = buildCar({ type: item.type, color: item.color });
      model.position.z = -info.length / 2;
      holder.add(model);
      holder.position.set(cx, 0, cz);
      // вдоль столбцов (cols > rows): перед к большим col, flip — к меньшим
      if (item.cols > item.rows) holder.rotation.y = item.flip ? -Math.PI / 2 : Math.PI / 2;
      else if (item.flip) holder.rotation.y = Math.PI;
      add(holder);
      break;
    }
    case 'rockFill': {
      // блок скалы вокруг помещений базы: высота item.height, срезанный вариант — до item.top (от пола уровня 0);
      // заходит на 1,7 см к соседям с меньшими col и row (они рисуются раньше): на стыке блоков нет щели;
      // к соседям, которые рисуются позже, не доходит 3 мм: грани не должны лежать в плоскостях среза клетки
      // (иначе отсечение прорезает их через пиксель — сетка из точек)
      // item.bottom — низ блока (для тайла уровня: блок от пола уровня, закрытый сверху, а не отсечённый)
      const top = item.top !== undefined ? Math.min(item.top, item.height) : item.height, bottom = item.bottom || 0;
      const variant = item.variant || 0;
      // бетон (толстые стены склада боеприпасов) или скала
      const side = item.concrete ? MAT.concrete() : MAT.baseRock(variant), cut = item.concrete ? MAT.concrete() : MAT.rockCut(variant);
      const rockBox = add(box(TILE + 0.014, top - bottom, TILE + 0.014, [side, side, cut, side, side, side], cx - 0.01, (top + bottom) / 2, cz - 0.01));
      rockBox.userData.noShadowReceive = true;
      const position = rockBox.geometry.attributes.position, uv = rockBox.geometry.attributes.uv, normal = rockBox.geometry.attributes.normal;
      // UV по мировым координатам: соседние блоки и уровни стыкуются без повторов на каждой клетке
      for (let index = 0; index < position.count; index++) {
        const worldX = item.col * TILE + cx + position.getX(index), worldY = (top + bottom) / 2 + position.getY(index), worldZ = item.row * TILE + cz + position.getZ(index);
        if (Math.abs(normal.getY(index)) > 0.5) uv.setXY(index, worldX / 8, worldZ / 8);
        else if (Math.abs(normal.getX(index)) > 0.5) uv.setXY(index, worldZ / 8, worldY / 8);
        else uv.setXY(index, worldX / 8, worldY / 8);
      }
      break;
    }
    case 'liftPlatform': {
      // платформа подъёмника: стальной настил с швами и жёлто-чёрная кайма по краю
      add(box(width - 0.04, 0.03, depth - 0.04, MAT.darkSteel(), cx, 0.06, cz));
      for (let seam = 2.5; seam < width - 0.1; seam += 2.5) add(box(0.03, 0.035, depth - 0.3, MAT.rubber(), seam, 0.062, cz));
      for (let seam = 2.5; seam < depth - 0.1; seam += 2.5) add(box(width - 0.3, 0.035, 0.03, MAT.rubber(), cx, 0.062, seam));
      const segment = 0.5, band = 0.22;
      for (let along = 0; along < width - 1e-6; along += segment) {
        const material = Math.round(along / segment) % 2 ? MAT.rubber() : MAT.yellow(), length = Math.min(segment, width - along);
        add(box(length, 0.04, band, material, along + length / 2, 0.065, band / 2 + 0.03));
        add(box(length, 0.04, band, material, along + length / 2, 0.065, depth - band / 2 - 0.03));
      }
      for (let along = band + 0.03; along < depth - band - 0.03 - 1e-6; along += segment) {
        const material = Math.round(along / segment) % 2 ? MAT.yellow() : MAT.rubber(), length = Math.min(segment, depth - band - 0.03 - along);
        add(box(band, 0.04, length, material, band / 2 + 0.03, 0.065, along + length / 2));
        add(box(band, 0.04, length, material, width - band / 2 - 0.03, 0.065, along + length / 2));
      }
      break;
    }
    case 'paint':
      // линия разметки краской по западной грани клеток
      add(box(0.1, 0.012, depth - 0.12, MAT.paint(), 0.06, 0.006, cz));
      break;
    case 'ladder':
      return buildLadder(item, (viewLevel + 1) * LEVEL_H + 0.95);
    case 'towerLeg':
      return null;                                // вышка строится целиком
    default:
      add(box(width * 0.8, 0.8, depth * 0.8, MAT.trim(), cx, 0.4, cz));
  }
  group.position.copy(origin);
  return tag(group, PART.object, item.level);
}

// вышка: четыре опоры с раскосами до уровня 3; куски по уровням — по высоте точки
export function buildTower(building, viewLevel) {
  const group = new THREE.Group();
  const top = Math.min(3 * LEVEL_H, (viewLevel + 1) * LEVEL_H);
  const x0 = building.col0 * TILE + 0.2, x1 = (building.col1 + 1) * TILE - 0.2, z0 = building.row0 * TILE + 0.2, z1 = (building.row1 + 1) * TILE - 0.2;
  const legHeight = Math.min(top, 3 * LEVEL_H - 0.1);
  for (const [x, z] of [[x0, z0], [x1, z0], [x0, z1], [x1, z1]]) {
    group.add(box(0.2, legHeight, 0.2, MAT.orange(), x, legHeight / 2, z));
    group.add(box(0.5, 0.08, 0.5, MAT.darkSteel(), x, 0.04, z));
  }
  // раскосы по граням, ярусами
  for (let tier = 0; tier < 3; tier++) {
    const y0 = tier * LEVEL_H + 0.3, y1 = (tier + 1) * LEVEL_H - 0.2;
    if (y1 > top + 0.01) break;
    for (const [from, to] of [[[x0, z0], [x1, z0]], [[x1, z0], [x1, z1]], [[x0, z1], [x1, z1]], [[x0, z0], [x0, z1]]]) {
      group.add(beam(V(from[0], y0, from[1]), V(to[0], y1, to[1]), 0.07, MAT.darkSteel()));
      group.add(beam(V(to[0], y0, to[1]), V(from[0], y1, from[1]), 0.07, MAT.darkSteel()));
      group.add(beam(V(from[0], y1, from[1]), V(to[0], y1, to[1]), 0.09, MAT.orange()));
    }
  }
  return tag(group, PART.object, 0, { auto: true });
}

// ---------------- фасадные детали корпуса ----------------
export function facadeDetails(viewLevel, cut) {
  const group = new THREE.Group();
  const hab = layout.buildings.find((building) => building.name === 'hab');
  const east = (hab.col1 + 1) * TILE, south = (hab.row1 + 1) * TILE;
  const topLevel = Math.min(viewLevel, 1);
  const height = (topLevel + 1) * LEVEL_H - (cut && viewLevel <= 1 ? LEVEL_H - 0.8 : 0) - 0.1;
  // водосточная труба и кабель-канал на углу
  group.add(tube(V(east + 0.16, 0.1, south - 0.3), V(east + 0.16, height, south - 0.3), 0.06, MAT.steel()));
  group.add(box(0.1, 0.1, (hab.row1 - hab.row0 + 1) * TILE - 0.6, MAT.darkSteel(), east + 0.14, Math.min(2.3, height), (hab.row0 * TILE + south) / 2));
  // кондиционер на восточной стене
  group.add(box(0.5, 0.6, 0.9, MAT.white(), east + 0.35, 0.4, hab.row0 * TILE + 2.2));
  group.add(cylinder(0.25, 0.25, 0.04, MAT.darkSteel(), east + 0.61, 0.42, hab.row0 * TILE + 2.2, 18).rotateZ(Math.PI / 2));
  return tag(group, PART.object, 0, { auto: true });
}

// ---------------- земля ----------------
const LOW = -4, HIGH = SIZE + 4;
export const zones = layout.concrete;          // бетонные площадки задаёт разметка (outpost_layout.js)
const markings = {
  tracks: [
    [[5.5 * TILE, 15.5 * TILE], [7 * TILE, 13.0 * TILE], [8.5 * TILE, 12.2 * TILE], [12 * TILE, 12.4 * TILE], [16 * TILE, 13.2 * TILE], [21 * TILE, 12.5 * TILE], [24 * TILE, 12 * TILE]],
    [[9 * TILE, 16.5 * TILE], [9.5 * TILE, 20 * TILE], [10 * TILE, 24 * TILE]],
  ],
  lines: [
    { from: [1.6 * TILE, 11.2 * TILE], to: [12.3 * TILE, 11.2 * TILE] },
    { from: [12.3 * TILE, 1.6 * TILE], to: [12.3 * TILE, 11.2 * TILE] },
    { from: [14.5 * TILE, 3.3 * TILE], to: [14.5 * TILE, 12.5 * TILE] },
    { from: [14.5 * TILE, 12.5 * TILE], to: [20.5 * TILE, 12.5 * TILE] },
  ],
  hazards: [
    [5.6 * TILE, 10.15 * TILE, 7.4 * TILE, 10.45 * TILE],
    [11.15 * TILE, 5.6 * TILE, 11.45 * TILE, 7.4 * TILE],
    [16.6 * TILE, 12.05 * TILE, 18.4 * TILE, 12.35 * TILE],
  ],
  pads: [[4.6 * TILE, 19.0 * TILE, 3.2 * TILE]],
  stains: [[8.5 * TILE, 14 * TILE, 1.4], [13.5 * TILE, 2.5 * TILE, 1.0], [17 * TILE, 7 * TILE, 1.2], [4.0 * TILE, 18 * TILE, 0.8], [21.5 * TILE, 7.8 * TILE, 0.9]],
};
export const insideConcrete = (x, z) => zones.some((zone) => zone.circle ? Math.hypot(x - zone.circle[0], z - zone.circle[1]) < zone.circle[2] : x > zone.rect[0] && x < zone.rect[2] && z > zone.rect[1] && z < zone.rect[3]);

let groundGroup = null;
export function buildGround() {
  if (groundGroup) return groundGroup;
  groundGroup = new THREE.Group();
  const geometry = new THREE.PlaneGeometry(HIGH - LOW, HIGH - LOW, 1, 1);
  geometry.rotateX(-Math.PI / 2);
  geometry.translate((LOW + HIGH) / 2, 0, (LOW + HIGH) / 2);
  const map = groundTexture({ low: LOW, high: HIGH, size: 4096, zones, markings });
  const bump = groundBumpTexture();
  bump.repeat.set((HIGH - LOW) / 1.6, (HIGH - LOW) / 1.6);
  const material = new THREE.MeshStandardMaterial({ map, bumpMap: bump, bumpScale: 1.6, roughness: 0.95 });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.receiveShadow = true;
  groundGroup.add(mesh);
  // камни и щебень по грунту
  const rng = mulberry32(55);
  const stoneGeometry = rockGeometry(1, 3, { flatten: 0.6, roughness: 0.4, detail: 1 });
  const stones = new THREE.InstancedMesh(stoneGeometry, once('stoneMat', () => new THREE.MeshStandardMaterial({ color: 0xb09276, roughness: 0.95 })), 2600);
  const matrix = new THREE.Matrix4(), quaternion = new THREE.Quaternion(), scale = new THREE.Vector3(), position = new THREE.Vector3();
  const color = new THREE.Color();
  let count = 0;
  for (let attempt = 0; attempt < 5000 && count < 2600; attempt++) {
    const x = LOW + rng() * (HIGH - LOW), z = LOW + rng() * (HIGH - LOW);
    const onConcrete = insideConcrete(x, z);
    if (onConcrete && rng() < 0.93) continue;
    const size = rng() < 0.08 ? 0.08 + rng() * 0.16 : 0.02 + rng() * 0.05;
    position.set(x, size * 0.2, z);
    quaternion.setFromEuler(new THREE.Euler(rng() * 0.5, rng() * 6.3, rng() * 0.5));
    scale.set(size * (0.8 + rng() * 0.6), size, size * (0.8 + rng() * 0.6));
    matrix.compose(position, quaternion, scale);
    stones.setMatrixAt(count, matrix);
    { const tone = 0.7 + rng() * 0.45; stones.setColorAt(count, color.setRGB(tone, tone * (0.92 + rng() * 0.08), tone * (0.84 + rng() * 0.1))); }
    count++;
  }
  stones.count = count;
  stones.castShadow = stones.receiveShadow = true;
  groundGroup.add(stones);
  // редкие сухие кустики
  const blades = new THREE.InstancedMesh(bladeGeometry(), grassMaterial(), 40000);
  let bladeCount = 0;
  const euler = new THREE.Euler(0, 0, 0, 'YXZ');
  for (let clump = 0; clump < 260 && bladeCount < 40000; clump++) {
    const x = LOW + rng() * (HIGH - LOW), z = LOW + rng() * (HIGH - LOW);
    if (insideConcrete(x, z)) continue;
    const blades0 = 25 + Math.floor(rng() * 50), radius = 0.08 + rng() * 0.14, height = 0.12 + rng() * 0.2;
    for (let blade = 0; blade < blades0; blade++) {
      const angle = rng() * Math.PI * 2, distance = Math.sqrt(rng()) * radius;
      position.set(x + Math.cos(angle) * distance, 0, z + Math.sin(angle) * distance);
      euler.set(0.2 + distance / radius * 0.6, angle + Math.PI / 2, (rng() - 0.5) * 0.3);
      quaternion.setFromEuler(euler);
      scale.set(0.9, height * (0.5 + rng() * 0.7), 1);
      matrix.compose(position, quaternion, scale);
      blades.setMatrixAt(bladeCount, matrix);
      blades.setColorAt(bladeCount, color.setRGB(0.52 + rng() * 0.2, 0.44 + rng() * 0.15, 0.24 + rng() * 0.1));
      bladeCount++;
    }
  }
  blades.count = bladeCount;
  blades.receiveShadow = true;
  groundGroup.add(blades);
  tag(groundGroup, PART.ground, 0);
  mesh.castShadow = false;
  blades.castShadow = false;
  return groundGroup;
}

// ---------------- сборка варианта ----------------
export function buildWorld(viewLevel, cut) {
  const world = new THREE.Group();
  doorLeaves = new THREE.Group();
  world.add(buildGround());
  world.add(groundFloorPlates());
  for (let level = 0; level <= viewLevel; level++) {
    const cutLevel = cut && level === viewLevel;
    for (let row = 0; row <= TILES; row++) for (let col = 0; col <= TILES; col++) {
      const west = layout.wallW[level][row][col], north = layout.wallN[level][row][col];
      if (west && west.type) world.add(buildWall('W', col, row, level, west, cutLevel));
      if (north && north.type) world.add(buildWall('N', col, row, level, north, cutLevel));
      if (level > 0 && row < TILES && col < TILES) {
        const type = layout.floor[level][row][col];
        if (type === FLOOR.interior || type === FLOOR.roof || type === FLOOR.deck) world.add(floorTile(col, row, level, type));
      }
    }
  }
  for (const stair of layout.stairs) if (stair.level <= viewLevel) world.add(buildStairs(stair));
  for (const item of layout.objects) {
    if (item.level > viewLevel) continue;
    const object = buildObject(item, viewLevel);
    if (object) world.add(object);
  }
  for (const building of layout.buildings) if (building.style === 'tower') world.add(buildTower(building, viewLevel));
  world.add(facadeDetails(viewLevel, cut));
  setEnvIntensity(world, 0.28);
  setEnvIntensity(doorLeaves, 0.28);
  return world;
}

// изменяемые модулем объекты: створки дверей последнего построенного варианта и общая земля
export function getDoorLeaves() { return doorLeaves; }
export function getGroundGroup() { return groundGroup; }
export function resetDoorLeaves() { doorLeaves = new THREE.Group(); return doorLeaves; }
