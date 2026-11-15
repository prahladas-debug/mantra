# Rigveda (Ashvalayana, Shakala) Sandhyavandane — Smarta

What the app shows when the reader chooses **Smarta** and each time of day, in the order shown, with the instruction notes and every mantra exactly as stored (Devanagari; svaras not shown). Generated from `src/data/texts/sandhya-vandane-rigveda.ts` by the audit render script (Nov 2026).

## Corrections made in the Nov 2026 audit

- Shrauta achamana in the Karnataka Ashvalayana form (अथर्ववेदाय… अग्नये ×2, सूर्य-चन्द्र, वायु-प्राण, … दिवे, ब्रह्मणे, विष्णवे, शिवाय) instead of the Baudhayana list (Somayaji, Balkur).
- Marjana: the nine sprinkling places of the Karnataka manuals (heart, below and above the chest, sides, back, face, below, whole body).
- Aghamarshana viniyoga: ऋतं चेत्यस्य मन्त्रस्य माधुच्छन्दसोऽघमर्षण ऋषिः … अघमर्षणे विनियोगः (Somayaji, Balkur).
- Prayaschitta arghya: given with the rik alone (यदद्य कच्च… / प्रातर्देवीम्… / उद्घेदभि…); the extra Gayatri removed (stotranidhi, Somayaji, Balkur).
- Tarpana: the Karnataka form ॐ भूस्तर्पयामि … नारायणं तर्पयामि … शिवं तर्पयामि added before the Andhra sandhya-tarpana.
- Morning upasthana: the Mitra riks are now RV 3.59.6, 3.59.1, 3.59.2 (was 3.59.6–9, which no manual gives).
- Evening upasthana: इमं मे वरुण… and तत्त्वा यामि… (RV 1.25.19, 1.24.11) instead of RV 1.25.1–10 (no manual gives those).
- **Midday**: the upasthana (उदु त्यं…, चित्रं देवानाम्…, सविता पश्चातात्…) now comes **before** the japa, and the jatavedase set is not added at midday (Kamesvara Aiyar, Somayaji).
- Digdevata: the Karnataka form (dikpala names, four pradakshinas, इन्द्र श्रेष्ठानि…, यमाय धर्मराजाय…, ध्रुवासु त्वासु…, ऋतं सत्यम्…) with the Andhra/Tamil नमः प्राच्यै दिशे… lines; the eight unsourced riks to the dikpalas removed.
- यां सदा…: सा मा सन्ध्याभिरक्षतु (was सा मां).

## Steps at a glance

| # | Step | Morning | Midday | Evening |
|---|---|:-:|:-:|:-:|
| 1 | शुद्धिः — Preparation and purification | ✓ | ✓ | ✓ |
| 2 | श्रौताचमनम् — Shrauta achamana (with the names of the Vedas) | ✓ | ✓ | ✓ |
| 3 | गायत्र्याचमनम् — Achamana with the Gayatri and apo hi shtha | ✓ | ✓ | ✓ |
| 4 | आचमनम् — Keshavadi achamana (Pauranika) — twice | ✓ | ✓ | ✓ |
| 5 | प्राणायामः — Pranayama (three times) | ✓ | ✓ | ✓ |
| 6 | सङ्कल्पः — Sankalpa (resolve) | ✓ | ✓ (differs) | ✓ (differs) |
| 7 | मार्जनम् — Marjana (sprinkling) | ✓ | ✓ | ✓ |
| 8 | जलाभिमन्त्रणम् — Jalabhimantrana and prashana (sipping consecrated water) | ✓ | ✓ (differs) | ✓ (differs) |
| 9 | पुनर्मार्जनम् — Punar-marjana (second sprinkling, nine riks) | ✓ | ✓ | ✓ |
| 10 | अघमर्षणम् — Aghamarshana (casting out sin) | ✓ | ✓ | ✓ |
| 11 | अर्घ्यप्रदानम् — Arghya (offering water to the Sun) | ✓ (own text) | ✓ (own text) | ✓ (own text) |
| 12 | आत्मप्रदक्षिणा — Atma-pradakshina (turning round in meditation) | ✓ | ✓ | ✓ |
| 13 | सूर्योपस्थानम् — Suryopasthana at midday (before japa) | — | ✓ | — |
| 14 | सन्ध्याङ्गतर्पणम् — Sandhyanga tarpana (Smarta, where practised) | ✓ | ✓ (differs) | ✓ (differs) |
| 15 | भूतोच्चाटनम् आसनशुद्धिश्च — Bhutochchatana and asana-shuddhi (before japa) | ✓ | ✓ | ✓ |
| 16 | गायत्र्यावाहनम् — Gayatri avahana (invocation) | ✓ | ✓ | ✓ |
| 17 | जपसङ्कल्पः — Pranayama and japa-sankalpa (Smarta) | ✓ | ✓ (differs) | ✓ (differs) |
| 18 | करन्यासः अङ्गन्यासश्च — Kara-nyasa and anga-nyasa (Smarta) | ✓ | ✓ | ✓ |
| 19 | ध्यानम् — Gayatri dhyana and mudras | ✓ | ✓ | ✓ |
| 20 | गायत्रीजपः — Gayatri japa | ✓ (own text) | ✓ (own text) | ✓ (own text) |
| 21 | सन्ध्योपस्थानम् — Sandhyopasthana (worship of the Sun, standing) | ✓ (own text) | — | ✓ (own text) |
| 22 | दिग्देवतानमस्कारः — Digdevata namaskara (salutation to the directions) | ✓ | ✓ | ✓ |
| 23 | सन्ध्यादिदेवतानमस्कारः — Salutation to Sandhya and the deities | ✓ | ✓ | ✓ |
| 24 | गायत्र्युद्वासनम् — Gayatri udvasana (farewell) | ✓ | ✓ | ✓ |
| 25 | गोत्राभिवादनम् — Abhivadana (formal self-introduction) | ✓ | ✓ | ✓ |
| 26 | समर्पणम् — Samarpana (offering the worship to the Lord) | ✓ | ✓ (differs) | ✓ (differs) |
| 27 | स्थानप्रोक्षणम् — Sprinkling the place (where practised) | ✓ | ✓ | ✓ |

“—” means the step is not shown at that time; “differs” means the wording differs from the morning; “own text” means each time has its own version of the step.

## Morning (Pratah)

### 1. शुद्धिः — Preparation and purification

*Bathe before the morning sandhya; at midday and in the evening at least wash the feet, hands and face. Wear clean dry clothes (dhoti in kachche style and an upper cloth) with the sacred thread over the left shoulder, and apply bhasma or your family tilaka. Sit on a darbha mat, deer-skin or wooden plank in a clean place, facing east in the morning, east or north at midday and west (or north) in the evening. Keep ready a panchapatre of water with an uddharane for achamana, a second vessel of clean water for arghya and an empty plate to receive offered water; put on the darbha pavitra if your family wears one. Take a little water in the right palm, recite this verse and sprinkle it over your head and body.*

> अपवित्रः पवित्रो वा सर्वावस्थां गतोऽपि वा ।  
> यः स्मरेत्पुण्डरीकाक्षं स बाह्याभ्यन्तरः शुचिः ॥

### 2. श्रौताचमनम् — Shrauta achamana (with the names of the Vedas)

*Manuals speak of three kinds of achamana. (1) Shrauta or Vaidika achamana, with the names of the Vedas (ऋग्वेदाय स्वाहा …). (2) Achamana with the Gayatri and apo hi shtha, with twenty-four touches — the Devi Bhagavata and Andhra manuals call this one Shrauta, the Madhva commentary on the Sadachara-smriti calls it Smarta. (3) Keshavadi achamana with the twenty-four names of Vishnu — called Pauranika in the Devi Bhagavata and Vaishnava in the Madhva commentary. The Karnataka Rigvedi Smarta manuals (Kota Vasudeva Somayaji, Mysuru; Balkur Bhaskara Udupa) begin with this Shrauta achamana. Sip from the base of the palm (gokarna shape, water to cover a grain of urad) three times, with ॐ ऋग्वेदाय स्वाहा, ॐ यजुर्वेदाय स्वाहा and ॐ सामवेदाय स्वाहा. Then, with the names that follow, touch: the left and right palm (Atharvaveda, Itihasa-Purana); the lower and upper lip (Agni, Agni); the right and left eye with thumb and index finger (Surya, Chandra); the right and left nostril with thumb and middle finger (Vayu, Prana); the ears with thumb and ring finger (the directions); the arms with thumb and little finger (Indra); with all the fingers the feet (Prithivi), the knees (Antariksha), the lower body (Dyaus), the navel (Brahma), the heart (Vishnu) and the head (Shiva). Go through it twice. (Somayaji touches the nostrils before the eyes and ends with सदाशिवाय नमः.) Many families then also do the Keshavadi achamana; others do only the Keshavadi. Follow your family.*

> ॐ ऋग्वेदाय स्वाहा । ॐ यजुर्वेदाय स्वाहा । ॐ सामवेदाय स्वाहा ॥

> ॐ अथर्ववेदाय नमः । ॐ इतिहासपुराणेभ्यो नमः ।  
> ॐ अग्नये नमः । ॐ अग्नये नमः ।  
> ॐ सूर्याय नमः । ॐ चन्द्राय नमः ।  
> ॐ वायवे नमः । ॐ प्राणाय नमः ।  
> ॐ दिग्भ्यो नमः । ॐ दिग्भ्यो नमः ।  
> ॐ इन्द्राय नमः । ॐ इन्द्राय नमः ।  
> ॐ पृथिव्यै नमः । ॐ पृथिव्यै नमः ।  
> ॐ अन्तरिक्षाय नमः । ॐ अन्तरिक्षाय नमः ।  
> ॐ दिवे नमः । ॐ ब्रह्मणे नमः ।  
> ॐ विष्णवे नमः । ॐ शिवाय नमः ॥

### 3. गायत्र्याचमनम् — Achamana with the Gayatri and apo hi shtha

*Sip three times with the three padas of the Gayatri, each preceded by Om (some manuals add the vyahritis or svaha). Then, washing the hand in between: with the nine padas of apo hi shtha wash the left and right hands and touch the cheeks, the lips, the joined palms, the feet and the head; with the seven vyahritis (bhuh … satyam) touch the tip and the two sides of the nose, the two eyes and the two ears; with the three padas of the Gayatri the navel, the heart and the head; and with its shiras (apo jyoti …) the two shoulders — twenty-four places in all. The places vary slightly between manuals. This longer form is used where your manual or teacher prescribes it; most families today do the Keshavadi achamana.*

> ॐ तत्सवितुर्वरेण्यम् । भर्गो देवस्य धीमहि । धियो यो नः प्रचोदयात् ॥

> आपो हि ष्ठा मयोभुवः ।  
> ता न ऊर्जे दधातन ।  
> महे रणाय चक्षसे ॥

> यो वः शिवतमो रसः ।  
> तस्य भाजयतेह नः ।  
> उशतीरिव मातरः ॥

> तस्मा अरं गमाम वः ।  
> यस्य क्षयाय जिन्वथ ।  
> आपो जनयथा च नः ॥

> ॐ भूः । ॐ भुवः । ॐ स्वः । ॐ महः ।  
> ॐ जनः । ॐ तपः । ॐ सत्यम् ।  
> ॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।  
> धियो यो नः प्रचोदयात् ।  
> ॐ आपो ज्योती रसोऽमृतं ब्रह्म भूर्भुवः स्वरोम् ॥

### 4. आचमनम् — Keshavadi achamana (Pauranika) — twice

*Hold the right palm hollowed like a cow’s ear (gokarna), take water enough to cover a grain of black gram, and sip it three times without noise with Keshava, Narayana and Madhava. With the remaining names wash the hands and touch the lips, cheeks, eyes, nostrils, ears, navel, heart, head and shoulders, as you were taught (Smarta manuals follow the same names as the Madhva order, with small differences in the touches). At the start of sandhya go through the whole achamana twice; later, “achamana” means once. This is the Keshavadi (Pauranika) achamana, done after the Shrauta achamana by families who do both.*

> ॐ केशवाय स्वाहा ।  
> ॐ नारायणाय स्वाहा ।  
> ॐ माधवाय स्वाहा ॥

> ॐ गोविन्दाय नमः । ॐ विष्णवे नमः ।  
> ॐ मधुसूदनाय नमः । ॐ त्रिविक्रमाय नमः ।  
> ॐ वामनाय नमः । ॐ श्रीधराय नमः ।  
> ॐ हृषीकेशाय नमः । ॐ पद्मनाभाय नमः ।  
> ॐ दामोदराय नमः । ॐ सङ्कर्षणाय नमः ।  
> ॐ वासुदेवाय नमः । ॐ प्रद्युम्नाय नमः ।  
> ॐ अनिरुद्धाय नमः । ॐ पुरुषोत्तमाय नमः ।  
> ॐ अधोक्षजाय नमः । ॐ नारसिंहाय नमः ।  
> ॐ अच्युताय नमः । ॐ जनार्दनाय नमः ।  
> ॐ उपेन्द्राय नमः । ॐ हरये नमः ।  
> ॐ श्रीकृष्णाय नमः ॥

### 5. प्राणायामः — Pranayama (three times)

*Say the viniyoga line first, touching the head (rishi), the mouth (chandas) and the heart (devata). Then with the right hand close the right nostril with the thumb and the left nostril with the ring and little fingers, keeping the index and middle fingers folded. Breathe out through the right nostril, breathe in slowly through the left (puraka), close both and hold the breath (kumbhaka) while reciting the whole mantra mentally, then breathe out slowly through the right nostril (rechaka). Do this three times. Madhva Rigveda manuals print स्वः and स्वरोम्; some Smarta Rigveda manuals of Karnataka print सुवः / सुवरोम् as the Yajurvedins do — say it as your family does.*

> प्रणवस्य परब्रह्म ऋषिः । परमात्मा देवता ।  
> दैवी गायत्री छन्दः । प्राणायामे विनियोगः ॥

> ॐ भूः । ॐ भुवः । ॐ स्वः । ॐ महः ।  
> ॐ जनः । ॐ तपः । ॐ सत्यम् ।  
> ॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।  
> धियो यो नः प्रचोदयात् ।  
> ॐ आपो ज्योती रसोऽमृतं ब्रह्म भूर्भुवः स्वरोम् ॥

### 6. सङ्कल्पः — Sankalpa (resolve)

*Place the right palm over the left palm (some hold akshata) and rest them on the right thigh. Replace each अमुक (“such-and-such”) with today’s samvatsara, ayana, ritu, masa, paksha, tithi, weekday and nakshatra from the panchanga (see the panchanga card at the top); the place words are those used in Karnataka. The last line is for the time of day you chose. At the end let a ladle of water fall into the plate.*

> शुभे शोभने मुहूर्ते विष्णोराज्ञया प्रवर्तमानस्य  
> अद्य ब्रह्मणो द्वितीये परार्धे श्वेतवराहकल्पे वैवस्वतमन्वन्तरे  
> अष्टाविंशतितमे कलियुगे प्रथमपादे  
> जम्बूद्वीपे भरतवर्षे भरतखण्डे दण्डकारण्ये गोदावर्या दक्षिणे तीरे  
> शालिवाहनशके बौद्धावतारे रामक्षेत्रे  
> अस्मिन् वर्तमाने व्यावहारिके चान्द्रमानेन अमुकनामसंवत्सरे  
> अमुकायने अमुकऋतौ अमुकमासे अमुकपक्षे  
> अमुकतिथौ अमुकवासरे अमुकनक्षत्रे शुभयोगे शुभकरणे  
> एवंगुणविशेषणविशिष्टायां शुभतिथौ ।

> मम उपात्तसमस्तदुरितक्षयद्वारा  
> श्रीपरमेश्वरप्रीत्यर्थं

> प्रातःसन्ध्यामुपासिष्ये ॥

### 7. मार्जनम् — Marjana (sprinkling)

*Say the viniyoga. Take water in the uddharane held in the left hand and, with the thumb, ring and middle fingers of the right hand, sprinkle yourself at the end of each of the nine padas (lines), in this order (Karnataka Rigvedi manuals): the heart, below the chest, above the chest, the right side, the left side, the back, the face, the lower body and the whole body. Many families simply sprinkle the head at each pada.*

> आपो हि ष्ठेति तृचस्य सूक्तस्य अम्बरीषः सिन्धुद्वीप ऋषिः ।  
> आपो देवता । गायत्री छन्दः । मार्जने विनियोगः ॥

> आपो हि ष्ठा मयोभुवः ।  
> ता न ऊर्जे दधातन ।  
> महे रणाय चक्षसे ॥

> यो वः शिवतमो रसः ।  
> तस्य भाजयतेह नः ।  
> उशतीरिव मातरः ॥

> तस्मा अरं गमाम वः ।  
> यस्य क्षयाय जिन्वथ ।  
> आपो जनयथा च नः ॥

### 8. जलाभिमन्त्रणम् — Jalabhimantrana and prashana (sipping consecrated water)

*Take in the right palm, held like a cow’s ear, as much water as covers a grain of black gram (from the arghya vessel). Recite the mantra for this time of day over the water, and sip it at स्वाहा. Then do achamana once.*

> सूर्यश्चेत्यस्य मन्त्रस्य याज्ञवल्क्य उपनिषद् ऋषिः ।  
> सूर्यमन्युमन्युपतिरात्रयो देवताः ।  
> प्रकृतिश्छन्दः । जलाभिमन्त्रणे विनियोगः ॥

> सूर्यश्च मा मन्युश्च मन्युपतयश्च मन्युकृतेभ्यः ।  
> पापेभ्यो रक्षन्ताम् ।  
> यद्रात्रिया पापमकार्षम् ।  
> मनसा वाचा हस्ताभ्याम् ।  
> पद्भ्यामुदरेण शिश्ना ।  
> रात्रिस्तदवलुम्पतु ।  
> यत्किञ्च दुरितं मयि ।  
> इदमहं माममृतयोनौ ।  
> सूर्ये ज्योतिषि जुहोमि स्वाहा ॥

> आचम्य ॥

### 9. पुनर्मार्जनम् — Punar-marjana (second sprinkling, nine riks)

*Say the viniyoga, then sprinkle water on yourself as in Marjana while reciting the whole sukta of nine riks (Rigveda 10.9) and the closing rik सस्रुषीः…: sprinkle the head at the end of each pada (line). Then do achamana once. The Karnataka Smarta manuals end with the ninth rik; the Madhva and Andhra manuals add सस्रुषीः….*

> आपो हि ष्ठेति नवर्चस्य सूक्तस्य अम्बरीषः सिन्धुद्वीप ऋषिः ।  
> आपो देवता । गायत्री छन्दः । पञ्चमी वर्धमाना । सप्तमी प्रतिष्ठा ।  
> अन्त्ये द्वे अनुष्टुभौ । पुनर्मार्जने विनियोगः ॥

> आपो हि ष्ठा मयोभुवस्ता न ऊर्जे दधातन ।  
> महे रणाय चक्षसे ॥

> यो वः शिवतमो रसस्तस्य भाजयतेह नः ।  
> उशतीरिव मातरः ॥

> तस्मा अरं गमाम वो यस्य क्षयाय जिन्वथ ।  
> आपो जनयथा च नः ॥

> शं नो देवीरभिष्टय आपो भवन्तु पीतये ।  
> शं योरभि स्रवन्तु नः ॥

> ईशाना वार्याणां क्षयन्तीश्चर्षणीनाम् ।  
> अपो याचामि भेषजम् ॥

> अप्सु मे सोमो अब्रवीदन्तर्विश्वानि भेषजा ।  
> अग्निं च विश्वशम्भुवम् ॥

> आपः पृणीत भेषजं वरूथं तन्वे मम ।  
> ज्योक्च सूर्यं दृशे ॥

> इदमापः प्र वहत यत्किं च दुरितं मयि ।  
> यद्वाहमभिदुद्रोह यद्वा शेप उतानृतम् ॥

> आपो अद्यान्वचारिषं रसेन समगस्महि ।  
> पयस्वानग्न आ गहि तं मा सं सृज वर्चसा ॥

> सस्रुषीस्तदपसो दिवा नक्तं च सस्रुषीः ।  
> वरेण्यक्रतूरहमा देवीरवसे हुवे ॥

> आचम्य ॥

### 10. अघमर्षणम् — Aghamarshana (casting out sin)

*Take water in the right palm, held in the gokarna shape near the nose. Say the viniyoga and the three riks (Rigveda 10.190). Then, closing the left nostril, breathe out through the right nostril onto the water, thinking that the papa-purusha (the sin within) leaves you into it; throw the water away to your left onto the ground and do not look at it again. Then do achamana once.*

> ऋतं चेत्यस्य मन्त्रस्य माधुच्छन्दसोऽघमर्षण ऋषिः ।  
> भाववृत्तं देवता । अनुष्टुप् छन्दः । अघमर्षणे विनियोगः ॥

> ऋतं च सत्यं चाभीद्धात्तपसोऽध्यजायत ।  
> ततो रात्र्यजायत ततः समुद्रो अर्णवः ॥

> समुद्रादर्णवादधि संवत्सरो अजायत ।  
> अहोरात्राणि विदधद्विश्वस्य मिषतो वशी ॥

> सूर्याचन्द्रमसौ धाता यथापूर्वमकल्पयत् ।  
> दिवं च पृथिवीं चान्तरिक्षमथो स्वः ॥

> आचम्य ॥

### 11. अर्घ्यप्रदानम् — Arghya (offering water to the Sun)

*Morning: give the arghya before sunrise, standing, facing east and looking towards the Sun. Do achamana and one pranayama and say the sankalpa and viniyoga. Fill both joined palms with clean water from the arghya vessel, raise them to the height of the nose, recite the Gayatri with Om and the vyahritis and pour the water out over the fingertips — three arghyas. If the sun has already risen, say the prayaschitta sankalpa and give one more arghya with the rik यदद्य कच्च… (Rigveda 8.93.4; seer Sukaksha Angirasa, deity Indra, metre Gayatri). The Karnataka manuals give this prayaschitta arghya before the three; others after them.*

> आचम्य । प्राणानायम्य ॥

> पूर्वोक्तैवंगुणविशेषणविशिष्टायां शुभतिथौ  
> मम उपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं

> प्रातःसन्ध्यार्घ्यप्रदानं करिष्ये ॥

> गायत्र्या विश्वामित्र ऋषिः । सविता देवता । गायत्री छन्दः ।  
> अर्घ्यप्रदाने विनियोगः ॥

> ॐ भूर्भुवः स्वः ।  
> तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।  
> धियो यो नः प्रचोदयात् ॥

> कालातिक्रमदोषप्रायश्चित्तार्थं चतुर्थार्घ्यप्रदानं करिष्ये ॥

> यदद्य कच्च वृत्रहन्नुदगा अभि सूर्य ।  
> सर्वं तदिन्द्र ते वशे ॥

### 12. आत्मप्रदक्षिणा — Atma-pradakshina (turning round in meditation)

*Take a little water in the right hand, say असावादित्यो ब्रह्म — meditating that the Lord within the sun is Brahman — and turn round once clockwise where you stand, sprinkling the water around you. Then do achamana twice and sit down.*

> असावादित्यो ब्रह्म ॥

> आचम्य ॥

### 13. सन्ध्याङ्गतर्पणम् — Sandhyanga tarpana (Smarta, where practised)

*After the arghyas, sit down and pour water from the right hand into the plate once with each name. The Karnataka Rigvedi Smarta manuals (Somayaji, Balkur) give the first set — the three worlds, Gayatri, Savitri, Sarasvati, Narayana and Shiva — at every sandhya. Andhra manuals instead give the tarpana to Sandhya and her forms for the time of day (the lines that follow). Then do achamana.*

> ॐ भूस्तर्पयामि । ॐ भुवस्तर्पयामि । ॐ स्वस्तर्पयामि ।  
> ॐ भूर्भुवःस्वस्तर्पयामि । गायत्रीं तर्पयामि ।  
> सावित्रीं तर्पयामि । सरस्वतीं तर्पयामि ।  
> ॐ नमो नारायणाय नारायणं तर्पयामि ।  
> ॐ नमः शिवाय शिवं तर्पयामि ॥

> सन्ध्यां तर्पयामि । गायत्रीं तर्पयामि ।  
> ब्राह्मीं तर्पयामि । निमृजीं तर्पयामि ॥

> आचम्य ॥

### 14. भूतोच्चाटनम् आसनशुद्धिश्च — Bhutochchatana and asana-shuddhi (before japa)

*Before sitting for japa, recite अपसर्पन्तु… to send away obstructing beings, sprinkling a little water around you (some also throw a few grains of akshata). Then sprinkle the seat, touch it with the right hand, recite the prayer to the Earth, bow to the seat (अनन्तासनाय नमः, कूर्मासनाय नमः) and sit down firmly, facing east in the morning and at midday, west in the evening.*

> अपसर्पन्तु ये भूता ये भूता भुवि संस्थिताः ।  
> ये भूता विघ्नकर्तारस्ते नश्यन्तु शिवाज्ञया ॥  
> अपक्रामन्तु भूतानि पिशाचाः सर्वतो दिशम् ।  
> सर्वेषामविरोधेन ब्रह्मकर्म समारभे ॥

> पृथ्वीति मन्त्रस्य मेरुपृष्ठ ऋषिः । कूर्मो देवता ।  
> सुतलं छन्दः । आसने विनियोगः ॥

> पृथ्वि त्वया धृता लोका देवि त्वं विष्णुना धृता ।  
> त्वं च धारय मां देवि पवित्रं कुरु चासनम् ॥

> अनन्तासनाय नमः । कूर्मासनाय नमः ॥

### 15. गायत्र्यावाहनम् — Gayatri avahana (invocation)

*Seated, with folded hands, invoke Gayatri. Say the pranava viniyoga, then आयातु… and ओजोऽसि…, and the avahana names. With the last passage (rishi, chandas, devata and the limbs of Gayatri) touch, as you name them: the mouth (Agni), the head (Brahma), the heart (Vishnu), the tuft of hair (Rudra), and the feet / ground (Prithivi).*

> ओमित्येकाक्षरं ब्रह्म । अग्निर्देवता । ब्रह्म इत्यार्षम् ।  
> गायत्रं छन्दम् । परमात्मं सरूपम् । सायुज्यं विनियोगम् ॥

> आयातु वरदा देवी अक्षरं ब्रह्मसम्मितम् ।  
> गायत्री छन्दसां मातेदं ब्रह्म जुषस्व मे ॥  
> यदह्नात्कुरुते पापं तदह्नात्प्रतिमुच्यते ।  
> यद्रात्रियात्कुरुते पापं तद्रात्रियात्प्रतिमुच्यते ।  
> सर्ववर्णे महादेवि सन्ध्याविद्ये सरस्वति ॥

> ओजोऽसि सहोऽसि बलमसि भ्राजोऽसि ।  
> देवानां धामनामासि विश्वमसि विश्वायुः ।  
> सर्वमसि सर्वायुरभिभूरोम् ॥

> गायत्रीमावाहयामि । सावित्रीमावाहयामि ।  
> सरस्वतीमावाहयामि । छन्दर्षीनावाहयामि ।  
> श्रियमावाहयामि । बलमावाहयामि ॥

> गायत्र्या गायत्री छन्दः । विश्वामित्र ऋषिः । सविता देवता ।  
> अग्निर्मुखम् । ब्रह्मा शिरः । विष्णुर्हृदयम् । रुद्रः शिखा । पृथिवी योनिः ।  
> प्राणापानव्यानोदानसमाना सप्राणा श्वेतवर्णा साङ्ख्यायनसगोत्रा  
> गायत्री चतुर्विंशत्यक्षरा त्रिपदा षट्कुक्षिः पञ्चशीर्षोपनयने विनियोगः ॥

### 16. जपसङ्कल्पः — Pranayama and japa-sankalpa (Smarta)

*Do achamana and three pranayamas, then say this sankalpa with the hands on the right thigh and let a ladle of water fall into the plate.*

> प्राणानायम्य ॥

> पूर्वोक्तैवंगुणविशेषणविशिष्टायां शुभतिथौ  
> मम उपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं

> प्रातःसन्ध्याङ्ग यथाशक्ति गायत्रीमन्त्रजपं करिष्ये ॥

### 17. करन्यासः अङ्गन्यासश्च — Kara-nyasa and anga-nyasa (Smarta)

*Kara-nyasa: with each line touch the named finger with the thumb (the thumb with the index finger), and at the last line rub the palms and backs of the hands together. Anga-nyasa: touch the heart, the top of the head and the tuft; touch the shoulders crosswise (kavacha); touch the eyes (and the middle of the brow); for astraya phat circle the right hand round the head and clap; with the last line snap the fingers in the ten directions (digbandha). The same nyasa is repeated after japa, ending with “digvimokah” instead of “digbandhah”. Karnataka manuals read धीमहि ईश्वरात्मने and धियो यो नः सदाशिवात्मने in the fourth and fifth lines.*

> तत्सवितुः ब्रह्मात्मने अङ्गुष्ठाभ्यां नमः ।  
> वरेण्यं विष्ण्वात्मने तर्जनीभ्यां नमः ।  
> भर्गो देवस्य रुद्रात्मने मध्यमाभ्यां नमः ।  
> धीमहि सत्यात्मने अनामिकाभ्यां नमः ।  
> धियो यो नः ज्ञानात्मने कनिष्ठिकाभ्यां नमः ।  
> प्रचोदयात् सर्वात्मने करतलकरपृष्ठाभ्यां नमः ॥

> तत्सवितुः ब्रह्मात्मने हृदयाय नमः ।  
> वरेण्यं विष्ण्वात्मने शिरसे स्वाहा ।  
> भर्गो देवस्य रुद्रात्मने शिखायै वषट् ।  
> धीमहि सत्यात्मने कवचाय हुम् ।  
> धियो यो नः ज्ञानात्मने नेत्रत्रयाय वौषट् ।  
> प्रचोदयात् सर्वात्मने अस्त्राय फट् ।  
> भूर्भुवः स्वरोमिति दिग्बन्धः ॥

### 18. ध्यानम् — Gayatri dhyana and mudras

*Meditate on the five-faced Goddess Gayatri (मुक्ताविद्रुम…); many also recite ध्येयः सदा…. Those who were taught the twenty-four Gayatri mudras show them now, naming each, before beginning the japa; learn the gestures from your elders.*

> मुक्ताविद्रुमहेमनीलधवलच्छायैर्मुखैस्त्रीक्षणैः  
> युक्तामिन्दुनिबद्धरत्नमुकुटां तत्त्वार्थवर्णात्मिकाम् ।  
> गायत्रीं वरदाभयाङ्कुशकशाः शुभ्रं कपालं गदां  
> शङ्खं चक्रमथारविन्दयुगलं हस्तैर्वहन्तीं भजे ॥

> ध्येयः सदा सवितृमण्डलमध्यवर्ती  
> नारायणः सरसिजासनसन्निविष्टः ।  
> केयूरवान् मकरकुण्डलवान् किरीटी  
> हारी हिरण्मयवपुर्धृतशङ्खचक्रः ॥

> सुमुखं सम्पुटं चैव विततं विस्तृतं तथा ।  
> द्विमुखं त्रिमुखं चैव चतुःपञ्चमुखं तथा ॥  
> षण्मुखाधोमुखं चैव व्यापकाञ्जलिकं तथा ।  
> शकटं यमपाशं च ग्रथितं सम्मुखोन्मुखम् ॥  
> प्रलम्बं मुष्टिकं चैव मत्स्यः कूर्मो वराहकम् ।  
> सिंहाक्रान्तं महाक्रान्तं मुद्गरं पल्लवं तथा ॥  
> चतुर्विंशतिमुद्रा वै गायत्र्यां सुप्रतिष्ठिताः ।  
> इति मुद्रा न जानाति गायत्री निष्फला भवेत् ॥

### 19. गायत्रीजपः — Gayatri japa

*Morning: stand facing east until the sun has risen (after that you may sit), hands held near the navel. Recite the Gayatri 1008 times (best), 108 (middle), 28 or at least 10 times keeping count on the finger joints of the right hand, the counting hand covered with the upper cloth. Recite without moving the lips if you can, or in a whisper, dwelling on the meaning; pause briefly after every few recitations; do not talk, look around or touch the body below the navel. Many Smarta families then repeat the nyasa (ending with digvimokah) and show the eight closing mudras.*

> ॐ भूर्भुवः स्वः ।  
> तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।  
> धियो यो नः प्रचोदयात् ॥

### 20. सन्ध्योपस्थानम् — Sandhyopasthana (worship of the Sun, standing)

*Morning: stand with folded hands facing east. The Karnataka Rigvedi Smarta manuals (Somayaji, Balkur) recite the three riks to Mitra मित्रस्य…, मित्रो जनान्…, प्र स मित्र… (Rigveda 3.59.6, 1, 2). Tamil and Andhra manuals (Kamesvara Aiyar, stotranidhi) instead recite जातवेदसे…, तच्छंयोः… and नमो ब्रह्मणे…, with which you turn round clockwise three times. Recite what your family recites.*

> मित्रस्य चर्षणीधृतोऽवो देवस्य सानसि ।  
> द्युम्नं चित्रश्रवस्तमम् ॥

> मित्रो जनान्यातयति ब्रुवाणो मित्रो दाधार पृथिवीमुत द्याम् ।  
> मित्रः कृष्टीरनिमिषाभि चष्टे मित्राय हव्यं घृतवज्जुहोत ॥

> प्र स मित्र मर्तो अस्तु प्रयस्वान् यस्त आदित्य शिक्षति व्रतेन ।  
> न हन्यते न जीयते त्वोतो नैनमंहो अश्नोत्यन्तितो न दूरात् ॥

> जातवेदस इत्यस्य मन्त्रस्य कश्यप ऋषिः । दुर्गा जातवेदा अग्निर्देवता ।  
> त्रिष्टुप् छन्दः । सन्ध्योपस्थाने विनियोगः ॥

> जातवेदसे सुनवाम सोममरातीयतो नि दहाति वेदः ।  
> स नः पर्षदति दुर्गाणि विश्वा नावेव सिन्धुं दुरितात्यग्निः ॥

> तच्छंयोरित्यस्य मन्त्रस्य शंयुरृषिः । विश्वे देवा देवताः ।  
> शक्वरी छन्दः । शान्त्यर्थे जपे विनियोगः ॥

> तच्छंयोरावृणीमहे । गातुं यज्ञाय । गातुं यज्ञपतये ।  
> दैवी स्वस्तिरस्तु नः । स्वस्तिर्मानुषेभ्यः ।  
> ऊर्ध्वं जिगातु भेषजम् । शं नो अस्तु द्विपदे । शं चतुष्पदे ॥

> नमो ब्रह्मणे । नमो अस्त्वग्नये । नमः पृथिव्यै । नम ओषधीभ्यः ।  
> नमो वाचे । नमो वाचस्पतये । नमो विष्णवे महते करोमि ॥

### 21. दिग्देवतानमस्कारः — Digdevata namaskara (salutation to the directions)

*Standing, salute the guardians of the eight directions, turning to each — in the morning from the east (Indra), in the evening from the west (Varuna). Then turn round four times where you stand with भूरिदं प्रदक्षिणम्…, and recite one mantra facing each quarter: इन्द्र श्रेष्ठानि… to the east, यमाय धर्मराजाय… to the south, ध्रुवासु त्वासु… to the west and ऋतं सत्यम्… to the north (in the evening begin with the west). This is the form of the Karnataka Rigvedi manuals (Somayaji, Balkur; Somayaji says कुबेराय नमः for the north). Andhra and Tamil manuals instead salute the quarters with नमः प्राच्यै दिशे… (the last verse).*

> ॐ इन्द्राय नमः । ॐ अग्नये नमः । ॐ यमाय नमः । ॐ निरृतये नमः ।  
> ॐ वरुणाय नमः । ॐ वायवे नमः । ॐ सोमाय नमः । ॐ ईशानाय नमः ॥

> ॐ भूरिदं प्रदक्षिणम् । ॐ भुवरिदं प्रदक्षिणम् ।  
> ॐ सुवरिदं प्रदक्षिणम् । ॐ भूर्भुवस्सुवरिदं प्रदक्षिणम् ॥

> इन्द्र श्रेष्ठानि द्रविणानि धेहि चित्तिं दक्षस्य सुभगत्वमस्मे ।  
> पोषं रयीणामरिष्टिं तनूनां स्वाद्मानं वाचः सुदिनत्वमह्नाम् ॥

> यमाय धर्मराजाय मृत्यवे चान्तकाय च ।  
> वैवस्वताय कालाय सर्वभूतक्षयाय च ॥  
> औदुम्बराय दध्नाय नीलाय परमेष्ठिने ।  
> वृकोदराय चित्राय चित्रगुप्ताय वै नमः ॥

> ध्रुवासु त्वासु क्षितिषु क्षियन्तो व्यस्मत्पाशं वरुणो मुमोचत् ।  
> अवो वन्वाना अदितेरुपस्थाद्यूयं पात स्वस्तिभिः सदा नः ॥

> ऋतं सत्यं परं ब्रह्म पुरुषं कृष्णपिङ्गलम् ।  
> ऊर्ध्वरेतं विरूपाक्षं विश्वरूपाय वै नमो नमः ॥

> ॐ नमः प्राच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।  
> नमो दक्षिणायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।  
> नमः प्रतीच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।  
> नम उदीच्यै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।  
> नम ऊर्ध्वायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।  
> नमोऽधरायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ।  
> नमोऽवान्तरायै दिशे याश्च देवता एतस्यां प्रतिवसन्त्येताभ्यश्च नमः ॥

### 22. सन्ध्यादिदेवतानमस्कारः — Salutation to Sandhya and the deities

*Standing with folded hands, salute Sandhya and the other deities, the sages, teachers and parents. With कामोऽकार्षीत्… confess that desire and anger, not your true self, drove your wrongs. Then bow to Vasudeva and Sandhya, to Krishna as the friend of cows and Brahmanas, and take refuge in Durga.*

> ॐ सन्ध्यायै नमः । सावित्र्यै नमः । गायत्र्यै नमः । सरस्वत्यै नमः ।  
> सर्वाभ्यो देवताभ्यो नमः । मुनिभ्यो नमः । ऋषिभ्यो नमः ।  
> गुरुभ्यो नमः । मातृभ्यो नमः । पितृभ्यो नमः । आचार्येभ्यो नमः ।  
> कामोऽकार्षीन्नमो नमः । मन्युरकार्षीन्नमो नमः ॥

> ॐ नमो भगवते वासुदेवाय ।  
> यां सदा सर्वभूतानि स्थावराणि चराणि च ।  
> सायं प्रातर्नमस्यन्ति सा मा सन्ध्याभिरक्षतु ॥

> ब्रह्मण्यो देवकीपुत्रो ब्रह्मण्यो मधुसूदनः ।  
> ब्रह्मण्यः पुण्डरीकाक्षो ब्रह्मण्यो विष्णुरच्युतः ॥  
> नमो ब्रह्मण्यदेवाय गोब्राह्मणहिताय च ।  
> जगद्धिताय कृष्णाय गोविन्दाय नमो नमः ॥

> शिवाय विष्णुरूपाय शिवरूपाय विष्णवे ।  
> शिवस्य हृदयं विष्णुर्विष्णोश्च हृदयं शिवः ॥  
> यथा शिवमयो विष्णुरेवं विष्णुमयः शिवः ।  
> यथान्तरं न पश्यामि तथा मे स्वस्तिरायुषि ॥

> क्षीरेण स्नापिते देवि चन्दनेन विलेपिते ।  
> बिल्वपत्रार्चिते देवि दुर्गेऽहं शरणं गतः ॥

### 23. गायत्र्युद्वासनम् — Gayatri udvasana (farewell)

*With folded hands bid Gayatri farewell, then recite the verses offering all salutations to Keshava and bow.*

> उत्तमे शिखरे जाते भूम्यां पर्वतमूर्धनि ।  
> ब्राह्मणेभ्योऽभ्यनुज्ञाता गच्छ देवि यथासुखम् ॥

> आकाशात्पतितं तोयं यथा गच्छति सागरम् ।  
> सर्वदेवनमस्कारः केशवं प्रति गच्छति ॥

> वासनाद्वासुदेवस्य वासितं ते जगत्त्रयम् ।  
> सर्वभूतनिवासोऽसि वासुदेव नमोऽस्तु ते ॥

> नमोऽस्त्वनन्ताय सहस्रमूर्तये  
> सहस्रपादाक्षिशिरोरुबाहवे ।  
> सहस्रनाम्ने पुरुषाय शाश्वते  
> सहस्रकोटियुगधारिणे नमः ॥

### 24. गोत्राभिवादनम् — Abhivadana (formal self-introduction)

*Recite the peace prayer and blessing. Then, for abhivadana, hold the right ear with the left hand and the left ear with the right hand (arms crossed), and give your pravara (the names of the rishis of your gotra), gotra, sutra, shakha and name in place of the अमुक words; at the end bow and touch the ground. Do achamana twice afterwards. If you do not know your pravara, ask your elders or purohita; Kshatriyas say वर्मा and Vaishyas गुप्तः in place of शर्मा.*

> ॐ भद्रं नो अपि वातय मनः ।  
> ॐ शान्तिः शान्तिः शान्तिः ॥

> सर्वारिष्टशान्तिरस्तु । समस्तमङ्गलावाप्तिरस्तु ।  
> चतुःसागरपर्यन्तं गोब्राह्मणेभ्यः शुभं भवतु ॥

> अमुकप्रवरान्वित अमुकगोत्रः आश्वलायनसूत्रः  
> ऋक्शाखाध्यायी अमुकशर्माहं भो अभिवादये ॥

> आचम्य ॥

### 25. समर्पणम् — Samarpana (offering the worship to the Lord)

*Take water in the right hand and recite: यस्य स्मृत्या…, मन्त्रहीनं…, then the dedication for the time of day followed by your tradition’s wording, and pour the water into the plate. Do achamana twice. To make good any fault in mantra, tone or syllable, say the sankalpa and the three names Achyuta, Ananta, Govinda (three times). Close with कायेन वाचा….*

> यस्य स्मृत्या च नामोक्त्या तपःसन्ध्याक्रियादिषु ।  
> न्यूनं सम्पूर्णतां याति सद्यो वन्दे तमच्युतम् ॥

> मन्त्रहीनं क्रियाहीनं भक्तिहीनं जनार्दन ।  
> यत्कृतं तु मया देव परिपूर्णं तदस्तु मे ॥

> अनेन प्रातःसन्ध्यावन्दनेन

> भगवान् सर्वात्मकः प्रीयताम् ।  
> सर्वं श्रीपरमेश्वरार्पणमस्तु ॥

> आचम्य ॥

> मध्ये मन्त्रतन्त्रस्वरवर्णलोपदोषप्रायश्चित्तार्थं नामत्रयमन्त्रजपं करिष्ये ।  
> अच्युताय नमः । अनन्ताय नमः । गोविन्दाय नमः ।  
> अच्युतानन्तगोविन्देभ्यो नमः ॥

> कायेन वाचा मनसेन्द्रियैर्वा  
> बुद्ध्यात्मना वा प्रकृतेः स्वभावात् ।  
> करोमि यद्यत्सकलं परस्मै  
> नारायणायेति समर्पयामि ॥

### 26. स्थानप्रोक्षणम् — Sprinkling the place (where practised)

*Many Karnataka families finish by sprinkling a ladle of water on the place where they sat, reciting these two riks to Savitri (Rigveda 5.82.4–5), touching the moistened ground and applying a little of it to the forehead — it is said that if the place of japa is not sprinkled, Indra takes away its merit.*

> अद्या नो देव सवितः प्रजावत्सावीः सौभगम् ।  
> परा दुष्ष्वप्न्यं सुव ॥

> विश्वानि देव सवितर्दुरितानि परा सुव ।  
> यद्भद्रं तन्न आ सुव ॥

## Midday (Madhyahnika)

Steps worded exactly as in the morning are listed by name only.

### 1. शुद्धिः — Preparation and purification — *same as morning*

### 2. श्रौताचमनम् — Shrauta achamana (with the names of the Vedas) — *same as morning*

### 3. गायत्र्याचमनम् — Achamana with the Gayatri and apo hi shtha — *same as morning*

### 4. आचमनम् — Keshavadi achamana (Pauranika) — twice — *same as morning*

### 5. प्राणायामः — Pranayama (three times) — *same as morning*

### 6. सङ्कल्पः — Sankalpa (resolve)

*Place the right palm over the left palm (some hold akshata) and rest them on the right thigh. Replace each अमुक (“such-and-such”) with today’s samvatsara, ayana, ritu, masa, paksha, tithi, weekday and nakshatra from the panchanga (see the panchanga card at the top); the place words are those used in Karnataka. The last line is for the time of day you chose. At the end let a ladle of water fall into the plate.*

> शुभे शोभने मुहूर्ते विष्णोराज्ञया प्रवर्तमानस्य  
> अद्य ब्रह्मणो द्वितीये परार्धे श्वेतवराहकल्पे वैवस्वतमन्वन्तरे  
> अष्टाविंशतितमे कलियुगे प्रथमपादे  
> जम्बूद्वीपे भरतवर्षे भरतखण्डे दण्डकारण्ये गोदावर्या दक्षिणे तीरे  
> शालिवाहनशके बौद्धावतारे रामक्षेत्रे  
> अस्मिन् वर्तमाने व्यावहारिके चान्द्रमानेन अमुकनामसंवत्सरे  
> अमुकायने अमुकऋतौ अमुकमासे अमुकपक्षे  
> अमुकतिथौ अमुकवासरे अमुकनक्षत्रे शुभयोगे शुभकरणे  
> एवंगुणविशेषणविशिष्टायां शुभतिथौ ।

> मम उपात्तसमस्तदुरितक्षयद्वारा  
> श्रीपरमेश्वरप्रीत्यर्थं

> माध्याह्निकसन्ध्यामुपासिष्ये ॥

### 7. मार्जनम् — Marjana (sprinkling) — *same as morning*

### 8. जलाभिमन्त्रणम् — Jalabhimantrana and prashana (sipping consecrated water)

*Take in the right palm, held like a cow’s ear, as much water as covers a grain of black gram (from the arghya vessel). Recite the mantra for this time of day over the water, and sip it at स्वाहा. Then do achamana once.*

> आपः पुनन्तु पृथिवीं पृथिवी पूता पुनातु माम् ।  
> पुनन्तु ब्रह्मणस्पतिर्ब्रह्मपूता पुनातु माम् ।  
> यदुच्छिष्टमभोज्यं यद्वा दुश्चरितं मम ।  
> सर्वं पुनन्तु मामापोऽसतां च प्रतिग्रहं स्वाहा ॥

> आचम्य ॥

### 9. पुनर्मार्जनम् — Punar-marjana (second sprinkling, nine riks) — *same as morning*

### 10. अघमर्षणम् — Aghamarshana (casting out sin) — *same as morning*

### 11. अर्घ्यप्रदानम् — Arghya (offering water to the Sun)

*Midday: stand facing the Sun. Do achamana and one pranayama and say the sankalpa and viniyoga. Andhra manuals give the first arghya with हंसः शुचिषत्…, the second with आ कृष्णेन… and the third with the Gayatri; the Mysuru manual gives all three with आ कृष्णेन…; others give all three with the Gayatri. If noon is long past, say the prayaschitta sankalpa and give one more arghya with the rik प्रातर्देवीम्… (Rigveda 5.69.3).*

> आचम्य । प्राणानायम्य ॥

> पूर्वोक्तैवंगुणविशेषणविशिष्टायां शुभतिथौ  
> मम उपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं

> माध्याह्निकसन्ध्यार्घ्यप्रदानं करिष्ये ॥

> गायत्र्या विश्वामित्र ऋषिः । सविता देवता । गायत्री छन्दः ।  
> अर्घ्यप्रदाने विनियोगः ॥

> हंसः शुचिषद्वसुरन्तरिक्षसद्धोता वेदिषदतिथिर्दुरोणसत् ।  
> नृषद्वरसदृतसद्व्योमसदब्जा गोजा ऋतजा अद्रिजा ऋतम् ॥

> आ कृष्णेन रजसा वर्तमानो निवेशयन्नमृतं मर्त्यं च ।  
> हिरण्ययेन सविता रथेना देवो याति भुवनानि पश्यन् ॥

> ॐ भूर्भुवः स्वः ।  
> तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।  
> धियो यो नः प्रचोदयात् ॥

> कालातिक्रमदोषप्रायश्चित्तार्थं चतुर्थार्घ्यप्रदानं करिष्ये ॥

> प्रातर्देवीमदितिं जोहवीमि मध्यन्दिन उदिता सूर्यस्य ।  
> राये मित्रावरुणा सर्वतातेळे तोकाय तनयाय शं योः ॥

### 12. आत्मप्रदक्षिणा — Atma-pradakshina (turning round in meditation) — *same as morning*

### 13. सूर्योपस्थानम् — Suryopasthana at midday (before japa)

*Midday: stand facing the Sun with folded (or raised) hands and recite the sukta उदु त्यं… (Rigveda 1.50, thirteen riks) and चित्रं देवानाम्… (1.115, six riks), and finish with सविता पश्चातात्… (10.36.14). Rigvedins, both Madhva and Smarta, do the midday upasthana here, before the Gayatri japa and not after it (Kamesvara Aiyar; the Madhva manuals of the Uttaradi Matha, Gadag and Vijayapura; the Mysuru Smarta manual). Some recite only the thirteen riks of 1.50 (Kamesvara Aiyar); the Uttaradi manual uses आसत्येन…, उद्वयं…, उदु त्यं…, चित्रं…, तच्चक्षुः… and हंसः शुचिषत्… instead. Madhvas then say the abhivadana (next step) and sit for japa.*

> उदु त्यमिति त्रयोदशर्चस्य सूक्तस्य काण्वः प्रस्कण्व ऋषिः ।  
> सूर्यो देवता । नवाद्या गायत्र्यः । अन्त्याश्चतस्रोऽनुष्टुभः ।  
> सूर्योपस्थाने विनियोगः ॥

> उदु त्यं जातवेदसं देवं वहन्ति केतवः ।  
> दृशे विश्वाय सूर्यम् ॥

> अप त्ये तायवो यथा नक्षत्रा यन्त्यक्तुभिः ।  
> सूराय विश्वचक्षसे ॥

> अदृश्रमस्य केतवो वि रश्मयो जनाँ अनु ।  
> भ्राजन्तो अग्नयो यथा ॥

> तरणिर्विश्वदर्शतो ज्योतिष्कृदसि सूर्य ।  
> विश्वमा भासि रोचनम् ॥

> प्रत्यङ्देवानां विशः प्रत्यङ्ङुदेषि मानुषान् ।  
> प्रत्यङ्विश्वं स्वर्दृशे ॥

> येना पावक चक्षसा भुरण्यन्तं जनाँ अनु ।  
> त्वं वरुण पश्यसि ॥

> वि द्यामेषि रजस्पृथ्वहा मिमानो अक्तुभिः ।  
> पश्यञ्जन्मानि सूर्य ॥

> सप्त त्वा हरितो रथे वहन्ति देव सूर्य ।  
> शोचिष्केशं विचक्षण ॥

> अयुक्त सप्त शुन्ध्युवः सूरो रथस्य नप्त्यः ।  
> ताभिर्याति स्वयुक्तिभिः ॥

> उद्वयं तमसस्परि ज्योतिष्पश्यन्त उत्तरम् ।  
> देवं देवत्रा सूर्यमगन्म ज्योतिरुत्तमम् ॥

> उद्यन्नद्य मित्रमह आरोहन्नुत्तरां दिवम् ।  
> हृद्रोगं मम सूर्य हरिमाणं च नाशय ॥

> शुकेषु मे हरिमाणं रोपणाकासु दध्मसि ।  
> अथो हारिद्रवेषु मे हरिमाणं नि दध्मसि ॥

> उदगादयमादित्यो विश्वेन सहसा सह ।  
> द्विषन्तं मह्यं रन्धयन्मो अहं द्विषते रधम् ॥

> चित्रं देवानामुदगादनीकं चक्षुर्मित्रस्य वरुणस्याग्नेः ।  
> आप्रा द्यावापृथिवी अन्तरिक्षं सूर्य आत्मा जगतस्तस्थुषश्च ॥

> सूर्यो देवीमुषसं रोचमानां मर्यो न योषामभ्येति पश्चात् ।  
> यत्रा नरो देवयन्तो युगानि वितन्वते प्रति भद्राय भद्रम् ॥

> भद्रा अश्वा हरितः सूर्यस्य चित्रा एतग्वा अनुमाद्यासः ।  
> नमस्यन्तो दिव आ पृष्ठमस्थुः परि द्यावापृथिवी यन्ति सद्यः ॥

> तत्सूर्यस्य देवत्वं तन्महित्वं मध्या कर्तोर्विततं सं जभार ।  
> यदेदयुक्त हरितः सधस्थादाद्रात्री वासस्तनुते सिमस्मै ॥

> तन्मित्रस्य वरुणस्याभिचक्षे सूर्यो रूपं कृणुते द्योरुपस्थे ।  
> अनन्तमन्यद्रुशदस्य पाजः कृष्णमन्यद्धरितः सं भरन्ति ॥

> अद्या देवा उदिता सूर्यस्य निरंहसः पिपृता निरवद्यात् ।  
> तन्नो मित्रो वरुणो मामहन्तामदितिः सिन्धुः पृथिवी उत द्यौः ॥

> सविता पश्चातात्सविता पुरस्तात्सवितोत्तरात्तात्सविताधरात्तात् ।  
> सविता नः सुवतु सर्वतातिं सविता नो रासतां दीर्घमायुः ॥

### 14. सन्ध्याङ्गतर्पणम् — Sandhyanga tarpana (Smarta, where practised)

*After the arghyas, sit down and pour water from the right hand into the plate once with each name. The Karnataka Rigvedi Smarta manuals (Somayaji, Balkur) give the first set — the three worlds, Gayatri, Savitri, Sarasvati, Narayana and Shiva — at every sandhya. Andhra manuals instead give the tarpana to Sandhya and her forms for the time of day (the lines that follow). Then do achamana.*

> ॐ भूस्तर्पयामि । ॐ भुवस्तर्पयामि । ॐ स्वस्तर्पयामि ।  
> ॐ भूर्भुवःस्वस्तर्पयामि । गायत्रीं तर्पयामि ।  
> सावित्रीं तर्पयामि । सरस्वतीं तर्पयामि ।  
> ॐ नमो नारायणाय नारायणं तर्पयामि ।  
> ॐ नमः शिवाय शिवं तर्पयामि ॥

> सन्ध्यां तर्पयामि । सावित्रीं तर्पयामि ।  
> रौद्रीं तर्पयामि । निमृजीं तर्पयामि ॥

> आचम्य ॥

### 15. भूतोच्चाटनम् आसनशुद्धिश्च — Bhutochchatana and asana-shuddhi (before japa) — *same as morning*

### 16. गायत्र्यावाहनम् — Gayatri avahana (invocation) — *same as morning*

### 17. जपसङ्कल्पः — Pranayama and japa-sankalpa (Smarta)

*Do achamana and three pranayamas, then say this sankalpa with the hands on the right thigh and let a ladle of water fall into the plate.*

> प्राणानायम्य ॥

> पूर्वोक्तैवंगुणविशेषणविशिष्टायां शुभतिथौ  
> मम उपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं

> माध्याह्निकसन्ध्याङ्ग यथाशक्ति गायत्रीमन्त्रजपं करिष्ये ॥

### 18. करन्यासः अङ्गन्यासश्च — Kara-nyasa and anga-nyasa (Smarta) — *same as morning*

### 19. ध्यानम् — Gayatri dhyana and mudras — *same as morning*

### 20. गायत्रीजपः — Gayatri japa

*Midday: sit facing east or north, hands at the chest. Recite the Gayatri 1008 times (best), 108 (middle), 28 or at least 10 times keeping count on the finger joints of the right hand, the counting hand covered with the upper cloth. Recite without moving the lips if you can, or in a whisper, dwelling on the meaning; pause briefly after every few recitations; do not talk, look around or touch the body below the navel. Many Smarta families then repeat the nyasa (ending with digvimokah) and show the eight closing mudras.*

> ॐ भूर्भुवः स्वः ।  
> तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।  
> धियो यो नः प्रचोदयात् ॥

### 21. दिग्देवतानमस्कारः — Digdevata namaskara (salutation to the directions) — *same as morning*

### 22. सन्ध्यादिदेवतानमस्कारः — Salutation to Sandhya and the deities — *same as morning*

### 23. गायत्र्युद्वासनम् — Gayatri udvasana (farewell) — *same as morning*

### 24. गोत्राभिवादनम् — Abhivadana (formal self-introduction) — *same as morning*

### 25. समर्पणम् — Samarpana (offering the worship to the Lord)

*Take water in the right hand and recite: यस्य स्मृत्या…, मन्त्रहीनं…, then the dedication for the time of day followed by your tradition’s wording, and pour the water into the plate. Do achamana twice. To make good any fault in mantra, tone or syllable, say the sankalpa and the three names Achyuta, Ananta, Govinda (three times). Close with कायेन वाचा….*

> यस्य स्मृत्या च नामोक्त्या तपःसन्ध्याक्रियादिषु ।  
> न्यूनं सम्पूर्णतां याति सद्यो वन्दे तमच्युतम् ॥

> मन्त्रहीनं क्रियाहीनं भक्तिहीनं जनार्दन ।  
> यत्कृतं तु मया देव परिपूर्णं तदस्तु मे ॥

> अनेन माध्याह्निकसन्ध्यावन्दनेन

> भगवान् सर्वात्मकः प्रीयताम् ।  
> सर्वं श्रीपरमेश्वरार्पणमस्तु ॥

> आचम्य ॥

> मध्ये मन्त्रतन्त्रस्वरवर्णलोपदोषप्रायश्चित्तार्थं नामत्रयमन्त्रजपं करिष्ये ।  
> अच्युताय नमः । अनन्ताय नमः । गोविन्दाय नमः ।  
> अच्युतानन्तगोविन्देभ्यो नमः ॥

> कायेन वाचा मनसेन्द्रियैर्वा  
> बुद्ध्यात्मना वा प्रकृतेः स्वभावात् ।  
> करोमि यद्यत्सकलं परस्मै  
> नारायणायेति समर्पयामि ॥

### 26. स्थानप्रोक्षणम् — Sprinkling the place (where practised) — *same as morning*

## Evening (Sayam)

Steps worded exactly as in the morning are listed by name only.

### 1. शुद्धिः — Preparation and purification — *same as morning*

### 2. श्रौताचमनम् — Shrauta achamana (with the names of the Vedas) — *same as morning*

### 3. गायत्र्याचमनम् — Achamana with the Gayatri and apo hi shtha — *same as morning*

### 4. आचमनम् — Keshavadi achamana (Pauranika) — twice — *same as morning*

### 5. प्राणायामः — Pranayama (three times) — *same as morning*

### 6. सङ्कल्पः — Sankalpa (resolve)

*Place the right palm over the left palm (some hold akshata) and rest them on the right thigh. Replace each अमुक (“such-and-such”) with today’s samvatsara, ayana, ritu, masa, paksha, tithi, weekday and nakshatra from the panchanga (see the panchanga card at the top); the place words are those used in Karnataka. The last line is for the time of day you chose. At the end let a ladle of water fall into the plate.*

> शुभे शोभने मुहूर्ते विष्णोराज्ञया प्रवर्तमानस्य  
> अद्य ब्रह्मणो द्वितीये परार्धे श्वेतवराहकल्पे वैवस्वतमन्वन्तरे  
> अष्टाविंशतितमे कलियुगे प्रथमपादे  
> जम्बूद्वीपे भरतवर्षे भरतखण्डे दण्डकारण्ये गोदावर्या दक्षिणे तीरे  
> शालिवाहनशके बौद्धावतारे रामक्षेत्रे  
> अस्मिन् वर्तमाने व्यावहारिके चान्द्रमानेन अमुकनामसंवत्सरे  
> अमुकायने अमुकऋतौ अमुकमासे अमुकपक्षे  
> अमुकतिथौ अमुकवासरे अमुकनक्षत्रे शुभयोगे शुभकरणे  
> एवंगुणविशेषणविशिष्टायां शुभतिथौ ।

> मम उपात्तसमस्तदुरितक्षयद्वारा  
> श्रीपरमेश्वरप्रीत्यर्थं

> सायंसन्ध्यामुपासिष्ये ॥

### 7. मार्जनम् — Marjana (sprinkling) — *same as morning*

### 8. जलाभिमन्त्रणम् — Jalabhimantrana and prashana (sipping consecrated water)

*Take in the right palm, held like a cow’s ear, as much water as covers a grain of black gram (from the arghya vessel). Recite the mantra for this time of day over the water, and sip it at स्वाहा. Then do achamana once.*

> अग्निश्चेत्यस्य मन्त्रस्य याज्ञवल्क्य उपनिषद् ऋषिः ।  
> अग्निमन्युमन्युपतयोऽहश्च देवताः ।  
> प्रकृतिश्छन्दः । जलाभिमन्त्रणे विनियोगः ॥

> अग्निश्च मा मन्युश्च मन्युपतयश्च मन्युकृतेभ्यः ।  
> पापेभ्यो रक्षन्ताम् ।  
> यदह्ना पापमकार्षम् ।  
> मनसा वाचा हस्ताभ्याम् ।  
> पद्भ्यामुदरेण शिश्ना ।  
> अहस्तदवलुम्पतु ।  
> यत्किञ्च दुरितं मयि ।  
> इदमहं माममृतयोनौ ।  
> सत्ये ज्योतिषि जुहोमि स्वाहा ॥

> आचम्य ॥

### 9. पुनर्मार्जनम् — Punar-marjana (second sprinkling, nine riks) — *same as morning*

### 10. अघमर्षणम् — Aghamarshana (casting out sin) — *same as morning*

### 11. अर्घ्यप्रदानम् — Arghya (offering water to the Sun)

*Evening: give the arghya before sunset, sitting and facing west; let the water fall on the ground or a stone (not into a river). Do achamana and one pranayama and say the sankalpa and viniyoga. Recite the Gayatri with Om and the vyahritis and pour out the water from both joined palms — three arghyas. If the sun has already set, say the prayaschitta sankalpa and give one more arghya with the rik उद्घेदभि… (Rigveda 8.93.1); the Karnataka manuals give it before the three.*

> आचम्य । प्राणानायम्य ॥

> पूर्वोक्तैवंगुणविशेषणविशिष्टायां शुभतिथौ  
> मम उपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं

> सायंसन्ध्यार्घ्यप्रदानं करिष्ये ॥

> गायत्र्या विश्वामित्र ऋषिः । सविता देवता । गायत्री छन्दः ।  
> अर्घ्यप्रदाने विनियोगः ॥

> ॐ भूर्भुवः स्वः ।  
> तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।  
> धियो यो नः प्रचोदयात् ॥

> कालातिक्रमदोषप्रायश्चित्तार्थं चतुर्थार्घ्यप्रदानं करिष्ये ॥

> उद्घेदभि श्रुतामघं वृषभं नर्यापसम् ।  
> अस्तारमेषि सूर्य ॥

### 12. आत्मप्रदक्षिणा — Atma-pradakshina (turning round in meditation) — *same as morning*

### 13. सन्ध्याङ्गतर्पणम् — Sandhyanga tarpana (Smarta, where practised)

*After the arghyas, sit down and pour water from the right hand into the plate once with each name. The Karnataka Rigvedi Smarta manuals (Somayaji, Balkur) give the first set — the three worlds, Gayatri, Savitri, Sarasvati, Narayana and Shiva — at every sandhya. Andhra manuals instead give the tarpana to Sandhya and her forms for the time of day (the lines that follow). Then do achamana.*

> ॐ भूस्तर्पयामि । ॐ भुवस्तर्पयामि । ॐ स्वस्तर्पयामि ।  
> ॐ भूर्भुवःस्वस्तर्पयामि । गायत्रीं तर्पयामि ।  
> सावित्रीं तर्पयामि । सरस्वतीं तर्पयामि ।  
> ॐ नमो नारायणाय नारायणं तर्पयामि ।  
> ॐ नमः शिवाय शिवं तर्पयामि ॥

> सन्ध्यां तर्पयामि । सरस्वतीं तर्पयामि ।  
> वैष्णवीं तर्पयामि । निमृजीं तर्पयामि ॥

> आचम्य ॥

### 14. भूतोच्चाटनम् आसनशुद्धिश्च — Bhutochchatana and asana-shuddhi (before japa) — *same as morning*

### 15. गायत्र्यावाहनम् — Gayatri avahana (invocation) — *same as morning*

### 16. जपसङ्कल्पः — Pranayama and japa-sankalpa (Smarta)

*Do achamana and three pranayamas, then say this sankalpa with the hands on the right thigh and let a ladle of water fall into the plate.*

> प्राणानायम्य ॥

> पूर्वोक्तैवंगुणविशेषणविशिष्टायां शुभतिथौ  
> मम उपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं

> सायंसन्ध्याङ्ग यथाशक्ति गायत्रीमन्त्रजपं करिष्ये ॥

### 17. करन्यासः अङ्गन्यासश्च — Kara-nyasa and anga-nyasa (Smarta) — *same as morning*

### 18. ध्यानम् — Gayatri dhyana and mudras — *same as morning*

### 19. गायत्रीजपः — Gayatri japa

*Evening: sit facing west, hands at the level of the nose. Recite the Gayatri 1008 times (best), 108 (middle), 28 or at least 10 times keeping count on the finger joints of the right hand, the counting hand covered with the upper cloth. Recite without moving the lips if you can, or in a whisper, dwelling on the meaning; pause briefly after every few recitations; do not talk, look around or touch the body below the navel. Many Smarta families then repeat the nyasa (ending with digvimokah) and show the eight closing mudras.*

> ॐ भूर्भुवः स्वः ।  
> तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।  
> धियो यो नः प्रचोदयात् ॥

### 20. सन्ध्योपस्थानम् — Sandhyopasthana (worship of the Sun, standing)

*Evening: stand with folded hands facing west. The Karnataka Rigvedi Smarta manuals (Somayaji, Balkur) recite the two riks to Varuna इमं मे वरुण… and तत्त्वा यामि… (Rigveda 1.25.19, 1.24.11). Tamil and Andhra manuals instead recite जातवेदसे…, तच्छंयोः… and नमो ब्रह्मणे…, with which you turn round clockwise three times. Recite what your family recites.*

> इमं मे वरुण श्रुधी हवमद्या च मृळय ।  
> त्वामवस्युरा चके ॥

> तत्त्वा यामि ब्रह्मणा वन्दमानस्तदा शास्ते यजमानो हविर्भिः ।  
> अहेळमानो वरुणेह बोध्युरुशंस मा न आयुः प्र मोषीः ॥

> जातवेदस इत्यस्य मन्त्रस्य कश्यप ऋषिः । दुर्गा जातवेदा अग्निर्देवता ।  
> त्रिष्टुप् छन्दः । सन्ध्योपस्थाने विनियोगः ॥

> जातवेदसे सुनवाम सोममरातीयतो नि दहाति वेदः ।  
> स नः पर्षदति दुर्गाणि विश्वा नावेव सिन्धुं दुरितात्यग्निः ॥

> तच्छंयोरित्यस्य मन्त्रस्य शंयुरृषिः । विश्वे देवा देवताः ।  
> शक्वरी छन्दः । शान्त्यर्थे जपे विनियोगः ॥

> तच्छंयोरावृणीमहे । गातुं यज्ञाय । गातुं यज्ञपतये ।  
> दैवी स्वस्तिरस्तु नः । स्वस्तिर्मानुषेभ्यः ।  
> ऊर्ध्वं जिगातु भेषजम् । शं नो अस्तु द्विपदे । शं चतुष्पदे ॥

> नमो ब्रह्मणे । नमो अस्त्वग्नये । नमः पृथिव्यै । नम ओषधीभ्यः ।  
> नमो वाचे । नमो वाचस्पतये । नमो विष्णवे महते करोमि ॥

### 21. दिग्देवतानमस्कारः — Digdevata namaskara (salutation to the directions) — *same as morning*

### 22. सन्ध्यादिदेवतानमस्कारः — Salutation to Sandhya and the deities — *same as morning*

### 23. गायत्र्युद्वासनम् — Gayatri udvasana (farewell) — *same as morning*

### 24. गोत्राभिवादनम् — Abhivadana (formal self-introduction) — *same as morning*

### 25. समर्पणम् — Samarpana (offering the worship to the Lord)

*Take water in the right hand and recite: यस्य स्मृत्या…, मन्त्रहीनं…, then the dedication for the time of day followed by your tradition’s wording, and pour the water into the plate. Do achamana twice. To make good any fault in mantra, tone or syllable, say the sankalpa and the three names Achyuta, Ananta, Govinda (three times). Close with कायेन वाचा….*

> यस्य स्मृत्या च नामोक्त्या तपःसन्ध्याक्रियादिषु ।  
> न्यूनं सम्पूर्णतां याति सद्यो वन्दे तमच्युतम् ॥

> मन्त्रहीनं क्रियाहीनं भक्तिहीनं जनार्दन ।  
> यत्कृतं तु मया देव परिपूर्णं तदस्तु मे ॥

> अनेन सायंसन्ध्यावन्दनेन

> भगवान् सर्वात्मकः प्रीयताम् ।  
> सर्वं श्रीपरमेश्वरार्पणमस्तु ॥

> आचम्य ॥

> मध्ये मन्त्रतन्त्रस्वरवर्णलोपदोषप्रायश्चित्तार्थं नामत्रयमन्त्रजपं करिष्ये ।  
> अच्युताय नमः । अनन्ताय नमः । गोविन्दाय नमः ।  
> अच्युतानन्तगोविन्देभ्यो नमः ॥

> कायेन वाचा मनसेन्द्रियैर्वा  
> बुद्ध्यात्मना वा प्रकृतेः स्वभावात् ।  
> करोमि यद्यत्सकलं परस्मै  
> नारायणायेति समर्पयामि ॥

### 26. स्थानप्रोक्षणम् — Sprinkling the place (where practised) — *same as morning*

