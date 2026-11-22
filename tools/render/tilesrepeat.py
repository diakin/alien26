"""Проверочная большая карта: «База на плато» из тайлов, повторённая copies x copies раз.

  python tilesrepeat.py ../../game 2      — 48x48 клеток, game/js/maps/outpost_tiles_big.js

Тайлы и атласы те же, что у карты 24x24: растут только массивы карты. Нужна, чтобы проверить
память и плавность прокрутки на карте размера UFO (50x50) до того, как появятся новые карты.
"""
import json, os, re, sys
from PIL import Image

GAME_DIR = sys.argv[1]
COPIES = int(sys.argv[2]) if len(sys.argv) > 2 else 2

text = open(os.path.join(GAME_DIR, 'js/maps/outpost_tiles.js'), encoding='utf-8').read()
field = json.loads(re.search(r'var FIELD = (\{.*?\});', text).group(1))
source = json.loads(re.search(r'var MAP = (\{.*\});', text, re.S).group(1))
GRID = source['tiles']
BIG = GRID * COPIES
STRIDE, BIG_STRIDE = GRID + 1, BIG + 1
step_x = field['colStep'][0] - field['origin'][0]
step_y = field['colStep'][1] - field['origin'][1]


def cells(array):
    """Слой по клеткам: клетка большой карты берёт значение клетки исходной."""
    return [array[(row % GRID) * GRID + col % GRID] for row in range(BIG) for col in range(BIG)]


def edges(array, empty):
    """Слой по граням (шаг GRID + 1): на стыке копий берётся непустая грань (восточная или западная)."""
    result = []
    for row in range(BIG_STRIDE):
        for col in range(BIG_STRIDE):
            candidates_row = [row % GRID] if row % GRID or row == 0 else [0, GRID]
            candidates_col = [col % GRID] if col % GRID or col == 0 else [0, GRID]
            if row == BIG:
                candidates_row = [GRID]
            if col == BIG:
                candidates_col = [GRID]
            value = empty
            for source_row in candidates_row:
                for source_col in candidates_col:
                    candidate = array[source_row * STRIDE + source_col]
                    if candidate != empty:
                        value = candidate
            result.append(value)
    return result


game_map = dict(source)
game_map['name'] = f'База на плато x{COPIES * COPIES} ({BIG}x{BIG})'
game_map['tiles'] = BIG
for key in ('floor', 'offset', 'indoor', 'blocked'):
    game_map[key] = [cells(layer) for layer in source[key]]
for key in ('wallW', 'wallN'):
    game_map[key] = [edges(layer, 0) for layer in source[key]]
copies = [(copy_col * GRID, copy_row * GRID) for copy_row in range(COPIES) for copy_col in range(COPIES)]
game_map['doors'] = [[door[0] + dx, door[1] + dy] + door[2:] for dx, dy in copies for door in source['doors']]
game_map['stairs'] = [[stair[0], stair[1] + dx, stair[2] + dy] + stair[3:] for dx, dy in copies for stair in source['stairs']]
game_map['links'] = [dict(link, **{'from': [link['from'][0] + dx, link['from'][1] + dy, link['from'][2]], 'to': [link['to'][0] + dx, link['to'][1] + dy, link['to'][2]]})
                     for dx, dy in copies for link in source['links']]
tileset = dict(source['tileset'])
tileset['ground'] = cells(source["tileset"]["ground"])
tileset['floor'] = [cells(layer) for layer in source['tileset']['floor']]
tileset['wallW'] = [edges(layer, -1) for layer in source['tileset']['wallW']]
tileset['wallN'] = [edges(layer, -1) for layer in source['tileset']['wallN']]
game_map['solids'] = [[item[0], item[1] + dx, item[2] + dy, item[3] + dx, item[4] + dy, item[5] + dx, item[6] + dy, item[7], item[8]]
                      for dx, dy in copies for item in source.get('solids', [])]
tileset['objects'] = [[item[0], item[1] + dx, item[2] + dy, item[3]] for dx, dy in copies for item in source['tileset']['objects']]
tileset['doors'] = [tile for _ in copies for tile in source['tileset']['doors']]
game_map['tileset'] = tileset

# проекция: карта шире на GRID*(COPIES-1) клеток в обе стороны ромба
grow = GRID * (COPIES - 1)
big_field = dict(field)
big_field['tiles'] = BIG
big_field['width'] = field['width'] + 2 * step_x * grow
big_field['height'] = field['height'] + 2 * step_y * grow
origin = [field['origin'][0] + step_x * grow, field['origin'][1]]
big_field['origin'] = origin
big_field['colStep'] = [origin[0] + step_x, origin[1] + step_y]
big_field['rowStep'] = [origin[0] - step_x, origin[1] + step_y]
big_field['up'] = [origin[0], origin[1] - (field['origin'][1] - field['up'][1])]

# мини-карта: копии исходной, от дальних к ближним
minimap_path = os.path.join(GAME_DIR, source['minimap'])
small = Image.open(minimap_path).convert('RGBA')
scale = small.width / field['width']
big_minimap = Image.new('RGBA', (round(big_field['width'] * scale), round(big_field['height'] * scale)), (20, 18, 16, 255))
for dx, dy in sorted(copies, key=lambda item: item[0] + item[1]):
    shift_x = (origin[0] - field['origin'][0] + step_x * (dx - dy)) * scale
    shift_y = (step_y * (dx + dy)) * scale
    big_minimap.alpha_composite(small, (round(shift_x), round(shift_y)))
big_minimap_name = 'assets/maps/outpost_tiles/minimap_big.jpg'
big_minimap.convert('RGB').save(os.path.join(GAME_DIR, big_minimap_name), quality=85)
game_map['minimap'] = big_minimap_name

with open(os.path.join(GAME_DIR, 'js/maps/outpost_tiles_big.js'), 'w', encoding='utf-8') as output:
    output.write(f'// Сгенерировано tools/render/tilesrepeat.py: проверочная карта {BIG}x{BIG} из тайлов «Базы на плато».\n')
    output.write('var FIELD = ' + json.dumps(big_field) + ';\n')
    output.write('var MAP = ' + json.dumps(game_map, separators=(',', ':')) + ';\n')
print('map', BIG, 'x', BIG, 'field', big_field['width'], 'x', big_field['height'])
