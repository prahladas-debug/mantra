// Śrī Kṛṣṇāṣṭakam (वसुदेवसुतं देवं …), the popular eight anuṣṭubh verses with the refrain
// "kṛṣṇaṃ vande jagadgurum"; author unknown (not the Śaṅkara Kṛṣṇāṣṭaka "śriyāśliṣṭo viṣṇuḥ").
// Collated Nov 2026; not yet checked line by line against a printed edition.
//
// Sources:
//   A. stotranidhi.com, Devanagari page (from the printed "Prabhāta Stotranidhi"): base text.
//   B. stotrasamhita/stotra-sangrahah (GitHub), stotras/krishna/Krishnashtakam3.tex.
//   C. raocollectionsstotra.blogspot.com, "traditional Krishnaashtakam" (Kannada script; many typing slips,
//      used only to confirm verse order and wording).
// A and B agree word for word (A writes सम्युक्तं, B संयुक्तं; the anusvara form is used here).
// C ends the phala verse "smaraṇāt tasya naśyati"; A and B "smaraṇena vinaśyati", kept.
import type { Mantra } from '../types';

export const krishnashtakam: Mantra = {
  id: "krishnashtakam",
  title: "कृष्णाष्टकम्",
  titleEn: "Krishnashtakam",
  category: "stotra",
  deity: "Śrī Kṛṣṇa",
  source: "Traditional",
  summary:
    "Eight simple verses describing the form of Sri Krishna, son of Vasudeva and the joy of Devaki, each ending \"I salute Krishna, the teacher of the world\". A ninth verse says that reciting it on rising in the morning destroys the sins of countless births.",
  summaryKn:
    "ವಸುದೇವನ ಮಗನೂ ದೇವಕಿಯ ಆನಂದವೂ ಆದ ಶ್ರೀಕೃಷ್ಣನ ರೂಪವನ್ನು ವರ್ಣಿಸುವ ಸರಳವಾದ ಎಂಟು ಶ್ಲೋಕಗಳು; ಪ್ರತಿಯೊಂದೂ \"ಜಗದ್ಗುರುವಾದ ಕೃಷ್ಣನಿಗೆ ವಂದಿಸುತ್ತೇನೆ\" ಎಂದು ಮುಗಿಯುತ್ತದೆ. ಬೆಳಿಗ್ಗೆ ಎದ್ದೊಡನೆ ಇದನ್ನು ಪಠಿಸಿದರೆ ಕೋಟಿ ಜನ್ಮಗಳ ಪಾಪ ನಾಶವಾಗುತ್ತದೆ ಎಂದು ಒಂಬತ್ತನೆಯ ಶ್ಲೋಕ ಹೇಳುತ್ತದೆ.",
  difficulty: "easy",
  completeness: "complete",
  sections: [
    {
      title: "स्तोत्रम्",
      titleEn: "Stotram",
      verses: [
        { n: 1, text: "वसुदेवसुतं देवं कंसचाणूरमर्दनम् ।\nदेवकीपरमानन्दं कृष्णं वन्दे जगद्गुरुम् ॥", meaning: { en: "I salute Krishna, the teacher of the world: the divine son of Vasudeva, the destroyer of Kamsa and Canura, the supreme joy of Devaki.", kn: "ವಸುದೇವನ ಮಗನೂ, ದೇವನೂ, ಕಂಸ ಚಾಣೂರರನ್ನು ಮರ್ದಿಸಿದವನೂ, ದೇವಕಿಗೆ ಪರಮಾನಂದವನ್ನು ನೀಡಿದವನೂ ಆದ ಜಗದ್ಗುರು ಶ್ರೀಕೃಷ್ಣನಿಗೆ ವಂದಿಸುತ್ತೇನೆ." } },
        { n: 2, text: "अतसीपुष्पसङ्काशं हारनूपुरशोभितम् ।\nरत्नकङ्कणकेयूरं कृष्णं वन्दे जगद्गुरुम् ॥", meaning: { en: "I salute Krishna, the teacher of the world: dark blue like the flax flower, adorned with necklaces and anklets, wearing jewelled bracelets and armlets.", kn: "ಅಗಸೆ ಹೂವಿನಂತೆ ನೀಲವರ್ಣದವನೂ, ಹಾರ ನೂಪುರಗಳಿಂದ ಶೋಭಿಸುವವನೂ, ರತ್ನದ ಕಂಕಣ ಕೇಯೂರಗಳನ್ನು ಧರಿಸಿದವನೂ ಆದ ಜಗದ್ಗುರು ಶ್ರೀಕೃಷ್ಣನಿಗೆ ವಂದಿಸುತ್ತೇನೆ." } },
        { n: 3, text: "कुटिलालकसंयुक्तं पूर्णचन्द्रनिभाननम् ।\nविलसत्कुण्डलधरं कृष्णं वन्दे जगद्गुरुम् ॥", meaning: { en: "I salute Krishna, the teacher of the world: with curling locks of hair, a face like the full moon, and shining earrings.", kn: "ಗುಂಗುರು ಕೂದಲುಳ್ಳವನೂ, ಹುಣ್ಣಿಮೆಯ ಚಂದ್ರನಂತಹ ಮುಖವುಳ್ಳವನೂ, ಹೊಳೆಯುವ ಕುಂಡಲಗಳನ್ನು ಧರಿಸಿದವನೂ ಆದ ಜಗದ್ಗುರು ಶ್ರೀಕೃಷ್ಣನಿಗೆ ವಂದಿಸುತ್ತೇನೆ." } },
        { n: 4, text: "मन्दारगन्धसंयुक्तं चारुहासं चतुर्भुजम् ।\nबर्हिपिञ्छावचूडाङ्गं कृष्णं वन्दे जगद्गुरुम् ॥", meaning: { en: "I salute Krishna, the teacher of the world: fragrant with mandara flowers, with a charming smile and four arms, His crown adorned with a peacock feather.", kn: "ಮಂದಾರ ಹೂವಿನ ಪರಿಮಳದಿಂದ ಕೂಡಿದವನೂ, ಮನೋಹರವಾದ ನಗೆಯುಳ್ಳವನೂ, ನಾಲ್ಕು ಭುಜಗಳುಳ್ಳವನೂ, ನವಿಲುಗರಿಯಿಂದ ಅಲಂಕೃತವಾದ ಶಿಖೆಯುಳ್ಳವನೂ ಆದ ಜಗದ್ಗುರು ಶ್ರೀಕೃಷ್ಣನಿಗೆ ವಂದಿಸುತ್ತೇನೆ." } },
        { n: 5, text: "उत्फुल्लपद्मपत्राक्षं नीलजीमूतसन्निभम् ।\nयादवानां शिरोरत्नं कृष्णं वन्दे जगद्गुरुम् ॥", meaning: { en: "I salute Krishna, the teacher of the world: with eyes like the petals of a full-blown lotus, dark like a blue rain cloud, the crest jewel of the Yadavas.", kn: "ಅರಳಿದ ಕಮಲದ ದಳಗಳಂತಹ ಕಣ್ಣುಗಳುಳ್ಳವನೂ, ನೀಲಮೇಘದಂತೆ ಶ್ಯಾಮಲನೂ, ಯಾದವರ ಶಿರೋರತ್ನನೂ ಆದ ಜಗದ್ಗುರು ಶ್ರೀಕೃಷ್ಣನಿಗೆ ವಂದಿಸುತ್ತೇನೆ." } },
        { n: 6, text: "रुक्मिणीकेलिसंयुक्तं पीताम्बरसुशोभितम् ।\nअवाप्ततुलसीगन्धं कृष्णं वन्दे जगद्गुरुम् ॥", meaning: { en: "I salute Krishna, the teacher of the world: who delights in play with Rukmini, who shines in yellow silk, and who bears the fragrance of tulasi.", kn: "ರುಕ್ಮಿಣಿಯೊಡನೆ ವಿನೋದದಲ್ಲಿ ತೊಡಗಿರುವವನೂ, ಪೀತಾಂಬರದಿಂದ ಶೋಭಿಸುವವನೂ, ತುಳಸಿಯ ಪರಿಮಳವನ್ನು ಹೊಂದಿರುವವನೂ ಆದ ಜಗದ್ಗುರು ಶ್ರೀಕೃಷ್ಣನಿಗೆ ವಂದಿಸುತ್ತೇನೆ." } },
        { n: 7, text: "गोपिकानां कुचद्वन्द्वकुङ्कुमाङ्कितवक्षसम् ।\nश्रीनिकेतं महेष्वासं कृष्णं वन्दे जगद्गुरुम् ॥", meaning: { en: "I salute Krishna, the teacher of the world: whose chest bears the kumkum from the embrace of the gopis, the abode of Shri (Lakshmi), the mighty archer.", kn: "ಗೋಪಿಯರ ಆಲಿಂಗನದ ಕುಂಕುಮದಿಂದ ಗುರುತಾದ ಎದೆಯುಳ್ಳವನೂ, ಶ್ರೀದೇವಿಯ ನೆಲೆಯಾದವನೂ, ಮಹಾ ಧನುರ್ಧಾರಿಯೂ ಆದ ಜಗದ್ಗುರು ಶ್ರೀಕೃಷ್ಣನಿಗೆ ವಂದಿಸುತ್ತೇನೆ." } },
        { n: 8, text: "श्रीवत्साङ्कं महोरस्कं वनमालाविराजितम् ।\nशङ्खचक्रधरं देवं कृष्णं वन्दे जगद्गुरुम् ॥", meaning: { en: "I salute Krishna, the teacher of the world: marked with the Shrivatsa, broad-chested, resplendent with the garland of forest flowers, the God who holds the conch and the discus.", kn: "ಶ್ರೀವತ್ಸ ಚಿಹ್ನೆಯುಳ್ಳವನೂ, ವಿಶಾಲವಾದ ಎದೆಯುಳ್ಳವನೂ, ವನಮಾಲೆಯಿಂದ ವಿರಾಜಿಸುವವನೂ, ಶಂಖಚಕ್ರಧಾರಿಯಾದ ದೇವನೂ ಆದ ಜಗದ್ಗುರು ಶ್ರೀಕೃಷ್ಣನಿಗೆ ವಂದಿಸುತ್ತೇನೆ." } },
        { n: 9, text: "कृष्णाष्टकमिदं पुण्यं प्रातरुत्थाय यः पठेत् ।\nकोटिजन्मकृतं पापं स्मरणेन विनश्यति ॥", meaning: { en: "Whoever rises in the morning and recites this holy Krishnashtakam, by that remembrance the sins committed in ten million births are destroyed.", kn: "ಬೆಳಿಗ್ಗೆ ಎದ್ದು ಈ ಪುಣ್ಯಕರವಾದ ಕೃಷ್ಣಾಷ್ಟಕವನ್ನು ಯಾರು ಪಠಿಸುತ್ತಾರೋ, ಆ ಸ್ಮರಣೆಯಿಂದ ಅವರ ಕೋಟಿ ಜನ್ಮಗಳಲ್ಲಿ ಮಾಡಿದ ಪಾಪವು ನಾಶವಾಗುತ್ತದೆ." } },
        { text: "इति श्रीकृष्णाष्टकं सम्पूर्णम् ॥", meaning: { en: "Thus ends the Krishnashtakam.", kn: "ಹೀಗೆ ಶ್ರೀಕೃಷ್ಣಾಷ್ಟಕವು ಸಂಪೂರ್ಣವಾಯಿತು." } },
      ],
    },
  ],
};
