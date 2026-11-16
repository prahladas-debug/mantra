import { getMantra } from '/home/user/mantra/src/data/index';
import { writeFileSync } from 'fs';
const out: any = {};
for (const id of ['chandika-homa', 'pavamana-homa']) {
  const m = getMantra(id)!;
  out[id] = { summaries: m.summaries, sections: m.sections.map((s) => ({ title: s.title, titleEn: s.titleEn, note: s.note, noteKn: s.noteKn, verses: s.verses })) };
}
writeFileSync(process.argv[2], JSON.stringify(out, null, 1));
