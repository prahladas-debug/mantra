# Writing the verse meanings (Ramcharitmanas)

Each agent is given a part folder and a range of unit files, e.g. `books-src/ramcharitmanas/1-bala/001.json … 006.json`.

1. Work one unit at a time. Print the unit's verses (n and text) with a short script; never load
   several units' text into one reply.
2. For every verse in the unit (numbered doha-groups and the unnumbered shlokas/sorthas/colophon)
   write `meaning: { "en": "…", "hi": "…" }`:
   - **en**: a faithful, plain English rendering of the whole doha-group in your own words (not a
     copy or close paraphrase of any published translation: Gita Press's, ramcharit.in's or anyone
     else's are copyrighted). Keep the sequence of the lines; name the speaker; explain an epithet
     once where needed (e.g. "Raghunatha, Rama"). About one sentence per two lines; a long
     group may run to 120–200 words.
   - **hi**: a plain modern-Hindi explanation (भावार्थ) of the same group in your own words, not a
     restatement in Awadhi and not copied from a published bhavarth.
   - Sanskrit shlokas: translate them; the colophon line ("इति श्रीमद्रामचरितमानसे …"): one line.
3. Write the meanings into a sidecar JSON first (`/tmp/claude-0/-home-user-mantra/b2c870d0-05a5-530a-9d9e-c4c54cb1be33/scratchpad/rcm-meanings/<part>-<NNN>.json`:
   `{ "<section index>.<verse index>": { "en": …, "hi": … } }`) and merge it into the unit with a
   script that changes nothing but the `meaning` fields (keep key order and the file's formatting:
   `json.dump(obj, f, ensure_ascii=False, indent=2)` plus a trailing newline, as the files are now).
4. After each unit, check that the text is unchanged: compare every verse's `text` and `n` with
   `git show HEAD:<path>`; then run `npx tsx scripts/build-books.ts` and fix any error in your files.
5. Rules the builder enforces: meanings only `en` and `hi` (normal modern Hindi spelling, nukta
   included, is fine in meanings); no Latin letters in hi; no Devanagari in en.
