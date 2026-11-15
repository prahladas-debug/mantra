/**
 * Nārāyaṇa tē namō namō: Annamācārya saṅkīrtana (Telugu), in Telugu script.
 * Sources (Nov 2026): A. annamacharya-lyrics.blogspot.com no. 40 (typed Telugu following the TTD edition, three stanzas, the
 * form generally sung); K. karnatik.com c13258 (Roman, typed independently; raga Madhyamavati), which has six stanzas:
 * the three of A plus three more (Krishna: "శ్రీవత్సలాంజన …", Rama: "కౌసల్యాత్మజ …", "తారాధిప హర …"). A's three are
 * given; the other three are not included, as their place in the TTD edition could not be confirmed. Wording of the three
 * agrees between A and K. Meanings are original.
 */
import type { Mantra } from '../types';

export const annamacharyaNarayanateNamoNamo: Mantra = {
  id: 'annamacharya-narayanate-namo-namo',
  title: 'నారాయణతే నమో నమో',
  titleEn: 'Narayana Te Namo Namo (Annamacharya)',
  category: 'kirtana',
  order: 20,
  sourceScript: 'telugu',
  deity: 'Śrī Nārāyaṇa · Śrī Veṅkaṭeśvara',
  source: 'Tāḷḷapāka Annamācārya (Annamayya), saṅkīrtana',
  summary: 'A song of salutations to Narayana by his many names: slayer of Mura, Mukunda, Madhava, Garudavahana, Padmanabha, the lion-man Narasimha, the lord who lies on the ocean, the lover of the cowherd women; ending with Venkata\'s lord who loves the music of the Veda. Sung in raga Madhyamavati.',
  summaryKn: 'ನಾರಾಯಣನಿಗೆ ಅವನ ಅನೇಕ ನಾಮಗಳಿಂದ ನಮಸ್ಕಾರ: ಮುರಾರಿ, ಮುಕುಂದ, ಮಾಧವ, ಗರುಡವಾಹನ, ಪದ್ಮನಾಭ, ನರಸಿಂಹ, ಸಾಗರಶಯನ, ಗೋಪಿಕಾಪ್ರಿಯ; ಕೊನೆಗೆ ವೇದವನ್ನು ಉದ್ಧರಿಸಿದ ವೆಂಕಟನಾಯಕ, ನಾದಪ್ರಿಯ. ಮಧ್ಯಮಾವತಿ ರಾಗದಲ್ಲಿ ಹಾಡುತ್ತಾರೆ.',
  difficulty: 'easy',
  completeness: 'partial',
  contentNote: 'Only the three stanzas generally sung (those of the blog text of the TTD edition). One copy consulted (karnatik.com) has three further stanzas about Krishna and Rama; they are not given here because their source could not be confirmed.',
  sections: [
    {
      title: 'పల్లవి',
      titleEn: 'Pallavi',
      note: 'The refrain.',
      noteKn: 'ಪಲ್ಲವಿ (ಧ್ರುವಪದ).',
      verses: [
        {
          text: 'నారాయణతే నమో నమో\nనారద సన్నుత నమో నమో',
          meaning: { en: 'Salutations, salutations to you, Narayana; salutations, salutations, praised by Narada.', kn: 'ನಾರಾಯಣ, ನಿನಗೆ ನಮೋ ನಮೋ; ನಾರದನಿಂದ ಸ್ತುತಿಸಲ್ಪಟ್ಟವನೇ, ನಮೋ ನಮೋ.' },
        },
      ],
    },
    {
      title: 'చరణాలు',
      titleEn: 'Charanams',
      note: 'The three stanzas generally sung.',
      noteKn: 'ಸಾಮಾನ್ಯವಾಗಿ ಹಾಡುವ ಮೂರು ಚರಣಗಳು.',
      verses: [
        {
          n: 1,
          text: 'మురహర భవహర ముకుంద మాధవ\nగరుడ గమన పంకజనాభ\nపరమ పురుష భవబంధ విమోచన\nనరమృగశరీర నమో నమో',
          meaning: { en: 'Slayer of Mura, remover of rebirth, Mukunda, Madhava, rider of Garuda, lotus-navelled One; the Supreme Person, liberator from the bonds of life, whose body is man and lion: salutations, salutations.', kn: 'ಮುರಹರ, ಭವಹರ, ಮುಕುಂದ, ಮಾಧವ, ಗರುಡವಾಹನ, ಪದ್ಮನಾಭ; ಪರಮಪುರುಷ, ಭವಬಂಧ ವಿಮೋಚನ, ನರಮೃಗಶರೀರ, ನಮೋ ನಮೋ.' },
        },
        {
          n: 2,
          text: 'జలధిశయన రవిచంద్రవిలోచన\nజలరుహభవనుత చరణయుగ\nబలిబంధన గోపవధూవల్లభ\nనళినోదర తే నమో నమో',
          meaning: { en: 'Lying on the ocean, with the sun and moon as your eyes, whose two feet are praised by the lotus-born Brahma; binder of Bali, beloved of the cowherd women, lotus-bellied One: salutations, salutations.', kn: 'ಸಾಗರಶಯನ, ರವಿಚಂದ್ರ ನೇತ್ರ, ಕಮಲಜನು ಸ್ತುತಿಸುವ ಪಾದಯುಗ; ಬಲಿಬಂಧನ, ಗೋಪವಧೂವಲ್ಲಭ, ನಳಿನೋದರ, ನಿನಗೆ ನಮೋ ನಮೋ.' },
        },
        {
          n: 3,
          text: 'ఆదిదేవ సకలాగమ పూజిత\nయాదవకుల మోహనరూప\nవేదోద్ధర శ్రీ వేంకటనాయక\nనాదప్రియ తే నమో నమో',
          meaning: { en: 'First God, worshipped by all the scriptures, enchanting form of the Yadava race; lifter of the Vedas, Sri Venkata\'s lord, lover of sound: salutations, salutations to you.', kn: 'ಆದಿದೇವ, ಸಕಲ ಆಗಮಗಳಿಂದ ಪೂಜಿತ, ಯಾದವಕುಲದ ಮೋಹನರೂಪ; ವೇದೋದ್ಧಾರಕ, ಶ್ರೀ ವೆಂಕಟನಾಯಕ, ನಾದಪ್ರಿಯ, ನಿನಗೆ ನಮೋ ನಮೋ.' },
        },
      ],
    },
  ],
};
