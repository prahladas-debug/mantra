/// <reference types="node" />
/**
 * Proofreading helper: compare one of our texts with an outside "witness"
 * (a copy of the same text from a book, website or dataset) and print every
 * place where they differ.
 *
 *   npx tsx scripts/collate.ts <mantra-id> <witness-file> [scheme]
 *
 * scheme = devanagari (default) | kannada | telugu | tamil | malayalam | iast | itrans
 *
 * The witness can be in any of those scripts and needn't be split into verses
 * the same way: each of our verses is matched to the best-matching stretch of
 * the witness. Spelling-only differences (anusvara vs. nasal conjunct, spaces,
 * punctuation, avagraha) are ignored, so what remains are real textual
 * differences: check each one before changing anything.
 */
import { readFileSync } from 'node:fs';
import Sanscript from '@indic-transliteration/sanscript';
import { ALL_MANTRAS as LIBRARY } from '../src/data';

const [id, file, scheme = 'devanagari'] = process.argv.slice(2);
if (!id || !file) {
  console.error('usage: tsx scripts/collate.ts <mantra-id> <witness-file> [scheme]');
  process.exit(2);
}
const mantra = LIBRARY.find((m) => m.id === id);
if (!mantra) throw new Error(`no text with id ${id}`);

const CLASS: Record<string, string> = {};
for (const c of 'kKgGN') CLASS[c] = 'N';
for (const c of 'cCjJY') CLASS[c] = 'Y';
for (const c of 'wWqQR') CLASS[c] = 'R';
for (const c of 'tTdDn') CLASS[c] = 'n';
for (const c of 'pPbBm') CLASS[c] = 'm';

/** Phonemic key in SLP1 with spelling-only variation removed. */
export function key(text: string, from: string): string {
  let t = text.replace(/[\u0951-\u0954\u1CD0-\u1CFF]/g, '');
  // Many web texts type visarga as an ASCII colon (रजः written रज:).
  if (from !== 'itrans' && from !== 'iast') t = t.replace(/([ऀ-෿]):/g, '$1ः');
  if (from === 'itrans') t = t.replace(/\.h/g, '').replace(/\.a/g, '');
  if (from === 'iast') t = t.toLowerCase().replace(/ṁ/g, 'ṃ');
  const slp = Sanscript.t(t, from === 'tamil' ? 'tamil' : from, 'slp1');
  return slp
    .replace(/[^a-zA-Z]/g, '')
    .replace(/M(?=[kKgGcCjJwWqQtTdDpPbB])/g, (_m: string, i: number, s: string) => CLASS[s[i + 1]])
    .replace(/M(?=[aAiIuUfeEoO])/g, 'm')
    .replace(/m(?=[yrlvSzsh])/g, 'M');
}

/** Longest-common-subsequence style diff on characters. */
function diff(a: string, b: string): { a: string; b: string; at: number }[] {
  const n = a.length, m = b.length;
  const dp: Uint16Array[] = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
  for (let i = n - 1; i >= 0; i--)
    for (let j = m - 1; j >= 0; j--)
      dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const out: { a: string; b: string; at: number }[] = [];
  let i = 0, j = 0, cur: { a: string; b: string; at: number } | null = null;
  while (i < n || j < m) {
    if (i < n && j < m && a[i] === b[j]) { if (cur) { out.push(cur); cur = null; } i++; j++; continue; }
    cur ??= { a: '', b: '', at: i };
    if (j < m && (i >= n || dp[i][j + 1] >= dp[i + 1][j])) cur.b += b[j++];
    else cur.a += a[i++];
  }
  if (cur) out.push(cur);
  return out;
}

const witness = key(readFileSync(file, 'utf8'), scheme);
let differing = 0, missing = 0;
for (const s of mantra.sections) {
  for (const v of s.verses) {
    const ours = key(v.text, 'devanagari');
    if (ours.length < 6) continue;
    // Locate the verse in the witness: look up many short anchors and take the
    // most common offset, so a few differences don't break the match.
    const votes = new Map<number, number>();
    for (let p = 0; p + 10 <= ours.length; p += 5) {
      const a = ours.slice(p, p + 10);
      let at = witness.indexOf(a);
      let guard = 0;
      while (at >= 0 && guard++ < 50) {
        const off = Math.round((at - p) / 8);
        votes.set(off, (votes.get(off) ?? 0) + 1);
        at = witness.indexOf(a, at + 1);
      }
    }
    const best = [...votes.entries()].sort((x, y) => y[1] - x[1])[0];
    if (!best || best[1] < 2) { missing++; console.log(`?  ${s.titleEn ?? ''} v${v.n ?? '·'}: not found in witness`); continue; }
    const offset = best[0] * 8;
    let theirs = witness.slice(Math.max(0, offset - 8), offset + ours.length + 8);
    // Trim the slack at both ends: keep the stretch between the first and last match.
    const ends = diff(ours, theirs);
    if (ends.length && ends[0].at === 0 && !ends[0].a) theirs = theirs.slice(ends[0].b.length);
    const tailD = diff(ours, theirs).at(-1);
    if (tailD && tailD.at >= ours.length && !tailD.a) theirs = theirs.slice(0, theirs.length - tailD.b.length);
    // Ignore spill-over from neighbouring verses at either edge.
    const d = diff(ours, theirs).filter((x) => x.a !== x.b && !(!x.a && (x.at <= 1 || x.at >= ours.length - 1)));
    if (d.length) {
      differing++;
      console.log(`≠  ${s.titleEn ?? ''} v${v.n ?? '·'}: ` +
        d.map((x) => `${ours.slice(Math.max(0, x.at - 5), x.at)}[${x.a}→${x.b}]${ours.slice(x.at + x.a.length, x.at + x.a.length + 5)}`).join('  '));
    }
  }
}
console.log(`\n${mantra.id}: ${differing} verses differ, ${missing} not found (keys in SLP1; see scripts/collate.ts)`);
