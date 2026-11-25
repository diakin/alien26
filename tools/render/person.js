// Реалистичная голова и ткани для людей (персонал базы, гражданские): лепная голова из плотной сферы со смещениями
// (череп, челюсть, надбровья, глазницы, нос, губы, подбородок, скулы), глаза-яблоки с радужкой и веками, уши,
// кожа с текстурой (поры, румянец, губы, брови, щетина у мужчин), волосы — оболочка поверх черепа с линией роста
// и прядями. Ткани: саржа (форма), полотно (халаты, хирургические костюмы), трикотаж, ПВХ (костюм биозащиты) —
// карта цвета с переплетением и пятнами, карта нормалей с переплетением и складками, мягкий отблеск ткани (sheen).
// Голова строится в своей рамке: центр в начале координат, x — вправо, y — вверх, z — вперёд (лицо).
import * as THREE from 'three';
import { mulberry32, tileNoise, normalFromHeight, canvasTexture } from './lib.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const smooth = (edge0, edge1, value) => { const amount = clamp((value - edge0) / (edge1 - edge0), 0, 1); return amount * amount * (3 - 2 * amount); };
const gauss = (dx, dy, sx, sy) => Math.exp(-(dx * dx) / (sx * sx) - (dy * dy) / (sy * sy));
// цвет 0xRRGGBB (sRGB) -> компоненты 0..1 в sRGB, для рисования на canvas (без перевода в линейное пространство)
const srgb = (hex, factor = 1) => ({ r: ((hex >> 16) & 255) / 255 * factor, g: ((hex >> 8) & 255) / 255 * factor, b: (hex & 255) / 255 * factor });

// ---------------- форма головы ----------------
// полуоси черепа (м): ширина, высота, глубина
const AXIS = { x: 0.088, y: 0.112, z: 0.1 };

// точка поверхности головы по направлению от центра (единичный вектор); female — мягче черты, уже челюсть
function headPoint(direction, female) {
  let x = direction.x * AXIS.x, y = direction.y * AXIS.y, z = direction.z * AXIS.z;
  // затылок шире и глубже, лоб чуть уже у висков
  if (direction.z < 0) { const grow = 1 + 0.06 * (-direction.z) * smooth(-0.6, 0.4, direction.y); x *= grow; z *= grow * 1.04; }
  // лицо площе спереди
  if (direction.z > 0.2) z *= 1 - 0.07 * (direction.z - 0.2);
  // челюсть и подбородок уже книзу; под челюстью — подъём к шее
  const jaw = smooth(-0.015, -0.1, y);
  x *= 1 - (female ? 0.34 : 0.27) * jaw;
  if (direction.z > 0) z *= 1 - 0.08 * jaw * (1 - direction.z);
  if (y < -0.088) { y = -0.088 + (y + 0.088) * 0.45; z -= 0.015 * smooth(-0.088, -0.11, y) * Math.max(0, 1 - direction.z); }
  // виски
  x *= 1 - 0.04 * gauss(y - 0.035, Math.abs(direction.z) - 0.25, 0.04, 0.35);
  // черты лица — смещения вперёд у передней половины
  if (direction.z > 0.15) {
    const front = smooth(0.15, 0.55, direction.z);
    const brow = female ? 0.005 : 0.008;
    let bump = 0;
    for (const side of [-1, 1]) {
      bump -= 0.013 * gauss(x - side * 0.031, y - 0.012, 0.019, 0.013);          // глазницы
      bump += brow * gauss(x - side * 0.031, y - 0.036, 0.026, 0.009);            // надбровья
      bump += 0.005 * gauss(x - side * 0.05, y + 0.012, 0.018, 0.013);            // скулы
      if (!female) bump -= 0.003 * gauss(x - side * 0.045, y + 0.045, 0.014, 0.016);   // впалые щёки
      bump += 0.005 * gauss(x - side * 0.012, y + 0.031, 0.007, 0.006);           // крылья носа
    }
    bump += 0.011 * gauss(x, y - 0.012, 0.0075, 0.026);                            // спинка носа
    bump += 0.018 * gauss(x, y + 0.014, 0.011, 0.017);                            // нос
    bump += 0.009 * gauss(x, y + 0.027, 0.011, 0.008);                            // кончик носа
    bump -= 0.004 * gauss(x, y + 0.036, 0.009, 0.004);                            // под носом
    bump += 0.006 * gauss(x, y + 0.046, 0.021, 0.007) * (female ? 1.2 : 1);       // верхняя губа
    bump -= 0.0025 * gauss(x, y + 0.052, 0.02, 0.0018);                           // линия рта
    bump += 0.0055 * gauss(x, y + 0.058, 0.017, 0.006) * (female ? 1.25 : 1);     // нижняя губа
    bump -= 0.003 * gauss(x, y + 0.067, 0.018, 0.004);                            // под губой
    bump += (female ? 0.005 : 0.008) * gauss(x, y + 0.083, 0.021, 0.013);         // подбородок
    z += bump * front;
  }
  return V(x, y, z);
}

// точка на лице с заданными x, y (спереди): подбор направления несколькими шагами
function facePoint(x, y, female) {
  const direction = V(x / AXIS.x, y / AXIS.y, 0.8).normalize();
  for (let step = 0; step < 12; step++) {
    const point = headPoint(direction, female);
    direction.x += (x - point.x) / AXIS.x * 0.9;
    direction.y += (y - point.y) / AXIS.y * 0.9;
    direction.z = Math.sqrt(Math.max(0.01, 1 - direction.x * direction.x - direction.y * direction.y));
    direction.normalize();
  }
  return headPoint(direction, female);
}

// UV сферы (SphereGeometry: u = φ / 2π, φ = atan2(z, −x); v = 1 − θ / π) для направления
function uvOf(direction) {
  let phi = Math.atan2(direction.z, -direction.x);
  if (phi < 0) phi += Math.PI * 2;
  return [phi / (Math.PI * 2), 1 - Math.acos(clamp(direction.y, -1, 1)) / Math.PI];
}
// направление для точки лица (x, y) — для рисования по UV
function faceDirection(x, y, female) {
  const point = facePoint(x, y, female);
  return V(point.x / AXIS.x, point.y / AXIS.y, point.z / AXIS.z).normalize();
}

// ---------------- текстура кожи ----------------
const SKIN_SIZE = [1024, 512];
function skinTexture(look, female, seed) {
  const [width, height] = SKIN_SIZE, rng = mulberry32(seed);
  const canvas = document.createElement('canvas');
  canvas.width = width; canvas.height = height;
  const context = canvas.getContext('2d');
  const skin = srgb(look.skin);
  const rgb = (color, alpha = 1) => `rgba(${Math.round(color.r * 255)},${Math.round(color.g * 255)},${Math.round(color.b * 255)},${alpha})`;
  context.fillStyle = rgb(skin);
  context.fillRect(0, 0, width, height);
  // крупные пятна тона и мелкие поры
  const image = context.getImageData(0, 0, width, height);
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
    const index = (y * width + x) * 4;
    const tone = tileNoise(x / width, y / height, 6, 4, seed) * 0.06 + tileNoise(x / width, y / height, 60, 2, seed + 3) * 0.035 + (rng() - 0.5) * 0.03;
    image.data[index] = clamp(image.data[index] * (1 + tone + 0.01), 0, 255);
    image.data[index + 1] = clamp(image.data[index + 1] * (1 + tone - 0.005), 0, 255);
    image.data[index + 2] = clamp(image.data[index + 2] * (1 + tone - 0.01), 0, 255);
  }
  context.putImageData(image, 0, 0);
  // пятно на лице: эллипс в координатах лица -> многоугольник в UV
  const blob = (cx, cy, rx, ry, fill, blur = 0) => {
    context.save();
    if (blur) context.filter = `blur(${blur}px)`;
    context.beginPath();
    for (let step = 0; step <= 28; step++) {
      const angle = step / 28 * Math.PI * 2;
      const [u, v] = uvOf(faceDirection(cx + Math.cos(angle) * rx, cy + Math.sin(angle) * ry, female));
      const px = u * width, py = (1 - v) * height;
      if (step) context.lineTo(px, py); else context.moveTo(px, py);
    }
    context.fillStyle = fill;
    context.fill();
    context.restore();
  };
  const line = (points, stroke, widthPx, blur = 0) => {
    context.save();
    if (blur) context.filter = `blur(${blur}px)`;
    context.beginPath();
    points.forEach(([x, y], index) => {
      const [u, v] = uvOf(faceDirection(x, y, female));
      if (index) context.lineTo(u * width, (1 - v) * height); else context.moveTo(u * width, (1 - v) * height);
    });
    context.strokeStyle = stroke; context.lineWidth = widthPx; context.lineCap = 'round';
    context.stroke();
    context.restore();
  };
  // румянец, нос, тени под глазами, у крыльев носа
  for (const side of [-1, 1]) {
    blob(side * 0.047, -0.022, 0.02, 0.016, `rgba(200,80,70,${female ? 0.16 : 0.1})`, 10);
    blob(side * 0.03, -0.004, 0.016, 0.006, 'rgba(90,50,60,0.14)', 5);
    blob(side * 0.015, -0.034, 0.006, 0.005, 'rgba(110,50,40,0.25)', 3);
  }
  blob(0, -0.02, 0.009, 0.01, 'rgba(200,90,80,0.12)', 4);
  // губы
  const lips = female ? 'rgba(170,60,70,0.85)' : 'rgba(160,90,85,0.6)';
  blob(0, -0.0465, 0.018, 0.0045, lips, 2);
  blob(0, -0.0575, 0.016, 0.0052, lips, 2);
  line([[-0.019, -0.052], [-0.008, -0.0515], [0, -0.052], [0.008, -0.0515], [0.019, -0.052]], 'rgba(70,30,30,0.7)', 2, 1);
  // брови
  const brow = srgb(look.hair, 0.8);
  for (const side of [-1, 1]) {
    for (let stroke = 0; stroke < (female ? 34 : 50); stroke++) {
      const along = stroke / (female ? 34 : 50);
      const x = side * (0.013 + along * 0.034), y = 0.031 + Math.sin(along * Math.PI) * 0.006 - along * 0.002;
      const thickness = (female ? 0.0022 : 0.0036) * (1 - along * 0.5);
      line([[x, y - thickness + (rng() - 0.5) * 0.002], [x + side * 0.004, y + thickness]], rgb(brow, 0.55), 1.6);
    }
  }
  // щетина у мужчин: подбородок, челюсть, над губой
  if (!female && look.stubble !== false) {
    context.save();
    context.globalAlpha = look.beard ? 0.55 : 0.2;
    const shade = srgb(look.hair, 0.6);
    for (let dot = 0; dot < 9000; dot++) {
      const x = (rng() - 0.5) * 0.12, y = -0.03 - rng() * 0.08;
      const inside = (Math.abs(x) < 0.03 && y > -0.044 && y < -0.036) || (y < -0.06) || (Math.abs(x) > 0.035 && y < -0.035);
      if (!inside) continue;
      const [u, v] = uvOf(faceDirection(x, y, female));
      context.fillStyle = rgb(shade);
      context.fillRect(u * width, (1 - v) * height, 1.2, 1.2);
    }
    context.restore();
  }
  return canvasTexture(canvas, { repeat: 1 });
}

// ---------------- глаза ----------------
function eyeTexture(irisColor) {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size * 2; canvas.height = size;
  const context = canvas.getContext('2d');
  context.fillStyle = '#ece6e0';
  context.fillRect(0, 0, size * 2, size);
  // радужка — спереди (u = 0,25), зрачок
  const cx = size * 2 * 0.25, cy = size / 2;
  const gradient = context.createRadialGradient(cx, cy, 2, cx, cy, size * 0.2);
  const iris = srgb(irisColor);
  gradient.addColorStop(0, `rgb(${iris.r * 120},${iris.g * 120},${iris.b * 120})`);
  gradient.addColorStop(0.7, `rgb(${iris.r * 255},${iris.g * 255},${iris.b * 255})`);
  gradient.addColorStop(1, '#1a1410');
  context.fillStyle = gradient;
  context.beginPath(); context.ellipse(cx, cy, size * 0.2, size * 0.2, 0, 0, Math.PI * 2); context.fill();
  context.fillStyle = '#060606';
  context.beginPath(); context.ellipse(cx, cy, size * 0.075, size * 0.075, 0, 0, Math.PI * 2); context.fill();
  return canvasTexture(canvas, { repeat: 1 });
}

// ---------------- волосы ----------------
function hairTexture(color, seed) {
  const width = 512, height = 256, rng = mulberry32(seed);
  const canvas = document.createElement('canvas');
  canvas.width = width; canvas.height = height;
  const context = canvas.getContext('2d');
  const base = srgb(color);
  context.fillStyle = `rgb(${base.r * 255},${base.g * 255},${base.b * 255})`;
  context.fillRect(0, 0, width, height);
  // пряди вдоль меридианов (сверху вниз), светлее и темнее основы
  for (let strand = 0; strand < 2600; strand++) {
    const x = rng() * width, length = 20 + rng() * 80, y = rng() * height;
    const light = rng() < 0.5 ? 1.35 : 0.6;
    context.strokeStyle = `rgba(${clamp(base.r * 255 * light, 0, 255)},${clamp(base.g * 255 * light, 0, 255)},${clamp(base.b * 255 * light, 0, 255)},${0.25 + rng() * 0.3})`;
    context.lineWidth = 0.8 + rng();
    context.beginPath(); context.moveTo(x, y); context.lineTo(x + (rng() - 0.5) * 6, y + length); context.stroke();
  }
  return canvasTexture(canvas, { repeat: 1 });
}
function hairNormal(seed) {
  const size = 256, heights = new Float32Array(size * size);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    heights[y * size + x] = tileNoise(x / size * 1, y / size * 0.05, 40, 2, seed) * 0.6 + tileNoise(x / size, y / size, 3, 2, seed + 1) * 0.8;
  }
  return normalFromHeight(heights, size, 3);
}

// область волос для направления (единичный вектор) и стиля; возвращает 0..1
function hairCoverage(direction, style) {
  const { x, y, z } = direction;
  if (style === 'bald') return smooth(0.55, 0.7, -z) * smooth(-0.1, 0.1, y) * 0;
  // линия роста спереди: выше на лбу, ниже к вискам
  const hairline = 0.48 - 0.25 * Math.abs(x);
  const front = z > 0 ? smooth(hairline - 0.05, hairline + 0.04, y) : 1;
  // бока: над ушами; бакенбарды чуть ниже
  const sides = smooth(-0.05, 0.08, y + 0.25 * Math.max(0, -z)) * (Math.abs(x) > 0.7 ? smooth(0.0, 0.12, y + 0.1 * (1 - Math.abs(z))) : 1);
  // затылок: до шеи
  const nape = style === 'long' ? smooth(-0.75, -0.6, y) : smooth(-0.55, -0.4, y);
  return front * Math.min(sides + (z < -0.3 ? 1 : 0), 1) * nape;
}

// ---------------- материалы головы (кэш по виду) ----------------
const headCache = new Map();
function headMaterials(look, female, seed) {
  const key = JSON.stringify([look.skin, look.hair, look.eyes, female, seed, look.beard]);
  if (headCache.has(key)) return headCache.get(key);
  const materials = {
    skin: new THREE.MeshPhysicalMaterial({ map: skinTexture(look, female, seed), roughness: 0.58, sheen: 0.25, sheenColor: new THREE.Color(0xffd8c8), sheenRoughness: 0.6 }),
    ear: new THREE.MeshStandardMaterial({ color: new THREE.Color(look.skin).multiplyScalar(0.97), roughness: 0.6 }),
    eye: new THREE.MeshPhysicalMaterial({ map: eyeTexture(look.eyes || 0x5a3a20), roughness: 0.15, clearcoat: 1, clearcoatRoughness: 0.05 }),
    lash: new THREE.MeshStandardMaterial({ color: 0x141010, roughness: 0.8 }),
    hair: new THREE.MeshStandardMaterial({ map: hairTexture(look.hair, seed + 7), normalMap: hairNormal(seed + 9), normalScale: new THREE.Vector2(0.6, 0.6), roughness: 0.55, metalness: 0.0 }),
  };
  headCache.set(key, materials);
  return materials;
}

// геометрия черепа (и оболочки волос: grow — насколько выше кожи там, где растут волосы)
const geometryCache = new Map();
function headGeometry(female, style = null, grow = 0) {
  const key = [female, style, grow].join('|');
  if (geometryCache.has(key)) return geometryCache.get(key);
  const geometry = new THREE.SphereGeometry(1, style ? 96 : 176, style ? 72 : 132);
  const positions = geometry.attributes.position;
  const direction = new THREE.Vector3();
  for (let index = 0; index < positions.count; index++) {
    direction.fromBufferAttribute(positions, index).normalize();
    const point = headPoint(direction, female);
    if (style) {
      // волосы: над кожей там, где растут, и уходят под кожу за линией роста
      const cover = hairCoverage(direction, style);
      const lift = -0.004 + (grow + 0.004) * cover + (style === 'long' ? 0.006 * smooth(0.0, -0.5, direction.y) * cover : 0);
      point.addScaledVector(direction, lift + 0.01 * cover * smooth(0.2, 0.9, direction.y));
    }
    positions.setXYZ(index, point.x, point.y, point.z);
  }
  geometry.computeVertexNormals();
  geometryCache.set(key, geometry);
  return geometry;
}

// ---------------- голова целиком ----------------
// look: skin, hair, hairStyle ('short' | 'long' | 'bald'), eyes (цвет радужки), beard; female; seed — разброс лиц.
// options.hideHair — волосы под капюшоном или шапочкой; options.hairGrow — толщина причёски.
export function buildRealHead(look, { female = false, seed = 1, hideHair = false, hairGrow } = {}) {
  const head = new THREE.Group();
  const materials = headMaterials(look, female, seed);
  const skull = new THREE.Mesh(headGeometry(female), materials.skin);
  skull.castShadow = skull.receiveShadow = true;
  head.add(skull);
  // глаза: яблоко в глазнице, верхнее веко, ресницы
  for (const side of [-1, 1]) {
    const socket = facePoint(side * 0.031, 0.012, female);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.0118, 20, 14), materials.eye);
    eye.position.set(side * 0.031, 0.012, socket.z - 0.0085);
    eye.rotation.y = -side * 0.08;
    head.add(eye);
    const lid = new THREE.Mesh(new THREE.SphereGeometry(0.0128, 20, 10, 0, Math.PI * 2, 0, Math.PI * 0.38), materials.skin);
    lid.position.copy(eye.position);
    lid.rotation.x = 0.55;
    head.add(lid);
    const lower = new THREE.Mesh(new THREE.SphereGeometry(0.0126, 20, 8, 0, Math.PI * 2, Math.PI * 0.72, Math.PI * 0.28), materials.skin);
    lower.position.copy(eye.position);
    lower.rotation.x = -0.35;
    head.add(lower);
    const lashes = new THREE.Mesh(new THREE.TorusGeometry(0.0118, 0.0011, 4, 18, Math.PI * 0.8), materials.lash);
    lashes.position.copy(eye.position).add(V(0, 0.0005, 0.002));
    lashes.rotation.set(-0.95, 0, Math.PI * 0.1);
    head.add(lashes);
  }
  // уши: сплюснутые раковины с завитком
  for (const side of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.SphereGeometry(0.03, 16, 12), materials.ear);
    ear.scale.set(0.3, 0.95, 0.62);
    ear.position.set(side * 0.084, -0.004, -0.012);
    ear.rotation.set(0.12, side * 0.35, side * 0.08);
    ear.castShadow = true;
    head.add(ear);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.019, 0.0045, 6, 16, Math.PI * 1.3), materials.ear);
    rim.position.copy(ear.position).add(V(side * 0.006, 0.004, 0));
    rim.rotation.set(0, side * Math.PI / 2 + side * 0.35, Math.PI * 0.35);
    head.add(rim);
  }
  if (!hideHair && look.hairStyle !== 'bald') {
    const style = look.hairStyle === 'long' ? 'long' : 'short';
    const hair = new THREE.Mesh(headGeometry(female, style, hairGrow ?? (style === 'long' ? 0.012 : 0.007)), materials.hair);
    hair.castShadow = true;
    head.add(hair);
    if (style === 'long') {
      // длинные волосы: пряди сзади до плеч и по бокам
      const back = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.062, 0.2, 24, 1, true, Math.PI * 0.55, Math.PI * 0.9), materials.hair);
      back.position.set(0, -0.09, -0.035);
      back.scale.set(1.1, 1, 0.9);
      back.material.side = THREE.DoubleSide;
      head.add(back);
      for (const side of [-1, 1]) {
        const lock = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.016, 0.16, 12), materials.hair);
        lock.position.set(side * 0.078, -0.07, -0.01);
        lock.rotation.z = side * 0.08;
        head.add(lock);
      }
    }
  }
  head.userData.facePoint = (x, y) => facePoint(x, y, female);
  return head;
}

// ---------------- ткани ----------------
// weave: 'twill' — саржа (форма), 'plain' — полотно (халат, хирургический костюм), 'knit' — трикотаж, 'denim'
const fabricCache = new Map();
function fabricTextures(weave, seed) {
  const key = weave + seed;
  if (fabricCache.has(key)) return fabricCache.get(key);
  const size = 512, rng = mulberry32(seed);
  const heights = new Float32Array(size * size);
  const shade = new Float32Array(size * size);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size, v = y / size;
    let pattern;
    if (weave === 'twill' || weave === 'denim') pattern = ((x + y) % 6 < 3 ? 0.5 : -0.5) + ((x - y + 600) % 12 < 1 ? -0.3 : 0);
    else if (weave === 'knit') pattern = Math.abs(Math.sin(x * Math.PI / 3)) * 0.8 - 0.4 + (y % 4 < 1 ? -0.2 : 0);
    else pattern = ((x % 4 < 2) !== (y % 4 < 2) ? 0.4 : -0.4);
    // складки: мягкие длинные волны с изломами
    const warp = tileNoise(u, v, 3, 2, seed + 2) * 0.4;
    const wrinkles = tileNoise(u + warp, v * 0.6, 4, 4, seed) * 1.6 + Math.pow(Math.abs(Math.sin((v * 0.7 + u * 0.2 + warp) * Math.PI * 6)), 0.3) * -0.35;
    heights[y * size + x] = pattern * 0.06 + wrinkles;
    shade[y * size + x] = pattern * 0.05 + tileNoise(u, v, 8, 3, seed + 5) * 0.08 + (rng() - 0.5) * 0.04 - Math.max(0, -wrinkles) * 0.06;
  }
  const result = { normal: normalFromHeight(heights, size, 4), shade };
  result.normal.repeat.set(2, 2);
  fabricCache.set(key, result);
  return result;
}
function fabricMap(color, shade, size = 512) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const context = canvas.getContext('2d');
  const image = context.createImageData(size, size);
  const base = srgb(color);
  for (let index = 0; index < size * size; index++) {
    const factor = 1 + shade[index];
    image.data[index * 4] = clamp(base.r * 255 * factor, 0, 255);
    image.data[index * 4 + 1] = clamp(base.g * 255 * factor, 0, 255);
    image.data[index * 4 + 2] = clamp(base.b * 255 * factor, 0, 255);
    image.data[index * 4 + 3] = 255;
  }
  context.putImageData(image, 0, 0);
  return canvasTexture(canvas, { repeat: 2 });
}

const materialCache = new Map();
// ткань: цвет как задан в sRGB-шестнадцатеричном виде (0xRRGGBB)
export function fabric(color, weave = 'plain', { roughness = 0.92, sheen = 0.5, seed = 11 } = {}) {
  const key = [color, weave, roughness, sheen, seed].join('|');
  if (materialCache.has(key)) return materialCache.get(key);
  const textures = fabricTextures(weave, seed);
  // цвет карты — в sRGB; базовый цвет материала белый, чтобы не умножать дважды
  const material = new THREE.MeshPhysicalMaterial({
    map: fabricMap(color, textures.shade),
    normalMap: textures.normal, normalScale: new THREE.Vector2(0.3, 0.3), roughness, side: THREE.DoubleSide,
    sheen, sheenRoughness: 0.75, sheenColor: new THREE.Color(color).lerp(new THREE.Color(0xffffff), 0.5),
  });
  materialCache.set(key, material);
  return material;
}

// ПВХ / прорезиненная ткань костюма биозащиты: глянец, крупные заломы
export function pvc(color, seed = 21) {
  const key = 'pvc' + color + seed;
  if (materialCache.has(key)) return materialCache.get(key);
  const size = 512, heights = new Float32Array(size * size);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size, v = y / size;
    const warp = tileNoise(u, v, 2, 2, seed) * 0.5;
    heights[y * size + x] = tileNoise(u + warp, v, 3, 4, seed + 1) * 2 - Math.pow(Math.abs(Math.sin((v + warp) * Math.PI * 4 + u * 3)), 0.25) * 0.6;
  }
  const normal = normalFromHeight(heights, size, 5);
  normal.repeat.set(1.5, 1.5);
  const material = new THREE.MeshPhysicalMaterial({ color, roughness: 0.3, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.12, normalMap: normal, normalScale: new THREE.Vector2(0.7, 0.7) });
  materialCache.set(key, material);
  return material;
}

// резина (перчатки, сапоги, маска): глянцевый чёрный с лёгкими заломами
export function rubber(color = 0x141414) {
  const key = 'rubber' + color;
  if (materialCache.has(key)) return materialCache.get(key);
  const material = new THREE.MeshPhysicalMaterial({ color, roughness: 0.35, clearcoat: 0.8, clearcoatRoughness: 0.2 });
  materialCache.set(key, material);
  return material;
}

// кисть руки: ладонь, четыре пальца (слегка согнуты), большой палец; в своей рамке: вниз по −y, ладонь к +x
export function buildHand(material, scale = 1) {
  const hand = new THREE.Group();
  const palm = new THREE.Mesh(new THREE.SphereGeometry(0.045, 14, 10), material);
  palm.scale.set(0.42, 1.0, 0.95);
  palm.position.set(0, -0.04, 0);
  hand.add(palm);
  for (let finger = 0; finger < 4; finger++) {
    const z = -0.027 + finger * 0.018, length = [0.068, 0.078, 0.074, 0.058][finger];
    const mesh = new THREE.Mesh(new THREE.CapsuleGeometry(0.0085, length - 0.017, 4, 8), material);
    mesh.position.set(0.006, -0.085 - length / 2 + 0.01, z);
    mesh.rotation.z = 0.25;
    hand.add(mesh);
  }
  const thumb = new THREE.Mesh(new THREE.CapsuleGeometry(0.01, 0.04, 4, 8), material);
  thumb.position.set(0.02, -0.055, -0.035);
  thumb.rotation.set(-0.6, 0, 0.5);
  hand.add(thumb);
  hand.scale.setScalar(scale);
  hand.traverse((node) => { if (node.isMesh) node.castShadow = node.receiveShadow = true; });
  return hand;
}
