// Śrī Kālabhairavāṣṭakam (देवराजसेव्यमानपावनाङ्घ्रिपङ्कजं …), attributed to Ādi Śaṅkarācārya.
// Collated Nov 2026; not yet checked line by line against a printed edition.
//
// Sources:
//   A. stotranidhi.com, Devanagari page (from the printed "Prabhāta Stotranidhi"): base text.
//   B. stotrasamhita/stotra-sangrahah (GitHub), stotras/shiva/Kalabhairavashtakam.tex.
//   C. sa.wikisource, "कालभैरवाष्टकम् (मूलसहितम्)": a printed edition of Śaṅkara's stotras (1910).
//   D. sa.wikisource, "कालभैरवाष्टकम् (बृहत्स्तोत्ररत्नाकरान्तर्गतम्)": the Bṛhatstotraratnākara (1953).
//   E. sa.wikisource, "कालभैरवाष्टकम्" (typed copy).
// Readings (A unless stated):
//   v1 व्यालयज्ञसूत्रमिन्दुशेखरं (A B D E) / -सूत्रबिन्दुशेखरं (C: probably a misprint)
//   v4 स्थिरं (A C) / स्थितं (B); निक्वणन्मनोज्ञ- (A C) / विनिक्वणन्मनोज्ञ- (B)
//   v5 स्वर्णवर्णकेशपाश-…-शोभिताङ्गनिर्मलं (A C) / -शोभिताङ्गमण्डलं (B)
//   v6 -भूषणं (A B) / -मोक्षणं (C D E); both give sense; भूषणं kept
//   v7 कपालमालिकाधरं (A B C E) / -कन्धरं (D, typo)
//   v8 काशिवासिलोक- (A C) / काशिवासलोक- (B)
//   v9 शोकमोहदैन्यलोभकोपतापनाशनं (A D E) / शोकमोहलोभदैन्य- (C)
import type { Mantra } from '../types';

export const kalabhairavashtakam: Mantra = {
  id: "kalabhairavashtakam",
  title: "कालभैरवाष्टकम्",
  titleEn: "Kalabhairavashtakam",
  category: "stotra",
  deity: "Śiva (Kālabhairava)",
  source: "Attributed to Adi Shankaracharya",
  summary:
    "Eight verses to Kalabhairava, the fierce form of Shiva who rules Kashi (Varanasi), each ending \"I worship Kalabhairava, Lord of the city of Kashi\". They describe His sacred feet, snake sacred thread, many weapons, fearsome fangs and skull garland, and His power to carry devotees across the ocean of worldly life. The ninth verse gives the fruit of reciting it.",
  summaryKn:
    "ಕಾಶೀ ನಗರದ ಒಡೆಯನಾದ ಶಿವನ ಉಗ್ರರೂಪ ಕಾಲಭೈರವನನ್ನು ಕುರಿತ ಎಂಟು ಶ್ಲೋಕಗಳು; ಪ್ರತಿಯೊಂದೂ \"ಕಾಶೀಪುರಾಧಿನಾಥ ಕಾಲಭೈರವನನ್ನು ಭಜಿಸುತ್ತೇನೆ\" ಎಂದು ಮುಗಿಯುತ್ತದೆ. ಅವನ ಪವಿತ್ರ ಪಾದಗಳು, ಸರ್ಪ ಯಜ್ಞೋಪವೀತ, ಅನೇಕ ಆಯುಧಗಳು, ಭಯಂಕರ ಕೋರೆಹಲ್ಲುಗಳು, ಕಪಾಲಮಾಲೆ ಮತ್ತು ಭಕ್ತರನ್ನು ಸಂಸಾರಸಾಗರದಾಚೆ ದಾಟಿಸುವ ಶಕ್ತಿಯನ್ನು ಇವು ವರ್ಣಿಸುತ್ತವೆ. ಒಂಬತ್ತನೆಯ ಶ್ಲೋಕವು ಫಲಶ್ರುತಿ.",
  difficulty: "advanced",
  completeness: "complete",
  sections: [
    {
      title: "स्तोत्रम्",
      titleEn: "Stotram",
      verses: [
        { n: 1, text: "देवराजसेव्यमानपावनाङ्घ्रिपङ्कजं\nव्यालयज्ञसूत्रमिन्दुशेखरं कृपाकरम् ।\nनारदादियोगिबृन्दवन्दितं दिगम्बरं\nकाशिकापुराधिनाथ कालभैरवं भजे ॥", meaning: { en: "I worship Kalabhairava, Lord of the city of Kashi: whose pure lotus feet are served by Indra, king of the gods; who wears a serpent as the sacred thread and the moon on His head; a mine of compassion; praised by the host of yogis led by Narada; sky-clad.", kn: "ದೇವರಾಜನಾದ ಇಂದ್ರನಿಂದ ಸೇವಿಸಲ್ಪಡುವ ಪವಿತ್ರ ಪಾದಕಮಲಗಳುಳ್ಳ, ಸರ್ಪವನ್ನು ಯಜ್ಞೋಪವೀತವಾಗಿಯೂ ಚಂದ್ರನನ್ನು ಶಿರೋಭೂಷಣವಾಗಿಯೂ ಧರಿಸಿದ, ಕೃಪೆಯ ಗಣಿಯಾದ, ನಾರದಾದಿ ಯೋಗಿಗಳ ಸಮೂಹದಿಂದ ವಂದಿತನಾದ, ದಿಗಂಬರನಾದ ಕಾಶೀಪುರಾಧಿನಾಥ ಕಾಲಭೈರವನನ್ನು ಭಜಿಸುತ್ತೇನೆ." } },
        { n: 2, text: "भानुकोटिभास्वरं भवाब्धितारकं परं\nनीलकण्ठमीप्सितार्थदायकं त्रिलोचनम् ।\nकालकालमम्बुजाक्षमक्षशूलमक्षरं\nकाशिकापुराधिनाथ कालभैरवं भजे ॥", meaning: { en: "I worship Kalabhairava, Lord of the city of Kashi: brilliant as ten million suns; who carries us across the ocean of worldly life; the Supreme; blue-throated; giver of desired gifts; three-eyed; the Death of death; lotus-eyed; holding a trident (whose prongs are never broken); imperishable.", kn: "ಕೋಟಿ ಸೂರ್ಯರಂತೆ ಪ್ರಕಾಶಿಸುವ, ಸಂಸಾರ ಸಾಗರವನ್ನು ದಾಟಿಸುವ, ಪರಮನಾದ, ನೀಲಕಂಠನಾದ, ಇಷ್ಟಾರ್ಥಗಳನ್ನು ನೀಡುವ, ತ್ರಿನೇತ್ರನಾದ, ಕಾಲನಿಗೂ ಕಾಲನಾದ, ಕಮಲನಯನನಾದ, ಅವಿನಾಶಿ ಶೂಲವುಳ್ಳ, ಅಕ್ಷರನಾದ ಕಾಶೀಪುರಾಧಿನಾಥ ಕಾಲಭೈರವನನ್ನು ಭಜಿಸುತ್ತೇನೆ." } },
        { n: 3, text: "शूलटङ्कपाशदण्डपाणिमादिकारणं\nश्यामकायमादिदेवमक्षरं निरामयम् ।\nभीमविक्रमं प्रभुं विचित्रताण्डवप्रियं\nकाशिकापुराधिनाथ कालभैरवं भजे ॥", meaning: { en: "I worship Kalabhairava, Lord of the city of Kashi: who holds in His hands the trident, axe, noose and staff; the first cause; dark-bodied; the original God; imperishable and free of all disease; of fearful might, the Lord who delights in His wondrous tandava dance.", kn: "ಕೈಗಳಲ್ಲಿ ತ್ರಿಶೂಲ, ಕೊಡಲಿ, ಪಾಶ, ದಂಡಗಳನ್ನು ಧರಿಸಿದ, ಆದಿಕಾರಣನಾದ, ಶ್ಯಾಮಲ ದೇಹದ, ಆದಿದೇವನಾದ, ಅವಿನಾಶಿಯಾದ, ರೋಗರಹಿತನಾದ, ಭೀಮ ಪರಾಕ್ರಮಿಯಾದ, ವಿಚಿತ್ರ ತಾಂಡವವನ್ನು ಪ್ರೀತಿಸುವ ಪ್ರಭುವಾದ ಕಾಶೀಪುರಾಧಿನಾಥ ಕಾಲಭೈರವನನ್ನು ಭಜಿಸುತ್ತೇನೆ." } },
        { n: 4, text: "भुक्तिमुक्तिदायकं प्रशस्तचारुविग्रहं\nभक्तवत्सलं स्थिरं समस्तलोकविग्रहम् ।\nनिक्वणन्मनोज्ञहेमकिङ्किणीलसत्कटिं\nकाशिकापुराधिनाथ कालभैरवं भजे ॥", meaning: { en: "I worship Kalabhairava, Lord of the city of Kashi: giver of both enjoyment and liberation; of a noble, beautiful form; tender to His devotees; steady; whose body is the whole world; whose waist shines with a charming golden girdle of tinkling bells.", kn: "ಭುಕ್ತಿ ಮುಕ್ತಿ ಎರಡನ್ನೂ ನೀಡುವ, ಶ್ರೇಷ್ಠ ಸುಂದರ ರೂಪುಳ್ಳ, ಭಕ್ತವತ್ಸಲನಾದ, ಸ್ಥಿರನಾದ, ಸಮಸ್ತ ಲೋಕಗಳೇ ದೇಹವಾದ, ಮನೋಹರವಾಗಿ ಕಿಣಿಕಿಣಿಸುವ ಚಿನ್ನದ ಗೆಜ್ಜೆಗಳ ಡಾಬಿನಿಂದ ಶೋಭಿಸುವ ಸೊಂಟವುಳ್ಳ ಕಾಶೀಪುರಾಧಿನಾಥ ಕಾಲಭೈರವನನ್ನು ಭಜಿಸುತ್ತೇನೆ." } },
        { n: 5, text: "धर्मसेतुपालकं त्वधर्ममार्गनाशकं\nकर्मपाशमोचकं सुशर्मदायकं विभुम् ।\nस्वर्णवर्णकेशपाशशोभिताङ्गनिर्मलं\nकाशिकापुराधिनाथ कालभैरवं भजे ॥", meaning: { en: "I worship Kalabhairava, Lord of the city of Kashi: guardian of the bridge of dharma; destroyer of the path of adharma; who frees us from the bonds of karma; giver of true happiness; all-pervading; whose pure body is adorned with a mass of golden-hued locks.", kn: "ಧರ್ಮವೆಂಬ ಸೇತುವೆಯನ್ನು ಕಾಯುವ, ಅಧರ್ಮ ಮಾರ್ಗವನ್ನು ನಾಶಮಾಡುವ, ಕರ್ಮ ಪಾಶಗಳಿಂದ ಬಿಡಿಸುವ, ಉತ್ತಮ ಸುಖವನ್ನು ನೀಡುವ, ವಿಭುವಾದ, ಬಂಗಾರ ವರ್ಣದ ಕೇಶರಾಶಿಯಿಂದ ಶೋಭಿಸುವ ನಿರ್ಮಲ ದೇಹವುಳ್ಳ ಕಾಶೀಪುರಾಧಿನಾಥ ಕಾಲಭೈರವನನ್ನು ಭಜಿಸುತ್ತೇನೆ." } },
        { n: 6, text: "रत्नपादुकाप्रभाभिरामपादयुग्मकं\nनित्यमद्वितीयमिष्टदैवतं निरञ्जनम् ।\nमृत्युदर्पनाशनं करालदंष्ट्रभूषणं\nकाशिकापुराधिनाथ कालभैरवं भजे ॥", meaning: { en: "I worship Kalabhairava, Lord of the city of Kashi: whose two feet are made lovely by the radiance of jewelled sandals; eternal; without a second; the chosen deity of devotees; stainless; who crushes the pride of Death; adorned with fearsome fangs.", kn: "ರತ್ನಪಾದುಕೆಗಳ ಕಾಂತಿಯಿಂದ ಸುಂದರವಾದ ಪಾದಯುಗಳವುಳ್ಳ, ನಿತ್ಯನಾದ, ಅದ್ವಿತೀಯನಾದ, ಇಷ್ಟದೈವವಾದ, ನಿರ್ಮಲನಾದ, ಮೃತ್ಯುವಿನ ದರ್ಪವನ್ನು ನಾಶಮಾಡುವ, ಭಯಂಕರ ಕೋರೆದಾಡೆಗಳೇ ಆಭರಣವಾದ ಕಾಶೀಪುರಾಧಿನಾಥ ಕಾಲಭೈರವನನ್ನು ಭಜಿಸುತ್ತೇನೆ." } },
        { n: 7, text: "अट्टहासभिन्नपद्मजाण्डकोशसन्ततिं\nदृष्टिपातनष्टपापजालमुग्रशासनम् ।\nअष्टसिद्धिदायकं कपालमालिकाधरं\nकाशिकापुराधिनाथ कालभैरवं भजे ॥", meaning: { en: "I worship Kalabhairava, Lord of the city of Kashi: whose loud laughter splits the line of cosmic eggs created by Brahma; whose mere glance destroys the whole net of sins; whose rule is stern; giver of the eight siddhis; wearer of a garland of skulls.", kn: "ತನ್ನ ಅಟ್ಟಹಾಸದಿಂದ ಬ್ರಹ್ಮನು ಸೃಷ್ಟಿಸಿದ ಬ್ರಹ್ಮಾಂಡಗಳ ಸಾಲನ್ನು ಸೀಳುವ, ಕಣ್ಣೋಟದಿಂದಲೇ ಪಾಪಗಳ ಜಾಲವನ್ನು ನಾಶಮಾಡುವ, ಕಠಿಣ ಶಾಸನವುಳ್ಳ, ಅಷ್ಟಸಿದ್ಧಿಗಳನ್ನು ನೀಡುವ, ಕಪಾಲಮಾಲೆಯನ್ನು ಧರಿಸಿದ ಕಾಶೀಪುರಾಧಿನಾಥ ಕಾಲಭೈರವನನ್ನು ಭಜಿಸುತ್ತೇನೆ." } },
        { n: 8, text: "भूतसङ्घनायकं विशालकीर्तिदायकं\nकाशिवासिलोकपुण्यपापशोधकं विभुम् ।\nनीतिमार्गकोविदं पुरातनं जगत्पतिं\nकाशिकापुराधिनाथ कालभैरवं भजे ॥", meaning: { en: "I worship Kalabhairava, Lord of the city of Kashi: leader of the hosts of spirits; giver of wide fame; all-pervading; who purifies the merit and sin of the people living in Kashi; expert in the path of righteous conduct; the Ancient One, Lord of the world.", kn: "ಭೂತಗಣಗಳ ನಾಯಕನಾದ, ವಿಶಾಲ ಕೀರ್ತಿಯನ್ನು ನೀಡುವ, ಕಾಶೀವಾಸಿಗಳ ಪುಣ್ಯ ಪಾಪಗಳನ್ನು ಶೋಧಿಸುವ, ವಿಭುವಾದ, ನೀತಿಮಾರ್ಗದಲ್ಲಿ ಪರಿಣತನಾದ, ಪುರಾತನನಾದ, ಜಗತ್ಪತಿಯಾದ ಕಾಶೀಪುರಾಧಿನಾಥ ಕಾಲಭೈರವನನ್ನು ಭಜಿಸುತ್ತೇನೆ." } },
        { n: 9, text: "कालभैरवाष्टकं पठन्ति ये मनोहरं\nज्ञानमुक्तिसाधकं विचित्रपुण्यवर्धनम् ।\nशोकमोहदैन्यलोभकोपतापनाशनं\nते प्रयान्ति कालभैरवाङ्घ्रिसन्निधिं ध्रुवम् ॥", meaning: { en: "Those who recite this charming Kalabhairavashtakam, a means to knowledge and liberation, which increases wondrous merit and destroys grief, delusion, poverty, greed, anger and torment, surely reach the presence of Kalabhairava's feet.", kn: "ಜ್ಞಾನ ಮುಕ್ತಿಗಳಿಗೆ ಸಾಧನವಾದ, ವಿಚಿತ್ರ ಪುಣ್ಯವನ್ನು ವೃದ್ಧಿಸುವ, ಶೋಕ, ಮೋಹ, ದೈನ್ಯ, ಲೋಭ, ಕೋಪ, ತಾಪಗಳನ್ನು ನಾಶಮಾಡುವ ಈ ಮನೋಹರ ಕಾಲಭೈರವಾಷ್ಟಕವನ್ನು ಪಠಿಸುವವರು ಕಾಲಭೈರವನ ಪಾದಗಳ ಸನ್ನಿಧಿಯನ್ನು ನಿಶ್ಚಯವಾಗಿ ಸೇರುತ್ತಾರೆ." } },
        { text: "इति श्रीमच्छङ्कराचार्यविरचितं कालभैरवाष्टकं सम्पूर्णम् ॥", meaning: { en: "Thus ends the Kalabhairavashtakam composed by Sri Shankaracharya.", kn: "ಹೀಗೆ ಶ್ರೀಶಂಕರಾಚಾರ್ಯ ವಿರಚಿತ ಕಾಲಭೈರವಾಷ್ಟಕವು ಸಂಪೂರ್ಣವಾಯಿತು." } },
      ],
    },
  ],
};
