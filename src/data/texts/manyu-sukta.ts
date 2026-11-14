/**
 * Manyu Sūkta: Ṛgveda 10.83 and 10.84.
 *
 * Sources:
 * - Base: bhavykhatri/DharmicData (GitHub, ODbL), Ṛgveda maṇḍala 10, from the
 *   Vedic Heritage Portal. Svaras and independent-svarita numerals stripped.
 * - Witness: GRETIL, Ṛgveda-Saṃhitā ed. Aufrecht (van Nooten & Holland data entry).
 * Collation found no textual differences, only spelling (anusvāra before m,
 * m̐). ळ is kept as in Śākala prints (ईळते, जिहीळ).
 * Meanings follow the plain sense, with the Mādhva understanding of Manyu as
 * Vāyu (Bhīmasena) noted where relevant.
 */
import type { Mantra } from '../types';

export const manyuSukta: Mantra = {
  id: "manyu-sukta",
  title: "मन्युसूक्तम्",
  titleEn: "Manyu Sukta",
  category: "vedic",
  deity: "Manyu (Vāyu as Bhīmasena)",
  source: "Ṛgveda 10.83–84",
  summary: "Two Ṛgvedic hymns (10.83–84) of the seer Manyu Tāpasa to Manyu, righteous fury personified as an invincible warrior and ally. In the Mādhva tradition Manyu is understood as Vāyu, above all in his form as Bhīmasena, empowered by Śrī Hari; the sūkta is recited for courage and for protection from enemies within and without.",
  summaryKn: "ಮನ್ಯು ತಾಪಸ ಋಷಿಯು ಕಂಡ ಎರಡು ಋಗ್ವೇದ ಸೂಕ್ತಗಳು (೧೦.೮೩–೮೪). ಧರ್ಮಕ್ಕಾಗಿ ಹುಟ್ಟುವ ಕೋಪವನ್ನು ಅಜೇಯ ವೀರನನ್ನಾಗಿಯೂ ಸಹಾಯಕನನ್ನಾಗಿಯೂ ಇವು ಸ್ತುತಿಸುತ್ತವೆ. ಮಾಧ್ವ ಸಂಪ್ರದಾಯದಲ್ಲಿ ಮನ್ಯು ಎಂದರೆ ಶ್ರೀಹರಿಯ ಶಕ್ತಿಯಿಂದ ಕೂಡಿದ ವಾಯುದೇವರು, ವಿಶೇಷವಾಗಿ ಭೀಮಸೇನ ರೂಪ. ಧೈರ್ಯಕ್ಕಾಗಿಯೂ ಒಳಗಿನ ಮತ್ತು ಹೊರಗಿನ ಶತ್ರುಗಳಿಂದ ರಕ್ಷಣೆಗಾಗಿಯೂ ಈ ಸೂಕ್ತವನ್ನು ಪಠಿಸುತ್ತಾರೆ.",
  difficulty: "advanced",
  completeness: "complete",
  sections: [
    {
      title: "ऋग्वेदः १०.८३",
      titleEn: "Ṛgveda 10.83",
      verses: [
        {
          n: 1,
          text: "यस्ते मन्योऽविधद्वज्र सायक सह ओजः पुष्यति विश्वमानुषक् ।\nसाह्याम दासमार्यं त्वया युजा सहस्कृतेन सहसा सहस्वता ॥",
          meaning: {
            en: "O Manyu, thunderbolt and arrow, whoever honours you grows ever stronger in power and vigour. With you as our ally, mighty and victorious, may we overcome every foe, base or noble. (For Mādhvas, Manyu here is Vāyu as Bhīmasena, the Lord's foremost servant.)",
            kn: "ವಜ್ರ ಬಾಣಗಳಂತೆ ಉಗ್ರನಾದ ಮನ್ಯುವೇ, ನಿನ್ನನ್ನು ಪೂಜಿಸಿದವನು ಬಲ ಮತ್ತು ಓಜಸ್ಸುಗಳಲ್ಲಿ ನಿರಂತರವಾಗಿ ಬೆಳೆಯುತ್ತಾನೆ. ಬಲಶಾಲಿಯೂ ಜಯಶಾಲಿಯೂ ಆದ ನಿನ್ನನ್ನು ಸಹಾಯಕನನ್ನಾಗಿ ಪಡೆದು ಯಾವ ಶತ್ರುವನ್ನಾದರೂ ನಾವು ಗೆಲ್ಲುವಂತಾಗಲಿ. (ಮಾಧ್ವರಿಗೆ ಇಲ್ಲಿ ಮನ್ಯು ಎಂದರೆ ಶ್ರೀಹರಿಯ ಪರಮಭಕ್ತರಾದ ಭೀಮಸೇನ ರೂಪದ ವಾಯುದೇವರು.)",
          },
        },
        {
          n: 2,
          text: "मन्युरिन्द्रो मन्युरेवास देवो मन्युर्होता वरुणो जातवेदाः ।\nमन्युं विश ईळते मानुषीर्याः पाहि नो मन्यो तपसा सजोषाः ॥",
          meaning: {
            en: "Manyu is Indra, Manyu was the god; Manyu is the priest, Varuṇa and Jātavedas. All the peoples of men praise Manyu. Guard us, O Manyu, together with fervour. (In the Mādhva reading, the strength at work in all these gods is Vāyu's.)",
            kn: "ಮನ್ಯುವೇ ಇಂದ್ರ, ಮನ್ಯುವೇ ದೇವ, ಮನ್ಯುವೇ ಹೋತೃ, ವರುಣ ಮತ್ತು ಜಾತವೇದಸ. ಮಾನವ ಜನರೆಲ್ಲರೂ ಮನ್ಯುವನ್ನು ಸ್ತುತಿಸುತ್ತಾರೆ. ಮನ್ಯುವೇ, ತಪಸ್ಸಿನೊಡನೆ ಕೂಡಿ ನಮ್ಮನ್ನು ರಕ್ಷಿಸು. (ಮಾಧ್ವ ಅರ್ಥದಲ್ಲಿ ಈ ಎಲ್ಲ ದೇವತೆಗಳೊಳಗೆ ಕೆಲಸಮಾಡುವ ಶಕ್ತಿ ವಾಯುದೇವರದು.)",
          },
        },
        {
          n: 3,
          text: "अभीहि मन्यो तवसस्तवीयान्तपसा युजा वि जहि शत्रून् ।\nअमित्रहा वृत्रहा दस्युहा च विश्वा वसून्या भरा त्वं नः ॥",
          meaning: {
            en: "Come, Manyu, mightier than the mighty; with fervour as your ally, strike down our foes. Slayer of enemies, of obstructers and of plunderers, bring us every good thing.",
            kn: "ಬಲಶಾಲಿಗಳಿಗಿಂತಲೂ ಬಲಶಾಲಿಯಾದ ಮನ್ಯುವೇ, ಬಾ; ತಪಸ್ಸನ್ನು ಸಹಾಯಕನನ್ನಾಗಿ ಮಾಡಿಕೊಂಡು ನಮ್ಮ ಶತ್ರುಗಳನ್ನು ಸಂಹರಿಸು. ಶತ್ರುಗಳನ್ನೂ ಅಡ್ಡಿಮಾಡುವವರನ್ನೂ ದರೋಡೆಕೋರರನ್ನೂ ಕೊಲ್ಲುವವನೇ, ಎಲ್ಲ ಸಂಪತ್ತುಗಳನ್ನೂ ನಮಗೆ ತಂದುಕೊಡು.",
          },
        },
        {
          n: 4,
          text: "त्वं हि मन्यो अभिभूत्योजाः स्वयम्भूर्भामो अभिमातिषाहः ।\nविश्वचर्षणिः सहुरिः सहावानस्मास्वोजः पृतनासु धेहि ॥",
          meaning: {
            en: "For you, Manyu, have overpowering strength; self-born, blazing, conqueror of the hostile, watching over all men, victorious and mighty: place strength in us in our battles.",
            kn: "ಮನ್ಯುವೇ, ನೀನು ಎಲ್ಲವನ್ನೂ ಮೀರಿಸುವ ಓಜಸ್ಸುಳ್ಳವನು, ಸ್ವಯಂಭೂ, ಪ್ರಜ್ವಲಿಸುವವನು, ಶತ್ರುಗಳನ್ನು ಸೋಲಿಸುವವನು. ಎಲ್ಲರನ್ನೂ ಕಾಣುವ, ಜಯಶಾಲಿಯಾದ, ಬಲಶಾಲಿಯಾದ ನೀನು ಯುದ್ಧಗಳಲ್ಲಿ ನಮಗೆ ಬಲವನ್ನು ಕೊಡು.",
          },
        },
        {
          n: 5,
          text: "अभागः सन्नप परेतो अस्मि तव क्रत्वा तविषस्य प्रचेतः ।\nतं त्वा मन्यो अक्रतुर्जिहीळाहं स्वा तनूर्बलदेयाय मेहि ॥",
          meaning: {
            en: "Having no share in you, O wise one, I went far away through want of devotion to your mighty power. Thoughtless, I neglected you, O Manyu; now come to me, my very self, to give me strength.",
            kn: "ಜ್ಞಾನಿಯೇ, ಬಲಶಾಲಿಯಾದ ನಿನ್ನನ್ನು ಸರಿಯಾಗಿ ಆರಾಧಿಸದೆ ನಿನ್ನ ಕೃಪೆಯಲ್ಲಿ ಪಾಲಿಲ್ಲದವನಾಗಿ ದೂರ ಹೋಗಿದ್ದೆ. ಮನ್ಯುವೇ, ಅಜ್ಞಾನದಿಂದ ನಿನ್ನನ್ನು ಕಡೆಗಣಿಸಿದೆ; ಈಗ ನನ್ನ ಆತ್ಮವೇ ಆದ ನೀನು ನನಗೆ ಬಲ ಕೊಡಲು ನನ್ನ ಬಳಿಗೆ ಬಾ.",
          },
        },
        {
          n: 6,
          text: "अयं ते अस्म्युप मेह्यर्वाङ्प्रतीचीनः सहुरे विश्वधायः ।\nमन्यो वज्रिन्नभि मामा ववृत्स्व हनाव दस्यूँरुत बोध्यापेः ॥",
          meaning: {
            en: "Here I am, yours; come to me, turning towards me, O conqueror, sustainer of all. O Manyu, wielder of the thunderbolt, turn to me; let us two slay the wicked, and know me as your own.",
            kn: "ನಾನು ನಿನ್ನವನೇ; ಎಲ್ಲವನ್ನೂ ಪೋಷಿಸುವ, ಜಯಶಾಲಿಯಾದ ನೀನು ನನ್ನತ್ತ ತಿರುಗಿ ಬಾ. ವಜ್ರಧಾರಿಯಾದ ಮನ್ಯುವೇ, ನನ್ನ ಬಳಿಗೆ ಬಾ; ನಾವಿಬ್ಬರೂ ಸೇರಿ ದುಷ್ಟರನ್ನು ಸಂಹರಿಸೋಣ; ನನ್ನನ್ನು ನಿನ್ನವನೆಂದು ತಿಳಿ.",
          },
        },
        {
          n: 7,
          text: "अभि प्रेहि दक्षिणतो भवा मेऽधा वृत्राणि जङ्घनाव भूरि ।\nजुहोमि ते धरुणं मध्वो अग्रमुभा उपांशु प्रथमा पिबाव ॥",
          meaning: {
            en: "Come forward and stand at my right hand; then together we shall slay many foes. I offer you the best of the honeyed drink as your support; let us two drink it first, in quiet.",
            kn: "ಮುಂದೆ ಬಂದು ನನ್ನ ಬಲಭಾಗದಲ್ಲಿ ನಿಲ್ಲು; ಆಗ ನಾವಿಬ್ಬರೂ ಸೇರಿ ಅನೇಕ ಶತ್ರುಗಳನ್ನು ಸಂಹರಿಸೋಣ. ಮಧುರವಾದ ಸೋಮರಸದ ಶ್ರೇಷ್ಠ ಭಾಗವನ್ನು ನಿನಗೆ ಅರ್ಪಿಸುತ್ತೇನೆ; ನಾವಿಬ್ಬರೂ ಮೊದಲು ಅದನ್ನು ಶಾಂತವಾಗಿ ಸ್ವೀಕರಿಸೋಣ.",
          },
        },
      ],
    },
    {
      title: "ऋग्वेदः १०.८४",
      titleEn: "Ṛgveda 10.84",
      verses: [
        {
          n: 1,
          text: "त्वया मन्यो सरथमारुजन्तो हर्षमाणासो धृषिता मरुत्वः ।\nतिग्मेषव आयुधा संशिशाना अभि प्र यन्तु नरो अग्निरूपाः ॥",
          meaning: {
            en: "Riding with you on one chariot, O Manyu with the Maruts, joyful and bold, with sharp arrows and whetted weapons, let the heroes go forth, blazing like fire.",
            kn: "ಮನ್ಯುವೇ, ಮರುತ್ತುಗಳೊಡನೆ ನಿನ್ನೊಂದಿಗೆ ಒಂದೇ ರಥದಲ್ಲಿ ಸಾಗುತ್ತಾ, ಹರ್ಷದಿಂದ ಧೈರ್ಯದಿಂದ, ಹರಿತ ಬಾಣಗಳನ್ನೂ ಮಸೆದ ಆಯುಧಗಳನ್ನೂ ಹಿಡಿದು, ಅಗ್ನಿಯಂತೆ ಪ್ರಜ್ವಲಿಸುವ ವೀರರು ಮುನ್ನುಗ್ಗಲಿ.",
          },
        },
        {
          n: 2,
          text: "अग्निरिव मन्यो त्विषितः सहस्व सेनानीर्नः सहुरे हूत एधि ।\nहत्वाय शत्रून्वि भजस्व वेद ओजो मिमानो वि मृधो नुदस्व ॥",
          meaning: {
            en: "Blazing like fire, O Manyu, overpower them; when called, be our general, O conqueror. Slay the foes and share out their wealth; showing your might, drive the enemies away.",
            kn: "ಮನ್ಯುವೇ, ಅಗ್ನಿಯಂತೆ ಪ್ರಜ್ವಲಿಸುತ್ತಾ ಶತ್ರುಗಳನ್ನು ಸೋಲಿಸು; ಜಯಶಾಲಿಯೇ, ಕರೆದಾಗ ನಮ್ಮ ಸೇನಾಪತಿಯಾಗು. ಶತ್ರುಗಳನ್ನು ಕೊಂದು ಅವರ ಸಂಪತ್ತನ್ನು ಹಂಚಿಕೊಡು; ನಿನ್ನ ಬಲವನ್ನು ತೋರಿ ವೈರಿಗಳನ್ನು ಓಡಿಸು.",
          },
        },
        {
          n: 3,
          text: "सहस्व मन्यो अभिमातिमस्मे रुजन्मृणन्प्रमृणन्प्रेहि शत्रून् ।\nउग्रं ते पाजो नन्वा रुरुध्रे वशी वशं नयस एकज त्वम् ॥",
          meaning: {
            en: "Overcome, O Manyu, the one who assails us; breaking, crushing and destroying, go against the foes. None can withstand your fierce might; you alone lead all at your will.",
            kn: "ಮನ್ಯುವೇ, ನಮ್ಮ ಮೇಲೆ ದಾಳಿಮಾಡುವವನನ್ನು ಸೋಲಿಸು; ಮುರಿಯುತ್ತಾ, ಜಜ್ಜುತ್ತಾ, ನಾಶಮಾಡುತ್ತಾ ಶತ್ರುಗಳತ್ತ ಮುನ್ನುಗ್ಗು. ನಿನ್ನ ಉಗ್ರ ಶಕ್ತಿಯನ್ನು ಯಾರೂ ತಡೆಯಲಾರರು; ಏಕಮಾತ್ರನಾದ ನೀನು ಎಲ್ಲರನ್ನೂ ನಿನ್ನ ವಶದಲ್ಲಿ ನಡೆಸುತ್ತೀಯೆ.",
          },
        },
        {
          n: 4,
          text: "एको बहूनामसि मन्यवीळितो विशंविशं युधये सं शिशाधि ।\nअकृत्तरुक्त्वया युजा वयं द्युमन्तं घोषं विजयाय कृण्महे ॥",
          meaning: {
            en: "You alone among many are praised, O Manyu; make every clan keen for the fight. With you as our ally, of unbroken splendour, we raise a ringing cry for victory.",
            kn: "ಮನ್ಯುವೇ, ಅನೇಕರಲ್ಲಿ ನೀನೊಬ್ಬನೇ ಸ್ತುತಿಸಲ್ಪಡುವವನು; ಪ್ರತಿಯೊಂದು ಜನವನ್ನೂ ಹೋರಾಟಕ್ಕೆ ಸಜ್ಜುಗೊಳಿಸು. ಕುಂದದ ಕಾಂತಿಯುಳ್ಳ ನಿನ್ನನ್ನು ಸಹಾಯಕನನ್ನಾಗಿ ಪಡೆದು ನಾವು ಜಯಕ್ಕಾಗಿ ಮೊಳಗುವ ಘೋಷ ಮಾಡುತ್ತೇವೆ.",
          },
        },
        {
          n: 5,
          text: "विजेषकृदिन्द्र इवानवब्रवोऽस्माकं मन्यो अधिपा भवेह ।\nप्रियं ते नाम सहुरे गृणीमसि विद्मा तमुत्सं यत आबभूथ ॥",
          meaning: {
            en: "Bringer of victory like Indra, speaking no idle word, be our protector here, O Manyu. We sing your dear name, O conqueror; we know the spring from which you came.",
            kn: "ಇಂದ್ರನಂತೆ ಜಯವನ್ನು ತರುವವನೇ, ವ್ಯರ್ಥ ಮಾತನಾಡದವನೇ, ಮನ್ಯುವೇ, ಇಲ್ಲಿ ನಮ್ಮ ರಕ್ಷಕನಾಗು. ಜಯಶಾಲಿಯೇ, ನಿನ್ನ ಪ್ರಿಯವಾದ ಹೆಸರನ್ನು ಹಾಡುತ್ತೇವೆ; ನೀನು ಯಾವ ಮೂಲದಿಂದ ಬಂದೆಯೋ ಆ ಚಿಲುಮೆಯನ್ನು ನಾವು ಬಲ್ಲೆವು.",
          },
        },
        {
          n: 6,
          text: "आभूत्या सहजा वज्र सायक सहो बिभर्ष्यभिभूत उत्तरम् ।\nक्रत्वा नो मन्यो सह मेद्येधि महाधनस्य पुरुहूत संसृजि ॥",
          meaning: {
            en: "Born with might, O thunderbolt and arrow, you bear supreme strength, O overpowering one. Be with us with your power, O Manyu, much-invoked, in the clash of the great battle.",
            kn: "ವಜ್ರಬಾಣದಂತಿರುವವನೇ, ಹುಟ್ಟಿನಿಂದಲೇ ಶಕ್ತಿಯುಳ್ಳವನೇ, ಎಲ್ಲವನ್ನೂ ಮೀರಿಸುವವನೇ, ನೀನು ಶ್ರೇಷ್ಠ ಬಲವನ್ನು ಧರಿಸಿದ್ದೀಯೆ. ಅನೇಕರಿಂದ ಕರೆಯಲ್ಪಡುವ ಮನ್ಯುವೇ, ಮಹಾಯುದ್ಧದ ಸಂಘರ್ಷದಲ್ಲಿ ನಿನ್ನ ಬಲದೊಂದಿಗೆ ನಮ್ಮ ಜೊತೆಗಿರು.",
          },
        },
        {
          n: 7,
          text: "संसृष्टं धनमुभयं समाकृतमस्मभ्यं दत्तां वरुणश्च मन्युः ।\nभियं दधाना हृदयेषु शत्रवः पराजितासो अप नि लयन्ताम् ॥",
          meaning: {
            en: "May Varuṇa and Manyu give us the wealth of both sides, gathered and won. Let the enemies, with fear in their hearts, defeated, slink away.",
            kn: "ಗೆದ್ದು ಒಟ್ಟುಗೂಡಿಸಿದ ಎರಡೂ ಕಡೆಯ ಸಂಪತ್ತನ್ನು ವರುಣನೂ ಮನ್ಯುವೂ ನಮಗೆ ಕೊಡಲಿ. ಹೃದಯಗಳಲ್ಲಿ ಭಯವನ್ನು ಹೊತ್ತ ಶತ್ರುಗಳು ಸೋತು ದೂರ ಓಡಿಹೋಗಲಿ.",
          },
        },
      ],
    },
  ],
};
