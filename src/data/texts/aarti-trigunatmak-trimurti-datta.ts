/**
 * Trigunatmak Trimurti Datta, the Marathi aarti of Dattatreya by Sant Eknath (signature "Eka Janardani"), sung on Thursdays and at Datta Jayanti,
 * in Devanagari.
 *
 * Collated Nov 2026 against two typed copies: shubhpanchang.com (S) and drikpanchang.com "Lord Dattatreya Aarti" in Marathi (D). They agree
 * apart from spelling and one reading: stanza 2 line 2 "अभाग्यासी कैची कळेल हि मात" (S) against "अभाग्यासी कैसी न कळे ही मात" (D); S is kept.
 * Other differences are spelling ("आरती ओवाळिता" S / "ओवाळीतां" D, "ऊभा" D). The refrain "जय देव जय देव जय श्रीगुरुदत्ता । आरती ओवाळिता हरली
 * भवचिंता" is sung after every stanza and is given once, as the opening. Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const aartiTrigunatmakTrimurtiDatta: Mantra = {
  id: 'aarti-trigunatmak-trimurti-datta',
  title: 'त्रिगुणात्मकत्रैमूर्तीदत्तआरती',
  titleEn: 'Trigunatmak Trimurti Datta (Dattatreya Aarti)',
  category: 'aarti',
  order: 11,
  deity: 'Śrī Dattātreya',
  source: 'Eknāth (Eka Janārdana, 16th century), Marathi',
  summary: 'The Marathi aarti of Dattatreya by Sant Eknath, sung on Thursdays and at Datta Jayanti. It hails Datta as the three-natured form of the Trimurti, beyond reasoning, who stands before the devotee who bows in full prostration, ends the round of birth and death, and in whose meditation the mind is lost and "I and you" disappear.',
  summaryKn: 'ಸಂತ ಏಕನಾಥರು ರಚಿಸಿದ ದತ್ತಾತ್ರೇಯನ ಮರಾಠಿ ಆರತಿ; ಗುರುವಾರ ಮತ್ತು ದತ್ತ ಜಯಂತಿಯಲ್ಲಿ ಹಾಡುತ್ತಾರೆ. ದತ್ತನನ್ನು ತ್ರಿಮೂರ್ತಿಯ ತ್ರಿಗುಣ ಸ್ವರೂಪ, ತರ್ಕಾತೀತ, ಸಾಷ್ಟಾಂಗ ನಮಸ್ಕರಿಸಿದವನ ಮುಂದೆ ನಿಂತು ಜನ್ಮಮರಣದ ಚಕ್ರ ಕಳೆಯುವವನೆಂದೂ, ಅವನ ಧ್ಯಾನದಲ್ಲಿ ಮನಸ್ಸು ಲೀನವಾಗಿ "ನಾನು-ನೀನು" ಎಂಬ ಭೇದ ಇಲ್ಲವಾಗುವುದೆಂದೂ ಹೊಗಳುತ್ತದೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'The refrain, sung after each stanza.',
      noteKn: 'ಪ್ರತಿ ಪದ್ಯದ ನಂತರ ಹಾಡುವ ಪಲ್ಲವಿ.',
      verses: [
        {
          text: 'जय देव जय देव जय श्रीगुरुदत्ता ।\nआरती ओवाळिता हरली भवचिंता ॥',
          meaning: { en: 'Victory, victory to the glorious Guru Datta; as the lamp is waved before you, the anxiety of worldly life is taken away.', kn: 'ಶ್ರೀ ಗುರುದತ್ತನಿಗೆ ಜಯ ಜಯ; ಆರತಿ ಬೆಳಗುತ್ತಿರುವಾಗ ಸಂಸಾರದ ಚಿಂತೆ ಹರಿಯಿತು.' },
        },
      ],
    },
    {
      title: 'पद',
      titleEn: 'Stanzas',
      note: 'After each stanza the refrain is sung.',
      noteKn: 'ಪ್ರತಿ ಪದ್ಯದ ನಂತರ ಪಲ್ಲವಿ ಹಾಡುತ್ತಾರೆ.',
      verses: [
        {
          n: 1,
          text: 'त्रिगुणात्मक त्रैमूर्ती दत्त हा जाणा ।\nत्रिगुणी अवतार त्रैलोक्य राणा ॥\nनेति नेति शब्द न ये अनुमाना ।\nसुरवर मुनिजन योगी समाधि न ये ध्याना ॥',
          meaning: { en: 'Know this Datta as the Trimurti of three natures, an incarnation made of the three gunas, king of the three worlds. Beyond "not this, not this", beyond words or inference; even the best of gods, sages and yogis cannot reach him in samadhi or meditation.', kn: 'ಈ ದತ್ತನನ್ನು ತ್ರಿಗುಣಾತ್ಮಕ ತ್ರಿಮೂರ್ತಿ ಎಂದು ತಿಳಿ; ಮೂರು ಗುಣಗಳ ಅವತಾರ, ತ್ರೈಲೋಕ್ಯರಾಜ. "ನೇತಿ ನೇತಿ" ಎಂಬ ಮಾತು, ಅನುಮಾನಗಳಿಗೂ ನಿಲುಕದವನು; ಶ್ರೇಷ್ಠ ದೇವತೆಗಳು, ಮುನಿಗಳು, ಯೋಗಿಗಳು ಸಮಾಧಿ ಧ್ಯಾನದಿಂದಲೂ ಅವನನ್ನು ಮುಟ್ಟಲಾರರು.' },
        },
        {
          n: 2,
          text: 'सबाह्य अभ्यंतरी तू एक दत्त ।\nअभाग्यासी कैची कळेल हि मात ॥\nपराही परतली तेथे कैचा हेत ।\nजन्ममरणाचा पुरलासे अंत ॥',
          meaning: { en: 'Outside and inside, you are the one Datta; how can the unfortunate understand this truth? Even the highest speech (Para) turns back there; what purpose is left? The end of birth and death is reached.', kn: 'ಹೊರಗೂ ಒಳಗೂ ನೀನೊಬ್ಬನೇ ದತ್ತ; ದುರ್ಭಾಗ್ಯನಿಗೆ ಈ ಮಾತು ಹೇಗೆ ತಿಳಿಯುತ್ತದೆ? ಪರಾವಾಣಿಯೂ ಅಲ್ಲಿ ಹಿಂತಿರುಗುತ್ತದೆ; ಅಲ್ಲಿ ಹೇತು ಎಲ್ಲಿ? ಜನ್ಮಮರಣಗಳ ಅಂತ್ಯ ಬಂದಿದೆ.' },
        },
        {
          n: 3,
          text: 'दत्त येऊनिया उभा ठाकला ।\nसद्भावे साष्टांगे प्रणिपात केला ॥\nप्रसन्न होऊनि आशीर्वाद दिधला ।\nजन्ममरणाचा फेरा चुकविला ॥',
          meaning: { en: 'Datta came and stood before me. With true feeling I bowed to him in full prostration. Pleased, he gave his blessing, and the cycle of birth and death was spared me.', kn: 'ದತ್ತ ಬಂದು ಎದುರು ನಿಂತನು. ಸದ್ಭಾವದಿಂದ ಸಾಷ್ಟಾಂಗ ನಮಸ್ಕಾರ ಮಾಡಿದೆ. ಪ್ರಸನ್ನನಾಗಿ ಆಶೀರ್ವದಿಸಿದನು; ಜನ್ಮಮರಣದ ಚಕ್ರ ತಪ್ಪಿತು.' },
        },
        {
          n: 4,
          text: 'दत्त दत्त ऐसे लागले ध्यान ।\nहरपले मन झाले उन्मन ॥\nमीतूपणाची झाली बोळवण ।\nएका जनार्दनी श्रीदत्तध्यान ॥',
          meaning: { en: '"Datta, Datta": such meditation took hold; the mind was lost and became free of thought. "I and you" was sent away. Eka Janardana: meditation on Sri Datta.', kn: '"ದತ್ತ ದತ್ತ" ಎಂಬ ಧ್ಯಾನ ಹಿಡಿಯಿತು; ಮನಸ್ಸು ಲೀನವಾಗಿ ಉನ್ಮನವಾಯಿತು. "ನಾನು-ನೀನು" ಎಂಬ ಭಾವ ಬೀಳ್ಕೊಟ್ಟಿತು. ಏಕಾ ಜನಾರ್ದನಿ: ಶ್ರೀ ದತ್ತಧ್ಯಾನ.' },
        },
      ],
    },
  ],
};
