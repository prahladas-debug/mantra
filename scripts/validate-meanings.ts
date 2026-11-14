/// <reference types="node" />
/**
 * Validates the Hindi / Telugu / Tamil meaning packs in src/data/meanings/<lang>/.
 * Run: npx tsx scripts/validate-meanings.ts   (also part of npm test)
 */
import { LIBRARY } from '../src/data/library.generated';
import { MEANING_PACKS } from '../src/data/meanings.generated';

const SCRIPT: Record<string, RegExp> = {
  hi: /[ऀ-ॿ]/,
  te: /[ఀ-౿]/,
  ta: /[஀-௿]/,
};
const OTHER_INDIC = /[ঀ-෿]/g; // any Indic block, filtered per language below
const byId = new Map(LIBRARY.map((m) => [m.id, m]));
let errors = 0;
const counts: Record<string, number> = {};
const err = (w: string, msg: string) => {
  errors++;
  console.error(`ERROR  ${w}: ${msg}`);
};

for (const pack of MEANING_PACKS) {
  const own = SCRIPT[pack.lang];
  for (const [id, t] of Object.entries(pack.texts)) {
    const m = byId.get(id);
    const w = `${pack.lang}/${id}`;
    if (!m) { err(w, 'no such text id'); continue; }
    if (t.summary !== undefined && !own.test(t.summary)) err(w, 'summary not in the right script');
    for (const [key, text] of Object.entries(t.verses)) {
      const [si, vi] = key.split('.').map(Number);
      const v = m.sections[si]?.verses[vi];
      const vw = `${w} [${key}]`;
      if (!v) { err(vw, 'no verse at this key (keys are sectionIndex.verseIndex, 0-based)'); continue; }
      if (!v.meaning) err(vw, 'verse has no English meaning to translate from');
      if (!text?.trim()) { err(vw, 'empty'); continue; }
      if (!own.test(text)) err(vw, `not in ${pack.lang} script`);
      const foreign = (text.match(OTHER_INDIC) ?? []).filter((c) => !own.test(c) && !/[।॥]/.test(c));
      if (pack.lang !== 'hi' && /[ऀ-ॿ]/.test(text.replace(/[।॥]/g, ''))) err(vw, 'contains Devanagari; write Sanskrit words in the target script');
      if (foreign.length) err(vw, `contains other Indic scripts: ${[...new Set(foreign)].join('')}`);
      counts[pack.lang] = (counts[pack.lang] ?? 0) + 1;
    }
  }
}
console.log(`meaning packs: ${MEANING_PACKS.length}, entries ${JSON.stringify(counts)}, ${errors} errors`);
process.exit(errors ? 1 : 0);
