/**
 * Śrī Viṣṇu Sahasranāma Stotram (Mahābhārata, Anuśāsana Parva).
 *
 * Follows the common printed recitation tradition (Gita Press / South Indian
 * editions). Name-śloka readings follow the text commented on by Śaṅkara
 * (e.g. 13 "शाश्वतस्थाणुः", 92 "नियन्ताऽनियमोऽयमः").
 *
 * PROOFREADING: written from memory, then collated (Nov 2026) against online
 * witnesses: sa.wikisource.org (विष्णुसहस्रनामस्तोत्रम्), stotranidhi.com
 * (Devanagari, from "Prabhata Stotranidhi"), swami-krishnananda.org (Divine
 * Life Society), shlokam.org, hindupad.com (Kannada), Project Gutenberg #9000
 * (transliteration) and the BORI critical edition (GRETIL, MBh 13.135) as a
 * tie-breaker. All 108 ślokas end where the witnesses' ॥n॥ fall. Known
 * variants kept: 12 सम्मितः, 13 शाश्वतस्थाणुः, 66 विधेयात्मा, 87 अमृताशः,
 * 88 न्यग्रोधोदुम्बरः, 92 नियन्ताऽनियमोऽयमः; pūrva-bhāga 10 देवतानां;
 * uttara-bhāga 17 परिकल्पते, 25 भुवनत्रयम्. Still to be checked against a
 * printed edition (Gita Press).
 */
import type { Mantra } from '../types';

export const vishnuSahasranama: Mantra = {
  id: 'vishnu-sahasranama',
  title: 'श्रीविष्णुसहस्रनामस्तोत्रम्',
  titleEn: 'Vishnu Sahasranama',
  category: 'sahasranama',
  deity: 'Viṣṇu',
  source: 'Mahābhārata, Anuśāsana Parva',
  summary:
    'The thousand names of Lord Viṣṇu, taught by Bhīṣma to Yudhiṣṭhira in the Anuśāsana Parva of the Mahābhārata. Includes the opening prayers, pūrva-bhāga, viniyoga and dhyānam, the 108 ślokas of the names, and the phala-śruti.',
  summaryKn:
    'ಮಹಾಭಾರತದ ಅನುಶಾಸನ ಪರ್ವದಲ್ಲಿ ಭೀಷ್ಮರು ಯುಧಿಷ್ಠಿರನಿಗೆ ಉಪದೇಶಿಸಿದ ಶ್ರೀವಿಷ್ಣುವಿನ ಸಾವಿರ ನಾಮಗಳು. ಆರಂಭದ ಪ್ರಾರ್ಥನೆಗಳು, ಪೂರ್ವಭಾಗ, ವಿನಿಯೋಗ, ಧ್ಯಾನ, ನಾಮಗಳ ೧೦೮ ಶ್ಲೋಕಗಳು ಮತ್ತು ಫಲಶ್ರುತಿ ಇದರಲ್ಲಿವೆ.',
  difficulty: 'advanced',
  completeness: 'complete',
  contentNote:
    'The optional nyāsa (karanyāsa / aṅganyāsa) and pañcapūjā printed in some editions, and the closing Mahābhārata colophon (इति श्रीमहाभारते …), are not included.',
  sections: [
    // ───────────────────────────── Opening prayers ─────────────────────────────
    {
      titleEn: 'Opening Prayers',
      verses: [
        {
          n: 1,
          text: 'शुक्लाम्बरधरं विष्णुं शशिवर्णं चतुर्भुजम् ।\nप्रसन्नवदनं ध्यायेत् सर्वविघ्नोपशान्तये ॥',
          meaning: {
            en: 'I meditate on Viṣṇu, clad in white, bright as the moon, four-armed and gracious of face, so that every obstacle may be removed.',
            kn: 'ಬಿಳಿಯ ವಸ್ತ್ರ ಧರಿಸಿದ, ಚಂದ್ರನಂತೆ ಬೆಳಗುವ, ನಾಲ್ಕು ಭುಜಗಳುಳ್ಳ, ಪ್ರಸನ್ನ ಮುಖದ ವಿಷ್ಣುವನ್ನು ಎಲ್ಲ ವಿಘ್ನಗಳ ಶಾಂತಿಗಾಗಿ ಧ್ಯಾನಿಸಬೇಕು.',
          },
        },
        {
          n: 2,
          text: 'यस्य द्विरदवक्त्राद्याः पारिषद्याः परः शतम् ।\nविघ्नं निघ्नन्ति सततं विष्वक्सेनं तमाश्रये ॥',
          meaning: {
            en: 'I take refuge in Viṣvaksena, whose attendants, more than a hundred and led by the elephant-faced one, ceaselessly destroy obstacles.',
            kn: 'ಗಜಮುಖನೇ ಮೊದಲಾದ ನೂರಕ್ಕೂ ಹೆಚ್ಚು ಪರಿವಾರದವರು ಸದಾ ವಿಘ್ನಗಳನ್ನು ನಾಶಮಾಡುವರೋ ಆ ವಿಷ್ವಕ್ಸೇನನನ್ನು ಆಶ್ರಯಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 3,
          text: 'व्यासं वसिष्ठनप्तारं शक्तेः पौत्रमकल्मषम् ।\nपराशरात्मजं वन्दे शुकतातं तपोनिधिम् ॥',
          meaning: {
            en: 'I bow to Vyāsa, the stainless treasure of austerity: great-grandson of Vasiṣṭha, grandson of Śakti, son of Parāśara and father of Śuka.',
            kn: 'ವಸಿಷ್ಠರ ಮರಿಮಗ, ಶಕ್ತಿಯ ಮೊಮ್ಮಗ, ಪರಾಶರರ ಮಗ, ಶುಕರ ತಂದೆ, ನಿಷ್ಕಳಂಕ, ತಪಸ್ಸಿನ ನಿಧಿಯಾದ ವ್ಯಾಸರಿಗೆ ವಂದಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 4,
          text: 'व्यासाय विष्णुरूपाय व्यासरूपाय विष्णवे ।\nनमो वै ब्रह्मनिधये वासिष्ठाय नमो नमः ॥',
          meaning: {
            en: 'Salutations to Vyāsa who is Viṣṇu in form, and to Viṣṇu who appears as Vyāsa; again and again salutations to that treasure of the Veda, born in Vasiṣṭha\'s line.',
            kn: 'ವಿಷ್ಣುರೂಪನಾದ ವ್ಯಾಸರಿಗೂ ವ್ಯಾಸರೂಪನಾದ ವಿಷ್ಣುವಿಗೂ ನಮಸ್ಕಾರ. ವೇದಗಳ ನಿಧಿಯಾದ ವಸಿಷ್ಠವಂಶದ ಆ ಮಹರ್ಷಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          n: 5,
          text: 'अविकाराय शुद्धाय नित्याय परमात्मने ।\nसदैकरूपरूपाय विष्णवे सर्वजिष्णवे ॥',
          meaning: {
            en: 'Salutations to Viṣṇu, changeless, pure, eternal, the Supreme Self, ever of one nature in all his forms, the conqueror of all.',
            kn: 'ವಿಕಾರವಿಲ್ಲದ, ಶುದ್ಧನಾದ, ನಿತ್ಯನಾದ ಪರಮಾತ್ಮನಿಗೆ, ಎಲ್ಲ ರೂಪಗಳಲ್ಲೂ ಒಂದೇ ಸ್ವರೂಪನಾದ, ಎಲ್ಲವನ್ನೂ ಗೆಲ್ಲುವ ವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          n: 6,
          text: 'यस्य स्मरणमात्रेण जन्मसंसारबन्धनात् ।\nविमुच्यते नमस्तस्मै विष्णवे प्रभविष्णवे ॥',
          meaning: {
            en: 'By merely remembering him one is freed from the bondage of birth and worldly life; salutations to that mighty Viṣṇu.',
            kn: 'ಯಾರನ್ನು ಸ್ಮರಿಸಿದ ಮಾತ್ರಕ್ಕೆ ಜನ್ಮ-ಸಂಸಾರದ ಬಂಧನದಿಂದ ಬಿಡುಗಡೆಯಾಗುವುದೋ ಆ ಸರ್ವಶಕ್ತನಾದ ವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        { text: 'ॐ नमो विष्णवे प्रभविष्णवे ।' },
      ],
    },

    // ─────────────────────────────── Pūrva-bhāga ───────────────────────────────
    {
      title: 'पूर्वभागः',
      titleEn: 'Pūrva-bhāga',
      verses: [
        { text: 'श्रीवैशम्पायन उवाच' },
        {
          n: 1,
          text: 'श्रुत्वा धर्मानशेषेण पावनानि च सर्वशः ।\nयुधिष्ठिरः शान्तनवं पुनरेवाभ्यभाषत ॥',
          meaning: {
            en: 'Having heard in full all the teachings on dharma and the purifying rites, Yudhiṣṭhira spoke again to Bhīṣma, the son of Śantanu.',
            kn: 'ಎಲ್ಲ ಧರ್ಮಗಳನ್ನೂ ಪಾವನವಾದ ಉಪದೇಶಗಳನ್ನೂ ಸಂಪೂರ್ಣವಾಗಿ ಕೇಳಿದ ನಂತರ ಯುಧಿಷ್ಠಿರನು ಶಂತನುವಿನ ಮಗನಾದ ಭೀಷ್ಮರನ್ನು ಮತ್ತೆ ಕೇಳಿದನು.',
          },
        },
        { text: 'युधिष्ठिर उवाच' },
        {
          n: 2,
          text: 'किमेकं दैवतं लोके किं वाप्येकं परायणम् ।\nस्तुवन्तः कं कमर्चन्तः प्राप्नुयुर्मानवाः शुभम् ॥',
          meaning: {
            en: 'Who is the one God in the world? What is the one highest refuge? By praising whom and worshipping whom do people attain the good?',
            kn: 'ಲೋಕದಲ್ಲಿ ಏಕೈಕ ದೇವರು ಯಾರು? ಏಕೈಕ ಪರಮ ಆಶ್ರಯ ಯಾವುದು? ಯಾರನ್ನು ಸ್ತುತಿಸಿ, ಯಾರನ್ನು ಪೂಜಿಸಿ ಮಾನವರು ಶುಭವನ್ನು ಪಡೆಯುವರು?',
          },
        },
        {
          n: 3,
          text: 'को धर्मः सर्वधर्माणां भवतः परमो मतः ।\nकिं जपन्मुच्यते जन्तुर्जन्मसंसारबन्धनात् ॥',
          meaning: {
            en: 'Which dharma do you hold to be the highest of all? By chanting what is a living being freed from the bondage of birth and worldly life?',
            kn: 'ಎಲ್ಲ ಧರ್ಮಗಳಲ್ಲಿ ನಿಮ್ಮ ಮತದಲ್ಲಿ ಶ್ರೇಷ್ಠ ಧರ್ಮ ಯಾವುದು? ಏನನ್ನು ಜಪಿಸಿ ಜೀವಿಯು ಜನ್ಮ-ಸಂಸಾರದ ಬಂಧನದಿಂದ ಬಿಡುಗಡೆ ಹೊಂದುವನು?',
          },
        },
        { text: 'भीष्म उवाच' },
        {
          n: 4,
          text: 'जगत्प्रभुं देवदेवमनन्तं पुरुषोत्तमम् ।\nस्तुवन्नामसहस्रेण पुरुषः सततोत्थितः ॥',
          meaning: {
            en: 'Bhīṣma: A person who is ever diligent and praises with the thousand names the Lord of the world, the God of gods, the infinite Supreme Person,',
            kn: 'ಭೀಷ್ಮರು ಹೇಳಿದರು: ಜಗತ್ತಿನ ಒಡೆಯನೂ ದೇವದೇವನೂ ಅನಂತನೂ ಆದ ಪುರುಷೋತ್ತಮನನ್ನು ಸಾವಿರ ನಾಮಗಳಿಂದ ಸದಾ ಶ್ರದ್ಧೆಯಿಂದ ಸ್ತುತಿಸುವವನು,',
          },
        },
        {
          n: 5,
          text: 'तमेव चार्चयन्नित्यं भक्त्या पुरुषमव्ययम् ।\nध्यायन् स्तुवन्नमस्यंश्च यजमानस्तमेव च ॥',
          meaning: {
            en: 'who daily worships that same imperishable Person with devotion, meditating on him, praising him, bowing to him and offering to him alone,',
            kn: 'ಅದೇ ಅವ್ಯಯ ಪುರುಷನನ್ನು ಭಕ್ತಿಯಿಂದ ನಿತ್ಯವೂ ಅರ್ಚಿಸುತ್ತಾ, ಧ್ಯಾನಿಸುತ್ತಾ, ಸ್ತುತಿಸುತ್ತಾ, ನಮಿಸುತ್ತಾ, ಅವನನ್ನೇ ಆರಾಧಿಸುವವನು,',
          },
        },
        {
          n: 6,
          text: 'अनादिनिधनं विष्णुं सर्वलोकमहेश्वरम् ।\nलोकाध्यक्षं स्तुवन्नित्यं सर्वदुःखातिगो भवेत् ॥',
          meaning: {
            en: 'and who always praises Viṣṇu, without beginning or end, the great Lord of all worlds and their overseer, passes beyond all sorrow.',
            kn: 'ಆದಿ-ಅಂತ್ಯಗಳಿಲ್ಲದ, ಸರ್ವಲೋಕಗಳ ಮಹೇಶ್ವರನಾದ, ಲೋಕಗಳ ಅಧ್ಯಕ್ಷನಾದ ವಿಷ್ಣುವನ್ನು ನಿತ್ಯ ಸ್ತುತಿಸುವವನು ಎಲ್ಲ ದುಃಖಗಳನ್ನು ದಾಟುವನು.',
          },
        },
        {
          n: 7,
          text: 'ब्रह्मण्यं सर्वधर्मज्ञं लोकानां कीर्तिवर्धनम् ।\nलोकनाथं महद्भूतं सर्वभूतभवोद्भवम् ॥',
          meaning: {
            en: 'He is devoted to the Veda and its knowers, knows every dharma, increases the fame of the worlds; he is the Lord of the world, the great Being, the source from which all beings arise.',
            kn: 'ಅವನು ವೇದ ಮತ್ತು ಬ್ರಾಹ್ಮಣರಿಗೆ ಹಿತನು, ಎಲ್ಲ ಧರ್ಮಗಳನ್ನು ಬಲ್ಲವನು, ಲೋಕಗಳ ಕೀರ್ತಿಯನ್ನು ಹೆಚ್ಚಿಸುವವನು; ಲೋಕನಾಥನು, ಮಹಾ ತತ್ತ್ವನು, ಎಲ್ಲ ಜೀವಿಗಳ ಹುಟ್ಟಿಗೆ ಮೂಲನು.',
          },
        },
        {
          n: 8,
          text: 'एष मे सर्वधर्माणां धर्मोऽधिकतमो मतः ।\nयद्भक्त्या पुण्डरीकाक्षं स्तवैरर्चेन्नरः सदा ॥',
          meaning: {
            en: 'This, I hold, is the greatest of all dharmas: that a person should always worship the lotus-eyed Lord with hymns, in devotion.',
            kn: 'ಮನುಷ್ಯನು ಭಕ್ತಿಯಿಂದ ಕಮಲನಯನನಾದ ಭಗವಂತನನ್ನು ಸ್ತೋತ್ರಗಳಿಂದ ಸದಾ ಅರ್ಚಿಸುವುದೇ ಎಲ್ಲ ಧರ್ಮಗಳಲ್ಲಿ ಶ್ರೇಷ್ಠವೆಂದು ನನ್ನ ಮತ.',
          },
        },
        {
          n: 9,
          text: 'परमं यो महत्तेजः परमं यो महत्तपः ।\nपरमं यो महद्ब्रह्म परमं यः परायणम् ॥',
          meaning: {
            en: 'He is the supreme great light, the supreme great austerity, the supreme great Brahman and the supreme refuge.',
            kn: 'ಅವನೇ ಪರಮ ಮಹಾ ತೇಜಸ್ಸು, ಪರಮ ಮಹಾ ತಪಸ್ಸು, ಪರಮ ಮಹಾ ಬ್ರಹ್ಮ, ಪರಮ ಆಶ್ರಯ.',
          },
        },
        {
          n: 10,
          text: 'पवित्राणां पवित्रं यो मङ्गलानां च मङ्गलम् ।\nदैवतं देवतानां च भूतानां योऽव्ययः पिता ॥',
          meaning: {
            en: 'He is the purest of all pure things, the most auspicious of auspicious things, the God of the gods and the undying father of all beings.',
            kn: 'ಪವಿತ್ರವಾದವುಗಳಲ್ಲಿ ಅತಿ ಪವಿತ್ರನು, ಮಂಗಳಗಳಲ್ಲಿ ಮಂಗಳನು, ದೇವತೆಗಳಿಗೂ ದೇವನು, ಎಲ್ಲ ಜೀವಿಗಳ ನಾಶವಿಲ್ಲದ ತಂದೆ ಅವನೇ.',
          },
        },
        {
          n: 11,
          text: 'यतः सर्वाणि भूतानि भवन्त्यादियुगागमे ।\nयस्मिंश्च प्रलयं यान्ति पुनरेव युगक्षये ॥',
          meaning: {
            en: 'From him all beings come forth when the first age begins, and into him they dissolve again when the age ends.',
            kn: 'ಯುಗದ ಆರಂಭದಲ್ಲಿ ಎಲ್ಲ ಜೀವಿಗಳೂ ಅವನಿಂದಲೇ ಹುಟ್ಟುತ್ತವೆ; ಯುಗದ ಅಂತ್ಯದಲ್ಲಿ ಮತ್ತೆ ಅವನಲ್ಲೇ ಲಯ ಹೊಂದುತ್ತವೆ.',
          },
        },
        {
          n: 12,
          text: 'तस्य लोकप्रधानस्य जगन्नाथस्य भूपते ।\nविष्णोर्नामसहस्रं मे शृणु पापभयापहम् ॥',
          meaning: {
            en: 'Hear from me, O king, the thousand names of Viṣṇu, the chief of the world and Lord of the universe, which take away sin and fear.',
            kn: 'ರಾಜನೇ, ಲೋಕಪ್ರಧಾನನೂ ಜಗನ್ನಾಥನೂ ಆದ ವಿಷ್ಣುವಿನ, ಪಾಪ-ಭಯಗಳನ್ನು ಹೋಗಲಾಡಿಸುವ ಸಾವಿರ ನಾಮಗಳನ್ನು ನನ್ನಿಂದ ಕೇಳು.',
          },
        },
        {
          n: 13,
          text: 'यानि नामानि गौणानि विख्यातानि महात्मनः ।\nऋषिभिः परिगीतानि तानि वक्ष्यामि भूतये ॥',
          meaning: {
            en: 'I shall recite, for the good of all, those famous names of the Great One that arise from his qualities and have been sung by the sages.',
            kn: 'ಆ ಮಹಾತ್ಮನ ಗುಣಗಳಿಂದ ಬಂದ, ಪ್ರಸಿದ್ಧವಾದ, ಋಷಿಗಳು ಹಾಡಿದ ನಾಮಗಳನ್ನು ಎಲ್ಲರ ಶ್ರೇಯಸ್ಸಿಗಾಗಿ ಹೇಳುತ್ತೇನೆ.',
          },
        },
        {
          n: 14,
          text: 'ऋषिर्नाम्नां सहस्रस्य वेदव्यासो महामुनिः ।\nछन्दोऽनुष्टुप् तथा देवो भगवान् देवकीसुतः ॥',
          meaning: {
            en: 'The seer of the thousand names is the great sage Vedavyāsa, the metre is anuṣṭubh, and the deity is the Lord, the son of Devakī.',
            kn: 'ಈ ಸಹಸ್ರನಾಮಕ್ಕೆ ಮಹಾಮುನಿ ವೇದವ್ಯಾಸರು ಋಷಿ, ಅನುಷ್ಟುಪ್ ಛಂದಸ್ಸು, ದೇವಕೀಸುತನಾದ ಭಗವಂತನು ದೇವತೆ.',
          },
        },
        {
          n: 15,
          text: 'अमृतांशूद्भवो बीजं शक्तिर्देवकिनन्दनः ।\nत्रिसामा हृदयं तस्य शान्त्यर्थे विनियुज्यते ॥',
          meaning: {
            en: 'Its seed is the name Amṛtāṃśūdbhava, its power is Devakīnandana and its heart is Trisāmā; it is recited for peace.',
            kn: 'ಅಮೃತಾಂಶೂದ್ಭವ ಎಂಬ ನಾಮವೇ ಬೀಜ, ದೇವಕೀನಂದನ ಶಕ್ತಿ, ತ್ರಿಸಾಮಾ ಹೃದಯ; ಶಾಂತಿಗಾಗಿ ಇದರ ವಿನಿಯೋಗ.',
          },
        },
        {
          n: 16,
          text: 'विष्णुं जिष्णुं महाविष्णुं प्रभविष्णुं महेश्वरम् ।\nअनेकरूपदैत्यान्तं नमामि पुरुषोत्तमम् ॥',
          meaning: {
            en: 'I bow to the Supreme Person: Viṣṇu, the victorious, the great Viṣṇu, the mighty, the great Lord, who takes many forms and destroys the demons.',
            kn: 'ವಿಷ್ಣುವೂ ಜಯಶೀಲನೂ ಮಹಾವಿಷ್ಣುವೂ ಸರ್ವಶಕ್ತನೂ ಮಹೇಶ್ವರನೂ ಅನೇಕ ರೂಪಗಳನ್ನು ತಾಳಿ ದೈತ್ಯರನ್ನು ಸಂಹರಿಸುವವನೂ ಆದ ಪುರುಷೋತ್ತಮನಿಗೆ ನಮಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },

    // ──────────────────────────────── Viniyoga ────────────────────────────────
    {
      title: 'विनियोगः',
      titleEn: 'Viniyoga (Ṛṣi, Chandas, Devatā)',
      verses: [
        {
          text:
            'अस्य श्रीविष्णोर्दिव्यसहस्रनामस्तोत्रमहामन्त्रस्य ।\n' +
            'श्रीवेदव्यासो भगवान् ऋषिः ।\n' +
            'अनुष्टुप् छन्दः ।\n' +
            'श्रीमहाविष्णुः परमात्मा श्रीमन्नारायणो देवता ।\n' +
            'अमृतांशूद्भवो भानुरिति बीजम् ।\n' +
            'देवकीनन्दनः स्रष्टेति शक्तिः ।\n' +
            'उद्भवः क्षोभणो देव इति परमो मन्त्रः ।\n' +
            'शङ्खभृन्नन्दकी चक्रीति कीलकम् ।\n' +
            'शार्ङ्गधन्वा गदाधर इत्यस्त्रम् ।\n' +
            'रथाङ्गपाणिरक्षोभ्य इति नेत्रम् ।\n' +
            'त्रिसामा सामगः सामेति कवचम् ।\n' +
            'आनन्दं परब्रह्मेति योनिः ।\n' +
            'ऋतुः सुदर्शनः काल इति दिग्बन्धः ।\n' +
            'श्रीविश्वरूप इति ध्यानम् ।\n' +
            'श्रीमहाविष्णुप्रीत्यर्थे सहस्रनामजपे विनियोगः ॥',
          meaning: {
            en: 'This sets out the great mantra of the thousand divine names of Viṣṇu. Its seer is Vedavyāsa, its metre anuṣṭubh, and its deity Mahāviṣṇu, the Supreme Self, Śrīman Nārāyaṇa. Lines from the hymn itself serve as its seed, power, mantra, key, weapon, eye, armour, source and binding of the quarters, the meditation is on the Cosmic Form, and the japa is undertaken to please Mahāviṣṇu.',
            kn: 'ಇದು ಶ್ರೀವಿಷ್ಣುಸಹಸ್ರನಾಮ ಮಹಾಮಂತ್ರದ ವಿನಿಯೋಗ. ವೇದವ್ಯಾಸರು ಋಷಿ, ಅನುಷ್ಟುಪ್ ಛಂದಸ್ಸು, ಪರಮಾತ್ಮನಾದ ಶ್ರೀಮನ್ನಾರಾಯಣನೇ ದೇವತೆ. ಸ್ತೋತ್ರದ ನಾಮಗಳೇ ಇದರ ಬೀಜ, ಶಕ್ತಿ, ಮಂತ್ರ, ಕೀಲಕ, ಅಸ್ತ್ರ, ನೇತ್ರ, ಕವಚ, ಯೋನಿ ಮತ್ತು ದಿಗ್ಬಂಧಗಳಾಗಿವೆ; ವಿಶ್ವರೂಪನ ಧ್ಯಾನ. ಮಹಾವಿಷ್ಣುವಿನ ಪ್ರೀತಿಗಾಗಿ ಈ ಜಪ.',
          },
        },
      ],
    },

    // ───────────────────────────────── Dhyānam ─────────────────────────────────
    {
      title: 'ध्यानम्',
      titleEn: 'Dhyānam (Meditation)',
      verses: [
        {
          n: 1,
          text:
            'क्षीरोदन्वत्प्रदेशे शुचिमणिविलसत्सैकते मौक्तिकानां\n' +
            'मालाकॢप्तासनस्थः स्फटिकमणिनिभैर्मौक्तिकैर्मण्डिताङ्गः ।\n' +
            'शुभ्रैरभ्रैरदभ्रैरुपरिविरचितैर्मुक्तपीयूषवर्षैः\n' +
            'आनन्दी नः पुनीयादरिनलिनगदाशङ्खपाणिर्मुकुन्दः ॥',
          meaning: {
            en: 'On the shore of the milk ocean, where the sands sparkle with pure gems, Mukunda sits on a seat made of pearl garlands, his body adorned with crystal-bright pearls, under white clouds that rain down nectar. May that joyful Lord, holding discus, lotus, mace and conch, purify us.',
            kn: 'ಕ್ಷೀರಸಾಗರದ ತೀರದಲ್ಲಿ, ಶುಭ್ರ ರತ್ನಗಳಿಂದ ಹೊಳೆಯುವ ಮರಳಿನ ಮೇಲೆ, ಮುತ್ತಿನ ಮಾಲೆಗಳ ಆಸನದಲ್ಲಿ ಕುಳಿತು, ಸ್ಫಟಿಕದಂತೆ ಹೊಳೆಯುವ ಮುತ್ತುಗಳಿಂದ ಅಲಂಕೃತನಾಗಿ, ಅಮೃತ ಸುರಿಸುವ ಬಿಳಿಯ ಮೋಡಗಳ ಕೆಳಗೆ ಇರುವ, ಚಕ್ರ-ಕಮಲ-ಗದೆ-ಶಂಖಧಾರಿಯಾದ ಆನಂದಮಯ ಮುಕುಂದನು ನಮ್ಮನ್ನು ಪಾವನಗೊಳಿಸಲಿ.',
          },
        },
        {
          n: 2,
          text:
            'भूः पादौ यस्य नाभिर्वियदसुरनिलश्चन्द्रसूर्यौ च नेत्रे\n' +
            'कर्णावाशाः शिरो द्यौर्मुखमपि दहनो यस्य वास्तेयमब्धिः ।\n' +
            'अन्तःस्थं यस्य विश्वं सुरनरखगगोभोगिगन्धर्वदैत्यैः\n' +
            'चित्रं रंरम्यते तं त्रिभुवनवपुषं विष्णुमीशं नमामि ॥',
          meaning: {
            en: 'His feet are the earth, his navel the sky, his breath the wind, his eyes the sun and moon, his ears the quarters, his head the heavens, his mouth fire and his belly the ocean. Within him the whole universe of gods, humans, birds, cattle, serpents, gandharvas and daityas delights in wondrous ways. I bow to Viṣṇu, the Lord whose body is the three worlds.',
            kn: 'ಭೂಮಿಯೇ ಪಾದಗಳು, ಆಕಾಶವೇ ನಾಭಿ, ವಾಯುವೇ ಪ್ರಾಣ, ಸೂರ್ಯಚಂದ್ರರೇ ಕಣ್ಣುಗಳು, ದಿಕ್ಕುಗಳೇ ಕಿವಿಗಳು, ದ್ಯುಲೋಕವೇ ತಲೆ, ಅಗ್ನಿಯೇ ಮುಖ, ಸಮುದ್ರವೇ ಉದರ. ದೇವ, ಮನುಷ್ಯ, ಪಕ್ಷಿ, ಗೋವು, ಸರ್ಪ, ಗಂಧರ್ವ, ದೈತ್ಯರಿಂದ ಕೂಡಿದ ವಿಶ್ವವೆಲ್ಲ ಅವನೊಳಗೆ ಅದ್ಭುತವಾಗಿ ವಿಹರಿಸುತ್ತದೆ. ತ್ರಿಭುವನವೇ ದೇಹವಾಗಿರುವ ಆ ವಿಷ್ಣುವಿಗೆ ನಮಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 3,
          text:
            'शान्ताकारं भुजगशयनं पद्मनाभं सुरेशं\n' +
            'विश्वाधारं गगनसदृशं मेघवर्णं शुभाङ्गम् ।\n' +
            'लक्ष्मीकान्तं कमलनयनं योगिभिर्ध्यानगम्यं\n' +
            'वन्दे विष्णुं भवभयहरं सर्वलोकैकनाथम् ॥',
          meaning: {
            en: 'I worship Viṣṇu: of peaceful form, resting on the serpent, lotus-navelled, Lord of the gods, support of the universe, vast as the sky, dark as a rain cloud, of auspicious limbs, beloved of Lakṣmī, lotus-eyed, reached by yogis in meditation, remover of the fear of worldly life, the one Lord of all worlds.',
            kn: 'ಶಾಂತ ಸ್ವರೂಪನೂ, ಶೇಷಶಯನನೂ, ಪದ್ಮನಾಭನೂ, ದೇವತೆಗಳ ಒಡೆಯನೂ, ವಿಶ್ವಕ್ಕೆ ಆಧಾರನೂ, ಆಕಾಶದಂತೆ ವ್ಯಾಪಕನೂ, ಮೇಘವರ್ಣನೂ, ಶುಭಾಂಗನೂ, ಲಕ್ಷ್ಮೀಕಾಂತನೂ, ಕಮಲನಯನನೂ, ಯೋಗಿಗಳಿಗೆ ಧ್ಯಾನದಲ್ಲಿ ದೊರಕುವವನೂ, ಸಂಸಾರಭಯವನ್ನು ಹೋಗಲಾಡಿಸುವವನೂ, ಸರ್ವಲೋಕಗಳ ಏಕೈಕ ನಾಥನೂ ಆದ ವಿಷ್ಣುವಿಗೆ ವಂದಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 4,
          text:
            'मेघश्यामं पीतकौशेयवासं\n' +
            'श्रीवत्साङ्कं कौस्तुभोद्भासिताङ्गम् ।\n' +
            'पुण्योपेतं पुण्डरीकायताक्षं\n' +
            'विष्णुं वन्दे सर्वलोकैकनाथम् ॥',
          meaning: {
            en: 'I worship Viṣṇu, the one Lord of all worlds: dark as a cloud, clad in yellow silk, marked with the Śrīvatsa, his body shining with the Kaustubha gem, full of grace, with long lotus eyes.',
            kn: 'ಮೇಘಶ್ಯಾಮನೂ, ಹಳದಿ ರೇಷ್ಮೆ ವಸ್ತ್ರಧಾರಿಯೂ, ಶ್ರೀವತ್ಸ ಚಿಹ್ನೆಯುಳ್ಳವನೂ, ಕೌಸ್ತುಭದಿಂದ ಬೆಳಗುವ ದೇಹದವನೂ, ಪುಣ್ಯಮಯನೂ, ವಿಶಾಲ ಕಮಲನಯನನೂ ಆದ ಸರ್ವಲೋಕೈಕನಾಥ ವಿಷ್ಣುವಿಗೆ ವಂದಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 5,
          text: 'नमः समस्तभूतानामादिभूताय भूभृते ।\nअनेकरूपरूपाय विष्णवे प्रभविष्णवे ॥',
          meaning: {
            en: 'Salutations to Viṣṇu, the first being among all beings and the upholder of the earth, the mighty one who takes many forms.',
            kn: 'ಎಲ್ಲ ಜೀವಿಗಳಿಗೂ ಮೊದಲಿಗನಾದ, ಭೂಮಿಯನ್ನು ಧರಿಸಿದ, ಅನೇಕ ರೂಪಗಳುಳ್ಳ ಸರ್ವಶಕ್ತ ವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          n: 6,
          text:
            'सशङ्खचक्रं सकिरीटकुण्डलं\n' +
            'सपीतवस्त्रं सरसीरुहेक्षणम् ।\n' +
            'सहारवक्षःस्थलकौस्तुभश्रियं\n' +
            'नमामि विष्णुं शिरसा चतुर्भुजम् ॥',
          meaning: {
            en: 'I bow my head to four-armed Viṣṇu, with conch and discus, crown and earrings, a yellow garment and lotus eyes, a garland on his chest and the splendour of the Kaustubha.',
            kn: 'ಶಂಖ-ಚಕ್ರ, ಕಿರೀಟ-ಕುಂಡಲ, ಹಳದಿ ವಸ್ತ್ರ, ಕಮಲದಂತಹ ಕಣ್ಣುಗಳು, ಎದೆಯಲ್ಲಿ ಹಾರ ಮತ್ತು ಕೌಸ್ತುಭದ ಕಾಂತಿಯುಳ್ಳ ಚತುರ್ಭುಜ ವಿಷ್ಣುವಿಗೆ ತಲೆಬಾಗಿ ನಮಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 7,
          text:
            'छायायां पारिजातस्य हेमसिंहासनोपरि\n' +
            'आसीनमम्बुदश्याममायताक्षमलङ्कृतम् ।\n' +
            'चन्द्राननं चतुर्बाहुं श्रीवत्साङ्कितवक्षसम्\n' +
            'रुक्मिणीसत्यभामाभ्यां सहितं कृष्णमाश्रये ॥',
          meaning: {
            en: 'I take refuge in Kṛṣṇa, seated on a golden throne in the shade of the Pārijāta tree, dark as a rain cloud, long-eyed and adorned, moon-faced and four-armed, the Śrīvatsa on his chest, with Rukmiṇī and Satyabhāmā beside him.',
            kn: 'ಪಾರಿಜಾತ ವೃಕ್ಷದ ನೆರಳಿನಲ್ಲಿ ಚಿನ್ನದ ಸಿಂಹಾಸನದ ಮೇಲೆ ಕುಳಿತಿರುವ, ಮೇಘಶ್ಯಾಮನಾದ, ವಿಶಾಲ ಕಣ್ಣುಗಳುಳ್ಳ, ಅಲಂಕೃತನಾದ, ಚಂದ್ರಮುಖನಾದ, ಚತುರ್ಭುಜನಾದ, ಎದೆಯಲ್ಲಿ ಶ್ರೀವತ್ಸವುಳ್ಳ, ರುಕ್ಮಿಣೀ-ಸತ್ಯಭಾಮೆಯರೊಡನೆ ಇರುವ ಶ್ರೀಕೃಷ್ಣನನ್ನು ಆಶ್ರಯಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },

    // ───────────────────────────────── Stotram ─────────────────────────────────
    {
      title: 'स्तोत्रम्',
      titleEn: 'Stotram — the Thousand Names',
      verses: [
        {
          n: 1,
          text: 'विश्वं विष्णुर्वषट्कारो भूतभव्यभवत्प्रभुः ।\nभूतकृद्भूतभृद्भावो भूतात्मा भूतभावनः ॥',
          meaning: {
            en: 'Viśvam – he is the whole universe; Viṣṇu – the all-pervader; Vaṣaṭkāra – the one invoked with “vaṣaṭ” in sacrifice; Bhūta-bhavya-bhavat-prabhu – Lord of past, future and present; Bhūtakṛt – maker of beings; Bhūtabhṛt – their sustainer; Bhāva – pure being; Bhūtātmā – the inner Self of all beings; Bhūtabhāvana – who brings beings forth and nurtures them. (Mādhva teachers read Viśvam as “complete in every good quality”.)',
            kn: 'ವಿಶ್ವ – ಜಗತ್ತೆಲ್ಲವೂ ತಾನೇ ಆದವನು; ವಿಷ್ಣು – ಎಲ್ಲೆಡೆ ವ್ಯಾಪಿಸಿರುವವನು; ವಷಟ್ಕಾರ – ಯಜ್ಞದಲ್ಲಿ ‘ವಷಟ್’ ಎಂದು ಆಹ್ವಾನಿಸಲ್ಪಡುವವನು; ಭೂತಭವ್ಯಭವತ್ಪ್ರಭು – ಭೂತ, ಭವಿಷ್ಯ, ವರ್ತಮಾನಗಳ ಒಡೆಯ; ಭೂತಕೃತ್ – ಜೀವಿಗಳನ್ನು ಸೃಷ್ಟಿಸುವವನು; ಭೂತಭೃತ್ – ಅವುಗಳನ್ನು ಪೋಷಿಸುವವನು; ಭಾವ – ಶುದ್ಧ ಸತ್ತೆ; ಭೂತಾತ್ಮಾ – ಎಲ್ಲ ಜೀವಿಗಳ ಅಂತರಾತ್ಮ; ಭೂತಭಾವನ – ಜೀವಿಗಳನ್ನು ಹುಟ್ಟಿಸಿ ಬೆಳೆಸುವವನು. (ಮಾಧ್ವ ವ್ಯಾಖ್ಯಾನದಲ್ಲಿ ‘ವಿಶ್ವ’ ಎಂದರೆ ಗುಣಪೂರ್ಣನು.)',
          },
        },
        {
          n: 2,
          text: 'पूतात्मा परमात्मा च मुक्तानां परमा गतिः ।\nअव्ययः पुरुषः साक्षी क्षेत्रज्ञोऽक्षर एव च ॥',
          meaning: {
            en: 'Pūtātmā – pure by nature; Paramātmā – the Supreme Self; Muktānāṃ paramā gati – the highest goal of the liberated; Avyaya – undecaying; Puruṣa – who dwells in the city of the body; Sākṣī – the witness; Kṣetrajña – knower of the field, the body; Akṣara – the imperishable.',
            kn: 'ಪೂತಾತ್ಮಾ – ಪರಿಶುದ್ಧ ಸ್ವರೂಪನು; ಪರಮಾತ್ಮಾ – ಪರಮ ಆತ್ಮ; ಮುಕ್ತಾನಾಂ ಪರಮಾ ಗತಿ – ಮುಕ್ತರು ಸೇರುವ ಪರಮ ಗುರಿ; ಅವ್ಯಯ – ಕ್ಷಯವಿಲ್ಲದವನು; ಪುರುಷ – ದೇಹವೆಂಬ ಪುರದಲ್ಲಿ ವಾಸಿಸುವವನು; ಸಾಕ್ಷೀ – ಎಲ್ಲವನ್ನೂ ಕಾಣುವವನು; ಕ್ಷೇತ್ರಜ್ಞ – ದೇಹವೆಂಬ ಕ್ಷೇತ್ರವನ್ನು ಅರಿತವನು; ಅಕ್ಷರ – ಎಂದಿಗೂ ನಾಶವಾಗದವನು.',
          },
        },
        {
          n: 3,
          text: 'योगो योगविदां नेता प्रधानपुरुषेश्वरः ।\nनारसिंहवपुः श्रीमान् केशवः पुरुषोत्तमः ॥',
          meaning: {
            en: 'Yoga – reached through yoga; Yogavidāṃ netā – guide of those who know yoga; Pradhāna-puruṣeśvara – Lord of matter and of souls; Nārasiṃha-vapu – who took the man-lion form; Śrīmān – ever with Śrī; Keśava – of beautiful locks, also Lord of Brahmā and Śiva; Puruṣottama – the highest Person.',
            kn: 'ಯೋಗ – ಯೋಗದಿಂದ ಹೊಂದಲ್ಪಡುವವನು; ಯೋಗವಿದಾಂ ನೇತಾ – ಯೋಗಿಗಳನ್ನು ಮುನ್ನಡೆಸುವವನು; ಪ್ರಧಾನಪುರುಷೇಶ್ವರ – ಪ್ರಕೃತಿ ಮತ್ತು ಜೀವರ ಒಡೆಯ; ನಾರಸಿಂಹವಪು – ನರಸಿಂಹ ರೂಪ ತಾಳಿದವನು; ಶ್ರೀಮಾನ್ – ಸದಾ ಲಕ್ಷ್ಮಿಯೊಡನಿರುವವನು; ಕೇಶವ – ಸುಂದರ ಕೇಶವುಳ್ಳವನು, ಬ್ರಹ್ಮ-ರುದ್ರರ ಒಡೆಯನೂ ಹೌದು; ಪುರುಷೋತ್ತಮ – ಪುರುಷರಲ್ಲಿ ಉತ್ತಮನು.',
          },
        },
        {
          n: 4,
          text: 'सर्वः शर्वः शिवः स्थाणुर्भूतादिर्निधिरव्ययः ।\nसम्भवो भावनो भर्ता प्रभवः प्रभुरीश्वरः ॥',
          meaning: {
            en: 'Sarva – he is all; Śarva – who withdraws all at dissolution; Śiva – the auspicious and pure; Sthāṇu – firm and unmoving; Bhūtādi – origin of the elements; Nidhir avyaya – the imperishable treasure; Sambhava – who appears by his own will; Bhāvana – who grants fruits to all; Bhartā – the supporter; Prabhava – source of all; Prabhu – the mighty master; Īśvara – the ruler. (Mādhva teachers take Śarva, Śiva and Sthāṇu here as names of Hari himself.)',
            kn: 'ಸರ್ವ – ಎಲ್ಲವೂ ಅವನೇ; ಶರ್ವ – ಪ್ರಳಯದಲ್ಲಿ ಎಲ್ಲವನ್ನೂ ಸಂಹರಿಸುವವನು; ಶಿವ – ಮಂಗಳಮಯನು, ಶುದ್ಧನು; ಸ್ಥಾಣು – ಸ್ಥಿರನು; ಭೂತಾದಿ – ಪಂಚಭೂತಗಳಿಗೆ ಮೂಲನು; ನಿಧಿರವ್ಯಯ – ನಾಶವಿಲ್ಲದ ನಿಧಿ; ಸಂಭವ – ಸ್ವೇಚ್ಛೆಯಿಂದ ಅವತರಿಸುವವನು; ಭಾವನ – ಎಲ್ಲರಿಗೂ ಫಲ ಕೊಡುವವನು; ಭರ್ತಾ – ಪೋಷಕನು; ಪ್ರಭವ – ಎಲ್ಲದರ ಉಗಮ; ಪ್ರಭು – ಸಮರ್ಥ ಒಡೆಯ; ಈಶ್ವರ – ನಿಯಾಮಕನು. (ಮಾಧ್ವರು ಶರ್ವ, ಶಿವ, ಸ್ಥಾಣು ಎಂಬವುಗಳನ್ನೂ ಶ್ರೀಹರಿಯ ನಾಮಗಳೆಂದೇ ಅರ್ಥೈಸುತ್ತಾರೆ.)',
          },
        },
        {
          n: 5,
          text: 'स्वयम्भूः शम्भुरादित्यः पुष्कराक्षो महास्वनः ।\nअनादिनिधनो धाता विधाता धातुरुत्तमः ॥',
          meaning: {
            en: 'Svayambhū – self-existent; Śambhu – source of happiness; Āditya – the golden Person in the sun; Puṣkarākṣa – lotus-eyed; Mahāsvana – of mighty voice, whose voice is the Veda; Anādinidhana – without beginning or end; Dhātā – the upholder; Vidhātā – who ordains actions and their fruits; Dhāturuttama – the supreme support, higher even than the creator.',
            kn: 'ಸ್ವಯಂಭೂ – ತಾನಾಗಿಯೇ ಇರುವವನು; ಶಂಭು – ಸುಖದ ಮೂಲ; ಆದಿತ್ಯ – ಸೂರ್ಯಮಂಡಲದಲ್ಲಿರುವ ಸ್ವರ್ಣಪುರುಷ; ಪುಷ್ಕರಾಕ್ಷ – ಕಮಲನಯನ; ಮಹಾಸ್ವನ – ವೇದವೆಂಬ ಮಹಾ ಧ್ವನಿಯುಳ್ಳವನು; ಅನಾದಿನಿಧನ – ಆದಿ-ಅಂತ್ಯಗಳಿಲ್ಲದವನು; ಧಾತಾ – ಎಲ್ಲವನ್ನೂ ಧರಿಸಿದವನು; ವಿಧಾತಾ – ಕರ್ಮ-ಫಲಗಳನ್ನು ವಿಧಿಸುವವನು; ಧಾತುರುತ್ತಮ – ಸೃಷ್ಟಿಕರ್ತನಿಗಿಂತಲೂ ಶ್ರೇಷ್ಠ ಆಧಾರ.',
          },
        },
        {
          n: 6,
          text: 'अप्रमेयो हृषीकेशः पद्मनाभोऽमरप्रभुः ।\nविश्वकर्मा मनुस्त्वष्टा स्थविष्ठः स्थविरो ध्रुवः ॥',
          meaning: {
            en: 'Aprameya – beyond all measure; Hṛṣīkeśa – Lord of the senses; Padmanābha – lotus-navelled; Amaraprabhu – Lord of the immortals; Viśvakarmā – maker of the universe; Manu – the great thinker; Tvaṣṭā – who shapes and withdraws beings; Sthaviṣṭha – the vastest; Sthaviro dhruva – the ancient and unchanging.',
            kn: 'ಅಪ್ರಮೇಯ – ಅಳತೆಗೆ ಸಿಗದವನು; ಹೃಷೀಕೇಶ – ಇಂದ್ರಿಯಗಳ ಒಡೆಯ; ಪದ್ಮನಾಭ – ನಾಭಿಯಲ್ಲಿ ಕಮಲವುಳ್ಳವನು; ಅಮರಪ್ರಭು – ದೇವತೆಗಳ ಒಡೆಯ; ವಿಶ್ವಕರ್ಮಾ – ವಿಶ್ವವನ್ನು ನಿರ್ಮಿಸಿದವನು; ಮನು – ಮನನಶೀಲನು; ತ್ವಷ್ಟಾ – ಜೀವಿಗಳನ್ನು ರೂಪಿಸಿ ಲಯಗೊಳಿಸುವವನು; ಸ್ಥವಿಷ್ಠ – ಅತಿ ಸ್ಥೂಲನು; ಸ್ಥವಿರೋ ಧ್ರುವ – ಪುರಾತನನೂ ಅಚಲನೂ.',
          },
        },
        {
          n: 7,
          text: 'अग्राह्यः शाश्वतः कृष्णो लोहिताक्षः प्रतर्दनः ।\nप्रभूतस्त्रिककुब्धाम पवित्रं मङ्गलं परम् ॥',
          meaning: {
            en: 'Agrāhya – not grasped by the senses; Śāśvata – eternal; Kṛṣṇa – the dark one, whose nature is being and bliss; Lohitākṣa – red-eyed; Pratardana – the destroyer at dissolution; Prabhūta – abounding in qualities; Trikakubdhāma – support of the three regions; Pavitram – the purifier; Maṅgalaṃ param – supreme auspiciousness.',
            kn: 'ಅಗ್ರಾಹ್ಯ – ಇಂದ್ರಿಯಗಳಿಗೆ ಸಿಗದವನು; ಶಾಶ್ವತ – ನಿತ್ಯನು; ಕೃಷ್ಣ – ಶ್ಯಾಮವರ್ಣನು, ಸದಾನಂದ ಸ್ವರೂಪನು; ಲೋಹಿತಾಕ್ಷ – ಕೆಂಪು ಕಣ್ಣುಗಳುಳ್ಳವನು; ಪ್ರತರ್ದನ – ಪ್ರಳಯದಲ್ಲಿ ಸಂಹರಿಸುವವನು; ಪ್ರಭೂತ – ಗುಣಸಮೃದ್ಧನು; ತ್ರಿಕಕುಬ್ಧಾಮ – ಮೂರು ಲೋಕಗಳಿಗೂ ಆಧಾರ; ಪವಿತ್ರ – ಪಾವನಗೊಳಿಸುವವನು; ಮಂಗಲಂ ಪರಮ್ – ಪರಮ ಮಂಗಳ.',
          },
        },
        {
          n: 8,
          text: 'ईशानः प्राणदः प्राणो ज्येष्ठः श्रेष्ठः प्रजापतिः ।\nहिरण्यगर्भो भूगर्भो माधवो मधुसूदनः ॥',
          meaning: {
            en: 'Īśāna – the ruler; Prāṇada – giver of life; Prāṇa – life itself; Jyeṣṭha – the eldest; Śreṣṭha – the best; Prajāpati – Lord of creatures; Hiraṇyagarbha – the golden womb of creation; Bhūgarbha – who holds the earth within; Mādhava – husband of Mā, Lakṣmī; Madhusūdana – slayer of the demon Madhu.',
            kn: 'ಈಶಾನ – ಆಳುವವನು; ಪ್ರಾಣದ – ಪ್ರಾಣ ಕೊಡುವವನು; ಪ್ರಾಣ – ಪ್ರಾಣವೇ ತಾನಾದವನು; ಜ್ಯೇಷ್ಠ – ಎಲ್ಲರಿಗಿಂತ ಹಿರಿಯನು; ಶ್ರೇಷ್ಠ – ಎಲ್ಲರಿಗಿಂತ ಉತ್ತಮನು; ಪ್ರಜಾಪತಿ – ಜೀವಿಗಳ ಒಡೆಯ; ಹಿರಣ್ಯಗರ್ಭ – ಸೃಷ್ಟಿಯ ಸ್ವರ್ಣಗರ್ಭ; ಭೂಗರ್ಭ – ಭೂಮಿಯನ್ನು ತನ್ನೊಳಗೆ ಧರಿಸಿದವನು; ಮಾಧವ – ಲಕ್ಷ್ಮೀಪತಿ; ಮಧುಸೂದನ – ಮಧು ರಾಕ್ಷಸನನ್ನು ಕೊಂದವನು.',
          },
        },
        {
          n: 9,
          text: 'ईश्वरो विक्रमी धन्वी मेधावी विक्रमः क्रमः ।\nअनुत्तमो दुराधर्षः कृतज्ञः कृतिरात्मवान् ॥',
          meaning: {
            en: 'Īśvara – the all-powerful; Vikramī – the valiant; Dhanvī – the archer; Medhāvī – of vast intellect; Vikrama – who strode across the worlds; Krama – who moves everywhere; Anuttama – with none above him; Durādharṣa – unassailable; Kṛtajña – who remembers every good deed done for him; Kṛti – effort itself; Ātmavān – resting in his own glory.',
            kn: 'ಈಶ್ವರ – ಸರ್ವಶಕ್ತನು; ವಿಕ್ರಮೀ – ಪರಾಕ್ರಮಿ; ಧನ್ವೀ – ಧನುರ್ಧಾರಿ; ಮೇಧಾವೀ – ಮಹಾ ಬುದ್ಧಿಶಾಲಿ; ವಿಕ್ರಮ – ಲೋಕಗಳನ್ನು ಅಳೆದವನು; ಕ್ರಮ – ಎಲ್ಲೆಡೆ ಸಂಚರಿಸುವವನು; ಅನುತ್ತಮ – ತನಗಿಂತ ಮೇಲಿನವರಿಲ್ಲದವನು; ದುರಾಧರ್ಷ – ಯಾರಿಂದಲೂ ಸೋಲಿಸಲಾಗದವನು; ಕೃತಜ್ಞ – ಮಾಡಿದ ಉಪಕಾರವನ್ನು ಮರೆಯದವನು; ಕೃತಿ – ಪ್ರಯತ್ನವೇ ತಾನಾದವನು; ಆತ್ಮವಾನ್ – ತನ್ನ ಮಹಿಮೆಯಲ್ಲೇ ನೆಲೆಸಿದವನು.',
          },
        },
        {
          n: 10,
          text: 'सुरेशः शरणं शर्म विश्वरेताः प्रजाभवः ।\nअहः संवत्सरो व्यालः प्रत्ययः सर्वदर्शनः ॥',
          meaning: {
            en: 'Sureśa – Lord of the gods; Śaraṇam – the refuge; Śarma – bliss; Viśvaretāḥ – seed of the universe; Prajābhava – source of all creatures; Ahaḥ – the luminous day; Saṃvatsara – the year, time itself; Vyāla – hard to grasp, like a serpent; Pratyaya – knowledge itself, the one to be trusted; Sarvadarśana – who sees everything.',
            kn: 'ಸುರೇಶ – ದೇವತೆಗಳ ಒಡೆಯ; ಶರಣ – ಆಶ್ರಯ; ಶರ್ಮ – ಆನಂದ; ವಿಶ್ವರೇತಾ – ವಿಶ್ವದ ಬೀಜ; ಪ್ರಜಾಭವ – ಪ್ರಜೆಗಳ ಹುಟ್ಟಿಗೆ ಕಾರಣ; ಅಹಃ – ಪ್ರಕಾಶಮಯ ಹಗಲು; ಸಂವತ್ಸರ – ಕಾಲಸ್ವರೂಪ; ವ್ಯಾಲ – ಸರ್ಪದಂತೆ ಹಿಡಿಯಲಾಗದವನು; ಪ್ರತ್ಯಯ – ಜ್ಞಾನಸ್ವರೂಪ, ನಂಬಿಕೆಗೆ ಯೋಗ್ಯನು; ಸರ್ವದರ್ಶನ – ಎಲ್ಲವನ್ನೂ ಕಾಣುವವನು.',
          },
        },
        {
          n: 11,
          text: 'अजः सर्वेश्वरः सिद्धः सिद्धिः सर्वादिरच्युतः ।\nवृषाकपिरमेयात्मा सर्वयोगविनिःसृतः ॥',
          meaning: {
            en: 'Aja – unborn; Sarveśvara – Lord of all; Siddha – ever perfect; Siddhi – the goal attained; Sarvādi – first cause of all; Acyuta – who never slips from his nature; Vṛṣākapi – who lifted the earth as the Boar of dharma; Ameyātmā – of immeasurable nature; Sarvayoga-viniḥsṛta – untouched by all bonds, and known through every discipline.',
            kn: 'ಅಜ – ಹುಟ್ಟಿಲ್ಲದವನು; ಸರ್ವೇಶ್ವರ – ಎಲ್ಲರ ಒಡೆಯ; ಸಿದ್ಧ – ಸದಾ ಪರಿಪೂರ್ಣನು; ಸಿದ್ಧಿ – ಪಡೆಯಬೇಕಾದ ಗುರಿ; ಸರ್ವಾದಿ – ಎಲ್ಲದಕ್ಕೂ ಮೊದಲ ಕಾರಣ; ಅಚ್ಯುತ – ತನ್ನ ಸ್ವರೂಪದಿಂದ ಎಂದೂ ಜಾರದವನು; ವೃಷಾಕಪಿ – ಧರ್ಮರೂಪಿ ವರಾಹನಾಗಿ ಭೂಮಿಯನ್ನೆತ್ತಿದವನು; ಅಮೇಯಾತ್ಮಾ – ಅಳೆಯಲಾಗದ ಸ್ವರೂಪನು; ಸರ್ವಯೋಗವಿನಿಃಸೃತ – ಎಲ್ಲ ಬಂಧಗಳಿಂದ ದೂರನು, ಎಲ್ಲ ಸಾಧನೆಗಳಿಂದ ತಿಳಿಯಲ್ಪಡುವವನು.',
          },
        },
        {
          n: 12,
          text: 'वसुर्वसुमनाः सत्यः समात्मा सम्मितः समः ।\nअमोघः पुण्डरीकाक्षो वृषकर्मा वृषाकृतिः ॥',
          meaning: {
            en: 'Vasu – who dwells in all and is their wealth; Vasumanāḥ – of noble mind; Satya – truth; Samātmā – the same Self in all; Sammita – known through scripture (also read Asammita, beyond measure); Sama – ever unchanged; Amogha – whose acts never fail; Puṇḍarīkākṣa – lotus-eyed, seen in the lotus of the heart; Vṛṣakarmā – whose deeds are dharma; Vṛṣākṛti – whose form is dharma.',
            kn: 'ವಸು – ಎಲ್ಲರಲ್ಲಿ ವಾಸಿಸುವವನು, ಅವರ ಸಂಪತ್ತು; ವಸುಮನಾ – ಉದಾರ ಮನಸ್ಸಿನವನು; ಸತ್ಯ – ಸತ್ಯಸ್ವರೂಪ; ಸಮಾತ್ಮಾ – ಎಲ್ಲರಲ್ಲೂ ಸಮನಾಗಿರುವವನು; ಸಮ್ಮಿತ – ಶಾಸ್ತ್ರದಿಂದ ತಿಳಿಯಲ್ಪಡುವವನು (ಅಸಮ್ಮಿತ – ಅಳತೆಗೆ ಮೀರಿದವನು ಎಂಬ ಪಾಠವೂ ಇದೆ); ಸಮ – ಸದಾ ಏಕರೂಪನು; ಅಮೋಘ – ವ್ಯರ್ಥವಾಗದ ಕಾರ್ಯವುಳ್ಳವನು; ಪುಂಡರೀಕಾಕ್ಷ – ಕಮಲನಯನ, ಹೃದಯಕಮಲದಲ್ಲಿ ಕಾಣುವವನು; ವೃಷಕರ್ಮಾ – ಧರ್ಮವೇ ಕರ್ಮವಾದವನು; ವೃಷಾಕೃತಿ – ಧರ್ಮವೇ ರೂಪವಾದವನು.',
          },
        },
        {
          n: 13,
          text: 'रुद्रो बहुशिरा बभ्रुर्विश्वयोनिः शुचिश्रवाः ।\nअमृतः शाश्वतस्थाणुर्वरारोहो महातपाः ॥',
          meaning: {
            en: 'Rudra – who makes the wicked weep at the end, and drives away sorrow; Bahuśirāḥ – many-headed; Babhru – who bears the worlds; Viśvayoni – womb of the universe; Śuciśravāḥ – whose names and fame are pure; Amṛta – immortal; Śāśvatasthāṇu – eternal and steadfast; Varāroha – the highest goal, from which there is no return; Mahātapāḥ – of great austerity and knowledge.',
            kn: 'ರುದ್ರ – ದುಷ್ಟರನ್ನು ಅಳಿಸುವವನು, ದುಃಖವನ್ನು ಓಡಿಸುವವನು; ಬಹುಶಿರಾ – ಅನೇಕ ತಲೆಗಳುಳ್ಳವನು; ಬಭ್ರು – ಲೋಕಗಳನ್ನು ಹೊತ್ತವನು; ವಿಶ್ವಯೋನಿ – ವಿಶ್ವದ ಮೂಲ; ಶುಚಿಶ್ರವಾ – ಪವಿತ್ರ ನಾಮ-ಕೀರ್ತಿಯುಳ್ಳವನು; ಅಮೃತ – ಮರಣವಿಲ್ಲದವನು; ಶಾಶ್ವತಸ್ಥಾಣು – ನಿತ್ಯನೂ ಸ್ಥಿರನೂ; ವರಾರೋಹ – ಮರಳಿ ಬರುವುದಿಲ್ಲದ ಶ್ರೇಷ್ಠ ಗುರಿ; ಮಹಾತಪಾ – ಮಹಾ ತಪಸ್ಸು-ಜ್ಞಾನವುಳ್ಳವನು.',
          },
        },
        {
          n: 14,
          text: 'सर्वगः सर्वविद्भानुर्विष्वक्सेनो जनार्दनः ।\nवेदो वेदविदव्यङ्गो वेदाङ्गो वेदवित्कविः ॥',
          meaning: {
            en: 'Sarvaga – present everywhere; Sarvavid-bhānu – all-knowing and shining; Viṣvaksena – before whom hostile armies scatter; Janārdana – who chastises the wicked, to whom people pray; Veda – the Veda itself; Vedavit – knower of the Veda; Avyaṅga – complete, without flaw; Vedāṅga – whose limbs are the Vedas; Vedavit – who unfolds the Veda\'s meaning; Kavi – the all-seeing seer.',
            kn: 'ಸರ್ವಗ – ಎಲ್ಲೆಡೆ ಇರುವವನು; ಸರ್ವವಿದ್ಭಾನು – ಸರ್ವಜ್ಞನೂ ಪ್ರಕಾಶಮಾನನೂ; ವಿಷ್ವಕ್ಸೇನ – ಯಾರ ಮುಂದೆ ಶತ್ರುಸೇನೆ ಚದುರುವುದೋ ಅವನು; ಜನಾರ್ದನ – ದುಷ್ಟರನ್ನು ದಂಡಿಸುವವನು, ಜನರು ಬೇಡುವವನು; ವೇದ – ವೇದವೇ ತಾನಾದವನು; ವೇದವಿತ್ – ವೇದವನ್ನು ಬಲ್ಲವನು; ಅವ್ಯಂಗ – ಯಾವ ಕೊರತೆಯೂ ಇಲ್ಲದವನು; ವೇದಾಂಗ – ವೇದಗಳೇ ಅಂಗಗಳಾದವನು; ವೇದವಿತ್ – ವೇದಾರ್ಥವನ್ನು ವಿಚಾರಿಸಿ ತಿಳಿಸುವವನು; ಕವಿ – ಸರ್ವದರ್ಶಿ.',
          },
        },
        {
          n: 15,
          text: 'लोकाध्यक्षः सुराध्यक्षो धर्माध्यक्षः कृताकृतः ।\nचतुरात्मा चतुर्व्यूहश्चतुर्दंष्ट्रश्चतुर्भुजः ॥',
          meaning: {
            en: 'Lokādhyakṣa – overseer of the worlds; Surādhyakṣa – overseer of the gods; Dharmādhyakṣa – who watches over merit and sin; Kṛtākṛta – both the effect and its cause; Caturātmā – fourfold in creation, preservation and dissolution; Caturvyūha – in the four forms Vāsudeva, Saṅkarṣaṇa, Pradyumna and Aniruddha; Caturdaṃṣṭra – four-tusked, as Narasiṃha; Caturbhuja – four-armed.',
            kn: 'ಲೋಕಾಧ್ಯಕ್ಷ – ಲೋಕಗಳ ಮೇಲ್ವಿಚಾರಕನು; ಸುರಾಧ್ಯಕ್ಷ – ದೇವತೆಗಳ ಅಧ್ಯಕ್ಷನು; ಧರ್ಮಾಧ್ಯಕ್ಷ – ಪುಣ್ಯ-ಪಾಪಗಳನ್ನು ನೋಡಿಕೊಳ್ಳುವವನು; ಕೃತಾಕೃತ – ಕಾರ್ಯವೂ ಕಾರಣವೂ ಆದವನು; ಚತುರಾತ್ಮಾ – ಸೃಷ್ಟಿ-ಸ್ಥಿತಿ-ಲಯಗಳಿಗಾಗಿ ನಾಲ್ಕು ರೂಪಗಳುಳ್ಳವನು; ಚತುರ್ವ್ಯೂಹ – ವಾಸುದೇವ, ಸಂಕರ್ಷಣ, ಪ್ರದ್ಯುಮ್ನ, ಅನಿರುದ್ಧರೆಂಬ ನಾಲ್ಕು ವ್ಯೂಹಗಳವನು; ಚತುರ್ದಂಷ್ಟ್ರ – ನರಸಿಂಹನಾಗಿ ನಾಲ್ಕು ಕೋರೆಹಲ್ಲುಗಳುಳ್ಳವನು; ಚತುರ್ಭುಜ – ನಾಲ್ಕು ಭುಜಗಳುಳ್ಳವನು.',
          },
        },
        {
          n: 16,
          text: 'भ्राजिष्णुर्भोजनं भोक्ता सहिष्णुर्जगदादिजः ।\nअनघो विजयो जेता विश्वयोनिः पुनर्वसुः ॥',
          meaning: {
            en: 'Bhrājiṣṇu – radiant; Bhojanam – the enjoyed, nature itself; Bhoktā – the enjoyer; Sahiṣṇu – who overcomes and forbears; Jagadādija – first-born at the dawn of the world; Anagha – sinless; Vijaya – victorious; Jetā – the conqueror; Viśvayoni – source of the universe; Punarvasu – who dwells again and again in bodies as their inner Self.',
            kn: 'ಭ್ರಾಜಿಷ್ಣು – ಪ್ರಕಾಶಿಸುವವನು; ಭೋಜನ – ಭೋಗ್ಯವಾದ ಪ್ರಕೃತಿ; ಭೋಕ್ತಾ – ಭೋಗಿಸುವವನು; ಸಹಿಷ್ಣು – ಸಹಿಸುವವನು, ಶತ್ರುಗಳನ್ನು ಮಣಿಸುವವನು; ಜಗದಾದಿಜ – ಜಗತ್ತಿನ ಆರಂಭದಲ್ಲಿ ಮೊದಲು ಪ್ರಕಟನಾದವನು; ಅನಘ – ಪಾಪರಹಿತನು; ವಿಜಯ – ವಿಜಯಶಾಲಿ; ಜೇತಾ – ಗೆಲ್ಲುವವನು; ವಿಶ್ವಯೋನಿ – ವಿಶ್ವದ ಮೂಲ; ಪುನರ್ವಸು – ದೇಹಗಳಲ್ಲಿ ಮತ್ತೆ ಮತ್ತೆ ಅಂತರ್ಯಾಮಿಯಾಗಿ ನೆಲೆಸುವವನು.',
          },
        },
        {
          n: 17,
          text: 'उपेन्द्रो वामनः प्रांशुरमोघः शुचिरूर्जितः ।\nअतीन्द्रः सङ्ग्रहः सर्गो धृतात्मा नियमो यमः ॥',
          meaning: {
            en: 'Upendra – the younger brother of Indra, as Vāmana; Vāmana – the dwarf; Prāṃśu – the towering one who grew to measure the worlds; Amogha – unfailing; Śuci – pure and purifying; Ūrjita – mighty; Atīndra – greater than Indra; Saṅgraha – who gathers all into himself at the end; Sarga – creation itself; Dhṛtātmā – self-sustained; Niyama – who appoints each to his task; Yama – the inner controller.',
            kn: 'ಉಪೇಂದ್ರ – ವಾಮನನಾಗಿ ಇಂದ್ರನ ತಮ್ಮನಾದವನು; ವಾಮನ – ಕುಬ್ಜರೂಪಿ; ಪ್ರಾಂಶು – ಲೋಕಗಳನ್ನು ಅಳೆಯಲು ಎತ್ತರವಾಗಿ ಬೆಳೆದವನು; ಅಮೋಘ – ವ್ಯರ್ಥವಾಗದವನು; ಶುಚಿ – ಶುದ್ಧನು, ಶುದ್ಧಗೊಳಿಸುವವನು; ಊರ್ಜಿತ – ಬಲಶಾಲಿ; ಅತೀಂದ್ರ – ಇಂದ್ರನನ್ನೂ ಮೀರಿದವನು; ಸಂಗ್ರಹ – ಪ್ರಳಯದಲ್ಲಿ ಎಲ್ಲವನ್ನೂ ತನ್ನೊಳಗೆ ಸೇರಿಸಿಕೊಳ್ಳುವವನು; ಸರ್ಗ – ಸೃಷ್ಟಿಯೇ ತಾನಾದವನು; ಧೃತಾತ್ಮಾ – ತನ್ನನ್ನು ತಾನೇ ಧರಿಸಿದವನು; ನಿಯಮ – ಎಲ್ಲರನ್ನೂ ಅವರವರ ಕರ್ತವ್ಯದಲ್ಲಿ ತೊಡಗಿಸುವವನು; ಯಮ – ಅಂತರ್ನಿಯಾಮಕನು.',
          },
        },
        {
          n: 18,
          text: 'वेद्यो वैद्यः सदायोगी वीरहा माधवो मधुः ।\nअतीन्द्रियो महामायो महोत्साहो महाबलः ॥',
          meaning: {
            en: 'Vedya – the one to be known; Vaidya – knower of all lore, physician of worldly bondage; Sadāyogī – ever in yoga; Vīrahā – slayer of mighty demons; Mādhava – Lord of knowledge; Madhu – sweet as honey; Atīndriya – beyond the senses; Mahāmāya – wielder of great wondrous power; Mahotsāha – of great zeal; Mahābala – of great strength.',
            kn: 'ವೇದ್ಯ – ತಿಳಿಯಬೇಕಾದವನು; ವೈದ್ಯ – ಎಲ್ಲ ವಿದ್ಯೆಗಳನ್ನು ಬಲ್ಲವನು, ಸಂಸಾರರೋಗದ ವೈದ್ಯ; ಸದಾಯೋಗೀ – ಸದಾ ಯೋಗಸ್ಥನು; ವೀರಹಾ – ಬಲಿಷ್ಠ ದೈತ್ಯರನ್ನು ಕೊಂದವನು; ಮಾಧವ – ಜ್ಞಾನದ ಒಡೆಯ; ಮಧು – ಜೇನಿನಂತೆ ಮಧುರನು; ಅತೀಂದ್ರಿಯ – ಇಂದ್ರಿಯಗಳಿಗೆ ಮೀರಿದವನು; ಮಹಾಮಾಯ – ಅದ್ಭುತ ಶಕ್ತಿಯುಳ್ಳವನು; ಮಹೋತ್ಸಾಹ – ಮಹಾ ಉತ್ಸಾಹಿ; ಮಹಾಬಲ – ಮಹಾ ಬಲಶಾಲಿ.',
          },
        },
        {
          n: 19,
          text: 'महाबुद्धिर्महावीर्यो महाशक्तिर्महाद्युतिः ।\nअनिर्देश्यवपुः श्रीमानमेयात्मा महाद्रिधृक् ॥',
          meaning: {
            en: 'Mahābuddhi – of great wisdom; Mahāvīrya – of great power; Mahāśakti – of great might; Mahādyuti – of great splendour; Anirdeśyavapu – whose form cannot be described; Śrīmān – full of glory; Ameyātmā – of immeasurable nature; Mahādridhṛk – who held up the great mountains, Mandara and Govardhana.',
            kn: 'ಮಹಾಬುದ್ಧಿ – ಮಹಾ ಜ್ಞಾನಿ; ಮಹಾವೀರ್ಯ – ಮಹಾ ವೀರ್ಯವುಳ್ಳವನು; ಮಹಾಶಕ್ತಿ – ಮಹಾ ಶಕ್ತಿಶಾಲಿ; ಮಹಾದ್ಯುತಿ – ಮಹಾ ತೇಜಸ್ವಿ; ಅನಿರ್ದೇಶ್ಯವಪು – ವರ್ಣಿಸಲಾಗದ ರೂಪವುಳ್ಳವನು; ಶ್ರೀಮಾನ್ – ಐಶ್ವರ್ಯಪೂರ್ಣನು; ಅಮೇಯಾತ್ಮಾ – ಅಳೆಯಲಾಗದ ಸ್ವರೂಪನು; ಮಹಾದ್ರಿಧೃಕ್ – ಮಂದರ, ಗೋವರ್ಧನ ಪರ್ವತಗಳನ್ನು ಎತ್ತಿದವನು.',
          },
        },
        {
          n: 20,
          text: 'महेष्वासो महीभर्ता श्रीनिवासः सतां गतिः ।\nअनिरुद्धः सुरानन्दो गोविन्दो गोविदां पतिः ॥',
          meaning: {
            en: 'Maheṣvāsa – the great archer; Mahībhartā – sustainer of the earth; Śrīnivāsa – the abode of Śrī; Satāṃ gati – refuge of the good; Aniruddha – whom none can obstruct; Surānanda – delight of the gods; Govinda – who rescued the earth and tends the cows, known through the Veda; Govidāṃ pati – Lord of the wise.',
            kn: 'ಮಹೇಷ್ವಾಸ – ಮಹಾ ಧನುರ್ಧಾರಿ; ಮಹೀಭರ್ತಾ – ಭೂಮಿಯನ್ನು ಪೋಷಿಸುವವನು; ಶ್ರೀನಿವಾಸ – ಲಕ್ಷ್ಮಿಗೆ ನೆಲೆಯಾದವನು; ಸತಾಂ ಗತಿ – ಸಜ್ಜನರ ಆಶ್ರಯ; ಅನಿರುದ್ಧ – ಯಾರಿಂದಲೂ ತಡೆಯಲಾಗದವನು; ಸುರಾನಂದ – ದೇವತೆಗಳಿಗೆ ಆನಂದ ಕೊಡುವವನು; ಗೋವಿಂದ – ಭೂಮಿಯನ್ನು ಉದ್ಧರಿಸಿದವನು, ಗೋವುಗಳನ್ನು ಕಾಯುವವನು, ವೇದವಾಣಿಯಿಂದ ತಿಳಿಯಲ್ಪಡುವವನು; ಗೋವಿದಾಂ ಪತಿ – ಜ್ಞಾನಿಗಳ ಒಡೆಯ.',
          },
        },
        {
          n: 21,
          text: 'मरीचिर्दमनो हंसः सुपर्णो भुजगोत्तमः ।\nहिरण्यनाभः सुतपाः पद्मनाभः प्रजापतिः ॥',
          meaning: {
            en: 'Marīci – the radiant ray; Damana – who subdues the wicked; Haṃsa – the swan, who removes the fear of worldly life; Suparṇa – the fair-winged bird; Bhujagottama – the best of serpents, Ananta; Hiraṇyanābha – of golden navel; Sutapāḥ – of perfect austerity; Padmanābha – lotus-navelled; Prajāpati – father of all beings.',
            kn: 'ಮರೀಚಿ – ಪ್ರಕಾಶದ ಕಿರಣ; ದಮನ – ದುಷ್ಟರನ್ನು ದಮನಿಸುವವನು; ಹಂಸ – ಸಂಸಾರಭಯವನ್ನು ಹೋಗಲಾಡಿಸುವ ಹಂಸರೂಪಿ; ಸುಪರ್ಣ – ಸುಂದರ ರೆಕ್ಕೆಗಳ ಪಕ್ಷಿರೂಪಿ; ಭುಜಗೋತ್ತಮ – ಸರ್ಪಶ್ರೇಷ್ಠನಾದ ಅನಂತ; ಹಿರಣ್ಯನಾಭ – ಸುವರ್ಣ ನಾಭಿಯುಳ್ಳವನು; ಸುತಪಾ – ಶ್ರೇಷ್ಠ ತಪಸ್ವಿ; ಪದ್ಮನಾಭ – ಕಮಲನಾಭ; ಪ್ರಜಾಪತಿ – ಎಲ್ಲ ಜೀವಿಗಳ ತಂದೆ.',
          },
        },
        {
          n: 22,
          text: 'अमृत्युः सर्वदृक् सिंहः सन्धाता सन्धिमान् स्थिरः ।\nअजो दुर्मर्षणः शास्ता विश्रुतात्मा सुरारिहा ॥',
          meaning: {
            en: 'Amṛtyu – deathless; Sarvadṛk – all-seeing; Siṃha – the lion who destroys evil; Sandhātā – who joins beings to the fruits of their deeds; Sandhimān – who himself receives those fruits; Sthira – steadfast; Aja – unborn; Durmarṣaṇa – unbearable to his foes; Śāstā – who teaches through scripture; Viśrutātmā – of renowned nature; Surārihā – slayer of the enemies of the gods.',
            kn: 'ಅಮೃತ್ಯು – ಮರಣವಿಲ್ಲದವನು; ಸರ್ವದೃಕ್ – ಎಲ್ಲವನ್ನೂ ನೋಡುವವನು; ಸಿಂಹ – ದುಷ್ಟರನ್ನು ಸಂಹರಿಸುವ ಸಿಂಹ; ಸಂಧಾತಾ – ಜೀವರನ್ನು ಕರ್ಮಫಲಗಳೊಡನೆ ಸೇರಿಸುವವನು; ಸಂಧಿಮಾನ್ – ಆ ಫಲಗಳ ಭೋಕ್ತನೂ ತಾನೇ; ಸ್ಥಿರ – ಅಚಲನು; ಅಜ – ಹುಟ್ಟಿಲ್ಲದವನು; ದುರ್ಮರ್ಷಣ – ಶತ್ರುಗಳಿಗೆ ಸಹಿಸಲಾಗದವನು; ಶಾಸ್ತಾ – ಶಾಸ್ತ್ರದ ಮೂಲಕ ಉಪದೇಶಿಸುವವನು; ವಿಶ್ರುತಾತ್ಮಾ – ಪ್ರಸಿದ್ಧ ಸ್ವರೂಪನು; ಸುರಾರಿಹಾ – ದೇವಶತ್ರುಗಳನ್ನು ಕೊಂದವನು.',
          },
        },
        {
          n: 23,
          text: 'गुरुर्गुरुतमो धाम सत्यः सत्यपराक्रमः ।\nनिमिषोऽनिमिषः स्रग्वी वाचस्पतिरुदारधीः ॥',
          meaning: {
            en: 'Guru – the teacher; Gurutama – the greatest of teachers; Dhāma – the abode and the light; Satya – the true; Satyaparākrama – of unfailing valour; Nimiṣa – with eyes closed in yogic sleep; Animiṣa – ever watchful; Sragvī – wearing the Vaijayantī garland; Vācaspatir udāradhī – Lord of speech, of vast understanding.',
            kn: 'ಗುರು – ಉಪದೇಶಕನು; ಗುರುತಮ – ಗುರುಗಳಿಗೂ ಗುರು; ಧಾಮ – ಆಶ್ರಯಸ್ಥಾನ, ಜ್ಯೋತಿ; ಸತ್ಯ – ಸತ್ಯಸ್ವರೂಪ; ಸತ್ಯಪರಾಕ್ರಮ – ವ್ಯರ್ಥವಾಗದ ಪರಾಕ್ರಮವುಳ್ಳವನು; ನಿಮಿಷ – ಯೋಗನಿದ್ರೆಯಲ್ಲಿ ಕಣ್ಮುಚ್ಚಿದವನು; ಅನಿಮಿಷ – ಸದಾ ಎಚ್ಚರವಾಗಿರುವವನು; ಸ್ರಗ್ವೀ – ವೈಜಯಂತೀ ಮಾಲೆ ಧರಿಸಿದವನು; ವಾಚಸ್ಪತಿರುದಾರಧೀ – ವಾಣಿಯ ಒಡೆಯ, ವಿಶಾಲ ಬುದ್ಧಿಯುಳ್ಳವನು.',
          },
        },
        {
          n: 24,
          text: 'अग्रणीर्ग्रामणीः श्रीमान् न्यायो नेता समीरणः ।\nसहस्रमूर्धा विश्वात्मा सहस्राक्षः सहस्रपात् ॥',
          meaning: {
            en: 'Agraṇī – who leads seekers to the highest; Grāmaṇī – leader of the hosts; Śrīmān – resplendent; Nyāya – the logic that leads to truth; Netā – the guide of the world; Samīraṇa – who moves beings as breath; Sahasramūrdhā – thousand-headed; Viśvātmā – Soul of the universe; Sahasrākṣa – thousand-eyed; Sahasrapāt – thousand-footed.',
            kn: 'ಅಗ್ರಣೀ – ಸಾಧಕರನ್ನು ಉನ್ನತಕ್ಕೆ ಒಯ್ಯುವವನು; ಗ್ರಾಮಣೀ – ಸಮೂಹಗಳ ನಾಯಕ; ಶ್ರೀಮಾನ್ – ಕಾಂತಿಯುತನು; ನ್ಯಾಯ – ಸತ್ಯಕ್ಕೆ ಒಯ್ಯುವ ತರ್ಕ; ನೇತಾ – ಜಗತ್ತಿನ ಮಾರ್ಗದರ್ಶಕ; ಸಮೀರಣ – ಪ್ರಾಣರೂಪದಿಂದ ಜೀವಿಗಳನ್ನು ಚಲಿಸುವವನು; ಸಹಸ್ರಮೂರ್ಧಾ – ಸಾವಿರ ತಲೆಗಳವನು; ವಿಶ್ವಾತ್ಮಾ – ವಿಶ್ವದ ಆತ್ಮ; ಸಹಸ್ರಾಕ್ಷ – ಸಾವಿರ ಕಣ್ಣುಗಳವನು; ಸಹಸ್ರಪಾತ್ – ಸಾವಿರ ಪಾದಗಳವನು.',
          },
        },
        {
          n: 25,
          text: 'आवर्तनो निवृत्तात्मा संवृतः सम्प्रमर्दनः ।\nअहः संवर्तको वह्निरनिलो धरणीधरः ॥',
          meaning: {
            en: 'Āvartana – who turns the wheel of worldly life; Nivṛttātmā – himself detached from it; Saṃvṛta – hidden from the ignorant; Sampramardana – who crushes the wicked; Ahaḥsaṃvartaka – who, as the sun, brings round the day; Vahni – fire that bears the offerings; Anila – the free-moving wind; Dharaṇīdhara – bearer of the earth.',
            kn: 'ಆವರ್ತನ – ಸಂಸಾರಚಕ್ರವನ್ನು ತಿರುಗಿಸುವವನು; ನಿವೃತ್ತಾತ್ಮಾ – ತಾನು ಅದರಿಂದ ಅಲಿಪ್ತನು; ಸಂವೃತ – ಅಜ್ಞಾನಿಗಳಿಗೆ ಮರೆಯಾಗಿರುವವನು; ಸಂಪ್ರಮರ್ದನ – ದುಷ್ಟರನ್ನು ಮರ್ದಿಸುವವನು; ಅಹಃಸಂವರ್ತಕ – ಸೂರ್ಯರೂಪದಿಂದ ಹಗಲನ್ನು ತರುವವನು; ವಹ್ನಿ – ಹವಿಸ್ಸನ್ನು ಒಯ್ಯುವ ಅಗ್ನಿ; ಅನಿಲ – ಎಲ್ಲೆಡೆ ಸಂಚರಿಸುವ ವಾಯು; ಧರಣೀಧರ – ಭೂಮಿಯನ್ನು ಧರಿಸಿದವನು.',
          },
        },
        {
          n: 26,
          text: 'सुप्रसादः प्रसन्नात्मा विश्वधृग्विश्वभुग्विभुः ।\nसत्कर्ता सत्कृतः साधुर्जह्नुर्नारायणो नरः ॥',
          meaning: {
            en: 'Suprasāda – supremely gracious; Prasannātmā – ever serene; Viśvadhṛk – upholder of the world; Viśvabhuk – who enjoys and protects it; Vibhu – who becomes many; Satkartā – who honours the good; Satkṛta – honoured by the worthy; Sādhu – the righteous; Jahnu – who draws beings back into himself; Nārāyaṇa – the resting place of all beings; Nara – the eternal guide.',
            kn: 'ಸುಪ್ರಸಾದ – ಅತಿ ಕೃಪಾಳು; ಪ್ರಸನ್ನಾತ್ಮಾ – ಸದಾ ಪ್ರಸನ್ನನು; ವಿಶ್ವಧೃಕ್ – ವಿಶ್ವವನ್ನು ಧರಿಸಿದವನು; ವಿಶ್ವಭುಕ್ – ವಿಶ್ವವನ್ನು ಭೋಗಿಸಿ ರಕ್ಷಿಸುವವನು; ವಿಭು – ಅನೇಕ ರೂಪಗಳಾಗುವವನು; ಸತ್ಕರ್ತಾ – ಸಜ್ಜನರನ್ನು ಸತ್ಕರಿಸುವವನು; ಸತ್ಕೃತ – ಪೂಜ್ಯರಿಂದ ಪೂಜಿತನು; ಸಾಧು – ಧರ್ಮಿಷ್ಠನು; ಜಹ್ನು – ಜೀವಿಗಳನ್ನು ತನ್ನೊಳಗೆ ಸೆಳೆದುಕೊಳ್ಳುವವನು; ನಾರಾಯಣ – ಎಲ್ಲ ಜೀವಿಗಳ ಆಶ್ರಯ; ನರ – ನಿತ್ಯ ಮಾರ್ಗದರ್ಶಕ.',
          },
        },
        {
          n: 27,
          text: 'असङ्ख्येयोऽप्रमेयात्मा विशिष्टः शिष्टकृच्छुचिः ।\nसिद्धार्थः सिद्धसङ्कल्पः सिद्धिदः सिद्धिसाधनः ॥',
          meaning: {
            en: 'Asaṅkhyeya – beyond number; Aprameyātmā – of immeasurable self; Viśiṣṭa – the most excellent; Śiṣṭakṛt – who rules and protects the good; Śuci – pure; Siddhārtha – whose aims are all achieved; Siddhasaṅkalpa – whose will always comes true; Siddhida – giver of attainment; Siddhisādhana – the means to attainment.',
            kn: 'ಅಸಂಖ್ಯೇಯ – ಎಣಿಕೆಗೆ ಸಿಗದವನು; ಅಪ್ರಮೇಯಾತ್ಮಾ – ಅಳೆಯಲಾಗದ ಸ್ವರೂಪನು; ವಿಶಿಷ್ಟ – ಅತಿ ಶ್ರೇಷ್ಠನು; ಶಿಷ್ಟಕೃತ್ – ಸಜ್ಜನರನ್ನು ಆಳಿ ಕಾಯುವವನು; ಶುಚಿ – ಶುದ್ಧನು; ಸಿದ್ಧಾರ್ಥ – ಎಲ್ಲ ಉದ್ದೇಶಗಳೂ ಸಿದ್ಧವಾದವನು; ಸಿದ್ಧಸಂಕಲ್ಪ – ಸಂಕಲ್ಪ ಸದಾ ನೆರವೇರುವವನು; ಸಿದ್ಧಿದ – ಸಿದ್ಧಿ ಕೊಡುವವನು; ಸಿದ್ಧಿಸಾಧನ – ಸಿದ್ಧಿಗೆ ಸಾಧನವಾದವನು.',
          },
        },
        {
          n: 28,
          text: 'वृषाही वृषभो विष्णुर्वृषपर्वा वृषोदरः ।\nवर्धनो वर्धमानश्च विविक्तः श्रुतिसागरः ॥',
          meaning: {
            en: 'Vṛṣāhī – Lord of the sacred rites; Vṛṣabha – who showers blessings; Viṣṇu – the pervader; Vṛṣaparvā – whose steps are dharma; Vṛṣodara – who holds dharma and all beings within; Vardhana – who makes all grow; Vardhamāna – who grows into the universe; Vivikta – apart and unattached; Śrutisāgara – the ocean of the Vedas.',
            kn: 'ವೃಷಾಹೀ – ಧರ್ಮಕರ್ಮಗಳ ಒಡೆಯ; ವೃಷಭ – ಅನುಗ್ರಹವನ್ನು ಸುರಿಸುವವನು; ವಿಷ್ಣು – ವ್ಯಾಪಕನು; ವೃಷಪರ್ವಾ – ಧರ್ಮವೇ ಮೆಟ್ಟಿಲಾದವನು; ವೃಷೋದರ – ಧರ್ಮವನ್ನೂ ಜೀವಿಗಳನ್ನೂ ಉದರದಲ್ಲಿ ಹೊತ್ತವನು; ವರ್ಧನ – ಬೆಳೆಸುವವನು; ವರ್ಧಮಾನ – ಜಗದ್ರೂಪದಲ್ಲಿ ಬೆಳೆಯುವವನು; ವಿವಿಕ್ತ – ಅಲಿಪ್ತನು; ಶ್ರುತಿಸಾಗರ – ವೇದಗಳ ಸಾಗರ.',
          },
        },
        {
          n: 29,
          text: 'सुभुजो दुर्धरो वाग्मी महेन्द्रो वसुदो वसुः ।\nनैकरूपो बृहद्रूपः शिपिविष्टः प्रकाशनः ॥',
          meaning: {
            en: 'Subhuja – of fine arms; Durdhara – who bears the worlds and is hard to hold in the mind; Vāgmī – eloquent, source of the Vedas; Mahendra – the great Lord; Vasuda – giver of wealth; Vasu – wealth itself; Naikarūpa – of many forms; Bṛhadrūpa – of vast form; Śipiviṣṭa – who dwells in the rays and in the sacrifice; Prakāśana – who illumines all.',
            kn: 'ಸುಭುಜ – ಸುಂದರ ಭುಜಗಳವನು; ದುರ್ಧರ – ಲೋಕಗಳನ್ನು ಹೊತ್ತವನು, ಮನಸ್ಸಿನಲ್ಲಿ ಹಿಡಿಯಲು ಕಷ್ಟನು; ವಾಗ್ಮೀ – ವಾಕ್ಚತುರ, ವೇದಗಳ ಮೂಲ; ಮಹೇಂದ್ರ – ಮಹಾ ಒಡೆಯ; ವಸುದ – ಸಂಪತ್ತು ಕೊಡುವವನು; ವಸು – ಸಂಪತ್ತೇ ತಾನಾದವನು; ನೈಕರೂಪ – ಅನೇಕ ರೂಪಗಳವನು; ಬೃಹದ್ರೂಪ – ವಿಶಾಲ ರೂಪದವನು; ಶಿಪಿವಿಷ್ಟ – ಕಿರಣಗಳಲ್ಲಿಯೂ ಯಜ್ಞದಲ್ಲಿಯೂ ನೆಲೆಸಿದವನು; ಪ್ರಕಾಶನ – ಎಲ್ಲವನ್ನೂ ಬೆಳಗುವವನು.',
          },
        },
        {
          n: 30,
          text: 'ओजस्तेजोद्युतिधरः प्रकाशात्मा प्रतापनः ।\nऋद्धः स्पष्टाक्षरो मन्त्रश्चन्द्रांशुर्भास्करद्युतिः ॥',
          meaning: {
            en: 'Ojas-tejo-dyuti-dhara – bearer of vigour, valour and splendour; Prakāśātmā – luminous by nature; Pratāpana – who scorches his foes, as the sun; Ṛddha – rich in dharma, knowledge and detachment; Spaṣṭākṣara – whose syllable Om rings clear; Mantra – the sacred formula itself; Candrāṃśu – soothing as moonlight; Bhāskaradyuti – brilliant as the sun.',
            kn: 'ಓಜಸ್ತೇಜೋದ್ಯುತಿಧರ – ಶಕ್ತಿ, ಪರಾಕ್ರಮ, ಕಾಂತಿಗಳನ್ನು ಧರಿಸಿದವನು; ಪ್ರಕಾಶಾತ್ಮಾ – ಪ್ರಕಾಶ ಸ್ವರೂಪನು; ಪ್ರತಾಪನ – ಸೂರ್ಯನಂತೆ ಶತ್ರುಗಳನ್ನು ತಪಿಸುವವನು; ಋದ್ಧ – ಧರ್ಮ, ಜ್ಞಾನ, ವೈರಾಗ್ಯಗಳಿಂದ ಸಮೃದ್ಧನು; ಸ್ಪಷ್ಟಾಕ್ಷರ – ಓಂಕಾರವೆಂಬ ಸ್ಪಷ್ಟ ಅಕ್ಷರವುಳ್ಳವನು; ಮಂತ್ರ – ಮಂತ್ರಸ್ವರೂಪ; ಚಂದ್ರಾಂಶು – ಬೆಳದಿಂಗಳಂತೆ ತಂಪು ಕೊಡುವವನು; ಭಾಸ್ಕರದ್ಯುತಿ – ಸೂರ್ಯನಂತೆ ಪ್ರಕಾಶಿಸುವವನು.',
          },
        },
        {
          n: 31,
          text: 'अमृतांशूद्भवो भानुः शशबिन्दुः सुरेश्वरः ।\nऔषधं जगतः सेतुः सत्यधर्मपराक्रमः ॥',
          meaning: {
            en: 'Amṛtāṃśūdbhava – from whom the moon was born; Bhānu – the shining; Śaśabindu – who, as the moon, nourishes beings; Sureśvara – Lord of the gods; Auṣadham – the medicine for worldly suffering; Jagataḥ setu – the bridge and boundary that holds the world in order; Satyadharmaparākrama – whose virtue and valour are true.',
            kn: 'ಅಮೃತಾಂಶೂದ್ಭವ – ಚಂದ್ರನ ಹುಟ್ಟಿಗೆ ಕಾರಣನು; ಭಾನು – ಪ್ರಕಾಶಮಾನನು; ಶಶಬಿಂದು – ಚಂದ್ರರೂಪದಿಂದ ಜೀವಿಗಳನ್ನು ಪೋಷಿಸುವವನು; ಸುರೇಶ್ವರ – ದೇವತೆಗಳ ಒಡೆಯ; ಔಷಧ – ಸಂಸಾರರೋಗಕ್ಕೆ ಔಷಧ; ಜಗತಃ ಸೇತು – ಜಗತ್ತನ್ನು ಮರ್ಯಾದೆಯಲ್ಲಿ ಹಿಡಿದಿಡುವ ಸೇತುವೆ; ಸತ್ಯಧರ್ಮಪರಾಕ್ರಮ – ಸತ್ಯವಾದ ಗುಣ-ಪರಾಕ್ರಮಗಳುಳ್ಳವನು.',
          },
        },
        {
          n: 32,
          text: 'भूतभव्यभवन्नाथः पवनः पावनोऽनलः ।\nकामहा कामकृत्कान्तः कामः कामप्रदः प्रभुः ॥',
          meaning: {
            en: 'Bhūtabhavyabhavannātha – Lord of past, future and present; Pavana – who purifies, as the wind; Pāvana – who makes all move and become pure; Anala – fire, never satisfied in giving; Kāmahā – who ends the desires of seekers; Kāmakṛt – who fulfils the wishes of devotees; Kānta – the beautiful; Kāma – the one longed for; Kāmaprada – giver of what is desired; Prabhu – the master.',
            kn: 'ಭೂತಭವ್ಯಭವನ್ನಾಥ – ಮೂರು ಕಾಲಗಳ ಒಡೆಯ; ಪವನ – ವಾಯುವಿನಂತೆ ಪಾವನಗೊಳಿಸುವವನು; ಪಾವನ – ಎಲ್ಲವನ್ನೂ ಚಲಿಸಿ ಶುದ್ಧಗೊಳಿಸುವವನು; ಅನಲ – ಕೊಡುವುದರಲ್ಲಿ ತೃಪ್ತಿಯಿಲ್ಲದ ಅಗ್ನಿ; ಕಾಮಹಾ – ಮುಮುಕ್ಷುಗಳ ಕಾಮನೆಗಳನ್ನು ನಾಶಮಾಡುವವನು; ಕಾಮಕೃತ್ – ಭಕ್ತರ ಇಷ್ಟಗಳನ್ನು ಈಡೇರಿಸುವವನು; ಕಾಂತ – ಸುಂದರನು; ಕಾಮ – ಎಲ್ಲರೂ ಬಯಸುವವನು; ಕಾಮಪ್ರದ – ಬಯಸಿದ್ದನ್ನು ಕೊಡುವವನು; ಪ್ರಭು – ಒಡೆಯ.',
          },
        },
        {
          n: 33,
          text: 'युगादिकृद्युगावर्तो नैकमायो महाशनः ।\nअदृश्यो व्यक्तरूपश्च सहस्रजिदनन्तजित् ॥',
          meaning: {
            en: 'Yugādikṛt – who starts each age; Yugāvarta – who turns the cycle of ages; Naikamāya – of many wondrous powers; Mahāśana – the great devourer at dissolution; Adṛśya – invisible; Vyaktarūpa – yet of manifest form, as the cosmos and to his devotees; Sahasrajit – conqueror of thousands of foes; Anantajit – ever victorious.',
            kn: 'ಯುಗಾದಿಕೃತ್ – ಯುಗಗಳನ್ನು ಆರಂಭಿಸುವವನು; ಯುಗಾವರ್ತ – ಯುಗಚಕ್ರವನ್ನು ತಿರುಗಿಸುವವನು; ನೈಕಮಾಯ – ಅನೇಕ ಅದ್ಭುತ ಶಕ್ತಿಗಳವನು; ಮಹಾಶನ – ಪ್ರಳಯದಲ್ಲಿ ಎಲ್ಲವನ್ನೂ ನುಂಗುವವನು; ಅದೃಶ್ಯ – ಕಣ್ಣಿಗೆ ಕಾಣದವನು; ವ್ಯಕ್ತರೂಪ – ಜಗದ್ರೂಪದಲ್ಲೂ ಭಕ್ತರಿಗೂ ವ್ಯಕ್ತನಾಗುವವನು; ಸಹಸ್ರಜಿತ್ – ಸಾವಿರಾರು ಶತ್ರುಗಳನ್ನು ಗೆದ್ದವನು; ಅನಂತಜಿತ್ – ಸದಾ ಜಯಶಾಲಿ.',
          },
        },
        {
          n: 34,
          text: 'इष्टोऽविशिष्टः शिष्टेष्टः शिखण्डी नहुषो वृषः ।\nक्रोधहा क्रोधकृत्कर्ता विश्वबाहुर्महीधरः ॥',
          meaning: {
            en: 'Iṣṭa – the beloved, worshipped in sacrifice; Aviśiṣṭa – present equally in all; Śiṣṭeṣṭa – dear to the wise; Śikhaṇḍī – crowned with a peacock feather; Nahuṣa – who binds beings with his power; Vṛṣa – dharma itself; Krodhahā – destroyer of anger; Krodhakṛtkartā – who turns his wrath on the wicked and is the maker of all; Viśvabāhu – whose arms reach everywhere; Mahīdhara – upholder of the earth.',
            kn: 'ಇಷ್ಟ – ಪ್ರಿಯನು, ಯಜ್ಞಗಳಲ್ಲಿ ಪೂಜಿತನು; ಅವಿಶಿಷ್ಟ – ಎಲ್ಲರಲ್ಲೂ ಸಮನಾಗಿ ಇರುವವನು; ಶಿಷ್ಟೇಷ್ಟ – ಜ್ಞಾನಿಗಳಿಗೆ ಪ್ರಿಯನು; ಶಿಖಂಡೀ – ನವಿಲುಗರಿ ಧರಿಸಿದವನು; ನಹುಷ – ತನ್ನ ಶಕ್ತಿಯಿಂದ ಜೀವಿಗಳನ್ನು ಬಂಧಿಸುವವನು; ವೃಷ – ಧರ್ಮಸ್ವರೂಪ; ಕ್ರೋಧಹಾ – ಕೋಪವನ್ನು ನಾಶಮಾಡುವವನು; ಕ್ರೋಧಕೃತ್ಕರ್ತಾ – ದುಷ್ಟರ ಮೇಲೆ ಕೋಪಿಸುವವನು, ಎಲ್ಲದರ ಕರ್ತನು; ವಿಶ್ವಬಾಹು – ಎಲ್ಲೆಡೆ ಚಾಚಿದ ಬಾಹುಗಳವನು; ಮಹೀಧರ – ಭೂಮಿಯನ್ನು ಧರಿಸಿದವನು.',
          },
        },
        {
          n: 35,
          text: 'अच्युतः प्रथितः प्राणः प्राणदो वासवानुजः ।\nअपां निधिरधिष्ठानमप्रमत्तः प्रतिष्ठितः ॥',
          meaning: {
            en: 'Acyuta – who never falls; Prathita – the renowned; Prāṇa – life; Prāṇada – giver of strength; Vāsavānuja – younger brother of Indra; Apāṃ nidhi – the ocean, treasure of the waters; Adhiṣṭhānam – the ground of all; Apramatta – ever vigilant; Pratiṣṭhita – established in his own glory.',
            kn: 'ಅಚ್ಯುತ – ಎಂದೂ ಜಾರದವನು; ಪ್ರಥಿತ – ಪ್ರಸಿದ್ಧನು; ಪ್ರಾಣ – ಜೀವನ; ಪ್ರಾಣದ – ಬಲ ಕೊಡುವವನು; ವಾಸವಾನುಜ – ಇಂದ್ರನ ತಮ್ಮ; ಅಪಾಂ ನಿಧಿ – ಜಲನಿಧಿಯಾದ ಸಮುದ್ರ; ಅಧಿಷ್ಠಾನ – ಎಲ್ಲದಕ್ಕೂ ಆಧಾರ; ಅಪ್ರಮತ್ತ – ಸದಾ ಜಾಗರೂಕನು; ಪ್ರತಿಷ್ಠಿತ – ತನ್ನ ಮಹಿಮೆಯಲ್ಲೇ ನೆಲೆಸಿದವನು.',
          },
        },
        {
          n: 36,
          text: 'स्कन्दः स्कन्दधरो धुर्यो वरदो वायुवाहनः ।\nवासुदेवो बृहद्भानुरादिदेवः पुरन्दरः ॥',
          meaning: {
            en: 'Skanda – who flows as nectar and dries as the wind; Skandadhara – upholder of the path of dharma; Dhurya – who bears the yoke of the world; Varada – giver of boons; Vāyuvāhana – who makes the winds move; Vāsudeva – who dwells in all and shines; Bṛhadbhānu – of vast radiance; Ādideva – the first God; Purandara – destroyer of the demons\' cities.',
            kn: 'ಸ್ಕಂದ – ಅಮೃತವಾಗಿ ಹರಿಯುವವನು, ವಾಯುವಾಗಿ ಒಣಗಿಸುವವನು; ಸ್ಕಂದಧರ – ಧರ್ಮಮಾರ್ಗವನ್ನು ಕಾಯುವವನು; ಧುರ್ಯ – ಜಗತ್ತಿನ ಭಾರ ಹೊತ್ತವನು; ವರದ – ವರ ಕೊಡುವವನು; ವಾಯುವಾಹನ – ವಾಯುಗಳನ್ನು ಚಲಿಸುವವನು; ವಾಸುದೇವ – ಎಲ್ಲರಲ್ಲಿ ವಾಸಿಸಿ ಪ್ರಕಾಶಿಸುವವನು; ಬೃಹದ್ಭಾನು – ಮಹಾ ಕಾಂತಿಯುಳ್ಳವನು; ಆದಿದೇವ – ಮೊದಲ ದೇವ; ಪುರಂದರ – ದೈತ್ಯರ ಪುರಗಳನ್ನು ನಾಶಮಾಡಿದವನು.',
          },
        },
        {
          n: 37,
          text: 'अशोकस्तारणस्तारः शूरः शौरिर्जनेश्वरः ।\nअनुकूलः शतावर्तः पद्मी पद्मनिभेक्षणः ॥',
          meaning: {
            en: 'Aśoka – free from grief; Tāraṇa – who ferries across; Tāra – the saviour; Śūra – the valiant; Śauri – born in Śūra\'s line; Janeśvara – Lord of people; Anukūla – favourable to all; Śatāvarta – who comes again in many descents; Padmī – holding a lotus; Padmanibhekṣaṇa – with lotus-like eyes.',
            kn: 'ಅಶೋಕ – ದುಃಖವಿಲ್ಲದವನು; ತಾರಣ – ದಾಟಿಸುವವನು; ತಾರ – ರಕ್ಷಕನು; ಶೂರ – ವೀರನು; ಶೌರಿ – ಶೂರವಂಶದಲ್ಲಿ ಜನಿಸಿದವನು; ಜನೇಶ್ವರ – ಜನರ ಒಡೆಯ; ಅನುಕೂಲ – ಎಲ್ಲರಿಗೂ ಹಿತನು; ಶತಾವರ್ತ – ಅನೇಕ ಅವತಾರಗಳಲ್ಲಿ ಬರುವವನು; ಪದ್ಮೀ – ಕೈಯಲ್ಲಿ ಕಮಲ ಹಿಡಿದವನು; ಪದ್ಮನಿಭೇಕ್ಷಣ – ಕಮಲದಂತಹ ಕಣ್ಣುಗಳವನು.',
          },
        },
        {
          n: 38,
          text: 'पद्मनाभोऽरविन्दाक्षः पद्मगर्भः शरीरभृत् ।\nमहर्द्धिरृद्धो वृद्धात्मा महाक्षो गरुडध्वजः ॥',
          meaning: {
            en: 'Padmanābha – lotus-navelled; Aravindākṣa – lotus-eyed; Padmagarbha – worshipped in the lotus of the heart; Śarīrabhṛt – who sustains all bodies; Maharddhi – of great riches; Ṛddha – prosperous, grown into the world; Vṛddhātmā – the ancient Self; Mahākṣa – of great eyes; Garuḍadhvaja – whose banner bears Garuḍa.',
            kn: 'ಪದ್ಮನಾಭ – ಕಮಲನಾಭ; ಅರವಿಂದಾಕ್ಷ – ಕಮಲನಯನ; ಪದ್ಮಗರ್ಭ – ಹೃದಯಕಮಲದಲ್ಲಿ ಪೂಜಿಸಲ್ಪಡುವವನು; ಶರೀರಭೃತ್ – ಎಲ್ಲ ದೇಹಗಳನ್ನು ಪೋಷಿಸುವವನು; ಮಹರ್ದ್ಧಿ – ಮಹಾ ಐಶ್ವರ್ಯವುಳ್ಳವನು; ಋದ್ಧ – ಜಗದ್ರೂಪದಲ್ಲಿ ಬೆಳೆದವನು; ವೃದ್ಧಾತ್ಮಾ – ಪುರಾತನ ಆತ್ಮ; ಮಹಾಕ್ಷ – ವಿಶಾಲ ಕಣ್ಣುಗಳವನು; ಗರುಡಧ್ವಜ – ಗರುಡಧ್ವಜವುಳ್ಳವನು.',
          },
        },
        {
          n: 39,
          text: 'अतुलः शरभो भीमः समयज्ञो हविर्हरिः ।\nसर्वलक्षणलक्षण्यो लक्ष्मीवान् समितिञ्जयः ॥',
          meaning: {
            en: 'Atula – incomparable; Śarabha – who shines within perishable bodies; Bhīma – the awe-inspiring; Samayajña – who knows the right time and keeps the order of things; Havirhari – who receives the offerings; Sarvalakṣaṇalakṣaṇya – known through every means of knowledge; Lakṣmīvān – ever with Lakṣmī; Samitiñjaya – victor in battle.',
            kn: 'ಅತುಲ – ಸರಿಸಾಟಿಯಿಲ್ಲದವನು; ಶರಭ – ನಶ್ವರ ದೇಹಗಳಲ್ಲಿ ಪ್ರಕಾಶಿಸುವವನು; ಭೀಮ – ಭಯವನ್ನುಂಟುಮಾಡುವವನು; ಸಮಯಜ್ಞ – ಕಾಲ-ಮರ್ಯಾದೆಗಳನ್ನು ಬಲ್ಲವನು; ಹವಿರ್ಹರಿ – ಹವಿಸ್ಸನ್ನು ಸ್ವೀಕರಿಸುವವನು; ಸರ್ವಲಕ್ಷಣಲಕ್ಷಣ್ಯ – ಎಲ್ಲ ಪ್ರಮಾಣಗಳಿಂದ ತಿಳಿಯಲ್ಪಡುವವನು; ಲಕ್ಷ್ಮೀವಾನ್ – ಸದಾ ಲಕ್ಷ್ಮಿಯೊಡನಿರುವವನು; ಸಮಿತಿಂಜಯ – ಯುದ್ಧದಲ್ಲಿ ಜಯಿಸುವವನು.',
          },
        },
        {
          n: 40,
          text: 'विक्षरो रोहितो मार्गो हेतुर्दामोदरः सहः ।\nमहीधरो महाभागो वेगवानमिताशनः ॥',
          meaning: {
            en: 'Vikṣara – undecaying; Rohita – who took the form of a red fish; Mārga – the way to liberation; Hetu – the cause; Dāmodara – bound at the waist by Yaśodā\'s cord, and reached through self-control; Saha – the forbearing; Mahīdhara – bearer of the earth; Mahābhāga – of great fortune; Vegavān – swift; Amitāśana – of boundless appetite at dissolution.',
            kn: 'ವಿಕ್ಷರ – ಕ್ಷಯವಿಲ್ಲದವನು; ರೋಹಿತ – ಕೆಂಪು ಮೀನಿನ ರೂಪ ತಾಳಿದವನು; ಮಾರ್ಗ – ಮೋಕ್ಷದ ದಾರಿ; ಹೇತು – ಕಾರಣ; ದಾಮೋದರ – ಯಶೋದೆಯ ಹಗ್ಗದಿಂದ ಸೊಂಟಕ್ಕೆ ಕಟ್ಟಲ್ಪಟ್ಟವನು, ಇಂದ್ರಿಯನಿಗ್ರಹದಿಂದ ಹೊಂದಲ್ಪಡುವವನು; ಸಹ – ಸಹನಶೀಲನು; ಮಹೀಧರ – ಭೂಮಿಯನ್ನು ಧರಿಸಿದವನು; ಮಹಾಭಾಗ – ಮಹಾ ಭಾಗ್ಯಶಾಲಿ; ವೇಗವಾನ್ – ವೇಗಶಾಲಿ; ಅಮಿತಾಶನ – ಪ್ರಳಯದಲ್ಲಿ ಎಲ್ಲವನ್ನೂ ಭಕ್ಷಿಸುವವನು.',
          },
        },
        {
          n: 41,
          text: 'उद्भवः क्षोभणो देवः श्रीगर्भः परमेश्वरः ।\nकरणं कारणं कर्ता विकर्ता गहनो गुहः ॥',
          meaning: {
            en: 'Udbhava – the origin of all; Kṣobhaṇa – who stirs nature into creation; Deva – the shining one at play; Śrīgarbha – who holds Śrī within; Parameśvara – the supreme Lord; Karaṇam – the instrument; Kāraṇam – the cause; Kartā – the doer; Vikartā – maker of the varied world; Gahana – unfathomable; Guha – the hidden one.',
            kn: 'ಉದ್ಭವ – ಎಲ್ಲದರ ಉಗಮ; ಕ್ಷೋಭಣ – ಸೃಷ್ಟಿಗಾಗಿ ಪ್ರಕೃತಿಯನ್ನು ಕದಡುವವನು; ದೇವ – ಲೀಲಾಮಯನಾಗಿ ಪ್ರಕಾಶಿಸುವವನು; ಶ್ರೀಗರ್ಭ – ಲಕ್ಷ್ಮಿಯನ್ನು ತನ್ನೊಳಗಿಟ್ಟುಕೊಂಡವನು; ಪರಮೇಶ್ವರ – ಪರಮ ಒಡೆಯ; ಕರಣ – ಸಾಧನ; ಕಾರಣ – ಮೂಲಕಾರಣ; ಕರ್ತಾ – ಮಾಡುವವನು; ವಿಕರ್ತಾ – ವೈವಿಧ್ಯಮಯ ಜಗತ್ತನ್ನು ರಚಿಸಿದವನು; ಗಹನ – ಅಗಾಧನು; ಗುಹ – ಮರೆಯಾಗಿರುವವನು.',
          },
        },
        {
          n: 42,
          text: 'व्यवसायो व्यवस्थानः संस्थानः स्थानदो ध्रुवः ।\nपरर्द्धिः परमस्पष्टस्तुष्टः पुष्टः शुभेक्षणः ॥',
          meaning: {
            en: 'Vyavasāya – of resolute knowledge; Vyavasthāna – the basis of all order; Saṃsthāna – the final resting place; Sthānada – who grants each his rightful place; Dhruva – the unchanging; Pararddhi – of supreme glory; Paramaspaṣṭa – supremely evident; Tuṣṭa – ever content; Puṣṭa – ever full; Śubhekṣaṇa – whose glance brings good.',
            kn: 'ವ್ಯವಸಾಯ – ನಿಶ್ಚಿತ ಜ್ಞಾನಸ್ವರೂಪ; ವ್ಯವಸ್ಥಾನ – ಎಲ್ಲ ವ್ಯವಸ್ಥೆಗಳ ಆಧಾರ; ಸಂಸ್ಥಾನ – ಕೊನೆಯ ನೆಲೆ; ಸ್ಥಾನದ – ಪ್ರತಿಯೊಬ್ಬರಿಗೂ ಯೋಗ್ಯ ಸ್ಥಾನ ಕೊಡುವವನು; ಧ್ರುವ – ಅಚಲನು; ಪರರ್ದ್ಧಿ – ಪರಮ ಐಶ್ವರ್ಯವುಳ್ಳವನು; ಪರಮಸ್ಪಷ್ಟ – ಅತ್ಯಂತ ಸ್ಪಷ್ಟನು; ತುಷ್ಟ – ಸದಾ ತೃಪ್ತನು; ಪುಷ್ಟ – ಸದಾ ಪೂರ್ಣನು; ಶುಭೇಕ್ಷಣ – ಶುಭ ದೃಷ್ಟಿಯುಳ್ಳವನು.',
          },
        },
        {
          n: 43,
          text: 'रामो विरामो विरजो मार्गो नेयो नयोऽनयः ।\nवीरः शक्तिमतां श्रेष्ठो धर्मो धर्मविदुत्तमः ॥',
          meaning: {
            en: 'Rāma – in whom the yogis delight; Virāma – where all things come to rest; Viraja – free from passion; Mārga – the path; Neya – who lets himself be led by devotion; Naya – the guide; Anaya – who has no one to lead him; Vīra – the hero; Śaktimatāṃ śreṣṭha – mightiest of the mighty; Dharma – dharma itself; Dharmaviduttama – greatest knower of dharma.',
            kn: 'ರಾಮ – ಯೋಗಿಗಳು ಆನಂದಿಸುವವನು; ವಿರಾಮ – ಎಲ್ಲವೂ ವಿಶ್ರಮಿಸುವ ನೆಲೆ; ವಿರಜ – ರಜೋಗುಣವಿಲ್ಲದವನು; ಮಾರ್ಗ – ದಾರಿ; ನೇಯ – ಭಕ್ತಿಗೆ ಒಲಿಯುವವನು; ನಯ – ಮಾರ್ಗದರ್ಶಕ; ಅನಯ – ತನ್ನನ್ನು ನಡೆಸುವವರಿಲ್ಲದವನು; ವೀರ – ವೀರನು; ಶಕ್ತಿಮತಾಂ ಶ್ರೇಷ್ಠ – ಬಲಶಾಲಿಗಳಲ್ಲಿ ಶ್ರೇಷ್ಠನು; ಧರ್ಮ – ಧರ್ಮಸ್ವರೂಪ; ಧರ್ಮವಿದುತ್ತಮ – ಧರ್ಮಜ್ಞರಲ್ಲಿ ಉತ್ತಮನು.',
          },
        },
        {
          n: 44,
          text: 'वैकुण्ठः पुरुषः प्राणः प्राणदः प्रणवः पृथुः ।\nहिरण्यगर्भः शत्रुघ्नो व्याप्तो वायुरधोक्षजः ॥',
          meaning: {
            en: 'Vaikuṇṭha – who removes every obstacle on the way to him; Puruṣa – the first Person; Prāṇa – the life-breath; Prāṇada – who gives and withdraws life; Praṇava – the syllable Om; Pṛthu – the vast; Hiraṇyagarbha – the golden womb; Śatrughna – slayer of enemies; Vyāpta – all-pervading; Vāyu – the wind that carries fragrance; Adhokṣaja – beyond the senses, who never falls from his state.',
            kn: 'ವೈಕುಂಠ – ತನ್ನೆಡೆಗಿನ ದಾರಿಯ ಅಡೆತಡೆಗಳನ್ನು ನಿವಾರಿಸುವವನು; ಪುರುಷ – ಆದಿಪುರುಷ; ಪ್ರಾಣ – ಪ್ರಾಣಸ್ವರೂಪ; ಪ್ರಾಣದ – ಪ್ರಾಣವನ್ನು ಕೊಡುವವನೂ ಹಿಂಪಡೆಯುವವನೂ; ಪ್ರಣವ – ಓಂಕಾರ; ಪೃಥು – ವಿಶಾಲನು; ಹಿರಣ್ಯಗರ್ಭ – ಸ್ವರ್ಣಗರ್ಭ; ಶತ್ರುಘ್ನ – ಶತ್ರುಗಳನ್ನು ಕೊಲ್ಲುವವನು; ವ್ಯಾಪ್ತ – ಸರ್ವವ್ಯಾಪಿ; ವಾಯು – ಸುಗಂಧವನ್ನು ಒಯ್ಯುವ ವಾಯು; ಅಧೋಕ್ಷಜ – ಇಂದ್ರಿಯಾತೀತನು, ತನ್ನ ಸ್ಥಿತಿಯಿಂದ ಜಾರದವನು.',
          },
        },
        {
          n: 45,
          text: 'ऋतुः सुदर्शनः कालः परमेष्ठी परिग्रहः ।\nउग्रः संवत्सरो दक्षो विश्रामो विश्वदक्षिणः ॥',
          meaning: {
            en: 'Ṛtu – the season, time; Sudarśana – lovely to behold, bearer of the Sudarśana; Kāla – time, who counts out all; Parameṣṭhī – who abides in the highest; Parigraha – who accepts what devotees offer; Ugra – the fierce; Saṃvatsara – the year, in which all dwell; Dakṣa – the skilful; Viśrāma – rest for the weary; Viśvadakṣiṇa – generous to all.',
            kn: 'ಋತು – ಕಾಲರೂಪ; ಸುದರ್ಶನ – ಮನೋಹರ ದರ್ಶನವುಳ್ಳವನು, ಸುದರ್ಶನ ಚಕ್ರಧಾರಿ; ಕಾಲ – ಎಲ್ಲವನ್ನೂ ಎಣಿಸುವ ಕಾಲ; ಪರಮೇಷ್ಠೀ – ಪರಮಪದದಲ್ಲಿ ನೆಲೆಸಿದವನು; ಪರಿಗ್ರಹ – ಭಕ್ತರ ಅರ್ಪಣೆಯನ್ನು ಸ್ವೀಕರಿಸುವವನು; ಉಗ್ರ – ಉಗ್ರನು; ಸಂವತ್ಸರ – ಎಲ್ಲರೂ ವಾಸಿಸುವ ಕಾಲ; ದಕ್ಷ – ಕುಶಲನು; ವಿಶ್ರಾಮ – ದಣಿದವರಿಗೆ ವಿಶ್ರಾಂತಿ; ವಿಶ್ವದಕ್ಷಿಣ – ಎಲ್ಲರಿಗೂ ಉದಾರಿ.',
          },
        },
        {
          n: 46,
          text: 'विस्तारः स्थावरस्थाणुः प्रमाणं बीजमव्ययम् ।\nअर्थोऽनर्थो महाकोशो महाभोगो महाधनः ॥',
          meaning: {
            en: 'Vistāra – the expanse in which the worlds spread out; Sthāvarasthāṇu – firm and ever steadfast; Pramāṇam – the measure of truth; Bījam avyayam – the imperishable seed; Artha – the goal all seek; Anartha – who seeks nothing for himself; Mahākośa – of great treasures; Mahābhoga – of great enjoyment; Mahādhana – of great wealth.',
            kn: 'ವಿಸ್ತಾರ – ಲೋಕಗಳು ಹರಡಿರುವ ವಿಸ್ತಾರ; ಸ್ಥಾವರಸ್ಥಾಣು – ಸ್ಥಿರನೂ ಅಚಲನೂ; ಪ್ರಮಾಣ – ಸತ್ಯದ ಅಳತೆಗೋಲು; ಬೀಜಮವ್ಯಯ – ನಾಶವಿಲ್ಲದ ಬೀಜ; ಅರ್ಥ – ಎಲ್ಲರೂ ಬಯಸುವ ಗುರಿ; ಅನರ್ಥ – ತನಗಾಗಿ ಏನನ್ನೂ ಬಯಸದವನು; ಮಹಾಕೋಶ – ಮಹಾ ನಿಧಿಗಳವನು; ಮಹಾಭೋಗ – ಮಹಾ ಭೋಗವುಳ್ಳವನು; ಮಹಾಧನ – ಮಹಾ ಸಂಪತ್ತಿನವನು.',
          },
        },
        {
          n: 47,
          text: 'अनिर्विण्णः स्थविष्ठोऽभूर्धर्मयूपो महामखः ।\nनक्षत्रनेमिर्नक्षत्री क्षमः क्षामः समीहनः ॥',
          meaning: {
            en: 'Anirviṇṇa – never weary; Sthaviṣṭha – the vast; Abhū – the unborn; Dharmayūpa – the sacrificial post to which dharma is bound; Mahāmakha – the great sacrifice; Nakṣatranemi – the hub of the wheel of stars; Nakṣatrī – the moon among the stars; Kṣama – capable and patient; Kṣāma – who remains when all has waned; Samīhana – who strives for the good of the world.',
            kn: 'ಅನಿರ್ವಿಣ್ಣ – ಎಂದೂ ಬೇಸರಗೊಳ್ಳದವನು; ಸ್ಥವಿಷ್ಠ – ವಿಶಾಲನು; ಅಭೂ – ಹುಟ್ಟಿಲ್ಲದವನು; ಧರ್ಮಯೂಪ – ಧರ್ಮವನ್ನು ಬಂಧಿಸಿದ ಯೂಪಸ್ತಂಭ; ಮಹಾಮಖ – ಮಹಾ ಯಜ್ಞ; ನಕ್ಷತ್ರನೇಮಿ – ನಕ್ಷತ್ರಚಕ್ರದ ಕೇಂದ್ರ; ನಕ್ಷತ್ರೀ – ನಕ್ಷತ್ರಗಳ ನಡುವಿನ ಚಂದ್ರ; ಕ್ಷಮ – ಸಮರ್ಥನು, ಕ್ಷಮಾಶೀಲನು; ಕ್ಷಾಮ – ಎಲ್ಲವೂ ಕ್ಷಯಿಸಿದಾಗ ಉಳಿಯುವವನು; ಸಮೀಹನ – ಜಗತ್ತಿನ ಹಿತಕ್ಕಾಗಿ ಯತ್ನಿಸುವವನು.',
          },
        },
        {
          n: 48,
          text: 'यज्ञ इज्यो महेज्यश्च क्रतुः सत्रं सतां गतिः ।\nसर्वदर्शी विमुक्तात्मा सर्वज्ञो ज्ञानमुत्तमम् ॥',
          meaning: {
            en: 'Yajña – sacrifice itself; Ijya – the one to be worshipped; Mahejya – most worthy of worship; Kratu – the sacred rite; Satram – the long sacrifice that protects the good; Satāṃ gati – the goal of the good; Sarvadarśī – all-seeing; Vimuktātmā – ever free; Sarvajña – omniscient; Jñānam uttamam – the highest knowledge.',
            kn: 'ಯಜ್ಞ – ಯಜ್ಞಸ್ವರೂಪ; ಇಜ್ಯ – ಪೂಜಿಸಲ್ಪಡಬೇಕಾದವನು; ಮಹೇಜ್ಯ – ಅತ್ಯಂತ ಪೂಜ್ಯನು; ಕ್ರತು – ಯಾಗಸ್ವರೂಪ; ಸತ್ರ – ಸಜ್ಜನರನ್ನು ಕಾಯುವ ಸತ್ರಯಾಗ; ಸತಾಂ ಗತಿ – ಸಜ್ಜನರ ಗುರಿ; ಸರ್ವದರ್ಶೀ – ಎಲ್ಲವನ್ನೂ ಕಾಣುವವನು; ವಿಮುಕ್ತಾತ್ಮಾ – ನಿತ್ಯಮುಕ್ತನು; ಸರ್ವಜ್ಞ – ಸರ್ವಜ್ಞನು; ಜ್ಞಾನಮುತ್ತಮ – ಉತ್ತಮ ಜ್ಞಾನಸ್ವರೂಪ.',
          },
        },
        {
          n: 49,
          text: 'सुव्रतः सुमुखः सूक्ष्मः सुघोषः सुखदः सुहृत् ।\nमनोहरो जितक्रोधो वीरबाहुर्विदारणः ॥',
          meaning: {
            en: 'Suvrata – of excellent vows; Sumukha – of lovely face; Sūkṣma – the subtle; Sughoṣa – of auspicious sound, the Vedic voice; Sukhada – giver of joy; Suhṛt – the true friend; Manohara – who steals the heart; Jitakrodha – who has conquered anger; Vīrabāhu – mighty-armed; Vidāraṇa – who tears apart the wicked.',
            kn: 'ಸುವ್ರತ – ಶ್ರೇಷ್ಠ ವ್ರತವುಳ್ಳವನು; ಸುಮುಖ – ಸುಂದರ ಮುಖದವನು; ಸೂಕ್ಷ್ಮ – ಸೂಕ್ಷ್ಮನು; ಸುಘೋಷ – ವೇದಘೋಷವುಳ್ಳವನು; ಸುಖದ – ಸುಖ ಕೊಡುವವನು; ಸುಹೃತ್ – ನಿಜವಾದ ಸ್ನೇಹಿತ; ಮನೋಹರ – ಮನಸ್ಸನ್ನು ಸೆಳೆಯುವವನು; ಜಿತಕ್ರೋಧ – ಕೋಪವನ್ನು ಗೆದ್ದವನು; ವೀರಬಾಹು – ಪರಾಕ್ರಮದ ಬಾಹುಗಳವನು; ವಿದಾರಣ – ದುಷ್ಟರನ್ನು ಸೀಳುವವನು.',
          },
        },
        {
          n: 50,
          text: 'स्वापनः स्ववशो व्यापी नैकात्मा नैककर्मकृत् ।\nवत्सरो वत्सलो वत्सी रत्नगर्भो धनेश्वरः ॥',
          meaning: {
            en: 'Svāpana – who lulls beings into the sleep of illusion; Svavaśa – subject only to himself; Vyāpī – all-pervading; Naikātmā – who takes many forms; Naikakarmakṛt – doer of countless deeds; Vatsara – in whom all dwell; Vatsala – tender to his devotees; Vatsī – protector of his children; Ratnagarbha – the ocean full of gems; Dhaneśvara – Lord of wealth.',
            kn: 'ಸ್ವಾಪನ – ಜೀವಿಗಳನ್ನು ಮಾಯಾನಿದ್ರೆಯಲ್ಲಿ ಮಲಗಿಸುವವನು; ಸ್ವವಶ – ತನಗೆ ತಾನೇ ಅಧೀನನು; ವ್ಯಾಪೀ – ಸರ್ವವ್ಯಾಪಿ; ನೈಕಾತ್ಮಾ – ಅನೇಕ ರೂಪಗಳವನು; ನೈಕಕರ್ಮಕೃತ್ – ಅಸಂಖ್ಯ ಕರ್ಮಗಳನ್ನು ಮಾಡುವವನು; ವತ್ಸರ – ಎಲ್ಲರೂ ವಾಸಿಸುವ ನೆಲೆ; ವತ್ಸಲ – ಭಕ್ತವತ್ಸಲ; ವತ್ಸೀ – ತನ್ನ ಮಕ್ಕಳನ್ನು ಕಾಯುವವನು; ರತ್ನಗರ್ಭ – ರತ್ನಗಳಿಂದ ತುಂಬಿದ ಸಮುದ್ರ; ಧನೇಶ್ವರ – ಸಂಪತ್ತಿನ ಒಡೆಯ.',
          },
        },
        {
          n: 51,
          text: 'धर्मगुब्धर्मकृद्धर्मी सदसत्क्षरमक्षरम् ।\nअविज्ञाता सहस्रांशुर्विधाता कृतलक्षणः ॥',
          meaning: {
            en: 'Dharmagup – protector of dharma; Dharmakṛt – who practises dharma; Dharmī – upholder of dharma; Sat – the real; Asat – also the unmanifest; Kṣaram – the perishable world; Akṣaram – the imperishable; Avijñātā – free from the limited knowing of embodied beings; Sahasrāṃśu – thousand-rayed; Vidhātā – the ordainer; Kṛtalakṣaṇa – who laid down the marks of dharma in scripture.',
            kn: 'ಧರ್ಮಗುಪ್ – ಧರ್ಮವನ್ನು ರಕ್ಷಿಸುವವನು; ಧರ್ಮಕೃತ್ – ಧರ್ಮವನ್ನು ಆಚರಿಸುವವನು; ಧರ್ಮೀ – ಧರ್ಮವನ್ನು ಎತ್ತಿಹಿಡಿಯುವವನು; ಸತ್ – ಸತ್ಯವಾದುದು; ಅಸತ್ – ಅವ್ಯಕ್ತವೂ ತಾನೇ; ಕ್ಷರ – ನಶ್ವರ ಜಗತ್ತು; ಅಕ್ಷರ – ಅವಿನಾಶಿ; ಅವಿಜ್ಞಾತಾ – ಜೀವರಂತಹ ಸೀಮಿತ ಅರಿವಿಲ್ಲದವನು; ಸಹಸ್ರಾಂಶು – ಸಾವಿರ ಕಿರಣಗಳವನು; ವಿಧಾತಾ – ವಿಧಿಸುವವನು; ಕೃತಲಕ್ಷಣ – ಶಾಸ್ತ್ರದಲ್ಲಿ ಧರ್ಮದ ಲಕ್ಷಣಗಳನ್ನು ನಿರ್ಧರಿಸಿದವನು.',
          },
        },
        {
          n: 52,
          text: 'गभस्तिनेमिः सत्त्वस्थः सिंहो भूतमहेश्वरः ।\nआदिदेवो महादेवो देवेशो देवभृद्गुरुः ॥',
          meaning: {
            en: 'Gabhastinemi – the hub of the rays, as the sun; Sattvastha – abiding in sattva; Siṃha – lion-like in valour; Bhūtamaheśvara – great Lord of beings; Ādideva – the first God; Mahādeva – the great God; Deveśa – Lord of the gods; Devabhṛdguru – teacher of Indra, sustainer of the gods. (Mādhva teachers read Mahādeva here as Hari, the greatest of all gods.)',
            kn: 'ಗಭಸ್ತಿನೇಮಿ – ಸೂರ್ಯರೂಪದಲ್ಲಿ ಕಿರಣಗಳ ಕೇಂದ್ರ; ಸತ್ತ್ವಸ್ಥ – ಸತ್ತ್ವದಲ್ಲಿ ನೆಲೆಸಿದವನು; ಸಿಂಹ – ಸಿಂಹದಂತೆ ಪರಾಕ್ರಮಿ; ಭೂತಮಹೇಶ್ವರ – ಜೀವಿಗಳ ಮಹಾ ಒಡೆಯ; ಆದಿದೇವ – ಮೊದಲ ದೇವ; ಮಹಾದೇವ – ಮಹಾ ದೇವ; ದೇವೇಶ – ದೇವತೆಗಳ ಒಡೆಯ; ದೇವಭೃದ್ಗುರು – ದೇವತೆಗಳನ್ನು ಪೋಷಿಸುವ ಇಂದ್ರನಿಗೂ ಗುರು. (ಮಾಧ್ವರು ‘ಮಹಾದೇವ’ ಎಂದರೆ ಎಲ್ಲ ದೇವತೆಗಳಿಗಿಂತ ಶ್ರೇಷ್ಠನಾದ ಶ್ರೀಹರಿ ಎನ್ನುತ್ತಾರೆ.)',
          },
        },
        {
          n: 53,
          text: 'उत्तरो गोपतिर्गोप्ता ज्ञानगम्यः पुरातनः ।\nशरीरभूतभृद्भोक्ता कपीन्द्रो भूरिदक्षिणः ॥',
          meaning: {
            en: 'Uttara – who lifts beings out of worldly life, the highest; Gopati – Lord of the cows and of the earth; Goptā – the protector; Jñānagamya – reached through knowledge; Purātana – the ancient; Śarīrabhūtabhṛt – sustainer of the elements that make up bodies; Bhoktā – the enjoyer and protector; Kapīndra – Lord of the monkeys, as Rāma; Bhūridakṣiṇa – who gave lavish gifts in sacrifice.',
            kn: 'ಉತ್ತರ – ಸಂಸಾರದಿಂದ ಮೇಲೆತ್ತುವವನು, ಶ್ರೇಷ್ಠನು; ಗೋಪತಿ – ಗೋವುಗಳ ಹಾಗೂ ಭೂಮಿಯ ಒಡೆಯ; ಗೋಪ್ತಾ – ರಕ್ಷಕನು; ಜ್ಞಾನಗಮ್ಯ – ಜ್ಞಾನದಿಂದ ತಿಳಿಯಲ್ಪಡುವವನು; ಪುರಾತನ – ಪುರಾತನನು; ಶರೀರಭೂತಭೃತ್ – ದೇಹಗಳನ್ನು ರಚಿಸುವ ಭೂತಗಳನ್ನು ಪೋಷಿಸುವವನು; ಭೋಕ್ತಾ – ಭೋಗಿಸುವವನು, ಪಾಲಿಸುವವನು; ಕಪೀಂದ್ರ – ರಾಮನಾಗಿ ವಾನರರ ಒಡೆಯ; ಭೂರಿದಕ್ಷಿಣ – ಯಜ್ಞಗಳಲ್ಲಿ ಅಪಾರ ದಕ್ಷಿಣೆ ಕೊಟ್ಟವನು.',
          },
        },
        {
          n: 54,
          text: 'सोमपोऽमृतपः सोमः पुरुजित्पुरुसत्तमः ।\nविनयो जयः सत्यसन्धो दाशार्हः सात्वतां पतिः ॥',
          meaning: {
            en: 'Somapa – who drinks the soma in sacrifices; Amṛtapa – who drinks the nectar of his own bliss; Soma – the moon that nourishes plants; Purujit – conqueror of many; Purusattama – best among the great; Vinaya – who disciplines the wicked; Jaya – victorious; Satyasandha – true to his word; Dāśārha – born in the Daśārha clan; Sātvatāṃ pati – Lord of the Sātvatas.',
            kn: 'ಸೋಮಪ – ಯಜ್ಞಗಳಲ್ಲಿ ಸೋಮಪಾನ ಮಾಡುವವನು; ಅಮೃತಪ – ತನ್ನ ಆನಂದಾಮೃತವನ್ನು ಸವಿಯುವವನು; ಸೋಮ – ಸಸ್ಯಗಳನ್ನು ಪೋಷಿಸುವ ಚಂದ್ರ; ಪುರುಜಿತ್ – ಅನೇಕರನ್ನು ಗೆದ್ದವನು; ಪುರುಸತ್ತಮ – ಶ್ರೇಷ್ಠರಲ್ಲಿ ಶ್ರೇಷ್ಠನು; ವಿನಯ – ದುಷ್ಟರನ್ನು ಶಿಕ್ಷಿಸುವವನು; ಜಯ – ಜಯಶಾಲಿ; ಸತ್ಯಸಂಧ – ಕೊಟ್ಟ ಮಾತಿಗೆ ತಪ್ಪದವನು; ದಾಶಾರ್ಹ – ದಾಶಾರ್ಹ ವಂಶದವನು; ಸಾತ್ವತಾಂ ಪತಿ – ಸಾತ್ವತರ ಒಡೆಯ.',
          },
        },
        {
          n: 55,
          text: 'जीवो विनयिता साक्षी मुकुन्दोऽमितविक्रमः ।\nअम्भोनिधिरनन्तात्मा महोदधिशयोऽन्तकः ॥',
          meaning: {
            en: 'Jīva – who gives life to all; Vinayitāsākṣī – who sees the humility of his devotees; Mukunda – giver of liberation; Amitavikrama – of boundless strides; Ambhonidhi – the ocean of the waters; Anantātmā – the infinite Self; Mahodadhiśaya – who rests on the great ocean; Antaka – who brings all to an end.',
            kn: 'ಜೀವ – ಎಲ್ಲರಿಗೂ ಜೀವ ಕೊಡುವವನು; ವಿನಯಿತಾಸಾಕ್ಷೀ – ಭಕ್ತರ ವಿನಯವನ್ನು ಕಾಣುವವನು; ಮುಕುಂದ – ಮೋಕ್ಷ ಕೊಡುವವನು; ಅಮಿತವಿಕ್ರಮ – ಅಳೆಯಲಾಗದ ಪರಾಕ್ರಮ-ಹೆಜ್ಜೆಗಳವನು; ಅಂಭೋನಿಧಿ – ಜಲನಿಧಿ; ಅನಂತಾತ್ಮಾ – ಅನಂತ ಸ್ವರೂಪ; ಮಹೋದಧಿಶಯ – ಮಹಾಸಮುದ್ರದಲ್ಲಿ ಪವಡಿಸಿದವನು; ಅಂತಕ – ಎಲ್ಲದರ ಅಂತ್ಯ ಮಾಡುವವನು.',
          },
        },
        {
          n: 56,
          text: 'अजो महार्हः स्वाभाव्यो जितामित्रः प्रमोदनः ।\nआनन्दो नन्दनो नन्दः सत्यधर्मा त्रिविक्रमः ॥',
          meaning: {
            en: 'Aja – the unborn; Mahārha – most worthy of worship; Svābhāvya – ever in his own nature; Jitāmitra – conqueror of enemies within and without; Pramodana – who delights and gladdens; Ānanda – bliss itself; Nandana – who gives joy; Nanda – full of joy; Satyadharmā – whose virtues are true; Trivikrama – who took the three strides.',
            kn: 'ಅಜ – ಹುಟ್ಟಿಲ್ಲದವನು; ಮಹಾರ್ಹ – ಪರಮ ಪೂಜ್ಯನು; ಸ್ವಾಭಾವ್ಯ – ಸದಾ ಸ್ವಸ್ವರೂಪದಲ್ಲಿರುವವನು; ಜಿತಾಮಿತ್ರ – ಒಳ-ಹೊರಗಿನ ಶತ್ರುಗಳನ್ನು ಗೆದ್ದವನು; ಪ್ರಮೋದನ – ಸಂತೋಷಪಡಿಸುವವನು; ಆನಂದ – ಆನಂದಸ್ವರೂಪ; ನಂದನ – ಆನಂದ ಕೊಡುವವನು; ನಂದ – ಆನಂದಪೂರ್ಣನು; ಸತ್ಯಧರ್ಮಾ – ಸತ್ಯವಾದ ಗುಣಗಳವನು; ತ್ರಿವಿಕ್ರಮ – ಮೂರು ಹೆಜ್ಜೆಗಳಿಂದ ಲೋಕಗಳನ್ನು ಅಳೆದವನು.',
          },
        },
        {
          n: 57,
          text: 'महर्षिः कपिलाचार्यः कृतज्ञो मेदिनीपतिः ।\nत्रिपदस्त्रिदशाध्यक्षो महाशृङ्गः कृतान्तकृत् ॥',
          meaning: {
            en: 'Maharṣi Kapilācārya – the great sage Kapila, teacher of Sāṅkhya; Kṛtajña – who knows every deed; Medinīpati – Lord of the earth; Tripada – whose three steps spanned the worlds; Tridaśādhyakṣa – overseer of the gods; Mahāśṛṅga – the great-horned Fish who towed the ark; Kṛtāntakṛt – who ends even death.',
            kn: 'ಮಹರ್ಷಿ ಕಪಿಲಾಚಾರ್ಯ – ಸಾಂಖ್ಯವನ್ನು ಉಪದೇಶಿಸಿದ ಮಹರ್ಷಿ ಕಪಿಲ; ಕೃತಜ್ಞ – ಎಲ್ಲ ಕರ್ಮಗಳನ್ನು ಬಲ್ಲವನು; ಮೇದಿನೀಪತಿ – ಭೂಮಿಯ ಒಡೆಯ; ತ್ರಿಪದ – ಮೂರು ಹೆಜ್ಜೆಗಳಿಂದ ಲೋಕಗಳನ್ನು ವ್ಯಾಪಿಸಿದವನು; ತ್ರಿದಶಾಧ್ಯಕ್ಷ – ದೇವತೆಗಳ ಅಧ್ಯಕ್ಷ; ಮಹಾಶೃಂಗ – ದೋಣಿಯನ್ನು ಎಳೆದ ದೊಡ್ಡ ಕೊಂಬಿನ ಮತ್ಸ್ಯ; ಕೃತಾಂತಕೃತ್ – ಮೃತ್ಯುವಿಗೂ ಅಂತ್ಯ ತರುವವನು.',
          },
        },
        {
          n: 58,
          text: 'महावराहो गोविन्दः सुषेणः कनकाङ्गदी ।\nगुह्यो गभीरो गहनो गुप्तश्चक्रगदाधरः ॥',
          meaning: {
            en: 'Mahāvarāha – the great Boar; Govinda – who found the lost earth; Suṣeṇa – with a glorious host of attendants; Kanakāṅgadī – wearing golden armlets; Guhya – the secret of the Upaniṣads; Gabhīra – profound; Gahana – unfathomable; Gupta – hidden; Cakragadādhara – bearer of discus and mace.',
            kn: 'ಮಹಾವರಾಹ – ಮಹಾ ವರಾಹರೂಪಿ; ಗೋವಿಂದ – ಮುಳುಗಿದ ಭೂಮಿಯನ್ನು ಪಡೆದವನು; ಸುಷೇಣ – ಶ್ರೇಷ್ಠ ಪರಿವಾರ-ಸೇನೆಯುಳ್ಳವನು; ಕನಕಾಂಗದೀ – ಚಿನ್ನದ ತೋಳ್ಬಂದಿ ಧರಿಸಿದವನು; ಗುಹ್ಯ – ಉಪನಿಷತ್ತುಗಳ ರಹಸ್ಯ; ಗಭೀರ – ಗಂಭೀರನು; ಗಹನ – ಅಗಾಧನು; ಗುಪ್ತ – ಮರೆಯಾಗಿರುವವನು; ಚಕ್ರಗದಾಧರ – ಚಕ್ರ-ಗದೆಗಳನ್ನು ಧರಿಸಿದವನು.',
          },
        },
        {
          n: 59,
          text: 'वेधाः स्वाङ्गोऽजितः कृष्णो दृढः सङ्कर्षणोऽच्युतः ।\nवरुणो वारुणो वृक्षः पुष्कराक्षो महामनाः ॥',
          meaning: {
            en: 'Vedhāḥ – the creator; Svāṅga – who is himself his own means of action; Ajita – unconquered; Kṛṣṇa – the dark one, also Kṛṣṇa Dvaipāyana Vyāsa; Dṛḍha – firm; Saṅkarṣaṇa Acyuta – the unfailing one who draws all into himself; Varuṇa – who, like the setting sun, gathers in the rays; Vāruṇa – son of Varuṇa, as the sage Vasiṣṭha; Vṛkṣa – firm as a tree; Puṣkarākṣa – lotus-eyed; Mahāmanāḥ – of great mind.',
            kn: 'ವೇಧಾ – ಸೃಷ್ಟಿಕರ್ತ; ಸ್ವಾಂಗ – ತಾನೇ ತನ್ನ ಕಾರ್ಯಸಾಧನ; ಅಜಿತ – ಸೋಲಿಲ್ಲದವನು; ಕೃಷ್ಣ – ಶ್ಯಾಮಲನು, ಕೃಷ್ಣದ್ವೈಪಾಯನ ವ್ಯಾಸನೂ ಹೌದು; ದೃಢ – ದೃಢನು; ಸಂಕರ್ಷಣೋಽಚ್ಯುತ – ಎಲ್ಲವನ್ನೂ ತನ್ನೆಡೆಗೆ ಸೆಳೆಯುವ ಅಚ್ಯುತ; ವರುಣ – ಅಸ್ತಮಿಸುವ ಸೂರ್ಯನಂತೆ ಕಿರಣಗಳನ್ನು ಹಿಂತೆಗೆಯುವವನು; ವಾರುಣ – ವರುಣಪುತ್ರನಾದ ವಸಿಷ್ಠನೂ ತಾನೇ; ವೃಕ್ಷ – ವೃಕ್ಷದಂತೆ ಸ್ಥಿರನು; ಪುಷ್ಕರಾಕ್ಷ – ಕಮಲನಯನ; ಮಹಾಮನಾ – ಮಹಾ ಮನಸ್ಸಿನವನು.',
          },
        },
        {
          n: 60,
          text: 'भगवान् भगहाऽऽनन्दी वनमाली हलायुधः ।\nआदित्यो ज्योतिरादित्यः सहिष्णुर्गतिसत्तमः ॥',
          meaning: {
            en: 'Bhagavān – possessed of the six divine excellences; Bhagahā – who withdraws them at dissolution; Ānandī – blissful; Vanamālī – wearing the forest garland; Halāyudha – bearing the plough as weapon, as Balarāma; Āditya – son of Aditi, as Vāmana; Jyotirāditya – the light within the sun; Sahiṣṇu – who bears all opposites; Gatisattama – the best refuge.',
            kn: 'ಭಗವಾನ್ – ಆರು ದಿವ್ಯ ಗುಣಗಳುಳ್ಳವನು; ಭಗಹಾ – ಪ್ರಳಯದಲ್ಲಿ ಐಶ್ವರ್ಯಗಳನ್ನು ಹಿಂತೆಗೆಯುವವನು; ಆನಂದೀ – ಆನಂದಮಯನು; ವನಮಾಲೀ – ವನಮಾಲೆ ಧರಿಸಿದವನು; ಹಲಾಯುಧ – ಬಲರಾಮನಾಗಿ ನೇಗಿಲನ್ನು ಆಯುಧವಾಗಿ ಹಿಡಿದವನು; ಆದಿತ್ಯ – ವಾಮನನಾಗಿ ಅದಿತಿಯ ಮಗನು; ಜ್ಯೋತಿರಾದಿತ್ಯ – ಸೂರ್ಯನೊಳಗಿನ ಜ್ಯೋತಿ; ಸಹಿಷ್ಣು – ದ್ವಂದ್ವಗಳನ್ನು ಸಹಿಸುವವನು; ಗತಿಸತ್ತಮ – ಶ್ರೇಷ್ಠ ಆಶ್ರಯ.',
          },
        },
        {
          n: 61,
          text: 'सुधन्वा खण्डपरशुर्दारुणो द्रविणप्रदः ।\nदिवःस्पृक् सर्वदृग्व्यासो वाचस्पतिरयोनिजः ॥',
          meaning: {
            en: 'Sudhanvā – with the splendid bow Śārṅga; Khaṇḍaparaśu – with the axe that cuts down foes, as Paraśurāma; Dāruṇa – stern to the wicked; Draviṇaprada – giver of wealth; Divaḥspṛk – who reaches up to heaven; Sarvadṛgvyāsa – the all-seeing one who arranged the Veda; Vācaspatir ayonija – Lord of learning, not born from a womb.',
            kn: 'ಸುಧನ್ವಾ – ಶ್ರೇಷ್ಠ ಶಾರ್ಙ್ಗ ಧನುಸ್ಸುಳ್ಳವನು; ಖಂಡಪರಶು – ಪರಶುರಾಮನಾಗಿ ಶತ್ರುಗಳನ್ನು ಕತ್ತರಿಸುವ ಕೊಡಲಿಯವನು; ದಾರುಣ – ದುಷ್ಟರಿಗೆ ಕಠೋರನು; ದ್ರವಿಣಪ್ರದ – ಸಂಪತ್ತು ಕೊಡುವವನು; ದಿವಃಸ್ಪೃಕ್ – ಸ್ವರ್ಗವನ್ನು ಮುಟ್ಟುವಷ್ಟು ಎತ್ತರನು; ಸರ್ವದೃಗ್ವ್ಯಾಸ – ವೇದವನ್ನು ವಿಭಾಗಿಸಿದ ಸರ್ವದರ್ಶಿ; ವಾಚಸ್ಪತಿರಯೋನಿಜ – ವಿದ್ಯೆಯ ಒಡೆಯ, ಗರ್ಭದಿಂದ ಹುಟ್ಟದವನು.',
          },
        },
        {
          n: 62,
          text: 'त्रिसामा सामगः साम निर्वाणं भेषजं भिषक् ।\nसंन्यासकृच्छमः शान्तो निष्ठा शान्तिः परायणम् ॥',
          meaning: {
            en: 'Trisāmā – praised by the three Sāman chants; Sāmaga – singer of the Sāma; Sāma – the Sāma itself; Nirvāṇam – liberation; Bheṣajam – the remedy for worldly ills; Bhiṣak – the physician; Saṃnyāsakṛt – who established renunciation; Śama – calm; Śānta – peaceful; Niṣṭhā – the final resting place; Śānti – peace itself; Parāyaṇam – the supreme refuge.',
            kn: 'ತ್ರಿಸಾಮಾ – ಮೂರು ಸಾಮಗಾನಗಳಿಂದ ಸ್ತುತನಾದವನು; ಸಾಮಗ – ಸಾಮವನ್ನು ಹಾಡುವವನು; ಸಾಮ – ಸಾಮವೇದವೇ ತಾನು; ನಿರ್ವಾಣ – ಮೋಕ್ಷ; ಭೇಷಜ – ಸಂಸಾರರೋಗಕ್ಕೆ ಮದ್ದು; ಭಿಷಕ್ – ವೈದ್ಯನು; ಸಂನ್ಯಾಸಕೃತ್ – ಸಂನ್ಯಾಸಾಶ್ರಮವನ್ನು ಸ್ಥಾಪಿಸಿದವನು; ಶಮ – ಶಮಸ್ವರೂಪ; ಶಾಂತ – ಶಾಂತನು; ನಿಷ್ಠಾ – ಕೊನೆಯ ನೆಲೆ; ಶಾಂತಿ – ಶಾಂತಿಸ್ವರೂಪ; ಪರಾಯಣ – ಪರಮ ಆಶ್ರಯ.',
          },
        },
        {
          n: 63,
          text: 'शुभाङ्गः शान्तिदः स्रष्टा कुमुदः कुवलेशयः ।\nगोहितो गोपतिर्गोप्ता वृषभाक्षो वृषप्रियः ॥',
          meaning: {
            en: 'Śubhāṅga – of auspicious form; Śāntida – giver of peace; Sraṣṭā – the creator; Kumuda – who rejoices in the earth; Kuvaleśaya – who rests on the waters; Gohita – who cares for the cows; Gopati – Lord of the earth; Goptā – the protector; Vṛṣabhākṣa – whose eyes shower dharma; Vṛṣapriya – who loves dharma.',
            kn: 'ಶುಭಾಂಗ – ಮಂಗಳಕರ ರೂಪದವನು; ಶಾಂತಿದ – ಶಾಂತಿ ಕೊಡುವವನು; ಸ್ರಷ್ಟಾ – ಸೃಷ್ಟಿಕರ್ತ; ಕುಮುದ – ಭೂಮಿಯಲ್ಲಿ ಸಂತೋಷಿಸುವವನು; ಕುವಲೇಶಯ – ಜಲದಲ್ಲಿ ಪವಡಿಸಿದವನು; ಗೋಹಿತ – ಗೋವುಗಳ ಹಿತ ಮಾಡುವವನು; ಗೋಪತಿ – ಭೂಮಿಯ ಒಡೆಯ; ಗೋಪ್ತಾ – ರಕ್ಷಕ; ವೃಷಭಾಕ್ಷ – ಧರ್ಮವನ್ನು ಸುರಿಸುವ ಕಣ್ಣುಗಳವನು; ವೃಷಪ್ರಿಯ – ಧರ್ಮಪ್ರಿಯನು.',
          },
        },
        {
          n: 64,
          text: 'अनिवर्ती निवृत्तात्मा सङ्क्षेप्ता क्षेमकृच्छिवः ।\nश्रीवत्सवक्षाः श्रीवासः श्रीपतिः श्रीमतां वरः ॥',
          meaning: {
            en: 'Anivartī – who never turns back from dharma or battle; Nivṛttātmā – whose mind is withdrawn from sense objects; Saṅkṣeptā – who draws the universe together at dissolution; Kṣemakṛt – who brings well-being; Śiva – the auspicious; Śrīvatsavakṣāḥ – with the Śrīvatsa on his chest; Śrīvāsa – in whom Śrī dwells; Śrīpati – husband of Śrī; Śrīmatāṃ vara – best of the glorious.',
            kn: 'ಅನಿವರ್ತೀ – ಧರ್ಮದಿಂದಲೂ ಯುದ್ಧದಿಂದಲೂ ಹಿಂದಿರುಗದವನು; ನಿವೃತ್ತಾತ್ಮಾ – ವಿಷಯಗಳಿಂದ ಮನಸ್ಸನ್ನು ಹಿಂತೆಗೆದವನು; ಸಂಕ್ಷೇಪ್ತಾ – ಪ್ರಳಯದಲ್ಲಿ ವಿಶ್ವವನ್ನು ಸಂಕುಚಿಸುವವನು; ಕ್ಷೇಮಕೃತ್ – ಕ್ಷೇಮ ತರುವವನು; ಶಿವ – ಮಂಗಳಮಯ; ಶ್ರೀವತ್ಸವಕ್ಷಾ – ಎದೆಯಲ್ಲಿ ಶ್ರೀವತ್ಸವುಳ್ಳವನು; ಶ್ರೀವಾಸ – ಲಕ್ಷ್ಮಿ ವಾಸಿಸುವ ನೆಲೆ; ಶ್ರೀಪತಿ – ಲಕ್ಷ್ಮೀಪತಿ; ಶ್ರೀಮತಾಂ ವರ – ಐಶ್ವರ್ಯವಂತರಲ್ಲಿ ಶ್ರೇಷ್ಠನು.',
          },
        },
        {
          n: 65,
          text: 'श्रीदः श्रीशः श्रीनिवासः श्रीनिधिः श्रीविभावनः ।\nश्रीधरः श्रीकरः श्रेयः श्रीमाँल्लोकत्रयाश्रयः ॥',
          meaning: {
            en: 'Śrīda – giver of prosperity; Śrīśa – Lord of Śrī; Śrīnivāsa – who dwells among the blessed; Śrīnidhi – the treasure of all glory; Śrīvibhāvana – who distributes fortune according to deeds; Śrīdhara – who bears Śrī on his chest; Śrīkara – who makes his devotees prosper; Śreyaḥ – the highest good; Śrīmān – glorious; Lokatrayāśraya – refuge of the three worlds.',
            kn: 'ಶ್ರೀದ – ಸಂಪತ್ತು ಕೊಡುವವನು; ಶ್ರೀಶ – ಲಕ್ಷ್ಮಿಯ ಒಡೆಯ; ಶ್ರೀನಿವಾಸ – ಪುಣ್ಯವಂತರಲ್ಲಿ ನೆಲೆಸುವವನು; ಶ್ರೀನಿಧಿ – ಎಲ್ಲ ಐಶ್ವರ್ಯಗಳ ನಿಧಿ; ಶ್ರೀವಿಭಾವನ – ಕರ್ಮಾನುಸಾರ ಸಂಪತ್ತನ್ನು ಹಂಚುವವನು; ಶ್ರೀಧರ – ಎದೆಯಲ್ಲಿ ಲಕ್ಷ್ಮಿಯನ್ನು ಧರಿಸಿದವನು; ಶ್ರೀಕರ – ಭಕ್ತರನ್ನು ಸಮೃದ್ಧಗೊಳಿಸುವವನು; ಶ್ರೇಯಃ – ಪರಮ ಶ್ರೇಯಸ್ಸು; ಶ್ರೀಮಾನ್ – ಐಶ್ವರ್ಯಶಾಲಿ; ಲೋಕತ್ರಯಾಶ್ರಯ – ಮೂರು ಲೋಕಗಳ ಆಶ್ರಯ.',
          },
        },
        {
          n: 66,
          text: 'स्वक्षः स्वङ्गः शतानन्दो नन्दिर्ज्योतिर्गणेश्वरः ।\nविजितात्मा विधेयात्मा सत्कीर्तिश्छिन्नसंशयः ॥',
          meaning: {
            en: 'Svakṣa – of beautiful eyes; Svaṅga – of beautiful limbs; Śatānanda – of countless joys; Nandi – joy itself; Jyotirgaṇeśvara – Lord of the luminaries; Vijitātmā – who has mastered the mind; Vidheyātmā – who lets himself be won by his devotees (also read Avidheyātmā, subject to none); Satkīrti – of true fame; Chinnasaṃśaya – free of every doubt.',
            kn: 'ಸ್ವಕ್ಷ – ಸುಂದರ ಕಣ್ಣುಗಳವನು; ಸ್ವಂಗ – ಸುಂದರ ಅಂಗಗಳವನು; ಶತಾನಂದ – ಅಸಂಖ್ಯ ಆನಂದಗಳವನು; ನಂದಿ – ಆನಂದಸ್ವರೂಪ; ಜ್ಯೋತಿರ್ಗಣೇಶ್ವರ – ಜ್ಯೋತಿರ್ಗಣಗಳ ಒಡೆಯ; ವಿಜಿತಾತ್ಮಾ – ಮನಸ್ಸನ್ನು ಗೆದ್ದವನು; ವಿಧೇಯಾತ್ಮಾ – ಭಕ್ತರಿಗೆ ಒಲಿಯುವವನು (ಯಾರಿಗೂ ಅಧೀನನಲ್ಲದ ‘ಅವಿಧೇಯಾತ್ಮಾ’ ಎಂಬ ಪಾಠವೂ ಇದೆ); ಸತ್ಕೀರ್ತಿ – ನಿಜವಾದ ಕೀರ್ತಿಯುಳ್ಳವನು; ಛಿನ್ನಸಂಶಯ – ಸಂಶಯಗಳಿಲ್ಲದವನು.',
          },
        },
        {
          n: 67,
          text: 'उदीर्णः सर्वतश्चक्षुरनीशः शाश्वतस्थिरः ।\nभूशयो भूषणो भूतिर्विशोकः शोकनाशनः ॥',
          meaning: {
            en: 'Udīrṇa – exalted above all; Sarvataścakṣu – with eyes on every side; Anīśa – who has no master; Śāśvatasthira – eternal and constant; Bhūśaya – who lay on the bare ground, as Rāma by the sea; Bhūṣaṇa – who adorns the earth by his descents; Bhūti – glory itself; Viśoka – free of sorrow; Śokanāśana – destroyer of grief.',
            kn: 'ಉದೀರ್ಣ – ಎಲ್ಲರಿಗಿಂತ ಉನ್ನತನು; ಸರ್ವತಶ್ಚಕ್ಷು – ಎಲ್ಲೆಡೆ ಕಣ್ಣುಗಳುಳ್ಳವನು; ಅನೀಶ – ತನಗೆ ಒಡೆಯನಿಲ್ಲದವನು; ಶಾಶ್ವತಸ್ಥಿರ – ನಿತ್ಯನೂ ಸ್ಥಿರನೂ; ಭೂಶಯ – ರಾಮನಾಗಿ ಸಮುದ್ರತೀರದ ನೆಲದಲ್ಲಿ ಮಲಗಿದವನು; ಭೂಷಣ – ಅವತಾರಗಳಿಂದ ಭೂಮಿಯನ್ನು ಅಲಂಕರಿಸಿದವನು; ಭೂತಿ – ಐಶ್ವರ್ಯಸ್ವರೂಪ; ವಿಶೋಕ – ಶೋಕರಹಿತನು; ಶೋಕನಾಶನ – ದುಃಖವನ್ನು ನಾಶಮಾಡುವವನು.',
          },
        },
        {
          n: 68,
          text: 'अर्चिष्मानर्चितः कुम्भो विशुद्धात्मा विशोधनः ।\nअनिरुद्धोऽप्रतिरथः प्रद्युम्नोऽमितविक्रमः ॥',
          meaning: {
            en: 'Arciṣmān – the radiant; Arcita – the worshipped; Kumbha – the vessel that holds all; Viśuddhātmā – of pure nature; Viśodhana – the purifier; Aniruddha – the unobstructed; Apratiratha – without rival; Pradyumna – of great splendour; Amitavikrama – of boundless valour.',
            kn: 'ಅರ್ಚಿಷ್ಮಾನ್ – ಪ್ರಕಾಶಮಾನನು; ಅರ್ಚಿತ – ಪೂಜಿತನು; ಕುಂಭ – ಎಲ್ಲವನ್ನೂ ತನ್ನೊಳಗಿಟ್ಟುಕೊಂಡ ಕುಂಭ; ವಿಶುದ್ಧಾತ್ಮಾ – ಪರಿಶುದ್ಧ ಸ್ವರೂಪ; ವಿಶೋಧನ – ಶುದ್ಧಗೊಳಿಸುವವನು; ಅನಿರುದ್ಧ – ತಡೆಯಿಲ್ಲದವನು; ಅಪ್ರತಿರಥ – ಪ್ರತಿಸ್ಪರ್ಧಿಯಿಲ್ಲದವನು; ಪ್ರದ್ಯುಮ್ನ – ಮಹಾ ಕಾಂತಿಯುಳ್ಳವನು; ಅಮಿತವಿಕ್ರಮ – ಅಪಾರ ಪರಾಕ್ರಮಿ.',
          },
        },
        {
          n: 69,
          text: 'कालनेमिनिहा वीरः शौरिः शूरजनेश्वरः ।\nत्रिलोकात्मा त्रिलोकेशः केशवः केशिहा हरिः ॥',
          meaning: {
            en: 'Kālaneminihā – slayer of the demon Kālanemi; Vīra – the hero; Śauri – born in Śūra\'s line; Śūrajaneśvara – Lord of the valiant; Trilokātmā – Soul of the three worlds; Trilokeśa – Lord of the three worlds; Keśava – of lovely locks; Keśihā – slayer of the demon Keśin; Hari – who takes away sin and worldly bondage.',
            kn: 'ಕಾಲನೇಮಿನಿಹಾ – ಕಾಲನೇಮಿಯನ್ನು ಕೊಂದವನು; ವೀರ – ವೀರನು; ಶೌರಿ – ಶೂರವಂಶದವನು; ಶೂರಜನೇಶ್ವರ – ಶೂರರ ಒಡೆಯ; ತ್ರಿಲೋಕಾತ್ಮಾ – ಮೂರು ಲೋಕಗಳ ಆತ್ಮ; ತ್ರಿಲೋಕೇಶ – ಮೂರು ಲೋಕಗಳ ಒಡೆಯ; ಕೇಶವ – ಸುಂದರ ಕೇಶವುಳ್ಳವನು; ಕೇಶಿಹಾ – ಕೇಶಿ ರಾಕ್ಷಸನನ್ನು ಕೊಂದವನು; ಹರಿ – ಪಾಪವನ್ನೂ ಸಂಸಾರಬಂಧವನ್ನೂ ಹರಿಸುವವನು.',
          },
        },
        {
          n: 70,
          text: 'कामदेवः कामपालः कामी कान्तः कृतागमः ।\nअनिर्देश्यवपुर्विष्णुर्वीरोऽनन्तो धनञ्जयः ॥',
          meaning: {
            en: 'Kāmadeva – the God all seekers long for; Kāmapāla – who guards what is desired; Kāmī – whose every wish is fulfilled; Kānta – of enchanting form; Kṛtāgama – author of the scriptures; Anirdeśyavapu – of indescribable form; Viṣṇu – the pervader; Vīra – the hero; Ananta – the endless; Dhanañjaya – Arjuna, who is his own glory.',
            kn: 'ಕಾಮದೇವ – ಸಾಧಕರೆಲ್ಲರೂ ಬಯಸುವ ದೇವ; ಕಾಮಪಾಲ – ಇಷ್ಟಾರ್ಥಗಳನ್ನು ಕಾಯುವವನು; ಕಾಮೀ – ಪೂರ್ಣಕಾಮನು; ಕಾಂತ – ಮನೋಹರ ರೂಪದವನು; ಕೃತಾಗಮ – ಶಾಸ್ತ್ರಗಳನ್ನು ರಚಿಸಿದವನು; ಅನಿರ್ದೇಶ್ಯವಪು – ವರ್ಣನಾತೀತ ರೂಪದವನು; ವಿಷ್ಣು – ವ್ಯಾಪಕನು; ವೀರ – ವೀರನು; ಅನಂತ – ಕೊನೆಯಿಲ್ಲದವನು; ಧನಂಜಯ – ತನ್ನ ವಿಭೂತಿಯಾದ ಅರ್ಜುನ.',
          },
        },
        {
          n: 71,
          text: 'ब्रह्मण्यो ब्रह्मकृद्ब्रह्मा ब्रह्म ब्रह्मविवर्धनः ।\nब्रह्मविद्ब्राह्मणो ब्रह्मी ब्रह्मज्ञो ब्राह्मणप्रियः ॥',
          meaning: {
            en: 'Brahmaṇya – who cherishes the Veda, tapas and the wise; Brahmakṛt – who performs tapas; Brahmā – the creator; Brahma – the Supreme, greatest of all; Brahmavivardhana – who fosters the Veda and tapas; Brahmavit – knower of the Veda; Brāhmaṇa – who teaches the Veda; Brahmī – who holds all of the Veda within; Brahmajña – who knows the Veda\'s meaning; Brāhmaṇapriya – dear to the wise.',
            kn: 'ಬ್ರಹ್ಮಣ್ಯ – ವೇದ, ತಪಸ್ಸು, ಜ್ಞಾನಿಗಳಿಗೆ ಹಿತನು; ಬ್ರಹ್ಮಕೃತ್ – ತಪಸ್ಸು ಮಾಡುವವನು; ಬ್ರಹ್ಮಾ – ಸೃಷ್ಟಿಕರ್ತ; ಬ್ರಹ್ಮ – ಸರ್ವೋತ್ತಮ ಪರಬ್ರಹ್ಮ; ಬ್ರಹ್ಮವಿವರ್ಧನ – ವೇದ-ತಪಸ್ಸುಗಳನ್ನು ಬೆಳೆಸುವವನು; ಬ್ರಹ್ಮವಿತ್ – ವೇದವನ್ನು ಬಲ್ಲವನು; ಬ್ರಾಹ್ಮಣ – ವೇದವನ್ನು ಉಪದೇಶಿಸುವವನು; ಬ್ರಹ್ಮೀ – ವೇದವೆಲ್ಲವನ್ನೂ ತನ್ನೊಳಗಿಟ್ಟವನು; ಬ್ರಹ್ಮಜ್ಞ – ವೇದಾರ್ಥವನ್ನು ಅರಿತವನು; ಬ್ರಾಹ್ಮಣಪ್ರಿಯ – ಜ್ಞಾನಿಗಳಿಗೆ ಪ್ರಿಯನು.',
          },
        },
        {
          n: 72,
          text: 'महाक्रमो महाकर्मा महातेजा महोरगः ।\nमहाक्रतुर्महायज्वा महायज्ञो महाहविः ॥',
          meaning: {
            en: 'Mahākrama – of mighty strides; Mahākarmā – of great deeds; Mahātejāḥ – of great brilliance; Mahoraga – the great serpent; Mahākratu – the great rite; Mahāyajvā – the great sacrificer; Mahāyajña – the great sacrifice; Mahāhavi – the great oblation.',
            kn: 'ಮಹಾಕ್ರಮ – ಮಹಾ ಹೆಜ್ಜೆಗಳವನು; ಮಹಾಕರ್ಮಾ – ಮಹಾ ಕಾರ್ಯಗಳವನು; ಮಹಾತೇಜಾ – ಮಹಾ ತೇಜಸ್ವಿ; ಮಹೋರಗ – ಮಹಾ ಸರ್ಪ; ಮಹಾಕ್ರತು – ಮಹಾ ಯಾಗ; ಮಹಾಯಜ್ವಾ – ಮಹಾ ಯಾಜಕ; ಮಹಾಯಜ್ಞ – ಮಹಾ ಯಜ್ಞ; ಮಹಾಹವಿ – ಮಹಾ ಹವಿಸ್ಸು.',
          },
        },
        {
          n: 73,
          text: 'स्तव्यः स्तवप्रियः स्तोत्रं स्तुतिः स्तोता रणप्रियः ।\nपूर्णः पूरयिता पुण्यः पुण्यकीर्तिरनामयः ॥',
          meaning: {
            en: 'Stavya – worthy of praise; Stavapriya – who loves to be praised; Stotram – the hymn itself; Stuti – the act of praise; Stotā – the one who praises; Raṇapriya – who delights in battle against evil; Pūrṇa – complete; Pūrayitā – who fulfils; Puṇya – holy; Puṇyakīrti – of sacred fame; Anāmaya – free of all ills.',
            kn: 'ಸ್ತವ್ಯ – ಸ್ತುತಿಗೆ ಯೋಗ್ಯನು; ಸ್ತವಪ್ರಿಯ – ಸ್ತುತಿಯನ್ನು ಪ್ರೀತಿಸುವವನು; ಸ್ತೋತ್ರ – ಸ್ತೋತ್ರವೇ ತಾನು; ಸ್ತುತಿ – ಸ್ತುತಿಸ್ವರೂಪ; ಸ್ತೋತಾ – ಸ್ತುತಿಸುವವನೂ ತಾನೇ; ರಣಪ್ರಿಯ – ದುಷ್ಟರೊಡನೆ ಯುದ್ಧದಲ್ಲಿ ಉತ್ಸಾಹಿ; ಪೂರ್ಣ – ಪರಿಪೂರ್ಣನು; ಪೂರಯಿತಾ – ಈಡೇರಿಸುವವನು; ಪುಣ್ಯ – ಪವಿತ್ರನು; ಪುಣ್ಯಕೀರ್ತಿ – ಪವಿತ್ರ ಕೀರ್ತಿಯುಳ್ಳವನು; ಅನಾಮಯ – ಯಾವ ರೋಗವೂ ಇಲ್ಲದವನು.',
          },
        },
        {
          n: 74,
          text: 'मनोजवस्तीर्थकरो वसुरेता वसुप्रदः ।\nवसुप्रदो वासुदेवो वसुर्वसुमना हविः ॥',
          meaning: {
            en: 'Manojava – swift as thought; Tīrthakara – who gave the sacred teachings; Vasuretāḥ – whose seed is golden; Vasuprada – giver of wealth; Vasuprada – giver of the highest wealth, liberation; Vāsudeva – son of Vasudeva; Vasu – the dwelling of all; Vasumanāḥ – whose mind rests in all; Havi – the oblation itself.',
            kn: 'ಮನೋಜವ – ಮನಸ್ಸಿನಷ್ಟು ವೇಗಶಾಲಿ; ತೀರ್ಥಕರ – ಪವಿತ್ರ ಉಪದೇಶಗಳನ್ನು ಕೊಟ್ಟವನು; ವಸುರೇತಾ – ಸ್ವರ್ಣಬೀಜವುಳ್ಳವನು; ವಸುಪ್ರದ – ಸಂಪತ್ತು ಕೊಡುವವನು; ವಸುಪ್ರದ – ಮೋಕ್ಷವೆಂಬ ಪರಮ ಸಂಪತ್ತನ್ನು ಕೊಡುವವನು; ವಾಸುದೇವ – ವಸುದೇವನ ಮಗ; ವಸು – ಎಲ್ಲರ ನೆಲೆ; ವಸುಮನಾ – ಎಲ್ಲರಲ್ಲೂ ಮನಸ್ಸಿಟ್ಟವನು; ಹವಿ – ಹವಿಸ್ಸೇ ತಾನು.',
          },
        },
        {
          n: 75,
          text: 'सद्गतिः सत्कृतिः सत्ता सद्भूतिः सत्परायणः ।\nशूरसेनो यदुश्रेष्ठः सन्निवासः सुयामुनः ॥',
          meaning: {
            en: 'Sadgati – the goal of the good; Satkṛti – of noble deeds; Sattā – existence itself; Sadbhūti – of true glory; Satparāyaṇa – the refuge of the good; Śūrasena – with an army of heroes; Yaduśreṣṭha – best of the Yadus; Sannivāsa – the dwelling of the wise; Suyāmuna – surrounded by the people of the Yamunā.',
            kn: 'ಸದ್ಗತಿ – ಸಜ್ಜನರ ಗುರಿ; ಸತ್ಕೃತಿ – ಶ್ರೇಷ್ಠ ಕಾರ್ಯಗಳವನು; ಸತ್ತಾ – ಅಸ್ತಿತ್ವಸ್ವರೂಪ; ಸದ್ಭೂತಿ – ನಿಜವಾದ ಐಶ್ವರ್ಯವುಳ್ಳವನು; ಸತ್ಪರಾಯಣ – ಸಜ್ಜನರ ಆಶ್ರಯ; ಶೂರಸೇನ – ವೀರರ ಸೇನೆಯುಳ್ಳವನು; ಯದುಶ್ರೇಷ್ಠ – ಯಾದವರಲ್ಲಿ ಶ್ರೇಷ್ಠನು; ಸನ್ನಿವಾಸ – ಜ್ಞಾನಿಗಳ ನೆಲೆ; ಸುಯಾಮುನ – ಯಮುನಾತೀರದ ಜನರಿಂದ ಸುತ್ತುವರಿದವನು.',
          },
        },
        {
          n: 76,
          text: 'भूतावासो वासुदेवः सर्वासुनिलयोऽनलः ।\nदर्पहा दर्पदो दृप्तो दुर्धरोऽथापराजितः ॥',
          meaning: {
            en: 'Bhūtāvāsa – the abode of all beings; Vāsudeva – who veils the world with his power; Sarvāsunilaya – where all life-breaths rest; Anala – of limitless might; Darpahā – destroyer of arrogance; Darpada – who gives the righteous their dignity; Dṛpta – exulting in his own bliss; Durdhara – hard to hold in the mind; Aparājita – never defeated.',
            kn: 'ಭೂತಾವಾಸ – ಎಲ್ಲ ಜೀವಿಗಳ ನೆಲೆ; ವಾಸುದೇವ – ತನ್ನ ಶಕ್ತಿಯಿಂದ ಜಗತ್ತನ್ನು ಆವರಿಸಿದವನು; ಸರ್ವಾಸುನಿಲಯ – ಎಲ್ಲ ಪ್ರಾಣಗಳ ನೆಲೆ; ಅನಲ – ಅಪಾರ ಶಕ್ತಿಯವನು; ದರ್ಪಹಾ – ಅಹಂಕಾರವನ್ನು ನಾಶಮಾಡುವವನು; ದರ್ಪದ – ಧರ್ಮಿಷ್ಠರಿಗೆ ಗೌರವ ಕೊಡುವವನು; ದೃಪ್ತ – ಸ್ವಾನಂದದಲ್ಲಿ ತೃಪ್ತನು; ದುರ್ಧರ – ಮನಸ್ಸಿನಲ್ಲಿ ಹಿಡಿಯಲು ಕಷ್ಟನು; ಅಪರಾಜಿತ – ಸೋಲಿಲ್ಲದವನು.',
          },
        },
        {
          n: 77,
          text: 'विश्वमूर्तिर्महामूर्तिर्दीप्तमूर्तिरमूर्तिमान् ।\nअनेकमूर्तिरव्यक्तः शतमूर्तिः शताननः ॥',
          meaning: {
            en: 'Viśvamūrti – whose form is the universe; Mahāmūrti – of vast form; Dīptamūrti – of shining form; Amūrtimān – without a body born of karma; Anekamūrti – of many forms in his descents; Avyakta – unmanifest; Śatamūrti – of a hundred forms; Śatānana – hundred-faced.',
            kn: 'ವಿಶ್ವಮೂರ್ತಿ – ವಿಶ್ವವೇ ರೂಪವಾದವನು; ಮಹಾಮೂರ್ತಿ – ವಿಶಾಲ ರೂಪದವನು; ದೀಪ್ತಮೂರ್ತಿ – ಪ್ರಕಾಶಮಾನ ರೂಪದವನು; ಅಮೂರ್ತಿಮಾನ್ – ಕರ್ಮಜನ್ಯ ದೇಹವಿಲ್ಲದವನು; ಅನೇಕಮೂರ್ತಿ – ಅವತಾರಗಳಲ್ಲಿ ಅನೇಕ ರೂಪಗಳವನು; ಅವ್ಯಕ್ತ – ಅವ್ಯಕ್ತನು; ಶತಮೂರ್ತಿ – ನೂರಾರು ರೂಪಗಳವನು; ಶತಾನನ – ನೂರು ಮುಖಗಳವನು.',
          },
        },
        {
          n: 78,
          text: 'एको नैकः सवः कः किं यत्तत्पदमनुत्तमम् ।\nलोकबन्धुर्लोकनाथो माधवो भक्तवत्सलः ॥',
          meaning: {
            en: 'Eka – the One; Naika – the many; Sava – the soma sacrifice; Ka – bliss; Kim – the one to be sought; Yat – that which is self-existent; Tat – that which spreads out as all; Padam anuttamam – the unsurpassed goal; Lokabandhu – friend of the world; Lokanātha – Lord of the world; Mādhava – born in Madhu\'s line; Bhaktavatsala – loving to his devotees.',
            kn: 'ಏಕ – ಏಕೈಕನು; ನೈಕ – ಅನೇಕನೂ ಹೌದು; ಸವ – ಸೋಮಯಾಗಸ್ವರೂಪ; ಕ – ಸುಖಸ್ವರೂಪ; ಕಿಮ್ – ವಿಚಾರಿಸಿ ಅರಿಯಬೇಕಾದವನು; ಯತ್ – ಸ್ವತಃಸಿದ್ಧನು; ತತ್ – ಎಲ್ಲವಾಗಿ ವಿಸ್ತರಿಸಿದವನು; ಪದಮನುತ್ತಮ – ಸರ್ವೋತ್ತಮ ಪದ; ಲೋಕಬಂಧು – ಲೋಕಗಳ ಬಂಧು; ಲೋಕನಾಥ – ಲೋಕಗಳ ಒಡೆಯ; ಮಾಧವ – ಮಧುವಂಶದಲ್ಲಿ ಜನಿಸಿದವನು; ಭಕ್ತವತ್ಸಲ – ಭಕ್ತರ ಮೇಲೆ ವಾತ್ಸಲ್ಯವುಳ್ಳವನು.',
          },
        },
        {
          n: 79,
          text: 'सुवर्णवर्णो हेमाङ्गो वराङ्गश्चन्दनाङ्गदी ।\nवीरहा विषमः शून्यो घृताशीरचलश्चलः ॥',
          meaning: {
            en: 'Suvarṇavarṇa – golden-hued; Hemāṅga – of golden limbs; Varāṅga – of excellent limbs; Candanāṅgadī – adorned with sandal paste and armlets; Vīrahā – who slays demon warriors; Viṣama – without equal; Śūnya – empty of every flaw; Ghṛtāśī – free of all cravings; Acala – unmoving; Cala – moving, as the wind.',
            kn: 'ಸುವರ್ಣವರ್ಣ – ಸ್ವರ್ಣವರ್ಣನು; ಹೇಮಾಂಗ – ಚಿನ್ನದಂತಹ ಅಂಗಗಳವನು; ವರಾಂಗ – ಶ್ರೇಷ್ಠ ಅಂಗಗಳವನು; ಚಂದನಾಂಗದೀ – ಗಂಧ ಮತ್ತು ತೋಳ್ಬಂದಿಗಳಿಂದ ಅಲಂಕೃತನು; ವೀರಹಾ – ದೈತ್ಯವೀರರನ್ನು ಕೊಂದವನು; ವಿಷಮ – ಸಮಾನರಿಲ್ಲದವನು; ಶೂನ್ಯ – ಯಾವ ದೋಷವೂ ಇಲ್ಲದವನು; ಘೃತಾಶೀ – ಆಸೆಗಳಿಲ್ಲದವನು; ಅಚಲ – ಅಚಲನು; ಚಲ – ವಾಯುವಿನಂತೆ ಚಲಿಸುವವನು.',
          },
        },
        {
          n: 80,
          text: 'अमानी मानदो मान्यो लोकस्वामी त्रिलोकधृक् ।\nसुमेधा मेधजो धन्यः सत्यमेधा धराधरः ॥',
          meaning: {
            en: 'Amānī – free of pride; Mānada – who gives honour to others; Mānya – the honoured; Lokasvāmī – master of the world; Trilokadhṛk – who upholds the three worlds; Sumedhāḥ – of fine intellect; Medhaja – born from the sacrifice; Dhanya – the fulfilled; Satyamedhāḥ – of true wisdom; Dharādhara – bearer of the earth.',
            kn: 'ಅಮಾನೀ – ಅಹಂಕಾರವಿಲ್ಲದವನು; ಮಾನದ – ಇತರರಿಗೆ ಗೌರವ ಕೊಡುವವನು; ಮಾನ್ಯ – ಗೌರವಾರ್ಹನು; ಲೋಕಸ್ವಾಮೀ – ಲೋಕದ ಸ್ವಾಮಿ; ತ್ರಿಲೋಕಧೃಕ್ – ಮೂರು ಲೋಕಗಳನ್ನು ಧರಿಸಿದವನು; ಸುಮೇಧಾ – ಶ್ರೇಷ್ಠ ಬುದ್ಧಿಯವನು; ಮೇಧಜ – ಯಜ್ಞದಿಂದ ಪ್ರಕಟನಾದವನು; ಧನ್ಯ – ಕೃತಾರ್ಥನು; ಸತ್ಯಮೇಧಾ – ಸತ್ಯವಾದ ಜ್ಞಾನವುಳ್ಳವನು; ಧರಾಧರ – ಭೂಮಿಯನ್ನು ಧರಿಸಿದವನು.',
          },
        },
        {
          n: 81,
          text: 'तेजोवृषो द्युतिधरः सर्वशस्त्रभृतां वरः ।\nप्रग्रहो निग्रहो व्यग्रो नैकशृङ्गो गदाग्रजः ॥',
          meaning: {
            en: 'Tejovṛṣa – who showers light, as the sun; Dyutidhara – bearer of radiance; Sarvaśastrabhṛtāṃ vara – best of all who bear weapons; Pragraha – who receives the offerings and holds the reins of the senses; Nigraha – who restrains all; Vyagra – never at an end, ever active; Naikaśṛṅga – many-horned, as the Veda; Gadāgraja – elder brother of Gada.',
            kn: 'ತೇಜೋವೃಷ – ಸೂರ್ಯರೂಪದಿಂದ ಬೆಳಕನ್ನು ಸುರಿಸುವವನು; ದ್ಯುತಿಧರ – ಕಾಂತಿಯನ್ನು ಧರಿಸಿದವನು; ಸರ್ವಶಸ್ತ್ರಭೃತಾಂ ವರ – ಆಯುಧಧಾರಿಗಳಲ್ಲಿ ಶ್ರೇಷ್ಠನು; ಪ್ರಗ್ರಹ – ಅರ್ಪಣೆಯನ್ನು ಸ್ವೀಕರಿಸುವವನು, ಇಂದ್ರಿಯಗಳ ಕಡಿವಾಣ ಹಿಡಿದವನು; ನಿಗ್ರಹ – ಎಲ್ಲರನ್ನೂ ನಿಯಂತ್ರಿಸುವವನು; ವ್ಯಗ್ರ – ಕೊನೆಯಿಲ್ಲದ ಕ್ರಿಯಾಶೀಲನು; ನೈಕಶೃಂಗ – ವೇದರೂಪದಲ್ಲಿ ಅನೇಕ ಕೊಂಬುಗಳವನು; ಗದಾಗ್ರಜ – ಗದನ ಅಣ್ಣ.',
          },
        },
        {
          n: 82,
          text: 'चतुर्मूर्तिश्चतुर्बाहुश्चतुर्व्यूहश्चतुर्गतिः ।\nचतुरात्मा चतुर्भावश्चतुर्वेदविदेकपात् ॥',
          meaning: {
            en: 'Caturmūrti – of four forms; Caturbāhu – four-armed; Caturvyūha – in four emanations; Caturgati – the refuge of the four stages of life; Caturātmā – with fourfold inner faculty; Caturbhāva – source of the four aims of life; Caturvedavit – knower of the four Vedas; Ekapāt – of whom the whole world is but one quarter.',
            kn: 'ಚತುರ್ಮೂರ್ತಿ – ನಾಲ್ಕು ರೂಪಗಳವನು; ಚತುರ್ಬಾಹು – ನಾಲ್ಕು ಬಾಹುಗಳವನು; ಚತುರ್ವ್ಯೂಹ – ನಾಲ್ಕು ವ್ಯೂಹಗಳವನು; ಚತುರ್ಗತಿ – ನಾಲ್ಕು ಆಶ್ರಮಗಳ ಆಶ್ರಯ; ಚತುರಾತ್ಮಾ – ನಾಲ್ಕು ಅಂತಃಕರಣಗಳವನು; ಚತುರ್ಭಾವ – ನಾಲ್ಕು ಪುರುಷಾರ್ಥಗಳ ಮೂಲ; ಚತುರ್ವೇದವಿತ್ – ನಾಲ್ಕು ವೇದಗಳನ್ನು ಬಲ್ಲವನು; ಏಕಪಾತ್ – ಜಗತ್ತೆಲ್ಲ ಅವನ ಒಂದು ಪಾದ ಮಾತ್ರ.',
          },
        },
        {
          n: 83,
          text: 'समावर्तोऽनिवृत्तात्मा दुर्जयो दुरतिक्रमः ।\nदुर्लभो दुर्गमो दुर्गो दुरावासो दुरारिहा ॥',
          meaning: {
            en: 'Samāvarta – who turns the wheel of worldly life; Anivṛttātmā – who never withdraws from anywhere; Durjaya – hard to conquer; Duratikrama – whose command none can transgress; Durlabha – hard to attain; Durgama – hard to reach; Durga – hard to approach, like a fortress; Durāvāsa – hard to hold within; Durārihā – slayer of the wicked.',
            kn: 'ಸಮಾವರ್ತ – ಸಂಸಾರಚಕ್ರವನ್ನು ತಿರುಗಿಸುವವನು; ಅನಿವೃತ್ತಾತ್ಮಾ – ಎಲ್ಲಿಂದಲೂ ಹಿಂದೆ ಸರಿಯದವನು; ದುರ್ಜಯ – ಗೆಲ್ಲಲು ಕಷ್ಟನು; ದುರತಿಕ್ರಮ – ಅವನ ಆಜ್ಞೆಯನ್ನು ಯಾರೂ ಮೀರಲಾರರು; ದುರ್ಲಭ – ಪಡೆಯಲು ಕಷ್ಟನು; ದುರ್ಗಮ – ತಲುಪಲು ಕಷ್ಟನು; ದುರ್ಗ – ಕೋಟೆಯಂತೆ ಸಮೀಪಿಸಲು ಕಷ್ಟನು; ದುರಾವಾಸ – ಮನಸ್ಸಿನಲ್ಲಿ ನೆಲೆಗೊಳಿಸಲು ಕಷ್ಟನು; ದುರಾರಿಹಾ – ದುಷ್ಟರನ್ನು ಕೊಲ್ಲುವವನು.',
          },
        },
        {
          n: 84,
          text: 'शुभाङ्गो लोकसारङ्गः सुतन्तुस्तन्तुवर्धनः ।\nइन्द्रकर्मा महाकर्मा कृतकर्मा कृतागमः ॥',
          meaning: {
            en: 'Śubhāṅga – of lovely limbs; Lokasāraṅga – who draws out the essence of the worlds; Sutantu – whose thread is the vast world; Tantuvardhana – who extends that thread; Indrakarmā – whose deeds are like Indra\'s; Mahākarmā – of great deeds; Kṛtakarmā – whose work is accomplished; Kṛtāgama – who brought forth the scriptures.',
            kn: 'ಶುಭಾಂಗ – ಸುಂದರ ಅಂಗಗಳವನು; ಲೋಕಸಾರಂಗ – ಲೋಕಗಳ ಸಾರವನ್ನು ಗ್ರಹಿಸುವವನು; ಸುತಂತು – ವಿಸ್ತಾರ ಜಗತ್ತೇ ತಂತುವಾದವನು; ತಂತುವರ್ಧನ – ಆ ತಂತುವನ್ನು ವಿಸ್ತರಿಸುವವನು; ಇಂದ್ರಕರ್ಮಾ – ಇಂದ್ರನಂತಹ ಕಾರ್ಯಗಳವನು; ಮಹಾಕರ್ಮಾ – ಮಹಾ ಕಾರ್ಯಗಳವನು; ಕೃತಕರ್ಮಾ – ಕಾರ್ಯವನ್ನು ಪೂರೈಸಿದವನು; ಕೃತಾಗಮ – ಶಾಸ್ತ್ರಗಳನ್ನು ಪ್ರಕಟಿಸಿದವನು.',
          },
        },
        {
          n: 85,
          text: 'उद्भवः सुन्दरः सुन्दो रत्ननाभः सुलोचनः ।\nअर्को वाजसनः शृङ्गी जयन्तः सर्वविज्जयी ॥',
          meaning: {
            en: 'Udbhava – of exalted birth by his own will; Sundara – beautiful; Sunda – tender with compassion; Ratnanābha – with a navel like a jewel; Sulocana – of beautiful eyes; Arka – worthy of worship like the sun; Vājasana – giver of food; Śṛṅgī – horned, as the Fish; Jayanta – the victorious; Sarvavijjayī – all-knowing and all-conquering.',
            kn: 'ಉದ್ಭವ – ಸ್ವೇಚ್ಛೆಯಿಂದ ಶ್ರೇಷ್ಠ ಜನ್ಮ ತಾಳುವವನು; ಸುಂದರ – ಸುಂದರನು; ಸುಂದ – ಕರುಣೆಯಿಂದ ಆರ್ದ್ರನು; ರತ್ನನಾಭ – ರತ್ನದಂತಹ ನಾಭಿಯವನು; ಸುಲೋಚನ – ಸುಂದರ ಕಣ್ಣುಗಳವನು; ಅರ್ಕ – ಸೂರ್ಯನಂತೆ ಪೂಜ್ಯನು; ವಾಜಸನ – ಅನ್ನ ಕೊಡುವವನು; ಶೃಂಗೀ – ಮತ್ಸ್ಯರೂಪದಲ್ಲಿ ಕೊಂಬುಳ್ಳವನು; ಜಯಂತ – ಜಯಶಾಲಿ; ಸರ್ವವಿಜ್ಜಯೀ – ಸರ್ವಜ್ಞನೂ ಸರ್ವಜಯಿಯೂ.',
          },
        },
        {
          n: 86,
          text: 'सुवर्णबिन्दुरक्षोभ्यः सर्ववागीश्वरेश्वरः ।\nमहाह्रदो महागर्तो महाभूतो महानिधिः ॥',
          meaning: {
            en: 'Suvarṇabindu – of golden limbs, and the beautiful syllable Om; Akṣobhya – never shaken; Sarvavāgīśvareśvara – Lord of all the lords of speech; Mahāhrada – the great lake of bliss; Mahāgarta – the vast chasm of his power; Mahābhūta – the great Being; Mahānidhi – the great treasure.',
            kn: 'ಸುವರ್ಣಬಿಂದು – ಸ್ವರ್ಣಾಂಗನು, ಸುಂದರ ಓಂಕಾರ; ಅಕ್ಷೋಭ್ಯ – ಯಾವುದರಿಂದಲೂ ಕದಲದವನು; ಸರ್ವವಾಗೀಶ್ವರೇಶ್ವರ – ವಾಗೀಶ್ವರರೆಲ್ಲರ ಒಡೆಯ; ಮಹಾಹ್ರದ – ಆನಂದದ ಮಹಾ ಸರೋವರ; ಮಹಾಗರ್ತ – ಅಗಾಧ ಶಕ್ತಿಯ ಮಹಾ ಗುಂಡಿ; ಮಹಾಭೂತ – ಮಹಾ ತತ್ತ್ವ; ಮಹಾನಿಧಿ – ಮಹಾ ನಿಧಿ.',
          },
        },
        {
          n: 87,
          text: 'कुमुदः कुन्दरः कुन्दः पर्जन्यः पावनोऽनिलः ।\nअमृताशोऽमृतवपुः सर्वज्ञः सर्वतोमुखः ॥',
          meaning: {
            en: 'Kumuda – who gladdens the earth; Kundara – giver of pure rewards; Kunda – pure as jasmine; Parjanya – the rain-cloud of grace; Pāvana – the purifier; Anila – the ever-wakeful wind; Amṛtāśa – who enjoys the nectar of his own bliss; Amṛtavapu – of deathless form; Sarvajña – all-knowing; Sarvatomukha – facing every direction.',
            kn: 'ಕುಮುದ – ಭೂಮಿಯನ್ನು ಸಂತೋಷಪಡಿಸುವವನು; ಕುಂದರ – ಶುದ್ಧ ಫಲ ಕೊಡುವವನು; ಕುಂದ – ಮಲ್ಲಿಗೆಯಂತೆ ಶುಭ್ರನು; ಪರ್ಜನ್ಯ – ಅನುಗ್ರಹದ ಮಳೆಮೋಡ; ಪಾವನ – ಪಾವನಗೊಳಿಸುವವನು; ಅನಿಲ – ಸದಾ ಎಚ್ಚರವಾಗಿರುವ ವಾಯು; ಅಮೃತಾಶ – ತನ್ನ ಆನಂದಾಮೃತವನ್ನು ಸವಿಯುವವನು; ಅಮೃತವಪು – ಮರಣವಿಲ್ಲದ ದೇಹದವನು; ಸರ್ವಜ್ಞ – ಸರ್ವಜ್ಞನು; ಸರ್ವತೋಮುಖ – ಎಲ್ಲ ದಿಕ್ಕುಗಳಿಗೂ ಮುಖವುಳ್ಳವನು.',
          },
        },
        {
          n: 88,
          text: 'सुलभः सुव्रतः सिद्धः शत्रुजिच्छत्रुतापनः ।\nन्यग्रोधोदुम्बरोऽश्वत्थश्चाणूरान्ध्रनिषूदनः ॥',
          meaning: {
            en: 'Sulabha – easily reached by devotion; Suvrata – of good vows; Siddha – the perfect; Śatrujit – conqueror of foes; Śatrutāpana – who scorches his foes; Nyagrodha – the banyan, whose roots grow down from above; Udumbara – who rises above the sky and nourishes all; Aśvattha – the sacred fig, the world-tree; Cāṇūrāndhraniṣūdana – slayer of Cāṇūra of the Andhra clan.',
            kn: 'ಸುಲಭ – ಭಕ್ತಿಯಿಂದ ಸುಲಭವಾಗಿ ದೊರಕುವವನು; ಸುವ್ರತ – ಶ್ರೇಷ್ಠ ವ್ರತವುಳ್ಳವನು; ಸಿದ್ಧ – ಪರಿಪೂರ್ಣನು; ಶತ್ರುಜಿತ್ – ಶತ್ರುಗಳನ್ನು ಗೆದ್ದವನು; ಶತ್ರುತಾಪನ – ಶತ್ರುಗಳನ್ನು ತಪಿಸುವವನು; ನ್ಯಗ್ರೋಧ – ಮೇಲಿನಿಂದ ಕೆಳಗೆ ಬೇರು ಬಿಡುವ ಆಲದ ಮರ; ಉದುಂಬರ – ಆಕಾಶಕ್ಕಿಂತ ಮೇಲಿರುವವನು, ಎಲ್ಲರನ್ನೂ ಪೋಷಿಸುವವನು; ಅಶ್ವತ್ಥ – ಸಂಸಾರವೃಕ್ಷವಾದ ಅರಳಿ ಮರ; ಚಾಣೂರಾಂಧ್ರನಿಷೂದನ – ಆಂಧ್ರವಂಶದ ಚಾಣೂರನನ್ನು ಕೊಂದವನು.',
          },
        },
        {
          n: 89,
          text: 'सहस्रार्चिः सप्तजिह्वः सप्तैधाः सप्तवाहनः ।\nअमूर्तिरनघोऽचिन्त्यो भयकृद्भयनाशनः ॥',
          meaning: {
            en: 'Sahasrārci – thousand-rayed; Saptajihva – seven-tongued, as fire; Saptaidhāḥ – of seven flames; Saptavāhana – drawn by seven horses, as the sun; Amūrti – formless; Anagha – sinless; Acintya – beyond thought; Bhayakṛt – who strikes fear into the wicked; Bhayanāśana – who removes the fear of the good.',
            kn: 'ಸಹಸ್ರಾರ್ಚಿ – ಸಾವಿರ ಕಿರಣಗಳವನು; ಸಪ್ತಜಿಹ್ವ – ಅಗ್ನಿರೂಪದಲ್ಲಿ ಏಳು ನಾಲಗೆಗಳವನು; ಸಪ್ತೈಧಾ – ಏಳು ಜ್ವಾಲೆಗಳವನು; ಸಪ್ತವಾಹನ – ಸೂರ್ಯರೂಪದಲ್ಲಿ ಏಳು ಕುದುರೆಗಳವನು; ಅಮೂರ್ತಿ – ಆಕಾರವಿಲ್ಲದವನು; ಅನಘ – ಪಾಪರಹಿತನು; ಅಚಿಂತ್ಯ – ಚಿಂತನೆಗೆ ಮೀರಿದವನು; ಭಯಕೃತ್ – ದುಷ್ಟರಿಗೆ ಭಯ ಹುಟ್ಟಿಸುವವನು; ಭಯನಾಶನ – ಸಜ್ಜನರ ಭಯವನ್ನು ನಾಶಮಾಡುವವನು.',
          },
        },
        {
          n: 90,
          text: 'अणुर्बृहत्कृशः स्थूलो गुणभृन्निर्गुणो महान् ।\nअधृतः स्वधृतः स्वास्यः प्राग्वंशो वंशवर्धनः ॥',
          meaning: {
            en: 'Aṇu – the subtlest; Bṛhat – the greatest; Kṛśa – the slender; Sthūla – the massive; Guṇabhṛt – bearer of qualities; Nirguṇa – beyond qualities; Mahān – the great; Adhṛta – supported by nothing; Svadhṛta – self-supported; Svāsya – of fine face, from whom the Vedas came; Prāgvaṃśa – of the most ancient lineage; Vaṃśavardhana – who makes lineages flourish.',
            kn: 'ಅಣು – ಅತಿ ಸೂಕ್ಷ್ಮನು; ಬೃಹತ್ – ಅತಿ ದೊಡ್ಡವನು; ಕೃಶ – ತೆಳ್ಳಗಿನವನು; ಸ್ಥೂಲ – ಸ್ಥೂಲನು; ಗುಣಭೃತ್ – ಗುಣಗಳನ್ನು ಧರಿಸಿದವನು; ನಿರ್ಗುಣ – ಗುಣಾತೀತನು; ಮಹಾನ್ – ಮಹಾನನು; ಅಧೃತ – ಯಾವುದರ ಆಧಾರವೂ ಬೇಡದವನು; ಸ್ವಧೃತ – ತನ್ನಿಂದಲೇ ಧರಿಸಲ್ಪಟ್ಟವನು; ಸ್ವಾಸ್ಯ – ವೇದಗಳು ಹೊರಹೊಮ್ಮಿದ ಸುಂದರ ಮುಖದವನು; ಪ್ರಾಗ್ವಂಶ – ಅತಿ ಪುರಾತನ ವಂಶದವನು; ವಂಶವರ್ಧನ – ವಂಶಗಳನ್ನು ಬೆಳೆಸುವವನು.',
          },
        },
        {
          n: 91,
          text: 'भारभृत् कथितो योगी योगीशः सर्वकामदः ।\nआश्रमः श्रमणः क्षामः सुपर्णो वायुवाहनः ॥',
          meaning: {
            en: 'Bhārabhṛt – who bears the burden of the earth; Kathita – the one proclaimed by the Vedas; Yogī – the yogi; Yogīśa – Lord of yogis; Sarvakāmada – giver of all desires; Āśrama – the resting place; Śramaṇa – who troubles the undiscerning; Kṣāma – who wears all beings down at the end; Suparṇa – the tree whose leaves are the Vedas; Vāyuvāhana – who makes the wind move.',
            kn: 'ಭಾರಭೃತ್ – ಭೂಭಾರವನ್ನು ಹೊತ್ತವನು; ಕಥಿತ – ವೇದಗಳಿಂದ ಹೇಳಲ್ಪಟ್ಟವನು; ಯೋಗೀ – ಯೋಗಿ; ಯೋಗೀಶ – ಯೋಗಿಗಳ ಒಡೆಯ; ಸರ್ವಕಾಮದ – ಎಲ್ಲ ಇಷ್ಟಗಳನ್ನು ಕೊಡುವವನು; ಆಶ್ರಮ – ವಿಶ್ರಾಂತಿಯ ನೆಲೆ; ಶ್ರಮಣ – ವಿವೇಕಹೀನರನ್ನು ಶ್ರಮಪಡಿಸುವವನು; ಕ್ಷಾಮ – ಪ್ರಳಯದಲ್ಲಿ ಜೀವಿಗಳನ್ನು ಕ್ಷೀಣಗೊಳಿಸುವವನು; ಸುಪರ್ಣ – ವೇದಗಳೇ ಎಲೆಗಳಾದ ವೃಕ್ಷ; ವಾಯುವಾಹನ – ವಾಯುವನ್ನು ಚಲಿಸುವವನು.',
          },
        },
        {
          n: 92,
          text: 'धनुर्धरो धनुर्वेदो दण्डो दमयिता दमः ।\nअपराजितः सर्वसहो नियन्ताऽनियमोऽयमः ॥',
          meaning: {
            en: 'Dhanurdhara – the bowman, as Rāma; Dhanurveda – master of archery; Daṇḍa – the rod of justice; Damayitā – who subdues; Dama – self-restraint itself; Aparājita – undefeated; Sarvasaha – who bears all and is able in all; Niyantā – who sets everyone to his duty; Aniyama – bound by no rule; Ayama – beyond the reach of death.',
            kn: 'ಧನುರ್ಧರ – ರಾಮನಾಗಿ ಧನುಸ್ಸು ಹಿಡಿದವನು; ಧನುರ್ವೇದ – ಧನುರ್ವಿದ್ಯೆಯನ್ನು ಬಲ್ಲವನು; ದಂಡ – ನ್ಯಾಯದಂಡ; ದಮಯಿತಾ – ದಮನಿಸುವವನು; ದಮ – ಇಂದ್ರಿಯನಿಗ್ರಹವೇ ತಾನು; ಅಪರಾಜಿತ – ಸೋಲಿಲ್ಲದವನು; ಸರ್ವಸಹ – ಎಲ್ಲವನ್ನೂ ಸಹಿಸುವವನು, ಎಲ್ಲದರಲ್ಲೂ ಸಮರ್ಥನು; ನಿಯಂತಾ – ಎಲ್ಲರನ್ನೂ ಕರ್ತವ್ಯದಲ್ಲಿ ತೊಡಗಿಸುವವನು; ಅನಿಯಮ – ಯಾವ ನಿಯಮಕ್ಕೂ ಒಳಪಡದವನು; ಅಯಮ – ಮೃತ್ಯುವಿಗೆ ಸಿಗದವನು.',
          },
        },
        {
          n: 93,
          text: 'सत्त्ववान् सात्त्विकः सत्यः सत्यधर्मपरायणः ।\nअभिप्रायः प्रियार्होऽर्हः प्रियकृत्प्रीतिवर्धनः ॥',
          meaning: {
            en: 'Sattvavān – full of strength and courage; Sāttvika – established in sattva; Satya – true; Satyadharmaparāyaṇa – devoted to truth and dharma; Abhiprāya – the one all seekers aim for; Priyārha – worthy of the dearest offerings; Arha – worthy of worship; Priyakṛt – who does good to those who love him; Prītivardhana – who deepens their love.',
            kn: 'ಸತ್ತ್ವವಾನ್ – ಬಲ-ಧೈರ್ಯಗಳುಳ್ಳವನು; ಸಾತ್ತ್ವಿಕ – ಸತ್ತ್ವಗುಣದಲ್ಲಿ ನೆಲೆಸಿದವನು; ಸತ್ಯ – ಸತ್ಯನು; ಸತ್ಯಧರ್ಮಪರಾಯಣ – ಸತ್ಯ-ಧರ್ಮಗಳಲ್ಲಿ ನಿಷ್ಠನು; ಅಭಿಪ್ರಾಯ – ಸಾಧಕರೆಲ್ಲರ ಗುರಿ; ಪ್ರಿಯಾರ್ಹ – ಪ್ರಿಯವಾದ ಅರ್ಪಣೆಗೆ ಯೋಗ್ಯನು; ಅರ್ಹ – ಪೂಜೆಗೆ ಅರ್ಹನು; ಪ್ರಿಯಕೃತ್ – ಪ್ರೀತಿಸುವವರಿಗೆ ಹಿತ ಮಾಡುವವನು; ಪ್ರೀತಿವರ್ಧನ – ಅವರ ಪ್ರೀತಿಯನ್ನು ಹೆಚ್ಚಿಸುವವನು.',
          },
        },
        {
          n: 94,
          text: 'विहायसगतिर्ज्योतिः सुरुचिर्हुतभुग्विभुः ।\nरविर्विरोचनः सूर्यः सविता रविलोचनः ॥',
          meaning: {
            en: 'Vihāyasagati – who moves through the sky; Jyoti – light itself; Suruci – of lovely lustre; Hutabhuk – who receives the oblations; Vibhu – all-pervading; Ravi – the sun; Virocana – who shines in many ways; Sūrya – who brings forth all; Savitā – the progenitor; Ravilocana – whose eye is the sun.',
            kn: 'ವಿಹಾಯಸಗತಿ – ಆಕಾಶದಲ್ಲಿ ಸಂಚರಿಸುವವನು; ಜ್ಯೋತಿ – ಜ್ಯೋತಿಸ್ವರೂಪ; ಸುರುಚಿ – ಸುಂದರ ಕಾಂತಿಯವನು; ಹುತಭುಕ್ – ಹವಿಸ್ಸನ್ನು ಸ್ವೀಕರಿಸುವವನು; ವಿಭು – ಸರ್ವವ್ಯಾಪಿ; ರವಿ – ಸೂರ್ಯ; ವಿರೋಚನ – ವಿವಿಧವಾಗಿ ಪ್ರಕಾಶಿಸುವವನು; ಸೂರ್ಯ – ಎಲ್ಲವನ್ನೂ ಹುಟ್ಟಿಸುವವನು; ಸವಿತಾ – ಜನಕನು; ರವಿಲೋಚನ – ಸೂರ್ಯನೇ ಕಣ್ಣಾದವನು.',
          },
        },
        {
          n: 95,
          text: 'अनन्तो हुतभुग्भोक्ता सुखदो नैकजोऽग्रजः ।\nअनिर्विण्णः सदामर्षी लोकाधिष्ठानमद्भुतः ॥',
          meaning: {
            en: 'Ananta – endless; Hutabhuk – receiver of offerings; Bhoktā – the enjoyer; Sukhada – giver of happiness; Naikaja – born many times in his descents; Agraja – the first-born; Anirviṇṇa – never dejected; Sadāmarṣī – ever forbearing; Lokādhiṣṭhānam – the foundation of the worlds; Adbhuta – the wonderful.',
            kn: 'ಅನಂತ – ಕೊನೆಯಿಲ್ಲದವನು; ಹುತಭುಕ್ – ಹವಿಸ್ಸನ್ನು ಸ್ವೀಕರಿಸುವವನು; ಭೋಕ್ತಾ – ಭೋಗಿಸುವವನು; ಸುಖದ – ಸುಖ ಕೊಡುವವನು; ನೈಕಜ – ಅವತಾರಗಳಲ್ಲಿ ಅನೇಕ ಬಾರಿ ಜನಿಸಿದವನು; ಅಗ್ರಜ – ಮೊದಲು ಜನಿಸಿದವನು; ಅನಿರ್ವಿಣ್ಣ – ಎಂದೂ ಖಿನ್ನನಾಗದವನು; ಸದಾಮರ್ಷೀ – ಸದಾ ಕ್ಷಮಾಶೀಲನು; ಲೋಕಾಧಿಷ್ಠಾನ – ಲೋಕಗಳ ಆಧಾರ; ಅದ್ಭುತ – ಅದ್ಭುತನು.',
          },
        },
        {
          n: 96,
          text: 'सनात्सनातनतमः कपिलः कपिरव्ययः ।\nस्वस्तिदः स्वस्तिकृत्स्वस्ति स्वस्तिभुक्स्वस्तिदक्षिणः ॥',
          meaning: {
            en: 'Sanāt – the ancient, time itself; Sanātanatama – most ancient of all; Kapila – the tawny one, the sage Kapila; Kapi – the sun, and the Boar; Avyaya – into whom all return; Svastida – giver of welfare; Svastikṛt – maker of good; Svasti – auspiciousness itself; Svastibhuk – who guards what is auspicious; Svastidakṣiṇa – who bestows blessings readily.',
            kn: 'ಸನಾತ್ – ಕಾಲಸ್ವರೂಪನಾದ ಪುರಾತನನು; ಸನಾತನತಮ – ಎಲ್ಲರಿಗಿಂತ ಪುರಾತನನು; ಕಪಿಲ – ಕಪಿಲವರ್ಣನು, ಕಪಿಲಮುನಿ; ಕಪಿ – ಸೂರ್ಯ, ವರಾಹರೂಪಿ; ಅವ್ಯಯ – ಎಲ್ಲವೂ ಮರಳಿ ಸೇರುವವನು; ಸ್ವಸ್ತಿದ – ಕ್ಷೇಮ ಕೊಡುವವನು; ಸ್ವಸ್ತಿಕೃತ್ – ಮಂಗಳ ಮಾಡುವವನು; ಸ್ವಸ್ತಿ – ಮಂಗಳಸ್ವರೂಪ; ಸ್ವಸ್ತಿಭುಕ್ – ಮಂಗಳವನ್ನು ಕಾಯುವವನು; ಸ್ವಸ್ತಿದಕ್ಷಿಣ – ಶೀಘ್ರವಾಗಿ ಮಂಗಳವನ್ನು ಕರುಣಿಸುವವನು.',
          },
        },
        {
          n: 97,
          text: 'अरौद्रः कुण्डली चक्री विक्रम्यूर्जितशासनः ।\nशब्दातिगः शब्दसहः शिशिरः शर्वरीकरः ॥',
          meaning: {
            en: 'Araudra – free of harshness; Kuṇḍalī – wearing shining earrings; Cakrī – bearer of the discus; Vikramī – the valiant; Ūrjitaśāsana – whose command is mighty; Śabdātiga – beyond words; Śabdasaha – whom all the Vedas proclaim; Śiśira – cool comfort to those scorched by worldly life; Śarvarīkara – who makes night and day for the ignorant and the wise.',
            kn: 'ಅರೌದ್ರ – ಕ್ರೂರತೆಯಿಲ್ಲದವನು; ಕುಂಡಲೀ – ಹೊಳೆಯುವ ಕುಂಡಲಗಳನ್ನು ಧರಿಸಿದವನು; ಚಕ್ರೀ – ಚಕ್ರಧಾರಿ; ವಿಕ್ರಮೀ – ಪರಾಕ್ರಮಿ; ಊರ್ಜಿತಶಾಸನ – ಬಲವಾದ ಆಜ್ಞೆಯುಳ್ಳವನು; ಶಬ್ದಾತಿಗ – ಮಾತಿಗೆ ಮೀರಿದವನು; ಶಬ್ದಸಹ – ವೇದಗಳೆಲ್ಲ ಸಾರುವವನು; ಶಿಶಿರ – ಸಂಸಾರತಾಪದಿಂದ ಬೆಂದವರಿಗೆ ತಂಪು; ಶರ್ವರೀಕರ – ಅಜ್ಞಾನಿಗಳಿಗೂ ಜ್ಞಾನಿಗಳಿಗೂ ಹಗಲು-ರಾತ್ರಿಗಳನ್ನು ಮಾಡುವವನು.',
          },
        },
        {
          n: 98,
          text: 'अक्रूरः पेशलो दक्षो दक्षिणः क्षमिणां वरः ।\nविद्वत्तमो वीतभयः पुण्यश्रवणकीर्तनः ॥',
          meaning: {
            en: 'Akrūra – never cruel; Peśala – gentle and graceful; Dakṣa – skilful; Dakṣiṇa – generous; Kṣamiṇāṃ vara – best of the forbearing; Vidvattama – wisest of the wise; Vītabhaya – fearless; Puṇyaśravaṇakīrtana – hearing and singing of whom brings merit.',
            kn: 'ಅಕ್ರೂರ – ಕ್ರೂರನಲ್ಲದವನು; ಪೇಶಲ – ಕೋಮಲನು, ಸುಂದರನು; ದಕ್ಷ – ಕುಶಲನು; ದಕ್ಷಿಣ – ಉದಾರಿ; ಕ್ಷಮಿಣಾಂ ವರ – ಕ್ಷಮಾಶೀಲರಲ್ಲಿ ಶ್ರೇಷ್ಠನು; ವಿದ್ವತ್ತಮ – ಜ್ಞಾನಿಗಳಲ್ಲಿ ಶ್ರೇಷ್ಠನು; ವೀತಭಯ – ಭಯವಿಲ್ಲದವನು; ಪುಣ್ಯಶ್ರವಣಕೀರ್ತನ – ಯಾರ ಕಥೆಯ ಶ್ರವಣ-ಕೀರ್ತನೆಗಳು ಪುಣ್ಯಪ್ರದವೋ ಅವನು.',
          },
        },
        {
          n: 99,
          text: 'उत्तारणो दुष्कृतिहा पुण्यो दुःस्वप्ननाशनः ।\nवीरहा रक्षणः सन्तो जीवनः पर्यवस्थितः ॥',
          meaning: {
            en: 'Uttāraṇa – who lifts beings across the ocean of worldly life; Duṣkṛtihā – destroyer of evil deeds; Puṇya – holy; Duḥsvapnanāśana – who drives away bad dreams; Vīrahā – who ends the round of rebirth for the freed; Rakṣaṇa – the protector; Santa – present in the saints; Jīvana – who sustains life; Paryavasthita – who pervades everything around.',
            kn: 'ಉತ್ತಾರಣ – ಸಂಸಾರಸಾಗರದಿಂದ ದಾಟಿಸುವವನು; ದುಷ್ಕೃತಿಹಾ – ಪಾಪಕರ್ಮಗಳನ್ನು ನಾಶಮಾಡುವವನು; ಪುಣ್ಯ – ಪವಿತ್ರನು; ದುಃಸ್ವಪ್ನನಾಶನ – ಕೆಟ್ಟ ಕನಸುಗಳನ್ನು ದೂರ ಮಾಡುವವನು; ವೀರಹಾ – ಮುಕ್ತರಿಗೆ ಪುನರ್ಜನ್ಮದ ಚಕ್ರವನ್ನು ನಿಲ್ಲಿಸುವವನು; ರಕ್ಷಣ – ರಕ್ಷಕನು; ಸಂತ – ಸಜ್ಜನರಲ್ಲಿ ನೆಲೆಸಿದವನು; ಜೀವನ – ಜೀವಿಗಳನ್ನು ಬದುಕಿಸುವವನು; ಪರ್ಯವಸ್ಥಿತ – ಸುತ್ತಲೂ ಎಲ್ಲವನ್ನೂ ವ್ಯಾಪಿಸಿದವನು.',
          },
        },
        {
          n: 100,
          text: 'अनन्तरूपोऽनन्तश्रीर्जितमन्युर्भयापहः ।\nचतुरश्रो गभीरात्मा विदिशो व्यादिशो दिशः ॥',
          meaning: {
            en: 'Anantarūpa – of endless forms; Anantaśrī – of endless glory; Jitamanyu – who has conquered anger; Bhayāpaha – remover of fear; Caturaśra – the just, who deals fairly; Gabhīrātmā – of profound nature; Vidiśa – who gives in many ways; Vyādiśa – who assigns each his work; Diśa – who instructs through the Veda.',
            kn: 'ಅನಂತರೂಪ – ಅನಂತ ರೂಪಗಳವನು; ಅನಂತಶ್ರೀ – ಅನಂತ ಐಶ್ವರ್ಯದವನು; ಜಿತಮನ್ಯು – ಕೋಪವನ್ನು ಗೆದ್ದವನು; ಭಯಾಪಹ – ಭಯವನ್ನು ಹೋಗಲಾಡಿಸುವವನು; ಚತುರಶ್ರ – ನ್ಯಾಯಪರನು; ಗಭೀರಾತ್ಮಾ – ಗಂಭೀರ ಸ್ವರೂಪನು; ವಿದಿಶ – ವಿವಿಧವಾಗಿ ಕೊಡುವವನು; ವ್ಯಾದಿಶ – ಎಲ್ಲರಿಗೂ ಕಾರ್ಯ ನಿಯೋಜಿಸುವವನು; ದಿಶ – ವೇದದ ಮೂಲಕ ಉಪದೇಶಿಸುವವನು.',
          },
        },
        {
          n: 101,
          text: 'अनादिर्भूर्भुवो लक्ष्मीः सुवीरो रुचिराङ्गदः ।\nजननो जनजन्मादिर्भीमो भीमपराक्रमः ॥',
          meaning: {
            en: 'Anādi – without beginning; Bhūrbhuva – the support of the earth; Lakṣmī – its glory; Suvīra – of fine valour; Rucirāṅgada – with lovely armlets; Janana – who gives birth to beings; Janajanmādi – the root from which beings are born; Bhīma – the awesome; Bhīmaparākrama – of awe-inspiring valour.',
            kn: 'ಅನಾದಿ – ಆದಿಯಿಲ್ಲದವನು; ಭೂರ್ಭುವ – ಭೂಮಿಗೆ ಆಧಾರ; ಲಕ್ಷ್ಮೀ – ಅದರ ಶೋಭೆ; ಸುವೀರ – ಶ್ರೇಷ್ಠ ವೀರ; ರುಚಿರಾಂಗದ – ಸುಂದರ ತೋಳ್ಬಂದಿಗಳವನು; ಜನನ – ಜೀವಿಗಳನ್ನು ಹುಟ್ಟಿಸುವವನು; ಜನಜನ್ಮಾದಿ – ಜೀವಿಗಳ ಜನ್ಮಕ್ಕೆ ಮೂಲ; ಭೀಮ – ಭಯಂಕರನು; ಭೀಮಪರಾಕ್ರಮ – ಭಯಂಕರ ಪರಾಕ್ರಮಿ.',
          },
        },
        {
          n: 102,
          text: 'आधारनिलयोऽधाता पुष्पहासः प्रजागरः ।\nऊर्ध्वगः सत्पथाचारः प्राणदः प्रणवः पणः ॥',
          meaning: {
            en: 'Ādhāranilaya – the support of all supports; Adhātā – who has no creator above him; Puṣpahāsa – who blossoms like a flower into the world; Prajāgara – ever awake; Ūrdhvaga – who stands above all; Satpathācāra – who walks the path of the good; Prāṇada – who gives life back; Praṇava – the syllable Om; Paṇa – who rewards.',
            kn: 'ಆಧಾರನಿಲಯ – ಎಲ್ಲ ಆಧಾರಗಳಿಗೂ ಆಧಾರ; ಅಧಾತಾ – ತನ್ನನ್ನು ಸೃಷ್ಟಿಸುವವರಿಲ್ಲದವನು; ಪುಷ್ಪಹಾಸ – ಹೂವಿನಂತೆ ಜಗದ್ರೂಪದಲ್ಲಿ ಅರಳುವವನು; ಪ್ರಜಾಗರ – ಸದಾ ಎಚ್ಚರವಾಗಿರುವವನು; ಊರ್ಧ್ವಗ – ಎಲ್ಲರಿಗಿಂತ ಮೇಲಿರುವವನು; ಸತ್ಪಥಾಚಾರ – ಸನ್ಮಾರ್ಗದಲ್ಲಿ ನಡೆಯುವವನು; ಪ್ರಾಣದ – ಪ್ರಾಣವನ್ನು ಮರಳಿ ಕೊಡುವವನು; ಪ್ರಣವ – ಓಂಕಾರ; ಪಣ – ಫಲ ನೀಡುವವನು.',
          },
        },
        {
          n: 103,
          text: 'प्रमाणं प्राणनिलयः प्राणभृत्प्राणजीवनः ।\nतत्त्वं तत्त्वविदेकात्मा जन्ममृत्युजरातिगः ॥',
          meaning: {
            en: 'Pramāṇam – the measure of all, pure consciousness; Prāṇanilaya – where the life-breaths rest; Prāṇabhṛt – who nourishes them; Prāṇajīvana – who keeps beings alive through breath; Tattvam – reality itself; Tattvavit – who knows the truth; Ekātmā – the one Self; Janmamṛtyujarātiga – beyond birth, death and old age.',
            kn: 'ಪ್ರಮಾಣ – ಜ್ಞಾನಸ್ವರೂಪ, ಎಲ್ಲದರ ಅಳತೆ; ಪ್ರಾಣನಿಲಯ – ಪ್ರಾಣಗಳ ನೆಲೆ; ಪ್ರಾಣಭೃತ್ – ಪ್ರಾಣಗಳನ್ನು ಪೋಷಿಸುವವನು; ಪ್ರಾಣಜೀವನ – ಪ್ರಾಣದ ಮೂಲಕ ಜೀವಿಗಳನ್ನು ಬದುಕಿಸುವವನು; ತತ್ತ್ವ – ಸತ್ಯವಸ್ತು; ತತ್ತ್ವವಿತ್ – ತತ್ತ್ವವನ್ನು ಬಲ್ಲವನು; ಏಕಾತ್ಮಾ – ಏಕೈಕ ಆತ್ಮ; ಜನ್ಮಮೃತ್ಯುಜರಾತಿಗ – ಹುಟ್ಟು, ಸಾವು, ಮುಪ್ಪುಗಳನ್ನು ಮೀರಿದವನು.',
          },
        },
        {
          n: 104,
          text: 'भूर्भुवःस्वस्तरुस्तारः सविता प्रपितामहः ।\nयज्ञो यज्ञपतिर्यज्वा यज्ञाङ्गो यज्ञवाहनः ॥',
          meaning: {
            en: 'Bhūrbhuvaḥsvastaru – the tree of the three worlds; Tāra – who carries across; Savitā – the father of all; Prapitāmaha – great-grandsire, father of Brahmā; Yajña – the sacrifice; Yajñapati – Lord of sacrifice; Yajvā – the sacrificer; Yajñāṅga – whose limbs are the sacrifice, as the Boar; Yajñavāhana – who carries the sacrifice to its fruit.',
            kn: 'ಭೂರ್ಭುವಃಸ್ವಸ್ತರು – ಮೂರು ಲೋಕಗಳೆಂಬ ವೃಕ್ಷ; ತಾರ – ದಾಟಿಸುವವನು; ಸವಿತಾ – ಎಲ್ಲರ ತಂದೆ; ಪ್ರಪಿತಾಮಹ – ಬ್ರಹ್ಮನಿಗೂ ತಂದೆ; ಯಜ್ಞ – ಯಜ್ಞಸ್ವರೂಪ; ಯಜ್ಞಪತಿ – ಯಜ್ಞದ ಒಡೆಯ; ಯಜ್ವಾ – ಯಜ್ಞ ಮಾಡುವವನು; ಯಜ್ಞಾಂಗ – ವರಾಹರೂಪದಲ್ಲಿ ಯಜ್ಞವೇ ಅಂಗಗಳಾದವನು; ಯಜ್ಞವಾಹನ – ಯಜ್ಞವನ್ನು ಫಲದವರೆಗೆ ಒಯ್ಯುವವನು.',
          },
        },
        {
          n: 105,
          text: 'यज्ञभृद्यज्ञकृद्यज्ञी यज्ञभुग्यज्ञसाधनः ।\nयज्ञान्तकृद्यज्ञगुह्यमन्नमन्नाद एव च ॥',
          meaning: {
            en: 'Yajñabhṛt – sustainer of sacrifice; Yajñakṛt – who creates the sacrifice; Yajñī – the chief of all sacrifices; Yajñabhuk – enjoyer of sacrifice; Yajñasādhana – reached through sacrifice; Yajñāntakṛt – who brings the sacrifice to its fruit; Yajñaguhyam – the secret of sacrifice; Annam – food; Annāda – the eater of food.',
            kn: 'ಯಜ್ಞಭೃತ್ – ಯಜ್ಞವನ್ನು ಪೋಷಿಸುವವನು; ಯಜ್ಞಕೃತ್ – ಯಜ್ಞವನ್ನು ಸೃಷ್ಟಿಸಿದವನು; ಯಜ್ಞೀ – ಯಜ್ಞಗಳ ಪ್ರಧಾನ; ಯಜ್ಞಭುಕ್ – ಯಜ್ಞಭೋಕ್ತ; ಯಜ್ಞಸಾಧನ – ಯಜ್ಞದಿಂದ ಹೊಂದಲ್ಪಡುವವನು; ಯಜ್ಞಾಂತಕೃತ್ – ಯಜ್ಞಕ್ಕೆ ಫಲ ಕೊಡುವವನು; ಯಜ್ಞಗುಹ್ಯ – ಯಜ್ಞದ ರಹಸ್ಯ; ಅನ್ನ – ಅನ್ನಸ್ವರೂಪ; ಅನ್ನಾದ – ಅನ್ನವನ್ನು ಭುಂಜಿಸುವವನು.',
          },
        },
        {
          n: 106,
          text: 'आत्मयोनिः स्वयञ्जातो वैखानः सामगायनः ।\nदेवकीनन्दनः स्रष्टा क्षितीशः पापनाशनः ॥',
          meaning: {
            en: 'Ātmayoni – his own source; Svayañjāta – self-born; Vaikhāna – who dug deep into the earth, as the Boar; Sāmagāyana – who sings the Sāma; Devakīnandana – son of Devakī; Sraṣṭā – the creator; Kṣitīśa – Lord of the earth; Pāpanāśana – destroyer of sin.',
            kn: 'ಆತ್ಮಯೋನಿ – ತಾನೇ ತನಗೆ ಮೂಲ; ಸ್ವಯಂಜಾತ – ತಾನಾಗಿಯೇ ಪ್ರಕಟನಾದವನು; ವೈಖಾನ – ವರಾಹನಾಗಿ ಭೂಮಿಯನ್ನು ಅಗೆದವನು; ಸಾಮಗಾಯನ – ಸಾಮಗಾನ ಮಾಡುವವನು; ದೇವಕೀನಂದನ – ದೇವಕಿಯ ಮಗ; ಸ್ರಷ್ಟಾ – ಸೃಷ್ಟಿಕರ್ತ; ಕ್ಷಿತೀಶ – ಭೂಮಿಯ ಒಡೆಯ; ಪಾಪನಾಶನ – ಪಾಪವನ್ನು ನಾಶಮಾಡುವವನು.',
          },
        },
        {
          n: 107,
          text: 'शङ्खभृन्नन्दकी चक्री शार्ङ्गधन्वा गदाधरः ।\nरथाङ्गपाणिरक्षोभ्यः सर्वप्रहरणायुधः ॥',
          meaning: {
            en: 'Śaṅkhabhṛt – bearer of the conch Pāñcajanya; Nandakī – holder of the sword Nandaka; Cakrī – bearer of the discus Sudarśana; Śārṅgadhanvā – wielder of the bow Śārṅga; Gadādhara – bearer of the mace Kaumodakī; Rathāṅgapāṇi – with the wheel in his hand; Akṣobhya – never disturbed; Sarvapraharaṇāyudha – armed with every kind of weapon.',
            kn: 'ಶಂಖಭೃತ್ – ಪಾಂಚಜನ್ಯ ಶಂಖಧಾರಿ; ನಂದಕೀ – ನಂದಕ ಖಡ್ಗಧಾರಿ; ಚಕ್ರೀ – ಸುದರ್ಶನ ಚಕ್ರಧಾರಿ; ಶಾರ್ಙ್ಗಧನ್ವಾ – ಶಾರ್ಙ್ಗ ಧನುರ್ಧಾರಿ; ಗದಾಧರ – ಕೌಮೋದಕೀ ಗದಾಧಾರಿ; ರಥಾಂಗಪಾಣಿ – ಕೈಯಲ್ಲಿ ಚಕ್ರವುಳ್ಳವನು; ಅಕ್ಷೋಭ್ಯ – ಕದಲದವನು; ಸರ್ವಪ್ರಹರಣಾಯುಧ – ಎಲ್ಲ ಬಗೆಯ ಆಯುಧಗಳನ್ನು ಧರಿಸಿದವನು.',
          },
        },
        { text: 'सर्वप्रहरणायुध ॐ नम इति ।' },
        {
          n: 108,
          text: 'वनमाली गदी शार्ङ्गी शङ्खी चक्री च नन्दकी ।\nश्रीमान् नारायणो विष्णुर्वासुदेवोऽभिरक्षतु ॥',
          meaning: {
            en: 'May the glorious Nārāyaṇa, Viṣṇu, Vāsudeva, who wears the forest garland and bears the mace, the bow Śārṅga, the conch, the discus and the sword Nandaka, protect us.',
            kn: 'ವನಮಾಲೆ ಧರಿಸಿದ, ಗದೆ, ಶಾರ್ಙ್ಗ ಧನುಸ್ಸು, ಶಂಖ, ಚಕ್ರ ಮತ್ತು ನಂದಕ ಖಡ್ಗವನ್ನು ಹಿಡಿದ ಶ್ರೀಮನ್ನಾರಾಯಣನಾದ ವಿಷ್ಣು ವಾಸುದೇವನು ನಮ್ಮನ್ನು ರಕ್ಷಿಸಲಿ.',
          },
        },
        { text: 'श्रीवासुदेवोऽभिरक्षतु ॐ नम इति ।' },
      ],
    },

    // ───────────────────────── Uttara-bhāga / Phala-śruti ─────────────────────────
    {
      title: 'उत्तरभागः',
      titleEn: 'Uttara-bhāga (Phala-śruti)',
      verses: [
        { text: 'भीष्म उवाच' },
        {
          n: 1,
          text: 'इतीदं कीर्तनीयस्य केशवस्य महात्मनः ।\nनाम्नां सहस्रं दिव्यानामशेषेण प्रकीर्तितम् ॥',
          meaning: {
            en: 'Thus the thousand divine names of the great Keśava, who is worthy of praise, have been recited in full.',
            kn: 'ಹೀಗೆ ಕೀರ್ತನೆಗೆ ಯೋಗ್ಯನಾದ ಮಹಾತ್ಮ ಕೇಶವನ ಸಾವಿರ ದಿವ್ಯ ನಾಮಗಳನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಹೇಳಲಾಯಿತು.',
          },
        },
        {
          n: 2,
          text: 'य इदं शृणुयान्नित्यं यश्चापि परिकीर्तयेत् ।\nनाशुभं प्राप्नुयात्किञ्चित्सोऽमुत्रेह च मानवः ॥',
          meaning: {
            en: 'Whoever hears this every day, or recites it, meets with no harm at all, here or in the world beyond.',
            kn: 'ಇದನ್ನು ನಿತ್ಯವೂ ಕೇಳುವವನಿಗೂ ಪಠಿಸುವವನಿಗೂ ಇಹದಲ್ಲಾಗಲಿ ಪರದಲ್ಲಾಗಲಿ ಯಾವ ಅಶುಭವೂ ಬರುವುದಿಲ್ಲ.',
          },
        },
        {
          n: 3,
          text: 'वेदान्तगो ब्राह्मणः स्यात्क्षत्रियो विजयी भवेत् ।\nवैश्यो धनसमृद्धः स्याच्छूद्रः सुखमवाप्नुयात् ॥',
          meaning: {
            en: 'A brāhmaṇa gains mastery of Vedānta, a kṣatriya victory, a vaiśya wealth, and a śūdra happiness.',
            kn: 'ಬ್ರಾಹ್ಮಣನು ವೇದಾಂತಜ್ಞನಾಗುವನು, ಕ್ಷತ್ರಿಯನು ವಿಜಯಿಯಾಗುವನು, ವೈಶ್ಯನು ಧನಸಮೃದ್ಧನಾಗುವನು, ಶೂದ್ರನು ಸುಖವನ್ನು ಪಡೆಯುವನು.',
          },
        },
        {
          n: 4,
          text: 'धर्मार्थी प्राप्नुयाद्धर्ममर्थार्थी चार्थमाप्नुयात् ।\nकामानवाप्नुयात्कामी प्रजार्थी चाप्नुयात्प्रजाम् ॥',
          meaning: {
            en: 'One who seeks dharma gains dharma, one who seeks wealth gains wealth, one who seeks pleasures gains them, and one who longs for children is blessed with them.',
            kn: 'ಧರ್ಮವನ್ನು ಬಯಸುವವನಿಗೆ ಧರ್ಮ, ಸಂಪತ್ತನ್ನು ಬಯಸುವವನಿಗೆ ಸಂಪತ್ತು, ಇಷ್ಟಗಳನ್ನು ಬಯಸುವವನಿಗೆ ಇಷ್ಟಾರ್ಥಗಳು, ಸಂತಾನವನ್ನು ಬಯಸುವವನಿಗೆ ಸಂತಾನ ದೊರಕುತ್ತದೆ.',
          },
        },
        {
          n: 5,
          text: 'भक्तिमान् यः सदोत्थाय शुचिस्तद्गतमानसः ।\nसहस्रं वासुदेवस्य नाम्नामेतत्प्रकीर्तयेत् ॥',
          meaning: {
            en: 'The devotee who rises early, pure and with his mind fixed on the Lord, and recites these thousand names of Vāsudeva,',
            kn: 'ಭಕ್ತಿಯಿಂದ ಬೆಳಿಗ್ಗೆ ಎದ್ದು, ಶುಚಿಯಾಗಿ, ಭಗವಂತನಲ್ಲಿ ಮನಸ್ಸಿಟ್ಟು ವಾಸುದೇವನ ಈ ಸಾವಿರ ನಾಮಗಳನ್ನು ಪಠಿಸುವವನು,',
          },
        },
        {
          n: 6,
          text: 'यशः प्राप्नोति विपुलं ज्ञातिप्राधान्यमेव च ।\nअचलां श्रियमाप्नोति श्रेयः प्राप्नोत्यनुत्तमम् ॥',
          meaning: {
            en: 'wins wide renown and a foremost place among his kin, gains lasting prosperity and attains the highest good.',
            kn: 'ವಿಶಾಲವಾದ ಕೀರ್ತಿಯನ್ನೂ ಬಂಧುಗಳಲ್ಲಿ ಹಿರಿಮೆಯನ್ನೂ ಸ್ಥಿರವಾದ ಸಂಪತ್ತನ್ನೂ ಸರ್ವೋತ್ತಮ ಶ್ರೇಯಸ್ಸನ್ನೂ ಪಡೆಯುವನು.',
          },
        },
        {
          n: 7,
          text: 'न भयं क्वचिदाप्नोति वीर्यं तेजश्च विन्दति ।\nभवत्यरोगो द्युतिमान्बलरूपगुणान्वितः ॥',
          meaning: {
            en: 'He knows no fear anywhere, gains courage and vigour, and becomes healthy, radiant, and endowed with strength, beauty and virtue.',
            kn: 'ಅವನಿಗೆ ಎಲ್ಲಿಯೂ ಭಯವಿರದು; ವೀರ್ಯ-ತೇಜಸ್ಸುಗಳು ದೊರಕುತ್ತವೆ; ಆರೋಗ್ಯವಂತನೂ ಕಾಂತಿಯುತನೂ ಬಲ, ರೂಪ, ಗುಣಗಳಿಂದ ಕೂಡಿದವನೂ ಆಗುತ್ತಾನೆ.',
          },
        },
        {
          n: 8,
          text: 'रोगार्तो मुच्यते रोगाद्बद्धो मुच्येत बन्धनात् ।\nभयान्मुच्येत भीतस्तु मुच्येतापन्न आपदः ॥',
          meaning: {
            en: 'The sick are freed from illness, the bound from bondage, the frightened from fear, and those in distress from their calamity.',
            kn: 'ರೋಗಿಯು ರೋಗದಿಂದ, ಬಂಧಿತನು ಬಂಧನದಿಂದ, ಭಯಗೊಂಡವನು ಭಯದಿಂದ, ಆಪತ್ತಿನಲ್ಲಿರುವವನು ಆಪತ್ತಿನಿಂದ ಬಿಡುಗಡೆ ಹೊಂದುತ್ತಾನೆ.',
          },
        },
        {
          n: 9,
          text: 'दुर्गाण्यतितरत्याशु पुरुषः पुरुषोत्तमम् ।\nस्तुवन्नामसहस्रेण नित्यं भक्तिसमन्वितः ॥',
          meaning: {
            en: 'A person who praises the Supreme Person daily with the thousand names, full of devotion, quickly crosses every difficulty.',
            kn: 'ಭಕ್ತಿಯಿಂದ ಕೂಡಿ ನಿತ್ಯವೂ ಸಾವಿರ ನಾಮಗಳಿಂದ ಪುರುಷೋತ್ತಮನನ್ನು ಸ್ತುತಿಸುವವನು ಎಲ್ಲ ಕಷ್ಟಗಳನ್ನೂ ಬೇಗನೆ ದಾಟುತ್ತಾನೆ.',
          },
        },
        {
          n: 10,
          text: 'वासुदेवाश्रयो मर्त्यो वासुदेवपरायणः ।\nसर्वपापविशुद्धात्मा याति ब्रह्म सनातनम् ॥',
          meaning: {
            en: 'One who takes refuge in Vāsudeva and holds him as the highest goal is cleansed of all sin and reaches the eternal Brahman.',
            kn: 'ವಾಸುದೇವನನ್ನು ಆಶ್ರಯಿಸಿ ಅವನನ್ನೇ ಪರಮ ಗುರಿಯಾಗಿಟ್ಟುಕೊಂಡ ಮನುಷ್ಯನು ಎಲ್ಲ ಪಾಪಗಳಿಂದ ಶುದ್ಧನಾಗಿ ಸನಾತನ ಬ್ರಹ್ಮವನ್ನು ಸೇರುತ್ತಾನೆ.',
          },
        },
        {
          n: 11,
          text: 'न वासुदेवभक्तानामशुभं विद्यते क्वचित् ।\nजन्ममृत्युजराव्याधिभयं नैवोपजायते ॥',
          meaning: {
            en: 'For the devotees of Vāsudeva there is no misfortune anywhere; the fear of birth, death, old age and disease does not arise in them.',
            kn: 'ವಾಸುದೇವನ ಭಕ್ತರಿಗೆ ಎಲ್ಲಿಯೂ ಅಶುಭವಿಲ್ಲ; ಹುಟ್ಟು, ಸಾವು, ಮುಪ್ಪು, ರೋಗಗಳ ಭಯ ಅವರಲ್ಲಿ ಹುಟ್ಟುವುದೇ ಇಲ್ಲ.',
          },
        },
        {
          n: 12,
          text: 'इमं स्तवमधीयानः श्रद्धाभक्तिसमन्वितः ।\nयुज्येतात्मसुखक्षान्तिश्रीधृतिस्मृतिकीर्तिभिः ॥',
          meaning: {
            en: 'One who studies this hymn with faith and devotion is blessed with inner happiness, patience, prosperity, steadiness, memory and fame.',
            kn: 'ಶ್ರದ್ಧೆ-ಭಕ್ತಿಗಳಿಂದ ಈ ಸ್ತೋತ್ರವನ್ನು ಅಧ್ಯಯನ ಮಾಡುವವನಿಗೆ ಆತ್ಮಸುಖ, ಸಹನೆ, ಸಂಪತ್ತು, ಧೈರ್ಯ, ಸ್ಮರಣಶಕ್ತಿ ಮತ್ತು ಕೀರ್ತಿ ದೊರಕುತ್ತವೆ.',
          },
        },
        {
          n: 13,
          text: 'न क्रोधो न च मात्सर्यं न लोभो नाशुभा मतिः ।\nभवन्ति कृतपुण्यानां भक्तानां पुरुषोत्तमे ॥',
          meaning: {
            en: 'Anger, envy, greed and evil thoughts do not arise in the virtuous devotees of the Supreme Person.',
            kn: 'ಪುರುಷೋತ್ತಮನ ಪುಣ್ಯವಂತ ಭಕ್ತರಲ್ಲಿ ಕೋಪ, ಮಾತ್ಸರ್ಯ, ಲೋಭ, ಕೆಟ್ಟ ಬುದ್ಧಿ ಹುಟ್ಟುವುದಿಲ್ಲ.',
          },
        },
        {
          n: 14,
          text: 'द्यौः सचन्द्रार्कनक्षत्रा खं दिशो भूर्महोदधिः ।\nवासुदेवस्य वीर्येण विधृतानि महात्मनः ॥',
          meaning: {
            en: 'The heavens with the moon, sun and stars, the sky, the quarters, the earth and the great ocean are all upheld by the power of the great Vāsudeva.',
            kn: 'ಚಂದ್ರ, ಸೂರ್ಯ, ನಕ್ಷತ್ರಗಳೊಡನೆ ದ್ಯುಲೋಕ, ಆಕಾಶ, ದಿಕ್ಕುಗಳು, ಭೂಮಿ, ಮಹಾಸಮುದ್ರ ಇವೆಲ್ಲವೂ ಮಹಾತ್ಮ ವಾಸುದೇವನ ಶಕ್ತಿಯಿಂದಲೇ ಧರಿಸಲ್ಪಟ್ಟಿವೆ.',
          },
        },
        {
          n: 15,
          text: 'ससुरासुरगन्धर्वं सयक्षोरगराक्षसम् ।\nजगद्वशे वर्ततेदं कृष्णस्य सचराचरम् ॥',
          meaning: {
            en: 'This whole world of moving and unmoving things, with gods, demons, gandharvas, yakṣas, serpents and rākṣasas, is under the sway of Kṛṣṇa.',
            kn: 'ದೇವ, ಅಸುರ, ಗಂಧರ್ವ, ಯಕ್ಷ, ಉರಗ, ರಾಕ್ಷಸರಿಂದ ಕೂಡಿದ ಚರಾಚರ ಜಗತ್ತೆಲ್ಲವೂ ಶ್ರೀಕೃಷ್ಣನ ವಶದಲ್ಲಿದೆ.',
          },
        },
        {
          n: 16,
          text: 'इन्द्रियाणि मनो बुद्धिः सत्त्वं तेजो बलं धृतिः ।\nवासुदेवात्मकान्याहुः क्षेत्रं क्षेत्रज्ञ एव च ॥',
          meaning: {
            en: 'The senses, mind, intellect, sattva, energy, strength and steadiness, the body and the knower of the body, all are said to have Vāsudeva as their very self.',
            kn: 'ಇಂದ್ರಿಯಗಳು, ಮನಸ್ಸು, ಬುದ್ಧಿ, ಸತ್ತ್ವ, ತೇಜಸ್ಸು, ಬಲ, ಧೈರ್ಯ, ದೇಹ ಮತ್ತು ದೇಹವನ್ನರಿತ ಜೀವ ಇವೆಲ್ಲಕ್ಕೂ ವಾಸುದೇವನೇ ಆತ್ಮನೆಂದು ಹೇಳುತ್ತಾರೆ.',
          },
        },
        {
          n: 17,
          text: 'सर्वागमानामाचारः प्रथमं परिकल्पते ।\nआचारप्रभवो धर्मो धर्मस्य प्रभुरच्युतः ॥',
          meaning: {
            en: 'Of all teachings, right conduct is placed first; dharma springs from right conduct, and the Lord of dharma is Acyuta.',
            kn: 'ಎಲ್ಲ ಶಾಸ್ತ್ರಗಳಲ್ಲಿ ಆಚಾರಕ್ಕೇ ಮೊದಲ ಸ್ಥಾನ; ಆಚಾರದಿಂದ ಧರ್ಮ ಹುಟ್ಟುತ್ತದೆ; ಧರ್ಮದ ಒಡೆಯನು ಅಚ್ಯುತನು.',
          },
        },
        {
          n: 18,
          text: 'ऋषयः पितरो देवा महाभूतानि धातवः ।\nजङ्गमाजङ्गमं चेदं जगन्नारायणोद्भवम् ॥',
          meaning: {
            en: 'The sages, the ancestors, the gods, the great elements and the substances of the world, this whole world of moving and unmoving things, all came forth from Nārāyaṇa.',
            kn: 'ಋಷಿಗಳು, ಪಿತೃಗಳು, ದೇವತೆಗಳು, ಮಹಾಭೂತಗಳು, ಧಾತುಗಳು, ಚರಾಚರ ಜಗತ್ತೆಲ್ಲವೂ ನಾರಾಯಣನಿಂದಲೇ ಹುಟ್ಟಿದವು.',
          },
        },
        {
          n: 19,
          text: 'योगो ज्ञानं तथा साङ्ख्यं विद्याः शिल्पादि कर्म च ।\nवेदाः शास्त्राणि विज्ञानमेतत्सर्वं जनार्दनात् ॥',
          meaning: {
            en: 'Yoga, knowledge and Sāṅkhya, the sciences, the arts and crafts, the Vedas, the śāstras and all wisdom come from Janārdana.',
            kn: 'ಯೋಗ, ಜ್ಞಾನ, ಸಾಂಖ್ಯ, ವಿದ್ಯೆಗಳು, ಶಿಲ್ಪಾದಿ ಕಲೆಗಳು, ವೇದಗಳು, ಶಾಸ್ತ್ರಗಳು, ವಿಜ್ಞಾನ ಇವೆಲ್ಲವೂ ಜನಾರ್ದನನಿಂದಲೇ ಬಂದವು.',
          },
        },
        {
          n: 20,
          text: 'एको विष्णुर्महद्भूतं पृथग्भूतान्यनेकशः ।\nत्रीँल्लोकान्व्याप्य भूतात्मा भुङ्क्ते विश्वभुगव्ययः ॥',
          meaning: {
            en: 'Viṣṇu, the one great Being, pervades the three worlds through countless separate beings; as their inner Self, the imperishable Lord sustains and enjoys them all.',
            kn: 'ಏಕೈಕ ಮಹಾತತ್ತ್ವನಾದ ವಿಷ್ಣುವೇ ಅನೇಕ ಬೇರೆ ಬೇರೆ ಜೀವಿಗಳಲ್ಲಿ ಮೂರು ಲೋಕಗಳನ್ನು ವ್ಯಾಪಿಸಿ, ಅವುಗಳ ಅಂತರಾತ್ಮನಾಗಿ, ನಾಶವಿಲ್ಲದ ವಿಶ್ವಭೋಕ್ತನಾಗಿ ಎಲ್ಲವನ್ನೂ ಪಾಲಿಸುತ್ತಾನೆ.',
          },
        },
        {
          n: 21,
          text: 'इमं स्तवं भगवतो विष्णोर्व्यासेन कीर्तितम् ।\nपठेद्य इच्छेत्पुरुषः श्रेयः प्राप्तुं सुखानि च ॥',
          meaning: {
            en: 'Whoever wishes for the highest good and for happiness should recite this hymn to Lord Viṣṇu, composed by Vyāsa.',
            kn: 'ಶ್ರೇಯಸ್ಸನ್ನೂ ಸುಖವನ್ನೂ ಬಯಸುವವನು ವ್ಯಾಸರು ರಚಿಸಿದ ಭಗವಾನ್ ವಿಷ್ಣುವಿನ ಈ ಸ್ತೋತ್ರವನ್ನು ಪಠಿಸಬೇಕು.',
          },
        },
        {
          n: 22,
          text: 'विश्वेश्वरमजं देवं जगतः प्रभुमव्ययम् ।\nभजन्ति ये पुष्कराक्षं न ते यान्ति पराभवम् ॥',
          meaning: {
            en: 'Those who worship the lotus-eyed God, the unborn Lord of the universe, the imperishable master of the world, never meet with defeat.',
            kn: 'ವಿಶ್ವೇಶ್ವರನೂ ಅಜನೂ ಜಗತ್ತಿನ ಅವಿನಾಶಿ ಒಡೆಯನೂ ಆದ ಕಮಲನಯನ ದೇವನನ್ನು ಭಜಿಸುವವರು ಎಂದಿಗೂ ಸೋಲನ್ನು ಕಾಣುವುದಿಲ್ಲ.',
          },
        },
        { text: 'न ते यान्ति पराभवम् ॐ नम इति ।' },
        { text: 'अर्जुन उवाच' },
        {
          n: 23,
          text: 'पद्मपत्रविशालाक्ष पद्मनाभ सुरोत्तम ।\nभक्तानामनुरक्तानां त्राता भव जनार्दन ॥',
          meaning: {
            en: 'Arjuna: O you whose eyes are wide as lotus petals, lotus-navelled, best of the gods, Janārdana, be the protector of the devotees who love you.',
            kn: 'ಅರ್ಜುನನು ಹೇಳಿದನು: ಕಮಲದಳದಂತೆ ವಿಶಾಲ ಕಣ್ಣುಗಳವನೇ, ಪದ್ಮನಾಭನೇ, ದೇವೋತ್ತಮನೇ, ಜನಾರ್ದನನೇ, ನಿನ್ನನ್ನು ಪ್ರೀತಿಸುವ ಭಕ್ತರಿಗೆ ರಕ್ಷಕನಾಗು.',
          },
        },
        { text: 'श्रीभगवानुवाच' },
        {
          n: 24,
          text: 'यो मां नामसहस्रेण स्तोतुमिच्छति पाण्डव ।\nसोऽहमेकेन श्लोकेन स्तुत एव न संशयः ॥',
          meaning: {
            en: 'The Lord: Whoever wishes to praise me with the thousand names, O Pāṇḍava, know that I am praised even by a single verse; of this there is no doubt.',
            kn: 'ಭಗವಂತನು ಹೇಳಿದನು: ಪಾಂಡವನೇ, ಸಾವಿರ ನಾಮಗಳಿಂದ ನನ್ನನ್ನು ಸ್ತುತಿಸಲು ಬಯಸುವವನಿಂದ ನಾನು ಒಂದೇ ಶ್ಲೋಕದಿಂದಲೂ ಸ್ತುತನಾಗುತ್ತೇನೆ; ಇದರಲ್ಲಿ ಸಂಶಯವಿಲ್ಲ.',
          },
        },
        { text: 'स्तुत एव न संशय ॐ नम इति ।' },
        { text: 'व्यास उवाच' },
        {
          n: 25,
          text: 'वासनाद्वासुदेवस्य वासितं भुवनत्रयम् ।\nसर्वभूतनिवासोऽसि वासुदेव नमोऽस्तु ते ॥',
          meaning: {
            en: 'Vyāsa: Because Vāsudeva dwells in them, the three worlds are filled with him. You are the dwelling of all beings, O Vāsudeva; salutations to you.',
            kn: 'ವ್ಯಾಸರು ಹೇಳಿದರು: ವಾಸುದೇವನು ವಾಸಿಸುವುದರಿಂದಲೇ ಮೂರು ಲೋಕಗಳೂ ಅವನಿಂದ ತುಂಬಿವೆ. ವಾಸುದೇವನೇ, ನೀನು ಎಲ್ಲ ಜೀವಿಗಳ ನೆಲೆ; ನಿನಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        { text: 'श्रीवासुदेव नमोऽस्तुत ॐ नम इति ।' },
        { text: 'पार्वत्युवाच' },
        {
          n: 26,
          text: 'केनोपायेन लघुना विष्णोर्नामसहस्रकम् ।\nपठ्यते पण्डितैर्नित्यं श्रोतुमिच्छाम्यहं प्रभो ॥',
          meaning: {
            en: 'Pārvatī: By what easy means do the learned recite the thousand names of Viṣṇu every day? I wish to hear it, my Lord.',
            kn: 'ಪಾರ್ವತಿ ಕೇಳಿದಳು: ಪ್ರಭುವೇ, ಪಂಡಿತರು ವಿಷ್ಣುಸಹಸ್ರನಾಮವನ್ನು ನಿತ್ಯವೂ ಯಾವ ಸುಲಭ ಉಪಾಯದಿಂದ ಪಠಿಸುತ್ತಾರೆ? ಅದನ್ನು ಕೇಳಲು ಬಯಸುತ್ತೇನೆ.',
          },
        },
        { text: 'ईश्वर उवाच' },
        {
          n: 27,
          text: 'श्रीराम राम रामेति रमे रामे मनोरमे ।\nसहस्रनाम तत्तुल्यं रामनाम वरानने ॥',
          meaning: {
            en: 'Śiva: O lovely-faced one, I delight in Rāma, the delightful, chanting “Śrī Rāma, Rāma, Rāma”. The name of Rāma is equal to the thousand names.',
            kn: 'ಈಶ್ವರನು ಹೇಳಿದನು: ಸುಂದರ ಮುಖದವಳೇ, ‘ಶ್ರೀರಾಮ ರಾಮ ರಾಮ’ ಎನ್ನುತ್ತಾ ಮನೋಹರನಾದ ರಾಮನಲ್ಲಿ ನಾನು ರಮಿಸುತ್ತೇನೆ. ರಾಮನಾಮವು ಸಹಸ್ರನಾಮಕ್ಕೆ ಸಮಾನ.',
          },
        },
        { text: 'श्रीरामनाम वरानन ॐ नम इति ।' },
        { text: 'ब्रह्मोवाच' },
        {
          n: 28,
          text:
            'नमोऽस्त्वनन्ताय सहस्रमूर्तये\n' +
            'सहस्रपादाक्षिशिरोरुबाहवे ।\n' +
            'सहस्रनाम्ने पुरुषाय शाश्वते\n' +
            'सहस्रकोटीयुगधारिणे नमः ॥',
          meaning: {
            en: 'Brahmā: Salutations to the Infinite One of a thousand forms, with a thousand feet, eyes, heads, thighs and arms; to the eternal Person of a thousand names, who upholds thousands of crores of ages.',
            kn: 'ಬ್ರಹ್ಮನು ಹೇಳಿದನು: ಸಾವಿರ ರೂಪಗಳುಳ್ಳ, ಸಾವಿರ ಪಾದ, ಕಣ್ಣು, ತಲೆ, ತೊಡೆ, ಬಾಹುಗಳುಳ್ಳ ಅನಂತನಿಗೆ ನಮಸ್ಕಾರ. ಸಾವಿರ ನಾಮಗಳ, ಸಾವಿರ ಕೋಟಿ ಯುಗಗಳನ್ನು ಧರಿಸುವ ಶಾಶ್ವತ ಪುರುಷನಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        { text: 'सहस्रकोटीयुगधारिणे नम ॐ नम इति ।' },
        { text: 'सञ्जय उवाच' },
        {
          n: 29,
          text: 'यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः ।\nतत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम ॥',
          meaning: {
            en: 'Sañjaya: Wherever Kṛṣṇa, the Lord of yoga, and Arjuna, the archer, are present, there surely are fortune, victory, prosperity and lasting justice. This is my conviction.',
            kn: 'ಸಂಜಯನು ಹೇಳಿದನು: ಯೋಗೇಶ್ವರ ಶ್ರೀಕೃಷ್ಣನೂ ಧನುರ್ಧಾರಿ ಅರ್ಜುನನೂ ಎಲ್ಲಿರುವರೋ ಅಲ್ಲಿ ಸಂಪತ್ತು, ವಿಜಯ, ಐಶ್ವರ್ಯ, ಸ್ಥಿರವಾದ ನೀತಿ ಇರುತ್ತವೆ ಎಂದು ನನ್ನ ಮತ.',
          },
        },
        { text: 'श्रीभगवानुवाच' },
        {
          n: 30,
          text: 'अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते ।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ॥',
          meaning: {
            en: 'The Lord: Those who worship me thinking of no one else, ever united with me, I bring them what they lack and preserve what they have.',
            kn: 'ಭಗವಂತನು ಹೇಳಿದನು: ಬೇರೆ ಯಾರನ್ನೂ ಚಿಂತಿಸದೆ ನನ್ನನ್ನೇ ಉಪಾಸಿಸುವ, ಸದಾ ನನ್ನಲ್ಲಿ ತೊಡಗಿರುವವರ ಯೋಗಕ್ಷೇಮವನ್ನು ನಾನೇ ನೋಡಿಕೊಳ್ಳುತ್ತೇನೆ.',
          },
        },
        {
          n: 31,
          text: 'परित्राणाय साधूनां विनाशाय च दुष्कृताम् ।\nधर्मसंस्थापनार्थाय सम्भवामि युगे युगे ॥',
          meaning: {
            en: 'To protect the good, to destroy the wicked and to establish dharma firmly, I come into being in age after age.',
            kn: 'ಸಜ್ಜನರ ರಕ್ಷಣೆಗಾಗಿ, ದುಷ್ಟರ ವಿನಾಶಕ್ಕಾಗಿ, ಧರ್ಮದ ಸ್ಥಾಪನೆಗಾಗಿ ನಾನು ಯುಗಯುಗಗಳಲ್ಲಿ ಅವತರಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 32,
          text:
            'आर्ता विषण्णाः शिथिलाश्च भीताः\n' +
            'घोरेषु च व्याधिषु वर्तमानाः ।\n' +
            'सङ्कीर्त्य नारायणशब्दमात्रं\n' +
            'विमुक्तदुःखाः सुखिनो भवन्ति ॥',
          meaning: {
            en: 'Those who are afflicted, dejected, weak or afraid, or suffering from grave illness, become free of sorrow and happy merely by chanting the word “Nārāyaṇa”.',
            kn: 'ಸಂಕಟದಲ್ಲಿರುವವರು, ಖಿನ್ನರು, ದುರ್ಬಲರು, ಭಯಗೊಂಡವರು, ಘೋರ ರೋಗಗಳಿಂದ ನರಳುವವರು ‘ನಾರಾಯಣ’ ಎಂಬ ಶಬ್ದವನ್ನು ಉಚ್ಚರಿಸಿದ ಮಾತ್ರಕ್ಕೆ ದುಃಖಮುಕ್ತರಾಗಿ ಸುಖಿಗಳಾಗುತ್ತಾರೆ.',
          },
        },
        {
          n: 33,
          text:
            'कायेन वाचा मनसेन्द्रियैर्वा\n' +
            'बुद्ध्यात्मना वा प्रकृतेः स्वभावात् ।\n' +
            'करोमि यद्यत्सकलं परस्मै\n' +
            'नारायणायेति समर्पयामि ॥',
          meaning: {
            en: 'Whatever I do with body, speech, mind or senses, with intellect or heart, or from the impulse of my nature, all of it I offer to the Supreme, to Nārāyaṇa.',
            kn: 'ದೇಹ, ಮಾತು, ಮನಸ್ಸು, ಇಂದ್ರಿಯಗಳಿಂದಾಗಲಿ, ಬುದ್ಧಿ-ಅಂತಃಕರಣಗಳಿಂದಾಗಲಿ, ಸ್ವಭಾವದ ಪ್ರೇರಣೆಯಿಂದಾಗಲಿ ನಾನು ಮಾಡುವುದೆಲ್ಲವನ್ನೂ ಪರಮಾತ್ಮನಾದ ನಾರಾಯಣನಿಗೆ ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'यदक्षरपदभ्रष्टं मात्राहीनं तु यद्भवेत् ।\nतत्सर्वं क्षम्यतां देव नारायण नमोऽस्तु ते ॥',
          meaning: {
            en: 'Whatever has gone wrong in my recitation, a syllable or word dropped or a measure left short, forgive it all, O God. Salutations to you, Nārāyaṇa.',
            kn: 'ಪಠಣದಲ್ಲಿ ಅಕ್ಷರವಾಗಲಿ ಪದವಾಗಲಿ ತಪ್ಪಿದ್ದರೆ, ಮಾತ್ರೆ ಕಡಿಮೆಯಾಗಿದ್ದರೆ, ದೇವನೇ, ಅದೆಲ್ಲವನ್ನೂ ಕ್ಷಮಿಸು. ನಾರಾಯಣನೇ, ನಿನಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'विसर्गबिन्दुमात्राणि पदपादाक्षराणि च ।\nन्यूनानि चातिरिक्तानि क्षमस्व पुरुषोत्तम ॥',
          meaning: {
            en: 'Visargas, anusvāras and measures, words, quarter-verses and syllables, whether too few or too many, forgive them, O Supreme Person.',
            kn: 'ವಿಸರ್ಗ, ಬಿಂದು, ಮಾತ್ರೆಗಳು, ಪದ, ಪಾದ, ಅಕ್ಷರಗಳು ಕಡಿಮೆಯಾಗಿರಲಿ ಹೆಚ್ಚಾಗಿರಲಿ, ಪುರುಷೋತ್ತಮನೇ, ಕ್ಷಮಿಸು.',
          },
        },
        { text: 'सर्वं श्रीकृष्णार्पणमस्तु ॥' },
      ],
    },
  ],
};
