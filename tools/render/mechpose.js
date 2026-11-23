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

function wreckDebris() {
  const group = new THREE.Group();
  const plate = new THREE.MeshStandardMaterial({ color: 0x4d5240, roughness: 0.85, metalness: 0.3 });
  const metal = new THREE.MeshStandardMaterial({ color: 0x3c3d3a, roughness: 0.6, metalness: 0.6 });
  // [x, z, ширина, толщина, длина, поворот, материал] в метрах
  for (const [x, z, width, thickness, length, yaw, material] of [
    [1.25, 0.9, 0.42, 0.05, 0.3, 0.6, plate], [-1.1, 1.15, 0.3, 0.04, 0.22, 1.9, metal],
    [0.4, -1.35, 0.5, 0.05, 0.26, -0.4, plate], [-1.45, -0.5, 0.18, 0.12, 0.18, 0.3, metal],
  ]) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, thickness, length), material);
    mesh.position.set(x, thickness / 2, z);
    mesh.rotation.set(0, yaw, 0.08);
    mesh.castShadow = mesh.receiveShadow = true;
    group.add(mesh);
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

  // копоть и погасшие огни
  const burnt = Math.min(1, Math.max(0, (progress - 0.5) / 0.5));
  if (burnt > 0) {
    const seen = new Set();
    mech.root.traverse((node) => {
      if (!node.isMesh || seen.has(node.material)) return;
      seen.add(node.material);
      node.material.color.lerp(SOOT, 0.68 * burnt);
      if (node.material.emissive) node.material.emissive.multiplyScalar(1 - 0.95 * burnt);
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
  if (progress >= 1) outer.add(wreckDebris());
  return outer;
}
