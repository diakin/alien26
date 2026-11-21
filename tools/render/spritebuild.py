"""Собирает готовые спрайты из проходов рендера: цвет + маска + тень + контур."""
import json, os, sys
from PIL import Image, ImageFilter, ImageChops, ImageEnhance

RAW, OUT = sys.argv[1], sys.argv[2]
os.makedirs(OUT, exist_ok=True)
index = json.load(open(f'{RAW}/index.json'))
OUTLINE = (20, 38, 22)

def build(name, scale):
    color = Image.open(f'{RAW}/{name}_color.png').convert('RGB')
    mask = Image.open(f'{RAW}/{name}_mask.png').convert('L')
    shadow = Image.open(f'{RAW}/{name}_shadow.png').getchannel('A')
    if scale != 1:
        size = (round(color.width * scale), round(color.height * scale))
        color = color.resize(size, Image.LANCZOS)
        mask = mask.resize(size, Image.LANCZOS)
        shadow = shadow.resize(size, Image.LANCZOS)
    # чуть больше локального контраста и резкости
    color = ImageEnhance.Contrast(color).enhance(1.08)
    color = color.filter(ImageFilter.UnsharpMask(radius=1.2, percent=60, threshold=2))
    canvas = Image.new('RGBA', color.size, (0, 0, 0, 0))
    canvas.paste((0, 0, 0, 255), (0, 0), shadow.point(lambda value: int(value * 0.42)))
    # контур: маска, расширенная на 1 пиксель
    outline_mask = mask.filter(ImageFilter.MaxFilter(3))
    outline_layer = Image.new('RGBA', color.size, OUTLINE + (0,))
    outline_layer.putalpha(outline_mask.point(lambda value: int(value * 0.85)))
    canvas = Image.alpha_composite(canvas, outline_layer)
    character = color.convert('RGBA')
    character.putalpha(mask)
    canvas = Image.alpha_composite(canvas, character)
    return canvas

meta = {}
for name, info in index.items():
    for label, scale in (('x2', 1.0), ('x1', 0.5)):
        sprite = build(name, scale)
        bbox = sprite.getbbox()
        sprite = sprite.crop(bbox)
        sprite.save(f'{OUT}/{name}_{label}.png')
        meta[f'{name}_{label}'] = {'anchor': [info['anchor']['x'] * scale - bbox[0], info['anchor']['y'] * scale - bbox[1]], 'size': sprite.size}
json.dump(meta, open(f'{OUT}/sprites.json', 'w'), indent=1)
print(len(meta), 'sprites')
