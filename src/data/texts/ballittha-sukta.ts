/**
 * Balittha Sūkta: Ṛgveda 1.141.
 *
 * Sources:
 * - Base: bhavykhatri/DharmicData (GitHub, ODbL), Ṛgveda maṇḍala 1, from the
 *   Vedic Heritage Portal. Svaras stripped.
 * - Witness: GRETIL, Ṛgveda-Saṃhitā ed. Aufrecht.
 * Collation found no textual differences, only spelling (anusvāra before m,
 * m̐; GRETIL divides बळित्था as bal̤ itthā). Verse 12: नेषतमैरमूरोऽग्निर्
 * (the dataset's detached avagraha joined).
 * Meanings: plain sense (Agni); for ṛks 1–2, the Mādhva reading (the three forms
 * of Vāyu: Hanumān, Bhīma, Madhva as Daśapramati).
 */
import type { Mantra } from '../types';

export const ballitthaSukta: Mantra = {
  id: "ballittha-sukta",
  title: "बळित्थासूक्तम्",
  titleEn: "Balittha Sukta",
  category: "vedic",
  deity: "Agni; Vāyu (Mādhva reading)",
  source: "Ṛgveda 1.141",
  summary: "Ṛgveda 1.141, a hymn of Dīrghatamas Aucathya, in its plain sense addressed to Agni. Following Śrī Madhvācārya, the Mādhva tradition reads its first two ṛks as revealing the three avatāras of Vāyu: Hanumān, Bhīmasena and Madhvācārya himself, here called Daśapramati. For this reason it is recited with special reverence in the Dvaita tradition.",
  summaryKn: "ದೀರ್ಘತಮಸ್ ಔಚಥ್ಯ ಋಷಿಯ ಋಗ್ವೇದ ಸೂಕ್ತ (೧.೧೪೧); ಸಾಮಾನ್ಯ ಅರ್ಥದಲ್ಲಿ ಇದು ಅಗ್ನಿಯ ಸ್ತುತಿ. ಶ್ರೀಮಧ್ವಾಚಾರ್ಯರನ್ನು ಅನುಸರಿಸಿ ಮಾಧ್ವ ಸಂಪ್ರದಾಯವು ಇದರ ಮೊದಲ ಎರಡು ಋಕ್ಕುಗಳಲ್ಲಿ ವಾಯುದೇವರ ಮೂರು ಅವತಾರಗಳನ್ನು ಕಾಣುತ್ತದೆ: ಹನುಮಂತ, ಭೀಮಸೇನ ಮತ್ತು ಇಲ್ಲಿ ‘ದಶಪ್ರಮತಿ’ ಎಂದು ಕರೆಯಲ್ಪಡುವ ಶ್ರೀಮಧ್ವಾಚಾರ್ಯರು. ಆದ್ದರಿಂದ ದ್ವೈತ ಸಂಪ್ರದಾಯದಲ್ಲಿ ಇದನ್ನು ವಿಶೇಷ ಭಕ್ತಿಯಿಂದ ಪಠಿಸುತ್ತಾರೆ.",
  difficulty: "advanced",
  completeness: "complete",
  sections: [
    {
      title: "ऋग्वेदः १.१४१",
      titleEn: "Ṛgveda 1.141",
      verses: [
        {
          n: 1,
          text: "बळित्था तद् वपुषे धायि दर्शतं देवस्य भर्गः सहसो यतो जनि ।\nयदीमुप ह्वरते साधते मतिर्ऋतस्य धेना अनयन्त सस्रुतः ॥",
          meaning: {
            en: "Truly that wondrous form of the god was set forth to be seen, his splendour born of strength; when thought draws near to him and is fulfilled, the streams of truth flow forth. In the Mādhva reading, this praises the first, glorious form of Vāyu, Hanumān, taken up for the service of the Lord.",
            kn: "ದೇವನ ಆ ಅದ್ಭುತವಾದ, ನೋಡಲು ಸುಂದರವಾದ ರೂಪವು ನಿಜವಾಗಿಯೂ ಪ್ರಕಟವಾಯಿತು; ಅವನ ತೇಜಸ್ಸು ಬಲದಿಂದ ಹುಟ್ಟಿದ್ದು. ಬುದ್ಧಿಯು ಅವನನ್ನು ಸಮೀಪಿಸಿ ಸಫಲವಾದಾಗ ಸತ್ಯದ ವಾಣಿಗಳು ಹರಿದುಬರುತ್ತವೆ. ಮಾಧ್ವ ಸಂಪ್ರದಾಯದಲ್ಲಿ ಇದು ಭಗವಂತನ ಸೇವೆಗಾಗಿ ತಾಳಿದ ವಾಯುದೇವರ ಮೊದಲ ರೂಪವಾದ ಹನುಮಂತನ ಸ್ತುತಿ.",
          },
        },
        {
          n: 2,
          text: "पृक्षो वपुः पितुमान् नित्य आ शये द्वितीयमा सप्तशिवासु मातृषु ।\nतृतीयमस्य वृषभस्य दोहसे दशप्रमतिं जनयन्त योषणः ॥",
          meaning: {
            en: "His first form, strong and rich in food, abides for ever; the second is among the seven auspicious mothers; the third form of this bull the young women brought forth, to draw out the essence, as Daśapramati. In the Mādhva reading these are the three forms of Vāyu: Hanumān, ever-living; Bhīmasena; and Śrī Madhvācārya, named Daśapramati, born to draw out the true meaning of the Vedas.",
            kn: "ಬಲಶಾಲಿಯೂ ಅನ್ನಸಮೃದ್ಧನೂ ಆದ ಅವನ ಮೊದಲ ರೂಪವು ನಿತ್ಯವಾಗಿ ನೆಲಸಿದೆ; ಎರಡನೆಯದು ಏಳು ಮಂಗಳಕರ ಮಾತೆಯರ ನಡುವೆ; ಈ ವೃಷಭನ ಮೂರನೆಯ ರೂಪವನ್ನು ಸಾರವನ್ನು ಹೊರತೆಗೆಯಲು ದಶಪ್ರಮತಿಯಾಗಿ ಹುಟ್ಟಿಸಿದರು. ಮಾಧ್ವ ಸಂಪ್ರದಾಯದಲ್ಲಿ ಇವು ವಾಯುದೇವರ ಮೂರು ಅವತಾರಗಳು: ಚಿರಂಜೀವಿಯಾದ ಹನುಮಂತ, ಭೀಮಸೇನ, ಮತ್ತು ವೇದಗಳ ನಿಜವಾದ ಅರ್ಥವನ್ನು ಹೊರತರಲು ಅವತರಿಸಿದ ‘ದಶಪ್ರಮತಿ’ ಎಂಬ ಹೆಸರಿನ ಶ್ರೀಮಧ್ವಾಚಾರ್ಯರು.",
          },
        },
        {
          n: 3,
          text: "निर्यदीं बुध्नान्महिषस्य वर्पस ईशानासः शवसा क्रन्त सूरयः ।\nयदीमनु प्रदिवो मध्व आधवे गुहा सन्तं मातरिश्वा मथायति ॥",
          meaning: {
            en: "When the wise, mighty in strength, brought him forth from the depths of the great one's form, and Mātariśvan churned out him who lay hidden in the cave, to mingle the ancient honey.",
            kn: "ಬಲಶಾಲಿಗಳಾದ ಜ್ಞಾನಿಗಳು ಮಹಾತ್ಮನ ರೂಪದ ಆಳದಿಂದ ಅವನನ್ನು ಹೊರತಂದಾಗ, ಗುಹೆಯಲ್ಲಿ ಅಡಗಿದ್ದ ಅವನನ್ನು ಮಾತರಿಶ್ವನು ಪ್ರಾಚೀನ ಮಧುವನ್ನು ಬೆರೆಸಲು ಮಥಿಸಿ ಹೊರತರುತ್ತಾನೆ.",
          },
        },
        {
          n: 4,
          text: "प्र यत् पितुः परमान्नीयते पर्या पृक्षुधो वीरुधो दंसु रोहति ।\nउभा यदस्य जनुषं यदिन्वत आदिद् यविष्ठो अभवद् घृणा शुचिः ॥",
          meaning: {
            en: "When he is led forth from the highest father, he climbs the eager plants in their homes; when both his parents further his birth, the youngest became radiant and pure.",
            kn: "ಪರಮಪಿತನಿಂದ ಅವನನ್ನು ಹೊರತಂದಾಗ ಅವನು ಸಸ್ಯಗಳ ಮೇಲೆ ಏರುತ್ತಾನೆ; ತಂದೆತಾಯಿಯರಿಬ್ಬರೂ ಅವನ ಜನ್ಮವನ್ನು ಪೋಷಿಸಿದಾಗ ಆ ಕಿರಿಯನು ಕಾಂತಿಯಿಂದ ಶುದ್ಧನಾಗಿ ಪ್ರಜ್ವಲಿಸಿದನು.",
          },
        },
        {
          n: 5,
          text: "आदिन्मातॄराविशद् यास्वा शुचिरहिंस्यमान उर्विया वि वावृधे ।\nअनु यत् पूर्वा अरुहत् सनाजुवो नि नव्यसीष्ववरासु धावते ॥",
          meaning: {
            en: "Then the pure one entered the mothers and, unharmed, grew wide; as he climbed the ancient swift ones, he runs on among the younger, lower ones.",
            kn: "ಆಗ ಶುದ್ಧನಾದ ಅವನು ಮಾತೆಯರನ್ನು ಪ್ರವೇಶಿಸಿ, ಹಾನಿಯಿಲ್ಲದೆ ವಿಶಾಲವಾಗಿ ಬೆಳೆದನು; ಪ್ರಾಚೀನರಾದವರನ್ನು ಏರಿ, ಹೊಸ ಕೆಳಗಿನವುಗಳ ನಡುವೆ ಹರಿಯುತ್ತಾನೆ.",
          },
        },
        {
          n: 6,
          text: "आदिद्धोतारं वृणते दिविष्टिषु भगमिव पपृचानास ऋञ्जते ।\nदेवान् यत् क्रत्वा मज्मना पुरुष्टुतो मर्तं शंसं विश्वधा वेति धायसे ॥",
          meaning: {
            en: "Then they choose him as priest at their sacrifices and adorn him like Bhaga; the much-praised one, by his power and might, goes to the gods and to the praise of mortals, for their sustenance.",
            kn: "ಆಗ ಯಜ್ಞಗಳಲ್ಲಿ ಅವನನ್ನು ಹೋತೃವನ್ನಾಗಿ ಆರಿಸುತ್ತಾರೆ; ಭಗನಂತೆ ಅವನನ್ನು ಅಲಂಕರಿಸುತ್ತಾರೆ. ಅನೇಕರಿಂದ ಸ್ತುತಿಸಲ್ಪಡುವ ಅವನು ತನ್ನ ಶಕ್ತಿಯಿಂದ ದೇವತೆಗಳ ಬಳಿಗೂ ಮನುಷ್ಯರ ಸ್ತುತಿಯ ಬಳಿಗೂ ಪೋಷಣೆಗಾಗಿ ಹೋಗುತ್ತಾನೆ.",
          },
        },
        {
          n: 7,
          text: "वि यदस्थाद् यजतो वातचोदितो ह्वारो न वक्वा जरणा अनाकृतः ।\nतस्य पत्मन् दक्षुषः कृष्णजंहसः शुचिजन्मनो रज आ व्यध्वनः ॥",
          meaning: {
            en: "When the holy one, driven by the wind, spreads out unchecked, then in the flight of the blazing one with the black track, born pure, the whole air resounds.",
            kn: "ಗಾಳಿಯಿಂದ ಪ್ರೇರಿತನಾದ ಪೂಜ್ಯನು ತಡೆಯಿಲ್ಲದೆ ಎಲ್ಲೆಡೆ ಹರಡಿದಾಗ, ಕಪ್ಪು ದಾರಿಯನ್ನು ಬಿಡುವ, ಶುದ್ಧನಾಗಿ ಹುಟ್ಟಿದ ಆ ದಹಿಸುವವನ ಹಾರಾಟದಲ್ಲಿ ಆಕಾಶವೆಲ್ಲ ಮೊಳಗುತ್ತದೆ.",
          },
        },
        {
          n: 8,
          text: "रथो न यातः शिक्वभिः कृतो द्यामङ्गेभिररुषेभिरीयते ।\nआदस्य ते कृष्णासो दक्षि सूरयः शूरस्येव त्वेषथादीषते वयः ॥",
          meaning: {
            en: "Like a chariot made by skilled hands, he rises to heaven with ruddy limbs; when he burns, his tracks turn black, and creatures flee from his blaze as from a hero's onset.",
            kn: "ಕುಶಲರು ಮಾಡಿದ ರಥದಂತೆ ಅವನು ಕೆಂಪಾದ ಅಂಗಗಳೊಡನೆ ಆಕಾಶಕ್ಕೆ ಏರುತ್ತಾನೆ; ಅವನು ಸುಟ್ಟಾಗ ಅವನ ದಾರಿಗಳು ಕಪ್ಪಾಗುತ್ತವೆ; ವೀರನ ದಾಳಿಗೆ ಹೆದರಿದಂತೆ ಜೀವಿಗಳು ಅವನ ಜ್ವಾಲೆಯಿಂದ ದೂರ ಓಡುತ್ತವೆ.",
          },
        },
        {
          n: 9,
          text: "त्वया ह्यग्ने वरुणो धृतव्रतो मित्रः शाशद्रे अर्यमा सुदानवः ।\nयत् सीमनु क्रतुना विश्वथा विभुररान्न नेमिः परिभूरजायथाः ॥",
          meaning: {
            en: "Through you, O Agni, Varuṇa of firm vows, Mitra and Aryaman, the generous ones, triumph; for you, all-pervading, have encompassed them by your power, as the rim does the spokes.",
            kn: "ಅಗ್ನಿಯೇ, ನಿನ್ನಿಂದಲೇ ದೃಢವ್ರತನಾದ ವರುಣ, ಮಿತ್ರ ಮತ್ತು ಅರ್ಯಮರು ಜಯಶಾಲಿಗಳಾಗುತ್ತಾರೆ; ಏಕೆಂದರೆ ಚಕ್ರದ ಅಂಚು ಅರಗಳನ್ನು ಸುತ್ತುವರಿಯುವಂತೆ ಸರ್ವವ್ಯಾಪಿಯಾದ ನೀನು ನಿನ್ನ ಶಕ್ತಿಯಿಂದ ಅವರನ್ನು ಆವರಿಸಿದ್ದೀಯೆ.",
          },
        },
        {
          n: 10,
          text: "त्वमग्ने शशमानाय सुन्वते रत्नं यविष्ठ देवतातिमिन्वसि ।\nतं त्वा नु नव्यं सहसो युवन् वयं भगं न कारे महिरत्न धीमहि ॥",
          meaning: {
            en: "O youngest Agni, you bring treasure and divine favour to the one who toils and presses the soma. You, ever new, son of strength, rich in jewels, we hold in mind like Bhaga at the contest.",
            kn: "ಕಿರಿಯನಾದ ಅಗ್ನಿಯೇ, ಶ್ರಮಿಸುವ ಸೋಮಯಾಜಿಗೆ ನೀನು ರತ್ನವನ್ನೂ ದೈವಾನುಗ್ರಹವನ್ನೂ ತರುತ್ತೀಯೆ. ಬಲದ ಪುತ್ರನೇ, ರತ್ನಸಮೃದ್ಧನೇ, ನಿತ್ಯನೂತನನಾದ ನಿನ್ನನ್ನು ಭಗನಂತೆ ನಮ್ಮ ಮನಸ್ಸಿನಲ್ಲಿ ಧ್ಯಾನಿಸುತ್ತೇವೆ.",
          },
        },
        {
          n: 11,
          text: "अस्मे रयिं न स्वर्थं दमूनसं भगं दक्षं न पपृचासि धर्णसिम् ।\nरश्मीँरिव यो यमति जन्मनी उभे देवानां शंसमृत आ च सुक्रतुः ॥",
          meaning: {
            en: "Bring us wealth well won and devoted to the home, fortune and lasting skill; you who hold both worlds like reins, and uphold the praise of the gods at the sacrifice, O wise one.",
            kn: "ಮನೆಗೆ ಹಿತವಾದ ಸಂಪತ್ತನ್ನೂ ಭಾಗ್ಯವನ್ನೂ ಸ್ಥಿರವಾದ ಕೌಶಲವನ್ನೂ ನಮಗೆ ಕೊಡು. ಕಡಿವಾಣಗಳಂತೆ ಎರಡೂ ಲೋಕಗಳನ್ನು ನಿಯಂತ್ರಿಸುವವನೇ, ಸತ್ಕರ್ಮಿಯೇ, ಯಜ್ಞದಲ್ಲಿ ದೇವತೆಗಳ ಸ್ತುತಿಯನ್ನು ಎತ್ತಿಹಿಡಿಯುವವನು ನೀನು.",
          },
        },
        {
          n: 12,
          text: "उत नः सुद्योत्मा जीराश्वो होता मन्द्रः शृणवच्चन्द्ररथः ।\nस नो नेषन्नेषतमैरमूरो ऽग्निर्वामं सुवितं वस्यो अच्छ ॥",
          meaning: {
            en: "May the bright-shining priest with swift horses and gleaming chariot, the joyful one, hear us; may wise, unerring Agni lead us by the best paths to what is precious, good and better.",
            kn: "ಪ್ರಕಾಶಮಾನನೂ ವೇಗದ ಕುದುರೆಗಳುಳ್ಳವನೂ ಹೊಳೆಯುವ ರಥದವನೂ ಆನಂದದಾಯಕನೂ ಆದ ಹೋತೃವು ನಮ್ಮ ಪ್ರಾರ್ಥನೆಯನ್ನು ಕೇಳಲಿ. ಮೋಹವಿಲ್ಲದ ಜ್ಞಾನಿಯಾದ ಅಗ್ನಿಯು ಉತ್ತಮ ಮಾರ್ಗಗಳಿಂದ ನಮ್ಮನ್ನು ಶ್ರೇಷ್ಠವಾದ, ಮಂಗಳಕರವಾದ ಸಂಪತ್ತಿನ ಕಡೆಗೆ ಕರೆದೊಯ್ಯಲಿ.",
          },
        },
        {
          n: 13,
          text: "अस्ताव्यग्निः शिमीवद्भिरर्कैः साम्राज्याय प्रतरं दधानः ।\nअमी च ये मघवानो वयं च मिहं न सूरो अति निष्टतन्युः ॥",
          meaning: {
            en: "Agni has been praised with mighty songs, holding sovereignty ever higher. May these patrons and we ourselves spread forth, as the sun spreads the mist.",
            kn: "ಶಕ್ತಿಯುತ ಸ್ತೋತ್ರಗಳಿಂದ ಅಗ್ನಿಯು ಸ್ತುತಿಸಲ್ಪಟ್ಟಿದ್ದಾನೆ; ಅವನು ಸಾಮ್ರಾಜ್ಯವನ್ನು ಇನ್ನಷ್ಟು ಎತ್ತರಕ್ಕೆ ಧರಿಸಿದ್ದಾನೆ. ಸೂರ್ಯನು ಮಂಜನ್ನು ಹರಡುವಂತೆ ಈ ಯಜಮಾನರೂ ನಾವೂ ಎಲ್ಲೆಡೆ ಬೆಳೆದು ಹರಡುವಂತಾಗಲಿ.",
          },
        },
      ],
    },
  ],
};
