// Музыка, синтезированная в браузере (Web Audio), без файлов. Темы:
//   calm    — «Застава»: общая, ре минор, 76 ударов в минуту, 32 такта (около 100 с по кругу);
//   shade   — «Тень»: тактическая, фон для боя без мелодии и ритма (как в UFO), 128 с по кругу;
//   contact — та же «Тень» в варианте контакта с врагом: глухой пульс, чаще удары по металлу;
//   battle  — «Контакт» (ритмичная, прежняя): ми минор с фригийской II ступенью, 112 ударов в минуту, 32 такта (около 69 с).
// Настроение из game.js: calm — мирная обстановка, tactical — бой без контакта, battle — контакт или стрельба.
// Ноты планируются потактово чуть заранее (lookahead), поэтому темп не зависит от частоты кадров игры.
// Смена темы — плавный переход: старая затихает за 3 с, новая нарастает за 2 с.
// Music.setMood(имя) задаёт тему по обстановке (из game.js); настройка «Музыка» может закрепить одну тему.
// Music.renderOffline(имя, такты) — рендер в буфер без звуковой карты (для проверки и экспорта в файл).
var Music = (function () {
  'use strict';

  function midiFrequency(note) { return 440 * Math.pow(2, (note - 69) / 12); }

  // ---------------- общие ресурсы для одного контекста ----------------
  function makeNoise(context) {
    var buffer = context.createBuffer(1, context.sampleRate * 2, context.sampleRate);
    var data = buffer.getChannelData(0);
    for (var index = 0; index < data.length; index++) data[index] = Math.random() * 2 - 1;
    return buffer;
  }
  // импульс реверберации: стереошум с экспоненциальным спадом и небольшой задержкой начала
  function makeImpulse(context, seconds, steepness) {
    var length = Math.floor(context.sampleRate * seconds), predelay = Math.floor(context.sampleRate * 0.02);
    var buffer = context.createBuffer(2, length, context.sampleRate);
    for (var channel = 0; channel < 2; channel++) {
      var data = buffer.getChannelData(channel);
      for (var index = predelay; index < length; index++) {
        data[index] = (Math.random() * 2 - 1) * Math.pow(1 - index / length, steepness);
      }
    }
    return buffer;
  }

  // Набор для одной темы: выход, посыл на реверберацию и посыл на эхо (задержка с затухающими повторами).
  function createKit(context, output, delaySeconds) {
    var kit = { context: context, noise: makeNoise(context) };
    kit.out = context.createGain();
    kit.out.gain.value = 1;
    kit.out.connect(output);

    var convolver = context.createConvolver();
    convolver.buffer = makeImpulse(context, 2.8, 2.4);
    kit.reverb = context.createGain();
    var reverbReturn = context.createGain();
    reverbReturn.gain.value = 0.8;
    kit.reverb.connect(convolver); convolver.connect(reverbReturn); reverbReturn.connect(kit.out);

    var delay = context.createDelay(2.0);
    delay.delayTime.value = delaySeconds;
    var feedback = context.createGain();
    feedback.gain.value = 0.36;
    var tone = context.createBiquadFilter();
    tone.type = 'lowpass'; tone.frequency.value = 2400;
    kit.delay = context.createGain();
    kit.delay.connect(delay); delay.connect(tone); tone.connect(feedback); feedback.connect(delay);
    var delayReturn = context.createGain();
    delayReturn.gain.value = 0.7;
    tone.connect(delayReturn); delayReturn.connect(kit.out); delayReturn.connect(kit.reverb);
    return kit;
  }

  // направить звук: прямо (dry), в реверберацию, в эхо, с панорамой −1..1
  function route(kit, node, dry, reverb, echo, pan) {
    var context = kit.context, source = node;
    if (pan && context.createStereoPanner) {
      var panner = context.createStereoPanner();
      panner.pan.value = pan;
      node.connect(panner);
      source = panner;
    }
    connectLevel(context, source, kit.out, dry === undefined ? 1 : dry);
    connectLevel(context, source, kit.reverb, reverb || 0);
    connectLevel(context, source, kit.delay, echo || 0);
  }
  function connectLevel(context, source, target, level) {
    if (level <= 0) return;
    if (level === 1) { source.connect(target); return; }
    var gain = context.createGain();
    gain.gain.value = level;
    source.connect(gain); gain.connect(target);
  }

  // огибающая: подъём, удержание, плавное затухание; возвращает время, когда звук гаснет полностью
  function sustainEnvelope(param, time, attack, hold, release, peak) {
    param.setValueAtTime(0, time);
    param.linearRampToValueAtTime(peak, time + attack);
    param.setValueAtTime(peak, time + attack + hold);
    param.setTargetAtTime(0, time + attack + hold, release / 3);
    return time + attack + hold + release * 1.7;
  }
  function percussiveEnvelope(param, time, attack, decay, peak) {
    param.setValueAtTime(0.0001, time);
    param.exponentialRampToValueAtTime(peak, time + attack);
    param.exponentialRampToValueAtTime(0.0001, time + attack + decay);
    return time + attack + decay + 0.02;
  }
  function oscillator(context, type, frequency, detune) {
    var node = context.createOscillator();
    node.type = type;
    node.frequency.value = frequency;
    if (detune) node.detune.value = detune;
    return node;
  }
  function filter(context, type, frequency, quality) {
    var node = context.createBiquadFilter();
    node.type = type;
    node.frequency.value = frequency;
    if (quality) node.Q.value = quality;
    return node;
  }
  function noiseSource(kit, time, duration) {
    var source = kit.context.createBufferSource();
    source.buffer = kit.noise;
    source.start(time, Math.random() * 1.2, duration + 0.05);
    return source;
  }
  function vary(value, amount) { return value * (1 + (Math.random() - 0.5) * amount); }

  // только для проверки баланса: kit.solo — оставить один инструмент
  function muted(kit, tag) { return !!kit.solo && kit.solo !== tag; }

  // ---------------- инструменты ----------------
  // подушка: по две слегка расстроенные пилы на ноту, разведённые влево и вправо; мягкий фильтр за такт приоткрывается и закрывается
  function pad(kit, notes, time, duration, options) {
    if (muted(kit, 'pad')) return;
    var context = kit.context;
    [-1, 1].forEach(function (side) {
      var lowpass = filter(context, 'lowpass', options.cutoff * 0.6, 0.6);
      lowpass.frequency.setValueAtTime(options.cutoff * 0.6, time);
      lowpass.frequency.linearRampToValueAtTime(options.cutoff, time + duration * 0.5);
      lowpass.frequency.linearRampToValueAtTime(options.cutoff * 0.7, time + duration + options.release);
      var envelope = context.createGain();
      envelope.gain.value = 0;
      var end = sustainEnvelope(envelope.gain, time, options.attack, Math.max(0, duration - options.attack), options.release, options.peak);
      notes.forEach(function (note, index) {
        var voice = oscillator(context, 'sawtooth', midiFrequency(note), side * options.detune + (index - 1) * 2);
        voice.connect(lowpass);
        voice.start(time); voice.stop(end);
      });
      lowpass.connect(envelope);
      route(kit, envelope, 1, options.reverb, 0, side * 0.6);
    });
  }

  // гул баса: синус на основном тоне и тихий треугольник октавой выше (слышен на маленьких колонках)
  function drone(kit, note, time, duration, peak) {
    if (muted(kit, 'bass')) return;
    var context = kit.context;
    var envelope = context.createGain();
    envelope.gain.value = 0;
    var end = sustainEnvelope(envelope.gain, time, 0.35, Math.max(0, duration - 0.35), 0.9, peak);
    var low = oscillator(context, 'sine', midiFrequency(note));
    var upper = oscillator(context, 'triangle', midiFrequency(note + 12));
    var upperLevel = context.createGain();
    upperLevel.gain.value = 0.6;
    var lowpass = filter(context, 'lowpass', 700);
    low.connect(lowpass); upper.connect(upperLevel); upperLevel.connect(lowpass); lowpass.connect(envelope);
    low.start(time); upper.start(time); low.stop(end); upper.stop(end);
    route(kit, envelope, 1, 0.1, 0, 0);
  }

  // щипок: короткая нота с быстрым спадом и закрывающимся фильтром (арпеджио, пульс)
  function pluck(kit, note, time, options) {
    if (muted(kit, 'pluck')) return;
    var context = kit.context;
    var voice = oscillator(context, options.type || 'triangle', midiFrequency(note));
    var lowpass = filter(context, 'lowpass', options.cutoff, 1.2);
    lowpass.frequency.setValueAtTime(options.cutoff, time);
    lowpass.frequency.exponentialRampToValueAtTime(Math.max(200, options.cutoff * 0.25), time + options.decay);
    var envelope = context.createGain();
    var end = percussiveEnvelope(envelope.gain, time, 0.004, options.decay, options.peak);
    voice.connect(lowpass); lowpass.connect(envelope);
    voice.start(time); voice.stop(end);
    route(kit, envelope, 1, options.reverb, options.echo, options.pan);
  }

  // ведущий голос: два генератора, вибрато вступает не сразу, как у живого исполнителя
  function lead(kit, note, time, duration, options) {
    if (muted(kit, 'lead')) return;
    var context = kit.context, frequency = midiFrequency(note);
    var lowpass = filter(context, 'lowpass', options.cutoff, 0.8);
    var envelope = context.createGain();
    envelope.gain.value = 0;
    var end = sustainEnvelope(envelope.gain, time, options.attack, Math.max(0, duration - options.attack), options.release, options.peak);
    var vibrato = oscillator(context, 'sine', options.vibratoRate || 5.2);
    var vibratoDepth = context.createGain();
    vibratoDepth.gain.setValueAtTime(0, time);
    vibratoDepth.gain.linearRampToValueAtTime(0, time + 0.25);
    vibratoDepth.gain.linearRampToValueAtTime(frequency * (options.vibrato || 0.006), time + 0.7);
    vibrato.connect(vibratoDepth);
    options.types.forEach(function (type, index) {
      var voice = oscillator(context, type, frequency, index ? 6 : -4);
      var level = context.createGain();
      level.gain.value = index ? 0.5 : 1;
      vibratoDepth.connect(voice.frequency);
      voice.connect(level); level.connect(lowpass);
      voice.start(time); voice.stop(end);
    });
    vibrato.start(time); vibrato.stop(end);
    lowpass.connect(envelope);
    route(kit, envelope, 1, options.reverb, options.echo, options.pan || 0);
  }

  // колокол: основной тон и негармонические призвуки, которые гаснут быстрее
  function bell(kit, note, time, peak, pan) {
    if (muted(kit, 'bell')) return;
    var context = kit.context, frequency = midiFrequency(note);
    var envelope = context.createGain();
    envelope.gain.value = 1;
    [[1, 1, 3.2], [2.756, 0.35, 1.1], [5.404, 0.15, 0.5]].forEach(function (partial) {
      var voice = oscillator(context, 'sine', frequency * partial[0]);
      var level = context.createGain();
      var end = percussiveEnvelope(level.gain, time, 0.003, partial[2], peak * partial[1]);
      voice.connect(level); level.connect(envelope);
      voice.start(time); voice.stop(end);
    });
    route(kit, envelope, 0.8, 0.55, 0.25, pan);
  }

  // бас боевой темы: пила с резонансным фильтром, который быстро закрывается, и синус для низа
  function pulseBass(kit, note, time, duration, peak) {
    if (muted(kit, 'bass')) return;
    var context = kit.context, frequency = midiFrequency(note);
    var lowpass = filter(context, 'lowpass', 1600, 5);
    lowpass.frequency.setValueAtTime(1700, time);
    lowpass.frequency.exponentialRampToValueAtTime(230, time + 0.16);
    var envelope = context.createGain();
    envelope.gain.value = 0;
    var end = sustainEnvelope(envelope.gain, time, 0.005, duration * 0.7, 0.07, peak);
    var saw = oscillator(context, 'sawtooth', frequency);
    var sub = oscillator(context, 'sine', frequency);
    var subLevel = context.createGain();
    subLevel.gain.value = 0.5;
    saw.connect(lowpass); lowpass.connect(envelope);
    sub.connect(subLevel); subLevel.connect(envelope);
    saw.start(time); sub.start(time); saw.stop(end); sub.stop(end);
    route(kit, envelope, 1, 0.04, 0, 0);
  }

  // аккорд-удар (как у духовых): три пилы, фильтр открыт в начале и быстро закрывается
  function stab(kit, notes, time, peak) {
    if (muted(kit, 'stab')) return;
    var context = kit.context;
    var lowpass = filter(context, 'lowpass', 3200, 1.5);
    lowpass.frequency.setValueAtTime(3200, time);
    lowpass.frequency.exponentialRampToValueAtTime(420, time + 0.35);
    var envelope = context.createGain();
    var end = percussiveEnvelope(envelope.gain, time, 0.008, 0.55, peak);
    notes.forEach(function (note) {
      [-8, 8].forEach(function (cents) {
        var voice = oscillator(context, 'sawtooth', midiFrequency(note), cents);
        voice.connect(lowpass);
        voice.start(time); voice.stop(end);
      });
    });
    lowpass.connect(envelope);
    route(kit, envelope, 1, 0.35, 0.15, 0);
  }

  // ударные
  function kick(kit, time, peak) {
    if (muted(kit, 'drums')) return;
    var context = kit.context;
    var body = oscillator(context, 'sine', 140);
    body.frequency.setValueAtTime(140, time);
    body.frequency.exponentialRampToValueAtTime(42, time + 0.18);
    var envelope = context.createGain();
    var end = percussiveEnvelope(envelope.gain, time, 0.003, 0.38, peak);
    body.connect(envelope); body.start(time); body.stop(end);
    route(kit, envelope, 1, 0.05, 0, 0);
    var click = noiseSource(kit, time, 0.03), clickFilter = filter(context, 'highpass', 1500), clickLevel = context.createGain();
    percussiveEnvelope(clickLevel.gain, time, 0.001, 0.02, peak * 0.25);
    click.connect(clickFilter); clickFilter.connect(clickLevel);
    route(kit, clickLevel, 1, 0, 0, 0);
  }
  function snare(kit, time, peak) {
    if (muted(kit, 'drums')) return;
    var context = kit.context;
    var rattle = noiseSource(kit, time, 0.25), band = filter(context, 'bandpass', 1900, 0.8), rattleLevel = context.createGain();
    percussiveEnvelope(rattleLevel.gain, time, 0.002, 0.17, peak);
    rattle.connect(band); band.connect(rattleLevel);
    route(kit, rattleLevel, 1, 0.3, 0, 0.08);
    var body = oscillator(context, 'triangle', 205);
    body.frequency.setValueAtTime(205, time);
    body.frequency.exponentialRampToValueAtTime(160, time + 0.09);
    var bodyLevel = context.createGain();
    var end = percussiveEnvelope(bodyLevel.gain, time, 0.002, 0.09, peak * 0.8);
    body.connect(bodyLevel); body.start(time); body.stop(end);
    route(kit, bodyLevel, 1, 0.2, 0, 0.08);
  }
  function hat(kit, time, peak, length, pan) {
    if (muted(kit, 'drums')) return;
    var context = kit.context;
    var source = noiseSource(kit, time, length + 0.02), high = filter(context, 'highpass', 7200), level = context.createGain();
    percussiveEnvelope(level.gain, time, 0.001, length, peak);
    source.connect(high); high.connect(level);
    route(kit, level, 1, 0.08, 0, pan);
  }
  // низкий барабан (тайко) и томы для сбивок
  function drum(kit, time, frequency, peak, decay, pan) {
    if (muted(kit, 'drums')) return;
    var context = kit.context;
    var body = oscillator(context, 'sine', frequency);
    body.frequency.setValueAtTime(frequency, time);
    body.frequency.exponentialRampToValueAtTime(frequency * 0.6, time + decay);
    var level = context.createGain();
    var end = percussiveEnvelope(level.gain, time, 0.003, decay, peak);
    body.connect(level); body.start(time); body.stop(end);
    route(kit, level, 1, 0.45, 0, pan);
    var skin = noiseSource(kit, time, 0.2), skinFilter = filter(context, 'lowpass', frequency * 5), skinLevel = context.createGain();
    percussiveEnvelope(skinLevel.gain, time, 0.002, 0.12, peak * 0.3);
    skin.connect(skinFilter); skinFilter.connect(skinLevel);
    route(kit, skinLevel, 1, 0.4, 0, pan);
  }
  // нарастающий шум перед новой частью
  function riser(kit, time, duration, peak) {
    if (muted(kit, 'riser')) return;
    var context = kit.context;
    var source = noiseSource(kit, time, duration), band = filter(context, 'bandpass', 400, 2.5), level = context.createGain();
    band.frequency.setValueAtTime(400, time);
    band.frequency.exponentialRampToValueAtTime(6000, time + duration);
    level.gain.setValueAtTime(0, time);
    level.gain.linearRampToValueAtTime(peak, time + duration * 0.95);
    level.gain.linearRampToValueAtTime(0, time + duration);
    source.connect(band); band.connect(level);
    route(kit, level, 1, 0.5, 0, 0);
  }

  // ---------------- тема «Застава» (общая) ----------------
  // Гармония на 16 тактов: часть A (Dm Bbmaj7 Gm A Dm F C A) и часть B (Bb F Gm Dm Bb C Asus4 A).
  // Подушка ведётся плавно (общие ноты остаются на месте), бас — отдельной нотой ниже.
  var CALM_CHORDS = [
    { bass: 38, pad: [57, 62, 65] }, { bass: 34, pad: [57, 62, 65] }, { bass: 31, pad: [55, 58, 62] }, { bass: 33, pad: [57, 61, 64] },
    { bass: 38, pad: [57, 62, 65] }, { bass: 29, pad: [57, 60, 65] }, { bass: 36, pad: [55, 60, 64] }, { bass: 33, pad: [57, 61, 64] },
    { bass: 34, pad: [58, 62, 65] }, { bass: 29, pad: [57, 60, 65] }, { bass: 31, pad: [55, 58, 62] }, { bass: 38, pad: [57, 62, 65] },
    { bass: 34, pad: [58, 62, 65] }, { bass: 36, pad: [55, 60, 64] }, { bass: 33, pad: [57, 62, 64] }, { bass: 33, pad: [57, 61, 64] }
  ];
  // мелодия: [такт, доля, нота, длительность в долях]
  var CALM_MELODY = [
    [0, 0, 69, 2], [0, 2, 74, 1], [0, 3, 76, 1],
    [1, 0, 77, 3], [1, 3, 76, 0.5], [1, 3.5, 74, 0.5],
    [2, 0, 74, 2], [2, 2, 70, 1], [2, 3, 72, 1],
    [3, 0, 73, 3], [3, 3, 69, 1],
    [4, 0, 69, 2], [4, 2, 74, 1], [4, 3, 77, 1],
    [5, 0, 81, 2], [5, 2, 79, 1], [5, 3, 77, 1],
    [6, 0, 76, 1.5], [6, 1.5, 79, 0.5], [6, 2, 76, 1], [6, 3, 72, 1],
    [7, 0, 76, 3.5],
    [8, 0, 74, 1], [8, 1, 77, 1], [8, 2, 82, 2],
    [9, 0, 81, 3], [9, 3, 79, 1],
    [10, 0, 77, 1.5], [10, 1.5, 74, 0.5], [10, 2, 79, 2],
    [11, 0, 77, 2], [11, 2, 76, 1], [11, 3, 74, 1],
    [12, 0, 74, 2], [12, 2, 77, 1], [12, 3, 82, 1],
    [13, 0, 79, 2], [13, 2, 81, 1], [13, 3, 79, 1],
    [14, 0, 74, 2], [14, 2, 76, 2],
    [15, 0, 73, 4]
  ];
  var CALM_ARP = [[0, 1, 2, 3, 2, 1, 2, 1], [3, 2, 1, 2, 0, 1, 2, 3]];

  var CALM = {
    name: 'calm', tempo: 76, bars: 32,
    echo: 0.75 * 60 / 76,                       // эхо на пунктирную восьмую
    scheduleBar: function (kit, bar, absoluteBar, time) {
      var beat = 60 / this.tempo, barLength = beat * 4;
      var chord = CALM_CHORDS[bar % 16], melodyPass = bar < 16;
      pad(kit, chord.pad, time, barLength + 0.05, { cutoff: 1150, peak: 0.032, attack: 1.1, release: 1.8, detune: 7, reverb: 0.45 });
      drone(kit, chord.bass, time, barLength, 0.13);
      // арпеджио вступает после двух тактов вступления; на проходе с мелодией тише
      if (absoluteBar >= 2) {
        var pattern = CALM_ARP[melodyPass ? 0 : 1];
        var tones = [chord.pad[0], chord.pad[1], chord.pad[2], chord.pad[0] + 12];
        for (var step = 0; step < 8; step++) {
          pluck(kit, tones[pattern[step]] + 12, time + step * beat / 2, {
            peak: vary(melodyPass ? 0.15 : 0.22, 0.25), decay: 0.55, cutoff: 2600, reverb: 0.35, echo: 0.3, pan: step % 2 ? 0.35 : -0.35
          });
        }
      }
      if (melodyPass) {
        CALM_MELODY.forEach(function (entry) {
          if (entry[0] !== bar) return;
          lead(kit, entry[2], time + entry[1] * beat, entry[3] * beat, {
            types: ['sine', 'triangle'], peak: 0.075, cutoff: 3200, attack: 0.07, release: 0.5, vibrato: 0.005, reverb: 0.5, echo: 0.18
          });
        });
      } else {
        // второй проход без мелодии: колокола на сильные доли и редкие удары низкого барабана
        bell(kit, chord.pad[2] + 12, time, 0.2, -0.2);
        if (bar % 2) bell(kit, chord.pad[1] + 12, time + 2.5 * beat, 0.14, 0.25);
        if (bar % 4 === 0) drum(kit, time, 70, 0.3, 0.9, 0);
      }
    }
  };

  // ---------------- тема «Контакт» (тактическая) ----------------
  // Гармония: часть A (Em Em C D Em Em F D) — F как фригийская ступень даёт напряжение;
  // часть B (Am Em C B Am C F B) — мажорный B тянет обратно в Em.
  var BATTLE_CHORDS = [
    { bass: 40, pad: [59, 64, 67] }, { bass: 40, pad: [59, 64, 67] }, { bass: 36, pad: [60, 64, 67] }, { bass: 38, pad: [57, 62, 66] },
    { bass: 40, pad: [59, 64, 67] }, { bass: 40, pad: [59, 64, 67] }, { bass: 41, pad: [57, 60, 65] }, { bass: 38, pad: [57, 62, 66] },
    { bass: 33, pad: [57, 60, 64] }, { bass: 40, pad: [59, 64, 67] }, { bass: 36, pad: [60, 64, 67] }, { bass: 35, pad: [59, 63, 66] },
    { bass: 33, pad: [57, 60, 64] }, { bass: 36, pad: [60, 64, 67] }, { bass: 41, pad: [57, 60, 65] }, { bass: 35, pad: [59, 63, 66] }
  ];
  var BATTLE_MELODY = [
    [0, 0, 76, 1.5], [0, 1.5, 71, 0.5], [0, 2, 76, 1], [0, 3, 78, 1],
    [1, 0, 79, 2], [1, 2, 78, 1], [1, 3, 76, 1],
    [2, 0, 79, 2], [2, 2, 76, 1], [2, 3, 72, 1],
    [3, 0, 74, 2], [3, 2, 78, 1], [3, 3, 81, 1],
    [4, 0, 79, 1.5], [4, 1.5, 78, 0.5], [4, 2, 76, 2],
    [5, 0, 71, 1], [5, 1, 76, 1], [5, 2, 79, 1], [5, 3, 83, 1],
    [6, 0, 81, 2], [6, 2, 79, 1], [6, 3, 77, 1],
    [7, 0, 78, 3], [7, 3, 74, 1],
    [8, 0, 81, 1.5], [8, 1.5, 76, 0.5], [8, 2, 81, 1], [8, 3, 83, 1],
    [9, 0, 79, 2], [9, 2, 76, 2],
    [10, 0, 76, 1], [10, 1, 79, 1], [10, 2, 84, 2],
    [11, 0, 83, 2], [11, 2, 75, 1], [11, 3, 78, 1],
    [12, 0, 76, 1], [12, 1, 81, 1], [12, 2, 84, 1], [12, 3, 83, 1],
    [13, 0, 79, 2], [13, 2, 76, 2],
    [14, 0, 77, 1], [14, 1, 81, 1], [14, 2, 84, 2],
    [15, 0, 83, 2], [15, 2, 75, 1], [15, 3, 78, 1]
  ];
  var BASS_PATTERN = [0, 0, 12, 0, 0, 7, 0, 12];   // смещения от основного тона по восьмым

  var BATTLE = {
    name: 'battle', tempo: 112, bars: 32,
    echo: 0.75 * 60 / 112,
    scheduleBar: function (kit, bar, absoluteBar, time) {
      var beat = 60 / this.tempo, sixteenth = beat / 4, barLength = beat * 4;
      var chord = BATTLE_CHORDS[bar % 16], leadPass = bar >= 16, half = bar % 16 >= 8;
      pad(kit, chord.pad, time, barLength + 0.02, { cutoff: 900, peak: 0.032, attack: 0.35, release: 0.7, detune: 9, reverb: 0.35 });
      for (var eighth = 0; eighth < 8; eighth++) {
        var accent = eighth === 0 || eighth === 3 || eighth === 6;
        pulseBass(kit, chord.bass + BASS_PATTERN[eighth], time + eighth * beat / 2, beat * 0.42, accent ? 0.15 : 0.1);
      }
      if (absoluteBar >= 2) {
        for (var step = 0; step < 16; step++) {
          var at = time + step * sixteenth;
          if (step === 0 || step === 6 || step === 8) kick(kit, at, step === 6 ? 0.33 : 0.45);
          if (step === 4 || step === 12) snare(kit, at, 0.4);
          if (step % 4 === 2) hat(kit, at, 0.16, 0.04, 0.25);
          else if (step % 2) hat(kit, at, 0.06, 0.025, -0.25);
        }
        if (bar % 2 === 0) drum(kit, time, 92, 0.32, 0.6, 0);
        if (bar % 4 === 3) drum(kit, time + 10 * sixteenth, 92, 0.22, 0.5, 0);
        // сбивка томами в конце каждой восьмёрки тактов
        if (bar % 8 === 7) [210, 175, 140, 110].forEach(function (frequency, index) { drum(kit, time + (12 + index) * sixteenth, frequency, 0.24, 0.28, 0.3 - index * 0.2); });
      }
      // пульс шестнадцатыми по звукам аккорда; на проходе с мелодией тише
      var tones = [chord.pad[0], chord.pad[1], chord.pad[2], chord.pad[1]];
      for (var pulse = 0; pulse < 16; pulse++) {
        pluck(kit, tones[pulse % 4] + 12, time + pulse * sixteenth, {
          type: 'square', peak: leadPass ? 0.06 : 0.1, decay: 0.12, cutoff: 1900, reverb: 0.15, echo: 0.12, pan: pulse % 2 ? 0.4 : -0.4
        });
      }
      if (!leadPass && half && absoluteBar >= 2) {
        stab(kit, chord.pad.map(function (note) { return note + 12; }), time, 0.14);
        stab(kit, chord.pad.map(function (note) { return note + 12; }), time + 6 * sixteenth, 0.1);
      }
      if (leadPass) {
        BATTLE_MELODY.forEach(function (entry) {
          if (entry[0] !== bar - 16) return;
          lead(kit, entry[2], time + entry[1] * beat, entry[3] * beat, {
            types: ['sawtooth', 'square'], peak: 0.08, cutoff: 2300, attack: 0.02, release: 0.25, vibrato: 0.004, vibratoRate: 5.6, reverb: 0.35, echo: 0.2
          });
        });
      }
      if (bar === 15 || bar === 31) riser(kit, time, barLength, 0.06);
    }
  };

  // ---------------- фоновые инструменты (тема «Тень») ----------------
  // глубокий гул: синус и чуть расстроенный треугольник, долгий подъём и спад, фильтр медленно «дышит»
  function deepDrone(kit, note, time, duration, peak) {
    if (muted(kit, 'bass')) return;
    var context = kit.context, frequency = midiFrequency(note);
    var envelope = context.createGain();
    envelope.gain.value = 0;
    var end = sustainEnvelope(envelope.gain, time, 3, Math.max(0, duration - 3), 3.5, peak);
    var lowpass = filter(context, 'lowpass', 260, 0.7);
    var breathe = oscillator(context, 'sine', 0.07), breatheDepth = context.createGain();
    breatheDepth.gain.value = 120;
    breathe.connect(breatheDepth); breatheDepth.connect(lowpass.frequency);
    [['sine', 0, 1], ['triangle', 7, 0.45], ['triangle', -9, 0.3]].forEach(function (voice) {
      var source = oscillator(context, voice[0], voice[0] === 'sine' ? frequency : frequency * 2, voice[1]);
      var level = context.createGain();
      level.gain.value = voice[2];
      source.connect(level); level.connect(lowpass);
      source.start(time); source.stop(end);
    });
    breathe.start(time); breathe.stop(end);
    lowpass.connect(envelope);
    route(kit, envelope, 1, 0.25, 0, 0);
  }
  // тёмный кластер: тихие синусы и треугольники с медленной атакой, без чёткой атаки; ноты разведены по панораме
  function shade(kit, notes, time, duration, peak) {
    if (muted(kit, 'pad')) return;
    var context = kit.context;
    notes.forEach(function (note, index) {
      var envelope = context.createGain();
      envelope.gain.value = 0;
      var end = sustainEnvelope(envelope.gain, time + index * 0.6, 4, Math.max(0, duration - 4 - index * 0.6), 4, peak);
      var lowpass = filter(context, 'lowpass', 900, 0.5);
      var wobble = oscillator(context, 'sine', 0.11 + index * 0.03), wobbleDepth = context.createGain();
      wobbleDepth.gain.value = midiFrequency(note) * 0.004;
      wobble.connect(wobbleDepth);
      ['triangle', 'sine'].forEach(function (type, voiceIndex) {
        var source = oscillator(context, type, midiFrequency(note), voiceIndex ? 5 : -5);
        wobbleDepth.connect(source.frequency);
        source.connect(lowpass);
        source.start(time); source.stop(end);
      });
      wobble.start(time); wobble.stop(end);
      lowpass.connect(envelope);
      route(kit, envelope, 0.7, 0.8, 0, (index - (notes.length - 1) / 2) * 0.5);
    });
  }
  // далёкий удар по металлу: негармонические призвуки, приглушён, почти весь в реверберации
  function metal(kit, note, time, peak, pan) {
    if (muted(kit, 'metal')) return;
    var context = kit.context, frequency = midiFrequency(note);
    var lowpass = filter(context, 'lowpass', 1800, 0.7);
    var envelope = context.createGain();
    envelope.gain.value = 1;
    [[1, 1, 2.6], [2.41, 0.5, 1.8], [3.87, 0.3, 1.2], [5.6, 0.18, 0.7], [7.2, 0.1, 0.4]].forEach(function (partial) {
      var voice = oscillator(context, 'sine', frequency * partial[0] * vary(1, 0.01));
      var level = context.createGain();
      var end = percussiveEnvelope(level.gain, time, 0.004, partial[2], peak * partial[1]);
      voice.connect(level); level.connect(lowpass);
      voice.start(time); voice.stop(end);
    });
    var click = noiseSource(kit, time, 0.06), clickBand = filter(context, 'bandpass', 1400, 3), clickLevel = context.createGain();
    percussiveEnvelope(clickLevel.gain, time, 0.002, 0.05, peak * 0.5);
    click.connect(clickBand); clickBand.connect(clickLevel); clickLevel.connect(lowpass);
    lowpass.connect(envelope);
    route(kit, envelope, 0.35, 1, 0.3, pan);
  }
  // «сонар»: короткий высокий синус с долгим эхом
  function ping(kit, note, time, peak, pan) {
    if (muted(kit, 'ping')) return;
    var context = kit.context;
    var voice = oscillator(context, 'sine', midiFrequency(note));
    var envelope = context.createGain();
    var end = percussiveEnvelope(envelope.gain, time, 0.01, 0.9, peak);
    voice.connect(envelope);
    voice.start(time); voice.stop(end);
    route(kit, envelope, 0.6, 0.6, 0.7, pan);
  }
  // ветер в шахтах: шум через узкую полосу, которая медленно ползёт вверх и вниз
  function draft(kit, time, duration, peak, from, to) {
    if (muted(kit, 'wind')) return;
    var context = kit.context;
    var source = context.createBufferSource();
    source.buffer = kit.noise; source.loop = true;
    var band = filter(context, 'bandpass', from, 6);
    band.frequency.setValueAtTime(from, time);
    band.frequency.exponentialRampToValueAtTime(to, time + duration * 0.55);
    band.frequency.exponentialRampToValueAtTime(from * 0.8, time + duration);
    var envelope = context.createGain();
    envelope.gain.value = 0;
    var end = sustainEnvelope(envelope.gain, time, duration * 0.4, duration * 0.2, duration * 0.4, peak);
    source.connect(band); band.connect(envelope);
    source.start(time, Math.random()); source.stop(end);
    route(kit, envelope, 0.6, 0.7, 0, Math.sin(time) * 0.6);
  }
  // стеклянный призвук: высокий синус с дрожанием громкости, еле слышный
  function glass(kit, note, time, duration, peak, pan) {
    if (muted(kit, 'glass')) return;
    var context = kit.context;
    var voice = oscillator(context, 'sine', midiFrequency(note));
    var tremolo = oscillator(context, 'sine', 5.3), tremoloDepth = context.createGain(), level = context.createGain();
    tremoloDepth.gain.value = 0.5; level.gain.value = 0.5;
    tremolo.connect(tremoloDepth); tremoloDepth.connect(level.gain);
    var envelope = context.createGain();
    envelope.gain.value = 0;
    var end = sustainEnvelope(envelope.gain, time, duration * 0.45, duration * 0.1, duration * 0.45, peak);
    voice.connect(level); level.connect(envelope);
    voice.start(time); tremolo.start(time); voice.stop(end); tremolo.stop(end);
    route(kit, envelope, 0.4, 0.9, 0.4, pan);
  }
  // глухой пульс (как сердце): два низких удара с падением высоты — «тук-тук»
  function heartbeat(kit, time, peak) {
    if (muted(kit, 'heart')) return;
    var context = kit.context;
    [[0, 1], [0.26, 0.7]].forEach(function (beat) {
      var at = time + beat[0];
      // синус даёт низ, треугольник октавой выше — чтобы удар был слышен и на маленьких колонках
      var lowpass = filter(context, 'lowpass', 320);
      var envelope = context.createGain();
      var end = percussiveEnvelope(envelope.gain, at, 0.012, 0.28, peak * beat[1]);
      [['sine', 1, 1], ['triangle', 2, 0.5]].forEach(function (voiceInfo) {
        var voice = oscillator(context, voiceInfo[0], 62 * voiceInfo[1]), level = context.createGain();
        voice.frequency.setValueAtTime(62 * voiceInfo[1], at);
        voice.frequency.exponentialRampToValueAtTime(38 * voiceInfo[1], at + 0.18);
        level.gain.value = voiceInfo[2];
        voice.connect(level); level.connect(lowpass);
        voice.start(at); voice.stop(end);
      });
      lowpass.connect(envelope);
      route(kit, envelope, 1, 0.15, 0, 0);
    });
  }
  // низкий гул, нарастающий к смене части
  function swell(kit, time, duration, peak) {
    if (muted(kit, 'wind')) return;
    var context = kit.context;
    var source = context.createBufferSource();
    source.buffer = kit.noise; source.loop = true;
    var lowpass = filter(context, 'lowpass', 90, 1.5);
    lowpass.frequency.setValueAtTime(90, time);
    lowpass.frequency.exponentialRampToValueAtTime(420, time + duration);
    var envelope = context.createGain();
    envelope.gain.setValueAtTime(0, time);
    envelope.gain.linearRampToValueAtTime(peak, time + duration * 0.92);
    envelope.gain.linearRampToValueAtTime(0, time + duration + 0.6);
    source.connect(lowpass); lowpass.connect(envelope);
    source.start(time, Math.random()); source.stop(time + duration + 0.7);
    route(kit, envelope, 1, 0.4, 0, 0);
  }

  // ---------------- тема «Тень» (тактическая, фон) ----------------
  // Фон для боя, как в UFO: без мелодии и ритма, 60 ударов в минуту, такт 4 с, 32 такта (128 с по кругу).
  // Каждые 4 такта — новый тёмный кластер над гулом ми (малая секунда, тритон, увеличенное трезвучие);
  // поверх — редкие далёкие удары по металлу, «сонар», ветер в шахтах, стеклянные призвуки.
  // Вариант «Контакт» (враг рядом или стрельба): тот же фон плюс глухой пульс, чаще удары и нарастание к смене части.
  var SHADE_BLOCKS = [
    { bass: 28, notes: [47, 52, 53] },        // E: си, ми, фа — малая секунда
    { bass: 28, notes: [47, 52, 55] },        // E: ми минор
    { bass: 24, notes: [48, 51, 55] },        // C: до минор
    { bass: 29, notes: [48, 53, 56] },        // F: фа минор (фригийская ступень)
    { bass: 28, notes: [46, 52, 55] },        // E: си-бемоль — тритон
    { bass: 28, notes: [50, 53, 58] },        // E: ре, фа, си-бемоль над ми
    { bass: 24, notes: [47, 51, 55] },        // C: си, ре-диез, соль — увеличенное
    { bass: 28, notes: [47, 52, 53] }
  ];
  // события по тактам: [такт, доля, вид, нота, громкость, панорама]
  var SHADE_EVENTS = [
    [1, 2.5, 'ping', 88, 0.1, 0.5], [2, 1, 'metal', 43, 0.48, -0.6], [3, 0, 'draft', 300, 0.14, 1100],
    [5, 3, 'metal', 40, 0.39, 0.7], [6, 1.5, 'glass', 83, 0.03, -0.4], [7, 2, 'ping', 91, 0.08, -0.5],
    [9, 0.5, 'metal', 46, 0.36, 0.3], [10, 2, 'draft', 220, 0.12, 900], [11, 3.5, 'metal', 41, 0.45, -0.7],
    [13, 1, 'glass', 84, 0.025, 0.5], [14, 2.5, 'ping', 86, 0.08, 0.3], [15, 0, 'swell', 0, 0.07, 0],
    [17, 2, 'metal', 44, 0.42, 0.6], [18, 0, 'draft', 260, 0.14, 1300], [19, 3, 'glass', 79, 0.03, -0.3],
    [21, 1.5, 'ping', 89, 0.09, -0.6], [22, 3, 'metal', 39, 0.48, -0.4], [24, 0, 'glass', 83, 0.025, 0.4],
    [25, 2.5, 'metal', 45, 0.36, 0.7], [26, 0, 'draft', 200, 0.12, 800], [27, 1, 'ping', 87, 0.08, 0.6],
    [29, 3, 'metal', 42, 0.45, -0.6], [30, 1.5, 'glass', 84, 0.027, -0.5], [31, 0, 'swell', 0, 0.07, 0]
  ];
  // дополнительные события варианта «Контакт»
  var CONTACT_EVENTS = [
    [0, 3, 'metal', 38, 0.36, 0.4], [4, 1.5, 'metal', 47, 0.3, -0.5], [7, 0, 'swell', 0, 0.084, 0], [8, 2.5, 'ping', 84, 0.1, -0.4],
    [12, 0.5, 'metal', 40, 0.39, 0.6], [16, 3, 'metal', 43, 0.33, -0.3], [20, 1, 'ping', 86, 0.1, 0.5], [23, 0, 'swell', 0, 0.084, 0],
    [24, 2.5, 'metal', 37, 0.39, -0.6], [28, 1, 'metal', 46, 0.3, 0.5]
  ];
  function shadeEvent(kit, entry, at, barLength) {
    var kind = entry[2];
    if (kind === 'metal') metal(kit, entry[3], at, entry[4], entry[5]);
    else if (kind === 'ping') ping(kit, entry[3], at, entry[4], entry[5]);
    else if (kind === 'glass') glass(kit, entry[3], at, barLength * 2, entry[4], entry[5]);
    else if (kind === 'draft') draft(kit, at, barLength * 2.5, entry[4], entry[3], entry[5]);
    else if (kind === 'swell') swell(kit, at, barLength, entry[4]);
  }
  function shadeTheme(name, contact) {
    return {
      name: name, tempo: 60, bars: 32,
      echo: 0.75,
      level: 1.4,              // общий уровень темы: фон тише общей темы примерно на 4 дБ, но не теряется под звуками боя
      scheduleBar: function (kit, bar, absoluteBar, time) {
        var beat = 60 / this.tempo, barLength = beat * 4;
        var block = SHADE_BLOCKS[Math.floor(bar / 4)];
        // гул и кластер — на 4 такта с перекрытием; при входе в тему с середины блока — сразу, на остаток блока
        if (bar % 4 === 0 || absoluteBar === 0) {
          var length = (4 - bar % 4) * barLength + 2;
          deepDrone(kit, block.bass + 12, time, length, contact ? 0.16 : 0.14);
          shade(kit, block.notes, time, length, contact ? 0.068 : 0.06);
        }
        SHADE_EVENTS.concat(contact ? CONTACT_EVENTS : []).forEach(function (entry) {
          if (entry[0] === bar) shadeEvent(kit, entry, time + entry[1] * beat, barLength);
        });
        // пульс: два «тук-тук» за такт (30 в минуту), в последнем такте блока — вдвое чаще
        if (contact) {
          var beats = bar % 4 === 3 ? [0, 1, 2, 3] : [0, 2];
          beats.forEach(function (at) { heartbeat(kit, time + at * beat, 0.3); });
        }
      }
    };
  }
  var SHADE = shadeTheme('shade', false), SHADE_CONTACT = shadeTheme('contact', true);

  // ---------------- набор «Высадка — Штурм — Возвращение» ----------------
  // Общая тональность ля минор у первых двух тем: при контакте музыка меняется, но остаётся той же «историей».
  // Записи мелодий: [такт, доля, нота, длительность в долях].

  // «Высадка»: 70 ударов, 32 такта (≈110 с). Плавная подушка над гулом, тихое остинато восьмыми (3+3+2),
  // фразы валторны на тактах 4–7 и 12–15; на втором проходе — длинная мелодия ниже, редкие удары литавры,
  // «сонар» и тиканье. Неаполитанский Bb перед доминантой и задержания sus4 держат напряжение.
  var LANDING_CHORDS = [
    { bass: 33, pad: [57, 60, 64] }, { bass: 33, pad: [59, 60, 64] }, { bass: 29, pad: [57, 60, 64] }, { bass: 29, pad: [57, 60, 65] },
    { bass: 26, pad: [57, 62, 65] }, { bass: 26, pad: [57, 62, 64] }, { bass: 28, pad: [57, 59, 64] }, { bass: 28, pad: [56, 59, 64] },
    { bass: 33, pad: [57, 60, 64] }, { bass: 31, pad: [55, 60, 64] }, { bass: 29, pad: [57, 60, 65] }, { bass: 31, pad: [55, 59, 62] },
    { bass: 26, pad: [57, 62, 65] }, { bass: 34, pad: [58, 62, 65] }, { bass: 28, pad: [57, 59, 64] }, { bass: 28, pad: [56, 59, 64] }
  ];
  var LANDING_CALLS = [
    [4, 0, 69, 3], [4, 3, 72, 1], [5, 0, 74, 2], [5, 2, 72, 2], [6, 0, 71, 3], [6, 3, 69, 1], [7, 0, 68, 4],
    [12, 0, 77, 2], [12, 2, 76, 1], [12, 3, 74, 1], [13, 0, 74, 3], [13, 3, 72, 1], [14, 0, 71, 2], [14, 2, 72, 1], [14, 3, 71, 1], [15, 0, 68, 4]
  ];
  var LANDING_LINE = [
    [0, 0, 64, 4], [1, 0, 67, 2], [1, 2, 69, 2], [2, 0, 72, 4], [3, 0, 71, 4], [4, 0, 69, 3], [4, 3, 72, 1], [5, 0, 74, 4],
    [6, 0, 76, 2], [6, 2, 74, 2], [7, 0, 71, 4], [8, 0, 69, 2], [8, 2, 72, 2], [9, 0, 76, 4], [10, 0, 77, 3], [10, 3, 76, 1],
    [11, 0, 74, 4], [12, 0, 74, 2], [12, 2, 77, 2], [13, 0, 74, 4], [14, 0, 71, 3], [14, 3, 72, 1], [15, 0, 68, 4]
  ];
  var OSTINATO = [0, 2, 1, 0, 2, 1, 2, 3];          // звуки аккорда по восьмым: 3+3+2
  var LANDING = {
    name: 'landing', tempo: 70, bars: 32, echo: 0.75 * 60 / 70, level: 1.2,
    scheduleBar: function (kit, bar, absoluteBar, time) {
      var beat = 60 / this.tempo, barLength = beat * 4;
      var chord = LANDING_CHORDS[bar % 16], second = bar >= 16;
      pad(kit, chord.pad, time, barLength + 0.08, { cutoff: 850, peak: 0.03, attack: 1.4, release: 2.2, detune: 8, reverb: 0.5 });
      deepDrone(kit, chord.bass + 12, time, barLength + 0.5, 0.12);
      if (absoluteBar >= 2) {
        var tones = [chord.pad[0] - 12, chord.pad[1] - 12, chord.pad[2] - 12, chord.pad[0]];
        for (var step = 0; step < 8; step++) {
          var accent = step === 0 || step === 3 || step === 6;
          pluck(kit, tones[OSTINATO[step]], time + step * beat / 2, {
            type: 'triangle', peak: vary(accent ? 0.13 : 0.08, 0.15), decay: 0.32, cutoff: 1100, reverb: 0.3, echo: 0.22, pan: step % 2 ? 0.25 : -0.25
          });
        }
      }
      if (!second) {
        LANDING_CALLS.forEach(function (entry) {
          if (entry[0] !== bar) return;
          lead(kit, entry[2], time + entry[1] * beat, entry[3] * beat, { types: ['triangle', 'sine'], peak: 0.06, cutoff: 1900, attack: 0.22, release: 0.9, vibrato: 0.004, reverb: 0.55, echo: 0.2 });
        });
        if (bar % 8 === 3) ping(kit, 88, time + 2 * beat, 0.07, 0.4);
      } else {
        LANDING_LINE.forEach(function (entry) {
          if (entry[0] !== bar - 16) return;
          lead(kit, entry[2] - 12, time + entry[1] * beat, entry[3] * beat, { types: ['sawtooth', 'triangle'], peak: 0.045, cutoff: 1200, attack: 0.3, release: 1.0, vibrato: 0.003, reverb: 0.5, echo: 0.15 });
        });
        if (bar % 2 === 0) drum(kit, time, 62, 0.22, 1.1, 0);
        for (var tick = 1; tick < 8; tick += 2) hat(kit, time + tick * beat / 2, 0.035, 0.02, 0.3);
        if (bar % 4 === 1) glass(kit, chord.pad[2] + 24, time + beat, barLength * 2, 0.02, -0.4);
      }
      if (bar === 15 || bar === 31) swell(kit, time, barLength, 0.06);
    }
  };

  // «Штурм»: 100 ударов (не так часто, как прежняя ритмичная), 32 такта. Бас восьмыми с акцентами 3+3+2,
  // бочка и малый барабан вполсилы (малый на третью долю), арпеджио восьмыми мягким треугольником.
  // Первый проход — короткие аккорды-удары, второй — мелодия перекличкой коротких фраз.
  var ASSAULT_CHORDS = [
    { bass: 33, pad: [57, 60, 64] }, { bass: 33, pad: [57, 60, 64] }, { bass: 29, pad: [57, 60, 65] }, { bass: 31, pad: [55, 59, 62] },
    { bass: 33, pad: [57, 60, 64] }, { bass: 33, pad: [57, 60, 64] }, { bass: 26, pad: [57, 62, 65] }, { bass: 28, pad: [56, 59, 64] },
    { bass: 29, pad: [57, 60, 65] }, { bass: 31, pad: [55, 59, 62] }, { bass: 33, pad: [57, 60, 64] }, { bass: 28, pad: [55, 60, 64] },
    { bass: 26, pad: [57, 62, 65] }, { bass: 29, pad: [57, 60, 65] }, { bass: 28, pad: [57, 59, 64] }, { bass: 28, pad: [56, 59, 64] }
  ];
  var ASSAULT_MELODY = [
    [0, 0, 76, 1], [0, 1, 74, 0.5], [0, 1.5, 72, 0.5], [0, 2, 71, 1], [0, 3, 72, 1], [1, 0, 69, 3],
    [2, 0, 72, 1], [2, 1, 74, 1], [2, 2, 76, 2], [3, 0, 74, 2], [3, 2, 71, 2],
    [4, 0, 76, 1], [4, 1, 77, 0.5], [4, 1.5, 76, 0.5], [4, 2, 74, 1], [4, 3, 72, 1], [5, 0, 76, 3],
    [6, 0, 77, 1.5], [6, 1.5, 76, 0.5], [6, 2, 74, 2], [7, 0, 71, 2], [7, 2, 68, 2],
    [8, 0, 72, 1], [8, 1, 74, 1], [8, 2, 77, 2], [9, 0, 79, 2], [9, 2, 74, 2],
    [10, 0, 76, 1.5], [10, 1.5, 72, 0.5], [10, 2, 69, 2], [11, 0, 72, 2], [11, 2, 76, 2],
    [12, 0, 77, 1], [12, 1, 76, 1], [12, 2, 74, 1], [12, 3, 72, 1], [13, 0, 72, 2], [13, 2, 77, 2],
    [14, 0, 76, 2], [14, 2, 74, 1], [14, 3, 71, 1], [15, 0, 68, 4]
  ];
  var ASSAULT_BASS = [0, 0, 12, 0, 0, 12, 7, 0];
  var ASSAULT = {
    name: 'assault', tempo: 100, bars: 32, echo: 0.75 * 60 / 100, level: 1.0,
    scheduleBar: function (kit, bar, absoluteBar, time) {
      var beat = 60 / this.tempo, sixteenth = beat / 4, barLength = beat * 4;
      var chord = ASSAULT_CHORDS[bar % 16], second = bar >= 16;
      pad(kit, chord.pad, time, barLength + 0.02, { cutoff: 1000, peak: 0.028, attack: 0.4, release: 0.8, detune: 8, reverb: 0.4 });
      for (var eighth = 0; eighth < 8; eighth++) {
        var accent = eighth === 0 || eighth === 3 || eighth === 6;
        pulseBass(kit, chord.bass + 12 + ASSAULT_BASS[eighth], time + eighth * beat / 2, beat * 0.4, accent ? 0.14 : 0.08);
      }
      if (absoluteBar >= 1) {
        for (var step = 0; step < 16; step++) {
          var at = time + step * sixteenth;
          if (step === 0 || step === 6 || step === 10) kick(kit, at, step === 0 ? 0.42 : 0.3);
          if (step === 8) snare(kit, at, 0.32);
          if (step === 14 && bar % 2) snare(kit, at, 0.1);
          if (step % 4 === 2) hat(kit, at, 0.09, 0.035, 0.25);
        }
        if (bar % 4 === 0) drum(kit, time, 80, 0.28, 0.7, 0);
        if (bar % 8 === 7) [190, 160, 130, 100].forEach(function (frequency, index) { drum(kit, time + (12 + index) * sixteenth, frequency, 0.2, 0.3, 0.3 - index * 0.2); });
      }
      var tones = [chord.pad[0], chord.pad[1], chord.pad[2], chord.pad[1]];
      for (var pulse = 0; pulse < 8; pulse++) {
        pluck(kit, tones[pulse % 4] + 12, time + pulse * beat / 2, { type: 'triangle', peak: second ? 0.06 : 0.09, decay: 0.22, cutoff: 1700, reverb: 0.25, echo: 0.2, pan: pulse % 2 ? 0.35 : -0.35 });
      }
      if (!second && absoluteBar >= 2 && bar % 2 === 1) {
        stab(kit, chord.pad.map(function (note) { return note + 12; }), time + 6 * sixteenth, 0.1);
        stab(kit, chord.pad.map(function (note) { return note + 12; }), time + 14 * sixteenth, 0.08);
      }
      if (second) {
        ASSAULT_MELODY.forEach(function (entry) {
          if (entry[0] !== bar - 16) return;
          lead(kit, entry[2], time + entry[1] * beat, entry[3] * beat, { types: ['sawtooth', 'triangle'], peak: 0.06, cutoff: 1800, attack: 0.03, release: 0.3, vibrato: 0.004, vibratoRate: 5.2, reverb: 0.4, echo: 0.22 });
        });
      }
      if (bar === 15 || bar === 31) riser(kit, time, barLength, 0.05);
    }
  };

  // «Возвращение»: 66 ударов, ре мажор, 32 такта. Тёплая подушка, бас, мелодия поднимается к верхней точке
  // на такте 12; второй проход без мелодии — фортепианное арпеджио и колокола, в конце задержание sus4 → A.
  var RETURN_CHORDS = [
    { bass: 38, pad: [62, 66, 69] }, { bass: 37, pad: [61, 64, 69] }, { bass: 35, pad: [62, 66, 71] }, { bass: 31, pad: [62, 67, 71] },
    { bass: 38, pad: [62, 66, 69] }, { bass: 33, pad: [61, 64, 69] }, { bass: 31, pad: [59, 62, 67] }, { bass: 33, pad: [62, 64, 69] },
    { bass: 31, pad: [62, 67, 71] }, { bass: 30, pad: [62, 66, 69] }, { bass: 28, pad: [59, 64, 67] }, { bass: 33, pad: [61, 64, 69] },
    { bass: 35, pad: [62, 66, 71] }, { bass: 31, pad: [62, 67, 71] }, { bass: 33, pad: [62, 64, 69] }, { bass: 33, pad: [61, 64, 69] }
  ];
  var RETURN_MELODY = [
    [0, 0, 74, 2], [0, 2, 76, 1], [0, 3, 78, 1], [1, 0, 76, 3], [1, 3, 73, 1],
    [2, 0, 74, 2], [2, 2, 78, 1], [2, 3, 81, 1], [3, 0, 79, 4],
    [4, 0, 78, 2], [4, 2, 76, 1], [4, 3, 74, 1], [5, 0, 76, 3], [5, 3, 69, 1],
    [6, 0, 71, 2], [6, 2, 74, 1], [6, 3, 76, 1], [7, 0, 76, 2], [7, 2, 73, 2],
    [8, 0, 74, 2], [8, 2, 79, 2], [9, 0, 78, 3], [9, 3, 74, 1],
    [10, 0, 76, 2], [10, 2, 79, 1], [10, 3, 83, 1], [11, 0, 81, 4],
    [12, 0, 83, 2], [12, 2, 81, 1], [12, 3, 78, 1], [13, 0, 79, 2], [13, 2, 83, 2],
    [14, 0, 81, 3], [14, 3, 78, 1], [15, 0, 76, 2], [15, 2, 73, 2]
  ];
  var RETURN_ARP = [0, 1, 2, 3, 2, 1, 3, 2];
  var RETURN = {
    name: 'return', tempo: 66, bars: 32, echo: 0.75 * 60 / 66, level: 0.95,
    scheduleBar: function (kit, bar, absoluteBar, time) {
      var beat = 60 / this.tempo, barLength = beat * 4;
      var chord = RETURN_CHORDS[bar % 16], second = bar >= 16;
      pad(kit, chord.pad, time, barLength + 0.08, { cutoff: 1400, peak: 0.034, attack: 1.2, release: 2.0, detune: 6, reverb: 0.5 });
      drone(kit, chord.bass, time, barLength, 0.12);
      var tones = [chord.pad[0], chord.pad[1], chord.pad[2], chord.pad[0] + 12];
      if (absoluteBar >= 1) {
        for (var step = 0; step < 8; step++) {
          pluck(kit, tones[RETURN_ARP[step]] + (second ? 12 : 0), time + step * beat / 2, {
            type: 'triangle', peak: vary(second ? 0.16 : 0.11, 0.2), decay: 0.9, cutoff: 2600, reverb: 0.45, echo: 0.25, pan: step % 2 ? 0.3 : -0.3
          });
        }
      }
      if (!second) {
        RETURN_MELODY.forEach(function (entry) {
          if (entry[0] !== bar) return;
          lead(kit, entry[2], time + entry[1] * beat, entry[3] * beat, { types: ['sine', 'triangle'], peak: 0.075, cutoff: 3000, attack: 0.12, release: 0.8, vibrato: 0.005, reverb: 0.55, echo: 0.2 });
        });
        if (bar % 4 === 3) bell(kit, chord.pad[2] + 12, time + 2 * beat, 0.12, 0.3);
      } else {
        bell(kit, chord.pad[2] + 12, time, 0.16, -0.2);
        if (bar % 2) bell(kit, chord.pad[1] + 24, time + 2.5 * beat, 0.1, 0.3);
        if (bar % 8 === 0) swell(kit, time, barLength * 2, 0.04);
      }
    }
  };

  var THEMES = { calm: CALM, battle: BATTLE, shade: SHADE, contact: SHADE_CONTACT, landing: LANDING, assault: ASSAULT, 'return': RETURN };


  // ---------------- воспроизведение в игре ----------------
  // Музыка звучит фрагментами: 30 с играет (последние 3 с затихает), затем 30 с тишины (настройка «Паузы в музыке»).
  // Следующий фрагмент темы продолжается с места, где закончился прошлый, — с начала ближайшей фразы в 4 такта.
  // Смена темы (началась или закончилась перестрелка) включает новую тему сразу, и во время паузы тоже.
  var LOOKAHEAD = 1.2;                            // насколько заранее планировать такты, секунды
  var FADE_OUT = 3;
  var timing = { play: 30, pause: 30 };
  var context = null, master = null, runs = [], mood = 'calm', timer = null;
  var resumeBar = { calm: 0, battle: 0, shade: 0, contact: 0, landing: 0, assault: 0, 'return': 0 };   // с какого такта продолжить тему
  var pauseUntil = 0, lastTheme = null;

  function createMaster(audioContext, destination) {
    var compressor = audioContext.createDynamicsCompressor();
    compressor.threshold.value = -16; compressor.knee.value = 8; compressor.ratio.value = 3.5;
    compressor.attack.value = 0.01; compressor.release.value = 0.25;
    var trim = audioContext.createGain();          // запас по уровню: музыка звучит вместе с эффектами
    trim.gain.value = 0.75;
    compressor.connect(trim); trim.connect(destination);
    return compressor;
  }

  // подключить к звуку игры: вызывается из Sound.start (после первого щелчка или клавиши)
  function attach(audioContext, destination) {
    if (context) return;
    context = audioContext;
    master = createMaster(context, destination);
    timer = setInterval(tick, 60);
    refresh();
  }

  // настроение → тема по набору (настройка «Боевая музыка», musicSet):
  //   0 — «Высадка» до контакта, «Штурм» при контакте; 1 — «Тень» и «Тень» с пульсом (фон, как в UFO);
  //   2 — «Тень» и прежняя ритмичная. Конец задания (debrief) — «Возвращение» в любом наборе.
  function themeFor(moodName) {
    var settings = window.Settings ? Settings.values : {};
    var set = settings.musicSet === undefined ? 0 : settings.musicSet;
    if (moodName === 'debrief') return 'return';
    if (moodName === 'tactical') return set === 0 ? 'landing' : 'shade';
    if (moodName === 'battle') return set === 0 ? 'assault' : set === 2 ? 'battle' : 'contact';
    return 'calm';
  }
  function wanted() {
    var settings = window.Settings ? Settings.values : {};
    if (settings.musicVolume === 0) return null;
    if (settings.musicTheme === 1 && mood !== 'debrief') return 'calm';
    if (settings.musicTheme === 2) return themeFor(mood === 'calm' ? 'tactical' : mood);
    if (mood === 'debrief') return themeFor(mood);
    return themeFor(mood);
  }
  function pauseSeconds() {
    var settings = window.Settings ? Settings.values : {};
    return settings.musicPause === undefined ? timing.pause : settings.musicPause;
  }
  function current() { return runs.filter(function (run) { return !run.stopping; })[0] || null; }

  function startRun(name) {
    var theme = THEMES[name];
    var gain = context.createGain();
    gain.connect(master);
    var startTime = context.currentTime + 0.1;
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(theme.level || 1, startTime + 2);
    var run = { theme: theme, gain: gain, kit: createKit(context, gain, theme.echo), bar: resumeBar[name], absoluteBar: 0,
      nextTime: startTime, stopping: false, endTime: name === 'return' ? Infinity : startTime + timing.play };   // «Возвращение» — без пауз
    runs.push(run);
    lastTheme = name;
    pauseUntil = 0;
  }
  function stopRun(run) {
    if (run.stopping) return;
    run.stopping = true;
    // продолжить потом с начала следующей фразы в 4 такта
    resumeBar[run.theme.name] = (Math.ceil(run.bar / 4) * 4) % run.theme.bars;
    var now = context.currentTime;
    run.gain.gain.cancelScheduledValues(now);
    run.gain.gain.setValueAtTime(run.gain.gain.value, now);
    run.gain.gain.linearRampToValueAtTime(0, now + FADE_OUT);
    setTimeout(function () {
      run.gain.disconnect();
      runs.splice(runs.indexOf(run), 1);
    }, (FADE_OUT + 3) * 1000);
  }
  function refresh() {
    if (!context) return;
    var name = wanted(), playing = current();
    if (playing && playing.theme.name === name) return;
    if (playing) stopRun(playing);
    // та же тема во время паузы ждёт конца паузы; другая тема или выход из выключенного состояния — сразу
    if (name && (playing || name !== lastTheme || context.currentTime >= pauseUntil)) startRun(name);
  }
  function tick() {
    var now = context.currentTime;
    var playing = current();
    if (playing && pauseSeconds() > 0 && now >= playing.endTime - FADE_OUT) {
      stopRun(playing);                            // фрагмент отзвучал: затихание и пауза
      pauseUntil = now + FADE_OUT + pauseSeconds();
      playing = null;
    }
    if (!playing && wanted() && pauseUntil && now >= pauseUntil) startRun(wanted());
    runs.forEach(function (run) {
      if (run.stopping) return;
      if (run.nextTime < now - 0.5) run.nextTime = now + 0.05;   // вкладка была в фоне: не догоняем пропущенное
      var barLength = 4 * 60 / run.theme.tempo;
      while (run.nextTime < now + LOOKAHEAD) {
        run.theme.scheduleBar(run.kit, run.bar, run.absoluteBar, run.nextTime);
        run.nextTime += barLength;
        run.bar = (run.bar + 1) % run.theme.bars;
        run.absoluteBar++;
      }
    });
  }

  function setMood(name) {
    if (['calm', 'tactical', 'battle', 'debrief'].indexOf(name) < 0 || name === mood) return;
    mood = name;
    refresh();
  }
  if (window.Settings) Settings.onChange(function (values, key) {
    if (!key || key === 'musicTheme' || key === 'musicVolume' || key === 'musicSet') refresh();
    if (key === 'musicPause' && context) {
      var playing = current();
      if (playing) playing.endTime = values.musicPause > 0 ? Math.max(playing.endTime, context.currentTime + FADE_OUT + 1) : Infinity;
      else if (values.musicPause === 0 || pauseUntil) pauseUntil = Math.min(pauseUntil || Infinity, context.currentTime + values.musicPause);
    }
  });

  // ---------------- рендер без звуковой карты ----------------
  function renderOffline(name, bars, sampleRate, solo) {
    var theme = THEMES[name], rate = sampleRate || 44100;
    var barLength = 4 * 60 / theme.tempo, seconds = bars * barLength + 4;
    var offline = new OfflineAudioContext(2, Math.ceil(seconds * rate), rate);
    var output = solo ? offline.destination : createMaster(offline, offline.destination);   // отдельный инструмент — без компрессора
    var level = offline.createGain();
    level.gain.value = solo ? 1 : theme.level || 1;
    level.connect(output);
    var kit = createKit(offline, level, theme.echo);
    kit.solo = solo || null;
    for (var bar = 0; bar < bars; bar++) theme.scheduleBar(kit, bar % theme.bars, bar, 0.05 + bar * barLength);
    return offline.startRendering();
  }

  return {
    attach: attach, setMood: setMood, renderOffline: renderOffline,
    get mood() { return mood; },
    get playing() { var run = context && current(); return run ? run.theme.name : null; },
    get pausedFor() { return context && !current() && pauseUntil ? Math.max(0, pauseUntil - context.currentTime) : 0; },
    setTiming: function (play, pause) { timing.play = play; timing.pause = pause; },   // для проверки
    themes: THEMES
  };
})();
