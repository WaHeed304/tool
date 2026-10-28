const fs = require('fs');
const path = require('path');

const root = __dirname;
const srcPath = path.join(root, 'tools.html');
const cats = ['seo', 'content', 'design', 'amazon', 'ai'];

let html = fs.readFileSync(srcPath, 'utf8');
if (!/<base\s/i.test(html)) {
  html = html.replace(/<head>/i, '<head>\n  <base href="/">');
}

for (const cat of cats) {
  const out = path.join(root, 'tools', `${cat}.html`);
  fs.writeFileSync(out, html, 'utf8');
  console.log('wrote', path.relative(root, out));
}
