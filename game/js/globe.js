// Глобальная карта: вращаемый глобус (ортографическая проекция) с физической картой и границами стран.
// Шар рисуется попиксельно: для каждой точки экрана внутри круга — широта и долгота, цвет из текстуры
// GLOBE_TEXTURE (равнопромежуточная проекция 2048×1024), мягкое освещение и дымка атмосферы.
// Границы стран (GLOBE_BORDERS) — линии поверх, видимая полусфера. Пока работает одна кнопка — «Начать задание».
var Globe = (function () {
  'use strict';

  var DEGREE = Math.PI / 180;
  var PANEL_WIDTH = 250;
  var MISSION = { name: 'БАЗА НА ПЛАТО', lat: 47.5, lon: 68.0, page: 'index.html' };
  var MIN_ZOOM = 0.7, MAX_ZOOM = 2.6;

  var canvas = document.getElementById('space');
  var context = canvas.getContext('2d');
  var view = { lon: 52 * DEGREE, lat: 28 * DEGREE, zoom: 1 };
  var viewWidth = 0, viewHeight = 0, pixelRatio = 1;
  var texture = null;                       // { width, height, data: Uint8ClampedArray }
  var starfield = null;                     // фон: звёзды и туманности, рисуется один раз на размер окна
  var globeLayer = document.createElement('canvas'), globeContext = globeLayer.getContext('2d');
  var layerState = { key: '', x: 0, y: 0, width: 0, height: 0 };
  var dirty = true, draftUntil = 0;         // пока глобус вращают, растр считается в пониженном разрешении
  var draftScale = 0.5;                     // подстраивается так, чтобы кадр при вращении считался не дольше ~25 мс

  // ---------------- текстура ----------------
  var textureImage = new Image();
  textureImage.onload = function () {
    var sheet = document.createElement('canvas');
    sheet.width = textureImage.naturalWidth; sheet.height = textureImage.naturalHeight;
    var sheetContext = sheet.getContext('2d');
    sheetContext.drawImage(textureImage, 0, 0);
    texture = { width: sheet.width, height: sheet.height, data: sheetContext.getImageData(0, 0, sheet.width, sheet.height).data };
    dirty = true;
  };
  textureImage.src = GLOBE_TEXTURE;

  // границы: точки как единичные векторы (x — к долготе 90° в. д., y — к северному полюсу, z — к нулевому меридиану)
  var borderLines = GLOBE_BORDERS.map(function (line) {
    var vectors = new Float32Array(line.length / 2 * 3);
    for (var index = 0; index < line.length / 2; index++) {
      var lon = line[index * 2] * DEGREE, lat = line[index * 2 + 1] * DEGREE;
      vectors[index * 3] = Math.cos(lat) * Math.sin(lon);
      vectors[index * 3 + 1] = Math.sin(lat);
      vectors[index * 3 + 2] = Math.cos(lat) * Math.cos(lon);
    }
    return vectors;
  });

  // ---------------- размеры ----------------
  function radius() { return Math.min(viewWidth, viewHeight) * 0.42 * view.zoom; }
  function center() { return { x: viewWidth / 2, y: viewHeight / 2 }; }

  function resize() {
    pixelRatio = window.devicePixelRatio || 1;
    viewWidth = Math.max(200, window.innerWidth - PANEL_WIDTH);
    viewHeight = window.innerHeight;
    canvas.width = Math.round(viewWidth * pixelRatio);
    canvas.height = Math.round(viewHeight * pixelRatio);
    canvas.style.width = viewWidth + 'px';
    canvas.style.height = viewHeight + 'px';
    starfield = makeStarfield(viewWidth, viewHeight);
    dirty = true;
  }

  // ---------------- фон ----------------
  // генератор случайных чисел с зерном: звёзды не прыгают при изменении размера окна
  function seeded(seed) {
    var state = seed >>> 0;
    return function () { state = (state * 1664525 + 1013904223) >>> 0; return state / 4294967296; };
  }
  function makeStarfield(width, height) {
    var layer = document.createElement('canvas');
    layer.width = Math.round(width * pixelRatio); layer.height = Math.round(height * pixelRatio);
    var layerContext = layer.getContext('2d');
    layerContext.scale(pixelRatio, pixelRatio);
    layerContext.fillStyle = '#030407';
    layerContext.fillRect(0, 0, width, height);
    var random = seeded(26);
    // туманности: облака из полупрозрачных пятен
    [[0.12, 0.2, '96, 40, 140'], [0.85, 0.78, '70, 30, 120'], [0.78, 0.15, '30, 60, 120'], [0.2, 0.85, '40, 30, 90']].forEach(function (cloud) {
      for (var puff = 0; puff < 26; puff++) {
        var puffX = (cloud[0] + (random() - 0.5) * 0.3) * width, puffY = (cloud[1] + (random() - 0.5) * 0.3) * height;
        var puffRadius = (0.05 + random() * 0.12) * Math.max(width, height);
        var gradient = layerContext.createRadialGradient(puffX, puffY, 0, puffX, puffY, puffRadius);
        gradient.addColorStop(0, 'rgba(' + cloud[2] + ', ' + (0.05 + random() * 0.05).toFixed(3) + ')');
        gradient.addColorStop(1, 'rgba(' + cloud[2] + ', 0)');
        layerContext.fillStyle = gradient;
        layerContext.fillRect(puffX - puffRadius, puffY - puffRadius, puffRadius * 2, puffRadius * 2);
      }
    });
    // звёзды
    var count = Math.round(width * height / 900);
    for (var star = 0; star < count; star++) {
      var starX = random() * width, starY = random() * height, size = random();
      var light = 120 + Math.round(random() * 135), tint = random();
      layerContext.fillStyle = 'rgba(' + (tint < 0.2 ? light : light - 20) + ', ' + (light - 10) + ', ' + (tint > 0.7 ? 255 : light) + ', ' + (0.35 + size * 0.65).toFixed(2) + ')';
      var dot = size > 0.985 ? 2 : size > 0.9 ? 1.4 : 1;
      layerContext.fillRect(starX, starY, dot, dot);
    }
    // несколько ярких звёзд с лучами
    for (var flare = 0; flare < 3; flare++) {
      var flareX = random() * width, flareY = random() * height, length = 10 + random() * 16;
      var glow = layerContext.createRadialGradient(flareX, flareY, 0, flareX, flareY, length * 0.6);
      glow.addColorStop(0, 'rgba(230, 210, 255, 0.9)'); glow.addColorStop(1, 'rgba(160, 120, 255, 0)');
      layerContext.fillStyle = glow;
      layerContext.fillRect(flareX - length, flareY - length, length * 2, length * 2);
      layerContext.strokeStyle = 'rgba(220, 200, 255, 0.45)'; layerContext.lineWidth = 1;
      layerContext.beginPath();
      layerContext.moveTo(flareX - length, flareY); layerContext.lineTo(flareX + length, flareY);
      layerContext.moveTo(flareX, flareY - length); layerContext.lineTo(flareX, flareY + length);
      layerContext.stroke();
    }
    return layer;
  }

  // ---------------- растр шара ----------------
  // Свет падает слева сверху, немного со стороны зрителя; край шара чуть темнее (как на снимках из космоса).
  var LIGHT = (function () { var vector = [-0.45, 0.5, 0.74], length = Math.hypot(vector[0], vector[1], vector[2]); return vector.map(function (value) { return value / length; }); })();

  function renderGlobeLayer(scale) {
    var globeRadius = radius(), middle = center();
    // считаем только видимую часть шара
    var left = Math.max(0, Math.floor(middle.x - globeRadius - 1)), top = Math.max(0, Math.floor(middle.y - globeRadius - 1));
    var right = Math.min(viewWidth, Math.ceil(middle.x + globeRadius + 1)), bottom = Math.min(viewHeight, Math.ceil(middle.y + globeRadius + 1));
    if (right <= left || bottom <= top) return;
    var density = pixelRatio * scale;
    var width = Math.max(1, Math.round((right - left) * density)), height = Math.max(1, Math.round((bottom - top) * density));
    if (globeLayer.width !== width || globeLayer.height !== height) { globeLayer.width = width; globeLayer.height = height; }
    var image = globeContext.createImageData(width, height), pixels = image.data;
    var sinLat = Math.sin(view.lat), cosLat = Math.cos(view.lat);
    var textureWidth = texture.width, textureHeight = texture.height, source = texture.data;
    var radiusPixels = globeRadius * density;
    var centerX = (middle.x - left) * density, centerY = (middle.y - top) * density;
    var smooth = scale >= 1;
    for (var row = 0; row < height; row++) {
      var screenY = (centerY - (row + 0.5)) / radiusPixels;
      for (var column = 0; column < width; column++) {
        var screenX = ((column + 0.5) - centerX) / radiusPixels;
        var squared = screenX * screenX + screenY * screenY;
        if (squared >= 1) continue;
        var depth = Math.sqrt(1 - squared);
        // точка на шаре → широта и долгота при текущем повороте
        var north = screenY * cosLat + depth * sinLat;
        var forward = depth * cosLat - screenY * sinLat;
        var latitude = Math.asin(north);
        var longitude = view.lon + Math.atan2(screenX, forward);
        var textureX = (longitude / (2 * Math.PI) + 0.5) * textureWidth;
        textureX -= Math.floor(textureX / textureWidth) * textureWidth;
        var textureY = (0.5 - latitude / Math.PI) * textureHeight - 0.5;
        var red, green, blue;
        if (smooth) {
          var baseX = Math.floor(textureX - 0.5), baseY = Math.floor(textureY);
          var fracX = textureX - 0.5 - baseX, fracY = textureY - baseY;
          var columnA = (baseX + textureWidth) % textureWidth, columnB = (baseX + 1) % textureWidth;
          var rowA = Math.max(0, Math.min(textureHeight - 1, baseY)), rowB = Math.max(0, Math.min(textureHeight - 1, baseY + 1));
          var topLeft = (rowA * textureWidth + columnA) * 4, topRight = (rowA * textureWidth + columnB) * 4;
          var lowLeft = (rowB * textureWidth + columnA) * 4, lowRight = (rowB * textureWidth + columnB) * 4;
          var weightTL = (1 - fracX) * (1 - fracY), weightTR = fracX * (1 - fracY), weightLL = (1 - fracX) * fracY, weightLR = fracX * fracY;
          red = source[topLeft] * weightTL + source[topRight] * weightTR + source[lowLeft] * weightLL + source[lowRight] * weightLR;
          green = source[topLeft + 1] * weightTL + source[topRight + 1] * weightTR + source[lowLeft + 1] * weightLL + source[lowRight + 1] * weightLR;
          blue = source[topLeft + 2] * weightTL + source[topRight + 2] * weightTR + source[lowLeft + 2] * weightLL + source[lowRight + 2] * weightLR;
        } else {
          var nearest = (Math.max(0, Math.min(textureHeight - 1, Math.round(textureY))) * textureWidth + (Math.floor(textureX) % textureWidth)) * 4;
          red = source[nearest]; green = source[nearest + 1]; blue = source[nearest + 2];
        }
        var lambert = screenX * LIGHT[0] + screenY * LIGHT[1] + depth * LIGHT[2];
        var shade = (0.62 + 0.48 * Math.max(0, lambert)) * (0.78 + 0.22 * depth);
        // сглаженный край круга
        var edge = (1 - Math.sqrt(squared)) * radiusPixels;
        var offset = (row * width + column) * 4;
        pixels[offset] = red * shade;
        pixels[offset + 1] = green * shade;
        pixels[offset + 2] = blue * shade;
        pixels[offset + 3] = edge < 1.2 ? 255 * edge / 1.2 : 255;
      }
    }
    globeContext.putImageData(image, 0, 0);
    layerState = { x: left, y: top, width: right - left, height: bottom - top };
  }

  // ---------------- проекция точки ----------------
  function projectVector(vectorX, vectorY, vectorZ, globeRadius, middle, out) {
    var sinLon = Math.sin(view.lon), cosLon = Math.cos(view.lon), sinLat = Math.sin(view.lat), cosLat = Math.cos(view.lat);
    var east = vectorX * cosLon - vectorZ * sinLon;
    var ahead = vectorX * sinLon + vectorZ * cosLon;
    var up = vectorY * cosLat - ahead * sinLat;
    var toward = vectorY * sinLat + ahead * cosLat;
    out.x = middle.x + east * globeRadius; out.y = middle.y - up * globeRadius; out.depth = toward;
    return out;
  }
  function projectLatLon(lat, lon, out) {
    var latitude = lat * DEGREE, longitude = lon * DEGREE;
    return projectVector(Math.cos(latitude) * Math.sin(longitude), Math.sin(latitude), Math.cos(latitude) * Math.cos(longitude), radius(), center(), out || {});
  }

  function drawBorders(globeRadius, middle) {
    var sinLon = Math.sin(view.lon), cosLon = Math.cos(view.lon), sinLat = Math.sin(view.lat), cosLat = Math.cos(view.lat);
    context.save();
    context.strokeStyle = 'rgba(255, 226, 120, 0.78)';
    context.lineWidth = view.zoom > 1.6 ? 1.2 : 0.9;
    context.lineJoin = 'round';
    context.beginPath();
    borderLines.forEach(function (vectors) {
      var drawing = false;
      for (var index = 0; index < vectors.length; index += 3) {
        var vectorX = vectors[index], vectorY = vectors[index + 1], vectorZ = vectors[index + 2];
        var east = vectorX * cosLon - vectorZ * sinLon;
        var ahead = vectorX * sinLon + vectorZ * cosLon;
        var up = vectorY * cosLat - ahead * sinLat;
        var toward = vectorY * sinLat + ahead * cosLat;
        if (toward < 0.02) { drawing = false; continue; }      // обратная сторона шара
        var pointX = middle.x + east * globeRadius, pointY = middle.y - up * globeRadius;
        if (drawing) context.lineTo(pointX, pointY); else { context.moveTo(pointX, pointY); drawing = true; }
      }
    });
    context.stroke();
    context.restore();
  }

  function drawMission(now) {
    var point = projectLatLon(MISSION.lat, MISSION.lon);
    if (point.depth < 0.05) return;
    var pulse = (now % 1400) / 1400;
    context.save();
    context.globalAlpha = Math.min(1, point.depth * 3);
    context.strokeStyle = 'rgba(255, 110, 70, ' + (1 - pulse).toFixed(2) + ')';
    context.lineWidth = 2;
    context.beginPath(); context.arc(point.x, point.y, 6 + pulse * 16, 0, Math.PI * 2); context.stroke();
    context.fillStyle = '#ff6e46';
    context.strokeStyle = '#1a0a06'; context.lineWidth = 1.5;
    context.beginPath(); context.arc(point.x, point.y, 5, 0, Math.PI * 2); context.fill(); context.stroke();
    context.strokeStyle = '#ffd28a'; context.lineWidth = 1.2;
    context.beginPath();
    context.moveTo(point.x - 12, point.y); context.lineTo(point.x - 7, point.y);
    context.moveTo(point.x + 7, point.y); context.lineTo(point.x + 12, point.y);
    context.moveTo(point.x, point.y - 12); context.lineTo(point.x, point.y - 7);
    context.moveTo(point.x, point.y + 7); context.lineTo(point.x, point.y + 12);
    context.stroke();
    context.font = 'bold 11px Arial, sans-serif';
    var label = MISSION.name, labelWidth = context.measureText(label).width + 12;
    context.fillStyle = 'rgba(10, 13, 15, 0.82)';
    context.fillRect(point.x + 16, point.y - 22, labelWidth, 18);
    context.strokeStyle = '#e8a33a'; context.lineWidth = 1;
    context.strokeRect(point.x + 16.5, point.y - 21.5, labelWidth - 1, 17);
    context.fillStyle = '#ffd28a';
    context.textBaseline = 'middle';
    context.fillText(label, point.x + 22, point.y - 13);
    context.restore();
  }

  // ---------------- кадр ----------------
  function draw(now) {
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    context.drawImage(starfield, 0, 0, viewWidth, viewHeight);
    var globeRadius = radius(), middle = center();
    // свечение атмосферы вокруг шара
    var halo = context.createRadialGradient(middle.x, middle.y, globeRadius * 0.96, middle.x, middle.y, globeRadius * 1.14);
    halo.addColorStop(0, 'rgba(110, 170, 255, 0.42)');
    halo.addColorStop(0.35, 'rgba(80, 130, 230, 0.16)');
    halo.addColorStop(1, 'rgba(60, 100, 200, 0)');
    context.fillStyle = halo;
    context.beginPath(); context.arc(middle.x, middle.y, globeRadius * 1.14, 0, Math.PI * 2); context.fill();

    if (!texture) {
      context.fillStyle = '#123a6e';
      context.beginPath(); context.arc(middle.x, middle.y, globeRadius, 0, Math.PI * 2); context.fill();
      return;
    }
    var draft = performance.now() < draftUntil;
    var key = [view.lon, view.lat, view.zoom, viewWidth, viewHeight, draft ? 'draft' : 'full'].join(',');
    if (dirty || key !== layerState.key) {
      var started = performance.now();
      renderGlobeLayer(draft ? draftScale : 1);
      if (draft) {
        var spent = performance.now() - started;
        if (spent > 25) draftScale = Math.max(0.3, draftScale * 0.85);
        else if (spent < 12) draftScale = Math.min(0.6, draftScale * 1.08);
      }
      layerState.key = key;
      dirty = false;
    }
    context.imageSmoothingEnabled = true;
    context.drawImage(globeLayer, layerState.x, layerState.y, layerState.width, layerState.height);
    // дымка у края шара
    var haze = context.createRadialGradient(middle.x, middle.y, globeRadius * 0.7, middle.x, middle.y, globeRadius);
    haze.addColorStop(0, 'rgba(150, 200, 255, 0)');
    haze.addColorStop(1, 'rgba(150, 200, 255, 0.28)');
    context.fillStyle = haze;
    context.beginPath(); context.arc(middle.x, middle.y, globeRadius, 0, Math.PI * 2); context.fill();
    drawBorders(globeRadius, middle);
    drawMission(now);
  }

  // ---------------- управление ----------------
  var drag = null, spin = { lon: 0, lat: 0 };
  function clampView() {
    view.lat = Math.max(-85 * DEGREE, Math.min(85 * DEGREE, view.lat));
    view.zoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, view.zoom));
  }
  function rotate(deltaLon, deltaLat) {
    view.lon += deltaLon; view.lat += deltaLat;
    clampView();
    draftUntil = performance.now() + 160;
  }
  canvas.addEventListener('mousedown', function (event) {
    if (event.button !== 0) return;
    var point = projectLatLon(MISSION.lat, MISSION.lon);
    if (point.depth > 0.05 && Math.hypot(event.offsetX - point.x, event.offsetY - point.y) < 14) { flyTo(MISSION.lat, MISSION.lon); return; }
    drag = { x: event.clientX, y: event.clientY, time: performance.now() };
    spin.lon = spin.lat = 0;
    canvas.classList.add('dragging');
  });
  window.addEventListener('mousemove', function (event) {
    if (!drag) return;
    var globeRadius = radius(), now = performance.now();
    var deltaLon = -(event.clientX - drag.x) / globeRadius, deltaLat = (event.clientY - drag.y) / globeRadius;
    rotate(deltaLon, deltaLat);
    var elapsed = Math.max(1, now - drag.time);
    spin.lon = deltaLon / elapsed * 16; spin.lat = deltaLat / elapsed * 16;   // скорость за кадр для инерции
    drag.x = event.clientX; drag.y = event.clientY; drag.time = now;
  });
  window.addEventListener('mouseup', function () {
    if (!drag) return;
    if (performance.now() - drag.time > 80) spin.lon = spin.lat = 0;          // отпустили без рывка — без инерции
    drag = null;
    canvas.classList.remove('dragging');
  });
  canvas.addEventListener('wheel', function (event) {
    event.preventDefault();
    view.zoom *= Math.pow(1.12, -Math.sign(event.deltaY));
    clampView();
    draftUntil = performance.now() + 200;
  }, { passive: false });

  // плавный поворот к точке
  var flight = null;
  function flyTo(lat, lon) {
    var targetLon = lon * DEGREE, targetLat = Math.max(-60, Math.min(60, lat - 8)) * DEGREE;
    var deltaLon = targetLon - view.lon;
    deltaLon -= Math.round(deltaLon / (2 * Math.PI)) * 2 * Math.PI;
    flight = { fromLon: view.lon, fromLat: view.lat, deltaLon: deltaLon, deltaLat: targetLat - view.lat, start: performance.now(), duration: 900 };
    spin.lon = spin.lat = 0;
  }

  var held = {};
  var TURN_STEP = 1.6 * DEGREE;              // за кадр, пока кнопка поворота нажата
  document.querySelectorAll('[data-turn]').forEach(function (button) {
    var direction = button.getAttribute('data-turn');
    button.addEventListener('mousedown', function () { held[direction] = true; });
    ['mouseup', 'mouseleave'].forEach(function (name) { button.addEventListener(name, function () { held[direction] = false; }); });
  });
  document.querySelector('[data-zoom="in"]').addEventListener('click', function () { view.zoom *= 1.25; clampView(); });
  document.querySelector('[data-zoom="out"]').addEventListener('click', function () { view.zoom /= 1.25; clampView(); });
  document.querySelector('[data-home]').addEventListener('click', function () { flyTo(MISSION.lat, MISSION.lon); });
  window.addEventListener('keydown', function (event) {
    var keyMap = { ArrowLeft: 'left', ArrowRight: 'right', ArrowUp: 'up', ArrowDown: 'down' };
    if (keyMap[event.key]) { held[keyMap[event.key]] = true; event.preventDefault(); }
    if (event.key === '+' || event.key === '=') { view.zoom *= 1.25; clampView(); }
    if (event.key === '-' || event.key === '_') { view.zoom /= 1.25; clampView(); }
    if (event.key === 'Enter') startMission();
    if (event.key === 'b' || event.key === 'B' || event.key === 'и' || event.key === 'И') openBase();
  });
  window.addEventListener('keyup', function (event) {
    var keyMap = { ArrowLeft: 'left', ArrowRight: 'right', ArrowUp: 'up', ArrowDown: 'down' };
    if (keyMap[event.key]) held[keyMap[event.key]] = false;
  });

  function startMission() { window.location.href = MISSION.page; }
  document.getElementById('start').addEventListener('click', startMission);
  // своя подземная база (game/base.html): пока сразу бой «Оборона базы»
  function openBase() { window.location.href = 'base.html'; }
  document.getElementById('base').addEventListener('click', openBase);

  // ---------------- часы ----------------
  // игровое время идёт со скоростью реального; кнопки ускорения пока не работают
  var WEEKDAYS = ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];
  var MONTHS = ['ЯНВ', 'ФЕВ', 'МАР', 'АПР', 'МАЙ', 'ИЮН', 'ИЮЛ', 'АВГ', 'СЕН', 'ОКТ', 'НОЯ', 'ДЕК'];
  var gameStart = Date.UTC(2026, 3, 14, 6, 0, 0), realStart = Date.now();
  function two(value) { return (value < 10 ? '0' : '') + value; }
  function updateClock() {
    var moment = new Date(gameStart + (Date.now() - realStart));
    document.getElementById('clock-time').innerHTML = two(moment.getUTCHours()) + ':' + two(moment.getUTCMinutes()) + '<small>:' + two(moment.getUTCSeconds()) + '</small>';
    document.getElementById('clock-date').textContent = WEEKDAYS[moment.getUTCDay()] + ' · ' + moment.getUTCDate() + ' ' + MONTHS[moment.getUTCMonth()] + ' ' + moment.getUTCFullYear();
  }
  function formatCoordinate(value, positive, negative) {
    var absolute = Math.abs(value), degrees = Math.floor(absolute), minutes = Math.round((absolute - degrees) * 60);
    return degrees + '°' + two(minutes) + '′ ' + (value >= 0 ? positive : negative);
  }
  document.getElementById('mission-coords').textContent = formatCoordinate(MISSION.lat, 'с. ш.', 'ю. ш.') + ', ' + formatCoordinate(MISSION.lon, 'в. д.', 'з. д.');
  updateClock();
  setInterval(updateClock, 1000);

  // ---------------- цикл ----------------
  var lastFrame = performance.now();
  function frame(now) {
    window.requestAnimationFrame(frame);
    var steps = Math.min(4, (now - lastFrame) / 16.7);
    lastFrame = now;
    if (flight) {
      var progress = Math.min(1, (now - flight.start) / flight.duration), eased = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      view.lon = flight.fromLon + flight.deltaLon * eased; view.lat = flight.fromLat + flight.deltaLat * eased;
      draftUntil = now + 160;
      if (progress >= 1) flight = null;
    }
    var turnLon = (held.right ? 1 : 0) - (held.left ? 1 : 0), turnLat = (held.up ? 1 : 0) - (held.down ? 1 : 0);
    if (turnLon || turnLat) rotate(turnLon * TURN_STEP * steps / view.zoom, turnLat * TURN_STEP * steps / view.zoom);
    if (!drag && (Math.abs(spin.lon) > 0.00005 || Math.abs(spin.lat) > 0.00005)) {
      rotate(spin.lon * steps, spin.lat * steps);
      var decay = Math.pow(0.93, steps);
      spin.lon *= decay; spin.lat *= decay;
    }
    draw(now);
  }
  window.addEventListener('resize', resize);
  resize();
  window.requestAnimationFrame(frame);

  return {
    view: view, flyTo: flyTo, start: startMission, base: openBase,
    get ready() { return !!texture; },
    project: function (lat, lon) { return projectLatLon(lat, lon); }
  };
})();
