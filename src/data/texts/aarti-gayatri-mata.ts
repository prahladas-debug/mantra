/**
 * Jayati Jaya Gāyatrī Mātā (Gāyatrī kī Āratī), the Hindi aarti to Gāyatrī, sung after the Gāyatrī japa and at the Gāyatrī Parivar, in Devanagari. Author not named in the copies.
 *
 * Collated Nov 2026 against six copies in two forms of the text. The fuller form, with ten stanzas, is in worldauthors.org (W, base),
 * tring.co.in (T) and servdharm.com (V); the other, with nine stanzas, is in bhaktibharat.com "Mata Gayatri Aarti" (B), aajtak.in "Gayatri
 * Ji Ki Aarti" (A) and astrologics.in (R), which differ from W in many small words, as in "जगपालक क‌र्त्री ... हत्री" (B, R) and
 * "जगपालन करती ... हरती" (A) against W "जग पालन कर्त्री ... हर्त्री". The fuller form is taken because its wording is clearer and
 * it alone has the last stanza "तुम समर्थ सब भाँति तारिणी". The stanzas are in the same order in all six. Readings against the base: "प्रणत
 * पालिनी" (W, T, V, A) against B "प्रणात पालिन" and R "प्रणात पालिनि"; "अघहरी" (W, T, V) against A "अघहारी", B "अखहरी" and R "अखण्डहरी";
 * "सत् चित् आनन्दा" (W, T, V) against B, A, R "सतचित आनन्द"; "ऋग्, यजु, साम, अथर्व, प्रणयिनी" (W, T, V) against B, A, R "प्रणयनी";
 * "सहस्रार, सुषुम्ना" (W, T, V) against B, A, R "सहस्त्र सुषुमन"; "बिलख" (W, T, V) against B, A, R "विलख"; "तऊ" (W, T, V) against B, A, R "तउ";
 * "सत् मार्ग" (W, V) against T "सत् मारग". Shared slips put right: "ब्रहाणी" for "ब्रह्माणी" (W, V), "विघा" for "विद्या" (T, V),
 * "सहस्त्रार" for "सहस्रार" (T, V). "दारिद्रय" as in W. The opening is sung again at the end in all copies and is written once. The
 * refrain "जयति जय गायत्री माता" is sung after every stanza. Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const aartiGayatriMata: Mantra = {
  id: 'aarti-gayatri-mata',
  title: 'जयति जय गायत्री माता आरती',
  titleEn: 'Jayati Jai Gayatri Mata Aarti',
  category: 'aarti',
  order: 57,
  deity: 'Śrī Gāyatrī Mātā',
  source: 'Traditional Hindi aarti (Hindi)',
  summary: 'The Hindi aarti to Mother Gayatri. It calls her the primal power, mother of the Vedas, giver of knowledge and remover of sorrow and want, names her as Savitri, Sita, Radha, Vani and many other forms, and asks her to take away anger, greed and pride, to purify mind and heart, and to lead us on the true path.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'The refrain "Jayati jai Gayatri Mata" is sung after each stanza.',
      verses: [
        {
          text: 'जयति जय गायत्री माता, जयति जय गायत्री माता ।\nसत् मारग पर हमें चलाओ, जो है सुखदाता ॥',
          meaning: { en: 'Victory, victory to Mother Gayatri. Lead us on the true path, which gives happiness.' },
        },
      ],
    },
    {
      title: 'पद',
      titleEn: 'Stanzas',
      note: 'After each stanza the refrain is sung.',
      verses: [
        {
          n: 1,
          text: 'आदि शक्ति तुम अलख निरंजन, जग पालन कर्त्री ।\nदुःख शोक भय क्लेश कलह दारिद्रय दैन्य हर्त्री ॥',
          meaning: { en: 'You are the primal power, unseen and stainless, the keeper of the world. You take away sorrow, grief, fear, distress, strife, poverty and misery.' },
        },
        {
          n: 2,
          text: 'ब्रह्म रूपिणी, प्रणत पालिनी, जगतधातृ अम्बे ।\nभवभयहारी, जनहितकारी, सुखदा जगदम्बे ॥',
          meaning: { en: 'You are the form of Brahman, the protector of those who bow, the bearer of the world, Mother. You take away the fear of rebirth and do good to people; you are the giver of happiness, Mother of the world.' },
        },
        {
          n: 3,
          text: 'भयहारिणि भवतारिणि अनघे, अज आनन्द राशी ।\nअविकारी, अघहरी, अविचलित, अमले, अविनाशी ॥',
          meaning: { en: 'You remove fear and carry us across the world, sinless, unborn, a heap of bliss. You are free of change, remover of sin, unshaken, spotless and undying.' },
        },
        {
          n: 4,
          text: 'कामधेनु सत् चित् आनन्दा, जय गंगा गीता ।\nसविता की शाश्वती शक्ति, तुम सावित्री सीता ॥',
          meaning: { en: 'You are the wish-fulfilling cow, truth, awareness and bliss; victory to you as Ganga and the Gita. You are the lasting power of Savita, the Sun, and you are Savitri and Sita.' },
        },
        {
          n: 5,
          text: 'ऋग्, यजु, साम, अथर्व, प्रणयिनी, प्रणव महामहिमे ।\nकुण्डलिनी सहस्रार, सुषुम्ना, शोभा गुण गरिमे ॥',
          meaning: { en: 'You are the source of the Rig, Yajur, Sama and Atharva Vedas and the great glory of the sacred syllable Om. You are the kundalini, the thousand-petalled lotus and the sushumna, full of beauty and weighty virtue.' },
        },
        {
          n: 6,
          text: 'स्वाहा, स्वधा, शची, ब्रह्माणी, राधा, रुद्राणी ।\nजय सतरूपा, वाणी, विद्या, कमला, कल्याणी ॥',
          meaning: { en: 'You are Svaha and Svadha, Shachi, Brahmani, Radha and Rudrani. Victory to you as Satarupa, Vani, Vidya, Kamala and Kalyani.' },
        },
        {
          n: 7,
          text: 'जननी हम हैं दीन-हीन, दुःख-दरिद्र के घेरे ।\nयदपि कुटिल, कपटी, कपूत, तऊ बालक हैं तेरे ॥',
          meaning: { en: 'Mother, we are poor and weak, hemmed in by sorrow and want. Though we are crooked, deceitful and unworthy sons, we are still your children.' },
        },
        {
          n: 8,
          text: 'स्नेहसनी करुणामयि माता, चरण शरण दीजै ।\nबिलख रहे हम शिशु सुत तेरे, दया दृष्टि कीजै ॥',
          meaning: { en: 'Loving, merciful Mother, give us refuge at your feet. We, your young children, are crying; look on us with kindness.' },
        },
        {
          n: 9,
          text: 'काम, क्रोध, मद, लोभ, दम्भ, दुर्भाव, द्वेष हरिये ।\nशुद्ध बुद्धि, निष्पाप हृदय, मन को पवित्र करिये ॥',
          meaning: { en: 'Take away desire, anger, pride, greed, vanity, ill will and hatred. Make our understanding pure, our heart free of sin and our mind holy.' },
        },
        {
          n: 10,
          text: 'तुम समर्थ सब भाँति तारिणी, तुष्टि, पुष्टि, त्राता ।\nसत् मार्ग पर हमें चलाओ, जो है सुखदाता ॥',
          meaning: { en: 'You are able in every way, the one who carries us across, who gives contentment and nourishment and protects. Lead us on the true path, which gives happiness.' },
        },
      ],
    },
  ],
};
