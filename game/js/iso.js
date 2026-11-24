// Изометрическая проекция: клетки карты <-> пиксели фоновой картинки.
// Карта лежит в плоскости земли; клетка (col, row) — квадрат FIELD.tile метров.
// FIELD.origin — пиксель угла клетки (0, 0); colStep / rowStep — пиксель угла (1, 0) / (0, 1).
//
// Поворот вида (карты с MAP_VIEWS, клавиши «,» / «.»): вид повёрнут на turns × 90°. Вся игра работает
// в координатах карты; Iso переводит их в координаты вида (точка (x, y) -> (N - y, x) на каждый поворот,
// как rotateLayout в tools/render/outpost_layout.js) и проецирует по FIELD этого вида.
// *View-функции принимают уже координаты вида (тайлы повёрнутого набора).
var Iso = (function () {
  var originX, originY, colX, colY, rowX, rowY, pixelsPerMeterUp, determinant;
  var GRID = FIELD.tiles || 0;
  var turns = 0;
  var api;

  function load(field) {
    originX = field.origin[0]; originY = field.origin[1];
    colX = field.colStep[0] - originX; colY = field.colStep[1] - originY;
    rowX = field.rowStep[0] - originX; rowY = field.rowStep[1] - originY;
    pixelsPerMeterUp = originY - field.up[1];          // высота 1 м над землёй на экране
    determinant = colX * rowY - rowX * colY;
  }
  load(FIELD);

  // ---------------- карта <-> вид ----------------
  // точка (дробные клетки)
  function pointToView(col, row) {
    for (var step = 0; step < turns; step++) { var nextCol = GRID - row; row = col; col = nextCol; }
    return { col: col, row: row };
  }
  function pointFromView(col, row) {
    for (var step = 0; step < turns; step++) { var nextCol = row; row = GRID - col; col = nextCol; }
    return { col: col, row: row };
  }
  // целая клетка
  function cellToView(col, row) {
    for (var step = 0; step < turns; step++) { var nextCol = GRID - 1 - row; row = col; col = nextCol; }
    return { col: col, row: row };
  }
  // грань: стена W клетки -> стена N клетки вида и наоборот
  function edgeToView(col, row, orient) {
    for (var step = 0; step < turns; step++) {
      if (orient === 'W') { var westCol = GRID - 1 - row; row = col; col = westCol; orient = 'N'; }
      else { var northCol = GRID - row; row = col; col = northCol; orient = 'W'; }
    }
    return { col: col, row: row, orient: orient };
  }

  // ---------------- проекция ----------------
  function toScreenView(col, row, heightMeters) {
    return {
      x: originX + colX * col + rowX * row,
      y: originY + colY * col + rowY * row - (heightMeters || 0) * pixelsPerMeterUp
    };
  }
  // точка на земле в координатах клеток (дробных) -> пиксель фона
  function toScreen(col, row, heightMeters) {
    if (!turns) return toScreenView(col, row, heightMeters);
    var point = pointToView(col, row);
    return toScreenView(point.col, point.row, heightMeters);
  }

  // пиксель фона -> дробные координаты клетки на земле
  function toGrid(x, y) {
    var dx = x - originX, dy = y - originY;
    var col = (dx * rowY - rowX * dy) / determinant, row = (colX * dy - dx * colY) / determinant;
    return turns ? pointFromView(col, row) : { col: col, row: row };
  }

  // четыре угла клетки (или квадрата size x size клеток) на заданной высоте — для рамок.
  // Порядок — по виду: угол 0 дальний от зрителя, дальше по часовой (как без поворота).
  function tileCorners(col, row, heightMeters, size) {
    var span = size || 1;
    var first = pointToView(col, row), second = pointToView(col + span, row + span);
    var viewCol = Math.min(first.col, second.col), viewRow = Math.min(first.row, second.row);
    return [
      toScreenView(viewCol, viewRow, heightMeters), toScreenView(viewCol + span, viewRow, heightMeters),
      toScreenView(viewCol + span, viewRow + span, heightMeters), toScreenView(viewCol, viewRow + span, heightMeters)
    ];
  }

  // направление (одно из 8) по вектору на земле в координатах клеток — в координатах карты, как без поворота.
  // 0 к зрителю, 1 вниз-влево, 2 влево, 3 вверх-влево, 4 от зрителя, 5 вверх-вправо, 6 вправо, 7 вниз-вправо.
  // Клетки повёрнуты на 45 градусов: экранное «вправо» = col - row, «к зрителю» = col + row.
  // Возвращает -1 для нулевого вектора, чтобы вызывающий оставил прежнее направление.
  function directionOf(deltaCol, deltaRow) {
    var screenRight = deltaCol - deltaRow, towardViewer = deltaCol + deltaRow;
    if (Math.abs(screenRight) < 1e-9 && Math.abs(towardViewer) < 1e-9) return -1;
    var sector = Math.round(Math.atan2(-screenRight, towardViewer) / (Math.PI / 4));
    return ((sector % 8) + 8) % 8;
  }
  // направление спрайта на экране для направления в координатах карты: поворот вида на 90° сдвигает его на 2
  function viewDirection(direction) {
    return ((direction + 2 * turns) % 8 + 8) % 8;
  }

  // переключить вид: FIELD этого вида и число поворотов
  function setView(field, viewTurns) {
    load(field);
    turns = viewTurns || 0;
    api.pixelsPerMeterUp = pixelsPerMeterUp;
    api.tileMeters = field.tile;
  }

  api = {
    toScreen: toScreen, toGrid: toGrid, tileCorners: tileCorners, directionOf: directionOf,
    toScreenView: toScreenView, cellToView: cellToView, edgeToView: edgeToView, pointToView: pointToView,
    viewDirection: viewDirection, setView: setView, turns: function () { return turns; },
    pixelsPerMeterUp: pixelsPerMeterUp, tileMeters: FIELD.tile
  };
  return api;
})();
