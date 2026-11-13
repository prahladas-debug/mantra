# Content authoring guide

Every mantra lives in its own file in `src/data/texts/<id>.ts` and exports one
`Mantra` object (schema: `src/data/types.ts`). See `src/data/texts/gayatri.ts`
for a minimal example.

## Rules

1. **Devanagari only** in `title`, section `title` and verse `text`. The app
   transliterates to Kannada, Telugu, Tamil, Malayalam, IAST, etc. at runtime,
   so never add other scripts.
2. **No Vedic svara (accent) marks** (॑ ॒ ᳚ etc.) for now. Plain Devanagari.
3. **Lines** inside a verse are separated by `\n`. Half-verse ends with ` ।`,
   full verse ends with ` ॥`. **Do not** write the verse number in the text:
   put it in `n` (the app renders `॥ n ॥`).
4. Use sandhi and spelling as in the standard printed recitation tradition
   (e.g. Gita Press / TTD / Uttaradi Math editions). Prefer `ङ्ग`, `ञ्च`, `ण्ड`,
   `न्त`, `म्ब` (conjunct nasals) over anusvara inside words where the printed
   tradition does, but be consistent within a text.
5. **Accuracy over volume.** These are sacred texts read by devotees. Never
   invent or "fill in" a verse you are not certain of. If you can't produce a
   portion reliably, leave it out, set `completeness: 'partial'` and explain
   exactly what is missing in `contentNote` (e.g. "Verses 12–41 to be added
   after proofreading against an authoritative edition.").
6. Group the text into `sections` matching how it is traditionally recited
   (e.g. Pūrva-bhāga / Dhyānam / Stotram / Phala-śruti). Use English
   `titleEn` on each section, Devanagari `title` too where a traditional name
   exists.
7. `note` (English) is for practical instructions: "Sip water three times",
   "Offer arghya with both hands", "Replace (name) with the deity's name".
8. `meaning` is optional; add a short English meaning for short prayers.
9. After writing, run `npx tsx scripts/validate-content.ts src/data/texts/<file>.ts`
   and fix every ERROR. Warnings about verse-number jumps are fine only if
   intentional.

## Proofreading

All texts must be proofread against a printed edition before a public store
release. Record the edition used in the file header comment once verified.

## Meanings (English + Kannada)

Each verse can carry `meaning: { en: '…', kn: '…' }`; each text can carry
`summaryKn`. Rules:

1. **Never change `text`, `title` or `n`.** Only add `meaning` / `summaryKn`.
   `npx tsx scripts/check-texts-unchanged.ts` must report 0 changed.
2. **Write original meanings** from the Sanskrit. Do not copy or closely
   paraphrase published translations (Gita Press, Ramakrishna Math, math
   publications, websites); they are copyrighted.
3. **English:** plain, reverent, 1–3 sentences per verse. Give the sense, not a
   word-by-word gloss. Proper names in IAST or common English spelling.
4. **Kannada:** natural modern Kannada as used in Karnataka devotional books
   (ಸರಳ ಕನ್ನಡ), not a literal transliteration of the English. Kannada script
   only: write Sanskrit names in Kannada (ಶ್ರೀಹರಿ, ವಾಯುದೇವರು), never
   Devanagari. Use respectful forms for deities (ಶ್ರೀಹರಿಯು, ವಾಯುದೇವರು).
5. **Tradition:** follow the plain sense; for Madhva texts (Vayu Stuti,
   Raghavendra Stotra) follow the Dvaita reading (Vāyu as jīvottama, Hari as
   sarvottama). Do not add sectarian commentary beyond that.
6. **Uncertain verses:** if you cannot give a confident meaning, leave that
   verse without `meaning` rather than guess, and list it in your report.
7. Short items (speaker lines like अर्जुन उवाच, colophons, ॐ) need no meaning.
