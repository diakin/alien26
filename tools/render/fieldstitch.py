"""Склейка кусков фона, уменьшение с суперсэмплинга."""
import json, sys
from PIL import Image
out = sys.argv[1]
info = json.load(open(f'{out}/field.json'))
image = Image.new('RGB', (info['width'], info['height']))
for chunk in info['chunks']:
    part = Image.open(chunk['file']).convert('RGB').resize((chunk['width'], chunk['height']), Image.LANCZOS)
    image.paste(part, (chunk['x'], chunk['y']))
image.save(f'{out}/field.jpg', quality=90)
print('field', image.size)
