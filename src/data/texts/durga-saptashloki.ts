// Śrī Durgā Saptaślokī. Collated Nov 2026; not yet checked line by line
// against a printed edition.
//
// The seven verses are taken from the Devī Māhātmya (Durgā Saptaśatī):
// 1.55, 4.17, 11.10, 11.12, 11.24, 11.29 and 11.39.
//
// Sources (independent digital witnesses):
//   A. Gita Press "Devī Stotra Ratnākara", no. 2 (sanskrit/raw_etexts, misc-gp):
//      base text.
//   B. stotranidhi.com, Devanagari page (from the printed "Prabhāta Stotranidhi").
//   C. Devī Māhātmya text in sanskrit/raw_etexts (peterFreund/durga_saptashati),
//      for the seven verses only.
//
// Differences resolved:
//   prelude देवि … विधायिनि (vocatives; A has विधायिनी, B has देवी)
//   v3 सर्वमङ्गलमाङ्गल्ये (B C) / सर्वमङ्गलमङ्गल्ये (A); गौरि (A C) / गौरी (B)
//   v7 सर्वाबाधाप्रशमनं (A C) / सर्वबाधा° (B)
// Anuṣṭubh half-verses scan 8 + 8; verses 2 and 6 are vasantatilakā and
// upajāti, as in the Devī Māhātmya.
import type { Mantra } from '../types';

export const durgaSaptashloki: Mantra = {
  id: 'durga-saptashloki',
  title: 'श्रीदुर्गासप्तश्लोकी',
  titleEn: 'Sri Durga Saptashloki',
  category: 'stotra',
  deity: 'Śrī Durgā',
  source: 'Seven verses of the Devī Māhātmya (Mārkaṇḍeya Purāṇa)',
  summary:
    'Seven verses gathered from the Devī Māhātmya, given by the Goddess to Śiva as an easy means of gaining every good in the Kali age. Reciting them is held to carry the blessing of the whole Durgā Saptaśatī.',
  summaryKn:
    'ದೇವೀಮಾಹಾತ್ಮ್ಯದಿಂದ ಆಯ್ದ ಏಳು ಶ್ಲೋಕಗಳು. ಕಲಿಯುಗದಲ್ಲಿ ಎಲ್ಲ ಇಷ್ಟಾರ್ಥಗಳನ್ನೂ ಸುಲಭವಾಗಿ ಸಾಧಿಸುವ ಉಪಾಯವಾಗಿ ದೇವಿಯು ಶಿವನಿಗೆ ಇವನ್ನು ತಿಳಿಸಿದಳು. ಇವುಗಳ ಪಠಣಕ್ಕೆ ಸಂಪೂರ್ಣ ದುರ್ಗಾಸಪ್ತಶತಿಯ ಫಲವಿದೆ ಎಂದು ನಂಬಿಕೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पूर्वपीठिका',
      titleEn: 'Prelude',
      verses: [
        {
          text: 'शिव उवाच ।',
        },
        {
          text: 'देवि त्वं भक्तसुलभे सर्वकार्यविधायिनि ।\nकलौ हि कार्यसिद्ध्यर्थमुपायं ब्रूहि यत्नतः ॥',
          meaning: {
            en: 'O Goddess, you are easily reached by your devotees and you bring every undertaking to completion. Tell me with care the means by which one may gain one’s ends in the Kali age.',
            kn: 'ದೇವಿ, ನೀನು ಭಕ್ತರಿಗೆ ಸುಲಭಳಾಗಿ ದೊರೆಯುವವಳು, ಎಲ್ಲ ಕಾರ್ಯಗಳನ್ನೂ ನೆರವೇರಿಸುವವಳು. ಕಲಿಯುಗದಲ್ಲಿ ಕಾರ್ಯಸಿದ್ಧಿಗಾಗಿ ಇರುವ ಉಪಾಯವನ್ನು ದಯವಿಟ್ಟು ತಿಳಿಸು.',
          },
        },
        {
          text: 'देव्युवाच ।',
        },
        {
          text: 'शृणु देव प्रवक्ष्यामि कलौ सर्वेष्टसाधनम् ।\nमया तवैव स्नेहेनाप्यम्बास्तुतिः प्रकाश्यते ॥',
          meaning: {
            en: 'Listen, O Lord, and I shall tell you the means of gaining every wish in the Kali age. Out of my love for you alone I now reveal this hymn to the Mother.',
            kn: 'ದೇವಾ, ಕೇಳು; ಕಲಿಯುಗದಲ್ಲಿ ಎಲ್ಲ ಇಷ್ಟಗಳನ್ನೂ ಸಾಧಿಸುವ ಉಪಾಯವನ್ನು ಹೇಳುತ್ತೇನೆ. ನಿನ್ನ ಮೇಲಿನ ಪ್ರೀತಿಯಿಂದಲೇ ಈ ಅಂಬಾಸ್ತುತಿಯನ್ನು ನಾನು ಪ್ರಕಟಿಸುತ್ತಿದ್ದೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'विनियोगः',
      titleEn: 'Viniyoga',
      note: 'Recited once before the seven verses, holding a little water in the right palm, which is then released.',
      noteKn: 'ಏಳು ಶ್ಲೋಕಗಳ ಮೊದಲು ಒಮ್ಮೆ, ಬಲ ಅಂಗೈಯಲ್ಲಿ ಸ್ವಲ್ಪ ನೀರನ್ನು ಹಿಡಿದು ಹೇಳಿ, ನಂತರ ನೀರನ್ನು ಬಿಡಬೇಕು.',
      verses: [
        {
          text: 'ॐ अस्य श्रीदुर्गासप्तश्लोकीस्तोत्रमन्त्रस्य नारायण ऋषिः ।\nअनुष्टुप् छन्दः । श्रीमहाकालीमहालक्ष्मीमहासरस्वत्यो देवताः ।\nश्रीदुर्गाप्रीत्यर्थं सप्तश्लोकीदुर्गापाठे विनियोगः ॥',
          meaning: {
            en: 'For this hymn of seven verses to Durgā, the seer is Nārāyaṇa, the metre is Anuṣṭubh, and the deities are Mahākālī, Mahālakṣmī and Mahāsarasvatī. It is recited to please Śrī Durgā.',
            kn: 'ಈ ದುರ್ಗಾಸಪ್ತಶ್ಲೋಕೀ ಸ್ತೋತ್ರಮಂತ್ರಕ್ಕೆ ನಾರಾಯಣನು ಋಷಿ, ಅನುಷ್ಟುಪ್ ಛಂದಸ್ಸು, ಮಹಾಕಾಳಿ ಮಹಾಲಕ್ಷ್ಮಿ ಮಹಾಸರಸ್ವತಿಯರು ದೇವತೆಗಳು. ಶ್ರೀದುರ್ಗೆಯ ಪ್ರೀತಿಗಾಗಿ ಇದರ ಪಾರಾಯಣ.',
          },
        },
      ],
    },
    {
      title: 'सप्तश्लोकी',
      titleEn: 'The Seven Verses',
      verses: [
        {
          n: 1,
          text: 'ज्ञानिनामपि चेतांसि देवी भगवती हि सा ।\nबलादाकृष्य मोहाय महामाया प्रयच्छति ॥',
          meaning: {
            en: 'The blessed Goddess Mahāmāyā forcibly draws away the minds even of the wise and casts them into delusion.',
            kn: 'ಭಗವತಿಯಾದ ಆ ಮಹಾಮಾಯಾದೇವಿಯು ಜ್ಞಾನಿಗಳ ಮನಸ್ಸುಗಳನ್ನೂ ಬಲವಂತವಾಗಿ ಸೆಳೆದು ಮೋಹದಲ್ಲಿ ಮುಳುಗಿಸುತ್ತಾಳೆ.',
          },
        },
        {
          n: 2,
          text: 'दुर्गे स्मृता हरसि भीतिमशेषजन्तोः\nस्वस्थैः स्मृता मतिमतीव शुभां ददासि ।\nदारिद्र्यदुःखभयहारिणि का त्वदन्या\nसर्वोपकारकरणाय सदार्द्रचित्ता ॥',
          meaning: {
            en: 'O Durgā, when remembered you take away the fear of every creature; remembered by those at peace, you grant a most auspicious understanding. Remover of poverty, sorrow and fear, who but you has a heart ever tender to do good to all?',
            kn: 'ದುರ್ಗೆಯೇ, ಸ್ಮರಿಸಿದಾಗ ನೀನು ಎಲ್ಲ ಜೀವಿಗಳ ಭಯವನ್ನು ಹೋಗಲಾಡಿಸುವೆ; ಸ್ವಸ್ಥಚಿತ್ತರು ಸ್ಮರಿಸಿದಾಗ ಅತ್ಯಂತ ಶುಭವಾದ ಬುದ್ಧಿಯನ್ನು ಕೊಡುವೆ. ಬಡತನ, ದುಃಖ, ಭಯಗಳನ್ನು ಹರಿಸುವವಳೇ, ಎಲ್ಲರಿಗೂ ಉಪಕಾರ ಮಾಡಲು ಸದಾ ಕರುಣೆಯಿಂದ ಕರಗುವ ಮನಸ್ಸು ನಿನ್ನ ಹೊರತು ಬೇರೆ ಯಾರಿಗಿದೆ?',
          },
        },
        {
          n: 3,
          text: 'सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके ।\nशरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते ॥',
          meaning: {
            en: 'O auspiciousness of all that is auspicious, gracious one who accomplishes every aim, our refuge, three-eyed Gaurī, Nārāyaṇī, salutations to you.',
            kn: 'ಎಲ್ಲ ಮಂಗಳಗಳ ಮಂಗಳರೂಪಳೇ, ಶಿವೆಯೇ, ಎಲ್ಲ ಪುರುಷಾರ್ಥಗಳನ್ನು ಸಾಧಿಸಿಕೊಡುವವಳೇ, ಶರಣು ನೀಡುವವಳೇ, ಮುಕ್ಕಣ್ಣಿಯಾದ ಗೌರಿಯೇ, ನಾರಾಯಣಿಯೇ, ನಿನಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          n: 4,
          text: 'शरणागतदीनार्तपरित्राणपरायणे ।\nसर्वस्यार्तिहरे देवि नारायणि नमोऽस्तु ते ॥',
          meaning: {
            en: 'O Goddess devoted to rescuing the helpless and the suffering who come to you for refuge, remover of everyone’s distress, Nārāyaṇī, salutations to you.',
            kn: 'ಶರಣಾಗತರಾದ ದೀನರನ್ನೂ ಆರ್ತರನ್ನೂ ಕಾಪಾಡುವುದರಲ್ಲೇ ತೊಡಗಿರುವವಳೇ, ಎಲ್ಲರ ಸಂಕಟವನ್ನು ಹರಿಸುವ ದೇವಿಯೇ, ನಾರಾಯಣಿಯೇ, ನಿನಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          n: 5,
          text: 'सर्वस्वरूपे सर्वेशे सर्वशक्तिसमन्विते ।\nभयेभ्यस्त्राहि नो देवि दुर्गे देवि नमोऽस्तु ते ॥',
          meaning: {
            en: 'You who are the form of all, the ruler of all, possessed of every power: protect us from all fears, O Goddess. O Goddess Durgā, salutations to you.',
            kn: 'ಸರ್ವಸ್ವರೂಪಳೇ, ಸರ್ವೇಶ್ವರಿಯೇ, ಎಲ್ಲ ಶಕ್ತಿಗಳಿಂದ ಕೂಡಿದವಳೇ, ದೇವಿ, ಭಯಗಳಿಂದ ನಮ್ಮನ್ನು ಕಾಪಾಡು. ದುರ್ಗಾದೇವಿಯೇ, ನಿನಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          n: 6,
          text: 'रोगानशेषानपहंसि तुष्टा\nरुष्टा तु कामान्सकलानभीष्टान् ।\nत्वामाश्रितानां न विपन्नराणां\nत्वामाश्रिता ह्याश्रयतां प्रयान्ति ॥',
          meaning: {
            en: 'When pleased you destroy every illness; when angered you take away all cherished desires. Those who rely on you meet no calamity, and those who take refuge in you become a refuge for others.',
            kn: 'ನೀನು ಸಂತುಷ್ಟಳಾದರೆ ಎಲ್ಲ ರೋಗಗಳನ್ನೂ ನಾಶಮಾಡುವೆ; ಕೋಪಗೊಂಡರೆ ಬಯಸಿದ ಎಲ್ಲ ಕಾಮನೆಗಳನ್ನೂ ಕಸಿದುಕೊಳ್ಳುವೆ. ನಿನ್ನನ್ನು ಆಶ್ರಯಿಸಿದ ಮನುಷ್ಯರಿಗೆ ವಿಪತ್ತು ಬರುವುದಿಲ್ಲ; ನಿನ್ನ ಆಶ್ರಯ ಪಡೆದವರು ಇತರರಿಗೇ ಆಶ್ರಯರಾಗುತ್ತಾರೆ.',
          },
        },
        {
          n: 7,
          text: 'सर्वाबाधाप्रशमनं त्रैलोक्यस्याखिलेश्वरि ।\nएवमेव त्वया कार्यमस्मद्वैरिविनाशनम् ॥',
          meaning: {
            en: 'O Queen of all, in just this way you must still every affliction of the three worlds and destroy our enemies.',
            kn: 'ಅಖಿಲೇಶ್ವರಿಯೇ, ಇದೇ ರೀತಿ ನೀನು ಮೂರು ಲೋಕಗಳ ಎಲ್ಲ ಬಾಧೆಗಳನ್ನೂ ಶಮನಗೊಳಿಸಬೇಕು, ನಮ್ಮ ಶತ್ರುಗಳನ್ನು ನಾಶಮಾಡಬೇಕು.',
          },
        },
        {
          text: 'इति श्रीसप्तश्लोकी दुर्गा सम्पूर्णा ॥',
        },
      ],
    },
  ],
};
