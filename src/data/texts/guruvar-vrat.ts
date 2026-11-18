/**
 * Guruvar (Thursday, Bṛhaspativāra) vrata for Bṛhaspati and Viṣṇu: the outline of the puja and the kathā of the king, the queen and the sage, in Hindi.
 * Collated Nov 2026 from typed web copies; not proofread against a single printed booklet.
 *
 * WITNESSES
 *   B  bhaktibharat.com, "अथ श्री बृहस्पतिवार व्रत कथा | बृहस्पतिदेव की कथा". Base (the fullest: the sister, the woodcutter, the dream, the sister-in-law).
 *   S  shubhpanchang.com/hi/vrat-kathas/thursday (the same story in the same words as B for the sage, the queen, the maid, the sister and
 *      the yellow food; its sage tells the queen to do more things, see CHOICES).
 *   H  hindupad.com, "वृहस्पतिवार (गुरुवार व्रत) कथा" (the same opening and the same later episodes as B, the corpse, the ploughman and the
 *      potter's sick boy; also the Brahmin's daughter and the golden barley, which is left out).
 *   C  bhaktibharat.com, "श्री बृहस्पतिवार व्रत कथा 2" (a merchant's wife version: a different recension, read for comparison only).
 *   D  drikpanchang.com (hi), Bṛhaspati vrata katha, listed as a witness; its page could not be fetched here and was not read.
 *
 * CHOICES. B, S and H agree on the plot up to the queen's second wealth and the king's return; B's paragraphs are followed. The sage's
 * instruction to the queen is B's: wash the head with yellow clay, wash clothes in a boiling pan, and plaster the house, on a
 * Thursday. S and H add that she should have the king shaved, eat meat and drink wine, and give clothes to the washerman; these
 * additions are not in B and are not used. B's "बहिन" (sister) spelling is kept as "बहन". The sister-in-law scene ("घोडे पर नहीं, गधे पर
 * चढकर आई") is from B only and kept as it is the base of the closing. No mantra is printed. Spelling is lightly normalised (no
 * nukta; standard anusvāra). Meanings are original.
 */
import type { Mantra } from '../types';

export const guruvarVrat: Mantra = {
  id: 'guruvar-vrat',
  title: 'बृहस्पतिवार व्रत कथा',
  titleEn: 'Guruvar (Brihaspativar) Vrat Katha',
  category: 'puja',
  order: 68,
  deity: 'Śrī Bṛhaspati',
  source: 'North Indian vrata-kathā for Thursday (Bṛhaspativāra, Guruvāra), in honour of Bṛhaspati and Viṣṇu; popular printed and web copies',
  summary:
    'The Thursday fast for Brihaspati (Guru): a brief outline of the puja and the katha of the generous king and his miserly queen, the sage who made her wealth vanish, the sister\'s lesson in the fast, the king turned woodcutter, the lost necklace on the peg, and the return of wealth, a son and honour.',
  difficulty: 'easy',
  completeness: 'partial',
  contentNote:
    'The puja is given only as the outline the katha itself describes (gram dal and raisins for Vishnu at the roots of a plantain tree, a lamp, yellow food, the katha heard in silence, prasada of gram and raisins and sweet water); regional and family rules differ. The second, shorter katha of the Brahmin\'s daughter and the golden barley (printed in the same booklets) and the aarti are not included.',
  sections: [
    {
      title: 'व्रत का विधान',
      titleEn: 'The fast and the puja in outline',
      note: 'General practice only; families follow their own tradition.',
      verses: [
        {
          text: 'बृहस्पतिवार के व्रत में चने की दाल और मुनक्का से भगवान विष्णु का केले की जड में पूजन करें, दीपक जलाएँ, व्रत कथा सुनें और पीला भोजन ही करें। इससे बृहस्पतिदेव प्रसन्न होते हैं।',
          meaning: { en: 'In the Thursday fast worship Lord Vishnu at the root of a plantain tree with gram dal and raisins, light a lamp, hear the vrata katha, and eat only yellow food. By this Brihaspati is pleased.' },
        },
        {
          text: 'कथा के बाद शुद्ध जल के लोटे में शक्कर घोलकर अमृत बनाएँ, और दो पैसे के चने-मुनक्का का प्रसाद बनाकर परिवार तथा कथा सुनने वालों में बाँटें। जब तक कथा होती है तब तक न उठें, न बोलें।',
          meaning: { en: 'After the katha make "nectar" by dissolving sugar in a pot of pure water, make a prasada of two pice worth of gram and raisins, and distribute it among the family and those who have heard the katha. While the katha is being told, neither rise nor speak.' },
        },
        {
          text: 'कथा में बताया गया है कि बृहस्पतिवार को घर लीपना, पीली मिट्टी से सिर धोना और भट्टी चढाकर कपडे धोना धन का नाश करता है, इसलिए ये कर्म इस दिन टाले जाते हैं। कथा के बाद श्रद्धा से आरती करके प्रसाद बाँटें और स्वयं भी लें।',
          meaning: { en: 'The katha shows that plastering the house, washing the head with yellow clay and heating a pan to wash clothes on a Thursday destroys wealth, which is why these acts are avoided on this day. After the katha perform the arati with faith, distribute the prasada and take it oneself.' },
        },
      ],
    },
    {
      title: 'बृहस्पतिवार व्रत कथा',
      titleEn: 'The katha of the king, the queen and the sage',
      note: 'Heard on each Thursday of the fast.',
      verses: [
        {
          text: 'भारतवर्ष में एक प्रतापी और दानी राजा राज्य करता था। वह नित्य गरीबों और ब्राह्मणों की सहायता करता था। यह बात उसकी रानी को अच्छी नहीं लगती थी, वह न गरीबों को दान देती थी, न भगवान का पूजन करती थी और राजा को भी दान देने से मना करती थी।',
          meaning: { en: 'In Bharatavarsha a mighty and generous king ruled. He helped the poor and the brahmins every day. His queen did not like this; she neither gave to the poor nor worshipped God, and she forbade the king too to give.' },
        },
        {
          text: 'एक दिन राजा शिकार खेलने वन को गए थे, रानी महल में अकेली थी। उसी समय बृहस्पतिदेव साधु के वेश में महल में भिक्षा माँगने आए। रानी ने भिक्षा देने से इनकार कर दिया और कहा कि महाराज, मैं दान-पुण्य से तंग आ गई हूँ। मेरा पति सारा धन लुटाते रहते हैं, मेरी इच्छा है कि हमारा धन नष्ट हो जाए।',
          meaning: { en: 'One day the king had gone to the forest to hunt, and the queen was alone in the palace. At that moment Brihaspati came in the guise of a sadhu to the palace to beg alms. The queen refused alms and said, "Maharaj, I am tired of charity and merit. My husband keeps squandering all the wealth; I wish our wealth would be destroyed."' },
        },
        {
          text: 'साधु ने कहा कि देवी, तुम बडी विचित्र हो; धन और सन्तान तो सभी चाहते हैं। यदि तुम्हारे पास अधिक धन है तो भूखों को भोजन दो, प्यासों के लिए प्याऊ बनवाओ, यात्रियों के लिए धर्मशालाएँ खुलवाओ और निर्धन कन्याओं का विवाह कराओ। ऐसे और भी काम हैं जिनसे तुम्हारा यश लोक-परलोक में फैलेगा।',
          meaning: { en: 'The sadhu said, "Lady, you are very strange; wealth and children are what everyone wants. If you have a great deal of wealth, feed the hungry, build water-huts for the thirsty, open rest-houses for travellers, and have the daughters of the poor married. There are other such works by which your fame will spread in this world and the next."' },
        },
        {
          text: 'पर रानी पर उपदेश का कोई प्रभाव नहीं पडा। वह बोली कि महाराज, आप मुझे कुछ न समझाइए, मैं ऐसा धन नहीं चाहती जो हर जगह बाँटती फिरूँ। साधु ने उत्तर दिया कि यदि तुम्हारी ऐसी ही इच्छा है तो तथास्तु।',
          meaning: { en: 'But the counsel had no effect on the queen. She said, "Maharaj, do not try to teach me; I do not want wealth that I must go about distributing everywhere." The sadhu replied, "If that is your wish, so be it."' },
        },
        {
          text: 'साधु ने कहा कि तब तुम ऐसा करना कि बृहस्पतिवार को घर लीपकर पीली मिट्टी से अपना सिर धोना, स्नान करना और भट्टी चढाकर कपडे धोना; ऐसा करने से तुम्हारा सारा धन नष्ट हो जाएगा। इतना कहकर साधु वहाँ से अदृश्य हो गए।',
          meaning: { en: 'He said, "Then do this: on Thursday plaster the house, wash your head with yellow clay, bathe and set a furnace going to wash clothes; by doing so all your wealth will be destroyed." Having said this the sadhu vanished from there.' },
        },
        {
          text: 'साधु के कहे अनुसार करते हुए रानी को केवल तीन बृहस्पतिवार बीते थे कि उसकी सारी धन-सम्पत्ति नष्ट हो गई और राजा का परिवार भोजन के लिए तरसने लगा। तब राजा ने रानी से कहा कि तुम यहीं रहो, मैं दूसरे देश जाता हूँ, क्योंकि यहाँ सब मुझे जानते हैं और मैं कोई छोटा काम नहीं कर सकता।',
          meaning: { en: 'Doing as the sadhu said, only three Thursdays had passed for the queen when all her wealth and property was destroyed and the king\'s family began to long for food. Then the king said to the queen, "You stay here; I shall go to another country, for here everyone knows me and I cannot do any humble work."' },
        },
        {
          text: 'राजा परदेश गया, वहाँ जंगल से लकडी काटकर लाता और शहर में बेचता, इस तरह जीवन बिताने लगा। इधर राजा के जाते ही रानी और दासी दुःखी रहने लगीं। एक बार जब उन्हें सात दिन बिना भोजन के रहना पडा तो रानी ने दासी से कहा कि पास के नगर में मेरी बहन रहती है, वह बडी धनवान है, तू उसके पास जा और कुछ ले आ।',
          meaning: { en: 'The king went abroad; there he cut wood in the forest, brought it and sold it in the city, and so passed his days. Here, as soon as the king had gone, the queen and the maid lived in sorrow. Once, when they had to spend seven days without food, the queen said to the maid, "My sister lives in a nearby city; she is very rich. Go to her and fetch something."' },
        },
        {
          text: 'उस दिन गुरुवार था और रानी की बहन उस समय बृहस्पतिवार व्रत की कथा सुन रही थी। दासी ने रानी का सन्देश दिया, पर बहन ने कोई उत्तर नहीं दिया। दासी को क्रोध आया और वह दुःखी होकर लौट आई; सुनकर रानी ने अपने भाग्य को कोसा।',
          meaning: { en: 'That day was Thursday, and the queen\'s sister was at that moment hearing the Thursday vrata katha. The maid gave the queen\'s message, but the sister gave no reply. The maid was angry and returned sorrowful; hearing it, the queen cursed her fate.' },
        },
        {
          text: 'कथा और पूजन समाप्त करके बहन रानी के घर आई और बोली कि बहन, मैं बृहस्पतिवार का व्रत कर रही थी; जब तक कथा होती है तब तक हम न उठते हैं, न बोलते हैं, इसीलिए मैं नहीं बोली। रानी की आँखें भर आईं और उसने सात दिन के भूखे रहने की बात बता दी।',
          meaning: { en: 'Having finished the katha and puja, the sister came to the queen\'s house and said, "Sister, I was keeping the Thursday fast; while the katha goes on we neither rise nor speak, so I did not answer." The queen\'s eyes filled with tears and she told of their seven days without food.' },
        },
        {
          text: 'बहन ने कहा कि बृहस्पतिदेव सबकी मनोकामना पूरी करते हैं, देखो शायद तुम्हारे घर में अनाज रखा हो। रानी को विश्वास नहीं हुआ, पर आग्रह करने पर उसने दासी को अन्दर भेजा तो सचमुच अनाज से भरा एक घडा मिल गया। दासी को बडी हैरानी हुई।',
          meaning: { en: 'The sister said, "Brihaspati fulfils everyone\'s wishes; look, perhaps there is grain kept in your house." At first the queen did not believe it, but on her pressing she sent the maid inside, and indeed a pot full of grain was found. The maid was greatly amazed.' },
        },
        {
          text: 'दासी बोली कि रानी, जब हमें भोजन नहीं मिलता तो हम व्रत ही तो करते हैं, क्यों न इनसे व्रत और कथा की विधि पूछ लें। रानी ने बहन से पूछा तो बहन ने बताया कि चने की दाल और मुनक्का से विष्णु भगवान का केले की जड में पूजन करें, दीपक जलाएँ, कथा सुनें और पीला भोजन करें; इससे बृहस्पतिदेव प्रसन्न होते हैं। यह बताकर बहन अपने घर लौट गई।',
          meaning: { en: 'The maid said, "Queen, when we get no food we are fasting anyway; why not ask her the method of the fast and the katha?" When the queen asked, the sister told her to worship Lord Vishnu at the root of a plantain tree with gram dal and raisins, light a lamp, hear the katha and eat yellow food, by which Brihaspati is pleased. Having told this, the sister went back home.' },
        },
        {
          text: 'सात दिन बाद गुरुवार आया तो रानी और दासी ने व्रत रखा। घुडसाल से चना और गुड लाकर उन्होंने केले की जड और विष्णु भगवान का पूजन किया। पर पीला भोजन कहाँ से आए, इस बात से दोनों बहुत दुःखी थीं। व्रत से प्रसन्न बृहस्पतिदेव साधारण मनुष्य का रूप धरकर दो थालों में सुन्दर पीला भोजन दासी को दे गए, और दोनों ने मिलकर भोजन किया।',
          meaning: { en: 'When Thursday came seven days later, the queen and the maid kept the fast. Bringing gram and jaggery from the stable, they worshipped the plantain root and Lord Vishnu. But both were deeply troubled about where yellow food would come from. Pleased with their fast, Brihaspati took the form of an ordinary man and gave the maid beautiful yellow food in two dishes, and the two ate together.' },
        },
        {
          text: 'उसके बाद वे सब गुरुवार को व्रत और पूजन करने लगीं और बृहस्पतिदेव की कृपा से उनके पास फिर धन-सम्पत्ति आ गई, पर रानी फिर पहले की तरह आलस्य करने लगी। तब दासी ने कहा कि रानी, तुम पहले भी ऐसे ही आलस्य करती थीं, तुम्हें धन सँभालने में कष्ट होता था, इसलिए धन नष्ट हुआ; अब कृपा से धन मिला है तो फिर आलस्य क्यों?',
          meaning: { en: 'After that they all kept the Thursday fast and worship, and by Brihaspati\'s grace wealth returned to them, but the queen again fell into idleness as before. Then the maid said, "Queen, you were idle like this before too; keeping wealth was a burden to you, and so it was lost. Now that wealth has come by grace, why idleness again?"' },
        },
        {
          text: 'दासी ने समझाया कि बडी मुसीबतों के बाद हमने यह धन पाया है, इसलिए दान-पुण्य करना चाहिए, भूखों को भोजन कराना चाहिए और धन को शुभ कार्यों में लगाना चाहिए, जिससे कुल का यश बढेगा, स्वर्ग मिलेगा और पितर प्रसन्न होंगे। दासी की बात मानकर रानी शुभ कार्यों में धन खर्च करने लगी और पूरे नगर में उसका यश फैल गया।',
          meaning: { en: 'The maid explained, "We have got this wealth after great trouble, so we should give in charity, feed the hungry and spend wealth on good works, by which the family\'s fame will grow, heaven will be won and the ancestors will be pleased." Following the maid\'s advice the queen began to spend on good works, and her fame spread through the whole city.' },
        },
        {
          text: 'एक दिन राजा दुःखी होकर जंगल में एक पेड के नीचे बैठा अपनी दशा याद कर रहा था। बृहस्पतिवार का दिन था, तभी निर्जन वन में एक साधु प्रकट हुए, जो साधु-वेश में स्वयं बृहस्पति देवता थे। उन्होंने लकडहारे से पूछा कि तू इस सुनसान जंगल में चिन्ता में क्यों बैठा है; लकडहारा प्रणाम करके अपनी कथा सुनाते हुए रोने लगा।',
          meaning: { en: 'One day the king, sorrowful, sat under a tree in the forest remembering his state. It was Thursday, and just then a sadhu appeared in the lonely forest; it was Brihaspati himself in the sadhu\'s guise. He asked the woodcutter, "Why do you sit worried in this deserted jungle?" The woodcutter bowed and, telling his story, began to weep.' },
        },
        {
          text: 'महात्मा ने कहा कि तुम्हारी स्त्री ने बृहस्पति के दिन बृहस्पति भगवान का निरादर किया था, इसी से रुष्ट होकर उन्होंने तुम्हारी यह दशा की है। अब चिन्ता छोडकर मेरे कहने पर चलो, तुम्हारे सब कष्ट दूर होंगे और भगवान पहले से भी अधिक सम्पत्ति देंगे। बृहस्पतिवार को कथा किया करो, दो पैसे के चने-मुनक्का का प्रसाद बनाओ, शुद्ध जल में शक्कर मिलाकर अमृत तैयार करो और कथा के बाद सबमें बाँटो।',
          meaning: { en: 'The mahatma said, "Your wife insulted Lord Brihaspati on Brihaspati\'s day; angered by this he has brought you to this state. Now give up your worry and follow my words, and all your sorrows will go and the Lord will give you even more wealth than before. On Thursdays hold the katha, make prasada from two pice worth of gram and raisins, prepare nectar by mixing sugar in pure water, and distribute it among all after the katha."' },
        },
        {
          text: 'लकडहारे ने कहा कि मुझे लकडी बेचकर इतना भी नहीं मिलता कि भोजन के बाद कुछ बचा सकूँ। साधु ने कहा कि चिन्ता मत करो, बृहस्पतिवार को रोज की तरह लकडी लेकर शहर जाओ, तुम्हें रोज से दुगुना धन मिलेगा। यह कहकर साधु अन्तर्ध्यान हो गए।',
          meaning: { en: 'The woodcutter said, "By selling wood I do not get enough to save anything after a meal." The sadhu said, "Do not worry; on Thursday go to the city with wood as usual, and you will get twice the usual money." Having said this the sadhu vanished.' },
        },
        {
          text: 'राजा को उस दिन और दिनों से अधिक धन मिला और उसने चना-गुड लाकर गुरुवार का व्रत किया, जिससे उसके सब क्लेश दूर हुए। परन्तु अगले गुरुवार को वह व्रत करना भूल गया, इस कारण बृहस्पतिदेव नाराज हो गए।',
          meaning: { en: 'That day the king got more than on other days, and bringing gram and jaggery he kept the Thursday fast, by which all his troubles went. But on the next Thursday he forgot to keep the fast, and for this reason Brihaspati was displeased.' },
        },
        {
          text: 'उस दिन उस नगर के राजा ने बडा यज्ञ किया और घोषणा करा दी कि कोई अपने घर भोजन न बनाए, न आग जलाए, सब मेरे यहाँ भोजन करने आएँ; जो न माने उसे फाँसी होगी। सब लोग भोजन करने गए, लकडहारा कुछ देर से पहुँचा, इसलिए राजा उसे अपने साथ घर ले जाकर भोजन कराने लगे।',
          meaning: { en: 'That day the king of that city held a great yajna and had it proclaimed, "No one is to cook at home or light a fire; all are to come and eat at my place; whoever disobeys will be hanged." All the people went to eat; the woodcutter arrived rather late, so the king took him along to his house and began to feed him.' },
        },
        {
          text: 'भोजन कराते समय रानी की दृष्टि उस खूँटी पर पडी जिस पर उसका हार लटका था, वह वहाँ नहीं दिखा। रानी ने निश्चय किया कि हार इस आदमी ने चुरा लिया है और उसी समय सिपाहियों को बुलाकर उसे कारागार में डलवा दिया।',
          meaning: { en: 'As he was being fed, the queen\'s eye fell on the peg where her necklace used to hang; it was not to be seen. The queen concluded that this man had stolen the necklace, and at once called the soldiers and had him thrown into prison.' },
        },
        {
          text: 'कारागार में दुःखी होकर लकडहारा सोचने लगा कि न जाने किस पूर्व जन्म के कर्म से यह दुःख मिला है, और उसी साधु को याद करने लगा। तभी बृहस्पतिदेव साधु के रूप में प्रकट हुए और बोले कि मूर्ख, तूने बृहस्पतिदेव की कथा नहीं की, इसी से तुझे दुःख मिला। अब चिन्ता मत कर, बृहस्पतिवार को कारागार के दरवाजे पर चार पैसे पडे मिलेंगे, उनसे पूजा करना तो तेरे सब कष्ट दूर हो जाएँगे।',
          meaning: { en: 'In prison the woodcutter grieved and wondered by what deed of an earlier birth he had come to this sorrow, and began to remember that same sadhu. Just then Brihaspati appeared in the form of a sadhu and said, "Fool, you did not hold the katha of Brihaspati, and so this sorrow came to you. Do not worry now; on Thursday you will find four pice lying at the prison door. Worship with them and all your troubles will go."' },
        },
        {
          text: 'बृहस्पतिवार को उसे चार पैसे मिले और लकडहारे ने कथा कही। उसी रात बृहस्पतिदेव ने उस नगर के राजा को स्वप्न में कहा कि तूने जिसे कारागार में बन्द किया है वह निर्दोष है, वह राजा है, उसे छोड दे। रानी का हार उसी खूँटी पर लटका है; ऐसा न करेगा तो मैं तेरा राज्य नष्ट कर दूँगा।',
          meaning: { en: 'On Thursday he found the four pice and the woodcutter told the katha. That very night Brihaspati said to the king of that city in a dream, "The man you have shut in prison is innocent; he is a king; release him. The queen\'s necklace is hanging on that very peg. If you do not, I shall destroy your kingdom."' },
        },
        {
          text: 'प्रातःकाल राजा उठा, खूँटी पर हार देखकर लकडहारे को बुलाया, क्षमा माँगी और उसे सुन्दर वस्त्र-आभूषण देकर विदा किया। बृहस्पतिदेव की आज्ञा के अनुसार वह राजा अपने नगर की ओर चल दिया।',
          meaning: { en: 'In the morning the king rose, saw the necklace on the peg, called the woodcutter, begged his pardon, and sent him off with fine clothes and ornaments. As Brihaspati had bidden, the king set out for his own city.' },
        },
        {
          text: 'जब राजा अपने नगर के पास पहुँचा तो उसे बडा आश्चर्य हुआ, क्योंकि नगर में पहले से अधिक बाग, तालाब, कुएँ, धर्मशालाएँ और मन्दिर बन गए थे। पूछने पर लोगों ने कहा कि ये सब रानी और दासी के बनवाए हैं। राजा को आश्चर्य भी हुआ और क्रोध भी आया।',
          meaning: { en: 'When the king came near his city he was greatly amazed, for in the city many more gardens, ponds, wells, rest-houses and temples had been built than before. When he asked, the people said all this belonged to the queen and the maid. The king was surprised and also angry.' },
        },
        {
          text: 'रानी ने जब राजा के आने की खबर सुनी तो दासी से कहा कि देख, राजा हमें कितनी बुरी हालत में छोड गए थे, हमारी ऐसी दशा देखकर कहीं लौट न जाएँ, इसलिए तू दरवाजे पर खडी हो जा। दासी राजा को अपने साथ ले आई। राजा ने क्रोध करके पूछा कि यह धन तुम्हें कैसे मिला, तब रानी ने कहा कि यह सब बृहस्पतिदेव के व्रत के प्रभाव से मिला है।',
          meaning: { en: 'When the queen heard that the king was coming, she said to the maid, "See in what a wretched state the king left us; seeing us so, he might turn back. So stand at the door." The maid brought the king in with her. The king angrily asked, "How did you get this wealth?" Then the queen said, "All this has come by the power of Brihaspati\'s fast."' },
        },
        {
          text: 'तब राजा ने निश्चय किया कि सब लोग तो सात दिन बाद बृहस्पतिदेव का पूजन करते हैं, पर मैं रोज दिन में तीन बार कहानी कहूँगा और रोज व्रत करूँगा। अब राजा के दुपट्टे में हर समय चने की दाल बँधी रहती और वह दिन में तीन बार कथा कहता।',
          meaning: { en: 'Then the king resolved, "All others worship Brihaspati after seven days, but I shall tell the story three times a day and keep the fast every day." Now gram dal was always tied in the king\'s shawl and he told the katha three times a day.' },
        },
        {
          text: 'एक दिन राजा ने सोचा कि बहन के यहाँ हो आऊँ, और वह घोडे पर चल पडा। रास्ते में कुछ लोग एक शव को ले जा रहे थे; राजा ने उन्हें रोककर कहा कि भाइयो, मेरी बृहस्पतिदेव की कथा सुन लो। वे बोले कि हमारा आदमी मर गया है और इसे कथा की पडी है, पर कुछ लोगों ने कहा कि अच्छा, कहो। राजा ने दाल निकाली, और कथा आधी हुई थी कि शव हिलने लगा, और कथा पूरी होने पर वह मनुष्य राम-राम करके उठ खडा हुआ।',
          meaning: { en: 'One day the king thought, "Let me visit my sister," and set out on horseback. On the way some men were carrying a corpse; the king stopped them and said, "Brothers, hear my katha of Brihaspati." They said, "Our man has died and he is thinking of his story," but some said, "All right, tell it." The king took out the dal, and when the katha was half done the corpse began to stir, and when the katha ended the man stood up saying "Ram, Ram."' },
        },
        {
          text: 'आगे उसे खेत में हल चलाता एक किसान मिला। राजा ने कहा कि भैया, मेरी बृहस्पतिवार की कथा सुन लो। किसान बोला कि जब तक मैं तेरी कथा सुनूँगा तब तक चार हरैया जोत लूँगा, अपनी कथा किसी और को सुना। राजा के आगे बढते ही बैल गिर पडे और किसान के पेट में बडा दर्द होने लगा।',
          meaning: { en: 'Further on he met a farmer ploughing his field. The king said, "Brother, hear my Thursday katha." The farmer said, "While I listen to your tale I could plough four furrows; tell your story to someone else." As the king moved on, the bullocks fell down and the farmer began to have a violent pain in the stomach.' },
        },
        {
          text: 'उसकी माँ रोटी लेकर आई तो यह देखकर बेटे से सब हाल पूछा, और बुढिया दौडकर उस घुडसवार के पास गई और बोली कि मैं तेरी कथा सुनूँगी, तू मेरे खेत पर चलकर ही कहना। राजा ने खेत पर जाकर कथा कही, जिसके सुनते ही बैल उठ खडे हुए और किसान के पेट का दर्द बन्द हो गया।',
          meaning: { en: 'His mother came with his bread, saw this and asked her son everything. The old woman ran to the horseman and said, "I shall hear your katha; you must tell it at my field." The king went to the field and told the katha, and as soon as it was heard the bullocks stood up and the farmer\'s stomach pain stopped.' },
        },
        {
          text: 'राजा अपनी बहन के घर पहुँचा, बहन ने उसकी खूब मेहमानी की। दूसरे दिन प्रातः राजा ने देखा कि सब लोग भोजन कर रहे हैं, तो बहन से कहा कि कोई ऐसा मनुष्य है जिसने भोजन न किया हो, वह मेरी कथा सुन ले। बहन ने कहा कि इस देश में पहले भोजन करते हैं, फिर और काम; फिर भी वह देखने गई और एक कुम्हार के घर पहुँची, जिसका लडका बीमार था और जहाँ तीन दिन से किसी ने भोजन नहीं किया था।',
          meaning: { en: 'The king reached his sister\'s house and she entertained him well. Next morning the king saw that everyone was eating and said to his sister, "Is there anyone who has not eaten, who might hear my katha?" The sister said, "In this country people eat first and do other work after"; still she went to look, and reached a potter\'s house, where the boy was sick and no one had eaten for three days.' },
        },
        {
          text: 'बहन ने कुम्हार से कथा सुनने को कहा तो वह तैयार हो गया। राजा ने जाकर बृहस्पतिवार की कथा कही, जिसे सुनकर कुम्हार का लडका ठीक हो गया। अब तो राजा की प्रशंसा होने लगी।',
          meaning: { en: 'When the sister asked the potter to hear the katha he agreed. The king went and told the Thursday katha, and on hearing it the potter\'s boy was cured. Now the king began to be praised.' },
        },
        {
          text: 'एक दिन राजा ने बहन से कहा कि बहन, हम अपने घर जाएँगे, तुम भी तैयार हो जाओ। बहन ने सास से कहा तो सास बोली कि चली जा, पर अपने लडकों को मत ले जाना क्योंकि तेरे भाई के कोई सन्तान नहीं है। बहन ने भाई से कहा कि मैं चलूँगी पर कोई बालक नहीं जाएगा। राजा बोला कि जब कोई बालक नहीं चलेगा तो तुम ही क्या करोगी, और वह बडे दुःखी मन से अपने नगर लौट आया।',
          meaning: { en: 'One day the king said to his sister, "Sister, we shall go to our home; you too get ready." The sister told her mother-in-law, who said, "Go, but do not take your boys, for your brother has no child." The sister told her brother, "I shall come, but no child will go." The king said, "If no child is to come, what will you do alone?" and with a sad heart he returned to his city.' },
        },
        {
          text: 'राजा ने रानी से कहा कि हम निरवंशी हैं, हमारा मुँह देखना भी धर्म नहीं है, और उसने भोजन भी नहीं किया। रानी बोली कि प्रभो, बृहस्पतिदेव ने हमें सब कुछ दिया है, वे हमें सन्तान भी अवश्य देंगे। उसी रात बृहस्पतिदेव ने राजा से स्वप्न में कहा कि हे राजा, सब चिन्ता छोड दे, तेरी रानी गर्भ से है।',
          meaning: { en: 'The king said to the queen, "We are childless, and it is not meet even to look at our faces," and he did not eat. The queen said, "Lord, Brihaspati has given us everything; he will surely give us a child too." That night Brihaspati said to the king in a dream, "O king, give up all worry; your queen is with child."' },
        },
        {
          text: 'नवें महीने रानी के गर्भ से एक सुन्दर पुत्र पैदा हुआ। राजा ने रानी से कहा कि स्त्री बिना भोजन के रह सकती है, पर बिना कहे नहीं रह सकती; जब मेरी बहन आए तो तुम उससे कुछ कहना मत। रानी ने हाँ कर दी। जब राजा की बहन ने शुभ समाचार सुना तो बहुत खुश हुई और बधाई लेकर आई, तभी रानी ने कह दिया कि घोडे पर चढकर नहीं, गधे पर चढकर आई है।',
          meaning: { en: 'In the ninth month a handsome son was born to the queen. The king said to the queen, "A woman can go without food but not without speaking; when my sister comes, do not say anything to her." The queen agreed. When the king\'s sister heard the good news she was very glad and came with congratulations; then the queen said, "She has come not on a horse but on a donkey."' },
        },
        {
          text: 'राजा की बहन बोली कि भाभी, मैं इस प्रकार न कहती तो तुम्हें सन्तान कैसे मिलती। बृहस्पतिदेव ऐसे ही हैं, जिसके मन में जैसी कामना होती है, सबकी पूरी करते हैं। जो सद्भावना से बृहस्पतिवार का व्रत करता है, कथा पढता या सुनता है, दूसरों को सुनाता है, बृहस्पतिदेव उसकी सब मनोकामनाएँ पूरी करते हैं।',
          meaning: { en: 'The king\'s sister said, "Sister-in-law, if I had not said it so, how would you have got a child?" Brihaspati is just so: he fulfils whatever wishes anyone holds in his heart. Whoever keeps the Thursday fast with good feeling, reads or hears the katha, or tells it to others, Brihaspati fulfils all his wishes.' },
        },
        {
          text: 'जैसे रानी और राजा ने सच्चे भाव से उनकी कथा का गुणगान किया तो बृहस्पतिदेव ने उनकी सब इच्छाएँ पूरी कीं। इसलिए पूरी कथा सुनकर प्रसाद लेकर ही जाना चाहिए और हृदय से जयकारा बोलना चाहिए: बोलो बृहस्पतिदेव की जय, भगवान विष्णु की जय।',
          meaning: { en: 'Just as the queen and the king sang the praises of his katha with sincere feeling and Brihaspati fulfilled all their wishes, so one should hear the whole katha and leave only after taking the prasada, and from the heart raise the cry: "Victory to Brihaspati Deva, victory to Lord Vishnu."' },
        },
      ],
    },
  ],
};
