"""Собирает финальный кадр 1280x960: рендер сцены + панель интерфейса + метки поверх сцены."""
import json
import math
from PIL import Image

OUT = 'out_full'
meta = json.load(open(f'{OUT}/meta.json'))
view = Image.open(f'{OUT}/main.png').resize((1280, 700), Image.LANCZOS).convert('RGBA')
# спрайты бойцов поверх сцены, по глубине (снизу экрана ближе)
sprite_meta = json.load(open('sprites/sprites.json'))
for soldier in sorted(meta['points']['soldiers'], key=lambda item: item['foot']['y']):
    name = f"{soldier['key']}_d{soldier['direction']}_x1"
    sprite = Image.open(f'sprites/{name}.png')
    anchor_x, anchor_y = sprite_meta[name]['anchor']
    view.alpha_composite(sprite, (round(soldier['foot']['x'] - anchor_x), round(soldier['foot']['y'] - anchor_y)))
view.convert('RGB').save(f'{OUT}/view.png')

points = meta['points']
markers = meta['markers']
MONO = "DejaVu Sans Mono, monospace"
SANS = "Inter, DejaVu Sans, Arial, sans-serif"
AMBER, CYAN, RED, TEXT, DIM, LINE = '#e8a33a', '#62d6ea', '#e2553f', '#e4e8ea', '#8a959c', '#2f373c'

svg = []
add = svg.append


def corner_frame(x, y, width, height, color=LINE, length=10, stroke=1.5):
    for cx, cy, dx, dy in [(x, y, 1, 1), (x + width, y, -1, 1), (x, y + height, 1, -1), (x + width, y + height, -1, -1)]:
        add(f'<path d="M{cx},{cy + dy * length} L{cx},{cy} L{cx + dx * length},{cy}" stroke="{color}" stroke-width="{stroke}" fill="none"/>')


def label(x, y, text, size=11, color=DIM, family=SANS, weight='normal', anchor='start', spacing=0.6):
    add(f'<text x="{x}" y="{y}" font-family="{family}" font-size="{size}" fill="{color}" font-weight="{weight}" '
        f'text-anchor="{anchor}" letter-spacing="{spacing}">{text}</text>')


# ---------------- метки поверх сцены ----------------
add('<defs><linearGradient id="topFade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity="0.55"/><stop offset="1" stop-color="#000" stop-opacity="0"/></linearGradient>'
    '<linearGradient id="panel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a1f22"/><stop offset="1" stop-color="#0d1012"/></linearGradient>'
    '<pattern id="scan" width="4" height="3" patternUnits="userSpaceOnUse"><rect width="4" height="1" fill="#000" opacity="0.25"/></pattern>'
    '<pattern id="grid" width="22" height="22" patternUnits="userSpaceOnUse"><path d="M22,0 L0,0 L0,22" stroke="#9fd8e8" stroke-width="0.5" fill="none" opacity="0.18"/></pattern>'
    '<clipPath id="mapClip"><rect x="20" y="722" width="216" height="216"/></clipPath>'
    '<clipPath id="portraitClip"><rect x="252" y="722" width="176" height="216"/></clipPath></defs>')
add('<rect x="0" y="0" width="1280" height="70" fill="url(#topFade)"/>')

# ход и задача
add(f'<rect x="16" y="14" width="250" height="44" fill="#0c0f11" fill-opacity="0.72" stroke="{LINE}"/>')
label(28, 32, 'ХОД 07', 15, TEXT, MONO, 'bold', spacing=1.5)
label(100, 32, 'ФАЗА ОТРЯДА', 11, AMBER, SANS, 'bold', spacing=1.2)
label(28, 50, 'Задача: зачистить разбившийся объект', 11, DIM)
add(f'<rect x="1044" y="14" width="220" height="44" fill="#0c0f11" fill-opacity="0.72" stroke="{LINE}"/>')
label(1056, 32, 'ВРАГОВ В ПОЛЕ ЗРЕНИЯ', 10, DIM, SANS, 'bold', spacing=1)
for index in range(4):
    add(f'<rect x="{1056 + index * 18}" y="40" width="12" height="10" fill="{RED}"/>')
label(1252, 50, '18:42', 13, TEXT, MONO, anchor='end')

# рамка цели вокруг пришельца
head, feet = points['a1Head'], points['a1Feet']
top = head['y'] - 22
bottom = feet['y'] + 8
center_x = (head['x'] + feet['x']) / 2
half = (bottom - top) * 0.36
corner_frame(center_x - half, top, half * 2, bottom - top, CYAN, 9, 1.6)
add(f'<line x1="{center_x + half}" y1="{top + 6}" x2="{center_x + half + 26}" y2="{top - 18}" stroke="{CYAN}" stroke-width="1"/>')
box_x, box_y = center_x + half + 26, top - 44
add(f'<rect x="{box_x}" y="{box_y}" width="170" height="40" fill="#071216" fill-opacity="0.85" stroke="{CYAN}" stroke-width="1"/>')
label(box_x + 10, box_y + 16, 'СТРАЖ · ДИСТ. 11 М', 10, '#a9e7f2', SANS, 'bold', spacing=0.8)
label(box_x + 10, box_y + 33, 'ПОПАДАНИЕ', 10, DIM, SANS, spacing=0.8)
label(box_x + 160, box_y + 34, '64%', 18, CYAN, MONO, 'bold', anchor='end')

# метка выбранного бойца
s1 = points['s1Head']
add(f'<path d="M{s1["x"] - 7},{s1["y"] - 34} L{s1["x"]},{s1["y"] - 25} L{s1["x"] + 7},{s1["y"] - 34}" stroke="{AMBER}" stroke-width="2.2" fill="none"/>')

# ---------------- панель ----------------
add('<rect x="0" y="700" width="1280" height="260" fill="url(#panel)"/>')
add(f'<rect x="0" y="700" width="1280" height="1" fill="#4a555c"/><rect x="0" y="701" width="1280" height="2" fill="#000"/>')

# мини-карта
add(f'<rect x="16" y="718" width="224" height="224" fill="#050708" stroke="{LINE}"/>')
add(f'<g clip-path="url(#mapClip)"><image href="minimap.png" x="20" y="722" width="216" height="216" style="filter:saturate(0.55) brightness(0.8)"/>'
    f'<rect x="20" y="722" width="216" height="216" fill="#0b2a33" opacity="0.25"/><rect x="20" y="722" width="216" height="216" fill="url(#grid)"/></g>')
map_point = lambda point: (20 + point['x'] * 216, 722 + point['y'] * 216)
for point in markers['enemies']:
    x, y = map_point(point)
    add(f'<path d="M{x},{y - 5} L{x + 5},{y} L{x},{y + 5} L{x - 5},{y} Z" fill="{RED}" stroke="#000" stroke-width="0.8"/>')
for index, point in enumerate(markers['squad']):
    x, y = map_point(point)
    size = 7 if index == 4 else 5
    add(f'<path d="M{x},{y - size} L{x + size * 0.9},{y + size * 0.7} L{x - size * 0.9},{y + size * 0.7} Z" fill="#7cc4ff" stroke="#000" stroke-width="0.8"/>')
x, y = map_point(markers['selected'])
add(f'<circle cx="{x}" cy="{y}" r="9" fill="none" stroke="{AMBER}" stroke-width="1.5"/>')
add(f'<path d="M48,712 l-6,0 m6,0" stroke="none"/>')
corner_frame(16, 718, 224, 224, '#5c6a72', 12)
label(26, 936, 'КВАДРАТ 47-Б', 10, '#c9d3d8', MONO, spacing=1)
label(226, 740, 'С', 11, AMBER, MONO, 'bold', anchor='end')

# портрет
add(f'<rect x="248" y="718" width="184" height="224" fill="#050708" stroke="{LINE}"/>')
add(f'<g clip-path="url(#portraitClip)"><image href="portrait.png" x="246" y="722" width="186" height="223" preserveAspectRatio="xMidYMid slice"/>'
    f'<rect x="252" y="722" width="176" height="216" fill="url(#scan)"/><rect x="252" y="722" width="176" height="216" fill="#2a4a58" opacity="0.12"/></g>')
corner_frame(248, 718, 184, 224, '#5c6a72', 12)
add(f'<rect x="252" y="914" width="176" height="24" fill="#000" fill-opacity="0.65"/>')
label(262, 931, 'ВОРОН-1', 12, AMBER, MONO, 'bold', spacing=1.5)
label(420, 931, 'ст. сержант', 10, DIM, anchor='end')

# характеристики
label(450, 740, 'Андрей Волков', 20, TEXT, SANS, 'bold', spacing=0.3)
label(450, 760, 'ШТУРМОВИК · 2-Е ОТДЕЛЕНИЕ · 14 ВЫХОДОВ', 10, DIM, SANS, 'bold', spacing=1)
stats = [('ОЧКИ ДЕЙСТВИЯ', 42, 56, AMBER), ('ЗДОРОВЬЕ', 38, 45, '#d9534a'), ('ВЫНОСЛИВОСТЬ', 61, 70, '#c9b24a'), ('МОРАЛЬ', 88, 100, '#5fa8e8')]
for row, (name, value, maximum, color) in enumerate(stats):
    y = 786 + row * 34
    label(450, y, name, 10, DIM, SANS, 'bold', spacing=1)
    label(790, y, f'{value}<tspan fill="{DIM}" font-size="10">/{maximum}</tspan>', 13, TEXT, MONO, 'bold', anchor='end')
    add(f'<rect x="450" y="{y + 6}" width="340" height="8" fill="#060809" stroke="#262d31"/>')
    add(f'<rect x="451" y="{y + 7}" width="{338 * value / maximum:.1f}" height="6" fill="{color}"/>')
    for tick in range(1, 10):
        add(f'<rect x="{450 + tick * 34}" y="{y + 7}" width="1" height="6" fill="#000" opacity="0.6"/>')
for index, (text, color) in enumerate([('УКРЫТИЕ: ЧАСТИЧНОЕ', '#9fb7c2'), ('ПНВ', '#8fd18a'), ('ПОДАВЛЕН: НЕТ', '#9fb7c2')]):
    x = 450 + [0, 148, 196][index]
    width = [140, 40, 116][index]
    add(f'<rect x="{x}" y="920" width="{width}" height="18" fill="none" stroke="#39444a"/>')
    label(x + width / 2, 933, text, 9, color, SANS, 'bold', anchor='middle', spacing=0.8)

# кнопки действий
icons = [
    ('ШАГ', 'M-7,9 l5,-16 l6,16 M-2,-7 l0,-4 M6,-6 a3,3 0 1 0 0.1,0'),
    ('ПРИСЕСТЬ', 'M0,-11 a3.5,3.5 0 1 0 0.1,0 M0,-4 l0,6 l-7,6 M0,2 l7,6 M-7,-1 l14,0'),
    ('ПРИЦЕЛ', 'M0,-9 a9,9 0 1 0 0.1,0 M-13,0 l6,0 M7,0 l6,0 M0,-13 l0,6 M0,7 l0,6'),
    ('ЗАРЯДИТЬ', 'M-8,-3 a9,9 0 1 1 1,9 M-11,-9 l3,6 l6,-2'),
    ('ГРАНАТА', 'M0,3 m-7,0 a7,7 0 1 0 14,0 a7,7 0 1 0 -14,0 M-2,-5 l0,-4 l6,0 M4,-9 l4,-3'),
    ('СНАРЯЖ.', 'M-9,-7 h18 v15 h-18 z M-9,-1 h18 M-3,-11 h6 v4 h-6 z'),
    ('КАРТА', 'M-10,-7 l6,-3 l8,3 l6,-3 v16 l-6,3 l-8,-3 l-6,3 z M-4,-10 v16 M4,-7 v16'),
    ('ВЫШЕ', 'M0,-10 l-8,8 h5 v9 h6 v-9 h5 z'),
    ('НИЖЕ', 'M0,10 l-8,-8 h5 v-9 h6 v9 h5 z'),
    ('КОНЕЦ ХОДА', 'M-8,-10 v20 M-8,-10 h15 l-4,5 l4,5 h-15'),
]
for index, (name, path) in enumerate(icons):
    column, row = index % 5, index // 5
    x, y = 812 + column * 48, 718 + row * 60
    active = index == 2
    add(f'<rect x="{x}" y="{y}" width="42" height="42" fill="{"#2a2210" if active else "#161b1e"}" stroke="{AMBER if active else "#3a454b"}"/>')
    add(f'<g transform="translate({x + 21},{y + 21})" stroke="{AMBER if active else "#cfd8dc"}" stroke-width="1.7" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="{path}"/></g>')
    label(x + 21, y + 54, name, 8, AMBER if active else DIM, SANS, 'bold', anchor='middle', spacing=0.3)
    label(x + 38, y + 11, str((index + 1) % 10), 8, '#56636a', MONO, anchor='end')
add(f'<rect x="812" y="842" width="234" height="100" fill="#0a0d0f" stroke="{LINE}"/>')
label(822, 860, 'РЕЖИМ ОГНЯ', 10, DIM, SANS, 'bold', spacing=1)
modes = [('Прицельный', '18 ОД', '64%', True), ('Одиночный', '12 ОД', '51%', False), ('Очередь', '28 ОД', '33%', False)]
for index, (name, cost, chance, active) in enumerate(modes):
    y = 870 + index * 23
    if active:
        add(f'<rect x="816" y="{y - 2}" width="226" height="21" fill="#2a2210" stroke="{AMBER}" stroke-width="0.8"/>')
    label(824, y + 13, name, 12, AMBER if active else TEXT, SANS, 'bold' if active else 'normal', spacing=0.2)
    label(965, y + 13, cost, 11, DIM, MONO, anchor='end')
    label(1034, y + 13, chance, 12, AMBER if active else TEXT, MONO, 'bold', anchor='end')

# оружие
add(f'<rect x="1060" y="718" width="204" height="224" fill="#0a0d0f" stroke="{LINE}"/>')
corner_frame(1060, 718, 204, 224, '#5c6a72', 12)
label(1072, 738, 'КАРАБИН КС-9', 12, TEXT, SANS, 'bold', spacing=0.8)
label(1072, 753, 'ПБС · КОЛЛИМАТОР · ПРАВАЯ РУКА', 8, DIM, SANS, 'bold', spacing=0.5)
add('<image href="weapon.png" x="1066" y="762" width="192" height="152"/>')
label(1072, 898, 'МАГАЗИН', 9, DIM, SANS, 'bold', spacing=1)
label(1072, 912, 'ЗАПАС: 4', 9, '#6f7c84', MONO)
label(1252, 912, '28<tspan fill="#5f6b72" font-size="13">/30</tspan>', 22, TEXT, MONO, 'bold', anchor='end')
for index in range(30):
    add(f'<rect x="{1072 + index * 6}" y="920" width="4" height="12" fill="{AMBER if index < 28 else "#20272b"}"/>')


html = f'''<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{{margin:0;background:#000}}</style></head><body>
<div style="position:relative;width:1280px;height:960px;overflow:hidden">
<img src="view.png" style="position:absolute;left:0;top:0;width:1280px;height:700px">
<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="960" style="position:absolute;left:0;top:0">{"".join(svg)}</svg>
</div></body></html>'''
open(f'{OUT}/final.html', 'w', encoding='utf-8').write(html)
print('ok')
