// Проверка моделей машин (vehicles.js): изометрическая камера под 35°, четыре стороны, солнце как на карте.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import * as vehicles from './vehicles.js';
import { buildMechPosed } from './mechpose.js';
import { buildStockySoldier } from './soldier2.js';
const VIEW = 480;
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setSize(VIEW * 2, VIEW * 2);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setScissorTest(true);
renderer.localClippingEnabled = true;
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xc9b48e);
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;
scene.environmentIntensity = 0.25;
scene.add(new THREE.HemisphereLight(0xc8dcff, 0x46502c, 0.7));
const sun = new THREE.DirectionalLight(0xfff4e0, 4.2);
sun.position.set(-8, 11, 6);
sun.castShadow = true;
sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.02;
sun.shadow.mapSize.set(2048, 2048);
Object.assign(sun.shadow.camera, { left: -11, right: 11, top: 11, bottom: -11, near: 1, far: 60 });
scene.add(sun);
const ground = new THREE.Mesh(new THREE.PlaneGeometry(80, 80), new THREE.MeshStandardMaterial({ color: 0xc9b48e, roughness: 1 }));
ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);
window.check = (name, lengthKey, half = 4.2, options = {}, crew = false) => {
  const model = vehicles[name](options);
  if (crew) addCrew(model);
  const length = vehicles[lengthKey].length;
  model.position.z = -length / 2;
  const holder = new THREE.Group(); holder.add(model); scene.add(holder);
  const angle = 35 * Math.PI / 180;
  [0.785, 2.356, 3.927, 5.498].forEach((yaw, index) => {
    holder.rotation.y = yaw;
    const camera = new THREE.OrthographicCamera(-half, half, half, -half, 0.1, 100);
    camera.position.set(Math.cos(angle) * 30 * Math.sin(0), Math.sin(angle) * 30 + 1.2, Math.cos(angle) * 30);
    camera.lookAt(0, half > 5 ? 2.5 : 1.2, 0);
    renderer.setViewport((index % 2) * VIEW, (1 - Math.floor(index / 2)) * VIEW, VIEW, VIEW);
    renderer.setScissor((index % 2) * VIEW, (1 - Math.floor(index / 2)) * VIEW, VIEW, VIEW);
    renderer.render(scene, camera);
  });
  scene.remove(holder);
  return renderer.domElement.toDataURL('image/png');
};
// K7 и шесть бойцов в салоне конвертоплана — для проверки размеров
function addCrew(model) {
  const info = vehicles.TILTROTOR, cell = info.cells.cell, cabin = info.cabin;
  const columnX = { A: -1.875, B: -0.625, C: 0.625, D: 1.875 };
  const rowZ = (row) => cabin.front - (row - 0.5) * cell;
  const mech = buildMechPosed(null);
  const holder = new THREE.Group(); holder.add(mech.root || mech);
  holder.position.set(0, info.floor, rowZ(1.5) - 0.25);
  holder.rotation.y = Math.PI;                  // лицом к рампе
  model.add(holder);
  info.seats.forEach(([column, row], index) => {
    const soldier = buildStockySoldier({ camo: index % 2 ? 'green' : 'black', pose: 'idle' });
    soldier.position.set(columnX[column] * 0.82, info.floor, rowZ(row));
    soldier.rotation.y = column === 'A' ? Math.PI / 2 : -Math.PI / 2;
    model.add(soldier);
  });
}
window.measure = () => {
  const mech = buildMechPosed(null), soldier = buildStockySoldier({ pose: 'idle' }), plane = vehicles.buildTiltrotor();
  const size = (object) => { const box = new THREE.Box3().setFromObject(object, true); const vector = box.getSize(new THREE.Vector3()); return { width: +vector.x.toFixed(2), height: +vector.y.toFixed(2), depth: +vector.z.toFixed(2), bottom: +box.min.y.toFixed(2) }; };
  const walking = buildMechPosed(0.25);
  return { mech: size(mech), mechWalking: size(walking), soldier: size(soldier), plane: size(plane), cabin: vehicles.TILTROTOR.cabin, floor: vehicles.TILTROTOR.floor };
};
window.ready = true;
