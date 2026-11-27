// Музыка, синтезированная в браузере (Web Audio), без файлов. Все темы — в стиле амбиент, без ударных установок.
//   calm    — «Застава»: общая, ре минор, 76 ударов в минуту, 32 такта (около 100 с по кругу);
//   dawn    — «Рассвет»: общая, светлая, до мажор с лидийской IV ступенью;
//   shade   — «Тень»: тактическая, фон без мелодии и ритма (как в UFO), 128 с по кругу; contact — она же с пульсом;
//   landing — «Высадка», assault — «Штурм»: тактическая и при контакте, ля минор;
//   gloom   — «Мрак»: мрачная, низкие кластеры и далёкие удары; gloomContact — с пульсом;
//   probe, hive, mine — «Зонд», «Улей», «Шахта»: фон с повторяющимися звуками (как в тактике UFO);
//            *Contact — их варианты при контакте: плотнее и резче;
//   impulse, alarm, knock — «Импульс», «Тревога», «Стук»: фон с резкими акцентами около 4 раз в секунду;
//   loss, weep — «Утрата», «Плач»: душераздирающие (конец задания с погибшими, или по выбору в настройках);
//   return  — «Возвращение»: конец задания.
// Настроение из game.js: calm — мирная обстановка, tactical — бой без контакта, battle — контакт или стрельба.
// У каждого настроения свой набор тем; темы сменяют друг друга по очереди после каждой паузы.
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
  // Общий баланс: гул (низкий гул, тёмные кластеры, бас) тише, ритмичные звуки (щелчки, «блипы», спиккато, удары,
  // «вомы», пульс) громче; ACCENT — насколько сильные доли в узорах громче слабых (уровень узора 0…1 в степени).
  var HUM_DEEP = 0.55, HUM_SHADE = 0.6, HUM_BASS = 0.75, RHYTHM_LEVEL = 1.35, METAL_LEVEL = 1.2, ACCENT_POWER = 1.7;
  function accented(level) { return Math.pow(level, ACCENT_POWER); }
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
    peak *= HUM_BASS;
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
    var end = percussiveEnvelope(envelope.gain, time, 0.004, options.decay, options.peak * RHYTHM_LEVEL);
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

  // аккорд-удар (как у духовых): три пилы, фильтр открыт в начале и быстро закрывается
  function stab(kit, notes, time, peak) {
    if (muted(kit, 'stab')) return;
    peak *= RHYTHM_LEVEL;
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

  // низкий барабан (тайко) и томы для сбивок
  function drum(kit, time, frequency, peak, decay, pan) {
    if (muted(kit, 'drums')) return;
    peak *= RHYTHM_LEVEL;
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
  // @theme-begin calm
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
        // второй проход без мелодии: колокола на сильные доли
        bell(kit, chord.pad[2] + 12, time, 0.2, -0.2);
        if (bar % 2) bell(kit, chord.pad[1] + 12, time + 2.5 * beat, 0.14, 0.25);
      }
    }
  };
  // @theme-end

  // ---------------- фоновые инструменты (тема «Тень») ----------------
  // глубокий гул: синус и чуть расстроенный треугольник, долгий подъём и спад, фильтр медленно «дышит»
  function deepDrone(kit, note, time, duration, peak) {
    if (muted(kit, 'bass')) return;
    peak *= HUM_DEEP;
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
    peak *= HUM_SHADE;
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
    peak *= METAL_LEVEL;
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
    peak *= RHYTHM_LEVEL;
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

  function shadeEvent(kit, entry, at, barLength) {
    var kind = entry[2];
    if (kind === 'metal') metal(kit, entry[3], at, entry[4], entry[5]);
    else if (kind === 'ping') ping(kit, entry[3], at, entry[4], entry[5]);
    else if (kind === 'glass') glass(kit, entry[3], at, barLength * 2, entry[4], entry[5]);
    else if (kind === 'draft') draft(kit, at, barLength * 2.5, entry[4], entry[3], entry[5]);
    else if (kind === 'swell') swell(kit, at, barLength, entry[4]);
  }
  // @theme-begin shade,contact
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
  // @theme-end
  // @theme-begin shade
  var SHADE = shadeTheme('shade', false);
  // @theme-end
  // @theme-begin contact
  var SHADE_CONTACT = shadeTheme('contact', true);
  // @theme-end

  // ---------------- набор «Высадка — Штурм — Возвращение» ----------------
  // Общая тональность ля минор у первых двух тем: при контакте музыка меняется, но остаётся той же «историей».
  // Записи мелодий: [такт, доля, нота, длительность в долях].

  // @theme-begin landing
  // «Высадка»: 70 ударов, 32 такта (≈110 с). Плавная подушка над гулом, тихое остинато восьмыми (3+3+2),
  // фразы валторны на тактах 4–7 и 12–15; на втором проходе — длинная мелодия ниже, редкий далёкий металл,
  // «сонар» и стеклянные призвуки. Неаполитанский Bb перед доминантой и задержания sus4 держат напряжение.
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
        if (bar % 8 === 2) metal(kit, 40, time + 1.5 * beat, 0.3, 0.5);
        if (bar % 4 === 1) glass(kit, chord.pad[2] + 24, time + beat, barLength * 2, 0.02, -0.4);
      }
      if (bar === 15 || bar === 31) swell(kit, time, barLength, 0.06);
    }
  };
  // @theme-end

  // струнные тремоло: пилы через фильтр, громкость дрожит с частотой rate
  function tremolo(kit, notes, time, duration, peak, rate) {
    if (muted(kit, 'pad')) return;
    var context = kit.context;
    var lowpass = filter(context, 'lowpass', 1300, 0.7);
    var shake = context.createGain(); shake.gain.value = 0.55;
    var wobble = oscillator(context, 'sine', rate), depth = context.createGain();
    depth.gain.value = 0.45;
    wobble.connect(depth); depth.connect(shake.gain);
    var envelope = context.createGain();
    envelope.gain.value = 0;
    var end = sustainEnvelope(envelope.gain, time, 1.5, Math.max(0, duration - 1.5), 2.5, peak);
    notes.forEach(function (note, index) {
      [-7, 7].forEach(function (cents) {
        var voice = oscillator(context, 'sawtooth', midiFrequency(note), cents + index * 3);
        voice.connect(lowpass);
        voice.start(time); voice.stop(end);
      });
    });
    wobble.start(time); wobble.stop(end);
    lowpass.connect(shake); shake.connect(envelope);
    route(kit, envelope, 1, 0.55, 0.1, 0);
  }
  // @theme-begin assault
  // «Штурм» (при контакте): фон, как «Тень» и «Высадка», без мерного ритма, но резче. 66 ударов, 32 такта (≈116 с).
  // Каждые 4 такта — новый диссонирующий кластер над гулом (малая секунда, тритон, Е с малой ноной) у струнных
  // тремоло; поверх — в неровных местах резкие удары (литавра, низкий аккорд, металл), короткие аккорды-уколы,
  // крещендо медных к смене блока, дробь литавры и нарастание шума к концу части, «сонар» и стеклянные призвуки.
  // Тональность ля минор — как у «Высадки», переход при контакте не рвёт музыку.
  var ASSAULT_BLOCKS = [
    { bass: 33, notes: [57, 58, 64] },        // A: ля, си-бемоль, ми — малая секунда
    { bass: 33, notes: [57, 60, 63] },        // A: ля, до, ми-бемоль — тритон
    { bass: 29, notes: [56, 60, 65] },        // F: соль-диез, до, фа
    { bass: 28, notes: [56, 59, 65] },        // E: соль-диез, си, фа — малая нона
    { bass: 33, notes: [57, 58, 64] },
    { bass: 26, notes: [57, 62, 63] },        // D: ля, ре, ми-бемоль
    { bass: 34, notes: [58, 62, 64] },        // Bb: си-бемоль, ре, ми — тритон
    { bass: 28, notes: [56, 59, 62, 65] }     // E7 с малой ноной — тянет обратно в ля
  ];
  // события: [такт, доля, вид, нота, громкость, панорама]
  var ASSAULT_EVENTS = [
    [0, 0, 'hit', 0, 0.42, 0], [0, 2.5, 'metal', 43, 0.36, -0.6], [1, 1, 'stab', 0, 0.1, 0.3], [1, 3, 'ping', 86, 0.08, 0.5],
    [2, 0, 'glass', 84, 0.028, -0.4], [2, 2, 'stab', 0, 0.09, -0.3], [3, 0, 'brass', 0, 0.05, 0],
    [4, 0, 'hit', 0, 0.42, 0], [4, 1.5, 'metal', 40, 0.4, 0.6], [5, 0.5, 'stab', 0, 0.09, 0.2], [5, 2.5, 'stab', 0, 0.08, -0.2],
    [6, 2, 'ping', 89, 0.08, -0.5], [6, 3, 'metal', 46, 0.32, 0.4], [7, 0, 'roll', 0, 0.22, 0],
    [8, 0, 'hit', 0, 0.42, 0], [9, 1, 'glass', 83, 0.028, 0.5], [9, 2.5, 'stab', 0, 0.09, 0.3], [10, 0, 'metal', 41, 0.4, 0.6],
    [10, 3, 'stab', 0, 0.08, -0.3], [11, 0, 'brass', 0, 0.05, 0],
    [12, 0, 'hit', 0, 0.42, 0], [12, 2, 'metal', 44, 0.36, -0.5], [13, 1.5, 'stab', 0, 0.09, 0.2], [14, 0, 'ping', 87, 0.08, 0.4],
    [14, 2, 'stab', 0, 0.08, -0.2], [15, 0, 'swell', 0, 0.07, 0], [15, 0, 'roll', 0, 0.24, 0],
    [16, 0, 'hit', 0, 0.44, 0], [16, 3, 'metal', 39, 0.4, 0.5], [17, 2, 'stab', 0, 0.09, -0.3], [18, 0.5, 'glass', 79, 0.03, -0.3],
    [18, 2.5, 'stab', 0, 0.08, 0.3], [19, 0, 'brass', 0, 0.05, 0],
    [20, 0, 'hit', 0, 0.42, 0], [21, 1, 'metal', 45, 0.36, -0.6], [21, 3, 'stab', 0, 0.09, 0.2], [22, 1.5, 'ping', 90, 0.08, 0.5],
    [23, 0, 'roll', 0, 0.22, 0],
    [24, 0, 'hit', 0, 0.42, 0], [24, 2, 'stab', 0, 0.09, -0.2], [25, 1, 'metal', 42, 0.4, 0.6], [26, 0, 'glass', 84, 0.028, 0.4],
    [26, 2.5, 'stab', 0, 0.08, -0.3], [27, 0, 'brass', 0, 0.05, 0],
    [28, 0, 'hit', 0, 0.44, 0], [28, 1.5, 'metal', 47, 0.32, -0.4], [29, 2, 'stab', 0, 0.09, 0.3], [30, 0, 'ping', 86, 0.08, -0.5],
    [30, 3, 'metal', 40, 0.4, 0.5], [31, 0, 'swell', 0, 0.07, 0], [31, 0, 'roll', 0, 0.26, 0]
  ];
  // медные крещендо: низкий аккорд нарастает весь такт, фильтр открывается, в конце — резкий обрыв
  function brassSwell(kit, notes, time, duration, peak) {
    if (muted(kit, 'stab')) return;
    var context = kit.context;
    var lowpass = filter(context, 'lowpass', 300, 1.2);
    lowpass.frequency.setValueAtTime(300, time);
    lowpass.frequency.exponentialRampToValueAtTime(2200, time + duration);
    var envelope = context.createGain();
    envelope.gain.setValueAtTime(0, time);
    envelope.gain.linearRampToValueAtTime(peak, time + duration);
    envelope.gain.linearRampToValueAtTime(0, time + duration + 0.12);
    notes.forEach(function (note) {
      [-6, 6].forEach(function (cents) {
        var voice = oscillator(context, 'sawtooth', midiFrequency(note), cents);
        voice.connect(lowpass);
        voice.start(time); voice.stop(time + duration + 0.2);
      });
    });
    lowpass.connect(envelope);
    route(kit, envelope, 1, 0.4, 0, 0);
  }
  // дробь литавры: удары чаще и громче к концу
  function timpaniRoll(kit, time, duration, peak) {
    var count = 14;
    for (var hit = 0; hit < count; hit++) {
      var fraction = hit / count;
      drum(kit, time + duration * Math.sqrt(fraction), 64, peak * (0.25 + 0.75 * fraction), 0.5, 0);
    }
  }
  function assaultEvent(kit, entry, at, barLength, block) {
    var kind = entry[2];
    if (kind === 'hit') {
      drum(kit, at, 58, entry[4], 1.4, 0);
      stab(kit, block.notes.map(function (note) { return note - 12; }), at, 0.12);
      metal(kit, 38, at + 0.02, entry[4] * 0.7, 0);
    } else if (kind === 'stab') stab(kit, block.notes.map(function (note) { return note + 12; }), at, entry[4]);
    else if (kind === 'brass') brassSwell(kit, block.notes.map(function (note) { return note - 12; }), at, barLength, entry[4]);
    else if (kind === 'roll') timpaniRoll(kit, at, barLength, entry[4]);
    else if (kind === 'metal') metal(kit, entry[3], at, entry[4], entry[5]);
    else if (kind === 'ping') ping(kit, entry[3], at, entry[4], entry[5]);
    else if (kind === 'glass') glass(kit, entry[3], at, barLength * 2, entry[4], entry[5]);
    else if (kind === 'swell') swell(kit, at, barLength, entry[4]);
  }
  var ASSAULT = {
    name: 'assault', tempo: 66, bars: 32, echo: 0.75, level: 1.3,
    scheduleBar: function (kit, bar, absoluteBar, time) {
      var beat = 60 / this.tempo, barLength = beat * 4;
      var block = ASSAULT_BLOCKS[Math.floor(bar / 4)];
      // гул, кластер и тремоло — на 4 такта с перекрытием; при входе с середины блока — сразу, на остаток блока
      if (bar % 4 === 0 || absoluteBar === 0) {
        var length = (4 - bar % 4) * barLength + 2;
        deepDrone(kit, block.bass + 12, time, length, 0.16);
        shade(kit, block.notes, time, length, 0.05);
        tremolo(kit, block.notes.map(function (note) { return note + 12; }), time, length, 0.022, 7 + (bar % 8 ? 1.5 : 0));
      }
      ASSAULT_EVENTS.forEach(function (entry) {
        if (entry[0] === bar) assaultEvent(kit, entry, time + entry[1] * beat, barLength, block);
      });
    }
  };
  // @theme-end

  // @theme-begin return
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
  // @theme-end

  // ---------------- инструменты для новых фоновых тем ----------------
  // мягкий «блип»: синус и треугольник октавой выше, быстрый спад, долгое эхо — повторяющиеся звуки, как в UFO
  function blip(kit, note, time, peak, pan, decay) {
    if (muted(kit, 'pluck')) return;
    peak *= RHYTHM_LEVEL;
    var context = kit.context, frequency = midiFrequency(note);
    var envelope = context.createGain();
    var end = percussiveEnvelope(envelope.gain, time, 0.006, decay || 0.5, peak);
    var lowpass = filter(context, 'lowpass', 2400, 0.7);
    [['sine', 1, 1], ['triangle', 2, 0.25]].forEach(function (voiceInfo) {
      var voice = oscillator(context, voiceInfo[0], frequency * voiceInfo[1]), level = context.createGain();
      level.gain.value = voiceInfo[2];
      voice.connect(level); level.connect(lowpass);
      voice.start(time); voice.stop(end);
    });
    lowpass.connect(envelope);
    route(kit, envelope, 0.7, 0.5, 0.6, pan);
  }
  // сухой щелчок механизма: очень короткий шум через узкую полосу
  function clack(kit, time, peak, pan, frequency) {
    if (muted(kit, 'tick')) return;
    peak *= RHYTHM_LEVEL;
    var context = kit.context;
    var source = noiseSource(kit, time, 0.03), band = filter(context, 'bandpass', frequency || 4200, 5), level = context.createGain();
    percussiveEnvelope(level.gain, time, 0.001, 0.025, peak);
    source.connect(band); band.connect(level);
    route(kit, level, 0.8, 0.3, 0.35, pan);
  }
  // низкий «вом»: синус и пила через фильтр, который открывается и закрывается за время ноты
  function throb(kit, note, time, duration, peak) {
    if (muted(kit, 'bass')) return;
    peak *= RHYTHM_LEVEL;
    var context = kit.context, frequency = midiFrequency(note);
    var lowpass = filter(context, 'lowpass', 120, 3);
    lowpass.frequency.setValueAtTime(120, time);
    lowpass.frequency.exponentialRampToValueAtTime(520, time + duration * 0.35);
    lowpass.frequency.exponentialRampToValueAtTime(110, time + duration);
    var envelope = context.createGain();
    envelope.gain.value = 0;
    var end = sustainEnvelope(envelope.gain, time, duration * 0.25, duration * 0.35, duration * 0.4, peak);
    [['sine', 0, 1], ['sawtooth', 5, 0.35]].forEach(function (voiceInfo) {
      var voice = oscillator(context, voiceInfo[0], frequency, voiceInfo[1]), level = context.createGain();
      level.gain.value = voiceInfo[2];
      voice.connect(level); level.connect(lowpass);
      voice.start(time); voice.stop(end);
    });
    lowpass.connect(envelope);
    route(kit, envelope, 1, 0.2, 0, 0);
  }

  // @theme-begin gloom,gloomContact
  // ---------------- «Мрак» (мрачная) ----------------
  // 48 ударов, такт 5 с, 32 такта (160 с). Очень низкий гул, медленные кластеры с тритоном и малой секундой,
  // глухой мотив «рога» в нижнем регистре (до — ре-бемоль — соль), далёкий металл, ветер, редкий стеклянный призвук.
  // Гул тихий; поверх него — редкие громкие удары в неровных местах (GLOOM_STRIKES, раз в 2–3 такта, 10–15 с):
  // низкий удар с медным аккордом, резкий аккорд-удар, диссонирующие колокола, рубленый высокий кластер с металлом.
  // Вариант при контакте — тот же фон и глухой пульс.
  var GLOOM_BLOCKS = [
    { bass: 24, notes: [43, 44, 48] },        // C: соль, ля-бемоль, до
    { bass: 24, notes: [42, 46, 49] },        // C: фа-диез, си-бемоль, ре-бемоль — тритон над басом
    { bass: 22, notes: [41, 44, 49] },        // Bb
    { bass: 25, notes: [44, 47, 50] },        // Db: уменьшённое
    { bass: 24, notes: [43, 44, 48] },
    { bass: 20, notes: [39, 44, 47] },        // Ab
    { bass: 23, notes: [42, 47, 50] },        // B: си, ре, фа-диез над си
    { bass: 24, notes: [43, 46, 49, 50] }
  ];
  var GLOOM_HORN = [[0, 0, 48, 2], [0, 2, 49, 2], [1, 0, 43, 4]];      // [такт от начала фразы, доля, нота, длительность]
  var GLOOM_EVENTS = [
    [1, 1, 'metal', 33, 0.4, -0.5], [3, 0, 'draft', 120, 0.13, 480], [5, 2.5, 'metal', 31, 0.42, 0.6], [6, 1, 'glass', 76, 0.02, -0.3],
    [9, 0.5, 'metal', 35, 0.36, 0.4], [11, 0, 'draft', 100, 0.12, 420], [13, 3, 'metal', 30, 0.45, -0.6], [15, 0, 'swell', 0, 0.07, 0],
    [17, 2, 'metal', 34, 0.38, 0.5], [19, 0, 'draft', 130, 0.13, 520], [21, 1.5, 'glass', 74, 0.02, 0.4], [22, 3, 'metal', 32, 0.42, -0.4],
    [25, 0.5, 'metal', 36, 0.36, 0.6], [27, 0, 'draft', 110, 0.12, 460], [29, 2, 'metal', 31, 0.44, -0.5], [31, 0, 'swell', 0, 0.07, 0]
  ];
  // [такт, доля, вид]: boom — низкий удар и медный аккорд кластера; stab — резкий аккорд-удар октавой выше;
  // bell — два колокола через малую секунду; shriek — рубленый высокий кластер и удар по металлу
  var GLOOM_STRIKES = [
    [0, 0, 'boom'], [2, 2.5, 'stab'], [5, 1, 'bell'], [7, 3, 'boom'], [10, 0.5, 'shriek'], [12, 0, 'boom'], [14, 2, 'bell'],
    [17, 1.5, 'stab'], [20, 0, 'boom'], [22, 3, 'shriek'], [25, 1, 'bell'], [28, 0, 'boom'], [30, 2.5, 'stab']
  ];
  function gloomStrike(kit, kind, at, block) {
    if (kind === 'boom') {
      drum(kit, at, 44, 0.6, 1.8, 0);
      stab(kit, block.notes.map(function (note) { return note + 12; }), at, 0.075);
    } else if (kind === 'stab') {
      stab(kit, block.notes.map(function (note) { return note + 24; }), at, 0.06);
      drum(kit, at, 62, 0.32, 0.6, 0.3);
    } else if (kind === 'bell') {
      bell(kit, block.notes[0] + 36, at, 0.22, -0.4);
      bell(kit, block.notes[0] + 37, at + 0.05, 0.18, 0.4);
    } else if (kind === 'shriek') {
      chop(kit, block.notes.map(function (note) { return note + 36; }), at, 0.06, 0.2);
      metal(kit, block.notes[1] + 12, at, 0.7, -0.3);
    }
  }
  function gloomTheme(name, contact) {
    return {
      name: name, tempo: 48, bars: 32, echo: 1.25, level: 1.3,
      scheduleBar: function (kit, bar, absoluteBar, time) {
        var beat = 60 / this.tempo, barLength = beat * 4;
        var block = GLOOM_BLOCKS[Math.floor(bar / 4)];
        if (bar % 4 === 0 || absoluteBar === 0) {
          var length = (4 - bar % 4) * barLength + 2;
          deepDrone(kit, block.bass + 12, time, length, 0.1);            // с HUM_DEEP — втрое тише прежнего
          deepDrone(kit, block.bass + 6, time + 1, length, 0.031);         // тритон под гулом, еле слышно
          shade(kit, block.notes, time, length, 0.05);
        }
        // мотив «рога» в тактах 2–3 каждых восьми
        if (bar % 8 === 2 || bar % 8 === 3) GLOOM_HORN.forEach(function (entry) {
          if (entry[0] !== bar % 8 - 2) return;
          lead(kit, entry[2] + (bar >= 16 ? -12 : 0), time + entry[1] * beat, entry[3] * beat, { types: ['sawtooth', 'triangle'], peak: 0.04, cutoff: 650, attack: 0.6, release: 1.6, vibrato: 0.002, reverb: 0.7, echo: 0.2 });
        });
        GLOOM_EVENTS.forEach(function (entry) { if (entry[0] === bar) shadeEvent(kit, entry, time + entry[1] * beat, barLength); });
        GLOOM_STRIKES.forEach(function (entry) { if (entry[0] === bar) gloomStrike(kit, entry[2], time + entry[1] * beat, block); });
        if (contact) { heartbeat(kit, time, 0.3); heartbeat(kit, time + 2 * beat, bar % 4 === 3 ? 0.36 : 0.26); }
      }
    };
  }
  // @theme-end
  // @theme-begin gloom
  var GLOOM = gloomTheme('gloom', false);
  // @theme-end
  // @theme-begin gloomContact
  var GLOOM_CONTACT = gloomTheme('gloomContact', true);
  // @theme-end

  // @theme-begin dawn
  // ---------------- «Рассвет» (светлая) ----------------
  // 62 удара, 32 такта (≈124 с). До мажор с лидийским фа-диезом: широкая светлая подушка, мягкий бас,
  // редкие ноты «фортепиано» в неровных местах (без мерного пульса), колокола, стеклянное мерцание;
  // мелодия из пентатоники в тактах 4–7 и 20–23 — лёгкая, с паузами.
  var DAWN_CHORDS = [
    { bass: 36, pad: [55, 60, 64, 67] }, { bass: 36, pad: [54, 59, 64, 67] }, { bass: 33, pad: [55, 60, 64, 69] }, { bass: 31, pad: [55, 59, 62, 67] },
    { bass: 29, pad: [57, 60, 64, 67] }, { bass: 29, pad: [57, 62, 64, 69] }, { bass: 31, pad: [55, 59, 62, 69] }, { bass: 36, pad: [55, 60, 62, 67] },
    { bass: 33, pad: [55, 60, 64, 69] }, { bass: 28, pad: [55, 59, 64, 67] }, { bass: 29, pad: [57, 60, 64, 69] }, { bass: 38, pad: [57, 62, 66, 69] },
    { bass: 36, pad: [55, 60, 64, 67] }, { bass: 29, pad: [57, 60, 64, 67] }, { bass: 31, pad: [55, 60, 62, 67] }, { bass: 31, pad: [55, 59, 62, 67] }
  ];
  var DAWN_MELODY = [
    [0, 0, 76, 2], [0, 2.5, 79, 1.5], [1, 0, 81, 3], [2, 0, 79, 1.5], [2, 1.5, 76, 0.5], [2, 2, 74, 2], [3, 0, 76, 4],
  ];
  // ноты «фортепиано»: [доля, номер звука аккорда (0..3), октава] — в каждом такте по своему узору
  var DAWN_NOTES = [
    [[0.5, 3, 1], [2.25, 1, 1]], [[1, 2, 1], [3.5, 0, 2]], [[0, 1, 1], [1.75, 3, 1], [3, 2, 1]], [[2.5, 0, 2]],
    [[0.75, 2, 1], [2, 3, 1]], [[1.5, 1, 1], [3.25, 3, 1]], [[0, 3, 1], [2.75, 1, 2]], [[1, 0, 2], [2.5, 2, 1]]
  ];
  var DAWN = {
    name: 'dawn', tempo: 62, bars: 32, echo: 0.75 * 60 / 62, level: 1.2,
    scheduleBar: function (kit, bar, absoluteBar, time) {
      var beat = 60 / this.tempo, barLength = beat * 4;
      var chord = DAWN_CHORDS[bar % 16];
      pad(kit, chord.pad, time, barLength + 0.1, { cutoff: 1900, peak: 0.024, attack: 1.6, release: 2.4, detune: 6, reverb: 0.6 });
      drone(kit, chord.bass, time, barLength, 0.1);
      if (absoluteBar >= 1) DAWN_NOTES[bar % 8].forEach(function (entry) {
        pluck(kit, chord.pad[entry[1]] + 12 * entry[2], time + entry[0] * beat, { type: 'triangle', peak: vary(0.13, 0.25), decay: 1.4, cutoff: 3200, reverb: 0.55, echo: 0.35, pan: entry[1] % 2 ? 0.35 : -0.35 });
      });
      var phrase = bar % 16 - 4;
      if (phrase >= 0 && phrase < 4 && (bar < 8 || (bar >= 16 && bar < 24))) DAWN_MELODY.forEach(function (entry) {
        if (entry[0] !== phrase) return;
        lead(kit, entry[2] + (bar >= 16 ? 5 : 0), time + entry[1] * beat, entry[3] * beat, { types: ['sine', 'triangle'], peak: 0.065, cutoff: 3600, attack: 0.15, release: 1.2, vibrato: 0.004, reverb: 0.65, echo: 0.3 });
      });
      if (bar % 4 === 0) bell(kit, chord.pad[3] + 12, time + beat, 0.12, 0.3);
      if (bar % 8 === 6) glass(kit, chord.pad[2] + 24, time, barLength * 2, 0.022, -0.4);
      if (bar % 16 === 15) swell(kit, time, barLength, 0.035);
    }
  };
  // @theme-end

  // @theme-begin probe,probeContact,hive,hiveContact,mine,mineContact
  // ---------------- фон с повторяющимися звуками (как в тактике UFO) ----------------
  // Блоки по 8 тактов: основной тон баса и тёмный кластер. Над ними — короткий узор, который повторяется каждый такт
  // (меняется только высота от блока к блоку), как механическое «дыхание» чужого корабля. Вариант при контакте
  // плотнее: добавляются низкие «вомы», металл и пульс.
  // «Зонд»: 72 удара. Узор из восьми «блипов» по восьмым (ми, ми октавой выше, фа, ...), долгое эхо делает из него сетку.
  var PROBE_BLOCKS = [{ root: 28, notes: [47, 52, 53] }, { root: 24, notes: [48, 51, 55] }, { root: 29, notes: [48, 53, 56] }, { root: 28, notes: [46, 52, 55] }];
  var PROBE_PATTERN = [[0, 0, 0.11], [1, 12, 0.06], [2, 1, 0.09], [3, 12, 0.05], [4, 0, 0.1], [5, 7, 0.06], [6, 1, 0.08], [7, 10, 0.05]];
  // «Улей»: 80 ударов. Низкий «вом» на два тона через полутон раз в две доли; поверх — спиккато по шестнадцатым
  // (в 8 раз чаще «вомов») с акцентами в группах 3+3+2 и щелчками на сильных.
  var HIVE_BLOCKS = [{ root: 33, notes: [57, 58, 64] }, { root: 33, notes: [57, 60, 63] }, { root: 29, notes: [56, 60, 65] }, { root: 28, notes: [56, 59, 65] }];
  var HIVE_TICKS = [0, 3, 6, 8, 11, 14];
  // «Шахта»: 90 ударов. Два удара по металлу в каждом такте (на 1 и на «и» третьей доли), мотив из трёх звуков через такт.
  var MINE_BLOCKS = [{ root: 26, notes: [50, 53, 56] }, { root: 26, notes: [50, 51, 57] }, { root: 22, notes: [49, 53, 58] }, { root: 21, notes: [49, 52, 56] }];
  var MINE_MOTIF = [[1, 36, 0.09], [1.5, 39, 0.07], [3, 34, 0.08]];
  function loopTheme(name, kind, contact) {
    var settings = { probe: { tempo: 72, blocks: PROBE_BLOCKS }, hive: { tempo: 80, blocks: HIVE_BLOCKS }, mine: { tempo: 90, blocks: MINE_BLOCKS } }[kind];
    return {
      name: name, tempo: settings.tempo, bars: 32, echo: kind === 'probe' ? 0.75 * 60 / 72 : kind === 'hive' ? 0.5 * 60 / 80 : 1.5 * 60 / 90, level: 1.25,
      scheduleBar: function (kit, bar, absoluteBar, time) {
        var beat = 60 / this.tempo, barLength = beat * 4;
        var block = settings.blocks[Math.floor(bar / 8)];
        if (bar % 8 === 0 || absoluteBar === 0) {
          var length = (8 - bar % 8) * barLength + 2;
          // «Зонд» и «Улей» — гул ещё тише остальных
          deepDrone(kit, block.root + 12, time, length, kind === 'mine' ? 0.14 : 0.08);
          shade(kit, block.notes, time, length, (contact ? 0.06 : 0.05) * (kind === 'mine' ? 1 : 0.6));
        }
        var lift = contact ? 1.3 : 1;
        if (kind === 'probe') {
          PROBE_PATTERN.forEach(function (step) {
            blip(kit, block.root + 24 + step[1], time + step[0] * beat / 2, 0.12 * accented(step[2] / 0.11) * lift, step[0] % 2 ? 0.45 : -0.45, 0.45);
          });
          if (bar % 2 === 1) ping(kit, 88 + (bar % 8 === 7 ? 3 : 0), time + 2.5 * beat, 0.07, 0.5);
          if (contact) { throb(kit, block.root + 12, time, beat * 1.5, 0.13); throb(kit, block.root + 12, time + 2 * beat, beat * 1.5, 0.11); }
        } else if (kind === 'hive') {
          // главные переходы — «вомы» раз в две доли; поверх — ритмичный узор в 8 раз чаще, по шестнадцатым:
          // отрывистые ноты кластера (спиккато), сильные — в группах 3+3+2 (HIVE_TICKS), с первой — самой громкой
          for (var step = 0; step < 16; step++) {
            var strong = HIVE_TICKS.indexOf(step) >= 0, level = step === 0 || step === 8 ? 1 : strong ? 0.75 : 0.3;
            snap(kit, block.notes[step % 3] + (strong ? 0 : 12), time + step * beat / 4, 0.085 * accented(level) * lift, step % 2 ? 0.35 : -0.35, strong ? 0.75 : 0.3);
            if (strong) clack(kit, time + step * beat / 4, 0.08 * lift, step % 2 ? 0.4 : -0.4, 3800);
          }
          throb(kit, block.root + 12, time, beat * 2, 0.12 * lift);
          throb(kit, block.root + 13, time + 2 * beat, beat * 2, 0.11 * lift);
          if (bar % 4 === 2) glass(kit, block.notes[2] + 24, time + beat, barLength * 2, 0.02, 0.4);
          if (contact) heartbeat(kit, time + 3 * beat, 0.24);
        } else {
          metal(kit, block.root + 12, time, 0.3 * lift, -0.3);
          metal(kit, block.root + 17, time + 2.5 * beat, 0.15 * lift, 0.3);
          if (bar % 2 === 0) MINE_MOTIF.forEach(function (entry) { blip(kit, block.root + entry[1], time + entry[0] * beat, entry[2] * lift, 0.2, 0.7); });
          if (bar % 8 === 4) draft(kit, time, barLength * 3, 0.11, 180, 700);
          if (contact) { throb(kit, block.root + 12, time + beat, beat, 0.1); throb(kit, block.root + 12, time + 3 * beat, beat, 0.1); if (bar % 2) ping(kit, 86, time + 1.5 * beat, 0.08, -0.5); }
        }
        if (bar % 8 === 7) swell(kit, time, barLength, contact ? 0.08 : 0.06);
      }
    };
  }
  // @theme-end
  // @theme-begin probe
  var PROBE = loopTheme('probe', 'probe', false);
  // @theme-end
  // @theme-begin probeContact
  var PROBE_CONTACT = loopTheme('probeContact', 'probe', true);
  // @theme-end
  // @theme-begin hive
  var HIVE = loopTheme('hive', 'hive', false);
  // @theme-end
  // @theme-begin hiveContact
  var HIVE_CONTACT = loopTheme('hiveContact', 'hive', true);
  // @theme-end
  // @theme-begin mine
  var MINE = loopTheme('mine', 'mine', false);
  // @theme-end
  // @theme-begin mineContact
  var MINE_CONTACT = loopTheme('mineContact', 'mine', true);
  // @theme-end

  // ---------------- инструменты для тем с резкими акцентами ----------------
  // резкий короткий удар, как струнные «спиккато» или щипок медью: пила и квадрат, фильтр открыт на долю секунды,
  // к атаке — щелчок шума. bright — насколько ярко (0..1)
  function snap(kit, note, time, peak, pan, bright) {
    if (muted(kit, 'pluck')) return;
    peak *= RHYTHM_LEVEL;
    var context = kit.context, frequency = midiFrequency(note), open = 900 + 4200 * (bright === undefined ? 0.6 : bright);
    var lowpass = filter(context, 'lowpass', open, 2.2);
    lowpass.frequency.setValueAtTime(open, time);
    lowpass.frequency.exponentialRampToValueAtTime(320, time + 0.1);
    var envelope = context.createGain();
    var end = percussiveEnvelope(envelope.gain, time, 0.002, 0.13, peak);
    [['sawtooth', -6], ['square', 7]].forEach(function (voiceInfo) {
      var voice = oscillator(context, voiceInfo[0], frequency, voiceInfo[1]);
      voice.connect(lowpass); voice.start(time); voice.stop(end);
    });
    lowpass.connect(envelope);
    route(kit, envelope, 1, 0.25, 0.08, pan);
    var click = noiseSource(kit, time, 0.02), band = filter(context, 'highpass', 2500, 0.7), clickLevel = context.createGain();
    percussiveEnvelope(clickLevel.gain, time, 0.001, 0.012, peak * 0.5);
    click.connect(band); band.connect(clickLevel);
    route(kit, clickLevel, 1, 0.1, 0, pan);
  }
  // рубленый аккорд: созвучие из пил, громкость открыта только на короткие доли — резкие «вспышки» по сетке
  function chop(kit, notes, time, peak, length) {
    if (muted(kit, 'pad')) return;
    peak *= RHYTHM_LEVEL;
    var context = kit.context;
    var lowpass = filter(context, 'lowpass', 2600, 1.4);
    lowpass.frequency.setValueAtTime(2600, time);
    lowpass.frequency.exponentialRampToValueAtTime(700, time + (length || 0.12));
    var envelope = context.createGain();
    var end = percussiveEnvelope(envelope.gain, time, 0.003, length || 0.12, peak);
    notes.forEach(function (note, index) {
      [-9, 9].forEach(function (cents) {
        var voice = oscillator(context, 'sawtooth', midiFrequency(note), cents + index * 2);
        voice.connect(lowpass); voice.start(time); voice.stop(end);
      });
    });
    lowpass.connect(envelope);
    route(kit, envelope, 1, 0.35, 0.12, 0);
  }
  // «плач»: голос, который скользит от ноты к ноте (портаменто), с широким вибрато — как скрипка или эрху на надрыве.
  // phrase — [[доля от начала, нота, длительность в долях], ...]
  function wail(kit, phrase, time, beat, options) {
    if (muted(kit, 'lead')) return;
    var context = kit.context;
    var first = phrase[0], last = phrase[phrase.length - 1];
    var start = time + first[0] * beat, finish = time + (last[0] + last[2]) * beat;
    var lowpass = filter(context, 'lowpass', options.cutoff || 2800, 1.1);
    var envelope = context.createGain();
    envelope.gain.value = 0;
    envelope.gain.setValueAtTime(0, start);
    envelope.gain.linearRampToValueAtTime(options.peak, start + 0.35);
    phrase.forEach(function (entry) {                    // каждая нота чуть «вздыхает» громкостью
      var at = time + entry[0] * beat;
      if (at > start + 0.4) { envelope.gain.setTargetAtTime(options.peak * 0.7, at - 0.05, 0.03); envelope.gain.setTargetAtTime(options.peak, at + 0.05, 0.12); }
    });
    envelope.gain.setTargetAtTime(0, finish - 0.2, 0.5);
    var end = finish + 2;
    var vibrato = oscillator(context, 'sine', options.vibratoRate || 5.6), vibratoDepth = context.createGain();
    vibratoDepth.gain.setValueAtTime(0, start);
    vibratoDepth.gain.linearRampToValueAtTime(midiFrequency(first[1]) * (options.vibrato || 0.012), start + 0.8);
    vibrato.connect(vibratoDepth);
    [['sawtooth', -5, 1], ['sawtooth', 6, 0.6], ['triangle', 0, 0.5]].forEach(function (voiceInfo) {
      var voice = oscillator(context, voiceInfo[0], midiFrequency(first[1]), voiceInfo[1]), level = context.createGain();
      level.gain.value = voiceInfo[2];
      phrase.forEach(function (entry, index) {
        if (!index) return;
        var at = time + entry[0] * beat;
        voice.frequency.setValueAtTime(midiFrequency(phrase[index - 1][1]), at - 0.14);
        voice.frequency.exponentialRampToValueAtTime(midiFrequency(entry[1]), at);       // скольжение к ноте
      });
      vibratoDepth.connect(voice.frequency);
      voice.connect(level); level.connect(lowpass);
      voice.start(start); voice.stop(end);
    });
    vibrato.start(start); vibrato.stop(end);
    lowpass.connect(envelope);
    route(kit, envelope, 1, options.reverb || 0.7, options.echo || 0.25, options.pan || 0);
  }
  // хор на «а»: пилы через две полосы (форманты гласной), медленный подъём
  function choir(kit, notes, time, duration, peak) {
    if (muted(kit, 'pad')) return;
    var context = kit.context;
    var envelope = context.createGain();
    envelope.gain.value = 0;
    var end = sustainEnvelope(envelope.gain, time, Math.min(2, duration * 0.4), Math.max(0, duration - 2), 2.5, peak);
    [[750, 6, 1], [1150, 7, 0.6], [2600, 8, 0.25]].forEach(function (formant) {
      var band = filter(context, 'bandpass', formant[0], formant[1]), level = context.createGain();
      level.gain.value = formant[2] * 3;
      notes.forEach(function (note, index) {
        [-10, 10].forEach(function (cents) {
          var voice = oscillator(context, 'sawtooth', midiFrequency(note), cents + index * 4);
          voice.connect(band); voice.start(time); voice.stop(end);
        });
      });
      band.connect(level); level.connect(envelope);
    });
    route(kit, envelope, 0.8, 0.8, 0.15, 0);
  }

  // ---------------- темы с резкими акцентами (амбиент, около 4 ударов в секунду) ----------------
  // Сетка — восьмые при 120 ударах в минуту (или шестнадцатые при 60): удар каждые 0,25 с. Сильные удары в группах
  // 3+3+2, слабые — тише; под сеткой — тёмный гул и созвучия, как в остальных фоновых темах.
  // @theme-begin impulse
  // «Импульс»: ми фригийский, спиккато по сетке (основной тон, октава, малая секунда), удары по металлу на смене блока.
  var IMPULSE_BLOCKS = [{ root: 28, notes: [52, 53, 59] }, { root: 28, notes: [52, 55, 58] }, { root: 24, notes: [51, 55, 60] }, { root: 29, notes: [53, 56, 60] }];
  var IMPULSE_STEPS = [[0, 0, 1], [1, 12, 0.35], [2, 1, 0.45], [3, 0, 0.9], [4, 12, 0.35], [5, 7, 0.45], [6, 0, 0.85], [7, 13, 0.4]];
  var IMPULSE = {
    name: 'impulse', tempo: 120, bars: 32, echo: 0.375, level: 1.2,
    scheduleBar: function (kit, bar, absoluteBar, time) {
      var beat = 60 / this.tempo, barLength = beat * 4, block = IMPULSE_BLOCKS[Math.floor(bar / 8)];
      if (bar % 8 === 0 || absoluteBar === 0) {
        var length = (8 - bar % 8) * barLength + 2;
        deepDrone(kit, block.root + 12, time, length, 0.15);
        shade(kit, block.notes, time, length, 0.05);
      }
      var climb = bar % 8 >= 4 ? 1.25 : 1;                       // вторая половина блока — громче и ярче
      IMPULSE_STEPS.forEach(function (step) {
        snap(kit, block.root + 24 + step[1], time + step[0] * beat / 2, 0.11 * accented(step[2]) * climb, step[0] % 2 ? 0.3 : -0.3, step[2] > 0.8 ? 0.85 : 0.35);
      });
      if (bar % 8 === 0) metal(kit, block.root + 12, time, 0.4, -0.4);
      if (bar % 4 === 3) metal(kit, block.root + 19, time + 3.5 * beat, 0.3, 0.5);
      if (bar % 8 === 7) swell(kit, time, barLength, 0.08);
    }
  };
  // @theme-end
  // @theme-begin alarm
  // «Тревога»: высокое диссонирующее созвучие рубится по сетке; низкие «вомы» на сильные доли, щелчки на акценты,
  // раз в 8 тактов — вой сирены (скольжение голоса вверх и вниз).
  var ALARM_BLOCKS = [{ root: 33, notes: [69, 70, 76] }, { root: 33, notes: [68, 71, 75] }, { root: 31, notes: [67, 70, 73] }, { root: 32, notes: [68, 71, 74] }];
  var ALARM_ACCENTS = [1, 0.3, 0.5, 0.9, 0.3, 0.5, 0.85, 0.4];
  var ALARM = {
    name: 'alarm', tempo: 120, bars: 32, echo: 0.25, level: 1.15,
    scheduleBar: function (kit, bar, absoluteBar, time) {
      var beat = 60 / this.tempo, barLength = beat * 4, block = ALARM_BLOCKS[Math.floor(bar / 8)];
      if (bar % 8 === 0 || absoluteBar === 0) {
        var length = (8 - bar % 8) * barLength + 2;
        deepDrone(kit, block.root, time, length, 0.14);
        shade(kit, block.notes.map(function (note) { return note - 24; }), time, length, 0.05);
      }
      ALARM_ACCENTS.forEach(function (weight, step) {
        chop(kit, block.notes, time + step * beat / 2, 0.035 * accented(weight), weight > 0.8 ? 0.14 : 0.07);
        if (weight > 0.8) clack(kit, time + step * beat / 2, 0.08, step % 2 ? 0.4 : -0.4, 3200);
      });
      throb(kit, block.root + 12, time, beat * 1.5, 0.12);
      throb(kit, block.root + 12, time + 2 * beat, beat * 1.5, 0.1);
      if (bar % 8 === 4) wail(kit, [[0, block.notes[0], 2], [2, block.notes[0] + 7, 2], [4, block.notes[0], 3]], time, beat, { peak: 0.035, cutoff: 1800, vibrato: 0.004, reverb: 0.6 });
      if (bar % 8 === 7) swell(kit, time, barLength, 0.07);
    }
  };
  // @theme-end
  // @theme-begin knock
  // «Стук»: 60 ударов, шестнадцатые — низкие отрывистые удары баса (спиккато), сильные на 1 и «и» второй доли,
  // высокий «пинг» на слабой доле, стеклянные призвуки над гулом.
  var KNOCK_BLOCKS = [{ root: 26, notes: [50, 53, 57] }, { root: 26, notes: [50, 51, 57] }, { root: 22, notes: [49, 53, 58] }, { root: 24, notes: [51, 55, 58] }];
  var KNOCK_STEPS = [1, 0.3, 0.45, 0.3, 0.5, 0.3, 0.9, 0.35, 0.45, 0.3, 0.8, 0.3, 0.5, 0.3, 0.45, 0.6];
  var KNOCK = {
    name: 'knock', tempo: 60, bars: 24, echo: 0.75, level: 1.2,
    scheduleBar: function (kit, bar, absoluteBar, time) {
      var beat = 60 / this.tempo, barLength = beat * 4, block = KNOCK_BLOCKS[Math.floor(bar / 6)];
      if (bar % 6 === 0 || absoluteBar === 0) {
        var length = (6 - bar % 6) * barLength + 2;
        deepDrone(kit, block.root + 12, time, length, 0.15);
        shade(kit, block.notes, time, length, 0.055);
      }
      KNOCK_STEPS.forEach(function (weight, step) {
        var note = block.root + 12 + (step % 8 === 6 ? 12 : step % 4 === 2 ? 7 : 0);
        snap(kit, note, time + step * beat / 4, 0.12 * accented(weight), 0, weight > 0.7 ? 0.6 : 0.15);
      });
      ping(kit, 84 + (bar % 2 ? 3 : 0), time + 1.75 * beat, 0.06, 0.5);
      if (bar % 3 === 1) glass(kit, block.notes[2] + 24, time + beat, barLength * 2, 0.02, -0.4);
      if (bar % 6 === 5) swell(kit, time, barLength, 0.07);
    }
  };
  // @theme-end
  // ---------------- музыка конца задания по оценке ----------------
  // «Чествование» — ХОРОШО и ОТЛИЧНО, «Возвращение» — УДОВЛЕТВОРИТЕЛЬНО, «Марш» — ПЛОХО (game.js, musicMood).
  // @theme-begin triumph
  // «Чествование»: торжественно, до мажор, 84 удара, 32 такта (≈91 с). Фанфара медных (две трубы терцией во втором
  // проходе), аккорды медных на 1 и 3 доли, литавры на сильных долях и дробь в конце каждой фразы, тарелка на начале
  // фраз, струнная подушка и бас; во втором проходе — колокола.
  var TRIUMPH_CHORDS = [
    { bass: 36, pad: [60, 64, 67] }, { bass: 36, pad: [60, 64, 67] }, { bass: 41, pad: [60, 65, 69] }, { bass: 36, pad: [60, 64, 67] },
    { bass: 45, pad: [60, 64, 69] }, { bass: 41, pad: [60, 65, 69] }, { bass: 43, pad: [59, 62, 67] }, { bass: 43, pad: [59, 62, 65] },
    { bass: 36, pad: [60, 64, 67] }, { bass: 40, pad: [59, 64, 67] }, { bass: 41, pad: [60, 65, 69] }, { bass: 36, pad: [60, 64, 67] },
    { bass: 41, pad: [60, 65, 69] }, { bass: 43, pad: [59, 62, 67] }, { bass: 36, pad: [60, 64, 67] }, { bass: 36, pad: [60, 64, 67] }
  ];
  // [такт, доля, нота, длительность в долях]
  var TRIUMPH_FANFARE = [
    [0, 0, 67, 0.75], [0, 0.75, 67, 0.25], [0, 1, 72, 1], [0, 2, 76, 1], [0, 3, 79, 1], [1, 0, 79, 3], [1, 3, 76, 1],
    [2, 0, 77, 1.5], [2, 1.5, 76, 0.5], [2, 2, 74, 1], [2, 3, 72, 1], [3, 0, 76, 4],
    [4, 0, 76, 0.75], [4, 0.75, 76, 0.25], [4, 1, 79, 1], [4, 2, 84, 2], [5, 0, 81, 2], [5, 2, 77, 2],
    [6, 0, 79, 1], [6, 1, 77, 1], [6, 2, 76, 1], [6, 3, 74, 1], [7, 0, 74, 2], [7, 2, 71, 2],
    [8, 0, 79, 2], [8, 2, 76, 2], [9, 0, 79, 2], [9, 2, 83, 2], [10, 0, 81, 3], [10, 3, 77, 1], [11, 0, 76, 4],
    [12, 0, 77, 1], [12, 1, 81, 1], [12, 2, 84, 2], [13, 0, 83, 2], [13, 2, 79, 2], [14, 0, 84, 0.75], [14, 0.75, 84, 0.25], [14, 1, 84, 3], [15, 0, 79, 1], [15, 1, 84, 3]
  ];
  // тарелка: шум через верхний фильтр с долгим спадом
  function cymbal(kit, time, peak) {
    if (muted(kit, 'drums')) return;
    var context = kit.context;
    var source = noiseSource(kit, time, 3), highpass = filter(context, 'highpass', 5200, 0.6), level = context.createGain();
    percussiveEnvelope(level.gain, time, 0.004, 2.6, peak);
    source.connect(highpass); highpass.connect(level);
    route(kit, level, 0.8, 0.5, 0, 0.2);
  }
  var TRIUMPH = {
    name: 'triumph', tempo: 84, bars: 32, echo: 0.75 * 60 / 84, level: 1.1, continuous: true,
    scheduleBar: function (kit, bar, absoluteBar, time) {
      var beat = 60 / this.tempo, barLength = beat * 4, phrase = bar % 16, chord = TRIUMPH_CHORDS[phrase], second = bar >= 16;
      pad(kit, chord.pad, time, barLength, { cutoff: 2200, attack: 0.3, release: 1.2, peak: 0.028, detune: 8, reverb: 0.5 });
      drone(kit, chord.bass, time, barLength, 0.14);
      // медные: аккорд на 1 и 3 доли, в конце фразы — триоль к следующему такту
      stab(kit, chord.pad.map(function (note) { return note + 12; }), time, 0.055);
      stab(kit, chord.pad.map(function (note) { return note + 12; }), time + 2 * beat, 0.04);
      if (phrase % 4 === 3) [3, 3 + 1 / 3, 3 + 2 / 3].forEach(function (at, index) { stab(kit, chord.pad.map(function (note) { return note + 12; }), time + at * beat, 0.035 + index * 0.01); });
      // литавры: основной тон на 1, квинта на 3; дробь в последней доле фразы
      var timpani = midiFrequency(chord.bass);
      drum(kit, time, timpani, 0.45, 0.9, -0.2);
      drum(kit, time + 2 * beat, timpani * 1.5, 0.3, 0.7, -0.2);
      if (phrase % 8 === 7) for (var hit = 0; hit < 8; hit++) drum(kit, time + (3 + hit / 8) * beat, timpani, 0.12 + hit * 0.035, 0.25, -0.2);
      if (phrase % 8 === 0) cymbal(kit, time, 0.16);
      // фанфара: труба, во втором проходе — вторая труба терцией ниже
      TRIUMPH_FANFARE.forEach(function (entry) {
        if (entry[0] !== phrase) return;
        var options = { types: ['sawtooth', 'square'], peak: 0.05, cutoff: 2600, attack: 0.03, release: 0.25, vibrato: 0.004, reverb: 0.45, echo: 0.1 };
        lead(kit, entry[2], time + entry[1] * beat, entry[3] * beat * 0.95, options);
        if (second) lead(kit, entry[2] - (entry[2] % 12 === 4 || entry[2] % 12 === 9 || entry[2] % 12 === 11 ? 3 : 4), time + entry[1] * beat, entry[3] * beat * 0.95,
          { types: ['sawtooth', 'triangle'], peak: 0.03, cutoff: 2000, attack: 0.03, release: 0.25, vibrato: 0.004, reverb: 0.45, echo: 0.1, pan: 0.3 });
      });
      if (second) bell(kit, chord.pad[2] + 12, time, 0.13, -0.3);
      if (second && phrase % 2) bell(kit, chord.pad[0] + 24, time + 2 * beat, 0.08, 0.3);
    }
  };
  // @theme-end
  // @theme-begin march
  // «Марш»: ровный, без торжества и без печали, ля минор, 108 ударов, 32 такта (≈71 с). Малый барабан на каждую долю
  // (2 и 4 — громче, перед третьей долей через такт — дробь), большой барабан на 1 и 3, бас «раз — квинта»,
  // аккорды на слабые доли; валторна ведёт простую мелодию во второй половине каждых восьми тактов.
  var MARCH_CHORDS = [
    { bass: 45, notes: [57, 60, 64] }, { bass: 45, notes: [57, 60, 64] }, { bass: 50, notes: [57, 62, 65] }, { bass: 40, notes: [56, 59, 64] },
    { bass: 45, notes: [57, 60, 64] }, { bass: 45, notes: [57, 60, 64] }, { bass: 50, notes: [57, 62, 65] }, { bass: 40, notes: [56, 59, 64] },
    { bass: 41, notes: [57, 60, 65] }, { bass: 43, notes: [59, 62, 67] }, { bass: 48, notes: [55, 60, 64] }, { bass: 45, notes: [57, 60, 64] },
    { bass: 50, notes: [57, 62, 65] }, { bass: 40, notes: [56, 59, 64] }, { bass: 45, notes: [57, 60, 64] }, { bass: 45, notes: [57, 60, 64] }
  ];
  var MARCH_TUNE = [
    [4, 0, 69, 1], [4, 1, 72, 1], [4, 2, 76, 1.5], [4, 3.5, 74, 0.5], [5, 0, 72, 1], [5, 1, 71, 1], [5, 2, 69, 2],
    [6, 0, 74, 1], [6, 1, 72, 1], [6, 2, 71, 1], [6, 3, 69, 1], [7, 0, 68, 2], [7, 2, 64, 2],
    [12, 0, 74, 1], [12, 1, 77, 1], [12, 2, 76, 1], [12, 3, 74, 1], [13, 0, 71, 1.5], [13, 1.5, 68, 0.5], [13, 2, 64, 2],
    [14, 0, 72, 1], [14, 1, 71, 1], [14, 2, 69, 2], [15, 0, 69, 3]
  ];
  // малый барабан: шум через полосовой фильтр и короткий тон корпуса
  function snare(kit, time, peak, pan) {
    if (muted(kit, 'drums')) return;
    var context = kit.context;
    peak *= RHYTHM_LEVEL;
    var source = noiseSource(kit, time, 0.25), band = filter(context, 'bandpass', 2200, 0.8), level = context.createGain();
    percussiveEnvelope(level.gain, time, 0.002, 0.16, peak);
    source.connect(band); band.connect(level);
    route(kit, level, 1, 0.25, 0, pan || 0);
    var body = oscillator(context, 'triangle', 185), bodyLevel = context.createGain();
    var end = percussiveEnvelope(bodyLevel.gain, time, 0.002, 0.07, peak * 0.6);
    body.connect(bodyLevel); body.start(time); body.stop(end);
    route(kit, bodyLevel, 1, 0.2, 0, pan || 0);
  }
  var MARCH = {
    name: 'march', tempo: 108, bars: 32, echo: 0.5 * 60 / 108, level: 1.5, continuous: true,
    scheduleBar: function (kit, bar, absoluteBar, time) {
      var beat = 60 / this.tempo, barLength = beat * 4, phrase = bar % 16, chord = MARCH_CHORDS[phrase];
      drum(kit, time, 55, 0.4, 0.45, 0);
      drum(kit, time + 2 * beat, 55, 0.32, 0.45, 0);
      [0, 1, 2, 3].forEach(function (step) { snare(kit, time + step * beat, step % 2 ? 0.16 : 0.08, 0.15); });
      if (bar % 2 === 1) [1.5, 1.75].forEach(function (at) { snare(kit, time + at * beat, 0.06, 0.15); });
      if (phrase % 8 === 7) [3.25, 3.5, 3.75].forEach(function (at, index) { snare(kit, time + at * beat, 0.07 + index * 0.03, 0.15); });
      pluck(kit, chord.bass - 12, time, { type: 'triangle', peak: 0.16, decay: 0.45, cutoff: 900, reverb: 0.15, echo: 0, pan: 0 });
      pluck(kit, chord.bass - 5, time + 2 * beat, { type: 'triangle', peak: 0.13, decay: 0.45, cutoff: 900, reverb: 0.15, echo: 0, pan: 0 });
      pad(kit, chord.notes, time, barLength, { cutoff: 1400, attack: 0.2, release: 0.8, peak: 0.016, detune: 7, reverb: 0.35 });
      stab(kit, chord.notes, time + beat, 0.04);
      stab(kit, chord.notes, time + 3 * beat, 0.04);
      MARCH_TUNE.forEach(function (entry) {
        if (entry[0] !== phrase) return;
        lead(kit, entry[2] - 12, time + entry[1] * beat, entry[3] * beat * 0.9,
          { types: ['sawtooth', 'triangle'], peak: 0.045, cutoff: 1500, attack: 0.04, release: 0.2, vibrato: 0.003, reverb: 0.35, echo: 0.08 });
      });
      if (bar >= 16) pluck(kit, chord.notes[2] + 12, time + 3.5 * beat, { type: 'square', peak: 0.03, decay: 0.15, cutoff: 2400, reverb: 0.3, echo: 0.1, pan: 0.4 });
    }
  };
  // @theme-end
  // ---------------- душераздирающие темы ----------------
  // @theme-begin loss
  // «Утрата»: ре минор, 60 ударов; Dm — B♭ — Gm — A (с задержанием), тихое отрывистое остинато шестнадцатыми
  // в высоком регистре, медленный хор, и над ними «плачущий» голос — нисходящие фразы с вздохами и скольжениями.
  var LOSS_CHORDS = [
    { bass: 38, notes: [62, 65, 69], arp: [74, 77, 81, 77] }, { bass: 34, notes: [62, 65, 70], arp: [74, 77, 82, 77] },
    { bass: 31, notes: [62, 67, 70], arp: [74, 79, 82, 79] }, { bass: 33, notes: [61, 64, 69], arp: [73, 76, 81, 76] }
  ];
  var LOSS_PHRASES = [
    [[0, 81, 1.5], [1.5, 79, 0.5], [2, 77, 1], [3, 76, 1], [4, 77, 3], [7, 74, 1]],
    [[0, 82, 2], [2, 81, 1], [3, 79, 1], [4, 77, 1.5], [5.5, 76, 0.5], [6, 73, 2]],
    [[0, 86, 1.5], [1.5, 84, 0.5], [2, 82, 1], [3, 81, 1], [4, 79, 2], [6, 77, 1], [7, 76, 1]],
    [[0, 77, 1], [1, 79, 1], [2, 81, 2], [4, 74, 3.5]]
  ];
  var LOSS = {
    name: 'loss', tempo: 60, bars: 16, echo: 0.75, level: 1.15,
    scheduleBar: function (kit, bar, absoluteBar, time) {
      var beat = 60 / this.tempo, barLength = beat * 4, chord = LOSS_CHORDS[bar % 4];
      choir(kit, chord.notes, time, barLength + 0.2, 0.05);
      drone(kit, chord.bass, time, barLength, 0.13);
      // отрывистое остинато: 16 ударов в такте, сильные — на 1 и 3
      for (var step = 0; step < 16; step++) {
        var accent = step % 8 === 0 ? 1 : step % 4 === 0 ? 0.7 : 0.35;
        snap(kit, chord.arp[step % 4], time + step * beat / 4, 0.05 * accent * (bar >= 8 ? 1.3 : 1), step % 2 ? 0.35 : -0.35, 0.3);
      }
      if (bar % 2 === 0) wail(kit, LOSS_PHRASES[(bar / 2) % 4], time, beat, { peak: bar >= 8 ? 0.075 : 0.06, cutoff: 3000, vibrato: 0.013, reverb: 0.75, echo: 0.3 });
      if (bar % 4 === 3) swell(kit, time, barLength, 0.06);
      if (bar === 8) drum(kit, time, 55, 0.35, 1.6, 0);
    }
  };
  // @theme-end
  // @theme-begin weep
  // «Плач»: до минор, 42 удара (медленно, удары струнных — около 3 в секунду); созвучия нарастают и сталкиваются (задержания, малые секунды), резкие отрывистые удары
  // струнных шестнадцатыми нарастают к концу каждых четырёх тактов, высокий голос срывается вверх скольжениями,
  // на сильных долях — глухой удар литавры.
  var WEEP_CHORDS = [
    { bass: 36, notes: [60, 63, 67, 74], hit: [48, 55] }, { bass: 32, notes: [60, 63, 68, 70], hit: [44, 51] },
    { bass: 39, notes: [58, 63, 67, 70], hit: [51, 58] }, { bass: 31, notes: [59, 62, 65, 68], hit: [43, 50] }
  ];
  var WEEP_PHRASES = [
    [[0, 79, 1], [1, 84, 2.5], [3.5, 82, 0.5], [4, 80, 1.5], [5.5, 79, 2.5]],
    [[0, 80, 1], [1, 87, 2], [3, 86, 1], [4, 84, 2], [6, 80, 2]],
    [[0, 82, 1.5], [1.5, 87, 1.5], [3, 91, 2], [5, 89, 1], [6, 87, 2]],
    [[0, 86, 2], [2, 84, 1], [3, 83, 1], [4, 80, 1], [5, 79, 3]]
  ];
  var WEEP = {
    name: 'weep', tempo: 42, bars: 16, echo: 0.71, level: 1.1,
    scheduleBar: function (kit, bar, absoluteBar, time) {
      var beat = 60 / this.tempo, barLength = beat * 4, chord = WEEP_CHORDS[bar % 4];
      var rise = (bar % 4 + 1) / 4;                        // нарастание к концу четвёрки тактов
      tremolo(kit, chord.notes, time, barLength + 0.3, 0.03 + 0.03 * rise, 7);
      choir(kit, chord.notes.slice(0, 3).map(function (note) { return note - 12; }), time, barLength + 0.3, 0.04);
      drone(kit, chord.bass, time, barLength, 0.14);
      for (var step = 0; step < 16; step++) {
        var accent = step % 4 === 0 ? 1 : step % 2 === 0 ? 0.55 : 0.3;
        snap(kit, chord.hit[step % 2] + 12, time + step * beat / 4, 0.09 * accent * (0.6 + 0.6 * rise), 0, 0.35 + 0.4 * rise);
      }
      drum(kit, time, 52, 0.3 + 0.15 * rise, 1.4, 0);
      if (bar % 2 === 0) wail(kit, WEEP_PHRASES[(bar / 2) % 4], time, beat, { peak: 0.07, cutoff: 3400, vibrato: 0.016, vibratoRate: 6.2, reverb: 0.8, echo: 0.3 });
      if (bar % 4 === 3) { swell(kit, time, barLength, 0.08); metal(kit, chord.hit[0] + 24, time + 3.5 * beat, 0.25, 0.4); }
    }
  };
  // @theme-end

  // ---------------- список тем ----------------
  // Темы можно удалять утилитой game/music_tool.html: она вырезает блоки между метками «@theme-begin имена»
  // и «@theme-end» (блок уходит, когда удалены все темы из его списка), прежний файл кладёт в js/music_backup.
  // Метки не убирать. group — когда звучит: calm — мирная обстановка, tactical — бой без контакта,
  // battle — контакт или стрельба; конец задания по оценке: triumph — ХОРОШО и ОТЛИЧНО, debrief — УДОВЛЕТВОРИТЕЛЬНО,
  // defeat — ПЛОХО; mourn — душераздирающие (в бою — по выбору в настройках «Музыка боя»).
  var THEMES = {};
  function register(theme, title, group) { theme.title = title; theme.group = group; THEMES[theme.name] = theme; }
  // @theme-begin calm
  register(CALM, 'Застава', 'calm');
  // @theme-end
  // @theme-begin dawn
  register(DAWN, 'Рассвет', 'calm');
  // @theme-end
  // @theme-begin landing
  register(LANDING, 'Высадка', 'tactical');
  // @theme-end
  // @theme-begin shade
  register(SHADE, 'Тень', 'tactical');
  // @theme-end
  // @theme-begin gloom
  register(GLOOM, 'Мрак', 'tactical');
  // @theme-end
  // @theme-begin probe
  register(PROBE, 'Зонд', 'tactical');
  // @theme-end
  // @theme-begin hive
  register(HIVE, 'Улей', 'tactical');
  // @theme-end
  // @theme-begin mine
  register(MINE, 'Шахта', 'tactical');
  // @theme-end
  // @theme-begin assault
  register(ASSAULT, 'Штурм', 'battle');
  // @theme-end
  // @theme-begin contact
  register(SHADE_CONTACT, 'Тень · контакт', 'battle');
  // @theme-end
  // @theme-begin gloomContact
  register(GLOOM_CONTACT, 'Мрак · контакт', 'battle');
  // @theme-end
  // @theme-begin probeContact
  register(PROBE_CONTACT, 'Зонд · контакт', 'battle');
  // @theme-end
  // @theme-begin hiveContact
  register(HIVE_CONTACT, 'Улей · контакт', 'battle');
  // @theme-end
  // @theme-begin mineContact
  register(MINE_CONTACT, 'Шахта · контакт', 'battle');
  // @theme-end
  // @theme-begin impulse
  register(IMPULSE, 'Импульс', 'battle');
  // @theme-end
  // @theme-begin alarm
  register(ALARM, 'Тревога', 'battle');
  // @theme-end
  // @theme-begin knock
  register(KNOCK, 'Стук', 'battle');
  // @theme-end
  // @theme-begin triumph
  register(TRIUMPH, 'Чествование', 'triumph');
  // @theme-end
  // @theme-begin return
  register(RETURN, 'Возвращение', 'debrief');
  // @theme-end
  // @theme-begin march
  register(MARCH, 'Марш', 'defeat');
  // @theme-end
  // @theme-begin loss
  register(LOSS, 'Утрата', 'mourn');
  // @theme-end
  // @theme-begin weep
  register(WEEP, 'Плач', 'mourn');
  // @theme-end


  // ---------------- воспроизведение в игре ----------------
  // Музыка звучит фрагментами: 30 с играет (последние 3 с затихает), затем 30 с тишины (настройка «Паузы в музыке»).
  // Следующий фрагмент темы продолжается с места, где закончился прошлый, — с начала ближайшей фразы в 4 такта.
  // Смена темы (началась или закончилась перестрелка) включает новую тему сразу, и во время паузы тоже.
  var LOOKAHEAD = 1.2;                            // насколько заранее планировать такты, секунды
  var FADE_OUT = 3;
  var timing = { play: 30, pause: 30 };
  var context = null, master = null, runs = [], mood = 'calm', timer = null;
  var resumeBar = {};                             // с какого такта продолжить тему (по имени)
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

  // Наборы тем по настроению и настройке «Фоновая музыка боя» (musicSet):
  //   0 — все по очереди; 1 — «Высадка» и «Штурм»; 2 — «Тень» (фон, как в UFO); 3 — «Зонд», «Улей», «Шахта»
  //   (повторяющиеся звуки, как в UFO); 4 — «Мрак»; 5 — «Импульс», «Тревога», «Стук» (резкие акценты, около 4 в секунду);
  //   6 — «Утрата», «Плач» (душераздирающие). Мирная обстановка — «Застава» и «Рассвет», конец задания — «Возвращение»,
  //   а если в задании погибли бойцы — «Утрата» и «Плач».
  var END_MOODS = ['triumph', 'debrief', 'defeat', 'mourn'];       // конец задания: без смены по пулу
  var POOLS = {
    tactical: [['landing', 'shade', 'gloom', 'probe', 'hive', 'mine'], ['landing'], ['shade'], ['probe', 'hive', 'mine'], ['gloom'], ['probe', 'hive', 'mine'], ['gloom']],
    battle: [['assault', 'impulse', 'contact', 'alarm', 'probeContact', 'knock', 'hiveContact', 'gloomContact', 'mineContact'], ['assault'], ['contact'],
      ['probeContact', 'hiveContact', 'mineContact'], ['gloomContact'], ['impulse', 'alarm', 'knock'], ['loss', 'weep']]
  };
  var poolTurn = {};                              // какая тема набора звучит: сдвигается после каждой паузы
  function wantedMood() {
    var settings = window.Settings ? Settings.values : {};
    if (settings.musicVolume === 0) return null;
    if (END_MOODS.indexOf(mood) >= 0) return mood;
    if (settings.musicTheme === 1) return 'calm';
    if (settings.musicTheme === 2) return mood === 'calm' ? 'tactical' : mood;
    return mood;
  }
  // только темы, которые есть в файле (часть могла быть удалена утилитой music_tool.html)
  function available(list) { return list.filter(function (name) { return !!THEMES[name]; }); }
  function poolFor(moodName) {
    var settings = window.Settings ? Settings.values : {};
    var set = settings.musicSet || 0;
    if (moodName === 'triumph') { var triumph = available(['triumph']); return triumph.length ? triumph : available(['return']); }
    if (moodName === 'debrief') return available(['return']);
    if (moodName === 'defeat') return available(['march']);
    if (moodName === 'mourn') { var mourn = available(['loss', 'weep']); return mourn.length ? mourn : available(['return']); }
    if (moodName === 'calm') return available(['calm', 'dawn']);
    var pools = POOLS[moodName] || POOLS.tactical;
    var pool = available(pools[set] || pools[0]);
    return pool.length ? pool : available(pools[0]);    // выбранный набор целиком удалён — все оставшиеся темы
  }
  function wanted() {
    var moodName = wantedMood();
    if (!moodName) return null;
    var pool = poolFor(moodName);
    if (!pool.length) return null;                       // для этой обстановки тем не осталось — тишина
    return pool[(poolTurn[moodName] || 0) % pool.length];
  }
  function nextInPool() { var moodName = wantedMood(); if (moodName) poolTurn[moodName] = (poolTurn[moodName] || 0) + 1; }
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
    var run = { theme: theme, gain: gain, kit: createKit(context, gain, theme.echo), bar: resumeBar[name] || 0, absoluteBar: 0,
      nextTime: startTime, stopping: false, endTime: name === 'return' || theme.continuous ? Infinity : startTime + timing.play };   // музыка конца задания — без пауз
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
      nextInPool();                                // после паузы — следующая тема набора
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
    if (['calm', 'tactical', 'battle'].concat(END_MOODS).indexOf(name) < 0 || name === mood) return;
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

  // ---------------- прослушивание одной темы (утилита music_tool.html) ----------------
  // Тема играет по кругу на своём AudioContext, без пауз и смены тем. Возвращает управление: stop(), setVolume(0…1),
  // bar — такт, который сейчас звучит (с нуля).
  var previewContext = null, previewMaster = null;
  function preview(name, volume) {
    var theme = THEMES[name];
    if (!theme) return null;
    if (!previewContext) {
      previewContext = new (window.AudioContext || window.webkitAudioContext)();
      previewMaster = createMaster(previewContext, previewContext.destination);
    }
    if (previewContext.state === 'suspended') previewContext.resume();
    var audio = previewContext, volumeGain = audio.createGain(), gain = audio.createGain();
    volumeGain.gain.value = volume === undefined ? 0.8 : volume;
    volumeGain.connect(previewMaster);
    gain.connect(volumeGain);
    var startTime = audio.currentTime + 0.1;
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(theme.level || 1, startTime + 1);
    var kit = createKit(audio, gain, theme.echo), barLength = 4 * 60 / theme.tempo;
    var state = { bar: 0, absoluteBar: 0, nextTime: startTime, starts: [] };
    var interval = setInterval(function () {
      var now = audio.currentTime;
      if (state.nextTime < now - 0.5) state.nextTime = now + 0.05;
      while (state.nextTime < now + LOOKAHEAD) {
        theme.scheduleBar(kit, state.bar, state.absoluteBar, state.nextTime);
        state.starts.push({ time: state.nextTime, bar: state.bar });
        state.nextTime += barLength;
        state.bar = (state.bar + 1) % theme.bars;
        state.absoluteBar++;
      }
      while (state.starts.length > 1 && state.starts[1].time <= now) state.starts.shift();
    }, 60);
    var stopped = false;
    return {
      theme: theme,
      get bar() { return state.starts.length && state.starts[0].time <= audio.currentTime ? state.starts[0].bar : 0; },
      setVolume: function (value) { volumeGain.gain.setTargetAtTime(value, audio.currentTime, 0.05); },
      stop: function () {
        if (stopped) return;
        stopped = true;
        clearInterval(interval);
        var now = audio.currentTime;
        gain.gain.cancelScheduledValues(now);
        gain.gain.setValueAtTime(gain.gain.value, now);
        gain.gain.linearRampToValueAtTime(0, now + 0.4);
        setTimeout(function () { volumeGain.disconnect(); }, 1500);
      }
    };
  }

  return {
    attach: attach, setMood: setMood, renderOffline: renderOffline, preview: preview,
    get mood() { return mood; },
    get playing() { var run = context && current(); return run ? run.theme.name : null; },
    get pausedFor() { return context && !current() && pauseUntil ? Math.max(0, pauseUntil - context.currentTime) : 0; },
    setTiming: function (play, pause) { timing.play = play; timing.pause = pause; },   // для проверки
    themes: THEMES
  };
})();
