// Крупный рендер пришельца для проверки формы и чешуи: window.renderPreview({yaw, width, height, target, distance, walkPhase})
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { buildReptileAlien, alienWalkCycle, setAlienFacing } from './alien3.js';
import { setEnvIntensity } from './lib.js';

const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(1);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);
const environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;

window.renderPreview = (options) => {
  const { yaw = 0.6, width = 700, height = 1000, target = [0, 1.05, 0], distance = 6, fov = 22, walkPhase } = options;
  const scene = new THREE.Scene();
  scene.environment = environment;
  scene.background = new THREE.Color(0x6c7458);
  scene.add(new THREE.HemisphereLight(0xc8dcff, 0x46502c, 0.7));
  const sun = new THREE.DirectionalLight(0xfff4e0, 4.2);
  sun.position.set(-5, 8, 5);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.01;
  Object.assign(sun.shadow.camera, { left: -3, right: 3, top: 3, bottom: -3 });
  scene.add(sun);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(20, 20), new THREE.MeshStandardMaterial({ color: 0x55603f, roughness: 1 }));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);
  const alien = buildReptileAlien(walkPhase !== undefined ? alienWalkCycle(walkPhase) : 'idle');
  alien.rotation.y = yaw;
  scene.add(alien);
  setAlienFacing(alien);
  setEnvIntensity(alien, 0.28);
  const camera = new THREE.PerspectiveCamera(fov, width / height, 0.1, 50);
  const look = new THREE.Vector3(...target);
  camera.position.set(look.x, look.y + distance * 0.45, look.z + distance);
  camera.lookAt(look);
  renderer.setSize(width, height);
  renderer.render(scene, camera);
  return renderer.domElement.toDataURL('image/png');
};
window.ready = true;
