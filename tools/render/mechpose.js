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
export function buildMechPosed(phase) {
  const mech = buildMech();
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
