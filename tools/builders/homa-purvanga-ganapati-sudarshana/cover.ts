import { getMantra } from '/home/user/mantra/src/data/index';
for (const id of ['homa-purvanga', 'ganapati-homa', 'sudarshana-homa']) {
  const m: any = getMantra(id); let n = 0, miss = 0;
  m.sections.forEach((s: any) => s.verses.forEach((v: any) => { n++; for (const l of ['en','kn','hi','te','ta']) if (!v.meaning?.[l]) miss++; }));
  console.log(id, m.completeness, 'sections', m.sections.length, 'verses', n, 'missing', miss, 'summaries', Object.keys(m.summaries ?? {}));
}
