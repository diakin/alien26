// Хозяйство базы «Ямантау»: персонал (учёные, инженеры), склад (оружие и боеприпасы, имущество, артефакты)
// и снаряжение корабля (экипаж и груз конвертоплана КТ-6). Хранится в браузере (localStorage, ключ aliens26.base.v1)
// и общее для всех страниц: меню базы (basemenu.js) показывает и меняет, задания (game.js) берут экипаж и груз,
// итоги задания (results.js) сдают на склад артефакты и записывают в персонал спасённого учёного.
// Экономики (денег, сроков, расхода) пока нет: груз корабля не тратится и после задания остаётся на борту.
// После задания спасения учёный и дети прилетают на базу и остаются на борту КТ-6 (ship.passengers) до следующего
// вылета, тогда переходят в каюты. Шагающая машина K7 (k7): 'ready' — на базе, 'lost' — погибла или брошена на
// задании, 'building' — цех собирает новую (заказ в «Снарядить корабль», расходует комплект запчастей K7),
// готова после следующего задания: сроков в игре пока нет, сборка идёт, пока отряд на вылете.
var BaseStore = (function () {
  'use strict';
  var KEY = window.Demo ? Demo.storageKey('aliens26.base.v1') : 'aliens26.base.v1';    // в демо — своё хранилище (js/demo.js)
  var VERSION = 3;                    // 2 — база по плану модернизации (tools/base/plan_v2.py); 3 — обслуживающий персонал, каюты 13–18 на втором уровне
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
  function staff(list, chiefCabin, cabins) {
    return list.map(function (entry, index) {
      return { name: entry[0], specialty: entry[1], workplace: entry[2], cabin: index === 0 ? chiefCabin : 'Каюта ' + cabins[Math.floor((index - 1) / 2)] };
    });
  }
  // обслуживающий персонал: каюты 13–16 на втором уровне жилой зоны; 17 и 18 — резерв для спасённых
  var SUPPORT = [
    ['Анна Белова', 'повар', 'Камбуз', 'Каюта 13'], ['Сергей Котов', 'повар', 'Камбуз', 'Каюта 13'],
    ['Людмила Рябова', 'уборка помещений', 'Прачечная', 'Каюта 14'], ['Николай Гусев', 'уборка помещений', 'Прачечная', 'Каюта 14'],
    ['Ольга Дёмина', 'медсестра', 'Процедурная, аптека', 'Каюта 15'],
    ['Виталий Сомов', 'электрик', 'Энергоцентр', 'Каюта 16'], ['Игорь Лаптев', 'сантехник', 'Водоснабжение', 'Каюта 16']
  ];
  // комсостав, врачи и дежурная смена из резерва отряда (состав постоянный, в хранилище не пишется)
  var COMMAND = [
    ['Виктор Ларин', 'командир базы, полковник', 'Командный центр', 'Командир базы', 'commander'],
    ['Олег Карпов', 'начальник штаба, подполковник', 'Командный центр', 'Нач. штаба', 'commander'],
    ['Максим Зуев', 'командир отряда, майор', 'Брифинг', 'Ком. отряда', 'commander'],
    ['Евгений Ростов', 'главный врач', 'Кабинет врача', 'Гл. врач', 'doctor'],
    ['Константин Ветлугин', 'хирург', 'Операционная', 'Хирург', 'surgeon'],
    ['Андрей Сухов', 'дежурный офицер по базе', 'Дежурная часть', 'Каюта 4', 'officer'],
    ['Павел Рыжов', 'помощник дежурного', 'Дежурная часть', 'Каюта 4', 'officer'],
    ['Тимур Галиев', 'часовой КПП', 'КПП', 'Каюта 5', 'officer'],
    ['Денис Орехов', 'дежурный по оружейной', 'Оружейная', 'Каюта 5', 'officer']
  ];
  // вид спрайта (tools/render/civilian.js, набор civ<вид>) по имени; спасённые учёные — в белом халате
  var LOOKS = {
    'Глеб Ветров': 'scientist', 'Алла Миронова': 'labwoman', 'Виктор Ганиев': 'hazmat', 'Елена Крутова': 'labwoman',
    'Павел Орлов': 'scientist', 'Мария Тихонова': 'labwoman', 'Роман Ясин': 'scientist', 'Нина Сафарова': 'hazmat',
    'Степан Лунёв': 'engineer', 'Иван Кравец': 'engineer', 'Олеся Брагина': 'engineerw', 'Дмитрий Шульга': 'engineer',
    'Артём Зимин': 'engineer', 'Карина Ли': 'engineerw', 'Фёдор Макаров': 'engineer', 'Юрий Пахомов': 'engineer',
    'Анна Белова': 'cookw', 'Сергей Котов': 'cook', 'Людмила Рябова': 'cleaner', 'Николай Гусев': 'cleanerm',
    'Ольга Дёмина': 'nurse', 'Виталий Сомов': 'electrician', 'Игорь Лаптев': 'plumber'
  };
  function commandStaff() { return COMMAND.map(function (entry) { return { name: entry[0], specialty: entry[1], workplace: entry[2], cabin: entry[3], look: entry[4] }; }); }
  // все, кто живёт на базе, кроме бойцов отряда: для меню и для фигур на карте базы (game.js)
  function people() {
    var list = commandStaff();
    [state.scientists, state.engineers, state.support || []].forEach(function (group) {
      group.forEach(function (person) {
        if (person.aboard) return;                          // ещё на борту КТ-6 — фигура в салоне (passengers)
        list.push({ name: person.name, specialty: person.specialty, workplace: person.workplace, cabin: person.cabin, look: LOOKS[person.name] || 'scientist' }); });
    });
    return list;
  }
  function supportStaff() { return SUPPORT.map(function (entry) { return { name: entry[0], specialty: entry[1], workplace: entry[2], cabin: entry[3] }; }); }
  // каюта для спасённого: резервные 17 и 18 по двое, дальше — свободное место в каюте 9 у учёных
  function rescueCabin(people) {
    var used = function (cabin) { return people.filter(function (person) { return person.cabin === cabin; }).length; };
    return used('Каюта 17') < 2 ? 'Каюта 17' : used('Каюта 18') < 2 ? 'Каюта 18' : 'Каюта 9';
  }
  // имущество — то, что не берут в руки на задании (учёт без предметов в инвентаре)
  var PROPERTY = [
    ['Бронежилет 6Б-45', 'шт.', 8], ['Шлем с ПНВ', 'шт.', 8], ['Рация Р-187', 'шт.', 10], ['Лента АП-30 (40 снарядов)', 'шт.', 6],
    ['Запчасти K7, комплект', 'шт.', 3], ['Топливо КТ-6', 'т', 12], ['Сухой паёк', 'сут.', 240], ['Генератор резервный', 'шт.', 1]
  ];
  function defaults() {
    return {
      version: VERSION,
      scientists: staff(SCIENTISTS, 'Гл. учёный', [6, 7, 8, 9]),
      engineers: staff(ENGINEERS, 'Гл. инженер', [10, 11, 12, 19]),
      support: supportStaff(),
      store: { carbine: 4, carbineM: 2, carbineMag: 40, grenade: 16, medkit: 8 },
      property: PROPERTY.map(function (entry) { return { name: entry[0], unit: entry[1], count: entry[2] }; }),
      artifacts: [],                   // [{ name, count, from }]
      ship: { configured: false, crew: [], mech: true, cargo: {}, passengers: [] },
      k7: 'ready',
      log: []                          // события: сданы артефакты, прибыл учёный
    };
  }
  var state = load();
  function load() {
    try {
      var saved = JSON.parse(window.localStorage.getItem(KEY) || 'null');
      if (saved && saved.version === VERSION) return saved;
      // база прежнего плана (1) или без второго уровня жилой зоны (2): склад, артефакты и корабль остаются,
      // персонал по новым помещениям, спасённые — в резервные каюты 17 и 18
      if (saved && (saved.version === 1 || saved.version === 2)) {
        var fresh = defaults();
        ['store', 'property', 'artifacts', 'ship', 'log', 'received'].forEach(function (key) { if (saved[key] !== undefined) fresh[key] = saved[key]; });
        (saved.scientists || []).forEach(function (person) {
          if (person.rescued) fresh.scientists.push({ name: person.name, specialty: person.specialty, workplace: 'Ксенобиологическая', cabin: rescueCabin(fresh.scientists), rescued: true });
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
    // кто прилетел: позывные бойцов и K7 — для финального кадра демо (бойцы на рампе КТ-6)
    state.arrival = { crew: (summary.soldiersHome || []).slice(), mech: !!summary.robotHome, map: summary.map };
    var rescue = summary.rescue;
    if (rescue && rescue.vipRescued && rescue.vip && !state.scientists.some(function (person) { return person.name === rescue.vip.name; })) {
      state.scientists.push({ name: rescue.vip.name, specialty: 'исследования пришельцев', workplace: 'Ксенобиологическая', cabin: rescueCabin(state.scientists), rescued: true, aboard: true });
      state.log.push('Прибыл учёный: ' + rescue.vip.name);
    }
    // на борт: учёный и спасённые дети — до следующего вылета стоят в салоне КТ-6 на базе
    if (rescue) {
      state.ship.passengers = state.ship.passengers || [];
      (rescue.civiliansRescued || []).forEach(function (person) {
        if (!person.vip && !person.child) return;
        if (state.ship.passengers.some(function (passenger) { return passenger.name === person.name; })) return;
        state.ship.passengers.push({ name: person.name, look: person.look || (person.child ? 'boy' : 'scientist'), child: !!person.child, vip: !!person.vip });
      });
      var children = (rescue.civiliansRescued || []).filter(function (person) { return person.child; }).length;
      if (children) state.log.push('Прибыли дети: ' + children);
    }
    save();
  }
  // K7 в итогах задания: погиб или остался на месте эвакуации — машины на базе больше нет; заказанная — собрана
  function receiveMech(summary) {
    if (!summary || !summary.run) return;
    state.mechRuns = state.mechRuns || [];
    if (state.mechRuns.indexOf(summary.run) >= 0) return;
    state.mechRuns = state.mechRuns.concat([summary.run]).slice(-20);
    if (state.k7 === 'building') { state.k7 = 'ready'; state.log.push('Цех: собрана новая K7'); }
    else if ((summary.robotsLost || []).length || (summary.robotsLeft || []).length) {
      state.k7 = 'lost'; state.ship.mech = false;
      state.log.push('K7 потеряна: ' + (summary.robotsLost && summary.robotsLost.length ? 'уничтожена' : 'брошена') + ' (' + summary.map + ')');
    }
    save();
  }
  function mechState() { return state.k7 || 'ready'; }
  // заказ новой K7 в цехе: нужен комплект запчастей на складе имущества
  function orderMech() {
    if (mechState() !== 'lost') return false;
    var parts = state.property.filter(function (entry) { return entry.name === 'Запчасти K7, комплект'; })[0];
    if (!parts || parts.count < 1) return false;
    parts.count--;
    state.k7 = 'building';
    state.log.push('Цех: начата сборка K7');
    save();
    return true;
  }
  // вылет: пассажиры с прошлого рейса переходят в каюты (учёный — на рабочее место), борт свободен
  function disembark() {
    if (!(state.ship.passengers || []).length && !state.scientists.some(function (person) { return person.aboard; })) return;
    state.ship.passengers = [];
    state.scientists.forEach(function (person) { delete person.aboard; });
    save();
  }
  function reset() { state = defaults(); save(); }

  return {
    get state() { return state; }, SHIP_SEATS: SHIP_SEATS, SHIP_CAPACITY: SHIP_CAPACITY,
    save: save, cargoWeight: cargoWeight, moveCargo: moveCargo, setCrew: setCrew, receiveMission: receiveMission, receiveMech: receiveMech, reset: reset,
    mechState: mechState, orderMech: orderMech, disembark: disembark,
    commandStaff: commandStaff, people: people
  };
})();
