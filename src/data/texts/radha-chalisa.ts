/**
 * Śrī Rādhā Cālīsā ("Jaya vṛṣabhānu kuṁvari śrī śyāmā"), Hindi/Braj, in Devanagari. No author is named.
 *
 * Collated Nov 2026 against four typed copies of the widely printed text:
 *   R  drikpanchang.com "Shri Radha Chalisa" (base);  B  bhaktibharat.com "Shri Radha Chalisa";
 *   S  shubhpanchang.com "Radha Chalisa";  A  aajtak.in "Shri Radha Chalisa".
 * The four agree word for word and differ only in spelling ("कुँवरि/कुंवरि/कुँवरी", "वृषभानुजा/वुषभानुजा",
 * "प्रणवौं/प्रानावौ", "जैसौ/जैसो", "दिन कर/दिनकर", "बनबारी/बनवारी", "करहू/करहु", "सपनेहु/सपनेहुँ", "घनश्याम/धनश्याम"),
 * so this is one recension and the four may share a source; no reading choice against the base was needed
 * beyond spelling, which follows R. All give two opening dohas, forty chaupai couplets and one closing doha; the
 * chaupai are numbered 1-40, the dohas not. Doubts: none in the wording; c6 "दिन कर कन्या" is the Sun's daughter
 * Yamuna. Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const radhaChalisa: Mantra = {
  id: 'radha-chalisa',
  title: 'श्री राधा चालीसा',
  titleEn: 'Sri Radha Chalisa',
  category: 'chalisa',
  order: 37,
  deity: 'Śrī Rādhā',
  source: 'Traditional (no author named), Hindi/Braj',
  summary: 'The Hindi hymn to Radha, daughter of Vrishabhanu and Krishna\'s beloved, in forty verses and three dohas: her beauty and tender nature, her sakhis and the rasa-lila, her eternal home in Goloka, the greatness of her name above all austerities, and the promise that Krishna himself follows whoever repeats it. Recited on Radhashtami and in Vrindavan and Barsana.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'दोहा',
      titleEn: 'Opening doha',
      verses: [
        {
          text: 'श्री राधे वृषभानुजा, भक्तनि प्राणाधार ।\nवृन्दाविपिन विहारिणि, प्रणवौं बारंबार ॥',
          meaning: { en: 'Shri Radha, daughter of Vrishabhanu, life-breath of your devotees, who roam the Vrindavan grove: I bow to you again and again.' },
        },
        {
          text: 'जैसौ तैसौ रावरौ, कृष्ण प्रिया सुखधाम ।\nचरण शरण निज दीजिये, सुन्दर सुखद ललाम ॥',
          meaning: { en: 'I am yours, however I may be; Krishna\'s beloved, abode of happiness, grant me shelter at your feet, lovely and joyful one.' },
        },
      ],
    },
    {
      title: 'चौपाई',
      titleEn: 'Chaupai',
      verses: [
        {
          n: 1,
          text: 'जय वृषभानु कुँवरि श्री श्यामा ।\nकीरति नंदिनी शोभा धामा ॥',
          meaning: { en: 'Victory to Vrishabhanu\'s daughter, Shri Shyama, delight of Kirti, abode of beauty.' },
        },
        {
          n: 2,
          text: 'नित्य विहारिनि श्याम अधारा ।\nअमित मोद मंगल दातारा ॥',
          meaning: { en: 'Ever roaming, support of Shyam, giver of boundless joy and blessing.' },
        },
        {
          n: 3,
          text: 'रास विलासिनि रस विस्तारिनि ।\nसहचरि सुभग यूथ मन भावनि ॥',
          meaning: { en: 'Joy of the rasa-dance, spreader of rapture, dear to her companions and their lovely company.' },
        },
        {
          n: 4,
          text: 'नित्य किशोरी राधा गोरी ।\nश्याम प्राणधन अति जिय भोरी ॥',
          meaning: { en: 'Ever-youthful fair Radha, whose heart is Shyam\'s life-treasure and so tender.' },
        },
        {
          n: 5,
          text: 'करुणा सागर हिय उमंगिनी ।\nललितादिक सखियन की संगिनी ॥',
          meaning: { en: 'Ocean of compassion, heart overflowing, companion of Lalita and the other sakhis.' },
        },
        {
          n: 6,
          text: 'दिन कर कन्या कूल विहारिनि ।\nकृष्ण प्राण प्रिय हिय हुलसावनि ॥',
          meaning: { en: 'You roam by the bank of the Sun\'s daughter (Yamuna), and you thrill the heart of Krishna, dear as his own life.' },
        },
        {
          n: 7,
          text: 'नित्य श्याम तुमरौ गुण गावैं ।\nराधा राधा कहि हरषावैं ॥',
          meaning: { en: 'Shyam ever sings your praise, glad to say "Radha, Radha".' },
        },
        {
          n: 8,
          text: 'मुरली में नित नाम उचारें ।\nतुव कारण लीला वपु धारें ॥',
          meaning: { en: 'On his flute he always sounds your name, and for you he takes a body in his play.' },
        },
        {
          n: 9,
          text: 'प्रेम स्वरूपिणि अति सुकुमारी ।\nश्याम प्रिया वृषभानु दुलारी ॥',
          meaning: { en: 'You are love itself, very gentle, Shyam\'s beloved, darling of Vrishabhanu.' },
        },
        {
          n: 10,
          text: 'नवल किशोरी अति छवि धामा ।\nद्युति लघु लगै कोटि रति कामा ॥',
          meaning: { en: 'Ever-fresh maiden, abode of beauty, at whose radiance the brilliance of millions of Rati and Kama seems small.' },
        },
        {
          n: 11,
          text: 'गौरांगी शशि निंदक बदना ।\nसुभग चपल अनियारे नयना ॥',
          meaning: { en: 'Fair-limbed, your face shames the moon, your sweet restless eyes are long-lined.' },
        },
        {
          n: 12,
          text: 'जावक युत युग पंकज चरना ।\nनूपुर धुनि प्रीतम मन हरना ॥',
          meaning: { en: 'Your lotus feet are tinted with lac, and the jingle of your anklets steals your beloved\'s mind.' },
        },
        {
          n: 13,
          text: 'संतत सहचरि सेवा करहीं ।\nमहा मोद मंगल मन भरहीं ॥',
          meaning: { en: 'Your companions always serve you and fill their hearts with joy and blessing.' },
        },
        {
          n: 14,
          text: 'रसिकन जीवन प्राण अधारा ।\nराधा नाम सकल सुख सारा ॥',
          meaning: { en: 'Radha is the life and support of the connoisseurs of love, and her name is the essence of all happiness.' },
        },
        {
          n: 15,
          text: 'अगम अगोचर नित्य स्वरूपा ।\nध्यान धरत निशिदिन ब्रज भूपा ॥',
          meaning: { en: 'Beyond reach and sight, eternal in form: the king of Braj meditates on you night and day.' },
        },
        {
          n: 16,
          text: 'उपजेउ जासु अंश गुण खानी ।\nकोटिन उमा रमा ब्रह्मानी ॥',
          meaning: { en: 'From a part of you arose a mine of virtue, millions of Umas, Ramas and Brahmanis.' },
        },
        {
          n: 17,
          text: 'नित्य धाम गोलोक विहारिनि ।\nजन रक्षक दुख दोष नसावनि ॥',
          meaning: { en: 'You dwell eternally in Goloka, protecting your people and destroying sorrow and fault.' },
        },
        {
          n: 18,
          text: 'शिव अज मुनि सनकादिक नारद ।\nपार न पाँइ शेष अरु शारद ॥',
          meaning: { en: 'Shiva, Brahma, the sages, Sanaka and Narada, Shesha and Sharada cannot find your end.' },
        },
        {
          n: 19,
          text: 'राधा शुभ गुण रूप उजारी ।\nनिरखि प्रसन्न होत बनबारी ॥',
          meaning: { en: 'Radha, bright with good qualities and beauty: seeing her, Krishna is pleased.' },
        },
        {
          n: 20,
          text: 'ब्रज जीवन धन राधा रानी ।\nमहिमा अमित न जाय बखानी ॥',
          meaning: { en: 'Queen Radha, wealth of Braj\'s life, whose greatness cannot be told.' },
        },
        {
          n: 21,
          text: 'प्रीतम संग देइ गलबाँही ।\nबिहरत नित वृन्दावन माँही ॥',
          meaning: { en: 'With her beloved\'s arm round her neck she ever strolls through Vrindavan.' },
        },
        {
          n: 22,
          text: 'राधा कृष्ण कृष्ण कहैं राधा ।\nएक रूप दोउ प्रीति अगाधा ॥',
          meaning: { en: 'Radha says "Krishna", Krishna says "Radha": the two are one form, of boundless love.' },
        },
        {
          n: 23,
          text: 'श्री राधा मोहन मन हरनी ।\nजन सुख दायक प्रफुलित बदनी ॥',
          meaning: { en: 'Shri Radha steals Mohana\'s heart, gives joy to her people, with a face in bloom.' },
        },
        {
          n: 24,
          text: 'कोटिक रूप धरें नंद नंदा ।\nदर्श करन हित गोकुल चन्दा ॥',
          meaning: { en: 'Nanda\'s son takes a million forms, just to see you, moon of Gokula.' },
        },
        {
          n: 25,
          text: 'रास केलि करि तुम्हें रिझावें ।\nमान करौ जब अति दुःख पावें ॥',
          meaning: { en: 'He tries to please you with rasa-play, and when you are sulking he is in great distress.' },
        },
        {
          n: 26,
          text: 'प्रफुलित होत दर्श जब पावें ।\nविविध भांति नित विनय सुनावें ॥',
          meaning: { en: 'He blossoms when he sees you, and in many ways makes his entreaty every day.' },
        },
        {
          n: 27,
          text: 'वृन्दारण्य विहारिनि श्यामा ।\nनाम लेत पूरण सब कामा ॥',
          meaning: { en: 'Shyama, roaming the Vrindavan forest, whose very name fulfils every desire.' },
        },
        {
          n: 28,
          text: 'कोटिन यज्ञ तपस्या करहू ।\nविविध नेम व्रत हिय में धरहू ॥',
          meaning: { en: 'You may do millions of sacrifices and austerities and keep many vows and rules,' },
        },
        {
          n: 29,
          text: 'तऊ न श्याम भक्तहिं अपनावें ।\nजब लगि राधा नाम न गावें ॥',
          meaning: { en: 'yet Shyam will not accept the devotee until he sings Radha\'s name.' },
        },
        {
          n: 30,
          text: 'वृन्दाविपिन स्वामिनी राधा ।\nलीला वपु तब अमित अगाधा ॥',
          meaning: { en: 'Queen of the Vrindavan grove, Radha, your play and body are boundless.' },
        },
        {
          n: 31,
          text: 'स्वयं कृष्ण पावैं नहिं पारा ।\nऔर तुम्हें को जानन हारा ॥',
          meaning: { en: 'Even Krishna himself cannot find your end; who else could know you?' },
        },
        {
          n: 32,
          text: 'श्री राधा रस प्रीति अभेदा ।\nसादर गान करत नित वेदा ॥',
          meaning: { en: 'Shri Radha\'s loving relish is without difference from Krishna\'s, and the Vedas sing it reverently.' },
        },
        {
          n: 33,
          text: 'राधा त्यागि कृष्ण को भजिहैं ।\nते सपनेहु जग जलधि न तरि हैं ॥',
          meaning: { en: 'Those who leave Radha and worship Krishna will not even in a dream cross the ocean of the world.' },
        },
        {
          n: 34,
          text: 'कीरति कुँवरि लाडिली राधा ।\nसुमिरत सकल मिटहिं भवबाधा ॥',
          meaning: { en: 'Kirti\'s darling daughter Radha: remembering her ends all troubles of rebirth.' },
        },
        {
          n: 35,
          text: 'नाम अमंगल मूल नसावन ।\nत्रिविध ताप हर हरि मनभावन ॥',
          meaning: { en: 'The name destroys the root of ill-fortune, removes the three kinds of suffering, and delights Hari.' },
        },
        {
          n: 36,
          text: 'राधा नाम लेइ जो कोई ।\nसहजहि दामोदर बस होई ॥',
          meaning: { en: 'Whoever says Radha\'s name, Damodara easily comes under his sway.' },
        },
        {
          n: 37,
          text: 'राधा नाम परम सुखदाई ।\nभजतहिं कृपा करहिं यदुराई ॥',
          meaning: { en: 'Radha\'s name is supremely joy-giving; as soon as one repeats it, the Yadava lord is gracious.' },
        },
        {
          n: 38,
          text: 'यशुमति नन्दन पीछे फिरिहैं ।\nजो कोऊ राधा नाम सुमिरिहैं ॥',
          meaning: { en: 'Yashoda\'s son follows behind whoever repeats Radha\'s name.' },
        },
        {
          n: 39,
          text: 'रास विहारिनि श्यामा प्यारी ।\nकरहु कृपा बरसाने वारी ॥',
          meaning: { en: 'Dear Shyama, queen of the rasa-dance, be gracious, lady of Barsana.' },
        },
        {
          n: 40,
          text: 'वृन्दावन है शरण तिहारी ।\nजय जय जय वृषभानु दुलारी ॥',
          meaning: { en: 'Vrindavan is under your protection; victory, victory, victory to Vrishabhanu\'s darling.' },
        },
      ],
    },
    {
      title: 'दोहा',
      titleEn: 'Closing doha',
      verses: [
        {
          text: 'श्रीराधा सर्वेश्वरी, रसिकेश्वर घनश्याम ।\nकरहुँ निरंतर बास मैं, श्रीवृन्दावन धाम ॥',
          meaning: { en: 'Shri Radha, sovereign of all, lord of the rasika Ghanashyama: may I live always in holy Vrindavan.' },
        },
      ],
    },
  ],
};
