import { getMantra } from '/home/user/mantra/src/data';
for (const id of ['navagraha-homa','mrityunjaya-homa','lakshmi-homa','ayushya-homa']) {
  const m = getMantra(id)!; let n = 0, bad: string[] = [];
  m.sections.forEach((s, si) => s.verses.forEach((v, vi) => { n++; const mm: any = v.meaning ?? {};
    for (const l of ['en','kn','hi','te','ta']) if (!mm[l]) bad.push(`${si}.${vi}:${l}`); }));
  console.log(id, m.completeness, 'sections', m.sections.length, 'verses', n, 'missing', bad.length, bad.slice(0,5).join(' '), 'summaries', Object.keys(m.summaries ?? {}).join(','));
}
