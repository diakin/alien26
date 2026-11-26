// Пришелец-рептилия. Тело — одна сплошная поверхность: мышцы и кости заданы примитивами
// (конусы со скруглёнными концами и эллипсоиды), объединены со сглаживанием (поле расстояний),
// поверхность извлекается сеткой Surface Nets. Суставы получаются плавными, без шаров.
// Чешуя — рельеф в шейдере (ячейки Вороного в координатах кости, поэтому не «плывёт» при ходьбе).
import { buildPlasmaPistol, buildPlasmaRifle } from './weapons.js';
export { buildPlasmaPistol };
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { solveTwoBone, setShadows } from './lib.js';
import { ALIEN_POSES, alienWalkCycle } from './alien2.js';

export { ALIEN_POSES, alienWalkCycle };

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const VOXEL = 0.0065;

// ---------- кости: точка начала и ориентация; координаты чешуи считаются в системе кости ----------
class Bone {
  constructor(origin, quaternion, seed) {
    this.origin = origin.clone();
    this.quaternion = quaternion.clone();
    this.inverse = quaternion.clone().invert();
    this.seed = seed;
  }
  point(x, y, z) { return V(x, y, z).applyQuaternion(this.quaternion).add(this.origin); }
  direction(x, y, z) { return V(x, y, z).applyQuaternion(this.quaternion); }
}

// кость от from к to: локальная ось y вдоль кости, z — по возможности вперёд
function limbBone(from, to, forwardHint, seed) {
  const axisY = new THREE.Vector3().subVectors(to, from);
  const length = axisY.length();
  axisY.normalize();
  const axisX = new THREE.Vector3().crossVectors(axisY, forwardHint);
  if (axisX.lengthSq() < 1e-8) axisX.set(1, 0, 0);
  axisX.normalize();
  const axisZ = new THREE.Vector3().crossVectors(axisX, axisY);
  const quaternion = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(axisX, axisY, axisZ));
  const bone = new Bone(from, quaternion, seed);
  bone.length = length;
  return bone;
}

const smoothMin = (first, second, blend) => {
  const mix = Math.max(blend - Math.abs(first - second), 0) / blend;
  return Math.min(first, second) - mix * mix * blend * 0.25;
};
const smoothMax = (first, second, blend) => {
  const mix = Math.max(blend - Math.abs(first - second), 0) / blend;
  return Math.max(first, second) + mix * mix * blend * 0.25;
};

// ---------- поле расстояний ----------
class Field {
  constructor() { this.items = []; }

  push(item, bone, options) {
    item.bone = bone;
    item.blend = options.k ?? 0.04;
    item.cell = options.cell ?? 0.03;
    item.pattern = options.pattern ?? [1, 1, 1];
    item.carve = !!options.carve;
    this.items.push(item);
    return item;
  }

  cone(bone, from, to, radiusFrom, radiusTo, options = {}) {
    const reach = Math.max(radiusFrom, radiusTo) + (options.k ?? 0.04);
    const axis = new THREE.Vector3().subVectors(to, from);
    return this.push({
      kind: 0, ax: from.x, ay: from.y, az: from.z, bx: axis.x, by: axis.y, bz: axis.z,
      length2: Math.max(axis.lengthSq(), 1e-9), radiusFrom, radiusTo,
      min: [Math.min(from.x, to.x) - reach, Math.min(from.y, to.y) - reach, Math.min(from.z, to.z) - reach],
      max: [Math.max(from.x, to.x) + reach, Math.max(from.y, to.y) + reach, Math.max(from.z, to.z) + reach],
    }, bone, options);
  }

  // центр в координатах кости, поворот — углы Эйлера в системе кости
  ellipsoid(bone, center, radii, euler, options = {}) {
    const worldCenter = bone.point(...center);
    const rotation = bone.quaternion.clone().multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(...(euler || [0, 0, 0]))));
    const elements = new THREE.Matrix4().makeRotationFromQuaternion(rotation.invert()).elements;
    const reach = Math.max(...radii) + (options.k ?? 0.04);
    return this.push({
      kind: 1, cx: worldCenter.x, cy: worldCenter.y, cz: worldCenter.z,
      m: [elements[0], elements[4], elements[8], elements[1], elements[5], elements[9], elements[2], elements[6], elements[10]],
      rx: radii[0], ry: radii[1], rz: radii[2],
      min: [worldCenter.x - reach, worldCenter.y - reach, worldCenter.z - reach],
      max: [worldCenter.x + reach, worldCenter.y + reach, worldCenter.z + reach],
    }, bone, options);
  }

  distance(item, px, py, pz) {
    if (item.kind === 0) {
      const dx = px - item.ax, dy = py - item.ay, dz = pz - item.az;
      let along = (dx * item.bx + dy * item.by + dz * item.bz) / item.length2;
      along = along < 0 ? 0 : along > 1 ? 1 : along;
      const ex = dx - item.bx * along, ey = dy - item.by * along, ez = dz - item.bz * along;
      return Math.sqrt(ex * ex + ey * ey + ez * ez) - (item.radiusFrom + (item.radiusTo - item.radiusFrom) * along);
    }
    const dx = px - item.cx, dy = py - item.cy, dz = pz - item.cz, matrix = item.m;
    const qx = (matrix[0] * dx + matrix[1] * dy + matrix[2] * dz) / item.rx;
    const qy = (matrix[3] * dx + matrix[4] * dy + matrix[5] * dz) / item.ry;
    const qz = (matrix[6] * dx + matrix[7] * dy + matrix[8] * dz) / item.rz;
    const scaled = Math.sqrt(qx * qx + qy * qy + qz * qz);
    const scaled2 = Math.sqrt((qx / item.rx) ** 2 + (qy / item.ry) ** 2 + (qz / item.rz) ** 2);
    return scaled2 > 1e-9 ? scaled * (scaled - 1) / scaled2 : -Math.min(item.rx, item.ry, item.rz);
  }

  evaluate(point) {
    let value = 1;
    for (const item of this.items) if (!item.carve) value = smoothMin(value, this.distance(item, point.x, point.y, point.z), item.blend);
    for (const item of this.items) if (item.carve) value = smoothMax(value, -this.distance(item, point.x, point.y, point.z), item.blend);
    return value;
  }

  // от точки внутри тела идём наружу до поверхности
  surfacePoint(inside, direction) {
    const step = direction.clone().normalize().multiplyScalar(0.0025);
    const point = inside.clone();
    for (let count = 0; count < 400 && this.evaluate(point) < 0; count++) point.add(step);
    return point;
  }
}

// ---------- сетка значений и Surface Nets ----------
function buildGrid(field) {
  const additions = field.items.filter((item) => !item.carve);
  const carvings = field.items.filter((item) => item.carve);
  const low = [Infinity, Infinity, Infinity], high = [-Infinity, -Infinity, -Infinity];
  for (const item of additions) for (let axis = 0; axis < 3; axis++) { low[axis] = Math.min(low[axis], item.min[axis]); high[axis] = Math.max(high[axis], item.max[axis]); }
  for (let axis = 0; axis < 3; axis++) { low[axis] -= VOXEL * 2; high[axis] += VOXEL * 2; }
  const sizeX = Math.ceil((high[0] - low[0]) / VOXEL) + 1;
  const sizeY = Math.ceil((high[1] - low[1]) / VOXEL) + 1;
  const sizeZ = Math.ceil((high[2] - low[2]) / VOXEL) + 1;
  const values = new Float32Array(sizeX * sizeY * sizeZ).fill(1);
  for (const item of [...additions, ...carvings]) {
    const fromX = Math.max(0, Math.floor((item.min[0] - low[0]) / VOXEL)), toX = Math.min(sizeX - 1, Math.ceil((item.max[0] - low[0]) / VOXEL));
    const fromY = Math.max(0, Math.floor((item.min[1] - low[1]) / VOXEL)), toY = Math.min(sizeY - 1, Math.ceil((item.max[1] - low[1]) / VOXEL));
    const fromZ = Math.max(0, Math.floor((item.min[2] - low[2]) / VOXEL)), toZ = Math.min(sizeZ - 1, Math.ceil((item.max[2] - low[2]) / VOXEL));
    for (let gz = fromZ; gz <= toZ; gz++) {
      const pz = low[2] + gz * VOXEL;
      for (let gy = fromY; gy <= toY; gy++) {
        const py = low[1] + gy * VOXEL;
        let index = fromX + sizeX * (gy + sizeY * gz);
        for (let gx = fromX; gx <= toX; gx++, index++) {
          const distance = field.distance(item, low[0] + gx * VOXEL, py, pz);
          values[index] = item.carve ? smoothMax(values[index], -distance, item.blend) : smoothMin(values[index], distance, item.blend);
        }
      }
    }
  }
  return { values, sizeX, sizeY, sizeZ, low };
}

function sampleGrid(grid, px, py, pz) {
  const { values, sizeX, sizeY, sizeZ, low } = grid;
  const gx = Math.min(Math.max((px - low[0]) / VOXEL, 0), sizeX - 1.001);
  const gy = Math.min(Math.max((py - low[1]) / VOXEL, 0), sizeY - 1.001);
  const gz = Math.min(Math.max((pz - low[2]) / VOXEL, 0), sizeZ - 1.001);
  const ix = Math.floor(gx), iy = Math.floor(gy), iz = Math.floor(gz);
  const fx = gx - ix, fy = gy - iy, fz = gz - iz;
  const at = (ox, oy, oz) => values[(ix + ox) + sizeX * ((iy + oy) + sizeY * (iz + oz))];
  const lerp = (first, second, amount) => first + (second - first) * amount;
  return lerp(
    lerp(lerp(at(0, 0, 0), at(1, 0, 0), fx), lerp(at(0, 1, 0), at(1, 1, 0), fx), fy),
    lerp(lerp(at(0, 0, 1), at(1, 0, 1), fx), lerp(at(0, 1, 1), at(1, 1, 1), fx), fy), fz);
}

const CUBE_EDGES = [];
for (let corner = 0; corner < 8; corner++) for (const bit of [1, 2, 4]) if (!(corner & bit)) CUBE_EDGES.push([corner, corner | bit]);

function surfaceNets(grid) {
  const { values, sizeX, sizeY, sizeZ, low } = grid;
  const cellsX = sizeX - 1, cellsY = sizeY - 1, cellsZ = sizeZ - 1;
  const cellVertex = new Int32Array(cellsX * cellsY * cellsZ).fill(-1);
  const positions = [];
  const corner = new Float32Array(8);
  for (let gz = 0; gz < cellsZ; gz++) {
    for (let gy = 0; gy < cellsY; gy++) {
      for (let gx = 0; gx < cellsX; gx++) {
        let mask = 0;
        for (let index = 0; index < 8; index++) {
          const value = values[(gx + (index & 1)) + sizeX * ((gy + ((index >> 1) & 1)) + sizeY * (gz + ((index >> 2) & 1)))];
          corner[index] = value;
          if (value < 0) mask |= 1 << index;
        }
        if (mask === 0 || mask === 255) continue;
        let sumX = 0, sumY = 0, sumZ = 0, count = 0;
        for (const [first, second] of CUBE_EDGES) {
          const firstInside = (mask >> first) & 1, secondInside = (mask >> second) & 1;
          if (firstInside === secondInside) continue;
          const amount = corner[first] / (corner[first] - corner[second]);
          sumX += (first & 1) + ((second & 1) - (first & 1)) * amount;
          sumY += ((first >> 1) & 1) + (((second >> 1) & 1) - ((first >> 1) & 1)) * amount;
          sumZ += ((first >> 2) & 1) + (((second >> 2) & 1) - ((first >> 2) & 1)) * amount;
          count++;
        }
        cellVertex[gx + cellsX * (gy + cellsY * gz)] = positions.length / 3;
        positions.push(low[0] + (gx + sumX / count) * VOXEL, low[1] + (gy + sumY / count) * VOXEL, low[2] + (gz + sumZ / count) * VOXEL);
      }
    }
  }
  const cell = (gx, gy, gz) => cellVertex[gx + cellsX * (gy + cellsY * gz)];
  const indices = [];
  const quad = (first, second, third, fourth) => { indices.push(first, second, third, first, third, fourth); };
  for (let gz = 1; gz < cellsZ; gz++) {
    for (let gy = 1; gy < cellsY; gy++) {
      for (let gx = 1; gx < cellsX; gx++) {
        const inside = values[gx + sizeX * (gy + sizeY * gz)] < 0;
        if (inside !== (values[(gx + 1) + sizeX * (gy + sizeY * gz)] < 0)) quad(cell(gx, gy, gz), cell(gx, gy - 1, gz), cell(gx, gy - 1, gz - 1), cell(gx, gy, gz - 1));
        if (inside !== (values[gx + sizeX * ((gy + 1) + sizeY * gz)] < 0)) quad(cell(gx, gy, gz), cell(gx, gy, gz - 1), cell(gx - 1, gy, gz - 1), cell(gx - 1, gy, gz));
        if (inside !== (values[gx + sizeX * (gy + sizeY * (gz + 1))] < 0)) quad(cell(gx, gy, gz), cell(gx - 1, gy, gz), cell(gx - 1, gy - 1, gz), cell(gx, gy - 1, gz));
      }
    }
  }
  // нормали по градиенту поля; обход треугольников согласуем с нормалями
  const normals = new Float32Array(positions.length);
  const offset = VOXEL;
  for (let vertex = 0; vertex < positions.length / 3; vertex++) {
    const px = positions[vertex * 3], py = positions[vertex * 3 + 1], pz = positions[vertex * 3 + 2];
    const nx = sampleGrid(grid, px + offset, py, pz) - sampleGrid(grid, px - offset, py, pz);
    const ny = sampleGrid(grid, px, py + offset, pz) - sampleGrid(grid, px, py - offset, pz);
    const nz = sampleGrid(grid, px, py, pz + offset) - sampleGrid(grid, px, py, pz - offset);
    const length = Math.hypot(nx, ny, nz) || 1;
    normals[vertex * 3] = nx / length; normals[vertex * 3 + 1] = ny / length; normals[vertex * 3 + 2] = nz / length;
  }
  for (let triangle = 0; triangle < indices.length; triangle += 3) {
    const [first, second, third] = [indices[triangle], indices[triangle + 1], indices[triangle + 2]];
    const ax = positions[second * 3] - positions[first * 3], ay = positions[second * 3 + 1] - positions[first * 3 + 1], az = positions[second * 3 + 2] - positions[first * 3 + 2];
    const bx = positions[third * 3] - positions[first * 3], by = positions[third * 3 + 1] - positions[first * 3 + 1], bz = positions[third * 3 + 2] - positions[first * 3 + 2];
    const fx = ay * bz - az * by, fy = az * bx - ax * bz, fz = ax * by - ay * bx;
    const sx = normals[first * 3] + normals[second * 3] + normals[third * 3];
    const sy = normals[first * 3 + 1] + normals[second * 3 + 1] + normals[third * 3 + 1];
    const sz = normals[first * 3 + 2] + normals[second * 3 + 2] + normals[third * 3 + 2];
    if (fx * sx + fy * sy + fz * sz < 0) { indices[triangle + 1] = third; indices[triangle + 2] = second; }
  }
  return { positions: new Float32Array(positions), normals, indices: new Uint32Array(indices) };
}

// координаты чешуи: в системе той кости, чей примитив ближе всего; размер чешуи — среднее по её примитивам
function scaleAttributes(field, positions) {
  const count = positions.length / 3;
  const rest = new Float32Array(count * 3), cells = new Float32Array(count);
  const additions = field.items.filter((item) => !item.carve);
  const distances = new Float32Array(additions.length);
  const local = new THREE.Vector3();
  for (let vertex = 0; vertex < count; vertex++) {
    const px = positions[vertex * 3], py = positions[vertex * 3 + 1], pz = positions[vertex * 3 + 2];
    let best = 0;
    for (let index = 0; index < additions.length; index++) {
      distances[index] = field.distance(additions[index], px, py, pz);
      if (distances[index] < distances[best]) best = index;
    }
    const bone = additions[best].bone;
    let weightSum = 0, cell = 0, patternX = 0, patternY = 0, patternZ = 0;
    for (let index = 0; index < additions.length; index++) {
      if (additions[index].bone !== bone) continue;
      const weight = Math.exp(-Math.max(distances[index] - distances[best], 0) / 0.012);
      weightSum += weight;
      cell += additions[index].cell * weight;
      patternX += additions[index].pattern[0] * weight; patternY += additions[index].pattern[1] * weight; patternZ += additions[index].pattern[2] * weight;
    }
    local.set(px, py, pz).sub(bone.origin).applyQuaternion(bone.inverse).add(bone.seed);
    rest[vertex * 3] = local.x * patternX / weightSum;
    rest[vertex * 3 + 1] = local.y * patternY / weightSum;
    rest[vertex * 3 + 2] = local.z * patternZ / weightSum;
    cells[vertex] = cell / weightSum;
  }
  return { rest, cells };
}

// ---------- роговые детали: шипы, когти, зубы (конус с изгибом и цветом от основания к кончику) ----------
function hornGeometry(base, direction, bendToward, length, radius, baseColor, tipColor, bend = 0.25) {
  const geometry = new THREE.ConeGeometry(radius, length, 8, 5);
  geometry.translate(0, length / 2, 0);
  const positions = geometry.attributes.position;
  const colors = new Float32Array(positions.count * 3);
  const from = new THREE.Color(baseColor), to = new THREE.Color(tipColor), color = new THREE.Color();
  for (let index = 0; index < positions.count; index++) {
    const along = positions.getY(index) / length;
    positions.setZ(index, positions.getZ(index) + bend * length * along * along);
    color.copy(from).lerp(to, Math.pow(along, 1.6));
    colors[index * 3] = color.r; colors[index * 3 + 1] = color.g; colors[index * 3 + 2] = color.b;
  }
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const axisY = direction.clone().normalize();
  const axisX = new THREE.Vector3().crossVectors(axisY, bendToward);
  if (axisX.lengthSq() < 1e-8) axisX.set(1, 0, 0);
  axisX.normalize();
  const axisZ = new THREE.Vector3().crossVectors(axisX, axisY);
  geometry.applyMatrix4(new THREE.Matrix4().makeBasis(axisX, axisY, axisZ).setPosition(base));
  geometry.computeVertexNormals();
  return geometry;
}

const BONE_DARK = 0x1c1a16, BONE_TIP = 0xa09278, CREST_BASE = 0x7a1610, CREST_TIP = 0xffa424;

// ---------- построение формы ----------
export function buildParts(spec) {
  const field = new Field();
  const horns = [];
  const eyes = [];
  const pelvis = spec.pelvis.clone();
  const torso = new Bone(pelvis, new THREE.Quaternion().setFromEuler(new THREE.Euler(spec.lean, spec.twist, 0, 'YXZ')), V(0, 0, 0));
  const forward = torso.direction(0, 0, 1);
  const up = V(0, 1, 0);
  const body = (center, radii, euler, options) => field.ellipsoid(torso, center, radii, euler, options);

  // таз, живот, грудная клетка
  body([0, 0.03, -0.01], [0.175, 0.13, 0.13], null, { k: 0.06, cell: 0.032 });
  body([0, 0.22, 0.015], [0.15, 0.17, 0.125], null, { k: 0.07, cell: 0.032, pattern: [0.55, 1.25, 1] });
  body([0, 0.44, -0.01], [0.2, 0.2, 0.15], null, { k: 0.07, cell: 0.04 });
  for (const side of [-1, 1]) {
    body([side * 0.13, 0.4, -0.04], [0.075, 0.17, 0.09], [0, 0, side * 0.22], { k: 0.05, cell: 0.04 });          // широчайшие
    body([side * 0.085, 0.5, 0.1], [0.1, 0.068, 0.05], [0, 0, -side * 0.2], { k: 0.035, cell: 0.03, pattern: [0.7, 1.1, 1] }); // грудные
    body([side * 0.12, 0.2, 0.03], [0.055, 0.11, 0.075], null, { k: 0.05, cell: 0.032 });                       // косые
    body([side * 0.1, 0.5, -0.12], [0.075, 0.085, 0.035], [0.2, 0, side * 0.3], { k: 0.04, cell: 0.045 });      // лопатки
    body([side * 0.085, -0.01, -0.085], [0.085, 0.09, 0.075], null, { k: 0.05, cell: 0.035 });                  // ягодицы
    body([side * 0.1, 0.61, -0.04], [0.13, 0.065, 0.085], [0, 0, -side * 0.42], { k: 0.05, cell: 0.045 });      // трапеции
    body([side * 0.215, 0.565, 0.0], [0.095, 0.09, 0.1], [0, 0, -side * 0.3], { k: 0.045, cell: 0.045 });       // дельты
    for (let row = 0; row < 3; row++) {                                                                          // пресс
      body([side * 0.042, 0.13 + row * 0.075, 0.115], [0.04, 0.032, 0.024], null, { k: 0.02, cell: 0.03, pattern: [0.55, 1.25, 1] });
    }
  }
  // хребет: валик по спине
  const backLow = field.surfacePoint(torso.point(0, 0.08, 0), forward.clone().negate());
  const backHigh = field.surfacePoint(torso.point(0, 0.6, 0), forward.clone().negate());
  field.cone(torso, backLow.clone().addScaledVector(forward, 0.022), backHigh.clone().addScaledVector(forward, 0.022), 0.03, 0.034, { k: 0.03, cell: 0.04 });
  // костные бугры (остеодермы) рядами вдоль спины
  for (const side of [-1, 1]) {
    for (let index = 0; index < 7; index++) {
      const height = 0.12 + index * 0.075;
      const outward = forward.clone().negate().addScaledVector(torso.direction(side, 0, 0), 0.35).normalize();
      const surface = field.surfacePoint(torso.point(side * 0.06, height, 0), outward);
      const center = surface.addScaledVector(outward, -0.008).sub(torso.origin).applyQuaternion(torso.inverse);
      body(center.toArray(), [0.024, 0.028, 0.017], null, { k: 0.012, cell: 0.045 });
    }
  }

  // хвост: толстый у основания, лежит концом на земле
  const tailQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, spec.twist, 0));
  const tailBase = torso.point(0, 0.0, -0.12);
  const tail = new Bone(tailBase, tailQuat, V(0.53, 0.17, 0.29));
  const tailPoints = [[0, 0, 0], [0, -0.2, -0.17], [0.02, -0.45, -0.3], [0.05, -0.66, -0.42], [0.1, -0.8, -0.52], [0.16, -0.87, -0.6]]
    .map(([x, y, z], index) => {
      const sway = -spec.twist * 0.7 * (index / 5) ** 2;
      const point = tail.point(x + sway, y, z);
      return point;
    });
  const tailRadii = [0.075, 0.058, 0.042, 0.029, 0.018, 0.009];
  // у лежащего на боку хвост ложится на землю: высота после укладки — координата x, земля на spec.tailLevel
  // tailBlend 0..1 — доля укладки (кадры падения)
  const tailBlend = spec.tailLevel === undefined ? 0 : spec.tailBlend ?? 1;
  if (tailBlend < 1) tailPoints.forEach((point, index) => { point.y = Math.max(point.y, tailRadii[index] + 0.004); });
  if (tailBlend > 0) {
    tailPoints.forEach((point, index) => { point.x += (spec.tailLevel + tailRadii[index] - point.x) * Math.min(1, index / 2) * tailBlend; });
  }
  for (let index = 0; index < tailPoints.length - 1; index++) {
    field.cone(tail, tailPoints[index], tailPoints[index + 1], tailRadii[index], tailRadii[index + 1], { k: 0.04, cell: 0.036 - index * 0.003 });
  }

  // шея и голова: голова выдвинута вперёд, шея толстая, переходит в трапеции
  const neckBase = torso.point(0, 0.6, 0.02);
  const headQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(spec.headTilt, -spec.twist * 0.6, spec.headRoll || 0, 'YXZ'));
  const headBase = neckBase.clone().add(V(0, 0.17, 0.08).applyQuaternion(headQuat));
  const head = new Bone(headBase, headQuat, V(-0.31, 0.77, 0.13));
  const neck = limbBone(neckBase, headBase, forward, V(0.22, -0.44, 0.61));
  field.cone(neck, neckBase, head.point(0, 0.02, -0.02), 0.095, 0.07, { k: 0.05, cell: 0.03 });
  field.ellipsoid(neck, [0, neck.length * 0.5, 0.045], [0.06, 0.09, 0.05], null, { k: 0.04, cell: 0.026, pattern: [0.55, 1.3, 1] });   // горло
  for (const side of [-1, 1]) {
    field.cone(neck, head.point(side * 0.05, 0.0, 0.0), torso.point(side * 0.035, 0.57, 0.1), 0.022, 0.019, { k: 0.025, cell: 0.026 });  // жилы шеи
  }
  for (const along of [0.3, 0.5, 0.7]) {                                                                         // поперечные складки горла
    field.ellipsoid(neck, [0, neck.length * along, 0.075], [0.07, 0.0045, 0.035], null, { k: 0.006, carve: true });
  }
  const skull = (center, radii, euler, options) => field.ellipsoid(head, center, radii, euler, options);
  skull([0, 0.1, -0.02], [0.095, 0.1, 0.13], [-0.35, 0, 0], { k: 0.05, cell: 0.02 });                         // черепная коробка
  skull([0, 0.035, 0.075], [0.068, 0.06, 0.085], [0.1, 0, 0], { k: 0.045, cell: 0.016 });                      // морда
  skull([0, -0.015, 0.06], [0.066, 0.04, 0.08], null, { k: 0.035, cell: 0.016 });                              // нижняя челюсть
  for (const side of [-1, 1]) {
    skull([side * 0.047, 0.088, 0.098], [0.04, 0.017, 0.03], [0, 0, side * 0.25], { k: 0.015, cell: 0.014 });  // надбровья
    skull([side * 0.06, 0.035, 0.06], [0.026, 0.02, 0.042], null, { k: 0.02, cell: 0.016 });                   // скулы
  }
  // продольные гребни на черепе
  for (const side of [-1, 1]) {
    for (const lateral of [0.022, 0.052]) {
      const ridge = [0.06, 0.0, -0.06, -0.12].map((depth) => {
        const outward = head.direction(side * lateral * 4, 1, 0).normalize();
        return field.surfacePoint(head.point(side * lateral, 0.08, depth), outward).addScaledVector(outward, -0.006);
      });
      for (let index = 0; index < ridge.length - 1; index++) field.cone(head, ridge[index], ridge[index + 1], 0.009, 0.008, { k: 0.012, cell: 0.016 });
    }
  }
  for (const side of [-1, 1]) {
    skull([side * 0.046, 0.058, 0.118], [0.034, 0.024, 0.026], [0, side * 0.45, side * 0.35], { k: 0.012, carve: true });   // глазницы
    skull([side * 0.013, 0.03, 0.158], [0.007, 0.006, 0.008], null, { k: 0.006, carve: true });                             // ноздри
    const eyeRotation = headQuat.clone().multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(0, side * 0.45, side * 0.35)));
    const eye = new THREE.SphereGeometry(1, 20, 14);
    eye.applyMatrix4(new THREE.Matrix4().compose(head.point(side * 0.046, 0.058, 0.111), eyeRotation, V(0.031, 0.021, 0.022)));
    eyes.push(eye);
  }
  skull([0, -0.004, 0.12], [0.052, 0.0045, 0.05], null, { k: 0.006, carve: true });                            // щель рта
  for (let tooth = -3; tooth <= 3; tooth++) {
    const across = tooth * 0.011;
    const depth = 0.153 - 24 * across * across;
    horns.push(hornGeometry(head.point(across, 0.004, depth), head.direction(0, -1, 0.15), head.direction(0, 0, -1), 0.012, 0.0032, 0xbfb59a, 0xece4cc, 0.1));
  }

  // руки
  const hands = [];
  [-1, 1].forEach((side, sideIndex) => {
    const swing = spec.armSwing[sideIndex];
    const shoulder = torso.point(side * 0.22, 0.56, 0);
    const custom = spec.hands && spec.hands[sideIndex];
    const hand = custom ? custom.clone() : shoulder.clone().add(torso.direction(side * 0.08, -0.62, 0.06 + swing * 0.5));
    const elbowPole = custom ? (spec.elbowPoles && spec.elbowPoles[sideIndex] ? spec.elbowPoles[sideIndex].clone() : V(side, -0.6, -0.4)) : torso.direction(side * 0.3, 0, -1);
    const elbow = solveTwoBone(shoulder, hand, 0.36, 0.36, elbowPole);
    const upper = limbBone(shoulder, elbow, forward, V(side * 0.37, 0.11, 0.04));
    const upperLength = upper.length;
    field.cone(upper, shoulder, elbow, 0.085, 0.06, { k: 0.04, cell: 0.038 });
    field.ellipsoid(upper, [0, upperLength * 0.45, 0.03], [0.055, 0.12, 0.05], null, { k: 0.03, cell: 0.035 });   // бицепс
    field.ellipsoid(upper, [0, upperLength * 0.38, -0.035], [0.06, 0.13, 0.055], null, { k: 0.03, cell: 0.035 }); // трицепс
    field.ellipsoid(upper, [0, upperLength, -0.03], [0.032, 0.035, 0.03], null, { k: 0.02, cell: 0.03 });         // локоть
    field.ellipsoid(upper, [0, upperLength * 0.92, 0.035], [0.05, 0.0045, 0.03], null, { k: 0.006, carve: true }); // складка на сгибе
    const fore = limbBone(elbow, hand, forward, V(side * 0.61, -0.23, 0.19));
    const foreLength = fore.length;
    field.cone(fore, elbow, hand, 0.068, 0.044, { k: 0.035, cell: 0.032 });
    field.ellipsoid(fore, [0, foreLength * 0.27, 0.005], [0.072, 0.13, 0.066], null, { k: 0.035, cell: 0.032 });  // мышцы предплечья
    field.ellipsoid(fore, [0, foreLength + 0.045, 0.005], [0.024, 0.05, 0.045], null, { k: 0.025, cell: 0.016 });  // кисть
    // пальцы: три длинных и большой, слегка согнуты к ладони
    const inward = side;               // локальная ось x кости смотрит наружу от тела зеркально
    const fingerBases = [[0, foreLength + 0.085, -0.026], [0, foreLength + 0.088, 0.0], [0, foreLength + 0.085, 0.026], [inward * 0.012, foreLength + 0.045, 0.045]];
    fingerBases.forEach((baseLocal, finger) => {
      const thumb = finger === 3;
      const base = fore.point(...baseLocal);
      const middle = base.clone().add(fore.direction(inward * 0.012, thumb ? 0.035 : 0.062, thumb ? 0.03 : 0.01));
      const tip = middle.clone().add(fore.direction(inward * 0.02, thumb ? 0.03 : 0.048, thumb ? 0.02 : 0.016));
      field.cone(fore, base, middle, 0.017, 0.013, { k: 0.012, cell: 0.013 });
      field.cone(fore, middle, tip, 0.013, 0.01, { k: 0.01, cell: 0.012 });
      const clawDirection = tip.clone().sub(middle).normalize();
      horns.push(hornGeometry(tip.clone().addScaledVector(clawDirection, -0.008), clawDirection, fore.direction(inward, 0, 0.3), thumb ? 0.035 : 0.048, 0.0085, BONE_DARK, BONE_TIP, 0.45));
    });
    hands.push({ fore, foreLength, side, shoulder, upper, hand: hand.clone(), elbow: elbow.clone() });
  });

  // ноги: бедро, голень, приподнятая плюсна, три пальца с когтями
  const legs = [];
  [-1, 1].forEach((side, sideIndex) => {
    const hip = torso.point(side * 0.13, -0.04, 0);
    const toe = spec.toes[sideIndex].clone();
    const toeQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(spec.toePitch[sideIndex], 0, 0));
    const ankle = toe.clone().add(V(0, 0.27, -0.15).applyQuaternion(toeQuat));
    const knee = solveTwoBone(hip, ankle, 0.5, 0.46, spec.kneePoles ? spec.kneePoles[sideIndex].clone() : V(0, 0, 1));
    legs.push({ side, hip: hip.clone(), knee: knee.clone(), ankle: ankle.clone(), toe: toe.clone() });
    const outer = -side;
    const thigh = limbBone(hip, knee, forward, V(side * 0.29, 0.41, -0.17));
    const thighLength = thigh.length;
    field.cone(thigh, hip, knee, 0.14, 0.085, { k: 0.05, cell: 0.04 });
    field.ellipsoid(thigh, [0, thighLength * 0.45, 0.04], [0.105, 0.22, 0.09], null, { k: 0.04, cell: 0.04 });        // четырёхглавая
    field.ellipsoid(thigh, [outer * 0.04, thighLength * 0.55, 0.01], [0.07, 0.15, 0.07], null, { k: 0.035, cell: 0.04 });
    field.ellipsoid(thigh, [0, thighLength * 0.42, -0.05], [0.09, 0.2, 0.08], null, { k: 0.04, cell: 0.04 });         // задняя поверхность
    field.ellipsoid(thigh, [0, thighLength, 0.055], [0.045, 0.045, 0.03], null, { k: 0.02, cell: 0.026 });             // колено
    const shin = limbBone(knee, ankle, forward, V(side * 0.13, -0.52, 0.33));
    const shinLength = shin.length;
    field.cone(shin, knee, ankle, 0.085, 0.05, { k: 0.04, cell: 0.034 });
    field.ellipsoid(shin, [0, shinLength * 0.3, -0.045], [0.068, 0.14, 0.068], null, { k: 0.035, cell: 0.034 });      // икра
    const toeBase = toe.clone().add(V(0, 0.03, 0));
    const foot = limbBone(ankle, toeBase, forward, V(side * 0.44, 0.22, -0.36));
    field.cone(foot, ankle, toeBase, 0.055, 0.042, { k: 0.03, cell: 0.024 });
    field.ellipsoid(foot, [0, 0, -0.03], [0.035, 0.035, 0.035], null, { k: 0.02, cell: 0.022 });                       // пятка
    field.ellipsoid(foot, [0, foot.length, 0.01], [0.05, 0.03, 0.055], null, { k: 0.03, cell: 0.016 });                // подушка стопы
    const toeDirection = (x, y, z) => V(x, y, z).applyQuaternion(toeQuat);
    for (let digit = -1; digit <= 1; digit++) {
      const base = toe.clone().add(toeDirection(digit * 0.028, 0.026, 0.02));
      const tip = toe.clone().add(toeDirection(digit * 0.055, 0.016, 0.12));
      field.cone(foot, base, tip, 0.023, 0.015, { k: 0.015, cell: 0.014 });
      const clawDirection = tip.clone().sub(base).normalize().add(V(0, -0.25, 0)).normalize();
      horns.push(hornGeometry(tip.clone().addScaledVector(clawDirection, -0.01), clawDirection, V(0, -1, 0), 0.055, 0.011, BONE_DARK, BONE_TIP, 0.4));
    }
    const spurDirection = forward.clone().negate().add(V(0, -0.7, 0)).normalize();
    horns.push(hornGeometry(ankle.clone().addScaledVector(forward, -0.03), spurDirection, V(0, -1, 0), 0.04, 0.01, BONE_DARK, BONE_TIP, 0.3));
  });

  // ---------- шипы: по хребту, на шее, по хвосту, на плечах и предплечьях; цветной гребень на голове ----------
  const backward = forward.clone().negate();
  for (let index = 0; index < 6; index++) {
    const height = 0.2 + index * 0.085;
    const outward = backward.clone().add(V(0, 0.35, 0)).normalize();
    const surface = field.surfacePoint(torso.point(0, height, 0), outward);
    const length = 0.035 + 0.02 * (index / 5);
    horns.push(hornGeometry(surface.addScaledVector(outward, -0.008), outward, up, length, 0.013, BONE_DARK, BONE_TIP, 0.35));
  }
  for (let index = 1; index <= 3; index++) {
    const along = neckBase.clone().lerp(headBase, index / 4);
    const outward = backward.clone().add(V(0, 0.5, 0)).normalize();
    const surface = field.surfacePoint(along, outward);
    horns.push(hornGeometry(surface.addScaledVector(outward, -0.008), outward, up, 0.045, 0.012, BONE_DARK, BONE_TIP, 0.35));
  }
  for (let index = 0; index < tailPoints.length - 1; index++) {
    for (const part of [0.25, 0.75]) {
      const along = tailPoints[index].clone().lerp(tailPoints[index + 1], part);
      const surface = field.surfacePoint(along, up);
      const direction = tailPoints[index + 1].clone().sub(tailPoints[index]).normalize();
      const outward = up.clone().addScaledVector(direction, 0.5).normalize();
      const size = 1 - (index + part) / tailPoints.length;
      horns.push(hornGeometry(surface.addScaledVector(up, -0.006), outward, direction, 0.01 + 0.022 * size, 0.0035 + 0.007 * size, BONE_DARK, BONE_TIP, 0.3));
    }
  }
  for (const { fore, foreLength, side, upper } of hands) {
    const outward = torso.direction(side, 0, 0).multiplyScalar(0.6).addScaledVector(backward, 0.8).normalize();
    for (const part of [0.25, 0.42, 0.59, 0.76]) {
      const surface = field.surfacePoint(fore.point(0, foreLength * part, 0), outward);
      horns.push(hornGeometry(surface.addScaledVector(outward, -0.006), outward, fore.direction(0, 1, 0), 0.034, 0.009, BONE_DARK, BONE_TIP, 0.4));
    }
    for (const part of [0.0, 0.15]) {
      const outwardUp = torso.direction(side, 1.1, -0.3).normalize();
      const surface = field.surfacePoint(upper.point(0, upper.length * part, 0), outwardUp);
      horns.push(hornGeometry(surface.addScaledVector(outwardUp, -0.007), outwardUp, torso.direction(side, 0, 0), 0.036, 0.011, BONE_DARK, BONE_TIP, 0.3));
    }
  }
  for (let index = 0; index < 6; index++) {
    const depth = 0.07 - index * 0.04;
    const outward = head.direction(0, 1, -0.35).normalize();
    const surface = field.surfacePoint(head.point(0, 0.1, depth), outward);
    const length = 0.022 + 0.022 * Math.sin(Math.PI * (index + 0.5) / 6);
    horns.push(hornGeometry(surface.addScaledVector(outward, -0.005), outward, head.direction(0, 0, -1), length, 0.008, CREST_BASE, CREST_TIP, 0.35));
  }
  for (const side of [-1, 1]) {
    const outward = head.direction(side * 0.6, 0.35, -0.8).normalize();
    const surface = field.surfacePoint(head.point(side * 0.06, 0.1, -0.08), outward);
    horns.push(hornGeometry(surface.addScaledVector(outward, -0.01), outward, up, 0.07, 0.013, BONE_DARK, BONE_TIP, 0.35));
  }

  // ---------- сетка тела ----------
  const grid = buildGrid(field);
  const mesh = surfaceNets(grid);
  const { rest, cells } = scaleAttributes(field, mesh.positions);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(mesh.positions, 3));
  geometry.setAttribute('normal', new THREE.BufferAttribute(mesh.normals, 3));
  geometry.setAttribute('aRest', new THREE.BufferAttribute(rest, 3));
  geometry.setAttribute('aCell', new THREE.BufferAttribute(cells, 1));
  geometry.setIndex(new THREE.BufferAttribute(mesh.indices, 1));
  geometry.computeBoundingSphere();

  return {
    body: geometry,
    horn: mergeGeometries(horns.map((part) => part.toNonIndexed())),
    eyes: mergeGeometries(eyes),
    head: head.point(0, 0.1, 0.02),
    // опорные точки для снаряжения: корпус, руки, ноги
    rig: { torso, forward, tail: tailPoints.map((point) => point.clone()), hands: hands.map(({ side, hand, elbow, shoulder, fore }) => ({ side, hand, elbow, shoulder, along: fore.direction(0, 1, 0) })), legs },
  };
}

// ---------- снаряжение: лёгкая разгрузка и плазменный пистолет ----------
// Разгрузка: нагрудная пластина, плечевые ремни, пояс с подсумками энергоячеек, ранец-батарея на спине,
// кобура на правом бедре. Пистолет в правой руке (сторона +x, как оружие у бойцов) или в кобуре.
let gearMaterials = null;
function getGearMaterials() {
  if (gearMaterials) return gearMaterials;
  gearMaterials = {
    plate: new THREE.MeshStandardMaterial({ color: 0x5c656e, roughness: 0.5, metalness: 0.3 }),
    strap: new THREE.MeshStandardMaterial({ color: 0x3b3428, roughness: 0.9, metalness: 0 }),
    pouch: new THREE.MeshStandardMaterial({ color: 0x4a4536, roughness: 0.85, metalness: 0 }),
    glow: new THREE.MeshStandardMaterial({ color: 0x1f7fa8, emissive: 0x1aa6e0, emissiveIntensity: 0.9, roughness: 0.3 }),
    gun: new THREE.MeshStandardMaterial({ color: 0x6a737c, roughness: 0.4, metalness: 0.35 }),
    gunDark: new THREE.MeshStandardMaterial({ color: 0x2a2e33, roughness: 0.5, metalness: 0.3 }),
  };
  return gearMaterials;
}
function gearBox(width, height, depth, material) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
  mesh.castShadow = mesh.receiveShadow = true;
  return mesh;
}
// ремень от точки к точке: плоская полоса шириной width, толщина 0.012
function strap(from, to, width, normalHint, material) {
  const length = from.distanceTo(to);
  const mesh = gearBox(width, 0.012, length, material);
  const along = new THREE.Vector3().subVectors(to, from).normalize();
  const side = new THREE.Vector3().crossVectors(normalHint, along).normalize();
  const normal = new THREE.Vector3().crossVectors(along, side).normalize();
  mesh.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(side, normal, along));
  mesh.position.copy(from).add(to).multiplyScalar(0.5);
  return mesh;
}
// плазменный пистолет: начало координат — рукоятка в кисти, ствол вдоль +z над рукояткой
// модель плазменного пистолета — weapons.js
function orientPistol(pistol, barrel, upHint) {
  const forward = barrel.clone().normalize();
  const side = new THREE.Vector3().crossVectors(upHint, forward);
  if (side.lengthSq() < 1e-6) side.set(1, 0, 0);
  side.normalize();
  const up = new THREE.Vector3().crossVectors(forward, side).normalize();
  pistol.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(side, up, forward));
}
export function buildAlienGear(rig, spec, options = {}) {
  const materials = getGearMaterials();
  const gear = new THREE.Group();
  const { torso } = rig;
  const at = (mesh, x, y, z) => { mesh.position.copy(torso.point(x, y, z)); mesh.quaternion.copy(torso.quaternion); gear.add(mesh); return mesh; };
  const up = torso.direction(0, 1, 0);
  // нагрудная пластина со светящейся полосой
  at(gearBox(0.24, 0.17, 0.035, materials.plate), 0, 0.46, 0.165).rotateX(-0.12);
  at(gearBox(0.12, 0.012, 0.01, materials.glow), 0, 0.5, 0.186).rotateX(-0.12);
  // плечевые ремни: спереди от пластины через плечо на спину к ранцу
  for (const side of [-1, 1]) {
    const front = torso.point(side * 0.09, 0.53, 0.165), top = torso.point(side * 0.12, 0.665, -0.01), back = torso.point(side * 0.09, 0.52, -0.175);
    gear.add(strap(front, top, 0.045, torso.direction(0, 0.4, 1).normalize(), materials.strap));
    gear.add(strap(top, back, 0.045, torso.direction(0, 0.4, -1).normalize(), materials.strap));
    gear.add(strap(torso.point(side * 0.11, 0.39, 0.15), torso.point(side * 0.16, 0.12, 0.1), 0.035, torso.direction(side * 0.3, 0, 1).normalize(), materials.strap));
  }
  // ранец-батарея на спине
  at(gearBox(0.2, 0.22, 0.07, materials.plate), 0, 0.42, -0.2);
  at(gearBox(0.03, 0.16, 0.012, materials.glow), 0.06, 0.42, -0.237);
  // пояс и подсумки
  const belt = new THREE.Mesh(new THREE.TorusGeometry(1, 0.11, 6, 28).rotateX(Math.PI / 2), materials.strap);
  belt.scale.set(0.185, 0.22, 0.15);
  belt.position.copy(torso.point(0, 0.1, 0));
  belt.quaternion.copy(torso.quaternion);
  belt.castShadow = true;
  gear.add(belt);
  for (const [x, z, angle] of [[-0.09, 0.14, 0.4], [0.0, 0.155, 0], [-0.17, 0.05, 1.2]]) {
    at(gearBox(0.06, 0.075, 0.04, materials.pouch), x, 0.08, z).rotateY(angle);
    at(gearBox(0.035, 0.012, 0.022, materials.glow), x, 0.123, z).rotateY(angle);
  }
  // кобура на правом бедре (сторона +x)
  const leg = rig.legs.find((item) => item.side === 1);
  const thigh = new THREE.Vector3().subVectors(leg.knee, leg.hip).normalize();
  const outward = torso.direction(1, 0, 0);
  const holsterCenter = leg.hip.clone().lerp(leg.knee, 0.38).addScaledVector(outward, 0.12);
  const holster = gearBox(0.05, 0.17, 0.09, materials.pouch);
  holster.position.copy(holsterCenter);
  holster.quaternion.setFromUnitVectors(V(0, 1, 0), thigh.clone().negate());
  gear.add(holster);
  gear.add(strap(leg.hip.clone().lerp(leg.knee, 0.45).addScaledVector(outward, 0.02).addScaledVector(rig.forward, 0.1), leg.hip.clone().lerp(leg.knee, 0.45).addScaledVector(outward, 0.02).addScaledVector(rig.forward, -0.1), 0.03, thigh, materials.strap));
  // пистолет: в руке, в кобуре или выпал (погибший — пистолет кладёт рядом sprites.js)
  if (spec.pistol === 'none') return gear;
  // у золотистого и серебристого — плазменная винтовка (узел тоже называется 'pistol': по нему ищут оружие в руке)
  const elite = !!(options.gold || options.silver);
  const pistol = elite ? buildPlasmaRifle() : buildPlasmaPistol();
  pistol.name = 'pistol';
  if (spec.pistol === 'holster' && elite) {
    // винтовка за спиной наискось, поверх ранца
    orientPistol(pistol, torso.direction(0.55, 1, 0).normalize(), torso.direction(0, 0, -1));
    pistol.position.copy(torso.point(-0.08, 0.3, -0.27));
  } else if (spec.pistol === 'holster') {
    orientPistol(pistol, thigh, rig.forward);
    pistol.position.copy(holsterCenter).addScaledVector(thigh, -0.05).addScaledVector(outward, 0.035);
  } else {
    const hand = rig.hands.find((item) => item.side === 1);
    // ствол по направлению предплечья, чуть вперёд: у опущенной руки — вниз-вперёд, у вытянутой — вперёд
    const barrel = hand.along.clone().addScaledVector(rig.forward, spec.aim ? 0.15 : 0.9).normalize();
    orientPistol(pistol, barrel, up);
    pistol.position.copy(hand.hand).addScaledVector(hand.along, 0.075);
  }
  pistol.traverse((node) => { if (node.isMesh) node.castShadow = node.receiveShadow = true; });
  gear.add(pistol);
  return gear;
}

// ---------- материалы ----------
const shading = { uForward: { value: new THREE.Vector3(0, 0, 1) } };
export function setAlienFacing(alien) {
  alien.updateMatrixWorld(true);
  shading.uForward.value.set(0, 0, 1).transformDirection(alien.matrixWorld);
}

const SKIN_VERTEX_HEAD = /* glsl */`
attribute vec3 aRest;
attribute float aCell;
varying vec3 vRest;
varying float vCell;
varying vec3 vWorldNormal;
`;

const SKIN_FRAGMENT_HEAD = /* glsl */`
varying vec3 vRest;
varying float vCell;
varying vec3 vWorldNormal;
uniform vec3 uForward;
uniform vec3 uBack;
uniform vec3 uBelly;
float alienGroove;
float alienHeight;

vec3 alienHash3(vec3 point) {
  point = fract(point * vec3(0.1031, 0.1030, 0.0973));
  point += dot(point, point.yxz + 33.33);
  return fract((point.xxy + point.yxx) * point.zyx);
}
float alienHash1(vec3 point) { return fract(sin(dot(point, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
float alienNoise(vec3 point) {
  vec3 cell = floor(point), part = fract(point);
  part = part * part * (3.0 - 2.0 * part);
  return mix(mix(mix(alienHash1(cell), alienHash1(cell + vec3(1, 0, 0)), part.x),
                 mix(alienHash1(cell + vec3(0, 1, 0)), alienHash1(cell + vec3(1, 1, 0)), part.x), part.y),
             mix(mix(alienHash1(cell + vec3(0, 0, 1)), alienHash1(cell + vec3(1, 0, 1)), part.x),
                 mix(alienHash1(cell + vec3(0, 1, 1)), alienHash1(cell + vec3(1, 1, 1)), part.x), part.y), part.z);
}
void alienVoronoi(vec3 point, out float nearest, out float second, out vec3 cellId) {
  vec3 base = floor(point), part = fract(point);
  nearest = 8.0; second = 8.0; cellId = base;
  for (int dz = -1; dz <= 1; dz++)
  for (int dy = -1; dy <= 1; dy++)
  for (int dx = -1; dx <= 1; dx++) {
    vec3 offset = vec3(float(dx), float(dy), float(dz));
    vec3 delta = offset + alienHash3(base + offset) * 0.55 + 0.225 - part;
    float distance2 = dot(delta, delta);
    if (distance2 < nearest) { second = nearest; nearest = distance2; cellId = base + offset; }
    else if (distance2 < second) { second = distance2; }
  }
  nearest = sqrt(nearest); second = sqrt(second);
}
vec3 alienPerturb(vec3 surfacePosition, vec3 surfaceNormal, vec2 slope, float facing) {
  vec3 sigmaX = normalize(dFdx(surfacePosition));
  vec3 sigmaY = normalize(dFdy(surfacePosition));
  vec3 first = cross(sigmaY, surfaceNormal);
  vec3 second = cross(surfaceNormal, sigmaX);
  float determinant = dot(sigmaX, first) * facing;
  vec3 gradient = sign(determinant) * (slope.x * first + slope.y * second);
  return normalize(abs(determinant) * surfaceNormal - gradient);
}
`;

const SKIN_COLOR = /* glsl */`
#include <map_fragment>
{
  float nearest, second; vec3 cellId;
  float cellSize = vCell * 0.8;
  alienVoronoi(vRest / cellSize, nearest, second, cellId);
  float pixelSize = max(length(dFdx(vViewPosition)), 1e-6);
  float detail = 1.0 - smoothstep(0.22, 0.45, pixelSize / cellSize);     // мельче пикселя — не рисуем, чтобы не рябило
  float groove = 1.0 - smoothstep(0.015, 0.09, second - nearest);
  float dome = sqrt(max(0.0, 1.0 - nearest * nearest * 1.3)) * (0.75 + 0.5 * alienHash1(cellId + 7.0));
  float wrinkle = alienNoise(vRest * 140.0);
  alienHeight = ((1.0 - groove) * (0.25 + 0.75 * dome) + wrinkle * 0.08) * detail;
  alienGroove = mix(0.25, groove, detail);
  vec3 worldNormal = normalize(vWorldNormal);
  float dorsal = dot(worldNormal, -uForward) * 0.75 + worldNormal.y * 0.35;
  vec3 tone = mix(uBelly, uBack, smoothstep(-0.6, 0.45, dorsal));
  float mottling = alienNoise(vRest * 8.0) * 0.6 + alienNoise(vRest * 21.0) * 0.4;
  float cellTint = alienHash1(cellId);
  tone *= 0.72 + 0.45 * mottling;
  tone *= mix(1.0, 0.82 + 0.36 * cellTint, detail);
  tone *= mix(1.0, 0.58, alienGroove);
  tone *= mix(1.0, 0.8 + 0.3 * dome, detail);
  diffuseColor.rgb *= tone;
}
`;

const SKIN_NORMAL = /* glsl */`
#include <normal_fragment_maps>
{
  float pixelSize = max(length(dFdx(vViewPosition)), 1e-6);
  float relief = vCell * 0.8 * 0.26;
  vec2 slope = vec2(dFdx(alienHeight), dFdy(alienHeight)) * relief / pixelSize;
  normal = alienPerturb(-vViewPosition, normal, slope, faceDirection);
}
`;

// gold — золотистый пришелец, silver — серебристый (элита из портала): та же чешуя, цвет металла, металлический блеск
const materialSets = {};
const METAL_COLORS = { gold: { back: 0x8a6418, belly: 0xe0bc5c, horn: 0xffe6a0 }, silver: { back: 0x5c636c, belly: 0xd4dae0, horn: 0xeef2f8 } };
function getMaterials(metal) {
  const variant = metal || 'normal', gold = !!metal, colors = METAL_COLORS[metal];
  if (materialSets[variant]) return materialSets[variant];
  const skin = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.75, metalness: gold ? 0.55 : 0 });
  skin.onBeforeCompile = (shader) => {
    shader.uniforms.uForward = shading.uForward;
    shader.uniforms.uBack = { value: new THREE.Color(gold ? colors.back : 0x323d34) };
    shader.uniforms.uBelly = { value: new THREE.Color(gold ? colors.belly : 0x6e6e55) };
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\n' + SKIN_VERTEX_HEAD)
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvRest = aRest;\nvCell = aCell;')
      .replace('#include <defaultnormal_vertex>', '#include <defaultnormal_vertex>\nvWorldNormal = normalize(mat3(modelMatrix) * objectNormal);');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\n' + SKIN_FRAGMENT_HEAD)
      .replace('#include <map_fragment>', SKIN_COLOR)
      .replace('#include <roughnessmap_fragment>', gold ? 'float roughnessFactor = mix(0.28, 0.7, alienGroove);' : 'float roughnessFactor = mix(0.5, 0.95, alienGroove);')
      .replace('#include <normal_fragment_maps>', SKIN_NORMAL);
  };
  skin.customProgramCacheKey = () => 'alienReptileSkin' + variant;
  const horn = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.4, metalness: 0, color: gold ? colors.horn : 0xffffff });
  const eye = new THREE.MeshPhysicalMaterial({ color: 0x040404, roughness: 0.06, clearcoat: 1, clearcoatRoughness: 0.04 });
  materialSets[variant] = { skin, horn, eye };
  return materialSets[variant];
}

const partsCache = new Map();
// лазание по приставной лестнице: как у бойца (см. soldier2.js climbCycle), перекладины на z = 0.26
export const ALIEN_CLIMB_STEP = 0.6;
export function alienClimbCycle(phase) {
  const rail = 0.26;
  const smooth = (value) => value * value * (3 - 2 * value);
  const move = (base, firstHalf) => {
    const local = firstHalf ? phase / 0.5 : (phase - 0.5) / 0.5;
    if (local < 0) return { lift: base, away: 0 };
    if (local >= 1) return { lift: base + ALIEN_CLIMB_STEP, away: 0 };
    return { lift: base + ALIEN_CLIMB_STEP * smooth(local), away: Math.sin(Math.PI * local) };
  };
  const leftFoot = move(0, true), rightFoot = move(0.3, false);
  const rightHand = move(1.7, true), leftHand = move(2.0, false);
  const toe = (side, step) => V(side * 0.14, step.lift + step.away * 0.06, rail - 0.04 - step.away * 0.12);
  const hand = (side, step) => V(side * 0.22, step.lift, rail - 0.04 - step.away * 0.1);
  return {
    pelvis: V(0, 1.0 + ALIEN_CLIMB_STEP * phase, 0.0), lean: 0.12, twist: 0,
    toes: [toe(-1, leftFoot), toe(1, rightFoot)], toePitch: [-0.25, -0.25], headTilt: -0.3, armSwing: [0, 0],
    hands: [hand(-1, leftHand), hand(1, rightHand)], pistol: 'holster',
  };
}

// options.gold — золотистый пришелец с плазменной винтовкой, options.silver — серебристый (тоже с винтовкой)
export function buildReptileAlien(pose = 'idle', options = {}) {
  const spec = typeof pose === 'string' ? ALIEN_POSES[pose] : pose;
  const key = JSON.stringify(spec);
  let parts = partsCache.get(key);
  if (!parts) {
    parts = buildParts(spec);
    partsCache.set(key, parts);
  }
  const { skin, horn, eye } = getMaterials(options.silver ? 'silver' : options.gold ? 'gold' : null);
  const alien = new THREE.Group();
  alien.add(new THREE.Mesh(parts.body, skin));
  alien.add(new THREE.Mesh(parts.horn, horn));
  alien.add(new THREE.Mesh(parts.eyes, eye));
  if (spec.gear !== false) alien.add(buildAlienGear(parts.rig, spec, options));
  setShadows(alien);
  alien.userData.head = parts.head.clone();
  alien.userData.rig = parts.rig;
  return alien;
}
