/**
 * Kṣīrābdhi kanyakaku: Annamācārya nīrājana saṅkīrtana (Telugu), in Telugu script.
 * Source (Nov 2026): A. annamacharya-lyrics.blogspot.com no. 32 (typed Telugu following the TTD edition). No second typed
 * copy was found for this song; the TTD OCR was not legible for it. Single witness: the text agrees with the song as
 * commonly printed in wedding and Lakshmi-pūjā books. Meanings are original.
 */
import type { Mantra } from '../types';

export const annamacharyaKsheerabdiKanyakaku: Mantra = {
  id: 'annamacharya-ksheerabdi-kanyakaku',
  title: 'క్షీరాబ్ధి కన్యకకు',
  titleEn: 'Ksheerabdi Kanyakaku (Annamacharya)',
  category: 'kirtana',
  order: 21,
  sourceScript: 'telugu',
  deity: 'Śrī Mahālakṣmī · Śrī Alamēlumaṅga',
  source: 'Tāḷḷapāka Annamācārya (Annamayya), nīrājana saṅkīrtana',
  summary: 'A song of lamp-waving (nirajanam) to Sri Mahalakshmi, daughter of the ocean of milk: to her lotus face, her bosom, her hair and hands, her feet and legs, her waist and navel, and finally to Alamelumanga, Sri Venkatesha\'s queen. It is sung at weddings and at Lakshmi worship.',
  summaryKn: 'ಕ್ಷೀರಸಾಗರದ ಮಗಳು ಶ್ರೀ ಮಹಾಲಕ್ಷ್ಮಿಗೆ ನೀರಾಜನ: ಕಮಲಮುಖ, ವಕ್ಷ, ಕೂದಲು, ಕೈ, ಪಾದ, ಕಾಲು, ನಡು, ನಾಭಿ ಎಲ್ಲಕ್ಕೂ ಬೆಳಗುವ ದೀಪ; ಕೊನೆಗೆ ಶ್ರೀ ವೆಂಕಟೇಶನ ಪಟ್ಟದರಸಿ ಅಲಮೇಲ್ಮಂಗೆಗೆ. ಮದುವೆಗಳಲ್ಲಿ ಮತ್ತು ಲಕ್ಷ್ಮೀ ಪೂಜೆಯಲ್ಲಿ ಹಾಡುತ್ತಾರೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'పల్లవి',
      titleEn: 'Pallavi',
      note: 'The refrain.',
      noteKn: 'ಪಲ್ಲವಿ (ಧ್ರುವಪದ).',
      verses: [
        {
          text: 'క్షీరాబ్ధి కన్యకకు శ్రీ మహాలక్ష్మికిని\nనీరజాలయకు నీరాజనం',
          meaning: { en: 'To the daughter of the ocean of milk, to Sri Mahalakshmi, who dwells in the lotus: the lamp of waving.', kn: 'ಕ್ಷೀರಸಾಗರದ ಕನ್ಯೆಗೆ, ಶ್ರೀ ಮಹಾಲಕ್ಷ್ಮಿಗೆ, ಕಮಲವಾಸಿನಿಗೆ ನೀರಾಜನ.' },
        },
      ],
    },
    {
      title: 'చరణాలు',
      titleEn: 'Charanams',
      note: 'The six stanzas of the lamp.',
      noteKn: 'ದೀಪದ ಆರು ಚರಣಗಳು.',
      verses: [
        {
          n: 1,
          text: 'జలజాక్షి మోమునకు జక్కవ కుచంబులకు\nనెలకొన్న కప్పురపు నీరాజనం',
          meaning: { en: 'To the lotus-eyed Lady\'s face and her breast like chakravaka birds: the camphor lamp placed in waving.', kn: 'ಕಮಲಾಕ್ಷಿಯ ಮುಖಕ್ಕೆ, ಚಕ್ರವಾಕ ಪಕ್ಷಿಗಳಂತಿರುವ ವಕ್ಷಕ್ಕೆ, ಕರ್ಪೂರದ ನೀರಾಜನ.' },
        },
        {
          n: 2,
          text: 'అలివేణి తురుమునకు హస్తకమలంబులకు\nనిలువుమాణిక్యముల నీరాజనం',
          meaning: { en: 'To the bee-dark braid and the lotus hands: the lamp of rubies standing.', kn: 'ದುಂಬಿಯ ಕೂದಲ ಜಡೆಗೂ ಕಮಲದ ಕೈಗಳಿಗೂ ನಿಲ್ಲುವ ಮಾಣಿಕ್ಯಗಳ ನೀರಾಜನ.' },
        },
        {
          n: 3,
          text: 'చరణ కిసలయములకు సకియరంభోరులకు\nనిరతమగు ముత్తేల నీరాజనం',
          meaning: { en: 'To the feet like tender leaves and the thighs like plantain stems of the Lady: the lamp of pearls, unfailing.', kn: 'ಚಿಗುರಿನಂತಹ ಪಾದಗಳಿಗೂ ಬಾಳೆದಿಂಡಿನಂತಹ ತೊಡೆಗಳಿಗೂ ನಿರಂತರ ಮುತ್ತಿನ ನೀರಾಜನ.' },
        },
        {
          n: 4,
          text: 'అరిది జఘనంబునకు అతివనిజనాభికిని\nనిరతి నానావర్ణ నీరాజనం',
          meaning: { en: 'To the rare hips and the lady\'s own navel: the lamp of many colours with delight.', kn: 'ಅಪೂರ್ವ ನಿತಂಬಕ್ಕೆ, ಆ ಸ್ತ್ರೀಯ ನಾಭಿಗೆ, ಆಸಕ್ತಿಯಿಂದ ನಾನಾ ವರ್ಣದ ನೀರಾಜನ.' },
        },
        {
          n: 5,
          text: 'పగటు శ్రీవేంకటేశు పట్టపురాణియై\nనెగడు సతికళలకును నీరాజనం',
          meaning: { en: 'To the arts of the Lady who is the crowned queen of Sri Venkatesha and shines all the day: the lamp of waving.', kn: 'ಹಗಲೆಲ್ಲ ಶ್ರೀ ವೆಂಕಟೇಶನ ಪಟ್ಟದರಸಿಯಾಗಿ ಮೆರೆಯುವ ಆ ಸತಿಯ ಕಲಾಲಾವಣ್ಯಕ್ಕೆ ನೀರಾಜನ.' },
        },
        {
          n: 6,
          text: 'జగతి నలమేల్మంగ చక్కదనములకెల్ల\nనిగుడు నిజ శోభనపు నీరాజనం',
          meaning: { en: 'To all the beauties of Alamelumanga in the world: the lamp of waving, of true auspiciousness.', kn: 'ಜಗತ್ತಿನಲ್ಲಿ ಅಲಮೇಲ್ಮಂಗೆಯ ಎಲ್ಲ ಸೌಂದರ್ಯಗಳಿಗೂ ನಿಜವಾದ ಮಂಗಳದ ನೀರಾಜನ.' },
        },
      ],
    },
  ],
};
