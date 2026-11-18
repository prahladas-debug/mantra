/**
 * Budhvar (Wednesday) vrata for Budha and Gaṇeśa: the outline of the puja and the kathā of the husband who travelled on a Wednesday, in Hindi.
 * Collated Nov 2026 from typed web copies; not proofread against a single printed booklet.
 *
 * WITNESSES
 *   S  shubhpanchang.com/hi/vrat-kathas/wednesday ("बुधवार व्रत कथा": a sāhūkār newly married; his double on the road; the sipāhī; the
 *      voice from the sky). Base.
 *   J  aajtak.in, "बुधवार व्रत कथा (Budhvar Vrat Katha)" (the same plot, shorter; the double talking with the wife, soldiers, voice from the sky).
 *   A  astrobix.com, "बुधवार व्रत" (the same plot told fuller and with names: Madhusūdana of Samatāpura, his wife Saṅgītā of Balarāmapura;
 *      the cart wheel breaks; the king imprisons both men; the double vanishes when the husband repents; the cart is found mended). Its names and
 *      extra episodes are not used; its puja outline (rise before sunrise, clean the house, sprinkle Ganges water, install Budha or Śiva in the
 *      north-east in a bronze dish, dhūpa, bilva leaf, akṣata, ghee lamp; evening puja, kathā, ārtī; offering of jaggery, rice and curd) is the
 *      base of the outline.
 *   P  prabhatkhabar.com, "Budhwar Vrat Katha, Puja Vidhi" (the day of Gaṇeśa; one meal; green things; begin on the first Wednesday of the bright
 *      fortnight; twenty-one fasts; Śiva worshipped at the end with dhūpa and bilva leaf).
 *
 * CHOICES. S, J and A agree on the plot: the husband's insistence on leaving on a Wednesday, the thirst on the road, the double, the
 * heavenly voice, the repentance and the vow to fast. S is followed paragraph by paragraph (J for its shorter wording of the double's
 * speech). The Sanskrit verse "बुध त्वं बुद्धिजनको…" printed in A for the puja is found in no other copy and is omitted; the aarti is omitted
 * likewise. Spelling is lightly normalised (no nukta; standard anusvāra). Meanings are original.
 */
import type { Mantra } from '../types';

export const budhvarVrat: Mantra = {
  id: 'budhvar-vrat',
  title: 'बुधवार व्रत कथा',
  titleEn: 'Budhvar (Wednesday) Vrat Katha',
  category: 'puja',
  order: 67,
  deity: 'Śrī Budha',
  source: 'North Indian vrata-kathā for Wednesday (Budhavāra), in honour of Budha, with Gaṇeśa also worshipped; popular printed and web copies',
  summary:
    'The Wednesday fast for Budha and Ganesha: a brief outline of the puja and the katha of the moneylender who took his wife home from her parents\' house on a Wednesday against their advice, met a double of himself on the road, and was set right by a heavenly voice.',
  difficulty: 'easy',
  completeness: 'partial',
  contentNote:
    'The puja is given only as a brief outline of general practice (clean house, an image of Budha or Shiva in the north-east, one meal, green food, Ganesha also worshipped); regional and family rules differ. The Sanskrit verse to Budha that one web copy prints for the puja is left out because only that one copy has it. The Budha aarti is not included.',
  sections: [
    {
      title: 'व्रत का विधान',
      titleEn: 'The fast and the puja in outline',
      note: 'General practice only; families follow their own tradition.',
      verses: [
        {
          text: 'जो बुधवार का व्रत करे, वह सूर्योदय से पहले उठकर घर की सफाई करे, स्नान करे और घर में गंगाजल छिडके। फिर घर के उत्तर-पूर्व कोने में किसी एकान्त स्थान पर काँसे के पात्र में बुध देव या शिव जी की मूर्ति अथवा चित्र स्थापित करे।',
          meaning: { en: 'One who keeps the Wednesday fast should rise before sunrise, clean the house, bathe and sprinkle Ganges water in the house. Then in a quiet spot in the north-east corner of the house he should set up an image or picture of Budha or of Shiva in a bronze dish.' },
        },
        {
          text: 'धूप, बेलपत्र, अक्षत और घी के दीपक से पूजा करे। इस व्रत में दिन-रात में एक ही बार भोजन किया जाता है और हरी वस्तुओं का प्रयोग उत्तम माना गया है।',
          meaning: { en: 'Worship with incense, bilva leaves, rice grains and a ghee lamp. In this fast only one meal is taken in a day and night, and the use of green things is considered best.' },
        },
        {
          text: 'शाम को फिर पूजा करके व्रत कथा सुने और आरती करे। सूर्यास्त के बाद गुड, भात और दही का भोग लगाकर प्रसाद बाँटे और सबसे अन्त में स्वयं प्रसाद ले। इस दिन बुध देव के साथ गणेश जी की पूजा का भी विधान है।',
          meaning: { en: 'In the evening worship again, hear the vrata katha and perform the arati. After sunset offer jaggery, cooked rice and curd, distribute the prasada, and take it oneself last of all. On this day Ganesha is also worshipped along with Budha.' },
        },
        {
          text: 'व्रत का आरम्भ शुक्ल पक्ष के पहले बुधवार से करें और इक्कीस व्रत रखें। ग्रह-शान्ति तथा सब सुखों की इच्छा रखने वाले, और ज्ञान, बुद्धि, धन, विद्या व व्यापार में उन्नति चाहने वाले स्त्री-पुरुष यह व्रत कर सकते हैं।',
          meaning: { en: 'Begin the fast on the first Wednesday of the bright fortnight and keep twenty-one fasts. Men and women who want the pacification of the planet and every comfort, and progress in knowledge, intellect, wealth, learning and trade, may keep this fast.' },
        },
      ],
    },
    {
      title: 'बुधवार व्रत कथा',
      titleEn: 'The katha of the moneylender and his double',
      note: 'Heard on each Wednesday of the fast.',
      verses: [
        {
          text: 'बहुत समय पहले की बात है, एक साहूकार का नया-नया विवाह हुआ था। उसकी पत्नी मायके गई हुई थी। साहूकार को अकेलापन खाने लगा और उससे रहा न गया, तो वह ससुराल जा पहुँचा।',
          meaning: { en: 'A long time ago a moneylender had just been married. His wife had gone to her parents\' house. Loneliness began to eat at the moneylender, and unable to bear it he went to his father-in-law\'s house.' },
        },
        {
          text: 'ससुराल में उसकी बडी आवभगत हुई, पर वहाँ पत्नी से खुलकर बात करना तो दूर, उसकी सूरत देखना भी कठिन हो रहा था। अगले ही दिन साहूकार ने कह दिया कि विदाई की तैयारी कर लीजिए, हमें निकलना है।',
          meaning: { en: 'He was received with great hospitality there, but to talk freely with his wife, let alone see her face, was hard. The very next day the moneylender said, "Please prepare for her departure; we must leave."' },
        },
        {
          text: 'संयोग से वह दिन बुधवार था। सास-ससुर ने समझाया कि बेटा, आज बुधवार है, इस दिन बेटी की विदाई नहीं करते, और किसी भी शुभ कार्य के लिए यात्रा करना बुधवार को शुभ नहीं माना जाता।',
          meaning: { en: 'By chance that day was Wednesday. His parents-in-law explained, "Son, today is Wednesday; on this day a daughter is not sent off, and to travel for any auspicious purpose is not thought good on a Wednesday."' },
        },
        {
          text: 'परन्तु साहूकार नहीं माना और बोला कि मैं इन बातों को नहीं मानता, आप हमें जाने का आशीर्वाद दीजिए। दामाद के आगे सास-ससुर की क्या चलती, उन्हें मन मसोसकर तैयारी करनी पडी और बेटी की विदाई कर दी गई।',
          meaning: { en: 'But the moneylender would not agree and said, "I do not believe in such things; give us your blessing to go." What could the parents-in-law do before their son-in-law? With a heavy heart they made ready and their daughter was sent off.' },
        },
        {
          text: 'चलते-चलते रास्ते में साहूकार की पत्नी को प्यास लगी। साहूकार पानी लेने गया, पर लौटकर आया तो उसके आश्चर्य का ठिकाना न रहा, क्योंकि उसने अपने ही जैसे रूप वाले एक व्यक्ति को पत्नी के पास बैठे देखा।',
          meaning: { en: 'As they went along the road the moneylender\'s wife felt thirsty. The moneylender went to fetch water, but on his return he was astonished beyond measure, for he saw a man exactly like himself sitting by his wife.' },
        },
        {
          text: 'पत्नी भी एक ही शक्ल के दो पुरुषों को देखकर चकरा गई कि उसका पति कौन सा है। साहूकार ने पूछा कि तुम कौन हो, तो उसने पलटकर कहा कि मैं फलाँ नगर का साहूकार हूँ और अपनी पत्नी को लेकर आ रहा हूँ; तुम कौन हो जो मेरा वेश धरकर आ गए हो? दोनों में बहस होने लगी और झगडा बढ गया।',
          meaning: { en: 'His wife too was bewildered at seeing two men of one face and wondered which was her husband. When the moneylender asked, "Who are you?", the other answered back, "I am the moneylender of such-and-such a town, bringing my wife home; who are you, who have come in my guise?" The two argued and the quarrel grew.' },
        },
        {
          text: 'झगडा देखकर राज्य के सिपाही वहाँ आ पहुँचे और साहूकार को पकड लिया। सिपाहियों ने स्त्री से पूछा कि इनमें तुम्हारा पति कौन है, तो वह बेचारी क्या उत्तर देती! तब साहूकार ने हाथ जोडकर भगवान से कहा कि हे भगवन्, यह आपकी कैसी माया है।',
          meaning: { en: 'Seeing the quarrel, the soldiers of the realm came and seized the moneylender. They asked the woman which of the two was her husband, but what answer could the poor woman give? Then the moneylender folded his hands and said to God, "Lord, what illusion of yours is this?"' },
        },
        {
          text: 'तभी आकाशवाणी हुई कि मूर्ख, याद कर, अभी तूने सास-ससुर की आज्ञा न मानकर भगवान बुध का अपमान किया है। बुधवार को तुझे इस दिन गमन नहीं करना चाहिए था। यह स्वयं बुध देव हैं जो तुझे सबक सिखाने के लिए तेरे वेश में हैं।',
          meaning: { en: 'Then a voice came from the sky: "Fool, remember, a little while ago, disobeying your parents-in-law, you insulted Lord Budha. On a Wednesday you should not have set out. This is Budha Deva himself, who is in your guise to teach you a lesson."' },
        },
        {
          text: 'तब साहूकार ने कान पकडकर क्षमा माँगी, आगे कभी ऐसा न करने का वचन दिया और बुधवार को नियम से व्रत करने का संकल्प लिया। तब साहूकार के रूप में प्रकट हुए बुध देव अन्तर्ध्यान हो गए और साहूकार पत्नी को लेकर घर जा सका।',
          meaning: { en: 'Then the moneylender held his ears and begged forgiveness, promised never to do so again, and resolved to keep the Wednesday fast with discipline. Then Budha, who had appeared in the moneylender\'s form, vanished, and the moneylender could go home with his wife.' },
        },
        {
          text: 'इस घटना के बाद साहूकार और उसकी पत्नी दोनों नियम से बुधवार का व्रत करने लगे। जो भी व्यक्ति इस कथा को कहता, सुनता या पढता है, उसे बुधवार को यात्रा करने से कोई दोष नहीं लगता और सब सुख प्राप्त होते हैं।',
          meaning: { en: 'After this event the moneylender and his wife both kept the Wednesday fast regularly. Whoever tells, hears or reads this katha incurs no fault from travelling on a Wednesday and obtains every happiness.' },
        },
      ],
    },
  ],
};
