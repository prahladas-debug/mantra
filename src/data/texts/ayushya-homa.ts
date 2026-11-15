/**
 * Ayushya Homa and the birthday (vardhanti, varshavriddhi) rite, Madhva form; the main offerings,
 * with the shared steps in "Homa: Common Procedure" (homa-purvanga).
 * NOT YET PROOFREAD against one printed edition.
 *
 * Sources:
 *  - Madhva: Dr. H. Satyanarayanacharya, "Homa-Havana", Bangalore 2012, chapter "Ayushya Homa
 *    (Janmadinada acharane)" (the birth-star, the four kinds, the durva homa, the sixteen deities
 *    of the vardhapana, their prayers, the sesame-jaggery-milk sip, the six forbidden acts).
 *    archive.org: 20230827_20230827_0721.
 *  - Madhva: Tantrasara-sangraha of Sri Madhvacharya, ed. Oriental Research Institute, Mysore
 *    2003, 4.94-95 (the dhyana of Dhanvantari in the moon), 4.102 (the durva homa for long life
 *    on the janma-nakshatra), with the Gudhartha-sangraha commentary.
 *  - The Prayoga-parijata and the Dharmasindhu, as quoted in Homa-Havana (the order of the
 *    vardhapana; the rule of the janma-tithi against the janma-nakshatra; the six forbidden acts).
 *  - Smarta: the Sringeri manuscript "Ayushya Homa Vidhi and other rituals" (Sanskrit and Kannada,
 *    V. Narasimha Bhatta Hande, 1940; archive.org itql_09-ayushya-homa-vidhi-...) was consulted;
 *    its scan could not be read and nothing is taken from it. The Dharmasindhu (vardhapana on the
 *    janma-tithi) is quoted in Homa-Havana; see the note.
 */
import type { Mantra } from '../types';

export const ayushyaHoma: Mantra = {
  id: 'ayushya-homa',
  title: 'आयुष्यहोमः वर्धापनविधिश्च',
  titleEn: 'Ayushya Homa and the Birthday Rite (Vardhapana)',
  category: 'homa',
  order: 8,
  deity: 'Dhanvantari and Mrityunjaya (the Lord who gives life); Markandeya and the other chiranjivis',
  source: 'Madhva: Homa-Havana (Satyanarayanacharya), Tantrasara-sangraha 4.94 and 4.102; Prayoga-parijata and Dharmasindhu as quoted',
  summary: 'The rite for long life on the birth-star or birthday: the four kinds of Ayushya homa, the durva homa to Dhanvantari with four blades dipped in milk and ghee at a time (Tantrasara), the small vardhapana puja anyone can do at home (sixteen deities with akshata and their prayers, then milk with sesame and jaggery), what to avoid on the day, and when the day falls. The common steps for the homa are in "Homa: Common Procedure".',
  summaryKn: 'ಜನ್ಮನಕ್ಷತ್ರ ಅಥವಾ ಜನ್ಮದಿನದಂದು ಆಯುಸ್ಸಿಗಾಗಿ ಮಾಡುವ ಕ್ರಿಯೆ: ನಾಲ್ಕು ಬಗೆಯ ಆಯುಷ್ಯ ಹೋಮ, ಹಾಲು–ತುಪ್ಪದಲ್ಲಿ ಅದ್ದಿದ ನಾಲ್ಕು ಗರಿಕೆಗಳಿಂದ ಧನ್ವಂತರಿಗೆ ಹೋಮ (ತಂತ್ರಸಾರ), ಮನೆಯಲ್ಲಿ ಯಾರಾದರೂ ಮಾಡಬಹುದಾದ ಚಿಕ್ಕ ವರ್ಧಾಪನ ಪೂಜೆ (ಹದಿನಾರು ದೇವತೆಗಳು, ಅಕ್ಷತೆ, ಪ್ರಾರ್ಥನೆ, ನಂತರ ಎಳ್ಳು–ಬೆಲ್ಲ–ಹಾಲು ಸೇವನೆ), ಆ ದಿನ ವರ್ಜ್ಯವಾದವು, ಆ ದಿನ ಯಾವುದೆಂದು. ಹೋಮದ ಸಾಮಾನ್ಯ ಹಂತಗಳು “ಹೋಮವಿಧಿ — ಪೂರ್ವಾಂಗ ಉತ್ತರಾಂಗ” ಪಠ್ಯದಲ್ಲಿವೆ.',
  difficulty: 'medium',
  completeness: 'partial',
  contentNote: 'A guide for understanding and following along; homas are traditionally done with a trained priest. The Madhva form is given (the Homa-Havana of Satyanarayanacharya); the Smarta manual of Sringeri that was consulted could not be read, so the Smarta variant is described only in the note about the day. Left out: the prayers to Ashvatthama, Krupa, Prahlada, Bhanu and Shashthi-devi, whose verses are broken in the one scan; the nakshatra-deity prayers; and the Dhanvantari mantra itself (taken from a guru). The Ayushya Suktam of the library may be read in the rite. Follow your family manual and purohita.',
  sections: [
    {
      title: 'जन्मदिनम्',
      titleEn: 'The day: birth-star, birth-tithi and the four kinds of homa',
      note: 'The time for the Ayushya homa is the birthday, and that is not the calendar date. By the panchanga it is the birth-star in the birth-month, or the birth-tithi. Madhva usage, and the Prayoga-parijata, give the janma-nakshatra: the birth-star, the birth-month and the birth-day of the week are an auspicious time (parvakala), and Sri Madhvacharya enjoins the Ayushya homa "on the birth-star". The Dharmasindhu gives the janma-tithi: the rite is done every month for a year on the birth-tithi and afterwards every year on it, and where the tithi is in doubt, the day on which the birth-star also falls is taken; some families follow this. If the birth-star falls on an Ekadashi or a pitru-tithi (a day of shraddha), the rite is done on the next day. The Ayushya homa is of four kinds: Dhanvantari durva-ayushya homa, durva-ayushya charu homa, Mrityunjaya homa and Tryambaka-mantra homa (see "Mrityunjaya Homa"). The Tantrasara teaches the Dhanvantari form: with four durva blades at a time, dipped in milk and ghee, daily or on the birth-star; if not monthly, then once a year in the birth-month on the birth-star.',
      noteKn: 'ಆಯುಷ್ಯ ಹೋಮಕ್ಕೆ ವಿಹಿತಕಾಲ ಜನ್ಮದಿನ; ಇದು ಕ್ಯಾಲೆಂಡರ್ ದಿನಾಂಕವಲ್ಲ; ಪಂಚಾಂಗದಂತೆ ಜನ್ಮಮಾಸದ ಜನ್ಮನಕ್ಷತ್ರ ಅಥವಾ ಜನ್ಮತಿಥಿ. ಮಾಧ್ವ ಪದ್ಧತಿ ಮತ್ತು ಪ್ರಯೋಗಪಾರಿಜಾತ ಜನ್ಮನಕ್ಷತ್ರವನ್ನು ಹೇಳುತ್ತವೆ: ಜನ್ಮನಕ್ಷತ್ರ, ಜನ್ಮಮಾಸ, ಜನ್ಮವಾರ ಪರ್ವಕಾಲ; ಶ್ರೀಮಧ್ವಾಚಾರ್ಯರು “ಜನ್ಮನಕ್ಷತ್ರ ಏವ ವಾ” ಎಂದು ಜನ್ಮನಕ್ಷತ್ರದಂದು ಆಯುಷ್ಯಹೋಮ ವಿಧಿಸಿದ್ದಾರೆ. ಧರ್ಮಸಿಂಧು ಜನ್ಮತಿಥಿಯನ್ನು ಹೇಳುತ್ತದೆ: ಒಂದು ವರ್ಷ ಪ್ರತಿ ತಿಂಗಳೂ ಜನ್ಮತಿಥಿಯಂದು, ನಂತರ ಪ್ರತಿ ವರ್ಷವೂ ಅದೇ ತಿಥಿಯಂದು; ತಿಥಿ ಎರಡು ದಿನ ಬಂದರೆ ಜನ್ಮನಕ್ಷತ್ರ ಸೇರಿದ ದಿನ; ಕೆಲವು ಕುಟುಂಬಗಳು ಹೀಗೆ ಮಾಡುತ್ತವೆ. ಜನ್ಮನಕ್ಷತ್ರ ಏಕಾದಶಿ ಅಥವಾ ಪಿತೃತಿಥಿ (ಶ್ರಾದ್ಧದಿನ)ಯಂದು ಬಂದರೆ ಮರುದಿನ ಮಾಡಿ. ಆಯುಷ್ಯ ಹೋಮ ನಾಲ್ಕು ಬಗೆ: ಧಾನ್ವಂತರ ದೂರ್ವಾಯುಷ್ಯ ಹೋಮ, ದೂರ್ವಾಯುಷ್ಯ ಚರುಹೋಮ, ಮೃತ್ಯುಂಜಯ ಹೋಮ, ತ್ರ್ಯಂಬಕಮಂತ್ರ ಹೋಮ (“ಮೃತ್ಯುಂಜಯ ಹೋಮ” ನೋಡಿ). ತಂತ್ರಸಾರವು ಧಾನ್ವಂತರ ರೂಪವನ್ನು ಹೇಳುತ್ತದೆ: ಹಾಲು–ತುಪ್ಪದಲ್ಲಿ ಅದ್ದಿದ ನಾಲ್ಕು ನಾಲ್ಕು ಗರಿಕೆಗಳಿಂದ, ಪ್ರತಿದಿನ ಅಥವಾ ಜನ್ಮನಕ್ಷತ್ರದಂದು; ಮಾಸಿಕ ಸಾಧ್ಯವಾಗದಿದ್ದರೆ ವರ್ಷಕ್ಕೊಮ್ಮೆ ಜನ್ಮಮಾಸದ ಜನ್ಮನಕ್ಷತ್ರದಂದಾದರೂ.',
      verses: [
        {
          text: 'आयुर्विवृद्धये नित्यं जन्मनक्षत्र एव वा ।\nचतुश्चतुर्भिर्दूर्वाभिः क्षीराज्याक्ताभिरिष्यते ॥',
          meaning: {
            en: 'For increase of life, daily or on the birth-star, the offering is made with four durva blades at a time, dipped in milk and ghee. (Tantrasara-sangraha 4.102)',
            kn: 'ಆಯುಸ್ಸಿನ ವೃದ್ಧಿಗಾಗಿ ಪ್ರತಿದಿನ ಅಥವಾ ಜನ್ಮನಕ್ಷತ್ರದಂದು, ಹಾಲು–ತುಪ್ಪದಲ್ಲಿ ಅದ್ದಿದ ನಾಲ್ಕು ನಾಲ್ಕು ಗರಿಕೆಗಳಿಂದ ಹೋಮ ಮಾಡಬೇಕು. (ತಂತ್ರಸಾರಸಂಗ್ರಹ ೪.೧೦೨)',
          },
        },
      ],
    },
    {
      title: 'धन्वन्तरिध्यानम्',
      titleEn: 'Dhyana of Dhanvantari for the durva homa',
      note: 'Meditate on Dhanvantari in the circle of the moon within yourself (the Tantrasara: first the moon in oneself, then the Lord in it) and offer the durva oblations (four blades at a time, dipped in milk and ghee) with his mantra, which you take from a guru. After the common steps, install the fire, offer the durva, and finish with the purnahuti.',
      noteKn: 'ತನ್ನೊಳಗಿನ ಚಂದ್ರಮಂಡಲದಲ್ಲಿ ಧನ್ವಂತರಿಯನ್ನು ಧ್ಯಾನಿಸಿ (ತಂತ್ರಸಾರ: ಮೊದಲು ತನ್ನೊಳಗೆ ಚಂದ್ರಮಂಡಲ, ಅದರಲ್ಲಿ ಭಗವಂತ) ಗುರುವಿನಿಂದ ಪಡೆದ ಅವನ ಮಂತ್ರದಿಂದ ದೂರ್ವಾಹುತಿಗಳನ್ನು (ಹಾಲು–ತುಪ್ಪದಲ್ಲಿ ಅದ್ದಿದ ನಾಲ್ಕು ಗರಿಕೆ) ನೀಡಿ. ಸಾಮಾನ್ಯ ಹಂತಗಳ ನಂತರ ಅಗ್ನಿಪ್ರತಿಷ್ಠೆ, ದೂರ್ವಾಹೋಮ, ಪೂರ್ಣಾಹುತಿ ಮಾಡಿ.',
      verses: [
        {
          text: 'चन्द्रौघकान्तिममृतोरुकरैर्जगन्ति\nसञ्जीवयन्तममितात्मसुखं परेशम् ।\nज्ञानं सुधाकलशमेव च सन्दधानं\nशीतांशुमण्डलगतं स्मरतात्मसंस्थम् ॥',
          meaning: {
            en: 'Remember within yourself the Supreme Lord, shining like a mass of moons, reviving the worlds with the great rays of nectar, whose happiness is boundless, holding knowledge and a jar of nectar, seated in the circle of the moon. (Tantrasara-sangraha 4.94)',
            kn: 'ಚಂದ್ರಸಮೂಹದ ಕಾಂತಿಯ, ಅಮೃತಮಯ ಮಹಾಕಿರಣಗಳಿಂದ ಲೋಕಗಳನ್ನು ಬದುಕಿಸುವ, ಅಪಾರ ಸುಖಸ್ವರೂಪನಾದ, ಜ್ಞಾನಮುದ್ರೆ ಮತ್ತು ಅಮೃತಕಲಶವನ್ನು ಧರಿಸಿದ, ಚಂದ್ರಮಂಡಲದಲ್ಲಿ ನೆಲೆಸಿದ ಪರಮೇಶ್ವರನನ್ನು ತನ್ನೊಳಗೆ ಸ್ಮರಿಸಿ. (ತಂತ್ರಸಾರಸಂಗ್ರಹ ೪.೯೪)',
          },
        },
      ],
    },
    {
      title: 'वर्धापनविधिः',
      titleEn: 'The small vardhapana puja at home',
      note: 'Anyone can do this at home on the birthday, without a priest (Prayoga-parijata and Dharmasindhu, as in Homa-Havana). Bathe and put on new clothes, bow to elders, gurus and the gods, and worship the ancestors, the birth-star deity and Prajapati. After sandhyavandane and puja make the sankalpa and ask the guru’s leave: आयुरभिवृद्ध्यर्थं वर्षवृद्धिकर्म करिष्ये; श्रीगुरुभ्यो नमः, वृद्धिकर्मण्याज्ञा दीयताम्; and remember Ganapati: गं गणपतये नमः, अविघ्नं कुरु. Draw an eight-petalled lotus with rangoli and put a svastika or sixteen heaps of rice on it; invoke the sixteen deities with akshata: 1 the family deity, 2 the deity of the birth-star, 3 the ancestors, 4 Prajapati, 5 Vedavyasa, 6 Parashurama, 7 Hanuman, 8 Ashvatthama, 9 Bali, 10 Vibhishana, 11 Kripa, 12 Markandeya, 13 Shashthidevi, 14 Prahlada, 15 Bhanu, 16 Vighnesha. Say, with akshata and flowers: कुलदेवतादिषोडशवर्षवृद्धिदेवताः एतेषु अक्षतपुञ्जेषु आवाहयामि. Then the sixteen upacharas of puja, an offering of payasa or fruit, and stand to pray with the verses below. The birth-star deities (accusative, for the invocation): Ashvini Ashvinau, Bharani Yama, Krittika Agni, Rohini Dhatar, Mrigashira Shashin, Ardra Rudra, Punarvasu Aditi, Pushya Brihaspati, Ashlesha the serpents, Magha the pitrus, Purva-phalguni Aryaman, Uttara-phalguni Bhaga, Hasta Ravi, Chitra Tvashtar, Svati Vayu, Vishakha Indragni, Anuradha Mitra, Jyeshtha Indra, Mula Nirriti, Purvashadha the waters, Uttarashadha the Vishvedevas, Shravana Vishnu, Dhanishtha the Vasus, Shatabhisha Varuna, Purva-bhadra Ajaikapad, Uttara-bhadra Ahirbudhnya, Revati Pushan.',
      noteKn: 'ಇದನ್ನು ಜನ್ಮದಿನದಂದು ಮನೆಯಲ್ಲಿ ಪುರೋಹಿತರಿಲ್ಲದೆ ಯಾರಾದರೂ ಮಾಡಬಹುದು (ಪ್ರಯೋಗಪಾರಿಜಾತ, ಧರ್ಮಸಿಂಧು; ಹೋಮ–ಹವನದಲ್ಲಿರುವಂತೆ). ಮಂಗಳಸ್ನಾನ ಮಾಡಿ ಹೊಸ ವಸ್ತ್ರ ಧರಿಸಿ, ಗುರುಹಿರಿಯರಿಗೆ ದೇವತೆಗಳಿಗೆ ನಮಿಸಿ, ಪಿತೃಗಳು, ಜನ್ಮನಕ್ಷತ್ರ ದೇವತೆ, ಪ್ರಜಾಪತಿಗಳನ್ನು ಪೂಜಿಸಿ. ಸಂಧ್ಯಾ–ಪೂಜೆಗಳ ನಂತರ ಸಂಕಲ್ಪ ಮಾಡಿ ಗುರುವಿನ ಅಪ್ಪಣೆ ಕೇಳಿ: “ಆಯುರಭಿವೃದ್ಧ್ಯರ್ಥಂ ವರ್ಷವೃದ್ಧಿಕರ್ಮ ಕರಿಷ್ಯೇ; ಶ್ರೀಗುರುಭ್ಯೋ ನಮಃ, ವೃದ್ಧಿಕರ್ಮಣ್ಯಾಜ್ಞಾ ದೀಯತಾಮ್”; ಗಣಪತಿಯನ್ನು ಸ್ಮರಿಸಿ: “ಗಂ ಗಣಪತಯೇ ನಮಃ, ಅವಿಘ್ನಂ ಕುರು.” ರಂಗೋಲಿಯಿಂದ ಅಷ್ಟದಲ ಪದ್ಮ ಬರೆದು ಅದರ ಮೇಲೆ ಸ್ವಸ್ತಿಕ ಅಥವಾ ಹದಿನಾರು ಅಕ್ಕಿಯ ಗುಪ್ಪೆಗಳನ್ನಿಟ್ಟು ಹದಿನಾರು ದೇವತೆಗಳನ್ನು ಅಕ್ಷತೆಯಿಂದ ಆವಾಹಿಸಿ: ೧ ಕುಲದೇವತೆ, ೨ ಜನ್ಮನಕ್ಷತ್ರ ದೇವತೆ, ೩ ಪಿತೃಗಣ, ೪ ಪ್ರಜಾಪತಿ, ೫ ವೇದವ್ಯಾಸ, ೬ ಪರಶುರಾಮ, ೭ ಹನುಮಂತ, ೮ ಅಶ್ವತ್ಥಾಮ, ೯ ಬಲಿ, ೧೦ ವಿಭೀಷಣ, ೧೧ ಕೃಪ, ೧೨ ಮಾರ್ಕಂಡೇಯ, ೧೩ ಷಷ್ಠೀದೇವಿ, ೧೪ ಪ್ರಹ್ಲಾದ, ೧೫ ಭಾನು, ೧೬ ವಿಘ್ನೇಶ. ಕೈಯಲ್ಲಿ ಅಕ್ಷತೆ–ಹೂವು ಹಿಡಿದು: “ಕುಲದೇವತಾದಿ ಷೋಡಶ ವರ್ಷವೃದ್ಧಿದೇವತಾಃ ಏತೇಷು ಅಕ್ಷತಪುಂಜೇಷು ಆವಾಹಯಾಮಿ.” ನಂತರ ಷೋಡಶೋಪಚಾರ ಪೂಜೆ, ಪಾಯಸ ಅಥವಾ ಫಲ ನೈವೇದ್ಯ; ಎದ್ದು ನಿಂತು ಕೆಳಗಿನ ಶ್ಲೋಕಗಳಿಂದ ಪ್ರಾರ್ಥಿಸಿ. ಜನ್ಮನಕ್ಷತ್ರ ದೇವತೆಗಳು (ದ್ವಿತೀಯಾ ವಿಭಕ್ತಿಯಲ್ಲಿ, ಆವಾಹನೆಗಾಗಿ): ಅಶ್ವಿನೀ ಅಶ್ವಿನೌ, ಭರಣೀ ಯಮ, ಕೃತ್ತಿಕಾ ಅಗ್ನಿ, ರೋಹಿಣೀ ಧಾತೃ, ಮೃಗಶಿರ ಶಶಿ, ಆರ್ದ್ರಾ ರುದ್ರ, ಪುನರ್ವಸು ಅದಿತಿ, ಪುಷ್ಯ ಬೃಹಸ್ಪತಿ, ಆಶ್ಲೇಷಾ ಸರ್ಪಗಳು, ಮಖಾ ಪಿತೃಗಳು, ಪೂರ್ವಫಲ್ಗುನೀ ಅರ್ಯಮ, ಉತ್ತರಫಲ್ಗುನೀ ಭಗ, ಹಸ್ತ ರವಿ, ಚಿತ್ತಾ ತ್ವಷ್ಟೃ, ಸ್ವಾತಿ ವಾಯು, ವಿಶಾಖಾ ಇಂದ್ರಾಗ್ನಿ, ಅನುರಾಧಾ ಮಿತ್ರ, ಜ್ಯೇಷ್ಠಾ ಇಂದ್ರ, ಮೂಲ ನಿರ್ಋತಿ, ಪೂರ್ವಾಷಾಢಾ ಜಲ, ಉತ್ತರಾಷಾಢಾ ವಿಶ್ವೇದೇವರು, ಶ್ರವಣ ವಿಷ್ಣು, ಧನಿಷ್ಠಾ ವಸುಗಳು, ಶತಭಿಷಕ್ ವರುಣ, ಪೂರ್ವಾಭಾದ್ರಾ ಅಜೈಕಪಾದ, ಉತ್ತರಾಭಾದ್ರಾ ಅಹಿರ್ಬುಧ್ನ್ಯ, ರೇವತೀ ಪೂಷಾ.',
      verses: [
        {
          text: 'मार्कण्डेय महाभाग सप्तकल्पान्तजीवन ।\nआयुरारोग्यमैश्वर्यं देहि मे मुनिपुङ्गव ॥',
          meaning: {
            en: 'O great Markandeya, who lived to the end of seven kalpas, best of sages, give me long life, health and prosperity.',
            kn: 'ಓ ಮಹಾಭಾಗನಾದ ಮಾರ್ಕಂಡೇಯನೇ, ಏಳು ಕಲ್ಪಗಳ ಅಂತ್ಯದವರೆಗೆ ಬದುಕಿದವನೇ, ಮುನಿಶ್ರೇಷ್ಠನೇ, ನನಗೆ ಆಯುಸ್ಸು, ಆರೋಗ್ಯ, ಐಶ್ವರ್ಯವನ್ನು ಕೊಡು.',
          },
        },
        {
          text: 'आयुर्देहि यशो देहि श्रियं देहि विनायक ।\nपुत्रपौत्रान्प्रपौत्रांश्च देहि मे गणनायक ॥',
          meaning: {
            en: 'O Vinayaka, give me long life, fame and prosperity; O leader of the hosts, give me sons, grandsons and great-grandsons.',
            kn: 'ಓ ವಿನಾಯಕನೇ, ನನಗೆ ಆಯುಸ್ಸು, ಯಶಸ್ಸು, ಸಂಪತ್ತನ್ನು ಕೊಡು; ಓ ಗಣನಾಯಕನೇ, ಮಕ್ಕಳು, ಮೊಮ್ಮಕ್ಕಳು, ಮರಿಮಕ್ಕಳನ್ನು ಕೊಡು.',
          },
        },
        {
          text: 'दैत्येन्द्रकुलसम्भूत दानयज्ञक्रियापर ।\nबले त्वां शरणं यामि दीर्घमायुः प्रयच्छ मे ॥',
          meaning: {
            en: 'O Bali, born in the line of the lords of the daityas, devoted to gifts and sacrifices, I take refuge in you; give me a long life.',
            kn: 'ದೈತ್ಯೇಂದ್ರ ಕುಲದಲ್ಲಿ ಹುಟ್ಟಿದ, ದಾನ–ಯಜ್ಞ ಕ್ರಿಯೆಗಳಲ್ಲಿ ತತ್ಪರನಾದ ಓ ಬಲಿಯೇ, ನಿನ್ನನ್ನು ಶರಣು ಹೊಂದುತ್ತೇನೆ; ನನಗೆ ದೀರ್ಘಾಯುಸ್ಸು ಕೊಡು.',
          },
        },
        {
          text: 'वसिष्ठकुलसम्भूत वेदशास्त्रविशारद ।\nनारायणांशसम्भूत वेदव्यास नमोऽस्तु ते ॥',
          meaning: {
            en: 'O Vedavyasa, born in the line of Vasishtha, master of the Vedas and the shastras, born of a part of Narayana: salutations to you.',
            kn: 'ವಸಿಷ್ಠಕುಲದಲ್ಲಿ ಹುಟ್ಟಿದ, ವೇದಶಾಸ್ತ್ರ ವಿಶಾರದನಾದ, ನಾರಾಯಣಾಂಶನಾದ ವೇದವ್ಯಾಸನೇ, ನಿನಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'आञ्जनेय महाभाग कपीन्द्र सचिवोत्तम ।\nरामप्रिय नमस्तुभ्यं हनूमन् रक्ष सर्वदा ॥',
          meaning: {
            en: 'O son of Anjana, great and blessed, chief of monkeys, best of ministers, dear to Rama: salutations to you; protect me always, O Hanuman.',
            kn: 'ಓ ಮಹಾಭಾಗನಾದ ಆಂಜನೇಯನೇ, ಕಪೀಂದ್ರನೇ, ಸಚಿವೋತ್ತಮನೇ, ರಾಮಪ್ರಿಯನೇ, ನಿನಗೆ ನಮಸ್ಕಾರ; ಹನುಮಂತನೇ, ಯಾವಾಗಲೂ ನನ್ನನ್ನು ರಕ್ಷಿಸು.',
          },
        },
        {
          text: 'विभीषण नमस्तुभ्यं रामपादाब्जपूजक ।\nआयुरारोग्यमैश्वर्यं देहि पौलस्त्यनन्दन ॥',
          meaning: {
            en: 'Salutations to you, Vibhishana, worshipper of the lotus feet of Rama; give me long life, health and prosperity, O joy of the line of Pulastya.',
            kn: 'ರಾಮನ ಪಾದಕಮಲಗಳನ್ನು ಪೂಜಿಸುವ ಓ ವಿಭೀಷಣನೇ, ನಿನಗೆ ನಮಸ್ಕಾರ; ಪೌಲಸ್ತ್ಯನಂದನನೇ, ನನಗೆ ಆಯುಸ್ಸು, ಆರೋಗ್ಯ, ಐಶ್ವರ್ಯ ಕೊಡು.',
          },
        },
        {
          text: 'रेणुकेय महावीर्य कार्तवीर्यकुलान्तक ।\nआयुः प्रयच्छ मे राम जामदग्न्य नमोऽस्तु ते ॥',
          meaning: {
            en: 'O son of Renuka, of great valour, destroyer of the line of Kartavirya: give me long life, O Rama, son of Jamadagni; salutations to you.',
            kn: 'ರೇಣುಕೆಯ ಮಗನೇ, ಮಹಾವೀರ್ಯನೇ, ಕಾರ್ತವೀರ್ಯ ಕುಲಾಂತಕನೇ, ಜಾಮದಗ್ನ್ಯ ರಾಮನೇ, ನನಗೆ ಆಯುಸ್ಸು ಕೊಡು; ನಿನಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'त्रैलोक्ये यानि भूतानि स्थावराणि चराणि च ।\nब्रह्मविष्णुशिवैः सार्धं रक्षां कुर्वन्तु तानि मे ॥',
          meaning: {
            en: 'May all beings in the three worlds, moving and unmoving, together with Brahma, Vishnu and Shiva, protect me.',
            kn: 'ಮೂರು ಲೋಕಗಳಲ್ಲಿರುವ ಸ್ಥಾವರ–ಜಂಗಮ ಸಮಸ್ತ ಜೀವಿಗಳು ಬ್ರಹ್ಮ–ವಿಷ್ಣು–ಶಿವರೊಡನೆ ನನಗೆ ರಕ್ಷೆಯನ್ನು ಮಾಡಲಿ.',
          },
        },
        {
          text: 'सतिलं गुडसम्मिश्रमञ्जल्यर्धमितं पयः ।\nमार्कण्डेयाद्वरं लब्ध्वा पिबाम्यायुर्विवृद्धये ॥',
          meaning: {
            en: 'Having obtained the boon from Markandeya, I drink milk, half a handful, mixed with sesame and jaggery, for the increase of my life. (Said while taking the milk after the pradakshina and namaskara.)',
            kn: 'ಮಾರ್ಕಂಡೇಯನಿಂದ ವರವನ್ನು ಪಡೆದು, ಆಯುಸ್ಸಿನ ವೃದ್ಧಿಗಾಗಿ ಎಳ್ಳು–ಬೆಲ್ಲ ಸೇರಿದ ಅರ್ಧ ಬೊಗಸೆ ಹಾಲನ್ನು ಕುಡಿಯುತ್ತೇನೆ. (ಪ್ರದಕ್ಷಿಣೆ–ನಮಸ್ಕಾರಗಳ ನಂತರ ಹಾಲು ಸ್ವೀಕರಿಸುವಾಗ.)',
          },
        },
        {
          text: 'अनेन वर्षवृद्धिपूजाकरणेन भगवान्मध्वपतिगोपालकृष्णः प्रीयताम् ।\nश्रीकृष्णार्पणमस्तु ॥',
          meaning: {
            en: 'By this worship for the increase of the year may the Lord Gopalakrishna, the lord of Madhva, be pleased. May it be an offering to Sri Krishna.',
            kn: 'ಈ ವರ್ಷವೃದ್ಧಿ ಪೂಜೆಯಿಂದ ಮಧ್ವಪತಿ ಗೋಪಾಲಕೃಷ್ಣನು ಪ್ರೀತನಾಗಲಿ. ಶ್ರೀಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು.',
          },
        },
      ],
    },
    {
      title: 'वर्ज्यानि',
      titleEn: 'What is avoided on the birthday',
      note: 'Six things are forbidden on the birthday: cutting hair and nails, sexual union, long journeys, eating meat, quarrelling and violence (Dharmasindhu, as in Homa-Havana). Even if no Ayushya homa is done, the small vardhapana rite above should be done by everyone on the birthday.',
      noteKn: 'ಜನ್ಮದಿನದಂದು ಆರು ನಿಷಿದ್ಧ: ಕೂದಲು–ಉಗುರು ಕತ್ತರಿಸುವುದು, ಮೈಥುನ, ದೂರಪ್ರಯಾಣ, ಮಾಂಸಭಕ್ಷಣ, ಕಲಹ, ಹಿಂಸೆ (ಧರ್ಮಸಿಂಧು; ಹೋಮ–ಹವನದಲ್ಲಿರುವಂತೆ). ಆಯುಷ್ಯ ಹೋಮ ಮಾಡದಿದ್ದರೂ ಮೇಲಿನ ಚಿಕ್ಕ ವರ್ಧಾಪನ ವಿಧಿಯನ್ನು ಪ್ರತಿಯೊಬ್ಬರೂ ಜನ್ಮದಿನದಂದು ಮಾಡಬೇಕು.',
      verses: [
        {
          text: 'खण्डनं नखकेशानां मैथुनाध्वागमौ तथा ।\nआमिषं कलहं हिंसां वर्षवृद्धौ विवर्जयेत् ॥',
          meaning: {
            en: 'On the birthday one should avoid cutting the nails and hair, sexual union, travelling on a journey, eating meat, quarrelling and harming. (Dharmasindhu)',
            kn: 'ಜನ್ಮದಿನದಂದು ಉಗುರು–ಕೂದಲು ಕತ್ತರಿಸುವುದು, ಮೈಥುನ, ಪ್ರಯಾಣ, ಮಾಂಸ ಸೇವನೆ, ಕಲಹ, ಹಿಂಸೆಗಳನ್ನು ವರ್ಜಿಸಬೇಕು. (ಧರ್ಮಸಿಂಧು)',
          },
        },
      ],
    },
  ],
};
