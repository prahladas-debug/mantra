/**
 * Śrī Gaṅgā Cālīsā, attributed to Sundaradāsa (named in verse 39), Hindi, in Devanagari.
 *
 * Collated Nov 2026. Fewer than three INDEPENDENT copies were found. Five copies were read:
 *   R  drikpanchang.com "Ganga Mata Chalisa" (base);  B  bhaktibharat.com "Ganga Chalisa";
 *   A  aajtak.in "Shri Ganga Chalisa";  I  instaastro.com "Maa Ganga Ji Ki Chalisa";
 *   S  shubhpanchang.com "Ganga Chalisa".
 * R, B, A and I agree word for word (they differ only in "चंद्र/चन्द्र" and "सहस्त्र/सहस्र"), so they are one
 * recension, plainly from a single typing, and not independent. S is a second, re-spelt and smoothed recension
 * ("जय जग जननि हरण अघ खानी ... हरणि तम दूषण ... सुन्ददास"). The two give the same couplets in the same order
 * (opening doha, forty chaupai, closing dohas); the chaupai are numbered 1-40, the three dohas not. The base
 * is R, whose wording is kept even where odd ("हराना अघखानी", "अंत समाई सुर पुर बसल सदर बैठी विमान", "जहानु",
 * "तरनी अमिता पितु पड पिरही", "अक्षैवेता"). Only plain typing slips, where S gives a real word, are corrected:
 *   c6 "जडित रत्न" (S; R "जदिता रत्ना");  c6 "हिय मणि हार, हरणि तम दूषण" (S; R "हर, हरानितम");
 *   c14 "भागीरथी ताप कियो अपारा" (S "अपारा"; R "उपारा");  c23 "पान करत" (S; R "पन");
 *   c32 "बुद्धहीन" (S; R "उद्दिहिन");  c33 "कबहूं" (S; R "कभुहुह").
 * Doubts: several lines in the base are obscure or corrupt (c1, c3, c6, c13, c26, c27, closing dohas) and the
 * meanings there are tentative. The Samvat date in the last doha ("संवत भुत नभ्दिशी, राम जन्म दिन चैत्र") is
 * printed as found. Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const gangaChalisa: Mantra = {
  id: 'ganga-chalisa',
  title: 'श्री गंगा चालीसा',
  titleEn: 'Sri Ganga Chalisa',
  category: 'chalisa',
  order: 35,
  deity: 'Śrī Gaṅgā',
  source: 'Sundaradāsa (named in verse 39), Hindi',
  summary: 'The Hindi hymn to Mother Ganga in forty verses and three dohas: her names and bright form, her descent from Brahma\'s kamandalu and Shiva\'s locks at Bhagiratha\'s penance, her three streams, her tirthas from Haridwar to Prayag and Kashi, the merit of bathing and of her hundred names, and the poet\'s closing request for unbroken devotion. Recited on Ganga Dashahara and at Ganga snan.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'दोहा',
      titleEn: 'Opening doha',
      verses: [
        {
          text: 'जय जय जय जग पावनी, जयति देवसरि गंग ।\nजय शिव जटा निवासिनी, अनुपम तुंग तरंग ॥',
          meaning: { en: 'Victory, victory, victory to the world\'s purifier, Ganga, river of the gods; victory to her who dwells in Shiva\'s locks, with matchless high waves.' },
        },
      ],
    },
    {
      title: 'चौपाई',
      titleEn: 'Chaupai',
      verses: [
        {
          n: 1,
          text: 'जय जय जननी हराना अघखानी ।\nआनंद करनी गंगा महारानी ॥',
          meaning: { en: 'Victory, mother, destroyer of sin, joy-giver, queen Ganga.' },
        },
        {
          n: 2,
          text: 'जय भगीरथी सुरसरि माता ।\nकलिमल मूल डालिनी विख्याता ॥',
          meaning: { en: 'Victory, Bhagirathi, Surasari, mother, famed as the one who crushes the root of the Kali Age\'s dirt.' },
        },
        {
          n: 3,
          text: 'जय जय जहानु सुता अघ हनानी ।\nभीष्म की माता जगा जननी ॥',
          meaning: { en: 'Victory, daughter of Jahnu, destroyer of sin, mother of Bhishma, mother of the world.' },
        },
        {
          n: 4,
          text: 'धवल कमल दल मम तनु सजे ।\nलखी शत शरद चन्द्र छवि लजाई ॥',
          meaning: { en: 'Your body is like a white lotus-leaf, and the beauty of a hundred autumn moons is put to shame at the sight.' },
        },
        {
          n: 5,
          text: 'वहां मकर विमल शुची सोहें ।\nअमिया कलश कर लखी मन मोहें ॥',
          meaning: { en: 'Your mount is the crocodile; pure and spotless you shine, and with the nectar-jar in your hand you charm the heart.' },
        },
        {
          n: 6,
          text: 'जडित रत्न कंचन आभूषण ।\nहिय मणि हार, हरणि तम दूषण ॥',
          meaning: { en: 'You wear jewelled gold ornaments and a pearl necklace on your chest, which dispel darkness.' },
        },
        {
          n: 7,
          text: 'जग पावनी त्रय ताप नासवनी ।\nतरल तरंग तुंग मन भावनी ॥',
          meaning: { en: 'Purifier of the world, remover of the three kinds of suffering; your dancing high waves delight the mind.' },
        },
        {
          n: 8,
          text: 'जो गणपति अति पूज्य प्रधान ।\nइहूं ते प्रथम गंगा अस्नाना ॥',
          meaning: { en: 'You are the one even Ganapati, first among the worshipped, honours; among all, one bathes first in Ganga.' },
        },
        {
          n: 9,
          text: 'ब्रह्मा कमंडल वासिनी देवी ।\nश्री प्रभु पद पंकज सुख सेवि ॥',
          meaning: { en: 'You dwell in Brahma\'s kamandalu, goddess, and serve the lotus feet of the Lord.' },
        },
        {
          n: 10,
          text: 'साथी सहस्र सागर सुत तरयो ।\nगंगा सागर तीरथ धरयो ॥',
          meaning: { en: 'You saved the sixty thousand sons of Sagara, and set Gangasagar as a pilgrimage.' },
        },
        {
          n: 11,
          text: 'अगम तरंग उठ्यो मन भवन ।\nलखी तीरथ हरिद्वार सुहावन ॥',
          meaning: { en: 'Your waves rose unmeasured in the heart, and the lovely Haridwar tirtha came into view.' },
        },
        {
          n: 12,
          text: 'तीरथ राज प्रयाग अक्षैवेता ।\nधरयो मातु पुनि काशी करवत ॥',
          meaning: { en: 'King of tirthas Prayag, the undying fig tree (Akshayavata), and then you took your place in Kashi.' },
        },
        {
          n: 13,
          text: 'धनी धनी सुरसरि स्वर्ग की सीधी ।\nतरनी अमिता पितु पड पिरही ॥',
          meaning: { en: 'Blessed are you, the Surasari, the stairway to heaven, the boat for countless forefathers.' },
        },
        {
          n: 14,
          text: 'भागीरथी ताप कियो अपारा ।\nदियो ब्रह्म तव सुरसरि धारा ॥',
          meaning: { en: 'Bhagiratha did boundless penance, and Brahma then gave the Ganga stream.' },
        },
        {
          n: 15,
          text: 'जब जग जननी चल्यो हहराई ।\nशम्भु जाता महं रह्यो समाई ॥',
          meaning: { en: 'When the mother of the world came roaring down, she was gathered into Shambhu\'s locks.' },
        },
        {
          n: 16,
          text: 'वर्षा पर्यंत गंगा महारानी ।\nरहीं शम्भू के जाता भुलानी ॥',
          meaning: { en: 'For a full year Queen Ganga stayed lost in Shiva\'s locks.' },
        },
        {
          n: 17,
          text: 'पुनि भागीरथी शम्भुहीं ध्यायो ।\nतब इक बूंद जटा से पायो ॥',
          meaning: { en: 'Then Bhagiratha prayed to Shambhu, and received a single drop from the locks.' },
        },
        {
          n: 18,
          text: 'ताते मातु भें त्रय धारा ।\nमृत्यु लोक, नाभा, अरु पातारा ॥',
          meaning: { en: 'From it the mother became three streams: in the world of mortals, in the sky, and in the netherworld.' },
        },
        {
          n: 19,
          text: 'गईं पाताल प्रभावती नामा ।\nमन्दाकिनी गई गगन ललामा ॥',
          meaning: { en: 'In the netherworld you are called Prabhavati, in the sky Mandakini, lovely.' },
        },
        {
          n: 20,
          text: 'मृत्यु लोक जाह्नवी सुहावनी ।\nकलिमल हरनी अगम जग पावनि ॥',
          meaning: { en: 'In the mortal world you are lovely Jahnavi, destroyer of Kali\'s filth, purifier of the world.' },
        },
        {
          n: 21,
          text: 'धनि मइया तब महिमा भारी ।\nधर्मं धुरी कलि कलुष कुठारी ॥',
          meaning: { en: 'Blessed mother, your greatness is vast, an axe to the sins of Kali, a burden-bearer of dharma.' },
        },
        {
          n: 22,
          text: 'मातु प्रभवति धनि मंदाकिनी ।\nधनि सुर सरित सकल भयनासिनी ॥',
          meaning: { en: 'Blessed Prabhavati, blessed Mandakini, blessed Surasarit, destroyer of every fear.' },
        },
        {
          n: 23,
          text: 'पान करत निर्मल गंगा जल ।\nपावत मन इच्छित अनंत फल ॥',
          meaning: { en: 'Drinking or bathing in the clean water of Ganga, one gains all the fruit one desires.' },
        },
        {
          n: 24,
          text: 'पुरव जन्म पुण्य जब जागत ।\nतबहीं ध्यान गंगा महं लागत ॥',
          meaning: { en: 'When merit of former lives wakens, then one\'s mind is fixed on Ganga.' },
        },
        {
          n: 25,
          text: 'जई पगु सुरसरी हेतु उठावही ।\nतई जगि अश्वमेघ फल पावहि ॥',
          meaning: { en: 'Whoever lifts a foot towards the Surasari, gets the fruit of an ashvamedha sacrifice.' },
        },
        {
          n: 26,
          text: 'महा पतित जिन कहू न तारे ।\nतिन तारे इक नाम तिहारे ॥',
          meaning: { en: 'Even the greatest sinners whom none could save were saved by your one name.' },
        },
        {
          n: 27,
          text: 'शत योजन हूं से जो ध्यावहिं ।\nनिशचाई विष्णु लोक पद पावहीं ॥',
          meaning: { en: 'Even one who meditates on you from a hundred yojanas away surely reaches the realm of Vishnu.' },
        },
        {
          n: 28,
          text: 'नाम भजत अगणित अघ नाशै ।\nविमल ज्ञान बल बुद्धि प्रकाशे ॥',
          meaning: { en: 'Repeating your name destroys countless sins, and pure knowledge, strength and wisdom blossom.' },
        },
        {
          n: 29,
          text: 'जिमी धन मूल धर्मं अरु दाना ।\nधर्मं मूल गंगाजल पाना ॥',
          meaning: { en: 'As wealth is the root of charity and dharma, so drinking Ganga water is the root of dharma.' },
        },
        {
          n: 30,
          text: 'तब गुन गुणन करत दुख भाजत ।\nगृह गृह सम्पति सुमति विराजत ॥',
          meaning: { en: 'Singing your virtues, sorrow flees, and every house is full of wealth and good sense.' },
        },
        {
          n: 31,
          text: 'गंगहि नेम सहित नित ध्यावत ।\nदुर्जनहूं सज्जन पद पावत ॥',
          meaning: { en: 'Those who meditate on Ganga with discipline, even wicked ones, reach the state of the good.' },
        },
        {
          n: 32,
          text: 'बुद्धहीन विद्या बल पावै ।\nरोगी रोग मुक्त हवे जावै ॥',
          meaning: { en: 'The unlearned gain learning and strength, and the sick are freed of their illness.' },
        },
        {
          n: 33,
          text: 'गंगा गंगा जो नर कहहीं ।\nभूखा नंगा कबहूं न रहहि ॥',
          meaning: { en: 'Those who say "Ganga, Ganga" never go hungry or naked.' },
        },
        {
          n: 34,
          text: 'निकसत ही मुख गंगा माई ।\nश्रवण दाबी यम चलहिं पराई ॥',
          meaning: { en: 'As the name leaves the mouth, hearing it Yama\'s messengers flee.' },
        },
        {
          n: 35,
          text: 'महं अघिन अधमन कहं तारे ।\nभए नरका के बंद किवारें ॥',
          meaning: { en: 'You saved sinners and the lowly, and the doors of hell were closed.' },
        },
        {
          n: 36,
          text: 'जो नर जपी गंग शत नामा ।\nसकल सिद्धि पूरण ह्वै कामा ॥',
          meaning: { en: 'Whoever recites the hundred names of Ganga has every wish fulfilled.' },
        },
        {
          n: 37,
          text: 'सब सुख भोग परम पद पावहीं ।\nआवागमन रहित ह्वै जावहीं ॥',
          meaning: { en: 'He enjoys every happiness, reaches the supreme state and is freed from coming and going.' },
        },
        {
          n: 38,
          text: 'धनि मइया सुरसरि सुख दैनि ।\nधनि धनि तीरथ राज त्रिवेणी ॥',
          meaning: { en: 'Blessed mother, giver of happiness, blessed Triveni, king of tirthas.' },
        },
        {
          n: 39,
          text: 'ककरा ग्राम ऋषि दुर्वासा ।\nसुन्दरदास गंगा कर दासा ॥',
          meaning: { en: 'In Kakra village, near Rishi Durvasa\'s place, Sundaradasa is Ganga\'s servant.' },
        },
        {
          n: 40,
          text: 'जो यह पढे गंगा चालीसा ।\nमिली भक्ति अविरल वागीसा ॥',
          meaning: { en: 'Whoever reads this Ganga Chalisa gains unbroken devotion and a lasting gift of speech.' },
        },
      ],
    },
    {
      title: 'दोहा',
      titleEn: 'Closing doha',
      verses: [
        {
          text: 'नित नए सुख सम्पति लहैं, धरें गंगा का ध्यान ।\nअंत समाई सुर पुर बसल, सदर बैठी विमान ॥',
          meaning: { en: 'Those who meditate on Ganga gain new wealth and happiness every day; (the second line is obscure) at the end they dwell in heaven, seated reverently in a celestial chariot.' },
        },
        {
          text: 'संवत भुत नभ्दिशी, राम जन्म दिन चैत्र ।\nपूरण चालीसा किया, हरी भक्तन हित नेत्र ॥',
          meaning: { en: 'The poem is dated, as printed, to the birthday of Rama in Chaitra; the chalisa was completed for the benefit of Hari\'s devotees.' },
        },
      ],
    },
  ],
};
