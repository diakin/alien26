"""Лист спрайтов пришельца и робота K7: позы по строкам, 8 направлений по столбцам.
Запуск из папки art: python3 ../tools/render/sheet_aliens.py"""
import json
from PIL import Image, ImageDraw, ImageFont

meta = json.load(open('sprites/sprites.json'))
rows = [('alien_idle', 'Пришелец, стойка', 170), ('alien_walk_f4', 'Пришелец, шаг', 170),
        ('mech_idle', 'Робот K7, стойка', 300), ('mech_walk_f4', 'Робот K7, шаг', 300)]
directions = ['к зрителю', 'вниз-влево', 'влево', 'вверх-влево', 'от зрителя', 'вверх-вправо', 'вправо', 'вниз-вправо']
CELL_W, LEFT, TOP = 196, 150, 60
font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 14)
small = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 12)
total_height = TOP + sum(height for _, _, height in rows) + 20
sheet = Image.new('RGB', (LEFT + CELL_W * 8, total_height), (92, 104, 72))
draw = ImageDraw.Draw(sheet)
for column, name in enumerate(directions):
    draw.text((LEFT + column * CELL_W + CELL_W / 2, 24), f'{column}: {name}', fill=(235, 238, 230), font=small, anchor='mm')
row_top = TOP
for key, title, height in rows:
    draw.text((12, row_top + height / 2), title, fill=(240, 242, 236), font=font)
    for column in range(8):
        name = f'{key}_d{column}_x1'
        sprite = Image.open(f'sprites/x1/{name}.png')
        foot_x, foot_y = LEFT + column * CELL_W + CELL_W / 2, row_top + height - 20
        sheet.paste(sprite, (round(foot_x - meta[name]['anchor_x']), round(foot_y - meta[name]['anchor_y'])), sprite)
    row_top += height
sheet.save('sprite_sheet_aliens_mech.png')
print(sheet.size)
