// Боец, коренастое телосложение: широкие плечи, объёмная экипировка, толстые конечности.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { segment, ball, solveTwoBone, fabricNormalTexture, setShadows } from './lib.js';
import { soldierMaterials, buildRifle } from './actors.js';
import { clothLimb, FOLDS, buildBoot } from './cloth.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);

function box(width, height, depth, material, radius = 0.01) {
  const mesh = new THREE.Mesh(new RoundedBoxGeometry(width, height, depth, 3, Math.min(radius, width / 2.2, height / 2.2, depth / 2.2)), material);
  mesh.castShadow = mesh.receiveShadow = true;
  return mesh;
}

// конечность: усечённый конус с шарами на концах (без швов)
function limb(group, start, end, radiusStart, radiusEnd, material) {
  group.add(segment(start, end, radiusStart, radiusEnd, material, 14));
  group.add(ball(start, radiusStart, material, [1, 1, 1], 14));
  group.add(ball(end, radiusEnd, material, [1, 1, 1], 14));
}

let fabricNormal = null;
const prepared = {};
function materialsFor(camo) {
  if (prepared[camo]) return prepared[camo];
  if (!fabricNormal) {
    fabricNormal = fabricNormalTexture();
    fabricNormal.repeat.set(3, 3);
  }
  const base = soldierMaterials(camo);
  const materials = { ...base };
  materials.cloth = base.cloth.clone();
  materials.cloth.normalMap = fabricNormal;
  materials.cloth.normalScale = new THREE.Vector2(1.1, 1.1);
  materials.cloth.roughness = 1;
  materials.gear = base.gear.clone();
  materials.gear.normalMap = fabricNormal;
  materials.gear.normalScale = new THREE.Vector2(0.6, 0.6);
  materials.gear.roughness = 0.95;
  const black = camo === 'black';
  materials.boot = new THREE.MeshStandardMaterial({ color: black ? 0x1c1d1e : 0x5c4c38, roughness: 0.88 });
  materials.sole = new THREE.MeshStandardMaterial({ color: black ? 0x0e0e0e : 0x3a3128, roughness: 0.9 });
  materials.lace = new THREE.MeshStandardMaterial({ color: black ? 0x2a2a2a : 0x4a3e2e, roughness: 0.9 });
  prepared[camo] = materials;
  return materials;
}

export const POSES = {
  idle: { pelvis: V(0, 0.94, 0), lean: 0.05, twist: 0.12, feet: [V(-0.14, 0.11, 0.06), V(0.15, 0.11, -0.04)], footPitch: [0, 0], kneePole: [V(-0.1, 0, 1), V(0.1, 0, 1)], aimPitch: -0.55, ready: 'low' },
  standAim: { pelvis: V(0, 0.93, 0), lean: 0.12, twist: 0.32, feet: [V(-0.16, 0.11, 0.26), V(0.18, 0.11, -0.2)], footPitch: [0, 0.15], kneePole: [V(0, 0, 1), V(0.2, 0, 1)], aimPitch: 0.02, ready: 'aim' },
  kneelAim: { pelvis: V(0.02, 0.6, -0.06), lean: 0.2, twist: 0.36, feet: [V(-0.16, 0.11, 0.38), V(0.18, 0.13, -0.5)], footPitch: [0, 1.0], kneePole: [V(0, 0.2, 1), V(0, -1, 0.5)], aimPitch: 0.05, ready: 'aim' },
  crouchAim: { pelvis: V(0, 0.58, -0.12), lean: 0.38, twist: 0.3, feet: [V(-0.17, 0.11, 0.24), V(0.19, 0.11, -0.12)], footPitch: [0, 0.35], kneePole: [V(-0.3, 0, 1), V(0.3, 0, 1)], aimPitch: 0.12, ready: 'aim' },
  walk: { pelvis: V(0, 0.9, 0), lean: 0.16, twist: 0.22, feet: [V(-0.13, 0.11, 0.3), V(0.14, 0.18, -0.3)], footPitch: [-0.1, 0.55], kneePole: [V(0, 0, 1), V(0, 0, 1)], aimPitch: -0.5, ready: 'low' },
};

// цикл ходьбы: phase 0..1 (два шага), шаг 0.7 м
export function walkCycle(phase) {
  const smooth = (value) => value * value * (3 - 2 * value);
  const leg = (offset) => {
    const q = (phase + offset) % 1;
    if (q < 0.5) return { z: 0.33 - (q / 0.5) * 0.66, y: 0.11, pitch: 0 };
    const s = (q - 0.5) / 0.5;
    return { z: -0.33 + 0.66 * smooth(s), y: 0.11 + 0.13 * Math.sin(Math.PI * s), pitch: -0.25 * Math.sin(Math.PI * s) };
  };
  const left = leg(0), right = leg(0.5);
  const bob = Math.cos(phase * Math.PI * 4);
  return {
    pelvis: V(0, 0.9 + 0.022 * bob, 0.02),
    lean: 0.1,
    twist: 0.18 + 0.06 * Math.sin(phase * Math.PI * 2),
    feet: [V(-0.13, left.y, left.z), V(0.13, right.y, right.z)],
    footPitch: [left.pitch, right.pitch],
    kneePole: [V(-0.05, 0, 1), V(0.05, 0, 1)],
    aimPitch: -0.5,
    ready: 'low',
  };
}

export function buildStockySoldier({ camo = 'black', pose = 'idle', nvg = false, goggles = false, scarf = false, pack = true, tanRifle = false, suppressor = false } = {}) {
  const spec = typeof pose === 'string' ? POSES[pose] : pose;
  const materials = materialsFor(camo);
  const soldier = new THREE.Group();
  const add = (object) => { soldier.add(object); return object; };
  const placed = (mesh, position, quaternion) => { mesh.position.copy(position); mesh.quaternion.copy(quaternion); return add(mesh); };

  const pelvis = spec.pelvis.clone();
  const torsoQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(spec.lean, spec.twist, 0, 'YXZ'));
  const pelvisQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(spec.lean * 0.3, spec.twist * 0.5, 0, 'YXZ'));
  const local = (x, y, z, origin = pelvis, quat = torsoQuat) => V(x, y, z).applyQuaternion(quat).add(origin);
  const hipLocal = (x, y, z) => local(x, y, z, pelvis, pelvisQuat);

  // таз, пояс
  placed(box(0.4, 0.24, 0.27, materials.cloth, 0.09), pelvis, pelvisQuat);
  placed(box(0.44, 0.075, 0.31, materials.gearDark, 0.03), hipLocal(0, 0.08, 0), pelvisQuat);
  for (const [x, z, width] of [[-0.12, 0.15, 0.07], [-0.03, 0.155, 0.07], [0.215, -0.02, 0.07], [0.1, -0.15, 0.12], [-0.12, -0.15, 0.09]]) {
    placed(box(width, 0.11, 0.07, materials.gear, 0.018), hipLocal(x, 0.03, z), pelvisQuat);
  }
  const abdomen = add(clothLimb(local(0, 0.04, 0), local(0, 0.26, 0), 0.175, 0.195, materials.cloth, FOLDS.torso(4)));
  abdomen.scale.set(1, 1, 0.78);

  // корпус и плитник
  const chest = local(0, 0.33, 0);
  placed(box(0.46, 0.42, 0.29, materials.cloth, 0.11), chest, torsoQuat);
  placed(box(0.4, 0.36, 0.075, materials.gear, 0.025), local(0, 0.34, 0.165), torsoQuat);
  placed(box(0.4, 0.38, 0.075, materials.gear, 0.025), local(0, 0.35, -0.165), torsoQuat);
  for (const side of [-1, 1]) {
    placed(box(0.075, 0.2, 0.27, materials.gear, 0.02), local(side * 0.235, 0.26, 0), torsoQuat);
    placed(box(0.075, 0.035, 0.36, materials.gearDark, 0.012), local(side * 0.13, 0.53, 0), torsoQuat);
  }
  for (let index = 0; index < 4; index++) {
    const x = -0.135 + index * 0.09;
    placed(box(0.084, 0.15, 0.065, materials.gear, 0.014), local(x, 0.23, 0.225), torsoQuat);
    placed(box(0.086, 0.035, 0.07, materials.gearDark, 0.01), local(x, 0.305, 0.228), torsoQuat);
  }
  placed(box(0.19, 0.09, 0.05, materials.gearDark, 0.012), local(0, 0.4, 0.215), torsoQuat);
  placed(box(0.08, 0.05, 0.012, materials.patch, 0.004), local(0.1, 0.46, 0.205), torsoQuat);
  placed(box(0.08, 0.17, 0.07, materials.plastic, 0.014), local(-0.25, 0.37, -0.08), torsoQuat);
  const antenna = add(segment(local(-0.25, 0.45, -0.1), local(-0.3, 0.8, -0.2), 0.006, 0.004, materials.plastic, 5));
  antenna.castShadow = false;
  if (pack) {
    placed(box(0.34, 0.36, 0.17, materials.gear, 0.05), local(0, 0.36, -0.29), torsoQuat);
    placed(box(0.3, 0.08, 0.16, materials.gearDark, 0.035), local(0, 0.56, -0.29), torsoQuat);
    placed(box(0.06, 0.2, 0.05, materials.gear, 0.015), local(0.19, 0.3, -0.29), torsoQuat);
  }

  // голова
  const neckBase = local(0, 0.58, 0.0);
  const headQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(spec.ready === 'aim' ? 0.15 : 0.05, -spec.twist * 0.85, spec.ready === 'aim' ? 0.12 : 0, 'YXZ'));
  const headCenter = neckBase.clone().add(V(0, 0.15, 0.02).applyQuaternion(headQuat));
  if (spec.ready === 'aim') headCenter.add(V(0.035, -0.02, 0.035));
  const headLocal = (x, y, z) => V(x, y, z).applyQuaternion(headQuat).add(headCenter);
  add(segment(neckBase, headCenter, 0.075, 0.065, materials.scarf, 12));
  add(ball(headCenter, 0.106, materials.scarf, [0.96, 1.08, 1.0], 18));
  if (scarf) {
    const wrap = add(new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.055, 10, 18), materials.scarf));
    wrap.position.copy(neckBase.clone().add(V(0, 0.03, 0.02))); wrap.quaternion.copy(torsoQuat); wrap.rotateX(Math.PI / 2);
    wrap.castShadow = true;
    const tail = placed(box(0.14, 0.18, 0.035, materials.scarf, 0.015), local(0.03, 0.5, 0.2), torsoQuat);
    tail.rotateZ(0.2);
  }
  const helmet = add(new THREE.Mesh(new THREE.SphereGeometry(0.143, 24, 14, 0, Math.PI * 2, 0, Math.PI * 0.56), materials.helmet));
  helmet.position.copy(headLocal(0, 0.022, -0.005)); helmet.quaternion.copy(headQuat); helmet.scale.set(1, 0.94, 1.08);
  helmet.castShadow = true;
  placed(box(0.07, 0.012, 0.06, materials.patch, 0.004), headLocal(0, 0.155, -0.02), headQuat);
  for (const side of [-1, 1]) {
    placed(box(0.014, 0.028, 0.16, materials.plastic, 0.005), headLocal(side * 0.14, 0.02, 0), headQuat);
    const cup = add(new THREE.Mesh(new THREE.CylinderGeometry(0.056, 0.058, 0.055, 18).rotateZ(Math.PI / 2), materials.earPro));
    cup.position.copy(headLocal(side * 0.13, -0.03, 0)); cup.quaternion.copy(headQuat); cup.castShadow = true;
  }
  placed(box(0.3, 0.016, 0.034, materials.earPro, 0.006), headLocal(0, 0.11, 0), headQuat);
  placed(box(0.045, 0.04, 0.025, materials.plastic, 0.007), headLocal(0, 0.065, 0.145), headQuat);
  if (nvg) {
    for (const side of [-1, 1]) {
      const tube = add(new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.022, 0.08, 14), materials.plastic));
      tube.position.copy(headLocal(side * 0.028, 0.11, 0.15)); tube.quaternion.copy(headQuat); tube.rotateX(-0.4);
      tube.castShadow = true;
    }
  }
  if (goggles) placed(box(0.19, 0.055, 0.035, materials.goggle, 0.016), headLocal(0, 0.01, 0.105), headQuat);
  else placed(box(0.165, 0.038, 0.022, materials.lens, 0.011), headLocal(0, 0.005, 0.104), headQuat);

  // оружие
  const shoulders = [local(-0.24, 0.48, 0.0), local(0.24, 0.48, 0.0)];
  const rifle = buildRifle({ tanFurniture: tanRifle, suppressor });
  rifle.quaternion.setFromEuler(new THREE.Euler(-spec.aimPitch, spec.ready === 'aim' ? 0 : -0.45, spec.ready === 'aim' ? -0.05 : 0, 'YXZ'));
  rifle.position.copy(spec.ready === 'aim' ? shoulders[1].clone().add(V(-0.09, -0.03, 0.09)) : shoulders[1].clone().add(V(-0.06, -0.11, 0.12)));
  add(rifle);
  rifle.updateMatrixWorld(true);
  const hands = [rifle.localToWorld(rifle.userData.support.clone()), rifle.localToWorld(rifle.userData.grip.clone())];

  // руки
  const elbowPoles = [V(-0.9, -1, -0.1).applyQuaternion(torsoQuat), V(0.8, -1, -0.3).applyQuaternion(torsoQuat)];
  [0, 1].forEach((side) => {
    const shoulder = shoulders[side];
    const elbow = solveTwoBone(shoulder, hands[side], 0.29, 0.28, elbowPoles[side]);
    add(ball(shoulder, 0.092, materials.cloth, [1, 1, 1], 16));
    add(clothLimb(shoulder, elbow, 0.088, 0.072, materials.cloth, FOLDS.upperArm(side * 3 + 1)));
    add(ball(elbow, 0.074, materials.cloth, [1, 1, 1], 14));
    const wrist = hands[side].clone().lerp(elbow, 0.12);
    add(clothLimb(elbow, wrist, 0.074, 0.058, materials.cloth, FOLDS.forearm(side * 3 + 2)));
    add(ball(wrist, 0.056, materials.glove, [1, 1, 1], 12));
    const forearm = new THREE.Vector3().subVectors(hands[side], elbow).normalize();
    const upperArm = new THREE.Vector3().subVectors(elbow, shoulder).normalize();
    const elbowPad = add(box(0.1, 0.1, 0.05, materials.plastic, 0.02));
    elbowPad.position.copy(elbow.clone().add(upperArm.clone().sub(forearm).normalize().multiplyScalar(0.06)));
    elbowPad.quaternion.setFromUnitVectors(V(0, 0, 1), upperArm.clone().sub(forearm).normalize());
    placed(box(0.09, 0.065, 0.12, materials.glove, 0.025), hands[side], rifle.quaternion);
    const pad = add(ball(shoulder.clone().add(V(side ? 0.035 : -0.035, 0.03, 0)), 0.09, materials.gearDark, [1, 0.55, 1.05]));
    pad.quaternion.copy(torsoQuat);
  });

  // ноги
  const hipJoints = [hipLocal(-0.12, -0.05, 0), hipLocal(0.12, -0.05, 0)];
  [0, 1].forEach((side) => {
    const hip = hipJoints[side];
    const ankle = spec.feet[side];
    const knee = solveTwoBone(hip, ankle, 0.45, 0.45, spec.kneePole[side]);
    add(ball(hip, 0.128, materials.cloth, [1, 1, 1], 16));
    add(clothLimb(hip, knee, 0.13, 0.098, materials.cloth, FOLDS.thigh(side * 5 + 7)));
    add(ball(knee, 0.096, materials.cloth, [1, 1, 1], 14));
    // штанина заканчивается напуском поверх голенища ботинка
    const cuff = ankle.clone().add(V(0, 0.145, 0));
    add(clothLimb(knee, cuff, 0.095, 0.082, materials.cloth, FOLDS.shin(side * 5 + 9)));
    const thighDirection = new THREE.Vector3().subVectors(knee, hip).normalize();
    const shinDirection = new THREE.Vector3().subVectors(ankle, knee).normalize();
    const outward = thighDirection.clone().sub(shinDirection).normalize();
    const kneePad = add(box(0.14, 0.16, 0.065, materials.plastic, 0.025));
    kneePad.position.copy(knee.clone().add(outward.clone().multiplyScalar(0.07)));
    kneePad.quaternion.setFromUnitVectors(V(0, 0, 1), outward);
    // карман на бедре снаружи
    const sideAxis = V(side ? 1 : -1, 0, 0).applyQuaternion(pelvisQuat);
    const pocket = add(box(0.06, 0.15, 0.14, materials.cloth, 0.02));
    pocket.position.copy(hip.clone().lerp(knee, 0.5).add(sideAxis.multiplyScalar(0.11)));
    pocket.quaternion.setFromUnitVectors(V(0, -1, 0), thighDirection);
    // ботинок
    const bootQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(spec.footPitch[side], spec.twist * 0.3 * (side ? 1 : 0.5), 0, 'YXZ'));
    const boot = buildBoot(materials);
    boot.scale.setScalar(1.04);
    boot.quaternion.copy(bootQuat);
    boot.position.copy(ankle.clone().add(V(0, -0.11 * 1.04, 0).applyQuaternion(bootQuat)));
    add(boot);
    if (side === 1) {
      const holster = add(box(0.07, 0.19, 0.12, materials.plastic, 0.018));
      holster.position.copy(hip.clone().lerp(knee, 0.35).add(V(0.12, 0, 0.02).applyQuaternion(pelvisQuat)));
      holster.quaternion.setFromUnitVectors(V(0, -1, 0), thighDirection);
    }
  });

  setShadows(soldier);
  soldier.userData = { head: headCenter.clone(), muzzle: rifle.localToWorld(rifle.userData.muzzle.clone()), rifle };
  return soldier;
}
