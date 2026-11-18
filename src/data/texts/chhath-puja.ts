/**
 * Chhath Pūjā: the four days, the arghya mantras and two kathās, in Hindi (Devanagari).
 * Collated Nov 2026 from typed web copies; not proofread against a single printed booklet.
 *
 * WITNESSES
 *   B  bhaktibharat.com, "Chhath Puja" festival page (the four days, with the preparations and food).
 *   A  aajtak.in "Chhath Puja 2025: nahay-khay, kharna …" and amarujala.com "Chhath Puja 2025" (day order, arghya on days 3 and 4).
 *   E  shubhpanchang.com/hi/festivals/chhath-puja (dress, ghat, the folk songs; the Priyavrata mention).
 *   N  navbharatlive.com three pages (read-this-story-during-chhath-puja; know-the-mythological-story-related-to-chhath-puja;
 *      who-is-chhathi-maiya): the Priyavrata / Priyamvad kathā; the third copy is shorter.
 *   Q  aajtak.in "Chhath Puja Vrat Katha" (the Ravi-ṣaṣṭhī kathā: Janamejaya, Vaiśampāyana, Dhaumya, Draupadī, Sukanyā, Cyavana,
 *      the Nāga-kanyā; the Sun's twelve names and the arghya). One full copy; Draupadī's chhath is mentioned also in N.
 *   M  Arghya mantras: patrika.com (7 Surya mantras, among them ॐ सूर्याय नमः and ॐ घृणि सूर्याय नमः) and shubhpanchang.com
 *      (/hi/mantra/surya: the same two). The longer verse ॐ ऐहि सूर्य सहस्रांशो… is in patrika only and is not used.
 *
 * CHOICES. Days: B and A agree on the order and the main foods (nahay-khay: one meal, no fried food; kharna: kheer of rice,
 * jaggery and cane juice, then 36 hours without water; sandhya arghya: standing in water, five circuits; usha arghya: same rules).
 * Priyavrata kathā: N's three pages agree (childless king, Kaśyapa, putreṣṭi, the kheer to Mālinī, stillborn son, the cremation
 * ground, the goddess born of the sixth part of Prakṛti). The king is "Priyamvad" in two pages and "Priyavrata" in the third and in
 * the Brahmavaivarta; "Priyavrata" is used in the title of the unit and "Priyamvad" kept in the narration as printed. Kāttika
 * śukla ṣaṣṭhī is the day of the vrata. The Q kathā is abridged: the Sun's twelve names are not listed in Q, and the prayer
 * ("जगत के सविता…") is kept. Spelling lightly normalised (no nukta; "षष्ठी", "अर्घ्य"). Meanings are original.
 */
import type { Mantra } from '../types';

export const chhathPuja: Mantra = {
  id: 'chhath-puja',
  title: 'छठ पूजा कथा',
  titleEn: 'Chhath Puja Katha',
  category: 'puja',
  order: 65,
  deity: 'Sūrya and Ṣaṣṭhī Devī',
  source: 'North and East Indian festival of Sūrya and Chhaṭhī Maiyā (Kārttika śukla ṣaṣṭhī); popular printed and web copies, including the Brahmavaivarta tradition of Priyavrata',
  summary:
    'Chhath, the four-day worship of the Sun and Chhathi Maiya (Shashthi Devi) from Kartika shukla chaturthi to saptami: the nahay-khay, kharna, evening and morning arghyas, the Surya mantras used at the arghya, the katha of King Priyavrata (Priyamvad) and Shashthi Devi, and the katha of Draupadi, Dhaumya and Sukanya.',
  difficulty: 'easy',
  completeness: 'partial',
  contentNote:
    'The rites are given as an outline of the four days. Only the two arghya mantras that two pages agree on are given; the longer Sanskrit verse sometimes recited (Ehi Surya sahasramsho) is in one page only and is left out. The Draupadi-Dhaumya-Sukanya katha is abridged from a single full printed copy; the folk songs of Chhath (Chhath geet) are not included.',
  sections: [
    {
      title: 'चार दिनों की पूजा',
      titleEn: 'The four days',
      note: 'Kartika shukla chaturthi to saptami, six days after Diwali. Exact dates and sunset or sunrise times depend on the place.',
      verses: [
        {
          text: 'छठ पर्व कार्तिक शुक्ल चतुर्थी से सप्तमी तक चार दिनों तक चलने वाला पर्व है। इसमें सूर्य देव और छठी मैया की पूजा की जाती है और डूबते तथा उगते सूर्य को अर्घ्य दिया जाता है।',
          meaning: { en: 'Chhath is a four-day festival from the fourth to the seventh of the bright half of Kartika. The Sun God and Chhathi Maiya are worshipped, and arghya is offered to the setting and the rising sun.' },
        },
        {
          text: 'पहला दिन नहाय-खाय है। इस दिन घर की सफाई करके उसे पवित्र किया जाता है, फिर व्रती निकट की नदी या तालाब में स्वच्छ जल से स्नान करते हैं। व्रती इस दिन एक ही बार भोजन करते हैं; तला हुआ भोजन वर्जित है, और भोजन काँसे या मिट्टी के बर्तन में पकाया जाता है।',
          meaning: { en: 'The first day is nahay-khay. The house is cleaned and made pure, and the vrati bathes in clean water in a nearby river or pond. The vrati eats only once on this day; fried food is forbidden, and the food is cooked in a bronze or clay vessel.' },
        },
        {
          text: 'दूसरा दिन खरना (लोहंडा) है। व्रती पूरे दिन उपवास रखते हैं और सूर्यास्त से पहले जल की एक बूँद भी ग्रहण नहीं करते। शाम को चावल, गुड और गन्ने के रस से खीर बनाई जाती है, उसी का सूर्य देव को नैवेद्य लगाकर एकान्त में उसे ग्रहण किया जाता है, और परिवार तथा मित्रों को खीर-रोटी का प्रसाद दिया जाता है।',
          meaning: { en: 'The second day is kharna (lohanda). The vrati fasts the whole day and takes not a drop of water before sunset. In the evening kheer is made of rice, jaggery and sugarcane juice; after offering it to the Sun God, it is eaten in seclusion, and kheer and roti are given as prasada to family and friends.' },
        },
        {
          text: 'इसके बाद व्रती अगले छत्तीस घण्टों के लिए निर्जल व्रत धारण कर लेते हैं। मध्य रात्रि में पूजा के लिए ठेकुआ नामक विशेष प्रसाद बनाया जाता है।',
          meaning: { en: 'After this the vrati takes up a waterless vow for the next thirty-six hours. At midnight the special offering called thekua is prepared for the puja.' },
        },
        {
          text: 'तीसरा दिन संध्या अर्घ्य का है। पूरे दिन परिजन मिलकर पूजा की तैयारी करते हैं; ठेकुआ और कचवनिया (चावल के लड्डू) बनाए जाते हैं। बाँस की टोकरी, जिसे दउरा कहते हैं, में प्रसाद और फल रखे जाते हैं। शाम को सूप में नारियल, पाँच प्रकार के फल और पूजा का अन्य सामान रखकर दउरा घर का पुरुष उठाकर घाट पर ले जाता है, और स्त्रियाँ छठी मैया के गीत गाती हुई चलती हैं।',
          meaning: { en: 'The third day is the sandhya arghya. All day the family together prepares the puja; thekua and kachvaniya (rice laddus) are made. The prasada and fruit are put in a bamboo basket called a daura. In the evening a man of the house lifts the daura, holding in a soop a coconut, five kinds of fruit and other puja items, and carries it to the ghat, while the women walk singing songs of Chhathi Maiya.' },
        },
        {
          text: 'नदी के किनारे छठ माता का चौरा बनाकर उस पर पूजा का सब सामान रखा जाता है, नारियल अर्पित किया जाता है और दीप जलाया जाता है। सूर्यास्त से कुछ समय पहले व्रती सब सामान लेकर घुटनों तक पानी में खडे होकर डूबते सूर्य को अर्घ्य देते हैं और पाँच बार परिक्रमा करते हैं।',
          meaning: { en: 'On the river bank a platform for Chhath Mata is made, all the puja items are placed on it, a coconut is offered and a lamp is lit. A little before sunset the vrati takes everything, stands knee-deep in the water, offers arghya to the setting sun and goes round five times.' },
        },
        {
          text: 'चौथा दिन उषा अर्घ्य का है, यानी उदय होते सूर्य को अर्घ्य। सूर्योदय से पहले ही व्रती परिजनों के साथ घाट पर पहुँचते हैं। संध्या अर्घ्य में चढाए पकवान नए पकवानों से बदल दिए जाते हैं, पर कन्द, मूल, फल वही रहते हैं। सब नियम संध्या अर्घ्य के समान हैं। पूजा के बाद घाट का पूजन किया जाता है और व्रत का पारण होता है।',
          meaning: { en: 'The fourth day is the usha arghya, the arghya to the rising sun. The vratis reach the ghat with their families before sunrise. The dishes offered at the evening arghya are replaced by fresh ones, but the roots and fruits remain the same. All rules are as in the evening arghya. After the worship the ghat is worshipped and the fast is broken.' },
        },
      ],
    },
    {
      title: 'सूर्य अर्घ्य मन्त्र',
      titleEn: 'Mantras at the arghya',
      note: 'Offered with water in both hands raised above the head. Two short mantras commonly used.',
      verses: [
        {
          text: 'ॐ सूर्याय नमः ।\nॐ घृणि सूर्याय नमः ।',
          meaning: { en: 'Om, salutation to Surya. Om ghrini, salutation to Surya.' },
        },
      ],
    },
    {
      title: 'राजा प्रियव्रत और षष्ठी देवी की कथा',
      titleEn: 'The katha of King Priyavrata and Shashthi Devi',
      note: 'The commonly told katha of Chhathi Maiya. The king is called Priyamvad in some copies and Priyavrata in the Brahmavaivarta tradition.',
      verses: [
        {
          text: 'पौराणिक कथा के अनुसार प्राचीन काल में प्रियंवद नाम के एक राजा थे। राजा के कोई सन्तान नहीं थी, इस कारण उन्हें और उनकी पत्नी मालिनी को बडा दुःख रहता था। उन्होंने सन्तान-प्राप्ति के लिए कई उपाय किए, पर हर बार निराशा ही हाथ लगी। एक दिन राजा रानी के साथ महर्षि कश्यप के पास पहुँचे।',
          meaning: { en: 'According to the old story there was in ancient times a king named Priyamvad. The king had no child, and he and his wife Malini were deeply grieved. They tried many remedies for a child, but each time met only disappointment. One day the king went with the queen to the great sage Kashyapa.' },
        },
        {
          text: 'महर्षि कश्यप ने राजा को सन्तान के लिए पुत्रेष्टि यज्ञ कराने का सुझाव दिया। राजा बहुत प्रसन्न हुए और उन्होंने यज्ञ विधि-विधान से कराया। यज्ञ में आहुति के लिए खीर बनवाई गई, और आहुति देने के बाद जो खीर बची वह रानी मालिनी को प्रसाद के रूप में खाने को दी गई।',
          meaning: { en: 'The sage Kashyapa advised the king to have a putreshti yajna performed for a child. The king was very pleased and had the yajna done in due form. Kheer was prepared as the oblation, and what remained after the offering was given to Queen Malini to eat as prasada.' },
        },
        {
          text: 'रानी ने खुशी से वह खीर खा ली। उसके प्रभाव से रानी गर्भवती हुईं और कुछ समय बाद उन्होंने एक बालक को जन्म दिया। पर वह पुत्र मरा हुआ पैदा हुआ। यह देखकर राजा और रानी बहुत दुःखी हुए।',
          meaning: { en: 'The queen gladly ate the kheer. By its effect the queen conceived, and some time later gave birth to a boy. But the son was born dead. Seeing this, the king and queen were greatly grieved.' },
        },
        {
          text: 'राजा अपने मृत पुत्र का शव लेकर श्मशान पहुँचे। पुत्र के वियोग में वे इतने दुःखी थे कि वहाँ वे भी अपने प्राण त्यागने को तैयार हो गए। जैसे ही राजा के मन में यह विचार आया, उनके सामने एक देवी प्रकट हुईं।',
          meaning: { en: 'The king took the body of his dead son to the cremation ground. He was so grieved at the loss of his son that he too made ready to give up his life there. As soon as this thought came to the king, a goddess appeared before him.' },
        },
        {
          text: 'ये देवी ब्रह्मा की मानस पुत्री थीं। राजा प्रियंवद ने उनसे पूछा कि वे कौन हैं। देवी ने कहा कि मेरी उत्पत्ति सृष्टि की मूल प्रवृत्ति के छठे अंश से हुई है, इसी कारण मेरा नाम षष्ठी है। उन्होंने राजा को प्राण त्यागने से रोका।',
          meaning: { en: 'This goddess was a mind-born daughter of Brahma. King Priyamvad asked who she was. The goddess said, "I arose from the sixth part of the original impulse of creation, and so my name is Shashthi." She stopped the king from giving up his life.' },
        },
        {
          text: 'देवी ने राजा से कहा कि तुम षष्ठी की पूजा करो और दूसरों को भी ऐसा करने के लिए प्रेरित करो; ऐसा करने से तुम इस दुःख से मुक्त हो जाओगे। देवी की आज्ञा के अनुसार राजा श्मशान से लौट गए।',
          meaning: { en: 'The goddess told the king, "Worship Shashthi, and inspire others also to do so; by this you will be free from this sorrow." As the goddess commanded, the king left the cremation ground.' },
        },
        {
          text: 'इसके बाद कार्तिक मास के शुक्ल पक्ष की षष्ठी तिथि को राजा ने पुत्र की इच्छा से नियमपूर्वक देवी षष्ठी का व्रत किया और उसका प्रचार भी किया। षष्ठी पूजा के प्रभाव से राजा को पुत्र-रत्न की प्राप्ति हुई। तभी से षष्ठी, यानी छठी मैया की पूजा की जा रही है।',
          meaning: { en: 'After this, on the shashthi of the bright half of Kartika, the king, desiring a son, kept the vrata of Goddess Shashthi with due rule and spread the worship. By the power of the Shashthi puja the king obtained a son. From that time Shashthi, that is Chhathi Maiya, has been worshipped.' },
        },
      ],
    },
    {
      title: 'द्रौपदी और सुकन्या की कथा (रवि षष्ठी)',
      titleEn: 'The katha of Draupadi, Dhaumya and Sukanya (Ravi Shashthi)',
      note: 'The longer katha of the Sun\'s vrata of shashthi, in the form of the questions of Janamejaya; abridged here.',
      verses: [
        {
          text: 'श्री जनमेजय ने वैशम्पायन से पूछा कि कपटरूप जुए में दुर्योधन आदि से हारे पाण्डव जब वनवास के लिए भेजे गए, तब जंगल में जाकर उन्होंने क्या किया। वैशम्पायन जी ने कहा कि हे जनमेजय, सुनो; पाण्डु के पुत्र अत्यन्त दुःख में डूबे हुए घोर जंगल में रहने लगे। वे फल-फूल खाकर धरती पर सोते थे, और राजकन्या द्रौपदी भी पतिव्रत धर्म का पालन करती हुई पतियों के साथ वन चली गई थी।',
          meaning: { en: 'Janamejaya asked Vaishampayana what the Pandavas did in the forest after they were sent to exile, defeated by Duryodhana and the rest in the cheating dice game. Vaishampayana said: "Listen, Janamejaya; the sons of Pandu, sunk in great sorrow, came to live in a dense forest. They ate fruit and flowers and slept on the earth, and the princess Draupadi, keeping her wifely duty, went to the forest with her husbands."' },
        },
        {
          text: 'जहाँ द्रौपदी सहित पाण्डव थे वहाँ अट्ठासी हजार ब्रह्मवेत्ता मुनि पहुँच गए। ऋषियों को आते देखकर युधिष्ठिर चिन्ता से घबरा गए कि इन महात्माओं के भोजन का क्या प्रबन्ध करें। स्वामी को उदास देखकर द्रौपदी बहुत व्याकुल हुई। उसने अपने पुरोहित धौम्य को आसन पर बैठाकर प्रणाम किया और आँखों में आँसू भरकर कहा कि हे महाभाग, इन दुःखी पाण्डवों को देखिए; दुःख के नाश के लिए कोई ऐसा व्रत बताइए जिससे इनका क्लेश शान्त हो, शत्रु का नाश हो और राज्यलक्ष्मी वापस मिले।',
          meaning: { en: 'Eighty-eight thousand sages learned in Brahman came to where the Pandavas and Draupadi were. Seeing the sages arrive, Yudhishthira was troubled about how to feed these great souls. Seeing her lord dejected, Draupadi was greatly distressed. She seated her priest Dhaumya on a seat, bowed to him, and said with tears in her eyes: "O blessed one, look at these suffering Pandavas; tell me some vrata to end their sorrow, destroy their enemy and bring back their kingdom."' },
        },
        {
          text: 'द्रौपदी के वचन सुनकर धौम्य जी थोडी देर ध्यान में रहकर बोले कि हे पाञ्चाल की पुत्री, मैं एक उत्तम व्रत बताता हूँ, जिसे पहले सुकन्या ने नाग-कन्या के उपदेश से किया था। तुम स्त्रियों के साथ अनेक विघ्नों को शान्त करने वाला रवि षष्ठी व्रत करो। द्रौपदी ने पूछा कि हे विप्र, यह व्रत कैसा है, इसकी विधि क्या है, इसमें किसका पूजन होता है, और वह नाग-कन्या तथा सुकन्या कौन थीं।',
          meaning: { en: 'Hearing Draupadi, Dhaumya meditated for a moment and said, "O daughter of Panchala, I shall tell you an excellent vrata, which Sukanya once kept on the teaching of a naga maiden. With the women, keep the Ravi Shashthi vrata, which quiets many obstacles." Draupadi asked, "O brahmin, what is this vrata, what is its rule, whom is worshipped in it, and who were that naga maiden and Sukanya?"' },
        },
        {
          text: 'धौम्य जी ने उत्तर दिया कि हे देवी, सत्ययुग में शर्याति नाम के राजा थे, जिनकी एक हजार स्त्रियाँ थीं और उनसे एक ही कन्या हुई। वह कन्या पिता को प्राणों के समान प्रिय थी; चन्द्रमा जैसे मुख और कमल जैसे नेत्रों वाली वह रूप में अद्वितीय थी, इसलिए उसका नाम सुकन्या पडा। एक समय राजा मन्त्री, सेना और पुरोहित के साथ शिकार के लिए घोर जंगल में गए। वहाँ सखियों के साथ फूल लेने गई सुकन्या ने च्यवन मुनि का स्थान देखा।',
          meaning: { en: 'Dhaumya replied: "O goddess, in the Satya age there was a king named Sharyati who had a thousand wives, and from them only one daughter. She was dear to her father as his life; with a moon-like face and lotus eyes she had no equal, and so she was named Sukanya. Once the king went to a deep forest to hunt with his minister, army and priest. There Sukanya, who had gone with her friends to gather flowers, came to the place of the sage Chyavana."' },
        },
        {
          text: 'मुनि की देह दीमक की मिट्टी से ढकी थी, और मिट्टी के बीच उनकी दोनों आँखें जुगनू की तरह चमक रही थीं। विस्मित सुकन्या ने उनकी दोनों आँखें फोड दीं। मुनि की आँखों से रक्त बहने लगा। उसी से राजा और सेना का मल-मूत्र बन्द हो गया और सब हाहाकार करने लगे। तीन दिन-रात बीतने पर राजा ने अपने पुरोहित से कारण पूछा।',
          meaning: { en: 'The sage\'s body was covered with an anthill, and between the earth his two eyes shone like fireflies. Astonished, Sukanya pierced both his eyes. Blood began to flow from the sage\'s eyes. At that the king and his army were stopped up and all began to cry out. After three days and nights the king asked his priest the reason.' },
        },
        {
          text: 'पुरोहित ने बताया कि भार्गववंशी च्यवन ऋषि इस वन में घोर तपस्या कर रहे हैं, आपकी कन्या ने अज्ञान से उनके नेत्र फोड दिए हैं, और उन्हीं के क्रोध से यह कष्ट हुआ है। हे राजन, उन्हें प्रसन्न कीजिए और अपनी कन्या उन्हें दे दीजिए। राजा शर्याति सुकन्या को लेकर ऋषि के पास गए, क्षमा माँगी और कन्या का दान कर दिया। मुनि प्रसन्न हुए, उनका क्रोध शान्त हुआ और राजा सेना सहित लौट गए। सुकन्या नेत्रहीन च्यवन की सेवा करने लगी।',
          meaning: { en: 'The priest said, "The sage Chyavana of the Bhargava line is practising severe tapas in this forest; your daughter has in ignorance pierced his eyes, and this trouble comes from his anger. O king, propitiate him and give him your daughter." King Sharyati took Sukanya to the sage, asked pardon and gave away the girl. The sage was pleased, his anger calmed, and the king went back with his army. Sukanya began to serve the blind Chyavana.' },
        },
        {
          text: 'कार्तिक मास में एक दिन सुकन्या जल के लिए छोटे तालाब पर गई। वहाँ उसने आभूषणों से सजी एक नाग-कन्या को कश्यप जी के यज्ञ-मण्डप में सूर्य भगवान की पूजा करते देखा। सुकन्या ने पास जाकर पूछा कि आप क्या कर रही हैं। नाग-कन्या ने कहा कि मैं नाग-कन्या हूँ और व्रत धारण करके पूजन के लिए आई हूँ। सुकन्या ने पूछा कि इस व्रत का क्या फल है और इसकी विधि क्या है।',
          meaning: { en: 'In the month of Kartika, one day Sukanya went to a small pond for water. There she saw a naga maiden adorned with ornaments worshipping the Sun in Kashyapa\'s sacrificial pavilion. Sukanya went close and asked, "What are you doing?" The naga maiden said, "I am a naga maiden and have come with a vow for worship." Sukanya asked, "What fruit does this vrata give and what is its rule?"' },
        },
        {
          text: 'नाग-कन्या ने बताया कि कार्तिक शुक्ल षष्ठी को, सप्तमी से युक्त होने पर, सब मनोरथों की सिद्धि के लिए यह व्रत किया जाता है। पंचमी को नियम से व्रत धारण करे, शाम को खीर खाकर भूमि पर सोए। षष्ठी के दिन व्रत रहे, दिन में चार रंगों से सजे मण्डप में सूर्य नारायण का पूजन करे और रात में जागरण करे। अनेक फल और पकवानों का नैवेद्य लगाए और गीत-वाद्य से उत्सव मनाए।',
          meaning: { en: 'The naga maiden said, "On shashthi of the bright half of Kartika, joined with saptami, this vrata is kept for the fulfilment of every wish. On panchami take up the vrata with discipline, eat kheer in the evening and sleep on the ground. On shashthi keep the fast, in the day worship Surya Narayana in a pavilion adorned with four colours, and keep vigil at night. Offer many fruits and dishes and celebrate with songs and music."' },
        },
        {
          text: 'जब तक सूर्य नारायण के दर्शन न हों तब तक व्रत धारण किए रहना चाहिए। सप्तमी के प्रातः सूर्य के दर्शन करके अर्घ्य दें: दूध, नारियल, केला, फूल और चन्दन से, सूर्य के बारह नामों का उच्चारण करते हुए और प्रत्येक नाम पर दण्डवत् प्रणाम करते हुए। प्रार्थना करें कि जगत् के सविता, जगत् के नेत्र, जगत् की उत्पत्ति, पालन और नाश के हेतु, त्रिगुणरूप और त्रिगुणात्मा, ब्रह्मा-विष्णु-शिवरूप सूर्य नारायण को नमस्कार है।',
          meaning: { en: '"Keep the vrata until the sight of Surya Narayana. On the morning of saptami, see the Sun and offer arghya with milk, coconut, banana, flower and sandal, pronouncing the Sun\'s twelve names and bowing in full prostration at each. Pray: Salutation to Surya Narayana, the begetter of the world, the eye of the world, the cause of its creation, preservation and destruction, of the form and nature of the three gunas, the form of Brahma, Vishnu and Shiva."' },
        },
        {
          text: 'इस प्रकार इस व्रत को करने से सूर्य नारायण घोर कष्ट दूर करके मनचाहा फल देते हैं। धौम्य जी ने द्रौपदी से कहा कि नाग-कन्या की बात सुनकर सुकन्या ने यह उत्तम व्रत किया, और इसी के प्रभाव से च्यवन के नेत्र पहले जैसे हो गए और वे सुख भोगने लगे। हे द्रौपदी, तुम भी यह व्रत करके देखो; इसके प्रभाव से तुम्हारे पति पुनः राज्यलक्ष्मी पाएँगे और तुम्हारा कल्याण अवश्य होगा।',
          meaning: { en: '"By keeping this vrata in this way Surya Narayana removes dire trouble and gives the desired fruit." Dhaumya said to Draupadi: "Having heard the naga maiden, Sukanya kept this excellent vrata, and by its power Chyavana\'s eyes were restored as before and he lived happily. Draupadi, try this vrata too; by its power your husbands will regain the fortune of the kingdom and you will surely prosper."' },
        },
        {
          text: 'द्रौपदी ने धौम्य की आज्ञा से यह व्रत विधिपूर्वक किया, तब युधिष्ठिर ने अतिथि रूप में आए ब्राह्मणों को भोजन कराकर प्रणाम किया। इस व्रत के प्रभाव से द्रौपदी पाण्डवों के साथ पुनः राज्यलक्ष्मी को प्राप्त हुई। जो स्त्री इस पावन व्रत को करेगी उसके सब पाप नष्ट होंगे और वह सुकन्या की तरह पति सहित सुख पाएगी। जो भक्ति भाव से यह कथा सुनता है उसे पुत्र, पौत्र, धन-सम्पत्ति और अक्षय सुख मिलता है।',
          meaning: { en: 'By Dhaumya\'s order Draupadi kept this vrata duly, and Yudhishthira fed the brahmins who had come as guests and bowed to them. By the power of this vrata Draupadi regained, with the Pandavas, the fortune of the kingdom. The woman who keeps this holy vrata will have all her sins destroyed and, like Sukanya, will find happiness with her husband. One who hears this katha with devotion obtains sons, grandsons, wealth and imperishable happiness.' },
        },
      ],
    },
  ],
};
