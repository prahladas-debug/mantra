// Śrī Bhavānyaṣṭakam (न तातो न माता न बन्धुर्न दाता …), attributed to Ādi Śaṅkarācārya: eight verses
// each ending "gatistvaṃ gatistvaṃ tvam ekā bhavāni".
// Collated Nov 2026; not yet checked line by line against a printed edition.
//
// Sources:
//   A. stotranidhi.com, Devanagari page (from the printed "Prabhāta Stotranidhi"): base text.
//   B. Gita Press, "Devī Stotra Ratnākara" no. 13 and Stotraratnāvalī, with Hindi translation
//      (sanskrit/raw_etexts, misc-gp).
//   C. sa.wikisource, "भवान्यष्टकम्" and "श्रीभवान्यष्टकम्" (two typed copies).
//   D. raocollectionsstotra.blogspot.com, "Bhavani Ashtakam by Adi Shankaracharya" (Kannada script).
// All five agree verse for verse; only spacing, avagraha and anusvara/nasal spelling differ (e.g. v2
// महादुःखभीरुः in B, महादुःखभीरु in A and C, an unmarked sandhi form; the verse text follows A).
import type { Mantra } from '../types';

export const bhavaniAshtakam: Mantra = {
  id: "bhavani-ashtakam",
  title: "भवान्यष्टकम्",
  titleEn: "Bhavani Ashtakam",
  category: "stotra",
  deity: "Śrī Bhavānī (Durgā)",
  source: "Attributed to Adi Shankaracharya",
  summary:
    "Eight verses of complete surrender to the Divine Mother Bhavani, each ending \"You are my refuge, You are my refuge, You alone, O Bhavani\". The devotee confesses that he has no family, no learning, no rites, no merit, and only the Mother to turn to, in every danger from disputes to forests, water, fire and enemies.",
  summaryKn:
    "ದೇವೀ ಭವಾನಿಗೆ ಸಂಪೂರ್ಣ ಶರಣಾಗತಿಯನ್ನು ಸೂಚಿಸುವ ಎಂಟು ಶ್ಲೋಕಗಳು; ಪ್ರತಿಯೊಂದೂ \"ನೀನೇ ಗತಿ, ನೀನೇ ಗತಿ, ನೀನೊಬ್ಬಳೇ ಗತಿ, ಹೇ ಭವಾನಿ\" ಎಂದು ಮುಗಿಯುತ್ತದೆ. ತನಗೆ ಕುಟುಂಬ, ವಿದ್ಯೆ, ಕರ್ಮ, ಪುಣ್ಯ ಯಾವುದೂ ಇಲ್ಲ, ವಿವಾದ, ಅರಣ್ಯ, ನೀರು, ಬೆಂಕಿ, ಶತ್ರುಗಳ ನಡುವಿನ ಪ್ರತಿ ಆಪತ್ತಿನಲ್ಲಿ ತಾಯಿಯೇ ಏಕೈಕ ಆಶ್ರಯ ಎಂದು ಭಕ್ತನು ಒಪ್ಪಿಕೊಳ್ಳುತ್ತಾನೆ.",
  difficulty: "easy",
  completeness: "complete",
  sections: [
    {
      title: "स्तोत्रम्",
      titleEn: "Stotram",
      verses: [
        { n: 1, text: "न तातो न माता न बन्धुर्न दाता\nन पुत्रो न पुत्री न भृत्यो न भर्ता ।\nन जाया न विद्या न वृत्तिर्ममैव\nगतिस्त्वं गतिस्त्वं त्वमेका भवानि ॥", meaning: { en: "I have no father, no mother, no relative, no giver; no son, no daughter, no servant, no husband; no wife, no learning, no livelihood. You are my refuge, You are my refuge, You alone, O Bhavani.", kn: "ನನಗೆ ತಂದೆಯಿಲ್ಲ, ತಾಯಿಯಿಲ್ಲ, ಬಂಧುವಿಲ್ಲ, ದಾನಿಯಿಲ್ಲ; ಮಗನಿಲ್ಲ, ಮಗಳಿಲ್ಲ, ಸೇವಕನಿಲ್ಲ, ಪತಿಯಿಲ್ಲ; ಪತ್ನಿಯಿಲ್ಲ, ವಿದ್ಯೆಯಿಲ್ಲ, ಜೀವನೋಪಾಯವಿಲ್ಲ. ಹೇ ಭವಾನಿ, ನೀನೇ ಗತಿ, ನೀನೇ ಗತಿ, ನೀನೊಬ್ಬಳೇ ಗತಿ." } },
        { n: 2, text: "भवाब्धावपारे महादुःखभीरु\nपपात प्रकामी प्रलोभी प्रमत्तः ।\nकुसंसारपाशप्रबद्धः सदाहं\nगतिस्त्वं गतिस्त्वं त्वमेका भवानि ॥", meaning: { en: "Fearful of great sorrow, I have fallen into the boundless ocean of worldly life, full of desires, greedy and heedless, always bound by the evil nooses of worldly existence. You are my refuge, You are my refuge, You alone, O Bhavani.", kn: "ಮಹಾ ದುಃಖಕ್ಕೆ ಹೆದರುವ ನಾನು ಅಪಾರ ಸಂಸಾರ ಸಾಗರದಲ್ಲಿ ಬಿದ್ದಿದ್ದೇನೆ; ಅತಿ ಆಸೆ, ಲೋಭ, ಪ್ರಮಾದಗಳಿಂದ ಕೂಡಿ ಸದಾ ದುಷ್ಟ ಸಂಸಾರದ ಪಾಶಗಳಲ್ಲಿ ಬಂಧಿತನಾಗಿದ್ದೇನೆ. ಹೇ ಭವಾನಿ, ನೀನೇ ಗತಿ, ನೀನೇ ಗತಿ, ನೀನೊಬ್ಬಳೇ ಗತಿ." } },
        { n: 3, text: "न जानामि दानं न च ध्यानयोगं\nन जानामि तन्त्रं न च स्तोत्रमन्त्रम् ।\nन जानामि पूजां न च न्यासयोगं\nगतिस्त्वं गतिस्त्वं त्वमेका भवानि ॥", meaning: { en: "I know no giving and no discipline of meditation; I know no tantric rite, no hymn or mantra; I know no worship and no method of nyasa. You are my refuge, You are my refuge, You alone, O Bhavani.", kn: "ನನಗೆ ದಾನ ಗೊತ್ತಿಲ್ಲ, ಧ್ಯಾನಯೋಗ ಗೊತ್ತಿಲ್ಲ; ತಂತ್ರ ಗೊತ್ತಿಲ್ಲ, ಸ್ತೋತ್ರ ಮಂತ್ರ ಗೊತ್ತಿಲ್ಲ; ಪೂಜೆ ಗೊತ್ತಿಲ್ಲ, ನ್ಯಾಸಯೋಗ ಗೊತ್ತಿಲ್ಲ. ಹೇ ಭವಾನಿ, ನೀನೇ ಗತಿ, ನೀನೇ ಗತಿ, ನೀನೊಬ್ಬಳೇ ಗತಿ." } },
        { n: 4, text: "न जानामि पुण्यं न जानामि तीर्थं\nन जानामि मुक्तिं लयं वा कदाचित् ।\nन जानामि भक्तिं व्रतं वापि मातर्-\nगतिस्त्वं गतिस्त्वं त्वमेका भवानि ॥", meaning: { en: "I know no merit and no pilgrimage; I never know liberation or absorption (in the Supreme); I know no devotion and no vow, O Mother. You are my refuge, You are my refuge, You alone, O Bhavani.", kn: "ನನಗೆ ಪುಣ್ಯ ಗೊತ್ತಿಲ್ಲ, ತೀರ್ಥ ಗೊತ್ತಿಲ್ಲ; ಮುಕ್ತಿಯನ್ನಾಗಲೀ ಲಯವನ್ನಾಗಲೀ ಎಂದೂ ಅರಿಯೆ; ಭಕ್ತಿ ಗೊತ್ತಿಲ್ಲ, ವ್ರತ ಗೊತ್ತಿಲ್ಲ, ಅಮ್ಮಾ. ಹೇ ಭವಾನಿ, ನೀನೇ ಗತಿ, ನೀನೇ ಗತಿ, ನೀನೊಬ್ಬಳೇ ಗತಿ." } },
        { n: 5, text: "कुकर्मी कुसङ्गी कुबुद्धिः कुदासः\nकुलाचारहीनः कदाचारलीनः ।\nकुदृष्टिः कुवाक्यप्रबन्धः सदाहं\nगतिस्त्वं गतिस्त्वं त्वमेका भवानि ॥", meaning: { en: "I am a doer of evil deeds, a keeper of bad company, of bad mind, a bad servant, lacking the customs of my family, steeped in wrong conduct, of evil vision, and always given to evil speech. You are my refuge, You are my refuge, You alone, O Bhavani.", kn: "ನಾನು ಕುಕರ್ಮಿ, ಕೆಟ್ಟ ಸಹವಾಸಿ, ಕೆಟ್ಟ ಬುದ್ಧಿಯವ, ಕೆಟ್ಟ ದಾಸ; ಕುಲಾಚಾರ ಹೀನ, ಕದಾಚಾರದಲ್ಲಿ ಮುಳುಗಿದವ; ಕೆಟ್ಟ ದೃಷ್ಟಿಯವ, ಸದಾ ಕೆಟ್ಟ ಮಾತುಗಳಲ್ಲಿ ತೊಡಗಿದವ. ಹೇ ಭವಾನಿ, ನೀನೇ ಗತಿ, ನೀನೇ ಗತಿ, ನೀನೊಬ್ಬಳೇ ಗತಿ." } },
        { n: 6, text: "प्रजेशं रमेशं महेशं सुरेशं\nदिनेशं निशीथेश्वरं वा कदाचित् ।\nन जानामि चान्यत् सदाहं शरण्ये\nगतिस्त्वं गतिस्त्वं त्वमेका भवानि ॥", meaning: { en: "Brahma, Vishnu, Shiva, Indra, the sun or the moon: I never know any other, O Refuge, at any time. You are my refuge, You are my refuge, You alone, O Bhavani.", kn: "ಬ್ರಹ್ಮ, ವಿಷ್ಣು, ಶಿವ, ಇಂದ್ರ, ಸೂರ್ಯ ಅಥವಾ ಚಂದ್ರ – ಇವರನ್ನು ಎಂದೂ ಬೇರೆ ಯಾರನ್ನೂ ನಾನು ಅರಿಯೆ, ಹೇ ಶರಣ್ಯೆ. ಹೇ ಭವಾನಿ, ನೀನೇ ಗತಿ, ನೀನೇ ಗತಿ, ನೀನೊಬ್ಬಳೇ ಗತಿ." } },
        { n: 7, text: "विवादे विषादे प्रमादे प्रवासे\nजले चानले पर्वते शत्रुमध्ये ।\nअरण्ये शरण्ये सदा मां प्रपाहि\nगतिस्त्वं गतिस्त्वं त्वमेका भवानि ॥", meaning: { en: "In dispute, in despair, in negligence, in exile, in water, in fire, on a mountain, in the midst of enemies, in the forest: always protect me, O Refuge. You are my refuge, You are my refuge, You alone, O Bhavani.", kn: "ವಿವಾದದಲ್ಲಿ, ವಿಷಾದದಲ್ಲಿ, ಪ್ರಮಾದದಲ್ಲಿ, ಪ್ರವಾಸದಲ್ಲಿ, ನೀರಿನಲ್ಲಿ, ಬೆಂಕಿಯಲ್ಲಿ, ಪರ್ವತದಲ್ಲಿ, ಶತ್ರುಗಳ ನಡುವೆ, ಅರಣ್ಯದಲ್ಲಿ, ಹೇ ಶರಣ್ಯೆ, ನನ್ನನ್ನು ಸದಾ ಕಾಪಾಡು. ಹೇ ಭವಾನಿ, ನೀನೇ ಗತಿ, ನೀನೇ ಗತಿ, ನೀನೊಬ್ಬಳೇ ಗತಿ." } },
        { n: 8, text: "अनाथो दरिद्रो जरारोगयुक्तो\nमहाक्षीणदीनः सदा जाड्यवक्त्रः ।\nविपत्तौ प्रविष्टः प्रनष्टः सदाहं\nगतिस्त्वं गतिस्त्वं त्वमेका भवानि ॥", meaning: { en: "I am helpless, poor, burdened with old age and disease, very weak and wretched, always dull of speech; fallen into calamity and ruined. You are my refuge, You are my refuge, You alone, O Bhavani.", kn: "ನಾನು ಅನಾಥ, ದರಿದ್ರ, ವೃದ್ಧಾಪ್ಯ ರೋಗಗಳಿಂದ ಕೂಡಿದವ, ಅತಿ ಕ್ಷೀಣ ದೀನ, ಸದಾ ಜಡ ಮಾತಿನವ; ವಿಪತ್ತಿನಲ್ಲಿ ಸಿಲುಕಿ ನಾಶವಾಗುತ್ತಿದ್ದೇನೆ. ಹೇ ಭವಾನಿ, ನೀನೇ ಗತಿ, ನೀನೇ ಗತಿ, ನೀನೊಬ್ಬಳೇ ಗತಿ." } },
        { text: "इति श्रीमच्छङ्कराचार्यकृतं भवान्यष्टकं सम्पूर्णम् ॥", meaning: { en: "Thus ends the Bhavani Ashtakam composed by Sri Shankaracharya.", kn: "ಹೀಗೆ ಶ್ರೀಶಂಕರಾಚಾರ್ಯ ರಚಿತ ಭವಾನ್ಯಷ್ಟಕವು ಸಂಪೂರ್ಣವಾಯಿತು." } },
      ],
    },
  ],
};
