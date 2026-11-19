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

## Kannada (Haiku), lang `kn`
- Translate the English meaning into clear, natural modern Kannada prose (the register of the app's Ramayana
  meanings: "ಅಲ್ಲಿ ಅವನು ಅಣ್ಣನೊಡನೆ ವಾಸಿಸಿದನು; ಮಾವ ಅಶ್ವಪತಿಯು ಸತ್ಕರಿಸಿ …"). Same sense and length; add nothing,
  leave nothing out. Kannada script only: no Latin letters, no Devanagari (। ॥ allowed but not needed).
- Names in their usual Kannada forms with case endings: ಯುಧಿಷ್ಠಿರ, ಭೀಮಸೇನ, ಅರ್ಜುನ, ದ್ರೌಪದಿ, ಧೃತರಾಷ್ಟ್ರ, ದುರ್ಯೋಧನ,
  ಕೃಷ್ಣ, ಭೀಷ್ಮ, ದ್ರೋಣ, ಕರ್ಣ, ವೈಶಂಪಾಯನ, ಜನಮೇಜಯ, ಸಂಜಯ; the Kauravas are ಕೌರವರು, the Pandavas ಪಾಂಡವರು.
  "X said:" is "X ಹೇಳಿದನು:" (ಹೇಳಿದಳು for a woman). An address stays an address: "ಕುಂತೀಪುತ್ರನೇ, …", "ರಾಜನೇ, …".
- Use `show <part> <unit> --en`; read the Sanskrit alongside for names and terms, but follow the English for sense.
- An epithet beside a name is the same person: "the great-souled Karna, son of Kunti" is "ಕುಂತೀಪುತ್ರ ಮಹಾತ್ಮ ಕರ್ಣನನ್ನು",
  never two people joined with ಊ ("ಕರ್ಣನನ್ನೂ … ಕುಂತಿಪುತ್ರನನ್ನೂ" is wrong).

## Telugu (Haiku), lang `te`
- Translate the English meaning into clear, natural modern Telugu prose (the register of the app's Ramayana
  meanings: "అక్కడ అతడు అన్నతో కలిసి నివసించాడు; మేనమామ అశ్వపతి అతనిని సత్కరించి …"). Same sense and length;
  add nothing, leave nothing out. Telugu script only: no Latin letters, no Devanagari.
- Names in their usual Telugu forms: యుధిష్ఠిరుడు, భీమసేనుడు, అర్జునుడు, ద్రౌపది, ధృతరాష్ట్రుడు, దుర్యోధనుడు,
  కృష్ణుడు, భీష్ముడు, ద్రోణుడు, కర్ణుడు, వైశంపాయనుడు, జనమేజయుడు, సంజయుడు; the Kauravas are కౌరవులు, the
  Pandavas పాండవులు. "X said:" is "X ఇలా అన్నాడు:" (అన్నది for a woman). An address stays an address:
  "కుంతీపుత్రా, …", "రాజా, …".
- Use `show <part> <unit> --en`; read the Sanskrit alongside for names and terms, but follow the English for sense.
- An epithet beside a name is the same person: "the great-souled Karna, son of Kunti" is "కుంతీపుత్రుడైన మహాత్ముడు కర్ణుని",
  never two people joined with ను ("కర్ణుని, కుంతీపుత్రుని" as two is wrong).

## After your chunk
Run `python3 -I tools/builders/mahabharata/meanings/mbm.py status` (the coordinator runs the full build).
Don't touch any other file; no git commands that change state; no prettier. Report: units done, verses,
anything unclear.
