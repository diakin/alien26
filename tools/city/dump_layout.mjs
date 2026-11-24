globalThis.location = { search: '?map=city' };
const { buildLayout } = await import('/home/claude/alien26/tools/render/outpost_layout.js');
const layout = buildLayout();
const fs = await import('fs');
fs.writeFileSync(process.argv[2] || 'city_layout.json', JSON.stringify(layout));
console.log(layout.TILES, layout.objects.length, layout.stairs.length, layout.buildings.length);
