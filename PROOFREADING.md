# Proofreading checklist

Every text in `src/data/texts/` was entered **without access to a printed
source**. Before a public store release, check each one line by line against
an authoritative edition, then:

- note the edition in the file's header comment, and
- tick it off here.

Because all scripts are generated from the Devanagari, proofreading the
Devanagari once is enough.

| Text | Status | Check especially |
| --- | --- | --- |
| Vishnu Sahasranama | Complete (193 items) | Variant readings in ślokas 13 (शाश्वतस्थाणुः), 38 (महर्द्धिर्ऋद्धो), 60, 88, 92 (नियन्ताऽनियमोऽयमः vs नियमो यमः); pūrva-bhāga 14–16 and dhyānam 7 (South Indian additions); the "ॐ नम इति" lines; the order of the uttara-bhāga. Nyāsa and pañcapūjā are omitted. |
| Vayu Stuti | **Complete** (Nakha Stuti + 41 verses), collated from 3 sources | See *Vayu Stuti collation* below. |
| Raghavendra Stotram | Complete | Verse grouping in 10–28 differs between editions. |
| Sandhya Vandane | **Partial**: common core | Missing: viniyoga, अपवित्रः पवित्रो वा, aghamarṣaṇa, prāyaścitta arghya, Gāyatrī nyāsa and udvāsana, midday upasthāna, the further upasthāna ṛks, abhivādana. Choose Ṛg/Yajur and Mādhva/Smārta wording for your audience. |
| Shodashopachara Puja | Complete | Kalaśa line 3 (कलशाम्बु vs कलशं तु). |
| Purusha Sukta | Complete | Taittirīya sandhi spellings. The Uttara-Nārāyaṇa restarts at 1; consider renumbering it 19–24. |
| Sri Sukta | **Partial**: 15 core ṛks | Ṛks 13 and 14 (पिङ्गलां / सुवर्णां are swapped in some editions); ṛk 5 शरणमहं प्रपद्ये. Later ṛks still to be added. |
| Narayana Sukta | Complete | "स हरिः" in verse 12. |
| Mantra Pushpam | **Partial** | Add ॐ स्वस्ति साम्राज्यं…, ईशानः सर्वविद्यानाम्…, and the Gāyatrīs if your tradition chants them. |
| Shanti Mantras, Gayatri, Mahamrityunjaya | Complete | — |
| Venkatesha Stotram | Complete (11 verses) | — |
| Krishna Ashtottara Shatanama | **Partial** | Phala-śruti omitted. Variants: v12 कुब्जाकृष्णाम्बरधरो, v20 तीर्थपादो. Nāmāvalī not yet added. |
| Mahalakshmi Ashtakam, Lingashtakam, Shiva Panchakshara, Madhurashtakam, Achyutashtakam, Ganesha Pancharatnam | Complete | — |
| Nitya Shlokas | Complete | Karāgre (करमूले तु गोविन्दः); companion verses were added to three of the prayers. |

## Vayu Stuti collation (Nov 2026)

The full text was rebuilt from three independent digital witnesses:

- raocollectionsstotra.blogspot.com: typed Devanagari, used as the base
- ambuda.org, *Harivayustuti with English translation*: OCR of a printed edition
- sites.google.com/site/harshalarajesh: typed ITRANS

All 172 pādas scan correctly in their metres: sragdharā for the stotra; Nakha
Stuti 1 is 2 × śārdūlavikrīḍita + 2 × sragdharā; Nakha Stuti 2 is
śārdūlavikrīḍita.

**Corrections to the base text:**

- v1 श्रीधलित → श्रीधवलित (the base text fails the metre here)
- v6 सरलः श्रीमद् → सरलश्रीमद् (a compound)
- v7 षोंऽजलि → षोऽञ्जलि
- v8 भ्रूविभ्रमः → भ्रोविभ्रमः and अभिभूर्भोक्ष्यतो → अभिभोर्भूक्ष्यतो (both follow
  the two other witnesses)
- v9 कण्ठलग्नास्थिर → कण्ठलग्नस्थिर
- v11 उद्यत्विद्युद् → उद्यद्विद्युद्, and गरिम्णा → गरिम्णां
- v21 आसेव्योद्यद् → आसेवोद्यद्
- v37 गुणगणणनिलयः → गुणगणनिलयः, and यथांऽधैः → यथान्धैः
- v41: restored the missing first line, सुब्रह्मण्याख्यसूरेः सुत इति सुभृशं
  केशवानन्दतीर्थ-

**Variant readings,** noted in the app:

- Nakha Stuti 1: नाकिवृन्दैः / भूरिभागैः
- v15: संश्लिष्टे / आश्लिष्टे
- v8: भ्रो° / भ्रू°

**Still to confirm** against a math edition: v8 (भ्रो° and अभिभोर्°),
v13 अन्धकूपे (two witnesses have आन्धकूपे).

## Bhagavad Gita collation (Nov 2026)

**Sources:**

- **Base:** the public-domain gita/gita dataset (Unlicense).
- **Cross-check only:** vedicscriptures/bhagavad-gita-data. It is GPL-3, so its
  text is not copied wholesale.

**Systematic fixes to the base** (legacy-font conversion errors):

- misplaced vowel sign after a virama (निश्िचत → निश्चित, भक्ित → भक्ति)
- श्रृ → शृ
- nukta → avagraha / ॄ

**Verse by verse,** the remaining differences were resolved against the
standard Gita Press reading:

- Took the second dataset's reading for 1.20, 1.21, 1.28, 1.34, 2.8, 2.31,
  2.33, 4.29, 5.8, 6.32, 11.21, 11.28, 11.54, 15.4, 16.1, 16.20 and 17.25.
- Kept the base where the second dataset had typos: 8.9, 8.12, 8.24, 12.2,
  12.6, 14.23, 15.17, 16.19, 17.11 and 18.68.
- Hand fixes: 9.21 एवं त्रयी, 17.23 ॐ तत्सदिति.

**Checks:**

- Every half-verse is syllable-counted (16 for anuṣṭubh, 22 for triṣṭubh). The
  only exceptions are the known irregular 11.1 and the ॐ in 17.23.
- Chapter 13 opens with Arjuna's question unnumbered, so the standard
  700-verse numbering is kept.

**Not included yet:**

- Gītā Dhyānam
- Gītā Māhātmya
- translations: those in the dataset may be under copyright

## Online cross-check (Nov 2026)

The Kannada output of Vishnu Sahasranama ślokas 12, 17, 20, 30, 57 and 106 was
compared with the Kannada text on hindupad.com:

- **Spelling conventions:** every word matched.
- **Wording:** each difference was a typo on the website (ಮಹೇಶ್ವಾಸೋ for
  महेष्वासः, ಋದ್ದಃ for ऋद्धः, ಸ್ರಷ್ಠಾ for स्रष्टा). The one genuine variant is
  सम्मितस्समः (a sandhi spelling) against सम्मितः समः.

Online copies have errors too, so use a printed edition as the final
reference.

## Suggested sources

- **Gita Press, Gorakhpur:** Vishnu Sahasranama, stotras, nitya karma.
- **TTD:** Venkatesha Stotram, and the Suprabhatam set it belongs to.
- **Uttaradi Math / Raghavendra Swamy Math / Pejawar Math:** Vayu Stuti,
  Raghavendra Stotram, Madhva sandhyāvandana.
- **Ramakrishna Math / Vidyabharati:** Vedic suktas, Taittirīya recension.

## Meanings (English + Kannada), stage 1 (Nov 2026)

These texts now have English and Kannada meanings, plus a Kannada summary:

- Daily shlokas, Shanti mantras, Gayatri, Mahamrityunjaya
- Venkatesha Stotram and the six ashtakam / pancharatnam stotras
- Purusha, Sri and Narayana Suktas, Mantra Pushpam, Krishna Ashtottara
- Vayu Stuti, Raghavendra Stotram
- Sandhya Vandane, Shodashopachara Puja

That is 322 verses in 20 texts.

The meanings are original renderings from the Sanskrit; no published
translation was used. **A fluent Kannada reader from the tradition should
review them before a store release,** especially these:

**Left without a meaning (uncertain):**

- Krishna Ashtottara v12: कुब्जाकृष्णाम्बरधरः, garment or unguent?

**Lower confidence:**

- **Vayu Stuti:**
  - v8: very dense; बभ्रुवत् and भयमभिभोर्भूक्ष्यतः are not glossed.
  - v12: the reading of the contrast.
  - v24: "only He and you can describe that battle".
  - v41: केशवानन्दतीर्थ read as Keśava and Ānandatīrtha.
- **Nakha Stuti 2:** रसो योऽष्टमः is not glossed.
- **Raghavendra Stotram:**
  - v1: the कामारि… clause is not glossed.
  - v12: स्वान्तभेदचिह्न.
  - v15: अपस्मृति / क्षय.
- **Vedic texts:**
  - Purusha Sukta 13: a sentence on the varṇas was added.
  - Uttara-Nārāyaṇa 1, 3 and 6.
  - Narayana Sukta 12: plain sense, no Dvaita gloss.
  - Sri Sukta 14: यष्टि and करिणी.
  - The third आपो हि ष्ठा ṛk and the तत्त्वा यामि Varuṇa ṛk (Sandhya).
- **Gayatri:** plain sense, Savitṛ; the Madhva reading (Nārāyaṇa within the
  Sun) is not added.
- **Madhurashtakam:**
  - v4: पीतम्, drinking or the yellow garment.
  - v5 and v7: वमितम्, शमितम्, शिष्टम्.
- **Achyutashtakam:** v5.
- **Ganesha Pancharatnam:** v1 and v4.
- **Shiva Panchakshara:** v4.

## Source review of the earlier texts (Nov 2026)

Every text first written from memory has now been collated against at least
two independent published copies. A correction was made only where two
sources agree against ours, or where ours was a clear typo or bad grammar.
Full changelogs, with the witnesses and every variant kept:

- [Vishnu Sahasranama](proofreading/vishnu-sahasranama.md): 5 corrections,
  including 33 अदृश्यो **व्यक्तरूपः** (was अव्यक्तरूपः). Still open:
  pūrva-bhāga 10 (दैवतं देवतानां / दैवतानां) and uttara-bhāga 17
  (परिकल्पते / परिकल्प्यते).
- [Stotras and daily shlokas](proofreading/stotras-and-daily-shlokas.md):
  - 9 corrections (Achyutāṣṭakam ×4, Liṅgāṣṭakam ×2, Śiva Pañcākṣara,
    Madhurāṣṭakam, Śubhaṃ karoti).
  - Krishna Ashtottara completed. Open: v12 कुब्जाकृष्णाम्बर° (popular) or
    कुब्जाकृष्टाम्बर° (Brahmāṇḍa Purāṇa).
- [Suktas, Raghavendra Stotram, Puja](proofreading/suktas-raghavendra-puja.md):
  - 5 corrections.
  - Sri Sukta vv. 16–36 and the missing Mantra Pushpam passages added.
  - Raghavendra Stotram verse division fixed.

The sources used by the later texts (Lalitha Sahasranama, Sandhyavandane,
Devi Mahatmyam, Sundarakanda and the parayana texts) are listed in each
file's header comment.
