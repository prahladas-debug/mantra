/**
 * Santoṣī Mātā Vrata: the rules of the fast and the kathā of the youngest daughter-in-law, in Hindi (Devanagari).
 * Collated Nov 2026 from typed web copies; not proofread against a single printed booklet.
 *
 * WITNESSES
 *   B  bhaktibharat.com, "Shukravar Santoshi Mata Vrat Katha" (full kathā with the vrata-vidhi and udyāpana inside the story). Base.
 *   H  hindupad.com, "Shukravar Vrat Katha in Hindi" (the same text as B, re-typed with full stops for commas; words identical
 *      in every paragraph read; B has more headings and quotation dashes).
 *   S  shubhpanchang.com/hi/vrat-kathas/friday (the same plot, shorter and in other words).
 *
 * CHOICES. B and H are one recension; S agrees in every episode (the mother's leftovers, the son's departure and the
 * couplets, the shop and the half-share, the firewood, the women's vrata, the letter and money, the dream of the husband,
 * the three loads of wood, the second house, the failed first udyāpana through the sour tamarind, the second udyāpana with
 * brahmin boys, the goddess's fearsome visit, the birth of the son). The vrata rules are given in the story itself (B H): sawā
 * (a quarter more than a round) quantity of gur and chana, nirāhāra Fridays, the kathā heard without a break, three months
 * for the fruit (a year if the planets are against one), the udyāpana with aḍhāī ser of flour for khājā, the same of kheer, chana
 * vegetable, eight boys, and no sour food in the house that day. Paragraphs of B and H are joined or split into units of
 * 2 to 5 sentences; direct speech is kept and, where speakers alternate, quoted in one unit. Spelling is lightly
 * normalised (no nukta; "खटाई", "बहू", "सास" as in the copies). Prices in "आने" and "सेर" are kept as printed.
 * Meanings are original.
 */
import type { Mantra } from '../types';

export const santoshiMataVrat: Mantra = {
  id: 'santoshi-mata-vrat',
  title: 'संतोषी माता व्रत कथा',
  titleEn: 'Santoshi Mata Vrat Katha',
  category: 'puja',
  order: 63,
  deity: 'Śrī Santoṣī Mātā',
  source: 'North Indian vrata-kathā for Friday (Śukravāra); popular printed and web copies',
  summary:
    'The Friday fast of Santoshi Mata: gud and chana as the offering, no sour food on the day, the katha of the youngest daughter-in-law who was sent for firewood and worked hardship into joy by Santoshi Mata\'s grace, her two udyapanas, and the rules for concluding the vow.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'व्रत का विधान',
      titleEn: 'The rules of the vrata',
      note: 'Kept on Fridays. Quantities and rules as stated in the katha itself.',
      verses: [
        {
          text: 'सवा आने का गुड और चना लें; इच्छा हो तो सवा पाँच आने का या सवा रुपये का, अपनी सुविधा के अनुसार। श्रद्धा और प्रेम से, बिना परेशानी के, जितना भी बन पडे सवाया लें।',
          meaning: { en: 'Take gud and chana worth a quarter more than a full measure: a "sava anna" worth, or if you wish sava five annas or sava rupee, as is convenient. Without fuss, with faith and love, take as much sava as you can.' },
        },
        {
          text: 'प्रत्येक शुक्रवार को निराहार रहकर कथा सुनें। कथा सुनने में क्रम न टूटे और नियम का पालन लगातार करें। सुनने वाला कोई न मिले तो घी का दीपक जलाकर उसके आगे, या जल का पात्र सामने रखकर, कथा कहें।',
          meaning: { en: 'Every Friday, fasting without food, listen to the katha. Let the sequence not break; keep the rules continuously. If there is no one to listen, light a ghee lamp, or set a vessel of water before you, and recite the katha to it.' },
        },
        {
          text: 'तीन महीने में माता फल पूरा करती हैं। यदि किसी के ग्रह खोटे भी हों तो भी माता वर्ष भर में कार्य सिद्ध करती हैं। कार्य सिद्ध होने पर उद्यापन करना चाहिए, बीच में नहीं।',
          meaning: { en: 'The Mother brings the fruit in three months. Even if one\'s planets are unfavourable, she accomplishes the task within a year. The udyapana should be done when the wish is fulfilled, not in between.' },
        },
        {
          text: 'उद्यापन में अढाई सेर आटे का खाजा बनाएँ, उतनी ही मात्रा में खीर और चने का साग भी। आठ लडकों को भोजन कराएँ, जहाँ तक मिलें देवर, जेठ और भाई-बन्धुओं के लडके; न मिलें तो रिश्तेदारों और पडोसियों के। उन्हें भोजन कराकर यथाशक्ति दक्षिणा दें और माता का नियम पूरा करें। उस दिन घर में कोई खटाई न खाए।',
          meaning: { en: 'For the udyapana make khaja from two and a half sers of flour, and kheer and chana vegetable in the same measure. Feed eight boys, as far as possible sons of brothers-in-law and relatives; if they are not to be had, of kinsfolk and neighbours. After the meal give each a gift as you can, and complete the Mother\'s rule. On that day let no one in the house eat anything sour.' },
        },
      ],
    },
    {
      title: 'संतोषी माता व्रत कथा',
      titleEn: 'The katha',
      note: 'Heard on Fridays. Gud and chana are kept in the hand and given as prasada after the katha.',
      verses: [
        {
          text: 'एक बुढिया थी, उसके सात बेटे थे। छह कमाने वाले थे और एक निकम्मा था। बुढिया छहों बेटों की रसोई बनाती, उन्हें भोजन कराती और उनसे जो कुछ जूठन बचती वह सातवें को दे देती।',
          meaning: { en: 'There was an old woman with seven sons. Six earned and one did nothing. She cooked for the six, fed them, and whatever leftovers remained she gave to the seventh.' },
        },
        {
          text: 'एक दिन वह अपनी पत्नी से बोला कि देखो, मेरी माँ को मुझ पर कितना प्रेम है। पत्नी बोली कि क्यों नहीं, सबका झूठा जो तुमको खिलाती है। वह बोला कि ऐसा नहीं हो सकता, जब तक आँखों से न देख लूँ मैं नहीं मान सकता। बहू हँसकर बोली कि देख लोगे तब तो मानोगे।',
          meaning: { en: 'One day he said to his wife, "See how much my mother loves me." She said, "Why not? She feeds you what everyone else has left." He said, "That cannot be; until I see it with my own eyes I will not believe it." The wife said with a laugh, "When you have seen, then you will believe."' },
        },
        {
          text: 'कुछ दिन बाद त्योहार आया। घर में सात प्रकार के भोजन और चूरमे के लड्डू बने। वह परखने के लिए सिर दुखने का बहाना करके पतला कपडा सिर पर ओढे रसोईघर में सो गया। वह कपडे में से सब देखता रहा। छहों भाई भोजन करने आए। उसने देखा कि माँ ने उनके लिए सुन्दर आसन बिछाए, नाना प्रकार की रसोई परोसी और आग्रह करके उन्हें जिमाया।',
          meaning: { en: 'A few days later a festival came. Seven kinds of food and laddus of churma were made in the house. To test it, he pretended to have a headache, covered his head with a thin cloth and lay down in the kitchen. Through the cloth he watched everything. The six brothers came to eat. He saw the mother spread fine seats for them, serve many kinds of food and press them to eat.' },
        },
        {
          text: 'जब छहों भोजन करके उठे तब माँ ने उनकी झूठी थालियों में से लड्डुओं के टुकडे उठाकर एक लड्डू बनाया। जूठन साफ करके माँ ने उसे पुकारा कि बेटा, छहों भाई भोजन कर गए, अब तू ही बाकी है, उठ, तू कब खाएगा। वह बोला कि माँ, मुझे भोजन नहीं करना, मैं अब परदेश जा रहा हूँ। माँ ने कहा कि कल जाता हो तो आज चला जा। वह बोला कि हाँ, आज ही जा रहा हूँ, और यह कहकर घर से निकल गया।',
          meaning: { en: 'When the six had eaten and risen, the mother gathered the pieces of laddu from their leftover plates and made one laddu. Having cleaned up, she called him: "Son, the six brothers have eaten; you alone are left; get up, when will you eat?" He said, "Mother, I do not want food; I am going abroad." She said, "If you are going tomorrow, go today." "Yes, I am going today," he said, and left the house.' },
        },
        {
          text: 'चलते समय उसे पत्नी की याद आई। वह गौशाला में उपले थाप रही थी। वहाँ जाकर वह बोला:\nहम जावे परदेश, आवेंगे कुछ काल ।\nतुम रहियो संतोष से, धर्म आपनो पाल ॥\nवह बोली:\nजाओ पिया आनन्द से, हमारो सोच हटाय ।\nराम भरोसे हम रहें, ईश्वर तुम्हें सहाय ॥\nदो निशानी आपन देख, धरूँ मैं धीर ।\nसुधि मति हमारी बिसारियो, रखियो मन गम्भीर ॥',
          meaning: { en: 'As he left he remembered his wife, who was in the cowshed patting dung cakes. He went there and said: "I go abroad and will return after some time; stay content and keep to your duty." She answered: "Go, dear, in happiness; put away your worry for us; we shall rest on God, and may He help you. Give me two tokens to hold and keep my courage; do not forget us, and keep a steady heart."' },
        },
        {
          text: 'वह बोला कि मेरे पास तो कुछ नहीं, यह अँगूठी है, इसे ले ले और अपनी कुछ निशानी मुझे दे। वह बोली कि मेरे पास क्या है, यह गोबर से भरा हाथ है। यह कहकर उसने उसकी पीठ पर गोबर के हाथ की थाप मार दी। वह चल दिया और चलते-चलते दूर देश पहुँचा।',
          meaning: { en: 'He said, "I have nothing but this ring; take it and give me some token of yours." She said, "What have I? Only this hand full of dung." And saying so she struck his back with a dung-smeared palm. He went on, and journeying came to a far country.' },
        },
        {
          text: 'वहाँ एक साहूकार की दुकान थी। वहाँ जाकर उसने कहा कि भाई, मुझे नौकरी पर रख लो। साहूकार को आदमी की जरूरत थी, उसने कहा कि रह जा। लडके ने पूछा कि तनख्वाह क्या दोगे। साहूकार ने कहा कि काम देखकर दाम मिलेंगे। कुछ दिनों में वह दुकान का सारा लेन-देन, हिसाब-किताब और बिक्री का काम करने लगा, और साहूकार के सात-आठ नौकर चक्कर खाने लगे कि यह तो बहुत होशियार बन गया।',
          meaning: { en: 'There was a moneylender\'s shop there. He went and said, "Brother, take me into your service." The moneylender needed help and said, "Stay." The lad asked, "What pay will you give?" The moneylender said, "You will get wages according to your work." In a few days he was doing all the shop\'s dealings, accounts and sales, and the seven or eight servants were bewildered that he had become so clever.' },
        },
        {
          text: 'सेठ ने भी काम देखा और तीन महीने में ही उसे आधे मुनाफे का हिस्सेदार बना लिया। वह कुछ वर्षों में ही नामी सेठ बन गया और मालिक सारा कारोबार उस पर छोडकर चला गया।',
          meaning: { en: 'The owner too saw his work, and within three months made him a partner for half the profits. Within a few years he became a well-known merchant, and the owner left the whole business to him.' },
        },
        {
          text: 'इधर उसकी पत्नी को सास-ससुर दुःख देने लगे। सारी गृहस्थी का काम कराके उसे लकडी लेने जंगल भेजते। घर के आटे से जो भूसी निकलती उसकी रोटी बनाकर रख दी जाती, और फूटे नारियल के खोल में पानी। एक दिन वह लकडी लेने जा रही थी कि रास्ते में उसे बहुत-सी स्त्रियाँ संतोषी माता का व्रत करती दिखाई दीं।',
          meaning: { en: 'Meanwhile his wife was ill-treated by her mother-in-law and father-in-law. They made her do all the housework and then sent her to the forest for firewood. A roti made of the bran from the household flour was kept for her, and water in the shell of a broken coconut. One day, as she was going for firewood, she saw on the way many women keeping the fast of Santoshi Mata.' },
        },
        {
          text: 'वह वहाँ खडी होकर कथा सुनने लगी और पूछा कि बहनो, तुम किस देवता का व्रत करती हो और उसके करने से क्या फल मिलता है। यदि इस व्रत का विधान मुझे समझाकर कहोगी तो मैं तुम्हारा बडा एहसान मानूँगी। तब उनमें से एक स्त्री बोली कि सुनो, यह संतोषी माता का व्रत है। इसके करने से निर्धनता और दरिद्रता का नाश होता है, और जो कामना मन में हो वह सब संतोषी माता की कृपा से पूरी होती है। तब उसने व्रत की विधि पूछी।',
          meaning: { en: 'She stood there listening to the katha and asked, "Sisters, which deity do you fast for, and what fruit comes of it? If you explain the rules to me I shall be most grateful." One of the women said, "Listen, this is the vrata of Santoshi Mata. It destroys poverty and want, and whatever wish one has is fulfilled by Santoshi Mata\'s grace." Then she asked for the method of the vrata.' },
        },
        {
          text: 'वह भक्तिन स्त्री बोली कि सवा आने का गुड-चना लेना, इच्छा हो तो सवा पाँच आने का या सवा रुपये का भी सुविधा के अनुसार। हर शुक्रवार निराहार रहकर कथा सुनना, क्रम टूटे नहीं। सुनने वाला कोई न मिले तो घी का दीपक जलाकर उसके आगे या जल के पात्र को सामने रखकर कथा कहना। कार्य सिद्ध न होने तक नियम का पालन करना और कार्य सिद्ध हो जाने पर उद्यापन करना। तीन महीने में माता फल पूरा करती हैं।',
          meaning: { en: 'The devout woman said, "Take gud and chana worth a sava anna, or sava five annas or a sava rupee as you can. Every Friday, fasting, listen to the katha without a break. If no one is there to hear, light a ghee lamp, or set a vessel of water before you, and tell the katha. Keep the rule until the wish is fulfilled, and do the udyapana when it is done. In three months the Mother brings the fruit."' },
        },
        {
          text: 'यदि किसी के ग्रह खोटे भी हों तो माता वर्ष भर में कार्य सिद्ध करती हैं; फल सिद्ध होने पर उद्यापन करना चाहिए, बीच में नहीं। उद्यापन में अढाई सेर आटे का खाजा तथा इसी परिमाण से खीर और चने का साग करना। आठ लडकों को भोजन कराना, जहाँ तक मिलें देवर, जेठ या भाई-बन्धुओं के, न मिलें तो रिश्तेदारों और पडोसियों को बुलाना। उन्हें भोजन कराकर यथाशक्ति दक्षिणा देना और माता का नियम पूरा करना। उस दिन घर में खटाई न खाना। यह सुनकर बुढिया के लडके की बहू चल दी।',
          meaning: { en: '"Even if one\'s planets are bad the Mother accomplishes the work within a year; do the udyapana when the fruit is won, not in the middle. For the udyapana make khaja from two and a half sers of flour, and kheer and chana vegetable in the same measure. Feed eight boys, sons of brothers-in-law or kin where possible, otherwise relatives and neighbours. Give them a gift as you can and complete the Mother\'s rule. That day eat nothing sour in the house." Hearing this the old woman\'s daughter-in-law went on her way.' },
        },
        {
          text: 'रास्ते में उसने लकडी का बोझ बेच दिया और उन पैसों से गुड-चना लेकर माता के व्रत की तैयारी करके आगे चली। सामने मन्दिर देखकर उसने पूछा कि यह मन्दिर किसका है। सबने कहा कि संतोषी माता का मन्दिर है। यह सुनकर वह माता के मन्दिर में जाकर चरणों में लोटने लगी और दीन होकर विनती करने लगी कि माँ, मैं निपट अज्ञानी हूँ, व्रत का कोई नियम नहीं जानती, मैं दुःखी हूँ; हे जगत्जननी माता, मेरा दुःख दूर कर, मैं तेरी शरण में हूँ।',
          meaning: { en: 'On the way she sold her bundle of wood and with the money bought gud and chana, preparing for the Mother\'s vrata, and went on. Seeing a temple she asked, "Whose temple is this?" Everyone said, "Santoshi Mata\'s temple." Hearing this she went in, fell at the Mother\'s feet and, in distress, prayed: "Mother, I am utterly ignorant, I know no rule of the vrata, I am sad; O Mother of the world, remove my sorrow, I am in your refuge."' },
        },
        {
          text: 'माता को दया आई। एक शुक्रवार बीता कि दूसरे शुक्रवार को उसके पति का पत्र आया, और तीसरे शुक्रवार को उसका भेजा हुआ पैसा आ पहुँचा। यह देखकर जेठ-जिठानी मुँह सिकोडने लगे और लडके ताने देने लगे कि काकी के पास पत्र आने लगे, रुपया आने लगा, अब तो काकी की खातिर बढेगी। बेचारी सरलता से कहती कि भैया, कागज आए, रुपया आए, हम सबके लिए अच्छा है।',
          meaning: { en: 'The Mother took pity. One Friday passed, and by the second Friday a letter from her husband came, and by the third the money he had sent arrived. Seeing this, the elder brother-in-law and his wife made faces, and the boys taunted, "Auntie gets letters now, money comes; now Auntie will be honoured!" The poor woman said simply, "Brother, if letters and money come, it is good for us all."' },
        },
        {
          text: 'ऐसा कहकर वह आँखों में आँसू भरकर संतोषी माता के मन्दिर में आई और चरणों में गिरकर रोने लगी कि माँ, मैंने तुमसे पैसा कब माँगा है, मुझे पैसे से क्या काम है; मुझे तो अपने सुहाग से काम है, मैं तो अपने स्वामी के दर्शन माँगती हूँ। तब माता ने प्रसन्न होकर कहा कि जा बेटी, तेरा स्वामी आएगा। यह सुनकर वह खुशी से बावली-सी होकर घर जाकर काम करने लगी।',
          meaning: { en: 'Saying this, with tears in her eyes she came to Santoshi Mata\'s temple, fell at her feet and wept: "Mother, when did I ask you for money? What use is money to me? I want only my husband; I ask for a sight of my lord." Then the Mother said, pleased, "Go, daughter, your husband will come." Hearing this she went home, nearly mad with joy, and set about her work.' },
        },
        {
          text: 'अब संतोषी माँ विचार करने लगीं कि इस भोली बेटी को मैंने कह तो दिया कि तेरा पति आएगा, लेकिन कैसे? वह तो इसे स्वप्न में भी याद नहीं करता। उसे याद दिलाने के लिए मुझे ही जाना पडेगा। इस प्रकार माता बुढिया के बेटे के पास स्वप्न में प्रकट होकर बोलीं कि साहूकार के बेटे, सो रहा है या जाग रहा है। वह बोला कि माता, न सोता हूँ न जागता हूँ, कहो क्या आज्ञा है।',
          meaning: { en: 'Now Santoshi Mata thought, "I have told this simple daughter that her husband will come; but how? He does not even remember her in a dream. I must go myself and remind him." So the Mother appeared in a dream to the old woman\'s son and said, "Moneylender\'s son, are you asleep or awake?" He said, "Mother, I am neither asleep nor awake; what is your command?"' },
        },
        {
          text: 'माँ ने कहा कि तेरे घर-बार कुछ है कि नहीं। वह बोला कि मेरे पास सब कुछ है, माँ-बाप हैं, बहू है, क्या कमी है। माँ बोलीं कि भोले पुत्र, तेरी बहू घोर कष्ट उठा रही है, तेरे माँ-बाप उसे परेशान कर रहे हैं, वह तेरे लिए तरस रही है, तू उसकी सुध ले। वह बोला कि हाँ माता, यह मालूम है, पर जाऊँ कैसे; परदेश की बात है, लेन-देन का कोई हिसाब नहीं, जाने का रास्ता नहीं सूझता।',
          meaning: { en: 'The Mother said, "Have you a home and family or not?" He said, "I have everything: parents, a wife; what is lacking?" She said, "Simple son, your wife is suffering terribly, your parents are troubling her, she longs for you; look after her." He said, "Yes, Mother, I know this, but how can I go? It is a foreign land, my dealings have no settled account, I see no way to leave."' },
        },
        {
          text: 'माँ कहने लगीं कि मेरी बात मान, सवेरे नहा-धोकर संतोषी माता का नाम ले, घी का दीपक जलाकर दण्डवत् कर और दुकान पर जा बैठ। देखते-देखते सारा लेन-देन चुक जाएगा, जमा का माल बिक जाएगा और साँझ होते-होते धन का भारी ढेर लग जाएगा। उसने वैसा ही किया: नहा-धोकर माता को दण्डवत् किया और दुकान पर बैठा। थोडी देर में देने वाले रुपये लाने लगे, लेने वाले हिसाब लेने लगे, और शाम तक धन का ढेर लग गया।',
          meaning: { en: '"Take my word. In the morning bathe, take Santoshi Mata\'s name, light a ghee lamp, prostrate, and sit in your shop. Soon all your dealings will be settled, the stock in hand will be sold, and by evening a great heap of wealth will have gathered." He did so: bathed, prostrated to the Mother and sat at his shop. Soon debtors brought money, creditors took their accounts, and by evening there was a heap of wealth.' },
        },
        {
          text: 'मन में माता का नाम लेकर इस चमत्कार को देख वह प्रसन्न हुआ और घर ले जाने के लिए गहने, कपडे और सामान खरीदने लगा। यहाँ का काम निपटाकर वह तुरन्त घर को रवाना हुआ।',
          meaning: { en: 'Taking the Mother\'s name in his heart and delighted at the miracle, he began buying ornaments, clothes and goods to take home. Having finished his work there, he set out for home at once.' },
        },
        {
          text: 'उधर उसकी पत्नी जंगल में लकडी लेने जाती और लौटते समय माताजी के मन्दिर में विश्राम करती; वह उसके रोज रुकने का स्थान ठहरा। एक दिन धूल उडती देख उसने माता से पूछा कि हे माता, यह धूल कैसे उड रही है। माता ने कहा कि हे पुत्री, तेरा पति आ रहा है। अब तू ऐसा कर कि लकडियों के तीन बोझ बना ले: एक नदी के किनारे रख, दूसरा मेरे मन्दिर पर और तीसरा अपने सिर पर।',
          meaning: { en: 'Meanwhile his wife went to the forest for wood and on her return rested at the Mother\'s temple, her daily halting place. One day, seeing dust rising, she asked the Mother, "Mother, why is dust rising?" The Mother said, "Daughter, your husband is coming. Do this: make three bundles of wood. Put one by the river, the second at my temple, and the third on your own head."' },
        },
        {
          text: '"तेरे पति को लकडियों का गट्ठर देखकर मोह पैदा होगा, वह यहाँ रुकेगा, नाश्ता-पानी करके माँ से मिलने जाएगा। तब तू लकडियों का बोझ उठाकर जाना और आँगन में गट्ठर डालकर जोर से आवाज लगाना कि लो सासूजी, लकडियों का गट्ठर लो, भूसी की रोटी दो, नारियल के खोल में पानी दो, आज मेहमान कौन आया है।" माताजी से बहुत अच्छा कहकर वह प्रसन्न मन से लकडियों के तीन गट्ठर बनाकर एक नदी के किनारे और एक माताजी के मन्दिर पर रख आई।',
          meaning: { en: '"Seeing the bundle of wood your husband will feel attachment; he will stop here, take refreshment and then go to meet his mother. Then you pick up your load, throw the bundle down in the courtyard and call out loudly: Here, mother-in-law, take the bundle of wood, give me the bran roti, give me water in the coconut shell; who is the guest who has come today?" Saying "very well" to the Mother, she made three bundles gladly and placed one by the river and one at the Mother\'s temple.' },
        },
        {
          text: 'इतने में मुसाफिर आ पहुँचा। सूखी लकडी देखकर उसकी इच्छा हुई कि हम यहीं विश्राम करें और भोजन बनाकर खा-पीकर गाँव जाएँ। इसी प्रकार रुककर, भोजन बनाकर और विश्राम करके वह गाँव गया और सबसे प्रेम से मिला। उसी समय सिर पर लकडी का गट्ठर लिए वह उतावली-सी आई, आँगन में भारी बोझ डालकर जोर से तीन बार आवाज दी कि लो सासूजी, लकडियों का गट्ठर लो, भूसी की रोटी दो; आज मेहमान कौन आया है।',
          meaning: { en: 'Meanwhile the traveller arrived. Seeing the dry wood he wished to rest there, cook, eat and drink, and then go to the village. So he halted, cooked, rested, and went to the village and met everyone lovingly. At that time she hurried in with the bundle of wood on her head, threw the heavy load down in the courtyard and called loudly three times, "Here, mother-in-law, take the bundle of wood, give me the bran roti; who is the guest who has come today?"' },
        },
        {
          text: 'यह सुनकर सास बाहर आई और अपने दिए हुए कष्टों को भुलाने के लिए बोली कि बहू, ऐसा क्यों कहती है, तेरा मालिक ही तो आया है; आ बैठ, मीठा भात खा, भोजन कर, कपडे-गहने पहन। उसकी आवाज सुनकर उसका पति बाहर आया और उसकी अँगूठी देखकर व्याकुल हो गया। उसने माँ से पूछा कि माँ, यह कौन है। माँ ने कहा कि बेटा, यह तेरी बहू है; जब से तू गया है तब से सारे गाँव में भटकती फिरती है, घर का काम-काज कुछ करती नहीं, चार पहर आकर खा जाती है।',
          meaning: { en: 'Hearing this the mother-in-law came out and, to cover the hardships she had given, said, "Daughter-in-law, why do you speak so? Your master himself has come; come, sit, eat sweet rice, eat, put on clothes and ornaments." Hearing her voice her husband came out and, seeing her ring, was distressed. He asked his mother, "Mother, who is this?" She said, "Son, this is your wife; since you went she wanders the whole village, does no housework, and comes at four watches to eat."' },
        },
        {
          text: 'वह बोला कि ठीक है माँ, मैंने इसे भी देखा और तुम्हें भी; अब दूसरे घर की चाबी दो, उसमें रहूँगा। माँ बोली कि जैसी तेरी मर्जी। तब उसने दूसरे मकान की तीसरी मंजिल का कमरा खोलकर सारा सामान जमाया। एक दिन में राजा के महल जैसा ठाट-बाट बन गया। अब क्या था, बहू सुख भोगने लगी। इतने में शुक्रवार आया।',
          meaning: { en: 'He said, "All right, Mother, I have seen her and you; now give me the key to the other house; I will live in it." The mother said, "As you please." Then he opened the room on the third floor of the other house and arranged all the goods. In one day it was as splendid as a king\'s palace. Now the wife lived in comfort. Then Friday came.' },
        },
        {
          text: 'उसने पति से कहा कि मुझे संतोषी माता के व्रत का उद्यापन करना है। पति बोला कि खुशी से कर लो। वह उद्यापन की तैयारी करने लगी और जिठानी के लडकों को भोजन के लिए कहने गई। उन्होंने मान लिया, परन्तु पीछे से जिठानी ने अपने बच्चों को सिखाया कि देखो, भोजन के समय खटाई माँगना, जिससे उसका उद्यापन पूरा न हो।',
          meaning: { en: 'She said to her husband, "I want to do the udyapana of Santoshi Mata\'s vrata." He said, "Do it gladly." She began the preparations and went to invite the elder sister-in-law\'s boys to the meal. They agreed, but behind her back the sister-in-law coached her children: "At the meal ask for something sour, so that her udyapana is not completed."' },
        },
        {
          text: 'लडके जीमने आए और पेट भरकर खीर खाई, परन्तु बाद में कहने लगे कि हमें खटाई दो, खीर खाना हमें नहीं भाता, देखकर अरुचि होती है। वह बोली कि भैया, खटाई किसी को नहीं दी जाएगी, यह तो संतोषी माता का प्रसाद है। लडके उठ खडे हुए और बोले कि पैसा लाओ। भोली बहू कुछ जानती नहीं थी, उसने उन्हें पैसे दे दिए, और लडके उसी समय हठ करके इमली की खटाई लेकर खाने लगे।',
          meaning: { en: 'The boys came to dine and ate their fill of kheer, but afterwards said, "Give us something sour; we do not like kheer, it disgusts us to look at it." She said, "Brothers, nothing sour will be given to anyone; this is Santoshi Mata\'s prasada." The boys stood up and said, "Bring money." The simple wife knew no better and gave them money, and the boys at once, insisting, bought tamarind and began to eat it.' },
        },
        {
          text: 'यह देखकर बहू पर माताजी ने कोप किया। राजा के दूत उसके पति को पकडकर ले गए। जेठ-जिठानी मनमाने वचन कहने लगे कि लूट-लूटकर धन इकट्ठा कर लाया है, अब सब मालूम पड जाएगा जब जेल की मार खाएगा। बहू से यह सहन नहीं हुआ।',
          meaning: { en: 'Seeing this, the Mother was angry with the wife. The king\'s messengers seized her husband and took him away. The elder brother-in-law and his wife said whatever they pleased: "He has gathered wealth by plunder; now it will all come out when he is beaten in jail." The wife could not bear this.' },
        },
        {
          text: 'रोती हुई वह माताजी के मन्दिर गई और बोली कि हे माता, तुमने क्या किया, हँसाकर अब भक्तों को रुलाने लगीं। माता बोलीं कि बेटी, तूने उद्यापन करके मेरा व्रत भंग किया है। वह कहने लगी कि माता, मैंने कुछ अपराध किया है, मैंने तो भूल से लडकों को पैसे दे दिए थे; मुझे क्षमा करो, मैं फिर तुम्हारा उद्यापन करूँगी। माँ बोलीं कि अब भूल मत करना। वह बोली कि अब भूल नहीं होगी; अब बताओ वे कैसे आएँगे।',
          meaning: { en: 'Weeping, she went to the Mother\'s temple and said, "Mother, what have you done? Having made me laugh you now make your devotees weep." The Mother said, "Daughter, by doing the udyapana you broke my vow." She said, "Mother, I did some wrong; I gave the boys money by mistake. Forgive me; I shall perform your udyapana again." The Mother said, "Do not make the mistake again." She said, "It will not happen again; now tell me how he will come."' },
        },
        {
          text: 'माँ बोलीं कि जा बेटी, तेरा पति तुझे रास्ते में आता मिलेगा। वह निकली तो राह में पति आता मिला। उसने पूछा कि कहाँ गए थे। वह बोला कि इतना धन जो कमाया है उसका कर राजा ने माँगा था, वह भरने गया था। वह प्रसन्न होकर बोली कि भला हुआ, अब घर को चलो। कुछ दिन बाद फिर शुक्रवार आया।',
          meaning: { en: 'The Mother said, "Go, daughter; you will meet your husband coming on the road." She set out and met her husband coming. She asked, "Where had you gone?" He said, "The king had asked for tax on the wealth I earned; I went to pay it." Glad, she said, "It is well; now come home." After some days Friday came again.' },
        },
        {
          text: 'वह बोली कि मुझे फिर माता का उद्यापन करना है। पति ने कहा कि करो। बहू फिर जेठ के लडकों को भोजन के लिए कहने गई। जिठानी ने एक-दो बातें सुनाईं और सब लडकों को सिखाने लगी कि तुम सब लोग पहले ही खटाई माँगना। लडके भोजन से पहले कहने लगे कि हमें खीर नहीं खानी, हमारा जी बिगडता है, कुछ खटाई खाने को दो।',
          meaning: { en: 'She said, "I must do the Mother\'s udyapana again." Her husband said, "Do." The wife again went to invite the elder brother-in-law\'s boys. The sister-in-law said a few harsh words and coached all the boys, "All of you ask for something sour right at the start." Before the meal the boys said, "We do not want kheer, it upsets us; give us something sour to eat."' },
        },
        {
          text: 'वह बोली कि खटाई किसी को नहीं मिलेगी, आना हो तो आओ। फिर वह ब्राह्मण के लडकों को लाकर भोजन कराने लगी और यथाशक्ति दक्षिणा की जगह एक-एक फल उन्हें दिया। संतोषी माता प्रसन्न हुईं।',
          meaning: { en: 'She said, "Nothing sour will be given to anyone; come if you want to." Then she brought brahmin boys and fed them, and in place of the gift, as she could, gave each of them a fruit. Santoshi Mata was pleased.' },
        },
        {
          text: 'माता की कृपा होते ही नवें मास में उसे चन्द्रमा के समान सुन्दर पुत्र प्राप्त हुआ। पुत्र को पाकर वह प्रतिदिन माताजी के मन्दिर जाने लगी। माँ ने सोचा कि यह रोज आती है, आज क्यों न इसके घर चलूँ। यह विचारकर माता ने भयानक रूप बनाया: गुड-चने से सना मुख, ऊपर सूँड जैसे होंठ, और उन पर भिनभिनाती मक्खियाँ।',
          meaning: { en: 'As soon as the Mother\'s grace came, in the ninth month she had a son beautiful as the moon. With the son she went to the Mother\'s temple every day. The Mother thought, "She comes every day; why not go to her house today?" So she took on a fearsome form: a face smeared with gud and chana, lips like a trunk, and flies buzzing on them.' },
        },
        {
          text: 'देहली पर पैर रखते ही सास चिल्लाई कि देखो रे, कोई चुडैल, डाकिन चली आ रही है; लडकों, इसे भगाओ, नहीं तो किसी को खा जाएगी। लडके भगाने लगे और चिल्लाकर खिडकियाँ बन्द करने लगे। बहू रोशनदान से देख रही थी; वह प्रसन्नता से पगली होकर चिल्लाने लगी कि आज मेरी माताजी मेरे घर आई हैं। वह बच्चे को दूध पिलाने से हटाती है, इतने में सास का क्रोध फट पडा।',
          meaning: { en: 'As she set foot on the threshold the mother-in-law screamed, "Look, a witch, a demoness is coming; boys, drive her away, or she will eat someone!" The boys began to chase her and shouted and shut the windows. The wife was watching through the ventilator; mad with joy she cried, "Today my Mother has come to my house!" She moved the baby from her breast, and just then the mother-in-law\'s anger burst out.' },
        },
        {
          text: 'वह बोली कि क्या उतावली हुई है, बच्चे को पटक दिया। इतने में माता के प्रताप से लडके ही लडके नजर आने लगे। बहू बोली कि माँ, मैं जिसका व्रत करती हूँ यह वही संतोषी माता हैं। सबने माताजी के चरण पकड लिए और विनती करके कहने लगे कि हे माता, हम मूर्ख हैं, अज्ञानी हैं, तुम्हारे व्रत की विधि हम नहीं जानते; व्रत भंग करके हमने बडा अपराध किया है, हे जगत्माता, आप हमारा अपराध क्षमा करो।',
          meaning: { en: 'She said, "What is this haste? You have dashed the child down!" Just then, by the Mother\'s power, nothing but boys was to be seen on every side. The wife said, "Mother, this is Santoshi Mata whose vrata I keep." All seized the Mother\'s feet and pleaded, "Mother, we are fools and ignorant; we do not know the rules of your vrata; by breaking the vrata we have committed a great offence; O Mother of the world, forgive our offence."' },
        },
        {
          text: 'इस प्रकार माता प्रसन्न हुईं। बहू को प्रसन्न होकर जैसा फल दिया, वैसा माता सबको दे, जो पढे उसका मनोरथ पूर्ण हो। बोलो संतोषी माता की जय!',
          meaning: { en: 'In this way the Mother was pleased. As she was pleased with the wife and gave her such fruit, so may the Mother give to all; may the wish of the one who reads this be fulfilled. Say: Victory to Santoshi Mata!' },
        },
      ],
    },
  ],
};
