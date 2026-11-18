/**
 * Somvar (Monday) vrata for Śiva: the outline of the puja and the kathā of the sāhūkār and his son, in Hindi.
 * Collated Nov 2026 from typed web copies; not proofread against a single printed booklet.
 *
 * WITNESSES
 *   S  shubhpanchang.com/hi/vrat-kathas/monday (the sāhūkār's Monday vrata; son's life of twelve years; Kāśī). Base.
 *   P  patrika.com, "Ancient Sawan Somvar katha" (the same plot, fuller on the sāhūkār's silence, the dupaṭṭā and the oath
 *      to leap from the roof).
 *   B  bhaktibharat.com, "Somvar Vrat Katha" (a 'vyāpārī' instead of sāhūkār; the son's life is sixteen years; Śiva appears to the
 *      father in a dream already at the boon; the boy dies at sixteen).
 *   H  hindupad.com, "Somvar Vrat Katha" (English abstract: twelve years; Kāśī; the letter to the princess).
 *   R  Puja outline (general practice only, from search summaries of amarujala.com, navbharatlive.com and smartpuja.com
 *      Śiva-pūjā pages: bilva leaves, jal and pañcāmṛta abhiṣeka, "ॐ नमः शिवाय", one meal; these pages were not opened and the
 *      outline is therefore uncertain), and the mantras ॐ नमः शिवाय and ॐ शिवायै नमः as in the Karva Chauth pages
 *      (hindupad.com, amarujala.com, aajtak.in).
 *
 * CHOICES. S, P and H agree on twelve years and on the uncle-and-nephew journey to Kāśī with yajñas; B alone gives sixteen and
 * is not followed (a different recension, with the wedding told in other words). S and P are followed paragraph by paragraph;
 * a detail present only in P (the oath of the parents to give up life if the son died, and the uncle's oath that convinces
 * them) is kept since it is the base of the closing scene. The ending phalaśruti ("हे श्रेष्ठी, मैंने तेरे सोमवार के व्रत…")
 * is in S, P and B with small differences; S's wording is used. Spelling is lightly normalised. Meanings are original.
 */
import type { Mantra } from '../types';

export const somvarVrat: Mantra = {
  id: 'somvar-vrat',
  title: 'सोमवार व्रत कथा',
  titleEn: 'Somvar (Monday) Vrat Katha',
  category: 'puja',
  order: 62,
  deity: 'Śrī Śiva',
  source: 'North Indian vrata-kathā for Monday (Somavāra), in honour of Śiva and Pārvatī; popular printed and web copies',
  summary:
    'The Monday fast for Shiva: a short outline of the puja and the katha of the childless moneylender who fasted every Monday, the boon of a son who was to live only twelve years, the son\'s false marriage in a strange city, his death at Kashi, and Parvati\'s plea that brought him back to life.',
  difficulty: 'easy',
  completeness: 'partial',
  contentNote:
    'The puja is given only as a brief outline of general practice (bath, Shiva-Parvati puja with water, bilva leaves and the five-syllable mantra, a single meal after the evening puja, hearing the katha); regional and family rules differ. The separate Solah (sixteen) Somvar katha and its udyapana are not included.',
  sections: [
    {
      title: 'व्रत का विधान',
      titleEn: 'The fast and the puja in outline',
      note: 'General practice only; families follow their own tradition.',
      verses: [
        {
          text: 'सोमवार का व्रत भगवान शिव और माता पार्वती को समर्पित है। इस दिन स्नान करके शिव-पार्वती की पूजा करें और व्रत रखें।',
          meaning: { en: 'The Monday fast is dedicated to Lord Shiva and Mother Parvati. On this day bathe, worship Shiva and Parvati, and keep the fast.' },
        },
        {
          text: 'शिवलिंग पर पहले जल, फिर पंचामृत से अभिषेक करें और कम से कम तीन बेलपत्र चढाएँ। पूजा में ॐ नमः शिवाय मन्त्र का जप करें; पार्वती के लिए ॐ शिवायै नमः बोलें।',
          meaning: { en: 'Pour water on the Shivalinga first and then pañcamrita, and offer at least three bilva leaves. Repeat the mantra Om namah Shivaya in the worship; for Parvati say Om Shivayai namah.' },
        },
        {
          text: 'शाम के समय शिव मन्दिर में घी का दीपक जलाएँ। व्रत में एक ही समय भोजन करने की परम्परा है। पूजा के बाद व्रत की कथा सुनें या पढें।',
          meaning: { en: 'In the evening light a ghee lamp at the Shiva temple. The custom is to take only one meal during the fast. After the puja listen to or read the vrata katha.' },
        },
      ],
    },
    {
      title: 'सोमवार व्रत कथा',
      titleEn: 'The katha of the moneylender and his son',
      note: 'Heard on each Monday of the fast.',
      verses: [
        {
          text: 'एक बार किसी नगर में एक साहूकार रहता था। उसके घर धन की कोई कमी नहीं थी, पर कोई सन्तान न होने के कारण वह बहुत दुःखी रहता था। सन्तान की कामना से वह प्रत्येक सोमवार को व्रत रखता था और पूरी श्रद्धा के साथ शिव मन्दिर जाकर भगवान शिव और माता पार्वती की पूजा करता था।',
          meaning: { en: 'Once a moneylender lived in a certain city. He lacked no wealth, but he was very unhappy at having no child. Wishing for a child, he kept the fast every Monday, and with full faith went to the Shiva temple and worshipped Lord Shiva and Mother Parvati.' },
        },
        {
          text: 'उसकी भक्ति देखकर एक दिन माता पार्वती ने प्रसन्न होकर भगवान शिव से कहा कि प्रभु, यह आपका अनन्य भक्त है, इसकी मनोकामना पूरी कीजिए। शिव ने कहा कि हे पार्वती, इस संसार में हर प्राणी को उसके कर्मों का फल मिलता है, और जिसके भाग्य में जो है वह उसे भोगना ही पडता है।',
          meaning: { en: 'Seeing his devotion, Mother Parvati one day said to Lord Shiva, "Lord, he is your exclusive devotee; grant his wish." Shiva said, "Parvati, every being in this world receives the fruit of his own deeds, and what is in one\'s fate one must undergo."' },
        },
        {
          text: 'पर पार्वती जी ने साहूकार की भक्ति देखकर उसकी मनोकामना पूरी करने का आग्रह फिर-फिर किया। माता के आग्रह पर शिव ने साहूकार को पुत्र-प्राप्ति का वरदान दे दिया, परन्तु बताया कि यह बालक बारह वर्ष तक ही जीवित रहेगा।',
          meaning: { en: 'But Parvati, moved by the moneylender\'s devotion, pressed again and again to grant his wish. At the Mother\'s insistence Shiva gave the moneylender the boon of a son, but said that the child would live only twelve years.' },
        },
        {
          text: 'माता पार्वती और भगवान शिव की यह बातचीत साहूकार सुन रहा था, इसलिए उसे न इस वरदान की खुशी हुई, न दुःख। वह पहले की तरह शिव की पूजा करता रहा। कुछ समय बाद साहूकार की पत्नी ने एक पुत्र को जन्म दिया। परिवार में बडा आनन्द मनाया गया, पर साहूकार ने बालक की बारह वर्ष की आयु की बात किसी से नहीं कही।',
          meaning: { en: 'The moneylender had overheard this talk of Parvati and Shiva, so he felt neither joy nor grief at the boon. He went on worshipping Shiva as before. After some time his wife gave birth to a son. There was great rejoicing in the family, but the moneylender told no one that the boy had only twelve years.' },
        },
        {
          text: 'जब बालक ग्यारह वर्ष का हुआ तो साहूकार ने उसे पढने के लिए काशी भेजने का निश्चय किया। उसने बालक के मामा को बुलाकर बहुत सारा धन दिया और कहा कि इसे काशी विद्या प्राप्त करने के लिए ले जाओ, और रास्ते में जहाँ ठहरो वहाँ यज्ञ कराते और ब्राह्मणों को भोजन-दक्षिणा देते हुए जाना।',
          meaning: { en: 'When the boy was eleven, the moneylender decided to send him to Kashi to study. He called the boy\'s maternal uncle, gave him much money, and said, "Take him to Kashi for learning, and on the way, wherever you halt, have a yajna performed and give brahmins food and gifts."' },
        },
        {
          text: 'मामा-भांजे इसी तरह यज्ञ कराते और ब्राह्मणों को दान-दक्षिणा देते काशी की ओर चल पडे। रास्ते में एक नगर पडा जहाँ राजा की कन्या का विवाह था। जिस राजकुमार से उसका विवाह होना था वह एक आँख से काना था। राजकुमार के पिता ने बेटे के काने होने की बात छिपाने के लिए सोचा कि क्यों न साहूकार के पुत्र को दूल्हा बनाकर राजकुमारी से विवाह करा दूँ और बाद में उसे धन देकर विदा कर दूँगा।',
          meaning: { en: 'Uncle and nephew travelled towards Kashi, performing yajnas and giving gifts to brahmins. On the way they came to a city where a king\'s daughter was to be married. The prince she was to marry was blind in one eye. To hide his son\'s defect the prince\'s father thought: "Why not have the moneylender\'s son marry the princess as bridegroom? Afterwards I shall pay him and send him away."' },
        },
        {
          text: 'लडके को दूल्हे के वस्त्र पहनाकर राजकुमारी से विवाह करा दिया गया। साहूकार का पुत्र ईमानदार था। उसे यह बात ठीक नहीं लगी, इसलिए उसने अवसर पाकर राजकुमारी की चुनरी के पल्ले पर लिख दिया कि तुम्हारा विवाह तो मेरे साथ हुआ है, पर जिस राजकुमार के साथ तुम्हें भेजा जाएगा वह एक आँख से काना है; मैं तो काशी पढने जा रहा हूँ।',
          meaning: { en: 'The boy was dressed as a bridegroom and married to the princess. The moneylender\'s son was honest and did not think this right, so when he had the chance he wrote on the end of the princess\'s veil: "You were married to me, but the prince with whom you will be sent is blind in one eye; I am going to Kashi to study."' },
        },
        {
          text: 'जब राजकुमारी ने चुनरी पर लिखी बात पढी तो उसने काने राजकुमार के साथ जाने से इनकार कर दिया और माता-पिता को सारी बात बताई। राजा ने अपनी पुत्री को विदा नहीं किया, और बारात वापस लौट गई। उधर साहूकार का लडका और उसका मामा काशी पहुँचे और वहाँ उन्होंने यज्ञ किया।',
          meaning: { en: 'When the princess read what was written on her veil, she refused to go with the one-eyed prince and told her parents the whole matter. The king did not send his daughter away, and the wedding party went home. Meanwhile the moneylender\'s son and his uncle reached Kashi and performed a yajna there.' },
        },
        {
          text: 'जिस दिन लडका बारह वर्ष का हुआ उस दिन भी यज्ञ का आयोजन था। लडके ने मामा से कहा कि मेरी तबीयत ठीक नहीं है। मामा ने कहा कि अन्दर जाकर आराम कर लो। शिव के वरदान के अनुसार कुछ ही देर में उस बालक के प्राण निकल गए। मृत भांजे को देखकर मामा विलाप करने लगा।',
          meaning: { en: 'On the day the boy turned twelve, a yajna was again being held. The boy told his uncle he was unwell, and the uncle said, "Go in and rest." According to Shiva\'s boon the boy\'s life left him in a short while. Seeing his dead nephew, the uncle began to wail.' },
        },
        {
          text: 'संयोग से उसी समय शिव और माता पार्वती उधर से जा रहे थे। पार्वती ने शिव से कहा कि स्वामी, मुझे इसके रोने का स्वर सहन नहीं हो रहा, आप इसका कष्ट अवश्य दूर कीजिए। शिव ने मृत बालक के पास जाकर कहा कि यह उसी साहूकार का पुत्र है जिसे मैंने बारह वर्ष की आयु का वरदान दिया था; इसकी आयु पूरी हो चुकी है।',
          meaning: { en: 'By chance, Shiva and Mother Parvati were passing that way at that time. Parvati said, "Lord, I cannot bear the sound of his weeping; please remove this man\'s sorrow." Shiva went to the dead boy and said, "This is the son of that same moneylender to whom I gave a boon of twelve years; his span is over."' },
        },
        {
          text: 'परन्तु माता के भाव से भरी पार्वती ने कहा कि हे महादेव, आप इस बालक को और आयु देने की कृपा करें, नहीं तो इसके वियोग में इसके माता-पिता भी तडप-तडपकर मर जाएँगे। पार्वती के बार-बार आग्रह पर शिव ने बालक को जीवित होने का वरदान दिया, और शिव की कृपा से वह लडका जीवित हो गया।',
          meaning: { en: 'But Parvati, filled with a mother\'s feeling, said, "O Mahadeva, please grant this boy more life, or his parents, in grief at losing him, will die in agony." At her repeated entreaty Shiva gave the boy the boon of life, and by Shiva\'s grace the boy came alive.' },
        },
        {
          text: 'शिक्षा पूरी करके लडका मामा के साथ अपने नगर की ओर लौट चला। चलते-चलते दोनों उसी नगर में पहुँचे जहाँ उसका विवाह हुआ था। वहाँ भी उन्होंने यज्ञ का आयोजन किया। लडके के ससुर ने उसे पहचान लिया, उसे महल में ले जाकर उसका आदर-सत्कार किया, और अपनी पुत्री को उसके साथ विदा किया।',
          meaning: { en: 'Having finished his studies, the boy set out for home with his uncle. They came to the very city where he had been married, and held a yajna there too. The boy\'s father-in-law recognised him, took him into the palace, entertained him, and sent his daughter off with him.' },
        },
        {
          text: 'इधर साहूकार और उसकी पत्नी भूखे-प्यासे रहकर बेटे की राह देख रहे थे। उन्होंने प्रण कर रखा था कि यदि बेटे की मृत्यु का समाचार मिला तो वे भी छत से कूदकर प्राण त्याग देंगे। तभी बेटे और बहू के आने का समाचार मिला, और जब वे नहीं माने तो मामा ने शपथ पूर्वक कहा, तब उन्हें विश्वास हुआ और उन्होंने बेटे-बहू का स्वागत किया।',
          meaning: { en: 'Meanwhile the moneylender and his wife, hungry and thirsty, were waiting for their son. They had vowed that if they heard of his death they would leap from the roof and give up their lives. Then news came that the son and his wife were arriving; when they would not believe it, the uncle spoke on oath, and only then did they believe and welcome the son and daughter-in-law.' },
        },
        {
          text: 'उसी रात साहूकार को स्वप्न में भगवान शिव ने दर्शन देकर कहा कि हे श्रेष्ठी, मैंने तेरे सोमवार के व्रत करने और व्रतकथा सुनने से प्रसन्न होकर तेरे पुत्र को लम्बी आयु प्रदान की है। इसी प्रकार जो कोई सोमवार का व्रत करता है या कथा सुनता और पढता है, उसके सब दुःख दूर होते हैं और सब मनोकामनाएँ पूर्ण होती हैं।',
          meaning: { en: 'That same night Lord Shiva appeared to the moneylender in a dream and said: "O merchant, pleased with your Monday fasts and your hearing of the vrata katha, I have given your son long life. In the same way, whoever keeps the Monday fast, or hears or reads this katha, has all his sorrows removed and all his wishes fulfilled."' },
        },
      ],
    },
  ],
};
