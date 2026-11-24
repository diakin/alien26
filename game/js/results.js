// Окно итогов задания: открывается из game.js (updateMission), когда задание кончилось.
// summary: { result: 'good'|'bad', map, turn, aliensKilled, aliensTotal, artifacts: [{ name, count }],
//            soldiersLost: [{ callsign, name, rank }], soldiersTotal, robotsLost: [...], robotsTotal }
var Results = (function () {
  'use strict';

  var style = document.createElement('style');
  style.textContent = [
    '#results { position: fixed; inset: 0; z-index: 60; display: none; background: rgba(4, 6, 7, 0.62); font-family: Arial, sans-serif; user-select: none; }',
    '#results.open { display: block; }',
    '#results.confirm { background: rgba(4, 6, 7, 0.18); }',
    '#results.confirm .sheet { top: 24px; transform-origin: 50% 0; }',
    '#results .hint { margin: 12px 20px 0; font-size: 12px; color: #a8c8a8; }',
    '#results .sheet { position: absolute; left: 50%; top: 50%; width: 640px; transform: translate(-50%, -50%); transform-origin: 50% 50%;',
    '  background: rgba(14, 20, 18, 0.97); border: 1px solid #4c6a58; box-shadow: 0 12px 40px rgba(0,0,0,0.6); color: #d8e8d0; padding-bottom: 14px; }',
    '#results .head { margin: 12px; padding: 8px 14px; border: 1px solid #4c6a58; display: flex; align-items: baseline; justify-content: space-between; }',
    '#results .head b { font-size: 20px; color: #c8f0a0; letter-spacing: 1px; }',
    '#results .head span { font-size: 11px; font-weight: bold; letter-spacing: 1px; color: #8fb894; }',
    '#results .verdict { margin: 4px 12px 12px; padding: 12px 14px; border: 1px solid #22382c; display: flex; align-items: baseline; gap: 14px; }',
    '#results .verdict .label { font-size: 12px; font-weight: bold; letter-spacing: 1px; color: #8fb894; }',
    '#results .verdict .value { font: bold 26px Consolas, "DejaVu Sans Mono", monospace; letter-spacing: 2px; }',
    '#results .verdict.good .value { color: #9fe07a; } #results .verdict.bad .value { color: #ff6a55; }',
    '#results .verdict .note { margin-left: auto; font-size: 12px; color: #a8c8a8; }',
    '#results table { border-collapse: collapse; margin: 0 12px; width: calc(100% - 24px); }',
    '#results td { border-bottom: 1px solid #22382c; padding: 7px 8px; vertical-align: top; }',
    '#results td.name { width: 230px; font-size: 13px; font-weight: bold; letter-spacing: 1px; color: #a8d8a0; }',
    '#results td.value { width: 90px; text-align: right; font: bold 15px Consolas, "DejaVu Sans Mono", monospace; color: #ffc070;',
    '  border-left: 1px solid #22382c; border-right: 1px solid #22382c; }',
    '#results td.value small { color: #6f8a78; font-weight: normal; font-size: 11px; }',
    '#results td.list { font-size: 12px; line-height: 18px; color: #d8e8d0; }',
    '#results td.list .none { color: #6f8a78; }',
    '#results td.list .count { font-family: Consolas, "DejaVu Sans Mono", monospace; color: #ffc070; }',
    '#results td.list .callsign { font-family: Consolas, "DejaVu Sans Mono", monospace; color: #e8a33a; margin-right: 6px; }',
    '#results .buttons { display: flex; justify-content: flex-end; gap: 10px; margin: 14px 12px 0; }',
    '#results button { background: #12181b; border: 1px solid #4c6a58; color: #d8e8d0; font: bold 12px Arial, sans-serif; letter-spacing: 1px; padding: 9px 16px; cursor: pointer; }',
    '#results button:hover { border-color: #c8f0a0; color: #c8f0a0; }',
    '#results button.main { border-color: #e8a33a; color: #ffd28a; }'
  ].join('\n');
  document.head.appendChild(style);

  var root = document.createElement('div');
  root.id = 'results';
  document.body.appendChild(root);

  function escape(text) {
    return String(text).replace(/[&<>"]/g, function (symbol) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[symbol]; });
  }
  function row(name, value, total, listHtml) {
    return '<tr><td class="name">' + name + '</td><td class="value">' + value + (total !== null ? ' <small>из ' + total + '</small>' : '') +
      '</td><td class="list">' + listHtml + '</td></tr>';
  }
  function peopleList(people) {
    if (!people.length) return '<span class="none">нет</span>';
    return people.map(function (person) {
      return '<div><span class="callsign">' + escape(person.callsign) + '</span>' + escape(person.name || '') + (person.rank ? ', ' + escape(person.rank) : '') + '</div>';
    }).join('');
  }
  function artifactList(summary) {
    if (summary.kind === 'wiped') return '<span class="none">не вывезены: зона осталась за пришельцами</span>';
    if (summary.kind === 'evac' && !summary.artifacts.length) return '<span class="none">нет: вывозится только то, что у бойцов на борту</span>';
    if (!summary.artifacts.length) return '<span class="none">нет</span>';
    return summary.artifacts.map(function (item) {
      return '<div>' + escape(item.name) + ' <span class="count">× ' + item.count + '</span></div>';
    }).join('');
  }

  function verdictNote(summary) {
    var rescue = summary.rescue;
    if (rescue) {
      var vipText = rescue.vipRescued ? 'учёный доставлен на базу' : rescue.vipDead ? 'учёный погиб' : 'учёный не спасён';
      var how = summary.kind === 'cleared' ? 'пришельцы уничтожены' : summary.kind === 'wiped' ? 'отряд погиб' : 'эвакуация';
      return how.charAt(0).toUpperCase() + how.slice(1) + ', ' + vipText + ', спасено гражданских ' + rescue.civiliansRescued.length + ' из ' + rescue.civiliansTotal;
    }
    if (summary.kind === 'cleared') return 'Все пришельцы в зоне уничтожены';
    if (summary.kind === 'wiped') return 'Отряд погиб, зона не очищена';
    var losses = summary.soldiersLost.length + summary.soldiersLeft.length;
    return 'Эвакуация: уничтожено ' + summary.aliensKilled + ' из ' + summary.aliensTotal + ', потери бойцов ' + losses;
  }
  // задание спасения: учёный, дети, гражданские
  function rescueRows(rescue) {
    var vipValue = rescue.vipRescued ? 'ДА' : 'НЕТ';
    var vipNote = rescue.vip ? '<div><span class="callsign">' + escape(rescue.vip.callsign) + '</span>' + escape(rescue.vip.name || '') +
      (rescue.vipRescued ? ', доставлен на базу' : rescue.vipDead ? ', погиб' : ', остался в городе') + '</div>' : '';
    return row('УЧЁНЫЙ СПАСЁН', vipValue, null, vipNote) +
      row('СПАСЕНО ДЕТЕЙ', rescue.childrenRescued, rescue.childrenTotal, '') +
      row('СПАСЕНО ГРАЖДАНСКИХ', rescue.civiliansRescued.length, rescue.civiliansTotal, peopleList(rescue.civiliansRescued)) +
      row('ПОГИБЛО ГРАЖДАНСКИХ', rescue.civiliansDead.length, rescue.civiliansTotal, peopleList(rescue.civiliansDead));
  }
  function show(summary) {
    var good = summary.result === 'good';
    var artifactCount = summary.artifacts.reduce(function (sum, item) { return sum + item.count; }, 0);
    root.innerHTML =
      '<div class="sheet">' +
        '<div class="head"><b>ИТОГИ ЗАДАНИЯ</b><span>' + escape(summary.map) + ' · ХОД ' + summary.turn + '</span></div>' +
        '<div class="verdict ' + (good ? 'good' : 'bad') + '"><span class="label">РЕЗУЛЬТАТ</span>' +
          '<span class="value">' + (good ? 'ХОРОШО' : 'ПЛОХО') + '</span>' +
          '<span class="note">' + verdictNote(summary) + '</span></div>' +
        '<table>' +
          (summary.rescue ? rescueRows(summary.rescue) : '') +
          row('УБИТО ПРИШЕЛЬЦЕВ', summary.aliensKilled, summary.aliensTotal, summary.rescue && summary.rescue.portalOpen ? '<span class="none">с подкреплением из портала</span>' : '') +
          row('НАЙДЕНО АРТЕФАКТОВ', artifactCount, null, artifactList(summary)) +
          row('ПОГИБЛО БОЙЦОВ', summary.soldiersLost.length, summary.soldiersTotal, peopleList(summary.soldiersLost)) +
          (summary.kind === 'evac' ? row('НЕ ЭВАКУИРОВАНО', summary.soldiersLeft.length, summary.soldiersTotal, peopleList(summary.soldiersLeft)) : '') +
          row('ПОТЕРЯНО РОБОТОВ', summary.robotsLost.length + summary.robotsLeft.length, summary.robotsTotal,
            peopleList(summary.robotsLost.concat(summary.robotsLeft.map(function (robot) { return { callsign: robot.callsign, name: robot.name, rank: 'не эвакуирован' }; })))) +
        '</table>' +
        '<div class="buttons">' +
          '<button data-action="retry">ПОВТОРИТЬ ЗАДАНИЕ</button>' +
          '<button class="main" data-action="globe">К ГЛОБУСУ</button>' +
        '</div>' +
      '</div>';
    root.className = 'open';
    fit();
  }
  // окно уменьшается в низких и узких окнах браузера
  function fit() {
    var sheet = root.querySelector('.sheet');
    if (!sheet) return;
    var scale = Math.min(1, (window.innerWidth - 24) / sheet.offsetWidth, (window.innerHeight - 24) / sheet.offsetHeight);
    sheet.style.transform = (root.className.indexOf('confirm') >= 0 ? 'translate(-50%, 0)' : 'translate(-50%, -50%)') + ' scale(' + scale + ')';
  }
  window.addEventListener('resize', fit);
  root.addEventListener('click', function (event) {
    var button = event.target.closest('button');
    if (!button) return;
    if (button.dataset.action === 'retry') location.reload();
    if (button.dataset.action === 'globe') location.href = 'globe.html';
    if (button.dataset.action === 'cancel') closeConfirm(false);
    if (button.dataset.action === 'takeoff') closeConfirm(true);
    if (button.dataset.action === 'gather') closeConfirm('gather');
  });
  // окно перехватывает клавиши и колесо, чтобы под ним ничего не происходило
  ['keydown', 'wheel'].forEach(function (name) {
    window.addEventListener(name, function (event) {
      if (root.className.indexOf('open') < 0) return;
      if (name === 'keydown' && pending && event.key === 'Escape') closeConfirm(false);
      event.stopPropagation();
    }, true);
  });

  // Подтверждение эвакуации: кто на борту, кто останется. done(true) — взлёт, done(false) — отмена.
  var pending = null;
  function confirmEvacuation(plan, done) {
    pending = done;
    var canLeave = plan.aboard.length > 0;
    var total = plan.aboard.length + plan.left.length;
    root.innerHTML =
      '<div class="sheet">' +
        '<div class="head"><b>ЭВАКУАЦИЯ</b><span>ЗОНА ЭВАКУАЦИИ ПОДСВЕЧЕНА НА КАРТЕ</span></div>' +
        '<table>' +
          row('ВНЕ ЗОНЫ ЭВАКУАЦИИ', plan.left.length, total, peopleList(plan.left)) +
          row('В ЗОНЕ ЭВАКУАЦИИ', plan.aboard.length, total, peopleList(plan.aboard)) +
        '</table>' +
        '<div class="hint">' + (!canLeave
          ? 'В зоне эвакуации никого нет. «Перевести в зону эвакуации» — все пойдут в салон и на рампу (тратят ОД).'
          : plan.left.length
            ? 'Вне зоны эвакуации: ' + plan.left.length + '. Они останутся на месте и будут считаться потерянными. Вывозится только снаряжение тех, кто в зоне. Задание закончится.'
            : 'Все в зоне эвакуации. Вывозится только снаряжение тех, кто в зоне. Задание закончится.') + '</div>' +
        '<div class="buttons">' +
          '<button data-action="cancel">ОТМЕНА</button>' +
          (plan.left.length ? '<button data-action="gather">ПЕРЕВЕСТИ В ЗОНУ ЭВАКУАЦИИ</button>' : '') +
          (canLeave ? '<button class="main" data-action="takeoff">ПОДТВЕРДИТЬ ЭВАКУАЦИЮ</button>' : '') +
        '</div>' +
      '</div>';
    root.className = 'open confirm';
    fit();
  }
  function closeConfirm(confirmed) {
    var done = pending;
    pending = null;
    root.className = '';
    if (done) done(confirmed);
  }

  return { show: show, confirmEvacuation: confirmEvacuation, get open() { return root.className.indexOf('open') >= 0; } };
})();
