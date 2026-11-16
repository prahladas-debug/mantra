/**
 * Malayalam meanings for the library texts: what is still to do.
 *   npx tsx tools/builders/ml-meanings/lib.ts scan             one line per text still lacking Malayalam
 *   npx tsx tools/builders/ml-meanings/lib.ts show <id> [...]  the English to translate, as input blocks
 * Write the Malayalam with apply-lib.py. Run from the repo root.
 */
import { LIBRARY } from '../../../src/data/library.generated';
import { MEANING_PACKS } from '../../../src/data/meanings.generated';
import { plain } from '../../../src/lib/plain';

type Item = { key: string; en: string; ta?: string };
const enPack = new Map<string, string>();
const has = new Map<string, Set<string>>(); // lang -> "id|key"
const sum = new Map<string, Set<string>>(); // lang -> ids with summary
for (const p of MEANING_PACKS) {
  for (const [id, t] of Object.entries(p.texts)) {
    if (t.summary) (sum.get(p.lang) ?? sum.set(p.lang, new Set()).get(p.lang)!).add(id);
    for (const [k, v] of Object.entries(t.verses)) {
      if (p.lang === 'en') enPack.set(`${id}|${k}`, v);
      (has.get(p.lang) ?? has.set(p.lang, new Set()).get(p.lang)!).add(`${id}|${k}`);
    }
  }
}
const ml = has.get('ml') ?? new Set<string>();
const mlSum = sum.get('ml') ?? new Set<string>();

function todo(id: string): { items: Item[]; summary?: string } {
  const m = LIBRARY.find((x) => x.id === id);
  if (!m) throw new Error(`no text ${id}`);
  const items: Item[] = [];
  m.sections.forEach((s, si) =>
    s.verses.forEach((v, vi) => {
      const key = `${si}.${vi}`;
      const en = typeof v.meaning === 'string' ? v.meaning : v.meaning?.en ?? enPack.get(`${id}|${key}`);
      if (en && !ml.has(`${id}|${key}`) && !(typeof v.meaning === 'object' && v.meaning.ml)) items.push({ key, en: plain(en) });
    }),
  );
  const wantSum = (sum.get('ta')?.has(id) || m.summaries?.ta) && !mlSum.has(id) && !m.summaries?.ml;
  return { items, summary: wantSum ? plain(m.summary) : undefined };
}

const [cmd, ...ids] = process.argv.slice(2);
if (cmd === 'scan') {
  let total = 0;
  for (const m of LIBRARY) {
    const t = todo(m.id);
    if (!t.items.length && !t.summary) continue;
    total += t.items.length + (t.summary ? 1 : 0);
    console.log(`${m.id}\t${m.category}\t${t.items.length} verses${t.summary ? ' + summary' : ''}`);
  }
  console.log(`TOTAL ${total} entries to write`);
} else if (cmd === 'show') {
  for (const id of ids) {
    const m = LIBRARY.find((x) => x.id === id)!;
    const t = todo(id);
    console.log(`# ${id} · ${plain(m.titleEn)}`);
    if (t.summary) console.log(`@${id}|summary\nEN: ${t.summary}`);
    for (const it of t.items) console.log(`@${id}|${it.key}\nEN: ${it.en}`);
  }
} else {
  console.error('usage: lib.ts scan | show <id> [...]');
  process.exit(1);
}
