/// <reference types="node" />
/**
 * Interface translations: which English strings the app shows, and which each language still lacks.
 *
 *   npx tsx scripts/i18n-check.ts                 summary (part of npm test; fails only on broken entries)
 *   npx tsx scripts/i18n-check.ts --missing <lang> print the missing strings as blocks for a translator
 *   npx tsx scripts/i18n-check.ts --keys           print every key
 *
 * Keys are found in the code (tr('…'), tr(lang, '…'), T('…'), say('…') in parana.ts) and in the
 * festival data (each festival's English gloss and note, over several years, both calendars and
 * both traditions; an ekādaśī's gloss is only its Sanskrit name, so it is not translated).
 * A translation is broken when its {placeholders} differ from the English or it has no letter of
 * its language's script. Translations for keys no longer used are reported, not fatal.
 */
import { createHash } from 'crypto';
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, resolve } from 'path';
import { UI_STRINGS } from '../src/i18n';
import { festivalsBetween } from '../src/lib/festivals';
import { cityById } from '../src/lib/panchanga';

const ROOT = resolve(__dirname, '..');
const LANGS = ['kn', 'hi', 'te', 'ta', 'ml'] as const;
const SCRIPT: Record<string, RegExp> = { kn: /[ಀ-೿]/, hi: /[ऀ-ॿ]/, te: /[ఀ-౿]/, ta: /[஀-௿]/, ml: /[ഀ-ൿ]/ };

function files(dir: string): string[] {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? files(p) : /\.tsx?$/.test(f) ? [p] : [];
  });
}

const unescape = (s: string) => s.replace(/\\(['"\\])/g, '$1').replace(/\\n/g, '\n');

export function collectKeys(): string[] {
  const keys = new Set<string>();
  const re = /\b(?:tr|T|say)\(\s*(?:lang\s*,\s*|'en'\s*,\s*)?(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)")/g;
  for (const f of files(join(ROOT, 'src')).filter((p) => !p.includes(`${join('src', 'i18n')}`) && !p.includes(join('src', 'data', 'texts')))) {
    const src = readFileSync(f, 'utf8');
    for (const m of src.matchAll(re)) keys.add(unescape(m[1] ?? m[2]));
    // tr(cond ? 'one' : 'other') — both strings are keys.
    for (const m of src.matchAll(/\b(?:tr|T)\(\s*[^'"()?]{1,80}\?\s*'((?:[^'\\]|\\.)*)'\s*:\s*'((?:[^'\\]|\\.)*)'/g)) {
      keys.add(unescape(m[1]));
      keys.add(unescape(m[2]));
    }
  }
  // Group headings of the category pages (src/lib/groups.ts): ['id', 'Title', …] tuples.
  for (const m of readFileSync(join(ROOT, 'src', 'lib', 'groups.ts'), 'utf8').matchAll(/\[\s*'[\w-]+',\s*'([A-Z][^']+)'/g)) keys.add(m[1]);
  // Festival glosses and notes as the app computes them.
  for (const cityId of ['bengaluru', 'udupi']) {
    const city = cityById(cityId);
    for (const rule of ['madhva', 'smarta'] as const)
      for (const mode of ['chandra', 'saura'] as const)
        for (const f of festivalsBetween(city, '2025-01-01', '2031-12-31', rule, mode, 'next')) {
          if (f.kind !== 'ekadashi') keys.add(f.en);
          if (f.note) keys.add(f.note);
        }
  }
  keys.delete('');
  keys.delete('en'); // tr('en', key) in the libraries: the language, not a string
  return [...keys].sort();
}

export const keyId = (k: string) => createHash('sha1').update(k).digest('hex').slice(0, 8);
const holes = (s: string) => [...s.matchAll(/\{(\w+)(?::loc)?\}/g)].map((m) => m[1]).sort().join(',');

if (require.main === module) {
  const keys = collectKeys();
  const arg = process.argv[2];
  if (arg === '--keys') {
    for (const k of keys) console.log(`${keyId(k)}  ${k}`);
  } else if (arg === '--missing') {
    const lang = process.argv[3] as (typeof LANGS)[number];
    const dict = UI_STRINGS[lang] ?? {};
    const miss = keys.filter((k) => !dict[k]);
    const from = Number(process.argv[4] ?? 0), n = Number(process.argv[5] ?? miss.length);
    for (const k of miss.slice(from, from + n)) console.log(`@@ ${keyId(k)}\nEN: ${k.replace(/\n/g, '\\n')}`);
    console.error(`${miss.length} missing in ${lang}; printed ${Math.min(n, Math.max(0, miss.length - from))} from ${from}`);
  } else {
    let broken = 0;
    const set = new Set(keys);
    const summary: string[] = [];
    for (const lang of LANGS) {
      const dict = UI_STRINGS[lang] ?? {};
      let have = 0, stale = 0;
      for (const [k, v] of Object.entries(dict)) {
        if (!set.has(k)) { stale++; continue; }
        have++;
        if (holes(k) !== holes(v)) { broken++; console.error(`ERROR  ${lang}: placeholders differ in "${k.slice(0, 60)}"`); }
        if (/[A-Za-z\u0900-\u0DFF]/.test(k.replace(/\{\w+(?::loc)?\}/g, '')) && !SCRIPT[lang].test(v)) { broken++; console.error(`ERROR  ${lang}: not in ${lang} script: "${v.slice(0, 60)}"`); }
      }
      summary.push(`${lang} ${have}/${keys.length}${stale ? ` (+${stale} unused)` : ''}`);
    }
    console.log(`interface strings: ${keys.length}; translated: ${summary.join(', ')}; ${broken} errors`);
    process.exit(broken ? 1 : 0);
  }
}
