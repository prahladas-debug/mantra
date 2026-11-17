/**
 * Jaya Ambe Gauri, the Hindi aarti to the Mother sung in Navaratri and at Devi puja, in Devanagari. The last stanza names "Shivananda
 * Swami", the usual ascription.
 *
 * Collated Nov 2026 against two typed copies: bhaktibharat.com "Jai Ambe Gauri" (B) and shubhpanchang.com "Jai Ambe Gauri" (S).
 * The twelve stanzas agree line by line apart from spelling. B marks "खड्ग खप्पर धारी" as an alternative reading in the stanza
 * "भुजा चार अति शोभित" (S has only "वर मुद्रा धारी"); "वर मुद्रा धारी" is kept. The refrain "ॐ जय अम्बे गौरी" is sung after
 * every stanza and is given once, in the opening. Stanzas are given two to a verse. Nukta letters are written without the dot.
 * Meanings are original.
 */
import type { Mantra } from '../types';

export const aartiJaiAmbeGauri: Mantra = {
  id: 'aarti-jai-ambe-gauri',
  title: 'जयअम्बेगौरीआरती',
  titleEn: 'Jai Ambe Gauri Aarti',
  category: 'aarti',
  order: 5,
  deity: 'Śrī Ambā (Gaurī, Durgā)',
  source: 'Traditional Hindi aarti; the last stanza names Śivānanda Svāmī',
  summary: 'The best-known Hindi aarti to the Mother, sung in Navaratri and at Devi puja. It describes Ambe Gauri with vermilion in her parting, golden-bodied in red, riding a lion with sword and bowl, and recalls her slaying of Shumbha, Nishumbha, Mahishasura, Chanda, Munda, Raktabija, Madhu and Kaitabha. The last stanza promises wealth and happiness to those who sing it.',
  summaryKn: 'ನವರಾತ್ರಿ ಮತ್ತು ದೇವೀ ಪೂಜೆಯಲ್ಲಿ ಹಾಡುವ ತಾಯಿಯ ಪ್ರಸಿದ್ಧ ಹಿಂದಿ ಆರತಿ. ಬೈತಲೆಯಲ್ಲಿ ಸಿಂಧೂರ, ಚಿನ್ನದ ಬಣ್ಣ, ಕೆಂಪು ವಸ್ತ್ರ, ಸಿಂಹವಾಹನ, ಖಡ್ಗ ಖಪ್ಪರ ಧರಿಸಿದ ಅಂಬೆ ಗೌರಿಯನ್ನು ವರ್ಣಿಸಿ, ಶುಂಭ ನಿಶುಂಭ ಮಹಿಷಾಸುರ ಚಂಡಮುಂಡ ರಕ್ತಬೀಜ ಮಧುಕೈಟಭರ ಸಂಹಾರವನ್ನು ನೆನೆಯುತ್ತದೆ. ಹಾಡುವವರಿಗೆ ಸುಖಸಂಪತ್ತು ಸಿಗುತ್ತದೆ ಎನ್ನುತ್ತದೆ.',
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
          text: 'जय अम्बे गौरी, मैया जय श्यामा गौरी ।\nतुमको निशदिन ध्यावत, हरि ब्रह्मा शिवरी ॥\nॐ जय अम्बे गौरी ॥',
          meaning: { en: 'Victory to Mother Ambe Gauri, victory to dark-and-fair Gauri. Hari, Brahma and Shiva meditate on you night and day.', kn: 'ತಾಯಿ ಅಂಬೆ ಗೌರಿಗೆ ಜಯ, ಶ್ಯಾಮಾ ಗೌರಿಗೆ ಜಯ. ಹರಿ, ಬ್ರಹ್ಮ, ಶಿವರು ನಿನ್ನನ್ನು ಹಗಲಿರುಳು ಧ್ಯಾನಿಸುತ್ತಾರೆ.' },
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
          text: 'मांग सिंदूर विराजत, टीको मृगमद को ।\nउज्ज्वल से दोउ नैना, चंद्रवदन नीको ॥\nकनक समान कलेवर, रक्ताम्बर राजे ।\nरक्तपुष्प गल माला, कंठन पर साजे ॥',
          meaning: { en: 'Vermilion shines in the parting of her hair and a musk mark on her brow; her two eyes are bright and her moon-face lovely. Her body is like gold and red garments adorn her; a garland of red flowers decks her neck.', kn: 'ಬೈತಲೆಯಲ್ಲಿ ಸಿಂಧೂರ, ಹಣೆಯಲ್ಲಿ ಕಸ್ತೂರಿ ತಿಲಕ ಶೋಭಿಸುತ್ತದೆ; ಎರಡು ಕಣ್ಣುಗಳು ಉಜ್ವಲ, ಚಂದ್ರವದನ ಸುಂದರ. ದೇಹ ಚಿನ್ನದಂತೆ, ಕೆಂಪು ವಸ್ತ್ರ ಶೋಭಿಸುತ್ತದೆ; ಕೊರಳಲ್ಲಿ ಕೆಂಪು ಹೂವಿನ ಮಾಲೆ.' },
        },
        {
          n: 2,
          text: 'केहरि वाहन राजत, खड्ग खप्पर धारी ।\nसुर-नर-मुनिजन सेवत, तिनके दुखहारी ॥\nकानन कुण्डल शोभित, नासाग्रे मोती ।\nकोटिक चंद्र दिवाकर, सम राजत ज्योती ॥',
          meaning: { en: 'She rides a lion, holding sword and bowl; gods, men and sages serve her, and she removes their sorrows. Earrings adorn her ears and a pearl her nose; her light shines like crores of moons and suns.', kn: 'ಸಿಂಹವಾಹನೆ, ಖಡ್ಗ ಖಪ್ಪರ ಧರಿಸಿದವಳು; ದೇವತೆಗಳು, ಮನುಷ್ಯರು, ಮುನಿಗಳು ಸೇವಿಸುತ್ತಾರೆ, ಅವರ ದುಃಖ ಹರಿಸುವವಳು. ಕಿವಿಯಲ್ಲಿ ಕುಂಡಲ, ಮೂಗಿನ ತುದಿಯಲ್ಲಿ ಮುತ್ತು; ಕೋಟಿ ಚಂದ್ರ ಸೂರ್ಯರಂತೆ ಅವಳ ಜ್ಯೋತಿ ಬೆಳಗುತ್ತದೆ.' },
        },
        {
          n: 3,
          text: 'शुंभ-निशुंभ बिदारे, महिषासुर घाती ।\nधूम्र विलोचन नैना, निशदिन मदमाती ॥\nचण्ड-मुण्ड संहारे, शोणित बीज हरे ।\nमधु-कैटभ दोउ मारे, सुर भयहीन करे ॥',
          meaning: { en: 'She tore apart Shumbha and Nishumbha and slew Mahishasura; she killed Dhumralochana, ever intoxicated with the fight. She destroyed Chanda and Munda, removed Raktabija, and killed both Madhu and Kaitabha, making the gods fearless.', kn: 'ಶುಂಭ ನಿಶುಂಭರನ್ನು ಸೀಳಿದಳು, ಮಹಿಷಾಸುರನನ್ನು ಕೊಂದಳು; ಧೂಮ್ರಲೋಚನನನ್ನು ಸಂಹರಿಸಿದಳು, ಹಗಲಿರುಳು ಯುದ್ಧಮತ್ತೆ. ಚಂಡಮುಂಡರನ್ನು ಸಂಹರಿಸಿ ರಕ್ತಬೀಜನನ್ನು ಅಳಿಸಿದಳು; ಮಧುಕೈಟಭರಿಬ್ಬರನ್ನೂ ಕೊಂದು ದೇವತೆಗಳನ್ನು ನಿರ್ಭಯರನ್ನಾಗಿ ಮಾಡಿದಳು.' },
        },
        {
          n: 4,
          text: 'ब्रह्माणी, रूद्राणी, तुम कमला रानी ।\nआगम निगम बखानी, तुम शिव पटरानी ॥\nचौंसठ योगिनी मंगल गावत, नृत्य करत भैरों ।\nबाजत ताल मृदंगा, अरु बाजत डमरू ॥',
          meaning: { en: 'You are Brahmani and Rudrani, you are Queen Kamala; the Agamas and Nigamas tell your praise, and you are Shiva\'s chief queen. The sixty-four yoginis sing auspicious songs and Bhairava dances, as cymbals, the mridanga and the damaru sound.', kn: 'ನೀನು ಬ್ರಹ್ಮಾಣಿ, ರುದ್ರಾಣಿ, ರಾಣಿ ಕಮಲಾ; ಆಗಮ ನಿಗಮಗಳು ನಿನ್ನ ಮಹಿಮೆಯನ್ನು ಹೇಳುತ್ತವೆ, ನೀನು ಶಿವನ ಪಟ್ಟದ ರಾಣಿ. ಅರವತ್ತನಾಲ್ಕು ಯೋಗಿನಿಯರು ಮಂಗಳ ಹಾಡುತ್ತಾರೆ, ಭೈರವ ನರ್ತಿಸುತ್ತಾನೆ; ತಾಳ, ಮೃದಂಗ, ಡಮರು ಮೊಳಗುತ್ತವೆ.' },
        },
        {
          n: 5,
          text: 'तुम ही जग की माता, तुम ही हो भरता ।\nभक्तन की दुख हरता, सुख संपति करता ॥\nभुजा चार अति शोभित, वर मुद्रा धारी ।\nमनवांछित फल पावत, सेवत नर नारी ॥',
          meaning: { en: 'You alone are the world\'s mother and you alone its sustainer; you remove the sorrows of devotees and give comfort and wealth. Your four arms are beautiful, with the boon-giving gesture; men and women who serve you gain the fruit they wish.', kn: 'ನೀನೇ ಜಗನ್ಮಾತೆ, ನೀನೇ ಭರಣ ಪೋಷಣೆ ಮಾಡುವವಳು; ಭಕ್ತರ ದುಃಖ ಹರಿಸಿ ಸುಖಸಂಪತ್ತು ನೀಡುವವಳು. ನಾಲ್ಕು ಭುಜಗಳು ಅತಿ ಶೋಭಿತ, ವರಮುದ್ರೆ ಧರಿಸಿದ್ದಾಳೆ; ಸೇವಿಸುವ ಸ್ತ್ರೀಪುರುಷರು ಬಯಸಿದ ಫಲ ಪಡೆಯುತ್ತಾರೆ.' },
        },
        {
          n: 6,
          text: 'कंचन थाल विराजत, अगर कपूर बाती ।\nश्रीमालकेतु में राजत, कोटि रतन ज्योती ॥\nश्री अंबेजी की आरति, जो कोइ नर गावे ।\nकहत शिवानंद स्वामी, सुख-संपति पावे ॥',
          meaning: { en: 'On a golden plate shine the aloe, camphor and wick; in Srimalaketu the light of crores of jewels shines. Whoever sings this aarti of Sri Ambe, says Shivananda Swami, gains happiness and wealth.', kn: 'ಚಿನ್ನದ ತಟ್ಟೆಯಲ್ಲಿ ಅಗರು, ಕರ್ಪೂರ, ಬತ್ತಿ ಬೆಳಗುತ್ತವೆ; ಶ್ರೀಮಾಲಕೇತುವಿನಲ್ಲಿ ಕೋಟಿ ರತ್ನಗಳ ಜ್ಯೋತಿ ಹೊಳೆಯುತ್ತದೆ. ಶ್ರೀ ಅಂಬೆಯ ಈ ಆರತಿ ಹಾಡುವವನು ಸುಖಸಂಪತ್ತು ಪಡೆಯುತ್ತಾನೆ ಎನ್ನುತ್ತಾನೆ ಶಿವಾನಂದ ಸ್ವಾಮಿ.' },
        },
      ],
    },
  ],
};
