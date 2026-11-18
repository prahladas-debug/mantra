/**
 * Śrī Tulasī Cālīsā ("Jaya jaya tulasī bhagavatī"), Hindi/Awadhi, in Devanagari. The text names Sundara (v. 41) and, in the last doha, Tulasidasa.
 *
 * Collated Nov 2026. Fewer than three INDEPENDENT copies were found. Three copies of this text were read:
 *   I  instaastro.com "Tulsi Mata Ki Chalisa" (base);  B  bhaktibharat.com "Tulasi Chalisa";
 *   N  navbharatlive.com "Recite Tulsi Chalisa on Thursday".
 * They agree word for word (they differ only in "तलसी/तुलसी", "ह्रदय/हृदय", "सहस्त्र/सहस्र" and in punctuation),
 * so they are one recension, very likely one typing, not three independent witnesses. (Another "Tulasi
 * Chalisa", "Śrī tulasī mahārānī, karūṁ vinaya sira nāya", on aajtak.in, is a different composition and
 * is not used.) All three give two opening dohas, forty chaupai couplets and four closing dohas; the chaupai
 * are numbered 1-40, the dohas not. Readings: c1 "तुलसी" (N, I; B "तलसी", a slip); c25 "हृदय" (N; B, I
 * "ह्रदय", the ह्र for हृ slip); c33 "सहस्र" (N; B, I "सहस्त्र"). Doubts: the text is rough throughout and
 * printed as found; several lines are corrupt or obscure ("व्हौ रौ पाती तोरा" c9, "धग्व रूप" c30, "सुनी उर शोक उपारा" c22,
 * the closing doha "आशिय धन जन लड़हि ग्रह बसही पूर्णा अत्र"), and the meanings there are tentative. The nukta is
 * written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const tulsiChalisa: Mantra = {
  id: 'tulsi-chalisa',
  title: 'श्री तुलसी चालीसा',
  titleEn: 'Sri Tulsi Chalisa',
  category: 'chalisa',
  order: 36,
  deity: 'Śrī Tulasī',
  source: 'Traditional (names the poet Sundara in verse 41 and Tulasidasa in the last doha), Hindi/Awadhi',
  summary: 'The Hindi hymn to Tulsi, the holy basil: her penance to win Vishnu as husband, Lakshmi\'s curse and Vishnu\'s promise, her birth as Vrinda wife of the demon Jalandhara, the deception by which Vishnu broke her devotion, her curse of stone and his curse that she become the plant, and the worth of every tulsi leaf offered to him. Recited on Thursdays, Ekadashi and in Kartika.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'दोहा',
      titleEn: 'Opening doha',
      verses: [
        {
          text: 'जय जय तुलसी भगवती सत्यवती सुखदानी ।\nनमो नमो हरि प्रेयसी श्री वृन्दा गुन खानी ॥',
          meaning: { en: 'Victory, victory to Tulsi Bhagavati, true and giver of happiness; salutations to Hari\'s beloved, Shri Vrinda, mine of virtues.' },
        },
        {
          text: 'श्री हरि शीश बिरजिनी, देहु अमर वर अम्ब ।\nजनहित हे वृन्दावनी अब न करहु विलम्ब ॥',
          meaning: { en: 'You who rest on Hari\'s head, give me the boon of immortality, Mother; for your people\'s good, O Vrindavani, delay no longer.' },
        },
      ],
    },
    {
      title: 'चौपाई',
      titleEn: 'Chaupai',
      verses: [
        {
          n: 1,
          text: 'धन्य धन्य श्री तुलसी माता ।\nमहिमा अगम सदा श्रुति गाता ॥',
          meaning: { en: 'Blessed, blessed Mother Tulsi, whose greatness the Vedas always sing.' },
        },
        {
          n: 2,
          text: 'हरि के प्राणहु से तुम प्यारी ।\nहरीहीँ हेतु कीन्हो तप भारी ॥',
          meaning: { en: 'Dearer than Hari\'s own life, you performed great penance to win him.' },
        },
        {
          n: 3,
          text: 'जब प्रसन्न है दर्शन दीन्ह्यो ।\nतब कर जोरी विनय उस कीन्ह्यो ॥',
          meaning: { en: 'When he was pleased and showed himself, you folded your hands and said:' },
        },
        {
          n: 4,
          text: 'हे भगवन्त कन्त मम होहू ।\nदीन जानी जनि छाडाहू छोहु ॥',
          meaning: { en: '"O Lord, be my husband; knowing me poor, do not leave me."' },
        },
        {
          n: 5,
          text: 'सुनी लक्ष्मी तुलसी की बानी ।\nदीन्हो श्राप कध पर आनी ॥',
          meaning: { en: 'Hearing Tulsi\'s words, Lakshmi was moved to anger and cursed her.' },
        },
        {
          n: 6,
          text: 'उस अयोग्य वर मांगन हारी ।\nहोहू विटप तुम जड तनु धारी ॥',
          meaning: { en: '"You, unfit, ask for such a boon: become a plant with an unfeeling body."' },
        },
        {
          n: 7,
          text: 'सुनी तुलसी हीँ श्रप्यो तेहिं ठामा ।\nकरहु वास तुहू नीचन धामा ॥',
          meaning: { en: 'Tulsi too cursed her in return, "Then dwell in a lowly place yourself."' },
        },
        {
          n: 8,
          text: 'दियो वचन हरि तब तत्काला ।\nसुनहु सुमुखी जनि होहू बिहाला ॥',
          meaning: { en: 'Then Hari promised: "Fair one, do not grieve."' },
        },
        {
          n: 9,
          text: 'समय पाई व्हौ रौ पाती तोरा ।\nपुजिहौ आस वचन सत मोरा ॥',
          meaning: { en: '"In time you will be plucked leaf by leaf, and my word is true: you will be worshipped."' },
        },
        {
          n: 10,
          text: 'तब गोकुल मह गोप सुदामा ।\nतासु भई तुलसी तू बामा ॥',
          meaning: { en: 'In Gokula there was a cowherd named Sudama; you became his wife.' },
        },
        {
          n: 11,
          text: 'कृष्ण रास लीला के माही ।\nराधे शक्यो प्रेम लखी नाही ॥',
          meaning: { en: 'During Krishna\'s rasa-lila, Radha could not bear to see your love.' },
        },
        {
          n: 12,
          text: 'दियो श्राप तुलसिह तत्काला ।\nनर लोकही तुम जन्महु बाला ॥',
          meaning: { en: 'She cursed Tulsi then and there: "Be born in the world of men, girl."' },
        },
        {
          n: 13,
          text: 'यो गोप वह दानव राजा ।\nशङ्ख चुड नामक शिर ताजा ॥',
          meaning: { en: 'That cowherd became a demon king, Shankhachuda by name, crowned.' },
        },
        {
          n: 14,
          text: 'तुलसी भई तासु की नारी ।\nपरम सती गुण रूप अगारी ॥',
          meaning: { en: 'Tulsi became his wife, a perfectly devoted lady, rich in virtue and beauty.' },
        },
        {
          n: 15,
          text: 'अस द्वै कल्प बीत जब गयऊ ।\nकल्प तृतीय जन्म तब भयऊ ॥',
          meaning: { en: 'Two kalpas passed this way, and in the third she was born again.' },
        },
        {
          n: 16,
          text: 'वृन्दा नाम भयो तुलसी को ।\nअसुर जलन्धर नाम पति को ॥',
          meaning: { en: 'Tulsi was named Vrinda, her husband the demon Jalandhara.' },
        },
        {
          n: 17,
          text: 'करि अति द्वन्द अतुल बलधामा ।\nलीन्हा शंकर से संग्राम ॥',
          meaning: { en: 'Jalandhara, of boundless strength, waged war on Shankara.' },
        },
        {
          n: 18,
          text: 'जब निज सैन्य सहित शिव हारे ।\nमरही न तब हर हरिही पुकारे ॥',
          meaning: { en: 'When Shiva and his army were beaten, even Hara called on Hari, because (the demon) could not be killed.' },
        },
        {
          n: 19,
          text: 'पतिव्रता वृन्दा थी नारी ।\nकोऊ न सके पतिहि संहारी ॥',
          meaning: { en: 'Vrinda was a woman of perfect fidelity, so no one could kill her husband.' },
        },
        {
          n: 20,
          text: 'तब जलन्धर ही भेष बनाई ।\nवृन्दा ढिग हरि पहुच्यो जाई ॥',
          meaning: { en: 'Then Hari took Jalandhara\'s form and went to Vrinda\'s side.' },
        },
        {
          n: 21,
          text: 'शिव हित लही करि कपट प्रसंगा ।\nकियो सतीत्व धर्म तोही भंगा ॥',
          meaning: { en: 'For Shiva\'s sake he used deceit and broke her chastity.' },
        },
        {
          n: 22,
          text: 'भयो जलन्धर कर संहारा ।\nसुनी उर शोक उपारा ॥',
          meaning: { en: 'Jalandhara was slain, and hearing it, Vrinda\'s heart was overwhelmed with grief.' },
        },
        {
          n: 23,
          text: 'तिही क्षण दियो कपट हरि टारी ।\nलखी वृन्दा दुःख गिरा उचारी ॥',
          meaning: { en: 'At that moment Hari dropped the disguise, and seeing him Vrinda spoke in sorrow.' },
        },
        {
          n: 24,
          text: 'जलन्धर जस हत्यो अभीता ।\nसोई रावन तस हरिही सीता ॥',
          meaning: { en: '"As he killed Jalandhara, who was fearless, so shall Ravana take your wife Sita."' },
        },
        {
          n: 25,
          text: 'अस प्रस्तर सम हृदय तुम्हारा ।\nधर्म खण्डी मम पतिहि संहारा ॥',
          meaning: { en: '"Your heart is like stone; you broke my dharma and killed my husband."' },
        },
        {
          n: 26,
          text: 'यही कारण लही श्राप हमारा ।\nहोवे तनु पाषाण तुम्हारा ॥',
          meaning: { en: '"For this reason I curse you: may your body become stone."' },
        },
        {
          n: 27,
          text: 'सुनी हरि तुरतहि वचन उचारे ।\nदियो श्राप बिना विचारे ॥',
          meaning: { en: 'Hearing it, Hari at once replied: "You have cursed without thinking."' },
        },
        {
          n: 28,
          text: 'लख्यो न निज करतूती पति को ।\nछलन चह्यो जब पारवती को ॥',
          meaning: { en: '(He said:) "You did not see your husband\'s deeds when he tried to deceive Parvati."' },
        },
        {
          n: 29,
          text: 'जडमति तुहु अस हो जडरूपा ।\nजग मह तुलसी विटप अनूपा ॥',
          meaning: { en: '"Become a dull-minded, lifeless plant, a matchless tulsi tree in the world."' },
        },
        {
          n: 30,
          text: 'धग्व रूप हम शालिग्रामा ।\nनदी गण्डकी बीच ललामा ॥',
          meaning: { en: '"I will take the form of Shaligrama in the lovely Gandaki river."' },
        },
        {
          n: 31,
          text: 'जो तुलसी दल हमही चढ इहैं ।\nसब सुख भोगी परम पद पईहै ॥',
          meaning: { en: '"Whoever offers tulsi leaves to me will enjoy every happiness and reach the highest state."' },
        },
        {
          n: 32,
          text: 'बिनु तुलसी हरि जलत शरीरा ।\nअतिशय उठत शीश उर पीरा ॥',
          meaning: { en: 'Without tulsi Hari\'s body burns, and pain rises in his head and heart.' },
        },
        {
          n: 33,
          text: 'जो तुलसी दल हरि शिर धारत ।\nसो सहस्र घट अमृत डारत ॥',
          meaning: { en: 'A tulsi leaf placed on Hari\'s head pours down as a thousand pots of nectar.' },
        },
        {
          n: 34,
          text: 'तुलसी हरि मन रञ्जनी हारी ।\nरोग दोष दुःख भंजनी हारी ॥',
          meaning: { en: 'Tulsi delights Hari\'s mind and destroys disease, fault and sorrow.' },
        },
        {
          n: 35,
          text: 'प्रेम सहित हरि भजन निरन्तर ।\nतुलसी राधा में नाही अन्तर ॥',
          meaning: { en: 'Worshipping Hari with love, there is no difference between Tulsi and Radha.' },
        },
        {
          n: 36,
          text: 'व्यन्जन हो छप्पनहु प्रकारा ।\nबिनु तुलसी दल न हरीहि प्यारा ॥',
          meaning: { en: 'Even a feast of fifty-six dishes is not dear to Hari without a tulsi leaf.' },
        },
        {
          n: 37,
          text: 'सकल तीर्थ तुलसी तरु छाही ।\nलहत मुक्ति जन संशय नाही ॥',
          meaning: { en: 'All holy places are in the shade of the tulsi tree, and those who sit there gain liberation without doubt.' },
        },
        {
          n: 38,
          text: 'कवि सुन्दर इक हरि गुण गावत ।\nतुलसिहि निकट सहसगुण पावत ॥',
          meaning: { en: 'The poet Sundara sings Hari\'s praise and, near Tulsi, gains a thousandfold.' },
        },
        {
          n: 39,
          text: 'बसत निकट दुर्बासा धामा ।\nजो प्रयास ते पूर्व ललामा ॥',
          meaning: { en: 'He lives near Durvasa\'s abode, in a place long before Prayag.' },
        },
        {
          n: 40,
          text: 'पाठ करहि जो नित नर नारी ।\nहोही सुख भाषहि त्रिपुरारी ॥',
          meaning: { en: 'Whoever reads this each day, men and women, will be happy; Tripurari himself says so.' },
        },
      ],
    },
    {
      title: 'दोहा',
      titleEn: 'Closing doha',
      verses: [
        {
          text: 'तुलसी चालीसा पढही तुलसी तरु ग्रह धारी ।\nदीपदान करि पुत्र फल पावही बन्ध्यहु नारी ॥',
          meaning: { en: 'Whoever reads the Tulsi Chalisa, keeps the tulsi plant at home and lights a lamp before it, even a barren woman receives the fruit of a son.' },
        },
        {
          text: 'सकल दुःख दरिद्र हरि हार ह्वै परम प्रसन्न ।\nआशिय धन जन लडहि ग्रह बसही पूर्णा अत्र ॥',
          meaning: { en: 'He who is rid of all sorrow and poverty is greatly pleased with Hari; (the second line is obscure) he gains wealth and family.' },
        },
        {
          text: 'लाही अभिमत फल जगत मह लाही पूर्ण सब काम ।\nजेई दल अर्पही तुलसी तंह सहस बसही हरीराम ॥',
          meaning: { en: 'He gains the fruit he desires and every wish is fulfilled; where a tulsi leaf is offered, a thousand forms of Hari-Rama dwell.' },
        },
        {
          text: 'तुलसी महिमा नाम लख तुलसी सूत सुखराम ।\nमानस चालीस रच्यो जग महं तुलसीदास ॥',
          meaning: { en: 'Tulsi\'s greatness is told here; Tulasidasa composed this "Manasa of forty" in the world.' },
        },
      ],
    },
  ],
};
