/**
 * Navagraha Stotram ascribed to Vyasa (japakusuma-sankasham ...): nine verses, one to each graha, and
 * three verses of phalashruti.
 * Collated Nov 2026: stotranidhi.com "Navagraha Stotram" (as printed in its Prabhata Stotranidhi) and
 * sa.wikisource "नवग्रहस्तोत्रम्" (ascribed to Vedavyasa). The two agree word for word except
 * v7 छायामार्ताण्ड (stotranidhi) / छायामार्तण्ड (wikisource; the standard spelling, followed here).
 */
import type { Mantra } from '../types';

export const navagrahaStotram: Mantra = {
  id: 'navagraha-stotram',
  title: 'नवग्रहस्तोत्रम्',
  titleEn: 'Navagraha Stotram',
  category: 'stotra',
  deity: 'The nine grahas (Surya, Chandra, Mangala, Budha, Brihaspati, Shukra, Shani, Rahu, Ketu)',
  source: 'Ascribed to Vedavyasa',
  summary: 'The best-known prayer to the nine grahas, ascribed to Vyasa: one verse of salutation to each of Surya, Chandra, Mangala, Budha, Brihaspati, Shukra, Shani, Rahu and Ketu, describing the colour and nature of each, followed by three verses on the fruit of reciting it - removal of obstacles, bad dreams and the troubles caused by the planets.',
  summaryKn: 'ವ್ಯಾಸರು ರಚಿಸಿದರೆನ್ನಲಾದ ಪ್ರಸಿದ್ಧ ನವಗ್ರಹ ಸ್ತೋತ್ರ: ಸೂರ್ಯ, ಚಂದ್ರ, ಮಂಗಳ, ಬುಧ, ಗುರು, ಶುಕ್ರ, ಶನಿ, ರಾಹು, ಕೇತು — ಒಂಬತ್ತು ಗ್ರಹಗಳಿಗೂ ಒಂದೊಂದು ನಮಸ್ಕಾರ ಶ್ಲೋಕ, ಅವರ ವರ್ಣ ಮತ್ತು ಸ್ವಭಾವದ ವರ್ಣನೆಯೊಂದಿಗೆ; ಕೊನೆಯ ಮೂರು ಶ್ಲೋಕಗಳು ಫಲಶ್ರುತಿ — ವಿಘ್ನಗಳು, ದುಃಸ್ವಪ್ನಗಳು ಮತ್ತು ಗ್ರಹಪೀಡೆಗಳ ನಿವಾರಣೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'स्तोत्रम्',
      titleEn: 'Stotram',
      verses: [
        {
          n: 1,
          text: 'जपाकुसुमसङ्काशं काश्यपेयं महाद्युतिम् ।\nतमोऽरिं सर्वपापघ्नं प्रणतोऽस्मि दिवाकरम् ॥',
          meaning: {
            en: 'I bow to Divakara, the Sun: red like the japa (hibiscus) flower, son of Kashyapa, of great brilliance, the enemy of darkness and destroyer of all sins.',
            kn: 'ದಾಸವಾಳದ ಹೂವಿನಂತೆ ಕೆಂಪಾದ, ಕಶ್ಯಪರ ಮಗನಾದ, ಮಹಾತೇಜಸ್ವಿಯಾದ, ಕತ್ತಲೆಯ ಶತ್ರುವೂ ಸಕಲ ಪಾಪಗಳನ್ನು ನಾಶಮಾಡುವವನೂ ಆದ ದಿವಾಕರನಿಗೆ (ಸೂರ್ಯನಿಗೆ) ನಾನು ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 2,
          text: 'दधिशङ्खतुषाराभं क्षीरोदार्णवसम्भवम् ।\nनमामि शशिनं सोमं शम्भोर्मुकुटभूषणम् ॥',
          meaning: {
            en: 'I salute Soma, the Moon: white as curd, the conch and snow, born from the ocean of milk, the ornament on the crown of Shambhu (Shiva).',
            kn: 'ಮೊಸರು, ಶಂಖ, ಹಿಮಗಳಂತೆ ಬೆಳ್ಳಗಿರುವ, ಕ್ಷೀರಸಮುದ್ರದಲ್ಲಿ ಹುಟ್ಟಿದ, ಶಂಭುವಿನ (ಶಿವನ) ಕಿರೀಟಕ್ಕೆ ಆಭರಣವಾದ ಚಂದ್ರನಿಗೆ (ಸೋಮನಿಗೆ) ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 3,
          text: 'धरणीगर्भसम्भूतं विद्युत्कान्तिसमप्रभम् ।\nकुमारं शक्तिहस्तं तं मङ्गलं प्रणमाम्यहम् ॥',
          meaning: {
            en: 'I bow to Mangala (Mars): born of the womb of the Earth, shining like a flash of lightning, ever youthful, holding a spear in his hand.',
            kn: 'ಭೂದೇವಿಯ ಗರ್ಭದಿಂದ ಹುಟ್ಟಿದ, ಮಿಂಚಿನ ಕಾಂತಿಯಂತೆ ಹೊಳೆಯುವ, ಕುಮಾರನಾದ, ಕೈಯಲ್ಲಿ ಶಕ್ತಿ ಆಯುಧವನ್ನು ಹಿಡಿದ ಮಂಗಳನಿಗೆ (ಕುಜನಿಗೆ) ನಾನು ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 4,
          text: 'प्रियङ्गुकलिकाश्यामं रूपेणाप्रतिमं बुधम् ।\nसौम्यं सौम्यगुणोपेतं तं बुधं प्रणमाम्यहम् ॥',
          meaning: {
            en: 'I bow to Budha (Mercury): dark green like the bud of the priyangu creeper, of matchless form, gentle, son of Soma, and endowed with gentle qualities.',
            kn: 'ಪ್ರಿಯಂಗು ಮೊಗ್ಗಿನಂತೆ ಹಸಿರುಗಪ್ಪಾದ, ರೂಪದಲ್ಲಿ ಸಾಟಿಯಿಲ್ಲದ, ಸೌಮ್ಯನಾದ (ಸೋಮನ ಮಗನಾದ), ಸೌಮ್ಯಗುಣಗಳಿಂದ ಕೂಡಿದ ಬುಧನಿಗೆ ನಾನು ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 5,
          text: 'देवानां च ऋषीणां च गुरुं काञ्चनसन्निभम् ।\nबुद्धिभूतं त्रिलोकेशं तं नमामि बृहस्पतिम् ॥',
          meaning: {
            en: 'I salute Brihaspati (Jupiter): teacher of the gods and the sages, golden in colour, wisdom itself, a lord in the three worlds.',
            kn: 'ದೇವತೆಗಳಿಗೂ ಋಷಿಗಳಿಗೂ ಗುರುವಾದ, ಬಂಗಾರದಂತೆ ಹೊಳೆಯುವ, ಬುದ್ಧಿಸ್ವರೂಪನಾದ, ಮೂರು ಲೋಕಗಳ ಒಡೆಯನಾದ ಬೃಹಸ್ಪತಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 6,
          text: 'हिमकुन्दमृणालाभं दैत्यानां परमं गुरुम् ।\nसर्वशास्त्रप्रवक्तारं भार्गवं प्रणमाम्यहम् ॥',
          meaning: {
            en: 'I bow to Bhargava, Shukra (Venus): white as snow, the kunda jasmine and the lotus stalk, the great teacher of the daityas, expounder of all the shastras.',
            kn: 'ಹಿಮ, ಕುಂದಪುಷ್ಪ, ತಾವರೆಯ ದಂಟುಗಳಂತೆ ಬೆಳ್ಳಗಿರುವ, ದೈತ್ಯರ ಪರಮ ಗುರುವಾದ, ಎಲ್ಲ ಶಾಸ್ತ್ರಗಳನ್ನು ಉಪದೇಶಿಸುವ ಭಾರ್ಗವನಿಗೆ (ಶುಕ್ರನಿಗೆ) ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 7,
          text: 'नीलाञ्जनसमाभासं रविपुत्रं यमाग्रजम् ।\nछायामार्तण्डसम्भूतं तं नमामि शनैश्चरम् ॥',
          meaning: {
            en: 'I salute Shanaishchara, Saturn: dark like blue collyrium, son of the Sun, elder brother of Yama, born of Chhaya and Martanda (the Sun).',
            kn: 'ಕಪ್ಪು ಕಾಡಿಗೆಯಂತೆ ಕಾಣುವ, ಸೂರ್ಯನ ಮಗನಾದ, ಯಮನ ಅಣ್ಣನಾದ, ಛಾಯಾದೇವಿ ಮತ್ತು ಮಾರ್ತಂಡರಿಂದ (ಸೂರ್ಯನಿಂದ) ಹುಟ್ಟಿದ ಶನೈಶ್ಚರನಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 8,
          text: 'अर्धकायं महावीर्यं चन्द्रादित्यविमर्दनम् ।\nसिंहिकागर्भसम्भूतं तं राहुं प्रणमाम्यहम् ॥',
          meaning: {
            en: 'I bow to Rahu: who has half a body, of great might, the tormentor of the Moon and the Sun (at eclipses), born of the womb of Simhika.',
            kn: 'ಅರ್ಧ ದೇಹವುಳ್ಳ, ಮಹಾಪರಾಕ್ರಮಿಯಾದ, (ಗ್ರಹಣಗಳಲ್ಲಿ) ಚಂದ್ರಸೂರ್ಯರನ್ನು ಪೀಡಿಸುವ, ಸಿಂಹಿಕೆಯ ಗರ್ಭದಿಂದ ಹುಟ್ಟಿದ ರಾಹುವಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
        {
          n: 9,
          text: 'पलाशपुष्पसङ्काशं तारकाग्रहमस्तकम् ।\nरौद्रं रौद्रात्मकं घोरं तं केतुं प्रणमाम्यहम् ॥',
          meaning: {
            en: 'I bow to Ketu: red like the palasha flower, the head among the stars and planets, fierce, of fierce nature and terrible.',
            kn: 'ಮುತ್ತುಗದ ಹೂವಿನಂತೆ ಕೆಂಪಾದ, ನಕ್ಷತ್ರ ಗ್ರಹಗಳಿಗೆ ಶಿರಸ್ಸಿನಂತಿರುವ, ರೌದ್ರನಾದ, ರೌದ್ರಸ್ವಭಾವದ, ಭಯಂಕರನಾದ ಕೇತುವಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'फलश्रुतिः',
      titleEn: 'Phalashruti (the fruit of reciting)',
      verses: [
        {
          n: 10,
          text: 'इति व्यासमुखोद्गीतं यः पठेत्सुसमाहितः ।\nदिवा वा यदि वा रात्रौ विघ्नशान्तिर्भविष्यति ॥',
          meaning: {
            en: 'Whoever recites with a well-collected mind this hymn sung from the mouth of Vyasa, by day or by night, will find his obstacles pacified.',
            kn: 'ವ್ಯಾಸರ ಮುಖದಿಂದ ಹೊರಬಂದ ಈ ಸ್ತೋತ್ರವನ್ನು ಏಕಾಗ್ರಚಿತ್ತದಿಂದ ಹಗಲಾಗಲಿ ರಾತ್ರಿಯಾಗಲಿ ಪಠಿಸುವವನಿಗೆ ವಿಘ್ನಗಳು ಶಾಂತವಾಗುತ್ತವೆ.',
          },
        },
        {
          n: 11,
          text: 'नरनारीनृपाणां च भवेद्दुःस्वप्ननाशनम् ।\nऐश्वर्यमतुलं तेषामारोग्यं पुष्टिवर्धनम् ॥',
          meaning: {
            en: 'For men, women and kings it destroys bad dreams, and brings them matchless prosperity, health and growing strength.',
            kn: 'ಪುರುಷರು, ಸ್ತ್ರೀಯರು, ರಾಜರು — ಎಲ್ಲರಿಗೂ ಇದು ದುಃಸ್ವಪ್ನಗಳನ್ನು ನಾಶಮಾಡುತ್ತದೆ; ಅವರಿಗೆ ಅಸಾಧಾರಣ ಐಶ್ವರ್ಯ, ಆರೋಗ್ಯ ಮತ್ತು ಪುಷ್ಟಿಯ ವೃದ್ಧಿಯನ್ನು ನೀಡುತ್ತದೆ.',
          },
        },
        {
          n: 12,
          text: 'ग्रहनक्षत्रजाः पीडास्तस्कराग्निसमुद्भवाः ।\nताः सर्वाः प्रशमं यान्ति व्यासो ब्रूते न संशयः ॥',
          meaning: {
            en: 'Afflictions arising from the planets and stars, and dangers from thieves and fire - all of them are quelled. So says Vyasa; there is no doubt.',
            kn: 'ಗ್ರಹ ನಕ್ಷತ್ರಗಳಿಂದ ಉಂಟಾಗುವ ಪೀಡೆಗಳು, ಕಳ್ಳರು ಮತ್ತು ಬೆಂಕಿಯಿಂದ ಬರುವ ಆಪತ್ತುಗಳು — ಅವೆಲ್ಲವೂ ಶಮನವಾಗುತ್ತವೆ ಎಂದು ವ್ಯಾಸರು ಹೇಳುತ್ತಾರೆ; ಇದರಲ್ಲಿ ಸಂಶಯವಿಲ್ಲ.',
          },
        },
        {
          text: 'इति श्रीव्यासविरचितमादित्यादिनवग्रहस्तोत्रं सम्पूर्णम् ॥',
          meaning: {
            en: 'Thus ends the hymn to the nine grahas beginning with the Sun, composed by Sri Vyasa.',
            kn: 'ಹೀಗೆ ಶ್ರೀವ್ಯಾಸರು ರಚಿಸಿದ ಸೂರ್ಯಾದಿ ನವಗ್ರಹ ಸ್ತೋತ್ರ ಸಂಪೂರ್ಣವಾಯಿತು.',
          },
        },
      ],
    },
  ],
};
