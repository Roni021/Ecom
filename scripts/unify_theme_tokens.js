const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const exts = ['.tsx', '.ts', '.jsx', '.js'];

const replacements = [
  // backgrounds -> theme-page
  { from: /bg-\[var\(--background-light\)\]\s*dark:bg-\[var\(--background-dark\)\]/g, to: 'theme-page' },
  { from: /bg-background-light\s*dark:bg-background-dark/g, to: 'theme-page' },
  { from: /bg-\[var\(--background-light\)\]/g, to: 'theme-page' },
  { from: /bg-background-light/g, to: 'theme-page' },

  // text slate -> theme-text
  { from: /\btext-slate-(900|800|700|600|500|400|300|200|100)\b/g, to: 'theme-text' },
  { from: /dark:text-slate-(900|800|700|600|500|400|300|200|100)\b/g, to: 'theme-text' },

  // bg white / slate -> theme-surface
  { from: /\bbg-white\b/g, to: 'theme-surface' },
  { from: /\bbg-slate-100\b/g, to: 'theme-surface' },
  { from: /dark:bg-slate-800\b/g, to: 'theme-surface' },
  { from: /dark:bg-slate-900\b/g, to: 'theme-surface' },

  // primary usages -> theme-accent or theme-accent-text
  { from: /\bbg-\[var\(--primary\)\]\b/g, to: 'theme-accent' },
  { from: /\bbg-\[var\(--primary\)\]\/10\b/g, to: 'theme-accent/10' },
  { from: /\bbg-\[var\(--primary\)\]\/20\b/g, to: 'theme-accent/20' },
  { from: /\bbg-\[var\(--primary\)\]\/5\b/g, to: 'theme-accent/5' },
  { from: /\bbg-primary\b/g, to: 'theme-accent' },
  { from: /\btext-primary\b/g, to: 'theme-accent-text' },
  { from: /\bborder-primary\b/g, to: 'border-theme-accent' },

  // remove redundant slate borders/text remaining
  { from: /\bborder-slate-200\b/g, to: 'border-theme-surface' },
  { from: /dark:border-slate-700\b/g, to: 'border-theme-surface' },

  // other common tokens
  { from: /\btext-slate-500\b/g, to: 'theme-muted' },
  { from: /\btext-slate-600\b/g, to: 'theme-muted' },

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
  for (const r of replacements) {
    out = out.replace(r.from, r.to);
  }
  if (out !== src) {
    fs.writeFileSync(file, out, 'utf8');
    console.log('Updated', file);
  }
}

walk(path.join(root, 'app'));
walk(path.join(root, 'components'));
console.log('Unification complete.');
