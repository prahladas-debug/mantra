/**
 * Karva Chauth vrata: the day's rites, the kathā of Vīrāvatī and the short kathā of Karvā, in Hindi (Devanagari).
 * Collated Nov 2026 from typed web copies; not proofread against a single printed booklet.
 *
 * WITNESSES
 *   D  drikpanchang.com, Karwa Chauth katha (hi): "वीरावती एवं उसके सात भाईयों की कथा". Base for the Vīrāvatī kathā.
 *   I  indiatv.in, "Karwa Chauth Vrat Katha In Hindi" (Veeravati aur saat bhaiyon ki sampurn kahani).
 *   H  haribhoomi.com, "Karwa Chauth Katha 2026" (Vīrāvatī, Karvā Mātā, Śiva–Pārvatī): Karvā kathā.
 *   P  panchangbodh.com and shubhpanchang.com (hi) Karwa Chauth pages: short Karvā/crocodile kathā and Vīrāvatī in brief.
 *   A  aajtak.in and patrika.com: the other, "sahukar's seven sons" version (read for comparison only, not included).
 *   R  Rites: amarujala.com (2021 and 2023 puja-vidhi pages), hindupad.com (karva-chauth vrata vidhi), aajtak.in (2025 arghya vidhi).
 *
 * CHOICES. Vīrāvatī kathā: D and I agree sentence by sentence (the brother on the banyan tree with sieve and lamp, hair /
 * sneeze / summons in three morsels, Indrāṇī's counsel); H and P tell it more briefly (the peepal and lamp, the same omens).
 * Spelling वीरावती (D I H; P also वीरवती). I's detail that she refused food before moonrise is kept. Karvā kathā: H, P and the
 * panchangbodh summary agree (crocodile bound with raw thread, Yama, boon of long life). Sankalpa: "मम सुखसौभाग्यपुत्र-
 * पौत्रादिसुस्थिरश्रीप्राप्तये करकचतुर्थीव्रतमहं करिष्ये" in two amarujala pages (one prints कर्क for करक; करक = karvā is kept).
 * The five name-mantras (ॐ शिवायै नमः, ॐ नमः शिवाय, ॐ षण्मुखाय नमः, ॐ गणेशाय नमः, ॐ सोमाय नमः) are in amarujala,
 * hindupad and aajtak. The longer couplet "नमस्त्यै शिवायै शर्वाण्यै…" appears in one copy only and is left out.
 * Spelling is lightly normalised (no nukta, standard anusvāra); wording follows the printed copies. Meanings are original.
 */
import type { Mantra } from '../types';

export const karvaChauthVrat: Mantra = {
  id: 'karva-chauth-vrat',
  title: 'करवा चौथ व्रत कथा',
  titleEn: 'Karva Chauth Vrat Katha',
  category: 'puja',
  order: 60,
  deity: 'Śrī Gaurī',
  source: 'North Indian vrata-kathā (Kārttika kṛṣṇa caturthī, pūrṇimānta); popular printed and web copies',
  summary:
    'Karva Chauth, the fast kept by married women on Kartika krishna chaturthi (purnimanta) for the long life of their husbands: the pre-dawn sargi, the day-long fast, the evening puja with Gauri, Ganesha and the karva, the katha of Veeravati and the short katha of Karva, and the moon arghya that ends the fast.',
  difficulty: 'easy',
  completeness: 'partial',
  contentNote:
    'The evening puja is given in outline (sankalpa, the five name-mantras, the karva rites) and the kathā is the Veeravati story with the short Karva story. The other widely told "sahukar\'s seven sons and one daughter" version, the verse-form arghya couplets sung in some families, and the Karva Mata aarti are not included.',
  sections: [
    {
      title: 'व्रत और पूजा का विधान',
      titleEn: 'The day and the evening puja',
      note: 'Kartika krishna chaturthi (purnimanta). Only the outline of the day is given; families follow their own sequence of rites.',
      verses: [
        {
          text: 'कार्तिक कृष्ण चतुर्थी को करकचतुर्थी (करवा चौथ) का व्रत किया जाता है। सुहागिन स्त्रियाँ पति की आयु, स्वास्थ्य और सौभाग्य की कामना से यह व्रत रखती हैं।',
          meaning: { en: 'The Karaka-chaturthi (Karva Chauth) fast is kept on the fourth day of the dark half of Kartika. Married women keep it for the long life, health and good fortune of their husbands.' },
        },
        {
          text: 'सूर्योदय से पहले उठकर स्नान करें और सास द्वारा दी गई सरगी, यानी फल, मिठाई, मठरी, मेवे और नारियल आदि, सूर्योदय से पहले खा लें। फिर पूरे दिन निर्जल व्रत रखें।',
          meaning: { en: 'Rise before sunrise and bathe. Eat the sargi given by the mother-in-law (fruit, sweets, mathri, dry fruit, coconut and so on) before sunrise, and then keep the fast through the day without even water.' },
        },
        {
          text: 'मम सुखसौभाग्यपुत्रपौत्रादिसुस्थिरश्रीप्राप्तये करकचतुर्थीव्रतमहं करिष्ये ।',
          meaning: { en: 'For my happiness and good fortune, and for lasting prosperity with sons and grandsons, I shall keep the Karaka-chaturthi vrata. (The resolve taken at the start of the puja.)' },
        },
        {
          text: 'सायंकाल पूजा-स्थान पर गेहूँ से फलक बनाएँ और पीली मिट्टी से गौरी की मूर्ति बनाकर उनकी गोद में गणेश जी को बैठाएँ। गौरी को चौकी पर स्थापित करके लाल चुनरी ओढाएँ और शृंगार का सामान चढाएँ। उनके आगे जल से भरा कलश और टोंटीदार करवा रखें।',
          meaning: { en: 'In the evening, draw a panel with wheat at the place of worship, make an image of Gauri from yellow clay with Ganesha in her lap, set her on a low seat, drape her in a red chunri and offer the adornments. Place a pot of water and the spouted karva before her.' },
        },
        {
          text: 'बालू या सफेद मिट्टी की वेदी पर शिव-पार्वती, स्वामी कार्तिकेय, गणेश और चन्द्रमा की स्थापना करें। मूर्ति न हो तो सुपारी पर नाडा बाँधकर देवता की भावना से स्थापित करें।',
          meaning: { en: 'On an altar of sand or white clay, install Shiva and Parvati, Svami Kartikeya, Ganesha and the Moon. If there are no images, tie a thread round a betel nut and install it as the deity.' },
        },
        {
          text: 'ॐ शिवायै नमः । (पार्वती)\nॐ नमः शिवाय । (शिव)\nॐ षण्मुखाय नमः । (कार्तिकेय)\nॐ गणेशाय नमः । (गणेश)\nॐ सोमाय नमः । (चन्द्रमा)',
          meaning: { en: 'With these five salutations worship Parvati, Shiva, Kartikeya, Ganesha and the Moon in turn: Om, salutation to Shivā; Om, salutation to Shiva; Om, salutation to the six-faced one; Om, salutation to Ganesha; Om, salutation to Soma.' },
        },
        {
          text: 'कथा सुनने से पहले करवे पर रोली से सतिया बनाएँ और तेरह बिन्दियाँ लगाएँ। कथा सुनते समय हाथ पर गेहूँ या चावल के तेरह दाने रखें।',
          meaning: { en: 'Before the katha, mark the karva with a swastika in roli and put thirteen dots on it. While listening to the katha, hold thirteen grains of wheat or rice in the hand.' },
        },
        {
          text: 'करवों में लड्डू का नैवेद्य रखकर अर्पित करें। एक लोटा, एक वस्त्र और एक विशेष करवा दक्षिणा के रूप में अर्पित करके पूजन पूरा करें। फिर करवा चौथ की कथा पढें या सुनें।',
          meaning: { en: 'Put laddu as the offering in the karvas and present it. Complete the worship by offering a lota, a cloth and a special karva as the gift. Then read or listen to the Karva Chauth katha.' },
        },
      ],
    },
    {
      title: 'वीरावती एवं उसके सात भाइयों की कथा',
      titleEn: 'The katha of Veeravati and her seven brothers',
      note: 'Heard in the evening puja, before the moon is seen.',
      verses: [
        {
          text: 'बहुत समय पहले इन्द्रप्रस्थपुर के एक शहर में वेदशर्मा नाम का एक ब्राह्मण रहता था। वेदशर्मा का विवाह लीलावती से हुआ था, जिससे उसके सात पुत्र और वीरावती नाम की एक गुणवती पुत्री थी। सात भाइयों की वह अकेली बहन थी, इसलिए माता-पिता के साथ-साथ भाइयों की भी लाडली थी।',
          meaning: { en: 'Long ago, in a town of Indraprasthapura, there lived a brahmin named Vedasharma. He was married to Lilavati, and they had seven sons and a virtuous daughter named Veeravati. As the only sister of seven brothers she was the darling of her parents and of her brothers alike.' },
        },
        {
          text: 'जब वह विवाह के योग्य हुई तो उसका विवाह एक योग्य ब्राह्मण युवक से कर दिया गया। विवाह के बाद वीरावती जब माता-पिता के यहाँ आई हुई थी, तब उसने अपनी भाभियों के साथ पति की लम्बी आयु के लिए करवा चौथ का व्रत रखा। व्रत के बीच उसे भूख सहन नहीं हुई और कमजोरी के कारण वह मूर्छित होकर भूमि पर गिर पडी।',
          meaning: { en: 'When she came of age she was married to a suitable young brahmin. After the marriage, while she was staying at her parents\' house, she kept the Karva Chauth fast with her sisters-in-law for her husband\'s long life. During the fast she could not bear the hunger and, weak as she was, fainted and fell to the ground.' },
        },
        {
          text: 'भाइयों से अपनी प्यारी बहन की यह दयनीय दशा सहन नहीं हुई। उन्होंने उससे कहा कि चन्द्रमा निकलने से पहले ही कुछ खा ले, पर उसने साफ मना कर दिया। वह पतिव्रता थी और कहती थी कि चन्द्रमा के दर्शन किए बिना भोजन नहीं करेगी, चाहे प्राण ही क्यों न निकल जाएँ। तब सब भाइयों ने मिलकर एक उपाय सोचा जिससे बहन भोजन कर ले।',
          meaning: { en: 'The brothers could not bear to see their dear sister in such a state. They asked her to eat something before the moon rose, but she flatly refused: she was a devoted wife and would not take food without seeing the moon, even if her life should leave her. So the brothers together thought of a plan by which their sister might eat.' },
        },
        {
          text: 'उनमें से एक भाई घर से कुछ दूर एक वट के वृक्ष पर हाथ में छलनी और दीपक लेकर चढ गया। जब वीरावती मूर्छा से जागी तो बाकी भाइयों ने उससे कहा कि चन्द्रोदय हो गया है, और उसे चन्द्रमा के दर्शन कराने के लिए छत पर ले आए।',
          meaning: { en: 'One of them climbed a banyan tree some distance from the house with a sieve and a lamp in his hand. When Veeravati came round from her faint, the other brothers told her that the moon had risen and brought her to the roof to see it.' },
        },
        {
          text: 'वीरावती ने कुछ दूर वट के वृक्ष पर छलनी के पीछे दीपक को देखकर मान लिया कि चन्द्रमा वृक्ष के पीछे निकल आया है। भूख से व्याकुल उसने तुरन्त दीपक को ही चन्द्रमा समझकर अर्घ्य अर्पित किया और अपना व्रत तोड दिया।',
          meaning: { en: 'Seeing the lamp behind the sieve on the banyan tree in the distance, Veeravati believed that the moon had come up behind the tree. Wild with hunger, she at once took the lamp for the moon, offered the arghya, and broke her fast.' },
        },
        {
          text: 'जब वीरावती ने भोजन करना आरम्भ किया तो उसे अशुभ संकेत मिलने लगे। पहले कौर में उसे बाल मिला, दूसरे कौर में उसे छींक आई और तीसरे कौर में ससुराल से बुलावा आ गया। जब वह पहली बार ससुराल पहुँची तो उसने अपने पति को मृत पाया।',
          meaning: { en: 'As Veeravati began to eat, she met with bad omens. In the first morsel she found a hair, at the second she sneezed, and at the third a summons came from her husband\'s house. When she reached her in-laws\' home for the first time, she found her husband dead.' },
        },
        {
          text: 'पति के मृत शरीर को देखकर वीरावती रोने लगी और करवा चौथ के व्रत में हुई अपनी किसी भूल के लिए स्वयं को दोषी ठहराकर विलाप करने लगी। उसका विलाप सुनकर इन्द्र की पत्नी देवी इन्द्राणी उसे सान्त्वना देने के लिए आईं।',
          meaning: { en: 'Seeing her husband\'s lifeless body, Veeravati wept, blaming herself for some fault in the Karva Chauth fast, and lamented. Hearing her cries, the goddess Indrani, wife of Indra, came to console her.' },
        },
        {
          text: 'वीरावती ने इन्द्राणी से पूछा कि करवा चौथ के दिन ही उसके पति की मृत्यु क्यों हुई, और वह उनसे अपने पति को जीवित करने की विनती करने लगी। उसका दुःख देखकर इन्द्राणी ने कहा कि तूने चन्द्रमा को अर्घ्य दिए बिना ही व्रत तोडा था, इसी कारण तेरे पति की असमय मृत्यु हुई।',
          meaning: { en: 'Veeravati asked Indrani why her husband had died on the very day of Karva Chauth, and begged her to bring him back to life. Seeing her grief, Indrani said: "You broke your fast without offering the arghya to the moon, and that is why your husband died before his time."' },
        },
        {
          text: 'इन्द्राणी ने वीरावती को करवा चौथ के साथ-साथ पूरे वर्ष में आने वाली हर मास की चौथ का व्रत करने की सलाह दी, और उसे आश्वासन दिया कि ऐसा करने से उसका पति जीवित लौट आएगा।',
          meaning: { en: 'Indrani advised Veeravati to keep, besides Karva Chauth, the fast of the chaturthi of every month through the year, and assured her that by doing so her husband would return to life.' },
        },
        {
          text: 'इसके बाद वीरावती ने पूरे विश्वास के साथ सभी धार्मिक कृत्य और मासिक उपवास विधि-विधान से किए। अन्त में उन सभी व्रतों के पुण्य से वीरावती को उसका पति फिर से प्राप्त हो गया।',
          meaning: { en: 'After that Veeravati performed all the rites and the monthly fasts faithfully, as prescribed. In the end, through the merit of all those vows, Veeravati got her husband back.' },
        },
      ],
    },
    {
      title: 'करवा की कथा',
      titleEn: 'The katha of Karva',
      note: 'The short second katha, from which the vrata takes its name.',
      verses: [
        {
          text: 'पौराणिक लोककथा के अनुसार एक नदी के किनारे करवा नाम की एक पतिव्रता स्त्री अपने पति के साथ रहती थी। वह अपने पति से बहुत प्रेम करती थी और उसकी सेवा में सदा तत्पर रहती थी।',
          meaning: { en: 'According to the old folk story, a devoted wife named Karva lived on a river bank with her husband. She loved him dearly and was always ready to serve him.' },
        },
        {
          text: 'एक दिन उसका पति नदी में स्नान करने गया। तभी एक मगरमच्छ ने उसका पैर पकड लिया और उसे पानी में खींचने लगा। संकट में पडे पति ने अपनी पत्नी करवा को पुकारा, और पुकार सुनकर करवा तुरन्त नदी के पास पहुँची।',
          meaning: { en: 'One day her husband went to bathe in the river. A crocodile seized his foot and began to drag him into the water. In his danger he called out to his wife Karva, and hearing his cry she ran at once to the river.' },
        },
        {
          text: 'करवा ने अपने पतिव्रत के बल पर मगरमच्छ को कच्चे सूत के धागे से बाँध दिया। इसके बाद वह मृत्यु के देवता यमराज के पास गई और प्रार्थना की कि मगरमच्छ को दण्ड दिया जाए और उसके पति को जीवनदान मिले।',
          meaning: { en: 'By the power of her devotion as a wife, Karva bound the crocodile with a thread of raw cotton. Then she went to Yamaraja, the lord of death, and prayed that the crocodile be punished and her husband be given his life.' },
        },
        {
          text: 'करवा ने यमराज से कहा कि यदि उसके पति को जीवनदान नहीं दिया जा सकता तो वे दोनों को अपने साथ ले जाएँ। करवा के प्रेम, साहस और दृढ संकल्प को देखकर यमराज प्रसन्न हुए। उन्होंने मगरमच्छ का वध किया और करवा के पति को दीर्घायु का वरदान दिया।',
          meaning: { en: 'Karva told Yama that if her husband could not be given life, he should take them both. Pleased by Karva\'s love, courage and firm resolve, Yama slew the crocodile and granted her husband a long life.' },
        },
      ],
    },
    {
      title: 'चन्द्रार्घ्य और व्रत-पारण',
      titleEn: 'Moon arghya and breaking the fast',
      note: 'Only after the real moon has risen. Look down, not at the moon\'s face, while offering the water.',
      verses: [
        {
          text: 'रात को चन्द्रमा के उदय होने पर चन्द्रमा की ओर मुख करके खडी हों। जल (चाहें तो थोडा दूध मिला हुआ) से भरे करवे या कलश को दोनों हाथों से ऊपर उठाकर चन्द्रमा को अर्घ्य दें। जल की धार बीच में टूटनी नहीं चाहिए। साथ में बोलें: ॐ सोमाय नमः ।',
          meaning: { en: 'When the moon has risen at night, stand facing it. Lifting the karva or pot of water (with a little milk if you like) in both hands, offer the arghya to the moon without breaking the stream of water. Say as you do: Om, salutation to Soma.' },
        },
        {
          text: 'अर्घ्य के बाद पति के माथे पर तिलक लगाएँ, छलनी से पति का मुख देखें, और फिर पति के हाथ से जल पीकर व्रत खोलें।',
          meaning: { en: 'After the arghya, put a tilak on the husband\'s forehead, look at his face through the sieve, and then break the fast by drinking water from his hand.' },
        },
        {
          text: 'सास को लोटा, वस्त्र और विशेष करवा भेंट करके उनके चरण छुएँ और आशीर्वाद लें। उनके न होने पर उनके समान किसी अन्य स्त्री को यह भेंट दें। इसके बाद स्वयं और परिवार के लोग भोजन करें।',
          meaning: { en: 'Give the mother-in-law the lota, cloth and special karva, touch her feet and take her blessing. If she is not living, give them to a woman equal to her. Then the vrati and the family may eat.' },
        },
      ],
    },
  ],
};
