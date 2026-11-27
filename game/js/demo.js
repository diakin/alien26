// Демоверсия (game/demo.html): сразу задание «Спасение в городе»; после успеха — перелёт КТ-6 на глобусе
// и финальный кадр на базе «Ямантау»: вернувшиеся бойцы, учёный и дети на рампе конвертоплана.
// Признак демо — параметр demo в адресе страницы, он передаётся дальше по всем переходам (Demo.link).
// У демо своё хранилище базы и памяти пришельцев (Demo.storageKey), сохранения основной игры не трогаются.
var Demo = (function () {
  'use strict';
  function hasParam(name) { return new RegExp('[?&]' + name + '(=|&|$)').test(location.search); }
  var on = hasParam('demo');
  // адрес страницы демо: page — 'city.html', extra — дополнительные параметры ('flight=1')
  function link(page, extra) {
    var joiner = page.indexOf('?') >= 0 ? '&' : '?';
    return page + joiner + 'demo=1' + (extra ? '&' + extra : '');
  }
  // ключ localStorage: в демо — с префиксом aliens26.demo.
  function storageKey(key) { return on ? key.replace(/^aliens26\./, 'aliens26.demo.') : key; }
  // финальный кадр (base.html, вызывает game.js): экран проявляется из чёрного, сверху — плашка конца демо
  function finale() {
    var style = document.createElement('style');
    style.textContent = [
      '#demo-fade { position: fixed; inset: 0; z-index: 70; background: #000; opacity: 1; transition: opacity 2.5s ease-out; pointer-events: none; }',
      '#demo-end { position: fixed; left: 50%; top: 18px; transform: translateX(-50%); z-index: 65; padding: 8px 14px; display: flex; gap: 14px; align-items: center;',
      '  background: rgba(10, 13, 15, 0.82); border: 1px solid #4c6a58; font: bold 12px Arial, sans-serif; letter-spacing: 1px; color: #c8f0a0;',
      '  opacity: 0; transition: opacity 1s; }',
      '#demo-end span { color: #8fb894; font-weight: normal; letter-spacing: 0.5px; }',
      '#demo-end button { background: #12181b; border: 1px solid #e8a33a; color: #ffd28a; font: bold 11px Arial, sans-serif; letter-spacing: 1px; padding: 6px 12px; cursor: pointer; }'
    ].join('\n');
    document.head.appendChild(style);
    var fade = document.createElement('div');
    fade.id = 'demo-fade';
    document.body.appendChild(fade);
    var plate = document.createElement('div');
    plate.id = 'demo-end';
    plate.innerHTML = 'БАЗА «ЯМАНТАУ» · КОНЕЦ ДЕМОВЕРСИИ <span>отряд вернулся с задания</span><button>СЫГРАТЬ СНОВА</button>';
    document.body.appendChild(plate);
    plate.querySelector('button').addEventListener('click', function () { location.href = 'demo.html'; });
    // проявление — после первой загрузки картинки карты, но не позже чем через 4 с
    var started = Date.now();
    (function reveal() {
      var game = window.__game, ready = game && (!game.variantReady || game.variantReady());
      if (!ready && Date.now() - started < 4000) { setTimeout(reveal, 100); return; }
      fade.style.opacity = '0';
      setTimeout(function () { plate.style.opacity = '1'; }, 2200);
      setTimeout(function () { fade.remove(); }, 2700);
    })();
  }
  return {
    on: on,
    finale: finale,
    flight: on && hasParam('flight'),        // глобус: перелёт из города на базу
    arrival: on && hasParam('arrival'),      // база: финальный кадр
    link: link,
    storageKey: storageKey,
    KEYS: ['aliens26.base.v1', 'aliens26.alienIntel.v1']
  };
})();
