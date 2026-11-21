// 3D-сцена тестовой карты «База на плато» и её рендер по слоям.
// Каждый вариант = (уровень обзора V, стены текущего уровня срезаны или целые): видны уровни 0..V.
// На каждый вариант два прохода кусками: цвет (тени, затенение GTAO) и ID — у каждого пикселя
// клетка, уровень и часть (пол / стена W / стена N / предмет), которой он принадлежит.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { mulberry32, rockTextures, rockGeometry, screenTexture, setEnvIntensity } from './lib.js';
import { toXZ, bladeGeometry, grassMaterial } from './world.js';
import { buildLayout, TILE, TILES, LEVELS, LEVEL_H, FLOOR, WALL_TYPES } from './outpost_layout.js';
import {
  wallPanelTextures, interiorFloorTextures, roofTextures, gratingTextures, corrugatedTextures,
  concreteTextures, groundBumpTexture, groundTexture,
} from './outpost_textures.js';

const layout = buildLayout();
const PPM = 1280 / 18.5;            // пикселей на метр (как спрайты x1)
const SS = 2;                       // суперсэмплинг
const SIZE = TILE * TILES;
const CENTER = new THREE.Vector3(SIZE / 2, 0, SIZE / 2);
const SLAB = 0.22, THICK = 0.18, PANEL_H = LEVEL_H - SLAB;
const PART = { ground: 0, floor: 1, wallW: 2, wallN: 3, object: 4 };
const V = (x, y, z) => new THREE.Vector3(x, y, z);

// ---------------- рендерер, свет ----------------
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(1);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1610);
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;
scene.add(new THREE.HemisphereLight(0xc8dcff, 0x5a4a34, 0.75));
const sun = new THREE.DirectionalLight(0xfff4e0, 4.2);
{ const offset = toXZ(-11, 7.5); sun.position.set(CENTER.x + offset.x * 1.6, 17.6, CENTER.z + offset.y * 1.6); }
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

const MAT = {
  trim: () => standard('trim', { color: 0x3a3e42, roughness: 0.55, metalness: 0.4 }),
  orange: () => standard('orange', { color: 0xd2621e, roughness: 0.5, metalness: 0.2 }),
  yellow: () => standard('yellow', { color: 0xd8a420, roughness: 0.5, metalness: 0.2 }),
  steel: () => standard('steel', { color: 0x8a9096, roughness: 0.35, metalness: 0.8 }),
  darkSteel: () => standard('darkSteel', { color: 0x2c3034, roughness: 0.5, metalness: 0.6 }),
  white: () => standard('white', { color: 0xd8dad6, roughness: 0.45, metalness: 0.1 }),
  rubber: () => standard('rubber', { color: 0x1c1c1c, roughness: 0.9 }),
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
};

// ---------------- пометки для прохода ID ----------------
function tag(object, part, level, { biasCol = 0, biasRow = 0, auto = false } = {}) {
  object.traverse((node) => {
    if (node.isMesh) {
      node.userData.id = { part, level, biasCol, biasRow, auto };
      node.castShadow = true;
      node.receiveShadow = true;
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

const hashTile = (col, row, level) => ((col * 73856093) ^ (row * 19349663) ^ (level * 83492791)) >>> 0;
const isIndoor = (level, col, row) => col >= 0 && row >= 0 && col < TILES && row < TILES && layout.indoor[level][row][col] === 1;

// ---------------- стены ----------------
// коробка стены на грани: along — отрезок вдоль грани от её начала, y — от пола уровня
function wallBox(orient, col, row, level, along0, along1, y0, y1, materials, thickness = THICK) {
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

function buildWall(orient, col, row, level, wall, cut) {
  const group = new THREE.Group();
  const type = wall.type, style = wall.style;
  const full = cut ? 0.8 : PANEL_H;
  const extend = THICK / 2;
  if (type === 'wall' || type === 'door' || type === 'window') {
    const materials = wallMaterials(orient, col, row, level, style === 'concrete' ? 'hab' : style);
    if (type === 'wall' || (type === 'window' && cut)) {
      group.add(wallBox(orient, col, row, level, -extend, TILE + extend, 0, full, materials));
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

// ---------------- полы и перекрытия ----------------
function floorTile(col, row, level, type) {
  const group = new THREE.Group();
  const x = col * TILE + TILE / 2, z = row * TILE + TILE / 2, top = level * LEVEL_H;
  if (type === FLOOR.deck) {
    group.add(box(TILE, 0.06, TILE, MAT.grating(), x, top - 0.03, z));
    group.add(box(0.12, 0.22, TILE, MAT.orange(), col * TILE + 0.06, top - 0.17, z));      // балки
    group.add(box(TILE, 0.18, 0.1, MAT.orange(), x, top - 0.15, row * TILE + 0.05));
  } else {
    const material = type === FLOOR.roof ? MAT.roof() : MAT.interiorFloor();
    const slab = box(TILE, SLAB, TILE, [MAT.slabEdge(), MAT.slabEdge(), material, MAT.ceiling(), MAT.slabEdge(), MAT.slabEdge()], x, top - SLAB / 2, z);
    group.add(slab);
  }
  return tag(group, PART.floor, level, { biasCol: -0.0001, biasRow: -0.0001 });
}

// пол первого этажа в здании — часть земли (не перекрывает юнитов)
function groundFloorPlates() {
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
function buildStairs(stair) {
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
  for (let step = 0; step < steps; step++) {
    const distance0 = step / steps * run, distance1 = (step + 1) / steps * run, height = (step + 1) / steps * rise;
    const center = point((distance0 + distance1) / 2, 0, 0);
    const sizeAlong = distance1 - distance0;
    if (stair.style === 'hab') {
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
    if (stair.style === 'hab' && side < 0) continue;               // у стены перил нет
    group.add(tube(railFrom, railTo, 0.025, MAT.yellow()));
    for (let post = 0; post <= stair.count; post++) {
      const distance = Math.min(run - 0.05, Math.max(0.05, post * TILE));
      group.add(tube(point(distance, distance / run * rise, side), point(distance, distance / run * rise + 0.95, side), 0.022, MAT.yellow()));
    }
  }
  return tag(group, PART.floor, stair.level);
}

// ---------------- приставные лестницы ----------------
function buildLadder(item, maxTop) {
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
  return tag(group, PART.object, item.level, { auto: true });
}

// ---------------- предметы ----------------
function objectOrigin(item) { return V(item.col * TILE, item.level * LEVEL_H, item.row * TILE); }

function buildObject(item, viewLevel) {
  const group = new THREE.Group();
  const origin = objectOrigin(item);
  const width = item.cols * TILE, depth = item.rows * TILE;
  const cx = width / 2, cz = depth / 2;
  const rng = mulberry32(hashTile(item.col, item.row, item.level) % 100000 + 7);
  const add = (mesh) => { group.add(mesh); return mesh; };
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
function buildTower(building, viewLevel) {
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
function facadeDetails(viewLevel, cut) {
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
const zones = [
  { rect: [1.3 * TILE, 1.3 * TILE, 12.6 * TILE, 11.7 * TILE] },
  { rect: [14.2 * TILE, 3.0 * TILE, 20.8 * TILE, 12.8 * TILE] },
  { rect: [19.4 * TILE, 13.4 * TILE, 22.6 * TILE, 16.8 * TILE] },
  { circle: [4.6 * TILE, 19.0 * TILE, 3.6 * TILE] },
];
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
const insideConcrete = (x, z) => zones.some((zone) => zone.circle ? Math.hypot(x - zone.circle[0], z - zone.circle[1]) < zone.circle[2] : x > zone.rect[0] && x < zone.rect[2] && z > zone.rect[1] && z < zone.rect[3]);

let groundGroup = null;
function buildGround() {
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
function buildWorld(viewLevel, cut) {
  const world = new THREE.Group();
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
  return world;
}

// ---------------- камера и кадр ----------------
const elevation = THREE.MathUtils.degToRad(35);
const down = toXZ(0, 1);
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 300);
camera.position.set(CENTER.x + down.x * Math.cos(elevation) * 120, Math.sin(elevation) * 120, CENTER.z + down.y * Math.cos(elevation) * 120);
camera.lookAt(CENTER);
camera.updateMatrixWorld(true);
const MARGIN = 1.5;
// кадр: углы карты на земле (с запасом по высоте под камни и ящики) и самые высокие точки построек
const frameCorners = [];
for (const [x, z] of [[-MARGIN, -MARGIN], [SIZE + MARGIN, -MARGIN], [-MARGIN, SIZE + MARGIN], [SIZE + MARGIN, SIZE + MARGIN]]) {
  for (const y of [0, 3]) frameCorners.push(new THREE.Vector3(x, y, z).applyMatrix4(camera.matrixWorldInverse));
}
for (const [col, row, height] of [[3, 3, 6.2], [4, 8, 9.0], [20, 14, 10.5], [16, 4, 7.0], [12, 1, 4.5]]) {
  frameCorners.push(new THREE.Vector3(col * TILE, height, row * TILE).applyMatrix4(camera.matrixWorldInverse));
}
const minX = Math.min(...frameCorners.map((point) => point.x)), maxX = Math.max(...frameCorners.map((point) => point.x));
const minY = Math.min(...frameCorners.map((point) => point.y)), maxY = Math.max(...frameCorners.map((point) => point.y));
Object.assign(camera, { left: minX, right: maxX, top: maxY, bottom: minY });
camera.updateProjectionMatrix();
const FULL_W = Math.round((maxX - minX) * PPM), FULL_H = Math.round((maxY - minY) * PPM);

function projectPixel(point) {
  camera.clearViewOffset();
  const projected = point.clone().project(camera);
  return [(projected.x + 1) / 2 * FULL_W, (1 - projected.y) / 2 * FULL_H];
}

// ---------------- проход ID ----------------
const ID_VERTEX = /* glsl */`
varying vec3 vWorld;
void main() {
  vec4 local = vec4(position, 1.0);
#ifdef USE_INSTANCING
  local = instanceMatrix * local;
#endif
  vec4 world = modelMatrix * local;
  vWorld = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}`;
const ID_FRAGMENT = /* glsl */`
uniform float uPart;
uniform float uLevel;
uniform vec2 uBias;
uniform float uAuto;
varying vec3 vWorld;
void main() {
  if (uPart < 0.5) { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); return; }
  float level = uLevel;
  if (uAuto > 0.5) level = clamp(floor((vWorld.y - 0.05) / ${LEVEL_H.toFixed(3)}), 0.0, 3.0);
  float col = clamp(floor(vWorld.x / ${TILE.toFixed(4)} + uBias.x), 0.0, 31.0);
  float row = clamp(floor(vWorld.z / ${TILE.toFixed(4)} + uBias.y), 0.0, 31.0);
  gl_FragColor = vec4((col * 8.0 + uPart) / 255.0, (row * 8.0 + level) / 255.0, 1.0, 1.0);
}`;
function idMaterial(info) {
  return new THREE.ShaderMaterial({
    vertexShader: ID_VERTEX, fragmentShader: ID_FRAGMENT,
    uniforms: { uPart: { value: info.part }, uLevel: { value: info.level }, uBias: { value: new THREE.Vector2(info.biasCol, info.biasRow) }, uAuto: { value: info.auto ? 1 : 0 } },
  });
}

let world = null;
let composer = null, composerSize = '';
let idTarget = null;
const idCanvas = document.createElement('canvas');

function disposeWorld(root) {
  root.traverse((node) => {
    if (node.isMesh && node.parent && node !== groundGroup && !isInGround(node)) {
      node.geometry.dispose();
      if (node.userData.idMaterial) node.userData.idMaterial.dispose();
    }
  });
}
function isInGround(node) { let current = node; while (current) { if (current === groundGroup) return true; current = current.parent; } return false; }

window.setupVariant = (viewLevel, cut) => {
  if (world) { scene.remove(world); disposeWorld(world); }
  world = buildWorld(viewLevel, cut);
  scene.add(world);
  let meshes = 0;
  world.traverse((node) => {
    if (!node.isMesh) return;
    meshes++;
    const info = node.userData.id || { part: 0, level: 0, biasCol: 0, biasRow: 0, auto: false };
    if (!node.userData.idMaterial) node.userData.idMaterial = idMaterial(info);
  });
  return { meshes };
};

window.outpostInfo = () => ({
  width: FULL_W, height: FULL_H, tile: TILE, tiles: TILES, levels: LEVELS, levelHeight: LEVEL_H, ppm: PPM,
  origin: projectPixel(V(0, 0, 0)), colStep: projectPixel(V(TILE, 0, 0)), rowStep: projectPixel(V(0, 0, TILE)), up: projectPixel(V(0, 1, 0)),
});

// кусок (x, y, width, height) в пикселях итоговой картинки x1, с запасом margin со всех сторон
window.renderChunk = (x, y, width, height, margin) => {
  const left = x - margin, top = y - margin, fullWidth = width + margin * 2, fullHeight = height + margin * 2;
  camera.setViewOffset(FULL_W * SS, FULL_H * SS, left * SS, top * SS, fullWidth * SS, fullHeight * SS);
  const pixelWidth = fullWidth * SS, pixelHeight = fullHeight * SS;
  const sizeKey = pixelWidth + 'x' + pixelHeight;
  if (sizeKey !== composerSize) {
    composerSize = sizeKey;
    renderer.setSize(pixelWidth, pixelHeight);
    composer = new EffectComposer(renderer);
    composer.setSize(pixelWidth, pixelHeight);
    composer.addPass(new RenderPass(scene, camera));
    const gtao = new GTAOPass(scene, camera, pixelWidth, pixelHeight);
    gtao.updateGtaoMaterial({ radius: 0.45, distanceExponent: 1.5, thickness: 1.2, scale: 1.2, samples: 16 });
    gtao.blendIntensity = 0.9;
    composer.addPass(gtao);
    composer.addPass(new OutputPass());
    if (idTarget) idTarget.dispose();
    idTarget = new THREE.WebGLRenderTarget(pixelWidth, pixelHeight, { samples: 0, minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter });
  }
  composer.render();
  const color = renderer.domElement.toDataURL('image/png');
  // ID: подменить материалы, отрендерить в цель без сглаживания, прочитать
  const saved = [];
  world.traverse((node) => { if (node.isMesh) { saved.push([node, node.material]); node.material = node.userData.idMaterial; } });
  const background = scene.background;
  scene.background = new THREE.Color(0x000000);
  renderer.setRenderTarget(idTarget);
  renderer.clear();
  renderer.render(scene, camera);
  const pixels = new Uint8Array(pixelWidth * pixelHeight * 4);
  renderer.readRenderTargetPixels(idTarget, 0, 0, pixelWidth, pixelHeight, pixels);
  renderer.setRenderTarget(null);
  scene.background = background;
  for (const [node, material] of saved) node.material = material;
  idCanvas.width = pixelWidth; idCanvas.height = pixelHeight;
  const context = idCanvas.getContext('2d');
  const image = context.createImageData(pixelWidth, pixelHeight);
  for (let row = 0; row < pixelHeight; row++) {
    const source = (pixelHeight - 1 - row) * pixelWidth * 4;
    image.data.set(pixels.subarray(source, source + pixelWidth * 4), row * pixelWidth * 4);
  }
  for (let index = 3; index < image.data.length; index += 4) image.data[index] = 255;
  context.putImageData(image, 0, 0);
  const id = idCanvas.toDataURL('image/png');
  camera.clearViewOffset();
  return { color, id };
};

// уменьшенный общий вид для проверки
window.renderPreview = (width) => {
  const height = Math.round(width * FULL_H / FULL_W);
  camera.clearViewOffset();
  renderer.setSize(width, height);
  composerSize = '';
  renderer.render(scene, camera);
  return renderer.domElement.toDataURL('image/png');
};

window.layoutData = () => layout;
window.ready = true;
