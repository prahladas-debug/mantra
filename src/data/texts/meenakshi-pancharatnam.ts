// Śrī Mīnākṣī Pañcaratnam (उद्यद्भानुसहस्रकोटिसदृशां केयूरहारोज्ज्वलाम् …), attributed to Ādi Śaṅkarācārya:
// five verses in śārdūlavikrīḍita to Mīnākṣī, the goddess of Madurai, each ending "mīnākṣīṃ praṇato 'smi
// santatam ahaṃ kāruṇyavārāṃnidhim".
// Collated Nov 2026; not yet checked line by line against a printed edition.
//
// Sources:
//   A. stotranidhi.com, Devanagari page: base text.
//   B. Gita Press, Stotraratnāvalī and Devī Stotra Ratnākara no. 12, with Hindi translation
//      (sanskrit/raw_etexts, misc-gp).
//   C. sa.wikisource, "मीनाक्षीपञ्चरत्नम्" (typed copy).
//   D. stotrasamhita/stotra-sangrahah (GitHub), stotras/shakti/MinakshiPancharatnam.tex.
//   E. raocollectionsstotra.blogspot.com, "Meenakshi Pancharatnam by Adi Shankara" (Kannada script).
// The five verses agree word for word in A, C, D and E (machine-collated). B (Gita Press) differs only in
// v1 विम्बोष्ठीं (misprint), v3 श्रीमत्सभानायिकाम् and v4 श्रीमत्सुन्दरनायिकां (feminine forms for
// -नायकीम्/-नायकीं); D reads v3 वसतीं for वसतिं. The forms of A are kept.
import type { Mantra } from '../types';

export const meenakshiPancharatnam: Mantra = {
  id: "meenakshi-pancharatnam",
  title: "मीनाक्षीपञ्चरत्नम्",
  titleEn: "Meenakshi Pancharatnam",
  category: "stotra",
  deity: "Śrī Mīnākṣī (Pārvatī)",
  source: "Attributed to Adi Shankaracharya",
  summary:
    "Five verses, the \"five jewels\", in praise of Meenakshi, the fish-eyed Goddess of Madurai, consort of Sundareshvara (Shiva). Each describes her radiance, jewels and grace and ends \"I always bow to Meenakshi, ocean of compassion\". She is called the mother of Shanmukha and Ganapati, the embodiment of Shri Vidya and the sound-Brahman.",
  summaryKn:
    "ಮಧುರೆಯ ಮೀನಾಕ್ಷೀ ದೇವಿ, ಸುಂದರೇಶ್ವರನ (ಶಿವನ) ಪತ್ನಿಯನ್ನು ಕುರಿತ ಐದು \"ರತ್ನ\" ಶ್ಲೋಕಗಳು. ಪ್ರತಿಯೊಂದೂ ಅವಳ ತೇಜಸ್ಸು, ಆಭರಣ, ಕರುಣೆಯನ್ನು ವರ್ಣಿಸಿ \"ಕರುಣಾಸಾಗರಳಾದ ಮೀನಾಕ್ಷಿಗೆ ನಾನು ಸದಾ ನಮಸ್ಕರಿಸುತ್ತೇನೆ\" ಎಂದು ಮುಗಿಯುತ್ತದೆ. ಅವಳನ್ನು ಷಣ್ಮುಖ ಮತ್ತು ಗಣಪತಿಯ ತಾಯಿ, ಶ್ರೀವಿದ್ಯಾಸ್ವರೂಪಿಣಿ, ನಾದಬ್ರಹ್ಮಮಯಿ ಎಂದು ಕರೆಯಲಾಗಿದೆ.",
  difficulty: "medium",
  completeness: "complete",
  sections: [
    {
      title: "स्तोत्रम्",
      titleEn: "Stotram",
      verses: [
        { n: 1, text: "उद्यद्भानुसहस्रकोटिसदृशां केयूरहारोज्ज्वलां\nबिम्बोष्ठीं स्मितदन्तपङ्क्तिरुचिरां पीताम्बरालङ्कृताम् ।\nविष्णुब्रह्मसुरेन्द्रसेवितपदां तत्त्वस्वरूपां शिवां\nमीनाक्षीं प्रणतोऽस्मि सन्ततमहं कारुण्यवारांनिधिम् ॥", meaning: { en: "I always bow to Meenakshi, ocean of compassion: radiant like a thousand million rising suns, shining with armlets and necklaces, with lips red as the bimba fruit and a lovely row of teeth in her smile, dressed in yellow silk; her feet served by Vishnu, Brahma and Indra; the very form of the Truth, the auspicious One.", kn: "ಉದಯಿಸುವ ಸಾವಿರ ಕೋಟಿ ಸೂರ್ಯರಂತೆ ಹೊಳೆಯುವ, ಕೇಯೂರ ಹಾರಗಳಿಂದ ಪ್ರಕಾಶಿಸುವ, ತೊಂಡೆಹಣ್ಣಿನಂತಹ ತುಟಿಗಳೂ ಮಂದಹಾಸದ ಸುಂದರ ಹಲ್ಲಿನ ಸಾಲೂ ಉಳ್ಳ, ಪೀತಾಂಬರ ಧರಿಸಿದ, ವಿಷ್ಣು ಬ್ರಹ್ಮ ಇಂದ್ರರಿಂದ ಸೇವಿತ ಪಾದಗಳುಳ್ಳ, ತತ್ತ್ವಸ್ವರೂಪಿಣಿಯಾದ, ಮಂಗಳಕರಳಾದ, ಕರುಣಾಸಾಗರಳಾದ ಮೀನಾಕ್ಷಿಗೆ ನಾನು ಸದಾ ನಮಸ್ಕರಿಸುತ್ತೇನೆ." } },
        { n: 2, text: "मुक्ताहारलसत्किरीटरुचिरां पूर्णेन्दुवक्त्रप्रभां\nशिञ्जन्नूपुरकिङ्किणीमणिधरां पद्मप्रभाभासुराम् ।\nसर्वाभीष्टफलप्रदां गिरिसुतां वाणीरमासेवितां\nमीनाक्षीं प्रणतोऽस्मि सन्ततमहं कारुण्यवारांनिधिम् ॥", meaning: { en: "I always bow to Meenakshi, ocean of compassion: lovely in her shining crown and pearl necklace, her face bright like the full moon, wearing tinkling anklets, a girdle of bells and jewels, glowing with the lustre of a lotus, giver of the fruit of every wish, daughter of the mountain, served by Sarasvati and Lakshmi.", kn: "ಮುತ್ತಿನ ಹಾರ ಮತ್ತು ಹೊಳೆಯುವ ಕಿರೀಟದಿಂದ ಸುಂದರಳಾದ, ಪೂರ್ಣಚಂದ್ರನಂತಹ ಮುಖದ ಕಾಂತಿಯುಳ್ಳ, ಝಣಝಣಿಸುವ ನೂಪುರ ಕಿಂಕಿಣಿ ಮಣಿಗಳನ್ನು ಧರಿಸಿದ, ಕಮಲದ ಕಾಂತಿಯಿಂದ ಹೊಳೆಯುವ, ಎಲ್ಲ ಇಷ್ಟಾರ್ಥ ಫಲಗಳನ್ನು ನೀಡುವ, ಗಿರಿರಾಜನ ಮಗಳಾದ, ಸರಸ್ವತೀ ಲಕ್ಷ್ಮಿಯರಿಂದ ಸೇವಿತಳಾದ, ಕರುಣಾಸಾಗರಳಾದ ಮೀನಾಕ್ಷಿಗೆ ನಾನು ಸದಾ ನಮಸ್ಕರಿಸುತ್ತೇನೆ." } },
        { n: 3, text: "श्रीविद्यां शिववामभागनिलयां ह्रीङ्कारमन्त्रोज्ज्वलां\nश्रीचक्राङ्कितबिन्दुमध्यवसतिं श्रीमत्सभानायकीम् ।\nश्रीमत्षण्मुखविघ्नराजजननीं श्रीमज्जगन्मोहिनीं\nमीनाक्षीं प्रणतोऽस्मि सन्ततमहं कारुण्यवारांनिधिम् ॥", meaning: { en: "I always bow to Meenakshi, ocean of compassion: Shri Vidya herself, dwelling on the left half of Shiva, bright with the mantra Hrim; dwelling in the central point (bindu) marked in the Shri Chakra; the mistress of the (golden) assembly hall; mother of the glorious Shanmukha and Vighnaraja (Ganesha); the enchantress of the world.", kn: "ಶ್ರೀವಿದ್ಯಾಸ್ವರೂಪಿಣಿಯಾದ, ಶಿವನ ವಾಮಭಾಗದಲ್ಲಿ ನೆಲೆಸಿದ, ಹ್ರೀಂಕಾರ ಮಂತ್ರದಿಂದ ಪ್ರಕಾಶಿಸುವ, ಶ್ರೀಚಕ್ರದಲ್ಲಿ ಗುರುತಿಸಿದ ಬಿಂದುವಿನ ಮಧ್ಯದಲ್ಲಿ ವಾಸಿಸುವ, ಸಭಾನಾಯಕಿಯಾದ, ಷಣ್ಮುಖ ಮತ್ತು ವಿಘ್ನರಾಜರ ತಾಯಿಯಾದ, ಜಗತ್ತನ್ನು ಮೋಹಗೊಳಿಸುವ, ಕರುಣಾಸಾಗರಳಾದ ಮೀನಾಕ್ಷಿಗೆ ನಾನು ಸದಾ ನಮಸ್ಕರಿಸುತ್ತೇನೆ." } },
        { n: 4, text: "श्रीमत्सुन्दरनायकीं भयहरां ज्ञानप्रदां निर्मलां\nश्यामाभां कमलासनार्चितपदां नारायणस्यानुजाम् ।\nवीणावेणुमृदङ्गवाद्यरसिकां नानाविधाडम्बिकां\nमीनाक्षीं प्रणतोऽस्मि सन्ततमहं कारुण्यवारांनिधिम् ॥", meaning: { en: "I always bow to Meenakshi, ocean of compassion: the consort of glorious Sundara (Shiva), remover of fear, giver of knowledge, stainless, dark-hued, her feet worshipped by Brahma (the lotus-seated), the younger sister of Narayana, delighting in the music of the vina, flute and drum, the Mother (Ambika) with many forms.", kn: "ಶ್ರೀಮತ್ ಸುಂದರನ (ಶಿವನ) ನಾಯಕಿಯಾದ, ಭಯವನ್ನು ಹರಿಸುವ, ಜ್ಞಾನವನ್ನು ನೀಡುವ, ನಿರ್ಮಲಳಾದ, ಶ್ಯಾಮಲ ಕಾಂತಿಯ, ಕಮಲಾಸನನಾದ ಬ್ರಹ್ಮನಿಂದ ಪೂಜಿತ ಪಾದಗಳುಳ್ಳ, ನಾರಾಯಣನ ತಂಗಿಯಾದ, ವೀಣೆ, ಕೊಳಲು, ಮೃದಂಗ ವಾದ್ಯಗಳ ರಸಿಕಳಾದ, ನಾನಾ ವಿಧ ಅಂಬಿಕೆಯಾದ ಕರುಣಾಸಾಗರಳಾದ ಮೀನಾಕ್ಷಿಗೆ ನಾನು ಸದಾ ನಮಸ್ಕರಿಸುತ್ತೇನೆ." } },
        { n: 5, text: "नानायोगिमुनीन्द्रहृन्निवसतीं नानार्थसिद्धिप्रदां\nनानापुष्पविराजिताङ्घ्रियुगलां नारायणेनार्चिताम् ।\nनादब्रह्ममयीं परात्परतरां नानार्थतत्त्वात्मिकां\nमीनाक्षीं प्रणतोऽस्मि सन्ततमहं कारुण्यवारांनिधिम् ॥", meaning: { en: "I always bow to Meenakshi, ocean of compassion: who dwells in the hearts of many yogis and great sages, grants success in many aims, whose two feet are adorned with many flowers, who is worshipped by Narayana, who is the sound-Brahman, higher than the highest, whose self is the truth of all things and meanings.", kn: "ಅನೇಕ ಯೋಗಿಗಳ ಮುನೀಂದ್ರರ ಹೃದಯದಲ್ಲಿ ನೆಲೆಸಿದ, ಅನೇಕ ಉದ್ದೇಶಗಳ ಸಿದ್ಧಿಯನ್ನು ನೀಡುವ, ಅನೇಕ ಹೂಗಳಿಂದ ಶೋಭಿಸುವ ಪಾದಯುಗಳವುಳ್ಳ, ನಾರಾಯಣನಿಂದ ಪೂಜಿತಳಾದ, ನಾದಬ್ರಹ್ಮಮಯಿಯಾದ, ಪರಾತ್ಪರತರಳಾದ, ಎಲ್ಲ ಅರ್ಥ ತತ್ತ್ವಗಳ ಸ್ವರೂಪಿಣಿಯಾದ, ಕರುಣಾಸಾಗರಳಾದ ಮೀನಾಕ್ಷಿಗೆ ನಾನು ಸದಾ ನಮಸ್ಕರಿಸುತ್ತೇನೆ." } },
        { text: "इति श्रीमत्परमहंसपरिव्राजकाचार्यस्य श्रीगोविन्दभगवत्पूज्यपादशिष्यस्य श्रीमच्छङ्करभगवतः कृतौ मीनाक्षीपञ्चरत्नं सम्पूर्णम् ॥", meaning: { en: "Thus ends the Meenakshi Pancharatnam, a work of Shri Shankara Bhagavatpada, disciple of Shri Govinda Bhagavatpada, the supreme renunciant and teacher.", kn: "ಹೀಗೆ ಪರಮಹಂಸ ಪರಿವ್ರಾಜಕಾಚಾರ್ಯರಾದ ಶ್ರೀಗೋವಿಂದ ಭಗವತ್ಪಾದರ ಶಿಷ್ಯರಾದ ಶ್ರೀಶಂಕರ ಭಗವತ್ಪಾದರ ಕೃತಿಯಾದ ಮೀನಾಕ್ಷೀಪಂಚರತ್ನವು ಸಂಪೂರ್ಣವಾಯಿತು." } },
      ],
    },
  ],
};
