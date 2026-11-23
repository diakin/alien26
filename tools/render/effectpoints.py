"""Точки эффектов обломков (пламя, дым, искры) из index.json рендера в game/js/data.js.
  python effectpoints.py raw_dir ../../game
Смещения — пиксели спрайта x1 от точки привязки (ног юнита)."""
import json, re, sys
raw_dir, game_dir = sys.argv[1], sys.argv[2]
index = json.load(open(f'{raw_dir}/index.json'))
points = {}
for name, info in index.items():
    if not info.get('effects') or '_dead_' not in name:
        continue
    anchor = info['anchor']
    points[name] = {kind: [[round((x - anchor['x']) * 0.5, 1), round((y - anchor['y']) * 0.5, 1)] for x, y in values] for kind, values in info['effects'].items()}
path = f'{game_dir}/js/data.js'
text = open(path, encoding='utf-8').read()
line = 'var EFFECT_POINTS = ' + json.dumps(points, separators=(',', ':')) + ';'
if 'var EFFECT_POINTS = ' in text:
    text = re.sub(r'var EFFECT_POINTS = \{.*?\};', lambda match: line, text, flags=re.S)
else:
    text = text.rstrip('\n') + '\n// точки эффектов обломков: пиксели спрайта от точки привязки\n' + line + '\n'
open(path, 'w', encoding='utf-8').write(text)
print(len(points), 'sprites with effect points')
