import { getMantra } from '/home/user/mantra/src/data/index';
const m = getMantra(process.argv[2])!;
m.sections.forEach((s, si) => {
  console.log(`[${si}] ${s.titleEn} when=${JSON.stringify(s.when ?? '')}`);
  s.verses.forEach((v, vi) => { const mm: any = v.meaning ?? {}; console.log(`    ${si}.${vi} ${v.when ? JSON.stringify(v.when) : ''} langs=${['en','kn','hi','te','ta'].filter(l => mm[l]).join(',')} :: ${v.text.slice(0, 60).replace(/\n/g, ' / ')}`); });
});
