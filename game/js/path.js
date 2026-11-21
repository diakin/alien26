// Поиск пути A* по сетке, 8 направлений.
// Шаг по прямой стоит 1, по диагонали 1.414. Диагональ запрещена, если любая из двух
// соседних клеток занята (боец не протискивается между камнями по углу).
var PathFinder = (function () {
  var DIAGONAL = Math.SQRT2;
  var NEIGHBOURS = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];

  // isFree(col, row) -> можно ли встать на клетку
  function find(width, height, startCol, startRow, goalCol, goalRow, isFree) {
    if (!isFree(goalCol, goalRow)) return null;
    if (startCol === goalCol && startRow === goalRow) return [];
    var size = width * height;
    var gScore = new Float64Array(size).fill(Infinity);
    var parent = new Int32Array(size).fill(-1);
    var closed = new Uint8Array(size);
    var heap = [];                       // [f, index] — двоичная куча по f
    var startIndex = startRow * width + startCol, goalIndex = goalRow * width + goalCol;

    function heuristic(col, row) {       // октильное расстояние
      var dx = Math.abs(col - goalCol), dy = Math.abs(row - goalRow);
      return (dx + dy) + (DIAGONAL - 2) * Math.min(dx, dy);
    }
    function push(f, index) {
      heap.push([f, index]);
      var child = heap.length - 1;
      while (child > 0) {
        var parentSlot = (child - 1) >> 1;
        if (heap[parentSlot][0] <= heap[child][0]) break;
        var swap = heap[parentSlot]; heap[parentSlot] = heap[child]; heap[child] = swap;
        child = parentSlot;
      }
    }
    function pop() {
      var top = heap[0], last = heap.pop();
      if (heap.length) {
        heap[0] = last;
        var slot = 0;
        for (;;) {
          var left = slot * 2 + 1, right = left + 1, smallest = slot;
          if (left < heap.length && heap[left][0] < heap[smallest][0]) smallest = left;
          if (right < heap.length && heap[right][0] < heap[smallest][0]) smallest = right;
          if (smallest === slot) break;
          var swap = heap[slot]; heap[slot] = heap[smallest]; heap[smallest] = swap;
          slot = smallest;
        }
      }
      return top;
    }

    gScore[startIndex] = 0;
    push(heuristic(startCol, startRow), startIndex);
    while (heap.length) {
      var current = pop()[1];
      if (current === goalIndex) break;
      if (closed[current]) continue;
      closed[current] = 1;
      var col = current % width, row = (current - col) / width;
      for (var n = 0; n < NEIGHBOURS.length; n++) {
        var stepCol = NEIGHBOURS[n][0], stepRow = NEIGHBOURS[n][1];
        var nextCol = col + stepCol, nextRow = row + stepRow;
        if (nextCol < 0 || nextRow < 0 || nextCol >= width || nextRow >= height) continue;
        if (!isFree(nextCol, nextRow)) continue;
        var diagonal = stepCol !== 0 && stepRow !== 0;
        if (diagonal && (!isFree(col + stepCol, row) || !isFree(col, row + stepRow))) continue;
        var nextIndex = nextRow * width + nextCol;
        var tentative = gScore[current] + (diagonal ? DIAGONAL : 1);
        if (tentative < gScore[nextIndex]) {
          gScore[nextIndex] = tentative;
          parent[nextIndex] = current;
          push(tentative + heuristic(nextCol, nextRow), nextIndex);
        }
      }
    }
    if (parent[goalIndex] === -1) return null;
    var path = [];
    for (var index = goalIndex; index !== startIndex; index = parent[index]) {
      path.push({ col: index % width, row: Math.floor(index / width) });
    }
    path.reverse();
    return path;
  }

  // стоимость пути в очках времени: прямо 4, диагональ 6
  function cost(startCol, startRow, path) {
    var total = 0, col = startCol, row = startRow;
    for (var index = 0; index < path.length; index++) {
      total += (path[index].col !== col && path[index].row !== row) ? 6 : 4;
      col = path[index].col; row = path[index].row;
    }
    return total;
  }

  return { find: find, cost: cost };
})();
