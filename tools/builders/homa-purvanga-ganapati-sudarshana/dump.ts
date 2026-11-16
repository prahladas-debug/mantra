// usage: npx tsx dump.ts <id> <out.json>
import { getMantra } from '/home/user/mantra/src/data/index';
import { MEANING_PACKS } from '/home/user/mantra/src/data/meanings.generated';
import * as fs from 'fs';
const id = process.argv[2];
const m: any = getMantra(id);
const summaries: any = {};
for (const p of MEANING_PACKS) if (p.texts[id]?.summary) summaries[p.lang] = p.texts[id].summary;
const out = {
  id: m.id, title: m.title, titleEn: m.titleEn, summary: m.summary, summaryKn: m.summaryKn, summaries,
  sections: m.sections.map((s: any) => ({
    title: s.title, titleEn: s.titleEn, note: s.note, noteKn: s.noteKn, when: s.when,
    verses: s.verses.map((v: any) => ({ text: v.text, when: v.when, n: v.n, ...(typeof v.meaning === 'string' ? { en: v.meaning } : v.meaning) })),
  })),
};
fs.writeFileSync(process.argv[3], JSON.stringify(out, null, 1));
console.log('ok', id, m.sections.length);
