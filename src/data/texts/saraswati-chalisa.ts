/**
 * Śrī Sarasvatī Cālīsā, in Hindi/Awadhi, Devanagari. The dohas name the poet as "Rāmasāgara".
 *
 * Collated Nov 2026 against three typed copies of the widely printed text:
 *   B  bhaktibharat.com (amp), "Saraswati Chalisa" (base for order and spelling of unlisted lines);
 *   S  shubhpanchang.com, "Saraswati Mata Chalisa";   A  aajtak.in, "Shri Saraswati Chalisa".
 * Readings chosen against B (S and A agreeing unless noted; B has several slips and one respelt line):
 *   d1 "पद्मरज" kept from B (S "पद-रज", A "पद कमल रज") but "धारि" (S, A; rhymes with दातारि) for B "धरि";
 *   d2 "रामसागर के पाप को" (S, A; B has replaced the poet's name by "दुष्जनों");
 *   v5 "तबहि मातु का निज अवतारा / पाप हीन करती महि तारा" (S, A rhyme; B "अवतारी … महतारी");
 *   v10 "केवल" (B typo "केव");  v12 "करै" (three-way: B "करहिं", S "करई", A "करै"; singular chosen) and
 *   "तेहि न धरइ चित सुन्दर माता" (S, A; B drops "सुन्दर");  v13 "करूं भाँति बहुतेरी" (S; B "करउं … बहु तेरी");
 *   v19 "संहारेउ तेहि माता" (S, A; B "संहारे उन");  v20 "हृदय" (B "हदय");  v21 "जिम" (S, A) and "बिनवउं" (B
 *   splits it "बिन वउं");  v22 "वधे" (S "वधे", A "बधे"; B "बाँधे" is "bound", not "slain");
 *   v26 "विष्णु रुद्र अज सकहिं न मारी" (S, A; B "जस कहिन मारी");  v33 "करइ" (S, A);  v34 "माई" (S, A; B "भाई");
 *   closing doha "देहुं … सरस्वति" and "अधम रामसागरहिं तुम, आश्रय देउ पुनातु" (S, A; B "राम सागर अधम को … देदातु").
 * Kept from B against A (A is a tidied recension): v6 "वाल्मीकि जी थे हत्यारा" (A "बहम ज्ञानी"), v7 "रामचरित",
 * v16-17 "कीन्ह … भई", v39 "रामसागर बाँधि हेतु भवानी / कीजै कृपा दास निज जानी" (A "करहु कृपा भवमुक्ति … मो कहं").
 * Spelling-only variants (ए/ऐ endings, ण्ड/ंड, क्षण/छण, जिमि/जिम) follow B unless listed. Dashes, commas and verse
 * numbers of the sources are dropped; nukta letters are written without the dot.
 * Verse count: all three copies have 39 chaupai couplets, not 40 (bhaktibharat's printed numbering reaches "40" because
 * its first group is numbered 4 after only three couplets). The text is complete as printed, so 39 numbered verses are given.
 * The two opening dohas and the two closing dohas are not numbered. Meanings are original; no published translation was used.
 */
import type { Mantra } from '../types';

export const saraswatiChalisa: Mantra = {
  id: 'saraswati-chalisa',
  title: 'श्री सरस्वती चालीसा',
  titleEn: 'Sri Saraswati Chalisa',
  category: 'chalisa',
  order: 20,
  deity: 'Śrī Sarasvatī',
  source: 'Rāmasāgara (named in the dohas), Hindi/Awadhi',
  summary: 'The Hindi hymn to Sarasvati, goddess of learning: her form with the veena and swan, how poets such as Valmiki, Kalidasa, Tulsi and Sur rose by her grace, her help against Madhu-Kaitabha, Chanda-Munda, Raktabija and Shumbha-Nishumbha, and the blessings promised to those who recite it. Sung on Vasant Panchami and before study.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'दोहा',
      titleEn: 'Opening dohas',
      verses: [
        {
          text: 'जनक जननि पद्मरज, निज मस्तक पर धारि ।\nबन्दौं मातु सरस्वती, बुद्धि बल दे दातारि ॥',
          meaning: { en: 'Placing on my head the lotus-foot dust of my father and mother, I bow to Mother Sarasvati, the giver of intellect and strength.' },
        },
        {
          text: 'पूर्ण जगत में व्याप्त तव, महिमा अमित अनंतु ।\nरामसागर के पाप को, मातु तुही अब हन्तु ॥',
          meaning: { en: 'Your glory fills the whole world, limitless and endless; Mother, destroy the sins of Ramasagar now.' },
        },
      ],
    },
    {
      title: 'चालीसा',
      titleEn: 'Chalisa',
      note: 'The thirty-nine couplets of the chalisa.',
      verses: [
        {
          n: 1,
          text: 'जय श्री सकल बुद्धि बलरासी ।\nजय सर्वज्ञ अमर अविनाशी ॥',
          meaning: { en: 'Victory to you, storehouse of all intellect and strength; victory to the all-knowing, deathless, imperishable one.' },
        },
        {
          n: 2,
          text: 'जय जय जय वीणाकर धारी ।\nकरती सदा सुहंस सवारी ॥',
          meaning: { en: 'Victory, victory, victory to the one who holds the veena, who always rides a fine swan.' },
        },
        {
          n: 3,
          text: 'रूप चतुर्भुज धारी माता ।\nसकल विश्व अन्दर विख्याता ॥',
          meaning: { en: 'Mother, you take a four-armed form and are renowned throughout the whole universe.' },
        },
        {
          n: 4,
          text: 'जग में पाप बुद्धि जब होती ।\nतब ही धर्म की फीकी ज्योति ॥',
          meaning: { en: 'When sin grows in the mind of the world, the light of dharma grows dim.' },
        },
        {
          n: 5,
          text: 'तबहि मातु का निज अवतारा ।\nपाप हीन करती महि तारा ॥',
          meaning: { en: 'Then the Mother takes birth herself and frees the earth of sin, carrying it across.' },
        },
        {
          n: 6,
          text: 'वाल्मीकि जी थे हत्यारा ।\nतव प्रसाद जानै संसारा ॥',
          meaning: { en: 'Valmiki was once a murderer; the world knows it was through your grace that he changed.' },
        },
        {
          n: 7,
          text: 'रामचरित जो रचे बनाई ।\nआदि कवि की पदवी पाई ॥',
          meaning: { en: 'He composed the story of Rama and won the title of the first poet.' },
        },
        {
          n: 8,
          text: 'कालिदास जो भये विख्याता ।\nतेरी कृपा दृष्टि से माता ॥',
          meaning: { en: 'Kalidasa became famous too, Mother, through the glance of your grace.' },
        },
        {
          n: 9,
          text: 'तुलसी सूर आदि विद्वाना ।\nभये और जो ज्ञानी नाना ॥',
          meaning: { en: 'Tulsi, Sur and many other learned and wise people arose in the same way.' },
        },
        {
          n: 10,
          text: 'तिन्ह न और रहेउ अवलम्बा ।\nकेवल कृपा आपकी अम्बा ॥',
          meaning: { en: 'They had no other support but your grace alone, Mother.' },
        },
        {
          n: 11,
          text: 'करहु कृपा सोइ मातु भवानी ।\nदुखित दीन निज दासहि जानी ॥',
          meaning: { en: 'Show the same grace to me, Mother Bhavani, knowing me as your poor and sorrowful servant.' },
        },
        {
          n: 12,
          text: 'पुत्र करै अपराध बहूता ।\nतेहि न धरइ चित सुन्दर माता ॥',
          meaning: { en: 'A son may commit many offences, yet the good mother does not keep them in her mind.' },
        },
        {
          n: 13,
          text: 'राखु लाज जननि अब मेरी ।\nविनय करूं भाँति बहुतेरी ॥',
          meaning: { en: 'Mother, protect my honour now; I plead with you in many ways.' },
        },
        {
          n: 14,
          text: 'मैं अनाथ तेरी अवलंबा ।\nकृपा करउ जय जय जगदंबा ॥',
          meaning: { en: 'I am an orphan and you are my only support; show grace, victory to Jagadamba.' },
        },
        {
          n: 15,
          text: 'मधुकैटभ जो अति बलवाना ।\nबाहुयुद्ध विष्णु से ठाना ॥',
          meaning: { en: 'Madhu and Kaitabha, who were very mighty, took on Vishnu in hand-to-hand combat.' },
        },
        {
          n: 16,
          text: 'समर हजार पाँच में घोरा ।\nफिर भी मुख उनसे नहीं मोरा ॥',
          meaning: { en: 'In a terrible fight of five thousand years they still did not turn their faces from him.' },
        },
        {
          n: 17,
          text: 'मातु सहाय कीन्ह तेहि काला ।\nबुद्धि विपरीत भई खलहाला ॥',
          meaning: { en: 'At that time the Mother came to help, and the wicked pair\'s thinking turned against them.' },
        },
        {
          n: 18,
          text: 'तेहि ते मृत्यु भई खल केरी ।\nपुरवहु मातु मनोरथ मेरी ॥',
          meaning: { en: 'Through that, the wicked ones met their death; Mother, fulfil my wish too.' },
        },
        {
          n: 19,
          text: 'चंड मुण्ड जो थे विख्याता ।\nक्षण महु संहारेउ तेहि माता ॥',
          meaning: { en: 'The famed Chanda and Munda you destroyed in a moment, Mother.' },
        },
        {
          n: 20,
          text: 'रक्त बीज से समरथ पापी ।\nसुरमुनि हृदय धरा सब काँपी ॥',
          meaning: { en: 'The sinner Raktabija was so powerful that the hearts of gods and sages trembled.' },
        },
        {
          n: 21,
          text: 'काटेउ सिर जिम कदली खम्बा ।\nबार बार बिनवउं जगदंबा ॥',
          meaning: { en: 'You cut off his head like a plantain stem; again and again I beg you, Jagadamba.' },
        },
        {
          n: 22,
          text: 'जगप्रसिद्ध जो शुंभनिशुंभा ।\nक्षण में वधे ताहि तू अम्बा ॥',
          meaning: { en: 'The world-famous Shumbha and Nishumbha you killed in an instant, Mother.' },
        },
        {
          n: 23,
          text: 'भरत-मातु बुद्धि फेरेऊ जाई ।\nरामचन्द्र बनवास कराई ॥',
          meaning: { en: 'You turned the mind of Bharata\'s mother and so caused Ramachandra\'s exile to the forest.' },
        },
        {
          n: 24,
          text: 'एहि विधि रावण वध तू कीन्हा ।\nसुर नर मुनि सबको सुख दीन्हा ॥',
          meaning: { en: 'In this way you brought about Ravana\'s death and gave happiness to gods, men and sages.' },
        },
        {
          n: 25,
          text: 'को समरथ तव यश गुन गाना ।\nनिगम अनादि अनंत बखाना ॥',
          meaning: { en: 'Who is able to sing your fame and virtues? Even the Vedas, beginningless, call them endless.' },
        },
        {
          n: 26,
          text: 'विष्णु रुद्र अज सकहिं न मारी ।\nजिनकी हो तुम रक्षाकारी ॥',
          meaning: { en: 'Vishnu, Rudra and Aja (Brahma) cannot strike down the one whom you protect.' },
        },
        {
          n: 27,
          text: 'रक्त दन्तिका और शताक्षी ।\nनाम अपार है दानव भक्षी ॥',
          meaning: { en: 'Raktadantika and Shatakshi are your names, boundless, as devourer of demons.' },
        },
        {
          n: 28,
          text: 'दुर्गम काज धरा पर कीन्हा ।\nदुर्गा नाम सकल जग लीन्हा ॥',
          meaning: { en: 'You did a hard task on earth, so the whole world took your name as Durga.' },
        },
        {
          n: 29,
          text: 'दुर्ग आदि हरनी तू माता ।\nकृपा करहु जब जब सुखदाता ॥',
          meaning: { en: 'Mother, you remove forts of trouble and the like; be kind to me whenever I call, giver of happiness.' },
        },
        {
          n: 30,
          text: 'नृप कोपित को मारन चाहे ।\nकानन में घेरे मृग नाहे ॥',
          meaning: { en: 'If an angry king wishes to kill someone, or lions surround him in the forest,' },
        },
        {
          n: 31,
          text: 'सागर मध्य पोत के भंजे ।\nअति तूफान नहिं कोऊ संगे ॥',
          meaning: { en: 'or a ship is wrecked in mid-ocean in a great storm with no companion at all, (your name saves).' },
        },
        {
          n: 32,
          text: 'भूत प्रेत बाधा या दुःख में ।\nहो दरिद्र अथवा संकट में ॥',
          meaning: { en: 'In the grip of ghosts and spirits, in sorrow, poverty or danger,' },
        },
        {
          n: 33,
          text: 'नाम जपे मंगल सब होई ।\nसंशय इसमें करइ न कोई ॥',
          meaning: { en: 'by chanting your name all becomes auspicious; let no one doubt this.' },
        },
        {
          n: 34,
          text: 'पुत्रहीन जो आतुर भाई ।\nसबै छांडि पूजें एहि माई ॥',
          meaning: { en: 'A childless person who is anxious should leave all else and worship this Mother.' },
        },
        {
          n: 35,
          text: 'करै पाठ नित यह चालीसा ।\nहोय पुत्र सुन्दर गुण ईशा ॥',
          meaning: { en: 'Whoever recites this Chalisa daily will have a fine son, full of virtue and power.' },
        },
        {
          n: 36,
          text: 'धूपादिक नैवेद्य चढावै ।\nसंकट रहित अवश्य हो जावै ॥',
          meaning: { en: 'One who offers incense and food will surely be freed from trouble.' },
        },
        {
          n: 37,
          text: 'भक्ति मातु की करैं हमेशा ।\nनिकट न आवै ताहि कलेशा ॥',
          meaning: { en: 'Those who always show devotion to the Mother are never approached by affliction.' },
        },
        {
          n: 38,
          text: 'बंदी पाठ करें सत बारा ।\nबंदी पाश दूर हो सारा ॥',
          meaning: { en: 'A prisoner who recites it a hundred times is freed from all bonds of prison.' },
        },
        {
          n: 39,
          text: 'रामसागर बाँधि हेतु भवानी ।\nकीजै कृपा दास निज जानी ॥',
          meaning: { en: 'Bhavani, for the sake of Ramasagar, who is bound in worldly ties, show grace, knowing me as your servant.' },
        },
      ],
    },
    {
      title: 'दोहा',
      titleEn: 'Closing dohas',
      verses: [
        {
          text: 'मातु सूर्य कान्ति तव, अन्धकार मम रूप ।\nडूबन से रक्षा करहु, परूँ न मैं भव कूप ॥',
          meaning: { en: 'Mother, your light is the sun\'s, and my form is darkness; save me from drowning so that I do not fall into the well of worldly life.' },
        },
        {
          text: 'बल बुद्धि विद्या देहुं मोहि, सुनहु सरस्वति मातु ।\nअधम रामसागरहिं तुम, आश्रय देउ पुनातु ॥',
          meaning: { en: 'Give me strength, intellect and learning, hear me, Mother Sarasvati; give refuge to the lowly Ramasagar, and so purify him.' },
        },
      ],
    },
  ],
};
