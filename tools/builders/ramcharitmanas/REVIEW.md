# Reviewing the Ramcharitmanas meanings

You are a second pair of eyes on meanings another writer produced. For each unit in your range,
one unit at a time (print one unit's verses with a short script; don't load many at once):

1. Read each verse's Awadhi `text`, then its `meaning.en` and `meaning.hi`.
2. Fix only real errors, in the meaning fields only (never the verse `text`):
   - wrong speaker or addressee (Tulsidas shifts narrators: Shiva to Parvati, Kakbhushundi to
     Garuda, Yajnavalkya to Bharadvaja; inside the story, check who is speaking from the lines);
   - reversed or wrong sense, a misread word or name, a wrong identification of a person;
   - lines of the group left out of the meaning, or meaning that belongs to another verse;
   - English and Hindi that disagree with each other;
   - Hindi that only repeats the Awadhi instead of explaining it; broken or garbled Hindi.
   Don't rewrite for style; don't add commentary.
3. Edit with a script that changes nothing but the meaning fields (json.dump with
   ensure_ascii=False, indent=2, trailing newline), and check each verse's `n` and `text` still
   equal `git show HEAD:<path>`.
4. Log every change in `tools/builders/ramcharitmanas/review/<part folder>.tsv` (create it if
   needed; columns: unit, doha, field, problem, fix — short). If several reviewers share a part
   folder, use `<part folder>-<your first unit>.tsv` to avoid clashes.
5. Finally run `npx tsx scripts/build-books.ts` (0 errors) and report: verses read, changes made
   by kind, and anything you're unsure of.
