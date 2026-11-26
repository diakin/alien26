"""Собирает набор тайлов карты базы из проходов рендера (tilesetrun.mjs) и пишет данные для игры.

  python tilesetbuild.py tiles_dir ../../game [shadow_strength]
  MAP=big python tilesetbuild.py tiles_dir ../../game   — карта 48×48 из секторов (tilesetrun.mjs с MAP=big):
      атлас в game/assets/maps/outpost_big/, карта в game/js/maps/outpost_tiles_big.js, проходимость — из layout.json

Из каждого тайла: цвет + маска (суперсэмплинг 2x) -> RGBA x1, тень на земле -> маска тени x1.
Тайлы раскладываются в атлас game/assets/maps/outpost_tiles/tiles.png, тени — в shadows.png.
Карта пишется в game/js/maps/outpost_tiles.js: проекция FIELD (шаг клетки ровно 61x35), данные
проходимости из прежней карты и слои тайлов: земля, пол, стены W и N по уровням, предметы.
Заодно собирается общий вид карты (как его нарисует игра) — для мини-карты и для сравнения.

  MAP=base ROT=1 python tilesetbuild.py tiles_dir ../../game — набор тайлов повёрнутого вида (tilesetrun.mjs с ROT=1):
      атлас в game/assets/maps/outpost_base_r1/, вид — в game/js/maps/outpost_tiles_base_r1.js (MAP_VIEWS[1]: проекция,
      мини-карта, слои тайлов; створки дверей — в порядке MAP.doors основной карты, с клеткой и гранью в повёрнутом виде).
"""
import math
import json, os, re, sys
import numpy as np
from PIL import Image

TILES_DIR, GAME_DIR = sys.argv[1], sys.argv[2]
SHADOW_STRENGTH = float(sys.argv[3]) if len(sys.argv) > 3 else 0.5
MAP_NAME = os.environ.get('MAP', 'outpost')
ROT = int(os.environ.get('ROT', '0')) % 4
ASSET_FOLDER = 'assets/maps/outpost_tiles' if MAP_NAME == 'outpost' else 'assets/maps/outpost_' + MAP_NAME
if ROT:
    ASSET_FOLDER += '_r' + str(ROT)
OUT_ASSETS = os.path.join(GAME_DIR, ASSET_FOLDER)
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


def pack_pages(images, max_width=2048, max_height=8192, gap=1):
    """Раскладка полками по страницам высотой не больше max_height (большие карты: один атлас был бы слишком
    высоким для браузера). Возвращает список атласов и позиции (страница, x, y)."""
    order = sorted(range(len(images)), key=lambda index: -images[index].height)
    positions = [None] * len(images)
    page, x, y, shelf = 0, 0, 0, 0
    heights = []
    for index in order:
        image = images[index]
        if x + image.width > max_width:
            x, y, shelf = 0, y + shelf + gap, 0
        if y + image.height > max_height:
            heights.append(y + shelf if x else y)
            page, x, y, shelf = page + 1, 0, 0, 0
        positions[index] = (page, x, y)
        x += image.width + gap
        shelf = max(shelf, image.height)
    heights.append(y + shelf)
    atlases = [Image.new('RGBA', (max_width, max(1, height)), (0, 0, 0, 0)) for height in heights]
    for index, image in enumerate(images):
        page, x, y = positions[index]
        atlases[page].paste(image, (x, y))
    return atlases, positions


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
shadow_ids = sorted(shadows)
# атлас страницами по 2048 × 8192: один длинный атлас большой карты браузер может не показать
atlases, positions = pack_pages([sprites[job_id][0] for job_id in sprite_ids])
sprite_at = {job_id: positions[index] for index, job_id in enumerate(sprite_ids)}
shadow_atlases, shadow_positions = pack_pages([shadows[job_id][0] for job_id in shadow_ids])
shadow_at = {job_id: shadow_positions[index] for index, job_id in enumerate(shadow_ids)}
page_name = lambda base, page: base + ('' if page == 0 else str(page)) + '.png'
for old_file in os.listdir(OUT_ASSETS):
    if re.fullmatch(r'(tiles|shadows)\d+\.png', old_file):
        os.remove(os.path.join(OUT_ASSETS, old_file))
for page, image in enumerate(atlases):
    image.save(os.path.join(OUT_ASSETS, page_name('tiles', page)), optimize=True)
for page, image in enumerate(shadow_atlases):
    image.save(os.path.join(OUT_ASSETS, page_name('shadows', page)), optimize=True)
atlas, shadow_atlas = atlases[0], shadow_atlases[0]

# номер тайла в игре = номер в плане; запись: [x, y, w, h, ax, ay, часть, срез, sx, sy, sw, sh, sax, say, страница, страница тени]
tile_list = []
for job in jobs:
    job_id = job['id']
    entry = [-1, 0, 0, 0, 0, 0, job['part'], plan['cutOf'].get(str(job_id), -1), -1, 0, 0, 0, 0, 0, 0, 0]
    if job_id in sprites:
        image, anchor = sprites[job_id]
        page, x, y = sprite_at[job_id]
        entry[0:6] = [x, y, image.width, image.height, anchor[0], anchor[1]]
        entry[14] = page
    if job_id in shadows:
        image, anchor = shadows[job_id]
        page, x, y = shadow_at[job_id]
        entry[8:14] = [x, y, image.width, image.height, anchor[0], anchor[1]]
        entry[15] = page
    tile_list.append(entry)
if len(atlases) == 1 and len(shadow_atlases) == 1:
    tile_list = [entry[:14] for entry in tile_list]          # одна страница: прежний формат

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
field = {
    'width': width, 'height': height, 'tile': projection['tile'], 'tiles': GRID, 'ppm': projection['pixelsPerMeter'],
    'origin': list(origin), 'colStep': [origin[0] + STEP_X, origin[1] + STEP_Y], 'rowStep': [origin[0] - STEP_X, origin[1] + STEP_Y],
    'up': [origin[0], origin[1] - projection['upPixels']],
}
WALL_CODES = {None: 0, 'wall': 1, 'window': 2, 'door': 3, 'rail': 4, 'parapet': 5, 'barrier': 6, 'hull': 7, 'mesh': 8}


def map_from_layout(layout):
    """Проходимость, стены, двери, лестницы и точки высадки — из разметки (как outpostbuild.py)."""
    tiles, levels = layout['TILES'], layout['LEVELS']
    flat = lambda grid, size, convert=lambda value: value: [[convert(grid[level][row][col]) for row in range(size) for col in range(size)] for level in range(levels)]
    blocked = [[0] * (tiles * tiles) for _ in range(levels)]
    for item in layout['objects']:
        if not item.get('blocks', True):
            continue
        for row in range(item['row'], item['row'] + item['rows']):
            for col in range(item['col'], item['col'] + item['cols']):
                blocked[item['level']][row * tiles + col] = 1
    for level, col, row in layout.get('blockedCells', []):
        blocked[level][row * tiles + col] = 1
    doors = []
    for level in range(levels):
        for row in range(tiles + 1):
            for col in range(tiles + 1):
                for orient, grid in (('W', layout['wallW']), ('N', layout['wallN'])):
                    wall = grid[level][row][col]
                    if wall and wall['type'] == 'door':
                        doors.append([col, row, level, 0 if orient == 'W' else 1])
    door_number = {tuple(door): index for index, door in enumerate(doors)}
    gates = [{'kind': gate['kind'], 'airlock': gate['airlock'], 'height': gate['height'],
              'doors': [door_number[(edge[0], edge[1], edge[3] if len(edge) > 3 else 0, 0 if edge[2] == 'W' else 1)] for edge in gate['edges']]} for gate in layout.get('gates', [])]
    result = {
        'name': layout['name'], 'combat': layout['combat'], 'tiles': tiles, 'levels': levels, 'levelHeight': layout['LEVEL_H'], 'tile': layout['TILE'],
        'floor': flat(layout['floor'], tiles),
        'offset': flat(layout['offset'], tiles, lambda value: math.floor(value * 1000 + 0.5) / 1000),   # как Math.round в baselogic.js
        'wallW': flat(layout['wallW'], tiles + 1, lambda wall: WALL_CODES[wall['type'] if wall else None]),
        'wallN': flat(layout['wallN'], tiles + 1, lambda wall: WALL_CODES[wall['type'] if wall else None]),
        'indoor': flat(layout['indoor'], tiles),
        'blocked': blocked,
        'doors': doors,
        'stairs': [[stair['level'], stair['col'], stair['row'], stair['dirCol'], stair['dirRow'], stair['count']] for stair in layout['stairs']],
        'links': [{'from': link['from'], 'to': link['to'], 'cost': link['cost'], 'kind': link['kind']} for link in layout['links']],
        'spawns': layout['spawns'],
        'extraction': layout.get('extraction'),
        'mission': layout.get('mission'),
        'caption': layout.get('caption'),
    }
    if gates:
        result['gates'] = gates
    return result


def view_edge(col, row, orient, turns):
    """Грань (W / N клетки) основной карты -> грань повёрнутого вида (как rotateLayout в outpost_layout.js)."""
    for _ in range(turns):
        if orient == 'W':
            col, row, orient = GRID - 1 - row, col, 'N'
        else:
            col, row, orient = GRID - row, col, 'W'
    return col, row, orient


if ROT:
    # повёрнутый вид: только картинка; проходимость, двери и препятствия — из основной карты
    base_text = open(os.path.join(GAME_DIR, 'js/maps/outpost_tiles_' + MAP_NAME + '.js'), encoding='utf-8').read()
    base_map = json.loads(re.search(r'var MAP = (\{.*\});', base_text, re.S).group(1))
    door_tiles, door_cells = [], []
    for col, row, level, orient_code in base_map['doors']:
        view_col, view_row, view_orient = view_edge(col, row, 'W' if orient_code == 0 else 'N', ROT)
        match = next(item for item in plan['doors'] if item[0] == view_col and item[1] == view_row and item[2] == level and item[3] == view_orient)
        door_tiles.append(match[4])
        door_cells.append([view_col, view_row, 0 if view_orient == 'W' else 1])
    view = {
        'turns': ROT, 'field': field, 'minimap': ASSET_FOLDER + '/minimap.jpg', 'doorCells': door_cells,
        'tileset': {
            'image': ASSET_FOLDER + '/tiles.png', 'shadows': ASSET_FOLDER + '/shadows.png',
            'images': [ASSET_FOLDER + '/' + page_name('tiles', page) for page in range(len(atlases))],
            'shadowImages': [ASSET_FOLDER + '/' + page_name('shadows', page) for page in range(len(shadow_atlases))],
            'shadowStrength': SHADOW_STRENGTH, 'levelPixels': LEVEL_PIXELS,
            'list': tile_list,
            'ground': plan['ground'], 'floor': plan['floor'], 'wallW': plan['wallW'], 'wallN': plan['wallN'],
            'objects': plan['objects'], 'doors': door_tiles,
        },
    }
    view_file = 'js/maps/outpost_tiles_' + MAP_NAME + '_r' + str(ROT) + '.js'
    with open(os.path.join(GAME_DIR, view_file), 'w', encoding='utf-8') as output:
        output.write('// Сгенерировано tools/render/tilesetbuild.py: вид карты «' + base_map['name'] + '», повёрнутый ' + str(ROT) + ' раз на 90°.\n')
        output.write('(window.MAP_VIEWS = window.MAP_VIEWS || {})[' + str(ROT) + '] = ' + json.dumps(view, separators=(',', ':')) + ';\n')
    print('view', ROT, 'tiles', len(sprites), 'shadows', len(shadows), 'atlas pages', [image.size for image in atlases], 'map', (width, height))
    sys.exit(0)

if MAP_NAME == 'outpost':
    old_text = open(os.path.join(GAME_DIR, 'js/maps/outpost.js'), encoding='utf-8').read()
    old_map = json.loads(re.search(r'var MAP = (\{.*\});', old_text, re.S).group(1))
    game_map = {key: value for key, value in old_map.items() if key != 'variants'}
    game_map['combat'] = False            # своя база: мирная обстановка, бойцы стоят «вольно»
else:
    game_map = map_from_layout(json.load(open(os.path.join(TILES_DIR, 'layout.json'))))
game_map['minimap'] = ASSET_FOLDER + '/minimap.jpg'
# препятствия для пуль: рамки предметов [уровень, col, row, x0, z0, x1, z1, y0, y1] (x, z в клетках, y в метрах)
game_map['solids'] = plan_data['solids']
door_tiles = []
for door in game_map['doors']:
    orient = 'W' if door[3] == 0 else 'N'
    match = next(item for item in plan['doors'] if item[0] == door[0] and item[1] == door[1] and item[2] == door[2] and item[3] == orient)
    door_tiles.append(match[4])
game_map['tileset'] = {
    'image': ASSET_FOLDER + '/tiles.png', 'shadows': ASSET_FOLDER + '/shadows.png',
    'images': [ASSET_FOLDER + '/' + page_name('tiles', page) for page in range(len(atlases))],
    'shadowImages': [ASSET_FOLDER + '/' + page_name('shadows', page) for page in range(len(shadow_atlases))],
    'shadowStrength': SHADOW_STRENGTH, 'levelPixels': LEVEL_PIXELS,
    'list': tile_list,
    'ground': plan['ground'], 'floor': plan['floor'], 'wallW': plan['wallW'], 'wallN': plan['wallN'],
    'objects': plan['objects'], 'doors': door_tiles,
}
map_file = 'js/maps/outpost_tiles.js' if MAP_NAME == 'outpost' else 'js/maps/outpost_tiles_' + MAP_NAME + '.js'
with open(os.path.join(GAME_DIR, map_file), 'w', encoding='utf-8') as output:
    output.write('// Сгенерировано tools/render/tilesetbuild.py: карта «' + game_map['name'] + '», собирается из тайлов.\n')
    output.write('var FIELD = ' + json.dumps(field) + ';\n')
    output.write('var MAP = ' + json.dumps(game_map, separators=(',', ':')) + ';\n')

if MAP_NAME == 'outpost':
    # те же препятствия — в карту пререндера (outpost.js собирается outpostbuild.py без 3D-сцены)
    old_text = re.sub(r'"solids":\[\[.*?\]\],', '', old_text, count=1)
    old_text = old_text.replace('var MAP = {', 'var MAP = {"solids":' + json.dumps(plan_data['solids'], separators=(',', ':')) + ',', 1)
    with open(os.path.join(GAME_DIR, 'js/maps/outpost.js'), 'w', encoding='utf-8') as output:
        output.write(old_text)

print('tiles', len(sprites), 'shadows', len(shadows), 'atlas pages', [image.size for image in atlases], 'shadow pages', [image.size for image in shadow_atlases], 'map', (width, height))
