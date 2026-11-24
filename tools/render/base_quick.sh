#!/bin/sh
# Быстрая проверка правок базы без рендера тайлов (секунды вместо минут):
#   1) план помещений: tools/base/plan.py -> docs/base/base_plan.json, tools/render/base_plan.js, game/js/base_plan.js
#   2) данные карты для игры из разметки: проходимость, стены, двери, препятствия (baselogic.mjs)
#   3) WebGL-карта для игры (game/js/map3d.js) и 3D-осмотр (game/js/base3d.js)
# Картинку базы в игре после этого даёт WebGL-карта; тайлы остаются прежними (MAP.tilesStale) до полного
# рендера: MAP=base node tilesetrun.mjs render <папка> и MAP=base python3 tilesetbuild.py <папка> ../../game.
set -e
cd "$(dirname "$0")"
python3 ../base/plan.py ../../docs/base > /dev/null
node baselogic.mjs ../../game
./build_map3d.sh > /dev/null 2>&1
./build_base3d.sh > /dev/null 2>&1
echo "готово: game/js/map3d.js, game/js/base3d.js, game/js/maps/outpost_tiles_base.js"
