import { getMantra } from '/home/user/mantra/src/data/index';
const ids = ['devi-mahatmyam-kavacham','devi-mahatmyam-argala','devi-mahatmyam-kilakam','devi-mahatmyam-ratri-suktam',...Array.from({length:13},(_, i)=>`devi-mahatmyam-${String(i+1).padStart(2,'0')}`),'devi-mahatmyam-devi-suktam','devi-mahatmyam-aparadha-kshamapana'];
for (const id of ids) {
  const m = getMantra(id)!;
  let total = 0, miss = 0;
  console.log('==', id, m.titleEn);
  m.sections.forEach((s, si) => {
    const nos = s.verses.filter(v => v.n === undefined);
    console.log(`  [${si}] ${s.titleEn} verses=${s.verses.length} unnumbered=${nos.length} n:${s.verses[0]?.n}-${s.verses[s.verses.length-1]?.n}`);
    for (const v of nos) console.log('      U:', v.text.slice(0, 70).replace(/\n/g,' / '));
    s.verses.forEach((v) => { total++; const mm: any = v.meaning ?? {}; for (const l of ['en','kn','hi','te','ta']) if (!mm[l]) { miss++; } });
  });
  console.log('  total', total, 'missing-lang-slots', miss);
}
