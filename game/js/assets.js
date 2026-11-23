// Загрузка картинок: очередь с приоритетами и повтор при обрыве.
// По сети одновременно идут только несколько запросов (MAX_ACTIVE), поэтому то, что нужно сейчас
// (фон карты, стойки юнитов на экране), приходит первым, а не в общей очереди из сотен спрайтов.
// Оборванная загрузка повторяется через 1, 2, 4, 8, 15 с, дальше — раз в 30 с.
// Assets.image(путь, приоритет, onReady) — картинка (тот же объект Image и после повторов);
// Assets.want(путь) — нужна прямо сейчас: в начало очереди; Assets.ready(картинка) — загружена и пригодна для drawImage.
var Assets = (function () {
  'use strict';

  var LOCAL = window.location.protocol === 'file:';
  var MAX_ACTIVE = LOCAL ? 24 : 6;
  var RETRY_DELAYS = [1000, 2000, 4000, 8000, 15000];
  var LATE_RETRY = 30000;
  var URGENT = 0;

  var entries = {}, order = 0, active = 0;
  var stats = { total: 0, ready: 0, retries: 0 };

  function ready(image) { return !!image && image.complete && image.naturalWidth > 0; }

  function image(src, priority, onReady) {
    var entry = entries[src];
    if (!entry) {
      entry = entries[src] = { src: src, image: new Image(), state: 'queued', priority: priority === undefined ? 5 : priority,
        order: order++, attempts: 0, listeners: [] };
      stats.total++;
      entry.image.onload = function () { finish(entry, true); };
      entry.image.onerror = function () { finish(entry, false); };
      setTimeout(pump, 0);
    } else if (priority !== undefined && priority < entry.priority) {
      entry.priority = priority;
    }
    if (onReady) {
      if (entry.state === 'ready') onReady(entry.image);
      else entry.listeners.push(onReady);
    }
    return entry.image;
  }

  function want(src) {
    var entry = entries[src];
    if (!entry || entry.state === 'ready') return;
    if (entry.state === 'waiting' && entry.attempts > RETRY_DELAYS.length && Date.now() - entry.failedAt > 5000) {
      // давно не грузится, а нужна сейчас: повторяем, не дожидаясь позднего срока (не чаще раза в 5 с)
      clearTimeout(entry.timer);
      entry.state = 'queued';
      entry.priority = URGENT;
      pump();
    } else if (entry.priority !== URGENT) {
      entry.priority = URGENT;
      pump();
    }
  }

  function start(entry) {
    entry.state = 'loading';
    active++;
    // повтор — с другим адресом, чтобы браузер не взял из кэша ответ с ошибкой
    entry.image.src = entry.attempts ? entry.src + (entry.src.indexOf('?') < 0 ? '?' : '&') + 'retry=' + entry.attempts : entry.src;
  }

  function finish(entry, success) {
    if (entry.state !== 'loading') return;
    active--;
    if (success) {
      entry.state = 'ready';
      stats.ready++;
      var listeners = entry.listeners;
      entry.listeners = [];
      listeners.forEach(function (listener) { listener(entry.image); });
    } else {
      entry.attempts++;
      stats.retries++;
      entry.state = 'waiting';
      entry.failedAt = Date.now();
      var delay = RETRY_DELAYS[entry.attempts - 1] || LATE_RETRY;
      entry.timer = setTimeout(function () { entry.state = 'queued'; pump(); }, delay);
    }
    pump();
  }

  // Срочное (фон карты, кадры юнитов на экране) получает весь канал: пока оно грузится,
  // фоновая очередь не начинает новых загрузок.
  function pump() {
    while (active < MAX_ACTIVE) {
      var best = null, urgentLoading = false;
      for (var src in entries) {
        var entry = entries[src];
        if (entry.state === 'loading' && entry.priority === URGENT) urgentLoading = true;
        if (entry.state !== 'queued') continue;
        if (!best || entry.priority < best.priority || (entry.priority === best.priority && entry.order < best.order)) best = entry;
      }
      if (!best) return;
      if (best.priority !== URGENT && urgentLoading && !LOCAL) return;
      start(best);
    }
  }

  // сколько загружено; waiting — оборвались и ждут повтора
  function progress() {
    var waiting = 0;
    for (var src in entries) if (entries[src].state === 'waiting') waiting++;
    return { total: stats.total, ready: stats.ready, waiting: waiting, retries: stats.retries };
  }

  return { image: image, want: want, ready: ready, progress: progress, URGENT: URGENT };
})();
