# Vedic texts collation log (reviewer "vedic", Nov 2026)

Files edited (all in src/data/texts/): purusha-sukta.ts, sri-sukta.ts, narayana-sukta.ts,
mantra-pushpam.ts, shanti-mantras.ts, gayatri.ts, mahamrityunjaya.ts,
raghavendra-stotram.ts, shodashopachara-puja.ts. Each now has a header comment naming its sources.

Witness copies are saved under scratchpad/review/ (directory names below).

## Sources

| Text | Witnesses |
| --- | --- |
| Sri Sukta | stotranidhi.com (`sri-stotranidhi`); sa.wikisource.org श्रीसूक्तम् (two texts: main and अन्यः पाठः) and श्री सूक्तम् (`sri-wikisource`); vishvAsa/vedAH_Rk khila 2.6 with critical apparatus (`sri-vishvasa`); GitHub copies devendrapp, vedya12, anvaybk, satishghanekar (`sri-gh-*`, `sri-ghanekar`) |
| Purusha Sukta | stotranidhi.com (`purusha-suktam-stotranidhi`); hindupad.com Kannada (`purusha-hindupad`) |
| Narayana Sukta | stotranidhi.com Nārāyaṇa Sūktam page and the Nārāyaṇa Sūktam inside its Mantra Puṣpam page; hindupad.com Kannada; MNU text in vishvAsa/AgamaH_vaiShNavaH (same text as cahcblr/sanchaya and raw_etexts, all derived from sanskritdocuments, so counted as one) |
| Mantra Pushpam | stotranidhi.com; hindupad.com Kannada; MNU (vishvAsa) for ईशानः, ऋतं सत्यं, ॐ तद्ब्रह्म |
| Shanti Mantras | Advaita Śāradā mūla texts (sanskrit/raw_etexts: Taittirīya, Kāṭhaka, Aitareya, Īśa, Muṇḍaka…); e-Bhāratī daśopaniṣad texts (Kaṭha, Aitareya, Īśa); Taittirīya Āraṇyaka e-text (raw_etexts) for भद्रं कर्णेभिः |
| Gayatri | MNU (vishvAsa); stotranidhi pūjā pages |
| Mahamrityunjaya | MNU (vishvAsa); Jagannātha pūjā (raw_etexts kalpaH) |
| Raghavendra Stotram | stotranidhi.com (`sri-raghavendra-stotram-stotranidhi`); raocollectionsstotra.blogspot.com, which has a Devanagari copy and two Kannada copies, one plain and one with headings (`rag-rao`: dev.txt, kn1.txt, kn2.txt) |
| Shodashopachara Puja | Gita Press Satyanārāyaṇa vrata (raw_etexts misc-gp); stotranidhi Kṛṣṇa / Rāma / Veṅkaṭeśa pūjā-vidhānas; daithal/saswara-rigveda Viṣṇu pañcāyatana; stotrasamhita (Sūrya, Go pūjā); kaustubhk24/sangrah (Mahālakṣmī-Gaurī, Śiva pūjā); aupasana/prayoga (Varalakṣmī, Caturthī); Agni Purāṇa 206 (vishvAsa); Mādhva Sadācāra (raw_etexts); Jagannātha pūjā |

## Changes

### Sri Sukta: 21 verses added (16–36); completeness partial → complete
Added the phala-śruti and supplementary verses in the order of the widely printed 36-verse text:
Wikisource अन्यः पाठः, devendrapp and vedya12 have exactly this order, and stotranidhi and Ghanekar
agree apart from the extra or missing verses noted below. Readings were chosen by majority of the
witnesses:
- 16 सूक्तं पञ्चदशर्चं: Wikisource ×3, devendrapp, vedya12, vishvAsa. Variant श्रियः पञ्चदशर्चं: stotranidhi, Ghanekar.
- 17 पद्म ऊरू पद्माक्षी … त्वं मां भजस्व पद्माक्षी: stotranidhi, devendrapp, Ghanekar. Wikisource has पद्माक्षि; one Wikisource text and vishvAsa have तन्मे भजसि.
- 18 अश्वदायि गोदायि धनदायि: Wikisource-other, devendrapp, vedya12. Variants °दायी (stotranidhi, Ghanekar) and °दायै (vishvAsa). Second line सर्वकामांश्च देहि मे: majority; stotranidhi has सर्वकामार्थसिद्धये.
- 19 पुत्रपौत्र-धनं (written as a compound) … करोतु माम्: majority.
- 20 धनमश्नुते: majority. vishvAsa records the variants उत्सृजे, अस्तु मे and अश्विना.
- 30 त्रिणेत्रां: stotranidhi, devendrapp, vedya12, Ghanekar; त्रिनेत्रां in Wikisource and vishvAsa. जगदीश्वरीं ताम्: stotranidhi, Ghanekar, vishvAsa. त्वाम्: Wikisource-other, devendrapp, vedya12. This was a 3–3 split; I chose ताम्.
- 31 सर्वार्थसाधिके देवि: stotranidhi, devendrapp, vedya12. vishvAsa has गौरि.
- 33 विष्णोः प्रियसखीं: Wikisource-other, devendrapp, vedya12, Ghanekar. Variant लक्ष्मीं प्रियसखीं: Wikisource A and B, vishvAsa.
- 34 महालक्ष्मी च विद्महे विष्णुपत्नी च धीमहि: Wikisource A and B, vishvAsa, devendrapp, vedya12, Ghanekar, anvaybk. Variants: महादेव्यै … (stotranidhi) and महालक्ष्म्यै … विष्णुपत्न्यै (Wikisource-other).
- 35 श्रीवर्चस्यम् … आविधात् पवमानं … धनं धान्यं: Wikisource-other, devendrapp, vedya12, Ghanekar. Variants: श्रीवर्चस्वम्, शोभमानं / शुभमानं, धान्यं धनं.
- 25/26 and 27/28 split the sragdharā and śārdūla ślokas at the half-verse, as all the numbered witnesses do.
- Not added: आनन्दः कर्दमः श्रीदश्चिक्लीत… and चन्द्राभां लक्ष्मीमीशानां… (stotranidhi and Ghanekar only, worded differently); the closing ॐ महादेव्यै च विद्महे… repeat; श्रिये जात… (Ghanekar only).
- Ṛks 1–15: no change. In ṛk 3, stotranidhi reads श्रीर्मा देवीर्जुषताम्; ours (श्रीर्मा देवी जुषताम्) agrees with the other four witnesses.
- contentNote rewritten. Meanings (en, kn) written for all 21 new verses.

### Purusha Sukta: 1 correction
- v7 त्रिस्सप्त → त्रिः सप्त (stotranidhi, hindupad). Sandhi spelling only.
- Kept: v6 इध्मश्शरद् (stotranidhi has इध्मः शरद्, hindupad has इध्मश्शरद्); TA notations such as ज्यायांश्च / पशूंस्तांश्च (sources write ग्ं); दशाङ्गुलम् (hindupad has ळ). hindupad typos (विष्वण्, कतिथा) ignored.
- Numbering: Uttara-Nārāyaṇa still restarts at 1. Only stotranidhi numbers it 19–24; hindupad has no numbers, so the two sources do not clearly agree.

### Narayana Sukta: 1 correction
- v8 शिराभिस्तु → सिराभिस्तु (stotranidhi's Mantra Puṣpam page, MNU). The sense ("veins, channels") is unchanged. Variant शिलाभिस्तु is in stotranidhi's Nārāyaṇa Sūktam page and hindupad.
- Kept: v10 व्यवस्थिता (MNU and stotranidhi's Mantra Puṣpam page; व्यवस्थितः in stotranidhi's Nārāyaṇa Sūktam page and hindupad). v12 स ब्रह्म स शिवः स हरिः (chant texts; MNU has स ब्रह्मा). v1 परमं पदम् (chant texts; MNU has प्रभुम्).

### Mantra Pushpam: 3 passages added; completeness partial → complete
- Added ईशानः सर्वविद्यानाम्…, तद्विष्णोः परमं पदम्… (Ṛgveda 1.22.20–21) and ऋतं सत्यं परं ब्रह्म…, placed between अन्तश्चरति… and the Nārāyaṇa Gāyatrī. stotranidhi and hindupad both have them there, and the stotranidhi text matches ours exactly. Meanings added; the ऋतं सत्यं meaning reuses the Nārāyaṇa Sūktam v13 meaning.
- ॐ स्वस्ति साम्राज्यं… and विश्वतश्चक्षुः… are in neither South Indian witness, so they were not added. स्वस्ति साम्राज्यं belongs to the Maharashtrian mantrapuṣpāñjali. contentNote rewritten.
- Existing text: no differences except notation.

### Shanti Mantras: 1 correction
- Vāṅ me manasi: आविराविर्म एधि → आविरावीर्म एधि (Advaita Śāradā Aitareya, e-Bhāratī Aitareya).
- Kept the pausa forms at the dandas: प्रतिष्ठितम् । आविः, प्रहासीः । अनेन, सन्दधामि । ऋतं, तद्वक्तारमवतु । अवतु, निराकरोत् । अनिराकरणम्. The sources write these in continuous sandhi (प्रहासीरनेन, सन्दधाम्यृतं, अवत्ववतु, निराकरोदनिराकरणम्). Also kept अहोरात्रान्सन्दधामि (sources: °रात्रान्त्सन्दधामि, an optional t).
- The other mantras match.

### Gayatri, Mahamrityunjaya: no changes (header comment only)

### Raghavendra Stotram: no word changes; verses regrouped and renumbered from 15 on (33 → 32)
- Old 15 (two lines) and the first line of old 16 now form one three-line śloka, 15. All four witnesses agree.
- 16 ॐ श्रीराघवेन्द्राय…+जपिताद्; 17 हन्तु नः…+सर्वानपि; 18 इति कालत्रये…+इहामुत्र; 19 अगम्यमहिमा…+श्रीमध्वमत…: all four witnesses agree.
- 20 सर्वयात्रा…+करोमि…+शिरसा… (three lines); 21 सर्वाभीष्टार्थ…+तव सङ्कीर्तनं…: the rao Devanagari and both rao Kannada copies. stotranidhi uses plain couplets here.
- Old 23–33 → 22–32. The phala-śruti grouping (three-line 26 and 27) was already as in the rao copies.
- Meanings for 15–21 regrouped to match.
- Readings kept against single witnesses or spelling variants: मूकत्व (sources मूकत्त्व), दत्त्वा/हत्वा, यतिराड् (sources यतिराट्), वृन्दावन (stotranidhi बृन्दावन), वाक्पतिः (rao वाग्पतिः), दीपसंयोजनाज्ज्ञानं (rao °नाज्ञानं), अप्पणाभिधैः (two sources °अभिदैः), मा मग्नरूपं (Kannada copy with headings मां), तस्यासुखं (Kannada copy with headings तस्याशुभं), पुण्यं (Kannada copy with headings दिव्यं), सर्वाभीष्टप्रवृद्धिः (Kannada copy with headings °अर्थसिद्धिः).

### Shodashopachara Puja: 1 correction
- Dīpa: त्रैलोक्यतिमिरापह → त्रैलोक्यतिमिरापहम् (Gita Press, kaustubhk24, stotranidhi and aupasana agree). The meaning (en, kn) now makes "dispeller of darkness" qualify the lamp.
- Checked and kept:
  - Dhūpa: matches Gita Press, daithal and kaustubhk24.
  - Tāmbūla पूगीफलसमायुक्तं … कर्पूरचूर्णसंयुक्तं: matches stotrasamhita and aupasana. Gita Press and kaustubhk24 have पूगीफलं महद्दिव्यं … एला°.
  - Pradakṣiṇā तानि तानि विनश्यन्ति: matches stotrasamhita and daithal. Gita Press has तानि सर्वाणि नश्यन्तु; stotranidhi has प्रणश्यन्ति.
  - Kṣamāpaṇa मन्त्रहीनं … परिपूर्णं तदस्तु मे: matches Gita Press, daithal and kaustubhk24. stotranidhi has तदस्तु ते.
  - अपराधसहस्राणि … दासोऽयमिति मां मत्वा: matches stotranidhi.
  - Kalaśa मूले तत्र: matches daithal and kaustubhk24.
  - Ghaṇṭā कुर्वे घण्टारवं: matches daithal. Sadācāra has कुरु.
  - Namaskāra: matches Gita Press.
  - Samarpaṇa बुद्ध्यात्मना वा प्रकृतेः स्वभावात् … करोमि … समर्पयामि: matches stotrasamhita. Gita Press has the Bhāgavata form.
- Variants noted and kept because the sources split:
  - Naivedya भक्तिं मे ह्यचलां कुरु … परत्र च परां गतिम्. stotranidhi and kaustubhk24 have मे अचलां … इहत्र च. Agni Purāṇa 206 supports ह्यचलां and परत्र च.
  - Kalaśa कलशाम्बु समाश्रिताः (daithal, Ādi Śaṅkara pūjā-vidhi) against कलशं तु (Gita Press, kaustubhk24).
  - आवाहनं न जानामि … पूजां चैव न जानामि क्षमस्व परमेश्वर (Jagannātha pūjā has क्षम्यतां परमेश्वर) against पूजाविधिं न जानामि क्षमस्व पुरुषोत्तम (stotranidhi, kaustubhk24).

## Uncertain / for a printed edition
- Sri Sukta 16–36: many independent-looking web copies descend from one text. Checking against a printed edition (e.g. Vidyabharati or a Smārta/Mādhva nitya-pārāyaṇa book) is advisable. Meanings of lower confidence: 21 (वैनतेय सोमं पिब), 23 (विभावरि), 35 (आविधात् पवमानं महीयते).
- Sri Sukta 30 ताम्/त्वाम् is an even split.
- Narayana Sukta 8: सिरा/शिला; 10: व्यवस्थिता/°तः.
- Raghavendra numbering 20–31 follows the rao copies; stotranidhi numbers these differently.
- Puja ślokas differ widely by family tradition. The kept readings are each attested, but none comes from a Karnataka Mādhva pūjā-vidhāna.

Checks: `npm test` gives 1 error, in lalitha-sahasranama (summaryKn), which is not one of my files. My texts give no errors or warnings. `npx tsc --noEmit` passes.
