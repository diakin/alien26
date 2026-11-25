# Люди для спрайтов и портретов (MakeHuman)

`human.js` строит гражданских и персонал базы на основе базовой сетки MakeHuman.
Данные в этой папке генерируются скриптом и в репозиторий не входят.

## Источники (CC0)

- makehumancommunity/makehuman — базовая сетка hm08, морф-цели (macrodetails, лицо), глаза (high-poly proxy).
- makehumancommunity/mpfb2 — скелет game_engine (53 кости) и веса кожи `weights.game_engine.json`.

Лицензия ассетов обоих проектов — CC0 (см. LICENSE.ASSETS.md в makehuman).

## Генерация

```
git clone --depth 1 https://github.com/makehumancommunity/makehuman ext/makehuman
git clone --depth 1 https://github.com/makehumancommunity/mpfb2 ext/mpfb2
python3 mhbuild.py ext/makehuman/makehuman/data ext/mpfb2/src/mpfb/data
```

Скрипт пишет `topology.json` (общая топология, части сетки, веса, кости), `kind_<вид>.json`
(форма тела и лица, суставы) и `skin_<вид>.png` (текстура кожи 2048², брови, щетина, губы) для 21 вида,
а также `eye_brown.png`. Список видов и параметры (пол, возраст, телосложение, цвет кожи и волос) — `KINDS` в `mhbuild.py`.
