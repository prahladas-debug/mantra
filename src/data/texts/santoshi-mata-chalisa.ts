/**
 * Śrī Santoṣī Mātā Cālīsā ("Bandauṁ santoṣī caraṇa"), Hindi, in Devanagari. No author is named.
 *
 * Collated Nov 2026 against three typed copies of the widely printed text:
 *   S  shubhpanchang.com "Santoshi Mata Chalisa" (base);  B  bhaktibharat.com "Santoshi Mata Chalisa";
 *   P  prabhatkhabar.com "Shree Santoshi Mata Chalisa in Hindi".
 * The three agree word for word (B and P write "माँ" where S writes "मां" in the last chaupai) and so are one
 * recension, very likely sharing a source. (A different text with the opening "Śrī gaṇapati pada nāya sira"
 * and "Jaya saṁtoṣī māṁ jaga jananī", on drikpanchang.com, is another composition and is not used.) They give two
 * opening dohas, forty chaupai couplets and a closing doha; the chaupai are numbered 1-40, the dohas not. No
 * reading choice was needed beyond spelling, which follows S. Doubts: none in the wording. Place names in
 * c13-c20 are printed as found (Sambalpur's Bahucharā, Kotesvara, Rajnagar, Pavagadh). Nukta letters are
 * written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const santoshiMataChalisa: Mantra = {
  id: 'santoshi-mata-chalisa',
  title: 'श्री सन्तोषी माता चालीसा',
  titleEn: 'Sri Santoshi Mata Chalisa',
  category: 'chalisa',
  order: 38,
  deity: 'Śrī Santoṣī Mātā',
  source: 'Traditional (no author named), Hindi',
  summary: 'The Hindi hymn to Santoshi Mata, the goddess of contentment and daughter of Ganesha, in forty verses and three dohas: her gentle form in white, her shrines across India under the names of Vindhyavasini, Kali, Jvala and Annapurna, the blessings of devotion for men, women, maidens and widows, and the Friday fast with its offering of gram and jaggery. Recited on Fridays, especially during the sixteen-Friday vow.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'दोहा',
      titleEn: 'Opening doha',
      verses: [
        {
          text: 'बन्दौं सन्तोषी चरण रिद्धि-सिद्धि दातार ।\nध्यान धरत ही होत नर दुःख सागर से पार ॥',
          meaning: { en: 'I bow to Santoshi\'s feet, giver of success and prosperity; meditating on her one crosses the ocean of sorrow.' },
        },
        {
          text: 'भक्तन को सन्तोष दे सन्तोषी तव नाम ।\nकृपा करहु जगदम्ब अब आया तेरे धाम ॥',
          meaning: { en: 'You give contentment to devotees, and so your name is Santoshi; be kind, Jagadamba, I have come to your door.' },
        },
      ],
    },
    {
      title: 'चौपाई',
      titleEn: 'Chaupai',
      verses: [
        {
          n: 1,
          text: 'जय सन्तोषी मात अनूपम ।\nशान्ति दायिनी रूप मनोरम ॥',
          meaning: { en: 'Victory to Santoshi Mata, matchless, giver of peace, of lovely form.' },
        },
        {
          n: 2,
          text: 'सुन्दर वरण चतुर्भुज रूपा ।\nवेश मनोहर ललित अनुपा ॥',
          meaning: { en: 'Your colour is fair, you have four arms, your dress is charming and elegant.' },
        },
        {
          n: 3,
          text: 'श्वेताम्बर रूप मनहारी ।\nमाँ तुम्हारी छवि जग से न्यारी ॥',
          meaning: { en: 'You wear white, a heart-stealing form; mother, your beauty is beyond the world\'s.' },
        },
        {
          n: 4,
          text: 'दिव्य स्वरूपा आयत लोचन ।\nदर्शन से हो संकट मोचन ॥',
          meaning: { en: 'Divine-formed, wide-eyed, one sight of you frees from trouble.' },
        },
        {
          n: 5,
          text: 'जय गणेश की सुता भवानी ।\nरिद्धि-सिद्धि की पुत्री ज्ञानी ॥',
          meaning: { en: 'Victory to Ganesha\'s daughter, Bhavani, wise daughter of Riddhi and Siddhi.' },
        },
        {
          n: 6,
          text: 'अगम अगोचर तुम्हरी माया ।\nसब पर करो कृपा की छाया ॥',
          meaning: { en: 'Your maya is beyond reach and sight; cast the shade of your grace on all.' },
        },
        {
          n: 7,
          text: 'नाम अनेक तुम्हारे माता ।\nअखिल विश्व है तुमको ध्याता ॥',
          meaning: { en: 'You have many names, mother, and the whole world meditates on you.' },
        },
        {
          n: 8,
          text: 'तुमने रूप अनेकों धारे ।\nको कहि सके चरित्र तुम्हारे ॥',
          meaning: { en: 'You have taken many forms; who can tell all your deeds?' },
        },
        {
          n: 9,
          text: 'धाम अनेक कहाँ तक कहिये ।\nसुमिरन तब करके सुख लहिये ॥',
          meaning: { en: 'How many dwellings can be named? By remembering you, one gains happiness.' },
        },
        {
          n: 10,
          text: 'विन्ध्याचल में विन्ध्यवासिनी ।\nकोटेश्वर सरस्वती सुहासिनी ॥',
          meaning: { en: 'At Vindhyachala you are Vindhyavasini, at Koteshvara a smiling Sarasvati.' },
        },
        {
          n: 11,
          text: 'कलकत्ते में तू ही काली ।\nदुष्ट नाशिनी महाकराली ॥',
          meaning: { en: 'In Calcutta you are Kali, destroyer of the wicked, great and terrible.' },
        },
        {
          n: 12,
          text: 'सम्बल पुर बहुचरा कहाती ।\nभक्तजनों का दुःख मिटाती ॥',
          meaning: { en: 'At Sambalpur you are called Bahuchara, ending the sorrow of your devotees.' },
        },
        {
          n: 13,
          text: 'ज्वाला जी में ज्वाला देवी ।\nपूजत नित्य भक्त जन सेवी ॥',
          meaning: { en: 'At Jvalaji you are Jvala Devi, daily worshipped and served by devotees.' },
        },
        {
          n: 14,
          text: 'नगर बम्बई की महारानी ।\nमहा लक्ष्मी तुम कल्याणी ॥',
          meaning: { en: 'In Bombay you are the queen of the city, Mahalakshmi, the auspicious.' },
        },
        {
          n: 15,
          text: 'मदुरा में मीनाक्षी तुम हो ।\nसुख दुख सबकी साक्षी तुम हो ॥',
          meaning: { en: 'At Madurai you are Minakshi, witness of everyone\'s joy and sorrow.' },
        },
        {
          n: 16,
          text: 'राजनगर में तुम जगदम्बे ।\nबनी भद्रकाली तुम अम्बे ॥',
          meaning: { en: 'At Rajnagar you are Jagadamba and become Bhadrakali, Amba.' },
        },
        {
          n: 17,
          text: 'पावागढ में दुर्गा माता ।\nअखिल विश्व तेरा यश गाता ॥',
          meaning: { en: 'At Pavagadh you are Durga Mata, and the whole world sings your fame.' },
        },
        {
          n: 18,
          text: 'काशी पुराधीश्वरी माता ।\nअन्नपूर्णा नाम सुहाता ॥',
          meaning: { en: 'In Kashi you are Annapurna, sovereign of the city, a name that charms.' },
        },
        {
          n: 19,
          text: 'सर्वानन्द करो कल्याणी ।\nतुम्हीं शारदा अमृत वाणी ॥',
          meaning: { en: 'Bring joy to all, auspicious one; you are Sharada, with nectar-like speech.' },
        },
        {
          n: 20,
          text: 'तुम्हरी महिमा जल में थल में ।\nदुःख दारिद्र सब मेटो पल में ॥',
          meaning: { en: 'Your greatness is in water and on earth; remove sorrow and poverty in a moment.' },
        },
        {
          n: 21,
          text: 'जेते ऋषि और मुनीशा ।\nनारद देव और देवेशा ॥',
          meaning: { en: 'All the sages and great ones, Narada and the gods and the gods\' lord,' },
        },
        {
          n: 22,
          text: 'इस जगती के नर और नारी ।\nध्यान धरत हैं मात तुम्हारी ॥',
          meaning: { en: 'all the men and women of this world meditate on you, mother.' },
        },
        {
          n: 23,
          text: 'जापर कृपा तुम्हारी होती ।\nवह पाता भक्ति का मोती ॥',
          meaning: { en: 'Those on whom your grace falls get the pearl of devotion.' },
        },
        {
          n: 24,
          text: 'दुःख दारिद्र संकट मिट जाता ।\nध्यान तुम्हारा जो जन ध्याता ॥',
          meaning: { en: 'Sorrow, poverty and trouble end for the one who meditates on you.' },
        },
        {
          n: 25,
          text: 'जो जन तुम्हरी महिमा गावै ।\nध्यान तुम्हारा कर सुख पावै ॥',
          meaning: { en: 'Whoever sings your greatness and meditates on you finds happiness.' },
        },
        {
          n: 26,
          text: 'जो मन राखे शुद्ध भावना ।\nताकी पूरण करो कामना ॥',
          meaning: { en: 'Fulfil the wishes of those who keep pure intent in the mind.' },
        },
        {
          n: 27,
          text: 'कुमति निवारि सुमति की दात्री ।\nजयति जयति माता जगधात्री ॥',
          meaning: { en: 'Giver of good sense, remover of wrong thought, victory, victory, mother of the world.' },
        },
        {
          n: 28,
          text: 'शुक्रवार का दिवस सुहावन ।\nजो व्रत करे तुम्हारा पावन ॥',
          meaning: { en: 'The auspicious day is Friday; whoever keeps your fast with purity,' },
        },
        {
          n: 29,
          text: 'गुड छोले का भोग लगावै ।\nकथा तुम्हारी सुने सुनावै ॥',
          meaning: { en: 'offers gram and jaggery, and tells or hears your story,' },
        },
        {
          n: 30,
          text: 'विधिवत पूजा करे तुम्हारी ।\nफिर प्रसाद पावे शुभकारी ॥',
          meaning: { en: 'worships you by the rules and then takes the blessed prasada,' },
        },
        {
          n: 31,
          text: 'शक्ति-सामरथ हो जो धनको ।\nदान-दक्षिणा दे विप्रन को ॥',
          meaning: { en: 'and, as his means allow, gives gifts and fees to the Brahmins,' },
        },
        {
          n: 32,
          text: 'वे जगती के नर औ नारी ।\nमनवांछित फल पावें भारी ॥',
          meaning: { en: 'those men and women of the world get the fruit they wished, in plenty.' },
        },
        {
          n: 33,
          text: 'जो जन शरण तुम्हारी जावे ।\nसो निश्चय भव से तर जावे ॥',
          meaning: { en: 'Whoever takes refuge with you certainly crosses over the world.' },
        },
        {
          n: 34,
          text: 'तुम्हरो ध्यान कुमारी ध्यावे ।\nनिश्चय मनवांछित वर पावै ॥',
          meaning: { en: 'The maiden who meditates on you surely gets the husband of her choice.' },
        },
        {
          n: 35,
          text: 'सधवा पूजा करे तुम्हारी ।\nअमर सुहागिन हो वह नारी ॥',
          meaning: { en: 'A married woman who worships you becomes ever-fortunate.' },
        },
        {
          n: 36,
          text: 'विधवा धर के ध्यान तुम्हारा ।\nभवसागर से उतरे पारा ॥',
          meaning: { en: 'A widow who holds you in meditation crosses the ocean of rebirth.' },
        },
        {
          n: 37,
          text: 'जयति जयति जय संकट हरणी ।\nविघ्न विनाशन मंगल करनी ॥',
          meaning: { en: 'Victory, victory, remover of trouble, destroyer of obstacles, maker of blessings.' },
        },
        {
          n: 38,
          text: 'हम पर संकट है अति भारी ।\nवेगि खबर लो मात हमारी ॥',
          meaning: { en: 'Great trouble is upon us; mother, take quick notice of us.' },
        },
        {
          n: 39,
          text: 'निशिदिन ध्यान तुम्हारो ध्याता ।\nदेह भक्ति वर हम को माता ॥',
          meaning: { en: 'Day and night we meditate on you; give us the gift of devotion.' },
        },
        {
          n: 40,
          text: 'यह चालीसा जो नित गावे ।\nसो भवसागर से तर जावे ॥',
          meaning: { en: 'Whoever sings this chalisa every day crosses the ocean of rebirth.' },
        },
      ],
    },
    {
      title: 'दोहा',
      titleEn: 'Closing doha',
      verses: [
        {
          text: 'संतोषी मां के सदा, बंदहूँ पग निश वास ।\nपूर्ण मनोरथ हो सकल, मात हरौ भव त्रास ॥',
          meaning: { en: 'Always I bow at Santoshi Mata\'s feet and stay there; fulfil all my wishes, mother, and take away the fear of rebirth.' },
        },
      ],
    },
  ],
};
