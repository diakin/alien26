// Утилита music_tool.html: прослушивание тем музыки (Music.preview) и удаление отмеченных тем из js/music.js.
// Удаление: из текста music.js вырезаются блоки между метками «// @theme-begin имена» и «// @theme-end», у которых
// все темы из списка отмечены. Новый текст проверяется (выполняется отдельно, каждая оставшаяся тема рендерится
// на 2 такта без звуковой карты), затем прежний файл записывается в js/music_backup/music_<дата>_<время>.js,
// а новый — на место music.js. Запись — через File System Access API (Chrome, Edge); где его нет — новый файл
// и копия прежнего скачиваются, заменить music.js нужно вручную.
(function () {
  'use strict';

  var GROUPS = [
    { id: 'calm', title: 'МИРНАЯ ОБСТАНОВКА', empty: 'в мирной обстановке музыки не будет' },
    { id: 'tactical', title: 'БОЙ БЕЗ КОНТАКТА', empty: 'в бою без контакта музыки не будет' },
    { id: 'battle', title: 'КОНТАКТ ИЛИ СТРЕЛЬБА', empty: 'при контакте и стрельбе музыки не будет' },
    { id: 'triumph', title: 'КОНЕЦ ЗАДАНИЯ: ХОРОШО И ОТЛИЧНО', empty: 'при оценке «хорошо» и «отлично» будет звучать «Возвращение» (если оно осталось)' },
    { id: 'debrief', title: 'КОНЕЦ ЗАДАНИЯ: УДОВЛЕТВОРИТЕЛЬНО', empty: 'при оценке «удовлетворительно» музыки не будет' },
    { id: 'defeat', title: 'КОНЕЦ ЗАДАНИЯ: ПЛОХО', empty: 'при оценке «плохо» музыки не будет' },
    { id: 'mourn', title: 'ДУШЕРАЗДИРАЮЩИЕ (В БОЮ — ПО ВЫБОРУ В НАСТРОЙКАХ «МУЗЫКА БОЯ»)', empty: 'набор «Утрата, Плач» в настройках «Музыка боя» будет играть остальные темы боя' }
  ];
  var themes = Music.themes;
  var names = Object.keys(themes);
  var marked = {};
  var player = null, playingName = null;
  var listElement = document.getElementById('list');
  var statusElement = document.getElementById('status');
  var deleteButton = document.getElementById('delete');
  var volumeInput = document.getElementById('volume');

  function setStatus(text, kind) {
    statusElement.textContent = text;
    statusElement.className = 'status' + (kind ? ' ' + kind : '');
  }
  function seconds(theme) { return Math.round(theme.bars * 4 * 60 / theme.tempo); }
  function escapeHtml(text) { return String(text).replace(/[&<>"]/g, function (symbol) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[symbol]; }); }

  // ---------------- список ----------------
  function render() {
    var html = '';
    GROUPS.forEach(function (group) {
      var list = names.filter(function (name) { return themes[name].group === group.id; });
      if (!list.length) return;
      html += '<div class="group"><h2>' + group.title + '</h2><table>';
      list.forEach(function (name) {
        var theme = themes[name];
        html += '<tr data-name="' + name + '">' +
          '<td class="check"><label><input type="checkbox" data-mark="' + name + '"> удалить</label></td>' +
          '<td class="play"><button data-play="' + name + '" title="Слушать по кругу">▶</button></td>' +
          '<td><span class="title">' + escapeHtml(theme.title || name) + '</span><span class="name">' + name + '</span></td>' +
          '<td class="info">' + theme.tempo + ' уд/мин · ' + Math.floor(seconds(theme) / 60) + ':' + ('0' + seconds(theme) % 60).slice(-2) + '</td>' +
          '<td class="progress"><div class="track"><i id="track-' + name + '"></i></div><div class="bar" id="bar-' + name + '"></div></td>' +
          '</tr>';
      });
      html += '</table></div>';
    });
    // темы без группы (если в music.js добавят новые без register(…, группа))
    var other = names.filter(function (name) { return !GROUPS.some(function (group) { return group.id === themes[name].group; }); });
    if (other.length) setStatus('Темы без группы: ' + other.join(', '), 'warn');
    listElement.innerHTML = html;
    document.getElementById('count').textContent = 'Тем в файле: ' + names.length;
  }
  render();

  // ---------------- прослушивание ----------------
  function stopPlaying() {
    if (player) player.stop();
    if (playingName) {
      var row = listElement.querySelector('tr[data-name="' + playingName + '"]');
      if (row) row.classList.remove('playing');
      var button = listElement.querySelector('[data-play="' + playingName + '"]');
      if (button) button.textContent = '▶';
      document.getElementById('track-' + playingName).style.width = '0';
      document.getElementById('bar-' + playingName).textContent = '';
    }
    player = null; playingName = null;
  }
  function play(name) {
    var again = playingName === name;
    stopPlaying();
    if (again) return;
    try { player = Music.preview(name, volumeInput.value / 100); } catch (error) { setStatus('Не удалось включить звук: ' + error.message, 'error'); return; }
    if (!player) return;
    playingName = name;
    listElement.querySelector('tr[data-name="' + name + '"]').classList.add('playing');
    listElement.querySelector('[data-play="' + name + '"]').textContent = '■';
  }
  setInterval(function () {
    if (!player || !playingName) return;
    var theme = themes[playingName], bar = player.bar;
    document.getElementById('track-' + playingName).style.width = ((bar + 1) / theme.bars * 100).toFixed(1) + '%';
    document.getElementById('bar-' + playingName).textContent = 'такт ' + (bar + 1) + ' из ' + theme.bars;
  }, 200);
  volumeInput.addEventListener('input', function () { if (player) player.setVolume(volumeInput.value / 100); });
  document.getElementById('stop-all').addEventListener('click', stopPlaying);
  listElement.addEventListener('click', function (event) {
    var button = event.target.closest('[data-play]');
    if (button) play(button.getAttribute('data-play'));
  });
  listElement.addEventListener('change', function (event) {
    var box = event.target.closest('[data-mark]');
    if (!box) return;
    var name = box.getAttribute('data-mark');
    if (box.checked) marked[name] = true; else delete marked[name];
    listElement.querySelector('tr[data-name="' + name + '"]').classList.toggle('marked', box.checked);
    updateDeleteButton();
  });
  function markedNames() { return names.filter(function (name) { return marked[name]; }); }
  function updateDeleteButton() {
    var count = markedNames().length;
    deleteButton.disabled = !count;
    deleteButton.textContent = count ? 'УДАЛИТЬ ОТМЕЧЕННЫЕ ТЕМЫ (' + count + ')' : 'УДАЛИТЬ ОТМЕЧЕННЫЕ ТЕМЫ';
    var warnings = emptyGroups();
    if (count) setStatus(warnings.length ? 'После удаления: ' + warnings.join('; ') + '.' : 'Отмечено тем: ' + count + '.', warnings.length ? 'warn' : '');
    else setStatus('');
  }
  function emptyGroups() {
    return GROUPS.filter(function (group) {
      var list = names.filter(function (name) { return themes[name].group === group.id; });
      return list.length && list.every(function (name) { return marked[name]; });
    }).map(function (group) { return group.empty; });
  }

  // ---------------- удаление ----------------
  // вырезать из текста блоки, все темы которых удаляются; ошибки разметки — исключение
  function stripThemes(source, removed) {
    var lines = source.split('\n'), out = [], inside = false, skipping = false, blocks = 0;
    lines.forEach(function (line, index) {
      var begin = /^\s*\/\/ @theme-begin ([\w,]+)\s*$/.exec(line);
      if (begin) {
        if (inside) throw new Error('метка @theme-begin внутри другого блока, строка ' + (index + 1));
        inside = true;
        skipping = begin[1].split(',').every(function (name) { return removed.indexOf(name) >= 0; });
        if (skipping) blocks++;
        if (!skipping) out.push(line);
        return;
      }
      if (/^\s*\/\/ @theme-end\s*$/.test(line)) {
        if (!inside) throw new Error('лишняя метка @theme-end, строка ' + (index + 1));
        if (!skipping) out.push(line);
        inside = false; skipping = false;
        return;
      }
      if (!skipping) out.push(line);
    });
    if (inside) throw new Error('блок без метки @theme-end');
    return { text: out.join('\n'), blocks: blocks };
  }
  function themesInSource(source) {
    var found = [];
    // имена тем — из блоков регистрации: «// @theme-begin имя» перед строкой register(…)
    var lines = source.split('\n');
    lines.forEach(function (line, index) {
      if (/^\s*register\(/.test(line)) {
        var begin = /@theme-begin (\w+)\s*$/.exec(lines[index - 1] || '');
        if (begin) found.push(begin[1]);
      }
    });
    return found;
  }
  // выполнить новый текст отдельно и проверить: темы те, что должны остаться, каждая рендерится на 2 такта
  function verify(text, expected) {
    var module;
    try { module = new Function('window', text + '\nreturn Music;')({ AudioContext: window.AudioContext }); }
    catch (error) { return Promise.reject(new Error('новый music.js не выполняется: ' + error.message)); }
    var left = Object.keys(module.themes).sort().join(','), want = expected.slice().sort().join(',');
    if (left !== want) return Promise.reject(new Error('в новом файле темы ' + left + ', ожидались ' + want));
    var chain = Promise.resolve();
    expected.forEach(function (name, index) {
      chain = chain.then(function () {
        setStatus('Проверка нового файла: тема ' + (index + 1) + ' из ' + expected.length + ' (' + name + ')…');
        return module.renderOffline(name, 2, 22050);
      });
    });
    return chain;
  }
  function stamp() {
    var now = new Date(), two = function (value) { return ('0' + value).slice(-2); };
    return now.getFullYear() + '-' + two(now.getMonth() + 1) + '-' + two(now.getDate()) + '_' + two(now.getHours()) + '-' + two(now.getMinutes()) + '-' + two(now.getSeconds());
  }
  function writeFile(directory, name, text) {
    return directory.getFileHandle(name, { create: true }).then(function (handle) {
      return handle.createWritable().then(function (stream) {
        return stream.write(text).then(function () { return stream.close(); });
      });
    });
  }
  function readFile(handle) { return handle.getFile().then(function (file) { return file.text(); }); }
  // папка game или game/js: где лежит music.js
  function findMusic(directory) {
    return directory.getFileHandle('music.js').then(function (handle) { return { folder: directory, handle: handle, path: directory.name }; }, function () {
      return directory.getDirectoryHandle('js').then(function (js) {
        return js.getFileHandle('music.js').then(function (handle) { return { folder: js, handle: handle, path: directory.name + '/js' }; });
      });
    }).catch(function () { throw new Error('в выбранной папке нет music.js и js/music.js — выберите папку game'); });
  }
  function prepare(source, removed) {
    var inFile = themesInSource(source);
    var missing = removed.filter(function (name) { return inFile.indexOf(name) < 0; });
    if (missing.length) throw new Error('в выбранном music.js нет тем ' + missing.join(', ') + ' — выбрана другая копия файла?');
    var result = stripThemes(source, removed);
    return { text: result.text, blocks: result.blocks, expected: inFile.filter(function (name) { return removed.indexOf(name) < 0; }) };
  }

  deleteButton.addEventListener('click', function () {
    var removed = markedNames();
    if (!removed.length) return;
    var titles = removed.map(function (name) { return '«' + (themes[name].title || name) + '»'; }).join(', ');
    var warnings = emptyGroups();
    if (!window.confirm('Удалить темы: ' + titles + '?' + (warnings.length ? '\n\nПосле удаления: ' + warnings.join('; ') + '.' : '') +
      '\n\nПрежний music.js будет сохранён в js/music_backup.')) return;
    stopPlaying();
    if (window.showDirectoryPicker) saveWithFolder(removed); else saveWithDownload(removed);
  });

  function saveWithFolder(removed) {
    var found, source, prepared, backupName = 'music_' + stamp() + '.js';
    window.showDirectoryPicker({ id: 'aliens26-game', mode: 'readwrite' }).then(function (directory) {
      return findMusic(directory);
    }).then(function (result) {
      found = result;
      return readFile(found.handle);
    }).then(function (text) {
      source = text;
      prepared = prepare(source, removed);
      return verify(prepared.text, prepared.expected);
    }).then(function () {
      setStatus('Сохранение…');
      return found.folder.getDirectoryHandle('music_backup', { create: true });
    }).then(function (backup) {
      return writeFile(backup, backupName, source);
    }).then(function () {
      return writeFile(found.folder, 'music.js', prepared.text);
    }).then(function () {
      setStatus('Готово: удалено тем ' + removed.length + ', осталось ' + prepared.expected.length + '. Прежний файл — ' +
        found.path + '/music_backup/' + backupName + '. Страница сейчас перезагрузится.');
      setTimeout(function () { location.reload(); }, 2500);
    }).catch(function (error) {
      if (error && error.name === 'AbortError') { setStatus('Папка не выбрана, ничего не изменено.'); return; }
      setStatus('Ничего не изменено: ' + (error && error.message ? error.message : error), 'error');
    });
  }

  // без File System Access API: выбрать music.js, скачать новый файл и копию прежнего
  function saveWithDownload(removed) {
    var input = document.getElementById('file-input');
    setStatus('Этот браузер не умеет записывать в папку. Выберите файл game/js/music.js — новый файл и копия прежнего будут скачаны.', 'warn');
    input.value = '';
    input.onchange = function () {
      var file = input.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function () {
        var source = String(reader.result), prepared;
        try { prepared = prepare(source, removed); } catch (error) { setStatus('Ничего не изменено: ' + error.message, 'error'); return; }
        verify(prepared.text, prepared.expected).then(function () {
          var backupName = 'music_' + stamp() + '.js';
          download(backupName, source);
          download('music.js', prepared.text);
          setStatus('Скачаны music.js (новый) и ' + backupName + ' (прежний). Положите прежний в game/js/music_backup, новым замените game/js/music.js.');
        }).catch(function (error) { setStatus('Ничего не изменено: ' + error.message, 'error'); });
      };
      reader.readAsText(file);
    };
    input.click();
  }
  function download(name, text) {
    var link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([text], { type: 'text/javascript' }));
    link.download = name;
    document.body.appendChild(link);
    link.click();
    setTimeout(function () { URL.revokeObjectURL(link.href); link.remove(); }, 1000);
  }

  // для проверки из консоли и тестов
  window.MusicTool = { stripThemes: stripThemes, prepare: prepare, verify: verify, themesInSource: themesInSource };
})();
