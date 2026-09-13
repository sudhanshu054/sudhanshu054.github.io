const fs = require('fs');
const b = fs.readFileSync('D:/Portfolio/bundle.js', 'utf8');
const marker = '!./src/index.css ***!';
const idx = b.indexOf(marker);
const searchFrom = idx === -1 ? 0 : idx;
const marker2 = '___CSS_LOADER_EXPORT___.push([module.id, `';
const start = b.indexOf(marker2, searchFrom);
if (start === -1) {
  console.error('index CSS not found');
  process.exit(1);
}
let i = start + marker2.length;
let css = '';
while (i < b.length) {
  const ch = b[i];
  if (ch === '\\') {
    const next = b[i + 1];
    if (next === 'n') css += '\n';
    else if (next === "'") css += "'";
    else css += next;
    i += 2;
    continue;
  }
  if (ch === '`') break;
  css += ch;
  i++;
}
fs.writeFileSync('D:/Portfolio/src/index.css', css);
console.log('Extracted index.css bytes:', css.length);
