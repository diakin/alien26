// Процедурная модель шагающего меха (оригинальный дизайн) на three.js.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

// ---------- вспомогательные функции ----------

function mulberry32(seedValue) {
  let state = seedValue >>> 0;
  return function () {
    state += 0x6D2B79F5;
    let temp = state;
    temp = Math.imul(temp ^ (temp >>> 15), temp | 1);
    temp ^= temp + Math.imul(temp ^ (temp >>> 7), temp | 61);
    return ((temp ^ (temp >>> 14)) >>> 0) / 4294967296;
  };
}

// Текстура окраски с пятнами, грязью, шумом и царапинами.
function createGrimeTexture({ baseColor, blotches, seed = 1, size = 512, scratchColor, noiseAmount = 14, blotchCount = 260, radiusMin = 5, radiusMax = 51 }) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const random = mulberry32(seed);

  ctx.fillStyle = baseColor;
  ctx.fillRect(0, 0, size, size);

  for (let index = 0; index < blotchCount; index++) {
    const posX = random() * size;
    const posY = random() * size;
    const radius = radiusMin + random() * (radiusMax - radiusMin);
    const blotchColor = blotches[Math.floor(random() * blotches.length)];
    // рисуем с переносом через края, чтобы текстура тайлилась
    for (const shiftX of [-size, 0, size]) {
      for (const shiftY of [-size, 0, size]) {
        const centerX = posX + shiftX;
        const centerY = posY + shiftY;
        if (centerX + radius < 0 || centerX - radius > size || centerY + radius < 0 || centerY - radius > size) continue;
        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
        gradient.addColorStop(0, blotchColor);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  const image = ctx.getImageData(0, 0, size, size);
  const pixels = image.data;
  for (let index = 0; index < pixels.length; index += 4) {
    const delta = (random() - 0.5) * noiseAmount;
    pixels[index] += delta;
    pixels[index + 1] += delta;
    pixels[index + 2] += delta;
  }
  ctx.putImageData(image, 0, 0);

  if (scratchColor) {
    ctx.strokeStyle = scratchColor;
    ctx.lineCap = 'round';
    for (let index = 0; index < 45; index++) {
      const startX = random() * size;
      const startY = random() * size;
      const length = 4 + random() * 22;
      const angle = random() * Math.PI * 2;
      ctx.lineWidth = 0.6 + random() * 1.4;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(startX + Math.cos(angle) * length, startY + Math.sin(angle) * length);
      ctx.stroke();
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = 4;
  return texture;
}

function createMarkingTexture(label) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 256, 256);
  // полоса предупреждения
  ctx.save();
  ctx.beginPath();
  ctx.rect(20, 26, 216, 26);
  ctx.clip();
  for (let stripe = -2; stripe < 12; stripe++) {
    ctx.fillStyle = stripe % 2 === 0 ? '#d9822b' : '#2b2b26';
    ctx.beginPath();
    ctx.moveTo(20 + stripe * 24, 52);
    ctx.lineTo(44 + stripe * 24, 26);
    ctx.lineTo(56 + stripe * 24, 26);
    ctx.lineTo(32 + stripe * 24, 52);
    ctx.fill();
  }
  ctx.restore();
  ctx.fillStyle = 'rgba(236,232,214,0.92)';
  ctx.font = 'bold 120px Arial, Helvetica, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(label, 128, 150);
  ctx.font = 'bold 22px Arial, Helvetica, sans-serif';
  ctx.fillStyle = 'rgba(217,130,43,0.95)';
  ctx.fillText('UNIT', 128, 228);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// Облегчённый режим для игровых движков (Quake III): меньше сегментов.
let lowDetail = false;
export function setLowDetail(flag) {
  lowDetail = flag;
}

function roundedBox(width, height, depth, radius = 0.06, segments = 3) {
  const safeRadius = Math.min(radius, width / 2 - 0.001, height / 2 - 0.001, depth / 2 - 0.001);
  if (lowDetail) {
    if (Math.min(width, height, depth) < 0.16 || safeRadius < 0.03) return new THREE.BoxGeometry(width, height, depth);
    return new RoundedBoxGeometry(width, height, depth, 1, safeRadius);
  }
  return new RoundedBoxGeometry(width, height, depth, segments, safeRadius);
}

function radialSegments(radius, highCount) {
  if (!lowDetail) return highCount;
  if (radius < 0.07) return 6;
  if (radius < 0.16) return 8;
  return 12;
}

function cylinder(radiusTop, radiusBottom, height, segments) {
  return new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments(Math.max(radiusTop, radiusBottom), segments));
}

function sphere(radius, widthSegments, heightSegments) {
  if (lowDetail) return new THREE.SphereGeometry(radius, radius > 0.5 ? 16 : 10, radius > 0.5 ? 10 : 6);
  return new THREE.SphereGeometry(radius, widthSegments, heightSegments);
}

function torus(radius, tube, radialCount, tubularCount) {
  if (lowDetail) return new THREE.TorusGeometry(radius, tube, 4, radius > 0.2 ? 14 : 10);
  return new THREE.TorusGeometry(radius, tube, radialCount, tubularCount);
}

// Ломаная со скруглёнными углами -> труба.
function roundedTube(points, radius, cornerRadius = 0.06, closed = false) {
  const vectors = points.map((point) => new THREE.Vector3(...point));
  const path = new THREE.CurvePath();
  const count = vectors.length;
  let current = closed ? null : vectors[0].clone();
  const corners = [];
  for (let index = 0; index < count; index++) {
    if (!closed && (index === 0 || index === count - 1)) continue;
    const prev = vectors[(index - 1 + count) % count];
    const point = vectors[index];
    const next = vectors[(index + 1) % count];
    const toPrev = prev.clone().sub(point);
    const toNext = next.clone().sub(point);
    const limit = Math.min(cornerRadius, toPrev.length() / 2, toNext.length() / 2);
    corners.push({
      start: point.clone().add(toPrev.normalize().multiplyScalar(limit)),
      control: point.clone(),
      end: point.clone().add(toNext.normalize().multiplyScalar(limit)),
    });
  }
  if (closed) current = corners[corners.length - 1].end.clone();
  for (const corner of corners) {
    path.add(new THREE.LineCurve3(current, corner.start));
    path.add(new THREE.QuadraticBezierCurve3(corner.start, corner.control, corner.end));
    current = corner.end;
  }
  if (!closed) path.add(new THREE.LineCurve3(current, vectors[count - 1]));
  return lowDetail ? new THREE.TubeGeometry(path, 5 * count, radius, 5, closed) : new THREE.TubeGeometry(path, 24 * count, radius, 10, closed);
}

function addMesh(parent, geometry, material, position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1], name) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(...position);
  mesh.rotation.set(...rotation);
  mesh.scale.set(...scale);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  if (name) mesh.name = name;
  parent.add(mesh);
  return mesh;
}

function cylinderX(radius, length, segments = 32) {
  const geometry = cylinder(radius, radius, length, segments);
  geometry.rotateZ(Math.PI / 2);
  return geometry;
}

function cylinderZ(radius, length, segments = 32) {
  const geometry = cylinder(radius, radius, length, segments);
  geometry.rotateX(Math.PI / 2);
  return geometry;
}

// ---------- материалы ----------

function createMaterials() {
  const camoMap = createGrimeTexture({
    baseColor: '#808f4a',
    blotches: ['rgba(72,84,40,0.22)', 'rgba(164,176,100,0.16)', 'rgba(122,98,60,0.12)', 'rgba(58,68,32,0.18)'],
    scratchColor: 'rgba(214,216,186,0.22)',
    seed: 7,
    blotchCount: 140,
    radiusMin: 18,
    radiusMax: 90,
    noiseAmount: 8,
  });
  const metalMap = createGrimeTexture({
    baseColor: '#9a9e98',
    blotches: ['rgba(60,62,58,0.30)', 'rgba(120,100,70,0.18)', 'rgba(190,192,186,0.25)'],
    scratchColor: 'rgba(230,230,225,0.35)',
    seed: 13,
    noiseAmount: 10,
  });
  const panelMap = createGrimeTexture({
    baseColor: '#c4c6c0',
    blotches: ['rgba(90,92,86,0.22)', 'rgba(130,110,80,0.15)'],
    seed: 21,
    noiseAmount: 8,
  });

  return {
    camo: new THREE.MeshStandardMaterial({ name: 'camo_green', map: camoMap, roughness: 0.72, metalness: 0.18 }),
    camoDark: new THREE.MeshStandardMaterial({ name: 'camo_dark', map: camoMap, color: 0xa4ae98, roughness: 0.78, metalness: 0.2 }),
    metal: new THREE.MeshStandardMaterial({ name: 'metal_gray', map: metalMap, roughness: 0.42, metalness: 0.65 }),
    darkMetal: new THREE.MeshStandardMaterial({ name: 'metal_dark', map: metalMap, color: 0x70736e, roughness: 0.55, metalness: 0.6 }),
    chrome: new THREE.MeshStandardMaterial({ name: 'chrome', color: 0xdfe2e0, roughness: 0.18, metalness: 0.95 }),
    panel: new THREE.MeshStandardMaterial({ name: 'panel_light', map: panelMap, roughness: 0.5, metalness: 0.35 }),
    orange: new THREE.MeshStandardMaterial({ name: 'orange', color: 0xd9822b, roughness: 0.5, metalness: 0.25 }),
    yellow: new THREE.MeshStandardMaterial({ name: 'trim_yellow', color: 0xe6b437, roughness: 0.45, metalness: 0.2, emissive: 0x3a2a00 }),
    glass: new THREE.MeshPhysicalMaterial({
      name: 'canopy_glass', color: 0x5fb3c2, roughness: 0.06, metalness: 0.35,
      clearcoat: 1, clearcoatRoughness: 0.05, emissive: 0x0a2e36, emissiveIntensity: 0.5,
    }),
    glowOrange: new THREE.MeshStandardMaterial({ name: 'engine_glow', color: 0xffb060, emissive: 0xff8a2a, emissiveIntensity: 2.4, roughness: 0.4 }),
    glowCyan: new THREE.MeshStandardMaterial({ name: 'light_cyan', color: 0xbdf8ff, emissive: 0x7ff0ff, emissiveIntensity: 1.8, roughness: 0.3 }),
    glowPurple: new THREE.MeshStandardMaterial({ name: 'sensor_purple', color: 0xe0a0ff, emissive: 0xb050ff, emissiveIntensity: 2.2, roughness: 0.2 }),
    black: new THREE.MeshStandardMaterial({ name: 'black', color: 0x1c1e1c, roughness: 0.8, metalness: 0.3 }),
  };
}

// ---------- корпус ----------

const HEAD_PIVOT_Z = 0.55;

function buildBody(materials) {
  const body = new THREE.Group();
  body.name = 'body';
  const unitSphere = sphere(1, 40, 28);

  // голова (нос с фонарём кабины): отдельный узел, в Quake III это head.md3
  const head = new THREE.Group();
  head.name = 'head';
  head.position.set(0, 0, HEAD_PIVOT_Z);
  body.add(head);
  body.userData.head = head;
  const addHeadMesh = (geometry, material, position, rotation, scale, name) =>
    addMesh(head, geometry, material, [position[0], position[1], position[2] - HEAD_PIVOT_Z], rotation, scale, name);

  // основной корпус и нос
  addMesh(body, roundedBox(1.5, 0.95, 1.7, 0.2, 4), materials.camo, [0, 0, 0], [0, 0, 0], [1, 1, 1], 'hull');
  addHeadMesh(unitSphere, materials.camo, [0, -0.05, 0.72], [0, 0, 0], [0.6, 0.56, 0.82], 'nose');
  addHeadMesh(unitSphere, materials.camo, [0, -0.38, 0.82], [0.25, 0, 0], [0.46, 0.34, 0.52], 'chin');

  // двойной фонарь кабины
  const canopies = [
    { posY: 0.15, posZ: 1.32, scale: [0.25, 0.27, 0.22], tilt: -0.45 },
    { posY: -0.21, posZ: 1.36, scale: [0.22, 0.17, 0.18], tilt: -0.05 },
  ];
  for (const canopy of canopies) {
    const [scaleX, scaleY, scaleZ] = canopy.scale;
    addHeadMesh(unitSphere, materials.metal, [0, canopy.posY, canopy.posZ - 0.035], [canopy.tilt, 0, 0], [scaleX + 0.03, scaleY + 0.03, scaleZ]);
    addHeadMesh(unitSphere, materials.glass, [0, canopy.posY, canopy.posZ], [canopy.tilt, 0, 0], [scaleX, scaleY, scaleZ], 'canopy');
  }
  // гребень над носом
  addHeadMesh(roundedBox(0.13, 0.2, 0.85, 0.05), materials.metal, [0, 0.47, 0.88], [0.27, 0, 0]);
  addHeadMesh(roundedBox(0.16, 0.06, 0.2, 0.02), materials.yellow, [0, 0.56, 0.62], [0.27, 0, 0]);

  // центральное ребро между стёклами
  addHeadMesh(roundedBox(0.07, 0.12, 0.12, 0.03), materials.metal, [0, -0.02, 1.5], [-0.2, 0, 0]);

  // жёлтые линии на носу
  for (const side of [-1, 1]) {
    addHeadMesh(roundedBox(0.03, 0.03, 0.7, 0.012), materials.yellow, [side * 0.5, 0.2, 0.85], [0.1, side * 0.45, 0]);
    addHeadMesh(roundedBox(0.03, 0.03, 0.5, 0.012), materials.orange, [side * 0.52, -0.25, 0.85], [-0.2, side * 0.4, 0]);
  }

  // обтекатель и два воздухозаборника сверху
  addMesh(body, roundedBox(1.25, 0.22, 0.75, 0.08), materials.camo, [0, 0.52, 0.1]);
  for (const side of [-1, 1]) {
    const intakeX = side * 0.38;
    addMesh(body, cylinderZ(0.25, 0.48), materials.camo, [intakeX, 0.66, 0.12], [0, 0, 0], [1, 1, 1], 'intake');
    addMesh(body, cylinderZ(0.19, 0.02), materials.black, [intakeX, 0.66, 0.365]);
    addMesh(body, torus(0.205, 0.028, 12, 40), materials.yellow, [intakeX, 0.66, 0.365]);
    addMesh(body, cylinderZ(0.075, 0.08), materials.metal, [intakeX, 0.66, 0.37]);
    addMesh(body, torus(0.13, 0.015, 8, 32), materials.darkMetal, [intakeX, 0.66, 0.37]);
  }
  // световая панель и антенна
  addMesh(body, roundedBox(0.42, 0.06, 0.13, 0.025), materials.glowCyan, [0, 0.66, -0.3]);
  addMesh(body, roundedBox(0.5, 0.05, 0.18, 0.02), materials.darkMetal, [0, 0.63, -0.3]);
  addMesh(body, cylinder(0.018, 0.025, 0.75, 8), materials.metal, [0.45, 0.9, -0.75], [-0.35, 0, 0.12]);
  addMesh(body, cylinder(0.035, 0.035, 0.12, 10), materials.darkMetal, [0.43, 0.56, -0.62], [-0.35, 0, 0.12]);

  // задний двигательный блок
  addMesh(body, roundedBox(1.48, 0.88, 0.78, 0.12), materials.camo, [0, 0.04, -1.15], [0, 0, 0], [1, 1, 1], 'engine');
  addMesh(body, roundedBox(1.52, 0.1, 0.82, 0.04), materials.darkMetal, [0, -0.42, -1.15]);
  addMesh(body, roundedBox(1.2, 0.025, 0.03, 0.01), materials.yellow, [0, 0.49, -0.86]);
  for (const side of [-1, 1]) {
    const ventX = side * 0.36;
    addMesh(body, roundedBox(0.56, 0.62, 0.14, 0.05), materials.darkMetal, [ventX, 0.05, -1.55]);
    for (let slat = 0; slat < 4; slat++) {
      addMesh(body, roundedBox(0.47, 0.085, 0.08, 0.035), materials.glowOrange, [ventX, -0.165 + slat * 0.145, -1.61], [0, 0, 0], [1, 1, 1], 'engine_vent');
    }
    addMesh(body, roundedBox(0.03, 0.5, 0.03, 0.01), materials.orange, [side * 0.745, 0.05, -1.15]);
  }
  // каркас из труб над соплами
  for (const side of [-1, 1]) {
    addMesh(body, roundedTube([[side * 0.66, 0.5, -0.82], [side * 0.66, 0.66, -1.7], [side * 0.66, -0.32, -1.72], [side * 0.66, -0.36, -1.5]], 0.034, 0.1), materials.metal);
  }
  addMesh(body, roundedTube([[-0.66, 0.66, -1.7], [0.66, 0.66, -1.7]], 0.032), materials.metal);
  addMesh(body, roundedTube([[0, 0.66, -1.7], [0, -0.32, -1.72]], 0.03), materials.metal);
  addMesh(body, roundedTube([[-0.66, -0.32, -1.72], [0.66, -0.32, -1.72]], 0.03), materials.metal);

  // правый борт (-X): модуль с люком, баки, штанга с килем
  addMesh(body, roundedBox(0.48, 0.62, 1.15, 0.08), materials.camoDark, [-0.92, -0.02, -0.65]);
  // детали на боковом модуле
  addMesh(body, roundedBox(0.04, 0.3, 0.5, 0.02), materials.darkMetal, [-1.16, 0.0, -0.7]);
  for (let louver = 0; louver < 5; louver++) {
    addMesh(body, roundedBox(0.03, 0.025, 0.42, 0.01), materials.black, [-1.185, -0.1 + louver * 0.05, -0.7]);
  }
  addMesh(body, roundedBox(0.03, 0.03, 0.95, 0.012), materials.yellow, [-1.165, 0.22, -0.62]);
  addMesh(body, roundedBox(0.03, 0.03, 0.4, 0.012), materials.orange, [-1.165, -0.24, -0.35]);
  addMesh(body, roundedBox(0.05, 0.12, 0.12, 0.02), materials.glowCyan, [-1.16, 0.12, -1.1]);
  addMesh(body, roundedBox(0.5, 0.52, 0.48, 0.08), materials.darkMetal, [-0.98, 0.0, 0.12]);
  addMesh(body, roundedBox(0.4, 0.38, 0.06, 0.04), materials.orange, [-0.98, 0.0, 0.36]);
  addMesh(body, roundedBox(0.34, 0.32, 0.06, 0.04), materials.panel, [-0.98, 0.0, 0.375]);
  addMesh(body, roundedBox(0.2, 0.08, 0.02, 0.01), materials.darkMetal, [-0.98, 0.0, 0.41]);
  for (const tankZ of [-1.0, -0.66]) {
    addMesh(body, cylinder(0.15, 0.15, 0.42, 28), materials.panel, [-0.92, 0.48, tankZ]);
    addMesh(body, cylinder(0.156, 0.156, 0.07, 28), materials.orange, [-0.92, 0.62, tankZ]);
    addMesh(body, cylinder(0.156, 0.156, 0.07, 28), materials.orange, [-0.92, 0.34, tankZ]);
    addMesh(body, cylinder(0.06, 0.06, 0.05, 16), materials.darkMetal, [-0.92, 0.71, tankZ]);
  }
  const boom = new THREE.Group();
  boom.position.set(-1.1, 0.42, -0.55);
  body.add(boom);
  addMesh(boom, roundedBox(0.95, 0.12, 0.2, 0.05), materials.camo, [-0.45, 0.06, 0], [0, 0, 0.12]);
  addMesh(boom, roundedBox(0.3, 0.2, 0.28, 0.06), materials.darkMetal, [0.02, 0, 0]);
  const fin = new THREE.Group();
  fin.position.set(-0.95, 0.32, -0.05);
  fin.rotation.set(0, 0.18, -0.08);
  boom.add(fin);
  addMesh(fin, roundedBox(0.08, 0.95, 0.6, 0.03), materials.camo, [0, 0, 0], [0, 0, 0], [1, 1, 1], 'fin');
  addMesh(fin, roundedBox(0.09, 0.06, 0.62, 0.02), materials.darkMetal, [0, -0.48, 0]);
  const markingMaterial = new THREE.MeshStandardMaterial({ name: 'marking', map: createMarkingTexture('K7'), transparent: true, roughness: 0.6, metalness: 0.1 });
  addMesh(fin, new THREE.PlaneGeometry(0.52, 0.52), markingMaterial, [-0.043, 0.06, 0], [0, -Math.PI / 2, 0]);
  addMesh(fin, new THREE.PlaneGeometry(0.52, 0.52), markingMaterial, [0.043, 0.06, 0], [0, Math.PI / 2, 0]);

  // левый борт (+X): ящик с шестигранным люком
  addMesh(body, roundedBox(0.46, 0.72, 1.12, 0.09), materials.camo, [0.9, -0.02, -0.32]);
  const hexOuter = new THREE.CylinderGeometry(0.25, 0.25, 0.05, 6);
  hexOuter.rotateZ(Math.PI / 2);
  addMesh(body, hexOuter, materials.darkMetal, [1.135, 0.02, -0.38]);
  const hexInner = new THREE.CylinderGeometry(0.17, 0.17, 0.05, 6);
  hexInner.rotateZ(Math.PI / 2);
  addMesh(body, hexInner, materials.metal, [1.155, 0.02, -0.38]);
  for (let slit = -1; slit <= 1; slit++) {
    addMesh(body, roundedBox(0.02, 0.025, 0.2, 0.01), materials.black, [1.18, 0.02 + slit * 0.06, -0.38]);
  }
  addMesh(body, roundedBox(0.32, 0.36, 0.05, 0.03), materials.panel, [0.9, 0.04, 0.24]);
  for (let line = 0; line < 4; line++) {
    addMesh(body, roundedBox(0.24, 0.025, 0.02, 0.01), materials.darkMetal, [0.9, -0.08 + line * 0.08, 0.27]);
  }
  for (const lightX of [0.82, 0.98]) {
    addMesh(body, roundedBox(0.1, 0.07, 0.06, 0.02), materials.yellow, [lightX, 0.3, 0.25]);
  }
  addMesh(body, roundedBox(0.03, 0.03, 0.9, 0.012), materials.yellow, [1.135, 0.3, -0.32]);
  addMesh(body, roundedBox(0.03, 0.03, 0.6, 0.012), materials.orange, [1.135, -0.3, -0.25]);

  // сенсор под носом
  addHeadMesh(cylinderZ(0.15, 0.32), materials.darkMetal, [0, -0.6, 0.42]);
  addHeadMesh(torus(0.12, 0.02, 8, 24), materials.metal, [0, -0.6, 0.585]);
  addHeadMesh(sphere(0.085, 20, 14), materials.glowPurple, [0, -0.6, 0.58], [0, 0, 0], [1, 1, 1], 'sensor');

  return body;
}

// ---------- таз и ноги ----------

function buildLeg(materials, side) {
  const hip = new THREE.Group();
  hip.name = side > 0 ? 'hip_L' : 'hip_R';
  hip.position.set(side * 0.98, 0, 0);

  addMesh(hip, roundedBox(0.34, 1.0, 0.5, 0.09), materials.camo, [0, -0.47, 0], [0, 0, 0], [1, 1, 1], 'thigh');
  addMesh(hip, roundedBox(0.06, 0.66, 0.4, 0.025), materials.camoDark, [side * 0.2, -0.45, 0.02]);
  addMesh(hip, roundedBox(0.02, 0.5, 0.03, 0.008), materials.orange, [side * 0.235, -0.45, 0.17]);

  // трубчатая рама-ограждение бедра
  for (const frameSide of [-1, 1]) {
    const frameX = frameSide * 0.25;
    addMesh(hip, roundedTube([[frameX, 0.05, 0.12], [frameX, 0.08, 0.52], [frameX, -0.86, 0.52], [frameX, -0.86, 0.14]], 0.032, 0.09), materials.metal);
  }
  addMesh(hip, roundedTube([[-0.25, -0.86, 0.52], [0.25, -0.86, 0.52]], 0.03), materials.metal);
  addMesh(hip, roundedBox(0.07, 0.09, 0.17, 0.025), materials.glowCyan, [side * 0.27, -0.6, 0.52]);
  addMesh(hip, roundedBox(0.09, 0.13, 0.21, 0.03), materials.darkMetal, [side * 0.26, -0.6, 0.52]);

  const knee = new THREE.Group();
  knee.name = side > 0 ? 'knee_L' : 'knee_R';
  knee.position.set(0, -0.95, 0);
  hip.add(knee);
  addMesh(knee, cylinderX(0.2, 0.42), materials.darkMetal);
  for (const capSide of [-1, 1]) {
    addMesh(knee, torus(0.15, 0.025, 8, 28), materials.orange, [capSide * 0.215, 0, 0], [0, Math.PI / 2, 0]);
  }
  addMesh(knee, roundedBox(0.38, 0.42, 0.13, 0.05), materials.camo, [0, -0.08, 0.24], [-0.25, 0, 0]);
  addMesh(knee, new THREE.ConeGeometry(0.1, 0.32, 4), materials.camo, [0, 0.12, 0.33], [0.4, Math.PI / 4, 0], [1.6, 1, 0.5]);
  addMesh(knee, roundedBox(0.28, 0.92, 0.3, 0.07), materials.metal, [0, -0.48, -0.03], [0, 0, 0], [1, 1, 1], 'shin');
  addMesh(knee, roundedBox(0.36, 0.56, 0.14, 0.05), materials.camo, [0, -0.38, 0.17]);
  addMesh(knee, roundedBox(0.025, 0.4, 0.02, 0.008), materials.yellow, [side * 0.18, -0.38, 0.2]);
  for (const pistonX of [-0.1, 0.1]) {
    addMesh(knee, cylinder(0.035, 0.035, 0.62, 14), materials.chrome, [pistonX, -0.56, -0.22]);
    addMesh(knee, cylinder(0.068, 0.068, 0.24, 18), materials.orange, [pistonX, -0.3, -0.22]);
    addMesh(knee, cylinder(0.05, 0.05, 0.08, 14), materials.darkMetal, [pistonX, -0.86, -0.22]);
  }

  const ankle = new THREE.Group();
  ankle.name = side > 0 ? 'ankle_L' : 'ankle_R';
  ankle.position.set(0, -0.95, 0);
  knee.add(ankle);
  addMesh(ankle, cylinderX(0.13, 0.36), materials.darkMetal);
  addMesh(ankle, roundedBox(0.3, 0.24, 0.32, 0.06), materials.camoDark, [0, -0.15, 0.02]);
  addMesh(ankle, roundedBox(0.54, 0.12, 0.82, 0.05), materials.camo, [0, -0.31, 0.08], [0, 0, 0], [1, 1, 1], 'foot');
  addMesh(ankle, roundedBox(0.56, 0.04, 0.84, 0.015), materials.darkMetal, [0, -0.375, 0.08]);
  for (const toeX of [-0.14, 0.14]) {
    addMesh(ankle, roundedBox(0.18, 0.16, 0.4, 0.05), materials.camo, [toeX, -0.29, 0.56], [0.15, 0, 0]);
    addMesh(ankle, new THREE.ConeGeometry(0.1, 0.24, 4), materials.metal, [toeX, -0.32, 0.84], [Math.PI / 2, 0, Math.PI / 4], [1, 1, 0.55]);
    addMesh(ankle, cylinderX(0.05, 0.2), materials.darkMetal, [toeX, -0.26, 0.36]);
  }
  addMesh(ankle, roundedBox(0.22, 0.14, 0.3, 0.05), materials.camo, [0, -0.3, -0.38]);
  addMesh(ankle, new THREE.ConeGeometry(0.08, 0.2, 4), materials.metal, [0, -0.32, -0.6], [-Math.PI / 2, 0, Math.PI / 4], [1, 1, 0.55]);
  addMesh(ankle, cylinder(0.06, 0.06, 0.12, 14), materials.orange, [0, -0.08, -0.17]);

  return { hip, knee, ankle, side };
}

// ---------- сборка ----------

export const REST_POSE = { hip: -0.45, knee: 0.9 };

export function buildMech() {
  const materials = createMaterials();
  const root = new THREE.Group();
  root.name = 'Walker_K7';

  const pelvis = new THREE.Group();
  pelvis.name = 'pelvis';
  root.add(pelvis);
  addMesh(pelvis, roundedBox(1.1, 0.46, 0.92, 0.12), materials.camoDark, [0, 0, 0], [0, 0, 0], [1, 1, 1], 'pelvis_block');
  addMesh(pelvis, roundedBox(0.7, 0.2, 0.5, 0.06), materials.darkMetal, [0, -0.28, 0]);
  for (const side of [-1, 1]) {
    addMesh(pelvis, cylinderX(0.37, 0.3), materials.camo, [side * 0.68, 0, 0]);
    addMesh(pelvis, torus(0.27, 0.028, 10, 40), materials.orange, [side * 0.835, 0, 0], [0, Math.PI / 2, 0]);
    addMesh(pelvis, torus(0.17, 0.02, 10, 32), materials.darkMetal, [side * 0.835, 0, 0], [0, Math.PI / 2, 0]);
    addMesh(pelvis, cylinderX(0.08, 0.06), materials.metal, [side * 0.845, 0, 0]);
  }

  const body = buildBody(materials);
  body.position.set(0, 0.68, 0);
  pelvis.add(body);

  const legs = [buildLeg(materials, 1), buildLeg(materials, -1)];
  for (const leg of legs) pelvis.add(leg.hip);

  function applyLegPose(leg, hipAngle, kneeAngle, footPitch = 0) {
    leg.hip.rotation.x = hipAngle;
    leg.knee.rotation.x = kneeAngle;
    leg.ankle.rotation.x = -(hipAngle + kneeAngle) + footPitch;
  }

  // высота таза так, чтобы стопы стояли на земле
  const thighLength = 0.95;
  const shinLength = 0.95;
  const footDrop = 0.395;
  function pelvisHeight(hipAngle, kneeAngle) {
    return Math.cos(hipAngle) * thighLength + Math.cos(hipAngle + kneeAngle) * shinLength + footDrop;
  }
  const restHeight = pelvisHeight(REST_POSE.hip, REST_POSE.knee);

  function setPose(timeSeconds, walking, walkBlend = walking ? 1 : 0) {
    const cycle = timeSeconds * 3.2;
    let lowestHeight = Infinity;
    for (const leg of legs) {
      const phase = cycle + (leg.side > 0 ? 0 : Math.PI);
      const swing = Math.sin(phase) * 0.42 * walkBlend;
      const lift = Math.max(0, Math.cos(phase)) * 0.55 * walkBlend;
      const hipAngle = REST_POSE.hip - swing - lift * 0.35;
      const kneeAngle = REST_POSE.knee + lift;
      applyLegPose(leg, hipAngle, kneeAngle, -lift * 0.25);
      // опорная нога (без подъёма) определяет высоту
      if (lift < 0.01) lowestHeight = Math.min(lowestHeight, pelvisHeight(hipAngle, kneeAngle));
    }
    if (!isFinite(lowestHeight)) lowestHeight = restHeight;
    const idleBob = Math.sin(timeSeconds * 1.6) * 0.015 * (1 - walkBlend);
    pelvis.position.y = lowestHeight + idleBob;
    pelvis.rotation.z = Math.sin(cycle) * 0.035 * walkBlend;
    body.rotation.y = Math.sin(cycle) * 0.04 * walkBlend + Math.sin(timeSeconds * 0.5) * 0.05 * (1 - walkBlend);
    body.position.y = 0.68 + Math.abs(Math.cos(cycle)) * 0.03 * walkBlend;
  }

  setPose(0, false);

  return { root, pelvis, body, legs, setPose, materials };
}
