/**
 * Śrī Śani Cālīsā (Śanideva), in Hindi/Awadhi, Devanagari. The last chaupai names the poet as "Rāmasundara" (dāsa).
 *
 * Collated Nov 2026 against three typed copies of the widely printed forty-verse text:
 *   B  bhaktibharat.com (amp), "Shani Chalisa" (base);   H  hindutone.com, "Shani Chalisa";
 *   L  shlokam.org, "Shani Chalisa" (the Devanagari lines; its typing has many slips such as "गी", "चाञ्जी", "बढई").
 * Readings chosen against B:
 *   v4 "हिये माल मुक्तन मणि दमके" (H, L "हिये"; B "हिय");  v16 "डरवायो" (H, L; B "डरवाय");
 *   v27 "सुजाना" (H, L; B "सजाना", metre and sense: "wise vehicles");  v29 "सम्पत्ति" (H, L; B "सम्पति");
 *   v35 "स्वर्ण सर्व सुख मंगल भारी" (H, L "सुख"; B repeats "सर्व सर्व");  v26 "देव-लखि विनती" (spacing, B joins it);
 *   v12 "करि डारा", v20 "भूंजी-मीन", v6 "दुख भंजन" (spacing only).
 * Where B and H agree against L the reading is kept: v3 "टेढ़ी", v8 "ह्वैं" (L "है"), v10 "दीन्हयो/लीन्हयो" (L "दीन्हो/लीन्हों"),
 * v11 "मातु जानकी गई चुराई" (L "गी चतुराई"), v30 "सिंह सिद्धकर" (L "गर्दभ"), v35 "भारी" (L "कारी").
 * Other copies are not used: shubhpanchang.com prints a different, much shorter (about 23-couplet) recension; and H lacks the
 * last doha line "पाठ शनिश्चर देव को …", which therefore rests on B and L ("भक्त" B; L "विमल"; B kept).
 * Spelling-only variants (ए/ऐ endings, ण्ड/ंड, छबि/छवि, शनी/शनि) follow B. The comma-separated names in v6-v7 are kept.
 * The forty chaupai are numbered 1-40; the two opening dohas and the closing doha are not. Nukta letters are written
 * without the dot. Meanings are original; no published translation was used.
 */
import type { Mantra } from '../types';

export const shaniChalisa: Mantra = {
  id: 'shani-chalisa',
  title: 'श्री शनि चालीसा',
  titleEn: 'Sri Shani Chalisa',
  category: 'chalisa',
  order: 21,
  deity: 'Śrī Śanideva',
  source: 'Traditional; the last chaupai names Rāmasundara, Hindi/Awadhi',
  summary: 'The forty-verse Hindi hymn to Shani, the son of the Sun: his dark four-armed form, his ten names, and the stories of how his phase tested Rama, Vikrama, Harishchandra, Nala, Shiva, the Pandavas and others. It ends with the effects of his vehicles and feet, and the remedies of recitation, a pipal-tree offering and lamps. Read on Saturdays.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'दोहा',
      titleEn: 'Opening dohas',
      verses: [
        {
          text: 'जय गणेश गिरिजा सुवन, मंगल करण कृपाल ।\nदीनन के दुख दूर करि, कीजै नाथ निहाल ॥',
          meaning: { en: 'Victory to Ganesha, son of Girija, giver of blessings and the merciful one; remove the sorrows of the poor and make them happy, Lord.' },
        },
        {
          text: 'जय जय श्री शनिदेव प्रभु, सुनहु विनय महाराज ।\nकरहु कृपा हे रवि तनय, राखहु जन की लाज ॥',
          meaning: { en: 'Victory, victory to Lord Shanidev; hear my humble plea, great king; be gracious, son of the Sun, and keep your servant\'s honour.' },
        },
      ],
    },
    {
      title: 'चौपाई',
      titleEn: 'Chaupai',
      note: 'The forty verses; the last names the poet, Ramasundar.',
      verses: [
        {
          n: 1,
          text: 'जयति जयति शनिदेव दयाला ।\nकरत सदा भक्तन प्रतिपाला ॥',
          meaning: { en: 'Victory, victory to merciful Shanidev, who always cherishes his devotees.' },
        },
        {
          n: 2,
          text: 'चारि भुजा तनु श्याम विराजै ।\nमाथे रतन मुकुट छबि छाजै ॥',
          meaning: { en: 'Four-armed, dark of body, you shine, and a lovely jewelled crown sits on your forehead.' },
        },
        {
          n: 3,
          text: 'परम विशाल मनोहर भाला ।\nटेढी दृष्टि भृकुटि विकराला ॥',
          meaning: { en: 'A very broad, handsome forehead, a slanting gaze and fearsome brows.' },
        },
        {
          n: 4,
          text: 'कुण्डल श्रवण चमाचम चमके ।\nहिये माल मुक्तन मणि दमके ॥',
          meaning: { en: 'Earrings gleam brightly at your ears, and jewelled pearl garlands sparkle on your chest.' },
        },
        {
          n: 5,
          text: 'कर में गदा त्रिशूल कुठारा ।\nपल बिच करैं अरिहिं संहारा ॥',
          meaning: { en: 'In your hands are a mace, trident and axe, with which you destroy foes in a moment.' },
        },
        {
          n: 6,
          text: 'पिंगल, कृष्णों, छाया नन्दन ।\nयम, कोणस्थ, रौद्र, दुख भंजन ॥',
          meaning: { en: 'Your names are Pingala, Krishna, Chhaya\'s son, Yama, Konastha, Raudra, and remover of sorrow.' },
        },
        {
          n: 7,
          text: 'सौरी, मन्द, शनी, दश नामा ।\nभानु पुत्र पूजहिं सब कामा ॥',
          meaning: { en: 'Also Sauri and Manda, and Shani: these are the ten names; as the Sun\'s son you are worshipped for every purpose.' },
        },
        {
          n: 8,
          text: 'जा पर प्रभु प्रसन्न ह्वैं जाहीं ।\nरंकहुँ राव करैं क्षण माहीं ॥',
          meaning: { en: 'Those with whom you are pleased, you make kings from beggars in a moment.' },
        },
        {
          n: 9,
          text: 'पर्वतहू तृण होई निहारत ।\nतृणहू को पर्वत करि डारत ॥',
          meaning: { en: 'At your glance a mountain becomes a blade of grass, and a blade of grass becomes a mountain.' },
        },
        {
          n: 10,
          text: 'राज मिलत बन रामहिं दीन्हयो ।\nकैकेइहुँ की मति हरि लीन्हयो ॥',
          meaning: { en: 'Rama, who was to get a kingdom, was given the forest; you seized even Kaikeyi\'s judgement.' },
        },
        {
          n: 11,
          text: 'बनहूँ में मृग कपट दिखाई ।\nमातु जानकी गई चुराई ॥',
          meaning: { en: 'In the forest a deer showed its trick, and Mother Janaki was carried off.' },
        },
        {
          n: 12,
          text: 'लखनहिं शक्ति विकल करि डारा ।\nमचिगा दल में हाहाकारा ॥',
          meaning: { en: 'Lakshmana was struck down by the spear, and a cry of woe rose in the army.' },
        },
        {
          n: 13,
          text: 'रावण की गतिमति बौराई ।\nरामचन्द्र सों बैर बढाई ॥',
          meaning: { en: 'Ravana\'s mind was bewildered and he increased his enmity with Ramachandra.' },
        },
        {
          n: 14,
          text: 'दियो कीट करि कंचन लंका ।\nबजि बजरंग बीर की डंका ॥',
          meaning: { en: 'The golden Lanka was reduced to ruin, and the drum of the hero Bajrang resounded.' },
        },
        {
          n: 15,
          text: 'नृप विक्रम पर तुहि पगु धारा ।\nचित्र मयूर निगलि गै हारा ॥',
          meaning: { en: 'When your foot fell on King Vikrama, a painted peacock swallowed a necklace.' },
        },
        {
          n: 16,
          text: 'हार नौलखा लाग्यो चोरी ।\nहाथ पैर डरवायो तोरी ॥',
          meaning: { en: 'The necklace was taken as stolen, and his hands and feet were broken off in punishment.' },
        },
        {
          n: 17,
          text: 'भारी दशा निकृष्ट दिखायो ।\nतेलिहिं घर कोल्हू चलवायो ॥',
          meaning: { en: 'You showed him a heavy, bad phase, and an oil-press was set to work at an oilman\'s house.' },
        },
        {
          n: 18,
          text: 'विनय राग दीपक महं कीन्हयों ।\nतब प्रसन्न प्रभु ह्वै सुख दीन्हयों ॥',
          meaning: { en: 'He then sang Raga Dipak in humble prayer, and the Lord was pleased and gave him happiness.' },
        },
        {
          n: 19,
          text: 'हरिश्चन्द्र नृप नारि बिकानी ।\nआपहुं भरे डोम घर पानी ॥',
          meaning: { en: 'King Harishchandra\'s wife was sold, and he himself drew water at a Dom\'s house.' },
        },
        {
          n: 20,
          text: 'तैसे नल पर दशा सिरानी ।\nभूंजी-मीन कूद गई पानी ॥',
          meaning: { en: 'The same phase came upon Nala too; a roasted fish leapt back into the water.' },
        },
        {
          n: 21,
          text: 'श्री शंकरहिं गह्यो जब जाई ।\nपारवती को सती कराई ॥',
          meaning: { en: 'When you seized Shankara, Parvati was caused to become Sati.' },
        },
        {
          n: 22,
          text: 'तनिक विलोकत ही करि रीसा ।\nनभ उडि गयो गौरिसुत सीसा ॥',
          meaning: { en: 'At one slight angry look, the head of Gauri\'s son flew into the sky.' },
        },
        {
          n: 23,
          text: 'पाण्डव पर भै दशा तुम्हारी ।\nबची द्रौपदी होति उघारी ॥',
          meaning: { en: 'Your phase fell on the Pandavas, and Draupadi was almost disrobed but was saved.' },
        },
        {
          n: 24,
          text: 'कौरव के भी गति मति मारयो ।\nयुद्ध महाभारत करि डारयो ॥',
          meaning: { en: 'You struck the Kauravas\' minds too, and the Mahabharata war broke out.' },
        },
        {
          n: 25,
          text: 'रवि कहँ मुख महँ धरि तत्काला ।\nलेकर कूदि परयो पाताला ॥',
          meaning: { en: 'You once took the Sun in your mouth and leapt into the netherworld.' },
        },
        {
          n: 26,
          text: 'शेष देव-लखि विनती लाई ।\nरवि को मुख ते दियो छुडाई ॥',
          meaning: { en: 'Seeing this, the gods begged, and you released the Sun from your mouth.' },
        },
        {
          n: 27,
          text: 'वाहन प्रभु के सात सुजाना ।\nजग दिग्गज गर्दभ मृग स्वाना ॥',
          meaning: { en: 'The Lord has seven wise vehicles: the elephant, horse, donkey, deer, dog,' },
        },
        {
          n: 28,
          text: 'जम्बुक सिंह आदि नख धारी ।\nसो फल ज्योतिष कहत पुकारी ॥',
          meaning: { en: 'jackal and the clawed lion; astrologers proclaim the result of each.' },
        },
        {
          n: 29,
          text: 'गज वाहन लक्ष्मी गृह आवैं ।\nहय ते सुख सम्पत्ति उपजावैं ॥',
          meaning: { en: 'On the elephant, Lakshmi comes to the house; on the horse, comfort and wealth arise.' },
        },
        {
          n: 30,
          text: 'गर्दभ हानि करै बहु काजा ।\nसिंह सिद्धकर राज समाजा ॥',
          meaning: { en: 'The donkey ruins many undertakings; the lion brings success and standing in society.' },
        },
        {
          n: 31,
          text: 'जम्बुक बुद्धि नष्ट कर डारै ।\nमृग दे कष्ट प्राण संहारै ॥',
          meaning: { en: 'The jackal destroys the mind; the deer brings pain and even takes life.' },
        },
        {
          n: 32,
          text: 'जब आवहिं प्रभु स्वान सवारी ।\nचोरी आदि होय डर भारी ॥',
          meaning: { en: 'When the Lord comes riding a dog, there is great fear of theft and the like.' },
        },
        {
          n: 33,
          text: 'तैसहि चारि चरण यह नामा ।\nस्वर्ण लौह चाँदी अरु तामा ॥',
          meaning: { en: 'In the same way he has four feet, named gold, iron, silver and copper.' },
        },
        {
          n: 34,
          text: 'लौह चरण पर जब प्रभु आवैं ।\nधन जन सम्पत्ति नष्ट करावैं ॥',
          meaning: { en: 'When the Lord comes on the iron foot, he causes loss of wealth, people and property.' },
        },
        {
          n: 35,
          text: 'समता ताम्र रजत शुभकारी ।\nस्वर्ण सर्व सुख मंगल भारी ॥',
          meaning: { en: 'Copper and silver are even and auspicious; gold brings every happiness and great well-being.' },
        },
        {
          n: 36,
          text: 'जो यह शनि चरित्र नित गावै ।\nकबहुं न दशा निकृष्ट सतावै ॥',
          meaning: { en: 'Whoever sings this life of Shani daily is never troubled by a bad phase.' },
        },
        {
          n: 37,
          text: 'अद्भुत नाथ दिखावैं लीला ।\nकरैं शत्रु के नशि बलि ढीला ॥',
          meaning: { en: 'The Lord shows wonderful play and loosens the strength of one\'s enemies.' },
        },
        {
          n: 38,
          text: 'जो पण्डित सुयोग्य बुलवाई ।\nविधिवत शनि ग्रह शांति कराई ॥',
          meaning: { en: 'Call a capable priest and have the peace rite for the planet Shani done by the proper rule.' },
        },
        {
          n: 39,
          text: 'पीपल जल शनि दिवस चढावत ।\nदीप दान दै बहु सुख पावत ॥',
          meaning: { en: 'Offer water to the pipal tree on Saturday and give lamp-offerings, and you gain much happiness.' },
        },
        {
          n: 40,
          text: 'कहत राम सुन्दर प्रभु दासा ।\nशनि सुमिरत सुख होत प्रकाशा ॥',
          meaning: { en: 'Says the servant Ramasundar: remembering Shani brings happiness and light.' },
        },
      ],
    },
    {
      title: 'दोहा',
      titleEn: 'Closing doha',
      verses: [
        {
          text: 'पाठ शनिश्चर देव को, की हों भक्त तैयार ।\nकरत पाठ चालीस दिन, हो भवसागर पार ॥',
          meaning: { en: 'I, his devotee, have made this recital ready for Shanishchara; reciting it for forty days takes one across the ocean of worldly life.' },
        },
      ],
    },
  ],
};
