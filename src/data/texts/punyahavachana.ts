/**
 * Punyahavachana — the purification rite that opens many ceremonies. Guide to follow the rite, which a priest leads.
 * Sources: Samskara Ratnamala, H. Aravindacharya (Kannada, Madhva, archive.org); Upakarma Vidhi, Yajurvediya, K. Dattatreya Shastri (Sringeri); Rigveda verses checked against the Rigveda samhita (GRETIL, Aufrecht).
 */
import type { Mantra } from '../types';

export const punyahavachana: Mantra = {
  id: 'punyahavachana',
  title: 'पुण्याहवाचनम्',
  titleEn: 'Punyahavachana (the purification rite before ceremonies)',
  category: 'samskara',
  deity: 'Varuna in the kalasha; Ganapati and the gods',
  source: 'Samskara Ratnamala (H. Aravindacharya, Kannada, Madhva) and Upakarma Vidhi, Yajurvedeeya (K. Dattatreya Shastri, Sringeri); Rigveda 1.22.13, 1.24.11, 1.89.8, 1.96.8, 2.35.10, 2.43.2, 3.8.4, 5.4.10–11, 5.82.3, 9.17.4, 9.94.4, 10.36.14, 10.85.19, 10.97, 10.106.11, 10.107.2',
  summary: 'The kalasha rite that opens upanayana, marriage, namakarana, griha pravesha, upakarma and many other ceremonies: mangala-patha, the sankalpa, setting up and worshipping the two kalashas with their Rigveda mantras, invoking Varuna, the questions and answers by which the brahmanas declare the day auspicious (punyaha, svasti, riddhi), the blessing mantras and the wishes (shanti, pushti, tushti and the rest), and the sprinkling with the kalasha water.',
  summaryKn: 'ಉಪನಯನ, ವಿವಾಹ, ನಾಮಕರಣ, ಗೃಹಪ್ರವೇಶ, ಉಪಾಕರ್ಮ ಮುಂತಾದ ಅನೇಕ ಕರ್ಮಗಳ ಆರಂಭದಲ್ಲಿ ಮಾಡುವ ಕಲಶ ಕರ್ಮ: ಮಂಗಳಪಾಠ, ಸಂಕಲ್ಪ, ಋಗ್ವೇದ ಮಂತ್ರಗಳೊಡನೆ ಎರಡು ಕಲಶಗಳ ಸ್ಥಾಪನೆ–ಪೂಜೆ, ವರುಣಾವಾಹನ, ಬ್ರಾಹ್ಮಣರು ದಿನವನ್ನು ಶುಭವೆಂದು ಘೋಷಿಸುವ ಪ್ರಶ್ನೋತ್ತರ (ಪುಣ್ಯಾಹ, ಸ್ವಸ್ತಿ, ಋದ್ಧಿ), ಆಶೀರ್ವಾದ ಮಂತ್ರಗಳು ಮತ್ತು ಶಾಂತಿ–ಪುಷ್ಟಿ–ತುಷ್ಟಿ ಮೊದಲಾದ ಹಾರೈಕೆಗಳು, ಕಲಶಜಲ ಪ್ರೋಕ್ಷಣ.',
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
  difficulty: 'advanced',
  completeness: 'partial',
  contentNote: 'Punyahavachana is normally performed with a priest, who leads the whole rite; this page is a guide to follow along and understand what is done and said. The Rigveda verses are given as checked against the Rigveda samhita; the Yajurveda passages (apa undantu jivase…, the Taittiriya anuvaka on Savita, the Taittiriya passage “yajyaya yajati…”) and the long Sanskrit prose of the rite are recited by the priest from the manual and are not reproduced; the Madhva and Smarta forms of the rite differ only in the opening words of the sankalpa (Madhva: भारतीरमणमुख्यप्राणान्तर्गत श्रीविष्णुप्रेरणया…; Smarta: श्रीपरमेश्वरप्रीत्यर्थम्) in the manuals consulted. The Ganapati puja, matrika puja and nandi shraddha that go with it are named in the sankalpa and are done by the priest.',
  sections: [
    {
      title: 'पुण्याहवाचनम्',
      titleEn: 'What punyahavachana is and when it is done',
      note: 'Punyahavachana (“declaring the day auspicious”) is the rite of purification and blessing that opens almost every ceremony — upanayana, marriage, namakarana, griha pravesha, upakarma, the start of a homa. A kalasha (pot of water) is invoked and worshipped; the karta then asks the brahmanas three times to declare the day auspicious (punyaham), the rite blessed (svasti), and fulfilled (riddhi), and they do so with Vedic mantras, after which water from the kalasha is sprinkled on the karta, his family and the materials. It is done with a priest (the karta repeats the questions; the brahmanas answer) — this page is a guide to follow it. It is done with two kalashas on happy occasions and with one on a sad one (Sangraha, quoted in the manual). The text below follows the Samskara Ratnamala (Haranahalli Aravindacharya, a Madhva author’s Kannada edition) and the Yajurveda upakarma manual of K. Dattatreya Shastri (Sringeri); the Vedic verses are checked against the Rigveda. Say this verse first and sprinkle water on yourself.',
      noteKn: 'ಪುಣ್ಯಾಹವಾಚನ (“ದಿನವು ಪುಣ್ಯಕರವೆಂದು ಹೇಳುವುದು”) ಎಂದರೆ ಉಪನಯನ, ವಿವಾಹ, ನಾಮಕರಣ, ಗೃಹಪ್ರವೇಶ, ಉಪಾಕರ್ಮ, ಹೋಮ ಆರಂಭ ಮುಂತಾದ ಬಹುತೇಕ ಎಲ್ಲ ಕರ್ಮಗಳ ಆರಂಭದಲ್ಲಿ ಮಾಡುವ ಶುದ್ಧಿ–ಆಶೀರ್ವಾದ ಕರ್ಮ. ಕಲಶವನ್ನು ಆವಾಹಿಸಿ ಪೂಜಿಸಿ, ಕರ್ತನು ಬ್ರಾಹ್ಮಣರನ್ನು ಮೂರು ಬಾರಿ ದಿನವು ಪುಣ್ಯಕರ (ಪುಣ್ಯಾಹಂ), ಕರ್ಮವು ಮಂಗಳಕರ (ಸ್ವಸ್ತಿ), ಫಲಕರ (ಋದ್ಧಿ) ಎಂದು ಹೇಳಲು ಕೇಳುತ್ತಾನೆ; ಅವರು ವೇದ ಮಂತ್ರಗಳೊಡನೆ ಹೇಳುತ್ತಾರೆ; ನಂತರ ಕಲಶದ ನೀರನ್ನು ಕರ್ತ, ಕುಟುಂಬ ಮತ್ತು ಸಾಮಗ್ರಿಗಳ ಮೇಲೆ ಪ್ರೋಕ್ಷಿಸುತ್ತಾರೆ. ಇದನ್ನು ಪುರೋಹಿತರೊಡನೆ ಮಾಡಲಾಗುತ್ತದೆ (ಕರ್ತ ಪ್ರಶ್ನೆ ಹೇಳುತ್ತಾನೆ, ಬ್ರಾಹ್ಮಣರು ಉತ್ತರಿಸುತ್ತಾರೆ) — ಹಿಂಬಾಲಿಸಲು ಈ ಪುಟ. ಶುಭಕಾರ್ಯಗಳಲ್ಲಿ ಎರಡು ಕಲಶ, ಅಶುಭ ಕರ್ಮದಲ್ಲಿ ಒಂದು (ಸಂಗ್ರಹ, ಪುಸ್ತಕದಲ್ಲಿ ಉದ್ಧೃತ). ಕೆಳಗಿನ ಪಠ್ಯ ಸಂಸ್ಕಾರ ರತ್ನಮಾಲಾ (ಹರನಹಳ್ಳಿ ಅರವಿಂದಾಚಾರ್ಯ, ಮಾಧ್ವ ಲೇಖಕರ ಕನ್ನಡ ಆವೃತ್ತಿ) ಮತ್ತು ಕೆ. ದತ್ತಾತ್ರೇಯ ಶಾಸ್ತ್ರಿಗಳ ಯಜುರ್ವೇದ ಉಪಾಕರ್ಮ ಪುಸ್ತಕ (ಶೃಂಗೇರಿ) ಅನ್ನು ಅನುಸರಿಸುತ್ತದೆ; ವೇದ ಮಂತ್ರಗಳನ್ನು ಋಗ್ವೇದದೊಡನೆ ಹೋಲಿಸಿದೆ. ಮೊದಲು ಈ ಶ್ಲೋಕ ಹೇಳಿ ನಿಮ್ಮ ಮೇಲೆ ನೀರು ಪ್ರೋಕ್ಷಿಸಿ.',
      verses: [
        {
          text: 'अपवित्रः पवित्रो वा सर्वावस्थां गतोऽपि वा ।\nयः स्मरेत्पुण्डरीकाक्षं स बाह्याभ्यन्तरः शुचिः ॥',
          meaning: {
            en: 'Whether pure or impure, in whatever state one may be, whoever remembers the lotus-eyed Lord becomes clean within and without.',
            kn: 'ಶುದ್ಧನಾಗಿರಲಿ ಅಶುದ್ಧನಾಗಿರಲಿ, ಯಾವ ಸ್ಥಿತಿಯಲ್ಲಿದ್ದರೂ, ಕಮಲನಯನನಾದ ಶ್ರೀಹರಿಯನ್ನು ಸ್ಮರಿಸುವವನು ಒಳಗೂ ಹೊರಗೂ ಶುದ್ಧನಾಗುತ್ತಾನೆ.',
          },
        },
      ],
    },
    {
      title: 'मङ्गलपाठः',
      titleEn: 'Mangala-patha: salutations before the rite',
      note: 'With a flower in the hand, the karta salutes Ganesha and the gods, the family and the village deities, gurus and brahmanas, so that the rite may proceed without obstacle. Then he lights the lamp for the duration of the rite and does achamana (केशवाय नमः, नारायणाय नमः, माधवाय नमः) — see the Sandhyavandane texts for achamana.',
      noteKn: 'ಕೈಯಲ್ಲಿ ಹೂವು ಹಿಡಿದು ಕರ್ಮ ನಿರ್ವಿಘ್ನವಾಗಿ ನಡೆಯಲೆಂದು ಗಣೇಶನಿಗೆ ಮತ್ತು ದೇವತೆಗಳಿಗೆ, ಕುಲ–ಗ್ರಾಮ ದೇವತೆಗಳಿಗೆ, ಗುರುಗಳಿಗೆ, ಬ್ರಾಹ್ಮಣರಿಗೆ ನಮಸ್ಕರಿಸಿ ಕರ್ತನು ಕರ್ಮದ ಕಾಲ ಉರಿಯುವ ದೀಪವನ್ನು ಹಚ್ಚಿ ಆಚಮನ ಮಾಡಬೇಕು (ಕೇಶವಾಯ ನಮಃ, ನಾರಾಯಣಾಯ ನಮಃ, ಮಾಧವಾಯ ನಮಃ) — ಆಚಮನಕ್ಕೆ ಸಂಧ್ಯಾವಂದನೆ ಪಠ್ಯಗಳನ್ನು ನೋಡಿ.',
      verses: [
        {
          text: 'श्रीमन्महागणाधिपतये नमः । लक्ष्मीनारायणाभ्यां नमः । उमामहेश्वराभ्यां नमः ।\nवाणीहिरण्यगर्भाभ्यां नमः । शचीपुरन्दराभ्यां नमः । अरुन्धतीवसिष्ठाभ्यां नमः । सीतारामाभ्यां नमः ।\nमातृभ्यो नमः । पितृभ्यो नमः । गुरुभ्यो नमः । इष्टदेवताभ्यो नमः । कुलदेवताभ्यो नमः ।\nग्रामदेवताभ्यो नमः । वास्तुदेवताभ्यो नमः । सर्वेभ्यो देवेभ्यो नमः । सर्वेभ्यो ब्राह्मणेभ्यो नमः ॥',
          meaning: {
            en: 'Salutations to Sri Maha-Ganadhipati; to Lakshmi and Narayana; to Uma and Maheshvara; to Vani and Hiranyagarbha (Brahma); to Shachi and Purandara (Indra); to Arundhati and Vasishtha; to Sita and Rama; to the mothers, the fathers, the gurus; to the chosen deity, the family deity, the village deity, the deities of the site; to all the gods; to all the brahmanas.',
            kn: 'ಶ್ರೀಮನ್ಮಹಾಗಣಾಧಿಪತಿಗೆ ನಮಸ್ಕಾರ; ಲಕ್ಷ್ಮೀ–ನಾರಾಯಣರಿಗೆ; ಉಮಾ–ಮಹೇಶ್ವರರಿಗೆ; ವಾಣೀ–ಹಿರಣ್ಯಗರ್ಭರಿಗೆ (ಬ್ರಹ್ಮ); ಶಚೀ–ಪುರಂದರರಿಗೆ (ಇಂದ್ರ); ಅರುಂಧತೀ–ವಸಿಷ್ಠರಿಗೆ; ಸೀತಾ–ರಾಮರಿಗೆ; ಮಾತೃಗಳಿಗೆ, ಪಿತೃಗಳಿಗೆ, ಗುರುಗಳಿಗೆ; ಇಷ್ಟದೇವತೆ, ಕುಲದೇವತೆ, ಗ್ರಾಮದೇವತೆ, ವಾಸ್ತುದೇವತೆಗಳಿಗೆ; ಎಲ್ಲ ದೇವತೆಗಳಿಗೆ; ಎಲ್ಲ ಬ್ರಾಹ್ಮಣರಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'सङ्कल्पः',
      titleEn: 'Sankalpa for punyahavachana',
      note: 'The karta, with pavitra and after pranayama, makes the sankalpa for the main rite and adds that, as its part, he will do the Ganapati puja, svasti-punyahavachana, matrika puja and nandi shraddha. Fill the dots with the rite being done (upanayana, marriage, griha pravesha and so on). Madhvas begin with “भारतीरमणमुख्यप्राणान्तर्गत श्रीविष्णुप्रेरणया श्रीविष्णुप्रीत्यर्थम्” (as in the Madhva manuals); Smartas with “श्रीपरमेश्वरप्रीत्यर्थम्”. The sentence is from the Samskara Ratnamala and the Madhva manual (Hombale).',
      noteKn: 'ಪವಿತ್ರ ಧರಿಸಿ ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ಕರ್ತನು ಮುಖ್ಯ ಕರ್ಮದ ಸಂಕಲ್ಪ ಮಾಡಿ, ಅದರ ಅಂಗವಾಗಿ ಗಣಪತಿ ಪೂಜೆ, ಸ್ವಸ್ತಿ–ಪುಣ್ಯಾಹವಾಚನ, ಮಾತೃಕಾ ಪೂಜೆ, ನಾಂದೀ ಶ್ರಾದ್ಧಗಳನ್ನು ಮಾಡುತ್ತೇನೆಂದು ಸೇರಿಸಿ ಹೇಳುತ್ತಾನೆ. ಚುಕ್ಕೆಗಳ ಜಾಗದಲ್ಲಿ ಮಾಡುವ ಕರ್ಮವನ್ನು (ಉಪನಯನ, ವಿವಾಹ, ಗೃಹಪ್ರವೇಶ ಇತ್ಯಾದಿ) ಹೇಳಿ. ಮಾಧ್ವರು “ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಶ್ರೀವಿಷ್ಣು ಪ್ರೇರಣಯಾ ಶ್ರೀವಿಷ್ಣು ಪ್ರೀತ್ಯರ್ಥಂ” (ಮಾಧ್ವ ಪುಸ್ತಕಗಳಂತೆ), ಸ್ಮಾರ್ತರು “ಶ್ರೀಪರಮೇಶ್ವರಪ್ರೀತ್ಯರ್ಥಂ” ಎಂದು ಆರಂಭಿಸುತ್ತಾರೆ. ವಾಕ್ಯ ಸಂಸ್ಕಾರ ರತ್ನಮಾಲಾ ಮತ್ತು ಮಾಧ್ವ ಪುಸ್ತಕದ್ದು.',
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
          text: 'श्रीपरमेश्वरप्रीत्यर्थम् ।',
          meaning: {
            en: 'For the pleasure of the Supreme Lord.',
            kn: 'ಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ.',
          },
          when: { tradition: ['smarta'] },
        },
        {
          text: '....... कर्मणः अङ्गभूतं तदङ्गतया गणपतिपूजनपूर्वकं\nस्वस्तिपुण्याहवाचनं मातृकापूजनं नान्दीश्राद्धं च करिष्ये ॥',
          meaning: {
            en: 'As part of the rite of …, I shall do first the worship of Ganapati, then the svasti-punyahavachana, the worship of the Matrikas and the Nandi shraddha.',
            kn: '…… ಕರ್ಮದ ಅಂಗವಾಗಿ, ಮೊದಲು ಗಣಪತಿ ಪೂಜೆ, ನಂತರ ಸ್ವಸ್ತಿ–ಪುಣ್ಯಾಹವಾಚನ, ಮಾತೃಕಾ ಪೂಜೆ ಮತ್ತು ನಾಂದೀ ಶ್ರಾದ್ಧಗಳನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'कलशस्थापनम्',
      titleEn: 'Setting up the two kalashas',
      note: 'Two kalashas (gold, silver, copper or clay, well made) are set on a bed of rice (or barley) on the ground, the right one for the main deity (Varuna) and the left for the sprinkling water; the karta touches the ground for the earth’s support with the first verse and fills the pots with water with the later ones: Rigveda 1.22.13 (to Heaven and Earth); 10.97.22 (the herbs and Soma, said as the herbs are put in); 9.17.4 (the soma flows into the pots) — said as the pots are set down; “imam me ganga” (10.75.5) at filling; then sandal (Sri Sukta’s gandhadvaram), durva, the five mango-type leaves (Rigveda 10.97.5), fruit (10.97.15), the jewels (5.82.3), gold (2.35.10), a new cloth wound round the pot (3.8.4) and a coconut or full vessel set on top (purna darvi). The sequence and mantras are from the Ratnamala and the Dattatreya manual; the priest does it.',
      noteKn: 'ಎರಡು ಕಲಶಗಳನ್ನು (ಚಿನ್ನ, ಬೆಳ್ಳಿ, ತಾಮ್ರ ಅಥವಾ ಮಣ್ಣಿನ, ಸುಂದರ) ನೆಲದ ಮೇಲೆ ಅಕ್ಕಿ (ಅಥವಾ ಯವ) ರಾಶಿಯ ಮೇಲೆ ಇಡಬೇಕು — ಬಲಗಡೆಯದು ಮುಖ್ಯ ದೇವತೆ (ವರುಣ)ಗೆ, ಎಡಗಡೆಯದು ಪ್ರೋಕ್ಷಣ ಜಲಕ್ಕೆ; ಮೊದಲ ಮಂತ್ರದಿಂದ ನೆಲವನ್ನು ಮುಟ್ಟಿ ಭೂಮಿಯ ಆಧಾರ ಕೋರಿ, ಮುಂದಿನ ಮಂತ್ರಗಳಿಂದ ಕಲಶಗಳನ್ನು ತುಂಬಿಸಬೇಕು: ಋಗ್ವೇದ ೧.೨೨.೧೩ (ದ್ಯಾವಾಪೃಥಿವಿಗೆ); ೧೦.೯೭.೨೨ (ಓಷಧಿ–ಸೋಮ; ಓಷಧಿ ಹಾಕುವಾಗ); ೯.೧೭.೪ (ಕಲಶಗಳಲ್ಲಿ ಸೋಮ ಹರಿಯುತ್ತದೆ; ಕಲಶ ಇಡುವಾಗ); “ಇಮಂ ಮೇ ಗಂಗೇ” (೧೦.೭೫.೫) ತುಂಬುವಾಗ; ನಂತರ ಗಂಧ (ಶ್ರೀಸೂಕ್ತದ “ಗಂಧದ್ವಾರಾಂ”), ದೂರ್ವೆ, ಪಂಚಪಲ್ಲವ (ಋಗ್ವೇದ ೧೦.೯೭.೫), ಫಲ (೧೦.೯೭.೧೫), ರತ್ನ (೫.೮೨.೩), ಚಿನ್ನ (೨.೩೫.೧೦), ಹೊಸ ವಸ್ತ್ರ ಸುತ್ತುವುದು (೩.೮.೪), ತೆಂಗಿನಕಾಯಿ ಅಥವಾ ಪೂರ್ಣಪಾತ್ರೆ ಮೇಲಿಡುವುದು (ಪೂರ್ಣಾದರ್ವಿ). ಕ್ರಮ ಮತ್ತು ಮಂತ್ರಗಳು ರತ್ನಮಾಲಾ ಮತ್ತು ದತ್ತಾತ್ರೇಯ ಪುಸ್ತಕದ್ದು; ಪುರೋಹಿತರು ಮಾಡುತ್ತಾರೆ.',
      verses: [
        {
          text: 'महीद्यौः पृथिवी च न इमं यज्ञं मिमिक्षताम् ।\nपिपृतां नो भरीमभिः ॥',
          meaning: {
            en: 'May great Heaven and Earth sprinkle this sacrifice with sweetness and fill us with their gifts. (Rigveda 1.22.13)',
            kn: 'ವಿಶಾಲ ದ್ಯಾವಾಪೃಥಿವಿಗಳು ಈ ಯಜ್ಞವನ್ನು ಮಾಧುರ್ಯದಿಂದ ತೊಯ್ಸಲಿ, ತಮ್ಮ ದಾನಗಳಿಂದ ನಮ್ಮನ್ನು ತುಂಬಲಿ. (ಋಗ್ವೇದ ೧.೨೨.೧೩)',
          },
        },
        {
          text: 'ओषधयः सं वदन्ते सोमेन सह राज्ञा ।\nयस्मै कृणोति ब्राह्मणस्तं राजन् पारयामसि ॥',
          meaning: {
            en: 'The herbs speak together with Soma, their king: “the one for whom the brahmana performs the rite, him, O King, we carry across.” (Rigveda 10.97.22)',
            kn: 'ಓಷಧಿಗಳು ತಮ್ಮ ರಾಜ ಸೋಮನೊಡನೆ ಮಾತನಾಡುತ್ತವೆ: “ಬ್ರಾಹ್ಮಣನು ಯಾರಿಗಾಗಿ ಕರ್ಮ ಮಾಡುತ್ತಾನೋ ಅವನನ್ನು, ಓ ರಾಜನೇ, ದಾಟಿಸುತ್ತೇವೆ.” (ಋಗ್ವೇದ ೧೦.೯೭.೨೨)',
          },
        },
        {
          text: 'आ कलशेषु धावति पवित्रे परि षिच्यते ।\nउक्थैर्यज्ञेषु वर्धते ॥',
          meaning: {
            en: 'It runs into the pots, is poured through the strainer, and is made to grow with praises at the sacrifices. (Rigveda 9.17.4; said as the kalashas are set)',
            kn: 'ಅದು ಕಲಶಗಳಲ್ಲಿ ಹರಿಯುತ್ತದೆ, ಶುದ್ಧೀಕರಣಕ್ಕಾಗಿ ಸುರಿಯಲ್ಪಡುತ್ತದೆ, ಯಜ್ಞಗಳಲ್ಲಿ ಸ್ತುತಿಗಳಿಂದ ವೃದ್ಧಿಯಾಗುತ್ತದೆ. (ಋಗ್ವೇದ ೯.೧೭.೪; ಕಲಶ ಇಡುವಾಗ)',
          },
        },
        {
          text: 'इमं मे गङ्गे यमुने सरस्वति शुतुद्रि स्तोमं सचता परुष्ण्या ।\nअसिक्न्या मरुद्वृधे वितस्तयार्जीकीये शृणुह्या सुषोमया ॥',
          meaning: {
            en: 'O Ganga, Yamuna, Sarasvati, Shutudri, with Parushni; O Marudvridha with Asikni and Vitasta; O Arjikiya with Sushoma — hear this hymn of mine and accept it. (Rigveda 10.75.5, inviting the sacred rivers into the kalasha.)',
            kn: 'ಓ ಗಂಗೆ, ಯಮುನೆ, ಸರಸ್ವತಿ, ಶುತುದ್ರಿ, ಪರುಷ್ಣಿಯರೇ; ಅಸಿಕ್ನಿ, ವಿತಸ್ತೆಯರೊಡನೆ ಮರುದ್ವೃಧೆಯೇ; ಸುಷೋಮೆಯೊಡನೆ ಆರ್ಜೀಕೀಯೆಯೇ — ನನ್ನ ಈ ಸ್ತುತಿಯನ್ನು ಕೇಳಿ ಸ್ವೀಕರಿಸಿ. (ಋಗ್ವೇದ ೧೦.೭೫.೫; ಪವಿತ್ರ ನದಿಗಳನ್ನು ಕಲಶಕ್ಕೆ ಆಹ್ವಾನಿಸುವುದು.)',
          },
        },
        {
          text: 'गन्धद्वारां दुराधर्षां नित्यपुष्टां करीषिणीम् ।\nईश्वरीं सर्वभूतानां तामिहोपह्वये श्रियम् ॥',
          meaning: {
            en: 'I invoke here Sri, who is known by her fragrance, who cannot be overcome, who is ever abundant, rich in herds, and the sovereign of all beings.',
            kn: 'ಸುಗಂಧದಿಂದ ಗುರುತಿಸಲ್ಪಡುವವಳು, ಯಾರಿಂದಲೂ ಜಯಿಸಲಾಗದವಳು, ಸದಾ ಸಮೃದ್ಧಳು, ಗೋಸಂಪತ್ತಿನಿಂದ ತುಂಬಿದವಳು, ಸಕಲ ಜೀವಿಗಳಿಗೂ ಒಡತಿಯಾದ ಶ್ರೀದೇವಿಯನ್ನು ನಾನು ಇಲ್ಲಿಗೆ ಆಹ್ವಾನಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'अश्वत्थे वो निषदनं पर्णे वो वसतिष्कृता ।\nगोभाज इत्किलासथ यत्सनवथ पूरुषम् ॥',
          meaning: {
            en: 'In the ashvattha is your seat, in the leaf your dwelling made; you are the sharers of the cows, since you win a man (for good health). (Rigveda 10.97.5; said as the five leaves are put in)',
            kn: 'ಅಶ್ವತ್ಥದಲ್ಲಿ ನಿಮ್ಮ ಆಸನ, ಎಲೆಯಲ್ಲಿ ನಿಮ್ಮ ನೆಲೆ; ಮನುಷ್ಯನನ್ನು ಗೆಲ್ಲುವ ನೀವು ಗೋವುಗಳ ಪಾಲುದಾರರು. (ಋಗ್ವೇದ ೧೦.೯೭.೫; ಪಂಚಪಲ್ಲವ ಹಾಕುವಾಗ)',
          },
        },
        {
          text: 'याः फलिनीर्या अफला अपुष्पा याश्च पुष्पिणीः ।\nबृहस्पतिप्रसूतास्ता नो मुञ्चन्त्वंहसः ॥',
          meaning: {
            en: 'Those that bear fruit, those without fruit, without flowers, and those with flowers — urged on by Brihaspati, may they free us from distress. (Rigveda 10.97.15; said as the fruit is put in)',
            kn: 'ಫಲವುಳ್ಳವು, ಫಲವಿಲ್ಲದವು, ಹೂವಿಲ್ಲದವು, ಹೂವುಳ್ಳವು — ಬೃಹಸ್ಪತಿಯಿಂದ ಪ್ರೇರಿತವಾದ ಆ ಓಷಧಿಗಳು ನಮ್ಮನ್ನು ಸಂಕಟದಿಂದ ಬಿಡಿಸಲಿ. (ಋಗ್ವೇದ ೧೦.೯೭.೧೫; ಫಲ ಹಾಕುವಾಗ)',
          },
        },
        {
          text: 'स हि रत्नानि दाशुषे सुवाति सविता भगः ।\nतं भागं चित्रमीमहे ॥',
          meaning: {
            en: 'For the giver, the sun-god Savitri, the bestower, brings forth jewels; we ask that wonderful portion of him. (Rigveda 5.82.3; said as the jewels are put in)',
            kn: 'ದಾನಿಗೆ ಭಗನೂ ಸವಿತೃವೂ ರತ್ನಗಳನ್ನು ಪ್ರೇರಿಸುತ್ತಾನೆ; ಆ ವಿಚಿತ್ರ ಭಾಗವನ್ನು ನಾವು ಬೇಡುತ್ತೇವೆ. (ಋಗ್ವೇದ ೫.೮೨.೩; ರತ್ನ ಹಾಕುವಾಗ)',
          },
        },
        {
          text: 'हिरण्यरूपः स हिरण्यसंदृगपां नपात्सेदु हिरण्यवर्णः ।\nहिरण्ययात्परि योनेर्निषद्या हिरण्यदा ददत्यन्नमस्मै ॥',
          meaning: {
            en: 'Golden in form, golden to behold, the son of the waters, golden in colour — seated in his golden womb, the givers of gold give food to him. (Rigveda 2.35.10; said as the gold is put in)',
            kn: 'ಚಿನ್ನದ ರೂಪದ, ಚಿನ್ನದಂತೆ ಕಾಣುವ, ಅಪಾಂನಪಾತ್, ಚಿನ್ನದ ಬಣ್ಣದ ಅವನು; ತನ್ನ ಚಿನ್ನದ ಯೋನಿಯಲ್ಲಿ ಕುಳಿತ ಅವನಿಗೆ ಚಿನ್ನ ಕೊಡುವವರು ಅನ್ನ ಕೊಡುತ್ತಾರೆ. (ಋಗ್ವೇದ ೨.೩೫.೧೦; ಚಿನ್ನ ಹಾಕುವಾಗ)',
          },
        },
        {
          text: 'युवा सुवासाः परिवीत आगात्स उ श्रेयान्भवति जायमानः ।\nतं धीरासः कवय उन्नयन्ति स्वाध्यो३ मनसा देवयन्तः ॥',
          meaning: {
            en: 'A young man in good clothes, wrapped round, has come; becoming, he becomes better. The wise poets lift him up, the thoughtful, longing for the gods, with their minds. (Rigveda 3.8.4; said as the cloth is wound round the kalasha)',
            kn: 'ಒಳ್ಳೆಯ ವಸ್ತ್ರ ಧರಿಸಿದ, ಸುತ್ತಲೂ ಹೊದಿಸಿಕೊಂಡ ಯುವಕನು ಬಂದಿದ್ದಾನೆ; ಹುಟ್ಟುತ್ತ ಅವನು ಶ್ರೇಷ್ಠನಾಗುತ್ತಾನೆ. ಧೀರರಾದ ಕವಿಗಳು, ದೇವತೆಗಳನ್ನು ಬಯಸುವ ಚಿಂತನಶೀಲರು, ಮನಸ್ಸಿನಿಂದ ಅವನನ್ನು ಮೇಲೆತ್ತುತ್ತಾರೆ. (ಋಗ್ವೇದ ೩.೮.೪; ಕಲಶಕ್ಕೆ ವಸ್ತ್ರ ಸುತ್ತುವಾಗ)',
          },
        },
        {
          text: 'कलशस्य मुखे विष्णुः कण्ठे रुद्रः समाश्रितः ।\nमूले तत्र स्थितो ब्रह्मा मध्ये मातृगणाः स्मृताः ॥',
          meaning: {
            en: 'Vishnu dwells in the mouth of the kalasha and Rudra in its neck; Brahma stands at its base, and the hosts of Mother-goddesses are said to be in its middle.',
            kn: 'ಕಲಶದ ಮುಖದಲ್ಲಿ ವಿಷ್ಣುವೂ, ಕಂಠದಲ್ಲಿ ರುದ್ರನೂ, ಮೂಲದಲ್ಲಿ ಬ್ರಹ್ಮದೇವರೂ, ಮಧ್ಯದಲ್ಲಿ ಮಾತೃಗಣಗಳೂ ನೆಲೆಸಿದ್ದಾರೆ.',
          },
        },
      ],
    },
    {
      title: 'वरुणावाहनम्',
      titleEn: 'Invoking Varuna in the kalasha',
      note: 'The karta puts rice into the north (right) kalasha, saying कलशे वरुणं साङ्गं सपरिवारं सायुधं सशक्तिकम् आवाहयामि (“I invoke Varuna with his limbs, retinue, weapons and power in the kalasha”), worships with sandal, rice, flowers, incense, lamp and food (ओं भूर्भुवः स्वः वरुणाय नमः…), and offers flowers with this verse. (Ratnamala; Dattatreya manual. Rigveda 1.24.11.)',
      noteKn: 'ಕರ್ತನು ಉತ್ತರದ (ಬಲ) ಕಲಶದಲ್ಲಿ ಅಕ್ಕಿ ಹಾಕಿ “ಕಲಶೇ ವರುಣಂ ಸಾಂಗಂ ಸಪರಿವಾರಂ ಸಾಯುಧಂ ಸಶಕ್ತಿಕಂ ಆವಾಹಯಾಮಿ” (ಕಲಶದಲ್ಲಿ ಅಂಗ, ಪರಿವಾರ, ಆಯುಧ, ಶಕ್ತಿಗಳೊಡನೆ ವರುಣನನ್ನು ಆವಾಹಿಸುತ್ತೇನೆ) ಎಂದು ಹೇಳಿ, ಗಂಧ, ಅಕ್ಷತೆ, ಹೂವು, ಧೂಪ, ದೀಪ, ನೈವೇದ್ಯಗಳಿಂದ (ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ ವರುಣಾಯ ನಮಃ…) ಪೂಜಿಸಿ ಈ ಮಂತ್ರದಿಂದ ಪುಷ್ಪಾಂಜಲಿ ಅರ್ಪಿಸಬೇಕು. (ರತ್ನಮಾಲಾ; ದತ್ತಾತ್ರೇಯ ಪುಸ್ತಕ. ಋಗ್ವೇದ ೧.೨೪.೧೧.)',
      verses: [
        {
          text: 'तत्त्वा यामि ब्रह्मणा वन्दमानस्तदा शास्ते यजमानो हविर्भिः ।\nअहेळमानो वरुणेह बोध्युरुशंस मा न आयुः प्र मोषीः ॥',
          meaning: {
            en: 'With prayer, saluting, I ask you for this; the sacrificer asks it with offerings. O Varuna, here be not angry — hear; O widely praised one, do not take our life away. (Rigveda 1.24.11)',
            kn: 'ಸ್ತುತಿಸುತ್ತ ಮಂತ್ರದಿಂದ ನಿನ್ನನ್ನು ಇದಕ್ಕಾಗಿ ಬೇಡುತ್ತೇನೆ; ಯಜಮಾನನೂ ಹವಿಸ್ಸುಗಳಿಂದ ಅದನ್ನೇ ಬೇಡುತ್ತಾನೆ. ಓ ವರುಣನೇ, ಕೋಪಿಸದೆ ಇಲ್ಲಿ ಗಮನಿಸು; ಬಹುಸ್ತುತನೇ, ನಮ್ಮ ಆಯುಸ್ಸನ್ನು ಅಪಹರಿಸಬೇಡ. (ಋಗ್ವೇದ ೧.೨೪.೧೧)',
          },
        },
      ],
    },
    {
      title: 'पुण्याहवाचनप्रश्नः',
      titleEn: 'The request and the first blessings',
      note: 'The karta, kneeling (on both knees, hands joined like a lotus bud over the head), takes the kalasha in his right hand and asks the brahmanas’ leave. First the water is given to the brahmanas: शिवा आपः सन्तु — “let the waters be auspicious”, and so on down the list as gandha, akshata, flowers, betel and dakshina are given (the karta says each, the brahmanas answer “santu” or “astu”, which is the first half of each pair); then comes the formula asking leave to declare the day auspicious, which the brahmanas allow with वाच्यताम् (“let it be declared”). Both the Ratnamala and the Dattatreya manual have exactly this text.',
      noteKn: 'ಕರ್ತನು ಎರಡೂ ಮೊಣಕಾಲುಗಳನ್ನು ನೆಲಕ್ಕೆ ತಾಗಿಸಿ ಕುಳಿತು, ಕಮಲದ ಮೊಗ್ಗಿನಂತೆ ತಲೆಯ ಮೇಲೆ ಕೈ ಜೋಡಿಸಿ, ಬಲಗೈಯಲ್ಲಿ ಕಲಶವನ್ನು ಹಿಡಿದು ಬ್ರಾಹ್ಮಣರ ಅನುಮತಿ ಕೇಳುತ್ತಾನೆ. ಮೊದಲು ಬ್ರಾಹ್ಮಣರಿಗೆ ನೀರು ಕೊಡುತ್ತ “ಶಿವಾ ಆಪಃ ಸಂತು” — “ಜಲಗಳು ಮಂಗಳಕರವಾಗಲಿ” — ಹೀಗೆ ಗಂಧ, ಅಕ್ಷತೆ, ಹೂವು, ವೀಳ್ಯ, ದಕ್ಷಿಣೆ ಕೊಡುವಾಗ ಪಟ್ಟಿಯಂತೆ ಹೇಳಬೇಕು (ಕರ್ತ ಒಂದೊಂದನ್ನು ಹೇಳುತ್ತಾನೆ, ಬ್ರಾಹ್ಮಣರು “ಸಂತು/ಅಸ್ತು” ಎನ್ನುತ್ತಾರೆ); ನಂತರ ಪುಣ್ಯಾಹ ಹೇಳಲು ಅನುಮತಿ ಕೇಳುವ ವಾಕ್ಯ, ಬ್ರಾಹ್ಮಣರು “ವಾಚ್ಯತಾಂ” ಎಂದು ಅನುಮತಿಸುತ್ತಾರೆ. ರತ್ನಮಾಲಾ ಮತ್ತು ದತ್ತಾತ್ರೇಯ ಪುಸ್ತಕ ಎರಡರಲ್ಲೂ ಇದೇ ಪಾಠ.',
      verses: [
        {
          text: 'शिवा आपः सन्तु । सौमनस्यमस्तु । अक्षतं चारिष्टं चास्तु ।\nगन्धाः पान्तु । सौमङ्गल्यं चास्तु । अक्षताः पान्तु । आयुष्यमस्तु ।\nपुष्पाणि पान्तु । सौश्रियमस्तु । ताम्बूलानि पान्तु । ऐश्वर्यमस्तु ।\nदक्षिणाः पान्तु । बहुदेयं चास्तु ॥',
          meaning: {
            en: 'May the waters be auspicious; may there be good-heartedness, and may we be unhurt and safe. May the sandal protect; may there be good fortune. May the rice protect; may there be long life. May the flowers protect; may there be beauty and prosperity. May the betel protect; may there be lordship. May the gifts protect; may there be plenty to give.',
            kn: 'ಜಲಗಳು ಮಂಗಳಕರವಾಗಲಿ; ಸೌಮನಸ್ಯ ಇರಲಿ; ಅಕ್ಷತ–ಅರಿಷ್ಟವಿಲ್ಲದಿರಲಿ. ಗಂಧಗಳು ರಕ್ಷಿಸಲಿ; ಸೌಮಂಗಲ್ಯ ಇರಲಿ. ಅಕ್ಷತೆ ರಕ್ಷಿಸಲಿ; ಆಯುಷ್ಯ ಇರಲಿ. ಹೂವುಗಳು ರಕ್ಷಿಸಲಿ; ಸೌಶ್ರೀ ಇರಲಿ. ತಾಂಬೂಲಗಳು ರಕ್ಷಿಸಲಿ; ಐಶ್ವರ್ಯ ಇರಲಿ. ದಕ್ಷಿಣೆಗಳು ರಕ್ಷಿಸಲಿ; ಕೊಡಲು ಬಹಳ ಇರಲಿ.',
          },
        },
        {
          text: 'वीर्यमायुः श्रेयः शान्तिः पुष्टिस्तुष्टिश्चास्तु ।\nश्रीर्यशो विद्या विनयो वित्तं बहुपुत्रं चायुष्यं चास्तु ।\nयं कृत्वा सर्ववेदयज्ञक्रियाकरणकर्मारम्भाः शुभाः शोभनाः प्रवर्तन्ते\nतमहमोङ्कारमादिं कृत्वा ऋग्यजुःसामाशीर्वचनं बह्वृचर्षिमतं संविज्ञातं\nभवद्भिरनुज्ञातः पुण्यं पुण्याहं वाचयिष्ये ॥',
          meaning: {
            en: 'May there be strength, long life, good, peace, nourishment and contentment; may there be prosperity, fame, learning, humility, wealth, many sons and long life. I shall now declare the holy and auspicious day, with your leave, beginning with Om, that sacred sound through which every Vedic rite and every undertaking begins well and auspiciously, in the manner of the blessings of the Rig, Yajur and Sama Vedas known to the Bahvricha sages. (Brahmanas: “vachyatam” — let it be declared.)',
            kn: 'ವೀರ್ಯ, ಆಯುಸ್ಸು, ಶ್ರೇಯಸ್ಸು, ಶಾಂತಿ, ಪುಷ್ಟಿ, ತುಷ್ಟಿ ಇರಲಿ; ಶ್ರೀ, ಯಶಸ್ಸು, ವಿದ್ಯೆ, ವಿನಯ, ವಿತ್ತ, ಬಹುಪುತ್ರತೆ, ಆಯುಷ್ಯ ಇರಲಿ. ಯಾವುದನ್ನು ಮಾಡಿ ಎಲ್ಲ ವೇದ–ಯಜ್ಞ ಕ್ರಿಯೆಗಳೂ ಕರ್ಮಾರಂಭಗಳೂ ಶುಭವಾಗಿ ಮಂಗಳಕರವಾಗಿ ನಡೆಯುತ್ತವೆಯೋ ಆ ಓಂಕಾರವನ್ನು ಆದಿಯಾಗಿಟ್ಟು, ಬಹ್ವೃಚ ಋಷಿಗಳು ತಿಳಿದ ಋಗ್ ಯಜುಸ್ ಸಾಮ ಆಶೀರ್ವಚನ ರೀತಿಯಲ್ಲಿ, ನಿಮ್ಮ ಅನುಮತಿಯಿಂದ ಪುಣ್ಯವಾದ ಪುಣ್ಯಾಹವನ್ನು ಹೇಳಿಸುತ್ತೇನೆ. (ಬ್ರಾಹ್ಮಣರು: “ವಾಚ್ಯತಾಂ” — ಹೇಳಿಸು.)',
          },
        },
      ],
    },
    {
      title: 'आशीर्मन्त्राः',
      titleEn: 'The blessing mantras',
      note: 'Next the karta recites mantras of blessing (the manuals list them in this order: bhadram karnebhih; dravinoda; savita pashchat; navo-navo; uccha divi; apa undantu; yas tva hrda; yasmai tvam…) — those verses of the Rigveda are given below as checked against the samhita; the Yajurveda ones (apa undantu jivase…, the Taittiriya anuvaka on Savita) the priest says. The brahmanas answer each verse with the next; the karta then says the final prayer: “may the minds of the brahmanas, devoted to vows, restraint, austerity, study, sacrifice, self-control and giving, be composed” — (Brahmanas) “samahita-manasah smah”, “we are composed” — and “be gracious, sirs” — “prasannah smah”.',
      noteKn: 'ನಂತರ ಕರ್ತನು ಆಶೀರ್ವಾದ ಮಂತ್ರಗಳನ್ನು ಹೇಳುತ್ತಾನೆ (ಪುಸ್ತಕಗಳಲ್ಲಿ ಕ್ರಮ: ಭದ್ರಂ ಕರ್ಣೇಭಿಃ; ದ್ರವಿಣೋದಾ; ಸವಿತಾ ಪಶ್ಚಾತ್ತಾತ್; ನವೋ ನವೋ; ಉಚ್ಚಾ ದಿವಿ; ಆಪ ಉಂದಂತು; ಯಸ್ತ್ವಾ ಹೃದಾ; ಯಸ್ಮೈ ತ್ವಂ…) — ಋಗ್ವೇದದವನ್ನು ಸಂಹಿತೆಯೊಡನೆ ಹೋಲಿಸಿ ಕೆಳಗೆ ಕೊಟ್ಟಿದೆ; ಯಜುರ್ವೇದದವನ್ನು (ಆಪ ಉಂದಂತು ಜೀವಸೇ…, ಸವಿತೃ ಕುರಿತ ತೈತ್ತಿರೀಯ ಅನುವಾಕ) ಪುರೋಹಿತರು ಹೇಳುತ್ತಾರೆ. ಕೊನೆಯಲ್ಲಿ ಕರ್ತನು “ವ್ರತ–ನಿಯಮ–ತಪಸ್ಸು–ಸ್ವಾಧ್ಯಾಯ–ಕ್ರತು–ದಮ–ದಾನ ವಿಶಿಷ್ಟರಾದ ಬ್ರಾಹ್ಮಣರ ಮನಸ್ಸು ಸಮಾಧಾನವಾಗಲಿ” — (ಬ್ರಾಹ್ಮಣರು) “ಸಮಾಹಿತಮನಸಃ ಸ್ಮಃ”, “ಪ್ರಸೀದಂತು ಭವಂತಃ” — “ಪ್ರಸನ್ನಾಃ ಸ್ಮಃ” ಎಂದು ಹೇಳುತ್ತಾರೆ.',
      verses: [
        {
          text: 'भद्रं कर्णेभिः शृणुयाम देवा भद्रं पश्येमाक्षभिर्यजत्राः ।\nस्थिरैरङ्गैस्तुष्टुवांसस्तनूभिर्व्यशेमहि देवहितं यदायुः ॥',
          meaning: {
            en: 'May we hear what is good with our ears, O gods; may we see what is good with our eyes, O worthy of worship; praising with firm limbs and strong bodies, may we reach the life that is set for the gods. (Rigveda 1.89.8)',
            kn: 'ಓ ದೇವತೆಗಳೇ, ಕಿವಿಗಳಿಂದ ಒಳ್ಳೆಯದನ್ನು ಕೇಳೋಣ; ಓ ಯಜ್ಞಯೋಗ್ಯರೇ, ಕಣ್ಣುಗಳಿಂದ ಒಳ್ಳೆಯದನ್ನು ನೋಡೋಣ; ದೃಢ ಅಂಗಗಳೊಡನೆ ದೇಹಗಳೊಡನೆ ಸ್ತುತಿಸುತ್ತ ದೇವತೆಗಳಿಗೆ ನಿಗದಿಯಾದ ಆಯುಸ್ಸನ್ನು ಪಡೆಯೋಣ. (ಋಗ್ವೇದ ೧.೮೯.೮)',
          },
        },
        {
          text: 'द्रविणोदा द्रविणसस्तुरस्य द्रविणोदाः सनरस्य प्र यंसत् ।\nद्रविणोदा वीरवतीमिषं नो द्रविणोदा रासते दीर्घमायुः ॥',
          meaning: {
            en: 'May the giver of wealth grant the wealth of the swift one; may the giver of wealth grant that of the generous one. May the giver of wealth give us food with heroes; may the giver of wealth give a long life. (Rigveda 1.96.8)',
            kn: 'ಧನದಾತನು ವೇಗಶಾಲಿಯ ಧನವನ್ನು ಕೊಡಲಿ; ಧನದಾತನು ಉದಾರಿಯ ಧನವನ್ನು ಕೊಡಲಿ. ಧನದಾತನು ನಮಗೆ ವೀರರುಳ್ಳ ಅನ್ನವನ್ನು ಕೊಡಲಿ; ಧನದಾತನು ದೀರ್ಘಾಯುಸ್ಸನ್ನು ಕೊಡಲಿ. (ಋಗ್ವೇದ ೧.೯೬.೮)',
          },
        },
        {
          text: 'सविता पश्चातात्सविता पुरस्तात्सवितोत्तरात्तात्सविताधरात्तात् ।\nसविता नः सुवतु सर्वतातिं सविता नो रासतां दीर्घमायुः ॥',
          meaning: {
            en: 'Savitri from behind, Savitri in front, Savitri from the north, Savitri from below: may Savitri give us every good; may Savitri give us a long life. (Rigveda 10.36.14)',
            kn: 'ಹಿಂದಿನಿಂದ ಸವಿತೃ, ಮುಂದಿನಿಂದ ಸವಿತೃ, ಉತ್ತರದಿಂದ ಸವಿತೃ, ಕೆಳಗಿನಿಂದ ಸವಿತೃ; ಸವಿತೃವು ನಮಗೆ ಎಲ್ಲ ಒಳ್ಳೆಯದನ್ನು ಪ್ರೇರಿಸಲಿ; ಸವಿತೃವು ದೀರ್ಘಾಯುಸ್ಸನ್ನು ಕೊಡಲಿ. (ಋಗ್ವೇದ ೧೦.೩೬.೧೪)',
          },
        },
        {
          text: 'नवो नवो भवति जायमानोऽह्नां केतुरुषसामेत्यग्रम् ।\nभागं देवेभ्यो वि दधात्यायन्प्र चन्द्रमास्तिरते दीर्घमायुः ॥',
          meaning: {
            en: 'New and ever new he becomes as he is born, the banner of the days; he comes at the head of the dawns; he apportions to the gods their share as he comes, and the moon extends a long life. (Rigveda 10.85.19)',
            kn: 'ಹುಟ್ಟುತ್ತ ನವನವನಾಗುತ್ತಾನೆ, ದಿನಗಳ ಧ್ವಜ; ಉಷಸ್ಸುಗಳ ಮುಂದೆ ಬರುತ್ತಾನೆ; ಬರುತ್ತ ದೇವತೆಗಳಿಗೆ ಅವರ ಭಾಗವನ್ನು ವಿಂಗಡಿಸುತ್ತಾನೆ; ಚಂದ್ರನು ದೀರ್ಘಾಯುಸ್ಸನ್ನು ಹೆಚ್ಚಿಸುತ್ತಾನೆ. (ಋಗ್ವೇದ ೧೦.೮೫.೧೯)',
          },
        },
        {
          text: 'उच्चा दिवि दक्षिणावन्तो अस्थुर्ये अश्वदाः सह ते सूर्येण ।\nहिरण्यदा अमृतत्वं भजन्ते वासोदाः सोम प्र तिरन्त आयुः ॥',
          meaning: {
            en: 'High in heaven stand those who give fees; those who give horses are with the sun; the givers of gold share immortality, the givers of clothes, O Soma, lengthen their life. (Rigveda 10.107.2)',
            kn: 'ದಕ್ಷಿಣೆ ಕೊಡುವವರು ಸ್ವರ್ಗದಲ್ಲಿ ಎತ್ತರದಲ್ಲಿ ನಿಂತಿದ್ದಾರೆ; ಕುದುರೆ ಕೊಡುವವರು ಸೂರ್ಯನೊಡನೆ ಇದ್ದಾರೆ; ಚಿನ್ನ ಕೊಡುವವರು ಅಮೃತತ್ವವನ್ನು ಹೊಂದುತ್ತಾರೆ; ವಸ್ತ್ರ ಕೊಡುವವರು, ಓ ಸೋಮನೇ, ಆಯುಸ್ಸನ್ನು ಹೆಚ್ಚಿಸುತ್ತಾರೆ. (ಋಗ್ವೇದ ೧೦.೧೦೭.೨)',
          },
        },
        {
          text: 'यस्त्वा हृदा कीरिणा मन्यमानोऽमर्त्यं मर्त्यो जोहवीमि ।\nजातवेदो यशो अस्मासु धेहि प्रजाभिरग्ने अमृतत्वमश्याम् ॥\nयस्मै त्वं सुकृते जातवेद उ लोकमग्ने कृणवः स्योनम् ।\nअश्विनं स पुत्रिणं वीरवन्तं गोमन्तं रयिं नशते स्वस्ति ॥',
          meaning: {
            en: 'I, a mortal, with a heart full of praise, call upon you, the immortal, as I think of you; O Jatavedas, set glory in us; through our offspring, O Agni, may I attain immortality. And the man for whom, O Jatavedas Agni, you make a pleasant world — he gains wealth in horses, sons, heroes and cattle, and well-being. (Rigveda 5.4.10–11)',
            kn: 'ಮರ್ತ್ಯನಾದ ನಾನು ಸ್ತುತಿಯಿಂದ ತುಂಬಿದ ಹೃದಯದಿಂದ ನಿನ್ನನ್ನು, ಅಮರನನ್ನು, ಸ್ಮರಿಸುತ್ತ ಕರೆಯುತ್ತೇನೆ; ಓ ಜಾತವೇದನೇ, ನಮ್ಮಲ್ಲಿ ಯಶಸ್ಸನ್ನಿಡು; ಸಂತಾನದ ಮೂಲಕ, ಓ ಅಗ್ನಿಯೇ, ನಾನು ಅಮೃತತ್ವವನ್ನು ಪಡೆಯಲಿ. ಓ ಜಾತವೇದನೇ, ಅಗ್ನಿಯೇ, ಯಾವ ಸುಕೃತಿಗೆ ನೀನು ಸುಖಕರ ಲೋಕವನ್ನು ಮಾಡುತ್ತೀಯೋ ಅವನು ಕುದುರೆ, ಪುತ್ರರು, ವೀರರು, ಗೋವುಗಳ ಸಂಪತ್ತನ್ನು ಮತ್ತು ಕ್ಷೇಮವನ್ನು ಪಡೆಯುತ್ತಾನೆ. (ಋಗ್ವೇದ ೫.೪.೧೦–೧೧)',
          },
        },
      ],
    },
    {
      title: 'शान्त्यादिवाचनम्',
      titleEn: 'The declarations: shanti, pushti, tushti and the rest',
      note: 'The karta (with a plate in front of him for the water to fall on) now says each wish and the brahmanas answer “astu”. The passage is one long formula, here as in both manuals; the manuals count 22 wishes in the middle part and pour a ladle of water (with a darbha ladle) on the plate at each. It ends with the invitation to declare the day (punyaha-kala): “let the day be declared” — “let it be declared”. The brahmanas’ replies are shown in the manual as (अस्तु); the priest leads the reading.',
      noteKn: 'ಕರ್ತನು (ಎದುರಿಗೆ ನೀರು ಬೀಳಲು ತಟ್ಟೆ ಇಟ್ಟುಕೊಂಡು) ಒಂದೊಂದು ಹಾರೈಕೆಯನ್ನೂ ಹೇಳುತ್ತಾನೆ, ಬ್ರಾಹ್ಮಣರು “ಅಸ್ತು” ಎನ್ನುತ್ತಾರೆ. ಈ ಭಾಗ ಒಂದು ಉದ್ದ ವಾಕ್ಯ, ಎರಡೂ ಪುಸ್ತಕಗಳಲ್ಲಿರುವಂತೆ ಇಲ್ಲಿದೆ; ಮಧ್ಯಭಾಗದ ೨೨ ಹಾರೈಕೆಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದಕ್ಕೂ ದರ್ಭೆಯ ಸ್ರುವದಿಂದ ತಟ್ಟೆಗೆ ನೀರು ಬಿಡಬೇಕೆಂದು ಪುಸ್ತಕಗಳು ಹೇಳುತ್ತವೆ. ಕೊನೆಗೆ ಪುಣ್ಯಾಹಕಾಲ ವಾಚನ: “ಪುಣ್ಯಾಹಕಾಲಾನ್ ವಾಚಯಿಷ್ಯೇ” — “ವಾಚ್ಯತಾಂ”. ಬ್ರಾಹ್ಮಣರ ಉತ್ತರ ಪುಸ್ತಕದಲ್ಲಿ (ಅಸ್ತು) ಎಂದಿದೆ; ಓದುವುದನ್ನು ಪುರೋಹಿತರು ನಡೆಸುತ್ತಾರೆ.',
      verses: [
        {
          text: 'शान्तिरस्तु । पुष्टिरस्तु । तुष्टिरस्तु । वृद्धिरस्तु । अविघ्नमस्तु । आयुष्यमस्तु । आरोग्यमस्तु ।\nशिवं कर्मास्तु । कर्मसमृद्धिरस्तु । धर्मसमृद्धिरस्तु । वेदसमृद्धिरस्तु । शास्त्रसमृद्धिरस्तु ।\nपुत्रसमृद्धिरस्तु । धनधान्यसमृद्धिरस्तु । इष्टसम्पदस्तु । अरिष्टनिरसनमस्तु ।\nयत्पापं तत्प्रतिहतमस्तु । यच्छ्रेयस्तदस्तु । उत्तरे कर्मण्यविघ्नमस्तु ।\nउत्तरोत्तरमहरहरभिवृद्धिरस्तु । उत्तरोत्तराः क्रियाः शुभाः शोभनाः सम्पद्यन्ताम् ।\nतिथिकरणमुहूर्तनक्षत्रसम्पदस्तु । तिथिकरणमुहूर्तनक्षत्रग्रहलग्नाधिदेवताः प्रीयन्ताम् ॥',
          meaning: {
            en: 'May there be peace, nourishment, contentment, growth, freedom from obstacles, long life, health. May the rite be auspicious; may the rite prosper; may dharma prosper; may the Veda prosper; may the shastras prosper; may children prosper; may wealth and grain prosper; may the wishes be fulfilled; may all evil be driven away; may whatever sin there is be destroyed; may whatever is good be ours. May there be no obstacle in the rites that follow; may there be growth day by day; may the rites that follow, one after another, be auspicious and fortunate. May there be a good tithi, karana, muhurta and nakshatra; may the deities of the tithi, karana, muhurta, nakshatra, planets and lagna be pleased.',
            kn: 'ಶಾಂತಿ, ಪುಷ್ಟಿ, ತುಷ್ಟಿ, ವೃದ್ಧಿ, ಅವಿಘ್ನ, ಆಯುಷ್ಯ, ಆರೋಗ್ಯ ಇರಲಿ. ಕರ್ಮ ಶುಭವಾಗಲಿ; ಕರ್ಮ, ಧರ್ಮ, ವೇದ, ಶಾಸ್ತ್ರ, ಪುತ್ರ, ಧನಧಾನ್ಯ ಸಮೃದ್ಧಿ ಇರಲಿ; ಇಷ್ಟಸಂಪತ್ತು ಇರಲಿ; ಅರಿಷ್ಟ ನಿವಾರಣೆಯಾಗಲಿ; ಯಾವ ಪಾಪವಿದೆಯೋ ಅದು ನಾಶವಾಗಲಿ; ಯಾವ ಶ್ರೇಯಸ್ಸೋ ಅದು ಸಿಗಲಿ. ಮುಂದಿನ ಕರ್ಮಗಳಲ್ಲಿ ವಿಘ್ನ ಇಲ್ಲದಿರಲಿ; ದಿನದಿನಕ್ಕೆ ವೃದ್ಧಿಯಾಗಲಿ; ಮುಂದಿನ ಕ್ರಿಯೆಗಳು ಶುಭವಾಗಿ ಮಂಗಳಕರವಾಗಿ ಸಂಪನ್ನವಾಗಲಿ. ತಿಥಿ, ಕರಣ, ಮುಹೂರ್ತ, ನಕ್ಷತ್ರ ಸಂಪತ್ತು ಇರಲಿ; ತಿಥಿ, ಕರಣ, ಮುಹೂರ್ತ, ನಕ್ಷತ್ರ, ಗ್ರಹ, ಲಗ್ನಗಳ ಅಧಿದೇವತೆಗಳು ಪ್ರೀತರಾಗಲಿ.',
          },
        },
        {
          text: 'अग्निपुरोगा विश्वेदेवाः प्रीयन्ताम् । इन्द्रपुरोगा मरुद्गणाः प्रीयन्ताम् ।\nब्रह्मपुरोगाः सर्वे वेदाः प्रीयन्ताम् । विष्णुपुरोगाः सर्वे देवाः प्रीयन्ताम् ।\nमाहेश्वरीपुरोगा उमामातरः प्रीयन्ताम् । वसिष्ठपुरोगा ऋषिगणाः प्रीयन्ताम् ।\nअरुन्धतीपुरोगा एकपत्न्यः प्रीयन्ताम् । ऋषयश्छन्दांस्याचार्या वेदा देवा यज्ञाश्च प्रीयन्ताम् ।\nब्रह्म च ब्राह्मणाश्च प्रीयन्ताम् । श्रीसरस्वत्यौ प्रीयेताम् । श्रद्धामेधे प्रीयेताम् ।\nभगवती कात्यायनी प्रीयताम् । भगवान् पर्जन्यः प्रीयताम् । भगवान् स्वामी महासेनः प्रीयताम् ॥',
          meaning: {
            en: 'May the Vishvedevas led by Agni be pleased; the Maruts led by Indra; all the Vedas led by Brahma; all the gods led by Vishnu; the Mothers led by Uma, the wife of Maheshvara; the company of sages led by Vasishtha; the faithful wives led by Arundhati; the rishis, the metres, the teachers, the Vedas, the gods and the sacrifices; the Veda and the brahmanas; Sri and Sarasvati; Shraddha and Medha; the divine Katyayani; the divine Parjanya; the divine lord Mahasena (Skanda) — may they all be pleased.',
            kn: 'ಅಗ್ನಿಪ್ರಮುಖರಾದ ವಿಶ್ವೇದೇವರು ಪ್ರೀತರಾಗಲಿ; ಇಂದ್ರಪ್ರಮುಖರಾದ ಮರುದ್ಗಣರು; ಬ್ರಹ್ಮಪ್ರಮುಖರಾದ ಸರ್ವ ವೇದಗಳು; ವಿಷ್ಣುಪ್ರಮುಖರಾದ ಎಲ್ಲ ದೇವತೆಗಳು; ಮಾಹೇಶ್ವರಿಪ್ರಮುಖರಾದ ಉಮಾಮಾತೃಗಳು; ವಸಿಷ್ಠಪ್ರಮುಖರಾದ ಋಷಿಗಣಗಳು; ಅರುಂಧತೀಪ್ರಮುಖರಾದ ಏಕಪತ್ನಿಯರು; ಋಷಿಗಳು, ಛಂದಸ್ಸುಗಳು, ಆಚಾರ್ಯರು, ವೇದಗಳು, ದೇವತೆಗಳು, ಯಜ್ಞಗಳು; ವೇದ ಮತ್ತು ಬ್ರಾಹ್ಮಣರು; ಶ್ರೀ–ಸರಸ್ವತಿಯರು; ಶ್ರದ್ಧಾ–ಮೇಧೆಯರು; ಭಗವತಿ ಕಾತ್ಯಾಯನೀ; ಭಗವಾನ್ ಪರ್ಜನ್ಯ; ಭಗವಾನ್ ಸ್ವಾಮೀ ಮಹಾಸೇನ (ಸ್ಕಂದ) ಪ್ರೀತರಾಗಲಿ.',
          },
        },
      ],
    },
    {
      title: 'पुण्याहस्वस्त्यृद्धिवाचनम्',
      titleEn: 'Declaring punyaha, svasti and riddhi',
      note: 'Now the three main requests. The karta says: मह्यं सहकुटुम्बिने महाजनान्नमस्कुर्वाणाय आशीर्वचनमीहमानाय अद्य करिष्यमाणस्य अमुककर्मणः पुण्याहं भवन्तो ब्रुवन्तु (“to me, with my family, who bow to the great ones and ask their blessing, for the rite I am about to do today, say ‘punyaham’, sirs”) — three times, and the brahmanas answer ओं पुण्याहम् each time, after the verse ‘udgateva shakune’ (Rigveda 2.43.2; the Ratnamala adds “yajyaya yajati…” the Taittiriya passage on the day being auspicious). The same is done with svasti (verse: Rigveda 5.51.12 and svasti na indro vriddhashravah) and riddhi (verse: Rigveda 10.106.11), the answers being ओं स्वस्ति, ओं ऋध्यताम्. (The Ratnamala and the Dattatreya manual both give these in this order; in the Ratnamala there is also a verse on Sri, Rigveda 9.94.4, for “shriyam bhavanto bruvantu”.)',
      noteKn: 'ಈಗ ಮೂರು ಮುಖ್ಯ ವಾಚನಗಳು. ಕರ್ತನು “ಮಹ್ಯಂ ಸಹಕುಟುಂಬಿನೇ ಮಹಾಜನಾನ್ನಮಸ್ಕುರ್ವಾಣಾಯ ಆಶೀರ್ವಚನಮೀಹಮಾನಾಯ ಅದ್ಯ ಕರಿಷ್ಯಮಾಣಸ್ಯ ಅಮುಕಕರ್ಮಣಃ ಪುಣ್ಯಾಹಂ ಭವಂತೋ ಬ್ರುವಂತು” (ಕುಟುಂಬಸಹಿತನಾದ, ಮಹಾಜನರಿಗೆ ನಮಸ್ಕರಿಸುವ, ಆಶೀರ್ವಾದ ಬಯಸುವ ನನಗೆ, ಇಂದು ಮಾಡುವ ಕರ್ಮದ ‘ಪುಣ್ಯಾಹ’ವನ್ನು ಹೇಳಿರಿ) ಎಂದು ಮೂರು ಬಾರಿ ಕೇಳುತ್ತಾನೆ; ಬ್ರಾಹ್ಮಣರು ಪ್ರತಿ ಬಾರಿ “ಓಂ ಪುಣ್ಯಾಹಂ” ಎನ್ನುತ್ತಾರೆ; ಅದಕ್ಕೆ ಮೊದಲು “ಉದ್ಗಾತೇವ ಶಕುನೇ” (ಋಗ್ವೇದ ೨.೪೩.೨; ರತ್ನಮಾಲಾ ತೈತ್ತಿರೀಯ “ಯಾಜ್ಯಯಾ ಯಜತಿ…” ಭಾಗವನ್ನೂ ಸೇರಿಸುತ್ತದೆ). ಸ್ವಸ್ತಿ (ಋಗ್ವೇದ ೫.೫೧.೧೨ ಮತ್ತು “ಸ್ವಸ್ತಿ ನ ಇಂದ್ರೋ ವೃದ್ಧಶ್ರವಾಃ”) ಮತ್ತು ಋದ್ಧಿ (ಋಗ್ವೇದ ೧೦.೧೦೬.೧೧) ಇವನ್ನೂ ಹಾಗೆಯೇ ಮಾಡುತ್ತಾರೆ; ಉತ್ತರ “ಓಂ ಸ್ವಸ್ತಿ”, “ಓಂ ಋಧ್ಯತಾಂ”. (ರತ್ನಮಾಲಾ ಮತ್ತು ದತ್ತಾತ್ರೇಯ ಪುಸ್ತಕ ಎರಡೂ ಇದೇ ಕ್ರಮ; ರತ್ನಮಾಲಾದಲ್ಲಿ “ಶ್ರಿಯಂ ಭವಂತೋ ಬ್ರುವಂತು” ಗೆ ಋಗ್ವೇದ ೯.೯೪.೪ ಮಂತ್ರವೂ ಇದೆ.)',
      verses: [
        {
          text: 'मह्यं सहकुटुम्बिने महाजनान्नमस्कुर्वाणाय आशीर्वचनमीहमानाय\nअद्य करिष्यमाणस्य अमुककर्मणः पुण्याहं भवन्तो ब्रुवन्तु ।\n(ओं पुण्याहम् ।)',
          meaning: {
            en: 'To me, with my family, who bow to the great ones and seek their blessing, for the rite I am to do today: say “punyaham”, sirs. (Om, the day is auspicious. — said three times.)',
            kn: 'ಕುಟುಂಬಸಹಿತನಾದ, ಮಹಾಜನರಿಗೆ ನಮಸ್ಕರಿಸುವ, ಆಶೀರ್ವಾದ ಬಯಸುವ ನನಗೆ, ಇಂದು ಮಾಡುವ ಕರ್ಮದ ಪುಣ್ಯಾಹವನ್ನು ಹೇಳಿರಿ. (ಓಂ ಪುಣ್ಯಾಹಂ — ಮೂರು ಬಾರಿ.)',
          },
        },
        {
          text: 'स्वस्तये वायुमुप ब्रवामहै सोमं स्वस्ति भुवनस्य यस्पतिः ।\nबृहस्पतिं सर्वगणं स्वस्तये स्वस्तय आदित्यासो भवन्तु नः ॥\nस्वस्ति न इन्द्रो वृद्धश्रवाः स्वस्ति नः पूषा विश्ववेदाः ।\nस्वस्ति नस्तार्क्ष्यो अरिष्टनेमिः स्वस्ति नो बृहस्पतिर्दधातु ॥',
          meaning: {
            en: 'For well-being we call on Vayu and Soma, and on the lord of the world; Brihaspati with all his company — for well-being; may the Adityas bring us well-being. May Indra of ancient fame give us well-being; may Pushan, the all-knowing, give us well-being; may Tarkshya of unharmed rim give us well-being; may Brihaspati grant us well-being. (Rigveda 5.51.12 and 1.89.6; the verses for svasti)',
            kn: 'ಕ್ಷೇಮಕ್ಕಾಗಿ ವಾಯುವನ್ನೂ ಸೋಮನನ್ನೂ ಲೋಕಪತಿಯನ್ನೂ ಕರೆಯುತ್ತೇವೆ; ಸಮಸ್ತ ಗಣಸಹಿತ ಬೃಹಸ್ಪತಿಯನ್ನು ಕ್ಷೇಮಕ್ಕಾಗಿ; ಆದಿತ್ಯರು ನಮಗೆ ಕ್ಷೇಮ ತರಲಿ. ಪ್ರಾಚೀನ ಕೀರ್ತಿಯ ಇಂದ್ರನು ನಮಗೆ ಸ್ವಸ್ತಿ ಕೊಡಲಿ; ಸರ್ವಜ್ಞನಾದ ಪೂಷನು ಸ್ವಸ್ತಿ ಕೊಡಲಿ; ಅರಿಷ್ಟನೇಮಿಯಾದ ತಾರ್ಕ್ಷ್ಯನು ಸ್ವಸ್ತಿ ಕೊಡಲಿ; ಬೃಹಸ್ಪತಿ ಸ್ವಸ್ತಿ ಕೊಡಲಿ. (ಋಗ್ವೇದ ೫.೫೧.೧೨ ಮತ್ತು ೧.೮೯.೬; ಸ್ವಸ್ತಿ ವಾಚನದ ಮಂತ್ರಗಳು)',
          },
        },
        {
          text: 'ऋध्याम स्तोमं सनुयाम वाजमा नो मन्त्रं सरथेहोप यातम् ।\nयशो न पक्वं मधु गोष्वन्तरा भूतांशो अश्विनोः कामम् अप्राः ॥',
          meaning: {
            en: 'May we prosper with the praise, may we win strength; come to our hymn here in one chariot. Like a ripe fame, like honey among the cows, you have fulfilled the wish of the Ashvins, of the helpful ones. (Rigveda 10.106.11; the verse for riddhi)',
            kn: 'ಸ್ತುತಿಯೊಡನೆ ಸಮೃದ್ಧರಾಗೋಣ, ಬಲವನ್ನು ಗೆಲ್ಲೋಣ; ಒಂದೇ ರಥದಲ್ಲಿ ನಮ್ಮ ಮಂತ್ರಕ್ಕೆ ಇಲ್ಲಿ ಬನ್ನಿ. ಹಣ್ಣಾದ ಕೀರ್ತಿಯಂತೆ, ಗೋವುಗಳ ನಡುವಿನ ಜೇನಿನಂತೆ, ಅಶ್ವಿನರ ಇಚ್ಛೆಯನ್ನು ನೆರವೇರಿಸಿದಿರಿ. (ಋಗ್ವೇದ ೧೦.೧೦೬.೧೧; ಋದ್ಧಿ ವಾಚನದ ಮಂತ್ರ)',
          },
        },
        {
          text: 'श्रिये जातः श्रिय आ निरियाय श्रियं वयो जरितृभ्यो दधाति ।\nश्रियं वसाना अमृतत्वमायन्भवन्ति सत्या समिथा मितद्रौ ॥',
          meaning: {
            en: 'Born for glory, he came out for glory; he gives glory and long life to the singers. Wearing glory, they came to immortality; they become true gatherings in the field. (Rigveda 9.94.4; the verse for Sri)',
            kn: 'ಶ್ರೀಗಾಗಿ ಹುಟ್ಟಿದ, ಶ್ರೀಗಾಗಿ ಹೊರಬಂದ ಅವನು ಸ್ತೋತೃಗಳಿಗೆ ಶ್ರೀಯನ್ನೂ ಆಯುಸ್ಸನ್ನೂ ಕೊಡುತ್ತಾನೆ. ಶ್ರೀಯನ್ನು ಧರಿಸಿದವರು ಅಮೃತತ್ವ ಪಡೆದರು; ಸತ್ಯ ಸಮ್ಮಿಲನಗಳಾಗುತ್ತವೆ. (ಋಗ್ವೇದ ೯.೯೪.೪; ಶ್ರೀ ವಾಚನದ ಮಂತ್ರ)',
          },
        },
      ],
    },
    {
      title: 'अभिषेकः',
      titleEn: 'Sprinkling with the kalasha water',
      note: 'The priest sprinkles the karta (and his wife on his left, with the sons and grandsons near) with water from the kalasha, with mango leaves, saying the verses on the waters — apo hi shtha (Rigveda 10.9.1–3), the “wishes” verses (bhanu shashi dharasuto…) and the Rig and Yajur mantras on water — and the rest of the kalasha water is kept for sprinkling during the main rite. The brahmanas are given dakshina (gold to the Vishvedeva brahmana in some manuals, with a verse “yasya smrtya…” closing), and the kalasha is moved (visarjana) at the end of the main rite. Then the main ceremony proceeds.',
      noteKn: 'ಪುರೋಹಿತರು ಮಾವಿನ ಎಲೆಯಿಂದ ಕಲಶದ ನೀರನ್ನು ಕರ್ತ (ಎಡಗಡೆ ಪತ್ನಿ, ಹತ್ತಿರ ಮಕ್ಕಳು–ಮೊಮ್ಮಕ್ಕಳು) ಮೇಲೆ ಪ್ರೋಕ್ಷಿಸುತ್ತಾರೆ — ಜಲ ಮಂತ್ರಗಳಾದ “ಆಪೋ ಹಿ ಷ್ಠಾ” (ಋಗ್ವೇದ ೧೦.೯.೧–೩), “ಭಾನುಃ ಶಶೀ ಧರಾಸುತೋ…” ಹಾರೈಕೆ ಶ್ಲೋಕಗಳು, ಋಗ್–ಯಜುಸ್ ಜಲ ಮಂತ್ರಗಳೊಡನೆ — ಉಳಿದ ಕಲಶಜಲವನ್ನು ಮುಖ್ಯ ಕರ್ಮದಲ್ಲಿ ಪ್ರೋಕ್ಷಿಸಲು ಇಡುತ್ತಾರೆ. ಬ್ರಾಹ್ಮಣರಿಗೆ ದಕ್ಷಿಣೆ ಕೊಟ್ಟು, “ಯಸ್ಯ ಸ್ಮೃತ್ಯಾ…” ಶ್ಲೋಕದಿಂದ ಮುಗಿಸಬೇಕು; ಮುಖ್ಯ ಕರ್ಮದ ಕೊನೆಯಲ್ಲಿ ಕಲಶವನ್ನು ವಿಸರ್ಜಿಸಬೇಕು. ನಂತರ ಮುಖ್ಯ ಕರ್ಮ ಮುಂದುವರಿಯುತ್ತದೆ.',
      verses: [
        {
          text: 'आपो हि ष्ठा मयोभुवः ।\nता न ऊर्जे दधातन ।\nमहे रणाय चक्षसे ॥',
          meaning: {
            en: 'O Waters, you are the bringers of happiness. Fill us with strength, so that we may behold great joy.',
            kn: 'ಓ ಜಲದೇವತೆಗಳೇ, ನೀವು ಸುಖವನ್ನು ಕೊಡುವವರು. ನಮಗೆ ಶಕ್ತಿಯನ್ನು ತುಂಬಿ, ಮಹತ್ತಾದ ಆನಂದವನ್ನು ಕಾಣುವಂತೆ ಮಾಡಿ.',
          },
        },
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
