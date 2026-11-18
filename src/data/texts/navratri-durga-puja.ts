/**
 * Navarātra worship of Durgā: the ghaṭasthāpanā, the nine forms and a short note on each day, and the Navarātra vrata-kathā
 * of Brahmā and Bṛhaspati (Sumati and the leper), in Hindi.
 * Collated Nov 2026 from typed web copies; not proofread against a single printed booklet.
 *
 * WITNESSES
 *   K  tring.co.in, "श्री दुर्गा नवरात्रि व्रत कथा | Navratri Vrat Katha" (the full dialogue of Bṛhaspati and Brahmā; Anātha of Pīṭhata; Sumati; the leper; the Goddess
 *      Ādiśakti; the previous birth as a Niṣāda's wife; the nine fast-days in prison; the husband's cure; the vidhi, the arghya fruits and the havana).
 *      Base for the kathā.
 *   T  navbharatlive.com, "चैत्र नवरात्रि की पूजा में ज़रूर पढ़ें यह पौराणिक व्रत कथा" (19 Mar 2026): the same kathā in summary, with the fruit of the vrata (the
 *      merit of a day's gift multiplied a crore-fold, the fruit of the Aśvamedha).
 *   G  navbharatlive.com, "शारदीय नवरात्रि 2026: घटस्थापना…" (10 Oct 2026): the installation (items; the north-east; the steps with jau, kalasha, mango or
 *      ashoka leaves, a coconut wrapped in red cloth; the resolve; the invocation; the akhaṇḍa jyoti, ārtī and bhoga). Base for the first section.
 *   Y  shubhpanchang.com (hi), "नवरात्रि का प्रारंभ": the nine forms in short (day one Śailaputrī to day nine Siddhidātrī).
 *   P  patrika.com, "नवरात्रि जानें नौ देवियों का स्वरूप, पूजा विधि, मंत्र व भोग": the nine forms with the offering for each day (ghee, sugar-candy and pañcāmṛta, milk,
 *      mālapuā, banana, honey, honey, milk, grains).
 *   R  bhaktibharat.com (Navratri festival page and blog list): read for the names and the usage only.
 *
 * CHOICES. K and T agree on the kathā (Sumati, her father's wrath, the leper, the forest, the Goddess, the previous birth, the one day's merit that cured the
 * husband, the son Udālaya, the vidhi). K is followed paragraph by paragraph and is the fuller. The Navarātra is of Caitra, Āṣāḍha, Āśvina and Māgha; the
 * kathā names Caitra, Āśvina and Āṣāḍha as in K. The nine forms are in the same order in Y and P. The offerings are from P alone and for day seven (honey) P
 * disagrees with the other usage known to the author (jaggery); they are given as P's; the days' mantras differ between the copies and are not printed. The
 * ghaṭasthāpanā is G's (one copy). No mantra is printed. Spelling is lightly normalised (no nukta; standard anusvāra). Meanings are original.
 */
import type { Mantra } from '../types';

export const navratriDurgaPuja: Mantra = {
  id: 'navratri-durga-puja',
  title: 'नवरात्रि दुर्गा पूजा',
  titleEn: 'Navratri Durga Puja and Vrat Katha',
  category: 'puja',
  order: 78,
  deity: 'Śrī Durgā',
  source: 'North Indian Navarātra worship of Durgā: ghaṭasthāpanā, the nine forms (Navadurgā) and the Navarātra vrata-kathā as told by Brahmā to Bṛhaspati; popular printed and web copies',
  summary:
    'The nine nights of Durga in the bright half of Ashvina: how the kalasha is installed on the first day, the nine forms of the Goddess with a short note and offering for each day, and the Navratri vrata katha that Brahma told Brihaspati, of the Brahmin\'s daughter Sumati, her leper husband, the Goddess\'s boon, and the method and fruit of the nine-day fast.',
  difficulty: 'easy',
  completeness: 'partial',
  contentNote:
    'The installation and the daily worship are given only as outlines of general practice from modern web pages; regional and family rules, the day-wise colours and the exact moments (muhurta) are not included. The offerings for each day rest on one page and the days\' mantras (which the copies print differently) are left out. This is not the Sanskrit Devi Mahatmya (Durga Saptashati), which is a separate text in the app; the aarti, the Chalisa and the kanya-pujan are not included.',
  sections: [
    {
      title: 'घटस्थापना',
      titleEn: 'The installation of the kalasha (ghatasthapana)',
      note: 'General practice only; families follow their own tradition.',
      verses: [
        {
          text: 'शारदीय नवरात्रि आश्विन मास के शुक्ल पक्ष की प्रतिपदा से आरम्भ होती है, और उसी दिन शुभ मुहूर्त में घटस्थापना या कलश स्थापना की जाती है। मान्यता है कि सही मुहूर्त में कलश स्थापित करने से घर में सुख, समृद्धि और सकारात्मकता आती है। कलश को घर के ईशान कोण, अर्थात् उत्तर-पूर्व दिशा में रखना चाहिए, जिसे देवताओं का स्थान माना गया है।',
          meaning: { en: 'Sharadiya Navratri begins on the first lunar day of the bright fortnight of Ashvina, and on that day at an auspicious time the ghatasthapana, or installation of the kalasha, is done. It is believed that installing the kalasha at the proper time brings happiness, prosperity and positivity to the house. The kalasha should be placed in the north-east corner of the house, which is held to be the place of the gods.' },
        },
        {
          text: 'सामग्री पहले एकत्र कर लें: मिट्टी, ताँबे या पीतल का कलश और उसका ढक्कन, जौ बोने के लिए मिट्टी का चौडा पात्र, पवित्र मिट्टी और जौ, गंगाजल और शुद्ध जल, कलावा, सिन्दूर, अक्षत, हल्दी की गाँठ, सिक्का, सुपारी, आम या अशोक के पाँच या सात पत्ते, जटा वाला नारियल, देवी के लिए लाल चुनरी, घी का दीपक, धूप, कपूर, फल, मिठाई और पंचामृत।',
          meaning: { en: 'Gather the materials first: a clay, copper or brass kalasha and its lid, a wide clay pan for sowing barley, clean earth and barley, Ganges water and pure water, sacred thread, sindur, rice grains, a lump of turmeric, a coin, a betel nut, five or seven mango or ashoka leaves, a coconut with its husk, a red scarf for the Goddess, a ghee lamp, incense, camphor, fruit, sweets and pañcamrita.' },
        },
        {
          text: 'पहले मिट्टी के चौडे पात्र में पवित्र मिट्टी की एक परत बिछाकर उस पर जौ के दाने छिडकें, फिर थोडी मिट्टी डालकर ऊपर से थोडा पानी छिडक दें। फिर कलश के गले में कलावा बाँधें, उस पर सिन्दूर से स्वस्तिक बनाएँ, उसमें शुद्ध जल और थोडा गंगाजल भरें और उसमें सिक्का, सुपारी, अक्षत, हल्दी की गाँठ और दूर्वा डालें। कलश के मुख पर आम या अशोक के पाँच या सात पत्ते लगाएँ।',
          meaning: { en: 'First spread a layer of clean earth in the wide clay pan, scatter barley grains on it, then add a little earth and sprinkle a little water over it. Then tie the sacred thread round the neck of the kalasha, draw a svastika on it with sindur, fill it with pure water and a little Ganges water, and put in a coin, betel nut, rice grains, a lump of turmeric and durva grass. Place five or seven mango or ashoka leaves on the mouth of the kalasha.' },
        },
        {
          text: 'मिट्टी के ढक्कन में अक्षत भरकर उसे कलश के ऊपर रखें। जटा वाले नारियल को लाल कपडे या चुनरी में लपेटकर कलावा से बाँधें और चावल से भरे ढक्कन पर स्थापित करें, ध्यान रहे कि नारियल का मुख आपकी ओर रहे। फिर तैयार कलश को जौ वाले पात्र के ठीक बीच में रखें, और पूरे को ईशान कोण में लाल कपडा बिछी साफ चौकी पर स्थापित करें।',
          meaning: { en: 'Fill the clay lid with rice grains and set it on the kalasha. Wrap the coconut with its husk in red cloth or a scarf, tie it with sacred thread and set it on the lid filled with rice, taking care that the face of the coconut is towards you. Then place the prepared kalasha exactly in the middle of the barley pan and install the whole on a clean low table spread with red cloth in the north-east corner.' },
        },
        {
          text: 'हाथ में जल, अक्षत और फूल लेकर नवरात्रि व्रत का संकल्प लें। देवी दुर्गा का ध्यान करते हुए कहें कि हे माँ दुर्गा, आप इस कलश में नौ दिनों के लिए विराजित हों और हमारी पूजा स्वीकार करें। फिर अक्षत और फूल कलश के पास चढाएँ, और अन्त में अखण्ड ज्योति या घी का दीपक जलाकर माँ दुर्गा की आरती करें और भोग लगाएँ।',
          meaning: { en: 'Take water, rice grains and a flower in your hand and take the resolve of the Navratri fast. Meditating on Goddess Durga say: "O Mother Durga, be seated in this kalasha for nine days and accept our worship." Then offer the rice grains and the flower near the kalasha, and finally light the unbroken flame or a ghee lamp, perform the arati of Mother Durga and offer food.' },
        },
      ],
    },
    {
      title: 'नवदुर्गा के नौ रूप',
      titleEn: 'The nine forms and the day\'s worship',
      note: 'General practice only; the offerings rest on one page.',
      verses: [
        {
          text: 'पहले दिन प्रतिपदा को शैलपुत्री की पूजा होती है। वे हिमालय की पुत्री हैं, बैल पर सवार, त्रिशूल और कमल धारण किए हुए, और प्रकृति की शक्ति मानी जाती हैं। इस दिन गाय का घी चरणों में अर्पित करने से आरोग्य का आशीर्वाद मिलता है।',
          meaning: { en: 'On the first day, pratipada, Shailaputri is worshipped. She is the daughter of the Himalaya, seated on a bull, holding a trident and a lotus, and is regarded as the power of nature. On this day offering cow\'s ghee at her feet is held to bring the blessing of health.' },
        },
        {
          text: 'दूसरे दिन ब्रह्मचारिणी की पूजा होती है, जो शिव को पति रूप में पाने के लिए की गई पार्वती की तपस्या का रूप हैं। वे माला और जलपात्र धारण करती हैं और भक्ति और तपस्या का प्रतीक हैं। इस दिन मिश्री, चीनी और पंचामृत का भोग लगाया जाता है।',
          meaning: { en: 'On the second day Brahmacharini is worshipped, the form of Parvati\'s austerity to win Shiva as husband. She holds a rosary and a water-pot and is a symbol of devotion and austerity. On this day sugar-candy, sugar and pañcamrita are offered.' },
        },
        {
          text: 'तीसरे दिन चन्द्रघण्टा की पूजा होती है, जो माथे पर अर्धचन्द्र धारण करती हैं, युद्ध के लिए तैयार योद्धा देवी हैं और वीरता तथा शान्ति दोनों की प्रतीक हैं। उन्हें दूध और उससे बनी चीजों का भोग लगाया जाता है और उसी का दान भी किया जाता है।',
          meaning: { en: 'On the third day Chandraghanta is worshipped, who wears a half-moon on her forehead, is a warrior goddess ready for battle, and stands for both valour and peace. Milk and things made of milk are offered to her, and they are also given in charity.' },
        },
        {
          text: 'चौथे दिन कूष्माण्डा की पूजा होती है, जिन्हें ब्रह्माण्ड की रचना करने वाली माना जाता है। वे सूर्य के केन्द्र में निवास करती हैं और संसार को ऊर्जा और प्रकाश देती हैं; नाम का अर्थ है मुस्कराते हुए ब्रह्माण्ड रचने वाली। इस दिन मालपुए का भोग लगाया जाता है।',
          meaning: { en: 'On the fourth day Kushmanda is worshipped, who is regarded as the maker of the universe. She dwells in the centre of the Sun and gives the world energy and light; her name means the one who creates the universe with a smile. On this day malpuas are offered.' },
        },
        {
          text: 'पाँचवें दिन स्कन्दमाता की पूजा होती है, जो कार्तिकेय की माता हैं और सिंह पर बैठी, पुत्र को गोद में लिए दिखाई जाती हैं। वे माँ के प्रेम की शक्ति का रूप हैं और भक्तों की रक्षा माँ की तरह करती हैं। इस दिन केले का भोग लगाया जाता है।',
          meaning: { en: 'On the fifth day Skandamata is worshipped, the mother of Kartikeya, shown seated on a lion with her son in her lap. She is the form of the power of a mother\'s love and protects her devotees as a mother does. On this day bananas are offered.' },
        },
        {
          text: 'छठे दिन कात्यायनी की पूजा होती है, जो दुर्गा का उग्र योद्धा रूप हैं, महिषासुर का नाश करने के लिए देवताओं के क्रोध से प्रकट हुईं। वे सिंह पर सवार होती हैं और चारों हाथों में शस्त्र धारण करती हैं। इस दिन प्रसाद में शहद का प्रयोग होता है।',
          meaning: { en: 'On the sixth day Katyayani is worshipped, the fierce warrior form of Durga who appeared from the anger of the gods to destroy Mahishasura. She rides a lion and holds weapons in her four hands. On this day honey is used in the prasada.' },
        },
        {
          text: 'सातवें दिन कालरात्रि की पूजा होती है, जो सबसे उग्र रूप हैं, काले रंग की, बिखरे बालों वाली, और मुख तथा नासिका से ज्वाला निकलती हुई दिखाई जाती हैं। वे अन्धकार, अज्ञान और बुरी शक्तियों का नाश करती हैं और भक्तों को साहस और निर्भयता देती हैं। इस दिन प्रायः गुड का भोग लगाया जाता है; एक प्रति में शहद बताया गया है।',
          meaning: { en: 'On the seventh day Kalaratri is worshipped, the fiercest form, shown dark in colour, with dishevelled hair and flames coming from mouth and nostrils. She destroys darkness, ignorance and evil powers and gives devotees courage and fearlessness. Jaggery is the usual offering on this day; one copy gives honey.' },
        },
        {
          text: 'आठवें दिन महागौरी की पूजा होती है, जो कालरात्रि के बाद का शान्त और पवित्र रूप हैं। वे श्वेत या सुनहरे गौर वर्ण की हैं, जिनकी उपमा शंख, चन्द्रमा और कुन्द के फूल से दी जाती है, और शान्ति, पवित्रता और क्षमा की प्रतीक हैं। इस दिन प्रसाद दूध का ही होना चाहिए।',
          meaning: { en: 'On the eighth day Mahagauri is worshipped, the calm and pure form that follows Kalaratri. She is white or golden-fair, her fairness compared to a conch, the moon and the kunda flower, and she is a symbol of peace, purity and forgiveness. On this day the prasada should be of milk only.' },
        },
        {
          text: 'नवें दिन सिद्धिदात्री की पूजा होती है, जो कमल पर विराजमान और आठों सिद्धियों से परिपूर्ण हैं। वे अपने भक्तों की सब मनोकामनाएँ पूरी करती हैं और नवरात्रि के अन्तिम दिन नवमी को उनकी पूजा की जाती है। इस दिन विभिन्न प्रकार के अनाजों का भोग लगाया जाता है।',
          meaning: { en: 'On the ninth day Siddhidatri is worshipped, seated on a lotus and full of all eight siddhis. She fulfils all the wishes of her devotees and is worshipped on the last day of Navratri, the navami. On this day various kinds of grain are offered.' },
        },
      ],
    },
    {
      title: 'नवरात्रि व्रत कथा',
      titleEn: 'The Navratri vrata katha told by Brahma to Brihaspati',
      note: 'Heard during the nine nights.',
      verses: [
        {
          text: 'बृहस्पति जी बोले कि हे ब्राह्मण, आप अत्यन्त बुद्धिमान और चारों वेदों को जानने वालों में श्रेष्ठ हैं। कृपा करके बताइए कि चैत्र, आश्विन और आषाढ मास के शुक्ल पक्ष में नवरात्र का व्रत और उत्सव क्यों किया जाता है, इस व्रत का फल क्या है, किस प्रकार करना उचित है और पहले इसे किसने किया?',
          meaning: { en: 'Brihaspati said, "O Brahmin, you are most wise and the best among those who know the four Vedas. Kindly tell me why the Navaratra fast and festival is kept in the bright fortnight of the months Chaitra, Ashvina and Ashadha, what is the fruit of this fast, how it is proper to do it, and who did it first."' },
        },
        {
          text: 'ब्रह्मा जी बोले कि हे बृहस्पते, प्राणियों का हित चाहकर तुमने बहुत अच्छा प्रश्न किया। जो मनुष्य मनोरथ पूरा करने वाली दुर्गा, महादेवी, सूर्य और नारायण का ध्यान करते हैं वे धन्य हैं। यह नवरात्र व्रत सब कामनाओं को पूरा करने वाला है; इससे पुत्र चाहने वाले को पुत्र, धन चाहने वाले को धन, विद्या चाहने वाले को विद्या और सुख चाहने वाले को सुख मिल सकता है।',
          meaning: { en: 'Brahma said, "O Brihaspati, you have asked an excellent question, wishing the good of creatures. Those who meditate on Durga, the great goddess who fulfils desires, on the Sun and on Narayana are blessed. This Navaratra fast fulfils all desires; by it one who wants a son may get a son, one who wants wealth wealth, one who wants learning learning and one who wants happiness happiness."' },
        },
        {
          text: 'इस व्रत से रोगी का रोग दूर होता है, कारागार में बन्द मनुष्य बन्धन से छूट जाता है, सारी आपत्तियाँ दूर हो जाती हैं और घर में सब सम्पत्तियाँ आ जाती हैं। बन्ध्या स्त्री को भी इस व्रत से पुत्र होता है। जिसने पहले इस व्रत को किया उसका पवित्र इतिहास मैं तुम्हें सुनाता हूँ, तुम सावधान होकर सुनो।',
          meaning: { en: 'By this fast the sick man\'s disease goes, a man in prison is freed from bondage, all calamities are removed and all riches come into the house. A barren woman too gets a son by this fast. "I tell you the sacred history of the one who first kept this fast; listen attentively."' },
        },
        {
          text: 'ब्रह्मा जी बोले कि पीठत नाम के मनोहर नगर में अनाथ नाम का एक ब्राह्मण रहता था। वह भगवती दुर्गा का भक्त था। उसके एक अत्यन्त सुन्दर पुत्री हुई, जिसका नाम सुमति था। वह अपनी सखियों के साथ खेलती हुई ऐसे बढने लगी जैसे शुक्ल पक्ष में चन्द्रमा की कला बढती है।',
          meaning: { en: 'Brahma said, "In a charming city named Pithata there lived a Brahmin named Anatha. He was a devotee of Goddess Durga. A very beautiful daughter was born to him, named Sumati. Playing with her friends she grew as the moon\'s phase grows in the bright fortnight."' },
        },
        {
          text: 'उसका पिता प्रतिदिन दुर्गा की पूजा और होम करता था और सुमति भी नियम से वहाँ उपस्थित रहती थी। एक दिन वह सखियों के साथ खेलने लग गई और भगवती के पूजन में उपस्थित नहीं हुई। पिता को क्रोध आया और वे बोले कि हे दुष्ट पुत्री, आज प्रभात से तूने भगवती का पूजन नहीं किया, इसलिए मैं किसी कुष्ठी और दरिद्र मनुष्य के साथ तेरा विवाह करूँगा।',
          meaning: { en: 'Her father used to worship Durga and make the fire-offering daily, and Sumati too was regularly present there. One day she began to play with her friends and was not present at the Goddess\'s worship. Her father became angry and said, "O wicked daughter, since this morning you have not worshipped the Goddess; therefore I shall marry you to some leper and poor man."' },
        },
        {
          text: 'पिता के वचन सुनकर सुमति को बहुत दुःख हुआ, पर वह बोली कि पिताजी, मैं आपकी कन्या हूँ और आपके अधीन हूँ, जैसी आपकी इच्छा हो वैसा कीजिए, पर होगा वही जो मेरे भाग्य में लिखा है, मुझे इस पर पूरा विश्वास है। अपनी कन्या के ऐसे निर्भय वचन सुनकर ब्राह्मण का क्रोध और बढ गया, और उसने कन्या का विवाह एक कुष्ठी के साथ कर दिया।',
          meaning: { en: 'Hearing her father\'s words Sumati was greatly pained, but she said, "Father, I am your daughter and am under your authority; do as you wish, but what is written in my fate will happen; I have full faith in this." Hearing his daughter\'s fearless words the Brahmin\'s anger grew, and he married the girl to a leper.' },
        },
        {
          text: 'पिता ने अत्यन्त क्रोध में पुत्री से कहा कि जाओ, जल्दी जाओ, अपने कर्म का फल भोगो और देखें कि केवल भाग्य के भरोसे रहकर तुम क्या करती हो। सुमति ने मन में सोचा कि मेरा बडा दुर्भाग्य है जो मुझे ऐसा पति मिला। इस तरह अपने दुःख का विचार करती हुई वह पति के साथ वन चली गई और कुश वाले भयावने स्थान में उन्होंने वह रात बडे कष्ट से बिताई।',
          meaning: { en: 'In great anger the father said to his daughter, "Go, go quickly, bear the fruit of your karma, and let us see what you do by relying on fate alone." Sumati thought in her mind, "My misfortune is great that I got such a husband." Thinking thus of her sorrow she went with her husband to the forest and they passed that night with great difficulty in a fearful kusha-grown place.' },
        },
        {
          text: 'उस गरीब बालिका की ऐसी दशा देखकर भगवती पूर्व पुण्य के प्रभाव से प्रकट हुईं और बोलीं कि हे दीन ब्राह्मणी, मैं तुझ पर प्रसन्न हूँ, जो चाहो वरदान माँगो। सुमति ने पूछा कि आप कौन हैं जो मुझ पर प्रसन्न हुई हैं। देवी बोलीं कि मैं आदिशक्ति हूँ, मैं ही ब्रह्मविद्या और सरस्वती हूँ, और प्रसन्न होने पर प्राणियों का दुःख दूर करके उन्हें सुख देती हूँ।',
          meaning: { en: 'Seeing the condition of the poor girl, Bhagavati appeared through the power of her earlier merit and said, "O poor Brahmin woman, I am pleased with you; ask any boon." Sumati asked, "Who are you who are pleased with me?" The Goddess said, "I am Adishakti; I am Brahmavidya and Sarasvati, and when pleased I remove the sorrow of creatures and give them happiness."' },
        },
        {
          text: 'देवी ने कहा कि मैं तुम्हारे पूर्व जन्म की बात सुनाती हूँ। तुम पूर्व जन्म में निषाद की अत्यन्त पतिव्रता स्त्री थीं। एक दिन तुम्हारे पति ने चोरी की और सिपाहियों ने तुम दोनों को पकडकर जेल में बन्द कर दिया। उन्होंने तुम्हें भोजन भी नहीं दिया, इसलिए नवरात्र के दिनों में तुमने न कुछ खाया न जल पिया, और इस प्रकार नौ दिन का नवरात्र व्रत हो गया। उसी व्रत के प्रभाव से प्रसन्न होकर मैं तुम्हें मनचाही वस्तु दे रही हूँ।',
          meaning: { en: 'The Goddess said, "I tell you of your former birth. In the former birth you were the very devoted wife of a Nishada. One day your husband committed a theft, and soldiers seized you both and shut you in prison. They gave you no food either, so in the days of Navaratra you neither ate nor drank, and thus the nine-day Navaratra fast came to be done. Pleased by the power of that same fast I am giving you what you wish."' },
        },
        {
          text: 'सुमति ने कहा कि हे दुर्गे, आपको प्रणाम करती हूँ, कृपा करके मेरे पति का कुष्ठ दूर कीजिए। देवी ने कहा कि उन दिनों जो व्रत तुमने किया था उसके एक दिन का पुण्य अपने पति का कुष्ठ दूर करने के लिए अर्पण करो, मेरे प्रभाव से तुम्हारा पति कुष्ठ से रहित और सोने के समान शरीर वाला हो जाएगा। ब्राह्मणी ने प्रसन्न होकर कहा कि ठीक है, और उसके पति का शरीर भगवती की कृपा से कुष्ठहीन और अत्यन्त कान्तिमान हो गया।',
          meaning: { en: 'Sumati said, "O Durga, I bow to you; kindly remove my husband\'s leprosy." The Goddess said, "Give the merit of one day of the fast you kept in those days to remove your husband\'s leprosy; by my power your husband will be free of leprosy and have a body like gold." The Brahmin woman said joyfully, "So be it," and by the Goddess\'s grace her husband\'s body became free of leprosy and very radiant.' },
        },
        {
          text: 'पति की मनोहर देह देखकर सुमति ने देवी को अति पराक्रमी समझकर स्तुति की कि हे दुर्गे, आप दुर्गति को दूर करने वाली, तीनों जगत का सन्ताप हरने वाली, रोगी को निरोग करने वाली और दुष्ट का नाश करने वाली हैं, आप ही जगत की माता और पिता हैं। मेरे पिता ने कुष्ठी से विवाह करके मुझे घर से निकाल दिया था, आपने ही मुझे इस आपत्ति के समुद्र से उबारा है, मुझ दीन की रक्षा कीजिए।',
          meaning: { en: 'Seeing her husband\'s beautiful body, Sumati, thinking the Goddess greatly mighty, praised her: "O Durga, you remove misfortune, take away the torment of the three worlds, heal the sick and destroy the wicked; you alone are the mother and father of the world. My father married me to a leper and drove me out of home; it is you who have lifted me from this sea of calamity; protect me, a wretched woman."' },
        },
        {
          text: 'उसकी स्तुति से देवी को बहुत सन्तोष हुआ और उन्होंने कहा कि हे ब्राह्मणी, उदालय नाम का बुद्धिमान, धनवान, कीर्तिमान और जितेन्द्रिय पुत्र तुम्हें शीघ्र होगा, और जो इच्छा हो वह भी माँग लो। तब सुमति ने कहा कि हे भगवती, यदि आप मुझ पर प्रसन्न हैं तो कृपा करके मुझे नवरात्र व्रत की विधि और उसका फल विस्तार से बताइए।',
          meaning: { en: 'The Goddess was greatly satisfied by her praise and said, "O Brahmin woman, a son named Udalaya, wise, wealthy, famous and self-controlled, will soon be yours, and ask whatever else you wish." Then Sumati said, "O Bhagavati, if you are pleased with me, kindly tell me in detail the method of the Navaratra fast and its fruit."' },
        },
        {
          text: 'देवी ने कहा कि मैं तुम्हें सब पापों को दूर करने वाली नवरात्र व्रत विधि बताती हूँ। आश्विन मास के शुक्ल पक्ष की प्रतिपदा से नौ दिन तक विधिपूर्वक व्रत करे, और दिन भर का व्रत न हो सके तो एक समय भोजन करे। ब्राह्मणों से पूछकर कलश स्थापित करे और वाटिका बनाकर उसे प्रतिदिन जल से सींचे। महाकाली, महालक्ष्मी और महासरस्वती की मूर्तियाँ बनाकर प्रतिदिन विधि से उनकी पूजा करे और फूलों से अर्घ्य दे।',
          meaning: { en: 'The Goddess said, "I tell you the method of the Navaratra fast, which removes all sins. From the first day of the bright fortnight of Ashvina keep the fast by rule for nine days, and if a fast for the whole day cannot be kept, take one meal. After asking the brahmins install the kalasha, make a small garden and water it daily. Make images of Mahakali, Mahalakshmi and Mahasarasvati and worship them daily by rule, and give arghya with flowers."' },
        },
        {
          text: 'उन्होंने कहा कि फलों से अर्घ्य देने पर बिजौरा से रूप, जायफल से कीर्ति, दाख से कार्य-सिद्धि, आँवले से सुख और केले से आभूषण मिलते हैं। फिर विधि से हवन करे: खाँड, घी, गेहूँ, शहद, जौ, तिल, बेल, नारियल, दाख और कदम्ब से हवन होता है, और गेहूँ के होम से लक्ष्मी मिलती है। खाँड, घी, नारियल, जौ और तिल तथा फलों से होम करने पर मनचाही वस्तु मिलती है।',
          meaning: { en: 'She said, "When arghya is given with fruits, the citron gives beauty, nutmeg fame, raisins success in work, the amla happiness and the banana ornaments. Then perform the fire-offering by rule: it is made with sugar, ghee, wheat, honey, barley, sesame, bilva, coconut, raisins and kadamba, and the wheat offering brings Lakshmi. By offering with sugar, ghee, coconut, barley and sesame and with fruits, the desired object is gained."' },
        },
        {
          text: 'व्रत करने वाला इस विधान से होम करके आचार्य को अत्यन्त नम्रता से प्रणाम करे और व्रत की सिद्धि के लिए उसे दक्षिणा दे। जो कोई इस महाव्रत को पहले बताई विधि के अनुसार करता है उसके सब मनोरथ सिद्ध होते हैं, इसमें थोडा भी संशय नहीं। इन नौ दिनों में जो दान आदि दिया जाता है उसका करोडों गुना फल मिलता है, और नवरात्र का व्रत करने से अश्वमेध यज्ञ का फल मिलता है।',
          meaning: { en: 'The keeper of the fast, having made the fire-offering by this rule, should bow to the acharya with great humility and give him a gift for the success of the fast. Whoever keeps this great fast by the method told before has all his wishes fulfilled; there is not the slightest doubt in this. Whatever gift is given in these nine days yields fruit a crore-fold, and by keeping the Navaratra fast the fruit of the Ashvamedha sacrifice is obtained.' },
        },
        {
          text: 'ब्रह्मा जी बोले कि हे बृहस्पते, इस प्रकार ब्राह्मणी को व्रत की विधि और फल बताकर देवी अन्तर्धान हो गईं। जो स्त्री या पुरुष इस व्रत को भक्ति से करता है वह इस लोक में सुख पाकर अन्त में दुर्लभ मोक्ष को प्राप्त होता है। यह दुर्लभ व्रत का माहात्म्य मैंने तुम्हें बताया।',
          meaning: { en: 'Brahma said, "O Brihaspati, having thus told the Brahmin woman the method and fruit of the fast, the Goddess vanished. A woman or man who keeps this fast with devotion gets happiness in this world and in the end attains the rare liberation. This greatness of the rare fast I have told you."' },
        },
        {
          text: 'बृहस्पति जी बोले कि हे ब्राह्मण, आपने अमृत के समान इस नवरात्र व्रत का माहात्म्य सुनाकर मुझ पर बडी कृपा की। ब्रह्मा जी ने कहा कि हे बृहस्पते, तुम धन्य हो जो तुमने सब प्राणियों का हित करने वाले इस अलौकिक व्रत के बारे में पूछा। यह भगवती शक्ति सब लोकों का पालन करने वाली है, इस महादेवी के प्रभाव को कौन जान सकता है।',
          meaning: { en: 'Brihaspati said, "O Brahmin, you have shown me great kindness by telling the greatness of this Navaratra fast, which is like nectar." Brahma said, "O Brihaspati, you are blessed that you asked about this extraordinary fast that does good to all creatures. This Bhagavati Shakti sustains all the worlds; who can know the power of this Mahadevi?"' },
        },
      ],
    },
  ],
};
