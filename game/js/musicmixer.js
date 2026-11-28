// Утилита music_mixer.html: микшер тем музыки (js/music.js) с записью настроек в js/music_mix.js.
//   Дорожки темы — её инструменты (Music.instrumentsOf): громкость, перенос в полутонах, скорость, выключить, соло.
//   Ритмические дорожки — инструмент из Music.samples, нота, 16 шагов на такт (0 — тишина, 0,5 — тихо, 1 — громко),
//   рисунок из набора ритмических основ (RHYTHMS) или генератор (Евклид: k ударов из 16 со сдвигом; случайный).
//   Свои темы — только из ритмических дорожек (MUSIC_MIX.custom).
// Всё редактируется в Music.mix (это и есть window.MUSIC_MIX), тема при прослушивании читает его на ходу.
// Запись — через File System Access API (Chrome, Edge): выбрать папку game, прежний music_mix.js копируется
// в js/music_backup/music_mix_<дата>_<время>.js. Где API нет — новый файл скачивается.
(function () {
  'use strict';

  var MIX = Music.mix, themes = Music.themes, samples = Music.samples;
  var themeSelect = document.getElementById('theme');
  var playButton = document.getElementById('play');
  var volumeInput = document.getElementById('volume');
  var baseTable = document.getElementById('base-tracks');
  var patternTable = document.getElementById('pattern-tracks');
  var statusElement = document.getElementById('status');
  var player = null, soloKey = null, current = null, dirty = false;
  var instrumentCache = {};

  // ---------------- ритмические основы (16 шагов на такт) ----------------
  function repeat(cell, times) { var result = []; for (var index = 0; index < times; index++) result = result.concat(cell); return result; }
  var RHYTHMS = [
    { title: 'Раз в такт', steps: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    { title: 'Половинные', steps: [1, 0, 0, 0, 0, 0, 0, 0, 0.7, 0, 0, 0, 0, 0, 0, 0] },
    { title: 'Четверти', steps: [1, 0, 0, 0, 0.7, 0, 0, 0, 0.8, 0, 0, 0, 0.7, 0, 0, 0] },
    { title: 'Восьмые', steps: [1, 0, 0.5, 0, 0.8, 0, 0.5, 0, 0.9, 0, 0.5, 0, 0.8, 0, 0.5, 0] },
    { title: 'Слабые восьмые', steps: repeat([0, 0, 1, 0], 4) },
    { title: 'Шестнадцатые', steps: repeat([1, 0.5, 0.7, 0.5], 4) },
    { title: '3+3+2 (восьмыми)', steps: repeat([1, 0, 0, 0.7, 0, 0, 0.8, 0], 2) },
    { title: 'Тресильо', steps: [1, 0, 0, 0, 0, 0, 0.8, 0, 0, 0, 0, 0, 0.8, 0, 0, 0] },
    { title: 'Клаве сон', steps: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0] },
    { title: 'Клаве румба', steps: [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0] },
    { title: 'Синкопы', steps: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0] },
    { title: 'Галоп', steps: repeat([1, 0, 0.6, 0.6], 4) },
    { title: 'Марш', steps: [1, 0, 0, 0, 0.6, 0, 0.6, 0, 1, 0, 0, 0, 0.6, 0, 0.6, 0] },
    { title: 'Сердце «тук-тук»', steps: [1, 0, 0.7, 0, 0, 0, 0, 0, 1, 0, 0.7, 0, 0, 0, 0, 0] },
    { title: 'Дробь в конце такта', steps: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.4, 0.55, 0.7, 1] }
  ];
  // Евклидов ритм: hits ударов как можно ровнее по 16 шагам, со сдвигом rotation
  function euclid(hits, rotation) {
    var steps = [];
    for (var step = 0; step < 16; step++) steps.push((step * hits) % 16 < hits ? 1 : 0);
    var shift = ((rotation % 16) + 16) % 16;
    return steps.slice(16 - shift).concat(steps.slice(0, 16 - shift)).map(function (value, index) { return value ? (index % 4 === 0 ? 1 : 0.6) : 0; });
  }
  function randomRhythm(density) {
    var steps = [];
    for (var step = 0; step < 16; step++) steps.push(Math.random() < density * (step % 4 === 0 ? 1.6 : step % 2 === 0 ? 1 : 0.6) ? (step % 4 === 0 ? 1 : 0.5 + Math.random() * 0.4) : 0);
    if (!steps.some(function (value) { return value > 0; })) steps[0] = 1;
    return steps.map(function (value) { return Math.round(value * 10) / 10; });
  }

  // ---------------- вспомогательное ----------------
  var NOTE_NAMES = ['до', 'до♯', 'ре', 'ре♯', 'ми', 'фа', 'фа♯', 'соль', 'соль♯', 'ля', 'ля♯', 'си'];
  function noteName(note) { return NOTE_NAMES[((note % 12) + 12) % 12] + (Math.floor(note / 12) - 1); }
  function escapeHtml(text) { return String(text).replace(/[&<>"]/g, function (symbol) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[symbol]; }); }
  function setStatus(text, kind) { statusElement.textContent = text; statusElement.className = 'status' + (kind ? ' ' + kind : ''); }
  function decibels(gain) { return gain <= 0.001 ? '−∞ дБ' : (gain >= 1 ? '+' : '') + (20 * Math.log10(gain)).toFixed(1) + ' дБ'; }
  function isCustom(name) { return !!MIX.custom[name]; }
  function themeEntry(name, create) {
    if (!MIX.themes[name] && create) MIX.themes[name] = { tracks: {}, extra: [] };
    var entry = MIX.themes[name];
    if (entry && !entry.tracks) entry.tracks = {};
    if (entry && !entry.extra) entry.extra = [];
    return entry;
  }
  function patterns(name, create) {
    if (isCustom(name)) return MIX.custom[name].tracks || (MIX.custom[name].tracks = []);
    var entry = themeEntry(name, create);
    return entry ? entry.extra : [];
  }
  function markDirty() { dirty = true; setStatus('Есть несохранённые изменения.', 'warn'); }
  function applyLive() { if (player) player.applyMix(); }
  function nextId(list) { var id = 1; while (list.some(function (track) { return track.id === 't' + id; })) id++; return 't' + id; }

  // ---------------- список тем ----------------
  var GROUP_TITLES = { calm: 'мирная', tactical: 'бой без контакта', battle: 'контакт', triumph: 'конец: хорошо', debrief: 'конец: удовл.', defeat: 'конец: плохо', mourn: 'душераздирающие' };
  function fillThemes(selected) {
    var names = Object.keys(themes);
    themeSelect.innerHTML = names.map(function (name) {
      var theme = themes[name];
      return '<option value="' + name + '">' + escapeHtml(theme.title || name) + (isCustom(name) ? ' (своя)' : '') + ' — ' + (GROUP_TITLES[theme.group] || theme.group) + '</option>';
    }).join('');
    themeSelect.value = selected && themes[selected] ? selected : names[0];
  }

  // ---------------- дорожки темы ----------------
  function renderBase() {
    var name = current, custom = isCustom(name);
    document.getElementById('base-section').style.display = custom ? 'none' : '';
    document.getElementById('custom-settings').style.display = custom ? 'flex' : 'none';
    document.getElementById('delete-theme').style.display = custom ? '' : 'none';
    document.getElementById('reset-theme').style.display = custom ? 'none' : '';
    if (custom) {
      var def = MIX.custom[name];
      document.getElementById('custom-title').value = def.title || name;
      document.getElementById('custom-tempo').value = def.tempo || 90;
      document.getElementById('custom-bars').value = def.bars || 16;
      document.getElementById('custom-group').value = def.group || 'tactical';
      return;
    }
    if (!instrumentCache[name]) instrumentCache[name] = Music.instrumentsOf(name);
    var list = instrumentCache[name], entry = themeEntry(name, false);
    var html = '<tr><th>ИНСТРУМЕНТ</th><th></th><th>ГРОМКОСТЬ</th><th>ПЕРЕНОС, ПОЛУТОНЫ</th><th>СКОРОСТЬ</th><th></th></tr>';
    list.forEach(function (key) {
      var settings = entry && entry.tracks[key] || {};
      html += trackControls(key, Music.trackTitles[key] || key, key, settings, false);
    });
    baseTable.innerHTML = html;
  }
  // общие органы управления дорожки: M, S, громкость, перенос, скорость, сброс
  function trackControls(key, title, subtitle, settings, pattern) {
    var gain = settings.gain >= 0 ? settings.gain : 1, transpose = settings.transpose || 0, speed = settings.speed > 0 ? settings.speed : 1;
    var changed = gain !== 1 || transpose !== 0 || speed !== 1 || settings.mute;
    var cells = '<td class="name">' + escapeHtml(title) + '<small>' + escapeHtml(subtitle) + '</small></td>' +
      '<td><button class="small' + (settings.mute ? ' on' : '') + '" data-mute="' + key + '" title="Выключить">M</button> ' +
      '<button class="small' + (soloKey === key ? ' on' : '') + '" data-solo="' + key + '" title="Слушать отдельно">S</button></td>' +
      '<td>' + (pattern ? '<span class="caption">ГРОМК. </span>' : '') + '<input type="range" min="0" max="300" value="' + Math.round(gain * 100) + '" data-gain="' + key + '"> <span class="value" id="gain-' + key + '">' + decibels(gain) + '</span></td>' +
      '<td>' + (pattern ? '<span class="caption">ПЕРЕНОС </span>' : '') + '<input type="range" min="-24" max="24" value="' + transpose + '" data-transpose="' + key + '"> <span class="value" id="transpose-' + key + '">' + (transpose > 0 ? '+' : '') + transpose + '</span></td>' +
      '<td>' + (pattern ? '<span class="caption">СКОРОСТЬ </span>' : '') + '<input type="range" min="-200" max="200" value="' + Math.round(Math.log(speed) / Math.LN2 * 100) + '" data-speed="' + key + '"> <span class="value" id="speed-' + key + '">×' + speed.toFixed(2) + '</span></td>';
    if (pattern) return cells;
    return '<tr class="' + (changed ? 'changed' : '') + (settings.mute ? ' muted' : '') + '" data-row="' + key + '">' + cells +
      '<td><button class="small" data-reset="' + key + '" title="Вернуть исходное">СБРОС</button></td></tr>';
  }
  function settingsFor(key, create) {
    if (key.indexOf('x:') === 0) {
      var id = key.slice(2);
      return patterns(current, false).filter(function (track) { return track.id === id; })[0] || null;
    }
    var entry = themeEntry(current, create);
    if (!entry) return null;
    if (!entry.tracks[key] && create) entry.tracks[key] = {};
    return entry.tracks[key] || null;
  }

  // ---------------- ритмические дорожки ----------------
  function renderPatterns() {
    var list = patterns(current, false);
    if (!list.length) { patternTable.innerHTML = '<tr><td class="empty">Ритмических дорожек нет — «+ ДОРОЖКА» добавит.</td></tr>'; return; }
    var instrumentOptions = Object.keys(samples).map(function (key) { return '<option value="' + key + '">' + escapeHtml(samples[key].title) + '</option>'; }).join('');
    var rhythmOptions = '<option value="">основа…</option>' + RHYTHMS.map(function (rhythm, index) { return '<option value="' + index + '">' + escapeHtml(rhythm.title) + '</option>'; }).join('');
    var html = '';
    list.forEach(function (track) {
      var key = 'x:' + track.id, note = track.note === undefined ? samples[track.instrument].note : track.note;
      var steps = '';
      for (var step = 0; step < 16; step++) {
        var value = track.steps[step] || 0;
        steps += '<b data-step="' + track.id + ':' + step + '" class="' + (value >= 0.75 ? 'full' : value > 0 ? 'half' : '') + '" title="шаг ' + (step + 1) + ': ' + value + '"></b>';
      }
      html += '<tr class="' + (track.mute ? 'muted' : '') + '" data-row="' + key + '">' +
        '<td class="name"><select data-instrument="' + track.id + '">' + instrumentOptions.replace('value="' + track.instrument + '"', 'value="' + track.instrument + '" selected') + '</select>' +
        '<small>нота <input type="number" min="12" max="120" value="' + note + '" data-note="' + track.id + '"> ' + noteName(note) + '</small></td>' +
        '<td colspan="5"><span class="steps" data-steps="' + track.id + '">' + steps + '</span> ' +
        '<select data-rhythm="' + track.id + '">' + rhythmOptions + '</select> ' +
        '<span class="gen"><span class="caption">ЕВКЛИД</span><input type="number" min="0" max="16" value="' + (track.hits || 5) + '" data-hits="' + track.id + '" title="ударов на 16 шагов">' +
        '<input type="number" min="0" max="15" value="' + (track.rotation || 0) + '" data-rotation="' + track.id + '" title="сдвиг">' +
        '<button class="small" data-euclid="' + track.id + '">ПРИМЕНИТЬ</button> <button class="small" data-random="' + track.id + '">СЛУЧАЙНО</button></span> ' +
        '<span class="caption">ТАКТ</span> <select data-every="' + track.id + '">' + [1, 2, 4, 8].map(function (every) {
          return '<option value="' + every + '"' + ((track.every || 1) === every ? ' selected' : '') + '>' + (every === 1 ? 'каждый' : 'каждый ' + every + '-й') + '</option>';
        }).join('') + '</select>' +
        ' <span class="caption">ПАН.</span> <input type="range" min="-100" max="100" value="' + Math.round((track.pan || 0) * 100) + '" data-pan="' + track.id + '" style="width:70px">' +
        ' <button class="small danger" data-remove="' + track.id + '" title="Удалить дорожку">✕</button></td></tr>' +
        '<tr class="' + (track.mute ? 'muted' : '') + '"><td class="name"></td>' + trackControls(key, '', '', track, true).replace(/^<td class="name">.*?<\/td>/, '') + '</tr>';
    });
    patternTable.innerHTML = html;
  }
  function trackById(id) { return patterns(current, false).filter(function (track) { return track.id === id; })[0]; }
  function addTrack() {
    var list = patterns(current, true);
    list.push({ id: nextId(list), instrument: 'blip', note: samples.blip.note, steps: RHYTHMS[3].steps.slice(), every: 1, gain: 1, transpose: 0, speed: 1, pan: 0 });
    markDirty(); renderPatterns();
  }

  // ---------------- события ----------------
  function onInput(event) {
    var target = event.target, data = target.dataset, key, settings;
    if ((key = data.gain || data.transpose || data.speed)) {
      settings = settingsFor(key, true);
      if (data.gain) { settings.gain = Number(target.value) / 100; document.getElementById('gain-' + key).textContent = decibels(settings.gain); applyLive(); }
      if (data.transpose) { settings.transpose = Number(target.value); document.getElementById('transpose-' + key).textContent = (settings.transpose > 0 ? '+' : '') + settings.transpose; }
      if (data.speed) { settings.speed = Math.round(Math.pow(2, Number(target.value) / 100) * 100) / 100; document.getElementById('speed-' + key).textContent = '×' + settings.speed.toFixed(2); }
      var row = document.querySelector('tr[data-row="' + key + '"]');
      if (row && key.indexOf('x:') !== 0) row.classList.add('changed');
      markDirty();
      return;
    }
    var track;
    if (data.pan && (track = trackById(data.pan))) { track.pan = Number(target.value) / 100; markDirty(); }
    if (data.note && (track = trackById(data.note))) { track.note = Math.max(12, Math.min(120, Number(target.value) || 60)); markDirty(); }
    if (target.id === 'custom-title') { MIX.custom[current].title = target.value; themes[current].title = target.value; markDirty(); }
    if (target.id === 'custom-tempo') { MIX.custom[current].tempo = Math.max(30, Math.min(220, Number(target.value) || 90)); markDirty(); }
    if (target.id === 'custom-bars') { MIX.custom[current].bars = Math.max(1, Math.min(64, Number(target.value) || 16)); markDirty(); }
  }
  function onChange(event) {
    var target = event.target, data = target.dataset, track;
    if (data.instrument && (track = trackById(data.instrument))) { track.instrument = target.value; track.note = samples[target.value].note; markDirty(); renderPatterns(); }
    if (data.note) renderPatterns();
    if (data.rhythm !== undefined && target.value !== '' && (track = trackById(data.rhythm))) { track.steps = RHYTHMS[Number(target.value)].steps.slice(); markDirty(); renderPatterns(); }
    if (data.every && (track = trackById(data.every))) { track.every = Number(target.value); markDirty(); }
    if (data.hits && (track = trackById(data.hits))) track.hits = Number(target.value);
    if (data.rotation && (track = trackById(data.rotation))) track.rotation = Number(target.value);
    if (target.id === 'custom-group') { MIX.custom[current].group = target.value; themes[current].group = target.value; markDirty(); fillThemes(current); }
    if (target.id === 'theme') selectTheme(target.value);
  }
  function onClick(event) {
    var target = event.target, data = target.dataset, track, settings;
    if (data.step) {
      var parts = data.step.split(':'); track = trackById(parts[0]);
      var step = Number(parts[1]), value = track.steps[step] || 0;
      track.steps[step] = value === 0 ? 1 : value >= 0.75 ? 0.5 : 0;     // пусто → громко → тихо → пусто
      target.className = track.steps[step] >= 0.75 ? 'full' : track.steps[step] > 0 ? 'half' : '';
      markDirty();
      return;
    }
    if (data.mute) { settings = settingsFor(data.mute, true); settings.mute = !settings.mute; markDirty(); rerender(); return; }
    if (data.solo) { soloKey = soloKey === data.solo ? null : data.solo; if (player) player.setSolo(soloKey); rerender(); return; }
    if (data.reset) { var entry = themeEntry(current, false); if (entry) delete entry.tracks[data.reset]; markDirty(); applyLive(); renderBase(); return; }
    if (data.remove) { var list = patterns(current, false); list.splice(list.indexOf(trackById(data.remove)), 1); markDirty(); renderPatterns(); return; }
    if (data.euclid && (track = trackById(data.euclid))) { track.steps = euclid(track.hits || 5, track.rotation || 0); markDirty(); renderPatterns(); return; }
    if (data.random && (track = trackById(data.random))) { track.steps = randomRhythm(0.35); markDirty(); renderPatterns(); return; }
  }
  function rerender() { renderBase(); renderPatterns(); }
  document.addEventListener('input', onInput);
  document.addEventListener('change', onChange);
  document.addEventListener('click', onClick);

  // ---------------- прослушивание ----------------
  function stop() {
    if (player) player.stop();
    player = null;
    playButton.classList.remove('playing');
    playButton.textContent = '▶ СЛУШАТЬ';
    document.querySelectorAll('.steps b.now').forEach(function (cell) { cell.classList.remove('now'); });
  }
  function play() {
    stop();
    player = Music.preview(current, Number(volumeInput.value) / 100);
    if (!player) return;
    player.setSolo(soloKey);
    playButton.classList.add('playing');
    playButton.textContent = '■ СТОП';
  }
  playButton.addEventListener('click', function () { if (player) stop(); else play(); });
  volumeInput.addEventListener('input', function () { if (player) player.setVolume(Number(volumeInput.value) / 100); });
  // бегунок по шагам ритмических дорожек
  var lastStep = -1;
  function animate() {
    requestAnimationFrame(animate);
    if (!player) return;
    var step = player.playingBar < 0 ? -1 : Math.floor(player.progress * 16);
    if (step === lastStep) return;
    lastStep = step;
    document.querySelectorAll('.steps b.now').forEach(function (cell) { cell.classList.remove('now'); });
    if (step < 0) return;
    patterns(current, false).forEach(function (track) {
      if (player.playingBar % (track.every || 1) !== 0) return;
      var cell = document.querySelector('b[data-step="' + track.id + ':' + step + '"]');
      if (cell) cell.classList.add('now');
    });
  }
  requestAnimationFrame(animate);

  function selectTheme(name) {
    var wasPlaying = !!player;
    stop();
    current = name;
    soloKey = null;
    themeSelect.value = name;
    rerender();
    if (wasPlaying) play();
  }

  // ---------------- свои темы ----------------
  document.getElementById('new-theme').addEventListener('click', function () {
    var number = 1;
    while (MIX.custom['my' + number] || themes['my' + number]) number++;
    var name = 'my' + number;
    MIX.custom[name] = {
      title: 'Моя тема ' + number, tempo: 90, bars: 16, group: 'tactical',
      tracks: [
        { id: 't1', instrument: 'deepDrone', note: 40, steps: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], every: 4, gain: 1, transpose: 0, speed: 1, pan: 0 },
        { id: 't2', instrument: 'blip', note: 64, steps: RHYTHMS[6].steps.slice(), every: 1, gain: 1, transpose: 0, speed: 1, pan: 0 },
        { id: 't3', instrument: 'clack', note: 100, steps: RHYTHMS[4].steps.slice(), every: 1, gain: 0.6, transpose: 0, speed: 1, pan: 0.3 }
      ]
    };
    Music.registerCustom(name);
    fillThemes(name);
    selectTheme(name);
    markDirty();
  });
  document.getElementById('delete-theme').addEventListener('click', function () {
    if (!isCustom(current) || !window.confirm('Удалить тему «' + (MIX.custom[current].title || current) + '»? Изменение запишется при сохранении.')) return;
    stop();
    delete MIX.custom[current];
    Music.unregister(current);
    fillThemes();
    selectTheme(themeSelect.value);
    markDirty();
  });
  document.getElementById('reset-theme').addEventListener('click', function () {
    if (isCustom(current) || !MIX.themes[current]) return;
    if (!window.confirm('Вернуть теме «' + themes[current].title + '» исходное звучание (убрать настройки дорожек и добавленные ритмические дорожки)?')) return;
    delete MIX.themes[current];
    applyLive();
    rerender();
    markDirty();
  });
  document.getElementById('add-track').addEventListener('click', addTrack);

  // ---------------- сохранение ----------------
  // убрать нейтральные настройки (громкость 1, перенос 0, скорость 1) и пустые записи тем
  function cleanMix() {
    var result = { themes: {}, custom: {} };
    Object.keys(MIX.themes).forEach(function (name) {
      var entry = MIX.themes[name], tracks = {};
      Object.keys(entry.tracks || {}).forEach(function (key) {
        var settings = entry.tracks[key], clean = {};
        if (settings.gain >= 0 && settings.gain !== 1) clean.gain = settings.gain;
        if (settings.transpose) clean.transpose = settings.transpose;
        if (settings.speed > 0 && settings.speed !== 1) clean.speed = settings.speed;
        if (settings.mute) clean.mute = true;
        if (Object.keys(clean).length) tracks[key] = clean;
      });
      var extra = (entry.extra || []).filter(function (track) { return track.steps.some(function (value) { return value > 0; }); });
      if (Object.keys(tracks).length || extra.length) result.themes[name] = { tracks: tracks, extra: extra };
    });
    Object.keys(MIX.custom).forEach(function (name) { result.custom[name] = MIX.custom[name]; });
    return result;
  }
  function fileText() {
    return '// Настройки микшера музыки — утилита music_mixer.html, файл перезаписывается ею (прежний — в js/music_backup).\n' +
      '// themes[тема].tracks[инструмент] = { gain, transpose, speed, mute } — громкость, перенос в полутонах, скорость;\n' +
      '// themes[тема].extra — добавленные к теме ритмические дорожки; custom — свои темы из ритмических дорожек.\n' +
      'var MUSIC_MIX = ' + compactJson(cleanMix()) + ';\n';
  }
  // JSON с отступами, но числовые массивы (шаги) и настройки дорожек — в одну строку
  function compactJson(value) {
    return JSON.stringify(value, null, 1)
      .replace(/\[\s*((?:-?[\d.]+,\s*)*-?[\d.]+)\s*\]/g, function (match, body) { return '[' + body.replace(/\s+/g, '') + ']'; })
      .replace(/\{\s*("(?:gain|transpose|speed|mute)":[^{}\[\]]*?)\s*\}/g, function (match, body) { return '{ ' + body.replace(/\s*\n\s*/g, ' ') + ' }'; });
  }
  function stamp() {
    var now = new Date(), pad = function (value) { return ('0' + value).slice(-2); };
    return now.getFullYear() + pad(now.getMonth() + 1) + pad(now.getDate()) + '_' + pad(now.getHours()) + pad(now.getMinutes()) + pad(now.getSeconds());
  }
  function writeFile(folder, name, text) {
    return folder.getFileHandle(name, { create: true }).then(function (handle) {
      return handle.createWritable().then(function (stream) { return stream.write(text).then(function () { return stream.close(); }); });
    });
  }
  // папка game или game/js: где лежит music.js
  function findJs(directory) {
    return directory.getFileHandle('music.js').then(function () { return { folder: directory, path: directory.name }; }, function () {
      return directory.getDirectoryHandle('js').then(function (js) {
        return js.getFileHandle('music.js').then(function () { return { folder: js, path: directory.name + '/js' }; });
      });
    }).catch(function () { throw new Error('в выбранной папке нет music.js и js/music.js — выберите папку game'); });
  }
  function download(name, text) {
    var link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([text], { type: 'text/javascript' }));
    link.download = name;
    document.body.appendChild(link);
    link.click();
    setTimeout(function () { URL.revokeObjectURL(link.href); link.remove(); }, 1000);
  }
  document.getElementById('save').addEventListener('click', function () {
    var text = fileText();
    if (!window.showDirectoryPicker) {
      download('music_mix.js', text);
      setStatus('Этот браузер не умеет записывать в папку: music_mix.js скачан — положите его в game/js вместо прежнего.', 'warn');
      return;
    }
    var found, backupName = 'music_mix_' + stamp() + '.js';
    window.showDirectoryPicker({ id: 'aliens26-game', mode: 'readwrite' }).then(findJs).then(function (result) {
      found = result;
      return found.folder.getFileHandle('music_mix.js').then(function (handle) { return handle.getFile().then(function (file) { return file.text(); }); }, function () { return null; });
    }).then(function (previous) {
      if (previous === null) return null;
      return found.folder.getDirectoryHandle('music_backup', { create: true }).then(function (backup) { return writeFile(backup, backupName, previous); });
    }).then(function () {
      return writeFile(found.folder, 'music_mix.js', text);
    }).then(function () {
      dirty = false;
      setStatus('Сохранено: ' + found.path + '/music_mix.js (прежний — ' + found.path + '/music_backup/' + backupName + '). Игра применит настройки при следующем запуске.');
    }).catch(function (error) {
      if (error && error.name === 'AbortError') { setStatus('Папка не выбрана, ничего не записано.'); return; }
      setStatus('Не записано: ' + (error && error.message ? error.message : error), 'error');
    });
  });
  window.addEventListener('beforeunload', function (event) { if (dirty) { event.preventDefault(); event.returnValue = ''; } });

  fillThemes();
  selectTheme(themeSelect.value);
  setStatus('Выберите тему и нажмите «Слушать». Настройки из music_mix.js загружены.');

  // для проверки из консоли и тестов
  window.MusicMixer = { RHYTHMS: RHYTHMS, euclid: euclid, randomRhythm: randomRhythm, fileText: fileText, selectTheme: selectTheme, addTrack: addTrack, get player() { return player; } };
})();
