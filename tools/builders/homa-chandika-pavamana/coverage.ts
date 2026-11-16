import { getMantra } from '/home/user/mantra/src/data/index';
for (const id of ['chandika-homa', 'pavamana-homa']) {
  const m = getMantra(id)!;
  let n = 0, miss = 0, svaha = 0;
  m.sections.forEach((s, si) => s.verses.forEach((v, vi) => { n++; if (/स्वाहा/.test(v.text)) svaha++; const mm: any = v.meaning; for (const l of ['en', 'kn', 'hi', 'te', 'ta']) if (!mm?.[l]) { miss++; console.log('MISS', id, si, vi, l); } }));
  console.log(id, 'sections', m.sections.length, 'items', n, 'missing', miss, 'with svaha', svaha, 'summaries', Object.keys(m.summaries ?? {}).join(','), m.completeness);
}
