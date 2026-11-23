// Музыка, синтезированная в браузере (Web Audio), без файлов. Две темы:
//   calm   — «Застава»: общая, ре минор, 76 ударов в минуту, 32 такта (около 100 с по кругу);
//   battle — «Контакт»: тактическая, ми минор с фригийской II ступенью, 112 ударов в минуту, 32 такта (около 69 с).
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

  var THEMES = { calm: CALM, battle: BATTLE };

  // ---------------- воспроизведение в игре ----------------
  // Музыка звучит фрагментами: 30 с играет (последние 3 с затихает), затем 30 с тишины (настройка «Паузы в музыке»).
  // Следующий фрагмент темы продолжается с места, где закончился прошлый, — с начала ближайшей фразы в 4 такта.
  // Смена темы (началась или закончилась перестрелка) включает новую тему сразу, и во время паузы тоже.
  var LOOKAHEAD = 1.2;                            // насколько заранее планировать такты, секунды
  var FADE_OUT = 3;
  var timing = { play: 30, pause: 30 };
  var context = null, master = null, runs = [], mood = 'calm', timer = null;
  var resumeBar = { calm: 0, battle: 0 };         // с какого такта продолжить тему
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

  function wanted() {
    var settings = window.Settings ? Settings.values : {};
    if (settings.musicVolume === 0) return null;
    if (settings.musicTheme === 1) return 'calm';
    if (settings.musicTheme === 2) return 'battle';
    return mood;
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
    gain.gain.linearRampToValueAtTime(1, startTime + 2);
    var run = { theme: theme, gain: gain, kit: createKit(context, gain, theme.echo), bar: resumeBar[name], absoluteBar: 0,
      nextTime: startTime, stopping: false, endTime: startTime + timing.play };
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
    if (!THEMES[name] || name === mood) return;
    mood = name;
    refresh();
  }
  if (window.Settings) Settings.onChange(function (values, key) {
    if (!key || key === 'musicTheme' || key === 'musicVolume') refresh();
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
    var kit = createKit(offline, output, theme.echo);
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
