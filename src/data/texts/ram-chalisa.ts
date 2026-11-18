/**
 * Śrī Rāma Cālīsā, attributed to Haridāsa (named in the closing verses), Hindi/Awadhi, in Devanagari.
 *
 * Collated Nov 2026 against three independent typed copies of the widely printed text:
 *   B  bhaktibharat.com "Ram Chalisa" (base for wording; instaastro.com prints the identical text);
 *   S  shubhpanchang.com "Ram Chalisa";  A  aajtak.in "Shri Ram Chalisa".
 * This Chalisa has no opening doha and is printed with more than forty chaupai: S and A have 46
 * couplets, B has 45 (it runs "और आस मन में जो …" and "तीनहुं काल …" together into one garbled couplet, so
 * the two couplets of S and A, c42 and c43, are kept). The verses are numbered 1-46; the two closing
 * dohas are not. The Sanskrit prefatory verse "वैदेही हरणं जटायु मरणं …" printed by B and A is not part of
 * the Chalisa and is left out. Order: S puts the four couplets c32-35 ("जय जय जय प्रभु ज्योति स्वरूपा …
 * सत्य शपथ …") before "सुनहु राम"; B and A place them after "राम आत्मा पोषण हारे", which is followed.
 * Readings chosen against the base B (5, plus the restored couplet):
 *   c21 "सीता नाम पुनीता" (S; B, A "सीता राम", which does not parse with "पुनीता");  c27 "ताकी मुक्ति" (S, A);
 *   c35 "भक्तिहिं" (S, A; B "भक्तहिं");  c36 "जगपति" (S, A; B "जापति", a misprint);  c31 "राम" (B "रामा").
 * By majority against one copy: c4/5 order (S, B; A swaps them); c6 "तुव" (B, A; S "तब"); c9 "वेद" (S, B;
 * A "भेद"); c46 "पावै" (A, B; S "जावै"); c31 "के प्यारे" (A, B; S "दुलारे"); c33 "जय सत्य ब्रत" (A, B; S
 * "सत्य सत्य सत्य"); c15 "पावत कोउ न" (A, B; S "पाव न कोउ"); c23 "सो तुमरे" (S, B; A "जो"). Nukta
 * letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const ramChalisa: Mantra = {
  id: 'ram-chalisa',
  title: 'श्री राम चालीसा',
  titleEn: 'Sri Ram Chalisa',
  category: 'chalisa',
  order: 13,
  deity: 'Śrī Rāma',
  source: 'Haridāsa (named in the closing verses), Hindi/Awadhi',
  summary: 'The Hindi hymn to Rama in forty-six verses: his glory and the greatness of his name, Hanuman, Bharata, Lakshmana and Shatrughna, Sita as Mahalakshmi, Rama as the unchanging truth and Brahman, and the fruits of reciting the Chalisa with devotion. Recited on Ram Navami and Tuesdays.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'चौपाई',
      titleEn: 'Chaupai',
      note: 'The verses; this Chalisa is printed with forty-six couplets, not forty.',
      verses: [
        {
          n: 1,
          text: 'श्री रघुबीर भक्त हितकारी ।\nसुनि लीजै प्रभु अरज हमारी ॥',
          meaning: { en: 'Sri Raghubir, benefactor of your devotees, Lord, please hear our petition.' },
        },
        {
          n: 2,
          text: 'निशि दिन ध्यान धरै जो कोई ।\nता सम भक्त और नहिं होई ॥',
          meaning: { en: 'Whoever meditates on you day and night, no other devotee equals him.' },
        },
        {
          n: 3,
          text: 'ध्यान धरे शिवजी मन माहीं ।\nब्रह्मा इन्द्र पार नहिं पाहीं ॥',
          meaning: { en: 'Shiva meditates on you in his mind; Brahma and Indra cannot find your limit.' },
        },
        {
          n: 4,
          text: 'जय जय जय रघुनाथ कृपाला ।\nसदा करो सन्तन प्रतिपाला ॥',
          meaning: { en: 'Victory, victory, victory to merciful Raghunatha; always protect the saints.' },
        },
        {
          n: 5,
          text: 'दूत तुम्हार वीर हनुमाना ।\nजासु प्रभाव तिहूँ पुर जाना ॥',
          meaning: { en: 'Your messenger is the hero Hanuman, whose power is known in all three worlds.' },
        },
        {
          n: 6,
          text: 'तुव भुजदण्ड प्रचण्ड कृपाला ।\nरावण मारि सुरन प्रतिपाला ॥',
          meaning: { en: 'Merciful one, your mighty arms killed Ravana and protected the gods.' },
        },
        {
          n: 7,
          text: 'तुम अनाथ के नाथ गोसाईं ।\nदीनन के हो सदा सहाई ॥',
          meaning: { en: 'You are the lord of the helpless, master, and always the helper of the poor.' },
        },
        {
          n: 8,
          text: 'ब्रह्मादिक तव पार न पावैं ।\nसदा ईश तुम्हरो यश गावैं ॥',
          meaning: { en: 'Brahma and the other gods cannot reach your limit; Ishvara (Shiva) always sings your fame.' },
        },
        {
          n: 9,
          text: 'चारिउ वेद भरत हैं साखी ।\nतुम भक्तन की लज्जा राखी ॥',
          meaning: { en: 'The four Vedas and Bharata are witnesses that you have always kept your devotees\' honour.' },
        },
        {
          n: 10,
          text: 'गुण गावत शारद मन माहीं ।\nसुरपति ताको पार न पाहीं ॥',
          meaning: { en: 'Sharada sings your virtues in her mind, and even Indra cannot find their limit.' },
        },
        {
          n: 11,
          text: 'नाम तुम्हार लेत जो कोई ।\nता सम धन्य और नहिं होई ॥',
          meaning: { en: 'Whoever takes your name, no one is as blessed as he.' },
        },
        {
          n: 12,
          text: 'राम नाम है अपरम्पारा ।\nचारिहु वेदन जाहि पुकारा ॥',
          meaning: { en: 'The name Rama is limitless; the four Vedas proclaim it.' },
        },
        {
          n: 13,
          text: 'गणपति नाम तुम्हारो लीन्हो ।\nतिनको प्रथम पूज्य तुम कीन्हो ॥',
          meaning: { en: 'Ganapati took your name, and so you made him the first to be worshipped.' },
        },
        {
          n: 14,
          text: 'शेष रटत नित नाम तुम्हारा ।\nमहि को भार शीश पर धारा ॥',
          meaning: { en: 'Shesha repeats your name always and bears the weight of the earth on his head.' },
        },
        {
          n: 15,
          text: 'फूल समान रहत सो भारा ।\nपावत कोउ न तुम्हरो पारा ॥',
          meaning: { en: 'That burden stays light as a flower for him; yet no one finds your limit.' },
        },
        {
          n: 16,
          text: 'भरत नाम तुम्हरो उर धारो ।\nतासों कबहुँ न रण में हारो ॥',
          meaning: { en: 'Bharata held your name in his heart, and so he never lost in battle.' },
        },
        {
          n: 17,
          text: 'नाम शत्रुहन हृदय प्रकाशा ।\nसुमिरत होत शत्रु कर नाशा ॥',
          meaning: { en: 'Your name shines in Shatrughna\'s heart; by remembering it, enemies are destroyed.' },
        },
        {
          n: 18,
          text: 'लषन तुम्हारे आज्ञाकारी ।\nसदा करत सन्तन रखवारी ॥',
          meaning: { en: 'Lakshmana obeys your command and always guards the saints.' },
        },
        {
          n: 19,
          text: 'ताते रण जीते नहिं कोई ।\nयुद्ध जुरे यमहूँ किन होई ॥',
          meaning: { en: 'So no one can defeat him in battle; even if Yama himself joined the fight, what would it matter?' },
        },
        {
          n: 20,
          text: 'महालक्ष्मी धर अवतारा ।\nसब विधि करत पाप को छारा ॥',
          meaning: { en: 'Mahalakshmi took birth as an avatar and in every way turns sin to ashes.' },
        },
        {
          n: 21,
          text: 'सीता नाम पुनीता गायो ।\nभुवनेश्वरी प्रभाव दिखायो ॥',
          meaning: { en: 'The pure name of Sita is sung; Bhuvaneshvari showed her power.' },
        },
        {
          n: 22,
          text: 'घट सों प्रकट भई सो आई ।\nजाको देखत चन्द्र लजाई ॥',
          meaning: { en: 'She came forth born from a pot, and at the sight of her even the moon is put to shame.' },
        },
        {
          n: 23,
          text: 'सो तुमरे नित पाँव पलोटत ।\nनवो निद्धि चरणन में लोटत ॥',
          meaning: { en: 'She always presses your feet, and the nine treasures roll at your feet.' },
        },
        {
          n: 24,
          text: 'सिद्धि अठारह मंगलकारी ।\nसो तुम पर जावै बलिहारी ॥',
          meaning: { en: 'The eighteen auspicious siddhis are ready to offer themselves to you.' },
        },
        {
          n: 25,
          text: 'औरहु जो अनेक प्रभुताई ।\nसो सीतापति तुमहिं बनाई ॥',
          meaning: { en: 'All the many other powers and glories, Lord of Sita, you made them.' },
        },
        {
          n: 26,
          text: 'इच्छा ते कोटिन संसारा ।\nरचत न लागत पल की बारा ॥',
          meaning: { en: 'By your will crores of worlds are made, and it takes not even a moment.' },
        },
        {
          n: 27,
          text: 'जो तुम्हरे चरणन चित लावै ।\nताकी मुक्ति अवसि हो जावै ॥',
          meaning: { en: 'Whoever fixes his mind on your feet will surely be liberated.' },
        },
        {
          n: 28,
          text: 'सुनहु राम तुम तात हमारे ।\nतुमहिं भरत कुल पूज्य प्रचारे ॥',
          meaning: { en: 'Hear, Rama: you are our father, and you are proclaimed the one worshipped by Bharata\'s line.' },
        },
        {
          n: 29,
          text: 'तुमहिं देव कुल देव हमारे ।\nतुम गुरु देव प्राण के प्यारे ॥',
          meaning: { en: 'You are our god and our family deity, our guru-god, dear as life itself.' },
        },
        {
          n: 30,
          text: 'जो कुछ हो सो तुमहिं राजा ।\nजय जय जय प्रभु राखो लाजा ॥',
          meaning: { en: 'Whatever exists is you, O king; victory to you, Lord, protect my honour.' },
        },
        {
          n: 31,
          text: 'राम आत्मा पोषण हारे ।\nजय जय जय दशरथ के प्यारे ॥',
          meaning: { en: 'Rama, the soul and nourisher of all; victory to the beloved of Dasharatha.' },
        },
        {
          n: 32,
          text: 'जय जय जय प्रभु ज्योति स्वरूपा ।\nनिर्गुण ब्रह्म अखण्ड अनूपा ॥',
          meaning: { en: 'Victory to the Lord whose form is light, the attributeless Brahman, undivided and without equal.' },
        },
        {
          n: 33,
          text: 'सत्य सत्य जय सत्य ब्रत स्वामी ।\nसत्य सनातन अन्तर्यामी ॥',
          meaning: { en: 'Truth, truth; victory to the Lord whose vow is truth, the eternal truth who knows every heart.' },
        },
        {
          n: 34,
          text: 'सत्य भजन तुम्हरो जो गावै ।\nसो निश्चय चारों फल पावै ॥',
          meaning: { en: 'One who sings your praise in truth surely gains all four fruits of life.' },
        },
        {
          n: 35,
          text: 'सत्य शपथ गौरीपति कीन्हीं ।\nतुमने भक्तिहिं सब सिद्धि दीन्हीं ॥',
          meaning: { en: 'Gauri\'s lord (Shiva) swore a true oath, and through devotion you gave all attainments.' },
        },
        {
          n: 36,
          text: 'ज्ञान हृदय दो ज्ञान स्वरूपा ।\nनमो नमो जय जगपति भूपा ॥',
          meaning: { en: 'Embodiment of knowledge, place knowledge in my heart; salutations, salutations, victory to the lord and king of the world.' },
        },
        {
          n: 37,
          text: 'धन्य धन्य तुम धन्य प्रतापा ।\nनाम तुम्हार हरत संतापा ॥',
          meaning: { en: 'Blessed, blessed are you, of blessed glory; your name removes all affliction.' },
        },
        {
          n: 38,
          text: 'सत्य शुद्ध देवन मुख गाया ।\nबजी दुन्दुभी शंख बजाया ॥',
          meaning: { en: 'The gods sang of your truth and purity; drums sounded and conches were blown.' },
        },
        {
          n: 39,
          text: 'सत्य सत्य तुम सत्य सनातन ।\nतुम ही हो हमरे तन मन धन ॥',
          meaning: { en: 'You are truth, the eternal truth; you are our body, mind and wealth.' },
        },
        {
          n: 40,
          text: 'याको पाठ करे जो कोई ।\nज्ञान प्रकट ताके उर होई ॥',
          meaning: { en: 'Whoever recites this will find knowledge dawn in his heart.' },
        },
        {
          n: 41,
          text: 'आवागमन मिटै तिहि केरा ।\nसत्य वचन माने शिव मेरा ॥',
          meaning: { en: 'His coming and going in rebirth comes to an end; my Shiva affirms these words as true.' },
        },
        {
          n: 42,
          text: 'और आस मन में जो होई ।\nमनवांछित फल पावे सोई ॥',
          meaning: { en: 'Whatever other hope he holds in his mind, he gains the fruit he wishes.' },
        },
        {
          n: 43,
          text: 'तीनहुं काल ध्यान जो ल्यावै ।\nतुलसी दल अरु फूल चढावै ॥',
          meaning: { en: 'One who meditates at the three times of day and offers tulasi leaves and flowers,' },
        },
        {
          n: 44,
          text: 'साग पत्र सो भोग लगावै ।\nसो नर सकल सिद्धता पावै ॥',
          meaning: { en: 'and offers a simple dish of leaves as food-offering, gains every accomplishment.' },
        },
        {
          n: 45,
          text: 'अन्त समय रघुबर पुर जाई ।\nजहाँ जन्म हरि भक्त कहाई ॥',
          meaning: { en: 'At the end he goes to Raghuvara\'s city, where birth makes one known as a devotee of Hari.' },
        },
        {
          n: 46,
          text: 'श्री हरिदास कहै अरु गावै ।\nसो वैकुण्ठ धाम को पावै ॥',
          meaning: { en: 'One who says and sings this as Sri Haridasa does reaches the abode of Vaikuntha.' },
        },
      ],
    },
    {
      title: 'दोहा',
      titleEn: 'Closing dohas',
      verses: [
        {
          text: 'सात दिवस जो नेम कर, पाठ करे चित लाय ।\nहरिदास हरि कृपा से, अवसि भक्ति को पाय ॥',
          meaning: { en: 'One who recites it with discipline and a focused mind for seven days will surely gain devotion by Hari\'s grace, says Haridasa.' },
        },
        {
          text: 'राम चालीसा जो पढे, रामचरण चित लाय ।\nजो इच्छा मन में करै, सकल सिद्ध हो जाय ॥',
          meaning: { en: 'One who reads the Ram Chalisa with his mind on Rama\'s feet will see whatever wish he holds in mind fulfilled.' },
        },
      ],
    },
  ],
};
