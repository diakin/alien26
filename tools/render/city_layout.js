// Центр города (MAP=city): поле 96×96 клеток (120 × 120 м), задание «Спасение в городе».
// План — docs/city/city.md. Север (row 0) — квартал с банком, проспект посередине (row 31..48), юг — жилой квартал,
// фонтан и площадка конвертоплана. Здания — классические: оштукатуренные или каменные этажи, карниз, крыша
// (черепичная вальмовая у домов и полиции, мансарда со слуховыми окнами и фронтоном у банка) — такая крыша не проходима.
// У школы (к востоку от детской площадки) и у дома напротив неё через проспект — плоские крыши с выходом по лестнице:
// у школы по краю — сетка в рост человека, у дома — парапет.
//
// Поверхности земли: SURFACE (код в layout.surface[row][col]); разметка проезжей части — layout.marking[row][col]
// (строка: 'dash' — прерывистая осевая по северной грани клетки, 'zebra' — переход, 'stop' — стоп-линия по северной грани).

export const SURFACE = { dirt: 0, asphalt: 1, sidewalk: 2, grass: 3, path: 4, paving: 5, sand: 6 };

// стиль фасада: стена этажа получает стиль `<фасад>_<роль>`, роль — g (первый этаж), u (средний), t (верхний, под карнизом)
export const FACADES = ['ochre', 'cream', 'green', 'pink', 'bank', 'police', 'school'];

export function buildCity(api) {
  const { TILES, LEVEL_H, FLOOR, setFloor, setIndoor, setW, setN, object, building, stairRun, tiltrotor, block, surface, marking, floorStyle } = api;

  const fillSurface = (col0, row0, col1, row1, code) => {
    for (let row = Math.max(0, row0); row <= Math.min(TILES - 1, row1); row++) for (let col = Math.max(0, col0); col <= Math.min(TILES - 1, col1); col++) surface[row][col] = code;
  };
  const diskSurface = (centerCol, centerRow, radius, code) => {
    for (let row = 0; row < TILES; row++) for (let col = 0; col < TILES; col++) {
      if (Math.hypot(col + 0.5 - centerCol, row + 0.5 - centerRow) <= radius) surface[row][col] = code;
    }
  };
  const roleOf = (level, levels) => (level === 0 ? 'g' : level === levels - 1 ? 't' : 'u');
  const facade = (style, level, levels) => `${style}_${roleOf(level, levels)}`;

  // ---------------- поверхности ----------------
  fillSurface(0, 0, TILES - 1, TILES - 1, SURFACE.grass);
  fillSurface(0, 27, TILES - 1, 30, SURFACE.sidewalk);           // тротуар северный
  fillSurface(0, 31, TILES - 1, 48, SURFACE.asphalt);            // проспект: 18 клеток, по 2 полосы в каждую сторону
  fillSurface(0, 49, TILES - 1, 52, SURFACE.sidewalk);           // тротуар южный
  for (let col = 0; col < TILES; col++) if (col % 4 < 2 && (col < 44 || col > 48)) marking[40][col] = 'dash';   // осевая
  for (let row = 31; row <= 48; row++) for (let col = 44; col <= 48; col++) marking[row][col] = 'zebra';                 // переход к фонтану

  // ---------------- дом: этажи, фасад, лестница «ножницами», комнаты, крыша ----------------
  // door: 'S' — парадная на юг (к большим row), 'N' — на север. Возвращает описание дома.
  // options.flatRoof: 'mesh' — плоская крыша с сеткой по краю (школа), 'parapet' — с парапетом; лестница выходит на крышу.
  // options.furnish: false — без мебели, 'classroom' — классы (парты, доска), иначе — жилые комнаты.
  function house(name, col0, row0, col1, row1, levels, style, door, options = {}) {
    const placed = building({ name, col0, row0, col1, row1, levels, style });
    for (let level = 0; level < levels; level++) {
      setIndoor(level, col0, row0, col1, row1);
      if (level > 0) setFloor(level, col0, row0, col1, row1, FLOOR.interior);
      for (let row = row0; row <= row1; row++) for (let col = col0; col <= col1; col++) floorStyle[level][row][col] = options.floor || 'parquet';
      const walls = facade(style, level, levels);
      for (let row = row0; row <= row1; row++) { setW(level, col0, row, 'wall', walls); setW(level, col1 + 1, row, 'wall', walls); }
      for (let col = col0; col <= col1; col++) { setN(level, col, row0, 'wall', walls); setN(level, col, row1 + 1, 'wall', walls); }
      // окна через клетку; угловые клетки и простенки — глухие
      for (let col = col0 + 1; col < col1; col++) if ((col - col0) % 2 === 1) { setN(level, col, row0, 'window', walls); setN(level, col, row1 + 1, 'window', walls); }
      for (let row = row0 + 1; row < row1; row++) if ((row - row0) % 2 === 1) { setW(level, col0, row, 'window', walls); setW(level, col1 + 1, row, 'window', walls); }
    }
    if (options.flatRoof) {
      // плоская крыша — пол уровня levels (рулонная кровля); по краю — сетка или парапет
      setFloor(levels, col0, row0, col1, row1, FLOOR.roof);
      for (let row = row0; row <= row1; row++) for (let col = col0; col <= col1; col++) floorStyle[levels][row][col] = 'roofing';
      const edge = options.flatRoof === 'mesh' ? ['mesh', 'school'] : ['parapet', facade(style, levels - 1, levels)];
      for (let row = row0; row <= row1; row++) { setW(levels, col0, row, ...edge); setW(levels, col1 + 1, row, ...edge); }
      for (let col = col0; col <= col1; col++) { setN(levels, col, row0, ...edge); setN(levels, col, row1 + 1, ...edge); }
    } else {
      // крыша над верхним этажом: предмет на уровне levels (не проходима)
      object('roof', levels, col0, row0, col1 - col0 + 1, row1 - row0 + 1, { blocks: false, type: options.roof || 'tile', facade: style });
    }
    const midCol = Math.floor((col0 + col1) / 2);
    // парадная дверь в середине фасада, чёрный ход — с другой стороны
    const front = door === 'S' ? row1 + 1 : row0, back = door === 'S' ? row0 : row1 + 1;
    const groundWalls = facade(style, 0, levels);
    setN(0, midCol + 1, front, 'door', groundWalls);
    if (options.backDoor !== false) setN(0, midCol + 1, back, 'door', groundWalls);
    // лестница: колонки midCol−1 и midCol, ряды stairRow..stairRow+4 (у дальней от парадной стены)
    const stairRow = door === 'S' ? row0 + 1 : row1 - 5;
    stairWell(midCol - 1, stairRow, options.flatRoof ? levels : levels - 1, style);   // с плоской крышей — марш и на крышу
    // перегородки: коридор — колонки midCol−1..midCol+1, комнаты по сторонам, по две на сторону
    const midRow = Math.floor((row0 + row1) / 2) + 1;
    for (let level = 0; level < levels; level++) {
      for (let row = row0; row <= row1; row++) { setW(level, midCol - 1, row, 'wall', 'inner'); setW(level, midCol + 2, row, 'wall', 'inner'); }
      for (let col = col0; col < midCol - 1; col++) setN(level, col, midRow, 'wall', 'inner');
      for (let col = midCol + 2; col <= col1; col++) setN(level, col, midRow, 'wall', 'inner');
      const rooms = [
        { col0, col1: midCol - 2, row0, row1: midRow - 1, side: 'W' }, { col0, col1: midCol - 2, row0: midRow, row1, side: 'W' },
        { col0: midCol + 2, col1, row0, row1: midRow - 1, side: 'E' }, { col0: midCol + 2, col1, row0: midRow, row1, side: 'E' },
      ];
      rooms.forEach((room, index) => {
        // дверь из коридора: ряд комнаты вне лестничной клетки
        const rows = [];
        for (let row = room.row0 + 1; row < room.row1; row++) if (row < stairRow || row > stairRow + 4) rows.push(row);
        const doorRow = rows.length ? rows[Math.floor(rows.length / 2)] : room.row0;
        if (room.side === 'W') setW(level, midCol - 1, doorRow, 'door', 'inner'); else setW(level, midCol + 2, doorRow, 'door', 'inner');
        const doorCell = room.side === 'W' ? [room.col1, doorRow] : [room.col0, doorRow];
        if (options.furnish === 'classroom') classroom(level, room, doorCell);
        else if (options.furnish !== false) furnish(level, room, doorCell, (index + level + col0) % 4);
      });
    }
    return { ...placed, midCol, stairRow, front, back };
  }

  // лестница «ножницами» в двух колонках: с уровня 0 — в колонке col вверх к меньшим row, с уровня 1 — в колонке col+1 обратно,
  // и так далее до уровня top. Проёмы над маршами — с перилами по краям, кроме выхода с марша.
  function stairWell(col, row, top, style) {
    const runs = [];
    for (let level = 0; level < top; level++) {
      if (level % 2 === 0) { stairRun(level, col, row + 3, 0, -1, 3, 'classic'); runs.push({ level, col, cells: [row + 3, row + 2, row + 1], exit: [col, row] }); }
      else { stairRun(level, col + 1, row + 1, 0, 1, 3, 'classic'); runs.push({ level, col: col + 1, cells: [row + 1, row + 2, row + 3], exit: [col + 1, row + 4] }); }
    }
    for (const run of runs) {
      const level = run.level + 1;
      const isOpening = (testCol, testRow) => testCol === run.col && run.cells.includes(testRow);
      for (const cellRow of run.cells) {
        const edges = [[run.col - 1, cellRow, 'W', run.col, cellRow], [run.col + 1, cellRow, 'W', run.col + 1, cellRow],
          [run.col, cellRow - 1, 'N', run.col, cellRow], [run.col, cellRow + 1, 'N', run.col, cellRow + 1]];
        for (const [neighborCol, neighborRow, orient, edgeCol, edgeRow] of edges) {
          if (isOpening(neighborCol, neighborRow)) continue;
          if (neighborCol === run.exit[0] && neighborRow === run.exit[1]) continue;
          if (orient === 'W') setW(level, edgeCol, edgeRow, 'rail', 'iron'); else setN(level, edgeCol, edgeRow, 'rail', 'iron');
        }
      }
    }
  }

  // класс: доска на северной стене, парты рядами лицом к доске, проход посередине; у двери парт нет
  function classroom(level, room, doorCell) {
    const width = room.col1 - room.col0 + 1;
    if (width < 4 || room.row1 - room.row0 < 4) return;
    object('blackboard', level, room.col0 + 1, room.row0, width - 2, 1, { blocks: false });
    const aisle = room.col0 + Math.floor(width / 2);
    for (let row = room.row0 + 2; row <= room.row1; row += 2) {
      for (let col = room.col0; col <= room.col1; col++) {
        if (col === aisle) continue;
        if (Math.abs(col - doorCell[0]) <= 1 && Math.abs(row - doorCell[1]) <= 1) continue;
        object('schoolDesk', level, col, row, 1, 1);
      }
    }
    object('bookcase', level, room.side === 'W' ? room.col0 : room.col1, room.row0 + 1, 1, 1, { rotation: room.side === 'W' ? 3 : 1 });
  }

  // обстановка комнаты: до четырёх предметов по углам, не у двери
  const FURNITURE = [['bed', 2, 1], ['wardrobe', 1, 1], ['table', 2, 1], ['sofa', 2, 1], ['bookcase', 1, 1]];
  function furnish(level, room, doorCell, seed) {
    const width = room.col1 - room.col0 + 1, height = room.row1 - room.row0 + 1;
    if (width < 3 || height < 3) return;
    const corners = [[room.col0, room.row0], [room.col1 - 1, room.row0], [room.col0, room.row1], [room.col1 - 1, room.row1]];
    corners.forEach((corner, index) => {
      const [kind, cols, rows] = FURNITURE[(seed + index) % FURNITURE.length];
      const col = cols === 2 ? corner[0] : index % 2 ? room.col1 : room.col0, row = corner[1];
      // не у двери: клетка двери и соседние свободны
      for (let deltaCol = 0; deltaCol < cols; deltaCol++) if (Math.abs(col + deltaCol - doorCell[0]) <= 1 && Math.abs(row - doorCell[1]) <= 1) return;
      object(kind, level, col, row, cols, rows, { rotation: row === room.row0 ? 0 : 2 });
    });
  }

  // ================= северный квартал =================
  // ---------- детская площадка: кованая ограда, калитка на юг ----------
  const play = { col0: 2, row0: 7, col1: 15, row1: 21 };
  fillSurface(play.col0, play.row0, play.col1, play.row1, SURFACE.sand);
  for (let row = play.row0; row <= play.row1; row++) { setW(0, play.col0, row, 'rail', 'fence'); setW(0, play.col1 + 1, row, 'rail', 'fence'); }
  for (let col = play.col0; col <= play.col1; col++) { setN(0, col, play.row0, 'rail', 'fence'); if (col < 8 || col > 9) setN(0, col, play.row1 + 1, 'rail', 'fence'); }
  setW(0, play.col1 + 1, 14, null);                                   // калитка к дому
  fillSurface(8, 22, 9, 26, SURFACE.path);                            // дорожка от калитки к тротуару
  object('playhouse', 0, 3, 8, 2, 2);                                 // домик — здесь прячутся дети
  object('slide', 0, 7, 8, 1, 3);
  object('swing', 0, 11, 8, 3, 1);
  object('sandbox', 0, 4, 15, 3, 3, { blocks: false });
  object('carousel', 0, 11, 13, 2, 2);
  object('bench', 0, 2, 12, 1, 1, { rotation: 3 }); object('bench', 0, 2, 18, 1, 1, { rotation: 3 }); object('bench', 0, 15, 19, 1, 1, { rotation: 1 });
  object('bin', 0, 15, 20);
  for (const [col, row] of [[13, 19], [7, 20]]) object('tree', 0, col, row, 1, 1, { type: 'linden' });

  // ---------- деревья вдоль северного края ----------
  for (const col of [4, 9, 14, 20, 26, 32, 61, 67, 73, 80, 86, 92]) object('tree', 0, col, 1, 1, 1, { type: col % 3 ? 'linden' : 'chestnut' });

  // ---------- школа (3 этажа, светлый кирпич): плоская крыша, выход по лестнице, по краю крыши — сетка ----------
  house('school', 19, 7, 31, 21, 3, 'school', 'S', { flatRoof: 'mesh', furnish: 'classroom', floor: 'tiles' });
  fillSurface(25, 22, 27, 26, SURFACE.path);

  // ---------- банк: 2 каменных этажа и мансарда; хранилище у северной стены ----------
  const bank = { col0: 36, row0: 4, col1: 58, row1: 22 };
  building({ name: 'bank', ...bank, levels: 2, style: 'bank' });
  for (let level = 0; level < 2; level++) {
    setIndoor(level, bank.col0, bank.row0, bank.col1, bank.row1);
    if (level > 0) setFloor(level, bank.col0, bank.row0, bank.col1, bank.row1, FLOOR.interior);
    for (let row = bank.row0; row <= bank.row1; row++) for (let col = bank.col0; col <= bank.col1; col++) floorStyle[level][row][col] = 'marble';
    const walls = facade('bank', level, 2);
    for (let row = bank.row0; row <= bank.row1; row++) { setW(level, bank.col0, row, 'wall', walls); setW(level, bank.col1 + 1, row, 'wall', walls); }
    for (let col = bank.col0; col <= bank.col1; col++) { setN(level, col, bank.row0, 'wall', walls); setN(level, col, bank.row1 + 1, 'wall', walls); }
    for (let col = bank.col0 + 1; col < bank.col1; col++) if ((col - bank.col0) % 2 === 1) setN(level, col, bank.row1 + 1, 'window', walls);
    for (const col of [37, 39, 53, 55, 57]) setN(level, col, bank.row0, 'window', walls);   // над хранилищем окон нет
    for (let row = bank.row0 + 1; row < bank.row1; row++) if ((row - bank.row0) % 2 === 1) { setW(level, bank.col0, row, 'window', walls); setW(level, bank.col1 + 1, row, 'window', walls); }
  }
  object('roof', 2, bank.col0, bank.row0, bank.col1 - bank.col0 + 1, bank.row1 - bank.row0 + 1, { blocks: false, type: 'mansard', facade: 'bank' });
  // парадный вход: тройная дверь под балконом, по сторонам — колонны
  for (const col of [46, 47, 48]) setN(0, col, bank.row1 + 1, 'door', 'bank_g');
  setN(1, 47, bank.row1 + 1, 'window', 'bank_t');
  object('balcony', 1, 45, 23, 5, 1, { blocks: false });
  for (const col of [45, 49]) object('column', 0, col, 23, 1, 1);
  setW(0, bank.col1 + 1, 7, 'door', 'bank_g');                       // служебный вход с востока (к стоянке)
  fillSurface(34, 23, 60, 26, SURFACE.paving);
  // этаж 0: операционный зал (ряды 13..22), за ним коридор (11..12), хранилище (4..9) и кабинеты по сторонам
  for (let col = bank.col0; col <= bank.col1; col++) setN(0, col, 13, 'wall', 'inner');
  for (const col of [39, 55]) setN(0, col, 13, 'door', 'inner');
  const vault = { col0: 43, row0: 4, col1: 51, row1: 9 };
  for (let row = vault.row0; row <= vault.row1; row++) { setW(0, vault.col0, row, 'wall', 'vault'); setW(0, vault.col1 + 1, row, 'wall', 'vault'); }
  for (let col = vault.col0; col <= vault.col1; col++) setN(0, col, vault.row1 + 1, 'wall', 'vault');
  setN(0, 47, vault.row1 + 1, 'door', 'vault');                       // дверь хранилища
  for (let row = vault.row0; row <= vault.row1; row++) for (let col = vault.col0; col <= vault.col1; col++) floorStyle[0][row][col] = 'steel';
  for (let row = bank.row0; row <= 10; row++) { setW(0, 40, row, 'wall', 'inner'); setW(0, 55, row, 'wall', 'inner'); }
  for (let col = bank.col0; col < 40; col++) setN(0, col, 11, 'wall', 'inner');
  for (let col = 55; col <= bank.col1; col++) setN(0, col, 11, 'wall', 'inner');
  setN(0, 38, 11, 'door', 'inner'); setN(0, 56, 11, 'door', 'inner');
  setW(0, 40, 6, 'door', 'inner');
  // обстановка: стойки кассиров, диваны для посетителей, кадки с растениями
  for (const col of [37, 38, 41, 42, 43, 44, 50, 51, 52, 53, 56, 57]) object('counter', 0, col, 15, 1, 1);
  object('sofa', 0, 38, 20, 2, 1); object('sofa', 0, 55, 20, 2, 1); object('table', 0, 41, 19, 2, 1); object('table', 0, 52, 19, 2, 1);
  for (const [col, row] of [[36, 22], [58, 22], [45, 14], [49, 14], [36, 14], [58, 14]]) object('plant', 0, col, row);
  // хранилище: ячейки по стенам, стол посередине
  for (let col = vault.col0; col <= vault.col1; col++) object('deposits', 0, col, vault.row0);
  for (const row of [5, 6, 7]) { object('deposits', 0, vault.col0, row, 1, 1, { rotation: 3 }); object('deposits', 0, vault.col1, row, 1, 1, { rotation: 1 }); }
  object('table', 0, 46, 7, 2, 1);
  // кабинеты этажа 0: запад — охрана, восток — бухгалтерия
  object('desk', 0, 36, 4, 2, 1); object('console', 0, 39, 4); object('locker', 0, 36, 9); object('locker', 0, 37, 9);
  object('desk', 0, 56, 5, 2, 1); object('cabinet', 0, 58, 4); object('cabinet', 0, 58, 9); object('table', 0, 56, 8, 2, 1);
  // этаж 1: кабинеты по периметру, зал совещаний; лестница в западном крыле
  stairRun(0, 41, 11, 1, 0, 3, 'classic');                          // (41..43, 11) → этаж 1 в (44, 11)
  for (let row = bank.row0; row <= bank.row1; row++) { setW(1, 41, row, 'wall', 'inner'); setW(1, 53, row, 'wall', 'inner'); }
  for (let col = 41; col <= 52; col++) { setN(1, col, 10, 'wall', 'inner'); setN(1, col, 13, 'wall', 'inner'); }
  for (const row of [7, 17]) for (const [col0, col1] of [[bank.col0, 40], [53, bank.col1]]) for (let col = col0; col <= col1; col++) setN(1, col, row, 'wall', 'inner');
  setW(1, 41, 12, 'door', 'inner'); setW(1, 53, 12, 'door', 'inner'); setN(1, 47, 10, 'door', 'inner'); setN(1, 47, 13, 'door', 'inner');
  setW(1, 41, 5, 'door', 'inner'); setW(1, 53, 5, 'door', 'inner'); setW(1, 41, 15, 'door', 'inner'); setW(1, 53, 15, 'door', 'inner');
  setW(1, 41, 20, 'door', 'inner'); setW(1, 53, 20, 'door', 'inner');
  setN(1, 41, 11, 'rail', 'iron'); setN(1, 42, 11, 'rail', 'iron'); setN(1, 43, 11, 'rail', 'iron');
  setN(1, 41, 12, 'rail', 'iron'); setN(1, 42, 12, 'rail', 'iron'); setN(1, 43, 12, 'rail', 'iron');
  object('table', 1, 45, 16, 4, 2); object('bookcase', 1, 42, 21); object('bookcase', 1, 52, 21);      // зал совещаний
  object('desk', 1, 37, 4, 2, 1); object('bookcase', 1, 36, 6); object('sofa', 1, 37, 9, 2, 1);         // кабинет управляющего
  object('desk', 1, 56, 4, 2, 1); object('cabinet', 1, 58, 6); object('desk', 1, 37, 12, 2, 1); object('cabinet', 1, 36, 16);
  object('desk', 1, 56, 12, 2, 1); object('cabinet', 1, 58, 16); object('desk', 1, 37, 19, 2, 1); object('desk', 1, 56, 19, 2, 1);
  object('table', 1, 45, 5, 3, 2); object('bookcase', 1, 42, 4); object('bookcase', 1, 52, 4);        // архив над хранилищем

  // ---------- стоянка между банком и полицией ----------
  fillSurface(61, 4, 73, 26, SURFACE.asphalt);
  fillSurface(64, 27, 70, 30, SURFACE.asphalt);                       // въезд через тротуар
  for (let col = 62; col <= 72; col += 2) { object('paint', 0, col, 5, 1, 4, { blocks: false, line: 'W' }); object('paint', 0, col, 17, 1, 4, { blocks: false, line: 'W' }); }
  const car = (type, color, col, row, flip) => object('car', 0, col, row, 2, 4, { type, color, flip: !!flip });
  car('suv', 'police', 62, 5); car('suv', 'police', 64, 5); car('van', 'white', 68, 5); car('suv', 'graphite', 62, 17, true); car('suv', 'red', 70, 17, true);
  object('lamp', 0, 61, 12); object('lamp', 0, 73, 12);

  // ---------- полиция: 2 этажа, кирпичный фасад с белыми наличниками ----------
  const police = house('police', 75, 6, 91, 21, 2, 'police', 'S', { furnish: false, floor: 'tiles', roof: 'tile' });
  setW(0, 75, 14, 'door', 'police_g');                                // вход со стоянки
  fillSurface(83, 22, 85, 26, SURFACE.path);
  // дежурная часть: стойка у входа, шкафчики, оружейная, камеры
  for (const col of [80, 81, 86, 87]) object('counter', 0, col, 19, 1, 1);
  object('locker', 0, 76, 6); object('locker', 0, 77, 6); object('locker', 0, 78, 6); object('desk', 0, 76, 10, 2, 1);
  object('rack', 0, 91, 6); object('rack', 0, 91, 7); object('rack', 0, 90, 6); object('crate', 0, 91, 10);
  object('bunk', 0, 76, 17, 2, 1); object('bunk', 0, 90, 17, 2, 1); object('desk', 0, 89, 21, 2, 1); object('cabinet', 0, 75, 21);
  object('desk', 1, 76, 7, 2, 1); object('desk', 1, 89, 7, 2, 1); object('cabinet', 1, 75, 10); object('cabinet', 1, 91, 10);
  object('desk', 1, 76, 18, 2, 1); object('desk', 1, 89, 18, 2, 1); object('bookcase', 1, 75, 21); object('bookcase', 1, 91, 21);

  // ---------- фонари и урны вдоль проспекта, скамейки на тротуаре ----------
  for (let col = 3; col < TILES; col += 10) {
    if (col < 63 || col > 71) object('streetLamp', 0, col, 30);
    if (col + 5 < TILES && (col + 5 < 43 || col + 5 > 49)) object('streetLamp', 0, col + 5, 49);
  }
  for (const col of [17, 58, 88]) object('bin', 0, col, 28);
  object('busStop', 0, 30, 50, 3, 1);
  object('bench', 0, 31, 51, 1, 1, { rotation: 0 }); object('bin', 0, 34, 51);
  // брошенные машины на проспекте (вдоль col)
  const carAlong = (type, color, col, row, flip) => object('car', 0, col, row, 4, 2, { type, color, flip: !!flip });
  carAlong('suv', 'white', 20, 33); carAlong('van', 'sand', 36, 42, true); carAlong('suv', 'blue', 58, 36); carAlong('suv', 'olive', 74, 45, true);
  carAlong('suv', 'graphite', 81, 33); carAlong('van', 'white', 6, 45, true);

  // ================= южный квартал =================
  house('houseB', 3, 55, 16, 69, 3, 'cream', 'N', { flatRoof: 'parapet' });     // напротив детской площадки: выход на крышу
  house('houseC', 22, 56, 34, 70, 2, 'green', 'N');
  house('houseD', 51, 55, 63, 70, 3, 'pink', 'N');
  house('houseE', 72, 56, 86, 70, 3, 'ochre', 'N');
  for (const [col0, col1, row1] of [[9, 11, 54], [28, 30, 55], [57, 59, 54], [79, 81, 55]]) fillSurface(col0, 53, col1, row1, SURFACE.path);
  // кусты вдоль дорожек (с проходами у задних дверей), дорожки, ряд деревьев
  for (let col = 1; col <= 32; col++) if (![10, 11, 29, 30].includes(col)) object('hedge', 0, col, 73);
  for (let col = 59; col <= 91; col++) if (![80, 81].includes(col)) object('hedge', 0, col, 73);
  fillSurface(0, 76, 36, 77, SURFACE.path); fillSurface(56, 76, 91, 77, SURFACE.path);
  for (const [col0, col1] of [[10, 11], [29, 30], [57, 58], [80, 81]]) fillSurface(col0, 71, col1, 75, SURFACE.path);
  for (let col = 3; col <= 33; col += 5) object('tree', 0, col, 83, 1, 1, { type: col % 2 ? 'chestnut' : 'linden' });
  for (const col of [5, 20, 35]) object('bench', 0, col, 78, 1, 1, { rotation: 2 });
  for (const row of [60, 66]) { object('tree', 0, 19, row, 1, 1, { type: 'linden' }); object('tree', 0, 68, row, 1, 1, { type: 'chestnut' }); object('tree', 0, 90, row, 1, 1, { type: 'linden' }); }
  // ---------- площадь с фонтаном ----------
  const fountain = { col: 46.5, row: 82.5 };
  diskSurface(fountain.col, fountain.row, 12, SURFACE.paving);
  fillSurface(44, 53, 48, 71, SURFACE.paving);                        // аллея от перехода к фонтану
  object('fountain', 0, 42, 78, 9, 9, { blocks: false });
  for (let row = 78; row <= 86; row++) for (let col = 42; col <= 50; col++) if (Math.hypot(col + 0.5 - fountain.col, row + 0.5 - fountain.row) < 4.4) block(0, col, row);
  for (let step = 0; step < 8; step++) {
    const angle = step / 8 * Math.PI * 2 + Math.PI / 8;
    const col = Math.floor(fountain.col + Math.cos(angle) * 8.6), row = Math.floor(fountain.row + Math.sin(angle) * 8.6);
    // спинка скамейки — наружу от фонтана: поворот k кладёт спинку на сторону −z, +x, +z, −x
    const backs = [[0, -1], [1, 0], [0, 1], [-1, 0]].map(([x, z]) => x * Math.cos(angle) + z * Math.sin(angle));
    object(step % 2 ? 'streetLamp' : 'bench', 0, col, row, 1, 1, { rotation: backs.indexOf(Math.max(...backs)) });
  }
  // ---------- площадка конвертоплана ----------
  fillSurface(60, 81, 82, 95, SURFACE.paving);
  const c0 = 68, r0 = 87;
  const extraction = tiltrotor(c0, r0);
  for (const [col, row] of [[60, 81], [82, 81], [60, 95], [82, 95]]) object('lamp', 0, col, row);
  object('crate', 0, 80, 84); object('crate', 0, 81, 84); object('barrels', 0, 62, 93);

  // ---------- люди, отряд, пришельцы ----------
  const at = (col, row, level, direction) => [col, row, level, direction];
  return {
    spawns: {
      squad: [at(c0 + 1, r0, 0, 1), at(c0 + 2, r0, 0, 1), at(c0 + 3, r0, 0, 1), at(c0 + 1, r0 + 3, 0, 5), at(c0 + 2, r0 + 3, 0, 5), at(c0 + 3, r0 + 3, 0, 5)],
      mech: [at(c0, r0 + 1, 0, 7)],
      // 12 пришельцев: банк (зал, коридор у хранилища, этаж 1), детская площадка, проспект, полиция
      aliens: [at(44, 17, 0, 0), at(51, 19, 0, 0), at(47, 11, 0, 1), at(40, 8, 1, 3),
        at(6, 13, 0, 7), at(12, 17, 0, 5),
        at(28, 37, 0, 3), at(62, 44, 0, 5), at(84, 36, 0, 1),
        at(80, 16, 1, 3), at(88, 9, 1, 5), at(68, 13, 0, 1)],          // в полиции — на втором этаже: внизу дежурят полицейские
    },
    extraction,
    mission: {
      kind: 'rescue',
      title: 'Спасение в центре города',
      timeLimit: 1800,                                       // секунд реального времени до открытия портала
      portal: [10, 39, 0],
      // второй портал открывается вместе с главным — на стоянке между банком и полицией: 4 зелёных и серебристый
      sidePortals: [{ at: [67, 11, 0], wave: 5, elites: [2], name: 'между банком и полицией' }],
      // дежурные в полиции (game.js, policeProfile): форма, бронежилет, пистолет; стреляют по пришельцам сами
      police: [
        { col: 81, row: 20, level: 0, dir: 5, name: 'Сержант Ковалёв' },
        { col: 86, row: 20, level: 0, dir: 5, name: 'Старший сержант Мельник' },
        { col: 79, row: 13, level: 0, dir: 3, name: 'Лейтенант Орлов', rank: 'лейтенант полиции' },
        { col: 84, row: 13, level: 0, dir: 3, name: 'Младший сержант Зайцев', rank: 'младший сержант полиции' },
      ],
      // в хранилище банка спрятались пятеро, среди них учёный; двое детей — внутри домика на детской площадке.
      // hidden — спрятались (стоят, не в позе заложников). shelters — укрытия, куда пришельцы не заходят:
      // хранилище и домик [col0, row0, col1, row1, level]
      civilians: [
        { col: 47, row: 5, level: 0, dir: 1, kind: 'scientist', vip: true, name: 'Проф. Лебединский', hidden: true },
        { col: 45, row: 6, level: 0, dir: 2, kind: 'man', name: 'Кассир', hidden: true },
        { col: 49, row: 6, level: 0, dir: 0, kind: 'woman', name: 'Посетительница', hidden: true },
        { col: 44, row: 8, level: 0, dir: 1, kind: 'engineer', name: 'Инкассатор', hidden: true },
        { col: 50, row: 8, level: 0, dir: 1, kind: 'worker', name: 'Охранник', hidden: true },
        { col: 3, row: 8, level: 0, dir: 3, kind: 'boy', child: true, name: 'Мальчик', hidden: true },
        { col: 4, row: 9, level: 0, dir: 3, kind: 'girl', child: true, name: 'Девочка', hidden: true },
      ],
      shelters: [[43, 4, 51, 9, 0], [3, 8, 4, 9, 0]],
      // тактика пришельцев: attackers идут в атаку, остальные держат оборону у постов (зал банка, детская площадка)
      // avoidMech: охрана банка с роботом не перестреливается и после его попаданий отходит из его обзора (game.js, avoidsMech)
      posts: [{ name: 'bank', col: 47, row: 15, level: 0, radius: 6, avoidMech: true }, { name: 'playground', col: 9, row: 14, level: 0, radius: 5 }],
      attackers: 5,
      portalElite: 'silver',                                 // двое из волны портала — серебристые стражи
    },
    name: 'Центр города',
    caption: 'ЦЕНТР ГОРОДА',
  };
}
