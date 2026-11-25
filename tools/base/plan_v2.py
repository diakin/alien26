# План модернизации базы «Ямантау» (проект): квадрат 56×56 клеток по 1,25 м, зоны, коридоры 3 клетки, шлюзы.
# python3 plan_v2.py <папка вывода> — пишет base_plan_v2.png (схема), base_plan_v2.json (зоны, помещения, двери),
# base_plan_v2.txt (площади) и план для карты: tools/render/base_plan.js (разметка, MAP=base) и game/js/base_plan.js
# (меню базы). Прежний план — plan.py, к карте больше не подключён.
import os, json, sys
from PIL import Image, ImageDraw, ImageFont

CELL_METERS = 1.25
GRID_W, GRID_H = 66, 56          # основной квадрат 56×56 + спортивная зона у юго-восточного угла
GRID = 56

# зона: ключ, название, цвет, прямоугольник (x, y, ширина, высота в клетках), доступ
ZONES = [
    ('hangar', 'Ангар', (120, 140, 170), (0, 0, 27, 20), 'шлюз ангара в H1 (КПП)'),
    ('industry', 'Промышленная', (180, 170, 90), (27, 0, 16, 20), 'шлюз из H1'),
    ('support', 'Жизнеобеспечение', (140, 140, 140), (46, 0, 10, 20), 'проход из H1'),
    ('military', 'Военная', (190, 90, 80), (0, 23, 24, 14), 'шлюз из V1'),
    ('labs', 'Лабораторная', (110, 170, 190), (27, 23, 16, 14), 'шлюз из H1'),
    ('isolator', 'Изолятор образцов', (90, 150, 120), (46, 23, 10, 14), 'шлюз санобработки из V2'),
    ('medical', 'Медицинская', (220, 130, 150), (0, 40, 13, 16), 'проход из V3'),
    ('domestic', 'Бытовая', (110, 160, 110), (16, 40, 12, 16), 'проходы из H2, V3, V4'),
    ('living', 'Жилая', (150, 120, 180), (31, 40, 25, 16), 'проходы из V4 и V5'),
    ('sport', 'Спортивная', (200, 150, 90), (59, 40, 7, 16), 'проход из V5'),
]
# коридоры между зонами, 3 клетки; H1, V1 и V2 — маршрут K7 (ангар, шлюзы промышленной, военной, лабораторной зон
# и изолятора): высотой в два уровня (5 м), как шлюзы, внутренние коридоры этих зон и их ворота
K7_CORRIDORS = {'H1', 'V1', 'V2'}
CORRIDORS = [
    ('H1', 0, 20, 56, 3), ('H2', 0, 37, 59, 3),
    ('V1', 24, 23, 3, 14), ('V2', 43, 0, 3, 20), ('V2', 43, 23, 3, 14),
    ('V3', 13, 40, 3, 16), ('V4', 28, 40, 3, 16), ('V5', 56, 40, 3, 16),
]
# помещения: зона, название, x, y, ширина, высота, уровней, вид (room | corridor | airlock)
ROOMS = [
    # ангар
    ('hangar', 'Платформа подъёмника', 0, 0, 20, 20, 4, 'room'),
    ('hangar', 'Техполоса', 20, 0, 4, 17, 4, 'room'),
    ('hangar', 'КПП', 20, 17, 4, 3, 1, 'room'),
    ('hangar', 'Проезд к цеху', 24, 0, 3, 17, 2, 'corridor'),
    ('hangar', 'Шлюз ангара', 24, 17, 3, 3, 2, 'airlock'),
    # промышленная
    ('industry', 'Цех (стенд K7)', 27, 5, 11, 10, 2, 'room'),
    ('industry', 'Склад материалов', 27, 0, 6, 5, 1, 'room'),
    ('industry', 'Мастерская', 33, 0, 5, 5, 1, 'room'),
    ('industry', 'Грузовой лифт', 38, 0, 5, 5, 2, 'room'),
    ('industry', 'Приёмка', 38, 5, 5, 5, 2, 'room'),
    ('industry', 'Общий склад', 38, 10, 5, 5, 2, 'room'),
    ('industry', 'Коридор', 27, 15, 16, 2, 2, 'corridor'),
    ('industry', 'Электроника', 27, 17, 6, 3, 1, 'room'),
    ('industry', 'Шлюз', 33, 17, 4, 3, 2, 'airlock'),
    ('industry', 'Запчасти K7', 37, 17, 6, 3, 1, 'room'),
    # жизнеобеспечение
    ('support', 'Коридор', 46, 0, 2, 20, 1, 'corridor'),
    ('support', 'Пост контроля реактора', 48, 0, 4, 4, 1, 'room'),
    ('support', 'Лифт к реактору', 52, 0, 4, 4, 1, 'room'),
    ('support', 'Энергоцентр', 48, 4, 8, 5, 1, 'room'),
    ('support', 'Вентиляция, фильтры', 48, 9, 8, 5, 1, 'room'),
    ('support', 'Водоснабжение', 48, 14, 8, 6, 1, 'room'),
    # военная
    ('military', 'Командный центр', 0, 23, 9, 6, 1, 'room'),
    ('military', 'Брифинг', 9, 23, 5, 6, 1, 'room'),
    ('military', 'Снаряжение', 14, 23, 6, 6, 1, 'room'),
    ('military', 'Коридор', 0, 29, 20, 2, 2, 'corridor'),
    ('military', 'Узел связи', 20, 23, 4, 5, 1, 'room'),
    ('military', 'Шлюз', 20, 28, 4, 4, 2, 'airlock'),
    ('military', 'Дежурная часть', 20, 32, 4, 5, 1, 'room'),
    ('military', 'Оружейная', 0, 31, 7, 6, 1, 'room'),
    ('military', 'Склад боеприпасов', 8, 31, 5, 5, 1, 'room'),
    ('military', 'Мастерская оружейника', 14, 31, 6, 6, 1, 'room'),
    # лабораторная
    ('labs', 'Кабинет учёных', 27, 23, 6, 3, 1, 'room'),
    ('labs', 'Шлюз', 33, 23, 4, 3, 2, 'airlock'),
    ('labs', 'Приборная', 37, 23, 6, 3, 1, 'room'),
    ('labs', 'Коридор', 27, 26, 16, 2, 2, 'corridor'),
    ('labs', 'Химико-аналитическая', 27, 28, 5, 9, 1, 'room'),
    ('labs', 'Ксенобиологическая', 32, 28, 6, 9, 1, 'room'),
    ('labs', 'Физическая', 38, 28, 5, 9, 1, 'room'),
    # изолятор образцов
    ('isolator', 'Шлюз санобработки', 46, 23, 4, 4, 2, 'airlock'),
    ('isolator', 'Пост наблюдения', 50, 23, 6, 4, 1, 'room'),
    ('isolator', 'Коридор', 46, 27, 2, 10, 2, 'corridor'),
    ('isolator', 'Бокс 1', 48, 27, 8, 3, 1, 'room'),
    ('isolator', 'Бокс 2', 48, 30, 8, 3, 1, 'room'),
    ('isolator', 'Бокс 3', 48, 33, 8, 4, 1, 'room'),
    # медицинская
    ('medical', 'Приёмный покой', 0, 40, 5, 4, 1, 'room'),
    ('medical', 'Процедурная, аптека', 5, 40, 4, 4, 1, 'room'),
    ('medical', 'Кабинет врача', 9, 40, 4, 4, 1, 'room'),
    ('medical', 'Коридор', 0, 44, 13, 2, 1, 'corridor'),
    ('medical', 'Коридор', 6, 46, 2, 10, 1, 'corridor'),
    ('medical', 'Операционная', 0, 46, 6, 5, 1, 'room'),
    ('medical', 'ПИТ-1', 0, 51, 6, 5, 1, 'room'),
    ('medical', 'Реанимация', 8, 46, 5, 5, 1, 'room'),
    ('medical', 'ПИТ-2', 8, 51, 5, 5, 1, 'room'),
    # бытовая
    ('domestic', 'Столовая и отдых', 16, 40, 8, 7, 1, 'room'),
    ('domestic', 'Камбуз', 24, 40, 4, 5, 1, 'room'),
    ('domestic', 'Продсклад', 24, 45, 4, 2, 1, 'room'),
    ('domestic', 'Коридор', 16, 47, 12, 2, 1, 'corridor'),
    ('domestic', 'Санблок 1 (душевые)', 16, 49, 6, 7, 1, 'room'),
    ('domestic', 'Санблок 2 (душевые)', 22, 49, 6, 4, 1, 'room'),
    ('domestic', 'Прачечная', 22, 53, 6, 3, 1, 'room'),
    # спортивная
    ('sport', 'Спортзал', 59, 40, 7, 11, 1, 'room'),
    ('sport', 'Раздевалка, душевые', 59, 51, 7, 5, 1, 'room'),
    # жилая
    ('living', 'Коридор', 31, 44, 25, 2, 1, 'corridor'),
    ('living', 'Коридор', 31, 50, 25, 2, 1, 'corridor'),
]
DOUBLE_ROW = [(31, 4), (35, 4), (39, 4), (43, 4), (47, 4), (51, 5)]
cabin = 0
for y in (40, 52):
    for x, width in DOUBLE_ROW:
        cabin += 1
        ROOMS.append(('living', 'Каюта %d' % cabin, x, y, width, 4, 1, 'room'))
SINGLES = ['Командир базы', 'Нач. штаба', 'Ком. отряда', 'Гл. врач', 'Хирург', 'Гл. учёный', 'Гл. инженер']
for index, name in enumerate(SINGLES):
    ROOMS.append(('living', name, 31 + index * 3, 46, 3, 4, 1, 'single'))
cabin += 1
ROOMS.append(('living', 'Каюта %d' % cabin, 52, 46, 4, 4, 1, 'room'))
# толстые стены (бетон, клетки): склад боеприпасов с трёх сторон и снизу
THICK = [(7, 31, 1, 6), (13, 31, 1, 6), (8, 36, 5, 1)]
# ворота шлюзов и ангара: (x, y, сторона клетки, клеток) — широкие, для K7
GATES = [
    (23, 8, 'E', 3), (24, 17, 'N', 3), (24, 19, 'S', 3), (27, 9, 'W', 3), (39, 9, 'S', 3),
    (33, 19, 'S', 3), (33, 17, 'N', 3),
    (23, 29, 'E', 3), (20, 29, 'W', 2),
    (33, 23, 'N', 3), (33, 25, 'S', 3),
    (46, 24, 'W', 3), (46, 26, 'S', 2),
    (28, 14, 'S', 3), (39, 14, 'S', 3), (39, 4, 'S', 3),
]
# обычные двери и проёмы: (x, y, сторона клетки, клеток)
DOORS = [
    (28, 4, 'S', 1), (35, 4, 'S', 1), (29, 17, 'N', 1), (39, 17, 'N', 1),                       # промышленная
    (48, 1, 'W', 1), (52, 1, 'W', 1), (48, 6, 'W', 1), (48, 11, 'W', 1), (48, 16, 'W', 1),      # жизнеобеспечение
    (46, 19, 'S', 2), (46, 17, 'W', 1),
    (23, 18, 'E', 1),                                                                           # КПП -> шлюз ангара
    (4, 28, 'S', 1), (11, 28, 'S', 1), (16, 28, 'S', 1), (20, 25, 'W', 1),                      # военная
    (3, 31, 'N', 1), (10, 31, 'N', 1), (16, 31, 'N', 1), (21, 32, 'N', 1),
    (29, 25, 'S', 1), (39, 25, 'S', 1), (29, 28, 'N', 1), (34, 28, 'N', 1), (40, 28, 'N', 1),   # лаборатории
    (50, 24, 'W', 1), (48, 28, 'W', 1), (48, 31, 'W', 1), (48, 34, 'W', 1),                     # изолятор
    (2, 40, 'N', 1), (2, 43, 'S', 1), (6, 43, 'S', 1), (10, 43, 'S', 1), (12, 44, 'E', 2),      # медицинская
    (5, 48, 'E', 1), (5, 53, 'E', 1), (8, 48, 'W', 1), (8, 53, 'W', 1),
    (19, 40, 'N', 2), (19, 46, 'S', 1), (24, 42, 'W', 1), (25, 45, 'N', 1),                     # бытовая
    (18, 49, 'N', 1), (24, 49, 'N', 1), (24, 53, 'N', 1), (16, 47, 'W', 2), (27, 47, 'E', 2),
    (31, 44, 'W', 2), (31, 50, 'W', 2), (55, 44, 'E', 2), (55, 50, 'E', 2),                     # жилая: выходы
    (59, 44, 'W', 2), (59, 52, 'W', 1), (61, 51, 'N', 1),                                       # спортивная
]
for x, width in DOUBLE_ROW:
    DOORS.append((x + 1, 43, 'S', 1))
    DOORS.append((x + 1, 52, 'N', 1))
for index in range(len(SINGLES)):
    DOORS.append((31 + index * 3 + 1, 46, 'N', 1))
DOORS.append((53, 46, 'N', 1))

problems = []
occupied = {}
def claim(x, y, width, height, label):
    for row in range(y, y + height):
        for col in range(x, x + width):
            if not (0 <= col < GRID_W and 0 <= row < GRID_H):
                problems.append('%s выходит за план (%d, %d)' % (label, col, row))
            elif (col, row) in occupied:
                problems.append('%s пересекается с %s в (%d, %d)' % (label, occupied[(col, row)], col, row))
            else:
                occupied[(col, row)] = label
for name, x, y, width, height in CORRIDORS:
    claim(x, y, width, height, name)
for zone, name, x, y, width, height, levels, kind in ROOMS:
    claim(x, y, width, height, name)
for x, y, width, height in THICK:
    claim(x, y, width, height, 'толстая стена')
# каждая клетка зоны занята помещением
for key, title, color, (zx, zy, zw, zh), access in ZONES:
    empty = [(col, row) for row in range(zy, zy + zh) for col in range(zx, zx + zw) if (col, row) not in occupied]
    if empty:
        problems.append('%s: пустых клеток %d, например %s' % (title, len(empty), empty[:3]))

# ---------------- площади ----------------
area = lambda cells: cells * CELL_METERS * CELL_METERS
lines = []
for key, title, color, (zx, zy, zw, zh), access in ZONES:
    rooms = [room for room in ROOMS if room[0] == key]
    lines.append('%-20s %2d×%-2d %4d кл. %6.0f м²  %s' % (title, zw, zh, zw * zh, area(zw * zh), access))
    for room in rooms:
        lines.append('    %-26s %2d×%-2d %5.1f м²' % (room[1], room[4], room[5], area(room[4] * room[5])))
corridor_cells = sum(item[3] * item[4] for item in CORRIDORS)
lines.append('Коридоры между зонами: %d кл., %.0f м²' % (corridor_cells, area(corridor_cells)))
lines.append('Всего: основной квадрат %d×%d кл. = %.0f×%.0f м, со спортивной зоной %d×%d кл.' % (GRID, GRID, GRID * CELL_METERS, GRID * CELL_METERS, GRID_W, GRID_H))

# ---------------- схема ----------------
SCALE = 16
MARGIN = 40
INSET_W = 360
def font(size, bold=False):
    for path in ('/usr/share/fonts/truetype/dejavu/DejaVuSans%s.ttf' % ('-Bold' if bold else ''),):
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()

def render(path):
    width = MARGIN * 2 + GRID_W * SCALE + INSET_W
    height = MARGIN * 2 + GRID_H * SCALE + 30
    image = Image.new('RGB', (width, height), (24, 22, 20))
    draw = ImageDraw.Draw(image)
    at = lambda x, y: (MARGIN + x * SCALE, MARGIN + 30 + y * SCALE)
    draw.text((MARGIN, 12), 'База «Ямантау» — план модернизации (56×56 клеток + спортивная зона, клетка 1,25 м)', fill=(230, 230, 230), font=font(16, True))
    # скала
    left, top = at(0, 0); right, bottom = at(GRID, GRID)
    draw.rectangle([left - 10, top - 10, right + 10, bottom + 10], fill=(52, 48, 44))
    annex_left, annex_top = at(GRID, 37); annex_right, annex_bottom = at(GRID_W, GRID_H)
    draw.rectangle([annex_left - 10, annex_top - 10, annex_right + 10, annex_bottom + 10], fill=(52, 48, 44))
    zone_color = {zone[0]: zone[2] for zone in ZONES}
    for name, x, y, w, h in CORRIDORS:
        x0, y0 = at(x, y); x1, y1 = at(x + w, y + h)
        draw.rectangle([x0, y0, x1, y1], fill=(84, 88, 92))
        draw.text(((x0 + x1) / 2, (y0 + y1) / 2), name + ('\n2 ур.' if name in K7_CORRIDORS else ''), fill=(200, 204, 208), font=font(11, True), anchor='mm', align='center')
    for zone, name, x, y, w, h, levels, kind in ROOMS:
        x0, y0 = at(x, y); x1, y1 = at(x + w, y + h)
        base = zone_color[zone]
        if kind == 'corridor':
            fill = tuple(int(value * 0.45 + 70) for value in base)
        elif kind == 'airlock':
            fill = (226, 190, 60)
        elif kind == 'single':
            fill = tuple(min(255, int(value * 1.15)) for value in base)
        else:
            fill = base
        draw.rectangle([x0, y0, x1, y1], fill=fill, outline=(30, 30, 30), width=2)
        if kind != 'corridor' or w * h >= 30:
            label = name if kind != 'corridor' else ''
            size = 9 if w <= 3 or w * h < 16 else 10 if w * h < 24 or w <= 5 else 11
            if label:
                words = label.replace('Химико-аналитическая', 'Химико- аналитическая').replace('Ксенобиологическая', 'Ксено- биологическая').split(' ')
                text, line = [], ''
                for word in words:
                    candidate = (line + ' ' + word).strip()
                    if draw.textlength(candidate, font=font(size)) > (x1 - x0) - 6 and line:
                        text.append(line); line = word
                    else:
                        line = candidate
                text.append(line)
                text = [part.replace('- ', '-') for part in text]
                draw.multiline_text(((x0 + x1) / 2, (y0 + y1) / 2), '\n'.join(text), fill=(20, 20, 20), font=font(size), anchor='mm', align='center', spacing=1)
        if levels > 1:
            draw.text((x1 - 4, y0 + 3), '%d ур.' % levels, fill=(30, 30, 30), font=font(9), anchor='ra')
    for x, y, w, h in THICK:
        x0, y0 = at(x, y); x1, y1 = at(x + w, y + h)
        patch = Image.new('RGB', (int(x1 - x0), int(y1 - y0)), (130, 126, 120))
        patch_draw = ImageDraw.Draw(patch)
        for offset in range(-patch.height, patch.width, 6):
            patch_draw.line([offset, patch.height, offset + patch.height, 0], fill=(100, 96, 90))
        image.paste(patch, (int(x0), int(y0)))
    # зоны: рамки и подписи
    for key, title, color, (zx, zy, zw, zh), access in ZONES:
        x0, y0 = at(zx, zy); x1, y1 = at(zx + zw, zy + zh)
        draw.rectangle([x0, y0, x1, y1], outline=(250, 250, 250), width=2)
        tag = title.upper()
        tag_width = draw.textlength(tag, font=font(11, True))
        draw.rectangle([x0 + 2, y0 + 2, x0 + tag_width + 10, y0 + 17], fill=(20, 20, 20))
        draw.text((x0 + 6, y0 + 3), tag, fill=(250, 250, 250), font=font(11, True))
    for x, y, side, size in GATES:
        if side in 'NS':
            yy = y if side == 'N' else y + 1
            x0, y0 = at(x, yy); x1, _ = at(x + size, yy)
            draw.line([x0 + 2, y0, x1 - 2, y0], fill=(255, 120, 30), width=5)
        else:
            xx = x if side == 'W' else x + 1
            x0, y0 = at(xx, y); _, y1 = at(xx, y + size)
            draw.line([x0, y0 + 2, x0, y1 - 2], fill=(255, 120, 30), width=5)
    for x, y, side, size in DOORS:
        if side in 'NS':
            yy = y if side == 'N' else y + 1
            x0, y0 = at(x, yy); x1, _ = at(x + size, yy)
            draw.line([x0 + 3, y0, x1 - 3, y0], fill=(230, 40, 30), width=4)
        else:
            xx = x if side == 'W' else x + 1
            x0, y0 = at(xx, y); _, y1 = at(xx, y + size)
            draw.line([x0, y0 + 3, x0, y1 - 3], fill=(230, 40, 30), width=4)
    # врезка: реакторный ярус −5
    ix = MARGIN + GRID_W * SCALE + 40
    iy = MARGIN + 30
    draw.text((ix, iy), 'Ярус −5: реактор (16×16 кл.)', fill=(230, 230, 230), font=font(13, True))
    cell = 18
    origin = (ix, iy + 26)
    rect = lambda x, y, w, h: [origin[0] + x * cell, origin[1] + y * cell, origin[0] + (x + w) * cell, origin[1] + (y + h) * cell]
    draw.rectangle(rect(-0.5, -0.5, 17, 17), fill=(52, 48, 44))
    reactor_rooms = [
        ('Реакторный зал', 4, 0, 12, 10, (200, 90, 60)),
        ('Насосная, теплообменники', 4, 10, 6, 6, (150, 150, 150)),
        ('Бассейн выдержки', 10, 10, 6, 6, (80, 130, 190)),
        ('Коридор', 0, 4, 4, 2, (110, 110, 110)),
        ('Лифт', 0, 0, 4, 4, (226, 190, 60)),
        ('Пульт', 0, 6, 4, 4, (140, 180, 140)),
        ('Дозиметрия, санпропускник', 0, 10, 4, 6, (170, 150, 120)),
    ]
    for name, x, y, w, h, color in reactor_rooms:
        draw.rectangle(rect(x, y, w, h), fill=color, outline=(30, 30, 30), width=2)
        box = rect(x, y, w, h)
        words, text, line = name.split(' '), [], ''
        for word in words:
            candidate = (line + ' ' + word).strip()
            if draw.textlength(candidate, font=font(10)) > box[2] - box[0] - 6 and line:
                text.append(line); line = word
            else:
                line = candidate
        text.append(line)
        draw.multiline_text(((box[0] + box[2]) / 2, (box[1] + box[3]) / 2), '\n'.join(text), fill=(20, 20, 20), font=font(10), anchor='mm', align='center')
    # корпус реактора — круг в зале
    cx, cy = origin[0] + 10 * cell, origin[1] + 5 * cell
    draw.ellipse([cx - 2.2 * cell, cy - 2.2 * cell, cx + 2.2 * cell, cy + 2.2 * cell], outline=(40, 30, 30), width=3, fill=(160, 70, 50))
    draw.ellipse([cx - 1.1 * cell, cy - 1.1 * cell, cx + 1.1 * cell, cy + 1.1 * cell], outline=(40, 30, 30), width=2, fill=(110, 50, 40))
    # легенда
    ly = origin[1] + 17 * cell + 30
    legend = [((84, 88, 92), 'коридор, 3 кл.; «2 ур.» — маршрут K7'), ((226, 190, 60), 'шлюз / лифт'), ((255, 120, 30), 'широкие ворота (K7)'), ((230, 40, 30), 'дверь'),
              ((130, 126, 120), 'толстая стена (бетон 1,25 м)'), ((52, 48, 44), 'скала')]
    for index, (color, text) in enumerate(legend):
        y = ly + index * 22
        draw.rectangle([ix, y, ix + 18, y + 14], fill=color, outline=(200, 200, 200))
        draw.text((ix + 26, y), text, fill=(220, 220, 220), font=font(12))
    image.save(path)

# назначение помещений — для меню базы (вкладка «Модули»)
NOTES = {
    'Платформа подъёмника': 'платформа 25 × 25 м, высота 10 м; конвертоплан КТ-6; шахта до поверхности',
    'Техполоса': 'заправка, подвоз боеприпасов, пульт подъёмника',
    'КПП': 'пост у шлюза ангара',
    'Проезд к цеху': 'K7 из ангара в цех, не выходя к остальной базе',
    'Шлюз ангара': 'ворота в проезд и в коридор H1, открываются по очереди',
    'Цех (стенд K7)': 'стенд ремонта K7, кран-балка, станки; высота 2 уровня',
    'Грузовой лифт': 'платформа 5×5 м, шахта до поверхности',
    'Приёмка': 'разгрузка с лифта',
    'Общий склад': 'стеллажи, контейнеры',
    'Пост контроля реактора': 'пульт энергоблока, связь с ярусом −5',
    'Лифт к реактору': 'отдельный лифт на ярус −5',
    'Энергоцентр': 'распределительные щиты, аккумуляторы, резервный генератор',
    'Командный центр': 'пульты, карта-глобус, связь',
    'Брифинг': 'стол, экран',
    'Снаряжение': 'шкафчики бойцов, сборы перед вылетом',
    'Узел связи': 'аппаратура связи, радары',
    'Дежурная часть': 'дежурный офицер по базе и помощник, мониторы камер',
    'Оружейная': 'стойки с оружием, верстак',
    'Склад боеприпасов': 'бетонные стены, бронедверь',
    'Мастерская оружейника': 'ремонт и пристрелка оружия',
    'Кабинет учёных': 'столы, шкафы',
    'Приборная': 'измерительные приборы',
    'Химико-аналитическая': 'вытяжные шкафы, хроматограф, спектрометр',
    'Ксенобиологическая': 'боксы биобезопасности, микроскопы, стол для вскрытия',
    'Физическая': 'стенды испытаний, осциллографы, источники питания',
    'Шлюз санобработки': 'обработка перед входом к образцам',
    'Пост наблюдения': 'мониторы боксов',
    'Операционная': 'операционный стол, светильник, наркозный аппарат',
    'Реанимация': 'реанимационная кровать, мониторы',
    'ПИТ-1': 'палата интенсивной терапии, одиночные кровати',
    'ПИТ-2': 'палата интенсивной терапии, одиночные кровати',
    'Столовая и отдых': 'столы на 16 мест, диваны',
    'Камбуз': 'плита, мойка, холодильник, остров',
    'Санблок 1 (душевые)': 'душевые кабины, умывальники, туалеты',
    'Санблок 2 (душевые)': 'душевые кабины, умывальники, туалеты',
    'Спортзал': 'дорожки, велотренажёры, силовые станции, штанги, маты',
    'Раздевалка, душевые': 'шкафчики, скамьи, душевые кабины',
}

def map_plan():
    """План в формате карты: модули (зоны) с номерами, помещения, коридоры, двери и ворота."""
    modules = {'0': 'Коридоры'}
    module_of = {}
    for number, zone in enumerate(ZONES, 1):
        modules[str(number)] = zone[1]
        module_of[zone[0]] = number
    rooms = [dict(module=module_of[r[0]], zone=r[0], name=r[1], x=r[2], y=r[3], width=r[4], height=r[5], levels=r[6], kind=r[7],
                  note=NOTES.get(r[1], '2 места' if r[1].startswith('Каюта') else 'одноместная' if r[7] == 'single' else ''))
             for r in ROOMS]
    room_at = {}
    for index, room in enumerate(rooms):
        for row in range(room['y'], room['y'] + room['height']):
            for col in range(room['x'], room['x'] + room['width']):
                room_at[(col, row)] = index
    step = {'N': (0, -1), 'S': (0, 1), 'W': (-1, 0), 'E': (1, 0)}
    def airlock_of(x, y, side):
        for cell in ((x, y), (x + step[side][0], y + step[side][1])):
            index = room_at.get(cell)
            if index is not None and rooms[index]['kind'] == 'airlock':
                return index
        return -1
    doors = [dict(x=g[0], y=g[1], side=g[2], size=g[3], kind='gate', airlock=airlock_of(*g[:3])) for g in GATES]
    doors += [dict(x=d[0], y=d[1], side=d[2], size=d[3], kind='door' if d[3] == 1 else 'double', airlock=-1) for d in DOORS]
    cells = {}
    for room in rooms:
        cells[str(room['module'])] = cells.get(str(room['module']), 0) + room['width'] * room['height']
    cells['0'] = sum(item[3] * item[4] for item in CORRIDORS)
    return {'cellMeters': CELL_METERS, 'levelMeters': 2.5, 'grid': [GRID_W, GRID_H], 'modules': modules,
            'zones': [dict(key=z[0], module=module_of[z[0]], name=z[1], x=z[3][0], y=z[3][1], width=z[3][2], height=z[3][3]) for z in ZONES],
            'rooms': rooms,
            'corridors': [dict(name=c[0], x=c[1], y=c[2], width=c[3], height=c[4], levels=2 if c[0] in K7_CORRIDORS else 1,
                               note='коридор между зонами' + (', маршрут K7, высота 5 м' if c[0] in K7_CORRIDORS else '')) for c in CORRIDORS],
            'thickWalls': [dict(x=t[0], y=t[1], width=t[2], height=t[3]) for t in THICK],
            'doors': doors, 'cells': cells, 'total': sum(cells.values())}

def write_map_plan():
    plan = map_plan()
    here = os.path.dirname(os.path.abspath(__file__))
    with open(os.path.join(here, '..', 'render', 'base_plan.js'), 'w', encoding='utf-8') as output:
        output.write('// Сгенерировано tools/base/plan_v2.py. Не править вручную.\n')
        output.write('export const BASE_PLAN = ' + json.dumps(plan, ensure_ascii=False, indent=1) + ';\n')
    with open(os.path.join(here, '..', '..', 'game', 'js', 'base_plan.js'), 'w', encoding='utf-8') as output:
        output.write('// Сгенерировано tools/base/plan_v2.py. Не править вручную.\n')
        output.write('var BASE_PLAN = ' + json.dumps(plan, ensure_ascii=False, separators=(',', ':')) + ';\n')

if __name__ == '__main__':
    out = sys.argv[1] if len(sys.argv) > 1 else '.'
    os.makedirs(out, exist_ok=True)
    if problems:
        print('\n'.join(problems[:30]))
    render(os.path.join(out, 'base_plan_v2.png'))
    json.dump({'cellMeters': CELL_METERS, 'grid': [GRID_W, GRID_H], 'square': [GRID, GRID],
               'zones': [dict(key=z[0], name=z[1], x=z[3][0], y=z[3][1], width=z[3][2], height=z[3][3], access=z[4]) for z in ZONES],
               'corridors': [dict(name=c[0], x=c[1], y=c[2], width=c[3], height=c[4], levels=2 if c[0] in K7_CORRIDORS else 1) for c in CORRIDORS],
               'rooms': [dict(zone=r[0], name=r[1], x=r[2], y=r[3], width=r[4], height=r[5], levels=r[6], kind=r[7]) for r in ROOMS],
               'thickWalls': [dict(x=t[0], y=t[1], width=t[2], height=t[3]) for t in THICK],
               'gates': [dict(x=g[0], y=g[1], side=g[2], size=g[3]) for g in GATES],
               'doors': [dict(x=d[0], y=d[1], side=d[2], size=d[3]) for d in DOORS]},
              open(os.path.join(out, 'base_plan_v2.json'), 'w'), ensure_ascii=False, indent=1)
    open(os.path.join(out, 'base_plan_v2.txt'), 'w', encoding='utf-8').write('\n'.join(lines) + '\n')
    write_map_plan()
    print('\n'.join(lines))
