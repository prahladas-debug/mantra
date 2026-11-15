// Bilvāṣṭakam (त्रिदलं त्रिगुणाकारं …), recited while offering bilva leaves to Śiva; author unknown.
// Collated Nov 2026; not yet checked line by line against a printed edition.
//
// The Bilvāṣṭaka circulates in several quite different recensions (8 to 17 verses). This file gives
// the one shared by:
//   A. stotrasamhita/stotra-sangrahah (GitHub), stotras/shiva/Bilvashtakam.tex: base text.
//   B. raocollectionsstotra.blogspot.com, "Bilvashtakam" (first version, Kannada script).
// A and B agree word for word (A's verse 8, काशीक्षेत्रनिवासं…, is unnumbered; numbered here).
// Other recensions seen and not followed:
//   C. stotranidhi.com "बिल्वाष्टकम् 1" (9 verses): lacks verse 8; v4 सालग्रामशिलामेकां जातु विप्राय
//      योऽर्पयेत्; v6 पार्वत्याः स्वेदसञ्जातं … बिल्ववृक्षं नमस्यामि; v2 and v3 without ह्य-.
//   D. sa.wikisource "बिल्वाष्टकम्" (Bṛhatstotraratnākara, 1953) and B's second version: a shorter
//      recension with तव पूजां करिष्यामि and other verses (तुलसी बिल्व निर्गुण्डी …).
import type { Mantra } from '../types';

export const bilvashtakam: Mantra = {
  id: "bilvashtakam",
  title: "बिल्वाष्टकम्",
  titleEn: "Bilvashtakam",
  category: "stotra",
  deity: "Śiva",
  source: "Traditional",
  summary:
    "Verses recited while offering bilva leaves to Shiva, each ending \"one bilva leaf offered to Shiva\". The three-lobed leaf is likened to Shiva's three eyes, the three gunas and the trident, and the offering of even a single leaf is said to equal great sacrifices, gifts and pilgrimages. The last verse promises freedom from sin and the world of Shiva to one who recites it before Him.",
  summaryKn:
    "ಶಿವನಿಗೆ ಬಿಲ್ವಪತ್ರೆಯನ್ನು ಅರ್ಪಿಸುವಾಗ ಪಠಿಸುವ ಶ್ಲೋಕಗಳು; ಪ್ರತಿಯೊಂದೂ \"ಏಕಬಿಲ್ವಂ ಶಿವಾರ್ಪಣಂ\" ಎಂದು ಮುಗಿಯುತ್ತದೆ. ಮೂರು ದಳಗಳ ಎಲೆಯನ್ನು ಶಿವನ ಮೂರು ಕಣ್ಣುಗಳು, ಮೂರು ಗುಣಗಳು ಮತ್ತು ತ್ರಿಶೂಲಕ್ಕೆ ಹೋಲಿಸಲಾಗಿದೆ; ಒಂದೇ ಒಂದು ಎಲೆಯ ಅರ್ಪಣೆಯೂ ದೊಡ್ಡ ಯಜ್ಞ, ದಾನ, ತೀರ್ಥಯಾತ್ರೆಗಳಿಗೆ ಸಮ ಎನ್ನಲಾಗಿದೆ. ಶಿವಸನ್ನಿಧಿಯಲ್ಲಿ ಇದನ್ನು ಪಠಿಸುವವನು ಪಾಪಮುಕ್ತನಾಗಿ ಶಿವಲೋಕವನ್ನು ಸೇರುತ್ತಾನೆ ಎಂದು ಕೊನೆಯ ಶ್ಲೋಕ ಹೇಳುತ್ತದೆ.",
  difficulty: "easy",
  completeness: "complete",
  sections: [
    {
      title: "स्तोत्रम्",
      titleEn: "Stotram",
      note: "Offer one bilva leaf (three-lobed, unbroken) to the Shiva linga at the end of each verse.",
      noteKn: "ಪ್ರತಿ ಶ್ಲೋಕದ ಕೊನೆಯಲ್ಲಿ ಮೂರು ದಳಗಳ, ಹರಿಯದ ಒಂದು ಬಿಲ್ವಪತ್ರೆಯನ್ನು ಶಿವಲಿಂಗಕ್ಕೆ ಅರ್ಪಿಸಬೇಕು.",
      verses: [
        { n: 1, text: "त्रिदलं त्रिगुणाकारं त्रिनेत्रं च त्रियायुधम् ।\nत्रिजन्मपापसंहारं एकबिल्वं शिवार्पणम् ॥", meaning: { en: "Three-lobed, shaped like the three gunas, like the three eyes and the three-pronged weapon (of Shiva), destroying the sins of three births: one bilva leaf offered to Shiva.", kn: "ಮೂರು ದಳಗಳುಳ್ಳ, ಮೂರು ಗುಣಗಳ ಆಕಾರದ, (ಶಿವನ) ಮೂರು ಕಣ್ಣುಗಳಂತೆಯೂ ತ್ರಿಶೂಲದಂತೆಯೂ ಇರುವ, ಮೂರು ಜನ್ಮಗಳ ಪಾಪಗಳನ್ನು ನಾಶಮಾಡುವ ಒಂದು ಬಿಲ್ವಪತ್ರೆಯನ್ನು ಶಿವನಿಗೆ ಅರ್ಪಿಸುತ್ತೇನೆ." } },
        { n: 2, text: "त्रिशाखैर्बिल्वपत्रैश्च ह्यच्छिद्रैः कोमलैः शुभैः ।\nशिवपूजां करिष्यामि ह्येकबिल्वं शिवार्पणम् ॥", meaning: { en: "With three-lobed bilva leaves, unbroken, tender and fresh, I shall worship Shiva: one bilva leaf offered to Shiva.", kn: "ಮೂರು ದಳಗಳುಳ್ಳ, ಹರಿಯದ, ಕೋಮಲವಾದ, ಶುಭವಾದ ಬಿಲ್ವಪತ್ರೆಗಳಿಂದ ಶಿವಪೂಜೆಯನ್ನು ಮಾಡುತ್ತೇನೆ; ಒಂದು ಬಿಲ್ವಪತ್ರೆಯನ್ನು ಶಿವನಿಗೆ ಅರ್ಪಿಸುತ್ತೇನೆ." } },
        { n: 3, text: "अखण्डबिल्वपत्रेण पूजिते नन्दिकेश्वरे ।\nशुद्ध्यन्ति सर्वपापेभ्यो ह्येकबिल्वं शिवार्पणम् ॥", meaning: { en: "When the Lord of Nandi is worshipped with an unbroken bilva leaf, people are cleansed of all sins: one bilva leaf offered to Shiva.", kn: "ಹರಿಯದ ಬಿಲ್ವಪತ್ರೆಯಿಂದ ನಂದಿಕೇಶ್ವರನನ್ನು ಪೂಜಿಸಿದಾಗ ಜನರು ಎಲ್ಲ ಪಾಪಗಳಿಂದ ಶುದ್ಧರಾಗುತ್ತಾರೆ; ಒಂದು ಬಿಲ್ವಪತ್ರೆಯನ್ನು ಶಿವನಿಗೆ ಅರ್ಪಿಸುತ್ತೇನೆ." } },
        { n: 4, text: "शालिग्रामशिलामेकां विप्राणां जातु चार्पयेत् ।\nसोमयज्ञमहापुण्यं एकबिल्वं शिवार्पणम् ॥", meaning: { en: "The merit of giving even one shalagrama stone to brahmanas, and the great merit of the Soma sacrifice, (is gained by) one bilva leaf offered to Shiva.", kn: "ಒಂದು ಸಾಲಿಗ್ರಾಮ ಶಿಲೆಯನ್ನು ಬ್ರಾಹ್ಮಣರಿಗೆ ದಾನ ಮಾಡಿದ ಪುಣ್ಯವೂ ಸೋಮಯಾಗದ ಮಹಾಪುಣ್ಯವೂ ಒಂದು ಬಿಲ್ವಪತ್ರೆಯನ್ನು ಶಿವನಿಗೆ ಅರ್ಪಿಸುವುದರಿಂದ ದೊರೆಯುತ್ತದೆ." } },
        { n: 5, text: "दन्तिकोटिसहस्राणि वाजपेयशतानि च ।\nकोटिकन्यामहादानं एकबिल्वं शिवार्पणम् ॥", meaning: { en: "The gift of thousands of millions of elephants, a hundred Vajapeya sacrifices, and the great gift of ten million brides in marriage: (all this equals) one bilva leaf offered to Shiva.", kn: "ಸಾವಿರ ಕೋಟಿ ಆನೆಗಳ ದಾನ, ನೂರು ವಾಜಪೇಯ ಯಾಗಗಳು, ಕೋಟಿ ಕನ್ಯಾದಾನಗಳೆಂಬ ಮಹಾದಾನ – ಇವೆಲ್ಲವೂ ಶಿವನಿಗೆ ಅರ್ಪಿಸುವ ಒಂದು ಬಿಲ್ವಪತ್ರೆಗೆ ಸಮ." } },
        { n: 6, text: "लक्ष्म्यास्तनुत उत्पन्नं महादेवस्य च प्रियम् ।\nबिल्ववृक्षं प्रयच्छामि ह्येकबिल्वं शिवार्पणम् ॥", meaning: { en: "I offer the bilva tree, born from the body of Lakshmi and dear to Mahadeva: one bilva leaf offered to Shiva.", kn: "ಲಕ್ಷ್ಮಿಯ ದೇಹದಿಂದ ಹುಟ್ಟಿದ, ಮಹಾದೇವನಿಗೆ ಪ್ರಿಯವಾದ ಬಿಲ್ವವೃಕ್ಷವನ್ನು ಅರ್ಪಿಸುತ್ತೇನೆ; ಒಂದು ಬಿಲ್ವಪತ್ರೆಯನ್ನು ಶಿವನಿಗೆ ಅರ್ಪಿಸುತ್ತೇನೆ." } },
        { n: 7, text: "दर्शनं बिल्ववृक्षस्य स्पर्शनं पापनाशनम् ।\nअघोरपापसंहारं एकबिल्वं शिवार्पणम् ॥", meaning: { en: "To see the bilva tree and to touch it destroys sin, even the most terrible sin: one bilva leaf offered to Shiva.", kn: "ಬಿಲ್ವವೃಕ್ಷದ ದರ್ಶನವೂ ಸ್ಪರ್ಶವೂ ಪಾಪಗಳನ್ನು ನಾಶಮಾಡುತ್ತವೆ, ಘೋರವಾದ ಪಾಪಗಳನ್ನೂ ಹೋಗಲಾಡಿಸುತ್ತವೆ; ಒಂದು ಬಿಲ್ವಪತ್ರೆಯನ್ನು ಶಿವನಿಗೆ ಅರ್ಪಿಸುತ್ತೇನೆ." } },
        { n: 8, text: "काशीक्षेत्रनिवासं च कालभैरवदर्शनम् ।\nप्रयागमाधवं दृष्ट्वा ह्येकबिल्वं शिवार्पणम् ॥", meaning: { en: "Living in the holy land of Kashi, the sight of Kalabhairava, and seeing (Veni) Madhava at Prayaga: (the merit of these is gained by) one bilva leaf offered to Shiva.", kn: "ಕಾಶೀಕ್ಷೇತ್ರದಲ್ಲಿ ವಾಸ, ಕಾಲಭೈರವನ ದರ್ಶನ, ಪ್ರಯಾಗದಲ್ಲಿ ಮಾಧವನ ದರ್ಶನ – ಇವುಗಳ ಪುಣ್ಯವು ಶಿವನಿಗೆ ಅರ್ಪಿಸುವ ಒಂದು ಬಿಲ್ವಪತ್ರೆಯಿಂದ ದೊರೆಯುತ್ತದೆ." } },
        { n: 9, text: "मूलतो ब्रह्मरूपाय मध्यतो विष्णुरूपिणे ।\nअग्रतः शिवरूपाय ह्येकबिल्वं शिवार्पणम् ॥", meaning: { en: "To the tree that is Brahma at its root, Vishnu in its middle and Shiva at its tip: one bilva leaf offered to Shiva.", kn: "ಬೇರಿನಲ್ಲಿ ಬ್ರಹ್ಮರೂಪವೂ, ಮಧ್ಯದಲ್ಲಿ ವಿಷ್ಣುರೂಪವೂ, ತುದಿಯಲ್ಲಿ ಶಿವರೂಪವೂ ಆಗಿರುವ (ಬಿಲ್ವವೃಕ್ಷಕ್ಕೆ ನಮಸ್ಕಾರ); ಒಂದು ಬಿಲ್ವಪತ್ರೆಯನ್ನು ಶಿವನಿಗೆ ಅರ್ಪಿಸುತ್ತೇನೆ." } },
        { n: 10, text: "बिल्वाष्टकमिदं पुण्यं यः पठेच्छिवसन्निधौ ।\nसर्वपापविनिर्मुक्तः शिवलोकमवाप्नुयात् ॥", meaning: { en: "Whoever recites this holy Bilvashtakam in the presence of Shiva is freed from all sins and reaches the world of Shiva.", kn: "ಈ ಪುಣ್ಯಕರವಾದ ಬಿಲ್ವಾಷ್ಟಕವನ್ನು ಶಿವಸನ್ನಿಧಿಯಲ್ಲಿ ಯಾರು ಪಠಿಸುತ್ತಾರೋ ಅವರು ಎಲ್ಲ ಪಾಪಗಳಿಂದ ಮುಕ್ತರಾಗಿ ಶಿವಲೋಕವನ್ನು ಹೊಂದುತ್ತಾರೆ." } },
        { text: "इति बिल्वाष्टकं सम्पूर्णम् ॥", meaning: { en: "Thus ends the Bilvashtakam.", kn: "ಹೀಗೆ ಬಿಲ್ವಾಷ್ಟಕವು ಸಂಪೂರ್ಣವಾಯಿತು." } },
      ],
    },
  ],
};
