// Погибший: модель строится в позе dead и укладывается на землю (боец — на спину, пришелец — на левый бок).
// Позы dead в soldier2.js и alien2.js заданы в осях стоящей модели, но так, что после укладки конечности
// лежат на плоскости земли: у бойца высота над землёй — это координата z стоящей модели, у пришельца — x.
// Тело центрируется на клетке, оружие лежит рядом. Поворот на направление — у внешней группы.
import * as THREE from 'three';
import { buildStockySoldier } from './soldier2.js';
import { buildReptileAlien, buildPlasmaPistol } from './alien3.js';
import { buildRifle } from './actors.js';

export function buildDead(options) {
  const alien = !!options.alien;
  // рюкзак снят: с ним тело лежало бы на рюкзаке с приподнятыми на 0,3 м плечами
  const model = alien ? buildReptileAlien('dead') : buildStockySoldier({ ...options, pose: 'dead', pack: false });
  const lying = new THREE.Group();
  lying.add(model);
  if (alien) model.rotation.z = Math.PI / 2;          // на левый бок: левая сторона (−x) внизу
  else model.rotation.x = -Math.PI / 2;               // на спину: спина (−z) внизу, голова в сторону −z
  model.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(model, true);   // точная рамка по вершинам: рамки повёрнутых деталей завышены
  const center = box.getCenter(new THREE.Vector3());
  model.position.set(-center.x, -box.min.y, -center.z);
  model.updateMatrixWorld(true);
  // оружие на земле у правой руки
  const weapon = alien ? buildPlasmaPistol() : buildRifle({ tanFurniture: !!options.tanRifle, suppressor: !!options.suppressor });
  weapon.rotation.set(0, alien ? 2.2 : 0.5, Math.PI / 2);
  if (alien) {
    // пистолет выпал из правой (верхней) руки и лежит перед кистью
    const hand = model.localToWorld(model.userData.rig.hands.find((item) => item.side === 1).hand.clone());
    weapon.position.set(hand.x + 0.05, 0.03, hand.z + 0.32);
  } else {
    weapon.position.set(0.75, 0.035, -0.15);
  }
  weapon.traverse((node) => { if (node.isMesh) node.castShadow = node.receiveShadow = true; });
  lying.add(weapon);
  const outer = new THREE.Group();
  outer.add(lying);
  outer.userData.model = model;
  return outer;
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
