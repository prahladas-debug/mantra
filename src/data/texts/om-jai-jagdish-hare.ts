/**
 * Ōṁ Jaya Jagadīśa Hare (Jagadīśa kī Āratī), Hindi, in Devanagari. Usually ascribed to Paṇḍita Śraddhārāma Phillaurī (c. 1870).
 *
 * Collated Nov 2026 against three typed copies: bhaktibharat.com "Om Jai Jagdish Hare" (B), drikpanchang.com
 * "Jai Jagdish Aarti" (D) and shubhpanchang.com "Om Jai Jagdish Hare" (S). The eight main stanzas agree in all three
 * apart from spelling. Variants and choices: stanza 5 "मैं मूरख खल कामी" (D, S) against "फलकामी" (B);
 * stanza 7 "ठाकुर तुम मेरे … स्वामी रक्षक तुम मेरे" (B, S) against D "तुम ठाकुर मेरे"; D also omits "अपने शरण लगाओ";
 * stanza 8 "संतन की सेवा" in all. The closing "जो कोई नर गावे" stanza naming Shivananda is printed in D
 * and is not in B or S; the "तन मन धन सब कुछ है तेरा" stanza is printed in S only. Both are given in a separate section
 * as extra stanzas of the later printings. The refrain "ॐ जय जगदीश हरे" is sung after every stanza and is not repeated
 * in the verses below. Nukta letters are written without the dot. The ascription to Shraddharam Phillauri
 * is the usual one (B, S); it is not proved for every stanza. Meanings are original.
 */
import type { Mantra } from '../types';

export const omJaiJagdishHare: Mantra = {
  id: 'om-jai-jagdish-hare',
  title: 'ॐ जय जगदीश हरे',
  titleEn: 'Om Jai Jagdish Hare',
  category: 'aarti',
  order: 22,
  deity: 'Śrī Viṣṇu (Jagadīśa)',
  source: 'Ascribed to Paṇḍita Śraddhārāma Phillaurī (Hindi)',
  summary: 'The best-known Hindi aarti, sung at the end of almost every puja: eight short stanzas to the Lord of the world, each followed by the refrain "Om Jai Jagdish Hare". It asks him to remove the troubles of devotees in a moment, calls him mother, father, the only refuge and the inner witness, confesses the singer\'s folly, and asks for faith and devotion. Two extra stanzas from later printings are given at the end.',
  summaryKn: 'ಬಹುತೇಕ ಪ್ರತಿ ಪೂಜೆಯ ಕೊನೆಯಲ್ಲಿ ಹಾಡುವ, ಹಿಂದಿಯ ಅತ್ಯಂತ ಪ್ರಸಿದ್ಧ ಆರತಿ: ಜಗದೀಶನಿಗೆ ಎಂಟು ಸಣ್ಣ ಪದ್ಯಗಳು, ಪ್ರತಿಯೊಂದರ ನಂತರ “ಓಂ ಜಯ ಜಗದೀಶ ಹರೇ” ಪಲ್ಲವಿ. ಭಕ್ತರ ಸಂಕಟವನ್ನು ಕ್ಷಣದಲ್ಲಿ ನೀಗಿಸು ಎಂದು ಬೇಡಿ, ಅವನನ್ನು ತಾಯಿ-ತಂದೆ, ಏಕೈಕ ಆಶ್ರಯ, ಅಂತರ್ಯಾಮಿ ಎನ್ನುತ್ತದೆ; ತನ್ನ ಮೂರ್ಖತನವನ್ನು ಒಪ್ಪಿಕೊಂಡು ಶ್ರದ್ಧೆ-ಭಕ್ತಿ ವೃದ್ಧಿಸು ಎಂದು ಕೇಳುತ್ತದೆ. ಕೊನೆಯಲ್ಲಿ ನಂತರದ ಮುದ್ರಣಗಳ ಎರಡು ಹೆಚ್ಚುವರಿ ಪದ್ಯಗಳಿವೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'The opening line, repeated after each stanza.',
      noteKn: 'ಪಲ್ಲವಿ: ಪ್ರತಿ ಪದ್ಯದ ನಂತರ ಪುನರಾವರ್ತನೆ.',
      verses: [
        {
          text: 'ॐ जय जगदीश हरे, स्वामी जय जगदीश हरे ।\nभक्त जनों के संकट, दास जनों के संकट,\nक्षण में दूर करे ॥',
          meaning: { en: 'Om, victory to the Lord of the world, Hari; victory to my Lord Jagdish Hari. The troubles of his devotees, the troubles of his servants, he removes in a moment.', kn: 'ಓಂ, ಜಗದೀಶ ಹರಿಗೆ ಜಯ; ನನ್ನ ಸ್ವಾಮಿ ಜಗದೀಶ ಹರಿಗೆ ಜಯ. ಭಕ್ತರ ಸಂಕಟಗಳನ್ನು, ಸೇವಕರ ಸಂಕಟಗಳನ್ನು ಅವನು ಕ್ಷಣದಲ್ಲಿ ದೂರ ಮಾಡುತ್ತಾನೆ.' },
        },
      ],
    },
    {
      title: 'पद',
      titleEn: 'Stanzas',
      note: 'After each stanza the refrain "Om Jai Jagdish Hare" is sung.',
      noteKn: 'ಪ್ರತಿ ಪದ್ಯದ ನಂತರ “ಓಂ ಜಯ ಜಗದೀಶ ಹರೇ” ಪಲ್ಲವಿ ಹಾಡುತ್ತಾರೆ.',
      verses: [
        {
          n: 1,
          text: 'जो ध्यावे फल पावे, दुःख बिनसे मन का ।\nस्वामी दुःख बिनसे मन का ।\nसुख सम्पत्ति घर आवे, कष्ट मिटे तन का ॥',
          meaning: { en: 'Whoever meditates on him gains the fruit: the sorrow of the mind perishes, comfort and prosperity come to the home, and the suffering of the body is wiped out.', kn: 'ಅವನನ್ನು ಧ್ಯಾನಿಸಿದವನಿಗೆ ಫಲ ಸಿಗುತ್ತದೆ; ಮನಸ್ಸಿನ ದುಃಖ ನಾಶವಾಗುತ್ತದೆ, ಮನೆಗೆ ಸುಖ-ಸಂಪತ್ತು ಬರುತ್ತದೆ, ದೇಹದ ಕಷ್ಟ ಅಳಿಯುತ್ತದೆ.' },
        },
        {
          n: 2,
          text: 'मात-पिता तुम मेरे, शरण गहूं मैं किसकी ।\nस्वामी शरण गहूं मैं किसकी ।\nतुम बिन और न दूजा, आस करूं मैं जिसकी ॥',
          meaning: { en: 'You are my mother and father; whose refuge should I take? There is no other than you, in whom I could place my hope.', kn: 'ನೀನೇ ನನ್ನ ತಾಯಿ-ತಂದೆ; ನಾನು ಯಾರ ಶರಣು ಹೋಗಲಿ? ನಿನ್ನ ಹೊರತು ಬೇರೆ ಯಾರೂ ಇಲ್ಲ, ಯಾರ ಮೇಲೆ ಆಸೆ ಇಡಲಿ?' },
        },
        {
          n: 3,
          text: 'तुम पूरण परमात्मा, तुम अन्तर्यामी ।\nस्वामी तुम अन्तर्यामी ।\nपारब्रह्म परमेश्वर, तुम सब के स्वामी ॥',
          meaning: { en: 'You are the perfect Supreme Self, you are the inner witness of all; the highest Brahman, the Supreme Lord, you are the master of everyone.', kn: 'ನೀನು ಪೂರ್ಣ ಪರಮಾತ್ಮ, ನೀನು ಅಂತರ್ಯಾಮಿ; ಪರಬ್ರಹ್ಮ, ಪರಮೇಶ್ವರ, ನೀನು ಎಲ್ಲರ ಒಡೆಯ.' },
        },
        {
          n: 4,
          text: 'तुम करुणा के सागर, तुम पालनकर्ता ।\nस्वामी तुम पालनकर्ता ।\nमैं मूरख खल कामी, मैं सेवक तुम स्वामी,\nकृपा करो भर्ता ॥',
          meaning: { en: 'You are an ocean of compassion, you are the one who sustains; I am foolish, wicked and full of desire, I am the servant and you the master: show your grace, O supporter.', kn: 'ನೀನು ಕರುಣೆಯ ಸಾಗರ, ನೀನು ಪಾಲಕ; ನಾನು ಮೂರ್ಖ, ದುಷ್ಟ, ಆಸೆಯುಳ್ಳವನು; ನಾನು ಸೇವಕ, ನೀನು ಒಡೆಯ: ಪೋಷಕನೇ, ಕೃಪೆ ಮಾಡು.' },
        },
        {
          n: 5,
          text: 'तुम हो एक अगोचर, सबके प्राणपति ।\nस्वामी सबके प्राणपति ।\nकिस विधि मिलूं दयामय, तुमको मैं कुमति ॥',
          meaning: { en: 'You are the one who cannot be seen by the senses, the lord of everyone\'s life. How may I meet you, merciful one, I of a poor mind?', kn: 'ನೀನು ಇಂದ್ರಿಯಗಳಿಗೆ ಗೋಚರಿಸದ ಒಬ್ಬನೇ, ಎಲ್ಲರ ಪ್ರಾಣಪತಿ. ದಯಾಮಯನೇ, ಕೆಟ್ಟ ಬುದ್ಧಿಯ ನಾನು ನಿನ್ನನ್ನು ಯಾವ ರೀತಿಯಲ್ಲಿ ಸೇರಲಿ?' },
        },
        {
          n: 6,
          text: 'दीनबंधु दुखहर्ता, ठाकुर तुम मेरे ।\nस्वामी रक्षक तुम मेरे ।\nअपने हाथ उठाओ, अपने शरण लगाओ,\nद्वार पड़ा तेरे ॥',
          meaning: { en: 'Friend of the lowly, remover of sorrow, you are my lord and my protector. Lift up your hand and take me into your refuge; I lie at your door.', kn: 'ದೀನಬಂಧುವೇ, ದುಃಖಹರ್ತನೇ, ನೀನೇ ನನ್ನ ಒಡೆಯ, ನನ್ನ ರಕ್ಷಕ. ನಿನ್ನ ಕೈ ಎತ್ತು, ನಿನ್ನ ಶರಣಿಗೆ ಸೇರಿಸಿಕೊ; ನಾನು ನಿನ್ನ ಬಾಗಿಲಲ್ಲಿ ಬಿದ್ದಿದ್ದೇನೆ.' },
        },
        {
          n: 7,
          text: 'विषय-विकार मिटाओ, पाप हरो देवा ।\nस्वामी पाप हरो देवा ।\nश्रद्धा-भक्ति बढ़ाओ, संतन की सेवा ॥',
          meaning: { en: 'Wipe out my cravings and faults, remove my sins, O Lord; increase my faith and devotion, and my service to the saints.', kn: 'ವಿಷಯಾಸಕ್ತಿ-ದೋಷಗಳನ್ನು ಅಳಿಸು, ದೇವನೇ, ಪಾಪಗಳನ್ನು ಹರಿಸು; ಶ್ರದ್ಧೆ-ಭಕ್ತಿಯನ್ನೂ ಸಂತರ ಸೇವೆಯನ್ನೂ ಹೆಚ್ಚಿಸು.' },
        },
      ],
    },
    {
      title: 'अतिरिक्त पद',
      titleEn: 'Extra stanzas',
      note: 'Found in some printings only.',
      noteKn: 'ಕೆಲವು ಮುದ್ರಣಗಳಲ್ಲಿ ಮಾತ್ರ ಇರುವ ಪದ್ಯಗಳು.',
      verses: [
        {
          text: 'श्री जगदीशजी की आरती, जो कोई नर गावे ।\nस्वामी जो कोई नर गावे ।\nकहत शिवानन्द स्वामी, सुख सम्पत्ति पावे ॥',
          meaning: { en: 'Whoever sings this aarti of Sri Jagdish gains comfort and prosperity, says Shivananda Swami.', kn: 'ಶ್ರೀ ಜಗದೀಶನ ಈ ಆರತಿಯನ್ನು ಹಾಡುವವನು ಸುಖ-ಸಂಪತ್ತು ಪಡೆಯುತ್ತಾನೆ ಎಂದು ಶಿವಾನಂದ ಸ್ವಾಮಿ ಹೇಳುತ್ತಾರೆ.' },
        },
        {
          text: 'तन मन धन सब कुछ है तेरा ।\nस्वामी सब कुछ है तेरा ।\nतेरा तुझको अर्पण, क्या लागे मेरा ॥',
          meaning: { en: 'Body, mind and wealth, everything is yours; what I give to you is yours already, what is it that is mine?', kn: 'ದೇಹ, ಮನಸ್ಸು, ಧನ, ಎಲ್ಲವೂ ನಿನ್ನದೇ; ನಿನ್ನದನ್ನೇ ನಿನಗೆ ಅರ್ಪಿಸುತ್ತೇನೆ, ನನ್ನದೇನಿದೆ?' },
        },
      ],
    },
  ],
};
