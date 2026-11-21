"""Собирает набор тайлов карты базы из проходов рендера (tilesetrun.mjs) и пишет данные для игры.

  python tilesetbuild.py tiles_dir ../../game [shadow_strength]

Из каждого тайла: цвет + маска (суперсэмплинг 2x) -> RGBA x1, тень на земле -> маска тени x1.
Тайлы раскладываются в атлас game/assets/maps/outpost_tiles/tiles.png, тени — в shadows.png.
Карта пишется в game/js/maps/outpost_tiles.js: проекция FIELD (шаг клетки ровно 61x35), данные
проходимости из прежней карты и слои тайлов: земля, пол, стены W и N по уровням, предметы.
Заодно собирается общий вид карты (как его нарисует игра) — для мини-карты и для сравнения.
"""
import json, os, re, sys
import numpy as np
from PIL import Image

TILES_DIR, GAME_DIR = sys.argv[1], sys.argv[2]
SHADOW_STRENGTH = float(sys.argv[3]) if len(sys.argv) > 3 else 0.5
OUT_ASSETS = os.path.join(GAME_DIR, 'assets/maps/outpost_tiles')
os.makedirs(OUT_ASSETS, exist_ok=True)

plan_data = json.load(open(os.path.join(TILES_DIR, 'plan.json')))
jobs, plan, projection = plan_data['jobs'], plan_data['plan'], plan_data['projection']
GRID, LEVELS = plan['tiles'], plan['levels']
STRIDE = GRID + 1
STEP_X, STEP_Y = projection['stepX'], projection['stepY']
LEVEL_PIXELS = projection['upPixels'] * projection['levelHeight']


def downsample(array):
    """Среднее по блокам 2x2 (суперсэмплинг)."""
    height, width = array.shape[0] // 2 * 2, array.shape[1] // 2 * 2
    array = array[:height, :width]
    return (array[0::2, 0::2] + array[1::2, 0::2] + array[0::2, 1::2] + array[1::2, 1::2]) / 4


def build_sprite(job_id, frame):
    color = np.asarray(Image.open(f'{TILES_DIR}/t{job_id}_c.png').convert('RGB'), dtype=np.float64) / 255
    mask = np.asarray(Image.open(f'{TILES_DIR}/t{job_id}_m.png').convert('L'), dtype=np.float64) / 255
    alpha = downsample(mask)
    weighted = np.stack([downsample(color[:, :, channel] * mask) for channel in range(3)], axis=2)
    rgb = np.where(alpha[:, :, None] > 1e-6, weighted / np.maximum(alpha[:, :, None], 1e-6), 0)
    rgba = np.dstack([rgb, alpha])
    image = Image.fromarray(np.clip(np.round(rgba * 255), 0, 255).astype(np.uint8), 'RGBA')
    bbox = image.getchannel('A').point(lambda value: 255 if value > 1 else 0).getbbox()
    if not bbox:
        return None
    return image.crop(bbox), (-frame['left'] - bbox[0], -frame['top'] - bbox[1])


def build_shadow(job_id, frame):
    path = f'{TILES_DIR}/t{job_id}_s.png'
    if not os.path.exists(path):
        return None
    gray = np.asarray(Image.open(path).convert('L'), dtype=np.float64) / 255
    amount = downsample(1 - gray)
    image = Image.fromarray(np.clip(np.round(amount * 255), 0, 255).astype(np.uint8), 'L')
    bbox = image.point(lambda value: 255 if value > 3 else 0).getbbox()
    if not bbox:
        return None
    alpha = image.crop(bbox)
    sprite = Image.new('RGBA', alpha.size, (0, 0, 0, 0))
    sprite.putalpha(alpha)
    return sprite, (-frame['left'] - bbox[0], -frame['top'] - bbox[1])


def pack(images, max_width=2048, gap=1):
    """Раскладка полками по убыванию высоты. Возвращает атлас и позиции."""
    order = sorted(range(len(images)), key=lambda index: -images[index].height)
    positions = [None] * len(images)
    x = y = shelf = 0
    for index in order:
        image = images[index]
        if x + image.width > max_width:
            x, y, shelf = 0, y + shelf + gap, 0
        positions[index] = (x, y)
        x += image.width + gap
        shelf = max(shelf, image.height)
    atlas = Image.new('RGBA', (max_width, y + shelf), (0, 0, 0, 0))
    for index, image in enumerate(images):
        atlas.paste(image, positions[index])
    return atlas, positions


# ---------------- тайлы ----------------
sprites, shadows = {}, {}
for job in jobs:
    meta = json.load(open(f'{TILES_DIR}/t{job["id"]}.json'))
    if meta['empty']:
        continue
    sprite = build_sprite(job['id'], meta['frame'])
    if sprite:
        sprites[job['id']] = sprite
    if job['shadow'] and meta.get('shadowFrame'):
        shadow = build_shadow(job['id'], meta['shadowFrame'])
        if shadow:
            shadows[job['id']] = shadow

sprite_ids = sorted(sprites)
atlas, positions = pack([sprites[job_id][0] for job_id in sprite_ids])
sprite_at = {job_id: positions[index] for index, job_id in enumerate(sprite_ids)}
shadow_ids = sorted(shadows)
shadow_atlas, shadow_positions = pack([shadows[job_id][0] for job_id in shadow_ids])
shadow_at = {job_id: shadow_positions[index] for index, job_id in enumerate(shadow_ids)}
atlas.save(os.path.join(OUT_ASSETS, 'tiles.png'), optimize=True)
shadow_atlas.save(os.path.join(OUT_ASSETS, 'shadows.png'), optimize=True)

# номер тайла в игре = номер в плане; запись: [x, y, w, h, ax, ay, часть, срез, sx, sy, sw, sh, sax, say]
tile_list = []
for job in jobs:
    job_id = job['id']
    entry = [-1, 0, 0, 0, 0, 0, job['part'], plan['cutOf'].get(str(job_id), -1), -1, 0, 0, 0, 0, 0]
    if job_id in sprites:
        image, anchor = sprites[job_id]
        entry[0:6] = [*sprite_at[job_id], image.width, image.height, anchor[0], anchor[1]]
    if job_id in shadows:
        image, anchor = shadows[job_id]
        entry[8:14] = [*shadow_at[job_id], image.width, image.height, anchor[0], anchor[1]]
    tile_list.append(entry)

# ---------------- размещение на карте ----------------
placements = []          # (тайл, col, row, level, слой) — для границ и общего вида
for cell, tile in enumerate(plan['ground']):
    placements.append((tile, cell % GRID, cell // GRID, 0, 'ground'))
for level in range(LEVELS):
    for cell, tile in enumerate(plan['floor'][level]):
        if tile >= 0:
            placements.append((tile, cell % GRID, cell // GRID, level, 'floor'))
    for layer in ('wallW', 'wallN'):
        for cell, tile in enumerate(plan[layer][level]):
            if tile >= 0:
                placements.append((tile, cell % STRIDE, cell // STRIDE, level, layer))
for tile, col, row, level in plan['objects']:
    placements.append((tile, col, row, level, 'object'))


def anchor_pixel(col, row, level, origin):
    return (origin[0] + STEP_X * (col - row), origin[1] + STEP_Y * (col + row) - level * LEVEL_PIXELS)


# границы всех тайлов и теней при начале координат в (0, 0)
min_x = min_y = 1e9
max_x = max_y = -1e9
for tile, col, row, level, _ in placements:
    point = anchor_pixel(col, row, level, (0, 0))
    for table in (sprites, shadows):
        if tile in table:
            image, anchor = table[tile]
            min_x, min_y = min(min_x, point[0] - anchor[0]), min(min_y, point[1] - anchor[1])
            max_x, max_y = max(max_x, point[0] - anchor[0] + image.width), max(max_y, point[1] - anchor[1] + image.height)
MARGIN = 16
origin = (int(np.ceil(-min_x)) + MARGIN, int(np.ceil(-min_y)) + MARGIN)
width, height = int(np.ceil(max_x + origin[0])) + MARGIN, int(np.ceil(max_y + origin[1])) + MARGIN

# ---------------- общий вид, как его собирает игра ----------------
def compose(view_level, cut, doors=False):
    canvas = Image.new('RGBA', (width, height), (20, 18, 16, 255))
    def paste(target, image, point, anchor):
        target.alpha_composite(image, (int(round(point[0] - anchor[0])), int(round(point[1] - anchor[1]))))
    for tile, col, row, level, layer in placements:
        if layer == 'ground' and tile in sprites:
            paste(canvas, sprites[tile][0], anchor_pixel(col, row, 0, origin), sprites[tile][1])
    shadow_layer = Image.new('RGBA', (width, height), (0, 0, 0, 0))
    for tile, col, row, level, layer in placements:
        if layer == 'ground' or level > view_level:
            continue
        if cut and level == view_level and layer in ('wallW', 'wallN'):
            tile = plan['cutOf'].get(str(tile), tile)
        if tile in shadows:
            paste(shadow_layer, shadows[tile][0], anchor_pixel(col, row, level, origin), shadows[tile][1])
    alpha = shadow_layer.getchannel('A').point(lambda value: int(value * SHADOW_STRENGTH))
    shadow_layer.putalpha(alpha)
    canvas.alpha_composite(shadow_layer)
    pieces = []
    for tile, col, row, level, layer in placements:
        if layer == 'ground' or level > view_level:
            continue
        if cut and level == view_level and layer in ('wallW', 'wallN'):
            tile = plan['cutOf'].get(str(tile), tile)
        if tile in sprites:
            pieces.append(((col + row) * 100 + level * 10 + jobs[tile]['part'], tile, col, row, level))
    if doors:
        for col, row, level, orient, leaf, leaf_cut in plan['doors']:
            if level > view_level:
                continue
            tile = leaf_cut if cut and level == view_level else leaf
            if tile in sprites:
                pieces.append(((col + row) * 100 + level * 10 + (2.05 if orient == 'W' else 3.05), tile, col, row, level))
    pieces.sort(key=lambda item: item[0])
    for _, tile, col, row, level in pieces:
        paste(canvas, sprites[tile][0], anchor_pixel(col, row, level, origin), sprites[tile][1])
    return canvas.convert('RGB')

overview = compose(3, False)
overview.save(os.path.join(TILES_DIR, 'compose_v3f.png'))
compose(0, False).save(os.path.join(TILES_DIR, 'compose_v0f.png'))
compose(1, True).save(os.path.join(TILES_DIR, 'compose_v1c.png'))
minimap = overview.resize((width // 4, height // 4), Image.LANCZOS)
minimap.save(os.path.join(OUT_ASSETS, 'minimap.jpg'), quality=85)

# ---------------- данные карты для игры ----------------
old_text = open(os.path.join(GAME_DIR, 'js/maps/outpost.js'), encoding='utf-8').read()
old_map = json.loads(re.search(r'var MAP = (\{.*\});', old_text, re.S).group(1))
field = {
    'width': width, 'height': height, 'tile': projection['tile'], 'tiles': GRID, 'ppm': projection['pixelsPerMeter'],
    'origin': list(origin), 'colStep': [origin[0] + STEP_X, origin[1] + STEP_Y], 'rowStep': [origin[0] - STEP_X, origin[1] + STEP_Y],
    'up': [origin[0], origin[1] - projection['upPixels']],
}
game_map = {key: value for key, value in old_map.items() if key != 'variants'}
game_map['minimap'] = 'assets/maps/outpost_tiles/minimap.jpg'
door_tiles = []
for door in old_map['doors']:
    orient = 'W' if door[3] == 0 else 'N'
    match = next(item for item in plan['doors'] if item[0] == door[0] and item[1] == door[1] and item[2] == door[2] and item[3] == orient)
    door_tiles.append(match[4])
game_map['tileset'] = {
    'image': 'assets/maps/outpost_tiles/tiles.png', 'shadows': 'assets/maps/outpost_tiles/shadows.png',
    'shadowStrength': SHADOW_STRENGTH, 'levelPixels': LEVEL_PIXELS,
    'list': tile_list,
    'ground': plan['ground'], 'floor': plan['floor'], 'wallW': plan['wallW'], 'wallN': plan['wallN'],
    'objects': plan['objects'], 'doors': door_tiles,
}
with open(os.path.join(GAME_DIR, 'js/maps/outpost_tiles.js'), 'w', encoding='utf-8') as output:
    output.write('// Сгенерировано tools/render/tilesetbuild.py: карта «База на плато», собирается из тайлов.\n')
    output.write('var FIELD = ' + json.dumps(field) + ';\n')
    output.write('var MAP = ' + json.dumps(game_map, separators=(',', ':')) + ';\n')

print('tiles', len(sprites), 'shadows', len(shadows), 'atlas', atlas.size, 'shadow atlas', shadow_atlas.size, 'map', (width, height))
