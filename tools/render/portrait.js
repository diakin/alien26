// Портреты бойцов и картинки оружия для панели интерфейса.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { buildStockySoldier } from './soldier2.js';
import { buildRifle } from './actors.js';
import { setEnvIntensity } from './lib.js';
import { buildReptileAlien, setAlienFacing } from './alien3.js';
import { buildMechPosed } from './mechpose.js';

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(1);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild(renderer.domElement);
const environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;

const LOADOUTS = {
  black: { camo: 'black', nvg: true, scarf: true, suppressor: true },
  green: { camo: 'green', goggles: true, tanRifle: true },
};

window.renderPortrait = (camo) => {
  const studio = new THREE.Scene();
  studio.environment = environment;
  studio.background = new THREE.Color(0x1b2024);
  studio.add(new THREE.HemisphereLight(0xb8c4cc, 0x202020, 0.8));
  const key = new THREE.DirectionalLight(0xfff0dc, 2.6); key.position.set(-1.5, 2.5, 2.5); studio.add(key);
  const rim = new THREE.DirectionalLight(0x9fd8ff, 2.0); rim.position.set(2, 1.5, -2); studio.add(rim);
  let model, camera = new THREE.PerspectiveCamera(22, 300 / 360, 0.1, 40);
  if (camo === 'mech') {
    model = buildMechPosed(null);
    model.rotation.y = 0.45;
    studio.add(model);
    camera.position.set(2.6, 3.9, 9.0);
    camera.lookAt(0.15, 2.5, 0);
  } else if (camo === 'alien') {
    model = buildReptileAlien('idle');
    model.rotation.y = 1.0;
    studio.add(model);
    setAlienFacing(model);
    model.updateMatrixWorld(true);
    const head = model.localToWorld(model.userData.head.clone());
    camera.position.set(head.x + 0.3, head.y - 0.05, head.z + 2.4);
    camera.lookAt(head.x - 0.02, head.y - 0.19, head.z);
  } else {
    model = buildStockySoldier({ ...LOADOUTS[camo], pose: 'idle' });
    model.rotation.y = 0.35;
    studio.add(model);
    model.updateMatrixWorld(true);
    const head = model.localToWorld(model.userData.head.clone());
    camera.position.set(head.x + 0.5, head.y - 0.12, head.z + 2.2);
    camera.lookAt(head.x + 0.02, head.y - 0.16, head.z);
  }
  setEnvIntensity(model, 0.5);
  renderer.setClearColor(0x000000, 1);
  // пришельца рендерим вдвое крупнее и уменьшаем: мелкая чешуя без ряби
  const supersample = camo === 'alien' ? 2 : 1;
  renderer.setSize(300 * supersample, 360 * supersample);
  renderer.render(studio, camera);
  if (supersample === 1) return renderer.domElement.toDataURL('image/png');
  const reduced = document.createElement('canvas');
  reduced.width = 300; reduced.height = 360;
  const context = reduced.getContext('2d');
  context.imageSmoothingQuality = 'high';
  context.drawImage(renderer.domElement, 0, 0, 300, 360);
  return reduced.toDataURL('image/png');
};

window.renderWeapon = (camo) => {
  const scene = new THREE.Scene();
  scene.environment = environment;
  scene.add(new THREE.HemisphereLight(0xffffff, 0x404040, 1.2));
  const light = new THREE.DirectionalLight(0xffffff, 2.5); light.position.set(1, 2, 3); scene.add(light);
  const loadout = LOADOUTS[camo];
  const rifle = buildRifle({ suppressor: !!loadout.suppressor, tanFurniture: !!loadout.tanRifle });
  setEnvIntensity(rifle, 0.8);
  rifle.rotation.y = Math.PI / 2;
  const holder = new THREE.Group();
  holder.add(rifle);
  holder.rotation.z = 0.32;
  holder.position.set(-0.5, -0.2, 0);
  scene.add(holder);
  const camera = new THREE.OrthographicCamera(-0.62, 0.62, 0.5, -0.5, 0.1, 10);
  camera.position.set(0, 0, 3);
  renderer.setSize(380, 300);
  renderer.setClearColor(0x000000, 0);
  renderer.render(scene, camera);
  return renderer.domElement.toDataURL('image/png');
};
window.ready = true;
