/**
 * Puruṣa Sūktam (Taittirīya recension). Collated (Nov 2026) against
 * stotranidhi.com (Devanagari) and hindupad.com (Kannada). Not yet checked
 * against a printed edition.
 */
import type { Mantra } from '../types';

const SHANTI =
  'ॐ तच्छं योरावृणीमहे । गातुं यज्ञाय । गातुं यज्ञपतये ।\nदैवी स्वस्तिरस्तु नः । स्वस्तिर्मानुषेभ्यः ।\nऊर्ध्वं जिगातु भेषजम् । शं नो अस्तु द्विपदे । शं चतुष्पदे ॥\nॐ शान्तिः शान्तिः शान्तिः ॥';

const SHANTI_MEANING = {
  en: 'We pray for that welfare and blessing. May we find the way to praise the Lord for the sacrifice and for the one who offers it. May divine well-being be ours and well-being reach all people; may the healing plants grow upward. May there be peace for the two-footed and the four-footed. Om, peace, peace, peace.',
  kn: 'ಆ ಮಂಗಳವನ್ನೂ ಸುಖವನ್ನೂ ನಾವು ಪ್ರಾರ್ಥಿಸುತ್ತೇವೆ. ಯಜ್ಞಕ್ಕಾಗಿಯೂ ಯಜ್ಞ ಮಾಡುವವನಿಗಾಗಿಯೂ ಭಗವಂತನನ್ನು ಸ್ತುತಿಸುವ ದಾರಿ ದೊರೆಯಲಿ. ದೇವತೆಗಳ ಕೃಪೆಯಿಂದ ನಮಗೂ ಎಲ್ಲ ಮಾನವರಿಗೂ ಕ್ಷೇಮವಾಗಲಿ; ಔಷಧಿ ಸಸ್ಯಗಳು ಸಮೃದ್ಧವಾಗಿ ಬೆಳೆಯಲಿ. ಮನುಷ್ಯರಿಗೂ ಪಶುಗಳಿಗೂ ಶಾಂತಿ ಸುಖ ಇರಲಿ. ಓಂ ಶಾಂತಿಃ ಶಾಂತಿಃ ಶಾಂತಿಃ.',
};

export const purushaSukta: Mantra = {
  id: 'purusha-sukta',
  title: 'पुरुषसूक्तम्',
  titleEn: 'Purusha Suktam',
  category: 'vedic',
  deity: 'Puruṣa (Nārāyaṇa)',
  source: 'Ṛgveda 10.90; Taittirīya Āraṇyaka 3.12–13',
  summary:
    'The hymn to the cosmic Person, Puruṣa, whose thousand heads, eyes and feet pervade the universe and from whose primordial sacrifice all beings, the Vedas and the worlds arise. Given here in the Taittirīya Āraṇyaka recension as chanted in South India, with the Uttara-Nārāyaṇa.',
  summaryKn:
    'ಸಾವಿರಾರು ಶಿರ, ಕಣ್ಣು, ಪಾದಗಳಿಂದ ಜಗತ್ತೆಲ್ಲವನ್ನೂ ವ್ಯಾಪಿಸಿರುವ ಪರಮಪುರುಷನಾದ ನಾರಾಯಣನ ಸ್ತುತಿ. ಅವನನ್ನೇ ಹವಿಸ್ಸಾಗಿ ಭಾವಿಸಿ ದೇವತೆಗಳು ನಡೆಸಿದ ಆದಿಯಜ್ಞದಿಂದ ಸಕಲ ಜೀವಿಗಳು, ವೇದಗಳು ಮತ್ತು ಲೋಕಗಳು ಹುಟ್ಟಿದವು ಎಂದು ಇದು ವರ್ಣಿಸುತ್ತದೆ. ದಕ್ಷಿಣ ಭಾರತದಲ್ಲಿ ಪಠಿಸುವ ತೈತ್ತಿರೀಯ ಆರಣ್ಯಕದ ಪಾಠವನ್ನು ಉತ್ತರನಾರಾಯಣದೊಂದಿಗೆ ಇಲ್ಲಿ ನೀಡಲಾಗಿದೆ.',
  difficulty: 'medium',
  completeness: 'complete',
  sections: [
    {
      title: 'शान्तिपाठः',
      titleEn: 'Opening Śānti',
      verses: [{ text: SHANTI, meaning: SHANTI_MEANING }],
    },
    {
      title: 'पुरुषसूक्तम्',
      titleEn: 'Puruṣa Sūktam (Taittirīya Āraṇyaka 3.12)',
      verses: [
        {
          n: 1,
          text: 'सहस्रशीर्षा पुरुषः । सहस्राक्षः सहस्रपात् ।\nस भूमिं विश्वतो वृत्वा । अत्यतिष्ठद्दशाङ्गुलम् ॥',
          meaning: {
            en: 'The Supreme Person has a thousand heads, a thousand eyes and a thousand feet. Pervading the earth on every side, He stands beyond it by ten fingers’ breadth, that is, beyond all measure.',
            kn: 'ಪರಮಪುರುಷನಿಗೆ ಸಾವಿರಾರು ತಲೆಗಳು, ಸಾವಿರಾರು ಕಣ್ಣುಗಳು, ಸಾವಿರಾರು ಪಾದಗಳು. ಅವನು ಭೂಮಿಯನ್ನು ಎಲ್ಲ ಕಡೆಯಿಂದಲೂ ವ್ಯಾಪಿಸಿ, ಅದನ್ನು ಮೀರಿ ಹತ್ತು ಅಂಗುಲ ಮೇಲೆ ನಿಂತಿದ್ದಾನೆ; ಅಂದರೆ ಅವನು ಜಗತ್ತಿಗಿಂತಲೂ ಮಿಗಿಲಾದವನು.',
          },
        },
        {
          n: 2,
          text: 'पुरुष एवेदं सर्वम् । यद्भूतं यच्च भव्यम् ।\nउतामृतत्वस्येशानः । यदन्नेनातिरोहति ॥',
          meaning: {
            en: 'All this is the Puruṣa alone: whatever has been and whatever is yet to be. He is the lord of immortality, and He rises far above all that grows by food.',
            kn: 'ಹಿಂದೆ ಇದ್ದದ್ದು, ಮುಂದೆ ಬರುವುದು, ಈ ಎಲ್ಲವೂ ಆ ಪರಮಪುರುಷನೇ. ಅವನು ಅಮೃತತ್ವಕ್ಕೆ (ಮೋಕ್ಷಕ್ಕೆ) ಒಡೆಯನು; ಅನ್ನದಿಂದ ಬೆಳೆಯುವ ಈ ಜಗತ್ತನ್ನು ಮೀರಿ ನಿಂತವನು.',
          },
        },
        {
          n: 3,
          text: 'एतावानस्य महिमा । अतो ज्यायांश्च पूरुषः ।\nपादोऽस्य विश्वा भूतानि । त्रिपादस्यामृतं दिवि ॥',
          meaning: {
            en: 'Such is His glory, yet the Puruṣa is greater still. All beings are but one quarter of Him; three quarters of Him are immortal, in the highest heaven.',
            kn: 'ಇದೆಲ್ಲವೂ ಅವನ ಮಹಿಮೆ; ಆದರೆ ಪುರುಷನು ಇದಕ್ಕಿಂತಲೂ ಹಿರಿಯನು. ಸಮಸ್ತ ಜೀವಿಗಳು ಅವನ ಒಂದು ಪಾದ ಮಾತ್ರ; ಉಳಿದ ಮೂರು ಪಾದಗಳು ಅಮೃತರೂಪವಾಗಿ ಪರಮಪದದಲ್ಲಿ ಬೆಳಗುತ್ತವೆ.',
          },
        },
        {
          n: 4,
          text: 'त्रिपादूर्ध्व उदैत्पुरुषः । पादोऽस्येहाऽऽभवात्पुनः ।\nततो विष्वङ्व्यक्रामत् । साशनानशने अभि ॥',
          meaning: {
            en: 'With three quarters the Puruṣa rose on high; one quarter of Him comes to be here again and again as the world. From that He spread out everywhere, into all that eats and all that does not.',
            kn: 'ಮೂರು ಪಾದಗಳಿಂದ ಪುರುಷನು ಮೇಲೆ ನೆಲೆಸಿದನು; ಅವನ ಒಂದು ಪಾದವೇ ಇಲ್ಲಿ ಮತ್ತೆ ಮತ್ತೆ ಜಗತ್ತಾಗಿ ಮೂಡುತ್ತದೆ. ಅಲ್ಲಿಂದ ಅವನು ಆಹಾರ ಸೇವಿಸುವ ಜೀವಿಗಳಲ್ಲೂ ಸೇವಿಸದ ಜಡವಸ್ತುಗಳಲ್ಲೂ ಎಲ್ಲೆಡೆ ವ್ಯಾಪಿಸಿದನು.',
          },
        },
        {
          n: 5,
          text: 'तस्माद्विराडजायत । विराजो अधि पूरुषः ।\nस जातो अत्यरिच्यत । पश्चाद्भूमिमथो पुरः ॥',
          meaning: {
            en: 'From Him the cosmic form, Virāṭ, was born, and within Virāṭ the Puruṣa dwelt. Once manifest, He extended beyond it, and then brought forth the earth and the bodies of beings.',
            kn: 'ಅವನಿಂದ ವಿರಾಟ್ ಎಂಬ ಬ್ರಹ್ಮಾಂಡರೂಪ ಹುಟ್ಟಿತು; ಆ ವಿರಾಟನಲ್ಲಿ ಪುರುಷನು ಅಂತರ್ಯಾಮಿಯಾಗಿ ನೆಲೆಸಿದನು. ಹಾಗೆ ಪ್ರಕಟನಾದ ಅವನು ಅದನ್ನೂ ಮೀರಿ ನಿಂತು, ಬಳಿಕ ಭೂಮಿಯನ್ನೂ ಜೀವಿಗಳ ಶರೀರಗಳನ್ನೂ ಸೃಷ್ಟಿಸಿದನು.',
          },
        },
        {
          n: 6,
          text: 'यत्पुरुषेण हविषा । देवा यज्ञमतन्वत ।\nवसन्तो अस्यासीदाज्यम् । ग्रीष्म इध्मश्शरद्धविः ॥',
          meaning: {
            en: 'When the gods performed a sacrifice with the Puruṣa Himself as the offering, spring was its ghee, summer its firewood, and autumn its oblation.',
            kn: 'ದೇವತೆಗಳು ಪುರುಷನನ್ನೇ ಹವಿಸ್ಸಾಗಿ ಭಾವಿಸಿ ಯಜ್ಞವನ್ನು ನಡೆಸಿದಾಗ, ವಸಂತ ಋತುವೇ ಅದರ ತುಪ್ಪವಾಯಿತು, ಗ್ರೀಷ್ಮ ಋತುವೇ ಸಮಿಧೆಯಾಯಿತು, ಶರದೃತುವೇ ಹವಿಸ್ಸಾಯಿತು.',
          },
        },
        {
          n: 7,
          text: 'सप्तास्यासन्परिधयः । त्रिः सप्त समिधः कृताः ।\nदेवा यद्यज्ञं तन्वानाः । अबध्नन्पुरुषं पशुम् ॥',
          meaning: {
            en: 'That sacrifice had seven enclosing sticks and thrice seven fuel-sticks, when the gods, unfolding it, bound the Puruṣa as its offering.',
            kn: 'ಆ ಯಜ್ಞಕ್ಕೆ ಏಳು ಪರಿಧಿಗಳೂ ಇಪ್ಪತ್ತೊಂದು ಸಮಿಧೆಗಳೂ ಇದ್ದವು. ಯಜ್ಞವನ್ನು ವಿಸ್ತರಿಸುತ್ತಿದ್ದ ದೇವತೆಗಳು ಪುರುಷನನ್ನೇ ಯಜ್ಞಪಶುವಾಗಿ ಭಾವಿಸಿ ಧ್ಯಾನಿಸಿದರು.',
          },
        },
        {
          n: 8,
          text: 'तं यज्ञं बर्हिषि प्रौक्षन् । पुरुषं जातमग्रतः ।\nतेन देवा अयजन्त । साध्या ऋषयश्च ये ॥',
          meaning: {
            en: 'On the sacred grass they consecrated that Puruṣa, born before all, as the sacrifice itself. Through Him the gods, the Sādhyas and the sages offered worship.',
            kn: 'ಎಲ್ಲಕ್ಕಿಂತ ಮೊದಲು ಪ್ರಕಟನಾದ ಆ ಯಜ್ಞರೂಪಿ ಪುರುಷನನ್ನು ದರ್ಭೆಯ ಮೇಲೆ ಇರಿಸಿ ಪ್ರೋಕ್ಷಿಸಿದರು. ಅವನ ಮೂಲಕವೇ ದೇವತೆಗಳೂ ಸಾಧ್ಯರೂ ಋಷಿಗಳೂ ಯಜ್ಞವನ್ನು ಮಾಡಿದರು.',
          },
        },
        {
          n: 9,
          text: 'तस्माद्यज्ञात्सर्वहुतः । सम्भृतं पृषदाज्यम् ।\nपशूंस्तांश्चक्रे वायव्यान् । आरण्यान्ग्राम्याश्च ये ॥',
          meaning: {
            en: 'From that sacrifice in which everything was offered, the ghee mixed with curds was gathered. From it He made the creatures of the air, and the animals of the forest and of the village.',
            kn: 'ಸರ್ವವನ್ನೂ ಅರ್ಪಿಸಿದ ಆ ಯಜ್ಞದಿಂದ ಮೊಸರು ಬೆರೆತ ತುಪ್ಪ (ಪೃಷದಾಜ್ಯ) ಸಂಗ್ರಹವಾಯಿತು. ಅದರಿಂದ ಆಕಾಶದಲ್ಲಿ ಸಂಚರಿಸುವ ಜೀವಿಗಳನ್ನೂ, ಕಾಡಿನ ಮತ್ತು ಊರಿನ ಪ್ರಾಣಿಗಳನ್ನೂ ಭಗವಂತನು ಸೃಷ್ಟಿಸಿದನು.',
          },
        },
        {
          n: 10,
          text: 'तस्माद्यज्ञात्सर्वहुतः । ऋचः सामानि जज्ञिरे ।\nछन्दांसि जज्ञिरे तस्मात् । यजुस्तस्मादजायत ॥',
          meaning: {
            en: 'From that all-offering sacrifice were born the Ṛk verses and the Sāman chants; from it the metres were born, and from it the Yajus arose.',
            kn: 'ಸರ್ವಹುತವಾದ ಆ ಯಜ್ಞದಿಂದ ಋಙ್ಮಂತ್ರಗಳೂ ಸಾಮಗಾನಗಳೂ ಹುಟ್ಟಿದವು. ಅದರಿಂದಲೇ ಛಂದಸ್ಸುಗಳು ಹುಟ್ಟಿದವು; ಯಜುರ್ಮಂತ್ರಗಳೂ ಅದರಿಂದಲೇ ಉದಿಸಿದವು.',
          },
        },
        {
          n: 11,
          text: 'तस्मादश्वा अजायन्त । ये के चोभयादतः ।\nगावो ह जज्ञिरे तस्मात् । तस्माज्जाता अजावयः ॥',
          meaning: {
            en: 'From it were born horses and all animals with teeth in both jaws. From it were born the cows, and from it the goats and sheep.',
            kn: 'ಅದರಿಂದ ಕುದುರೆಗಳೂ, ಮೇಲೆ ಕೆಳಗೆ ಎರಡೂ ಸಾಲು ಹಲ್ಲುಗಳಿರುವ ಪ್ರಾಣಿಗಳೂ ಹುಟ್ಟಿದವು. ಗೋವುಗಳು ಅದರಿಂದಲೇ ಹುಟ್ಟಿದವು; ಆಡು ಕುರಿಗಳೂ ಅದರಿಂದಲೇ ಜನಿಸಿದವು.',
          },
        },
        {
          n: 12,
          text: 'यत्पुरुषं व्यदधुः । कतिधा व्यकल्पयन् ।\nमुखं किमस्य कौ बाहू । कावूरू पादावुच्येते ॥',
          meaning: {
            en: 'When they envisioned the Puruṣa, in how many ways did they conceive Him? What was His mouth, what His arms, and what are called His thighs and feet?',
            kn: 'ದೇವತೆಗಳು ಪುರುಷನನ್ನು ಧ್ಯಾನದಲ್ಲಿ ಕಲ್ಪಿಸಿಕೊಂಡಾಗ ಎಷ್ಟು ಬಗೆಯಾಗಿ ಕಂಡರು? ಅವನ ಮುಖ ಯಾವುದು? ಬಾಹುಗಳು ಯಾವುವು? ತೊಡೆಗಳು, ಪಾದಗಳು ಯಾವುವು ಎಂದು ಹೇಳಲಾಗುತ್ತದೆ?',
          },
        },
        {
          n: 13,
          text: 'ब्राह्मणोऽस्य मुखमासीत् । बाहू राजन्यः कृतः ।\nऊरू तदस्य यद्वैश्यः । पद्भ्यां शूद्रो अजायत ॥',
          meaning: {
            en: 'The Brāhmaṇa was His mouth, the Kṣatriya was made His arms, the Vaiśya was His thighs, and from His feet the Śūdra was born. Thus all orders of society arise from the one Lord, like the limbs of a single body.',
            kn: 'ಬ್ರಾಹ್ಮಣನು ಅವನ ಮುಖವಾದನು; ಕ್ಷತ್ರಿಯನು ಅವನ ಬಾಹುಗಳಾದನು; ವೈಶ್ಯನು ಅವನ ತೊಡೆಗಳಾದನು; ಪಾದಗಳಿಂದ ಶೂದ್ರನು ಹುಟ್ಟಿದನು. ಹೀಗೆ ಸಮಾಜದ ಎಲ್ಲ ವರ್ಗಗಳೂ ಒಬ್ಬನೇ ಭಗವಂತನಿಂದ ಹುಟ್ಟಿ, ಒಂದೇ ಶರೀರದ ಅಂಗಗಳಂತೆ ಇವೆ.',
          },
        },
        {
          n: 14,
          text: 'चन्द्रमा मनसो जातः । चक्षोः सूर्यो अजायत ।\nमुखादिन्द्रश्चाग्निश्च । प्राणाद्वायुरजायत ॥',
          meaning: {
            en: 'The moon was born from His mind and the sun from His eyes; Indra and Agni came from His mouth, and Vāyu from His breath.',
            kn: 'ಅವನ ಮನಸ್ಸಿನಿಂದ ಚಂದ್ರನು ಹುಟ್ಟಿದನು; ಕಣ್ಣುಗಳಿಂದ ಸೂರ್ಯನು ಹುಟ್ಟಿದನು. ಮುಖದಿಂದ ಇಂದ್ರನೂ ಅಗ್ನಿಯೂ, ಪ್ರಾಣದಿಂದ ವಾಯುವೂ ಜನಿಸಿದರು.',
          },
        },
        {
          n: 15,
          text: 'नाभ्या आसीदन्तरिक्षम् । शीर्ष्णो द्यौः समवर्तत ।\nपद्भ्यां भूमिर्दिशः श्रोत्रात् । तथा लोकां अकल्पयन् ॥',
          meaning: {
            en: 'From His navel came the mid-region, and from His head the heavens took shape; from His feet came the earth and from His ears the directions. In this way the worlds were fashioned.',
            kn: 'ಅವನ ನಾಭಿಯಿಂದ ಅಂತರಿಕ್ಷವೂ, ಶಿರಸ್ಸಿನಿಂದ ದ್ಯುಲೋಕವೂ ಉಂಟಾದವು. ಪಾದಗಳಿಂದ ಭೂಮಿಯೂ, ಕಿವಿಗಳಿಂದ ದಿಕ್ಕುಗಳೂ ಹುಟ್ಟಿದವು. ಹೀಗೆ ಲೋಕಗಳು ರೂಪುಗೊಂಡವು.',
          },
        },
        {
          n: 16,
          text: 'वेदाहमेतं पुरुषं महान्तम् । आदित्यवर्णं तमसस्तु पारे ।\nसर्वाणि रूपाणि विचित्य धीरः । नामानि कृत्वाऽभिवदन् यदास्ते ॥',
          meaning: {
            en: 'I know this great Puruṣa, radiant as the sun, beyond all darkness. The all-wise Lord, having created every form and given each its name, dwells within them and calls them by name.',
            kn: 'ಸೂರ್ಯನಂತೆ ಪ್ರಕಾಶಿಸುವ, ಅಜ್ಞಾನದ ಕತ್ತಲೆಯನ್ನು ಮೀರಿದ ಈ ಮಹಾಪುರುಷನನ್ನು ನಾನು ಬಲ್ಲೆನು. ಸರ್ವಜ್ಞನಾದ ಆ ಭಗವಂತನು ಎಲ್ಲ ರೂಪಗಳನ್ನೂ ಸೃಷ್ಟಿಸಿ, ಅವುಗಳಿಗೆ ಹೆಸರುಗಳನ್ನಿಟ್ಟು, ಅವುಗಳೊಳಗೆ ನೆಲೆಸಿ ಅವುಗಳನ್ನು ನಡೆಸುತ್ತಾನೆ.',
          },
        },
        {
          n: 17,
          text: 'धाता पुरस्ताद्यमुदाजहार । शक्रः प्रविद्वान्प्रदिशश्चतस्रः ।\nतमेवं विद्वानमृत इह भवति । नान्यः पन्था अयनाय विद्यते ॥',
          meaning: {
            en: 'He whom the Creator proclaimed in the beginning, and whom Indra, knowing Him, made known in all four quarters: one who knows Him thus attains immortality here itself. There is no other path to liberation.',
            kn: 'ಆದಿಯಲ್ಲಿ ಸೃಷ್ಟಿಕರ್ತನಾದ ಬ್ರಹ್ಮದೇವರು ಯಾರನ್ನು ಸಾರಿ ಹೇಳಿದರೋ, ಇಂದ್ರನು ಅರಿತು ನಾಲ್ಕು ದಿಕ್ಕುಗಳಿಗೂ ಯಾರನ್ನು ತಿಳಿಸಿದನೋ, ಆ ಪರಮಪುರುಷನನ್ನು ಹೀಗೆ ಅರಿತವನು ಇಲ್ಲಿಯೇ ಮೋಕ್ಷವನ್ನು ಪಡೆಯುತ್ತಾನೆ. ಮೋಕ್ಷಕ್ಕೆ ಬೇರೆ ದಾರಿಯೇ ಇಲ್ಲ.',
          },
        },
        {
          n: 18,
          text: 'यज्ञेन यज्ञमयजन्त देवाः । तानि धर्माणि प्रथमान्यासन् ।\nते ह नाकं महिमानः सचन्ते । यत्र पूर्वे साध्याः सन्ति देवाः ॥',
          meaning: {
            en: 'The gods worshipped the Lord, who is Sacrifice itself, by means of sacrifice; these were the first of all dharmas. Those great souls reach the highest heaven, where the ancient Sādhyas and gods abide.',
            kn: 'ದೇವತೆಗಳು ಯಜ್ಞಸ್ವರೂಪನಾದ ಭಗವಂತನನ್ನು ಯಜ್ಞದಿಂದಲೇ ಆರಾಧಿಸಿದರು; ಅವೇ ಮೊದಲ ಧರ್ಮಗಳಾದವು. ಹಾಗೆ ಆರಾಧಿಸುವ ಮಹಾತ್ಮರು ಹಿಂದಿನ ಸಾಧ್ಯರೂ ದೇವತೆಗಳೂ ನೆಲೆಸಿರುವ ಉನ್ನತ ಲೋಕವನ್ನು ಸೇರುತ್ತಾರೆ.',
          },
        },
      ],
    },
    {
      title: 'उत्तरनारायणम्',
      titleEn: 'Uttara-Nārāyaṇa (Taittirīya Āraṇyaka 3.13)',
      verses: [
        {
          n: 1,
          text: 'अद्भ्यः सम्भूतः पृथिव्यै रसाच्च । विश्वकर्मणः समवर्तताधि ।\nतस्य त्वष्टा विदधद्रूपमेति । तत्पुरुषस्य विश्वमाजानमग्रे ॥',
          meaning: {
            en: 'This universe arose from the waters and from the essence of the earth, brought forth by the all-making Lord (Viśvakarman). Tvaṣṭā goes on shaping its forms; thus in the beginning the whole world of the Puruṣa came forth.',
            kn: 'ನೀರಿನಿಂದಲೂ ಭೂಮಿಯ ಸಾರದಿಂದಲೂ ಈ ಜಗತ್ತು ಉಂಟಾಯಿತು; ಇದು ವಿಶ್ವಕರ್ಮನಾದ ಭಗವಂತನಿಂದ ಮೂಡಿಬಂತು. ತ್ವಷ್ಟಾ ಅದಕ್ಕೆ ರೂಪಗಳನ್ನು ಕೊಡುತ್ತ ಸಾಗುತ್ತಾನೆ. ಹೀಗೆ ಆದಿಯಲ್ಲಿ ಪುರುಷನ ಈ ಸಮಸ್ತ ವಿಶ್ವವೂ ಉದಯಿಸಿತು.',
          },
        },
        {
          n: 2,
          text: 'वेदाहमेतं पुरुषं महान्तम् । आदित्यवर्णं तमसः परस्तात् ।\nतमेवं विद्वानमृत इह भवति । नान्यः पन्था विद्यतेऽयनाय ॥',
          meaning: {
            en: 'I know this great Puruṣa, radiant as the sun, beyond all darkness. Knowing Him thus, one becomes immortal here itself; there is no other path to the goal.',
            kn: 'ಸೂರ್ಯನಂತೆ ಪ್ರಕಾಶಿಸುವ, ಕತ್ತಲೆಯನ್ನು ಮೀರಿದ ಈ ಮಹಾಪುರುಷನನ್ನು ನಾನು ಬಲ್ಲೆನು. ಅವನನ್ನು ಹೀಗೆ ಅರಿತವನು ಇಲ್ಲಿಯೇ ಮೋಕ್ಷವನ್ನು ಪಡೆಯುತ್ತಾನೆ; ಗುರಿಯನ್ನು ಸೇರಲು ಬೇರೆ ದಾರಿಯಿಲ್ಲ.',
          },
        },
        {
          n: 3,
          text: 'प्रजापतिश्चरति गर्भे अन्तः । अजायमानो बहुधा विजायते ।\nतस्य धीराः परिजानन्ति योनिम् । मरीचीनां पदमिच्छन्ति वेधसः ॥',
          meaning: {
            en: 'The Lord of creatures moves within the womb of all; though unborn, He is born in many forms. The wise know His true source, and the creators long for the station of the great seers such as Marīci.',
            kn: 'ಪ್ರಜಾಪತಿಯಾದ ಭಗವಂತನು ಎಲ್ಲ ಜೀವಿಗಳ ಗರ್ಭದೊಳಗೆ ಸಂಚರಿಸುತ್ತಾನೆ. ಹುಟ್ಟಿಲ್ಲದವನಾದರೂ ಅನೇಕ ರೂಪಗಳಲ್ಲಿ ಪ್ರಕಟನಾಗುತ್ತಾನೆ. ಜ್ಞಾನಿಗಳು ಅವನ ನಿಜಸ್ವರೂಪವನ್ನು ಅರಿಯುತ್ತಾರೆ; ಸೃಷ್ಟಿಕರ್ತರು ಮರೀಚಿ ಮೊದಲಾದ ಮಹರ್ಷಿಗಳ ಪದವಿಯನ್ನು ಬಯಸುತ್ತಾರೆ.',
          },
        },
        {
          n: 4,
          text: 'यो देवेभ्य आतपति । यो देवानां पुरोहितः ।\nपूर्वो यो देवेभ्यो जातः । नमो रुचाय ब्राह्मये ॥',
          meaning: {
            en: 'He who shines for the gods, who goes before the gods as their priest, who was born before the gods: salutations to that radiant One, whose splendour is Brahman.',
            kn: 'ದೇವತೆಗಳಿಗಾಗಿ ಬೆಳಗುವವನು, ದೇವತೆಗಳ ಮುಂದಾಳಾದ ಪುರೋಹಿತನು, ದೇವತೆಗಳಿಗಿಂತ ಮೊದಲೇ ಪ್ರಕಟನಾದವನು ಆದ ಆ ಬ್ರಹ್ಮತೇಜಸ್ವರೂಪನಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          n: 5,
          text: 'रुचं ब्राह्मं जनयन्तः । देवा अग्रे तदब्रुवन् ।\nयस्त्वैवं ब्राह्मणो विद्यात् । तस्य देवा असन्वशे ॥',
          meaning: {
            en: 'Bringing forth that radiant splendour of Brahman, the gods declared in the beginning: the knower of Brahman who knows Him thus will have the gods under his sway.',
            kn: 'ಆ ಬ್ರಹ್ಮತೇಜಸ್ಸನ್ನು ಪ್ರಕಟಗೊಳಿಸುತ್ತ ದೇವತೆಗಳು ಆದಿಯಲ್ಲಿ ಹೀಗೆ ಹೇಳಿದರು: “ಯಾವ ಬ್ರಹ್ಮಜ್ಞಾನಿಯು ಇವನನ್ನು ಹೀಗೆ ಅರಿಯುತ್ತಾನೋ, ದೇವತೆಗಳು ಅವನಿಗೆ ವಶರಾಗುತ್ತಾರೆ.”',
          },
        },
        {
          n: 6,
          text: 'ह्रीश्च ते लक्ष्मीश्च पत्न्यौ । अहोरात्रे पार्श्वे ।\nनक्षत्राणि रूपम् । अश्विनौ व्यात्तम् ।\nइष्टं मनिषाण । अमुं मनिषाण । सर्वं मनिषाण ॥',
          meaning: {
            en: 'Hrī and Lakṣmī are Your consorts; day and night are Your two sides; the stars are Your form; the Aśvins are Your open mouth. Grant us what we desire, grant us the world beyond, grant us everything.',
            kn: 'ಹ್ರೀದೇವಿಯೂ ಲಕ್ಷ್ಮೀದೇವಿಯೂ ನಿನ್ನ ಪತ್ನಿಯರು; ಹಗಲು ರಾತ್ರಿಗಳು ನಿನ್ನ ಎರಡು ಪಾರ್ಶ್ವಗಳು; ನಕ್ಷತ್ರಗಳು ನಿನ್ನ ರೂಪ; ಅಶ್ವಿನೀದೇವತೆಗಳು ನಿನ್ನ ತೆರೆದ ಬಾಯಿ. ನಾವು ಬಯಸುವುದನ್ನು ಕರುಣಿಸು; ಪರಲೋಕದ ಸುಖವನ್ನು ಕರುಣಿಸು; ಎಲ್ಲವನ್ನೂ ಕರುಣಿಸು.',
          },
        },
      ],
    },
    {
      title: 'शान्तिपाठः',
      titleEn: 'Closing Śānti',
      verses: [{ text: SHANTI, meaning: SHANTI_MEANING }],
    },
  ],
};
