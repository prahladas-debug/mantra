# Second reading of the Hindi texts (chalisas, aartis, bhajans, kathas)

Another writer collated these texts and wrote their meanings. You are the second reader. For
each text in your list, one at a time:

1. Read the header (witnesses, choices), each verse's `text`, its inline `meaning.en`, and its
   Hindi meaning in the pack named in your brief (keys "sectionIndex.verseIndex", 0-based).
2. Fix real errors only:
   - meanings: wrong speaker or addressee, reversed or wrong sense, misread word or deity name,
     lines of the verse left out, a meaning that belongs to another verse (check the keys line up
     with the verses: an off-by-one shift is the worst error), English and Hindi disagreeing,
     Hindi that only repeats the Awadhi/Braj, garbled wording;
   - text: only an evident typing slip (dropped matra, ह्र for हृ, misplaced anusvara, a stray
     danda, a repeated or missing line) that you can confirm against at least one of the
     witnesses named in the header (fetch it with `curl -sL`; WebFetch refuses lyrics). Record
     each text change in the header's list of readings. Never "improve" the poetry.
3. Don't rewrite for style. Keep the files valid TypeScript (quotes, escapes).
4. Log every change in `tools/builders/audit/<your log name>.tsv` (text id, verse key, field,
   problem, fix).
5. Finish with `npx tsx scripts/gen-index.ts && npx tsx scripts/validate-content.ts &&
   npx tsx scripts/validate-meanings.ts && npx tsc --noEmit` (0 errors) and report: texts read,
   changes by kind, doubts.
