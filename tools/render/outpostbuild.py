"""Сборка карты базы для игры.

python3 outpostbuild.py op_out game_dir
  - склеивает куски каждого варианта: цвет -> фон JPG (x1), ID -> куски (клетка, уровень, часть) и атлас их масок PNG
  - пишет game/js/maps/outpost.js: проекция, клетки по уровням, стены, лестницы, варианты
"""
import json, os, sys, glob
import numpy as np
from PIL import Image

src, game = sys.argv[1], sys.argv[2]
info = json.load(open(f'{src}/info.json'))
layout = json.load(open(f'{src}/layout.json'))
out_dir = f'{game}/assets/maps/outpost'
os.makedirs(out_dir, exist_ok=True)
WIDTH, HEIGHT = info['width'], info['height']
SS = 2


def stitch(variant_dir, prefix, chunks, mode):
    canvas = Image.new(mode, (WIDTH * SS, HEIGHT * SS))
    for chunk in chunks:
        x, y, size, margin = chunk['x'], chunk['y'], chunk['size'], chunk['margin']
        part = Image.open(f'{variant_dir}/{prefix}_{x}_{y}.png').convert(mode)
        part = part.crop((margin * SS, margin * SS, (margin + size) * SS, (margin + size) * SS))
        canvas.paste(part, (x * SS, y * SS))
    return canvas


variants = {}
for variant_dir in sorted(glob.glob(f'{src}/v*')):
    meta = json.load(open(f'{variant_dir}/chunks.json'))
    key = f"{meta['level']}{'c' if meta['cut'] else 'f'}"
    # фон
    color = stitch(variant_dir, 'c', meta['chunks'], 'RGB').resize((WIDTH, HEIGHT), Image.LANCZOS)
    color.save(f'{out_dir}/v{key}.jpg', quality=86, optimize=True)
    # ID: R = col*8 + part, G = row*8 + level, B = 255 у кусков
    ids = np.asarray(stitch(variant_dir, 'i', meta['chunks'], 'RGB'), dtype=np.int32)
    valid = ids[:, :, 2] > 127
    code = np.where(valid, ((ids[:, :, 1] & 7) * 32 * 32 + (ids[:, :, 1] >> 3) * 32 + (ids[:, :, 0] >> 3)) * 8 + (ids[:, :, 0] & 7) + 1, 0)
    # уменьшение 2x2: значение, встречающееся чаще (при равенстве — ближнее к зрителю не важно, берём первое)
    blocks = code.reshape(HEIGHT, SS, WIDTH, SS).transpose(0, 2, 1, 3).reshape(HEIGHT, WIDTH, SS * SS)
    counts = np.stack([(blocks == blocks[:, :, index:index + 1]).sum(axis=2) for index in range(SS * SS)], axis=2)
    choice = np.take_along_axis(blocks, counts.argmax(axis=2)[:, :, None], axis=2)[:, :, 0]
    keys, labels = np.unique(choice, return_inverse=True)
    labels = labels.reshape(choice.shape)
    has_zero = keys[0] == 0
    piece_keys = keys[1:] if has_zero else keys
    index_map = labels if has_zero else labels + 1          # 0 = земля, 1.. = куски
    count = len(piece_keys)
    ys, xs = np.nonzero(index_map)
    label_values = index_map[ys, xs] - 1
    x0 = np.full(count, WIDTH); y0 = np.full(count, HEIGHT); x1 = np.zeros(count, int); y1 = np.zeros(count, int)
    np.minimum.at(x0, label_values, xs); np.minimum.at(y0, label_values, ys)
    np.maximum.at(x1, label_values, xs); np.maximum.at(y1, label_values, ys)
    # маски кусков с мягким краем (доля субпикселей 2x2) — упаковка полками в атлас
    order = sorted(range(count), key=lambda index: -(y1[index] - y0[index]))
    ATLAS_W = 2048
    slots, shelf_x, shelf_y, shelf_h = {}, 0, 0, 0
    for index in order:
        width, height = int(x1[index] - x0[index] + 1), int(y1[index] - y0[index] + 1)
        if shelf_x + width > ATLAS_W:
            shelf_x, shelf_y, shelf_h = 0, shelf_y + shelf_h + 1, 0
        slots[index] = (shelf_x, shelf_y)
        shelf_x += width + 1
        shelf_h = max(shelf_h, height)
    atlas_h = shelf_y + shelf_h + 1
    alpha = np.zeros((atlas_h, ATLAS_W), dtype=np.uint8)
    pieces = []
    for index, value in enumerate(piece_keys):
        left, top, right, bottom = int(x0[index]), int(y0[index]), int(x1[index]) + 1, int(y1[index]) + 1
        coverage = (blocks[top:bottom, left:right, :] == value).mean(axis=2)
        # пиксели, отданные куску при уменьшении, — непрозрачные целиком (без щелей между кусками)
        coverage = np.maximum(coverage, (index_map[top:bottom, left:right] == index + 1).astype(float))
        atlas_x, atlas_y = slots[index]
        alpha[atlas_y:atlas_y + bottom - top, atlas_x:atlas_x + right - left] = np.round(coverage * 255).astype(np.uint8)
        code_value = int(value) - 1
        part = code_value % 8; code_value //= 8
        col = code_value % 32; code_value //= 32
        row = code_value % 32; level = code_value // 32
        pieces.append([col, row, level, part, left, top, right - left, bottom - top, atlas_x, atlas_y])
    atlas = np.zeros((atlas_h, ATLAS_W, 4), dtype=np.uint8)
    atlas[:, :, :3] = 255
    atlas[:, :, 3] = alpha
    Image.fromarray(atlas, 'RGBA').save(f'{out_dir}/v{key}_mask.png', optimize=True)
    variants[key] = {'background': f'assets/maps/outpost/v{key}.jpg', 'mask': f'assets/maps/outpost/v{key}_mask.png', 'pieces': pieces}
    print(key, 'pieces', count)

# ---------- клетки и правила ----------
TILES, LEVELS = layout['TILES'], layout['LEVELS']
WALL_CODES = {None: 0, 'wall': 1, 'window': 2, 'door': 3, 'rail': 4, 'parapet': 5, 'barrier': 6}


def flat(grid, size, convert=lambda value: value):
    return [[convert(grid[level][row][col]) for row in range(size) for col in range(size)] for level in range(LEVELS)]


blocked = [[0] * (TILES * TILES) for _ in range(LEVELS)]
for item in layout['objects']:
    if not item.get('blocks', True):
        continue
    for row in range(item['row'], item['row'] + item['rows']):
        for col in range(item['col'], item['col'] + item['cols']):
            blocked[item['level']][row * TILES + col] = 1

game_map = {
    'name': 'База на плато', 'tiles': TILES, 'levels': LEVELS, 'levelHeight': layout['LEVEL_H'], 'tile': layout['TILE'],
    'floor': flat(layout['floor'], TILES),
    'offset': flat(layout['offset'], TILES, lambda value: round(value, 3)),
    'wallW': flat(layout['wallW'], TILES + 1, lambda wall: WALL_CODES[wall['type'] if wall else None]),
    'wallN': flat(layout['wallN'], TILES + 1, lambda wall: WALL_CODES[wall['type'] if wall else None]),
    'indoor': flat(layout['indoor'], TILES),
    'blocked': blocked,
    'links': [{'from': link['from'], 'to': link['to'], 'cost': link['cost'], 'kind': link['kind']} for link in layout['links']],
    'spawns': layout['spawns'],
    'variants': variants,
    'minimap': 'assets/maps/outpost/v3f.jpg',
}
field = {key: info[key] for key in ('width', 'height', 'tile', 'tiles', 'ppm', 'origin', 'colStep', 'rowStep', 'up')}
os.makedirs(f'{game}/js/maps', exist_ok=True)
with open(f'{game}/js/maps/outpost.js', 'w', encoding='utf-8') as file:
    file.write('// Сгенерировано tools/render/outpostbuild.py: карта «База на плато».\n')
    file.write('var FIELD = ' + json.dumps(field) + ';\n')
    file.write('var MAP = ' + json.dumps(game_map, ensure_ascii=False, separators=(',', ':')) + ';\n')
print('map written', os.path.getsize(f'{game}/js/maps/outpost.js'), 'bytes')
