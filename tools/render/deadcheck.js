// Проверка поз погибших: вид сбоку, вид с торца и сверху-сбоку; красная линия — уровень земли.
import * as THREE from 'three';
import { buildDead, lyingJoints } from './dead.js';
const VIEW = 420;
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setSize(VIEW * 3, VIEW * 2);
renderer.setScissorTest(true);
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();
scene.add(new THREE.HemisphereLight(0xffffff, 0x666666, 1.6));
const sun = new THREE.DirectionalLight(0xffffff, 2.0); sun.position.set(3, 6, 2); scene.add(sun);
const ground = new THREE.Mesh(new THREE.PlaneGeometry(6, 6), new THREE.MeshBasicMaterial({ color: 0xb8b0a0, transparent: true, opacity: 0.35, side: THREE.DoubleSide }));
ground.rotation.x = -Math.PI / 2; scene.add(ground);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
for (const axis of ['x', 'z']) {
  const points = axis === 'x' ? [new THREE.Vector3(-3, 0.001, 0), new THREE.Vector3(3, 0.001, 0)] : [new THREE.Vector3(0, 0.001, -3), new THREE.Vector3(0, 0.001, 3)];
  scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), lineMaterial));
}
const ortho = (position) => {
  const camera = new THREE.OrthographicCamera(-1.2, 1.2, 1.2, -1.2, 0.1, 20);
  camera.position.copy(position); camera.lookAt(0, 0.3, 0);
  camera.position.y = position.y; return camera;
};
window.check = (options, row) => {
  const body = buildDead(options);
  scene.add(body);
  const cameras = [ortho(new THREE.Vector3(5, 0.3, 0)), ortho(new THREE.Vector3(0, 0.3, 5)), ortho(new THREE.Vector3(3, 3, 3))];
  cameras[2].lookAt(0, 0, 0);
  scene.background = new THREE.Color(0xf0f0f0);
  cameras.forEach((camera, index) => {
    renderer.setViewport(index * VIEW, (1 - row) * VIEW, VIEW, VIEW);
    renderer.setScissor(index * VIEW, (1 - row) * VIEW, VIEW, VIEW);
    renderer.render(scene, camera);
  });
  const joints = lyingJoints(body);
  const lowest = [];
  body.updateMatrixWorld(true);
  body.userData.model.traverse((node) => {
    if (!node.isMesh) return;
    const box = new THREE.Box3().setFromObject(node, true);
    if (box.min.y < 0.015) {
      const center = box.getCenter(new THREE.Vector3()), size = box.getSize(new THREE.Vector3());
      lowest.push([center, size].map((vector) => vector.toArray().map((value) => +value.toFixed(2))).join(' '));
    }
  });
  scene.remove(body);
  const heights = {};
  for (const [name, value] of Object.entries(joints)) heights[name] = Array.isArray(value) ? value.map((point) => +point.y.toFixed(3)) : +value.y.toFixed(3);
  heights.lowest = lowest;
  // самая низкая вершина каждой сетки модели (в координатах стоящей модели)
  const model = body.userData.model;
  const inverse = model.matrixWorld.clone().invert();
  const vertex = new THREE.Vector3();
  heights.minima = [];
  model.traverse((node) => {
    if (!node.isMesh) return;
    const position = node.geometry.attributes.position;
    let best = null, bestHeight = Infinity;
    for (let index = 0; index < position.count; index++) {
      vertex.fromBufferAttribute(position, index).applyMatrix4(node.matrixWorld);
      if (vertex.y < bestHeight) { bestHeight = vertex.y; best = vertex.clone(); }
    }
    if (node === model.children[0] && !model.userData.joints) {
      // зазор до земли по полосам вдоль тела (полосы по y стоящей модели) и по сторонам z
      const bands = {};
      for (let index = 0; index < position.count; index++) {
        vertex.fromBufferAttribute(position, index).applyMatrix4(node.matrixWorld);
        const height = vertex.y;
        const local = vertex.clone().applyMatrix4(inverse);
        const key = (Math.floor(local.y / 0.2) * 0.2).toFixed(1) + (local.z > 0.15 ? 'f' : local.z < -0.15 ? 'b' : 'm');
        bands[key] = Math.min(bands[key] ?? Infinity, height);
      }
      heights.bands = Object.keys(bands).sort().map((key) => key + ':' + bands[key].toFixed(2)).join(' ');
    }
    if (bestHeight < 0.02) heights.minima.push(best.applyMatrix4(inverse).toArray().map((value) => +value.toFixed(2)).join(','));
  });
  return heights;
};
window.snapshot = () => renderer.domElement.toDataURL('image/png');
window.ready = true;
