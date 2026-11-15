/**
 * Pitru Suktam: Rigveda 10.15 (seer Shankha Yamayana; deity the Pitrs).
 *
 * Sources collated (Nov 2026):
 * - GRETIL, Rigveda-Samhita ed. Aufrecht (van Nooten & Holland data entry).
 * - stotranidhi.com Pitru Suktam (with svaras).
 * No textual differences, only spelling: ळ is kept as in Shakala prints
 * (ईळितो, स्वराळ्), where stotranidhi has ल. Svaras omitted.
 */
import type { Mantra } from '../types';

export const pitruSuktam: Mantra = {
  id: 'pitru-suktam',
  title: 'पितृसूक्तम्',
  titleEn: 'Pitru Suktam',
  category: 'vedic',
  deity: 'The Pitrs (ancestors), Agni and Yama',
  source: 'Rigveda 10.15',
  summary:
    'The Rigvedic hymn to the Pitrs, the departed ancestors. It invites the fathers of every rank to come to the offering, sit on the sacred grass, accept the oblations, forgive any fault and bless their descendants with wealth and strength, and asks Agni to carry the offerings to all of them, known and unknown. It is recited at shraddha and on Mahalaya days.',
  summaryKn:
    'ಅಗಲಿದ ಪೂರ್ವಜರಾದ ಪಿತೃಗಳನ್ನು ಕುರಿತ ಋಗ್ವೇದ ಸೂಕ್ತ. ಎಲ್ಲ ಹಂತದ ಪಿತೃಗಳು ಯಜ್ಞಕ್ಕೆ ಬಂದು ದರ್ಭೆಯ ಮೇಲೆ ಕುಳಿತು ಹವಿಸ್ಸನ್ನು ಸ್ವೀಕರಿಸಲಿ, ತಪ್ಪುಗಳನ್ನು ಕ್ಷಮಿಸಲಿ, ವಂಶಜರಿಗೆ ಐಶ್ವರ್ಯವನ್ನೂ ಬಲವನ್ನೂ ಅನುಗ್ರಹಿಸಲಿ ಎಂದು ಇದು ಬೇಡುತ್ತದೆ; ತಿಳಿದಿರುವ ತಿಳಿಯದಿರುವ ಎಲ್ಲ ಪಿತೃಗಳಿಗೂ ಹವಿಸ್ಸನ್ನು ತಲುಪಿಸಲು ಅಗ್ನಿಯನ್ನು ಪ್ರಾರ್ಥಿಸುತ್ತದೆ. ಶ್ರಾದ್ಧ ಮತ್ತು ಮಹಾಲಯದ ದಿನಗಳಲ್ಲಿ ಇದನ್ನು ಪಠಿಸುತ್ತಾರೆ.',
  difficulty: 'medium',
  completeness: 'complete',
  sections: [
    {
      title: 'ऋग्वेदः १०.१५',
      titleEn: 'Rigveda 10.15',
      verses: [
        {
          n: 1,
          text: 'उदीरतामवर उत्परास उन्मध्यमाः पितरः सोम्यासः ।\nअसुं य ईयुरवृका ऋतज्ञास्ते नोऽवन्तु पितरो हवेषु ॥',
          meaning: {
            en: 'May the fathers rise up, the lower, the higher and those in between, the fathers worthy of Soma. May those who have gone on to the life beyond, gentle and knowing the right order, protect us when we call on them.',
            kn: 'ಸೋಮಕ್ಕೆ ಅರ್ಹರಾದ ಕೆಳಗಿನ, ಮೇಲಿನ ಮತ್ತು ಮಧ್ಯದ ಪಿತೃಗಳು ಮೇಲೆದ್ದು ಬರಲಿ. ಪರಲೋಕದ ಜೀವನವನ್ನು ಸೇರಿರುವ, ಹಿಂಸೆಯಿಲ್ಲದ, ಋತವನ್ನು ಬಲ್ಲ ಆ ಪಿತೃಗಳು ನಾವು ಕರೆದಾಗ ನಮ್ಮನ್ನು ರಕ್ಷಿಸಲಿ.',
          },
        },
        {
          n: 2,
          text: 'इदं पितृभ्यो नमो अस्त्वद्य ये पूर्वासो य उपरास ईयुः ।\nये पार्थिवे रजस्या निषत्ता ये वा नूनं सुवृजनासु विक्षु ॥',
          meaning: {
            en: 'Let this salutation be offered today to the fathers who departed long ago and to those who left after them; to those who dwell in the earthly realm and to those who now live among blessed peoples.',
            kn: 'ಬಹಳ ಹಿಂದೆ ಅಗಲಿದ ಪಿತೃಗಳಿಗೂ ಅವರ ನಂತರ ಅಗಲಿದವರಿಗೂ, ಭೂಲೋಕದ ಪ್ರದೇಶದಲ್ಲಿ ನೆಲೆಸಿರುವವರಿಗೂ, ಈಗ ಪುಣ್ಯವಂತರ ಜನಸಮೂಹಗಳ ನಡುವೆ ಇರುವವರಿಗೂ ಇಂದು ಈ ನಮಸ್ಕಾರವು ಸಲ್ಲಲಿ.',
          },
        },
        {
          n: 3,
          text: 'आहं पितॄन्सुविदत्राँ अवित्सि नपातं च विक्रमणं च विष्णोः ।\nबर्हिषदो ये स्वधया सुतस्य भजन्त पित्वस्त इहागमिष्ठाः ॥',
          meaning: {
            en: 'I have found the kindly fathers, and the offspring and the wide stride of Vishnu. Those fathers who sit on the sacred grass and partake with svadha of the pressed drink: may they come here most readily.',
            kn: 'ದಯಾಳುಗಳಾದ ಪಿತೃಗಳನ್ನೂ, ವಿಷ್ಣುವಿನ ಸಂತತಿಯನ್ನೂ ವಿಶಾಲವಾದ ಹೆಜ್ಜೆಯನ್ನೂ ನಾನು ಕಂಡುಕೊಂಡಿದ್ದೇನೆ. ದರ್ಭೆಯ ಮೇಲೆ ಕುಳಿತು ಸ್ವಧೆಯೊಡನೆ ಹಿಂಡಿದ ರಸವನ್ನು ಸೇವಿಸುವ ಪಿತೃಗಳು ಬೇಗನೆ ಇಲ್ಲಿಗೆ ಬರಲಿ.',
          },
        },
        {
          n: 4,
          text: 'बर्हिषदः पितर ऊत्यर्वागिमा वो हव्या चकृमा जुषध्वम् ।\nत आ गतावसा शन्तमेनाथा नः शं योररपो दधात ॥',
          meaning: {
            en: 'O fathers who sit on the sacred grass, come here with your help. We have prepared these offerings for you; accept them. Come with your most blessed protection, and give us peace, well-being and freedom from harm.',
            kn: 'ದರ್ಭೆಯ ಮೇಲೆ ಕುಳಿತುಕೊಳ್ಳುವ ಪಿತೃಗಳೇ, ನಿಮ್ಮ ಸಹಾಯದೊಂದಿಗೆ ಇತ್ತ ಬನ್ನಿ. ನಿಮಗಾಗಿ ಈ ಹವಿಸ್ಸುಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಿದ್ದೇವೆ, ಸ್ವೀಕರಿಸಿ. ಅತ್ಯಂತ ಮಂಗಳಕರವಾದ ರಕ್ಷಣೆಯೊಂದಿಗೆ ಬಂದು ನಮಗೆ ಶಾಂತಿ, ಕ್ಷೇಮ ಮತ್ತು ನಿರ್ದೋಷತೆಯನ್ನು ನೀಡಿ.',
          },
        },
        {
          n: 5,
          text: 'उपहूताः पितरः सोम्यासो बर्हिष्येषु निधिषु प्रियेषु ।\nत आ गमन्तु त इह श्रुवन्त्वधि ब्रुवन्तु तेऽवन्त्वस्मान् ॥',
          meaning: {
            en: 'The Soma-loving fathers have been invited to the dear treasures laid out on the sacred grass. May they come, may they hear us here, may they speak for us and protect us.',
            kn: 'ಸೋಮಪ್ರಿಯರಾದ ಪಿತೃಗಳನ್ನು ದರ್ಭೆಯ ಮೇಲೆ ಇರಿಸಿದ ಪ್ರಿಯವಾದ ನಿಧಿಗಳಿಗೆ ಆಹ್ವಾನಿಸಲಾಗಿದೆ. ಅವರು ಬರಲಿ, ಇಲ್ಲಿ ನಮ್ಮ ಮಾತನ್ನು ಕೇಳಲಿ, ನಮ್ಮ ಪರವಾಗಿ ಮಾತನಾಡಲಿ, ನಮ್ಮನ್ನು ರಕ್ಷಿಸಲಿ.',
          },
        },
        {
          n: 6,
          text: 'आच्या जानु दक्षिणतो निषद्येमं यज्ञमभि गृणीत विश्वे ।\nमा हिंसिष्ट पितरः केन चिन्नो यद्व आगः पुरुषता कराम ॥',
          meaning: {
            en: 'Bending the knee and sitting on the southern side, all of you, welcome this sacrifice. Do not harm us, O fathers, for any fault that we, being human, may have committed against you.',
            kn: 'ಮಂಡಿಯನ್ನು ಬಗ್ಗಿಸಿ ದಕ್ಷಿಣ ದಿಕ್ಕಿನಲ್ಲಿ ಕುಳಿತು ನೀವೆಲ್ಲರೂ ಈ ಯಜ್ಞವನ್ನು ಸ್ವಾಗತಿಸಿ. ಪಿತೃಗಳೇ, ಮನುಷ್ಯಸಹಜವಾಗಿ ನಾವು ನಿಮಗೆ ಮಾಡಿರಬಹುದಾದ ಯಾವ ತಪ್ಪಿಗಾಗಿಯೂ ನಮ್ಮನ್ನು ಹಿಂಸಿಸಬೇಡಿ.',
          },
        },
        {
          n: 7,
          text: 'आसीनासो अरुणीनामुपस्थे रयिं धत्त दाशुषे मर्त्याय ।\nपुत्रेभ्यः पितरस्तस्य वस्वः प्र यच्छत त इहोर्जं दधात ॥',
          meaning: {
            en: 'Seated in the lap of the ruddy flames of dawn, give wealth to the mortal who worships you. O fathers, grant a share of that treasure to your sons, and give them vigour here.',
            kn: 'ಅರುಣವರ್ಣದ ಉಷಃಕಾಲದ ಜ್ವಾಲೆಗಳ ಮಡಿಲಲ್ಲಿ ಕುಳಿತು, ನಿಮ್ಮನ್ನು ಪೂಜಿಸುವ ಮನುಷ್ಯನಿಗೆ ಐಶ್ವರ್ಯವನ್ನು ಕೊಡಿ. ಪಿತೃಗಳೇ, ಆ ಸಂಪತ್ತಿನ ಪಾಲನ್ನು ನಿಮ್ಮ ಮಕ್ಕಳಿಗೆ ನೀಡಿ, ಇಲ್ಲಿ ಅವರಿಗೆ ಚೈತನ್ಯವನ್ನು ಕೊಡಿ.',
          },
        },
        {
          n: 8,
          text: 'ये नः पूर्वे पितरः सोम्यासोऽनूहिरे सोमपीथं वसिष्ठाः ।\nतेभिर्यमः संरराणो हवींष्युशन्नुशद्भिः प्रतिकाममत्तु ॥',
          meaning: {
            en: 'Our ancient Soma-loving fathers, the most excellent, who in turn took part in the Soma drink: together with them, rejoicing and eager as they are eager, may Yama eat the oblations as he desires.',
            kn: 'ಸೋಮಪಾನದಲ್ಲಿ ಕ್ರಮವಾಗಿ ಭಾಗವಹಿಸಿದ, ಸೋಮಪ್ರಿಯರಾದ, ಶ್ರೇಷ್ಠರಾದ ನಮ್ಮ ಪ್ರಾಚೀನ ಪಿತೃಗಳೊಡನೆ ಕೂಡಿ, ಅವರಂತೆಯೇ ಉತ್ಸಾಹದಿಂದ ಸಂತೋಷಪಡುತ್ತಾ, ಯಮನು ಇಷ್ಟಪಟ್ಟಂತೆ ಹವಿಸ್ಸುಗಳನ್ನು ಸ್ವೀಕರಿಸಲಿ.',
          },
        },
        {
          n: 9,
          text: 'ये तातृषुर्देवत्रा जेहमाना होत्राविदः स्तोमतष्टासो अर्कैः ।\nआग्ने याहि सुविदत्रेभिरर्वाङ् सत्यैः कव्यैः पितृभिर्घर्मसद्भिः ॥',
          meaning: {
            en: 'Those who thirsted, longing for the gods, who know the offerings and whose praises were fashioned with hymns: O Agni, come here with those kindly, true and wise fathers who sit by the sacred fire.',
            kn: 'ದೇವತೆಗಳನ್ನು ಹಂಬಲಿಸಿ ತವಕಪಟ್ಟವರು, ಹೋಮಗಳನ್ನು ಬಲ್ಲವರು, ಮಂತ್ರಗಳಿಂದ ಸ್ತುತಿಗಳನ್ನು ರಚಿಸಿದವರು: ಅಗ್ನಿಯೇ, ಯಜ್ಞಾಗ್ನಿಯ ಬಳಿ ಕುಳಿತುಕೊಳ್ಳುವ ದಯಾಳುಗಳೂ ಸತ್ಯವಂತರೂ ಜ್ಞಾನಿಗಳೂ ಆದ ಆ ಪಿತೃಗಳೊಡನೆ ಇತ್ತ ಬಾ.',
          },
        },
        {
          n: 10,
          text: 'ये सत्यासो हविरदो हविष्पा इन्द्रेण देवैः सरथं दधानाः ।\nआग्ने याहि सहस्रं देववन्दैः परैः पूर्वैः पितृभिर्घर्मसद्भिः ॥',
          meaning: {
            en: 'Those true ones who eat and drink the oblations, who ride in one chariot with Indra and the gods: O Agni, come here with a thousand of them, the fathers who praise the gods, the far and the ancient, who sit by the sacred fire.',
            kn: 'ಹವಿಸ್ಸನ್ನು ತಿನ್ನುವ, ಕುಡಿಯುವ, ಇಂದ್ರನೊಡನೆಯೂ ದೇವತೆಗಳೊಡನೆಯೂ ಒಂದೇ ರಥದಲ್ಲಿ ಸಾಗುವ ಸತ್ಯವಂತರು: ಅಗ್ನಿಯೇ, ದೇವತೆಗಳನ್ನು ಸ್ತುತಿಸುವ, ದೂರದ ಹಾಗೂ ಪ್ರಾಚೀನರಾದ, ಯಜ್ಞಾಗ್ನಿಯ ಬಳಿ ಕುಳಿತುಕೊಳ್ಳುವ ಸಾವಿರಾರು ಪಿತೃಗಳೊಡನೆ ಇತ್ತ ಬಾ.',
          },
        },
        {
          n: 11,
          text: 'अग्निष्वात्ताः पितर एह गच्छत सदःसदः सदत सुप्रणीतयः ।\nअत्ता हवींषि प्रयतानि बर्हिष्यथा रयिं सर्ववीरं दधातन ॥',
          meaning: {
            en: 'O fathers tasted by Agni, come here; take your seats, each in his own place, O you who guide well. Eat the oblations set out on the sacred grass, and then grant us wealth with a full company of heroes.',
            kn: 'ಅಗ್ನಿಯಿಂದ ಸ್ವೀಕರಿಸಲ್ಪಟ್ಟ ಪಿತೃಗಳೇ, ಇಲ್ಲಿಗೆ ಬನ್ನಿ; ಸನ್ಮಾರ್ಗದಲ್ಲಿ ನಡೆಸುವವರೇ, ನಿಮ್ಮ ನಿಮ್ಮ ಆಸನಗಳಲ್ಲಿ ಕುಳಿತುಕೊಳ್ಳಿ. ದರ್ಭೆಯ ಮೇಲೆ ಇರಿಸಿದ ಹವಿಸ್ಸುಗಳನ್ನು ಸೇವಿಸಿ, ಅನಂತರ ವೀರರಾದ ಸಂತತಿಯಿಂದ ಕೂಡಿದ ಐಶ್ವರ್ಯವನ್ನು ನಮಗೆ ಕೊಡಿ.',
          },
        },
        {
          n: 12,
          text: 'त्वमग्न ईळितो जातवेदोऽवाड्ढव्यानि सुरभीणि कृत्वी ।\nप्रादाः पितृभ्यः स्वधया ते अक्षन्नद्धि त्वं देव प्रयता हवींषि ॥',
          meaning: {
            en: 'O Agni Jatavedas, being praised, you have carried the offerings, making them fragrant, and given them to the fathers; they have eaten them with svadha. Now you too, O god, eat the oblations that are offered.',
            kn: 'ಜಾತವೇದಸನಾದ ಅಗ್ನಿಯೇ, ಸ್ತುತಿಸಲ್ಪಟ್ಟ ನೀನು ಹವಿಸ್ಸುಗಳನ್ನು ಸುಗಂಧಮಯವಾಗಿಸಿ ಕೊಂಡೊಯ್ದು ಪಿತೃಗಳಿಗೆ ಕೊಟ್ಟಿದ್ದೀಯೆ; ಅವರು ಸ್ವಧೆಯೊಡನೆ ಅವನ್ನು ಸೇವಿಸಿದ್ದಾರೆ. ದೇವನೇ, ಈಗ ನೀನೂ ಅರ್ಪಿತವಾದ ಹವಿಸ್ಸುಗಳನ್ನು ಸ್ವೀಕರಿಸು.',
          },
        },
        {
          n: 13,
          text: 'ये चेह पितरो ये च नेह यांश्च विद्म याँ उ च न प्रविद्म ।\nत्वं वेत्थ यति ते जातवेदः स्वधाभिर्यज्ञं सुकृतं जुषस्व ॥',
          meaning: {
            en: 'The fathers who are here and those who are not here, those whom we know and those whom we do not know: you know how many they are, O Jatavedas. Accept this well-made offering, given with svadha.',
            kn: 'ಇಲ್ಲಿರುವ ಪಿತೃಗಳು, ಇಲ್ಲಿಲ್ಲದ ಪಿತೃಗಳು, ನಮಗೆ ತಿಳಿದಿರುವವರು, ತಿಳಿಯದಿರುವವರು: ಜಾತವೇದಸನೇ, ಅವರು ಎಷ್ಟು ಜನರೆಂದು ನೀನು ಬಲ್ಲೆ. ಸ್ವಧೆಯೊಡನೆ ಅರ್ಪಿಸಿದ, ಚೆನ್ನಾಗಿ ನೆರವೇರಿಸಿದ ಈ ಯಜ್ಞವನ್ನು ಸ್ವೀಕರಿಸು.',
          },
        },
        {
          n: 14,
          text: 'ये अग्निदग्धा ये अनग्निदग्धा मध्ये दिवः स्वधया मादयन्ते ।\nतेभिः स्वराळसुनीतिमेतां यथावशं तन्वं कल्पयस्व ॥',
          meaning: {
            en: 'Those who were burnt by fire and those not burnt by fire, who rejoice with svadha in the midst of heaven: with them, O sovereign Lord, shape at your will this body for the life beyond.',
            kn: 'ಅಗ್ನಿಯಿಂದ ದಹಿಸಲ್ಪಟ್ಟವರು, ಅಗ್ನಿಯಿಂದ ದಹಿಸಲ್ಪಡದವರು, ಸ್ವರ್ಗದ ಮಧ್ಯದಲ್ಲಿ ಸ್ವಧೆಯೊಡನೆ ಆನಂದಿಸುವವರು: ಸ್ವರಾಟನಾದ ಪ್ರಭುವೇ, ಅವರೊಡನೆ ಪರಲೋಕದ ಜೀವನಕ್ಕಾಗಿ ಈ ದೇಹವನ್ನು ನಿನ್ನ ಇಚ್ಛೆಯಂತೆ ರೂಪಿಸು.',
          },
        },
      ],
    },
  ],
};
