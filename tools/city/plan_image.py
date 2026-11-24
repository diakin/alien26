"""Картинка плана города по разметке: python plan_image.py layout.json out.png [level]
layout.json — дамп buildLayout() для MAP=city (tools/city/dump_layout.mjs)."""
import json, sys
from PIL import Image, ImageDraw, ImageFont

layout = json.load(open(sys.argv[1], encoding='utf-8'))
out_path = sys.argv[2]
level = int(sys.argv[3]) if len(sys.argv) > 3 else 0
TILES = layout['TILES']
CELL = 12
MARGIN = 40
SURFACE_COLORS = {0: (196, 170, 130), 1: (70, 72, 76), 2: (178, 176, 168), 3: (112, 150, 84), 4: (200, 184, 150), 5: (160, 150, 140), 6: (222, 204, 150)}
FLOOR_COLORS = {'parquet': (186, 140, 96), 'marble': (226, 222, 212), 'steel': (140, 150, 160), 'tiles': (196, 200, 196)}
OBJECT_COLORS = {'tree': (52, 110, 48), 'hedge': (70, 128, 60), 'bench': (130, 90, 60), 'streetLamp': (30, 30, 30), 'lamp': (30, 30, 30),
                 'car': (160, 60, 60), 'column': (240, 236, 226), 'fountain': (90, 150, 200), 'counter': (120, 80, 50), 'deposits': (120, 126, 132)}
size = TILES * CELL + 2 * MARGIN
image = Image.new('RGB', (size, size + 30), (240, 238, 232))
draw = ImageDraw.Draw(image)
try:
    font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 13)
    small = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 10)
    big = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 18)
except OSError:
    font = small = big = ImageFont.load_default()

def cell_box(col, row, cols=1, rows=1, inset=0):
    return (MARGIN + col * CELL + inset, MARGIN + row * CELL + inset, MARGIN + (col + cols) * CELL - inset, MARGIN + (row + rows) * CELL - inset)

for row in range(TILES):
    for col in range(TILES):
        color = SURFACE_COLORS[layout['surface'][row][col]]
        style = layout['floorStyle'][level][row][col]
        if layout['indoor'][level][row][col] and style:
            color = FLOOR_COLORS.get(style, (200, 200, 200))
        elif level > 0:
            color = tuple(int(channel * 0.45 + 140) for channel in color)
        draw.rectangle(cell_box(col, row), fill=color)
        mark = layout['marking'][row][col]
        x0, y0, x1, y1 = cell_box(col, row)
        if mark == 'dash':
            draw.line((x0 + 1, y0, x1 - 1, y0), fill=(240, 240, 230), width=2)
        elif mark == 'zebra' and row % 2 == 0:
            draw.rectangle((x0 + 2, y0, x1 - 2, y1), fill=(230, 230, 220))
for item in layout['objects']:
    if item['level'] != level or item['kind'] in ('roof', 'paint'):
        continue
    kind = item['kind']
    color = OBJECT_COLORS.get(kind, (150, 120, 90))
    box = cell_box(item['col'], item['row'], item['cols'], item['rows'], 2)
    if kind in ('tree', 'fountain'):
        draw.ellipse(box, fill=color, outline=(20, 50, 20) if kind == 'tree' else (40, 80, 120))
    elif kind == 'tiltrotor':
        draw.rectangle(cell_box(item['col'] - 4, item['row'] - 1, 12, 6, 1), outline=(200, 30, 30), width=2)
    else:
        draw.rectangle(box, fill=color, outline=(60, 50, 40))
for blocked_level, col, row in layout['blockedCells']:
    if blocked_level == level and layout['surface'][row][col] != 5:
        draw.rectangle(cell_box(col, row, 1, 1, 3), outline=(120, 40, 40))
for stair in layout['stairs']:
    if stair['level'] != level:
        continue
    for step in range(stair['count']):
        col, row = stair['col'] + stair['dirCol'] * step, stair['row'] + stair['dirRow'] * step
        x0, y0, x1, y1 = cell_box(col, row)
        for line in range(4):
            if stair['dirCol']:
                x = x0 + (line + 0.5) * CELL / 4
                draw.line((x, y0 + 1, x, y1 - 1), fill=(60, 60, 60))
            else:
                y = y0 + (line + 0.5) * CELL / 4
                draw.line((x0 + 1, y, x1 - 1, y), fill=(60, 60, 60))
WALL_STYLE = {'wall': ((40, 34, 30), 3), 'window': ((90, 160, 210), 3), 'door': ((230, 140, 40), 3), 'rail': ((90, 90, 90), 1), 'parapet': ((40, 34, 30), 2)}
for orient in ('W', 'N'):
    grid = layout['wallW' if orient == 'W' else 'wallN'][level]
    for row in range(TILES + 1):
        for col in range(TILES + 1):
            wall = grid[row][col]
            if not wall or wall['type'] not in WALL_STYLE:
                continue
            color, width = WALL_STYLE[wall['type']]
            if wall['style'] == 'vault':
                color, width = (110, 120, 130), 5 if wall['type'] == 'wall' else 3
            if wall['style'] == 'inner' and wall['type'] == 'wall':
                width = 2
            x, y = MARGIN + col * CELL, MARGIN + row * CELL
            if orient == 'W':
                draw.line((x, y, x, y + CELL), fill=color, width=width)
            else:
                draw.line((x, y, x + CELL, y), fill=color, width=width)
# подписи
LABELS = [('детская площадка', 9, 6), ('дом', 25, 14), ('банк', 47, 16), ('хранилище', 47, 6.8), ('стоянка', 67, 11), ('полиция', 83, 14),
          ('тротуар', 50, 28.8), ('проспект', 26, 36), ('тротуар', 50, 50.6), ('дом', 9.5, 62), ('дом', 28, 63), ('дом', 57, 62), ('дом', 79, 63),
          ('кусты', 16, 72.2), ('кусты', 72, 72.2), ('дорожка', 18, 76.8), ('дорожка', 74, 76.8), ('деревья', 18, 85.2), ('фонтан', 46.5, 82.5), ('конвертоплан', 70, 94.2)]
if level == 0:
    for text, col, row in LABELS:
        x, y = MARGIN + col * CELL, MARGIN + row * CELL
        width = draw.textlength(text, font=font)
        draw.rectangle((x - width / 2 - 3, y - 8, x + width / 2 + 3, y + 8), fill=(255, 255, 255))
        draw.text((x - width / 2, y - 8), text, fill=(20, 20, 20), font=font)
def marker(col, row, color, label=None):
    x, y = MARGIN + (col + 0.5) * CELL, MARGIN + (row + 0.5) * CELL
    draw.ellipse((x - 4, y - 4, x + 4, y + 4), fill=color, outline=(0, 0, 0))
    if label:
        draw.text((x + 6, y - 6), label, fill=color, font=small)
spawns = layout['spawns']
for col, row, spawn_level, _ in spawns['squad'] + spawns['mech']:
    if spawn_level == level:
        marker(col, row, (40, 120, 230))
for col, row, spawn_level, _ in spawns['aliens']:
    if spawn_level == level:
        marker(col, row, (220, 40, 40))
mission = layout['mission']
for person in mission['civilians']:
    if person['level'] == level:
        marker(person['col'], person['row'], (250, 200, 0) if person.get('vip') else (250, 240, 120), 'учёный' if person.get('vip') else None)
if level == 0:
    col, row, _ = mission['portal']
    x, y = MARGIN + (col + 0.5) * CELL, MARGIN + (row + 0.5) * CELL
    draw.ellipse((x - 18, y - 12, x + 18, y + 12), outline=(160, 40, 220), width=3)
    draw.text((x + 22, y - 8), 'портал (через 30 мин)', fill=(120, 20, 170), font=font)
# сетка-шкала по 8 клеток
for index in range(0, TILES + 1, 8):
    position = MARGIN + index * CELL
    draw.text((position - 6, MARGIN - 16), str(index), fill=(90, 90, 90), font=small)
    draw.text((MARGIN - 24, position - 6), str(index), fill=(90, 90, 90), font=small)
title = f"{layout['name']} — {TILES}×{TILES} клеток ({TILES * layout['TILE']:.0f} × {TILES * layout['TILE']:.0f} м), уровень {level}"
draw.text((MARGIN, size + 2), title, fill=(20, 20, 20), font=big)
draw.text((MARGIN + 620, size + 6), '● отряд   ● пришельцы   ● гражданские', fill=(60, 60, 60), font=font)
image.save(out_path)
print(out_path, image.size)
