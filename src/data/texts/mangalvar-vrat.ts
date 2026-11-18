/**
 * Mangalvar (Tuesday) vrata for Hanumān: the outline of the puja and the kathā of the childless Brahmin couple, in Hindi.
 * Collated Nov 2026 from typed web copies; not proofread against a single printed booklet.
 *
 * WITNESSES
 *   S  shubhpanchang.com/hi/vrat-kathas/tuesday ("मंगलवार व्रत कथा"). Base.
 *   B  bhaktibharat.com, "मंगलवार व्रत कथा (Mangalwar Vrat Katha)". Word for word the same as S apart from commas.
 *   H  hindupad.com, "Mangalvar Vrat Katha in Hindi" (another recension with names: the Brahmin Keśavadatta of Ṛṣinagara,
 *      his wife Añjali, the son Maṅgalaprasāda; the boy is thrown into a well while bathing; Hanumān rebukes the father in a
 *      dream). Read for comparison; its names and extra scenes are not mixed into the base.
 *   N  navbharatlive.com, "Tuesday Fast Benefits" (14 Apr 2026): puja outline (bath before dawn, red clothes, ghee lamp, sindur,
 *      jasmine oil, a garland of eleven or twenty-one betel leaves, besan laddu or boondi, Rāma-nāma japa, katha, ārtī;
 *      fasting without ordinary salt, a wheat-and-jaggery meal after the evening puja). The names of the three Tuesday
 *      recitals (Chalisa, Bajrang Baan, Sankatmochan Ashtak) are from B.
 *
 * CHOICES. S and B agree and are followed paragraph by paragraph; H is a longer recension of the same plot and is not
 * followed where it differs (names, the well at the bathing place). The closing phalaśruti is S/B's. The puja outline rests on
 * N alone and is therefore uncertain in its details. Spelling is lightly normalised (no nukta: लडका, पडी, not the dotted
 * forms; standard anusvāra). Meanings are original.
 */
import type { Mantra } from '../types';

export const mangalvarVrat: Mantra = {
  id: 'mangalvar-vrat',
  title: 'मंगलवार व्रत कथा',
  titleEn: 'Mangalvar (Tuesday) Vrat Katha',
  category: 'puja',
  order: 66,
  deity: 'Śrī Hanumān',
  source: 'North Indian vrata-kathā for Tuesday (Maṅgalavāra), in honour of Hanumān; popular printed and web copies',
  summary:
    'The Tuesday fast for Hanuman: a brief outline of the puja and the katha of the childless Brahmin couple, the wife who kept her Tuesday vow through six days of hunger, the son Mangal given by Hanuman, the husband\'s doubt that threw the boy into a well, and the dream that set it right.',
  difficulty: 'easy',
  completeness: 'partial',
  contentNote:
    'The puja is given only as a brief outline of general practice (red clothes, lamp, sindur and jasmine oil, a garland of betel leaves, one salt-free meal after the evening puja); families and regions differ. The Hanuman Chalisa, Bajrang Baan and Sankatmochan Ashtak, which are read on Tuesdays, are not included here. The separate story of the old woman\'s test (Bhaum Pradosh) is in the Pradosh text.',
  sections: [
    {
      title: 'व्रत का विधान',
      titleEn: 'The fast and the puja in outline',
      note: 'General practice only; families follow their own tradition.',
      verses: [
        {
          text: 'मंगलवार का व्रत हनुमान जी को समर्पित है। इस दिन ब्रह्म मुहूर्त में उठकर स्नान करें, लाल वस्त्र पहनें और पूजा का स्थान गंगाजल से शुद्ध करके हनुमान जी की प्रतिमा या चित्र स्थापित करें।',
          meaning: { en: 'The Tuesday fast is dedicated to Hanuman. On this day rise at the brahma muhurta, bathe, put on red clothes, purify the place of worship with Ganges water and set up an image or picture of Hanuman.' },
        },
        {
          text: 'घी का दीपक जलाकर सिन्दूर, चमेली का तेल, लाल फूल और ग्यारह या इक्कीस पान के पत्तों की माला चढाएँ। भोग में बेसन के लड्डू या बूँदी रखें।',
          meaning: { en: 'Light a ghee lamp and offer sindur, jasmine oil, red flowers and a garland of eleven or twenty-one betel leaves. For the offering of food keep besan laddus or boondi.' },
        },
        {
          text: 'राम नाम का जप करते हुए पूजा करें, फिर व्रत की कथा सुनें या पढें और आरती के साथ पूजा पूरी करें। हनुमान चालीसा, बजरंग बाण और संकटमोचन अष्टक का पाठ भी इस दिन प्रमुख माना जाता है।',
          meaning: { en: 'Worship while repeating the name of Rama, then listen to or read the vrata katha and complete the puja with the arati. Reading the Hanuman Chalisa, Bajrang Baan and Sankatmochan Ashtak is also held to be important on this day.' },
        },
        {
          text: 'व्रत में दिन भर अन्न न लें और साधारण नमक का प्रयोग न करें। शाम की पूजा के बाद बिना नमक का गेहूँ और गुड का भोजन करें।',
          meaning: { en: 'During the fast take no grain through the day and use no ordinary salt. After the evening puja eat a meal of wheat and jaggery without salt.' },
        },
      ],
    },
    {
      title: 'मंगलवार व्रत कथा',
      titleEn: 'The katha of the Brahmin couple and the boy Mangal',
      note: 'Heard on each Tuesday of the fast.',
      verses: [
        {
          text: 'एक समय की बात है, एक ब्राह्मण दम्पति की कोई सन्तान नहीं थी, इस कारण वे बहुत दुःखी रहते थे। एक बार ब्राह्मण हनुमान जी की पूजा करने वन में गया और पूजा के साथ उसने महावीर जी से एक पुत्र की कामना की।',
          meaning: { en: 'Once a Brahmin couple had no child and were very unhappy on that account. One day the Brahmin went to the forest to worship Hanuman, and along with the worship he asked Mahavir for a son.' },
        },
        {
          text: 'घर पर उसकी स्त्री भी पुत्र पाने के लिए मंगलवार का व्रत करती थी। वह मंगलवार को व्रत के अन्त में हनुमान जी को भोग लगाकर ही भोजन करती थी।',
          meaning: { en: 'At home his wife too kept the Tuesday fast for the sake of a son. At the end of each Tuesday\'s fast she ate only after offering food to Hanuman.' },
        },
        {
          text: 'एक बार व्रत के दिन ब्राह्मणी न भोजन बना सकी और न हनुमान जी को भोग लगा सकी। उसने प्रण किया कि अगले मंगलवार को हनुमान जी को भोग लगाकर ही भोजन करूँगी।',
          meaning: { en: 'Once on a fast day the Brahmin woman could neither cook nor make the offering to Hanuman. She vowed that she would eat only after offering food to Hanuman on the next Tuesday.' },
        },
        {
          text: 'वह भूखी-प्यासी छह दिन तक पडी रही और मंगलवार के दिन बेहोश हो गई। हनुमान जी उसकी निष्ठा और लगन को देखकर प्रसन्न हुए।',
          meaning: { en: 'Hungry and thirsty she lay for six days, and on the Tuesday she fell unconscious. Seeing her steadfastness and devotion, Hanuman was pleased.' },
        },
        {
          text: 'उन्होंने आशीर्वाद के रूप में ब्राह्मणी को एक पुत्र दिया और कहा कि यह तुम्हारी बहुत सेवा करेगा। बालक को पाकर ब्राह्मणी बहुत प्रसन्न हुई और उसने उसका नाम मंगल रखा।',
          meaning: { en: 'As a blessing he gave the Brahmin woman a son and said, "He will serve you well." Getting the child, the Brahmin woman was overjoyed and named him Mangal.' },
        },
        {
          text: 'कुछ समय बाद जब ब्राह्मण घर आया तो बालक को देखकर उसने पूछा कि यह कौन है। पत्नी ने कहा कि मंगलवार के व्रत से प्रसन्न होकर हनुमान जी ने मुझे यह बालक दिया है।',
          meaning: { en: 'Some time later the Brahmin came home, saw the child and asked who he was. His wife said, "Pleased with my Tuesday fast, Hanuman has given me this boy."' },
        },
        {
          text: 'ब्राह्मण को पत्नी की बात पर विश्वास नहीं हुआ। एक दिन अवसर देखकर उसने बालक को कुएँ में गिरा दिया।',
          meaning: { en: 'The Brahmin did not believe his wife\'s words. One day, seeing his chance, he dropped the boy into a well.' },
        },
        {
          text: 'घर लौटने पर ब्राह्मणी ने पूछा कि मंगल कहाँ है। तभी पीछे से मंगल मुस्कुराता हुआ आ गया। उसे वापस देखकर ब्राह्मण आश्चर्य में पड गया।',
          meaning: { en: 'When he returned home the Brahmin woman asked where Mangal was. Just then Mangal came in smiling from behind. Seeing him back, the Brahmin was amazed.' },
        },
        {
          text: 'रात को हनुमान जी ने ब्राह्मण को स्वप्न में दर्शन दिए और बताया कि यह पुत्र उसे उन्होंने ही दिया है। सच जानकर ब्राह्मण बहुत प्रसन्न हुआ और इसके बाद दोनों पति-पत्नी हर मंगलवार को व्रत रखने लगे।',
          meaning: { en: 'At night Hanuman appeared to the Brahmin in a dream and told him that it was he who had given the son. Learning the truth the Brahmin was very glad, and thereafter husband and wife both kept the fast every Tuesday.' },
        },
        {
          text: 'जो मनुष्य मंगलवार की व्रत कथा पढता या सुनता है और नियम से व्रत रखता है, उसके सब कष्ट हनुमान जी की कृपा से दूर हो जाते हैं, उसे सब सुख मिलते हैं और वह हनुमान जी की दया का पात्र बनता है।',
          meaning: { en: 'Whoever reads or hears the Tuesday vrata katha and keeps the fast with discipline has all his troubles removed by Hanuman\'s grace, gains every comfort and becomes worthy of Hanuman\'s compassion.' },
        },
      ],
    },
  ],
};
