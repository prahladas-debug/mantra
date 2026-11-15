/**
 * Namakarana and annaprashana. Guide to follow the rite, which a priest leads.
 * Sources: Samskara Ratnamala, H. Aravindacharya (Kannada, Madhva; archive.org); Ashvalayana Grihya Sutra 1.15-1.16 (GRETIL); Rigveda 5.47.7 (GRETIL).
 */
import type { Mantra } from '../types';

export const namakaranaAnnaprashana: Mantra = {
  id: 'namakarana-annaprashana',
  title: 'नामकरणम् अन्नप्राशनं च',
  titleEn: 'Namakarana and Annaprashana',
  category: 'samskara',
  deity: 'Sri Paramesvara (Vishnu in the Madhva tradition); the family deity',
  source: 'Samskara Ratnamala (H. Aravindacharya, Kannada); Ashvalayana Grihya Sutra 1.15–16; Rigveda 5.47.7',
  summary: 'Short guides to two childhood samskaras: the naming (the day, the sankalpa, the four or five names, the rules for the everyday name, whispering the name and the blessings) and the first feeding of rice (the month and day, the sankalpa, the annapate verse, the livelihood test and the close).',
  summaryKn: 'ಮಗುವಿನ ಎರಡು ಸಂಸ್ಕಾರಗಳ ಸಂಕ್ಷಿಪ್ತ ಮಾರ್ಗದರ್ಶಿ: ನಾಮಕರಣ (ದಿನ, ಸಂಕಲ್ಪ, ನಾಲ್ಕು–ಐದು ಹೆಸರುಗಳು, ವ್ಯವಹಾರ ನಾಮದ ನಿಯಮ, ಹೆಸರನ್ನು ಕಿವಿಯಲ್ಲಿ ಹೇಳುವುದು, ಆಶೀರ್ವಾದ) ಮತ್ತು ಅನ್ನಪ್ರಾಶನ (ತಿಂಗಳು–ದಿನ, ಸಂಕಲ್ಪ, ಅನ್ನಪತೇ ಮಂತ್ರ, ಜೀವಿಕಾ ಪರೀಕ್ಷೆ ಮತ್ತು ಸಮಾಪ್ತಿ).',
  variants: [
    {
      key: 'tradition',
      title: 'Tradition',
      titleKn: 'ಸಂಪ್ರದಾಯ',
      options: [
        {
          id: 'madhva',
          label: 'Madhva',
          labelKn: 'ಮಾಧ್ವ',
        },
        {
          id: 'smarta',
          label: 'Smarta',
          labelKn: 'ಸ್ಮಾರ್ತ',
        },
      ],
    },
  ],
  difficulty: 'easy',
  completeness: 'partial',
  contentNote: 'Both rites are normally performed with a priest (purohita), who leads each step; this page is a guide to follow along and understand what is done and said. The text follows the Samskara Ratnamala (a Madhva author’s Kannada edition) and the Ashvalayana Grihya Sutra; the Vedic mantra passages recited at the naming (the Brahmana passage “grha vai pratishtha…”) and the Matrika and nandi parts are said by the priest and are not reproduced. Madhva and Smarta practice differ only in the opening words of the sankalpa (given in the notes); no Smarta-specific manual for the two rites was read, so differences beyond that could not be confirmed. Follow your family and priest where they differ.',
  sections: [
    {
      title: 'नामकरणम्',
      titleEn: 'Namakarana: the naming ceremony',
      note: 'The child is named on the 11th or 12th day after birth, or the 101st day, or the first day of the second year, or a day set by the jyotishi (Samskara Ratnamala, quoting Ashvalayana and others). The morning is good; the days of bhadra, vyatipata, eclipse, sankranti, amavasya and shraddha are left out, and the usual faults of the year (Guru–Shukra setting, adhika masa) do not matter for the naming. The father (karta), with the mother holding the child on his right and the brahmanas, makes the sankalpa below (Madhvas say the first line, shown for them, in place of the words श्रीपरमेश्वरप्रीत्यर्थम् — “for the pleasure of the Supreme Lord” — which the Samskara Ratnamala has), does Ganapati puja, svasti-punyahavachana (see ‘Punyahavachana’), matrika puja and nandi shraddha, and then the naming. A girl is named in the same way but without Vedic mantras, with an odd number of syllables. Priest-led; this page is a guide.',
      noteKn: 'ಮಗುವಿಗೆ ಹುಟ್ಟಿದ ೧೧ ಅಥವಾ ೧೨ನೆಯ ದಿನ, ೧೦೧ನೆಯ ದಿನ, ಎರಡನೆಯ ವರ್ಷದ ಮೊದಲ ದಿನ ಅಥವಾ ಜ್ಯೋತಿಷಿ ಹೇಳಿದ ದಿನ ನಾಮಕರಣ ಮಾಡುತ್ತಾರೆ (ಸಂಸ್ಕಾರ ರತ್ನಮಾಲಾ, ಆಶ್ವಲಾಯನ ಮುಂತಾದವುಗಳನ್ನು ಉಲ್ಲೇಖಿಸಿ). ಪ್ರಾತಃಕಾಲ ಉತ್ತಮ; ಭದ್ರಾ, ವ್ಯತೀಪಾತ, ಗ್ರಹಣ, ಸಂಕ್ರಾಂತಿ, ಅಮಾವಾಸ್ಯೆ, ಶ್ರಾದ್ಧದ ದಿನಗಳನ್ನು ಬಿಡಬೇಕು; ಗುರು–ಶುಕ್ರ ಅಸ್ತ, ಅಧಿಕ ಮಾಸ ಮುಂತಾದ ದೋಷಗಳು ನಾಮಕರಣಕ್ಕೆ ಇಲ್ಲ. ತಂದೆ (ಕರ್ತ), ಬಲಭಾಗದಲ್ಲಿ ಮಗುವನ್ನು ಹಿಡಿದ ತಾಯಿ ಮತ್ತು ಬ್ರಾಹ್ಮಣರೊಡನೆ ಕೆಳಗಿನ ಸಂಕಲ್ಪ ಮಾಡಿ (ಮಾಧ್ವರು ತಮಗಾಗಿ ತೋರಿಸಿದ ಮೊದಲ ಸಾಲನ್ನು, ಸಂಸ್ಕಾರ ರತ್ನಮಾಲಾದಲ್ಲಿರುವ “ಶ್ರೀಪರಮೇಶ್ವರಪ್ರೀತ್ಯರ್ಥಂ” ಬದಲು, ಹೇಳುತ್ತಾರೆ), ಗಣಪತಿ ಪೂಜೆ, ಸ್ವಸ್ತಿ–ಪುಣ್ಯಾಹವಾಚನ (‘ಪುಣ್ಯಾಹವಾಚನ’ ನೋಡಿ), ಮಾತೃಕಾ ಪೂಜೆ, ನಾಂದೀ ಶ್ರಾದ್ಧ ಮಾಡಿ ನಂತರ ನಾಮಕರಣ. ಹೆಣ್ಣುಮಗುವಿಗೂ ಹೀಗೆಯೇ, ವೇದಮಂತ್ರಗಳಿಲ್ಲದೆ, ಅಯುಗ್ಮ ಅಕ್ಷರಗಳ ಹೆಸರು. ಪುರೋಹಿತರ ನೇತೃತ್ವ; ಈ ಪುಟ ಮಾರ್ಗದರ್ಶಿ.',
      verses: [
        {
          text: 'भारतीरमणमुख्यप्राणान्तर्गत श्रीविष्णुप्रेरणया श्रीविष्णुप्रीत्यर्थम् ।',
          meaning: {
            en: 'Moved by Sri Vishnu who dwells in Mukhyaprana, the beloved of Bharati, and for His pleasure.',
            kn: 'ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಶ್ರೀವಿಷ್ಣುವಿನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ.',
          },
          when: { tradition: ['madhva'] },
        },
        {
          text: 'मम अस्य शिशोः बीजगर्भसमुद्भवैनोनिबर्हणायुरभिवृद्धिव्यवहारसिद्धिद्वारा\nश्रीपरमेश्वरप्रीत्यर्थं नामकरणं करिष्ये ।\nतदङ्गतया गणपतिपूजनपूर्वकं स्वस्तिपुण्याहवाचनं मातृकापूजनं नान्दीश्राद्धं च करिष्ये ॥',
          meaning: {
            en: 'For the removal of any fault arising from the seed and the womb of this child of mine, for long life and success in worldly dealings, and for the pleasure of the Supreme Lord, I shall perform the naming. As part of it, beginning with the worship of Ganapati, I shall do the svasti-punyahavachana, the worship of the Matrikas and the nandi shraddha.',
            kn: 'ನನ್ನ ಈ ಶಿಶುವಿನ ಬೀಜ–ಗರ್ಭಗಳಿಂದ ಉಂಟಾದ ದೋಷ ನಿವಾರಣೆಗಾಗಿ, ಆಯುಸ್ಸು ವೃದ್ಧಿ ಮತ್ತು ವ್ಯವಹಾರ ಸಿದ್ಧಿಗಾಗಿ, ಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ ನಾಮಕರಣವನ್ನು ಮಾಡುತ್ತೇನೆ. ಅದರ ಅಂಗವಾಗಿ ಗಣಪತಿ ಪೂಜೆಯಿಂದ ಆರಂಭಿಸಿ ಸ್ವಸ್ತಿ–ಪುಣ್ಯಾಹವಾಚನ, ಮಾತೃಕಾ ಪೂಜೆ, ನಾಂದೀ ಶ್ರಾದ್ಧಗಳನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'नामनिर्णयः',
      titleEn: 'Choosing and writing the names',
      note: 'A father who has asked the brahmanas’ leave (“idam aryah kumarasya nama aham vidadhami” — “O sirs, I shall give this child his name”; “vidhiyatam” — “let it be done”) spreads rice on a bronze plate and writes the names on it with a gold rod. Four names are written: (1) the name of the family deity (kuladevata-bhakta); (2) the name of the month of birth, from the list below, counted from Chaitra or from Margashirsha; (3) the name from the star (nakshatra pada) of birth, by the avakahada chakra; (4) the name for everyday use. A fifth, the “abhivadaniya” name, is kept secret and known only to the parents till the upanayana, when the boy is told to greet elders with it (Ashvalayana Grihya Sutra 1.15.7). The rules for the everyday name (AGS 1.15.3–6): a boy’s name begins with a soft (ghosha) consonant, has a semivowel in the middle, ends in a long vowel or visarga, and has two syllables for one who wants standing or four for one who wants Vedic radiance — an even number of syllables for boys, an odd number for girls; the Ratnamala adds that the name should be pleasant and easy to say, not be the name of a thing or an animal for girls, and end with sharma, varma, gupta, das according to varna.',
      noteKn: 'ತಂದೆಯು ಬ್ರಾಹ್ಮಣರ ಅನುಮತಿ ಕೇಳಿ (“ಇದಮಾರ್ಯಾಃ ಕುಮಾರಸ್ಯ ನಾಮಾಹಂ ವಿದಧಾಮಿ” — “ಆರ್ಯರೇ, ಈ ಕುಮಾರನಿಗೆ ಹೆಸರಿಡುತ್ತೇನೆ”; “ವಿಧೀಯತಾಂ” — “ಹಾಗೆಯೇ ಆಗಲಿ”) ಕಂಚಿನ ತಟ್ಟೆಯಲ್ಲಿ ಅಕ್ಕಿ ಹರಡಿ ಚಿನ್ನದ ಕಡ್ಡಿಯಿಂದ ಹೆಸರುಗಳನ್ನು ಬರೆಯುತ್ತಾನೆ. ನಾಲ್ಕು ಹೆಸರುಗಳನ್ನು ಬರೆಯುತ್ತಾರೆ: (೧) ಕುಲದೇವತಾ ಭಕ್ತ ಹೆಸರು; (೨) ಹುಟ್ಟಿದ ಮಾಸದ ಹೆಸರು (ಕೆಳಗಿನ ಪಟ್ಟಿಯಿಂದ; ಚೈತ್ರ ಅಥವಾ ಮಾರ್ಗಶೀರ್ಷದಿಂದ ಎಣಿಸಿ); (೩) ಜನ್ಮ ನಕ್ಷತ್ರ ಪಾದದಿಂದ ಅವಕಹಡ ಚಕ್ರದಂತೆ; (೪) ವ್ಯವಹಾರದ ಹೆಸರು. ಐದನೆಯ “ಅಭಿವಾದನೀಯ” ಹೆಸರನ್ನು ರಹಸ್ಯವಾಗಿಟ್ಟು ಉಪನಯನದವರೆಗೆ ತಂದೆ–ತಾಯಿಗಳಿಗೆ ಮಾತ್ರ ತಿಳಿದಿರಬೇಕು; ಉಪನಯನ ಕಾಲದಲ್ಲಿ ಅದರಿಂದ ಹಿರಿಯರಿಗೆ ಅಭಿವಾದನ ಮಾಡಲು ಹೇಳುತ್ತಾರೆ (ಆಶ್ವಲಾಯನ ಗೃಹ್ಯಸೂತ್ರ ೧.೧೫.೭). ವ್ಯವಹಾರ ನಾಮದ ನಿಯಮ (ಆಶ್ವಲಾಯನ ೧.೧೫.೩–೬): ಗಂಡುಮಗುವಿನ ಹೆಸರು ಘೋಷವರ್ಣದಿಂದ ಆರಂಭ, ಮಧ್ಯದಲ್ಲಿ ಅಂತಸ್ಥ ಅಕ್ಷರ (ಯ ರ ಲ ವ), ಕೊನೆಯಲ್ಲಿ ದೀರ್ಘ ಅಥವಾ ವಿಸರ್ಗ; ಪ್ರತಿಷ್ಠೆ ಬಯಸಿದರೆ ಎರಡು ಅಕ್ಷರ, ಬ್ರಹ್ಮವರ್ಚಸ್ಸು ಬಯಸಿದರೆ ನಾಲ್ಕು ಅಕ್ಷರ — ಗಂಡುಮಕ್ಕಳಿಗೆ ಸಮ, ಹೆಣ್ಣುಮಕ್ಕಳಿಗೆ ಬೆಸ ಅಕ್ಷರ; ರತ್ನಮಾಲಾ: ಹೆಸರು ಗಂಭೀರ, ಸುಂದರ, ಉಚ್ಚಾರಸುಲಭ ಆಗಿರಬೇಕು, ಹೆಣ್ಣುಮಕ್ಕಳಿಗೆ ವಸ್ತು–ಪಶುಪಕ್ಷಿಗಳ ಹೆಸರಿಡಬಾರದು, ವರ್ಣಕ್ಕೆ ತಕ್ಕಂತೆ ಶರ್ಮ, ವರ್ಮ, ಗುಪ್ತ, ದಾಸ ಸೇರಿಸಬೇಕು.',
      verses: [
        {
          text: 'इदमार्याः कुमारस्य नामाहं विदधामि ।\n(विधीयताम् ।)',
          meaning: {
            en: 'O sirs, I shall now give this child his name. (Brahmanas: let it be done.)',
            kn: 'ಆರ್ಯರೇ, ಈ ಕುಮಾರನಿಗೆ ಈಗ ಹೆಸರಿಡುತ್ತೇನೆ. (ಬ್ರಾಹ್ಮಣರು: ಹಾಗೆಯೇ ಆಗಲಿ.)',
          },
        },
        {
          text: 'कृष्णोऽनन्तोऽच्युतश्चक्री वैकुण्ठोऽथ जनार्दनः ।\nउपेन्द्रो यज्ञपुरुषो वासुदेवस्तथा हरिः ।\nयोगीशः पुण्डरीकाक्षो मासनामानि क्रमात् ॥',
          meaning: {
            en: 'Krishna, Ananta, Achyuta, Chakri, Vaikuntha, then Janardana; Upendra, Yajnapurusha, Vasudeva, and Hari; Yogisha, Pundarikaksha — the names of the months, in order. (Taken from the Samskara Ratnamala, counted from Chaitra, or from Margashirsha.)',
            kn: 'ಕೃಷ್ಣ, ಅನಂತ, ಅಚ್ಯುತ, ಚಕ್ರೀ, ವೈಕುಂಠ, ನಂತರ ಜನಾರ್ದನ; ಉಪೇಂದ್ರ, ಯಜ್ಞಪುರುಷ, ವಾಸುದೇವ, ಹರಿ; ಯೋಗೀಶ, ಪುಂಡರೀಕಾಕ್ಷ — ಇವು ಕ್ರಮವಾಗಿ ಮಾಸ ನಾಮಗಳು. (ಸಂಸ್ಕಾರ ರತ್ನಮಾಲಾದಿಂದ; ಚೈತ್ರದಿಂದ ಅಥವಾ ಮಾರ್ಗಶೀರ್ಷದಿಂದ ಎಣಿಸಿ.)',
          },
        },
      ],
    },
    {
      title: 'नामश्रावणम्',
      titleEn: 'Whispering the name and the blessing',
      note: 'The names are worshipped on the plate (नामदेवताभ्यो नमः). The father, with the child on his wife’s lap at his right, whispers the name in the child’s right ear (“you are so-and-so”) and says this Rigveda verse followed by the Brahmana passage beginning “grha vai pratishtha…” (the priest recites it); the brahmanas answer “the name be well established” (नाम सुप्रतिष्ठितमस्तु). The father then has the child greet the brahmanas (“so-and-so of such name greets you”), and they bless him “ayushman bhava” (“may you live long”). The father bows to the elders and the brahmanas and feeds the brahmanas with dakshina. With a fire (the homakarana option) the same is done after the principal offerings of the “Parthiva” fire as in the jatakarma.',
      noteKn: 'ನಾಮ ದೇವತೆಗಳನ್ನು ತಟ್ಟೆಯಲ್ಲಿ “ನಾಮದೇವತಾಭ್ಯೋ ನಮಃ” ಎಂದು ಪೂಜಿಸುತ್ತಾರೆ. ತಂದೆಯು ತನ್ನ ಬಲಭಾಗದಲ್ಲಿ ಪತ್ನಿಯ ಮಡಿಲಲ್ಲಿರುವ ಮಗುವಿನ ಬಲಕಿವಿಯಲ್ಲಿ ಹೆಸರನ್ನು ಉಚ್ಚರಿಸಿ (“ನೀನು ಇಂತಹವನು”) ಈ ಋಗ್ವೇದ ಮಂತ್ರವನ್ನು ಹೇಳಿ “ಗೃಹಾ ವೈ ಪ್ರತಿಷ್ಠಾ…” ಬ್ರಾಹ್ಮಣ ಭಾಗವನ್ನು (ಪುರೋಹಿತರು ಹೇಳುತ್ತಾರೆ); ಬ್ರಾಹ್ಮಣರು “ನಾಮ ಸುಪ್ರತಿಷ್ಠಿತಮಸ್ತು” ಎನ್ನುತ್ತಾರೆ. ನಂತರ ತಂದೆ ಮಗುವಿನ ಹೆಸರಿನಿಂದ ಬ್ರಾಹ್ಮಣರಿಗೆ ಅಭಿವಾದನ ಮಾಡಿಸುತ್ತಾನೆ (“ಇಂತಹ ಹೆಸರಿನ ಇವನು ನಿಮಗೆ ಅಭಿವಾದನ ಮಾಡುತ್ತಾನೆ”); ಅವರು “ಆಯುಷ್ಮಾನ್ ಭವ” ಎಂದು ಹರಸುತ್ತಾರೆ. ತಂದೆ ಹಿರಿಯರಿಗೆ, ಬ್ರಾಹ್ಮಣರಿಗೆ ನಮಸ್ಕರಿಸಿ ದಕ್ಷಿಣೆಯೊಡನೆ ಬ್ರಾಹ್ಮಣ ಭೋಜನ ಮಾಡಿಸುತ್ತಾನೆ. ಹೋಮ ಮಾಡುವ ಪಕ್ಷದಲ್ಲಿ ಜಾತಕರ್ಮದಂತೆ “ಪಾರ್ಥಿವ” ಅಗ್ನಿಯಲ್ಲಿ ಪ್ರಧಾನ ಆಹುತಿಗಳ ನಂತರ ಇದನ್ನು ಮಾಡುತ್ತಾರೆ.',
      verses: [
        {
          text: 'तदस्तु मित्रावरुणा तदग्ने शं योरस्मभ्यमिदमस्तु शस्तम् ।\nअशीमहि गाधमुत प्रतिष्ठां नमो दिवे बृहते सादनाय ॥',
          meaning: {
            en: 'So be it, O Mitra and Varuna, so be it, O Agni: may this praise bring us health and well-being. May we gain a firm foothold and a standing place; salutation to heaven, the great seat. (Rigveda 5.47.7; the first of the mantras at the naming, with “grha vai pratishtha”)',
            kn: 'ಹಾಗೆಯೇ ಆಗಲಿ, ಓ ಮಿತ್ರಾವರುಣರೇ, ಅಗ್ನಿಯೇ; ಈ ಸ್ತುತಿ ನಮಗೆ ಆರೋಗ್ಯ–ಕ್ಷೇಮ ತರಲಿ. ನಾವು ದೃಢ ನೆಲೆಯನ್ನು ಪಡೆಯೋಣ; ವಿಶಾಲ ಆಸನವಾದ ದ್ಯುಲೋಕಕ್ಕೆ ನಮಸ್ಕಾರ. (ಋಗ್ವೇದ ೫.೪೭.೭; ನಾಮಕರಣದ ಮಂತ್ರಗಳಲ್ಲಿ ಮೊದಲನೆಯದು, “ಗೃಹಾ ವೈ ಪ್ರತಿಷ್ಠಾ” ಜೊತೆಗೆ)',
          },
        },
        {
          text: 'नाम सुप्रतिष्ठितमस्तु ।\nआयुष्मान् भव ॥',
          meaning: {
            en: 'May the name be well established. May you live long. (The brahmanas’ replies, at the whispering of the name and at the child’s greeting.)',
            kn: 'ಹೆಸರು ಚೆನ್ನಾಗಿ ಪ್ರತಿಷ್ಠಿತವಾಗಲಿ. ದೀರ್ಘಾಯುಷ್ಮಂತನಾಗು. (ಹೆಸರನ್ನು ಕಿವಿಯಲ್ಲಿ ಹೇಳಿದ ನಂತರ ಮತ್ತು ಮಗುವಿನ ಅಭಿವಾದನದ ನಂತರ ಬ್ರಾಹ್ಮಣರ ಉತ್ತರ.)',
          },
        },
      ],
    },
    {
      title: 'अन्नप्राशनम्',
      titleEn: 'Annaprashana: the first feeding of cooked rice',
      note: 'Annaprashana is the first feeding of the child with solid food: in the sixth month for a boy who is well grown, or in the eighth, tenth or twelfth month or after a full year; for a girl in the fifth, seventh or ninth month (Samskara Ratnamala, from Sushruta and other sources; the sutra itself says “in the sixth month”, and different foods for different wishes — goat meat for food, partridge for Vedic radiance, ghee-rice for brightness; curd, honey and ghee mixed with rice is the common form). The days are the 2nd, 3rd, 5th, 7th, 10th and 13th tithis, Wednesday, Thursday and Friday (and Sunday, Monday for some) and the stars Ashvini, Rohini, Mrigashira, Punarvasu, Pushya, the three Uttaras, Hasta, Chitra, Svati, Anuradha, Shravana, Dhanishtha, Shatabhisha and Revati; the yogas bhadra, vaidhriti, vyatipata, ganda, atiganda, vajra, shula and parigha are avoided. The karta, with his wife holding the child on his right, makes this sankalpa (the same base as the namakarana), does Ganapati puja and punyahavachana, adorns the child, and worships the family’s chosen deity; then the first morsel is fed by the father with a gold ring (or piece of gold) in the hand.',
      noteKn: 'ಅನ್ನಪ್ರಾಶನ ಎಂದರೆ ಮಗುವಿಗೆ ಮೊದಲ ಬಾರಿ ಘನ ಆಹಾರ ತಿನ್ನಿಸುವುದು: ಚೆನ್ನಾಗಿ ಬೆಳೆದ ಗಂಡುಮಗುವಿಗೆ ಆರನೆಯ ತಿಂಗಳಲ್ಲಿ, ಅಥವಾ ಎಂಟು, ಹತ್ತು, ಹನ್ನೆರಡನೆಯ ತಿಂಗಳಲ್ಲಿ ಇಲ್ಲವೇ ಒಂದು ವರ್ಷದ ನಂತರ; ಹೆಣ್ಣುಮಗುವಿಗೆ ಐದು, ಏಳು, ಒಂಬತ್ತನೆಯ ತಿಂಗಳಲ್ಲಿ (ಸಂಸ್ಕಾರ ರತ್ನಮಾಲಾ, ಸುಶ್ರುತಾದಿಗಳಿಂದ; ಸೂತ್ರವು “ಆರನೆಯ ತಿಂಗಳಲ್ಲಿ” ಎನ್ನುತ್ತದೆ ಮತ್ತು ಬೇರೆ ಬೇರೆ ಬಯಕೆಗೆ ಬೇರೆ ಬೇರೆ ಆಹಾರ ಹೇಳುತ್ತದೆ — ಅನ್ನಾದ್ಯಕ್ಕೆ ಆಡಿನ ಮಾಂಸ, ಬ್ರಹ್ಮವರ್ಚಸ್ಸಿಗೆ ತಿತ್ತಿರಿ, ತೇಜಸ್ಸಿಗೆ ತುಪ್ಪದನ್ನ; ಸಾಮಾನ್ಯವಾಗಿ ಮೊಸರು–ಜೇನು–ತುಪ್ಪ ಬೆರೆಸಿದ ಅನ್ನ). ಶುಭ ದಿನಗಳು: ದ್ವಿತೀಯಾ, ತೃತೀಯಾ, ಪಂಚಮೀ, ಸಪ್ತಮೀ, ದಶಮೀ, ತ್ರಯೋದಶೀ ತಿಥಿಗಳು; ಬುಧ, ಗುರು, ಶುಕ್ರವಾರ (ಕೆಲವರಿಗೆ ರವಿ–ಸೋಮವಾರವೂ); ಅಶ್ವಿನೀ, ರೋಹಿಣೀ, ಮೃಗಶಿರಾ, ಪುನರ್ವಸು, ಪುಷ್ಯ, ಮೂರು ಉತ್ತರಾ, ಹಸ್ತಾ, ಚಿತ್ರಾ, ಸ್ವಾತೀ, ಅನುರಾಧಾ, ಶ್ರವಣಾ, ಧನಿಷ್ಠಾ, ಶತಭಿಷಾ, ರೇವತೀ ನಕ್ಷತ್ರಗಳು; ಭದ್ರಾ, ವೈಧೃತಿ, ವ್ಯತೀಪಾತ, ಗಂಡ, ಅತಿಗಂಡ, ವಜ್ರ, ಶೂಲ, ಪರಿಘ ಯೋಗಗಳನ್ನು ಬಿಡಬೇಕು. ಕರ್ತನು ಬಲಭಾಗದಲ್ಲಿ ಮಗುವನ್ನು ಹಿಡಿದ ಪತ್ನಿಯೊಡನೆ ಈ ಸಂಕಲ್ಪ (ನಾಮಕರಣದ ಮೂಲ ಪಾಠವೇ) ಮಾಡಿ, ಗಣಪತಿ ಪೂಜೆ, ಪುಣ್ಯಾಹವಾಚನ ಮಾಡಿ, ಮಗುವನ್ನು ಅಲಂಕರಿಸಿ, ಇಷ್ಟದೇವತೆಯನ್ನು ಪೂಜಿಸಿ ನಂತರ ಚಿನ್ನ (ಉಂಗುರ) ಹಿಡಿದ ಕೈಯಿಂದ ತಂದೆ ಮೊದಲ ತುತ್ತು ತಿನ್ನಿಸುತ್ತಾನೆ.',
      verses: [
        {
          text: 'मम अस्य शिशोः मातृगर्भमलप्राशनशुद्ध्यन्नाद्यब्रह्मवर्चसेन्द्रियायुर्लक्षणफलसिद्धि-\nबीजगर्भसमुद्भवैनोनिबर्हणद्वारा श्रीपरमेश्वरप्रीत्यर्थम्\nअन्नप्राशनाख्यं कर्म करिष्ये ॥',
          meaning: {
            en: 'For the cleansing from what the child took in the womb of its mother, for abundant food, Vedic radiance, strong senses and long life, and the removal of faults from the seed and womb, and for the pleasure of the Supreme Lord, I shall perform the rite called annaprashana for this child of mine. (Wording read from a Kannada edition; the exact wording may vary.)',
            kn: 'ನನ್ನ ಈ ಶಿಶುವಿನ ತಾಯಿಯ ಗರ್ಭದ ಮಲಪ್ರಾಶನ ಶುದ್ಧಿಗಾಗಿ, ಅನ್ನಾದ್ಯ, ಬ್ರಹ್ಮವರ್ಚಸ್ಸು, ಇಂದ್ರಿಯ, ಆಯುಸ್ಸು, ಲಕ್ಷಣ ಫಲ ಸಿದ್ಧಿಗಾಗಿ, ಬೀಜ–ಗರ್ಭ ದೋಷ ನಿವಾರಣೆಗಾಗಿ, ಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ ಅನ್ನಪ್ರಾಶನ ಎಂಬ ಕರ್ಮವನ್ನು ಮಾಡುತ್ತೇನೆ. (ಕನ್ನಡ ಆವೃತ್ತಿಯಿಂದ ಓದಿದ ಪಾಠ; ನಿಖರ ಪಾಠ ಬೇರೆಯಾಗಿರಬಹುದು.)',
          },
        },
        {
          text: 'अन्नपतेऽन्नस्य नो देह्यनमीवस्य शुष्मिणः ।\nप्र प्रदातारं तारिष ऊर्जं नो धेहि द्विपदे चतुष्पदे ॥',
          meaning: {
            en: 'O lord of food, give us food without disease and full of strength; carry the giver across; set strength in us, in our two-footed and our four-footed. (Taittiriya Samhita; Ashvalayana Grihya Sutra 1.16.4. Said as the child is given the first morsel of curd, honey and ghee mixed with rice, from a gold or bronze vessel, with a hand holding gold.)',
            kn: 'ಓ ಅನ್ನಪತಿಯೇ, ರೋಗರಹಿತವೂ ಬಲವತ್ತರವೂ ಆದ ಅನ್ನವನ್ನು ನಮಗೆ ಕೊಡು; ದಾತೃವನ್ನು ದಾಟಿಸು; ನಮ್ಮ ಎರಡು ಕಾಲಿನವರಿಗೂ ನಾಲ್ಕು ಕಾಲಿನವರಿಗೂ ಶಕ್ತಿಯನ್ನು ಕೊಡು. (ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ; ಆಶ್ವಲಾಯನ ಗೃಹ್ಯಸೂತ್ರ ೧.೧೬.೪. ಮೊಸರು–ಜೇನು–ತುಪ್ಪ ಬೆರೆಸಿದ ಅನ್ನದ ಮೊದಲ ತುತ್ತನ್ನು ಚಿನ್ನ ಅಥವಾ ಕಂಚಿನ ಪಾತ್ರೆಯಿಂದ, ಚಿನ್ನ ಹಿಡಿದ ಕೈಯಿಂದ ತಿನ್ನಿಸುವಾಗ.)',
          },
        },
      ],
    },
    {
      title: 'जीविकापरीक्षा',
      titleEn: 'After the first feeding: the livelihood test and the close',
      note: 'After the child has been fed as much as he likes and his mouth washed, he is seated on the ground, and cloth, a weapon, a book, a pen, gold, silver and other things are laid in front of him. The first thing the child touches of his own accord is taken to show the kind of livelihood he will have (jivika-pariksha; Samskara Ratnamala). If done with a fire, the “Shuchi” fire is set up, the rest as in the jatakarma, and the feeding and the test follow the principal offerings. The brahmanas are fed, dakshina is given, they bless the child, and the family eat together. The rite is led by a priest; this page is a guide.',
      noteKn: 'ಮಗುವಿಗೆ ಇಷ್ಟವಾದಷ್ಟು ಉಣ್ಣಿಸಿ ಬಾಯಿ ತೊಳೆದ ಮೇಲೆ, ನೆಲದ ಮೇಲೆ ಕುಳ್ಳಿರಿಸಿ ಅದರ ಮುಂದೆ ವಸ್ತ್ರ, ಶಸ್ತ್ರ, ಪುಸ್ತಕ, ಲೇಖನಿ, ಚಿನ್ನ, ಬೆಳ್ಳಿ ಮುಂತಾದವನ್ನಿಡುತ್ತಾರೆ. ಮಗು ತಾನಾಗಿ ಮೊದಲು ಮುಟ್ಟಿದ ವಸ್ತು ಅದರ ಜೀವನೋಪಾಯವನ್ನು ತೋರಿಸುತ್ತದೆ ಎಂದು ತಿಳಿಯುತ್ತಾರೆ (ಜೀವಿಕಾ ಪರೀಕ್ಷೆ; ಸಂಸ್ಕಾರ ರತ್ನಮಾಲಾ). ಹೋಮ ಮಾಡಿದರೆ “ಶುಚಿ” ಅಗ್ನಿಯನ್ನು ಸ್ಥಾಪಿಸಿ, ಉಳಿದುದನ್ನು ಜಾತಕರ್ಮದಂತೆ ಮಾಡಿ, ಪ್ರಧಾನ ಹೋಮದ ನಂತರ ಅನ್ನಪ್ರಾಶನ–ಜೀವಿಕಾ ಪರೀಕ್ಷೆ ಮಾಡುತ್ತಾರೆ. ಬ್ರಾಹ್ಮಣರಿಗೆ ಭೋಜನ, ದಕ್ಷಿಣೆ; ಅವರು ಮಗುವನ್ನು ಹರಸುತ್ತಾರೆ; ಕುಟುಂಬ ಒಟ್ಟಿಗೆ ಊಟ ಮಾಡುತ್ತದೆ. ಪುರೋಹಿತರ ನೇತೃತ್ವ; ಈ ಪುಟ ಮಾರ್ಗದರ್ಶಿ.',
      verses: [
        {
          text: 'यस्य स्मृत्या च नामोक्त्या तपःपूजाक्रियादिषु ।\nन्यूनं सम्पूर्णतां याति सद्यो वन्दे तमच्युतम् ॥',
          meaning: {
            en: 'I bow to Achyuta, by remembering whom and uttering whose name whatever is lacking in austerity, worship and ritual at once becomes complete.',
            kn: 'ಯಾರ ಸ್ಮರಣೆಯಿಂದಲೂ ನಾಮೋಚ್ಚಾರಣೆಯಿಂದಲೂ ತಪಸ್ಸು, ಪೂಜೆ, ಕ್ರಿಯೆಗಳಲ್ಲಿನ ಕೊರತೆ ಕೂಡಲೇ ಪೂರ್ಣವಾಗುತ್ತದೆಯೋ ಆ ಅಚ್ಯುತನಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
  ],
};
