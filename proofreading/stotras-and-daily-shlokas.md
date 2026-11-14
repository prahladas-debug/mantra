# Stotras collation log (reviewer: stotras), Nov 2026

Files: venkatesha-stotram, mahalakshmi-ashtakam, lingashtakam, shiva-panchakshara,
madhurashtakam, achyutashtakam, ganesha-pancharatnam, krishna-ashtottara-shatanama,
daily-shlokas (all in src/data/texts/). Witness copies saved under
scratchpad/review/st-*/.

## Witnesses

| Tag | Source |
| --- | --- |
| STN | stotranidhi.com (/hi/…-in-sanskrit/ pages; typed Devanagari, from the printed *Prabhāta Stotranidhi*) |
| RAO | raocollectionsstotra.blogspot.com (Kannada + Devanagari) |
| WS | sa.wikisource.org, anonymous typed pages (लिङ्गाष्टकम्, मधुराष्टकम्, अच्युताष्टकम्, गणेशपञ्चरत्नम्, वेङ्कटेशस्तोत्रम्, श्रीमहालक्ष्म्यष्टकम्, श्रीशिवपञ्चाक्षरस्तोत्रम्) |
| WS1910 | sa.wikisource proofread transcription of a printed book: *Śaṅkarācāryaviracitāni stotrāṇi* (1910) |
| BSR | sa.wikisource proofread transcription of *Bṛhatstotraratnākara* (1953) |
| SHL | shlokam.org (many typos) |
| SS | stotrasamhita/stotra-sangrahah (GitHub), KrishnaAshtottaraShatanamaStotram.tex etc. |
| BP | vishvAsa/purANam (GitHub), brahmANDa-purANam 2.36 (the Purāṇa chapter containing the stotra) |
| KK | kamakoti.org, Brahmāṇḍa Purāṇa ch. 17 summary (romanised transliteration of the stotra) |
| DRIK | drikpanchang.com (checked by WebFetch questions only; blocks curl) |
| WL | wisdomlib.org, Kṛṣṇa aṣṭottara-śata nāmāvalī |
| BPS | vishvAsa/mAdhvam, *Bhaṭṭaḍa Prājña Saṅgraha* (Madhva daily-prayer compendium) |
| BALA | sanskrit/raw_etexts, bāla-ślokāḥ |
| GP | sanskrit/raw_etexts, Gita Press nitya-stuti |

## Changes

### Liṅgāṣṭakam (2)
- v3 सर्वसुगन्धिसुलेपित → **सर्वसुगन्धसुलेपित** (STN, RAO, WS all agree).
- v7 अष्टदरिद्रविनाशित → **अष्टदरिद्रविनाशन** (STN, WS; RAO विनाशक). Ours meant "destroyed", which was wrong.

### Śiva Pañcākṣara (1)
- v2 मन्दारपुष्पबहुपुष्प° → **मन्दारमुख्यबहुपुष्प°** (WS1910, BSR, STN; RAO and WS have पुष्प). English meaning reworded ("many flowers, the mandāra foremost among them").

### Madhurāṣṭakam (1)
- v5 रमणं → **स्मरणं** (STN, RAO; WS has रमणं). Meaning updated in en and kn ("remembering Him is sweet").

### Acyutāṣṭakam (4)
- v5 °पुण्यताकारणः → **°पुण्यताकारणम्** (WS1910, STN; RAO has °कारणः). Meaning unchanged.
- v6 धेनुकारिष्टकानिष्टकृद्द्वेषिहा → **धेनुकारिष्टहानिष्टकृद्द्वेषिणां** (WS1910, STN; RAO and WS have धेनुकारिष्टकोऽनिष्टकृद्द्वेषिणां; every witness ends °द्वेषिणां). Meaning updated in en and kn ("slayer of Dhenuka and Ariṣṭa, bane of those who hate").
- v7 विद्युदुद्द्योत° → **विद्युदुद्योत°** (WS1910, STN, RAO). Spelling only.
- v9 कर्तृविश्वम्भरस्तस्य → **वेद्यविश्वम्भरं तस्य** (WS1910, STN; RAO has ours). Meaning updated in en and kn ("which makes known the Sustainer of the universe").
- Sragviṇī scan: all 36 pādas are GLG GLG GLG GL(G/L) (the final syllable is anceps).

### Nitya ślokas (1)
- Śubhaṃ karoti: धनसम्पदा → **धनसम्पदः** (BPS, STN slokas-for-kids). Meaning unchanged.

### Kṛṣṇa Aṣṭottara-śatanāma: completed (additions, plus one meaning)
- Collation of the 21 name-verses: SS agrees with ours word for word, except v19 परब्रह्म (ours, STN and BP read परं ब्रह्म, so ours is kept). No change to the names.
- **Added Pūrva-bhāga** (new section, vv. 1–5, starting श्रीशेष उवाच / वसुन्धरे वरारोहे…, ending नाम्नामष्टोत्तरशतस्याहमेव ऋषिः प्रिये…). SS and BP agree on these verses; KK has vv. 2b–5. Spelling त्रिरावृत्त्या / एकावृत्त्या follows BP, where SS has °वृत्या. Speaker line: SS श्रीशेष उवाच, BP शेष उवाच.
- **Added Phala-śruti** (vv. 22–30, कृष्णेन कृष्णभक्तेन… to …कृष्णसायुज्यमाप्नुयात्). SS, BP and KK agree on every verse, except:
  - v25 धनावहं: SS and KK; BP has धनवाहं.
  - v28 ज्ञानमुद्राय: SS, BP and STN; KK's "jñānasamudrāya" does not scan.
  - v30b निषेव्य भोगानन्तेऽपि कृष्णसायुज्यमाप्नुयात्: BP. SS has the same with the typo आप्युनात्. KK lacks this half. STN has निर्विश्य … आप्नुनात् (typo).
- Not adopted: STN's shorter five-verse phala-śruti, which it attributes to the Nārada Pañcarātra (कृष्णनामामृतं नाम परमानन्दकारकम्, समस्तकामदं सद्यः…). It is a single witness, and the madhwasakha.com PDF is a copy of it.
- Not added: the dhyāna verse शिखिमुकुटविशेषं… (SS only).
- **v12: reading settled, meaning added.**
  - कुब्जाकृष्णाम्बरधरो is the reading of STN, SS, DRIK and WL, so it is kept.
  - BP itself (2.36.33) and KK read **कुब्जाकृष्टाम्बरधरो**, "whose garment was drawn by Kubjā". WL also notes kṛṣṭāmbara as a variant. This reading explains the name: in Bhāgavata 10.42.10 Kubjā, after being made straight, catches the end of His upper cloth (उत्तरीयान्तमाकृष्य).
  - The meaning added follows that sense ("who wore the garment that Kubjā caught hold of") and mentions the Purāṇa's reading. कृष्णाम्बर is very probably a corruption of कृष्टाम्बर. Changing the text to कृष्ट is left to the editor.
- `completeness` changed to 'complete' and `contentNote` rewritten. `source` changed to Brahmāṇḍa Purāṇa (Upodghāta-pāda 36), still mentioning the Nārada Pañcarātra attribution.
- Meanings were written for all 14 added verses. Lower-confidence ones:
  - v22: who the "Kṛṣṇa, devotee of Kṛṣṇa" is (Arjuna or Vyāsa?); the meaning is left neutral.
  - v27b: जपादिकरमात्मनाम्.

### Header comments
Each of the nine files now names the witnesses it was collated with and says it is still to be checked against a printed edition.

## Checked, no change needed
- **Veṅkaṭeśa Stotram.** STN agrees exactly. SHL and WS differences are typos, apart from the variant below. Metre is correct: vv. 1–8 toṭaka (LLG×4), vv. 9–10 bhujaṅgaprayāta (LGG×4), v. 11 anuṣṭubh.
- **Mahālakṣmī Aṣṭakam.** STN, RAO and WS agree with ours apart from the variants below.
- **Gaṇeśa Pañcaratnam.** Identical to WS1910. All 24 pādas scan as pañcacāmara (LG×8).
- **Nitya ślokas, unchanged prayers:**
  - Samudravasane: STN, BALA, BPS.
  - Śuklāmbaradharam: SS, BPS.
  - Vakratuṇḍa: STN, SS.
  - Sarasvati namastubhyam: SS.
  - Gururbrahmā: SS. STN's गुरुर्ब्रह्म / परब्रह्म are typos.
  - Brahmārpaṇam and Ahaṃ vaiśvānaraḥ: STN and the Gītā.
  - Annapūrṇe and Mātā ca pārvatī: STN; SS has the second.
  - Karacaraṇa: STN.
  - Rāmaṃ skandam: BALA, with दुःस्वप्नस्तस्य.
  - Tvameva mātā: GP.
  - Dīpajyotiḥ parabrahma: BPS, exactly.

## Variants kept (sources disagree)
- **Veṅkaṭeśa** v5: प्रतिवल्लविका (ours, STN, RAO) or प्रतिपल्लविका (WS, SHL).
- **Mahālakṣmī:**
  - v6 महाशक्ति (ours, RAO, WS) or महाशक्ते (STN).
  - v10 एककाले (ours, RAO, WS) or एककालं (STN).
  - v4: RAO has a second copy reading मन्त्रपूते.
- **Liṅgāṣṭakam:**
  - v2 कामदहं (ours, STN) or कामदहन (RAO, WS).
  - v8 order सुरगुरुसुरवर (ours, STN, WS) or सुरवरसुरगुरु (RAO).
  - STN gives परमपदं as an alternative in v8.
- **Śiva Pañcākṣara:**
  - v1 त्रिलोचनाय (ours, STN, RAO, WS) or विलोचनाय (WS1910, BSR). विलोचनाय scans as a correct indravajrā (त्रि makes the 6th syllable heavy), so the printed reading may be the original. Kept because the witnesses split.
  - v2 pāda 4: WS1910 alone has मकारमहिताय.
  - v3 वृन्द / बृन्द is a spelling difference.
  - The phala-śruti is in BSR and RAO; WS1910 and STN lack it.
- **Madhurāṣṭakam:**
  - v2: WS reverses the order of वचनं / वसनं.
  - v7: WS reads राधा मधुरा मिलनं मधुरम्; STN and RAO agree with ours.
- **Acyutāṣṭakam:**
  - v2 नन्दजं (ours, WS1910, STN) or नन्दनं (RAO, WS).
  - v3 रुक्मिणी / रुक्मणी (WS1910).
- **Gaṇeśa Pañcaratnam:**
  - v1 लोकरक्षकम् (ours, WS1910, STN, WS) or लोकरञ्जकम् (BSR, RAO).
  - v6 समाहितायुः or समीहितायुः (WS).
- **Kṛṣṇa 108:**
  - v2 °शङ्खाम्बुजायुधः (ours, SS, DRIK, WL) or °शङ्खाद्युदायुधः (STN, BP).
  - v6 योगिनां पतिः (ours, STN, SS, WL) or गोविदां पतिः (BP, KK).
  - v11 मथुरा° (ours, SS, DRIK, WL, BP) or मधुरा° (STN).
  - v14 कर्षकः (ours, SS, DRIK, BP) or कर्शकः (STN, WL).
  - v16 विष्णुः (ours, SS, DRIK, WL, BP) or जिष्णुः (STN).
  - v12: see above.
  - Viniyoga: SS has the fuller …श्रीकृष्णाष्टोत्तरशतनामजपे विनियोगः (single source, not adopted).
  - BP (and DRIK) is a different recension of several names: वत्सपालनसञ्चारी, नवनीतलवाहारी, बकारिर्बाणबाहुकृत्, वेणुवाद्यविशारदः, etc. The popular recitation text, which ours follows, was kept.
- **Nitya ślokas:**
  - Karāgre करमूले तु गोविन्दः (ours, BPS) or करमूले स्थिता गौरी (STN, BALA). Already noted in the meaning.
  - Kāyena vācā बुद्ध्यात्मना वा प्रकृतेः स्वभावात् (ours, widely attested) or बुद्ध्यात्मना वानुसृतस्वभावात् (BPS; the Bhāgavata reading).
  - Śubhaṃ karoti: STN's nitya page has a different wording (करोतु … सुखसम्पदम् … विनाशं च).
  - Rāmaṃ skandam दुःस्वप्नस्तस्य (ours, BALA) or दुःस्वप्नं तस्य (STN).

## Checks
- `npm test`: 1 ERROR, in lalitha-sahasranama ("summaryKn must be Kannada"). That file is not one of mine. There are no errors or warnings in my nine texts.
- `npx tsc --noEmit`: clean.
- `eslint` on the nine files: clean.
