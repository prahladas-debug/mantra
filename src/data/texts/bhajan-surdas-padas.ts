/**
 * Ten padas of Sūradāsa (Braj Bhasha, from the Sūrasāgara) in Devanagari. Collated Nov 2026.
 *
 * Witnesses: K = kavitakosh.org, the poet's pages (all but the last); H = hindwi.org "पद" pages. Per pada: 1 चरन कमल K (two pages) H;
 * 2 अबिगत गति K; 3 जसोदा हरि पालनैं K H; 4 मैया मोहि दाऊ K H; 5 कबहिं बढ़ैगी चोटी K H; 6 अब मैं नाच्यौ K (two pages) H; 7 ऊधो मन K;
 * 8 निसिदिन बरसत K; 9 मो सम कौन K; 10 चंद-खिलौना H. So 1 and 6 have three copies, 3, 4 and 5 two, and 2, 7, 8, 9 and 10 only one;
 * I looked for a second typed copy of these and did not find one. Readings chosen: 1 "बहिरो", "मूक", "अंधे कौं", "राई" (the majority
 * of K and H); 2 K prints "कहति न आवै"; "कहत" (the form the line is quoted in elsewhere) is written; 3 "दुलराइ मल्हावै" (K; H "दुलरावै");
 * 4 "ग्वाल नचावत" (K; H "नवावत"); 6 "असंगत चाल" (K, H; the second K page "कुसंगति"); 7 K's title says "मन नाहीं दस बीस" but its
 * text, as written here, says "मन न भए दस बीस"; 10 follows H. Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const bhajanSurdasPadas: Mantra = {
  id: 'bhajan-surdas-padas',
  title: 'सूरदास के पद',
  titleEn: 'Surdas: Selected Padas',
  category: 'aarti',
  order: 71,
  deity: 'Śrī Kṛṣṇa',
  source: 'Sūradāsa, Sūrasāgara (Braj Bhasha)',
  summary: 'Ten well-known padas of Surdas: the opening prayer to the Lord\'s feet, the Unknowable and the God with form, Yashoda\'s lullaby, Krishna\'s childhood quarrels with Dau and with his mother, the soul tired of its worldly dance, a gopi\'s words to Uddhava, the weeping gopis, and the sinner\'s plea.',
  difficulty: 'easy',
  completeness: 'partial',
  contentNote: 'A selection of 10 padas from the Sursagar, which has thousands of padas (as the book is printed, some 4,000 to 8,000).',
  sections: [
    {
      title: 'चरन-कमल बंदौं हरि-राई',
      titleEn: 'Charan-kamal bandaun Hari-rai',
      note: 'A pada of the Sursagar in praise of the Lord\'s feet.',
      verses: [
        {
          n: 1,
          text: 'चरन-कमल बंदौं हरि-राई ।\nजाकी कृपा पंगु गिरि लंघै, अंधे कौं सब कछु दरसाई ॥',
          meaning: { en: 'I bow to the lotus feet of Hari, the king; by his grace the lame cross mountains and the blind see everything.' },
        },
        {
          n: 2,
          text: 'बहिरो सुनै, मूक पुनि बोलै, रंक चलै सिर छत्र धराई ।\nसूरदास स्वामी करुनामय, बार-बार बंदौं तिहिं पाई ॥',
          meaning: { en: 'The deaf hear, the dumb speak, and the pauper walks with a royal parasol over his head. Surdas says: my lord is full of compassion, and again and again I bow to his feet.' },
        },
      ],
    },
    {
      title: 'अबिगत गति कछु कहत न आवै',
      titleEn: 'Abigat gati kachhu kahat na aave',
      note: 'The sakhi-style pada on the formless Absolute and why the poet sings the Lord with form.',
      verses: [
        {
          n: 1,
          text: 'अबिगत गति कछु कहत न आवै ।\nज्यों गूँगो मीठे फल की रस अंतरगत ही भावै ॥',
          meaning: { en: 'The state of the Unknowable cannot be told at all; like a mute tasting a sweet fruit, one relishes it only within.' },
        },
        {
          n: 2,
          text: 'परम स्वादु सबहीं जु निरंतर अमित तोष उपजावै ।\nमन बानी कौं अगम अगोचर सो जानै जो पावै ॥',
          meaning: { en: 'It is supremely sweet, it always gives boundless satisfaction to all, but it lies beyond the reach of mind and speech; only one who has found it knows it.' },
        },
        {
          n: 3,
          text: 'रूप रैख गुन जाति जुगति बिनु निरालंब मन चकृत धावै ।\nसब बिधि अगम बिचारहिं, तातौं सूर सगुन लीला पद गावै ॥',
          meaning: { en: 'Without form, outline, quality, caste or method, the mind has nothing to hold and runs about bewildered. Seeing it is beyond reach in every way, Sur sings of the Lord with form and his play.' },
        },
      ],
    },
    {
      title: 'जसोदा हरि पालनैं झुलावै',
      titleEn: 'Jasoda Hari palanain jhulave',
      note: 'Yashoda rocking the baby Krishna in his cradle (Raga Dhanashri).',
      verses: [
        {
          n: 1,
          text: 'जसोदा हरि पालनैं झुलावै ।\nहलरावै, दुलराइ मल्हावै, जोइ-जोइ कछु गावै ॥',
          meaning: { en: 'Yashoda rocks Hari in his cradle; she swings him, caresses and soothes him, and sings whatever comes to her.' },
        },
        {
          n: 2,
          text: 'मेरे लाल कौं आउ निंदरिया, काहैं न आनि सुवावै ।\nतू काहैं नहिं बेगहिं आवै, तोकौं कान्ह बुलावै ॥',
          meaning: { en: 'She sings: come, sleep, to my darling; why do you not come and put him to sleep? Why do you not hurry, Kanha is calling you.' },
        },
        {
          n: 3,
          text: 'कबहुँ पलक हरि मूँदि लेत हैं, कबहुँ अधर फरकावै ।\nसोवत जानि मौन ह्वै कै रहि, करि-करि सैन बतावै ॥',
          meaning: { en: 'Sometimes Hari shuts his eyelids, sometimes his lips quiver. Thinking he is asleep she falls silent and signals to others with gestures.' },
        },
        {
          n: 4,
          text: 'इहिं अंतर अकुलाइ उठे हरि, जसुमति मधुरैं गावै ।\nजो सुख सूर अमर-मुनि दुरलभ, सो नँद-भामिनि पावै ॥',
          meaning: { en: 'Meanwhile Hari wakes up restless, and Yashoda sings sweetly again. Says Sur: the happiness that is rare even for gods and sages, Nanda\'s wife enjoys.' },
        },
      ],
    },
    {
      title: 'मैया मोहि दाऊ बहुत खिझायो',
      titleEn: 'Maiya mohi Dau bahut khijhayo',
      note: 'Krishna complains to Yashoda that his elder brother Balarama has been teasing him about his birth.',
      verses: [
        {
          n: 1,
          text: 'मैया मोहि दाऊ बहुत खिझायो ।\nमोसौं कहत मोल कौ लीन्हौ, तू जसुमति कब जायो ॥',
          meaning: { en: 'Mother, Dau has teased me badly; he tells me I was bought for a price, and asks when you ever gave birth to me.' },
        },
        {
          n: 2,
          text: 'कहा करौं इहि रिस के मारैं खेलन हौं नहिं जात ।\nपुनि-पुनि कहत कौन है माता, को है तेरौ तात ॥',
          meaning: { en: 'What can I do? Out of this anger I do not go out to play. Again and again he asks, who is your mother, who is your father?' },
        },
        {
          n: 3,
          text: 'गोरे नंद जसोदा गोरी, तू कत स्यामल गात ।\nचुटकी दै-दै ग्वाल नचावत, हँसत, सबै मुसुकात ॥',
          meaning: { en: 'Nanda is fair and Yashoda is fair, why is your body dark? The cowherd boys snap their fingers to make me dance, and all of them laugh and smile.' },
        },
        {
          n: 4,
          text: 'तू मोही कौं मारन सीखी, दाउहि कबहुँ न खीझै ।\nमोहन-मुख रिस की ये बातैं, जसुमति सुनि-सुनि रीझै ॥',
          meaning: { en: 'You have learnt only to beat me and never scold Dau. Hearing these angry words from Mohan\'s mouth, Yashoda is delighted again and again.' },
        },
        {
          n: 5,
          text: 'सुनहु कान्ह, बलभद्र चबाई, जनमत ही कौ धूत ।\nसूर स्याम मोहि गोधन की सौं, हौं माता तू पूत ॥',
          meaning: { en: 'Listen, Kanha, Balabhadra is a tattler and a rogue from his birth. Says Sur: I swear by the cows, I am your mother and you are my son.' },
        },
      ],
    },
    {
      title: 'मैया, कबहिं बढैगी चोटी',
      titleEn: 'Maiya, kabahin badhaigi choti',
      note: 'Krishna asks his mother when his boyish tuft will grow long (Raga Ramkali).',
      verses: [
        {
          n: 1,
          text: 'मैया, कबहिं बढैगी चोटी ।\nकिती बार मोहि दूध पियत भइ, यह अजहूँ है छोटी ॥',
          meaning: { en: 'Mother, when will my tuft grow long? How many times have I drunk milk, and it is still short.' },
        },
        {
          n: 2,
          text: 'तू जो कहति बल की बेनी ज्यौं, ह्वै है लाँबी-मोटी ।\nकाढत-गुहत-न्हवावत जैहै नागिनि-सी भुइँ लोटी ॥',
          meaning: { en: 'You say it will become long and thick like Balarama\'s braid; combed, plaited and washed, it will trail on the ground like a snake.' },
        },
        {
          n: 3,
          text: 'काँचौ दूध पियावति पचि-पचि, देति न माखन-रोटी ।\nसूरज चिरजीवौ दोउ भैया, हरि-हलधर की जोटी ॥',
          meaning: { en: 'You make me drink raw milk with such effort, and give me no butter and bread. Says Sur: long live the two brothers, the pair of Hari and Haladhara.' },
        },
      ],
    },
    {
      title: 'अब मैं नाच्यौ बहुत गुपाल',
      titleEn: 'Ab main nachyau bahut Gopal',
      note: 'The soul tires of the dance of worldly life (Raga Dhanashri).',
      verses: [
        {
          n: 1,
          text: 'अब मैं नाच्यौ बहुत गुपाल ।\nकाम-क्रोध कौ पहिरि चोलना, कंठ बिषय की माल ॥',
          meaning: { en: 'Gopala, I have danced enough now. I put on the costume of lust and anger, and hung the garland of sense-objects round my neck.' },
        },
        {
          n: 2,
          text: 'महामोह के नूपुर बाजत, निंदा सबद रसाल ।\nभ्रम-भोयौ मन भयौ पखावज, चलत असंगत चाल ॥',
          meaning: { en: 'The anklets of great delusion jingle, and slander is my sweet song; my mind, soaked in confusion, became the drum, and I danced in a crooked step.' },
        },
        {
          n: 3,
          text: 'तृष्ना नाद करति घट भीतर, नाना बिधि दै ताल ।\nमाया कौ कटि फेंटा बाँध्यौ, लोभ-तिलक दियौ भाल ॥',
          meaning: { en: 'Craving sounded inside me and kept time in many ways; I tied the waist-cloth of maya and marked my forehead with the tilak of greed.' },
        },
        {
          n: 4,
          text: 'कोटिक कला काछि दिखराई, जल-थल सुधि नहिं काल ।\nसूरदास की सबै अबिद्या दूरि करौ नँदलाल ॥',
          meaning: { en: 'I showed countless tricks of the art, forgetting land, water and time. Nandalala, take away all of Surdas\'s ignorance.' },
        },
      ],
    },
    {
      title: 'ऊधो, मन न भए दस बीस',
      titleEn: 'Udho, man na bhae das bis',
      note: 'A gopi speaks to Uddhava in the Bhramaragita section (Raga Ramkali).',
      verses: [
        {
          n: 1,
          text: 'ऊधो, मन न भए दस बीस ।\nएक हुतो सो गयौ स्याम संग, को अवराधै ईस ॥',
          meaning: { en: 'Uddhava, the mind is not ten or twenty. I had one, and it went with Shyam; who is left to worship your God?' },
        },
        {
          n: 2,
          text: 'सिथिल भईं सबहीं माधौ बिनु जथा देह बिनु सीस ।\nस्वासा अटकि रही आसा लगि, जीवहिं कोटि बरीस ॥',
          meaning: { en: 'Without Madhava every sense has gone slack, like a body without a head. Our breath is held only by hope, and hope can keep us alive millions of years.' },
        },
        {
          n: 3,
          text: 'तुम तौ सखा स्यामसुन्दर के, सकल जोग के ईस ।\nसूरदास, रसिकन की बतियाँ पुरवौ मन जगदीस ॥',
          meaning: { en: 'You are the friend of Shyamasundara and a master of all yoga. Surdas says: O Lord of the world, fulfil the longing of those who love him.' },
        },
      ],
    },
    {
      title: 'निसिदिन बरसत नैन हमारे',
      titleEn: 'Nisidin barsat nain hamare',
      note: 'The gopis\' eyes weep without ceasing since Krishna left for Mathura.',
      verses: [
        {
          n: 1,
          text: 'निसिदिन बरसत नैन हमारे ।\nसदा रहत पावस ऋतु हम पर, जबते स्याम सिधारे ॥',
          meaning: { en: 'Our eyes rain night and day; since Shyam went away, the rainy season stays with us always.' },
        },
        {
          n: 2,
          text: 'अंजन थिर न रहत अँखियन में, कर कपोल भए कारे ।\nकंचुकि-पट सूखत नहिं कबहुँ, उर बिच बहत पनारे ॥',
          meaning: { en: 'Kajal does not stay in our eyes, and our hands and cheeks have turned black with it. Our blouse never dries, and streams run between our breasts.' },
        },
        {
          n: 3,
          text: 'आँसू सलिल भए पग थाके, बहे जात सित तारे ।\nसूरदास अब डूबत है ब्रज, काहे न लेत उबारे ॥',
          meaning: { en: 'Our tears have become a flood that has tired our feet, and even the white of our eyes is washed away. Surdas says: Braj is drowning now, why do you not save it?' },
        },
      ],
    },
    {
      title: 'मो सम कौन कुटिल खल कामी',
      titleEn: 'Mo sam kaun kutil khal kami',
      note: 'The poet calls himself the worst of sinners and asks the Lord for shelter (Raga Sarang).',
      verses: [
        {
          n: 1,
          text: 'मो सम कौन कुटिल खल कामी ।\nजेहिं तनु दियौ ताहिं बिसरायौ, ऐसौ नोनहरामी ॥',
          meaning: { en: 'Who is as crooked, wicked and lustful as I? I forgot the one who gave me this body; I am that ungrateful.' },
        },
        {
          n: 2,
          text: 'भरि भरि उदर बिषय कौं धावौं, जैसे सूकर ग्रामी ।\nहरिजन छाँडि हरी-बिमुखन की निसदिन करत गुलामी ॥',
          meaning: { en: 'I run after sense-pleasures to fill my belly again and again, like a village pig; leaving the Lord\'s people, I serve the enemies of Hari night and day.' },
        },
        {
          n: 3,
          text: 'पापी कौन बडौ है मोतैं, सब पतितन में नामी ।\nसूर, पतित कौं ठौर कहाँ है, सुनिए श्रीपति स्वामी ॥',
          meaning: { en: 'Who is a greater sinner than I, famous among all the fallen? Says Sur: where is a place for such a sinner? Listen, Lord of Shri.' },
        },
      ],
    },
    {
      title: 'मैया, मैं तो चंद-खिलौना लैहौं',
      titleEn: 'Maiya, main to chand-khilauna laihaun',
      note: 'The child Krishna demands the moon as a toy.',
      verses: [
        {
          n: 1,
          text: 'मैया, मैं तो चंद-खिलौना लैहौं ।\nजैहौं लोटि धरनि पर अबहीं, तेरी गोद न ऐहौं ॥',
          meaning: { en: 'Mother, I will have the moon for a toy. I shall roll on the ground this very moment and not come into your lap.' },
        },
        {
          n: 2,
          text: 'सुरी कौ पय पान न करिहौं, बेनी सिर न गुहैहौं ।\nह्वैहौं पूत नंद बाबा कौ, तेरौ सुत न कहैहौं ॥',
          meaning: { en: 'I will not drink the milk of the cow, nor have my hair plaited. I shall be Nanda Baba\'s son and not be called yours.' },
        },
        {
          n: 3,
          text: 'आगैं आउ, बात सुनि मेरी, बलदेवहि न जनैहौं ।\nहँसि समुझावति, कहति जसोमति, नई दुलहिया दैहौं ॥',
          meaning: { en: 'Yashoda says: come close, child, and hear me; I will not let Baladeva know. Smiling, she coaxes him: I will get you a new bride.' },
        },
        {
          n: 4,
          text: 'तेरी सौं, मेरी सुनि मैया, अबहिं बियाहन जैहौं ।\nसूरदास ह्वै कुटिल बराती, गीत सुमंगल गैहौं ॥',
          meaning: { en: 'Krishna says: by you, mother, hear me, I will go to be married right now. Says Surdas: I will turn into a mischievous wedding-guest and sing the auspicious songs.' },
        },
      ],
    },
  ],
};
