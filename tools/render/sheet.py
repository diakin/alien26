"""Лист спрайтов: позы по строкам, 8 направлений по столбцам."""
import json
from PIL import Image, ImageDraw, ImageFont

meta = json.load(open('sprites/sprites.json'))
rows = [('black_idle', 'Ожидание'), ('black_standAim', 'Огонь стоя'), ('black_kneelAim', 'Огонь с колена'),
        ('black_crouchAim', 'Присед, огонь'), ('green_idle', 'Ожидание'), ('green_standAim', 'Огонь стоя'),
        ('green_kneelAim', 'Огонь с колена'), ('green_walk', 'Шаг')]
directions = ['к зрителю', 'вниз-влево', 'влево', 'вверх-влево', 'от зрителя', 'вверх-вправо', 'вправо', 'вниз-вправо']
CELL_W, CELL_H, LEFT, TOP = 196, 250, 150, 60
font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 15)
small = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 12)
sheet = Image.new('RGB', (LEFT + CELL_W * 8 + 20, TOP + CELL_H * len(rows) + 20), (92, 104, 72))
draw = ImageDraw.Draw(sheet)
for column, name in enumerate(directions):
    draw.text((LEFT + column * CELL_W + CELL_W / 2, 30), f'{column}: {name}', fill=(235, 238, 230), font=small, anchor='mm')
for row, (key, title) in enumerate(rows):
    y0 = TOP + row * CELL_H
    draw.text((16, y0 + CELL_H / 2 - 10), title, fill=(240, 242, 236), font=font)
    draw.text((16, y0 + CELL_H / 2 + 12), 'чёрный камуфляж' if key.startswith('black') else 'зелёный камуфляж', fill=(200, 206, 190), font=small)
    for column in range(8):
        name = f'{key}_d{column}_x2'
        sprite = Image.open(f'sprites/{name}.png')
        anchor_x, anchor_y = meta[name]['anchor']
        foot_x, foot_y = LEFT + column * CELL_W + CELL_W / 2, y0 + CELL_H - 30
        draw.ellipse((foot_x - 3, foot_y - 2, foot_x + 3, foot_y + 2), fill=(70, 78, 54))
        sheet.paste(sprite, (round(foot_x - anchor_x), round(foot_y - anchor_y)), sprite)
sheet.save('sprite_sheet.png')
print(sheet.size)
