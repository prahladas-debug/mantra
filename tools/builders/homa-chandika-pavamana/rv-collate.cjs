// Collate Rigveda 9.1-67 and 10.90: Wikisource (Devanagari) vs GRETIL Aufrecht (IAST).
// usage: node rv-collate.cjs <gretil.htm> <wsdir> <out.json>
const fs = require('fs');
const path = require('path');
const Sanscript = require('/home/user/mantra/node_modules/@indic-transliteration/sanscript');
const [gretilPath, wsDir, outPath] = process.argv.slice(2);

const suktas = [];
for (let n = 1; n <= 67; n++) suktas.push([9, n]);
suktas.push([10, 90]);

// ---- GRETIL ----
const g = fs.readFileSync(gretilPath, 'utf8');
const gre = {};
for (const m of g.matchAll(/<p id="RV_(\d+)\.(\d+)\.(\d+)">([\s\S]*?)<\/p>/g)) {
  const key = `${+m[1]}.${+m[2]}`;
  let t = m[4].replace(/<span class="ref">[\s\S]*?<\/span>/g, '').replace(/<br\s*\/>/g, '\n');
  t = t.replace(/ḻ/g, '\u0001').normalize('NFD').replace(/[̱̍]/g, '').replace(/[0-9]/g, '')
    .normalize('NFC').replace(/\u0001/g, 'ḻ');
  (gre[key] ??= [])[+m[3] - 1] = t.trim();
}
function iastToDeva(line) {
  let s = line.replace(/\|\|/g, ' ॥ ').replace(/\|/g, ' । ').replace(/ṁ/g, 'ṃ').replace(/ḷ/g, 'ḻ').replace(/-/g, '');
  const toks = s.split(/\s+/).filter(Boolean);
  // consonant-final words are written joined to the next word (Devanagari samhita convention)
  const groups = [];
  const isMark = (t) => t === '।' || t === '॥';
  for (let t of toks) {
    const prev = groups[groups.length - 1];
    if (prev && !isMark(prev) && !isMark(t)) {
      if (t.startsWith("'")) { groups[groups.length - 1] = prev + t; continue; }
      if (/m$/.test(prev) && !/^[aāiīuūṛṝeo']/.test(t)) { groups[groups.length - 1] = prev.slice(0, -1) + 'ṃ'; groups.push(t); continue; }
      if (/[kgṅcjñṭḍṇtdnpbmyrlvśṣshḻ]$/.test(prev)) { groups[groups.length - 1] = prev + (/r$/.test(prev) && /^ṛ/.test(t) ? '\u0002' : '') + t; continue; }
    }
    groups.push(t);
  }
  return groups.map((t) => (t === '।' || t === '॥' ? t : t.split('\u0002').map((x) => Sanscript.t(x, 'iast', 'devanagari')).join('').replace(/ऴ/g, 'ळ').replace(/ꣳ/g, 'ँ'))).join(' ');
}

// ---- Wikisource ----
function wsVerses(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const head = raw.match(/\{\{header([\s\S]*?)\}\}/);
  const author = head?.[1].match(/author\s*=\s*(.*)/)?.[1].trim();
  const notes = head?.[1].match(/notes\s*=\s*(.*)/)?.[1].trim();
  const poem = raw.match(/<poem>([\s\S]*?)<\/poem>/)[1].replace(/<[^>]+>/g, '');
  const text = poem.normalize('NFC').replace(/[॒॑᳐-᳿꣠-ꣿ]/g, '');
  const verses = [];
  let cur = [];
  for (let line of text.split('\n')) {
    line = line.trim();
    if (!line) continue;
    const m = line.match(/^(.*?)\s*॥\s*([०-९]+)\s*॥?\s*$/);
    if (m) {
      cur.push(m[1].trim());
      const n = +m[2].replace(/[०-९]/g, (d) => '०१२३४५६७८९'.indexOf(d));
      verses.push({ n, lines: cur });
      cur = [];
    } else cur.push(line);
  }
  return { author, notes, verses };
}
const norm = (s) => s.replace(/[।॥\s!|ऽ.,;:]/g, '').replace(/ं(?=[पफबभम])/g, 'म्').replace(/ं$/g, 'म्');

const out = [];
let diffs = 0;
for (const [m, n] of suktas) {
  const ws = wsVerses(path.join(wsDir, `rv_${m}_${n}.txt`));
  const gr = gre[`${m}.${n}`];
  if (ws.verses.length !== gr.length) console.log(`COUNT ${m}.${n}: ws ${ws.verses.length} gretil ${gr.length}`);
  const verses = [];
  for (let i = 0; i < gr.length; i++) {
    const gd = gr[i].split('\n').map((l) => l.trim()).filter(Boolean).map(iastToDeva);
    const w = ws.verses[i];
    if (w && w.n !== i + 1) console.log(`NUM ${m}.${n}.${i + 1}: ws n=${w.n}`);
    const a = norm(gd.join(''));
    const b = w ? norm(w.lines.join('')) : '';
    const same = a === b;
    if (!same) { diffs++; }
    verses.push({ n: i + 1, gretil: gd, ws: w?.lines ?? [], same });
  }
  out.push({ m, n, author: ws.author, notes: ws.notes, verses });
}
fs.writeFileSync(outPath, JSON.stringify(out, null, 1));
console.log('diffs', diffs);
