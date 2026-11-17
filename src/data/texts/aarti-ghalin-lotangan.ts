/**
 * Ghalin Lotangan, the prayer sung at the end of the aarti in Maharashtrian homes and at Ganeshotsav, in Devanagari. Stanza 1 is a Marathi
 * abhanga naming "Nama" (Namadeva); stanza 2 is the Sanskrit "Tvameva mata ca pita tvameva"; stanza 3 "Kayena vaca manasendriyair va"
 * (Bhagavata Purana 11.2.36, in the form commonly sung); stanza 4 "Acyutam Kesavam Rama Narayanam" (the Rama-Krishna names); stanza 5 the Hare Rama Hare Krishna mahamantra.
 *
 * Collated Nov 2026 against two typed copies: shubhpanchang.com "Ghalin Lotangan" (S) and astroyogi.com "Ghalin Lotangan" (A). A runs
 * words together and has some wrong spellings ("विध्या", "बंधुक्ष्च", "रुपतुझें"); the correct forms are as in S: "विद्या", "बन्धुश्च",
 * "रूप तुझे". Otherwise they agree. Stanza 3 is printed in A with the second half run on; it is given in the usual four-line form.
 * Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const aartiGhalinLotangan: Mantra = {
  id: 'aarti-ghalin-lotangan',
  title: 'घालीनलोटांगणप्रार्थना',
  titleEn: 'Ghalin Lotangan (closing prayer after the aarti)',
  category: 'aarti',
  order: 12,
  deity: 'Śrī Viṣṇu (Nārāyaṇa)',
  source: 'Abhaṅga ascribed to Nāmadeva (stanza 1, Marathi) with Sanskrit verses: Tvameva Mātā, Kāyena Vācā, Acyutaṁ Keśavaṁ, and the Hare Rāma mahāmantra',
  summary: 'The prayer sung after the aarti in Maharashtra, as the closing of every puja. It begins with the abhanga of Namadeva ("I will fall down and bow at your feet, see your form with my eyes, embrace you with love") and goes on to the Sanskrit verses "You are my mother and father", "whatever I do with body, speech and mind I offer to Narayana", the names Achyuta, Keshava, Rama, Narayana, and the Hare Rama mahamantra.',
  summaryKn: 'ಮಹಾರಾಷ್ಟ್ರದಲ್ಲಿ ಆರತಿಯ ನಂತರ, ಪ್ರತಿ ಪೂಜೆಯ ಕೊನೆಯಲ್ಲಿ ಹಾಡುವ ಪ್ರಾರ್ಥನೆ. ನಾಮದೇವರ ಅಭಂಗ ("ಬಿದ್ದು ನಮಸ್ಕರಿಸುತ್ತೇನೆ, ಕಣ್ಣಾರೆ ನಿನ್ನ ರೂಪ ನೋಡುತ್ತೇನೆ") ಇಂದ ಆರಂಭಿಸಿ, "ತ್ವಮೇವ ಮಾತಾ ಚ ಪಿತಾ ತ್ವಮೇವ", "ಕಾಯೇನ ವಾಚಾ ಮನಸೇಂದ್ರಿಯೈರ್ವಾ", ಅಚ್ಯುತ ಕೇಶವ ರಾಮ ನಾರಾಯಣ ನಾಮಗಳು ಮತ್ತು ಹರೇ ರಾಮ ಮಹಾಮಂತ್ರದಲ್ಲಿ ಮುಗಿಯುತ್ತದೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'प्रार्थना',
      titleEn: 'The prayer',
      verses: [
        {
          n: 1,
          text: 'घालीन लोटांगण, वंदीन चरण ।\nडोळ्यांनी पाहीन रूप तुझे ॥\nप्रेमे आलिंगन, आनंदे पूजिन ।\nभावे ओवाळीन म्हणे नामा ॥',
          meaning: { en: 'I will fall down and bow at your feet, and see your form with my eyes. With love I will embrace you, with joy I will worship you, with feeling I will wave the lamp: so says Nama.', kn: 'ಬಿದ್ದು ನಮಸ್ಕರಿಸುತ್ತೇನೆ, ಚರಣಗಳಿಗೆ ವಂದಿಸುತ್ತೇನೆ; ಕಣ್ಣುಗಳಿಂದ ನಿನ್ನ ರೂಪ ನೋಡುತ್ತೇನೆ. ಪ್ರೇಮದಿಂದ ಆಲಿಂಗಿಸುತ್ತೇನೆ, ಆನಂದದಿಂದ ಪೂಜಿಸುತ್ತೇನೆ, ಭಾವದಿಂದ ಆರತಿ ಬೆಳಗುತ್ತೇನೆ ಎನ್ನುತ್ತಾನೆ ನಾಮ.' },
        },
        {
          n: 2,
          text: 'त्वमेव माता च पिता त्वमेव ।\nत्वमेव बन्धुश्च सखा त्वमेव ॥\nत्वमेव विद्या द्रविणं त्वमेव ।\nत्वमेव सर्वं मम देव देव ॥',
          meaning: { en: 'You alone are my mother and my father; you alone are my kin and my friend; you alone are my learning and my wealth. You are everything to me, God of gods.', kn: 'ನೀನೇ ನನ್ನ ತಾಯಿ, ನೀನೇ ತಂದೆ; ನೀನೇ ಬಂಧು, ನೀನೇ ಸಖ; ನೀನೇ ವಿದ್ಯೆ, ನೀನೇ ಧನ. ದೇವದೇವ, ನೀನೇ ನನ್ನ ಸರ್ವಸ್ವ.' },
        },
        {
          n: 3,
          text: 'कायेन वाचा मनसेन्द्रियैर्वा ।\nबुद्ध्यात्मना वा प्रकृतिस्वभावात् ॥\nकरोमि यद्यत् सकलं परस्मै ।\nनारायणायेति समर्पयामि ॥',
          meaning: { en: 'Whatever I do, with body, speech, mind or senses, with intellect or soul, or from my nature: all of it I offer to the Supreme, saying "to Narayana".', kn: 'ದೇಹ, ವಾಣಿ, ಮನಸ್ಸು, ಇಂದ್ರಿಯಗಳಿಂದ, ಬುದ್ಧಿ ಆತ್ಮದಿಂದ ಅಥವಾ ಸ್ವಭಾವದಿಂದ ನಾನು ಏನೇನು ಮಾಡುತ್ತೇನೋ ಅದೆಲ್ಲವನ್ನೂ "ನಾರಾಯಣನಿಗೆ" ಎಂದು ಪರಮಾತ್ಮನಿಗೆ ಅರ್ಪಿಸುತ್ತೇನೆ.' },
        },
        {
          n: 4,
          text: 'अच्युतं केशवं रामनारायणं ।\nकृष्णदामोदरं वासुदेवं हरिम् ॥\nश्रीधरं माधवं गोपिकावल्लभं ।\nजानकीनायकं रामचन्द्रं भजे ॥',
          meaning: { en: 'I worship Achyuta, Keshava, Rama, Narayana, Krishna, Damodara, Vasudeva, Hari; Shridhara, Madhava, beloved of the gopis, lord of Janaki, Ramachandra.', kn: 'ಅಚ್ಯುತ, ಕೇಶವ, ರಾಮ, ನಾರಾಯಣ, ಕೃಷ್ಣ, ದಾಮೋದರ, ವಾಸುದೇವ, ಹರಿಯನ್ನು ಭಜಿಸುತ್ತೇನೆ; ಶ್ರೀಧರ, ಮಾಧವ, ಗೋಪಿಕಾವಲ್ಲಭ, ಜಾನಕೀನಾಯಕ ರಾಮಚಂದ್ರನನ್ನು ಭಜಿಸುತ್ತೇನೆ.' },
        },
        {
          n: 5,
          text: 'हरे राम हरे राम, राम राम हरे हरे ।\nहरे कृष्ण हरे कृष्ण, कृष्ण कृष्ण हरे हरे ॥',
          meaning: { en: 'The mahamantra: Hare Rama, Hare Krishna, calling on Hari through the names of Rama and Krishna.', kn: 'ಮಹಾಮಂತ್ರ: ಹರೇ ರಾಮ, ಹರೇ ಕೃಷ್ಣ, ರಾಮ ಕೃಷ್ಣ ನಾಮಗಳ ಮೂಲಕ ಹರಿಯನ್ನು ಕರೆಯುವುದು.' },
        },
      ],
    },
  ],
};
