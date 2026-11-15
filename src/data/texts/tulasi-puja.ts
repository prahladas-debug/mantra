/**
 * Tulasi stotra and puja: the eight names of Tulasi (Devi Bhagavata 9.25), the Tulasi Stotram of Pundarika
 * (fifteen verses), the daily mantras for watering, praying to and circumambulating the Tulasi, and the
 * Utthana (Prabodhini) Dvadashi / Tulasi Vivaha day.
 * Sources (collated Nov 2026):
 *  - Namashtaka: Devibhagavata Purana 9.25.32-33, sa.wikisource (the 9.25 chapter); the eight names also given
 *    (in English) by madhwamrutha.org "Uttana dwadashi - Tulasi vivaaha". The longer Tulasi namashtaka stotra on
 *    sanskritdocuments.org could not be fetched (HTTP 403), so only these two verses are given.
 *  - Tulasi Stotram "jagaddhatri namastubhyam": stotranidhi.com (Prabhata Stotranidhi) and bhaktibharat.com.
 *    Readings: v3 कीर्तितापि स्मृता वापि (bhaktibharat; stotranidhi कीर्तिता वापि, which is a syllable too long);
 *    v5 या विनिहन्ति (bhaktibharat; stotranidhi विनर्हन्ति); v12 देवदेवमनःप्रिया (stotranidhi; bhaktibharat has
 *    a typo देवीदेव-).
 *  - Daily mantras: yan-mule sarva-tirthani (stotranidhi "Tulasi Slokam", madhwamrutha, balkur manual);
 *    "ya drishta nikhilagha-sangha-shamani" (Padma Purana, Uttara-khanda 54.23 on sa.wikisource; Srinivasa S.
 *    Mathad, "Upaneetarige Upayukta Upadesha", Madhva); "prasida tulasi-devi" (Mathad; Balkur, Smarta);
 *    "tulasi shri-sakhi shubhe" (Mathad; also v15 of the stotram); pradakshina verse "yani kani ca papani"
 *    (Laghu-pancayatana-puja and a Karnataka puja-paddhati, both in the app's own puja sources).
 *  - Utthana Dvadashi prayer "uttishthottishtha govinda" (Mathad; madhwamrutha). The plucking days are from the
 *    Smarta manual of Balkur and Dixit's "Dharmika Acharanegala Pakshinota".
 */
import type { Mantra } from '../types';

export const tulasiPuja: Mantra = {
  id: 'tulasi-puja',
  title: 'तुलसीस्तोत्रं पूजा च',
  titleEn: 'Tulasi Stotra and Puja',
  category: 'puja',
  deity: 'Tulasi Devi',
  source: 'Devi Bhagavata Purana 9.25; Padma Purana; traditional',
  summary: 'Prayers and worship of Tulasi, the holy basil dear to Vishnu: her eight names, the fifteen-verse Tulasi Stotram, the short daily verses for watering, praying to and circling the Tulasi plant, and the prayer for Utthana Dvadashi, the day of Tulasi Vivaha, when Tulasi is wedded to Vishnu (Shaligrama) at the end of Chaturmasya.',
  summaryKn: 'ವಿಷ್ಣುಪ್ರಿಯೆಯಾದ ತುಳಸಿಯ ಪ್ರಾರ್ಥನೆ ಮತ್ತು ಪೂಜೆ: ಅವಳ ಎಂಟು ನಾಮಗಳು, ಹದಿನೈದು ಶ್ಲೋಕಗಳ ತುಲಸೀ ಸ್ತೋತ್ರ, ತುಳಸೀ ಗಿಡಕ್ಕೆ ನೀರೆರೆದು ನಮಿಸಿ ಪ್ರದಕ್ಷಿಣೆ ಮಾಡುವಾಗ ಹೇಳುವ ನಿತ್ಯ ಶ್ಲೋಕಗಳು, ಮತ್ತು ಚಾತುರ್ಮಾಸ್ಯ ಮುಗಿದು ತುಳಸಿಯನ್ನು ವಿಷ್ಣುವಿಗೆ (ಶಾಲಿಗ್ರಾಮಕ್ಕೆ) ವಿವಾಹ ಮಾಡಿಸುವ ಉತ್ಥಾನ ದ್ವಾದಶಿಯಂದು ಹೇಳುವ ಪ್ರಾರ್ಥನೆ.',
  difficulty: 'easy',
  completeness: 'partial',
  contentNote: 'Given: the eight names, the Tulasi Stotram, the short daily mantras and the Utthana Dvadashi prayer. Not included: the full Tulasi Vivaha ritual (kanyadana mantras, mangalashtaka and the lamp and arati steps), the sixteen-step Tulasi shodashopachara puja, the Tulasi ashtottara and the longer Tulasi namashtaka stotra, because no two printed sources that could be read agreed on one text; follow your family priest or matha manual for the wedding.',
  sections: [
    {
      title: 'तुलसीनामाष्टकम्',
      titleEn: 'Tulasi namashtaka (the eight names)',
      verses: [
        {
          n: 1,
          text: 'वृन्दा वृन्दावनी विश्वपूजिता विश्वपावनी ।\nपुष्पसारा नन्दिनी च तुलसी कृष्णजीवनी ॥',
          meaning: {
            en: 'Vrinda, Vrindavani, Vishvapujita (worshipped by the world), Vishvapavani (purifier of the world), Pushpasara (essence of flowers), Nandini (giver of joy), Tulasi (the incomparable) and Krishnajivani (the life of Krishna).',
            kn: 'ವೃಂದಾ, ವೃಂದಾವನೀ, ವಿಶ್ವಪೂಜಿತಾ (ಜಗತ್ತಿನಿಂದ ಪೂಜಿತಳು), ವಿಶ್ವಪಾವನೀ (ಜಗತ್ತನ್ನು ಪವಿತ್ರಗೊಳಿಸುವವಳು), ಪುಷ್ಪಸಾರಾ (ಹೂವುಗಳ ಸಾರ), ನಂದಿನೀ (ಆನಂದ ನೀಡುವವಳು), ತುಲಸೀ (ಸಾಟಿಯಿಲ್ಲದವಳು), ಕೃಷ್ಣಜೀವನೀ (ಕೃಷ್ಣನ ಪ್ರಾಣ).',
          },
        },
        {
          n: 2,
          text: 'एतन्नामाष्टकं चैव स्तोत्रं नामार्थसंयुतम् ।\nयः पठेत्तां च सम्पूज्य सोऽश्वमेधफलं लभेत् ॥',
          meaning: {
            en: 'He who, after worshipping her, recites this hymn of eight names with their meanings gains the fruit of an Ashvamedha sacrifice.',
            kn: 'ಅವಳನ್ನು ಪೂಜಿಸಿ, ಅರ್ಥಸಹಿತವಾದ ಈ ಎಂಟು ನಾಮಗಳ ಸ್ತೋತ್ರವನ್ನು ಪಠಿಸುವವನು ಅಶ್ವಮೇಧ ಯಾಗದ ಫಲವನ್ನು ಪಡೆಯುತ್ತಾನೆ.',
          },
        },
      ],
    },
    {
      title: 'तुलसीस्तोत्रम्',
      titleEn: 'Tulasi Stotram (of Pundarika)',
      verses: [
        {
          n: 1,
          text: 'जगद्धात्रि नमस्तुभ्यं विष्णोश्च प्रियवल्लभे ।\nयतो ब्रह्मादयो देवाः सृष्टिस्थित्यन्तकारिणः ॥',
          meaning: {
            en: 'Salutations to you, O mother of the world, the dear beloved of Vishnu, through whom Brahma and the other gods bring about creation, preservation and dissolution.',
            kn: 'ಜಗನ್ಮಾತೆಯೇ, ವಿಷ್ಣುವಿನ ಪ್ರಿಯವಲ್ಲಭೆಯೇ, ನಿನಗೆ ನಮಸ್ಕಾರ; ನಿನ್ನಿಂದಲೇ ಬ್ರಹ್ಮಾದಿ ದೇವತೆಗಳು ಸೃಷ್ಟಿ, ಸ್ಥಿತಿ, ಲಯಗಳನ್ನು ನಡೆಸುತ್ತಾರೆ.',
          },
        },
        {
          n: 2,
          text: 'नमस्तुलसि कल्याणि नमो विष्णुप्रिये शुभे ।\nनमो मोक्षप्रदे देवि नमः सम्पत्प्रदायिके ॥',
          meaning: {
            en: 'Salutations, O Tulasi, auspicious one; salutations, beloved of Vishnu, the fortunate; salutations, goddess who give liberation; salutations, giver of prosperity.',
            kn: 'ಕಲ್ಯಾಣಿಯಾದ ತುಲಸಿಯೇ ನಮಸ್ಕಾರ; ವಿಷ್ಣುಪ್ರಿಯೆಯೇ, ಶುಭೆಯೇ ನಮಸ್ಕಾರ; ಮೋಕ್ಷ ನೀಡುವ ದೇವಿಯೇ ನಮಸ್ಕಾರ; ಸಂಪತ್ತನ್ನು ನೀಡುವವಳೇ ನಮಸ್ಕಾರ.',
          },
        },
        {
          n: 3,
          text: 'तुलसी पातु मां नित्यं सर्वापद्भ्योऽपि सर्वदा ।\nकीर्तितापि स्मृता वापि पवित्रयति मानवम् ॥',
          meaning: {
            en: 'May Tulasi protect me always from all dangers. Whether praised or merely remembered, she purifies a human being.',
            kn: 'ತುಲಸಿಯು ನನ್ನನ್ನು ಸದಾ ಎಲ್ಲ ಆಪತ್ತುಗಳಿಂದ ಕಾಪಾಡಲಿ. ಕೀರ್ತಿಸಿದರೂ ಸ್ಮರಿಸಿದರೂ ಅವಳು ಮನುಷ್ಯನನ್ನು ಪವಿತ್ರಗೊಳಿಸುತ್ತಾಳೆ.',
          },
        },
        {
          n: 4,
          text: 'नमामि शिरसा देवीं तुलसीं विलसत्तनुम् ।\nयां दृष्ट्वा पापिनो मर्त्या मुच्यन्ते सर्वकिल्बिषात् ॥',
          meaning: {
            en: 'I bow my head to the goddess Tulasi, of radiant form, seeing whom sinful mortals are freed from every sin.',
            kn: 'ಪ್ರಕಾಶಮಾನ ದೇಹವುಳ್ಳ ತುಲಸೀದೇವಿಗೆ ತಲೆಬಾಗಿ ನಮಿಸುತ್ತೇನೆ; ಅವಳನ್ನು ನೋಡಿದರೆ ಪಾಪಿಗಳೂ ಸರ್ವಪಾಪಗಳಿಂದ ಮುಕ್ತರಾಗುತ್ತಾರೆ.',
          },
        },
        {
          n: 5,
          text: 'तुलस्या रक्षितं सर्वं जगदेतच्चराचरम् ।\nया विनिहन्ति पापानि दृष्ट्वा वा पापिभिर्नरैः ॥',
          meaning: {
            en: 'All this world, moving and unmoving, is protected by Tulasi, who destroys sins even when merely seen by sinful men.',
            kn: 'ಈ ಚರಾಚರ ಜಗತ್ತೆಲ್ಲವೂ ತುಲಸಿಯಿಂದ ರಕ್ಷಿತವಾಗಿದೆ; ಪಾಪಿಗಳು ಅವಳನ್ನು ನೋಡಿದರೂ ಅವಳು ಪಾಪಗಳನ್ನು ನಾಶಮಾಡುತ್ತಾಳೆ.',
          },
        },
        {
          n: 6,
          text: 'नमस्तुलस्यतितरां यस्यै बद्ध्वाञ्जलिं कलौ ।\nकलयन्ति सुखं सर्वं स्त्रियो वैश्यास्तथापरे ॥',
          meaning: {
            en: 'Salutations again and again to Tulasi, to whom, in the Kali age, women, vaishyas and others fold their hands and thereby gain all happiness.',
            kn: 'ಕಲಿಯುಗದಲ್ಲಿ ಸ್ತ್ರೀಯರು, ವೈಶ್ಯರು ಮತ್ತು ಇತರರು ಯಾರಿಗೆ ಕೈಜೋಡಿಸಿ ಸರ್ವ ಸುಖವನ್ನು ಪಡೆಯುತ್ತಾರೋ ಆ ತುಲಸಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          n: 7,
          text: 'तुलस्या नापरं किञ्चिद्दैवतं जगतीतले ।\nयथा पवित्रितो लोको विष्णुसङ्गेन वैष्णवः ॥',
          meaning: {
            en: 'On the face of the earth there is no other deity like Tulasi, by whom the world is purified as the Vaishnava is by his association with Vishnu.',
            kn: 'ಭೂಮಂಡಲದಲ್ಲಿ ತುಲಸಿಗಿಂತ ಬೇರೆ ದೇವತೆಯಿಲ್ಲ; ವೈಷ್ಣವನು ವಿಷ್ಣುಸಂಗದಿಂದ ಪವಿತ್ರನಾಗುವಂತೆ ಲೋಕವು ಅವಳಿಂದ ಪವಿತ್ರವಾಗುತ್ತದೆ.',
          },
        },
        {
          n: 8,
          text: 'तुलस्याः पल्लवं विष्णोः शिरस्यारोपितं कलौ ।\nआरोपयति सर्वाणि श्रेयांसि वरमस्तके ॥',
          meaning: {
            en: 'A Tulasi leaf placed on Vishnu\'s head in the Kali age places all blessings on the head of the worshipper.',
            kn: 'ಕಲಿಯುಗದಲ್ಲಿ ವಿಷ್ಣುವಿನ ಶಿರದ ಮೇಲಿಟ್ಟ ತುಲಸೀ ಚಿಗುರು ಭಕ್ತನ ಶಿರದ ಮೇಲೆ ಸಕಲ ಶ್ರೇಯಸ್ಸುಗಳನ್ನು ಇಡುತ್ತದೆ.',
          },
        },
        {
          n: 9,
          text: 'तुलस्यां सकला देवा वसन्ति सततं यतः ।\nअतस्तामर्चयेल्लोके सर्वान्देवान्समर्चयन् ॥',
          meaning: {
            en: 'Because all the gods always dwell in Tulasi, one should worship her in the world, thereby worshipping all the gods.',
            kn: 'ತುಲಸಿಯಲ್ಲಿ ಸಮಸ್ತ ದೇವತೆಗಳೂ ಸದಾ ನೆಲೆಸಿರುವುದರಿಂದ ಅವಳನ್ನು ಪೂಜಿಸಿದರೆ ಎಲ್ಲ ದೇವತೆಗಳನ್ನೂ ಪೂಜಿಸಿದಂತಾಗುತ್ತದೆ; ಆದ್ದರಿಂದ ಲೋಕದಲ್ಲಿ ಅವಳನ್ನು ಅರ್ಚಿಸಬೇಕು.',
          },
        },
        {
          n: 10,
          text: 'नमस्तुलसि सर्वज्ञे पुरुषोत्तमवल्लभे ।\nपाहि मां सर्वपापेभ्यः सर्वसम्पत्प्रदायिके ॥',
          meaning: {
            en: 'Salutations, O all-knowing Tulasi, beloved of Purushottama: protect me from all sins, O giver of all prosperity.',
            kn: 'ಸರ್ವಜ್ಞೆಯಾದ ತುಲಸಿಯೇ, ಪುರುಷೋತ್ತಮನ ವಲ್ಲಭೆಯೇ, ನಿನಗೆ ನಮಸ್ಕಾರ; ಸರ್ವ ಸಂಪತ್ತನ್ನು ನೀಡುವವಳೇ, ಎಲ್ಲ ಪಾಪಗಳಿಂದ ನನ್ನನ್ನು ಕಾಪಾಡು.',
          },
        },
        {
          n: 11,
          text: 'इति स्तोत्रं पुरा गीतं पुण्डरीकेण धीमता ।\nविष्णुमर्चयता नित्यं शोभनैस्तुलसीदलैः ॥',
          meaning: {
            en: 'This hymn was sung long ago by the wise Pundarika, who worshipped Vishnu daily with beautiful Tulasi leaves.',
            kn: 'ಈ ಸ್ತೋತ್ರವನ್ನು ಹಿಂದೆ ಬುದ್ಧಿವಂತನಾದ ಪುಂಡರೀಕನು, ನಿತ್ಯವೂ ಸುಂದರ ತುಲಸೀದಳಗಳಿಂದ ವಿಷ್ಣುವನ್ನು ಪೂಜಿಸುತ್ತಾ ಹಾಡಿದನು.',
          },
        },
        {
          n: 12,
          text: 'तुलसी श्रीर्महालक्ष्मीर्विद्याविद्या यशस्विनी ।\nधर्म्या धर्मानना देवी देवदेवमनःप्रिया ॥',
          meaning: {
            en: 'Tulasi, Shri, Mahalakshmi, Vidya and Avidya (as knowledge and its absence), Yashasvini (the famous), Dharmya (lawful), Dharmanana (of the face of dharma), the goddess dear to the mind of the God of gods —',
            kn: 'ತುಲಸೀ, ಶ್ರೀ, ಮಹಾಲಕ್ಷ್ಮೀ, ವಿದ್ಯಾ, ಅವಿದ್ಯಾ, ಯಶಸ್ವಿನೀ, ಧರ್ಮ್ಯಾ, ಧರ್ಮಾನನಾ, ದೇವದೇವನ ಮನಸ್ಸಿಗೆ ಪ್ರಿಯಳಾದ ದೇವಿ —',
          },
        },
        {
          n: 13,
          text: 'लक्ष्मीप्रियसखी देवी द्यौर्भूमिरचला चला ।\nषोडशैतानि नामानि तुलस्याः कीर्तयन्नरः ॥',
          meaning: {
            en: 'the goddess dear friend of Lakshmi, Dyau (heaven), Bhumi (earth), the unmoving and the moving: these sixteen names of Tulasi, he who recites —',
            kn: 'ಲಕ್ಷ್ಮಿಯ ಪ್ರಿಯ ಸಖಿಯಾದ ದೇವಿ, ದ್ಯೌ, ಭೂಮಿ, ಅಚಲಾ, ಚಲಾ — ತುಲಸಿಯ ಈ ಹದಿನಾರು ನಾಮಗಳನ್ನು ಕೀರ್ತಿಸುವ ಮನುಷ್ಯನು —',
          },
        },
        {
          n: 14,
          text: 'लभते सुतरां भक्तिमन्ते विष्णुपदं लभेत् ।\nतुलसी भूर्महालक्ष्मीः पद्मिनी श्रीर्हरिप्रिया ॥',
          meaning: {
            en: 'gains very firm devotion and at the end reaches the abode of Vishnu. Tulasi, Bhu, Mahalakshmi, Padmini, Shri, Haripriya (beloved of Hari) —',
            kn: 'ಅತಿಶಯವಾದ ಭಕ್ತಿಯನ್ನು ಪಡೆದು ಕೊನೆಗೆ ವಿಷ್ಣುಪದವನ್ನು ಪಡೆಯುತ್ತಾನೆ. ತುಲಸೀ, ಭೂ, ಮಹಾಲಕ್ಷ್ಮೀ, ಪದ್ಮಿನೀ, ಶ್ರೀ, ಹರಿಪ್ರಿಯಾ —',
          },
        },
        {
          n: 15,
          text: 'तुलसि श्रीसखि शुभे पापहारिणि पुण्यदे ।\nनमस्ते नारदनुते नारायणमनःप्रिये ॥',
          meaning: {
            en: 'O Tulasi, friend of Shri, auspicious one, remover of sin, giver of merit, praised by Narada, dear to the mind of Narayana: salutations to you.',
            kn: 'ತುಲಸಿಯೇ, ಶ್ರೀಸಖಿಯೇ, ಶುಭೆಯೇ, ಪಾಪಹಾರಿಣಿಯೇ, ಪುಣ್ಯದಾಯಿನಿಯೇ, ನಾರದನಿಂದ ಸ್ತುತಿಸಲ್ಪಟ್ಟವಳೇ, ನಾರಾಯಣನ ಮನಸ್ಸಿಗೆ ಪ್ರಿಯಳೇ, ನಿನಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'इति श्रीपुण्डरीककृतं तुलसीस्तोत्रं सम्पूर्णम् ॥',
          meaning: {
            en: 'Thus ends the Tulasi Stotram composed by Sri Pundarika.',
            kn: 'ಹೀಗೆ ಶ್ರೀ ಪುಂಡರೀಕ ರಚಿತ ತುಲಸೀ ಸ್ತೋತ್ರ ಸಂಪೂರ್ಣವಾಯಿತು.',
          },
        },
      ],
    },
    {
      title: 'नित्यपूजा',
      titleEn: 'Daily worship of the Tulasi plant',
      note: 'Done in the morning after the bath and before the day\'s puja. Verse 1 (yan-mule ...) and verse 3 (prasida ...) are the usual prayers of salutation to the Tulasi (the Smarta manual of Balkur gives both). In the Madhva order of Srinivasa Mathad: take clean water to the Tulasi, say verse 2 (ya drishta ...), pour the water at the root, sprinkle a little of the water at the root on yourself and, if it is your family custom, put a little mud from the root on the forehead while saying verse 4 (tulasi shri-sakhi ...), and bow. Verse 5 is said while walking round the plant, as many times as your family does; verse 6 is the closing salutation. Plucking: according to the Smarta manual of Balkur, Tulasi is not plucked on sankranti, the full-moon and new-moon days, dvadashi, at night and at the sandhyas, nor on Sundays, Tuesdays and Fridays.',
      noteKn: 'ಬೆಳಗ್ಗೆ ಸ್ನಾನದ ನಂತರ, ದಿನದ ಪೂಜೆಗೆ ಮೊದಲು ಮಾಡುವ ಕ್ರಮ. ಶ್ಲೋಕ 1 (ಯನ್ಮೂಲೇ...) ಮತ್ತು ಶ್ಲೋಕ 3 (ಪ್ರಸೀದ...) ತುಳಸಿಗೆ ನಮಸ್ಕಾರದ ಸಾಮಾನ್ಯ ಪ್ರಾರ್ಥನೆಗಳು (ಬಾಲ್ಕೂರರ ಸ್ಮಾರ್ತ ಪುಸ್ತಕದಲ್ಲಿ ಇವೆರಡೂ ಇವೆ). ಶ್ರೀನಿವಾಸ ಎಸ್. ಮಠದ ಅವರ ಮಾಧ್ವ ಕ್ರಮದಂತೆ: ಶುದ್ಧ ನೀರನ್ನು ತುಳಸಿಯ ಬಳಿಗೆ ತೆಗೆದುಕೊಂಡು ಹೋಗಿ ಶ್ಲೋಕ 2 (ಯಾ ದೃಷ್ಟಾ...) ಹೇಳಿ ಬುಡಕ್ಕೆ ನೀರೆರೆಯಿರಿ; ಬುಡದ ನೀರನ್ನು ತನ್ನ ಮೇಲೆ ಪ್ರೋಕ್ಷಿಸಿಕೊಂಡು, ಮನೆತನದ ಪದ್ಧತಿಯಿದ್ದರೆ ಬುಡದ ಸ್ವಲ್ಪ ಮೃತ್ತಿಕೆಯನ್ನು ಶ್ಲೋಕ 4 (ತುಲಸಿ ಶ್ರೀಸಖಿ...) ಹೇಳುತ್ತಾ ಹಣೆಗೆ ಧರಿಸಿ, ನಮಸ್ಕರಿಸಿ. ಶ್ಲೋಕ 5 ಪ್ರದಕ್ಷಿಣೆ ಮಾಡುವಾಗ, ಮನೆತನದ ಪದ್ಧತಿಯಷ್ಟು ಬಾರಿ; ಶ್ಲೋಕ 6 ಕೊನೆಯ ನಮಸ್ಕಾರ. ಕೊಯ್ಯುವ ನಿಯಮ: ಬಾಲ್ಕೂರರ ಸ್ಮಾರ್ತ ಪುಸ್ತಕದಂತೆ ಸಂಕ್ರಾಂತಿ, ಹುಣ್ಣಿಮೆ, ಅಮಾವಾಸ್ಯೆ, ದ್ವಾದಶಿ, ರಾತ್ರಿ, ಸಂಧ್ಯಾ ಸಮಯಗಳಲ್ಲಿ ಮತ್ತು ರವಿವಾರ, ಮಂಗಳವಾರ, ಶುಕ್ರವಾರಗಳಲ್ಲಿ ತುಳಸಿ ಕೊಯ್ಯಬಾರದು.',
      verses: [
        {
          text: 'यन्मूले सर्वतीर्थानि यन्मध्ये सर्वदेवताः ।\nयदग्रे सर्ववेदाश्च तुलसि त्वां नमाम्यहम् ॥',
          meaning: {
            en: 'In whose root are all the sacred waters, in whose middle all the gods, at whose tip all the Vedas: O Tulasi, I bow to you.',
            kn: 'ಯಾರ ಬುಡದಲ್ಲಿ ಸರ್ವತೀರ್ಥಗಳು, ಮಧ್ಯದಲ್ಲಿ ಸರ್ವದೇವತೆಗಳು, ತುದಿಯಲ್ಲಿ ಸರ್ವವೇದಗಳು ಇವೆಯೋ ಆ ತುಲಸಿಯೇ, ನಿನಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'या दृष्टा निखिलाघसङ्घशमनी स्पृष्टा वपुःपावनी\nरोगाणामभिवन्दिता निरसनी सिक्तान्तकत्रासिनी ।\nप्रत्यासत्तिविधायिनी भगवतः कृष्णस्य संरोपिता\nन्यस्ता तच्चरणे विमुक्तिफलदा तस्यै तुलस्यै नमः ॥',
          meaning: {
            en: 'Salutations to that Tulasi who, when seen, quells the whole mass of sins; when touched, purifies the body; when worshipped, drives away diseases; when watered, frightens Death; when planted, brings one near to the Lord Krishna; and when offered at his feet, gives the fruit of liberation.',
            kn: 'ಯಾವ ತುಲಸಿಯನ್ನು ನೋಡಿದರೆ ಸಮಸ್ತ ಪಾಪರಾಶಿ ಶಮನವಾಗುತ್ತದೋ, ಮುಟ್ಟಿದರೆ ದೇಹ ಪವಿತ್ರವಾಗುತ್ತದೋ, ವಂದಿಸಿದರೆ ರೋಗಗಳು ದೂರವಾಗುತ್ತವೋ, ನೀರೆರೆದರೆ ಯಮನಿಗೆ ಭಯವಾಗುತ್ತದೋ, ನೆಟ್ಟರೆ ಭಗವಾನ್ ಕೃಷ್ಣನ ಸಮೀಪ ಸಿಗುತ್ತದೋ, ಅವನ ಪಾದದಲ್ಲಿ ಅರ್ಪಿಸಿದರೆ ಮೋಕ್ಷಫಲ ನೀಡುತ್ತದೋ — ಆ ತುಲಸಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'प्रसीद तुलसीदेवि प्रसीद हरिवल्लभे ।\nक्षीरोदमथनोद्भूते तुलसि त्वां नमाम्यहम् ॥',
          meaning: {
            en: 'Be gracious, goddess Tulasi; be gracious, beloved of Hari; O Tulasi, born from the churning of the milk ocean, I bow to you.',
            kn: 'ತುಲಸೀದೇವಿಯೇ ಪ್ರಸನ್ನಳಾಗು; ಹರಿವಲ್ಲಭೆಯೇ ಪ್ರಸನ್ನಳಾಗು; ಕ್ಷೀರಸಾಗರ ಮಥನದಿಂದ ಹುಟ್ಟಿದ ತುಲಸಿಯೇ, ನಿನಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'तुलसि श्रीसखि शुभे पापहारिणि पुण्यदे ।\nनमस्ते नारदनुते नारायणमनःप्रिये ॥',
          meaning: {
            en: 'O Tulasi, friend of Shri, auspicious one, remover of sin, giver of merit, praised by Narada, dear to the mind of Narayana: salutations to you.',
            kn: 'ತುಲಸಿಯೇ, ಶ್ರೀಸಖಿಯೇ, ಶುಭೆಯೇ, ಪಾಪಹಾರಿಣಿಯೇ, ಪುಣ್ಯದಾಯಿನಿಯೇ, ನಾರದನಿಂದ ಸ್ತುತಿಸಲ್ಪಟ್ಟವಳೇ, ನಾರಾಯಣನ ಮನಸ್ಸಿಗೆ ಪ್ರಿಯಳೇ, ನಿನಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'यानि कानि च पापानि जन्मान्तरकृतानि च ।\nतानि तानि विनश्यन्ति प्रदक्षिणपदे पदे ॥',
          meaning: {
            en: 'Whatever sins have been committed, even in other births, all of them are destroyed at every step of the circumambulation.',
            kn: 'ಯಾವ ಯಾವ ಪಾಪಗಳನ್ನು ಬೇರೆ ಜನ್ಮಗಳಲ್ಲಿ ಮಾಡಿದ್ದರೂ ಅವೆಲ್ಲವೂ ಪ್ರದಕ್ಷಿಣೆಯ ಒಂದೊಂದು ಹೆಜ್ಜೆಯಲ್ಲೂ ನಾಶವಾಗುತ್ತವೆ.',
          },
        },
        {
          text: 'नमस्तुलसि कल्याणि नमो विष्णुप्रिये शुभे ।\nनमो मोक्षप्रदे देवि नमः सम्पत्प्रदायिके ॥',
          meaning: {
            en: 'Salutations, O Tulasi, auspicious one; salutations, beloved of Vishnu, the fortunate; salutations, goddess who give liberation; salutations, giver of prosperity.',
            kn: 'ಕಲ್ಯಾಣಿಯಾದ ತುಲಸಿಯೇ ನಮಸ್ಕಾರ; ವಿಷ್ಣುಪ್ರಿಯೆಯೇ, ಶುಭೆಯೇ ನಮಸ್ಕಾರ; ಮೋಕ್ಷ ನೀಡುವ ದೇವಿಯೇ ನಮಸ್ಕಾರ; ಸಂಪತ್ತನ್ನು ನೀಡುವವಳೇ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'उत्थानद्वादशी — तुलसीविवाहः',
      titleEn: 'Utthana Dvadashi: the day of Tulasi Vivaha',
      note: 'Karttika shukla dvadashi, when Sri Hari is believed to awake from his four months of Chaturmasya sleep, is called Utthana (Prabodhini) Dvadashi. It is also known as the day of Tulasi Vivaha, when Tulasi is wedded to Sri Krishna (Vishnu, in the form of a Shaligrama); with this day the Hindu marriage season is said to open. Homes are decorated with flowers and lamps. The prayer below is said to awaken the Lord, and the Tulasi Stotram and the eight names above are recited and Tulasi is worshipped that day. The complete Tulasi Vivaha prayoga (kanyadana, mangalashtaka, arati) is not given here; follow your family priest or matha manual. Since this is a dvadashi, observe the parana timing for the day of Ekadashi vrata (see the Panchanga screen).',
      noteKn: 'ಕಾರ್ತಿಕ ಶುಕ್ಲ ದ್ವಾದಶಿಯಂದು ಶ್ರೀಹರಿ ಚಾತುರ್ಮಾಸ್ಯದ ನಾಲ್ಕು ತಿಂಗಳ ನಿದ್ರೆಯಿಂದ ಏಳುತ್ತಾನೆಂಬ ನಂಬಿಕೆಯಿಂದ ಇದನ್ನು ಉತ್ಥಾನ (ಪ್ರಬೋಧಿನೀ) ದ್ವಾದಶಿ ಎನ್ನುತ್ತಾರೆ. ಇದನ್ನು ತುಲಸೀ ವಿವಾಹದ ದಿನವೆಂದೂ ಕರೆಯುತ್ತಾರೆ — ಅಂದು ತುಳಸಿಯನ್ನು ಶ್ರೀಕೃಷ್ಣನಿಗೆ (ವಿಷ್ಣುವಿಗೆ, ಶಾಲಿಗ್ರಾಮ ರೂಪದಲ್ಲಿ) ವಿವಾಹ ಮಾಡಿಸುತ್ತಾರೆ; ಈ ದಿನದಿಂದ ವಿವಾಹದ ಋತು ಆರಂಭವಾಗುತ್ತದೆ ಎನ್ನುತ್ತಾರೆ. ಮನೆಗಳನ್ನು ಹೂವು, ದೀಪಗಳಿಂದ ಅಲಂಕರಿಸುತ್ತಾರೆ. ಭಗವಂತನನ್ನು ಎಬ್ಬಿಸಲು ಕೆಳಗಿನ ಪ್ರಾರ್ಥನೆಯನ್ನು ಹೇಳಿ, ಅಂದು ತುಲಸೀ ಸ್ತೋತ್ರ ಮತ್ತು ಎಂಟು ನಾಮಗಳನ್ನು ಪಠಿಸಿ ತುಳಸಿಯನ್ನು ಪೂಜಿಸುತ್ತಾರೆ. ಸಂಪೂರ್ಣ ತುಲಸೀ ವಿವಾಹ ಪ್ರಯೋಗ (ಕನ್ಯಾದಾನ, ಮಂಗಳಾಷ್ಟಕ, ಆರತಿ) ಇಲ್ಲಿ ಕೊಟ್ಟಿಲ್ಲ; ಮನೆತನದ ಪುರೋಹಿತರು ಅಥವಾ ಮಠದ ಪುಸ್ತಕದಂತೆ ಮಾಡಿ. ಇದು ದ್ವಾದಶಿಯಾದ್ದರಿಂದ ಏಕಾದಶೀ ವ್ರತದ ಪಾರಣೆಯ ಸಮಯವನ್ನು ಪಾಲಿಸಿ (ಪಂಚಾಂಗ ಪರದೆ ನೋಡಿ).',
      verses: [
        {
          text: 'उत्तिष्ठोत्तिष्ठ गोविन्द उत्तिष्ठ गरुडध्वज ।\nउत्तिष्ठ कमलाकान्त त्रैलोक्यं मङ्गलं कुरु ॥',
          meaning: {
            en: 'Arise, arise, O Govinda; arise, O bearer of the Garuda banner; arise, O beloved of Kamala (Lakshmi), and make the three worlds auspicious.',
            kn: 'ಏಳು ಗೋವಿಂದ, ಏಳು; ಗರುಡಧ್ವಜನೇ ಏಳು; ಕಮಲಾಕಾಂತನೇ ಏಳು; ಮೂರು ಲೋಕಗಳಿಗೂ ಮಂಗಳವನ್ನು ಮಾಡು.',
          },
        },
      ],
    },
  ],
};
