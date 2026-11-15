// Daily and seasonal snana (ritual bath) mantras, Madhva practice as given on madhwafestivals.com
// ("Everyday snana mantra with arghya details", "Sloka to chant while taking bath", "Daily slokas",
// "Karthika snana", "Magha snana", "Vaishaaka snana"), each verse collated with a second witness:
// - Apavitrah pavitro va: Dharmasindhu, Ahnika prakarana (Kanchi Kamakoti edition, kamakoti.org).
// - Tvam raja sarvatirthanam, Gange cha Yamune, Pushkaradyani: Tirthastuti (sanskritdocuments.org).
// - Namah kamalanabhaya (Vishnu arghya) and the Kartika sankalpa / arghya: Dharmasindhu, Kartika masa
//   (Padma Purana, Brahma khanda 21); Dharmasindhu gives a shorter form of the sankalpa.
// - Ehi surya sahasramsho: Padma Purana Aditya-hridaya, arghya (sanskritdocuments.org); the site ends
//   the line "grihanarghyam namo'stu te".
// - Vaishakha sankalpa: Dharmasindhu, Vaishakha masa (the site's fourth verse, single witness, omitted).
// - Magha sankalpa: madhwasakha.com (same wording; possibly derived from the same source); the Surya
//   arghya "Savitre prasavitre": Dharmasindhu, Magha masa. Dharmasindhu's own Magha sankalpa differs.
// Omitted (single witness): the site's river arghyas (Ganga, Krishna, Kaveri, Tungabhadra), the twelve
// names of Ganga, "Yo'sau sarvagato Vishnuh", Sri Vadiraja's Snana-sankalpa-paddhati (sanskritdocuments
// has it but reads "Vishnvadeshe"; not seen), and any Tula snana mantra (the site gives none).
import type { Mantra } from '../types';

export const snanaVidhi: Mantra = {
  id: 'snana-vidhi',
  title: 'स्नानविधिः',
  titleEn: 'Snana Vidhi (Ritual Bath Mantras)',
  category: 'nitya',
  deity: 'Sri Hari, the sacred rivers and the Sun',
  source: 'Traditional (Madhva practice; Padma Purana and Dharmasindhu for the monthly snanas)',
  summary:
    'Mantras for the daily bath: purification by remembering the lotus-eyed Lord, a prayer to the waters, the invocation of the sacred rivers, and arghya to Sri Hari and the Sun after bathing. Then the sankalpa and arghya for the three months of early-morning river bathing kept by Madhvas: Kartika (Ashvayuja purnima to Kartika purnima), Magha (Pushya purnima to Magha purnima) and Vaishakha (Chaitra purnima to Vaishakha purnima). Smartas use the same daily and Kartika and Vaishakha mantras (Dharmasindhu); their Magha sankalpa is worded differently.',
  summaryKn:
    'ನಿತ್ಯಸ್ನಾನದ ಮಂತ್ರಗಳು: ಪುಂಡರೀಕಾಕ್ಷನ ಸ್ಮರಣೆಯಿಂದ ಶುದ್ಧಿ, ಜಲದೇವತೆಗೆ ಪ್ರಾರ್ಥನೆ, ಪುಣ್ಯನದಿಗಳ ಆವಾಹನೆ, ಸ್ನಾನದ ನಂತರ ಶ್ರೀಹರಿಗೆ ಮತ್ತು ಸೂರ್ಯನಿಗೆ ಅರ್ಘ್ಯ. ನಂತರ ಮಾಧ್ವರು ಆಚರಿಸುವ ಮೂರು ಪ್ರಾತಃಸ್ನಾನದ ಮಾಸಗಳ ಸಂಕಲ್ಪ ಮತ್ತು ಅರ್ಘ್ಯ: ಕಾರ್ತಿಕ (ಆಶ್ವಯುಜ ಹುಣ್ಣಿಮೆಯಿಂದ ಕಾರ್ತಿಕ ಹುಣ್ಣಿಮೆ), ಮಾಘ (ಪುಷ್ಯ ಹುಣ್ಣಿಮೆಯಿಂದ ಮಾಘ ಹುಣ್ಣಿಮೆ), ವೈಶಾಖ (ಚೈತ್ರ ಹುಣ್ಣಿಮೆಯಿಂದ ವೈಶಾಖ ಹುಣ್ಣಿಮೆ). ಸ್ಮಾರ್ತರೂ ನಿತ್ಯಸ್ನಾನದ ಹಾಗೂ ಕಾರ್ತಿಕ, ವೈಶಾಖ ಸ್ನಾನದ ಇದೇ ಮಂತ್ರಗಳನ್ನು ಹೇಳುತ್ತಾರೆ (ಧರ್ಮಸಿಂಧು); ಅವರ ಮಾಘಸ್ನಾನ ಸಂಕಲ್ಪದ ಪಾಠ ಬೇರೆ.',
  difficulty: 'easy',
  completeness: 'partial',
  contentNote:
    'Only mantras found in two independent sources are given. Left out for now: the arghya verses to individual rivers (Ganga, Krishna, Kaveri, Tungabhadra), the twelve names of Ganga, Sri Vadiraja\'s Snana-sankalpa-paddhati, the second Kartika arghya and Vaishakha arghya verses, and a Tula snana sankalpa.',
  sections: [
    {
      title: 'स्नानात् पूर्वम्',
      titleEn: 'Before the bath',
      note: 'After achamana, sprinkle or touch the water and recite these, thinking of Sri Hari\'s feet from which Ganga flows; then bathe.',
      noteKn: 'ಆಚಮನದ ನಂತರ ನೀರನ್ನು ಮುಟ್ಟಿ ಅಥವಾ ಪ್ರೋಕ್ಷಿಸಿ, ಗಂಗೆ ಹುಟ್ಟಿದ ಶ್ರೀಹರಿಯ ಪಾದಗಳನ್ನು ಸ್ಮರಿಸುತ್ತಾ ಇವುಗಳನ್ನು ಹೇಳಿ ಸ್ನಾನ ಮಾಡಬೇಕು.',
      verses: [
        {
          n: 1,
          text: 'अपवित्रः पवित्रो वा सर्वावस्थां गतोऽपि वा ।\nयः स्मरेत् पुण्डरीकाक्षं स बाह्याभ्यन्तरः शुचिः ॥',
          meaning: {
            en: 'Whether impure or pure, in whatever state one may be, whoever remembers the lotus-eyed Lord becomes clean within and without.',
            kn: 'ಅಪವಿತ್ರನಾಗಿರಲಿ ಪವಿತ್ರನಾಗಿರಲಿ, ಯಾವ ಸ್ಥಿತಿಯಲ್ಲಿದ್ದರೂ, ಪುಂಡರೀಕಾಕ್ಷನನ್ನು ಸ್ಮರಿಸುವವನು ಒಳಗೂ ಹೊರಗೂ ಶುದ್ಧನಾಗುತ್ತಾನೆ.',
          },
        },
        {
          n: 2,
          text: 'त्वं राजा सर्वतीर्थानां त्वमेव जगतः पिता ।\nयाचितं देहि मे तीर्थं सर्वपापप्रमोचनम् ॥',
          meaning: {
            en: 'You are the king of all holy waters, you are the father of the world. Grant me the holy water I ask for, which frees from every sin.',
            kn: 'ನೀನು ಎಲ್ಲ ತೀರ್ಥಗಳ ರಾಜ, ನೀನೇ ಜಗತ್ತಿನ ತಂದೆ. ಎಲ್ಲ ಪಾಪಗಳಿಂದ ಬಿಡುಗಡೆ ಮಾಡುವ, ನಾನು ಬೇಡುವ ತೀರ್ಥವನ್ನು ನನಗೆ ಕೊಡು.',
          },
        },
        {
          n: 3,
          text: 'गङ्गे च यमुने चैव गोदावरि सरस्वति ।\nनर्मदे सिन्धु कावेरि जलेऽस्मिन् सन्निधिं कुरु ॥',
          meaning: {
            en: 'O Ganga, Yamuna, Godavari, Sarasvati, Narmada, Sindhu and Kaveri, be present in this water.',
            kn: 'ಗಂಗೆ, ಯಮುನೆ, ಗೋದಾವರಿ, ಸರಸ್ವತಿ, ನರ್ಮದೆ, ಸಿಂಧು, ಕಾವೇರಿಯರೇ, ಈ ನೀರಿನಲ್ಲಿ ಸನ್ನಿಹಿತರಾಗಿರಿ.',
          },
        },
        {
          n: 4,
          text: 'पुष्कराद्यानि तीर्थानि गङ्गाद्याः सरितस्तथा ।\nआगच्छन्तु पवित्राणि स्नानकाले सदा मम ॥',
          meaning: {
            en: 'May Pushkara and the other holy places, and Ganga and the other rivers, always come, purifying, at the time of my bath.',
            kn: 'ಪುಷ್ಕರವೇ ಮೊದಲಾದ ತೀರ್ಥಗಳೂ ಗಂಗೆಯೇ ಮೊದಲಾದ ನದಿಗಳೂ ಪವಿತ್ರಗೊಳಿಸುತ್ತಾ ನನ್ನ ಸ್ನಾನದ ಸಮಯದಲ್ಲಿ ಸದಾ ಬರಲಿ.',
          },
        },
      ],
    },
    {
      title: 'स्नानानन्तरम् अर्घ्यम्',
      titleEn: 'Arghya after the bath',
      note: 'Standing in the water (or facing east), offer water from the joined palms: first to Sri Hari, then to the Sun.',
      noteKn: 'ನೀರಿನಲ್ಲಿ ನಿಂತು (ಅಥವಾ ಪೂರ್ವಾಭಿಮುಖವಾಗಿ) ಬೊಗಸೆಯಿಂದ ಮೊದಲು ಶ್ರೀಹರಿಗೆ, ನಂತರ ಸೂರ್ಯನಿಗೆ ಅರ್ಘ್ಯ ಕೊಡಬೇಕು.',
      verses: [
        {
          n: 1,
          text: 'नमः कमलनाभाय नमस्ते जलशायिने ।\nनमस्तेऽस्तु हृषीकेश गृहाणार्घ्यं नमोऽस्तु ते ॥',
          meaning: {
            en: 'Salutation to the Lord with the lotus navel, salutation to you who rest on the waters. Salutation to you, Hrishikesha; accept this arghya, salutation to you.',
            kn: 'ಕಮಲನಾಭನಿಗೆ ನಮಸ್ಕಾರ, ಜಲದಲ್ಲಿ ಪವಡಿಸಿರುವ ನಿನಗೆ ನಮಸ್ಕಾರ. ಹೃಷೀಕೇಶನೇ, ನಿನಗೆ ನಮಸ್ಕಾರ; ಈ ಅರ್ಘ್ಯವನ್ನು ಸ್ವೀಕರಿಸು, ನಿನಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          n: 2,
          text: 'एहि सूर्य सहस्रांशो तेजोराशे जगत्पते ।\nअनुकम्पय मां भक्त्या गृहाणार्घ्यं दिवाकर ॥',
          meaning: {
            en: 'Come, O Sun of a thousand rays, mass of radiance, lord of the world. Be gracious to me; accept, O maker of the day, this arghya offered with devotion.',
            kn: 'ಸಾವಿರ ಕಿರಣಗಳ, ತೇಜಸ್ಸಿನ ರಾಶಿಯಾದ, ಜಗತ್ತಿನ ಒಡೆಯನಾದ ಸೂರ್ಯನೇ, ಬಾ. ನನ್ನ ಮೇಲೆ ಕೃಪೆ ತೋರು; ದಿವಾಕರನೇ, ಭಕ್ತಿಯಿಂದ ಕೊಡುವ ಈ ಅರ್ಘ್ಯವನ್ನು ಸ್ವೀಕರಿಸು.',
          },
        },
      ],
    },
    {
      title: 'कार्तिकस्नानम्',
      titleEn: 'Kartika snana (Ashvayuja purnima to Kartika purnima)',
      note: 'Bathe before sunrise while the stars are still visible, every day of the month. Offer arghya to Sri Hari with "Namah kamalanabhaya", say this sankalpa, bathe, and offer the second arghya below.',
      noteKn: 'ತಿಂಗಳ ಪ್ರತಿದಿನ ಸೂರ್ಯೋದಯಕ್ಕೆ ಮುಂಚೆ, ನಕ್ಷತ್ರಗಳು ಕಾಣುತ್ತಿರುವಾಗಲೇ ಸ್ನಾನ ಮಾಡಬೇಕು. "ನಮಃ ಕಮಲನಾಭಾಯ" ಎಂದು ಶ್ರೀಹರಿಗೆ ಅರ್ಘ್ಯ ಕೊಟ್ಟು, ಈ ಸಂಕಲ್ಪ ಹೇಳಿ, ಸ್ನಾನ ಮಾಡಿ, ಕೆಳಗಿನ ಎರಡನೆಯ ಅರ್ಘ್ಯವನ್ನು ಕೊಡಬೇಕು.',
      verses: [
        {
          n: 1,
          text: 'कार्तिकेऽहं करिष्यामि प्रातःस्नानं जनार्दन ।\nप्रीत्यर्थं तव देवेश दामोदर मया सह ॥\nध्यात्वाहं त्वां च देवेश जलेऽस्मिन् स्नातुमुद्यतः ।\nतव प्रसादात् पापं मे दामोदर विनश्यतु ॥',
          meaning: {
            en: 'O Janardana, in Kartika I shall bathe in the early morning to please you, Lord of the gods, O Damodara, together with Lakshmi. Meditating on you, Lord of the gods, I am ready to bathe in this water; by your grace, O Damodara, may my sin be destroyed.',
            kn: 'ಜನಾರ್ದನನೇ, ದೇವದೇವನೇ, ದಾಮೋದರನೇ, ಮಾ (ಲಕ್ಷ್ಮಿ) ಸಹಿತನಾದ ನಿನ್ನ ಪ್ರೀತಿಗಾಗಿ ಕಾರ್ತಿಕದಲ್ಲಿ ಪ್ರಾತಃಸ್ನಾನ ಮಾಡುತ್ತೇನೆ. ದೇವೇಶನೇ, ನಿನ್ನನ್ನು ಧ್ಯಾನಿಸುತ್ತಾ ಈ ನೀರಿನಲ್ಲಿ ಸ್ನಾನಕ್ಕೆ ಸಿದ್ಧನಾಗಿದ್ದೇನೆ; ದಾಮೋದರನೇ, ನಿನ್ನ ಅನುಗ್ರಹದಿಂದ ನನ್ನ ಪಾಪ ನಾಶವಾಗಲಿ.',
          },
        },
        {
          n: 2,
          text: 'नित्ये नैमित्तिके कृष्ण कार्तिके पापनाशने ।\nगृहाणार्घ्यं मया दत्तं राधया सहितो हरे ॥',
          meaning: {
            en: 'O Krishna, in this sin-destroying Kartika, in its daily and special observance, accept, O Hari, together with Radha, the arghya I offer.',
            kn: 'ಕೃಷ್ಣನೇ, ಪಾಪನಾಶಕವಾದ ಕಾರ್ತಿಕದಲ್ಲಿ ನಿತ್ಯವೂ ನೈಮಿತ್ತಿಕವೂ ಆದ ಈ ವ್ರತದಲ್ಲಿ, ಹರಿಯೇ, ರಾಧೆಯೊಡನೆ ನಾನು ಕೊಡುವ ಅರ್ಘ್ಯವನ್ನು ಸ್ವೀಕರಿಸು.',
          },
        },
      ],
    },
    {
      title: 'माघस्नानम्',
      titleEn: 'Magha snana (Pushya purnima to Magha purnima)',
      note: 'Bathe before sunrise every day of the month (at least on the last three days, the antya pushkarini). Say the sankalpa, bathe, offer arghya to Sri Hari with "Namah kamalanabhaya", then to the Sun with the verse below.',
      noteKn: 'ತಿಂಗಳ ಪ್ರತಿದಿನ (ಕನಿಷ್ಠ ಕೊನೆಯ ಮೂರು ದಿನ - ಅಂತ್ಯಪುಷ್ಕರಿಣಿ) ಸೂರ್ಯೋದಯಕ್ಕೆ ಮುಂಚೆ ಸ್ನಾನ ಮಾಡಬೇಕು. ಸಂಕಲ್ಪ ಹೇಳಿ, ಸ್ನಾನ ಮಾಡಿ, "ನಮಃ ಕಮಲನಾಭಾಯ" ಎಂದು ಶ್ರೀಹರಿಗೆ, ನಂತರ ಕೆಳಗಿನ ಶ್ಲೋಕದಿಂದ ಸೂರ್ಯನಿಗೆ ಅರ್ಘ್ಯ ಕೊಡಬೇಕು.',
      verses: [
        {
          n: 1,
          text: 'माघस्नानं करिष्यामि मकरस्थे दिवाकरे ।\nआसमाप्ति महादेव निर्विघ्नं कुरु माधव ॥',
          meaning: {
            en: 'I shall keep the Magha bath while the Sun is in Makara. O great Lord, O Madhava, let it go on without obstacle until its completion.',
            kn: 'ಸೂರ್ಯನು ಮಕರದಲ್ಲಿರುವಾಗ ಮಾಘಸ್ನಾನವನ್ನು ಮಾಡುತ್ತೇನೆ. ಮಹಾದೇವನಾದ ಮಾಧವನೇ, ಇದು ಮುಗಿಯುವವರೆಗೂ ನಿರ್ವಿಘ್ನವಾಗಿ ನಡೆಯುವಂತೆ ಮಾಡು.',
          },
        },
        {
          n: 2,
          text: 'सवित्रे प्रसवित्रे च परं धाम जले मम ।\nत्वत्तेजसा परिभ्रष्टं पापं यातु सहस्रधा ॥',
          meaning: {
            en: 'To Savitr, the Sun who brings forth all (this arghya). You are the supreme light in the water I bathe in; struck by your radiance, may my sin fall away in a thousand pieces.',
            kn: 'ಎಲ್ಲವನ್ನೂ ಹುಟ್ಟಿಸುವ ಸವಿತೃವಿಗೆ (ಈ ಅರ್ಘ್ಯ). ನಾನು ಸ್ನಾನ ಮಾಡುವ ನೀರಿನಲ್ಲಿ ನೀನೇ ಪರಮ ತೇಜಸ್ಸು; ನಿನ್ನ ತೇಜಸ್ಸಿನಿಂದ ಹೊಡೆಯಲ್ಪಟ್ಟು ನನ್ನ ಪಾಪ ಸಾವಿರ ಚೂರಾಗಿ ತೊಲಗಲಿ.',
          },
        },
      ],
    },
    {
      title: 'वैशाखस्नानम्',
      titleEn: 'Vaishakha snana (Chaitra purnima to Vaishakha purnima)',
      note: 'Bathe before sunrise every day while the Sun is in Mesha. Say the sankalpa verses, bathe, and offer arghya to Sri Hari (Madhusudana) with "Namah kamalanabhaya" and to the Sun with "Ehi surya".',
      noteKn: 'ಸೂರ್ಯನು ಮೇಷದಲ್ಲಿರುವಾಗ ಪ್ರತಿದಿನ ಸೂರ್ಯೋದಯಕ್ಕೆ ಮುಂಚೆ ಸ್ನಾನ ಮಾಡಬೇಕು. ಸಂಕಲ್ಪ ಶ್ಲೋಕಗಳನ್ನು ಹೇಳಿ, ಸ್ನಾನ ಮಾಡಿ, "ನಮಃ ಕಮಲನಾಭಾಯ" ಎಂದು ಶ್ರೀಹರಿಗೆ (ಮಧುಸೂದನನಿಗೆ), "ಏಹಿ ಸೂರ್ಯ" ಎಂದು ಸೂರ್ಯನಿಗೆ ಅರ್ಘ್ಯ ಕೊಡಬೇಕು.',
      verses: [
        {
          n: 1,
          text: 'वैशाखं सकलं मासं मेषसङ्क्रमणे रवेः ।\nप्रातः सनियमः स्नास्ये प्रीयतां मधुसूदनः ॥',
          meaning: {
            en: 'Through the whole month of Vaishakha, from the Sun\'s entry into Mesha, I shall bathe in the early morning with the observances. May Madhusudana be pleased.',
            kn: 'ಸೂರ್ಯನ ಮೇಷಸಂಕ್ರಮಣದಿಂದ ವೈಶಾಖ ಮಾಸವಿಡೀ ನಿಯಮದೊಂದಿಗೆ ಪ್ರಾತಃಸ್ನಾನ ಮಾಡುತ್ತೇನೆ. ಮಧುಸೂದನನು ಪ್ರೀತನಾಗಲಿ.',
          },
        },
        {
          n: 2,
          text: 'मधुहन्तुः प्रसादेन ब्राह्मणानामनुग्रहात् ।\nनिर्विघ्नमस्तु मे पुण्यं वैशाखस्नानमन्वहम् ॥',
          meaning: {
            en: 'By the grace of the slayer of Madhu and the blessing of the brahmanas, may my holy Vaishakha bath go on day after day without obstacle.',
            kn: 'ಮಧುವನ್ನು ಕೊಂದವನ ಅನುಗ್ರಹದಿಂದಲೂ ಬ್ರಾಹ್ಮಣರ ಆಶೀರ್ವಾದದಿಂದಲೂ ನನ್ನ ಪುಣ್ಯವಾದ ವೈಶಾಖಸ್ನಾನ ಪ್ರತಿದಿನವೂ ನಿರ್ವಿಘ್ನವಾಗಿ ನಡೆಯಲಿ.',
          },
        },
        {
          n: 3,
          text: 'माधवे मेषगे भानौ मुरारे मधुसूदन ।\nप्रातःस्नानेन मे नाथ फलदो भव पापहन् ॥',
          meaning: {
            en: 'In Madhava (Vaishakha), with the Sun in Mesha, O Murari, O Madhusudana, my Lord, destroyer of sin, grant me the fruit of this early-morning bath.',
            kn: 'ಮಾಧವ (ವೈಶಾಖ) ಮಾಸದಲ್ಲಿ ಸೂರ್ಯನು ಮೇಷದಲ್ಲಿರುವಾಗ, ಮುರಾರಿಯೇ, ಮಧುಸೂದನನೇ, ಪಾಪನಾಶಕನಾದ ಸ್ವಾಮಿಯೇ, ಈ ಪ್ರಾತಃಸ್ನಾನದ ಫಲವನ್ನು ನನಗೆ ಕೊಡು.',
          },
        },
      ],
    },
  ],
};
