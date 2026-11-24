#!/bin/sh
# Сборка 3D-осмотра базы в один классический скрипт для игры: game/js/base3d.js
# (страница game/base3d.html; ES-модули по file:// Chrome не загружает).
# Нужен esbuild: npm install --no-save esbuild
cd "$(dirname "$0")"
npx esbuild baseview.js --bundle --format=iife --minify --target=chrome109 \
  --legal-comments=none --outfile=../../game/js/base3d.js \
  --banner:js="// Собрано tools/render/build_base3d.sh из tools/render/baseview.js (three.js $(node -p "require('./node_modules/three/package.json').version")). Не править вручную."
