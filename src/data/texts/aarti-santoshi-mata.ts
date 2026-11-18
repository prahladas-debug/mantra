/**
 * Jaya Santoṣī Mātā (Santoṣī Mātā kī Āratī), the Hindi aarti sung at the end of the Friday vrata katha of Santoṣī Mātā,
 * in Devanagari. Folk aarti, author not named.
 *
 * Collated Nov 2026 against four copies: bhaktibharat.com "Santoshi Mata Aarti" (B, base), drikpanchang.com "Shukrawar
 * Aarti" (D), shubhpanchang.com "Jai Santoshi Mata" (S, in Roman letters) and hindupedia.com "Santoshi mata aarthi" (P,
 * in Roman letters and incomplete: eight stanzas). B, D and S have the same eleven stanzas in the same order.
 * Readings against the base: "अपने सेवक जन की" (B, P) against "जन को" (D, S); "तन श्रृंगार लीन्हो" (B, P) kept against
 * "कीन्हों" (D, S); "त्रिभुवन मन मोहे" (D, S, P) against B "त्रिभुवन जन मोहे"; "चंवर ढुरें प्यारे" (D, S) against
 * B "दुरे"; "भोग धरें न्यारे" (D, S) against B "भोज धरे"; "विनय करें हम बालक" (D, S, P) against B "हम सेवक";
 * "इच्छा फल दीजै" (D, S, P) against B "इच्छित"; "दुखी दरिद्री, रोग, संकट मुक्त किए" (D, S) against B "दुखी दारिद्री रोगी";
 * "ध्यान धर्यो जिस जन ने, मनवांछित फल पायो" (D, S) against B "ध्यान धरे जो तेरा, वांछित फल पायो";
 * "शरण गहे की लज्जा, राखियो" (D, S) against B "चरण गहे"; the spelling "ऋद्धि-सिद्धि" is D's. The refrain
 * "जय सन्तोषी माता" is sung after every stanza and is written once, with the opening. Stanzas are given two to a verse.
 * Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const aartiSantoshiMata: Mantra = {
  id: 'aarti-santoshi-mata',
  title: 'जय सन्तोषी माता आरती',
  titleEn: 'Jai Santoshi Mata Aarti',
  category: 'aarti',
  order: 41,
  deity: 'Śrī Santoṣī Mātā',
  source: 'Traditional Hindi aarti (Hindi)',
  summary: 'The aarti of Santoshi Mata, the Mother of contentment, sung on Fridays and at the end of her sixteen-Friday vrata. It describes her golden dress and jewels, her throne, and the jaggery and gram she loves, and asks her to remove sorrow and want and to bless the home with grain, wealth and peace.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'The refrain "Jai Santoshi Mata" is sung after each verse.',
      verses: [
        {
          text: 'जय सन्तोषी माता, मैया जय सन्तोषी माता ।\nअपने सेवक जन की, सुख सम्पति दाता ॥\nजय सन्तोषी माता ॥',
          meaning: { en: 'Victory to Mother Santoshi, victory to Mother Santoshi. You give happiness and wealth to your own servants.' },
        },
      ],
    },
    {
      title: 'पद',
      titleEn: 'Verses',
      note: 'After each verse the refrain is sung.',
      verses: [
        {
          n: 1,
          text: 'सुन्दर चीर सुनहरी, मां धारण कीन्हो ।\nहीरा पन्ना दमके, तन श्रृंगार लीन्हो ॥\nगेरू लाल छटा छबि, बदन कमल सोहे ।\nमंद हंसत करुणामयी, त्रिभुवन मन मोहे ॥',
          meaning: { en: 'Mother, you wear a beautiful golden garment, and diamonds and emeralds sparkle as the adornment of your body. The glow of red ochre is on your lotus face; your gentle, kind smile charms the three worlds.' },
        },
        {
          n: 2,
          text: 'स्वर्ण सिंहासन बैठी, चंवर ढुरें प्यारे ।\nधूप, दीप, मधु, मेवा, भोग धरें न्यारे ॥\nगुड अरु चना परम प्रिय, तामें संतोष कियो ।\nसंतोषी कहलाई, भक्तन वैभव दियो ॥',
          meaning: { en: 'You sit on a golden throne while lovely fans are waved; incense, lamp, honey and dry fruits are set out as separate offerings. Jaggery and gram are most dear to you, and in them you found contentment; so you are called Santoshi and you gave your devotees prosperity.' },
        },
        {
          n: 3,
          text: 'शुक्रवार प्रिय मानत, आज दिवस सोही ।\nभक्त मंडली छाई, कथा सुनत मोही ॥\nमंदिर जगमग ज्योति, मंगल ध्वनि छाई ।\nविनय करें हम बालक, चरनन सिर नाई ॥',
          meaning: { en: 'You hold Friday dear, and this is that day. A gathering of devotees has come and is enchanted by hearing your story. The temple glitters with light and auspicious sounds fill it; we, your children, bow our heads at your feet and pray.' },
        },
        {
          n: 4,
          text: 'भक्ति भावमय पूजा, अंगीकृत कीजै ।\nजो मन बसे हमारे, इच्छा फल दीजै ॥\nदुखी दरिद्री, रोग, संकट मुक्त किए ।\nबहु धन-धान्य भरे घर, सुख सौभाग्य दिए ॥',
          meaning: { en: 'Please accept our worship, full of devotion, and grant the fruit of the wish that lives in our hearts. You have freed the sorrowful, the poor and the sick from their troubles, filled homes with wealth and grain, and given happiness and good fortune.' },
        },
        {
          n: 5,
          text: 'ध्यान धर्यो जिस जन ने, मनवांछित फल पायो ।\nपूजा कथा श्रवण कर, घर आनन्द आयो ॥\nशरण गहे की लज्जा, राखियो जगदम्बे ।\nसंकट तू ही निवारे, दयामयी अम्बे ॥',
          meaning: { en: 'Whoever has meditated on you has gained the fruit he desired; after the worship and hearing the katha, joy has come to the home. Mother of the world, keep the honour of those who have taken your refuge. Kind Mother, you alone remove our troubles.' },
        },
        {
          n: 6,
          text: 'सन्तोषी माता की आरती, जो कोई जन गावे ।\nऋद्धि-सिद्धि सुख-सम्पत्ति, जी भर के पावे ॥',
          meaning: { en: 'Whoever sings this aarti of Santoshi Mata will gain, to his heart\'s content, success and fulfilment, happiness and wealth.' },
        },
      ],
    },
  ],
};
