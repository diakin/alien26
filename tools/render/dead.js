// Погибший и падение. buildFall(options, progress): progress 0 — стоит, 1 — лежит (тот же кадр, что спрайт *_dead).
// Боец падает на спину, пришелец — на левый бок. Позы заданы ключевыми кадрами в осях стоящей модели
// и смешиваются; одновременно модель поворачивается вокруг стоп (боец — вокруг оси x, пришелец — вокруг z).
// В конечной позе после поворота высота над землёй — это координата z стоящей модели у бойца и x у пришельца,
// конечности лежат на этой плоскости (позы dead в soldier2.js и alien2.js).
// Каждый кадр опускается на землю по точной рамке, тело смещается к центру клетки по мере падения.
// Оружие выпадает из рук и ложится рядом, рюкзак бойца в конце падения соскальзывает на землю.
import * as THREE from 'three';
import { buildStockySoldier, POSES } from './soldier2.js';
import { buildReptileAlien, buildPlasmaPistol } from './alien3.js';
import { ALIEN_POSES } from './alien2.js';
import { buildRifle } from './actors.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);

// ---------- смешивание поз ----------
function mixValue(first, second, amount) {
  if (first === undefined || first === null) return second;
  if (second === undefined || second === null) return first;
  if (first.isVector3) return first.clone().lerp(second, amount);
  if (typeof first === 'number') return first + (second - first) * amount;
  if (Array.isArray(first)) return first.map((value, index) => mixValue(value, second[index], amount));
  return amount < 0.5 ? first : second;
}
function mixSpec(first, second, amount) {
  const result = {};
  for (const key of new Set([...Object.keys(first), ...Object.keys(second)])) result[key] = mixValue(first[key], second[key], amount);
  return result;
}

// ---------- ключевые кадры ----------
// time — доля падения, angle — поворот тела к земле (рад); между ключами — линейно,
// углы подобраны так, что падение ускоряется
let soldierKeys = null, alienKeys = null;
function getSoldierKeys() {
  if (soldierKeys) return soldierKeys;
  const idle = POSES.idle, dead = POSES.dead;
  // кисти в начале — там, где они держат карабин в стойке
  const held = buildStockySoldier({ pose: 'idle' }).userData.joints.hands;
  const start = {
    ...idle, ready: 'dead', hands: held, elbowPoles: [V(-0.9, -1, -0.1), V(0.8, -1, -0.3)],
    head: [0.05, -0.1, 0], footYaw: [0.02, 0.04],
  };
  // колени подламываются, таз проседает, руки разлетаются, голова дёргается вперёд
  const buckle = {
    pelvis: V(0, 0.74, -0.05), lean: 0.3, twist: 0.08, feet: [V(-0.17, 0.11, 0.16), V(0.19, 0.11, 0.06)], footPitch: [0, 0],
    footYaw: [-0.1, 0.1], kneePole: [V(-0.2, 0, 1), V(0.2, 0, 1)], aimPitch: 0, ready: 'dead',
    hands: [V(-0.44, 1.2, 0.28), V(0.46, 1.28, 0.24)], elbowPoles: [V(-0.6, -1, -0.2), V(0.6, -1, -0.2)], head: [0.35, 0.2, 0],
  };
  // таз у земли, ноги уходят вперёд, корпус заваливается назад
  const sitting = { ...mixSpec(buckle, dead, 0.55), feet: [V(-0.24, 0.2, 0.3), V(0.23, 0.22, 0.24)], head: [-0.15, 0.5, 0] };
  soldierKeys = [
    { time: 0, angle: 0, spec: start },
    { time: 0.35, angle: 0.12, spec: buckle },
    { time: 0.7, angle: 0.85, spec: sitting },
    { time: 1, angle: Math.PI / 2, spec: dead },
  ];
  return soldierKeys;
}
function getAlienKeys() {
  if (alienKeys) return alienKeys;
  const idle = ALIEN_POSES.idle, dead = ALIEN_POSES.dead;
  const rig = buildReptileAlien('idle').userData.rig;
  const start = {
    ...idle, hands: rig.hands.map((item) => item.hand.clone()), elbowPoles: [V(-0.3, 0, -1), V(0.3, 0, -1)],
    kneePoles: [V(0, 0, 1), V(0, 0, 1)], headRoll: 0, tailLevel: dead.tailLevel, tailBlend: 0, pistol: 'none',
  };
  // колени подламываются, корпус сгибается, руки разлетаются
  const buckle = {
    pelvis: V(0, 0.95, 0), lean: 0.3, twist: 0.05, toes: idle.toes, toePitch: [0, 0], headTilt: 0.4, headRoll: 0.2, armSwing: [0, 0],
    kneePoles: [V(-0.2, 0, 1), V(0.1, 0, 1)], hands: [V(-0.46, 1.32, 0.2), V(0.42, 1.42, 0.34)], elbowPoles: [V(-1, -0.5, 0), V(1, -0.5, 0)],
    tailLevel: dead.tailLevel, tailBlend: 0, pistol: 'none',
  };
  const tipping = { ...mixSpec(buckle, dead, 0.55), tailBlend: 0.5 };
  alienKeys = [
    { time: 0, angle: 0, spec: start },
    { time: 0.35, angle: 0.15, spec: buckle },
    { time: 0.7, angle: 0.9, spec: tipping },
    { time: 1, angle: Math.PI / 2, spec: { ...dead, tailBlend: 1 } },
  ];
  return alienKeys;
}
function sampleKeys(keys, progress) {
  for (let index = 1; index < keys.length; index++) {
    const previous = keys[index - 1], next = keys[index];
    if (progress <= next.time) {
      const amount = (progress - previous.time) / (next.time - previous.time);
      return { spec: amount >= 1 ? next.spec : mixSpec(previous.spec, next.spec, amount), angle: previous.angle + (next.angle - previous.angle) * amount };
    }
  }
  const last = keys[keys.length - 1];
  return { spec: last.spec, angle: last.angle };
}

// ---------- сборка кадра ----------
const smoothstep = (edge0, edge1, value) => { const amount = Math.min(1, Math.max(0, (value - edge0) / (edge1 - edge0))); return amount * amount * (3 - 2 * amount); };

function poseModel(options, progress) {
  const alien = !!options.alien;
  const { spec, angle } = sampleKeys(alien ? getAlienKeys() : getSoldierKeys(), progress);
  const model = alien ? buildReptileAlien(spec) : buildStockySoldier({ ...options, pose: spec, pack: 'separate' });
  if (alien) model.rotation.z = angle;          // на левый бок: левая сторона (−x) внизу
  else model.rotation.x = -angle;               // на спину: спина (−z) внизу, голова в сторону −z
  model.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(model, true);   // точная рамка по вершинам: рамки повёрнутых деталей завышены
  return { model, angle, box };
}

// положение и поворот (без масштаба)
function transformOf(matrix) {
  const position = V(0, 0, 0), quaternion = new THREE.Quaternion(), scale = V(1, 1, 1);
  matrix.decompose(position, quaternion, scale);
  return { position, quaternion };
}
function matrixOf(transform) {
  return new THREE.Matrix4().compose(transform.position, transform.quaternion, V(1, 1, 1));
}
function mixTransform(first, second, amount) {
  return { position: first.position.clone().lerp(second.position, amount), quaternion: first.quaternion.clone().slerp(second.quaternion, amount) };
}
// деталь (на внешней группе без поворота) не уходит под землю
function placeAboveGround(object, transform) {
  object.position.copy(transform.position);
  object.quaternion.copy(transform.quaternion);
  object.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(object, true);
  if (box.min.y < 0) object.position.y -= box.min.y;
  object.traverse((node) => { if (node.isMesh) node.castShadow = node.receiveShadow = true; });
}

// конечное положение: смещение тела к центру клетки, где лежат оружие и рюкзак
const finals = new Map();
function finalLayout(options) {
  const key = JSON.stringify(['alien', 'camo', 'nvg', 'scarf', 'goggles', 'tanRifle', 'suppressor'].map((name) => options[name]));
  if (finals.has(key)) return finals.get(key);
  const alien = !!options.alien;
  const { model, box } = poseModel(options, 1);
  const center = box.getCenter(V(0, 0, 0));
  const layout = { offset: V(-center.x, 0, -center.z) };
  if (alien) {
    // пистолет выпал из правой (верхней) руки и лежит перед кистью
    model.position.set(layout.offset.x, -box.min.y, layout.offset.z);
    model.updateMatrixWorld(true);
    const hand = model.localToWorld(model.userData.rig.hands.find((item) => item.side === 1).hand.clone());
    layout.weapon = { position: V(hand.x + 0.05, 0.03, hand.z + 0.32), quaternion: new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 2.2, Math.PI / 2)) };
  } else {
    // карабин у правого бедра, рюкзак плашмя за левым плечом
    layout.weapon = { position: V(0.75, 0.035, -0.15), quaternion: new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0.5, Math.PI / 2)) };
    layout.pack = { position: V(-0.62, 0.09, -0.95), quaternion: new THREE.Quaternion().setFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0.5)) };
  }
  finals.set(key, layout);
  return layout;
}

// оружие в руках в стойке: положение в координатах стоящей модели
const heldWeapons = new Map();
function heldWeapon(options) {
  const key = options.alien ? 'alien' : 'soldier';
  if (heldWeapons.has(key)) return heldWeapons.get(key);
  let matrix;
  if (options.alien) {
    const model = buildReptileAlien('idle');
    model.updateMatrixWorld(true);
    matrix = model.getObjectByName('pistol').matrixWorld.clone();
  } else {
    const rifle = buildStockySoldier({ pose: 'idle' }).userData.rifle;
    rifle.updateMatrix();
    matrix = rifle.matrix.clone();
  }
  heldWeapons.set(key, matrix);
  return matrix;
}

export function buildFall(options, progress) {
  const alien = !!options.alien;
  const layout = finalLayout(options);
  const { model, angle, box } = poseModel(options, progress);
  const lying = new THREE.Group();
  lying.add(model);
  // таз опускается почти отвесно: смещение к центру клетки следует за поворотом тела
  const slide = Math.sin(angle);
  model.position.set(layout.offset.x * slide, -box.min.y, layout.offset.z * slide);
  model.updateMatrixWorld(true);

  // оружие: держится в руках и поворачивается с телом, затем выпадает и ложится рядом
  const weapon = alien ? buildPlasmaPistol() : buildRifle({ tanFurniture: !!options.tanRifle, suppressor: !!options.suppressor });
  const held = transformOf(model.matrixWorld.clone().multiply(heldWeapon(options)));
  lying.add(weapon);
  placeAboveGround(weapon, mixTransform(held, layout.weapon, smoothstep(0.15, 0.9, progress)));

  // рюкзак: на спине, в конце падения соскальзывает на землю
  const pack = model.userData.pack;
  if (pack) {
    pack.updateMatrix();
    const onBack = transformOf(model.matrixWorld.clone().multiply(pack.matrix));
    lying.add(pack);
    placeAboveGround(pack, mixTransform(onBack, layout.pack, smoothstep(0.8, 1, progress)));
  }

  const outer = new THREE.Group();
  outer.add(lying);
  outer.userData.model = model;
  return outer;
}

export function buildDead(options) {
  return buildFall(options, 1);
}

// Высоты суставов над землёй после укладки (для проверки позы)
export function lyingJoints(outer) {
  const model = outer.userData.model;
  outer.updateMatrixWorld(true);
  const world = (point) => model.localToWorld(point.clone());
  const result = {};
  const joints = model.userData.joints;
  if (joints) {
    for (const [name, value] of Object.entries(joints)) {
      result[name] = Array.isArray(value) ? value.map(world) : world(value);
    }
  } else {
    const rig = model.userData.rig;
    result.shoulders = rig.hands.map((item) => world(item.shoulder));
    result.elbows = rig.hands.map((item) => world(item.elbow));
    result.hands = rig.hands.map((item) => world(item.hand));
    result.hips = rig.legs.map((item) => world(item.hip));
    result.knees = rig.legs.map((item) => world(item.knee));
    result.ankles = rig.legs.map((item) => world(item.ankle));
    result.toes = rig.legs.map((item) => world(item.toe));
    result.tail = rig.tail.map(world);
    result.head = world(model.userData.head);
  }
  return result;
}
