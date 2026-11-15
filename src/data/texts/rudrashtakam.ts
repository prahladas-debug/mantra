// Śrī Rudrāṣṭakam (नमामीशमीशान निर्वाणरूपं …) of Gosvāmī Tulasīdāsa, from the Rāmacaritamānasa,
// Uttarakāṇḍa: the hymn the brāhmaṇa guru of Kākabhuśuṇḍi sings to Śiva for his cursed disciple.
// Collated Nov 2026; not yet checked against a printed Mānasa.
//
// Sources:
//   A. Gita Press, Stotraratnāvalī no. 15 "श्रीरुद्राष्टकम्", with Hindi translation
//      (sanskrit/raw_etexts, misc-gp): base text.
//   B. sa.wikisource, "रुद्राष्टकम्" (typed copy).
//   C. raocollectionsstotra.blogspot.com, "Rudrashtakam by Tulasidas" (Kannada and Devanagari).
//   D. stotranidhi.com, Devanagari page: a Sanskritised recension.
// A, B and C agree on the Mānasa wording. D differs throughout and is not followed:
//   v3 मनोभूतकोटिप्रभासी शरीरम्; v4 शुभ्रनेत्रं, कृपालुं, दयालुम्; v5 अखण्डं भजे, त्रयीशूल;
//   v8 देव तुभ्यम्, शापान्नमामीश; v9 हरतुष्टये (A B C: …प्रभा श्री शरीरं; भ्रू सुनेत्रं; कृपालं; दयालं;
//   अखण्डं अजं; त्रयःशूल; शम्भु तुभ्यं; आपन्नमामीश; हरतोषये).
// v2 गिरा ज्ञान (B C D) / गिरा ग्यान (A, Tulasīdāsa's own spelling): ज्ञान is used here.
// Spacing and the final -म् / -ं of half-verses follow C.
import type { Mantra } from '../types';

export const rudrashtakam: Mantra = {
  id: "rudrashtakam",
  title: "रुद्राष्टकम्",
  titleEn: "Rudrashtakam",
  category: "stotra",
  deity: "Śiva (Rudra)",
  source: "Tulasidasa, Ramacharitamanas (Uttara Kanda)",
  summary:
    "Eight verses to Shiva from Tulasidasa's Ramacharitamanas, sung by the brahmana guru of Kakabhushundi to win Shiva's grace for his disciple. They praise Shiva as the formless Absolute beyond speech and thought, and also as the gracious Lord of Kailasa with the Ganga in His hair, and end with a humble plea: \"I know neither yoga nor japa nor worship; protect me, O Shambhu.\"",
  summaryKn:
    "ತುಲಸೀದಾಸರ ರಾಮಚರಿತಮಾನಸದಲ್ಲಿ, ಕಾಕಭುಶುಂಡಿಯ ಗುರುವಾದ ಬ್ರಾಹ್ಮಣನು ತನ್ನ ಶಿಷ್ಯನಿಗಾಗಿ ಶಿವನ ಅನುಗ್ರಹವನ್ನು ಬೇಡುತ್ತ ಹಾಡಿದ ಶಿವನ ಎಂಟು ಶ್ಲೋಕಗಳು. ಮಾತಿಗೂ ಮನಸ್ಸಿಗೂ ನಿಲುಕದ ನಿರಾಕಾರ ಪರತತ್ತ್ವವಾಗಿಯೂ, ಜಟೆಯಲ್ಲಿ ಗಂಗೆಯನ್ನು ಧರಿಸಿದ ಕರುಣಾಮಯಿ ಕೈಲಾಸನಾಥನಾಗಿಯೂ ಶಿವನನ್ನು ಸ್ತುತಿಸಿ, \"ನಾನು ಯೋಗ, ಜಪ, ಪೂಜೆ ಯಾವುದನ್ನೂ ಅರಿಯೆ; ಹೇ ಶಂಭುವೇ, ನನ್ನನ್ನು ಕಾಪಾಡು\" ಎಂಬ ವಿನಮ್ರ ಪ್ರಾರ್ಥನೆಯೊಂದಿಗೆ ಮುಗಿಯುತ್ತದೆ.",
  difficulty: "easy",
  completeness: "complete",
  sections: [
    {
      title: "स्तोत्रम्",
      titleEn: "Stotram",
      verses: [
        { n: 1, text: "नमामीशमीशान निर्वाणरूपं\nविभुं व्यापकं ब्रह्मवेदस्वरूपम् ।\nनिजं निर्गुणं निर्विकल्पं निरीहं\nचिदाकाशमाकाशवासं भजेऽहम् ॥", meaning: { en: "I bow to You, O Ishana, Lord, whose form is liberation itself; the all-powerful, all-pervading Brahman, whose very form is the Veda; abiding in His own nature, beyond the gunas, beyond all mental distinctions, free of desire; boundless consciousness, dwelling everywhere like the sky. Him I worship.", kn: "ಹೇ ಈಶಾನನೇ, ಮುಕ್ತಿಸ್ವರೂಪನೂ, ಸಮರ್ಥನೂ, ಸರ್ವವ್ಯಾಪಕನೂ, ಬ್ರಹ್ಮನೂ, ವೇದಸ್ವರೂಪನೂ ಆದ ಈಶನಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ. ತನ್ನ ಸ್ವರೂಪದಲ್ಲೇ ನೆಲೆಸಿರುವ, ನಿರ್ಗುಣನಾದ, ನಿರ್ವಿಕಲ್ಪನಾದ, ಬಯಕೆಯಿಲ್ಲದ, ಚಿದಾಕಾಶಸ್ವರೂಪನಾದ, ಆಕಾಶದಂತೆ ಎಲ್ಲೆಡೆ ನೆಲೆಸಿರುವ ಅವನನ್ನು ನಾನು ಭಜಿಸುತ್ತೇನೆ." } },
        { n: 2, text: "निराकारमोङ्कारमूलं तुरीयं\nगिरा ज्ञान गोतीतमीशं गिरीशम् ।\nकरालं महाकाल कालं कृपालं\nगुणागार संसारपारं नतोऽहम् ॥", meaning: { en: "I bow to Him who is formless, the source of Omkara, the fourth state beyond waking, dream and sleep; beyond speech, understanding and the senses; the Lord, the Lord of the mountain (Kailasa); fearsome, the death of Mahakala himself, yet merciful; the abode of virtues, who carries us beyond worldly existence.", kn: "ನಿರಾಕಾರನೂ, ಓಂಕಾರದ ಮೂಲನೂ, ತುರೀಯನೂ, ಮಾತು ಜ್ಞಾನ ಇಂದ್ರಿಯಗಳಿಗೆ ಮೀರಿದವನೂ, ಈಶನೂ, ಗಿರೀಶನೂ (ಕೈಲಾಸನಾಥನೂ), ಭಯಂಕರನೂ, ಮಹಾಕಾಲನಿಗೂ ಕಾಲನೂ, ಕೃಪಾಳುವೂ, ಗುಣಗಳ ಆಗರನೂ, ಸಂಸಾರವನ್ನು ದಾಟಿಸುವವನೂ ಆದ ಅವನಿಗೆ ನಾನು ನಮಸ್ಕರಿಸುತ್ತೇನೆ." } },
        { n: 3, text: "तुषाराद्रि सङ्काश गौरं गभीरं\nमनोभूत कोटिप्रभा श्री शरीरम् ।\nस्फुरन्मौलि कल्लोलिनी चारु गङ्गा\nलसद्भालबालेन्दु कण्ठे भुजङ्गा ॥", meaning: { en: "He is white like the snowy Himalaya and profound; His body has the splendour and beauty of millions of Kamadevas. On His head the lovely Ganga ripples and gleams; on His forehead shines the crescent moon, and serpents adorn His neck.", kn: "ಅವನು ಹಿಮಾಲಯದಂತೆ ಬೆಳ್ಳಗಿರುವವನು, ಗಂಭೀರನು; ಅವನ ಶರೀರವು ಕೋಟಿ ಮನ್ಮಥರ ಕಾಂತಿ ಸೌಂದರ್ಯಗಳುಳ್ಳದ್ದು. ಅವನ ತಲೆಯ ಮೇಲೆ ಅಲೆಗಳಿಂದ ಕೂಡಿದ ಸುಂದರ ಗಂಗೆ ಹೊಳೆಯುತ್ತಾಳೆ; ಹಣೆಯಲ್ಲಿ ಬಾಲಚಂದ್ರನು ಬೆಳಗುತ್ತಾನೆ; ಕೊರಳಲ್ಲಿ ಸರ್ಪಗಳು ಶೋಭಿಸುತ್ತವೆ." } },
        { n: 4, text: "चलत्कुण्डलं भ्रू सुनेत्रं विशालं\nप्रसन्नाननं नीलकण्ठं दयालम् ।\nमृगाधीशचर्माम्बरं मुण्डमालं\nप्रियं शङ्करं सर्वनाथं भजामि ॥", meaning: { en: "I worship Shankara, the beloved, the Lord of all: with swinging earrings, beautiful brows and large eyes, a gracious face and a blue throat, full of compassion, clad in a lion's skin and wearing a garland of skulls.", kn: "ಅಲುಗಾಡುವ ಕುಂಡಲಗಳುಳ್ಳ, ಸುಂದರ ಹುಬ್ಬುಗಳೂ ವಿಶಾಲ ಕಣ್ಣುಗಳೂ ಉಳ್ಳ, ಪ್ರಸನ್ನ ಮುಖವುಳ್ಳ, ನೀಲಕಂಠನಾದ, ದಯಾಳುವಾದ, ಸಿಂಹಚರ್ಮವನ್ನು ವಸ್ತ್ರವಾಗಿ ಧರಿಸಿದ, ರುಂಡಮಾಲೆಯನ್ನು ತೊಟ್ಟ, ಪ್ರಿಯನಾದ, ಸರ್ವನಾಥನಾದ ಶಂಕರನನ್ನು ನಾನು ಭಜಿಸುತ್ತೇನೆ." } },
        { n: 5, text: "प्रचण्डं प्रकृष्टं प्रगल्भं परेशं\nअखण्डं अजं भानुकोटिप्रकाशम् ।\nत्रयःशूलनिर्मूलनं शूलपाणिं\nभजेऽहं भवानीपतिं भावगम्यम् ॥", meaning: { en: "I worship the Lord of Bhavani, who is reached through loving devotion: fierce, most excellent, bold, the Supreme Lord, undivided, unborn, shining like ten million suns; who uproots the three kinds of suffering, and holds the trident in His hand.", kn: "ಪ್ರಚಂಡನೂ, ಶ್ರೇಷ್ಠನೂ, ಪ್ರಗಲ್ಭನೂ, ಪರಮೇಶ್ವರನೂ, ಅಖಂಡನೂ, ಜನ್ಮರಹಿತನೂ, ಕೋಟಿ ಸೂರ್ಯರಂತೆ ಪ್ರಕಾಶಿಸುವವನೂ, ಮೂರು ಬಗೆಯ ತಾಪಗಳನ್ನು ಬೇರುಸಹಿತ ಕಿತ್ತೊಗೆಯುವವನೂ, ತ್ರಿಶೂಲಧಾರಿಯೂ, ಭಕ್ತಿಭಾವದಿಂದ ಹೊಂದಬಹುದಾದವನೂ ಆದ ಭವಾನೀಪತಿಯನ್ನು ನಾನು ಭಜಿಸುತ್ತೇನೆ." } },
        { n: 6, text: "कलातीत कल्याण कल्पान्तकारी\nसदा सज्जनानन्ददाता पुरारी ।\nचिदानन्द सन्दोह मोहापहारी\nप्रसीद प्रसीद प्रभो मन्मथारी ॥", meaning: { en: "O Lord, beyond all parts and measures, the auspicious One, who brings the aeon to its end; ever the giver of joy to the good; enemy of the Tripuras; a mass of consciousness and bliss, remover of delusion; enemy of Manmatha: be gracious, be gracious to me!", kn: "ಹೇ ಪ್ರಭುವೇ, ಕಲೆಗಳನ್ನು ಮೀರಿದವನೇ, ಮಂಗಳಸ್ವರೂಪನೇ, ಕಲ್ಪಾಂತವನ್ನು ಮಾಡುವವನೇ, ಸದಾ ಸಜ್ಜನರಿಗೆ ಆನಂದವನ್ನು ನೀಡುವವನೇ, ತ್ರಿಪುರಾರಿಯೇ, ಚಿದಾನಂದಘನನೇ, ಮೋಹವನ್ನು ಹೋಗಲಾಡಿಸುವವನೇ, ಮನ್ಮಥನ ಶತ್ರುವೇ, ಪ್ರಸನ್ನನಾಗು, ಪ್ರಸನ್ನನಾಗು!" } },
        { n: 7, text: "न यावद् उमानाथपादारविन्दं\nभजन्तीह लोके परे वा नराणाम् ।\nन तावत्सुखं शान्ति सन्तापनाशं\nप्रसीद प्रभो सर्वभूताधिवासम् ॥", meaning: { en: "As long as people do not worship the lotus feet of Uma's Lord, they find no happiness, no peace and no end of their suffering, in this world or the next. O Lord, dwelling in all beings, be gracious.", kn: "ಮನುಷ್ಯರು ಉಮಾನಾಥನ ಪಾದಕಮಲಗಳನ್ನು ಎಲ್ಲಿಯವರೆಗೆ ಭಜಿಸುವುದಿಲ್ಲವೋ, ಅಲ್ಲಿಯವರೆಗೆ ಅವರಿಗೆ ಈ ಲೋಕದಲ್ಲಾಗಲೀ ಪರಲೋಕದಲ್ಲಾಗಲೀ ಸುಖವೂ ಶಾಂತಿಯೂ ಇಲ್ಲ, ಸಂತಾಪವೂ ನಾಶವಾಗುವುದಿಲ್ಲ. ಸರ್ವಭೂತಗಳಲ್ಲಿ ನೆಲೆಸಿರುವ ಹೇ ಪ್ರಭುವೇ, ಪ್ರಸನ್ನನಾಗು." } },
        { n: 8, text: "न जानामि योगं जपं नैव पूजां\nनतोऽहं सदा सर्वदा शम्भु तुभ्यम् ।\nजरा जन्म दुःखौघ तातप्यमानं\nप्रभो पाहि आपन्नमामीश शम्भो ॥", meaning: { en: "I know neither yoga, nor japa, nor worship; O Shambhu, I simply bow to You always and at all times. O Lord, O Ishvara, O Shambhu, protect me, afflicted and burning in the flood of sorrows of old age and birth.", kn: "ನಾನು ಯೋಗವನ್ನಾಗಲೀ ಜಪವನ್ನಾಗಲೀ ಪೂಜೆಯನ್ನಾಗಲೀ ಅರಿಯೆ. ಹೇ ಶಂಭುವೇ, ಸದಾ ಸರ್ವದಾ ನಿನಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ ಅಷ್ಟೆ. ಹೇ ಪ್ರಭುವೇ, ಹೇ ಈಶನೇ, ಹೇ ಶಂಭುವೇ, ಮುಪ್ಪು, ಹುಟ್ಟು, ದುಃಖಗಳ ಪ್ರವಾಹದಲ್ಲಿ ಬೇಯುತ್ತಿರುವ ಆಪನ್ನನಾದ ನನ್ನನ್ನು ಕಾಪಾಡು." } },
        { n: 9, text: "रुद्राष्टकमिदं प्रोक्तं विप्रेण हरतोषये ।\nये पठन्ति नरा भक्त्या तेषां शम्भुः प्रसीदति ॥", meaning: { en: "This Rudrashtakam was spoken by a brahmana to please Hara. Shambhu is gracious to those who recite it with devotion.", kn: "ಈ ರುದ್ರಾಷ್ಟಕವನ್ನು ಹರನನ್ನು ಸಂತೋಷಪಡಿಸುವುದಕ್ಕಾಗಿ ಒಬ್ಬ ಬ್ರಾಹ್ಮಣನು ಹೇಳಿದನು. ಇದನ್ನು ಭಕ್ತಿಯಿಂದ ಪಠಿಸುವವರ ಮೇಲೆ ಶಂಭುವು ಪ್ರಸನ್ನನಾಗುತ್ತಾನೆ." } },
        { text: "इति श्रीगोस्वामितुलसीदासकृतं श्रीरुद्राष्टकं सम्पूर्णम् ॥", meaning: { en: "Thus ends the Rudrashtakam composed by Gosvami Tulasidasa.", kn: "ಹೀಗೆ ಶ್ರೀಗೋಸ್ವಾಮಿ ತುಲಸೀದಾಸರು ರಚಿಸಿದ ಶ್ರೀರುದ್ರಾಷ್ಟಕವು ಸಂಪೂರ್ಣವಾಯಿತು." } },
      ],
    },
  ],
};
