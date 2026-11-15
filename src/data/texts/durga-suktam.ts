/**
 * Durga Suktam: Taittiriya Aranyaka 10 (Mahanarayana Upanishad), the Durga
 * anuvaka, with the Durga Gayatri of TA 10.1.
 *
 * Sources collated (Nov 2026):
 * - Taittiriya Aranyaka with Sayana's commentary (Anandashrama ed., vol. 2,
 *   archive.org scan, OCR checked by eye): verses 1-6 in the first anuvaka of
 *   prapathaka 10, and the same anuvaka with verse 7 (गोभिर्जुष्टम्…) as anuvaka 2.
 * - Taittiriya Aranyaka (Andhra recension, saswara) on sa.wikisource
 *   (तैत्तिरीय-आरण्यकम्), and the Mahadeva Sastri ed. with Bhatta Bhaskara
 *   (Mysore 1900, archive.org scan): verses 1-6 only.
 * - Mahanarayana Upanishad text of sanskritdocuments (as on sa.wikisource and the
 *   eBharati / Tirupati copy), stotranidhi.com, and the stotrasamhita
 *   vedamantra-book (DurgaSuktam.tex): all seven verses and the Gayatri.
 * - Rigveda (GRETIL, ed. Aufrecht) for verses 1 (RV 1.99.1), 3 (RV 1.189.2) and
 *   4 (RV 5.4.9, which reads नमसा where the Aranyaka has मनसा).
 * Readings: verse 5 सहमानमुग्रमग्निं with Sayana, stotranidhi and stotrasamhita
 * (the Andhra text on Wikisource has सहमानमग्निमुग्रं). Svaras omitted.
 */
import type { Mantra } from '../types';

export const durgaSuktam: Mantra = {
  id: 'durga-suktam',
  title: 'दुर्गासूक्तम्',
  titleEn: 'Durga Suktam',
  category: 'vedic',
  deity: 'Durga (Agni Jatavedas)',
  source: 'Taittiriya Aranyaka 10.1-2 (Mahanarayana Upanishad)',
  summary:
    'Seven mantras from the Mahanarayana Upanishad praying to Agni Jatavedas and to the goddess Durga, the fire-bright one who carries her devotees across all difficulties as a boat carries one across a river. It is recited for protection in danger and closes with the Durga Gayatri. In the Madhva tradition Durga is understood as a form of Lakshmi, the consort of Hari.',
  summaryKn:
    'ಮಹಾನಾರಾಯಣ ಉಪನಿಷತ್ತಿನ ಏಳು ಮಂತ್ರಗಳು. ಜಾತವೇದಸನಾದ ಅಗ್ನಿಯನ್ನೂ, ದೋಣಿಯು ನದಿಯನ್ನು ದಾಟಿಸುವಂತೆ ಭಕ್ತರನ್ನು ಎಲ್ಲ ಕಷ್ಟಗಳಿಂದ ದಾಟಿಸುವ ಅಗ್ನಿವರ್ಣೆಯಾದ ದುರ್ಗಾದೇವಿಯನ್ನೂ ಇವು ಪ್ರಾರ್ಥಿಸುತ್ತವೆ. ಆಪತ್ತಿನಲ್ಲಿ ರಕ್ಷಣೆಗಾಗಿ ಇದನ್ನು ಪಠಿಸುತ್ತಾರೆ; ದುರ್ಗಾ ಗಾಯತ್ರಿಯೊಂದಿಗೆ ಇದು ಮುಗಿಯುತ್ತದೆ. ಮಾಧ್ವ ಸಂಪ್ರದಾಯದಲ್ಲಿ ದುರ್ಗೆಯನ್ನು ಶ್ರೀಹರಿಯ ಪತ್ನಿಯಾದ ಲಕ್ಷ್ಮಿಯ ರೂಪವೆಂದು ತಿಳಿಯುತ್ತಾರೆ.',
  difficulty: 'medium',
  completeness: 'complete',
  sections: [
    {
      title: 'दुर्गासूक्तम्',
      titleEn: 'Durga Suktam',
      note: 'Verse 7 is found in Sayana\'s text and in the recitation books, but not in the Andhra recension of the Aranyaka, where the anuvaka ends with verse 6.',
      noteKn: 'ಏಳನೆಯ ಮಂತ್ರವು ಸಾಯಣರ ಪಾಠದಲ್ಲಿಯೂ ಪಾರಾಯಣ ಪುಸ್ತಕಗಳಲ್ಲಿಯೂ ಇದೆ; ಆರಣ್ಯಕದ ಆಂಧ್ರ ಪಾಠದಲ್ಲಿ ಈ ಅನುವಾಕವು ಆರನೆಯ ಮಂತ್ರಕ್ಕೇ ಮುಗಿಯುತ್ತದೆ.',
      verses: [
        {
          n: 1,
          text: 'जातवेदसे सुनवाम सोममरातीयतो निदहाति वेदः ।\nस नः पर्षदति दुर्गाणि विश्वा नावेव सिन्धुं दुरितात्यग्निः ॥',
          meaning: {
            en: 'For Jatavedas, the all-knowing Fire, let us press out the Soma; may he burn away the wealth of those who are hostile to us. May that Agni carry us across all difficulties and beyond all evils, as a boat carries one across a river.',
            kn: 'ಎಲ್ಲವನ್ನೂ ಬಲ್ಲ ಜಾತವೇದಸನಾದ ಅಗ್ನಿಗಾಗಿ ಸೋಮವನ್ನು ಹಿಂಡೋಣ; ನಮ್ಮನ್ನು ದ್ವೇಷಿಸುವವರ ಸಂಪತ್ತನ್ನು ಅವನು ಸುಟ್ಟುಹಾಕಲಿ. ದೋಣಿಯು ನದಿಯನ್ನು ದಾಟಿಸುವಂತೆ ಆ ಅಗ್ನಿಯು ನಮ್ಮನ್ನು ಎಲ್ಲ ಕಷ್ಟಗಳಿಂದಲೂ ಪಾಪಗಳಿಂದಲೂ ಪಾರುಮಾಡಲಿ.',
          },
        },
        {
          n: 2,
          text: 'तामग्निवर्णां तपसा ज्वलन्तीं वैरोचनीं कर्मफलेषु जुष्टाम् ।\nदुर्गां देवीं शरणमहं प्रपद्ये सुतरसि तरसे नमः ॥',
          meaning: {
            en: 'I take refuge in the goddess Durga, who has the colour of fire, who blazes with her own power, who shines with radiance and is sought for the fruits of all actions. O you who carry us safely across, salutation to you who take us across.',
            kn: 'ಅಗ್ನಿಯ ಬಣ್ಣವುಳ್ಳವಳೂ, ತನ್ನ ತಪಸ್ಸಿನ ತೇಜಸ್ಸಿನಿಂದ ಜ್ವಲಿಸುವವಳೂ, ಕಾಂತಿಯಿಂದ ಬೆಳಗುವವಳೂ, ಕರ್ಮಫಲಗಳಿಗಾಗಿ ಎಲ್ಲರೂ ಆಶ್ರಯಿಸುವವಳೂ ಆದ ದುರ್ಗಾದೇವಿಯನ್ನು ನಾನು ಶರಣು ಹೊಂದುತ್ತೇನೆ. ಸುಲಭವಾಗಿ ದಾಟಿಸುವವಳೇ, ದಾಟಿಸುವ ನಿನಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          n: 3,
          text: 'अग्ने त्वं पारया नव्यो अस्मान्स्वस्तिभिरति दुर्गाणि विश्वा ।\nपूश्च पृथ्वी बहुला न उर्वी भवा तोकाय तनयाय शं योः ॥',
          meaning: {
            en: 'O Agni, ever to be praised anew, take us across all difficulties with blessings. Be for us a wide stronghold and a broad, ample land, and bring welfare and health to our children and their children.',
            kn: 'ಸದಾ ಹೊಸದಾಗಿ ಸ್ತುತಿಸಲ್ಪಡುವ ಅಗ್ನಿಯೇ, ಮಂಗಳಗಳೊಂದಿಗೆ ನಮ್ಮನ್ನು ಎಲ್ಲ ಕಷ್ಟಗಳಿಂದ ದಾಟಿಸು. ನಮಗೆ ವಿಶಾಲವಾದ ಕೋಟೆಯೂ ವಿಸ್ತಾರವಾದ ಭೂಮಿಯೂ ಆಗು; ನಮ್ಮ ಮಕ್ಕಳಿಗೂ ಮೊಮ್ಮಕ್ಕಳಿಗೂ ಸುಖವನ್ನೂ ಆರೋಗ್ಯವನ್ನೂ ನೀಡು.',
          },
        },
        {
          n: 4,
          text: 'विश्वानि नो दुर्गहा जातवेदः सिन्धुं न नावा दुरितातिपर्षि ।\nअग्ने अत्रिवन्मनसा गृणानोऽस्माकं बोध्यविता तनूनाम् ॥',
          meaning: {
            en: 'O Jatavedas, destroyer of difficulties, you carry us across all evils as a boat carries one across a river. O Agni, holding us in your mind as you held the sage Atri, be the protector of our bodies.',
            kn: 'ಕಷ್ಟಗಳನ್ನು ನಾಶಮಾಡುವ ಜಾತವೇದಸನೇ, ದೋಣಿಯಿಂದ ನದಿಯನ್ನು ದಾಟಿಸುವಂತೆ ನೀನು ನಮ್ಮನ್ನು ಎಲ್ಲ ಪಾಪಗಳಿಂದ ದಾಟಿಸುತ್ತೀಯೆ. ಅಗ್ನಿಯೇ, ಅತ್ರಿ ಮಹರ್ಷಿಯನ್ನು ಕಾಪಾಡಿದಂತೆ ನಮ್ಮನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ನೆನೆದು ನಮ್ಮ ದೇಹಗಳ ರಕ್ಷಕನಾಗು.',
          },
        },
        {
          n: 5,
          text: 'पृतनाजितं सहमानमुग्रमग्निं हुवेम परमात्सधस्थात् ।\nस नः पर्षदति दुर्गाणि विश्वा क्षामद्देवो अति दुरितात्यग्निः ॥',
          meaning: {
            en: 'From his highest abode we call upon Agni, the fierce one, conqueror of hosts, who overpowers every foe. May that god Agni carry us across all difficulties, forgive our faults and take us beyond all evils.',
            kn: 'ಶತ್ರುಸೈನ್ಯಗಳನ್ನು ಗೆಲ್ಲುವ, ಎಲ್ಲರನ್ನೂ ಸೋಲಿಸುವ, ಉಗ್ರನಾದ ಅಗ್ನಿಯನ್ನು ಅವನ ಪರಮ ಸ್ಥಾನದಿಂದ ನಾವು ಆಹ್ವಾನಿಸುತ್ತೇವೆ. ಆ ಅಗ್ನಿದೇವನು ನಮ್ಮನ್ನು ಎಲ್ಲ ಕಷ್ಟಗಳಿಂದ ದಾಟಿಸಲಿ, ನಮ್ಮ ತಪ್ಪುಗಳನ್ನು ಕ್ಷಮಿಸಲಿ, ಎಲ್ಲ ಪಾಪಗಳನ್ನು ದಾಟಿಸಲಿ.',
          },
        },
        {
          n: 6,
          text: 'प्रत्नोषि कमीड्यो अध्वरेषु सनाच्च होता नव्यश्च सत्सि ।\nस्वां चाग्ने तनुवं पिप्रयस्वास्मभ्यं च सौभगमायजस्व ॥',
          meaning: {
            en: 'Praised in the sacrifices, you spread happiness; you take your seat as the priest, ancient and ever new. O Agni, be pleased in your own form, and win for us good fortune through the sacrifice.',
            kn: 'ಯಜ್ಞಗಳಲ್ಲಿ ಸ್ತುತಿಸಲ್ಪಡುವ ನೀನು ಸುಖವನ್ನು ಹರಡುತ್ತೀಯೆ; ಪ್ರಾಚೀನನೂ ನಿತ್ಯನೂತನನೂ ಆದ ಹೋತೃವಾಗಿ ನೀನು ಯಜ್ಞದಲ್ಲಿ ಕುಳಿತುಕೊಳ್ಳುತ್ತೀಯೆ. ಅಗ್ನಿಯೇ, ನಿನ್ನ ಸ್ವರೂಪದಲ್ಲಿ ನೀನು ಸಂತೃಪ್ತನಾಗು; ಯಜ್ಞದ ಮೂಲಕ ನಮಗೆ ಸೌಭಾಗ್ಯವನ್ನು ತಂದುಕೊಡು.',
          },
        },
        {
          n: 7,
          text: 'गोभिर्जुष्टमयुजो निषिक्तं तवेन्द्र विष्णोरनुसञ्चरेम ।\nनाकस्य पृष्ठमभि संवसानो वैष्णवीं लोक इह मादयन्ताम् ॥',
          meaning: {
            en: 'O Indra, may we, untouched by sorrow, ever follow you and the all-pervading Vishnu, blessed with cattle and showered with plenty. May the gods who dwell upon the vault of heaven gladden us here in this world of Vishnu.',
            kn: 'ಇಂದ್ರನೇ, ದುಃಖದ ಸಂಪರ್ಕವಿಲ್ಲದೆ, ಗೋಸಂಪತ್ತಿನಿಂದ ಕೂಡಿ, ಸಮೃದ್ಧಿಯಿಂದ ತುಂಬಿದವರಾಗಿ ನಾವು ನಿನ್ನನ್ನೂ ಸರ್ವವ್ಯಾಪಿಯಾದ ವಿಷ್ಣುವನ್ನೂ ಸದಾ ಅನುಸರಿಸೋಣ. ಸ್ವರ್ಗದ ಶಿಖರದಲ್ಲಿ ನೆಲೆಸಿರುವ ದೇವತೆಗಳು ವಿಷ್ಣುವಿನ ಈ ಲೋಕದಲ್ಲಿ ನಮ್ಮನ್ನು ಆನಂದಪಡಿಸಲಿ.',
          },
        },
      ],
    },
    {
      title: 'दुर्गागायत्री',
      titleEn: 'Durga Gayatri',
      verses: [
        {
          text: 'ॐ कात्यायनाय विद्महे कन्यकुमारि धीमहि ।\nतन्नो दुर्गिः प्रचोदयात् ॥\nॐ शान्तिः शान्तिः शान्तिः ॥',
          meaning: {
            en: 'Om. May we know Katyayani; may we meditate on the virgin goddess Kanyakumari. May that Durga inspire and guide us. Om, peace, peace, peace.',
            kn: 'ಓಂ. ಕಾತ್ಯಾಯನಿಯನ್ನು ನಾವು ಅರಿಯೋಣ; ಕನ್ಯಾಕುಮಾರಿಯಾದ ದೇವಿಯನ್ನು ಧ್ಯಾನಿಸೋಣ. ಆ ದುರ್ಗೆಯು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸಲಿ. ಓಂ ಶಾಂತಿಃ ಶಾಂತಿಃ ಶಾಂತಿಃ.',
          },
        },
      ],
    },
  ],
};
