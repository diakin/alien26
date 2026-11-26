# Подготовка людей на основе MakeHuman (базовая сетка hm08, морф-цели, глаза — CC0, makehumancommunity/makehuman;
# скелет game_engine и веса — CC0, makehumancommunity/mpfb2) для рендера спрайтов и портретов (human.js).
#
# python3 mhbuild.py <makehuman/data> <mpfb2/src/mpfb/data> — пишет рядом:
#   topology.json — части сетки (тело, вспомогательные «колготки» и «юбка» для одежды, шапочка волос, ресницы, глаза):
#                   номера исходных вершин, UV, треугольники; веса скелета (4 кости на вершину); кости и родители;
#                   маски лица по вершинам (губы, брови, щетина, румянец, нос);
#   kind_<вид>.json — для каждого вида человека: положения всех вершин (м) после морфов, глаза, головы суставов;
#   skin_<вид>.png — текстура кожи (тон, поры, румянец, губы, брови, щетина) в раскладке UV базовой сетки.
# Вид человека — пол, возраст, мышцы, вес, тон кожи и случайные черты лица (seed): KINDS ниже.
import base64, json, math, os, sys
import numpy as np
from PIL import Image, ImageFilter

MH = sys.argv[1] if len(sys.argv) > 1 else '/home/claude/ext/makehuman/makehuman/data'
MPFB = sys.argv[2] if len(sys.argv) > 2 else '/home/claude/ext/mpfb2/src/mpfb/data'
OUT = os.path.dirname(os.path.abspath(__file__))

# пол 0 — женщина, 1 — мужчина; возраст: 0.5 — 25 лет, 0.75 — около 55, 0.15 — 9 лет; мышцы и вес: 0.5 — средние
# skin — тон кожи (sRGB), hair — цвет волос и бровей, stubble — щетина (0..1), lips — цвет губ
KINDS = {
    'man':         dict(gender=1, age=0.52, muscle=0.55, weight=0.5, seed=11, skin=(214, 166, 136), hair=(48, 36, 26), stubble=0.5),
    'woman':       dict(gender=0, age=0.5, muscle=0.45, weight=0.5, seed=12, skin=(226, 182, 156), hair=(106, 58, 34), stubble=0, lips=(170, 70, 76)),
    'scientist':   dict(gender=1, age=0.7, muscle=0.45, weight=0.52, seed=13, skin=(218, 172, 144), hair=(150, 146, 140), stubble=0.35),
    'engineer':    dict(gender=1, age=0.55, muscle=0.45, weight=0, slim=1,
                        shape={'measure/measure-shoulder-dist': 0.35, 'measure/measure-upperarm-circ': 0.15, 'armslegs/lr-upperarm-fat': 0.3, 'armslegs/lr-lowerarm-fat': 0.4}, seed=14, skin=(204, 150, 118), hair=(58, 44, 32), stubble=0.6),
    'worker':      dict(gender=1, age=0.58, muscle=0.65, weight=0.58, seed=15, skin=(196, 142, 108), hair=(42, 32, 24), stubble=0.8),
    'boy':         dict(gender=1, age=0.15, muscle=0.5, weight=0.5, seed=16, skin=(228, 186, 158), hair=(106, 68, 36), stubble=0),
    'girl':        dict(gender=0, age=0.14, muscle=0.5, weight=0.5, seed=17, skin=(232, 192, 166), hair=(154, 106, 58), stubble=0, lips=(196, 110, 110)),
    'commander':   dict(gender=1, age=0.72, muscle=0.6, weight=0.56, seed=21, skin=(212, 160, 128), hair=(118, 116, 110), stubble=0.25),
    'officer':     dict(gender=1, age=0.54, muscle=0.62, weight=0.5, seed=22, skin=(208, 158, 126), hair=(44, 34, 26), stubble=0.3),
    'doctor':      dict(gender=1, age=0.62, muscle=0.35, weight=0.12, seed=23, skin=(216, 168, 138), hair=(64, 48, 34), stubble=0.3),
    'surgeon':     dict(gender=1, age=0.56, muscle=0.55, weight=0.5, seed=24, skin=(210, 164, 134), hair=(46, 34, 26), stubble=0.4),
    'nurse':       dict(gender=0, age=0.5, muscle=0.45, weight=0.52, seed=25, skin=(230, 186, 160), hair=(126, 76, 44), stubble=0, lips=(178, 84, 88)),
    'labwoman':    dict(gender=0, age=0.56, muscle=0.45, weight=0.5, seed=26, skin=(224, 180, 152), hair=(76, 46, 28), stubble=0, lips=(160, 78, 82)),
    'hazmat':      dict(gender=0, age=0.5, muscle=0.5, weight=0.5, seed=27, skin=(226, 182, 154), hair=(92, 58, 36), stubble=0, lips=(166, 82, 84)),
    'engineerw':   dict(gender=0, age=0.52, muscle=0.5, weight=0.5, seed=28, skin=(222, 176, 148), hair=(92, 58, 34), stubble=0, lips=(164, 80, 82)),
    'electrician': dict(gender=1, age=0.55, muscle=0.6, weight=0.52, seed=29, skin=(200, 148, 114), hair=(58, 44, 32), stubble=0.7),
    'plumber':     dict(gender=1, age=0.62, muscle=0.6, weight=0.62, seed=30, skin=(198, 144, 110), hair=(42, 32, 24), stubble=0.8),
    'cook':        dict(gender=1, age=0.6, muscle=0.45, weight=0.4, seed=31, skin=(212, 160, 130), hair=(44, 34, 26), stubble=0.5),
    'cookw':       dict(gender=0, age=0.62, muscle=0.45, weight=0.62, seed=32, skin=(226, 180, 152), hair=(110, 60, 36), stubble=0, lips=(168, 84, 86)),
    'cleaner':     dict(gender=0, age=0.68, muscle=0.45, weight=0.58, seed=33, skin=(222, 176, 148), hair=(134, 92, 62), stubble=0, lips=(160, 90, 90)),
    'cleanerm':    dict(gender=1, age=0.7, muscle=0.5, weight=0.55, seed=34, skin=(206, 152, 120), hair=(84, 82, 78), stubble=0.6),
}

# ---------------- базовая сетка ----------------
def load_obj(path):
    vertices, uvs, faces = [], [], []
    group = None
    for line in open(path):
        if line.startswith('v '):
            vertices.append([float(value) for value in line.split()[1:4]])
        elif line.startswith('vt '):
            uvs.append([float(value) for value in line.split()[1:3]])
        elif line.startswith('g '):
            group = line.split()[1]
        elif line.startswith('f '):
            corners = []
            for token in line.split()[1:]:
                parts = token.split('/')
                corners.append((int(parts[0]) - 1, int(parts[1]) - 1 if len(parts) > 1 and parts[1] else -1))
            faces.append((group, corners))
    return np.array(vertices, dtype=np.float64), np.array(uvs, dtype=np.float64), faces

base, base_uvs, faces = load_obj(os.path.join(MH, '3dobjs/base.obj'))
count = len(base)
group_vertices = {}
for group, corners in faces:
    group_vertices.setdefault(group, set()).update(vertex for vertex, _ in corners)

# ---------------- морф-цели ----------------
target_cache = {}
def target(name):
    if name not in target_cache:
        path = os.path.join(MH, 'targets', name + '.target')
        indices, deltas = [], []
        for line in open(path):
            if line.startswith('#') or not line.strip():
                continue
            parts = line.split()
            indices.append(int(parts[0])); deltas.append([float(value) for value in parts[1:4]])
        target_cache[name] = (np.array(indices, dtype=np.int64), np.array(deltas, dtype=np.float64).reshape(-1, 3))
    return target_cache[name]

def add_target(positions, name, weight):
    if abs(weight) < 1e-4:
        return
    indices, deltas = target(name)
    positions[indices] += deltas * weight

# веса возраста и прочих макро-параметров (как в MakeHuman: возраст 0 — 1 год, 0.1875 — 11 лет, 0.5 — 25, 1 — 90)
def age_weights(age):
    if age < 0.1875:
        return {'baby': 1 - age / 0.1875, 'child': age / 0.1875}
    if age < 0.5:
        return {'child': (0.5 - age) / 0.3125, 'young': 1 - (0.5 - age) / 0.3125}
    return {'young': 1 - (age - 0.5) / 0.5, 'old': (age - 0.5) / 0.5}

def level_weights(value, low, high):
    if value < 0.5:
        return {low: 1 - value / 0.5, 'average' + low[3:]: value / 0.5}
    return {'average' + low[3:]: 1 - (value - 0.5) / 0.5, high: (value - 0.5) / 0.5}

# черты лица: пары «уменьшить/увеличить», вес выбирается случайно по seed
FACE_TARGETS = [
    ('nose/nose-scale-horiz-decr', 'nose/nose-scale-horiz-incr'), ('nose/nose-scale-vert-decr', 'nose/nose-scale-vert-incr'),
    ('nose/nose-hump-decr', 'nose/nose-hump-incr'), ('nose/nose-point-width-decr', 'nose/nose-point-width-incr'),
    ('nose/nose-nostrils-width-decr', 'nose/nose-nostrils-width-incr'), ('nose/nose-point-down', 'nose/nose-point-up'),
    ('mouth/mouth-scale-horiz-decr', 'mouth/mouth-scale-horiz-incr'), ('mouth/mouth-lowerlip-volume-decr', 'mouth/mouth-lowerlip-volume-incr'),
    ('mouth/mouth-upperlip-volume-decr', 'mouth/mouth-upperlip-volume-incr'), ('mouth/mouth-angles-down', 'mouth/mouth-angles-up'),
    ('chin/chin-width-decr', 'chin/chin-width-incr'), ('chin/chin-prominent-decr', 'chin/chin-prominent-incr'),
    ('chin/chin-height-decr', 'chin/chin-height-incr'), ('head/head-fat-decr', 'head/head-fat-incr'),
    ('head/head-scale-horiz-decr', 'head/head-scale-horiz-incr'), ('forehead/forehead-scale-vert-decr', 'forehead/forehead-scale-vert-incr'),
    ('eyebrows/eyebrows-trans-down', 'eyebrows/eyebrows-trans-up'), ('eyebrows/eyebrows-angle-down', 'eyebrows/eyebrows-angle-up'),
]

SLIM_TARGETS = ['waist-circ', 'hips-circ', 'underbust-circ', 'bust-circ', 'frontchest-dist', 'upperarm-circ', 'thigh-circ', 'calf-circ', 'knee-circ']

# ---------------- параметры тела: KINDS или файл MakeHuman (bodies/<вид>.mhm) ----------------
# Модификаторы — как в MakeHuman: 'группа/левый|правый' → значение −1..1 (минус — левый морф, плюс — правый),
# например 'measure/measure-shoulder-dist-decr|incr' 0.35 или 'armslegs/l-upperarm-fat-decr|incr' 0.3.
BODIES = os.path.join(OUT, 'bodies')
FACE_GROUPS = ('head/', 'forehead/', 'eyebrows/', 'neck/', 'eyes/', 'nose/', 'mouth/', 'ears/', 'chin/', 'cheek/')

def kind_modifiers(spec):
    """slim и shape из KINDS → модификаторы MakeHuman"""
    modifiers = {}
    shape = spec.get('shape', {})
    for name in SLIM_TARGETS:
        modifiers['measure/measure-%s-decr|incr' % name] = -spec.get('slim', 0)
    # плечи — уже вдвое слабее (иначе голова кажется большой)
    modifiers['measure/measure-shoulder-dist-decr|incr'] = -spec.get('slim', 0) * 0.5
    # shape: имя морфа без -incr/-decr; 'lr-' — обе стороны; перекрывает slim для того же обхвата
    for name, value in shape.items():
        for side in ([name.replace('/lr-', '/l-'), name.replace('/lr-', '/r-')] if '/lr-' in name else [name]):
            modifiers[side + '-decr|incr'] = value
    return {name: value for name, value in modifiers.items() if abs(value) > 1e-6}

def load_mhm(path):
    macros, modifiers = {}, {}
    for line in open(path, encoding='utf-8'):
        parts = line.split()
        if len(parts) == 3 and parts[0] == 'modifier':
            name, value = parts[1], float(parts[2])
            if name.startswith('macrodetails'):
                macros[name.split('/')[1]] = value
            elif abs(value) > 1e-6:
                modifiers[name] = value
    return macros, modifiers

def body_spec(kind):
    spec = KINDS[kind]
    body = dict(gender=spec['gender'], age=spec['age'], muscle=spec['muscle'], weight=spec['weight'], height=0.5, proportions=0.5,
                ethnic={'african': 0, 'asian': 0, 'caucasian': 1}, modifiers=kind_modifiers(spec), seed=spec['seed'], face=None, source='KINDS')
    path = os.path.join(BODIES, kind + '.mhm')
    if os.path.exists(path):
        macros, modifiers = load_mhm(path)
        body.update(gender=macros.get('Gender', body['gender']), age=macros.get('Age', body['age']), muscle=macros.get('Muscle', 0.5),
                    weight=macros.get('Weight', 0.5), height=macros.get('Height', 0.5), proportions=macros.get('BodyProportions', 0.5),
                    modifiers={name: value for name, value in modifiers.items() if not name.startswith(FACE_GROUPS)}, source=path)
        ethnic = {race: macros.get(race.capitalize(), 0) for race in ('african', 'asian', 'caucasian')}
        if sum(ethnic.values()) > 0:
            body['ethnic'] = {race: value / sum(ethnic.values()) for race, value in ethnic.items()}
        # черты лица: если в файле их нет — случайные по seed, как без файла
        face = {name: value for name, value in modifiers.items() if name.startswith(FACE_GROUPS)}
        if face:
            body['face'] = face
    return body

def export_mhm(kind):
    """bodies/<вид>.mhm из KINDS — начальная точка для правки в MakeHuman 1.2 (Файлы → Загрузить)"""
    body = body_spec(kind) if not os.path.exists(os.path.join(BODIES, kind + '.mhm')) else None
    if body is None:
        print(kind, 'уже есть', os.path.join(BODIES, kind + '.mhm'), '- не перезаписан'); return
    os.makedirs(BODIES, exist_ok=True)
    lines = ['# Aliens26: начальные параметры вида %s (mhbuild.py)' % kind, 'version v1.2', 'name %s' % kind,
             'modifier macrodetails/Gender %f' % body['gender'], 'modifier macrodetails/Age %f' % body['age'],
             'modifier macrodetails/African 0.000000', 'modifier macrodetails/Asian 0.000000', 'modifier macrodetails/Caucasian 1.000000',
             'modifier macrodetails-universal/Muscle %f' % body['muscle'], 'modifier macrodetails-universal/Weight %f' % body['weight'],
             'modifier macrodetails-height/Height 0.500000', 'modifier macrodetails-proportions/BodyProportions 0.500000']
    for name, value in sorted(body['modifiers'].items()):
        if abs(value) > 1:
            # записывается как есть (сборка по файлу совпадёт с KINDS); MakeHuman при загрузке ограничит до ±1
            print(kind, 'модификатор %s = %.2f за пределами ползунка MakeHuman (±1)' % (name, value))
        lines.append('modifier %s %f' % (name, value))
    lines += ['skeleton game_engine.mhskel', 'subdivide False']
    open(os.path.join(BODIES, kind + '.mhm'), 'w', encoding='utf-8').write('\n'.join(lines) + '\n')
    print(kind, '->', os.path.join(BODIES, kind + '.mhm'))

missing_targets = set()
def add_optional(positions, name, weight):
    try:
        add_target(positions, name, weight)
    except FileNotFoundError:
        if name not in missing_targets:
            missing_targets.add(name); print('нет морфа', name)

def apply_modifier(positions, name, value):
    group, _, pair = name.partition('/')
    left, _, right = pair.partition('|')
    if not right:
        print('модификатор без пары пропущен:', name); return
    # правый морф — основа левого с другим окончанием: r-upperarm-fat-decr|incr → r-upperarm-fat-incr
    right = left.rsplit('-', 1)[0] + '-' + right
    add_optional(positions, '%s/%s' % (group, left if value < 0 else right), abs(value))

def build_positions(kind):
    body = body_spec(kind)
    positions = base.copy()
    gender = {'female': 1 - body['gender'], 'male': body['gender']}
    ages = age_weights(body['age'])
    muscles = level_weights(body['muscle'], 'minmuscle', 'maxmuscle')
    weights = level_weights(body['weight'], 'minweight', 'maxweight')
    heights = level_weights(body['height'], 'minheight', 'maxheight')
    # пропорции: 0 — необычные, 0.5 — обычные (без морфа), 1 — идеальные
    proportions = {'uncommonproportions': max(0, 1 - body['proportions'] / 0.5), 'idealproportions': max(0, (body['proportions'] - 0.5) / 0.5)}
    for gender_name, gender_weight in gender.items():
        for age_name, age_weight in ages.items():
            for race, race_weight in body['ethnic'].items():
                add_optional(positions, 'macrodetails/%s-%s-%s' % (race, gender_name, age_name), gender_weight * age_weight * race_weight)
            for muscle_name, muscle_weight in muscles.items():
                for weight_name, weight_weight in weights.items():
                    base_weight = gender_weight * age_weight * muscle_weight * weight_weight
                    add_target(positions, 'macrodetails/universal-%s-%s-%s-%s' % (gender_name, age_name, muscle_name, weight_name), base_weight)
                    for height_name, height_weight in heights.items():
                        if not height_name.startswith('average') and base_weight * height_weight > 1e-4:
                            add_optional(positions, 'macrodetails/height/%s-%s-%s-%s-%s' % (gender_name, age_name, muscle_name, weight_name, height_name), base_weight * height_weight)
                    for proportion_name, proportion_weight in proportions.items():
                        if base_weight * proportion_weight > 1e-4:
                            add_optional(positions, 'macrodetails/proportions/%s-%s-%s-%s-%s' % (gender_name, age_name, muscle_name, weight_name, proportion_name), base_weight * proportion_weight)
    for name, value in body['modifiers'].items():
        apply_modifier(positions, name, value)
    if body['face']:
        for name, value in body['face'].items():
            apply_modifier(positions, name, value)
    else:
        rng = np.random.default_rng(body['seed'])
        for decrease, increase in FACE_TARGETS:
            amount = float(rng.uniform(-0.55, 0.55))
            add_target(positions, increase if amount > 0 else decrease, abs(amount))
    if body['source'] != 'KINDS':
        print(kind, 'параметры тела из', body['source'])
    return positions

# ---------------- скелет ----------------
rig = json.load(open(os.path.join(MPFB, 'rigs/standard/rig.game_engine.json')))
bone_names = list(rig.keys())
bone_index = {name: index for index, name in enumerate(bone_names)}

def joint_position(positions, definition):
    if definition['strategy'] == 'CUBE':
        members = sorted(group_vertices[definition['cube_name']])
        return positions[members].mean(axis=0)
    if definition['strategy'] == 'MEAN':
        return positions[definition['vertex_indices']].mean(axis=0)
    if definition['strategy'] == 'VERTEX':
        return positions[definition['vertex_index']]
    raise ValueError(definition['strategy'])

weight_data = json.load(open(os.path.join(MPFB, 'rigs/standard/weights.game_engine.json')))['weights']
per_vertex = [[] for _ in range(count)]
for name, pairs in weight_data.items():
    for vertex, weight in pairs:
        per_vertex[vertex].append((weight, bone_index[name]))
skin_index = np.zeros((count, 4), dtype=np.uint8)
skin_weight = np.zeros((count, 4), dtype=np.float32)
for vertex, entries in enumerate(per_vertex):
    entries.sort(reverse=True)
    entries = entries[:4] or [(1.0, bone_index['head'])]
    total = sum(weight for weight, _ in entries)
    for slot, (weight, bone) in enumerate(entries):
        skin_index[vertex, slot] = bone
        skin_weight[vertex, slot] = weight / total

# ---------------- глаза (high-poly, mhclo) ----------------
def load_mhclo(path):
    lines = open(path).read().split('\n')
    scales, refs, reading = {}, [], False
    for line in lines:
        parts = line.split()
        if not parts or parts[0].startswith('#'):
            continue
        if parts[0] in ('x_scale', 'y_scale', 'z_scale'):
            scales[parts[0][0]] = (int(parts[1]), int(parts[2]), float(parts[3]))
        elif parts[0] == 'verts':
            reading = True
        elif reading:
            if len(parts) == 9:
                refs.append(([int(value) for value in parts[0:3]], [float(value) for value in parts[3:6]], [float(value) for value in parts[6:9]]))
            elif len(parts) == 1 and parts[0].isdigit():
                refs.append(([int(parts[0])] * 3, [1, 0, 0], [0, 0, 0]))
            else:
                reading = False
    return scales, refs

eye_obj, eye_uvs, eye_faces = load_obj(os.path.join(MH, 'eyes/high-poly/high-poly.obj'))
eye_scales, eye_refs = load_mhclo(os.path.join(MH, 'eyes/high-poly/high-poly.mhclo'))

def fit_proxy(positions, scales, refs):
    factor = {axis: abs(positions[a][index] - positions[b][index]) / s for (axis, (a, b, s)), index in zip(sorted(scales.items()), [0, 1, 2])}
    result = np.zeros((len(refs), 3))
    for row, (vertices, weights, offset) in enumerate(refs):
        point = sum(positions[vertex] * weight for vertex, weight in zip(vertices, weights))
        result[row] = point + np.array([offset[0] * factor['x'], offset[1] * factor['y'], offset[2] * factor['z']])
    return result

# ---------------- части сетки ----------------
def triangulate(face_list):
    triangles = []
    for _, corners in face_list:
        for step in range(1, len(corners) - 1):
            triangles.append((corners[0], corners[step], corners[step + 1]))
    return triangles

def make_part(face_list, uv_source):
    keys, lookup, indices = [], {}, []
    for triangle in triangulate(face_list):
        for corner in triangle:
            if corner not in lookup:
                lookup[corner] = len(keys); keys.append(corner)
            indices.append(lookup[corner])
    source = np.array([vertex for vertex, _ in keys], dtype=np.int32)
    uvs = np.array([uv_source[uv] if uv >= 0 else [0, 0] for _, uv in keys], dtype=np.float32)
    return source, uvs, np.array(indices, dtype=np.uint32)

def b64(array):
    return base64.b64encode(np.ascontiguousarray(array).tobytes()).decode('ascii')

PARTS = {'body': ['body'], 'tights': ['helper-tights'], 'skirt': ['helper-skirt'], 'hair': ['helper-hair'],
         'lashes': ['helper-l-eyelashes-1', 'helper-l-eyelashes-2', 'helper-r-eyelashes-1', 'helper-r-eyelashes-2'],
         'teeth': ['helper-upper-teeth', 'helper-lower-teeth']}
topology = {'license': 'MakeHuman hm08 base mesh, targets, eyes: CC0 (makehumancommunity/makehuman); game_engine rig and weights: CC0 (makehumancommunity/mpfb2)',
            'units': 'm', 'count': count, 'parts': {}, 'bones': [], 'skinIndex': b64(skin_index), 'skinWeight': b64(skin_weight)}
for name, groups in PARTS.items():
    source, uvs, indices = make_part([face for face in faces if face[0] in groups], base_uvs)
    topology['parts'][name] = {'source': b64(source), 'uv': b64(uvs), 'index': b64(indices), 'vertices': int(len(source)), 'triangles': int(len(indices) // 3)}
# глаза: свои вершины (по одной копии на каждый глаз в сетке high-poly)
eye_source, eye_uv, eye_index = make_part(eye_faces, eye_uvs)
topology['parts']['eyes'] = {'source': b64(eye_source), 'uv': b64(eye_uv), 'index': b64(eye_index), 'vertices': int(len(eye_source)), 'triangles': int(len(eye_index) // 3), 'proxy': True}
for name in bone_names:
    topology['bones'].append({'name': name, 'parent': rig[name]['parent'] or None})

# маски лица по вершинам: доля смещения в морф-цели (губы, брови, румянец, нос), щетина — по положению на лице
def mask_of(names, power=1.0):
    values = np.zeros(count)
    for name in names:
        indices, deltas = target(name)
        length = np.linalg.norm(deltas, axis=1)
        values[indices] = np.maximum(values[indices], length / max(length.max(), 1e-9))
    return values ** power
masks = {
    'lips': mask_of(['mouth/mouth-upperlip-volume-incr', 'mouth/mouth-lowerlip-volume-incr']),
    'brows': mask_of(['eyebrows/eyebrows-trans-up']),
    'cheeks': mask_of(['cheek/l-cheek-bones-incr', 'cheek/r-cheek-bones-incr']),
    'nose': mask_of(['nose/nose-point-width-incr']),
}
topology['masks'] = {name: b64(values.astype(np.float32)) for name, values in masks.items()}

# ---------------- текстура кожи ----------------
SKIN = 2048
body_faces = [face for face in faces if face[0] == 'body']

def rasterize(attributes):
    """Заливка UV-раскладки тела: значения по вершинам (count × channels) интерполируются по треугольникам."""
    channels = attributes.shape[1]
    image = np.zeros((SKIN, SKIN, channels), dtype=np.float32)
    covered = np.zeros((SKIN, SKIN), dtype=bool)
    for triangle in triangulate(body_faces):
        uv = np.array([base_uvs[uv_index] for _, uv_index in triangle]) * (SKIN - 1)
        uv[:, 1] = (SKIN - 1) - uv[:, 1]
        values = np.array([attributes[vertex] for vertex, _ in triangle])
        x0, y0 = np.floor(uv.min(axis=0)).astype(int); x1, y1 = np.ceil(uv.max(axis=0)).astype(int)
        x0, y0 = max(x0, 0), max(y0, 0); x1, y1 = min(x1, SKIN - 1), min(y1, SKIN - 1)
        if x1 < x0 or y1 < y0:
            continue
        xs, ys = np.meshgrid(np.arange(x0, x1 + 1) + 0.5, np.arange(y0, y1 + 1) + 0.5)
        (ax, ay), (bx, by), (cx, cy) = uv
        area = (bx - ax) * (cy - ay) - (cx - ax) * (by - ay)
        if abs(area) < 1e-9:
            continue
        weight_b = ((xs - ax) * (cy - ay) - (cx - ax) * (ys - ay)) / area
        weight_c = ((bx - ax) * (ys - ay) - (xs - ax) * (by - ay)) / area
        weight_a = 1 - weight_b - weight_c
        inside = (weight_a >= -0.02) & (weight_b >= -0.02) & (weight_c >= -0.02)
        if not inside.any():
            continue
        block = weight_a[..., None] * values[0] + weight_b[..., None] * values[1] + weight_c[..., None] * values[2]
        region = image[y0:y1 + 1, x0:x1 + 1]
        region[inside] = block[inside]
        covered[y0:y1 + 1, x0:x1 + 1] |= inside
    # растянуть края на соседние пиксели, чтобы на швах UV не было тёмных щелей
    for _ in range(4):
        grown = covered.copy()
        for dy, dx in ((0, 1), (0, -1), (1, 0), (-1, 0)):
            shifted = np.roll(np.roll(image, dy, axis=0), dx, axis=1)
            shifted_cover = np.roll(np.roll(covered, dy, axis=0), dx, axis=1)
            take = shifted_cover & ~grown
            image[take] = shifted[take]
            grown |= take
        covered = grown
    return image

# щетина и область лица — по положению: ниже носа, перед ушами, выше шеи (в координатах базовой сетки)
def stubble_field(positions):
    eye_left = positions[sorted(group_vertices['helper-l-eye'])].mean(axis=0)
    eye_right = positions[sorted(group_vertices['helper-r-eye'])].mean(axis=0)
    eye_center = (eye_left + eye_right) / 2
    eye_distance = np.linalg.norm(eye_left - eye_right)
    relative = (positions - eye_center) / eye_distance
    x, y, z = relative[:, 0], relative[:, 1], relative[:, 2]
    jaw = (y < -0.9) & (y > -2.15) & (z > -1.35) & (np.abs(x) < 1.25)
    soft = np.clip((-0.9 - y) / 0.25, 0, 1) * np.clip((y + 2.15) / 0.2, 0, 1) * np.clip((z + 1.35) / 0.35, 0, 1) * np.clip((1.25 - np.abs(x)) / 0.2, 0, 1)
    # над верхней губой: узкая полоса
    moustache = np.clip(1 - np.abs(y + 1.12) / 0.12, 0, 1) * np.clip((0.55 - np.abs(x)) / 0.15, 0, 1) * (z > -0.2)
    return np.clip(soft * jaw + moustache, 0, 1), relative

attribute_stack = np.stack([masks['lips'], masks['brows'], masks['cheeks'], masks['nose']], axis=1)
mask_images = None

def skin_image(kind, positions):
    global mask_images
    spec = KINDS[kind]
    stubble, relative = stubble_field(base)
    if mask_images is None:
        mask_images = rasterize(np.concatenate([attribute_stack, stubble[:, None], relative], axis=1))
    lips, brows, cheeks, nose, stubble_map = (mask_images[..., index] for index in range(5))
    rel_x, rel_y, rel_z = np.abs(mask_images[..., 5]), mask_images[..., 6], mask_images[..., 7]
    # брови и щетина — по положению на лице в долях расстояния между глазами (центр глаз — 0, нос −0,6, губы −1,07)
    along = np.clip((rel_x - 0.12) / 0.85, 0, 1)
    brow_center = 0.4 + 0.13 * np.sin(along * np.pi) - 0.06 * along
    thickness = (0.1 - 0.055 * along) * (0.6 if spec['gender'] == 0 else 1)
    brows = np.clip(1 - np.abs(rel_y - brow_center) / thickness, 0, 1) * (rel_x > 0.1) * (rel_x < 1.0) * (rel_z > 0.0)
    band = lambda value, low, high, soft: np.clip((value - low) / soft, 0, 1) * np.clip((high - value) / soft, 0, 1)
    cheek_beard = band(rel_x, 0.7, 1.35, 0.12) * band(rel_y, -1.95, -0.55, 0.15)
    chin_beard = band(rel_y, -2.05, -1.15, 0.15) * band(rel_x, -1.0, 1.35, 0.12)
    moustache = band(rel_y, -0.98, -0.7, 0.06) * band(rel_x, -1.0, 0.55, 0.1)
    stubble_map = np.clip(cheek_beard + chin_beard + moustache, 0, 1) * (rel_z > -1.25) * np.clip(1 - np.clip((lips - 0.15) / 0.2, 0, 1), 0, 1)
    # худоба (slim, 0..1): обхваты талии, бёдер, груди, рук и ног уменьшаются целевыми морфами MakeHuman (measure-*-decr);
    # суставы считаются потом по той же сетке — скелет следует за телом
    shape = spec.get('shape', {})
    for name in SLIM_TARGETS:
        if 'measure/measure-' + name not in shape:
            add_target(positions, 'measure/measure-%s-decr' % name, spec.get('slim', 0))
    # плечи — уже вдвое слабее (иначе голова кажется большой)
    if 'measure/measure-shoulder-dist' not in shape:
        add_target(positions, 'measure/measure-shoulder-dist-decr', spec.get('slim', 0) * 0.5)
    # отдельные параметры тела (shape): имя морфа MakeHuman без -incr/-decr → значение −1..1 (плюс — incr, минус — decr);
    # 'lr-' в имени — обе стороны (l- и r-). Перекрывают slim для того же обхвата.
    for name, value in shape.items():
        for side in ([name.replace('/lr-', '/l-'), name.replace('/lr-', '/r-')] if '/lr-' in name else [name]):
            add_target(positions, '%s-%s' % (side, 'incr' if value > 0 else 'decr'), abs(value))
    rng = np.random.default_rng(spec['seed'])
    base_color = np.array(spec['skin'], dtype=np.float32) / 255
    base_color = base_color * np.array([0.95, 0.88, 0.84])          # теплее и чуть темнее: под ярким светом кожа не белеет
    # тон: мягкие пятна и поры
    noise_small = rng.normal(0, 1, (SKIN, SKIN)).astype(np.float32)
    pores = np.array(Image.fromarray(((noise_small * 0.5 + 0.5).clip(0, 1) * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.7)), dtype=np.float32) / 255 - 0.5
    blotch = np.array(Image.fromarray(((rng.normal(0, 1, (64, 64)) * 0.5 + 0.5).clip(0, 1) * 255).astype(np.uint8)).resize((SKIN, SKIN), Image.BICUBIC), dtype=np.float32) / 255 - 0.5
    color = base_color[None, None, :] * (1 + pores[..., None] * 0.07 + blotch[..., None] * 0.08)
    # румянец, кончик носа, губы
    redness = np.clip(cheeks * 0.9, 0, 1)[..., None] * (0.16 if spec['gender'] == 0 else 0.1) + np.clip(nose, 0, 1)[..., None] * 0.08
    color = color * (1 - redness) + np.array([0.78, 0.36, 0.32]) * redness
    lip_amount = np.clip((lips - 0.22) / 0.4, 0, 1)[..., None]
    lip_color = np.array(spec.get('lips', (168, 98, 92)), dtype=np.float32) / 255
    color = color * (1 - lip_amount * 0.95) + lip_color * 0.85 * lip_amount * 0.95
    # брови: штрихи цвета волос в области бровей
    hair = np.array(spec['hair'], dtype=np.float32) / 255
    strokes = np.array(Image.fromarray((rng.random((SKIN, SKIN)) * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.6)), dtype=np.float32) / 255
    brow_amount = brows * np.clip(strokes * 1.6 - 0.15, 0, 1)
    color = color * (1 - brow_amount[..., None] * 0.9) + hair * 0.75 * brow_amount[..., None] * 0.9
    # щетина: тёмные точки цвета волос
    if spec['stubble'] > 0:
        dots = (rng.random((SKIN, SKIN)) < 0.35).astype(np.float32)
        dots = np.array(Image.fromarray((dots * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.5)), dtype=np.float32) / 255
        stubble_amount = (stubble_map * spec['stubble'] * 0.45 * (0.5 + dots))[..., None]
        color = color * (1 - stubble_amount) + hair * 0.55 * stubble_amount
    image = (np.clip(color, 0, 1) * 255).astype(np.uint8)
    return Image.fromarray(image, 'RGB')

# ---------------- запись ----------------
json.dump(topology, open(os.path.join(OUT, 'topology.json'), 'w'))
# ONLY=doctor,nurse — собрать только эти виды (общая топология пишется всё равно)
ONLY = [name for name in os.environ.get('ONLY', '').split(',') if name]
# EXPORT_MHM=engineer,cook — записать bodies/<вид>.mhm из KINDS (для правки в MakeHuman) и выйти
EXPORT = [name for name in os.environ.get('EXPORT_MHM', '').split(',') if name]
if EXPORT:
    for kind in EXPORT: export_mhm(kind)
    sys.exit(0)
for kind in KINDS:
    if ONLY and kind not in ONLY: continue
    positions = build_positions(kind)
    joints = {name: [joint_position(positions, rig[name]['head']).tolist(), joint_position(positions, rig[name]['tail']).tolist()] for name in bone_names}
    eyes = fit_proxy(positions, eye_scales, eye_refs)
    meters = 0.1
    record = {'kind': kind, 'gender': KINDS[kind]['gender'], 'age': KINDS[kind]['age'],
              'positions': b64((positions * meters).astype(np.float32)),
              'eyes': b64((eyes[eye_source] * meters).astype(np.float32)),
              'joints': {name: [[value * meters for value in head], [value * meters for value in tail]] for name, (head, tail) in joints.items()},
              'hair': [value / 255 for value in KINDS[kind]['hair']], 'skin': [value / 255 for value in KINDS[kind]['skin']]}
    json.dump(record, open(os.path.join(OUT, 'kind_%s.json' % kind), 'w'))
    skin_image(kind, positions).save(os.path.join(OUT, 'skin_%s.png' % kind))
    print(kind, 'height %.2f m' % ((positions[:, 1].max() - positions[:, 1].min()) * meters))
# текстура глаза
Image.open(os.path.join(MH, 'eyes/materials/brown_eye.png')).convert('RGBA').resize((512, 512), Image.LANCZOS).save(os.path.join(OUT, 'eye_brown.png'))
print('topology parts', {name: part['triangles'] for name, part in topology['parts'].items()})
