// Dumps the WirelessAlien Ramcharitmanas segments (npm hindu-devotional-texts@0.7.0, installed under $RCM_WORK/node) to $RCM_WORK/wa/<kanda>.json
import {pathToFileURL} from 'url';
const W = process.env.RCM_WORK;
const base = `${W}/node/node_modules/hindu-devotional-texts/dist/scriptures/ramcharitmanas/`;
import fs from 'fs';
for (const [k,f] of [['bal','bal-kand'],['ayodhya','ayodhya-kand']]) {
  const m = await import(pathToFileURL(base+f+'.js'));
  const d = m.default;
  fs.writeFileSync(`${W}/wa/${k}.json`, JSON.stringify(d.verses.map(v=>v.devanagari),null,1));
  console.log(k,d.verses.length);
}
