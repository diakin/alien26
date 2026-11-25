// Хозяйство базы «Ямантау»: персонал (учёные, инженеры), склад (оружие и боеприпасы, имущество, артефакты)
// и снаряжение корабля (экипаж и груз конвертоплана КТ-6). Хранится в браузере (localStorage, ключ aliens26.base.v1)
// и общее для всех страниц: меню базы (basemenu.js) показывает и меняет, задания (game.js) берут экипаж и груз,
// итоги задания (results.js) сдают на склад артефакты и записывают в персонал спасённого учёного.
// Экономики (денег, сроков, расхода) пока нет: груз корабля не тратится и после задания остаётся на борту.
var BaseStore = (function () {
  'use strict';
  var KEY = 'aliens26.base.v1';
  var VERSION = 2;                    // 2 — база по плану модернизации (tools/base/plan_v2.py): новые помещения и каюты
  var SHIP_SEATS = 6;                 // места в салоне КТ-6, K7 — на рампе отдельно
  var SHIP_CAPACITY = 60;             // груз, единиц веса (вес предметов — Items: магазин 2, граната 3, аптечка 5, карабин 8)

  // учёные и инженеры: специальность, рабочее место; первый в списке — главный (одноместная каюта),
  // остальные живут по двое: учёные в каютах 6–9, инженеры в 10–13 (бойцы — в 1–5)
  var SCIENTISTS = [
    ['Глеб Ветров', 'астрофизика, руководитель', 'Кабинет учёных'], ['Алла Миронова', 'физика плазмы', 'Физическая'],
    ['Виктор Ганиев', 'ксенобиология', 'Ксенобиологическая'], ['Елена Крутова', 'химия материалов', 'Химико-аналитическая'],
    ['Павел Орлов', 'электроника', 'Приборная'], ['Мария Тихонова', 'медицина', 'Ксенобиологическая'],
    ['Роман Ясин', 'криптография сигналов', 'Физическая'], ['Нина Сафарова', 'генетика', 'Ксенобиологическая']
  ];
  var ENGINEERS = [
    ['Степан Лунёв', 'шагающие машины, руководитель', 'Цех (стенд K7)'], ['Иван Кравец', 'вооружение', 'Мастерская оружейника'],
    ['Олеся Брагина', 'электрика', 'Энергоцентр'], ['Дмитрий Шульга', 'механика', 'Мастерская'],
    ['Артём Зимин', 'авионика КТ-6', 'Техполоса'], ['Карина Ли', 'сварка и сплавы', 'Цех (стенд K7)'],
    ['Фёдор Макаров', 'жизнеобеспечение', 'Вентиляция, фильтры'], ['Юрий Пахомов', 'связь', 'Узел связи']
  ];
  function staff(list, chiefCabin, firstCabin) {
    return list.map(function (entry, index) {
      return { name: entry[0], specialty: entry[1], workplace: entry[2], cabin: index === 0 ? chiefCabin : 'Каюта ' + (firstCabin + Math.floor((index - 1) / 2)) };
    });
  }
  // имущество — то, что не берут в руки на задании (учёт без предметов в инвентаре)
  var PROPERTY = [
    ['Бронежилет 6Б-45', 'шт.', 8], ['Шлем с ПНВ', 'шт.', 8], ['Рация Р-187', 'шт.', 10], ['Лента АП-30 (40 снарядов)', 'шт.', 6],
    ['Запчасти K7, комплект', 'шт.', 3], ['Топливо КТ-6', 'т', 12], ['Сухой паёк', 'сут.', 240], ['Генератор резервный', 'шт.', 1]
  ];
  function defaults() {
    return {
      version: VERSION,
      scientists: staff(SCIENTISTS, 'Гл. учёный', 6),
      engineers: staff(ENGINEERS, 'Гл. инженер', 10),
      store: { carbine: 4, carbineM: 2, carbineMag: 40, grenade: 16, medkit: 8 },
      property: PROPERTY.map(function (entry) { return { name: entry[0], unit: entry[1], count: entry[2] }; }),
      artifacts: [],                   // [{ name, count, from }]
      ship: { configured: false, crew: [], mech: true, cargo: {} },
      log: []                          // события: сданы артефакты, прибыл учёный
    };
  }
  var state = load();
  function load() {
    try {
      var saved = JSON.parse(window.localStorage.getItem(KEY) || 'null');
      if (saved && saved.version === VERSION) return saved;
      // база прежнего плана: склад, артефакты и корабль остаются, персонал переезжает в новые помещения
      if (saved && saved.version === 1) {
        var fresh = defaults();
        ['store', 'property', 'artifacts', 'ship', 'log', 'received'].forEach(function (key) { if (saved[key] !== undefined) fresh[key] = saved[key]; });
        saved.scientists.forEach(function (person) {
          if (person.rescued) fresh.scientists.push({ name: person.name, specialty: person.specialty, workplace: 'Ксенобиологическая', cabin: 'Каюта 9', rescued: true });
        });
        return fresh;
      }
    } catch (error) { /* хранилище недоступно (файл открыт без прав) — работаем с исходным составом */ }
    return defaults();
  }
  function save() {
    try { window.localStorage.setItem(KEY, JSON.stringify(state)); } catch (error) { /* без сохранения */ }
  }
  function cargoWeight() {
    return Object.keys(state.ship.cargo).reduce(function (sum, type) { return sum + (window.Items ? Items.info({ type: type }).weight : 0) * state.ship.cargo[type]; }, 0);
  }
  // переложить предмет со склада на борт (count > 0) или обратно (count < 0); false — нельзя
  function moveCargo(type, count) {
    var stock = state.store[type] || 0, aboard = state.ship.cargo[type] || 0;
    if (count > 0 && (stock < count || cargoWeight() + Items.info({ type: type }).weight * count > SHIP_CAPACITY)) return false;
    if (count < 0 && aboard < -count) return false;
    state.store[type] = stock - count;
    state.ship.cargo[type] = aboard + count;
    if (!state.ship.cargo[type]) delete state.ship.cargo[type];
    save();
    return true;
  }
  // экипаж: callsign бойцов в порядке посадки
  function setCrew(callsigns, mech) {
    state.ship.crew = callsigns.slice(0, SHIP_SEATS);
    state.ship.mech = !!mech;
    state.ship.configured = true;
    save();
  }
  // итоги задания: артефакты — на склад, спасённый учёный — в персонал (один раз на задание)
  // summary.run — номер запуска задания (game.js): одно задание сдаётся один раз, даже если окно итогов открыто снова
  function receiveMission(summary) {
    if (!summary || (summary.kind !== 'evac' && summary.kind !== 'cleared')) return;
    state.received = state.received || [];
    if (summary.run && state.received.indexOf(summary.run) >= 0) return;
    if (summary.run) state.received = state.received.concat([summary.run]).slice(-20);
    (summary.artifacts || []).forEach(function (item) {
      var existing = state.artifacts.filter(function (entry) { return entry.name === item.name; })[0];
      if (existing) { existing.count += item.count; existing.from = summary.map; }
      else state.artifacts.push({ name: item.name, count: item.count, from: summary.map });
    });
    if (summary.artifacts && summary.artifacts.length) state.log.push('Сданы артефакты: ' + summary.map);
    var rescue = summary.rescue;
    if (rescue && rescue.vipRescued && rescue.vip && !state.scientists.some(function (person) { return person.name === rescue.vip.name; })) {
      state.scientists.push({ name: rescue.vip.name, specialty: 'исследования пришельцев', workplace: 'Ксенобиологическая', cabin: 'Каюта 9', rescued: true });
      state.log.push('Прибыл учёный: ' + rescue.vip.name);
    }
    save();
  }
  function reset() { state = defaults(); save(); }

  return {
    get state() { return state; }, SHIP_SEATS: SHIP_SEATS, SHIP_CAPACITY: SHIP_CAPACITY,
    save: save, cargoWeight: cargoWeight, moveCargo: moveCargo, setCrew: setCrew, receiveMission: receiveMission, reset: reset
  };
})();
