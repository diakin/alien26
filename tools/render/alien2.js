// Пришелец, коренастое телосложение: только тело, без снаряжения.
// Высокий (около 2 м), широкая грудная клетка, толстые конечности, пальцевая стопа с обратным суставом.
import * as THREE from 'three';
import { segment, ball, solveTwoBone, setShadows } from './lib.js';
import { alienMaterials, getAlienHeadGeometry } from './actors.js';
import { clothLimb } from './cloth.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);

// складки кожи у суставов (неглубокие, без мешковатости одежды)
const SKIN = {
  thigh: (seed) => ({ seed, noiseAmp: 0.03, folds: [{ t: 0.88, amp: 0.05, width: 0.03 }], bulge: (t) => 0.14 * Math.sin(t * Math.PI * 0.85) }),
  shin: (seed) => ({ seed, noiseAmp: 0.03, folds: [{ t: 0.1, amp: 0.05, width: 0.03 }], bulge: (t) => 0.12 * Math.sin(t * Math.PI) * (1 - t * 0.5) }),
  upperArm: (seed) => ({ seed, noiseAmp: 0.03, folds: [{ t: 0.85, amp: 0.06, width: 0.03 }, { t: 0.92, amp: 0.05, width: 0.025 }], bulge: (t) => 0.16 * Math.sin(t * Math.PI * 0.9) }),
  forearm: (seed) => ({ seed, noiseAmp: 0.03, folds: [{ t: 0.1, amp: 0.06, width: 0.03 }], bulge: (t) => 0.12 * Math.sin(t * Math.PI * 0.7) }),
};

export const ALIEN_POSES = {
  idle: { pelvis: V(0, 1.16, 0), lean: 0.06, twist: 0.08, toes: [V(-0.17, 0, 0.14), V(0.17, 0, 0.02)], toePitch: [0, 0], headTilt: 0.02, armSwing: [0, 0] },
};

// цикл ходьбы: phase 0..1 (два шага), шаг 0.6 м, за цикл 1.2 м
export const ALIEN_STRIDE = 1.2;
export function alienWalkCycle(phase) {
  const half = ALIEN_STRIDE / 4;
  const smooth = (value) => value * value * (3 - 2 * value);
  const leg = (offset) => {
    const q = (phase + offset) % 1;
    if (q < 0.5) return { z: half - (q / 0.5) * half * 2, y: 0, pitch: 0 };
    const s = (q - 0.5) / 0.5;
    return { z: -half + half * 2 * smooth(s), y: 0.15 * Math.sin(Math.PI * s), pitch: -0.4 * Math.sin(Math.PI * s) };
  };
  const left = leg(0), right = leg(0.5);
  const bob = Math.cos(phase * Math.PI * 4);
  return {
    pelvis: V(0, 1.1 + 0.025 * bob, 0.03),
    lean: 0.14,
    twist: 0.1 * Math.sin(phase * Math.PI * 2),
    toes: [V(-0.16, left.y, left.z), V(0.16, right.y, right.z)],
    toePitch: [left.pitch, right.pitch],
    headTilt: 0.04,
    // руки качаются навстречу ногам
    armSwing: [-(left.z / half) * 0.35, -(right.z / half) * 0.35],
  };
}

export function buildStockyAlien(pose = 'idle') {
  const spec = typeof pose === 'string' ? ALIEN_POSES[pose] : pose;
  const materials = alienMaterials();
  const alien = new THREE.Group();
  const add = (object) => { alien.add(object); return object; };
  const pelvis = spec.pelvis.clone();
  const torsoQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(spec.lean, spec.twist, 0, 'YXZ'));
  const local = (x, y, z) => V(x, y, z).applyQuaternion(torsoQuat).add(pelvis);
  const oriented = (mesh) => { mesh.quaternion.copy(torsoQuat); return mesh; };

  // таз, живот, грудная клетка
  oriented(add(ball(pelvis, 0.16, materials.skin, [1.25, 0.78, 0.95], 18)));
  oriented(add(ball(local(0, 0.2, 0.02), 0.17, materials.skin, [1.05, 1.15, 0.88], 18)));
  oriented(add(ball(local(0, 0.46, 0.0), 0.22, materials.skin, [1.12, 1.12, 0.82], 22)));
  // ключичный валик и трапеции
  oriented(add(ball(local(0, 0.6, -0.01), 1, materials.skin, [0.24, 0.07, 0.11], 16)));
  // биологические хитиновые пластины: грудина, наплечья, хребет
  oriented(add(ball(local(0, 0.5, 0.11), 0.13, materials.chitin, [1.05, 0.8, 0.42], 16)));
  for (let plate = 0; plate < 6; plate++) {
    const spine = oriented(add(ball(local(0, 0.12 + plate * 0.09, -0.15 - Math.sin(plate / 5 * Math.PI) * 0.03), 0.045, materials.chitin, [1.2, 0.8, 0.9], 10)));
    spine.rotateX(0.4);
  }
  const shoulders = [local(-0.21, 0.58, 0), local(0.21, 0.58, 0)];
  shoulders.forEach((shoulder, side) => {
    const pauldron = oriented(add(ball(shoulder.clone().add(V(side ? 0.015 : -0.015, 0.035, 0)), 0.085, materials.chitin, [1.0, 0.65, 1.1], 14)));
    pauldron.rotateZ(side ? -0.35 : 0.35);
  });

  // шея и голова
  const neckBase = local(0, 0.6, 0.02);
  const headQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(spec.headTilt, -spec.twist * 0.6, 0, 'YXZ'));
  const headBase = neckBase.clone().add(V(0, 0.22, 0.05).applyQuaternion(headQuat));
  add(segment(neckBase, headBase, 0.075, 0.05, materials.skin, 12));
  for (const side of [-1, 1]) add(segment(neckBase.clone().add(V(side * 0.05, 0, 0.02)), headBase.clone().add(V(side * 0.025, -0.02, 0.03)), 0.022, 0.014, materials.skin, 8));
  const headLocal = (x, y, z) => V(x, y, z).applyQuaternion(headQuat).add(headBase);
  const skull = add(new THREE.Mesh(getAlienHeadGeometry(), materials.skin));
  skull.position.copy(headLocal(0, 0.09, 0));
  skull.quaternion.copy(headQuat);
  skull.scale.setScalar(1.12);
  for (const side of [-1, 1]) {
    const eye = add(ball(headLocal(side * 0.052, 0.11, 0.107), 1, materials.eye, [0.05, 0.027, 0.022], 16));
    eye.quaternion.copy(headQuat); eye.rotateZ(side * 0.42); eye.rotateY(side * 0.45);
  }
  const mouth = add(new THREE.Mesh(new THREE.BoxGeometry(0.034, 0.005, 0.01), materials.dark));
  mouth.position.copy(headLocal(0, -0.045, 0.085)); mouth.quaternion.copy(headQuat);

  // руки: висят и качаются при ходьбе
  [0, 1].forEach((side) => {
    const sign = side ? 1 : -1;
    const shoulder = shoulders[side];
    const swing = spec.armSwing[side];
    const hand = shoulder.clone().add(V(sign * 0.08, -0.62, 0.06 + swing * 0.5).applyQuaternion(torsoQuat));
    const elbow = solveTwoBone(shoulder, hand, 0.36, 0.36, V(sign * 0.3, 0, -1).applyQuaternion(torsoQuat));
    add(ball(shoulder, 0.088, materials.skin, [1, 1, 1], 14));
    add(clothLimb(shoulder, elbow, 0.085, 0.06, materials.skin, SKIN.upperArm(side * 3 + 1)));
    add(ball(elbow, 0.06, materials.skin, [1, 1, 1], 12));
    add(clothLimb(elbow, hand, 0.062, 0.043, materials.skin, SKIN.forearm(side * 3 + 2)));
    add(ball(hand, 0.042, materials.skin, [1, 0.8, 1.15], 12));
    const forward = new THREE.Vector3().subVectors(hand, elbow).normalize();
    for (let finger = -1; finger <= 1; finger++) {
      const base = hand.clone().add(V(finger * 0.022, -0.015, 0.01).applyQuaternion(torsoQuat));
      const tip = base.clone().add(forward.clone().multiplyScalar(0.11)).add(V(0, -0.02, 0.03).applyQuaternion(torsoQuat));
      add(segment(base, tip, 0.014, 0.008, materials.skin, 6));
    }
  });

  // ноги: бедро, голень, плюсна, три пальца
  const hips = [local(-0.13, -0.04, 0), local(0.13, -0.04, 0)];
  [0, 1].forEach((side) => {
    const hip = hips[side];
    const toe = spec.toes[side].clone();
    const toeQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(spec.toePitch[side], 0, 0));
    const ankle = toe.clone().add(V(0, 0.27, -0.15).applyQuaternion(toeQuat));
    const knee = solveTwoBone(hip, ankle, 0.5, 0.46, V(0, 0, 1));
    add(ball(hip, 0.14, materials.skin, [1, 1, 1], 14));
    add(clothLimb(hip, knee, 0.14, 0.085, materials.skin, SKIN.thigh(side * 5 + 7)));
    add(ball(knee, 0.082, materials.skin, [1, 1, 1], 12));
    add(clothLimb(knee, ankle, 0.08, 0.052, materials.skin, SKIN.shin(side * 5 + 9)));
    add(ball(ankle, 0.052, materials.chitin, [1, 1, 1], 10));
    add(segment(ankle, toe.clone().add(V(0, 0.025, 0)), 0.052, 0.04, materials.skin, 10));
    add(ball(toe.clone().add(V(0, 0.025, 0)), 0.04, materials.skin, [1.2, 0.7, 1.2], 10));
    for (let digit = -1; digit <= 1; digit++) {
      add(segment(toe.clone().add(V(digit * 0.03, 0.022, 0.01)), toe.clone().add(V(digit * 0.055, 0.008, 0.12).applyQuaternion(toeQuat)), 0.019, 0.01, materials.chitin, 6));
    }
    const kneePlate = add(ball(knee.clone().add(V(0, 0.02, 0.035)), 0.06, materials.chitin, [0.95, 1.1, 0.6], 10));
    kneePlate.castShadow = true;
  });

  setShadows(alien);
  alien.userData.head = headBase.clone().add(V(0, 0.1, 0));
  return alien;
}
