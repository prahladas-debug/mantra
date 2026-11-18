/**
 * Ambe Tū Hai Jagadambe Kālī, the Hindi aarti to Ambā as Durgā and Kālī, sung at Navarātri and on Fridays, in Devanagari. Folk aarti, author not named.
 *
 * Collated Nov 2026 against four Devanagari copies: bhaktibharat.com "Ambe Tu Hai Jagdambe Kali: Maa Durga, Maa Kali Aarti"
 * (B, base), shubhpanchang.com "Ambe Tu Hai Jagdambe Kali" (S), sanatan-dharm.com (D) and vandnaa.com (V); merapitara.com (M) and
 * jaapdaily.com (J) were read as well but are partly garbled or in Roman letters and are used only for single readings. The refrain of
 * two lines is sung before the first stanza and after every stanza; B, D and V have four stanzas, S has the first three only.
 * Readings against the base: "दुष्टों को तू ही ललकारती" (S, D, V, J) against B "दुष्टो को पलमे संहारती"; "भीड़ पड़ी" (S, D, V) against B
 * "भीर पडी"; "तेरे भक्त जनों पर माता" (S, D, V) against B "जनो पर ... माँ"; "उतारें" (S, D, V) against B "उतरें" (a slip); "गायें"
 * (D, M) against S "गावें" and V "गाएं"; "दर्शाने" (S, D, M) against B and V "दरसाने"; "सतियों के सत को संवारती" (B, S, D, V);
 * "तेरे मन में" (B, S, V) against D and M "चरणों में"; "एक छोटा सा कोना" (S, D) against B and V "इक"; "सिर पर" (V) against B and D
 * "सर". The fourth stanza ("चरण शरण में खड़े तुम्हारी") is not in S (B marks it as an addition); it is kept as in B, D and V. M gives
 * the first stanza with the first half only and repeats it. Doubt: "गुण गायें भारती" is read as "those who sing sing your virtues";
 * "भारती" may be a singer's name or "devotee". Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const aartiKaliMata: Mantra = {
  id: 'aarti-kali-mata',
  title: 'अम्बे तू है जगदम्बे काली आरती',
  titleEn: 'Ambe Tu Hai Jagdambe Kali Aarti',
  category: 'aarti',
  order: 52,
  deity: 'Śrī Ambā (Durgā, Kālī)',
  source: 'Traditional Hindi aarti (Hindi)',
  summary: 'The Hindi aarti to Ambe, the Mother of the world, as Durga and Kali, sung at Navratri and on Fridays. It asks her to ride her lion and fall on the demon host, praises her mercy to the afflicted, and asks for nothing but a small place in her heart and her protection of those who take refuge.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'The two-line refrain is sung before the first stanza and after every stanza.',
      verses: [
        {
          text: 'अम्बे तू है जगदम्बे काली, जय दुर्गे खप्पर वाली ।\nतेरे ही गुण गायें भारती, ओ मैया हम सब उतारें तेरी आरती ॥',
          meaning: { en: 'You are Ambe, Mother of the world, you are Kali; victory to Durga, who holds the skull-bowl. Those who sing, sing only your virtues; Mother, all of us wave the lamp before you.' },
        },
      ],
    },
    {
      title: 'पद',
      titleEn: 'Stanzas',
      note: 'The last line of each stanza leads into "O maiya, hum sab utaren teri aarti" and then the refrain is sung.',
      verses: [
        {
          n: 1,
          text: 'तेरे भक्त जनों पर माता, भीड पडी है भारी ।\nदानव दल पर टूट पडो माँ, करके सिंह सवारी ॥\nसौ-सौ सिंहों से बलशाली, अष्ट भुजाओं वाली ।\nदुष्टों को तू ही ललकारती ॥',
          meaning: { en: 'Mother, a heavy trouble has fallen on your devotees. Ride your lion and fall upon the army of demons. You are stronger than hundreds of lions and have eight arms; you alone challenge the wicked.' },
        },
        {
          n: 2,
          text: 'माँ-बेटे का है इस जग में, बडा ही निर्मल नाता ।\nपूत कपूत सुने हैं पर ना, माता सुनी कुमाता ॥\nसब पे करुणा दर्शाने वाली, अमृत बरसाने वाली ।\nदुखियों के दुखडे निवारती ॥',
          meaning: { en: 'In this world the bond between mother and child is very pure. We have heard of a bad son, but never of a bad mother. You show mercy to all, you rain nectar, and you remove the troubles of the afflicted.' },
        },
        {
          n: 3,
          text: 'नहीं मांगते धन और दौलत, न चांदी न सोना माँ ।\nहम तो मांगें माँ तेरे मन में, एक छोटा सा कोना ॥\nसबकी बिगडी बनाने वाली, लाज बचाने वाली ।\nसतियों के सत को संवारती ॥',
          meaning: { en: 'We do not ask for wealth or riches, not for silver or gold, Mother. We ask only for one small corner in your heart. You mend what is spoiled for everyone, you save honour, and you make the truth of the faithful shine.' },
        },
        {
          n: 4,
          text: 'चरण शरण में खडे तुम्हारी, ले पूजा की थाली ।\nवरद हस्त सिर पर रख दो, माँ संकट हरने वाली ॥\nमाँ भर दो भक्ति रस प्याली, अष्ट भुजाओं वाली ।\nभक्तों के कारज तू ही सारती ॥',
          meaning: { en: 'We stand at your feet for refuge, with the plate of worship in our hands. Put your boon-giving hand on our heads, Mother who removes trouble. Fill the cup of devotion for us, eight-armed Mother; you alone complete the work of your devotees.' },
        },
      ],
    },
  ],
};
