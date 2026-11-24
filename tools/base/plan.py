# План подземной базы: помещения — прямоугольники на сетке клеток 1,25 м. Проверяет пересечения,
# считает клетки по модулям и рисует схему. python3 plan.py <папка вывода>
# Пишет base_plan.png (схема), base_plan.json (помещения, двери — для будущей карты), base_plan.txt (таблица).
import os, json, sys
from PIL import Image, ImageDraw, ImageFont

CELL_METERS = 1.25
LEVEL_METERS = 2.5
GRID_WIDTH, GRID_HEIGHT = 48, 25

# модуль: номер, название, цвет
MODULES = {
    1: ('Грузовой шлюз', (200, 150, 70)),
    2: ('Ангар', (120, 140, 170)),
    3: ('Каюты и столовая', (110, 160, 110)),
    4: ('Оружейная', (190, 90, 80)),
    5: ('Лаборатории', (110, 170, 190)),
    6: ('Мастерские', (180, 170, 90)),
    7: ('Жилой блок учёных и инженеров', (150, 120, 180)),
    8: ('Обеспечение (рекомендуется)', (140, 140, 140)),
    0: ('Коридоры', (70, 74, 78)),
}
# помещение: модуль, название, x, y, ширина, высота (клетки), уровней в высоту, примечание
# Зоны: запад — боевая (ангар, цех, оружейная), центр — наука, восток — приёмка грузов и техника у шахты,
# юг — жилой коридор вдоль всех кают. Между помещениями — скала.
ROOMS = [
    # 2. Ангар: платформа подъёмника 12×12 и техническая полоса 4×12; высота 3 уровня (7,5 м)
    (2, 'Платформа подъёмника', 0, 1, 12, 12, 3, 'конвертоплан КТ-6: 10×12 клеток с опущенной рампой, высота 6,5 м; шахта до поверхности'),
    (2, 'Техническая полоса', 12, 1, 4, 12, 3, 'заправка, подвоз боеприпасов, пульт подъёмника'),
    # 6. Мастерские: цех в 2 уровня (стенд ремонта K7), склад материалов — дверь в цех
    (6, 'Цех', 16, 7, 8, 6, 2, 'стенд ремонта K7, станки; ворота 3 клетки в галерею'),
    (6, 'Склад материалов', 16, 3, 4, 4, 1, 'дверь в цех'),
    (8, 'Электростанция', 20, 3, 5, 4, 1, 'генераторы, аккумуляторы; дверь в цех'),
    # 5. Лаборатории
    (5, 'Лаборатория 1', 25, 8, 6, 5, 1, ''),
    (5, 'Лаборатория 2', 31, 8, 6, 5, 1, ''),
    (5, 'Изолятор образцов', 25, 4, 4, 4, 1, 'вход только через лабораторию 1'),
    # 1. Грузовой шлюз: лифт с поверхности → шлюз → приёмка → склад и галерея
    (1, 'Грузовой лифт', 44, 1, 4, 4, 1, 'платформа 5×5 м, шахта до поверхности'),
    (1, 'Шлюз', 44, 5, 4, 2, 1, 'две гермодвери'),
    (1, 'Приёмка', 44, 7, 4, 4, 1, 'разгрузка'),
    (1, 'КПП', 44, 11, 2, 2, 1, 'пост охраны у выхода в галерею'),
    (1, 'Общий склад', 40, 7, 4, 6, 1, 'двери в приёмку и галерею'),
    (8, 'Жизнеобеспечение', 40, 3, 4, 4, 1, 'вентиляция от шахты лифта, вода, фильтры; дверь в склад'),
    # 4. Оружейная (у ангара)
    (4, 'Снаряжение', 0, 15, 4, 4, 1, 'раздевалка, сборы перед вылетом'),
    (4, 'Оружейная', 4, 15, 5, 4, 1, 'стойки на 14 комплектов, верстак'),
    (4, 'Склад боеприпасов', 9, 15, 3, 4, 1, 'бронедверь, вход через оружейную'),
    (8, 'Медпункт', 12, 15, 4, 4, 1, ''),
    (8, 'Командный пункт', 17, 15, 5, 4, 1, 'связь, радар, глобус'),
    # 3. Каюты и столовая (14 человек: 12 бойцов и 2 пилота)
    (3, 'Столовая', 22, 15, 6, 4, 1, '16 мест, 2 смены'),
    (3, 'Кухня', 28, 15, 3, 4, 1, 'с продскладом'),
    (8, 'Комната отдыха', 31, 15, 5, 4, 1, 'общая для всех'),
]
SOLDIER_CABINS = [(0, 20), (3, 20), (6, 20), (9, 20), (12, 20), (15, 20), (18, 20)]
for index, (cabinX, cabinY) in enumerate(SOLDIER_CABINS):
    ROOMS.append((3, 'Каюта %d' % (index + 1), cabinX, cabinY, 3, 3, 1, '2 места'))
ROOMS.append((3, 'Санблок', 21, 20, 4, 3, 1, 'душ, туалеты'))
SCIENCE_CABINS = [(25, 20), (28, 20), (31, 20), (34, 20), (37, 20), (40, 20), (43, 20), (37, 16)]
for index, (cabinX, cabinY) in enumerate(SCIENCE_CABINS):
    ROOMS.append((7, 'Каюта У%d' % (index + 1), cabinX, cabinY, 3, 3, 1, '2 места'))
ROOMS.append((7, 'Санблок', 40, 16, 4, 3, 1, 'душ, туалеты'))

# коридоры: главная галерея 2 клетки (проходит K7), жилой коридор 1 клетка, проходы между ними
CORRIDORS = [
    ('Главная галерея', 0, 13, 48, 3, 'ширина 3 клетки (3,75 м): K7 в модели 3,1 м шириной; ангар, цех, склад и приёмка выходят в неё'),
    ('Выход приёмки', 46, 11, 2, 2, 'к галерее'),
    ('Жилой коридор', 0, 19, 46, 1, 'вдоль всех кают'),
    ('Проход к жилому коридору', 16, 15, 1, 4, ''),
    ('Проход к каютам учёных', 36, 15, 1, 4, ''),
]
# двери: клетка помещения (x, y), сторона 'N' | 'S' | 'W' | 'E', ширина в клетках вдоль стороны, вид:
# gate — ворота (проходит K7), door — дверь, hatch — гермодверь или бронедверь
DOORS = [
    (12, 12, 'S', 4, 'gate'),                       # ангар → галерея
    (18, 12, 'S', 3, 'gate'),                       # цех → галерея (3 клетки — проходит K7)
    (17, 7, 'N', 1, 'door'), (21, 7, 'N', 1, 'door'),   # склад материалов и электростанция → цех
    (27, 12, 'S', 1, 'door'), (33, 12, 'S', 1, 'door'), (30, 10, 'E', 1, 'door'),
    (26, 8, 'N', 1, 'hatch'),                       # изолятор → лаборатория 1
    (45, 4, 'S', 2, 'hatch'), (45, 6, 'S', 2, 'hatch'),   # лифт → шлюз → приёмка
    (44, 8, 'W', 2, 'door'), (46, 10, 'S', 2, 'gate'), (45, 11, 'E', 1, 'door'),
    (41, 12, 'S', 2, 'gate'), (41, 7, 'N', 1, 'door'),
    (2, 15, 'N', 1, 'door'), (3, 16, 'E', 1, 'door'), (6, 15, 'N', 1, 'door'), (9, 17, 'W', 1, 'hatch'),
    (13, 15, 'N', 1, 'door'), (19, 15, 'N', 1, 'door'), (24, 15, 'N', 2, 'door'), (25, 18, 'S', 1, 'door'),
    (28, 16, 'W', 1, 'door'), (33, 15, 'N', 1, 'door'), (33, 18, 'S', 1, 'door'), (38, 18, 'S', 1, 'door'), (41, 18, 'S', 1, 'door'),
]
DOORS += [(cabinX + 1, cabinY, 'N', 1, 'door') for cabinX, cabinY in SOLDIER_CABINS + SCIENCE_CABINS[:7]] + [(22, 20, 'N', 1, 'door')]


# южнее галереи всё сдвигается на одну клетку: галерея расширена с 2 до 3 клеток
SOUTH = 15
def shifted(y): return y + 1 if y >= SOUTH else y
ROOMS = [(room[0], room[1], room[2], shifted(room[3])) + tuple(room[4:]) for room in ROOMS]
CORRIDORS = [corridor if corridor[0] == 'Главная галерея' else (corridor[0], corridor[1], shifted(corridor[2])) + tuple(corridor[3:]) for corridor in CORRIDORS]
DOORS = [(door[0], shifted(door[1])) + tuple(door[2:]) for door in DOORS]

# ---------------- проверка и подсчёт ----------------
def cells_of(x, y, width, height):
    return {(x + column, y + row) for column in range(width) for row in range(height)}

owner = {}
problems = []
for index, room in enumerate(ROOMS):
    for cell in cells_of(*room[2:6]):
        if cell in owner: problems.append('пересечение: %s и %s в %s' % (room[1], owner[cell], cell))
        if not (0 <= cell[0] < GRID_WIDTH and 0 <= cell[1] < GRID_HEIGHT): problems.append('за краем: %s %s' % (room[1], cell))
        owner[cell] = room[1]
for corridor in CORRIDORS:
    for cell in cells_of(*corridor[1:5]):
        if cell in owner and not owner[cell].startswith('#'): problems.append('коридор %s на помещении %s в %s' % (corridor[0], owner[cell], cell))
        owner.setdefault(cell, '#' + corridor[0])

module_cells = {}
for room in ROOMS:
    module_cells[room[0]] = module_cells.get(room[0], 0) + room[4] * room[5]
corridor_cells = len([cell for cell, name in owner.items() if name.startswith('#')])
module_cells[0] = corridor_cells
total = len(owner)

# ---------------- схема ----------------
SCALE = 26
MARGIN_LEFT, MARGIN_TOP = 30, 56
LEGEND_WIDTH = 430
font_path = '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
bold_path = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
def font(size, bold=False): return ImageFont.truetype(bold_path if bold else font_path, size)

def render(path):
    width = MARGIN_LEFT + GRID_WIDTH * SCALE + 30 + LEGEND_WIDTH
    height = MARGIN_TOP + GRID_HEIGHT * SCALE + 50
    image = Image.new('RGB', (width, height), (24, 22, 20))
    draw = ImageDraw.Draw(image)
    # скала: тёмный камень с крапом
    for column in range(GRID_WIDTH):
        for row in range(GRID_HEIGHT):
            left, top = MARGIN_LEFT + column * SCALE, MARGIN_TOP + row * SCALE
            shade = 44 + ((column * 7 + row * 13) % 5) * 3
            draw.rectangle([left, top, left + SCALE - 1, top + SCALE - 1], fill=(shade, shade - 4, shade - 8))
    def box(x, y, w, h, color, outline=(15, 15, 15)):
        left, top = MARGIN_LEFT + x * SCALE, MARGIN_TOP + y * SCALE
        draw.rectangle([left, top, left + w * SCALE - 1, top + h * SCALE - 1], fill=color, outline=outline, width=2)
        for column in range(1, w):
            draw.line([left + column * SCALE, top + 2, left + column * SCALE, top + h * SCALE - 3], fill=tuple(int(value * 0.88) for value in color))
        for row in range(1, h):
            draw.line([left + 2, top + row * SCALE, left + w * SCALE - 3, top + row * SCALE], fill=tuple(int(value * 0.88) for value in color))
        return left, top
    for corridor in CORRIDORS:
        box(corridor[1], corridor[2], corridor[3], corridor[4], MODULES[0][1], outline=(60, 62, 66))
    for room in ROOMS:
        module, name, x, y, w, h, levels, note = room
        left, top = box(x, y, w, h, MODULES[module][1])
        room_width = w * SCALE - 8
        words, lines, size = name.split(' '), [], 12
        while size > 8:
            lines, current = [], ''
            for word in words:
                trial = (current + ' ' + word).strip()
                if draw.textlength(trial, font=font(size, True)) <= room_width: current = trial
                else:
                    if current: lines.append(current)
                    current = word
            lines.append(current)
            if all(draw.textlength(line, font=font(size, True)) <= room_width for line in lines) and len(lines) <= max(1, h - 1): break
            size -= 1
        for number, line in enumerate(lines):
            draw.text((left + 4, top + 3 + number * (size + 2)), line, fill=(15, 15, 15), font=font(size, True))
        draw.text((left + 4, top + 5 + len(lines) * (size + 2)), '%d×%d=%d' % (w, h, w * h) + (' · %d ур.' % levels if levels > 1 else ''), fill=(30, 30, 30), font=font(9))
    for door in DOORS:
        x, y, side, size_cells, kind = door
        color = {'gate': (255, 170, 60), 'door': (235, 235, 225), 'hatch': (230, 70, 60)}[kind]
        thickness = 7 if kind == 'gate' else 5
        left, top = MARGIN_LEFT + x * SCALE, MARGIN_TOP + y * SCALE
        if side in 'NS':
            edge = top if side == 'N' else top + SCALE
            draw.rectangle([left + 3, edge - thickness // 2, left + size_cells * SCALE - 3, edge + thickness // 2], fill=color, outline=(10, 10, 10))
        else:
            edge = left if side == 'W' else left + SCALE
            draw.rectangle([edge - thickness // 2, top + 3, edge + thickness // 2, top + size_cells * SCALE - 3], fill=color, outline=(10, 10, 10))
    # конвертоплан на платформе: контур 10×12 клеток
    plane_left, plane_top = MARGIN_LEFT + 1 * SCALE, MARGIN_TOP + 1 * SCALE
    draw.rectangle([plane_left, plane_top + 4, plane_left + 10 * SCALE, plane_top + 12 * SCALE - 4], outline=(250, 250, 250), width=1)
    draw.text((plane_left + 8, plane_top + 5 * SCALE), 'конвертоплан\n10×12 клеток\n(с рампой)', fill=(250, 250, 250), font=font(12, True))
    # заголовок и масштаб
    draw.text((MARGIN_LEFT, 12), 'База «Ямантау» (гора Ямантау, Южный Урал) — план яруса (клетка 1,25 м)', fill=(235, 230, 220), font=font(20, True))
    bar_left, bar_top = MARGIN_LEFT, MARGIN_TOP + GRID_HEIGHT * SCALE + 14
    draw.rectangle([bar_left, bar_top, bar_left + 8 * SCALE, bar_top + 6], fill=(220, 220, 220))
    draw.text((bar_left + 8 * SCALE + 8, bar_top - 5), '10 м = 8 клеток', fill=(220, 220, 220), font=font(12))
    # легенда и таблица
    legend_left = MARGIN_LEFT + GRID_WIDTH * SCALE + 30
    line_y = MARGIN_TOP
    draw.text((legend_left, line_y), 'Модуль', fill=(235, 230, 220), font=font(14, True))
    draw.text((legend_left + 300, line_y), 'клеток', fill=(235, 230, 220), font=font(14, True))
    line_y += 26
    for module in [1, 2, 3, 4, 5, 6, 7, 8, 0]:
        name, color = MODULES[module]
        draw.rectangle([legend_left, line_y + 2, legend_left + 16, line_y + 18], fill=color, outline=(15, 15, 15))
        draw.text((legend_left + 24, line_y), ('%d. ' % module if 1 <= module <= 7 else '') + name, fill=(225, 222, 215), font=font(13))
        draw.text((legend_left + 300, line_y), '%4d' % module_cells.get(module, 0), fill=(225, 222, 215), font=font(13, True))
        line_y += 24
    draw.line([legend_left, line_y + 4, legend_left + 360, line_y + 4], fill=(150, 150, 150))
    line_y += 12
    required = sum(module_cells[module] for module in range(1, 8))
    rows = [('Модули 1–7', required), ('С обеспечением (8)', required + module_cells[8]), ('Всего с коридорами', total)]
    for label, value in rows:
        draw.text((legend_left, line_y), label, fill=(255, 210, 140), font=font(13, True))
        draw.text((legend_left + 300, line_y), '%4d' % value, fill=(255, 210, 140), font=font(13, True))
        line_y += 22
    line_y += 10
    for color, label in [((255, 170, 60), 'ворота — проходит K7'), ((235, 235, 225), 'дверь'), ((230, 70, 60), 'гермодверь / бронедверь')]:
        draw.rectangle([legend_left, line_y + 6, legend_left + 22, line_y + 12], fill=color, outline=(10, 10, 10))
        draw.text((legend_left + 30, line_y), label, fill=(225, 222, 215), font=font(12))
        line_y += 20
    line_y += 6
    draw.text((legend_left, line_y), 'Площадь всего: %d м² (%d × 1,5625 м²)' % (round(total * CELL_METERS ** 2), total), fill=(200, 200, 200), font=font(12))
    line_y += 18
    draw.text((legend_left, line_y), 'Ярус %d×%d клеток (%.1f × %.2f м)' % (GRID_WIDTH, GRID_HEIGHT, GRID_WIDTH * CELL_METERS, GRID_HEIGHT * CELL_METERS), fill=(200, 200, 200), font=font(12))
    shaft_note = [(1, 0.3, 'шахта подъёмника ангара → люк в склоне'), (44, 0.3, 'шахта лифта')]
    for x, y, text in shaft_note:
        draw.text((MARGIN_LEFT + x * SCALE + 4, MARGIN_TOP + y * SCALE - 2), '↑ ' + text, fill=(255, 225, 160), font=font(11, True), anchor='la')
    image.save(path)

# ---------------- разрез ----------------
# Высоты: дно ущелья 0 м, пол яруса −30 м, вершина +60 м. Ярус тянется вдоль сечения с запада (ангар) на восток (лифт).
def render_section(path):
    width, height = 1100, 600
    image = Image.new('RGB', (width, height), (16, 20, 26))
    draw = ImageDraw.Draw(image)
    scale = 5.0                                   # пикселей на метр, одинаково по высоте и длине
    def at(position, elevation): return (70 + (position + 10) * scale, 380 - elevation * scale)
    floor = -30
    profile = [(-10, 4), (0, 6), (20, 24), (40, 44), (58, 62), (72, 58), (95, 40), (118, 22), (140, 6), (150, 0), (165, 0), (175, 8), (190, 14)]
    draw.polygon([at(*point) for point in profile] + [at(190, -44), at(-10, -44)], fill=(72, 64, 56))
    draw.line([at(*point) for point in profile], fill=(120, 135, 95), width=4)
    draw.text(at(157, 2), 'ущелье', fill=(190, 200, 170), font=font(12, True), anchor='mb')
    base_start = 30                               # ярус: 48 клеток = 60 м, от 30 до 90 м по сечению
    def block(first_cell, cells, levels, color, label, label_inside=False):
        left, bottom = at(base_start + first_cell * CELL_METERS, floor)
        right, top = at(base_start + (first_cell + cells) * CELL_METERS, floor + levels * LEVEL_METERS)
        draw.rectangle([left, top, right, bottom], fill=color, outline=(15, 15, 15), width=2)
        if label: draw.text(((left + right) / 2, (bottom + 6) if label_inside else (top - 4)), label, fill=(235, 230, 220), font=font(11, True), anchor='mt' if label_inside else 'md')
        return left, top, right, bottom
    hangar = block(0, 16, 3, (120, 140, 170), 'ангар 7,5 м', label_inside=True)
    block(16, 8, 2, (180, 170, 90), 'цех 5 м')
    block(24, 20, 1, (110, 170, 190), 'лаборатории, склад, жилой ярус — 2,5 м', label_inside=True)
    lift = block(44, 4, 1, (200, 150, 70), '')
    # шахта подъёмника ангара до люка в склоне
    shaft_left, shaft_bottom = at(base_start + 0 * CELL_METERS, floor + 3 * LEVEL_METERS)
    shaft_right, _ = at(base_start + 12 * CELL_METERS, floor)
    hatch_elevation = 36
    _, hatch_y = at(0, hatch_elevation)
    draw.rectangle([shaft_left, hatch_y, shaft_right, shaft_bottom], fill=(34, 38, 44), outline=(120, 140, 170), width=2)
    draw.rectangle([shaft_left - 6, hatch_y - 6, shaft_right + 6, hatch_y + 2], fill=(150, 130, 90), outline=(20, 20, 20))
    draw.text((shaft_left + 6, hatch_y + 14), 'шахта\nподъёмника\n15×15 м,\n≈ 58 м', fill=(200, 210, 225), font=font(12))
    draw.text((shaft_left - 10, hatch_y - 12), 'люк под маскировкой в склоне', fill=(255, 225, 160), font=font(12, True), anchor='rb')
    # грузовой лифт до штольни на отметке 0 и портал в ущелье
    lift_left, lift_top, lift_right, _ = lift
    _, adit_floor = at(0, 0)
    _, adit_top = at(0, 3)
    draw.rectangle([lift_left, adit_top, lift_right, lift_top], fill=(34, 38, 44), outline=(200, 150, 70), width=2)
    portal_x, _ = at(146, 0)
    draw.rectangle([lift_right, adit_top, portal_x, adit_floor], fill=(34, 38, 44), outline=(200, 150, 70), width=2)
    draw.text(((lift_right + portal_x) / 2, adit_top - 4), 'штольня к порталу в ущелье ≈ 55 м', fill=(255, 225, 160), font=font(12, True), anchor='md')
    draw.text((lift_left - 6, (lift_top + adit_top) / 2), 'грузовой\nлифт 30 м', fill=(255, 225, 160), font=font(12, True), anchor='rm')
    # шкала
    draw.text((20, 14), 'Разрез по ярусу базы (масштаб по высоте и длине одинаковый)', fill=(235, 230, 220), font=font(18, True))
    for elevation in range(-30, 70, 10):
        _, mark_y = at(0, elevation)
        draw.line([46, mark_y, 54, mark_y], fill=(160, 160, 160))
        draw.text((8, mark_y - 7), '%+d м' % elevation if elevation else '0 м', fill=(160, 160, 160), font=font(10))
    draw.text((width - 20, height - 16), 'над помещениями яруса 70–90 м скалы', fill=(170, 170, 170), font=font(12), anchor='rb')
    image.save(path)

if problems:
    print('\n'.join(problems[:20]))
out = sys.argv[1] if len(sys.argv) > 1 else '.'
render(out + '/base_plan.png')
render_section(out + '/base_section.png')
json.dump({'cellMeters': CELL_METERS, 'levelMeters': LEVEL_METERS, 'grid': [GRID_WIDTH, GRID_HEIGHT],
           'modules': {str(key): value[0] for key, value in MODULES.items()},
           'rooms': [dict(module=room[0], name=room[1], x=room[2], y=room[3], width=room[4], height=room[5], levels=room[6], note=room[7]) for room in ROOMS],
           'corridors': [dict(name=item[0], x=item[1], y=item[2], width=item[3], height=item[4], note=item[5]) for item in CORRIDORS],
           'doors': [dict(x=item[0], y=item[1], side=item[2], size=item[3], kind=item[4]) for item in DOORS],
           'cells': {str(key): value for key, value in module_cells.items()}, 'total': total},
          open(out + '/base_plan.json', 'w'), ensure_ascii=False, indent=1)
# тот же план — модулем для разметчика карты базы (tools/render/outpost_layout.js, MAP=base)
render_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'render')
with open(os.path.join(render_dir, 'base_plan.js'), 'w', encoding='utf-8') as output:
    output.write('// Сгенерировано tools/base/plan.py из того же плана, что docs/base/base_plan.json. Не править вручную.\n')
    output.write('export const BASE_PLAN = ' + open(out + '/base_plan.json', encoding='utf-8').read() + ';\n')
for module in [1, 2, 3, 4, 5, 6, 7, 8, 0]:
    print('%-34s %4d' % (MODULES[module][0], module_cells.get(module, 0)))
print('всего', total)
