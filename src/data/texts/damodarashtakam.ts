// Śrī Dāmodarāṣṭakam (नमामीश्वरं सच्चिदानन्दरूपं …), from the Padma Purāṇa, spoken by the sage
// Satyavrata; recited above all in the month of Kārtika (Dāmodara-māsa).
// Collated Nov 2026; not yet checked line by line against a printed edition.
//
// Sources (independent digital witnesses):
//   A. stotranidhi.com, Devanagari page: base text and line division.
//   B. stotrasamhita/stotra-sangrahah (GitHub), stotras/krishna/Damodarashtakam.tex.
// A and B agree word for word except:
//   v5 बिम्बरक्ताधरं (B; "lips red as the bimba fruit") / बिम्बरक्तधरं (A, a typo), B taken.
// Kept as both witnesses read, though Gauḍīya prints often have the feminine स्वकां:
//   v7 प्रेमभक्तिं स्वकं मे प्रयच्छ.
// Both witnesses spell कुवेरात्मजौ (for कुबेर-) and यशोदाभियोलूखलाद्धावमानं; kept.
import type { Mantra } from '../types';

export const damodarashtakam: Mantra = {
  id: "damodarashtakam",
  title: "दामोदराष्टकम्",
  titleEn: "Damodarashtakam",
  category: "stotra",
  deity: "Śrī Kṛṣṇa (Dāmodara)",
  source: "Padma Purana, spoken by the sage Satyavrata",
  summary:
    "Eight verses on the child Krishna as Damodara, \"the one with a rope round His waist\", whom mother Yashoda tied to a mortar. The devotee asks for no boon, not even liberation, only that this form of the Lord stay in the heart, and for loving devotion. Recited daily in the month of Kartika with the offering of a lamp.",
  summaryKn:
    "ತಾಯಿ ಯಶೋದೆ ಒರಳಿಗೆ ಕಟ್ಟಿಹಾಕಿದ, ಸೊಂಟಕ್ಕೆ ಹಗ್ಗವಿರುವ ಬಾಲಕೃಷ್ಣನಾದ ದಾಮೋದರನನ್ನು ಕುರಿತ ಎಂಟು ಶ್ಲೋಕಗಳು. ಭಕ್ತನು ಮೋಕ್ಷವನ್ನೂ ಒಳಗೊಂಡಂತೆ ಯಾವ ವರವನ್ನೂ ಬೇಡದೆ, ಭಗವಂತನ ಈ ರೂಪವು ಹೃದಯದಲ್ಲಿ ನೆಲೆಸಲಿ, ಪ್ರೇಮಭಕ್ತಿ ದೊರೆಯಲಿ ಎಂದು ಮಾತ್ರ ಪ್ರಾರ್ಥಿಸುತ್ತಾನೆ. ಕಾರ್ತಿಕ ಮಾಸದಲ್ಲಿ ಪ್ರತಿದಿನ ದೀಪವನ್ನು ಅರ್ಪಿಸುತ್ತ ಇದನ್ನು ಪಠಿಸುತ್ತಾರೆ.",
  difficulty: "medium",
  completeness: "complete",
  sections: [
    {
      title: "स्तोत्रम्",
      titleEn: "Stotram",
      verses: [
        { n: 1, text: "नमामीश्वरं सच्चिदानन्दरूपं\nलसत्कुण्डलं गोकुले भ्राजमानम् ।\nयशोदाभियोलूखलाद्धावमानं\nपरामृष्टमत्यन्ततो द्रुत्य गोप्या ॥", meaning: { en: "I bow to the Lord whose form is being, awareness and bliss, whose earrings swing and shine, who is radiant in Gokula; who, afraid of Yashoda, ran from the mortar and was chased and caught from behind by the gopi (Yashoda) running after Him.", kn: "ಸಚ್ಚಿದಾನಂದ ರೂಪನೂ, ಹೊಳೆಯುವ ಕುಂಡಲಗಳುಳ್ಳವನೂ, ಗೋಕುಲದಲ್ಲಿ ಬೆಳಗುವವನೂ, ಯಶೋದೆಯ ಭಯದಿಂದ ಒರಳಿನಿಂದ ಓಡಿಹೋಗುತ್ತಿದ್ದಾಗ ಹಿಂದಿನಿಂದ ವೇಗವಾಗಿ ಓಡಿಬಂದ ಆ ಗೋಪಿಯಿಂದ (ಯಶೋದೆಯಿಂದ) ಹಿಡಿಯಲ್ಪಟ್ಟವನೂ ಆದ ಈಶ್ವರನಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ." } },
        { n: 2, text: "रुदन्तं मुहुर्नेत्रयुग्मं मृजन्तं\nकराम्भोजयुग्मेन सातङ्कनेत्रम् ।\nमुहुः श्वासकम्पत्रिरेखाङ्ककण्ठ-\nस्थितग्रैव-दामोदरं भक्तिबद्धम् ॥", meaning: { en: "(I bow to) Damodara, bound by love: weeping, again and again rubbing both eyes with His two lotus hands, His eyes full of fear, the pearl necklace on His neck, marked with three lines, trembling with His sobbing breath.", kn: "ಅಳುತ್ತ, ತನ್ನ ಎರಡು ಕರಕಮಲಗಳಿಂದ ಮತ್ತೆ ಮತ್ತೆ ಕಣ್ಣುಗಳನ್ನು ಉಜ್ಜಿಕೊಳ್ಳುತ್ತ, ಭಯದಿಂದ ತುಂಬಿದ ಕಣ್ಣುಗಳುಳ್ಳ, ಬಿಕ್ಕುವ ಉಸಿರಿನಿಂದ ನಡುಗುವ ಮೂರು ರೇಖೆಗಳ ಕಂಠದಲ್ಲಿ ಹಾರವನ್ನು ಧರಿಸಿದ, ಭಕ್ತಿಯಿಂದ ಕಟ್ಟಲ್ಪಟ್ಟ ದಾಮೋದರನನ್ನು (ನಮಸ್ಕರಿಸುತ್ತೇನೆ)." } },
        { n: 3, text: "इतीदृक् स्वलीलाभिरानन्दकुण्डे\nस्वघोषं निमज्जन्तमाख्यापयन्तम् ।\nतदीयेषिताज्ञेषु भक्तैर्जितत्वं\nपुनः प्रेमतस्तं शतावृत्ति वन्दे ॥", meaning: { en: "By such childhood play He plunges His own village of cowherds into a pool of bliss, and shows those who know only His majesty that He is conquered by His devotees. Again and again, with love, I bow to Him a hundred times.", kn: "ಇಂತಹ ತನ್ನ ಬಾಲಲೀಲೆಗಳಿಂದ ತನ್ನ ಗೋವಳರ ಊರನ್ನು ಆನಂದದ ಕೊಳದಲ್ಲಿ ಮುಳುಗಿಸುವ, ತನ್ನ ಐಶ್ವರ್ಯವನ್ನು ಮಾತ್ರ ಅರಿತವರಿಗೆ ತಾನು ಭಕ್ತರಿಂದ ಜಯಿಸಲ್ಪಟ್ಟವನು ಎಂಬುದನ್ನು ತೋರಿಸುವ ಅವನಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ಪ್ರೇಮದಿಂದ ನೂರು ಬಾರಿ ನಮಸ್ಕರಿಸುತ್ತೇನೆ." } },
        { n: 4, text: "वरं देव मोक्षं न मोक्षावधिं वा\nन चान्यं वृणेऽहं वरेषादपीह ।\nइदं ते वपुर्नाथ गोपालबालं\nसदा मे मनस्याविरास्तां किमन्यैः ॥", meaning: { en: "O Lord, though You can grant every boon, I do not ask You for liberation, nor for the highest heaven, nor for any other boon. O Master, may only this form of Yours, the cowherd child, always shine in my mind. What use are other things?", kn: "ಹೇ ದೇವನೇ, ವರಗಳನ್ನು ನೀಡುವ ಒಡೆಯನಾದ ನಿನ್ನಿಂದ ನಾನು ಮೋಕ್ಷವನ್ನಾಗಲೀ, ಮೋಕ್ಷದ ಪರಮಾವಧಿಯಾದ ವೈಕುಂಠವನ್ನಾಗಲೀ, ಬೇರೆ ಯಾವ ವರವನ್ನಾಗಲೀ ಬೇಡುವುದಿಲ್ಲ. ಹೇ ನಾಥನೇ, ಗೋಪಾಲಬಾಲಕನಾದ ನಿನ್ನ ಈ ರೂಪವೇ ಸದಾ ನನ್ನ ಮನಸ್ಸಿನಲ್ಲಿ ಮೂಡಿರಲಿ. ಬೇರೆಯವುಗಳಿಂದ ಏನು ಪ್ರಯೋಜನ?" } },
        { n: 5, text: "इदं ते मुखाम्भोजमत्यन्तनीलैर्-\nवृतं कुन्तलैः स्निग्ध-रक्तैश्च गोप्या ।\nमुहुश्चुम्बितं बिम्बरक्ताधरं मे\nमनस्याविरास्तामलं लक्षलाभैः ॥", meaning: { en: "May this lotus face of Yours, framed by soft, very dark curls with a reddish gleam, kissed again and again by the gopi (Yashoda), with lips red as the bimba fruit, shine in my mind. Enough of a hundred thousand other gains!", kn: "ಅತ್ಯಂತ ಕಪ್ಪಾದ, ಮೃದುವಾದ, ಕೆಂಪು ಹೊಳಪಿನ ಮುಂಗುರುಳುಗಳಿಂದ ಸುತ್ತುವರಿದ, ಗೋಪಿಯಿಂದ (ಯಶೋದೆಯಿಂದ) ಮತ್ತೆ ಮತ್ತೆ ಮುದ್ದಿಸಲ್ಪಟ್ಟ, ತೊಂಡೆಹಣ್ಣಿನಂತೆ ಕೆಂಪಾದ ತುಟಿಗಳುಳ್ಳ ನಿನ್ನ ಈ ಮುಖಕಮಲವು ನನ್ನ ಮನಸ್ಸಿನಲ್ಲಿ ಮೂಡಿರಲಿ. ಲಕ್ಷಾಂತರ ಇತರ ಲಾಭಗಳು ಸಾಕು!" } },
        { n: 6, text: "नमो देव दामोदरानन्त विष्णो\nप्रसीद प्रभो दुःखजालाब्धिमग्नम् ।\nकृपादृष्टिवृष्ट्यातिदीनं बतानु\nगृहाणेश मामज्ञमेध्यक्षिदृश्यः ॥", meaning: { en: "Salutations, O God, Damodara, Ananta, Vishnu! Be gracious, O Lord, to me who am sunk in an ocean of sorrows. Alas, with the rain of Your merciful glance favour me, wretched and ignorant, O Master; come and be seen by my eyes.", kn: "ಹೇ ದೇವನೇ, ದಾಮೋದರನೇ, ಅನಂತನೇ, ವಿಷ್ಣುವೇ, ನಿನಗೆ ನಮಸ್ಕಾರ. ಹೇ ಪ್ರಭುವೇ, ದುಃಖಗಳ ಜಾಲವೆಂಬ ಸಮುದ್ರದಲ್ಲಿ ಮುಳುಗಿರುವ ನನ್ನ ಮೇಲೆ ಪ್ರಸನ್ನನಾಗು. ಅಯ್ಯೋ, ಅತ್ಯಂತ ದೀನನೂ ಅಜ್ಞನೂ ಆದ ನನ್ನನ್ನು ನಿನ್ನ ಕೃಪಾದೃಷ್ಟಿಯ ಮಳೆಯಿಂದ ಅನುಗ್ರಹಿಸು, ಹೇ ಈಶನೇ; ನನ್ನ ಕಣ್ಣುಗಳಿಗೆ ಕಾಣಿಸಿಕೊ." } },
        { n: 7, text: "कुवेरात्मजौ बद्धमूर्त्यैव यद्वत्\nत्वया मोचितौ भक्तिभाजौ कृतौ च ।\nतथा प्रेमभक्तिं स्वकं मे प्रयच्छ\nन मोक्षे ग्रहो मेऽस्ति दामोदरेह ॥", meaning: { en: "Just as You, while Yourself bound, freed the two sons of Kubera (from their tree forms) and made them Your devotees, so grant me loving devotion to You. O Damodara, I have no longing here for liberation.", kn: "ನೀನು ಕಟ್ಟಲ್ಪಟ್ಟ ರೂಪದಲ್ಲಿರುವಾಗಲೇ ಕುಬೇರನ ಇಬ್ಬರು ಮಕ್ಕಳನ್ನು (ಮರದ ರೂಪದಿಂದ) ಬಿಡುಗಡೆಗೊಳಿಸಿ ಅವರನ್ನು ಭಕ್ತರನ್ನಾಗಿ ಮಾಡಿದಂತೆಯೇ ನನಗೂ ನಿನ್ನ ಪ್ರೇಮಭಕ್ತಿಯನ್ನು ಕರುಣಿಸು. ಹೇ ದಾಮೋದರನೇ, ಇಲ್ಲಿ ನನಗೆ ಮೋಕ್ಷದಲ್ಲಿ ಆಸಕ್ತಿಯಿಲ್ಲ." } },
        { n: 8, text: "नमस्तेऽस्तु दाम्ने स्फुरद्दीप्तिधाम्ने\nत्वदीयोदरायाथ विश्वस्य धाम्ने ।\nनमो राधिकायै त्वदीयप्रियायै\nनमोऽनन्तलीलाय देवाय तुभ्यम् ॥", meaning: { en: "Salutations to the rope, abode of brilliant light, and to Your belly, the home of the whole universe. Salutations to Radhika, Your beloved, and salutations to You, the God of endless play.", kn: "ಹೊಳೆಯುವ ಕಾಂತಿಯ ನೆಲೆಯಾದ (ನಿನ್ನನ್ನು ಕಟ್ಟಿದ) ಹಗ್ಗಕ್ಕೆ ನಮಸ್ಕಾರ; ಇಡೀ ವಿಶ್ವದ ನೆಲೆಯಾದ ನಿನ್ನ ಉದರಕ್ಕೆ ನಮಸ್ಕಾರ. ನಿನ್ನ ಪ್ರಿಯೆಯಾದ ರಾಧಿಕೆಗೆ ನಮಸ್ಕಾರ; ಅನಂತ ಲೀಲೆಗಳ ದೇವನಾದ ನಿನಗೆ ನಮಸ್ಕಾರ." } },
        { text: "इति श्रीमत्पद्मपुराणे श्रीदामोदराष्टकं सम्पूर्णम् ॥", meaning: { en: "Thus ends the Damodarashtakam from the Padma Purana.", kn: "ಹೀಗೆ ಶ್ರೀಮತ್ ಪದ್ಮಪುರಾಣದಲ್ಲಿನ ಶ್ರೀದಾಮೋದರಾಷ್ಟಕವು ಸಂಪೂರ್ಣವಾಯಿತು." } },
      ],
    },
  ],
};
