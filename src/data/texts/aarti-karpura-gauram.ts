/**
 * Karpura Gauram Karunavataram, the Sanskrit verse to Shiva (Bhava) and Bhavani recited when camphor is lit for the closing aarti of puja,
 * in Devanagari. Some sources call it a Yajurveda verse; it is not found in the Samhitas and the ascription is not established.
 *
 * Collated Nov 2026 against three typed copies: bhaktibharat.com (B), shubhpanchang.com (S) and shlokam.org (K). The four lines
 * agree in all three; spacing and sandhi marks differ ("संसारसारम्" B, K / "संसारसारं" S, "सदावसन्तं" B, S / "सदा वसन्तं" K).
 * Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const aartiKarpuraGauram: Mantra = {
  id: 'aarti-karpura-gauram',
  title: 'कर्पूरगौरंकरुणावतारम्',
  titleEn: 'Karpura Gauram (the camphor-aarti verse)',
  category: 'aarti',
  order: 13,
  deity: 'Śrī Śiva',
  source: 'Traditional Sanskrit dhyāna verse of Śiva (sometimes ascribed to the Yajurveda; not established)',
  summary: 'The Sanskrit verse recited as the camphor is lit at the end of puja: "I bow to Bhava, the camphor-white, embodiment of compassion, the essence of the world, whose garland is the king of serpents, who ever dwells in the lotus of my heart, together with Bhavani."',
  summaryKn: 'ಪೂಜೆಯ ಕೊನೆಯಲ್ಲಿ ಕರ್ಪೂರ ಬೆಳಗುವಾಗ ಹೇಳುವ ಸಂಸ್ಕೃತ ಶ್ಲೋಕ: ಕರ್ಪೂರದಂತೆ ಶುಭ್ರ, ಕರುಣೆಯ ಅವತಾರ, ಸಂಸಾರದ ಸಾರ, ಸರ್ಪರಾಜನ ಹಾರ ಧರಿಸಿದ, ನನ್ನ ಹೃದಯಕಮಲದಲ್ಲಿ ಸದಾ ನೆಲೆಸಿರುವ ಭವನಿಗೆ ಭವಾನಿಯೊಂದಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      verses: [
        {
          text: 'कर्पूरगौरं करुणावतारं\nसंसारसारं भुजगेन्द्रहारम् ।\nसदा वसन्तं हृदयारविन्दे\nभवं भवानीसहितं नमामि ॥',
          meaning: { en: 'I bow to Bhava (Shiva) together with Bhavani: white as camphor, an incarnation of compassion, the essence of worldly existence, with the king of serpents as his garland, ever dwelling in the lotus of the heart.', kn: 'ಭವಾನಿಯೊಂದಿಗಿರುವ ಭವನಿಗೆ ನಮಿಸುತ್ತೇನೆ: ಕರ್ಪೂರದಂತೆ ಬಿಳಿ, ಕರುಣೆಯ ಅವತಾರ, ಸಂಸಾರದ ಸಾರ, ಸರ್ಪರಾಜನೇ ಹಾರ, ಹೃದಯಕಮಲದಲ್ಲಿ ಸದಾ ನೆಲೆಸಿರುವವನು.' },
        },
      ],
    },
  ],
};
