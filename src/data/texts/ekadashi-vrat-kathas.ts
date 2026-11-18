/**
 * Ekadashi vrat kathas: the Hindi (Devanagari) kathas of the twenty-four Ekadashis and the two of the adhika month
 * (Padmini and Parama), in the Krishna-Yudhishthira (or Krishna-Arjuna) dialogue frame of the Padma / Bhavishyottara
 * Purana tradition, as read in North Indian homes, with a short opening section on the rules of the fast.
 * Collated Nov 2026 from typed web copies; not proofread against a single printed booklet.
 *
 * ORDER. Chaitra shukla (Kamada) to Chaitra krishna (Papamochani), then Padmini and Parama. This is the chain the Hindi
 * booklets print: each katha opens with Yudhishthira (or Arjuna) naming the Ekadashi just told. Months and pakshas are
 * purnimanta (north Indian) as in the printed copies; the krishna-paksha Ekadashis therefore carry the month names of the
 * north Indian calendar (Varuthini is Vaishakha krishna, which is Chaitra krishna by the amanta count of the south).
 *
 * WITNESSES (the base for every katha is B; the others were read against it for names, sequence of events and frame)
 *   B  bhaktibharat.com, "<name> Ekadashi Vrat Katha" pages (the standard booklet text, the same as webdunia's). All 26.
 *   D  drikpanchang.com Hindi, "<name> Ekadashi Vrat Katha" pages (Padma Purana mahatmya in dialogue). All but Shravana
 *      Putrada (page refused). For Varuthini, Apara, Papankusha and Kamika D gives only the mahatmya and not the story.
 *   S  sanatanaaradhana.com, Hindi "vrat-katha" pages (free modern retellings; used for the plot only).
 *   Z  beyondzasya.com, Hindi "Ekadashi Vrat Katha" pages (also modern retellings; plot only).
 *   H  hariomgroup.org, "Ekadashi vrat kathayen, mahatmya sahit" (booklet text on the Puranas; frame, names).
 *   others: aajtak.in (Apara), indiatv.in (Papankusha, Shravana Putrada), hindi.webdunia.com and sanskritsubhashita.com
 *   (Devutthani), gaurakrishna.com (Pausha Putrada, Rishi Prasad text of the Padma Purana).
 *   Witnesses read per Ekadashi (base B in all):
 *   Kamada D S Z H | Varuthini D S Z H | Mohini D S Z H | Apara D S + aajtak | Nirjala D S Z H | Yogini D S Z H |
 *   Devshayani D S H | Kamika D S Z H | Shravana Putrada Z + indiatv + H | Aja D S Z H | Parivartini D S Z H |
 *   Indira D S Z H | Papankusha D S Z H + indiatv | Rama D S Z H | Devutthani webdunia + sanskritsubhashita + H |
 *   Utpanna D S Z H | Mokshada D S Z H | Saphala D S Z H | Pausha Putrada D + gaurakrishna + H | Shattila D S Z H |
 *   Jaya D S Z H | Vijaya D S Z | Amalaki D S | Papamochani D Z | Padmini D S H | Parama D S H.
 *   The opening rules: B (Padmini, Nirjala, Kamika pages), D (Varuthini page), devdhun.com (ekadashi vrat niyam), and
 *   several newspaper food lists for the fruit meal.
 *
 * CHOICES. The wording is B's. Only the spelling was normalised: nukta letters written plain, the web "मे" given as "में",
 * visarga typed as a colon restored (अतः, प्रातः, दुःख), "वायपेय" read as वाजपेय, doubled-vowel typing slips mended, figures written
 * in words (the validator wants Devanagari only), Shattila's numbered list of the six sesame uses turned into a sentence, and
 * the site menus, aarti links and "jay shri hari" footers cut. D, S, Z and H agree with B on the names, the order of events
 * and the speakers; they differ mainly in length. Where D prints only the mahatmya (Varuthini, Apara, Papankusha, Kamika)
 * the story is B's alone, backed by aajtak (Apara), indiatv (Papankusha) and Z (Kamika). B's Padmini is the briefest telling
 * (the king Kritavirya, Anasuya's counsel, the vigil, Kartavirya's birth) and S adds detail that B does not have; nothing
 * from S was added. B's Devutthani is the folk story of the servant who eats with the Lord (W and SS print the same);
 * D's Prabodhini page tells a different Puranic account, not used here. B's Parivartini page is titled Parshva Ekadashi.
 * The frame of each katha is as B prints it: Yudhishthira asks in most, Arjuna in Kamika, Aja, Papankusha, Papamochani and
 * Parama. The Vedic and Sanskrit verses of the Puranic originals are not in these Hindi copies and are not added.
 *
 * LENGTH. Each katha is held to 6-15 units. Where B runs longer (Nirjala, Rama, Utpanna, Saphala, Pausha, Shattila,
 * Papamochani, Parama, Apara, Kamika, Devshayani) the rules, praise-lists and the repeated questions of Yudhishthira
 * were left out and not the story; in Rama, Papamochani and Parama a few units therefore run to six or seven sentences.
 * Dropped: the "fruit" lists in Apara and Kamika, the donation list and phalashruti of Nirjala, the second request to
 * depart in Papamochani, the Panchratri phalas in Parama, and website headers and links.
 */
import type { Mantra } from '../types';
export const ekadashiVratKathas: Mantra = {
  id: 'ekadashi-vrat-kathas',
  title: 'एकादशी व्रत कथाएँ',
  titleEn: 'Ekadashi Vrat Kathas (all 26)',
  category: 'puja',
  order: 80,
  deity: 'Śrī Viṣṇu',
  source: 'North Indian vrat-kathas of the twenty-four Ekadashis and the two of the adhika month (Padma and Bhavishyottara Purana tradition: Krishna and Yudhishthira); popular printed and web copies',
  summary:
    "The Hindi vrat kathas of all twenty-six Ekadashis as read in North Indian homes, in the order of the year from Chaitra shukla (Kamada) to Chaitra krishna (Papamochani) followed by Padmini and Parama of the adhika month, each told by Krishna to Yudhishthira or Arjuna, with a short opening note on the rules of the fast and its parana.",
  difficulty: 'easy',
  completeness: 'complete',
  contentNote:
    "All twenty-six kathas are given in the order of the year (see the note at the top of the file for the witnesses): Chaitra shukla Kamada, Vaishakha krishna Varuthini, Vaishakha shukla Mohini, Jyeshtha krishna Apara, Jyeshtha shukla Nirjala, Ashadha krishna Yogini, Ashadha shukla Devshayani, Shravana krishna Kamika, Shravana shukla Putrada, Bhadrapada krishna Aja, Bhadrapada shukla Parivartini, Ashvina krishna Indira, Ashvina shukla Papankusha, Kartika krishna Rama, Kartika shukla Devutthani, Margashirsha krishna Utpanna, Margashirsha shukla Mokshada, Pausha krishna Saphala, Pausha shukla Putrada, Magha krishna Shattila, Magha shukla Jaya, Phalguna krishna Vijaya, Phalguna shukla Amalaki, Chaitra krishna Papamochani, then Padmini and Parama of the adhika month. Months follow the purnimanta (north Indian) count, in which the dark half comes first in each month. The katha is the popular dialogue of Krishna with Yudhishthira or Arjuna; the very long kathas are given in 6 to 15 short units with the rites, lists of fruit and repeated questions left out. The rules at the start are short and North Indian; families, saints and regions differ, so follow your own practice and take the parana time from the Panchanga (the Madhva rules are in the separate Ekadashi Vrata Niyama text). The Devshayani katha includes the sage's remark that a shudra's austerity is the cause of the drought; the king refuses to act on it and the remedy is the Ekadashi, which is the point of the katha. Aarti and the many Sanskrit verses of the Puranas are not included.",
  sections: [
    {
      title: "व्रत के नियम",
      titleEn: "The rules of the fast",
      note: "Short and North Indian; families differ in detail, so follow your own practice and the Panchanga for the parana time.",
      verses: [
        {
          text: "एकादशी हर पक्ष की ग्यारहवीं तिथि है और भगवान विष्णु को समर्पित है। वर्ष में चौबीस एकादशियाँ आती हैं, और अधिकमास (मलमास) में पद्मिनी तथा परमा के जुड़ने से छब्बीस हो जाती हैं। इस संग्रह में हर एकादशी की कथा उसके मास और पक्ष के साथ दी गई है।",
          meaning: { en: "Ekadashi is the eleventh tithi of each fortnight and belongs to Lord Vishnu. There are twenty-four in a year, and with Padmini and Parama of the adhika (mala) month the number becomes twenty-six. In this collection the katha of each Ekadashi is given with its month and fortnight." },
        },
        {
          text: "दशमी के दिन सायंकाल हल्का सात्त्विक भोजन एक ही बार करें। कांसे के बर्तन में भोजन, मांस, मसूर, चना, कोदों, शहद, पराया अन्न और दूसरी बार भोजन इस दिन वर्जित माने गए हैं। रात को भूमि पर सोएँ और ब्रह्मचर्य का पालन करें।",
          meaning: { en: "On Dashami eat only once, a light sattvik meal, in the evening. Eating from a bronze vessel, meat, masur dal, chana, kodo millet, honey, another's food and a second meal are held forbidden that day. Sleep on the ground at night and keep celibacy." },
        },
        {
          text: "एकादशी को ब्रह्म मुहूर्त में उठकर स्नान करें, स्वच्छ वस्त्र पहनें और भगवान विष्णु का स्मरण करके व्रत का संकल्प लें। धूप, दीप, नैवेद्य, पुष्प और तुलसीदल से विष्णु का पूजन करें।",
          meaning: { en: "On Ekadashi rise at brahma muhurta, bathe, put on clean clothes, remember Lord Vishnu and take the resolve of the vrata. Worship Vishnu with incense, lamp, offering, flowers and tulasi leaves." },
        },
        {
          text: "इस दिन चावल, गेहूँ, जौ और दाल जैसा अन्न नहीं खाया जाता। फलाहार में फल, दूध, साबूदाना, कुट्टू, सिंघाड़े का आटा और सेंधा नमक लिया जाता है। निर्जला एकादशी में जल भी नहीं पिया जाता; अपनी सामर्थ्य और घर की परम्परा के अनुसार ही नियम रखें।",
          meaning: { en: "Grain such as rice, wheat, barley and dal is not eaten this day. For the fruit meal one takes fruit, milk, sabudana, buckwheat, water-chestnut flour and rock salt. On Nirjala Ekadashi even water is not drunk; keep the rules as your strength and your family's custom allow." },
        },
        {
          text: "रात में जागरण करके भगवान का कीर्तन करें, कथा सुनें और घी या तिल के तेल का दीपक जलाएँ। व्रत की कथा पूजा के बाद पढ़ी या सुनी जाती है, और उसके बिना व्रत अधूरा माना जाता है।",
          meaning: { en: "Keep vigil at night, sing the Lord's praise, hear the katha and light a lamp of ghee or sesame oil. The katha of the vrata is read or heard after the worship, and without it the vrata is held incomplete." },
        },
        {
          text: "द्वादशी को सवेरे स्नान और पूजन करके ब्राह्मण को भोजन या अन्न का दान दें, फिर स्वयं सात्त्विक भोजन से पारण करें। पारण द्वादशी के समाप्त होने से पहले और हरिवासर के बीत जाने के बाद करना चाहिए; उसका ठीक समय अपने स्थान के पंचांग से देखें।",
          meaning: { en: "On Dvadashi bathe and worship in the morning and give food or grain to a brahmin, then break the fast yourself with a sattvik meal. The parana should be done before Dvadashi ends and after Harivasara has passed; take its exact time from the Panchanga of your place." },
        },
      ],
    },
    {
      title: "कामदा एकादशी (चैत्र शुक्ल)",
      titleEn: "Kamada Ekadashi (Chaitra shukla)",
      note: "Chaitra shukla. Krishna to Yudhishthira; the katha is Vasishtha's to King Dilip.",
      verses: [
        {
          text: "धर्मराज युधिष्ठिर कहने लगे: हे भगवन्! मैं आपको कोटि-कोटि नमन करता हूँ। आपने चैत्र मास के कृष्ण पक्ष की एकादशी अर्थात पापमोचनी एकादशी के बारे में विस्तार पूर्वक बतलाया। अब आप कृपा करके चैत्र शुक्ल एकादशी का क्या नाम है? तथा उसकी विधि एवं महात्म्य क्या है?",
          meaning: { en: "Yudhishthira said: O Lord, I bow to you again and again. You have told me in detail about the Ekadashi of Chaitra krishna, Papamochani. Now please tell me the name of the Ekadashi of Chaitra shukla, and its rite and greatness." },
        },
        {
          text: "भगवान श्रीकृष्ण ने कहा: हे धर्मराज! चैत्र मास के शुक्ल पक्ष की एकादशी को कामदा एकादशी के नाम से जाना जाता है। एक समय की बात है, यही प्रश्न राजा दिलीप ने गुरु वशिष्ठजी से किया था और जो समाधान उन्होंने बतलाया, वही मैं तुमसे कह रहा हूँ।",
          meaning: { en: "Lord Krishna said: O Dharmaraja, the Ekadashi of the bright half of Chaitra is called Kamada. King Dilip once put this same question to his guru Vasishtha, and I tell you the answer he gave." },
        },
        {
          text: "प्राचीनकाल में भोगीपुर नामक एक नगर था। वहाँ पर अनेक ऐश्वर्यों से युक्त पुण्डरीक नाम का एक राजा राज्य करता था। भोगीपुर नगर में अनेक अप्सरा, किन्नर तथा गन्धर्व वास करते थे। उनमें से एक जगह ललिता और ललित नाम के दो स्त्री-पुरुष अत्यंत वैभवशाली घर में निवास करते थे। उन दोनों में अत्यंत स्नेह था, यहाँ तक कि अलग-अलग हो जाने पर दोनों व्याकुल हो जाते थे।",
          meaning: { en: "Long ago there was a city called Bhogipura, ruled by a king named Pundarika, who had every kind of splendour. Apsaras, kinnaras and gandharvas lived there, and among them a couple, Lalita and Lalita's husband Lalit, lived in a rich house. They loved each other so much that when parted they were restless." },
        },
        {
          text: "एक समय पुण्डरीक की सभा में अन्य गंधर्वों सहित ललित भी गान कर रहा था। गाते-गाते उसको अपनी प्रिय ललिता का ध्यान आ गया और उसका स्वर भंग होने के कारण गाने का स्वरूप बिगड गया। ललित के मन के भाव जानकर कार्कोट नामक नाग ने पद भंग होने का कारण राजा से कह दिया। तब पुण्डरीक ने क्रोधपूर्वक कहा कि तू मेरे सामने गाता हुआ अपनी स्त्री का स्मरण कर रहा है। अतः तू नरभक्षी दैत्य बनकर अपने कर्म का फल भोग।",
          meaning: { en: "Once Lalit was singing in Pundarika's court with the other gandharvas, and while singing he thought of his beloved Lalita, so his voice faltered and the song went wrong. The serpent Karkota read his mind and told the king the reason. Pundarika said in anger: you think of your wife while singing before me, so become a man-eating demon and reap your deed." },
        },
        {
          text: "पुण्डरीक के श्राप से ललित उसी क्षण महाकाय विशाल राक्षस हो गया। उसका मुख अत्यंत भयंकर, नेत्र सूर्य-चंद्रमा की तरह प्रदीप्त तथा मुख से अग्नि निकलने लगी। उसकी नाक पर्वत की कंदरा के समान विशाल हो गई और गर्दन पर्वत के समान लगने लगी। सिर के बाल पर्वतों पर खडे वृक्षों के समान लगने लगे तथा भुजाएँ अत्यंत लंबी हो गईं।",
          meaning: { en: "At the king's curse Lalit at once became a huge demon. His face was terrible, his eyes blazed like the sun and moon and fire came from his mouth. His nose was like a mountain cave, his neck like a mountain, his hair like trees on a hill and his arms very long." },
        },
        {
          text: "कुल मिलाकर उसका शरीर आठ योजन के विस्तार में हो गया। इस प्रकार राक्षस होकर वह अनेक प्रकार के दुःख भोगने लगा। जब उसकी प्रियतमा ललिता को यह वृत्तान्त मालूम हुआ तो उसे अत्यंत खेद हुआ और वह अपने पति के उद्धार का यत्न सोचने लगी। वह राक्षस अनेक प्रकार के घोर दुःख सहता हुआ घने वनों में रहने लगा। उसकी स्त्री उसके पीछे-पीछे जाती और विलाप करती रहती।",
          meaning: { en: "His body grew to eight yojanas across. Having become a demon he suffered many kinds of pain. When his beloved Lalita learned what had happened she was deeply grieved and began to think how to free her husband; the demon lived in dense forests enduring terrible suffering, and his wife followed behind him weeping." },
        },
        {
          text: "एक बार ललिता अपने पति के पीछे घूमती-घूमती विन्ध्याचल पर्वत पर पहुँच गई, जहाँ पर शृंगी ऋषि का आश्रम था। ललिता शीघ्र ही शृंगी ऋषि के आश्रम में गई और वहाँ जाकर विनीत भाव से प्रार्थना करने लगी। उसे देखकर शृंगी ऋषि बोले: हे सुभगे! तुम कौन हो और यहाँ किस लिए आई हो?",
          meaning: { en: "Wandering after her husband, Lalita once reached the Vindhya mountain, where the sage Shringi had his hermitage. She went to the hermitage at once and humbly made her request. Seeing her, the sage said: O fortunate one, who are you and why have you come here?" },
        },
        {
          text: "ललिता बोली: हे मुने! मेरा नाम ललिता है। मेरा पति राजा पुण्डरीक के श्राप से विशालकाय राक्षस हो गया है। इसका मुझको महान दुःख है। उसके उद्धार का कोई उपाय बतलाइए।",
          meaning: { en: "Lalita said: O sage, my name is Lalita. My husband has become a huge demon through the curse of King Pundarika, and this is a great sorrow to me. Please tell me some way to free him." },
        },
        {
          text: "शृंगी ऋषि बोले: हे गंधर्व कन्या! अब चैत्र शुक्ल एकादशी आने वाली है, जिसका नाम कामदा एकादशी है। इसका व्रत करने से मनुष्य के सब कार्य सिद्ध होते हैं। यदि तू कामदा एकादशी का व्रत कर उसके पुण्य का फल अपने पति को दे तो वह शीघ्र ही राक्षस योनि से मुक्त हो जाएगा और राजा का श्राप भी अवश्यमेव शांत हो जाएगा।",
          meaning: { en: "Shringi said: O gandharva maiden, the Ekadashi of Chaitra shukla, named Kamada, is about to come. By keeping it a person's every work succeeds. If you keep Kamada Ekadashi and give its merit to your husband, he will soon be freed from the demon birth and the king's curse will certainly be calmed." },
        },
        {
          text: "मुनि के ऐसे वचन सुनकर ललिता ने चैत्र शुक्ल एकादशी आने पर उसका व्रत किया और द्वादशी को ब्राह्मणों के सामने अपने व्रत का फल अपने पति को देती हुई भगवान से इस प्रकार प्रार्थना करने लगी: हे प्रभो! मैंने जो यह व्रत किया है इसका फल मेरे पतिदेव को प्राप्त हो जाए जिससे वह राक्षस योनि से मुक्त हो जाए।",
          meaning: { en: "Hearing the sage's words, Lalita kept the Chaitra shukla Ekadashi when it came, and on Dvadashi, before the brahmins, she gave the fruit of her vrata to her husband and prayed to the Lord: O Lord, may the fruit of this vrata I have kept go to my husband, so that he is freed from the demon birth." },
        },
        {
          text: "एकादशी का फल देते ही उसका पति राक्षस योनि से मुक्त होकर अपने पुराने स्वरूप को प्राप्त हुआ। फिर अनेक सुंदर वस्त्राभूषणों से युक्त होकर ललिता के साथ विहार करने लगा। उसके पश्चात वे दोनों विमान में बैठकर स्वर्गलोक को चले गए।",
          meaning: { en: "As soon as the fruit of the Ekadashi was given, her husband was freed from the demon form and regained his old shape. Adorned with fine clothes and ornaments he enjoyed himself with Lalita, and then the two went to heaven in a celestial chariot." },
        },
        {
          text: "वशिष्ठ मुनि कहने लगे: हे राजन्! इस व्रत को विधिपूर्वक करने से समस्त पाप नाश हो जाते हैं तथा राक्षस आदि की योनि भी छूट जाती है। संसार में इसके बराबर कोई और दूसरा व्रत नहीं है। इसकी कथा पढने या सुनने से वाजपेय यज्ञ का फल प्राप्त होता है।",
          meaning: { en: "Then the sage Vasishtha said: O king, by keeping this vrata properly all sins are destroyed and even the birth of a demon is ended. There is no other vrata equal to it in the world, and reading or hearing its katha gives the fruit of the Vajapeya sacrifice." },
        },
      ],
    },
    {
      title: "वरूथिनी एकादशी (वैशाख कृष्ण)",
      titleEn: "Varuthini Ekadashi (Vaishakha krishna)",
      note: "Vaishakha krishna. Krishna to Yudhishthira.",
      verses: [
        {
          text: "धर्मराज युधिष्ठिर बोले: हे भगवन्! मैं आपको नमस्कार करता हूँ। आपने चैत्र मास के शुक्ल पक्ष की एकादशी अर्थात कामदा एकादशी के बारे में विस्तार पूर्वक बतलाया। अब आप कृपा करके वैशाख कृष्ण एकादशी का क्या नाम है? तथा उसकी विधि एवं महात्म्य क्या है?",
          meaning: { en: "Yudhishthira said: O Lord, I bow to you. You have told me in detail about Kamada, the Ekadashi of Chaitra shukla. Now what is the name of the Ekadashi of Vaishakha krishna, and what are its rite and greatness?" },
        },
        {
          text: "भगवान श्रीकृष्ण ने कहा: हे राजेश्वर! वैशाख मास के कृष्ण पक्ष की एकादशी को वरुथिनी एकादशी के नाम से जाना जाता है। यह सौभाग्य देने वाली, सब पापों को नष्ट करने वाली तथा अंत में मोक्ष देने वाली है। इसकी महात्म्य कथा आपसे कहता हूँ।",
          meaning: { en: "Lord Krishna said: O king, the Ekadashi of the dark half of Vaishakha is known as Varuthini. It gives good fortune, destroys all sins and in the end gives liberation. I will tell you its katha." },
        },
        {
          text: "प्राचीन काल में नर्मदा नदी के तट पर मान्धाता नामक राजा राज्य करते थे। वह अत्यंत दानशील तथा तपस्वी थे। एक दिन जब वह जंगल में तपस्या कर रहे थे, तभी न जाने कहाँ से एक जंगली भालू आया और राजा का पैर चबाने लगा। राजा पूर्ववत अपनी तपस्या में लीन रहे। कुछ देर बाद पैर चबाते-चबाते भालू राजा को घसीटकर पास के जंगल में ले गया।",
          meaning: { en: "In ancient times a king named Mandhata ruled on the bank of the Narmada. He was very generous and given to austerity. One day, as he was performing austerities in the forest, a wild bear came from somewhere and began to chew the king's foot. The king stayed absorbed in his austerity as before, and after a while the bear dragged him into the nearby forest." },
        },
        {
          text: "राजा बहुत घबराया, मगर तापस धर्म अनुकूल उसने क्रोध और हिंसा न करके भगवान विष्णु से प्रार्थना की, करुण भाव से भगवान विष्णु को पुकारा। उसकी पुकार सुनकर भगवान श्रीहरि विष्णु प्रकट हुए और उन्होंने चक्र से भालू को मार डाला।",
          meaning: { en: "The king was very frightened, but true to the way of an ascetic he did not show anger or violence; he called on Lord Vishnu piteously. Hearing his cry, Lord Hari appeared and killed the bear with his discus." },
        },
        {
          text: "राजा का पैर भालू पहले ही खा चुका था। इससे राजा बहुत ही शोकाकुल हुए। उन्हें दुःखी देखकर भगवान विष्णु बोले: हे वत्स! शोक मत करो।",
          meaning: { en: "The bear had already eaten the king's foot, and the king was greatly grieved. Seeing him sad, Lord Vishnu said: My child, do not grieve." },
        },
        {
          text: "तुम मथुरा जाओ और वरूथिनी एकादशी का व्रत रखकर मेरी वराह अवतार मूर्ति की पूजा करो। उसके प्रभाव से पुनः सुदृढ अंगों वाले हो जाओगे। इस भालू ने तुम्हें जो काटा है, यह तुम्हारे पूर्व जन्म का अपराध था।",
          meaning: { en: "Go to Mathura, keep the Varuthini Ekadashi and worship my Varaha image; by its power you will again have sound limbs. This bite of the bear was the fault of a former birth." },
        },
        {
          text: "भगवान की आज्ञा मानकर राजा मान्धाता ने मथुरा जाकर श्रद्धापूर्वक वरूथिनी एकादशी का व्रत किया। इसके प्रभाव से राजा शीघ्र ही पुनः सुंदर और संपूर्ण अंगों वाला हो गया। इसी एकादशी के प्रभाव से राजा मान्धाता स्वर्ग गये थे।",
          meaning: { en: "Obeying the Lord, King Mandhata went to Mathura and kept the Varuthini Ekadashi with faith. By its power the king soon became handsome again with all his limbs whole, and by this same Ekadashi Mandhata went to heaven." },
        },
        {
          text: "जो भी व्यक्ति भय से पीडित है उसे वरूथिनी एकादशी का व्रत रखकर भगवान विष्णु का स्मरण करना चाहिए। इस व्रत को करने से समस्त पापों का नाश होकर मोक्ष मिलता है।",
          meaning: { en: "A person who is afflicted by fear should keep the Varuthini Ekadashi and remember Lord Vishnu. By keeping this vrata all sins are destroyed and liberation is gained." },
        },
      ],
    },
    {
      title: "मोहिनी एकादशी (वैशाख शुक्ल)",
      titleEn: "Mohini Ekadashi (Vaishakha shukla)",
      note: "Vaishakha shukla. Krishna to Yudhishthira; the katha is Vasishtha's to Rama.",
      verses: [
        {
          text: "धर्मराज युधिष्ठिर ने कहा: हे भगवन्! मैं आपको नमस्कार करता हूँ। आपने वैशाख मास के कृष्ण पक्ष की एकादशी अर्थात वरुथिनी एकादशी के बारे में विस्तार पूर्वक बतलाया।",
          meaning: { en: "Yudhishthira said: O Lord, I bow to you. You have told me in detail about Varuthini, the Ekadashi of Vaishakha krishna." },
        },
        {
          text: "अब आप कृपा करके वैशाख शुक्ल एकादशी का क्या नाम है? तथा उसकी कथा क्या है? इस व्रत की क्या विधि है, यह सब विस्तारपूर्वक बताइए।",
          meaning: { en: "Now what is the name of the Vaishakha shukla Ekadashi, what is its katha and what is the rite of this vrata? Please tell me all this in detail." },
        },
        {
          text: "भगवान श्रीकृष्ण कहने लगे: हे धर्मराज! वैशाख मास के शुक्ल पक्ष की एकादशी को मोहिनी एकादशी के नाम से जाना जाता है। मैं आपसे एक कथा कहता हूँ, जिसे महर्षि वशिष्ठ ने श्री रामचंद्रजी से कही थी। राजन आप कृपया ध्यानपूर्वक सुनें।",
          meaning: { en: "Lord Krishna said: O Dharmaraja, the Ekadashi of the bright half of Vaishakha is known as Mohini. I tell you a katha that the great sage Vasishtha once told to Shri Ramachandra; please listen carefully." },
        },
        {
          text: "एक समय श्रीराम बोले कि हे गुरुदेव! कोई ऐसा व्रत बताइए, जिससे समस्त पाप और दुःख का नाश हो जाए। मैंने सीताजी के वियोग में बहुत दुःख भोगे हैं।",
          meaning: { en: "Once Shri Rama said: O revered teacher, tell me some vrata that destroys all sin and sorrow; I have suffered much in separation from Sita." },
        },
        {
          text: "महर्षि वशिष्ठ बोले: हे राम! आपने बहुत सुंदर प्रश्न किया है। आपकी बुद्धि अत्यंत शुद्ध तथा पवित्र है। यद्यपि आपका नाम स्मरण करने से मनुष्य पवित्र और शुद्ध हो जाता है, तब भी लोकहित में यह प्रश्न अच्छा है।",
          meaning: { en: "The great sage Vasishtha said: O Rama, you have asked a very fine question. Your mind is utterly pure, and though people are made pure merely by remembering your name, still this question is good for the benefit of the world." },
        },
        {
          text: "वैशाख मास में जो एकादशी आती है उसका नाम मोहिनी एकादशी है। इसका व्रत करने से मनुष्य सब पापों तथा दुःखों से छूटकर मोहजाल से मुक्त हो जाता है। मैं इसकी कथा कहता हूँ। ध्यानपूर्वक सुनो।",
          meaning: { en: "The Ekadashi that comes in Vaishakha is called Mohini. By keeping it a person is freed from all sins and sorrows and from the net of delusion. I will tell its katha; listen attentively." },
        },
        {
          text: "सरस्वती नदी के तट पर भद्रावती नाम की एक नगरी में द्युतिमान नामक चंद्रवंशी राजा राज करता था। वहाँ धन-धान्य से संपन्न व पुण्यवान धनपाल नामक वैश्य भी रहता है। वह अत्यंत धर्मालु और विष्णु भक्त था। उसने नगर में अनेक भोजनालय, प्याऊ, कुएँ, सरोवर, धर्मशाला आदि बनवाए थे। सडकों पर आम, जामुन, नीम आदि के अनेक वृक्ष भी लगवाए थे।",
          meaning: { en: "On the bank of the Sarasvati there was a city called Bhadravati, where a king of the lunar line named Dyutiman ruled. A rich and virtuous merchant named Dhanapala also lived there, a great devotee of Vishnu. He had built many feeding houses, water sheds, wells, tanks and rest houses, and had planted mango, jamun, neem and other trees along the roads." },
        },
        {
          text: "उसके पाँच पुत्र थे- सुमना, सद्बुद्धि, मेधावी, सुकृति और धृष्टबुद्धि। इनमें से पाँचवाँ पुत्र धृष्टबुद्धि महापापी था। वह पितर आदि को नहीं मानता था। वह वेश्या, दुराचारी मनुष्यों की संगति में रहकर जुआ खेलता और पर-स्त्री के साथ भोग-विलास करता तथा मद्य-मांस का सेवन करता था। इसी प्रकार अनेक कुकर्मों में वह पिता के धन को नष्ट करता रहता था।",
          meaning: { en: "He had five sons: Sumana, Sadbuddhi, Medhavi, Sukriti and Dhrishtabuddhi. The fifth, Dhrishtabuddhi, was a great sinner. He did not honour the ancestors, kept the company of courtesans and evil men, gambled, went after other men's wives, drank liquor, ate meat, and went on wasting his father's wealth in such wicked ways." },
        },
        {
          text: "इन्हीं कारणों से त्रस्त होकर पिता ने उसे घर से निकाल दिया था। घर से बाहर निकलने के बाद वह अपने गहने एवं कपडे बेचकर अपना निर्वाह करने लगा। जब सब कुछ नष्ट हो गया तो वेश्या और दुराचारी साथियों ने उसका साथ छोड दिया। अब वह भूख-प्यास से अति दुःखी रहने लगा। कोई सहारा न देख चोरी करना सीख गया।",
          meaning: { en: "Troubled by all this, his father drove him out of the house. Outside, he lived by selling his ornaments and clothes, and when everything was gone, the courtesans and wicked companions left him. Tormented by hunger and thirst and seeing no support, he learned to steal." },
        },
        {
          text: "एक बार वह पकडा गया तो वैश्य का पुत्र जानकर चेतावनी देकर छोड दिया गया। मगर दूसरी बार फिर पकड में आ गया। राजाज्ञा से इस बार उसे कारागार में डाल दिया गया। कारागार में उसे अत्यंत दुःख दिए गए।",
          meaning: { en: "Once he was caught, and since he was a merchant's son he was let off with a warning. But he was caught a second time, and this time by the king's order he was put in prison, where he was made to suffer greatly." },
        },
        {
          text: "बाद में राजा ने उसे नगरी से निकल जाने का कहा। वह नगरी से निकल वन में चला गया। वहाँ वन्य पशु-पक्षियों को मारकर खाने लगा। कुछ समय पश्चात वह बहेलिया बन गया और धनुष-बाण लेकर पशु-पक्षियों को मार-मारकर खाने लगा।",
          meaning: { en: "Afterwards the king told him to leave the city. He went into the forest and began to kill and eat wild animals and birds. In time he became a hunter, and with bow and arrow he lived by killing beasts and birds." },
        },
        {
          text: "एक दिन भूख-प्यास से व्यथित होकर वह खाने की तलाश में घूमता हुआ कौण्डिन्य ऋषि के आश्रम में पहुँच गया। उस समय वैशाख मास था और ऋषि गंगा स्नान कर आ रहे थे। उनके भीगे वस्त्रों के छींटे उस पर पडने से उसे कुछ सद्बुद्धि प्राप्त हुई।",
          meaning: { en: "One day, distressed by hunger and thirst, he wandered looking for food and came to the hermitage of the sage Kaundinya. It was the month of Vaishakha and the sage was returning from his bath in the Ganga; drops from his wet clothes fell on the hunter, and some good sense arose in him." },
        },
        {
          text: "वह कौण्डिन्य मुनि से हाथ जोडकर कहने लगा कि: हे मुने! मैंने जीवन में बहुत पाप किए हैं। आप इन पापों से छूटने का कोई साधारण बिना धन का उपाय बताइए। उसके दीन वचन सुनकर मुनि ने प्रसन्न होकर कहा कि तुम वैशाख शुक्ल की मोहिनी एकादशी का व्रत करो। इससे अनेक जन्मों के किये हुए मेरु पर्वत जैसे समस्त महापाप भी नष्ट हो जाते हैं।",
          meaning: { en: "Folding his hands he said to Sage Kaundinya: O sage, I have done many sins in my life. Please tell me some simple way, costing no money, to be freed from them. Hearing his humble words the sage was pleased and said: keep the Mohini Ekadashi of Vaishakha shukla. By it even sins as great as Mount Meru, gathered through many births, are destroyed." },
        },
        {
          text: "मुनि के वचन सुनकर वह अत्यंत प्रसन्न हुआ और उनके द्वारा बताई गई विधि के अनुसार व्रत किया। हे राम! इस व्रत के प्रभाव से उसके सब पाप नष्ट हो गए और अंत में वह गरुड पर बैठकर विष्णुलोक को गया। इस व्रत से मोह आदि सब नष्ट हो जाते हैं। संसार में इस व्रत से श्रेष्ठ कोई व्रत नहीं है। इसके माहात्म्य को पढने से अथवा सुनने से एक हजार गौदान का फल प्राप्त होता है।",
          meaning: { en: "Hearing the sage he was delighted and kept the vrata by the rite he had been told. O Rama, by the power of this vrata all his sins were destroyed and in the end he went to Vishnu's world seated on Garuda. By this vrata delusion and the like are all destroyed, and there is no vrata in the world better than this. Reading or hearing its greatness gives the fruit of giving a thousand cows." },
        },
      ],
    },
    {
      title: "अपरा एकादशी (ज्येष्ठ कृष्ण)",
      titleEn: "Apara Ekadashi (Jyeshtha krishna)",
      note: "Jyeshtha krishna. Also called Achala. Krishna to Yudhishthira.",
      verses: [
        {
          text: "धर्मराज युधिष्ठिर भगवान श्री कृष्ण से कहते हैं: हे भगवन्! आपने वैशाख मास के शुक्ल पक्ष की एकादशी अर्थात मोहिनी एकादशी के बारे में विस्तार पूर्वक बतलाया। अब आप कृपा करके ज्येष्ठ कृष्ण एकादशी का क्या नाम है? तथा उसकी कथा क्या है? इस व्रत की क्या विधि है, कृपा कर यह सब विस्तारपूर्वक कहिए।",
          meaning: { en: "Yudhishthira said to Lord Krishna: O Lord, you have told me in detail about the Ekadashi of Vaishakha shukla, Mohini. Now what is the name of the Ekadashi of Jyeshtha krishna, what is its katha and what is the rite of this vrata? Please tell me all this in detail." },
        },
        {
          text: "भगवान श्रीकृष्ण कहने लगे: हे राजन! ज्येष्ठ मास के कृष्ण पक्ष की एकादशी को अचला एकादशी तथा अपरा एकादशी दोनो ही नामों से जाना जाता है। क्योंकि यह अपार धन देने वाली है।",
          meaning: { en: "Lord Krishna said: O king, the Ekadashi of the dark half of Jyeshtha is known by two names, Achala and Apara, because it gives boundless wealth." },
        },
        {
          text: "जो मनुष्य इस व्रत को करते हैं, वे संसार में प्रसिद्ध हो जाते हैं। इस दिन भगवान त्रिविक्रम की पूजा की जाती है। भगवान त्रिविक्रम में भगवान विष्णु, भगवान विट्ठल और बालाजी के दर्शन होते हैं।",
          meaning: { en: "Those who keep this vrata become famous in the world. On this day Lord Trivikrama is worshipped, in whom one sees Vishnu, Vitthala and Balaji." },
        },
        {
          text: "अपरा एकादशी के व्रत के प्रभाव से ब्रह्म हत्या, भूत योनि, दूसरे की निंदा आदि के सब पाप दूर हो जाते हैं। इस व्रत के करने से परस्त्री गमन, झूठी गवाही देना, झूठ बोलना, झूठे शास्त्र पढना या बनाना, झूठा ज्योतिषी बनना तथा झूठा वैद्य बनना आदि सब पाप नष्ट हो जाते हैं।",
          meaning: { en: "By the power of the Apara Ekadashi the sins of killing a brahmin, of becoming a ghost, of slandering others and the like are removed. Sins such as adultery, false witness, lying, reading or composing false scriptures, being a false astrologer or a false physician are all destroyed by this vrata." },
        },
        {
          text: "जो क्षत्रिय युद्ध से भाग जाए वे नरकगामी होते हैं, परंतु अपरा एकादशी का व्रत करने से वे भी स्वर्ग को प्राप्त होते हैं। जो शिष्य गुरु से शिक्षा ग्रहण करते हैं फिर उनकी निंदा करते हैं वे अवश्य नरक में पडते हैं। मगर अपरा एकादशी का व्रत करने से वे भी इस पाप से मुक्त हो जाते हैं।",
          meaning: { en: "A warrior who flees from battle goes to hell, but by keeping Apara Ekadashi he too reaches heaven. A disciple who learns from his guru and then slanders him falls into hell, but by this vrata even he is freed from that sin." },
        },
        {
          text: "इसकी प्रचलित कथा के अनुसार प्राचीन काल में महीध्वज नामक एक धर्मात्मा राजा था। उसका छोटा भाई वज्रध्वज बडा ही क्रूर, अधर्मी तथा अन्यायी था। वह अपने बडे भाई से द्वेष रखता था। उस पापी ने एक दिन रात्रि में अपने बडे भाई की हत्या करके उसकी देह को एक जंगली पीपल के नीचे गाड दिया। इस अकाल मृत्यु से राजा प्रेतात्मा के रूप में उसी पीपल पर रहने लगा और अनेक उत्पात करने लगा।",
          meaning: { en: "According to the popular katha, in ancient times there was a righteous king named Mahidhvaja. His younger brother Vajradhvaja was cruel, unjust and jealous of his elder brother. One night that sinner killed his elder brother and buried the body under a wild peepal tree. Dying an untimely death, the king lived on that peepal tree as a ghost and caused many disturbances." },
        },
        {
          text: "एक दिन अचानक धौम्य नामक ऋषि उधर से गुजरे। उन्होंने प्रेत को ज्ञानचक्षु से देखा और तपोबल से उसके अतीत को जान लिया। अपने तपोबल से प्रेत उत्पात का कारण समझा। ऋषि ने प्रसन्न होकर उस प्रेत को पीपल के पेड से उतारा तथा परलोक विद्या का उपदेश दिया।",
          meaning: { en: "One day the sage Dhaumya happened to pass that way. He saw the ghost with his inner sight and knew its past through the power of his austerity. Pleased, the sage brought the ghost down from the peepal tree and taught him the knowledge of the next world." },
        },
        {
          text: "दयालु ऋषि ने राजा की प्रेत योनि से मुक्ति के लिए स्वयं ही अपरा एकादशी का व्रत किया और उसे अगति से छुडाने को उसका पुण्य प्रेत को अर्पित कर दिया। इस पुण्य के प्रभाव से राजा की प्रेत योनि से मुक्ति हो गई। वह ऋषि को सप्रेम धन्यवाद देता हुआ दिव्य देह धारण कर पुष्पक विमान में बैठकर स्वर्ग को चला गया।",
          meaning: { en: "The kind sage himself kept the Apara Ekadashi to free the king from the ghost state, and gave its merit to the ghost. By that merit the king was freed from the ghost birth; thanking the sage lovingly, he took a divine body and went to heaven in the Pushpaka chariot." },
        },
        {
          text: "हे राजन! यह अपरा एकादशी की कथा मैंने लोकहित के लिए कही है। इसे पढने अथवा सुनने से मनुष्य सब पापों से छूट जाता है।",
          meaning: { en: "O king, I have told this katha of Apara Ekadashi for the good of the world. By reading or hearing it a person is freed from all sins." },
        },
      ],
    },
    {
      title: "निर्जला एकादशी (ज्येष्ठ शुक्ल)",
      titleEn: "Nirjala Ekadashi (Jyeshtha shukla)",
      note: "Jyeshtha shukla. Vyasa to Bhima, in the presence of Krishna and Yudhishthira; also called Pandava Dvadashi.",
      verses: [
        {
          text: "निर्जला एकादशी व्रत का पौराणिक महत्त्व और व्याख्यान भी कम रोचक नहीं है। जब सर्वज्ञ वेदव्यास ने पांडवों को चारों पुरुषार्थ: धर्म, अर्थ, काम और मोक्ष देने वाले एकादशी व्रत का संकल्प कराया था, तब युधिष्ठिर ने कहा: जनार्दन! ज्येष्ठ मास के शुक्लपक्ष में जो एकादशी पडती हो, कृपया उसका वर्णन कीजिये। भगवान श्रीकृष्ण ने कहा: हे राजन्! इसका वर्णन परम धर्मात्मा सत्यवती नन्दन व्यासजी करेंगे, क्योंकि ये सम्पूर्ण शास्त्रों के तत्त्वज्ञ और वेद वेदांगों के पारंगत विद्वान हैं।",
          meaning: { en: "The significance of the Nirjala Ekadashi has an interesting story. When the all-knowing Vedavyasa had the Pandavas take up the Ekadashi vrata that gives the four aims of life, Yudhishthira asked: O Janardana, please tell me of the Ekadashi that falls in the bright half of Jyeshtha. Lord Krishna said: O king, the great Vyasa, son of Satyavati, will tell it, for he knows the essence of all the scriptures and is a master of the Vedas and Vedangas." },
        },
        {
          text: "तब वेदव्यासजी कहने लगे: कृष्ण पक्ष और शुक्ल पक्ष दोनों पक्षों की एकादशी में अन्न खाना वर्जित है। द्वादशी के दिन स्नान करके पवित्र हो और फूलों से भगवान केशव की पूजा करे। फिर नित्य कर्म समाप्त होने के पश्चात् पहले ब्राह्मणों को भोजन देकर अन्त में स्वयं भोजन करे।",
          meaning: { en: "Then Vedavyasa said: on the Ekadashi of both fortnights, grain must not be eaten. On Dvadashi one should bathe, be pure and worship Lord Keshava with flowers. Then, after the daily duties, one should first feed brahmins and only at the end eat oneself." },
        },
        {
          text: "यह सुनकर भीमसेन बोले: परम बुद्धिमान पितामह! मेरी उत्तम बात सुनिये। राजा युधिष्ठिर, माता कुन्ती, द्रौपदी, अर्जुन, नकुल और सहदेव, ये एकादशी को कभी भोजन नहीं करते तथा मुझसे भी हमेशा यही कहते हैं कि भीमसेन एकादशी को तुम भी न खाया करो परन्तु मैं उन लोगों से यही कहता हूँ कि मुझसे भूख नहीं सही जायेगी। भीमसेन की बात सुनकर व्यासजी ने कहा: यदि तुम नरक को दूषित समझते हो और तुम्हें स्वर्गलोक की प्राप्ति अभीष्ट है और तो दोनों पक्षों की एकादशियों के दिन भोजन नहीं करना चाहिए।",
          meaning: { en: "Hearing this, Bhimasena said: O wise grandfather, hear my good word. King Yudhishthira, Mother Kunti, Draupadi, Arjuna, Nakula and Sahadeva never eat on Ekadashi, and they always tell me not to eat either; but I tell them I cannot bear hunger. Hearing him, Vyasa said: if you think hell foul and want heaven, you must not eat on the Ekadashis of both fortnights." },
        },
        {
          text: "भीमसेन बोले महाबुद्धिमान पितामह! मैं आपके सामने सच कहता हूँ। मुझसे एक बार भोजन करके भी व्रत नहीं किया जा सकता, तो फिर उपवास करके मैं कैसे रह सकता हूँ। मेरे उदर में वृक नामक अग्नि सदा प्रज्वलित रहती है, अतः जब मैं बहुत अधिक खाता हूँ, तभी यह शांत होती है।",
          meaning: { en: "Bhima said: O great wise grandfather, I tell you the truth: I cannot keep a vrata even after eating once, so how can I stay fasting? In my belly burns a fire named Vrika, which is calmed only when I eat a very great deal." },
        },
        {
          text: "इसलिए महामुनि! मैं पूरे वर्षभर में केवल एक ही उपवास कर सकता हूँ। जिससे स्वर्ग की प्राप्ति सुलभ हो तथा जिसके करने से मैं कल्याण का भागी हो सकूँ, ऐसा कोई एक व्रत निश्चय करके बताइये। मैं उसका यथोचित रूप से पालन करुँगा।",
          meaning: { en: "Therefore, great sage, I can keep only one fast in the whole year. Tell me one vrata that gives easy access to heaven and by which I can attain welfare, and I shall keep it properly." },
        },
        {
          text: "व्यासजी ने कहा: भीम! ज्येष्ठ मास में सूर्य वृष राशि पर हो या मिथुन राशि पर, शुक्लपक्ष में जो एकादशी हो, उसका यत्नपूर्वक निर्जल व्रत करो। केवल कुल्ला या आचमन करने के लिए मुख में जल डाल सकते हो, उसको छोडकर किसी प्रकार का जल विद्वान पुरुष मुख में न डाले, अन्यथा व्रत भंग हो जाता है।",
          meaning: { en: "Vyasa said: Bhima, in Jyeshtha, whether the sun is in Taurus or Gemini, keep the Ekadashi of the bright half with diligence and without water. You may put water in the mouth only to rinse or sip; apart from that a wise person must not take water in any way, or the vrata is broken." },
        },
        {
          text: "एकादशी को सूर्योदय से लेकर दूसरे दिन के सूर्योदय तक मनुष्य जल का त्याग करे तो यह व्रत पूर्ण होता है। तदनन्तर द्वादशी को प्रभातकाल में स्नान करके ब्राह्मणों को विधिपूर्वक जल और सुवर्ण का दान करें। इस प्रकार सब कार्य पूरा करके जितेन्द्रिय पुरुष ब्राह्मणों के साथ भोजन करे।",
          meaning: { en: "The vrata is complete when one gives up water from sunrise on Ekadashi to sunrise on the next day. Then on Dvadashi, after bathing in the morning, one should give water and gold to brahmins by the rite, and when all this is done the self-controlled person should eat together with the brahmins." },
        },
        {
          text: "वर्षभर में जितनी एकादशियाँ होती हैं, उन सबका फल निर्जला एकादशी के पालन मात्र से मनुष्य प्राप्त कर लेता है, इसमें तनिक भी कोई सन्देह नहीं है। शंख, चक्र और गदा धारण करनेवाले भगवान केशव ने मुझसे कहा था कि यदि मानव सबको छोडकर एकमात्र मेरी शरण में आ जाय और एकादशी को निराहार रहे तो वह सब पापों से छूट जाता है। एकादशी व्रत करने वाले पुरुष के पास विशालकाय, विकराल आकृति और काले रंगवाले दण्ड पाशधारी भयंकर यमदूत नहीं जाते। अंतकाल में पीताम्बरधारी, सौम्य स्वभाव वाले, हाथ में सुदर्शन धारण करने वाले और मन के समान वेगशाली विष्णुदूत आखिर इस वैष्णव पुरुष को भगवान विष्णु के धाम में ले जाते हैं।",
          meaning: { en: "By keeping Nirjala alone one gains the fruit of all the Ekadashis of the year, there is no doubt of it. Lord Keshava, bearer of conch, discus and mace, told me that if a person gives up everything and takes refuge in him alone and stays without food on Ekadashi, he is freed from all sins. The fearful messengers of Yama, with noose and rod, do not go near one who keeps Ekadashi; at the end the gentle, yellow-robed messengers of Vishnu, swift as thought, take this Vaishnava to Vishnu's abode." },
        },
        {
          text: "अतः निर्जला एकादशी को पूर्ण यत्न करके उपवास और श्रीहरि का पूजन करो। स्त्री हो या पुरुष, यदि उसने मेरु पर्वत के बराबर भी महान पाप किया हो तो वह सब इस एकादशी व्रत के प्रभाव से भस्म हो जाता है। जो मनुष्य उस दिन जल के नियम का पालन करता है, वह पुण्य का भागी होता है। उसे एक-एक प्रहर में कोटि-कोटि स्वर्णमुद्रा दान करने का फल प्राप्त होता सुना गया है।",
          meaning: { en: "So keep the fast and worship Hari on Nirjala Ekadashi with all effort. Whether man or woman, even a sin as great as Mount Meru is burnt up by the power of this Ekadashi. One who keeps the rule of water that day gains merit, and is heard to receive in each prahar the fruit of giving crores of gold coins." },
        },
        {
          text: "मनुष्य निर्जला एकादशी के दिन स्नान, दान, जप, होम आदि जो कुछ भी करता है, वह सब अक्षय होता है, यह भगवान श्रीकृष्ण का कथन है। निर्जला एकादशी को विधिपूर्वक उत्तम रीति से उपवास करके मानव वैष्णवपद को प्राप्त कर लेता है। जो मनुष्य एकादशी के दिन अन्न खाता है, वह पाप का भोजन करता है। इस लोक में वह चाण्डाल के समान है और मरने पर दुर्गति को प्राप्त होता है।",
          meaning: { en: "Whatever a person does on Nirjala Ekadashi, bathing, giving, japa or homa, becomes imperishable, as Lord Krishna has said. By fasting well by the rite a person reaches the Vaishnava state. One who eats grain on Ekadashi eats sin; in this world he is like a chandala and after death he comes to a bad end." },
        },
        {
          text: "पहले दन्तधावन करके यह नियम लेना चाहिए कि मैं भगवान केशव की प्रसन्नता के लिए एकादशी को निराहार रहकर आचमन के सिवा दूसरे जल का भी त्याग करुँगा। द्वादशी को देवेश्वर भगवान विष्णु का पूजन करना चाहिए। गन्ध, धूप, पुष्प और सुन्दर वस्त्र से विधिपूर्वक पूजन करके जल के घडे के दान का संकल्प करते हुए निम्नांकित मंत्र का उच्चारण करे। संसारसागर से तारने वाले हे देव ह्रषीकेश! इस जल के घडे का दान करने से आप मुझे परम गति की प्राप्ति कराइये।",
          meaning: { en: "One should first clean the teeth and take the resolve: for the pleasure of Lord Keshava I shall stay without food on Ekadashi and give up even water other than the sip for rinsing. On Dvadashi worship Lord Vishnu with perfume, incense, flowers and fine cloth, and resolving to give a pot of water, say this mantra: O Hrishikesha, who carry beings across the ocean of worldly life, by my giving this pot of water grant me the highest state." },
        },
        {
          text: "भीमसेन! ज्येष्ठ मास में शुक्लपक्ष की जो शुभ एकादशी होती है, उसका निर्जल व्रत करना चाहिए। उस दिन श्रेष्ठ ब्राह्मणों को शक्कर के साथ जल के घडे दान करने चाहिए। ऐसा करने से मनुष्य भगवान विष्णु के समीप पहुँचकर आनन्द का अनुभव करता है।",
          meaning: { en: "Bhima, keep the waterless fast of the auspicious Ekadashi of Jyeshtha shukla, and that day give pots of water with sugar to excellent brahmins. By doing so a person reaches the presence of Lord Vishnu and knows bliss." },
        },
        {
          text: "तत्पश्चात् द्वादशी को ब्राह्मण भोजन कराने के बाद स्वयं भोजन करे। जो इस प्रकार पूर्ण रूप से पापनाशिनी एकादशी का व्रत करता है, वह सब पापों से मुक्त हो आनंदमय पद को प्राप्त होता है। यह सुनकर भीमसेन ने भी इस शुभ एकादशी का व्रत आरम्भ कर दिया। तबसे यह लोक में पाण्डव द्वादशी के नाम से विख्यात हुई। ज्येष्ठ शुक्लपक्ष एकादशी के ही दिन भगवान श्री कृष्ण ने देवी रुक्मणी का हरण किया था अतः यह एकादशी रुक्मणी-हरण एकादशी के नाम से भी जानी जाती है।",
          meaning: { en: "Then on Dvadashi, after feeding the brahmins, one should eat oneself. One who keeps this sin-destroying Ekadashi fully in this way is freed from all sins and reaches the state of bliss. Hearing this, Bhima too began to keep this auspicious Ekadashi, and from then it became known in the world as Pandava Dvadashi. On this same Ekadashi of Jyeshtha shukla Lord Krishna carried off Devi Rukmini, so it is also known as Rukmini-harana Ekadashi." },
        },
      ],
    },
    {
      title: "योगिनी एकादशी (आषाढ़ कृष्ण)",
      titleEn: "Yogini Ekadashi (Ashadha krishna)",
      note: "Ashadha krishna. Krishna to Yudhishthira.",
      verses: [
        {
          text: "महाभारत काल की बात है कि एक बार धर्मराज युधिष्ठिर ने भगवान श्री कृष्ण कहा: हे त्रिलोकीनाथ! मैंने ज्येष्ठ माह के शुक्ल पक्ष की निर्जला एकादशी की कथा सुनी। अब आप कृपा करके आषाढ माह के कृष्ण पक्ष की एकादशी की कथा सुनाइये। इस एकादशी का नाम तथा माहात्म्य क्या है? सो अब मुझे विस्तारपूर्वक बतायें।",
          meaning: { en: "In the days of the Mahabharata, Dharmaraja Yudhishthira once said to Lord Krishna: O Lord of the three worlds, I have heard the katha of Nirjala Ekadashi of Jyeshtha shukla. Now please tell me the katha of the Ekadashi of Ashadha krishna; what are its name and greatness? Tell me in detail." },
        },
        {
          text: "श्रीकृष्ण ने कहा: हे पाण्डु पुत्र! आषाढ माह के कृष्ण पक्ष की एकादशी का नाम योगिनी एकादशी है। इसके व्रत से सभी पाप नष्ट हो जाते हैं। यह व्रत इस लोक में भोग तथा परलोक में मुक्ति देने वाला है।",
          meaning: { en: "Krishna said: O son of Pandu, the Ekadashi of the dark half of Ashadha is called Yogini. By keeping it all sins are destroyed. This vrata gives enjoyment in this world and liberation in the next." },
        },
        {
          text: "हे धर्मराज! यह एकादशी तीनों लोकों में प्रसिद्ध है। इसके व्रत से सभी पाप नष्ट हो जाते हैं। तुम्हें मैं पुराण में कही हुई कथा सुनाता हूँ, ध्यानपूर्वक श्रवण करो- कुबेर नाम का एक राजा अलकापुरी नाम की नगरी में राज्य करता था।",
          meaning: { en: "O Dharmaraja, this Ekadashi is famous in all three worlds, and by it all sins are destroyed. I shall tell you the story as told in the Purana; listen attentively. A king named Kubera ruled in a city called Alakapuri." },
        },
        {
          text: "वह शिव-भक्त था। उनका हेममाली नामक एक यक्ष सेवक था, जो पूजा के लिए फूल लाया करता था। हेममाली की विशालाक्षी नाम की अति सुन्दर स्त्री थी। एक दिन वह मानसरोवर से पुष्प लेकर आया, किन्तु कामासक्त होने के कारण पुष्पों को रखकर अपनी स्त्री के साथ रमण करने लगा। इस भोग-विलास में दोपहर हो गई।",
          meaning: { en: "Kubera was a devotee of Shiva. He had a yaksha servant named Hemamali, who used to bring flowers for the worship. Hemamali had a very beautiful wife named Vishalakshi. One day he brought flowers from Lake Manasa, but overcome by desire he put the flowers aside and took his pleasure with his wife, and noon came in this enjoyment." },
        },
        {
          text: "हेममाली की राह देखते-देखते जब राजा कुबेर को दोपहर हो गई तो उसने क्रोधपूर्वक अपने सेवकों को आज्ञा दी कि तुम लोग जाकर पता लगाओ कि हेममाली अभी तक पुष्प लेकर क्यों नहीं आया। जब सेवकों ने उसका पता लगा लिया तो राजा के पास जाकर बताया- हे राजन! वह हेममाली अपनी स्त्री के साथ रमण कर रहा है।",
          meaning: { en: "King Kubera, waiting for Hemamali, grew angry when noon came and ordered his servants to find out why Hemamali had not yet brought the flowers. When the servants had found out, they went to the king and said: O king, Hemamali is enjoying himself with his wife." },
        },
        {
          text: "इस बात को सुन राजा कुबेर ने हेममाली को बुलाने की आज्ञा दी। डर से काँपता हुआ हेममाली राजा के सामने उपस्थित हुआ। उसे देखकर कुबेर को अत्यन्त क्रोध आया और उसके होंठ फडफडाने लगे। राजा ने कहा: अरे अधम! तूने मेरे परम पूजनीय देवों के भी देव भगवान शिवजी का अपमान किया है। मैं तुझे श्राप देता हूँ कि तू स्त्री के वियोग में तडपे और मृत्युलोक में जाकर कोढी का जीवन व्यतीत करे।",
          meaning: { en: "Hearing this King Kubera had Hemamali called. Trembling with fear Hemamali stood before the king. Seeing him Kubera was very angry and his lips quivered. He said: you wretch, you have insulted Lord Shiva, the god of gods, whom I revere. I curse you: may you suffer separated from your wife, and go to the world of mortals and live as a leper." },
        },
        {
          text: "कुबेर के श्राप से वह तत्क्षण स्वर्ग से पृथ्वी पर आ गिरा और कोढी हो गया। उसकी स्त्री भी उससे बिछड गई। मृत्युलोक में आकर उसने अनेक भयंकर कष्ट भोगे, किन्तु शिव की कृपा से उसकी बुद्धि मलिन न हुई और उसे पूर्व जन्म की भी सुध रही। अनेक कष्टों को भोगता हुआ तथा अपने पूर्व जन्म के कुकर्मो को याद करता हुआ वह हिमालय पर्वत की तरफ चल पडा।",
          meaning: { en: "By Kubera's curse he fell at that moment from heaven to the earth and became a leper, and his wife was parted from him. Coming to the mortal world he suffered many terrible troubles, but by Shiva's grace his mind was not dulled and he remembered his former birth. Suffering much and recalling his evil deeds of the past life, he set out toward the Himalaya." },
        },
        {
          text: "चलते-चलते वह मार्कण्डेय ऋषि के आश्रम में जा पहुँचा। वह ऋषि अत्यन्त वृद्ध तपस्वी थे। वह दूसरे ब्रह्मा के समान प्रतीत हो रहे थे और उनका वह आश्रम ब्रह्मा की सभा के समान शोभा दे रहा था। ऋषि को देखकर हेममाली वहाँ गया और उन्हें प्रणाम करके उनके चरणों में गिर पडा। हेममाली को देखकर मार्कण्डेय ऋषि ने कहा: तूने कौन-से निकृष्ट कर्म किये हैं, जिससे तू कोढी हुआ और भयानक कष्ट भोग रहा है।",
          meaning: { en: "As he went he reached the hermitage of the sage Markandeya. The sage was very old and a great ascetic, appearing like a second Brahma, and his hermitage shone like Brahma's assembly. Seeing the sage, Hemamali went to him, bowed and fell at his feet. Seeing him, Markandeya said: what evil deed have you done that you have become a leper and are suffering terribly?" },
        },
        {
          text: "महर्षि की बात सुनकर हेममाली बोला: हे मुनिश्रेष्ठ! मैं राजा कुबेर का अनुचर था। मेरा नाम हेममाली है।",
          meaning: { en: "Hearing the sage Hemamali said: O best of sages, I was a servant of King Kubera. My name is Hemamali." },
        },
        {
          text: "मैं प्रतिदिन मानसरोवर से फूल लाकर शिव पूजा के समय कुबेर को दिया करता था। एक दिन पत्नी सहवास के सुख में फँस जाने के कारण मुझे समय का ज्ञान ही नहीं रहा और दोपहर तक पुष्प न पहुँचा सका। तब उन्होंने मुझे शाप श्राप दिया कि तू अपनी स्त्री का वियोग और मृत्युलोक में जाकर कोढी बनकर दुख भोग। इस कारण मैं कोढी हो गया हूँ तथा पृथ्वी पर आकर भयंकर कष्ट भोग रहा हूँ, अतः कृपा करके आप कोई ऐसा उपाय बतलाये, जिससे मेरी मुक्ति हो।",
          meaning: { en: "Every day I used to bring flowers from Lake Manasa and give them to Kubera at the time of Shiva's worship. One day, caught in the pleasure of being with my wife, I lost track of time and could not bring the flowers till noon. Then he cursed me: be parted from your wife, go to the world of mortals and suffer as a leper. So I have become a leper and am suffering terribly on earth; please tell me some way by which I may be freed." },
        },
        {
          text: "मार्कण्डेय ऋषि ने कहा: हे हेममाली! तूने मेरे सम्मुख सत्य वचन कहे हैं, इसलिए मैं तेरे उद्धार के लिए एक व्रत बताता हूँ। यदि तू आषाढ माह के कृष्ण पक्ष की योगिनी नामक एकादशी का विधानपूर्वक व्रत करेगा तो तेरे सभी पाप नष्ट हो जाएँगे।",
          meaning: { en: "Sage Markandeya said: O Hemamali, you have spoken the truth before me, so I shall tell you a vrata for your deliverance. If you keep the Ekadashi of Ashadha krishna, called Yogini, by the rule, all your sins will be destroyed." },
        },
        {
          text: "महर्षि के वचन सुन हेममाली अति प्रसन्न हुआ और उनके वचनों के अनुसार योगिनी एकादशी का विधानपूर्वक व्रत करने लगा। इस व्रत के प्रभाव से अपने पुराने स्वरूप में आ गया और अपनी स्त्री के साथ सुखपूर्वक रहने लगा।",
          meaning: { en: "Hearing the sage Hemamali was very glad and began to keep the Yogini Ekadashi by the rule as he had said. By the power of this vrata he regained his former form and lived happily with his wife." },
        },
        {
          text: "भगवान श्री कृष्ण ने कहा: हे राजन! इस योगिनी एकादशी की कथा का फल अठासी हजार ब्राह्मणों को भोजन कराने के बराबर है। इसके व्रत से सभी पाप नष्ट हो जाते हैं और अन्त में मोक्ष प्राप्त करके प्राणी स्वर्ग का अधिकारी बनता है।",
          meaning: { en: "Lord Krishna said: O king, the fruit of hearing this Yogini Ekadashi katha equals feeding 88,000 brahmins. By this vrata all sins are destroyed, and in the end a person gains liberation and becomes worthy of heaven." },
        },
      ],
    },
    {
      title: "देवशयनी एकादशी (आषाढ़ शुक्ल)",
      titleEn: "Devshayani Ekadashi (Ashadha shukla)",
      note: "Ashadha shukla. Also Padma, Shayani and Harishayani Ekadashi; the Chaturmasya begins. Krishna to Yudhishthira, from Brahma's words to Narada.",
      verses: [
        {
          text: "आषाढ मास के शुक्ल पक्ष की एकादशी को ही देवशयनी एकादशी कहा जाता है। इसी एकादशी से चातुर्मास का आरंभ माना जाता है। इस अवधि में कोई भी शुभ कार्य जैसे विवाह आदि नहीं किया जाता। मान्यता है कि, इस दिन से भगवान श्री हरि विष्णु क्षीरसागर में शयन करते हैं और फिर चार माह बाद उन्हें उठाया जाता है।",
          meaning: { en: "The Ekadashi of the bright half of Ashadha is the one called Devshayani. From this Ekadashi the Chaturmasya is reckoned to begin, and in this period no auspicious works such as weddings are done. It is held that from this day Lord Hari Vishnu sleeps in the ocean of milk, and after four months he is awakened." },
        },
        {
          text: "धर्मराज युधिष्ठिर ने कहा: हे केशव! आषाढ शुक्ल एकादशी का क्या नाम है? इस व्रत के करने की विधि क्या है और किस देवता का पूजन किया जाता है? श्रीकृष्ण कहने लगे कि हे युधिष्ठिर! जिस कथा को ब्रह्माजी ने नारदजी से कहा था वही मैं तुमसे कहता हूँ।",
          meaning: { en: "Dharmaraja Yudhishthira said: O Keshava, what is the name of the Ashadha shukla Ekadashi, what is the rite of keeping it and which god is worshipped? Krishna said: O Yudhishthira, I tell you the katha that Brahma once told Narada." },
        },
        {
          text: "एक बार देवऋषि नारदजी ने ब्रह्माजी से इस एकादशी के विषय में जानने की उत्सुकता प्रकट की, तब ब्रह्माजी ने उन्हें बताया: सतयुग में मांधाता नामक एक चक्रवर्ती सम्राट राज्य करते थे। उनके राज्य में प्रजा बहुत सुखी थी। किंतु भविष्य में क्या हो जाए, यह कोई नहीं जानता। अतः वे भी इस बात से अनभिज्ञ थे कि उनके राज्य में शीघ्र ही भयंकर अकाल पडने वाला है।",
          meaning: { en: "Once the divine sage Narada asked Brahma, eager to know about this Ekadashi, and Brahma told him: in the Satya Yuga there ruled an emperor named Mandhata. His subjects were very happy, but no one knows what the future holds; he too did not know that a terrible famine would soon come upon his kingdom." },
        },
        {
          text: "उनके राज्य में पूरे तीन वर्ष तक वर्षा न होने के कारण भयंकर अकाल पडा। इस अकाल से चारों ओर त्राहि-त्राहि मच गई। धर्म पक्ष के यज्ञ, हवन, पिंडदान, कथा-व्रत आदि में कमी हो गई। जब मुसीबत पडी हो तो धार्मिक कार्यों में प्राणी की रुचि कहाँ रह जाती है। प्रजा ने राजा के पास जाकर अपनी वेदना की दुहाई दी।",
          meaning: { en: "For three whole years there was no rain in his kingdom and a terrible famine fell. Everywhere people cried out in distress, and sacrifices, offerings, ancestral rites, kathas and vratas declined. When trouble comes, where is a person's interest in religious acts? The subjects went to the king and told him of their pain." },
        },
        {
          text: "राजा तो इस स्थिति को लेकर पहले से ही दुःखी थे। वे सोचने लगे कि आखिर मैंने ऐसा कौन-सा पाप-कर्म किया है, जिसका दंड मुझे इस रूप में मिल रहा है? फिर इस कष्ट से मुक्ति पाने का कोई साधन करने के उद्देश्य से राजा सेना को लेकर जंगल की ओर चल दिए।",
          meaning: { en: "The king was already sad over this. He wondered what sin he had done for which he was being punished in this way. To find some means of freeing himself from the trouble, the king set out for the forest with his army." },
        },
        {
          text: "वहाँ विचरण करते-करते एक दिन वे ब्रह्माजी के पुत्र अंगिरा ऋषि के आश्रम में पहुँचे और उन्हें साष्टांग प्रणाम किया। ऋषिवर ने आशीर्वचनोपरांत कुशल क्षेम पूछा। फिर जंगल में विचरने व अपने आश्रम में आने का प्रयोजन जानना चाहा।",
          meaning: { en: "Wandering there he came one day to the hermitage of the sage Angira, son of Brahma, and bowed to him fully prostrate. After his blessings the sage asked after his welfare and wished to know why he was roaming the forest and had come to his hermitage." },
        },
        {
          text: "तब राजा ने हाथ जोडकर कहा: महात्मन्! सभी प्रकार से धर्म का पालन करता हुआ भी मैं अपने राज्य में दुर्भिक्ष का दृश्य देख रहा हूँ। आखिर किस कारण से ऐसा हो रहा है, कृपया इसका समाधान करें।",
          meaning: { en: "Then the king folded his hands and said: O great soul, though I keep dharma in every way I see famine in my kingdom. Why is this happening? Please resolve it." },
        },
        {
          text: "यह सुनकर महर्षि अंगिरा ने कहा: हे राजन! सब युगों से उत्तम यह सतयुग है। इसमें छोटे से पाप का भी बडा भयंकर दंड मिलता है। इसमें धर्म अपने चारों चरणों में व्याप्त रहता है।",
          meaning: { en: "Hearing this the great sage Angira said: O king, of all the ages this Satya Yuga is the best. In it even a small sin brings a terrible punishment. In it dharma stands on all four feet." },
        },
        {
          text: "ब्राह्मण के अतिरिक्त किसी अन्य जाति को तप करने का अधिकार नहीं है जबकि आपके राज्य में एक शूद्र तपस्या कर रहा है। यही कारण है कि आपके राज्य में वर्षा नहीं हो रही है। जब तक वह काल को प्राप्त नहीं होगा, तब तक यह दुर्भिक्ष शांत नहीं होगा। दुर्भिक्ष की शांति उसे मारने से ही संभव है।",
          meaning: { en: "As the sage puts it, in this age no one but a brahmin has the right to practise austerity, whereas a shudra is practising austerity in your kingdom; that is why there is no rain. Until he dies this famine will not end, and it can be ended only by killing him." },
        },
        {
          text: "किंतु राजा का हृदय एक नरपराध शूद्र तपस्वी का शमन करने को तैयार नहीं हुआ। उन्होंने कहा: हे देव मैं उस निरपराध को मार दूँ, यह बात मेरा मन स्वीकार नहीं कर रहा है। कृपा करके आप कोई और उपाय बताएँ।",
          meaning: { en: "But the king's heart was not willing to put an innocent ascetic to death. He said: O sage, my mind will not accept that I should kill an innocent person; please tell me some other remedy." },
        },
        {
          text: "महर्षि अंगिरा ने बताया: आषाढ माह के शुक्लपक्ष की एकादशी का व्रत करें। इस व्रत के प्रभाव से अवश्य ही वर्षा होगी। राजा अपने राज्य की राजधानी लौट आए और चारों वर्णों सहित पद्मा एकादशी का विधिपूर्वक व्रत किया। व्रत के प्रभाव से उनके राज्य में मूसलधार वर्षा हुई और पूरा राज्य धन-धान्य से परिपूर्ण हो गया।",
          meaning: { en: "The great sage Angira said: keep the Ekadashi of the bright half of Ashadha; by this vrata it will certainly rain. The king returned to his capital and kept the Padma Ekadashi by the rite together with all four varnas. By the power of the vrata a heavy rain fell in his kingdom and the whole land was filled with wealth and grain." },
        },
      ],
    },
    {
      title: "कामिका एकादशी (श्रावण कृष्ण)",
      titleEn: "Kamika Ekadashi (Shravana krishna)",
      note: "Shravana krishna. Krishna to Arjuna, from Bhishma's words to Narada.",
      verses: [
        {
          text: "अर्जुन ने कहा: हे प्रभु! मैंने आषाढ माह के शुक्ल पक्ष की देवशयनी एकादशी का सविस्तार वर्णन सुना। अब आप मुझे श्रावण माह के कृष्ण पक्ष की एकादशी की कथा सुनाने की कृपा करें। इस एकादशी का नाम क्या है?",
          meaning: { en: "Arjuna said: O Lord, I have heard in detail the Devshayani Ekadashi of Ashadha shukla. Now please tell me the katha of the Ekadashi of Shravana krishna. What is the name of this Ekadashi?" },
        },
        {
          text: "इसकी विधि क्या है? इसमें किस देवता का पूजन होता है? इसका उपवास करने से मनुष्य को किस फल की प्राप्ति होती है?",
          meaning: { en: "What is its rite? Which god is worshipped in it? What fruit does a person get by keeping the fast?" },
        },
        {
          text: "भगवान श्रीकृष्ण ने कहा: हे श्रेष्ठ धनुर्धर! मैं श्रावण माह की पवित्र एकादशी की कथा सुनाता हूँ, ध्यानपूर्वक श्रवण करो। एक बार इस एकादशी की पावन कथा को भीष्म पितामह ने लोकहित के लिये नारदजी से कहा था। एक समय नारदजी ने कहा: हे पितामह! आज मेरी श्रावण के कृष्ण पक्ष की एकादशी की कथा सुनने की इच्छा है, अतः आप इस एकादशी की व्रत कथा विधान सहित सुनाइये।",
          meaning: { en: "Lord Krishna said: O best of archers, I shall tell you the katha of the holy Ekadashi of Shravana; listen attentively. Once Grandfather Bhishma told this sacred katha to Narada for the good of the world. At one time Narada said: O Grandfather, today I wish to hear the katha of the Shravana krishna Ekadashi; please tell it with its rite." },
        },
        {
          text: "नारदजी की इच्छा को सुन पितामह भीष्म ने कहा: हे नारदजी! आपने बहुत ही सुन्दर प्रस्ताव किया है। अब आप बहुत ध्यानपूर्वक इसे श्रवण कीजिए- श्रावण माह के कृष्ण पक्ष की एकादशी का नाम कामिका एकादशी है। इस एकादशी की कथा सुनने मात्र से ही वाजपेय यज्ञ के फल की प्राप्ति होती है।",
          meaning: { en: "Hearing Narada's wish, Grandfather Bhishma said: O Narada, you have made a very fine request; listen carefully. The Ekadashi of Shravana krishna is named Kamika. Merely hearing its katha gives the fruit of the Vajapeya sacrifice." },
        },
        {
          text: "कामिका एकादशी के उपवास में शंख, चक्र, गदाधारी भगवान विष्णु का पूजन होता है। जो मनुष्य इस एकादशी को धूप, दीप, नैवेद्य आदि से भगवान विष्णु की पूजा करते हैं, उन्हें गंगा स्नान के फल से भी उत्तम फल की प्राप्ति होती है। सूर्य ग्रहण और चन्द्र ग्रहण में केदार और कुरुक्षेत्र में स्नान करने से जिस पुण्य की प्राप्ति होती है, वह पुण्य कामिका एकादशी के दिन भगवान विष्णु की भक्तिपूर्वक पूजा करने से प्राप्त हो जाता है। भगवान विष्णु की श्रावण माह में भक्तिपूर्वक पूजा करने का फल समुद्र और वन सहित पृथ्वी दान करने के फल से भी ज्यादा होता है। व्यतिपात में गंडकी नदी में स्नान करने से जो फल प्राप्त होता है, वह फल भगवान की पूजा करने से मिल जाता है।",
          meaning: { en: "On Kamika Ekadashi Lord Vishnu, holding conch, discus and mace, is worshipped. Those who worship Vishnu that day with incense, lamp and offerings get a fruit better than bathing in the Ganga. The merit gained by bathing at Kedara and Kurukshetra at an eclipse of the sun or moon comes by worshipping Vishnu with devotion on Kamika Ekadashi, and worship of Vishnu in Shravana gives more fruit than giving the earth with its seas and forests. The fruit of bathing in the Gandaki at the vyatipata comes from worshipping the Lord." },
        },
        {
          text: "हे नारदजी! स्वयं भगवान ने अपने मुख से कहा है कि मनुष्यों को अध्यात्म विद्या से जो फल प्राप्त होता है, उससे अधिक फल कामिका एकादशी का व्रत करने से मिल जाता है। इस उपवास के करने से मनुष्य को न यमराज के दर्शन होते हैं और न ही नरक के कष्ट भोगने पडते हैं। वह स्वर्ग का अधिकारी बन जाता है। जो मनुष्य इस दिन तुलसीदल से भक्तिपूर्वक भगवान विष्णु का पूजन करते हैं, वे इस संसार सागर में रहते हुए भी इस प्रकार अलग रहते हैं, जिस प्रकार कमल पुष्प जल में रहता हुआ भी जल से अलग रहता है।",
          meaning: { en: "O Narada, the Lord himself has said with his own mouth that a person gains more by keeping Kamika Ekadashi than by spiritual knowledge. By this fast one does not see Yama or suffer hell; he becomes fit for heaven. Those who worship Vishnu that day with devotion with tulasi leaves live in this ocean of worldly life yet stay apart, as a lotus stays apart from the water it lives in." },
        },
        {
          text: "तुलसीदल से भगवान श्रीहरि का पूजन करने का फल एक बार स्वर्ण और चार बार चाँदी के दान के फल के बराबर है। भगवान विष्णु रत्न, मोती, मणि आदि आभूषणों की अपेक्षा तुलसीदल से अधिक प्रसन्न होते हैं। जो मनुष्य प्रभु का तुलसीदल से पूजन करते हैं, उनके सभी पाप नष्ट हो जाते हैं। हे नारदजी! मैं भगवान की अति प्रिय श्री तुलसीजी को प्रणाम करता हूँ।",
          meaning: { en: "Worship of Hari with tulasi leaves is equal in fruit to giving gold once and silver four times. Lord Vishnu is more pleased by tulasi leaves than by jewels, pearls and gems. All the sins of one who worships the Lord with tulasi leaves are destroyed. O Narada, I bow to Shri Tulasi, so dear to the Lord." },
        },
        {
          text: "तुलसीजी के दर्शन मात्र से मनुष्य के सभी पाप नष्ट हो जाते हैं और शरीर के स्पर्श मात्र से मनुष्य पवित्र हो जाता है। तुलसीजी को जल से स्नान कराने से मनुष्य की सभी यम यातनाएं नष्ट हो जाती हैं। जो मनुष्य तुलसीजी को भक्तिपूर्वक भगवान के श्रीचरण कमलों में अर्पित करता है, उसे मुक्ति मिलती है।",
          meaning: { en: "By the mere sight of Tulasi all sins are destroyed, and by touching her body a person becomes pure. By bathing Tulasi with water all the torments of Yama are destroyed. One who devoutly offers Tulasi at the Lord's lotus feet gains liberation." },
        },
        {
          text: "इस कामिका एकादशी की रात्रि को जो मनुष्य जागरण करते हैं और दीप-दान करते हैं, उनके पुण्यों को लिखने में चित्रगुप्त भी असमर्थ हैं। एकादशी के दिन जो मनुष्य भगवान के सामने दीपक जलाते हैं, उनके पितर स्वर्गलोक में अमृत का पान करते हैं। भगवान के सामने जो मनुष्य घी या तिल के तेल का दीपक जलाते हैं, उनको सूर्य लोक में भी सहस्रों दीपकों का प्रकाश मिलता है।",
          meaning: { en: "Those who keep vigil on the night of this Kamika Ekadashi and give lamps have merit that even Chitragupta cannot write. Those who light a lamp before the Lord on Ekadashi, their ancestors drink nectar in heaven. Those who light a lamp of ghee or sesame oil before the Lord receive the light of thousands of lamps even in the world of the sun." },
        },
        {
          text: "एक गाँव में एक वीर क्षत्रिय रहता था। एक दिन किसी कारण वश उसकी ब्राह्मण से हाथापाई हो गई और ब्राह्मण की मृत्य हो गई। अपने हाथों मरे गये ब्राह्मण की क्रिया उस क्षत्रिय ने करनी चाही। परन्तु पंडितों ने उसे क्रिया में शामिल होने से मना कर दिया।",
          meaning: { en: "In a village there lived a brave kshatriya. One day, for some reason, he came to blows with a brahmin and the brahmin died. The kshatriya wanted to perform the funeral rites for the brahmin killed by his own hands, but the pandits refused to let him take part in the rites." },
        },
        {
          text: "ब्राह्मणों ने बताया कि तुम पर ब्रह्म-हत्या का दोष है। पहले प्रायश्चित कर इस पाप से मुक्त हो तब हम तुम्हारे घर भोजन करेंगे। इस पर क्षत्रिय ने पूछा कि इस पाप से मुक्त होने के क्या उपाय है। तब ब्राह्मणों ने बताया कि श्रावण माह के कृष्ण पक्ष की एकादशी को भक्तिभाव से भगवान श्रीधर का व्रत एवं पूजन कर ब्राह्मणों को भोजन कराके सदश्रिणा के साथ आशीर्वाद प्राप्त करने से इस पाप से मुक्ति मिलेगी। पंडितों के बताये हुए तरीके पर व्रत कराने वाली रात में भगवान श्रीधर ने क्षत्रिय को दर्शन देकर कहा कि तुम्हें ब्रह्म-हत्या के पाप से मुक्ति मिल गई है।",
          meaning: { en: "The brahmins told him he had the guilt of killing a brahmin: first free yourself of this sin by expiation, then we shall eat at your house. The kshatriya asked what the way out of this sin was, and the brahmins said that keeping the Ekadashi of Shravana krishna with devotion, worshipping Lord Shridhara, feeding brahmins and receiving their blessing with a gift would free him. He kept the vrata as the pandits said, and in the night Lord Shridhara appeared to the kshatriya and said: you are freed from the sin of brahmin-killing." },
        },
        {
          text: "इस व्रत के करने से ब्रह्म-हत्या आदि के सभी पाप नष्ट हो जाते हैं और इहलोक में सुख भोगकर प्राणी अन्त में विष्णुलोक को जाते हैं। इस कामिका एकादशी के माहात्म्य के श्रवण व पठन से मनुष्य स्वर्गलोक को प्राप्त करते हैं।",
          meaning: { en: "By keeping this vrata the sins of killing a brahmin and the like are destroyed, and after enjoying happiness in this world a person goes in the end to Vishnu's world. By hearing or reading the greatness of this Kamika Ekadashi people reach heaven." },
        },
      ],
    },
    {
      title: "पुत्रदा एकादशी (श्रावण शुक्ल)",
      titleEn: "Putrada Ekadashi (Shravana shukla)",
      note: "Shravana shukla. Also called Pavitra Ekadashi. Krishna to Yudhishthira.",
      verses: [
        {
          text: "श्री युधिष्ठिर कहने लगे कि हे भगवान! मैंने श्रावण माह के कृष्ण पक्ष की कामिका एकादशी का सविस्तार वर्णन सुना। अब आप मुझे श्रावण शुक्ल एकादशी का क्या नाम है? व्रत करने की विधि तथा इसका माहात्म्य कृपा करके कहिए।",
          meaning: { en: "Yudhishthira said: O Lord, I have heard in detail the Kamika Ekadashi of Shravana krishna. Now tell me the name of the Ekadashi of Shravana shukla, the rite of keeping it and its greatness." },
        },
        {
          text: "मधुसूदन कहने लगे कि इस एकादशी का नाम पुत्रदा एकादशी है। इस एकादशी को पवित्रा एकादशी भी कहा जाता है। पुत्रदा एकादशी व्रत करने वाले व्यक्ति को पूजा के बाद श्रावण पुत्रदा एकादशी व्रत की कथा जरूर सुननी चाहिए, ऐसा करने से व्रत पूर्ण होता है और मनोकामनाएं पूरी होती हैं। अब आप शांतिपूर्वक इसकी कथा सुनिए। इसके सुनने मात्र से ही वाजपेय यज्ञ का फल मिलता है।",
          meaning: { en: "Madhusudana said: the name of this Ekadashi is Putrada; it is also called Pavitra Ekadashi. One who keeps the Putrada vrata should hear its katha after the worship, for thus the vrata is complete and wishes are fulfilled. Now listen quietly to its katha; by merely hearing it the fruit of the Vajapeya sacrifice is gained." },
        },
        {
          text: "द्वापर युग के आरंभ में महिष्मति नाम की एक नगरी थी, जिसमें महीजित नाम का राजा राज्य करता था, लेकिन पुत्रहीन होने के कारण राजा को राज्य सुखदायक नहीं लगता था। उसका मानना था, कि जिसके संतान न हो, उसके लिए यह लोक और परलोक दोनों ही दुःखदायक होते हैं। पुत्र सुख की प्राप्ति के लिए राजा ने अनेक उपाय किए परंतु राजा को पुत्र की प्राप्ति नहीं हुई।",
          meaning: { en: "At the beginning of the Dvapara Yuga there was a city called Mahishmati, where a king named Mahijit ruled; but being childless the kingdom gave him no joy. He believed that for one without children both this world and the next bring sorrow. The king tried many means to get a son, but no son was born." },
        },
        {
          text: "वृद्धावस्था आती देखकर राजा ने प्रजा के प्रतिनिधियों को बुलाया और कहा: हे प्रजाजनों! मेरे खजाने में अन्याय से उपार्जन किया हुआ धन नहीं है। न मैंने कभी देवताओं तथा ब्राह्मणों का धन छीना है। किसी दूसरे की धरोहर भी मैंने नहीं ली, प्रजा को पुत्र के समान पालता रहा।",
          meaning: { en: "Seeing old age coming, the king called the representatives of the people and said: O my people, there is no wealth gained unjustly in my treasury. I have never taken the property of gods or brahmins, nor kept anyone's deposit; I have cared for my subjects like sons." },
        },
        {
          text: "मैं अपराधियों को पुत्र तथा बाँधवों की तरह दंड देता रहा। कभी किसी से घृणा नहीं की। सबको समान माना है।",
          meaning: { en: "I punished offenders as I would sons and kinsmen. I never hated anyone and treated all alike. I always honour the good." },
        },
        {
          text: "सज्जनों की सदा पूजा करता हूँ। इस प्रकार धर्मयुक्त राज्य करते हुए भी मेरे पुत्र नहीं है। सो मैं अत्यंत दुःख पा रहा हूँ, इसका क्या कारण है?",
          meaning: { en: "Though I rule in this righteous way I have no son, and so I suffer greatly. What is the reason for this?" },
        },
        {
          text: "राजा महीजित की इस बात को विचारने के लिए मंत्री तथा प्रजा के प्रतिनिधि वन को गए। वहाँ बडे-बडे ऋषि-मुनियों के दर्शन किए। राजा की उत्तम कामना की पूर्ति के लिए किसी श्रेष्ठ तपस्वी मुनि को देखते-फिरते रहे। एक आश्रम में उन्होंने एक अत्यंत वयोवृद्ध धर्म के ज्ञाता, बडे तपस्वी, परमात्मा में मन लगाए हुए निराहार, जितेंद्रीय, जितात्मा, जितक्रोध, सनातन धर्म के गूढ तत्वों को जानने वाले, समस्त शास्त्रों के ज्ञाता महात्मा लोमश मुनि को देखा, जिनका कल्प के व्यतीत होने पर एक रोम गिरता था।",
          meaning: { en: "To consider King Mahijit's words, the ministers and the people's representatives went to the forest. There they saw great sages and went on looking for an excellent ascetic who could fulfil the king's good wish. In one hermitage they saw the great soul Lomasha, very old, learned in dharma, a great ascetic, his mind fixed on the Supreme, fasting, master of his senses, self and anger, knower of the deepest truths of eternal dharma and of all the scriptures, from whose body one hair falls when an aeon passes." },
        },
        {
          text: "सबने जाकर ऋषि को प्रणाम किया। उन लोगों को देखकर मुनि ने पूछा कि आप लोग किस कारण से आए हैं? निःसंदेह मैं आप लोगों का हित करूँगा। मेरा जन्म केवल दूसरों के उपकार के लिए हुआ है, इसमें संदेह मत करो।",
          meaning: { en: "All went and bowed to the sage. Seeing them the sage asked why they had come, saying: I shall surely do you good; I was born only for the benefit of others, do not doubt it." },
        },
        {
          text: "लोमश ऋषि के ऐसे वचन सुनकर सब लोग बोले: हे महर्षे! आप हमारी बात जानने में ब्रह्मा से भी अधिक समर्थ हैं। अतः आप हमारे इस संदेह को दूर कीजिए। महिष्मति पुरी का धर्मात्मा राजा महीजित प्रजा का पुत्र के समान पालन करता है। फिर भी वह पुत्रहीन होने के कारण दुःखी है।",
          meaning: { en: "Hearing Sage Lomasha's words they all said: O great sage, you are more able than Brahma to know our matter, so remove this doubt of ours. The righteous king Mahijit of Mahishmati protects his people like sons, yet he is sad because he has no son." },
        },
        {
          text: "उन लोगों ने आगे कहा कि हम लोग उसकी प्रजा हैं। अतः उसके दुःख से हम भी दुःखी हैं। आपके दर्शन से हमें पूर्ण विश्वास है कि हमारा यह संकट अवश्य दूर हो जाएगा क्योंकि महान पुरुषों के दर्शन मात्र से अनेक कष्ट दूर हो जाते हैं। अब आप कृपा करके राजा के पुत्र होने का उपाय बतलाएँ।",
          meaning: { en: "They went on: we are his subjects, so we too are sad at his grief. By seeing you we fully trust that our trouble will certainly end, for the mere sight of great persons removes many troubles. Now please tell us the way for the king to have a son." },
        },
        {
          text: "यह वार्ता सुनकर ऋषि ने थोडी देर के लिए नेत्र बंद किए और राजा के पूर्व जन्म का वृत्तांत जानकर कहने लगे कि यह राजा पूर्व जन्म में एक निर्धन वैश्य था। निर्धन होने के कारण इसने कई बुरे कर्म किए। यह एक गाँव से दूसरे गाँव व्यापार करने जाया करता था। एक समय ज्येष्ठ मास के शुक्ल पक्ष की द्वादशी के दिन मध्याह्न के समय वह जबकि वह दो दिन से भूखा-प्यासा था, एक जलाशय पर जल पीने गया। उसी स्थान पर एक तत्काल की ब्याही हुई प्यासी गौ जल पी रही थी।",
          meaning: { en: "Hearing this the sage closed his eyes for a little while, learned the account of the king's former birth and said: in a former birth this king was a poor merchant, and being poor he did many bad deeds. He used to go from village to village for trade. Once, on the dvadashi of the bright half of Jyeshtha at midday, having been hungry and thirsty for two days, he went to a pond to drink. At that place a newly calved thirsty cow was drinking water." },
        },
        {
          text: "राजा ने उस प्यासी गाय को जल पीते हुए हटा दिया और स्वयं जल पीने लगा, इसीलिए राजा को यह दुःख सहना पडा। एकादशी के दिन भूखा रहने से वह राजा हुआ और प्यासी गौ को जल पीते हुए हटाने के कारण पुत्र वियोग का दुःख सहना पड रहा है। ऐसा सुनकर सब लोग कहने लगे कि हे ऋषि! शास्त्रों में पापों का प्रायश्चित भी लिखा है। अतः जिस प्रकार राजा का यह पाप नष्ट हो जाए, आप ऐसा उपाय बताइए।",
          meaning: { en: "He drove the thirsty cow away from the water and drank himself; for this the king had to suffer this sorrow. Because he went hungry on Ekadashi he became a king, but because he drove the thirsty cow from the water he suffers the sorrow of having no son. Hearing this the people said: O sage, the scriptures also prescribe expiation for sins; tell us a way by which this sin of the king may be destroyed." },
        },
        {
          text: "लोमश मुनि कहने लगे कि श्रावण शुक्ल पक्ष की एकादशी को जिसे पुत्रदा एकादशी भी कहते हैं, तुम सब लोग व्रत करो और रात्रि को जागरण करो तो इससे राजा का यह पूर्व जन्म का पाप अवश्य नष्ट हो जाएगा, साथ ही राजा को पुत्र की अवश्य प्राप्ति होगी। लोमश ऋषि के ऐसे वचन सुनकर मंत्रियों सहित सारी प्रजा नगर को वापस लौट आई और जब श्रावण शुक्ल एकादशी आई तो ऋषि की आज्ञानुसार सबने पुत्रदा एकादशी का व्रत और जागरण किया।",
          meaning: { en: "Sage Lomasha said: all of you keep the vrata on the Ekadashi of Shravana shukla, which is also called Putrada, and keep vigil at night; then this sin of the king's former birth will certainly be destroyed and the king will certainly get a son. Hearing the sage's words the whole people with the ministers returned to the city, and when the Shravana shukla Ekadashi came, all kept the Putrada Ekadashi vrata and the vigil as the sage had told them." },
        },
        {
          text: "इसके पश्चात द्वादशी के दिन इसके पुण्य का फल राजा को दिया गया। उस पुण्य के प्रभाव से रानी ने गर्भ धारण किया और प्रसवकाल समाप्त होने पर उसके एक बडा तेजस्वी पुत्र उत्पन्न हुआ।",
          meaning: { en: "Then on Dvadashi the fruit of this merit was given to the king. By the power of that merit the queen conceived, and when the time of delivery was over a very radiant son was born to her." },
        },
        {
          text: "इसलिए हे राजन! इस श्रावण शुक्ल एकादशी का नाम पुत्रदा पडा। अतः संतान सुख की इच्छा हासिल करने वाले इस व्रत को अवश्य करें। इसके माहात्म्य को सुनने से मनुष्य सब पापों से मुक्त हो जाता है और इस लोक में संतान सुख भोगकर परलोक में स्वर्ग को प्राप्त होता है।",
          meaning: { en: "Therefore, O king, this Ekadashi of Shravana shukla came to be named Putrada. So those who wish for the joy of children should keep this vrata. By hearing its greatness a person is freed from all sins, enjoys the happiness of children in this world and attains heaven in the next." },
        },
      ],
    },
    {
      title: "अजा एकादशी (भाद्रपद कृष्ण)",
      titleEn: "Aja Ekadashi (Bhadrapada krishna)",
      note: "Bhadrapada krishna. Krishna to Arjuna.",
      verses: [
        {
          text: "अर्जुन ने कहा: हे पुण्डरिकाक्ष! मैंने श्रावण शुक्ल एकादशी अर्थात पुत्रदा एकादशी का सविस्तार वर्णन सुना। अब आप कृपा करके मुझे भाद्रपद माह के कृष्ण पक्ष की एकादशी के विषय में भी बतलाइये। इस एकादशी का क्या नाम है तथा इसके व्रत का क्या विधान है? इसका व्रत करने से किस फल की प्राप्ति होती है?",
          meaning: { en: "Arjuna said: O lotus-eyed one, I have heard in detail the Ekadashi of Shravana shukla, Putrada. Now please tell me about the Ekadashi of Bhadrapada krishna. What is its name, what is the rite of its vrata and what fruit does keeping it give?" },
        },
        {
          text: "श्रीकृष्ण ने कहा: हे कुन्ती पुत्र! भाद्रपद माह के कृष्ण पक्ष की एकादशी को अजा एकादशी कहते हैं। इसका व्रत करने से सभी पाप नष्ट हो जाते हैं। इसलोक और परलोक में मदद करने वाली इस एकादशी व्रत के समान संसार में दूसरा कोई व्रत नहीं है।",
          meaning: { en: "Lord Krishna said: O son of Kunti, the Ekadashi of Bhadrapada krishna is called Aja. By keeping it all sins are destroyed. There is no other vrata in the world equal to this Ekadashi, which helps in this world and the next." },
        },
        {
          text: "अब ध्यानपूर्वक इस एकादशी का माहात्म्य श्रवण करो: पौराणिक काल में भगवान श्री राम के वंश में अयोध्या नगरी में एक चक्रवर्ती राजा हरिश्चन्द्र नाम के एक राजा हुए थे। राजा अपनी सत्यनिष्ठा और ईमानदारी के लिए प्रसिद्घ थे। एक बार देवताओं ने इनकी परीक्षा लेने की योजना बनाई। राजा ने स्वप्न में देखा कि ऋषि विश्वामित्र को उन्होंने अपना राजपाट दान कर दिया है। सुबह विश्वामित्र वास्तव में उनके द्वार पर आकर कहने लगे तुमने स्वप्न में मुझे अपना राज्य दान कर दिया।",
          meaning: { en: "Now listen with attention to the greatness of this Ekadashi. In ancient times in the line of Lord Rama there was in Ayodhya an emperor named Harishchandra, famed for his truthfulness and honesty. Once the gods planned to test him. The king saw in a dream that he had given his kingdom to the sage Vishvamitra. In the morning Vishvamitra actually came to his door and said: you gave me your kingdom in your dream." },
        },
        {
          text: "राजा ने सत्यनिष्ठ व्रत का पालन करते हुए संपूर्ण राज्य विश्वामित्र को सौंप दिया। दान के लिए दक्षिणा चुकाने हेतु राजा हरिश्चन्द्र को पूर्व जन्म के कर्म फल के कारण पत्नी, बेटा एवं खुद को बेचना पडा। हरिश्चन्द्र को एक डोम ने खरीद लिया जो श्मशान भूमि में लोगों के दाह संस्कारा का काम करवाता था।",
          meaning: { en: "Keeping his vow of truth the king handed the whole kingdom to Vishvamitra. To pay the fee for the gift, because of the fruit of deeds of a former birth, King Harishchandra had to sell his wife, his son and himself. A Dom who had people's bodies cremated at the cremation ground bought Harishchandra." },
        },
        {
          text: "स्वयं वह एक चाण्डाल का दास बन गया। उसने उस चाण्डाल के यहाँ कफन लेने का काम किया, किन्तु उसने इस आपत्ति के काम में भी सत्य का साथ नहीं छोडा। जब इसी प्रकार उसे कई वर्ष बीत गये तो उसे अपने इस नीच कर्म पर बडा दुख हुआ और वह इससे मुक्त होने का उपाय खोजने लगा।",
          meaning: { en: "He himself became the slave of a chandala. He did the work of taking shrouds at his place, but even in this wretched work he did not abandon truth. When many years had passed in this way, he felt great sorrow at his low work and began to look for a way to be freed from it." },
        },
        {
          text: "वह सदैव इसी चिन्ता में रहने लगा कि मैं क्या करूँ? किस प्रकार इस नीच कर्म से मुक्ति पाऊँ? एक बार की बात है, वह इसी चिन्ता में बैठा था कि गौतम् ऋषि उसके पास पहुँचे। हरिश्चन्द्र ने उन्हें प्रणाम किया और अपनी दुःख-भरी कथा सुनाने लगे।",
          meaning: { en: "He was always anxious: what shall I do, how can I be freed from this low work? Once as he sat in this worry the sage Gautama came to him. Harishchandra bowed to him and began to tell his sorrowful story." },
        },
        {
          text: "राजा हरिश्चन्द्र की दुख-भरी कहानी सुनकर महर्षि गौतम भी अत्यन्त दुःखी हुए और उन्होंने राजा से कहा: हे राजन! भादों माह के कृष्ण पक्ष की एकादशी का नाम अजा है। तुम उस एकादशी का विधानपूर्वक व्रत करो तथा रात्रि को जागरण करो। इससे तुम्हारे सभी पाप नष्ट हो जाएंगे।",
          meaning: { en: "Hearing King Harishchandra's sad tale the great sage Gautama too was very sad, and said to the king: O king, the Ekadashi of Bhadrapada krishna is named Aja. Keep that Ekadashi by the rule and keep vigil at night; by this all your sins will be destroyed." },
        },
        {
          text: "महर्षि गौतम इतना कहकर आलोप हो गये। अजा नाम की एकादशी आने पर राजा हरिश्चन्द्र ने महर्षि के कहे अनुसार विधानपूर्वक उपवास तथा रात्रि जागरण किया। इस व्रत के प्रभाव से राजा के सभी पाप नष्ट हो गये। उस समय स्वर्ग में नगाडे बजने लगे तथा पुष्पों की वर्षा होने लगी।",
          meaning: { en: "Having said this, the great sage Gautama vanished. When the Ekadashi called Aja came, King Harishchandra fasted and kept vigil by the rule as the sage had said. By the power of this vrata all the king's sins were destroyed. At that moment drums sounded in heaven and flowers rained." },
        },
        {
          text: "उन्होने अपने सामने ब्रह्मा, विष्णु, महेश तथा देवेन्द्र आदि देवताओं को खडा पाया। उन्होने अपने मृतक पुत्र को जीवित तथा अपनी पत्नी को राजसी वस्त्र तथा आभूषणों से परिपूर्ण देखा। व्रत के प्रभाव से राजा को पुनः अपने राज्य की प्राप्ति हुई। वास्तव में एक ऋषि ने राजा की परीक्षा लेने के लिए यह सब कौतुक किया था, परन्तु अजा एकादशी के व्रत के प्रभाव से ऋषि द्वारा रची गई सारी माया समाप्त हो गई और अन्त समय में हरिश्चन्द्र अपने परिवार सहित स्वर्ग लोक को गया।",
          meaning: { en: "He saw standing before him Brahma, Vishnu, Mahesha and the gods led by Indra. He saw his dead son alive and his wife dressed in royal clothes and jewels. By the power of the vrata the king got his kingdom again. In truth it was a sage who had made all this play to test the king, but by the power of the Aja Ekadashi all the illusion made by the sage ended, and at the end Harishchandra went to heaven with his family." },
        },
        {
          text: "हे राजन! यह सब अजा एकादशी के व्रत का प्रभाव था। जो मनुष्य इस उपवास को विधानपूर्वक करते हैं तथा रात्रि-जागरण करते हैं, उनके सभी पाप नष्ट हो जाते हैं और अन्त में वे स्वर्ग को प्राप्त करते हैं। इस एकादशी व्रत की कथा के श्रवण मात्र से ही अश्वमेध यज्ञ के फल की प्राप्ति हो जाती है।",
          meaning: { en: "O king, all this was the power of the Aja Ekadashi vrata. Those who keep this fast by the rule and keep vigil at night have all sins destroyed and in the end gain heaven. By merely hearing the katha of this Ekadashi the fruit of the Ashvamedha sacrifice is gained." },
        },
      ],
    },
    {
      title: "परिवर्तिनी एकादशी (भाद्रपद शुक्ल)",
      titleEn: "Parivartini Ekadashi (Bhadrapada shukla)",
      note: "Bhadrapada shukla. Also Padma, Parshva, Vamana and Jayanti Ekadashi. Krishna to Yudhishthira.",
      verses: [
        {
          text: "युधिष्ठिर ने कहा हे भगवान! आपने भाद्रपद कृष्ण एकादशी अर्थात अजा एकादशी का सविस्तार वर्णन सुनाया। अब आप कृपा करके मुझे भाद्रपद शुक्ल एकादशी का क्या नाम, इसकी विधि तथा इसका माहात्म्य कहिए। तब भगवान श्रीकृष्ण कहने लगे कि इस पुण्य, स्वर्ग और मोक्ष को देने वाली तथा सब पापों का नाश करने वाली, उत्तम वामन एकादशी का माहात्म्य मैं तुमसे कहता हूँ, आप इसे ध्यानपूर्वक सुनें।",
          meaning: { en: "Yudhishthira said: O Lord, you have told me in detail of Aja, the Ekadashi of Bhadrapada krishna. Now please tell me the name of the Ekadashi of Bhadrapada shukla, its rite and its greatness. Then Lord Krishna said: I tell you the greatness of this excellent Vamana Ekadashi, which gives merit, heaven and liberation and destroys all sins; listen to it carefully." },
        },
        {
          text: "यह भाद्रपद शुक्ल एकादशी को पद्मा एकादशी, परिवर्तिनी एकादशी, जयंती एकादशी, जल झुलनी एकादशी, देवझूलनी एकादशी एवं वामन एकादशी भी कहते हैं। इस दिन यज्ञ करने से वाजपेय यज्ञ का फल मिलता है। पापियों के पाप नाश करने के लिए इससे बढकर कोई उपाय नहीं। जो मनुष्य परिवर्तिनी एकादशी के दिन मेरे वामन रूप की पूजा करता है, उससे तीनों लोक पूज्य होते हैं। अतः मोक्ष की इच्छा करने वाले मनुष्य को इस व्रत को अवश्य करना चाहिए।",
          meaning: { en: "This Ekadashi of Bhadrapada shukla is also called Padma, Parivartini, Jayanti, Jal Jhulani, Dev Jhulani and Vamana Ekadashi. Keeping it gives the fruit of the Vajapeya sacrifice; there is no better means of destroying the sins of sinners. The person who worships my Vamana form on Parivartini Ekadashi is worshipped by the three worlds. So whoever wishes for liberation must keep this vrata." },
        },
        {
          text: "जो कमलनयन भगवान का कमल से पूजन करते हैं, वे अवश्य भगवान के समीप जाते हैं। जिसने भाद्रपद शुक्ल एकादशी को व्रत और पूजन किया, उसने ब्रह्मा, विष्णु सहित तीनों लोकों का पूजन किया। अतः हरिवासर अर्थात एकादशी का व्रत अवश्य करना चाहिए। इस दिन भगवान करवट लेते हैं, इसलिए इसको परिवर्तिनी एकादशी भी कहा जाता है।",
          meaning: { en: "Those who worship the lotus-eyed Lord with a lotus certainly go near the Lord. One who keeps the vrata and worship on Bhadrapada shukla Ekadashi has worshipped the three worlds with Brahma and Vishnu. So one must certainly keep Harivasara, the Ekadashi. On this day the Lord turns over in his sleep, so it is also called Parivartini." },
        },
        {
          text: "भगवान के वचन सुनकर युधिष्ठिर बोले कि भगवान! मुझे अतिसंदेह हो रहा है कि आप किस प्रकार सोते और करवट लेते हैं तथा किस तरह राजा बलि को बांधा और वामन रूप रखकर क्या-क्या लीलाएं कीं? चातुर्मास के व्रत की क्या विधि है तथा आपके शयन करने पर मनुष्य का क्या कर्तव्य है। सो आप मुझसे विस्तार से बताइए।",
          meaning: { en: "Hearing the Lord's words Yudhishthira said: Lord, I have great doubt: how do you sleep and turn over, how did you bind King Bali and what plays did you perform in the Vamana form? What is the rite of the Chaturmasya vrata and what should people do while you sleep? Please tell me in detail." },
        },
        {
          text: "श्रीकृष्ण कहने लगे कि हे राजन! अब आप सब पापों को नष्ट करने वाली कथा का श्रवण करें। त्रेतायुग में बलि नामक एक दैत्य था। वह मेरा परम भक्त था। विविध प्रकार के वेद सूक्तों से मेरा पूजन किया करता था और नित्य ही ब्राह्मणों का पूजन तथा यज्ञ के आयोजन करता था, लेकिन इंद्र से द्वेष के कारण उसने इंद्रलोक तथा सभी देवताओं को जीत लिया।",
          meaning: { en: "Krishna said: O king, now hear the katha that destroys all sins. In the Treta Yuga there was a demon named Bali. He was my great devotee; he worshipped me with many Vedic hymns and daily honoured brahmins and held sacrifices, but through enmity with Indra he conquered Indra's world and all the gods." },
        },
        {
          text: "इस कारण सभी देवता एकत्र होकर सोच-विचार कर भगवान के पास गए। बृहस्पति सहित इंद्रादिक देवता प्रभु के निकट जाकर और नतमस्तक होकर वेद मंत्रों द्वारा भगवान का पूजन और स्तुति करने लगे। अतः मैंने वामन रूप धारण करके पांचवां अवतार लिया और फिर अत्यंत तेजस्वी रूप से राजा बलि को जीत लिया।",
          meaning: { en: "For this reason all the gods gathered, took counsel and went to the Lord. Indra and the others with Brihaspati went near the Lord, bowed their heads and worshipped and praised him with Vedic mantras. Then I took the Vamana form, my fifth incarnation, and conquered King Bali with radiant splendour." },
        },
        {
          text: "इतनी वार्ता सुनकर राजा युधिष्ठिर बोले कि हे जनार्दन! आपने वामन रूप धारण करके उस महाबली दैत्य को किस प्रकार जीता? श्रीकृष्ण कहने लगे: मैंने वामन रूपधारी ब्रह्मचारी, बलि से तीन पग भूमि की याचना करते हुए कहा: ये मुझको तीन लोक के समान है और हे राजन यह तुमको अवश्य ही देनी होगी। राजा बलि ने इसे तुच्छ याचना समझकर तीन पग भूमि का संकल्प मुझको दे दिया और मैंने अपने त्रिविक्रम रूप को बढाकर यहां तक कि भूलोक में पद, भुवर्लोक में जंघा, स्वर्गलोक में कमर, महःलोक में पेट, जनलोक में हृदय, यमलोक में कंठ की स्थापना कर सत्यलोक में मुख, उसके ऊपर मस्तक स्थापित किया।",
          meaning: { en: "Hearing this Yudhishthira said: O Janardana, how did you conquer that mighty demon by taking the Vamana form? Krishna said: I, in the form of a Vamana brahmachari, begged Bali for three paces of land, saying: this is equal to the three worlds for me, and you must give it, O king. King Bali thought it a trifling request and made the vow of three paces to me, and I enlarged my Trivikrama form, placing my foot in the earth, my thigh in the middle world, my waist in heaven, my belly in Mahar loka, my heart in Jana loka, my throat in Yama's world, my face in Satya loka and above it my head." },
        },
        {
          text: "सूर्य, चंद्रमा आदि सब ग्रह गण, योग, नक्षत्र, इंद्रादिक देवता और शेष आदि सब नागगणों ने विविध प्रकार से वेद सूक्तों से प्रार्थना की। तब मैंने राजा बलि का हाथ पकडकर कहा कि हे राजन! एक पद से पृथ्वी, दूसरे से स्वर्गलोक पूर्ण हो गए। अब तीसरा पग कहां रखूं?",
          meaning: { en: "The sun, moon and all the planets, the yogas and stars, Indra and the other gods and Shesha and the serpents prayed with many Vedic hymns. Then I took King Bali's hand and said: O king, with one pace the earth and with the second heaven are filled; where shall I put the third pace?" },
        },
        {
          text: "तब बलि ने अपना सिर झुका लिया और मैंने अपना पैर उसके मस्तक पर रख दिया जिससे मेरा वह भक्त पाताल को चला गया। फिर उसकी विनती और नम्रता को देखकर मैंने कहा कि हे बलि! मैं सदैव तुम्हारे निकट ही रहूंगा। विरोचन पुत्र बलि से कहने पर भाद्रपद शुक्ल एकादशी के दिन बलि के आश्रम पर मेरी मूर्ति स्थापित हुई।",
          meaning: { en: "Then Bali bowed his head and I placed my foot on his head, by which my devotee went to Patala. Then seeing his humility and prayer I said: O Bali, I shall always stay near you. When I said this to Bali, son of Virochana, on the Ekadashi of Bhadrapada shukla my image was set up at Bali's hermitage." },
        },
        {
          text: "इसी प्रकार दूसरी क्षीरसागर में शेषनाग के पष्ठ पर हुई! हे राजन! इस एकादशी को भगवान शयन करते हुए करवट लेते हैं, इसलिए तीनों लोकों के स्वामी भगवान विष्णु का उस दिन पूजन करना चाहिए। इस दिन तांबा, चांदी, चावल और दही का दान करना उचित है। रात्रि को जागरण अवश्य करना चाहिए।",
          meaning: { en: "In the same way a second image was set up in the ocean of milk, on the back of Shesha. O king, on this Ekadashi the Lord turns over while sleeping, so on that day Lord Vishnu, master of the three worlds, should be worshipped. On this day it is right to give copper, silver, rice and curd, and one must certainly keep vigil at night." },
        },
        {
          text: "जो विधिपूर्वक इस एकादशी का व्रत करते हैं, वे सब पापों से मुक्त होकर स्वर्ग में जाकर चंद्रमा के समान प्रकाशित होते हैं और यश पाते हैं। जो पापनाशक इस कथा को पढते या सुनते हैं, उनको हजार अश्वमेध यज्ञ का फल प्राप्त होता है।",
          meaning: { en: "Those who keep this Ekadashi by the rule are freed from all sins, go to heaven, shine like the moon and gain fame. Those who read or hear this sin-destroying katha gain the fruit of a thousand Ashvamedha sacrifices." },
        },
      ],
    },
    {
      title: "इन्दिरा एकादशी (आश्विन कृष्ण)",
      titleEn: "Indira Ekadashi (Ashvina krishna)",
      note: "Ashvina krishna. Krishna to Yudhishthira, from Narada's words to King Indrasena.",
      verses: [
        {
          text: "धर्मराज युधिष्ठिर कहने लगे कि हे भगवान! मैंने भाद्रपद शुक्ल एकादशी अर्थात पार्श्व एकादशी का सविस्तार वर्णन सुना। अब आप कृपा करके मुझे आश्विन (क्वार) माह के कृष्ण पक्ष की एकादशी के विषय में भी बतलाइये। इस एकादशी का क्या नाम है तथा इसके व्रत का क्या विधान है? इसका व्रत करने से किस फल की प्राप्ति होती है?",
          meaning: { en: "Yudhishthira said: O Lord, I have heard in detail the Ekadashi of Bhadrapada shukla, Parshva. Now please tell me also of the Ekadashi of Ashvina (Kvar) krishna. What is its name, what is the rite of its vrata and what fruit does keeping it give?" },
        },
        {
          text: "भगवान श्रीकृष्ण कहने लगे कि आश्विन कृष्ण एकादशी का नाम इंदिरा एकादशी है। यह एकादशी पापों को नष्ट करने वाली तथा पितरों को अधोगति से मुक्ति देने वाली होती है। हे राजन! ध्यानपूर्वक इसकी कथा सुनो। इसके सुनने मात्र से ही वाजपेय यज्ञ का फल मिलता है।",
          meaning: { en: "Lord Krishna said: the Ekadashi of Ashvina krishna is named Indira. It destroys sins and frees the ancestors from a bad state. O king, listen to its katha attentively; by merely hearing it the fruit of the Vajapeya sacrifice is gained." },
        },
        {
          text: "प्राचीनकाल में सतयुग के समय में महिष्मति नाम की एक नगरी में इंद्रसेन नाम का एक प्रतापी राजा धर्मपूर्वक अपनी प्रजा का पालन करते हुए शासन करते थे। वह राजा पुत्र, पौत्र और धन आदि से संपन्न और भगवान विष्णु के परम भक्त थे। एक दिन जब राजा सुखपूर्वक अपनी सभा में बैठे थे, तो आकाश मार्ग से महर्षि नारद उतरकर उसकी सभा में आए। राजा उन्हें देखते ही हाथ जोडकर खडे हो गये और विधिपूर्वक आसन व अर्घ्य दिया।",
          meaning: { en: "In ancient times in the Satya Yuga a mighty king named Indrasena ruled in a city called Mahishmati, protecting his subjects by dharma. The king was rich in sons, grandsons and wealth and a great devotee of Lord Vishnu. One day, as he sat at ease in his court, the great sage Narada came down from the sky into his assembly. As soon as he saw him the king stood with folded hands and offered a seat and arghya by the rite." },
        },
        {
          text: "सुख से बैठकर मुनि ने राजा से पूछा कि हे राजन! आपके सातों अंग कुशलपूर्वक तो हैं? तुम्हारी बुद्धि धर्म में और तुम्हारा मन विष्णु भक्ति में तो रहता है? देवर्षि नारद की ऐसी बातें सुनकर राजा ने कहा: हे महर्षि!",
          meaning: { en: "Seated at ease, the sage asked the king: O king, are your seven limbs of state well? Is your mind set on dharma and your heart on devotion to Vishnu? Hearing Narada's words the king said: O great sage," },
        },
        {
          text: "आपकी कृपा से मेरे राज्य में सब कुशल है तथा मेरे यहाँ यज्ञ कर्मादि सुकृत हो रहे हैं। आप कृपा करके अपने आगमन का कारण कहिए। तब ऋषि कहने लगे कि हे राजन! आप आश्चर्य देने वाले मेरे वचनों को सुनो।",
          meaning: { en: "by your grace all is well in my kingdom and good works such as sacrifices go on. Please tell me the reason for your coming. Then the sage said: O king, listen to my words, which will surprise you." },
        },
        {
          text: "मैं एक समय ब्रह्मलोक से यमलोक को गया, वहाँ श्रद्धापूर्वक यमराज से पूजित होकर मैंने धर्मशील और सत्यवान धर्मराज की प्रशंसा की। उसी यमराज की सभा में महान ज्ञानी और धर्मात्मा तुम्हारे पिता को एकादशी का व्रत भंग होने के कारण देखा। उन्होंने संदेशा दिया सो मैं तुम्हें कहता हूँ। उन्होंने कहा कि पूर्व जन्म में कोई विघ्न हो जाने के कारण मैं यमराज के निकट रह रहा हूँ, सो हे पुत्र यदि तुम आश्विन कृष्णा इंदिरा एकादशी का व्रत मेरे निमित्त करो तो मुझे स्वर्ग की प्राप्ति हो सकती है। इतना सुनकर राजा कहने लगा कि, हे महर्षि आप इस व्रत की विधि मुझसे कहिए।",
          meaning: { en: "Once I went from Brahma's world to Yama's world, and there, honoured by Yama with faith, I praised Dharmaraja, righteous and truthful. In that same assembly of Yama I saw your father, a great knower and righteous man, because he had broken an Ekadashi vrata. He gave a message, which I tell you: because of an obstacle in a former birth I am staying near Yama; so, my son, if you keep the Ashvina krishna Indira Ekadashi for me, I can gain heaven. Hearing this the king said: O great sage, please tell me the rite of this vrata." },
        },
        {
          text: "नारदजी कहने लगे: आश्विन माह की कृष्ण पक्ष की दशमी के दिन प्रातःकाल श्रद्धापूर्वक स्नानादि से निवृत्त होकर पुनः दोपहर को नदी आदि में जाकर स्नान करें। फिर श्रद्धापूर्व पितरों का श्राद्ध करें और एक बार भोजन करें। प्रातःकाल होने पर एकादशी के दिन दातून आदि करके स्नान करें, फिर व्रत के नियमों को भक्तिपूर्वक ग्रहण करता हुआ प्रतिज्ञा करें कि मैं आज संपूर्ण भोगों को त्याग कर निराहार एकादशी का व्रत करूँगा।",
          meaning: { en: "Narada said: on the dashami of Ashvina krishna in the morning bathe with faith, and at noon again bathe in a river, then perform the shraddha of the ancestors with faith and eat once. At dawn on Ekadashi clean the teeth and bathe, then taking up the rules of the vrata with devotion make this resolve: today, giving up all enjoyments, I shall keep the Ekadashi vrata without food." },
        },
        {
          text: "हे अच्युत! हे पुंडरीकाक्ष! मैं आपकी शरण हूँ, आप मेरी रक्षा कीजिए, इस प्रकार नियमपूर्वक शालिग्राम की मूर्ति के आगे विधिपूर्वक श्राद्ध करके योग्य ब्राह्मणों को फलाहार का भोजन कराएँ और दक्षिणा दें। पितरों के श्राद्ध से जो बच जाए उसको सूँघकर गौ को दें तथा धूप, दीप, गंध, पुष्प, नैवेद्य आदि सब सामग्री से ऋषिकेश भगवान का पूजन करें।",
          meaning: { en: "Saying, O Achyuta, O lotus-eyed Lord, I take refuge in you, protect me, perform the shraddha by the rite before the shaligrama image, feed worthy brahmins with fruit food and give them a gift. Smell what is left of the ancestors' shraddha food and give it to a cow, and worship Lord Hrishikesha with incense, lamp, scent, flowers and offerings." },
        },
        {
          text: "रात में भगवान के निकट जागरण करें। इसके पश्चात द्वादशी के दिन प्रातःकाल होने पर भगवान का पूजन करके ब्राह्मणों को भोजन कराएँ। भाई-बंधुओं, स्त्री और पुत्र सहित आप भी मौन होकर भोजन करें।",
          meaning: { en: "At night keep vigil near the Lord. Then on Dvadashi in the morning worship the Lord and feed the brahmins; then you too, with brothers, relatives, wife and sons, should eat in silence." },
        },
        {
          text: "नारदजी कहने लगे कि हे राजन! इस विधि से यदि तुम आलस्य रहित होकर इस एकादशी का व्रत करोगे तो तुम्हारे पिता अवश्य ही स्वर्गलोक को जाएँगे। इतना कहकर नारदजी अंतर्ध्यान हो गए।",
          meaning: { en: "Narada said: O king, if you keep this Ekadashi by this rule without laziness, your father will certainly go to heaven. Having said this Narada vanished." },
        },
        {
          text: "नारदजी के कथनानुसार राजा द्वारा अपने बाँधवों तथा दासों सहित व्रत करने से आकाश से पुष्पवर्षा हुई और उस राजा का पिता गरुड पर चढकर विष्णुलोक को गया। राजा इंद्रसेन भी एकादशी के व्रत के प्रभाव से निष्कंटक राज्य करके अंत में अपने पुत्र को सिंहासन पर बैठाकर स्वर्गलोक को गया।",
          meaning: { en: "As Narada had said, the king kept the vrata with his kinsmen and servants; flowers rained from the sky and the king's father rose on Garuda to Vishnu's world. King Indrasena too, by the power of the Ekadashi, ruled without trouble and at the end placed his son on the throne and went to heaven." },
        },
        {
          text: "हे युधिष्ठिर! यह इंदिरा एकादशी के व्रत का माहात्म्य मैंने तुमसे कहा। इसके पढने और सुनने से मनुष्य सब पापों से छूट जाते हैं और सब प्रकार के भोगों को भोगकर बैकुंठ को प्राप्त होते हैं।",
          meaning: { en: "O Yudhishthira, I have told you the greatness of the Indira Ekadashi vrata. By reading or hearing it people are freed from all sins and, enjoying all pleasures, reach Vaikuntha." },
        },
      ],
    },
    {
      title: "पापांकुशा एकादशी (आश्विन शुक्ल)",
      titleEn: "Papankusha Ekadashi (Ashvina shukla)",
      note: "Ashvina shukla. Krishna to Arjuna.",
      verses: [
        {
          text: "अर्जुन कहने लगे कि हे जगदीश्वर! मैंने आश्विन कृष्ण एकादशी अर्थात इंदिरा एकादशी का सविस्तार वर्णन सुना। अब आप कृपा करके मुझे आश्विन (क्वार) माह के शुक्ल पक्ष की एकादशी के विषय में भी बतलाइये। इस एकादशी का क्या नाम है तथा इसके व्रत का क्या विधान है?",
          meaning: { en: "Arjuna said: O Lord of the world, I have heard in detail the Ekadashi of Ashvina krishna, Indira. Now please tell me also of the Ekadashi of the bright half of Ashvina (Kvar). What is the name of this Ekadashi and what is the rite of its vrata?" },
        },
        {
          text: "इसका व्रत करने से किस फल की प्राप्ति होती है? कृपया यह सब विधानपूर्वक कहिए।",
          meaning: { en: "What fruit does keeping it give? Please tell me all this by the rite." },
        },
        {
          text: "भगवान श्रीकृष्ण ने कहा: हे कुंतीनंदन! आश्विन माह के शुक्ल पक्ष की एकादशी का नाम पापांकुशा एकादशी है। इसका व्रत करने से सभी पाप नष्ट हो जाते हैं तथा व्रत करने वाला अक्षय पुण्य का भागी होता है।",
          meaning: { en: "Lord Krishna said: O son of Kunti, the Ekadashi of the bright half of Ashvina is named Papankusha. By keeping it all sins are destroyed and the keeper gains imperishable merit." },
        },
        {
          text: "आश्विन शुक्ल एकादशी के दिन इच्छित फल की प्राप्ति के लिए भगवान विष्णु का पूजन करना चाहिए। इस पूजन के द्वारा मनुष्य को स्वर्ग लोक की प्राप्ति होती है। हे अर्जुन! जो मनुष्य कठिन तपस्याओं के द्वारा फल की प्राप्ति करते हैं, वह फल इस एकादशी के दिन क्षीर-सागर में शेषनाग पर शयन करने वाले भगवान विष्णु को नमस्कार कर देने से मिल जाता है और मनुष्य को यम के दुख नहीं भोगने पडते।",
          meaning: { en: "On Ashvina shukla Ekadashi one should worship Lord Vishnu for the fruit one desires, and by this worship a person gains heaven. O Arjuna, the fruit that people gain by hard austerities comes on this Ekadashi by bowing to Lord Vishnu who sleeps on Shesha in the ocean of milk, and one does not suffer Yama's torments." },
        },
        {
          text: "मनुष्य को पापों से बचने का दृढ-संकल्प करना चाहिए। भगवान विष्णु का ध्यान-स्मरण किसी भी रूप में सुखदायक और पापनाशक है, परंतु पापांकुशा एकादशी के दिन प्रभु का स्मरण-कीर्तन सभी क्लेशों व पापों का शमन कर देता है।",
          meaning: { en: "A person should firmly resolve to keep away from sin. Remembering Lord Vishnu in any form gives happiness and destroys sin, but on Papankusha Ekadashi remembrance and chanting of the Lord calms all afflictions and sins." },
        },
        {
          text: "प्राचीन समय में विंध्य पर्वत पर क्रोधन नामक एक बहेलिया रहता था, वह बडा क्रूर था। उसका सारा जीवन हिंसा, लूटपाट, मद्यपान और गलत संगति पाप कर्मों में बीता।",
          meaning: { en: "In ancient times on the Vindhya mountain there lived a hunter named Krodhana, who was very cruel. His whole life was spent in violence, robbery, drinking and bad company, in sinful acts." },
        },
        {
          text: "जब उसका अंतिम समय आया तब यमराज के दूत बहेलिये को लेने आए और यमदूत ने बहेलिये से कहा कि कल तुम्हारे जीवन का अंतिम दिन है हम तुम्हें कल लेने आएंगे। यह बात सुनकर बहेलिया बहुत भयभीत हो गया और महर्षि अंगिरा के आश्रम में पहुंचा और महर्षि अंगिरा के चरणों पर गिरकर प्रार्थना करने लगा, हे ऋषिवर! मैंने जीवन भर पाप कर्म ही किए हैं।",
          meaning: { en: "When his last time came, the messengers of Yama came to take the hunter, and a messenger told him that tomorrow was the last day of his life and they would come for him then. Hearing this the hunter was very afraid and went to the hermitage of the sage Angira, fell at his feet and prayed: O sage, I have done only sinful deeds all my life." },
        },
        {
          text: "कृपा कर मुझे कोई ऐसा उपाय बताएं, जिससे मेरे सारे पाप मिट जाएं और मोक्ष की प्राप्ति हो जाए। उसके निवेदन पर महर्षि अंगिरा ने उसे आश्विन शुक्ल की पापांकुशा एकादशी का विधि पूर्वक व्रत करके को कहा।",
          meaning: { en: "Please tell me some way by which all my sins may be wiped away and I may gain liberation. At his request the sage Angira told him to keep the Papankusha Ekadashi of Ashvina shukla by the rule." },
        },
        {
          text: "महर्षि अंगिरा के कहे अनुसार उस बहेलिए ने यह व्रत किया और किए गए सारे पापों से छुटकारा पा लिया और इस व्रत पूजन के बल से भगवान की कृपा से वह विष्णु लोक को गया। जब यमराज के यमदूत ने इस चमत्कार को देखा तो वह बहेलिया को बिना लिए ही यमलोक वापस लौट गए।",
          meaning: { en: "As the sage Angira had said, the hunter kept this vrata and was freed from all his sins, and by the power of this worship, by the Lord's grace, he went to Vishnu's world. When Yama's messengers saw this wonder, they returned to Yama's world without taking the hunter." },
        },
      ],
    },
    {
      title: "रमा एकादशी (कार्तिक कृष्ण)",
      titleEn: "Rama Ekadashi (Kartika krishna)",
      note: "Kartika krishna, four days before Diwali. Krishna to Yudhishthira.",
      verses: [
        {
          text: "धर्मराज युधिष्ठिर कहने लगे कि हे भगवान! मैंने आश्विन शुक्ल एकादशी अर्थात पापांकुशा एकादशी का सविस्तार वर्णन सुना। अब आप कृपा करके मुझे कार्तिक माह के कृष्ण पक्ष की एकादशी के विषय में भी बतलाइये। इस एकादशी का क्या नाम है तथा इसके व्रत का क्या विधान है?",
          meaning: { en: "Dharmaraja Yudhishthira said: O Lord, I have heard in detail the Ekadashi of Ashvina shukla, Papankusha. Now please tell me of the Ekadashi of Kartika krishna. What is the name of this Ekadashi and what is the rite of its vrata?" },
        },
        {
          text: "भगवान श्रीकृष्ण बोले: कार्तिक माह के कृष्ण पक्ष में दीपावली के चार दिन पहले आने वाली इस एकादशी को लक्ष्मी जी के नाम पर रमा एकादशी कहा जाता है। इसे पुण्यदायिनी एकादशी के नाम से भी जाना जाता है। इसके प्रभाव से ब्रह्महत्या जैसे महापाप भी दूर हो जाते हैं। यह बडे-बडे पापों का नाश करने वाली है। इसका माहात्म्य मैं तुमसे कहता हूँ, ध्यानपूर्वक सुनो।",
          meaning: { en: "Lord Krishna said: the Ekadashi of Kartika krishna that comes four days before Diwali is called Rama Ekadashi after Lakshmi; it is also known as Punyadayini. By its power even sins like killing a brahmin are removed, and it destroys great sins. I tell you its greatness; listen carefully." },
        },
        {
          text: "हे राजन! प्राचीनकाल में मुचुकुंद नाम के एक राजा थे। उसकी इंद्र के साथ मित्रता थी और साथ ही यम, कुबेर, वरुण और विभीषण भी उसके मित्र थे। यह राजा बडा धर्मात्मा, विष्णुभक्त और न्याय के साथ राज करता था। उस राजा की एक कन्या थी, जिसका नाम चंद्रभागा था। उस कन्या का विवाह चंद्रसेन के पुत्र शोभन के साथ हुआ था। एक समय वह शोभन ससुराल आया। उन्हीं दिनों जल्दी ही रमा एकादशी भी आने वाली थी।",
          meaning: { en: "O king, in ancient times there was a king named Muchukunda. He was a friend of Indra and also of Yama, Kubera, Varuna and Vibhishana. This king was very righteous, a devotee of Vishnu and ruled with justice. He had a daughter named Chandrabhaga, who was married to Shobhana, son of Chandrasena. Once Shobhana came to his father-in-law's house, and at that time Rama Ekadashi was soon to come." },
        },
        {
          text: "जब व्रत का दिन समीप आ गया तो चंद्रभागा के मन में अत्यंत सोच उत्पन्न हुआ कि मेरे पति अत्यंत दुर्बल हैं और मेरे पिता की आज्ञा अति कठोर है। दशमी को राजा ने ढोल बजवाकर सारे राज्य में यह घोषणा करवा दी कि एकादशी को भोजन नहीं करना चाहिए। ढोल की घोषणा सुनते ही शोभन को अत्यंत चिंता हुई और अपनी पत्नी से कहा कि हे प्रिये! अब क्या करना चाहिए, मैं किसी प्रकार भी भूख सहन नहीं कर सकूँगा। ऐसा उपाय बतलाओ कि जिससे मेरे प्राण बच सकें, अन्यथा मेरे प्राण अवश्य चले जाएंगे।",
          meaning: { en: "As the day of the vrata drew near, great worry rose in Chandrabhaga's mind: my husband is very weak, and my father's order is very strict. On Dashami the king had a drum beaten announcing through the whole kingdom that no one should eat on Ekadashi. Hearing the drum Shobhana was very anxious and said to his wife: dear, what should I do? I cannot bear hunger. Tell me some way to save my life, or I shall surely die." },
        },
        {
          text: "चंद्रभागा कहने लगी कि हे स्वामी! मेरे पिता के राज में एकादशी के दिन कोई भी भोजन नहीं करता। हाथी, घोडा, ऊंट, बिल्ली, गौ आदि भी तृण, अन्न, जल आदि ग्रहण नहीं कर सकते, फिर मनुष्य का तो कहना ही क्या है। यदि आप भोजन करना चाहते हैं तो किसी दूसरे स्थान पर चले जाइए, क्योंकि यदि आप यहीं रहना चाहते हैं तो आपको अवश्य व्रत करना पडेगा। ऐसा सुनकर शोभन कहने लगा कि हे प्रिये! मैं अवश्य व्रत करूँगा, जो भाग्य में होगा, वह देखा जाएगा।",
          meaning: { en: "Chandrabhaga said: O lord, in my father's kingdom no one eats on Ekadashi; even elephants, horses, camels, cats and cows do not take grass, grain or water, so what to say of people. If you wish to eat, go to some other place, for if you stay here you must keep the vrata. Hearing this Shobhana said: dear, I shall surely keep the vrata; whatever is in my fate will be seen." },
        },
        {
          text: "इस प्रकार से विचार कर शोभन ने व्रत रख लिया और वह भूख व प्यास से अत्यंत पीडित होने लगा। जब सूर्य नारायण अस्त हो गए और रात्रि को जागरण का समय आया जो वैष्णवों को अत्यंत हर्ष देने वाला था, परंतु शोभन के लिए अत्यंत दुःखदायी हुआ। प्रातःकाल होते शोभन के प्राण निकल गए। तब राजा ने सुगंधित काष्ठ से उसका दाह संस्कार करवाया। परंतु चंद्रभागा ने अपने पिता की आज्ञा से अपने शरीर को दग्ध नहीं किया और शोभन की अंत्येष्टि क्रिया के बाद अपने पिता के घर में ही रहने लगी।",
          meaning: { en: "Thus resolving, Shobhana kept the fast and was sorely afflicted by hunger and thirst. When the sun set and the time for the night vigil came, which gives great joy to Vaishnavas, it was very painful for Shobhana. By morning Shobhana's life left him. The king had him cremated with fragrant wood, but by her father's order Chandrabhaga did not burn herself, and after Shobhana's last rites she went on living in her father's house." },
        },
        {
          text: "रमा एकादशी के प्रभाव से शोभन को मंदराचल पर्वत पर धन-धान्य से युक्त तथा शत्रुओं से रहित एक सुंदर देवपुर प्राप्त हुआ। वह अत्यंत सुंदर रत्न और वैदुर्यमणि जटित स्वर्ण के खंभों पर निर्मित अनेक प्रकार की स्फटिक मणियों से सुशोभित भवन में बहुमूल्य वस्त्राभूषणों तथा छत्र व चंवर से विभूषित, गंधर्व और अप्सराओं से युक्त सिंहासन पर आरूढ ऐसा शोभायमान होता था मानो दूसरा इंद्र विराजमान हो। एक समय मुचुकुंद नगर में रहने वाले एक सोम शर्मा नामक ब्राह्मण तीर्थयात्रा करता हुआ घूमता-घूमता उधर जा निकला और उसने शोभन को पहचाना, कि यह तो राजा का जमाई शोभन है, उसके निकट गया। शोभन भी उसे पहचान कर अपने आसन से उठकर उसके पास आया और प्रणामादि करके कुशल प्रश्न किया। ब्राह्मण ने कहा कि राजा मुचुकुंद और आपकी पत्नी कुशल से हैं। नगर में भी सब प्रकार से कुशल हैं, परंतु हे राजन!",
          meaning: { en: "By the power of Rama Ekadashi Shobhana gained on Mount Mandara a beautiful city of the gods, rich in wealth and grain and without enemies. In a palace with gold pillars set with jewels and cat's-eye, shining with crystal gems, adorned with costly clothes and ornaments, parasol and chowry, seated on a throne with gandharvas and apsaras, he shone like a second Indra. Once a brahmin named Soma Sharma, who lived in Muchukunda's city, wandering on pilgrimage came that way and recognized Shobhana as the king's son-in-law and went near him. Shobhana too knew him, rose from his seat, bowed and asked after his welfare. The brahmin said: King Muchukunda and your wife are well and all is well in the city; but, O king," },
        },
        {
          text: "हमें आश्चर्य हो रहा है। आप अपना वृत्तांत कहिए कि ऐसा सुंदर नगर जो न कभी देखा, न सुना, आपको कैसे प्राप्त हुआ। तब शोभन बोला कि कार्तिक कृष्ण की रमा एकादशी का व्रत करने से मुझे यह नगर प्राप्त हुआ, परंतु यह अस्थिर है। यह स्थिर हो जाए ऐसा उपाय कीजिए। ब्राह्मण कहने लगा कि हे राजन! यह स्थिर क्यों नहीं है और कैसे स्थिर हो सकता है?",
          meaning: { en: "we are astonished. Tell us your story: how did you get such a beautiful city, such as I have never seen or heard of? Then Shobhana said: I got this city by keeping Rama Ekadashi of Kartika krishna, but it is unstable; please find a way to make it stable. The brahmin said: O king, why is it not stable and how can it be made stable?" },
        },
        {
          text: "आप बताइए, फिर मैं अवश्यमेव वह उपाय करूँगा। मेरी इस बात को आप मिथ्या न समझिए। शोभन ने कहा कि मैंने इस व्रत को श्रद्धारहित होकर किया है। अतः यह सब कुछ अस्थिर है। यदि आप मुचुकुंद की कन्या चंद्रभागा को यह सब वृत्तांत कहें तो यह स्थिर हो सकता है।",
          meaning: { en: "Tell me, and I shall certainly do the remedy; do not think my word false. Shobhana said: I kept this vrata without faith, so all this is unstable. If you tell the whole account to Chandrabhaga, daughter of Muchukunda, it can become stable." },
        },
        {
          text: "ऐसा सुनकर उस श्रेष्ठ ब्राह्मण ने अपने नगर लौटकर चंद्रभागा से सब वृत्तांत कह सुनाया। ब्राह्मण के वचन सुनकर चंद्रभागा बडी प्रसन्नता से ब्राह्मण से कहने लगी कि हे ब्राह्मण! ये सब बातें आपने प्रत्यक्ष देखी हैं या स्वप्न की बातें कर रहे हैं। ब्राह्मण कहने लगा कि हे पुत्री!",
          meaning: { en: "Hearing this, the excellent brahmin returned to his city and told Chandrabhaga all that had happened. Hearing him, Chandrabhaga said with great joy: O brahmin, have you seen all this yourself or are you speaking of dreams? The brahmin said: O daughter," },
        },
        {
          text: "मैंने महावन में तुम्हारे पति को प्रत्यक्ष देखा है। साथ ही किसी से विजय न हो ऐसा देवताओं के नगर के समान उनका नगर भी देखा है। उन्होंने यह भी कहा कि यह स्थिर नहीं है। किस प्रकार वह स्थिर रह सके सो उपाय करना चाहिए।",
          meaning: { en: "I saw your husband with my own eyes in the great forest, and also his city, like a city of the gods that none can conquer. He also said it is not stable; some means should be found to make it stay." },
        },
        {
          text: "चंद्रभागा कहने लगी हे विप्र! तुम मुझे वहाँ ले चलो, मुझे पतिदेव के दर्शन की तीव्र लालसा है। मैं अपने किए हुए पुण्य से उस नगर को स्थिर बना दूंगी। आप ऐसा कार्य कीजिए जिससे उनका हमारा संयोग हो क्योंकि वियोगी को मिला देना महान पुण्य है। सोम शर्मा यह बात सुनकर चंद्रभागा को लेकर मंदराचल पर्वत के समीप वामदेव ऋषि के आश्रम पर गया। वामदेवजी ने सारी बात सुनकर वेद मंत्रों के उच्चारण से चंद्रभागा का अभिषेक कर दिया। तब ऋषि के मंत्र के प्रभाव और एकादशी के व्रत से चंद्रभागा का शरीर दिव्य हो गया और वह दिव्य गति को प्राप्त हुई।",
          meaning: { en: "Chandrabhaga said: O brahmin, take me there; I have a strong longing to see my husband. By my own merit I shall make that city stable. Do something so that we may be united, for to unite those who are parted is great merit. Soma Sharma heard this and took Chandrabhaga near Mount Mandara to the hermitage of the sage Vamadeva. Vamadeva heard everything and by reciting Vedic mantras anointed Chandrabhaga; by the power of the sage's mantra and her Ekadashi vrata Chandrabhaga's body became divine and she attained a divine state." },
        },
        {
          text: "इसके बाद बडी प्रसन्नता के साथ अपने पति के निकट गई। अपनी प्रिय पत्नी को आते देखकर शोभन अति प्रसन्न हुआ। और उसे बुलाकर अपनी बाईं तरफ बिठा लिया। चंद्रभागा कहने लगी कि हे प्राणनाथ!",
          meaning: { en: "Then with great joy she went to her husband. Seeing his dear wife coming Shobhana was very glad, called her and seated her on his left. Chandrabhaga said: O lord of my life," },
        },
        {
          text: "आप मेरे पुण्य को ग्रहण कीजिए। अपने पिता के घर जब मैं आठ वर्ष की थी तब से विधिपूर्वक एकादशी के व्रत को श्रद्धापूर्वक करती आ रही हूँ। इस पुण्य के प्रताप से आपका यह नगर स्थिर हो जाएगा तथा समस्त कर्मों से युक्त होकर प्रलय के अंत तक रहेगा। इस प्रकार चंद्रभागा ने दिव्य आभूषणों और वस्त्रों से सुसज्जित होकर अपने पति के साथ आनंदपूर्वक रहने लगी।",
          meaning: { en: "accept my merit. Since I was eight years old in my father's house I have kept the Ekadashi vrata faithfully by the rule. By the power of this merit your city will become stable and last, complete with all its works, till the end of the world. So Chandrabhaga, adorned in divine ornaments and clothes, lived happily with her husband." },
        },
        {
          text: "हे राजन! यह मैंने रमा एकादशी का माहात्म्य कहा है, जो मनुष्य इस व्रत को करते हैं, उनके ब्रह्म हत्यादि समस्त पाप नष्ट हो जाते हैं। कृष्ण पक्ष और शुक्ल पक्ष दोनों ही एकादशियां समान हैं, इनमें कोई भेदभाव नहीं है। दोनों समान फल देती हैं। जो मनुष्य इस माहात्म्य को पढते अथवा सुनते हैं, वे समस्त पापों से छूटकर विष्णुलोक को प्राप्त होता हैं।",
          meaning: { en: "O king, I have told you the greatness of Rama Ekadashi. Those who keep this vrata have all sins like killing a brahmin destroyed. The Ekadashis of the dark and the bright half are equal, with no difference; both give the same fruit. Those who read or hear this greatness are freed from all sins and reach Vishnu's world." },
        },
      ],
    },
    {
      title: "देवउठनी एकादशी (कार्तिक शुक्ल)",
      titleEn: "Devutthani Ekadashi (Kartika shukla)",
      note: "Kartika shukla. Also Prabodhini and Devotthana Ekadashi; the Lord wakes and the Chaturmasya ends. The folk katha of the servant and the Lord, printed as the second katha of this Ekadashi.",
      verses: [
        {
          text: "धर्मराज युधिष्ठिर कहने लगे कि हे भगवान! मैंने कार्तिक कृष्ण एकादशी अर्थात रमा एकादशी का सविस्तार वर्णन सुना। अब आप कृपा करके मुझे कार्तिक माह के शुक्ल पक्ष की एकादशी के विषय में भी बतलाइये।",
          meaning: { en: "Dharmaraja Yudhishthira said: O Lord, I have heard in detail the Ekadashi of Kartika krishna, Rama. Now please tell me also of the Ekadashi of Kartika shukla." },
        },
        {
          text: "इस एकादशी का क्या नाम है तथा इसके व्रत का क्या विधान है? इसकी विधि क्या है? इसका व्रत करने से किस फल की प्राप्ति होती है? कृपया यह सब विधानपूर्वक कहिए।",
          meaning: { en: "What is the name of this Ekadashi and what is the rite of its vrata? What is the rite and what fruit does keeping it give? Please tell me all this by the rule." },
        },
        {
          text: "भगवान श्रीकृष्ण बोले: कार्तिक माह के शुक्ल पक्ष में तुलसी विवाह के दिन आने वाली इस एकादशी को विष्णु प्रबोधिनी एकादशी, देव-प्रबोधिनी एकादशी, देवोत्थान, देव उथव एकादशी, देवउठनी एकादशी, कार्तिक शुक्ल एकादशी तथा प्रबोधिनी एकादशी भी कहा जाता है। यह बडे-बडे पापों का नाश करने वाली है, इसका माहात्म्य मैं तुमसे कहता हूँ, ध्यानपूर्वक सुनो।",
          meaning: { en: "Lord Krishna said: the Ekadashi that comes in the bright half of Kartika on the day of Tulasi's wedding is also called Vishnu Prabodhini, Dev Prabodhini, Devotthana, Dev Uthav, Dev Uthani, Kartika Shukla and Prabodhini Ekadashi. It destroys great sins; I tell you its greatness, listen carefully." },
        },
        {
          text: "एक राजा के राज्य में सभी लोग एकादशी का व्रत रखते थे। प्रजा तथा नौकर-चाकरों से लेकर पशुओं तक को एकादशी के दिन अन्न नहीं दिया जाता था। एक दिन किसी दूसरे राज्य का एक व्यक्ति राजा के पास आकर बोला: महाराज! कृपा करके मुझे नौकरी पर रख लें।",
          meaning: { en: "In one king's kingdom all the people kept Ekadashi. From the subjects and servants to the animals, no one was given grain on Ekadashi. One day a man from another kingdom came to the king and said: Maharaja, please take me into service." },
        },
        {
          text: "तब राजा ने उसके सामने एक शर्त रखी कि ठीक है, रख लेते हैं। किन्तु रोज तो तुम्हें खाने को सब कुछ मिलेगा, पर एकादशी को अन्न नहीं मिलेगा।",
          meaning: { en: "Then the king set a condition: very well, I shall keep you, but every day you will get all you need to eat, and on Ekadashi you will get no grain." },
        },
        {
          text: "उस व्यक्ति ने उस समय हाँ कर ली, पर एकादशी के दिन जब उसे फलाहार का सामान दिया गया तो वह राजा के सामने जाकर गिडगिडाने लगा: महाराज! इससे मेरा पेट नहीं भरेगा। मैं भूखा ही मर जाऊंगा, मुझे अन्न दे दो।",
          meaning: { en: "The man agreed at the time, but on Ekadashi when he was given fruit food he went to the king and pleaded: Maharaja, this will not fill my belly. I shall die of hunger; give me grain." },
        },
        {
          text: "राजा ने उसे शर्त की बात याद दिलाई, पर वह अन्न छोडने को तैयार नहीं हुआ, तब राजा ने उसे आटा-दाल-चावल आदि दिए। वह नित्य की तरह नदी पर पहुंचा और स्नान कर भोजन पकाने लगा। जब भोजन बन गया तो वह भगवान को बुलाने लगा: आओ भगवान! भोजन तैयार है।",
          meaning: { en: "The king reminded him of the condition but he would not give up grain, so the king gave him flour, pulses, rice and the like. As usual he went to the river, bathed and began to cook. When the food was ready he began to call the Lord: Come, Lord, the meal is ready!" },
        },
        {
          text: "उसके बुलाने पर पीताम्बर धारण किए भगवान चतुर्भुज रूप में आ पहुँचे तथा प्रेम से उसके साथ भोजन करने लगे। भोजनादि करके भगवान अंतर्धान हो गए तथा वह अपने काम पर चला गया।",
          meaning: { en: "At his call the Lord came in his four-armed form wearing yellow garments and began to eat with him lovingly. After the meal the Lord vanished and the man went to his work." },
        },
        {
          text: "पंद्रह दिन बाद अगली एकादशी को वह राजा से कहने लगा कि महाराज, मुझे दुगुना सामान दीजिए। उस दिन तो मैं भूखा ही रह गया। राजा ने कारण पूछा तो उसने बताया कि हमारे साथ भगवान भी खाते हैं। इसीलिए हम दोनों के लिए ये सामान पूरा नहीं होता।",
          meaning: { en: "Fifteen days later on the next Ekadashi he told the king: Maharaja, give me double the supplies; that day I stayed hungry. When the king asked the reason he said: the Lord also eats with us, so this food is not enough for both of us." },
        },
        {
          text: "यह सुनकर राजा को बडा आश्चर्य हुआ। वह बोला: मैं नहीं मान सकता कि भगवान तुम्हारे साथ खाते हैं। मैं तो इतना व्रत रखता हूँ, पूजा करता हूँ, पर भगवान ने मुझे कभी दर्शन नहीं दिए।",
          meaning: { en: "Hearing this the king was greatly astonished. He said: I cannot believe the Lord eats with you. I keep so many fasts and do worship, yet the Lord has never given me his vision." },
        },
        {
          text: "राजा की बात सुनकर वह बोला: महाराज! यदि विश्वास न हो तो साथ चलकर देख लें। राजा एक पेड के पीछे छिपकर बैठ गया।",
          meaning: { en: "Hearing the king he said: Maharaja, if you do not believe, come with me and see. The king hid behind a tree." },
        },
        {
          text: "उस व्यक्ति ने भोजन बनाया तथा भगवान को शाम तक पुकारता रहा, परंतु भगवान न आए। अंत में उसने कहा: हे भगवान! यदि आप नहीं आए तो मैं नदी में कूदकर प्राण त्याग दूंगा।",
          meaning: { en: "The man cooked the meal and called the Lord until evening, but the Lord did not come. At last he said: O Lord, if you do not come I shall jump into the river and give up my life." },
        },
        {
          text: "लेकिन भगवान नहीं आए, तब वह प्राण त्यागने के उद्देश्य से नदी की तरफ बढा। प्राण त्यागने का उसका दृढ इरादा जान शीघ्र ही भगवान ने प्रकट होकर उसे रोक लिया और साथ बैठकर भोजन करने लगे। खा-पीकर वे उसे अपने विमान में बिठाकर अपने धाम ले गए। यह देख राजा ने सोचा कि व्रत-उपवास से तब तक कोई फायदा नहीं होता, जब तक मन शुद्ध न हो।",
          meaning: { en: "But the Lord still did not come, so he moved toward the river to give up his life. Knowing his firm resolve the Lord at once appeared and stopped him and sat down to eat with him. After eating and drinking he took the man in his own aerial car to his abode. Seeing this the king thought that fasting does no good until the mind is pure." },
        },
        {
          text: "इससे राजा को ज्ञान मिला। वह भी मन से व्रत-उपवास करने लगा और अंत में स्वर्ग को प्राप्त हुआ।",
          meaning: { en: "This gave the king knowledge. He too began to keep fasts with a true mind and in the end reached heaven." },
        },
      ],
    },
    {
      title: "उत्पन्ना एकादशी (मार्गशीर्ष कृष्ण)",
      titleEn: "Utpanna Ekadashi (Margashirsha krishna)",
      note: "Margashirsha krishna. The birth of Ekadashi Devi. Krishna to Yudhishthira.",
      verses: [
        {
          text: "धर्मराज युधिष्ठिर कहने लगे कि हे भगवान! मैंने कार्तिक शुक्ल एकादशी अर्थात प्रबोधिनी एकादशी का सविस्तार वर्णन सुना। अब आप कृपा करके मुझे मार्गशीर्ष माह के कृष्ण पक्ष की एकादशी के विषय में भी बतलाइये।",
          meaning: { en: "Dharmaraja Yudhishthira said: O Lord, I have heard in detail the Ekadashi of Kartika shukla, Prabodhini. Now please tell me also of the Ekadashi of Margashirsha krishna." },
        },
        {
          text: "इस एकादशी का क्या नाम है तथा इसके व्रत का क्या विधान है? इसकी विधि क्या है? इसका व्रत करने से किस फल की प्राप्ति होती है? कृपया यह सब विधानपूर्वक कहिए।",
          meaning: { en: "What is the name of this Ekadashi and what is the rite of its vrata? What is the rite and what fruit does keeping it give? Please tell me all this by the rule." },
        },
        {
          text: "भगवान श्रीकृष्ण बोले: मार्गशीर्ष माह के कृष्ण पक्ष में आने वाली इस एकादशी को उत्पन्ना एकादशी कहा जाता है। यह व्रत शंखोद्धार तीर्थ में स्नान करके भगवान के दर्शन करने से जो फल प्राप्त होता है, उसके बराबर पुण्य मिलता है। व्रत करने वाले भक्त को चोर, पाखंडी, परस्त्रीगामी, निंदक, मिथ्याभाषी तथा किसी भी प्रकार के पापी से बात नहीं करनी चाहिए। इसका माहात्म्य मैं तुमसे कहता हूं, ध्यानपूर्वक सुनो।",
          meaning: { en: "Lord Krishna said: the Ekadashi that comes in the dark half of Margashirsha is called Utpanna. This vrata gives merit equal to bathing at Shankhoddhara and seeing the Lord there. One who keeps it should not speak with a thief, a hypocrite, an adulterer, a slanderer, a liar or any kind of sinner. I tell you its greatness; listen carefully." },
        },
        {
          text: "भगवन कहने लगे- हे युधिष्ठिर! सतयुग में मुर नाम का दैत्य उत्पन्न हुआ। वह बडा बलवान और भयानक था। उस प्रचंड दैत्य ने इंद्र, आदित्य, वसु, वायु, अग्नि आदि सभी देवताओं को पराजित करके भगा दिया।",
          meaning: { en: "The Lord said: O Yudhishthira, in the Satya Yuga a demon named Mura was born. He was very strong and terrible. That fierce demon defeated Indra, the Adityas, Vasus, Vayu, Agni and all the gods and drove them away." },
        },
        {
          text: "तब इंद्र सहित सभी देवताओं ने भयभीत होकर भगवान शिव से सारा वृत्तांत कहा और बोले हे कैलाशपति! मुर दैत्य से भयभीत होकर सब देवता मृत्यु लोक में फिर रहे हैं। तब भगवान शिव ने कहा- हे देवताओं! तीनों लोकों के स्वामी, भक्तों के दुःखों का नाश करने वाले भगवान विष्णु की शरण में जाओ।",
          meaning: { en: "Then all the gods led by Indra, in fear, told Lord Shiva the whole matter and said: O Lord of Kailasa, frightened by the demon Mura all the gods are wandering in the mortal world. Then Shiva said: O gods, go to Lord Vishnu, master of the three worlds and destroyer of his devotees' sorrows." },
        },
        {
          text: "वे ही तुम्हारे दुःखों को दूर कर सकते हैं। शिवजी के ऐसे वचन सुनकर सभी देवता क्षीरसागर में पहुँचे। वहाँ भगवान को शयन करते देख हाथ जोडकर उनकी स्तुति करने लगे, कि हे देवताओं द्वारा स्तुति करने योग्य प्रभो! आपको बारम्बार नमस्कार है, देवताओं की रक्षा करने वाले मधुसूदन!",
          meaning: { en: "He alone can remove your sorrows. Hearing Shiva's words all the gods went to the ocean of milk. Seeing the Lord asleep there they folded their hands and praised him: O Lord, worthy of the gods' praise, salutations to you again and again, O Madhusudana, protector of the gods!" },
        },
        {
          text: "आपको नमस्कार है। आप हमारी रक्षा करें। दैत्यों से भयभीत होकर हम सब आपकी शरण में आए हैं।",
          meaning: { en: "Salutations to you. Protect us. Frightened of the demons we have all come to you for refuge." },
        },
        {
          text: "आप सर्वव्यापक हैं। आपके सिवा तीनों लोकों में चर तथा अचर कुछ भी नहीं है। हे भगवन्! दैत्यों ने हमको जीतकर स्वर्ग से भ्रष्ट कर दिया है और हम सब देवता इधर-उधर भागे-भागे फिर रहे हैं, आप उन दैत्यों से हम सबकी रक्षा करें।",
          meaning: { en: "You are all-pervading; apart from you nothing moving or unmoving exists in the three worlds. O Lord, the demons have conquered us and thrown us out of heaven and we gods are running about here and there; protect all of us from those demons." },
        },
        {
          text: "इंद्र के ऐसे वचन सुनकर भगवान विष्णु कहने लगे कि हे इंद्र! ऐसा मायावी दैत्य कौन है जिसने सब देवताओं को जीत लिया है, उसका नाम क्या है, उसमें कितना बल है और किसके आश्रय में है तथा उसका स्थान कहाँ है? यह सब मुझसे कहो।",
          meaning: { en: "Hearing Indra's words Lord Vishnu said: O Indra, who is this deceptive demon who has conquered all the gods? What is his name, how strong is he, in whose shelter is he and where is his place? Tell me all this." },
        },
        {
          text: "भगवान के ऐसे वचन सुनकर इंद्र बोले- भगवन! प्राचीन समय में एक नाडीजंघ नामक राक्षस था उसके महापराक्रमी और लोकविख्यात मुर नाम का एक पुत्र हुआ। उसकी चंद्रावती नाम की नगरी है। उसी ने सब देवताओं को स्वर्ग से निकालकर वहाँ अपना अधिकार जमा लिया है।",
          meaning: { en: "Hearing the Lord, Indra said: O Lord, in ancient times there was a demon named Nadijangha, and a very mighty and world-famous son named Mura was born to him. His city is Chandravati. He has driven all the gods out of heaven and taken possession of it there." },
        },
        {
          text: "उसने इंद्र, अग्नि, वरुण, यम, वायु, ईश, चंद्रमा, नैऋत आदि सबके स्थान पर अधिकार कर लिया है। सूर्य बनकर स्वयं ही प्रकाश करता है। स्वयं ही मेघ बन बैठा है और सबसे अजेय है। हे असुर निकंदन! उस दुष्ट को मारकर देवताओं को अजेय बनाइए।",
          meaning: { en: "He has taken the places of Indra, Agni, Varuna, Yama, Vayu, Ishana, the Moon, Nirrti and all, and shines himself as the sun. He himself has become the cloud and is invincible. O destroyer of demons, kill that wicked one and make the gods unconquerable." },
        },
        {
          text: "यह वचन सुनकर भगवान ने कहा- हे देवताओं, मैं शीघ्र ही उसका संहार करूंगा। तुम चंद्रावती नगरी जाओ। इस प्रकार कहकर भगवान सहित सभी देवताओं ने चंद्रावती नगरी की ओर प्रस्थान किया। उस समय जब दैत्य मुर सेना सहित युद्ध भूमि में गरज रहा था।",
          meaning: { en: "Hearing this the Lord said: O gods, I shall soon destroy him; go to the city of Chandravati. Saying this the Lord and all the gods set out for Chandravati. At that time the demon Mura was roaring on the battlefield with his army." },
        },
        {
          text: "उसकी भयानक गर्जना सुनकर सभी देवता भय के मारे चारों दिशाओं में भागने लगे। जब स्वयं भगवान रणभूमि में आए तो दैत्य उन पर भी अस्त्र, शस्त्र, आयुध लेकर दौडे। भगवान ने उन्हें सर्प के समान अपने बाणों से बींध डाला। बहुत-से दैत्य मारे गए, केवल मुर बचा रहा। वह अविचल भाव से भगवान के साथ युद्ध करता रहा। भगवान जो-जो भी तीक्ष्ण बाण चलाते वह उसके लिए पुष्प सिद्ध होता।",
          meaning: { en: "Hearing his terrible roar all the gods fled in fear in all directions. When the Lord himself came to the field the demons rushed at him with missiles, weapons and arms. He pierced them with his arrows like serpents. Many demons were killed and only Mura remained. He went on fighting the Lord unmoved; whatever sharp arrow the Lord shot, it turned to a flower for him." },
        },
        {
          text: "उसका शरीर छिन्न-भिन्न हो गया किंतु वह लगातार युद्ध करता रहा। दोनों के बीच मल्लयुद्ध भी हुआ। दस हजार वर्ष तक उनका युद्ध चलता रहा किंतु मुर नहीं हारा। थककर भगवान बद्रिकाश्रम चले गए। वहां हेमवती नामक सुंदर गुफा थी, उसमें विश्राम करने के लिए भगवान उसके अंदर प्रवेश कर गए। यह गुफा बारह योजन लंबी थी और उसका एक ही द्वार था।",
          meaning: { en: "His body was torn to pieces, yet he fought on without stopping. There was wrestling between the two. The fight went on for ten thousand years, but Mura was not defeated. Tired, the Lord went to Badrikashrama. There was a beautiful cave named Hemavati, and the Lord entered it to rest. The cave was twelve yojanas long and had only one door." },
        },
        {
          text: "विष्णु भगवान वहां योगनिद्रा की गोद में सो गए। मुर भी पीछे-पीछे आ गया और भगवान को सोया देखकर मारने को उद्यत हुआ तभी भगवान के शरीर से उज्ज्वल, कांतिमय रूप वाली देवी प्रकट हुई। देवी ने राक्षस मुर को ललकारा, युद्ध किया और उसे तत्काल मौत के घाट उतार दिया। श्री हरि जब योगनिद्रा की गोद से उठे, तो सब बातों को जानकर उस देवी से कहा कि आपका जन्म एकादशी के दिन हुआ है, अतः आप उत्पन्ना एकादशी के नाम से पूजित होंगी। आपके भक्त वही होंगे, जो मेरे भक्त हैं।",
          meaning: { en: "Lord Vishnu fell asleep there in the lap of yoga-sleep. Mura too came after him and, seeing the Lord asleep, was about to kill him, when from the Lord's body a radiant, shining goddess appeared. The goddess challenged the demon Mura, fought and killed him at once. When Lord Hari rose from yoga-sleep and learned all, he said to the goddess: you were born on Ekadashi, so you will be worshipped as Utpanna Ekadashi. Your devotees will be those who are my devotees." },
        },
      ],
    },
    {
      title: "मोक्षदा एकादशी (मार्गशीर्ष शुक्ल)",
      titleEn: "Mokshada Ekadashi (Margashirsha shukla)",
      note: "Margashirsha shukla. Also Gita Jayanti. Krishna to Yudhishthira.",
      verses: [
        {
          text: "धर्मराज युधिष्ठिर कहने लगे कि हे भगवान! मैंने मार्गशीर्ष कृष्ण एकादशी अर्थात उत्पन्ना एकादशी का सविस्तार वर्णन सुना। अब आप कृपा करके मुझे मार्गशीर्ष माह के शुक्ल पक्ष की एकादशी के विषय में भी बतलाइये।",
          meaning: { en: "Dharmaraja Yudhishthira said: O Lord, I have heard in detail the Ekadashi of Margashirsha krishna, Utpanna. Now please tell me also of the Ekadashi of the bright half of Margashirsha." },
        },
        {
          text: "इस एकादशी का क्या नाम है तथा इसके व्रत का क्या विधान है? इसकी विधि क्या है? इसका व्रत करने से किस फल की प्राप्ति होती है? कृपया यह सब विधानपूर्वक कहिए।",
          meaning: { en: "What is the name of this Ekadashi and what is the rite of its vrata? What is the rite and what fruit does keeping it give? Please tell me all this by the rule." },
        },
        {
          text: "भगवान श्रीकृष्ण बोले: मार्गशीर्ष माह के शुक्ल पक्ष में आने वाली इस एकादशी को मोक्षदा एकादशी कहा जाता है। यह व्रत मोक्ष देने वाला तथा चिंतामणि के समान सब कामनाएँ पूर्ण करने वाला है। जिससे आप अपने पूर्वजो के दुखों को खत्म कर सकते हैं। इसका माहात्म्य मैं तुमसे कहता हूँ, ध्यानपूर्वक सुनो।",
          meaning: { en: "Lord Krishna said: the Ekadashi that comes in the bright half of Margashirsha is called Mokshada. This vrata gives liberation and, like a wish-granting jewel, fulfils all desires, so that you can end the sufferings of your forefathers. I tell you its greatness; listen carefully." },
        },
        {
          text: "गोकुल नाम के नगर में वैखानस नामक राजा राज्य करता था। उसके राज्य में चारों वेदों के ज्ञाता ब्राह्मण रहते थे। वह राजा अपनी प्रजा का पुत्रवत पालन करता था। एक बार रात्रि में राजा ने एक स्वप्न देखा कि उसके पिता नरक में हैं। उसे बडा आश्चर्य हुआ।",
          meaning: { en: "In a city named Gokula a king named Vaikhanasa ruled. In his kingdom lived brahmins who knew the four Vedas, and the king cared for his subjects as for sons. Once at night the king had a dream that his father was in hell. He was greatly astonished." },
        },
        {
          text: "प्रातः वह विद्वान ब्राह्मणों के पास गया और अपना स्वप्न सुनाया। कहा- मैंने अपने पिता को नरक में कष्ट उठाते देखा है। उन्होंने मुझसे कहा कि हे पुत्र मैं नरक में पडा हूँ। यहाँ से तुम मुझे मुक्त कराओ।",
          meaning: { en: "In the morning he went to learned brahmins and told them his dream. He said: I saw my father suffering in hell. He said to me: my son, I am fallen in hell; free me from here." },
        },
        {
          text: "जबसे मैंने ये वचन सुने हैं तबसे मैं बहुत बेचैन हूँ। चित्त में बडी अशांति हो रही है। मुझे इस राज्य, धन, पुत्र, स्त्री, हाथी, घोडे आदि में कुछ भी सुख प्रतीत नहीं होता। क्या करूँ?",
          meaning: { en: "Ever since I heard these words I have been very restless. My mind is greatly disturbed. I find no happiness in this kingdom, wealth, sons, wife, elephants, horses and the rest. What shall I do?" },
        },
        {
          text: "राजा ने कहा- हे ब्राह्मण देवताओं! इस दुःख के कारण मेरा सारा शरीर जल रहा है। अब आप कृपा करके कोई तप, दान, व्रत आदि ऐसा उपाय बताइए जिससे मेरे पिता को मुक्ति मिल जाए। उस पुत्र का जीवन व्यर्थ है जो अपने माता-पिता का उद्धार न कर सके।",
          meaning: { en: "The king said: O brahmins, because of this sorrow my whole body burns. Please tell me some austerity, gift, vrata or other means by which my father may be freed. The life of a son who cannot free his parents is useless." },
        },
        {
          text: "एक उत्तम पुत्र जो अपने माता-पिता तथा पूर्वजों का उद्धार करता है, वह हजार मूर्ख पुत्रों से अच्छा है। जैसे एक चंद्रमा सारे जगत में प्रकाश कर देता है, परंतु हजारों तारे नहीं कर सकते। ब्राह्मणों ने कहा- हे राजन! यहाँ पास ही भूत, भविष्य, वर्तमान के ज्ञाता पर्वत ऋषि का आश्रम है। आपकी समस्या का हल वे जरूर करेंगे।",
          meaning: { en: "A good son who frees his parents and forefathers is better than a thousand foolish sons, as one moon lights up the whole world but thousands of stars cannot. The brahmins said: O king, close by is the hermitage of the sage Parvata, who knows past, present and future. He will certainly solve your problem." },
        },
        {
          text: "ऐसा सुनकर राजा मुनि के आश्रम पर गया। उस आश्रम में अनेक शांत चित्त योगी और मुनि तपस्या कर रहे थे। उसी जगह पर्वत मुनि बैठे थे।",
          meaning: { en: "Hearing this the king went to the sage's hermitage. In that hermitage many calm-minded yogis and sages were practising austerity, and the sage Parvata sat there. The king prostrated to the sage." },
        },
        {
          text: "राजा ने मुनि को साष्टांग दंडवत किया। मुनि ने राजा से सांगोपांग कुशल पूछी। राजा ने कहा कि महाराज आपकी कृपा से मेरे राज्य में सब कुशल हैं, लेकिन अकस्मात मेरे चित्त में अत्यंत अशांति होने लगी है। ऐसा सुनकर पर्वत मुनि ने आँखें बंद की और भूत विचारने लगे। फिर बोले हे राजन!",
          meaning: { en: "The sage asked after the king's welfare in full. The king said: by your grace all is well in my kingdom, but suddenly great unrest has come into my mind. Hearing this the sage Parvata closed his eyes and began to consider the past. Then he said: O king," },
        },
        {
          text: "मैंने योग के बल से तुम्हारे पिता के कुकर्मों को जान लिया है। उन्होंने पूर्व जन्म में कामातुर होकर एक पत्नी को रति दी किंतु सौत के कहने पर दूसरे पत्नी को ऋतुदान माँगने पर भी नहीं दिया। उसी पापकर्म के कारण तुम्हारे पिता को नर्क में जाना पडा।",
          meaning: { en: "by the power of yoga I have learned your father's evil deeds. In a former birth, overcome by desire, he gave marital union to one wife, but at the advice of her rival refused another wife who asked for it at her time. For that sin your father had to go to hell." },
        },
        {
          text: "तब राजा ने कहा इसका कोई उपाय बताइए। मुनि बोले: हे राजन! आप मार्गशीर्ष एकादशी का उपवास करें और उस उपवास के पुण्य को अपने पिता को संकल्प कर दें। इसके प्रभाव से आपके पिता की अवश्य नर्क से मुक्ति होगी।",
          meaning: { en: "Then the king said: tell me a remedy. The sage said: O king, keep the Margashirsha Ekadashi fast and dedicate the merit of that fast to your father with a resolve. By its power your father will certainly be freed from hell." },
        },
        {
          text: "मुनि के ये वचन सुनकर राजा महल में आया और मुनि के कहने अनुसार कुटुम्ब सहित मोक्षदा एकादशी का व्रत किया। इसके उपवास का पुण्य उसने पिता को अर्पण कर दिया। इसके प्रभाव से उसके पिता को मुक्ति मिल गई और स्वर्ग में जाते हुए वे पुत्र से कहने लगे- हे पुत्र तेरा कल्याण हो। यह कहकर स्वर्ग चले गए।",
          meaning: { en: "Hearing the sage's words the king returned to the palace and kept the Mokshada Ekadashi with his family as the sage had said. He gave the merit of the fast to his father. By its power his father was freed and, going to heaven, said to his son: my son, may it be well with you. Saying this he went to heaven." },
        },
        {
          text: "मार्गशीर्ष मास की शुक्ल पक्ष की मोक्षदा एकादशी का जो व्रत करते हैं, उनके समस्त पाप नष्ट हो जाते हैं। इस व्रत से बढकर मोक्ष देने वाला और कोई व्रत नहीं है। इस दिन गीता जयंती मनाई जाती हैं साथ ही यह धनुर्मास की एकादशी कहलाती हैं, अतः इस एकादशी का महत्व कई गुना और भी बढ जाता हैं। इस दिन से गीता-पाठ का अनुष्ठान प्रारंभ करें तथा प्रतिदिन थोडी देर गीता अवश्य पढें।",
          meaning: { en: "Those who keep the Mokshada Ekadashi of Margashirsha shukla have all sins destroyed. There is no vrata better than this for giving liberation. On this day Gita Jayanti is observed and it is also the Ekadashi of the Dhanurmasa, so its importance grows manifold. From this day begin the observance of reading the Gita and read the Gita for a while every day." },
        },
      ],
    },
    {
      title: "सफला एकादशी (पौष कृष्ण)",
      titleEn: "Saphala Ekadashi (Pausha krishna)",
      note: "Pausha krishna. Krishna to Yudhishthira.",
      verses: [
        {
          text: "धर्मराज युधिष्ठिर कहने लगे कि हे जनार्दन! मैंने मार्गशीर्ष शुक्ल एकादशी अर्थात मोक्षदा एकादशी का सविस्तार वर्णन सुना। अब आप कृपा करके मुझे पौष माह के कृष्ण पक्ष की एकादशी के विषय में भी बतलाइये।",
          meaning: { en: "Dharmaraja Yudhishthira said: O Janardana, I have heard in detail the Ekadashi of Margashirsha shukla, Mokshada. Now please tell me also of the Ekadashi of the dark half of Pausha." },
        },
        {
          text: "इस एकादशी का क्या नाम है तथा इसके व्रत का क्या विधान है? इसकी विधि क्या है? इसका व्रत करने से किस फल की प्राप्ति होती है? कृपया यह सब विधानपूर्वक कहिए।",
          meaning: { en: "What is the name of this Ekadashi and what is the rite of its vrata? What is the rite and what fruit does keeping it give? Please tell me all this by the rule." },
        },
        {
          text: "भगवान श्रीकृष्ण बोले: पौष माह के कृष्ण पक्ष में आने वाली इस एकादशी को सफला एकादशी कहा जाता है। इस एकादशी के देवता श्रीनारायण हैं। विधिपूर्वक इस व्रत को करना चाहिए। जिस प्रकार नागों में शेषनाग, पक्षियों में गरुड, सब ग्रहों में चंद्रमा, यज्ञों में अश्वमेध और देवताओं में भगवान विष्णु श्रेष्ठ हैं, उसी तरह सब व्रतों में एकादशी का व्रत श्रेष्ठ है।",
          meaning: { en: "Lord Krishna said: the Ekadashi of the dark half of Pausha is called Saphala. Its deity is Shri Narayana. One should keep this vrata by the rule. As Shesha among serpents, Garuda among birds, the Moon among planets, the Ashvamedha among sacrifices and Vishnu among the gods are the best, so among all vratas the Ekadashi vrata is the best." },
        },
        {
          text: "जो मनुष्य सदैव एकादशी का व्रत करते हैं, वे मुझे परम प्रिय हैं। इसका माहात्म्य मैं तुमसे कहता हूँ, ध्यानपूर्वक सुनो। भक्तवत्सल भगवान श्रीकृष्ण कहने लगे कि धर्मराज, मैं तुम्हारे स्नेह के कारण तुमसे कहता हूँ कि एकादशी व्रत के अतिरिक्त मैं अधिक से अधिक दक्षिणा पाने वाले यज्ञ से भी प्रसन्न नहीं होता हूँ। अतः इसे अत्यंत भक्ति और श्रद्धा से युक्त होकर करें। हे राजन! द्वादशीयुक्त पौष कृष्ण एकादशी का माहात्म्य तुम एकाग्रचित्त होकर सुनो।",
          meaning: { en: "Those who always keep Ekadashi are very dear to me. I tell you its greatness; listen carefully. The Lord, so kind to his devotees, said: Dharmaraja, out of affection for you I tell you that apart from the Ekadashi vrata I am not pleased even by a sacrifice with the largest gifts; so keep it with great devotion and faith. O king, listen with a collected mind to the greatness of the Pausha krishna Ekadashi joined with Dvadashi." },
        },
        {
          text: "चम्पावती नगरी में एक महिष्मान नाम का राजा राज्य करता था। उसके चार पुत्र थे। उन सबमें लुम्पक नाम वाला बडा राजपुत्र महापापी था। वह पापी सदा परस्त्री और वेश्यागमन तथा दूसरे बुरे कामों में अपने पिता का धन नष्ट किया करता था।",
          meaning: { en: "In the city of Champavati a king named Mahishman ruled. He had four sons, of whom the eldest, named Lumpaka, was a great sinner. That sinner always wasted his father's wealth on other men's wives, on courtesans and on other evil things." },
        },
        {
          text: "सदैव ही देवता, बाह्मण, वैष्णवों की निंदा किया करता था। जब राजा को अपने बडे पुत्र के ऐसे कुकर्मों का पता चला तो उन्होंने उसे अपने राज्य से निकाल दिया। तब वह विचारने लगा कि कहाँ जाऊँ? क्या करूँ?",
          meaning: { en: "He always slandered the gods, brahmins and Vaishnavas. When the king learned of his eldest son's evil deeds he drove him out of his kingdom. Then he wondered: where shall I go, what shall I do?" },
        },
        {
          text: "अंत में उसने चोरी करने का निश्चय किया। दिन में वह वन में रहता और रात्रि को अपने पिता की नगरी में चोरी करता तथा प्रजा को तंग करने और उन्हें मारने का कुकर्म करता। कुछ समय पश्चात सारी नगरी भयभीत हो गई। वह वन में रहकर पशु आदि को मारकर खाने लगा। नागरिक और राज्य के कर्मचारी उसे पकड लेते किंतु राजा के भय से छोड देते।",
          meaning: { en: "At last he resolved to steal. By day he lived in the forest and at night he stole in his father's city, troubling and even killing the people. After some time the whole city was afraid. Living in the forest he killed and ate animals. The citizens and royal officers would catch him but let him go out of fear of the king." },
        },
        {
          text: "वन में एक अतिप्राचीन विशाल पीपल का वृक्ष था। लोग उसकी भगवान के समान पूजा करते थे। उसी वृक्ष के नीचे वह महापापी लुम्पक रहा करता था।",
          meaning: { en: "In the forest stood a very old and huge peepal tree, which people worshipped like a god. Under that very tree the great sinner Lumpaka used to live." },
        },
        {
          text: "इस वन को लोग देवताओं की क्रीडास्थली मानते थे। कुछ समय पश्चात पौष कृष्ण पक्ष की दशमी के दिन वह वस्त्रहीन होने के कारण शीत के चलते सारी रात्रि सो नहीं सका। उसके हाथ-पैर अकड गए।",
          meaning: { en: "People thought this forest a playground of the gods. After some time, on the dashami of Pausha krishna, having no clothes he could not sleep all night for the cold. His hands and feet grew stiff." },
        },
        {
          text: "सूर्योदय होते-होते वह मूर्छित हो गया। दूसरे दिन एकादशी को मध्याह्न के समय सूर्य की गर्मी पाकर उसकी मूर्छा दूर हुई। गिरता-पडता वह भोजन की तलाश में निकला। पशुओं को मारने में वह समर्थ नहीं था अतः पेडों के नीचे गिर हुए फल उठाकर वापस उसी पीपल वृक्ष के नीचे आ गया। उस समय तक भगवान सूर्य अस्त हो चुके थे।",
          meaning: { en: "By sunrise he had fainted. The next day, Ekadashi, at midday the sun's warmth revived him. Stumbling, he went out to look for food. Unable to kill animals, he picked up fruits fallen under the trees and came back to the same peepal. By that time the sun had set." },
        },
        {
          text: "वृक्ष के नीचे फल रखकर कहने लगा- हे भगवन! अब आपके ही अर्पण है ये फल। आप ही तृप्त हो जाइए।",
          meaning: { en: "Placing the fruits under the tree he said: O Lord, these fruits are offered to you alone; may you yourself be satisfied." },
        },
        {
          text: "उस रात्रि को दुःख के कारण रात्रि को भी नींद नहीं आई। उसके इस उपवास और जागरण से भगवान अत्यंत प्रसन्न हो गए और उसके सारे पाप नष्ट हो गए। दूसरे दिन प्रातः एक अतिसुंदर घोडा अनेक सुंदर वस्तुअओं से सजा हुआ उसके सामने आकर खडा हो गया।",
          meaning: { en: "That night too he could not sleep because of his sorrow. By this fast and vigil the Lord was greatly pleased and all his sins were destroyed. The next morning a very beautiful horse, decked with fine things, came and stood before him." },
        },
        {
          text: "उसी समय आकाशवाणी हुई कि हे राजपुत्र! श्रीनारायण की कृपा से तेरे पाप नष्ट हो गए हैं। अब तू अपने पिता के पास जाकर राज्य प्राप्त कर। ऐसी वाणी सुनकर वह अत्यंत प्रसन्न हुआ और दिव्य वस्त्र धारण करके भगवान आपकी जय हो!",
          meaning: { en: "At that moment a voice from the sky said: O prince, by the grace of Shri Narayana your sins are destroyed; go now to your father and receive the kingdom. Hearing the voice he was very glad, put on divine clothes and said: Glory to you, O Lord!" },
        },
        {
          text: "कहकर अपने पिता के पास गया। उसके पिता ने प्रसन्न होकर उसे समस्त राज्य का भार सौंप दिया और स्वयं वन के रास्ते चल दिए। अब लुम्पक शास्त्रानुसार राज्य करने लगा। उसके स्त्री, पुत्र आदि सारा कुटुम्ब भगवान नारायण का परम भक्त हो गया। वृद्ध होने पर वह भी अपने पुत्र को राज्य का भार सौंपकर वन में तपस्या करने चला गया और अंत समय में वैकुंठ को प्राप्त हुआ।",
          meaning: { en: "Saying this he went to his father. His father was pleased and handed him the whole burden of the kingdom and himself took the road to the forest. Now Lumpaka ruled by the scriptures. His wife, sons and whole family became great devotees of Lord Narayana. When old he too handed the kingdom to his son and went to the forest for austerity, and at the end gained Vaikuntha." },
        },
        {
          text: "अतः जो मनुष्य इस परम पवित्र सफला एकादशी का व्रत करता है उसे अंत में मुक्ति मिलती है। जो नहीं करते वे पूँछ और सींगों से रहित पशुओं के समान हैं। इस सफला एकादशी के माहात्म्य को पढने से अथवा श्रवण करने से मनुष्य को अश्वमेध यज्ञ का फल मिलता है।",
          meaning: { en: "So one who keeps this most holy Saphala Ekadashi gains liberation at the end. Those who do not are like beasts without tails and horns. By reading or hearing the greatness of this Saphala Ekadashi a person gains the fruit of the Ashvamedha sacrifice." },
        },
      ],
    },
    {
      title: "पौष पुत्रदा एकादशी (पौष शुक्ल)",
      titleEn: "Pausha Putrada Ekadashi (Pausha shukla)",
      note: "Pausha shukla. Krishna to Yudhishthira.",
      verses: [
        {
          text: "धर्मराज युधिष्ठिर कहने लगे कि हे भगवान! आपने पौष कृष्ण एकादशी अर्थात सफला एकादशी का माहात्म्य बताकर बडी कृपा की। अब आप कृपा करके मुझे पौष माह के शुक्ल पक्ष की एकादशी के विषय में भी बतलाइये। इस एकादशी का क्या नाम है तथा इसके व्रत का क्या विधान है?",
          meaning: { en: "Dharmaraja Yudhishthira said: O Lord, you have done great kindness by telling me the greatness of Saphala, the Ekadashi of Pausha krishna. Now please tell me also of the Ekadashi of the bright half of Pausha. What is the name of this Ekadashi and what is the rite of its vrata?" },
        },
        {
          text: "इसकी विधि क्या है? इसका व्रत करने से किस फल की प्राप्ति होती है? और उसमें कौन-से देवता का पूजन किया जाता है? कृपया यह सब विधानपूर्वक कहिए।",
          meaning: { en: "What is its rite? What fruit does keeping it give? And which god is worshipped in it? Please tell me all this by the rule." },
        },
        {
          text: "भगवान श्रीकृष्ण बोले: पौष माह के शुक्ल पक्ष में आने वाली इस एकादशी को पौष पुत्रदा एकादशी कहा जाता है। इसमें भी नारायण भगवान की पूजा की जाती है। विधिपूर्वक इस व्रत को करना चाहिए।",
          meaning: { en: "Lord Krishna said: the Ekadashi that comes in the bright half of Pausha is called Pausha Putrada. In it too Lord Narayana is worshipped. One should keep this vrata by the rule." },
        },
        {
          text: "इस चर और अचर संसार में पुत्रदा एकादशी के व्रत के समान दूसरा कोई व्रत नहीं है। इसके पुण्य से मनुष्य तपस्वी, विद्वान और लक्ष्मीवान होता है। इसकी मैं एक कथा कहता हूँ सो तुम ध्यानपूर्वक सुनो।",
          meaning: { en: "In this world of moving and unmoving beings there is no vrata equal to Putrada Ekadashi. By its merit a person becomes an ascetic, learned and wealthy. I tell you a katha about it; listen carefully." },
        },
        {
          text: "भद्रावती नामक नगरी में सुकेतुमान नाम का एक राजा राज्य करता था। उसके कोई पुत्र नहीं था। उसकी स्त्री का नाम शैव्या था। वह निपुत्री होने के कारण सदैव चिंतित रहा करती थी।",
          meaning: { en: "In a city named Bhadravati a king named Suketuman ruled. He had no son. His wife was named Shaivya, and being childless she was always worried." },
        },
        {
          text: "राजा के पितर भी रो-रोकर पिंड लिया करते थे और सोचा करते थे कि इसके बाद हमको कौन पिंड देगा। राजा को भाई, बाँधव, धन, हाथी, घोडे, राज्य और मंत्री इन सबमें से किसी से भी संतोष नहीं होता था। वह सदैव यही विचार करता था कि मेरे मरने के बाद मुझको कौन पिंडदान करेगा। बिना पुत्र के पितरों और देवताओं का ऋण मैं कैसे चुका सकूँगा। जिस घर में पुत्र न हो उस घर में सदैव अँधेरा ही रहता है। इसलिए पुत्र उत्पत्ति के लिए प्रयत्न करना चाहिए।",
          meaning: { en: "The king's ancestors too used to take his offering of pinda weeping and wondering who would offer them pinda after him. The king found no contentment in brothers, kinsmen, wealth, elephants, horses, kingdom or ministers. He always thought: who will offer pinda for me after I die? Without a son how shall I repay my debt to the ancestors and gods? A house with no son is always dark, so effort should be made to have a son." },
        },
        {
          text: "जिस मनुष्य ने पुत्र का मुख देखा है, वह धन्य है। उसको इस लोक में यश और परलोक में शांति मिलती है अर्थात उनके दोनों लोक सुधर जाते हैं। पूर्व जन्म के कर्म से ही इस जन्म में पुत्र, धन आदि प्राप्त होते हैं। राजा इसी प्रकार रात-दिन चिंता में लगा रहता था।",
          meaning: { en: "Blessed is the person who has seen a son's face; he gains fame in this world and peace in the next, so both his worlds are set right. A son, wealth and the like come in this life from the deeds of a former life. So the king stayed absorbed in worry day and night." },
        },
        {
          text: "एक समय तो राजा ने अपने शरीर को त्याग देने का निश्चय किया परंतु आत्मघात को महान पाप समझकर उसने ऐसा नहीं किया। एक दिन राजा ऐसा ही विचार करता हुआ अपने घोडे पर चढकर वन को चल दिया तथा पक्षियों और वृक्षों को देखने लगा। उसने देखा कि वन में मृग, व्याघ्र, सूअर, सिंह, बंदर, सर्प आदि सब भ्रमण कर रहे हैं। हाथी अपने बच्चों और हथिनियों के बीच घूम रहा है।",
          meaning: { en: "Once the king decided to give up his body, but thinking suicide a great sin he did not do so. One day, thinking thus, he mounted his horse and went to the forest and looked at the birds and trees. He saw deer, tigers, boars, lions, monkeys, snakes and others moving about in the forest. An elephant was walking among his young and she-elephants." },
        },
        {
          text: "इस वन में कहीं तो गीदड अपने कर्कश स्वर में बोल रहे हैं, कहीं उल्लू ध्वनि कर रहे हैं। वन के दृश्यों को देखकर राजा सोच-विचार में लग गया। इसी प्रकार आधा दिन बीत गया। वह सोचने लगा कि मैंने कई यज्ञ किए, ब्राह्मणों को स्वादिष्ट भोजन से तृप्त किया फिर भी मुझको दुःख प्राप्त हुआ, क्यों?",
          meaning: { en: "In this forest jackals howled harshly in places and owls hooted. Seeing the forest scenes the king was lost in thought and half the day passed. He wondered: I have performed many sacrifices and fed brahmins on delicious food, yet I have got sorrow; why?" },
        },
        {
          text: "राजा प्यास के मारे अत्यंत दुःखी हो गया और पानी की तलाश में इधर-उधर फिरने लगा। थोडी दूरी पर राजा ने एक सरोवर देखा। उस सरोवर में कमल खिले थे तथा सारस, हंस, मगरमच्छ आदि विहार कर रहे थे। उस सरोवर के चारों तरफ मुनियों के आश्रम बने हुए थे।",
          meaning: { en: "The king grew very troubled with thirst and wandered here and there looking for water. A little way off the king saw a lake. Lotuses bloomed in it and cranes, swans, crocodiles and others moved about. Around the lake were the hermitages of sages." },
        },
        {
          text: "उसी समय राजा के दाहिने अंग फडकने लगे। राजा शुभ शकुन समझकर घोडे से उतरकर मुनियों को दंडवत प्रणाम करके बैठ गया। राजा को देखकर मुनियों ने कहा - हे राजन! हम तुमसे अत्यंत प्रसन्न हैं। तुम्हारी क्या इच्छा है, सो कहो।",
          meaning: { en: "At that moment the king's right limbs began to throb. Taking it for a good omen the king got down from the horse, bowed fully to the sages and sat. Seeing the king the sages said: O king, we are very pleased with you. Say what you wish." },
        },
        {
          text: "राजा ने पूछा - महाराज आप कौन हैं, और किसलिए यहाँ आए हैं। कृपा करके बताइए। मुनि कहने लगे कि हे राजन! आज संतान देने वाली पुत्रदा एकादशी है, हम लोग विश्वदेव हैं और इस सरोवर में स्नान करने के लिए आए हैं। यह सुनकर राजा कहने लगा कि महाराज मेरे भी कोई संतान नहीं है, यदि आप मुझ पर प्रसन्न हैं तो एक पुत्र का वरदान दीजिए।",
          meaning: { en: "The king asked: sirs, who are you and why have you come here? Please tell me. The sages said: O king, today is Putrada Ekadashi, which gives children. We are the Vishvedevas and have come to bathe in this lake. Hearing this the king said: sirs, I too have no child; if you are pleased with me, grant me the boon of a son." },
        },
        {
          text: "मुनि बोले - हे राजन! आज पुत्रदा एकादशी है। आप अवश्य ही इसका व्रत करें, भगवान की कृपा से अवश्य ही आपके घर में पुत्र होगा।",
          meaning: { en: "The sages said: O king, today is Putrada Ekadashi. You must certainly keep it; by the Lord's grace you will surely have a son in your house." },
        },
        {
          text: "मुनि के वचनों को सुनकर राजा ने उसी दिन एकादशी का व्रत किया और द्वादशी को उसका पारण किया। इसके पश्चात मुनियों को प्रणाम करके महल में वापस आ गया। कुछ समय बीतने के बाद रानी ने गर्भ धारण किया और नौ महीने के पश्चात उनके एक पुत्र हुआ। वह राजकुमार अत्यंत शूरवीर, यशस्वी और प्रजापालक हुआ।",
          meaning: { en: "Hearing the sages the king kept the Ekadashi vrata the same day and broke the fast on Dvadashi. Then, bowing to the sages, he returned to the palace. After some time the queen conceived, and after nine months a son was born to them. That prince became very brave, famous and a protector of his people." },
        },
        {
          text: "श्रीकृष्ण बोले: हे राजन! पुत्र की प्राप्ति के लिए पुत्रदा एकादशी का व्रत करना चाहिए। जो मनुष्य इस माहात्म्य को पढता या सुनता है उसे अंत में स्वर्ग की प्राप्ति होती है।",
          meaning: { en: "Krishna said: O king, one should keep Putrada Ekadashi for getting a son. One who reads or hears this greatness gains heaven in the end." },
        },
      ],
    },
    {
      title: "षटतिला एकादशी (माघ कृष्ण)",
      titleEn: "Shattila Ekadashi (Magha krishna)",
      note: "Magha krishna. Pulastya to Dalbhya, from Vishnu's words to Narada.",
      verses: [
        {
          text: "पौष पुत्रदा एकादशी के उपरांत, माघ माह के कृष्ण पक्ष में आने वाली इस एकादशी को षटतिला एकादशी कहा जाता है। पहला तिल-स्नान, दूसरा तिल का उबटन, तीसरा तिल का हवन, चौथा तिल का तर्पण, पाँचवाँ तिल का भोजन और छठा तिलों का दान, तिल के ये छह प्रयोग इस व्रत में अवश्य करें। इनके प्रयोग के कारण यह षटतिला एकादशी कहलाती है। इस व्रत के करने से अनेक प्रकार के पाप नष्ट हो जाते हैं।",
          meaning: { en: "After Pausha Putrada, the Ekadashi that comes in the dark half of Magha is called Shattila. One must use sesame in six ways in this vrata: (1) bathing with sesame, (2) sesame paste, (3) offering sesame in the fire, (4) offering sesame water to ancestors, (5) eating sesame and (6) giving sesame. Because of these uses it is called Shattila. By keeping this vrata many kinds of sins are destroyed." },
        },
        {
          text: "एक समय दालभ्य ऋषि ने पुलस्त्य ऋषि से पूछा कि हे महाराज, पृथ्वी लोक में मनुष्य ब्रह्महत्यादि महान पाप करते हैं, पराए धन की चोरी तथा दूसरे की उन्नति देखकर ईर्ष्या करते हैं। साथ ही अनेक प्रकार के व्यसनों में फँसे रहते हैं, फिर भी उनको नर्क प्राप्त नहीं होता, इसका क्या कारण है? वे न जाने कौन-सा दान-पुण्य करते हैं जिससे उनके पाप नष्ट हो जाते हैं।",
          meaning: { en: "Once the sage Dalbhya asked the sage Pulastya: O sage, in the world people commit great sins like killing a brahmin, steal others' wealth and are jealous of others' progress, and they are caught in many vices; yet they do not go to hell. What is the reason? What charity and merit do they do that their sins are destroyed?" },
        },
        {
          text: "यह सब कृपापूर्वक आप कहिए। पुलस्त्य मुनि कहने लगे कि हे महाभाग! आपने मुझसे अत्यंत गंभीर प्रश्न पूछा है।",
          meaning: { en: "Please tell me all this kindly. The sage Pulastya said: O fortunate one, you have asked me a very deep question." },
        },
        {
          text: "उन्होंने कहा कि माघ मास लगते ही मनुष्य को स्नान आदि करके शुद्ध रहना चाहिए। इंद्रियों को वश में कर काम, क्रोध, लोभ, मोह, अहंकार, ईर्ष्या तथा द्वेष आदि का त्याग कर भगवान का स्मरण करना चाहिए। पुष्य नक्षत्र में गोबर, कपास, तिल मिलाकर उनके कंडे बनाना चाहिए। उन कंडों से एक सौ आठ बार हवन करना चाहिए।",
          meaning: { en: "He said: as soon as the month of Magha begins a person should bathe and keep pure. Controlling the senses, giving up lust, anger, greed, delusion, pride, envy and malice, he should remember the Lord. Under the Pushya star one should make cakes of cow dung mixed with cotton and sesame, and offer 108 oblations with those cakes." },
        },
        {
          text: "उस दिन मूल नक्षत्र हो और एकादशी तिथि हो तो अच्छे पुण्य देने वाले नियमों को ग्रहण करें। स्नानादि नित्य क्रिया से निवृत्त होकर सब देवताओं के देव श्री भगवान का पूजन करें और एकादशी व्रत धारण करें। रात्रि को जागरण करना चाहिए। उसके दूसरे दिन धूप-दीप, नैवेद्य आदि से भगवान का पूजन करके खिचडी का भोग लगाएँ। तत्पश्चात पेठा, नारियल, सीताफल या सुपारी का अर्घ्य देकर स्तुति करनी चाहिए।",
          meaning: { en: "If on that day there is the Mula star and the Ekadashi tithi, take up the rules that give great merit. Having finished one's daily bathing and duties, worship the Lord, god of all gods, and keep the Ekadashi vrata. Keep vigil at night. The next day worship the Lord with incense, lamp and offerings and offer khichdi. Then offer arghya with a pumpkin, coconut, sitaphal or betel nut and praise him:" },
        },
        {
          text: "हे भगवान! आप दीनों को शरण देने वाले हैं, इस संसार सागर में फँसे हुओं का उद्धार करने वाले हैं। हे पुंडरीकाक्ष! हे विश्वभावन! हे सुब्रह्मण्य! हे पूर्वज! हे जगत्पते! आप लक्ष्मीजी सहित इस तुच्छ अर्घ्य को ग्रहण करें।",
          meaning: { en: "O Lord, you give refuge to the lowly and raise those caught in the ocean of worldly life. O lotus-eyed one, O creator of the world, O Subrahmanya, O first-born, O lord of the world, accept this humble arghya together with Lakshmi." },
        },
        {
          text: "इसके पश्चात जल से भरा कुंभ (घडा) ब्राह्मण को दान करें तथा ब्राह्मण को श्यामा गौ और तिल पात्र देना भी उत्तम है। तिल स्नान और भोजन दोनों ही श्रेष्ठ हैं। इस प्रकार जो मनुष्य जितने तिलों का दान करता है, उतने ही हजार वर्ष स्वर्ग में वास करता है। इतना कहकर पुलस्त्य ऋषि कहने लगे कि अब मैं तुमसे इस एकादशी की कथा कहता हूँ।",
          meaning: { en: "After this give a pot full of water to a brahmin; giving a dark cow and a sesame vessel to the brahmin is also excellent. Bathing with sesame and eating it are both excellent. A person who gives as many sesame seeds as he can dwells in heaven for as many thousand years. Having said this Pulastya said: now I shall tell you the katha of this Ekadashi." },
        },
        {
          text: "एक समय नारदजी ने भगवान श्रीविष्णु से यही प्रश्न किया था और भगवान ने जो षटतिला एकादशी का माहात्म्य नारदजी से कहा: सो मैं तुमसे कहता हूँ। भगवान ने नारदजी से कहा कि हे नारद! मैं तुमसे सत्य घटना कहता हूँ। ध्यानपूर्वक सुनो।",
          meaning: { en: "Once Narada asked Lord Vishnu this same question, and I tell you the greatness of Shattila Ekadashi that the Lord told Narada. The Lord said to Narada: O Narada, I tell you a true event; listen carefully." },
        },
        {
          text: "प्राचीनकाल में मृत्युलोक में एक ब्राह्मणी रहती थी। वह सदैव व्रत किया करती थी। एक समय वह एक मास तक व्रत करती रही। इससे उसका शरीर अत्यंत दुर्बल हो गया।",
          meaning: { en: "In ancient times a brahmin woman lived in the mortal world. She was always keeping vratas. Once she kept a vrata for a whole month, and her body grew very weak." },
        },
        {
          text: "यद्यपि वह अत्यंत बुद्धिमान थी तथापि उसने कभी देवताओं या ब्राह्मणों के निमित्त अन्न या धन का दान नहीं किया था। इससे मैंने सोचा कि ब्राह्मणी ने व्रत आदि से अपना शरीर शुद्ध कर लिया है, अब इसे विष्णुलोक तो मिल ही जाएगा परंतु इसने कभी अन्न का दान नहीं किया, इससे इसकी तृप्ति होना कठिन है। भगवान ने आगे कहा: ऐसा सोचकर मैं भिखारी के वेश में मृत्युलोक में उस ब्राह्मणी के पास गया और उससे भिक्षा माँगी। वह ब्राह्मणी बोली: महाराज किसलिए आए हो? मैंने कहा: मुझे भिक्षा चाहिए।",
          meaning: { en: "Though she was very wise she had never given grain or wealth for the gods or brahmins. I thought: the brahmin woman has purified her body by vratas and will surely get Vishnu's world, but she has never given grain, so it will be hard for her to be satisfied. Thinking so, the Lord went on, I went to the brahmin woman in the mortal world as a beggar and asked for alms. The woman said: sir, why have you come? I said: I want alms." },
        },
        {
          text: "इस पर उसने एक मिट्टी का ढेला मेरे भिक्षापात्र में डाल दिया। मैं उसे लेकर स्वर्ग में लौट आया। कुछ समय बाद ब्राह्मणी भी शरीर त्याग कर स्वर्ग में आ गई। उस ब्राह्मणी को मिट्टी का दान करने से स्वर्ग में सुंदर महल मिला, परंतु उसने अपने घर को अन्नादि सब सामग्रियों से शून्य पाया।",
          meaning: { en: "At this she put a clod of earth into my begging bowl. I took it and returned to heaven. After some time the brahmin woman too left her body and came to heaven. Because she had given earth she got a fine palace in heaven, but she found her house empty of grain and all supplies." },
        },
        {
          text: "घबराकर वह मेरे पास आई और कहने लगी कि भगवन् मैंने अनेक व्रत आदि से आपकी पूजा की परंतु फिर भी मेरा घर अन्नादि सब वस्तुओं से शून्य है। इसका क्या कारण है? इस पर मैंने कहा: पहले तुम अपने घर जाओ।",
          meaning: { en: "Alarmed, she came to me and said: Lord, I worshipped you with many vratas, yet my house is empty of grain and everything. What is the reason? At this I said: first go to your house." },
        },
        {
          text: "देवस्त्रियाँ आएँगी तुम्हें देखने के लिए। पहले उनसे षटतिला एकादशी का पुण्य और विधि सुन लो, तब द्वार खोलना। मेरे ऐसे वचन सुनकर वह अपने घर गई। जब देवस्त्रियाँ आईं और द्वार खोलने को कहा तो ब्राह्मणी बोली: आप मुझे देखने आई हैं तो षटतिला एकादशी का माहात्म्य मुझसे कहो।",
          meaning: { en: "Divine women will come to see you. First hear from them the merit and rite of Shattila Ekadashi, then open the door. Hearing my words she went to her house. When the divine women came and asked her to open the door, the brahmin woman said: if you have come to see me, first tell me the greatness of Shattila Ekadashi." },
        },
        {
          text: "उनमें से एक देवस्त्री कहने लगी कि मैं कहती हूँ। जब ब्राह्मणी ने षटतिला एकादशी का माहात्म्य सुना तब द्वार खोल दिया। देवांगनाओं ने उसको देखा कि न तो वह गांधर्वी है और न आसुरी है वरन पहले जैसी मानुषी है। उस ब्राह्मणी ने उनके कथनानुसार षटतिला एकादशी का व्रत किया। इसके प्रभाव से वह सुंदर और रूपवती हो गई तथा उसका घर अन्नादि समस्त सामग्रियों से युक्त हो गया।",
          meaning: { en: "One of the divine women said: I will tell it. When the brahmin woman heard the greatness of Shattila Ekadashi she opened the door. The divine women saw that she was neither a gandharvi nor an asuri but a human as before. She kept the Shattila Ekadashi vrata as they said. By its power she became beautiful and her house was filled with grain and all supplies." },
        },
        {
          text: "अतः मनुष्यों को मूर्खता त्यागकर षटतिला एकादशी का व्रत और लोभ न करके तिलादि का दान करना चाहिए। इससे दुर्भाग्य, दरिद्रता तथा अनेक प्रकार के कष्ट दूर होकर मोक्ष की प्राप्ति होती है।",
          meaning: { en: "So people should give up folly and keep the Shattila Ekadashi vrata, and without greed give sesame and the like. By this misfortune, poverty and many troubles go away and liberation is gained." },
        },
      ],
    },
    {
      title: "जया एकादशी (माघ शुक्ल)",
      titleEn: "Jaya Ekadashi (Magha shukla)",
      note: "Magha shukla. Krishna to Yudhishthira, from the Padma Purana.",
      verses: [
        {
          text: "धर्मराज युधिष्ठिर बोले: हे भगवन्! आपने माघ के कृष्ण पक्ष की षटतिला एकादशी का अत्यन्त सुंदर वर्णन करते हुए सुनाया। आप स्वदेज, अंडज, उद्भिज और जरायुज चारों प्रकार के जीवों के उत्पन्न, पालन तथा नाश करने वाले हैं। अब आप कृपा करके माघ शुक्ल एकादशी के विषय में भी बतलाइये। इस एकादशी का क्या नाम है तथा इसके व्रत का क्या विधान है?",
          meaning: { en: "Dharmaraja Yudhishthira said: O Lord, you have told me so beautifully of Shattila, the Ekadashi of Magha krishna. You are the creator, protector and destroyer of all four kinds of beings, born of sweat, egg, sprout and womb. Now please tell me of the Ekadashi of Magha shukla." },
        },
        {
          text: "इसकी विधि क्या है? इसका व्रत करने से किस फल की प्राप्ति होती है? और इसमें कौन से देव का पूजन किया जाता है? कृपया यह सब विधानपूर्वक कहिए।",
          meaning: { en: "What is the name of this Ekadashi and what is the rite of its vrata? What is the rite? What fruit does keeping it give? And which god is worshipped in it? Please tell me all this by the rule." },
        },
        {
          text: "श्रीकृष्ण कहने लगे कि हे राजन्! माघ शुक्ल एकादशी के दिन आने वाली एकादशी को जया एकादशी के नाम से जाना जाता है। इसका व्रत करने से मनुष्य ब्रह्म हत्यादि पापों से छूट कर मोक्ष को प्राप्त होता है तथा इसके प्रभाव से भूत, पिशाच आदि योनियों से मुक्त हो जाता है। इस व्रत को विधिपूर्वक करना चाहिए। अब मैं तुमसे पद्मपुराण में वर्णित इसकी महिमा की एक कथा सुनाता हूँ।",
          meaning: { en: "Krishna said: O king, the Ekadashi that comes on Magha shukla is known as Jaya. By keeping it a person is freed from sins like killing a brahmin and attains liberation, and by its power is freed from births like ghost and pishacha. This vrata should be kept by the rule. Now I tell you a katha of its greatness told in the Padma Purana." },
        },
        {
          text: "देवराज इंद्र स्वर्ग में राज करते थे और अन्य सब देवगण सुखपूर्वक स्वर्ग में रहते थे। एक समय इंद्र अपनी इच्छानुसार नंदन वन में अप्सराओं के साथ विहार कर रहे थे और गंधर्व गान कर रहे थे। उन गंधर्वों में प्रसिद्ध पुष्पदंत तथा उसकी कन्या पुष्पवती और चित्रसेन तथा उसकी स्त्री मालिनी भी उपस्थित थे। साथ ही मालिनी का पुत्र पुष्पवान और उसका पुत्र माल्यवान भी उपस्थित थे।",
          meaning: { en: "Indra, king of the gods, ruled in heaven and all the other gods lived there in happiness. Once Indra was roaming in the Nandana garden with apsaras while gandharvas sang. Among those gandharvas were the famous Pushpadanta and his daughter Pushpavati, and Chitrasena with his wife Malini. Malini's son Pushpavan and his son Malyavan were also present." },
        },
        {
          text: "पुष्पवती गंधर्व कन्या माल्यवान को देखकर उस पर मोहित हो गई और माल्यवान पर काम-बाण चलाने लगी। उसने अपने रूप लावण्य और हावभाव से माल्यवान को वश में कर लिया। हे राजन्! वह पुष्पवती अत्यन्त सुंदर थी। अब वे इंद्र को प्रसन्न करने के लिए गान करने लगे परंतु परस्पर मोहित हो जाने के कारण उनका चित्त भ्रमित हो गया था।",
          meaning: { en: "The gandharva girl Pushpavati saw Malyavan and was infatuated with him and shot the arrows of love at him. By her beauty and graces she won Malyavan over. O king, Pushpavati was very beautiful. Now they began to sing to please Indra, but being mutually infatuated their minds were confused." },
        },
        {
          text: "इनके ठीक प्रकार न गाने तथा स्वर ताल ठीक नहीं होने से इंद्र इनके प्रेम को समझ गया और उन्होंने इसमें अपना अपमान समझ कर उनको शाप दे दिया। इंद्र ने कहा हे मूर्खों! तुमने मेरी आज्ञा का उल्लंघन किया है, इसलिए तुम्हारा धिक्कार है। अब तुम दोनों स्त्री-पुरुष के रूप में मृत्यु लोक में जाकर पिशाच रूप धारण करो और अपने कर्म का फल भोगो।",
          meaning: { en: "Because they did not sing properly and the tune and rhythm were wrong, Indra understood their love, felt insulted and cursed them. Indra said: you fools, you have disobeyed my command; shame on you. Now go to the mortal world as man and woman and take the form of pishachas and bear the fruit of your deed." },
        },
        {
          text: "इंद्र का ऐसा शाप सुनकर वे अत्यन्त दुःखी हुए और हिमालय पर्वत पर दुःखपूर्वक अपना जीवन व्यतीत करने लगे। उन्हें गंध, रस तथा स्पर्श आदि का कुछ भी ज्ञान नहीं था। वहाँ उनको महान दुःख मिल रहे थे। उन्हें एक क्षण के लिए भी निद्रा नहीं आती थी।",
          meaning: { en: "Hearing Indra's curse they were very sad and lived miserably on the Himalaya. They had no sense of smell, taste or touch. There they suffered great pain. They could not sleep even for a moment." },
        },
        {
          text: "उस जगह अत्यन्त शीत था, इससे उनके रोंगटे खडे रहते और मारे शीत के दाँत बजते रहते। एक दिन पिशाच ने अपनी स्त्री से कहा कि पिछले जन्म में हमने ऐसे कौन-से पाप किए थे, जिससे हमको यह दुःखदायी पिशाच योनि प्राप्त हुई। इस पिशाच योनि से तो नर्क के दुःख सहना ही उत्तम है। अतः हमें अब किसी प्रकार का पाप नहीं करना चाहिए। इस प्रकार विचार करते हुए वे अपने दिन व्यतीत कर रहे थे।",
          meaning: { en: "It was extremely cold there; their hair stood on end and their teeth chattered. One day the pishacha said to his wife: what sin did we do in the last birth that we got this painful pishacha birth? Even the pain of hell is better than this pishacha birth. So we must not commit any sin now. Thinking thus they passed their days." },
        },
        {
          text: "दैव्ययोग से तभी माघ मास में शुक्ल पक्ष की जया नामक एकादशी आई। उस दिन उन्होंने कुछ भी भोजन नहीं किया, एवं अच्छे-अच्छे कार्य किए। केवल फल-फूल खाकर ही दिन व्यतीत किया और सायंकाल के समय दुखी अवस्था में पीपल के वृक्ष के नीचे बैठ गए। उस समय सूर्य भगवान अस्त हो रहे थे।",
          meaning: { en: "By good fortune the Ekadashi named Jaya of the bright half of Magha came. That day they ate nothing and did good deeds. They lived on fruit and flowers only, and in the evening sat in sorrow under a peepal tree. At that time the sun was setting." },
        },
        {
          text: "उस रात को अत्यन्त ठंड थी, इस कारण वे दोनों शीत के मारे अति दुखित होकर मृतक के समान आपस में चिपटे हुए पडे रहे। उस रात्रि को उनको निद्रा भी नहीं आई।",
          meaning: { en: "That night it was very cold, so the two, very pained by the cold, lay clinging to each other like the dead. They could not sleep that night either." },
        },
        {
          text: "जया एकादशी के उपवास और रात्रि के जागरण से दूसरे दिन प्रभात होते ही उनकी पिशाच योनि से उन्हें छुटकारा मिला। अत्यन्त सुंदर गंधर्व और अप्सरा की देह धारण कर सुंदर वस्त्राभूषणों से अलंकृत होकर उन्होंने स्वर्गलोक को प्रस्थान किया। उस समय आकाश में देवता उनकी स्तुति करते हुए पुष्पवर्षा करने लगे। स्वर्गलोक में जाकर दोनों ने देवराज इंद्र को प्रणाम किया। देवराज इंद्र इनको पहले रूप में देखकर अत्यन्त आश्चर्यचकित हुए एवं पूछने लगे कि तुमने अपनी यह पिशाच योनि से किस प्रकार छुटकारा पाया, अतः हमें यह सब बतलाइए।",
          meaning: { en: "By the fast and night vigil of Jaya Ekadashi, at dawn the next day they were freed from the pishacha birth. Taking beautiful forms of gandharva and apsara, adorned in fine clothes and jewels, they set out for heaven. Gods praised them in the sky and rained flowers. In heaven both bowed to Indra, king of the gods. Seeing them in their former forms Indra was greatly astonished and asked how they had been freed from the pishacha birth, saying: tell us all this." },
        },
        {
          text: "माल्यवान बोले हे देवेन्द्र! भगवान विष्णु की कृपा और जया एकादशी के व्रत के प्रभाव से ही हमारी पिशाच देह छूटी है। तब इंद्र बोले कि हे माल्यवान! भगवान की कृपा और एकादशी का व्रत करने से न केवल तुम्हारी पिशाच योनि छूट गई, वरन् हम लोगों के भी वंदनीय हो गए क्योंकि विष्णु और शिव के भक्त हम लोगों के वंदनीय हैं, अतः आप धन्य है। अब आप पुष्पवती के साथ जाकर विहार करो।",
          meaning: { en: "Malyavan said: O king of the gods, by Lord Vishnu's grace and the power of the Jaya Ekadashi vrata our pishacha bodies were shed. Then Indra said: O Malyavan, by the Lord's grace and keeping Ekadashi, not only were you freed from the pishacha birth but you have become worthy of our worship, for devotees of Vishnu and Shiva are worshipful to us; you are blessed. Now go and enjoy yourself with Pushpavati." },
        },
        {
          text: "श्रीकृष्ण कहने लगे कि हे राजन् युधिष्ठिर! इस जया एकादशी के व्रत से, बुरी से बुरी योनि से भी मुक्ति मिल जाती है। जिस मनुष्य ने जया एकादशी का व्रत किया है, उसने मानो सब यज्ञ, जप, दान आदि कर लिए। जो मनुष्य जया एकादशी का व्रत करते हैं वे अवश्य ही हजार वर्ष तक स्वर्ग में वास करते हैं।",
          meaning: { en: "Krishna said: O king Yudhishthira, by keeping this Jaya Ekadashi one is freed even from the worst birth. One who has kept Jaya Ekadashi has, as it were, done all sacrifices, japa and charity. Those who keep Jaya Ekadashi dwell in heaven for a thousand years." },
        },
      ],
    },
    {
      title: "विजया एकादशी (फाल्गुन कृष्ण)",
      titleEn: "Vijaya Ekadashi (Phalguna krishna)",
      note: "Phalguna krishna. Brahma to Narada, told by Krishna to Yudhishthira.",
      verses: [
        {
          text: "धर्मराज युधिष्ठिर बोले: हे जनार्दन! आपने माघ के शुक्ल पक्ष की जया एकादशी का अत्यन्त सुंदर वर्णन करते हुए सुनाया। अब आप फाल्गुन मास के कृष्ण पक्ष की एकादशी का क्या नाम है? तथा उसकी विधि क्या है? कृपा करके आप मुझे बताइए।",
          meaning: { en: "Dharmaraja Yudhishthira said: O Janardana, you have told me so beautifully of Jaya, the Ekadashi of Magha shukla. Now what is the name of the Ekadashi of Phalguna krishna, and what is its rite? Please tell me." },
        },
        {
          text: "श्री भगवान बोले: हे राजन्, फाल्गुन मास के कृष्ण पक्ष की एकादशी का नाम विजया एकादशी है। इसके व्रत के प्रभाव से मनुष्य को विजय प्राप्त होती है। यह सब व्रतों से उत्तम व्रत है। इस विजया एकादशी के महात्म्य के श्रवण व पठन से समस्त पाप नाश को प्राप्त हो जाते हैं। भयंकर शत्रुओं से जब आप घिरे हों और पराजय सामने खडी हो उस विकट स्थिति में विजया नामक एकादशी आपको विजय दिलाने की क्षमता रखती है।",
          meaning: { en: "The Lord said: O king, the Ekadashi of Phalguna krishna is called Vijaya. By its power a person gains victory. It is the best of all vratas. By hearing or reading the greatness of this Vijaya Ekadashi all sins are destroyed. When you are surrounded by fierce enemies and defeat stands before you, in that dire situation the Ekadashi called Vijaya has the power to give you victory." },
        },
        {
          text: "एक समय देवर्षि नारदजी ने जगत् पिता ब्रह्माजी से कहा महाराज! आप मुझसे फाल्गुन मास के कृष्ण पक्ष की एकादशी विधान का कहिए। ब्रह्माजी कहने लगे कि हे नारद!",
          meaning: { en: "Once the divine sage Narada said to Brahma, father of the world: O lord, tell me the rite of the Ekadashi of Phalguna krishna. Brahma began: O Narada," },
        },
        {
          text: "विजया एकादशी का व्रत पुराने तथा नए पापों को नाश करने वाला है। इस विजया एकादशी की विधि मैंने आज तक किसी से भी नहीं कही। यह समस्त मनुष्यों को विजय प्रदान करती है।",
          meaning: { en: "the Vijaya Ekadashi vrata destroys old and new sins. I have never told the rite of this Vijaya Ekadashi to anyone till today. It gives victory to all people." },
        },
        {
          text: "त्रेता युग में मर्यादा पुरुषोत्तम श्री रामचंद्रजी जो विष्णु के अंशावतार थे, जब उनको चौदह वर्ष का वनवास हो गया, तब वे श्री लक्ष्मण तथा सीताजी सहित पंचवटी में निवास करने लगे। वहाँ पर दुष्ट रावण ने जब सीताजी का हरण किया तब इस समाचार से श्री रामचंद्रजी तथा लक्ष्मण अत्यंत व्याकुल हुए और सीताजी की खोज में चल दिए।",
          meaning: { en: "In the Treta Yuga, when Shri Ramachandra, the ideal man and a partial incarnation of Vishnu, was sent into exile for fourteen years, he lived at Panchavati with Lakshmana and Sita. There when the wicked Ravana carried off Sita, Shri Rama and Lakshmana were greatly distressed at the news and set out to search for her." },
        },
        {
          text: "घूमते-घूमते जब वे मरणासन्न जटायु के पास पहुँचे तो जटायु उन्हें सीताजी का वृत्तांत सुनाकर स्वर्गलोक चला गया। कुछ आगे जाकर उनकी सुग्रीव से मित्रता हुई और बाली का वध किया। हनुमानजी ने लंका में जाकर सीताजी का पता लगाया और उनसे श्री रामचंद्रजी और सुग्रीव की मित्रता का वर्णन किया। वहाँ से लौटकर हनुमानजी ने भगवान राम के पास आकर सब समाचार कहे।",
          meaning: { en: "Wandering, when they came to the dying Jatayu, Jatayu told them Sita's account and went to heaven. A little further they made friends with Sugriva and Rama killed Vali. Hanuman went to Lanka, found Sita and told her of the friendship of Rama and Sugriva. Returning, Hanuman came to Lord Rama and told him all the news." },
        },
        {
          text: "श्री रामचंद्रजी ने वानर सेना सहित सुग्रीव की सम्पत्ति से लंका को प्रस्थान किया। जब श्री रामचंद्रजी समुद्र के किनारे पहुँचे तब उन्होंने मगरमच्छ आदि से युक्त उस अगाध समुद्र को देखकर लक्ष्मणजी से कहा कि इस समुद्र को हम किस प्रकार से पार करेंगे।",
          meaning: { en: "Shri Ramachandra with the monkey army set out for Lanka at Sugriva's counsel. When he reached the seashore and saw the fathomless sea full of crocodiles he said to Lakshmana: how shall we cross this sea?" },
        },
        {
          text: "श्री लक्ष्मण ने कहा हे पुराण पुरुषोत्तम, आप आदिपुरुष हैं, सब कुछ जानते हैं। यहाँ से आधा योजन दूर पर कुमारी द्वीप में वकदाल्भ्य नाम के मुनि रहते हैं। उन्होंने अनेक ब्रह्मा देखे हैं, आप उनके पास जाकर इसका उपाय पूछिए। लक्ष्मणजी के इस प्रकार के वचन सुनकर श्री रामचंद्रजी वकदाल्भ्य ऋषि के पास गए और उनको प्रमाण करके बैठ गए।",
          meaning: { en: "Shri Lakshmana said: O ancient Supreme Person, you are the first being and know everything. Half a yojana from here on the island of Kumari lives a sage named Vakadalbhya. He has seen many Brahmas; go to him and ask the way. Hearing Lakshmana's words Shri Ramachandra went to the sage Vakadalbhya, bowed and sat." },
        },
        {
          text: "मुनि ने भी उनको मनुष्य रूप धारण किए हुए पुराण पुरुषोत्तम समझकर उनसे पूछा कि हे राम! आपका आना कैसे हुआ? रामचंद्रजी कहने लगे कि हे ऋषे!",
          meaning: { en: "The sage, knowing him to be the Supreme Person in human form, asked: O Rama, how have you come? Ramachandra said: O sage, I have come here with my army and am going to Lanka to conquer the demons." },
        },
        {
          text: "मैं अपनी सेना सहित यहाँ आया हूँ और राक्षसों को जीतने के लिए लंका जा रहा हूँ। आप कृपा करके समुद्र पार करने का कोई उपाय बतलाइए। मैं इसी कारण आपके पास आया हूँ।",
          meaning: { en: "Please tell me some way to cross the sea; that is why I have come to you." },
        },
        {
          text: "वकदाल्भ्य ऋषि बोले कि हे राम! फाल्गुन मास के कृष्ण पक्ष की एकादशी का उत्तम व्रत करने से निश्चय ही आपकी विजय होगी, साथ ही आप समुद्र भी अवश्य पार कर लेंगे। इस व्रत की विधि यह है कि दशमी के दिन स्वर्ण, चाँदी, ताँबा या मिट्टी का एक घडा बनाएँ। उस घडे को जल से भरकर तथा पाँच पल्लव रख वेदिका पर स्थापित करें।",
          meaning: { en: "Sage Vakadalbhya said: O Rama, by keeping the excellent vrata of the Ekadashi of Phalguna krishna you will surely win, and you will certainly cross the sea too. The rite of the vrata is this: on Dashami make a pot of gold, silver, copper or clay. Fill the pot with water, put five leaves in it and install it on an altar." },
        },
        {
          text: "उस घडे के नीचे सतनजा और ऊपर जौ रखें। उस पर श्रीनारायण भगवान की स्वर्ण की मूर्ति स्थापित करें। एकादशी के दिन स्नानादि से निवृत्त होकर धूप, दीप, नैवेद्य, नारियल आदि से भगवान की पूजा करें।",
          meaning: { en: "Put seven grains below the pot and barley above. Install on it a golden image of Lord Narayana. On Ekadashi, after bathing and the morning duties, worship the Lord with incense, lamp, offerings, coconut and so on." },
        },
        {
          text: "तत्पश्चात घडे के सामने बैठकर दिन व्यतीत करें और रात्रि को भी उसी प्रकार बैठे रहकर जागरण करें। द्वादशी के दिन नित्य नियम से निवृत्त होकर उस घडे को ब्राह्मण को दे दें। हे राम! यदि तुम भी इस व्रत को सेनापतियों सहित करोगे तो तुम्हारी विजय अवश्य होगी। श्री रामचंद्रजी ने ऋषि के कथनानुसार इस व्रत को किया और इसके प्रभाव से दैत्यों पर विजय पाई।",
          meaning: { en: "Then sit before the pot and spend the day, and at night keep vigil sitting the same way. On Dvadashi, after the daily duties, give that pot to a brahmin. O Rama, if you too keep this vrata with your commanders you will surely win. Shri Ramachandra kept the vrata as the sage said and by its power conquered the demons." },
        },
        {
          text: "अतः हे राजन्! जो कोई मनुष्य विधिपूर्वक इस व्रत को करेगा, दोनों लोकों में उसकी अवश्य विजय होगी। श्री ब्रह्माजी ने नारदजी से कहा था कि हे पुत्र! जो कोई इस व्रत के महात्म्य को पढता या सुनता है, उसको वाजपेय यज्ञ का फल प्राप्त होता है।",
          meaning: { en: "Therefore, O king, whoever keeps this vrata by the rule will surely win in both worlds. Lord Brahma told Narada that whoever reads or hears the greatness of this vrata gains the fruit of the Vajapeya sacrifice." },
        },
      ],
    },
    {
      title: "आमलकी एकादशी (फाल्गुन शुक्ल)",
      titleEn: "Amalaki Ekadashi (Phalguna shukla)",
      note: "Phalguna shukla. Vasishtha to King Mandhata, told by Krishna to Yudhishthira.",
      verses: [
        {
          text: "धर्मराज युधिष्ठिर बोले: हे जनार्दन! आपने फाल्गुन के कृष्ण पक्ष की विजया एकादशी का सुंदर वर्णन करते हुए सुनाया। अब आप फाल्गुन मास के शुक्ल पक्ष की एकादशी का क्या नाम है? तथा उसकी विधि क्या है? कृपा करके आप मुझे बताइए।",
          meaning: { en: "Dharmaraja Yudhishthira said: O Janardana, you have told me so beautifully of Vijaya, the Ekadashi of Phalguna krishna. Now what is the name of the Ekadashi of Phalguna shukla, and what is its rite? Please tell me." },
        },
        {
          text: "श्री भगवान बोले: हे राजन्, फाल्गुन मास के शुक्ल पक्ष की एकादशी का नाम आमलकी एकादशी है। इस व्रत के करने से समस्त पाप नष्ट हो जाते हैं, तथा इसके प्रभाव से एक हजार गौ दान का फल प्राप्त होता है। इस व्रत के करने से समस्त पाप नष्ट हो जाते हैं। हे राजन्, अब मैं आपको महर्षि वशिष्ठ जी द्वारा राजा मांधाता को सुनाई पौराणिक कथा के बारे मैं बताता हूँ, आप इसे ध्यानपूर्वक सुनें।",
          meaning: { en: "The Lord said: O king, the Ekadashi of Phalguna shukla is named Amalaki. By keeping this vrata all sins are destroyed and the fruit of a thousand cow-gifts is gained. O king, I now tell you the old story that the sage Vasishtha told King Mandhata; listen carefully." },
        },
        {
          text: "राजा मांधाता बोले कि हे वशिष्ठजी! यदि आप मुझ पर कृपा करें तो किसी ऐसे व्रत की कथा कहिए, जिससे मेरा कल्याण हो। महर्षि वशिष्ठ बोले कि हे राजन्, सब व्रतों से उत्तम और अंत में मोक्ष देने वाले आमलकी एकादशी के व्रत का मैं वर्णन करता हूं। यह एकादशी फाल्गुन माह के शुक्ल पक्ष में होती है।",
          meaning: { en: "King Mandhata said: O Vasishtha, if you are kind to me, tell me the katha of a vrata that will bring my welfare. The sage Vasishtha said: O king, I describe the Amalaki Ekadashi vrata, best of all vratas and giver of liberation in the end. This Ekadashi falls in the bright half of Phalguna." },
        },
        {
          text: "एक वैदिश नाम का नगर था जिसमें ब्राह्मण, क्षत्रिय, वैश्य और शूद्र चारों वर्ण आनंद सहित रहते थे। उस नगर में सदैव वेद ध्वनि गूंजा करती थी तथा पापी, दुराचारी तथा नास्तिक उस नगर में कोई नहीं था। उस नगर में चैतरथ नाम का चन्द्रवंशी राजा राज्य करता था। वह अत्यंत विद्वान तथा धर्मी था।",
          meaning: { en: "There was a city named Vaidisha in which people of all four varnas lived happily. The sound of the Veda was always heard in that city, and there was no sinner, evil-doer or unbeliever there. In that city a king of the lunar line named Chaitaratha ruled. He was very learned and righteous." },
        },
        {
          text: "उस नगर में कोई भी व्यक्ति दरिद्र व कंजूस नहीं था। सभी नगरवासी विष्णु भक्त थे और आबाल-वृद्ध स्त्री-पुरुष एकादशी का व्रत किया करते थे। एक समय फाल्गुन मास के शुक्ल पक्ष की आमलकी एकादशी आई। उस दिन राजा, प्रजा तथा बाल-वृद्ध सबने हर्षपूर्वक व्रत किया। राजा अपनी प्रजा के साथ मंदिर में जाकर पूर्ण कुंभ स्थापित करके धूप, दीप, नैवेद्य, पंचरत्न आदि से धात्री (आँवले) का पूजन करने लगे और इस प्रकार स्तुति करने लगे।",
          meaning: { en: "In that city no one was poor or miserly. All the citizens were devotees of Vishnu and men and women, young and old, kept Ekadashi. Once the Ekadashi of Phalguna shukla, Amalaki, came. That day the king, the subjects, young and old, all kept the vrata gladly. The king went with his people to the temple, installed a full pot, and began to worship the dhatri, the amla tree, with incense, lamp, offerings and five jewels, and praised it thus." },
        },
        {
          text: "हे धात्री! तुम ब्रह्मस्वरूप हो, तुम ब्रह्माजी द्वारा उत्पन्न हुए हो और समस्त पापों का नाश करने वाले हो, तुमको नमस्कार है। अब तुम मेरा अर्घ्य स्वीकार करो। तुम श्रीराम चन्द्रजी द्वारा सम्मानित हो, मैं आपकी प्रार्थना करता हूं, अतः आप मेरे समस्त पापों का नाश करो। उस मंदिर में सब ने रात्रि को जागरण किया।",
          meaning: { en: "O Dhatri, you are the form of Brahma, born from Brahma, destroyer of all sins; salutations to you. Now accept my arghya. You are honoured by Shri Ramachandra; I pray to you, so destroy all my sins. In that temple all kept vigil during the night." },
        },
        {
          text: "रात के समय वहां एक बहेलिया आया, जो अत्यंत पापी और दुराचारी था। वह अपने कुटुम्ब का पालन जीव-हत्या करके किया करता था। भूख और प्यास से अत्यंत व्याकुल वह बहेलिया इस जागरण को देखने के लिए मंदिर के एक कोने में बैठ गया और विष्णु भगवान तथा एकादशी माहात्म्य की कथा सुनने लगा। इस प्रकार अन्य मनुष्यों की भांति उसने भी सारी रात जागकर बिता दी।",
          meaning: { en: "At night a hunter came there who was a great sinner and wrongdoer; he supported his family by killing living beings. Overcome by hunger and thirst he sat in a corner of the temple to watch the vigil and listened to the katha of Lord Vishnu and the greatness of Ekadashi. So, like the others, he too passed the whole night awake." },
        },
        {
          text: "प्रातःकाल होते ही सब लोग अपने घर चले गए तो बहेलिया भी अपने घर चला गया। घर जाकर उसने भोजन किया। कुछ समय बीतने के पश्चात उस बहेलिए की मृत्यु हो गई। मगर उस आमलकी एकादशी के व्रत तथा जागरण से उसने राजा विदूरथ के घर जन्म लिया और उसका नाम वसुरथ रखा गया। युवा होने पर वह चतुरंगिनी सेना के सहित तथा धन-धान्य से युक्त होकर दस हजार ग्रामों का पालन करने लगा।",
          meaning: { en: "At dawn all went home and the hunter too went to his house. At home he ate. After some time the hunter died. But through the vrata and vigil of that Amalaki Ekadashi he was born in the house of King Viduratha and was named Vasuratha. When he grew up, with a four-limbed army and plenty of wealth and grain he ruled ten thousand villages." },
        },
        {
          text: "वह तेज में सूर्य के समान, कांति में चन्द्रमा के समान, वीरता में भगवान विष्णु के समान और क्षमा में पृथ्वी के समान था। वह अत्यंत धार्मिक, सत्यवादी, कर्मवीर और विष्णु भक्त था। वह प्रजा का समान भाव से पालन करता था। दान देना उसका नित्य कर्तव्य था।",
          meaning: { en: "He was like the sun in brilliance, the moon in lustre, Vishnu in valour and the earth in forbearance. He was very religious, truthful, a man of action and a devotee of Vishnu. He ruled his people with equal care. Giving was his daily duty." },
        },
        {
          text: "एक दिन राजा शिकार खेलने के लिए गया। दैवयोग से वह मार्ग भूल गया और दिशा ज्ञान न रहने के कारण उसी वन में एक वृक्ष के नीचे सो गया। थोडी देर बाद पहाडी म्लेच्छ वहां पर आ गए और राजा को अकेला देखकर मारो, मारो शब्द करते हुए राजा की ओर दौडे। म्लेच्छ कहने लगे कि इसी दुष्ट राजा ने हमारे माता, पिता, पुत्र, पौत्र आदि अनेक संबंधियों को मारा है तथा देश से निकाल दिया है अतः इसको अवश्य मारना चाहिए।",
          meaning: { en: "One day the king went hunting. By mischance he lost his way and, having no sense of direction, fell asleep under a tree in the same forest. After a short time hill tribesmen came, and seeing the king alone ran at him crying 'kill, kill'. They said: this wicked king killed our mothers, fathers, sons, grandsons and many kin and drove us from the land, so he must be killed." },
        },
        {
          text: "ऐसा कहकर वे म्लेच्छ उस राजा को मारने दौडे और अनेक प्रकार के अस्त्र-शस्त्र उसके ऊपर फेंके। वे सब अस्त्र-शस्त्र राजा के शरीर पर गिरते ही नष्ट हो जाते और उनका वार पुष्प के समान प्रतीत होता। अब उन म्लेच्छों के अस्त्र-शस्त्र उलटा उन्हीं पर प्रहार करने लगे जिससे वे मूर्छित होकर गिरने लगे। उसी समय राजा के शरीर से एक दिव्य स्त्री उत्पन्न हुई। वह स्त्री अत्यंत सुंदर होते हुए भी उसकी भृकुटी टेढी थी, उसकी आंखों से लाल-लाल अग्नि निकल रही थी जिससे वह दूसरे काल के समान प्रतीत होती थी।",
          meaning: { en: "So saying they rushed to kill the king and threw weapons of many kinds at him. All those weapons were destroyed as soon as they fell on the king's body and their blows seemed like flowers. Then the weapons turned and struck the tribesmen themselves, so they fell unconscious. At that moment a divine woman came forth from the king's body. Though very beautiful, her brow was knitted and red fire flew from her eyes, so she seemed like a second Death." },
        },
        {
          text: "वह स्त्री म्लेच्छों को मारने दौडी और थोडी ही देर में उसने सब म्लेच्छों को काल के गाल में पहुंचा दिया। जब राजा सोकर उठा तो उसने म्लेच्छों को मरा हुआ देखकर कहा कि इन शत्रुओं को किसने मारा है? इस वन में मेरा कौन हितैषी रहता है?",
          meaning: { en: "That woman ran at the tribesmen and in a short time sent them all into the jaws of Death. When the king woke he saw the tribesmen dead and said: who has killed these enemies? Who is my well-wisher in this forest?" },
        },
        {
          text: "वह ऐसा विचार कर ही रहा था कि आकाशवाणी हुई: हे राजा! इस संसार में विष्णु भगवान के अतिरिक्त कौन तेरी सहायता कर सकता है। इस आकाशवाणी को सुनकर राजा अपने राज्य में आ गया और सुखपूर्वक राज्य करने लगा।",
          meaning: { en: "He was thinking thus when a voice from the sky said: O king, who can help you in this world except Lord Vishnu? Hearing this voice the king returned to his kingdom and ruled happily." },
        },
        {
          text: "महर्षि वशिष्ठ बोले कि हे राजन्! यह आमलकी एकादशी के व्रत का प्रभाव था। जो मनुष्य इस आमलकी एकादशी का व्रत करते हैं, वे प्रत्येक कार्य में सफल होते हैं और अंत में विष्णुलोक को जाते हैं। आमलकी एकादशी को बृज में रंगभरनी एकादशी, श्रीनाथद्वारा में कुंज एकादशी तथा खाटू नगरी में खाटू एकादशी भी कहा जाता है। इस एकादशी में आंवले के पेड की पूजा की जाती है।",
          meaning: { en: "The sage Vasishtha said: O king, this was the power of the Amalaki Ekadashi vrata. Those who keep this Amalaki Ekadashi succeed in every task and in the end go to Vishnu's world. Amalaki Ekadashi is also called Rangbharni Ekadashi in Braj, Kunj Ekadashi at Nathdwara and Khatu Ekadashi at Khatu. On this Ekadashi the amla tree is worshipped." },
        },
      ],
    },
    {
      title: "पापमोचनी एकादशी (चैत्र कृष्ण)",
      titleEn: "Papamochani Ekadashi (Chaitra krishna)",
      note: "Chaitra krishna (purnimanta), the last of the twenty-four. Krishna to Arjuna, from Lomasha's words to King Mandhata.",
      verses: [
        {
          text: "अर्जुन ने भगवान श्री कृष्ण से कहा: हे मधुसूदन! आपने फाल्गुन मास के शुक्ल पक्ष की एकादशी अर्थात आमलकी एकादशी के बारे में विस्तार पूर्वक बतलाया। चैत्र माह के कृष्ण पक्ष में आने वाली एकादशी का क्या नाम है? तथा उसकी विधि क्या है? कृपा करके आप मेरी बढती हुई जिज्ञासा को शांत करें।",
          meaning: { en: "Arjuna said to Lord Krishna: O Madhusudana, you have told me in detail of Amalaki, the Ekadashi of Phalguna shukla. What is the name of the Ekadashi that comes in the dark half of Chaitra, and what is its rite? Please quiet my growing curiosity." },
        },
        {
          text: "भगवान श्रीकृष्ण ने कहा: हे अर्जुन! चैत्र मास के कृष्ण पक्ष की एकादशी को पापमोचनी एकादशी के नाम से जाना जाता है। एक बार की बात है, पृथ्वीपति राजा मान्धाता ने लोमश ऋषि से यही प्रश्न किया था, जो तुमने मुझसे किया है। अतः जो कुछ भी ऋषि लोमश ने राजा मान्धाता को बतलाया, वही मैं तुमसे कह रहा हूँ।",
          meaning: { en: "Lord Krishna said: O Arjuna, the Ekadashi of Chaitra krishna is known as Papamochani. Once King Mandhata, lord of the earth, asked the sage Lomasha the same question you have asked me. So what the sage Lomasha told King Mandhata, I tell you." },
        },
        {
          text: "महर्षि लोमश ने कहा: हे नृपति! चैत्र मास के कृष्ण पक्ष की एकादशी का नाम पापमोचिनी एकादशी है। उसके व्रत के प्रभाव से मनुष्यों के अनेक पाप नष्ट हो जाते हैं। मैं तुम्हें इस व्रत की कथा सुनाता हूँ, ध्यानपूर्वक श्रवण करो।",
          meaning: { en: "The great sage Lomasha said: O king, the Ekadashi of Chaitra krishna is named Papamochani. By its power many sins of people are destroyed. I tell you the katha of this vrata; listen attentively." },
        },
        {
          text: "प्राचीन समय में चैत्ररथ नामक एक वन था। उसमें अप्सराएँ किन्नरों के साथ विहार किया करती थीं। वहाँ सदैव वसन्त का मौसम रहता था, अर्थात उस जगह सदा नाना प्रकार के पुष्प खिले रहते थे। कभी गन्धर्व कन्याएँ विहार किया करती थीं, कभी देवेन्द्र अन्य देवताओं के साथ क्रीडा किया करते थे। उसी वन में मेधावी नाम के एक ऋषि भी तपस्या में लीन रहते थे। वे शिवभक्त थे। एक दिन मञ्जुघोषा नामक एक अप्सरा ने उनको मोहित कर उनकी निकटता का लाभ उठाने की चेष्टा की, इसलिए वह कुछ दूरी पर बैठ वीणा बजाकर मधुर स्वर में गाने लगी।",
          meaning: { en: "In ancient times there was a forest named Chaitraratha, where apsaras played with kinnaras. There it was always spring, so flowers of many kinds were always in bloom. Sometimes gandharva maidens roamed there and sometimes Indra amused himself with the other gods. In that same forest a sage named Medhavi was absorbed in austerities. He was a devotee of Shiva. One day an apsara named Manjughosha tried to charm him and gain his nearness, so she sat at a little distance and began to sing sweetly, playing the vina." },
        },
        {
          text: "उसी समय शिव भक्त महर्षि मेधावी को कामदेव भी जीतने का प्रयास करने लगे। कामदेव ने उस सुन्दर अप्सरा के भ्रू का धनुष बनाया। कटाक्ष को उसकी प्रत्यन्चा बनाई और उसके नेत्रों को मञ्जुघोषा अप्सरा का सेनापति बनाया। इस तरह कामदेव अपने शत्रुभक्त को जीतने को तैयार हुआ।",
          meaning: { en: "At the same time the god of love too tried to conquer the Shiva-devotee sage Medhavi. Kamadeva made the beautiful apsara's brow his bow, her sidelong glance the bowstring and her eyes the commander of Manjughosha's army. So Kamadeva was ready to conquer his enemy's devotee." },
        },
        {
          text: "उस समय महर्षि मेधावी भी युवावस्था में थे और काफी हृष्ट-पुष्ट थे। उन्होंने यज्ञोपवीत तथा दण्ड धारण कर रखा था। वे दूसरे कामदेव के समान प्रतीत हो रहे थे। उस मुनि को देखकर कामदेव के वश में हुई मञ्जुघोषा ने धीरे-धीरे मधुर वाणी से वीणा पर गायन शुरू किया तो महर्षि मेधावी भी मञ्जुघोषा के मधुर गाने पर तथा उसके सौन्दर्य पर मोहित हो गए। वह अप्सरा मेधावी मुनि को कामदेव से पीडित जानकर उनसे आलिङ्गन करने लगी।",
          meaning: { en: "At that time the sage Medhavi was young and sturdy. He wore the sacred thread and carried a staff and looked like a second Kamadeva. Seeing the sage, Manjughosha, under Kamadeva's power, began to sing slowly in a sweet voice on the vina, and the sage Medhavi too was charmed by her sweet song and beauty. Knowing the sage was troubled by desire the apsara began to embrace him." },
        },
        {
          text: "महर्षि मेधावी उसके सौन्दर्य पर मोहित होकर शिव रहस्य को भूल गए और काम के वशीभूत होकर उसके साथ रमण करने लगे। काम के वशीभूत होने के कारण मुनि को उस समय दिन-रात का कुछ भी ज्ञान न रहा और काफी समय तक वे रमण करते रहे। तदुपरान्त मञ्जुघोषा उस मुनि से बोली: हे ऋषिवर! अब मुझे बहुत समय हो गया है, अतः स्वर्ग जाने की आज्ञा दीजिये।",
          meaning: { en: "Charmed by her beauty Medhavi forgot his Shiva-knowledge and, in the power of desire, took his pleasure with her. Under desire the sage lost all sense of day and night, and for a long time they enjoyed each other. After that Manjughosha said to the sage: O sage, I have been here a very long time; please give me leave to go to heaven." },
        },
        {
          text: "अप्सरा की बात सुनकर ऋषि ने कहा: हे मोहिनी! सन्ध्या को तो आयी हो, प्रातःकाल होने पर चली जाना। ऋषि के ऐसे वचनों को सुनकर अप्सरा उनके साथ रमण करने लगी। इसी प्रकार दोनों ने साथ-साथ बहुत समय बिताया।",
          meaning: { en: "Hearing the apsara the sage said: O enchantress, you came only in the evening; go in the morning. Hearing the sage's words the apsara took her pleasure with him again. In this way they spent a very long time together." },
        },
        {
          text: "अप्सरा की बात सुन मुनि को समय का बोध हुआ और वह गम्भीरतापूर्वक विचार करने लगे। जब उन्हें समय का ज्ञान हुआ कि उन्हें रमण करते सत्तावन वर्ष व्यतीत हो चुके हैं तो उस अप्सरा को वह काल का रूप समझने लगे। इतना ज्यादा समय भोग-विलास में व्यर्थ चला जाने पर उन्हें बडा क्रोध आया। अब वह भयंकर क्रोध में जलते हुए उस तप नाश करने वाली अप्सरा की तरफ भृकुटी तानकर देखने लगे। क्रोध से उनके अधर काँपने लगे और इन्द्रियाँ बेकाबू होने लगीं।",
          meaning: { en: "Hearing the apsara the sage became aware of time and began to think gravely. When he realised that fifty-seven years had passed in this pleasure he began to see the apsara as a form of Time. At so much time wasted in enjoyment he was very angry. Burning with terrible anger he looked at that destroyer of his austerity with knitted brows. His lips quivered with anger and his senses began to run out of control." },
        },
        {
          text: "क्रोध से थरथराते स्वर में मुनि ने उस अप्सरा से कहा: मेरे तप को नष्ट करने वाली दुष्टा! तू महा पापिन और बहुत ही दुराचारिणी है, तुझ पर धिक्कार है। अब तू मेरे श्राप से पिशाचिनी बन जा। मुनि के क्रोधयुक्त श्राप से वह अप्सरा पिशाचिनी बन गई। यह देख वह व्यथित होकर बोली: हे ऋषिवर! अब मुझ पर क्रोध त्यागकर प्रसन्न होइए और कृपा करके बताइये कि इस शाप का निवारण किस प्रकार होगा? विद्वानों ने कहा है, साधुओं की सङ्गत अच्छा फल देने वाली होती है और आपके साथ तो मेरे बहुत वर्ष व्यतीत हुए हैं, अतः अब आप मुझ पर प्रसन्न हो जाइए, अन्यथा लोग कहेंगे कि एक पुण्य आत्मा के साथ रहने पर मञ्जुघोषा को पिशाचिनी बनना पडा।",
          meaning: { en: "In a voice trembling with anger the sage said to the apsara: you wretch who destroyed my austerity, you are a great sinner and wicked; shame on you. Become a pishachini by my curse. By the sage's angry curse the apsara became a pishachini. Seeing this, in distress she said: O sage, give up your anger and be pleased, and please tell me how this curse may be removed. The learned say that the company of holy men bears good fruit, and I have spent many years with you, so be pleased with me, or people will say that Manjughosha had to become a pishachini after living with a holy soul." },
        },
        {
          text: "मञ्जुघोषा की बात सुनकर मुनि को अपने क्रोध पर अत्यन्त ग्लानि हुई साथ ही अपनी अपकीर्ति का भय भी हुआ, अतः पिशाचिनी बनी मञ्जुघोषा से मुनि ने कहा: तूने मेरा बडा बुरा किया है, किन्तु फिर भी मैं तुझे इस श्राप से मुक्ति का उपाय बतलाता हूँ। चैत्र मास के कृष्ण पक्ष की जो एकादशी है, उसका नाम पापमोचिनी है। उस एकादशी का उपवास करने से तेरी पिशाचिनी की देह से मुक्ति हो जाएगी। ऐसा कहकर मुनि ने उसको व्रत का सब विधान समझा दिया। फिर अपने पापों का प्रायश्चित करने के लिए वे अपने पिता च्यवन ऋषि के पास गये।",
          meaning: { en: "Hearing Manjughosha the sage felt great remorse at his anger and also feared infamy. So he said to the pishachini Manjughosha: you have done me great harm, but still I tell you the way to be freed from this curse. The Ekadashi of Chaitra krishna is named Papamochini; by keeping it you will be freed from the pishachini body. Saying this the sage explained the whole rite of the vrata to her. Then, to atone for his own sins, he went to his father the sage Chyavana." },
        },
        {
          text: "च्यवन ऋषि ने अपने पुत्र मेधावी को देखकर कहा: हे पुत्र! ऐसा क्या किया है तूने कि तेरे सभी तप नष्ट हो गए हैं? जिससे तुम्हारा समस्त तेज मलिन हो गया है?",
          meaning: { en: "The sage Chyavana saw his son Medhavi and said: O son, what have you done that all your austerities are lost? Why has all your radiance become dim?" },
        },
        {
          text: "मेधावी मुनि ने लज्जा से अपना सिर झुकाकर कहा: पिताश्री! मैंने एक अप्सरा से रमण करके बहुत बडा पाप किया है। इसी पाप के कारण सम्भवतः मेरा सारा तेज और मेरे तप नष्ट हो गए हैं। कृपा करके आप इस पाप से छूटने का उपाय बतलाइये।",
          meaning: { en: "The sage Medhavi bowed his head in shame and said: Father, I have committed a great sin by taking my pleasure with an apsara. Perhaps because of this sin all my radiance and austerity are lost. Please tell me the way to be freed from this sin." },
        },
        {
          text: "ऋषि ने कहा: हे पुत्र! तुम चैत्र माह के कृष्ण पक्ष की पापमोचिनी एकादशी का विधि तथा भक्तिपूर्वक उपवास करो, इससे तुम्हारे सभी पाप नष्ट हो जाएंगे। अपने पिता च्यवन ऋषि के वचनों को सुनकर मेधावी मुनि ने पापमोचिनी एकादशी का विधिपूर्वक व्रत किया। उसके प्रभाव से उनके सभी पाप नष्ट हो गए। मञ्जुघोषा अप्सरा भी पापमोचिनी एकादशी का उपवास करने से पिशाचिनी की देह से छूट गई और पुनः अपना सुन्दर रूप धारण कर स्वर्गलोक चली गई।",
          meaning: { en: "The sage said: O son, keep the Ekadashi of Chaitra krishna, Papamochini, with the rite and with devotion; by this all your sins will be destroyed. Hearing his father Chyavana's words the sage Medhavi kept the Papamochini Ekadashi vrata by the rule. By its power all his sins were destroyed. The apsara Manjughosha too, by keeping the Papamochini Ekadashi, was freed from the pishachini body and regained her beautiful form." },
        },
        {
          text: "लोमश मुनि ने कहा: हे राजन! इस पापमोचिनी एकादशी के प्रभाव से समस्त पाप नष्ट हो जाते हैं। इस एकादशी की कथा के श्रवण व पठन से एक हजार गौदान करने का फल प्राप्त होता है। इस उपवास के करने से ब्रह्म हत्या करने वाले, स्वर्ण चुराने वाले, मद्यपान करने वाले, अगम्या गमन करने वाले आदि भयंकर पाप भी नष्ट हो जाते हैं और अन्त में स्वर्गलोक की प्राप्ति होती है।",
          meaning: { en: "Sage Lomasha said: O king, by the power of this Papamochini Ekadashi all sins are destroyed. By hearing or reading its katha the fruit of giving a thousand cows is gained. By this fast even terrible sins, such as those of one who kills a brahmin, steals gold, drinks liquor or commits incest, are destroyed, and in the end heaven is gained." },
        },
      ],
    },
    {
      title: "पद्मिनी एकादशी (अधिकमास शुक्ल)",
      titleEn: "Padmini Ekadashi (adhika month, shukla)",
      note: "Adhika (mala) month, shukla paksha; also called Kamala Ekadashi. Krishna to Yudhishthira.",
      verses: [
        {
          text: "धर्मराज युधिष्ठिर कहने लगे कि, हे जनार्दन! आपने सभी एकादशियों का विस्तारपूर्वक वर्णन कर मुझे सुनाया, अतः अब आप कृपा करके मुझे अधिकमास के शुक्ल पक्ष की एकादशी का क्या नाम है? तथा उसकी विधि क्या है? इन सब के बारे में बताइए।",
          meaning: { en: "Dharmaraja Yudhishthira said: O Janardana, you have told me of all the Ekadashis in detail. Now please tell me the name of the Ekadashi of the bright half of the adhika month, and its rite. Please tell me all this." },
        },
        {
          text: "श्री भगवान बोले, हे राजन्! अधिकमास में शुक्ल पक्ष में जो एकादशी आती है वह पद्मिनी (कमला) एकादशी कहलाती है। वैसे तो प्रत्येक वर्ष चौबीस एकादशियां होती हैं। जब अधिकमास या मलमास आता है, तब इनकी संख्या बढकर छब्बीस हो जाती है।",
          meaning: { en: "The Lord said: O king, the Ekadashi that comes in the bright half of the adhika month is called Padmini (Kamala) Ekadashi. Ordinarily there are 24 Ekadashis every year; when the adhika or mala month comes the number rises to 26." },
        },
        {
          text: "भगवान कृष्ण बोले: पुरुषोत्तम मास में अनेक पुण्यों को देने वाली एकादशी का नाम पद्मिनी है। इसका व्रत करने पर मनुष्य कीर्ति प्राप्त करके बैकुंठ को जाता है, जो मनुष्यों के लिए भी दुर्लभ है। हे राजन! ध्यानपूर्वक इस कथा को सुनो।",
          meaning: { en: "Lord Krishna said: the Ekadashi in the Purushottama month that gives many merits is named Padmini. By keeping it a person gains fame and goes to Vaikuntha, which is hard even for human beings to reach. O king, listen carefully to this katha." },
        },
        {
          text: "हे मुनिवर! पूर्वकाल में त्रेयायुग में हैहय नामक राजा के वंश में कृतवीर्य नाम का राजा महिष्मती पुरी में राज्य करता था। उस राजा की एक हजार परम प्रिय स्त्रियां थीं, परंतु उनमें से किसी को भी पुत्र नहीं था, जो कि उनके राज्यभार को संभाल सके। देवता, पितृ, सिद्ध तथा अनेक चिकित्सकों आदि से राजा ने पुत्र प्राप्ति के लिए काफी प्रयत्न किए, लेकिन सब असफल रहे।",
          meaning: { en: "O sage, in the Treta Yuga in the line of King Haihaya a king named Kritavirya ruled in the city of Mahishmati. That king had a thousand beloved wives, but none of them had a son who could carry the burden of the kingdom. The king made great efforts for a son through gods, ancestors, siddhas and many physicians, but all failed." },
        },
        {
          text: "तब राजा ने तपस्या करने का निश्चय किया। महाराज के साथ उनकी परम प्रिय रानी, जो इक्ष्वाकु वंश में उत्पन्न हुए राजा हरिश्चंद्र की पद्मिनी नाम वाली कन्या थीं, राजा के साथ वन में जाने को तैयार हो गई। दोनों अपने मंत्री को राज्यभार सौंपकर राजसी वेष त्यागकर गंधमादन पर्वत पर तपस्या करने चले गए। राजा ने उस पर्वत पर दस हजार वर्ष तक तप किया, परंतु फिर भी पुत्र प्राप्ति नहीं हुई।",
          meaning: { en: "Then the king decided to practise austerity. With the king went his dearest queen, Padmini, daughter of King Harishchandra of the Ikshvaku line, ready to go with him to the forest. Handing the burden of the kingdom to a minister and giving up royal dress they went to Mount Gandhamadana to perform austerity. The king performed austerity there for ten thousand years, but still no son was born." },
        },
        {
          text: "तब पतिव्रता रानी कमलनयनी पद्मिनी से अनुसूया ने कहा: बारह मास से अधिक महत्वपूर्ण मलमास होता है, जो बत्तीस मास पश्चात आता है। उसमें द्वादशीयुक्त पद्मिनी शुक्ल पक्ष की एकादशी का जागरण समेत व्रत करने से तुम्हारी सारी मनोकामना पूर्ण होगी। इस व्रत के करने से भगवान तुम पर प्रसन्न होकर तुम्हें शीघ्र ही पुत्र देंगे।",
          meaning: { en: "Then Anasuya said to the devoted, lotus-eyed queen Padmini: the adhika month, which comes after thirty-two months, is more important than the twelve months. If in it you keep the Padmini Ekadashi of the bright half, joined with Dvadashi, with vigil, all your wishes will be fulfilled. By keeping this vrata the Lord will be pleased with you and soon give you a son." },
        },
        {
          text: "रानी पद्मिनी ने पुत्र प्राप्ति की इच्छा से एकादशी का व्रत किया। वह एकादशी को निराहार रहकर रात्रि जागरण करती। इस व्रत से प्रसन्न होकर भगवान विष्णु ने उन्हें पुत्र प्राप्ति का वरदान दिया।",
          meaning: { en: "Queen Padmini kept the Ekadashi vrata with the wish for a son. She stayed without food on Ekadashi and kept vigil at night. Pleased by this vrata Lord Vishnu gave her the boon of a son." },
        },
        {
          text: "इसी के प्रभाव से पद्मिनी के घर कार्तवीर्य उत्पन्न हुए। जो बलवान थे और उनके समान तीनों लोकों में कोई बलवान नहीं था। तीनों लोकों में भगवान के सिवा उनको जीतने का सामर्थ्य किसी में नहीं था।",
          meaning: { en: "By its power Kartavirya was born in Padmini's house. He was so mighty that no one in the three worlds was as strong; none except the Lord had the power to conquer him in all three worlds." },
        },
        {
          text: "सो हे नारद! जिन मनुष्यों ने मलमास शुक्ल पक्ष एकादशी का व्रत किया है, जो संपूर्ण कथा को पढते या सुनते हैं, वे भी यश के भागी होकर विष्णुलोक को प्राप्त होते हैं।",
          meaning: { en: "So, O Narada, those who have kept the Ekadashi of the bright half of the adhika month, and those who read or hear the whole katha, also become sharers in fame and go to Vishnu's world." },
        },
      ],
    },
    {
      title: "परमा एकादशी (अधिकमास कृष्ण)",
      titleEn: "Parama Ekadashi (adhika month, krishna)",
      note: "Adhika (mala) month, krishna paksha. Krishna to Arjuna.",
      verses: [
        {
          text: "अर्जुन ने कहा, हे कमलनयन! आपने शुक्ल पक्ष की एकादशी का विस्तारपूर्वक वर्णन कर मुझे सुनाया, अतः अब आप कृपा करके मुझे अधिकमास के कृष्ण पक्ष की एकादशी का क्या नाम है? इसमें किस देवता का पूजन किया जाता है तथा इसके व्रत से किस फल की प्राप्ति होती है? तथा उसकी विधि क्या है? इन सब के बारे में बताइए। श्री भगवान बोले, हे अर्जुन! अधिकमास के कृष्ण पक्ष में जो एकादशी आती है वह परमा एकादशी कहलाती है। वैसे तो प्रत्येक वर्ष चौबीस एकादशियां होती हैं।",
          meaning: { en: "Arjuna said: O lotus-eyed one, you have told me in detail of the Ekadashi of the bright half. Now please tell me the name of the Ekadashi of the dark half of the adhika month, which god is worshipped in it, what fruit its vrata gives and what its rite is. Please tell me all this. The Lord said: O Arjuna, the Ekadashi that comes in the dark half of the adhika month is called Parama. Ordinarily there are 24 Ekadashis every year." },
        },
        {
          text: "अधिकमास या मलमास को जोडकर वर्ष में छब्बीस एकादशियां होती हैं। अधिकमास में दो एकादशियां होती हैं, जो पद्मिनी एकादशी (शुक्ल पक्ष) और परमा एकादशी (कृष्ण पक्ष) के नाम से जानी जाती हैं। इसके व्रत से सभी पाप नष्ट हो जाते हैं तथा मनुष्य को इसलोक में सुख तथा परलोक में सद्गति प्राप्त होती है। इसका व्रत विधानानुसार करना चाहिए और भगवान विष्णु का धूप, दीप, नैवेद्य, पुष्प आदि से पूजन करना चाहिए।",
          meaning: { en: "Including the adhika or mala month there are 26 Ekadashis in a year. In the adhika month there are two, known as Padmini (shukla) and Parama (krishna). By keeping it all sins are destroyed and a person gains happiness in this world and a good state in the next. The vrata should be kept by the rule and Lord Vishnu worshipped with incense, lamp, offerings, flowers and so on." },
        },
        {
          text: "इस एकादशी की पावन कथा जो कि महर्षियों के साथ काम्पिल्य नगरी में हुई थी, वह मैं तुमसे कहता हूं। ध्यानपूर्वक श्रवण करो। काम्पिल्य नगरी में सुमेधा नाम का एक अत्यंत धर्मात्मा ब्राह्मण रहता था। उसकी स्त्री अत्यंत पवित्र तथा पतिव्रता थी। किसी पूर्व पाप के कारण वह दंपती अत्यंत दरिद्रता का जीवन व्यतीत कर रहे थे।",
          meaning: { en: "I tell you the holy katha of this Ekadashi, which took place at Kampilya among sages; listen attentively. In the city of Kampilya lived a very righteous brahmin named Sumedha. His wife was very pure and devoted. Because of some past sin the couple lived in great poverty." },
        },
        {
          text: "ब्राह्मण को भिक्षा मांगने पर भी भिक्षा नहीं मिलती थी। उस ब्राह्मण की पत्नी वस्त्रों से रहित होते हुए भी अपने पति की सेवा करती थी तथा अतिथि को अन्न देकर स्वयं भूखी रह जाती थी और पति से कभी किसी वस्तु की मांग नहीं करती थी। दोनों पति-पत्नी घोर निर्धनता का जीवन व्यतीत कर रहे थे। एक दिन ब्राह्मण अपनी स्त्री से बोला: हे प्रिय! जब मैं धनवानों से धन की याचना करता हूँ तो वह मुझे मना कर देते हैं। गृहस्थी धन के बिना नहीं चलती, इसलिए यदि तुम्हारी सहमति हो तो मैं परदेस जाकर कुछ काम करूं, क्योंकि विद्वानों ने कर्म की प्रशंसा की है।",
          meaning: { en: "The brahmin got no alms even when he begged. His wife, though without clothes, served her husband, gave grain to guests and stayed hungry herself, and never asked her husband for anything. Both lived in terrible poverty. One day the brahmin said to his wife: dear, when I ask the rich for money they refuse me. A household cannot run without money, so if you agree I shall go abroad and do some work, for the wise have praised action." },
        },
        {
          text: "ब्राह्मण की पत्नी ने विनीत भाव से कहा: हे स्वामी! मैं आपकी दासी हूँ। पति अच्छा और बुरा जो कुछ भी कहे, पत्नी को वही करना चाहिए। मनुष्य को पूर्व जन्म में किए कर्मों का फल मिलता है।",
          meaning: { en: "The brahmin's wife said humbly: O lord, I am your servant. Whatever the husband says, good or bad, the wife should do. A person gets the fruit of the deeds of a former birth." },
        },
        {
          text: "यदि कोई मनुष्य दान नहीं करता तो प्रभु उसे केवल अन्न ही देते हैं, इसलिए आपको इसी स्थान पर रहना चाहिए, क्योंकि मैं आपका विछोह नहीं सह सकती। पति बिना स्त्री की माता, पिता, भाई, श्वसुर तथा सम्बंधी आदि सभी निंदा करते हैं, हसलिए हे स्वामी! कृपा कर आप कहीं न जाएं, जो भाग्य में होगा, वह यहीं प्राप्त हो जाएगा।",
          meaning: { en: "Even living on Mount Sumeru a person does not get gold without fortune. Those who in a past life gave learning and land get learning and land in the next birth. What God has written in fate cannot be avoided. If a person does not give, the Lord gives him only grain, so you should stay in this very place, for I cannot bear separation from you. Without a husband the mother, father, brother, father-in-law and relatives all blame a woman, so, O lord, please do not go anywhere; what is in fate will be gained here." },
        },
        {
          text: "स्त्री की सलाह मानकर ब्राह्मण परदेश नहीं गया। इसी प्रकार समय बीतता रहा। एक बार कौण्डिन्य ऋषि वहां आए। ऋषि को देखकर ब्राह्मण सुमेधा और उसकी स्त्री ने उन्हें प्रणाम किया और बोले: आज हम धन्य हुए। आपके दर्शन से आज हमारा जीवन सफल हुआ।",
          meaning: { en: "Following his wife's advice the brahmin did not go abroad. So time passed. Once the sage Kaundinya came there. Seeing the sage, the brahmin Sumedha and his wife bowed and said: today we are blessed; by your sight our life has become fruitful." },
        },
        {
          text: "ऋषि को उन्होंने आसन तथा भोजन दिया। भोजन देने के बाद पतिव्रता ब्राह्मणी ने कहा: हे ऋषिवर! कृपा कर आप मुझे दरिद्रता का नाश करने की विधि बतलाइए। मैंने अपने पति को परदेश में जाकर धन कमाने से रोका है।",
          meaning: { en: "They gave the sage a seat and food. After giving food the devoted brahmin woman said: O sage, please tell me the way to destroy poverty. I have stopped my husband from going abroad to earn money." },
        },
        {
          text: "मेरे भाग्य से आप आ गए हैं। मुझे पूर्ण विश्वास है कि अब मेरी दरिद्रता शीघ्र ही नष्ट हो जाएगी, अतः आप हमारी दरिद्रता नष्ट करने के लिए कोई उपाय बताएं।",
          meaning: { en: "By my good fortune you have come. I am fully sure that my poverty will soon be destroyed, so please tell us some way to end our poverty." },
        },
        {
          text: "ब्राह्मणी की बात सुन कौण्डिन्य ऋषि बोले: हे ब्राह्मणी! मल मास की कृष्ण पक्ष की परमा एकादशी के व्रत से सभी पाप, दुःख और दरिद्रता आदि नष्ट हो जाते हैं। जो मनुष्य इस व्रत को करता है, वह धनवान हो जाता है। इस व्रत में नृत्य, गायन आदि सहित रात्रि जागरण करना चाहिए।",
          meaning: { en: "Hearing the brahmin woman the sage Kaundinya said: O brahmin woman, by the Parama Ekadashi vrata of the dark half of the mala month all sins, sorrow and poverty are destroyed. One who keeps this vrata becomes rich. In this vrata one should keep vigil at night with dance and song." },
        },
        {
          text: "यह एकादशी धन-वैभव देती है तथा पापों का नाश कर उत्तम गति भी प्रदान करने वाली होती है। धनाधिपति कुबेर ने भी इस एकादशी व्रत का पालन किया था जिससे प्रसन्न होकर भगवान भोलेनाथ ने उन्हें धनाध्यक्ष का पद प्रदान किया। इसी व्रत के प्रभाव से सत्यवादी राजा हरिश्चन्द्र को पुत्र, स्त्री और राज्य की प्राप्ति हुई थी।",
          meaning: { en: "This Ekadashi gives wealth and splendour and, destroying sins, also gives a good end. Kubera, lord of wealth, also kept this Ekadashi vrata, and pleased by it Lord Shiva gave him the post of lord of treasure. By the power of this vrata the truthful King Harishchandra got his son, wife and kingdom back." },
        },
        {
          text: "तदुपरांत कौण्डिन्य ऋषि ने उन्हें एकादशी के व्रत का समस्त विधान कह सुनाया। ऋषि ने कहा: हे ब्राह्मणी! पंचरात्रि व्रत इससे भी ज्यादा उत्तम है। परमा एकादशी के दिन प्रातःकाल नित्य कर्म से निवृत्त होकर विधानपूर्वक पंचरात्रि व्रत आरम्भ करना चाहिए।",
          meaning: { en: "Then the sage Kaundinya told them the whole rite of the Ekadashi vrata. The sage said: O brahmin woman, the Panchratri vrata is even better than this. On Parama Ekadashi, after the morning duties, one should begin the Panchratri vrata by the rule." },
        },
        {
          text: "जो मनुष्य पांच दिन तक निर्जल व्रत करते हैं, वे अपने मा-पिता और स्त्री सहित स्वर्ग लोक को जाते हैं। जो मनुष्य पांच दिन तक संध्या को भोजन करते हैं, वे स्वर्ग को जाते हैं। जो मनुष्य स्नान करके पांच दिन तक ब्राह्मणों को भोजन कराते हैं, वे समस्त संसार को भोजन कराने का फल पाते हैं। जो मनुष्य इस व्रत में अश्व दान करते हैं, उन्हें तीनों लोकों को दान करने का फल मिलता है।",
          meaning: { en: "Those who fast without water for five days go to heaven with their parents and wife. Those who eat only in the evening for five days go to heaven. Those who bathe and feed brahmins for five days gain the fruit of feeding the whole world. Those who give a horse in this vrata gain the fruit of giving the three worlds." },
        },
        {
          text: "तुम अपने पति के साथ इसी व्रत को धारण करो। इससे तुम्हें अवश्य ही सिद्धि और अंत में स्वर्ग की प्राप्ति होगी। कौण्डिन्य ऋषि के वचनानुसार ब्राह्मण और उसकी स्त्री ने परमा एकादशी का पांच दिन तक व्रत किया। व्रत पूर्ण होने पर ब्राह्मण की स्त्री ने एक राजकुमार को अपने यहाँ आते देखा।",
          meaning: { en: "You and your husband should take up this same vrata; you will surely gain success and heaven in the end. As the sage Kaundinya had said, the brahmin and his wife kept the Parama Ekadashi for five days. When the vrata was complete the brahmin's wife saw a prince coming to them." },
        },
        {
          text: "राजकुमार ने ब्रह्माजी की प्रेरणा से एक उत्तम घर जो कि सब वस्तुओं से परिपूर्ण था, उन्हें रहने के लिए दिया। तदुपरांत राजकुमार ने आजीविका के लिए एक गांव दिया। इस प्रकार ब्राह्मण और उसकी स्त्रीकी गरीबी दूर हो गई और पृथ्वी पर काफी वर्षों तक सुख भोगने के पश्चात वे पति-पत्नी श्रीविष्णु के उत्तम लोक को प्रस्थान कर गए।",
          meaning: { en: "At Brahma's inspiration the prince gave them an excellent house full of everything to live in, and then gave them a village for their livelihood. So the poverty of the brahmin and his wife ended, and after enjoying happiness on earth for many years the couple departed to Lord Vishnu's excellent world." },
        },
      ],
    },
  ],
};
