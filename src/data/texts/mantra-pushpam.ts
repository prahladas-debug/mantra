/**
 * Mantra Puṣpam. Collated (Nov 2026) against stotranidhi.com (Devanagari) and
 * hindupad.com (Kannada); the Mahānārāyaṇa passages also against the
 * sanskritdocuments-derived text in the vishvAsa repository, and तद्विष्णोः
 * against Ṛgveda 1.22.20–21. Not yet checked against a printed edition.
 */
import type { Mantra } from '../types';

export const mantraPushpam: Mantra = {
  id: 'mantra-pushpam',
  title: 'मन्त्रपुष्पम्',
  titleEn: 'Mantra Pushpam',
  category: 'vedic',
  deity: 'Sarva-devatā (offered to the deity being worshipped)',
  source: 'Taittirīya Āraṇyaka 1.22 and 1.31; Mahānārāyaṇa Upaniṣad',
  summary:
    'The "flower of mantras" chanted at the close of pūjā while offering flowers. It teaches that water is the foundation of all things, and that one who knows the support of the waters becomes established, followed by the prayer to Kubera, king of kings, and invocations of Brahman and Nārāyaṇa.',
  summaryKn:
    'ಪೂಜೆಯ ಕೊನೆಯಲ್ಲಿ ಪುಷ್ಪಾರ್ಪಣೆ ಮಾಡುವಾಗ ಪಠಿಸುವ “ಮಂತ್ರಗಳ ಹೂವು”. ನೀರೇ ಎಲ್ಲಕ್ಕೂ ಆಧಾರ, ನೀರಿನ ಆಶ್ರಯವನ್ನು ಅರಿತವನು ದೃಢವಾದ ನೆಲೆಯನ್ನು ಪಡೆಯುತ್ತಾನೆ ಎಂದು ಇದು ಬೋಧಿಸುತ್ತದೆ. ಬಳಿಕ ರಾಜಾಧಿರಾಜನಾದ ಕುಬೇರನ ಪ್ರಾರ್ಥನೆ, ಬ್ರಹ್ಮ ಮತ್ತು ನಾರಾಯಣನ ಸ್ತುತಿಗಳು ಬರುತ್ತವೆ.',
  difficulty: 'medium',
  completeness: 'complete',
  contentNote:
    'Follows the sequence common in South India: योऽपां पुष्पं वेद…, the Kubera mantra, ॐ तद्ब्रह्म… and अन्तश्चरति भूतेषु…, ईशानः सर्वविद्यानाम्…, तद्विष्णोः परमं पदम्…, ऋतं सत्यं परं ब्रह्म… and the Nārāyaṇa Gāyatrī. Some traditions also open with धाता पुरस्तात्… and the Nārāyaṇa Sūktam, or add further Gāyatrīs; the Maharashtrian mantrapuṣpāñjali (ॐ स्वस्ति साम्राज्यं…) is a different text and is not included.',
  sections: [
    {
      title: 'योऽपां पुष्पं वेद',
      titleEn: 'The Flower of the Waters (Taittirīya Āraṇyaka 1.22)',
      verses: [
        {
          n: 1,
          text: 'योऽपां पुष्पं वेद । पुष्पवान्प्रजावान्पशुमान्भवति ।\nचन्द्रमा वा अपां पुष्पम् । पुष्पवान्प्रजावान्पशुमान्भवति ।\nय एवं वेद । योऽपामायतनं वेद । आयतनवान्भवति ॥',
          meaning: {
            en: 'One who knows the flower of the waters becomes rich in flowers, offspring and cattle. The moon is the flower of the waters; one who knows this becomes rich in flowers, offspring and cattle. One who knows the support of the waters gains a firm support.',
            kn: 'ನೀರಿನ ಹೂವನ್ನು ಅರಿತವನು ಹೂವು, ಸಂತಾನ ಮತ್ತು ಪಶುಸಂಪತ್ತುಗಳನ್ನು ಪಡೆಯುತ್ತಾನೆ. ಚಂದ್ರನೇ ನೀರಿನ ಹೂವು; ಇದನ್ನು ಹೀಗೆ ಅರಿತವನು ಹೂವು, ಸಂತಾನ, ಪಶುಸಂಪತ್ತುಗಳನ್ನು ಪಡೆಯುತ್ತಾನೆ. ನೀರಿನ ಆಶ್ರಯವನ್ನು ಅರಿತವನು ತಾನೂ ದೃಢವಾದ ಆಶ್ರಯವನ್ನು ಪಡೆಯುತ್ತಾನೆ.',
          },
        },
        {
          n: 2,
          text: 'अग्निर्वा अपामायतनम् । आयतनवान्भवति ।\nयोऽग्नेरायतनं वेद । आयतनवान्भवति ।\nआपो वा अग्नेरायतनम् । आयतनवान्भवति ।\nय एवं वेद । योऽपामायतनं वेद । आयतनवान्भवति ॥',
          meaning: {
            en: 'Fire is the support of the waters, and one who knows the support of fire gains a firm support; the waters in turn are the support of fire. One who knows this, who knows the support of the waters, becomes well established.',
            kn: 'ಅಗ್ನಿಯೇ ನೀರಿನ ಆಶ್ರಯ; ಅಗ್ನಿಯ ಆಶ್ರಯವನ್ನು ಅರಿತವನು ದೃಢವಾದ ಆಶ್ರಯವನ್ನು ಪಡೆಯುತ್ತಾನೆ. ನೀರೇ ಅಗ್ನಿಗೆ ಆಶ್ರಯ. ಇದನ್ನು ಹೀಗೆ ಅರಿತವನು, ನೀರಿನ ಆಶ್ರಯವನ್ನು ಅರಿತವನು ದೃಢವಾದ ನೆಲೆಯನ್ನು ಪಡೆಯುತ್ತಾನೆ.',
          },
        },
        {
          n: 3,
          text: 'वायुर्वा अपामायतनम् । आयतनवान्भवति ।\nयो वायोरायतनं वेद । आयतनवान्भवति ।\nआपो वै वायोरायतनम् । आयतनवान्भवति ।\nय एवं वेद । योऽपामायतनं वेद । आयतनवान्भवति ॥',
          meaning: {
            en: 'The wind is the support of the waters, and one who knows the support of the wind gains a firm support; the waters in turn are the support of the wind. One who knows this, who knows the support of the waters, becomes well established.',
            kn: 'ವಾಯುವೇ ನೀರಿನ ಆಶ್ರಯ; ವಾಯುವಿನ ಆಶ್ರಯವನ್ನು ಅರಿತವನು ದೃಢವಾದ ಆಶ್ರಯವನ್ನು ಪಡೆಯುತ್ತಾನೆ. ನೀರೇ ವಾಯುವಿಗೆ ಆಶ್ರಯ. ಇದನ್ನು ಹೀಗೆ ಅರಿತವನು, ನೀರಿನ ಆಶ್ರಯವನ್ನು ಅರಿತವನು ದೃಢವಾದ ನೆಲೆಯನ್ನು ಪಡೆಯುತ್ತಾನೆ.',
          },
        },
        {
          n: 4,
          text: 'असौ वै तपन्नपामायतनम् । आयतनवान्भवति ।\nयोऽमुष्य तपत आयतनं वेद । आयतनवान्भवति ।\nआपो वा अमुष्य तपत आयतनम् । आयतनवान्भवति ।\nय एवं वेद । योऽपामायतनं वेद । आयतनवान्भवति ॥',
          meaning: {
            en: 'The blazing sun yonder is the support of the waters, and one who knows the support of the sun gains a firm support; the waters in turn are the support of the sun. One who knows this, who knows the support of the waters, becomes well established.',
            kn: 'ಆಕಾಶದಲ್ಲಿ ಬೆಳಗುವ ಸೂರ್ಯನೇ ನೀರಿನ ಆಶ್ರಯ; ಸೂರ್ಯನ ಆಶ್ರಯವನ್ನು ಅರಿತವನು ದೃಢವಾದ ಆಶ್ರಯವನ್ನು ಪಡೆಯುತ್ತಾನೆ. ನೀರೇ ಸೂರ್ಯನಿಗೆ ಆಶ್ರಯ. ಇದನ್ನು ಹೀಗೆ ಅರಿತವನು, ನೀರಿನ ಆಶ್ರಯವನ್ನು ಅರಿತವನು ದೃಢವಾದ ನೆಲೆಯನ್ನು ಪಡೆಯುತ್ತಾನೆ.',
          },
        },
        {
          n: 5,
          text: 'चन्द्रमा वा अपामायतनम् । आयतनवान्भवति ।\nयश्चन्द्रमस आयतनं वेद । आयतनवान्भवति ।\nआपो वै चन्द्रमस आयतनम् । आयतनवान्भवति ।\nय एवं वेद । योऽपामायतनं वेद । आयतनवान्भवति ॥',
          meaning: {
            en: 'The moon is the support of the waters, and one who knows the support of the moon gains a firm support; the waters in turn are the support of the moon. One who knows this, who knows the support of the waters, becomes well established.',
            kn: 'ಚಂದ್ರನೇ ನೀರಿನ ಆಶ್ರಯ; ಚಂದ್ರನ ಆಶ್ರಯವನ್ನು ಅರಿತವನು ದೃಢವಾದ ಆಶ್ರಯವನ್ನು ಪಡೆಯುತ್ತಾನೆ. ನೀರೇ ಚಂದ್ರನಿಗೆ ಆಶ್ರಯ. ಇದನ್ನು ಹೀಗೆ ಅರಿತವನು, ನೀರಿನ ಆಶ್ರಯವನ್ನು ಅರಿತವನು ದೃಢವಾದ ನೆಲೆಯನ್ನು ಪಡೆಯುತ್ತಾನೆ.',
          },
        },
        {
          n: 6,
          text: 'नक्षत्राणि वा अपामायतनम् । आयतनवान्भवति ।\nयो नक्षत्राणामायतनं वेद । आयतनवान्भवति ।\nआपो वै नक्षत्राणामायतनम् । आयतनवान्भवति ।\nय एवं वेद । योऽपामायतनं वेद । आयतनवान्भवति ॥',
          meaning: {
            en: 'The stars are the support of the waters, and one who knows the support of the stars gains a firm support; the waters in turn are the support of the stars. One who knows this, who knows the support of the waters, becomes well established.',
            kn: 'ನಕ್ಷತ್ರಗಳೇ ನೀರಿನ ಆಶ್ರಯ; ನಕ್ಷತ್ರಗಳ ಆಶ್ರಯವನ್ನು ಅರಿತವನು ದೃಢವಾದ ಆಶ್ರಯವನ್ನು ಪಡೆಯುತ್ತಾನೆ. ನೀರೇ ನಕ್ಷತ್ರಗಳಿಗೆ ಆಶ್ರಯ. ಇದನ್ನು ಹೀಗೆ ಅರಿತವನು, ನೀರಿನ ಆಶ್ರಯವನ್ನು ಅರಿತವನು ದೃಢವಾದ ನೆಲೆಯನ್ನು ಪಡೆಯುತ್ತಾನೆ.',
          },
        },
        {
          n: 7,
          text: 'पर्जन्यो वा अपामायतनम् । आयतनवान्भवति ।\nयः पर्जन्यस्यायतनं वेद । आयतनवान्भवति ।\nआपो वै पर्जन्यस्यायतनम् । आयतनवान्भवति ।\nय एवं वेद । योऽपामायतनं वेद । आयतनवान्भवति ॥',
          meaning: {
            en: 'The rain-cloud is the support of the waters, and one who knows the support of the rain-cloud gains a firm support; the waters in turn are the support of the rain-cloud. One who knows this, who knows the support of the waters, becomes well established.',
            kn: 'ಮಳೆಮೋಡವೇ (ಪರ್ಜನ್ಯ) ನೀರಿನ ಆಶ್ರಯ; ಮಳೆಮೋಡದ ಆಶ್ರಯವನ್ನು ಅರಿತವನು ದೃಢವಾದ ಆಶ್ರಯವನ್ನು ಪಡೆಯುತ್ತಾನೆ. ನೀರೇ ಮಳೆಮೋಡಕ್ಕೆ ಆಶ್ರಯ. ಇದನ್ನು ಹೀಗೆ ಅರಿತವನು, ನೀರಿನ ಆಶ್ರಯವನ್ನು ಅರಿತವನು ದೃಢವಾದ ನೆಲೆಯನ್ನು ಪಡೆಯುತ್ತಾನೆ.',
          },
        },
        {
          n: 8,
          text: 'संवत्सरो वा अपामायतनम् । आयतनवान्भवति ।\nयः संवत्सरस्यायतनं वेद । आयतनवान्भवति ।\nआपो वै संवत्सरस्यायतनम् । आयतनवान्भवति ।\nय एवं वेद । योऽप्सु नावं प्रतिष्ठितां वेद । प्रत्येव तिष्ठति ॥',
          meaning: {
            en: 'The year is the support of the waters, and one who knows the support of the year gains a firm support; the waters in turn are the support of the year. One who knows this, who knows the boat that rests firmly upon the waters, stands firmly established.',
            kn: 'ಸಂವತ್ಸರವೇ (ಕಾಲಚಕ್ರ) ನೀರಿನ ಆಶ್ರಯ; ಸಂವತ್ಸರದ ಆಶ್ರಯವನ್ನು ಅರಿತವನು ದೃಢವಾದ ಆಶ್ರಯವನ್ನು ಪಡೆಯುತ್ತಾನೆ. ನೀರೇ ಸಂವತ್ಸರಕ್ಕೆ ಆಶ್ರಯ. ಇದನ್ನು ಹೀಗೆ ಅರಿತವನು, ನೀರಿನ ಮೇಲೆ ಸ್ಥಿರವಾಗಿ ನಿಂತಿರುವ ದೋಣಿಯನ್ನು ಅರಿತವನು ತಾನೂ ಸ್ಥಿರವಾದ ನೆಲೆಯನ್ನು ಪಡೆಯುತ್ತಾನೆ.',
          },
        },
      ],
    },
    {
      title: 'कुबेरमन्त्रः',
      titleEn: 'Prayer to Kubera (Taittirīya Āraṇyaka 1.31)',
      verses: [
        {
          text: 'ॐ राजाधिराजाय प्रसह्यसाहिने । नमो वयं वैश्रवणाय कुर्महे ।\nस मे कामान्कामकामाय मह्यम् । कामेश्वरो वैश्रवणो ददातु ।\nकुबेराय वैश्रवणाय । महाराजाय नमः ॥',
          meaning: {
            en: 'We bow to Vaiśravaṇa, king of kings, who prevails by his might. May he, the lord of desires, grant my wishes to me who long for them. Salutations to Kubera Vaiśravaṇa, the great king.',
            kn: 'ರಾಜಾಧಿರಾಜನೂ, ತನ್ನ ಶಕ್ತಿಯಿಂದ ಎಲ್ಲರನ್ನೂ ಗೆಲ್ಲುವವನೂ ಆದ ವೈಶ್ರವಣನಿಗೆ ನಾವು ನಮಸ್ಕರಿಸುತ್ತೇವೆ. ಕಾಮೇಶ್ವರನಾದ ಆ ವೈಶ್ರವಣನು ಬಯಕೆಯುಳ್ಳ ನನಗೆ ನನ್ನ ಇಷ್ಟಾರ್ಥಗಳನ್ನು ಕರುಣಿಸಲಿ. ಮಹಾರಾಜನಾದ ವೈಶ್ರವಣ ಕುಬೇರನಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      titleEn: 'Oṃ Tad Brahma (Mahānārāyaṇa Upaniṣad)',
      verses: [
        {
          text: 'ॐ तद्ब्रह्म । ॐ तद्वायुः । ॐ तदात्मा ।\nॐ तत्सत्यम् । ॐ तत्सर्वम् । ॐ तत्पुरोर्नमः ॥',
          meaning: {
            en: 'Om. That is Brahman; That is Vāyu; That is the Self; That is Truth; That is everything. Salutations to That, the Person who dwells in the city of the body.',
            kn: 'ಓಂ. ಅದೇ ಬ್ರಹ್ಮ; ಅದೇ ವಾಯು; ಅದೇ ಆತ್ಮ; ಅದೇ ಸತ್ಯ; ಅದೇ ಸರ್ವಸ್ವ. ದೇಹವೆಂಬ ಪುರದಲ್ಲಿ ನೆಲೆಸಿರುವ ಆ ಪರಮಪುರುಷನಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'अन्तश्चरति भूतेषु गुहायां विश्वमूर्तिषु ।\nत्वं यज्ञस्त्वं वषट्कारस्त्वमिन्द्रस्त्वं रुद्रस्त्वं विष्णुस्त्वं ब्रह्म त्वं प्रजापतिः ।\nत्वं तदाप आपो ज्योती रसोऽमृतं ब्रह्म भूर्भुवस्सुवरोम् ॥',
          meaning: {
            en: 'You move within all beings, in the secret cave of the heart and in every form of the universe. You are the sacrifice and the sacred call Vaṣaṭ; You are Indra, Rudra, Viṣṇu, Brahmā and Prajāpati. You are the waters, the light, the essence, the nectar and Brahman; You are the worlds Bhūḥ, Bhuvaḥ and Suvaḥ, and You are Om.',
            kn: 'ಎಲ್ಲ ಜೀವಿಗಳ ಹೃದಯಗುಹೆಯಲ್ಲಿ, ವಿಶ್ವದ ಸಕಲ ರೂಪಗಳಲ್ಲಿ ನೀನು ಅಂತರ್ಯಾಮಿಯಾಗಿ ಸಂಚರಿಸುತ್ತೀಯೆ. ನೀನೇ ಯಜ್ಞ, ನೀನೇ ವಷಟ್ಕಾರ; ನೀನೇ ಇಂದ್ರ, ನೀನೇ ರುದ್ರ, ನೀನೇ ವಿಷ್ಣು, ನೀನೇ ಬ್ರಹ್ಮ, ನೀನೇ ಪ್ರಜಾಪತಿ. ನೀನೇ ಜಲ, ಜ್ಯೋತಿ, ರಸ, ಅಮೃತ ಮತ್ತು ಬ್ರಹ್ಮ; ಭೂಃ ಭುವಃ ಸುವಃ ಎಂಬ ಲೋಕಗಳೂ ಓಂಕಾರವೂ ನೀನೇ.',
          },
        },
      ],
    },
    {
      titleEn: 'Īśānaḥ (Mahānārāyaṇa Upaniṣad)',
      verses: [
        {
          text: 'ईशानः सर्वविद्यानामीश्वरः सर्वभूतानां\nब्रह्माधिपतिर्ब्रह्मणोऽधिपतिर्ब्रह्मा शिवो मे अस्तु सदाशिवोम् ॥',
          meaning: {
            en: 'He is the ruler of all knowledge and the lord of all beings, the master of the Veda and the overlord of Brahmā. May that Brahman be gracious to me, ever auspicious. Om.',
            kn: 'ಸಕಲ ವಿದ್ಯೆಗಳ ಒಡೆಯನೂ, ಸಮಸ್ತ ಜೀವಿಗಳ ಈಶ್ವರನೂ, ವೇದಗಳ ಅಧಿಪತಿಯೂ, ಬ್ರಹ್ಮದೇವರಿಗೂ ಅಧಿಪತಿಯೂ ಆದ ಆ ಪರಬ್ರಹ್ಮನು ನನಗೆ ಮಂಗಳಕರನಾಗಲಿ; ಸದಾ ಮಂಗಳಕರನಾಗಿರಲಿ. ಓಂ.',
          },
        },
      ],
    },
    {
      titleEn: 'Tad Viṣṇoḥ Paramaṃ Padam (Ṛgveda 1.22.20–21)',
      verses: [
        {
          text: 'तद्विष्णोः परमं पदं सदा पश्यन्ति सूरयः ।\nदिवीव चक्षुराततम् ।\nतद्विप्रासो विपन्यवो जागृवांसस्समिन्धते ।\nविष्णोर्यत्परमं पदम् ॥',
          meaning: {
            en: 'The wise ever behold that supreme abode of Viṣṇu, spread out like an eye in the sky. Wakeful sages, singing His praise, make that supreme abode of Viṣṇu shine forth.',
            kn: 'ಆಕಾಶದಲ್ಲಿ ಹರಡಿದ ಕಣ್ಣಿನಂತೆ ಬೆಳಗುವ ಶ್ರೀವಿಷ್ಣುವಿನ ಆ ಪರಮಪದವನ್ನು ಜ್ಞಾನಿಗಳು ಸದಾ ಕಾಣುತ್ತಾರೆ. ಎಚ್ಚರದಿಂದಿರುವ, ಸ್ತುತಿಸುವ ಜ್ಞಾನಿಗಳು ವಿಷ್ಣುವಿನ ಆ ಪರಮಪದವನ್ನು ಬೆಳಗಿಸುತ್ತಾರೆ.',
          },
        },
      ],
    },
    {
      titleEn: 'Ṛtaṃ Satyam (Mahānārāyaṇa Upaniṣad)',
      verses: [
        {
          text: 'ऋतं सत्यं परं ब्रह्म पुरुषं कृष्णपिङ्गलम् ।\nऊर्ध्वरेतं विरूपाक्षं विश्वरूपाय वै नमो नमः ॥',
          meaning: {
            en: 'Salutations again and again to Him whose form is the universe: who is cosmic order and truth, the supreme Brahman, the Person of dark and golden hue, perfectly self-restrained, with wondrous eyes.',
            kn: 'ಋತವೂ ಸತ್ಯವೂ ಆದವನು, ಪರಬ್ರಹ್ಮನು, ಕಪ್ಪು ಮತ್ತು ಹೊಂಬಣ್ಣದ ಕಾಂತಿಯುಳ್ಳ ಪುರುಷನು, ಪರಿಪೂರ್ಣ ಸಂಯಮಿಯು, ಅಸಾಧಾರಣ ಕಣ್ಣುಗಳುಳ್ಳವನು ಆದ ಆ ವಿಶ್ವರೂಪನಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'नारायणगायत्री',
      titleEn: 'Nārāyaṇa Gāyatrī',
      note: 'Offer flowers (puṣpāñjali) at the feet of the deity at the conclusion.',
      verses: [
        {
          text: 'ॐ नारायणाय विद्महे वासुदेवाय धीमहि ।\nतन्नो विष्णुः प्रचोदयात् ॥',
          meaning: {
            en: 'We know Nārāyaṇa; we meditate on Vāsudeva. May that Viṣṇu inspire and guide our minds.',
            kn: 'ನಾರಾಯಣನನ್ನು ನಾವು ಅರಿಯುತ್ತೇವೆ; ವಾಸುದೇವನನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ. ಆ ಮಹಾವಿಷ್ಣುವು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಸನ್ಮಾರ್ಗದಲ್ಲಿ ಪ್ರೇರೇಪಿಸಲಿ.',
          },
        },
      ],
    },
  ],
};
