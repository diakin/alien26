// Стрельба как в UFO: пуля летит по прямой от ствола; при промахе направление отклоняется,
// и пуля может попасть в стену, предмет, пол или другого юнита на пути.
// Координаты: x — вдоль col, y — вдоль row (в клетках), h — высота в метрах.
var Combat = (function () {
  'use strict';

  // оружие: урон, дальность (м), магазин, режимы огня (стоимость в ОД, множитель точности, число выстрелов)
  var WEAPONS = {
    carbine: {
      damage: 32, range: 60, magazine: 30, projectile: 'bullet',
      modes: [
        { name: 'Прицельный', cost: 18, accuracy: 1.1, shots: 1 },
        { name: 'Одиночный', cost: 12, accuracy: 0.65, shots: 1 },
        { name: 'Очередь', cost: 28, accuracy: 0.4, shots: 3 }
      ]
    },
    autocannon: {
      damage: 55, range: 70, magazine: 40, projectile: 'shell',
      modes: [
        { name: 'Прицельный', cost: 20, accuracy: 1.05, shots: 1 },
        { name: 'Одиночный', cost: 12, accuracy: 0.65, shots: 1 },
        { name: 'Очередь', cost: 26, accuracy: 0.4, shots: 3 }
      ]
    },
    plasmaPistol: {
      damage: 40, range: 45, magazine: 20, projectile: 'plasma',
      modes: [
        { name: 'Прицельный', cost: 16, accuracy: 1.0, shots: 1 },
        { name: 'Навскидку', cost: 9, accuracy: 0.6, shots: 1 }
      ]
    }
  };

  var STEP = 0.04;             // шаг трассировки, м
  var UNIT_RADIUS = 0.3;       // радиус юнита размером в клетку, м

  // стены: блокирует ли стена типа code точку на грани (along — положение вдоль грани 0..1, local — высота над полом уровня)
  // 1 стена, 2 окно (проём со стеклом пули пропускает), 3 дверь (проём — если открыта), 4 перила, 5 парапет, 6 отбойник
  function wallBlocks(code, along, local, doorOpen) {
    if (code === 1) return local < 2.5;
    if (code === 2) return !(along > 0.172 && along < 0.828 && local > 0.95 && local < 1.9) && local < 2.5;
    if (code === 3) {
      if (local >= 2.1) return local < 2.5;
      if (along > 0.132 && along < 0.868) return !doorOpen;
      return true;
    }
    if (code === 4) return (local < 0.1) || (local > 0.5 && local < 0.58) || (local > 0.98 && local < 1.08) || ((along < 0.03 || along > 0.97) && local < 1.06);
    if (code === 5) return local < 0.56;
    if (code === 6) return local < 0.82;
    return false;
  }

  // мир для трассировки: карта, препятствия по клеткам, юниты, состояние дверей
  function createWorld(options) {
    var map = options.map, grid = map.tiles, levels = map.levels, levelHeight = map.levelHeight;
    var stride = grid + 1;
    var solids = {};
    // у карты без рамок предметов (поле с валунами) препятствием считается занятая клетка высотой 1 м
    var boxes = map.solids;
    if (!boxes) {
      boxes = [];
      (map.blocked || []).forEach(function (layer, level) {
        layer.forEach(function (blocked, cell) {
          if (blocked) boxes.push([level, cell % grid, Math.floor(cell / grid), cell % grid + 0.1, Math.floor(cell / grid) + 0.1, cell % grid + 0.9, Math.floor(cell / grid) + 0.9, level * levelHeight, level * levelHeight + 1.0]);
        });
      });
    }
    boxes.forEach(function (box) {
      var key = box[0] * grid * grid + box[2] * grid + box[1];
      (solids[key] = solids[key] || []).push(box);
    });
    return {
      grid: grid, levels: levels, levelHeight: levelHeight, tile: map.tile || 1.25, stride: stride, map: map, solids: solids,
      units: options.units, doorOpen: options.doorOpen, unitBody: options.unitBody
    };
  }

  function levelOf(world, height) { return Math.max(0, Math.min(world.levels - 1, Math.floor(height / world.levelHeight))); }

  // Трассировка от from до to и дальше, всего range метров. Возвращает первое препятствие:
  // { kind: 'unit' | 'wall' | 'object' | 'floor' | 'ground' | 'edge' | 'none', point, unit }
  function trace(world, from, to, range, ignore) {
    var dx = (to.x - from.x) * world.tile, dy = (to.y - from.y) * world.tile, dh = to.h - from.h;
    var length = Math.sqrt(dx * dx + dy * dy + dh * dh);
    if (length < 1e-6) return { kind: 'none', point: { x: from.x, y: from.y, h: from.h } };
    var stepX = dx / length * STEP / world.tile, stepY = dy / length * STEP / world.tile, stepH = dh / length * STEP;
    var x = from.x, y = from.y, h = from.h;
    var count = Math.ceil(range / STEP);
    var map = world.map, grid = world.grid, stride = world.stride, levelHeight = world.levelHeight;
    for (var index = 1; index <= count; index++) {
      var previousX = x, previousY = y, previousH = h;
      x += stepX; y += stepY; h += stepH;
      var point = { x: x, y: y, h: h };
      if (x < 0 || y < 0 || x >= grid || y >= grid) return { kind: 'edge', point: point };
      if (h <= 0) return { kind: 'ground', point: { x: x, y: y, h: 0 } };
      var col = Math.floor(x), row = Math.floor(y);
      // перекрытие: плита пола уровня L — от L*H - 0,22 до L*H, пересечение её середины
      var slabBefore = Math.floor((previousH + 0.11) / levelHeight), slabAfter = Math.floor((h + 0.11) / levelHeight);
      if (slabBefore !== slabAfter) {
        var slabLevel = Math.max(slabBefore, slabAfter);
        if (slabLevel >= 1 && slabLevel < world.levels) {
          var floorType = map.floor[slabLevel][row * grid + col];
          if (floorType === 2 || floorType === 3 || floorType === 4) return { kind: 'floor', point: point };
        }
      }
      var level = levelOf(world, h), local = h - level * levelHeight;
      // стены на гранях клеток
      var previousCol = Math.floor(previousX), previousRow = Math.floor(previousY);
      if (previousCol !== col) {
        var edgeCol = Math.max(previousCol, col);
        var crossY = previousY + (y - previousY) * ((edgeCol - previousX) / (x - previousX));
        var edgeRow = Math.floor(crossY);
        var codeW = map.wallW[level][edgeRow * stride + edgeCol];
        if (codeW && wallBlocks(codeW, crossY - edgeRow, local, world.doorOpen(edgeCol, edgeRow, level, 'W'))) return { kind: 'wall', point: point };
      }
      if (previousRow !== row) {
        var edgeRowN = Math.max(previousRow, row);
        var crossX = previousX + (x - previousX) * ((edgeRowN - previousY) / (y - previousY));
        var edgeColN = Math.floor(crossX);
        var codeN = map.wallN[level][edgeRowN * stride + edgeColN];
        if (codeN && wallBlocks(codeN, crossX - edgeColN, local, world.doorOpen(edgeColN, edgeRowN, level, 'N'))) return { kind: 'wall', point: point };
      }
      // предметы клетки
      var boxes = world.solids[level * grid * grid + row * grid + col];
      if (boxes) {
        for (var boxIndex = 0; boxIndex < boxes.length; boxIndex++) {
          var box = boxes[boxIndex];
          if (x >= box[3] && x <= box[5] && y >= box[4] && y <= box[6] && h >= box[7] && h <= box[8]) return { kind: 'object', point: point };
        }
      }
      // юниты: вертикальный цилиндр
      for (var unitIndex = 0; unitIndex < world.units.length; unitIndex++) {
        var unit = world.units[unitIndex];
        if (unit === ignore || unit.dead) continue;
        var body = world.unitBody(unit);
        var offsetX = (x - body.x) * world.tile, offsetY = (y - body.y) * world.tile;
        if (offsetX * offsetX + offsetY * offsetY < body.radius * body.radius && h >= body.bottom && h <= body.top) return { kind: 'unit', point: point, unit: unit };
      }
    }
    return { kind: 'none', point: { x: x, y: y, h: h } };
  }

  // шанс попадания, %: точность бойца × режим огня, на колене точнее, дальше 10 м — хуже
  function hitChance(shooter, mode, distanceMeters) {
    var chance = shooter.accuracy * mode.accuracy;
    if (shooter.kneeling) chance *= 1.15;
    if (distanceMeters > 10) chance -= (distanceMeters - 10) * 0.8;
    return Math.max(5, Math.min(95, Math.round(chance)));
  }

  // Точка прицеливания одного выстрела. Попадание по броску — в силуэт цели (с небольшим разбросом);
  // промах — со смещением поперёк линии огня тем больше, чем дальше цель и ниже шанс.
  function aimPoint(world, from, target, radius, chance, random) {
    var dx = (target.x - from.x) * world.tile, dy = (target.y - from.y) * world.tile, dh = target.h - from.h;
    var distance = Math.sqrt(dx * dx + dy * dy + dh * dh) || 1;
    var forward = [dx / distance, dy / distance, dh / distance];
    // две оси поперёк линии огня: горизонтальная и «вверх»
    var side = [-forward[1], forward[0], 0];
    var sideLength = Math.sqrt(side[0] * side[0] + side[1] * side[1]) || 1;
    side = [side[0] / sideLength, side[1] / sideLength, 0];
    var up = [forward[1] * side[2] - forward[2] * side[1], forward[2] * side[0] - forward[0] * side[2], forward[0] * side[1] - forward[1] * side[0]];
    var hit = random() * 100 < chance;
    var magnitude, angle = random() * Math.PI * 2;
    if (hit) magnitude = radius * 0.6 * Math.sqrt(random());
    else magnitude = radius + 0.15 + random() * (0.35 + distance * 0.06 * (1.3 - chance / 100));
    var offsetSide = Math.cos(angle) * magnitude, offsetUp = Math.sin(angle) * magnitude * 0.8;
    return {
      hit: hit,
      point: {
        x: target.x + (side[0] * offsetSide + up[0] * offsetUp) / world.tile,
        y: target.y + (side[1] * offsetSide + up[1] * offsetUp) / world.tile,
        h: target.h + side[2] * offsetSide + up[2] * offsetUp
      }
    };
  }

  // урон: базовый × 0,5..1,5 минус броня цели
  function damage(weapon, armor, random) {
    return Math.max(0, Math.round(weapon.damage * (0.5 + random())) - (armor || 0));
  }

  function distanceMeters(world, from, to) {
    var dx = (to.x - from.x) * world.tile, dy = (to.y - from.y) * world.tile, dh = to.h - from.h;
    return Math.sqrt(dx * dx + dy * dy + dh * dh);
  }

  return {
    WEAPONS: WEAPONS, UNIT_RADIUS: UNIT_RADIUS, createWorld: createWorld, trace: trace, hitChance: hitChance,
    aimPoint: aimPoint, damage: damage, distanceMeters: distanceMeters, wallBlocks: wallBlocks
  };
})();
if (typeof module !== 'undefined') module.exports = Combat;
