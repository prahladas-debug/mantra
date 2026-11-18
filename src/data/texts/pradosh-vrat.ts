/**
 * Pradoṣa vrata for Śiva: the outline of the puja, the Soma-pradoṣa kathā of the Brahmin woman and the Vidarbha prince, the Śani-pradoṣa and
 * Bhauma-pradoṣa kathās in short, and the fruits of the weekdays, in Hindi.
 * Collated Nov 2026 from typed web copies; not proofread against a single printed booklet.
 *
 * WITNESSES
 *   B  bhaktibharat.com, "सोम प्रदोष व्रत कथा (Som Pradosh Vrat Katha)". Base for the Soma kathā (the Brahmin woman, the wounded boy, the Gandharva
 *      girl Aṃśumatī, Śaṅkara's dream to her parents, the Gandharva army, the prince's prime minister).
 *   N  navbharatlive.com, "आज सोम प्रदोष व्रत पर प्रदोष काल में करें पूजा" (30 Mar 2026): the same story with ṛṣi Śāṇḍilya, who tells the woman to
 *      keep the Soma-pradoṣa vrata with the two boys; used for that episode.
 *   M  navbharatlive.com, Śani-pradoṣa article (4 Oct 2025): the same plot with two princes of Vidarbha and Śāṇḍilya; read for comparison.
 *   Z  bhaktibharat.com, "शनि प्रदोष व्रत कथा": the nagara-seṭha and his wife without a child, the sādhu, the vow, the birth of the son. Base
 *      for the Śani kathā (one copy only).
 *   H  navbharatlive.com, "Mangal Pradosh Vrat Katha" (8 Sep 2026): the old woman devoted to Hanumān, who tests her. Base for the Bhauma
 *      kathā (one copy only).
 *   R  smartpuja.com, Pradosh Vrat 2026 calendar (hi): the puja outline (fast from morning; bath near sunset; abhiṣeka with pañcāmṛta and Ganges
 *      water; bilva, flowers, dhatūra; bhasma or sandal; Nandī; "ॐ नमः शिवाय" 108 times; ārtī; fruit and rock-salt food; pāraṇa after the
 *      evening puja) and the list of weekday fruits; and the app's own Somvar and Karva Chauth texts for the five-syllable mantra.
 *
 * CHOICES. B and N tell the Soma kathā alike; B's order is followed (the boy found wounded, the Gandharva marriage), with N's detail that
 * the woman took both boys to ṛṣi Śāṇḍilya and began the vrata on his advice; M agrees. In B the woman herself keeps the vrata and the
 * prince's fortunes turn by its power; N says the boys also keep it; both are kept. The Śani and Bhauma kathās rest on one copy each,
 * the weekday fruits on one calendar page, so they are given briefly and as popular belief. No traditional Sūta–Śaunaka frame and no stotra
 * is printed. Spelling is lightly normalised (no nukta; standard anusvāra). Meanings are original.
 */
import type { Mantra } from '../types';

export const pradoshVrat: Mantra = {
  id: 'pradosh-vrat',
  title: 'प्रदोष व्रत कथा',
  titleEn: 'Pradosh Vrat Katha',
  category: 'puja',
  order: 72,
  deity: 'Śrī Śiva',
  source: 'North Indian vrata-kathā for Pradoṣa (the thirteenth lunar day, at dusk), in honour of Śiva; popular printed and web copies of the Soma-pradoṣa and other weekday kathās',
  summary:
    'The twilight fast of the thirteenth lunar day for Shiva: a brief outline of the puja and the katha of the widowed Brahmin woman who raised the Vidarbha prince beside her own son, the Gandharva princess, and the recovery of the kingdom, with short kathas for Saturday, Tuesday and a note on the fruits of the seven weekdays.',
  difficulty: 'easy',
  completeness: 'partial',
  contentNote:
    'The puja is given only as a brief outline of general practice (a fast through the day, bath and worship at dusk, abhisheka, bilva leaves, the five-syllable mantra, aarti); families and regions differ. The traditional fruits for each weekday are printed in modern web pages and vary from page to page; here they are given as popular belief. The Shukra (Friday), Budha and Guru Pradosh kathas, and the Sanskrit pradosha-stotra, are not included.',
  sections: [
    {
      title: 'व्रत का विधान',
      titleEn: 'The fast and the puja in outline',
      note: 'General practice only; families follow their own tradition.',
      verses: [
        {
          text: 'प्रदोष व्रत त्रयोदशी तिथि को भगवान शिव के लिए रखा जाता है। प्रातः उठकर स्नान करके संकल्प लें और दिन भर उपवास रखें। पूजा का सर्वोत्तम समय प्रदोष काल है, जो सूर्यास्त के लगभग पैंतालीस मिनट पहले से पैंतालीस मिनट बाद तक माना जाता है।',
          meaning: { en: 'The Pradosh fast is kept on the thirteenth lunar day for Lord Shiva. Rise in the morning, bathe, take the resolve and fast through the day. The best time for worship is the Pradosha period, held to run from about forty-five minutes before sunset to forty-five minutes after.' },
        },
        {
          text: 'सूर्यास्त से पहले फिर स्नान करके शिवलिंग का पंचामृत और गंगाजल से अभिषेक करें। उस पर भस्म या चन्दन का त्रिपुण्ड बनाएँ और बेलपत्र, फूल और धतूरा चढाएँ। नन्दी की भी पूजा करें।',
          meaning: { en: 'Before sunset bathe again and perform the abhisheka of the Shivalinga with pañcamrita and Ganges water. Draw the tripundra on it with ash or sandal and offer bilva leaves, flowers and dhatura. Worship Nandi as well.' },
        },
        {
          text: 'पूजा में ॐ नमः शिवाय मन्त्र का एक सौ आठ बार जप करें, फिर कपूर से आरती करें और अनजाने में हुई भूल की क्षमा माँगें। पूजा के बाद व्रत की कथा सुनें या पढें।',
          meaning: { en: 'In the worship repeat the mantra Om namah Shivaya one hundred and eight times, then perform the arati with camphor and ask pardon for any mistake made unknowingly. After the puja hear or read the vrata katha.' },
        },
        {
          text: 'जो निराहार व्रत न रख सके वह फल, दूध और सेंधा नमक से बने फलाहार पर रहे, अनाज, लहसुन-प्याज और तामसिक भोजन से दूर रहे। व्रत का पारण शाम की प्रदोष पूजा, आरती और भोग के बाद उसी प्रसाद से किया जाता है।',
          meaning: { en: 'One who cannot keep a fast without food may live on fruit, milk and food made with rock salt, and keep away from grain, garlic and onion and tamasic food. The fast is broken in the evening after the Pradosha puja, arati and offering, with the same prasada.' },
        },
      ],
    },
    {
      title: 'सोम प्रदोष व्रत कथा',
      titleEn: 'The katha of the Brahmin woman and the Vidarbha prince',
      note: 'Heard at the Pradosha puja.',
      verses: [
        {
          text: 'जो प्रदोष व्रत सोमवार को पडता है, वह सोम प्रदोष कहलाता है। सोमवार भगवान शिव का दिन माना जाता है, इसलिए इस दिन प्रदोष होने से उसकी महत्ता और बढ जाती है। एक नगर में एक ब्राह्मणी रहती थी। उसके पति का स्वर्गवास हो गया था और अब उसका कोई आश्रयदाता नहीं था, इसलिए वह प्रातः होते ही अपने पुत्र के साथ भीख माँगने निकल पडती और भिक्षाटन से ही अपना और पुत्र का पेट पालती थी।',
          meaning: { en: 'The Pradosh that falls on a Monday is called Som Pradosh. Monday is held to be the day of Lord Shiva, so when Pradosh falls on this day its importance grows still more. In a certain city there lived a Brahmin woman. Her husband had died and she now had no protector, so as soon as morning came she went out with her son to beg, and from begging alone fed herself and her son.' },
        },
        {
          text: 'एक दिन ब्राह्मणी घर लौट रही थी कि उसे एक लडका घायल अवस्था में कराहता मिला। दयावश वह उसे अपने घर ले आई। वह लडका विदर्भ का राजकुमार था। शत्रु सैनिकों ने उसके राज्य पर आक्रमण करके उसके पिता को बन्दी बना लिया था और राज्य पर अधिकार कर लिया था, इसलिए वह मारा-मारा फिर रहा था।',
          meaning: { en: 'One day as the Brahmin woman was returning home she found a boy groaning, wounded. Out of pity she brought him to her house. That boy was the prince of Vidarbha. Enemy soldiers had attacked his kingdom, made his father prisoner and taken control of the kingdom, so he was wandering about in distress.' },
        },
        {
          text: 'ब्राह्मणी दोनों बालकों को लेकर ऋषि शाण्डिल्य के आश्रम गई। ऋषि ने ब्राह्मणी और बालकों को सोम प्रदोष व्रत रखने और उसकी कथा पढने को कहा। ऋषि की आज्ञा मानकर ब्राह्मणी और दोनों बालकों ने पूरी निष्ठा से सोम प्रदोष व्रत रखा। राजकुमार ब्राह्मण-पुत्र के साथ ब्राह्मणी के घर रहने लगा।',
          meaning: { en: 'The Brahmin woman took both boys to the hermitage of the sage Shandilya. The sage told the woman and the boys to keep the Som Pradosh fast and read its katha. Obeying the sage, the Brahmin woman and both boys kept the Som Pradosh fast with complete devotion. The prince lived with the Brahmin\'s son in the Brahmin woman\'s house.' },
        },
        {
          text: 'एक दिन अंशुमती नाम की एक गन्धर्व कन्या ने राजकुमार को देखा और उस पर मोहित हो गई। अगले दिन वह अपने माता-पिता को राजकुमार से मिलाने लाई, उन्हें भी राजकुमार भा गया। कुछ दिनों बाद अंशुमती के माता-पिता को भगवान शंकर ने स्वप्न में आदेश दिया कि राजकुमार और अंशुमती का विवाह कर दिया जाए, और उन्होंने वैसा ही किया।',
          meaning: { en: 'One day a Gandharva girl named Anshumati saw the prince and was charmed by him. The next day she brought her parents to meet the prince, and they too liked him. Some days later Lord Shankara commanded Anshumati\'s parents in a dream that the prince and Anshumati be married, and they did so.' },
        },
        {
          text: 'ब्राह्मणी प्रदोष व्रत करती थी। उसके व्रत के प्रभाव से और गन्धर्वराज की सेना की सहायता से राजकुमार ने विदर्भ से शत्रुओं को खदेड दिया और पिता का राज्य फिर पा लिया। वह आनन्द से रहने लगा और उसने ब्राह्मण-पुत्र को अपना प्रधानमन्त्री बनाया।',
          meaning: { en: 'The Brahmin woman used to keep the Pradosh fast. By the power of her fast and with the help of the Gandharva king\'s army the prince drove the enemies out of Vidarbha and regained his father\'s kingdom. He lived happily and made the Brahmin\'s son his prime minister.' },
        },
        {
          text: 'ब्राह्मणी के प्रदोष व्रत के माहात्म्य से जैसे राजकुमार और ब्राह्मण-पुत्र के दिन फिरे, वैसे ही भगवान शंकर अपने अन्य सब भक्तों के दिन भी फेरते हैं। हर हर महादेव।',
          meaning: { en: 'Just as through the greatness of the Brahmin woman\'s Pradosh vrata the days of the prince and the Brahmin\'s son turned for the better, so Lord Shankara turns the days of all his other devotees. Har Har Mahadev.' },
        },
      ],
    },
    {
      title: 'शनि प्रदोष कथा',
      titleEn: 'The Shani Pradosh katha in short',
      note: 'One copy only; given in brief.',
      verses: [
        {
          text: 'शनि प्रदोष व्रत की कथा के अनुसार प्राचीन काल में एक नगर सेठ थे। उनके घर में हर प्रकार की सुख-सुविधा थी, पर सन्तान न होने के कारण सेठ और सेठानी सदा दुःखी रहते थे। बहुत सोच-विचार करके सेठ अपना काम नौकरों को सौंपकर सेठानी के साथ तीर्थयात्रा पर निकल पडे।',
          meaning: { en: 'According to the katha of the Shani Pradosh vrata, in ancient times there was a city merchant. His house had every kind of comfort, but for want of a child the merchant and his wife were always sad. After much thought the merchant handed over his business to servants and set out with his wife on a pilgrimage.' },
        },
        {
          text: 'नगर से बाहर निकलने पर उन्हें एक साधु ध्यान में बैठे मिले। सेठ-सेठानी आशीर्वाद की प्रतीक्षा में उनके पास बैठ गए। आँखें खोलने पर साधु ने कहा कि मैं तुम्हारा दुःख जानता हूँ, तुम शनि प्रदोष व्रत करो, इससे तुम्हें सन्तान सुख मिलेगा। साधु ने उन्हें व्रत की विधि भी बताई।',
          meaning: { en: 'On leaving the city they found a sadhu seated in meditation. The merchant and his wife sat near him awaiting his blessing. On opening his eyes the sadhu said, "I know your sorrow; keep the Shani Pradosh fast, and by it you will get the joy of a child." The sadhu also told them the method of the fast.' },
        },
        {
          text: 'दोनों साधु का आशीर्वाद लेकर यात्रा पर आगे चले। तीर्थयात्रा से लौटकर सेठ और सेठानी ने मिलकर शनि प्रदोष व्रत किया, जिसके प्रभाव से उनके घर एक सुन्दर पुत्र का जन्म हुआ और उनका जीवन खुशियों से भर गया।',
          meaning: { en: 'Taking the sadhu\'s blessing the two went on their way. Returning from the pilgrimage the merchant and his wife together kept the Shani Pradosh fast, and by its power a handsome son was born in their house and their life was filled with joy.' },
        },
      ],
    },
    {
      title: 'भौम प्रदोष कथा',
      titleEn: 'The Bhauma Pradosh katha in short',
      note: 'One copy only; given in brief.',
      verses: [
        {
          text: 'बहुत समय पहले एक नगर में एक वृद्धा रहती थी, जिसका एक ही पुत्र था। वह हनुमान जी की परम भक्त थी और हर मंगलवार को नियम से व्रत रखकर बजरंगबली की पूजा करती थी। उसकी भक्ति देखकर एक दिन हनुमान जी ने उसकी श्रद्धा की परीक्षा लेने का विचार किया।',
          meaning: { en: 'Long ago in a city there lived an old woman who had one son only. She was a great devotee of Hanuman and every Tuesday kept the fast with discipline and worshipped Bajrangbali. Seeing her devotion, Hanuman one day thought of testing her faith.' },
        },
        {
          text: 'साधु का वेश धरकर हनुमान जी उसके घर पहुँचे और पुकारा कि कोई ऐसा हनुमान-भक्त है जो मेरी इच्छा पूरी कर सके। वृद्धा ने बाहर आकर विनम्रता से पूछा तो साधु ने कहा कि मुझे बहुत भूख लगी है और भोजन बनाना है, इसके लिए जमीन लीपनी होगी। वृद्धा दुविधा में पड गई, क्योंकि मंगलवार को वह मिट्टी खोदने या जमीन लीपने का काम नहीं करती थी।',
          meaning: { en: 'Taking the guise of a sadhu, Hanuman came to her house and called, "Is there any devotee of Hanuman who can fulfil my wish?" When the old woman came out and asked humbly, the sadhu said, "I am very hungry and want to cook food; for this the ground must be plastered." The old woman was in a dilemma, for on Tuesday she did not dig earth or plaster the ground.' },
        },
        {
          text: 'उसने हाथ जोडकर कहा कि महाराज, इस काम के अलावा आप जो आज्ञा देंगे मैं करूँगी। साधु ने उससे वचन लिया और फिर कहा कि मैं तेरे बेटे को बुलाकर उसकी पीठ पर आग जलाकर भोजन बनाऊँगा। वृद्धा का हृदय काँप उठा, पर वह वचन दे चुकी थी, इसलिए भारी मन से उसने बेटे को बुलाया, और साधु ने उसके हाथों से बेटे को पेट के बल लिटवाकर उसकी पीठ पर आग जलवाई।',
          meaning: { en: 'With folded hands she said, "Maharaj, except for this work I will do whatever you command." The sadhu took her promise and then said, "I shall call your son and cook the food by lighting a fire on his back." The old woman\'s heart trembled, but she had given her word, so with a heavy heart she called her son, and the sadhu had her lay the son face down with her own hands and light a fire on his back.' },
        },
        {
          text: 'वह दुःखी मन से घर के भीतर चली गई। कुछ देर बाद साधु ने भोजन तैयार करके कहा कि अपने बेटे को भी भोजन के लिए बुला। वृद्धा ने आँखों में आँसू भरकर कहा कि उसका नाम लेकर मेरा दुःख और न बढाइए, पर साधु के बार-बार कहने पर उसने बेटे को पुकारा और वह बिलकुल स्वस्थ उसके सामने आ गया। वह साधु के चरणों में गिर पडी, और उसकी सच्ची श्रद्धा से प्रसन्न होकर हनुमान जी अपने असली रूप में प्रकट हुए और उसे आशीर्वाद दिया।',
          meaning: { en: 'She went inside in sorrow. After a while the sadhu, having prepared the food, said, "Call your son also to eat." With tears in her eyes the old woman said, "Do not increase my sorrow by taking his name," but at the sadhu\'s repeated word she called her son, and he came before her perfectly well. She fell at the sadhu\'s feet, and pleased with her true faith Hanuman appeared in his real form and blessed her.' },
        },
      ],
    },
    {
      title: 'सातों वारों के प्रदोष',
      titleEn: 'The weekday Pradoshas',
      note: 'Popular belief, printed on modern web pages.',
      verses: [
        {
          text: 'त्रयोदशी जिस वार को पडती है उसी के अनुसार प्रदोष का फल माना जाता है। रवि प्रदोष से स्वास्थ्य और दीर्घायु, सोम प्रदोष से मन की शान्ति और इच्छाओं की पूर्ति, और भौम प्रदोष से ऋण से मुक्ति मानी जाती है।',
          meaning: { en: 'The fruit of Pradosh is taken according to the weekday on which the thirteenth falls. Ravi (Sunday) Pradosh is held to give health and long life, Som (Monday) Pradosh peace of mind and fulfilment of wishes, and Bhauma (Tuesday) Pradosh freedom from debt.' },
        },
        {
          text: 'बुध प्रदोष से विद्या और व्यापार में सफलता, गुरु प्रदोष से ज्ञान और शत्रुओं पर विजय, शुक्र प्रदोष से दाम्पत्य सुख और सन्तान सुख, तथा शनि प्रदोष से शनि की बाधाओं से राहत और कार्यक्षेत्र में उन्नति मानी जाती है। ये मान्यताएँ अलग-अलग पन्नों पर थोडे भेद से मिलती हैं।',
          meaning: { en: 'Budha (Wednesday) Pradosh is held to give success in learning and trade, Guru (Thursday) Pradosh knowledge and victory over enemies, Shukra (Friday) Pradosh conjugal happiness and the joy of children, and Shani (Saturday) Pradosh relief from Saturn\'s obstacles and progress in one\'s work. These beliefs differ slightly from page to page.' },
        },
      ],
    },
  ],
};
