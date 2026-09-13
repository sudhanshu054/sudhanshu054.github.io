const fs = require('fs');
const b = fs.readFileSync('D:/Portfolio/bundle.js', 'utf8');
const marker = '___CSS_LOADER_EXPORT___.push([module.id, `';
const start = b.indexOf(marker);
if (start === -1) {
  console.error('CSS not found');
  process.exit(1);
}
let i = start + marker.length;
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
fs.writeFileSync('D:/Portfolio/src/App.css', css);
console.log('Extracted CSS bytes:', css.length);
