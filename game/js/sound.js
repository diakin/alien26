// Звуки, синтезированные в браузере (Web Audio), без файлов: выстрел карабина, плазма, автопушка, попадание,
// взрыв гранаты, падение тела, шаги K7 не озвучены. Фон — шум ветра (регулятор «музыка и фон»).
// Браузер разрешает звук только после действия игрока, поэтому звук включается на первый щелчок или клавишу.
var Sound = (function () {
  'use strict';

  var audio = null, effectsGain = null, ambienceGain = null, noiseBuffer = null;
  function volume(key) { return window.Settings ? Settings.values[key] / 100 : 0.6; }

  function start() {
    if (audio) return;
    var AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    audio = new AudioContextClass();
    effectsGain = audio.createGain();
    effectsGain.connect(audio.destination);
    ambienceGain = audio.createGain();
    ambienceGain.connect(audio.destination);
    // белый шум на 2 секунды — основа для выстрелов, взрывов и ветра
    noiseBuffer = audio.createBuffer(1, audio.sampleRate * 2, audio.sampleRate);
    var data = noiseBuffer.getChannelData(0);
    for (var index = 0; index < data.length; index++) data[index] = Math.random() * 2 - 1;
    applyVolumes();
    startWind();
  }
  function applyVolumes() {
    if (!audio) return;
    effectsGain.gain.value = volume('soundVolume') * 0.8;
    ambienceGain.gain.value = volume('musicVolume') * 0.5;
  }
  window.addEventListener('mousedown', start, true);
  window.addEventListener('keydown', start, true);
  if (window.Settings) Settings.onChange(function (values, key) { if (!key || key === 'soundVolume' || key === 'musicVolume') applyVolumes(); });

  function noise(duration, filterType, frequency, peak, attack, decay, when) {
    var source = audio.createBufferSource();
    source.buffer = noiseBuffer;
    var filter = audio.createBiquadFilter();
    filter.type = filterType; filter.frequency.value = frequency;
    var gain = audio.createGain();
    var time = audio.currentTime + (when || 0);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(peak, time + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + attack + decay);
    source.connect(filter); filter.connect(gain); gain.connect(effectsGain);
    source.start(time, Math.random() * 1.5, duration);
    return filter;
  }
  function tone(type, from, to, duration, peak, when) {
    var oscillator = audio.createOscillator(), gain = audio.createGain();
    var time = audio.currentTime + (when || 0);
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(from, time);
    oscillator.frequency.exponentialRampToValueAtTime(to, time + duration);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(peak, time + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    oscillator.connect(gain); gain.connect(effectsGain);
    oscillator.start(time); oscillator.stop(time + duration + 0.05);
  }

  // звук события; distance — расстояние от центра экрана в клетках: дальние тише
  function play(kind, distance) {
    if (!audio || volume('soundVolume') <= 0) return;
    var far = Math.max(0.25, 1 - (distance || 0) / 40);
    if (kind === 'bullet') {
      noise(0.25, 'bandpass', 1800, 0.9 * far, 0.002, 0.12);
      noise(0.3, 'lowpass', 400, 0.6 * far, 0.002, 0.2);
    } else if (kind === 'plasma') {
      tone('sawtooth', 1400, 180, 0.28, 0.25 * far);
      tone('sine', 900, 120, 0.32, 0.3 * far);
    } else if (kind === 'shell') {
      noise(0.5, 'lowpass', 600, 1.0 * far, 0.003, 0.35);
      tone('sine', 120, 40, 0.3, 0.6 * far);
    } else if (kind === 'impact') {
      noise(0.12, 'highpass', 2500, 0.25 * far, 0.002, 0.06);
    } else if (kind === 'explosion') {
      noise(1.6, 'lowpass', 320, 1.0 * far, 0.005, 1.3);
      noise(0.6, 'bandpass', 900, 0.5 * far, 0.002, 0.4);
      tone('sine', 90, 28, 0.9, 0.8 * far);
    } else if (kind === 'fall') {
      noise(0.3, 'lowpass', 250, 0.5 * far, 0.01, 0.22);
    } else if (kind === 'crash') {
      noise(1.0, 'lowpass', 500, 0.9 * far, 0.005, 0.8);
      for (var hit = 0; hit < 4; hit++) noise(0.15, 'bandpass', 1200 + hit * 500, 0.35 * far, 0.002, 0.1, 0.1 + hit * 0.12);
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

  return { play: play, start: start };
})();
