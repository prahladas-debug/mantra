# Shri Ramcharitmanas (Tulsidas) as a long work

Built like the Valmiki Ramayana (see CONTENT_GUIDE.md, "Long works"), with these differences.

## Layout
- `books-src/ramcharitmanas/book.json` and `books-src/ramcharitmanas/<n>-<name>/<NNN>.json`.
- Parts (folder · name · nameEn · dohas · units):
  1 `1-bala` · बालकाण्ड · Bal Kand · 361 · 36
  2 `2-ayodhya` · अयोध्याकाण्ड · Ayodhya Kand · 326 · 33
  3 `3-aranya` · अरण्यकाण्ड · Aranya Kand · 46 · 5
  4 `4-kishkindha` · किष्किन्धाकाण्ड · Kishkindha Kand · 30 · 3
  5 `5-sundar` · सुन्दरकाण्ड · Sundar Kand · 60 · 6 (linked to the library text `tulsi-sundar-kand`; no unit files)
  6 `6-lanka` · लंकाकाण्ड · Lanka Kand · 121 · 12
  7 `7-uttar` · उत्तरकाण्ड · Uttar Kand · 130 · 13
  (Doha counts as numbered by Gita Press. If the Gita Press numbering differs, follow Gita Press and
  correct this table.)
- `partLabel` "kanda", `unitLabel` "prasang". A unit is ten doha-groups: unit k holds dohas
  10(k−1)+1 … 10k; the last unit of a kanda also takes a remainder of fewer than five (Bal Kand
  unit 36 = dohas 351–361).

## A unit file
- `id` `ramcharitmanas-<part>-<NNN>`, `work`, `part`, `partName`, `partNameEn`, `unit` as usual.
- `title`: the episode in Hindi words, Devanagari, no digits (e.g. `गुरु वन्दना और रामनाम की महिमा`);
  `titleEn`: `Dohas 1–10 · Invocation, the guru and the glory of the Name`.
- `summary`: `{ "en": …, "hi": … }` (only English and Hindi for this work).
- `source`: `Gita Press, Shri Ramcharitmanas, Bal Kand, dohas 1–10`.
- `sections`: usually one; a unit may split at an episode boundary (section `title`/`titleEn`).
- One verse per doha-group: the chaupai lines before doha N, then doha N (and any chhand or sortha
  that Gita Press prints in that group), one line per ardhali/doha half, joined with `\n`, each
  line ending with । or ॥ as printed. `n` is the doha number within the kanda (N), not 1…10.
  Dohas printed as (क)/(ख) stay in one verse with that one `n`.
- Unnumbered verses (no `n`): the opening Sanskrit shlokas (and Bal Kand's opening sorthas) at the
  start of each kanda's unit 1, and the closing shlokas, colophon and phalashruti in a kanda's last
  unit.
- `meaning`: `{ "en": …, "hi": … }` per verse, original wording (no copying of published
  translations): English plain and faithful, Hindi a simple modern-Hindi explanation.
- Text: Devanagari only, no digits, letters with a nukta written without the dot (ड़ → ड, as in the
  library's other Hindi texts), no ZWJ/ZWNJ, no double or edge spaces.

## Sources
Base: the Gita Press text as typed on bhaktibharat.com (one page per doha). Collate with the
WirelessAlien/Ramcharitmanas dataset (npm `hindu-devotional-texts`) and hindupad.com; record
every reading taken against the base in `logs/<part>.tsv` (doha, base, chosen, witnesses, reason).
