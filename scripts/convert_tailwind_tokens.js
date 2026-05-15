const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const exts = ['.tsx', '.ts', '.jsx', '.js'];

const patterns = [
  { from: /bg-\(\--primary\)\/([0-9]{1,3})/g, to: (m,p) => `bg-[var(--primary)]/${p}` },
  { from: /bg-\(\--primary\)/g, to: 'bg-[var(--primary)]' },
  { from: /text-\(\--primary\)/g, to: 'text-[var(--primary)]' },
  { from: /border-\(\--primary\)/g, to: 'border-[var(--primary)]' },
  { from: /bg-\(\--background-light\)/g, to: 'bg-[var(--background-light)]' },
  { from: /dark:bg-\(\--background-dark\)/g, to: 'dark:bg-[var(--background-dark)]' },
  { from: /bg-\(\--background-dark\)/g, to: 'bg-[var(--background-dark)]' },
  { from: /text-\(\--primary\)\s/g, to: 'text-[var(--primary)] ' },
  { from: /hover:bg-\(\--primary\)/g, to: 'hover:bg-[var(--primary)]' },
  { from: /bg-\(\--primary\)\/10/g, to: 'bg-[var(--primary)]/10' },
  { from: /bg-\(\--primary\)\/20/g, to: 'bg-[var(--primary)]/20' },
  { from: /bg-\(\--primary\)\/5/g, to: 'bg-[var(--primary)]/5' },
];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === '.next' || ent.name === 'node_modules') continue;
      walk(full);
    } else if (exts.includes(path.extname(ent.name))) {
      processFile(full);
    }
  }
}

function processFile(file) {
  let src = fs.readFileSync(file, 'utf8');
  let out = src;
  for (const p of patterns) {
    out = out.replace(p.from, p.to);
  }
  if (out !== src) {
    fs.writeFileSync(file, out, 'utf8');
    console.log('Updated', file);
  }
}

walk(path.join(root, 'app'));
walk(path.join(root, 'components'));
console.log('Conversion complete.');
