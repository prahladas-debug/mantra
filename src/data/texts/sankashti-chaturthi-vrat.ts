/**
 * Saṅkaṣṭī (Sakaṭ) Caturthī vrata for Gaṇeśa: the outline of the puja and three kathās, in Hindi.
 * Collated Nov 2026 from typed web copies; not proofread against a single printed booklet.
 *
 * WITNESSES
 *   D  drikpanchang.com (hi), "लम्बोदर संकष्टी व्रत कथा" (Pārvatī's question; Gaṇeśa's answer at the Māgha caturthī; the story of Rṣiśarmā's widow, the
 *      potter, the kiln and King Hariścandra). Base for the first kathā; the outline's laddus are from it.
 *   P  patrika.com, "Sakat Chauth Ki Katha: व्रत के दिन पढ़ना जरूरी है सकट चौथ की कथा, जानें कुम्हार और बुढ़िया की कहानी" (the short
 *      folk form: the kiln that would not bake, the priest's counsel of a child a day, the old woman's son, the sakat supārī and dūrvā; also the
 *      end of the fast with arghya to the Moon). Base for the second kathā.
 *   B  bhaktibharat.com, "सकट चौथ पौराणिक व्रत कथा - श्री महादेवजी पार्वती" (the game of caupaḍ on the Narmadā, the straw boy as witness, the curse,
 *      the nāga-girls, the boy's twelve-day fast, Śiva's twenty-one days, Pārvatī and Kārttikeya). Base for the third kathā.
 *   N  navbharatlive.com, "भालचंद्र संकष्टी चतुर्थी" (6 Mar 2026): the kathā of Gaṇeśa and Kārttikeya going round the earth; read for the
 *      puja's usage only, the kathā is not included.
 *   S  shubhpanchang.com and sanatanajourney.com Sakat Chauth pages: listed for comparison; their pages gave no copy of the text that could be read here.
 *
 * CHOICES. D tells the potter and the widow's son in the form of the Gaṇeśa Purāṇa (King Hariścandra; the Brahmin Ṛṣiśarmā who died at the son's
 * birth; Māgha; the boy's drowned kiln; the potter's confession) and P in the shorter folk form (a child sacrificed a day; the old woman's lad;
 * the children restored). They agree on the kiln that bakes, the child untouched in it, the faith in Gaṇeśa, the king's order to the people; each
 * is given whole in its own section. In D the potter's tantric advice is to sacrifice a child once; in P the priest advises a daily sacrifice. They are
 * not merged. B is followed for the third. No stotra is printed. Spelling is lightly normalised (no nukta; standard anusvāra). Meanings are original.
 */
import type { Mantra } from '../types';

export const sankashtiChaturthiVrat: Mantra = {
  id: 'sankashti-chaturthi-vrat',
  title: 'संकष्टी चतुर्थी व्रत कथा',
  titleEn: 'Sankashti Ganesh Chaturthi Vrat Katha',
  category: 'puja',
  order: 73,
  deity: 'Śrī Gaṇeśa',
  source: 'North Indian vrata-kathā for Saṅkaṣṭī (Sakaṭ) Caturthī, the fourth lunar day of the dark fortnight, in honour of Gaṇeśa; the Lambodara-saṅkaṣṭī kathā (Gaṇeśa Purāṇa tradition) and popular printed and web copies',
  summary:
    'The Ganesha fast of the dark fourth: a brief outline of the puja and the katha of the widow\'s five-year-old son whom a potter shut in his kiln and who came out unharmed because of his mother\'s Sankashti fast, told in the form King Harishchandra heard, then in its short folk form (Sakat Chauth), and a third short katha of Shiva, Parvati and the boy who kept Ganesha\'s fast.',
  difficulty: 'easy',
  completeness: 'partial',
  contentNote:
    'The puja is given only as a brief outline of general practice (fast till moonrise, sixteen-part worship of Ganesha, durva and til laddus, arghya to the Moon, hearing the katha); the monthly names of Ganesha and the rules of each month, the moonrise tables and the Sanskrit stotras are not included. The tale of Ganesha going round his parents (Bhalchandra Sankashti) and the Sakat Chauth kathas of King Harishchandra and of the moneylender and his wife (bhaktibharat.com) are not included.',
  sections: [
    {
      title: 'व्रत का विधान',
      titleEn: 'The fast and the puja in outline',
      note: 'General practice only; families follow their own tradition.',
      verses: [
        {
          text: 'संकष्टी चतुर्थी का व्रत हर मास के कृष्ण पक्ष की चतुर्थी को गणेश जी के लिए रखा जाता है। यह व्रत संकटों को दूर करने वाला माना जाता है और माताएँ इसे सन्तान के कल्याण के लिए भी करती हैं।',
          meaning: { en: 'The Sankashti Chaturthi fast is kept for Ganesha on the fourth lunar day of the dark fortnight of every month. This fast is held to remove troubles, and mothers also keep it for the welfare of their children.' },
        },
        {
          text: 'सुबह सूर्योदय के साथ व्रत आरम्भ होता है और रात में चन्द्रमा को अर्घ्य देने के बाद पूरा होता है। दिन में गणेश जी की षोडशोपचार पूजा की जाती है और पूजा के बाद कथा सुनी या पढी जाती है।',
          meaning: { en: 'The fast begins at sunrise and is completed at night after giving arghya to the Moon. During the day Ganesha is worshipped with the sixteen offerings, and after the puja the katha is heard or read.' },
        },
        {
          text: 'लम्बोदर संकष्टी की पूजा में तिल के दस लड्डू बनाए जाते हैं। पाँच लड्डू देवता को चढाएँ और पाँच ब्राह्मण को भक्तिपूर्वक पूजकर दक्षिणा के साथ दान करें। गणेश जी को दूर्वा भी चढाई जाती है।',
          meaning: { en: 'In the Lambodara Sankashti puja ten laddus of sesame are made. Offer five laddus to the deity and give five to a brahmin, worshipping him with devotion and giving a gift. Durva grass is also offered to Ganesha.' },
        },
      ],
    },
    {
      title: 'लम्बोदर संकष्टी कथा',
      titleEn: 'The katha of Rishisharma\'s widow and King Harishchandra',
      note: 'As Ganesha told it to Parvati.',
      verses: [
        {
          text: 'देवी पार्वती ने पूछा कि हे वत्स, माघ मास की कृष्ण चतुर्थी को गणेश जी के किस रूप का पूजन करना चाहिए। गणेश जी ने कहा कि हे माता, माघ में लम्बोदर नामक गणेश का षोडशोपचार से पूजन करना चाहिए। इस सम्बन्ध में मैं आपको राजा हरिश्चन्द्र की कथा सुनाता हूँ।',
          meaning: { en: 'Goddess Parvati asked, "Child, in which form of Ganesha should one worship on the dark fourth of the month of Magha?" Ganesha said, "Mother, in Magha one should worship Ganesha named Lambodara with the sixteen offerings. In this connection I tell you the story of King Harishchandra."' },
        },
        {
          text: 'सतयुग में हरिश्चन्द्र नाम के एक अत्यन्त प्रतापी राजा थे जो क्षत्रिय धर्म का पालन करते, सत्यनिष्ठ और धर्मात्मा थे और विद्वान ब्राह्मणों का सम्मान करते थे। उनके राज्य में कोई दीन, दुःखी या दरिद्र नहीं था और सारी प्रजा निरोगी थी। उन्हीं के राज्य में ऋषिशर्मा नाम के एक धर्मात्मा ब्राह्मण रहते थे।',
          meaning: { en: 'In the Satya Yuga there was a very mighty king named Harishchandra, who kept the duty of a kshatriya, was truthful and righteous, and honoured learned brahmins. In his kingdom there was no one wretched, sorrowful or poor, and all the people were free from disease. In his kingdom lived a righteous brahmin named Rishisharma.' },
        },
        {
          text: 'एक पुत्र के जन्म लेते ही ऋषिशर्मा का देहान्त हो गया। उनकी विधवा पत्नी भिक्षा माँगकर पुत्र का पालन करती थी। एक समय उस ब्राह्मणी ने माघ मास की संकटा चतुर्थी का व्रत किया। वह सदा गोबर से गणेश जी की प्रतिमा बनाकर पूजा करती थी, और भिक्षा से मिली सामग्री से उसने तिल के दस लड्डू बनाए।',
          meaning: { en: 'As soon as a son was born, Rishisharma died. His widow brought up the son by begging. Once that Brahmin woman kept the fast of the Sankata Chaturthi of Magha. She always made an image of Ganesha with cow-dung and worshipped it, and from the things got by begging she made ten laddus of sesame.' },
        },
        {
          text: 'जब वह पूजा की तैयारी कर रही थी, तभी उसके पाँच वर्ष के पुत्र ने गणेश जी की मूर्ति को डोरी में बाँधकर गले में डाल लिया और खेलने के लिए कहीं बाहर चला गया। बाहर एक कुम्हार घूम रहा था, उसने ब्राह्मणी के पुत्र को मिट्टी के बर्तन पकाने वाले आँवे में, अर्थात् एक गहरे गड्ढे में जिसमें भीषण आग दहकती रहती है, बन्द करके आग जला दी।',
          meaning: { en: 'While she was preparing for the puja, her five-year-old son tied the image of Ganesha on a string, hung it round his neck and went out somewhere to play. A potter was moving about outside; he shut the Brahmin woman\'s son in the kiln for baking clay pots, a deep pit in which a fierce fire keeps burning, and lit the fire.' },
        },
        {
          text: 'कुछ देर बाद पुत्र को घर में न पाकर उसकी माता बहुत व्याकुल हुई और उसे खोजने लगी। खोजने पर भी कोई समाचार न मिला तो वह द्रवित हृदय से गणेश जी की स्तुति करती हुई बोली कि हे विघ्नहर्ता, हे गजबदन, मुझ दीन की रक्षा कीजिए, हे अनाथों के नाथ, मेरा पुत्र कहीं नहीं मिल रहा, आप उसकी रक्षा कीजिए। वह इसी प्रकार आधी रात तक प्रार्थना करती रही।',
          meaning: { en: 'Some time later, not finding her son in the house, his mother became very anxious and began to search for him. When even a search gave no news, she praised Ganesha with a melting heart and said, "O remover of obstacles, O elephant-faced, protect me, a wretched woman; O Lord of the helpless, my son is nowhere to be found; protect him." In this way she kept praying till midnight.' },
        },
        {
          text: 'प्रातःकाल कुम्हार ने पके हुए बर्तन लेने के लिए आँवा खोला तो उसमें जाँघ तक जल भरा था और वह बालक सकुशल खेल रहा था। इस अद्भुत घटना से भयभीत होकर कुम्हार ने राजदरबार में जाकर महाराज हरिश्चन्द्र से अपना पाप कह सुनाया और कहा कि मैं वध के योग्य हूँ।',
          meaning: { en: 'In the morning when the potter opened the kiln to take the baked pots, it was full of water up to the thigh and the boy was safe and playing. Frightened by this wonder, the potter went to the royal court and told King Harishchandra his sin, saying, "I deserve to be put to death."' },
        },
        {
          text: 'कुम्हार ने कहा कि अपनी कन्या के विवाह के लिए मैंने मिट्टी के पात्र पकाने को कई बार आँवा लगाया, पर सब कच्चे रह गए। भयभीत होकर मैं एक तान्त्रिक के पास गया, उसने गुप्त रूप से एक बालक की बलि चढाने की सलाह दी। उसी समय मुझे यह बालक दिखा और मैंने इसे आँवे में बिठाकर आग लगा दी। सोचा था कि ऋषिशर्मा मर चुका है और उसकी पत्नी भिक्षा से जीती है, वह इस पुत्र का क्या करेगी।',
          meaning: { en: 'The potter said, "To marry off my daughter I lit the kiln several times to bake clay pots, but all stayed raw. In fear I went to a tantric, who advised me to offer a child in secret sacrifice. At that moment I saw this boy and I sat him in the kiln and set it alight. I thought, \'Rishisharma is dead and his wife lives on alms; what will she do with this son?\'"' },
        },
        {
          text: 'राजा को भी बडा आश्चर्य हुआ और वे स्वयं बालक से मिलने आए। आँवे में जाँघ भर जल, कमल का फूल और दूर्वा देखकर और बालक को खेलता देखकर राजा ने कहा कि यह किसका बालक है और इसे अग्नि से कोई हानि कैसे नहीं हुई। राजा के इतना कहते ही ब्राह्मणी विलाप करती हुई वहाँ पहुँच गई और उसने अपने बालक को हृदय से लगा लिया।',
          meaning: { en: 'The king too was greatly amazed and came himself to meet the boy. Seeing the thigh-deep water, the lotus flower and the durva in the kiln, and the boy playing, the king said, "Whose child is this, and how has the fire done him no harm?" As the king said this the Brahmin woman reached the place weeping and clasped her child to her heart.' },
        },
        {
          text: 'राजा हरिश्चन्द्र ने ब्राह्मणी से पूछा कि क्या तुम कोई माया जानती हो या तुमने कोई पुण्यकर्म किया है जिससे यह बालक भीषण आग से भी सुरक्षित रहा। ब्राह्मणी ने कहा कि हे राजन्, मैं न माया जानती हूँ, न जप-तप, ध्यान या दान-पुण्य के विधान; मैं तो संकटनाशक गणेश चतुर्थी का व्रत नियम से करती हूँ, उसी का यह प्रभाव है कि मेरा पुत्र सकुशल है।',
          meaning: { en: 'King Harishchandra asked the Brahmin woman, "Do you know some magic, or have you done some meritorious deed, by which this boy was safe even from a fierce fire?" The Brahmin woman said, "O king, I know neither magic nor the rites of japa, austerity, meditation or charity; I only keep the Sankata-nashana Ganesha Chaturthi fast regularly, and it is its power that my son is unharmed."' },
        },
        {
          text: 'यह सुनकर राजा ने कहा कि मेरे राज्य की सारी प्रजा को यह संकटनाशन व्रत करना चाहिए। राजा ने ब्राह्मणी की परिक्रमा करते हुए कहा कि हे सुलक्षणी, तुम धन्य हो। फिर उन्होंने समस्त प्रजा को गणेश जी का व्रत करने का आदेश दिया, और उसी समय से प्रतिमास सब लोग गणेश चतुर्थी का व्रत करने लगे।',
          meaning: { en: 'Hearing this the king said, "All the people of my kingdom should keep this trouble-removing fast." Going round the Brahmin woman the king said, "O woman of good signs, you are blessed." Then he ordered all the people to keep Ganesha\'s fast, and from that time everyone began to keep the Ganesha Chaturthi fast every month.' },
        },
      ],
    },
    {
      title: 'सकट चौथ की लोक कथा',
      titleEn: 'The folk katha of the potter and the old woman',
      note: 'The short form heard on Sakat Chauth.',
      verses: [
        {
          text: 'एक नगर में एक कुम्हार रहता था। एक बार उसने मिट्टी के बर्तन बनाकर आँवे में डाले, पर वे पके नहीं। वह परेशान होकर राजा के पास पहुँचा और अपनी समस्या बताई। राजा ने राजपुरोहित को बुलाकर कारण पूछा तो पुरोहित ने कहा कि यदि रोज आँवा लगाने से पहले गाँव के एक घर से एक बच्चे की बलि दी जाए तो यह आँवा रोज पकने लगेगा।',
          meaning: { en: 'In a city there lived a potter. Once he made clay pots and put them in the kiln, but they did not bake. Troubled, he went to the king and told his problem. The king called the royal priest and asked the cause; the priest said, "If each day, before the kiln is lit, a child is sacrificed from one house of the village, this kiln will bake daily."' },
        },
        {
          text: 'राजा ने इस सलाह पर मुहर लगाकर ऐसा करने का आदेश दे दिया। अब रोज हर परिवार से एक बच्चे की बलि दी जाने लगी। कुछ दिनों बाद एक बुढिया के लडके की बारी आई। वह अपने इकलौते लडके को, जो उसके बुढापे का सहारा था, बलि के लिए नहीं भेजना चाहती थी। बलि के उसी दिन सकट चौथ भी थी।',
          meaning: { en: 'The king approved this advice and ordered it done. Now a child from one family was sacrificed each day. After some days the turn of an old woman\'s boy came. She did not want to send her only son, the support of her old age, for the sacrifice. On the very day of the sacrifice it was also Sakat Chauth.' },
        },
        {
          text: 'बुढिया ने बेटे को बलि पर भेजने से पहले सकट की सुपारी और दूब देकर कहा कि भगवान गणेश का नाम लेकर आँवे में बैठ जाना, सकट माता तुम्हारी रक्षा करेंगी। जब बुढिया के बेटे को आँवे में बिठाया गया तो बुढिया अपने बेटे की रक्षा के लिए पूजा-पाठ करने लगी।',
          meaning: { en: 'Before sending her son to the sacrifice the old woman gave him the sakat betel nut and durva grass and said, "Take Lord Ganesha\'s name and sit in the kiln; Mother Sakat will protect you." When the old woman\'s son had been seated in the kiln, she began worship and prayer for his protection.' },
        },
        {
          text: 'बुढिया के पूजा-पाठ के प्रभाव से जो आँवा पहले कई दिन में पकता था वह इस बार एक ही रात में पक गया। सुबह कुम्हार ने देखा कि आँवा पक चुका है और बुढिया का बेटा भी सही-सलामत है। सकट माता की कृपा से जिन बच्चों की पहले बलि दी गई थी वे भी जी उठे। तभी से नगरवासी माँ सकट की पूजा और व्रत करने लगे।',
          meaning: { en: 'By the power of the old woman\'s worship, the kiln that earlier took many days to bake was baked this time in a single night. In the morning the potter saw that the kiln had baked and the old woman\'s son too was safe. By Mother Sakat\'s grace the children who had been sacrificed earlier also came to life. From then on the townspeople began to worship and fast for Mother Sakat.' },
        },
      ],
    },
    {
      title: 'महादेव-पार्वती की पौराणिक कथा',
      titleEn: 'The katha of Mahadev, Parvati and the boy',
      note: 'Short form of the Sakat Chauth legend.',
      verses: [
        {
          text: 'एक बार महादेव जी पार्वती जी सहित नर्मदा के तट पर गए। वहाँ एक सुन्दर स्थान पर पार्वती जी ने महादेव जी के साथ चौपड खेलने की इच्छा की। शिव जी ने कहा कि हमारी हार-जीत का साक्षी कौन होगा। पार्वती ने तुरन्त वहाँ की घास के तिनके बटोरकर एक पुतला बनाया, उसमें प्राण-प्रतिष्ठा की और कहा कि बेटा, खेल के अन्त में तुम हमारी हार-जीत के साक्षी होकर बताना कि कौन जीता और कौन हारा।',
          meaning: { en: 'Once Mahadev went with Parvati to the bank of the Narmada. At a beautiful place Parvati wished to play a game of chaupar with Mahadev. Shiva said, "Who will be the witness of our winning and losing?" Parvati at once gathered blades of grass there and made a figure, gave it life, and said, "Son, at the end of the game you must be the witness of our win and loss and tell who won and who lost."' },
        },
        {
          text: 'खेल शुरू हुआ और दैवयोग से तीनों बार पार्वती जी ही जीतीं, पर जब अन्त में बालक से निर्णय कराया गया तो उसने महादेव जी को विजयी बताया। इस पर पार्वती जी ने क्रुद्ध होकर उसे एक पाँव से लंगडा होने और वहीं कीचड में पडे रहकर दुःख भोगने का शाप दे दिया।',
          meaning: { en: 'The game began, and by fate Parvati won all three times, but when at the end the boy was asked to decide, he declared Mahadev the winner. At this Parvati in anger cursed him to become lame in one foot and to lie in the mud there and suffer.' },
        },
        {
          text: 'बालक ने विनम्रता से कहा कि माँ, अज्ञानवश मुझसे ऐसा हो गया है, मैंने कुटिलता या द्वेष से ऐसा नहीं किया, मुझे क्षमा करें और शाप से मुक्ति का उपाय बताएँ। माता को उस पर दया आई और वे बोलीं कि यहाँ नाग-कन्याएँ गणेश-पूजन के लिए आएँगी, उनके उपदेश से तुम गणेश व्रत करके मुझे प्राप्त करोगे। यह कहकर वे कैलास पर्वत चली गईं।',
          meaning: { en: 'The boy said humbly, "Mother, this happened from ignorance; I did not do it from crookedness or malice; forgive me and tell me the way to be freed from the curse." The Mother felt pity for him and said, "Naga girls will come here to worship Ganesha; by their teaching you will keep Ganesha\'s fast and win me back." Saying this she went to Mount Kailasa.' },
        },
        {
          text: 'एक वर्ष बाद श्रावण में नाग-कन्याएँ गणेश-पूजन के लिए आईं और उन्होंने उस बालक को भी गणेश व्रत की विधि बताई। बालक ने बारह दिन तक गणेश जी का व्रत किया। तब गणेश जी ने दर्शन देकर कहा कि मैं तुम्हारे व्रत से प्रसन्न हूँ, मनचाहा वर माँगो। बालक ने माँगा कि मेरे पाँव में इतनी शक्ति दो कि मैं कैलास पर माता-पिता के पास पहुँच सकूँ और वे मुझ पर प्रसन्न हों। गणेश जी तथास्तु कहकर अन्तर्धान हो गए और बालक शिव जी के चरणों में पहुँच गया।',
          meaning: { en: 'A year later, in Shravana, the naga girls came to worship Ganesha and told the boy also the method of Ganesha\'s fast. The boy kept Ganesha\'s fast for twelve days. Then Ganesha appeared and said, "I am pleased with your fast; ask a boon you wish." The boy asked, "Give my feet so much strength that I can reach my parents on Kailasa and they may be pleased with me." Saying "So be it" Ganesha vanished, and the boy reached Shiva\'s feet.' },
        },
        {
          text: 'शिव जी ने पूछा तो बालक ने सारी कथा सुनाई। उसी दिन से पार्वती शिव जी से भी अप्रसन्न होकर विमुख हो गई थीं, इसलिए शंकर जी ने भी बालक की तरह इक्कीस दिन गणेश जी का व्रत किया, जिसके प्रभाव से पार्वती के मन में स्वयं महादेव जी से मिलने की इच्छा जागी और वे शीघ्र कैलास पर आ पहुँचीं। शिव जी ने उन्हें गणेश व्रत का इतिहास सुनाया।',
          meaning: { en: 'Shiva asked, and the boy told the whole story. Since that day Parvati had become displeased and turned away even from Shiva, so Shankara too kept Ganesha\'s fast for twenty-one days like the boy, by the power of which the wish to meet Mahadev arose in Parvati\'s mind and she came quickly to Kailasa. Shiva told her the history of Ganesha\'s fast.' },
        },
        {
          text: 'तब पार्वती जी ने अपने पुत्र कार्तिकेय से मिलने की इच्छा से इक्कीस दिन तक इक्कीस-इक्कीस दूर्वा, फूल और लड्डुओं से गणेश जी का पूजन किया। इक्कीसवें दिन कार्तिकेय स्वयं ही माता से आ मिले। माँ के मुख से इस व्रत का माहात्म्य सुनकर कार्तिकेय ने भी यह व्रत किया।',
          meaning: { en: 'Then Parvati, wishing to meet her son Kartikeya, worshipped Ganesha for twenty-one days with twenty-one durva blades, flowers and laddus each day. On the twenty-first day Kartikeya came of himself and met his mother. Hearing the greatness of this fast from his mother\'s mouth, Kartikeya also kept the fast.' },
        },
      ],
    },
  ],
};
