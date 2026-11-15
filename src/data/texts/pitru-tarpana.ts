/**
 * Pitru Tarpana: the tarpana of the ancestors (with sesame and water) as done on amavasya, sankranti, eclipses and in
 * the Mahalaya paksha, and the tarpana part of shraddha. Madhva and Smarta forms.
 * Sources (collated Nov 2026; the printed Uttaradi and Raghavendra matha "Amavasya tarpana" booklets were not found online):
 *  Madhva - "Rugvediya (Ashvalayana) Shraddha-prayoga" (Sri Mahacharya Prakashana, Bengaluru; archive.org shraaddha_prayoga:
 *    the sankalpas, the "Tarpana-krama" table of relatives with their antargata devas and number of anjalis, the closing prayers
 *    and the rules on tila-tarpana, read from the scanned pages), Balluri Raghavendracharya, "Ashvalayana Shraddha Paddhati"
 *    (Gadag, 1932; archive.org in.ernet.dli.2015.381997; the same table, OCR), and Srinivasa S. Mathad, "Upaneetarige Upayukta
 *    Upadesha" (the pitru-tarpana-krama; OCR). The counts of anjalis below are those of the Mahacharya table; the Gadag and
 *    Mathad OCR agree for the first fourteen relations and could not be read with certainty for the last eleven.
 *  Smarta - "Darsha-tarpana-vidhih" (Kannada, Yajurveda/Taittiriya; archive.org kannada-tarpana, OCR) for the sankalpa, the
 *    invitation, the Vedic mantras and the order; stotranidhi.com "Pitru Tarpanam" and "Pitru Tila Tarpanam" (Devanagari
 *    and Telugu) for the preliminaries, the closing and the list of relatives; Shridatta Dixit, "Sandhyavandanadi
 *    Nityakarmagalu" (the four vargas and the rule of the living parent). The Vedic mantras were checked against the
 *    Rigveda samhita (GRETIL: RV 10.14.6, 10.15.1, 1.90.6-8) and the Taittiriya/Vajasaneyi texts; the scanned Rigveda
 *    (Ashvalayana) Smarta "Amavasya Tarpanam" on archive.org has unreadable OCR, so no Rigvedic Smarta form is given.
 * The sankalpa of the Madhva form for tarpana alone is the printed shraddhanga-tila-tarpana sankalpa with the occasion
 * named, as the manuals give it; the words for sankranti and eclipse tarpana follow the same pattern and should be
 * confirmed with elders.
 */
import type { Mantra } from '../types';

export const pitruTarpana: Mantra = {
  id: 'pitru-tarpana',
  title: 'पितृतर्पणम्',
  titleEn: 'Pitru Tarpana (Tarpana of Ancestors)',
  category: 'puja',
  deity: 'Pitrus (the ancestors); Sri Vishnu',
  source: 'Ashvalayana and Taittiriya practice; Madhva and Smarta shraddha manuals',
  summary: 'The tarpana of the ancestors with sesame and water, done on amavasya, sankranti, eclipses, in the Mahalaya paksha and as the tarpana part of shraddha. Preparation (darbha, pavitra, sesame, the three positions of the sacred thread), the sankalpa with every blank explained, the formula for each ancestor with the number of anjalis, and the closing. Choose Madhva or Smarta at the top. For those whose father is alive see the rules in the notes: the tarpana of ancestors is not done while the father lives.',
  summaryKn: 'ಅಮಾವಾಸ್ಯೆ, ಸಂಕ್ರಾಂತಿ, ಗ್ರಹಣ, ಮಹಾಲಯ ಪಕ್ಷ ಮತ್ತು ಶ್ರಾದ್ಧದ ತರ್ಪಣಾಂಗದಲ್ಲಿ ಎಳ್ಳು ಮತ್ತು ನೀರಿನಿಂದ ಪಿತೃಗಳಿಗೆ ಮಾಡುವ ತರ್ಪಣ. ಸಿದ್ಧತೆ (ದರ್ಭೆ, ಪವಿತ್ರ, ಎಳ್ಳು, ಯಜ್ಞೋಪವೀತದ ಮೂರು ಸ್ಥಿತಿಗಳು), ಪ್ರತಿ ಖಾಲಿ ಸ್ಥಳದ ವಿವರಣೆಯೊಂದಿಗೆ ಸಂಕಲ್ಪ, ಪ್ರತಿ ಪಿತೃವಿಗೂ ಸೂತ್ರ ಮತ್ತು ಅಂಜಲಿ ಸಂಖ್ಯೆ, ಮತ್ತು ಮುಕ್ತಾಯ. ಮೇಲೆ ಮಾಧ್ವ ಅಥವಾ ಸ್ಮಾರ್ತ ಆರಿಸಿ. ತಂದೆ ಬದುಕಿರುವವರಿಗೆ ವಿಶೇಷ ನಿಯಮಗಳಿವೆ (ಟಿಪ್ಪಣಿಗಳನ್ನು ನೋಡಿ): ತಂದೆ ಜೀವಂತವಾಗಿರುವಾಗ ಪಿತೃಗಳಿಗೆ ತರ್ಪಣ ಕೊಡುವುದಿಲ್ಲ.',
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
          label: 'Smarta (Yajurveda)',
          labelKn: 'ಸ್ಮಾರ್ತ (ಯಜುರ್ವೇದ)',
        },
      ],
    },
  ],
  difficulty: 'advanced',
  completeness: 'partial',
  contentNote: 'Given: the full procedure, sankalpa and formula for each ancestor in the Madhva form (from the Ashvalayana shraddha manuals) and in the Smarta Yajurveda (Taittiriya) form of the Karnataka darsha-tarpana booklet. Not included: a Rigvedic (Ashvalayana) Smarta form, because the available scan is unreadable; the full list of ninety-six tarpana days; and the tarpana of other relatives that some families add. The words for sankranti, eclipse and Mahalaya tarpana follow the printed pattern of the amavasya sankalpa; confirm them with your elders. This text does not replace a teacher.',
  sections: [
    {
      title: 'शुद्धिः प्रार्थना च',
      titleEn: 'Preparation and purification (both)',
      note: 'Needed: darbha (kusha) grass, black sesame, a vessel of clean water (arghya patra) and a plate to receive the water, a pancha-patra with uddharane, a seat (asana), and a pinch of sandal. Dress as for the sandhya: a clean dhoti and an upper cloth, bathed; sit on a darbha mat facing east. Make the pavitra, a ring of two darbha blades (or one tied in a knot as your family does), and wear it on the right ring finger. Do achamana (the twenty-four names: see the Sandhyavandane text), pranayama and the Gayatri japa as in the sandhya, then say these verses and sprinkle water on yourself.',
      noteKn: 'ಬೇಕಾದವು: ದರ್ಭೆ (ಕುಶ), ಕಪ್ಪು ಎಳ್ಳು, ಶುದ್ಧ ನೀರಿನ ಪಾತ್ರೆ (ಅರ್ಘ್ಯಪಾತ್ರೆ) ಮತ್ತು ನೀರು ಬಿಡಲು ತಟ್ಟೆ, ಉದ್ಧರಣೆಯೊಂದಿಗೆ ಪಂಚಪಾತ್ರೆ, ಆಸನ, ಸ್ವಲ್ಪ ಗಂಧ. ಸ್ನಾನ ಮಾಡಿ ಸಂಧ್ಯಾವಂದನೆಯಂತೆ ಶುದ್ಧ ಪಂಚೆ, ಉತ್ತರೀಯ ಧರಿಸಿ ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ದರ್ಭಾಸನದ ಮೇಲೆ ಕುಳಿತುಕೊಳ್ಳಿ. ಪವಿತ್ರ (ಎರಡು ದರ್ಭೆಯ ಉಂಗುರ, ಅಥವಾ ಮನೆತನದಂತೆ ಒಂದು ಗಂಟು ಹಾಕಿದ್ದು) ಮಾಡಿ ಬಲಗೈ ಉಂಗುರದ ಬೆರಳಿಗೆ ಧರಿಸಿ. ಸಂಧ್ಯಾವಂದನೆಯಂತೆ ಆಚಮನ (ಇಪ್ಪತ್ತನಾಲ್ಕು ನಾಮ; ಸಂಧ್ಯಾವಂದನೆ ಪಾಠ ನೋಡಿ), ಪ್ರಾಣಾಯಾಮ ಮತ್ತು ಗಾಯತ್ರಿ ಜಪ ಮಾಡಿ, ನಂತರ ಈ ಶ್ಲೋಕಗಳನ್ನು ಹೇಳಿ ನೀರನ್ನು ತನ್ನ ಮೇಲೆ ಪ್ರೋಕ್ಷಿಸಿಕೊಳ್ಳಿ.',
      verses: [
        {
          text: 'अपवित्रः पवित्रो वा सर्वावस्थां गतोऽपि वा ।\nयः स्मरेत्पुण्डरीकाक्षं स बाह्याभ्यन्तरः शुचिः ॥',
          meaning: {
            en: 'Whether pure or impure, in whatever state one may be, whoever remembers the lotus-eyed Lord becomes clean within and without.',
            kn: 'ಶುದ್ಧನಾಗಿರಲಿ ಅಶುದ್ಧನಾಗಿರಲಿ, ಯಾವ ಸ್ಥಿತಿಯಲ್ಲಿದ್ದರೂ ಕಮಲನಯನನಾದ ಹರಿಯನ್ನು ಸ್ಮರಿಸುವವನು ಒಳಗೂ ಹೊರಗೂ ಶುದ್ಧನಾಗುತ್ತಾನೆ.',
          },
        },
        {
          text: 'शुक्लाम्बरधरं विष्णुं शशिवर्णं चतुर्भुजम् ।\nप्रसन्नवदनं ध्यायेत् सर्वविघ्नोपशान्तये ॥',
          meaning: {
            en: 'For the quieting of all obstacles one should meditate on Vishnu, clad in white, moon-coloured, four-armed, with a gracious face.',
            kn: 'ಎಲ್ಲ ವಿಘ್ನಗಳ ಶಾಂತಿಗಾಗಿ ಬಿಳಿ ವಸ್ತ್ರ ಧರಿಸಿದ, ಚಂದ್ರವರ್ಣದ, ನಾಲ್ಕು ಭುಜಗಳ, ಪ್ರಸನ್ನ ವದನದ ವಿಷ್ಣುವನ್ನು ಧ್ಯಾನಿಸಬೇಕು.',
          },
        },
        {
          text: 'पवित्रं ते विततं ब्रह्मणस्पते प्रभुर्गात्राणि पर्येषि विश्वतः ।\nअतप्ततनूर्न तदामो अश्नुते शृतास इद्वहन्तस्तत्समाशत ॥',
          meaning: {
            en: 'Your purifying sieve is spread out, O Lord of prayer; as a master you move about all limbs on every side. One whose body is not heated by austerity does not attain that; only the ripened bearers attain it. (Rigveda 9.83.1)',
            kn: 'ಬ್ರಹ್ಮಣಸ್ಪತಿಯೇ, ನಿನ್ನ ಪವಿತ್ರ (ಶೋಧಕ) ಹರಡಿದೆ; ಪ್ರಭುವಾಗಿ ನೀನು ಎಲ್ಲ ಅಂಗಗಳ ಸುತ್ತ ಸಂಚರಿಸುತ್ತೀಯೆ. ತಪಸ್ಸಿನಿಂದ ದೇಹ ತಪ್ತವಾಗದವನು ಅದನ್ನು ಪಡೆಯುವುದಿಲ್ಲ; ಪಕ್ವರಾದ ವಾಹಕರೇ ಅದನ್ನು ಪಡೆಯುತ್ತಾರೆ. (ಋಗ್ವೇದ 9.83.1)',
          },
        },
      ],
    },
    {
      title: 'सङ्कल्पः (माध्वः)',
      titleEn: 'Sankalpa (Madhva)',
      note: 'Take a little water and akshata or sesame in the right palm, state the place and time as in the sandhya sankalpa (replace each blank: अमुक nama-samvatsare = the name of the Hindu year; ayana = uttarayana or dakshinayana; ritu, masa, paksha, tithi, vasara, nakshatra from the panchanga card of this app), then put on the thread on the right shoulder (apasavya) and say the second paragraph: first the blanks "अमुक sharmanam अमुक gotranam" (amuka means "such-and-such": say the real name and gotra instead): the name of each ancestor with the gotra in the plural (the father\'s name + sharma, gotra), then, for the women, "अमुक abhidhanam अमुक gotranam": the woman\'s name and her gotra (her father\'s gotra). For the other occasions put the occasion in place of "amavasyam"; the manuals print for Mahalaya: "kanyagate savitari ashadhyadi-pancha-maha-parapaksha-sakrin-mahalaya-shraddha-karma" (Mahacharya, Gadag), and for the day of the annual shraddha: "pratisamvatsarika-shraddhanga-tila-tarpana". Let the water fall into the plate at the end. The words in brackets are for those whose mother is no more.',
      noteKn: 'ಬಲ ಅಂಗೈಯಲ್ಲಿ ಸ್ವಲ್ಪ ನೀರು, ಅಕ್ಷತೆ ಅಥವಾ ಎಳ್ಳು ತೆಗೆದುಕೊಂಡು, ಸಂಧ್ಯಾವಂದನೆಯ ಸಂಕಲ್ಪದಂತೆ ದೇಶಕಾಲಗಳನ್ನು ಹೇಳಿ (ಪ್ರತಿ ಖಾಲಿ ಸ್ಥಳದಲ್ಲಿ: ಸಂವತ್ಸರದ ಹೆಸರು, ಅಯನ (ಉತ್ತರಾಯಣ/ದಕ್ಷಿಣಾಯನ), ಋತು, ಮಾಸ, ಪಕ್ಷ, ತಿಥಿ, ವಾಸರ, ನಕ್ಷತ್ರ — ಈ ಅಪ್ಲಿಕೇಶನ್ನ ಪಂಚಾಂಗ ಕಾರ್ಡ್ ನೋಡಿ); ನಂತರ ಯಜ್ಞೋಪವೀತವನ್ನು ಬಲಭುಜದ ಮೇಲೆ (ಅಪಸವ್ಯ) ಹಾಕಿಕೊಂಡು ಎರಡನೇ ಭಾಗವನ್ನು ಹೇಳಿ: “ಅಮುಕ ಶರ್ಮಣಾಂ ಅಮುಕ ಗೋತ್ರಾಣಾಂ” ಎಂಬಲ್ಲಿ ಪ್ರತಿ ಪಿತೃವಿನ ಹೆಸರು (ತಂದೆಯ ಹೆಸರು + ಶರ್ಮ) ಮತ್ತು ಗೋತ್ರ; ಸ್ತ್ರೀಯರಿಗೆ “ಅಮುಕ ಅಭಿಧಾನಾಂ ಅಮುಕ ಗೋತ್ರಾಣಾಂ”: ಆ ಸ್ತ್ರೀಯ ಹೆಸರು ಮತ್ತು ಅವಳ ಗೋತ್ರ (ತವರುಮನೆಯ ಗೋತ್ರ). ಬೇರೆ ಸಂದರ್ಭಗಳಲ್ಲಿ “ಅಮಾವಾಸ್ಯಾಯಾಂ” ಬದಲು ಆ ಸಂದರ್ಭವನ್ನು ಹೇಳಿ; ಮಹಾಲಯಕ್ಕೆ ಪುಸ್ತಕಗಳಲ್ಲಿ (ಮಹಾಚಾರ್ಯ, ಗದಗ) “ಕನ್ಯಾಗತೇ ಸವಿತರಿ ಆಷಾಢ್ಯಾದಿಪಂಚಮಹಾಪರಪಕ್ಷ ಸಕೃನ್ಮಹಾಲಯಶ್ರಾದ್ಧಕರ್ಮ” ಎಂದಿದೆ; ವಾರ್ಷಿಕ ಶ್ರಾದ್ಧದ ದಿನಕ್ಕೆ “ಪ್ರತಿಸಾಂವತ್ಸರಿಕಶ್ರಾದ್ಧಾಂಗತಿಲತರ್ಪಣಂ”. ಕೊನೆಗೆ ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ. ಕೌಸಿನ ಒಳಗಿನ ಪದಗಳು ತಾಯಿ ಇಲ್ಲದವರಿಗೆ.',
      when: {
        tradition: ['madhva'],
      },
      verses: [
        {
          text: 'श्रीगोविन्द गोविन्द । श्रीमद्भगवतो महापुरुषस्य विष्णोराज्ञया प्रवर्तमानस्य\nअद्य ब्रह्मणः द्वितीयपरार्धे श्रीश्वेतवराहकल्पे वैवस्वतमन्वन्तरे कलियुगे प्रथमचरणे\nजम्बूद्वीपे भरतवर्षे भरतखण्डे मेरोर्दक्षिणे पार्श्वे शालिवाहनशके\nअस्मिन् वर्तमाने चान्द्रमानेन अमुकनामसंवत्सरे अमुक अयने अमुक ऋतौ अमुक मासे अमुक पक्षे अमुक तिथौ अमुक वासरे अमुक नक्षत्रे एवंगुणविशेषणविशिष्टायां शुभतिथौ ॥',
          meaning: {
            en: 'Sri Govinda, Govinda! Today, in the time that runs by the command of Vishnu, the blessed Lord and Supreme Person: in the second half of Brahma\'s life, the Shveta-varaha kalpa, the Vaivasvata manvantara, the first quarter of the Kali-yuga, in Jambudvipa, Bharatavarsha, Bharatakhanda, on the south side of Meru, in the Shalivahana era, in the present year, ayana, season, month, fortnight, tithi, weekday and star as named by the lunar reckoning, on this auspicious day so marked.',
            kn: 'ಶ್ರೀಗೋವಿಂದ ಗೋವಿಂದ! ಇಂದು, ಭಗವಂತನೂ ಮಹಾಪುರುಷನೂ ಆದ ವಿಷ್ಣುವಿನ ಆಜ್ಞೆಯಿಂದ ನಡೆಯುತ್ತಿರುವ ಕಾಲದಲ್ಲಿ — ಬ್ರಹ್ಮನ ದ್ವಿತೀಯ ಪರಾರ್ಧ, ಶ್ವೇತವರಾಹ ಕಲ್ಪ, ವೈವಸ್ವತ ಮನ್ವಂತರ, ಕಲಿಯುಗದ ಪ್ರಥಮ ಚರಣ, ಜಂಬೂದ್ವೀಪ, ಭರತವರ್ಷ, ಭರತಖಂಡ, ಮೇರುವಿನ ದಕ್ಷಿಣ ಪಾರ್ಶ್ವ, ಶಾಲಿವಾಹನ ಶಕದಲ್ಲಿ, ಈಗ ನಡೆಯುತ್ತಿರುವ ಚಾಂದ್ರಮಾನದ ಇಂತಹ ಸಂವತ್ಸರ, ಅಯನ, ಋತು, ಮಾಸ, ಪಕ್ಷ, ತಿಥಿ, ವಾರ, ನಕ್ಷತ್ರಗಳಿಂದ ಕೂಡಿದ ಈ ಶುಭದಿನದಂದು.',
          },
        },
        {
          text: '(अपसव्यं) श्रीभारतीरमणमुख्यप्राणान्तर्गत श्रीविष्णुप्रेरणया श्रीविष्णुप्रीत्यर्थं\nवसुरुद्रादित्यान्तर्गतभारतीरमणमुख्यप्राणान्तर्गत प्रद्युम्नसङ्कर्षणवासुदेवानां\nअस्मत् पितृपितामहप्रपितामहानां अमुक शर्मणां अमुक गोत्राणां\n(अस्मत् मातृपितामहीप्रपितामहीनां अमुक अभिधानां अमुक गोत्राणां)\nअस्मत् मातामहमातुःपितामहमातुःप्रपितामहानां अमुक शर्मणां अमुक गोत्राणां\n(अस्मत् मातामहीमातुःपितामहीमातुःप्रपितामहीनां अमुक अभिधानां अमुक गोत्राणां)\nअस्यां अमुक (अमावास्यायां) पुण्यतिथौ दर्शश्राद्धाङ्गतिलतर्पणं सद्यः करिष्ये ॥',
          meaning: {
            en: 'Now with the thread on the right shoulder (apasavya): prompted by Sri Vishnu who dwells in Mukhyaprana, the consort of Bharati, and for the pleasure of Sri Vishnu, for the Pradyumna, Sankarshana and Vasudeva who dwell within the Vasus, Rudras and Adityas, within whom is Mukhyaprana, for my father, grandfather and great-grandfather of such names and gotras (and my mother, grandmother and great-grandmother of such names and gotras), my maternal grandfather, his father and his grandfather of such names and gotras (and my maternal grandmother, her mother-in-law and her mother-in-law\'s mother-in-law of such names and gotras): on this amavasya (or the occasion that is today), I shall perform the sesame-and-water tarpana that is part of the shraddha, at once.',
            kn: 'ಈಗ ಯಜ್ಞೋಪವೀತ ಬಲಭುಜದ ಮೇಲೆ (ಅಪಸವ್ಯ): ಭಾರತೀರಮಣರಾದ ಮುಖ್ಯಪ್ರಾಣದೇವರ ಅಂತರ್ಯಾಮಿಯಾದ ಶ್ರೀವಿಷ್ಣುವಿನ ಪ್ರೇರಣೆಯಿಂದ, ಶ್ರೀವಿಷ್ಣುವಿನ ಪ್ರೀತಿಗಾಗಿ, ವಸು ರುದ್ರ ಆದಿತ್ಯರೊಳಗಿರುವ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಪ್ರದ್ಯುಮ್ನ ಸಂಕರ್ಷಣ ವಾಸುದೇವರ ಪ್ರೀತ್ಯರ್ಥವಾಗಿ, ನನ್ನ ತಂದೆ, ಅಜ್ಜ, ಮುತ್ತಜ್ಜ (ಇಂತಹ ಹೆಸರು, ಗೋತ್ರ) (ಮತ್ತು ತಾಯಿ, ಅಜ್ಜಿ, ಮುತ್ತಜ್ಜಿ), ತಾಯಿಯ ತಂದೆ, ಅವರ ತಂದೆ, ಅವರ ತಂದೆ (ಇಂತಹ ಹೆಸರು, ಗೋತ್ರ) (ಮತ್ತು ತಾಯಿಯ ತಾಯಿ, ಅವರ ಅತ್ತೆ, ಅವರ ಅತ್ತೆಯ ಅತ್ತೆ) — ಇವರಿಗಾಗಿ, ಈ (ಅಮಾವಾಸ್ಯೆಯ) ಪುಣ್ಯತಿಥಿಯಲ್ಲಿ ದರ್ಶಶ್ರಾದ್ಧಾಂಗವಾದ ತಿಲತರ್ಪಣವನ್ನು ತಕ್ಷಣ ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'सङ्कल्पः (स्मार्तः)',
      titleEn: 'Sankalpa (Smarta)',
      note: 'Replace the blanks as for the Madhva form: the name of the Hindu year, the season, the month, the weekday and the star from the panchanga card of this app. The words "dakshinayane ... krishnapakshe" are as printed in the booklet; in the uttarayana say "uttarayane", and for any other occasion put the paksha of that day. In the second paragraph each "अमुक gotranam" takes the gotra of that side: first the gotra of the father\'s line (for the mother, grandmother and great-grandmother the gotras of their own fathers), then the gotra of the maternal grandfather. For sankranti, eclipse and Mahalaya, replace "amavasyayam punyakale darsha-shraddham" with the name of the occasion: "sankramana-punyakale sankranti-shraddham", "grahana-punyakale grahana-shraddham", "mahalaya-paksha ... mahalaya-shraddham"; the booklet prints only the amavasya form, so confirm the wording with your elders. The words in brackets are for those whose mother is no more.',
      noteKn: 'ಖಾಲಿ ಸ್ಥಳಗಳನ್ನು ಮಾಧ್ವ ರೂಪದಂತೆ ತುಂಬಿ: ಸಂವತ್ಸರದ ಹೆಸರು, ಋತು, ಮಾಸ, ವಾರ, ನಕ್ಷತ್ರಗಳನ್ನು ಈ ಅಪ್ಲಿಕೇಶನ್ನ ಪಂಚಾಂಗ ಕಾರ್ಡ್ ನೋಡಿ ಹೇಳಿ; “ದಕ್ಷಿಣಾಯನೇ ... ಕೃಷ್ಣಪಕ್ಷೇ” ಪುಸ್ತಕದಲ್ಲಿ ಮುದ್ರಿತ ಪದಗಳು; ಉತ್ತರಾಯಣದಲ್ಲಿ “ಉತ್ತರಾಯಣೇ” ಎಂದು ಹೇಳಿ; ಬೇರೆ ಸಂದರ್ಭಗಳಲ್ಲಿ ಆ ದಿನದ ಪಕ್ಷವನ್ನು ಹೇಳಿ. ಎರಡನೆಯ ಭಾಗದಲ್ಲಿ “ಅಮುಕ ಗೋತ್ರಾಣಾಂ” ಎಂಬಲ್ಲಿ ಆಯಾ ಬದಿಯ ಗೋತ್ರ: ಮೊದಲು ತಂದೆಯ ಗೋತ್ರ (ತಾಯಿ, ಅಜ್ಜಿ, ಮುತ್ತಜ್ಜಿಯರಿಗೆ ಅವರವರ ತವರುಮನೆಯ ಗೋತ್ರ), ನಂತರ ತಾಯಿಯ ತಂದೆಯ ಗೋತ್ರ. ಸಂಕ್ರಾಂತಿ, ಗ್ರಹಣ, ಮಹಾಲಯಗಳಿಗೆ “ಅಮಾವಾಸ್ಯಾಯಾಂ ಪುಣ್ಯಕಾಲೇ ದರ್ಶಶ್ರಾದ್ಧಂ” ಬದಲು ಆ ಸಂದರ್ಭದ ಹೆಸರು ಹೇಳಿ: “ಸಂಕ್ರಮಣಪುಣ್ಯಕಾಲೇ ಸಂಕ್ರಾಂತಿಶ್ರಾದ್ಧಂ”, “ಗ್ರಹಣಪುಣ್ಯಕಾಲೇ ಗ್ರಹಣಶ್ರಾದ್ಧಂ”, “ಮಹಾಲಯಪಕ್ಷೇ ಮಹಾಲಯಶ್ರಾದ್ಧಂ” (ಕನ್ನಡ ಪುಸ್ತಕದ ಮಾದರಿ); ಪುಸ್ತಕದಲ್ಲಿ ಅಮಾವಾಸ್ಯೆಯ ರೂಪ ಮಾತ್ರ ಮುದ್ರಿತವಾಗಿದೆ; ಮನೆತನದ ಹಿರಿಯರೊಂದಿಗೆ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ. ಕೌಸಿನೊಳಗಿನ ಪದಗಳು ತಾಯಿ ಇಲ್ಲದವರಿಗೆ.',
      when: {
        tradition: ['smarta'],
      },
      verses: [
        {
          text: 'श्रीगोविन्द गोविन्द गोविन्द ।\nअद्य श्रीभगवतो महापुरुषस्य विष्णोराज्ञया प्रवर्तमानस्य आद्यब्रह्मणः द्वितीयपरार्धे\nश्वेतवराहकल्पे वैवस्वतमन्वन्तरे अष्टाविंशतितमे कलियुगे प्रथमे पादे\nजम्बूद्वीपे भारतवर्षे भरतखण्डे मेरोर्दक्षिणे पार्श्वे शकाब्दे\nअस्मिन् वर्तमाने व्यावहारिके प्रभवादीनां षष्ट्याः संवत्सराणां मध्ये\nअमुक संवत्सरे दक्षिणायने अमुक ऋतौ अमुक मासे कृष्णपक्षे अमावास्यायां पुण्यतिथौ\nअमुक वासरयुक्तायां अमुक नक्षत्रयुक्तायां विष्णुयोग विष्णुकरण\nएवंगुणविशेषणविशिष्टायामस्यामावास्यायां पुण्यतिथौ ॥',
          meaning: {
            en: 'Sri Govinda, Govinda, Govinda! Today, in the time that runs by the command of Vishnu, the blessed Lord and Supreme Person: in the second half of Brahma\'s life, the Shveta-varaha kalpa, the Vaivasvata manvantara, the first quarter of the twenty-eighth Kali-yuga, in Jambudvipa, Bharatavarsha, Bharatakhanda, on the south side of Meru, in the Shalivahana era, in the present year among the sixty years from Prabhava, in the year of such a name, in the dakshinayana (southern course), such a season and month, in the dark fortnight, on the holy day of amavasya, with such a weekday and such a star, Vishnu as the yoga and Vishnu as the karana, on this holy amavasya day so marked.',
            kn: 'ಶ್ರೀಗೋವಿಂದ ಗೋವಿಂದ ಗೋವಿಂದ! ಇಂದು, ಭಗವಂತನೂ ಮಹಾಪುರುಷನೂ ಆದ ವಿಷ್ಣುವಿನ ಆಜ್ಞೆಯಿಂದ ನಡೆಯುತ್ತಿರುವ ಕಾಲದಲ್ಲಿ — ಬ್ರಹ್ಮನ ದ್ವಿತೀಯ ಪರಾರ್ಧ, ಶ್ವೇತವರಾಹ ಕಲ್ಪ, ವೈವಸ್ವತ ಮನ್ವಂತರ, ಇಪ್ಪತ್ತೆಂಟನೆಯ ಕಲಿಯುಗದ ಪ್ರಥಮ ಪಾದ, ಜಂಬೂದ್ವೀಪ, ಭರತವರ್ಷ, ಭರತಖಂಡ, ಮೇರುವಿನ ದಕ್ಷಿಣ ಪಾರ್ಶ್ವ, ಶಕವರ್ಷ, ಈಗ ನಡೆಯುತ್ತಿರುವ ಪ್ರಭವಾದಿ ಅರವತ್ತು ಸಂವತ್ಸರಗಳ ಮಧ್ಯೆ ಇಂತಹ ಸಂವತ್ಸರ, ದಕ್ಷಿಣಾಯನ, ಇಂತಹ ಋತು, ಮಾಸ, ಕೃಷ್ಣಪಕ್ಷ, ಅಮಾವಾಸ್ಯೆಯ ಪುಣ್ಯತಿಥಿ, ಇಂತಹ ವಾರ, ಇಂತಹ ನಕ್ಷತ್ರ, ವಿಷ್ಣುಯೋಗ, ವಿಷ್ಣುಕರಣ — ಇಂತಹ ಗುಣಗಳಿಂದ ಕೂಡಿದ ಈ ಅಮಾವಾಸ್ಯೆಯ ಪುಣ್ಯತಿಥಿಯಲ್ಲಿ.',
          },
        },
        {
          text: 'प्राचीनावीती ।\nअमुक गोत्राणां वसुरुद्रादित्यस्वरूपाणां अस्मत् पितृपितामहप्रपितामहानां\n(अमुक गोत्राणां वसुरुद्रादित्यस्वरूपाणां अस्मत् मातृपितामहीप्रपितामहीनाम्)\nअमुक गोत्राणां वसुरुद्रादित्यस्वरूपाणां अस्मत् सपत्नीकमातामहमातुःपितामहमातुःप्रपितामहानां\nउभयवंशपितॄणामक्षय्यतृप्त्यर्थं अमावास्यायां पुण्यकाले\nदर्शश्राद्धं तिलतर्पणरूपेणाद्य करिष्ये ॥\nउपवीती । अप उपस्पृश्य । प्राचीनावीती ॥',
          meaning: {
            en: 'With the thread on the right shoulder (prachinavita): for the fathers of the two lines, so that they may be satisfied without end: my father, grandfather and great-grandfather, who are in the form of the Vasus, Rudras and Adityas, of such gotras (and my mother, grandmother and great-grandmother), and my maternal grandfather, with his wife, and his father and grandfather, of such gotras: on this holy amavasya I shall perform the darsha shraddha today in the form of the sesame-and-water tarpana. (Now thread on the left shoulder; sip water; thread on the right shoulder again.)',
            kn: 'ಯಜ್ಞೋಪವೀತ ಬಲಭುಜದ ಮೇಲೆ (ಪ್ರಾಚೀನಾವೀತಿ): ವಸು-ರುದ್ರ-ಆದಿತ್ಯ ಸ್ವರೂಪರಾದ, ಇಂತಹ ಗೋತ್ರದ ನನ್ನ ಪಿತೃ, ಪಿತಾಮಹ, ಪ್ರಪಿತಾಮಹರ (ಮತ್ತು ತಾಯಿ, ಅಜ್ಜಿ, ಮುತ್ತಜ್ಜಿಯರ), ಇಂತಹ ಗೋತ್ರದ ಪತ್ನಿಸಹಿತ ಮಾತಾಮಹ, ಅವರ ತಂದೆ, ಅಜ್ಜರ — ಎರಡು ವಂಶಗಳ ಪಿತೃಗಳ ಅಕ್ಷಯ ತೃಪ್ತಿಗಾಗಿ ಈ ಅಮಾವಾಸ್ಯೆಯ ಪುಣ್ಯಕಾಲದಲ್ಲಿ ದರ್ಶಶ್ರಾದ್ಧವನ್ನು ತಿಲತರ್ಪಣರೂಪದಲ್ಲಿ ಇಂದು ಮಾಡುತ್ತೇನೆ. (ಈಗ ಉಪವೀತಿ; ಆಚಮನ; ಮತ್ತೆ ಪ್ರಾಚೀನಾವೀತಿ.)',
          },
        },
      ],
    },
    {
      title: 'उपचारः (स्मार्तः)',
      titleEn: 'Invitation and seat of the ancestors (Smarta)',
      note: 'Place a bunch of darbha (kurcha) with the tips to the south on the plate or on the ground (cut at one stroke, if your family follows that), take the sesame, and say these two mantras: the first invites the ancestors into the bunch, the second offers them the seat. Say the second again with the sentence "this is the seat of the fathers of the two lines" (varga-dvaya: the paternal and maternal lines).',
      noteKn: 'ದರ್ಭೆಯ ಕೂರ್ಚವನ್ನು (ಗೊಂಚಲು) ತುದಿಗಳು ದಕ್ಷಿಣಕ್ಕಿರುವಂತೆ ತಟ್ಟೆಯ ಮೇಲೆ ಅಥವಾ ನೆಲದ ಮೇಲೆ ಇಟ್ಟು (ಮನೆತನದ ಪದ್ಧತಿಯಿದ್ದರೆ ಒಂದೇ ಏಟಿಗೆ ಕತ್ತರಿಸಿದ್ದು), ಎಳ್ಳು ತೆಗೆದುಕೊಂಡು ಈ ಎರಡು ಮಂತ್ರಗಳನ್ನು ಹೇಳಿ: ಮೊದಲನೆಯದು ಕೂರ್ಚದಲ್ಲಿ ಪಿತೃಗಳನ್ನು ಆವಾಹಿಸುವುದು, ಎರಡನೆಯದು ಅವರಿಗೆ ಆಸನ ಕೊಡುವುದು. ವರ್ಗದ್ವಯ ಎಂದರೆ ತಂದೆಯ ಮತ್ತು ತಾಯಿಯ ಎರಡು ವಂಶಗಳು.',
      when: {
        tradition: ['smarta'],
      },
      verses: [
        {
          text: 'आयात पितरः सोम्या गम्भीरैः पथिभिः पूर्वैः ।\nप्रजामस्मभ्यं ददतो रयिं च दीर्घायुत्वं च शतशारदं च ॥\nअस्मिन् कूर्चे वर्गद्वयपितॄनावाहयामि ॥',
          meaning: {
            en: 'Come, O soma-loving fathers, by the deep, ancient paths; giving us offspring and wealth, and long life of a hundred autumns. I invite the fathers of the two lines (paternal and maternal) into this bunch of darbha.',
            kn: 'ಸೋಮಪ್ರಿಯ ಪಿತೃಗಳೇ, ಆಳವಾದ ಪುರಾತನ ಮಾರ್ಗಗಳಿಂದ ಬನ್ನಿ; ನಮಗೆ ಸಂತಾನ, ಸಂಪತ್ತು, ನೂರು ವರ್ಷಗಳ ದೀರ್ಘಾಯುಸ್ಸನ್ನು ಕೊಡುತ್ತಾ ಬನ್ನಿ. ಈ ದರ್ಭೆಯ ಕೂರ್ಚದಲ್ಲಿ ಎರಡು ವಂಶಗಳ (ತಂದೆಯ ಮತ್ತು ತಾಯಿಯ) ಪಿತೃಗಳನ್ನು ಆವಾಹಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'सकृदाच्छिन्नं बर्हिरूर्णामृदु स्योनं पितृभ्यस्त्वा भराम्यहम् ।\nअस्मिन् सीदन्तु मे पितरः सोम्याः पितामहाः प्रपितामहाश्चानुगैः सह ॥\nवर्गद्वयपितॄणामिदमासनं सकलाराधनैः स्वर्चितम् ॥',
          meaning: {
            en: 'I bring you for the fathers: this grass cut at one stroke, soft as wool, pleasant. May my soma-loving fathers, grandfathers and great-grandfathers with their followers sit on it. This is the seat of the fathers of the two lines, well worshipped with all the offerings.',
            kn: 'ಒಂದೇ ಏಟಿಗೆ ಕತ್ತರಿಸಿದ, ಉಣ್ಣೆಯಂತೆ ಮೃದುವಾದ, ಸುಖಕರವಾದ ಈ ದರ್ಭೆಯನ್ನು ಪಿತೃಗಳಿಗಾಗಿ ತರುತ್ತೇನೆ. ನನ್ನ ಸೋಮಪ್ರಿಯ ಪಿತೃಗಳು, ಪಿತಾಮಹರು, ಪ್ರಪಿತಾಮಹರು ತಮ್ಮ ಅನುಚರರೊಂದಿಗೆ ಇದರ ಮೇಲೆ ಕುಳಿತುಕೊಳ್ಳಲಿ. ಇದು ಎರಡು ವಂಶಗಳ ಪಿತೃಗಳ ಆಸನ; ಎಲ್ಲ ಉಪಚಾರಗಳಿಂದ ಚೆನ್ನಾಗಿ ಪೂಜಿತವಾಗಿದೆ.',
          },
        },
      ],
    },
    {
      title: 'तर्पणम् (माध्वम्)',
      titleEn: 'Tarpana formulas (Madhva)',
      note: 'Sit facing south with the thread on the right shoulder (prachinavita). Take black sesame on the darbha in the right hand and let the water fall with the sesame between the thumb and the forefinger (the pitru-tirtha) on the darbha spread in the plate, one anjali each time. For each line, say the name and gotra of that ancestor in the blanks (the name of a man ends in "sharma", the name of a woman is said with "abhidha"). The number at the end is the number of anjalis. The first three lines are the father\'s side (father, grandfather, great-grandfather), the next three the mother (mother, her mother-in-law and mother-in-law\'s mother-in-law), the stepmother (only if she has died), then the mother\'s father and his father and grandfather, then the mother\'s mother and the mother-in-law line, then the wife (if dead) and the others. Do the line only for those who have died: do not offer to the living, and do not offer to those whose father or mother is alive as given in the rules. The women\'s lines say "abhidham gotram" (the woman\'s name and her gotra); the son, brother, uncles, father-in-law, guru and acharya are offered together with their wives (the manual says "sapatnikam"). The daughter is offered with her husband and children.',
      noteKn: 'ದಕ್ಷಿಣಾಭಿಮುಖವಾಗಿ, ಯಜ್ಞೋಪವೀತ ಬಲಭುಜದ ಮೇಲೆ (ಪ್ರಾಚೀನಾವೀತಿ) ಕುಳಿತುಕೊಳ್ಳಿ. ಬಲಗೈಯಲ್ಲಿ ದರ್ಭೆಯ ಮೇಲೆ ಕಪ್ಪು ಎಳ್ಳು ಇಟ್ಟು, ಹೆಬ್ಬೆರಳು ಮತ್ತು ತೋರುಬೆರಳಿನ ನಡುವಿನಿಂದ (ಪಿತೃತೀರ್ಥ) ತಟ್ಟೆಯಲ್ಲಿ ಹರಡಿದ ದರ್ಭೆಯ ಮೇಲೆ ಎಳ್ಳು ನೀರನ್ನು ಬಿಡಿ — ಒಂದು ಅಂಜಲಿ ಒಂದು ಸಲ. ಪ್ರತಿ ಸಾಲಿನಲ್ಲಿ ಖಾಲಿ ಸ್ಥಳದಲ್ಲಿ ಆ ಪಿತೃವಿನ ಹೆಸರು ಮತ್ತು ಗೋತ್ರ ಹೇಳಿ (ಪುರುಷರ ಹೆಸರಿನ ಕೊನೆಗೆ “ಶರ್ಮ”; ಸ್ತ್ರೀಯರಿಗೆ “ಅಭಿಧಾಂ”). ಸಾಲಿನ ಕೊನೆಯ ಸಂಖ್ಯೆ ಅಂಜಲಿಗಳ ಸಂಖ್ಯೆ. ಮೊದಲ ಮೂರು ಸಾಲು ತಂದೆಯ ಕಡೆ (ತಂದೆ, ಅಜ್ಜ, ಮುತ್ತಜ್ಜ), ಮುಂದಿನ ಮೂರು ತಾಯಿ (ತಾಯಿ, ಅತ್ತೆ, ಅತ್ತೆಯ ಅತ್ತೆ), ಮಲತಾಯಿ (ಮೃತಳಾಗಿದ್ದರೆ ಮಾತ್ರ), ನಂತರ ತಾಯಿಯ ತಂದೆ, ಅವರ ತಂದೆ, ಅಜ್ಜ; ನಂತರ ತಾಯಿಯ ತಾಯಿ ಮತ್ತು ಅವರ ಅತ್ತೆಯರು; ನಂತರ ಪತ್ನಿ (ಮೃತಳಾಗಿದ್ದರೆ) ಮತ್ತು ಇತರರು. ಮೃತರಾದವರಿಗೆ ಮಾತ್ರ ತರ್ಪಣ ಕೊಡಿ; ಜೀವಂತರಿಗೆ ಕೊಡಬೇಡಿ; ತಂದೆ ಅಥವಾ ತಾಯಿ ಜೀವಂತವಾಗಿದ್ದರೆ ನಿಯಮಗಳಂತೆ. ಮಗ, ಸಹೋದರ, ಚಿಕ್ಕಪ್ಪ ಮೊದಲಾದವರು, ಮಾವ, ಗುರು, ಆಚಾರ್ಯರಿಗೆ ಪತ್ನಿಸಹಿತ; ಮಗಳಿಗೆ ಪತಿ, ಮಕ್ಕಳೊಂದಿಗೆ.',
      when: {
        tradition: ['madhva'],
      },
      verses: [
        {
          text: 'अस्मत् पितरं अमुक शर्माणं अमुक गोत्रं तदन्तर्गतवस्वन्तर्गतभारतीरमणमुख्यप्राणान्तर्गतप्रद्युम्नं स्वधा नमः तर्पयामि इति त्रिः ।',
          meaning: {
            en: 'I satisfy my father (naming the name and gotra), as the Vasus, with Pradyumna within them, with "svadha, salutation": three times.',
            kn: 'ನನ್ನ ತಂದೆಯನ್ನು (ಹೆಸರು, ಗೋತ್ರ ಹೇಳಿ), ವಸುರೂಪರನ್ನೂ ಅವರೊಳಗಿರುವ ಪ್ರದ್ಯುಮ್ನನನ್ನೂ “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ — ಮೂರು ಬಾರಿ.',
          },
        },
        {
          text: 'अस्मत् पितामहं अमुक शर्माणं अमुक गोत्रं तदन्तर्गतरुद्रान्तर्गतभारतीरमणमुख्यप्राणान्तर्गतसङ्कर्षणं स्वधा नमः तर्पयामि इति त्रिः ।',
          meaning: {
            en: 'I satisfy my paternal grandfather (father\'s father) (naming the name and gotra), as the Rudras, with Sankarshana within them, with "svadha, salutation": three times.',
            kn: 'ನನ್ನ ತಂದೆಯ ತಂದೆಯನ್ನು (ಅಜ್ಜನನ್ನು) (ಹೆಸರು, ಗೋತ್ರ ಹೇಳಿ), ರುದ್ರರೂಪರನ್ನೂ ಅವರೊಳಗಿರುವ ಸಂಕರ್ಷಣನನ್ನೂ “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ — ಮೂರು ಬಾರಿ.',
          },
        },
        {
          text: 'अस्मत् प्रपितामहं अमुक शर्माणं अमुक गोत्रं तदन्तर्गतआदित्यान्तर्गतभारतीरमणमुख्यप्राणान्तर्गतवासुदेवं स्वधा नमः तर्पयामि इति त्रिः ।',
          meaning: {
            en: 'I satisfy my paternal great-grandfather (naming the name and gotra), as the Adityas, with Vasudeva within them, with "svadha, salutation": three times.',
            kn: 'ನನ್ನ ಮುತ್ತಜ್ಜನನ್ನು (ತಂದೆಯ ಅಜ್ಜನನ್ನು) (ಹೆಸರು, ಗೋತ್ರ ಹೇಳಿ), ಆದಿತ್ಯರೂಪರನ್ನೂ ಅವರೊಳಗಿರುವ ವಾಸುದೇವನನ್ನೂ “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ — ಮೂರು ಬಾರಿ.',
          },
        },
        {
          text: 'अस्मत् मातरं अमुक अभिधां अमुक गोत्रां तदन्तर्गतवस्वन्तर्गतभारतीरमणमुख्यप्राणान्तर्गतप्रद्युम्नं स्वधा नमः तर्पयामि इति त्रिः ।',
          meaning: {
            en: 'I satisfy my mother (naming the name and gotra), as the Vasus, with Pradyumna within them, with "svadha, salutation": three times.',
            kn: 'ನನ್ನ ತಾಯಿಯನ್ನು (ಹೆಸರು, ಗೋತ್ರ ಹೇಳಿ), ವಸುರೂಪರನ್ನೂ ಅವರೊಳಗಿರುವ ಪ್ರದ್ಯುಮ್ನನನ್ನೂ “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ — ಮೂರು ಬಾರಿ.',
          },
        },
        {
          text: 'अस्मत् पितामहीं अमुक अभिधां अमुक गोत्रां तदन्तर्गतरुद्रान्तर्गतभारतीरमणमुख्यप्राणान्तर्गतसङ्कर्षणं स्वधा नमः तर्पयामि इति त्रिः ।',
          meaning: {
            en: 'I satisfy my paternal grandmother (father\'s mother) (naming the name and gotra), as the Rudras, with Sankarshana within them, with "svadha, salutation": three times.',
            kn: 'ನನ್ನ ತಂದೆಯ ತಾಯಿಯನ್ನು (ಅಜ್ಜಿಯನ್ನು) (ಹೆಸರು, ಗೋತ್ರ ಹೇಳಿ), ರುದ್ರರೂಪರನ್ನೂ ಅವರೊಳಗಿರುವ ಸಂಕರ್ಷಣನನ್ನೂ “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ — ಮೂರು ಬಾರಿ.',
          },
        },
        {
          text: 'अस्मत् प्रपितामहीं अमुक अभिधां अमुक गोत्रां तदन्तर्गतआदित्यान्तर्गतभारतीरमणमुख्यप्राणान्तर्गतवासुदेवं स्वधा नमः तर्पयामि इति त्रिः ।',
          meaning: {
            en: 'I satisfy my paternal great-grandmother (naming the name and gotra), as the Adityas, with Vasudeva within them, with "svadha, salutation": three times.',
            kn: 'ನನ್ನ ತಂದೆಯ ಅಜ್ಜಿಯನ್ನು (ಮುತ್ತಜ್ಜಿಯನ್ನು) (ಹೆಸರು, ಗೋತ್ರ ಹೇಳಿ), ಆದಿತ್ಯರೂಪರನ್ನೂ ಅವರೊಳಗಿರುವ ವಾಸುದೇವನನ್ನೂ “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ — ಮೂರು ಬಾರಿ.',
          },
        },
        {
          text: 'अस्मत् सापत्नजननीं अमुक अभिधां अमुक गोत्रां तदन्तर्गतवस्वन्तर्गतभारतीरमणमुख्यप्राणान्तर्गतप्रद्युम्नं स्वधा नमः तर्पयामि इति त्रिः ।',
          meaning: {
            en: 'I satisfy my father\'s other wife (step-mother), if she has died (naming the name and gotra), as the Vasus, with Pradyumna within them, with "svadha, salutation": three times.',
            kn: 'ನನ್ನ ಮಲತಾಯಿಯನ್ನು (ತಂದೆಯ ಇನ್ನೊಬ್ಬ ಪತ್ನಿ), ಮೃತಳಾಗಿದ್ದರೆ (ಹೆಸರು, ಗೋತ್ರ ಹೇಳಿ), ವಸುರೂಪರನ್ನೂ ಅವರೊಳಗಿರುವ ಪ್ರದ್ಯುಮ್ನನನ್ನೂ “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ — ಮೂರು ಬಾರಿ.',
          },
        },
        {
          text: 'अस्मत् मातामहं अमुक शर्माणं अमुक गोत्रं तदन्तर्गतवस्वन्तर्गतभारतीरमणमुख्यप्राणान्तर्गतप्रद्युम्नं स्वधा नमः तर्पयामि इति त्रिः ।',
          meaning: {
            en: 'I satisfy my maternal grandfather (mother\'s father) (naming the name and gotra), as the Vasus, with Pradyumna within them, with "svadha, salutation": three times.',
            kn: 'ನನ್ನ ತಾಯಿಯ ತಂದೆಯನ್ನು (ಹೆಸರು, ಗೋತ್ರ ಹೇಳಿ), ವಸುರೂಪರನ್ನೂ ಅವರೊಳಗಿರುವ ಪ್ರದ್ಯುಮ್ನನನ್ನೂ “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ — ಮೂರು ಬಾರಿ.',
          },
        },
        {
          text: 'अस्मत् मातुः पितामहं अमुक शर्माणं अमुक गोत्रं तदन्तर्गतरुद्रान्तर्गतभारतीरमणमुख्यप्राणान्तर्गतसङ्कर्षणं स्वधा नमः तर्पयामि इति त्रिः ।',
          meaning: {
            en: 'I satisfy my mother\'s father\'s father (naming the name and gotra), as the Rudras, with Sankarshana within them, with "svadha, salutation": three times.',
            kn: 'ನನ್ನ ತಾಯಿಯ ಅಜ್ಜನನ್ನು (ತಾಯಿಯ ತಂದೆಯ ತಂದೆಯನ್ನು) (ಹೆಸರು, ಗೋತ್ರ ಹೇಳಿ), ರುದ್ರರೂಪರನ್ನೂ ಅವರೊಳಗಿರುವ ಸಂಕರ್ಷಣನನ್ನೂ “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ — ಮೂರು ಬಾರಿ.',
          },
        },
        {
          text: 'अस्मत् मातुः प्रपितामहं अमुक शर्माणं अमुक गोत्रं तदन्तर्गतआदित्यान्तर्गतभारतीरमणमुख्यप्राणान्तर्गतवासुदेवं स्वधा नमः तर्पयामि इति त्रिः ।',
          meaning: {
            en: 'I satisfy my mother\'s father\'s father\'s father (naming the name and gotra), as the Adityas, with Vasudeva within them, with "svadha, salutation": three times.',
            kn: 'ನನ್ನ ತಾಯಿಯ ಮುತ್ತಜ್ಜನನ್ನು (ಹೆಸರು, ಗೋತ್ರ ಹೇಳಿ), ಆದಿತ್ಯರೂಪರನ್ನೂ ಅವರೊಳಗಿರುವ ವಾಸುದೇವನನ್ನೂ “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ — ಮೂರು ಬಾರಿ.',
          },
        },
        {
          text: 'अस्मत् मातामहीं अमुक अभिधां अमुक गोत्रां तदन्तर्गतवस्वन्तर्गतभारतीरमणमुख्यप्राणान्तर्गतप्रद्युम्नं स्वधा नमः तर्पयामि इति त्रिः ।',
          meaning: {
            en: 'I satisfy my maternal grandmother (mother\'s mother) (naming the name and gotra), as the Vasus, with Pradyumna within them, with "svadha, salutation": three times.',
            kn: 'ನನ್ನ ತಾಯಿಯ ತಾಯಿಯನ್ನು (ಹೆಸರು, ಗೋತ್ರ ಹೇಳಿ), ವಸುರೂಪರನ್ನೂ ಅವರೊಳಗಿರುವ ಪ್ರದ್ಯುಮ್ನನನ್ನೂ “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ — ಮೂರು ಬಾರಿ.',
          },
        },
        {
          text: 'अस्मत् मातुः पितामहीं अमुक अभिधां अमुक गोत्रां तदन्तर्गतरुद्रान्तर्गतभारतीरमणमुख्यप्राणान्तर्गतसङ्कर्षणं स्वधा नमः तर्पयामि इति त्रिः ।',
          meaning: {
            en: 'I satisfy my mother\'s father\'s mother (naming the name and gotra), as the Rudras, with Sankarshana within them, with "svadha, salutation": three times.',
            kn: 'ನನ್ನ ತಾಯಿಯ ಅಜ್ಜಿಯನ್ನು (ತಾಯಿಯ ತಂದೆಯ ತಾಯಿಯನ್ನು) (ಹೆಸರು, ಗೋತ್ರ ಹೇಳಿ), ರುದ್ರರೂಪರನ್ನೂ ಅವರೊಳಗಿರುವ ಸಂಕರ್ಷಣನನ್ನೂ “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ — ಮೂರು ಬಾರಿ.',
          },
        },
        {
          text: 'अस्मत् मातुः प्रपितामहीं अमुक अभिधां अमुक गोत्रां तदन्तर्गतआदित्यान्तर्गतभारतीरमणमुख्यप्राणान्तर्गतवासुदेवं स्वधा नमः तर्पयामि इति त्रिः ।',
          meaning: {
            en: 'I satisfy my mother\'s father\'s father\'s mother (naming the name and gotra), as the Adityas, with Vasudeva within them, with "svadha, salutation": three times.',
            kn: 'ನನ್ನ ತಾಯಿಯ ಮುತ್ತಜ್ಜಿಯನ್ನು (ಹೆಸರು, ಗೋತ್ರ ಹೇಳಿ), ಆದಿತ್ಯರೂಪರನ್ನೂ ಅವರೊಳಗಿರುವ ವಾಸುದೇವನನ್ನೂ “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ — ಮೂರು ಬಾರಿ.',
          },
        },
        {
          text: 'अस्मत् आत्मपत्नीं अमुक अभिधां अमुक गोत्रां तदन्तर्गतवस्वन्तर्गतभारतीरमणमुख्यप्राणान्तर्गतप्रद्युम्नं स्वधा नमः तर्पयामि इति त्रिः ।',
          meaning: {
            en: 'I satisfy my wife, if she has died (naming the name and gotra), as the Vasus, with Pradyumna within them, with "svadha, salutation": three times.',
            kn: 'ನನ್ನ ಪತ್ನಿಯನ್ನು, ಮೃತಳಾಗಿದ್ದರೆ (ಹೆಸರು, ಗೋತ್ರ ಹೇಳಿ), ವಸುರೂಪರನ್ನೂ ಅವರೊಳಗಿರುವ ಪ್ರದ್ಯುಮ್ನನನ್ನೂ “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ — ಮೂರು ಬಾರಿ.',
          },
        },
        {
          text: 'अस्मत् सुतं अमुक शर्माणं अमुक गोत्रं तदन्तर्गतवस्वन्तर्गतभारतीरमणमुख्यप्राणान्तर्गतप्रद्युम्नं स्वधा नमः तर्पयामि इत्येकवारम् ।',
          meaning: {
            en: 'I satisfy my son (with his wife), if he has died (naming the name and gotra), as the Vasus, with Pradyumna within them, with "svadha, salutation": once.',
            kn: 'ನನ್ನ ಮಗನನ್ನು (ಪತ್ನಿಸಹಿತ), ಮೃತನಾಗಿದ್ದರೆ (ಹೆಸರು, ಗೋತ್ರ ಹೇಳಿ), ವಸುರೂಪರನ್ನೂ ಅವರೊಳಗಿರುವ ಪ್ರದ್ಯುಮ್ನನನ್ನೂ “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ — ಒಂದು ಬಾರಿ.',
          },
        },
        {
          text: 'अस्मत् भ्रातरं अमुक शर्माणं अमुक गोत्रं तदन्तर्गतवस्वन्तर्गतभारतीरमणमुख्यप्राणान्तर्गतप्रद्युम्नं स्वधा नमः तर्पयामि इत्येकवारम् ।',
          meaning: {
            en: 'I satisfy my brother (with his wife) (naming the name and gotra), as the Vasus, with Pradyumna within them, with "svadha, salutation": once.',
            kn: 'ನನ್ನ ಸಹೋದರನನ್ನು (ಪತ್ನಿಸಹಿತ) (ಹೆಸರು, ಗೋತ್ರ ಹೇಳಿ), ವಸುರೂಪರನ್ನೂ ಅವರೊಳಗಿರುವ ಪ್ರದ್ಯುಮ್ನನನ್ನೂ “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ — ಒಂದು ಬಾರಿ.',
          },
        },
        {
          text: 'अस्मत् पितृव्यं अमुक शर्माणं अमुक गोत्रं तदन्तर्गतवस्वन्तर्गतभारतीरमणमुख्यप्राणान्तर्गतप्रद्युम्नं स्वधा नमः तर्पयामि इत्येकवारम् ।',
          meaning: {
            en: 'I satisfy my father\'s brother, elder or younger (with his wife) (naming the name and gotra), as the Vasus, with Pradyumna within them, with "svadha, salutation": once.',
            kn: 'ನನ್ನ ತಂದೆಯ ಸಹೋದರನನ್ನು (ಪತ್ನಿಸಹಿತ) (ಹೆಸರು, ಗೋತ್ರ ಹೇಳಿ), ವಸುರೂಪರನ್ನೂ ಅವರೊಳಗಿರುವ ಪ್ರದ್ಯುಮ್ನನನ್ನೂ “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ — ಒಂದು ಬಾರಿ.',
          },
        },
        {
          text: 'अस्मत् मातुलं अमुक शर्माणं अमुक गोत्रं तदन्तर्गतवस्वन्तर्गतभारतीरमणमुख्यप्राणान्तर्गतप्रद्युम्नं स्वधा नमः तर्पयामि इत्येकवारम् ।',
          meaning: {
            en: 'I satisfy my mother\'s brother (with his wife) (naming the name and gotra), as the Vasus, with Pradyumna within them, with "svadha, salutation": once.',
            kn: 'ನನ್ನ ಸೋದರಮಾವನನ್ನು (ಪತ್ನಿಸಹಿತ) (ಹೆಸರು, ಗೋತ್ರ ಹೇಳಿ), ವಸುರೂಪರನ್ನೂ ಅವರೊಳಗಿರುವ ಪ್ರದ್ಯುಮ್ನನನ್ನೂ “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ — ಒಂದು ಬಾರಿ.',
          },
        },
        {
          text: 'अस्मत् दुहितरं अमुक अभिधां अमुक गोत्रां तदन्तर्गतवस्वन्तर्गतभारतीरमणमुख्यप्राणान्तर्गतप्रद्युम्नं स्वधा नमः तर्पयामि इत्येकवारम् ।',
          meaning: {
            en: 'I satisfy my daughter (with her husband and children) (naming the name and gotra), as the Vasus, with Pradyumna within them, with "svadha, salutation": once.',
            kn: 'ನನ್ನ ಮಗಳನ್ನು (ಪತಿ, ಮಕ್ಕಳೊಂದಿಗೆ) (ಹೆಸರು, ಗೋತ್ರ ಹೇಳಿ), ವಸುರೂಪರನ್ನೂ ಅವರೊಳಗಿರುವ ಪ್ರದ್ಯುಮ್ನನನ್ನೂ “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ — ಒಂದು ಬಾರಿ.',
          },
        },
        {
          text: 'अस्मत् भगिनीं अमुक अभिधां अमुक गोत्रां तदन्तर्गतवस्वन्तर्गतभारतीरमणमुख्यप्राणान्तर्गतप्रद्युम्नं स्वधा नमः तर्पयामि इत्येकवारम् ।',
          meaning: {
            en: 'I satisfy my sister (naming the name and gotra), as the Vasus, with Pradyumna within them, with "svadha, salutation": once.',
            kn: 'ನನ್ನ ಸಹೋದರಿಯನ್ನು (ಹೆಸರು, ಗೋತ್ರ ಹೇಳಿ), ವಸುರೂಪರನ್ನೂ ಅವರೊಳಗಿರುವ ಪ್ರದ್ಯುಮ್ನನನ್ನೂ “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ — ಒಂದು ಬಾರಿ.',
          },
        },
        {
          text: 'अस्मत् पितृस्वसारं अमुक अभिधां अमुक गोत्रां तदन्तर्गतवस्वन्तर्गतभारतीरमणमुख्यप्राणान्तर्गतप्रद्युम्नं स्वधा नमः तर्पयामि इत्येकवारम् ।',
          meaning: {
            en: 'I satisfy my father\'s sister (naming the name and gotra), as the Vasus, with Pradyumna within them, with "svadha, salutation": once.',
            kn: 'ನನ್ನ ತಂದೆಯ ಸಹೋದರಿಯನ್ನು (ಹೆಸರು, ಗೋತ್ರ ಹೇಳಿ), ವಸುರೂಪರನ್ನೂ ಅವರೊಳಗಿರುವ ಪ್ರದ್ಯುಮ್ನನನ್ನೂ “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ — ಒಂದು ಬಾರಿ.',
          },
        },
        {
          text: 'अस्मत् मातृस्वसारं अमुक अभिधां अमुक गोत्रां तदन्तर्गतवस्वन्तर्गतभारतीरमणमुख्यप्राणान्तर्गतप्रद्युम्नं स्वधा नमः तर्पयामि इत्येकवारम् ।',
          meaning: {
            en: 'I satisfy my mother\'s sister (naming the name and gotra), as the Vasus, with Pradyumna within them, with "svadha, salutation": once.',
            kn: 'ನನ್ನ ತಾಯಿಯ ಸಹೋದರಿಯನ್ನು (ಹೆಸರು, ಗೋತ್ರ ಹೇಳಿ), ವಸುರೂಪರನ್ನೂ ಅವರೊಳಗಿರುವ ಪ್ರದ್ಯುಮ್ನನನ್ನೂ “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ — ಒಂದು ಬಾರಿ.',
          },
        },
        {
          text: 'अस्मत् श्वशुरं अमुक शर्माणं अमुक गोत्रं तदन्तर्गतवस्वन्तर्गतभारतीरमणमुख्यप्राणान्तर्गतप्रद्युम्नं स्वधा नमः तर्पयामि इति त्रिः ।',
          meaning: {
            en: 'I satisfy my father-in-law (with his wife) (naming the name and gotra), as the Vasus, with Pradyumna within them, with "svadha, salutation": three times.',
            kn: 'ನನ್ನ ಮಾವನನ್ನು (ಪತ್ನಿಯ ತಂದೆ, ಪತ್ನಿಸಹಿತ) (ಹೆಸರು, ಗೋತ್ರ ಹೇಳಿ), ವಸುರೂಪರನ್ನೂ ಅವರೊಳಗಿರುವ ಪ್ರದ್ಯುಮ್ನನನ್ನೂ “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ — ಮೂರು ಬಾರಿ.',
          },
        },
        {
          text: 'अस्मत् गुरुं अमुक शर्माणं अमुक गोत्रं तदन्तर्गतवस्वन्तर्गतभारतीरमणमुख्यप्राणान्तर्गतप्रद्युम्नं स्वधा नमः तर्पयामि इति त्रिः ।',
          meaning: {
            en: 'I satisfy my guru (with his wife) (naming the name and gotra), as the Vasus, with Pradyumna within them, with "svadha, salutation": three times.',
            kn: 'ನನ್ನ ಗುರುವನ್ನು (ಪತ್ನಿಸಹಿತ) (ಹೆಸರು, ಗೋತ್ರ ಹೇಳಿ), ವಸುರೂಪರನ್ನೂ ಅವರೊಳಗಿರುವ ಪ್ರದ್ಯುಮ್ನನನ್ನೂ “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ — ಮೂರು ಬಾರಿ.',
          },
        },
        {
          text: 'अस्मत् आचार्यं अमुक शर्माणं अमुक गोत्रं तदन्तर्गतवस्वन्तर्गतभारतीरमणमुख्यप्राणान्तर्गतप्रद्युम्नं स्वधा नमः तर्पयामि इति त्रिः ।',
          meaning: {
            en: 'I satisfy my acharya (with his wife) (naming the name and gotra), as the Vasus, with Pradyumna within them, with "svadha, salutation": three times.',
            kn: 'ನನ್ನ ಆಚಾರ್ಯರನ್ನು (ಪತ್ನಿಸಹಿತ) (ಹೆಸರು, ಗೋತ್ರ ಹೇಳಿ), ವಸುರೂಪರನ್ನೂ ಅವರೊಳಗಿರುವ ಪ್ರದ್ಯುಮ್ನನನ್ನೂ “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ — ಮೂರು ಬಾರಿ.',
          },
        },
      ],
    },
    {
      title: 'तर्पणम् — मन्त्रैः (स्मार्तम्)',
      titleEn: 'Tarpana with mantras (Smarta)',
      note: 'Facing south with the thread on the right shoulder (prachinavita), let the water and sesame fall on the darbha with each mantra, one anjali for each group, as the Kannada darsha-tarpana booklet gives. Fathers: three mantras, three anjalis (to the group of father, grandfather and great-grandfather the formula names the forms of the Vasus, Rudras and Adityas in turn). Then the mothers\' line (three anjalis each), then the same for the mother\'s father\'s line and the mother\'s mother\'s line. After "gotran sharmanah ..." say the gotras and names of those you are offering to. The pitru-line, the mother-line, the maternal-grandfather line and the maternal-grandmother line are the four vargas: if the first member of a varga is alive, that varga is omitted (Dixit). Other families give each person three anjalis individually (as in stotranidhi.com) instead of these mantras.',
      noteKn: 'ದಕ್ಷಿಣಾಭಿಮುಖವಾಗಿ, ಯಜ್ಞೋಪವೀತ ಬಲಭುಜದ ಮೇಲೆ (ಪ್ರಾಚೀನಾವೀತಿ) ಕುಳಿತು, ಕನ್ನಡ ದರ್ಶತರ್ಪಣ ಪುಸ್ತಕ ಹೇಳುವಂತೆ ಪ್ರತಿ ಮಂತ್ರಕ್ಕೂ ಎಳ್ಳು ನೀರನ್ನು ದರ್ಭೆಯ ಮೇಲೆ ಬಿಡಿ, ಪ್ರತಿ ವರ್ಗಕ್ಕೂ ಒಂದು ಅಂಜಲಿ. ಪಿತೃವರ್ಗ: ಮೂರು ಮಂತ್ರ, ಮೂರು ಅಂಜಲಿ (ತಂದೆ, ಅಜ್ಜ, ಮುತ್ತಜ್ಜರ ಗುಂಪಿಗೆ ವಸು, ರುದ್ರ, ಆದಿತ್ಯ ರೂಪಗಳನ್ನು ಕ್ರಮವಾಗಿ ಹೇಳುತ್ತಾರೆ). ನಂತರ ತಾಯಿಯ ವರ್ಗ (ಪ್ರತಿಯೊಬ್ಬರಿಗೆ ಮೂರು ಅಂಜಲಿ), ನಂತರ ಅದೇ ಕ್ರಮದಲ್ಲಿ ತಾಯಿಯ ತಂದೆಯ ವರ್ಗ ಮತ್ತು ತಾಯಿಯ ತಾಯಿಯ ವರ್ಗ. “ಗೋತ್ರಾನ್ ಶರ್ಮಣಃ ...” ನಂತರ ತರ್ಪಣ ಕೊಡುವವರ ಗೋತ್ರ, ಹೆಸರುಗಳನ್ನು ಹೇಳಿ. ಪಿತೃವರ್ಗ, ಮಾತೃವರ್ಗ, ಮಾತಾಮಹವರ್ಗ, ಮಾತಾಮಹೀವರ್ಗ ಇವು ನಾಲ್ಕು ವರ್ಗಗಳು: ಒಂದು ವರ್ಗದ ಮೊದಲಿನವರು ಜೀವಂತರಿದ್ದರೆ ಆ ವರ್ಗಕ್ಕೆ ತರ್ಪಣವಿಲ್ಲ (ದೀಕ್ಷಿತರು). ಕೆಲವು ಮನೆತನದವರು ಈ ಮಂತ್ರಗಳ ಬದಲು ಪ್ರತಿಯೊಬ್ಬರಿಗೂ ಮೂರು ಅಂಜಲಿ ಕೊಡುತ್ತಾರೆ (ಸ್ತೋತ್ರನಿಧಿಯಂತೆ).',
      when: {
        tradition: ['smarta'],
      },
      verses: [
        {
          text: 'उदीरतामवर उत्परास उन्मध्यमाः पितरः सोम्यासः ।\nअसुं य ईयुरवृका ऋतज्ञास्ते नोऽवन्तु पितरो हवेषु ॥\nगोत्रान् शर्मणः वसुरूपान् अस्मत्पितॄन् स्वधा नमस्तर्पयामि ॥',
          meaning: {
            en: 'May the lower, the higher and the middle fathers, the soma-drinkers, rise up; may those fathers who have gone to the life-breath, harmless and knowers of the right, help us in our invocations. I satisfy my fathers (their gotras and names), seen as the Vasus, with "svadha, salutation".',
            kn: 'ಕೆಳಗಿನ, ಮೇಲಿನ ಮತ್ತು ಮಧ್ಯದ ಸೋಮಪಾಯಿ ಪಿತೃಗಳು ಎದ್ದು ಬರಲಿ; ಪ್ರಾಣಲೋಕವನ್ನು ಸೇರಿದ, ಹಿಂಸೆಯಿಲ್ಲದ, ಋತವನ್ನು ತಿಳಿದ ಆ ಪಿತೃಗಳು ನಮ್ಮ ಆಹ್ವಾನಗಳಲ್ಲಿ ನಮ್ಮನ್ನು ರಕ್ಷಿಸಲಿ. ನನ್ನ ಪಿತೃಗಳನ್ನು (ಅವರ ಗೋತ್ರ, ಹೆಸರುಗಳನ್ನು ಹೇಳಿ), ವಸುರೂಪರನ್ನು “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'अङ्गिरसो नः पितरो नवग्वा अथर्वाणो भृगवः सोम्यासः ।\nतेषां वयं सुमतौ यज्ञियानामपि भद्रे सौमनसे स्याम ॥\nगोत्रान् शर्मणः वसुरूपान् अस्मत्पितॄन् स्वधा नमस्तर्पयामि ॥',
          meaning: {
            en: 'Our fathers the Angirases, Navagvas, Atharvans and Bhrigus, the soma-drinkers: may we be in the good favour and the happy goodwill of those worthy of sacrifice. I satisfy my fathers (their gotras and names), seen as the Vasus, with "svadha, salutation".',
            kn: 'ನಮ್ಮ ಪಿತೃಗಳಾದ ಅಂಗಿರಸರು, ನವಗ್ವರು, ಅಥರ್ವಣರು, ಭೃಗುಗಳು — ಸೋಮಪಾಯಿಗಳು: ಯಜ್ಞಾರ್ಹರಾದ ಅವರ ಸುಮತಿಯಲ್ಲಿ, ಶುಭ ಸೌಮನಸ್ಯದಲ್ಲಿ ನಾವು ಇರೋಣ. ನನ್ನ ಪಿತೃಗಳನ್ನು (ಅವರ ಗೋತ್ರ, ಹೆಸರುಗಳನ್ನು ಹೇಳಿ), ವಸುರೂಪರನ್ನು “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'आयन्तु नः पितरः सोम्यासोऽग्निष्वात्ताः पथिभिर्देवयानैः ।\nअस्मिन् यज्ञे स्वधया मदन्तोऽधि ब्रुवन्तु तेऽवन्त्वस्मान् ॥\nगोत्रान् शर्मणः वसुरूपान् अस्मत्पितॄन् स्वधा नमस्तर्पयामि ॥',
          meaning: {
            en: 'May our soma-loving fathers, the Agnishvattas, come by the paths that lead to the gods; rejoicing at this sacrifice with svadha, may they speak to us and protect us. I satisfy my fathers (their gotras and names), seen as the Vasus, with "svadha, salutation".',
            kn: 'ಸೋಮಪ್ರಿಯ ಅಗ್ನಿಷ್ವಾತ್ತ ಪಿತೃಗಳು ದೇವಯಾನ ಮಾರ್ಗಗಳಿಂದ ನಮ್ಮತ್ತ ಬರಲಿ; ಈ ಯಜ್ಞದಲ್ಲಿ ಸ್ವಧೆಯಿಂದ ಸಂತೋಷಿಸುತ್ತಾ ನಮ್ಮೊಂದಿಗೆ ಮಾತನಾಡಲಿ, ನಮ್ಮನ್ನು ರಕ್ಷಿಸಲಿ. ನನ್ನ ಪಿತೃಗಳನ್ನು (ಅವರ ಗೋತ್ರ, ಹೆಸರುಗಳನ್ನು ಹೇಳಿ), ವಸುರೂಪರನ್ನು “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'ऊर्जं वहन्तीरमृतं घृतं पयः कीलालं परिस्रुतम् ।\nस्वधा स्थ तर्पयत मे पितॄन् ॥\nगोत्रान् शर्मणः रुद्ररूपान् अस्मत्पितामहान् स्वधा नमस्तर्पयामि ॥',
          meaning: {
            en: 'Bringing strength, nectar, ghee, milk, the sweet drink and the flowing waters: you are svadha; satisfy my fathers. I satisfy my grandfathers (their gotras and names), seen as the Rudras, with "svadha, salutation".',
            kn: 'ಬಲ, ಅಮೃತ, ತುಪ್ಪ, ಹಾಲು, ಕೀಲಾಲ (ಸಿಹಿಪಾನ) ಮತ್ತು ಹರಿಯುವ ನೀರನ್ನು ತರುವ ನೀವು ಸ್ವಧೆ; ನನ್ನ ಪಿತೃಗಳನ್ನು ತೃಪ್ತಿಪಡಿಸಿ. ನನ್ನ ಪಿತಾಮಹರನ್ನು (ಅವರ ಗೋತ್ರ, ಹೆಸರುಗಳನ್ನು ಹೇಳಿ), ರುದ್ರರೂಪರನ್ನು “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'पितृभ्यः स्वधाविभ्यः स्वधा नमः । पितामहेभ्यः स्वधाविभ्यः स्वधा नमः ।\nप्रपितामहेभ्यः स्वधाविभ्यः स्वधा नमः ॥\nगोत्रान् शर्मणः रुद्ररूपान् अस्मत्पितामहान् स्वधा नमस्तर्पयामि ॥',
          meaning: {
            en: 'To the fathers, rich in svadha: svadha and salutation. To the grandfathers, rich in svadha: svadha and salutation. To the great-grandfathers, rich in svadha: svadha and salutation. I satisfy my grandfathers (their gotras and names), seen as the Rudras, with "svadha, salutation".',
            kn: 'ಸ್ವಧಾವಂತರಾದ ಪಿತೃಗಳಿಗೆ ಸ್ವಧಾ ನಮಃ; ಸ್ವಧಾವಂತರಾದ ಪಿತಾಮಹರಿಗೆ ಸ್ವಧಾ ನಮಃ; ಸ್ವಧಾವಂತರಾದ ಪ್ರಪಿತಾಮಹರಿಗೆ ಸ್ವಧಾ ನಮಃ. ನನ್ನ ಪಿತಾಮಹರನ್ನು (ಅವರ ಗೋತ್ರ, ಹೆಸರುಗಳನ್ನು ಹೇಳಿ), ರುದ್ರರೂಪರನ್ನು “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'ये चेह पितरो ये च नेह याँश्च विद्म याँ उ च न प्रविद्म ।\nअग्ने तान् वेत्थ यदि ते जातवेदस्तया प्रत्तं स्वधया मदन्तु स्वाहा ॥\nगोत्रान् शर्मणः रुद्ररूपान् अस्मत्पितामहान् स्वधा नमस्तर्पयामि ॥',
          meaning: {
            en: 'The fathers who are here and who are not here, those we know and those we do not know: O Agni Jatavedas, you know them, as many as they are; may they rejoice with the svadha you have given. Svaha. I satisfy my grandfathers (their gotras and names), seen as the Rudras, with "svadha, salutation".',
            kn: 'ಇಲ್ಲಿರುವ ಮತ್ತು ಇಲ್ಲದ ಪಿತೃಗಳು, ನಮಗೆ ಗೊತ್ತಿರುವ ಮತ್ತು ಗೊತ್ತಿಲ್ಲದ ಪಿತೃಗಳು — ಜಾತವೇದಸ್ ಅಗ್ನಿಯೇ, ಅವರೆಲ್ಲರನ್ನೂ ನೀನು ತಿಳಿದಿರುವೆ; ನೀನು ಕೊಟ್ಟ ಸ್ವಧೆಯಿಂದ ಅವರು ಆನಂದಿಸಲಿ. ಸ್ವಾಹಾ. ನನ್ನ ಪಿತಾಮಹರನ್ನು (ಅವರ ಗೋತ್ರ, ಹೆಸರುಗಳನ್ನು ಹೇಳಿ), ರುದ್ರರೂಪರನ್ನು “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'मधु वाता ऋतायते मधु क्षरन्ति सिन्धवः । माध्वीर्नः सन्त्वोषधीः ॥\nगोत्रान् शर्मणः आदित्यरूपान् अस्मत्प्रपितामहान् स्वधा नमस्तर्पयामि ॥',
          meaning: {
            en: 'The winds bring honey for the righteous, the rivers flow with honey; may the plants be sweet for us. I satisfy my great-grandfathers (their gotras and names), seen as the Adityas, with "svadha, salutation".',
            kn: 'ಋತಾವಂತರಿಗೆ ಗಾಳಿ ಜೇನನ್ನು ತರುತ್ತದೆ, ನದಿಗಳು ಜೇನನ್ನು ಹರಿಸುತ್ತವೆ; ಓಷಧಿಗಳು ನಮಗೆ ಮಧುರವಾಗಲಿ. ನನ್ನ ಪ್ರಪಿತಾಮಹರನ್ನು (ಅವರ ಗೋತ್ರ, ಹೆಸರುಗಳನ್ನು ಹೇಳಿ), ಆದಿತ್ಯರೂಪರನ್ನು “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'मधु नक्तमुतोषसि मधुमत्पार्थिवं रजः । मधु द्यौरस्तु नः पिता ॥\nगोत्रान् शर्मणः आदित्यरूपान् अस्मत्प्रपितामहान् स्वधा नमस्तर्पयामि ॥',
          meaning: {
            en: 'Honey in the night and in the dawn, honey in the dust of the earth; may heaven, our father, be honey for us. I satisfy my great-grandfathers (their gotras and names), seen as the Adityas, with "svadha, salutation".',
            kn: 'ರಾತ್ರಿಯಲ್ಲಿಯೂ ಉಷಃಕಾಲದಲ್ಲಿಯೂ ಜೇನು, ಭೂಮಿಯ ಧೂಳೂ ಜೇನು; ನಮ್ಮ ತಂದೆಯಾದ ದ್ಯುಲೋಕ ನಮಗೆ ಜೇನಾಗಲಿ. ನನ್ನ ಪ್ರಪಿತಾಮಹರನ್ನು (ಅವರ ಗೋತ್ರ, ಹೆಸರುಗಳನ್ನು ಹೇಳಿ), ಆದಿತ್ಯರೂಪರನ್ನು “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'मधुमान्नो वनस्पतिर्मधुमाँ अस्तु सूर्यः । माध्वीर्गावो भवन्तु नः ॥\nगोत्रान् शर्मणः आदित्यरूपान् अस्मत्प्रपितामहान् स्वधा नमस्तर्पयामि ॥',
          meaning: {
            en: 'May the tree be sweet for us, may the sun be sweet; may the cows yield honey for us. I satisfy my great-grandfathers (their gotras and names), seen as the Adityas, with "svadha, salutation".',
            kn: 'ವನಸ್ಪತಿ ನಮಗೆ ಮಧುರವಾಗಲಿ, ಸೂರ್ಯನು ಮಧುರನಾಗಲಿ; ಗೋವುಗಳು ನಮಗೆ ಮಧುರವಾಗಲಿ. ನನ್ನ ಪ್ರಪಿತಾಮಹರನ್ನು (ಅವರ ಗೋತ್ರ, ಹೆಸರುಗಳನ್ನು ಹೇಳಿ), ಆದಿತ್ಯರೂಪರನ್ನು “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'गोत्राः सीतादाः वसुरूपा अस्मन्मातॄः स्वधा नमस्तर्पयामि ।\nगोत्राः लक्ष्मीदाः रुद्ररूपा अस्मत्पितामहीः स्वधा नमस्तर्पयामि ।\nगोत्राः रुक्मिणीदाः आदित्यरूपा अस्मत्प्रपितामहीः स्वधा नमस्तर्पयामि ॥ (प्रत्येकं त्रिः)',
          meaning: {
            en: 'Of such gotras, in the form of the Vasus: my mothers (such as Sita-da); of such gotras, in the form of the Rudras: my paternal grandmothers (such as Lakshmi-da); of such gotras, in the form of the Adityas: my paternal great-grandmothers (such as Rukmini-da): I satisfy them, with "svadha, salutation". (Each three times.) Say the name of your own mother, grandmother and great-grandmother in place of the examples.',
            kn: 'ವಸುರೂಪರಾದ, ಇಂತಹ ಗೋತ್ರದ ನನ್ನ ತಾಯಿಯರನ್ನು (ಸೀತಾದಾ ಮೊದಲಾದವರು), ರುದ್ರರೂಪರಾದ ನನ್ನ ಪಿತಾಮಹಿಯರನ್ನು (ಲಕ್ಷ್ಮೀದಾ), ಆದಿತ್ಯರೂಪರಾದ ನನ್ನ ಪ್ರಪಿತಾಮಹಿಯರನ್ನು (ರುಕ್ಮಿಣೀದಾ) “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ. (ಪ್ರತಿಯೊಂದು ಮೂರು ಬಾರಿ.) ಉದಾಹರಣೆಗಳ ಬದಲು ನಿಮ್ಮ ತಾಯಿ, ಅಜ್ಜಿ, ಮುತ್ತಜ್ಜಿಯರ ಹೆಸರು ಹೇಳಿ.',
          },
        },
        {
          text: 'ज्ञाताज्ञातपितॄन् स्वधा नमस्तर्पयामि ॥ (त्रिः)\nऊर्जं वहन्तीरमृतं घृतं पयः कीलालं परिस्रुतम् ।\nस्वधा स्थ तर्पयत मे पितॄन् ॥\nतृप्यत तृप्यत तृप्यत ॥',
          meaning: {
            en: 'I satisfy the fathers known and unknown, with "svadha, salutation" (three times). Bringing strength, nectar, ghee, milk, the sweet drink and the flowing waters: you are svadha; satisfy my fathers. Be satisfied, be satisfied, be satisfied.',
            kn: 'ತಿಳಿದ ಮತ್ತು ತಿಳಿಯದ ಪಿತೃಗಳನ್ನು “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ (ಮೂರು ಬಾರಿ). ಬಲ, ಅಮೃತ, ತುಪ್ಪ, ಹಾಲು, ಕೀಲಾಲ, ಹರಿಯುವ ನೀರನ್ನು ತರುವ ನೀವು ಸ್ವಧೆ; ನನ್ನ ಪಿತೃಗಳನ್ನು ತೃಪ್ತಿಪಡಿಸಿ. ತೃಪ್ತರಾಗಿ, ತೃಪ್ತರಾಗಿ, ತೃಪ್ತರಾಗಿ.',
          },
        },
        {
          text: 'उदीरतामवर उत्परास उन्मध्यमाः पितरः सोम्यासः ।\nअसुं य ईयुरवृका ऋतज्ञास्ते नोऽवन्तु पितरो हवेषु ॥\nगोत्रान् शर्मणः वसुरूपान् अस्मन्मातामहान् स्वधा नमस्तर्पयामि ॥',
          meaning: {
            en: 'May the lower, the higher and the middle fathers, the soma-drinkers, rise up; may those fathers who have gone to the life-breath, harmless and knowers of the right, help us in our invocations. I satisfy my maternal grandfathers (their gotras and names), seen as the Vasus, with "svadha, salutation".',
            kn: 'ಕೆಳಗಿನ, ಮೇಲಿನ ಮತ್ತು ಮಧ್ಯದ ಸೋಮಪಾಯಿ ಪಿತೃಗಳು ಎದ್ದು ಬರಲಿ; ಪ್ರಾಣಲೋಕವನ್ನು ಸೇರಿದ, ಹಿಂಸೆಯಿಲ್ಲದ, ಋತವನ್ನು ತಿಳಿದ ಆ ಪಿತೃಗಳು ನಮ್ಮ ಆಹ್ವಾನಗಳಲ್ಲಿ ನಮ್ಮನ್ನು ರಕ್ಷಿಸಲಿ. ನನ್ನ ಮಾತಾಮಹರನ್ನು (ಅವರ ಗೋತ್ರ, ಹೆಸರುಗಳನ್ನು ಹೇಳಿ), ವಸುರೂಪರನ್ನು “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'अङ्गिरसो नः पितरो नवग्वा अथर्वाणो भृगवः सोम्यासः ।\nतेषां वयं सुमतौ यज्ञियानामपि भद्रे सौमनसे स्याम ॥\nगोत्रान् शर्मणः वसुरूपान् अस्मन्मातामहान् स्वधा नमस्तर्पयामि ॥',
          meaning: {
            en: 'Our fathers the Angirases, Navagvas, Atharvans and Bhrigus, the soma-drinkers: may we be in the good favour and the happy goodwill of those worthy of sacrifice. I satisfy my maternal grandfathers (their gotras and names), seen as the Vasus, with "svadha, salutation".',
            kn: 'ನಮ್ಮ ಪಿತೃಗಳಾದ ಅಂಗಿರಸರು, ನವಗ್ವರು, ಅಥರ್ವಣರು, ಭೃಗುಗಳು — ಸೋಮಪಾಯಿಗಳು: ಯಜ್ಞಾರ್ಹರಾದ ಅವರ ಸುಮತಿಯಲ್ಲಿ, ಶುಭ ಸೌಮನಸ್ಯದಲ್ಲಿ ನಾವು ಇರೋಣ. ನನ್ನ ಮಾತಾಮಹರನ್ನು (ಅವರ ಗೋತ್ರ, ಹೆಸರುಗಳನ್ನು ಹೇಳಿ), ವಸುರೂಪರನ್ನು “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'आयन्तु नः पितरः सोम्यासोऽग्निष्वात्ताः पथिभिर्देवयानैः ।\nअस्मिन् यज्ञे स्वधया मदन्तोऽधि ब्रुवन्तु तेऽवन्त्वस्मान् ॥\nगोत्रान् शर्मणः वसुरूपान् अस्मन्मातामहान् स्वधा नमस्तर्पयामि ॥',
          meaning: {
            en: 'May our soma-loving fathers, the Agnishvattas, come by the paths that lead to the gods; rejoicing at this sacrifice with svadha, may they speak to us and protect us. I satisfy my maternal grandfathers (their gotras and names), seen as the Vasus, with "svadha, salutation".',
            kn: 'ಸೋಮಪ್ರಿಯ ಅಗ್ನಿಷ್ವಾತ್ತ ಪಿತೃಗಳು ದೇವಯಾನ ಮಾರ್ಗಗಳಿಂದ ನಮ್ಮತ್ತ ಬರಲಿ; ಈ ಯಜ್ಞದಲ್ಲಿ ಸ್ವಧೆಯಿಂದ ಸಂತೋಷಿಸುತ್ತಾ ನಮ್ಮೊಂದಿಗೆ ಮಾತನಾಡಲಿ, ನಮ್ಮನ್ನು ರಕ್ಷಿಸಲಿ. ನನ್ನ ಮಾತಾಮಹರನ್ನು (ಅವರ ಗೋತ್ರ, ಹೆಸರುಗಳನ್ನು ಹೇಳಿ), ವಸುರೂಪರನ್ನು “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'ऊर्जं वहन्तीरमृतं घृतं पयः कीलालं परिस्रुतम् ।\nस्वधा स्थ तर्पयत मे पितॄन् ॥\nगोत्रान् शर्मणः रुद्ररूपान् अस्मन्मातुःपितामहान् स्वधा नमस्तर्पयामि ॥',
          meaning: {
            en: 'Bringing strength, nectar, ghee, milk, the sweet drink and the flowing waters: you are svadha; satisfy my fathers. I satisfy my mother\'s fathers\' fathers (their gotras and names), seen as the Rudras, with "svadha, salutation".',
            kn: 'ಬಲ, ಅಮೃತ, ತುಪ್ಪ, ಹಾಲು, ಕೀಲಾಲ (ಸಿಹಿಪಾನ) ಮತ್ತು ಹರಿಯುವ ನೀರನ್ನು ತರುವ ನೀವು ಸ್ವಧೆ; ನನ್ನ ಪಿತೃಗಳನ್ನು ತೃಪ್ತಿಪಡಿಸಿ. ನನ್ನ ಮಾತುಃಪಿತಾಮಹರನ್ನು (ಅವರ ಗೋತ್ರ, ಹೆಸರುಗಳನ್ನು ಹೇಳಿ), ರುದ್ರರೂಪರನ್ನು “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'पितृभ्यः स्वधाविभ्यः स्वधा नमः । पितामहेभ्यः स्वधाविभ्यः स्वधा नमः ।\nप्रपितामहेभ्यः स्वधाविभ्यः स्वधा नमः ॥\nगोत्रान् शर्मणः रुद्ररूपान् अस्मन्मातुःपितामहान् स्वधा नमस्तर्पयामि ॥',
          meaning: {
            en: 'To the fathers, rich in svadha: svadha and salutation. To the grandfathers, rich in svadha: svadha and salutation. To the great-grandfathers, rich in svadha: svadha and salutation. I satisfy my mother\'s fathers\' fathers (their gotras and names), seen as the Rudras, with "svadha, salutation".',
            kn: 'ಸ್ವಧಾವಂತರಾದ ಪಿತೃಗಳಿಗೆ ಸ್ವಧಾ ನಮಃ; ಸ್ವಧಾವಂತರಾದ ಪಿತಾಮಹರಿಗೆ ಸ್ವಧಾ ನಮಃ; ಸ್ವಧಾವಂತರಾದ ಪ್ರಪಿತಾಮಹರಿಗೆ ಸ್ವಧಾ ನಮಃ. ನನ್ನ ಮಾತುಃಪಿತಾಮಹರನ್ನು (ಅವರ ಗೋತ್ರ, ಹೆಸರುಗಳನ್ನು ಹೇಳಿ), ರುದ್ರರೂಪರನ್ನು “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'ये चेह पितरो ये च नेह याँश्च विद्म याँ उ च न प्रविद्म ।\nअग्ने तान् वेत्थ यदि ते जातवेदस्तया प्रत्तं स्वधया मदन्तु स्वाहा ॥\nगोत्रान् शर्मणः रुद्ररूपान् अस्मन्मातुःपितामहान् स्वधा नमस्तर्पयामि ॥',
          meaning: {
            en: 'The fathers who are here and who are not here, those we know and those we do not know: O Agni Jatavedas, you know them, as many as they are; may they rejoice with the svadha you have given. Svaha. I satisfy my mother\'s fathers\' fathers (their gotras and names), seen as the Rudras, with "svadha, salutation".',
            kn: 'ಇಲ್ಲಿರುವ ಮತ್ತು ಇಲ್ಲದ ಪಿತೃಗಳು, ನಮಗೆ ಗೊತ್ತಿರುವ ಮತ್ತು ಗೊತ್ತಿಲ್ಲದ ಪಿತೃಗಳು — ಜಾತವೇದಸ್ ಅಗ್ನಿಯೇ, ಅವರೆಲ್ಲರನ್ನೂ ನೀನು ತಿಳಿದಿರುವೆ; ನೀನು ಕೊಟ್ಟ ಸ್ವಧೆಯಿಂದ ಅವರು ಆನಂದಿಸಲಿ. ಸ್ವಾಹಾ. ನನ್ನ ಮಾತುಃಪಿತಾಮಹರನ್ನು (ಅವರ ಗೋತ್ರ, ಹೆಸರುಗಳನ್ನು ಹೇಳಿ), ರುದ್ರರೂಪರನ್ನು “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'मधु वाता ऋतायते मधु क्षरन्ति सिन्धवः । माध्वीर्नः सन्त्वोषधीः ॥\nगोत्रान् शर्मणः आदित्यरूपान् अस्मन्मातुःप्रपितामहान् स्वधा नमस्तर्पयामि ॥',
          meaning: {
            en: 'The winds bring honey for the righteous, the rivers flow with honey; may the plants be sweet for us. I satisfy my mother\'s great-grandfathers (their gotras and names), seen as the Adityas, with "svadha, salutation".',
            kn: 'ಋತಾವಂತರಿಗೆ ಗಾಳಿ ಜೇನನ್ನು ತರುತ್ತದೆ, ನದಿಗಳು ಜೇನನ್ನು ಹರಿಸುತ್ತವೆ; ಓಷಧಿಗಳು ನಮಗೆ ಮಧುರವಾಗಲಿ. ನನ್ನ ಮಾತುಃಪ್ರಪಿತಾಮಹರನ್ನು (ಅವರ ಗೋತ್ರ, ಹೆಸರುಗಳನ್ನು ಹೇಳಿ), ಆದಿತ್ಯರೂಪರನ್ನು “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'मधु नक्तमुतोषसि मधुमत्पार्थिवं रजः । मधु द्यौरस्तु नः पिता ॥\nगोत्रान् शर्मणः आदित्यरूपान् अस्मन्मातुःप्रपितामहान् स्वधा नमस्तर्पयामि ॥',
          meaning: {
            en: 'Honey in the night and in the dawn, honey in the dust of the earth; may heaven, our father, be honey for us. I satisfy my mother\'s great-grandfathers (their gotras and names), seen as the Adityas, with "svadha, salutation".',
            kn: 'ರಾತ್ರಿಯಲ್ಲಿಯೂ ಉಷಃಕಾಲದಲ್ಲಿಯೂ ಜೇನು, ಭೂಮಿಯ ಧೂಳೂ ಜೇನು; ನಮ್ಮ ತಂದೆಯಾದ ದ್ಯುಲೋಕ ನಮಗೆ ಜೇನಾಗಲಿ. ನನ್ನ ಮಾತುಃಪ್ರಪಿತಾಮಹರನ್ನು (ಅವರ ಗೋತ್ರ, ಹೆಸರುಗಳನ್ನು ಹೇಳಿ), ಆದಿತ್ಯರೂಪರನ್ನು “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'मधुमान्नो वनस्पतिर्मधुमाँ अस्तु सूर्यः । माध्वीर्गावो भवन्तु नः ॥\nगोत्रान् शर्मणः आदित्यरूपान् अस्मन्मातुःप्रपितामहान् स्वधा नमस्तर्पयामि ॥',
          meaning: {
            en: 'May the tree be sweet for us, may the sun be sweet; may the cows yield honey for us. I satisfy my mother\'s great-grandfathers (their gotras and names), seen as the Adityas, with "svadha, salutation".',
            kn: 'ವನಸ್ಪತಿ ನಮಗೆ ಮಧುರವಾಗಲಿ, ಸೂರ್ಯನು ಮಧುರನಾಗಲಿ; ಗೋವುಗಳು ನಮಗೆ ಮಧುರವಾಗಲಿ. ನನ್ನ ಮಾತುಃಪ್ರಪಿತಾಮಹರನ್ನು (ಅವರ ಗೋತ್ರ, ಹೆಸರುಗಳನ್ನು ಹೇಳಿ), ಆದಿತ್ಯರೂಪರನ್ನು “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'गोत्राः गौरीदाः वसुरूपा मातामहीः स्वधा नमस्तर्पयामि ।\nगोत्राः पार्वतीदाः रुद्ररूपा मातुःपितामहीः स्वधा नमस्तर्पयामि ।\nगोत्राः मीनाक्षीदाः आदित्यरूपा मातुःप्रपितामहीः स्वधा नमस्तर्पयामि ॥ (प्रत्येकं त्रिः)\nज्ञाताज्ञातमातुःपितॄन् स्वधा नमस्तर्पयामि ॥ (त्रिः)\nऊर्जं वहन्तीरमृतं घृतं पयः कीलालं परिस्रुतम् ।\nस्वधा स्थ तर्पयत मे मातुःपितॄन् ॥ तृप्यत तृप्यत तृप्यत ॥',
          meaning: {
            en: 'Of such gotras, in the form of the Vasus: my maternal grandmothers (such as Gauri-da); in the form of the Rudras: my mother\'s paternal grandmothers (such as Parvati-da); in the form of the Adityas: my mother\'s paternal great-grandmothers (such as Minakshi-da): I satisfy them with "svadha, salutation" (each three times). I satisfy my mother\'s fathers, known and unknown (three times). Bringing strength, nectar, ghee, milk, the sweet drink and the flowing waters: you are svadha; satisfy my mother\'s fathers. Be satisfied, be satisfied, be satisfied. (Say the names of your own relatives.)',
            kn: 'ವಸುರೂಪರಾದ, ಇಂತಹ ಗೋತ್ರದ ನನ್ನ ಮಾತಾಮಹಿಯರನ್ನು (ಗೌರೀದಾ ಮೊದಲಾದವರು), ರುದ್ರರೂಪರಾದ ಮಾತುಃಪಿತಾಮಹಿಯರನ್ನು (ಪಾರ್ವತೀದಾ), ಆದಿತ್ಯರೂಪರಾದ ಮಾತುಃಪ್ರಪಿತಾಮಹಿಯರನ್ನು (ಮೀನಾಕ್ಷೀದಾ) “ಸ್ವಧಾ ನಮಃ” ಎಂದು ತರ್ಪಿಸುತ್ತೇನೆ (ಪ್ರತಿಯೊಂದು ಮೂರು ಬಾರಿ). ತಿಳಿದ, ತಿಳಿಯದ ತಾಯಿಯ ಕಡೆಯ ಪಿತೃಗಳನ್ನು ತರ್ಪಿಸುತ್ತೇನೆ (ಮೂರು ಬಾರಿ). ಬಲ, ಅಮೃತ, ತುಪ್ಪ, ಹಾಲು, ಕೀಲಾಲ, ಹರಿಯುವ ನೀರನ್ನು ತರುವ ನೀವು ಸ್ವಧೆ; ನನ್ನ ತಾಯಿಯ ಕಡೆಯ ಪಿತೃಗಳನ್ನು ತೃಪ್ತಿಪಡಿಸಿ. ತೃಪ್ತರಾಗಿ ×3. (ನಿಮ್ಮ ಬಂಧುಗಳ ಹೆಸರುಗಳನ್ನು ಹೇಳಿ.)',
          },
        },
      ],
    },
    {
      title: 'नियमाः — पिता जीवति चेत्',
      titleEn: 'Rules: when the father (or mother) is living',
      note: 'From the Madhva manual of Mahacharya (the footnote to the tila-tarpana that is part of shraddha). In practice: (1) While the father is alive the son does not do the pitru-tarpana: the manual says the tarpana is done by the father, and stotranidhi.com says the same ("if the father is alive, pitru-tarpana is not done"). (2) Dixit explains the order of the four vargas (the father\'s line, the mother, the maternal grandfather and the maternal grandmother): tarpana is not given to a varga while its first member is alive. While the mother is alive, the mother-varga (mother, grandmother, great-grandmother) is therefore left out; while the mother\'s father or mother is alive, the maternal-grandfather and maternal-grandmother vargas are left out; if the first of a varga has died but the second or third is alive, ask your elders. (3) Never offer tarpana to a living person. (4) Mathad adds that the devarshi-acharya tarpana of the brahma-yajna may be done even while the father is alive, up to the acharya-tarpana (see "Brahma Yajna").',
      noteKn: 'ಮಹಾಚಾರ್ಯ ಪ್ರಕಾಶನದ ಮಾಧ್ವ ಪುಸ್ತಕದ, ಶ್ರಾದ್ಧಾಂಗ ತಿಲತರ್ಪಣದ ಅಡಿಟಿಪ್ಪಣಿಯಿಂದ. ಆಚರಣೆಯಲ್ಲಿ: (1) ತಂದೆ ಜೀವಂತವಾಗಿರುವಾಗ ಮಗನು ಪಿತೃತರ್ಪಣ ಮಾಡುವುದಿಲ್ಲ; ತರ್ಪಣವನ್ನು ತಂದೆಯೇ ಮಾಡುತ್ತಾನೆ ಎಂದು ಪುಸ್ತಕ ಹೇಳುತ್ತದೆ; ಸ್ತೋತ್ರನಿಧಿಯೂ ಇದನ್ನೇ ಹೇಳುತ್ತದೆ (“ತಂದೆ ಬದುಕಿದ್ದರೆ ಪಿತೃತರ್ಪಣ ಮಾಡಬಾರದು”). (2) ದೀಕ್ಷಿತರು ನಾಲ್ಕು ವರ್ಗಗಳ (ಪಿತೃ, ಮಾತೃ, ಮಾತಾಮಹ, ಮಾತಾಮಹೀ) ಕ್ರಮವನ್ನು ವಿವರಿಸುತ್ತಾರೆ: ಒಂದು ವರ್ಗದ ಮೊದಲಿನವರು ಜೀವಂತವಾಗಿರುವಾಗ ಆ ವರ್ಗಕ್ಕೆ ತರ್ಪಣವಿಲ್ಲ. ಆದ್ದರಿಂದ ತಾಯಿ ಜೀವಂತವಾಗಿರುವಾಗ ಮಾತೃವರ್ಗ (ತಾಯಿ, ಅಜ್ಜಿ, ಮುತ್ತಜ್ಜಿ) ಇಲ್ಲ; ತಾಯಿಯ ತಂದೆ ಅಥವಾ ತಾಯಿ ಜೀವಂತವಾಗಿದ್ದರೆ ಮಾತಾಮಹ, ಮಾತಾಮಹೀ ವರ್ಗಗಳಿಲ್ಲ; ಒಂದು ವರ್ಗದ ಮೊದಲಿನವರು ಮೃತರಾಗಿ ಎರಡನೆಯವರು ಅಥವಾ ಮೂರನೆಯವರು ಜೀವಂತರಾಗಿದ್ದರೆ ಹಿರಿಯರನ್ನು ಕೇಳಿ. (3) ಜೀವಂತರಿಗೆ ಎಂದೂ ತರ್ಪಣ ಕೊಡಬಾರದು. (4) ಬ್ರಹ್ಮಯಜ್ಞದ ದೇವ-ಋಷಿ-ಆಚಾರ್ಯ ತರ್ಪಣವನ್ನು ತಂದೆ ಜೀವಂತವಾಗಿದ್ದರೂ ಆಚಾರ್ಯ ತರ್ಪಣದವರೆಗೆ ಮಾಡಬಹುದು ಎಂದು ಮಠದ ಅವರು ಹೇಳುತ್ತಾರೆ (“ಬ್ರಹ್ಮಯಜ್ಞ” ನೋಡಿ).',
      verses: [
        {
          text: 'वृद्धिश्राद्धे सपिण्डे च प्रेतश्राद्धेऽनुमासिके ।\nसंवत्सरविमोके च न कुर्यात्तिलतर्पणम् ॥\nजीवमानपिता यस्य माता यदि विपद्यते ।\nमातुः श्राद्धं सुतः कुर्यान्न कुर्यात्तिलतर्पणम् ॥\nन जीवत्पितृकः कुर्याच्छ्राद्धाङ्गतिलतर्पणम् ।\nश्राद्धमात्रं प्रकुर्वीत तर्पणं तु पिताऽऽचरेत् ॥',
          meaning: {
            en: 'In a vriddhi (auspicious) shraddha, in the sapindikarana, in the preta-shraddha and the monthly shraddhas, and at the end of the year (of mourning), one should not do the tila-tarpana. If one\'s father is alive and the mother dies, the son performs the mother\'s shraddha but not the tila-tarpana. One whose father is alive should not do the tila-tarpana that is part of a shraddha; he should do only the shraddha itself, while the tarpana is done by the father.',
            kn: 'ವೃದ್ಧಿಶ್ರಾದ್ಧ, ಸಪಿಂಡೀಕರಣ, ಪ್ರೇತಶ್ರಾದ್ಧ, ಅನುಮಾಸಿಕ ಶ್ರಾದ್ಧಗಳಲ್ಲಿ ಮತ್ತು (ಮೃತ್ಯು ದುಃಖದ) ವರ್ಷದ ಕೊನೆಯಲ್ಲಿ ತಿಲತರ್ಪಣ ಮಾಡಬಾರದು. ತಂದೆ ಜೀವಂತವಾಗಿದ್ದು ತಾಯಿ ಮೃತಳಾದರೆ ಮಗನು ತಾಯಿಯ ಶ್ರಾದ್ಧ ಮಾಡಬೇಕು, ತಿಲತರ್ಪಣ ಮಾಡಬಾರದು. ತಂದೆ ಜೀವಂತವಾಗಿರುವವನು ಶ್ರಾದ್ಧದ ಅಂಗವಾದ ತಿಲತರ್ಪಣ ಮಾಡಬಾರದು; ಶ್ರಾದ್ಧವನ್ನು ಮಾತ್ರ ಮಾಡಲಿ, ತರ್ಪಣವನ್ನು ತಂದೆಯೇ ಮಾಡಲಿ.',
          },
        },
      ],
    },
    {
      title: 'समर्पणम्',
      titleEn: 'Closing',
      note: 'The first and the last prayers are given in the Madhva manuals (Mahacharya, Mathad); the middle verse is said by both. Put the thread on the left shoulder (upavita) and, if you wish, walk round the place of the tarpana once. Pour out the kusha and the sesame water at the place, wash the hands and do achamana.',
      noteKn: 'ಮೊದಲ ಮತ್ತು ಕೊನೆಯ ಪ್ರಾರ್ಥನೆಗಳು ಮಾಧ್ವ ಪುಸ್ತಕಗಳಲ್ಲಿವೆ (ಮಹಾಚಾರ್ಯ, ಮಠದ ಅವರು); ಮಧ್ಯದ ಶ್ಲೋಕವನ್ನು ಇಬ್ಬರೂ ಹೇಳುತ್ತಾರೆ. ಯಜ್ಞೋಪವೀತವನ್ನು ಎಡಭುಜದ ಮೇಲೆ (ಉಪವೀತಿ) ಹಾಕಿಕೊಂಡು, ಇಚ್ಛೆಯಿದ್ದರೆ ತರ್ಪಣದ ಸ್ಥಳವನ್ನು ಒಮ್ಮೆ ಪ್ರದಕ್ಷಿಣೆ ಮಾಡಿ. ದರ್ಭೆ ಮತ್ತು ಎಳ್ಳು ನೀರನ್ನು ಆ ಸ್ಥಳದಲ್ಲಿ ಬಿಟ್ಟು, ಕೈ ತೊಳೆದು ಆಚಮನ ಮಾಡಿ.',
      verses: [
        {
          text: 'आब्रह्मस्तम्बपर्यन्तं देवर्षिपितृमानवाः ।\nतृप्यन्तु पितरः सर्वे मातृमातामहादयः ॥\nअतीतकुलकोटीनां सप्तद्वीपनिवासिनाम् ।\nआब्रह्मभुवनाल्लोकादिदमस्तु कुशोदकम् ॥\nयेके चास्मत्कुले जाता अपुत्रा गोत्रिणो मृताः ।\nते गृह्णन्तु मया दत्तं सूत्रनिष्पीडनोदकम् ॥',
          meaning: {
            en: 'From Brahma down to a blade of grass, may the gods, sages, ancestors and humans be satisfied, all the fathers, the mother\'s side and the maternal grandfathers and others. For the crores of families that have passed, dwellers of the seven islands, from the world of Brahma onward: let this water with kusha reach them. Whoever in our family have been born and died childless or without a gotra: let them receive this water pressed from my cloth, given by me.',
            kn: 'ಬ್ರಹ್ಮನಿಂದ ಹುಲ್ಲಿನ ಕಡ್ಡಿಯವರೆಗೆ ದೇವತೆಗಳು, ಋಷಿಗಳು, ಪಿತೃಗಳು, ಮಾನವರು — ತಾಯಿಯ ಕಡೆಯ, ಮಾತಾಮಹರೇ ಮೊದಲಾದ ಎಲ್ಲ ಪಿತೃಗಳು ತೃಪ್ತರಾಗಲಿ. ಸಪ್ತದ್ವೀಪಗಳಲ್ಲಿ ವಾಸಿಸಿ ಗತಿಸಿದ ಕೋಟಿ ಕುಲಗಳಿಗೆ, ಬ್ರಹ್ಮಲೋಕದವರೆಗಿನ ಎಲ್ಲರಿಗೆ ಈ ಕುಶೋದಕ ಸೇರಲಿ. ನಮ್ಮ ಕುಲದಲ್ಲಿ ಹುಟ್ಟಿ ಮಕ್ಕಳಿಲ್ಲದೆ ಅಥವಾ ಗೋತ್ರವಿಲ್ಲದೆ ಮೃತರಾದವರು ನಾನು ಕೊಟ್ಟ ಬಟ್ಟೆ ಹಿಂಡಿದ ನೀರನ್ನು ಸ್ವೀಕರಿಸಲಿ.',
          },
          when: {
            tradition: ['madhva'],
          },
        },
        {
          text: 'देवताभ्यः पितृभ्यश्च महायोगिभ्य एव च ।\nनमः स्वधायै स्वाहायै नित्यमेव नमो नमः ॥',
          meaning: {
            en: 'Salutations to the gods, to the ancestors and to the great yogis; salutations to Svadha and Svaha, always again and again.',
            kn: 'ದೇವತೆಗಳಿಗೆ, ಪಿತೃಗಳಿಗೆ, ಮಹಾಯೋಗಿಗಳಿಗೆ ನಮಸ್ಕಾರ; ಸ್ವಧೆ ಮತ್ತು ಸ್ವಾಹೆಗೆ ನಿತ್ಯವೂ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'यस्य स्मृत्या च नामोक्त्या तपोयज्ञक्रियादिषु ।\nन्यूनं सम्पूर्णतां याति सद्यो वन्दे तमच्युतम् ॥\nमन्त्रहीनं क्रियाहीनं भक्तिहीनं जनार्दन ।\nयत्कृतं तु मया देव परिपूर्णं तदस्तु मे ॥',
          meaning: {
            en: 'I bow to that Achyuta, by remembering whom and speaking whose name any shortfall in austerity, sacrifice or rite becomes complete at once. Whatever I have done, O Janardana, lacking in mantra, in action and in devotion, O God, let it be complete for me.',
            kn: 'ಯಾರನ್ನು ಸ್ಮರಿಸುವುದರಿಂದ ಮತ್ತು ಯಾರ ನಾಮ ಹೇಳುವುದರಿಂದ ತಪಸ್ಸು, ಯಜ್ಞ, ಕ್ರಿಯೆಗಳಲ್ಲಿನ ಕೊರತೆ ಕೂಡಲೇ ಪೂರ್ಣವಾಗುತ್ತದೋ ಆ ಅಚ್ಯುತನಿಗೆ ವಂದಿಸುತ್ತೇನೆ. ಜನಾರ್ದನ, ಮಂತ್ರ, ಕ್ರಿಯೆ, ಭಕ್ತಿಗಳಲ್ಲಿ ಕೊರತೆಯಿದ್ದರೂ ನಾನು ಮಾಡಿದ್ದು, ದೇವ, ನನಗೆ ಪರಿಪೂರ್ಣವಾಗಲಿ.',
          },
          when: {
            tradition: ['madhva'],
          },
        },
      ],
    },
    {
      title: 'उपसंहारः (माध्वः)',
      titleEn: 'Final salutations (Madhva)',
      note: 'From the Mahacharya manual. If the tarpana is a part of the shraddha, say "shraddhanga"; for a tarpana alone, many families say "tarpanena" in its place.',
      noteKn: 'ಮಹಾಚಾರ್ಯ ಪುಸ್ತಕದಂತೆ. ಶ್ರಾದ್ಧದ ಭಾಗವಾದಾಗ “ಶ್ರಾದ್ಧಾಂಗ” ಹೇಳಿ; ತರ್ಪಣ ಮಾತ್ರವಾದರೆ ಅನೇಕ ಮನೆತನದವರು ಅದರ ಬದಲು “ತರ್ಪಣೇನ” ಎನ್ನುತ್ತಾರೆ.',
      when: {
        tradition: ['madhva'],
      },
      verses: [
        {
          text: 'अनेन श्राद्धाङ्गतिलतर्पणेन भगवान् पित्रन्तर्गतभारतीरमणमुख्यप्राणान्तर्गत\nश्रीमज्जनार्दनवासुदेवः प्रीयतां प्रीतो भवतु ।\nश्रीकृष्णार्पणमस्तु ॥\n(पवित्रग्रन्थिं विसृज्य द्विराचम्य) अच्युताय नमः । अनन्ताय नमः । गोविन्दाय नमः ।\nअच्युतानन्तगोविन्देभ्यो नमो नमः । विष्णवे नमः । विष्णवे नमः । विष्णवे नमः ॥',
          meaning: {
            en: 'By this sesame-and-water tarpana, part of the shraddha, may the Lord Janardana Vasudeva, who dwells in the fathers and within them in Mukhyaprana, the consort of Bharati, be pleased and gracious. Let it be offered to Sri Krishna. (Untie the knot of the pavitra, do achamana twice:) Salutations to Achyuta, to Ananta, to Govinda; again and again to Achyuta, Ananta and Govinda; to Vishnu, Vishnu, Vishnu.',
            kn: 'ಶ್ರಾದ್ಧಾಂಗವಾದ ಈ ತಿಲತರ್ಪಣದಿಂದ, ಪಿತೃಗಳೊಳಗಿರುವ ಮತ್ತು ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣರ ಅಂತರ್ಯಾಮಿಯಾದ ಭಗವಾನ್ ಶ್ರೀಮಜ್ಜನಾರ್ದನ ವಾಸುದೇವನು ಪ್ರೀತನಾಗಲಿ. ಶ್ರೀಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು. (ಪವಿತ್ರದ ಗಂಟು ಬಿಚ್ಚಿ ಎರಡು ಬಾರಿ ಆಚಮನ ಮಾಡಿ:) ಅಚ್ಯುತನಿಗೆ ನಮಃ, ಅನಂತನಿಗೆ ನಮಃ, ಗೋವಿಂದನಿಗೆ ನಮಃ; ಅಚ್ಯುತಾನಂತಗೋವಿಂದರಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಃ; ವಿಷ್ಣುವಿಗೆ ನಮಃ, ವಿಷ್ಣುವಿಗೆ ನಮಃ, ವಿಷ್ಣುವಿಗೆ ನಮಃ.',
          },
        },
      ],
    },
    {
      title: 'उपसंहारः (स्मार्तः)',
      titleEn: 'Final salutations (Smarta)',
      note: 'From stotranidhi.com "Pitru Tarpanam" and the Kannada darsha-tarpana booklet. Remove the pavitra, wash the hands and do achamana twice.',
      noteKn: 'ಸ್ತೋತ್ರನಿಧಿಯ “ಪಿತೃ ತರ್ಪಣ” ಮತ್ತು ಕನ್ನಡ ದರ್ಶತರ್ಪಣ ಪುಸ್ತಕದಿಂದ. ಪವಿತ್ರವನ್ನು ತೆಗೆದು, ಕೈ ತೊಳೆದು ಎರಡು ಬಾರಿ ಆಚಮನ ಮಾಡಿ.',
      when: {
        tradition: ['smarta'],
      },
      verses: [
        {
          text: 'उपवीती । (प्रदक्षिणं कृत्वा)\nनमो वः पितरो रसाय नमो वः पितरः शुष्माय नमो वः पितरो जीवाय\nनमो वः पितरः स्वधायै नमो वः पितरो मन्यवे नमो वः पितरो घोराय पितरो नमो वः ॥',
          meaning: {
            en: 'Thread on the left shoulder; circumambulate. Salutations to you, fathers, for the sap; salutations to you, fathers, for the strength; to you, fathers, for life; to you, fathers, for svadha; to you, fathers, for the fervour (of anger); to you, fathers, for the terrible one: salutations to you, fathers.',
            kn: 'ಉಪವೀತಿ; ಪ್ರದಕ್ಷಿಣೆ ಮಾಡಿ. ಪಿತೃಗಳೇ, ರಸಕ್ಕಾಗಿ ನಿಮಗೆ ನಮಸ್ಕಾರ; ಶುಷ್ಮ (ಬಲ)ಕ್ಕಾಗಿ ನಮಸ್ಕಾರ; ಜೀವಕ್ಕಾಗಿ ನಮಸ್ಕಾರ; ಸ್ವಧೆಗಾಗಿ ನಮಸ್ಕಾರ; ಮನ್ಯು (ಕೋಪದ ತೀವ್ರತೆ)ವಿಗಾಗಿ ನಮಸ್ಕಾರ; ಘೋರಕ್ಕಾಗಿ ನಮಸ್ಕಾರ; ಪಿತೃಗಳೇ, ನಿಮಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'एषां न माता न पिता न बन्धुर्नान्यगोत्रिणः ।\nते सर्वे तृप्तिमायान्तु मयोत्सृष्टैः कुशोदकैः ॥\nकायेन वाचा मनसेन्द्रियैर्वा बुद्ध्यात्मना वा प्रकृतेः स्वभावात् ।\nकरोमि यद्यत्सकलं परस्मै नारायणायेति समर्पयामि ॥\nनमो ब्रह्मण्यदेवाय गोब्राह्मणहिताय च ।\nजगद्धिताय कृष्णाय गोविन्दाय नमो नमः ॥\n(पवित्रं विसृज्य) ॐ शान्तिः शान्तिः शान्तिः ॥ ॐ तत्सत् ब्रह्मार्पणमस्तु ॥',
          meaning: {
            en: 'Those who have no mother, no father, no kinsman and no one of the same gotra: may they all be satisfied by the kusha and water I have poured out. Whatever I do, with body, speech, mind, senses, intellect or the nature of the self, I offer it all to the Supreme, Narayana. Salutations to the God of the brahmins, benefactor of the cows and brahmins, benefactor of the world, to Krishna, Govinda, again and again. (Remove the pavitra.) Om peace, peace, peace. Om Tat Sat: let it be offered to Brahman.',
            kn: 'ತಾಯಿ, ತಂದೆ, ಬಂಧು, ಸಗೋತ್ರಿಯರು ಯಾರೂ ಇಲ್ಲದವರು — ಅವರೆಲ್ಲರೂ ನಾನು ಬಿಟ್ಟ ಕುಶೋದಕಗಳಿಂದ ತೃಪ್ತರಾಗಲಿ. ದೇಹ, ವಾಕ್ಕು, ಮನಸ್ಸು, ಇಂದ್ರಿಯ, ಬುದ್ಧಿ ಅಥವಾ ಪ್ರಕೃತಿ ಸ್ವಭಾವದಿಂದ ನಾನು ಮಾಡುವ ಎಲ್ಲವನ್ನೂ ಪರಮಾತ್ಮನಾದ ನಾರಾಯಣನಿಗೆ ಸಮರ್ಪಿಸುತ್ತೇನೆ. ಬ್ರಹ್ಮಣ್ಯದೇವನಿಗೆ, ಗೋಬ್ರಾಹ್ಮಣ ಹಿತನಿಗೆ, ಜಗದ್ಧಿತನಿಗೆ, ಕೃಷ್ಣ ಗೋವಿಂದನಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ. (ಪವಿತ್ರ ತೆಗೆದು) ಓಂ ಶಾಂತಿಃ ಶಾಂತಿಃ ಶಾಂತಿಃ. ಓಂ ತತ್ಸತ್, ಬ್ರಹ್ಮಾರ್ಪಣಮಸ್ತು.',
          },
        },
      ],
    },
  ],
};
