# Mahabharata verse meanings (BORI critical edition, books-src/mahabharata)

Helper (run from the repo root): `python3 -I tools/builders/mahabharata/meanings/mbm.py …`
- `chunk en E001` / `chunk hi H001` → your chunk: `{"part":5,"from":33,"to":52,…}` (units are files `NNN.json` in that parva folder).
- `show <part> <unit>` prints `key<TAB>n<TAB>text` for every verse of one adhyaya (`--en` adds the English meaning).
- `merge <part> <unit> <lang> <sidecar.json>` writes the meanings; it refuses if a key is missing or the verse text changed.

Work ONE adhyaya at a time: show it, write its sidecar JSON `{ "<key>": "<meaning>", … }` for EVERY key
(speaker lines like "वैशंपायन उवाच" included: "Vaishampayana said:" / "वैशम्पायन बोले—"), merge, next.
Sidecars go in your own folder in the scratchpad (given in your brief), never in the repo.

## English (Sonnet), lang `en`
- A faithful, plain English rendering of each shloka in your own words — not a copy or close paraphrase of
  any published translation (Ganguli, van Buitenen, Debroy, Gita Press are not to be reproduced).
- Keep who speaks to whom clear (Vaishampayana to Janamejaya, Sanjaya to Dhritarashtra, Bhishma to
  Yudhishthira, inner narrators); name people rather than "he" where the shloka's epithet would confuse
  ("the son of Pritha, Arjuna"); keep lists and numbers exact; one or two sentences per shloka.
- No Devanagari in English. Plain spelling without diacritics (Yudhishthira, Krishna, Dhritarashtra).
- Vocatives addressed to the listener (कौन्तेय, भारत, राजन्, तात) are not the subject: write "O son of Kunti"
  at the start or end, never beside a noun as if describing it ("the mother, Kunti's son, gave" is wrong).

## Hindi (Haiku), lang `hi`
- Translate the English meaning into natural, simple modern Hindi, reading the Sanskrit alongside so names,
  epithets and terms are right (देवव्रत, कुन्तीपुत्र, धर्म, क्षत्रिय …). Keep the same sense and length; add
  nothing, leave nothing out. Devanagari only (no Latin letters). Use `show <part> <unit> --en`.
- An address to the listener ("O son of Kunti", "Bharata", "king") stays an address: "हे कुन्तीपुत्र, …".
  Never make it the doer with ने ("माता कुन्तीपुत्र ने" is wrong).

## After your chunk
Run `python3 -I tools/builders/mahabharata/meanings/mbm.py status` (the coordinator runs the full build).
Don't touch any other file; no git commands that change state; no prettier. Report: units done, verses,
anything unclear.
