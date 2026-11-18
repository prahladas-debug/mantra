/**
 * Nāga Pañcamī vrata for the serpent gods: the outline of the worship and three kathās, in Hindi.
 * Collated Nov 2026 from typed web copies; not proofread against a single printed booklet.
 *
 * WITNESSES
 *   B  bhaktibharat.com, "नाग पंचमी पौराणिक कथा (Nag Panchami Pauranik Katha)". Base for the first kathā (the seth's seven sons; the youngest
 *      daughter-in-law; the serpent brother; the necklace of jewels turned to a snake; the oath).
 *   P  patrika.com, "इस पौराणिक कथा को पढ़े बिना अधूरी है नाग पंचमी पूजा" (the same story in somewhat different words: the unspoken promise, the hot milk, the
 *      gold and the necklace); read for the order of events and the ending.
 *   A  astrobix.com, "नाग पंचमी कथा और पूजन विधि": the kathā of the farmer and the serpent (the plough, the three young snakes, the bitten
 *      family, the bowl of milk); the short kathā of the king's seven sons and the five nāgas in a dream; and the puja outline.
 *   S  shubhpanchang.com (hi), Nāga Pañcamī page: a Gujarati-Marathi tale (Rādhā and the nāginī, in a loose translation); read, but not
 *      used because its text is too corrupt to follow and it is of a different recension.
 *
 * CHOICES. B and P agree on the story of the youngest daughter-in-law, in the same order (the clay and the snake, the promise forgotten, "Sarp
 * bhaiyā namaskār", the sister's journey holding the tail, the hot milk, the gifts, the necklace and the queen, the husband's doubt, the
 * serpent's oath). B is followed. The farmer's kathā and the king's kathā rest on A alone and are given in brief. The Śrāvaṇa and Bhādrapada
 * fasts and the Śrāvaṇa vad / śukla difference between regions are not discussed. Spelling is lightly normalised (no nukta; standard
 * anusvāra). Meanings are original.
 */
import type { Mantra } from '../types';

export const nagPanchamiVrat: Mantra = {
  id: 'nag-panchami-vrat',
  title: 'नाग पंचमी व्रत कथा',
  titleEn: 'Nag Panchami Vrat Katha',
  category: 'puja',
  order: 75,
  deity: 'Nāga',
  source: 'North Indian vrata-kathā for Nāga Pañcamī (Śrāvaṇa śukla pañcamī), in honour of the serpent deities; popular printed and web copies',
  summary:
    'The serpent fast of the fifth day of Shravana: a brief outline of the worship and the katha of the merchant\'s youngest daughter-in-law who spared a snake and was taken as a sister by him, the necklace that turned to a serpent in the queen\'s neck, and the snake\'s oath to protect his sister, with two short kathas of the farmer\'s plough and of the king\'s childless son.',
  difficulty: 'easy',
  completeness: 'partial',
  contentNote:
    'The worship is given only as a brief outline of general practice (a snake drawn with cow-dung at the door, milk, durva grass and flowers, laddus and sweet offerings, no digging of the earth on this day); regional customs differ widely, and the Nag Panchami kathas of other regions (Gujarat, Maharashtra, Bengal and the Kaliya and Janamejaya legends) are not included. The Sanskrit nagas\' names and stotras are not included.',
  sections: [
    {
      title: 'पूजन का विधान',
      titleEn: 'The worship in outline',
      note: 'General practice only; regions and families differ.',
      verses: [
        {
          text: 'श्रावण शुक्ल पंचमी को नाग पंचमी मनाई जाती है। इस दिन सुबह स्नान आदि से निवृत्त होकर घर के दरवाजे पर पूजा के स्थान पर गोबर से नाग बनाया जाता है।',
          meaning: { en: 'Nag Panchami is observed on the bright fifth of Shravana. On this day, after bathing and the morning duties, a snake is made with cow-dung at the place of worship on the doorstep of the house.' },
        },
        {
          text: 'मुख्य द्वार के दोनों ओर दूध, दूब, कुशा, चन्दन, अक्षत और फूलों से नाग देवता की पूजा करते हैं। फिर लड्डू और मालपुए का भोग लगाते हैं। मान्यता है कि इस दिन नाग को दूध से स्नान कराने से सर्प का भय नहीं रहता।',
          meaning: { en: 'On both sides of the main door the serpent god is worshipped with milk, durva grass, kusha, sandal, rice grains and flowers. Then laddus and malpuas are offered. It is believed that bathing the serpent with milk on this day removes the fear of snakes.' },
        },
        {
          text: 'इस दिन घर की महिलाएँ उपवास रखकर विधि से नाग देवता की पूजा करती हैं, जिससे परिवार को सर्पदंश का भय नहीं रहता और सुख-समृद्धि बढती है। कहीं भोग के लिए सेवइयाँ और चावल बनाए जाते हैं और कहीं एक दिन पहले का बना भोजन इस दिन खाया जाता है।',
          meaning: { en: 'On this day the women of the house keep a fast and worship the serpent god by rule, by which the family has no fear of snakebite and gains in prosperity. In some places vermicelli and rice are made for the offering, and in some places food cooked the day before is eaten on this day.' },
        },
        {
          text: 'श्रावण मास में विशेषकर नाग पंचमी के दिन धरती खोदना, हल चलाना या नींव खोदना मना होता है। पूजा के समय नाग देवता का आवाहन करके उन्हें आसन दें और जल, फूल और चन्दन का अर्घ्य दें।',
          meaning: { en: 'In the month of Shravana, especially on Nag Panchami, digging the earth, ploughing or digging a foundation is forbidden. At the time of worship invite the serpent god, give him a seat, and offer arghya of water, flowers and sandal.' },
        },
      ],
    },
    {
      title: 'नाग पंचमी पौराणिक कथा',
      titleEn: 'The katha of the merchant\'s youngest daughter-in-law and the serpent brother',
      note: 'Heard on the day of Nag Panchami.',
      verses: [
        {
          text: 'प्राचीन काल में एक सेठजी के सात पुत्र थे और सातों का विवाह हो चुका था। सबसे छोटे पुत्र की पत्नी श्रेष्ठ चरित्र की, विदुषी और सुशील थी, परन्तु उसके कोई भाई नहीं था।',
          meaning: { en: 'In ancient times a merchant had seven sons, and all seven were married. The wife of the youngest son was of excellent character, learned and gentle, but she had no brother.' },
        },
        {
          text: 'एक दिन बडी बहू ने घर लीपने के लिए पीली मिट्टी लाने को सब बहुओं को साथ चलने को कहा, और सब डलिया तथा खुरपी लेकर मिट्टी खोदने लगीं। तभी वहाँ एक सर्प निकला, जिसे बडी बहू खुरपी से मारने लगी। यह देखकर छोटी बहू ने उसे रोका कि इसे मत मारो, यह बेचारा निरपराध है।',
          meaning: { en: 'One day the eldest daughter-in-law asked all the daughters-in-law to come along to bring yellow clay for plastering the house, and all began to dig clay with baskets and hoes. Just then a snake came out, and the eldest daughter-in-law began to strike it with the hoe. Seeing this, the youngest stopped her, saying, "Do not kill it; the poor creature is innocent."' },
        },
        {
          text: 'बडी बहू ने उसे नहीं मारा और सर्प एक ओर जा बैठा। तब छोटी बहू ने उससे कहा कि हम अभी लौटकर आती हैं, तुम यहाँ से जाना मत। यह कहकर वह सबके साथ मिट्टी लेकर घर चली गई और कामकाज में फँसकर सर्प से किया हुआ वादा भूल गई।',
          meaning: { en: 'The eldest did not kill it and the snake went and sat to one side. Then the youngest said to it, "We shall return in a moment; do not go away from here." Saying this she went home with the others carrying the clay and, caught up in her work, forgot the promise made to the snake.' },
        },
        {
          text: 'दूसरे दिन उसे वह बात याद आई तो सबको साथ लेकर वहाँ पहुँची और सर्प को उसी स्थान पर बैठा देखकर बोली कि सर्प भैया, नमस्कार। सर्प ने कहा कि तू भैया कह चुकी है, इसलिए तुझे छोड देता हूँ, नहीं तो झूठी बात कहने के कारण तुझे अभी डस लेता। वह बोली कि भैया, मुझसे भूल हो गई, क्षमा चाहती हूँ।',
          meaning: { en: 'The next day she remembered it, and going there with all the others and seeing the snake sitting at the same place she said, "Brother snake, salutations." The snake said, "Since you have called me brother, I let you go; otherwise, for your false word I would have bitten you at once." She said, "Brother, I made a mistake; I beg your pardon."' },
        },
        {
          text: 'तब सर्प बोला कि अच्छा, तू आज से मेरी बहन हुई और मैं तेरा भाई, तुझे जो माँगना हो माँग ले। वह बोली कि मेरा कोई भैया नहीं है, अच्छा हुआ कि तू मेरा भाई बन गया। कुछ दिन बीतने पर वह सर्प मनुष्य का रूप धरकर उसके घर आया और बोला कि मेरी बहन को भेज दो।',
          meaning: { en: 'Then the snake said, "Well, from today you are my sister and I your brother; ask whatever you want." She said, "I have no brother; it is good that you have become my brother." After some days that snake took the form of a man, came to her house and said, "Send my sister with me."' },
        },
        {
          text: 'सबने कहा कि इसके तो कोई भाई नहीं था। वह बोला कि मैं दूर के रिश्ते में इसका भाई हूँ, बचपन में ही बाहर चला गया था। उसके विश्वास दिलाने पर घर वालों ने छोटी बहू को उसके साथ भेज दिया। मार्ग में उसने बताया कि मैं वही सर्प हूँ, इसलिए डरना नहीं, और जहाँ चलने में कठिनाई हो वहाँ मेरी पूँछ पकड लेना।',
          meaning: { en: 'All said, "She had no brother." He said, "I am her brother by a distant relation; I went away in childhood." When he gave them assurance, the family sent the youngest daughter-in-law with him. On the way he told her, "I am that same snake, so do not be afraid, and where walking is difficult, hold my tail."' },
        },
        {
          text: 'उसने कहे अनुसार ही किया और इस प्रकार वह उसके घर पहुँच गई। वहाँ का धन-ऐश्वर्य देखकर वह चकित रह गई। एक दिन सर्प की माता ने उससे कहा कि मैं एक काम से बाहर जा रही हूँ, तू अपने भाई को ठंडा दूध पिला देना। उसे यह बात ध्यान न रही और उसने गर्म दूध पिला दिया, जिससे सर्प का मुख बुरी तरह जल गया।',
          meaning: { en: 'She did as told and so reached his home. She was amazed to see the wealth and splendour there. One day the snake\'s mother said to her, "I am going out on some errand; give your brother cold milk to drink." She did not remember this and gave him hot milk, by which the snake\'s mouth was badly burnt.' },
        },
        {
          text: 'यह देखकर सर्प की माता बहुत क्रोधित हुई, पर सर्प के समझाने पर चुप हो गई। तब सर्प ने कहा कि अब बहन को उसके घर भेज देना चाहिए। सर्प और उसके पिता ने उसे बहुत-सा सोना, चाँदी, जवाहरात, वस्त्र और आभूषण देकर उसके घर पहुँचा दिया।',
          meaning: { en: 'Seeing this the snake\'s mother was very angry, but she became quiet when the snake explained. Then the snake said, "Now the sister should be sent to her home." The snake and his father gave her much gold, silver, jewels, clothes and ornaments and took her to her home.' },
        },
        {
          text: 'इतना धन देखकर बडी बहू ने ईर्ष्या से कहा कि भाई तो बडा धनवान है, तुझे उससे और धन लाना चाहिए। सर्प ने यह वचन सुना तो सब वस्तुएँ सोने की लाकर दे दीं। फिर बडी बहू ने कहा कि इन्हें झाडने की झाडू भी सोने की होनी चाहिए, तब सर्प ने सोने की झाडू भी लाकर रख दी।',
          meaning: { en: 'Seeing so much wealth the eldest daughter-in-law said in envy, "Your brother is very rich; you should bring more wealth from him." The snake heard these words and brought everything in gold and gave it. Then the eldest said, "The broom to sweep these should be of gold too," and the snake brought a golden broom as well.' },
        },
        {
          text: 'सर्प ने छोटी बहू को हीरे-मणियों का एक अद्भुत हार भी दिया था। उसकी प्रशंसा उस देश की रानी ने सुनी तो राजा से बोली कि सेठ की छोटी बहू का हार यहाँ आना चाहिए। राजा ने मन्त्री को आज्ञा दी कि उससे वह हार लेकर शीघ्र उपस्थित हो। मन्त्री ने सेठजी से जाकर कहा तो सेठजी ने डर के कारण छोटी बहू से हार मँगाकर दे दिया।',
          meaning: { en: 'The snake had also given the youngest daughter-in-law a wonderful necklace of diamonds and gems. When the queen of that country heard its praise she said to the king, "The merchant\'s youngest daughter-in-law\'s necklace should come here." The king ordered the minister to take the necklace from her and come quickly. The minister went and told the merchant, and out of fear the merchant had the necklace fetched from the youngest daughter-in-law and gave it.' },
        },
        {
          text: 'छोटी बहू को यह बात बहुत बुरी लगी। उसने अपने सर्प भाई को याद किया और उसके आने पर प्रार्थना की कि भैया, रानी ने हार छीन लिया है, तुम कुछ ऐसा करो कि जब तक वह हार उसके गले में रहे तब तक सर्प बन जाए और जब वह मुझे लौटा दे तब हीरों और मणियों का हो जाए। सर्प ने ठीक वैसा ही किया, और जैसे ही रानी ने हार पहना वह सर्प बन गया। यह देखकर रानी चीख पडी और रोने लगी।',
          meaning: { en: 'The youngest daughter-in-law felt this very bad. She remembered her snake brother and when he came she prayed, "Brother, the queen has seized my necklace; do something so that as long as it stays on her neck it becomes a snake, and when she gives it back to me it becomes of diamonds and jewels again." The snake did exactly so, and as soon as the queen put on the necklace it became a snake. Seeing it the queen shrieked and began to cry.' },
        },
        {
          text: 'राजा ने सेठ के पास खबर भेजी कि छोटी बहू को तुरन्त भेजो। सेठजी डर गए और स्वयं उसे लेकर उपस्थित हुए। राजा ने पूछा कि तूने क्या जादू किया है, मैं तुझे दण्ड दूँगा। छोटी बहू बोली कि राजन्, धृष्टता क्षमा हो, यह हार ही ऐसा है कि मेरे गले में हीरों-मणियों का रहता है और दूसरे के गले में सर्प बन जाता है।',
          meaning: { en: 'The king sent word to the merchant, "Send the youngest daughter-in-law at once." The merchant was frightened and himself came with her. The king asked, "What magic have you done? I shall punish you." The youngest daughter-in-law said, "King, pardon my boldness; this necklace is such that on my neck it stays of diamonds and gems, and on another\'s it becomes a snake."' },
        },
        {
          text: 'यह सुनकर राजा ने सर्प बना हुआ हार उसे देकर कहा कि अभी पहनकर दिखाओ। छोटी बहू ने जैसे ही उसे पहना, वह हीरों-मणियों का हो गया। राजा को उसकी बात का विश्वास हो गया और उसने प्रसन्न होकर उसे बहुत-सी मुद्राएँ पुरस्कार में दीं। छोटी बहू अपने हार और धन सहित घर लौट आई।',
          meaning: { en: 'Hearing this the king gave her the necklace that had become a snake and said, "Put it on now and show." As soon as the youngest daughter-in-law put it on, it became of diamonds and jewels. The king believed her word and, pleased, gave her many gold coins as a reward. The youngest daughter-in-law returned home with her necklace and the money.' },
        },
        {
          text: 'उसका धन देखकर बडी बहू ने ईर्ष्या से उसके पति को सिखाया कि छोटी बहू के पास कहीं से धन आया है। यह सुनकर पति ने पत्नी को बुलाकर कहा कि ठीक-ठीक बता कि यह धन तुझे कौन देता है। तब वह सर्प को याद करने लगी, और उसी समय सर्प ने प्रकट होकर कहा कि यदि कोई मेरी धर्म बहन के आचरण पर सन्देह करेगा तो मैं उसे खा लूँगा।',
          meaning: { en: 'Seeing her wealth, the eldest daughter-in-law in envy told her husband, "The youngest has got wealth from somewhere." Hearing this the husband called his wife and said, "Tell me exactly who gives you this wealth." Then she began to think of the snake, and at that moment the snake appeared and said, "If anyone doubts the conduct of my sister by vow, I shall eat him."' },
        },
        {
          text: 'यह सुनकर छोटी बहू का पति बहुत प्रसन्न हुआ और उसने सर्प देवता का बडा सत्कार किया। उसी दिन से नाग पंचमी का त्योहार मनाया जाता है और स्त्रियाँ सर्प को भाई मानकर उसकी पूजा करती हैं।',
          meaning: { en: 'Hearing this the youngest daughter-in-law\'s husband was very glad and received the serpent god with great honour. From that very day the festival of Nag Panchami is celebrated, and women worship the snake, taking him as a brother.' },
        },
      ],
    },
    {
      title: 'किसान और नागिन की कथा',
      titleEn: 'The katha of the farmer and the serpent',
      note: 'One copy only; given in brief.',
      verses: [
        {
          text: 'एक किसान अपने दो पुत्रों और एक पुत्री के साथ रहता था। एक दिन खेत में हल चलाते समय किसान के हल के नीचे आने से नाग के तीन बच्चे मर गए। नागिन ने पहले विलाप किया, फिर अपनी सन्तान के हत्यारे से बदला लेने का विचार किया।',
          meaning: { en: 'A farmer lived with his two sons and a daughter. One day while he was ploughing a field, three young snakes came under the farmer\'s plough and died. The she-serpent first lamented, then thought of taking revenge on the killer of her children.' },
        },
        {
          text: 'रात के अँधेरे में नागिन ने किसान, उसकी पत्नी और दोनों लडकों को डस लिया। अगले दिन सवेरे किसान की पुत्री को डसने के लिए नागिन फिर चली, तो उस कन्या ने उसके सामने दूध का भरा कटोरा रख दिया और हाथ जोडकर क्षमा माँगने लगी।',
          meaning: { en: 'In the darkness of night the she-serpent bit the farmer, his wife and both sons. The next morning, when the she-serpent went again to bite the farmer\'s daughter, the girl set a bowl full of milk before her and with folded hands began to beg pardon.' },
        },
        {
          text: 'नागिन ने प्रसन्न होकर उसके माता-पिता और दोनों भाइयों को फिर से जीवित कर दिया। उस दिन श्रावण मास की शुक्ल पंचमी तिथि थी। तभी से नागों के कोप से बचने के लिए इस दिन नागों की पूजा की जाती है और नाग पंचमी का पर्व मनाया जाता है।',
          meaning: { en: 'Pleased, the she-serpent brought her parents and both brothers back to life. That day was the fifth lunar day of the bright fortnight of Shravana. From then on, to be saved from the serpents\' wrath, the serpents are worshipped on this day and the festival of Nag Panchami is celebrated.' },
        },
      ],
    },
    {
      title: 'राजा और पाँच नाग की कथा',
      titleEn: 'The katha of the king\'s son and the five serpents',
      note: 'One copy only; given in brief.',
      verses: [
        {
          text: 'एक राजा के सात पुत्र थे और सबका विवाह हो चुका था। छह पुत्रों के यहाँ सन्तान भी हो चुकी थी, पर सबसे छोटे की सन्तान की इच्छा पूरी नहीं हुई थी। सन्तानहीन होने से उन दोनों को घर और समाज में ताने सुनने पडते थे और पत्नी परेशान रहती थी, पर पति यही कहकर समझाता था कि सन्तान होना या न होना भाग्य के अधीन है।',
          meaning: { en: 'A king had seven sons and all were married. Six of the sons already had children, but the youngest son\'s wish for a child had not been fulfilled. Being childless, the two had to bear taunts at home and in society, and the wife was troubled, but the husband consoled her by saying that to have or not have a child is subject to fate.' },
        },
        {
          text: 'श्रावण शुक्ल पंचमी से पहले की रात उसे स्वप्न में पाँच नाग दिखे। उनमें से एक ने कहा कि बेटी, कल नाग पंचमी है, यदि तू इस दिन पूजन करेगी तो तुझे सन्तान प्राप्त हो सकती है। सवेरे उसने स्वप्न पति को सुनाया और पति ने कहा कि जैसा स्वप्न में देखा है वैसे ही नागों का पूजन कर देना। उसने उस दिन व्रत करके नागों का पूजन किया और समय आने पर उसे सन्तान-सुख मिला।',
          meaning: { en: 'On the night before the bright fifth of Shravana she saw five serpents in a dream. One of them said, "Daughter, tomorrow is Nag Panchami; if you worship on this day you can get a child." In the morning she told the dream to her husband, and the husband said, "Worship the serpents exactly as you saw in the dream." She kept the fast that day and worshipped the serpents, and in due time she got the joy of a child.' },
        },
      ],
    },
  ],
};
