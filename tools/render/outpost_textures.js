// Процедурные текстуры для карты базы: панели стен, пол, крыша, настил, контейнеры, земля.
import * as THREE from 'three';
import { mulberry32, fbm2, tileNoise, canvasTexture } from './lib.js';

const clampByte = (value) => Math.max(0, Math.min(255, Math.round(value)));
const smoothstep = (edge0, edge1, value) => { const t = Math.max(0, Math.min(1, (value - edge0) / (edge1 - edge0))); return t * t * (3 - 2 * t); };

function makeCanvas(width, height) {
  const canvas = document.createElement('canvas');
  canvas.width = width; canvas.height = height;
  return canvas;
}

// карта нормалей из канваса высот (серый), прямоугольного
function normalFromCanvas(heightCanvas, strength = 3, wrap = true) {
  const width = heightCanvas.width, height = heightCanvas.height;
  const source = heightCanvas.getContext('2d').getImageData(0, 0, width, height).data;
  const canvas = makeCanvas(width, height);
  const context = canvas.getContext('2d');
  const image = context.createImageData(width, height);
  const at = (x, y) => {
    if (wrap) { x = (x + width) % width; y = (y + height) % height; } else { x = Math.max(0, Math.min(width - 1, x)); y = Math.max(0, Math.min(height - 1, y)); }
    return source[(y * width + x) * 4] / 255;
  };
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const dx = (at(x + 1, y) - at(x - 1, y)) * strength, dy = (at(x, y + 1) - at(x, y - 1)) * strength;
      const length = Math.hypot(dx, dy, 1), offset = (y * width + x) * 4;
      image.data[offset] = (-dx / length * 0.5 + 0.5) * 255;
      image.data[offset + 1] = (dy / length * 0.5 + 0.5) * 255;
      image.data[offset + 2] = (1 / length * 0.5 + 0.5) * 255;
      image.data[offset + 3] = 255;
    }
  }
  context.putImageData(image, 0, 0);
  const texture = canvasTexture(canvas, { srgb: false });
  return texture;
}

// заливка цветом с шумом и грязью (попиксельно)
function noisyFill(context, width, height, color, { seed = 1, grain = 10, dirt = 0.25, scale = 3, streaks = 0 } = {}) {
  const rng = mulberry32(seed);
  const image = context.createImageData(width, height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const u = x / width, v = y / height;
      const blotch = tileNoise(u, v, scale, 4, seed) * dirt;
      const streak = streaks ? Math.max(0, tileNoise(u * 7, 0.3, 30, 2, seed + 3)) * streaks * (1 - v) : 0;
      const tone = 1 + blotch - streak + (rng() - 0.5) * grain / 255;
      const offset = (y * width + x) * 4;
      image.data[offset] = clampByte(color[0] * tone);
      image.data[offset + 1] = clampByte(color[1] * tone);
      image.data[offset + 2] = clampByte(color[2] * tone);
      image.data[offset + 3] = 255;
    }
  }
  context.putImageData(image, 0, 0);
}

// ---------- панели стен: сегмент 1.25 м x 2.28 м ----------
// style: 'hab' (светлые панели, оранжевая полоса), 'inner' (внутренние, бежевые), 'cabin' (тёмно-серые)
export function wallPanelTextures(style, variant) {
  const width = 512, height = 936;
  const palettes = {
    hab: { base: [192, 194, 190], band: [74, 78, 80], stripe: [214, 96, 30] },
    inner: { base: [178, 172, 158], band: [96, 98, 96], stripe: [120, 132, 136] },
    cabin: { base: [126, 132, 136], band: [52, 56, 58], stripe: [222, 120, 30] },
  };
  const palette = palettes[style];
  const meter = height / 2.28;
  const yAt = (meters) => height - meters * meter;
  const canvas = makeCanvas(width, height), context = canvas.getContext('2d');
  const heightCanvas = makeCanvas(width, height), heightContext = heightCanvas.getContext('2d');
  noisyFill(context, width, height, palette.base, { seed: 11 + variant * 7 + style.length, grain: 9, dirt: style === 'inner' ? 0.08 : 0.16, scale: 3, streaks: style === 'inner' ? 0 : 0.35 });
  heightContext.fillStyle = '#808080'; heightContext.fillRect(0, 0, width, height);
  const rng = mulberry32(31 + variant * 13 + style.length);
  // нижний цокольный пояс и полоса
  context.fillStyle = `rgb(${palette.band.join(',')})`;
  context.fillRect(0, yAt(0.3), width, 0.3 * meter);
  context.fillStyle = `rgb(${palette.stripe.join(',')})`;
  context.fillRect(0, yAt(style === 'inner' ? 0.95 : 2.06), width, 0.08 * meter);
  heightContext.fillStyle = '#9a9a9a'; heightContext.fillRect(0, yAt(0.3), width, 0.3 * meter);
  // швы панелей: вертикальные и горизонтальный
  const seamsX = style === 'inner' ? [0, width] : [0, width / 2, width];
  const seamY = yAt(1.22);
  context.fillStyle = 'rgba(30,32,34,0.75)';
  heightContext.fillStyle = '#202020';
  for (const x of seamsX) { context.fillRect(x - 2, 0, 4, height); heightContext.fillRect(x - 2, 0, 4, height); }
  context.fillRect(0, seamY - 2, width, 3); heightContext.fillRect(0, seamY - 2, width, 3);
  context.fillStyle = 'rgba(255,255,255,0.25)';
  for (const x of seamsX) context.fillRect(x + 2, 0, 1, height);
  // заклёпки вдоль швов
  if (style !== 'inner') {
    for (const x of seamsX) {
      for (let y = 30; y < yAt(0.32); y += 54) {
        for (const side of [-9, 9]) {
          context.fillStyle = 'rgba(60,62,64,0.8)'; context.beginPath(); context.arc(x + side, y, 2.6, 0, Math.PI * 2); context.fill();
          heightContext.fillStyle = '#c8c8c8'; heightContext.beginPath(); heightContext.arc(x + side, y, 2.6, 0, Math.PI * 2); heightContext.fill();
        }
      }
    }
  }
  // вариант: решётка вентиляции, табличка, люк
  if (style !== 'inner' && variant === 1) {
    const left = width * 0.58, top = yAt(1.95), slatWidth = width * 0.3;
    for (let slat = 0; slat < 7; slat++) {
      context.fillStyle = 'rgba(28,30,32,0.85)'; context.fillRect(left, top + slat * 11, slatWidth, 6);
      heightContext.fillStyle = '#303030'; heightContext.fillRect(left, top + slat * 11, slatWidth, 6);
    }
  }
  if (style !== 'inner' && variant === 2) {
    context.fillStyle = 'rgba(40,44,46,0.9)'; context.fillRect(width * 0.12, yAt(1.75), width * 0.22, 0.18 * meter);
    context.fillStyle = 'rgba(230,180,60,0.9)'; context.font = 'bold 26px Arial'; context.fillText('N8', width * 0.14, yAt(1.62));
    heightContext.fillStyle = '#a8a8a8'; heightContext.fillRect(width * 0.12, yAt(1.75), width * 0.22, 0.18 * meter);
  }
  // грязь у земли и потёки
  const gradient = context.createLinearGradient(0, yAt(0.7), 0, height);
  gradient.addColorStop(0, 'rgba(120,96,70,0)');
  gradient.addColorStop(1, `rgba(120,96,70,${style === 'inner' ? 0.15 : 0.45})`);
  context.fillStyle = gradient; context.fillRect(0, yAt(0.7), width, 0.7 * meter);
  if (style !== 'inner') {
    for (let streak = 0; streak < 14; streak++) {
      const x = rng() * width, length = 40 + rng() * 300;
      const fade = context.createLinearGradient(0, 0, 0, length);
      fade.addColorStop(0, 'rgba(50,46,40,0.22)'); fade.addColorStop(1, 'rgba(50,46,40,0)');
      context.fillStyle = fade; context.fillRect(x, 0, 2 + rng() * 5, length);
    }
  }
  const map = canvasTexture(canvas);
  map.wrapS = map.wrapT = THREE.ClampToEdgeWrapping;
  return { map, normalMap: normalFromCanvas(heightCanvas, 4, false) };
}

// пол помещения: листы 0.625 м с рифлением; на клетку одна текстура
export function interiorFloorTextures() {
  const size = 512;
  const canvas = makeCanvas(size, size), context = canvas.getContext('2d');
  const heightCanvas = makeCanvas(size, size), heightContext = heightCanvas.getContext('2d');
  noisyFill(context, size, size, [120, 124, 124], { seed: 5, grain: 10, dirt: 0.15, scale: 2 });
  heightContext.fillStyle = '#808080'; heightContext.fillRect(0, 0, size, size);
  const rng = mulberry32(17);
  // рифление «чечевица»
  for (let y = 8; y < size; y += 16) {
    for (let x = 8 + ((y / 16) % 2) * 8; x < size; x += 16) {
      const angle = ((x + y) / 16) % 2 ? 0.8 : -0.8;
      context.save(); context.translate(x, y); context.rotate(angle);
      context.fillStyle = 'rgba(160,166,166,0.5)'; context.fillRect(-5, -1.2, 10, 2.4); context.restore();
      heightContext.save(); heightContext.translate(x, y); heightContext.rotate(angle);
      heightContext.fillStyle = '#b0b0b0'; heightContext.fillRect(-5, -1.2, 10, 2.4); heightContext.restore();
    }
  }
  context.fillStyle = 'rgba(20,22,24,0.8)'; heightContext.fillStyle = '#202020';
  for (const line of [0, size / 2]) {
    context.fillRect(line - 1.5, 0, 3, size); context.fillRect(0, line - 1.5, size, 3);
    heightContext.fillRect(line - 1.5, 0, 3, size); heightContext.fillRect(0, line - 1.5, size, 3);
  }
  for (let index = 0; index < 300; index++) {
    context.strokeStyle = `rgba(220,224,226,${0.05 + rng() * 0.1})`; context.lineWidth = 0.8;
    const x = rng() * size, y = rng() * size, angle = rng() * Math.PI, length = 6 + rng() * 30;
    context.beginPath(); context.moveTo(x, y); context.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length); context.stroke();
  }
  return { map: canvasTexture(canvas), normalMap: normalFromCanvas(heightCanvas, 3) };
}

// крыша: тёмная мембрана со швами, пыль
export function roofTextures() {
  const size = 512;
  const canvas = makeCanvas(size, size), context = canvas.getContext('2d');
  const heightCanvas = makeCanvas(size, size), heightContext = heightCanvas.getContext('2d');
  noisyFill(context, size, size, [86, 88, 90], { seed: 23, grain: 14, dirt: 0.3, scale: 2 });
  heightContext.fillStyle = '#808080'; heightContext.fillRect(0, 0, size, size);
  context.fillStyle = 'rgba(40,40,42,0.7)'; heightContext.fillStyle = '#b8b8b8';
  for (const line of [0, size / 2]) { context.fillRect(line - 3, 0, 6, size); heightContext.fillRect(line - 3, 0, 6, size); }
  const rng = mulberry32(29);
  for (let index = 0; index < 60; index++) {
    const x = rng() * size, y = rng() * size, radius = 10 + rng() * 50;
    const blob = context.createRadialGradient(x, y, 0, x, y, radius);
    blob.addColorStop(0, 'rgba(150,126,96,0.18)'); blob.addColorStop(1, 'rgba(150,126,96,0)');
    context.fillStyle = blob; context.fillRect(x - radius, y - radius, radius * 2, radius * 2);
  }
  return { map: canvasTexture(canvas), normalMap: normalFromCanvas(heightCanvas, 2) };
}

// решётчатый настил
export function gratingTextures() {
  const size = 256;
  const canvas = makeCanvas(size, size), context = canvas.getContext('2d');
  const heightCanvas = makeCanvas(size, size), heightContext = heightCanvas.getContext('2d');
  noisyFill(context, size, size, [92, 96, 98], { seed: 41, grain: 12, dirt: 0.2, scale: 2 });
  heightContext.fillStyle = '#d0d0d0'; heightContext.fillRect(0, 0, size, size);
  const cell = size / 16;
  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      context.fillStyle = 'rgba(18,18,20,0.88)'; context.fillRect(x * cell + 2, y * cell + 3, cell - 4, cell - 6);
      heightContext.fillStyle = '#202020'; heightContext.fillRect(x * cell + 2, y * cell + 3, cell - 4, cell - 6);
    }
  }
  return { map: canvasTexture(canvas), normalMap: normalFromCanvas(heightCanvas, 3) };
}

// гофра контейнера: вертикальные рёбра; цвет задаётся материалом
export function corrugatedTextures(seed = 3) {
  const width = 512, height = 256;
  const canvas = makeCanvas(width, height), context = canvas.getContext('2d');
  const heightCanvas = makeCanvas(width, height), heightContext = heightCanvas.getContext('2d');
  noisyFill(context, width, height, [230, 230, 230], { seed, grain: 10, dirt: 0.25, scale: 3 });
  const rng = mulberry32(seed + 5);
  for (let x = 0; x < width; x++) {
    const rib = 0.5 + 0.5 * Math.sin(x / width * Math.PI * 2 * 24);
    heightContext.fillStyle = `rgb(${clampByte(rib * 255)},${clampByte(rib * 255)},${clampByte(rib * 255)})`;
    heightContext.fillRect(x, 0, 1, height);
    context.fillStyle = `rgba(0,0,0,${(1 - rib) * 0.18})`; context.fillRect(x, 0, 1, height);
  }
  // ржавчина и потёки
  for (let index = 0; index < 50; index++) {
    const x = rng() * width, y = rng() * height, radius = 4 + rng() * 22;
    const blob = context.createRadialGradient(x, y, 0, x, y, radius);
    blob.addColorStop(0, 'rgba(90,44,20,0.45)'); blob.addColorStop(1, 'rgba(90,44,20,0)');
    context.fillStyle = blob; context.fillRect(x - radius, y - radius, radius * 2, radius * 2);
  }
  return { map: canvasTexture(canvas), normalMap: normalFromCanvas(heightCanvas, 5) };
}

// бетон для барьеров и плит
export function concreteTextures(seed = 7) {
  const size = 256;
  const canvas = makeCanvas(size, size), context = canvas.getContext('2d');
  noisyFill(context, size, size, [168, 164, 154], { seed, grain: 22, dirt: 0.25, scale: 3 });
  return { map: canvasTexture(canvas) };
}

// мелкий рельеф грунта (повторяющийся): зерно, камешки
export function groundBumpTexture() {
  const size = 512;
  const canvas = makeCanvas(size, size), context = canvas.getContext('2d');
  const image = context.createImageData(size, size);
  const rng = mulberry32(77);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = x / size, v = y / size;
      const value = 0.5 + tileNoise(u, v, 16, 4, 2.2) * 0.35 + tileNoise(u, v, 64, 2, 7.7) * 0.25 + (rng() - 0.5) * 0.2;
      const offset = (y * size + x) * 4;
      image.data[offset] = image.data[offset + 1] = image.data[offset + 2] = clampByte(value * 255);
      image.data[offset + 3] = 255;
    }
  }
  context.putImageData(image, 0, 0);
  for (let index = 0; index < 1400; index++) {
    const x = rng() * size, y = rng() * size, radius = 1 + rng() * rng() * 5;
    context.fillStyle = `rgba(255,255,255,${0.3 + rng() * 0.5})`;
    context.beginPath(); context.arc(x, y, radius, 0, Math.PI * 2); context.fill();
  }
  return canvasTexture(canvas, { srgb: false });
}

// большая текстура земли всей карты: грунт, бетонные площадки, разметка, трещины, следы колёс.
// zones — описание площадок в метрах; low/high — границы текстуры в метрах (квадрат).
export function groundTexture({ low, high, size = 4096, zones, markings }) {
  const span = high - low, pixelsPerMeter = size / span;
  const canvas = makeCanvas(size, size), context = canvas.getContext('2d');
  // низкочастотные поля шума (сетка 512), билинейно
  const noiseSize = 512;
  const fields = [0, 1, 2].map((index) => {
    const values = new Float32Array(noiseSize * noiseSize);
    for (let y = 0; y < noiseSize; y++) for (let x = 0; x < noiseSize; x++) {
      const worldX = low + (x / noiseSize) * span, worldZ = low + (y / noiseSize) * span;
      const frequency = [0.08, 0.35, 1.4][index];
      values[y * noiseSize + x] = fbm2(worldX * frequency + index * 17, worldZ * frequency - index * 9, 4);
    }
    return values;
  });
  const sample = (values, worldX, worldZ) => {
    const gx = Math.max(0, Math.min(noiseSize - 1.001, (worldX - low) / span * noiseSize));
    const gz = Math.max(0, Math.min(noiseSize - 1.001, (worldZ - low) / span * noiseSize));
    const ix = Math.floor(gx), iz = Math.floor(gz), fx = gx - ix, fz = gz - iz;
    const at = (ox, oz) => values[(iz + oz) * noiseSize + ix + ox];
    return (at(0, 0) * (1 - fx) + at(1, 0) * fx) * (1 - fz) + (at(0, 1) * (1 - fx) + at(1, 1) * fx) * fz;
  };
  // расстояние до края бетонной зоны (положительное внутри)
  const concreteDepth = (worldX, worldZ) => {
    let best = -Infinity;
    for (const zone of zones) {
      let depth;
      if (zone.circle) depth = zone.circle[2] - Math.hypot(worldX - zone.circle[0], worldZ - zone.circle[1]);
      else depth = Math.min(worldX - zone.rect[0], zone.rect[2] - worldX, worldZ - zone.rect[1], zone.rect[3] - worldZ);
      best = Math.max(best, depth);
    }
    return best;
  };
  const rng = mulberry32(101);
  const image = context.createImageData(size, size);
  const sand = [176, 146, 112], sandDark = [128, 102, 78], sandRed = [168, 118, 84], gravel = [116, 106, 96];
  const concrete = [150, 148, 140];
  for (let y = 0; y < size; y++) {
    const worldZ = low + (y + 0.5) / pixelsPerMeter;
    for (let x = 0; x < size; x++) {
      const worldX = low + (x + 0.5) / pixelsPerMeter;
      const large = sample(fields[0], worldX, worldZ), medium = sample(fields[1], worldX, worldZ), fine = sample(fields[2], worldX, worldZ);
      // грунт
      let red = sand[0], green = sand[1], blue = sand[2];
      const redness = smoothstep(-0.1, 0.4, large);
      red += (sandRed[0] - red) * redness * 0.6; green += (sandRed[1] - green) * redness * 0.6; blue += (sandRed[2] - blue) * redness * 0.6;
      const dark = smoothstep(0.05, 0.45, medium) * 0.55;
      red += (sandDark[0] - red) * dark; green += (sandDark[1] - green) * dark; blue += (sandDark[2] - blue) * dark;
      const gravelAmount = smoothstep(0.15, 0.5, fine) * 0.5;
      red += (gravel[0] - red) * gravelAmount; green += (gravel[1] - green) * gravelAmount; blue += (gravel[2] - blue) * gravelAmount;
      let tone = 0.92 + fine * 0.18 + (rng() - 0.5) * 0.16;
      if (rng() < 0.012) tone *= 0.6 + rng() * 0.6;        // камешки
      // бетон с наносами песка по краям
      const depth = concreteDepth(worldX, worldZ);
      if (depth > -0.1) {
        const drift = smoothstep(-0.05, 0.9, depth + medium * 0.6 + fine * 0.25);
        const slabX = Math.floor(worldX / 2.5), slabZ = Math.floor(worldZ / 2.5);
        const slabTone = 0.9 + ((slabX * 73856093 ^ slabZ * 19349663) >>> 0) % 1000 / 1000 * 0.16;
        const seamX = Math.abs(worldX / 2.5 - Math.round(worldX / 2.5)) * 2.5, seamZ = Math.abs(worldZ / 2.5 - Math.round(worldZ / 2.5)) * 2.5;
        const seam = Math.min(seamX, seamZ) < 0.012 ? 0.55 : 1;
        const stain = 1 - smoothstep(0.1, 0.5, medium) * 0.2;
        const concreteTone = slabTone * seam * stain * (0.95 + fine * 0.08) + (rng() - 0.5) * 0.07;
        red += (concrete[0] * concreteTone / tone - red) * drift;
        green += (concrete[1] * concreteTone / tone - green) * drift;
        blue += (concrete[2] * concreteTone / tone - blue) * drift;
      }
      const offset = (y * size + x) * 4;
      image.data[offset] = clampByte(red * tone);
      image.data[offset + 1] = clampByte(green * tone);
      image.data[offset + 2] = clampByte(blue * tone);
      image.data[offset + 3] = 255;
    }
  }
  context.putImageData(image, 0, 0);
  context.save();
  context.setTransform(pixelsPerMeter, 0, 0, pixelsPerMeter, -low * pixelsPerMeter, -low * pixelsPerMeter);   // рисуем в метрах
  // следы колёс
  for (const track of markings.tracks) {
    for (const side of [-0.8, 0.8]) {
      context.strokeStyle = 'rgba(90,72,56,0.28)'; context.lineWidth = 0.32; context.setLineDash([0.12, 0.06]);
      context.beginPath();
      track.forEach(([x, z], index) => { const next = track[Math.min(index + 1, track.length - 1)], prev = track[Math.max(index - 1, 0)]; const angle = Math.atan2(next[1] - prev[1], next[0] - prev[0]); const px = x - Math.sin(angle) * side, pz = z + Math.cos(angle) * side; if (index) context.lineTo(px, pz); else context.moveTo(px, pz); });
      context.stroke();
    }
  }
  context.setLineDash([]);
  // разметка: жёлтые линии, полосы опасности, круг посадочной площадки
  for (const line of markings.lines) {
    context.strokeStyle = 'rgba(214,170,40,0.78)'; context.lineWidth = line.width || 0.12;
    context.beginPath(); context.moveTo(line.from[0], line.from[1]); context.lineTo(line.to[0], line.to[1]); context.stroke();
  }
  for (const hazard of markings.hazards) {
    const [x0, z0, x1, z1] = hazard;
    context.save(); context.beginPath(); context.rect(x0, z0, x1 - x0, z1 - z0); context.clip();
    context.fillStyle = 'rgba(220,170,30,0.8)'; context.fillRect(x0, z0, x1 - x0, z1 - z0);
    context.fillStyle = 'rgba(30,30,30,0.85)';
    for (let stripe = x0 - (z1 - z0) - 2; stripe < x1 + 2; stripe += 0.5) {
      context.beginPath(); context.moveTo(stripe, z1); context.lineTo(stripe + 0.25, z1); context.lineTo(stripe + 0.25 + (z1 - z0), z0); context.lineTo(stripe + (z1 - z0), z0); context.fill();
    }
    context.restore();
  }
  for (const pad of markings.pads) {
    const [x, z, radius] = pad;
    context.strokeStyle = 'rgba(220,176,40,0.85)'; context.lineWidth = 0.18;
    context.beginPath(); context.arc(x, z, radius, 0, Math.PI * 2); context.stroke();
    context.lineWidth = 0.08; context.beginPath(); context.arc(x, z, radius - 0.35, 0, Math.PI * 2); context.stroke();
    context.save(); context.translate(x, z); context.rotate(-Math.PI / 4);
    context.fillStyle = 'rgba(230,226,214,0.8)'; context.font = 'bold 1.6px Arial'; context.textAlign = 'center'; context.textBaseline = 'middle';
    context.fillText('08', 0, 0); context.restore();
  }
  // трещины в бетоне и пятна масла
  for (let crack = 0; crack < 120; crack++) {
    const zone = zones[Math.floor(rng() * zones.length)];
    const box = zone.rect || [zone.circle[0] - zone.circle[2], zone.circle[1] - zone.circle[2], zone.circle[0] + zone.circle[2], zone.circle[1] + zone.circle[2]];
    let x = box[0] + rng() * (box[2] - box[0]), z = box[1] + rng() * (box[3] - box[1]);
    if (concreteDepth(x, z) < 0.3) continue;
    let angle = rng() * Math.PI * 2;
    context.strokeStyle = `rgba(48,44,40,${0.35 + rng() * 0.3})`; context.lineWidth = 0.012 + rng() * 0.02;
    context.beginPath(); context.moveTo(x, z);
    for (let step = 0; step < 8 + rng() * 16; step++) { angle += (rng() - 0.5) * 1.1; x += Math.cos(angle) * 0.12; z += Math.sin(angle) * 0.12; context.lineTo(x, z); }
    context.stroke();
  }
  for (const [x, z, radius] of markings.stains) {
    const blob = context.createRadialGradient(x, z, 0, x, z, radius);
    blob.addColorStop(0, 'rgba(30,26,24,0.45)'); blob.addColorStop(0.6, 'rgba(30,26,24,0.2)'); blob.addColorStop(1, 'rgba(30,26,24,0)');
    context.fillStyle = blob; context.fillRect(x - radius, z - radius, radius * 2, radius * 2);
  }
  context.restore();
  const texture = canvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.anisotropy = 4;
  return texture;
}
