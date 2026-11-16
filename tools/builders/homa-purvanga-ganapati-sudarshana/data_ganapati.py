from gen import V, OLD, S, OLDS, old

G = 'ganapati-homa'
NP = 'nitya-puja'
AS = 'ganapati-atharvashirsha'
M = {'tradition': ['madhva']}
SM = {'tradition': ['smarta']}

HEADER = '''
Mahaganapati Homa (Gana-homa): the whole rite in the order it is done, with the Common Procedure
(homa-purvanga) for the agnimukha and the uttaranga. Madhva and Smarta forms as variants.

Sources:
 - Smarta (S2): "Mahaganapati Homah", Mylapore Vedadhyayana Sabha (E. Balasubrahmanya Sastri,
   Janbunatha Sastri, N. V. Nataraja Dikshitar; publ. A. Subbaraman; English by Sundararajan
   Subramanian), transcribed in vishvasa/vedAH_yajuH (taittirIyam/sUtram/ApastambaH/gRhyam/
   paddhatiH/mailApura-vedAdhyayana-sabhA/ganapati_homa): the complete Tamil Nadu prayoga —
   Vighneshvara puja, sankalpa, kalasha and kumbha, Mahaganapati in the kumbha with nyasa,
   dhyana and prana-pratishtha, shodashopachara puja, Apastamba agnimukha, puja in the fire,
   the pradhana homa (mula mantra, gaṇānāṃ tvā, the Ganesha Gayatri, vakratuṇḍa, durva, laja,
   the two coconut halves with jātavedase and dhruvāsu tvā), jaya etc., purnahuti, upasthana,
   punah-puja, tarpana, udvasana, abhisheka, raksha, samarpana; the eight materials and counts;
   "doing homa with the mantras of the Atharvashirsha".
 - Smarta: the Tamil "Sri Ganapati Homam" (Sri Vedachalam Sastri collection, archive.org
   zrjf_sri-ganapati-homam-sri-vedachalam-sastri-collection): sankalpa, the namo vrātapataye
   mantra, coconut and honey, raksha (a second witness for these).
 - Madhva: Dr. H. Satyanarayanacharya, "Homa-Havana", Bangalore 2012, chapter "Gana-homa"
   (archive.org: 20230827_20230827_0721): the Apurita tantra of the Vinayakodaya, the eight
   materials and their verse, counting by coconuts, half for homa and half for naivedya,
   Vishvambhara within Ganapati.
 - Madhva: Tantrasara-sangraha 3.90-92 (Mysore 2003), the Vighnesha dhyana.
 - The Ganapati Atharvashirsha is copied from the app's text (collated there against
   stotranidhi, sa.wikisource and the Gita Press), each of its ten mantra sections ending in svaha.
 - Vedic verses checked against the Rigveda (GRETIL, Aufrecht): 1.24.11, 1.99.1, 2.23.1, 7.88.7,
   10.9.1-3, 10.59.6, 10.112.9; the Ganesha Gayatri tatpuruṣāya … is Mahanarayana Upanishad
   (Taittiriya Aranyaka 10.1); yo 'pāṃ puṣpam is Taittiriya Aranyaka 1.22, as in the app's
   Nitya Puja, from which the kalasha verses, the sixteen names, tambula and pradakshina verses
   are copied.
'''

SECTIONS = []
A = SECTIONS.append

s = OLDS(G, 0)
s['note'] = ('Ganapati is worshipped first in every undertaking, so the Gana-homa is done before long rites, at the start of anything new, on Chaturthi, and once a year in many homes; in Kerala and the coast at dawn, in Tamil Nadu after sunrise (Homa-Havana; Mylapore manual). Materials, the ashtadravya: modakas, puffed rice, beaten rice, roasted flour (sattu), sugarcane, coconut (Mylapore: in thin slices), sesame and bananas, mixed with jaggery, honey and ghee (and milk, Mylapore). Madhva (Homa-Havana): count by coconuts — one coconut, four oblations; 1, 3, 6, 12, 48, 108, 1008 or more coconuts; for each coconut eight modakas, eight handfuls each of puffed rice, beaten rice and roasted flour, eight pieces of sugarcane, eight bananas, a kudava of black sesame, half a kudte each of ghee and honey and jaggery as large as a coconut; half the mixture for homa, half for naivedya; the skins are thrown into the fire. Smarta (Mylapore): 28, 108 or 1008 offerings a day, or in fours (44, 444); a third of the mixture is kept for the main naivedya. Also keep a kalasha, a small image or coin for Mahaganapati, turmeric for a Ganapati image, durva grass, flowers, two coconuts for the shells, a silk cloth and coconut or fruit for the purnahuti. The Madhva form follows the Apurita tantra: no pranita vessel, no Brahma, no idhma, no chakshushi and no svishtakrit.')
s['noteKn'] = ('ಎಲ್ಲ ಕಾರ್ಯಗಳ ಆರಂಭದಲ್ಲಿ ಗಣಪತಿ ಪೂಜ್ಯ; ಆದ್ದರಿಂದ ದೀರ್ಘ ಕರ್ಮಗಳ ಮೊದಲು, ಹೊಸ ಕಾರ್ಯದ ಆರಂಭದಲ್ಲಿ, ಚತುರ್ಥಿಯಂದು, ಅನೇಕ ಮನೆಗಳಲ್ಲಿ ವರ್ಷಕ್ಕೊಮ್ಮೆ ಗಣಹೋಮ; ಕೇರಳ–ಕರಾವಳಿಯಲ್ಲಿ ಉಷಃಕಾಲದಲ್ಲಿ, ತಮಿಳುನಾಡಿನಲ್ಲಿ ಸೂರ್ಯೋದಯದ ನಂತರ (ಹೋಮ–ಹವನ; ಮೈಲಾಪುರ ಗ್ರಂಥ). ಅಷ್ಟದ್ರವ್ಯ: ಮೋದಕ, ಅರಳು, ಅವಲಕ್ಕಿ, ಅರಳಿಟ್ಟು (ಸಕ್ತು), ಕಬ್ಬು, ತೆಂಗಿನಕಾಯಿ (ಮೈಲಾಪುರ: ತೆಳು ಚೂರುಗಳು), ಎಳ್ಳು, ಬಾಳೆಹಣ್ಣು — ಬೆಲ್ಲ, ಜೇನು, ತುಪ್ಪ (ಮೈಲಾಪುರ: ಹಾಲು ಕೂಡ) ಸೇರಿಸಿ ಕಲಸಿ. ಮಾಧ್ವ (ಹೋಮ–ಹವನ): ಕಾಯಿ ಲೆಕ್ಕ — ಒಂದು ಕಾಯಿಗೆ ನಾಲ್ಕು ಆಹುತಿ; ೧, ೩, ೬, ೧೨, ೪೮, ೧೦೮, ೧೦೦೮ ಅಥವಾ ಹೆಚ್ಚು ಕಾಯಿಗಳು; ಒಂದು ಕಾಯಿಗೆ ಎಂಟು ಮೋದಕ, ಅರಳು–ಅವಲಕ್ಕಿ–ಅರಳಿಟ್ಟು ಎಂಟೆಂಟು ಮುಷ್ಟಿ, ಎಂಟು ಕಬ್ಬಿನ ತುಂಡು, ಎಂಟು ಬಾಳೆಹಣ್ಣು, ಒಂದು ಕುಡವ ಕರಿಎಳ್ಳು, ಅರ್ಧ ಕುಡ್ತೆ ತುಪ್ಪ, ಅಷ್ಟೇ ಜೇನು, ಕಾಯಿಯಷ್ಟು ಬೆಲ್ಲ; ಅರ್ಧ ಹೋಮಕ್ಕೆ, ಅರ್ಧ ನೈವೇದ್ಯಕ್ಕೆ; ಸಿಪ್ಪೆ–ಚಿಪ್ಪುಗಳನ್ನು ಅಗ್ನಿಗೆ. ಸ್ಮಾರ್ತ (ಮೈಲಾಪುರ): ದಿನಕ್ಕೆ ೨೮, ೧೦೮ ಅಥವಾ ೧೦೦೮ ಆಹುತಿ, ಅಥವಾ ನಾಲ್ಕರ ಕ್ರಮದಲ್ಲಿ (೪೪, ೪೪೪); ಮಿಶ್ರಣದ ಮೂರನೆಯ ಒಂದು ಭಾಗ ಪ್ರಧಾನ ನೈವೇದ್ಯಕ್ಕೆ. ಕಲಶ, ಮಹಾಗಣಪತಿಗೆ ಚಿಕ್ಕ ಪ್ರತಿಮೆ ಅಥವಾ ನಾಣ್ಯ, ಅರಿಶಿನದ ಗಣಪತಿ, ಗರಿಕೆ, ಹೂವು, ಚಿಪ್ಪಿಗಾಗಿ ತೆಂಗಿನಕಾಯಿ, ಪೂರ್ಣಾಹುತಿಗೆ ರೇಷ್ಮೆ ವಸ್ತ್ರ ಮತ್ತು ಕಾಯಿ/ಫಲ ಸಿದ್ಧಪಡಿಸಿ. ಮಾಧ್ವ ರೂಪ ಆಪೂರಿತ ತಂತ್ರದಂತೆ: ಪ್ರಣೀತಾ, ಬ್ರಹ್ಮ, ಇಧ್ಮ, ಚಕ್ಷುಷೀ, ಸ್ವಿಷ್ಟಕೃತ್ ಇಲ್ಲ.')
A(s)

# ---------------- Madhva: sankalpa
A(S('सङ्कल्पः', 'Ganapati smarana and the sankalpa',
    'Do achamana, pranayama and the deshakala as in the Common Procedure (section “Achamana, pranayama and the time and place”). Remember Ganapati with नि षु सीद…, then make the sankalpa of the Gana-homa, naming the number of coconuts. Let the water fall into the plate. Then set the kalasha as in the Common Procedure.',
    'ಸಾಮಾನ್ಯ ವಿಧಿಯಲ್ಲಿರುವಂತೆ ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ, ದೇಶಕಾಲ ಹೇಳಿ. “ನಿ ಷು ಸೀದ…” ಎಂದು ಗಣಪತಿಯನ್ನು ಸ್ಮರಿಸಿ, ಕಾಯಿಗಳ ಸಂಖ್ಯೆ ಹೇಳಿ ಗಣಹೋಮದ ಸಂಕಲ್ಪ ಮಾಡಿ; ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ. ನಂತರ ಸಾಮಾನ್ಯ ವಿಧಿಯಂತೆ ಕಲಶ ಸ್ಥಾಪನೆ.',
    [OLD(NP, 12, 0, when=None),
     V('यज्ञपुरुषान्तर्यामि श्रीभारतीरमणमुख्यप्राणान्तर्गत\nश्रीहरिणीपतिपरशुरामप्रेरणया तत्प्रीत्यर्थं\nगणपत्यन्तर्गतविश्वम्भरप्रीत्यर्थं निर्विघ्नतासिद्ध्यर्थम्\nअमुकसङ्ख्याकनारिकेलैः अष्टद्रव्यैः गणहोमाख्यं कर्म करिष्ये ।\nतदङ्गं स्थण्डिलोल्लेपनोल्लेखनाद्यग्निप्रतिष्ठापनं करिष्ये ॥',
       'Prompted by Sri Parashurama, Lord of Harini, who dwells within Mukhyaprana, beloved of Bharati, the inner ruler of the Yajnapurusha, and for his pleasure, for the pleasure of Vishvambhara within Ganapati and that the work may be free of obstacles, I shall perform the Gana-homa with the eight materials and so many coconuts; as its part I shall prepare the sthandila and install the fire. (The sankalpa of the Common Procedure with the name and count of the Gana-homa; Homa-Havana gives the count by coconuts and Vishvambhara within Ganapati.)',
       'ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ, ಯಜ್ಞಪುರುಷಾಂತರ್ಯಾಮಿ ಹರಿಣೀಪತಿ ಶ್ರೀಪರಶುರಾಮನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ, ಗಣಪತಿಯೊಳಗಿನ ವಿಶ್ವಂಭರನ ಪ್ರೀತಿಗಾಗಿ, ನಿರ್ವಿಘ್ನತೆಗಾಗಿ ಇಷ್ಟು ಕಾಯಿಗಳ ಅಷ್ಟದ್ರವ್ಯಗಳಿಂದ ಗಣಹೋಮವೆಂಬ ಕರ್ಮ ಮಾಡುತ್ತೇನೆ; ಅದರ ಅಂಗವಾಗಿ ಸ್ಥಂಡಿಲ ಸಂಸ್ಕಾರ, ಅಗ್ನಿಪ್ರತಿಷ್ಠೆ ಮಾಡುತ್ತೇನೆ. (ಗಣಹೋಮದ ಹೆಸರು–ಸಂಖ್ಯೆಯೊಡನೆ ಸಾಮಾನ್ಯ ವಿಧಿಯ ಸಂಕಲ್ಪ; ಕಾಯಿ ಲೆಕ್ಕ ಮತ್ತು ವಿಶ್ವಂಭರ ಹೋಮ–ಹವನದಿಂದ.)',
       'यज्ञपुरुष के अन्तर्यामी, भारतीरमण मुख्यप्राण में स्थित हरिणीपति श्रीपरशुराम की प्रेरणा से, उनकी प्रीति के लिए, गणपति में स्थित विश्वम्भर की प्रीति के लिए और निर्विघ्नता के लिए, इतने नारियलों के अष्टद्रव्यों से गणहोम नामक कर्म करूँगा; उसके अंग रूप में स्थण्डिल-संस्कार और अग्नि-स्थापन करूँगा।',
       'యజ్ఞపురుషాంతర్యామి, భారతీరమణ ముఖ్యప్రాణాంతర్గతుడైన హరిణీపతి శ్రీపరశురాముని ప్రేరణతో, ఆయన ప్రీతి కొరకు, గణపతిలోని విశ్వంభరుని ప్రీతి కొరకు, నిర్విఘ్నత కొరకు ఇన్ని కొబ్బరికాయల అష్టద్రవ్యాలతో గణహోమమనే కర్మ చేస్తాను; దాని అంగంగా స్థండిల సంస్కారం, అగ్నిప్రతిష్ఠ చేస్తాను.',
       'யஜ்ஞபுருஷனின் அந்தர்யாமியும், பாரதீரமணரான முக்யப்ராணருள் உள்ளவருமான ஹரிணீபதி ஸ்ரீ பரசுராமரின் தூண்டுதலால், அவர் ப்ரீதிக்காக, கணபதியுள் உள்ள விச்வம்பரரின் ப்ரீதிக்காக, இடையூறின்மைக்காக இத்தனை தேங்காய்களுடன் அஷ்டத்ரவ்யங்களால் கணஹோமம் என்ற கர்மத்தைச் செய்வேன்; அதன் அங்கமாக ஸ்தண்டில ஸம்ஸ்காரமும் அக்னி ப்ரதிஷ்டையும் செய்வேன்.')],
    when=M))

# ---------------- Smarta: Vighneshvara puja
A(S('विघ्नेश्वरपूजा', 'Vighneshvara puja (turmeric Ganapati)',
    'After snana, sandhyavandane and aupasana, wear the pavitra, light the lamp and bow to the elders. Sit with akshata in the hand, recite शुक्लाम्बरधरं… tapping the temples, and say the short sankalpa for the Vighneshvara puja. Make a small Ganapati of turmeric paste, invoke him into it with गणानां त्वा…, and worship him with the upacharas, offering akshata in place of clothes and ornaments, flowers with the sixteen names, a broken coconut and bananas as naivedya, betel, camphor, and pray. Those who do the homa every month may skip this puja (Mylapore manual).',
    'ಸ್ನಾನ, ಸಂಧ್ಯಾವಂದನೆ, ಔಪಾಸನ ಮುಗಿಸಿ ಪವಿತ್ರ ಧರಿಸಿ, ದೀಪ ಹಚ್ಚಿ, ಹಿರಿಯರಿಗೆ ನಮಸ್ಕರಿಸಿ. ಅಕ್ಷತೆ ಹಿಡಿದು ಕುಳಿತು “ಶುಕ್ಲಾಂಬರಧರಂ…” ಎಂದು ಹಣೆಯ ಪಕ್ಕ ತಟ್ಟಿಕೊಂಡು, ವಿಘ್ನೇಶ್ವರಪೂಜೆಯ ಸಂಕ್ಷಿಪ್ತ ಸಂಕಲ್ಪ ಮಾಡಿ. ಅರಿಶಿನದ ಚಿಕ್ಕ ಗಣಪತಿಯನ್ನು ಮಾಡಿ “ಗಣಾನಾಂ ತ್ವಾ…” ಎಂದು ಆವಾಹಿಸಿ, ಉಪಚಾರಗಳಿಂದ ಪೂಜಿಸಿ — ವಸ್ತ್ರ–ಆಭರಣಗಳ ಬದಲು ಅಕ್ಷತೆ, ಹದಿನಾರು ನಾಮಗಳಿಂದ ಹೂವು, ಒಡೆದ ಕಾಯಿ–ಬಾಳೆಹಣ್ಣು ನೈವೇದ್ಯ, ತಾಂಬೂಲ, ಕರ್ಪೂರ, ಪ್ರಾರ್ಥನೆ. ಪ್ರತಿ ತಿಂಗಳೂ ಹೋಮ ಮಾಡುವವರು ಈ ಪೂಜೆಯನ್ನು ಬಿಡಬಹುದು (ಮೈಲಾಪುರ ಗ್ರಂಥ).',
    [OLD(NP, 13, 0, when=None),
     V('ममोपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थं\nकरिष्यमाणस्य कर्मणः अविघ्नेन परिसमाप्त्यर्थम् आदौ विघ्नेश्वरपूजां करिष्ये ॥',
       'For the removal of all my accumulated sins and for the pleasure of the Supreme Lord, that the rite I am about to do may be completed without obstacle, I shall first worship Vighneshvara. (Mylapore manual.)',
       'ನನ್ನ ಸಂಚಿತ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ, ಮಾಡಲಿರುವ ಕರ್ಮವು ನಿರ್ವಿಘ್ನವಾಗಿ ಮುಗಿಯಲೆಂದು ಮೊದಲು ವಿಘ್ನೇಶ್ವರಪೂಜೆ ಮಾಡುತ್ತೇನೆ. (ಮೈಲಾಪುರ ಗ್ರಂಥ)',
       'मेरे संचित सब पापों के क्षय द्वारा परमेश्वर की प्रीति के लिए, किए जाने वाले कर्म की निर्विघ्न समाप्ति के लिए पहले विघ्नेश्वर-पूजा करूँगा।',
       'నా సంచిత పాపాల క్షయం ద్వారా పరమేశ్వరుని ప్రీతి కొరకు, చేయబోయే కర్మ నిర్విఘ్నంగా పూర్తి కావడానికి మొదట విఘ్నేశ్వర పూజ చేస్తాను.',
       'என் சேர்ந்த பாவங்கள் அனைத்தும் நீங்குவதன் மூலம் பரமேச்வரனின் ப்ரீதிக்காக, செய்யப்போகும் கர்மம் இடையூறின்றி முடிய முதலில் விக்னேச்வர பூஜை செய்வேன்.'),
     OLD(G, 4, 0, when=None),
     V('ॐ भूर्भुवः सुवरोम् । अस्मिन् हरिद्राबिम्बे विघ्नेश्वरं ध्यायामि । विघ्नेश्वरम् आवाहयामि ॥\nविघ्नेश्वराय नमः । आसनं समर्पयामि । पाद्यं समर्पयामि । अर्घ्यं समर्पयामि ।\nआचमनीयं समर्पयामि । स्नानं समर्पयामि । स्नानानन्तरम् आचमनीयं समर्पयामि ।\nवस्त्रार्थम् अक्षतान् समर्पयामि । उपवीतार्थम् अक्षतान् समर्पयामि । आभरणार्थम् अक्षतान् समर्पयामि ।\nगन्धान् धारयामि । गन्धोपरि हरिद्राकुङ्कुमं समर्पयामि । अक्षतान् समर्पयामि ।\nपुष्पमालां समर्पयामि । पुष्पैः पूजयामि ॥',
       'Om, earth, sky, heaven. I meditate on Vighneshvara in this turmeric image; I invoke Vighneshvara. Salutation to Vighneshvara: I offer a seat, water for the feet, water for the hands, water to sip, a bath, water to sip after the bath; akshata for clothes, for the sacred thread and for ornaments; I apply sandal paste, turmeric and kumkum on it, akshata, a garland; I worship with flowers.',
       'ಓಂ ಭೂರ್ಭುವಃ ಸುವರೋಮ್. ಈ ಅರಿಶಿನದ ಬಿಂಬದಲ್ಲಿ ವಿಘ್ನೇಶ್ವರನನ್ನು ಧ್ಯಾನಿಸುತ್ತೇನೆ, ಆವಾಹಿಸುತ್ತೇನೆ. ವಿಘ್ನೇಶ್ವರನಿಗೆ ನಮಸ್ಕಾರ: ಆಸನ, ಪಾದ್ಯ, ಅರ್ಘ್ಯ, ಆಚಮನ, ಸ್ನಾನ, ಸ್ನಾನಾನಂತರ ಆಚಮನ; ವಸ್ತ್ರ, ಉಪವೀತ, ಆಭರಣಗಳ ಬದಲು ಅಕ್ಷತೆ; ಗಂಧ, ಅದರ ಮೇಲೆ ಅರಿಶಿನ–ಕುಂಕುಮ, ಅಕ್ಷತೆ, ಹೂಮಾಲೆ ಅರ್ಪಿಸುತ್ತೇನೆ; ಹೂವುಗಳಿಂದ ಪೂಜಿಸುತ್ತೇನೆ.',
       'ॐ भूर्भुवः सुवरोम्। इस हल्दी की प्रतिमा में विघ्नेश्वर का ध्यान करता हूँ, आवाहन करता हूँ। विघ्नेश्वर को नमस्कार: आसन, पाद्य, अर्घ्य, आचमन, स्नान, स्नान के बाद आचमन; वस्त्र, उपवीत और आभूषण के स्थान पर अक्षत; गन्ध, उस पर हल्दी-कुंकुम, अक्षत, पुष्पमाला अर्पित करता हूँ; पुष्पों से पूजा करता हूँ।',
       'ఓం భూర్భువః సువరోమ్. ఈ పసుపు బింబంలో విఘ్నేశ్వరుని ధ్యానిస్తున్నాను, ఆవాహన చేస్తున్నాను. విఘ్నేశ్వరునికి నమస్కారం: ఆసనం, పాద్యం, అర్ఘ్యం, ఆచమనం, స్నానం, స్నానానంతర ఆచమనం; వస్త్ర, ఉపవీత, ఆభరణాలకు బదులు అక్షతలు; గంధం, దానిపై పసుపు కుంకుమ, అక్షతలు, పుష్పమాల సమర్పిస్తున్నాను; పుష్పాలతో పూజిస్తున్నాను.',
       'ஓம் பூர்புவஸ்ஸுவரோம். இந்த மஞ்சள் பிம்பத்தில் விக்னேச்வரரை தியானிக்கிறேன், ஆவாஹனம் செய்கிறேன். விக்னேச்வரருக்கு நமஸ்காரம்: ஆஸனம், பாத்யம், அர்க்யம், ஆசமனீயம், ஸ்நானம், ஸ்நானத்துக்குப் பின் ஆசமனீயம்; வஸ்த்ரம், உபவீதம், ஆபரணங்களுக்குப் பதிலாக அக்ஷதை; சந்தனம், அதன்மேல் மஞ்சள் குங்குமம், அக்ஷதை, புஷ்பமாலை ஸமர்ப்பிக்கிறேன்; புஷ்பங்களால் பூஜிக்கிறேன்.'),
     OLD(NP, 24, 0, when=None),
     V('धूपदीपार्थम् अक्षतान् समर्पयामि ।\nविघ्नेश्वराय नमः । नालिकेरखण्डद्वयं कदलीफलानि अमृतं सर्वं निवेदयामि ।\nकर्पूरताम्बूलं समर्पयामि । कर्पूरनीराजनं समर्पयामि ।\nमन्त्रपुष्पं समर्पयामि । स्वर्णपुष्पं समर्पयामि । समस्तोपचारान् समर्पयामि ॥',
       'I offer akshata for incense and lamp. Salutation to Vighneshvara: I offer the two halves of a coconut, bananas and all this nectar as naivedya; camphor and betel, the camphor flame, the mantra-flower, a golden flower (a coin), and all the honours. (Before the naivedya the place is sprinkled with the Gayatri and the pranahuti mantras are said, as in the main puja below.)',
       'ಧೂಪ–ದೀಪಗಳ ಬದಲು ಅಕ್ಷತೆ. ವಿಘ್ನೇಶ್ವರನಿಗೆ ನಮಸ್ಕಾರ: ಎರಡು ಕಾಯಿಹೋಳು, ಬಾಳೆಹಣ್ಣು, ಈ ಅಮೃತವನ್ನೆಲ್ಲ ನೈವೇದ್ಯವಾಗಿ; ಕರ್ಪೂರ–ತಾಂಬೂಲ, ಕರ್ಪೂರ ನೀರಾಜನ, ಮಂತ್ರಪುಷ್ಪ, ಸ್ವರ್ಣಪುಷ್ಪ (ನಾಣ್ಯ), ಸಮಸ್ತ ಉಪಚಾರಗಳನ್ನು ಅರ್ಪಿಸುತ್ತೇನೆ. (ನೈವೇದ್ಯಕ್ಕೆ ಮೊದಲು ಗಾಯತ್ರಿಯಿಂದ ಪ್ರೋಕ್ಷಣೆ, ಪ್ರಾಣಾಹುತಿ ಮಂತ್ರಗಳು — ಕೆಳಗಿನ ಮುಖ್ಯ ಪೂಜೆಯಂತೆ.)',
       'धूप-दीप के स्थान पर अक्षत। विघ्नेश्वर को नमस्कार: नारियल के दो खण्ड, केले और यह सब अमृत नैवेद्य रूप में; कर्पूर-ताम्बूल, कर्पूर-नीराजन, मन्त्रपुष्प, स्वर्णपुष्प (सिक्का) और सब उपचार अर्पित करता हूँ।',
       'ధూప దీపాలకు బదులు అక్షతలు. విఘ్నేశ్వరునికి నమస్కారం: కొబ్బరి రెండు చెక్కలు, అరటిపండ్లు, ఈ అమృతమంతా నైవేద్యంగా; కర్పూర తాంబూలం, కర్పూర నీరాజనం, మంత్రపుష్పం, స్వర్ణపుష్పం (నాణెం), సమస్త ఉపచారాలు సమర్పిస్తున్నాను.',
       'தூப தீபங்களுக்குப் பதிலாக அக்ஷதை. விக்னேச்வரருக்கு நமஸ்காரம்: தேங்காய் இரு மூடிகள், வாழைப்பழங்கள், இந்த அமுதம் அனைத்தையும் நைவேத்யமாக; கற்பூர தாம்பூலம், கற்பூர நீராஜனம், மந்த்ரபுஷ்பம், ஸ்வர்ணபுஷ்பம் (நாணயம்), எல்லா உபசாரங்களையும் ஸமர்ப்பிக்கிறேன்.'),
     V('वक्रतुण्ड महाकाय सूर्यकोटिसमप्रभ ।\nअविघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥',
       'O curved-trunked one of mighty body, bright as ten million suns, O god, make all my undertakings always free of obstacles.',
       'ಓ ವಕ್ರತುಂಡನೇ, ಮಹಾಕಾಯನೇ, ಕೋಟಿಸೂರ್ಯರ ಪ್ರಭೆಯುಳ್ಳವನೇ, ದೇವನೇ, ನನ್ನ ಎಲ್ಲ ಕಾರ್ಯಗಳನ್ನೂ ಸದಾ ನಿರ್ವಿಘ್ನಗೊಳಿಸು.',
       'हे वक्रतुण्ड, महाकाय, करोड़ों सूर्यों के समान प्रभा वाले देव, मेरे सब कार्यों में सदा निर्विघ्नता करो।',
       'ఓ వక్రతుండా, మహాకాయా, కోటి సూర్యుల కాంతి గలవాడా, దేవా, నా అన్ని కార్యాలనూ ఎల్లప్పుడూ నిర్విఘ్నం చేయి.',
       'வளைந்த துதிக்கையனே, பேருடலோனே, கோடி சூரியர் ஒளியோனே, தேவனே, என் எல்லாச் செயல்களையும் எப்போதும் இடையூறின்றிச் செய்வாயாக.'),
     V('सुमुखश्चैकदन्तश्च कपिलो गजकर्णकः ।\nलम्बोदरश्च विकटो विघ्नराजो विनायकः ॥\nधूमकेतुर्गणाध्यक्षः फालचन्द्रो गजाननः ।\nवक्रतुण्डः शूर्पकर्णो हेरम्बः स्कन्दपूर्वजः ॥\nषोडशैतानि नामानि यः पठेच्छृणुयादपि ।\nविद्यारम्भे विवाहे च प्रवेशे निर्गमे तथा ।\nसङ्ग्रामे सर्वकार्येषु विघ्नस्तस्य न जायते ॥',
       'Sumukha, Ekadanta, Kapila, Gajakarnaka, Lambodara, Vikata, Vighnaraja, Vinayaka, Dhumaketu, Ganadhyaksha, Phalachandra, Gajanana, Vakratunda, Shurpakarna, Heramba and Skandapurvaja: whoever reads or hears these sixteen names at the start of learning, at a wedding, on entering or leaving, in battle and in every undertaking meets no obstacle.',
       'ಸುಮುಖ, ಏಕದಂತ, ಕಪಿಲ, ಗಜಕರ್ಣಕ, ಲಂಬೋದರ, ವಿಕಟ, ವಿಘ್ನರಾಜ, ವಿನಾಯಕ, ಧೂಮಕೇತು, ಗಣಾಧ್ಯಕ್ಷ, ಫಾಲಚಂದ್ರ, ಗಜಾನನ, ವಕ್ರತುಂಡ, ಶೂರ್ಪಕರ್ಣ, ಹೇರಂಬ, ಸ್ಕಂದಪೂರ್ವಜ — ಈ ಹದಿನಾರು ನಾಮಗಳನ್ನು ವಿದ್ಯಾರಂಭ, ವಿವಾಹ, ಪ್ರವೇಶ, ನಿರ್ಗಮ, ಯುದ್ಧ ಮತ್ತು ಎಲ್ಲ ಕಾರ್ಯಗಳಲ್ಲಿ ಓದುವವನಿಗೂ ಕೇಳುವವನಿಗೂ ವಿಘ್ನವಾಗುವುದಿಲ್ಲ.',
       'सुमुख, एकदन्त, कपिल, गजकर्णक, लम्बोदर, विकट, विघ्नराज, विनायक, धूमकेतु, गणाध्यक्ष, फालचन्द्र, गजानन, वक्रतुण्ड, शूर्पकर्ण, हेरम्ब, स्कन्दपूर्वज — जो ये सोलह नाम विद्यारम्भ, विवाह, प्रवेश, प्रस्थान, संग्राम और सब कार्यों में पढ़ता या सुनता है, उसे विघ्न नहीं होता।',
       'సుముఖ, ఏకదంత, కపిల, గజకర్ణక, లంబోదర, వికట, విఘ్నరాజ, వినాయక, ధూమకేతు, గణాధ్యక్ష, ఫాలచంద్ర, గజానన, వక్రతుండ, శూర్పకర్ణ, హేరంబ, స్కందపూర్వజ — ఈ పదహారు నామాలను విద్యారంభం, వివాహం, ప్రవేశం, నిర్గమనం, యుద్ధం, అన్ని కార్యాలలో చదివేవానికి, వినేవానికి విఘ్నం కలగదు.',
       'ஸுமுக, ஏகதந்த, கபில, கஜகர்ணக, லம்போதர, விகட, விக்னராஜ, விநாயக, தூமகேது, கணாத்யக்ஷ, பாலசந்த்ர, கஜானன, வக்ரதுண்ட, சூர்ப்பகர்ண, ஹேரம்ப, ஸ்கந்தபூர்வஜ — இந்தப் பதினாறு நாமங்களை வித்யாரம்பம், விவாஹம், நுழைதல், புறப்படுதல், போர், எல்லாச் செயல்களிலும் படிப்பவனுக்கும் கேட்பவனுக்கும் இடையூறு உண்டாவதில்லை.')],
    when=SM))

A(S('सङ्कल्पः', 'Sankalpa of the Mahaganapati homa',
    'Sit on darbha with darbha in the hand, remember Ganapati, do pranayama, say the deshakala (Common Procedure) and then this sankalpa with your nakshatra, rashi and name; the brahmins, asked for permission (anujna) with the same words, answer योग्यतासिद्धिरस्तु. Then move the turmeric Ganapati a little to the north (अस्माद्धरिद्राबिम्बाद्विघ्नेश्वरं यथास्थानं प्रतिष्ठापयामि), give a dakshina for the nine planets, choose the acharya (मया सङ्कल्पितमहागणपतिहोमकर्मणि सकलकर्म कर्तुम् आचार्यं त्वां वृणे) and the assisting brahmins (Mylapore manual).',
    'ದರ್ಭೆಯ ಮೇಲೆ ಕುಳಿತು ಕೈಯಲ್ಲಿ ದರ್ಭೆ ಧರಿಸಿ, ಗಣಪತಿಸ್ಮರಣೆ, ಪ್ರಾಣಾಯಾಮ, ದೇಶಕಾಲ (ಸಾಮಾನ್ಯ ವಿಧಿ) ಹೇಳಿ, ನಂತರ ನಿಮ್ಮ ನಕ್ಷತ್ರ, ರಾಶಿ, ಹೆಸರಿನೊಡನೆ ಈ ಸಂಕಲ್ಪ ಮಾಡಿ; ಇದೇ ಮಾತುಗಳಿಂದ ಅನುಜ್ಞೆ ಕೇಳಿದಾಗ ಬ್ರಾಹ್ಮಣರು “ಯೋಗ್ಯತಾಸಿದ್ಧಿರಸ್ತು” ಎನ್ನುತ್ತಾರೆ. ನಂತರ ಅರಿಶಿನದ ಗಣಪತಿಯನ್ನು ಸ್ವಲ್ಪ ಉತ್ತರಕ್ಕೆ ಸರಿಸಿ (ಅಸ್ಮಾದ್ಧರಿದ್ರಾಬಿಂಬಾದ್ವಿಘ್ನೇಶ್ವರಂ ಯಥಾಸ್ಥಾನಂ ಪ್ರತಿಷ್ಠಾಪಯಾಮಿ), ನವಗ್ರಹಗಳಿಗೆ ದಕ್ಷಿಣೆ ಕೊಟ್ಟು, ಆಚಾರ್ಯವರಣ (ಮಯಾ ಸಂಕಲ್ಪಿತ ಮಹಾಗಣಪತಿಹೋಮಕರ್ಮಣಿ ಸಕಲಕರ್ಮ ಕರ್ತುಮ್ ಆಚಾರ್ಯಂ ತ್ವಾಂ ವೃಣೇ) ಮತ್ತು ಸಹಾಯಕ ಬ್ರಾಹ್ಮಣರ ವರಣ ಮಾಡಿ (ಮೈಲಾಪುರ ಗ್ರಂಥ).',
    [V('ममोपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थम्\nअमुकनक्षत्रे अमुकराशौ जातस्य अमुकशर्मणः मम सहकुटुम्बस्य\nक्षेमस्थैर्यवीर्यविजयायुरारोग्यैश्वर्याभिवृद्ध्यर्थं धनधान्यसमृद्ध्यर्थं सर्वत्र विजयाप्त्यर्थं\nसकलविधारिष्टनिवृत्त्यर्थं समस्तसन्मङ्गलाभिवृद्ध्यर्थं महागणपतिप्रसादसिद्ध्यर्थं\nमहागणपतिप्रसादेन सकलबाधानिवृत्तिद्वारा चिन्तितमनोरथावाप्त्यर्थं सर्वाभीष्टसिद्ध्यर्थम्\nनालिकेरादिद्रव्यैः यथासम्भवं यथामति मूलमन्त्रेण श्रीमहागणपतिहोमाख्यं कर्म करिष्ये ।\nतदङ्गं कलशादिपूजां करिष्ये ॥',
       'For the removal of all my sins and the pleasure of the Supreme Lord; for myself, so-and-so, born in such a nakshatra and rashi, and my family: for the increase of well-being, steadiness, valour, victory, long life, health and prosperity, for plenty of wealth and grain, for victory everywhere, for the removal of every kind of misfortune, for the increase of all good things, for the grace of Mahaganapati and, by his grace, for the removal of all hindrances and the fulfilment of the wishes in my mind and of all desires: I shall perform the rite called the Mahaganapati homa with coconut and the other materials, as far as I can and as I know, with the mula mantra; as its part I shall worship the kalasha. (Mylapore manual; the Tamil Ganapati Homam has the same in brief.)',
       'ನನ್ನ ಪಾಪಕ್ಷಯದ ಮೂಲಕ ಪರಮೇಶ್ವರಪ್ರೀತಿಗಾಗಿ; ಇಂತಹ ನಕ್ಷತ್ರ–ರಾಶಿಯಲ್ಲಿ ಜನಿಸಿದ ಇಂತಹ ಹೆಸರಿನ ನನಗೂ ನನ್ನ ಕುಟುಂಬಕ್ಕೂ ಕ್ಷೇಮ, ಸ್ಥೈರ್ಯ, ವೀರ್ಯ, ವಿಜಯ, ಆಯುಸ್ಸು, ಆರೋಗ್ಯ, ಐಶ್ವರ್ಯಗಳ ಅಭಿವೃದ್ಧಿಗಾಗಿ, ಧನಧಾನ್ಯ ಸಮೃದ್ಧಿಗಾಗಿ, ಎಲ್ಲೆಡೆ ವಿಜಯಕ್ಕಾಗಿ, ಎಲ್ಲ ಬಗೆಯ ಅರಿಷ್ಟ ನಿವಾರಣೆಗಾಗಿ, ಸಮಸ್ತ ಮಂಗಳಾಭಿವೃದ್ಧಿಗಾಗಿ, ಮಹಾಗಣಪತಿ ಪ್ರಸಾದಕ್ಕಾಗಿ, ಅವನ ಪ್ರಸಾದದಿಂದ ಎಲ್ಲ ಬಾಧೆಗಳ ನಿವಾರಣೆಯ ಮೂಲಕ ಮನಸ್ಸಿನ ಇಷ್ಟಾರ್ಥ ಸಿದ್ಧಿಗಾಗಿ, ಸರ್ವಾಭೀಷ್ಟ ಸಿದ್ಧಿಗಾಗಿ ತೆಂಗಿನಕಾಯಿ ಮುಂತಾದ ದ್ರವ್ಯಗಳಿಂದ ಯಥಾಶಕ್ತಿ ಯಥಾಮತಿ ಮೂಲಮಂತ್ರದಿಂದ ಶ್ರೀಮಹಾಗಣಪತಿ ಹೋಮವೆಂಬ ಕರ್ಮ ಮಾಡುತ್ತೇನೆ; ಅದರ ಅಂಗವಾಗಿ ಕಲಶಾದಿ ಪೂಜೆ ಮಾಡುತ್ತೇನೆ. (ಮೈಲಾಪುರ ಗ್ರಂಥ)',
       'मेरे सब पापों के क्षय द्वारा परमेश्वर की प्रीति के लिए; अमुक नक्षत्र और राशि में जन्मे अमुक नाम वाले मेरे और मेरे परिवार के क्षेम, स्थैर्य, वीर्य, विजय, आयु, आरोग्य और ऐश्वर्य की वृद्धि के लिए, धन-धान्य समृद्धि के लिए, सर्वत्र विजय के लिए, सब प्रकार के अरिष्टों के निवारण के लिए, सब मंगलों की वृद्धि के लिए, महागणपति के प्रसाद के लिए और उनके प्रसाद से सब बाधाओं के निवारण द्वारा मनोरथों और सब अभीष्टों की सिद्धि के लिए नारियल आदि द्रव्यों से यथाशक्ति यथामति मूलमन्त्र द्वारा श्रीमहागणपति-होम नामक कर्म करूँगा; उसके अंग रूप में कलश आदि की पूजा करूँगा।',
       'నా పాపక్షయం ద్వారా పరమేశ్వర ప్రీతి కొరకు; ఫలానా నక్షత్ర రాశులలో జన్మించిన ఫలానా పేరుగల నాకు, నా కుటుంబానికి క్షేమం, స్థైర్యం, వీర్యం, విజయం, ఆయువు, ఆరోగ్యం, ఐశ్వర్యాల అభివృద్ధి కొరకు, ధనధాన్య సమృద్ధి కొరకు, సర్వత్ర విజయం కొరకు, అన్ని విధాల అరిష్ట నివారణ కొరకు, సమస్త మంగళాభివృద్ధి కొరకు, మహాగణపతి ప్రసాదం కొరకు, ఆయన ప్రసాదంతో అన్ని బాధల నివారణ ద్వారా మనోరథాలు, సర్వాభీష్టాలు సిద్ధించడం కొరకు కొబ్బరి మొదలైన ద్రవ్యాలతో యథాశక్తి యథామతి మూలమంత్రంతో శ్రీమహాగణపతి హోమమనే కర్మ చేస్తాను; దాని అంగంగా కలశాది పూజ చేస్తాను.',
       'என் பாவங்கள் நீங்குவதன் மூலம் பரமேச்வர ப்ரீதிக்காக; இன்ன நட்சத்திரம் ராசியில் பிறந்த இன்ன பெயருடைய எனக்கும் என் குடும்பத்துக்கும் க்ஷேமம், ஸ்தைர்யம், வீர்யம், விஜயம், ஆயுள், ஆரோக்யம், ஐச்வர்யம் வளர, தனதான்ய ஸம்ருத்தி பெற, எங்கும் வெற்றி பெற, எல்லாவித அரிஷ்டங்களும் நீங்க, எல்லா மங்கலங்களும் பெருக, மஹாகணபதியின் அருள் பெற, அவர் அருளால் எல்லா இடையூறுகளும் நீங்கி மனோரதங்களும் எல்லா விருப்பங்களும் நிறைவேற, தேங்காய் முதலிய த்ரவ்யங்களால் இயன்றவரை அறிந்தவரை மூலமந்திரத்தால் ஸ்ரீ மஹாகணபதி ஹோமம் என்ற கர்மத்தைச் செய்வேன்; அதன் அங்கமாக கலசாதி பூஜை செய்வேன்.')],
    when=SM))

# Kalasha and Mahaganapati in the kumbha (Smarta)
A(S('कलशपूजा कुम्भस्थापनं च', 'Kalasha puja and setting up the kumbha',
    'Purify a small vessel of water with the kalasha verses and the bell verse and sprinkle yourself and the materials. On a square washed with cow dung spread paddy, rice, black gram and sesame, draw a lotus, lay darbha with tips east, and set the kumbha (gold, silver, copper, brass or pancaloha); fill it with water, put in a coin, a kurcha, mango leaves and a turmeric-smeared coconut, touch it and invite Varuna with इमं मे वरुण… and तत्त्वा यामि… (Mylapore manual; it also gives the lines of the base and the filling with their Vedic formulas, which the purohita says).',
    'ಕಲಶ ಶ್ಲೋಕಗಳು ಮತ್ತು ಘಂಟಾಶ್ಲೋಕದಿಂದ ಚಿಕ್ಕ ಪಾತ್ರೆಯ ನೀರನ್ನು ಶುದ್ಧಗೊಳಿಸಿ ತನಗೂ ದ್ರವ್ಯಗಳಿಗೂ ಪ್ರೋಕ್ಷಿಸಿ. ಗೋಮಯದಿಂದ ಸಾರಿಸಿದ ಚೌಕದಲ್ಲಿ ಭತ್ತ, ಅಕ್ಕಿ, ಉದ್ದು, ಎಳ್ಳು ಹರಡಿ, ಪದ್ಮ ಬರೆದು, ತುದಿ ಪೂರ್ವಕ್ಕಿರುವ ದರ್ಭೆ ಹಾಸಿ, ಕುಂಭ (ಚಿನ್ನ, ಬೆಳ್ಳಿ, ತಾಮ್ರ, ಹಿತ್ತಾಳೆ ಅಥವಾ ಪಂಚಲೋಹ) ಇಡಿ; ನೀರು ತುಂಬಿ, ನಾಣ್ಯ, ಕೂರ್ಚ, ಮಾವಿನೆಲೆ, ಅರಿಶಿನ ಹಚ್ಚಿದ ತೆಂಗಿನಕಾಯಿ ಇಟ್ಟು, ಮುಟ್ಟಿಕೊಂಡು “ಇಮಂ ಮೇ ವರುಣ…”, “ತತ್ತ್ವಾ ಯಾಮಿ…” ಎಂದು ವರುಣನನ್ನು ಆವಾಹಿಸಿ (ಮೈಲಾಪುರ ಗ್ರಂಥ; ಪೀಠದ ರೇಖೆಗಳ ಮತ್ತು ಜಲಪೂರಣದ ವೈದಿಕ ಮಂತ್ರಗಳನ್ನು ಪುರೋಹಿತರು ಹೇಳುತ್ತಾರೆ).',
    [OLD(NP, 15, 0, when=None), OLD(NP, 15, 1, when=None), OLD(NP, 15, 2, when=None), OLD(NP, 15, 3, when=None), OLD(NP, 15, 4, when=None),
     OLD('homa-purvanga', 4, 0, when=None),
     V('तत्त्वा यामि ब्रह्मणा वन्दमानस्तदा शास्ते यजमानो हविर्भिः ।\nअहेळमानो वरुणेह बोध्युरुशंस मा न आयुः प्र मोषीः ॥\nॐ भूर्भुवः सुवरोम् । अस्मिन् कुम्भे वरुणं ध्यायामि । वरुणम् आवाहयामि ॥',
       'Praising you with this prayer I come to you for that which the sacrificer asks with his offerings; O Varuna, without anger, take heed here; O widely praised one, do not take away our life. (Rigveda 1.24.11.) Om, earth, sky, heaven: I meditate on Varuna in this kumbha and invoke him.',
       'ಈ ಸ್ತುತಿಯಿಂದ ವಂದಿಸುತ್ತ ಯಜಮಾನನು ಹವಿಸ್ಸುಗಳಿಂದ ಬೇಡುವುದನ್ನೇ ನಾನು ನಿನ್ನಿಂದ ಬೇಡುತ್ತೇನೆ; ಓ ವರುಣನೇ, ಕೋಪಿಸದೆ ಇಲ್ಲಿ ಗಮನಿಸು; ಓ ಬಹುಸ್ತುತನೇ, ನಮ್ಮ ಆಯುಸ್ಸನ್ನು ಕಸಿಯಬೇಡ. (ಋಗ್ವೇದ ೧.೨೪.೧೧) ಓಂ ಭೂರ್ಭುವಃ ಸುವರೋಮ್: ಈ ಕುಂಭದಲ್ಲಿ ವರುಣನನ್ನು ಧ್ಯಾನಿಸಿ ಆವಾಹಿಸುತ್ತೇನೆ.',
       'इस स्तुति से वन्दना करता हुआ मैं तुमसे वही माँगता हूँ जो यजमान हवियों से माँगता है; हे वरुण, क्रोध न करके यहाँ ध्यान दो; हे बहुस्तुत, हमारी आयु न छीनो। (ऋग्वेद 1.24.11) ॐ भूर्भुवः सुवरोम्: इस कुम्भ में वरुण का ध्यान और आवाहन करता हूँ।',
       'ఈ స్తుతితో వందిస్తూ యజమాని హవిస్సులతో కోరేదానినే నేను నిన్ను కోరుతున్నాను; ఓ వరుణా, కోపించక ఇక్కడ గమనించు; ఓ బహుస్తుతుడా, మా ఆయువును హరించకు. (ఋగ్వేదం 1.24.11) ఓం భూర్భువః సువరోమ్: ఈ కుంభంలో వరుణుని ధ్యానించి ఆవాహన చేస్తున్నాను.',
       'இந்தத் துதியால் வணங்கி, யஜமானன் ஹவிஸ்களால் வேண்டுவதையே நான் உன்னிடம் வேண்டுகிறேன்; வருணனே, சினமின்றி இங்கு கவனிப்பாயாக; பலரால் போற்றப்படுபவனே, எங்கள் ஆயுளைப் பறிக்காதே. (ருக்வேதம் 1.24.11) ஓம் பூர்புவஸ்ஸுவரோம்: இந்தக் கும்பத்தில் வருணனை தியானித்து ஆவாஹனம் செய்கிறேன்.')],
    when=SM))

MULA = 'ॐ श्रीं ह्रीं क्लीं ग्लौं गं गणपतये वरवरद सर्वजनं मे वशमानय स्वाहा ॥'
mula = V(MULA,
         'Om shrim hrim klim glaum gam: to Ganapati, O best giver of boons, bring all people under my sway (win me the goodwill of all), svaha. (The twenty-eight-syllable mula mantra of Mahaganapati; the five seed syllables stand for Rama and Vishnu, Girija and Shiva, Rati and Kama, the Earth and Varaha, Mahalakshmi and Mahaganapati. It is an upadesha mantra: learn it from your guru. The Mylapore manual gives only its first and last words, om shrim … vashamanaya svaha, and the five seeds.)',
         'ಓಂ ಶ್ರೀಂ ಹ್ರೀಂ ಕ್ಲೀಂ ಗ್ಲೌಂ ಗಂ — ಗಣಪತಿಗೆ, ಓ ವರದರಲ್ಲಿ ಶ್ರೇಷ್ಠನೇ, ಎಲ್ಲ ಜನರನ್ನೂ ನನಗೆ ಅನುಕೂಲರನ್ನಾಗಿಸು, ಸ್ವಾಹಾ. (ಮಹಾಗಣಪತಿಯ ಇಪ್ಪತ್ತೆಂಟಕ್ಷರದ ಮೂಲಮಂತ್ರ; ಐದು ಬೀಜಗಳು ರಮಾ–ವಿಷ್ಣು, ಗಿರಿಜಾ–ಶಿವ, ರತಿ–ಕಾಮ, ಭೂಮಿ–ವರಾಹ, ಮಹಾಲಕ್ಷ್ಮೀ–ಮಹಾಗಣಪತಿ ಯುಗ್ಮಗಳು. ಇದು ಉಪದೇಶ ಮಂತ್ರ: ಗುರುವಿನಿಂದ ಕಲಿಯಿರಿ. ಮೈಲಾಪುರ ಗ್ರಂಥ ಮೊದಲ–ಕೊನೆಯ ಪದಗಳನ್ನೂ ಐದು ಬೀಜಗಳನ್ನೂ ಮಾತ್ರ ಕೊಡುತ್ತದೆ.)',
         'ॐ श्रीं ह्रीं क्लीं ग्लौं गं — गणपति को, हे श्रेष्ठ वरदाता, सब जनों को मेरे अनुकूल करो, स्वाहा। (महागणपति का अट्ठाईस अक्षरों का मूलमन्त्र; पाँच बीज रमा-विष्णु, गिरिजा-शिव, रति-काम, भूमि-वराह और महालक्ष्मी-महागणपति के युग्म हैं। यह उपदेश मन्त्र है: गुरु से सीखें।)',
         'ఓం శ్రీం హ్రీం క్లీం గ్లౌం గం — గణపతికి, ఓ వరదులలో శ్రేష్ఠుడా, సర్వజనులను నాకు అనుకూలులను చేయి, స్వాహా. (మహాగణపతి ఇరవై ఎనిమిది అక్షరాల మూలమంత్రం; ఐదు బీజాలు రమా విష్ణు, గిరిజా శివ, రతి కామ, భూమి వరాహ, మహాలక్ష్మీ మహాగణపతి యుగ్మాలు. ఇది ఉపదేశ మంత్రం: గురువు వద్ద నేర్చుకోండి.)',
         'ஓம் ஸ்ரீம் ஹ்ரீம் க்லீம் க்லௌம் கம் — கணபதிக்கு, வரம் தருபவர்களில் சிறந்தவனே, எல்லா மக்களையும் எனக்கு இணக்கமாக்குவாயாக, ஸ்வாஹா. (மஹாகணபதியின் இருபத்தெட்டு அக்ஷர மூலமந்திரம்; ஐந்து பீஜங்கள் ரமா-விஷ்ணு, கிரிஜா-சிவன், ரதி-காமன், பூமி-வராஹர், மஹாலக்ஷ்மீ-மஹாகணபதி ஆகிய இணைகள். இது உபதேச மந்திரம்: குருவிடம் கற்கவும்.)')
dhy = V('बीजापूरगदेक्षुकार्मुकरुजाचक्राब्जपाशोत्पल-\nव्रीह्यग्रस्वविषाणरत्नकलशप्रोद्यत्कराम्भोरुहः ।\nध्येयो वल्लभया सपद्मकरयाश्लिष्टोज्ज्वलद्भूषया\nविश्वोत्पत्तिविपत्तिसंस्थितिकरो विघ्नेश इष्टार्थदः ॥',
        'Vighnesha, who grants what is desired, is to be meditated on with lotus hands holding the pomegranate, the mace, the sugarcane bow, the trident, the discus, the lotus, the noose, the blue lily, the ear of rice, his own tusk and the jewelled pot, embraced by his consort with a lotus in her hand and shining ornaments; he brings about the creation, dissolution and maintenance of the world. (Dhyana of Mahaganapati, Mylapore manual.)',
        'ಮಾದಳ, ಗದೆ, ಕಬ್ಬಿನ ಬಿಲ್ಲು, ಶೂಲ, ಚಕ್ರ, ಕಮಲ, ಪಾಶ, ನೈದಿಲೆ, ಭತ್ತದ ತೆನೆ, ತನ್ನ ದಂತ, ರತ್ನಕಲಶಗಳನ್ನು ಹಿಡಿದ ಕರಕಮಲಗಳುಳ್ಳ, ಕೈಯಲ್ಲಿ ಕಮಲ ಹಿಡಿದ ಹೊಳೆಯುವ ಆಭರಣಗಳ ಪತ್ನಿಯಿಂದ ಆಲಿಂಗಿತನಾದ, ಜಗತ್ತಿನ ಸೃಷ್ಟಿ–ಲಯ–ಸ್ಥಿತಿಗಳನ್ನು ಮಾಡುವ, ಇಷ್ಟಾರ್ಥದಾಯಕ ವಿಘ್ನೇಶನನ್ನು ಧ್ಯಾನಿಸಬೇಕು. (ಮಹಾಗಣಪತಿ ಧ್ಯಾನ, ಮೈಲಾಪುರ ಗ್ರಂಥ)',
        'अनार, गदा, ईख का धनुष, शूल, चक्र, कमल, पाश, नीलकमल, धान की बाली, अपना दाँत और रत्नकलश धारण किए कर-कमलों वाले, हाथ में कमल लिए उज्ज्वल आभूषणों वाली पत्नी से आलिंगित, जगत् की सृष्टि, लय और स्थिति करने वाले, इष्टार्थ देने वाले विघ्नेश का ध्यान करे। (महागणपति ध्यान)',
        'దానిమ్మ, గద, చెరకువిల్లు, శూలం, చక్రం, పద్మం, పాశం, నల్లకలువ, వరి కంకి, తన దంతం, రత్నకలశం ధరించిన కరకమలాలు గల, చేతిలో పద్మం ధరించిన ప్రకాశించే ఆభరణాల భార్యచే ఆలింగనం చేయబడిన, జగత్తు సృష్టి లయ స్థితులను చేసే, ఇష్టార్థదాయకుడైన విఘ్నేశుని ధ్యానించాలి. (మహాగణపతి ధ్యానం)',
        'மாதுளை, கதை, கரும்பு வில், சூலம், சக்கரம், தாமரை, பாசம், நீலோத்பலம், நெற்கதிர், தன் தந்தம், ரத்னகலசம் ஏந்திய தாமரைக் கரங்கள் உடையவரும், கையில் தாமரை ஏந்திய ஒளிரும் அணிகலன்கள் கொண்ட துணைவியால் அணைக்கப்பட்டவரும், உலகின் படைப்பு அழிவு நிலைப்பைச் செய்பவருமான, விரும்பியதைத் தரும் விக்னேசரை தியானிக்க வேண்டும். (மஹாகணபதி தியானம்)')
A(S('कुम्भे महागणपत्यावाहनम्', 'Mahaganapati in the kumbha: nyasa, dhyana and mula mantra',
    'Place a silver image of Mahaganapati (or a coin) on the kumbha. Do the nyasa: say the rishi, metre and deity of the mantra, then with the six seed syllables touch the fingers and the heart, head, crest, arms, eyes and all round. Meditate with the dhyana verse, offer the five upacharas with the elements, recite the mula mantra twelve times, and invoke Mahaganapati into the kumbha and the image with akshata and flowers (Mylapore manual).',
    'ಕುಂಭದ ಮೇಲೆ ಮಹಾಗಣಪತಿಯ ಬೆಳ್ಳಿಯ ಪ್ರತಿಮೆ (ಅಥವಾ ನಾಣ್ಯ) ಇಡಿ. ನ್ಯಾಸ: ಮಂತ್ರದ ಋಷಿ, ಛಂದಸ್ಸು, ದೇವತೆ ಹೇಳಿ, ಆರು ಬೀಜಾಕ್ಷರಗಳಿಂದ ಬೆರಳುಗಳು ಮತ್ತು ಹೃದಯ, ಶಿರ, ಶಿಖೆ, ಕವಚ, ನೇತ್ರ, ಅಸ್ತ್ರ ಸ್ಪರ್ಶಿಸಿ. ಧ್ಯಾನಶ್ಲೋಕದಿಂದ ಧ್ಯಾನಿಸಿ, ಪಂಚಭೂತಾತ್ಮಕ ಪಂಚೋಪಚಾರ ಅರ್ಪಿಸಿ, ಮೂಲಮಂತ್ರವನ್ನು ಹನ್ನೆರಡು ಬಾರಿ ಜಪಿಸಿ, ಅಕ್ಷತೆ–ಹೂವುಗಳಿಂದ ಕುಂಭ ಮತ್ತು ಪ್ರತಿಮೆಯಲ್ಲಿ ಮಹಾಗಣಪತಿಯನ್ನು ಆವಾಹಿಸಿ (ಮೈಲಾಪುರ ಗ್ರಂಥ).',
    [V('अस्य श्रीमहागणपतिमहामन्त्रस्य गणक ऋषिः । निचृद्गायत्री छन्दः । महागणपतिर्देवता ।\nगां बीजम् । गीं शक्तिः । गूं कीलकम् । श्रीमहागणपतिप्रसादसिद्ध्यर्थे जपे विनियोगः ॥\nगां अङ्गुष्ठाभ्यां नमः । गीं तर्जनीभ्यां नमः । गूं मध्यमाभ्यां नमः ।\nगैं अनामिकाभ्यां नमः । गौं कनिष्ठिकाभ्यां नमः । गः करतलकरपृष्ठाभ्यां नमः ॥\nगां हृदयाय नमः । गीं शिरसे स्वाहा । गूं शिखायै वषट् ।\nगैं कवचाय हुम् । गौं नेत्रत्रयाय वौषट् । गः अस्त्राय फट् ।\nभूर्भुवः सुवरोम् इति दिग्बन्धः ॥',
       'Of this great mantra of Sri Mahaganapati the seer is Ganaka, the metre Nichrit-gayatri, the deity Mahaganapati; gam is the seed, gim the power, gum the pin; it is used in japa for the grace of Mahaganapati. Gam to the thumbs, gim to the forefingers, gum to the middle fingers, gaim to the ring fingers, gaum to the little fingers, gah to the palms and backs of the hands; gam to the heart, gim to the head, gum to the crest, gaim to the armour, gaum to the three eyes, gah to the weapon; with bhur bhuvah suvar om the directions are bound.',
       'ಈ ಶ್ರೀಮಹಾಗಣಪತಿ ಮಹಾಮಂತ್ರಕ್ಕೆ ಗಣಕ ಋಷಿ, ನಿಚೃದ್ಗಾಯತ್ರೀ ಛಂದಸ್ಸು, ಮಹಾಗಣಪತಿ ದೇವತೆ; ಗಾಂ ಬೀಜ, ಗೀಂ ಶಕ್ತಿ, ಗೂಂ ಕೀಲಕ; ಮಹಾಗಣಪತಿಪ್ರಸಾದಕ್ಕಾಗಿ ಜಪದಲ್ಲಿ ವಿನಿಯೋಗ. ಗಾಂ ಹೆಬ್ಬೆರಳುಗಳಿಗೆ, ಗೀಂ ತೋರುಬೆರಳುಗಳಿಗೆ, ಗೂಂ ಮಧ್ಯಬೆರಳುಗಳಿಗೆ, ಗೈಂ ಉಂಗುರಬೆರಳುಗಳಿಗೆ, ಗೌಂ ಕಿರುಬೆರಳುಗಳಿಗೆ, ಗಃ ಅಂಗೈ–ಮುಂಗೈಗಳಿಗೆ; ಗಾಂ ಹೃದಯಕ್ಕೆ, ಗೀಂ ಶಿರಕ್ಕೆ, ಗೂಂ ಶಿಖೆಗೆ, ಗೈಂ ಕವಚಕ್ಕೆ, ಗೌಂ ಮೂರು ಕಣ್ಣುಗಳಿಗೆ, ಗಃ ಅಸ್ತ್ರಕ್ಕೆ; “ಭೂರ್ಭುವಃ ಸುವರೋಮ್” ಎಂದು ದಿಗ್ಬಂಧ.',
       'इस श्रीमहागणपति महामन्त्र के ऋषि गणक, छन्द निचृद्गायत्री, देवता महागणपति; गां बीज, गीं शक्ति, गूं कीलक; महागणपति के प्रसाद के लिए जप में विनियोग। गां अँगूठों को, गीं तर्जनियों को, गूं मध्यमाओं को, गैं अनामिकाओं को, गौं कनिष्ठिकाओं को, गः हथेलियों और हाथों के पृष्ठ को; गां हृदय को, गीं सिर को, गूं शिखा को, गैं कवच को, गौं तीन नेत्रों को, गः अस्त्र को; भूर्भुवः सुवरोम् से दिग्बन्ध।',
       'ఈ శ్రీమహాగణపతి మహామంత్రానికి గణక ఋషి, నిచృద్గాయత్రీ ఛందస్సు, మహాగణపతి దేవత; గాం బీజం, గీం శక్తి, గూం కీలకం; మహాగణపతి ప్రసాదం కొరకు జపంలో వినియోగం. గాం బొటనవేళ్ళకు, గీం చూపుడువేళ్ళకు, గూం మధ్యవేళ్ళకు, గైం ఉంగరపువేళ్ళకు, గౌం చిటికెనవేళ్ళకు, గః అరచేతులకు చేతి వెనుకలకు; గాం హృదయానికి, గీం శిరస్సుకు, గూం శిఖకు, గైం కవచానికి, గౌం మూడు కన్నులకు, గః అస్త్రానికి; భూర్భువః సువరోమ్ అని దిగ్బంధం.',
       'இந்த ஸ்ரீ மஹாகணபதி மஹாமந்திரத்துக்கு கணக ருஷி, நிச்ருத்காயத்ரீ சந்தஸ், மஹாகணபதி தேவதை; காம் பீஜம், கீம் சக்தி, கூம் கீலகம்; மஹாகணபதி அருளுக்காக ஜபத்தில் விநியோகம். காம் கட்டைவிரல்களுக்கு, கீம் ஆள்காட்டி விரல்களுக்கு, கூம் நடுவிரல்களுக்கு, கைம் மோதிர விரல்களுக்கு, கௌம் சுண்டுவிரல்களுக்கு, க: உள்ளங்கை புறங்கைகளுக்கு; காம் இதயத்துக்கு, கீம் தலைக்கு, கூம் சிகைக்கு, கைம் கவசத்துக்கு, கௌம் மூன்று கண்களுக்கு, க: அஸ்த்ரத்துக்கு; பூர்புவஸ்ஸுவரோம் என்று திக்பந்தம்.'),
     dhy,
     V('लं पृथिव्यात्मने गन्धं समर्पयामि । हं आकाशात्मने पुष्पाणि समर्पयामि ।\nयं वाय्वात्मने धूपम् आघ्रापयामि । रं अग्न्यात्मने दीपं दर्शयामि ।\nवं अमृतात्मने अमृतोपहारं निवेदयामि । सं सर्वात्मने समस्तोपचारान् समर्पयामि ॥',
       'Lam: to him whose self is earth I offer sandal; ham: to him whose self is space, flowers; yam: to him whose self is air, incense; ram: to him whose self is fire, the lamp; vam: to him whose self is nectar, an offering of nectar; sam: to the Self of all, all the honours.',
       'ಲಂ — ಪೃಥ್ವೀಸ್ವರೂಪನಿಗೆ ಗಂಧ; ಹಂ — ಆಕಾಶಸ್ವರೂಪನಿಗೆ ಹೂವು; ಯಂ — ವಾಯುಸ್ವರೂಪನಿಗೆ ಧೂಪ; ರಂ — ಅಗ್ನಿಸ್ವರೂಪನಿಗೆ ದೀಪ; ವಂ — ಅಮೃತಸ್ವರೂಪನಿಗೆ ಅಮೃತೋಪಹಾರ; ಸಂ — ಸರ್ವಾತ್ಮನಿಗೆ ಸಮಸ್ತ ಉಪಚಾರ.',
       'लं — पृथ्वीस्वरूप को गन्ध; हं — आकाशस्वरूप को पुष्प; यं — वायुस्वरूप को धूप; रं — अग्निस्वरूप को दीप; वं — अमृतस्वरूप को अमृत का उपहार; सं — सर्वात्मा को सब उपचार।',
       'లం — పృథ్వీస్వరూపునికి గంధం; హం — ఆకాశస్వరూపునికి పుష్పాలు; యం — వాయుస్వరూపునికి ధూపం; రం — అగ్నిస్వరూపునికి దీపం; వం — అమృతస్వరూపునికి అమృతోపహారం; సం — సర్వాత్మునికి సమస్త ఉపచారాలు.',
       'லம் — பூமி வடிவினருக்கு சந்தனம்; ஹம் — ஆகாச வடிவினருக்கு மலர்கள்; யம் — வாயு வடிவினருக்கு தூபம்; ரம் — அக்னி வடிவினருக்கு தீபம்; வம் — அமுத வடிவினருக்கு அமுத நைவேத்யம்; ஸம் — அனைத்தின் ஆத்மாவுக்கு எல்லா உபசாரங்களும்.'),
     mula,
     V('अस्मिन् कुम्भे अस्यां प्रतिमायां महागणपतिं ध्यायामि । महागणपतिम् आवाहयामि ॥',
       'I meditate on Mahaganapati in this kumbha and in this image; I invoke Mahaganapati.',
       'ಈ ಕುಂಭದಲ್ಲಿಯೂ ಈ ಪ್ರತಿಮೆಯಲ್ಲಿಯೂ ಮಹಾಗಣಪತಿಯನ್ನು ಧ್ಯಾನಿಸುತ್ತೇನೆ; ಆವಾಹಿಸುತ್ತೇನೆ.',
       'इस कुम्भ और इस प्रतिमा में महागणपति का ध्यान करता हूँ; उनका आवाहन करता हूँ।',
       'ఈ కుంభంలోనూ ఈ ప్రతిమలోనూ మహాగణపతిని ధ్యానిస్తున్నాను; ఆవాహన చేస్తున్నాను.',
       'இந்தக் கும்பத்திலும் இந்தப் பிரதிமையிலும் மஹாகணபதியை தியானிக்கிறேன்; ஆவாஹனம் செய்கிறேன்.')],
    when=SM))

A(S('प्राणप्रतिष्ठा', 'Prana-pratishtha',
    'Say the rishi, metre and deity of the prana-pratishtha mantra (Brahma, Vishnu and Maheshvara; the Rig, Yajus, Saman and Atharvan metres; the Supreme Prana-shakti; seeds आं ह्रीं क्रों), do the nyasa with आं ह्रीं क्रों, meditate on the Prana-shakti, say the prana-pratishtha formula and असुनीते…, and show the mudras of invocation one by one: आवाहितो भव, स्थापितो भव, सन्निहितो भव, सन्निरुद्धो भव, अवकुण्ठितो भव, सुप्रीतो भव, सुप्रसन्नो भव, सुमुखो भव, वरदो भव, प्रसीद प्रसीद. Recite ॐ fifteen times and offer milk with honey (Mylapore manual).',
    'ಪ್ರಾಣಪ್ರತಿಷ್ಠಾ ಮಂತ್ರದ ಋಷಿ (ಬ್ರಹ್ಮ–ವಿಷ್ಣು–ಮಹೇಶ್ವರ), ಛಂದಸ್ಸು (ಋಕ್–ಯಜುಸ್–ಸಾಮ–ಅಥರ್ವ), ದೇವತೆ (ಪರಾ ಪ್ರಾಣಶಕ್ತಿ), ಬೀಜ (ಆಂ ಹ್ರೀಂ ಕ್ರೋಂ) ಹೇಳಿ, ಆಂ ಹ್ರೀಂ ಕ್ರೋಂಗಳಿಂದ ನ್ಯಾಸ ಮಾಡಿ, ಪ್ರಾಣಶಕ್ತಿಯನ್ನು ಧ್ಯಾನಿಸಿ, ಪ್ರಾಣಪ್ರತಿಷ್ಠಾ ವಾಕ್ಯ ಮತ್ತು “ಅಸುನೀತೇ…” ಹೇಳಿ, ಆವಾಹನ ಮುದ್ರೆಗಳನ್ನು ಒಂದೊಂದಾಗಿ ತೋರಿಸಿ: ಆವಾಹಿತೋ ಭವ, ಸ್ಥಾಪಿತೋ ಭವ, ಸನ್ನಿಹಿತೋ ಭವ, ಸನ್ನಿರುದ್ಧೋ ಭವ, ಅವಕುಂಠಿತೋ ಭವ, ಸುಪ್ರೀತೋ ಭವ, ಸುಪ್ರಸನ್ನೋ ಭವ, ಸುಮುಖೋ ಭವ, ವರದೋ ಭವ, ಪ್ರಸೀದ ಪ್ರಸೀದ. ಓಂಕಾರವನ್ನು ಹದಿನೈದು ಬಾರಿ ಜಪಿಸಿ ಜೇನುಸಹಿತ ಹಾಲು ನಿವೇದಿಸಿ (ಮೈಲಾಪುರ ಗ್ರಂಥ).',
    [V('रक्ताम्भोधिस्थपोतोल्लसदरुणसरोजाधिरूढा कराब्जैः\nपाशं कोदण्डमिक्षूद्भवमलिगुणमप्यङ्कुशं पञ्चबाणान् ।\nबिभ्राणासृक्कपालं त्रिनयनलसिता पीनवक्षोरुहाढ्या\nदेवी बालार्कवर्णा भवतु सुखकरी प्राणशक्तिः परा नः ॥',
       'May the Goddess, the supreme Prana-shakti, bring us happiness: seated on a red lotus that shines on a boat in a sea of red, holding in her lotus hands the noose, the sugarcane bow with a string of bees, the goad, the five arrows and a skull-cup, shining with three eyes, full-bosomed, coloured like the rising sun. (Dhyana for the prana-pratishtha, Mylapore manual.)',
       'ಕೆಂಪು ಸಮುದ್ರದಲ್ಲಿನ ನಾವೆಯ ಮೇಲೆ ಹೊಳೆಯುವ ಕೆಂಪು ಕಮಲದಲ್ಲಿ ಕುಳಿತ, ಕರಕಮಲಗಳಲ್ಲಿ ಪಾಶ, ದುಂಬಿಗಳ ಹೆದೆಯುಳ್ಳ ಕಬ್ಬಿನ ಬಿಲ್ಲು, ಅಂಕುಶ, ಐದು ಬಾಣಗಳು, ಕಪಾಲಗಳನ್ನು ಧರಿಸಿದ, ಮೂರು ಕಣ್ಣುಗಳಿಂದ ಶೋಭಿಸುವ, ಉದಯಸೂರ್ಯನ ಬಣ್ಣದ ಪರಾ ಪ್ರಾಣಶಕ್ತಿ ದೇವಿ ನಮಗೆ ಸುಖವನ್ನುಂಟುಮಾಡಲಿ. (ಪ್ರಾಣಪ್ರತಿಷ್ಠೆಯ ಧ್ಯಾನ)',
       'लाल समुद्र में नौका पर चमकते लाल कमल पर विराजमान, कर-कमलों में पाश, भौंरों की डोरी वाला ईख का धनुष, अंकुश, पाँच बाण और कपाल धारण किए, तीन नेत्रों से शोभित, उदित सूर्य के वर्ण वाली परा प्राणशक्ति देवी हमें सुख दें। (प्राणप्रतिष्ठा का ध्यान)',
       'ఎర్రని సముద్రంలో నావపై ప్రకాశించే ఎర్ర పద్మంపై కూర్చున్న, కరకమలాలలో పాశం, తుమ్మెదల నారి గల చెరకువిల్లు, అంకుశం, ఐదు బాణాలు, కపాలం ధరించిన, మూడు కన్నులతో శోభించే, ఉదయసూర్యుని వర్ణం గల పరా ప్రాణశక్తి దేవి మాకు సుఖం కలిగించుగాక. (ప్రాణప్రతిష్ఠ ధ్యానం)',
       'செங்கடலில் படகின் மேல் ஒளிரும் செந்தாமரையில் அமர்ந்தவளும், தாமரைக் கரங்களில் பாசம், வண்டு நாண் கொண்ட கரும்பு வில், அங்குசம், ஐந்து அம்புகள், கபாலம் ஏந்தியவளும், மூன்று கண்களால் ஒளிர்பவளும், உதய சூரிய நிறத்தவளுமான பரா ப்ராணசக்தி தேவி எங்களுக்கு இன்பம் தரட்டும். (ப்ராணப்ரதிஷ்டை தியானம்)'),
     V('आं ह्रीं क्रों क्रों ह्रीं आं यरलवशषसहों हंसः सोऽहं सोऽहं हंसः ।\nअस्य श्रीमहागणपतेः प्राणा इह प्राणाः । जीव इह स्थितः ।\nसर्वेन्द्रियाणि वाङ्मनस्त्वक्चक्षुःश्रोत्रजिह्वाघ्राणप्राणापानव्यानोदानसमानाश्च\nइहैवागत्य अस्मिन् कुम्भे अस्यां प्रतिमायां सुखं चिरं तिष्ठन्तु स्वाहा ॥',
       'Am hrim krom krom hrim am, ya ra la va sha sha sa ham, hamsah so-ham so-ham hamsah: the life-breaths of Sri Mahaganapati are here; his life is established here; may all his senses — speech, mind, skin, eye, ear, tongue and nose — and the five breaths come here and dwell happily and long in this kumbha and this image, svaha. (Mylapore manual.)',
       'ಆಂ ಹ್ರೀಂ ಕ್ರೋಂ ಕ್ರೋಂ ಹ್ರೀಂ ಆಂ, ಯರಲವಶಷಸಹೋಂ, ಹಂಸಃ ಸೋಹಂ ಸೋಹಂ ಹಂಸಃ — ಶ್ರೀಮಹಾಗಣಪತಿಯ ಪ್ರಾಣಗಳು ಇಲ್ಲಿ; ಜೀವವು ಇಲ್ಲಿ ನೆಲೆಸಿದೆ; ವಾಕ್, ಮನಸ್ಸು, ತ್ವಕ್, ಚಕ್ಷು, ಶ್ರೋತ್ರ, ಜಿಹ್ವೆ, ಘ್ರಾಣ ಎಂಬ ಎಲ್ಲ ಇಂದ್ರಿಯಗಳೂ ಪಂಚಪ್ರಾಣಗಳೂ ಇಲ್ಲಿಗೆ ಬಂದು ಈ ಕುಂಭದಲ್ಲಿಯೂ ಪ್ರತಿಮೆಯಲ್ಲಿಯೂ ಸುಖವಾಗಿ ಚಿರಕಾಲ ನೆಲೆಸಲಿ, ಸ್ವಾಹಾ.',
       'आं ह्रीं क्रों क्रों ह्रीं आं, यरलवशषसहों, हंसः सोऽहं सोऽहं हंसः — श्रीमहागणपति के प्राण यहाँ हैं; जीव यहाँ स्थित है; वाणी, मन, त्वचा, नेत्र, कान, जीभ, नाक — सब इन्द्रियाँ और पाँचों प्राण यहाँ आकर इस कुम्भ और प्रतिमा में सुखपूर्वक चिरकाल रहें, स्वाहा।',
       'ఆం హ్రీం క్రోం క్రోం హ్రీం ఆం, యరలవశషసహోం, హంసః సోహం సోహం హంసః — శ్రీమహాగణపతి ప్రాణాలు ఇక్కడ; జీవుడు ఇక్కడ స్థితుడయ్యాడు; వాక్కు, మనస్సు, త్వక్కు, చక్షువు, శ్రోత్రం, జిహ్వ, ఘ్రాణం అనే అన్ని ఇంద్రియాలు, పంచప్రాణాలు ఇక్కడికి వచ్చి ఈ కుంభంలో, ప్రతిమలో సుఖంగా చిరకాలం ఉండుగాక, స్వాహా.',
       'ஆம் ஹ்ரீம் க்ரோம் க்ரோம் ஹ்ரீம் ஆம், யரலவசஷஸஹோம், ஹம்ஸ: ஸோஹம் ஸோஹம் ஹம்ஸ: — ஸ்ரீ மஹாகணபதியின் ப்ராணன்கள் இங்கே; ஜீவன் இங்கே நிலைபெற்றது; வாக்கு, மனம், தோல், கண், காது, நாக்கு, மூக்கு ஆகிய எல்லா இந்திரியங்களும் ஐந்து ப்ராணன்களும் இங்கு வந்து இந்தக் கும்பத்திலும் பிரதிமையிலும் இன்பமாக நெடுநாள் தங்கட்டும், ஸ்வாஹா.'),
     V('असुनीते पुनरस्मासु चक्षुः पुनः प्राणमिह नो धेहि भोगम् ।\nज्योक्पश्येम सूर्यमुच्चरन्तमनुमते मृळया नः स्वस्ति ॥',
       'O Asuniti (guide of life), give us back sight, give us back breath and enjoyment here; long may we see the sun rising; O Anumati, be gracious to us, for our welfare. (Rigveda 10.59.6.)',
       'ಓ ಅಸುನೀತಿಯೇ, ನಮಗೆ ಮತ್ತೆ ಕಣ್ಣನ್ನೂ ಪ್ರಾಣವನ್ನೂ ಭೋಗವನ್ನೂ ಇಲ್ಲಿ ಕೊಡು; ಉದಯಿಸುವ ಸೂರ್ಯನನ್ನು ನಾವು ಬಹುಕಾಲ ನೋಡುವಂತಾಗಲಿ; ಓ ಅನುಮತಿಯೇ, ನಮ್ಮ ಕ್ಷೇಮಕ್ಕಾಗಿ ದಯೆ ತೋರು. (ಋಗ್ವೇದ ೧೦.೫೯.೬)',
       'हे असुनीति, हमें फिर से दृष्टि, प्राण और भोग यहाँ दो; हम उदित होते सूर्य को दीर्घकाल तक देखें; हे अनुमति, हमारे कल्याण के लिए कृपा करो। (ऋग्वेद 10.59.6)',
       'ఓ అసునీతీ, మాకు మళ్ళీ కంటిని, ప్రాణాన్ని, భోగాన్ని ఇక్కడ ఇవ్వు; ఉదయించే సూర్యుని చిరకాలం చూడగలుగుదుము గాక; ఓ అనుమతీ, మా క్షేమం కొరకు దయచూపు. (ఋగ్వేదం 10.59.6)',
       'அஸுநீதியே, எங்களுக்கு மீண்டும் பார்வையையும் ப்ராணனையும் இன்பத்தையும் இங்கு தா; உதிக்கும் சூரியனை நெடுநாள் காண்போமாக; அனுமதியே, எங்கள் நலனுக்காக அருள்புரிவாயாக. (ருக்வேதம் 10.59.6)'),
     V('स्वामिन् सर्वजगन्नाथ यावत्पूजावसानकम् ।\nतावत्त्वं प्रीतिभावेन बिम्बेऽस्मिन् सन्निधिं कुरु ॥\nप्राणान् प्रतिष्ठापयामि ॥',
       'O Lord, master of all the worlds, until the end of this worship be present in this image with love. I establish the life-breaths.',
       'ಓ ಸ್ವಾಮಿ, ಸರ್ವಜಗನ್ನಾಥನೇ, ಪೂಜೆ ಮುಗಿಯುವವರೆಗೆ ಪ್ರೀತಿಯಿಂದ ಈ ಬಿಂಬದಲ್ಲಿ ಸನ್ನಿಧಾನ ಮಾಡು. ಪ್ರಾಣಗಳನ್ನು ಪ್ರತಿಷ್ಠಾಪಿಸುತ್ತೇನೆ.',
       'हे स्वामी, सब जगत् के नाथ, पूजा की समाप्ति तक प्रेमपूर्वक इस प्रतिमा में सान्निध्य करो। प्राणों की प्रतिष्ठा करता हूँ।',
       'ఓ స్వామీ, సర్వజగన్నాథా, పూజ ముగిసే వరకు ప్రీతితో ఈ బింబంలో సన్నిధి చేయి. ప్రాణాలను ప్రతిష్ఠిస్తున్నాను.',
       'ஸ்வாமியே, எல்லா உலகின் நாதனே, பூஜை முடியும் வரை அன்புடன் இந்த பிம்பத்தில் ஸந்நிதி செய்வாயாக. ப்ராணன்களை ப்ரதிஷ்டை செய்கிறேன்.')],
    when=SM))

NAIV = V('ॐ भूर्भुवः सुवः । तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि । धियो यो नः प्रचोदयात् ।\nदेव सवितः प्रसुव । सत्यं त्वर्तेन परिषिञ्चामि । अमृतोपस्तरणमसि ।\nॐ प्राणाय स्वाहा । अपानाय स्वाहा । व्यानाय स्वाहा । उदानाय स्वाहा । समानाय स्वाहा । ब्रह्मणे स्वाहा ॥',
         'Om, earth, sky, heaven; we meditate on the glorious light of the divine Savitri; may he inspire our minds (sprinkling the naivedya). O god Savitri, impel. I sprinkle truth with right (water round the naivedya). You are the nectar spread beneath. Om, to prana, apana, vyana, udana and samana, and to Brahman, svaha (showing the food to the deity). (Mylapore manual; the same mantras as the Nitya Puja naivedya.)',
         'ಓಂ ಭೂರ್ಭುವಃ ಸುವಃ; ದಿವ್ಯ ಸವಿತೃವಿನ ಶ್ರೇಷ್ಠ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರಿಸಲಿ (ನೈವೇದ್ಯಕ್ಕೆ ಪ್ರೋಕ್ಷಣೆ). ಓ ಸವಿತೃದೇವನೇ, ಪ್ರೇರಿಸು. ಸತ್ಯವನ್ನು ಋತದಿಂದ ಸುತ್ತಲೂ ಸಿಂಪಡಿಸುತ್ತೇನೆ. ನೀನು ಅಮೃತದ ಹಾಸು. ಓಂ ಪ್ರಾಣ, ಅಪಾನ, ವ್ಯಾನ, ಉದಾನ, ಸಮಾನಗಳಿಗೂ ಬ್ರಹ್ಮನಿಗೂ ಸ್ವಾಹಾ (ನೈವೇದ್ಯವನ್ನು ದೇವರಿಗೆ ತೋರಿಸುತ್ತ).',
         'ॐ भूर्भुवः सुवः; दिव्य सविता के श्रेष्ठ तेज का हम ध्यान करते हैं; वह हमारी बुद्धि को प्रेरित करें (नैवेद्य पर प्रोक्षण)। हे सविता देव, प्रेरित करो। सत्य को ऋत से चारों ओर सींचता हूँ। तुम अमृत का आस्तरण हो। ॐ प्राण, अपान, व्यान, उदान, समान और ब्रह्म को स्वाहा (नैवेद्य दिखाते हुए)।',
         'ఓం భూర్భువః సువః; దివ్యుడైన సవిత శ్రేష్ఠ తేజస్సును ధ్యానిస్తాము; ఆయన మా బుద్ధులను ప్రేరేపించుగాక (నైవేద్యంపై ప్రోక్షణ). ఓ సవితృదేవా, ప్రేరేపించు. సత్యాన్ని ఋతంతో చుట్టూ చల్లుతున్నాను. నీవు అమృతపు పరుపు. ఓం ప్రాణ, అపాన, వ్యాన, ఉదాన, సమానాలకు, బ్రహ్మకు స్వాహా (నైవేద్యాన్ని దేవునికి చూపుతూ).',
         'ஓம் பூர்புவஸ்ஸுவ:; தெய்வீக ஸவிதாவின் சிறந்த ஒளியைத் தியானிக்கிறோம்; அவர் எங்கள் அறிவைத் தூண்டட்டும் (நைவேத்யத்தின் மேல் ப்ரோக்ஷணம்). ஸவிதா தேவனே, தூண்டுவாயாக. ஸத்யத்தை ருதத்தால் சுற்றித் தெளிக்கிறேன். நீ அமுதத்தின் விரிப்பு. ஓம் ப்ராண, அபான, வ்யான, உதான, ஸமானங்களுக்கும் ப்ரஹ்மத்துக்கும் ஸ்வாஹா (நைவேத்யத்தைக் காட்டி).')
A(S('षोडशोपचारपूजा प्रधाननैवेद्यं च', 'Shodashopachara puja and the main naivedya',
    'Worship Mahaganapati in the kumbha with the sixteen upacharas, saying the mula mantra and महागणपतये नमः before each (a jewelled throne, water for feet, hands and mouth, a bath with आपो हि ष्ठा…, clothes, sacred thread, ornaments, sandal, turmeric and kumkum, akshata, garland), do the archana with the sixteen names, sixteen times with the mula mantra and with the 108 names, offer incense and the ghee lamp; then mix the homa materials and, keeping a third aside, offer it as the main naivedya with the Gayatri and the pranahuti mantras (Mylapore manual).',
    'ಕುಂಭದಲ್ಲಿರುವ ಮಹಾಗಣಪತಿಯನ್ನು ಷೋಡಶೋಪಚಾರಗಳಿಂದ ಪೂಜಿಸಿ — ಪ್ರತಿಯೊಂದರ ಮೊದಲು ಮೂಲಮಂತ್ರ ಮತ್ತು “ಮಹಾಗಣಪತಯೇ ನಮಃ” ಹೇಳಿ (ರತ್ನಸಿಂಹಾಸನ, ಪಾದ್ಯ, ಅರ್ಘ್ಯ, ಆಚಮನ, “ಆಪೋ ಹಿ ಷ್ಠಾ…” ಎಂದು ಸ್ನಾನ, ವಸ್ತ್ರ, ಯಜ್ಞೋಪವೀತ, ಆಭರಣ, ಗಂಧ, ಅರಿಶಿನ–ಕುಂಕುಮ, ಅಕ್ಷತೆ, ಹೂಮಾಲೆ); ಹದಿನಾರು ನಾಮಗಳಿಂದ, ಮೂಲಮಂತ್ರದಿಂದ ಹದಿನಾರು ಬಾರಿ, ಅಷ್ಟೋತ್ತರ ನಾಮಗಳಿಂದ ಅರ್ಚನೆ; ಧೂಪ, ತುಪ್ಪದ ದೀಪ; ನಂತರ ಹೋಮದ್ರವ್ಯಗಳನ್ನು ಕಲಸಿ ಮೂರನೆಯ ಒಂದು ಭಾಗವನ್ನು ಗಾಯತ್ರೀ ಮತ್ತು ಪ್ರಾಣಾಹುತಿ ಮಂತ್ರಗಳಿಂದ ಪ್ರಧಾನ ನೈವೇದ್ಯವಾಗಿ ಅರ್ಪಿಸಿ (ಮೈಲಾಪುರ ಗ್ರಂಥ).',
    [V('महागणपतये नमः । रत्नसिंहासनं समर्पयामि । पादयोः पाद्यं समर्पयामि ।\nहस्तयोः अर्घ्यं समर्पयामि । मुखे आचमनीयं समर्पयामि । स्नानं समर्पयामि ।\nवस्त्रं समर्पयामि । यज्ञोपवीतं समर्पयामि । आभरणानि समर्पयामि ।\nगन्धान् धारयामि । हरिद्राकुङ्कुमं समर्पयामि । अक्षतान् समर्पयामि । पुष्पमालां समर्पयामि ॥',
       'Salutation to Mahaganapati: I offer a jewelled throne, water for the feet, water for the hands, water to sip, a bath, clothes, the sacred thread, ornaments; I apply sandal; I offer turmeric and kumkum, akshata and a garland. (Each preceded by the mula mantra.)',
       'ಮಹಾಗಣಪತಿಗೆ ನಮಸ್ಕಾರ: ರತ್ನಸಿಂಹಾಸನ, ಪಾದಗಳಿಗೆ ಪಾದ್ಯ, ಹಸ್ತಗಳಿಗೆ ಅರ್ಘ್ಯ, ಮುಖಕ್ಕೆ ಆಚಮನ, ಸ್ನಾನ, ವಸ್ತ್ರ, ಯಜ್ಞೋಪವೀತ, ಆಭರಣ, ಗಂಧ, ಅರಿಶಿನ–ಕುಂಕುಮ, ಅಕ್ಷತೆ, ಹೂಮಾಲೆ ಅರ್ಪಿಸುತ್ತೇನೆ. (ಪ್ರತಿಯೊಂದರ ಮೊದಲು ಮೂಲಮಂತ್ರ.)',
       'महागणपति को नमस्कार: रत्नसिंहासन, चरणों में पाद्य, हाथों में अर्घ्य, मुख में आचमन, स्नान, वस्त्र, यज्ञोपवीत, आभूषण, गन्ध, हल्दी-कुंकुम, अक्षत और पुष्पमाला अर्पित करता हूँ। (प्रत्येक से पहले मूलमन्त्र।)',
       'మహాగణపతికి నమస్కారం: రత్నసింహాసనం, పాదాలకు పాద్యం, హస్తాలకు అర్ఘ్యం, ముఖానికి ఆచమనం, స్నానం, వస్త్రం, యజ్ఞోపవీతం, ఆభరణాలు, గంధం, పసుపు కుంకుమ, అక్షతలు, పుష్పమాల సమర్పిస్తున్నాను. (ప్రతిదానికీ ముందు మూలమంత్రం.)',
       'மஹாகணபதிக்கு நமஸ்காரம்: ரத்னஸிம்ஹாஸனம், பாதங்களுக்குப் பாத்யம், கைகளுக்கு அர்க்யம், முகத்துக்கு ஆசமனீயம், ஸ்நானம், வஸ்த்ரம், யஜ்ஞோபவீதம், ஆபரணங்கள், சந்தனம், மஞ்சள் குங்குமம், அக்ஷதை, புஷ்பமாலை ஸமர்ப்பிக்கிறேன். (ஒவ்வொன்றுக்கும் முன் மூலமந்திரம்.)'),
     OLD(NP, 2, 1, when=None), OLD(NP, 2, 2, when=None), OLD(NP, 2, 3, when=None),
     OLD(NP, 24, 0, when=None),
     V('ॐ गं गणपतये नमः ॥\nमहागणपतये नमः । नानाविधपत्रपुष्पाणि समर्पयामि । धूपम् आघ्रापयामि । दीपं दर्शयामि ॥',
       'Om gam, salutation to Ganapati. Salutation to Mahaganapati: I offer leaves and flowers of many kinds; I offer incense; I show the lamp.',
       'ಓಂ ಗಂ ಗಣಪತಯೇ ನಮಃ. ಮಹಾಗಣಪತಿಗೆ ನಮಸ್ಕಾರ: ನಾನಾ ಬಗೆಯ ಪತ್ರ–ಪುಷ್ಪಗಳು, ಧೂಪ, ದೀಪ ಅರ್ಪಿಸುತ್ತೇನೆ.',
       'ॐ गं गणपतये नमः। महागणपति को नमस्कार: अनेक प्रकार के पत्र-पुष्प, धूप और दीप अर्पित करता हूँ।',
       'ఓం గం గణపతయే నమః. మహాగణపతికి నమస్కారం: నానావిధ పత్రపుష్పాలు, ధూపం, దీపం సమర్పిస్తున్నాను.',
       'ஓம் கம் கணபதயே நம:. மஹாகணபதிக்கு நமஸ்காரம்: பலவித இலை மலர்கள், தூபம், தீபம் ஸமர்ப்பிக்கிறேன்.'),
     NAIV,
     V('महागणपतये नमः । नालिकेरादिद्रव्यं निवेदयामि । अमृतापिधानमसि ॥',
       'Salutation to Mahaganapati: I offer the coconut and the other materials as naivedya. You are the nectar that covers (water is poured).',
       'ಮಹಾಗಣಪತಿಗೆ ನಮಸ್ಕಾರ: ತೆಂಗಿನಕಾಯಿ ಮುಂತಾದ ದ್ರವ್ಯಗಳನ್ನು ನಿವೇದಿಸುತ್ತೇನೆ. ನೀನು ಅಮೃತದ ಮುಚ್ಚಳ (ನೀರು ಬಿಡುತ್ತ).',
       'महागणपति को नमस्कार: नारियल आदि द्रव्य निवेदित करता हूँ। तुम अमृत का आवरण हो (जल छोड़ते हुए)।',
       'మహాగణపతికి నమస్కారం: కొబ్బరి మొదలైన ద్రవ్యాలను నివేదిస్తున్నాను. నీవు అమృతపు మూత (నీరు విడుస్తూ).',
       'மஹாகணபதிக்கு நமஸ்காரம்: தேங்காய் முதலிய த்ரவ்யங்களை நிவேதிக்கிறேன். நீ அமுதத்தின் மூடி (நீர் விட்டு).')],
    when=SM))

# ---------------- agnimukha step (both)
A(S('अग्निमुखम्', 'The agnimukha: go to the Common Procedure',
    'Do the purvanga (Homa: Common Procedure) up to the ajyabhaga. Madhva: prepare the sthandila, install the fire, meditate on Agni and the Lord within, do the anvadhana naming Ganapati with the ashtadravya and the number of coconuts as the main offering, the paristarana, the ghee, the aghara, the samskaras of Agni and the Vaishnava offerings; by the Apurita tantra the pranita vessel, the Brahma, the idhma and the two chakshushi (ajyabhaga) oblations are left out (Homa-Havana). Smarta: the full Apastamba agnimukha, through the agnimukha oblation and the all-expiation offering. Then come back here for the invocation of Ganapati in the fire.',
    'ಪೂರ್ವಾಂಗವನ್ನು (ಹೋಮವಿಧಿ — ಸಾಮಾನ್ಯ ಕ್ರಮ) ಆಜ್ಯಭಾಗದವರೆಗೆ ಮಾಡಿ. ಮಾಧ್ವ: ಸ್ಥಂಡಿಲ, ಅಗ್ನಿಪ್ರತಿಷ್ಠೆ, ಅಗ್ನಿ ಮತ್ತು ಅಂತರ್ಯಾಮಿ ಧ್ಯಾನ, ಪ್ರಧಾನವಾಗಿ ಅಷ್ಟದ್ರವ್ಯ–ಕಾಯಿಸಂಖ್ಯೆಯೊಡನೆ ಗಣಪತಿಯನ್ನು ಹೆಸರಿಸಿ ಅನ್ವಾಧಾನ, ಪರಿಸ್ತರಣ, ಆಜ್ಯಸಂಸ್ಕಾರ, ಆಘಾರ, ಅಗ್ನಿಸಂಸ್ಕಾರಗಳು, ವೈಷ್ಣವಾಹುತಿಗಳು; ಆಪೂರಿತ ತಂತ್ರದಂತೆ ಪ್ರಣೀತಾ, ಬ್ರಹ್ಮ, ಇಧ್ಮ, ಚಕ್ಷುಷೀ (ಆಜ್ಯಭಾಗ) ಇಲ್ಲ (ಹೋಮ–ಹವನ). ಸ್ಮಾರ್ತ: ಪೂರ್ಣ ಆಪಸ್ತಂಬ ಅಗ್ನಿಮುಖ, ಅಗ್ನಿಮುಖಾಹುತಿ ಮತ್ತು ಸರ್ವಪ್ರಾಯಶ್ಚಿತ್ತದವರೆಗೆ. ನಂತರ ಅಗ್ನಿಯಲ್ಲಿ ಗಣಪತಿ ಆವಾಹನೆಗಾಗಿ ಇಲ್ಲಿಗೆ ಮರಳಿ.',
    [V('इति पूर्वाङ्गम् ॥', 'Thus the purvanga (from the Common Procedure).', 'ಹೀಗೆ ಪೂರ್ವಾಂಗ (ಸಾಮಾನ್ಯ ಕ್ರಮದಿಂದ).', 'इस प्रकार पूर्वाङ्ग (सामान्य विधि से)।', 'ఇలా పూర్వాంగం (సామాన్య విధి నుండి).', 'இவ்வாறு பூர்வாங்கம் (பொது முறையிலிருந்து).')]))

# ---------------- Madhva dhyana in fire + pradhana
s = OLDS(G, 2)
s['titleEn'] = 'Vighnesha in the fire: dhyana and the main offerings'
s['title'] = 'अग्नौ विघ्नेशध्यानं प्रधानहोमश्च'
s['note'] = ('Meditate on Vighnesha within the fire with the Tantrasara verse, and on Vishvambhara, the form of Vishnu with the elephant face whom Ganapati worshipped, within him (Homa-Havana). Then make the main offerings: a handful of the eight-fold mixture at a time, four for each coconut, throwing the sugarcane, banana and coconut skins into the fire as well. The offering mantra is the Vighnesha mula mantra of the Tantrasara (the letters of क्षिप्रप्रसादाय नमः, taken with the bija given at upadesha), received from the guru; it is not printed here. The Vedic verses of Ganapati below are recited during the offerings, and one oblation of ghee is offered with each.')
s['noteKn'] = ('ತಂತ್ರಸಾರ ಶ್ಲೋಕದಿಂದ ಅಗ್ನಿಯಲ್ಲಿ ವಿಘ್ನೇಶನನ್ನೂ, ಅವನೊಳಗೆ ಗಣಪತಿ ಆರಾಧಿಸಿದ ಗಜಮುಖ ವಿಷ್ಣುರೂಪ ವಿಶ್ವಂಭರನನ್ನೂ ಧ್ಯಾನಿಸಿ (ಹೋಮ–ಹವನ). ನಂತರ ಪ್ರಧಾನಾಹುತಿ: ಅಷ್ಟದ್ರವ್ಯ ಮಿಶ್ರಣವನ್ನು ಮುಷ್ಟಿಯಷ್ಟು, ಒಂದು ಕಾಯಿಗೆ ನಾಲ್ಕರಂತೆ; ಕಬ್ಬು, ಬಾಳೆ, ಕಾಯಿಯ ಸಿಪ್ಪೆಗಳನ್ನೂ ಅಗ್ನಿಗೆ ಹಾಕಿ. ಆಹುತಿ ಮಂತ್ರ ತಂತ್ರಸಾರದ ವಿಘ್ನೇಶ ಮೂಲಮಂತ್ರ (“ಕ್ಷಿಪ್ರಪ್ರಸಾದಾಯ ನಮಃ” ಅಕ್ಷರಗಳು, ಉಪದೇಶದಲ್ಲಿ ಕೊಟ್ಟ ಬೀಜದೊಡನೆ) — ಗುರುವಿನಿಂದ ಪಡೆಯಬೇಕು; ಇಲ್ಲಿ ಮುದ್ರಿಸಿಲ್ಲ. ಆಹುತಿ ನೀಡುವಾಗ ಕೆಳಗಿನ ಗಣಪತಿ ವೈದಿಕ ಮಂತ್ರಗಳನ್ನು ಪಠಿಸುತ್ತಾರೆ, ಪ್ರತಿಯೊಂದರಿಂದ ಒಂದು ಆಜ್ಯಾಹುತಿ.')
def ved(si, vi, tag):
    v = OLD(G, si, vi, when=None)
    v['text'] = v['text'][:-1].rstrip() + ' स्वाहा ।\nगणपतय इदं न मम ॥'
    v['en'] += ' Svaha; this is for Ganapati, not mine.'
    v['kn'] += ' ಸ್ವಾಹಾ; ಇದು ಗಣಪತಿಗೆ, ನನ್ನದಲ್ಲ.'
    v['hi'] += ' स्वाहा; यह गणपति के लिए है, मेरा नहीं।'
    v['te'] += ' స్వాహా; ఇది గణపతికి, నాది కాదు.'
    v['ta'] += ' ஸ்வாஹா; இது கணபதிக்கு, என்னுடையதல்ல.'
    return v
s['verses'] = s['verses'] + [ved(4, 0, 0), ved(4, 1, 0)]
A(s)

# ---------------- Smarta puja in fire
A(S('अग्नौ गणपतिपूजा', 'Mahaganapati in the fire',
    'With the mula mantra, meditate on Mahaganapati in the fire and invoke him with akshata; worship him with the upacharas (seat, throne, water for feet, hands and mouth, madhuparka, bath, akshata for clothes and thread, sandal, flowers, incense, the three-wick ghee lamp), say the naivedya mantras and offer ghee as his food; offer betel into the fire, show camphor and bow (Mylapore manual).',
    'ಮೂಲಮಂತ್ರದಿಂದ ಅಗ್ನಿಯಲ್ಲಿ ಮಹಾಗಣಪತಿಯನ್ನು ಧ್ಯಾನಿಸಿ ಅಕ್ಷತೆಯಿಂದ ಆವಾಹಿಸಿ; ಉಪಚಾರಗಳಿಂದ ಪೂಜಿಸಿ (ಆಸನ, ಸಿಂಹಾಸನ, ಪಾದ್ಯ, ಅರ್ಘ್ಯ, ಆಚಮನ, ಮಧುಪರ್ಕ, ಸ್ನಾನ, ವಸ್ತ್ರ–ಉಪವೀತಗಳಿಗೆ ಅಕ್ಷತೆ, ಗಂಧ, ಹೂವು, ಧೂಪ, ಮೂರು ಬತ್ತಿಯ ತುಪ್ಪದ ದೀಪ), ನೈವೇದ್ಯ ಮಂತ್ರಗಳನ್ನು ಹೇಳಿ ಆಜ್ಯವನ್ನು ಉಪಹಾರವಾಗಿ ಅರ್ಪಿಸಿ; ತಾಂಬೂಲವನ್ನು ಅಗ್ನಿಗೆ ಹಾಕಿ, ಕರ್ಪೂರ ತೋರಿಸಿ ನಮಸ್ಕರಿಸಿ (ಮೈಲಾಪುರ ಗ್ರಂಥ).',
    [V('अस्मिन्नग्नौ महागणपतिं ध्यायामि । महागणपतिम् आवाहयामि ।\nमहागणपतये नमः । आसनं समर्पयामि । पाद्यं अर्घ्यम् आचमनीयं मधुपर्कं स्नानं समर्पयामि ।\nवस्त्रार्थम् उपवीतार्थम् अक्षतान् समर्पयामि । गन्धान् पुष्पाणि समर्पयामि ।\nधूपम् आघ्रापयामि । दीपं दर्शयामि ॥',
       'I meditate on Mahaganapati in this fire and invoke him. Salutation to Mahaganapati: I offer a seat, water for the feet and hands, water to sip, madhuparka and a bath; akshata for clothes and sacred thread; sandal and flowers; incense; I show the lamp. (Each preceded by the mula mantra.)',
       'ಈ ಅಗ್ನಿಯಲ್ಲಿ ಮಹಾಗಣಪತಿಯನ್ನು ಧ್ಯಾನಿಸಿ ಆವಾಹಿಸುತ್ತೇನೆ. ಮಹಾಗಣಪತಿಗೆ ನಮಸ್ಕಾರ: ಆಸನ, ಪಾದ್ಯ, ಅರ್ಘ್ಯ, ಆಚಮನ, ಮಧುಪರ್ಕ, ಸ್ನಾನ; ವಸ್ತ್ರ–ಉಪವೀತಗಳಿಗೆ ಅಕ್ಷತೆ; ಗಂಧ–ಹೂವು; ಧೂಪ; ದೀಪ. (ಪ್ರತಿಯೊಂದರ ಮೊದಲು ಮೂಲಮಂತ್ರ.)',
       'इस अग्नि में महागणपति का ध्यान और आवाहन करता हूँ। महागणपति को नमस्कार: आसन, पाद्य, अर्घ्य, आचमन, मधुपर्क, स्नान; वस्त्र और उपवीत के लिए अक्षत; गन्ध-पुष्प; धूप; दीप। (प्रत्येक से पहले मूलमन्त्र।)',
       'ఈ అగ్నిలో మహాగణపతిని ధ్యానించి ఆవాహన చేస్తున్నాను. మహాగణపతికి నమస్కారం: ఆసనం, పాద్యం, అర్ఘ్యం, ఆచమనం, మధుపర్కం, స్నానం; వస్త్ర ఉపవీతాలకు అక్షతలు; గంధ పుష్పాలు; ధూపం; దీపం. (ప్రతిదానికీ ముందు మూలమంత్రం.)',
       'இந்த அக்னியில் மஹாகணபதியை தியானித்து ஆவாஹனம் செய்கிறேன். மஹாகணபதிக்கு நமஸ்காரம்: ஆஸனம், பாத்யம், அர்க்யம், ஆசமனீயம், மதுபர்க்கம், ஸ்நானம்; வஸ்த்ர உபவீதங்களுக்கு அக்ஷதை; சந்தன மலர்கள்; தூபம்; தீபம். (ஒவ்வொன்றுக்கும் முன் மூலமந்திரம்.)'),
     V('महागणपतये नमः । आज्योपहारं समर्पयामि । अमृतापिधानमसि ।\nकर्पूरताम्बूलं समर्पयामि । कर्पूरनीराजनं दर्शयामि । प्रदक्षिणनमस्कारान् समर्पयामि ॥',
       'Salutation to Mahaganapati: I offer ghee as his food (into the fire); you are the nectar that covers; I offer camphor and betel (into the fire), show the camphor flame, and offer circumambulation and prostration.',
       'ಮಹಾಗಣಪತಿಗೆ ನಮಸ್ಕಾರ: ಆಜ್ಯವನ್ನು ಉಪಹಾರವಾಗಿ (ಅಗ್ನಿಗೆ) ಅರ್ಪಿಸುತ್ತೇನೆ; ನೀನು ಅಮೃತದ ಮುಚ್ಚಳ; ಕರ್ಪೂರ–ತಾಂಬೂಲ (ಅಗ್ನಿಗೆ), ಕರ್ಪೂರ ನೀರಾಜನ, ಪ್ರದಕ್ಷಿಣ ನಮಸ್ಕಾರಗಳನ್ನು ಅರ್ಪಿಸುತ್ತೇನೆ.',
       'महागणपति को नमस्कार: घी को भोग रूप में (अग्नि में) अर्पित करता हूँ; तुम अमृत का आवरण हो; कर्पूर-ताम्बूल (अग्नि में), कर्पूर-नीराजन, प्रदक्षिणा और नमस्कार अर्पित करता हूँ।',
       'మహాగణపతికి నమస్కారం: ఆజ్యాన్ని ఉపహారంగా (అగ్నిలో) సమర్పిస్తున్నాను; నీవు అమృతపు మూత; కర్పూర తాంబూలం (అగ్నిలో), కర్పూర నీరాజనం, ప్రదక్షిణ నమస్కారాలు సమర్పిస్తున్నాను.',
       'மஹாகணபதிக்கு நமஸ்காரம்: நெய்யை உணவாக (அக்னியில்) ஸமர்ப்பிக்கிறேன்; நீ அமுதத்தின் மூடி; கற்பூர தாம்பூலம் (அக்னியில்), கற்பூர நீராஜனம், ப்ரதக்ஷிண நமஸ்காரங்கள் ஸமர்ப்பிக்கிறேன்.')],
    when=SM))

# ---------------- Smarta pradhana homa
def svh(text, tyaga='महागणपतय इदं न मम ॥'):
    return text.rstrip('॥ ').rstrip() + ' स्वाहा ।\n' + tyaga
TY_EN = ' Svaha; this is for Mahaganapati, not mine.'
TY_KN = ' ಸ್ವಾಹಾ; ಇದು ಮಹಾಗಣಪತಿಗೆ, ನನ್ನದಲ್ಲ.'
TY_HI = ' स्वाहा; यह महागणपति के लिए है, मेरा नहीं।'
TY_TE = ' స్వాహా; ఇది మహాగణపతికి, నాది కాదు.'
TY_TA = ' ஸ்வாஹா; இது மஹாகணபதிக்கு, என்னுடையதல்ல.'
g1 = OLD(G, 4, 0, when=None)
gananam = V(svh(g1['text']), g1['en'] + ' (Offered with the mixture, 8 or 16 times.)' + TY_EN, g1['kn'] + ' (ಮಿಶ್ರ ದ್ರವ್ಯದಿಂದ ೮ ಅಥವಾ ೧೬ ಬಾರಿ.)' + TY_KN, g1['hi'] + ' (मिश्रित द्रव्य से 8 या 16 बार।)' + TY_HI, g1['te'] + ' (మిశ్ర ద్రవ్యంతో 8 లేదా 16 సార్లు.)' + TY_TE, g1['ta'] + ' (கலந்த த்ரவ்யத்தால் 8 அல்லது 16 முறை.)' + TY_TA)
mula_h = V('ॐ श्रीं ह्रीं क्लीं ग्लौं गं गणपतये वरवरद सर्वजनं मे वशमानय स्वाहा ।\nमहागणपतय इदं न मम ॥',
           'The mula mantra with svaha; this is for Mahaganapati, not mine. (First build it up word by word — om svaha, om shrim svaha, om shrim hrim svaha … — one oblation of ghee for each step, then the whole mantra; then eight oblations of ghee with the full mantra, holding the ghee vessel in the left hand. Learn the mantra from your guru.)',
           'ಸ್ವಾಹಾಸಹಿತ ಮೂಲಮಂತ್ರ; ಇದು ಮಹಾಗಣಪತಿಗೆ, ನನ್ನದಲ್ಲ. (ಮೊದಲು ಪದಪದವಾಗಿ ಬೆಳೆಸಿ — ಓಂ ಸ್ವಾಹಾ, ಓಂ ಶ್ರೀಂ ಸ್ವಾಹಾ, ಓಂ ಶ್ರೀಂ ಹ್ರೀಂ ಸ್ವಾಹಾ … — ಪ್ರತಿ ಹಂತಕ್ಕೆ ಒಂದು ಆಜ್ಯಾಹುತಿ, ಕೊನೆಗೆ ಪೂರ್ಣ ಮಂತ್ರ; ನಂತರ ಎಡಗೈಯಲ್ಲಿ ಆಜ್ಯಪಾತ್ರೆ ಹಿಡಿದು ಪೂರ್ಣ ಮಂತ್ರದಿಂದ ಎಂಟು ಆಜ್ಯಾಹುತಿ. ಮಂತ್ರವನ್ನು ಗುರುವಿನಿಂದ ಕಲಿಯಿರಿ.)',
           'स्वाहा सहित मूलमन्त्र; यह महागणपति के लिए है, मेरा नहीं। (पहले शब्द-शब्द बढ़ाते हुए — ॐ स्वाहा, ॐ श्रीं स्वाहा, ॐ श्रीं ह्रीं स्वाहा … — प्रत्येक चरण पर एक घृताहुति, अन्त में पूरा मन्त्र; फिर बाएँ हाथ में घृतपात्र लेकर पूरे मन्त्र से आठ आहुतियाँ। मन्त्र गुरु से सीखें।)',
           'స్వాహాతో మూలమంత్రం; ఇది మహాగణపతికి, నాది కాదు. (మొదట పదం పదంగా పెంచుతూ — ఓం స్వాహా, ఓం శ్రీం స్వాహా, ఓం శ్రీం హ్రీం స్వాహా … — ప్రతి దశకు ఒక ఆజ్యాహుతి, చివరికి పూర్తి మంత్రం; తరువాత ఎడమచేతిలో ఆజ్యపాత్ర పట్టుకొని పూర్తి మంత్రంతో ఎనిమిది ఆహుతులు. మంత్రాన్ని గురువు వద్ద నేర్చుకోండి.)',
           'ஸ்வாஹாவுடன் மூலமந்திரம்; இது மஹாகணபதிக்கு, என்னுடையதல்ல. (முதலில் சொல் சொல்லாக வளர்த்து — ஓம் ஸ்வாஹா, ஓம் ஸ்ரீம் ஸ்வாஹா, ஓம் ஸ்ரீம் ஹ்ரீம் ஸ்வாஹா … — ஒவ்வொரு படிக்கும் ஒரு நெய் ஆஹுதி, இறுதியில் முழு மந்திரம்; பின் இடக்கையில் நெய்ப் பாத்திரம் ஏந்தி முழு மந்திரத்தால் எட்டு ஆஹுதிகள். மந்திரத்தை குருவிடம் கற்கவும்.)')
gay = V('तत्पुरुषाय विद्महे वक्रतुण्डाय धीमहि । तन्नो दन्तिः प्रचोदयात् स्वाहा ।\nमहागणपतय इदं न मम ॥',
        'May we know that Supreme Person; let us meditate on the one with the curved trunk; may the tusked one inspire us. (The Ganesha Gayatri of the Mahanarayana Upanishad, eight offerings.)' + TY_EN,
        'ಆ ಪರಮಪುರುಷನನ್ನು ಅರಿಯೋಣ; ವಕ್ರತುಂಡನನ್ನು ಧ್ಯಾನಿಸೋಣ; ಆ ದಂತಿಯು ನಮ್ಮನ್ನು ಪ್ರೇರಿಸಲಿ. (ಮಹಾನಾರಾಯಣೋಪನಿಷತ್ತಿನ ಗಣೇಶ ಗಾಯತ್ರಿ, ಎಂಟು ಆಹುತಿ.)' + TY_KN,
        'हम उस परमपुरुष को जानें; वक्रतुण्ड का ध्यान करें; वह दन्ती हमें प्रेरित करें। (महानारायणोपनिषद् की गणेश गायत्री, आठ आहुतियाँ।)' + TY_HI,
        'ఆ పరమపురుషుని తెలుసుకుందాము; వక్రతుండుని ధ్యానిద్దాము; ఆ దంతి మమ్మల్ని ప్రేరేపించుగాక. (మహానారాయణోపనిషత్తులోని గణేశ గాయత్రి, ఎనిమిది ఆహుతులు.)' + TY_TE,
        'அந்தப் பரமபுருஷனை அறிவோமாக; வளைந்த துதிக்கையனைத் தியானிப்போமாக; அந்தத் தந்தி எங்களைத் தூண்டட்டும். (மஹாநாராயண உபநிஷத்தின் கணேச காயத்ரீ, எட்டு ஆஹுதிகள்.)' + TY_TA)
vt = V('वक्रतुण्ड महाकाय सूर्यकोटिसमप्रभ ।\nअविघ्नं कुरु मे देव सर्वकार्येषु सर्वदा स्वाहा ।\nमहागणपतय इदं न मम ॥',
       'O curved-trunked one of mighty body, bright as ten million suns, O god, make all my undertakings always free of obstacles. (Eight offerings.)' + TY_EN,
       'ಓ ವಕ್ರತುಂಡನೇ, ಮಹಾಕಾಯನೇ, ಕೋಟಿಸೂರ್ಯಪ್ರಭನೇ, ದೇವನೇ, ನನ್ನ ಎಲ್ಲ ಕಾರ್ಯಗಳನ್ನೂ ಸದಾ ನಿರ್ವಿಘ್ನಗೊಳಿಸು. (ಎಂಟು ಆಹುತಿ.)' + TY_KN,
       'हे वक्रतुण्ड, महाकाय, करोड़ों सूर्यों के समान प्रभा वाले देव, मेरे सब कार्यों में सदा निर्विघ्नता करो। (आठ आहुतियाँ।)' + TY_HI,
       'ఓ వక్రతుండా, మహాకాయా, కోటిసూర్య ప్రభా, దేవా, నా అన్ని కార్యాలనూ ఎల్లప్పుడూ నిర్విఘ్నం చేయి. (ఎనిమిది ఆహుతులు.)' + TY_TE,
       'வளைந்த துதிக்கையனே, பேருடலோனே, கோடி சூரிய ஒளியோனே, தேவனே, என் எல்லாச் செயல்களையும் எப்போதும் இடையூறின்றிச் செய்வாயாக. (எட்டு ஆஹுதிகள்.)' + TY_TA)
pray = V('अमुकनक्षत्रे अमुकराशौ जातस्य अमुकशर्मणः अस्य यजमानस्य सकुटुम्बस्य\nअनुकूलं प्रयच्छ प्रयच्छ । प्रतिकूलं नाशय नाशय । आपदो नाशय नाशय ।\nसम्पदो वर्धय वर्धय । सर्वत्र विजयं प्रापय प्रापय । सर्वजनानुकूल्यं कुरु कुरु ।\nअविघ्नं कुरु मे देव सर्वकार्येषु सर्वदा स्वाहा ।\nमहागणपतय इदं न मम ॥',
        'For this yajamana, so-and-so, born in such a nakshatra and rashi, and his family: grant what is favourable, destroy what is adverse, destroy misfortunes, increase prosperity, bring victory everywhere, win the goodwill of all people; O god, make all my undertakings always free of obstacles. (At least four offerings; Mylapore manual.)' + TY_EN,
        'ಇಂತಹ ನಕ್ಷತ್ರ–ರಾಶಿಯಲ್ಲಿ ಜನಿಸಿದ ಇಂತಹ ಹೆಸರಿನ ಈ ಯಜಮಾನನಿಗೂ ಕುಟುಂಬಕ್ಕೂ ಅನುಕೂಲವನ್ನು ಕೊಡು, ಪ್ರತಿಕೂಲವನ್ನು ನಾಶಮಾಡು, ಆಪತ್ತುಗಳನ್ನು ನಾಶಮಾಡು, ಸಂಪತ್ತನ್ನು ಬೆಳೆಸು, ಎಲ್ಲೆಡೆ ವಿಜಯ ತಂದುಕೊಡು, ಎಲ್ಲ ಜನರ ಅನುಕೂಲ ಮಾಡು; ದೇವನೇ, ನನ್ನ ಎಲ್ಲ ಕಾರ್ಯಗಳನ್ನು ಸದಾ ನಿರ್ವಿಘ್ನಗೊಳಿಸು. (ಕನಿಷ್ಠ ನಾಲ್ಕು ಆಹುತಿ; ಮೈಲಾಪುರ ಗ್ರಂಥ.)' + TY_KN,
        'अमुक नक्षत्र और राशि में जन्मे अमुक नाम वाले इस यजमान और परिवार को अनुकूलता दो, प्रतिकूलता का नाश करो, आपदाओं का नाश करो, सम्पदा बढ़ाओ, सर्वत्र विजय दिलाओ, सब जनों की अनुकूलता करो; हे देव, मेरे सब कार्यों में सदा निर्विघ्नता करो। (कम से कम चार आहुतियाँ।)' + TY_HI,
        'ఫలానా నక్షత్ర రాశులలో జన్మించిన ఫలానా పేరుగల ఈ యజమానికి, కుటుంబానికి అనుకూలం ఇవ్వు, ప్రతికూలం నాశనం చేయి, ఆపదలు నాశనం చేయి, సంపదలు వృద్ధి చేయి, సర్వత్ర విజయం కలిగించు, సర్వజనుల అనుకూలత చేయి; దేవా, నా అన్ని కార్యాలనూ ఎల్లప్పుడూ నిర్విఘ్నం చేయి. (కనీసం నాలుగు ఆహుతులు.)' + TY_TE,
        'இன்ன நட்சத்திரம் ராசியில் பிறந்த இன்ன பெயருடைய இந்த யஜமானனுக்கும் குடும்பத்துக்கும் அனுகூலம் தா, பிரதிகூலம் அழி, ஆபத்துகளை அழி, செல்வத்தை வளர், எங்கும் வெற்றி அளி, எல்லா மக்களின் இணக்கத்தையும் செய்; தேவனே, என் எல்லாச் செயல்களையும் எப்போதும் இடையூறின்றிச் செய்வாயாக. (குறைந்தது நான்கு ஆஹுதிகள்.)' + TY_TA)
laja = V('उत्तिष्ठ पुरुष हरितपिङ्गल लोहिताक्ष धनधान्यसमृद्धिं देहि देहि दापय दापय स्वाहा ।\nमहागणपतय इदं न मम ॥',
         'Rise, O Person, green-and-tawny, red-eyed; give, give, cause to be given abundance of wealth and grain. (Eight offerings of puffed rice; before it eight offerings of durva dipped in milk or ghee with the mula mantra. Mylapore manual.)' + TY_EN,
         'ಏಳು, ಓ ಪುರುಷನೇ, ಹಸಿರು–ಹಳದಿ ವರ್ಣನೇ, ಕೆಂಗಣ್ಣನೇ, ಧನಧಾನ್ಯ ಸಮೃದ್ಧಿಯನ್ನು ಕೊಡು ಕೊಡು, ಕೊಡಿಸು ಕೊಡಿಸು. (ಅರಳಿನಿಂದ ಎಂಟು ಆಹುತಿ; ಅದಕ್ಕೆ ಮೊದಲು ಹಾಲು ಅಥವಾ ತುಪ್ಪದಲ್ಲಿ ಅದ್ದಿದ ಗರಿಕೆಯಿಂದ ಮೂಲಮಂತ್ರದೊಡನೆ ಎಂಟು ಆಹುತಿ. ಮೈಲಾಪುರ ಗ್ರಂಥ.)' + TY_KN,
         'उठो, हे पुरुष, हरित-पिंगल, लाल नेत्रों वाले, धन-धान्य की समृद्धि दो दो, दिलाओ दिलाओ। (लाजा से आठ आहुतियाँ; उससे पहले दूध या घी में डुबोई दूर्वा से मूलमन्त्र द्वारा आठ आहुतियाँ।)' + TY_HI,
         'లే, ఓ పురుషా, హరిత పింగళ వర్ణా, ఎర్రని కన్నులవాడా, ధనధాన్య సమృద్ధిని ఇవ్వు ఇవ్వు, ఇప్పించు ఇప్పించు. (పేలాలతో ఎనిమిది ఆహుతులు; దానికి ముందు పాలు లేదా నేతిలో ముంచిన గరికతో మూలమంత్రంతో ఎనిమిది ఆహుతులు.)' + TY_TE,
         'எழுவாயாக, புருஷனே, பச்சை பொன்னிறத்தோனே, சிவந்த கண்ணோனே, தனதான்ய வளத்தைத் தா தா, தரச்செய் தரச்செய். (பொரியால் எட்டு ஆஹுதிகள்; அதற்கு முன் பாலிலோ நெய்யிலோ தோய்த்த அருகம்புல்லால் மூலமந்திரத்துடன் எட்டு ஆஹுதிகள்.)' + TY_TA)
jat = V('जातवेदसे सुनवाम सोममरातीयतो नि दहाति वेदः ।\nस नः पर्षदति दुर्गाणि विश्वा नावेव सिन्धुं दुरितात्यग्निः स्वाहा ।\nअग्निरूपाय महागणपतय इदं न मम ॥',
        'Let us press Soma for Jatavedas; may he burn up the wealth of the hostile; may Agni carry us across all difficulties and wrongs as a boat across the river, svaha. This is for Mahaganapati in the form of Agni, not mine. (Rigveda 1.99.1, offering the half of the coconut shell with the eyes.)',
        'ಜಾತವೇದನಿಗಾಗಿ ಸೋಮವನ್ನು ಹಿಂಡೋಣ; ಶತ್ರುವಿನ ಸಂಪತ್ತನ್ನು ಅವನು ಸುಟ್ಟುಹಾಕಲಿ; ನಾವೆಯು ನದಿಯನ್ನು ದಾಟಿಸುವಂತೆ ಅಗ್ನಿಯು ನಮ್ಮನ್ನು ಎಲ್ಲ ಸಂಕಟ–ಪಾಪಗಳಿಂದ ಪಾರುಮಾಡಲಿ, ಸ್ವಾಹಾ. ಇದು ಅಗ್ನಿರೂಪಿ ಮಹಾಗಣಪತಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೧.೯೯.೧; ಕಣ್ಣುಗಳಿರುವ ಕಾಯಿಚಿಪ್ಪಿನ ಅರ್ಧವನ್ನು ಅರ್ಪಿಸುತ್ತ.)',
        'जातवेद के लिए सोम निचोड़ें; वह शत्रु के धन को जला दे; नाव जैसे नदी पार कराती है वैसे अग्नि हमें सब संकटों और पापों के पार ले जाए, स्वाहा। यह अग्निरूप महागणपति के लिए है, मेरा नहीं। (ऋग्वेद 1.99.1; आँखों वाला नारियल-कपाल अर्पित करते हुए)',
        'జాతవేదునికై సోమాన్ని పిండుదాము; శత్రువు సంపదను అతడు దహించుగాక; నావ నదిని దాటించినట్లు అగ్ని మమ్మల్ని అన్ని కష్టాలు, పాపాల నుండి దాటించుగాక, స్వాహా. ఇది అగ్నిరూప మహాగణపతికి, నాది కాదు. (ఋగ్వేదం 1.99.1; కళ్ళున్న కొబ్బరి చిప్ప సగాన్ని సమర్పిస్తూ)',
        'ஜாதவேதனுக்காக ஸோமத்தைப் பிழிவோம்; பகைவனின் செல்வத்தை அவன் எரிக்கட்டும்; படகு ஆற்றைக் கடத்துவதுபோல் அக்னி எங்களை எல்லா இடர்களிலிருந்தும் பாவங்களிலிருந்தும் கடத்தட்டும், ஸ்வாஹா. இது அக்னி வடிவ மஹாகணபதிக்கு, என்னுடையதல்ல. (ருக்வேதம் 1.99.1; கண்கள் உள்ள தேங்காய் ஓட்டின் பாதியை அர்ப்பிக்கும்போது)')
dhr = V('ध्रुवासु त्वासु क्षितिषु क्षियन्तो व्यस्मत्पाशं वरुणो मुमोचत् ।\nअवो वन्वाना अदितेरुपस्थाद्यूयं पात स्वस्तिभिः सदा नः स्वाहा ।\nवरुणरूपाय महागणपतय इदं न मम ॥',
        'Dwelling in these firm abodes, may Varuna loosen his noose from us; winning help from the lap of Aditi — protect us always with blessings, svaha. This is for Mahaganapati in the form of Varuna, not mine. (Rigveda 7.88.7, offering the other half of the shell.)',
        'ಈ ಸ್ಥಿರ ನೆಲೆಗಳಲ್ಲಿ ವಾಸಿಸುವ ನಮ್ಮಿಂದ ವರುಣನು ಪಾಶವನ್ನು ಬಿಡಿಸಲಿ; ಅದಿತಿಯ ಮಡಿಲಿನಿಂದ ರಕ್ಷಣೆಯನ್ನು ಪಡೆಯುತ್ತ — ನೀವು ಸದಾ ಮಂಗಳಗಳಿಂದ ನಮ್ಮನ್ನು ಕಾಪಾಡಿರಿ, ಸ್ವಾಹಾ. ಇದು ವರುಣರೂಪಿ ಮಹಾಗಣಪತಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೭.೮೮.೭; ಚಿಪ್ಪಿನ ಇನ್ನೊಂದು ಅರ್ಧವನ್ನು ಅರ್ಪಿಸುತ್ತ.)',
        'इन स्थिर निवासों में रहते हुए हमसे वरुण अपना पाश खोल दे; अदिति की गोद से रक्षा पाते हुए — तुम सदा कल्याणों से हमारी रक्षा करो, स्वाहा। यह वरुणरूप महागणपति के लिए है, मेरा नहीं। (ऋग्वेद 7.88.7; कपाल का दूसरा आधा अर्पित करते हुए)',
        'ఈ స్థిర నివాసాలలో ఉంటున్న మా నుండి వరుణుడు పాశాన్ని విడిపించుగాక; అదితి ఒడి నుండి రక్షణ పొందుతూ — మీరు ఎల్లప్పుడూ మంగళాలతో మమ్మల్ని కాపాడండి, స్వాహా. ఇది వరుణరూప మహాగణపతికి, నాది కాదు. (ఋగ్వేదం 7.88.7; చిప్ప మరో సగాన్ని సమర్పిస్తూ)',
        'இந்த நிலையான இருப்பிடங்களில் வாழும் எங்களிடமிருந்து வருணன் தன் பாசத்தை விடுவிக்கட்டும்; அதிதியின் மடியிலிருந்து காவல் பெற்று — நீங்கள் எப்போதும் மங்கலங்களால் எங்களைக் காப்பீர்களாக, ஸ்வாஹா. இது வருண வடிவ மஹாகணபதிக்கு, என்னுடையதல்ல. (ருக்வேதம் 7.88.7; ஓட்டின் மற்றப் பாதியை அர்ப்பிக்கும்போது)')
A(S('प्रधानहोमः', 'The main offerings (pradhana homa)',
    'Offer the mixed materials (modaka, appam, durva, samidh, puffed rice, sugarcane, ghee, fruit, jaggery, honey), a handful at a time, at least eight times and up to a thousand, either separately or mixed, seeing them offered into the mouth of Ganapati in the fire. The order of the Mylapore manual: the mula mantra built up word by word and then eight oblations of ghee; the mixture with गणानां त्वा… (8 or 16); the Ganesha Gayatri (8); वक्रतुण्ड… (8); the prayer for the yajamana (at least 4); durva dipped in milk or ghee with the mula mantra (8); puffed rice (8); the two halves of the coconut shell; and eight more oblations of ghee with the mula mantra.',
    'ಮಿಶ್ರ ದ್ರವ್ಯಗಳನ್ನು (ಮೋದಕ, ಅಪ್ಪ, ಗರಿಕೆ, ಸಮಿಧೆ, ಅರಳು, ಕಬ್ಬು, ತುಪ್ಪ, ಹಣ್ಣು, ಬೆಲ್ಲ, ಜೇನು) ಮುಷ್ಟಿಯಷ್ಟು, ಕನಿಷ್ಠ ಎಂಟು ಬಾರಿಯಿಂದ ಸಾವಿರದವರೆಗೆ, ಬೇರೆಬೇರೆಯಾಗಿ ಅಥವಾ ಕಲಸಿ, ಅಗ್ನಿಯಲ್ಲಿರುವ ಗಣಪತಿಯ ಬಾಯಿಗೆ ಅರ್ಪಿಸುವುದಾಗಿ ಭಾವಿಸಿ ಅರ್ಪಿಸಿ. ಮೈಲಾಪುರ ಗ್ರಂಥದ ಕ್ರಮ: ಪದಪದವಾಗಿ ಬೆಳೆಸಿದ ಮೂಲಮಂತ್ರ, ನಂತರ ಎಂಟು ಆಜ್ಯಾಹುತಿ; “ಗಣಾನಾಂ ತ್ವಾ…”ದಿಂದ ಮಿಶ್ರಣ (೮ ಅಥವಾ ೧೬); ಗಣೇಶ ಗಾಯತ್ರಿ (೮); “ವಕ್ರತುಂಡ…” (೮); ಯಜಮಾನನಿಗಾಗಿ ಪ್ರಾರ್ಥನೆ (ಕನಿಷ್ಠ ೪); ಹಾಲು/ತುಪ್ಪದಲ್ಲಿ ಅದ್ದಿದ ಗರಿಕೆ ಮೂಲಮಂತ್ರದಿಂದ (೮); ಅರಳು (೮); ಕಾಯಿಚಿಪ್ಪಿನ ಎರಡು ಅರ್ಧಗಳು; ಮತ್ತೆ ಮೂಲಮಂತ್ರದಿಂದ ಎಂಟು ಆಜ್ಯಾಹುತಿ.',
    [mula_h, gananam, gay, vt, pray, laja, jat, dhr], when=SM))

# Atharvashirsha homa (Smarta)
ATH = old(AS)['sections']
ath = []
for si in range(1, 11):
    o = ATH[si]['verses'][0]
    t = o['text'].rstrip()
    t = t[:-1].rstrip() if t.endswith('॥') else t
    t = t + ' स्वाहा ।\nमहागणपतय इदं न मम ॥'
    ath.append(V(t, o['en'] + TY_EN, o['kn'] + TY_KN, o['hi'] + TY_HI, o['te'] + TY_TE, o['ta'] + TY_TA))
A(S('अथर्वशीर्षहोमः', 'Homa with the Ganapati Atharvashirsha',
    'Many families also offer with the Ganapati Atharvashirsha (the Mylapore manual: “doing homa with the mantras of the Atharvashirsha begets great benefit”; the Atharvashirsha itself praises worship with durva, puffed rice and a thousand modakas). Recite the opening shanti-patha (भद्रं कर्णेभिः…), then offer the mixture or ghee once at the end of each of the ten sections below; the phalashruti that follows (sections 11-14) and the closing shanti-patha are recited, not offered. For 21 or 108 recitations, repeat the ten offerings each time. Madhva manuals do not use the Atharvashirsha.',
    'ಅನೇಕ ಮನೆತನಗಳು ಗಣಪತಿ ಅಥರ್ವಶೀರ್ಷದಿಂದಲೂ ಹೋಮ ಮಾಡುತ್ತಾರೆ (ಮೈಲಾಪುರ: “ಅಥರ್ವಶೀರ್ಷ ಮಂತ್ರಗಳಿಂದ ಹೋಮ ಮಾಡಿದರೆ ಮಹಾಫಲ”; ಅಥರ್ವಶೀರ್ಷವೇ ಗರಿಕೆ, ಅರಳು, ಸಾವಿರ ಮೋದಕಗಳ ಯಜನವನ್ನು ಹೊಗಳುತ್ತದೆ). ಆರಂಭದ ಶಾಂತಿಪಾಠ (ಭದ್ರಂ ಕರ್ಣೇಭಿಃ…) ಹೇಳಿ, ಕೆಳಗಿನ ಹತ್ತು ಭಾಗಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದರ ಕೊನೆಯಲ್ಲಿ ಮಿಶ್ರಣ ಅಥವಾ ತುಪ್ಪದಿಂದ ಒಂದು ಆಹುತಿ; ನಂತರದ ಫಲಶ್ರುತಿ (೧೧–೧೪) ಮತ್ತು ಸಮಾಪ್ತಿ ಶಾಂತಿಪಾಠ ಪಠಣ ಮಾತ್ರ. ೨೧ ಅಥವಾ ೧೦೮ ಆವೃತ್ತಿಗೆ ಪ್ರತಿ ಬಾರಿ ಹತ್ತು ಆಹುತಿಗಳನ್ನು ಪುನರಾವರ್ತಿಸಿ. ಮಾಧ್ವ ಗ್ರಂಥಗಳು ಅಥರ್ವಶೀರ್ಷವನ್ನು ಬಳಸುವುದಿಲ್ಲ.',
    [OLD(AS, 0, 0, when=None)] + ath, when=SM))

# ---------------- Uttaranga step
A(S('उत्तराङ्गम्', 'Uttaranga: go to the Common Procedure',
    'Now do the uttaranga in the Common Procedure. Madhva: by the Apurita tantra there is no svishtakrit; do the prayaschitta offerings, the purnahuti with समुद्रादूर्मिः… (with a coconut), the samsrava, the marjana and the rest. Smarta: the jaya, abhyatana and rashtrabhrt offerings, svishtakrit, prayaschitta, then the purnahuti: पूर्णाहुतिमुत्तमाम्… and गणानां त्वा… with svaha, a coconut or fruit wrapped in silk, then the mula mantra until all the materials are consumed; then the mula mantra japa sixteen times, the Atharvashirsha, Bhagya, Durga and Sri Suktas as time allows, the Ganesha Gayatri and नमो व्रातपतये…; then सप्त ते अग्ने…, parishechana, marjana, the gift to the Brahma and the upasthana. After the upasthana take back Mahaganapati from the fire into your heart with a flower: अग्नौ आवाहितं महागणपतिं हृदि प्रवेशयामि. Then come back here for the closing puja.',
    'ಈಗ ಸಾಮಾನ್ಯ ಕ್ರಮದಲ್ಲಿರುವ ಉತ್ತರಾಂಗ ಮಾಡಿ. ಮಾಧ್ವ: ಆಪೂರಿತ ತಂತ್ರದಂತೆ ಸ್ವಿಷ್ಟಕೃತ್ ಇಲ್ಲ; ಪ್ರಾಯಶ್ಚಿತ್ತ ಆಹುತಿಗಳು, ತೆಂಗಿನಕಾಯಿಯೊಡನೆ “ಸಮುದ್ರಾದೂರ್ಮಿಃ…” ಪೂರ್ಣಾಹುತಿ, ಸಂಸ್ರಾವ, ಮಾರ್ಜನ ಇತ್ಯಾದಿ. ಸ್ಮಾರ್ತ: ಜಯ, ಅಭ್ಯಾತಾನ, ರಾಷ್ಟ್ರಭೃತ್, ಸ್ವಿಷ್ಟಕೃತ್, ಪ್ರಾಯಶ್ಚಿತ್ತ; ನಂತರ ಪೂರ್ಣಾಹುತಿ: “ಪೂರ್ಣಾಹುತಿಮುತ್ತಮಾಮ್…” ಮತ್ತು ಸ್ವಾಹಾಸಹಿತ “ಗಣಾನಾಂ ತ್ವಾ…”, ರೇಷ್ಮೆಯಲ್ಲಿ ಸುತ್ತಿದ ಕಾಯಿ/ಫಲ; ದ್ರವ್ಯಗಳು ಮುಗಿಯುವವರೆಗೆ ಮೂಲಮಂತ್ರ; ನಂತರ ಮೂಲಮಂತ್ರ ಜಪ ಹದಿನಾರು, ಸಮಯವಿದ್ದಂತೆ ಅಥರ್ವಶೀರ್ಷ, ಭಾಗ್ಯ, ದುರ್ಗಾ, ಶ್ರೀ ಸೂಕ್ತಗಳು, ಗಣೇಶ ಗಾಯತ್ರಿ, “ನಮೋ ವ್ರಾತಪತಯೇ…”; ನಂತರ “ಸಪ್ತ ತೇ ಅಗ್ನೇ…”, ಪರಿಷೇಚನ, ಮಾರ್ಜನ, ಬ್ರಹ್ಮವರದಾನ, ಉಪಸ್ಥಾನ. ಉಪಸ್ಥಾನದ ನಂತರ ಒಂದು ಹೂವಿನಿಂದ ಅಗ್ನಿಯಲ್ಲಿನ ಮಹಾಗಣಪತಿಯನ್ನು ಹೃದಯಕ್ಕೆ ತೆಗೆದುಕೊಳ್ಳಿ: “ಅಗ್ನೌ ಆವಾಹಿತಂ ಮಹಾಗಣಪತಿಂ ಹೃದಿ ಪ್ರವೇಶಯಾಮಿ”. ನಂತರ ಸಮಾಪ್ತಿ ಪೂಜೆಗೆ ಇಲ್ಲಿಗೆ ಮರಳಿ.',
    [dict(OLD(G, 3, 1, when=SM), en=OLD(G, 3, 1)['en'].replace('(The moola mantra of the Tamil Ganapati Homam manual, one witness.)', '(Atharvashirsha 10; recited after the purnahuti in the Mylapore manual and given as the moola mantra in the Tamil Ganapati Homam.)'), kn=OLD(G, 3, 1)['kn'].replace('(ತಮಿಳು ಗಣಪತಿಹೋಮ ಗ್ರಂಥದ ಮೂಲಮಂತ್ರ, ಒಂದೇ ಆಧಾರ.)', '(ಅಥರ್ವಶೀರ್ಷ ೧೦; ಮೈಲಾಪುರ ಗ್ರಂಥದಲ್ಲಿ ಪೂರ್ಣಾಹುತಿಯ ನಂತರ; ತಮಿಳು ಗಣಪತಿಹೋಮದಲ್ಲಿ ಮೂಲಮಂತ್ರ.)'), hi=OLD(G, 3, 1)['hi'].replace('(तमिल गणपतिहोम ग्रन्थ का मूलमन्त्र, एक ही आधार।)', '(अथर्वशीर्ष 10; मैलापुर ग्रन्थ में पूर्णाहुति के बाद; तमिल गणपतिहोम में मूलमन्त्र।)'), te=OLD(G, 3, 1)['te'].replace('(తమిళ గణపతిహోమ గ్రంథంలోని మూలమంత్రం, ఒకే ఆధారం.)', '(అథర్వశీర్షం 10; మైలాపూర్ గ్రంథంలో పూర్ణాహుతి తరువాత; తమిళ గణపతిహోమంలో మూలమంత్రం.)'), ta=OLD(G, 3, 1)['ta'].replace('(தமிழ் கணபதி ஹோம நூலின் மூலமந்திரம், ஒரே ஆதாரம்.)', '(அதர்வசீர்ஷம் 10; மைலாப்பூர் நூலில் பூர்ணாஹுதிக்குப் பின்; தமிழ் கணபதி ஹோமத்தில் மூலமந்திரம்.)')),
     V('अग्नौ आवाहितं महागणपतिं हृदि प्रवेशयामि ॥',
       'I take Mahaganapati, invoked in the fire, into my heart. (Smelling a flower offered to him; Mylapore manual.)',
       'ಅಗ್ನಿಯಲ್ಲಿ ಆವಾಹಿಸಿದ ಮಹಾಗಣಪತಿಯನ್ನು ಹೃದಯದಲ್ಲಿ ಪ್ರವೇಶಗೊಳಿಸುತ್ತೇನೆ. (ಅವನಿಗೆ ಅರ್ಪಿಸಿದ ಹೂವನ್ನು ಮೂಸುತ್ತ.)',
       'अग्नि में आवाहित महागणपति को हृदय में प्रवेश कराता हूँ। (उन्हें अर्पित पुष्प सूँघते हुए)',
       'అగ్నిలో ఆవాహన చేసిన మహాగణపతిని హృదయంలో ప్రవేశింపజేస్తున్నాను. (ఆయనకు అర్పించిన పువ్వును ఆఘ్రాణిస్తూ)',
       'அக்னியில் ஆவாஹனம் செய்த மஹாகணபதியை இதயத்தில் புகச்செய்கிறேன். (அவருக்கு அர்ப்பித்த மலரை முகர்ந்து)', when=SM)]))

# ---------------- Smarta closing puja
A(S('पुनःपूजा', 'Closing puja of Mahaganapati in the kumbha',
    'Worship Mahaganapati in the kumbha again: akshata for a seat, water for feet, hands and mouth, a bath with आपो हि ष्ठा… and the Pavamana verses, clothes, sandal, kumkum, flowers with the sixteen names, incense and lamp; the great naivedya (rice, vadas, coconut pieces and bananas) with the naivedya mantras; betel; the camphor arati; the mantrapushpa; pradakshina and namaskara with the prayers below; and the umbrella, chamara and all the honours (Mylapore manual).',
    'ಕುಂಭದಲ್ಲಿರುವ ಮಹಾಗಣಪತಿಯನ್ನು ಮತ್ತೆ ಪೂಜಿಸಿ: ಆಸನಕ್ಕೆ ಅಕ್ಷತೆ, ಪಾದ್ಯ, ಅರ್ಘ್ಯ, ಆಚಮನ, “ಆಪೋ ಹಿ ಷ್ಠಾ…” ಮತ್ತು ಪವಮಾನ ಮಂತ್ರಗಳಿಂದ ಸ್ನಾನ, ವಸ್ತ್ರ, ಗಂಧ, ಕುಂಕುಮ, ಹದಿನಾರು ನಾಮಗಳಿಂದ ಹೂವು, ಧೂಪ–ದೀಪ; ನೈವೇದ್ಯ ಮಂತ್ರಗಳಿಂದ ಮಹಾನೈವೇದ್ಯ (ಅನ್ನ, ವಡೆ, ಕಾಯಿಚೂರು, ಬಾಳೆಹಣ್ಣು); ತಾಂಬೂಲ; ಕರ್ಪೂರ ಆರತಿ; ಮಂತ್ರಪುಷ್ಪ; ಕೆಳಗಿನ ಪ್ರಾರ್ಥನೆಗಳೊಡನೆ ಪ್ರದಕ್ಷಿಣ ನಮಸ್ಕಾರ; ಛತ್ರ, ಚಾಮರ ಮೊದಲಾದ ಸಮಸ್ತೋಪಚಾರ (ಮೈಲಾಪುರ ಗ್ರಂಥ).',
    [NAIV,
     V('नानाभक्ष्यसमायुक्तं नानाफलसमन्वितम् ।\nपरमान्नसमायुक्तं मधुनाज्येन संयुतम् ।\nनैवेद्यं षड्रसोपेतं प्रतिगृह्णीष्व सादरम् ॥\nश्रीमहागणपतये नमः । महानैवेद्यं निवेदयामि ॥',
       'Accept with kindness this naivedya of six tastes, with many foods and many fruits, with sweet rice, honey and ghee. Salutation to Sri Mahaganapati: I offer the great naivedya.',
       'ನಾನಾ ಭಕ್ಷ್ಯಗಳಿಂದ, ನಾನಾ ಫಲಗಳಿಂದ, ಪರಮಾನ್ನ, ಜೇನು, ತುಪ್ಪಗಳಿಂದ ಕೂಡಿದ ಷಡ್ರಸಯುಕ್ತ ಈ ನೈವೇದ್ಯವನ್ನು ಆದರದಿಂದ ಸ್ವೀಕರಿಸು. ಶ್ರೀಮಹಾಗಣಪತಿಗೆ ನಮಸ್ಕಾರ: ಮಹಾನೈವೇದ್ಯ ನಿವೇದಿಸುತ್ತೇನೆ.',
       'अनेक भक्ष्यों, अनेक फलों, परमान्न, मधु और घी से युक्त षड्रसयुक्त इस नैवेद्य को आदरपूर्वक स्वीकार करो। श्रीमहागणपति को नमस्कार: महानैवेद्य निवेदित करता हूँ।',
       'నానా భక్ష్యాలతో, నానా ఫలాలతో, పరమాన్నం, తేనె, నేయితో కూడిన షడ్రసయుక్తమైన ఈ నైవేద్యాన్ని ఆదరంతో స్వీకరించు. శ్రీమహాగణపతికి నమస్కారం: మహానైవేద్యం నివేదిస్తున్నాను.',
       'பல பக்ஷ்யங்கள், பல பழங்கள், பரமான்னம், தேன், நெய் கூடிய அறுசுவை இந்த நைவேத்யத்தை அன்புடன் ஏற்பாயாக. ஸ்ரீ மஹாகணபதிக்கு நமஸ்காரம்: மஹாநைவேத்யம் நிவேதிக்கிறேன்.'),
     OLD(NP, 29, 0, when=None),
     V('चन्द्रादित्यौ च ताराणि विद्युदग्निस्त्वमेव च ।\nत्वमेव सर्वज्योतींषि भज नीराजनं प्रभो ॥\nश्रीमहागणपतये नमः । कर्पूरनीराजनं सन्दर्शयामि ॥',
       'The moon and the sun, the stars, lightning and fire are you alone; you are all the lights: accept this arati, O Lord. Salutation to Sri Mahaganapati: I show the camphor arati. (Then namo vratapataye… is said, and the arati is taken with both hands as raksha.)',
       'ಚಂದ್ರ–ಸೂರ್ಯರು, ನಕ್ಷತ್ರಗಳು, ಮಿಂಚು, ಅಗ್ನಿ ಎಲ್ಲವೂ ನೀನೇ; ಎಲ್ಲ ಜ್ಯೋತಿಗಳೂ ನೀನೇ; ಓ ಪ್ರಭುವೇ, ಈ ನೀರಾಜನವನ್ನು ಸ್ವೀಕರಿಸು. ಶ್ರೀಮಹಾಗಣಪತಿಗೆ ನಮಸ್ಕಾರ: ಕರ್ಪೂರ ನೀರಾಜನ ತೋರಿಸುತ್ತೇನೆ. (ನಂತರ “ನಮೋ ವ್ರಾತಪತಯೇ…”, ಆರತಿಯನ್ನು ಎರಡು ಕೈಗಳಿಂದ ರಕ್ಷೆಯಾಗಿ ಸ್ವೀಕರಿಸುವುದು.)',
       'चन्द्र, सूर्य, तारे, बिजली और अग्नि तुम ही हो; सब ज्योतियाँ तुम ही हो; हे प्रभु, यह नीराजन स्वीकार करो। श्रीमहागणपति को नमस्कार: कर्पूर-नीराजन दिखाता हूँ।',
       'చంద్ర సూర్యులు, నక్షత్రాలు, మెరుపు, అగ్ని నీవే; అన్ని జ్యోతులూ నీవే; ఓ ప్రభూ, ఈ నీరాజనాన్ని స్వీకరించు. శ్రీమహాగణపతికి నమస్కారం: కర్పూర నీరాజనం చూపుతున్నాను.',
       'சந்திரனும் சூரியனும், விண்மீன்களும், மின்னலும், அக்னியும் நீயே; எல்லா ஒளிகளும் நீயே; பிரபுவே, இந்த நீராஜனத்தை ஏற்பாயாக. ஸ்ரீ மஹாகணபதிக்கு நமஸ்காரம்: கற்பூர நீராஜனம் காட்டுகிறேன்.'),
     OLD(NP, 33, 0, when=None),
     V('यो वेदादौ स्वरः प्रोक्तो वेदान्ते च प्रतिष्ठितः ।\nतस्य प्रकृतिलीनस्य यः परः स महेश्वरः ॥\nश्रीमहागणपतये नमः । मन्त्रपुष्पाञ्जलिं समर्पयामि ॥',
       'The syllable spoken at the beginning of the Veda and established at the end of the Veda — he who is beyond it, merged in its source, is the great Lord. (Mahanarayana Upanishad.) Salutation to Sri Mahaganapati: I offer the handful of mantra-flowers.',
       'ವೇದದ ಆದಿಯಲ್ಲಿ ಹೇಳಲ್ಪಟ್ಟ, ವೇದಾಂತದಲ್ಲಿ ಪ್ರತಿಷ್ಠಿತವಾದ ಸ್ವರ — ಅದರ ಮೂಲದಲ್ಲಿ ಲೀನವಾದದ್ದರ ಆಚೆ ಇರುವವನೇ ಮಹೇಶ್ವರ. (ಮಹಾನಾರಾಯಣೋಪನಿಷತ್) ಶ್ರೀಮಹಾಗಣಪತಿಗೆ ನಮಸ್ಕಾರ: ಮಂತ್ರಪುಷ್ಪಾಂಜಲಿ ಅರ್ಪಿಸುತ್ತೇನೆ.',
       'जो स्वर वेद के आदि में कहा गया और वेदान्त में प्रतिष्ठित है — उसके मूल में लीन से भी जो परे है, वही महेश्वर है। (महानारायणोपनिषद्) श्रीमहागणपति को नमस्कार: मन्त्रपुष्पांजलि अर्पित करता हूँ।',
       'వేదం ఆదిలో చెప్పబడి, వేదాంతంలో ప్రతిష్ఠితమైన స్వరం — దాని మూలంలో లీనమైనదానికి అతీతుడైనవాడే మహేశ్వరుడు. (మహానారాయణోపనిషత్తు) శ్రీమహాగణపతికి నమస్కారం: మంత్రపుష్పాంజలి సమర్పిస్తున్నాను.',
       'வேதத்தின் தொடக்கத்தில் சொல்லப்பட்டு வேதாந்தத்தில் நிலைபெற்ற ஸ்வரம் — அதன் மூலத்தில் லயித்ததற்கும் அப்பாற்பட்டவனே மஹேச்வரன். (மஹாநாராயண உபநிஷத்) ஸ்ரீ மஹாகணபதிக்கு நமஸ்காரம்: மந்த்ரபுஷ்பாஞ்ஜலி ஸமர்ப்பிக்கிறேன்.'),
     V('यानि कानि च पापानि जन्मान्तरकृतानि च ।\nतानि तानि विनश्यन्तु प्रदक्षिणपदे पदे ॥\nप्रकृष्टपापनाशाय प्रकृष्टफलसिद्धये ।\nप्रदक्षिणं करोमीश प्रसीद गणनायक ॥',
       'Whatever sins were done in former births, may they perish at every step of this circumambulation. For the destruction of grave sins and the attainment of the highest fruit I go round you, O Lord; be gracious, O leader of the hosts.',
       'ಹಿಂದಿನ ಜನ್ಮಗಳಲ್ಲಿ ಮಾಡಿದ ಯಾವ ಪಾಪಗಳಿವೆಯೋ ಅವೆಲ್ಲವೂ ಪ್ರದಕ್ಷಿಣೆಯ ಪ್ರತಿ ಹೆಜ್ಜೆಯಲ್ಲೂ ನಾಶವಾಗಲಿ. ಘೋರ ಪಾಪನಾಶಕ್ಕಾಗಿ, ಉತ್ತಮ ಫಲಸಿದ್ಧಿಗಾಗಿ ಪ್ರದಕ್ಷಿಣೆ ಮಾಡುತ್ತೇನೆ, ಓ ಈಶನೇ; ಓ ಗಣನಾಯಕನೇ, ಪ್ರಸನ್ನನಾಗು.',
       'पूर्व जन्मों में किए जो भी पाप हैं, वे प्रदक्षिणा के प्रत्येक पग पर नष्ट हों। घोर पापों के नाश और उत्तम फल की सिद्धि के लिए हे ईश, मैं प्रदक्षिणा करता हूँ; हे गणनायक, प्रसन्न हो।',
       'పూర్వజన్మలలో చేసిన ఏ పాపాలున్నాయో అవన్నీ ప్రదక్షిణలో ప్రతి అడుగులో నశించుగాక. ఘోర పాప నాశనం కొరకు, ఉత్తమ ఫలసిద్ధి కొరకు ఓ ఈశా, ప్రదక్షిణ చేస్తున్నాను; ఓ గణనాయకా, ప్రసన్నుడవు కమ్ము.',
       'முற்பிறவிகளில் செய்த பாவங்கள் எவையோ அவை அனைத்தும் வலம் வரும் ஒவ்வொரு அடியிலும் அழியட்டும். பெரும் பாவங்கள் அழியவும் சிறந்த பலன் கிட்டவும் ஈசனே, வலம் வருகிறேன்; கணநாயகனே, அருள்வாயாக.'),
     V('गजाननं भूतगणादिसेवितं कपित्थजम्बूफलसारभक्षितम् ।\nउमासुतं शोकविनाशकारणं नमामि विघ्नेश्वरपादपङ्कजम् ॥\nअगजाननपद्मार्कं गजाननमहर्निशम् ।\nअनेकदं तं भक्तानामेकदन्तमुपास्महे ॥\nनमो नमो गणेशाय नमस्ते शिवसूनवे ।\nअविघ्नं कुरु मे कामं नमामि त्वां गजानन ॥',
       'I bow to the lotus feet of Vighneshvara, the elephant-faced, served by the hosts of beings, who eats the essence of wood-apple and rose-apple fruit, the son of Uma, the cause of the end of sorrow. Day and night we worship the one-tusked, elephant-faced one, the sun to the lotus of Parvati’s face, who gives many gifts to his devotees. Salutations again and again to Ganesha; salutation to you, son of Shiva; make my desire free of obstacles; I bow to you, O Gajanana. (Mylapore manual.)',
       'ಭೂತಗಣಗಳಿಂದ ಸೇವಿತನಾದ, ಬೇಲ–ನೇರಳೆ ಹಣ್ಣುಗಳ ಸಾರವನ್ನು ಭುಂಜಿಸುವ, ಉಮಾಸುತನಾದ, ಶೋಕನಾಶಕಾರಣನಾದ ಗಜಾನನ ವಿಘ್ನೇಶ್ವರನ ಪಾದಕಮಲಗಳಿಗೆ ನಮಿಸುತ್ತೇನೆ. ಪಾರ್ವತಿಯ ಮುಖಕಮಲಕ್ಕೆ ಸೂರ್ಯನಂತಿರುವ, ಭಕ್ತರಿಗೆ ಅನೇಕವನ್ನು ಕೊಡುವ ಏಕದಂತ ಗಜಾನನನನ್ನು ಹಗಲಿರುಳು ಉಪಾಸಿಸುತ್ತೇವೆ. ಗಣೇಶನಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ; ಶಿವಸೂನುವೇ ನಿನಗೆ ನಮಸ್ಕಾರ; ನನ್ನ ಇಷ್ಟಾರ್ಥವನ್ನು ನಿರ್ವಿಘ್ನಗೊಳಿಸು; ಓ ಗಜಾನನನೇ, ನಿನಗೆ ನಮಿಸುತ್ತೇನೆ.',
       'भूतगणों से सेवित, कैथ और जामुन के फलों का सार खाने वाले, उमासुत, शोक-नाश के कारण गजानन विघ्नेश्वर के चरणकमलों को नमन करता हूँ। पार्वती के मुखकमल के सूर्य, भक्तों को अनेक वर देने वाले एकदन्त गजानन की हम दिन-रात उपासना करते हैं। गणेश को बार-बार नमस्कार; हे शिवपुत्र, तुम्हें नमस्कार; मेरी कामना निर्विघ्न करो; हे गजानन, तुम्हें नमन करता हूँ।',
       'భూతగణాలచే సేవించబడే, వెలగ నేరేడు పండ్ల సారాన్ని భుజించే, ఉమాసుతుడైన, శోకనాశకారకుడైన గజానన విఘ్నేశ్వరుని పాదపద్మాలకు నమస్కరిస్తున్నాను. పార్వతి ముఖపద్మానికి సూర్యుని వంటి, భక్తులకు అనేకం ఇచ్చే ఏకదంత గజాననుని అహర్నిశం ఉపాసిస్తాము. గణేశునికి మళ్ళీ మళ్ళీ నమస్కారం; శివసూనూ, నీకు నమస్కారం; నా కోరికను నిర్విఘ్నం చేయి; ఓ గజాననా, నీకు నమస్కరిస్తున్నాను.',
       'பூதகணங்களால் சேவிக்கப்படுபவரும், விளாம்பழம் நாவல்பழங்களின் சாரத்தை உண்பவரும், உமையின் மைந்தரும், துயர் நீக்கும் காரணருமான கஜானன விக்னேச்வரரின் திருவடித் தாமரைகளை வணங்குகிறேன். பார்வதியின் முகத்தாமரைக்குச் சூரியனானவரும், பக்தர்களுக்குப் பலவும் தருபவருமான ஏகதந்த கஜானனரை இரவும் பகலும் உபாஸிக்கிறோம். கணேசருக்கு மீண்டும் மீண்டும் நமஸ்காரம்; சிவனின் மைந்தனே, உமக்கு நமஸ்காரம்; என் விருப்பத்தை இடையூறின்றிச் செய்வீராக; கஜானனனே, உம்மை வணங்குகிறேன்.')],
    when=SM))

A(S('तर्पणम् उद्वासनं च', 'Tarpana, udvasana, abhisheka and tirtha',
    'Do tarpana to Mahaganapati with the sixteen names, pouring water from the right palm over the fingertips. Recite the mula mantra twelve or sixteen times, do the anga-nyasa and the dhyana again (the directions are now released: भूर्भुवः सुवरोम् इति दिग्विमोकः), the five upacharas, गणानां त्वा… and the Ganesha Gayatri; then offer a flower and move the kumbha a little to the north, bidding Mahaganapati return to his place. With the kumbha water sprinkle the yajamana, his wife and everyone (आपो हि ष्ठा…, the abhisheka), and give it as tirtha (Mylapore manual). Then the raksha, the samarpana and the prasada as in the Common Procedure.',
    'ಹದಿನಾರು ನಾಮಗಳಿಂದ ಮಹಾಗಣಪತಿಗೆ ತರ್ಪಣ — ಬಲ ಅಂಗೈಯಿಂದ ಬೆರಳ ತುದಿಗಳ ಮೂಲಕ ನೀರು ಬಿಡಿ. ಮೂಲಮಂತ್ರವನ್ನು ಹನ್ನೆರಡು ಅಥವಾ ಹದಿನಾರು ಬಾರಿ ಜಪಿಸಿ, ಅಂಗನ್ಯಾಸ, ಧ್ಯಾನ (ಈಗ ದಿಗ್ವಿಮೋಕ: ಭೂರ್ಭುವಃ ಸುವರೋಮ್), ಪಂಚೋಪಚಾರ, “ಗಣಾನಾಂ ತ್ವಾ…”, ಗಣೇಶ ಗಾಯತ್ರಿ; ನಂತರ ಹೂವು ಅರ್ಪಿಸಿ ಕುಂಭವನ್ನು ಸ್ವಲ್ಪ ಉತ್ತರಕ್ಕೆ ಸರಿಸಿ ಮಹಾಗಣಪತಿಯನ್ನು ಸ್ವಸ್ಥಾನಕ್ಕೆ ಬೀಳ್ಕೊಡಿ. ಕುಂಭಜಲದಿಂದ ಯಜಮಾನ, ಪತ್ನಿ, ಎಲ್ಲರಿಗೂ ಪ್ರೋಕ್ಷಣೆ (“ಆಪೋ ಹಿ ಷ್ಠಾ…”, ಅಭಿಷೇಕ), ತೀರ್ಥವಾಗಿ ಕೊಡಿ (ಮೈಲಾಪುರ ಗ್ರಂಥ). ನಂತರ ಸಾಮಾನ್ಯ ಕ್ರಮದಂತೆ ರಕ್ಷೆ, ಸಮರ್ಪಣೆ, ಪ್ರಸಾದ.',
    [V('सुमुखं तर्पयामि । एकदन्तं तर्पयामि । कपिलं तर्पयामि । गजकर्णकं तर्पयामि ।\nलम्बोदरं तर्पयामि । विकटं तर्पयामि । विघ्नराजं तर्पयामि । विनायकं तर्पयामि ।\nधूमकेतुं तर्पयामि । गणाध्यक्षं तर्पयामि । फालचन्द्रं तर्पयामि । गजाननं तर्पयामि ।\nवक्रतुण्डं तर्पयामि । शूर्पकर्णं तर्पयामि । हेरम्बं तर्पयामि । स्कन्दपूर्वजं तर्पयामि ॥',
       'I satisfy (with water) Sumukha, Ekadanta, Kapila, Gajakarnaka, Lambodara, Vikata, Vighnaraja, Vinayaka, Dhumaketu, Ganadhyaksha, Phalachandra, Gajanana, Vakratunda, Shurpakarna, Heramba and Skandapurvaja.',
       'ಸುಮುಖ, ಏಕದಂತ, ಕಪಿಲ, ಗಜಕರ್ಣಕ, ಲಂಬೋದರ, ವಿಕಟ, ವಿಘ್ನರಾಜ, ವಿನಾಯಕ, ಧೂಮಕೇತು, ಗಣಾಧ್ಯಕ್ಷ, ಫಾಲಚಂದ್ರ, ಗಜಾನನ, ವಕ್ರತುಂಡ, ಶೂರ್ಪಕರ್ಣ, ಹೇರಂಬ, ಸ್ಕಂದಪೂರ್ವಜರನ್ನು (ಜಲದಿಂದ) ತೃಪ್ತಿಪಡಿಸುತ್ತೇನೆ.',
       'सुमुख, एकदन्त, कपिल, गजकर्णक, लम्बोदर, विकट, विघ्नराज, विनायक, धूमकेतु, गणाध्यक्ष, फालचन्द्र, गजानन, वक्रतुण्ड, शूर्पकर्ण, हेरम्ब और स्कन्दपूर्वज को (जल से) तृप्त करता हूँ।',
       'సుముఖ, ఏకదంత, కపిల, గజకర్ణక, లంబోదర, వికట, విఘ్నరాజ, వినాయక, ధూమకేతు, గణాధ్యక్ష, ఫాలచంద్ర, గజానన, వక్రతుండ, శూర్పకర్ణ, హేరంబ, స్కందపూర్వజులను (జలంతో) తృప్తిపరుస్తున్నాను.',
       'ஸுமுக, ஏகதந்த, கபில, கஜகர்ணக, லம்போதர, விகட, விக்னராஜ, விநாயக, தூமகேது, கணாத்யக்ஷ, பாலசந்த்ர, கஜானன, வக்ரதுண்ட, சூர்ப்பகர்ண, ஹேரம்ப, ஸ்கந்தபூர்வஜர்களை (நீரால்) திருப்தி செய்கிறேன்.'),
     V('अस्मात् कुम्भात् आवाहितं महागणपतिं यथास्थानं प्रतिष्ठापयामि ।\nशोभनार्थे क्षेमाय पुनरागमनाय च ॥',
       'I return Mahaganapati, invoked in this kumbha, to his own place — for good fortune, for well-being, and to come again.',
       'ಈ ಕುಂಭದಲ್ಲಿ ಆವಾಹಿಸಿದ ಮಹಾಗಣಪತಿಯನ್ನು ಅವನ ಸ್ಥಾನಕ್ಕೆ ಪ್ರತಿಷ್ಠಾಪಿಸುತ್ತೇನೆ — ಶುಭಕ್ಕಾಗಿ, ಕ್ಷೇಮಕ್ಕಾಗಿ, ಮತ್ತೆ ಬರಲೆಂದು.',
       'इस कुम्भ में आवाहित महागणपति को उनके स्थान पर प्रतिष्ठित करता हूँ — शुभ के लिए, क्षेम के लिए और फिर आने के लिए।',
       'ఈ కుంభంలో ఆవాహన చేసిన మహాగణపతిని ఆయన స్థానానికి ప్రతిష్ఠిస్తున్నాను — శుభం కొరకు, క్షేమం కొరకు, మళ్ళీ రావడం కొరకు.',
       'இந்தக் கும்பத்தில் ஆவாஹனம் செய்த மஹாகணபதியை அவர் இடத்தில் ப்ரதிஷ்டை செய்கிறேன் — மங்கலத்துக்காக, நலனுக்காக, மீண்டும் வருவதற்காக.'),
     V('अकालमृत्युहरणं सर्वव्याधिनिवारणम् ।\nसर्वपापक्षयकरं मन्त्रपूतोदकं शुभम् ॥',
       'This auspicious water, purified by the mantras, takes away untimely death, removes all illness and destroys all sins. (Said drinking the kumbha water as tirtha; Mylapore manual.)',
       'ಅಕಾಲಮೃತ್ಯುವನ್ನು ಹರಿಸುವ, ಎಲ್ಲ ರೋಗಗಳನ್ನು ನಿವಾರಿಸುವ, ಎಲ್ಲ ಪಾಪಗಳನ್ನು ನಾಶಮಾಡುವ ಮಂತ್ರಪೂತ ಶುಭ ಜಲ. (ಕುಂಭಜಲವನ್ನು ತೀರ್ಥವಾಗಿ ಸ್ವೀಕರಿಸುವಾಗ.)',
       'अकाल मृत्यु को हरने वाला, सब रोगों को दूर करने वाला, सब पापों का क्षय करने वाला यह मन्त्रपूत शुभ जल है। (कुम्भ-जल को तीर्थ रूप में पीते हुए)',
       'అకాలమృత్యువును హరించే, అన్ని వ్యాధులను నివారించే, అన్ని పాపాలను నశింపజేసే మంత్రపూతమైన శుభజలం. (కుంభజలాన్ని తీర్థంగా సేవిస్తూ)',
       'அகால மரணத்தைப் போக்கும், எல்லா நோய்களையும் நீக்கும், எல்லாப் பாவங்களையும் அழிக்கும் மந்திரத்தால் தூய்மையான மங்கல நீர். (கும்ப நீரைத் தீர்த்தமாக அருந்தும்போது)')],
    when=SM))

# ---------------- closing prayer (both)
s = OLDS(G, 5)
s['note'] = ('Madhva: when the eight-fold mixture is finished and the skins are burnt, the uttaranga of the Common Procedure is done (without svishtakrit); offer the other half of the mixture to Ganapati as naivedya (Homa-Havana), and pray with this verse. Smarta: after the closing puja, the tarpana and the udvasana, take the raksha with बृहत्साम… and finish with the samarpana of the Common Procedure; the Tamil manual adds 32 japas of the mula mantra and says the homa is best done on Fridays or Chaturthi, at sunrise after sandhyavandane, and that those who cannot do it themselves have a priest do it with their name and nakshatra. Distribute the prasada and, if possible, feed brahmins.')
s['noteKn'] = ('ಮಾಧ್ವ: ಅಷ್ಟದ್ರವ್ಯ ಮುಗಿದು ಸಿಪ್ಪೆಗಳು ಸುಟ್ಟ ಮೇಲೆ ಸಾಮಾನ್ಯ ಕ್ರಮದ ಉತ್ತರಾಂಗ (ಸ್ವಿಷ್ಟಕೃತ್ ಇಲ್ಲದೆ); ಮಿಶ್ರಣದ ಇನ್ನರ್ಧವನ್ನು ಗಣಪತಿಗೆ ನೈವೇದ್ಯ ಮಾಡಿ (ಹೋಮ–ಹವನ), ಈ ಶ್ಲೋಕದಿಂದ ಪ್ರಾರ್ಥಿಸಿ. ಸ್ಮಾರ್ತ: ಸಮಾಪ್ತಿ ಪೂಜೆ, ತರ್ಪಣ, ಉದ್ವಾಸನದ ನಂತರ “ಬೃಹತ್ಸಾಮ…” ಎಂದು ರಕ್ಷೆ ಧರಿಸಿ, ಸಾಮಾನ್ಯ ಕ್ರಮದ ಸಮರ್ಪಣೆಯಿಂದ ಮುಗಿಸಿ; ತಮಿಳು ಗ್ರಂಥದಲ್ಲಿ ಮೂಲಮಂತ್ರ ಜಪ ೩೨, ಶುಕ್ರವಾರ ಅಥವಾ ಚತುರ್ಥಿಯಂದು ಸಂಧ್ಯಾವಂದನೆಯ ನಂತರ ಸೂರ್ಯೋದಯದಲ್ಲಿ ಉತ್ತಮ, ತಾವೇ ಮಾಡಲಾಗದವರು ಪುರೋಹಿತರಿಂದ ಹೆಸರು–ನಕ್ಷತ್ರ ಹೇಳಿ ಮಾಡಿಸಬಹುದು. ಪ್ರಸಾದ ವಿತರಿಸಿ, ಸಾಧ್ಯವಾದರೆ ಬ್ರಾಹ್ಮಣ ಭೋಜನ.')
s['titleEn'] = 'Closing prayer'
A(s)

META = {
    'export': 'ganapatiHoma',
    'id': 'ganapati-homa',
    'title': 'महागणपतिहोमः',
    'titleEn': 'Mahaganapati Homa (Gana-homa)',
    'order': 2,
    'deity': 'Ganapati',
    'source': 'Smarta: Mylapore Vedadhyayana Sabha, Mahaganapati Homa; Tamil manual "Sri Ganapati Homam". Madhva: H. Satyanarayanacharya, Homa-Havana; Tantrasara-sangraha 3.90-92. Ganapati Atharvashirsha',
    'summary': 'The Ganapati homa from start to end: the materials and counts, the sankalpa, (Smarta) the Vighneshvara puja, kalasha and kumbha, the invocation of Mahaganapati with nyasa, dhyana, mula mantra and prana-pratishtha and his puja; the agnimukha from the Common Procedure; Ganapati invoked in the fire; the main offerings of the eight materials with their mantras (the mula mantra, gananam tva, the Ganesha Gayatri, vakratunda, durva, puffed rice, the two coconut shells), the Ganapati Atharvashirsha section by section with svaha; the uttaranga; the closing puja, arati, mantrapushpa, pradakshina, tarpana, udvasana, tirtha and the prayer. Choose Madhva or Smarta at the top.',
    'summaryKn': 'ಗಣಪತಿ ಹೋಮ ಆರಂಭದಿಂದ ಕೊನೆಯವರೆಗೆ: ದ್ರವ್ಯ–ಸಂಖ್ಯೆಗಳು, ಸಂಕಲ್ಪ, (ಸ್ಮಾರ್ತ) ವಿಘ್ನೇಶ್ವರಪೂಜೆ, ಕಲಶ–ಕುಂಭ, ನ್ಯಾಸ–ಧ್ಯಾನ–ಮೂಲಮಂತ್ರ–ಪ್ರಾಣಪ್ರತಿಷ್ಠೆಗಳೊಡನೆ ಮಹಾಗಣಪತಿ ಆವಾಹನೆ ಮತ್ತು ಪೂಜೆ; ಸಾಮಾನ್ಯ ಕ್ರಮದ ಅಗ್ನಿಮುಖ; ಅಗ್ನಿಯಲ್ಲಿ ಗಣಪತಿ ಆವಾಹನೆ; ಅಷ್ಟದ್ರವ್ಯಗಳ ಪ್ರಧಾನಾಹುತಿಗಳು ಮಂತ್ರಸಹಿತ (ಮೂಲಮಂತ್ರ, ಗಣಾನಾಂ ತ್ವಾ, ಗಣೇಶ ಗಾಯತ್ರಿ, ವಕ್ರತುಂಡ, ಗರಿಕೆ, ಅರಳು, ಎರಡು ಕಾಯಿಚಿಪ್ಪು), ಗಣಪತಿ ಅಥರ್ವಶೀರ್ಷ ಭಾಗಶಃ ಸ್ವಾಹಾಸಹಿತ; ಉತ್ತರಾಂಗ; ಸಮಾಪ್ತಿ ಪೂಜೆ, ಆರತಿ, ಮಂತ್ರಪುಷ್ಪ, ಪ್ರದಕ್ಷಿಣೆ, ತರ್ಪಣ, ಉದ್ವಾಸನ, ತೀರ್ಥ, ಪ್ರಾರ್ಥನೆ. ಮೇಲ್ಭಾಗದಲ್ಲಿ ಮಾಧ್ವ ಅಥವಾ ಸ್ಮಾರ್ತ ಆರಿಸಿ.',
    'variants': [{'key': 'tradition', 'title': 'Tradition', 'titleKn': 'ಸಂಪ್ರದಾಯ',
                  'options': [('madhva', 'Madhva', 'ಮಾಧ್ವ'), ('smarta', 'Smarta', 'ಸ್ಮಾರ್ತ')]}],
    'difficulty': 'advanced',
    'completeness': 'complete',
    'contentNote': 'The whole homa in order, with the agnimukha and uttaranga in “Homa: Common Procedure”, to which the steps here send you. The Smarta form follows the printed Mylapore Vedadhyayana Sabha prayoga (Tamil Nadu); its mula mantra is an upadesha mantra, printed here as the open manuals give it, to be learnt from your guru. The Madhva form follows Homa-Havana (the Apurita tantra, without pranita, Brahma, idhma, chakshushi or svishtakrit); the Madhva offering mantra is the Vighnesha mantra of the Tantrasara taken from the guru, which is not printed, and Madhva manuals do not use the Atharvashirsha. Homas are traditionally done with a trained priest; follow your family manual where it differs.',
}

SUMMARIES = {
    'hi': 'आरम्भ से अन्त तक गणपति होम: द्रव्य और संख्या, संकल्प, (स्मार्त) विघ्नेश्वर पूजा, कलश और कुम्भ, न्यास, ध्यान, मूलमन्त्र और प्राणप्रतिष्ठा सहित महागणपति का आवाहन और पूजा; सामान्य विधि से अग्निमुख; अग्नि में गणपति का आवाहन; अष्टद्रव्यों की प्रधान आहुतियाँ मन्त्रों सहित (मूलमन्त्र, गणानां त्वा, गणेश गायत्री, वक्रतुण्ड, दूर्वा, लाजा, नारियल के दो कपाल), गणपति अथर्वशीर्ष के प्रत्येक खण्ड से स्वाहा सहित आहुति; उत्तराङ्ग; समापन पूजा, आरती, मन्त्रपुष्प, प्रदक्षिणा, तर्पण, उद्वासन, तीर्थ और प्रार्थना। ऊपर माध्व या स्मार्त चुनें।',
    'te': 'ప్రారంభం నుండి చివరి వరకు గణపతి హోమం: ద్రవ్యాలు, సంఖ్యలు, సంకల్పం, (స్మార్త) విఘ్నేశ్వర పూజ, కలశం, కుంభం, న్యాస ధ్యాన మూలమంత్ర ప్రాణప్రతిష్ఠలతో మహాగణపతి ఆవాహన, పూజ; సామాన్య విధి నుండి అగ్నిముఖం; అగ్నిలో గణపతి ఆవాహన; అష్టద్రవ్యాల ప్రధానాహుతులు మంత్రాలతో (మూలమంత్రం, గణానాం త్వా, గణేశ గాయత్రి, వక్రతుండ, గరిక, పేలాలు, కొబ్బరి రెండు చిప్పలు), గణపతి అథర్వశీర్షం ప్రతి ఖండం స్వాహాతో; ఉత్తరాంగం; ముగింపు పూజ, ఆరతి, మంత్రపుష్పం, ప్రదక్షిణ, తర్పణం, ఉద్వాసనం, తీర్థం, ప్రార్థన. పైన మాధ్వ లేదా స్మార్త ఎంచుకోండి.',
    'ta': 'தொடக்கம் முதல் இறுதி வரை கணபதி ஹோமம்: த்ரவ்யங்களும் எண்ணிக்கைகளும், ஸங்கல்பம், (ஸ்மார்த்த) விக்னேச்வர பூஜை, கலசமும் கும்பமும், ந்யாஸம் தியானம் மூலமந்திரம் ப்ராணப்ரதிஷ்டையுடன் மஹாகணபதி ஆவாஹனமும் பூஜையும்; பொது முறையிலிருந்து அக்னிமுகம்; அக்னியில் கணபதி ஆவாஹனம்; அஷ்டத்ரவ்யங்களின் பிரதான ஆஹுதிகள் மந்திரங்களுடன் (மூலமந்திரம், கணானாம் த்வா, கணேச காயத்ரீ, வக்ரதுண்ட, அருகம்புல், பொரி, தேங்காய் இரு ஓடுகள்), கணபதி அதர்வசீர்ஷம் ஒவ்வொரு பகுதியும் ஸ்வாஹாவுடன்; உத்தராங்கம்; நிறைவு பூஜை, ஆரத்தி, மந்த்ரபுஷ்பம், வலம்வருதல், தர்ப்பணம், உத்வாஸனம், தீர்த்தம், பிரார்த்தனை. மேலே மாத்வ அல்லது ஸ்மார்த்த தேர்ந்தெடுக்கவும்.',
}
