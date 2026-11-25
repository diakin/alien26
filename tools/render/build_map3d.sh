#!/bin/sh
# Сборка WebGL-карты для игры в один классический скрипт: game/js/map3d.js (window.Map3D).
# Страница задаёт карту до загрузки скрипта: window.ALIENS_MAP = 'base'. Нужен esbuild: npm install --no-save esbuild
cd "$(dirname "$0")"
npx esbuild map3d.js --bundle --format=iife --minify --target=chrome109 \
  --legal-comments=none --outfile=../../game/js/map3d.js \
  --banner:js="// Собрано tools/render/build_map3d.sh из tools/render/map3d.js (three.js $(node -p "require('./node_modules/three/package.json').version")). Не править вручную."
