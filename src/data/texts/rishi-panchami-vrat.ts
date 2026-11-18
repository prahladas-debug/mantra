/**
 * Ṛṣi Pañcamī vrata for the seven sages: the outline of the puja and the kathā of Uttaṅka's daughter, in Hindi.
 * Collated Nov 2026 from typed web copies; not proofread against a single printed booklet.
 *
 * WITNESSES
 *   J  aajtak.in, "ऋषि पंचमी व्रत कथा (Rishi Panchami Vrat Katha)". Base (the fullest: Uttaṅka of Vidarbha, his wife Suśīlā, the daughter's widowhood, the
 *      hut on the Ganges, the worms, the sage's vision, Suśīlā's question, the sage's account of the vrata and the arghya, the daughter's vrata).
 *   B  bhaktibharat.com, "ऋषि पंचमी व्रत कथा (Rishi Panchami Vrat Katha)" (the same story, shorter, without the account of the vrata; same wording
 *      for the vision and the cure).
 *   N  navbharatlive.com, "Rishi Panchami Vrat Katha: एक गलती की वजह से बेटी के शरीर पर पड़ गए थे कीड़े" (15 Sep 2026): the same plot in brief.
 *   S  shubhpanchang.com (hi), "सामा पंचमी / ऋषि पंचमी": the same plot in brief, and the puja customs (bath before sunrise in a river or pond, images or
 *      pictures of the seven sages, no grain, vegetables or salt on the fast day, feeding brahmins and giving gifts at its end).
 *
 * CHOICES. J, B, N and S agree on the plot. J is followed paragraph by paragraph, with B's shorter wording where J repeats itself. J's account of
 * the vrata (bath in a pond, the pavilion, the seven sages, five-fold nectar, sandal, camphor, flowers, incense and lamp, the uncut cloth thread, fruits and
 * naivedya, arghya with the names Kaśyapa, Atri, Bharadvāja, Viśvāmitra, Gautama, Jamadagni and Vasiṣṭha, the vegetable meal) is kept as printed;
 * the arghya prayer and the cloth-thread rest on J alone, and S differs on the food (no vegetables or salt), so these are marked as uncertain. J
 * and B print the old rule of the first three days of a woman's period in the same wording; it is rendered without comment. No mantra
 * is printed. Spelling is lightly normalised (no nukta; standard anusvāra). Meanings are original.
 */
import type { Mantra } from '../types';

export const rishiPanchamiVrat: Mantra = {
  id: 'rishi-panchami-vrat',
  title: 'ऋषि पंचमी व्रत कथा',
  titleEn: 'Rishi Panchami Vrat Katha',
  category: 'puja',
  order: 76,
  deity: 'Saptarṣi',
  source: 'North Indian vrata-kathā for Ṛṣi Pañcamī (Bhādrapada śukla pañcamī), in honour of the seven sages (Saptarṣi); popular printed and web copies of the kathā of Uttaṅka (from the Bhaviṣyottara Purāṇa tradition)',
  summary:
    'The fast of the seven sages on the bright fifth of Bhadrapada: a brief outline and the katha of the Brahmin Uttanka of Vidarbha, whose widowed daughter\'s body filled with worms, the sage\'s vision of its cause in her earlier birth, and the cure of her sorrow by keeping the Rishi Panchami fast.',
  difficulty: 'easy',
  completeness: 'partial',
  contentNote:
    'The puja is given only as the outline the katha itself describes (a bath in a river or pond, the seven sages set up in a pavilion, the five-fold nectar bath, offerings, arghya to the seven names, a meal of vegetables); regional and family rules differ, and the copies disagree on the food of the fast. The katha speaks, in the language of the old texts, of the days of a woman\'s monthly period; it is rendered here as written, without comment. The udyapana and the longer Bhavishyottara Purana account are not included.',
  sections: [
    {
      title: 'व्रत का विधान',
      titleEn: 'The fast and its outline',
      note: 'General practice only; copies disagree on the food of the fast.',
      verses: [
        {
          text: 'ऋषि पंचमी का व्रत भाद्रपद शुक्ल पंचमी को किया जाता है और इसमें सप्तऋषियों की पूजा होती है। इसे जाने-अनजाने में हुई भूलों के प्रायश्चित और शुद्धि का व्रत माना जाता है, जिससे मन और शरीर की शुद्धि और सुख-सौभाग्य मिलता है।',
          meaning: { en: 'The Rishi Panchami fast is kept on the bright fifth of Bhadrapada and in it the seven sages are worshipped. It is held to be a fast of atonement and purification for faults committed knowingly or unknowingly, by which purity of mind and body and good fortune are gained.' },
        },
        {
          text: 'व्रती स्त्रियाँ सूर्योदय से पहले किसी नदी या जलाशय में स्नान करती हैं और सप्तऋषियों की प्रतिमा या चित्र स्थापित करके पूजा करती हैं। कुछ प्रतियों के अनुसार इस दिन अनाज, सब्जी और नमक नहीं खाया जाता, कुछ में शाक का भोजन बताया गया है, और व्रत के अन्त में ब्राह्मणों को भोजन कराकर दान दिया जाता है।',
          meaning: { en: 'The women keeping the fast bathe before sunrise in a river or a water-body and worship, setting up images or pictures of the seven sages. According to some copies no grain, vegetables or salt are eaten on this day, while others prescribe a meal of vegetables, and at the end of the fast brahmins are fed and gifts are given.' },
        },
      ],
    },
    {
      title: 'ऋषि पंचमी व्रत कथा',
      titleEn: 'The katha of Uttanka and his daughter',
      note: 'Heard on the day of the fast.',
      verses: [
        {
          text: 'विदर्भ देश में उत्तंक नामक एक सदाचारी ब्राह्मण रहते थे। उनकी पत्नी सुशीला पतिव्रता स्त्री थी। उनके एक पुत्र और एक पुत्री थी। कन्या विवाह योग्य हुई तो ब्राह्मण ने उसका विवाह कुल की रीति के अनुसार एक श्रेष्ठ परिवार में कर दिया। परन्तु दैवयोग से कुछ दिनों बाद ही वह विधवा हो गई।',
          meaning: { en: 'In the country of Vidarbha lived a virtuous Brahmin named Uttanka. His wife Sushila was a devoted wife. They had a son and a daughter. When the girl came of age the Brahmin married her, according to the custom of the family, into a good family. But by fate, after a few days she became a widow.' },
        },
        {
          text: 'वैधव्य का दुःख पाकर वह पतिव्रत धर्म का पालन करती हुई पिता के घर रहने लगी। बेटी की पीडा से उत्तंक का हृदय बहुत व्यथित था, इसलिए वे पुत्र को घर आदि सौंपकर स्वयं पत्नी और पुत्री सहित गंगा के पावन तट पर कुटिया बनाकर रहने लगे।',
          meaning: { en: 'Having suffered widowhood she lived in her father\'s house, keeping the duty of a faithful wife. Uttanka\'s heart was deeply pained by his daughter\'s suffering, so, handing the house and the rest to his son, he himself with his wife and daughter made a hut on the holy bank of the Ganges and began to live there.' },
        },
        {
          text: 'एक दिन ब्राह्मण कन्या सो रही थी कि उसका शरीर कीडों से भर गया। कन्या ने यह बात अपनी माँ से कही। माँ ने पति को बताते हुए पूछा कि हे प्राणनाथ, मेरी साध्वी कन्या की यह गति होने का क्या कारण है, उसके जीवन में इतना दुःख क्यों लिखा है।',
          meaning: { en: 'One day the Brahmin\'s daughter was sleeping when her body became filled with worms. The girl told this to her mother. The mother told her husband and asked, "Dear lord, what is the reason that my virtuous daughter has come to this state? Why is so much sorrow written in her life?"' },
        },
        {
          text: 'उत्तंक जी ने समाधि द्वारा इस घटना का कारण जानकर बताया कि पूर्व जन्म में भी यह कन्या ब्राह्मणी ही थी। इसने रजस्वला होते ही बर्तन छू दिए थे और सखियों की देखा-देखी भाद्रपद शुक्ल पंचमी का ऋषि पंचमी व्रत भी नहीं किया था। इसीलिए इसके शरीर में कीडे पड गए हैं।',
          meaning: { en: 'By meditative trance Uttanka learned the cause of this event and said, "In the previous birth too this girl was a Brahmin woman. She touched vessels as soon as her monthly period began, and following her friends she did not keep the Rishi Panchami fast on the bright fifth of Bhadrapada. That is why worms have fallen on her body."' },
        },
        {
          text: 'उत्तंक जी ने आगे कहा कि धर्म-शास्त्रों की मान्यता है कि रजस्वला काल में स्त्री पहले दिन चाण्डाली, दूसरे दिन ब्रह्मघातिनी और तीसरे दिन रजकी, अर्थात् धोबिन के समान मानी जाती है, और चौथे दिन स्नान करके शुद्ध होती है। पिछले जन्म में इसने सखियों के प्रभाव में आकर ऋषि पंचमी के व्रत-उत्सव का अनादर किया था।',
          meaning: { en: 'Uttanka went on, "The belief of the dharma-shastras is that in the period of the monthly course a woman is counted on the first day like a chandali, on the second like a slayer of a brahmin, on the third like a washerwoman, and on the fourth day she becomes pure by bathing. In the earlier birth, under the influence of her friends, she showed disrespect to the Rishi Panchami fast and festival."' },
        },
        {
          text: 'ऋषि ने कहा कि उसने पिछले जन्म में ऋषि पंचमी के उत्सव का जो दर्शन किया था उसी से वह इस जन्म में भी ब्राह्मण कुल में जन्मी, पर व्रत का अपमान करने से उसकी देह कीडों से भर गई। यही उसके पाप और दण्ड का मूल कारण है।',
          meaning: { en: 'The sage said, "By the sight she had of the Rishi Panchami festival in the earlier birth she was born in a Brahmin family in this birth too, but by insulting the fast her body has filled with worms. This is the root of her sin and punishment."' },
        },
        {
          text: 'पुत्री के पूर्व जन्म की बात जानकर सुशीला ने कहा कि हे नाथ, जिस ऋषि पंचमी व्रत के दर्शन मात्र से आप जैसे ब्रह्मतेज वाले ब्राह्मण के कुल में इसका जन्म हुआ और उसी के अनादर से इसकी देह कृमियों से भर गई, कृपा करके उस अद्भुत व्रत का वर्णन कीजिए। ऋषि बोले कि हे सुशीले, मैं जिस सर्वोत्तम व्रत का वर्णन करता हूँ वह इस प्रकार के सब पापों से मुक्ति देता है।',
          meaning: { en: 'Learning of her daughter\'s earlier birth, Sushila said, "O lord, by the mere sight of the Rishi Panchami fast she was born in the family of a Brahmin of brahmic splendour like you, and by disrespect to the same her body has filled with worms; please describe that wonderful fast." The sage said, "O Sushila, the best fast I describe frees from all such sins."' },
        },
        {
          text: 'उन्होंने कहा कि इस व्रत का पालन करने से आधिभौतिक, आधिदैविक और आध्यात्मिक तीनों प्रकार के दुःखों से छुटकारा मिलता है, और यह व्रत स्त्रियों को सुख और सौभाग्य देता है। भाद्रपद शुक्ल पंचमी को किसी नदी या सरोवर में स्नान करके व्रत ग्रहण करना चाहिए।',
          meaning: { en: 'He said, "By keeping this fast one is freed from all three kinds of sorrow, of the body, of the gods and of the spirit, and this fast gives women happiness and good fortune. On the bright fifth of Bhadrapada one should bathe in a river or a pond and take up the fast."' },
        },
        {
          text: 'इसके बाद मण्डप में सप्तऋषियों की स्थापना करनी चाहिए और उन्हें दूध आदि पंचामृत से स्नान कराना चाहिए। फिर सुगन्धित चन्दन, कपूर और फूलों से उनका शृंगार करके धूप-दीप से विधिवत् पूजन करें। पूजा के समय ऋषियों को बिना सिला हुआ अखण्ड वस्त्र, जनेऊ के रूप में, भी चढाना चाहिए।',
          meaning: { en: 'After this the seven sages should be installed in a pavilion and bathed with the five-fold nectar of milk and so on. Then adorn them with fragrant sandal, camphor and flowers, and worship them by rule with incense and lamps. At the time of worship an uncut piece of cloth, as a sacred thread, should also be offered to the sages.' },
        },
        {
          text: 'फिर तरह-तरह के फलों और नैवेद्य के साथ अर्घ्य देना चाहिए। अर्घ्य देते समय मन में यह प्रार्थना करें कि कश्यप, अत्रि, भारद्वाज, विश्वामित्र, गौतम, जमदग्नि और वसिष्ठ, ये सब मेरे दिए हुए अर्घ्य-जल को स्वीकार करें और इससे प्रसन्न हों। व्रत करने वाली स्त्रियों को यह कथा सुननी चाहिए और व्रत में शाक का भोजन करना चाहिए।',
          meaning: { en: 'Then arghya should be given with various fruits and naivedya. While giving arghya pray in the mind: "Kashyapa, Atri, Bharadvaja, Vishvamitra, Gautama, Jamadagni and Vasishtha, may all of you accept the arghya water I give, and be pleased by it." The women keeping the fast must hear this katha and take a meal of vegetables during the fast.' },
        },
        {
          text: 'जो स्त्री इस विधि से व्रत करती है वह सदा सुखी, रूपवती और पुत्र-पौत्रों से सम्पन्न रहती है, और जो श्रद्धा से इस व्रत का अनुष्ठान करती है वह इस लोक में सब सुख भोगती है।',
          meaning: { en: 'The woman who keeps the fast in this way is always happy, beautiful and rich in sons and grandsons, and she who performs this fast with faith enjoys all kinds of happiness in this world.' },
        },
        {
          text: 'इसके बाद उत्तंक जी ने कहा कि यदि कन्या अब भी शुद्ध मन से ऋषि पंचमी का व्रत करे तो इसके सब दुःख दूर हो जाएँगे। पिता की आज्ञा से पुत्री ने विधिपूर्वक ऋषि पंचमी का व्रत किया। व्रत के प्रभाव से उसके सब दुःखों का अन्त हो गया और अगले जन्म में उसे अटल सौभाग्य मिला।',
          meaning: { en: 'After this Uttanka said, "If the girl even now keeps the Rishi Panchami fast with a pure mind, all her sorrows will go." At her father\'s command the daughter kept the Rishi Panchami fast by rule. By the power of the fast all her sorrows ended, and in the next birth she gained unshakable good fortune.' },
        },
      ],
    },
  ],
};
