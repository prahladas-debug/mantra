import { getMantra } from '/home/user/mantra/src/data/index';
const m = getMantra(process.argv[2])!;
for (const a of process.argv.slice(3)) { const s = m.sections[+a]; console.log(`[${a}] ${s.titleEn}\n  NOTE: ${s.note}\n  verses: ${s.verses.map(v => v.text.slice(0, 50).replace(/\n/g,' ')).join(' || ')}\n`); }
