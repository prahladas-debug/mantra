/**
 * Lavathavati Vikrala, the Marathi Shiva aarti of Samartha Ramadasa (17th century), sung on Mondays, in Shravana and on Mahashivaratri, in
 * Devanagari. The last stanza names "Ramadasa".
 *
 * Collated Nov 2026 against two typed copies: shubhpanchang.com (S) and drikpanchang.com "Shri Shiva Aarti" in Marathi (D). They agree apart
 * from spelling: "ब्रह्मांडी माळा" (S) / "ब्रह्माण्डी माळा" (D), "विषे कंठ काळा" (S) / "वीषे कण्ठ काळा" (D), "कर्पूरगौरा" (S) / "कर्पुरगौरा" (D),
 * "देवी दैत्य" (S) / "देवी दैत्यी" (D). The refrain "जय देव जय देव जय श्रीशंकरा । आरती ओवाळू तुज कर्पूरगौरा" is sung after every
 * stanza and is given once, as the opening. Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const aartiLavthavtiVikrala: Mantra = {
  id: 'aarti-lavthavti-vikrala',
  title: 'लवथवतीविक्राळाशंकरआरती',
  titleEn: 'Lavthavti Vikrala (Shiva Aarti)',
  category: 'aarti',
  order: 10,
  deity: 'Śrī Śiva (Śaṅkara)',
  source: 'Samartha Rāmadāsa (17th century), Marathi',
  summary: 'The Marathi aarti of Shiva by Samartha Ramadasa, sung on Mondays, in Shravana and on Mahashivaratri. It describes the terrible, serpent-garlanded lord with the crescent moon and Ganga flowing from his head, the one who drank the Halahala poison at the churning of the ocean and became Neelakantha, camphor-white and simple, with Parvati as half his body.',
  summaryKn: 'ಸಮರ್ಥ ರಾಮದಾಸರ ಶಿವನ ಮರಾಠಿ ಆರತಿ; ಸೋಮವಾರ, ಶ್ರಾವಣ, ಮಹಾಶಿವರಾತ್ರಿಯಲ್ಲಿ ಹಾಡುತ್ತಾರೆ. ಬ್ರಹ್ಮಾಂಡದ ಮಾಲೆ ಧರಿಸಿದ, ತಲೆಯಲ್ಲಿ ಚಂದ್ರ ಮತ್ತು ಗಂಗೆ ಹೊಂದಿದ, ಸಮುದ್ರಮಥನದಲ್ಲಿ ಹಾಲಾಹಲ ಕುಡಿದು ನೀಲಕಂಠನಾದ, ಕರ್ಪೂರಗೌರ, ಭೋಳೆ, ಅರ್ಧಾಂಗಿ ಪಾರ್ವತಿಯ ಶಂಕರನನ್ನು ವರ್ಣಿಸುತ್ತದೆ.',
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
          text: 'जय देव जय देव जय श्रीशंकरा ।\nआरती ओवाळू तुज कर्पूरगौरा ॥',
          meaning: { en: 'Victory, victory to glorious Shankara; I wave the lamp before you, camphor-white lord.', kn: 'ಶ್ರೀ ಶಂಕರನಿಗೆ ಜಯ ಜಯ; ಕರ್ಪೂರಗೌರನೇ, ನಿನಗೆ ಆರತಿ ಬೆಳಗುತ್ತೇನೆ.' },
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
          text: 'लवथवती विक्राळा ब्रह्मांडी माळा ।\nविषे कंठ काळा त्रिनेत्री ज्वाळा ॥\nलावण्यसुंदर मस्तकी बाळा ।\nतेथुनिया जळ निर्मळ वाहे झुळझुळा ॥',
          meaning: { en: 'Terrible, quivering, with a garland of worlds; his throat dark with poison, flame in his three eyes. Handsome and beautiful, with the young moon on his head, from where clear water flows murmuring down.', kn: 'ಭಯಂಕರ, ಲವಲವಿಸುವ, ಬ್ರಹ್ಮಾಂಡಗಳ ಮಾಲೆ ಧರಿಸಿದವನು; ವಿಷದಿಂದ ಕಂಠ ಕಪ್ಪು, ಮೂರನೇ ಕಣ್ಣಿನಲ್ಲಿ ಜ್ವಾಲೆ. ಲಾವಣ್ಯಸುಂದರ, ತಲೆಯಲ್ಲಿ ಬಾಲಚಂದ್ರ, ಅಲ್ಲಿಂದ ನಿರ್ಮಲ ಜಲ ಝುಳುಝುಳು ಹರಿಯುತ್ತದೆ.' },
        },
        {
          n: 2,
          text: 'कर्पूरगौरा भोळा नयनी विशाळा ।\nअर्धांगी पार्वती सुमनांच्या माळा ॥\nविभुतीचे उधळण शितिकंठ नीळा ।\nऐसा शंकर शोभे उमावेल्हाळा ॥',
          meaning: { en: 'Camphor-white, simple-hearted, wide-eyed; Parvati is half his body and garlands of flowers adorn him. Ash is scattered over him, the blue-throated one; such is Shankara, beloved of Uma, who shines.', kn: 'ಕರ್ಪೂರಗೌರ, ಭೋಳೆ, ವಿಶಾಲ ಕಣ್ಣುಗಳವನು; ಅರ್ಧಾಂಗಿ ಪಾರ್ವತಿ, ಹೂವಿನ ಮಾಲೆಗಳು. ವಿಭೂತಿಯ ಚೆಲ್ಲಾಟ, ನೀಲಕಂಠ; ಇಂಥ ಉಮಾಪ್ರಿಯ ಶಂಕರ ಶೋಭಿಸುತ್ತಾನೆ.' },
        },
        {
          n: 3,
          text: 'देवी दैत्य सागरमंथन पै केले ।\nत्यामाजी अवचित हळाहळ जे उठिले ॥\nते त्वा असुरपणे प्राशन केले ।\nनीळकंठ नाम प्रसिद्ध झाले ॥',
          meaning: { en: 'The gods and demons churned the ocean; suddenly the Halahala poison rose from it. You drank that with the courage of a destroyer of demons, and the name Neelakantha became famous.', kn: 'ದೇವತೆಗಳು ಮತ್ತು ದೈತ್ಯರು ಸಾಗರವನ್ನು ಕಡೆದರು; ಅದರಲ್ಲಿ ಅಕಸ್ಮಾತ್ ಹಾಲಾಹಲ ವಿಷ ಉಕ್ಕಿತು. ಅದನ್ನು ನೀನು ಧೈರ್ಯದಿಂದ ಕುಡಿದೆ; ನೀಲಕಂಠ ಎಂಬ ಹೆಸರು ಪ್ರಸಿದ್ಧವಾಯಿತು.' },
        },
        {
          n: 4,
          text: 'व्याघ्रांबर फणिवरधर सुंदर मदनारी ।\nपंचानन मनमोहन मुनिजनसुखकारी ॥\nशतकोटीचे बीज वाचे उच्चारी ।\nरघुकुळटिळक रामदासा अंतरी ॥',
          meaning: { en: 'Clad in a tiger skin, wearing a great serpent, beautiful destroyer of Madana; five-faced, charmer of minds, giver of joy to sages. The seed of a hundred crores, the name of Rama, he utters; he dwells within Ramadasa, the servant of the jewel of Raghu\'s line.', kn: 'ವ್ಯಾಘ್ರಚರ್ಮಧಾರಿ, ಶ್ರೇಷ್ಠ ಸರ್ಪ ಧರಿಸಿದ, ಸುಂದರ ಮದನಾರಿ; ಪಂಚಮುಖ, ಮನಮೋಹನ, ಮುನಿಜನರಿಗೆ ಸುಖಕಾರಿ. ಶತಕೋಟಿಯ ಬೀಜವಾದ ರಾಮನಾಮವನ್ನು ಉಚ್ಚರಿಸುತ್ತಾನೆ; ರಘುಕುಲತಿಲಕನ ದಾಸ ರಾಮದಾಸನ ಅಂತರಂಗದಲ್ಲಿ ನೆಲೆಸಿದ್ದಾನೆ.' },
        },
      ],
    },
  ],
};
