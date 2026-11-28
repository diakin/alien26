// Генератор мелодий для микшера музыки (music_mixer.html). Работает сам, по правилам, без внешних сервисов.
//
// Как сочиняется фраза из N тактов (generate(options)):
//   1. Гармония: на каждый такт — аккорд лада (ступени из PROGRESSIONS: например, в миноре i – iv – VI – V);
//      последний такт — тоника, предпоследний — доминанта или субдоминанта (каденция).
//   2. Ритм мотива: на 1 такт, по плотности: сильные доли (1 и 3) — почти всегда, слабые доли — реже,
//      шестнадцатые — редко; длина ноты — до следующей ноты.
//   3. Высоты мотива: случайное блуждание по ступеням лада: чаще всего шаг на соседнюю ступень, реже повтор,
//      терция или скачок (насколько часто — «скачки»). После скачка больше чем на терцию — ход назад
//      (заполнение скачка). На сильных долях — звуки аккорда этого такта. Выход за диапазон — отражение назад.
//   4. Форма фразы — повторы мотива с изменениями, как в песне: A A′ B A″ (4 такта), A B (2), A A′ B B′ A A″ C D (8):
//      A′ — секвенция (мотив на ступень выше или ниже) или новая концовка такта; B — новый мотив с другим
//      контуром; в последнем такте мелодия приходит на тонику и тянет её до конца такта.
//   5. Сила нот: сильные доли громче, слабые тише; последняя нота фразы — громкая и длинная.
// Случайность — с зерном (seed): одно и то же зерно и те же настройки дают ту же мелодию.
var MelodyGen = (function () {
  'use strict';

  var SCALES = {
    minor: { title: 'минор (натуральный)', steps: [0, 2, 3, 5, 7, 8, 10] },
    harmonic: { title: 'минор гармонический', steps: [0, 2, 3, 5, 7, 8, 11] },
    dorian: { title: 'дорийский', steps: [0, 2, 3, 5, 7, 9, 10] },
    phrygian: { title: 'фригийский (тёмный)', steps: [0, 1, 3, 5, 7, 8, 10] },
    phrygianDominant: { title: 'фригийский с большой терцией (тревожный)', steps: [0, 1, 4, 5, 7, 8, 10] },
    major: { title: 'мажор', steps: [0, 2, 4, 5, 7, 9, 11] },
    lydian: { title: 'лидийский (светлый)', steps: [0, 2, 4, 6, 7, 9, 11] },
    pentatonicMinor: { title: 'пентатоника минорная', steps: [0, 3, 5, 7, 10] },
    pentatonicMajor: { title: 'пентатоника мажорная', steps: [0, 2, 4, 7, 9] },
    wholeTone: { title: 'целотонный (странный)', steps: [0, 2, 4, 6, 8, 10] }
  };
  // ступени аккордов по тактам (с нуля: 0 — тоника, 3 — IV, 4 — V, 5 — VI, 6 — VII)
  var PROGRESSIONS = [[0, 3, 5, 4], [0, 5, 3, 4], [0, 6, 5, 4], [0, 3, 0, 4], [0, 5, 6, 4], [0, 2, 3, 4]];

  function seeded(seed) {
    var state = (seed >>> 0) || 1;
    return function () {
      state = (state + 0x6D2B79F5) >>> 0;
      var mixed = Math.imul(state ^ (state >>> 15), 1 | state);
      mixed = (mixed + Math.imul(mixed ^ (mixed >>> 7), 61 | mixed)) ^ mixed;
      return ((mixed ^ (mixed >>> 14)) >>> 0) / 4294967296;
    };
  }
  function pick(random, list) { return list[Math.floor(random() * list.length)]; }

  // все звуки лада в диапазоне: [{ note, degree }] по возрастанию; degree — номер ступени с учётом октавы
  function scaleNotes(root, steps, low, high) {
    var list = [];
    for (var octave = -2; octave < 12; octave++) {
      steps.forEach(function (step, index) {
        var note = root + octave * 12 + step;
        if (note >= low && note <= high) list.push({ note: note, degree: octave * steps.length + index });
      });
    }
    return list;
  }
  // аккорд на ступени: сама ступень, терция и квинта лада (через ступень)
  function chordDegrees(chord, size) { return [chord % size, (chord + 2) % size, (chord + 4) % size]; }

  // ритм одного такта: массив шагов (0…15), где начинаются ноты
  function motifRhythm(random, density) {
    var onsets = [];
    for (var step = 0; step < 16; step++) {
      var chance = step % 8 === 0 ? 0.92 : step % 4 === 0 ? 0.35 + density * 0.6 : step % 2 === 0 ? density * 0.75 : density * density * 0.45;
      if (random() < chance) onsets.push(step);
    }
    if (onsets[0] !== 0 && random() < 0.7) onsets.unshift(0);
    if (!onsets.length) onsets.push(0);
    return onsets;
  }
  // небольшое изменение ритма: убрать или добавить одну ноту во второй половине такта
  function varyRhythm(random, onsets) {
    var result = onsets.slice();
    if (random() < 0.5 && result.length > 2) result.splice(result.length - 1 - Math.floor(random() * 2), 1);
    else {
      var step = 8 + Math.floor(random() * 8);
      if (result.indexOf(step) < 0) { result.push(step); result.sort(function (first, second) { return first - second; }); }
    }
    return result;
  }

  // высоты мотива по ритму: индексы в списке звуков лада (pool)
  function motifPitches(random, onsets, pool, startIndex, chord, size, leaps, contour) {
    var chordSet = chordDegrees(chord, size), index = startIndex, previousMove = 0, result = [];
    var isChordTone = function (position) { return chordSet.indexOf(((pool[position].degree % size) + size) % size) >= 0; };
    onsets.forEach(function (step, order) {
      if (order > 0) {
        var move;
        if (Math.abs(previousMove) > 2) move = -Math.sign(previousMove) * (1 + Math.floor(random() * 2));   // заполнить скачок
        else {
          var roll = random();
          var size2 = roll < 0.12 ? 0 : roll < 0.62 - leaps * 0.25 ? 1 : roll < 0.85 - leaps * 0.15 ? 2 : 3 + Math.floor(random() * 2);
          var direction = contour ? (random() < 0.7 ? contour : -contour) : (random() < 0.5 ? 1 : -1);
          move = size2 * direction;
        }
        index += move;
        if (index < 0) index = -index;                                     // отражение от края диапазона
        if (index >= pool.length) index = 2 * (pool.length - 1) - index;
        index = Math.max(0, Math.min(pool.length - 1, index));
        previousMove = move;
      }
      // на сильных долях — ближайший звук аккорда
      if (step % 8 === 0 && !isChordTone(index)) {
        for (var offset = 1; offset < 4; offset++) {
          if (index + offset < pool.length && isChordTone(index + offset)) { index += offset; break; }
          if (index - offset >= 0 && isChordTone(index - offset)) { index -= offset; break; }
        }
      }
      result.push(index);
    });
    return result;
  }

  // форма фразы: для каждого такта — какой мотив и как изменён
  var FORMS = {
    1: ['A'], 2: ['A', 'B'], 4: ['A', 'A2', 'B', 'A3'], 8: ['A', 'A2', 'B', 'B2', 'A', 'A3', 'C', 'END']
  };

  // options: { root (MIDI тоники), scale (ключ SCALES), low, high (диапазон MIDI), bars (1, 2, 4, 8),
  //            density 0…1, leaps 0…1, seed } → [[такт, шаг, нота, длина в шагах, сила], …]
  function generate(options) {
    var random = seeded(options.seed || 1);
    var steps = (SCALES[options.scale] || SCALES.minor).steps, size = steps.length;
    var pool = scaleNotes(options.root, steps, options.low, options.high);
    if (pool.length < 3) return [];
    var bars = options.bars || 4, density = options.density === undefined ? 0.5 : options.density, leaps = options.leaps === undefined ? 0.4 : options.leaps;
    var progression = pick(random, PROGRESSIONS), form = FORMS[bars] || FORMS[4];
    // аккорд такта: по кругу прогрессии; последний такт — тоника, предпоследний — V или IV
    var chords = [];
    for (var bar = 0; bar < bars; bar++) chords.push(progression[bar % progression.length]);
    if (bars > 1) chords[bars - 1] = 0;
    if (bars > 2) chords[bars - 2] = random() < 0.7 ? 4 % size : 3 % size;
    // начало — звук тоники в середине диапазона
    var middle = Math.floor(pool.length / 2), start = middle;
    for (var offset = 0; offset < pool.length; offset++) {
      if (middle + offset < pool.length && pool[middle + offset].degree % size === 0) { start = middle + offset; break; }
      if (middle - offset >= 0 && pool[middle - offset].degree % size === 0) { start = middle - offset; break; }
    }
    var motifs = {};
    var makeMotif = function (startIndex, chord, contour) {
      var rhythm = motifRhythm(random, density);
      return { rhythm: rhythm, pitches: motifPitches(random, rhythm, pool, startIndex, chord, size, leaps, contour) };
    };
    motifs.A = makeMotif(start, chords[0], 0);
    var notes = [];
    form.slice(0, bars).forEach(function (part, bar) {
      var motif;
      if (part === 'A') motif = motifs.A;
      else if (part === 'A2') {            // секвенция: мотив на ступень выше или ниже
        var shift = random() < 0.5 ? 1 : -1;
        motif = { rhythm: motifs.A.rhythm, pitches: motifs.A.pitches.map(function (index) { return Math.max(0, Math.min(pool.length - 1, index + shift)); }) };
      } else if (part === 'A3') {          // то же начало, новая концовка такта
        var rhythm = varyRhythm(random, motifs.A.rhythm);
        var head = motifs.A.pitches.slice(0, Math.ceil(rhythm.length / 2));
        var tail = motifPitches(random, rhythm.slice(head.length - 1), pool, head[head.length - 1], chords[bar], size, leaps, 0).slice(1);
        motif = { rhythm: rhythm, pitches: head.concat(tail).slice(0, rhythm.length) };
      } else if (part === 'B' || part === 'C') {
        var last = notes.length ? notes[notes.length - 1].index : start;
        motifs[part] = makeMotif(last, chords[bar], random() < 0.5 ? 1 : -1);
        motif = motifs[part];
      } else if (part === 'B2') {
        motif = { rhythm: motifs.B.rhythm, pitches: motifs.B.pitches.map(function (index) { return Math.max(0, Math.min(pool.length - 1, index - 1)); }) };
      } else motif = makeMotif(notes.length ? notes[notes.length - 1].index : start, chords[bar], -1);
      motif.rhythm.forEach(function (step, order) {
        if (order < motif.pitches.length) notes.push({ bar: bar, step: step, index: motif.pitches[order] });
      });
    });
    // каденция: в последнем такте — тоника на первой доле (или после короткого подхода), тянется до конца такта
    if (bars > 1 || form[0] === 'A') {
      var lastBar = bars - 1;
      notes = notes.filter(function (note) { return note.bar < lastBar || note.step < 8; });
      var before = notes.length ? notes[notes.length - 1].index : start, tonic = start, best = Infinity;
      pool.forEach(function (item, index) { if (item.degree % size === 0 && Math.abs(index - before) < best) { best = Math.abs(index - before); tonic = index; } });
      var finalStep = notes.some(function (note) { return note.bar === lastBar; }) ? 8 : 0;
      notes.push({ bar: lastBar, step: finalStep, index: tonic, final: true });
    }
    // длины и сила
    return notes.map(function (note, order) {
      var next = notes[order + 1], position = note.bar * 16 + note.step;
      var end = next ? next.bar * 16 + next.step : bars * 16;
      var length = Math.max(1, Math.min(end - position, note.final ? 16 : 8));
      var velocity = note.final ? 1 : note.step % 8 === 0 ? 0.95 : note.step % 4 === 0 ? 0.8 : note.step % 2 === 0 ? 0.65 : 0.55;
      return [note.bar, note.step, pool[note.index].note, length, velocity];
    });
  }

  // вариация: тот же ритм, новые высоты (с другим зерном) — или тот же мотив, но другая концовка
  function vary(options, notes) {
    var random = seeded((options.seed || 1) * 7919 + 13);
    var steps = (SCALES[options.scale] || SCALES.minor).steps;
    var pool = scaleNotes(options.root, steps, options.low, options.high).map(function (item) { return item.note; });
    return notes.map(function (entry, order) {
      if (order === notes.length - 1 || random() < 0.55) return entry.slice();
      var index = pool.indexOf(entry[2]);
      if (index < 0) return entry.slice();
      var moved = Math.max(0, Math.min(pool.length - 1, index + (random() < 0.5 ? -1 : 1) * (1 + Math.floor(random() * 2))));
      return [entry[0], entry[1], pool[moved], entry[3], entry[4]];
    });
  }

  return { SCALES: SCALES, generate: generate, vary: vary, scaleNotes: scaleNotes };
})();
if (typeof module !== 'undefined') module.exports = MelodyGen;
