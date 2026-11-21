// Одежда со складками и ботинки по профилю.
import * as THREE from 'three';
import { noise3 } from './lib.js';

const upVector = new THREE.Vector3(0, 1, 0);
const gauss = (value, center, width) => Math.exp(-(((value - center) / width) ** 2));

// Рукав/штанина от start до end. Радиус меняется по длине, складки — кольцевые заломы с перекосом.
// folds: [{t, amp, width, tilt}] ; bulge: функция t -> добавка к радиусу (доля)
export function clothLimb(start, end, radiusStart, radiusEnd, material, { folds = [], bulge = () => 0, seed = 0, noiseAmp = 0.06 } = {}) {
  const direction = new THREE.Vector3().subVectors(end, start);
  const length = direction.length();
  const radial = 20, rings = 36;
  const geometry = new THREE.CylinderGeometry(1, 1, 1, radial, rings, true);
  geometry.translate(0, 0.5, 0);
  const position = geometry.attributes.position;
  for (let index = 0; index < position.count; index++) {
    const x = position.getX(index), y = position.getY(index), z = position.getZ(index);
    const angle = Math.atan2(z, x);
    const t = y;
    let radius = (radiusStart + (radiusEnd - radiusStart) * t) * (1 + bulge(t));
    let crease = 0;
    for (const fold of folds) {
      // залом идёт не ровным кольцом, а наискось и с волной
      const shifted = fold.t + Math.sin(angle * (fold.waves ?? 2) + seed + fold.t * 9) * (fold.tilt ?? 0.03);
      crease += fold.amp * (gauss(t, shifted, fold.width ?? 0.03) - 0.35 * gauss(t, shifted + (fold.width ?? 0.03) * 1.8, (fold.width ?? 0.03)));
    }
    crease += noise3(Math.cos(angle) * 1.5 + seed, Math.sin(angle) * 1.5, t * 6) * noiseAmp;
    radius *= 1 + crease;
    position.setXYZ(index, x * radius, t * length, z * radius);
  }
  geometry.computeVertexNormals();
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.copy(start);
  mesh.quaternion.setFromUnitVectors(upVector, direction.normalize());
  mesh.castShadow = mesh.receiveShadow = true;
  return mesh;
}

// набор складок для разных частей одежды
export const FOLDS = {
  thigh: (seed) => ({ seed, folds: [{ t: 0.55, amp: 0.05, width: 0.05, tilt: 0.06 }, { t: 0.78, amp: 0.08, width: 0.035 }, { t: 0.9, amp: 0.1, width: 0.03 }], bulge: (t) => 0.1 * Math.sin(t * Math.PI) }),
  shin: (seed) => ({ seed, folds: [{ t: 0.12, amp: 0.08, width: 0.035 }, { t: 0.55, amp: 0.05, width: 0.05, tilt: 0.05 }, { t: 0.72, amp: 0.1, width: 0.028 }, { t: 0.8, amp: 0.12, width: 0.025 }, { t: 0.88, amp: 0.13, width: 0.024 }],
    bulge: (t) => 0.08 * Math.sin(t * Math.PI * 0.9) + 0.22 * gauss(t, 0.84, 0.08) }),
  upperArm: (seed) => ({ seed, folds: [{ t: 0.35, amp: 0.05, width: 0.05, tilt: 0.06 }, { t: 0.75, amp: 0.09, width: 0.035 }, { t: 0.88, amp: 0.11, width: 0.03 }], bulge: (t) => 0.08 * Math.sin(t * Math.PI) }),
  forearm: (seed) => ({ seed, folds: [{ t: 0.12, amp: 0.1, width: 0.03 }, { t: 0.25, amp: 0.07, width: 0.035 }, { t: 0.8, amp: 0.09, width: 0.03 }], bulge: (t) => 0.06 * Math.sin(t * Math.PI) + 0.1 * gauss(t, 0.85, 0.08) }),
  torso: (seed) => ({ seed, folds: [{ t: 0.2, amp: 0.06, width: 0.05, tilt: 0.08 }, { t: 0.5, amp: 0.05, width: 0.06, tilt: 0.1 }], bulge: () => 0 }),
};

// ---------- ботинок (носок по +z, подошва на y = 0, щиколотка около начала координат по z) ----------
// Всё из круглых форм: стопа — деформированная сфера, голенище — овальный цилиндр.
const bootCache = new Map();
function bootGeometries() {
  if (bootCache.has('geo')) return bootCache.get('geo');
  const smooth = (edge0, edge1, value) => { const t = Math.max(0, Math.min(1, (value - edge0) / (edge1 - edge0))); return t * t * (3 - 2 * t); };

  // стопа
  const foot = new THREE.SphereGeometry(1, 32, 22);
  const footPos = foot.attributes.position;
  for (let index = 0; index < footPos.count; index++) {
    let x = footPos.getX(index), y = footPos.getY(index), z = footPos.getZ(index);
    x *= 0.064; y *= 0.08; z *= 0.158;
    z += 0.07; y += 0.052;
    // плоская подошва, скруглённый переход к боку
    if (y < 0.018) y = 0.018 - (0.018 - y) * 0.15;
    // носок ниже и чуть уже, пятка круглая
    const toe = smooth(0.06, 0.23, z);
    if (y > 0.04) y = 0.04 + (y - 0.04) * (1 - 0.55 * toe);
    x *= 1 - 0.18 * toe;
    // подъём плавно поднимается к голенищу
    const instep = smooth(0.12, -0.02, z) * smooth(0.05, 0.12, y);
    y += instep * 0.035;
    footPos.setXYZ(index, x, y - 0.016, z);
  }
  foot.computeVertexNormals();
  const footColors = new Float32Array(footPos.count * 3);
  for (let index = 0; index < footPos.count; index++) {
    const height = footPos.getY(index);
    const dark = 1 - smooth(0.009, 0.016, height);   // нижние ~1.5 см: подошва
    const value = 1 - dark * 0.86;
    footColors[index * 3] = footColors[index * 3 + 1] = footColors[index * 3 + 2] = value;
  }
  foot.setAttribute('color', new THREE.BufferAttribute(footColors, 3));

  // голенище: овальное сечение, слегка расширяется кверху
  const shaft = new THREE.CylinderGeometry(1, 1, 1, 28, 8, true);
  shaft.translate(0, 0.5, 0);
  const shaftPos = shaft.attributes.position;
  for (let index = 0; index < shaftPos.count; index++) {
    const x = shaftPos.getX(index), t = shaftPos.getY(index), z = shaftPos.getZ(index);
    const radiusX = 0.054 + t * 0.006, radiusZ = 0.06 + t * 0.005;
    shaftPos.setXYZ(index, x * radiusX, 0.08 + t * 0.19, z * radiusZ - 0.008 + (1 - t) * 0.012);
  }
  shaft.computeVertexNormals();

  // подошва: контур сверху, скруглённые края
  const outline = new THREE.Shape();
  outline.moveTo(0, -0.09);
  outline.bezierCurveTo(0.05, -0.092, 0.07, -0.06, 0.068, -0.01);
  outline.bezierCurveTo(0.066, 0.06, 0.07, 0.16, 0.058, 0.2);
  outline.bezierCurveTo(0.045, 0.24, -0.045, 0.24, -0.058, 0.2);
  outline.bezierCurveTo(-0.07, 0.16, -0.066, 0.06, -0.068, -0.01);
  outline.bezierCurveTo(-0.07, -0.06, -0.05, -0.092, 0, -0.09);
  const sole = new THREE.ExtrudeGeometry(outline, { depth: 0.022, bevelEnabled: true, bevelThickness: 0.006, bevelSize: 0.006, bevelSegments: 4, curveSegments: 20 });
  sole.rotateX(Math.PI / 2);
  sole.translate(0, 0.028, 0);
  const result = { foot, shaft, sole };
  bootCache.set('geo', result);
  return result;
}

// Текстура ботинка: кожа с заломами + язычок, люверсы и шнурок крест-накрест.
// centerU — где на развёртке перед ботинка; vFrom..vTo — участок шнуровки по высоте.
function bootTexture(baseHex, laceHex, { centerU, vFrom, vTo, rows, halfWidth, width = 256, height = 256, flipV = false }) {
  const canvas = document.createElement('canvas');
  canvas.width = width; canvas.height = height;
  const ctx = canvas.getContext('2d');
  // цвета берём как есть (sRGB-значения), без перевода в линейное пространство
  const base = new THREE.Color().setHex(baseHex, THREE.LinearSRGBColorSpace), lace = new THREE.Color().setHex(laceHex, THREE.LinearSRGBColorSpace);
  const css = (color, factor = 1, alpha = 1) => `rgba(${Math.min(255, color.r * 255 * factor) | 0},${Math.min(255, color.g * 255 * factor) | 0},${Math.min(255, color.b * 255 * factor) | 0},${alpha})`;
  ctx.fillStyle = css(base);
  ctx.fillRect(0, 0, width, height);
  // заломы кожи и потёртости
  for (let index = 0; index < 160; index++) {
    const x = Math.random() * width, y = Math.random() * height, length = 6 + Math.random() * 24;
    ctx.strokeStyle = Math.random() < 0.6 ? css(base, 0.72, 0.45) : css(base, 1.25, 0.35);
    ctx.lineWidth = 1 + Math.random() * 1.5;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x + length * 0.5, y + (Math.random() - 0.5) * 6, x + length, y + (Math.random() - 0.5) * 4); ctx.stroke();
  }
  for (let index = 0; index < 1500; index++) {
    ctx.fillStyle = css(base, 0.8 + Math.random() * 0.4, 0.25);
    ctx.fillRect(Math.random() * width, Math.random() * height, 2, 2);
  }
  const toY = (v) => (flipV ? v : 1 - v) * height;
  const cx = centerU * width, half = halfWidth * width;
  const top = Math.min(toY(vFrom), toY(vTo)), bottom = Math.max(toY(vFrom), toY(vTo));
  // язычок (темнее) и канты по краям
  ctx.fillStyle = css(base, 0.55);
  ctx.fillRect(cx - half * 0.8, top, half * 1.6, bottom - top);
  ctx.fillStyle = css(base, 0.75);
  ctx.fillRect(cx - half * 1.15, top, half * 0.3, bottom - top);
  ctx.fillRect(cx + half * 0.85, top, half * 0.3, bottom - top);
  // люверсы и шнурок
  const step = (bottom - top) / rows;
  ctx.lineCap = 'round';
  for (let row = 0; row < rows; row++) {
    const y0 = top + step * (row + 0.3), y1 = top + step * (row + 1.05);
    for (const [from, to] of [[-1, 1], [1, -1]]) {
      ctx.strokeStyle = css(lace, 0.6); ctx.lineWidth = 5;
      ctx.beginPath(); ctx.moveTo(cx + from * half, y0); ctx.lineTo(cx + to * half, Math.min(y1, bottom)); ctx.stroke();
      ctx.strokeStyle = css(lace, 1.15); ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(cx + from * half, y0); ctx.lineTo(cx + to * half, Math.min(y1, bottom)); ctx.stroke();
    }
    for (const side of [-1, 1]) {
      ctx.fillStyle = 'rgba(25,25,25,1)';
      ctx.beginPath(); ctx.arc(cx + side * half, y0, 3.2, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = 'rgba(150,150,140,1)';
      ctx.beginPath(); ctx.arc(cx + side * half - 0.8, y0 - 0.8, 1.3, 0, Math.PI * 2); ctx.fill();
    }
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

function bootMaterials(materials) {
  if (materials.bootShaft) return;
  const baseHex = materials.boot.color.getHex();
  const black = baseHex < 0x303030;
  const laceHex = black ? 0x5a5a58 : 0x8a7a60;
  // голенище: CylinderGeometry, перед (+z) на u = 0 -> рисуем в центре и сдвигаем на половину
  const shaftMap = bootTexture(baseHex, laceHex, { centerU: 0.5, vFrom: 0.02, vTo: 0.94, rows: 6, halfWidth: 0.07 });
  shaftMap.wrapS = THREE.RepeatWrapping;
  shaftMap.offset.x = 0.5;
  materials.bootShaft = new THREE.MeshStandardMaterial({ map: shaftMap, roughness: 0.85 });
  // стопа: SphereGeometry, перед (+z) на u = 0.75 (x = -cos, z = sin -> sin = 1 при u = 0.25; развёртка зеркальна по v)
  const footMap = bootTexture(baseHex, laceHex, { centerU: 0.25, vFrom: 0.0, vTo: 0.14, rows: 2, halfWidth: 0.045, flipV: true });
  materials.bootFoot = new THREE.MeshStandardMaterial({ map: footMap, roughness: 0.85, vertexColors: true });
}

export function buildBoot(materials) {
  const { foot, shaft, sole } = bootGeometries();
  const boot = new THREE.Group();
  bootMaterials(materials);
  boot.add(new THREE.Mesh(foot, materials.bootFoot));
  boot.add(new THREE.Mesh(shaft, materials.bootShaft));
  const cap = new THREE.Mesh(new THREE.CircleGeometry(1, 28), materials.boot);
  cap.rotation.x = -Math.PI / 2;
  cap.scale.set(0.06, 0.065, 1);
  cap.position.set(0, 0.265, -0.008);
  boot.add(cap);
  // мягкий кант голенища
  const collar = new THREE.Mesh(new THREE.TorusGeometry(1, 0.2, 10, 28), materials.boot);
  collar.rotation.x = Math.PI / 2;
  collar.scale.set(0.06, 0.066, 0.06);
  collar.position.set(0, 0.268, -0.008);
  boot.add(collar);
  boot.traverse((node) => { if (node.isMesh) node.castShadow = node.receiveShadow = true; });
  return boot;
}
