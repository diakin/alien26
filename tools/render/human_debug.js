// Отладка людей (human.js, civilian.js): виды головы и фигуры с нескольких сторон. window.renderViews(kind, pose, mode)
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { buildCivilian, prepareHuman, civilianWalk, civilianFall, armedWalk } from './civilian.js';
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild(renderer.domElement);
const environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;
window.renderViews = async (kind, pose = 'idle', mode = 'head') => {
  await prepareHuman(kind);
  const scene = new THREE.Scene();
  scene.environment = environment;
  scene.background = new THREE.Color(0x30363a);
  scene.add(new THREE.HemisphereLight(0xb8c4cc, 0x202020, 0.8));
  const key = new THREE.DirectionalLight(0xfff0dc, 2.4); key.position.set(-1.5, 2.5, 2.5); scene.add(key);
  const fill = new THREE.DirectionalLight(0xffffff, 0.8); fill.position.set(2, 1, 2); scene.add(fill);
  const armed = pose.startsWith('a-'); const name = armed ? pose.slice(2) : pose;
  const model = name.startsWith('fall') ? civilianFall(kind, +name.slice(4), armed)
    : buildCivilian({ kind, armed, pose: name === 'walk' ? (armed ? armedWalk(0.25) : civilianWalk(0.25)) : name });
  if (!model.userData.head) model.userData.head = new THREE.Vector3(0, 0.3, 0);
  scene.add(model);
  // отладка: показать только сетки с указанным именем (garment, hair, body)
  if (window.debugOnly) model.traverse((node) => { if (node.isMesh) node.visible = node.name === window.debugOnly || node.userData.layer === window.debugOnly; });
  model.updateMatrixWorld(true);
  const head = model.userData.head.clone();
  // torso — корпус крупно: спина, бок, перед
  const big = mode === 'head' || mode === 'torso';
  const size = big ? 360 : 300, views = mode === 'head' ? [0, Math.PI / 2, Math.PI, -0.6] : mode === 'torso' ? [Math.PI, Math.PI * 0.75, Math.PI / 2, 0] : [0, 0.8, Math.PI / 2, Math.PI];
  renderer.setSize(size * views.length, mode === 'head' ? size : size * 2);
  renderer.setScissorTest(true);
  views.forEach((angle, index) => {
    const camera = new THREE.PerspectiveCamera(mode === 'head' ? 18 : mode === 'torso' ? 22 : 30, mode === 'head' ? 1 : 0.5, 0.05, 30);
    const target = mode === 'head' ? head : new THREE.Vector3(0, pose.includes('fall') ? 0.25 : mode === 'torso' ? 1.1 : 0.9, 0);
    const distance = mode === 'head' ? 1.0 : mode === 'torso' ? 2.6 : 4.2;
    const lift = index === 3 && mode === 'head' ? 0.6 : 0.05;
    camera.position.set(target.x + Math.sin(angle) * distance, target.y + lift, target.z + Math.cos(angle) * distance);
    camera.lookAt(target);
    renderer.setViewport(index * size, 0, size, mode === 'head' ? size : size * 2);
    renderer.setScissor(index * size, 0, size, mode === 'head' ? size : size * 2);
    renderer.render(scene, camera);
  });
  renderer.setScissorTest(false);
  return renderer.domElement.toDataURL('image/png');
};
window.ready = true;
