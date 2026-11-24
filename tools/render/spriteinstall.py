"""Ставит собранные спрайты в игру: копирует кадры x1 в game/assets/units и дописывает их точки привязки
в SPRITE_ANCHORS (game/js/data.js). Кадры с тем же именем заменяются.

  python spriteinstall.py sprites_dir ../../game [префикс]   — например: python spriteinstall.py civ_sprites ../../game civ
"""
import json, os, re, shutil, sys

SPRITES, GAME = sys.argv[1], sys.argv[2]
PREFIX = sys.argv[3] if len(sys.argv) > 3 else ''
meta = json.load(open(os.path.join(SPRITES, 'sprites.json')))
units = os.path.join(GAME, 'assets', 'units')
data_path = os.path.join(GAME, 'js', 'data.js')
text = open(data_path, encoding='utf-8').read()
match = re.search(r'var SPRITE_ANCHORS = (\{.*?\});', text)
anchors = json.loads(match.group(1))
count = 0
for key, info in meta.items():
    if not key.endswith('_x1'):
        continue
    name = key[:-3]
    if PREFIX and not name.startswith(PREFIX):
        continue
    shutil.copyfile(os.path.join(SPRITES, key + '.png'), os.path.join(units, name + '.png'))
    anchors[name] = [round(info['anchor'][0], 1), round(info['anchor'][1], 1)]
    count += 1
text = text[:match.start(1)] + json.dumps(anchors, separators=(',', ':')) + text[match.end(1):]
open(data_path, 'w', encoding='utf-8').write(text)
print('installed', count, 'sprites, anchors total', len(anchors))
