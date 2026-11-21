// Местность, растительность, камни и корабль пришельцев.
import * as THREE from 'three';
import {
  mulberry32, range, fbm2, noise2, groundDetailTextures, rockTextures, barkTextures, metalPanelTextures,
  screenTexture, leafClusterTexture, segment, rockGeometry, setShadows, canvasTexture,
} from './lib.js';

export const SQ = Math.SQRT1_2;
// экранные координаты местности: u вправо, v к зрителю (вниз по экрану)
export const toXZ = (u, v) => new THREE.Vector2((u + v) * SQ, (v - u) * SQ);
export const toUV = (x, z) => new THREE.Vector2((x - z) * SQ, (x + z) * SQ);

export const CRAFT = { u: 1.4, v: -2.4, radius: 5.2, floor: 0.42 };
const PATH = [[-12, 13], [-9, 9.4], [-6.2, 6.8], [-3.6, 4.6], [-1.9, 2.9], [-1.2, 2.0]];
const PATH_BRANCH = [[-3.6, 4.6], [-0.5, 6.4], [3.5, 7.6], [7.5, 8.4], [12, 9.2]];
const TRENCH_DIRECTION = new THREE.Vector2(0.75, -0.66).normalize();

function distanceToPolyline(u, v, polyline) {
  let best = Infinity;
  for (let index = 0; index < polyline.length - 1; index++) {
    const [u0, v0] = polyline[index], [u1, v1] = polyline[index + 1];
    const du = u1 - u0, dv = v1 - v0;
    const t = Math.max(0, Math.min(1, ((u - u0) * du + (v - v0) * dv) / (du * du + dv * dv)));
    best = Math.min(best, Math.hypot(u - (u0 + du * t), v - (v0 + dv * t)));
  }
  return best;
}

const smoothstep = (edge0, edge1, value) => {
  const t = Math.max(0, Math.min(1, (value - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
};

// поле признаков местности в точке (u, v)
export function terrainInfo(u, v) {
  const craftDistance = Math.hypot(u - CRAFT.u, v - CRAFT.v);
  const relative = new THREE.Vector2(u - CRAFT.u, v - CRAFT.v);
  const along = relative.dot(TRENCH_DIRECTION);
  const across = Math.abs(relative.x * TRENCH_DIRECTION.y - relative.y * TRENCH_DIRECTION.x);
  const trench = along > 0 ? (1 - smoothstep(1.6, 2.8, across + along * 0.05)) * (1 - smoothstep(10, 16, along)) : 0;
  const trenchRim = along > 0 ? Math.max(0, 1 - Math.abs(across - 2.9) / 1.0) * (1 - smoothstep(8, 15, along)) : 0;
  const crater = 1 - smoothstep(CRAFT.radius - 0.2, CRAFT.radius + 1.6, craftDistance);
  const ring = Math.max(0, 1 - Math.abs(craftDistance - CRAFT.radius - 1.2) / 1.1);
  const pathEdgeNoise = noise2(u * 1.3, v * 1.3) * 0.3;
  const path = 1 - smoothstep(0.45, 0.9, Math.min(distanceToPolyline(u, v, PATH), distanceToPolyline(u, v, PATH_BRANCH) + 0.15) + pathEdgeNoise);
  const breachSpot = Math.hypot(u + 1.3, v - 2.2);
  const scorch = 1 - smoothstep(0.5, 2.6, breachSpot + noise2(u * 2, v * 2) * 0.6);
  let height = fbm2(u * 0.07 + 3, v * 0.07, 4) * 0.9 + fbm2(u * 0.6, v * 0.6, 2) * 0.05;
  height += -trench * 0.32 + trenchRim * 0.28 + ring * 0.22 * (along > -2 ? 1 : 0.45) - path * 0.04;
  height = height * (1 - crater) + crater * 0.04;
  return { height, path, trench, trenchRim, crater, scorch, ring };
}

export function heightAt(x, z) {
  const uv = toUV(x, z);
  return terrainInfo(uv.x, uv.y).height;
}

// ---------- земля ----------

export const canopies = [];   // {u, v, radius}: заполняется до постройки земли

function canopyShade(u, v) {
  let shade = 0;
  for (const canopy of canopies) {
    const distance = Math.hypot(u - canopy.u, v - canopy.v);
    shade = Math.max(shade, 1 - smoothstep(canopy.radius * 0.35, canopy.radius * 1.15, distance + noise2(u * 1.7, v * 1.7) * 0.5));
  }
  return shade;
}

export function buildTerrain() {
  const size = 64, segments = 380;
  const geometry = new THREE.PlaneGeometry(size, size, segments, segments);
  geometry.rotateX(-Math.PI / 2);
  const position = geometry.attributes.position;
  const colors = new Float32Array(position.count * 3);
  const color = new THREE.Color();
  const grassDark = new THREE.Color(0.18, 0.26, 0.1), grassMid = new THREE.Color(0.32, 0.38, 0.15);
  const grassDry = new THREE.Color(0.52, 0.48, 0.27), soil = new THREE.Color(0.36, 0.28, 0.19);
  const pathColor = new THREE.Color(0.58, 0.5, 0.37), darkSoil = new THREE.Color(0.22, 0.17, 0.12), burnt = new THREE.Color(0.08, 0.075, 0.065);
  for (let index = 0; index < position.count; index++) {
    const x = position.getX(index), z = position.getZ(index);
    const uv = toUV(x, z);
    const info = terrainInfo(uv.x, uv.y);
    position.setY(index, info.height);
    const patch = fbm2(uv.x * 0.18 + 10, uv.y * 0.18, 4);
    const dry = smoothstep(0.05, 0.35, fbm2(uv.x * 0.11 - 4, uv.y * 0.11 + 7, 4));
    color.copy(grassDark).lerp(grassMid, smoothstep(-0.3, 0.3, patch));
    color.lerp(grassDry, dry * 0.7);
    color.lerp(soil, Math.max(info.ring * 0.75, info.crater * 0.9, info.trenchRim * 0.8));
    color.lerp(darkSoil, info.trench * 0.9);
    color.lerp(pathColor, info.path * 0.92);
    color.lerp(burnt, info.scorch * 0.85);
    const cover = grassDensity(uv.x, uv.y, info);
    color.multiplyScalar(1 - 0.55 * cover);
    color.multiplyScalar(1 - 0.45 * canopyShade(uv.x, uv.y));
    colors[index * 3] = color.r; colors[index * 3 + 1] = color.g; colors[index * 3 + 2] = color.b;
  }
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.computeVertexNormals();
  const detail = groundDetailTextures();
  detail.map.repeat.set(16, 16);
  detail.normalMap.repeat.set(16, 16);
  const material = new THREE.MeshStandardMaterial({ map: detail.map, normalMap: detail.normalMap, normalScale: new THREE.Vector2(0.8, 0.8), vertexColors: true, roughness: 0.95 });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.receiveShadow = true;
  return mesh;
}

// ---------- трава ----------

// плотность травы: 0 на тропе, в борозде, у корабля; пятна разной густоты
export function grassDensity(u, v, info) {
  let density = 1 - Math.max(info.path, info.trench, info.crater, info.scorch, info.ring * 0.7, info.trenchRim * 0.6);
  density *= 0.4 + 0.6 * smoothstep(-0.35, 0.3, fbm2(u * 0.4, v * 0.4, 3));
  return Math.max(0, density);
}

// травинка: тёмная у корня, светлая и желтоватая к кончику; aTip = 0 у корня, 1 на кончике
export function bladeGeometry() {
  const geometry = new THREE.BufferGeometry();
  const levels = [0, 0.22, 0.45, 0.68, 0.86, 1];
  const tints = [[0.13, 0.16, 0.1], [0.32, 0.37, 0.24], [0.62, 0.68, 0.46], [0.92, 0.96, 0.68], [1.15, 1.15, 0.8], [1.35, 1.3, 0.88]];
  const vertices = [], colors = [], tips = [], indices = [];
  levels.forEach((level, index) => {
    const width = 0.012 * (1 - level * 0.92);
    const bend = level * level * 0.09;
    vertices.push(-width, level, bend, width, level, bend + width * 0.6);
    colors.push(...tints[index], ...tints[index]);
    tips.push(level, level);
    if (index > 0) {
      const base = (index - 1) * 2;
      indices.push(base, base + 1, base + 2, base + 1, base + 3, base + 2);
    }
  });
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.setAttribute('aTip', new THREE.Float32BufferAttribute(tips, 1));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

// кончики травы просвечивают на солнце: добавка к свечению, растущая к кончику
export function grassMaterial() {
  const material = new THREE.MeshStandardMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: 0.82, metalness: 0, envMapIntensity: 0.35 });
  material.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float aTip;\nvarying float vTip;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvTip = aTip;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying float vTip;')
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += diffuseColor.rgb * vTip * vTip * 0.16;');
  };
  return material;
}

export function buildGrass(bounds, exclusions) {
  const rng = mulberry32(77);
  const geometry = bladeGeometry();
  const maxCount = 340000;
  const mesh = new THREE.InstancedMesh(geometry, grassMaterial(), maxCount);
  const matrix = new THREE.Matrix4(), quaternion = new THREE.Quaternion(), scale = new THREE.Vector3(), position = new THREE.Vector3();
  const euler = new THREE.Euler(0, 0, 0, 'YXZ');
  const color = new THREE.Color();
  const lush = new THREE.Color(0.15, 0.34, 0.06), mid = new THREE.Color(0.25, 0.46, 0.08), yellowGreen = new THREE.Color(0.42, 0.55, 0.1);
  const blueGreen = new THREE.Color(0.13, 0.3, 0.12), dry = new THREE.Color(0.6, 0.55, 0.26), dead = new THREE.Color(0.44, 0.35, 0.2);
  const greens = [lush, mid, yellowGreen, blueGreen, mid, lush];
  const flowers = [];
  let count = 0, attempts = 0;
  while (count < maxCount && attempts < 600000) {
    attempts++;
    const u = range(bounds.uMin, bounds.uMax, rng), v = range(bounds.vMin, bounds.vMax, rng);
    const info = terrainInfo(u, v);
    let density = grassDensity(u, v, info);
    if (exclusions.some((zone) => Math.hypot(u - zone.u, v - zone.v) < zone.radius)) density *= 0.1;
    if (rng() > density) continue;
    // кустик: 6..26 травинок, веером от центра
    const clumpBlades = 10 + Math.floor(rng() * 26 * (0.4 + density * 0.6));
    const clumpRadius = 0.035 + rng() * 0.08;
    const tallness = smoothstep(-0.4, 0.35, fbm2(u * 0.22 + 5, v * 0.22, 3));
    const clumpHeight = (0.06 + tallness * 0.24) * (0.7 + rng() * 0.6);
    const dryness = smoothstep(0.0, 0.35, fbm2(u * 0.11 - 4, v * 0.11 + 7, 4)) * 0.8 + rng() * 0.15;
    const clumpColor = greens[Math.floor(rng() * greens.length)];
    const center = toXZ(u, v);
    for (let blade = 0; blade < clumpBlades && count < maxCount; blade++) {
      const angle = rng() * Math.PI * 2;
      const distance = Math.sqrt(rng()) * clumpRadius;
      const x = center.x + Math.cos(angle) * distance, z = center.y + Math.sin(angle) * distance;
      position.set(x, info.height - 0.01, z);
      const outward = distance / clumpRadius;
      euler.set(0.08 + outward * 0.45 + rng() * 0.2, angle + Math.PI / 2 + range(-0.5, 0.5, rng), range(-0.15, 0.15, rng));
      quaternion.setFromEuler(euler);
      const stalk = rng() < 0.012;
      const height = stalk ? 0.38 + rng() * 0.2 : clumpHeight * (0.55 + rng() * 0.7);
      scale.set(stalk ? 0.5 : 0.8 + rng() * 0.6, height, 1);
      matrix.compose(position, quaternion, scale);
      mesh.setMatrixAt(count, matrix);
      const roll = rng();
      if (stalk || roll < 0.05) color.copy(dead).lerp(dry, rng());
      else if (roll < 0.05 + dryness * 0.35) color.copy(dry).lerp(clumpColor, rng() * 0.5);
      else color.copy(clumpColor).lerp(greens[Math.floor(rng() * greens.length)], rng() * 0.6).lerp(dry, dryness * 0.35);
      color.multiplyScalar(0.85 + rng() * 0.3);
      mesh.setColorAt(count, color);
      if (stalk) flowers.push({ x, z, y: info.height + height * 0.95, kind: 'seed' });
      count++;
    }
    if (rng() < 0.035 * density) flowers.push({ x: center.x, z: center.y, y: info.height + clumpHeight * 0.9, kind: 'flower' });
  }
  mesh.count = count;
  mesh.receiveShadow = true;
  mesh.castShadow = false;
  const group = new THREE.Group();
  group.add(mesh);

  // колоски и мелкие цветы
  const flowerMesh = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 0), new THREE.MeshStandardMaterial({ roughness: 0.6 }), flowers.length);
  const palette = [new THREE.Color(0.95, 0.92, 0.8), new THREE.Color(0.95, 0.8, 0.2), new THREE.Color(0.62, 0.48, 0.85)];
  flowers.forEach((flower, index) => {
    const size = flower.kind === 'seed' ? 0.012 : 0.016;
    matrix.compose(new THREE.Vector3(flower.x, flower.y, flower.z), new THREE.Quaternion(), new THREE.Vector3(size, flower.kind === 'seed' ? size * 2.5 : size, size));
    flowerMesh.setMatrixAt(index, matrix);
    flowerMesh.setColorAt(index, flower.kind === 'seed' ? color.setRGB(0.6, 0.5, 0.28) : palette[Math.floor(rng() * palette.length)]);
  });
  flowerMesh.receiveShadow = true;
  group.add(flowerMesh);
  return group;
}

// ---------- камни ----------

let rockMaterialCache = null;
export function rockMaterial() {
  if (!rockMaterialCache) {
    const textures = rockTextures(3, [132, 122, 106]);
    rockMaterialCache = new THREE.MeshStandardMaterial({ map: textures.map, normalMap: textures.normalMap, normalScale: new THREE.Vector2(1.2, 1.2), roughness: 0.9, vertexColors: true });
  }
  return rockMaterialCache;
}

export function buildRock(u, v, radius, seed, options = {}) {
  const geometry = rockGeometry(radius, seed, options);
  // мох сверху
  const normal = geometry.attributes.normal, position = geometry.attributes.position;
  const colors = new Float32Array(position.count * 3);
  for (let index = 0; index < position.count; index++) {
    const moss = smoothstep(0.55, 0.9, normal.getY(index)) * (0.5 + fbm2(position.getX(index) * 3 + seed, position.getZ(index) * 3, 2));
    colors[index * 3] = 1 - moss * 0.55;
    colors[index * 3 + 1] = 1 - moss * 0.25;
    colors[index * 3 + 2] = 1 - moss * 0.7;
  }
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const mesh = new THREE.Mesh(geometry, rockMaterial());
  const xz = toXZ(u, v);
  mesh.position.set(xz.x, heightAt(xz.x, xz.y) + radius * (options.lift ?? 0.25), xz.y);
  mesh.rotation.y = seed * 1.7;
  mesh.castShadow = mesh.receiveShadow = true;
  return mesh;
}

export function buildPebbles(bounds, count = 900) {
  const rng = mulberry32(19);
  const geometry = rockGeometry(1, 5, { detail: 1, roughness: 0.3, flatten: 0.6 });
  const colors = new Float32Array(geometry.attributes.position.count * 3).fill(1);
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const mesh = new THREE.InstancedMesh(geometry, rockMaterial(), count);
  const matrix = new THREE.Matrix4(), color = new THREE.Color();
  let placed = 0;
  for (let attempt = 0; attempt < count * 6 && placed < count; attempt++) {
    const u = range(bounds.uMin, bounds.uMax, rng), v = range(bounds.vMin, bounds.vMax, rng);
    const info = terrainInfo(u, v);
    const chance = 0.05 + info.path * 0.3 + info.trenchRim * 0.6 + info.ring * 0.5;
    if (rng() > chance) continue;
    const size = 0.025 + rng() * rng() * 0.11;
    const xz = toXZ(u, v);
    matrix.compose(new THREE.Vector3(xz.x, info.height + size * 0.2, xz.y), new THREE.Quaternion().setFromEuler(new THREE.Euler(rng(), rng() * 6, rng())), new THREE.Vector3(size, size, size));
    mesh.setMatrixAt(placed, matrix);
    const tone = 0.7 + rng() * 0.45;
    mesh.setColorAt(placed, color.setRGB(tone, tone * 0.97, tone * 0.92));
    placed++;
  }
  mesh.count = placed;
  mesh.castShadow = mesh.receiveShadow = true;
  return mesh;
}

// ---------- деревья и кусты ----------

let barkCache = null;
function barkMaterial() {
  if (!barkCache) {
    const textures = barkTextures();
    textures.map.repeat.set(2, 3);
    textures.normalMap.repeat.set(2, 3);
    barkCache = new THREE.MeshStandardMaterial({ map: textures.map, normalMap: textures.normalMap, normalScale: new THREE.Vector2(1.5, 1.5), roughness: 0.95 });
  }
  return barkCache;
}

const leafTextures = {};
export function leafMaterial(kind) {
  if (!leafTextures[kind]) {
    const map = leafClusterTexture(kind === 'broad' ? 3 : 8, kind);
    const material = new THREE.MeshStandardMaterial({ map, alphaTest: 0.45, side: THREE.DoubleSide, roughness: 0.8 });
    const depth = new THREE.MeshDepthMaterial({ map, alphaTest: 0.45, depthPacking: THREE.RGBADepthPacking, side: THREE.DoubleSide });
    leafTextures[kind] = { material, depth };
  }
  return leafTextures[kind];
}

function foliage(clusters, palette, rng, { cards = 60, cardSize = 0.9, kind = 'broad' } = {}) {
  const total = clusters.length * cards;
  const { material, depth } = leafMaterial(kind);
  const geometry = new THREE.PlaneGeometry(cardSize, cardSize);
  const mesh = new THREE.InstancedMesh(geometry, material, total);
  mesh.customDepthMaterial = depth;
  const matrix = new THREE.Matrix4(), color = new THREE.Color();
  let index = 0;
  for (const cluster of clusters) {
    for (let card = 0; card < cards; card++) {
      const direction = new THREE.Vector3(rng() * 2 - 1, rng() * 2 - 1, rng() * 2 - 1).normalize();
      const distance = Math.cbrt(rng()) * cluster.radius;
      const position = cluster.center.clone().addScaledVector(direction, distance);
      position.y -= Math.max(0, -direction.y) * distance * 0.35;
      const quaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler(rng() * Math.PI, rng() * Math.PI * 2, rng() * Math.PI));
      const scale = 0.7 + rng() * 0.6;
      matrix.compose(position, quaternion, new THREE.Vector3(scale, scale, scale));
      mesh.setMatrixAt(index, matrix);
      // внешние и верхние листья светлее
      const light = 0.65 + direction.y * 0.2 + (distance / cluster.radius) * 0.25 + rng() * 0.15;
      color.copy(palette[Math.floor(rng() * palette.length)]).multiplyScalar(light);
      mesh.setColorAt(index, color);
      index++;
    }
  }
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

export function buildTree(u, v, { height = 6, spread = 2.6, seed = 1, palette, cards = 70, kind = 'broad', lean = 0 } = {}) {
  const rng = mulberry32(seed);
  const tree = new THREE.Group();
  const xz = toXZ(u, v);
  tree.position.set(xz.x, heightAt(xz.x, xz.y) - 0.05, xz.y);
  const bark = barkMaterial();
  // ствол
  const trunkPoints = [new THREE.Vector3(0, 0, 0)];
  for (let step = 1; step <= 5; step++) {
    const last = trunkPoints[trunkPoints.length - 1];
    trunkPoints.push(last.clone().add(new THREE.Vector3(range(-0.15, 0.15, rng) + lean * 0.1, height * 0.6 / 5, range(-0.15, 0.15, rng))));
  }
  for (let step = 0; step < trunkPoints.length - 1; step++) {
    const radius = 0.26 * (1 - step / 6) + 0.05;
    tree.add(segment(trunkPoints[step], trunkPoints[step + 1], radius, radius * 0.85, bark, 10));
  }
  // корни
  for (let root = 0; root < 5; root++) {
    const angle = root / 5 * Math.PI * 2 + rng();
    tree.add(segment(new THREE.Vector3(0, 0.25, 0), new THREE.Vector3(Math.cos(angle) * 0.6, -0.05, Math.sin(angle) * 0.6), 0.12, 0.03, bark, 6));
  }
  // ветви и кроны
  const clusters = [];
  const top = trunkPoints[trunkPoints.length - 1];
  const branchCount = 7;
  for (let branch = 0; branch < branchCount; branch++) {
    const angle = branch / branchCount * Math.PI * 2 + rng() * 0.6;
    const start = trunkPoints[3 + Math.floor(rng() * 3)].clone();
    const reach = spread * (0.6 + rng() * 0.5);
    const end = start.clone().add(new THREE.Vector3(Math.cos(angle) * reach, height * (0.15 + rng() * 0.3), Math.sin(angle) * reach));
    tree.add(segment(start, end, 0.11, 0.04, bark, 7));
    const middle = start.clone().lerp(end, 0.6);
    const twig = middle.clone().add(new THREE.Vector3(range(-0.6, 0.6, rng), 0.6 + rng() * 0.6, range(-0.6, 0.6, rng)));
    tree.add(segment(middle, twig, 0.05, 0.02, bark, 5));
    clusters.push({ center: end.clone().add(new THREE.Vector3(0, 0.3, 0)), radius: 1.1 + rng() * 0.5 });
    clusters.push({ center: twig.clone(), radius: 0.8 + rng() * 0.4 });
  }
  clusters.push({ center: top.clone().add(new THREE.Vector3(0, height * 0.25, 0)), radius: spread * 0.7 });
  clusters.push({ center: top.clone().add(new THREE.Vector3(0, height * 0.08, 0)), radius: spread * 0.8 });
  tree.add(foliage(clusters, palette, rng, { cards, kind }));
  setShadows(tree);
  return tree;
}

export function buildBush(u, v, { radius = 0.8, seed = 1, palette, cards = 40 } = {}) {
  const rng = mulberry32(seed);
  const xz = toXZ(u, v);
  const bush = new THREE.Group();
  bush.position.set(xz.x, heightAt(xz.x, xz.y), xz.y);
  const clusters = [];
  for (let index = 0; index < 4; index++) {
    clusters.push({ center: new THREE.Vector3(range(-radius, radius, rng) * 0.6, radius * (0.5 + rng() * 0.4), range(-radius, radius, rng) * 0.6), radius: radius * (0.55 + rng() * 0.3) });
  }
  bush.add(foliage(clusters, palette, rng, { cards, cardSize: 0.6 }));
  for (let stem = 0; stem < 5; stem++) {
    bush.add(segment(new THREE.Vector3(0, 0, 0), new THREE.Vector3(range(-0.4, 0.4, rng), radius * 0.8, range(-0.4, 0.4, rng)), 0.03, 0.01, barkMaterial(), 5));
  }
  return bush;
}

export function buildLeafLitter(centerU, centerV, radius, palette, count = 400, seed = 4) {
  const rng = mulberry32(seed);
  const geometry = new THREE.PlaneGeometry(0.09, 0.07);
  geometry.rotateX(-Math.PI / 2);
  const material = new THREE.MeshStandardMaterial({ roughness: 0.9, side: THREE.DoubleSide });
  const mesh = new THREE.InstancedMesh(geometry, material, count);
  const matrix = new THREE.Matrix4(), color = new THREE.Color();
  for (let index = 0; index < count; index++) {
    const angle = rng() * Math.PI * 2, distance = Math.sqrt(rng()) * radius;
    const u = centerU + Math.cos(angle) * distance, v = centerV + Math.sin(angle) * distance;
    const xz = toXZ(u, v);
    matrix.compose(new THREE.Vector3(xz.x, heightAt(xz.x, xz.y) + 0.015, xz.y), new THREE.Quaternion().setFromEuler(new THREE.Euler(range(-0.3, 0.3, rng), rng() * 6, range(-0.3, 0.3, rng))), new THREE.Vector3(1, 1, 1));
    mesh.setMatrixAt(index, matrix);
    mesh.setColorAt(index, color.copy(palette[Math.floor(rng() * palette.length)]).multiplyScalar(0.7 + rng() * 0.4));
  }
  mesh.receiveShadow = true;
  return mesh;
}

export function buildLog(u, v, length, angle, seed = 2) {
  const xz = toXZ(u, v);
  const log = new THREE.Group();
  log.position.set(xz.x, heightAt(xz.x, xz.y) + 0.18, xz.y);
  log.rotation.y = angle;
  const half = length / 2;
  log.add(segment(new THREE.Vector3(-half, 0, 0), new THREE.Vector3(half, 0.05, 0), 0.22, 0.17, barkMaterial(), 12));
  const cut = new THREE.Mesh(new THREE.CircleGeometry(0.17, 12), new THREE.MeshStandardMaterial({ color: 0x9c8466, roughness: 0.9 }));
  cut.position.set(half + 0.001, 0.05, 0);
  cut.rotation.y = Math.PI / 2;
  log.add(cut);
  log.add(segment(new THREE.Vector3(-0.3, 0.1, 0), new THREE.Vector3(-0.1, 0.6, 0.3), 0.05, 0.02, barkMaterial(), 5));
  return setShadows(log);
}

// ---------- корабль ----------

function craftMaterials() {
  const floor = metalPanelTextures({ base: [92, 98, 102], plates: 4, seed: 2, grime: 0.25 });
  floor.map.repeat.set(0.3, 0.3); floor.normalMap.repeat.set(0.3, 0.3); floor.roughnessMap.repeat.set(0.3, 0.3);
  const inner = metalPanelTextures({ base: [128, 136, 142], plates: 3, seed: 4, grime: 0.25 });
  inner.map.repeat.set(0.45, 0.45); inner.normalMap.repeat.set(0.45, 0.45);
  const hull = metalPanelTextures({ base: [74, 80, 86], plates: 2, seed: 6, grime: 0.7 });
  hull.map.repeat.set(0.35, 0.35); hull.normalMap.repeat.set(0.35, 0.35);
  return {
    floor: new THREE.MeshStandardMaterial({ map: floor.map, normalMap: floor.normalMap, normalScale: new THREE.Vector2(0.35, 0.35), roughness: 0.78, metalness: 0.35 }),
    inner: new THREE.MeshStandardMaterial({ map: inner.map, normalMap: inner.normalMap, normalScale: new THREE.Vector2(0.5, 0.5), roughness: 0.7, metalness: 0.15, side: THREE.DoubleSide }),
    hull: new THREE.MeshStandardMaterial({ map: hull.map, normalMap: hull.normalMap, normalScale: new THREE.Vector2(0.6, 0.6), roughness: 0.5, metalness: 0.55, color: 0xc8d4dc, side: THREE.DoubleSide }),
    torn: new THREE.MeshStandardMaterial({ color: 0x8a8e90, roughness: 0.35, metalness: 0.7, side: THREE.DoubleSide }),
    rib: new THREE.MeshStandardMaterial({ color: 0x4c5458, roughness: 0.5, metalness: 0.8 }),
    pipe: new THREE.MeshStandardMaterial({ color: 0x3c4246, roughness: 0.4, metalness: 0.85 }),
    cable: new THREE.MeshStandardMaterial({ color: 0x15181a, roughness: 0.7 }),
    lightStrip: new THREE.MeshStandardMaterial({ color: 0xbff8ff, emissive: 0x6ff0ff, emissiveIntensity: 3 }),
    console: new THREE.MeshStandardMaterial({ color: 0x2a3034, roughness: 0.45, metalness: 0.7 }),
    seat: new THREE.MeshPhysicalMaterial({ color: 0x2e3532, roughness: 0.35, metalness: 0.3, clearcoat: 0.7 }),
    core: new THREE.MeshStandardMaterial({ color: 0xc8ffd8, emissive: 0x3dff86, emissiveIntensity: 3.2 }),
    glass: new THREE.MeshPhysicalMaterial({ color: 0x9fe8c0, roughness: 0.05, metalness: 0, transparent: true, opacity: 0.22, clearcoat: 1, depthWrite: false }),
    scorch: new THREE.MeshBasicMaterial({ color: 0x050505, transparent: true, opacity: 0.55, depthWrite: false }),
  };
}

// высота стены в точке периметра: срез «как у макета» к зрителю, рваный край
function wallHeightAt(localU, localV, perimeterT) {
  const depth = (localV / CRAFT.radius);           // -1 сзади .. +1 спереди
  let height = 3.6 - smoothstep(-0.55, 0.45, depth) * 3.05;
  const cut = height < 3.4;
  if (cut) height += (noise2(perimeterT * 9, 1.7) * 0.5 + noise2(perimeterT * 31, 4.1) * 0.22);
  return Math.max(0.15, height);
}

function wallGeometry(points, thickness, heightFunction) {
  // points: [{u, v, t}] вдоль периметра; стенка между внешним и внутренним контуром
  const positions = [], uvs = [], indices = [], groups = [];
  const center = new THREE.Vector2(0, 0);
  const pushQuad = (a, b, c, d, materialIndex, uvA, uvB, uvC, uvD) => {
    const base = positions.length / 3;
    positions.push(...a, ...b, ...c, ...d);
    uvs.push(...uvA, ...uvB, ...uvC, ...uvD);
    indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
    groups.push(materialIndex);
  };
  let perimeter = 0;
  for (let index = 0; index < points.length - 1; index++) {
    const p0 = points[index], p1 = points[index + 1];
    const h0 = p0.height, h1 = p1.height;
    const out0 = toXZ(p0.u, p0.v), out1 = toXZ(p1.u, p1.v);
    const in0 = out0.clone().multiplyScalar(1 - thickness / CRAFT.radius), in1 = out1.clone().multiplyScalar(1 - thickness / CRAFT.radius);
    const length = out0.distanceTo(out1);
    const floor = CRAFT.floor, bottom = -0.1;
    if (h0 > 0.01 || h1 > 0.01) {
      // внешняя сторона (обход по часовой при взгляде снаружи)
      pushQuad([out0.x, bottom, out0.y], [out0.x, h0, out0.y], [out1.x, h1, out1.y], [out1.x, bottom, out1.y], 0,
        [perimeter, bottom], [perimeter, h0], [perimeter + length, h1], [perimeter + length, bottom]);
      // внутренняя сторона
      pushQuad([in1.x, floor, in1.y], [in1.x, h1, in1.y], [in0.x, h0, in0.y], [in0.x, floor, in0.y], 1,
        [perimeter + length, floor], [perimeter + length, h1], [perimeter, h0], [perimeter, floor]);
      // верхняя кромка
      pushQuad([out0.x, h0, out0.y], [in0.x, h0, in0.y], [in1.x, h1, in1.y], [out1.x, h1, out1.y], 2,
        [0, 0], [0, 1], [1, 1], [1, 0]);
    }
    perimeter += length;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  groups.forEach((materialIndex, quad) => geometry.addGroup(quad * 6, 6, materialIndex));
  geometry.computeVertexNormals();
  return geometry;
}

export function buildCraft() {
  const materials = craftMaterials();
  const craft = new THREE.Group();
  const centerXZ = toXZ(CRAFT.u, CRAFT.v);
  craft.position.set(centerXZ.x, 0, centerXZ.y);
  craft.userData.lights = [];
  const sides = 10;
  const angleOffset = Math.PI / sides;
  const corner = (index) => {
    const angle = index / sides * Math.PI * 2 + angleOffset;
    return { u: Math.cos(angle) * CRAFT.radius, v: Math.sin(angle) * CRAFT.radius };
  };

  // пол
  const shape = new THREE.Shape();
  for (let index = 0; index < sides; index++) {
    const point = toXZ(corner(index).u, corner(index).v);
    if (index === 0) shape.moveTo(point.x, -point.y); else shape.lineTo(point.x, -point.y);
  }
  const floorGeometry = new THREE.ExtrudeGeometry(shape, { depth: CRAFT.floor + 0.12, bevelEnabled: false });
  floorGeometry.rotateX(-Math.PI / 2);
  floorGeometry.translate(0, -0.12, 0);
  const floorMesh = new THREE.Mesh(floorGeometry, [materials.floor, materials.hull]);
  floorMesh.receiveShadow = true; floorMesh.castShadow = true;
  craft.add(floorMesh);

  // юбка корпуса (край тарелки)
  const skirt = new THREE.Mesh(new THREE.CylinderGeometry(CRAFT.radius + 0.35, CRAFT.radius + 0.75, 0.5, sides, 1, true), materials.hull);
  skirt.rotation.y = -Math.PI / 4 + angleOffset;
  skirt.position.y = 0.05;
  skirt.castShadow = skirt.receiveShadow = true;
  craft.add(skirt);

  // стены по периметру, с проломом
  const samples = [];
  const samplesPerEdge = 22;
  const breach = { from: 0.645, to: 0.705 };   // доля периметра
  for (let index = 0; index <= sides * samplesPerEdge; index++) {
    const edge = Math.floor(index / samplesPerEdge) % sides;
    const t = (index % samplesPerEdge) / samplesPerEdge;
    const a = corner(edge), b = corner(edge + 1);
    const u = a.u + (b.u - a.u) * t, v = a.v + (b.v - a.v) * t;
    const perimeterT = index / (sides * samplesPerEdge);
    let height = wallHeightAt(u, v, perimeterT);
    if (perimeterT > breach.from && perimeterT < breach.to) height = 0;
    else if (perimeterT > breach.from - 0.02 && perimeterT < breach.to + 0.02) height *= 0.5 + noise2(perimeterT * 50, 2) * 0.4;
    samples.push({ u, v, height, perimeterT });
  }
  const walls = new THREE.Mesh(wallGeometry(samples, 0.28), [materials.hull, materials.inner, materials.torn]);
  walls.castShadow = walls.receiveShadow = true;
  craft.add(walls);

  // рёбра жёсткости, трубы и световые полосы на высоких стенах
  const innerPoint = (u, v, inset, y) => {
    const scale = 1 - inset / CRAFT.radius;
    const xz = toXZ(u * scale, v * scale);
    return new THREE.Vector3(xz.x, y, xz.y);
  };
  samples.forEach((sample, index) => {
    if (index % 11 !== 0 || sample.height < 2.2) return;
    const top = sample.height - 0.12;
    const rib = segment(innerPoint(sample.u, sample.v, 0.36, CRAFT.floor), innerPoint(sample.u, sample.v, 0.36, top), 0.09, 0.08, materials.rib, 6);
    craft.add(rib);
    craft.add(segment(innerPoint(sample.u, sample.v, 0.3, top), innerPoint(sample.u, sample.v, 1.1, top + 0.15), 0.07, 0.05, materials.rib, 6));
  });
  // непрерывные участки периметра, где выполняется условие (с учётом замыкания кольца)
  const runs = (predicate) => {
    const flags = samples.map(predicate);
    const result = [];
    let current = [];
    flags.forEach((flag, index) => {
      if (flag) current.push(samples[index]);
      else if (current.length) { result.push(current); current = []; }
    });
    if (current.length) {
      if (flags[0] && result.length) result[0] = current.concat(result[0]);
      else result.push(current);
    }
    return result.filter((run) => run.length > 3);
  };
  const tubeAlong = (run, inset, y, radius, material, radial = 8) => {
    const points = run.map((sample) => innerPoint(sample.u, sample.v, inset, y));
    const mesh = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), points.length * 2, radius, radial), material);
    mesh.castShadow = true;
    craft.add(mesh);
  };
  for (const run of runs((sample) => sample.height > 3.0)) {
    tubeAlong(run, 0.42, 2.1, 0.05, materials.pipe);
    tubeAlong(run, 0.42, 2.25, 0.035, materials.pipe);
    tubeAlong(run, 0.45, 2.75, 0.06, materials.pipe);
    tubeAlong(run, 0.32, 3.1, 0.025, materials.lightStrip, 6);
  }
  for (const run of runs((sample) => sample.height > 0.6)) tubeAlong(run, 0.34, CRAFT.floor + 0.05, 0.018, materials.lightStrip, 5);

  // реактор
  const reactor = new THREE.Group();
  const reactorXZ = toXZ(0.2, 0.3);
  reactor.position.set(reactorXZ.x, CRAFT.floor, reactorXZ.y);
  const addPart = (mesh, y) => { mesh.position.y = y; mesh.castShadow = mesh.receiveShadow = true; reactor.add(mesh); return mesh; };
  addPart(new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.15, 0.22, 24), materials.console), 0.11);
  addPart(new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.85, 0.3, 24), materials.rib), 0.37);
  addPart(new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 2.3, 16), materials.core), 1.65).castShadow = false;
  addPart(new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 2.3, 24, 1, true), materials.glass), 1.65).castShadow = false;
  for (let ring = 0; ring < 5; ring++) {
    addPart(new THREE.Mesh(new THREE.TorusGeometry(0.39, 0.045, 8, 28).rotateX(Math.PI / 2), materials.rib), 0.75 + ring * 0.45);
  }
  addPart(new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.42, 0.3, 24), materials.rib), 2.9);
  for (let strut = 0; strut < 4; strut++) {
    const angle = strut * Math.PI / 2 + 0.4;
    reactor.add(segment(new THREE.Vector3(Math.cos(angle) * 0.8, 0.5, Math.sin(angle) * 0.8), new THREE.Vector3(Math.cos(angle) * 0.42, 2.8, Math.sin(angle) * 0.42), 0.05, 0.04, materials.pipe, 6));
  }
  const reactorLight = new THREE.PointLight(0x5dff9a, 7, 7, 1.8);
  for (const [u, v] of [[-1.5, -1.8], [2.2, -1.2], [0.0, 1.8]]) {
    const fill = new THREE.PointLight(0xe6f2ff, 2.2, 8, 1.6);
    const xz = toXZ(u, v);
    fill.position.set(xz.x, 3.4, xz.y);
    craft.add(fill);
  }
  reactorLight.position.set(0, 1.6, 0);
  reactor.add(reactorLight);
  craft.add(reactor);
  craft.userData.reactor = reactor;

  // пульты у задней стены
  const consoles = [
    { u: -2.2, v: -3.6, angle: 0.55, color: '#7affd0', kind: 'wave' },
    { u: 1.3, v: -4.1, angle: 0, color: '#ffb347', kind: 'text' },
    { u: 3.9, v: -2.2, angle: -0.75, color: '#7affd0', kind: 'text' },
  ];
  consoles.forEach((spec, index) => {
    const consoleGroup = new THREE.Group();
    const xz = toXZ(spec.u, spec.v);
    consoleGroup.position.set(xz.x, CRAFT.floor, xz.y);
    // повернуть лицом к центру
    consoleGroup.lookAt(craft.position.x * 0, CRAFT.floor, 0);
    consoleGroup.rotation.y = Math.atan2(-xz.x, -xz.y);
    const base = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.95, 0.55), materials.console);
    base.position.y = 0.47;
    consoleGroup.add(base);
    const top = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.08, 0.7), materials.console);
    top.position.set(0, 0.98, 0.08); top.rotation.x = 0.45;
    consoleGroup.add(top);
    const screenMaterial = new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0xffffff, emissiveMap: screenTexture(spec.color, index + 3, spec.kind), emissiveIntensity: 1.6 });
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 0.55), screenMaterial);
    screen.position.set(0, 1.03, 0.1); screen.rotation.x = -Math.PI / 2 + 0.45;
    consoleGroup.add(screen);
    const tall = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.9, 0.08), materials.console);
    tall.position.set(0, 1.55, -0.25); tall.rotation.x = -0.15;
    consoleGroup.add(tall);
    const upperScreen = new THREE.Mesh(new THREE.PlaneGeometry(1.15, 0.72), new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0xffffff, emissiveMap: screenTexture(spec.color, index + 9, index === 1 ? 'wave' : 'text'), emissiveIntensity: 1.4 }));
    upperScreen.position.set(0, 1.56, -0.205); upperScreen.rotation.x = -0.15;
    consoleGroup.add(upperScreen);
    setShadows(consoleGroup);
    screen.castShadow = upperScreen.castShadow = false;
    const glow = new THREE.PointLight(new THREE.Color(spec.color), 3, 3.5, 2);
    glow.position.set(0, 1.4, 0.6);
    consoleGroup.add(glow);
    craft.add(consoleGroup);
  });

  // кресла
  const seatSpecs = [{ u: -1.6, v: -1.6 }, { u: 2.4, v: -1.8 }, { u: -2.3, v: 1.1 }];
  seatSpecs.forEach((spec) => {
    const seat = new THREE.Group();
    const xz = toXZ(spec.u, spec.v);
    seat.position.set(xz.x, CRAFT.floor, xz.y);
    seat.rotation.y = Math.atan2(-xz.x, -xz.y) + Math.PI;
    const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.25, 0.5, 12), materials.rib);
    pedestal.position.y = 0.25;
    seat.add(pedestal);
    const cushion = new THREE.Mesh(new THREE.SphereGeometry(0.42, 16, 10), materials.seat);
    cushion.scale.set(1, 0.28, 1); cushion.position.y = 0.58;
    seat.add(cushion);
    const back = new THREE.Mesh(new THREE.SphereGeometry(0.45, 16, 12, 0, Math.PI), materials.seat);
    back.scale.set(0.9, 2.0, 0.35); back.position.set(0, 1.2, 0.28); back.rotation.y = Math.PI;
    seat.add(back);
    setShadows(seat);
    craft.add(seat);
  });

  // кабели по полу
  const cable = (from, to, lift = 0.05) => {
    const start = toXZ(from[0], from[1]), end = toXZ(to[0], to[1]);
    const middle = start.clone().lerp(end, 0.5).add(new THREE.Vector2(0.4, -0.3));
    const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(start.x, CRAFT.floor + lift, start.y), new THREE.Vector3(middle.x, CRAFT.floor + lift, middle.y), new THREE.Vector3(end.x, CRAFT.floor + lift, end.y)]);
    const mesh = new THREE.Mesh(new THREE.TubeGeometry(curve, 20, 0.045, 6), materials.cable);
    mesh.castShadow = mesh.receiveShadow = true;
    craft.add(mesh);
  };
  cable([0.2, 0.3], [-2.2, -3.4]);
  cable([0.2, 0.3], [1.3, -3.8]);
  cable([0.2, 0.3], [3.7, -2.0]);
  cable([-0.3, 0.6], [-3.4, 2.4]);

  // подпалины на полу у пролома
  for (const [u, v, radius] of [[-2.1, 3.2, 1.4], [-1.0, 2.2, 0.9], [-3.0, 2.6, 0.8]]) {
    const xz = toXZ(u, v);
    const decal = new THREE.Mesh(new THREE.CircleGeometry(radius, 24), materials.scorch);
    decal.rotation.x = -Math.PI / 2;
    decal.position.set(xz.x, CRAFT.floor + 0.012, xz.y);
    craft.add(decal);
  }

  craft.userData.materials = materials;
  craft.userData.breachUV = { u: CRAFT.u - 2.5, v: CRAFT.v + 4.3 };
  return craft;
}

// обломки обшивки
export function buildDebris(centerU, centerV, count, spread, seed = 9) {
  const rng = mulberry32(seed);
  const group = new THREE.Group();
  const material = new THREE.MeshStandardMaterial({ color: 0x5c6468, roughness: 0.4, metalness: 0.85 });
  const darkMaterial = new THREE.MeshStandardMaterial({ color: 0x2e3234, roughness: 0.6, metalness: 0.6 });
  for (let index = 0; index < count; index++) {
    const u = centerU + range(-spread, spread, rng), v = centerV + range(-spread * 0.7, spread * 0.7, rng);
    const xz = toXZ(u, v);
    const size = 0.1 + rng() * rng() * 0.6;
    const geometry = new THREE.BoxGeometry(size, 0.02 + rng() * 0.03, size * (0.3 + rng() * 0.6));
    const position = geometry.attributes.position;
    for (let vertex = 0; vertex < position.count; vertex++) {
      position.setX(vertex, position.getX(vertex) * (0.6 + rng() * 0.8));
      position.setZ(vertex, position.getZ(vertex) * (0.6 + rng() * 0.8));
    }
    geometry.computeVertexNormals();
    const shard = new THREE.Mesh(geometry, rng() < 0.7 ? material : darkMaterial);
    shard.position.set(xz.x, heightAt(xz.x, xz.y) + 0.03, xz.y);
    shard.rotation.set(range(-0.6, 0.6, rng), rng() * 6, range(-0.6, 0.6, rng));
    shard.castShadow = shard.receiveShadow = true;
    group.add(shard);
  }
  return group;
}

// дым: мягкие спрайты
export function buildSmoke(u, v, baseY, seed = 2, puffs = 14, tint = 0x6a6e6c) {
  const rng = mulberry32(seed);
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  const ctx = canvas.getContext('2d');
  for (let blob = 0; blob < 22; blob++) {
    const x = 64 + range(-26, 26, rng), y = 64 + range(-26, 26, rng), radius = 18 + rng() * 26;
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, 'rgba(255,255,255,0.22)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);
  }
  const texture = canvasTexture(canvas);
  const group = new THREE.Group();
  const xz = toXZ(u, v);
  for (let index = 0; index < puffs; index++) {
    const material = new THREE.SpriteMaterial({ map: texture, color: tint, transparent: true, opacity: 0.55 * (1 - index / puffs) + 0.1, depthWrite: false });
    const sprite = new THREE.Sprite(material);
    const rise = index * 0.55;
    sprite.position.set(xz.x + rise * 0.35 + range(-0.3, 0.3, rng), baseY + rise, xz.y - rise * 0.2 + range(-0.3, 0.3, rng));
    const size = 1.2 + index * 0.35;
    sprite.scale.set(size, size, 1);
    group.add(sprite);
  }
  return group;
}

export function glowSprite(color, size, opacity = 1) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.25, 'rgba(255,255,255,0.55)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: canvasTexture(canvas), color, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false }));
  sprite.scale.set(size, size, 1);
  return sprite;
}
