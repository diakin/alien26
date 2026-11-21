// Изометрическая проекция: клетки карты <-> пиксели фоновой картинки.
// Карта лежит в плоскости земли; клетка (col, row) — квадрат FIELD.tile метров.
// FIELD.origin — пиксель угла клетки (0, 0); colStep / rowStep — пиксель угла (1, 0) / (0, 1).
var Iso = (function () {
  var originX = FIELD.origin[0], originY = FIELD.origin[1];
  var colX = FIELD.colStep[0] - originX, colY = FIELD.colStep[1] - originY;
  var rowX = FIELD.rowStep[0] - originX, rowY = FIELD.rowStep[1] - originY;
  var pixelsPerMeterUp = originY - FIELD.up[1];          // высота 1 м над землёй на экране
  var determinant = colX * rowY - rowX * colY;

  // точка на земле в координатах клеток (дробных) -> пиксель фона
  function toScreen(col, row, heightMeters) {
    return {
      x: originX + colX * col + rowX * row,
      y: originY + colY * col + rowY * row - (heightMeters || 0) * pixelsPerMeterUp
    };
  }

  // пиксель фона -> дробные координаты клетки на земле
  function toGrid(x, y) {
    var dx = x - originX, dy = y - originY;
    return {
      col: (dx * rowY - rowX * dy) / determinant,
      row: (colX * dy - dx * colY) / determinant
    };
  }

  // четыре угла клетки на заданной высоте (для рамок)
  function tileCorners(col, row, heightMeters) {
    return [
      toScreen(col, row, heightMeters), toScreen(col + 1, row, heightMeters),
      toScreen(col + 1, row + 1, heightMeters), toScreen(col, row + 1, heightMeters)
    ];
  }

  // направление спрайта (одно из 8) по вектору на земле в координатах клеток.
  // 0 к зрителю, 1 вниз-влево, 2 влево, 3 вверх-влево, 4 от зрителя, 5 вверх-вправо, 6 вправо, 7 вниз-вправо.
  // Клетки повёрнуты на 45 градусов: экранное «вправо» = col - row, «к зрителю» = col + row.
  // Возвращает -1 для нулевого вектора, чтобы вызывающий оставил прежнее направление.
  function directionOf(deltaCol, deltaRow) {
    var screenRight = deltaCol - deltaRow, towardViewer = deltaCol + deltaRow;
    if (Math.abs(screenRight) < 1e-9 && Math.abs(towardViewer) < 1e-9) return -1;
    var sector = Math.round(Math.atan2(-screenRight, towardViewer) / (Math.PI / 4));
    return ((sector % 8) + 8) % 8;
  }

  return {
    toScreen: toScreen, toGrid: toGrid, tileCorners: tileCorners, directionOf: directionOf,
    pixelsPerMeterUp: pixelsPerMeterUp, tileMeters: FIELD.tile
  };
})();
