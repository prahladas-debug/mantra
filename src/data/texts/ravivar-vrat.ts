/**
 * Ravivar (Sunday) vrata for Sūrya: the outline of the puja and the kathā of the old woman and the golden dung, in Hindi.
 * Collated Nov 2026 from typed web copies; not proofread against a single printed booklet.
 *
 * WITNESSES
 *   H  hindupad.com, "रविवार व्रत कथा | Ravivar Vrat Katha in Hindi". Base (fullest: Sūrya appears to the old woman in a dream and gives the cow;
 *      the king's soldiers take the cow; the king's dream).
 *   S  shubhpanchang.com/hi/vrat-kathas/sunday (the same plot and almost the same words as H, except that the cow and calf are found in the
 *      yard without a dream; the king's dream and the proclamation as in H).
 *   P  patrika.com, "भगवान सूर्य देव की ऐसे करें पूजा और पढ़ें कथा" (the old woman, the neighbour's cow dung, the dream of Sūrya, the cow,
 *      the exchanged dung, the storm, the king; shorter; also the rules of the puja).
 *   D  drikpanchang.com (hi), Sūrya Ravivāra vrata katha, listed as a witness; its page was not read here.
 *   R  Puja outline: patrika.com (bath before sunrise; arghya three times with water in a copper pot with red flowers and rice; arghya in the evening
 *      too; Sūrya mantras; Āditya-hṛdaya; one meal, no oil or salt) and navbharatlive.com (if one cannot fast, give arghya in a copper pot at
 *      the brahma muhurta; avoid tamasic food). General practice only; the outline is therefore uncertain.
 *
 * CHOICES. H is followed paragraph by paragraph; S differs only in leaving out Sūrya's first dream, which P and H both have, so the
 * dream is kept. The detail that the soldiers take the cow when the old woman is about to eat is from H only and is kept. The old
 * woman's neighbour's name is not given in any copy. No mantra is printed. Spelling is lightly normalised (no nukta; standard
 * anusvāra). Meanings are original.
 */
import type { Mantra } from '../types';

export const ravivarVrat: Mantra = {
  id: 'ravivar-vrat',
  title: 'रविवार व्रत कथा',
  titleEn: 'Ravivar (Sunday) Vrat Katha',
  category: 'puja',
  order: 71,
  deity: 'Śrī Sūrya',
  source: 'North Indian vrata-kathā for Sunday (Ravivāra, Ādityavāra), in honour of Sūrya; popular printed and web copies',
  summary:
    'The Sunday fast for Surya: a brief outline of the puja and the katha of the old woman who fasted every Sunday and plastered her yard with cow-dung, the envious neighbour, the cow with its calf that Surya gave her, the golden dung that was stolen, the king who took the cow away, and Surya\'s warning in his dream.',
  difficulty: 'easy',
  completeness: 'partial',
  contentNote:
    'The puja is given only as a brief outline of general practice (bath before sunrise, water offered to the Sun three times from a copper pot, one meal, no salt or oil on the fast day); regional and family rules differ. The Sanskrit hymns to Surya (Aditya Hridaya, the names and mantras) are separate texts and are not included. The Surya aarti is not included.',
  sections: [
    {
      title: 'व्रत का विधान',
      titleEn: 'The fast and the puja in outline',
      note: 'General practice only; families follow their own tradition.',
      verses: [
        {
          text: 'रविवार का व्रत सूर्य देव को समर्पित है। व्रत करने वाला सूर्योदय से पहले उठकर शुद्ध हो, स्नान करे और नहाने के बाद सूर्य नारायण को तीन बार अर्घ्य देकर प्रणाम करे।',
          meaning: { en: 'The Sunday fast is dedicated to Surya. One who keeps it should rise before sunrise, purify himself, bathe, and after the bath offer arghya to Surya Narayana three times and bow to him.' },
        },
        {
          text: 'अर्घ्य के लिए ताँबे के लोटे में जल लेकर उसमें लाल फूल और चावल डालें। शाम को भी सूर्य को अर्घ्य देकर प्रणाम करें। जो किसी कारण व्रत न रख सके, वह भी प्रातः ताँबे के लोटे से सूर्य को अर्घ्य अवश्य दे।',
          meaning: { en: 'For the arghya take water in a copper pot and put red flowers and rice in it. In the evening too offer arghya to Surya and bow. One who cannot keep the fast for some reason should still offer arghya to Surya in the morning from a copper pot.' },
        },
        {
          text: 'श्रद्धा से सूर्य के मन्त्रों का जप करें और आदित्य हृदय का पाठ करें। व्रत में दिन में एक ही बार भोजन करें और तेल व नमक से बचें।',
          meaning: { en: 'Repeat the mantras of Surya with faith and read the Aditya Hridaya. In the fast take food only once in the day and avoid oil and salt.' },
        },
      ],
    },
    {
      title: 'रविवार व्रत कथा',
      titleEn: 'The katha of the old woman and the golden dung',
      note: 'Heard on each Sunday of the fast.',
      verses: [
        {
          text: 'प्राचीन काल में एक बुढिया रहती थी। वह नियम से रविवार का व्रत करती थी। रविवार को सूर्योदय से पहले उठकर, स्नान आदि करके वह आँगन को गोबर से लीपकर स्वच्छ करती, फिर सूर्य भगवान की पूजा करते हुए व्रत कथा सुनती और सूर्य भगवान को भोग लगाकर दिन में एक बार भोजन करती। सूर्य भगवान की अनुकम्पा से बुढिया को कोई चिन्ता या कष्ट नहीं था और उसका घर धीरे-धीरे धन-धान्य से भरता जा रहा था।',
          meaning: { en: 'In ancient times there lived an old woman. She regularly kept the Sunday fast. On Sunday she rose before sunrise, bathed and so on, cleaned the yard by plastering it with cow-dung, then while worshipping Surya heard the vrata katha, offered food to Surya and ate once in the day. By Surya\'s favour the old woman had no worry or trouble, and her house was gradually filling with wealth and grain.' },
        },
        {
          text: 'उसे सुखी देखकर उसकी पडोसन उससे जलने लगी। बुढिया के पास कोई गाय नहीं थी, इसलिए वह पडोसन के आँगन में बँधी गाय का गोबर लाती थी। पडोसन ने कुछ सोचकर अपनी गाय को घर के भीतर बाँध दिया। रविवार को गोबर न मिलने से बुढिया आँगन नहीं लीप सकी, इसलिए उसने सूर्य भगवान को भोग नहीं लगाया और उस दिन स्वयं भी भोजन नहीं किया। सूर्यास्त होने पर वह भूखी-प्यासी सो गई।',
          meaning: { en: 'Seeing her happy, her neighbour began to burn with envy. The old woman had no cow, so she used to bring cow-dung from the cow tied in her neighbour\'s yard. The neighbour, thinking it over, tied her cow inside the house. On Sunday, not getting the dung, the old woman could not plaster her yard, so she made no offering to Surya and herself ate nothing that day. At sunset she went to sleep hungry and thirsty.' },
        },
        {
          text: 'रात में सूर्य भगवान ने उसे स्वप्न में दर्शन दिए और व्रत न करने तथा भोग न लगाने का कारण पूछा। बुढिया ने करुण स्वर में बताया कि पडोसन ने गाय को घर के भीतर बाँध लिया और गोबर नहीं मिल सका। तब सूर्य भगवान ने अपनी अनन्य भक्त का कष्ट जानकर कहा कि हे माता, तुम हर रविवार मेरी पूजा और व्रत करती हो, मैं तुमसे प्रसन्न हूँ और तुम्हें ऐसी गाय देता हूँ जो तुम्हारे घर-आँगन को धन-धान्य से भर देगी।',
          meaning: { en: 'At night Surya appeared to her in a dream and asked the reason why she had not fasted and made the offering. The old woman said in a piteous voice that the neighbour had tied the cow inside the house and she could not get dung. Then Surya, knowing the trouble of his exclusive devotee, said, "Mother, you worship me and keep the fast every Sunday; I am pleased with you and give you such a cow as will fill your house and yard with wealth and grain."' },
        },
        {
          text: 'सूर्य भगवान ने कहा कि तुम्हारी सब मनोकामनाएँ पूरी होंगी, रविवार का व्रत करने वालों की सब इच्छाएँ मैं पूरी करता हूँ, और मेरा व्रत करने व कथा सुनने से बाँझ स्त्रियों को पुत्र की प्राप्ति होती है। ऐसा वरदान देकर सूर्य भगवान अन्तर्ध्यान हो गए।',
          meaning: { en: 'Surya said, "All your wishes will be fulfilled; I fulfil all the desires of those who keep the Sunday fast, and by keeping my fast and hearing the katha, barren women get a son." Having given this boon, Surya vanished.' },
        },
        {
          text: 'प्रातःकाल सूर्योदय से पहले बुढिया की आँख खुली तो अपने आँगन में एक सुन्दर गाय और बछडे को देखकर वह हैरान रह गई। उसने गाय को बाँधकर जल्दी से चारा लाकर खिलाया। पडोसन ने गाय और बछडे को देखा तो वह और अधिक जलने लगी। तभी गाय ने सोने का गोबर किया, जिसे देखकर पडोसन की आँखें फटी रह गईं।',
          meaning: { en: 'In the morning, before sunrise, when the old woman\'s eyes opened she was amazed to see a beautiful cow and calf in her yard. She tied the cow and quickly brought fodder to feed it. When the neighbour saw the cow and calf she burned the more. Just then the cow dropped golden dung, and seeing it the neighbour\'s eyes opened wide.' },
        },
        {
          text: 'पडोसन ने बुढिया को आसपास न पाकर वह गोबर उठाया और अपने घर ले गई तथा अपनी गाय का गोबर वहाँ रख आई। सोने के गोबर से पडोसन कुछ ही दिनों में धनवान हो गई। गाय रोज सूर्योदय से पहले सोने का गोबर करती और बुढिया के उठने से पहले पडोसन उसे उठा ले जाती थी।',
          meaning: { en: 'Not seeing the old woman about, the neighbour took the dung and carried it home and left her own cow\'s dung there. By the golden dung the neighbour grew rich in a few days. The cow dropped golden dung every day before sunrise, and before the old woman got up the neighbour carried it away.' },
        },
        {
          text: 'बहुत दिनों तक बुढिया को इसका पता नहीं चला और वह पहले की तरह हर रविवार सूर्य देव का व्रत करती और कथा सुनती रही। जब सूर्य भगवान को पडोसन की चालाकी का पता चला तो उन्होंने तेज आँधी चलाई। आँधी का प्रकोप देखकर बुढिया ने गाय को घर के भीतर बाँध दिया। सुबह उठकर उसने सोने का गोबर देखा तो उसे बडा आश्चर्य हुआ, और उसके बाद वह गाय को भीतर ही बाँधने लगी। सोने के गोबर से वह कुछ ही दिन में बहुत धनी हो गई।',
          meaning: { en: 'For a long time the old woman did not know of it, and as before she kept Surya\'s fast every Sunday and heard the katha. When Surya learned of the neighbour\'s cunning he sent a violent storm. Seeing the storm\'s fury the old woman tied the cow inside the house. Rising in the morning she saw the golden dung and was greatly astonished, and after that she kept tying the cow inside. By the golden dung she became very rich in a few days.' },
        },
        {
          text: 'बुढिया के धनी होने से पडोसन जल-भुनकर राख हो गई और उसने अपने पति को समझा-बुझाकर नगर के राजा के पास भेज दिया। राजा को जब सोने का गोबर देने वाली गाय का पता चला तो उसने सैनिक भेजकर बुढिया की गाय मँगवाई। उस समय बुढिया सूर्य भगवान को भोग लगाकर स्वयं भोजन करने वाली थी, और सैनिक गाय-बछडे को खोलकर महल की ओर ले चले।',
          meaning: { en: 'Because the old woman had grown rich, the neighbour burned to ashes and, coaxing her husband, sent him to the king of the town. When the king learned of the cow that gives golden dung he sent soldiers to fetch the old woman\'s cow. At that time the old woman was about to offer food to Surya and then eat herself, and the soldiers untied the cow and calf and led them off towards the palace.' },
        },
        {
          text: 'बुढिया ने रो-रोकर सैनिकों से गाय-बछडे को न ले जाने की प्रार्थना की, पर वे नहीं माने। उस दिन उसने कुछ नहीं खाया और सारी रात सूर्य भगवान से गाय-बछडा लौटाने की प्रार्थना करती रही। उधर राजा ने सुन्दर गाय को देखा और सुबह सोने का गोबर देखकर उसके आश्चर्य का ठिकाना न रहा।',
          meaning: { en: 'The old woman wept and begged the soldiers not to take the cow and calf, but they did not listen. That day she ate nothing and all night she prayed to Surya to return the cow and calf. Meanwhile the king saw the beautiful cow and on seeing the golden dung in the morning his astonishment knew no bounds.' },
        },
        {
          text: 'भूखी-प्यासी बुढिया को इस तरह प्रार्थना करते देख सूर्य भगवान को बहुत करुणा आई। उसी रात उन्होंने राजा को स्वप्न में कहा कि राजन्, बुढिया की गाय और बछडा तुरन्त लौटा दो, नहीं तो तुम पर विपत्तियों का पहाड टूट पडेगा और तुम्हारा महल नष्ट हो जाएगा।',
          meaning: { en: 'Seeing the hungry and thirsty old woman praying so, Surya felt great compassion. That same night he said to the king in a dream, "King, return the old woman\'s cow and calf at once, or a mountain of calamities will fall on you and your palace will be destroyed."' },
        },
        {
          text: 'सूर्य भगवान के स्वप्न से भयभीत राजा ने सुबह उठते ही गाय और बछडा बुढिया को लौटा दिया। उसने बहुत-सा धन देकर बुढिया से अपनी भूल की क्षमा माँगी और पडोसन तथा उसके पति को उनकी दुष्टता का दण्ड दिया।',
          meaning: { en: 'Frightened by Surya\'s dream, the king returned the cow and calf to the old woman as soon as he rose in the morning. He gave her much wealth and begged her pardon for his mistake, and punished the neighbour and her husband for their wickedness.' },
        },
        {
          text: 'फिर राजा ने पूरे राज्य में घोषणा करा दी कि सब स्त्री-पुरुष रविवार का व्रत किया करें। रविवार का व्रत करने से सबके घर धन-धान्य से भर गए, चारों ओर खुशहाली छा गई, सब लोगों के शारीरिक कष्ट दूर हो गए और राज्य में सब सुखपूर्वक रहने लगे।',
          meaning: { en: 'Then the king had it proclaimed throughout the kingdom that all men and women should keep the Sunday fast. By keeping the Sunday fast everyone\'s house filled with wealth and grain, happiness spread all around, all people\'s bodily troubles went, and everyone in the kingdom lived in comfort.' },
        },
      ],
    },
  ],
};
