/**
 * Cēri yaśōdaku śiśuvitaḍu: Annamācārya saṅkīrtana (Telugu), in Telugu script.
 * Sources (Nov 2026): A. annamacharya-lyrics.blogspot.com no. 14 (typed Telugu following the TTD edition);
 * K. karnatik.com c3155 (Roman, typed independently; raga Mohanam). The two agree in every line
 * except spelling and "పొలసిన" (A) / "tolasina" (K) in the last stanza, where A is kept. Meanings are original.
 */
import type { Mantra } from '../types';

export const annamacharyaCheriYasodaku: Mantra = {
  id: 'annamacharya-cheri-yasodaku',
  title: 'చేరి యశోదకు శిశువితడు',
  titleEn: 'Cheri Yasodaku Shishuvitadu (Annamacharya)',
  category: 'kirtana',
  order: 12,
  sourceScript: 'telugu',
  deity: 'Śrī Veṅkaṭeśvara',
  source: 'Tāḷḷapāka Annamācārya (Annamayya), saṅkīrtana',
  summary: 'The child at Yashoda\'s side is the father of Brahma and Lord of the world: looking at him makes the sun and moon shine, his breath is the Vedas and the ocean. In the end he is revealed as Sri Venkatesa, the refuge of those who surrender. Sung in raga Mohanam.',
  summaryKn: 'ಯಶೋದೆಯ ಬಳಿಯ ಈ ಮಗುವೇ ಬ್ರಹ್ಮನ ತಂದೆ, ಜಗದೊಡೆಯ; ಅವನ ನೋಟದಿಂದ ಸೂರ್ಯಚಂದ್ರರು ಬೆಳಗುತ್ತಾರೆ, ಅವನ ಉಸಿರು ವೇದಗಳೂ ಸಮುದ್ರವೂ. ಕೊನೆಗೆ ಅವನು ಶರಣಾಗತರ ಆಶ್ರಯವಾದ ಶ್ರೀ ವೆಂಕಟೇಶನೆಂದು ತಿಳಿಯುತ್ತದೆ. ಮೋಹನ ರಾಗದಲ್ಲಿ ಹಾಡುತ್ತಾರೆ.',
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
          text: 'చేరి యశోదకు శిశువితడు\nధారుణి బ్రహ్మకు తండ్రియు నితడు',
          meaning: { en: 'This child, who has come to Yashoda\'s side, is also the father of Brahma of the world.', kn: 'ಯಶೋದೆಯ ಬಳಿ ಬಂದ ಈ ಮಗುವೇ ಭೂಮಿಯ ಬ್ರಹ್ಮನ ತಂದೆಯೂ ಆಗಿದ್ದಾನೆ.' },
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
          text: 'సొలసి జూచినను సూర్యచంద్రులను\nలలివెదజల్లెడు లక్షణుడు\nనిలిచిన నిలువున నిఖిల దేవతల\nకలిగించు సురల గనివో యితడు',
          meaning: { en: 'When he looks at them with a glance, he is the one who sheds charm on the sun and moon; wherever he stands, he is the one from whom all gods arise: see, he is the source of the gods.', kn: 'ಅವನು ದೃಷ್ಟಿ ಹರಿಸಿದರೆ ಸೂರ್ಯಚಂದ್ರರಿಗೆ ಸೌಂದರ್ಯ ತುಂಬುವ ಲಕ್ಷಣವಂತ; ನಿಂತಲ್ಲೇ ಸಕಲ ದೇವತೆಗಳನ್ನೂ ಹುಟ್ಟಿಸುವ ದೇವತೆಗಳ ಮೂಲ ಇವನೇ ನೋಡಿ.' },
        },
        {
          n: 2,
          text: 'మాటలాడినను మరియజాండములు\nకోటులు వొడమెటి గుణరాశి\nనీటుగ నూర్పుల నిఖిల వేదములు\nచాటువ నూరెటి సముద్రుడితడు',
          meaning: { en: 'When he speaks, crores of worlds arise: he is the treasury of qualities. With his orderly breaths all the Vedas, and the sea with its wonders, flow out from him.', kn: 'ಅವನು ಮಾತಾಡಿದರೆ ಕೋಟಿ ಕೋಟಿ ಬ್ರಹ್ಮಾಂಡಗಳು ಹುಟ್ಟುವ ಗುಣನಿಧಿ; ಅವನ ಕ್ರಮಬದ್ಧ ಉಸಿರುಗಳಿಂದ ಸಕಲ ವೇದಗಳು ಮತ್ತು ವಿಸ್ಮಯಗಳ ಸಮುದ್ರ ಹೊಮ್ಮುತ್ತವೆ.' },
        },
        {
          n: 3,
          text: 'ముంగిట పొలసిన మోహన మాత్మల\nపొంగించే ఘన పురుషుడు\nసంగతి మావంటి శరణాగతులకు\nఅంగము శ్రీ వేంకటాధిపుడితడు',
          meaning: { en: 'He is the great Person who makes souls rise in joy at the charm before them. For people like us who surrender, he is the Lord of Venkata, our very limb and refuge.', kn: 'ಮುಂದಿರುವ ಮೋಹನ ರೂಪದಿಂದ ಜೀವಾತ್ಮರನ್ನು ಉಕ್ಕಿಸುವ ಮಹಾಪುರುಷ ಇವನು; ನಮ್ಮಂಥ ಶರಣಾಗತರಿಗೆ ಆಶ್ರಯದ ಅಂಗವಾದ ಶ್ರೀ ವೆಂಕಟಾಧಿಪ ಇವನೇ.' },
        },
      ],
    },
  ],
};
