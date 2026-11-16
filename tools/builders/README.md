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
