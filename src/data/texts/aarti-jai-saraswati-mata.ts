/**
 * Jaya Sarasvati Mata, the Hindi aarti to Sarasvati sung on Vasant Panchami, in Navaratri and before study, in Devanagari. The author is
 * not known.
 *
 * Collated Nov 2026 against two typed copies: bhaktibharat.com "Maa Saraswati Ji" (B) and shubhpanchang.com "Om Jai Saraswati
 * Mata" (S). They agree apart from spelling ("सदगुण" B, "सद्गुण" S; the second is kept). The refrain "जय सरस्वती माता" is sung after every stanza and is given once, as the opening line pair. Stanzas are
 * given two to a verse. Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const aartiJaiSaraswatiMata: Mantra = {
  id: 'aarti-jai-saraswati-mata',
  title: 'जयसरस्वतीमाताआरती',
  titleEn: 'Jai Saraswati Mata Aarti',
  category: 'aarti',
  order: 3,
  deity: 'Śrī Sarasvatī',
  source: 'Traditional Hindi aarti (author not known)',
  summary: 'The Hindi aarti to Sarasvati, sung on Vasant Panchami and before study or music. It describes the moon-faced goddess seated on a lotus, riding a swan, with a veena in her left hand and a rosary in her right, recalls how she turned Manthara\'s tongue to save the gods from Ravana, and asks her to remove darkness and ignorance and open the eye of knowledge.',
  summaryKn: 'ವಸಂತ ಪಂಚಮಿ, ವಿದ್ಯಾರಂಭ, ಸಂಗೀತ ಅಭ್ಯಾಸಗಳ ಮೊದಲು ಹಾಡುವ ಸರಸ್ವತಿಯ ಹಿಂದಿ ಆರತಿ. ಚಂದ್ರವದನೆ, ಕಮಲಾಸನೆ, ಹಂಸವಾಹಿನಿ, ಎಡಗೈಯಲ್ಲಿ ವೀಣೆ, ಬಲಗೈಯಲ್ಲಿ ಜಪಮಾಲೆ ಹಿಡಿದ ದೇವಿಯನ್ನು ವರ್ಣಿಸಿ, ಮಂಥರೆಯ ನಾಲಿಗೆಯಲ್ಲಿ ನಿಂತು ರಾವಣ ಸಂಹಾರಕ್ಕೆ ಸಹಾಯ ಮಾಡಿದ್ದನ್ನು ನೆನೆದು, ಅಜ್ಞಾನದ ಕತ್ತಲೆ ಕಳೆದು ಜ್ಞಾನದೃಷ್ಟಿ ನೀಡೆಂದು ಬೇಡುತ್ತದೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'The refrain, sung after each verse.',
      noteKn: 'ಪ್ರತಿ ಪದ್ಯದ ನಂತರ ಹಾಡುವ ಪಲ್ಲವಿ.',
      verses: [
        {
          text: 'जय सरस्वती माता, मैया जय सरस्वती माता ।\nसद्गुण वैभव शालिनी, त्रिभुवन विख्याता ॥',
          meaning: { en: 'Victory to Mother Sarasvati, victory to Mother Sarasvati: rich in good qualities and splendour, famed in the three worlds.', kn: 'ಮಾತೆ ಸರಸ್ವತಿಗೆ ಜಯ, ಸರಸ್ವತಿ ಮಾತೆಗೆ ಜಯ; ಸದ್ಗುಣ ವೈಭವಗಳಿಂದ ಶೋಭಿಸುವ, ಮೂರು ಲೋಕಗಳಲ್ಲಿ ಪ್ರಸಿದ್ಧಳು.' },
        },
      ],
    },
    {
      title: 'पद',
      titleEn: 'Stanzas',
      note: 'After each verse the refrain is sung.',
      noteKn: 'ಪ್ರತಿ ಪದ್ಯದ ನಂತರ ಪಲ್ಲವಿ ಹಾಡುತ್ತಾರೆ.',
      verses: [
        {
          n: 1,
          text: 'चन्द्रवदनि पद्मासिनि, द्युति मंगलकारी ।\nसोहे शुभ हंस सवारी, अतुल तेजधारी ॥\nबाएं कर में वीणा, दाएं कर माला ।\nशीश मुकुट मणि सोहे, गल मोतियन माला ॥',
          meaning: { en: 'Moon-faced, seated on a lotus, her radiance brings good; the auspicious swan she rides is lovely, and her splendour has no equal. A veena in the left hand, a rosary in the right; a jewelled crown on her head and a pearl garland at her neck.', kn: 'ಚಂದ್ರವದನೆ, ಪದ್ಮಾಸನೆ, ಅವಳ ಕಾಂತಿ ಮಂಗಳಕರ; ಶುಭ ಹಂಸವಾಹನ ಶೋಭಿಸುತ್ತದೆ, ಅತುಲ ತೇಜಸ್ಸು ಧರಿಸಿದ್ದಾಳೆ. ಎಡಗೈಯಲ್ಲಿ ವೀಣೆ, ಬಲಗೈಯಲ್ಲಿ ಜಪಮಾಲೆ; ತಲೆಯಲ್ಲಿ ರತ್ನ ಕಿರೀಟ, ಕೊರಳಲ್ಲಿ ಮುತ್ತಿನ ಹಾರ.' },
        },
        {
          n: 2,
          text: 'देवी शरण जो आए, उनका उद्धार किया ।\nपैठी मंथरा दासी, रावण संहार किया ॥\nविद्या ज्ञान प्रदायिनि, ज्ञान प्रकाश भरो ।\nमोह अज्ञान और तिमिर का, जग से नाश करो ॥',
          meaning: { en: 'Those who came to the goddess for refuge she lifted up: entering the maid Manthara she brought about Ravana\'s end. Giver of learning and knowledge, fill us with the light of knowledge; destroy delusion, ignorance and darkness from the world.', kn: 'ದೇವಿಯ ಶರಣು ಬಂದವರನ್ನು ಅವಳು ಉದ್ಧರಿಸಿದಳು: ದಾಸಿ ಮಂಥರೆಯಲ್ಲಿ ಹೊಕ್ಕು ರಾವಣ ಸಂಹಾರಕ್ಕೆ ಕಾರಣಳಾದಳು. ವಿದ್ಯೆ ಜ್ಞಾನ ನೀಡುವವಳೇ, ಜ್ಞಾನದ ಬೆಳಕನ್ನು ತುಂಬು; ಮೋಹ, ಅಜ್ಞಾನ, ಕತ್ತಲೆಯನ್ನು ಜಗತ್ತಿನಿಂದ ನಾಶ ಮಾಡು.' },
        },
        {
          n: 3,
          text: 'धूप दीप फल मेवा, माँ स्वीकार करो ।\nज्ञानचक्षु दे माता, जग निस्तार करो ॥\nमाँ सरस्वती की आरती, जो कोई जन गावे ।\nहितकारी सुखकारी, ज्ञान भक्ति पावे ॥',
          meaning: { en: 'Incense, lamp, fruit and dry fruit: Mother, accept them. Give us the eye of knowledge, Mother, and carry the world across. Whoever sings this aarti of Mother Sarasvati gains what is good and pleasant, knowledge and devotion.', kn: 'ಧೂಪ, ದೀಪ, ಹಣ್ಣು, ಮೇವಾ: ಅಮ್ಮಾ, ಸ್ವೀಕರಿಸು. ಜ್ಞಾನನೇತ್ರ ನೀಡು ತಾಯಿ, ಜಗತ್ತನ್ನು ಉದ್ಧರಿಸು. ತಾಯಿ ಸರಸ್ವತಿಯ ಈ ಆರತಿಯನ್ನು ಹಾಡುವವನು ಹಿತ, ಸುಖ, ಜ್ಞಾನ ಮತ್ತು ಭಕ್ತಿಯನ್ನು ಪಡೆಯುತ್ತಾನೆ.' },
        },
      ],
    },
  ],
};
