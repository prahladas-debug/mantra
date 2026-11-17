/**
 * Two traditional Sanskrit mangala (auspiciousness) verses, sung at the close of puja, bhajans and weddings in South India: "Mangalam Bhagavan
 * Vishnuh" and "Mangalam Kosalendraya" (to Rama), in Devanagari. The authors are not known.
 *
 * Collated Nov 2026 from shlokam.org (K) for both verses, "Mangalam Bhagavan Vishnu" and "Mangalam Kosalendraya". The second source for
 * these two verses could not be fetched (sanskritdocuments.org blocked the fetch), so the wording was checked against the
 * commonly printed form: "मङ्गलायतनो हरिः" in verse 1 (K prints the word broken, "मङ्गलाय तनो"; the joined form is the sense) and
 * "मङ्गलं कोसलेन्द्राय महनीयगुणात्मने । चक्रवर्तितनूजाय सार्वभौमाय मङ्गलम्" in verse 2. Nukta letters are written without the dot.
 * Meanings are original.
 */
import type { Mantra } from '../types';

export const aartiMangalaShlokas: Mantra = {
  id: 'aarti-mangala-shlokas',
  title: 'मङ्गलश्लोकाः',
  titleEn: 'Mangala Shlokas (Mangalam Bhagavan Vishnuh, Mangalam Kosalendraya)',
  category: 'aarti',
  order: 14,
  deity: 'Śrī Viṣṇu; Śrī Rāma',
  source: 'Traditional Sanskrit maṅgala verses, sung at the close of puja, weddings and bhajans (authors not known)',
  summary: 'Two short Sanskrit verses of blessing sung at the end of puja, bhajan sessions and weddings: "Auspicious is the Lord Vishnu, auspicious is he whose banner is Garuda, auspicious is the lotus-eyed Hari, abode of all that is auspicious", and the wish of good fortune to Rama, ruler of Kosala, son of the emperor Dasharatha and lord of all the earth.',
  summaryKn: 'ಪೂಜೆ, ಭಜನೆ, ವಿವಾಹಗಳ ಕೊನೆಯಲ್ಲಿ ಹಾಡುವ ಎರಡು ಚಿಕ್ಕ ಸಂಸ್ಕೃತ ಮಂಗಳ ಶ್ಲೋಕಗಳು: "ಭಗವಾನ್ ವಿಷ್ಣು ಮಂಗಳ, ಗರುಡಧ್ವಜ ಮಂಗಳ, ಪುಂಡರೀಕಾಕ್ಷ ಮಂಗಳ, ಹರಿ ಮಂಗಳಗಳ ನೆಲೆ" ಮತ್ತು ಕೋಸಲೇಂದ್ರ, ಚಕ್ರವರ್ತಿ ದಶರಥನ ಪುತ್ರ, ಸಾರ್ವಭೌಮ ರಾಮನಿಗೆ ಮಂಗಳ ಹಾರೈಕೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      verses: [
        {
          n: 1,
          text: 'मङ्गलं भगवान् विष्णुर्मङ्गलं गरुडध्वजः ।\nमङ्गलं पुण्डरीकाक्षो मङ्गलायतनो हरिः ॥',
          meaning: { en: 'Lord Vishnu is auspicious, he whose banner bears Garuda is auspicious; the lotus-eyed one is auspicious, and Hari is the abode of all auspiciousness.', kn: 'ಭಗವಾನ್ ವಿಷ್ಣು ಮಂಗಳ, ಗರುಡಧ್ವಜ ಮಂಗಳ; ಪುಂಡರೀಕಾಕ್ಷ ಮಂಗಳ, ಹರಿ ಮಂಗಳಗಳಿಗೆ ನೆಲೆ.' },
        },
        {
          n: 2,
          text: 'मङ्गलं कोसलेन्द्राय महनीयगुणात्मने ।\nचक्रवर्तितनूजाय सार्वभौमाय मङ्गलम् ॥',
          meaning: { en: 'Blessings to the lord of Kosala, whose nature is made of admirable virtues; blessings to the son of the emperor, the lord of all the earth.', kn: 'ಕೋಸಲೇಂದ್ರನಿಗೆ, ಪ್ರಶಂಸನೀಯ ಗುಣಸ್ವರೂಪನಿಗೆ ಮಂಗಳ; ಚಕ್ರವರ್ತಿಯ ಪುತ್ರನಿಗೆ, ಸಾರ್ವಭೌಮನಿಗೆ ಮಂಗಳ.' },
        },
      ],
    },
  ],
};
