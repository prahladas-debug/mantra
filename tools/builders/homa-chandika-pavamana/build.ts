/**
 * Builds src/data/texts/chandika-homa.ts, src/data/texts/pavamana-homa.ts and
 * src/data/meanings/{hi,te,ta}/homa-2.ts.
 * usage: npx tsx build.ts <workdir>
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';
import Sanscript from '/home/user/mantra/node_modules/@indic-transliteration/sanscript';
import { getMantra } from '/home/user/mantra/src/data/index';
import { plain } from '/home/user/mantra/src/lib/plain';
import { FRAME_P, FRAME_C, HDR_P, HDR_C, META_P, META_C, RV_NOTES, RISHI } from './frame';

const W = process.argv[2];
const REPO = '/home/user/mantra';
const LANGS = ['en', 'kn', 'hi', 'te', 'ta'] as const;
type L5 = [string, string, string, string, string];
interface OV { n?: number; text: string; m: L5; when?: any }
interface OS { title?: string; titleEn?: string; note?: string; noteKn?: string; when?: any; verses: OV[] }

const old = JSON.parse(readFileSync(join(W, 'old-homas.json'), 'utf8'));
const rv = JSON.parse(readFileSync(join(W, 'rv.json'), 'utf8'));

// ---- RV meanings ----
const rvm = new Map<string, L5>();
for (const f of readdirSync(join(W, 'rvm')).sort()) {
  for (const line of readFileSync(join(W, 'rvm', f), 'utf8').split('\n')) {
    if (!line.trim() || line.startsWith('#')) continue;
    const p = line.split('|').map((x) => x.trim());
    if (p.length !== 6) throw new Error(`bad line in ${f}: ${line}`);
    if (rvm.has(p[0])) throw new Error(`dup ${p[0]}`);
    rvm.set(p[0], p.slice(1) as L5);
  }
}

function m5of(v: any, ctx: string): L5 {
  const m = typeof v.meaning === 'string' ? { en: v.meaning } : v.meaning ?? {};
  const out = LANGS.map((l) => m[l]) as L5;
  if (out.some((x) => !x)) throw new Error(`missing meaning lang at ${ctx}: ${JSON.stringify(m).slice(0, 200)}`);
  out[0] = plain(out[0]);
  return out;
}
const lib = (id: string) => { const m = getMantra(id); if (!m) throw new Error(id); return m; };
function libVerse(id: string, key: string): OV {
  const [si, vi] = key.split('.').map(Number);
  const v = lib(id).sections[si].verses[vi];
  return { n: v.n, text: v.text, m: m5of(v, `${id} ${key}`) };
}
function oldVerse(id: string, key: string): OV {
  const [si, vi] = key.split('.').map(Number);
  const v = old[id].sections[si].verses[vi];
  return { text: v.text, m: m5of(v, `old ${id} ${key}`) };
}
function oldSection(id: string, si: number) { return old[id].sections[si]; }

const svaha = (t: string) => {
  if (/नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः/.test(t)) return t.replace(/नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः\s*॥\s*$/, 'नमस्तस्यै स्वाहा । नमस्तस्यै स्वाहा । नमस्तस्यै नमो नमः स्वाहा ॥');
  return t.replace(/[\s।॥]*$/, '') + ' स्वाहा ॥';
};
const knDigits = (s: string) => s.replace(/[0-9]/g, (d) => '೦೧೨೩೪೫೬೭೮೯'[+d]);

// purvanga copies
function copyPurvanga(si: number, trad: 'madhva' | 'all', opts: { replace?: { key: string; v: OV }[]; noteAppend?: [string, string]; note?: [string, string]; replaceHoma?: [string, string, string, string]; drop?: number[] } = {}): OS {
  if (opts.replaceHoma) opts = { ...opts, replace: [...(opts.replace ?? []), purvangaReplace(...opts.replaceHoma)] };
  const s = lib('homa-purvanga').sections[si];
  if (trad === 'madhva' && s.when && !s.when.tradition?.includes('madhva')) throw new Error('not madhva ' + si);
  const verses: OV[] = [];
  s.verses.forEach((v, vi) => {
    if (opts.drop?.includes(vi)) return;
    if (trad === 'madhva' && v.when && !v.when.tradition?.includes('madhva')) return;
    const rep = opts.replace?.find((r) => r.key === `${si}.${vi}`);
    const ov: OV = rep ? rep.v : { n: v.n, text: v.text, m: m5of(v, `purvanga ${si}.${vi}`) };
    if (trad === 'all' && v.when) ov.when = v.when;
    if (trad === 'madhva') delete ov.when;
    verses.push(ov);
  });
  return {
    title: s.title, titleEn: s.titleEn,
    note: (opts.note ? opts.note[0] : s.note ?? '') + (opts.noteAppend ? ' ' + opts.noteAppend[0] : ''),
    noteKn: (opts.note ? opts.note[1] : s.noteKn ?? '') + (opts.noteAppend ? ' ' + opts.noteAppend[1] : ''),
    when: trad === 'all' ? s.when : undefined,
    verses,
  };
}
function purvangaReplace(key: string, homaSa: string, homaEn: string, homaKn: string): { key: string; v: OV } {
  const [si, vi] = key.split('.').map(Number);
  const v = lib('homa-purvanga').sections[si].verses[vi];
  const m = m5of(v, key);
  return {
    key,
    v: {
      text: v.text.replace(/अमुकहोम/g, homaSa + 'होम'),
      when: v.when,
      m: [m[0].replace('By this … homa', `By this ${homaEn} homa`), m[1].replace('ಈ ಇಂತಹ ಹೋಮ', `ಈ ${homaKn} ಹೋಮ`), m[2], m[3], m[4]],
    },
  };
}

// library text copied whole (recitation, no svaha)
function copyWhole(id: string, title: string, titleEn: string, note: string, noteKn: string): OS {
  const m = lib(id);
  const verses: OV[] = [];
  m.sections.forEach((s, si) => s.verses.forEach((v, vi) => verses.push({ n: v.n, text: v.text, m: m5of(v, `${id} ${si}.${vi}`) })));
  return { title, titleEn, note, noteKn, verses };
}

// ---- Chandika chapters ----
const CHAR_VINIYOGA: Record<number, number> = { 1: 0, 2: 1, 5: 2 }; // old chandika section 2 verse index
let dmCount = 0;
function chapter(ch: number): OS {
  const id = `devi-mahatmyam-${String(ch).padStart(2, '0')}`;
  const m = lib(id);
  const verses: OV[] = [];
  let first = 0, last = 0;
  m.sections.forEach((s, si) => s.verses.forEach((v, vi) => {
    const mm = m5of(v, `${id} ${si}.${vi}`);
    if (v.n === undefined) {
      if (/चरित्रस्य/.test(v.text) && CHAR_VINIYOGA[ch] !== undefined) { verses.push(oldVerse('chandika-homa', `2.${CHAR_VINIYOGA[ch]}`)); return; }
      verses.push({ text: v.text, m: mm });
      return;
    }
    if (!first) first = v.n;
    last = v.n;
    verses.push({ n: v.n, text: svaha(v.text), m: mm });
  }));
  const a = dmCount + first, b = dmCount + last;
  dmCount += last;
  const t = m.titleEn.replace(/^Devi Mahatmyam · /, '');
  const charitra = ch === 1 ? 'Prathama charitra, deity Mahakali' : ch <= 4 ? 'Madhyama charitra, deity Mahalakshmi' : 'Uttama charitra, deity Mahasarasvati';
  const charitraKn = ch === 1 ? 'ಪ್ರಥಮ ಚರಿತ್ರ, ದೇವತೆ ಮಹಾಕಾಳೀ' : ch <= 4 ? 'ಮಧ್ಯಮ ಚರಿತ್ರ, ದೇವತೆ ಮಹಾಲಕ್ಷ್ಮೀ' : 'ಉತ್ತಮ ಚರಿತ್ರ, ದೇವತೆ ಮಹಾಸರಸ್ವತೀ';
  const head = CHAR_VINIYOGA[ch] !== undefined ? 'Say the viniyoga of the charitra (for the homa: हवने) and the dhyana, which are not offered; then ' : 'Recite the dhyana of the chapter (not offered); then ';
  const headKn = CHAR_VINIYOGA[ch] !== undefined ? 'ಚರಿತ್ರದ ವಿನಿಯೋಗ (ಹೋಮದಲ್ಲಿ “ಹವನೇ”) ಮತ್ತು ಧ್ಯಾನವನ್ನು ಹೇಳಿ — ಇವುಗಳಿಗೆ ಆಹುತಿ ಇಲ್ಲ; ನಂತರ ' : 'ಅಧ್ಯಾಯದ ಧ್ಯಾನವನ್ನು ಹೇಳಿ (ಆಹುತಿ ಇಲ್ಲ); ನಂತರ ';
  return {
    title: m.title,
    titleEn: plain(`Chapter ${ch}: ${t.replace(/^Chapter \d+ /, '').replace(/^\(|\)$/g, '')}`),
    note: `${charitra}. ${head}offer one oblation with each numbered mantra as it ends in svaha (payasa mixed with sesame and ghee, as the Vaikritika Rahasya says, or what your purohita directs), with the tyaga श्रीचण्डिकायै इदं न मम. Mantras ${a} to ${b} of the 700 (${last - first + 1} in this chapter, numbered as in Gita Press). The closing line of the chapter (इति…) is said without an offering.${ch === 5 ? ' Each stanza या देवी सर्वभूतेषु… counts as three mantras and takes three oblations, one at each नमस्तस्यै.' : ''}`,
    noteKn: `${charitraKn}. ${headKn}ಸಂಖ್ಯೆ ಇರುವ ಪ್ರತಿ ಮಂತ್ರವೂ “ಸ್ವಾಹಾ” ಎಂದು ಮುಗಿಯುವಾಗ ಒಂದು ಆಹುತಿ ನೀಡಿ (ವೈಕೃತಿಕ ರಹಸ್ಯದಂತೆ ಎಳ್ಳು–ತುಪ್ಪ ಸೇರಿಸಿದ ಪಾಯಸ, ಅಥವಾ ಪುರೋಹಿತರು ಹೇಳಿದ ದ್ರವ್ಯ), “ಶ್ರೀಚಂಡಿಕಾಯೈ ಇದಂ ನ ಮಮ” ಎಂಬ ತ್ಯಾಗದೊಡನೆ. ೭೦೦ರಲ್ಲಿ ${knDigits(String(a))}–${knDigits(String(b))}ನೆಯ ಮಂತ್ರಗಳು (ಈ ಅಧ್ಯಾಯದಲ್ಲಿ ${knDigits(String(last - first + 1))}, ಗೀತಾ ಪ್ರೆಸ್ ಸಂಖ್ಯಾಕ್ರಮ). ಅಧ್ಯಾಯದ ಕೊನೆಯ “ಇತಿ…” ವಾಕ್ಯಕ್ಕೆ ಆಹುತಿ ಇಲ್ಲ.${ch === 5 ? ' “ಯಾ ದೇವೀ ಸರ್ವಭೂತೇಷು…” ಪ್ರತಿ ಪದ್ಯವೂ ಮೂರು ಮಂತ್ರಗಳು; ಪ್ರತಿ “ನಮಸ್ತಸ್ಯೈ”ಗೆ ಒಂದರಂತೆ ಮೂರು ಆಹುತಿಗಳು.' : ''}`,
    verses,
  };
}

// ---- Pavamana suktas ----
const toKn = (s: string) => Sanscript.t(s, 'devanagari', 'kannada');
const toEn = (s: string) => plain(Sanscript.t(s, 'devanagari', 'iast'));
let pvCount = 0;
function rvText(lines: string[]): string {
  const t = lines.join('\n');
  return t.replace(/\s*॥\s*$/, ' स्वाहा ॥');
}
function sukta(s: any): OS {
  const verses: OV[] = s.verses.map((v: any) => {
    const key = `${s.m}.${s.n}.${v.n}`;
    let lines: string[] = v.gretil;
    if (key === '9.66.10') lines = lines.map((l) => l.replace('वाजिन्सर्गा', 'वाजिन्त्सर्गा'));
    const m = rvm.get(key);
    if (!m) throw new Error('no meaning ' + key);
    return { n: v.n, text: rvText(lines), m };
  });
  const a = pvCount + 1, b = pvCount + verses.length;
  pvCount += verses.length;
  const first = s.verses[0].gretil[0].replace(/[।॥]/g, '').trim().split(/\s+/).slice(0, 2).join(' ');
  const rn: any = RV_NOTES[`${s.m}.${s.n}`];
  const rishi = (s.author as string).replace(/[।,.]+\s*$/, '').replace(/\s+/g, ' ').replace(/ंं/g, 'ं').trim();
  const rk = RISHI[rishi];
  if (!rk) throw new Error('no rishi map for ' + JSON.stringify(rishi));
  const metreEn = rn?.metre ?? 'gayatri';
  const metreKn = rn?.metreKn ?? 'ಗಾಯತ್ರೀ';
  const deityEn = rn?.deity ?? 'Pavamana Soma';
  const deityKn = rn?.deityKn ?? 'ಪವಮಾನ ಸೋಮ';
  const rishiEn = rk[0];
  const rishiKn = rk[1];
  return {
    title: `ऋग्वेदः ${s.m}.${s.n}`.replace(/[0-9]/g, (d) => '०१२३४५६७८९'[+d]),
    titleEn: `Rigveda ${s.m}.${s.n}: ${toEn(first)} (${verses.length} mantras)`,
    note: `Seer: ${rishiEn}. Deity: ${deityEn}. Metre: ${metreEn}. Pavamana mantras ${a} to ${b} of the 610.${rn?.extra ? ' ' + rn.extra : ''}`,
    noteKn: `ಋಷಿ: ${rishiKn}. ದೇವತೆ: ${deityKn}. ಛಂದಸ್ಸು: ${metreKn}. ೬೧೦ ಪವಮಾನ ಮಂತ್ರಗಳಲ್ಲಿ ${knDigits(String(a))}–${knDigits(String(b))}.${rn?.extraKn ? ' ' + rn.extraKn : ''}`,
    verses,
  };
}
function purushaSukta(): OS {
  const s = rv.find((x: any) => x.m === 10 && x.n === 90);
  const map = [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 6, 17]; // RV verse i -> TA 3.12 verse index in library section 1
  const verses: OV[] = s.verses.map((v: any, i: number) => ({ n: v.n, text: rvText(v.gretil), m: libVerse('purusha-sukta', `1.${map[i]}`).m }));
  return { ...FRAME_P.purushaHead, verses };
}

// ---- assemble ----
type Spec = any;
function expand(frame: Spec[]): OS[] {
  const out: OS[] = [];
  for (const f of frame) {
    if (f.kind === 'own') {
      const on = f.oldNote ? oldSection(f.oldNote[0], f.oldNote[1]) : undefined;
      let note = f.note ?? on?.note ?? '', noteKn = f.noteKn ?? on?.noteKn ?? '';
      if (f.noteAppend) { note += ' ' + f.noteAppend[0]; noteKn += ' ' + f.noteAppend[1]; }
      out.push({ title: f.title, titleEn: f.titleEn, note, noteKn, when: f.when, verses: f.verses.map((v: any) => resolveVerse(v)) });
    }
    else if (f.kind === 'purvanga') out.push(copyPurvanga(f.si, f.trad, f.opts ?? {}));
    else if (f.kind === 'whole') out.push(copyWhole(f.id, f.title, f.titleEn, f.note, f.noteKn));
    else if (f.kind === 'chapters') { for (let ch = 1; ch <= 13; ch++) out.push(chapter(ch)); }
    else if (f.kind === 'suktas') { for (const s of rv) { if (s.m === 9) out.push(sukta(s)); } }
    else if (f.kind === 'purusha') out.push(purushaSukta());
    else throw new Error('kind ' + f.kind);
  }
  return out;
}
function resolveVerse(v: any): OV {
  let r: OV;
  if (v.lib) r = libVerse(v.lib[0], v.lib[1]);
  else if (v.libN) {
    const m = lib(v.libN[0]);
    const hit = m.sections.flatMap((s) => s.verses).find((x) => x.n === v.libN[1]);
    if (!hit) throw new Error('libN ' + v.libN);
    r = { n: undefined, text: hit.text, m: m5of(hit, 'libN') };
  } else if (v.old) r = oldVerse(v.old[0], v.old[1]);
  else if (v.pv) r = { ...libVerse('homa-purvanga', v.pv) };
  else if (v.pvFind) {
    const pm = lib('homa-purvanga');
    const hit = pm.sections.flatMap((s) => s.verses).find((x) => x.text.startsWith(v.pvFind));
    if (!hit) throw new Error('pvFind ' + v.pvFind);
    r = { text: hit.text, m: m5of(hit, 'pvFind ' + v.pvFind) };
    if (v.homa) {
      const [sa, en, kn, hi, te, ta] = v.homa as string[];
      const m = [...r.m] as L5;
      r = { text: r.text.replace(/अमुकहोम/g, sa + 'होम'), m };
      if (r.text.includes('अमुक')) throw new Error('amuka left');
      m[0] = m[0].replace('… homa', `${en} homa`);
      m[1] = m[1].includes('ಇಂತಹ ಹೋಮ') ? m[1].replace('ಇಂತಹ ಹೋಮ', `${kn} ಹೋಮ`) : m[1];
      m[2] = m[2].includes('…') ? m[2].replace('… ', `${hi} `) : m[2].replace('इस होम', `इस ${hi} होम`);
      m[3] = m[3].includes('…') ? m[3].replace('… ', `${te} `) : m[3].replace('ఈ హోమ', `ఈ ${te} హోమ`);
      m[4] = m[4].includes('…') ? m[4].replace('… ', `${ta} `) : m[4].replace('இந்த ஹோம', `இந்த ${ta} ஹோம`);
    }
  }
  else r = { n: v.n, text: v.text, m: v.m };
  if (v.text && (v.lib || v.old || v.libN)) r.text = v.text;
  if (v.n !== undefined) r.n = v.n;
  if (v.when) r.when = v.when;
  if (v.svaha) r.text = svaha(r.text);
  if (v.noN) r.n = undefined;
  return r;
}

const q = (s: string) => JSON.stringify(s);
function emit(meta: any, header: string, sections: OS[], exportName: string, file: string) {
  const L: string[] = [];
  L.push(header.trim(), "import type { Mantra } from '../types';", '', `export const ${exportName}: Mantra = {`);
  for (const k of ['id', 'title', 'titleEn', 'category', 'order', 'deity', 'source', 'summary', 'summaryKn', 'difficulty', 'completeness', 'contentNote']) {
    if (meta[k] === undefined) continue;
    L.push(`  ${k}: ${typeof meta[k] === 'number' ? meta[k] : q(meta[k])},`);
  }
  if (meta.variants) L.push(`  variants: ${JSON.stringify(meta.variants)},`);
  L.push('  sections: [');
  for (const s of sections) {
    L.push('    {');
    for (const k of ['title', 'titleEn', 'note', 'noteKn'] as const) if (s[k]) L.push(`      ${k}: ${q(s[k]!)},`);
    if (s.when) L.push(`      when: ${JSON.stringify(s.when)},`);
    L.push('      verses: [');
    for (const v of s.verses) {
      const parts = [];
      if (v.n !== undefined) parts.push(`n: ${v.n}`);
      parts.push(`text: ${q(v.text)}`);
      parts.push(`meaning: { en: ${q(v.m[0])}, kn: ${q(v.m[1])} }`);
      if (v.when) parts.push(`when: ${JSON.stringify(v.when)}`);
      L.push(`        { ${parts.join(', ')} },`);
    }
    L.push('      ],', '    },');
  }
  L.push('  ],', '};', '');
  writeFileSync(join(REPO, 'src/data/texts', file), L.join('\n'));
}

const P = expand(FRAME_P.sections);
const C = expand(FRAME_C.sections);
if (pvCount !== 610) throw new Error('pavamana count ' + pvCount);
if (dmCount !== 700) throw new Error('saptashati count ' + dmCount);
emit(META_P, HDR_P, P, 'pavamanaHoma', 'pavamana-homa.ts');
emit(META_C, HDR_C, C, 'chandikaHoma', 'chandika-homa.ts');

// packs
const names = { hi: 'hiHoma2', te: 'teHoma2', ta: 'taHoma2' } as const;
for (const [li, lang] of [[2, 'hi'], [3, 'te'], [4, 'ta']] as const) {
  const L: string[] = [];
  L.push("import type { MeaningPack } from '../../types';", '', '/** Meanings for the two long homas (Chandika and Pavamana); the other homas are in homa.ts. */', `export const ${names[lang]}: MeaningPack = {`, `  lang: '${lang}',`, '  texts: {');
  for (const [id, secs, meta] of [['chandika-homa', C, META_C], ['pavamana-homa', P, META_P]] as const) {
    L.push(`    '${id}': {`, `      summary: ${q((meta as any).summaries[lang])},`, '      verses: {');
    (secs as OS[]).forEach((s, si) => s.verses.forEach((v, vi) => L.push(`        '${si}.${vi}': ${q(v.m[li])},`)));
    L.push('      },', '    },');
  }
  L.push('  },', '};', '');
  writeFileSync(join(REPO, `src/data/meanings/${lang}/homa-2.ts`), L.join('\n'));
}
const cnt = (S: OS[]) => S.reduce((a, s) => a + s.verses.length, 0);
console.log(`pavamana: ${P.length} sections, ${cnt(P)} items; chandika: ${C.length} sections, ${cnt(C)} items`);
