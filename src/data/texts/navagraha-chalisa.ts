/**
 * Śrī Navagraha Cālīsā, attributed to Sundaradāsa (named in the closing doha), Hindi, in Devanagari.
 *
 * Collated Nov 2026 against four typed copies of the widely printed text:
 *   R  drikpanchang.com "Navagraha Chalisa" (base: with the nine stuti headings);
 *   B  bhaktibharat.com "Navgrah Chalisa";  A  aajtak.in "Navagraha Chalisa";
 *   S  shubhpanchang.com "Navgraha Chalisa".
 * B and A agree with each other word for word and may share a source; R and S are separate typings. All give
 * an opening pair of dohas, nine praises of four couplets each (Surya, Chandra, Mangala, Budha, Brihaspati,
 * Shukra, Shani, Rahu, Ketu), a four-couplet passage on the fruit of reciting ("नवग्रह शान्ति फल") and a closing pair
 * of dohas. The forty chaupai are numbered 1-40 straight through; the dohas are not. Sections follow the
 * headings of R, B and A (S omits them). Readings chosen against R:
 *   c1 "नावौं", "करहुं" (R, B, A; S "नावों", "करहु"); c6 and c8 "हरहुं" (R, B, A; S "हरहु"); c14 "दीजै बुद्धि"
 *   (word division of B, A); c14 "कल्याणा" (R, B, A; S "कल्याना"); c15 "चन्द्रसुवन" (R, B, A; S "चन्द्रसुवत"); c16
 *   "पूजहु ... कहु" (R; B, A "पूजहिं ... कहुं"); c21 "निरन्तन" (R, B, A; S "निरन्तर"); c25 "सौरी" (R, B, A; S "सोरी");
 *   c30 "स्वर्भानु" (R, B, A; S "स्वरर्भानु"); c35 "बलवान" (R, B, A; S "बलवाना").
 *   Closing doha "नवोग्रह" (R, B, A; S "नवग्रह") and "पढत प्रेम युत" (S; R, B, A "सुत", which does not construe).
 *   Doubt: c16 "पूजहु आस दास कहु स्वामी" is obscure in all copies.
 * Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const navagrahaChalisa: Mantra = {
  id: 'navagraha-chalisa',
  title: 'श्री नवग्रह चालीसा',
  titleEn: 'Sri Navagraha Chalisa',
  category: 'chalisa',
  order: 34,
  deity: 'Navagraha',
  source: 'Sundaradāsa (named in the closing doha), Hindi',
  summary: 'The Hindi hymn to the nine grahas, in forty verses: an opening doha, then four verses of praise for each of Surya, Chandra, Mangala, Budha, Brihaspati, Shukra, Shani, Rahu and Ketu, listing their names and asking each to remove affliction, and a final passage on the fruit of reciting it. Read on Saturdays and to calm unfavourable planetary periods.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'दोहा',
      titleEn: 'Opening doha',
      verses: [
        {
          text: 'श्री गणपति गुरुपद कमल, प्रेम सहित सिरनाय ।\nनवग्रह चालीसा कहत, शारद होत सहाय ॥',
          meaning: { en: 'Bowing with love at the lotus feet of Ganapati and the guru, I tell this chalisa of the nine grahas; may Sharada (Sarasvati) help.' },
        },
        {
          text: 'जय जय रवि शशि सोम बुध, जय गुरु भृगु शनि राज ।\nजयति राहु अरु केतु ग्रह, करहु अनुग्रह आज ॥',
          meaning: { en: 'Victory to Ravi, Shashi, Soma, Budha, Guru, Bhrigu and Shani, and to Rahu and Ketu; be gracious to me today.' },
        },
      ],
    },
    {
      title: 'श्री सूर्य स्तुति',
      titleEn: 'Praise of Surya (Sun)',
      verses: [
        {
          n: 1,
          text: 'प्रथमहि रवि कहँ नावौं माथा ।\nकरहुं कृपा जनि जानि अनाथा ॥',
          meaning: { en: 'First I bow my head to Ravi; do not leave me as an orphan, be gracious.' },
        },
        {
          n: 2,
          text: 'हे आदित्य दिवाकर भानू ।\nमैं मति मन्द महा अज्ञानू ॥',
          meaning: { en: 'O Aditya, Divakara, Bhanu, I am of small mind and very ignorant.' },
        },
        {
          n: 3,
          text: 'अब निज जन कहँ हरहु कलेषा ।\nदिनकर द्वादश रूप दिनेशा ॥',
          meaning: { en: 'Now remove the afflictions of your people, Dinakara of twelve forms, lord of the day.' },
        },
        {
          n: 4,
          text: 'नमो भास्कर सूर्य प्रभाकर ।\nअर्क मित्र अघ मोघ क्षमाकर ॥',
          meaning: { en: 'Salutations to Bhaskara, Surya, Prabhakara, Arka, Mitra, forgiver of the sins of many.' },
        },
      ],
    },
    {
      title: 'श्री चन्द्र स्तुति',
      titleEn: 'Praise of Chandra (Moon)',
      verses: [
        {
          n: 5,
          text: 'शशि मयंक रजनीपति स्वामी ।\nचन्द्र कलानिधि नमो नमामि ॥',
          meaning: { en: 'Shashi, Mayanka, lord of night, Chandra, treasury of the arts, I bow to you again and again.' },
        },
        {
          n: 6,
          text: 'राकापति हिमांशु राकेशा ।\nप्रणवत जन तन हरहुं कलेशा ॥',
          meaning: { en: 'Lord of the full moon, Himamshu, Rakesha: to those who bow, remove bodily suffering.' },
        },
        {
          n: 7,
          text: 'सोम इन्दु विधु शान्ति सुधाकर ।\nशीत रश्मि औषधि निशाकर ॥',
          meaning: { en: 'Soma, Indu, Vidhu, Sudhakara, giver of peace, cool-rayed, herb-lord and Nishakara.' },
        },
        {
          n: 8,
          text: 'तुम्हीं शोभित सुन्दर भाल महेशा ।\nशरण शरण जन हरहुं कलेशा ॥',
          meaning: { en: 'You grace the beautiful brow of Mahesha; I take refuge, remove the suffering of your people.' },
        },
      ],
    },
    {
      title: 'श्री मङ्गल स्तुति',
      titleEn: 'Praise of Mangala (Mars)',
      verses: [
        {
          n: 9,
          text: 'जय जय जय मंगल सुखदाता ।\nलोहित भौमादिक विख्याता ॥',
          meaning: { en: 'Victory, victory to Mangala, giver of happiness, red-bodied Bhauma and famed by many names.' },
        },
        {
          n: 10,
          text: 'अंगारक कुज रुज ऋणहारी ।\nकरहु दया यही विनय हमारी ॥',
          meaning: { en: 'Angaraka, Kuja, remover of disease and debt: show kindness, this is our prayer.' },
        },
        {
          n: 11,
          text: 'हे महिसुत छितिसुत सुखराशी ।\nलोहितांग जय जन अघनाशी ॥',
          meaning: { en: 'O son of the earth, mine of happiness, red-limbed, destroyer of sin of your people.' },
        },
        {
          n: 12,
          text: 'अगम अमंगल अब हर लीजै ।\nसकल मनोरथ पूरण कीजै ॥',
          meaning: { en: 'Take away the great misfortunes now and fulfil all our wishes.' },
        },
      ],
    },
    {
      title: 'श्री बुध स्तुति',
      titleEn: 'Praise of Budha (Mercury)',
      verses: [
        {
          n: 13,
          text: 'जय शशि नन्दन बुध महाराजा ।\nकरहु सकल जन कहँ शुभ काजा ॥',
          meaning: { en: 'Victory to Budha, son of the Moon, great king; bring good work to all your people.' },
        },
        {
          n: 14,
          text: 'दीजै बुद्धि बल सुमति सुजाना ।\nकठिन कष्ट हरि करि कल्याणा ॥',
          meaning: { en: 'Give us strength of intellect and good sense; relieve hard pain and bring welfare.' },
        },
        {
          n: 15,
          text: 'हे तारासुत रोहिणी नन्दन ।\nचन्द्रसुवन दुख द्वन्द्व निकन्दन ॥',
          meaning: { en: 'Son of Tara and Rohini\'s delight, son of the Moon, destroyer of the conflicts of sorrow.' },
        },
        {
          n: 16,
          text: 'पूजहु आस दास कहु स्वामी ।\nप्रणत पाल प्रभु नमो नमामी ॥',
          meaning: { en: 'Our hope rests on you; Lord who guards those who bow, I bow to you again and again.' },
        },
      ],
    },
    {
      title: 'श्री बृहस्पति स्तुति',
      titleEn: 'Praise of Brihaspati (Jupiter)',
      verses: [
        {
          n: 17,
          text: 'जयति जयति जय श्री गुरुदेवा ।\nकरों सदा तुम्हरी प्रभु सेवा ॥',
          meaning: { en: 'Victory, victory to the divine Guru, I will always serve you.' },
        },
        {
          n: 18,
          text: 'देवाचार्य तुम देव गुरु ज्ञानी ।\nइन्द्र पुरोहित विद्यादानी ॥',
          meaning: { en: 'Teacher of the gods, wise guru of the gods, priest of Indra, giver of learning.' },
        },
        {
          n: 19,
          text: 'वाचस्पति बागीश उदारा ।\nजीव बृहस्पति नाम तुम्हारा ॥',
          meaning: { en: 'Vachaspati, Bagisha, the generous; Jiva and Brihaspati are your names.' },
        },
        {
          n: 20,
          text: 'विद्या सिन्धु अंगिरा नामा ।\nकरहु सकल विधि पूरण कामा ॥',
          meaning: { en: 'Ocean of learning, named Angiras, fulfil every wish in every way.' },
        },
      ],
    },
    {
      title: 'श्री शुक्र स्तुति',
      titleEn: 'Praise of Shukra (Venus)',
      verses: [
        {
          n: 21,
          text: 'शुक्र देव पद तल जल जाता ।\nदास निरन्तन ध्यान लगाता ॥',
          meaning: { en: 'Shukra Deva, your servant meditates on you unceasingly, at your feet.' },
        },
        {
          n: 22,
          text: 'हे उशना भार्गव भृगु नन्दन ।\nदैत्य पुरोहित दुष्ट निकन्दन ॥',
          meaning: { en: 'O Ushana, Bhargava, son of Bhrigu, priest of the daityas, destroyer of the wicked.' },
        },
        {
          n: 23,
          text: 'भृगुकुल भूषण दूषण हारी ।\nहरहु नेष्ट ग्रह करहु सुखारी ॥',
          meaning: { en: 'Jewel of the Bhrigu clan, remover of faults, take away the harmful influences and give happiness.' },
        },
        {
          n: 24,
          text: 'तुहि द्विजबर जोशी सिरताजा ।\nनर शरीर के तुमहीं राजा ॥',
          meaning: { en: 'You are crown of the best of Brahmins and astrologers, king of the human body.' },
        },
      ],
    },
    {
      title: 'श्री शनि स्तुति',
      titleEn: 'Praise of Shani (Saturn)',
      verses: [
        {
          n: 25,
          text: 'जय श्री शनिदेव रवि नन्दन ।\nजय कृष्णो सौरी जगवन्दन ॥',
          meaning: { en: 'Victory, Shanidev, son of Ravi; victory, Krishna, Sauri, adored by the world.' },
        },
        {
          n: 26,
          text: 'पिंगल मन्द रौद्र यम नामा ।\nवप्र आदि कोणस्थ ललामा ॥',
          meaning: { en: 'Pingala, Manda, Raudra, Yama, Vapra and Konastha are your names.' },
        },
        {
          n: 27,
          text: 'वक्र दृष्टि पिप्पल तन साजा ।\nक्षण महँ करत रंक क्षण राजा ॥',
          meaning: { en: 'With a sidelong glance, riding the pipal-hued body, you make a beggar a king and a king a beggar in a moment.' },
        },
        {
          n: 28,
          text: 'ललत स्वर्ण पद करत निहाला ।\nहरहु विपत्ति छाया के लाला ॥',
          meaning: { en: 'Your golden feet bring joy; remove my misfortune, son of Chhaya.' },
        },
      ],
    },
    {
      title: 'श्री राहु स्तुति',
      titleEn: 'Praise of Rahu',
      verses: [
        {
          n: 29,
          text: 'जय जय राहु गगन प्रविसइया ।\nतुमही चन्द्र आदित्य ग्रसइया ॥',
          meaning: { en: 'Victory, victory to Rahu who moves in the sky, you who swallow the Moon and Sun.' },
        },
        {
          n: 30,
          text: 'रवि शशि अरि स्वर्भानु धारा ।\nशिखी आदि बहु नाम तुम्हारा ॥',
          meaning: { en: 'Foe of Ravi and Shashi, Svarbhanu, Shikhi and many other names are yours.' },
        },
        {
          n: 31,
          text: 'सैहिंकेय तुम निशाचर राजा ।\nअर्धकाय जग राखहु लाजा ॥',
          meaning: { en: 'Son of Simhika, king of night-walkers, half-bodied, protect the world\'s honour.' },
        },
        {
          n: 32,
          text: 'यदि ग्रह समय पाय कहिं आवहु ।\nसदा शान्ति और सुख उपजावहु ॥',
          meaning: { en: 'When your period comes, bring peace and happiness always.' },
        },
      ],
    },
    {
      title: 'श्री केतु स्तुति',
      titleEn: 'Praise of Ketu',
      verses: [
        {
          n: 33,
          text: 'जय श्री केतु कठिन दुखहारी ।\nकरहु सुजन हित मंगलकारी ॥',
          meaning: { en: 'Victory to Ketu, remover of hard sorrow; do good for your good people.' },
        },
        {
          n: 34,
          text: 'ध्वजयुत रुण्ड रूप विकराला ।\nघोर रौद्रतन अघमन काला ॥',
          meaning: { en: 'With banner and headless trunk, terrible and fierce-bodied, dark in thought and sin.' },
        },
        {
          n: 35,
          text: 'शिखी तारिका ग्रह बलवान ।\nमहा प्रताप न तेज ठिकाना ॥',
          meaning: { en: 'Mighty Shikhi, Tarika among planets, whose glory and radiance know no measure.' },
        },
        {
          n: 36,
          text: 'वाहन मीन महा शुभकारी ।\nदीजै शान्ति दया उर धारी ॥',
          meaning: { en: 'Whose mount is the fish, greatly auspicious; grant peace, hold compassion in your heart.' },
        },
      ],
    },
    {
      title: 'नवग्रह शान्ति फल',
      titleEn: 'The fruit of the Navagraha peace',
      verses: [
        {
          n: 37,
          text: 'तीरथराज प्रयाग सुपासा ।\nबसै राम के सुन्दर दासा ॥',
          meaning: { en: 'Prayag, king of pilgrim places, is a good dwelling, where Sundar Das, servant of Rama, lives.' },
        },
        {
          n: 38,
          text: 'ककरा ग्रामहिं पुरे-तिवारी ।\nदुर्वासाश्रम जन दुख हारी ॥',
          meaning: { en: 'In the village of Kakra, Pure-Tiwari, at Durvasa\'s ashram, which removes people\'s sorrow.' },
        },
        {
          n: 39,
          text: 'नव-ग्रह शान्ति लिख्यो सुख हेतु ।\nजन तन कष्ट उतारण सेतू ॥',
          meaning: { en: 'He wrote this Navagraha peace for happiness, a bridge for easing the body\'s suffering.' },
        },
        {
          n: 40,
          text: 'जो नित पाठ करै चित लावै ।\nसब सुख भोगि परम पद पावै ॥',
          meaning: { en: 'Whoever reads it daily with a steady mind enjoys every happiness and reaches the supreme state.' },
        },
      ],
    },
    {
      title: 'दोहा',
      titleEn: 'Closing doha',
      verses: [
        {
          text: 'धन्य नवग्रह देव प्रभु, महिमा अगम अपार ।\nचित नव मंगल मोद गृह, जगत जनन सुखद्वार ॥',
          meaning: { en: 'Blessed are the Navagraha gods, their greatness unfathomable; the mind becomes a home of new blessings and joy, a door of happiness for all who are born.' },
        },
        {
          text: 'यह चालीसा नवोग्रह, विरचित सुन्दरदास ।\nपढत प्रेम युत बढत सुख, सर्वानन्द हुलास ॥',
          meaning: { en: 'Sundaradasa composed this chalisa of the nine grahas; reading it with love, happiness grows and joy overflows.' },
        },
      ],
    },
  ],
};
