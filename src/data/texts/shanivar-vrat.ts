/**
 * Shanivar (Saturday) vrata for Śanideva: the outline of the puja and the kathā of King Vikramāditya, in Hindi.
 * Collated Nov 2026 from typed web copies; not proofread against a single printed booklet.
 *
 * WITNESSES
 *   S  shubhpanchang.com/hi/vrat-kathas/saturday ("शनिवार व्रत कथा"). Base (the nine metals; the horse-dealer; the peg that swallows the necklace;
 *      the oilman; the Megh Malhar; the princess; the dream; the second marriage; the proclamation).
 *   J  aajtak.in, "शनिवार व्रत कथा (Shanivar Vrat Katha)" (the same plot, shorter; the king gives the false name Vīkā; the princess is Manabhāvanī).
 *   D  drikpanchang.com (hi), "भगवान शनिदेव एवं राजा विक्रमादित्य की कथा" (the same plot, fullest in the details of the marriage and
 *      the return to Ujjain; the king calls himself Vīkā; the princess Mānabhavanī and the merchant's daughter Śrīkambarī).
 *   H  hindupad.com, "शनिवार व्रत कथा" (the same plot as S).
 *   R  Puja outline: navbharatlive.com (Shani puja steps: bath at dawn, the image washed with water, jaggery, black cloth, black sesame,
 *      black urad dal and mustard oil, the Chalisa and katha, an offering of puri and urad-dal khichdi, aarti) and amarujala.com
 *      (the sesame-oil lamp at a Shani temple or under a peepal tree; offering of black sesame, urad and oil). General practice
 *      only; the outline is therefore uncertain.
 *
 * CHOICES. S, J and D agree on the plot. S is followed paragraph by paragraph. The names differ in the copies (Vīkā in J and D;
 * the princess Mohinī in S, Manabhāvanī in J, Mānabhavanī in D; the merchant's daughter Śrīkambarī in D), so no names are
 * used; the king is called "the king" and "the princess". S's list of the nine metals (gold, silver, bronze, copper, lead, tin, zinc, mica, iron) is
 * kept (J has brass for copper). S's lengths of the planets' stays (sun a month, moon two and a quarter days, Mars a month and a half,
 * Mercury and Venus a month, Jupiter thirteen months) are kept as printed; they are traditional round figures. No mantra is printed.
 * Spelling is lightly normalised (no nukta; standard anusvāra). Meanings are original.
 */
import type { Mantra } from '../types';

export const shanivarVrat: Mantra = {
  id: 'shanivar-vrat',
  title: 'शनिवार व्रत कथा',
  titleEn: 'Shanivar (Saturday) Vrat Katha',
  category: 'puja',
  order: 70,
  deity: 'Śrī Śanideva',
  source: 'North Indian vrata-kathā for Saturday (Śanivāra), in honour of Śanideva, with the legend of King Vikramāditya; popular printed and web copies',
  summary:
    'The Saturday fast for Shani: a brief outline of the puja and the katha of the nine planets\' quarrel over who is greatest, King Vikramaditya\'s nine seats of metal, Shani\'s anger at being seated last, the king\'s seven and a half years of suffering in a strange city, and Shani\'s boon to those who fast on Saturdays.',
  difficulty: 'easy',
  completeness: 'partial',
  contentNote:
    'The puja is given only as a brief outline of general practice (bath, offerings of jaggery, black cloth, black sesame, black urad dal and mustard oil, a sesame-oil lamp at a peepal tree, the Shani Chalisa and this katha); regional and family rules differ. The Shani Chalisa and the Shani aarti are separate texts in the app and are not repeated here.',
  sections: [
    {
      title: 'व्रत का विधान',
      titleEn: 'The fast and the puja in outline',
      note: 'General practice only; families follow their own tradition.',
      verses: [
        {
          text: 'शनिवार का व्रत शनिदेव को समर्पित है। इस दिन ब्रह्म मुहूर्त में उठकर स्नान करें, मन्दिर या पूजा-स्थान को साफ करें और शनिदेव की प्रतिमा को जल से स्नान कराएँ।',
          meaning: { en: 'The Saturday fast is dedicated to Shanideva. On this day rise at the brahma muhurta, bathe, clean the temple or the place of worship and bathe the image of Shanideva with water.' },
        },
        {
          text: 'उन्हें गुड, काले वस्त्र, काले तिल, काली उडद की दाल और सरसों का तेल अर्पित करें। शाम को शनि मन्दिर या पीपल के पेड के नीचे तिल के तेल का दीपक जलाएँ।',
          meaning: { en: 'Offer them jaggery, black cloth, black sesame, black urad dal and mustard oil. In the evening light a sesame-oil lamp at a Shani temple or under a peepal tree.' },
        },
        {
          text: 'इसके बाद शनि चालीसा और व्रत कथा का पाठ करें। भोग में पूरी और काली उडद की दाल की खिचडी रखें और आरती करें।',
          meaning: { en: 'After this read the Shani Chalisa and the vrata katha. Keep puri and urad-dal khichdi for the offering of food, and perform the arati.' },
        },
      ],
    },
    {
      title: 'शनिवार व्रत कथा',
      titleEn: 'The katha of Vikramaditya and Shani',
      note: 'Heard on each Saturday of the fast.',
      verses: [
        {
          text: 'एक समय स्वर्गलोक में नौ ग्रहों के बीच इस प्रश्न पर विवाद हो गया कि सबसे बडा कौन है। विवाद इतना बढा कि आपस में भयंकर युद्ध की स्थिति बन गई। निर्णय के लिए सब देवता देवराज इन्द्र के पास पहुँचे, पर इन्द्र उलझन में पड गए और बोले कि मैं इस प्रश्न का उत्तर देने में असमर्थ हूँ।',
          meaning: { en: 'Once in the heavenly world a dispute arose among the nine planets over the question of who is the greatest. The dispute grew so much that a state of terrible war arose among them. For a decision all the gods went to Indra, king of the gods, but Indra was perplexed and said, "I am unable to answer this question."' },
        },
        {
          text: 'इन्द्र ने कहा कि हम सब पृथ्वीलोक में उज्जयिनी नगरी के राजा विक्रमादित्य के पास चलते हैं। सब ग्रह उज्जयिनी पहुँचे और राजा से अपना प्रश्न पूछा। राजा भी चिन्ता में पड गए, क्योंकि सब देवता अपनी-अपनी शक्ति से महान थे और किसी को छोटा या बडा कह देने से उसके क्रोध से भारी हानि हो सकती थी।',
          meaning: { en: 'Indra said, "Let us all go to King Vikramaditya of the city of Ujjayini on earth." All the planets reached Ujjayini and put their question to the king. The king too was troubled, for every god was great by his own power, and by calling anyone small or great one might suffer heavy harm from his anger.' },
        },
        {
          text: 'अचानक राजा को एक उपाय सूझा। उन्होंने स्वर्ण, चाँदी, काँसा, ताँबा, सीसा, रांगा, जस्ता, अभ्रक और लोहे के नौ आसन बनवाए और धातुओं के गुणों के अनुसार उन्हें एक-दूसरे के पीछे रखवाकर देवताओं से अपने-अपने सिंहासन पर बैठने को कहा।',
          meaning: { en: 'Suddenly an idea struck the king. He had nine seats made of gold, silver, bronze, copper, lead, tin, zinc, mica and iron, had them placed one behind another according to the qualities of the metals, and asked the gods to sit on their seats.' },
        },
        {
          text: 'जब देवता बैठ गए तो राजा ने कहा कि आपका निर्णय स्वयं हो गया, जो सबसे पहले सिंहासन पर विराजमान है वही सबसे बडा है। यह सुनकर शनिदेव ने सबसे पीछे बैठने के कारण अपने को छोटा जाना और क्रोध में कहा कि राजा विक्रमादित्य, तुमने मुझे सबसे पीछे बैठाकर मेरा अपमान किया है; तुम मेरी शक्ति को नहीं जानते, मैं तुम्हारा सर्वनाश कर दूँगा।',
          meaning: { en: 'When the gods had sat down the king said, "Your decision has been made by itself; the one seated first is the greatest." Hearing this, Shanideva, who had sat last, took himself to be the smallest and said in anger, "King Vikramaditya, you have insulted me by seating me at the back; you do not know my power; I shall destroy you utterly."' },
        },
        {
          text: 'शनि ने कहा कि सूर्य एक राशि पर एक महीना, चन्द्रमा सवा दो दिन, मंगल डेढ महीना, बुध और शुक्र एक महीना और बृहस्पति तेरह महीने रहते हैं, पर मैं किसी राशि पर साढे सात वर्ष तक रहता हूँ। बडे-बडे देवताओं को मैंने अपने प्रकोप से पीडित किया है।',
          meaning: { en: 'Shani said, "The Sun stays a month in a sign, the Moon two and a quarter days, Mars a month and a half, Mercury and Venus a month, and Jupiter thirteen months, but I stay in a sign for seven and a half years. I have afflicted even the great gods with my wrath."' },
        },
        {
          text: 'राम को साढे साती के कारण ही वन में रहना पडा और रावण साढे साती के कारण ही युद्ध में मारा गया। शनि बोले कि राजा, अब तुम भी मेरे प्रकोप से नहीं बच सकोगे। इसके बाद अन्य देवता प्रसन्न होकर चले गए, पर शनिदेव बडे क्रोध के साथ वहाँ से विदा हुए।',
          meaning: { en: '"Rama had to live in the forest because of the sadesati, and Ravana was killed in battle because of the sadesati. King, now you too will not escape my wrath." After this the other gods went away pleased, but Shanideva departed in great anger.' },
        },
        {
          text: 'राजा विक्रमादित्य पहले की तरह न्याय करते रहे और उनके राज्य में सब स्त्री-पुरुष आनन्द से रहते रहे। कुछ दिन ऐसे ही बीते, पर शनिदेव अपना अपमान भूले नहीं थे। बदला लेने के लिए एक दिन उन्होंने घोडों के व्यापारी का रूप धरा और बहुत से घोडों के साथ उज्जयिनी पहुँचे।',
          meaning: { en: 'King Vikramaditya went on judging as before, and in his kingdom all men and women lived happily. Some days passed so, but Shanideva had not forgotten his insult. To take revenge, one day he took the form of a horse-dealer and came to Ujjayini with many horses.' },
        },
        {
          text: 'राजा ने घोडों के व्यापारी के आने का समाचार सुना तो अश्वपाल को घोडे खरीदने भेजा। घोडे बहुत कीमती थे। फिर राजा ने स्वयं आकर एक सुन्दर और शक्तिशाली घोडा पसन्द किया और उसकी चाल देखने के लिए उस पर सवार हुए, तो वह घोडा बिजली की गति से दौड पडा।',
          meaning: { en: 'When the king heard of the horse-dealer\'s arrival he sent the master of the horse to buy some horses. The horses were very costly. Then the king himself came and chose one handsome and powerful horse, and when he mounted it to see its gait, the horse dashed off at the speed of lightning.' },
        },
        {
          text: 'तेजी से दौडता घोडा राजा को दूर एक जंगल में ले गया, उन्हें वहाँ गिराकर कहीं गायब हो गया। राजा लौटने का रास्ता खोजते जंगल में भटकते रहे और उन्हें भूख-प्यास लग आई। बहुत घूमने पर एक चरवाहा मिला, जिससे पानी माँगकर और बदले में अपनी अँगूठी देकर राजा ने रास्ता पूछा और पास के नगर पहुँचे।',
          meaning: { en: 'The speeding horse carried the king to a distant forest, threw him down there and vanished somewhere. The king wandered in the forest looking for the way back, and hunger and thirst came upon him. After long roaming he met a herdsman, asked him for water, gave him his ring in return, asked the way and reached a nearby city.' },
        },
        {
          text: 'नगर में राजा एक सेठ की दुकान पर बैठकर कुछ देर आराम करने लगे और बताया कि मैं उज्जयिनी से आया हूँ। राजा के कुछ देर बैठने से सेठ की बहुत बिक्री हुई। सेठ ने उन्हें बहुत भाग्यवान समझा और प्रसन्न होकर भोजन के लिए अपने घर ले गया।',
          meaning: { en: 'In the city the king sat down at a merchant\'s shop to rest a while and said that he had come from Ujjayini. Because the king sat there a little while, the merchant\'s sales were very large. The merchant thought him very fortunate and, pleased, took him to his house for a meal.' },
        },
        {
          text: 'सेठ के घर के कमरे में सोने का एक हार खूँटी पर लटका था। राजा को वहाँ छोडकर सेठ कुछ देर के लिए बाहर गया, तभी एक आश्चर्यजनक घटना हुई: राजा के देखते-देखते सोने के उस हार को खूँटी निगल गई।',
          meaning: { en: 'In a room of the merchant\'s house a gold necklace hung on a peg. The merchant went outside for a while leaving the king there, and then a wonderful thing happened: before the king\'s eyes the peg swallowed the golden necklace.' },
        },
        {
          text: 'सेठ ने लौटकर हार के बारे में पूछा तो राजा ने बताया कि मेरे देखते ही खूँटी ने उसे निगल लिया। सेठ ने क्रोध में नगर के राजा से शिकायत की, और चोरी के अपराध में राजा विक्रमादित्य के हाथ-पाँव काटने का आदेश हो गया। हाथ-पाँव कटवाकर उन्हें नगर की सडक पर छोड दिया गया।',
          meaning: { en: 'When the merchant returned and asked about the necklace, the king said, "The peg swallowed it as I looked on." The merchant, angry, complained to the king of that city, and for the crime of theft the order was given to cut off King Vikramaditya\'s hands and feet. Having had them cut off, they left him on the city road.' },
        },
        {
          text: 'कुछ दिन बाद एक तेली उन्हें उठाकर अपने घर ले गया और कोल्हू पर बैठा दिया। राजा आवाज देकर बैलों को हाँकते रहते, इस तरह तेली का कोल्हू चलता रहा और राजा को भोजन मिलता रहा। शनि के प्रकोप की साढे साती पूरी होने पर वर्षा ऋतु आई।',
          meaning: { en: 'Some days later an oilman picked him up, took him to his house and seated him at his oil-press. The king kept calling to the bullocks to drive them; so the oilman\'s press kept turning and the king kept getting food. When the sadesati of Shani\'s wrath was complete, the rainy season began.' },
        },
        {
          text: 'एक रात राजा विक्रमादित्य मेघ मल्हार गा रहे थे कि तभी नगर के राजा की कन्या रथ पर सवार तेली के घर के पास से निकली। राग उसे बहुत अच्छा लगा और उसने दासी को भेजकर गाने वाले को बुलाने को कहा। दासी ने लौटकर अपंग राजा के बारे में सब बताया, फिर भी राजकुमारी उनके मेघ मल्हार से मोहित हो गई और उसने उसी अपंग से विवाह करने का निश्चय कर लिया।',
          meaning: { en: 'One night King Vikramaditya was singing the Megh Malhar when the king\'s daughter of that city passed near the oilman\'s house on a chariot. She liked the raga very much and sent a maid to call the singer. The maid returned and told her all about the crippled king, yet the princess was charmed by his Megh Malhar and decided to marry that same crippled man.' },
        },
        {
          text: 'राजकुमारी ने माता-पिता से यह बात कही तो वे चकित रह गए। रानी ने समझाया कि बेटी, तेरे भाग्य में किसी राजा की रानी होना लिखा है, तू उस अपंग से विवाह करके अपने पाँव पर कुल्हाडी क्यों मार रही है? पर राजकुमारी ने जिद नहीं छोडी, उसने भोजन छोड दिया और प्राण त्याग देने का निश्चय कर लिया।',
          meaning: { en: 'When the princess told her parents, they were astonished. The queen explained, "Daughter, it is written in your fate that you will be some king\'s queen; why do you strike your own foot with an axe by marrying that cripple?" But the princess did not give up her stubbornness; she gave up food and resolved to give up her life.' },
        },
        {
          text: 'आखिर राजा-रानी को विवश होकर अपंग विक्रमादित्य से राजकुमारी का विवाह करना पडा। विवाह के बाद वे दोनों तेली के घर में रहने लगे। उसी रात स्वप्न में शनिदेव ने राजा से कहा कि राजा, तुमने मेरा प्रकोप देख लिया; मैंने तुम्हें अपने अपमान का दण्ड दिया है।',
          meaning: { en: 'In the end the king and queen had to give in and marry the princess to the crippled Vikramaditya. After the wedding the two lived in the oilman\'s house. That very night Shanideva said to the king in a dream, "King, you have seen my wrath; I have given you punishment for my insult."' },
        },
        {
          text: 'राजा ने शनिदेव से क्षमा माँगी और प्रार्थना की कि हे शनिदेव, आपने जितना दुःख मुझे दिया है उतना किसी और को न देना। शनिदेव ने कुछ सोचकर कहा कि राजा, मैं तुम्हारी प्रार्थना स्वीकार करता हूँ। जो कोई स्त्री-पुरुष मेरी पूजा करेगा, शनिवार को व्रत करके मेरी व्रत कथा सुनेगा, उस पर मेरी अनुकम्पा बनी रहेगी।',
          meaning: { en: 'The king begged Shanideva\'s pardon and prayed, "O Shanideva, do not give anyone else as much suffering as you have given me." Shanideva thought a while and said, "King, I accept your prayer. Whoever, man or woman, worships me, fasts on Saturday and hears my vrata katha, on him my favour will remain."' },
        },
        {
          text: 'सवेरे जब राजा विक्रमादित्य की नींद खुली तो अपने हाथ-पाँव देखकर वे बहुत प्रसन्न हुए और मन ही मन शनिदेव को प्रणाम किया। राजकुमारी भी राजा के हाथ-पाँव ठीक देखकर आश्चर्य में डूब गई। तब राजा ने अपना परिचय देकर शनिदेव के प्रकोप की सारी कहानी सुनाई।',
          meaning: { en: 'In the morning when King Vikramaditya woke and saw his hands and feet he was very glad and bowed mentally to Shanideva. The princess too was lost in wonder at seeing the king\'s hands and feet whole. Then the king told who he was and related the whole story of Shanideva\'s wrath.' },
        },
        {
          text: 'जब सेठ को यह पता चला तो वह दौडता हुआ तेली के घर पहुँचा और राजा के चरणों में गिरकर क्षमा माँगने लगा। राजा ने उसे क्षमा कर दिया, क्योंकि यह सब शनिदेव के प्रकोप से हुआ था। सेठ उन्हें अपने घर ले गया और भोजन कराया।',
          meaning: { en: 'When the merchant learned of this he ran to the oilman\'s house and, falling at the king\'s feet, asked forgiveness. The king forgave him, because all this had happened through Shanideva\'s wrath. The merchant took him to his house and gave him a meal.' },
        },
        {
          text: 'भोजन करते समय फिर एक आश्चर्य हुआ: सबके देखते-देखते उसी खूँटी ने हार उगल दिया। सेठ ने अपनी बेटी का विवाह भी राजा के साथ कर दिया और बहुत-से स्वर्ण-आभूषण और धन देकर राजा को विदा किया।',
          meaning: { en: 'While he was eating, another wonder happened: before everyone\'s eyes that same peg gave up the necklace. The merchant also married his daughter to the king and sent the king off with many gold ornaments and much wealth.' },
        },
        {
          text: 'राजा विक्रमादित्य राजकुमारी और सेठ की बेटी के साथ उज्जयिनी पहुँचे तो नगरवासियों ने हर्ष से उनका स्वागत किया। अगले दिन राजा ने पूरे राज्य में घोषणा कराई कि शनिदेव सब देवों में सर्वश्रेष्ठ हैं और प्रत्येक स्त्री-पुरुष शनिवार को उनका व्रत करे और व्रत कथा अवश्य सुने।',
          meaning: { en: 'When King Vikramaditya reached Ujjayini with the princess and the merchant\'s daughter, the townspeople welcomed him with joy. The next day the king had it proclaimed throughout the kingdom that Shanideva is the best of all gods and that every man and woman should fast for him on Saturday and surely hear the vrata katha.' },
        },
        {
          text: 'राजा की घोषणा से शनिदेव बहुत प्रसन्न हुए। शनिवार का व्रत करने और व्रत कथा सुनने के कारण सब लोगों की मनोकामनाएँ शनिदेव की अनुकम्पा से पूरी होने लगीं और सब आनन्द से रहने लगे।',
          meaning: { en: 'Shanideva was very pleased by the king\'s proclamation. Because of keeping the Saturday fast and hearing the vrata katha, all people\'s wishes began to be fulfilled by Shanideva\'s favour and all lived in joy.' },
        },
      ],
    },
  ],
};
