# Content builders

Scripts that generated some long texts in `src/data/texts/` (the files say "GENERATED" in their
header). Their verse meanings in hi/te/ta are positional in the meaning packs, so edit the data
here and re-run the builder rather than editing the generated file by hand.

- `homa-chandika-pavamana/`: chandika-homa.ts and pavamana-homa.ts and their homa-2 packs.
  Run: `npx tsx tools/builders/homa-chandika-pavamana/build.ts tools/builders/homa-chandika-pavamana`
- `homa-purvanga-ganapati-sudarshana/`: homa-purvanga.ts, ganapati-homa.ts, sudarshana-homa.ts.
  Run: `python3 tools/builders/homa-purvanga-ganapati-sudarshana/gen.py <data_X.py> --write-packs`
- `homa-navagraha-etc/`: navagraha, mrityunjaya, lakshmi and ayushya homas (b_*.py, common.py).
Paths inside the scripts may point to the session scratchpad they were written in; adjust before use.
- `ramayana/`: the Valmiki Ramayana kandas in books-src/ramayana (tools/build.py <k> then
  tools/write.py <k>; needs the Wikisource dump and IITK/CE downloads, which are not kept here).
  `logs/log_<k>.tsv` lists every reading changed against the base, with its witness; lines marked
  CHECK in log_2.tsv (Ayodhya 48–88) still want proofreading. `summ/` holds the sarga summaries.
- `mahabharata/`: the Mahabharata (BORI critical edition, Smith's Devanagari e-text from GRETIL) in
  books-src/mahabharata; `scripts/ce.py` parses the e-text (download not kept here), `sum/` holds the
  adhyaya summaries per parva, PROGRESS.md the log.
