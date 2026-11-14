# Harikathāmṛtasāra, sandhis 3–32: draft for proofreading

The app currently has sandhis 1–2. For sandhis 3–32, this folder holds a
**draft** that is not shown in the app.

`draft-sandhis-3-32.json` has an entry for every verse. Each entry gives:

- the verse as reconstructed from the Bemmatti Venkateshachar mūla edition
  (archive.org: `harikathamrutasara-mula-bemmatti-venkateshachar`), with
  lines re-split by mātrā count;
- the readings of the 1925 edition (`HarikathaamrutaSaaravu_-_JagannathaDaasaru`)
  and the 1930 DLI edition (`in.ernet.dli.2015.362896`), plus kn.wikisource
  for sandhis 3–12;
- a status flag. About 25–40% of verses per sandhi were confirmed line by line
  by an independent copy; the rest are marked for review.

All three printed sources are OCR, and they share the same OCR misreadings
(aspirates, vowel length). The flagged verses therefore need checking against
a printed copy, preferably the Bemmatti edition.

`hks_build.py` is the script that produced the draft. Its paths point to the
original working folder and need adjusting before reuse.

**To finish the text:** go through the flagged verses with a printed copy,
then add the confirmed sandhis to `src/data/texts/harikathamrutasara.ts` in
the same format as sandhis 1–2.
