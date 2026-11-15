/// <reference types="node" />
/**
 * Content validator. Run: npx tsx scripts/validate-content.ts [file ...]
 * With no args validates every file in src/data/texts.
 *
 * Checks: schema shape, unique ids, Devanagari-only verse text, sequential
 * verse numbers within a section, no verse numbers embedded in text,
 * and a transliteration round-trip sanity check.
 */
import { readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import Sanscript from '@indic-transliteration/sanscript';
import type { Mantra } from '../src/data/types';

const CATEGORIES = ['nitya', 'gita', 'sundarakanda', 'devimahatmya', 'harikathamrutasara', 'sumadhvavijaya', 'vedic', 'sahasranama', 'stotra', 'madhva', 'dasara-pada', 'sandhya', 'puja', 'homa', 'samskara', 'kirtana'];
const DIR = resolve(__dirname, '../src/data/texts');

// Devanagari block, Vedic extensions, whitespace, ZWJ/ZWNJ, avagraha, basic punctuation.
const ALLOWED = /^[ऀ-ॿ᳐-᳿꣠-ꣿ\s‌‍\-–—,.;:?!'’‘"“”()\[\]]*$/;
// Kannada-language works (sourceScript: 'kannada'): Kannada block plus dandas.
const ALLOWED_KN = /^[\u0C80-\u0CFF\u0964\u0965\s\u200C\u200D\-–—,.;:?!'’‘"“”()\[\]]*$/;
// Telugu- and Tamil-language works: their own block plus dandas.
const ALLOWED_TE = /^[\u0C00-\u0C7F\u0964\u0965\s\u200C\u200D\-–—,.;:?!'’‘"“”()\[\]]*$/;
const ALLOWED_TA = /^[\u0B80-\u0BFF\u0964\u0965\s\u200C\u200D\-–—,.;:?!'’‘"“”()\[\]]*$/;
const EMBEDDED_NUMBER = /॥\s*[०-९0-9]+\s*॥/;

const args = process.argv.slice(2);
const files = args.length
  ? args.map((f) => resolve(f))
  : readdirSync(DIR)
      .filter((f) => f.endsWith('.ts'))
      .map((f) => join(DIR, f));

let errors = 0;
let warnings = 0;
const err = (where: string, msg: string) => {
  errors++;
  console.error(`ERROR  ${where}: ${msg}`);
};
const warn = (where: string, msg: string) => {
  warnings++;
  console.warn(`warn   ${where}: ${msg}`);
};

async function main() {
  const seen = new Map<string, string>();
  let verseTotal = 0;
  for (const file of files) {
    const mod = await import(pathToFileURL(file).href);
    const exported = Object.values(mod).filter(
      (v): v is Mantra => !!v && typeof v === 'object' && 'sections' in (v as object),
    );
    if (exported.length === 0) err(file, 'no Mantra export found');
    for (const m of exported) {
      const w = `${m.id}`;
      if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(m.id)) err(w, 'id must be kebab-case');
      if (seen.has(m.id)) err(w, `duplicate id (also in ${seen.get(m.id)})`);
      seen.set(m.id, file);
      if (!CATEGORIES.includes(m.category)) err(w, `bad category ${m.category}`);
      const SCRIPT_OK = m.sourceScript === 'kannada' ? ALLOWED_KN : m.sourceScript === 'telugu' ? ALLOWED_TE : m.sourceScript === 'tamil' ? ALLOWED_TA : ALLOWED;
      if (!m.title || !SCRIPT_OK.test(m.title)) err(w, `title must be ${m.sourceScript ?? 'devanagari'}`);
      if (!m.titleEn) err(w, 'missing titleEn');
      if (!m.summary) err(w, 'missing summary');
      if (m.summaryKn !== undefined && !/[\u0C80-\u0CFF]/.test(m.summaryKn)) err(w, 'summaryKn must be Kannada');
      if (!['easy', 'medium', 'advanced'].includes(m.difficulty)) err(w, 'bad difficulty');
      if (m.completeness === 'partial' && !m.contentNote) err(w, 'partial texts need contentNote');
      if (!m.sections?.length) err(w, 'no sections');
      const variantIds = new Map((m.variants ?? []).map((v) => [v.key as string, new Set(v.options.map((o) => o.id))]));
      const checkWhen = (where: string, when: Record<string, string[] | undefined> | undefined) => {
        for (const [k, ids] of Object.entries(when ?? {})) {
          const known = variantIds.get(k);
          if (!known) { err(where, `when.${k} used but the text declares no '${k}' variant`); continue; }
          for (const id of ids ?? []) if (!known.has(id)) err(where, `when.${k}: unknown option '${id}'`);
        }
      };
      m.sections?.forEach((s, si) => {
        const sw = `${w} §${si + 1}${s.titleEn ? ` (${s.titleEn})` : ''}`;
        checkWhen(sw, s.when);
        if (s.noteKn !== undefined && !/[\u0C80-\u0CFF]/.test(s.noteKn)) err(sw, 'noteKn must be Kannada');
        if (s.title && !SCRIPT_OK.test(s.title)) err(sw, 'section title is in the wrong script');
        if (!s.verses?.length) err(sw, 'empty section');
        let prev: number | undefined;
        s.verses?.forEach((v, vi) => {
          verseTotal++;
          const vw = `${sw} v${v.n ?? `#${vi + 1}`}`;
          checkWhen(vw, v.when);
          if (!v.text?.trim()) return err(vw, 'empty text');
          if (!SCRIPT_OK.test(v.text)) {
            const bad = [...v.text].filter((c) => !SCRIPT_OK.test(c));
            err(vw, `non-Devanagari characters: ${JSON.stringify([...new Set(bad)].join(''))}`);
          }
          if (EMBEDDED_NUMBER.test(v.text)) err(vw, 'verse number embedded in text; use `n`');
          if (v.text !== v.text.trim()) warn(vw, 'leading/trailing whitespace');
          if (/\n\s*\n/.test(v.text)) warn(vw, 'blank line inside verse');
          if (v.n !== undefined) {
            if (prev !== undefined && v.n !== prev + 1) warn(vw, `verse number jumps from ${prev}`);
            prev = v.n;
          }
          if (v.meaning !== undefined && typeof v.meaning !== 'string') {
            for (const [lang, t] of Object.entries(v.meaning)) {
              if (!['en', 'kn'].includes(lang)) err(vw, `unknown meaning language ${lang}`);
              if (!t?.trim()) err(vw, `empty ${lang} meaning`);
              if (lang === 'kn' && t) {
                if (!/[\u0C80-\u0CFF]/.test(t)) err(vw, 'kn meaning has no Kannada text');
                if (/[\u0900-\u097F]/.test(t.replace(/[।॥]/g, ''))) err(vw, 'kn meaning contains Devanagari; write Sanskrit words in Kannada script');
              }
              if (lang === 'en' && t && /[\u0C80-\u0CFF]/.test(t)) err(vw, 'en meaning contains Kannada');
            }
          }
          if (m.sourceScript && m.sourceScript !== 'devanagari') return;
          // Round-trip sanity: Devanagari -> IAST -> Devanagari should be stable.
          // Legitimate spellings the IAST round trip cannot preserve: र्ऋ (nairṛta, rṛ is ambiguous),
          // anusvāra after ओ (oṃkāra, tejoṃśa) and candrabindu; normalise them before comparing.
          const norm = (x: string) => x.replace(/्ॐ/g, 'ों').replace(/\s+/g, ' ').replace(/र्ऋ/g, 'रृ').replace(/[ंँ]/g, 'ं');
          const rt = Sanscript.t(Sanscript.t(v.text, 'devanagari', 'iast'), 'iast', 'devanagari');
          if (norm(rt) !== norm(v.text) && norm(rt).replace(/ओं|ों/g, 'ओ') !== norm(v.text).replace(/ओं|ों/g, 'ओ')) {
            warn(vw, 'IAST round-trip differs (check for unusual characters)');
          }
        });
      });
    }
  }
  console.log(
    `\n${seen.size} texts, ${verseTotal} verses/items, ${errors} errors, ${warnings} warnings`,
  );
  process.exit(errors ? 1 : 0);
}

main();
