import { getMantra } from '/home/user/mantra/src/data/index';
const m = getMantra(process.argv[2])!;
for (const k of process.argv.slice(3)) { const [si, vi] = k.split('.').map(Number); console.log(k, JSON.stringify(m.sections[si].verses[vi], null, 1)); }
