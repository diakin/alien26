// Шум, процедурные текстуры и геометрические помощники.
import * as THREE from 'three';

// ---------- случайные числа и шум ----------

export function mulberry32(seed) {
  let state = seed >>> 0;
  return () => {
    state += 0x6D2B79F5;
    let temp = state;
    temp = Math.imul(temp ^ (temp >>> 15), temp | 1);
    temp ^= temp + Math.imul(temp ^ (temp >>> 7), temp | 61);
    return ((temp ^ (temp >>> 14)) >>> 0) / 4294967296;
  };
}

export const random = mulberry32(20261121);
export const range = (min, max, rng = random) => min + (max - min) * rng();

// Классический градиентный шум Перлина (2D и 3D), детерминированный.
const permutation = new Uint8Array(512);
{
  const rng = mulberry32(7);
  const base = Array.from({ length: 256 }, (unused, index) => index);
  for (let index = 255; index > 0; index--) {
    const swap = Math.floor(rng() * (index + 1));
    [base[index], base[swap]] = [base[swap], base[index]];
  }
  for (let index = 0; index < 512; index++) permutation[index] = base[index & 255];
}
const fade = (value) => value * value * value * (value * (value * 6 - 15) + 10);
const lerp = (from, to, amount) => from + (to - from) * amount;
function grad3(hash, x, y, z) {
  const code = hash & 15;
  const first = code < 8 ? x : y;
  const second = code < 4 ? y : (code === 12 || code === 14 ? x : z);
  return ((code & 1) ? -first : first) + ((code & 2) ? -second : second);
}
export function noise3(x, y, z) {
  const cellX = Math.floor(x) & 255, cellY = Math.floor(y) & 255, cellZ = Math.floor(z) & 255;
  x -= Math.floor(x); y -= Math.floor(y); z -= Math.floor(z);
  const fadeX = fade(x), fadeY = fade(y), fadeZ = fade(z);
  const a = permutation[cellX] + cellY, aa = permutation[a] + cellZ, ab = permutation[a + 1] + cellZ;
  const b = permutation[cellX + 1] + cellY, ba = permutation[b] + cellZ, bb = permutation[b + 1] + cellZ;
  return lerp(
    lerp(lerp(grad3(permutation[aa], x, y, z), grad3(permutation[ba], x - 1, y, z), fadeX),
      lerp(grad3(permutation[ab], x, y - 1, z), grad3(permutation[bb], x - 1, y - 1, z), fadeX), fadeY),
    lerp(lerp(grad3(permutation[aa + 1], x, y, z - 1), grad3(permutation[ba + 1], x - 1, y, z - 1), fadeX),
      lerp(grad3(permutation[ab + 1], x, y - 1, z - 1), grad3(permutation[bb + 1], x - 1, y - 1, z - 1), fadeX), fadeY),
    fadeZ);
}
export const noise2 = (x, y) => noise3(x, y, 0.37);
export function fbm2(x, y, octaves = 5, lacunarity = 2, gain = 0.5) {
  let sum = 0, amplitude = 0.5, frequency = 1;
  for (let octave = 0; octave < octaves; octave++) {
    sum += amplitude * noise2(x * frequency, y * frequency);
    frequency *= lacunarity;
    amplitude *= gain;
  }
  return sum;
}
export function fbm3(x, y, z, octaves = 4) {
  let sum = 0, amplitude = 0.5, frequency = 1;
  for (let octave = 0; octave < octaves; octave++) {
    sum += amplitude * noise3(x * frequency, y * frequency, z * frequency);
    frequency *= 2;
    amplitude *= 0.5;
  }
  return sum;
}
// бесшовный шум для текстур: смесь по тору
export function tileNoise(u, v, scale, octaves = 5, seed = 0) {
  const angleU = u * Math.PI * 2, angleV = v * Math.PI * 2;
  const radius = scale / (Math.PI * 2);
  let sum = 0, amplitude = 0.5, frequency = 1;
  for (let octave = 0; octave < octaves; octave++) {
    sum += amplitude * noise3(
      Math.cos(angleU) * radius * frequency + seed,
      Math.sin(angleU) * radius * frequency + Math.cos(angleV) * radius * frequency,
      Math.sin(angleV) * radius * frequency + seed * 0.7);
    frequency *= 2;
    amplitude *= 0.5;
  }
  return sum;
}

// ---------- текстуры ----------

function makeCanvas(size) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  return canvas;
}

export function canvasTexture(canvas, { srgb = true, repeat = 1 } = {}) {
  const texture = new THREE.CanvasTexture(canvas);
  if (srgb) texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeat, repeat);
  texture.anisotropy = 8;
  return texture;
}

// карта нормалей из поля высот (Float32Array size*size)
export function normalFromHeight(heights, size, strength = 2) {
  const canvas = makeCanvas(size);
  const ctx = canvas.getContext('2d');
  const image = ctx.createImageData(size, size);
  const at = (x, y) => heights[((y + size) % size) * size + ((x + size) % size)];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = (at(x + 1, y) - at(x - 1, y)) * strength;
      const dy = (at(x, y + 1) - at(x, y - 1)) * strength;
      const length = Math.hypot(dx, dy, 1);
      const offset = (y * size + x) * 4;
      image.data[offset] = (-dx / length * 0.5 + 0.5) * 255;
      image.data[offset + 1] = (dy / length * 0.5 + 0.5) * 255;
      image.data[offset + 2] = (1 / length * 0.5 + 0.5) * 255;
      image.data[offset + 3] = 255;
    }
  }
  ctx.putImageData(image, 0, 0);
  return canvasTexture(canvas, { srgb: false });
}

// поле высот + цветовая функция -> albedo и нормали
function generate(size, heightFunction, colorFunction) {
  const heights = new Float32Array(size * size);
  const canvas = makeCanvas(size);
  const ctx = canvas.getContext('2d');
  const image = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = x / size, v = y / size;
      const height = heightFunction(u, v, x, y);
      heights[y * size + x] = height;
      const [red, green, blue] = colorFunction(u, v, height, x, y);
      const offset = (y * size + x) * 4;
      image.data[offset] = red;
      image.data[offset + 1] = green;
      image.data[offset + 2] = blue;
      image.data[offset + 3] = 255;
    }
  }
  ctx.putImageData(image, 0, 0);
  return { canvas, ctx, heights };
}

const clampByte = (value) => Math.max(0, Math.min(255, value));

// детальная текстура земли: нейтральная, цвет даёт цвет вершин
export function groundDetailTextures() {
  const size = 1024;
  const rng = mulberry32(11);
  const { canvas, ctx, heights } = generate(size,
    (u, v) => tileNoise(u, v, 24, 5, 1.3) * 0.6 + tileNoise(u, v, 90, 3, 5.1) * 0.4,
    (u, v, height) => {
      const light = 0.78 + height * 0.5 + (rng() - 0.5) * 0.12;
      return [clampByte(light * 230), clampByte(light * 232), clampByte(light * 225)];
    });
  // стебли и сухие травинки
  for (let index = 0; index < 26000; index++) {
    const x = rng() * size, y = rng() * size;
    const length = 2 + rng() * 7;
    const angle = -Math.PI / 2 + (rng() - 0.5) * 1.4;
    const tone = rng() < 0.5 ? 255 : 150;
    ctx.strokeStyle = `rgba(${tone},${tone},${tone - 10},${0.18 + rng() * 0.25})`;
    ctx.lineWidth = 0.6 + rng();
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
    ctx.stroke();
  }
  return { map: canvasTexture(canvas, { repeat: 1 }), normalMap: normalFromHeight(heights, size, 3) };
}

export function rockTextures(seed = 3, tint = [128, 120, 108]) {
  const size = 512;
  const rng = mulberry32(seed);
  const { canvas, ctx, heights } = generate(size,
    (u, v) => {
      const base = tileNoise(u, v, 6, 6, seed);
      const cracks = Math.abs(tileNoise(u, v, 14, 3, seed + 9));
      return base * 0.8 - Math.max(0, 0.06 - cracks) * 6;
    },
    (u, v, height) => {
      const lichen = tileNoise(u, v, 20, 3, seed + 3);
      const shadeValue = 0.72 + height * 0.55 + (rng() - 0.5) * 0.1;
      let red = tint[0] * shadeValue, green = tint[1] * shadeValue, blue = tint[2] * shadeValue;
      if (lichen > 0.22) {
        red = red * 0.7 + 60; green = green * 0.75 + 75; blue = blue * 0.6 + 30;
      }
      return [clampByte(red), clampByte(green), clampByte(blue)];
    });
  for (let index = 0; index < 4000; index++) {
    ctx.fillStyle = rng() < 0.5 ? 'rgba(30,28,24,0.35)' : 'rgba(210,205,190,0.25)';
    ctx.fillRect(rng() * size, rng() * size, 1 + rng() * 2, 1 + rng() * 2);
  }
  return { map: canvasTexture(canvas), normalMap: normalFromHeight(heights, size, 5) };
}

export function barkTextures() {
  const size = 512;
  const rng = mulberry32(5);
  const { canvas, heights } = generate(size,
    (u, v) => {
      const ridges = Math.abs(tileNoise(u * 1, v * 1, 4, 2, 2) + Math.sin(u * Math.PI * 2 * 18 + tileNoise(u, v, 8, 3, 4) * 6) * 0.4);
      return ridges * 0.6 + tileNoise(u, v, 30, 3, 8) * 0.2;
    },
    (u, v, height) => {
      const value = 0.55 + height * 0.6 + (rng() - 0.5) * 0.08;
      return [clampByte(92 * value), clampByte(80 * value), clampByte(68 * value)];
    });
  return { map: canvasTexture(canvas), normalMap: normalFromHeight(heights, size, 6) };
}

// металлические плиты: швы, болты, царапины, грязь
export function metalPanelTextures({ base = [150, 156, 160], plates = 4, seed = 1, grime = 0.5, size = 1024 } = {}) {
  const rng = mulberry32(seed);
  const plateSize = size / plates;
  const plateTone = Array.from({ length: plates * plates }, () => 0.9 + rng() * 0.2);
  const { canvas, ctx, heights } = generate(size,
    (u, v, x, y) => {
      const localX = x % plateSize, localY = y % plateSize;
      const seam = Math.min(localX, localY, plateSize - localX, plateSize - localY);
      let height = seam < 3 ? -1 : 0;
      if (seam >= 3 && seam < 6) height = -0.3;
      return height;
    },
    (u, v, height, x, y) => {
      const plate = Math.floor(y / plateSize) * plates + Math.floor(x / plateSize);
      const dirt = Math.max(0, tileNoise(u, v, 5, 4, seed + 2)) * grime * 1.8;
      let value = plateTone[plate] * (1 - dirt * 0.5) + (rng() - 0.5) * 0.04;
      if (height < -0.5) value *= 0.35;
      else if (height < 0) value *= 0.75;
      return [clampByte(base[0] * value), clampByte(base[1] * value), clampByte(base[2] * value)];
    });
  // болты
  for (let plateY = 0; plateY < plates; plateY++) {
    for (let plateX = 0; plateX < plates; plateX++) {
      for (const [cornerX, cornerY] of [[12, 12], [plateSize - 12, 12], [12, plateSize - 12], [plateSize - 12, plateSize - 12]]) {
        const centerX = plateX * plateSize + cornerX, centerY = plateY * plateSize + cornerY;
        ctx.fillStyle = 'rgba(40,42,44,0.8)';
        ctx.beginPath(); ctx.arc(centerX, centerY, 4, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = 'rgba(220,224,226,0.5)';
        ctx.beginPath(); ctx.arc(centerX - 1, centerY - 1, 2, 0, Math.PI * 2); ctx.fill();
      }
    }
  }
  // царапины
  for (let index = 0; index < 500; index++) {
    const x = rng() * size, y = rng() * size, length = 5 + rng() * 40, angle = rng() * Math.PI;
    ctx.strokeStyle = `rgba(235,238,240,${0.06 + rng() * 0.12})`;
    ctx.lineWidth = 0.7;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length); ctx.stroke();
  }
  const roughCanvas = makeCanvas(256);
  const roughCtx = roughCanvas.getContext('2d');
  roughCtx.drawImage(canvas, 0, 0, 256, 256);
  roughCtx.globalCompositeOperation = 'difference';
  roughCtx.fillStyle = '#ffffff';
  roughCtx.fillRect(0, 0, 256, 256);
  return { map: canvasTexture(canvas), normalMap: normalFromHeight(heights, size, 4), roughnessMap: canvasTexture(roughCanvas, { srgb: false }) };
}

// камуфляж из пятен
export function camoTexture(palette, { seed = 1, scale = 5, size = 512 } = {}) {
  const thresholds = palette.slice(1).map((unused, index) => ({ seed: seed * 13 + index * 7.7, level: 0.05 + index * 0.02 }));
  const { canvas, ctx } = generate(size, () => 0, (u, v) => {
    let color = palette[0];
    thresholds.forEach((layer, index) => {
      const value = tileNoise(u, v * 1.4, scale + index * 1.5, 4, layer.seed);
      if (value > layer.level) color = palette[index + 1];
    });
    return color;
  });
  // ткань: мелкая сетка
  const rng = mulberry32(seed + 100);
  ctx.globalAlpha = 0.08;
  for (let y = 0; y < size; y += 2) {
    ctx.fillStyle = y % 4 ? '#000' : '#fff';
    ctx.fillRect(0, y, size, 1);
  }
  ctx.globalAlpha = 1;
  for (let index = 0; index < 3000; index++) {
    ctx.fillStyle = `rgba(0,0,0,${rng() * 0.12})`;
    ctx.fillRect(rng() * size, rng() * size, 2, 2);
  }
  return canvasTexture(canvas, { repeat: 1 });
}

// стропы MOLLE: горизонтальные полосы
export function webbingTexture(baseColor = [40, 42, 44], seed = 3) {
  const size = 256;
  const rng = mulberry32(seed);
  const { canvas, ctx } = generate(size, () => 0, (u, v) => {
    const value = 0.9 + (rng() - 0.5) * 0.15;
    return baseColor.map((channel) => clampByte(channel * value));
  });
  for (let y = 0; y < size; y += 32) {
    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    ctx.fillRect(0, y, size, 3);
    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    ctx.fillRect(0, y + 3, size, 2);
    for (let x = 0; x < size; x += 24) {
      ctx.fillStyle = 'rgba(0,0,0,0.25)';
      ctx.fillRect(x, y + 4, 2, 24);
    }
  }
  return canvasTexture(canvas);
}

export function alienSkinTextures() {
  const size = 512;
  const rng = mulberry32(31);
  const { canvas, ctx, heights } = generate(size,
    (u, v) => tileNoise(u, v, 18, 4, 3) * 0.5 + Math.abs(tileNoise(u, v, 9, 3, 9)) * -0.6,
    (u, v, height) => {
      const mottle = tileNoise(u, v, 7, 4, 12);
      const value = 0.82 + height * 0.35 + mottle * 0.3 + (rng() - 0.5) * 0.05;
      return [clampByte(118 * value), clampByte(134 * value), clampByte(136 * value)];
    });
  // вены
  ctx.strokeStyle = 'rgba(60,70,90,0.28)';
  for (let index = 0; index < 60; index++) {
    let x = rng() * size, y = rng() * size;
    ctx.lineWidth = 0.6 + rng() * 1.2;
    ctx.beginPath(); ctx.moveTo(x, y);
    for (let step = 0; step < 12; step++) {
      x += (rng() - 0.5) * 18; y += (rng() - 0.3) * 14;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  return { map: canvasTexture(canvas), normalMap: normalFromHeight(heights, size, 3) };
}

export function chitinTextures() {
  const size = 256;
  const rng = mulberry32(41);
  const { canvas, heights } = generate(size,
    (u, v) => Math.sin(v * Math.PI * 2 * 4 + tileNoise(u, v, 4, 2, 1) * 3) * 0.15 + tileNoise(u, v, 16, 3, 5) * 0.3,
    (u, v, height) => {
      const value = 0.6 + height * 0.35 + (rng() - 0.5) * 0.05;
      return [clampByte(52 * value), clampByte(60 * value), clampByte(56 * value)];
    });
  return { map: canvasTexture(canvas), normalMap: normalFromHeight(heights, size, 5) };
}

// экраны пультов
export function screenTexture(color = '#ffb347', seed = 1, kind = 'text') {
  const canvas = document.createElement('canvas');
  canvas.width = 256; canvas.height = 160;
  const ctx = canvas.getContext('2d');
  const rng = mulberry32(seed);
  ctx.fillStyle = '#05090a';
  ctx.fillRect(0, 0, 256, 160);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  if (kind === 'wave') {
    ctx.lineWidth = 2;
    for (let line = 0; line < 3; line++) {
      ctx.globalAlpha = 0.9 - line * 0.25;
      ctx.beginPath();
      for (let x = 0; x <= 256; x += 4) {
        const y = 80 + Math.sin(x * 0.05 + line) * 30 * Math.exp(-(((x - 128) / 80) ** 2)) + (rng() - 0.5) * 6 + line * 20 - 20;
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  } else {
    for (let row = 0; row < 12; row++) {
      let x = 10;
      while (x < 240) {
        const width = 4 + rng() * 14;
        ctx.globalAlpha = 0.5 + rng() * 0.5;
        ctx.fillRect(x, 10 + row * 12, width, 6);
        x += width + 4 + rng() * 6;
      }
    }
  }
  ctx.globalAlpha = 0.15;
  for (let y = 0; y < 160; y += 3) ctx.fillRect(0, y, 256, 1);
  return canvasTexture(canvas);
}

// карточка листьев: белые листья на прозрачном фоне, цвет даёт instanceColor
export function leafClusterTexture(seed = 1, kind = 'broad') {
  const size = 256;
  const canvas = makeCanvas(size);
  const ctx = canvas.getContext('2d');
  const rng = mulberry32(seed);
  const count = kind === 'broad' ? 46 : 70;
  for (let index = 0; index < count; index++) {
    const x = 30 + rng() * 196, y = 30 + rng() * 196;
    const length = kind === 'broad' ? 16 + rng() * 14 : 10 + rng() * 8;
    const width = length * (kind === 'broad' ? 0.55 : 0.4);
    const angle = rng() * Math.PI * 2;
    const tone = 150 + rng() * 105;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.fillStyle = `rgb(${tone},${tone},${tone})`;
    ctx.beginPath();
    ctx.moveTo(0, -length);
    ctx.quadraticCurveTo(width, -length * 0.3, 0, length * 0.6);
    ctx.quadraticCurveTo(-width, -length * 0.3, 0, -length);
    ctx.fill();
    ctx.strokeStyle = `rgba(0,0,0,0.25)`;
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, -length * 0.9); ctx.lineTo(0, length * 0.5); ctx.stroke();
    ctx.restore();
  }
  const texture = canvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

// ---------- геометрия ----------

const upVector = new THREE.Vector3(0, 1, 0);

// цилиндр (усечённый конус) между двумя точками
export function segment(start, end, radiusStart, radiusEnd, material, radialSegments = 10) {
  const direction = new THREE.Vector3().subVectors(end, start);
  const length = direction.length();
  const geometry = new THREE.CylinderGeometry(radiusEnd, radiusStart, length, radialSegments, 1);
  geometry.translate(0, length / 2, 0);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.copy(start);
  mesh.quaternion.setFromUnitVectors(upVector, direction.clone().normalize());
  mesh.castShadow = mesh.receiveShadow = true;
  return mesh;
}

export function ball(position, radius, material, scale = [1, 1, 1], segments = 12) {
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, segments, Math.max(6, segments * 0.7 | 0)), material);
  mesh.position.copy(position);
  mesh.scale.set(...scale);
  mesh.castShadow = mesh.receiveShadow = true;
  return mesh;
}

// двухзвенная ИК: вернуть положение среднего сустава
export function solveTwoBone(root, target, lengthA, lengthB, pole) {
  const toTarget = new THREE.Vector3().subVectors(target, root);
  let distance = toTarget.length();
  distance = Math.min(Math.max(distance, Math.abs(lengthA - lengthB) + 1e-3), lengthA + lengthB - 1e-3);
  const direction = toTarget.clone().normalize();
  const along = (lengthA * lengthA - lengthB * lengthB + distance * distance) / (2 * distance);
  const height = Math.sqrt(Math.max(0, lengthA * lengthA - along * along));
  const poleDirection = pole.clone().sub(direction.clone().multiplyScalar(pole.dot(direction))).normalize();
  return root.clone().add(direction.multiplyScalar(along)).add(poleDirection.multiplyScalar(height));
}

// неровный камень: икосаэдр со смещением
export function rockGeometry(radius, seed, { flatten = 0.75, roughness = 0.35, detail = 3 } = {}) {
  const geometry = new THREE.IcosahedronGeometry(radius, detail);
  const position = geometry.attributes.position;
  const vertex = new THREE.Vector3();
  for (let index = 0; index < position.count; index++) {
    vertex.fromBufferAttribute(position, index);
    const direction = vertex.clone().normalize();
    const displacement = 1 + fbm3(direction.x * 1.6 + seed, direction.y * 1.6, direction.z * 1.6 - seed, 4) * roughness * 2
      + Math.max(0, fbm3(direction.x * 4 + seed, direction.y * 4, direction.z * 4, 2)) * 0.15;
    vertex.copy(direction).multiplyScalar(radius * displacement);
    // плоские сколы
    const facet = Math.floor((direction.x * 3 + seed) * 1.3) * 0.02;
    vertex.y *= flatten;
    vertex.x += facet;
    position.setXYZ(index, vertex.x, vertex.y, vertex.z);
  }
  geometry.computeVertexNormals();
  return geometry;
}

export function setShadows(object, cast = true, receive = true) {
  object.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = cast;
      node.receiveShadow = receive;
    }
  });
  return object;
}

// складки ткани: карта нормалей (вытянутый шум + швы)
export function fabricNormalTexture(seed = 21) {
  const size = 512;
  const heights = new Float32Array(size * size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = x / size, v = y / size;
      const warp = tileNoise(u, v, 3, 2, seed + 4) * 0.35;
      const creases = Math.pow(Math.abs(Math.sin((v + warp) * Math.PI * 2 * 7)), 0.35) * 0.35 + Math.pow(Math.abs(Math.sin((u * 0.6 + v + warp * 1.3) * Math.PI * 2 * 5)), 0.4) * 0.2;
      const folds = tileNoise(u * 1, v * 1, 5, 3, seed) * 0.9 - creases;
      const weave = ((x + y) % 4 < 2 ? 0.02 : -0.02);
      const seam = (x % 128 < 3) ? -0.25 : 0;
      heights[y * size + x] = folds + weave + seam;
    }
  }
  return normalFromHeight(heights, size, 3.5);
}

// в three r162 нет scene.environmentIntensity: сила окружения задаётся каждому материалу
export function setEnvIntensity(root, value) {
  root.traverse((node) => {
    if (!node.material) return;
    for (const material of Array.isArray(node.material) ? node.material : [node.material]) {
      if ('envMapIntensity' in material) material.envMapIntensity = value;
    }
  });
}
