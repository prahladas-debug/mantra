// Śrī Rāma Rakṣā Stotram of Budha Kauśika. Collated Nov 2026; not yet checked
// line by line against a printed edition.
//
// Sources (independent digital witnesses):
//   A. sa.wikisource.org, "श्रीरामरक्षास्तोत्रम्" (typed Devanagari): base text.
//   B. sa.wikisource.org, "श्री रामरक्षा स्तोत्र" (a separate Marathi-style typing).
//   C. stotranidhi.com, Devanagari page (from the printed "Prabhāta Stotranidhi").
//   D. stotrasamhita/stotra-sangrahah (GitHub), RamarakshaStotram.tex.
//   E. Gita Press "Stotraratnāvalī" (sanskrit/raw_etexts, misc-gp), no. 37.
//
// Differences resolved by majority (and sense):
//   viniyoga: श्रीमद्धनुमान् कीलकम् (A B D) / श्रीमान् हनुमान् कीलकं (C E);
//     the देवता clause is in A C E only and is kept
//   dhyāna: जटामण्डनं (A B D) / जटामण्डलं (C E)
//   v3 सासितूण (A D E) / साऽसितूण (C) / सासीतूण (B)
//   v4 भालं (A B D E) / फालं (C)
//   v13 जगज्जैत्रैकमन्त्रेण (C D E); A has the typo जैत्रेक
//   v20 आत्तसज्जधनुषौ (A D E) / आत्तसज्य (B C)
//   v21 गच्छन्मनोरथोऽस्माकं (A B D) / गच्छन्मनोरथान्नश्च (C E)
//   v24 जपन्नित्यं (B D E) / जपेन्नित्यं (A C)
//   v25 नराः (C D E) / नरः (A B, ungrammatical)
//   v31 वामे तु (A B D) / वामे च (C E)
//   v38 राम रामेति रामेति (A B D E) / श्रीराम राम रामेति (C)
// Typos in single witnesses (कन्ठे, सिध्दयः, सहस्त्र, मम्, रामौ …) are not listed.
// All anuṣṭubh half-verses scan 8 + 8. Verses 20 (rathoddhatā), 26 and 37
// (śārdūlavikrīḍita), 28–29 (vasantatilakā), 30 (śālinī-type) and 32–33
// (upajāti) are in other metres, as in every witness.
import type { Mantra } from '../types';

export const ramaRakshaStotram: Mantra = {
  id: 'rama-raksha-stotram',
  title: 'श्रीरामरक्षास्तोत्रम्',
  titleEn: 'Sri Rama Raksha Stotram',
  category: 'stotra',
  deity: 'Śrī Rāma',
  source: 'Budha Kauśika (revealed to him by Śiva in a dream)',
  summary:
    'A protective hymn (kavaca) to Śrī Rāma: after the dhyāna, each part of the body is placed under the care of one of Rāma’s names, and the hymn goes on to praise Rāma and Lakṣmaṇa and the power of the name "Rāma". Tradition holds that Śiva revealed it to the sage Budha Kauśika in a dream.',
  summaryKn:
    'ಶ್ರೀರಾಮನ ರಕ್ಷಾಕವಚ ಸ್ತೋತ್ರ. ಧ್ಯಾನದ ನಂತರ ದೇಹದ ಒಂದೊಂದು ಅಂಗವನ್ನೂ ಶ್ರೀರಾಮನ ಒಂದೊಂದು ನಾಮದ ರಕ್ಷಣೆಗೆ ಒಪ್ಪಿಸಲಾಗುತ್ತದೆ; ಮುಂದೆ ರಾಮಲಕ್ಷ್ಮಣರ ಸ್ತುತಿ ಹಾಗೂ "ರಾಮ" ನಾಮದ ಮಹಿಮೆ ಬರುತ್ತದೆ. ಶಿವನು ಸ್ವಪ್ನದಲ್ಲಿ ಬುಧಕೌಶಿಕ ಋಷಿಗೆ ಇದನ್ನು ಉಪದೇಶಿಸಿದನೆಂದು ಸಂಪ್ರದಾಯ.',
  difficulty: 'medium',
  completeness: 'complete',
  sections: [
    {
      title: 'विनियोगः',
      titleEn: 'Viniyoga',
      note: 'Recited once before the stotram, holding a little water in the right palm, which is then released.',
      noteKn: 'ಸ್ತೋತ್ರದ ಮೊದಲು ಒಮ್ಮೆ, ಬಲ ಅಂಗೈಯಲ್ಲಿ ಸ್ವಲ್ಪ ನೀರನ್ನು ಹಿಡಿದು ಹೇಳಿ, ನಂತರ ನೀರನ್ನು ಬಿಡಬೇಕು.',
      verses: [
        {
          text: 'अस्य श्रीरामरक्षास्तोत्रमन्त्रस्य बुधकौशिक ऋषिः ।\nश्रीसीतारामचन्द्रो देवता । अनुष्टुप् छन्दः ।\nसीता शक्तिः । श्रीमद्धनुमान् कीलकम् ।\nश्रीरामचन्द्रप्रीत्यर्थे जपे विनियोगः ॥',
          meaning: {
            en: 'For this Rāma Rakṣā hymn, the seer is Budha Kauśika, the deity is Śrī Sītā-Rāmacandra, the metre is Anuṣṭubh, the power is Sītā and the key is the glorious Hanumān. It is recited to please Śrī Rāmacandra.',
            kn: 'ಈ ರಾಮರಕ್ಷಾ ಸ್ತೋತ್ರಮಂತ್ರಕ್ಕೆ ಬುಧಕೌಶಿಕರು ಋಷಿ, ಶ್ರೀಸೀತಾರಾಮಚಂದ್ರರು ದೇವತೆ, ಅನುಷ್ಟುಪ್ ಛಂದಸ್ಸು, ಸೀತಾದೇವಿ ಶಕ್ತಿ, ಶ್ರೀ ಹನುಮಂತನು ಕೀಲಕ. ಶ್ರೀರಾಮಚಂದ್ರನ ಪ್ರೀತಿಗಾಗಿ ಇದರ ಜಪ.',
          },
        },
      ],
    },
    {
      title: 'ध्यानम्',
      titleEn: 'Dhyanam',
      verses: [
        {
          text: 'ध्यायेदाजानुबाहुं धृतशरधनुषं बद्धपद्मासनस्थं\nपीतं वासो वसानं नवकमलदलस्पर्धिनेत्रं प्रसन्नम् ।\nवामाङ्कारूढसीतामुखकमलमिलल्लोचनं नीरदाभं\nनानालङ्कारदीप्तं दधतमुरुजटामण्डनं रामचन्द्रम् ॥',
          meaning: {
            en: 'Let one meditate on Rāmacandra: his arms reach to his knees, he holds bow and arrows, he sits in the lotus posture, wears yellow garments, and his calm eyes rival fresh lotus petals. His eyes meet the lotus face of Sītā seated on his left; he is dark as a rain cloud, shining with many ornaments and crowned with a great mass of matted hair.',
            kn: 'ಮೊಣಕಾಲಿನವರೆಗೆ ಚಾಚಿದ ತೋಳುಗಳುಳ್ಳ, ಬಿಲ್ಲು ಬಾಣಗಳನ್ನು ಹಿಡಿದ, ಪದ್ಮಾಸನದಲ್ಲಿ ಕುಳಿತ, ಹಳದಿ ವಸ್ತ್ರವನ್ನು ಧರಿಸಿದ, ಹೊಸ ಕಮಲದಳಗಳನ್ನು ಮೀರಿಸುವ ಪ್ರಸನ್ನ ಕಣ್ಣುಗಳುಳ್ಳ, ಎಡತೊಡೆಯ ಮೇಲೆ ಕುಳಿತ ಸೀತೆಯ ಮುಖಕಮಲದೊಡನೆ ದೃಷ್ಟಿ ಬೆರೆತ, ಮೋಡದಂತೆ ಶ್ಯಾಮಲನಾದ, ಬಗೆಬಗೆಯ ಆಭರಣಗಳಿಂದ ಹೊಳೆಯುವ, ದೊಡ್ಡ ಜಟಾಮಂಡಲವನ್ನು ಧರಿಸಿದ ಶ್ರೀರಾಮಚಂದ್ರನನ್ನು ಧ್ಯಾನಿಸಬೇಕು.',
          },
        },
      ],
    },
    {
      title: 'स्तोत्रम्',
      titleEn: 'Stotram',
      verses: [
        {
          n: 1,
          text: 'चरितं रघुनाथस्य शतकोटिप्रविस्तरम् ।\nएकैकमक्षरं पुंसां महापातकनाशनम् ॥',
          meaning: {
            en: 'The story of Raghunātha runs to a hundred crore verses, and every single syllable of it destroys even the gravest sins of men.',
            kn: 'ರಘುನಾಥನ ಚರಿತೆ ನೂರು ಕೋಟಿ ಶ್ಲೋಕಗಳಷ್ಟು ವಿಸ್ತಾರವಾದುದು; ಅದರ ಒಂದೊಂದು ಅಕ್ಷರವೂ ಮನುಷ್ಯರ ಮಹಾಪಾತಕಗಳನ್ನು ನಾಶಮಾಡುತ್ತದೆ.',
          },
        },
        {
          n: 2,
          text: 'ध्यात्वा नीलोत्पलश्यामं रामं राजीवलोचनम् ।\nजानकीलक्ष्मणोपेतं जटामुकुटमण्डितम् ॥',
          meaning: {
            en: 'Meditating on Rāma, dark as the blue lotus, lotus-eyed, accompanied by Jānakī and Lakṣmaṇa, adorned with a crown of matted hair…',
            kn: 'ನೀಲಕಮಲದಂತೆ ಶ್ಯಾಮಲನಾದ, ಕಮಲನಯನನಾದ, ಜಾನಕಿ ಲಕ್ಷ್ಮಣರೊಡನೆ ಕೂಡಿದ, ಜಟಾಮುಕುಟದಿಂದ ಶೋಭಿಸುವ ಶ್ರೀರಾಮನನ್ನು ಧ್ಯಾನಿಸಿ…',
          },
        },
        {
          n: 3,
          text: 'सासितूणधनुर्बाणपाणिं नक्तञ्चरान्तकम् ।\nस्वलीलया जगत्त्रातुमाविर्भूतमजं विभुम् ॥',
          meaning: {
            en: '…holding sword, quiver, bow and arrows, the destroyer of the night-roaming demons, the unborn, all-pervading Lord who appeared of his own free will to protect the world…',
            kn: '…ಖಡ್ಗ, ಬತ್ತಳಿಕೆ, ಬಿಲ್ಲು, ಬಾಣಗಳನ್ನು ಕೈಯಲ್ಲಿ ಹಿಡಿದ, ನಿಶಾಚರರನ್ನು ಸಂಹರಿಸಿದ, ಲೋಕರಕ್ಷಣೆಗಾಗಿ ತನ್ನ ಲೀಲೆಯಿಂದಲೇ ಅವತರಿಸಿದ ಜನ್ಮರಹಿತನೂ ಸರ್ವವ್ಯಾಪಿಯೂ ಆದ ಪ್ರಭುವನ್ನು ಧ್ಯಾನಿಸಿ…',
          },
        },
        {
          n: 4,
          text: 'रामरक्षां पठेत्प्राज्ञः पापघ्नीं सर्वकामदाम् ।\nशिरो मे राघवः पातु भालं दशरथात्मजः ॥',
          meaning: {
            en: '…the wise should recite this Rāma Rakṣā, which removes sin and grants every wish. May Rāghava protect my head, and the son of Daśaratha my forehead.',
            kn: '…ಪಾಪವನ್ನು ನಾಶಮಾಡುವ, ಎಲ್ಲ ಇಷ್ಟಾರ್ಥಗಳನ್ನು ಕೊಡುವ ಈ ರಾಮರಕ್ಷೆಯನ್ನು ಜ್ಞಾನಿಯು ಪಠಿಸಬೇಕು. ರಾಘವನು ನನ್ನ ತಲೆಯನ್ನೂ ದಶರಥಪುತ್ರನು ಹಣೆಯನ್ನೂ ಕಾಪಾಡಲಿ.',
          },
        },
        {
          n: 5,
          text: 'कौसल्येयो दृशौ पातु विश्वामित्रप्रियः श्रुती ।\nघ्राणं पातु मखत्राता मुखं सौमित्रिवत्सलः ॥',
          meaning: {
            en: 'May Kausalyā’s son guard my eyes, the beloved of Viśvāmitra my ears, the protector of the sacrifice my nose, and he who loves Saumitri (Lakṣmaṇa) my mouth.',
            kn: 'ಕೌಸಲ್ಯೆಯ ಮಗನು ನನ್ನ ಕಣ್ಣುಗಳನ್ನು, ವಿಶ್ವಾಮಿತ್ರರ ಪ್ರಿಯನು ಕಿವಿಗಳನ್ನು, ಯಜ್ಞರಕ್ಷಕನು ಮೂಗನ್ನು, ಸೌಮಿತ್ರಿಯ (ಲಕ್ಷ್ಮಣನ) ಮೇಲೆ ವಾತ್ಸಲ್ಯವುಳ್ಳವನು ಬಾಯನ್ನು ಕಾಪಾಡಲಿ.',
          },
        },
        {
          n: 6,
          text: 'जिह्वां विद्यानिधिः पातु कण्ठं भरतवन्दितः ।\nस्कन्धौ दिव्यायुधः पातु भुजौ भग्नेशकार्मुकः ॥',
          meaning: {
            en: 'May the treasure-house of learning guard my tongue, he who is revered by Bharata my throat, the bearer of divine weapons my shoulders, and he who broke Śiva’s bow my arms.',
            kn: 'ವಿದ್ಯಾನಿಧಿಯು ನನ್ನ ನಾಲಿಗೆಯನ್ನು, ಭರತನಿಂದ ವಂದಿತನು ಕಂಠವನ್ನು, ದಿವ್ಯಾಯುಧಧಾರಿಯು ಹೆಗಲುಗಳನ್ನು, ಶಿವಧನುಸ್ಸನ್ನು ಮುರಿದವನು ತೋಳುಗಳನ್ನು ಕಾಪಾಡಲಿ.',
          },
        },
        {
          n: 7,
          text: 'करौ सीतापतिः पातु हृदयं जामदग्न्यजित् ।\nमध्यं पातु खरध्वंसी नाभिं जाम्बवदाश्रयः ॥',
          meaning: {
            en: 'May Sītā’s husband guard my hands, the victor over Paraśurāma my heart, the slayer of Khara my waist, and he who is the refuge of Jāmbavān my navel.',
            kn: 'ಸೀತಾಪತಿಯು ನನ್ನ ಕೈಗಳನ್ನು, ಪರಶುರಾಮನನ್ನು ಗೆದ್ದವನು ಹೃದಯವನ್ನು, ಖರನನ್ನು ಸಂಹರಿಸಿದವನು ನಡುವನ್ನು, ಜಾಂಬವಂತನಿಗೆ ಆಶ್ರಯನಾದವನು ಹೊಕ್ಕಳನ್ನು ಕಾಪಾಡಲಿ.',
          },
        },
        {
          n: 8,
          text: 'सुग्रीवेशः कटी पातु सक्थिनी हनुमत्प्रभुः ।\nऊरू रघूत्तमः पातु रक्षःकुलविनाशकृत् ॥',
          meaning: {
            en: 'May the lord of Sugrīva guard my hips, the master of Hanumān my groin, and the best of the Raghus, destroyer of the demon race, my thighs.',
            kn: 'ಸುಗ್ರೀವನ ಒಡೆಯನು ನನ್ನ ಸೊಂಟವನ್ನು, ಹನುಮಂತನ ಪ್ರಭುವು ತೊಡೆಸಂದುಗಳನ್ನು, ರಾಕ್ಷಸಕುಲವನ್ನು ನಾಶಮಾಡಿದ ರಘೂತ್ತಮನು ತೊಡೆಗಳನ್ನು ಕಾಪಾಡಲಿ.',
          },
        },
        {
          n: 9,
          text: 'जानुनी सेतुकृत्पातु जङ्घे दशमुखान्तकः ।\nपादौ विभीषणश्रीदः पातु रामोऽखिलं वपुः ॥',
          meaning: {
            en: 'May the builder of the bridge guard my knees, the slayer of ten-headed Rāvaṇa my shins, he who gave Vibhīṣaṇa his kingdom my feet, and may Rāma guard my whole body.',
            kn: 'ಸೇತುವೆಯನ್ನು ಕಟ್ಟಿದವನು ನನ್ನ ಮೊಣಕಾಲುಗಳನ್ನು, ದಶಮುಖನನ್ನು ಕೊಂದವನು ಕಣಕಾಲುಗಳನ್ನು, ವಿಭೀಷಣನಿಗೆ ಐಶ್ವರ್ಯವನ್ನಿತ್ತವನು ಪಾದಗಳನ್ನು, ಶ್ರೀರಾಮನು ಸಂಪೂರ್ಣ ದೇಹವನ್ನು ಕಾಪಾಡಲಿ.',
          },
        },
        {
          n: 10,
          text: 'एतां रामबलोपेतां रक्षां यः सुकृती पठेत् ।\nस चिरायुः सुखी पुत्री विजयी विनयी भवेत् ॥',
          meaning: {
            en: 'The virtuous one who recites this protection, filled with Rāma’s strength, will be long-lived and happy, blessed with children, victorious and humble.',
            kn: 'ರಾಮನ ಬಲದಿಂದ ಕೂಡಿದ ಈ ರಕ್ಷೆಯನ್ನು ಪಠಿಸುವ ಪುಣ್ಯಶಾಲಿಯು ದೀರ್ಘಾಯುವೂ ಸುಖಿಯೂ ಸಂತಾನವಂತನೂ ವಿಜಯಿಯೂ ವಿನಯಶೀಲನೂ ಆಗುತ್ತಾನೆ.',
          },
        },
        {
          n: 11,
          text: 'पातालभूतलव्योमचारिणश्छद्मचारिणः ।\nन द्रष्टुमपि शक्तास्ते रक्षितं रामनामभिः ॥',
          meaning: {
            en: 'Beings that roam the nether world, the earth or the sky, and those that move in disguise, cannot even look upon one who is guarded by the names of Rāma.',
            kn: 'ಪಾತಾಳ, ಭೂಮಿ, ಆಕಾಶಗಳಲ್ಲಿ ಸಂಚರಿಸುವ ಹಾಗೂ ಮಾರುವೇಷದಲ್ಲಿ ಓಡಾಡುವ ದುಷ್ಟಶಕ್ತಿಗಳು ರಾಮನಾಮಗಳಿಂದ ರಕ್ಷಿತನಾದವನನ್ನು ನೋಡಲೂ ಶಕ್ತರಾಗುವುದಿಲ್ಲ.',
          },
        },
        {
          n: 12,
          text: 'रामेति रामभद्रेति रामचन्द्रेति वा स्मरन् ।\nनरो न लिप्यते पापैर्भुक्तिं मुक्तिं च विन्दति ॥',
          meaning: {
            en: 'One who remembers him as "Rāma", "Rāmabhadra" or "Rāmacandra" is not stained by sin, and gains both worldly happiness and liberation.',
            kn: '"ರಾಮ", "ರಾಮಭದ್ರ", "ರಾಮಚಂದ್ರ" ಎಂದು ಸ್ಮರಿಸುವ ಮನುಷ್ಯನಿಗೆ ಪಾಪ ಅಂಟುವುದಿಲ್ಲ; ಅವನು ಭೋಗವನ್ನೂ ಮೋಕ್ಷವನ್ನೂ ಪಡೆಯುತ್ತಾನೆ.',
          },
        },
        {
          n: 13,
          text: 'जगज्जैत्रैकमन्त्रेण रामनाम्नाभिरक्षितम् ।\nयः कण्ठे धारयेत्तस्य करस्थाः सर्वसिद्धयः ॥',
          meaning: {
            en: 'Whoever wears at the throat this hymn, guarded by the name of Rāma, the one mantra that conquers the world, holds every accomplishment in the palm of his hand.',
            kn: 'ಜಗತ್ತನ್ನು ಗೆಲ್ಲುವ ಏಕೈಕ ಮಂತ್ರವಾದ ರಾಮನಾಮದಿಂದ ರಕ್ಷಿತವಾದ ಇದನ್ನು ಕಂಠದಲ್ಲಿ ಧರಿಸುವವನಿಗೆ ಎಲ್ಲ ಸಿದ್ಧಿಗಳೂ ಅಂಗೈಯಲ್ಲಿರುತ್ತವೆ.',
          },
        },
        {
          n: 14,
          text: 'वज्रपञ्जरनामेदं यो रामकवचं स्मरेत् ।\nअव्याहताज्ञः सर्वत्र लभते जयमङ्गलम् ॥',
          meaning: {
            en: 'One who remembers this armour of Rāma, called the "diamond cage", is obeyed everywhere and wins victory and good fortune.',
            kn: '"ವಜ್ರಪಂಜರ" ಎಂಬ ಹೆಸರಿನ ಈ ರಾಮಕವಚವನ್ನು ಸ್ಮರಿಸುವವನ ಆಜ್ಞೆ ಎಲ್ಲೆಡೆಯೂ ತಡೆಯಿಲ್ಲದೆ ನಡೆಯುತ್ತದೆ; ಅವನು ಜಯವನ್ನೂ ಮಂಗಳವನ್ನೂ ಪಡೆಯುತ್ತಾನೆ.',
          },
        },
        {
          n: 15,
          text: 'आदिष्टवान्यथा स्वप्ने रामरक्षामिमां हरः ।\nतथा लिखितवान्प्रातः प्रबुद्धो बुधकौशिकः ॥',
          meaning: {
            en: 'Just as Hara (Śiva) taught this Rāma Rakṣā in a dream, so Budha Kauśika wrote it down on waking in the morning.',
            kn: 'ಹರನು (ಶಿವನು) ಸ್ವಪ್ನದಲ್ಲಿ ಈ ರಾಮರಕ್ಷೆಯನ್ನು ಹೇಗೆ ಉಪದೇಶಿಸಿದನೋ ಹಾಗೆಯೇ ಬೆಳಿಗ್ಗೆ ಎಚ್ಚರಗೊಂಡ ಬುಧಕೌಶಿಕರು ಇದನ್ನು ಬರೆದರು.',
          },
        },
        {
          n: 16,
          text: 'आरामः कल्पवृक्षाणां विरामः सकलापदाम् ।\nअभिरामस्त्रिलोकानां रामः श्रीमान्स नः प्रभुः ॥',
          meaning: {
            en: 'He is a garden of wish-granting trees and the end of every misfortune, the delight of the three worlds: that glorious Rāma is our Lord.',
            kn: 'ಕಲ್ಪವೃಕ್ಷಗಳ ಉದ್ಯಾನದಂತಿರುವವನು, ಎಲ್ಲ ಆಪತ್ತುಗಳಿಗೆ ಕೊನೆಯಾದವನು, ಮೂರು ಲೋಕಗಳಿಗೂ ಆನಂದದಾಯಕನಾದ ಶ್ರೀಮಂತನಾದ ಆ ಶ್ರೀರಾಮನೇ ನಮ್ಮ ಪ್ರಭು.',
          },
        },
        {
          n: 17,
          text: 'तरुणौ रूपसम्पन्नौ सुकुमारौ महाबलौ ।\nपुण्डरीकविशालाक्षौ चीरकृष्णाजिनाम्बरौ ॥',
          meaning: {
            en: 'Young, handsome, tender and yet mighty, with wide eyes like white lotuses, dressed in bark garments and black antelope skin…',
            kn: 'ತರುಣರು, ರೂಪವಂತರು, ಕೋಮಲರಾದರೂ ಮಹಾಬಲಶಾಲಿಗಳು, ಬಿಳಿಯ ಕಮಲದಂತೆ ವಿಶಾಲವಾದ ಕಣ್ಣುಗಳುಳ್ಳವರು, ನಾರುಮಡಿ ಮತ್ತು ಕೃಷ್ಣಾಜಿನವನ್ನು ಧರಿಸಿದವರು…',
          },
        },
        {
          n: 18,
          text: 'फलमूलाशिनौ दान्तौ तापसौ ब्रह्मचारिणौ ।\nपुत्रौ दशरथस्यैतौ भ्रातरौ रामलक्ष्मणौ ॥',
          meaning: {
            en: '…living on fruits and roots, self-controlled ascetics and celibates: these are the two sons of Daśaratha, the brothers Rāma and Lakṣmaṇa.',
            kn: '…ಹಣ್ಣು ಗೆಡ್ಡೆಗಳನ್ನು ತಿನ್ನುತ್ತಾ, ಇಂದ್ರಿಯನಿಗ್ರಹದಿಂದ ತಪಸ್ವಿಗಳಾಗಿ ಬ್ರಹ್ಮಚಾರಿಗಳಾಗಿ ಇರುವ ಇವರೇ ದಶರಥನ ಪುತ್ರರಾದ ರಾಮಲಕ್ಷ್ಮಣ ಸಹೋದರರು.',
          },
        },
        {
          n: 19,
          text: 'शरण्यौ सर्वसत्त्वानां श्रेष्ठौ सर्वधनुष्मताम् ।\nरक्षःकुलनिहन्तारौ त्रायेतां नो रघूत्तमौ ॥',
          meaning: {
            en: 'May these two best of the Raghus protect us: the refuge of all beings, the foremost of all archers, the destroyers of the demon race.',
            kn: 'ಎಲ್ಲ ಜೀವಿಗಳಿಗೂ ಆಶ್ರಯರಾದ, ಎಲ್ಲ ಬಿಲ್ಲುಗಾರರಲ್ಲಿ ಶ್ರೇಷ್ಠರಾದ, ರಾಕ್ಷಸಕುಲವನ್ನು ಸಂಹರಿಸಿದ ರಘುವಂಶದ ಈ ಇಬ್ಬರು ಉತ್ತಮರು ನಮ್ಮನ್ನು ಕಾಪಾಡಲಿ.',
          },
        },
        {
          n: 20,
          text: 'आत्तसज्जधनुषाविषुस्पृशा-\nवक्षयाशुगनिषङ्गसङ्गिनौ ।\nरक्षणाय मम रामलक्ष्मणा-\nवग्रतः पथि सदैव गच्छताम् ॥',
          meaning: {
            en: 'With bows drawn ready and hands on their arrows, carrying quivers that never run out, may Rāma and Lakṣmaṇa always walk ahead of me on the road to protect me.',
            kn: 'ಸಿದ್ಧಪಡಿಸಿದ ಬಿಲ್ಲುಗಳನ್ನು ಹಿಡಿದು, ಬಾಣಗಳನ್ನು ಮುಟ್ಟುತ್ತಾ, ಎಂದೂ ಬರಿದಾಗದ ಬತ್ತಳಿಕೆಗಳನ್ನು ಧರಿಸಿದ ರಾಮಲಕ್ಷ್ಮಣರು ನನ್ನ ರಕ್ಷಣೆಗಾಗಿ ದಾರಿಯಲ್ಲಿ ಸದಾ ನನ್ನ ಮುಂದೆ ನಡೆಯಲಿ.',
          },
        },
        {
          n: 21,
          text: 'सन्नद्धः कवची खड्गी चापबाणधरो युवा ।\nगच्छन्मनोरथोऽस्माकं रामः पातु सलक्ष्मणः ॥',
          meaning: {
            en: 'Armed and armoured, carrying sword, bow and arrows, youthful, the very fulfilment of our wishes: may Rāma, with Lakṣmaṇa, go with us and protect us.',
            kn: 'ಸನ್ನದ್ಧನಾಗಿ ಕವಚ, ಖಡ್ಗ, ಬಿಲ್ಲು ಬಾಣಗಳನ್ನು ಧರಿಸಿದ, ಯುವಕನಾದ, ನಮ್ಮ ಮನೋರಥಗಳ ಸಾಕಾರರೂಪನಾದ ಶ್ರೀರಾಮನು ಲಕ್ಷ್ಮಣನೊಡನೆ ನಮ್ಮೊಂದಿಗೆ ಸಾಗುತ್ತಾ ನಮ್ಮನ್ನು ಕಾಪಾಡಲಿ.',
          },
        },
        {
          n: 22,
          text: 'रामो दाशरथिः शूरो लक्ष्मणानुचरो बली ।\nकाकुत्स्थः पुरुषः पूर्णः कौसल्येयो रघूत्तमः ॥',
          meaning: {
            en: 'Rāma; son of Daśaratha; the hero; he whom Lakṣmaṇa follows; the mighty; descendant of Kakutstha; the Person; the complete one; Kausalyā’s son; the best of the Raghus…',
            kn: 'ರಾಮ, ದಾಶರಥಿ, ಶೂರ, ಲಕ್ಷ್ಮಣನು ಅನುಸರಿಸುವವನು, ಬಲಶಾಲಿ, ಕಾಕುತ್ಸ್ಥ, ಪುರುಷ, ಪೂರ್ಣ, ಕೌಸಲ್ಯೆಯ ಮಗ, ರಘೂತ್ತಮ…',
          },
        },
        {
          n: 23,
          text: 'वेदान्तवेद्यो यज्ञेशः पुराणपुरुषोत्तमः ।\nजानकीवल्लभः श्रीमानप्रमेयपराक्रमः ॥',
          meaning: {
            en: '…he who is known through the Vedānta; lord of sacrifice; the ancient supreme Person; beloved of Jānakī; the glorious one; of immeasurable valour.',
            kn: '…ವೇದಾಂತಗಳಿಂದ ತಿಳಿಯಲ್ಪಡುವವನು, ಯಜ್ಞಗಳ ಒಡೆಯ, ಪುರಾತನನಾದ ಪುರುಷೋತ್ತಮ, ಜಾನಕಿಯ ಪ್ರಿಯ, ಶ್ರೀಮಂತ, ಅಳೆಯಲಾಗದ ಪರಾಕ್ರಮವುಳ್ಳವನು.',
          },
        },
        {
          n: 24,
          text: 'इत्येतानि जपन्नित्यं मद्भक्तः श्रद्धयान्वितः ।\nअश्वमेधाधिकं पुण्यं सम्प्राप्नोति न संशयः ॥',
          meaning: {
            en: '(Śiva says:) My devotee who recites these names daily with faith gains merit greater than that of the horse sacrifice; there is no doubt of this.',
            kn: '(ಶಿವನು ಹೇಳುತ್ತಾನೆ:) ಶ್ರದ್ಧೆಯಿಂದ ಕೂಡಿದ ನನ್ನ ಭಕ್ತನು ಈ ನಾಮಗಳನ್ನು ನಿತ್ಯವೂ ಜಪಿಸಿದರೆ ಅಶ್ವಮೇಧಕ್ಕಿಂತಲೂ ಹೆಚ್ಚಿನ ಪುಣ್ಯವನ್ನು ಪಡೆಯುತ್ತಾನೆ; ಇದರಲ್ಲಿ ಸಂಶಯವಿಲ್ಲ.',
          },
        },
        {
          n: 25,
          text: 'रामं दूर्वादलश्यामं पद्माक्षं पीतवाससम् ।\nस्तुवन्ति नामभिर्दिव्यैर्न ते संसारिणो नराः ॥',
          meaning: {
            en: 'Those who praise with these divine names Rāma, dark as a blade of dūrvā grass, lotus-eyed and clad in yellow, are no longer bound to the cycle of birth and death.',
            kn: 'ದೂರ್ವೆಯ ಗರಿಕೆಯಂತೆ ಶ್ಯಾಮಲನಾದ, ಕಮಲನಯನನಾದ, ಪೀತಾಂಬರಧಾರಿಯಾದ ಶ್ರೀರಾಮನನ್ನು ಈ ದಿವ್ಯನಾಮಗಳಿಂದ ಸ್ತುತಿಸುವವರು ಮತ್ತೆ ಸಂಸಾರದಲ್ಲಿ ಸಿಲುಕುವುದಿಲ್ಲ.',
          },
        },
        {
          n: 26,
          text: 'रामं लक्ष्मणपूर्वजं रघुवरं सीतापतिं सुन्दरं\nकाकुत्स्थं करुणार्णवं गुणनिधिं विप्रप्रियं धार्मिकम् ।\nराजेन्द्रं सत्यसन्धं दशरथतनयं श्यामलं शान्तमूर्तिं\nवन्दे लोकाभिरामं रघुकुलतिलकं राघवं रावणारिम् ॥',
          meaning: {
            en: 'I bow to Rāma: Lakṣmaṇa’s elder brother, best of the Raghus, Sītā’s handsome husband, descendant of Kakutstha, an ocean of compassion, a treasury of virtues, dear to the learned, righteous; king of kings, true to his word, son of Daśaratha, dark-hued, the embodiment of peace, the delight of the world, the jewel of the Raghu line, Rāghava, the foe of Rāvaṇa.',
            kn: 'ಲಕ್ಷ್ಮಣನ ಅಣ್ಣನಾದ, ರಘುಶ್ರೇಷ್ಠನಾದ, ಸುಂದರನಾದ ಸೀತಾಪತಿ, ಕಾಕುತ್ಸ್ಥ, ಕರುಣಾಸಾಗರ, ಗುಣನಿಧಿ, ವಿಪ್ರಪ್ರಿಯ, ಧರ್ಮಿಷ್ಠ, ರಾಜಾಧಿರಾಜ, ಸತ್ಯಸಂಧ, ದಶರಥನಂದನ, ಶ್ಯಾಮಲವರ್ಣದ ಶಾಂತಮೂರ್ತಿ, ಲೋಕಾಭಿರಾಮ, ರಘುಕುಲತಿಲಕ, ರಾವಣನ ಶತ್ರುವಾದ ರಾಘವನಿಗೆ ನಾನು ವಂದಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 27,
          text: 'रामाय रामभद्राय रामचन्द्राय वेधसे ।\nरघुनाथाय नाथाय सीतायाः पतये नमः ॥',
          meaning: {
            en: 'Salutations to Rāma, Rāmabhadra, Rāmacandra, the Creator; to Raghunātha, the Lord, the husband of Sītā.',
            kn: 'ರಾಮನಿಗೆ, ರಾಮಭದ್ರನಿಗೆ, ರಾಮಚಂದ್ರನಿಗೆ, ಸೃಷ್ಟಿಕರ್ತನಿಗೆ, ರಘುನಾಥನಿಗೆ, ಸ್ವಾಮಿಗೆ, ಸೀತಾಪತಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          n: 28,
          text: 'श्रीराम राम रघुनन्दन राम राम\nश्रीराम राम भरताग्रज राम राम ।\nश्रीराम राम रणकर्कश राम राम\nश्रीराम राम शरणं भव राम राम ॥',
          meaning: {
            en: 'Śrī Rāma, Rāma, joy of the Raghus; Śrī Rāma, elder brother of Bharata; Śrī Rāma, fierce in battle; Śrī Rāma, Rāma, be my refuge!',
            kn: 'ಶ್ರೀರಾಮ, ರಾಮ, ರಘುನಂದನ! ಶ್ರೀರಾಮ, ಭರತನ ಅಣ್ಣ! ಶ್ರೀರಾಮ, ರಣದಲ್ಲಿ ಕಠೋರನಾದವನೇ! ಶ್ರೀರಾಮ, ರಾಮ, ನನಗೆ ಶರಣಾಗು (ಆಶ್ರಯನಾಗು)!',
          },
        },
        {
          n: 29,
          text: 'श्रीरामचन्द्रचरणौ मनसा स्मरामि\nश्रीरामचन्द्रचरणौ वचसा गृणामि ।\nश्रीरामचन्द्रचरणौ शिरसा नमामि\nश्रीरामचन्द्रचरणौ शरणं प्रपद्ये ॥',
          meaning: {
            en: 'I remember the feet of Śrī Rāmacandra in my mind; I praise them with my words; I bow my head to them; I take refuge in the feet of Śrī Rāmacandra.',
            kn: 'ಶ್ರೀರಾಮಚಂದ್ರನ ಪಾದಗಳನ್ನು ಮನಸ್ಸಿನಿಂದ ಸ್ಮರಿಸುತ್ತೇನೆ, ಮಾತಿನಿಂದ ಕೊಂಡಾಡುತ್ತೇನೆ, ತಲೆಬಾಗಿ ನಮಿಸುತ್ತೇನೆ, ಆ ಪಾದಗಳಿಗೇ ಶರಣಾಗುತ್ತೇನೆ.',
          },
        },
        {
          n: 30,
          text: 'माता रामो मत्पिता रामचन्द्रः\nस्वामी रामो मत्सखा रामचन्द्रः ।\nसर्वस्वं मे रामचन्द्रो दयालु-\nर्नान्यं जाने नैव जाने न जाने ॥',
          meaning: {
            en: 'Rāma is my mother, Rāmacandra my father; Rāma is my master, Rāmacandra my friend. Compassionate Rāmacandra is my all; I know no other, none at all.',
            kn: 'ರಾಮನೇ ನನ್ನ ತಾಯಿ, ರಾಮಚಂದ್ರನೇ ನನ್ನ ತಂದೆ; ರಾಮನೇ ನನ್ನ ಸ್ವಾಮಿ, ರಾಮಚಂದ್ರನೇ ನನ್ನ ಗೆಳೆಯ. ದಯಾಳುವಾದ ರಾಮಚಂದ್ರನೇ ನನ್ನ ಸರ್ವಸ್ವ; ಬೇರೆ ಯಾರನ್ನೂ ನಾನು ಅರಿಯೆನು, ಅರಿಯೆನು, ಅರಿಯೆನು.',
          },
        },
        {
          n: 31,
          text: 'दक्षिणे लक्ष्मणो यस्य वामे तु जनकात्मजा ।\nपुरतो मारुतिर्यस्य तं वन्दे रघुनन्दनम् ॥',
          meaning: {
            en: 'I bow to the joy of the Raghus, who has Lakṣmaṇa on his right, Janaka’s daughter on his left and Māruti (Hanumān) before him.',
            kn: 'ಬಲಭಾಗದಲ್ಲಿ ಲಕ್ಷ್ಮಣನು, ಎಡಭಾಗದಲ್ಲಿ ಜನಕನ ಮಗಳಾದ ಸೀತೆಯು, ಮುಂದೆ ಮಾರುತಿಯು ಇರುವ ಆ ರಘುನಂದನನಿಗೆ ನಾನು ವಂದಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 32,
          text: 'लोकाभिरामं रणरङ्गधीरं\nराजीवनेत्रं रघुवंशनाथम् ।\nकारुण्यरूपं करुणाकरं तं\nश्रीरामचन्द्रं शरणं प्रपद्ये ॥',
          meaning: {
            en: 'I take refuge in Śrī Rāmacandra, the delight of the world, steadfast on the field of battle, lotus-eyed, lord of the Raghu line, compassion in person and a mine of mercy.',
            kn: 'ಲೋಕಕ್ಕೆ ಆನಂದದಾಯಕನಾದ, ರಣರಂಗದಲ್ಲಿ ಧೀರನಾದ, ಕಮಲನಯನನಾದ, ರಘುವಂಶದ ಒಡೆಯನಾದ, ಕಾರುಣ್ಯಮೂರ್ತಿಯೂ ಕರುಣಾಕರನೂ ಆದ ಆ ಶ್ರೀರಾಮಚಂದ್ರನಿಗೆ ಶರಣಾಗುತ್ತೇನೆ.',
          },
        },
        {
          n: 33,
          text: 'मनोजवं मारुततुल्यवेगं\nजितेन्द्रियं बुद्धिमतां वरिष्ठम् ।\nवातात्मजं वानरयूथमुख्यं\nश्रीरामदूतं शरणं प्रपद्ये ॥',
          meaning: {
            en: 'I take refuge in the messenger of Śrī Rāma, swift as thought and fast as the wind, master of his senses, foremost among the wise, son of the Wind god and chief of the monkey hosts.',
            kn: 'ಮನಸ್ಸಿನಷ್ಟು ವೇಗದವನು, ವಾಯುವಿಗೆ ಸಮಾನವಾದ ವೇಗವುಳ್ಳವನು, ಇಂದ್ರಿಯಗಳನ್ನು ಗೆದ್ದವನು, ಬುದ್ಧಿವಂತರಲ್ಲಿ ಶ್ರೇಷ್ಠನು, ವಾಯುಪುತ್ರನು, ವಾನರಸೇನೆಯ ಮುಖ್ಯನು ಆದ ಶ್ರೀರಾಮದೂತನಿಗೆ (ಹನುಮಂತನಿಗೆ) ಶರಣಾಗುತ್ತೇನೆ.',
          },
        },
        {
          n: 34,
          text: 'कूजन्तं रामरामेति मधुरं मधुराक्षरम् ।\nआरुह्य कविताशाखां वन्दे वाल्मीकिकोकिलम् ॥',
          meaning: {
            en: 'I bow to Vālmīki, the cuckoo who, perched on the branch of poetry, sweetly sings the sweet syllables "Rāma, Rāma".',
            kn: 'ಕಾವ್ಯವೆಂಬ ಕೊಂಬೆಯನ್ನೇರಿ "ರಾಮ ರಾಮ" ಎಂಬ ಮಧುರ ಅಕ್ಷರಗಳನ್ನು ಮಧುರವಾಗಿ ಹಾಡುವ ವಾಲ್ಮೀಕಿ ಎಂಬ ಕೋಗಿಲೆಗೆ ವಂದಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 35,
          text: 'आपदामपहर्तारं दातारं सर्वसम्पदाम् ।\nलोकाभिरामं श्रीरामं भूयो भूयो नमाम्यहम् ॥',
          meaning: {
            en: 'Again and again I bow to Śrī Rāma, the delight of the world, who takes away all calamities and grants every kind of prosperity.',
            kn: 'ಆಪತ್ತುಗಳನ್ನು ದೂರಮಾಡುವ, ಎಲ್ಲ ಸಂಪತ್ತುಗಳನ್ನು ನೀಡುವ, ಲೋಕಾಭಿರಾಮನಾದ ಶ್ರೀರಾಮನಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 36,
          text: 'भर्जनं भवबीजानामर्जनं सुखसम्पदाम् ।\nतर्जनं यमदूतानां रामरामेति गर्जनम् ॥',
          meaning: {
            en: 'The roar of "Rāma, Rāma" roasts the seeds of rebirth, earns happiness and prosperity, and drives off the messengers of Yama.',
            kn: '"ರಾಮ ರಾಮ" ಎಂಬ ಗರ್ಜನೆಯು ಸಂಸಾರದ ಬೀಜಗಳನ್ನು ಹುರಿದು ನಿಷ್ಫಲಗೊಳಿಸುತ್ತದೆ, ಸುಖಸಂಪತ್ತುಗಳನ್ನು ತಂದುಕೊಡುತ್ತದೆ, ಯಮದೂತರನ್ನು ಬೆದರಿಸಿ ಓಡಿಸುತ್ತದೆ.',
          },
        },
        {
          n: 37,
          text: 'रामो राजमणिः सदा विजयते रामं रमेशं भजे\nरामेणाभिहता निशाचरचमू रामाय तस्मै नमः ।\nरामान्नास्ति परायणं परतरं रामस्य दासोऽस्म्यहं\nरामे चित्तलयः सदा भवतु मे भो राम मामुद्धर ॥',
          meaning: {
            en: 'Rāma, jewel among kings, is ever victorious; I worship Rāma, the lord of Ramā. By Rāma the demon army was struck down; to that Rāma, salutations. There is no refuge higher than Rāma; I am Rāma’s servant. May my mind always rest in Rāma. O Rāma, lift me up!',
            kn: 'ರಾಜರಲ್ಲಿ ರತ್ನದಂತಿರುವ ರಾಮನು ಸದಾ ಜಯಶೀಲನು; ರಮಾಪತಿಯಾದ ರಾಮನನ್ನು ಭಜಿಸುತ್ತೇನೆ. ರಾಮನಿಂದ ರಾಕ್ಷಸಸೇನೆ ಹತವಾಯಿತು; ಆ ರಾಮನಿಗೆ ನಮಸ್ಕಾರ. ರಾಮನಿಗಿಂತ ಮಿಗಿಲಾದ ಆಶ್ರಯವಿಲ್ಲ; ನಾನು ರಾಮನ ದಾಸನು. ನನ್ನ ಮನಸ್ಸು ಸದಾ ರಾಮನಲ್ಲಿ ಲೀನವಾಗಿರಲಿ. ಓ ರಾಮಾ, ನನ್ನನ್ನು ಉದ್ಧರಿಸು!',
          },
        },
        {
          n: 38,
          text: 'राम रामेति रामेति रमे रामे मनोरमे ।\nसहस्रनाम तत्तुल्यं रामनाम वरानने ॥',
          meaning: {
            en: '(Śiva to Pārvatī:) O lovely one, I delight in Rāma, the delight of the mind, saying "Rāma, Rāma, Rāma". The name of Rāma, O fair-faced one, is equal to the thousand names.',
            kn: '(ಶಿವನು ಪಾರ್ವತಿಗೆ:) ಮನೋರಮೆಯೇ, "ರಾಮ ರಾಮ ರಾಮ" ಎನ್ನುತ್ತಾ ಮನೋಹರನಾದ ರಾಮನಲ್ಲಿ ನಾನು ರಮಿಸುತ್ತೇನೆ. ಸುಂದರ ಮುಖದವಳೇ, ರಾಮನಾಮವು ಸಹಸ್ರನಾಮಕ್ಕೆ ಸಮಾನ.',
          },
        },
        {
          text: 'इति श्रीबुधकौशिकविरचितं श्रीरामरक्षास्तोत्रं सम्पूर्णम् ॥\nश्रीसीतारामचन्द्रार्पणमस्तु ॥',
        },
      ],
    },
  ],
};
