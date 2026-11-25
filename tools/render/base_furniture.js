// Обстановка помещений базы по плану модернизации (tools/base/plan_v2.py). Координаты — клетки плана (x — col, y — row
// до сдвига на поле карты). place(kind, x, y, cols, rows, extra) кладёт предмет; extra.face — к какой стороне предмет
// обращён спиной (у стены — к этой стене). Клетки дверей и ворот и проходы к ним остаются свободными.
// Модели: furniture.js (мебель и оборудование), galley.js (камбуз), outpost_scene.js (ящики, стеллажи, пульты и т.п.).

// каюта: мебель задаётся в рамке «от двери»: u — вдоль стены с дверью (0 — левый угол, если стоять в дверях лицом
// внутрь… для простоты — от меньшего x или y), v — от дальней стены (0) к двери; front — сторона двери
function roomFrame(room, front) {
  const across = front === 'N' || front === 'S' ? room.width : room.height;
  const depth = front === 'N' || front === 'S' ? room.height : room.width;
  const back = { N: 'S', S: 'N', W: 'E', E: 'W' }[front];
  const left = front === 'N' || front === 'S' ? 'W' : 'N', right = front === 'N' || front === 'S' ? 'E' : 'S';
  const faces = { back, front, left, right };
  // клетка рамки (u, v) и размер (alongU, alongV) -> клетка плана и размер
  const cell = (u, v, alongU = 1, alongV = 1) => {
    if (front === 'S') return [room.x + u, room.y + v, alongU, alongV];
    if (front === 'N') return [room.x + u, room.y + room.height - v - alongV, alongU, alongV];
    if (front === 'E') return [room.x + v, room.y + u, alongV, alongU];
    return [room.x + room.width - v - alongV, room.y + u, alongV, alongU];
  };
  return { across, depth, faces, cell, level: room.floor || 0 };
}

export function furnishBase(plan, place) {
  const doorOf = (room) => plan.doors.find((door) => door.size === 1 && (door.floor || 0) === (room.floor || 0) &&
    door.x >= room.x && door.x < room.x + room.width && door.y >= room.y && door.y < room.y + room.height);
  const put = (frame, kind, u, v, alongU, alongV, face, extra = {}) => {
    const [x, y, cols, rows] = frame.cell(u, v, alongU, alongV);
    place(kind, x, y, cols, rows, { face: frame.faces[face] || face, level: frame.level, ...extra });
  };
  const BLANKETS = ['64,82,110', '110,64,58', '70,96,70', '120,100,60', '80,70,110'];

  // ---------- каюты ----------
  plan.rooms.filter((room) => room.zone === 'living' && room.kind !== 'corridor' && room.name.startsWith('Каюта') || room.kind === 'single').forEach((room, index) => {
    const door = doorOf(room);
    const frame = roomFrame(room, door.side);
    const blanket = BLANKETS[index % BLANKETS.length];
    if (room.kind === 'single') {
      // 3×4: кровать у левой стены изголовьем к дальней, тумбочка, стол с креслом и шкаф у правой стены
      put(frame, 'bed', 0, 0, 1, 2, 'back', { color: blanket });
      put(frame, 'nightstand', 0, 2, 1, 1, 'left');
      put(frame, 'deskChair', 2, 0, 1, 1, 'right', { seed: index });
      put(frame, 'wardrobe', 2, 3, 1, 1, 'right');
      if (room.name === 'Командир базы') put(frame, 'safe', 2, 1, 1, 1, 'right');
      else put(frame, 'shelf', 2, 1, 1, 1, 'right');
      return;
    }
    // двухместная 4×4 (угловая 5×4): кровати у боковых стен, тумбочки, стол на двоих у дальней стены, шкафы у двери
    const last = frame.across - 1;
    put(frame, 'bed', 0, 0, 1, 2, 'back', { color: blanket });
    put(frame, 'bed', last, 0, 1, 2, 'back', { color: BLANKETS[(index + 2) % BLANKETS.length] });
    put(frame, 'nightstand', 0, 2, 1, 1, 'left');
    put(frame, 'nightstand', last, 2, 1, 1, 'right');
    put(frame, 'cabinTable', 1, 0, 2, 1, 'back');
    put(frame, 'wardrobe', 0, 3, 1, 1, 'left');
    put(frame, 'wardrobe', last, 3, 1, 1, 'right');
    if (frame.across === 5) put(frame, 'shelf', 3, 0, 1, 1, 'back');
  });

  // ---------- ангар ----------
  place('liftPlatform', 0, 0, 20, 20, { blocks: false });
  place('barrels', 20, 0); place('barrels', 21, 0); place('generator', 22, 0, 2, 2);          // заправка
  place('crate', 20, 2); place('crate', 21, 2); place('console', 23, 3);                        // пульт подъёмника
  place('crate', 22, 14); place('crate', 23, 14); place('crate', 23, 15); place('rack', 20, 15); // боеприпасы, запчасти
  // КПП у шлюза ангара: пульт, стол, шкафчик (дверь в шлюз — восточная стена, клетка 23,18)
  place('console', 20, 17, 1, 1); place('console', 21, 17, 1, 1); place('deskChair', 20, 19, 1, 1, { face: 'S', seed: 3 }); place('locker', 22, 19);

  // ---------- промышленная зона ----------
  // цех: стенд K7 посередине, станки и верстаки у северной стены, стеллажи у восточной
  place('repairStand', 31, 8, 4, 4, { blocks: false });
  place('machineTool', 30, 5, 2, 1, { face: 'N' }); place('machineTool', 32, 5, 2, 1, { face: 'N' });
  place('desk', 36, 5, 2, 1); place('rack', 37, 7); place('rack', 37, 8); place('rack', 37, 12);
  place('crate', 36, 13); place('crate', 37, 13); place('generator', 34, 13, 2, 2); place('console', 27, 5);
  // склад материалов
  for (const x of [27, 29, 30, 31, 32]) place('rack', x, 0);
  place('crate', 30, 2); place('crate', 31, 2); place('crate', 32, 2); place('crate', 32, 3); place('crate', 27, 3);
  // мастерская
  place('desk', 33, 0, 2, 1); place('machineTool', 36, 0, 2, 1, { face: 'N' }); place('rack', 37, 2); place('rack', 37, 3); place('cabinet', 33, 3);
  // грузовой лифт, приёмка, общий склад (ворота посередине, 39–41)
  place('liftPlatform', 38, 0, 5, 5, { blocks: false }); place('crate', 42, 0);
  place('crate', 38, 5); place('crate', 42, 5); place('crate', 42, 6); place('crate', 38, 9); place('console', 38, 7, 1, 1);
  for (const y of [10, 11, 12, 13]) { place('rack', 38, y); place('rack', 42, y); }
  place('crate', 38, 14); place('crate', 42, 14);
  // электроника, запчасти K7
  place('instrumentRack', 27, 17, 1, 1, { face: 'W', seed: 2 }); place('desk', 30, 19, 2, 1); place('console', 32, 18); place('labTable', 27, 19, 2, 1); place('cabinet', 31, 17);
  for (const x of [41, 42]) { place('rack', x, 17); place('rack', x, 19); }
  place('crate', 37, 19); place('crate', 38, 19); place('crate', 37, 17);

  // ---------- жизнеобеспечение ----------
  place('console', 49, 0); place('console', 50, 0); place('console', 51, 0); place('deskChair', 51, 3, 1, 1, { face: 'E', seed: 5 }); place('cabinet', 48, 3);
  place('liftPlatform', 53, 0, 3, 3, { blocks: false }); place('console', 52, 3);
  place('generator', 50, 4, 2, 2); place('generator', 53, 4, 2, 2); place('cabinet', 55, 6); place('cabinet', 55, 7); place('cabinet', 55, 8); place('instrumentRack', 50, 8, 1, 1, { face: 'S' });
  place('acUnit', 50, 9, 2, 1); place('acUnit', 53, 9, 2, 1); place('acUnit', 50, 12, 2, 1); place('acUnit', 53, 12, 2, 1); place('barrels', 55, 11);
  place('tank', 50, 14, 2, 3); place('tank', 53, 14, 2, 3); place('barrels', 55, 18); place('barrels', 55, 19); place('console', 50, 19);

  // ---------- военная зона ----------
  // командный центр: пульты вдоль северной и западной стен, стол-карта, экран
  for (const x of [1, 2, 3, 5, 6, 7]) place('console', x, 23);
  place('console', 0, 25, 1, 1); place('console', 0, 26, 1, 1);
  place('commandTable', 3, 25, 2, 2, { face: 'N' }); place('wallScreen', 8, 25, 1, 2, { face: 'E', seed: 4 });
  place('deskChair', 8, 27, 1, 1, { face: 'E', seed: 6 });
  // брифинг: экран у северной стены, два ряда кресел
  place('wallScreen', 10, 23, 3, 1, { face: 'N', seed: 7 });
  place('chairRow', 10, 25, 3, 1, { face: 'S' }); place('chairRow', 10, 26, 3, 1, { face: 'S' });
  // снаряжение: шкафчики у северной и западной стен, скамья
  for (const x of [14, 15, 17, 18, 19]) place('locker', x, 23);
  place('locker', 14, 24); place('locker', 14, 25); place('locker', 14, 26); place('bench', 16, 25, 3, 1, { face: 'N' });
  // узел связи
  place('console', 21, 23); place('console', 22, 23); place('console', 23, 23);
  place('instrumentRack', 23, 25, 1, 1, { face: 'E', seed: 3 }); place('instrumentRack', 23, 26, 1, 1, { face: 'E', seed: 5 }); place('cabinet', 23, 27);
  // дежурная часть
  place('console', 20, 36, 1, 1); place('console', 21, 36, 1, 1); place('console', 22, 36, 1, 1);
  place('deskChair', 23, 33, 1, 1, { face: 'E', seed: 8 }); place('wallScreen', 20, 33, 1, 2, { face: 'W', seed: 2 }); place('locker', 23, 35);
  // оружейная: стойки вдоль западной и южной стен, верстак
  for (const y of [32, 33, 34, 35]) place('gunRack', 0, y, 1, 1, { face: 'W' });
  for (const x of [1, 2, 4, 5]) place('gunRack', x, 36, 1, 1, { face: 'S' });
  place('desk', 5, 32, 2, 1); place('locker', 6, 34); place('locker', 6, 35);
  // склад боеприпасов (бетонные стены): ящики по сторонам от прохода
  for (const x of [8, 9, 11, 12]) for (const y of [32, 33, 35]) place('crate', x, y);
  // мастерская оружейника
  place('desk', 14, 33, 1, 2); place('machineTool', 14, 36, 2, 1, { face: 'S' }); place('gunRack', 19, 33, 1, 1, { face: 'E' }); place('gunRack', 19, 34, 1, 1, { face: 'E' });
  place('labTable', 17, 35, 2, 1); place('cabinet', 19, 36);

  // ---------- лаборатории ----------
  place('deskChair', 27, 23, 1, 1, { face: 'N', seed: 1 }); place('deskChair', 28, 23, 1, 1, { face: 'N', seed: 2 });
  place('deskChair', 30, 23, 1, 1, { face: 'N', seed: 3 }); place('deskChair', 31, 23, 1, 1, { face: 'N', seed: 4 });
  place('shelf', 32, 24, 1, 1, { face: 'E' }); place('shelf', 32, 25, 1, 1, { face: 'E' });
  for (const x of [37, 38, 40, 41, 42]) place('instrumentRack', x, 23, 1, 1, { face: 'N', seed: x });
  place('labTable', 41, 25, 2, 1);
  // химико-аналитическая
  place('fumeHood', 27, 30, 1, 1, { face: 'W' }); place('fumeHood', 27, 31, 1, 1, { face: 'W' }); place('fumeHood', 27, 33, 1, 1, { face: 'W' });
  place('labTable', 29, 31, 1, 2); place('instrumentRack', 31, 30, 1, 1, { face: 'E', seed: 6 }); place('instrumentRack', 31, 31, 1, 1, { face: 'E', seed: 7 });
  place('cabinet', 27, 35); place('cabinet', 28, 36); place('freezer', 31, 36, 1, 1, { face: 'S' });
  // ксенобиологическая
  place('bioCabinet', 32, 30, 1, 1, { face: 'W' }); place('bioCabinet', 32, 31, 1, 1, { face: 'W' });
  place('opTable', 34, 32, 1, 2, { face: 'N' }); place('medCart', 35, 32, 1, 1, { face: 'E' });
  place('labTable', 37, 30, 1, 2); place('specimenTank', 36, 35); place('specimenTank', 37, 35); place('freezer', 32, 35, 1, 1, { face: 'W' }); place('freezer', 32, 36, 1, 1, { face: 'W' });
  // физическая
  place('testRig', 39, 32, 2, 2, { face: 'N' }); place('instrumentRack', 42, 30, 1, 1, { face: 'E', seed: 8 }); place('instrumentRack', 42, 31, 1, 1, { face: 'E', seed: 9 });
  place('instrumentRack', 42, 34, 1, 1, { face: 'E', seed: 10 }); place('labTable', 38, 30, 1, 2); place('desk', 38, 36, 2, 1);

  // ---------- изолятор образцов ----------
  place('console', 52, 23); place('console', 53, 23); place('console', 54, 23); place('wallScreen', 55, 24, 1, 2, { face: 'E', seed: 5 });
  for (const [x, y] of [[51, 28], [53, 28], [55, 28], [51, 31], [53, 31], [55, 31], [52, 34], [54, 35]]) place('specimenTank', x, y);
  place('cabinet', 55, 27); place('freezer', 55, 33, 1, 1, { face: 'E' });

  // ---------- медицинская ----------
  place('medBed', 0, 41, 1, 2, { face: 'W', monitor: false }); place('deskChair', 4, 40, 1, 1, { face: 'N', seed: 2 }); place('cabinet', 4, 42);
  for (const x of [5, 7, 8]) place('cabinet', x, 40);
  place('medBed', 8, 41, 1, 2, { face: 'E', monitor: false });
  place('deskChair', 11, 40, 1, 1, { face: 'N', seed: 9 }); place('cabinet', 12, 40); place('shelf', 9, 40, 1, 1, { face: 'N' }); place('medBed', 12, 41, 1, 2, { face: 'E', monitor: false });
  // операционная: стол посередине, наркозный аппарат, шкафы
  place('opTable', 2, 47, 1, 2, { face: 'N' }); place('medCart', 3, 47, 1, 1, { face: 'E' }); place('medCart', 1, 49, 1, 1, { face: 'W' });
  place('cabinet', 0, 46); place('cabinet', 1, 46); place('cabinet', 0, 50);
  // реанимация и палаты интенсивной терапии: функциональные кровати изголовьем к стене
  for (const y of [51, 53, 55]) place('medBed', 0, y, 2, 1, { face: 'W' });
  place('cabinet', 5, 51);
  place('medBed', 11, 46, 2, 1, { face: 'E' }); place('medBed', 11, 48, 2, 1, { face: 'E' }); place('medCart', 12, 50, 1, 1, { face: 'E' }); place('cabinet', 8, 46);
  for (const y of [51, 53, 55]) place('medBed', 11, y, 2, 1, { face: 'E' });

  // ---------- бытовая ----------
  // столовая: четыре стола по четыре места, раздача у камбуза, диваны у южной стены
  place('diningTable', 16, 41, 2, 2, { face: 'N' }); place('diningTable', 21, 41, 2, 2, { face: 'N' });
  place('diningTable', 16, 43, 2, 2, { face: 'N' }); place('diningTable', 21, 43, 2, 2, { face: 'N' });
  place('servingCounter', 23, 40, 1, 1, { face: 'E' }); place('servingCounter', 23, 41, 1, 1, { face: 'E' });
  place('sofa', 16, 46, 2, 1, { face: 'S' }); place('sofa', 21, 46, 2, 1, { face: 'S', color: '70,84,96' });
  place('wallScreen', 16, 40, 2, 1, { face: 'N', seed: 6 });
  // камбуз 4×5 (столбцы 24–27, ряды 40–44): дверь из столовой — в клетке 24,42, в продсклад — 25,44
  place('galleyFloor', 24, 40, 4, 5, { blocks: false, drain: [3.6, 1.4, 3.7, 5.8] });
  place('galleyCounter', 24, 40, 1, 1, { face: 'N', variant: 'drawers', upper: true });
  place('galleyRange', 25, 40, 1, 1, { face: 'N' });
  place('galleyCounter', 26, 40, 1, 1, { face: 'N', variant: 'doors', upper: true });
  place('galleyFridge', 27, 40, 1, 1, { face: 'N' });
  place('galleyCounter', 27, 41, 1, 1, { face: 'E', variant: 'sink2' });
  place('galleyCounter', 27, 42, 1, 1, { face: 'E', variant: 'drawers' });
  place('galleyCounter', 27, 43, 1, 1, { face: 'E', variant: 'microwave' });
  place('galleyCounter', 27, 44, 1, 1, { face: 'S', variant: 'grinder' });
  place('galleyCounter', 26, 44, 1, 1, { face: 'S', variant: 'doors' });
  place('galleyIsland', 26, 41, 1, 2);
  // продсклад
  place('rack', 24, 46); place('rack', 26, 46); place('rack', 27, 46); place('crate', 27, 45);
  // санблоки: умывальники у северной стены, душевые у одной боковой, кабинки туалетов у другой
  for (const x of [16, 17, 19, 20, 21]) place('washbasin', x, 49, 1, 1, { face: 'N' });
  for (const y of [51, 52, 53, 54, 55]) { place('showerCabin', 16, y, 1, 1, { face: 'W' }); place('toilet', 21, y, 1, 1, { face: 'E' }); }
  place('bench', 18, 52, 1, 3, { face: 'W' });
  for (const x of [22, 23, 25]) place('washbasin', x, 49, 1, 1, { face: 'N' });
  for (const y of [50, 51, 52]) place('showerCabin', 27, y, 1, 1, { face: 'E' });
  place('toilet', 22, 51, 1, 1, { face: 'W' }); place('toilet', 22, 52, 1, 1, { face: 'W' });
  // прачечная
  for (const x of [25, 26, 27]) place('washer', x, 55, 1, 1, { face: 'S' });
  place('washer', 22, 55, 1, 1, { face: 'S' }); place('labTable', 27, 53, 1, 1); place('rack', 22, 53);

  // ---------- второй уровень жилой зоны (уровень 1) ----------
  const up = { level: 1 };
  // кинозал: экран у западной стены, ряды кресел лицом к нему (проход посередине и у дверей), проектор у восточной стены
  place('cinemaScreen', 31, 42, 1, 6, { ...up, face: 'W' });
  for (const x of [34, 36, 38, 40]) { place('cinemaSeats', x, 41, 1, 4, { ...up, face: 'E' }); place('cinemaSeats', x, 46, 1, 3, { ...up, face: 'E' }); }
  place('projector', 42, 40, 1, 1, { ...up, face: 'E' });
  // фойе: диван, автомат с напитками, растения
  place('sofa', 43, 40, 2, 1, { ...up, face: 'N', color: '70,84,96' }); place('vendingMachine', 45, 40, 1, 1, { ...up, face: 'N' });
  place('pottedTree', 43, 48, 1, 1, up); place('pottedTree', 45, 48, 1, 1, up); place('pottedTree', 45, 46, 1, 1, up);
  // оранжерея: стеллажи гидропоники у северной стены, грядки, деревья в кадках, фонтан со скамьями
  for (const x of [47, 48, 50, 51, 52, 53]) place('hydroponicRack', x, 40, 1, 1, { ...up, face: 'N' });
  place('pottedTree', 46, 40, 1, 1, up); place('pottedTree', 55, 40, 1, 1, up); place('pottedTree', 46, 48, 1, 1, up); place('pottedTree', 55, 48, 1, 1, up);
  place('planter', 47, 42, 2, 1, { ...up, face: 'N' }); place('planter', 52, 42, 2, 1, { ...up, face: 'N' });
  place('planter', 47, 47, 2, 1, { ...up, face: 'S' }); place('planter', 51, 47, 2, 1, { ...up, face: 'S' });
  place('planter', 55, 42, 1, 2, { ...up, face: 'E' }); place('planter', 55, 45, 1, 2, { ...up, face: 'E' });
  place('fountain', 50, 44, 2, 2, up);
  place('bench', 50, 43, 2, 1, { ...up, face: 'N' }); place('bench', 50, 46, 2, 1, { ...up, face: 'S' }); place('bench', 49, 44, 1, 2, { ...up, face: 'W' });

  // ---------- спортивная ----------
  for (const x of [59, 60, 61]) place('treadmill', x, 40, 1, 2, { face: 'N' });
  for (const [x, y] of [[64, 40], [65, 40], [64, 41], [65, 41]]) place('exerciseBike', x, y, 1, 1, { face: 'N' });
  place('powerRack', 64, 44, 2, 2, { face: 'E' }); place('weightBench', 64, 47, 1, 2, { face: 'N' }); place('dumbbellRack', 65, 47, 1, 2, { face: 'E' });
  place('gymMat', 60, 47, 3, 2, { blocks: false }); place('punchingBag', 63, 50); place('punchingBag', 59, 50); place('wallScreen', 62, 40, 1, 1, { face: 'N', seed: 1 });
  // раздевалка: шкафчики у южной стены, скамья, душевые у северной и восточной
  for (const x of [59, 60, 61, 62, 63]) place('locker', x, 55);
  place('bench', 60, 53, 3, 1, { face: 'N' });
  for (const x of [63, 64, 65]) place('showerCabin', x, 51, 1, 1, { face: 'N' });
  place('showerCabin', 65, 52, 1, 1, { face: 'E' }); place('washbasin', 65, 54, 1, 1, { face: 'E' }); place('washbasin', 65, 55, 1, 1, { face: 'E' });
}
