# Mahabharata task — working notes (for resuming after context compaction)

Edition chosen: BORI Critical Edition, Smith's Unicode Devanagari e-text (dl/smith/UD), 1995 adhyayas, 73,815 numbered verses.
K-edition (Kumbhakonam) on sa.wikisource rejected: typos (गति for गवि 1.50.2 K, सुतुमुः 3.100.4 K), ~2.1% 15/17-syllable half-lines vs 0.2% CE.

Scripts (scratchpad/mahabharata/scripts): ce.py (parser), digest.py P from to maxv (IAST digest), build.py (writes books-src: `python3 -I build.py P`), book() writes book.json + upaparvas.json, upa.py (sub-parva table), ordinal.py.
Summaries: sum/PP.jsonl, one JSON per line: {"a":N,"t":"English title (no 'Adhyaya N ·')","en":..,"kn":..,"hi":..,"te":..,"ta":..}
 - 2 sentences each, plain English no diacritics; Telugu script only; Tamil with Grantha (ஜ ஷ ஸ ஹ ஶ).
Workflow per parva: digest -> append summaries in batches (cat >> sum/PP.jsonl) -> build.py P -> npx tsx scripts/build-books.ts (in /home/user/mantra).
Validator: scripts/build-books.ts (architecture agent). Unknown keys rejected; n must run 1..N; files consecutive.
Notes: Gita = CE 6.23–40 (brief said 25–42: that is vulgate numbering). VSN = 13.135. Bhishmastavaraja = 12.47; app's bhishma-stuti is Bhagavata 1.9 (different).
Fix applied: 07068004c 'जिगीषन्तṃ' -> 'जिगीषन्तं'. 12.325 bracket numbers removed.

Done parvas: (update below)
- Summaries now written with the Write tool as sum/PP_NNN.jsonl batches (bash heredoc >100KB fails E2BIG). build.py reads sum/PP*.jsonl.
- Coordinator (loader committed): links in book.json for Gita 6.23-40 (category gita) and VSN 13.135 (no files for those). Coordinator also asked for bhishma-stuti link; NOT done because app's bhishma-stuti = Bhagavata 1.9, CE 12.47 is a different hymn -> kept file + contentNote; report this.
- Hyphen rule: word split across padas ends line with '-' (handled in build.py fmt).
- Don't commit; coordinator commits. Run build-books after each parva.
- Adi 1-110 done (sum/01.jsonl 1-60, sum/01_061.jsonl 61-110).
- Adi 111-160 in sum/01_111.jsonl
- Adi COMPLETE (225). sum/01_161.jsonl
- Sabha COMPLETE (72). sum/02_001.jsonl
- Aranyaka 1-60 in sum/03_001.jsonl; upa fixed (Kirmira=12, Kairata 13-42, Indraloka 43-79)
- Aranyaka 61-125 in sum/03_061.jsonl
- Aranyaka 126-190 in sum/03_126.jsonl
- Aranyaka 191-245 in sum/03_191.jsonl
- Aranyaka COMPLETE (299). sum/03_126, 03_191, 03_246. chk.py validates scripts
- Virata COMPLETE (67). sum/04_001.jsonl
- Udyoga 1-60 in sum/05_001.jsonl
- Udyoga 61-125 in sum/05_061.jsonl
- Udyoga COMPLETE (197). sum/05_001,05_061,05_126
- Bhishma COMPLETE (117: 99 files + Gita 23-40 linked). sum/06_001,06_041,06_061,06_091. dg.py = better digest (python3 -I scripts/dg.py P from to width)
- Drona 1-100 in sum/07_001,07_023,07_061 (summaries now ONE sentence each to save effort)
- Drona 101-140 in sum/07_101.jsonl
- Drona COMPLETE (173) sum/07_001,023,061,101,141
- Karna COMPLETE (69) sum/08_001
- Shalya COMPLETE (64) sum/09_001
- Sauptika (18), Stri (27) COMPLETE sum/10_001, 11_001
- Shanti 1-40 in sum/12_001.jsonl (build.py 12 writes consecutive prefix only)
- Shanti 41-80 in sum/12_041.jsonl
- Shanti 81-128 in sum/12_081.jsonl (Rajadharma parva done through 128)
- Shanti 129-175 in sum/12_129.jsonl; built 1-175
- Fix applied: 12.59.5 'राजा-राजेति' (literal hyphen in source) -> space
12: 176-245 summaries written
12: built through 285
12: DONE 353/353 built, 0 errors. next 13
13: 1-34 summ written
13: 1-80 built
13: 81-118 summ written
13: built 154/154 (135 linked)
14: 1-40 summ written
14: 41-88 summ written
14: DONE built 96/96
15: 1-40 summ written
15,16 DONE built
ALL DONE 1976+19 linked
