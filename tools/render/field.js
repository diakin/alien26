// Фон для прототипа: ровное травяное поле, камера и свет как у спрайтов.
// Рендер кусками (setViewOffset), склейка в Python.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { mulberry32, range, fbm2, groundDetailTextures, setEnvIntensity } from './lib.js';
import { toXZ, bladeGeometry, grassMaterial } from './world.js';

const params = new URLSearchParams(location.search);
const TILE = 1.25, TILES = Number(params.get('tiles') || 20);
const SIZE = TILE * TILES, MARGIN = 2.5;
const PPM = 1280 / 18.5;             // пикселей на метр в игровом масштабе (как спрайты x1)
const SS = 2;                        // суперсэмплинг
const CENTER = new THREE.Vector3(SIZE / 2, 0, SIZE / 2);

const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(1);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a2016);
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;
scene.add(new THREE.HemisphereLight(0xc8dcff, 0x46502c, 0.7));
const sun = new THREE.DirectionalLight(0xfff4e0, 4.2);
{ const offset = toXZ(-11, 7.5); sun.position.set(CENTER.x + offset.x, 11, CENTER.z + offset.y); }
sun.target.position.copy(CENTER);
sun.castShadow = true;
sun.shadow.mapSize.set(4096, 4096);
Object.assign(sun.shadow.camera, { left: -26, right: 26, top: 26, bottom: -26, near: 1, far: 60 });
sun.shadow.camera.updateProjectionMatrix();
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.02;
scene.add(sun, sun.target);

// ---------- земля ----------
const smoothstep = (edge0, edge1, value) => { const t = Math.max(0, Math.min(1, (value - edge0) / (edge1 - edge0))); return t * t * (3 - 2 * t); };
const lo = -MARGIN, hi = SIZE + MARGIN;
function density(x, z) {
  // густота травы: пятна, пара вытоптанных проплешин
  let value = 0.45 + 0.55 * smoothstep(-0.35, 0.3, fbm2(x * 0.28, z * 0.28, 3));
  value *= 1 - 0.85 * smoothstep(0.18, 0.32, fbm2(x * 0.09 + 11, z * 0.09 - 4, 3));
  return Math.max(0, value);
}
{
  const segments = 220;
  const geometry = new THREE.PlaneGeometry(hi - lo, hi - lo, segments, segments);
  geometry.rotateX(-Math.PI / 2);
  geometry.translate((lo + hi) / 2, 0, (lo + hi) / 2);
  const position = geometry.attributes.position;
  const colors = new Float32Array(position.count * 3);
  const grass = new THREE.Color(0.24, 0.32, 0.12), dry = new THREE.Color(0.5, 0.46, 0.27), soil = new THREE.Color(0.38, 0.3, 0.2);
  const color = new THREE.Color();
  for (let index = 0; index < position.count; index++) {
    const x = position.getX(index), z = position.getZ(index);
    const bare = smoothstep(0.18, 0.32, fbm2(x * 0.09 + 11, z * 0.09 - 4, 3));
    color.copy(grass).lerp(dry, smoothstep(0.0, 0.35, fbm2(x * 0.1 - 4, z * 0.1 + 7, 4)) * 0.7).lerp(soil, bare * 0.9);
    color.multiplyScalar(1 - 0.55 * density(x, z));
    colors[index * 3] = color.r; colors[index * 3 + 1] = color.g; colors[index * 3 + 2] = color.b;
  }
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.computeVertexNormals();
  const detail = groundDetailTextures();
  detail.map.repeat.set(20, 20); detail.normalMap.repeat.set(20, 20);
  const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ map: detail.map, normalMap: detail.normalMap, vertexColors: true, roughness: 0.95 }));
  mesh.receiveShadow = true;
  scene.add(mesh);
}

// ---------- трава кустиками ----------
{
  const rng = mulberry32(91);
  const maxCount = 480000;
  const mesh = new THREE.InstancedMesh(bladeGeometry(), grassMaterial(), maxCount);
  const matrix = new THREE.Matrix4(), quaternion = new THREE.Quaternion(), scale = new THREE.Vector3(), position = new THREE.Vector3();
  const euler = new THREE.Euler(0, 0, 0, 'YXZ'), color = new THREE.Color();
  const greens = [new THREE.Color(0.15, 0.34, 0.06), new THREE.Color(0.25, 0.46, 0.08), new THREE.Color(0.42, 0.55, 0.1), new THREE.Color(0.13, 0.3, 0.12)];
  const dryColor = new THREE.Color(0.6, 0.55, 0.26), dead = new THREE.Color(0.44, 0.35, 0.2);
  let count = 0;
  for (let attempt = 0; attempt < 900000 && count < maxCount; attempt++) {
    const x = range(lo, hi, rng), z = range(lo, hi, rng);
    const local = density(x, z);
    if (rng() > local) continue;
    const blades = 10 + Math.floor(rng() * 26 * (0.4 + local * 0.6));
    const radius = 0.035 + rng() * 0.08;
    const clumpHeight = (0.06 + smoothstep(-0.4, 0.35, fbm2(x * 0.22 + 5, z * 0.22, 3)) * 0.22) * (0.7 + rng() * 0.6);
    const dryness = smoothstep(0.0, 0.35, fbm2(x * 0.1 - 4, z * 0.1 + 7, 4)) * 0.8 + rng() * 0.15;
    const base = greens[Math.floor(rng() * greens.length)];
    for (let blade = 0; blade < blades && count < maxCount; blade++) {
      const angle = rng() * Math.PI * 2, distance = Math.sqrt(rng()) * radius;
      position.set(x + Math.cos(angle) * distance, -0.01, z + Math.sin(angle) * distance);
      euler.set(0.08 + (distance / radius) * 0.45 + rng() * 0.2, angle + Math.PI / 2 + range(-0.5, 0.5, rng), range(-0.15, 0.15, rng));
      quaternion.setFromEuler(euler);
      scale.set(0.8 + rng() * 0.6, clumpHeight * (0.55 + rng() * 0.7), 1);
      matrix.compose(position, quaternion, scale);
      mesh.setMatrixAt(count, matrix);
      const roll = rng();
      if (roll < 0.05) color.copy(dead).lerp(dryColor, rng());
      else if (roll < 0.05 + dryness * 0.35) color.copy(dryColor).lerp(base, rng() * 0.5);
      else color.copy(base).lerp(greens[Math.floor(rng() * greens.length)], rng() * 0.6).lerp(dryColor, dryness * 0.35);
      mesh.setColorAt(count, color.multiplyScalar(0.85 + rng() * 0.3));
      count++;
    }
  }
  mesh.count = count;
  mesh.receiveShadow = true;
  scene.add(mesh);
}
setEnvIntensity(scene, 0.28);

// ---------- камера ----------
const elevation = THREE.MathUtils.degToRad(35);
const down = toXZ(0, 1);
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 200);
camera.position.set(CENTER.x + down.x * Math.cos(elevation) * 80, Math.sin(elevation) * 80, CENTER.z + down.y * Math.cos(elevation) * 80);
camera.lookAt(CENTER);
camera.updateMatrixWorld(true);
// размер кадра: проекции углов карты с запасом
const corners = [[lo, lo], [hi, lo], [lo, hi], [hi, hi]].map(([x, z]) => new THREE.Vector3(x, 0, z).applyMatrix4(camera.matrixWorldInverse));
const halfW = Math.max(...corners.map((point) => Math.abs(point.x))) + 0.2;
const halfH = Math.max(...corners.map((point) => Math.abs(point.y))) + 2.4;   // сверху место под высокие объекты
Object.assign(camera, { left: -halfW, right: halfW, top: halfH, bottom: -halfH });
camera.updateProjectionMatrix();
const FULL_W = Math.round(halfW * 2 * PPM), FULL_H = Math.round(halfH * 2 * PPM);

function projectPixel(point) {
  const projected = point.clone().project(camera);
  return [(projected.x + 1) / 2 * FULL_W, (1 - projected.y) / 2 * FULL_H];
}

window.fieldInfo = () => ({
  width: FULL_W, height: FULL_H, tile: TILE, tiles: TILES, ppm: PPM,
  origin: projectPixel(new THREE.Vector3(0, 0, 0)),
  colStep: projectPixel(new THREE.Vector3(TILE, 0, 0)),
  rowStep: projectPixel(new THREE.Vector3(0, 0, TILE)),
  up: projectPixel(new THREE.Vector3(0, 1, 0)),
});

window.renderChunk = (x, y, width, height) => {
  camera.setViewOffset(FULL_W * SS, FULL_H * SS, x * SS, y * SS, width * SS, height * SS);
  renderer.setSize(width * SS, height * SS);
  renderer.render(scene, camera);
  return renderer.domElement.toDataURL('image/png');
};
window.ready = true;
