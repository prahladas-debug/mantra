/**
 * Śarad Pūrṇimā (Kojāgara) vrata for Lakṣmī: the outline of the observances and the kathā of the moneylender's two daughters, in Hindi.
 * Collated Nov 2026 from typed web copies; not proofread against a single printed booklet.
 *
 * WITNESSES
 *   J  aajtak.in, "कोजागर पूजा व्रत कथा (Kojagara Puja Vrat Katha)": the two daughters; the younger's children die; the sage's advice; the dead child on the stool; the
 *      elder sister's skirt; the proclamation. Base (the fullest; it says Lakṣmī was angry at the half-done fast and that "Lakṣmī's great grace" is on the elder).
 *   H  hindupad.com, "Sharad Purnima Vrat Katha in Hindi" (the same story, in somewhat shorter words; "the pandits" instead of the sage; the elder
 *      sister's "bhāgya" and "puṇya" in the younger's reply).
 *   S  shubhpanchang.com/hi/festivals/sharad-purnima (the same story, shortest; also the customs: fast, Lakṣmī and Moon-worship, kheer of cow's milk left
 *      in moonlight and eaten next day, arghya to the Moon).
 *   N  navbharatlive.com, "Sharad Purnima Folk Stories" (regional kathās: Kojagari in Bengal, "को जागर्ति?"; the sisters' story in brief; the Maharas of Krishna in
 *      Braj; Odisha's Kumar Purnima and Mithila's custom); used for the customs only.
 *
 * CHOICES. J, H and S agree on the plot (the elder sister keeps the fast fully, the younger half-way; the younger's sons die at birth; she keeps it fully on
 * advice, her son dies again; she lays him on a stool under a cloth; the elder's skirt touches him; he cries; "he was dead already, he lives by your merit";
 * the proclamation). J is followed paragraph by paragraph. J attributes the counsel to a sage and the relief to Lakṣmī; H and S to "pandits" and to
 * the elder sister's merit; both are noted in the text. The older name "Kojāgara" is from J and N. No mantra is printed. Spelling is lightly normalised (no nukta;
 * standard anusvāra). Meanings are original.
 */
import type { Mantra } from '../types';

export const sharadPurnimaVrat: Mantra = {
  id: 'sharad-purnima-vrat',
  title: 'शरद पूर्णिमा व्रत कथा',
  titleEn: 'Sharad Purnima (Kojagari) Vrat Katha',
  category: 'puja',
  order: 77,
  deity: 'Śrī Lakṣmī',
  source: 'North Indian vrata-kathā for Śarad Pūrṇimā (Kojāgara, Āśvina pūrṇimā), in honour of Lakṣmī and the Moon; popular printed and web copies',
  summary:
    'The full-moon fast of autumn for Lakshmi: a brief outline of the night\'s observances (staying awake for Lakshmi, kheer set in the moonlight, arghya to the Moon) and the katha of the moneylender\'s two daughters, the younger whose children died because she kept the fast half-way, and the elder whose worth brought her sister\'s dead child to life.',
  difficulty: 'easy',
  completeness: 'partial',
  contentNote:
    'The puja is given only as a brief outline of general practice; customs vary between Bengal and Mithila (Kojagari), Braj (the Maharas of Krishna) and Odisha (Kumar Purnima). The Maharas of Krishna and Gopis and the regional legends are named but not included; the Lakshmi aarti is not included.',
  sections: [
    {
      title: 'व्रत का विधान',
      titleEn: 'The night\'s observances in outline',
      note: 'General practice only; customs differ by region.',
      verses: [
        {
          text: 'शरद पूर्णिमा आश्विन मास की पूर्णिमा है, जिसे कोजागर या कोजागरी पूर्णिमा भी कहते हैं। इस दिन व्रत रखकर माता लक्ष्मी और चन्द्र देव की पूजा की जाती है और मान्यता है कि इस रात माता लक्ष्मी के साथ भगवान विष्णु और इन्द्र की कृपा भी मिलती है।',
          meaning: { en: 'Sharad Purnima is the full moon of the month of Ashvina, also called Kojagara or Kojagari Purnima. On this day a fast is kept and Mother Lakshmi and the Moon god are worshipped, and it is believed that on this night the grace of Lord Vishnu and Indra is received along with Mother Lakshmi\'s.' },
        },
        {
          text: 'मान्यता है कि इस रात माता लक्ष्मी भ्रमण करती हैं और जागकर उनकी आराधना करने वालों पर कृपा बरसाती हैं। बंगाल में इस रात आँगन में अल्पना बनाकर देवी का स्वागत किया जाता है और रात भर जागकर पूजा-भजन होता है, जहाँ पूछा जाता है "को जागर्ति", अर्थात् कौन जाग रहा है।',
          meaning: { en: 'It is believed that on this night Mother Lakshmi moves about and showers grace on those who stay awake and worship her. In Bengal on this night an alpana is drawn in the courtyard to welcome the goddess and worship and bhajans go on through the night awake, where it is asked "Ko jagarti," that is, "Who is awake?"' },
        },
        {
          text: 'गाय के दूध की खीर बनाकर रात में चाँदनी में रखी जाती है और अगले दिन उसका सेवन किया जाता है। रात में चन्द्रमा को अर्घ्य भी दिया जाता है।',
          meaning: { en: 'Kheer is made of cow\'s milk and kept in the moonlight at night, and it is eaten the next day. At night arghya is also offered to the Moon.' },
        },
        {
          text: 'ब्रज में शरद पूर्णिमा का सम्बन्ध श्रीकृष्ण की महारास लीला से जुडा है, जो श्रीमद्भागवत के दसवें स्कन्ध में आती है, और ओडिशा में इसे कुमार पूर्णिमा कहते हैं। उत्तर भारत में व्रत के साथ साहूकार की दो पुत्रियों की यह कथा सुनी जाती है।',
          meaning: { en: 'In Braj, Sharad Purnima is connected with Krishna\'s Maharas, which comes in the tenth skandha of the Shrimad Bhagavata, and in Odisha it is called Kumar Purnima. In north India the katha of the moneylender\'s two daughters is heard along with the fast.' },
        },
      ],
    },
    {
      title: 'शरद पूर्णिमा व्रत कथा',
      titleEn: 'The katha of the moneylender\'s two daughters',
      note: 'Heard on the night of the full moon.',
      verses: [
        {
          text: 'प्राचीन काल में एक साहूकार था। उसकी दो बेटियाँ थीं, जो माता लक्ष्मी में बडी आस्था रखती थीं और दोनों पूर्णिमा का उपवास रखती थीं। साहूकार की बडी बेटी इस व्रत को पूरे विधि-विधान से पूरा करती थी, लेकिन छोटी बेटी अज्ञानवश व्रत को अधूरा छोड देती थी।',
          meaning: { en: 'In ancient times there was a moneylender. He had two daughters, who had great faith in Mother Lakshmi, and both kept the full-moon fast. The elder daughter used to complete the fast with the full rites, but the younger daughter out of ignorance used to leave the fast unfinished.' },
        },
        {
          text: 'व्रत अधूरा छोडने के कारण देवी लक्ष्मी उससे रुष्ट हो गईं, जिससे छोटी बेटी के पुत्रों की मृत्यु होने लगी। जब भी वह किसी बच्चे को जन्म देती, कुछ ही देर में उसकी मृत्यु हो जाती थी। छोटी बेटी इससे बहुत परेशान हुई और उसने एक ऋषि को अपनी यह परेशानी बताई।',
          meaning: { en: 'Because the fast was left unfinished Goddess Lakshmi was displeased with her, and her sons began to die. Whenever she gave birth to a child, it would die within a short time. The younger daughter was very distressed and told this trouble to a sage.' },
        },
        {
          text: 'ऋषि छोटी बेटी को देखकर सब समझ गए। उन्होंने उसकी भूल बताई कि तुम पूर्णिमा के व्रत को अधूरा छोड देती हो और उसे पूरे विधि-विधान से नहीं करती। उन्होंने कहा कि यदि तुम पूर्णिमा का व्रत विधिपूर्वक करोगी तो तुम्हारी सन्तान जीवित रह सकती है। कुछ प्रतियों में यही सलाह पण्डितों के मुख से कही गई है।',
          meaning: { en: 'The sage understood everything on seeing the younger daughter. He told her fault: "You leave the full-moon fast unfinished and do not do it with the full rites." He said, "If you keep the full-moon fast by rule your child can live." In some copies the same advice is spoken by pandits.' },
        },
        {
          text: 'ऋषि की सलाह पर छोटी बेटी ने पूर्णिमा का व्रत विधि-विधान से पूरा किया। फलस्वरूप उसे सन्तान की प्राप्ति हुई, पर कुछ दिनों बाद उसकी भी मृत्यु हो गई। वह बहुत परेशान हुई, तब उसे अपनी बडी बहन की याद आई।',
          meaning: { en: 'On the sage\'s advice the younger daughter completed the full-moon fast with the full rites. As a result she got a child, but after some days it too died. She was very distressed, and then she remembered her elder sister.' },
        },
        {
          text: 'उसने लडके को एक छोटी चौकी के आकार की लकडी या पीढे पर लिटाकर ऊपर से कपडा ढक दिया। फिर वह अपनी बडी बहन को बुला लाई और उसे उसी पीढे पर बैठने का संकेत किया। बडी बहन को पता नहीं था कि वहाँ बच्चे का शव पडा है।',
          meaning: { en: 'She laid the boy on a small stool-like piece of wood, a low seat, and covered it with a cloth. Then she brought her elder sister and gestured to her to sit on that same seat. The elder sister did not know that the child\'s body lay there.' },
        },
        {
          text: 'जैसे ही बडी बहन पीढे पर बैठने लगी, उसका लहँगा बच्चे को छू गया और बच्चा अचानक जीवित होकर रोने लगा। यह देखकर बडी बहन ने डाँटते हुए कहा कि तू मुझे कलंक लगाना चाहती थी, मेरे बैठने से यह मर जाता।',
          meaning: { en: 'As the elder sister began to sit on the seat, her skirt touched the child, and the child suddenly came alive and began to cry. Seeing this the elder sister scolded, "You wanted to put a stain on me; if I had sat on it, it would have died."' },
        },
        {
          text: 'बडी बहन की बात सुनकर छोटी बहन ने विनम्रता से कहा कि यह तो पहले ही मर चुका था, तेरे तप और पुण्य से ही यह जीवित हुआ है। तुझ पर माता लक्ष्मी की असीम कृपा है।',
          meaning: { en: 'Hearing her elder sister, the younger said humbly, "He was dead already; it is by your austerity and merit that he has come alive. Mother Lakshmi\'s boundless grace is upon you."' },
        },
        {
          text: 'इस घटना के बाद साहूकार ने नगर में पूर्णिमा का पूरा व्रत करने का ढिंढोरा पिटवा दिया। तभी से यह दिन उत्सव के रूप में मनाया जाता है और देवी लक्ष्मी की पूजा की जाने लगी।',
          meaning: { en: 'After this event the moneylender had a proclamation made through the city that the full-moon fast should be kept in full. Since then this day is celebrated as a festival and the worship of Goddess Lakshmi began.' },
        },
      ],
    },
  ],
};
