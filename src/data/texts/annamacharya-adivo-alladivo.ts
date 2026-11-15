/**
 * Adivō alladivō śrīharivāsamu: Annamācārya saṅkīrtana (Telugu), in Telugu script.
 * Sources (Nov 2026): A. annamacharya-lyrics.blogspot.com no. 24 (typed Telugu following the TTD edition); K. karnatik.com
 * c1577 (Roman, typed independently; raga Madhyamavati). The two agree in wording in all four stanzas. Meanings are original.
 */
import type { Mantra } from '../types';

export const annamacharyaAdivoAlladivo: Mantra = {
  id: 'annamacharya-adivo-alladivo',
  title: 'అదివో అల్లదివో శ్రీహరివాసము',
  titleEn: 'Adivo Alladivo Sri Harivasamu (Annamacharya)',
  category: 'kirtana',
  order: 18,
  sourceScript: 'telugu',
  deity: 'Śrī Veṅkaṭeśvara',
  source: 'Tāḷḷapāka Annamācārya (Annamayya), saṅkīrtana',
  summary: 'A song of arrival at Tirumala: "There, there, is the abode of Sri Hari", the hill formed by the hoods of the thousand-headed Shesha, the home of the gods, the treasure kept in the earth, the peak that gives liberation and all prosperity. Sung in raga Madhyamavati.',
  summaryKn: 'ತಿರುಮಲೆಗೆ ಬಂದಾಗ ಹಾಡುವ ಹಾಡು: “ಅಲ್ಲಿದೆ ಅಲ್ಲಿದೆ ಶ್ರೀಹರಿಯ ವಾಸ”, ಸಾವಿರ ತಲೆಯ ಶೇಷನ ಹೆಡೆಗಳಿಂದಾದ ಬೆಟ್ಟ, ದೇವತೆಗಳ ನಿಜವಾಸ, ನೆಲದಲ್ಲಿರುವ ಸಂಪತ್ತು, ಕೈವಲ್ಯ ಮತ್ತು ಎಲ್ಲ ಸಂಪತ್ತನ್ನು ನೀಡುವ ಶಿಖರ. ಮಧ್ಯಮಾವತಿ ರಾಗದಲ್ಲಿ ಹಾಡುತ್ತಾರೆ.',
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
          text: 'అదివో అల్లదివో శ్రీహరివాసము\nపదివేల శేషుల పడగలమయము',
          meaning: { en: 'There, look there: the abode of Sri Hari, made of the hoods of ten thousand Sheshas.', kn: 'ಅಲ್ಲಿದೆ ನೋಡಿ ಅಲ್ಲಿದೆ ಶ್ರೀಹರಿಯ ವಾಸಸ್ಥಾನ, ಹತ್ತು ಸಾವಿರ ಶೇಷರ ಹೆಡೆಗಳಿಂದಾದದ್ದು.' },
        },
      ],
    },
    {
      title: 'చరణాలు',
      titleEn: 'Charanams',
      note: 'The three stanzas.',
      noteKn: 'ಮೂರು ಚರಣಗಳು.',
      verses: [
        {
          n: 1,
          text: 'అదె వేంకటాచల మఖిలోన్నతము\nఅదివో బ్రహ్మాదుల కపురూపము\nఅదివో నిత్యనివాస మఖిలమునులకు\nఅదె చూడుడదె మ్రొక్కుడానందమయము',
          meaning: { en: 'That is the Venkata mountain, the highest of all; the wonder even for Brahma and the gods; the eternal home for all sages: see it, bow to it, full of bliss.', kn: 'ಅದೇ ವೆಂಕಟಾಚಲ, ಎಲ್ಲಕ್ಕಿಂತ ಎತ್ತರ; ಬ್ರಹ್ಮಾದಿಗಳಿಗೂ ಅಪೂರ್ವ; ಎಲ್ಲ ಮುನಿಗಳಿಗೂ ನಿತ್ಯ ವಾಸಸ್ಥಾನ; ಅದನ್ನೇ ನೋಡಿ, ಅದಕ್ಕೆ ನಮಸ್ಕರಿಸಿ, ಆನಂದಮಯ.' },
        },
        {
          n: 2,
          text: 'చెంగట నల్లదివో శేషాచలము\nనింగి నున్నదేవతల నిజవాసము\nముంగిట నల్లదివో మూలనున్నధనము\nబంగారు శిఖరాల బహు బ్రహ్మమయము',
          meaning: { en: 'Near it is the Sheshachala; the true home of the gods who live in the sky; at the front, the treasure kept in a corner; with golden peaks, filled with much of Brahman.', kn: 'ಹತ್ತಿರದಲ್ಲಿ ಶೇಷಾಚಲ; ಆಕಾಶದ ದೇವತೆಗಳ ನಿಜವಾಸ; ಮುಂದಿನಲ್ಲಿ ಮೂಲೆಯಲ್ಲಿರುವ ಸಂಪತ್ತು; ಬಂಗಾರದ ಶಿಖರಗಳ ಬ್ರಹ್ಮಮಯ.' },
        },
        {
          n: 3,
          text: 'కైవల్యపదము వేంకటనగమదివో\nశ్రీ వేంకటపతికి సిరులైనవి\nభావింప సకలసంపదరూపమదివో\nపావనములకెల్ల పావనమయము',
          meaning: { en: 'That Venkata mountain is the seat of liberation; the riches of Sri Venkatapati; if you think of it, it is the form of all prosperity; the purest of all pure things.', kn: 'ಆ ವೆಂಕಟಗಿರಿಯೇ ಕೈವಲ್ಯಪದ; ಶ್ರೀ ವೆಂಕಟಪತಿಯ ಸಿರಿಗಳು; ಯೋಚಿಸಿದರೆ ಸಕಲ ಸಂಪತ್ತಿನ ರೂಪ; ಎಲ್ಲ ಪಾವನಗಳಿಗೂ ಪಾವನ.' },
        },
      ],
    },
  ],
};
