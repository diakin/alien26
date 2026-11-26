// Люди на основе MakeHuman (данные — tools/render/mh, готовит mh/mhbuild.py): анатомическое тело с морфами пола,
// возраста, веса и черт лица, скелет game_engine с весами, текстура кожи, глаза; одежда — из вспомогательной сетки
// «колготки» (облегает тело) и «юбка» MakeHuman: области по весам костей, приподнятые над телом на толщину слоя;
// волосы — оболочка над кожей головы с линией роста. Поза задаётся теми же величинами, что у прежней модели
// гражданских (civilian.js): таз, наклон и поворот корпуса, поворот головы, кисти и стопы с полюсами локтей и колен.
// Рамка модели: y — вверх, z — вперёд (лицо), x — влево от человека (его левая рука при +x).
import * as THREE from 'three';
import { solveTwoBone, mulberry32, tileNoise, normalFromHeight, canvasTexture } from './lib.js';
import { fabric, pvc } from './person.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const DATA = new URL('./mh/', import.meta.url);
const decode = (text, Type) => { const bytes = Uint8Array.from(atob(text), (char) => char.charCodeAt(0)); return new Type(bytes.buffer); };

// ---------------- загрузка ----------------
const topology = await (await fetch(new URL('topology.json', DATA))).json();
const COUNT = topology.count;
const PARTS = {};
for (const [name, part] of Object.entries(topology.parts)) {
  PARTS[name] = { source: decode(part.source, Int32Array), uv: decode(part.uv, Float32Array), index: decode(part.index, Uint32Array), proxy: !!part.proxy };
}
const SKIN_INDEX = decode(topology.skinIndex, Uint8Array);
const SKIN_WEIGHT = decode(topology.skinWeight, Float32Array);
const BONES = topology.bones;
const BONE = Object.fromEntries(BONES.map((bone, index) => [bone.name, index]));
const MASKS = Object.fromEntries(Object.entries(topology.masks).map(([name, text]) => [name, decode(text, Float32Array)]));

const kindData = new Map();
const skinTextures = new Map();
// данные вида и текстура кожи: загружаются заранее (prepareHuman), держатся последние несколько видов
export async function prepareHuman(kind) {
  if (!kindData.has(kind)) {
    const record = await (await fetch(new URL(`kind_${kind}.json`, DATA))).json();
    record.rest = decode(record.positions, Float32Array);
    record.eyeRest = decode(record.eyes, Float32Array);
    kindData.set(kind, record);
  }
  if (!skinTextures.has(kind)) {
    const texture = await new THREE.TextureLoader().loadAsync(new URL(`skin_${kind}.png`, DATA).href);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.flipY = true;
    texture.anisotropy = 8;
    skinTextures.set(kind, texture);
    // держим текстуры не больше чем для трёх видов (2048² каждая)
    while (skinTextures.size > 3) {
      const [oldest] = skinTextures.keys();
      skinTextures.get(oldest).dispose();
      skinTextures.delete(oldest);
    }
  }
}
let eyeTexture = null;
async function prepareEyes() {
  eyeTexture = await new THREE.TextureLoader().loadAsync(new URL('eye_brown.png', DATA).href);
  eyeTexture.colorSpace = THREE.SRGBColorSpace;
}
await prepareEyes();
export const hasHuman = (kind) => kindData.has(kind) && skinTextures.has(kind);

// ---------------- общие материалы ----------------
const cache = new Map();
const once = (key, make) => { if (!cache.has(key)) cache.set(key, make()); return cache.get(key); };
function skinMaterial(kind) {
  return once('skin' + kind, () => new THREE.MeshPhysicalMaterial({
    map: skinTextures.get(kind), roughness: 0.6, sheen: 0.12, sheenRoughness: 0.6, sheenColor: new THREE.Color(0xffb8a0),
  }));
}
// глаз: у сетки два слоя — яблоко с радужкой и роговица (прозрачная часть текстуры отбрасывается)
const eyeMaterial = () => once('eye', () => new THREE.MeshPhysicalMaterial({ map: eyeTexture, roughness: 0.12, clearcoat: 1, clearcoatRoughness: 0.03, alphaTest: 0.4 }));
const lashMaterial = () => once('lash', () => new THREE.MeshStandardMaterial({ color: 0x120c0a, roughness: 0.8, side: THREE.DoubleSide }));

// волосы: пряди вдоль направления «сверху вниз»
function hairMaterial(color) {
  return once('hair' + color.join(','), () => {
    const width = 512, height = 512, rng = mulberry32(Math.round(color[0] * 1000 + color[1] * 100));
    const canvas = document.createElement('canvas');
    canvas.width = width; canvas.height = height;
    const context = canvas.getContext('2d');
    const [red, green, blue] = color.map((value) => value * 255);
    context.fillStyle = `rgb(${red},${green},${blue})`;
    context.fillRect(0, 0, width, height);
    for (let strand = 0; strand < 5000; strand++) {
      const x = rng() * width, y = rng() * height, length = 30 + rng() * 120, light = rng() < 0.45 ? 1.45 : 0.55;
      context.strokeStyle = `rgba(${Math.min(255, red * light + 6)},${Math.min(255, green * light + 4)},${Math.min(255, blue * light + 2)},${0.2 + rng() * 0.35})`;
      context.lineWidth = 0.6 + rng() * 1.2;
      context.beginPath(); context.moveTo(x, y); context.quadraticCurveTo(x + (rng() - 0.5) * 8, y + length / 2, x + (rng() - 0.5) * 14, y + length); context.stroke();
    }
    const size = 256, heights = new Float32Array(size * size);
    for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) heights[y * size + x] = tileNoise(x / size, y / size * 0.04, 48, 2, 7) * 0.8 + tileNoise(x / size, y / size, 3, 2, 9) * 0.6;
    const normal = normalFromHeight(heights, size, 3);
    return new THREE.MeshPhysicalMaterial({ map: canvasTexture(canvas, { repeat: 1 }), normalMap: normal, normalScale: new THREE.Vector2(0.7, 0.7), roughness: 0.5, sheen: 0.6, sheenRoughness: 0.35, sheenColor: new THREE.Color().setRGB(...color.map((value) => Math.min(1, value * 1.8 + 0.1))) });
  });
}

// ---------------- геометрия ----------------
function boneWeight(vertex, names) {
  let total = 0;
  for (let slot = 0; slot < 4; slot++) if (names.has(BONES[SKIN_INDEX[vertex * 4 + slot]].name)) total += SKIN_WEIGHT[vertex * 4 + slot];
  return total;
}
const setOf = (...names) => new Set(names.flatMap((name) => (name.endsWith('_') ? [name + 'l', name + 'r'] : [name])));
const TORSO = setOf('spine_01', 'spine_02', 'spine_03', 'clavicle_');
const UPPER_ARM = setOf('upperarm_'), LOWER_ARM = setOf('lowerarm_'), HAND = setOf('hand_', 'thumb_01_', 'index_01_', 'middle_01_', 'ring_01_', 'pinky_01_',
  'thumb_02_', 'index_02_', 'middle_02_', 'ring_02_', 'pinky_02_', 'thumb_03_', 'index_03_', 'middle_03_', 'ring_03_', 'pinky_03_');
const NECK = setOf('neck_01'), HEAD = setOf('head'), PELVIS = setOf('pelvis'), THIGH = setOf('thigh_'), CALF = setOf('calf_'), FOOT = setOf('foot_', 'ball_');

// геометрия части с перемещёнными вершинами; keep(вершина-источник, положение) решает, остаётся ли треугольник
function partGeometry(part, positionOf, { keep = null, keepAny = false, uvMode = 'part', skin = true } = {}) {
  const vertices = part.source.length;
  const position = new Float32Array(vertices * 3);
  for (let index = 0; index < vertices; index++) {
    const point = positionOf(index);
    position.set([point.x, point.y, point.z], index * 3);
  }
  let indices = part.index;
  if (keep) {
    const kept = [];
    for (let triangle = 0; triangle < indices.length; triangle += 3) {
      const inside = keepAny ? keep(indices[triangle]) || keep(indices[triangle + 1]) || keep(indices[triangle + 2])
        : keep(indices[triangle]) && keep(indices[triangle + 1]) && keep(indices[triangle + 2]);
      if (inside) kept.push(indices[triangle], indices[triangle + 1], indices[triangle + 2]);
    }
    indices = new Uint32Array(kept);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(position, 3));
  if (uvMode === 'part') geometry.setAttribute('uv', new THREE.BufferAttribute(part.uv, 2));
  geometry.setIndex(new THREE.BufferAttribute(indices, 1));
  if (skin && !part.proxy) {
    const skinIndex = new Uint16Array(vertices * 4), skinWeight = new Float32Array(vertices * 4);
    for (let index = 0; index < vertices; index++) {
      const source = part.source[index];
      for (let slot = 0; slot < 4; slot++) { skinIndex[index * 4 + slot] = SKIN_INDEX[source * 4 + slot]; skinWeight[index * 4 + slot] = SKIN_WEIGHT[source * 4 + slot]; }
    }
    geometry.setAttribute('skinIndex', new THREE.BufferAttribute(skinIndex, 4));
    geometry.setAttribute('skinWeight', new THREE.BufferAttribute(skinWeight, 4));
  }
  geometry.computeVertexNormals();
  return geometry;
}
// мягкая маска по сетке: значения 0..1 сглаживаются по соседям (вершины склеены по положению),
// край потом режется alphaTest по изолинии 0.5 — ровная кривая вместо лесенки из треугольников
function softMask(part, positionOf, valueOf, iterations = 3) {
  const vertices = part.source.length;
  const weld = new Map(), welded = new Int32Array(vertices);
  for (let index = 0; index < vertices; index++) {
    const point = positionOf(index);
    const key = `${Math.round(point.x * 1e4)},${Math.round(point.y * 1e4)},${Math.round(point.z * 1e4)}`;
    if (!weld.has(key)) weld.set(key, weld.size);
    welded[index] = weld.get(key);
  }
  const neighbours = Array.from({ length: weld.size }, () => new Set());
  for (let triangle = 0; triangle < part.index.length; triangle += 3) {
    for (let corner = 0; corner < 3; corner++) {
      const a = welded[part.index[triangle + corner]], b = welded[part.index[triangle + (corner + 1) % 3]];
      neighbours[a].add(b); neighbours[b].add(a);
    }
  }
  let values = new Float32Array(weld.size), counts = new Float32Array(weld.size);
  for (let index = 0; index < vertices; index++) { values[welded[index]] += valueOf(index); counts[welded[index]]++; }
  for (let vertex = 0; vertex < weld.size; vertex++) values[vertex] /= counts[vertex] || 1;
  for (let step = 0; step < iterations; step++) {
    const next = new Float32Array(weld.size);
    for (let vertex = 0; vertex < weld.size; vertex++) {
      let sum = values[vertex];
      for (const other of neighbours[vertex]) sum += values[other];
      next[vertex] = sum / (neighbours[vertex].size + 1);
    }
    values = next;
  }
  const result = new Float32Array(vertices);
  for (let index = 0; index < vertices; index++) result[index] = values[welded[index]];
  return result;
}
// вершинная прозрачность по маске и материал с отсечкой по ней
function applyMask(geometry, mask) {
  const colors = new Float32Array(mask.length * 4);
  for (let index = 0; index < mask.length; index++) colors.set([1, 1, 1, mask[index]], index * 4);
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 4));
}
const doubleMaterials = new Map();
function doubleSided(material) {
  if (material.side === THREE.DoubleSide) return material;
  if (!doubleMaterials.has(material)) { const copy = material.clone(); copy.side = THREE.DoubleSide; doubleMaterials.set(material, copy); }
  return doubleMaterials.get(material);
}
const maskedMaterials = new Map();
function maskedMaterial(material) {
  if (!maskedMaterials.has(material)) {
    const copy = material.clone();
    copy.vertexColors = true;
    copy.alphaTest = 0.5;
    copy.alphaToCoverage = false;
    maskedMaterials.set(material, copy);
  }
  return maskedMaterials.get(material);
}

// у вершин с одинаковым положением (швы UV) — общая нормаль, чтобы слой одежды не рвался по швам при подъёме
function smoothNormals(geometry) {
  const position = geometry.attributes.position, normal = geometry.attributes.normal;
  const groups = new Map();
  for (let index = 0; index < position.count; index++) {
    const key = `${Math.round(position.getX(index) * 1e4)},${Math.round(position.getY(index) * 1e4)},${Math.round(position.getZ(index) * 1e4)}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(index);
  }
  const sum = new THREE.Vector3();
  for (const members of groups.values()) {
    if (members.length < 2) continue;
    sum.set(0, 0, 0);
    for (const index of members) sum.add(V(normal.getX(index), normal.getY(index), normal.getZ(index)));
    sum.normalize();
    for (const index of members) normal.setXYZ(index, sum.x, sum.y, sum.z);
  }
}
// UV ткани: проекция по преобладающей оси нормали (ткань — повторяющаяся текстура, швы не заметны)
function boxUV(geometry, density = 2.4) {
  const position = geometry.attributes.position, normal = geometry.attributes.normal;
  const uv = new Float32Array(position.count * 2);
  for (let index = 0; index < position.count; index++) {
    const nx = Math.abs(normal.getX(index)), nz = Math.abs(normal.getZ(index)), ny = Math.abs(normal.getY(index));
    const x = position.getX(index), y = position.getY(index), z = position.getZ(index);
    let u, v;
    if (ny > nx && ny > nz) { u = x; v = z; } else if (nx > nz) { u = z; v = y; } else { u = x; v = y; }
    uv[index * 2] = u * density; uv[index * 2 + 1] = v * density;
  }
  geometry.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
}
// сгладить слой одежды (Таубин: без усадки) — у ткани нет рельефа мышц; кромка остаётся на месте
// ровное освещение ткани: нормали усредняются по соседям (вершины склеены по положению) — рельеф тела под тканью не виден
function blurNormals(geometry, passes, skipArms = false) {
  const position = geometry.attributes.position, normal = geometry.attributes.normal, index = geometry.index.array;
  const keyOf = (vertex) => `${Math.round(position.getX(vertex) * 1e4)},${Math.round(position.getY(vertex) * 1e4)},${Math.round(position.getZ(vertex) * 1e4)}`;
  const weld = new Map(), welded = new Int32Array(position.count);
  for (let vertex = 0; vertex < position.count; vertex++) { const key = keyOf(vertex); if (!weld.has(key)) weld.set(key, weld.size); welded[vertex] = weld.get(key); }
  const neighbours = Array.from({ length: weld.size }, () => new Set());
  for (let triangle = 0; triangle < index.length; triangle += 3) for (let corner = 0; corner < 3; corner++) {
    const a = welded[index[triangle + corner]], b = welded[index[triangle + (corner + 1) % 3]];
    neighbours[a].add(b); neighbours[b].add(a);
  }
  let values = new Float32Array(weld.size * 3);
  for (let vertex = 0; vertex < position.count; vertex++) { const at = welded[vertex] * 3; values[at] += normal.getX(vertex); values[at + 1] += normal.getY(vertex); values[at + 2] += normal.getZ(vertex); }
  for (let pass = 0; pass < passes; pass++) {
    const next = new Float32Array(values);
    for (let vertex = 0; vertex < weld.size; vertex++) for (const other of neighbours[vertex]) for (let axis = 0; axis < 3; axis++) next[vertex * 3 + axis] += values[other * 3 + axis];
    for (let vertex = 0; vertex < weld.size; vertex++) { const length = Math.hypot(next[vertex * 3], next[vertex * 3 + 1], next[vertex * 3 + 2]) || 1; for (let axis = 0; axis < 3; axis++) next[vertex * 3 + axis] /= length; }
    values = next;
  }
  // рукава со складками — свои нормали (складки видны), плавный переход по весу рук
  const skinIndex = geometry.attributes.skinIndex, skinWeight = geometry.attributes.skinWeight;
  for (let vertex = 0; vertex < position.count; vertex++) {
    let arm = 0;
    if (skipArms && skinIndex) for (let slot = 0; slot < 4; slot++) {
      const name = BONES[skinIndex.getComponent(vertex, slot)].name;
      if (UPPER_ARM.has(name) || LOWER_ARM.has(name) || HAND.has(name)) arm += skinWeight.getComponent(vertex, slot);
    }
    const keep = smooth(0.3, 0.7, arm), at = welded[vertex] * 3;
    const x = values[at] * (1 - keep) + normal.getX(vertex) * keep, y = values[at + 1] * (1 - keep) + normal.getY(vertex) * keep, z = values[at + 2] * (1 - keep) + normal.getZ(vertex) * keep;
    const length = Math.hypot(x, y, z) || 1;
    normal.setXYZ(vertex, x / length, y / length, z / length);
  }
  normal.needsUpdate = true;
}

// ниже груди нормали ткани — горизонтально от оси корпуса: висящая ткань освещена ровно по высоте,
// у верха халата и у пол на стыке одинаковые нормали — без полосы на поясе
function hangingNormals(geometry, kind) {
  const shape = bagFrame(kind), frame = restOf(kind).frame, position = geometry.attributes.position, normal = geometry.attributes.normal;
  for (let vertex = 0; vertex < position.count; vertex++) {
    const x = position.getX(vertex), y = position.getY(vertex), z = position.getZ(vertex);
    const amount = smooth(shape.chestY - 0.02, shape.chestY - 0.16, y) * (1 - smooth(frame.waist + 0.3, frame.waist + 0.4, y));
    if (amount <= 0) continue;
    const dx = x, dz = z - shape.chestZ, length = Math.hypot(dx, dz);
    if (length < 0.05) continue;
    const radial = V(dx / length, 0, dz / length), current = V(normal.getX(vertex), normal.getY(vertex), normal.getZ(vertex));
    // рукава — как есть (плавно по весу рук), на корпусе — к горизонтали, сильнее где нормаль уже наружу
    let arm = 0;
    const skinIndex = geometry.attributes.skinIndex, skinWeight = geometry.attributes.skinWeight;
    if (skinIndex) for (let slot = 0; slot < 4; slot++) {
      const name = BONES[skinIndex.getComponent(vertex, slot)].name;
      if (UPPER_ARM.has(name) || LOWER_ARM.has(name) || HAND.has(name)) arm += skinWeight.getComponent(vertex, slot);
    }
    const weight = amount * (1 - smooth(0.15, 0.5, arm)) * smooth(-0.2, 0.4, current.dot(radial));
    if (weight <= 0) continue;
    current.lerp(radial, weight).normalize();
    normal.setXYZ(vertex, current.x, current.y, current.z);
  }
  normal.needsUpdate = true;
}

// спина халата: рельефа тела нет — нормаль считается от оси трапециевидного силуэта (горизонтально наружу,
// чуть вверх по расширению книзу), поверх — продольные складки (только освещение, без сдвига вершин).
// Складки — узкие гребни с плоскими промежутками, от лопаток до подола, полосами разной длины, книзу расходятся веером.
function backFoldNormals(geometry, kind, options) {
  const shape = trapezoidFrame(kind), frame = restOf(kind).frame;
  const position = geometry.attributes.position, normal = geometry.attributes.normal;
  const skinIndex = geometry.attributes.skinIndex, skinWeight = geometry.attributes.skinWeight;
  const count = options.count ?? 11, depth = options.depth ?? 0.009, flare = options.flare ?? 0.065;
  const top = frame.shoulderY - 0.03, hem = restOf(kind).joints.calf_l[0].y - 0.1;
  const ridge = (phase) => (0.5 + 0.5 * Math.cos(phase * Math.PI * 2)) ** 2.5;
  // высота складки в точке (угол вокруг оси, высота)
  const height = (angle, y) => {
    const turn = angle / (Math.PI * 2);
    const warp = (noise3(turn * 4 + 2.3, 0.7, 4.1) - 0.5) * 1.2;
    const wobble = (noise3(turn * 6, y * 3, 8.2) - 0.5) * 0.35;
    const phase = turn * count + warp + wobble;
    // полоса: складка начинается и гаснет на разной высоте
    const streak = smooth(0.38, 0.6, noise3(Math.round(phase) * 5.3 + 11, y * 1.8, 2.9));
    // от лопаток вниз нарастает, у подола чуть слабее
    const along = smooth(shape.armpitY + 0.06, shape.armpitY - 0.08, y) * (1 - 0.3 * smooth(hem + 0.25, hem, y));
    return depth * ridge(phase) * streak * along;
  };
  const step = 0.004;
  for (let vertex = 0; vertex < position.count; vertex++) {
    const x = position.getX(vertex), y = position.getY(vertex), z = position.getZ(vertex);
    if (y > top) continue;
    const dx = x, dz = z - shape.centerZ, radius = Math.hypot(dx, dz);
    if (radius < 0.04) continue;
    const angle = Math.atan2(dx, dz);
    // спина и бока сзади; перед не трогаем
    const back = smooth(0.25, -0.3, Math.cos(angle));
    let arm = 0;
    if (skinIndex) for (let slot = 0; slot < 4; slot++) {
      const name = BONES[skinIndex.getComponent(vertex, slot)].name;
      if (UPPER_ARM.has(name) || LOWER_ARM.has(name) || HAND.has(name)) arm += skinWeight.getComponent(vertex, slot);
    }
    // к плечам нормаль плавно возвращается к своей (наклон плеч), на рукавах — своя
    const weight = back * (1 - smooth(0.15, 0.45, arm)) * smooth(top, top - 0.08, y);
    if (weight <= 0) continue;
    const tilt = flare + 0.9 * smooth(shape.armpitY - 0.02, top, y);
    const flat = V(dx / radius, tilt, dz / radius).normalize();
    // наклон гребня: производные высоты по дуге и по вертикали
    const arc = step / radius;
    const slopeAround = (height(angle + arc, y) - height(angle - arc, y)) / (2 * step);
    const slopeDown = (height(angle, y + step) - height(angle, y - step)) / (2 * step);
    const tangent = V(Math.cos(angle), 0, -Math.sin(angle));
    flat.addScaledVector(tangent, -slopeAround).addScaledVector(V(0, 1, 0), -slopeDown).normalize();
    const current = V(normal.getX(vertex), normal.getY(vertex), normal.getZ(vertex)).lerp(flat, weight).normalize();
    normal.setXYZ(vertex, current.x, current.y, current.z);
  }
  normal.needsUpdate = true;
}

function relax(geometry, iterations = 6) {
  const position = geometry.attributes.position, index = geometry.index.array;
  const keyOf = (vertex) => `${Math.round(position.getX(vertex) * 1e4)},${Math.round(position.getY(vertex) * 1e4)},${Math.round(position.getZ(vertex) * 1e4)}`;
  const weld = new Map(), welded = new Int32Array(position.count);
  for (let vertex = 0; vertex < position.count; vertex++) { const key = keyOf(vertex); if (!weld.has(key)) weld.set(key, weld.size); welded[vertex] = weld.get(key); }
  const neighbours = Array.from({ length: weld.size }, () => new Set());
  const edgeCount = new Map();
  for (let triangle = 0; triangle < index.length; triangle += 3) {
    for (let corner = 0; corner < 3; corner++) {
      const a = welded[index[triangle + corner]], b = welded[index[triangle + (corner + 1) % 3]];
      neighbours[a].add(b); neighbours[b].add(a);
      const edge = a < b ? a + ',' + b : b + ',' + a;
      edgeCount.set(edge, (edgeCount.get(edge) || 0) + 1);
    }
  }
  const boundary = new Uint8Array(weld.size);
  for (const [edge, uses] of edgeCount) if (uses === 1) for (const vertex of edge.split(',')) boundary[+vertex] = 1;
  let points = new Float32Array(weld.size * 3);
  for (let vertex = 0; vertex < position.count; vertex++) points.set([position.getX(vertex), position.getY(vertex), position.getZ(vertex)], welded[vertex] * 3);
  for (let step = 0; step < iterations * 2; step++) {
    const factor = step % 2 ? -0.53 : 0.5, next = new Float32Array(points);
    for (let vertex = 0; vertex < weld.size; vertex++) {
      if (boundary[vertex] || !neighbours[vertex].size) continue;
      let x = 0, y = 0, z = 0;
      for (const other of neighbours[vertex]) { x += points[other * 3]; y += points[other * 3 + 1]; z += points[other * 3 + 2]; }
      const count = neighbours[vertex].size;
      next[vertex * 3] += factor * (x / count - points[vertex * 3]);
      next[vertex * 3 + 1] += factor * (y / count - points[vertex * 3 + 1]);
      next[vertex * 3 + 2] += factor * (z / count - points[vertex * 3 + 2]);
    }
    points = next;
  }
  for (let vertex = 0; vertex < position.count; vertex++) position.setXYZ(vertex, points[welded[vertex] * 3], points[welded[vertex] * 3 + 1], points[welded[vertex] * 3 + 2]);
  geometry.computeVertexNormals();
}

// общая основа одежды: вся сетка «колготок» вида, сглаженная целиком, с нормалями — все слои строятся от неё,
// поэтому соседние слои (жилет и полосы на нём) не расходятся из-за разного сглаживания по краям кусков
const clothBases = new Map();
function clothBase(kind, iterations) {
  const key = kind + ':' + iterations;
  if (!clothBases.has(key)) {
    const rest = restOf(kind), part = PARTS.tights;
    const geometry = partGeometry(part, (index) => rest.point(part.source[index]), { uvMode: 'none', skin: false });
    if (iterations) {
      relax(geometry, iterations);
      smoothNormals(geometry);
      // сглаживание только наружу: на выпуклостях (плечи, ключицы) основа не уходит под кожу, иначе тело проступает сквозь ткань
      const position = geometry.attributes.position, normal = geometry.attributes.normal;
      for (let index = 0; index < position.count; index++) {
        const raw = rest.point(part.source[index]);
        const inward = (position.getX(index) - raw.x) * normal.getX(index) + (position.getY(index) - raw.y) * normal.getY(index) + (position.getZ(index) - raw.z) * normal.getZ(index);
        if (inward < 0) position.setXYZ(index, position.getX(index) - normal.getX(index) * inward, position.getY(index) - normal.getY(index) * inward, position.getZ(index) - normal.getZ(index) * inward);
      }
    }
    smoothNormals(geometry);
    clothBases.set(key, { position: geometry.attributes.position.array.slice(), normal: geometry.attributes.normal.array.slice() });
  }
  return clothBases.get(key);
}

// приподнять вершины над телом по нормали на offset(вершина)
function inflate(geometry, offsetOf) {
  const position = geometry.attributes.position, normal = geometry.attributes.normal;
  for (let index = 0; index < position.count; index++) {
    const offset = offsetOf(index);
    position.setXYZ(index, position.getX(index) + normal.getX(index) * offset, position.getY(index) + normal.getY(index) * offset, position.getZ(index) + normal.getZ(index) * offset);
  }
  position.needsUpdate = true;
  geometry.computeVertexNormals();
}

// ---------------- одежда ----------------
// garment: { region, offset, material } — region(вершина-источник, положение покоя) → true, если вершина покрыта
// края одежды — по плоскостям (ровная кромка по рядам сетки): вырез у шеи, манжеты у запястий, низ брюк у щиколоток
// вырез: высота плавно меняется по углу вокруг шеи — сзади выше, спереди ниже (та же линия, что у основания воротника)
const neckLine = (frame, point) => {
  const neck = frame.joints.neck_01[0];
  const frontness = (1 + Math.cos(Math.atan2(point.x, point.z - (neck.z - 0.005)))) / 2;
  return neck.y + 0.013 - 0.055 * frontness ** 1.5;
};
const neckCut = (frame, point) => point.y < neckLine(frame, point);
// сторона по x: левая рука у модели в +x
const armSide = (point) => point.x > 0 ? 'l' : 'r';
const beforeWrist = (frame, point, margin = 0.015, source = null) => {
  if (source && boneWeight(source, UPPER_ARM) + boneWeight(source, LOWER_ARM) + boneWeight(source, HAND) < 0.3) return true;
  const side = armSide(point);
  const wrist = frame.joints['hand_' + side][0], elbow = frame.joints['lowerarm_' + side][0];
  return point.clone().sub(wrist).dot(wrist.clone().sub(elbow).normalize()) < -margin;
};
const aboveAnkle = (frame, point, height = 0.05) => point.y > frame.joints.foot_l[0].y + height;
const shortSleeve = (frame, point) => [armSide(point)].every((side) => {
  const shoulder = frame.joints['upperarm_' + side][0], elbow = frame.joints['lowerarm_' + side][0];
  const along = elbow.clone().sub(shoulder);
  return point.clone().sub(shoulder).dot(along.normalize()) < along.length() * 0.45 || Math.abs(point.x) < Math.abs(shoulder.x) - 0.02;
});
// тело под одеждой убирается, только если одежда есть и вокруг (кромка по сглаженной маске может отступить)
const COVER_PROBES = [V(0, 0, 0), V(0, 0.035, 0), V(0, -0.035, 0), V(0.03, 0, 0), V(-0.03, 0, 0), V(0, 0, 0.03), V(0, 0, -0.03)];
const band = (value, center, half) => Math.min(1, Math.max(0, 0.5 + (half - Math.abs(value - center)) / 0.04));
export const REGIONS = {
  // рубашка, китель, куртка: корпус и рукава до запястья, низ — до верха бёдер
  top: (frame) => (source, point) => boneWeight(source, HEAD) < 0.05 && boneWeight(source, FOOT) === 0 && neckCut(frame, point) && beforeWrist(frame, point, 0.015, source)
    && point.y > frame.waist - 0.11,
  // верх без рукавов (под халатом: рукава халата со складками не должны пропускать рукав нижней одежды)
  sleeveless: (frame) => (source, point) => REGIONS.top(frame)(source, point) && boneWeight(source, UPPER_ARM) + boneWeight(source, LOWER_ARM) + boneWeight(source, HAND) < 0.3,
  // короткий рукав: до середины плеча
  shortTop: (frame) => (source, point) => REGIONS.top(frame)(source, point) && shortSleeve(frame, point),
  // брюки: от пояса до щиколоток
  legs: (frame) => (source, point) => point.y < frame.waist + 0.05 && aboveAnkle(frame, point) && boneWeight(source, TORSO) < 0.7 && boneWeight(source, HAND) + boneWeight(source, LOWER_ARM) === 0,
  // комбинезон: всё, кроме головы, шеи, кистей и стоп
  coverall: (frame) => (source, point) => boneWeight(source, HEAD) < 0.05 && neckCut(frame, point) && beforeWrist(frame, point, 0.015, source) && aboveAnkle(frame, point, 0.04),
  // жилет: корпус без рукавов
  vest: (frame) => (source, point) => boneWeight(source, THIGH) < 0.3 && boneWeight(source, UPPER_ARM) + boneWeight(source, LOWER_ARM) < 0.25 && point.y > frame.waist - 0.08
    && neckCut(frame, point) && point.y < frame.joints.neck_01[0].y - 0.05,
  // световозвращающие полосы жилета: две горизонтальные ленты
  vestStripes: (frame) => (source, point) => REGIONS.vest(frame)(source, point) ? Math.max(band(point.y, frame.shoulderY - 0.17, 0.02), band(point.y, frame.waist + 0.04, 0.02)) : 0,
  // перчатки: кисть и низ предплечья (длинные у костюма биозащиты)
  glove: (frame) => (source, point) => boneWeight(source, HAND) > 0.15 || !beforeWrist(frame, point, 0.1, source),
  // обувь по стопе: туфли до щиколотки, ботинки и сапоги — выше по голени
  shoes: (frame) => (source, point) => boneWeight(source, FOOT) > 0.3 || point.y < frame.joints.foot_l[0].y + 0.03,
  boot: (frame) => (source, point) => boneWeight(source, FOOT) > 0.2 || point.y < frame.joints.foot_l[0].y + 0.24,
  workBoot: (frame) => (source, point) => boneWeight(source, FOOT) > 0.2 || point.y < frame.joints.foot_l[0].y + 0.11,
  // ремень: лента по поясу брюк
  // узкие ленты возвращают долю 0..1 (линейно по высоте): кромка по изолинии 0,5 ровная и на крупной сетке
  belt: (frame) => (source, point) => boneWeight(source, UPPER_ARM) + boneWeight(source, LOWER_ARM) + boneWeight(source, HAND) < 0.1 ? band(point.y, frame.waist + 0.012, 0.02) : 0,
  // фартук: спереди от груди до колен
  apron: (frame) => (source, point) => point.z > frame.pelvis.z + 0.02 && point.y < frame.shoulderY - 0.08 && point.y > frame.joints.calf_l[0].y + 0.08
    && boneWeight(source, UPPER_ARM) + boneWeight(source, LOWER_ARM) + boneWeight(source, HAND) < 0.1 && Math.abs(point.x) < 0.2,
};

// ---------------- построение ----------------
const restCache = new Map();
// данные вида в покое: масштаб под длину ног 0,84 м (как у прежней модели), суставы, рамка (талия, плечи, лицо)
function restOf(kind) {
  if (restCache.has(kind)) return restCache.get(kind);
  const data = kindData.get(kind);
  const joint = (name, end = 0) => V(...data.joints[name][end]);
  const leg = (side) => joint('thigh_' + side).distanceTo(joint('calf_' + side)) + joint('calf_' + side).distanceTo(joint('foot_' + side));
  const scale = 0.84 / ((leg('l') + leg('r')) / 2);
  const point = (index) => V(data.rest[index * 3], data.rest[index * 3 + 1], data.rest[index * 3 + 2]).multiplyScalar(scale);
  const joints = Object.fromEntries(BONES.map((bone) => [bone.name, [joint(bone.name, 0).multiplyScalar(scale), joint(bone.name, 1).multiplyScalar(scale)]]));
  // центр головы: середина рамки вершин, привязанных к голове
  const headBox = new THREE.Box3();
  for (const vertex of PARTS.body.source) if (boneWeight(vertex, HEAD) > 0.95) headBox.expandByPoint(point(vertex));
  // глаза: середина двух половин сетки глаз
  const eyeCenter = new THREE.Vector3(), eyeCount = data.eyeRest.length / 3;
  for (let index = 0; index < eyeCount; index++) eyeCenter.add(V(data.eyeRest[index * 3], data.eyeRest[index * 3 + 1], data.eyeRest[index * 3 + 2]));
  eyeCenter.multiplyScalar(scale / eyeCount);
  // расстояние между центрами глаз: средние точки левой и правой половин
  const sides = [V(0, 0, 0), V(0, 0, 0)], counts = [0, 0];
  for (let index = 0; index < eyeCount; index++) {
    const point = V(data.eyeRest[index * 3], data.eyeRest[index * 3 + 1], data.eyeRest[index * 3 + 2]).multiplyScalar(scale);
    const side = point.x > eyeCenter.x ? 1 : 0;
    sides[side].add(point); counts[side]++;
  }
  const eyeDistance = sides[0].divideScalar(counts[0]).distanceTo(sides[1].divideScalar(counts[1]));
  const frame = {
    waist: joints.spine_01[0].y + 0.02, shoulderY: joints.upperarm_l[0].y, pelvis: joints.pelvis[0].clone(),
    headCenter: headBox.getCenter(V(0, 0, 0)), headSize: headBox.getSize(V(0, 0, 0)), crown: headBox.max.y - headBox.getCenter(V(0, 0, 0)).y, eyeCenter, eyeDistance, joints,
  };
  const result = { data, scale, point, joints, frame };
  restCache.set(kind, result);
  return result;
}

// поверхность одежды/тела спереди в покое: наибольшее z у вершин «колготок» около (x, y)
// суставы в покое (масштаб модели): для расчёта поз до построения тела (оружие у плеча)
export function restJoints(kind) {
  const joints = restOf(kind).joints;
  return Object.fromEntries(Object.entries(joints).map(([name, value]) => [name, value[0].clone()]));
}
export function frontOf(kind, x, y, spread = 0.025) {
  const rest = restOf(kind), part = PARTS.tights;
  let best = -Infinity;
  for (let index = 0; index < part.source.length; index++) {
    const point = rest.point(part.source[index]);
    if (Math.abs(point.x - x) < spread && Math.abs(point.y - y) < spread) best = Math.max(best, point.z);
  }
  return best;
}

// покрытие волос: линия роста — высота над центром глаз (в долях расстояния между глазами) по углу вокруг головы:
// 0 — лоб, π/2 — над ухом, π — затылок (центр головы по глубине — на 1 доле позади глаз). Брови — 0,4, макушка — около 2,
// верх уха — 0,86. Возвращает 0..1 (мягкий край).
const HAIRLINE = {
  short: [[0, 1.25], [0.5, 1.25], [0.85, 1.1], [1.05, 0.8], [1.15, -0.15], [1.29, -0.15], [1.36, 0.92], [2.0, 0.92], [2.25, -0.3], [2.55, -1.35], [Math.PI, -1.35]],
  long: [[0, 1.25], [0.5, 1.25], [0.95, 1.0], [1.3, 0.2], [1.9, -1.0], [2.4, -2.2], [Math.PI, -2.5]],
};
function hairCoverage(relative, style) {
  if (style === 'bald') return 0;
  const table = HAIRLINE[style] || HAIRLINE.short;
  const angle = Math.atan2(Math.abs(relative.x), relative.z + 1.0);
  let line = table[table.length - 1][1];
  for (let index = 1; index < table.length; index++) {
    if (angle <= table[index][0]) {
      const [a0, h0] = table[index - 1], [a1, h1] = table[index];
      line = h0 + (h1 - h0) * (angle - a0) / (a1 - a0);
      break;
    }
  }
  return smooth(line - 0.08, line + 0.06, relative.y);
}
function smooth(edge0, edge1, value) { const amount = Math.min(1, Math.max(0, (value - edge0) / (edge1 - edge0))); return amount * amount * (3 - 2 * amount); }

// ---------------- свободный крой ----------------
// Поле смещения одежды от тела: штанины и рукава тянутся к цилиндру вокруг оси кости, корпус ниже груди — к профилю груди
// (ткань не повторяет талию и поясницу). Смещение считается по точке тела в покое, поэтому все слои одежды смещаются
// одинаково и сохраняют порядок (жилет и ремень остаются поверх комбинезона).
const bagCache = new Map();
function bagFrame(kind) {
  if (bagCache.has(kind)) return bagCache.get(kind);
  const rest = restOf(kind), frame = rest.frame, joints = rest.joints, part = PARTS.tights;
  // ось конечности из двух костей; t — доля длины от начала
  const limb = (names) => {
    const nodes = names.map((name) => joints[name][0]);
    const lengths = [nodes[0].distanceTo(nodes[1]), nodes[1].distanceTo(nodes[2])];
    const total = lengths[0] + lengths[1];
    return (point) => {
      let best = null;
      for (let piece = 0; piece < 2; piece++) {
        const start = nodes[piece], direction = nodes[piece + 1].clone().sub(start).divideScalar(lengths[piece]);
        const along = Math.min(lengths[piece], Math.max(0, point.clone().sub(start).dot(direction)));
        const axis = start.clone().addScaledVector(direction, along);
        const distance = point.distanceTo(axis);
        if (!best || distance < best.distance) best = { axis, distance, t: ((piece ? lengths[0] : 0) + along) / total };
      }
      return best;
    };
  };
  const legs = { l: limb(['thigh_l', 'calf_l', 'foot_l']), r: limb(['thigh_r', 'calf_r', 'foot_r']) };
  const arms = { l: limb(['upperarm_l', 'lowerarm_l', 'hand_l']), r: limb(['upperarm_r', 'lowerarm_r', 'hand_r']) };
  // радиус бедра и плеча — медиана расстояний до оси в верхней части
  const median = (values) => { values.sort((a, b) => a - b); return values[Math.floor(values.length / 2)] || 0.06; };
  const thighValues = [], armValues = [];
  const chestY = frame.shoulderY - 0.13, slice = [];
  for (const source of part.source) {
    const point = rest.point(source);
    const side = point.x > 0 ? 'l' : 'r';
    if (boneWeight(source, THIGH) > 0.8) { const near = legs[side](point); if (near.t > 0.1 && near.t < 0.22) thighValues.push(near.distance); }
    if (boneWeight(source, UPPER_ARM) > 0.8) { const near = arms[side](point); if (near.t > 0.15 && near.t < 0.35) armValues.push(near.distance); }
    if (Math.abs(point.y - chestY) < 0.045 && boneWeight(source, UPPER_ARM) + boneWeight(source, LOWER_ARM) < 0.2) slice.push(point);
  }
  // профиль груди: по 48 направлениям вокруг вертикальной оси наибольший радиус
  const zValues = slice.map((point) => point.z);
  const chestZ = (Math.min(...zValues) + Math.max(...zValues)) / 2;
  const BINS = 48, profile = new Float32Array(BINS);
  for (const point of slice) {
    const angle = Math.atan2(point.x, point.z - chestZ);
    const bin = Math.floor((angle / (Math.PI * 2) + 0.5) * BINS) % BINS;
    profile[bin] = Math.max(profile[bin], Math.hypot(point.x, point.z - chestZ));
  }
  const smoothed = profile.map((value, bin) => (profile[(bin + BINS - 1) % BINS] + value * 2 + profile[(bin + 1) % BINS]) / 4);
  const profileAt = (angle) => {
    const position = (angle / (Math.PI * 2) + 0.5) * BINS - 0.5;
    const low = Math.floor(position), mix = position - low;
    return smoothed[(low + BINS) % BINS] * (1 - mix) + smoothed[(low + 1) % BINS] * mix;
  };
  // перед таза на уровне тазобедренных суставов: до этой плоскости ткань перекрывает промежность спереди
  let crotchFront = -Infinity;
  for (const source of part.source) {
    const point = rest.point(source);
    if (Math.abs(point.x) < 0.03 && Math.abs(point.y - joints.thigh_l[0].y) < 0.02) crotchFront = Math.max(crotchFront, point.z);
  }
  // профиль бёдер (наибольший радиус по направлениям между тазобедренными суставами и поясом, без рук) — от него висят полы
  const hipTop = frame.waist - 0.05, hipSlice = [];
  for (const source of part.source) {
    const point = rest.point(source);
    if (point.y > joints.thigh_l[0].y - 0.07 && point.y < hipTop && boneWeight(source, UPPER_ARM) + boneWeight(source, LOWER_ARM) + boneWeight(source, HAND) < 0.1) hipSlice.push(point);
  }
  const hipZValues = hipSlice.map((point) => point.z);
  const hipZ = (Math.min(...hipZValues) + Math.max(...hipZValues)) / 2, hipProfile = new Float32Array(BINS);
  for (const point of hipSlice) {
    const bin = Math.floor((Math.atan2(point.x, point.z - hipZ) / (Math.PI * 2) + 0.5) * BINS) % BINS;
    hipProfile[bin] = Math.max(hipProfile[bin], Math.hypot(point.x, point.z - hipZ));
  }
  const hipSmoothed = hipProfile.map((value, bin) => (hipProfile[(bin + BINS - 1) % BINS] + value * 2 + hipProfile[(bin + 1) % BINS]) / 4);
  const hipProfileAt = (angle) => {
    const position = (angle / (Math.PI * 2) + 0.5) * BINS - 0.5;
    const low = Math.floor(position), mix = position - low;
    return hipSmoothed[(low + BINS) % BINS] * (1 - mix) + hipSmoothed[(low + 1) % BINS] * mix;
  };
  const result = { hipZ, hipTop, hipProfileAt, crotchFront, legs, arms, thighRadius: median(thighValues), armRadius: median(armValues), chestY, chestZ, profileAt,
    hipY: joints.thigh_l[0].y, kneeY: joints.calf_l[0].y, footY: joints.foot_l[0].y };
  bagCache.set(kind, result);
  return result;
}

// смещение точки одежды; bag: { torso, legs, arms } — доля (0..1), tucked — штанины заправлены в ботинки
function bagDisplace(kind, point, source, bag) {
  const shape = bagFrame(kind), frame = restOf(kind).frame, out = V(0, 0, 0);
  const armWeight = source == null ? 0 : boneWeight(source, UPPER_ARM) + boneWeight(source, LOWER_ARM) + boneWeight(source, HAND);
  const legWeight = source == null ? 0 : boneWeight(source, THIGH) + boneWeight(source, CALF) + boneWeight(source, FOOT);
  if (bag.torso && armWeight < 0.6) {
    const fade = smooth(frame.waist - 0.21, frame.waist - 0.09, point.y) * (1 - smooth(shape.chestY - 0.01, shape.chestY + 0.07, point.y))
      * Math.max(0, 1 - legWeight) * (1 - armWeight / 0.6);
    if (fade > 0) {
      const dx = point.x, dz = point.z - shape.chestZ, radius = Math.hypot(dx, dz);
      const push = Math.max(0, shape.profileAt(Math.atan2(dx, dz)) * 0.985 - radius) * bag.torso * fade;
      if (radius > 1e-4) { out.x += dx / radius * push; out.z += dz / radius * push; }
    }
  }
  if (bag.legs && legWeight > 0.2 && point.y < shape.hipY + 0.03) {
    const near = shape.legs[point.x > 0 ? 'l' : 'r'](point);
    const radial = point.clone().sub(near.axis), radius = radial.length() || 1e-4;
    radial.divideScalar(radius);
    let push = Math.max(0, shape.thighRadius * (1.06 - 0.3 * near.t) - radius) * bag.legs * Math.min(1, legWeight) * smooth(shape.hipY + 0.03, shape.hipY - 0.07, point.y);
    // заправлено в ботинки — к голенищу сужается; иначе низ штанины лежит на обуви
    push *= bag.tucked ? smooth(shape.footY + 0.07, shape.footY + 0.2, point.y) : 1 - 0.35 * smooth(shape.footY + 0.15, shape.footY + 0.04, point.y);
    // внутренняя сторона бедра — не к другой ноге
    const inward = -Math.sign(point.x) * radial.x;
    if (inward > 0) push *= 1 - 0.75 * inward * smooth(shape.kneeY - 0.05, shape.hipY - 0.05, point.y);
    out.addScaledVector(radial, push);
  }
  // спереди между бёдрами ткань натянута от бедра к бедру, а не обтягивает промежность
  if (bag.legs && point.z > frame.pelvis.z && Math.abs(point.x) < 0.12) {
    const fade = smooth(shape.hipY - 0.2, shape.hipY - 0.06, point.y) * (1 - smooth(shape.hipY + 0.01, shape.hipY + 0.07, point.y)) * (1 - smooth(0.05, 0.12, Math.abs(point.x)));
    out.z += Math.max(0, shape.crotchFront - 0.012 - point.z) * bag.legs * fade;
  }
  if (bag.arms && armWeight > 0.3 && boneWeight(source, HAND) < 0.3) {
    const near = shape.arms[point.x > 0 ? 'l' : 'r'](point);
    const radial = point.clone().sub(near.axis), radius = radial.length() || 1e-4;
    radial.divideScalar(radius);
    let push = Math.max(0, shape.armRadius * (1.12 - 0.38 * near.t) + (bag.armsExtra || 0) * smooth(0.12, 0.38, near.t) * (1 - 0.4 * near.t) - radius) * bag.arms * Math.min(1, armWeight);
    // манжета собрана у запястья
    push *= 1 - 0.75 * smooth(0.82, 0.97, near.t);
    // к корпусу (подмышка) — меньше
    const inward = -Math.sign(point.x) * radial.x;
    if (inward > 0) push *= 1 - 0.85 * inward * (1 - smooth(0.25, 0.5, near.t));
    out.addScaledVector(radial, push);
  }
  return out;
}

// ---------------- складки ----------------
// Складки — смещение по нормали на сетке одежды, поделённой один раз (края по 1 см): у колена и под ним — поперечные,
// у щиколотки — набегающие на обувь (у заправленных в ботинки — напуск над голенищем), у локтя и манжеты — поперечные,
// вдоль штанин и рукавов — продольные (ткань висит), у пояса — сборка, от подмышек — косые. Форма складки: гребень
// узкий, впадина широкая; смещение в основном внутрь, чтобы не протыкать верхние слои.
function hash3(x, y, z) { const value = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453; return value - Math.floor(value); }
function noise3(x, y, z) {
  const ix = Math.floor(x), iy = Math.floor(y), iz = Math.floor(z);
  const fx = x - ix, fy = y - iy, fz = z - iz;
  const sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy), sz = fz * fz * (3 - 2 * fz);
  let total = 0;
  for (let corner = 0; corner < 8; corner++) {
    const dx = corner & 1, dy = (corner >> 1) & 1, dz = (corner >> 2) & 1;
    total += hash3(ix + dx, iy + dy, iz + dz) * (dx ? sx : 1 - sx) * (dy ? sy : 1 - sy) * (dz ? sz : 1 - sz);
  }
  return total;
}
// профиль складки по фазе (период 1): 0,3 на гребне, −1 во впадине; плавный, гребень острее
const crease = (phase) => { const wave = Math.cos(phase * Math.PI * 2); return wave > 0 ? 0.45 * wave ** 0.6 : -((-wave) ** 0.8); };
const gauss = (value, width) => Math.exp(-(value * value) / (2 * width * width));

function foldDisplace(kind, point, legWeight, armWeight, folds) {
  const shape = bagFrame(kind), frame = restOf(kind).frame;
  const amount = folds.amount ?? 1, scale = folds.scale ?? 1;
  const jitter = noise3(point.x * 9 + 3.1, point.y * 9, point.z * 9) * 2 - 1;
  let total = 0;
  if (folds.armsOnly && armWeight <= 0.3) return 0;
  if (legWeight > 0.3 && point.y < shape.hipY + 0.03) {
    const side = point.x > 0 ? 1 : -1;
    const near = shape.legs[side > 0 ? 'l' : 'r'](point);
    const radial = point.clone().sub(near.axis);
    // угол вокруг ноги: 0 — спереди, π/2 — снаружи, π — сзади
    const angle = Math.atan2(radial.x * side, radial.z), back = (1 - Math.cos(angle)) / 2;
    const along = shape.hipY - point.y;
    // колено: поперечные складки, сзади сильнее
    total += 0.0065 * gauss(near.t - 0.52, 0.08) * (0.45 + 0.55 * back) * crease(along / (0.042 * scale) + 0.7 * Math.sin(angle + jitter * 2.5));
    // низ штанины: набегает на обувь; заправленные — напуск над голенищем
    // напуск — наружу, поверх голенища
    if (folds.hem === false) { /* низ штанины в высоких сапогах — без складок */ } else if (folds.tucked) total += 0.008 * gauss(point.y - (shape.footY + 0.14), 0.035) * (0.9 + crease(along / (0.03 * scale) + 0.9 * Math.sin(angle * 2 + jitter * 3)));
    else total += 0.006 * smooth(0.8, 0.94, near.t) * crease(along / (0.032 * scale) + 0.8 * Math.sin(angle * 1.5 + jitter * 3));
    // продольные складки: ткань висит от бедра до низа
    total += 0.0035 * smooth(0.12, 0.3, near.t) * (1 - smooth(0.85, 0.97, near.t)) * crease(angle * 4 / (Math.PI * 2) * scale ** -0.5 + jitter * 0.6 + side * 0.2);
    // от промежности по внутренней стороне бедра — косые
    const inner = Math.max(0, -Math.sin(angle));
    total += 0.004 * gauss(near.t - 0.12, 0.07) * inner * crease((along * 0.8 - Math.abs(point.x) * 0.9) / (0.04 * scale) + jitter);
  } else if (armWeight > 0.3 && folds.sleeve) {
    // складки рукава — узкие гребни ткани (не бугры): профиль гребня острый, впадины между ними плоские.
    // Продольные: 5 по окружности, тянутся вдоль рукава полосами разной длины, слегка извиваются;
    // на сгибе локтя — косые с внутренней стороны; на предплечье закручиваются к манжете; у манжеты — сборка.
    const side = point.x > 0 ? 1 : -1;
    const near = shape.arms[side > 0 ? 'l' : 'r'](point);
    const radial = point.clone().sub(near.axis);
    const angle = Math.atan2(radial.x * side, radial.z), turn = angle / (Math.PI * 2) + 0.5;
    const tt = near.t, front = (1 + Math.cos(angle)) / 2, body = Math.max(0, -Math.sin(angle));
    const ridge = (phase, sharp = 6) => (0.5 + 0.5 * Math.cos(phase * Math.PI * 2)) ** sharp;
    // полоса: складка есть не по всей длине — включается и гаснет по шуму вдоль рукава
    const streak = (phase, along, seed) => smooth(0.42, 0.62, noise3(Math.round(phase) * 3.7 + seed, along * 2.4, side * 5));
    const wobble = (noise3(turn * 4, tt * 3, side) - 0.5) * 0.5;
    const upper = smooth(0.05, 0.15, tt) * (1 - smooth(0.4, 0.48, tt));
    // неравный шаг складок по окружности
    const warp = (noise3(turn * 3 + side, 0.3, 1.7) - 0.5) * 1.6;
    const longPhase = turn * 5 + warp + wobble;
    total += 0.015 * upper * ridge(longPhase, 2.5) * streak(longPhase, tt, 1);
    const forearm = smooth(0.56, 0.64, tt) * (1 - smooth(0.82, 0.88, tt));
    const twistPhase = turn * 4 + warp * 0.8 - tt * 2.2 + wobble;
    total += 0.013 * forearm * ridge(twistPhase, 2.5) * streak(twistPhase, tt, 7);
    const elbowPhase = (tt - 0.5) / 0.045 + turn * 2.2;
    total += 0.012 * gauss(tt - 0.5, 0.06) * (0.2 + 0.8 * Math.max(front, body)) * ridge(elbowPhase, 3);
    total += 0.006 * smooth(0.86, 0.94, tt) * ridge(tt / 0.02 + turn * 0.6 + wobble, 2);
    return total * amount;
  } else if (folds.armsOnly) {
    total = 0;
  } else if (armWeight > 0.3) {
    const side = point.x > 0 ? 1 : -1;
    const near = shape.arms[side > 0 ? 'l' : 'r'](point);
    const radial = point.clone().sub(near.axis);
    const angle = Math.atan2(radial.x * side, radial.z), front = (1 + Math.cos(angle)) / 2;
    const along = near.t * 0.55;
    // локоть: поперечные складки, на сгибе (спереди в опущенной руке) сильнее
    total += 0.0055 * gauss(near.t - 0.5, 0.085) * (0.35 + 0.65 * front) * crease(along / (0.034 * scale) + 0.8 * Math.sin(angle + jitter * 2.5));
    // манжета: набегает к запястью
    total += 0.0045 * smooth(0.76, 0.9, near.t) * crease(along / (0.028 * scale) + jitter * 2);
    // у плеча и подмышки — косые
    total += 0.0035 * (1 - smooth(0.12, 0.3, near.t)) * Math.max(0, -Math.sin(angle)) * crease((along + angle * 0.03) / (0.035 * scale) + jitter);
    // продольные вдоль рукава
    total += 0.0022 * smooth(0.15, 0.3, near.t) * (1 - smooth(0.75, 0.9, near.t)) * crease(angle * 3 / (Math.PI * 2) + jitter * 0.5);
  } else {
    const theta = Math.atan2(point.x, point.z - shape.chestZ);
    // сборка у пояса (под ремнём сильнее) — вертикальные складки
    const waist = folds.belted ? gauss(point.y - frame.waist - 0.012, 0.05) : 0.45 * gauss(point.y - frame.waist + 0.04, 0.07);
    total += 0.0045 * waist * crease(theta * 15 / (Math.PI * 2) / scale + jitter * 0.8);
    // косые от подмышек к середине груди и спины
    const armpit = gauss(Math.abs(point.x) - 0.12, 0.05) * gauss(point.y - (shape.chestY - 0.03), 0.07);
    total += 0.0035 * armpit * crease((Math.abs(point.x) * 0.75 + point.y * 0.65) / (0.04 * scale) + jitter);
    // свободный низ и полы: продольные складки
    const hang = smooth(frame.waist - 0.04, frame.waist - 0.16, point.y);
    total += 0.004 * hang * crease(theta * 10 / (Math.PI * 2) / scale + jitter);
    // спина ниже лопаток у свободной одежды
    const back = Math.max(0, -Math.cos(theta));
    total += 0.0025 * back * smooth(shape.chestY - 0.02, shape.chestY - 0.12, point.y) * smooth(frame.waist - 0.06, frame.waist + 0.05, point.y) * crease(theta * 8 / (Math.PI * 2) + jitter);
  }
  return total * amount * 1.8;
}

// разбить каждый треугольник на четыре (середины рёбер); атрибуты — средние, веса костей — четыре наибольших
function subdivide(geometry) {
  const index = geometry.index.array, count = geometry.attributes.position.count;
  const edges = new Map(), extra = [];
  const midpoint = (first, second) => {
    const key = first < second ? first * count + second : second * count + first;
    let vertex = edges.get(key);
    if (vertex === undefined) { vertex = count + extra.length; extra.push([first, second]); edges.set(key, vertex); }
    return vertex;
  };
  const faces = [];
  for (let triangle = 0; triangle < index.length; triangle += 3) {
    const a = index[triangle], b = index[triangle + 1], c = index[triangle + 2];
    const ab = midpoint(a, b), bc = midpoint(b, c), ca = midpoint(c, a);
    faces.push(a, ab, ca, ab, b, bc, ca, bc, c, ab, bc, ca);
  }
  const total = count + extra.length, result = new THREE.BufferGeometry();
  for (const [name, attribute] of Object.entries(geometry.attributes)) {
    if (name === 'normal' || name === 'uv') continue;
    const size = attribute.itemSize, source = attribute.array;
    const array = new source.constructor(total * size);
    array.set(source);
    if (name === 'skinIndex' || name === 'skinWeight') continue;
    extra.forEach(([first, second], offset) => {
      for (let item = 0; item < size; item++) array[(count + offset) * size + item] = (source[first * size + item] + source[second * size + item]) / 2;
    });
    result.setAttribute(name, new THREE.BufferAttribute(array, size));
  }
  if (geometry.attributes.skinIndex) {
    const bones = geometry.attributes.skinIndex.array, weights = geometry.attributes.skinWeight.array;
    const skinIndex = new Uint16Array(total * 4), skinWeight = new Float32Array(total * 4);
    skinIndex.set(bones); skinWeight.set(weights);
    extra.forEach(([first, second], offset) => {
      const merged = new Map();
      for (const vertex of [first, second]) for (let slot = 0; slot < 4; slot++) {
        const bone = bones[vertex * 4 + slot], weight = weights[vertex * 4 + slot] / 2;
        if (weight > 0) merged.set(bone, (merged.get(bone) || 0) + weight);
      }
      const best = [...merged].sort((left, right) => right[1] - left[1]).slice(0, 4);
      const sum = best.reduce((value, [, weight]) => value + weight, 0) || 1;
      best.forEach(([bone, weight], slot) => { skinIndex[(count + offset) * 4 + slot] = bone; skinWeight[(count + offset) * 4 + slot] = weight / sum; });
    });
    result.setAttribute('skinIndex', new THREE.BufferAttribute(skinIndex, 4));
    result.setAttribute('skinWeight', new THREE.BufferAttribute(skinWeight, 4));
  }
  result.setIndex(new THREE.BufferAttribute(new Uint32Array(faces), 1));
  return result;
}

// складки на слое: поделить сетку, сместить по нормали (точка покоя и доли ног/рук — из атрибутов)
function addFolds(geometry, kind, folds) {
  // узкие складки рукава — сетка делится дважды (шаг около 6 мм)
  const refined = folds.sleeve ? subdivide(subdivide(geometry)) : subdivide(geometry);
  refined.computeVertexNormals();
  smoothNormals(refined);
  const position = refined.attributes.position, normal = refined.attributes.normal, rest = refined.attributes.rest, limb = refined.attributes.limb;
  const point = V(0, 0, 0);
  for (let index = 0; index < position.count; index++) {
    point.set(rest.getX(index), rest.getY(index), rest.getZ(index));
    const shift = Math.max(-Math.max(0, limb.getZ(index) - 0.0065), foldDisplace(kind, point, limb.getX(index), limb.getY(index), folds));
    position.setXYZ(index, position.getX(index) + normal.getX(index) * shift, position.getY(index) + normal.getY(index) * shift, position.getZ(index) + normal.getZ(index) * shift);
  }
  refined.deleteAttribute('rest'); refined.deleteAttribute('limb');
  refined.computeVertexNormals();
  smoothNormals(refined);
  return refined;
}
// точка покоя и доли ног/рук у вершин куска сетки (для складок после деления)
function tagRest(geometry, part, rest) {
  const count = geometry.attributes.position.count, points = new Float32Array(count * 3), limbs = new Float32Array(count * 3);
  for (let index = 0; index < count; index++) {
    const source = part.source[index];
    points.set(rest.point(source).toArray(), index * 3);
    limbs[index * 3] = boneWeight(source, THIGH) + boneWeight(source, CALF) + boneWeight(source, FOOT);
    limbs[index * 3 + 1] = boneWeight(source, UPPER_ARM) + boneWeight(source, LOWER_ARM) + boneWeight(source, HAND);
    // зазор до тела: складка внутрь не глубже его части
    limbs[index * 3 + 2] = Math.hypot(geometry.attributes.position.getX(index) - points[index * 3], geometry.attributes.position.getY(index) - points[index * 3 + 1], geometry.attributes.position.getZ(index) - points[index * 3 + 2]);
  }
  geometry.setAttribute('rest', new THREE.BufferAttribute(points, 3));
  geometry.setAttribute('limb', new THREE.BufferAttribute(limbs, 3));
}

// ---------------- трапециевидный силуэт (халат) ----------------
// Ниже подмышек ткань не уже, чем выше: на высоте y радиус по каждому направлению — наибольший радиус тела
// от подмышек до y плюс запас и расширение книзу. Силуэт расширяется от плеч непрерывно до подола, у талии не сужается.
const SHELL_COLUMNS = 72;
const shellCache = new Map();
// выпуклая оболочка среза тела на высоте y (полоса ±band); withArms — с плечами (для кокетки)
function bodySlice(kind, y, band, withArms) {
  const rest = restOf(kind), points = [];
  for (const source of PARTS.tights.source) {
    if (boneWeight(source, HEAD) > 0) continue;
    const arm = boneWeight(source, UPPER_ARM) + boneWeight(source, LOWER_ARM) + boneWeight(source, HAND);
    if (arm > (withArms ? 0.99 : 0.2) || boneWeight(source, LOWER_ARM) + boneWeight(source, HAND) > 0.2) continue;
    const point = rest.point(source);
    if (Math.abs(point.y - y) < band) points.push([point.x, point.z]);
  }
  if (points.length < 6) return null;
  points.sort((first, second) => first[0] - second[0] || first[1] - second[1]);
  const cross = (origin, first, second) => (first[0] - origin[0]) * (second[1] - origin[1]) - (first[1] - origin[1]) * (second[0] - origin[0]);
  const lower = [], upper = [];
  for (const point of points) { while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], point) <= 0) lower.pop(); lower.push(point); }
  for (let index = points.length - 1; index >= 0; index--) { const point = points[index]; while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], point) <= 0) upper.pop(); upper.push(point); }
  return lower.slice(0, -1).concat(upper.slice(0, -1));
}
// радиусы многоугольника по направлениям вокруг (0, centerZ): 0 — вперёд (+z), π/2 — влево (+x)
function hullRadii(hull, centerZ) {
  const radii = new Float32Array(SHELL_COLUMNS);
  for (let column = 0; column < SHELL_COLUMNS; column++) {
    const angle = column / SHELL_COLUMNS * Math.PI * 2, directionX = Math.sin(angle), directionZ = Math.cos(angle);
    let best = 0;
    for (let edge = 0; edge < hull.length; edge++) {
      const [ax, az] = hull[edge], [bx, bz] = hull[(edge + 1) % hull.length];
      const ex = bx - ax, ez = bz - az, ox = ax, oz = az - centerZ, denominator = directionX * ez - directionZ * ex;
      if (Math.abs(denominator) < 1e-9) continue;
      const distance = (ox * ez - oz * ex) / denominator, along = (ox * directionZ - oz * directionX) / denominator;
      if (distance > 0 && along >= -1e-6 && along <= 1 + 1e-6) best = Math.max(best, distance);
    }
    radii[column] = best;
  }
  return radii;
}
const trapezoidCache = new Map();
function trapezoidFrame(kind) {
  if (trapezoidCache.has(kind)) return trapezoidCache.get(kind);
  const rest = restOf(kind), frame = rest.frame, joints = rest.joints;
  const armpitY = frame.shoulderY - 0.11, hipY = joints.thigh_l[0].y, lowest = joints.calf_l[0].y - 0.1;
  const chest = bodySlice(kind, frame.shoulderY - 0.14, 0.03, false);
  const centerZ = chest.reduce((sum, point) => sum + point[1], 0) / chest.length;
  const STEP = 0.02, rows = [];
  let running = new Float32Array(SHELL_COLUMNS);
  for (let y = armpitY; y >= lowest - 1e-6; y -= STEP) {
    if (y >= hipY - 0.12) {
      const hull = bodySlice(kind, y, 0.03, false);
      if (hull) { const radii = hullRadii(hull, centerZ); running = running.map((value, column) => Math.max(value, radii[column])); }
    }
    // по кругу — сглаживание без уменьшения
    let smoothed = running;
    for (let pass = 0; pass < 3; pass++) smoothed = smoothed.map((value, column) => (smoothed[(column + SHELL_COLUMNS - 1) % SHELL_COLUMNS] + value * 2 + smoothed[(column + 1) % SHELL_COLUMNS]) / 4);
    rows.push({ y, radii: smoothed.map((value, column) => Math.max(value, running[column])) });
  }
  const at = (x, y, z, ease, flare) => {
    const dx = x, dz = z - centerZ;
    const angle = (Math.atan2(dx, dz) + Math.PI * 2) % (Math.PI * 2);
    const position = angle / (Math.PI * 2) * SHELL_COLUMNS, column = Math.floor(position) % SHELL_COLUMNS, mix = position - Math.floor(position);
    const index = Math.min(rows.length - 1, Math.max(0, Math.round((armpitY - y) / STEP)));
    const radii = rows[index].radii;
    const radius = radii[column] * (1 - mix) + radii[(column + 1) % SHELL_COLUMNS] * mix;
    return { target: radius + ease + flare * Math.max(0, armpitY - y), radius: Math.hypot(dx, dz), dx, dz };
  };
  const result = { centerZ, armpitY, at };
  trapezoidCache.set(kind, result);
  return result;
}
// сдвинуть точку ткани наружу до трапециевидного силуэта (в покое); у подмышек — плавно к одежде по телу
function trapezoidPush(kind, point, source, options) {
  const shape = trapezoidFrame(kind);
  if (source !== null && boneWeight(source, UPPER_ARM) + boneWeight(source, LOWER_ARM) + boneWeight(source, HAND) > 0.35) return point;
  const amount = smooth(shape.armpitY + 0.03, shape.armpitY - 0.05, point.y);
  if (amount <= 0) return point;
  const { target, radius, dx, dz } = shape.at(point.x, point.y, point.z, options.ease ?? 0.02, options.flare ?? 0.06);
  if (radius < 1e-4 || radius >= target) return point;
  const scale = (radius + (target - radius) * amount) / radius;
  return V(dx * scale, point.y, shape.centerZ + dz * scale);
}

// ---------------- воротник и лацканы ----------------
// радиус поверхности тела вокруг оси шеи на высоте y в направлении angle (0 — вперёд, ±π — назад)
function surfaceRadius(kind, y, angle, centerZ) {
  const rest = restOf(kind);
  let best = 0;
  for (const source of PARTS.tights.source) {
    if (boneWeight(source, UPPER_ARM) + boneWeight(source, LOWER_ARM) > 0.3 || boneWeight(source, HEAD) > 0.3) continue;
    const point = rest.point(source);
    if (Math.abs(point.y - y) > 0.012) continue;
    const delta = Math.atan2(point.x, point.z - centerZ) - angle;
    if (Math.abs(Math.atan2(Math.sin(delta), Math.cos(delta))) > 0.16) continue;
    best = Math.max(best, Math.hypot(point.x, point.z - centerZ));
  }
  return best || 0.06;
}

// options: kind, look (civilian.js), female, garments: [{ region: 'top'|..., offset, material }], hideHair, hairStyle
// pose: { pelvis, pelvisQuat, torsoQuat, headQuat, hands: [правая, левая] (центр кисти), elbowPoles, feet (лодыжки), kneePole,
//         footQuats, handsOnHead (кисти на затылке — считаются от головы) }
export function buildHumanBody(options, pose) {
  const { kind, look } = options;
  const rest = restOf(kind);
  const group = new THREE.Group();
  // скелет: кости с единичным поворотом в покое, начало — голова кости
  const bones = BONES.map((bone) => { const object = new THREE.Bone(); object.name = bone.name; return object; });
  BONES.forEach((bone, index) => {
    const head = rest.joints[bone.name][0];
    if (bone.parent) { bones[BONE[bone.parent]].add(bones[index]); bones[index].position.copy(head).sub(rest.joints[bone.parent][0]); }
    else bones[index].position.copy(head);
  });
  // обратные матрицы покоя: кость в покое — без поворота, в точке своей головы
  const skeleton = new THREE.Skeleton(bones, BONES.map((bone) => new THREE.Matrix4().makeTranslation(rest.joints[bone.name][0].clone().negate())));
  const root = bones[BONE.Root];

  // ---- поза ----
  const worldQuat = (name) => bones[BONE[name]].getWorldQuaternion(new THREE.Quaternion());
  const worldPos = (name) => bones[BONE[name]].getWorldPosition(new THREE.Vector3());
  const setWorld = (name, quaternion) => {
    const bone = bones[BONE[name]];
    bone.parent.updateWorldMatrix(true, false);
    const parentQuat = bone.parent.getWorldQuaternion(new THREE.Quaternion());
    bone.quaternion.copy(parentQuat.invert().multiply(quaternion));
    bone.updateMatrixWorld(true);
  };
  const restDir = (name) => rest.joints[name][1].clone().sub(rest.joints[name][0]).normalize();
  // кость направить к точке; поворот вокруг оси — от basis (поворот родителя по цепи)
  const aim = (name, target, basis) => {
    const from = restDir(name).applyQuaternion(basis);
    const to = target.clone().sub(worldPos(name)).normalize();
    const quaternion = new THREE.Quaternion().setFromUnitVectors(from, to).multiply(basis);
    setWorld(name, quaternion);
    return quaternion;
  };
  root.position.copy(pose.pelvis).sub(rest.joints.pelvis[0]).add(rest.joints.Root[0]);
  root.updateMatrixWorld(true);
  setWorld('pelvis', pose.pelvisQuat);
  setWorld('spine_01', pose.pelvisQuat.clone().slerp(pose.torsoQuat, 0.4));
  setWorld('spine_02', pose.pelvisQuat.clone().slerp(pose.torsoQuat, 0.75));
  setWorld('spine_03', pose.torsoQuat);
  for (const side of ['l', 'r']) setWorld('clavicle_' + side, pose.torsoQuat);
  setWorld('neck_01', pose.torsoQuat.clone().slerp(pose.headQuat, 0.55));
  setWorld('head', pose.headQuat);
  // центр головы в позе
  const headMatrix = bones[BONE.head].matrixWorld;
  const headCenter = rest.frame.headCenter.clone().sub(rest.joints.head[0]).applyMatrix4(new THREE.Matrix4().makeRotationFromQuaternion(pose.headQuat)).add(worldPos('head'));
  const headLocal = (x, y, z) => V(x, y, z).applyQuaternion(pose.headQuat).add(headCenter);

  // руки: сторона 0 — правая (−x), 1 — левая (+x), как у прежней модели
  const joints = { pelvis: pose.pelvis.clone(), head: headCenter.clone(), shoulders: [], elbows: [], hands: [], wrists: [], hips: [], knees: [], ankles: [] };
  ['r', 'l'].forEach((side, number) => {
    const upper = 'upperarm_' + side, lower = 'lowerarm_' + side, hand = 'hand_' + side;
    const shoulder = worldPos(upper);
    const upperLength = rest.joints[upper][0].distanceTo(rest.joints[lower][0]);
    const lowerLength = rest.joints[lower][0].distanceTo(rest.joints[hand][0]);
    const handTarget = pose.handsOnHead ? headLocal(number ? 0.07 : -0.07, 0.06, -0.09) : pose.hands[number].clone();
    // запястье — немного выше центра кисти, к плечу
    const toShoulder = shoulder.clone().sub(handTarget).normalize();
    const wristTarget = handTarget.clone().addScaledVector(toShoulder, 0.075);
    const elbow = solveTwoBone(shoulder, wristTarget, upperLength, lowerLength, pose.elbowPoles[number]);
    const upperQuat = aim(upper, elbow, pose.torsoQuat);
    const lowerQuat = aim(lower, wristTarget, upperQuat);
    const wrist = worldPos(hand);
    // кисть: продолжает предплечье; ладонь к бедру; при руках на затылке — к голове
    const handQuat = aim(hand, wrist.clone().add(wrist.clone().sub(worldPos(lower)).normalize()), lowerQuat);
    // пальцы чуть согнуты (расслабленная кисть)
    const across = rest.joints['pinky_01_' + side][0].clone().sub(rest.joints['index_01_' + side][0]).normalize();
    for (const finger of ['index', 'middle', 'ring', 'pinky']) {
      for (const [segment, angle] of [['01', 0.25], ['02', 0.45], ['03', 0.35]]) {
        const name = `${finger}_${segment}_${side}`;
        const bone = bones[BONE[name]];
        const axis = across.clone().multiplyScalar(side === 'l' ? 1 : -1);
        bone.quaternion.setFromAxisAngle(axis, angle * (pose.grip ? 2.1 : pose.handsOnHead ? 1.6 : 1));
      }
    }
    for (const [segment, angle] of [['02', 0.2], ['03', 0.25]]) bones[BONE[`thumb_${segment}_${side}`]].quaternion.setFromAxisAngle(across, angle * (side === 'l' ? 1 : -1));
    bones[BONE[hand]].updateMatrixWorld(true);
    joints.shoulders[number] = shoulder; joints.elbows[number] = elbow.clone(); joints.wrists[number] = wrist.clone();
    joints.hands[number] = wrist.clone().add(wrist.clone().sub(worldPos(lower)).normalize().multiplyScalar(0.07));
    void handQuat;
  });
  // ноги
  ['r', 'l'].forEach((side, number) => {
    const thigh = 'thigh_' + side, calf = 'calf_' + side, foot = 'foot_' + side;
    const hip = worldPos(thigh);
    const thighLength = rest.joints[thigh][0].distanceTo(rest.joints[calf][0]);
    const calfLength = rest.joints[calf][0].distanceTo(rest.joints[foot][0]);
    const ankle = pose.feet[number].clone();
    const knee = solveTwoBone(hip, ankle, thighLength, calfLength, pose.kneePole[number]);
    const thighQuat = aim(thigh, knee, pose.pelvisQuat);
    aim(calf, ankle, thighQuat);
    setWorld(foot, pose.footQuats[number]);
    setWorld('ball_' + side, pose.footQuats[number]);
    joints.hips[number] = hip; joints.knees[number] = knee.clone(); joints.ankles[number] = worldPos(foot);
  });
  root.updateMatrixWorld(true);

  // ---- сетки ----
  const addSkinned = (geometry, material, name) => {
    const mesh = new THREE.SkinnedMesh(geometry, material);
    mesh.name = name;
    mesh.castShadow = mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    group.add(mesh);
    return mesh;
  };
  const restPoint = (part) => (index) => rest.point(part.source[index]);
  const garments = options.garments || [];
  // тело: без участков, закрытых плотной одеждой, и без стоп (обувь)
  const covered = garments.filter((garment) => !garment.thin && garment.region).map((garment) => REGIONS[garment.region](rest.frame));
  const bodyPart = PARTS.body;
  const body = partGeometry(bodyPart, restPoint(bodyPart), {
    keep: (index) => {
      const source = bodyPart.source[index];
      if (boneWeight(source, FOOT) > 0.45 && !options.bareFeet) return false;
      const point = rest.point(source);
      // тело под одеждой скрыто, но у краёв (шея, запястья, низ брюк) остаётся с запасом — без щелей у кромки
      if (boneWeight(source, NECK) > 0.15 || boneWeight(source, HEAD) > 0 || boneWeight(source, HAND) > 0.05) return true;
      return !covered.some((region) => COVER_PROBES.every((probe) => region(source, point.clone().add(probe))));
    },
  });
  const bodyMesh = addSkinned(body, skinMaterial(kind), 'body');
  // глаза и ресницы
  const eyes = PARTS.eyes;
  const eyeGeometry = partGeometry(eyes, (index) => V(rest.data.eyeRest[index * 3], rest.data.eyeRest[index * 3 + 1], rest.data.eyeRest[index * 3 + 2]).multiplyScalar(rest.scale), { skin: false });
  const eyeCount = eyes.source.length;
  const eyeSkinIndex = new Uint16Array(eyeCount * 4).fill(0), eyeSkinWeight = new Float32Array(eyeCount * 4).fill(0);
  for (let index = 0; index < eyeCount; index++) { eyeSkinIndex[index * 4] = BONE.head; eyeSkinWeight[index * 4] = 1; }
  eyeGeometry.setAttribute('skinIndex', new THREE.BufferAttribute(eyeSkinIndex, 4));
  eyeGeometry.setAttribute('skinWeight', new THREE.BufferAttribute(eyeSkinWeight, 4));
  addSkinned(eyeGeometry, eyeMaterial(), 'eyes');
  addSkinned(partGeometry(PARTS.lashes, restPoint(PARTS.lashes)), lashMaterial(), 'lashes');

  // одежда: слои по порядку, каждый над предыдущим
  const frame0 = rest.frame;
  const bag = options.baggy || {};
  for (const garment of garments) {
    const part = garment.part === 'skirt' ? PARTS.skirt : PARTS.tights;
    const region = garment.part === 'skirt' ? () => true : REGIONS[garment.region](rest.frame);
    const inside = (index) => {
      const source = part.source[index];
      if (garment.part === 'skirt' && garment.open) {
        // распашные полы (халат): разрез спереди
        const point = rest.point(source);
        if (Math.abs(point.x) < 0.035 && point.z > 0) return 0;
      }
      // застёгнутый халат: подол ровно по высоте и шлица спереди внизу — доля линейна по координате,
      // изолиния 0,5 проходит точно по линии кроя (сетка пол крупная)
      if (garment.part === 'skirt' && garment.slit) {
        const point = rest.point(source), clamp = (value) => Math.min(1, Math.max(0, value));
        const hem = 0.5 + (point.y - (frame0.joints.calf_l[0].y + 0.02)) * 7;
        const slit = point.z > 0 ? Math.max(0.5 + (Math.abs(point.x) - (garment.slitWidth ?? 0.006)) * 12, 0.5 + (point.y - garment.slit) * 7)
          // шлица сзади до середины пол
          : garment.vent ? Math.max(0.5 + (Math.abs(point.x) - 0.005) * 12, 0.5 + (point.y - garment.vent) * 7) : 1;
        return clamp(Math.min(hem, slit));
      }
      // полы до колена (халат): ниже колена отрезаны
      if (garment.part === 'skirt' && garment.toKnee && rest.point(source).y < frame0.joints.calf_l[0].y + 0.02) return 0;
      const inside = region(source, rest.point(source));
      return typeof inside === 'number' ? inside : inside ? 1 : 0;
    };
    // кромка по изолинии сглаженной маски
    const mask = softMask(part, restPoint(part), inside, garment.maskSmooth ?? (garment.slit ? 0 : garment.part === 'skirt' ? 1 : 2));
    const looseness = garment.loose ?? 0.006;
    // вырез у шеи прилегает к коже: иначе в зазор между тканью и телом видно тёмную щель
    const tuck = garment.offset <= 0.012;
    const offsetOf = (index) => {
      const point = rest.point(part.source[index]);
      let offset = garment.offset + looseness * smooth(frame0.waist - 0.1, frame0.joints.foot_l[0].y + 0.1, point.y);
      if (tuck && point.y > frame0.shoulderY - 0.06) offset *= 0.2 + 0.8 * smooth(0.5, 0.97, mask[index]);
      // подол куртки отходит от брюк — видна кромка
      if (garment.flare) offset += garment.flare * smooth(frame0.waist + 0.02, frame0.waist - 0.11, point.y);
      return offset + (garment.part === 'skirt' && bag.legs ? 0.012 * bag.legs : 0);
    };
    const baggy = bag.torso || bag.legs || bag.arms;
    if (part === PARTS.tights) {
      // слой над общей основой: точка основы + нормаль × отступ + свободный крой
      const base = clothBase(kind, garment.relax ?? 12);
      const geometry = partGeometry(part, (index) => {
        const offset = offsetOf(index);
        const point = V(base.position[index * 3] + base.normal[index * 3] * offset, base.position[index * 3 + 1] + base.normal[index * 3 + 1] * offset, base.position[index * 3 + 2] + base.normal[index * 3 + 2] * offset);
        // у выреза — к несглаженной коже (сглаженная основа во впадине у шеи отходит от тела, видна щель)
        const raw = rest.point(part.source[index]);
        if (tuck && raw.y > frame0.shoulderY - 0.06) {
          const edge = smooth(0.5, 0.97, mask[index]);
          point.lerp(raw.addScaledVector(V(base.normal[index * 3], base.normal[index * 3 + 1], base.normal[index * 3 + 2]), offset), 1 - edge);
        }
        if (baggy) point.add(bagDisplace(kind, rest.point(part.source[index]), part.source[index], bag));
        return garment.trapezoid ? trapezoidPush(kind, point, part.source[index], garment.trapezoid) : point;
      }, { uvMode: 'none', keepAny: true, keep: (index) => mask[index] > 0.5 });
      applyMask(geometry, mask);
      let layered = geometry;
      if (garment.folds) { tagRest(geometry, part, rest); layered = addFolds(geometry, kind, garment.folds); }
      else smoothNormals(layered);
      if (garment.flat) { blurNormals(layered, garment.flat, !!garment.folds); hangingNormals(layered, kind); }
      if (garment.backFolds) backFoldNormals(layered, kind, garment.backFolds);
      boxUV(layered, garment.density || 2.4);
      addSkinned(layered, maskedMaterial(garment.material), 'garment');
      continue;
    }
    const geometry = partGeometry(part, restPoint(part), { uvMode: 'none', keepAny: true, keep: (index) => mask[index] > 0.5 });
    applyMask(geometry, mask);
    if (garment.relax !== 0) relax(geometry, garment.relax || 5);
    smoothNormals(geometry);
    // полы халата: отступ по нормали и свободный крой только корпуса
    inflate(geometry, offsetOf);
    if (baggy) {
      const position = geometry.attributes.position, skirtBag = { torso: bag.torso };
      for (let index = 0; index < position.count; index++) {
        const source = part.source[index];
        const shift = bagDisplace(kind, rest.point(source), source, skirtBag);
        position.setXYZ(index, position.getX(index) + shift.x, position.getY(index) + shift.y, position.getZ(index) + shift.z);
      }
      geometry.computeVertexNormals();
    }
    // полы висят от бёдер: не уже профиля бёдер, книзу чуть расходятся (не облегают ноги)
    if (garment.hang) {
      const shape = bagFrame(kind), position = geometry.attributes.position;
      for (let index = 0; index < position.count; index++) {
        const x = position.getX(index), y = position.getY(index), z = position.getZ(index);
        const dz = z - shape.hipZ, radius = Math.hypot(x, dz);
        if (radius < 1e-4) continue;
        const angle = Math.atan2(x, dz);
        const target = shape.hipProfileAt(angle) + garment.offset + 0.012 + garment.hang * Math.max(0, shape.hipTop - y);
        const blend = smooth(frame0.waist, shape.hipTop - 0.04, y);
        if (radius < target) {
          const scale = (radius + (target - radius) * blend) / radius;
          position.setX(index, x * scale); position.setZ(index, shape.hipZ + dz * scale);
        }
      }
      geometry.computeVertexNormals();
    }
    if (garment.trapezoid) {
      const position = geometry.attributes.position;
      for (let index = 0; index < position.count; index++) {
        const pushed = trapezoidPush(kind, V(position.getX(index), position.getY(index), position.getZ(index)), null, garment.trapezoid);
        position.setXYZ(index, pushed.x, pushed.y, pushed.z);
      }
      geometry.computeVertexNormals();
    }
    let layered = geometry;
    if (garment.folds) { tagRest(geometry, part, rest); layered = addFolds(geometry, kind, garment.folds); }
    // складки спины — только освещение: нужна мелкая сетка, иначе нормали размываются по крупным треугольникам
    else if (garment.backFolds) { layered = subdivide(subdivide(geometry)); layered.computeVertexNormals(); smoothNormals(layered); }
    if (garment.flat) { blurNormals(layered, garment.flat); hangingNormals(layered, kind); }
    if (garment.backFolds) backFoldNormals(layered, kind, garment.backFolds);
    boxUV(layered, garment.density || 2.4);
    addSkinned(layered, maskedMaterial(garment.material), 'garment');
  }

  // волосы: кожа головы, приподнятая там, где растут волосы; под капюшоном и шапочкой — нет
  const style = options.hairStyle || 'short';
  if (!options.hideHair && style !== 'bald') {
    const frame = rest.frame;
    const relative = (point) => point.clone().sub(frame.eyeCenter).divideScalar(frame.eyeDistance);
    const long = style === 'long';
    const thickness = long ? 0.013 : 0.007;
    // длинные волосы спадают на шею и верх спины: полотно над одеждой (ниже затылка — выше слоя одежды)
    const coverage = (index) => hairCoverage(relative(rest.point(bodyPart.source[index])), style);
    // линия роста — изолиния сглаженной маски (alphaTest), без зубцов по треугольникам
    // волосы — только выше основания шеи: ниже лежит одежда (иначе пряди проступают на плечах)
    const neckBase = frame.joints.neck_01[0].y - 0.01;
    const onHead = (index) => boneWeight(bodyPart.source[index], HEAD) + boneWeight(bodyPart.source[index], NECK) > 0.5 && rest.point(bodyPart.source[index]).y > neckBase;
    const hairMask = softMask(bodyPart, restPoint(bodyPart), (index) => onHead(index) ? Math.min(1, coverage(index) * 2.5) : 0, 2);
    const geometry = partGeometry(bodyPart, restPoint(bodyPart), { uvMode: 'none', keepAny: true, keep: (index) => onHead(index) && hairMask[index] > 0.5 });
    applyMask(geometry, hairMask);
    smoothNormals(geometry);
    inflate(geometry, (index) => {
      const point = relative(rest.point(bodyPart.source[index]));
      const lift = -0.0015 + (thickness + 0.0015) * coverage(index) + (long ? 0 : 0.004 * coverage(index) * smooth(1.4, 2.2, point.y));
      return lift;
    });
    // UV волос: вокруг головы и сверху вниз (пряди вдоль v)
    const position = geometry.attributes.position, uv = new Float32Array(position.count * 2);
    for (let index = 0; index < position.count; index++) {
      const x = position.getX(index) - frame.headCenter.x, y = position.getY(index) - frame.headCenter.y, z = position.getZ(index) - frame.headCenter.z;
      uv[index * 2] = (Math.atan2(x, z) / (Math.PI * 2) + 0.5) * 3;
      uv[index * 2 + 1] = y * 4 + Math.sqrt(x * x + z * z) * 2;
    }
    geometry.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    addSkinned(geometry, maskedMaterial(hairMaterial(look.hairColor || rest.data.hair)), 'hair');
  }
  // привязать все сетки к скелету (покой — единичная матрица группы)
  group.add(root);
  group.updateMatrixWorld(true);
  for (const mesh of group.children) if (mesh.isSkinnedMesh) mesh.bind(skeleton, new THREE.Matrix4());
  // поза выставлена до привязки: перевычислить кости
  skeleton.update();

  // точка в рамке корпуса (как local() у прежней модели) по высоте над тазом покоя, с учётом поверхности спереди
  const spineMatrix = bones[BONE.spine_03].matrixWorld, pelvisMatrix = bones[BONE.pelvis].matrixWorld;
  const restSpine = rest.joints.spine_03[0], restPelvis = rest.joints.pelvis[0];
  const torsoPoint = (x, y, z) => V(x, y, z).sub(restSpine).applyMatrix4(spineMatrix);
  const hipPoint = (x, y, z) => V(x, y, z).sub(restPelvis).applyMatrix4(pelvisMatrix);
  // поверхность спереди с учётом свободного кроя (для пуговиц, галстука, лацканов)
  const garmentFront = (x, y, spread) => {
    const z = frontOf(kind, x, y, spread);
    const shifted = z + bagDisplace(kind, V(x, y, z), null, bag).z;
    // халат-трапеция: перед — по его поверхности (слой на 1,7 см над телом)
    if (options.trapezoid) return trapezoidPush(kind, V(x, y, shifted + 0.017), null, options.trapezoid).z - 0.017;
    return shifted;
  };
  // воротник и лацканы — в покое, с весами костей ближайшей вершины одежды: гнутся вместе с шеей и плечами
  const tightsPoints = Array.from(PARTS.tights.source, (source) => [rest.point(source), source]);
  const posedMesh = (positions, indices, material) => {
    const geometry = new THREE.BufferGeometry();
    const count = positions.length / 3;
    const skinIndex = new Uint16Array(count * 4), skinWeight = new Float32Array(count * 4);
    for (let index = 0; index < count; index++) {
      const point = V(positions[index * 3], positions[index * 3 + 1], positions[index * 3 + 2]);
      let best = null, bestDistance = Infinity;
      for (const [candidate, source] of tightsPoints) { const distance = candidate.distanceToSquared(point); if (distance < bestDistance) { bestDistance = distance; best = source; } }
      for (let slot = 0; slot < 4; slot++) { skinIndex[index * 4 + slot] = SKIN_INDEX[best * 4 + slot]; skinWeight[index * 4 + slot] = SKIN_WEIGHT[best * 4 + slot]; }
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
    geometry.setAttribute('skinIndex', new THREE.BufferAttribute(skinIndex, 4));
    geometry.setAttribute('skinWeight', new THREE.BufferAttribute(skinWeight, 4));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    boxUV(geometry, 2.4);
    const mesh = new THREE.SkinnedMesh(geometry, doubleSided(material));
    mesh.castShadow = mesh.receiveShadow = true;
    mesh.frustumCulled = false;
    mesh.bind(skeleton, new THREE.Matrix4());
    return mesh;
  };
  // сетка-полоса: rows рядов по columns точек, точки — функция (ряд, столбец) → [x, y, z] в покое
  const strip = (rows, columns, pointAt, material) => {
    const positions = [], indices = [];
    for (let row = 0; row < rows; row++) for (let column = 0; column < columns; column++) positions.push(...pointAt(row, column));
    for (let row = 0; row < rows - 1; row++) for (let column = 0; column < columns - 1; column++) {
      const corner = row * columns + column;
      indices.push(corner, corner + columns, corner + 1, corner + 1, corner + columns, corner + columns + 1);
    }
    return posedMesh(positions, indices, material);
  };
  const neck = rest.joints.neck_01[0];
  // воротник: стойка по вырезу и отложной край, лежащий на плечах; gap — половина разреза спереди (рад), offset — слой одежды
  const collar = ({ material, gap = 0.12, offset = 0.009, stand = 0.03, fall = 0.045, tips = 0.03, lower = 0, spread = 0.04 }) => {
    const centerZ = neck.z - 0.005, columns = 41;
    const radiusCache = new Map();
    const radiusAt = (y, angle) => {
      const key = Math.round(y * 500) + ',' + Math.round(angle * 40);
      if (!radiusCache.has(key)) radiusCache.set(key, surfaceRadius(kind, y, angle, centerZ));
      return radiusCache.get(key);
    };
    const columnAngle = (column) => { const phi = gap + (Math.PI * 2 - gap * 2) * column / (columns - 1); return phi > Math.PI ? phi - Math.PI * 2 : phi; };
    const base = (angle) => { const frontness = (1 + Math.cos(angle)) / 2; return neck.y + 0.013 - 0.055 * frontness ** 1.5 - lower; };
    const at = (angle, y, radius) => [Math.sin(angle) * radius, y, centerZ + Math.cos(angle) * radius];
    // радиусы по столбцам сглаживаются вдоль воротника: поверхность тела неровная, ткань — нет
    const smoothRow = (values) => {
      let row = values.slice();
      for (let pass = 0; pass < 4; pass++) row = row.map((value, column) => (row[Math.max(0, column - 1)] + value * 2 + row[Math.min(columns - 1, column + 1)]) / 4);
      return row;
    };
    const angles = [], standBottom = [], standTop = [], fallBottom = [], heights = [];
    for (let column = 0; column < columns; column++) {
      const angle = columnAngle(column), frontness = (1 + Math.cos(angle)) / 2;
      const nearGap = Math.max(0, 1 - Math.min(Math.abs(angle - gap), Math.abs(angle + gap)) / 0.4);
      const low = base(angle) - 0.004, top = base(angle) + stand * (1 - 0.3 * frontness);
      const bottom = top - fall - 0.012 * frontness - tips * nearGap ** 1.5;
      angles.push(angle); heights.push([low, top, bottom]);
      // стойка облегает шею: не шире шеи на уровне сустава (иначе по бокам уходит на трапецию)
      const neckRadius = radiusAt(neck.y + 0.005, angle);
      standBottom.push(Math.min(radiusAt(low, angle), neckRadius + 0.012)); standTop.push(Math.min(radiusAt(top, angle), neckRadius + 0.006)); fallBottom.push(radiusAt(bottom, angle));
    }
    const radiusLow = smoothRow(standBottom), radiusTop = smoothRow(standTop), radiusFall = smoothRow(fallBottom);
    const meshes = [];
    // стойка
    meshes.push(strip(2, columns, (row, column) => {
      const [low, top] = heights[column];
      return row ? at(angles[column], top, Math.max(radiusTop[column], radiusLow[column] - 0.004) + offset + 0.005) : at(angles[column], low, radiusLow[column] + offset + 0.003);
    }, material));
    // отложной край: от верха стойки вниз и наружу, не дальше 3 см от стойки; у разреза — уголки
    if (fall) meshes.push(strip(3, columns, (row, column) => {
      const [, top, bottom] = heights[column];
      const topRadius = Math.max(radiusTop[column], radiusLow[column] - 0.004) + offset + 0.009;
      if (row === 0) return at(angles[column], top + 0.003, topRadius);
      const bottomRadius = Math.min(topRadius + spread, Math.max(topRadius + Math.min(0.01, spread), radiusFall[column] + offset + 0.005));
      if (row === 1) return at(angles[column], (top * 0.55 + bottom * 0.45), Math.max(topRadius + 0.006, (topRadius + bottomRadius) / 2 + 0.003));
      return at(angles[column], bottom, bottomRadius);
    }, material));
    const group = new THREE.Group();
    meshes.forEach((mesh) => group.add(mesh));
    return group;
  };
  // лацканы: две полосы по краям V-образного выреза от шеи до точки застёжки; под ними — вставка (рубашка) по выбору
  const lapels = ({ material, shirt = null, top, bottom, width = 0.07, lift = 0.012, apart = 0.035 }) => {
    const group = new THREE.Group();
    const surface = (x, y, extra) => [x, y, garmentFront(x, y, 0.02) + lift + extra];
    for (const side of [-1, 1]) {
      group.add(strip(9, 4, (row, column) => {
        const along = row / 8, across = column / 3;
        const x = side * (apart * (1 - along) + 0.004 * along + width * (1 - along) ** 0.8 * across);
        const y = top + (bottom - top) * along - 0.012 * across * (1 - along);
        return surface(x, y, 0.005 * Math.sin(across * Math.PI) + 0.006 + 0.003 * across);
      }, material));
    }
    if (shirt) group.add(strip(9, 5, (row, column) => {
      const along = row / 8, across = column / 4 * 2 - 1;
      const half = apart * (1 - along) + 0.004 * along + 0.006;
      return surface(across * half, top + 0.012 + (bottom - top - 0.012) * along, 0.002);
    }, shirt));
    return group;
  };
  // точка на передней поверхности пол (застёгнутый халат) на высоте y: по профилю бёдер и расширению книзу, в позе — с тазом
  const skirtGarment = garments.find((garment) => garment.part === 'skirt');
  const skirtPoint = (x, y, lift = 0) => {
    const shape = bagFrame(kind);
    const hang = skirtGarment ? skirtGarment.hang || 0 : 0, offset = skirtGarment ? skirtGarment.offset : 0.02;
    const z = shape.hipZ + shape.hipProfileAt(0) + offset + 0.012 + hang * Math.max(0, shape.hipTop - y) + lift;
    let surface = Math.max(z - lift, frontOf(kind, x, y) + offset);
    if (options.trapezoid) surface = trapezoidPush(kind, V(x, y, surface), null, options.trapezoid).z;
    return hipPoint(x, y, surface + lift);
  };
  return { group, skeleton, bones, joints, headCenter, headLocal, torsoPoint, hipPoint, rest, bodyMesh, front: garmentFront, headMatrix, collar, lapels, skirtPoint };
}
