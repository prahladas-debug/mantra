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
        { text: 'ॐ केशवाय स्वाहा ।\nॐ नारायणाय स्वाहा ।\nॐ माधवाय स्वाहा ॥' },
        {
          text:
            'ॐ गोविन्दाय नमः ।\nॐ विष्णवे नमः ।\nॐ मधुसूदनाय नमः ।\nॐ त्रिविक्रमाय नमः ।\nॐ वामनाय नमः ।\nॐ श्रीधराय नमः ।\nॐ हृषीकेशाय नमः ।\nॐ पद्मनाभाय नमः ।\nॐ दामोदराय नमः ।\nॐ सङ्कर्षणाय नमः ।\nॐ वासुदेवाय नमः ।\nॐ प्रद्युम्नाय नमः ।\nॐ अनिरुद्धाय नमः ।\nॐ पुरुषोत्तमाय नमः ।\nॐ अधोक्षजाय नमः ।\nॐ नारसिंहाय नमः ।\nॐ अच्युताय नमः ।\nॐ जनार्दनाय नमः ।\nॐ उपेन्द्राय नमः ।\nॐ हरये नमः ।\nॐ श्रीकृष्णाय नमः ॥',
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
        },
        { text: 'श्रीभगवदाज्ञया श्रीभगवत्प्रीत्यर्थं\nप्रातःसन्ध्यामुपासिष्ये ॥' },
      ],
    },
    {
      title: 'मार्जनम्',
      titleEn: 'Mārjana (sprinkling)',
      note:
        'With the fingers of the right hand (or a kuśa blade) sprinkle water on the head at the end of each pāda (line). Many traditions sprinkle the feet at यस्य क्षयाय जिन्वथ, and at the end sprinkle water around oneself.',
      verses: [
        { text: 'आपो हि ष्ठा मयोभुवः ।\nता न ऊर्जे दधातन ।\nमहे रणाय चक्षसे ॥' },
        { text: 'यो वः शिवतमो रसः ।\nतस्य भाजयतेह नः ।\nउशतीरिव मातरः ॥' },
        { text: 'तस्मा अरं गमाम वः ।\nयस्य क्षयाय जिन्वथ ।\nआपो जनयथा च नः ॥' },
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
        },
      ],
    },
    {
      title: 'पुनर्मार्जनम्',
      titleEn: 'Punar-mārjana (second sprinkling)',
      note:
        'Sprinkle water on the head as in Mārjana while reciting दधिक्राव्णो… and the three आपो हि ष्ठा ṛks again. Some Yajurvedin traditions add further mantras here; follow your family manual.',
      verses: [
        { text: 'दधिक्राव्णो अकारिषं जिष्णोरश्वस्य वाजिनः ।\nसुरभि नो मुखा करत्प्र ण आयूंषि तारिषत् ॥' },
        { text: 'आपो हि ष्ठा मयोभुवः ।\nता न ऊर्जे दधातन ।\nमहे रणाय चक्षसे ॥' },
        { text: 'यो वः शिवतमो रसः ।\nतस्य भाजयतेह नः ।\nउशतीरिव मातरः ॥' },
        { text: 'तस्मा अरं गमाम वः ।\nयस्य क्षयाय जिन्वथ ।\nआपो जनयथा च नः ॥' },
      ],
    },
    {
      title: 'अर्घ्यप्रदानम्',
      titleEn: 'Arghya-pradāna (offering water to the Sun)',
      note:
        'Stand facing the Sun. Take water in both joined palms, recite the Gāyatrī with praṇava and vyāhṛtis, and pour the water out over the fingertips. Offer three arghyas in the morning and evening; at midday follow your family practice. Then sprinkle water around yourself, do ācamana and sit down.',
      verses: [
        { text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥' },
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
          meaning:
            'May the boon-giving Goddess come — the imperishable, equal to Brahman. O Gāyatrī, mother of the metres, accept this prayer of mine.',
        },
      ],
    },
    {
      title: 'गायत्री जपः',
      titleEn: 'Gāyatrī japa',
      note:
        'Recite the Gāyatrī mantra 108 times (best), 28 times (middle) or at least 10 times, counting on the fingers or with a mālā, with the mind fixed on its meaning. Many families precede japa with prāṇāyāma and a short saṅkalpa for japa.',
      verses: [
        { text: 'ॐ भूर्भुवः स्वः ।\nतत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥' },
      ],
    },
    {
      title: 'प्रातरुपस्थानम्',
      titleEn: 'Upasthāna — MORNING (to Mitra)',
      note:
        'Morning only. Stand facing the Sun with folded hands. Yajurvedins continue with further ṛks to Mitra (मित्रो जनान्…) per their manual.',
      verses: [{ text: 'मित्रस्य चर्षणीधृतः श्रवो देवस्य सानसिम् ।\nसत्यं चित्रश्रवस्तमम् ॥' }],
    },
    {
      title: 'सायमुपस्थानम्',
      titleEn: 'Upasthāna — EVENING (to Varuṇa)',
      note:
        'Evening only. Stand facing west with folded hands. Many traditions continue with further ṛks to Varuṇa (यच्चिद्धि ते…, यत्किञ्चेदं…, कितवासो…) per their manual.',
      verses: [
        { text: 'इमं मे वरुण श्रुधी हवमद्या च मृडय ।\nत्वामवस्युरा चके ॥' },
        {
          text:
            'तत्त्वा यामि ब्रह्मणा वन्दमानस्तदाशास्ते यजमानो हविर्भिः ।\nअहेडमानो वरुणेह बोध्युरुशंस मा न आयुः प्र मोषीः ॥',
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
        },
        {
          text:
            'सन्ध्यायै नमः । सावित्र्यै नमः ।\nगायत्र्यै नमः । सरस्वत्यै नमः ।\nसर्वाभ्यो देवताभ्यो नमः ॥',
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
          meaning:
            'Just as all rain falling from the sky goes to the ocean, salutations to every deity reach Keśava.',
        },
        {
          text:
            'कायेन वाचा मनसेन्द्रियैर्वा\nबुद्ध्यात्मना वा प्रकृतेः स्वभावात् ।\nकरोमि यद्यत्सकलं परस्मै\nनारायणायेति समर्पयामि ॥',
          meaning:
            'Whatever I do with body, speech, mind or senses, with intellect or self, or by natural disposition — all that I offer to the Supreme Nārāyaṇa.',
        },
        { text: 'सर्वं श्रीकृष्णार्पणमस्तु ॥' },
      ],
    },
  ],
};
