/**
 * Vaṭa-Sāvitrī vrata: the outline of the puja and the kathā of Sāvitrī and Satyavān, in Hindi.
 * Collated Nov 2026 from typed web copies; not proofread against a single printed booklet.
 *
 * WITNESSES
 *   B  bhaktibharat.com, "वट सावित्री व्रत कथा (Vat Savitri Vrat Katha)". Base (Aśvapati of "Bhadra" country, the lakh of oblations, the goddess Sāvitrī's
 *      boon, Dyumatsena of Śālva, Nārada's warning, the vow of three days, the head-ache under the banyan, Yama, three boons).
 *   J  aajtak.in, "वट सावित्री व्रत कथा" (the same story; Aśvapati of "Madra" country; Sāvitrī asks first for her in-laws' sight, then for a hundred sons
 *      of Satyavān); with a puja list (banyan twig, Sāvitrī-Satyavān image, copper pot, Ganges water, roli, soaked gram, jaggery, sweets, lamp)
 *      and a puja outline (sixteen adornments, resolve at the banyan, water, roli, rice, flowers and fruit, raw thread round the tree, katha, ārtī).
 *   N  navbharatlive.com, "Vat Savitri Vrat Katha" (the same plot; the boons: the sight and long life of the blind in-laws, Dyumatsena's lost kingdom,
 *      "a mother of a hundred sons").
 *   P  patrika.com, "इसलिए रखा जाता है वट सावित्री व्रत, पढ़ें पूरी कथा" (the same plot; three boons: the sight of the in-laws, the lost kingdom, a hundred
 *      sons; the body of Satyavān on the banyan's root, Yama going south).
 *
 * CHOICES. B, J, N and P agree on the plot and on the three boons (sight of the blind in-laws, the kingdom, a hundred sons). B is followed
 * paragraph by paragraph. B says "भद्र देश", J "मद्र देश" (Madra, the Mahābhārata's country); the name of the country is therefore left out. The
 * reply of Sāvitrī to her father ("आर्य कन्याएँ एक ही बार वरण करती हैं…") is B's; J and N give the same sense in other words. The third boon is
 * "a hundred children and good fortune" in B, "a hundred sons" in J, N and P; B is kept. N adds long life to the first boon; B's wording is used. The
 * puja outline rests on J alone (with B's closing sentence on worshipping the in-laws first) and is therefore uncertain in its details. Spelling is
 * lightly normalised (no nukta; standard anusvāra). Meanings are original.
 */
import type { Mantra } from '../types';

export const vatSavitriVrat: Mantra = {
  id: 'vat-savitri-vrat',
  title: 'वट सावित्री व्रत कथा',
  titleEn: 'Vat Savitri Vrat Katha',
  category: 'puja',
  order: 74,
  deity: 'Sāvitrī',
  source: 'North Indian vrata-kathā for Vaṭa-Sāvitrī (Jyeṣṭha amāvāsyā), the story of Sāvitrī and Satyavān from the Mahābhārata (Vana Parva, Pativratā-māhātmya); popular printed and web copies',
  summary:
    'The banyan-tree fast of married women: a brief outline of the puja and the katha of Savitri, daughter of King Ashvapati, who chose the short-lived Satyavan, followed Yama when he took her husband\'s life, won three boons by her words and brought him back to life under the same banyan tree.',
  difficulty: 'easy',
  completeness: 'partial',
  contentNote:
    'The puja is given only as a brief outline of general practice (sixteen adornments, worship of the banyan tree with water, roli, rice and flowers, winding raw thread round the tree, hearing the katha); regional and family rules differ, and some regions keep the fast on the full moon of Jyeshtha instead. The longer Mahabharata account (the sage\'s four boons, the king\'s hundred sons, the marriage conversation with Narada) and the Savitri aarti are not included.',
  sections: [
    {
      title: 'व्रत का विधान',
      titleEn: 'The fast and the puja in outline',
      note: 'General practice only; families follow their own tradition.',
      verses: [
        {
          text: 'वट सावित्री का व्रत विवाहित स्त्रियाँ पति की दीर्घायु और सुख-समृद्धि के लिए रखती हैं। यह ज्येष्ठ मास की अमावस्या को किया जाता है और इस दिन बरगद के वृक्ष की पूजा होती है। पतिव्रता सावित्री की तरह पहले अपने सास-ससुर का उचित पूजन करके ही अन्य विधियाँ आरम्भ की जाती हैं।',
          meaning: { en: 'The Vat Savitri fast is kept by married women for their husbands\' long life and prosperity. It is done on the new moon of the month of Jyeshtha, and on this day the banyan tree is worshipped. Like the devoted Savitri, one first worships one\'s mother-in-law and father-in-law properly and only then begins the other rites.' },
        },
        {
          text: 'पूजा के लिए बरगद की डाली या वृक्ष, सावित्री-सत्यवान की मूर्ति, ताँबे का लोटा, गंगाजल, रोली, सिन्दूर, भीगे चने, गुड, मिठाई, फल, घी का दीपक, धूप और पान-सुपारी जैसी सामग्री ली जाती है।',
          meaning: { en: 'For the worship one takes a banyan branch or tree, an image of Savitri and Satyavan, a copper pot, Ganges water, roli, sindur, soaked gram, jaggery, sweets, fruit, a ghee lamp, incense, and betel leaf and nut.' },
        },
        {
          text: 'सुबह स्नान करके सोलह शृंगार करें और वट वृक्ष के पास जाकर पूजा का संकल्प लें। जल, रोली, अक्षत, फूल और फल चढाएँ।',
          meaning: { en: 'Bathe in the morning, put on the sixteen adornments, go to the banyan tree and take the resolve for the worship. Offer water, roli, rice grains, flowers and fruit.' },
        },
        {
          text: 'वृक्ष पर कच्चा सूत लपेटकर परिक्रमा करें और व्रत कथा सुनें। फिर आरती करें, प्रसाद बाँटें और बडों का आशीर्वाद लें।',
          meaning: { en: 'Wind raw thread round the tree, go round it and hear the vrata katha. Then perform the arati, distribute the prasada and take the blessing of elders.' },
        },
      ],
    },
    {
      title: 'वट सावित्री व्रत कथा',
      titleEn: 'The katha of Savitri and Satyavan',
      note: 'Heard at the banyan tree on the day of the fast.',
      verses: [
        {
          text: 'प्राचीन काल में एक राजा थे जिनका नाम अश्वपति था। उनके कोई सन्तान नहीं थी। सन्तान की प्राप्ति के लिए उन्होंने मन्त्रोच्चार के साथ प्रतिदिन एक लाख आहुतियाँ दीं और यह क्रम अठारह वर्ष तक चलता रहा।',
          meaning: { en: 'In ancient times there was a king named Ashvapati. He had no child. For the sake of a child he made a hundred thousand oblations every day with recitation of mantras, and this continued for eighteen years.' },
        },
        {
          text: 'इसके बाद सावित्री देवी ने प्रकट होकर वर दिया कि राजन्, तुझे एक तेजस्वी कन्या होगी। सावित्री देवी की कृपा से जन्म लेने के कारण उस कन्या का नाम सावित्री रखा गया।',
          meaning: { en: 'After that the goddess Savitri appeared and granted a boon: "King, you will have a radiant daughter." Because she was born by the goddess Savitri\'s grace, the girl was named Savitri.' },
        },
        {
          text: 'कन्या बडी होकर बहुत रूपवती हुई, पर योग्य वर न मिलने से उसके पिता दुःखी रहते थे। उन्होंने कन्या को स्वयं वर खोजने भेजा। सावित्री तपोवन में घूमने लगी, जहाँ साल्व देश के राजा द्युमत्सेन रहते थे, क्योंकि किसी ने उनका राज्य छीन लिया था। उनके पुत्र सत्यवान को देखकर सावित्री ने उन्हें पति के रूप में चुन लिया।',
          meaning: { en: 'The girl grew up very beautiful, but her father was sad that no suitable groom was found. He sent his daughter to find a husband herself. Savitri wandered in a penance-forest where King Dyumatsena of Shalva lived, because someone had seized his kingdom. Seeing his son Satyavan, Savitri chose him as her husband.' },
        },
        {
          text: 'जब ऋषिराज नारद को यह पता चला तो वे राजा अश्वपति के पास गए और बोले कि राजन्, यह आप क्या कर रहे हैं? सत्यवान गुणवान, धर्मात्मा और बलवान तो हैं, पर उनकी आयु बहुत छोटी है; एक वर्ष बाद ही उनकी मृत्यु हो जाएगी।',
          meaning: { en: 'When the royal sage Narada learned of this he went to King Ashvapati and said, "King, what are you doing? Satyavan is virtuous, righteous and strong, but his life is very short; after one year he will die."' },
        },
        {
          text: 'नारद की बात सुनकर राजा अश्वपति गहरी चिन्ता में डूब गए। सावित्री ने कारण पूछा तो उन्होंने कहा कि पुत्री, तुमने जिसे वर चुना है वह अल्पायु है, तुम्हें किसी और को जीवन-साथी बनाना चाहिए। सावित्री ने कहा कि पिताजी, आर्य कन्याएँ अपने पति का एक ही बार वरण करती हैं, राजा एक ही बार आज्ञा देता है, पण्डित एक ही बार प्रतिज्ञा करते हैं और कन्यादान भी एक ही बार होता है।',
          meaning: { en: 'Hearing Narada, King Ashvapati sank in deep worry. When Savitri asked the reason he said, "Daughter, the one you have chosen as husband is short-lived; you should take someone else as your life companion." Savitri said, "Father, daughters of noble families choose their husband once only; a king gives his command once only; learned men make their vow once only; and the gift of a daughter is made once only."' },
        },
        {
          text: 'सावित्री हठ करने लगी कि मैं सत्यवान से ही विवाह करूँगी, और राजा अश्वपति ने सावित्री का विवाह सत्यवान से कर दिया। ससुराल पहुँचते ही सावित्री सास-ससुर की सेवा में लग गई और समय बीतता गया।',
          meaning: { en: 'Savitri insisted, "I shall marry Satyavan alone," and King Ashvapati married Savitri to Satyavan. On reaching her in-laws\' home Savitri at once began to serve her mother-in-law and father-in-law, and time went by.' },
        },
        {
          text: 'नारद मुनि ने सावित्री को पहले ही सत्यवान की मृत्यु का दिन बता दिया था। वह दिन जैसे-जैसे पास आने लगा, सावित्री अधीर होने लगी। उसने तीन दिन पहले से उपवास आरम्भ कर दिया और नारद के बताए नियत दिन पर पितरों का पूजन किया।',
          meaning: { en: 'Narada had already told Savitri the day of Satyavan\'s death. As that day drew nearer, Savitri grew restless. She began a fast three days before, and on the appointed day told by Narada she worshipped the ancestors.' },
        },
        {
          text: 'हर दिन की तरह सत्यवान उस दिन भी लकडी काटने जंगल गए और सावित्री भी साथ गईं। जंगल में सत्यवान लकडी काटने के लिए एक पेड पर चढे, तभी उनके सिर में तेज दर्द होने लगा और वे व्याकुल होकर नीचे उतर आए। सावित्री अपना भविष्य समझ गई। वह सत्यवान का सिर गोद में रखकर सहलाने लगी।',
          meaning: { en: 'As on every day Satyavan went that day too to the forest to cut wood, and Savitri went with him. In the forest Satyavan climbed a tree to cut wood, and just then a sharp pain began in his head, and distressed he came down. Savitri understood her future. She laid Satyavan\'s head in her lap and began to stroke it.' },
        },
        {
          text: 'तभी वहाँ यमराज आते दिखे और सत्यवान को अपने साथ ले जाने लगे। सावित्री भी उनके पीछे-पीछे चल पडी। यमराज ने उसे समझाया कि यही विधि का विधान है, पर सावित्री नहीं मानी। उसकी निष्ठा और पतिपरायणता देखकर यमराज ने कहा कि हे देवी, तुम धन्य हो, तुम मुझसे कोई भी वरदान माँगो।',
          meaning: { en: 'Just then Yamaraja was seen coming there, and began to take Satyavan away with him. Savitri too followed behind him. Yamaraja tried to make her understand that this is the law of destiny, but Savitri would not agree. Seeing her faithfulness and devotion to her husband Yamaraja said, "O lady, you are blessed; ask me for any boon."' },
        },
        {
          text: 'पहले वर में सावित्री ने कहा कि मेरे सास-ससुर वनवासी और अन्धे हैं, उन्हें दिव्य ज्योति दीजिए। यमराज ने कहा कि ऐसा ही होगा, अब लौट जाओ। पर सावित्री अपने पति के पीछे-पीछे चलती रही और बोली कि भगवन्, पति के पीछे चलने में मुझे कोई कष्ट नहीं, यह मेरा कर्तव्य है। तब यमराज ने उसे दूसरा वर माँगने को कहा।',
          meaning: { en: 'For the first boon Savitri said, "My mother-in-law and father-in-law live in the forest and are blind; give them divine sight." Yamaraja said, "So be it; now go back." But Savitri went on following her husband and said, "Lord, there is no hardship for me in following my husband; it is my duty." Then Yamaraja told her to ask a second boon.' },
        },
        {
          text: 'दूसरे वर में सावित्री ने कहा कि हमारे ससुर का राज्य छिन गया है, उसे फिर से दिलवा दीजिए। यमराज ने यह वर भी दे दिया और कहा कि अब तुम लौट जाओ, पर सावित्री फिर भी पीछे-पीछे चलती रही। तब यमराज ने उसे तीसरा वर माँगने को कहा।',
          meaning: { en: 'For the second boon Savitri said, "My father-in-law\'s kingdom has been taken away; please have it restored." Yamaraja gave this boon too and said, "Now you go back," but Savitri still kept following. Then Yamaraja told her to ask a third boon.' },
        },
        {
          text: 'तीसरे वर में सावित्री ने सौ सन्तानों और सौभाग्य का वरदान माँगा, और यमराज ने वह भी दे दिया। तब सावित्री ने कहा कि प्रभु, मैं पतिव्रता पत्नी हूँ और आपने मुझे पुत्रवती होने का आशीर्वाद दिया है। यह सुनकर यमराज को सत्यवान के प्राण छोडने पडे।',
          meaning: { en: 'For the third boon Savitri asked for a hundred children and good fortune, and Yamaraja gave that too. Then Savitri said, "Lord, I am a devoted wife and you have blessed me to be the mother of sons." Hearing this, Yamaraja had to release Satyavan\'s life.' },
        },
        {
          text: 'यमराज अन्तर्धान हो गए और सावित्री उसी वट वृक्ष के पास लौट आई जहाँ उसके पति का शरीर पडा था। सत्यवान जीवित हो उठे और दोनों खुशी-खुशी अपने राज्य की ओर चल पडे। घर पहुँचकर उन्होंने देखा कि माता-पिता को दिव्य ज्योति मिल गई है, और सावित्री-सत्यवान चिरकाल तक राज्य-सुख भोगते रहे।',
          meaning: { en: 'Yamaraja vanished and Savitri came back to that same banyan tree where her husband\'s body lay. Satyavan came to life, and the two set out gladly towards their kingdom. Reaching home they saw that the parents had received divine sight, and Savitri and Satyavan enjoyed the happiness of the kingdom for a long time.' },
        },
        {
          text: 'इसलिए पतिव्रता सावित्री के अनुसार पहले सास-ससुर का पूजन करके अन्य विधियाँ आरम्भ करें। वट सावित्री व्रत करने और यह कथा सुनने से व्रती के वैवाहिक जीवन या जीवन-साथी की आयु पर कोई संकट आया हो तो वह टल जाता है।',
          meaning: { en: 'Therefore, like the devoted Savitri, begin the other rites after worshipping the in-laws. By keeping the Vat Savitri fast and hearing this katha, any danger that may have come to the keeper\'s married life or to the life of her partner is averted.' },
        },
      ],
    },
  ],
};
