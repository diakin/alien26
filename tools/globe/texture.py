# Текстура глобуса: python3 texture.py <NaturalEarthII/2> <land.geojson> <borders.json> <папка game/js>
# NaturalEarthII — тайлы уровня 2 (8×4 по 256 пикселей, схема TMS: строка 0 — юг) из пакета cesium:
#   npm pack cesium && tar xzf cesium-*.tgz package/Build/Cesium/Assets/Textures/NaturalEarthII
# Склеивает карту 2048×1024 (равнопромежуточная проекция), затемняет океан по маске суши (в духе Google Earth)
# и пишет globe_texture.js (JPEG как data-URL: на file:// пиксели такой картинки можно читать) и globe_borders.js.
import base64, io, json, sys
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

tiles, land_path, borders_path, out = sys.argv[1:5]
WIDTH, HEIGHT = 2048, 1024

atlas = Image.new('RGB', (WIDTH, HEIGHT))
for column in range(8):
    for row in range(4):
        tile = Image.open('%s/%d/%d.jpg' % (tiles, column, row)).convert('RGB')
        atlas.paste(tile, (column * 256, (3 - row) * 256))

# маска суши в 4 раза крупнее, затем уменьшение — сглаженный край
scale = 4
mask = Image.new('L', (WIDTH * scale, HEIGHT * scale), 0)
draw = ImageDraw.Draw(mask)
def pixel(lon, lat):
    return ((lon + 180) / 360 * WIDTH * scale, (90 - lat) / 180 * HEIGHT * scale)
land = json.load(open(land_path))
geometries = land['features'] if land['type'] == 'FeatureCollection' else [land]
for feature in geometries:
    geometry = feature['geometry']
    polygons = geometry['coordinates'] if geometry['type'] == 'MultiPolygon' else [geometry['coordinates']]
    for polygon in polygons:
        for index, ring in enumerate(polygon):
            # контур через 180-й меридиан: долготы делаются непрерывными, контур рисуется и со сдвигом на ±360°
            unwrapped, previous = [], None
            for lon, lat in ring:
                if previous is not None:
                    while lon - previous > 180: lon -= 360
                    while lon - previous < -180: lon += 360
                unwrapped.append((lon, lat)); previous = lon
            for shift in (-360, 0, 360):
                draw.polygon([pixel(lon + shift, lat) for lon, lat in unwrapped], fill=255 if index == 0 else 0)
# южнее −84° суша — Антарктида на всех долготах
draw.rectangle([0, (90 + 84) / 180 * HEIGHT * scale, WIDTH * scale, HEIGHT * scale], fill=255)
mask = mask.resize((WIDTH, HEIGHT), Image.LANCZOS).filter(ImageFilter.GaussianBlur(1.2))
land_weight = np.asarray(mask, dtype=np.float32) / 255

pixels = np.asarray(atlas, dtype=np.float32)
red, green, blue = pixels[..., 0], pixels[..., 1], pixels[..., 2]
# вода — вне суши и синеватая (морской лёд и снег у полюсов не трогаем)
blueness = np.clip((blue - np.maximum(red, green) * 0.92) / 25, 0, 1)
brightness = pixels.mean(axis=-1)
ocean = (1 - land_weight) * blueness * np.clip((205 - brightness) / 40, 0, 1)   # лёд и снег не затемняются
deep = np.stack([pixels[..., 0] * 0.42 + 6, pixels[..., 1] * 0.5 + 18, pixels[..., 2] * 0.62 + 40], axis=-1)
# суша чуть контрастнее и насыщеннее
gray = pixels.mean(axis=-1, keepdims=True)
richer = np.clip(gray + (pixels - gray) * 1.15, 0, 255) * 0.96
result = richer * (1 - ocean[..., None]) + deep * ocean[..., None]
image = Image.fromarray(np.clip(result, 0, 255).astype(np.uint8))
image.save('/tmp/globe_texture_check.png')

buffer = io.BytesIO()
image.save(buffer, 'JPEG', quality=86, optimize=True, progressive=False)
encoded = base64.b64encode(buffer.getvalue()).decode('ascii')
header = '// Текстура глобуса 2048×1024: Natural Earth II (naturalearthdata.com, общественное достояние), океан затемнён.\n' \
         '// Собрано tools/globe/texture.py. Хранится как data-URL: на file:// пиксели такой картинки можно читать.\n'
open(out + '/globe_texture.js', 'w').write(header + "var GLOBE_TEXTURE = 'data:image/jpeg;base64," + encoded + "';\n")

borders = json.load(open(borders_path))
text = ',\n'.join('[' + ','.join(('%g' % value) for value in line) + ']' for line in borders)
open(out + '/globe_borders.js', 'w').write(
    '// Сухопутные границы стран для глобуса: линии [долгота, широта, …], точность 0,05°.\n'
    '// Natural Earth 1:50m (общественное достояние) через world-atlas; собрано tools/globe/borders.mjs и texture.py.\n'
    'var GLOBE_BORDERS = [\n' + text + '\n];\n')
print('texture jpeg', len(buffer.getvalue()) // 1024, 'KB; borders lines', len(borders))
