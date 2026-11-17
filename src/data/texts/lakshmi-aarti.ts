/**
 * Ōṁ Jaya Lakṣmī Mātā (Śrī Lakṣmījī kī Āratī), Hindi, in Devanagari. Author not known (traditional).
 *
 * Collated Nov 2026 against three typed copies: bhaktibharat.com (B), drikpanchang.com "Aarti Shri Lakshmi Ji" (D) and
 * shubhpanchang.com (S). The eight stanzas agree except in spelling and a few words. Readings kept: "हरि विष्णु विधाता" (D, S;
 * B "हर"), "निशिदिन" (D, S; B "निसदिन"), stanza 5 "जिस घर तुम रहती तहाँ सब सद्गुण आता" (S; D "जिस घर में तुम रहतीं",
 * B "ताँहि में हैं सद्गुण आता"), closing "जो कोई नर गाता" (B, S; D "जन"). B prints before the aarti the Sanskrit
 * verses "महालक्ष्मि नमस्तुभ्यं …"; they are not part of this aarti and are left out. The refrain "ॐ जय लक्ष्मी माता" is sung
 * after each stanza. Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const lakshmiAarti: Mantra = {
  id: 'lakshmi-aarti',
  title: 'ॐजयलक्ष्मीमाताआरती',
  titleEn: 'Om Jai Lakshmi Mata Aarti',
  category: 'aarti',
  order: 28,
  deity: 'Śrī Lakṣmī',
  source: 'Traditional Hindi aarti',
  summary: 'The Hindi aarti to Goddess Lakshmi sung on Fridays and at the Lakshmi puja of Diwali. It greets her as the mother served day and night by Vishnu and Brahma, praises her as Uma, Rama and Brahmani, giver of comfort and wealth, daughter of the milk ocean, without whom there is no sacrifice, no cloth, no food and none of the fourteen jewels, and promises joy and freedom from sin to those who sing it.',
  summaryKn: 'ಶುಕ್ರವಾರ ಮತ್ತು ದೀಪಾವಳಿಯ ಲಕ್ಷ್ಮೀಪೂಜೆಯಲ್ಲಿ ಹಾಡುವ ಹಿಂದಿ ಲಕ್ಷ್ಮೀ ಆರತಿ. ವಿಷ್ಣು, ಬ್ರಹ್ಮರು ಹಗಲಿರುಳು ಸೇವಿಸುವ ತಾಯಿಯೆಂದು ಸ್ವಾಗತಿಸಿ, ಉಮಾ, ರಮಾ, ಬ್ರಹ್ಮಾಣಿ ಎಂದು ಸ್ತುತಿಸುತ್ತದೆ; ಸುಖ-ಸಂಪತ್ತು ಕೊಡುವವಳು, ಕ್ಷೀರಸಾಗರದಿಂದ ಹುಟ್ಟಿದವಳು, ಅವಳಿಲ್ಲದೆ ಯಜ್ಞ, ವಸ್ತ್ರ, ಅನ್ನ, ಹದಿನಾಲ್ಕು ರತ್ನಗಳು ಯಾವುದೂ ಇಲ್ಲ ಎನ್ನುತ್ತದೆ; ಹಾಡುವವರಿಗೆ ಆನಂದ ಮತ್ತು ಪಾಪವಿಮೋಚನೆಯ ಭರವಸೆ ನೀಡುತ್ತದೆ.',
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
          text: 'ॐ जय लक्ष्मी माता, मैया जय लक्ष्मी माता ।\nतुमको निशिदिन सेवत, हरि विष्णु विधाता ॥',
          meaning: { en: 'Om, victory to Mother Lakshmi, victory to Mother Lakshmi; day and night you are served by Hari, Vishnu and Brahma the creator.', kn: 'ಓಂ, ತಾಯಿ ಲಕ್ಷ್ಮಿಗೆ ಜಯ, ಅಮ್ಮ ಲಕ್ಷ್ಮಿಗೆ ಜಯ; ಹಗಲಿರುಳು ಹರಿ, ವಿಷ್ಣು, ಸೃಷ್ಟಿಕರ್ತ ಬ್ರಹ್ಮ ನಿನ್ನನ್ನು ಸೇವಿಸುತ್ತಾರೆ.' },
        },
      ],
    },
    {
      title: 'पद',
      titleEn: 'Stanzas',
      note: 'After each stanza the refrain "Om Jai Lakshmi Mata" is sung.',
      noteKn: 'ಪ್ರತಿ ಪದ್ಯದ ನಂತರ “ಓಂ ಜಯ ಲಕ್ಷ್ಮೀ ಮಾತಾ” ಪಲ್ಲವಿ ಹಾಡುತ್ತಾರೆ.',
      verses: [
        {
          n: 1,
          text: 'उमा, रमा, ब्रह्माणी, तुम ही जग-माता ।\nसूर्य-चन्द्रमा ध्यावत, नारद ऋषि गाता ॥',
          meaning: { en: 'As Uma, Rama and Brahmani you alone are the mother of the world; the sun and the moon meditate on you, and the sage Narada sings of you.', kn: 'ಉಮಾ, ರಮಾ, ಬ್ರಹ್ಮಾಣಿಯಾಗಿ ನೀನೇ ಜಗನ್ಮಾತೆ; ಸೂರ್ಯ-ಚಂದ್ರರು ನಿನ್ನನ್ನು ಧ್ಯಾನಿಸುತ್ತಾರೆ, ನಾರದ ಋಷಿ ನಿನ್ನನ್ನು ಹಾಡುತ್ತಾನೆ.' },
        },
        {
          n: 2,
          text: 'दुर्गा रूप निरंजनी, सुख सम्पत्ति दाता ।\nजो कोई तुमको ध्यावत, ऋद्धि-सिद्धि धन पाता ॥',
          meaning: { en: 'In the form of Durga, the spotless one, you give comfort and wealth; whoever meditates on you gains prosperity, powers and riches.', kn: 'ದುರ್ಗೆಯ ರೂಪದ ನಿರ್ಮಲೆ, ಸುಖ-ಸಂಪತ್ತು ಕೊಡುವವಳು; ನಿನ್ನನ್ನು ಧ್ಯಾನಿಸುವವನು ಋದ್ಧಿ-ಸಿದ್ಧಿ, ಧನ ಪಡೆಯುತ್ತಾನೆ.' },
        },
        {
          n: 3,
          text: 'तुम पाताल निवासिनी, तुम ही शुभदाता ।\nकर्म-प्रभाव-प्रकाशिनी, भवनिधि की त्राता ॥',
          meaning: { en: 'You dwell even in the nether world, and you alone give good fortune; you make the power of actions shine, and you rescue us from the ocean of worldly life.', kn: 'ನೀನು ಪಾತಾಳದಲ್ಲೂ ವಾಸಿಸುವವಳು, ನೀನೇ ಶುಭ ಕೊಡುವವಳು; ಕರ್ಮದ ಪ್ರಭಾವವನ್ನು ಬೆಳಗುವವಳು, ಸಂಸಾರಸಾಗರದಿಂದ ಕಾಪಾಡುವವಳು.' },
        },
        {
          n: 4,
          text: 'जिस घर तुम रहती तहाँ, सब सद्गुण आता ।\nसब संभव हो जाता, मन नहीं घबराता ॥',
          meaning: { en: 'In the house where you live, all good qualities come; everything becomes possible and the mind does not tremble.', kn: 'ನೀನು ಯಾವ ಮನೆಯಲ್ಲಿ ವಾಸಿಸುತ್ತೀಯೋ ಅಲ್ಲಿಗೆ ಎಲ್ಲ ಸದ್ಗುಣಗಳು ಬರುತ್ತವೆ; ಎಲ್ಲವೂ ಸಾಧ್ಯವಾಗುತ್ತದೆ, ಮನಸ್ಸು ಬೆದರುವುದಿಲ್ಲ.' },
        },
        {
          n: 5,
          text: 'तुम बिन यज्ञ न होते, वस्त्र न कोई पाता ।\nखान-पान का वैभव, सब तुमसे आता ॥',
          meaning: { en: 'Without you no sacrifice is performed and no one gets clothing; the abundance of food and drink all comes from you.', kn: 'ನಿನ್ನ ಹೊರತು ಯಜ್ಞ ನಡೆಯುವುದಿಲ್ಲ, ಯಾರಿಗೂ ವಸ್ತ್ರ ಸಿಗುವುದಿಲ್ಲ; ಅನ್ನ-ಪಾನಗಳ ವೈಭವವೆಲ್ಲ ನಿನ್ನಿಂದ ಬರುತ್ತದೆ.' },
        },
        {
          n: 6,
          text: 'शुभ-गुण मन्दिर सुन्दर, क्षीरोदधि जाता ।\nरत्न चतुर्दश तुम बिन, कोई नहीं पाता ॥',
          meaning: { en: 'You are the beautiful temple of auspicious qualities, born of the milk ocean; without you no one obtains the fourteen jewels.', kn: 'ಶುಭಗುಣಗಳ ಸುಂದರ ಮಂದಿರವೇ, ಕ್ಷೀರಸಾಗರದಲ್ಲಿ ಹುಟ್ಟಿದವಳೇ; ನಿನ್ನ ಹೊರತು ಹದಿನಾಲ್ಕು ರತ್ನಗಳನ್ನು ಯಾರೂ ಪಡೆಯುವುದಿಲ್ಲ.' },
        },
        {
          n: 7,
          text: 'महालक्ष्मी जी की आरती, जो कोई नर गाता ।\nउर आनन्द समाता, पाप उतर जाता ॥',
          meaning: { en: 'Whoever sings this aarti of Mahalakshmi, joy fills his heart and his sins fall away.', kn: 'ಮಹಾಲಕ್ಷ್ಮಿಯ ಈ ಆರತಿಯನ್ನು ಹಾಡುವವನ ಹೃದಯದಲ್ಲಿ ಆನಂದ ತುಂಬುತ್ತದೆ, ಪಾಪ ಇಳಿದುಹೋಗುತ್ತದೆ.' },
        },
      ],
    },
  ],
};
