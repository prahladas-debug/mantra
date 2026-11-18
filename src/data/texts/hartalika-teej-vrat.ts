/**
 * Hartalika (Haritalika) Teej vrata: the puja outline and the kathā that Śiva tells Pārvatī, in Hindi (Devanagari).
 * Collated Nov 2026 from typed web copies; not proofread against a single printed booklet.
 *
 * WITNESSES
 *   W  hindi.webdunia.com, "Haritalika Teej Vrat Katha" (Śiva's first-person narration, "हे गौरी!"; twelve years of tapas
 *      with head downward; Nārada, Girirāja, the sakhī, the cave, the sand liṅga, the boon, the return). Base.
 *   T  timesnowhindi.com, "Hartalika Teej Vrat Katha" (the same narration, in other words and slightly shorter).
 *   B  bhaktibharat.com, "Hartalika Teej Vrat Katha" and P prabhatkhabar.com, aajtak.in (3rd person, brief): same sequence
 *      without the dialogues; used to check the order of events.
 *   D  drikpanchang.com/festivals/teej/info/hartalika-puja-vidhi (hi): the vidhi from the Vratarāja; and aajtak.in (2024)
 *      for the sand/clay images, the banana-leaf seat, the offering of sāhāg items and the vigil.
 *
 * CHOICES. W and T agree on every episode (twelve years' tapas, Nārada and Girirāja, the friend's counsel, the cave, the sand
 * liṅga on Bhādrapada śukla tṛtīyā under Hasta, the boon, Girirāja's finding her) and largely in phrase; T abridges the speeches
 * and W, the fuller, is followed throughout. T also gives the austerities in the same order (dry leaves, water in winter,
 * pañcāgni in summer, rain in Śrāvaṇa). The name "हरतालिका" (hṛta + ālikā, "carried off by a friend") is explained by the
 * newspaper pages (prabhatkhabar, navbharatlive) but not by W's kathā, so it is not added. The last paragraph (Śiva's boon to
 * maidens who keep the vrata) is in W only and is kept as the phalaśruti. Spelling lightly normalised (no nukta; वरण, पारण).
 * Meanings are original.
 */
import type { Mantra } from '../types';

export const hartalikaTeejVrat: Mantra = {
  id: 'hartalika-teej-vrat',
  title: 'हरतालिका तीज व्रत कथा',
  titleEn: 'Hartalika Teej Vrat Katha',
  category: 'puja',
  order: 64,
  deity: 'Śrī Pārvatī and Śrī Śiva',
  source: 'North Indian vrata-kathā (Bhādrapada śukla tṛtīyā), told by Śiva to Pārvatī; popular printed and web copies',
  summary:
    'Hartalika Teej, kept on Bhadrapada shukla tritiya: the sand Shiva-Parvati puja, the night vigil, and the katha that Shiva tells Parvati to remind her of her former birth: her years of tapas on the bank of the Ganga, Narada\'s proposal from Vishnu, her friend taking her to the forest, the sand linga and the night of worship, and Shiva\'s appearing.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'व्रत और पूजा का विधान',
      titleEn: 'The vrata and the puja',
      note: 'Bhadrapada shukla tritiya. Kept without food and water by married women and by maidens who wish for a good husband.',
      verses: [
        {
          text: 'हरतालिका तीज का व्रत भाद्रपद शुक्ल तृतीया को किया जाता है। सुहागिन स्त्रियाँ पति की दीर्घायु और सुखी दाम्पत्य के लिए तथा कुँवारी कन्याएँ मनचाहे पति के लिए निर्जल और निराहार व्रत रखती हैं।',
          meaning: { en: 'The Hartalika Teej fast is kept on the third day of the bright half of Bhadrapada. Married women keep it without food or water for their husbands\' long life and a happy married life, and maidens for a husband of their choice.' },
        },
        {
          text: 'इस दिन बालू या रेत से, या काली मिट्टी से, शिव, पार्वती और गणेश की मूर्तियाँ अपने हाथ से बनाई जाती हैं। चौकी पर केले के पत्ते बिछाकर उन पर प्रतिमाएँ स्थापित करें और पूजा-स्थान को फूलों से सजाएँ।',
          meaning: { en: 'On this day images of Shiva, Parvati and Ganesha are made by hand from sand, or from black clay. Spread banana leaves on a low seat, install the images on them, and decorate the place of worship with flowers.' },
        },
        {
          text: 'पूजा सूर्यास्त के बाद प्रदोषकाल में की जाती है; प्रातःकाल भी की जा सकती है। प्रातः तिल और आँवले के चूर्ण से स्नान करके स्वच्छ वस्त्र पहनें, उमा-महेश्वर की प्रसन्नता के लिए व्रत का संकल्प लें, पहले गणेश की पूजा करें, फिर शिव-पार्वती का षोडशोपचार पूजन और पार्वती के अंगों की पूजा करें।',
          meaning: { en: 'The puja is done after sunset, in the pradosha period, and may also be done in the morning. Bathe with sesame and amla powder, put on clean clothes, take the resolve to keep the vrata to please Uma and Maheshvara, worship Ganesha first, then do the sixteen-fold worship of Shiva and Parvati, and the worship of Parvati\'s limbs.' },
        },
        {
          text: 'इस व्रत की मुख्य परम्परा माता पार्वती को सुहाग की सब वस्तुएँ चढाना है। शिव को धोती और अँगोछा चढाया जाता है, जिसे बाद में किसी ब्राह्मण को दान दे देना चाहिए। तीज की कथा सुनें और रात भर जागरण करें।',
          meaning: { en: 'The main tradition of this vrata is to offer Mother Parvati all the articles of a married woman\'s good fortune. A dhoti and a shoulder-cloth are offered to Shiva, and afterwards they should be given to a brahmin. Hear the katha of Teej and keep vigil all night.' },
        },
        {
          text: 'आरती के बाद प्रातःकाल माता पार्वती को सिन्दूर चढाएँ और हलवे का भोग लगाकर व्रत खोलें। कथा के अनुसार पूजा की सब सामग्री नदी में प्रवाहित की जाती है।',
          meaning: { en: 'After the arati, in the morning offer vermilion to Mother Parvati, present halva as the offering, and break the fast. According to the katha all the worship material is let go into the river.' },
        },
      ],
    },
    {
      title: 'हरतालिका तीज व्रत कथा',
      titleEn: 'The katha told by Shiva',
      note: 'Shiva, to remind Parvati of her former birth, tells her what the vrata did for her.',
      verses: [
        {
          text: 'एक बार भगवान शिव ने पार्वती जी को उनके पूर्व जन्म की याद दिलाने के उद्देश्य से इस व्रत के माहात्म्य की कथा कही थी। श्री भोलेशंकर बोले कि हे गौरी! पर्वतराज हिमालय पर स्थित गंगा के तट पर तुमने अपनी बाल्यावस्था में बारह वर्षों तक अधोमुखी होकर घोर तप किया था।',
          meaning: { en: 'Once Lord Shiva told Parvati the glory of this vrata in order to remind her of her former birth. Shri Bholeshankar said: "O Gauri! On the bank of the Ganga on the king of mountains, the Himalaya, in your childhood you practised severe austerity for twelve years with your head downward."' },
        },
        {
          text: 'इतनी अवधि तुमने अन्न न खाकर पेडों के सूखे पत्ते चबाकर बिताई। माघ की विकराल शीतलता में तुमने निरन्तर जल में प्रवेश करके तप किया। वैशाख की जला देने वाली गर्मी में तुमने पंचाग्नि से शरीर को तपाया। श्रावण की मूसलाधार वर्षा में खुले आसमान के नीचे बिना अन्न-जल ग्रहण किए समय बिताया।',
          meaning: { en: '"All that time you ate no grain and passed it chewing dry leaves of trees. In the fierce cold of Magha you entered the water and practised tapas continuously. In the scorching heat of Vaishakha you heated your body with the five fires. In the pouring rain of Shravana you spent the time under the open sky without taking food or water."' },
        },
        {
          text: 'तुम्हारे पिता तुम्हारी कष्टसाध्य तपस्या को देखकर बडे दुःखी होते थे; उन्हें बडा क्लेश होता था। तब एक दिन तुम्हारी तपस्या और पिता के क्लेश को देखकर नारद जी तुम्हारे घर पधारे। तुम्हारे पिता ने हृदय से अतिथि-सत्कार करके उनके आने का कारण पूछा।',
          meaning: { en: '"Your father was very sad to see your hard austerity; it gave him great distress. Then one day, seeing your tapas and your father\'s distress, Narada came to your house. Your father honoured him as a guest from the heart and asked the reason for his coming."' },
        },
        {
          text: 'नारद जी ने कहा कि गिरिराज, मैं भगवान विष्णु के भेजने पर यहाँ उपस्थित हुआ हूँ। आपकी कन्या ने बडा कठोर तप किया है; इससे प्रसन्न होकर वे आपकी सुपुत्री से विवाह करना चाहते हैं। इस सम्बन्ध में आपकी राय जानना चाहता हूँ।',
          meaning: { en: 'Narada said, "Girirāja, I have come here sent by Lord Vishnu. Your daughter has done very severe tapas; pleased by it he wishes to marry your daughter. I wish to know your opinion in this matter."' },
        },
        {
          text: 'नारद जी की बात सुनकर गिरिराज गद्गद हो उठे; उनके तो जैसे सारे क्लेश ही दूर हो गए। प्रसन्न होकर वे बोले कि श्रीमान, यदि स्वयं विष्णु मेरी कन्या का वरण करना चाहते हैं तो मुझे क्या आपत्ति हो सकती है; वे तो साक्षात् ब्रह्म हैं। हे महर्षि, यह तो हर पिता की इच्छा होती है कि उसकी पुत्री सुख-सम्पदा से युक्त पति के घर की लक्ष्मी बने। पिता की सार्थकता इसी में है कि पति के घर जाकर उसकी पुत्री पिता के घर से अधिक सुखी रहे।',
          meaning: { en: 'Hearing Narada, Girirāja was overjoyed; it was as if all his troubles were gone. Glad, he said, "Sir, if Vishnu himself wishes to wed my daughter, what objection can I have? He is Brahman in person. O great sage, every father wishes his daughter to be the Lakshmi of a husband\'s house full of wealth. A father is fulfilled when his daughter in her husband\'s house is happier than in his."' },
        },
        {
          text: 'तुम्हारे पिता की स्वीकृति पाकर नारद जी विष्णु के पास गए और उनसे तुम्हारे विवाह के निश्चित होने का समाचार कहा। मगर इस विवाह-सम्बन्ध की बात जब तुम्हारे कान में पडी तो तुम्हारे दुःख का ठिकाना न रहा।',
          meaning: { en: '"Having his consent, Narada went to Vishnu and told him that your marriage was settled. But when news of this match reached your ears there was no limit to your grief."' },
        },
        {
          text: 'तुम्हारी एक सखी ने तुम्हारी मानसिक दशा समझ ली और उसने तुमसे इस विक्षिप्तता का कारण जानना चाहा। तब तुमने बताया कि मैंने सच्चे हृदय से भगवान शिवशंकर का वरण किया है, किन्तु मेरे पिता ने मेरा विवाह विष्णु जी से निश्चित कर दिया है। मैं विचित्र धर्म-संकट में हूँ, अब क्या करूँ? प्राण छोडने के सिवा अब कोई उपाय नहीं बचा है।',
          meaning: { en: '"A friend of yours understood your state of mind and asked the cause of this distraction. Then you said, \'I have chosen Lord Shiva in my heart, but my father has settled my marriage with Vishnu. I am in a strange dilemma; what shall I do? There is no remedy left except to give up my life.\'"' },
        },
        {
          text: 'तुम्हारी सखी बडी समझदार और सूझ-बूझ वाली थी। उसने कहा कि सखी, प्राण त्यागने का इसमें कारण ही क्या है? संकट के मौके पर धैर्य से काम लेना चाहिए। नारी के जीवन की सार्थकता इसी में है कि पति-रूप में हृदय से जिसे एक बार स्वीकार कर लिया, जीवन भर उसी से निर्वाह करे। सच्ची आस्था और एकनिष्ठा के आगे तो ईश्वर को भी समर्पण करना पडता है।',
          meaning: { en: '"Your friend was very wise and sensible. She said, \'Friend, what reason is there to give up your life? In a time of crisis one must act with patience. A woman\'s life is fulfilled when the one she has once accepted in her heart as husband she keeps faith with all her life. Even God must yield before true faith and single-mindedness.\'"' },
        },
        {
          text: 'सखी ने आगे कहा कि मैं तुम्हें घनघोर जंगल में ले चलती हूँ, जो साधना-स्थली भी हो और जहाँ तुम्हारे पिता तुम्हें खोज भी न पाएँ। वहाँ तुम साधना में लीन हो जाना। मुझे विश्वास है कि ईश्वर अवश्य तुम्हारी सहायता करेंगे।',
          meaning: { en: '"She went on, \'I shall take you into a dense forest which will be a place of spiritual practice and where your father cannot even find you. There you can be absorbed in your practice. I am sure God will surely help you.\'"' },
        },
        {
          text: 'तुमने ऐसा ही किया। तुम्हारे पिता तुम्हें घर पर न पाकर बडे दुःखी और चिन्तित हुए। वे सोचने लगे कि न जाने वह कहाँ चली गई; मैं विष्णु जी से उसका विवाह करने का प्रण कर चुका हूँ, यदि भगवान विष्णु बारात लेकर आ गए और कन्या घर पर न हुई तो बडा अपमान होगा, मैं कहीं मुँह दिखाने योग्य भी नहीं रहूँगा। यही सब सोचकर गिरिराज ने जोर-शोर से तुम्हारी खोज शुरू करा दी।',
          meaning: { en: '"You did just so. Not finding you at home your father was very sad and anxious. He thought, \'Where can she have gone? I have pledged her to Vishnu; if Vishnu comes with the wedding party and the girl is not at home, it will be a great disgrace and I shall not be fit to show my face anywhere.\' Thinking so, Girirāja began a vigorous search for you."' },
        },
        {
          text: 'इधर तुम्हारी खोज होती रही और उधर तुम अपनी सखी के साथ नदी के तट पर एक गुफा में मेरी आराधना में लीन थीं। भाद्रपद शुक्ल तृतीया को हस्त नक्षत्र था। उस दिन तुमने रेत का शिवलिंग बनाकर व्रत किया और रात भर मेरी स्तुति के गीत गाकर जागती रहीं।',
          meaning: { en: '"While the search went on, you were with your friend in a cave on the river bank, absorbed in worshipping me. It was the third of the bright half of Bhadrapada, with the star Hasta. That day you made a Shivalinga of sand and kept the vrata, and stayed awake all night singing songs in my praise."' },
        },
        {
          text: 'तुम्हारी इस कष्टसाध्य तपस्या के प्रभाव से मेरा आसन डोलने लगा और मेरी समाधि टूट गई। मैं तुरन्त तुम्हारे सामने जा पहुँचा और तुम्हारी तपस्या से प्रसन्न होकर तुमसे वर माँगने को कहा।',
          meaning: { en: '"By the power of your hard austerity my seat began to shake and my samadhi broke. I went at once before you and, pleased with your tapas, asked you to ask a boon."' },
        },
        {
          text: 'तब अपनी तपस्या के फलस्वरूप मुझे अपने सामने पाकर तुमने कहा कि मैं हृदय से आपको पति के रूप में वरण कर चुकी हूँ; यदि आप सचमुच मेरी तपस्या से प्रसन्न होकर यहाँ पधारे हैं तो मुझे अपनी अर्धांगिनी के रूप में स्वीकार कर लीजिए। तब मैं तथास्तु कहकर कैलास पर्वत पर लौट आया।',
          meaning: { en: '"Then, finding me before you as the fruit of your tapas, you said, \'I have chosen you in my heart as husband; if you have truly come here pleased with my tapas, accept me as your better half.\' Then I said \'So be it\' and returned to Mount Kailasa."' },
        },
        {
          text: 'प्रातः होते ही तुमने पूजा की सारी सामग्री नदी में प्रवाहित करके अपनी सहेली सहित व्रत का पारण किया। उसी समय अपने मित्र-बन्धुओं और दरबारियों सहित गिरिराज तुम्हें खोजते-खोजते वहाँ आ पहुँचे और तुम्हारी इस कष्टसाध्य तपस्या का कारण और उद्देश्य पूछा। तुम्हारी दशा देखकर गिरिराज बहुत दुःखी हुए और पीडा से उनकी आँखों में आँसू उमड आए।',
          meaning: { en: '"At dawn you let all the worship material go into the river and broke your fast with your friend. At that very time Girirāja, searching, reached the place with his friends, kinsmen and courtiers, and asked the cause and aim of your hard austerity. Seeing your state, Girirāja was deeply grieved and tears welled in his eyes with pain."' },
        },
        {
          text: 'तुमने उनके आँसू पोंछते हुए विनम्र स्वर में कहा कि पिताजी, मैंने जीवन का अधिकांश समय कठोर तपस्या में बिताया है। मेरी इस तपस्या का उद्देश्य केवल यही था कि मैं महादेव को पति के रूप में पाना चाहती थी। आज मैं अपनी तपस्या की कसौटी पर खरी उतर चुकी हूँ। आप विष्णु जी से मेरा विवाह करने का निर्णय ले चुके थे, इसलिए मैं अपने आराध्य की खोज में घर छोडकर चली आई। अब मैं आपके साथ इसी शर्त पर घर जाऊँगी कि आप मेरा विवाह विष्णु जी से न करके महादेव जी से करेंगे।',
          meaning: { en: '"Wiping his tears, you said gently, \'Father, I have spent most of my life in severe austerity. The aim of this tapas was only that I wished to have Mahadeva as husband. Today I have stood the test of my tapas. Since you had decided to marry me to Vishnu, I left home in search of my beloved. Now I shall go home with you only on this condition: that you marry me not to Vishnu but to Mahadeva.\'"' },
        },
        {
          text: 'गिरिराज मान गए और तुम्हें घर ले गए। कुछ समय के पश्चात शास्त्रोक्त विधि-विधान से उन्होंने हम दोनों को विवाह-सूत्र में बाँध दिया।',
          meaning: { en: '"Girirāja agreed and took you home. After some time, with the rites prescribed by the shastras, he bound the two of us in marriage."' },
        },
        {
          text: 'हे पार्वती! भाद्रपद की शुक्ल तृतीया को तुमने मेरी आराधना करके जो व्रत किया था, उसी के फलस्वरूप मेरा तुमसे विवाह हो सका। इसका महत्त्व यह है कि मैं इस व्रत को करने वाली कुँवारियों को मनोवांछित फल देता हूँ। इसलिए सौभाग्य की इच्छा करने वाली प्रत्येक युवती को यह व्रत पूरी एकनिष्ठा और आस्था से करना चाहिए।',
          meaning: { en: '"O Parvati! It was as the fruit of the vrata you kept on the third of the bright half of Bhadrapada, worshipping me, that our marriage could take place. Its greatness is that I give maidens who keep this vrata the fruit they wish. Therefore every young woman who desires good fortune should keep this vrata with full single-mindedness and faith."' },
        },
      ],
    },
  ],
};
