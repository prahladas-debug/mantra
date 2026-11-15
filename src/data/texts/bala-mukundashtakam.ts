// Śrī Bālamukundāṣṭakam (करारविन्देन पदारविन्दं …), traditionally ascribed to Bilvamaṅgala (Līlāśuka).
// Collated Nov 2026; not yet checked line by line against a printed edition.
//
// Sources:
//   A. stotranidhi.com, Devanagari page: base text.
//   B. stotrasamhita/stotra-sangrahah (GitHub), stotras/krishna/Balamukundashtakam.tex.
//   C. sa.wikisource, "बालमुकुन्दाष्टकम्" (ascribed there to Bilvamaṅgala).
// The three agree word for word (spacing aside: v6 कलिन्दजान्तस्थित B C / कलिन्दजान्तः स्थित A).
// B adds after the colophon a further verse, आकुञ्चितं जानु करं च वामं…, marked as from another
// work; A and C do not have it, and it is not included here.
import type { Mantra } from '../types';

export const balaMukundashtakam: Mantra = {
  id: "bala-mukundashtakam",
  title: "बालमुकुन्दाष्टकम्",
  titleEn: "Bala Mukundashtakam",
  category: "stotra",
  deity: "Śrī Kṛṣṇa (Bāla Mukunda)",
  source: "Traditionally ascribed to Bilvamangala (Lilashuka)",
  summary:
    "Eight verses, each ending \"I remember in my mind the child Mukunda\". The first pictures the infant Lord floating on a banyan leaf at the dissolution of the worlds, sucking His toe; the others recall the child Krishna of Vraja: stealing curds, dancing on Kaliya, bound to the mortar, and drinking at His mother's breast.",
  summaryKn:
    "\"ಬಾಲಮುಕುಂದನನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಸ್ಮರಿಸುತ್ತೇನೆ\" ಎಂದು ಮುಗಿಯುವ ಎಂಟು ಶ್ಲೋಕಗಳು. ಮೊದಲನೆಯದು ಪ್ರಳಯಕಾಲದಲ್ಲಿ ಆಲದೆಲೆಯ ಮೇಲೆ ಮಲಗಿ ಕಾಲಿನ ಹೆಬ್ಬೆರಳನ್ನು ಚೀಪುತ್ತಿರುವ ಶಿಶುರೂಪಿ ಭಗವಂತನನ್ನು ಚಿತ್ರಿಸುತ್ತದೆ; ಉಳಿದವು ವ್ರಜದ ಬಾಲಕೃಷ್ಣನ ಲೀಲೆಗಳನ್ನು (ಮೊಸರು ಕದ್ದದ್ದು, ಕಾಳಿಂಗನ ಮೇಲೆ ಕುಣಿದದ್ದು, ಒರಳಿಗೆ ಕಟ್ಟಿಸಿಕೊಂಡದ್ದು, ತಾಯಿಯ ಹಾಲು ಕುಡಿದದ್ದು) ನೆನಪಿಸುತ್ತವೆ.",
  difficulty: "easy",
  completeness: "complete",
  sections: [
    {
      title: "स्तोत्रम्",
      titleEn: "Stotram",
      verses: [
        { n: 1, text: "करारविन्देन पदारविन्दं\nमुखारविन्दे विनिवेशयन्तम् ।\nवटस्य पत्रस्य पुटे शयानं\nबालं मुकुन्दं मनसा स्मरामि ॥", meaning: { en: "I remember in my mind the child Mukunda, who, lying in the fold of a banyan leaf, puts His lotus foot into His lotus mouth with His lotus hand.", kn: "ತನ್ನ ಕರಕಮಲದಿಂದ ಪಾದಕಮಲವನ್ನು ಮುಖಕಮಲದಲ್ಲಿ ಇರಿಸಿಕೊಳ್ಳುತ್ತ, ಆಲದ ಎಲೆಯ ಮಡಿಕೆಯಲ್ಲಿ ಮಲಗಿರುವ ಬಾಲಮುಕುಂದನನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಸ್ಮರಿಸುತ್ತೇನೆ." } },
        { n: 2, text: "संहृत्य लोकान् वटपत्रमध्ये\nशयानमाद्यन्तविहीनरूपम् ।\nसर्वेश्वरं सर्वहितावतारं\nबालं मुकुन्दं मनसा स्मरामि ॥", meaning: { en: "I remember in my mind the child Mukunda, who, having withdrawn the worlds into Himself, lies on a banyan leaf; whose form has neither beginning nor end; the Lord of all, who takes birth for the good of all.", kn: "ಲೋಕಗಳನ್ನು ತನ್ನೊಳಗೆ ಉಪಸಂಹರಿಸಿಕೊಂಡು ಆಲದೆಲೆಯ ಮಧ್ಯದಲ್ಲಿ ಮಲಗಿರುವ, ಆದಿ ಅಂತ್ಯಗಳಿಲ್ಲದ ರೂಪವುಳ್ಳ, ಸರ್ವೇಶ್ವರನಾದ, ಎಲ್ಲರ ಹಿತಕ್ಕಾಗಿ ಅವತರಿಸಿದ ಬಾಲಮುಕುಂದನನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಸ್ಮರಿಸುತ್ತೇನೆ." } },
        { n: 3, text: "इन्दीवरश्यामलकोमलाङ्गं\nइन्द्रादिदेवार्चितपादपद्मम् ।\nसन्तानकल्पद्रुममाश्रितानां\nबालं मुकुन्दं मनसा स्मरामि ॥", meaning: { en: "I remember in my mind the child Mukunda, whose tender body is dark like the blue lotus, whose lotus feet are worshipped by Indra and the other gods, and who is a wish-granting tree for those who take refuge in Him.", kn: "ನೀಲಕಮಲದಂತೆ ಶ್ಯಾಮಲವಾದ ಕೋಮಲ ದೇಹವುಳ್ಳ, ಇಂದ್ರಾದಿ ದೇವತೆಗಳಿಂದ ಪೂಜಿತವಾದ ಪಾದಕಮಲಗಳುಳ್ಳ, ಆಶ್ರಯಿಸಿದವರಿಗೆ ಸಂತಾನ ಕಲ್ಪವೃಕ್ಷದಂತಿರುವ ಬಾಲಮುಕುಂದನನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಸ್ಮರಿಸುತ್ತೇನೆ." } },
        { n: 4, text: "लम्बालकं लम्बितहारयष्टिं\nशृङ्गारलीलाङ्कितदन्तपङ्क्तिम् ।\nबिम्बाधरं चारुविशालनेत्रं\nबालं मुकुन्दं मनसा स्मरामि ॥", meaning: { en: "I remember in my mind the child Mukunda, with long curling locks and a long string of pearls hanging down, with a row of little teeth that shows His charming play, lips red as the bimba fruit, and lovely wide eyes.", kn: "ಉದ್ದವಾದ ಮುಂಗುರುಳುಗಳುಳ್ಳ, ಇಳಿಬಿದ್ದ ಮುತ್ತಿನ ಹಾರವುಳ್ಳ, ಮನೋಹರ ಲೀಲೆಯನ್ನು ತೋರುವ ಹಲ್ಲುಗಳ ಸಾಲುಳ್ಳ, ತೊಂಡೆಹಣ್ಣಿನಂತಹ ತುಟಿಗಳುಳ್ಳ, ಸುಂದರವಾದ ವಿಶಾಲ ಕಣ್ಣುಗಳುಳ್ಳ ಬಾಲಮುಕುಂದನನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಸ್ಮರಿಸುತ್ತೇನೆ." } },
        { n: 5, text: "शिक्ये निधायाद्य पयोदधीनि\nबहिर्गतायां व्रजनायिकायाम् ।\nभुक्त्वा यथेष्टं कपटेन सुप्तं\nबालं मुकुन्दं मनसा स्मरामि ॥", meaning: { en: "I remember in my mind the child Mukunda, who, when the lady of Vraja (Yashoda) had put the milk and curds away in the hanging sling and gone out, ate as much as He liked and then pretended to be asleep.", kn: "ವ್ರಜದ ಒಡತಿಯಾದ ಯಶೋದೆ ಹಾಲು ಮೊಸರುಗಳನ್ನು ನೆಲವುವಿನಲ್ಲಿ (ಉಟ್ಟಿಯಲ್ಲಿ) ಇಟ್ಟು ಹೊರಗೆ ಹೋದಾಗ, ಬೇಕಾದಷ್ಟು ತಿಂದು ಕಪಟದಿಂದ ನಿದ್ರಿಸುತ್ತಿರುವಂತೆ ನಟಿಸಿದ ಬಾಲಮುಕುಂದನನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಸ್ಮರಿಸುತ್ತೇನೆ." } },
        { n: 6, text: "कलिन्दजान्तस्थितकालियस्य\nफणाग्ररङ्गे नटनप्रियन्तम् ।\nतत्पुच्छहस्तं शरदिन्दुवक्त्रं\nबालं मुकुन्दं मनसा स्मरामि ॥", meaning: { en: "I remember in my mind the child Mukunda, who loves to dance on the stage of the hoods of Kaliya, who lived in the Yamuna, the daughter of Mount Kalinda; who holds the serpent's tail in His hand; whose face is like the autumn moon.", kn: "ಕಳಿಂದಪರ್ವತದ ಮಗಳಾದ ಯಮುನೆಯೊಳಗಿದ್ದ ಕಾಳಿಯನ ಹೆಡೆಗಳ ತುದಿಯೆಂಬ ರಂಗಸ್ಥಳದಲ್ಲಿ ನರ್ತಿಸಲು ಇಷ್ಟಪಡುವ, ಅವನ ಬಾಲವನ್ನು ಕೈಯಲ್ಲಿ ಹಿಡಿದಿರುವ, ಶರತ್ಕಾಲದ ಚಂದ್ರನಂತಹ ಮುಖವುಳ್ಳ ಬಾಲಮುಕುಂದನನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಸ್ಮರಿಸುತ್ತೇನೆ." } },
        { n: 7, text: "उलूखले बद्धमुदारशौर्यं\nउत्तुङ्गयुग्मार्जुनभङ्गलीलम् ।\nउत्फुल्लपद्मायतचारुनेत्रं\nबालं मुकुन्दं मनसा स्मरामि ॥", meaning: { en: "I remember in my mind the child Mukunda, bound to the mortar yet of great valour, who in play broke the pair of tall arjuna trees, and whose lovely long eyes are like full-blown lotuses.", kn: "ಒರಳಿಗೆ ಕಟ್ಟಲ್ಪಟ್ಟರೂ ಮಹಾಪರಾಕ್ರಮಿಯಾದ, ಎತ್ತರವಾದ ಜೋಡಿ ಮತ್ತಿಮರಗಳನ್ನು (ಅರ್ಜುನ ವೃಕ್ಷಗಳನ್ನು) ಲೀಲೆಯಿಂದ ಮುರಿದ, ಅರಳಿದ ಕಮಲದಂತೆ ವಿಶಾಲವಾದ ಸುಂದರ ಕಣ್ಣುಗಳುಳ್ಳ ಬಾಲಮುಕುಂದನನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಸ್ಮರಿಸುತ್ತೇನೆ." } },
        { n: 8, text: "आलोक्य मातुर्मुखमादरेण\nस्तन्यं पिबन्तं सरसीरुहाक्षम् ।\nसच्चिन्मयं देवमनन्तरूपं\nबालं मुकुन्दं मनसा स्मरामि ॥", meaning: { en: "I remember in my mind the child Mukunda, lotus-eyed, who drinks at His mother's breast while gazing lovingly at her face; the God made of being and awareness, whose forms are endless.", kn: "ತಾಯಿಯ ಮುಖವನ್ನು ಪ್ರೀತಿಯಿಂದ ನೋಡುತ್ತ ಎದೆಹಾಲನ್ನು ಕುಡಿಯುತ್ತಿರುವ, ಕಮಲದಂತಹ ಕಣ್ಣುಗಳುಳ್ಳ, ಸಚ್ಚಿನ್ಮಯನಾದ, ಅನಂತ ರೂಪಗಳುಳ್ಳ ದೇವನಾದ ಬಾಲಮುಕುಂದನನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಸ್ಮರಿಸುತ್ತೇನೆ." } },
        { text: "इति श्रीबालमुकुन्दाष्टकं सम्पूर्णम् ॥", meaning: { en: "Thus ends the Bala Mukundashtakam.", kn: "ಹೀಗೆ ಶ್ರೀಬಾಲಮುಕುಂದಾಷ್ಟಕವು ಸಂಪೂರ್ಣವಾಯಿತು." } },
      ],
    },
  ],
};
