/**
 * Shendur Lal Chadhayo, the Ganesha aarti of Maharashtra in mixed Hindi-Marathi, sung with Sukhakarta Dukhaharta at Ganeshotsav, in
 * Devanagari. The last stanza names "Gosavinandana" (Gosavi's son), the poet.
 *
 * Collated Nov 2026 against two typed copies: bhaktibharat.com "Shri Ganesh Shendur Laal Chadhayo" (B) and shubhpanchang.com
 * "Shendur Lal Chadhayo" (S). They agree apart from spelling: "गुड़लड्डू" (S) / "गुडलद्दु" (B), "पदको" (S) / "पादको" (B), "गौरीहरको"
 * (S) / "गौरिहरको" (B). The refrain "जय जय श्री गणराज विद्या सुखदाता । धन्य तुम्हारा दर्शन मेरा मन रमता" (S; B prints it as "जय देव जय
 * देव") is sung after every stanza and is given once, as the opening. Nukta letters are written without the dot. Meanings are
 * original.
 */
import type { Mantra } from '../types';

export const aartiShendurLalChadhayo: Mantra = {
  id: 'aarti-shendur-lal-chadhayo',
  title: 'शेंदुरलालचढायोआरती',
  titleEn: 'Shendur Lal Chadhayo (Ganesha Aarti)',
  category: 'aarti',
  order: 7,
  deity: 'Śrī Gaṇeśa',
  source: 'Traditional Marathi-Hindi aarti; the last stanza names Gosāvīnandana',
  summary: 'The Marathi-Hindi Ganesha aarti sung beside Sukhakarta Dukhaharta at Ganesh Chaturthi. It praises the elephant-faced lord smeared with red vermilion, the bearer of laddus whose glory cannot be told, the destroyer of obstacles with eight siddhis as his servants, and promises the gifts of children and wealth to whoever comes to him in faith.',
  summaryKn: 'ಗಣೇಶ ಚತುರ್ಥಿಯಲ್ಲಿ ಸುಖಕರ್ತಾ ದುಃಖಹರ್ತಾ ಜೊತೆ ಹಾಡುವ ಮರಾಠಿ-ಹಿಂದಿ ಗಣೇಶ ಆರತಿ. ಕೆಂಪು ಸಿಂಧೂರ ಬಳಿದ, ಲಡ್ಡು ಹಿಡಿದ, ಅಷ್ಟಸಿದ್ಧಿಗಳು ದಾಸಿಯರಾದ, ವಿಘ್ನ ನಾಶಕ ಗಜಮುಖನನ್ನು ಹೊಗಳಿ, ಭಾವಭಕ್ತಿಯಿಂದ ಶರಣು ಬರುವವರಿಗೆ ಸಂತಾನ, ಸಂಪತ್ತು ಲಭಿಸುವುದೆಂದು ಹೇಳುತ್ತದೆ.',
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
          text: 'जय जय श्री गणराज विद्या सुखदाता ।\nधन्य तुम्हारा दर्शन मेरा मन रमता ॥',
          meaning: { en: 'Victory, victory to the glorious lord of the hosts, giver of learning and happiness; blessed is your sight, my mind delights in it.', kn: 'ಶ್ರೀ ಗಣರಾಜನಿಗೆ ಜಯ ಜಯ, ವಿದ್ಯೆ ಸುಖ ನೀಡುವವನೇ; ನಿನ್ನ ದರ್ಶನ ಧನ್ಯ, ನನ್ನ ಮನಸ್ಸು ಅದರಲ್ಲಿ ರಮಿಸುತ್ತದೆ.' },
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
          text: 'शेंदुर लाल चढायो अच्छा गजमुखको ।\nदोंदिल लाल बिराजे सुत गौरीहरको ॥\nहाथ लिए गुडलड्डू सांई सुरवरको ।\nमहिमा कहे न जाय लागत हूं पदको ॥',
          meaning: { en: 'Red vermilion has been offered to the fine elephant-faced one; the red-bellied son of Gauri and Hara sits in splendour. He holds a jaggery laddu, lord of the gods; his glory cannot be told, I fall at his feet.', kn: 'ಕೆಂಪು ಸಿಂಧೂರವನ್ನು ಸುಂದರ ಗಜಮುಖನಿಗೆ ಅರ್ಪಿಸಿದ್ದಾರೆ; ಗೌರೀಹರರ ಪುತ್ರ, ಕೆಂಪು ಹೊಟ್ಟೆಯವನು ವಿರಾಜಿಸುತ್ತಾನೆ. ಕೈಯಲ್ಲಿ ಬೆಲ್ಲದ ಲಡ್ಡು ಹಿಡಿದ ದೇವತೆಗಳ ಒಡೆಯ; ಮಹಿಮೆ ಹೇಳಲಾಗದು, ಪಾದಕ್ಕೆ ಎರಗುತ್ತೇನೆ.' },
        },
        {
          n: 2,
          text: 'अष्टौ सिद्धि दासी संकटको बैरी ।\nविघ्नविनाशन मंगल मूरत अधिकारी ॥\nकोटीसूरजप्रकाश ऐसी छबि तेरी ।\nगंडस्थलमदमस्तक झूले शशिबिहारी ॥',
          meaning: { en: 'The eight siddhis are his maidservants and he is the enemy of distress; destroyer of obstacles, image of auspiciousness, the master. Your form shines like the light of crores of suns; rut flows down the temples of his head as he sways, playing with the moon.', kn: 'ಅಷ್ಟಸಿದ್ಧಿಗಳು ದಾಸಿಯರು, ಸಂಕಟಕ್ಕೆ ಶತ್ರು; ವಿಘ್ನನಾಶಕ, ಮಂಗಲಮೂರ್ತಿ, ಅಧಿಕಾರಿ. ಕೋಟಿ ಸೂರ್ಯರ ಪ್ರಕಾಶದಂತೆ ನಿನ್ನ ರೂಪ; ಗಂಡಸ್ಥಳದಿಂದ ಮದ ಸುರಿಯುತ್ತಿರಲು ಚಂದ್ರನೊಂದಿಗೆ ಆಡುತ್ತ ತೂಗುತ್ತಾನೆ.' },
        },
        {
          n: 3,
          text: 'भावभगत से कोई शरणागत आवे ।\nसंतत संपत सबही भरपूर पावे ॥\nऐसे तुम महाराज मोको अति भावे ।\nगोसावीनंदन निशिदिन गुन गावे ॥',
          meaning: { en: 'Whoever comes to him for refuge with feeling and devotion gets children, wealth, everything in plenty. Such a great lord pleases me greatly; Gosavinandana sings his praise night and day.', kn: 'ಭಾವಭಕ್ತಿಯಿಂದ ಯಾರಾದರೂ ಶರಣು ಬಂದರೆ ಸಂತಾನ, ಸಂಪತ್ತು ಎಲ್ಲವನ್ನೂ ಸಮೃದ್ಧವಾಗಿ ಪಡೆಯುತ್ತಾನೆ. ಇಂಥ ಮಹಾರಾಜ ನನಗೆ ಬಹಳ ಪ್ರಿಯ; ಗೋಸಾವೀನಂದನ ಹಗಲಿರುಳು ಗುಣಗಾನ ಮಾಡುತ್ತಾನೆ.' },
        },
      ],
    },
  ],
};
