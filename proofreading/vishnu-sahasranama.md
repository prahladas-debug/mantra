# Vishnu Sahasranama collation (reviewer "vsn")

File: /home/user/mantra/src/data/texts/vishnu-sahasranama.ts (id `vishnu-sahasranama`)

## Witnesses

Each witness is saved in its own folder under `review/`.

| Tag | Source | Saved as |
| --- | --- | --- |
| W | sa.wikisource.org, विष्णुसहस्रनामस्तोत्रम्‌ (typed Devanagari, with nyāsa) | vsn-wikisource/ws.txt |
| S | stotranidhi.com, Devanagari page; the site says it is printed in "Prabhata Stotranidhi" (Telugu/South Indian tradition, with ःस → स्स sandhi) | vsn-stotranidhi/s.txt, and s-norm.txt with the sandhi normalised |
| K | swami-krishnananda.org, Divine Life Society (Devanagari + IAST + per-name glosses after Śaṅkara) | vsn-krishnananda/kr-deva.txt |
| L | shlokam.org (Devanagari) | vsn-shlokam/sh-deva.txt |
| H | hindupad.com (Kannada; many typos) | vsn-hindupad/h.txt |
| G | Project Gutenberg #9000 (loose transliteration; tie-breaker only) | vsn-gutenberg/pg9000.txt |
| C | BORI critical edition, MBh 13.135 (GRETIL, IAST). Not a recitation text, so used as a tie-breaker only | vsn-gretil/ce135-plain.txt |

## Checks run

- `scripts/collate.ts` against W, S, K, L, H and C.
- Extra check for avagraha differences, which collate.ts ignores. This is how the v33, v60 and v66 cases were found.
- **Numbering:** all 108 name-ślokas end exactly where W, S, K and L put ॥n॥. The 108-śloka division is confirmed and there is no renumbering.
- **Metre:** every name-śloka half is 16 syllables, except 54b and 92b. Those two have 17 syllables (विनयो जयः… and अपराजितः…), and every witness has the same hypermetric pāda.
  - Pūrva-bhāga and uttara-bhāga anuṣṭubhs are all 16 + 16.
  - Dhyāna metres: sragdharā 21, mandākrāntā 17, śālinī 11, vaṃśastha 12.
  - Uttara-bhāga 28 (vaṃśastha 12) and 32–33 (indravajrā/upajāti 11) also scan.

## Changes (6)

1. **Stotram 33:** अदृश्योऽव्यक्तरूपश्च → अदृश्यो व्यक्तरूपश्च.
   - Every witness reads व्यक्तरूपः: W, S, K, L, H, G and C. K also glosses "Vyaktarūpaḥ".
   - This changes the name, from "unmanifest form" to "manifest form". The text has no meanings, so there was nothing else to update.
2. **Stotram 60:** भगहानन्दी → भगहाऽऽनन्दी.
   - W, S, K, L and H write the double avagraha, which marks the name Ānandī as Śaṅkara reads it. K glosses "Ānandī".
   - It is pronounced the same. This is one of the variants flagged in PROOFREADING.
3. **Stotram 38:** महर्द्धिर्ऋद्धो → महर्द्धिरृद्धो.
   - This is a spelling change only. W, S, K and L write रृ.
   - It also clears the validator's IAST round-trip warning for v38. H (Kannada) writes ರ್-ಋ, as we did before.
4. **Uttara-bhāga 22:** जगतः प्रभवाप्ययम् → जगतः प्रभुमव्ययम्.
   - For the new reading: W, S, K, L and H.
   - For the old reading: only C and G.
5. **ॐ नम इति line after uttara-bhāga 28:** सहस्रकोटीयुगधारिण ॐ नम इति → सहस्रकोटीयुगधारिणे नम ॐ नम इति.
   - W, L and H read exactly this. S has धारिणे ओं नम इति.
   - No witness has धारिण.
6. **Added the speaker line भीष्म उवाच** before uttara-bhāga 1 (W, S, K).
7. The header comment now names the witnesses and the variants kept. This is not a text change.

## Variants kept (ours has support, or the witnesses split)

**Stotram:**

- **13 शाश्वतस्थाणुः:** ours, K, L and H. W, S and C have शाश्वतः स्थाणुः. Śaṅkara takes it as one name, and by optional visarga-lopa it is also a valid spelling of the two-word reading. This is the reading in our header.
- **12 समात्मा सम्मितः:** ours, S, L, C and G. W and K have समात्माऽसम्मितः, though K glosses "Sammitaḥ". Śaṅkara explains both.
- **26 विश्वधृक्:** W, K, L and C. S has विश्वसृड्.
- **43 विरजो:** S, K and L. C and G have विरतो, and W notes "(or विरतो)".
- **47 स्थविष्ठोऽभूः:** W, K and L. S has स्थविष्ठो भूः.
- **61 दिवःस्पृक्:** W and L. S has दिविस्पृक् and K has दिवस्पृक्.
- **66 विजितात्मा विधेयात्मा:** ours, S, H, G, C, and K's own IAST and gloss. W, L and K's Devanagari have ऽविधेयात्मा.
- **76 दर्पदो दृप्तो:** W, K and L. S has दर्पदोऽदृप्तो.
- **78 सवः:** W, K, L and C. S has स्तवः.
- **87 अमृताशः:** ours, K (gloss "Amṛtāśaḥ"), L, H and G. W, S and C have अमृतांशः.
- **88 न्यग्रोधोदुम्बरः:** ours, S, C and G. W, K and L write न्यग्रोधोऽदुम्बरः. Ours is the grammatical sandhi of न्यग्रोधः + उदुम्बरः.
- **92 नियन्ताऽनियमोऽयमः:** ours, W, K, L and H. S, C and G have नियन्ता नियमो यमः.
- **102 आधारनिलयोऽधाता:** W, K and L. S has धाता.
- **South Indian readings kept out:** S also has महाद्रिधृत्, त्रिलोकधृत्, स्वास्थ्यः, रविर्विलोचनः and जीवनं. Each is S alone or S+H.

**Pūrva-bhāga:**

- **10 दैवतं देवतानां:** ours, L, H and C. W, S, K and G have दैवतानां. The witnesses split, so ours is kept. **Please check this against Gita Press.**
- **15 देवकिनन्दनः:** W, S and K, and the metre needs a short 5th syllable. L and C have देवकी°.
- **15 विनियुज्यते:** S, K and L. W has विनियोज्यते.

**Viniyoga:** प्रीत्यर्थे … जपे विनियोगः (S, L). W has प्रीत्यर्थं, and K and L add पारायणे. W and K start with ॐ अस्य; it was not added.

**Dhyānam:**

- **1 मालाकॢप्त°:** W. S has क्लुप्त and K has क्लृप्त. The vocalic ḷ is the correct form.
- **1 °वर्षैः / आनन्दी:** K. W and S have वर्षैरानन्दी across the pāda break. Only the sandhi differs.
- **2 वास्तेयमब्धिः:** W and S. K has वासो यमब्धिः.
- **3 विश्वाधारं, योगिभिर्ध्यानगम्यं:** W and K. S has विश्वाकारं and योगिहृद्ध्यान°.
- **6 सहारवक्षःस्थलकौस्तुभश्रियं:** W and G. S and K have सहारवक्षःस्थलशोभिकौस्तुभं. Both scan as vaṃśastha.

**Uttara-bhāga:**

- **6 ज्ञातिप्राधान्यम्:** W and K. S has याति प्राधान्यम्.
- **12 युज्येतात्मसुख°:** W. S has युज्येतात्मा सुख°.
- **14 सचन्द्रार्कनक्षत्रा:** W. S has °नक्षत्रं.
- **17 परिकल्पते:** ours, L, H and G. W, K and C have परिकल्प्यते, and S has परिकल्पितः. Both scan, and the witnesses split. **Please check this against Gita Press.**
- **25 वासितं भुवनत्रयम्:** W, K and L. S and C have वासितं ते जगत्त्रयम्.
- **27 श्रीराम राम रामेति:** S, K and L. W has रामरामेति रामेति.
- **28 सहस्रकोटी°:** S, K, L and H. W has कोटि, which breaks the vaṃśastha metre.
- **32 भवन्ति:** S and K. W has भवन्तु.
- **33 प्रकृतेः स्वभावात्:** S and K. W has प्रकृतिस्वभावात्.

**ॐ नम इति lines:** the other five lines match W exactly. S and L prefix श्री to सर्वप्रहरणायुध; that was not added. The order of the uttara-bhāga speakers matches W and S exactly:

अर्जुन → भगवान् → व्यास → पार्वती → ईश्वर → ब्रह्मा → सञ्जय → भगवान्.

## Not changed / notes

- The pūrva-bhāga is numbered 1–16 here, while W, S and K run on from the opening prayers (7–22). The division is the same, so the numbering was left alone.
- Pūrva-bhāga 14–16 and dhyānam 5 and 7 are in W, S and K. S marks dhyānam 5 and 7 as अधिक, which confirms they are additions.
