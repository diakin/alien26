// Поиск пути A* по графу клеток с уровнями.
// Узел — целое число (ключ клетки и уровня); соседей и стоимость шагов даёт вызывающий:
//   neighbours(key, visit) вызывает visit(nextKey, cost, extra) для каждого возможного шага;
//   heuristic(key) — оценка оставшейся стоимости (не больше настоящей).
// Возвращает массив шагов { key, cost, extra } без стартового узла, [] если уже на месте, null если пути нет.
var PathFinder = (function () {
  function find(startKey, goalKey, neighbours, heuristic, limit) {
    if (startKey === goalKey) return [];
    var gScore = {}, parent = {}, stepCost = {}, stepExtra = {}, closed = {};
    var heap = [];
    var expanded = 0, maxExpanded = limit || 20000;

    function push(f, key) {
      heap.push([f, key]);
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
          var swap = heap[smallest]; heap[smallest] = heap[slot]; heap[slot] = swap;
          slot = smallest;
        }
      }
      return top;
    }

    gScore[startKey] = 0;
    push(heuristic(startKey), startKey);
    while (heap.length) {
      var current = pop()[1];
      if (closed[current]) continue;
      if (current === goalKey) break;
      closed[current] = true;
      if (++expanded > maxExpanded) return null;
      var base = gScore[current];
      neighbours(current, function (next, cost, extra) {
        if (closed[next]) return;
        var tentative = base + cost;
        if (gScore[next] === undefined || tentative < gScore[next]) {
          gScore[next] = tentative;
          parent[next] = current;
          stepCost[next] = cost;
          stepExtra[next] = extra;
          push(tentative + heuristic(next), next);
        }
      });
    }
    if (gScore[goalKey] === undefined) return null;
    var path = [];
    for (var key = goalKey; key !== startKey; key = parent[key]) path.unshift({ key: key, cost: stepCost[key], extra: stepExtra[key] });
    return path;
  }

  return { find: find };
})();
