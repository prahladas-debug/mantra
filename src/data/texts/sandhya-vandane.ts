/**
 * Sandhyāvandanam — common core of the Ṛgvedic / Yajurvedic procedure as
 * practised in Karnataka. NOT YET PROOFREAD against a printed sandhyāvandana
 * manual. Several optional / śākhā-specific steps are intentionally omitted
 * (see contentNote).
 */
import type { Mantra } from '../types';

export const sandhyaVandane: Mantra = {
  id: 'sandhya-vandane',
  title: 'सन्ध्यावन्दनम्',
  titleEn: 'Sandhyavandane',
  category: 'sandhya',
  deity: 'Savitṛ / Gāyatrī (Śrī Nārāyaṇa)',
  source: 'Gṛhya-sūtra / Taittirīya Āraṇyaka and Ṛgveda mantras',
  summary:
    'The daily twilight worship (morning, midday and evening) performed by those who have received upanayana, centred on arghya to the Sun and japa of the Gāyatrī mantra. This is the common core as practised in Karnataka; procedures differ by veda-śākhā (Ṛg/Yajur) and sampradāya (Mādhva, Smārta, Śrīvaiṣṇava), so readers should follow their family tradition and the guidance of their elders or purohita.',
  summaryKn:
    'ಉಪನಯನವಾದವರು ಪ್ರತಿದಿನ ಪ್ರಾತಃಕಾಲ, ಮಧ್ಯಾಹ್ನ ಮತ್ತು ಸಾಯಂಕಾಲಗಳಲ್ಲಿ ಮಾಡುವ ಸಂಧ್ಯೋಪಾಸನೆ; ಸೂರ್ಯನಿಗೆ ಅರ್ಘ್ಯ ಕೊಡುವುದು ಮತ್ತು ಗಾಯತ್ರೀ ಜಪ ಇದರ ಮುಖ್ಯ ಅಂಗಗಳು. ಇಲ್ಲಿ ಕರ್ನಾಟಕದಲ್ಲಿ ಆಚರಣೆಯಲ್ಲಿರುವ ಸಾಮಾನ್ಯ ಭಾಗವನ್ನು ಮಾತ್ರ ಕೊಡಲಾಗಿದೆ. ವೇದಶಾಖೆ (ಋಕ್ / ಯಜುಸ್) ಮತ್ತು ಸಂಪ್ರದಾಯಕ್ಕೆ (ಮಾಧ್ವ, ಸ್ಮಾರ್ತ, ಶ್ರೀವೈಷ್ಣವ) ಅನುಗುಣವಾಗಿ ವಿಧಾನ ಬದಲಾಗುವುದರಿಂದ, ನಿಮ್ಮ ಮನೆತನದ ಪದ್ಧತಿಯನ್ನೂ ಹಿರಿಯರ ಅಥವಾ ಪುರೋಹಿತರ ಮಾರ್ಗದರ್ಶನವನ್ನೂ ಅನುಸರಿಸಿ.',
  difficulty: 'medium',
  completeness: 'partial',
  contentNote:
    'Common core only. Omitted: the ṛṣi–chandas–devatā (viniyoga) statements before each mantra; preliminary purification (अपवित्रः पवित्रो वा…) and āsana mantra; Aghamarṣaṇa (Ṛgvedins); additional Yajurvedic punar-mārjana mantras; the prāyaścitta (late) arghya; Gāyatrī nyāsa and the Gāyatrī udvāsana (उत्तमे शिखरे…); the midday upasthāna; further upasthāna ṛks after the first (morning) and first two (evening); and abhivādana. Follow your family manual for these.',
  sections: [
    {
      title: 'आचमनम्',
      titleEn: 'Ācamana (sipping water)',
      note:
        'Sit facing east or north as per family practice. With the first three names — Keśava, Nārāyaṇa, Mādhava — sip a little water (enough to wet the throat) from the right palm, held in the gokarṇa shape. The remaining 21 names are not sipped; touch the body with the right hand: Govinda, Viṣṇu — wash/touch right and left hand; Madhusūdana, Trivikrama — upper and lower lip; Vāmana, Śrīdhara — right and left cheek; Hṛṣīkeśa — left hand; Padmanābha — feet; Dāmodara — head; Saṅkarṣaṇa — mouth with fingertips together; Vāsudeva, Pradyumna — right and left nostril; Aniruddha, Puruṣottama — right and left eye; Adhokṣaja, Nārasiṁha — right and left ear; Acyuta — navel; Janārdana — chest; Upendra — head; Hari, Śrīkṛṣṇa — right and left shoulder. The exact touching sequence varies slightly between families. Ācamana is repeated at several points below.',
      verses: [
        {
          text: 'ॐ केशवाय स्वाहा ।\nॐ नारायणाय स्वाहा ।\nॐ माधवाय स्वाहा ॥',
          meaning: {
            en: 'Offering to Keśava, to Nārāyaṇa and to Mādhava: with each of these names of the Lord a sip of water is taken.',
            kn: 'ಕೇಶವ, ನಾರಾಯಣ, ಮಾಧವ ಎಂಬ ಭಗವಂತನ ನಾಮಗಳನ್ನು ಹೇಳಿ, ಒಂದೊಂದು ನಾಮಕ್ಕೂ ಜಲವನ್ನು ಅರ್ಪಿಸಿ ಆಚಮನ ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text:
            'ॐ गोविन्दाय नमः ।\nॐ विष्णवे नमः ।\nॐ मधुसूदनाय नमः ।\nॐ त्रिविक्रमाय नमः ।\nॐ वामनाय नमः ।\nॐ श्रीधराय नमः ।\nॐ हृषीकेशाय नमः ।\nॐ पद्मनाभाय नमः ।\nॐ दामोदराय नमः ।\nॐ सङ्कर्षणाय नमः ।\nॐ वासुदेवाय नमः ।\nॐ प्रद्युम्नाय नमः ।\nॐ अनिरुद्धाय नमः ।\nॐ पुरुषोत्तमाय नमः ।\nॐ अधोक्षजाय नमः ।\nॐ नारसिंहाय नमः ।\nॐ अच्युताय नमः ।\nॐ जनार्दनाय नमः ।\nॐ उपेन्द्राय नमः ।\nॐ हरये नमः ।\nॐ श्रीकृष्णाय नमः ॥',
          meaning: {
            en: 'Salutations to the Lord by his holy names, from Govinda, Viṣṇu and Madhusūdana through to Hari and Śrī Kṛṣṇa.',
            kn: 'ಗೋವಿಂದ, ವಿಷ್ಣು, ಮಧುಸೂದನ ಮೊದಲ್ಗೊಂಡು ಹರಿ, ಶ್ರೀಕೃಷ್ಣನವರೆಗಿನ ಭಗವಂತನ ಪವಿತ್ರ ನಾಮಗಳಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'प्राणायामः',
      titleEn: 'Prāṇāyāma (breath control)',
      note:
        'Close the right nostril with the right thumb and breathe in through the left; close both nostrils (ring and little finger on the left) and hold the breath while mentally reciting the whole mantra; then release the right nostril and breathe out. Do this three times. The text is given in the Yajurvedic form (सुवः / सुवरोम्); Ṛgvedins say स्वः / स्वरोम्.',
      verses: [
        {
          text:
            'ॐ भूः । ॐ भुवः । ॐ सुवः । ॐ महः ।\nॐ जनः । ॐ तपः । ॐ सत्यम् ।\nॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ।\nॐ आपो ज्योती रसोऽमृतं ब्रह्म भूर्भुवः सुवरोम् ॥',
          meaning: {
            en: 'Om is recalled with each of the seven worlds, from Bhūḥ up to Satya. We meditate on the excellent radiance of the divine Savitṛ, who inspires our minds; Om, he is the waters, the light, the essence, the immortal, Brahman, pervading earth, sky and heaven.',
            kn: 'ಭೂಃ ಲೋಕದಿಂದ ಸತ್ಯಲೋಕದವರೆಗಿನ ಏಳು ಲೋಕಗಳನ್ನು ಓಂಕಾರದೊಂದಿಗೆ ಸ್ಮರಿಸುತ್ತೇನೆ. ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸುವ ಸವಿತೃದೇವನ ಶ್ರೇಷ್ಠವಾದ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಜಲ, ಜ್ಯೋತಿ, ರಸ, ಅಮೃತ ಎಲ್ಲವೂ ಆಗಿರುವ ಅವನೇ ಮೂರು ಲೋಕಗಳನ್ನು ವ್ಯಾಪಿಸಿರುವ ಪರಬ್ರಹ್ಮ.',
          },
        },
      ],
    },
    {
      title: 'सङ्कल्पः',
      titleEn: 'Saṅkalpa (resolve)',
      note:
        'Hold akṣata or water in the right hand. Replace each अमुक (“such-and-such”) with the current saṁvatsara, ayana, ṛtu, māsa, pakṣa, tithi, weekday and nakṣatra from the pañcāṅga, and adjust the place description as taught in your family. For midday say माध्याह्निकं करिष्ये and for evening सायंसन्ध्यामुपासिष्ये in place of प्रातःसन्ध्यामुपासिष्ये. Mādhva families commonly say “śrī-bhāratī-ramaṇa-mukhyaprāṇāntargata śrī-lakṣmīnārāyaṇa-preraṇayā śrī-lakṣmīnārāyaṇa-prītyartham” in place of “śrī-bhagavad-ājñayā śrī-bhagavat-prītyartham”.',
      verses: [
        {
          text:
            'हरिः ॐ तत्सत् । श्रीगोविन्द गोविन्द गोविन्द ।\nअद्य श्रीभगवतो महापुरुषस्य विष्णोराज्ञया प्रवर्तमानस्य\nआद्यब्रह्मणो द्वितीयपरार्धे श्वेतवराहकल्पे वैवस्वतमन्वन्तरे\nअष्टाविंशतितमे कलियुगे प्रथमपादे\nजम्बूद्वीपे भारतवर्षे भरतखण्डे दण्डकारण्ये गोदावर्या दक्षिणे तीरे\nशालिवाहनशके बौद्धावतारे रामक्षेत्रे\nअस्मिन् वर्तमाने व्यावहारिके चान्द्रमानेन अमुक नाम संवत्सरे\nअमुक अयने अमुक ऋतौ अमुक मासे अमुक पक्षे\nअमुक तिथौ अमुक वासरे अमुक नक्षत्रे शुभयोगे शुभकरणे\nएवंगुणविशेषणविशिष्टायां शुभतिथौ ।',
          meaning: {
            en: 'Hari Om Tat Sat; Govinda is remembered three times. Today, in the age set in motion by the command of Viṣṇu, the Supreme Person (the second half of Brahmā’s life, the Śveta-varāha kalpa, the Vaivasvata manvantara, the first quarter of Kali-yuga), in Bhāratavarṣa south of the Godāvarī, in the present year, ayana, season, month, fortnight, tithi, weekday and star, on this auspicious day so marked…',
            kn: 'ಹರಿಃ ಓಂ ತತ್ಸತ್; ಗೋವಿಂದನನ್ನು ಮೂರು ಬಾರಿ ಸ್ಮರಿಸುತ್ತೇನೆ. ಮಹಾಪುರುಷನಾದ ಶ್ರೀವಿಷ್ಣುವಿನ ಆಜ್ಞೆಯಿಂದ ನಡೆಯುತ್ತಿರುವ ಬ್ರಹ್ಮದೇವರ ದ್ವಿತೀಯ ಪರಾರ್ಧದ ಶ್ವೇತವರಾಹ ಕಲ್ಪ, ವೈವಸ್ವತ ಮನ್ವಂತರ, ಕಲಿಯುಗದ ಪ್ರಥಮ ಪಾದದಲ್ಲಿ, ಭಾರತವರ್ಷದಲ್ಲಿ ಗೋದಾವರಿಯ ದಕ್ಷಿಣ ತೀರದಲ್ಲಿ, ಈಗ ನಡೆಯುತ್ತಿರುವ ಸಂವತ್ಸರ, ಅಯನ, ಋತು, ಮಾಸ, ಪಕ್ಷ, ತಿಥಿ, ವಾರ, ನಕ್ಷತ್ರಗಳಿಂದ ಕೂಡಿದ ಈ ಶುಭದಿನದಂದು…',
          },
        },
        {
          text: 'श्रीभगवदाज्ञया श्रीभगवत्प्रीत्यर्थं\nप्रातःसन्ध्यामुपासिष्ये ॥',
          meaning: {
            en: 'By the command of the Lord and for the pleasure of the Lord, I shall perform the morning sandhyā worship.',
            kn: 'ಭಗವಂತನ ಆಜ್ಞೆಯಂತೆ, ಭಗವಂತನ ಪ್ರೀತಿಗಾಗಿ ಪ್ರಾತಃಸಂಧ್ಯೋಪಾಸನೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'मार्जनम्',
      titleEn: 'Mārjana (sprinkling)',
      note:
        'With the fingers of the right hand (or a kuśa blade) sprinkle water on the head at the end of each pāda (line). Many traditions sprinkle the feet at यस्य क्षयाय जिन्वथ, and at the end sprinkle water around oneself.',
      verses: [
        {
          text: 'आपो हि ष्ठा मयोभुवः ।\nता न ऊर्जे दधातन ।\nमहे रणाय चक्षसे ॥',
          meaning: {
            en: 'O Waters, you are the bringers of happiness. Fill us with strength, so that we may behold great joy.',
            kn: 'ಓ ಜಲದೇವತೆಗಳೇ, ನೀವು ಸುಖವನ್ನು ಕೊಡುವವರು. ನಮಗೆ ಶಕ್ತಿಯನ್ನು ತುಂಬಿ, ಮಹತ್ತಾದ ಆನಂದವನ್ನು ಕಾಣುವಂತೆ ಮಾಡಿ.',
          },
        },
        {
          text: 'यो वः शिवतमो रसः ।\nतस्य भाजयतेह नः ।\nउशतीरिव मातरः ॥',
          meaning: {
            en: 'Let us share here in your most auspicious essence, as loving mothers share with their children.',
            kn: 'ಪ್ರೀತಿಯುಳ್ಳ ತಾಯಂದಿರು ಮಕ್ಕಳಿಗೆ ಉಣಿಸುವಂತೆ, ನಿಮ್ಮಲ್ಲಿರುವ ಅತ್ಯಂತ ಮಂಗಳಕರವಾದ ರಸವನ್ನು ನಮಗೂ ಇಲ್ಲಿ ಕರುಣಿಸಿ.',
          },
        },
        {
          text: 'तस्मा अरं गमाम वः ।\nयस्य क्षयाय जिन्वथ ।\nआपो जनयथा च नः ॥',
          meaning: {
            en: 'May we readily attain that essence of yours with which you nourish all that dwells in the world; O Waters, bring us to new life.',
            kn: 'ಲೋಕದ ಜೀವಿಗಳನ್ನು ಪೋಷಿಸುವ ನಿಮ್ಮ ಆ ರಸವನ್ನು ನಾವು ಸಂಪೂರ್ಣವಾಗಿ ಪಡೆಯುವಂತಾಗಲಿ; ಓ ಜಲದೇವತೆಗಳೇ, ನಮಗೆ ಹೊಸ ಚೈತನ್ಯವನ್ನು ಕೊಡಿ.',
          },
        },
      ],
    },
    {
      title: 'प्रातः प्राशनम्',
      titleEn: 'Prāśana — MORNING',
      note:
        'Morning only. Take a little water in the right palm, recite, and sip it at स्वाहा. Then perform ācamana.',
      verses: [
        {
          text:
            'सूर्यश्च मा मन्युश्च मन्युपतयश्च मन्युकृतेभ्यः ।\nपापेभ्यो रक्षन्ताम् ।\nयद्रात्र्या पापमकार्षम् ।\nमनसा वाचा हस्ताभ्याम् ।\nपद्भ्यामुदरेण शिश्ना ।\nरात्रिस्तदवलुम्पतु ।\nयत्किञ्च दुरितं मयि ।\nइदमहं माममृतयोनौ ।\nसूर्ये ज्योतिषि जुहोमि स्वाहा ॥',
          meaning: {
            en: 'May the Sun, Manyu and the lords of Manyu protect me from sins born of anger. Whatever sin I did in the night with mind, speech, hands, feet, belly or organ, may the night wipe it away; whatever wrong is in me, I offer it, and myself, into the Sun, the light that is the source of immortality. Svāhā.',
            kn: 'ಸೂರ್ಯನೂ, ಮನ್ಯುವೂ (ಕೋಪಕ್ಕೆ ಅಭಿಮಾನಿ ದೇವತೆ), ಮನ್ಯುಪತಿಗಳೂ ಕೋಪದಿಂದ ಮಾಡಿದ ಪಾಪಗಳಿಂದ ನನ್ನನ್ನು ರಕ್ಷಿಸಲಿ. ರಾತ್ರಿಯಲ್ಲಿ ಮನಸ್ಸು, ಮಾತು, ಕೈ, ಕಾಲು, ಹೊಟ್ಟೆ ಮತ್ತು ಜನನೇಂದ್ರಿಯಗಳಿಂದ ಮಾಡಿದ ಪಾಪವನ್ನು ರಾತ್ರಿದೇವತೆಯು ಅಳಿಸಲಿ; ನನ್ನಲ್ಲಿರುವ ಎಲ್ಲಾ ದೋಷವನ್ನೂ ನನ್ನನ್ನೂ ಅಮೃತಕ್ಕೆ ಮೂಲವಾದ ಸೂರ್ಯಜ್ಯೋತಿಯಲ್ಲಿ ಅರ್ಪಿಸುತ್ತೇನೆ, ಸ್ವಾಹಾ.',
          },
        },
      ],
    },
    {
      title: 'माध्याह्निक प्राशनम्',
      titleEn: 'Prāśana — MIDDAY',
      note:
        'Midday (mādhyāhnika) only. Take a little water in the right palm, recite, and sip it at स्वाहा. Then perform ācamana.',
      verses: [
        {
          text:
            'आपः पुनन्तु पृथिवीं पृथिवी पूता पुनातु माम् ।\nपुनन्तु ब्रह्मणस्पतिर्ब्रह्मपूता पुनातु माम् ।\nयदुच्छिष्टमभोज्यं च यद्वा दुश्चरितं मम ।\nसर्वं पुनन्तु मामापोऽसतां च प्रतिग्रहं स्वाहा ॥',
          meaning: {
            en: 'May the waters purify the earth, and the purified earth purify me; may Brahmaṇaspati, and what is made pure by the Veda, purify me. From leftover or forbidden food, from my misdeeds and from gifts taken from the unworthy, may the waters purify me entirely. Svāhā.',
            kn: 'ಜಲವು ಭೂಮಿಯನ್ನು ಶುದ್ಧಗೊಳಿಸಲಿ, ಶುದ್ಧವಾದ ಭೂಮಿ ನನ್ನನ್ನು ಶುದ್ಧಗೊಳಿಸಲಿ; ಬ್ರಹ್ಮಣಸ್ಪತಿಯೂ ವೇದದಿಂದ ಪವಿತ್ರವಾದುದೂ ನನ್ನನ್ನು ಪಾವನಗೊಳಿಸಲಿ. ಎಂಜಲು, ತಿನ್ನಬಾರದ ಆಹಾರ, ನನ್ನ ದುರಾಚಾರ, ಅಯೋಗ್ಯರಿಂದ ಪಡೆದ ದಾನ ಇವೆಲ್ಲದರಿಂದ ಜಲವು ನನ್ನನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಶುದ್ಧಗೊಳಿಸಲಿ, ಸ್ವಾಹಾ.',
          },
        },
      ],
    },
    {
      title: 'सायं प्राशनम्',
      titleEn: 'Prāśana — EVENING',
      note:
        'Evening only. Take a little water in the right palm, recite, and sip it at स्वाहा. Then perform ācamana.',
      verses: [
        {
          text:
            'अग्निश्च मा मन्युश्च मन्युपतयश्च मन्युकृतेभ्यः ।\nपापेभ्यो रक्षन्ताम् ।\nयदह्ना पापमकार्षम् ।\nमनसा वाचा हस्ताभ्याम् ।\nपद्भ्यामुदरेण शिश्ना ।\nअहस्तदवलुम्पतु ।\nयत्किञ्च दुरितं मयि ।\nइदमहं माममृतयोनौ ।\nसत्ये ज्योतिषि जुहोमि स्वाहा ॥',
          meaning: {
            en: 'May Agni, Manyu and the lords of Manyu protect me from sins born of anger. Whatever sin I did in the day with mind, speech, hands, feet, belly or organ, may the day wipe it away; whatever wrong is in me, I offer it, and myself, into the light of Truth, the source of immortality. Svāhā.',
            kn: 'ಅಗ್ನಿಯೂ, ಮನ್ಯುವೂ (ಕೋಪಕ್ಕೆ ಅಭಿಮಾನಿ ದೇವತೆ), ಮನ್ಯುಪತಿಗಳೂ ಕೋಪದಿಂದ ಮಾಡಿದ ಪಾಪಗಳಿಂದ ನನ್ನನ್ನು ರಕ್ಷಿಸಲಿ. ಹಗಲಿನಲ್ಲಿ ಮನಸ್ಸು, ಮಾತು, ಕೈ, ಕಾಲು, ಹೊಟ್ಟೆ ಮತ್ತು ಜನನೇಂದ್ರಿಯಗಳಿಂದ ಮಾಡಿದ ಪಾಪವನ್ನು ಹಗಲಿನ ದೇವತೆಯು ಅಳಿಸಲಿ; ನನ್ನಲ್ಲಿರುವ ಎಲ್ಲಾ ದೋಷವನ್ನೂ ನನ್ನನ್ನೂ ಅಮೃತಕ್ಕೆ ಮೂಲವಾದ ಸತ್ಯಜ್ಯೋತಿಯಲ್ಲಿ ಅರ್ಪಿಸುತ್ತೇನೆ, ಸ್ವಾಹಾ.',
          },
        },
      ],
    },
    {
      title: 'पुनर्मार्जनम्',
      titleEn: 'Punar-mārjana (second sprinkling)',
      note:
        'Sprinkle water on the head as in Mārjana while reciting दधिक्राव्णो… and the three आपो हि ष्ठा ṛks again. Some Yajurvedin traditions add further mantras here; follow your family manual.',
      verses: [
        {
          text: 'दधिक्राव्णो अकारिषं जिष्णोरश्वस्य वाजिनः ।\nसुरभि नो मुखा करत्प्र ण आयूंषि तारिषत् ॥',
          meaning: {
            en: 'I have praised Dadhikrāvan, the victorious, swift and mighty divine steed. May he make our mouths fragrant and lengthen our lives.',
            kn: 'ಜಯಶಾಲಿಯೂ ವೇಗಶಾಲಿಯೂ ಬಲಶಾಲಿಯೂ ಆದ ದಧಿಕ್ರಾವನೆಂಬ ದಿವ್ಯಾಶ್ವವನ್ನು ಸ್ತುತಿಸಿದ್ದೇನೆ. ಅವನು ನಮ್ಮ ಮುಖಗಳನ್ನು ಸುಗಂಧಮಯವಾಗಿಸಲಿ, ನಮ್ಮ ಆಯುಷ್ಯವನ್ನು ಹೆಚ್ಚಿಸಲಿ.',
          },
        },
        {
          text: 'आपो हि ष्ठा मयोभुवः ।\nता न ऊर्जे दधातन ।\nमहे रणाय चक्षसे ॥',
          meaning: {
            en: 'O Waters, you are the bringers of happiness. Fill us with strength, so that we may behold great joy.',
            kn: 'ಓ ಜಲದೇವತೆಗಳೇ, ನೀವು ಸುಖವನ್ನು ಕೊಡುವವರು. ನಮಗೆ ಶಕ್ತಿಯನ್ನು ತುಂಬಿ, ಮಹತ್ತಾದ ಆನಂದವನ್ನು ಕಾಣುವಂತೆ ಮಾಡಿ.',
          },
        },
        {
          text: 'यो वः शिवतमो रसः ।\nतस्य भाजयतेह नः ।\nउशतीरिव मातरः ॥',
          meaning: {
            en: 'Let us share here in your most auspicious essence, as loving mothers share with their children.',
            kn: 'ಪ್ರೀತಿಯುಳ್ಳ ತಾಯಂದಿರು ಮಕ್ಕಳಿಗೆ ಉಣಿಸುವಂತೆ, ನಿಮ್ಮಲ್ಲಿರುವ ಅತ್ಯಂತ ಮಂಗಳಕರವಾದ ರಸವನ್ನು ನಮಗೂ ಇಲ್ಲಿ ಕರುಣಿಸಿ.',
          },
        },
        {
          text: 'तस्मा अरं गमाम वः ।\nयस्य क्षयाय जिन्वथ ।\nआपो जनयथा च नः ॥',
          meaning: {
            en: 'May we readily attain that essence of yours with which you nourish all that dwells in the world; O Waters, bring us to new life.',
            kn: 'ಲೋಕದ ಜೀವಿಗಳನ್ನು ಪೋಷಿಸುವ ನಿಮ್ಮ ಆ ರಸವನ್ನು ನಾವು ಸಂಪೂರ್ಣವಾಗಿ ಪಡೆಯುವಂತಾಗಲಿ; ಓ ಜಲದೇವತೆಗಳೇ, ನಮಗೆ ಹೊಸ ಚೈತನ್ಯವನ್ನು ಕೊಡಿ.',
          },
        },
      ],
    },
    {
      title: 'अर्घ्यप्रदानम्',
      titleEn: 'Arghya-pradāna (offering water to the Sun)',
      note:
        'Stand facing the Sun. Take water in both joined palms, recite the Gāyatrī with praṇava and vyāhṛtis, and pour the water out over the fingertips. Offer three arghyas in the morning and evening; at midday follow your family practice. Then sprinkle water around yourself, do ācamana and sit down.',
      verses: [
        {
          text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, earth, sky and heaven. We meditate on that excellent radiance of the divine Savitṛ; may he stir and guide our minds.',
            kn: 'ಓಂ ಭೂರ್ಭುವಃಸ್ವಃ. ಸವಿತೃದೇವನ ಶ್ರೇಷ್ಠವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಸನ್ಮಾರ್ಗದಲ್ಲಿ ಪ್ರೇರೇಪಿಸಲಿ.',
          },
        },
      ],
    },
    {
      title: 'गायत्र्यावाहनम्',
      titleEn: 'Gāyatrī āvāhana (invocation)',
      note:
        'Seated, after prāṇāyāma, invoke Gāyatrī Devī with folded hands before beginning japa.',
      verses: [
        {
          text: 'आयातु वरदा देवी अक्षरं ब्रह्मसम्मितम् ।\nगायत्री छन्दसां माता इदं ब्रह्म जुषस्व मे ॥',
          meaning: {
            en: 'May the boon-giving Goddess come, imperishable and equal to the Veda itself. O Gāyatrī, mother of the metres, accept this prayer of mine.',
            kn: 'ವರವನ್ನು ಕೊಡುವ, ಅಕ್ಷರಸ್ವರೂಪಳೂ ವೇದಕ್ಕೆ ಸಮಾನಳೂ ಆದ ದೇವಿಯು ಬರಲಿ. ಛಂದಸ್ಸುಗಳ ತಾಯಿಯಾದ ಓ ಗಾಯತ್ರೀದೇವಿ, ನನ್ನ ಈ ಪ್ರಾರ್ಥನೆಯನ್ನು ಸ್ವೀಕರಿಸು.',
          },
        },
      ],
    },
    {
      title: 'गायत्री जपः',
      titleEn: 'Gāyatrī japa',
      note:
        'Recite the Gāyatrī mantra 108 times (best), 28 times (middle) or at least 10 times, counting on the fingers or with a mālā, with the mind fixed on its meaning. Many families precede japa with prāṇāyāma and a short saṅkalpa for japa.',
      verses: [
        {
          text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, earth, sky and heaven. We meditate on that excellent radiance of the divine Savitṛ; may he stir and guide our minds.',
            kn: 'ಓಂ ಭೂರ್ಭುವಃಸ್ವಃ. ಸವಿತೃದೇವನ ಶ್ರೇಷ್ಠವಾದ ಆ ದಿವ್ಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಸನ್ಮಾರ್ಗದಲ್ಲಿ ಪ್ರೇರೇಪಿಸಲಿ.',
          },
        },
      ],
    },
    {
      title: 'प्रातरुपस्थानम्',
      titleEn: 'Upasthāna — MORNING (to Mitra)',
      note:
        'Morning only. Stand facing the Sun with folded hands. Yajurvedins continue with further ṛks to Mitra (मित्रो जनान्…) per their manual.',
      verses: [
        {
          text: 'मित्रस्य चर्षणीधृतः श्रवो देवस्य सानसिम् ।\nसत्यं चित्रश्रवस्तमम् ॥',
          meaning: {
            en: 'We praise the glory of the god Mitra, upholder of all people: a glory that is true, bountiful and most wonderfully renowned.',
            kn: 'ಎಲ್ಲಾ ಜನರನ್ನು ಪೋಷಿಸುವ ಮಿತ್ರದೇವನ ಕೀರ್ತಿಯನ್ನು ಸ್ತುತಿಸುತ್ತೇವೆ; ಅದು ಸತ್ಯವಾದುದು, ಫಲವನ್ನು ಕೊಡುವಂಥದ್ದು, ಅತ್ಯಂತ ಅದ್ಭುತವಾಗಿ ಪ್ರಸಿದ್ಧವಾದುದು.',
          },
        },
      ],
    },
    {
      title: 'सायमुपस्थानम्',
      titleEn: 'Upasthāna — EVENING (to Varuṇa)',
      note:
        'Evening only. Stand facing west with folded hands. Many traditions continue with further ṛks to Varuṇa (यच्चिद्धि ते…, यत्किञ्चेदं…, कितवासो…) per their manual.',
      verses: [
        {
          text: 'इमं मे वरुण श्रुधी हवमद्या च मृडय ।\nत्वामवस्युरा चके ॥',
          meaning: {
            en: 'O Varuṇa, hear this call of mine and be gracious to me today; seeking your protection, I call upon you.',
            kn: 'ಓ ವರುಣದೇವ, ನನ್ನ ಈ ಕರೆಯನ್ನು ಕೇಳು, ಇಂದು ನನ್ನ ಮೇಲೆ ಕರುಣೆ ತೋರು. ನಿನ್ನ ರಕ್ಷಣೆಯನ್ನು ಬಯಸಿ ನಿನ್ನನ್ನು ಪ್ರಾರ್ಥಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text:
            'तत्त्वा यामि ब्रह्मणा वन्दमानस्तदाशास्ते यजमानो हविर्भिः ।\nअहेडमानो वरुणेह बोध्युरुशंस मा न आयुः प्र मोषीः ॥',
          meaning: {
            en: 'Praising you with this hymn, I ask of you what the worshipper seeks with his offerings. Without anger, O Varuṇa, be attentive to us here; O widely praised one, do not take away our life.',
            kn: 'ಸ್ತೋತ್ರದಿಂದ ನಿನ್ನನ್ನು ವಂದಿಸುತ್ತಾ, ಯಜಮಾನನು ಹವಿಸ್ಸುಗಳ ಮೂಲಕ ಬಯಸುವುದನ್ನೇ ನಿನ್ನಿಂದ ಬೇಡುತ್ತೇನೆ. ಓ ವರುಣ, ಕೋಪಗೊಳ್ಳದೆ ಇಲ್ಲಿ ನಮ್ಮ ಪ್ರಾರ್ಥನೆಯನ್ನು ಗಮನಿಸು; ಎಲ್ಲರಿಂದ ಸ್ತುತಿಸಲ್ಪಡುವವನೇ, ನಮ್ಮ ಆಯುಷ್ಯವನ್ನು ಕಸಿದುಕೊಳ್ಳಬೇಡ.',
          },
        },
      ],
    },
    {
      title: 'दिग्देवतानमस्कारः',
      titleEn: 'Digdevatā namaskāra (salutation to the directions)',
      note:
        'Turn to each direction in turn (east, south, west, north, up, down, and the intermediate directions) and bow; then bow to Sandhyā, Sāvitrī, Gāyatrī, Sarasvatī and all deities.',
      verses: [
        {
          text:
            'प्राच्यै दिशे नमः ।\nदक्षिणायै दिशे नमः ।\nप्रतीच्यै दिशे नमः ।\nउदीच्यै दिशे नमः ।\nऊर्ध्वायै दिशे नमः ।\nअधरायै दिशे नमः ।\nअवान्तरायै दिशे नमः ॥',
          meaning: {
            en: 'Salutations to the east, south, west and north, to the direction above and the direction below, and to the intermediate directions.',
            kn: 'ಪೂರ್ವ, ದಕ್ಷಿಣ, ಪಶ್ಚಿಮ, ಉತ್ತರ ದಿಕ್ಕುಗಳಿಗೂ, ಮೇಲಿನ ಮತ್ತು ಕೆಳಗಿನ ದಿಕ್ಕುಗಳಿಗೂ, ಉಪದಿಕ್ಕುಗಳಿಗೂ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text:
            'सन्ध्यायै नमः । सावित्र्यै नमः ।\nगायत्र्यै नमः । सरस्वत्यै नमः ।\nसर्वाभ्यो देवताभ्यो नमः ॥',
          meaning: {
            en: 'Salutations to Sandhyā, Sāvitrī, Gāyatrī and Sarasvatī, and to all the deities.',
            kn: 'ಸಂಧ್ಯಾ, ಸಾವಿತ್ರೀ, ಗಾಯತ್ರೀ, ಸರಸ್ವತೀ ದೇವಿಯರಿಗೂ ಸಮಸ್ತ ದೇವತೆಗಳಿಗೂ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'समर्पणम्',
      titleEn: 'Concluding offering',
      note:
        'Offer the whole act to the Lord, pour a little water from the right hand, and finish with ācamana.',
      verses: [
        {
          text: 'आकाशात्पतितं तोयं यथा गच्छति सागरम् ।\nसर्वदेवनमस्कारः केशवं प्रति गच्छति ॥',
          meaning: {
            en: 'Just as all water falling from the sky flows on to the ocean, salutations offered to any deity reach Keśava.',
            kn: 'ಆಕಾಶದಿಂದ ಬಿದ್ದ ನೀರೆಲ್ಲವೂ ಕೊನೆಗೆ ಸಮುದ್ರವನ್ನೇ ಸೇರುವಂತೆ, ಯಾವ ದೇವತೆಗೆ ಮಾಡಿದ ನಮಸ್ಕಾರವೂ ಕೇಶವನನ್ನೇ ಸೇರುತ್ತದೆ.',
          },
        },
        {
          text:
            'कायेन वाचा मनसेन्द्रियैर्वा\nबुद्ध्यात्मना वा प्रकृतेः स्वभावात् ।\nकरोमि यद्यत्सकलं परस्मै\nनारायणायेति समर्पयामि ॥',
          meaning: {
            en: 'Whatever I do with body, speech, mind or senses, with intellect or self, or by my natural disposition, all of it I offer to the Supreme Nārāyaṇa.',
            kn: 'ದೇಹದಿಂದ, ಮಾತಿನಿಂದ, ಮನಸ್ಸಿನಿಂದ, ಇಂದ್ರಿಯಗಳಿಂದ, ಬುದ್ಧಿಯಿಂದ, ಆತ್ಮದಿಂದ ಅಥವಾ ಸ್ವಭಾವವಶದಿಂದ ನಾನು ಏನೇನು ಮಾಡುತ್ತೇನೋ ಅದೆಲ್ಲವನ್ನೂ ಪರಮಪುರುಷನಾದ ಶ್ರೀನಾರಾಯಣನಿಗೆ ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'सर्वं श्रीकृष्णार्पणमस्तु ॥',
          meaning: {
            en: 'May all this be an offering to Śrī Kṛṣṇa.',
            kn: 'ಎಲ್ಲವೂ ಶ್ರೀಕೃಷ್ಣನಿಗೆ ಅರ್ಪಿತವಾಗಲಿ.',
          },
        },
      ],
    },
  ],
};
