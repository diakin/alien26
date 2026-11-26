// Звуки, синтезированные в браузере (Web Audio), без файлов: выстрел карабина, плазма, автопушка, попадание,
// взрыв гранаты, крики при гибели (боец — стон, пришелец — визг), падение тела, шаги бойцов, пришельцев и K7,
// лязг перекладин лестницы. Фон — шум ветра (регулятор «фон»). Музыка — js/music.js, звучит через musicGain.
// Звук включается сразу при открытии страницы. Если браузер не разрешает звук без действия игрока (контекст
// создаётся приостановленным), он возобновляется на первый щелчок, касание или клавишу.
var Sound = (function () {
  'use strict';

  var audio = null, effectsGain = null, ambienceGain = null, musicGain = null, noiseBuffer = null;
  var timeOffset = 0;                    // сдвиг начала звука (для рендера без звуковой карты)
  function volume(key) { return window.Settings ? Settings.values[key] / 100 : 0.6; }

  function start() {
    if (audio) return;
    var AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    audio = new AudioContextClass();
    effectsGain = createEffectsBus(audio, audio.destination);
    ambienceGain = audio.createGain();
    ambienceGain.connect(audio.destination);
    musicGain = audio.createGain();
    musicGain.connect(audio.destination);
    // белый шум на 2 секунды — основа для выстрелов, взрывов и ветра
    noiseBuffer = audio.createBuffer(1, audio.sampleRate * 2, audio.sampleRate);
    var data = noiseBuffer.getChannelData(0);
    for (var index = 0; index < data.length; index++) data[index] = Math.random() * 2 - 1;
    applyVolumes();
    startWind();
    if (window.Music) Music.attach(audio, musicGain);
  }
  // шина эффектов: громкость и мягкий ограничитель — до 0,7 линейно (тихие звуки не меняются),
  // выше пики плавно скругляются к 1, чтобы одновременные выстрелы и взрывы не давали жёсткого перегруза
  function createEffectsBus(context, destination) {
    var gain = context.createGain();
    var shaper = context.createWaveShaper();
    var curve = new Float32Array(2049), knee = 0.7;
    for (var index = 0; index < curve.length; index++) {
      var input = (index / (curve.length - 1)) * 4 - 2, size = Math.abs(input);
      var output = size <= knee ? size : knee + (1 - knee) * Math.tanh((size - knee) / (1 - knee));
      curve[index] = input < 0 ? -output : output;
    }
    shaper.curve = curve;
    shaper.oversample = '2x';
    gain.connect(shaper); shaper.connect(destination);
    return gain;
  }
  function applyVolumes() {
    if (!audio) return;
    effectsGain.gain.value = volume('soundVolume') * 0.9;
    ambienceGain.gain.value = volume('ambienceVolume') * 0.5;
    musicGain.gain.value = volume('musicVolume');
  }
  // возобновить приостановленный контекст: браузер разрешает это только в обработчике действия игрока
  function unlock() {
    if (!audio) start();
    if (audio && audio.state === 'suspended') audio.resume();
  }
  ['pointerdown', 'mousedown', 'keydown', 'touchend'].forEach(function (name) { window.addEventListener(name, unlock, true); });
  // попытка сразу: если игрок уже действовал на этом сайте (например, нажал кнопку на глобусе), браузер может разрешить
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else setTimeout(start, 0);
  if (window.Settings) Settings.onChange(function (values, key) { if (!key || key === 'soundVolume' || key === 'musicVolume' || key === 'ambienceVolume') applyVolumes(); });

  function noise(duration, filterType, frequency, peak, attack, decay, when) {
    var source = audio.createBufferSource();
    source.buffer = noiseBuffer;
    var filter = audio.createBiquadFilter();
    filter.type = filterType; filter.frequency.value = frequency;
    var gain = audio.createGain();
    var time = audio.currentTime + timeOffset + (when || 0);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(peak, time + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + attack + decay);
    source.connect(filter); filter.connect(gain); gain.connect(effectsGain);
    source.start(time, Math.random() * 1.5, duration);
    return filter;
  }
  function tone(type, from, to, duration, peak, when) {
    var oscillator = audio.createOscillator(), gain = audio.createGain();
    var time = audio.currentTime + timeOffset + (when || 0);
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(from, time);
    oscillator.frequency.exponentialRampToValueAtTime(to, time + duration);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(peak, time + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    oscillator.connect(gain); gain.connect(effectsGain);
    oscillator.start(time); oscillator.stop(time + duration + 0.05);
  }

  // голос: пила через полосовые фильтры-форманты (гласная), высота плавно падает, дрожание голоса
  function voice(from, to, duration, formants, peak, vibratoRate, vibratoDepth, type) {
    var time = audio.currentTime + timeOffset;
    var source = audio.createOscillator();
    source.type = type || 'sawtooth';
    source.frequency.setValueAtTime(from, time);
    source.frequency.exponentialRampToValueAtTime(to, time + duration);
    var vibrato = audio.createOscillator(), vibratoGain = audio.createGain();
    vibrato.frequency.value = vibratoRate; vibratoGain.gain.value = vibratoDepth;
    vibrato.connect(vibratoGain); vibratoGain.connect(source.frequency);
    var envelope = audio.createGain();
    envelope.gain.setValueAtTime(0.0001, time);
    envelope.gain.exponentialRampToValueAtTime(peak, time + 0.04);
    envelope.gain.setValueAtTime(peak, time + duration * 0.45);
    envelope.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    formants.forEach(function (formant) {
      var filter = audio.createBiquadFilter();
      filter.type = 'bandpass'; filter.frequency.value = formant[0]; filter.Q.value = formant[1];
      var level = audio.createGain(); level.gain.value = formant[2];
      source.connect(filter); filter.connect(level); level.connect(envelope);
    });
    envelope.connect(effectsGain);
    source.start(time); vibrato.start(time);
    source.stop(time + duration + 0.05); vibrato.stop(time + duration + 0.05);
  }
  function jitter(value, amount) { return value * (1 + (Math.random() - 0.5) * amount); }

  // ---------------- речь пришельцев ----------------
  // Фраза из слогов: согласная (щелчок, шипение, хрип) и гласная — пила через три полосовых фильтра-форманты,
  // высота скользит вверх или вниз, у части слогов раскатистое «р» (дрожание громкости ~30 Гц). Половина сигнала
  // проходит через кольцевой модулятор (умножение на синус) — металлический, нечеловеческий призвук.
  // Голос резкий и грубый: низкий тон, под ним рык на октаву ниже, у большинства слогов хрип (дрожание громкости
  // 35–60 Гц), широкие форманты с подъёмом верхних (жёсткий «край»), короткие отрывистые слоги с резкой атакой,
  // высота в слоге падает (лающая интонация), весь голос проходит через перегруз.
  // Тон голоса у каждого пришельца свой (options.pitch). Невидимые пришельцы слышны как перехват по рации:
  // полоса 350–3000 Гц, лёгкий перегруз, щелчки шумоподавителя в начале и в конце.
  var ALIEN_VOWELS = [[850, 1250, 2600], [520, 880, 2500], [380, 760, 2400], [480, 1950, 2700], [330, 2400, 3100], [400, 1500, 2500]];
  function alienSyllable(output, when, from, to, duration, vowel, peak, trill, ring) {
    var time = audio.currentTime + timeOffset + when;
    var source = audio.createOscillator();
    source.type = 'sawtooth';
    source.frequency.setValueAtTime(from, time);
    source.frequency.exponentialRampToValueAtTime(to, time + duration);
    var modulator = audio.createOscillator(), ringGain = audio.createGain();
    modulator.frequency.value = ring; ringGain.gain.value = 0;
    modulator.connect(ringGain.gain);
    var mix = audio.createGain(); mix.gain.value = 1;
    source.connect(mix); source.connect(ringGain); ringGain.connect(mix);
    // рык: та же пила на октаву ниже, чуть расстроена
    var growl = audio.createOscillator(), growlGain = audio.createGain();
    growl.type = 'sawtooth'; growlGain.gain.value = 0.7;
    growl.frequency.setValueAtTime(from * 0.5 * 1.012, time);
    growl.frequency.exponentialRampToValueAtTime(to * 0.5 * 1.012, time + duration);
    growl.connect(growlGain); growlGain.connect(mix);
    var envelope = audio.createGain();
    envelope.gain.setValueAtTime(0.0001, time);
    envelope.gain.exponentialRampToValueAtTime(peak, time + Math.min(0.008, duration * 0.2));
    envelope.gain.setValueAtTime(peak, time + duration * 0.55);
    envelope.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    var tremble = null;
    if (trill) {
      var shake = audio.createGain(); shake.gain.value = 0.45;
      tremble = audio.createOscillator(); tremble.type = 'square'; tremble.frequency.value = trill;
      var depth = audio.createGain(); depth.gain.value = 0.55;
      tremble.connect(depth); depth.connect(shake.gain);
      envelope.connect(shake); shake.connect(output);
    } else envelope.connect(output);
    vowel.forEach(function (frequency, index) {
      var filter = audio.createBiquadFilter();
      filter.type = 'bandpass'; filter.frequency.value = frequency * 1.05; filter.Q.value = [4, 5, 6][index];
      var level = audio.createGain(); level.gain.value = [1, 0.75, 0.5][index];
      mix.connect(filter); filter.connect(level); level.connect(envelope);
    });
    var end = time + duration + 0.05;
    source.start(time); modulator.start(time); growl.start(time); source.stop(end); modulator.stop(end); growl.stop(end);
    if (tremble) { tremble.start(time); tremble.stop(end); }
  }
  function alienNoise(output, when, duration, type, frequency, quality, peak) {
    var time = audio.currentTime + timeOffset + when;
    var source = audio.createBufferSource();
    source.buffer = noiseBuffer;
    var filter = audio.createBiquadFilter();
    filter.type = type; filter.frequency.value = frequency; filter.Q.value = quality;
    var gain = audio.createGain();
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(peak, time + Math.min(0.01, duration * 0.3));
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    source.connect(filter); filter.connect(gain); gain.connect(output);
    source.start(time, Math.random() * 1.5, duration + 0.05);
  }
  // options: { pitch — основной тон, Гц; mood — 'call' | 'reply' | 'alert' | 'grunt'; radio; distance }
  // возвращает длительность фразы, с
  function alienTalk(options) {
    if (!audio || volume('soundVolume') <= 0) return 0;
    var far = Math.max(0.25, 1 - (options.distance || 0) / 40);
    var mood = options.mood || 'call', base = options.pitch || 150;
    var output = audio.createGain();
    var start = audio.currentTime + timeOffset;
    if (options.radio) {
      var highpass = audio.createBiquadFilter(); highpass.type = 'highpass'; highpass.frequency.value = 350;
      var lowpass = audio.createBiquadFilter(); lowpass.type = 'lowpass'; lowpass.frequency.value = 3000;
      var shaper = audio.createWaveShaper(), curve = new Float32Array(512);
      for (var index = 0; index < curve.length; index++) { var input = index / (curve.length - 1) * 2 - 1; curve[index] = Math.tanh(input * 2.2) / Math.tanh(2.2); }
      shaper.curve = curve;
      var radioLevel = audio.createGain(); radioLevel.gain.value = 0.55;
      output.connect(highpass); highpass.connect(lowpass); lowpass.connect(shaper); shaper.connect(radioLevel); radioLevel.connect(effectsGain);
    } else {
      output.gain.value = far * 1.9;               // вблизи — как визг пришельца, чуть тише выстрела
      output.connect(effectsGain);
    }
    // перегруз голоса (согласные идут мимо него)
    var drive = audio.createWaveShaper(), driveCurve = new Float32Array(1024);
    for (var point = 0; point < driveCurve.length; point++) { var level = point / (driveCurve.length - 1) * 2 - 1; driveCurve[point] = Math.tanh(level * 4) / Math.tanh(4); }
    drive.curve = driveCurve;
    var voiceBus = audio.createGain(); voiceBus.gain.value = 1.4;
    var voiceOut = audio.createGain(); voiceOut.gain.value = 0.25;
    voiceBus.connect(drive); drive.connect(voiceOut); voiceOut.connect(output);
    var counts = { call: [4, 7], reply: [2, 4], alert: [2, 4], grunt: [1, 2] }[mood];
    var syllables = counts[0] + Math.floor(Math.random() * (counts[1] - counts[0] + 1));
    var fast = mood === 'alert' ? 0.7 : 1, high = mood === 'alert' ? 1.35 : mood === 'grunt' ? 0.75 : 1;
    var at = 0;
    if (options.radio) alienNoise(output, 0, 0.07, 'highpass', 2500, 0.7, 0.3);
    at += options.radio ? 0.09 : 0;
    for (var syllable = 0; syllable < syllables; syllable++) {
      var consonant = Math.floor(Math.random() * 6);
      if (consonant === 5) { alienNoise(output, at, 0.08 * fast, 'bandpass', jitter(700, 0.2), 1.5, 0.3); alienNoise(output, at, 0.06, 'bandpass', jitter(2400, 0.2), 2, 0.2); at += 0.06 * fast; }   // «хр» — грубый хрип
      if (consonant === 0) { alienNoise(output, at, 0.02, 'bandpass', jitter(3000, 0.3), 3, 0.45); at += 0.03; }                       // «к», «т» — щелчок
      else if (consonant === 1) { alienNoise(output, at, 0.11 * fast, 'bandpass', jitter(5200, 0.2), 2, 0.16); at += 0.09 * fast; }     // «с» — шипение
      else if (consonant === 2) { alienNoise(output, at, 0.09 * fast, 'bandpass', jitter(1300, 0.2), 1.2, 0.22); at += 0.07 * fast; }    // «х» — хрип
      else if (consonant === 3) { alienNoise(output, at, 0.015, 'bandpass', 2200, 4, 0.3); alienNoise(output, at + 0.04, 0.015, 'bandpass', 2600, 4, 0.25); at += 0.06; }   // «тк»
      var length = jitter(mood === 'grunt' ? 0.2 : 0.12, 0.45) * fast;
      var pitch = jitter(base * high, 0.15), last = syllable === syllables - 1;
      // слоги отрывистые, высота в слоге падает (лай); конец фразы: у вызова — короткий подъём, у остальных — резкий спад
      var target = last ? pitch * (mood === 'call' ? 1.2 : 0.6) : pitch * jitter(0.8, 0.2);
      var trill = Math.random() < (mood === 'alert' ? 0.85 : 0.65) ? jitter(45, 0.3) : 0;
      alienSyllable(voiceBus, at, pitch, target, last ? length * 1.5 : length, ALIEN_VOWELS[Math.floor(Math.random() * ALIEN_VOWELS.length)], 0.3, trill, pitch * jitter(1.47, 0.1));
      at += (last ? length * 1.5 : length) + (Math.random() < 0.25 ? jitter(0.09, 0.4) : 0.015);
    }
    if (options.radio) alienNoise(output, at + 0.02, 0.09, 'highpass', 2200, 0.7, 0.28);
    void start;
    return at + 0.15;
  }

  // звук события; distance — расстояние от центра экрана в клетках: дальние тише
  function play(kind, distance) {
    if (!audio || volume('soundVolume') <= 0) return;
    var far = Math.max(0.25, 1 - (distance || 0) / 40);
    if (kind === 'bullet') {
      // выстрел: резкий щелчок (2–5 кГц, на них слух чувствительнее всего), хлопок корпуса и короткий отзвук
      noise(0.2, 'bandpass', jitter(2300, 0.15), 2.0 * far, 0.002, 0.1);
      noise(0.08, 'highpass', 4200, 0.8 * far, 0.001, 0.05);
      noise(0.3, 'lowpass', 500, 0.9 * far, 0.002, 0.22);
      noise(0.6, 'bandpass', 900, 0.25 * far, 0.02, 0.5, 0.03);
    } else if (kind === 'plasma') {
      tone('sawtooth', 1400, 180, 0.28, 0.7 * far);
      tone('sine', 900, 120, 0.32, 0.6 * far);
      noise(0.2, 'bandpass', 3200, 0.35 * far, 0.002, 0.14);
    } else if (kind === 'shell') {
      noise(0.5, 'lowpass', 600, 1.3 * far, 0.003, 0.35);
      noise(0.2, 'bandpass', 1400, 1.4 * far, 0.002, 0.12);
      noise(0.08, 'highpass', 3500, 0.5 * far, 0.001, 0.05);
      tone('sine', 120, 40, 0.3, 0.7 * far);
    } else if (kind === 'impact') {
      noise(0.12, 'highpass', 2500, 0.25 * far, 0.002, 0.06);
    } else if (kind === 'explosion') {
      noise(1.6, 'lowpass', 320, 1.0 * far, 0.005, 1.3);
      noise(0.6, 'bandpass', 900, 1.0 * far, 0.002, 0.4);
      noise(0.5, 'highpass', 2500, 0.3 * far, 0.002, 0.35);
      tone('sine', 90, 28, 0.9, 0.8 * far);
    } else if (kind === 'fall') {
      noise(0.3, 'lowpass', 250, 0.5 * far, 0.01, 0.22);
    } else if (kind === 'crash') {
      noise(1.0, 'lowpass', 500, 0.9 * far, 0.005, 0.8);
      for (var hit = 0; hit < 4; hit++) noise(0.15, 'bandpass', 1200 + hit * 500, 0.35 * far, 0.002, 0.1, 0.1 + hit * 0.12);
    } else if (kind === 'deathSoldier') {
      // стон: «а-а» с падающей высотой и выдох
      var pitch = jitter(170, 0.3);
      voice(pitch, pitch * 0.5, 0.75, [[700, 6, 1.0], [1150, 8, 0.6], [2500, 10, 0.25]], 0.5 * far, 6, 4);
      noise(0.5, 'bandpass', 1200, 0.12 * far, 0.05, 0.4, 0.25);
    } else if (kind === 'deathAlien') {
      // визг пришельца: два расстроенных голоса с быстрым дрожанием и шипение
      var screech = jitter(620, 0.25);
      voice(screech, screech * 0.35, 0.9, [[1400, 4, 1.0], [2600, 6, 0.5]], 0.32 * far, 28, 40, 'sawtooth');
      voice(screech * 1.5, screech * 0.4, 0.8, [[1800, 5, 0.6]], 0.18 * far, 31, 55, 'square');
      noise(0.7, 'highpass', 3000, 0.18 * far, 0.02, 0.6);
    } else if (kind === 'stepSoldier') {
      // ботинок: глухой удар и хруст гравия
      noise(0.08, 'lowpass', jitter(260, 0.3), 0.9 * far, 0.004, 0.06);
      noise(0.06, 'bandpass', jitter(900, 0.3), 0.9 * far, 0.003, 0.045);
      noise(0.05, 'highpass', jitter(3200, 0.3), 0.4 * far, 0.002, 0.035, 0.01);
    } else if (kind === 'stepAlien') {
      // мягкая лапа и стук когтей
      noise(0.08, 'lowpass', jitter(180, 0.3), 1.0 * far, 0.008, 0.07);
      noise(0.07, 'bandpass', jitter(700, 0.3), 0.9 * far, 0.006, 0.05);
      for (var claw = 0; claw < 2; claw++) noise(0.02, 'bandpass', jitter(4200, 0.2), 0.6 * far, 0.001, 0.015, 0.02 + claw * 0.025);
    } else if (kind === 'stepMech') {
      // тяжёлая стопа: удар, низкий гул и шипение гидравлики
      noise(0.25, 'lowpass', 140, 1.2 * far, 0.004, 0.2);
      tone('sine', jitter(62, 0.1), 34, 0.28, 0.8 * far);
      noise(0.1, 'bandpass', jitter(650, 0.2), 1.2 * far, 0.002, 0.08);          // лязг металла о грунт
      tone('triangle', jitter(310, 0.1), 260, 0.15, 0.2 * far);
      noise(0.3, 'bandpass', 2400, 0.3 * far, 0.05, 0.2, 0.08);
    } else if (kind === 'ladder') {
      // перекладина: металлический звон
      tone('triangle', jitter(950, 0.1), 900, 0.12, 0.08 * far);
      tone('sine', jitter(1480, 0.1), 1450, 0.09, 0.05 * far);
      noise(0.04, 'highpass', 2500, 0.05 * far, 0.002, 0.03);
    } else if (kind === 'spark') {
      noise(0.06, 'highpass', 4000, 0.12 * far, 0.001, 0.04);
    } else if (kind === 'click') {
      tone('square', 900, 700, 0.04, 0.05);
    }
  }

  // ветер: шум через узкий фильтр с медленно плавающей частотой и громкостью
  function startWind() {
    var source = audio.createBufferSource();
    source.buffer = noiseBuffer; source.loop = true;
    var filter = audio.createBiquadFilter();
    filter.type = 'bandpass'; filter.frequency.value = 420; filter.Q.value = 0.7;
    var swell = audio.createGain(); swell.gain.value = 0.35;
    var lfo = audio.createOscillator(), lfoGain = audio.createGain();
    lfo.frequency.value = 0.07; lfoGain.gain.value = 0.2;
    lfo.connect(lfoGain); lfoGain.connect(swell.gain);
    var sweep = audio.createOscillator(), sweepGain = audio.createGain();
    sweep.frequency.value = 0.045; sweepGain.gain.value = 180;
    sweep.connect(sweepGain); sweepGain.connect(filter.frequency);
    source.connect(filter); filter.connect(swell); swell.connect(ambienceGain);
    source.start(); lfo.start(); sweep.start();
  }

  // рендер звуков без звуковой карты (для проверки громкости): список [вид, время в секундах, расстояние]
  function renderOffline(events, seconds) {
    var saved = [audio, effectsGain, noiseBuffer];
    var offline = new OfflineAudioContext(2, Math.ceil(44100 * seconds), 44100);
    audio = offline;
    effectsGain = createEffectsBus(offline, offline.destination);
    effectsGain.gain.value = volume('soundVolume') * 0.9;
    noiseBuffer = offline.createBuffer(1, offline.sampleRate * 2, offline.sampleRate);
    var data = noiseBuffer.getChannelData(0);
    for (var index = 0; index < data.length; index++) data[index] = Math.random() * 2 - 1;
    events.forEach(function (event) {
      timeOffset = event[1];
      if (event[0] === 'alienTalk') alienTalk(event[3] || {}); else play(event[0], event[2] || 0);
    });
    timeOffset = 0;
    audio = saved[0]; effectsGain = saved[1]; noiseBuffer = saved[2];
    return offline.startRendering();
  }

  return { play: play, alienTalk: alienTalk, start: start, renderOffline: renderOffline, get state() { return audio ? audio.state : 'none'; } };
})();
