// Шагающий робот K7: ходьба с опорной стопой, неподвижной относительно земли (двухзвенная ИК).
import * as THREE from 'three';
import { buildMech } from './mech.js';

const THIGH = 0.95, SHIN = 0.95, ANKLE_TO_SOLE = 0.395;
const REST_HEIGHT = 1.71 + ANKLE_TO_SOLE;
export const MECH_SCALE = 0.8;              // робот около 4.2 м
export const MECH_STRIDE = 2.0 * MECH_SCALE; // м за цикл (два шага) после масштаба

function solveLeg(forward, down) {
  let distance = Math.hypot(forward, down);
  distance = Math.min(Math.max(distance, 0.25), THIGH + SHIN - 0.002);
  const targetAngle = Math.atan2(-forward, down);
  const hipInner = Math.acos((THIGH * THIGH + distance * distance - SHIN * SHIN) / (2 * THIGH * distance));
  const kneeInner = Math.acos((SHIN * SHIN + distance * distance - THIGH * THIGH) / (2 * SHIN * distance));
  const hip = targetAngle - hipInner;
  return { hip, knee: targetAngle + kneeInner - hip };
}

// phase === null: стойка
// автопушка на борту — у игровых спрайтов (сцена и Quake III собирают робота без неё)
export function buildMechPosed(phase, options = { autocannon: true }) {
  const mech = buildMech(options);
  const { pelvis, body, legs } = mech;
  const half = 2.0 / 4,   // в единицах модели, до масштаба
    smooth = (value) => value * value * (3 - 2 * value);
  let height = REST_HEIGHT, roll = 0, bodyYaw = 0;
  const feet = [{ forward: 0, lift: 0, pitch: 0 }, { forward: 0, lift: 0, pitch: 0 }];
  if (phase !== null) {
    height = REST_HEIGHT - 0.07 + 0.03 * Math.cos(phase * Math.PI * 4);
    roll = 0.035 * Math.sin(phase * Math.PI * 2);
    bodyYaw = 0.04 * Math.sin(phase * Math.PI * 2);
    feet.forEach((foot, index) => {
      const q = (phase + (index === 0 ? 0 : 0.5)) % 1;
      if (q < 0.5) { foot.forward = half - (q / 0.5) * half * 2; }
      else {
        const s = (q - 0.5) / 0.5;
        foot.forward = -half + half * 2 * smooth(s);
        foot.lift = 0.3 * Math.sin(Math.PI * s);
        foot.pitch = -0.25 * Math.sin(Math.PI * s);
      }
    });
  }
  pelvis.position.set(0, height, 0);
  pelvis.rotation.set(0, 0, roll);
  const footDown = height - ANKLE_TO_SOLE;
  legs.forEach((leg, index) => {
    const foot = feet[index];
    const solved = solveLeg(foot.forward, footDown - foot.lift);
    leg.hip.rotation.set(solved.hip, 0, 0);
    leg.knee.rotation.set(solved.knee, 0, 0);
    leg.ankle.rotation.set(-(solved.hip + solved.knee) + foot.pitch, 0, 0);
  });
  body.position.y = 0.68;
  body.rotation.set(0, bodyYaw, 0);
  mech.root.traverse((node) => { if (node.isMesh) node.castShadow = node.receiveShadow = true; });
  mech.root.scale.setScalar(MECH_SCALE);
  return mech.root;
}

// ---------- уничтожение ----------
// buildMechFall(progress): 0 — стоит, 1 — обломки (тот же кадр, что спрайт mech_dead).
// Колени подламываются, робот оседает и заваливается на правый бок: корпус ложится на землю,
// ноги лежат в сторону, левая (верхняя) согнута, пушка с левого борта остаётся сверху и повисает стволом вниз.
// Корпус темнеет от копоти, огни гаснут. Кадр опускается на землю по точной рамке и смещается к центру
// площадки 2x2; в последнем кадре вокруг лежат отлетевшие пластины.
// Ноги: [бедро, колено, наклон стопы, отведение в сторону]; null — как в стойке
const WRECK_KEYS = [
  { time: 0, left: [null, null, 0, 0], right: [null, null, 0, 0], pitch: 0, roll: 0, bodyPitch: 0, bodyYaw: 0, gun: 0, headPitch: 0, headRoll: 0 },
  { time: 0.3, left: [-0.95, 1.75, 0, 0.05], right: [-0.9, 1.65, 0, -0.08], pitch: 0.06, roll: 0.08, bodyPitch: 0.04, bodyYaw: 0.04, gun: 0.12, headPitch: 0.1, headRoll: 0 },
  { time: 0.65, left: [-0.9, 1.6, 0.1, -0.1], right: [-0.8, 1.5, 0.1, 0.05], pitch: 0.1, roll: 0.6, bodyPitch: 0.06, bodyYaw: 0.08, gun: 0.25, headPitch: 0.2, headRoll: 0.1 },
  // на боку: нижняя (правая) нога лежит вдоль земли, верхняя свешивается на неё
  { time: 1, left: [-0.6, 1.2, 0.4, -0.45], right: [-0.35, 0.7, 0.3, 0.12], pitch: 0.1, roll: 1.42, bodyPitch: 0.04, bodyYaw: 0.12, gun: 0.4, headPitch: 0.3, headRoll: 0.15 },
];
const SOOT = new THREE.Color(0x2e2a26);

// ---------- повреждения подбитого робота ----------
// Всё в координатах корпуса (body). Робот лежит на правом боку, поэтому повреждения — на левом борту (+X),
// который смотрит вверх и виден со всех ракурсов: пробоина в борту у носа (горит), пробоина в двигательном
// блоке (дымит), сорванный шестигранный люк с вырванной проводкой (искрит), погнутый ствол, оторванный
// патронный короб, вмятина на носу, разбитый фонарь кабины, сломанная антенна, погнутый киль.
const BREACH = { center: new THREE.Vector3(0.756, 0.02, 0.5), radius: 0.27 };
const ENGINE_HOLE = { center: new THREE.Vector3(0.743, 0.15, -1.3), radius: 0.19 };
const HATCH = { center: new THREE.Vector3(1.12, 0.02, -0.38), radius: 0.23 };
// мелкие пробоины от попаданий на левом борту: [x, y, z, радиус]
const BULLET_HOLES = [[1.128, 0.22, -0.7, 0.05], [1.128, -0.2, -0.12, 0.045], [0.756, -0.28, 0.32, 0.05], [1.128, 0.25, 0.05, 0.04], [0.743, -0.25, -0.95, 0.05], [1.128, -0.24, -0.62, 0.04]];
const OUTWARD = new THREE.Vector3(1, 0, 0);

function seeded(seed) {
  let state = seed;
  return () => { state = (state * 16807) % 2147483647; return (state - 1) / 2147483646; };
}
function jaggedShape(radius, seed, points = 16, roughness = 0.4) {
  const random = seeded(seed);
  const shape = new THREE.Shape();
  for (let index = 0; index < points; index++) {
    const angle = index / points * Math.PI * 2;
    const length = radius * (1 - roughness / 2 + random() * roughness);
    if (index === 0) shape.moveTo(Math.cos(angle) * length, Math.sin(angle) * length);
    else shape.lineTo(Math.cos(angle) * length, Math.sin(angle) * length);
  }
  return shape;
}
let sootTexture = null;
function getSootTexture() {
  if (sootTexture) return sootTexture;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  const context = canvas.getContext('2d');
  const random = seeded(5);
  for (let blob = 0; blob < 40; blob++) {
    const angle = random() * Math.PI * 2, distance = random() * 40, radius = 14 + random() * 26;
    const x = 64 + Math.cos(angle) * distance, y = 64 + Math.sin(angle) * distance;
    const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, 'rgba(0,0,0,0.5)');
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, 128, 128);
  }
  sootTexture = new THREE.CanvasTexture(canvas);
  sootTexture.colorSpace = THREE.SRGBColorSpace;
  return sootTexture;
}
// плоская деталь на поверхности: ось z детали — по нормали
function onSurface(parent, mesh, center, normal, lift) {
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
  mesh.position.copy(center).addScaledVector(normal, lift);
  parent.add(mesh);
  return mesh;
}
// пробоина: копоть вокруг, рваные края из отогнутых наружу лепестков обшивки, тлеющая кромка, чёрная дыра
function addHole(parent, hole, materials, seed, glowing) {
  const soot = new THREE.Mesh(new THREE.PlaneGeometry(hole.radius * 4.6, hole.radius * 4.6),
    new THREE.MeshBasicMaterial({ map: getSootTexture(), color: 0x000000, transparent: true, depthWrite: false }));
  soot.castShadow = false;
  soot.userData.decal = true;           // полупрозрачная: в проход маски не попадает (sprites.js)
  onSurface(parent, soot, hole.center, OUTWARD, 0.004);
  const random = seeded(seed);
  const petalMaterial = materials.camo;
  for (let index = 0; index < 7; index++) {
    const angle = index / 7 * Math.PI * 2 + random() * 0.4;
    const petal = new THREE.Mesh(new THREE.ConeGeometry(0.05 + random() * 0.03, 0.12 + random() * 0.08, 3), petalMaterial);
    petal.scale.set(1, 1, 0.25);
    const radial = new THREE.Vector3(0, Math.sin(angle), Math.cos(angle));
    petal.position.copy(hole.center).addScaledVector(radial, hole.radius * 0.95).addScaledVector(OUTWARD, 0.04);
    // остриём наружу и от поверхности: металл вывернуло взрывом
    petal.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), radial.clone().multiplyScalar(0.7).addScaledVector(OUTWARD, 0.7).normalize());
    parent.add(petal);
  }
  if (glowing) {
    const rim = new THREE.Mesh(new THREE.ShapeGeometry(jaggedShape(hole.radius * 1.12, seed + 3)),
      new THREE.MeshStandardMaterial({ color: 0x401000, emissive: 0xff6a18, emissiveIntensity: 4, roughness: 0.9, userData: { damage: true } }));
    onSurface(parent, rim, hole.center, OUTWARD, 0.008);
    // раскалённое нутро
    const inner = new THREE.Mesh(new THREE.ShapeGeometry(jaggedShape(hole.radius * 0.55, seed + 7)),
      new THREE.MeshStandardMaterial({ color: 0x200800, emissive: 0xff3a08, emissiveIntensity: 2.5, roughness: 1, userData: { damage: true } }));
    onSurface(parent, inner, hole.center, OUTWARD, 0.016);
  }
  const hollow = new THREE.Mesh(new THREE.ShapeGeometry(jaggedShape(hole.radius, seed)), new THREE.MeshBasicMaterial({ color: 0x050403 }));
  onSurface(parent, hollow, hole.center, OUTWARD, 0.012);
}
// вырванная проводка: разноцветные кабели выходят из люка и ложатся на борт
function addWires(parent) {
  const colors = [0xc8261e, 0xe6c12a, 0x1c1c1c, 0x2f6fd0, 0xd8d8d0];
  const random = seeded(17);
  colors.forEach((color, index) => {
    const start = HATCH.center.clone().add(new THREE.Vector3(-0.05, (random() - 0.5) * 0.18, (random() - 0.5) * 0.18));
    const out = start.clone().add(new THREE.Vector3(0.12 + random() * 0.12, (random() - 0.5) * 0.25, (random() - 0.5) * 0.25));
    const end = out.clone().add(new THREE.Vector3(-0.1 - random() * 0.08, -0.15 - random() * 0.2, (random() - 0.5) * 0.45));
    const curve = new THREE.CatmullRomCurve3([start, out, end]);
    parent.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 16, 0.022, 6), new THREE.MeshStandardMaterial({ color, roughness: 0.6, userData: { damage: true } })));
  });
}
// вмятина: вершины сферы в круге вокруг направления продавлены внутрь
function dentSphere(mesh, direction, size, depth) {
  const geometry = mesh.geometry.clone();
  const position = geometry.attributes.position, vertex = new THREE.Vector3(), axis = direction.clone().normalize();
  for (let index = 0; index < position.count; index++) {
    vertex.fromBufferAttribute(position, index);
    const closeness = vertex.clone().normalize().dot(axis);
    const amount = Math.max(0, (closeness - Math.cos(size)) / (1 - Math.cos(size)));
    if (amount > 0) vertex.multiplyScalar(1 - depth * amount * amount * (3 - 2 * amount));
    position.setXYZ(index, vertex.x, vertex.y, vertex.z);
  }
  geometry.computeVertexNormals();
  mesh.geometry = geometry;
}

function applyDamage(mech) {
  const { body, materials } = mech;
  const removed = [];
  const head = body.userData.head;
  // сорванный люк: убираем его детали
  body.children.slice().forEach((child) => {
    if (child.isMesh && child.position.x > 1.12 && Math.abs(child.position.z + 0.38) < 0.15) { body.remove(child); removed.push(child); }
    if (child.isMesh && child.position.distanceTo(new THREE.Vector3(0.45, 0.9, -0.75)) < 0.01) body.remove(child);   // антенна
  });
  addHole(body, BREACH, materials, 11, true);
  addHole(body, ENGINE_HOLE, materials, 23, true);
  addHole(body, HATCH, materials, 31, false);
  // мелкие пробоины: дыра и копоть
  BULLET_HOLES.forEach(([x, y, z, radius], index) => {
    const center = new THREE.Vector3(x, y, z);
    const soot = new THREE.Mesh(new THREE.PlaneGeometry(radius * 5, radius * 5),
      new THREE.MeshBasicMaterial({ map: getSootTexture(), color: 0x000000, transparent: true, depthWrite: false }));
    soot.castShadow = false;
    soot.userData.decal = true;
    onSurface(body, soot, center, OUTWARD, 0.003);
    onSurface(body, new THREE.Mesh(new THREE.ShapeGeometry(jaggedShape(radius, 50 + index, 9, 0.5)), new THREE.MeshBasicMaterial({ color: 0x060504 })), center, OUTWARD, 0.007);
  });
  // широкие пятна копоти на борту и двигательном блоке
  for (const [x, y, z, size] of [[0.757, 0.1, 0.15, 0.9], [1.128, 0.05, -0.15, 0.8], [0.744, -0.05, -1.05, 0.8], [1.128, -0.1, -0.75, 0.7]]) {
    const patch = new THREE.Mesh(new THREE.PlaneGeometry(size, size), new THREE.MeshBasicMaterial({ map: getSootTexture(), color: 0x000000, transparent: true, depthWrite: false, opacity: 0.8 }));
    patch.castShadow = false;
    patch.userData.decal = true;
    onSurface(body, patch, new THREE.Vector3(x, y, z), OUTWARD, 0.002);
  }
  addWires(body);
  // обломок антенны
  const stub = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.025, 0.22, 8), materials.metal);
  stub.position.set(0.44, 0.66, -0.67); stub.rotation.set(-0.35, 0, 0.9);
  body.add(stub);
  // вмятина на носу и разбитый фонарь кабины
  head.traverse((node) => {
    if (node.name === 'nose') dentSphere(node, new THREE.Vector3(0.75, 0.45, 0.35), 0.5, 0.16);
  });
  materials.glass.color.set(0x1a2224);
  materials.glass.emissive.set(0x000000);
  materials.glass.roughness = 0.75;
  materials.glass.clearcoat = 0.2;
  // погнутый киль
  body.traverse((node) => { if (node.name === 'fin') node.parent.rotation.z += 0.5; });
  // пушка: ствол погнут вниз и вбок, патронный короб оторван
  const gun = body.getObjectByName('autocannon');
  gun.children.slice().forEach((child) => {
    if (child.position.z > 1.1) gun.remove(child);
    if (child.position.z < -0.5) { gun.remove(child); removed.push(child); }
  });
  const barrelPath = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.16, -0.01, 0.95), new THREE.Vector3(0.16, -0.02, 1.15), new THREE.Vector3(0.21, -0.11, 1.36), new THREE.Vector3(0.3, -0.28, 1.52),
  ]);
  gun.add(new THREE.Mesh(new THREE.TubeGeometry(barrelPath, 20, 0.052, 12), materials.metal));
  const brake = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.12, 0.2), materials.darkMetal);
  const tip = barrelPath.getPoint(1), tangent = barrelPath.getTangent(1);
  brake.position.copy(tip).addScaledVector(tangent, 0.08);
  brake.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), tangent);
  gun.add(brake);
  return removed;
}


// отлетевшие детали на земле (метры): пластины обшивки — с удара о землю, люк и патронный короб — сразу
function wreckDebris(materials, landed) {
  const group = new THREE.Group();
  const add = (mesh, x, y, z, rotation) => { mesh.position.set(x, y, z); mesh.rotation.set(...rotation); mesh.castShadow = mesh.receiveShadow = true; group.add(mesh); return mesh; };
  // сорванный люк
  const hatch = new THREE.CylinderGeometry(0.2, 0.2, 0.04, 6);
  add(new THREE.Mesh(hatch, materials.darkMetal), -1.35, 0.03, 1.0, [0.1, 0.4, 0]);
  // оторванный патронный короб и его крышка
  add(new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.39, 0.5), materials.camo), 1.55, 0.2, -1.0, [0.05, 0.7, 0.12]);
  add(new THREE.Mesh(new THREE.BoxGeometry(0.33, 0.04, 0.51), materials.orange), 1.62, 0.38, -0.95, [0.3, 0.7, 0.5]);
  if (landed) {
    add(new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.05, 0.3), materials.camo), 1.25, 0.03, 0.9, [0, 0.6, 0.08]);
    add(new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.04, 0.22), materials.darkMetal), -1.1, 0.02, 1.15, [0, 1.9, 0.08]);
    add(new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.05, 0.26), materials.camo), 0.4, 0.03, -1.35, [0, -0.4, 0.08]);
    add(new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.12, 0.18), materials.darkMetal), -1.45, 0.06, -0.5, [0, 0.3, 0]);
  }
  return group;
}

let wreckCenter = null;
function finalCenter() {
  if (!wreckCenter) {
    wreckCenter = new THREE.Vector3();           // на время расчёта: без смещения
    const root = buildMechFall(1).children[0];
    root.position.set(0, 0, 0);
    root.updateMatrixWorld(true);
    wreckCenter = new THREE.Box3().setFromObject(root, true).getCenter(new THREE.Vector3());
  }
  return wreckCenter;
}

export function buildMechFall(progress) {
  const mech = buildMech({ autocannon: true });
  const { pelvis, body, legs } = mech;
  let next = 1;
  while (next < WRECK_KEYS.length - 1 && progress > WRECK_KEYS[next].time) next++;
  const previous = WRECK_KEYS[next - 1], key = WRECK_KEYS[next];
  const amount = Math.min(1, Math.max(0, (progress - previous.time) / (key.time - previous.time)));
  const mix = (first, second) => first + (second - first) * amount;
  // стойка: углы ног из той же двухзвенной задачи, что у buildMechPosed
  const rest = solveLeg(0, REST_HEIGHT - ANKLE_TO_SOLE);
  const legAngles = (values) => [values[0] ?? rest.hip, values[1] ?? rest.knee, values[2], values[3]];
  legs.forEach((leg) => {
    const from = legAngles(leg.side > 0 ? previous.left : previous.right), to = legAngles(leg.side > 0 ? key.left : key.right);
    const [hip, knee, footPitch, splay] = from.map((value, index) => mix(value, to[index]));
    leg.hip.rotation.set(hip, 0, splay);
    leg.knee.rotation.set(knee, 0, 0);
    leg.ankle.rotation.set(-(hip + knee) + footPitch, 0, 0);
  });
  pelvis.position.set(0, REST_HEIGHT, 0);
  pelvis.rotation.set(mix(previous.pitch, key.pitch), 0, mix(previous.roll, key.roll));
  body.position.y = 0.68;
  body.rotation.set(mix(previous.bodyPitch, key.bodyPitch), mix(previous.bodyYaw, key.bodyYaw), 0);
  const head = body.userData.head;
  head.rotation.set(mix(previous.headPitch, key.headPitch), 0, mix(previous.headRoll, key.headRoll));
  const gun = body.getObjectByName('autocannon');
  gun.rotation.x = mix(previous.gun, key.gun);
  applyDamage(mech);

  // копоть и погасшие огни
  const burnt = Math.min(1, Math.max(0, (progress - 0.5) / 0.5));
  if (burnt > 0) {
    const seen = new Set();
    mech.root.traverse((node) => {
      if (!node.isMesh || seen.has(node.material) || node.material.userData.damage) return;   // детали повреждений уже своего цвета
      seen.add(node.material);
      const glowing = /glow|light|sensor|engine/.test(node.material.name || '');
      node.material.color.lerp(SOOT, (glowing ? 0.9 : 0.68) * burnt);
      if (node.material.emissive) node.material.emissive.multiplyScalar(1 - burnt);
      if (node.material.roughness !== undefined) node.material.roughness = Math.min(1, node.material.roughness + 0.3 * burnt);
    });
  }
  mech.root.traverse((node) => { if (node.isMesh) node.castShadow = node.receiveShadow = true; });
  mech.root.scale.setScalar(MECH_SCALE);
  mech.root.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(mech.root, true);
  const center = box.getCenter(new THREE.Vector3());
  // к центру площадки: доля смещения растёт вместе с наклоном
  const slide = Math.sin(mix(previous.roll, key.roll)) / Math.sin(WRECK_KEYS[WRECK_KEYS.length - 1].roll);
  const final = finalCenter();
  mech.root.position.set(-final.x * slide, -box.min.y, -final.z * slide);
  const outer = new THREE.Group();
  outer.add(mech.root);
  outer.add(wreckDebris(mech.materials, progress >= 1));
  // точки для эффектов в игре (координаты внешней группы): пламя из пробоины у носа, дым из обеих пробоин, искры из люка
  mech.root.updateMatrixWorld(true);
  const at = (point) => body.localToWorld(point.center.clone().addScaledVector(OUTWARD, 0.06));
  outer.userData.effects = { fire: [at(BREACH)], smoke: [at(BREACH), at(ENGINE_HOLE)], wires: [at(HATCH)] };
  return outer;
}
