from gen import V, OLD, S, OLDS, old

P = 'homa-purvanga'
NP = 'nitya-puja'
M = {'tradition': ['madhva']}
SM = {'tradition': ['smarta']}

HEADER = '''
Homa: the common procedure (purvanga and uttaranga) shared by every homa in the app, printed in
full in the order it is done: achamana, pranayama, deshakala and sankalpa, kalasha and the short
punyahavachana, the sthandila, bringing and installing the fire, the agni-mukha, then (after the
pradhana homa given in each homa's own text) the uttaranga: Madhva (Rigvedi, Ashvalayana) and
Smarta (Yajurvedi, Apastamba) forms as reader-selectable variants.

Sources:
 - Madhva (M1): "Agnimukha Prayogah" (Rigvediya agnimukha prayoga, Madhva), ed. Haranahalli
   Aravindacharya. archive.org: agnimukha. The whole Madhva sequence: sankalpa, six lines, Svaha,
   Bharati and Lakshmi in the kunda, juṣṭo damūnā / ehy agne avahana, pratishthapana, catvāri
   śṛṅgā, Mukhyaprana and Parashurama dhyana, eṣa hi devaḥ, the anvadhana list, paristarana,
   pātrāsādana, Brahma (nirastaḥ parāvasuḥ, idam aham arvāvasoḥ sadane sīdāmi), savitus tvā,
   agni-alankarana (viśvāni no, yas tvā hṛdā, yasmai tvam sukṛte), ayaṃ ta idhma, aghara,
   ajyabhaga, the sixteen samskaras and Vaishnava offerings, svishtakrit, idhma-bandhana to Rudra,
   ayāś cāgne, ato devā, idaṃ viṣṇuḥ, the four vyahritis to Aniruddha … Vasudeva, anājñātam,
   puruṣasammitaḥ, yat pākatrā, yad vo devā, sarvaprayaschitta, samudrād ūrmiḥ, vi jyotiṣā,
   samsrava, pūrṇam asi, the marjana, āpo asmān, idam āpaḥ, māhaṃ prajām, agne tvaṃ no,
   bodhā me, mā nas toke, bṛhat sāma, tryāyuṣam, agne naya (eight verses), the closing prayers.
 - Madhva (M2): Dr. H. Satyanarayanacharya, "Homa-Havana", Sri Raghavendra Darshana Kendra,
   Bangalore 2012 (archive.org: 20230827_20230827_0721): sthandila, fire, the kravyada part thrown
   away with the Sudarshana astra mantra, samskaras and vishnu-ahutis, the five kinds of worship.
 - Madhva: Tantrasara-sangraha of Sri Madhvacharya, Mysore 2003 (archive.org:
   tantrasarasangraha-of-sri-anandatirtha-bhagavatpadacharya-2003) 2.13-14, 2.18-21.
 - "Sri Mahasudarshana Kalpa", ed. S. R. Narasimha Murthy (archive.org: mahasudarshanakalpa),
   homa-vidhi: a second Karnataka Rigvedi witness for the anvadhana list (ayāsam agniṃ devān
   viṣṇum agniṃ vāyuṃ sūryaṃ prajāpatiṃ ca prāyaścitta-devatāḥ, agniṃ trivāram, marutaś ca,
   viśvān devān saṃsrāveṇa) and for samudrād ūrmiḥ as purnahuti.
 - Smarta (S1): Muddu Shrautigal, "Apastambiya Purvapara Prayoga" (Raja Veda Kavya Pathashala,
   Kumbakonam; Grantha), "sarvatantra-sadharana agnimukha-prayoga", transcribed in
   vishvasa/vedAH_yajuH (taittirIyam/sUtram/ApastambaH/gRhyam/paddhatiH/muddu-shrautI/
   prayoga-ratnam/angam/agni-mukham): ullekhana, pratishtha, paristarana, patrasadana,
   brahmavarana, ajya and darvi samskara, paridhis, parishechana, idhma, aghara, ajyabhaga,
   agnimukha, prayaschitta, jaya-abhyatana-rashtrabhrt, prajapati, vyahritis, svishtakrit,
   paridhi-praharana, samsrava, anājñātam, sarvaprayaschitta, sapta te agne, parishechana,
   marjana, varadana, upasthana.
 - Smarta (S2): "Mahaganapati Homah", Mylapore Vedadhyayana Sabha (E. Balasubrahmanya Sastri,
   Janbunatha Sastri, N. V. Nataraja Dikshitar; publ. A. Subbaraman), transcribed in the same
   repository (…/paddhatiH/mailApura-vedAdhyayana-sabhA/ganapati_homa): the same Apastamba
   agnimukha and uttaranga, with purnahuti, the upasthana prayers, bṛhat sāma raksha and
   kāyena vācā samarpana.
 - Smarta: Apastamba Grihya Sutra with Haradatta and Sudarshanacharya (GRETIL) 1.12-19, 2.3-8;
   "Apastamba Purva Prayogam", Srirama Ramanuja Acharya (srimatham.com 2012; archive.org:
   apastamba_pUrva_prayoga_srImaTham_2012), pp. 16-29 (candramā manaso jātaḥ at pratishtha, the
   vyahriti offerings before the pradhana homa).
 - Vedic and sutra texts checked: Rigveda (GRETIL, Aufrecht) 1.22.16-17, 1.76.2, 1.114.8, 1.147.2,
   1.189.1-8, 4.58.1-11, 5.4.9-11, 5.24.1-4, 10.2.5, 10.9.8, 10.90.1-16; Ashvalayana Shrauta
   Sutra (GRETIL) 1.11.6-8 (pūrṇam asi, the marjana, māhaṃ prajām), 1.11.13 (ayāś cāgne),
   3.13.18 (yad vo devā), 4.12.2 (bṛhat sāma), and the Brahma's mantras (nirastaḥ parāvasuḥ);
   Shankhayana Shrauta Sutra 4.11.3 (pūrṇam asi); Taittiriya Samhita 3.4.4 (jaya), 3.4.5
   (abhyatana), 3.4.7 (rashtrabhrt), 1.8.14, 4.6.5; Taittiriya Brahmana 3.7.11, 3.8.10 (vishvAsa/
   vedAH_yajuH); Bhagavata 6.8.10 (oṃ viṣṇave namaḥ, the Vishnu shadakshara).
 - Prayers shared with the app's Nitya Puja (achamana, pranayama, deshakala, kalasha, kāyena
   vācā) are copied from that text so the readings agree; Gita 3.10 as in the app's Gita.
Not printed (said so in contentNote): the Svaha and Bharati dhyana verses and the smriti-dhyana of
Agni (saptahastaś catuḥśṛṅgaḥ …), found in M1 alone; the Brahma's japa and the prayers ca me
svaraś ca me and svasti śraddhāṃ medhām (M1 alone, not found in the sutras checked); the
initiation offerings to the tattva-nyasa, matrika-nyasa and avarana deities.
'''

# ---------------------------------------------------------------- helpers for meanings
def ty(en, kn, hi, te, ta):
    return en, kn, hi, te, ta


SECTIONS = []
A = SECTIONS.append

# 0 Before you begin
s0 = OLDS(P, 0)
s0['note'] = ('A homa is an offering into a consecrated fire. This text gives the parts every homa shares, in order; each homa text (Ganapati, Sudarshana and the rest) has its own sankalpa, deity worship and main offerings, and tells you where to come back here. Keep ready: a sthandila (a square platform of sand or brick about four fingers high, or a copper or brick kunda; never iron), dry fuel sticks (samidh) of a span (Madhvas: ashvattha, palasha and other milky trees; amrita, i.e. guduchi, for health), three paridhi sticks (Smarta), a bundle of darbha, ghee (ajya) in a vessel, two ladles (sruk and sruva, or for Smartas two leaves as darvi), a prokshani vessel of water, a pranita vessel, akshata, flowers, gandha, a kalasha of water, the materials of the particular homa, camphor, betel and dakshina. The yajamana sits facing east, with his wife on his right; a Brahma (a learned person, or a kurcha of darbha on a seat) sits to the south of the fire; the acharya or purohita guides the rite. Do bath, sandhyavandane and your daily puja first. Choose Madhva (Rigvedi, Ashvalayana) or Smarta (Yajurvedi, Apastamba) at the top; Rigvedi Smartas follow the Ashvalayana steps shown for Madhvas, saying the plain tyaga (अग्नय इदं न मम) where the Madhva form names the Lord within the deity. Mantras are said aloud unless the note says "silently".')
s0['noteKn'] = ('ಹೋಮವೆಂದರೆ ಸಂಸ್ಕರಿಸಿದ ಅಗ್ನಿಯಲ್ಲಿ ನೀಡುವ ಆಹುತಿ. ಎಲ್ಲ ಹೋಮಗಳಿಗೂ ಸಮಾನವಾದ ಭಾಗಗಳನ್ನು ಇಲ್ಲಿ ಕ್ರಮವಾಗಿ ಕೊಡಲಾಗಿದೆ; ಪ್ರತಿಯೊಂದು ಹೋಮದ ಪಠ್ಯದಲ್ಲಿ (ಗಣಪತಿ, ಸುದರ್ಶನ ಇತ್ಯಾದಿ) ಅದರ ಸಂಕಲ್ಪ, ದೇವತಾಪೂಜೆ, ಪ್ರಧಾನಾಹುತಿಗಳು ಇವೆ, ಮತ್ತು ಯಾವಾಗ ಇಲ್ಲಿಗೆ ಮರಳಬೇಕೆಂದು ಹೇಳುತ್ತದೆ. ಸಿದ್ಧಪಡಿಸಿಕೊಳ್ಳಿ: ಸ್ಥಂಡಿಲ (ಮರಳು ಅಥವಾ ಇಟ್ಟಿಗೆಯ ನಾಲ್ಕು ಅಂಗುಲ ಎತ್ತರದ ಚೌಕ ವೇದಿಕೆ, ಅಥವಾ ತಾಮ್ರ/ಇಟ್ಟಿಗೆಯ ಕುಂಡ; ಕಬ್ಬಿಣ ಬೇಡ), ಗೇಣುದ್ದದ ಒಣ ಸಮಿಧೆಗಳು (ಮಾಧ್ವರಲ್ಲಿ ಅಶ್ವತ್ಥ, ಪಲಾಶ ಮುಂತಾದ ಕ್ಷೀರವೃಕ್ಷಗಳು; ಆರೋಗ್ಯಕ್ಕಾಗಿ ಅಮೃತಬಳ್ಳಿ), ಮೂರು ಪರಿಧಿ ಕಡ್ಡಿಗಳು (ಸ್ಮಾರ್ತ), ದರ್ಭೆಯ ಕಟ್ಟು, ತುಪ್ಪ, ಸ್ರುಕ್–ಸ್ರುವ (ಸ್ಮಾರ್ತರಲ್ಲಿ ದರ್ವಿಯಾಗಿ ಎರಡು ಎಲೆಗಳು), ಪ್ರೋಕ್ಷಣೀ ಪಾತ್ರೆ, ಪ್ರಣೀತಾ ಪಾತ್ರೆ, ಅಕ್ಷತೆ, ಹೂವು, ಗಂಧ, ನೀರಿನ ಕಲಶ, ಆ ಹೋಮದ ದ್ರವ್ಯಗಳು, ಕರ್ಪೂರ, ವೀಳ್ಯ, ದಕ್ಷಿಣೆ. ಯಜಮಾನನು ಪೂರ್ವಾಭಿಮುಖನಾಗಿ, ಪತ್ನಿ ಬಲಭಾಗದಲ್ಲಿ; ಅಗ್ನಿಯ ದಕ್ಷಿಣಕ್ಕೆ ಬ್ರಹ್ಮ (ವಿದ್ವಾಂಸರು ಅಥವಾ ಆಸನದ ಮೇಲೆ ದರ್ಭೆಯ ಕೂರ್ಚ); ಆಚಾರ್ಯರು ಕರ್ಮವನ್ನು ನಡೆಸಿಕೊಡುತ್ತಾರೆ. ಮೊದಲು ಸ್ನಾನ, ಸಂಧ್ಯಾವಂದನೆ, ನಿತ್ಯಪೂಜೆ ಮುಗಿಸಿ. ಮೇಲ್ಭಾಗದಲ್ಲಿ ಮಾಧ್ವ (ಋಗ್ವೇದಿ, ಆಶ್ವಲಾಯನ) ಅಥವಾ ಸ್ಮಾರ್ತ (ಯಜುರ್ವೇದಿ, ಆಪಸ್ತಂಬ) ಆರಿಸಿ; ಋಗ್ವೇದಿ ಸ್ಮಾರ್ತರು ಮಾಧ್ವರಿಗೆ ತೋರಿಸಿದ ಆಶ್ವಲಾಯನ ಕ್ರಮವನ್ನೇ ಅನುಸರಿಸಿ, ಮಾಧ್ವ ರೂಪದಲ್ಲಿ ಅಂತರ್ಯಾಮಿಯನ್ನು ಹೆಸರಿಸುವಲ್ಲಿ ಸಾಮಾನ್ಯ ತ್ಯಾಗ (ಅಗ್ನಯ ಇದಂ ನ ಮಮ) ಹೇಳುತ್ತಾರೆ. “ಮೌನವಾಗಿ” ಎಂದಿಲ್ಲದಿದ್ದರೆ ಮಂತ್ರಗಳನ್ನು ಗಟ್ಟಿಯಾಗಿ ಹೇಳಿ.')
A(s0)
# 1 Why a homa is done (Madhva)
A(OLDS(P, 1))

# 2 Achamana, pranayama, deshakala (both)
A(S('आचमनं प्राणायामो देशकालश्च', 'Achamana, pranayama and the time and place',
    'Sip water three times with the first three names (केशवाय स्वाहा …), touch the limbs with the rest, then do pranayama: close the nostrils, and with the breath held say the pranayama mantra once in the mind (three times in all). Then, holding akshata and water, say the time and place, replacing each अमुक with today’s year, season, month, fortnight, tithi, weekday and nakshatra (and, outside the Godavari region, your own place). Smartas first remember Ganapati with शुक्लाम्बरधरं….',
    'ಮೊದಲ ಮೂರು ನಾಮಗಳಿಂದ (ಕೇಶವಾಯ ಸ್ವಾಹಾ …) ಮೂರು ಬಾರಿ ನೀರು ಆಚಮನ ಮಾಡಿ, ಉಳಿದ ನಾಮಗಳಿಂದ ಅಂಗಸ್ಪರ್ಶ ಮಾಡಿ; ನಂತರ ಪ್ರಾಣಾಯಾಮ: ಮೂಗನ್ನು ಮುಚ್ಚಿ, ಉಸಿರು ಹಿಡಿದಿರುವಾಗ ಪ್ರಾಣಾಯಾಮ ಮಂತ್ರವನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಹೇಳಿ (ಒಟ್ಟು ಮೂರು ಬಾರಿ). ಆಮೇಲೆ ಅಕ್ಷತೆ–ನೀರು ಹಿಡಿದು ದೇಶಕಾಲ ಹೇಳಿ: ಪ್ರತಿಯೊಂದು “ಅಮುಕ”ದ ಸ್ಥಳದಲ್ಲಿ ಇಂದಿನ ಸಂವತ್ಸರ, ಅಯನ, ಋತು, ಮಾಸ, ಪಕ್ಷ, ತಿಥಿ, ವಾರ, ನಕ್ಷತ್ರಗಳನ್ನು (ಗೋದಾವರೀ ಪ್ರದೇಶದ ಹೊರಗಿದ್ದರೆ ನಿಮ್ಮ ಸ್ಥಳವನ್ನೂ) ಹೇಳಿ. ಸ್ಮಾರ್ತರು ಮೊದಲು “ಶುಕ್ಲಾಂಬರಧರಂ…” ಎಂದು ಗಣಪತಿಯನ್ನು ಸ್ಮರಿಸುತ್ತಾರೆ.',
    [OLD(P, 3, 0, when=SM), OLD(NP, 3, 0, when=None), OLD(NP, 3, 1, when=None), OLD(NP, 2, 4, when=None), OLD(NP, 12, 4, when=None)]))

# 3 Madhva sankalpa
A(S('सङ्कल्पः', 'Sankalpa of the homa',
    'Holding akshata and water, make the sankalpa of the homa: say its name in place of अमुक (for example गणहोमाख्यं, सुदर्शनहोमाख्यं, पवमानहोमाख्यं) and, where the homa text gives one, add its own purpose and count. Let the water fall into the plate (M1).',
    'ಅಕ್ಷತೆ–ನೀರು ಹಿಡಿದು ಹೋಮದ ಸಂಕಲ್ಪ ಮಾಡಿ: “ಅಮುಕ”ದ ಸ್ಥಳದಲ್ಲಿ ಹೋಮದ ಹೆಸರು (ಉದಾ: ಗಣಹೋಮಾಖ್ಯಂ, ಸುದರ್ಶನಹೋಮಾಖ್ಯಂ, ಪವಮಾನಹೋಮಾಖ್ಯಂ) ಹೇಳಿ; ಆ ಹೋಮದ ಪಠ್ಯವು ಪ್ರಯೋಜನ ಮತ್ತು ಸಂಖ್ಯೆಯನ್ನು ಕೊಟ್ಟಿದ್ದರೆ ಅದನ್ನೂ ಸೇರಿಸಿ. ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ (ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ).',
    [OLD(P, 2, 1)], when=M))
# 4 Smarta sankalpa
A(S('सङ्कल्पः', 'Sankalpa of the homa',
    'Holding akshata and water, make the sankalpa: name the homa and its purpose in place of अमुक (the homa text gives its own full sankalpa where it has one, as the Mahaganapati homa does). Let the water fall into the plate.',
    'ಅಕ್ಷತೆ–ನೀರು ಹಿಡಿದು ಸಂಕಲ್ಪ ಮಾಡಿ: “ಅಮುಕ”ದ ಸ್ಥಳದಲ್ಲಿ ಹೋಮದ ಹೆಸರು ಮತ್ತು ಪ್ರಯೋಜನ ಹೇಳಿ (ಮಹಾಗಣಪತಿ ಹೋಮದಂತೆ, ಹೋಮದ ಪಠ್ಯದಲ್ಲಿ ಪೂರ್ಣ ಸಂಕಲ್ಪವಿದ್ದರೆ ಅದನ್ನು ಹೇಳಿ). ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ.',
    [OLD(P, 3, 1)], when=SM))

# 5 Kalasha and short punyahavachana
s = OLDS(P, 4)
s['verses'] = [OLD(NP, 14, 0, when=None), OLD(NP, 14, 1, when=None), OLD(NP, 14, 2, when=None), OLD(NP, 14, 3, when=None)] + s['verses']
s['note'] = ('To the north-east of the fire, on a little rangoli design or a heap of rice, set a kalasha of water with mango leaves and a coconut. Closing its mouth with the right hand, recite the kalasha verses; then invite Varuna into it with इमं मे वरुण…, offer gandha, akshata and flowers, and keep it touched while the main mantras of the homa are recited, so that its water is charged; at the end the family is sprinkled with it (Homa-Havana; Mylapore manual). For the short punyahavachana the yajamana asks the brahmins (or the purohita) three times and they answer: punyaham, svasti and riddhi. Sprinkle the place, the materials and yourself with the water, saying अपवित्रः पवित्रो वा…. Families who do the full punyahavachana (with the Vedic verses for each call) open the Punyahavachana text in the library at this point.')
s['noteKn'] = ('ಅಗ್ನಿಯ ಈಶಾನ್ಯಕ್ಕೆ, ಸಣ್ಣ ರಂಗೋಲಿ ಅಥವಾ ಅಕ್ಕಿಯ ರಾಶಿಯ ಮೇಲೆ, ಮಾವಿನೆಲೆ–ತೆಂಗಿನಕಾಯಿಯೊಡನೆ ನೀರಿನ ಕಲಶ ಇಡಿ. ಬಲಗೈಯಿಂದ ಅದರ ಬಾಯಿ ಮುಚ್ಚಿ ಕಲಶ ಶ್ಲೋಕಗಳನ್ನು ಹೇಳಿ; ನಂತರ “ಇಮಂ ಮೇ ವರುಣ…” ಎಂದು ವರುಣನನ್ನು ಆವಾಹಿಸಿ, ಗಂಧ–ಅಕ್ಷತೆ–ಹೂವು ಅರ್ಪಿಸಿ; ಹೋಮದ ಪ್ರಧಾನ ಮಂತ್ರಗಳನ್ನು ಹೇಳುವಾಗ ಕಲಶವನ್ನು ಮುಟ್ಟಿಕೊಂಡಿರಿ, ಅದರ ಜಲ ಮಂತ್ರಪೂತವಾಗುತ್ತದೆ; ಕೊನೆಯಲ್ಲಿ ಮನೆಯವರಿಗೆ ಅದನ್ನು ಪ್ರೋಕ್ಷಿಸುತ್ತಾರೆ (ಹೋಮ–ಹವನ; ಮೈಲಾಪುರ ಗ್ರಂಥ). ಸಂಕ್ಷಿಪ್ತ ಪುಣ್ಯಾಹವಾಚನದಲ್ಲಿ ಯಜಮಾನನು ಬ್ರಾಹ್ಮಣರನ್ನು (ಅಥವಾ ಪುರೋಹಿತರನ್ನು) ಮೂರು ಬಾರಿ ಕೇಳುತ್ತಾನೆ, ಅವರು “ಪುಣ್ಯಾಹಂ, ಸ್ವಸ್ತಿ, ಋದ್ಧಿ” ಎಂದು ಉತ್ತರಿಸುತ್ತಾರೆ. “ಅಪವಿತ್ರಃ ಪವಿತ್ರೋ ವಾ…” ಎಂದು ಸ್ಥಳ, ದ್ರವ್ಯಗಳು ಮತ್ತು ತನ್ನ ಮೇಲೆ ನೀರು ಪ್ರೋಕ್ಷಿಸಿ. ಪೂರ್ಣ ಪುಣ್ಯಾಹವಾಚನ ಮಾಡುವವರು ಇಲ್ಲಿ ಗ್ರಂಥಾಲಯದ “ಪುಣ್ಯಾಹವಾಚನ” ಪಠ್ಯವನ್ನು ತೆರೆಯಿರಿ.')
A(s)

# 6,7 sthandila
A(OLDS(P, 5))
s = OLDS(P, 6)
s['note'] = ('Smear the sthandila (or the floor of the kunda), sprinkle it with rice flour or decorate it with rangoli, and smooth it with the hand. Holding a darbha or a chip of wood between thumb and ring finger, draw three lines from west to east, beginning in the south, and three from south to north across them, beginning in the west (Muddu Shrauti; Apastamba Grihya Sutra as the commentators explain the lekhana). The Mylapore manual has the lines drawn with the verses ब्रह्म जज्ञानम्, नाके सुपर्णम्, आप्यायस्व, यो रुद्रो अग्नौ, इदं विष्णुः and इन्द्रं विश्वा, one for each line; the sutra and Muddu Shrauti draw them silently. Lay the darbha on the lines, sprinkle the sthandila with water, throw the darbha to the south-west and touch water.')
s['noteKn'] = ('ಸ್ಥಂಡಿಲವನ್ನು (ಅಥವಾ ಕುಂಡದ ತಳವನ್ನು) ಸಾರಿಸಿ, ಅಕ್ಕಿಹಿಟ್ಟು ಅಥವಾ ರಂಗೋಲಿಯಿಂದ ಅಲಂಕರಿಸಿ, ಕೈಯಿಂದ ಸಮಗೊಳಿಸಿ. ಹೆಬ್ಬೆರಳು–ಉಂಗುರಬೆರಳುಗಳ ನಡುವೆ ದರ್ಭೆ ಅಥವಾ ಸಮಿಧೆಯ ಚೂರು ಹಿಡಿದು, ದಕ್ಷಿಣದಿಂದ ಆರಂಭಿಸಿ ಪಶ್ಚಿಮದಿಂದ ಪೂರ್ವಕ್ಕೆ ಮೂರು ರೇಖೆ, ಪಶ್ಚಿಮದಿಂದ ಆರಂಭಿಸಿ ದಕ್ಷಿಣದಿಂದ ಉತ್ತರಕ್ಕೆ ಅಡ್ಡವಾಗಿ ಮೂರು ರೇಖೆ ಎಳೆಯಿರಿ (ಮುದ್ದು ಶ್ರೌತಿ; ಆಪಸ್ತಂಬ ಗೃಹ್ಯಸೂತ್ರ ವ್ಯಾಖ್ಯಾನ). ಮೈಲಾಪುರ ಗ್ರಂಥದಲ್ಲಿ ಪ್ರತಿ ರೇಖೆಗೂ ಒಂದು ಮಂತ್ರ (ಬ್ರಹ್ಮ ಜಜ್ಞಾನಮ್, ನಾಕೇ ಸುಪರ್ಣಮ್, ಆಪ್ಯಾಯಸ್ವ, ಯೋ ರುದ್ರೋ ಅಗ್ನೌ, ಇದಂ ವಿಷ್ಣುಃ, ಇಂದ್ರಂ ವಿಶ್ವಾ); ಸೂತ್ರ ಮತ್ತು ಮುದ್ದು ಶ್ರೌತಿ ಮೌನವಾಗಿ ಎಳೆಯಲು ಹೇಳುತ್ತಾರೆ. ದರ್ಭೆಯನ್ನು ರೇಖೆಗಳ ಮೇಲೆ ಇಟ್ಟು, ಸ್ಥಂಡಿಲಕ್ಕೆ ನೀರು ಪ್ರೋಕ್ಷಿಸಿ, ದರ್ಭೆಯನ್ನು ನೈಋತ್ಯಕ್ಕೆ ಎಸೆದು ನೀರು ಮುಟ್ಟಿ.')
A(s)

# 8 Madhva fire installation
s = OLDS(P, 7)
astra = V('ॐ सहस्रार हुं फट् ॥',
          'Om, O thousand-spoked (discus), hum phat. (The astra mantra of Sudarshana, said while the kravyada part of the fire is thrown to the south-west.)',
          'ಓಂ, ಸಾವಿರ ಅರಗಳುಳ್ಳ (ಚಕ್ರವೇ), ಹುಂ ಫಟ್. (ಸುದರ್ಶನನ ಅಸ್ತ್ರಮಂತ್ರ; ಅಗ್ನಿಯ ಕ್ರವ್ಯಾದ ಭಾಗವನ್ನು ನೈಋತ್ಯಕ್ಕೆ ಎಸೆಯುವಾಗ ಹೇಳುವುದು.)',
          'ॐ हे सहस्रार (चक्र), हुं फट्। (सुदर्शन का अस्त्रमन्त्र; अग्नि का क्रव्याद भाग नैर्ऋत्य में फेंकते समय।)',
          'ఓం, వేయి ఆకులు గల (చక్రమా), హుం ఫట్. (సుదర్శనుని అస్త్రమంత్రం; అగ్నిలోని క్రవ్యాద భాగాన్ని నైరృతికి విసిరేటప్పుడు.)',
          'ஓம், ஆயிரம் ஆரங்கள் கொண்ட (சக்கரமே), ஹும் பட். (ஸுதர்சனரின் அஸ்த்ர மந்திரம்; அக்னியின் க்ரவ்யாத பாகத்தை தென்மேற்கில் எறியும்போது.)')
lak = V('कौशेयपीतवसनामरविन्दनेत्रां\nपद्मद्वयाभयवरोद्यतपद्महस्ताम् ।\nउद्यच्छतार्कसदृशीं परमाङ्कसंस्थां\nध्यायेद्विधीशनुतपादयुगां जनित्रीम् ॥',
        'One should meditate on the Mother of all, clad in yellow silk, lotus-eyed, her lotus hands holding two lotuses and showing fearlessness and boons, bright as a hundred rising suns, seated in the lap of the Supreme Lord, whose two feet Brahma and Shiva praise. (Lakshmi in the kunda, as M1 has it; the same verse is the dhyana of the Lakshmi Hridaya.)',
        'ಹಳದಿ ರೇಷ್ಮೆ ಉಟ್ಟ, ಕಮಲನಯನೆಯಾದ, ಕಮಲಹಸ್ತಗಳಲ್ಲಿ ಎರಡು ಕಮಲಗಳನ್ನೂ ಅಭಯ–ವರಗಳನ್ನೂ ಧರಿಸಿದ, ನೂರು ಉದಯಸೂರ್ಯರಂತೆ ಹೊಳೆಯುವ, ಪರಮಾತ್ಮನ ತೊಡೆಯ ಮೇಲೆ ಕುಳಿತ, ಬ್ರಹ್ಮ–ರುದ್ರರು ಸ್ತುತಿಸುವ ಪಾದಯುಗಳುಳ್ಳ ಜಗನ್ಮಾತೆಯನ್ನು ಧ್ಯಾನಿಸಬೇಕು. (ಕುಂಡದಲ್ಲಿ ಲಕ್ಷ್ಮೀಧ್ಯಾನ, ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗದಂತೆ; ಇದೇ ಶ್ಲೋಕ ಲಕ್ಷ್ಮೀಹೃದಯದ ಧ್ಯಾನ.)',
        'पीले रेशमी वस्त्र पहने, कमलनयनी, कमल-हाथों में दो कमल तथा अभय और वर धारण किए, सौ उदित सूर्यों के समान कान्तिमती, परमात्मा की गोद में विराजमान, जिनके चरणों की ब्रह्मा और शिव स्तुति करते हैं, उस जगन्माता का ध्यान करे। (कुण्ड में लक्ष्मी का ध्यान।)',
        'పసుపు పట్టు వస్త్రం ధరించిన, కమలనేత్రి, కమలహస్తాలలో రెండు పద్మాలను, అభయ వరాలను ధరించిన, నూరు ఉదయసూర్యుల వంటి కాంతి గల, పరమాత్ముని ఒడిలో ఉన్న, బ్రహ్మ రుద్రులు స్తుతించే పాదయుగళం గల జగన్మాతను ధ్యానించాలి. (కుండంలో లక్ష్మీధ్యానం.)',
        'மஞ்சள் பட்டு உடுத்தியவள், தாமரைக் கண்ணாள், தாமரைக் கரங்களில் இரு தாமரைகளையும் அபய வரங்களையும் ஏந்தியவள், நூறு உதய சூரியர்களைப் போல் ஒளிர்பவள், பரமனின் மடியில் அமர்ந்தவள், பிரம்மனும் ஈசனும் போற்றும் திருவடிகள் உடைய ஜகன்மாதாவை தியானிக்க வேண்டும். (குண்டத்தில் லக்ஷ்மீ தியானம்.)')
s['verses'] = [s['verses'][0], lak, astra] + s['verses'][1:]
s['note'] = ('The best fire is churned from arani sticks; next, fire brought from the house of a shrotriya; otherwise fire from your own hearth; never from a cremation ground, a kitchen where meat is cooked, or a smoky fire. Suvasinis bring burning smokeless coals in a clay or copper dish covered with another, and set it in the south-east of the sthandila (Homa-Havana). In the kunda remember Svaha (red-clad, seated in the lap of her lord Agni), Bharati within her, and within Bharati Lakshmi in the form of Harini (M1; the Svaha and Bharati verses are not printed here), and the Lord within yourself, with the first two verses. With a darbha lit from the fire and the Sudarshana astra mantra, throw a little of the fire (its kravyada part, the flesh-eating fire of the pyre) to the south-west and wash your hands (Homa-Havana). Invite Agni with the two Rigvedic verses, scattering akshata, uncover the dish, then lay the coals on the six lines with the vyahritis, naming the fire according to the rite (Homa-Havana: Varada for shanti, Balavardhana for paushtika, Vitapa for prayaschitta). Sprinkle akshata-water into the empty dish, add fuel and tulasi wood, and blow the fire alight with a bamboo tube.')
s['noteKn'] = ('ಅರಣಿಮಥನದ ಅಗ್ನಿ ಶ್ರೇಷ್ಠ; ನಂತರ ಶ್ರೋತ್ರಿಯರ ಮನೆಯಿಂದ ತಂದ ಅಗ್ನಿ; ಇಲ್ಲವೇ ಸ್ವಗೃಹದ ಒಲೆಯ ಅಗ್ನಿ; ಸ್ಮಶಾನ, ಮಾಂಸ ಬೇಯಿಸುವ ಅಡುಗೆಮನೆ, ಹೊಗೆಯಾಡುವ ಬೆಂಕಿ ಬೇಡ. ಸುವಾಸಿನಿಯರು ಹೊಗೆಯಿಲ್ಲದ ಕೆಂಡವನ್ನು ಮಣ್ಣು ಅಥವಾ ತಾಮ್ರದ ತಟ್ಟೆಯಲ್ಲಿ ಇನ್ನೊಂದರಿಂದ ಮುಚ್ಚಿ ತಂದು ಸ್ಥಂಡಿಲದ ಆಗ್ನೇಯದಲ್ಲಿ ಇಡುತ್ತಾರೆ (ಹೋಮ–ಹವನ). ಕುಂಡದಲ್ಲಿ ಸ್ವಾಹಾದೇವಿಯನ್ನು (ಕೆಂಪು ವಸ್ತ್ರದವಳು, ಪತಿ ಅಗ್ನಿಯ ತೊಡೆಯ ಮೇಲೆ), ಅವಳೊಳಗೆ ಭಾರತಿಯನ್ನು, ಭಾರತಿಯೊಳಗೆ ಹರಿಣೀರೂಪಿಣಿ ಲಕ್ಷ್ಮಿಯನ್ನು (ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ; ಸ್ವಾಹಾ, ಭಾರತೀ ಶ್ಲೋಕಗಳನ್ನು ಇಲ್ಲಿ ಮುದ್ರಿಸಿಲ್ಲ), ತನ್ನೊಳಗೆ ಹರಿಯನ್ನು ಮೊದಲ ಎರಡು ಶ್ಲೋಕಗಳಿಂದ ಸ್ಮರಿಸಿ. ಅಗ್ನಿಯಿಂದ ಹಚ್ಚಿದ ದರ್ಭೆಯಿಂದ, ಸುದರ್ಶನ ಅಸ್ತ್ರಮಂತ್ರ ಹೇಳುತ್ತ, ಅಗ್ನಿಯ ಸ್ವಲ್ಪ ಭಾಗವನ್ನು (ಕ್ರವ್ಯಾದ, ಚಿತೆಯ ಮಾಂಸಭಕ್ಷಕ ಅಗ್ನಿ) ನೈಋತ್ಯಕ್ಕೆ ಎಸೆದು ಕೈ ತೊಳೆಯಿರಿ (ಹೋಮ–ಹವನ). ಎರಡು ಋಙ್ಮಂತ್ರಗಳಿಂದ ಅಕ್ಷತೆ ಹಾಕಿ ಅಗ್ನಿಯನ್ನು ಆವಾಹಿಸಿ, ತಟ್ಟೆಯ ಮುಚ್ಚಳ ತೆಗೆದು, ವ್ಯಾಹೃತಿಗಳಿಂದ ಕೆಂಡವನ್ನು ಆರು ರೇಖೆಗಳ ಮೇಲೆ ಇಡಿ; ಕರ್ಮಕ್ಕೆ ತಕ್ಕ ಅಗ್ನಿಯ ಹೆಸರು ಹೇಳಿ (ಶಾಂತಿಗೆ ವರದ, ಪೌಷ್ಟಿಕಕ್ಕೆ ಬಲವರ್ಧನ, ಪ್ರಾಯಶ್ಚಿತ್ತಕ್ಕೆ ವಿಟಪ). ಖಾಲಿ ತಟ್ಟೆಗೆ ಅಕ್ಷತೆ–ನೀರು ಹಾಕಿ, ಸಮಿಧೆ–ತುಳಸೀಕಾಷ್ಠ ಇಟ್ಟು ಬಿದಿರಿನ ಕೊಳವೆಯಿಂದ ಊದಿ ಉರಿಸಿ.')
A(s)

# 9 Smarta fire
s = OLDS(P, 8)
s['verses'][1] = dict(s['verses'][1], text='ॐ भूर्भुवः सुवरोम् ।\nअमुकनामानम् अग्निं प्रतिष्ठापयामि ॥')
s['note'] = ('Place a few twigs on the sthandila. Bring the fire (fire from a shrotriya’s house or your own hearth, or kindle camphor in a copper dish), stand east of the sthandila facing west, and set it on the lines with भूर्भुवः सुवरोम् (Muddu Shrauti, Mylapore manual), naming the fire proper to the rite; some Apastamba manuals first recite the Purusha Sukta verse on the birth of Agni from the Lord’s mouth. Put akshata and water in the dish that brought the fire. Pour the rest of the water used for sprinkling to the east, set a fresh vessel of water there, put a samidh on the fire and fan it into flame.')
s['noteKn'] = ('ಸ್ಥಂಡಿಲದ ಮೇಲೆ ಕೆಲವು ಕಡ್ಡಿಗಳನ್ನಿಡಿ. ಅಗ್ನಿಯನ್ನು ತಂದು (ಶ್ರೋತ್ರಿಯರ ಮನೆ ಅಥವಾ ಸ್ವಗೃಹದ ಒಲೆ, ಇಲ್ಲವೇ ತಾಮ್ರದ ತಟ್ಟೆಯಲ್ಲಿ ಕರ್ಪೂರ), ಸ್ಥಂಡಿಲದ ಪೂರ್ವದಲ್ಲಿ ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ ನಿಂತು “ಭೂರ್ಭುವಃ ಸುವರೋಮ್” ಎಂದು ರೇಖೆಗಳ ಮೇಲೆ ಇಡಿ (ಮುದ್ದು ಶ್ರೌತಿ, ಮೈಲಾಪುರ ಗ್ರಂಥ); ಕರ್ಮಕ್ಕೆ ತಕ್ಕ ಅಗ್ನಿಯ ಹೆಸರು ಹೇಳಿ; ಕೆಲವು ಆಪಸ್ತಂಬ ಗ್ರಂಥಗಳಲ್ಲಿ ಮೊದಲು ಪುರುಷಸೂಕ್ತದ “ಚಂದ್ರಮಾ ಮನಸೋ ಜಾತಃ” ಮಂತ್ರ. ಅಗ್ನಿ ತಂದ ತಟ್ಟೆಗೆ ಅಕ್ಷತೆ–ನೀರು ಹಾಕಿ. ಪ್ರೋಕ್ಷಣೆಯ ಉಳಿದ ನೀರನ್ನು ಪೂರ್ವಕ್ಕೆ ಚೆಲ್ಲಿ, ಅಲ್ಲಿ ಹೊಸ ನೀರಿನ ಪಾತ್ರೆ ಇಡಿ; ಸಮಿಧೆ ಇಟ್ಟು ಉರಿಸಿ.')
A(s)

# 10 Agni dhyana (both)
A(OLDS(P, 9))

# 11 Madhva Mukhyaprana/Parashurama + anvadhana
s = OLDS(P, 10)
anv = V('अस्मिन्नन्वाहिताग्नौ जातवेदसमग्निमिध्मेन प्रजापतिं प्रजापतिं चाघाराभ्याम्\nअग्नीषोमौ चक्षुषी आज्येन ।\nअग्नेर्वैष्णवत्वसिद्ध्यर्थं मूलमन्त्रेण नारायणमष्टवारं द्वादशाक्षरमन्त्रेण वासुदेवं द्वादशवारं\nपुरुषसूक्तेन प्रत्यृचं सकृत्सकृन्महापुरुषं विष्णुषडक्षरमन्त्रेण विष्णुं षड्वारमाज्येन ।\nअत्र प्रधानम् अमुकदेवताम् अमुकसङ्ख्यया अमुकद्रव्येण ।\nशेषेण स्विष्टकृतम् इध्मसन्नहनेन रुद्रम्\nअयासमग्निं देवान्विष्णुमग्निं वायुं सूर्यं प्रजापतिं चैताः प्रायश्चित्तदेवता आज्येन ।\nज्ञाताज्ञातकृतदोषनिर्हरणार्थमग्निं त्रिवारं मरुतश्चाज्येन विश्वान्देवान्संस्रावेण ।\nअङ्गदेवताः प्रधानदेवताश्च सर्वाः सन्निहिताः सन्तु । एवं साङ्गेन कर्मणा सद्यो यक्ष्ये ॥',
        'In this fire, now set down, I shall worship: Agni Jatavedas with the idhma; Prajapati and Prajapati with the two aghara streams; Agni and Soma, the two eyes, with ghee; to make the fire Vaishnava, Narayana eight times with the mula mantra, Vasudeva twelve times with the twelve-syllable mantra, Mahapurusha once with each verse of the Purusha Sukta and Vishnu six times with the six-syllable mantra, with ghee; here as the main offering the deity of this homa, with its count and material; with the remainder Svishtakrit; Rudra with the string that bound the idhma; Ayas Agni, the gods, Vishnu, Agni, Vayu, Surya and Prajapati, the deities of expiation, with ghee; Agni three times and the Maruts with ghee to remove faults known and unknown; the Vishvedevas with the samsrava. May all the subsidiary and main deities be present; thus I shall worship at once with the rite and all its parts. (Anvadhana, M1; the same list in the Sudarshana Kalpa.)',
        'ಈಗ ಇಟ್ಟ ಈ ಅಗ್ನಿಯಲ್ಲಿ ನಾನು ಪೂಜಿಸುವೆನು: ಜಾತವೇದ ಅಗ್ನಿಯನ್ನು ಇಧ್ಮದಿಂದ; ಎರಡು ಆಘಾರಗಳಿಂದ ಪ್ರಜಾಪತಿಯನ್ನು; ಚಕ್ಷುಸ್ಸುಗಳಾದ ಅಗ್ನಿ–ಸೋಮರನ್ನು ಆಜ್ಯದಿಂದ; ಅಗ್ನಿಯ ವೈಷ್ಣವತ್ವಕ್ಕಾಗಿ ಮೂಲಮಂತ್ರದಿಂದ ನಾರಾಯಣನನ್ನು ಎಂಟು ಬಾರಿ, ದ್ವಾದಶಾಕ್ಷರದಿಂದ ವಾಸುದೇವನನ್ನು ಹನ್ನೆರಡು ಬಾರಿ, ಪುರುಷಸೂಕ್ತದ ಪ್ರತಿ ಋಕ್ಕಿನಿಂದ ಒಮ್ಮೆ ಮಹಾಪುರುಷನನ್ನು, ವಿಷ್ಣು ಷಡಕ್ಷರದಿಂದ ವಿಷ್ಣುವನ್ನು ಆರು ಬಾರಿ ಆಜ್ಯದಿಂದ; ಇಲ್ಲಿ ಪ್ರಧಾನವಾಗಿ ಈ ಹೋಮದ ದೇವತೆಯನ್ನು ಅದರ ಸಂಖ್ಯೆ–ದ್ರವ್ಯಗಳಿಂದ; ಶೇಷದಿಂದ ಸ್ವಿಷ್ಟಕೃತ್ತನ್ನು; ಇಧ್ಮದ ಕಟ್ಟುಹಗ್ಗದಿಂದ ರುದ್ರನನ್ನು; ಅಯಸ್ ಅಗ್ನಿ, ದೇವತೆಗಳು, ವಿಷ್ಣು, ಅಗ್ನಿ, ವಾಯು, ಸೂರ್ಯ, ಪ್ರಜಾಪತಿ ಎಂಬ ಪ್ರಾಯಶ್ಚಿತ್ತ ದೇವತೆಗಳನ್ನು ಆಜ್ಯದಿಂದ; ತಿಳಿದು ತಿಳಿಯದೆ ಮಾಡಿದ ದೋಷಗಳ ನಿವಾರಣೆಗೆ ಅಗ್ನಿಯನ್ನು ಮೂರು ಬಾರಿ, ಮರುತ್ತುಗಳನ್ನು ಆಜ್ಯದಿಂದ; ವಿಶ್ವೇದೇವತೆಗಳನ್ನು ಸಂಸ್ರಾವದಿಂದ. ಎಲ್ಲ ಅಂಗದೇವತೆಗಳೂ ಪ್ರಧಾನದೇವತೆಗಳೂ ಸನ್ನಿಹಿತರಾಗಲಿ; ಹೀಗೆ ಸಾಂಗವಾದ ಕರ್ಮದಿಂದ ಈಗಲೇ ಪೂಜಿಸುವೆನು. (ಅನ್ವಾಧಾನ, ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ; ಸುದರ್ಶನಕಲ್ಪದಲ್ಲೂ ಇದೇ ಪಟ್ಟಿ.)',
        'अभी स्थापित इस अग्नि में मैं यजन करूँगा: जातवेद अग्नि का इध्म से; दो आघारों से प्रजापति का; दो नेत्र अग्नि और सोम का घी से; अग्नि को वैष्णव बनाने हेतु मूलमन्त्र से नारायण का आठ बार, द्वादशाक्षर से वासुदेव का बारह बार, पुरुषसूक्त की प्रत्येक ऋचा से एक-एक बार महापुरुष का, विष्णु षडक्षर से विष्णु का छह बार, घी से; यहाँ प्रधान रूप से इस होम के देवता का, उसकी संख्या और द्रव्य से; शेष से स्विष्टकृत् का; इध्म की रस्सी से रुद्र का; अयस् अग्नि, देवों, विष्णु, अग्नि, वायु, सूर्य और प्रजापति — इन प्रायश्चित्त देवताओं का घी से; जाने-अनजाने दोषों के निवारण हेतु अग्नि का तीन बार और मरुतों का घी से; विश्वेदेवों का संस्राव से। सब अंगदेवता और प्रधानदेवता उपस्थित हों; इस प्रकार अंगों सहित कर्म से अभी यजन करूँगा। (अन्वाधान)',
        'ఇప్పుడు ఉంచిన ఈ అగ్నిలో నేను యజిస్తాను: జాతవేద అగ్నిని ఇధ్మంతో; రెండు ఆఘారాలతో ప్రజాపతిని; నేత్రాలైన అగ్నీషోములను ఆజ్యంతో; అగ్నికి వైష్ణవత్వం కొరకు మూలమంత్రంతో నారాయణుని ఎనిమిది సార్లు, ద్వాదశాక్షరంతో వాసుదేవుని పన్నెండు సార్లు, పురుషసూక్తంలోని ప్రతి ఋక్కుతో ఒకసారి మహాపురుషుని, విష్ణు షడక్షరంతో విష్ణువును ఆరు సార్లు ఆజ్యంతో; ఇక్కడ ప్రధానంగా ఈ హోమదేవతను దాని సంఖ్య, ద్రవ్యాలతో; శేషంతో స్విష్టకృత్తును; ఇధ్మం కట్టిన తాడుతో రుద్రుని; అయస్ అగ్ని, దేవతలు, విష్ణువు, అగ్ని, వాయువు, సూర్యుడు, ప్రజాపతి అనే ప్రాయశ్చిత్త దేవతలను ఆజ్యంతో; తెలిసీ తెలియక చేసిన దోషాల నివారణకు అగ్నిని మూడు సార్లు, మరుత్తులను ఆజ్యంతో; విశ్వేదేవతలను సంస్రావంతో. అన్ని అంగదేవతలు, ప్రధానదేవతలు సన్నిహితులు కావాలి; ఇలా సాంగమైన కర్మతో ఇప్పుడే యజిస్తాను. (అన్వాధానం)',
        'இப்போது வைத்த இந்த அக்னியில் நான் யஜிப்பேன்: ஜாதவேத அக்னியை இத்மத்தால்; இரு ஆகாரங்களால் ப்ரஜாபதியை; கண்களான அக்னீஷோமர்களை நெய்யால்; அக்னியை வைஷ்ணவமாக்க மூலமந்திரத்தால் நாராயணனை எட்டு முறை, த்வாதசாக்ஷரத்தால் வாஸுதேவனை பன்னிரண்டு முறை, புருஷஸூக்தத்தின் ஒவ்வொரு ருக்காலும் ஒருமுறை மஹாபுருஷனை, விஷ்ணு ஷடக்ஷரத்தால் விஷ்ணுவை ஆறு முறை நெய்யால்; இங்கு பிரதானமாக இந்த ஹோம தேவதையை அதன் எண்ணிக்கை, த்ரவ்யத்துடன்; மீதியால் ஸ்விஷ்டக்ருத்தை; இத்மம் கட்டிய கயிற்றால் ருத்ரனை; அயஸ் அக்னி, தேவர்கள், விஷ்ணு, அக்னி, வாயு, ஸூர்யன், ப்ரஜாபதி என்ற ப்ராயச்சித்த தேவதைகளை நெய்யால்; அறிந்தும் அறியாமலும் செய்த தோஷங்கள் நீங்க அக்னியை மூன்று முறை, மருத்துகளை நெய்யால்; விச்வேதேவர்களை ஸம்ஸ்ராவத்தால். எல்லா அங்க தேவதைகளும் பிரதான தேவதைகளும் ஸந்நிதியில் இருக்கட்டும்; இவ்வாறு அங்கங்களுடன் கூடிய கர்மத்தால் இப்போதே யஜிப்பேன். (அன்வாதானம்)')
s['verses'] = s['verses'][:3] + [anv, s['verses'][3]]
s['note'] = ('In the fire meditate on Mukhyaprana (Vayu) seated in the lap of Achyuta, and within him on Harinipati Parashurama; then pray to Agni, facing west towards you, to be gracious. Then do the anvadhana: say the deshakala again and the sankalpa अस्मिन्… होमकर्मणि देवतापरिग्रहार्थम् अन्वाधानं करिष्ये; take two samidhs in the hand and recite the list of the deities who will receive offerings, naming in place of अमुक the deity, count and material of the pradhana homa as the homa text gives them (if the homa has pitha or avarana deities, name them there too); then lay the two samidhs on the fire with the vyahriti offering below. Elders are asked: अन्वाधानमुहूर्तः सुमुहूर्तोऽस्त्विति अनुगृह्णन्तु, and answer सुमुहूर्तोऽस्तु (M1).')
s['noteKn'] = ('ಅಗ್ನಿಯಲ್ಲಿ ಅಚ್ಯುತನ ತೊಡೆಯ ಮೇಲೆ ಕುಳಿತ ಮುಖ್ಯಪ್ರಾಣರನ್ನು, ಅವರೊಳಗೆ ಹರಿಣೀಪತಿ ಪರಶುರಾಮನನ್ನು ಧ್ಯಾನಿಸಿ; ನಂತರ ಪಶ್ಚಿಮಾಭಿಮುಖನಾಗಿ ತನ್ನತ್ತ ತಿರುಗಿ ಪ್ರಸನ್ನನಾಗಲು ಅಗ್ನಿಯನ್ನು ಪ್ರಾರ್ಥಿಸಿ. ಆಮೇಲೆ ಅನ್ವಾಧಾನ: ಮತ್ತೆ ದೇಶಕಾಲ ಹೇಳಿ “ಅಸ್ಮಿನ್… ಹೋಮಕರ್ಮಣಿ ದೇವತಾಪರಿಗ್ರಹಾರ್ಥಂ ಅನ್ವಾಧಾನಂ ಕರಿಷ್ಯೇ” ಎಂದು ಸಂಕಲ್ಪಿಸಿ; ಎರಡು ಸಮಿಧೆ ಕೈಯಲ್ಲಿ ಹಿಡಿದು ಆಹುತಿ ಪಡೆಯುವ ದೇವತೆಗಳ ಪಟ್ಟಿಯನ್ನು ಹೇಳಿ — “ಅಮುಕ”ದ ಸ್ಥಳದಲ್ಲಿ ಹೋಮದ ಪಠ್ಯ ಕೊಟ್ಟ ಪ್ರಧಾನ ದೇವತೆ, ಸಂಖ್ಯೆ, ದ್ರವ್ಯ (ಪೀಠ/ಆವರಣ ದೇವತೆಗಳಿದ್ದರೆ ಅವರನ್ನೂ) ಹೇಳಿ; ನಂತರ ಕೆಳಗಿನ ವ್ಯಾಹೃತಿ ಆಹುತಿಯೊಡನೆ ಎರಡು ಸಮಿಧೆಗಳನ್ನು ಅಗ್ನಿಗೆ ಇಡಿ. ಹಿರಿಯರನ್ನು “ಅನ್ವಾಧಾನಮುಹೂರ್ತಃ ಸುಮುಹೂರ್ತೋಸ್ತ್ವಿತಿ ಅನುಗೃಹ್ಣಂತು” ಎಂದು ಕೇಳಿದಾಗ ಅವರು “ಸುಮುಹೂರ್ತೋಸ್ತು” ಎನ್ನುತ್ತಾರೆ (ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ).')
A(s)

# 12 Smarta prayer to Agni
A(OLDS(P, 11))

# 13 Paristarana, vessels, Brahma (both)
s = OLDS(P, 12)
br_m = V('निरस्तः परावसुः ॥\nइदमहमर्वावसोः सदने सीदामि ॥',
         'Paravasu (the hostile one) is driven out. I sit down in the seat of Arvavasu (the friendly one). (Said by the Brahma as he throws one darbha from his seat to the south-west and sits; Ashvalayana Shrauta Sutra, M1.)',
         'ಪರಾವಸು (ಅಹಿತಕಾರಿ) ಹೊರಹಾಕಲ್ಪಟ್ಟನು. ಅರ್ವಾವಸುವಿನ (ಹಿತಕಾರಿ) ಆಸನದಲ್ಲಿ ನಾನು ಕುಳಿತುಕೊಳ್ಳುತ್ತೇನೆ. (ಬ್ರಹ್ಮನು ತನ್ನ ಆಸನದಿಂದ ಒಂದು ದರ್ಭೆಯನ್ನು ನೈಋತ್ಯಕ್ಕೆ ಎಸೆದು ಕುಳಿತುಕೊಳ್ಳುವಾಗ; ಆಶ್ವಲಾಯನ ಶ್ರೌತಸೂತ್ರ, ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ.)',
         'परावसु (विघ्नकारी) बाहर निकाला गया। मैं अर्वावसु (हितकारी) के आसन पर बैठता हूँ। (ब्रह्मा अपने आसन से एक दर्भ नैर्ऋत्य में फेंककर बैठते समय कहता है।)',
         'పరావసువు (అహితుడు) వెళ్ళగొట్టబడ్డాడు. అర్వావసువు (హితుడు) ఆసనంలో నేను కూర్చుంటాను. (బ్రహ్మ తన ఆసనం నుండి ఒక దర్భను నైరృతికి విసిరి కూర్చొనేటప్పుడు.)',
         'பராவஸு (தீங்கு செய்பவன்) விரட்டப்பட்டான். அர்வாவஸுவின் (நன்மை செய்பவன்) இருக்கையில் நான் அமர்கிறேன். (ப்ரஹ்மா தன் ஆசனத்திலிருந்து ஒரு தர்ப்பையை தென்மேற்கில் எறிந்து அமரும்போது.)', when=M)
pr_s = V('वरुणाय नमः । सकलाराधनैः स्वर्चितम् ॥\nब्रह्मणे नमः । सकलाराधनैः स्वर्चितम् ॥',
         'Salutation to Varuna; may he be well worshipped with all the honours (said over the pranita water, placing akshata in it). Salutation to the Brahma; may he be well worshipped with all the honours (said to the Brahma or the kurcha). (Muddu Shrauti, Mylapore manual.)',
         'ವರುಣನಿಗೆ ನಮಸ್ಕಾರ; ಎಲ್ಲ ಉಪಚಾರಗಳಿಂದ ಚೆನ್ನಾಗಿ ಪೂಜಿತನಾಗಲಿ (ಪ್ರಣೀತಾ ಜಲಕ್ಕೆ ಅಕ್ಷತೆ ಹಾಕುತ್ತ). ಬ್ರಹ್ಮನಿಗೆ ನಮಸ್ಕಾರ; ಎಲ್ಲ ಉಪಚಾರಗಳಿಂದ ಪೂಜಿತನಾಗಲಿ (ಬ್ರಹ್ಮ ಅಥವಾ ಕೂರ್ಚಕ್ಕೆ). (ಮುದ್ದು ಶ್ರೌತಿ, ಮೈಲಾಪುರ ಗ್ರಂಥ.)',
         'वरुण को नमस्कार; सब उपचारों से भली-भाँति पूजित हों (प्रणीता जल में अक्षत डालते हुए)। ब्रह्मा को नमस्कार; सब उपचारों से पूजित हों (ब्रह्मा या कूर्च को)।',
         'వరుణునికి నమస్కారం; సకల ఉపచారాలతో బాగా పూజితుడు కావాలి (ప్రణీతా జలంలో అక్షతలు వేస్తూ). బ్రహ్మకు నమస్కారం; సకల ఉపచారాలతో పూజితుడు కావాలి (బ్రహ్మకు లేదా కూర్చకు).',
         'வருணனுக்கு நமஸ்காரம்; எல்லா உபசாரங்களாலும் நன்கு பூஜிக்கப்படட்டும் (ப்ரணீதா நீரில் அக்ஷதை இட்டு). ப்ரஹ்மாவுக்கு நமஸ்காரம்; எல்லா உபசாரங்களாலும் பூஜிக்கப்படட்டும் (ப்ரஹ்மா அல்லது கூர்ச்சத்துக்கு).', when=SM)
s['verses'] = [OLD(P, 12, 0, when=None), br_m, pr_s]
s['verses'][0]['text'] = 'अस्मिन् अमुकहोमकर्मणि ब्रह्माणं त्वामहं वृणे ॥'
s['note'] = s['note'] + ' Smarta (Muddu Shrauti): then set the three paridhi sticks round the fire — the thickest to the west, tip north; a long thin one to the south and the shortest to the north, tips east — touching one another, and place two aghara samidhs at the south-east and north-east.'
s['noteKn'] = s['noteKn'] + ' ಸ್ಮಾರ್ತ (ಮುದ್ದು ಶ್ರೌತಿ): ನಂತರ ಮೂರು ಪರಿಧಿಗಳನ್ನು ಅಗ್ನಿಯ ಸುತ್ತ ಇಡಿ — ದಪ್ಪದ್ದು ಪಶ್ಚಿಮದಲ್ಲಿ ತುದಿ ಉತ್ತರಕ್ಕೆ, ಉದ್ದವಾದ ತೆಳುವಾದದ್ದು ದಕ್ಷಿಣದಲ್ಲಿ, ಚಿಕ್ಕದ್ದು ಉತ್ತರದಲ್ಲಿ, ತುದಿಗಳು ಪೂರ್ವಕ್ಕೆ — ಒಂದನ್ನೊಂದು ಮುಟ್ಟುವಂತೆ; ಆಗ್ನೇಯ ಮತ್ತು ಈಶಾನ್ಯದಲ್ಲಿ ಎರಡು ಆಘಾರ ಸಮಿಧೆಗಳನ್ನಿಡಿ.'
A(s)

# 14 Madhva paryukshana, ghee, alankarana
s = OLDS(P, 13)
ys = V('यस्मै त्वं सुकृते जातवेद उ लोकमग्ने कृणवः स्योनम् ।\nअश्विनं स पुत्रिणं वीरवन्तं गोमन्तं रयिं नशते स्वस्ति ॥',
       'O Jatavedas Agni, the doer of good for whom you make a pleasant world gains wealth rich in horses, sons, heroes and cattle, and well-being. (Rigveda 5.4.11, the third verse for decorating the fire in M1.)',
       'ಓ ಜಾತವೇದ ಅಗ್ನಿಯೇ, ಯಾವ ಸತ್ಕರ್ಮಿಗೆ ನೀನು ಸುಖಕರ ಲೋಕವನ್ನು ಮಾಡುವೆಯೋ ಅವನು ಕುದುರೆ, ಮಕ್ಕಳು, ವೀರರು, ಗೋವುಗಳಿಂದ ಕೂಡಿದ ಸಂಪತ್ತನ್ನೂ ಕ್ಷೇಮವನ್ನೂ ಪಡೆಯುತ್ತಾನೆ. (ಋಗ್ವೇದ ೫.೪.೧೧; ಅಗ್ನ್ಯಲಂಕರಣದ ಮೂರನೆಯ ಮಂತ್ರ.)',
       'हे जातवेद अग्नि, जिस सत्कर्मी के लिए तुम सुखद लोक बनाते हो, वह घोड़ों, पुत्रों, वीरों और गायों से युक्त धन तथा कल्याण पाता है। (ऋग्वेद 5.4.11)',
       'ఓ జాతవేద అగ్నీ, ఏ సత్కర్మునికి నీవు సుఖమైన లోకాన్ని కల్పిస్తావో అతడు గుర్రాలు, పుత్రులు, వీరులు, గోవులతో కూడిన సంపదను, క్షేమాన్ని పొందుతాడు. (ఋగ్వేదం 5.4.11)',
       'ஜாதவேத அக்னியே, எந்த நற்செயலாளனுக்கு நீ இனிய உலகைச் செய்கிறாயோ அவன் குதிரைகள், புதல்வர்கள், வீரர்கள், பசுக்கள் நிறைந்த செல்வத்தையும் நலத்தையும் அடைகிறான். (ருக்வேதம் 5.4.11)')
s['verses'] = s['verses'] + [ys]
s['note'] = s['note'].replace('with विश्वानि नो… and यस्त्वा हृदा….', 'with विश्वानि नो…, यस्त्वा हृदा… and यस्मै त्वं सुकृते….').replace('यस्त्वा हृदा.', 'यस्त्वा हृदा… and यस्मै त्वं सुकृते….')
s['noteKn'] = s['noteKn'] + ' ಅಲಂಕರಣದ ಮೂರನೆಯ ಮಂತ್ರ “ಯಸ್ಮೈ ತ್ವಂ ಸುಕೃತೇ…”.'
A(s)

# 15 Smarta parishechana
s = OLDS(P, 14)
A(s)

# 16 Madhva idhma
A(OLDS(P, 15))
# 17 Smarta idhma
A(S('इध्माधानम्', 'Placing the fuel (idhma)',
    'Smear the bundle of fuel with ghee and tell the Brahma you are placing it; place it on the fire (Muddu Shrauti, Mylapore manual; the sutra has it placed silently).',
    'ಇಧ್ಮದ ಕಟ್ಟಿಗೆ ತುಪ್ಪ ಹಚ್ಚಿ, ಇಡುತ್ತಿದ್ದೇನೆಂದು ಬ್ರಹ್ಮನಿಗೆ ಹೇಳಿ ಅಗ್ನಿಯ ಮೇಲೆ ಇಡಿ (ಮುದ್ದು ಶ್ರೌತಿ, ಮೈಲಾಪುರ ಗ್ರಂಥ; ಸೂತ್ರದಲ್ಲಿ ಮೌನವಾಗಿ).',
    [V('अस्मिन् अमुकहोमकर्मणि ब्रह्मन्निध्ममाधास्ये ॥',
       'O Brahma, in this … homa I shall place the fuel on the fire. (The Brahma answers: om adhatsva, place it.)',
       'ಓ ಬ್ರಹ್ಮನೇ, ಈ ಇಂತಹ ಹೋಮಕರ್ಮದಲ್ಲಿ ಇಧ್ಮವನ್ನು ಇಡುತ್ತೇನೆ. (ಬ್ರಹ್ಮನು “ಓಂ ಆಧತ್ಸ್ವ — ಇಡು” ಎನ್ನುತ್ತಾನೆ.)',
       'हे ब्रह्मा, इस … होमकर्म में मैं इध्म रखूँगा। (ब्रह्मा उत्तर देते हैं: ॐ आधत्स्व — रखो।)',
       'ఓ బ్రహ్మా, ఈ … హోమకర్మలో ఇధ్మాన్ని ఉంచుతాను. (బ్రహ్మ “ఓం ఆధత్స్వ — ఉంచు” అంటాడు.)',
       'ப்ரஹ்மாவே, இந்த … ஹோமகர்மத்தில் இத்மத்தை வைப்பேன். (ப்ரஹ்மா “ஓம் ஆதத்ஸ்வ — வை” என்கிறார்.)')], when=SM))

# 18 Aghara and ajyabhaga (both)
s = OLDS(P, 16)
s['note'] = s['note'].split('Aghara: ', 1)[-1]
s['note'] = 'Aghara: ' + s['note']
s['noteKn'] = 'ಆಘಾರ: ' + s['noteKn'].split('ಆಘಾರ: ', 1)[-1]
mukha = V('अग्नये स्वाहा । अग्नय इदं न मम ॥',
          'To Agni, svaha; this is for Agni, not mine. (The agnimukha offering in the middle of the fire, Smarta: Muddu Shrauti, Mylapore manual.)',
          'ಅಗ್ನಿಗೆ ಸ್ವಾಹಾ; ಇದು ಅಗ್ನಿಗೆ, ನನ್ನದಲ್ಲ. (ಅಗ್ನಿಯ ಮಧ್ಯದಲ್ಲಿ ಅಗ್ನಿಮುಖ ಆಹುತಿ, ಸ್ಮಾರ್ತ.)',
          'अग्नि के लिए स्वाहा; यह अग्नि के लिए है, मेरा नहीं। (अग्नि के मध्य में अग्निमुख आहुति, स्मार्त।)',
          'అగ్నికి స్వాహా; ఇది అగ్నికి, నాది కాదు. (అగ్ని మధ్యలో అగ్నిముఖ ఆహుతి, స్మార్త.)',
          'அக்னிக்கு ஸ்வாஹா; இது அக்னிக்கு, என்னுடையதல்ல. (அக்னியின் நடுவில் அக்னிமுக ஆஹுதி, ஸ்மார்த்த.)', when=SM)
sp = V('सङ्कल्पप्रभृत्येतत्क्षणपर्यन्तं मध्ये सम्भावितसमस्तदोषप्रायश्चित्तार्थं सर्वप्रायश्चित्तं होष्यामि ।\nॐ भूर्भुवः सुवः स्वाहा । प्रजापतय इदं न मम ॥',
       'For the expiation of all faults that may have occurred from the sankalpa until this moment, I shall make the all-expiation offering. Om, earth, sky and heaven, svaha; this is for Prajapati, not mine. (Smarta, before the pradhana homa: Muddu Shrauti, Mylapore manual.)',
       'ಸಂಕಲ್ಪದಿಂದ ಈ ಕ್ಷಣದವರೆಗೆ ನಡುವೆ ಆಗಿರಬಹುದಾದ ಎಲ್ಲ ದೋಷಗಳ ಪ್ರಾಯಶ್ಚಿತ್ತಕ್ಕಾಗಿ ಸರ್ವಪ್ರಾಯಶ್ಚಿತ್ತ ಹೋಮ ಮಾಡುತ್ತೇನೆ. ಓಂ ಭೂರ್ಭುವಃ ಸುವಃ ಸ್ವಾಹಾ; ಇದು ಪ್ರಜಾಪತಿಗೆ, ನನ್ನದಲ್ಲ. (ಸ್ಮಾರ್ತ, ಪ್ರಧಾನ ಹೋಮಕ್ಕೆ ಮೊದಲು.)',
       'संकल्प से इस क्षण तक बीच में सम्भावित सब दोषों के प्रायश्चित्त के लिए सर्वप्रायश्चित्त होम करूँगा। ॐ भूर्भुवः सुवः स्वाहा; यह प्रजापति के लिए है, मेरा नहीं।',
       'సంకల్పం నుండి ఈ క్షణం వరకు మధ్యలో జరిగి ఉండగల అన్ని దోషాల ప్రాయశ్చిత్తం కొరకు సర్వప్రాయశ్చిత్త హోమం చేస్తాను. ఓం భూర్భువః సువః స్వాహా; ఇది ప్రజాపతికి, నాది కాదు.',
       'ஸங்கல்பம் முதல் இந்தக் கணம் வரை நடுவில் நேர்ந்திருக்கக்கூடிய எல்லா தோஷங்களுக்கும் பிராயச்சித்தமாக ஸர்வப்ராயச்சித்த ஹோமம் செய்வேன். ஓம் பூர்புவஸ்ஸுவ: ஸ்வாஹா; இது ப்ரஜாபதிக்கு, என்னுடையதல்ல.', when=SM)
s['verses'] = s['verses'] + [mukha, sp]
s['note'] = s['note'] + ' Smarta: then a third oblation to Agni in the middle of the fire (the agnimukha), and the all-expiation offering for any lapse so far (Muddu Shrauti, Mylapore manual). Madhva: the expiation offering comes at the start of the next section.'
s['noteKn'] = s['noteKn'] + ' ಸ್ಮಾರ್ತ: ನಂತರ ಅಗ್ನಿಯ ಮಧ್ಯದಲ್ಲಿ ಅಗ್ನಿಗೆ ಮೂರನೆಯ ಆಹುತಿ (ಅಗ್ನಿಮುಖ), ಮತ್ತು ಇಲ್ಲಿಯವರೆಗಿನ ಲೋಪಗಳಿಗೆ ಸರ್ವಪ್ರಾಯಶ್ಚಿತ್ತ (ಮುದ್ದು ಶ್ರೌತಿ, ಮೈಲಾಪುರ ಗ್ರಂಥ). ಮಾಧ್ವ: ಪ್ರಾಯಶ್ಚಿತ್ತ ಆಹುತಿ ಮುಂದಿನ ಭಾಗದ ಆರಂಭದಲ್ಲಿದೆ.'
A(s)

# 19 Madhva samskaras and Vaishnava offerings
s = OLDS(P, 17)
sam = V('अग्नेः गर्भाधानसंस्कारार्थम् ॐ भूर्भुवः स्वः स्वाहा । प्रजापतये श्रीवासुदेवायेदं न मम ॥',
        'For the garbhadhana samskara of Agni: Om, earth, sky and heaven, svaha; this is for Prajapati and Sri Vasudeva within him, not mine. (Repeat, naming in turn pumsavana, simantonnayana, vaishnava-bali, jatakarma, namakarana, nishkramana, annaprashana, chaula, upanayana, mahanamni, mahavrata, upanishad-vrata, godana, samavartana and vivaha: sixteen offerings in all.)',
        'ಅಗ್ನಿಯ ಗರ್ಭಾಧಾನ ಸಂಸ್ಕಾರಕ್ಕಾಗಿ: ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ ಸ್ವಾಹಾ; ಇದು ಪ್ರಜಾಪತಿ ಮತ್ತು ಅವನೊಳಗಿನ ಶ್ರೀವಾಸುದೇವನಿಗೆ, ನನ್ನದಲ್ಲ. (ಪುಂಸವನ, ಸೀಮಂತೋನ್ನಯನ, ವೈಷ್ಣವಬಲಿ, ಜಾತಕರ್ಮ, ನಾಮಕರಣ, ನಿಷ್ಕ್ರಮಣ, ಅನ್ನಪ್ರಾಶನ, ಚೌಲ, ಉಪನಯನ, ಮಹಾನಾಮ್ನೀ, ಮಹಾವ್ರತ, ಉಪನಿಷದ್ವ್ರತ, ಗೋದಾನ, ಸಮಾವರ್ತನ, ವಿವಾಹ — ಕ್ರಮವಾಗಿ ಹೆಸರಿಸಿ ಪುನರಾವರ್ತಿಸಿ; ಒಟ್ಟು ಹದಿನಾರು.)',
        'अग्नि के गर्भाधान संस्कार के लिए: ॐ भूर्भुवः स्वः स्वाहा; यह प्रजापति और उनमें स्थित श्रीवासुदेव के लिए है, मेरा नहीं। (पुंसवन, सीमन्तोन्नयन, वैष्णवबलि, जातकर्म, नामकरण, निष्क्रमण, अन्नप्राशन, चौल, उपनयन, महानाम्नी, महाव्रत, उपनिषद्व्रत, गोदान, समावर्तन, विवाह — क्रम से नाम लेकर दोहराएँ; कुल सोलह।)',
        'అగ్ని గర్భాధాన సంస్కారం కొరకు: ఓం భూర్భువః స్వః స్వాహా; ఇది ప్రజాపతికి, ఆయనలోని శ్రీవాసుదేవునికి, నాది కాదు. (పుంసవనం, సీమంతోన్నయనం, వైష్ణవబలి, జాతకర్మ, నామకరణం, నిష్క్రమణం, అన్నప్రాశనం, చౌలం, ఉపనయనం, మహానామ్నీ, మహావ్రతం, ఉపనిషద్వ్రతం, గోదానం, సమావర్తనం, వివాహం — క్రమంగా పేరు చెప్పి మళ్ళీ చేయండి; మొత్తం పదహారు.)',
        'அக்னியின் கர்ப்பாதான ஸம்ஸ்காரத்துக்காக: ஓம் பூர்புவ: ஸ்வ: ஸ்வாஹா; இது ப்ரஜாபதிக்கும் அவருள் உள்ள ஸ்ரீ வாஸுதேவனுக்கும், என்னுடையதல்ல. (பும்ஸவனம், ஸீமந்தோந்நயனம், வைஷ்ணவபலி, ஜாதகர்மம், நாமகரணம், நிஷ்க்ரமணம், அன்னப்ராசனம், சௌளம், உபநயனம், மஹாநாம்னீ, மஹாவ்ரதம், உபநிஷத்வ்ரதம், கோதானம், ஸமாவர்த்தனம், விவாஹம் — வரிசையாகப் பெயர் சொல்லி மீண்டும் செய்க; மொத்தம் பதினாறு.)')
nar = V('ॐ नमो नारायणाय स्वाहा । नारायणायेदं न मम ॥',
        'Om, salutation to Narayana, svaha; this is for Narayana, not mine. (The eight-syllable mula mantra: eight offerings of ghee.)',
        'ಓಂ ನಾರಾಯಣನಿಗೆ ನಮಸ್ಕಾರ, ಸ್ವಾಹಾ; ಇದು ನಾರಾಯಣನಿಗೆ, ನನ್ನದಲ್ಲ. (ಅಷ್ಟಾಕ್ಷರ ಮೂಲಮಂತ್ರ: ಎಂಟು ಆಜ್ಯಾಹುತಿ.)',
        'ॐ नारायण को नमस्कार, स्वाहा; यह नारायण के लिए है, मेरा नहीं। (अष्टाक्षर मूलमन्त्र: आठ घृताहुतियाँ।)',
        'ఓం నారాయణునికి నమస్కారం, స్వాహా; ఇది నారాయణునికి, నాది కాదు. (అష్టాక్షర మూలమంత్రం: ఎనిమిది ఆజ్యాహుతులు.)',
        'ஓம் நாராயணனுக்கு நமஸ்காரம், ஸ்வாஹா; இது நாராயணனுக்கு, என்னுடையதல்ல. (அஷ்டாக்ஷர மூலமந்திரம்: எட்டு நெய் ஆஹுதிகள்.)')
vas = V('ॐ नमो भगवते वासुदेवाय स्वाहा । वासुदेवायेदं न मम ॥',
        'Om, salutation to the Lord Vasudeva, svaha; this is for Vasudeva, not mine. (The twelve-syllable mantra: twelve offerings.)',
        'ಓಂ ಭಗವಂತ ವಾಸುದೇವನಿಗೆ ನಮಸ್ಕಾರ, ಸ್ವಾಹಾ; ಇದು ವಾಸುದೇವನಿಗೆ, ನನ್ನದಲ್ಲ. (ದ್ವಾದಶಾಕ್ಷರ ಮಂತ್ರ: ಹನ್ನೆರಡು ಆಹುತಿ.)',
        'ॐ भगवान वासुदेव को नमस्कार, स्वाहा; यह वासुदेव के लिए है, मेरा नहीं। (द्वादशाक्षर मन्त्र: बारह आहुतियाँ।)',
        'ఓం భగవంతుడైన వాసుదేవునికి నమస్కారం, స్వాహా; ఇది వాసుదేవునికి, నాది కాదు. (ద్వాదశాక్షర మంత్రం: పన్నెండు ఆహుతులు.)',
        'ஓம் பகவான் வாஸுதேவனுக்கு நமஸ்காரம், ஸ்வாஹா; இது வாஸுதேவனுக்கு, என்னுடையதல்ல. (த்வாதசாக்ஷர மந்திரம்: பன்னிரண்டு ஆஹுதிகள்.)')
s['verses'] = [s['verses'][0], s['verses'][1], sam, nar, vas]
s['note'] = ('Madhva manuals now make the fire fit for the Lord. First an expiatory offering for any lapse since the sankalpa. Then the sixteen samskaras of Agni, as for a child, each with ghee offered with the vyahritis (Tantrasara-sangraha 2.19 with its commentary; M1). Then the Vaishnava offerings of ghee: the eight-syllable mula mantra to Narayana eight times, the twelve-syllable mantra to Vasudeva twelve times, each verse of the Purusha Sukta once to Mahapurusha (next section), and the six-syllable Vishnu mantra to Vishnu six times (Homa-Havana: “a homa without offerings to Vishnu is called asura”; Homa-Havana adds the Krishna six-syllable mantra and the Vishnu Gayatri). Those initiated also offer once to each deity of the tattva-nyasa, the matrika-nyasa and the avarana, with the mantras received from the guru; they are not printed here.')
s['noteKn'] = ('ಮಾಧ್ವ ಗ್ರಂಥಗಳಲ್ಲಿ ಈಗ ಅಗ್ನಿಯನ್ನು ಭಗವಂತನಿಗೆ ಯೋಗ್ಯವಾಗಿಸುತ್ತಾರೆ. ಮೊದಲು ಸಂಕಲ್ಪದಿಂದ ಈವರೆಗಿನ ಲೋಪಕ್ಕೆ ಪ್ರಾಯಶ್ಚಿತ್ತ ಆಹುತಿ. ನಂತರ ಮಗುವಿಗೆ ಮಾಡುವಂತೆ ಅಗ್ನಿಗೆ ಹದಿನಾರು ಸಂಸ್ಕಾರಗಳು, ಪ್ರತಿಯೊಂದಕ್ಕೂ ವ್ಯಾಹೃತಿಗಳಿಂದ ಆಜ್ಯಾಹುತಿ (ತಂತ್ರಸಾರ ೨.೧೯ ವ್ಯಾಖ್ಯಾನ; ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ). ಆಮೇಲೆ ವೈಷ್ಣವಾಹುತಿಗಳು: ಅಷ್ಟಾಕ್ಷರದಿಂದ ನಾರಾಯಣನಿಗೆ ಎಂಟು, ದ್ವಾದಶಾಕ್ಷರದಿಂದ ವಾಸುದೇವನಿಗೆ ಹನ್ನೆರಡು, ಪುರುಷಸೂಕ್ತದ ಪ್ರತಿ ಋಕ್ಕಿನಿಂದ ಮಹಾಪುರುಷನಿಗೆ ಒಂದೊಂದು (ಮುಂದಿನ ಭಾಗ), ವಿಷ್ಣು ಷಡಕ್ಷರದಿಂದ ವಿಷ್ಣುವಿಗೆ ಆರು (ಹೋಮ–ಹವನ: “ವಿಷ್ಣ್ವಾಹುತಿವಿಹೀನಂ ತು ಹೋಮಮಾಸುರಸಂಜ್ಞಕಮ್”; ಹೋಮ–ಹವನದಲ್ಲಿ ಕೃಷ್ಣ ಷಡಕ್ಷರ ಮತ್ತು ವಿಷ್ಣುಗಾಯತ್ರಿಯೂ ಇವೆ). ದೀಕ್ಷಿತರು ತತ್ತ್ವನ್ಯಾಸ, ಮಾತೃಕಾನ್ಯಾಸ, ಆವರಣ ದೇವತೆಗಳಿಗೂ ಗುರೂಪದಿಷ್ಟ ಮಂತ್ರಗಳಿಂದ ಒಂದೊಂದು ಆಹುತಿ ನೀಡುತ್ತಾರೆ; ಅವುಗಳನ್ನು ಇಲ್ಲಿ ಮುದ್ರಿಸಿಲ್ಲ.')
A(s)

# 20 Purusha Sukta offerings (Madhva, RV 10.90)
PS = old('purusha-sukta')['sections'][1]['verses']
RV1090 = [
 ('सहस्रशीर्षा पुरुषः सहस्राक्षः सहस्रपात् ।\nस भूमिं विश्वतो वृत्वात्यतिष्ठद्दशाङ्गुलम् ॥', 0),
 ('पुरुष एवेदं सर्वं यद्भूतं यच्च भव्यम् ।\nउतामृतत्वस्येशानो यदन्नेनातिरोहति ॥', 1),
 ('एतावानस्य महिमातो ज्यायांश्च पूरुषः ।\nपादोऽस्य विश्वा भूतानि त्रिपादस्यामृतं दिवि ॥', 2),
 ('त्रिपादूर्ध्व उदैत्पुरुषः पादोऽस्येहाभवत्पुनः ।\nततो विष्वङ्व्यक्रामत्साशनानशने अभि ॥', 3),
 ('तस्माद्विराळजायत विराजो अधि पूरुषः ।\nस जातो अत्यरिच्यत पश्चाद्भूमिमथो पुरः ॥', 4),
 ('यत्पुरुषेण हविषा देवा यज्ञमतन्वत ।\nवसन्तो अस्यासीदाज्यं ग्रीष्म इध्मः शरद्धविः ॥', 5),
 ('तं यज्ञं बर्हिषि प्रौक्षन्पुरुषं जातमग्रतः ।\nतेन देवा अयजन्त साध्या ऋषयश्च ये ॥', 7),
 ('तस्माद्यज्ञात्सर्वहुतः सम्भृतं पृषदाज्यम् ।\nपशून्ताँश्चक्रे वायव्यानारण्यान्ग्राम्याश्च ये ॥', 8),
 ('तस्माद्यज्ञात्सर्वहुत ऋचः सामानि जज्ञिरे ।\nछन्दांसि जज्ञिरे तस्माद्यजुस्तस्मादजायत ॥', 9),
 ('तस्मादश्वा अजायन्त ये के चोभयादतः ।\nगावो ह जज्ञिरे तस्मात्तस्माज्जाता अजावयः ॥', 10),
 ('यत्पुरुषं व्यदधुः कतिधा व्यकल्पयन् ।\nमुखं किमस्य कौ बाहू का ऊरू पादा उच्येते ॥', 11),
 ('ब्राह्मणोऽस्य मुखमासीद्बाहू राजन्यः कृतः ।\nऊरू तदस्य यद्वैश्यः पद्भ्यां शूद्रो अजायत ॥', 12),
 ('चन्द्रमा मनसो जातश्चक्षोः सूर्यो अजायत ।\nमुखादिन्द्रश्चाग्निश्च प्राणाद्वायुरजायत ॥', 13),
 ('नाभ्या आसीदन्तरिक्षं शीर्ष्णो द्यौः समवर्तत ।\nपद्भ्यां भूमिर्दिशः श्रोत्रात्तथा लोकाँ अकल्पयन् ॥', 14),
 ('सप्तास्यासन्परिधयस्त्रिः सप्त समिधः कृताः ।\nदेवा यद्यज्ञं तन्वाना अबध्नन्पुरुषं पशुम् ॥', 6),
 ('यज्ञेन यज्ञमयजन्त देवास्तानि धर्माणि प्रथमान्यासन् ।\nते ह नाकं महिमानः सचन्त यत्र पूर्वे साध्याः सन्ति देवाः ॥', 17),
]
TY = {'en': ' Svaha; this is for Mahapurusha, not mine. (Rigveda 10.90.%d)',
      'kn': ' ಸ್ವಾಹಾ; ಇದು ಮಹಾಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೧೦.೯೦.%s)',
      'hi': ' स्वाहा; यह महापुरुष के लिए है, मेरा नहीं। (ऋग्वेद 10.90.%d)',
      'te': ' స్వాహా; ఇది మహాపురుషునికి, నాది కాదు. (ఋగ్వేదం 10.90.%d)',
      'ta': ' ஸ்வாஹா; இது மஹாபுருஷனுக்கு, என்னுடையதல்ல. (ருக்வேதம் 10.90.%d)'}
KND = '೦೧೨೩೪೫೬೭೮೯'
def kd(n):
    return ''.join(KND[int(c)] for c in str(n))
psv = []
import re as _re
for i, (t, src) in enumerate(RV1090):
    o = PS[src]
    def clean(x):
        x = _re.sub(r'\s*\((Taittiriya|Rigveda|Ṛgveda|TA|ತೈತ್ತಿರೀಯ|ಋಗ್ವೇದ|तैत्तिरीय|ऋग्वेद|తైత్తిరీయ|ఋగ్వేద|தைத்திரீய|ருக்வேத)[^)]*\)\s*$', '', x.strip())
        return x
    vv = V(t.replace(' ॥', ' स्वाहा ।\nमहापुरुषायेदं न मम ॥'),
           clean(o['en']) + TY['en'] % (i + 1), clean(o['kn']) + TY['kn'] % kd(i + 1),
           clean(o['hi']) + TY['hi'] % (i + 1), clean(o['te']) + TY['te'] % (i + 1), clean(o['ta']) + TY['ta'] % (i + 1))
    psv.append(vv)
vish = V('ॐ विष्णवे नमः स्वाहा । विष्णव इदं न मम ॥',
         'Om, salutation to Vishnu, svaha; this is for Vishnu, not mine. (The six-syllable Vishnu mantra, as in Bhagavata 6.8.10: six offerings.)',
         'ಓಂ ವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ, ಸ್ವಾಹಾ; ಇದು ವಿಷ್ಣುವಿಗೆ, ನನ್ನದಲ್ಲ. (ವಿಷ್ಣು ಷಡಕ್ಷರ ಮಂತ್ರ, ಭಾಗವತ ೬.೮.೧೦ರಂತೆ: ಆರು ಆಹುತಿ.)',
         'ॐ विष्णु को नमस्कार, स्वाहा; यह विष्णु के लिए है, मेरा नहीं। (विष्णु षडक्षर मन्त्र, भागवत 6.8.10: छह आहुतियाँ।)',
         'ఓం విష్ణువుకు నమస్కారం, స్వాహా; ఇది విష్ణువుకు, నాది కాదు. (విష్ణు షడక్షర మంత్రం, భాగవతం 6.8.10: ఆరు ఆహుతులు.)',
         'ஓம் விஷ்ணுவுக்கு நமஸ்காரம், ஸ்வாஹா; இது விஷ்ணுவுக்கு, என்னுடையதல்ல. (விஷ்ணு ஷடக்ஷர மந்திரம், பாகவதம் 6.8.10: ஆறு ஆஹுதிகள்.)')
A(S('पुरुषसूक्तहोमः विष्णुषडक्षरहोमश्च', 'Purusha Sukta offerings and the Vishnu six-syllable mantra',
    'Offer ghee once with each of the sixteen verses of the Purusha Sukta in its Rigveda form (10.90), to Mahapurusha, then six times with the six-syllable Vishnu mantra (M1). Rigvedi Madhvas recite the Rigveda text given here; the Taittiriya form in the library is the one Yajurvedis chant.',
    'ಪುರುಷಸೂಕ್ತದ ಋಗ್ವೇದ ಪಾಠದ (೧೦.೯೦) ಹದಿನಾರು ಋಕ್ಕುಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದರಿಂದ ಮಹಾಪುರುಷನಿಗೆ ಒಂದೊಂದು ಆಜ್ಯಾಹುತಿ, ನಂತರ ವಿಷ್ಣು ಷಡಕ್ಷರದಿಂದ ಆರು ಆಹುತಿ (ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ). ಋಗ್ವೇದಿ ಮಾಧ್ವರು ಇಲ್ಲಿನ ಋಗ್ವೇದ ಪಾಠವನ್ನು ಹೇಳುತ್ತಾರೆ; ಗ್ರಂಥಾಲಯದಲ್ಲಿರುವ ತೈತ್ತಿರೀಯ ಪಾಠ ಯಜುರ್ವೇದಿಗಳದು.',
    psv + [vish], when=M))

# 21 Smarta vyahriti offerings before pradhana
s = OLDS(P, 18)
s['note'] = 'Some Apastamba prayoga manuals (Srimatham) offer ghee with the three vyahritis and then all three together before the pradhana homa; Muddu Shrauti and the Mylapore manual go straight to the main offerings. Follow your family manual.'
s['noteKn'] = 'ಕೆಲವು ಆಪಸ್ತಂಬ ಪ್ರಯೋಗ ಗ್ರಂಥಗಳು (ಶ್ರೀಮಠಮ್) ಪ್ರಧಾನ ಹೋಮಕ್ಕೆ ಮೊದಲು ಮೂರು ವ್ಯಾಹೃತಿಗಳಿಂದ ಮತ್ತು ಮೂರೂ ಸೇರಿ ಆಜ್ಯಾಹುತಿ ಕೊಡುತ್ತವೆ; ಮುದ್ದು ಶ್ರೌತಿ ಮತ್ತು ಮೈಲಾಪುರ ಗ್ರಂಥ ನೇರವಾಗಿ ಪ್ರಧಾನಾಹುತಿಗೆ ಹೋಗುತ್ತವೆ. ನಿಮ್ಮ ಮನೆತನದ ಪದ್ಧತಿ ಅನುಸರಿಸಿ.'
A(s)

# 22 Pradhana (both)
s = OLDS(P, 19)
s['note'] = ('Now open the text of the homa you are doing (Ganapati, Navagraha, Mrityunjaya, Sudarshana, Chandika, Lakshmi, Ayushya or Pavamana homa): do its invocation of the deity in the fire and make its main offerings with its mantras, materials and counts. Offer ghee with the sruva, solid materials with the right hand (Madhva manuals use the mrigi mudra for til and grains: the thumb with the middle and ring fingers, index and little finger held apart like a deer’s horns); say svaha as the offering touches the fire and the tyaga after it. Meanwhile others recite the chosen stotras, keep the kalasha touched for japa, and do tarpana to the main deity (Homa-Havana). When the count is complete, come back here for the uttaranga (Madhva or Smarta, below). Smarta (Muddu Shrauti): the part from the lines to the ajyabhaga is the “front frame”, from the jaya offerings to the last parishechana the “back frame”, and the main offerings are made between them.')
s['noteKn'] = ('ಈಗ ನೀವು ಮಾಡುತ್ತಿರುವ ಹೋಮದ ಪಠ್ಯವನ್ನು (ಗಣಪತಿ, ನವಗ್ರಹ, ಮೃತ್ಯುಂಜಯ, ಸುದರ್ಶನ, ಚಂಡಿಕಾ, ಲಕ್ಷ್ಮೀ, ಆಯುಷ್ಯ, ಪವಮಾನ) ತೆರೆಯಿರಿ: ಅಗ್ನಿಯಲ್ಲಿ ದೇವತೆಯ ಆವಾಹನೆ ಮಾಡಿ ಅದರ ಮಂತ್ರ, ದ್ರವ್ಯ, ಸಂಖ್ಯೆಗಳಿಂದ ಪ್ರಧಾನಾಹುತಿ ನೀಡಿ. ತುಪ್ಪವನ್ನು ಸ್ರುವದಿಂದ, ಘನ ದ್ರವ್ಯಗಳನ್ನು ಬಲಗೈಯಿಂದ (ಮಾಧ್ವರಲ್ಲಿ ಎಳ್ಳು–ಧಾನ್ಯಗಳಿಗೆ ಮೃಗೀಮುದ್ರೆ); ಆಹುತಿ ಅಗ್ನಿಯನ್ನು ಮುಟ್ಟುವಾಗ ಸ್ವಾಹಾ, ನಂತರ ತ್ಯಾಗ. ಇತರರು ಸ್ತೋತ್ರ ಪಠಿಸುತ್ತ, ಕಲಶವನ್ನು ಮುಟ್ಟಿ ಜಪಿಸುತ್ತ, ಪ್ರಧಾನ ದೇವತೆಗೆ ತರ್ಪಣ ನೀಡುತ್ತಾರೆ (ಹೋಮ–ಹವನ). ಸಂಖ್ಯೆ ಮುಗಿದ ಮೇಲೆ ಉತ್ತರಾಂಗಕ್ಕಾಗಿ ಇಲ್ಲಿಗೆ ಮರಳಿ (ಕೆಳಗೆ ಮಾಧ್ವ ಅಥವಾ ಸ್ಮಾರ್ತ). ಸ್ಮಾರ್ತ (ಮುದ್ದು ಶ್ರೌತಿ): ರೇಖೆಗಳಿಂದ ಆಜ್ಯಭಾಗದವರೆಗೆ “ಪುರಸ್ತಾತ್ ತಂತ್ರ”, ಜಯಾದಿಯಿಂದ ಕೊನೆಯ ಪರಿಷೇಚನದವರೆಗೆ “ಉಪರಿಷ್ಟಾತ್ ತಂತ್ರ”, ಅವುಗಳ ನಡುವೆ ಪ್ರಧಾನಾಹುತಿಗಳು.')
s['verses'][1]['when'] = M
A(s)

# ===================== MADHVA UTTARANGA =====================
def mv(si, vi):
    return OLD(P, si, vi, when=None)

A(S('स्विष्टकृद्धोमः', 'Uttaranga: svishtakrit',
    'From here the uttaranga (the closing part) begins. Take ghee (with a little of the charu or other material, if used), pour ghee over it twice, and offer it in the north-eastern part of the fire, apart from the earlier offerings, to Agni Svishtakrit, who makes the offering well-offered (M1).',
    'ಇಲ್ಲಿಂದ ಉತ್ತರಾಂಗ. ತುಪ್ಪವನ್ನು (ಚರು ಮುಂತಾದ ದ್ರವ್ಯವಿದ್ದರೆ ಸ್ವಲ್ಪ ಅದನ್ನೂ) ತೆಗೆದು ಎರಡು ಬಾರಿ ತುಪ್ಪ ಸವರಿ, ಹಿಂದಿನ ಆಹುತಿಗಳಿಂದ ಬೇರೆಯಾಗಿ ಅಗ್ನಿಯ ಈಶಾನ್ಯ ಭಾಗದಲ್ಲಿ ಸ್ವಿಷ್ಟಕೃತ್ ಅಗ್ನಿಗೆ ಅರ್ಪಿಸಿ (ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ).',
    [mv(20, 0)], when=M))

ayas = V('अयाश्चाग्नेऽस्यनभिशस्तीश्च सत्यमित्त्वमया असि ।\nअयासा वयसा कृतोऽयासन्हव्यमूहिषेऽया नो धेहि भेषजं स्वाहा ।\nअग्नये अयस इदं न मम ॥',
         'O Agni, you are the one who goes to us and you are blameless; truly you are Ayas. Made the one who goes with vigour, going, you carry the offering; give us healing, svaha. This is for Agni Ayas, not mine. (Ashvalayana Shrauta Sutra 1.11.13; M1.)',
         'ಓ ಅಗ್ನಿಯೇ, ನೀನು ನಮ್ಮತ್ತ ಸಾಗುವವನು, ನಿಂದಾರಹಿತನು; ನಿಜವಾಗಿ ನೀನು “ಅಯಸ್”. ವೇಗದಿಂದ ಸಾಗುವವನಾಗಿ ಹವಿಸ್ಸನ್ನು ಹೊತ್ತೊಯ್ಯುತ್ತೀಯೆ; ನಮಗೆ ಔಷಧವನ್ನು ಕೊಡು, ಸ್ವಾಹಾ. ಇದು ಅಯಸ್ ಅಗ್ನಿಗೆ, ನನ್ನದಲ್ಲ. (ಆಶ್ವಲಾಯನ ಶ್ರೌತಸೂತ್ರ ೧.೧೧.೧೩.)',
         'हे अग्नि, तुम हमारी ओर जाने वाले और निर्दोष हो; सचमुच तुम अयस् हो। वेग से चलने वाले बनकर तुम हवि ले जाते हो; हमें औषध दो, स्वाहा। यह अयस् अग्नि के लिए है, मेरा नहीं। (आश्वलायन श्रौतसूत्र 1.11.13)',
         'ఓ అగ్నీ, నీవు మా వైపు సాగేవాడవు, నిందారహితుడవు; నిజంగా నీవు “అయస్”. వేగంతో సాగుతూ హవిస్సును మోసుకెళ్తావు; మాకు ఔషధాన్ని ఇవ్వు, స్వాహా. ఇది అయస్ అగ్నికి, నాది కాదు. (ఆశ్వలాయన శ్రౌతసూత్రం 1.11.13)',
         'அக்னியே, நீ எங்களை நோக்கிச் செல்பவன், பழியற்றவன்; உண்மையில் நீ “அயஸ்”. வேகமாகச் சென்று ஹவிஸைச் சுமந்து செல்கிறாய்; எங்களுக்கு மருந்தைத் தா, ஸ்வாஹா. இது அயஸ் அக்னிக்கு, என்னுடையதல்ல. (ஆச்வலாயன ச்ரௌதஸூத்ரம் 1.11.13)')
A(S('प्रायश्चित्तहोमः', 'Prayaschitta: Rudra, Ayas Agni, Vishnu and the vyahritis',
    'Untie the string of the fuel bundle, sprinkle it, soak it in ghee and offer it to Rudra; touch water. Then offer ghee with these verses for faults in the rite, and with the vyahritis to the forms of the Lord within Agni, Vayu, Surya and Prajapati (Aniruddha, Pradyumna, Sankarshana and Vasudeva) (M1). M1 has the Brahma also offer seven oblations of ghee with अयाश्च…, अतो देवा…, इदं विष्णुः… and the four vyahritis, without naming the seer and metre.',
    'ಇಧ್ಮದ ಕಟ್ಟುಹಗ್ಗದ ಗಂಟು ಬಿಚ್ಚಿ, ಪ್ರೋಕ್ಷಿಸಿ, ತುಪ್ಪದಲ್ಲಿ ಅದ್ದಿ ರುದ್ರನಿಗೆ ಅರ್ಪಿಸಿ; ನೀರು ಮುಟ್ಟಿ. ನಂತರ ಕರ್ಮದ ದೋಷಗಳಿಗಾಗಿ ಈ ಮಂತ್ರಗಳಿಂದ, ಮತ್ತು ಅಗ್ನಿ, ವಾಯು, ಸೂರ್ಯ, ಪ್ರಜಾಪತಿಗಳೊಳಗಿನ ಅನಿರುದ್ಧ, ಪ್ರದ್ಯುಮ್ನ, ಸಂಕರ್ಷಣ, ವಾಸುದೇವರಿಗೆ ವ್ಯಾಹೃತಿಗಳಿಂದ ಆಜ್ಯಾಹುತಿ (ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ). ಬ್ರಹ್ಮನೂ “ಅಯಾಶ್ಚ…, ಅತೋ ದೇವಾ…, ಇದಂ ವಿಷ್ಣುಃ…” ಮತ್ತು ನಾಲ್ಕು ವ್ಯಾಹೃತಿಗಳಿಂದ ಏಳು ಆಜ್ಯಾಹುತಿ ನೀಡುತ್ತಾನೆ, ಋಷಿ–ಛಂದಸ್ಸು ಹೇಳದೆ.',
    [mv(21, 0), ayas, mv(21, 1), mv(21, 2), mv(21, 3)], when=M))

yadvo = V('यद्वो देवा अतिपातयानि वाचा च प्रयुती देवहेळनम् ।\nअरायो अस्माँ अभिदुच्छुनायतेऽन्यत्रास्मन्मरुतस्तन्निधेतन स्वाहा ।\nमरुद्भ्यो देवेभ्य इदं न मम ॥',
          'O gods, whatever I let fall short of you, and whatever offence to the gods I commit in speech and in purpose: the niggard who seeks to harm us — set that fault elsewhere, away from us, O Maruts, svaha. This is for the Maruts, the gods, not mine. (Ashvalayana Shrauta Sutra 3.13.18, said for any mistake in mantra, rite, time, material or deity; M1.)',
          'ಓ ದೇವತೆಗಳೇ, ನಿಮಗೆ ನಾನು ಏನು ಕೊರತೆ ಮಾಡಿದೆನೋ, ಮಾತಿನಿಂದಲೂ ಉದ್ದೇಶದಿಂದಲೂ ದೇವತೆಗಳಿಗೆ ಏನು ಅಪರಾಧ ಮಾಡಿದೆನೋ — ನಮಗೆ ಕೇಡು ಬಯಸುವ ಲೋಭಿಯ ಕಡೆಗೆ, ನಮ್ಮಿಂದ ದೂರ, ಆ ದೋಷವನ್ನು ಇಡಿ, ಓ ಮರುತ್ತುಗಳೇ, ಸ್ವಾಹಾ. ಇದು ಮರುದ್ದೇವತೆಗಳಿಗೆ, ನನ್ನದಲ್ಲ. (ಆಶ್ವಲಾಯನ ಶ್ರೌತಸೂತ್ರ ೩.೧೩.೧೮; ಮಂತ್ರ, ತಂತ್ರ, ಕಾಲ, ದ್ರವ್ಯ, ದೇವತಾ ವಿಪರ್ಯಾಸಗಳಿಗೆ.)',
          'हे देवो, जो कुछ मैंने तुम्हारे प्रति कम किया, और वाणी तथा प्रयोजन से देवताओं का जो अपराध किया — हमें हानि चाहने वाले कृपण की ओर, हमसे दूर, वह दोष रख दो, हे मरुतो, स्वाहा। यह मरुद्देवों के लिए है, मेरा नहीं। (आश्वलायन श्रौतसूत्र 3.13.18)',
          'ఓ దేవతలారా, మీ విషయంలో నేను చేసిన లోపం, మాటతో సంకల్పంతో దేవతలకు చేసిన అపరాధం — మాకు కీడు కోరే లోభి వైపు, మా నుండి దూరంగా, ఆ దోషాన్ని ఉంచండి, ఓ మరుత్తులారా, స్వాహా. ఇది మరుద్దేవతలకు, నాది కాదు. (ఆశ్వలాయన శ్రౌతసూత్రం 3.13.18)',
          'தேவர்களே, உங்களுக்கு நான் செய்த குறையும், சொல்லாலும் நோக்கத்தாலும் தேவர்களுக்குச் செய்த பிழையும் — எங்களுக்குத் தீங்கு நினைக்கும் கருமியின் பக்கம், எங்களிடமிருந்து விலகி, அந்தக் குற்றத்தை வையுங்கள், மருத்துகளே, ஸ்வாஹா. இது மருத் தேவர்களுக்கு, என்னுடையதல்ல. (ஆச்வலாயன ச்ரௌதஸூத்ரம் 3.13.18)')
sarva_m = V('सर्वप्रायश्चित्तार्थम् ॐ भूर्भुवः स्वः स्वाहा । प्रजापतये श्रीवासुदेवायेदं न मम ॥',
            'For the expiation of everything: Om, earth, sky and heaven, svaha; this is for Prajapati and Sri Vasudeva within him, not mine. (M1.)',
            'ಎಲ್ಲದರ ಪ್ರಾಯಶ್ಚಿತ್ತಕ್ಕಾಗಿ: ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ ಸ್ವಾಹಾ; ಇದು ಪ್ರಜಾಪತಿ ಮತ್ತು ಅವನೊಳಗಿನ ಶ್ರೀವಾಸುದೇವನಿಗೆ, ನನ್ನದಲ್ಲ.',
            'सबके प्रायश्चित्त के लिए: ॐ भूर्भुवः स्वः स्वाहा; यह प्रजापति और उनमें स्थित श्रीवासुदेव के लिए है, मेरा नहीं।',
            'అన్నింటి ప్రాయశ్చిత్తం కొరకు: ఓం భూర్భువః స్వః స్వాహా; ఇది ప్రజాపతికి, ఆయనలోని శ్రీవాసుదేవునికి, నాది కాదు.',
            'எல்லாவற்றின் பிராயச்சித்தத்துக்காக: ஓம் பூர்புவ: ஸ்வ: ஸ்வாஹா; இது ப்ரஜாபதிக்கும் அவருள் உள்ள ஸ்ரீ வாஸுதேவனுக்கும், என்னுடையதல்ல.')
A(S('प्रायश्चित्तहोमः', 'Prayaschitta: for known and unknown faults',
    'Offer ghee with these verses, which ask Agni to set right whatever was done wrongly, knowingly or unknowingly (Taittiriya Brahmana 3.7.11; the third is Rigveda 10.2.5, said with the Rigvedic मर्त्यासः), then with यद्वो देवा… for any reversal of mantra, rite, time, material or deity, and finish with the all-expiation offering (M1).',
    'ತಿಳಿದು ಅಥವಾ ತಿಳಿಯದೆ ತಪ್ಪಾಗಿ ಮಾಡಿದ್ದನ್ನು ಸರಿಪಡಿಸಲು ಅಗ್ನಿಯನ್ನು ಬೇಡುವ ಈ ಮಂತ್ರಗಳಿಂದ ಆಜ್ಯಾಹುತಿ (ತೈತ್ತಿರೀಯ ಬ್ರಾಹ್ಮಣ ೩.೭.೧೧; ಮೂರನೆಯದು ಋಗ್ವೇದ ೧೦.೨.೫, “ಮರ್ತ್ಯಾಸಃ” ಎಂದು), ನಂತರ ಮಂತ್ರ, ತಂತ್ರ, ಕಾಲ, ದ್ರವ್ಯ, ದೇವತಾ ವಿಪರ್ಯಾಸಗಳಿಗೆ “ಯದ್ವೋ ದೇವಾ…”, ಕೊನೆಯಲ್ಲಿ ಸರ್ವಪ್ರಾಯಶ್ಚಿತ್ತ (ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ).',
    [mv(22, 0), mv(22, 1), mv(22, 2), yadvo, sarva_m], when=M))

s = OLDS(P, 24)
s['note'] = ('Fill the sruk with ghee (with a coconut, cloth, fruit or other offering as the homa prescribes), lay the sruva on it face down with flowers and akshata at its tip, stand, and recite the whole hymn samudrad urmih (Rigveda 4.58, eleven verses), pouring the ghee in an unbroken stream at the svaha of the last verse (M1; the Sudarshana Kalpa the same). Then offer what is left with वि ज्योतिषा… (Rigveda 10.9.8 is not this verse; it is RV 5.2.9).')
s['note'] = ('Fill the sruk with ghee (with a coconut, cloth, fruit or other offering as the homa prescribes), lay the sruva on it face down with flowers and akshata at its tip, stand, and recite the whole hymn samudrad urmih (Rigveda 4.58, eleven verses), pouring the ghee in an unbroken stream at the svaha of the last verse (M1; the Sudarshana Kalpa the same). Then offer what is left with वि ज्योतिषा… (Rigveda 5.2.9).')
s['noteKn'] = ('ಸ್ರುಕ್ಕನ್ನು ತುಪ್ಪದಿಂದ ತುಂಬಿ (ಹೋಮಕ್ಕೆ ತಕ್ಕಂತೆ ತೆಂಗಿನಕಾಯಿ, ವಸ್ತ್ರ, ಫಲ ಮುಂತಾದವುಗಳೊಡನೆ), ಅದರ ಮೇಲೆ ಸ್ರುವವನ್ನು ಬೋರಲಾಗಿಟ್ಟು ತುದಿಯಲ್ಲಿ ಹೂವು–ಅಕ್ಷತೆ ಇಟ್ಟು, ನಿಂತುಕೊಂಡು “ಸಮುದ್ರಾದೂರ್ಮಿಃ” ಸೂಕ್ತವನ್ನು (ಋಗ್ವೇದ ೪.೫೮, ಹನ್ನೊಂದು ಋಕ್ಕು) ಪೂರ್ತಿ ಹೇಳಿ, ಕೊನೆಯ ಋಕ್ಕಿನ ಸ್ವಾಹಾದಲ್ಲಿ ತುಪ್ಪವನ್ನು ಅಖಂಡ ಧಾರೆಯಾಗಿ ಸುರಿಯಿರಿ (ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ; ಸುದರ್ಶನಕಲ್ಪದಲ್ಲೂ ಹೀಗೆ). ಉಳಿದದ್ದನ್ನು “ವಿ ಜ್ಯೋತಿಷಾ…” (ಋಗ್ವೇದ ೫.೨.೯) ಎಂದು ಅರ್ಪಿಸಿ.')
A(s)
A(dict(OLDS(P, 26), when=M, note='Offer the ghee that has gathered in the sruva during the homa to the Vishvedevas (M1).', noteKn='ಹೋಮದ ಸಮಯದಲ್ಲಿ ಸ್ರುವದಲ್ಲಿ ಸಂಗ್ರಹವಾದ ತುಪ್ಪವನ್ನು (ಸಂಸ್ರಾವ) ವಿಶ್ವೇದೇವತೆಗಳಿಗೆ ಅರ್ಪಿಸಿ (ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ).'))

purna = V('पूर्णमसि पूर्णं मे भूयाः सुपूर्णमसि सुपूर्णं मे भूयाः\nसदसि सन्मे भूयाः सर्वमसि सर्वं मे भूया अक्षितिरसि मा मे क्षेष्ठाः ॥',
          'You are full, may I be full; you are well filled, may I be well filled; you are the real, may I be real; you are all, may I have all; you are imperishable, do not perish for me. (Said touching the pranita vessel, the purna-patra; Ashvalayana Shrauta Sutra 1.11.6; M1.)',
          'ನೀನು ಪೂರ್ಣ, ನಾನು ಪೂರ್ಣನಾಗಲಿ; ನೀನು ಸುಪೂರ್ಣ, ನಾನು ಸುಪೂರ್ಣನಾಗಲಿ; ನೀನು ಸತ್, ನಾನು ಸತ್ತಾಗಲಿ; ನೀನು ಸರ್ವ, ನನಗೆ ಸರ್ವವೂ ಆಗಲಿ; ನೀನು ಅಕ್ಷಯ, ನನಗೆ ಕ್ಷಯಿಸಬೇಡ. (ಪ್ರಣೀತಾ ಪಾತ್ರೆಯನ್ನು — ಪೂರ್ಣಪಾತ್ರ — ಮುಟ್ಟಿ ಹೇಳುವುದು; ಆಶ್ವಲಾಯನ ಶ್ರೌತಸೂತ್ರ ೧.೧೧.೬.)',
          'तुम पूर्ण हो, मैं पूर्ण होऊँ; तुम सुपूर्ण हो, मैं सुपूर्ण होऊँ; तुम सत् हो, मैं सत् होऊँ; तुम सर्व हो, मुझे सब मिले; तुम अक्षय हो, मेरे लिए क्षीण मत होओ। (प्रणीता पात्र — पूर्णपात्र — को छूकर; आश्वलायन श्रौतसूत्र 1.11.6)',
          'నీవు పూర్ణం, నేను పూర్ణుడనవ్వాలి; నీవు సుపూర్ణం, నేను సుపూర్ణుడనవ్వాలి; నీవు సత్తు, నేను సత్తుగా ఉండాలి; నీవు సర్వం, నాకు సర్వం కలగాలి; నీవు అక్షయం, నాకు క్షీణించకు. (ప్రణీతా పాత్రను — పూర్ణపాత్రను — తాకి; ఆశ్వలాయన శ్రౌతసూత్రం 1.11.6)',
          'நீ பூர்ணம், நான் பூர்ணனாக வேண்டும்; நீ ஸுபூர்ணம், நான் ஸுபூர்ணனாக வேண்டும்; நீ ஸத், நான் ஸத்தாக வேண்டும்; நீ ஸர்வம், எனக்கு எல்லாம் கிட்டட்டும்; நீ அழிவற்றது, எனக்குக் குறைந்துவிடாதே. (ப்ரணீதா பாத்திரத்தை — பூர்ணபாத்ரம் — தொட்டு; ஆச்வலாயன ச்ரௌதஸூத்ரம் 1.11.6)')
maham = V('माहं प्रजां परासिचं या नः सयावरीः स्थन ।\nसमुद्रे वो निनयानि स्वं पाथो अपीथ ॥',
          'May I not pour away the offspring, you waters who go along with us; I pour you into the ocean: go to your own abode. (The Brahma pours the rest of the pranita water into the joined palms of the yajamana’s wife; Ashvalayana Shrauta Sutra 1.11.8; M1.)',
          'ನಮ್ಮೊಡನೆ ಸಾಗುವ ಜಲಗಳೇ, ನಾನು ಸಂತಾನವನ್ನು ಚೆಲ್ಲಿಬಿಡದಿರಲಿ; ನಿಮ್ಮನ್ನು ಸಮುದ್ರಕ್ಕೆ ಸುರಿಯುತ್ತೇನೆ, ನಿಮ್ಮ ಸ್ವಸ್ಥಾನವನ್ನು ಸೇರಿರಿ. (ಬ್ರಹ್ಮನು ಉಳಿದ ಪ್ರಣೀತಾ ಜಲವನ್ನು ಯಜಮಾನಪತ್ನಿಯ ಬೊಗಸೆಗೆ ಸುರಿಯುವಾಗ; ಆಶ್ವಲಾಯನ ಶ್ರೌತಸೂತ್ರ ೧.೧೧.೮.)',
          'हमारे साथ चलने वाले जलो, मैं सन्तान को न बहा दूँ; मैं तुम्हें समुद्र में उँडेलता हूँ, अपने स्थान को जाओ। (ब्रह्मा शेष प्रणीता जल यजमान-पत्नी की अंजलि में डालते समय; आश्वलायन श्रौतसूत्र 1.11.8)',
          'మాతో కలిసి సాగే జలాల్లారా, నేను సంతానాన్ని పారబోయకుందును గాక; మిమ్మల్ని సముద్రంలో పోస్తున్నాను, మీ స్వస్థానాన్ని చేరండి. (బ్రహ్మ మిగిలిన ప్రణీతా జలాన్ని యజమాని భార్య దోసిలిలో పోసేటప్పుడు; ఆశ్వలాయన శ్రౌతసూత్రం 1.11.8)',
          'எங்களுடன் செல்லும் நீர்களே, நான் சந்ததியைச் சிந்திவிடாமல் இருக்கட்டும்; உங்களைக் கடலில் ஊற்றுகிறேன், உங்கள் இடத்தைச் சேருங்கள். (ப்ரஹ்மா மீதமுள்ள ப்ரணீதா நீரை யஜமான பத்தினியின் கைகளில் ஊற்றும்போது; ஆச்வலாயன ச்ரௌதஸூத்ரம் 1.11.8)')
iap = mv(27, 2)
iap['text'] = 'इदमापः प्र वहत यत्किं च दुरितं मयि ।\nयद्वाहमभिदुद्रोह यद्वा शेप उतानृतम् ॥\nसुमित्र्या न आप ओषधयः सन्तु दुर्मित्र्यास्तस्मै सन्तु योऽस्मान्द्वेष्टि यं च वयं द्विष्मः ॥'
iap['en'] = iap['en'].rstrip() + ' May the waters and plants be friendly to us, and unfriendly to him who hates us and whom we hate (said as water is poured to the south-west; M1, Shankhayana Shrauta Sutra).'
iap['kn'] = iap['kn'].rstrip() + ' ಜಲಗಳೂ ಓಷಧಿಗಳೂ ನಮಗೆ ಮಿತ್ರರಾಗಲಿ; ನಮ್ಮನ್ನು ದ್ವೇಷಿಸುವವನಿಗೆ, ನಾವು ದ್ವೇಷಿಸುವವನಿಗೆ ಅಮಿತ್ರರಾಗಲಿ (ನೈಋತ್ಯಕ್ಕೆ ನೀರು ಸುರಿಯುತ್ತ).'
iap['hi'] = iap['hi'].rstrip() + ' जल और ओषधियाँ हमारे लिए मित्र हों, और उसके लिए शत्रु हों जो हमसे द्वेष करता है और जिससे हम द्वेष करते हैं (नैर्ऋत्य में जल डालते हुए)।'
iap['te'] = iap['te'].rstrip() + ' జలాలు, ఓషధులు మాకు మిత్రులు కావాలి; మమ్మల్ని ద్వేషించేవానికి, మేము ద్వేషించేవానికి అమిత్రులు కావాలి (నైరృతికి నీరు పోస్తూ).'
iap['ta'] = iap['ta'].rstrip() + ' நீர்களும் மூலிகைகளும் எங்களுக்கு நட்பாக இருக்கட்டும்; எங்களை வெறுப்பவனுக்கும் நாங்கள் வெறுப்பவனுக்கும் பகையாக இருக்கட்டும் (தென்மேற்கில் நீர் ஊற்றும்போது).'
A(S('पूर्णपात्रं मार्जनं च', 'The purna-patra and marjana',
    'Set the ghee vessel to the north. Pour out the pranita water (the purna-patra) on the barhis and touch it with पूर्णमसि…. With darbha tips sprinkle its water towards the five directions with प्राच्यां दिशि…, sprinkle your head with आपो अस्मान्… and इदमापः…, and pour a little to the south-west. The Brahma then pours the remaining water into the joined palms of the yajamana’s wife, saying माहं प्रजाम्…; say शान्तिरस्तु पुष्टिरस्तु, put akshata on the head and sprinkle yourself and your wife (M1).',
    'ತುಪ್ಪದ ಪಾತ್ರೆಯನ್ನು ಉತ್ತರಕ್ಕಿಡಿ. ಪ್ರಣೀತಾ ಜಲವನ್ನು (ಪೂರ್ಣಪಾತ್ರ) ಬರ್ಹಿಸ್ಸಿನ ಮೇಲೆ ಸುರಿದು “ಪೂರ್ಣಮಸಿ…” ಎಂದು ಮುಟ್ಟಿ. ದರ್ಭಾಗ್ರಗಳಿಂದ ಆ ಜಲವನ್ನು “ಪ್ರಾಚ್ಯಾಂ ದಿಶಿ…” ಎಂದು ಐದು ದಿಕ್ಕುಗಳಿಗೆ ಪ್ರೋಕ್ಷಿಸಿ, “ಆಪೋ ಅಸ್ಮಾನ್…”, “ಇದಮಾಪಃ…” ಎಂದು ತಲೆಗೆ ಪ್ರೋಕ್ಷಿಸಿ, ಸ್ವಲ್ಪ ನೈಋತ್ಯಕ್ಕೆ ಸುರಿಯಿರಿ. ನಂತರ ಬ್ರಹ್ಮನು ಉಳಿದ ಜಲವನ್ನು “ಮಾಹಂ ಪ್ರಜಾಮ್…” ಎಂದು ಯಜಮಾನಪತ್ನಿಯ ಬೊಗಸೆಗೆ ಸುರಿಯುತ್ತಾನೆ; “ಶಾಂತಿರಸ್ತು ಪುಷ್ಟಿರಸ್ತು” ಎಂದು ತಲೆಗೆ ಅಕ್ಷತೆ ಹಾಕಿ, ತನಗೂ ಪತ್ನಿಗೂ ಪ್ರೋಕ್ಷಿಸಿ (ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ).',
    [purna, dict(mv(27, 0), en='In the east may the gods and the priests be sprinkled (and purify us); in the south the months and the ancestors; in the west the houses and the cattle; in the north the waters, the plants and the trees; above, the sacrifice, the year and Prajapati. (Ashvalayana Shrauta Sutra 1.11.7.)'), mv(27, 1), iap, maham], when=M))

agnenaya = [mv(28, 0)]
AN = [
 ('अग्ने त्वं पारया नव्यो अस्मान्स्वस्तिभिरति दुर्गाणि विश्वा ।\nपूश्च पृथ्वी बहुला न उर्वी भवा तोकाय तनयाय शं योः ॥',
  'O Agni, you who are ever new, carry us across all difficulties with your blessings; be a broad, wide and spacious stronghold for us, and health and happiness for our children and descendants. (Rigveda 1.189.2)',
  'ಓ ಅಗ್ನಿಯೇ, ಸದಾ ನವೀನನಾದ ನೀನು ನಿನ್ನ ಮಂಗಳಗಳಿಂದ ನಮ್ಮನ್ನು ಎಲ್ಲ ಸಂಕಟಗಳಿಂದ ಪಾರುಮಾಡು; ನಮಗೆ ವಿಶಾಲವಾದ ದುರ್ಗವಾಗಿಯೂ, ನಮ್ಮ ಮಕ್ಕಳು–ಮೊಮ್ಮಕ್ಕಳಿಗೆ ಆರೋಗ್ಯ ಸುಖಗಳಾಗಿಯೂ ಇರು. (ಋಗ್ವೇದ ೧.೧೮೯.೨)',
  'हे अग्नि, सदा नवीन तुम अपने मंगलों से हमें सब संकटों के पार ले जाओ; हमारे लिए विस्तृत, विशाल दुर्ग बनो और हमारी सन्तान के लिए आरोग्य और सुख। (ऋग्वेद 1.189.2)',
  'ఓ అగ్నీ, ఎప్పుడూ నూతనుడవైన నీవు నీ మంగళాలతో మమ్మల్ని అన్ని కష్టాల నుండి దాటించు; మాకు విశాలమైన దుర్గంగా, మా సంతానానికి ఆరోగ్యం సుఖంగా ఉండు. (ఋగ్వేదం 1.189.2)',
  'அக்னியே, என்றும் புதியவனான நீ உன் மங்கலங்களால் எல்லா இடர்களிலிருந்தும் எங்களைக் கடத்துவாயாக; எங்களுக்குப் பரந்த அரணாகவும், எங்கள் மக்களுக்கு நலமும் இன்பமுமாகவும் இரு. (ருக்வேதம் 1.189.2)'),
 ('अग्ने त्वमस्मद्युयोध्यमीवा अनग्नित्रा अभ्यमन्त कृष्टीः ।\nपुनरस्मभ्यं सुविताय देव क्षां विश्वेभिरमृतेभिर्यजत्र ॥',
  'O Agni, drive away from us the diseases that have attacked the people who keep no fire; O god worthy of worship, make the earth prosper again for us, with all the immortals. (Rigveda 1.189.3)',
  'ಓ ಅಗ್ನಿಯೇ, ಅಗ್ನಿಯನ್ನು ಪೋಷಿಸದ ಜನರನ್ನು ಆಕ್ರಮಿಸಿದ ರೋಗಗಳನ್ನು ನಮ್ಮಿಂದ ದೂರಮಾಡು; ಪೂಜ್ಯ ದೇವನೇ, ಎಲ್ಲ ಅಮರರೊಡನೆ ಭೂಮಿಯನ್ನು ಮತ್ತೆ ನಮ್ಮ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ಮಾಡು. (ಋಗ್ವೇದ ೧.೧೮೯.೩)',
  'हे अग्नि, अग्नि न रखने वाले लोगों पर आए रोगों को हमसे दूर करो; हे पूज्य देव, सब अमरों के साथ पृथ्वी को फिर हमारे कल्याण के लिए करो। (ऋग्वेद 1.189.3)',
  'ఓ అగ్నీ, అగ్నిని పోషించని జనులను పట్టిన రోగాలను మా నుండి దూరం చేయి; పూజ్యుడవైన దేవా, అమరులందరితో కలిసి భూమిని మళ్ళీ మా క్షేమానికి చేయి. (ఋగ్వేదం 1.189.3)',
  'அக்னியே, அக்னியைப் பேணாத மக்களைத் தாக்கிய நோய்களை எங்களிடமிருந்து விரட்டு; வழிபடத்தக்க தேவனே, எல்லா அமரர்களுடனும் பூமியை மீண்டும் எங்கள் நலனுக்காக ஆக்கு. (ருக்வேதம் 1.189.3)'),
 ('पाहि नो अग्ने पायुभिरजस्रैरुत प्रिये सदन आ शुशुक्वान् ।\nमा ते भयं जरितारं यविष्ठ नूनं विदन्मापरं सहस्वः ॥',
  'Protect us, O Agni, with your unceasing protections, shining in your beloved seat; O youngest, mighty one, let no fear touch your praiser now or hereafter. (Rigveda 1.189.4)',
  'ಓ ಅಗ್ನಿಯೇ, ನಿನ್ನ ಪ್ರಿಯ ಸ್ಥಾನದಲ್ಲಿ ಪ್ರಜ್ವಲಿಸುತ್ತ ನಿರಂತರ ರಕ್ಷಣೆಗಳಿಂದ ನಮ್ಮನ್ನು ಕಾಪಾಡು; ಓ ಯುವತಮನೇ, ಬಲಶಾಲಿಯೇ, ನಿನ್ನನ್ನು ಸ್ತುತಿಸುವವನನ್ನು ಈಗಾಗಲೀ ಮುಂದಾಗಲೀ ಭಯ ಸೋಕದಿರಲಿ. (ಋಗ್ವೇದ ೧.೧೮೯.೪)',
  'हे अग्नि, अपने प्रिय स्थान में प्रज्वलित होकर निरन्तर रक्षाओं से हमारी रक्षा करो; हे युवतम, बलवान, तुम्हारे स्तोता को अभी या आगे भय न छुए। (ऋग्वेद 1.189.4)',
  'ఓ అగ్నీ, నీ ప్రియస్థానంలో ప్రకాశిస్తూ నిరంతర రక్షణలతో మమ్మల్ని కాపాడు; ఓ యువతముడా, బలశాలీ, నిన్ను స్తుతించేవాణ్ణి ఇప్పుడు గాని తరువాత గాని భయం తాకకుండుగాక. (ఋగ్వేదం 1.189.4)',
  'அக்னியே, உன் இனிய இருப்பிடத்தில் ஒளிர்ந்து இடையறாத காவல்களால் எங்களைக் காப்பாயாக; இளையோனே, வலியோனே, உன்னைப் போற்றுபவனை இப்போதோ பின்னரோ அச்சம் தீண்டாதிருக்கட்டும். (ருக்வேதம் 1.189.4)'),
 ('मा नो अग्नेऽव सृजो अघायाविष्यवे रिपवे दुच्छुनायै ।\nमा दत्वते दशते मादते नो मा रीषते सहसावन्परा दाः ॥',
  'O Agni, do not abandon us to the evil-doer, the greedy enemy, or misfortune; O mighty one, do not hand us over to the toothed one that bites, nor to the toothless, nor to the one who harms. (Rigveda 1.189.5)',
  'ಓ ಅಗ್ನಿಯೇ, ಪಾಪಿಗೂ ಲೋಭಿ ಶತ್ರುವಿಗೂ ದುರ್ಭಾಗ್ಯಕ್ಕೂ ನಮ್ಮನ್ನು ಬಿಟ್ಟುಕೊಡಬೇಡ; ಬಲಶಾಲಿಯೇ, ಹಲ್ಲಿನಿಂದ ಕಚ್ಚುವವನಿಗೂ ಹಲ್ಲಿಲ್ಲದವನಿಗೂ ಹಿಂಸಕನಿಗೂ ನಮ್ಮನ್ನು ಒಪ್ಪಿಸಬೇಡ. (ಋಗ್ವೇದ ೧.೧೮೯.೫)',
  'हे अग्नि, हमें पापी, लोभी शत्रु और दुर्भाग्य के हवाले मत करो; हे बलवान, दाँतों से काटने वाले, बिना दाँत वाले और हिंसक को हमें मत सौंपो। (ऋग्वेद 1.189.5)',
  'ఓ అగ్నీ, పాపికి, లోభి శత్రువుకు, దుర్భాగ్యానికి మమ్మల్ని వదలకు; బలశాలీ, పళ్ళతో కరిచేవానికి, పళ్ళు లేనివానికి, హింసకునికి మమ్మల్ని అప్పగించకు. (ఋగ్వేదం 1.189.5)',
  'அக்னியே, பாவிக்கும் பேராசைப் பகைவனுக்கும் துர்பாக்கியத்துக்கும் எங்களைக் கைவிடாதே; வலியோனே, பற்களால் கடிப்பவனுக்கும் பல்லில்லாதவனுக்கும் தீங்கிழைப்பவனுக்கும் எங்களை ஒப்படைக்காதே. (ருக்வேதம் 1.189.5)'),
 ('वि घ त्वावाँ ऋतजात यंसद्गृणानो अग्ने तन्वे वरूथम् ।\nविश्वाद्रिरिक्षोरुत वा निनित्सोरभिह्रुतामसि हि देव विष्पट् ॥',
  'O Agni, born of the cosmic order, one like you, praised, will give shelter to our bodies; for you, O god, are the one who wards off every would-be harmer and reviler, and those who would trip us. (Rigveda 1.189.6)',
  'ಓ ಋತದಿಂದ ಹುಟ್ಟಿದ ಅಗ್ನಿಯೇ, ಸ್ತುತಿಸಲ್ಪಟ್ಟ ನಿನ್ನಂಥವನು ನಮ್ಮ ದೇಹಗಳಿಗೆ ಆಶ್ರಯ ಕೊಡುವನು; ದೇವನೇ, ಹಿಂಸಿಸಬಯಸುವ, ನಿಂದಿಸಬಯಸುವ, ಕೆಡವಬಯಸುವ ಎಲ್ಲರನ್ನೂ ತಡೆಯುವವನು ನೀನೇ. (ಋಗ್ವೇದ ೧.೧೮೯.೬)',
  'हे ऋत से उत्पन्न अग्नि, स्तुत होकर तुम जैसे देव हमारे शरीरों को आश्रय देंगे; हे देव, हिंसा, निन्दा और छल करने वाले सबको तुम ही रोकते हो। (ऋग्वेद 1.189.6)',
  'ఓ ఋతం నుండి పుట్టిన అగ్నీ, స్తుతింపబడిన నీ వంటివాడు మా దేహాలకు ఆశ్రయమిస్తాడు; దేవా, హింసించ, నిందించ, పడదోయ కోరే వారందరినీ నిరోధించేవాడవు నీవే. (ఋగ్వేదం 1.189.6)',
  'ருதத்திலிருந்து பிறந்த அக்னியே, போற்றப்பட்ட உன் போன்றவன் எங்கள் உடல்களுக்குப் புகலிடம் தருவான்; தேவனே, தீங்கிழைக்க, பழிக்க, வீழ்த்த நினைக்கும் அனைவரையும் தடுப்பவன் நீயே. (ருக்வேதம் 1.189.6)'),
 ('त्वं ताँ अग्न उभयान्वि विद्वान्वेषि प्रपित्वे मनुषो यजत्र ।\nअभिपित्वे मनवे शास्यो भूर्मर्मृजेन्य उशिग्भिर्नाक्रः ॥',
  'O Agni worthy of worship, knowing both kinds of men, you come to them at the morning; at evening you become the one to be invoked for man, made bright by the eager priests, never failing. (Rigveda 1.189.7)',
  'ಓ ಪೂಜ್ಯ ಅಗ್ನಿಯೇ, ಎರಡು ಬಗೆಯ ಮನುಷ್ಯರನ್ನೂ ಅರಿತ ನೀನು ಬೆಳಿಗ್ಗೆ ಅವರ ಬಳಿ ಬರುತ್ತೀಯೆ; ಸಂಜೆ ಮನುಷ್ಯನಿಗೆ ಆಹ್ವಾನಯೋಗ್ಯನಾಗಿ, ಉತ್ಸುಕ ಋತ್ವಿಜರಿಂದ ಬೆಳಗಿಸಲ್ಪಟ್ಟು, ಎಂದೂ ತಪ್ಪದವನಾಗಿರುವೆ. (ಋಗ್ವೇದ ೧.೧೮೯.೭)',
  'हे पूज्य अग्नि, दोनों प्रकार के मनुष्यों को जानते हुए तुम प्रातः उनके पास आते हो; सायं मनुष्य के लिए आवाहनीय होते हो, उत्सुक ऋत्विजों द्वारा उज्ज्वल किए गए, कभी न चूकने वाले। (ऋग्वेद 1.189.7)',
  'ఓ పూజ్యుడవైన అగ్నీ, రెండు విధాల మనుష్యులను ఎరిగిన నీవు ఉదయం వారి వద్దకు వస్తావు; సాయంత్రం మనిషికి ఆహ్వానయోగ్యుడవై, ఉత్సుకులైన ఋత్విజులచే ప్రకాశింపజేయబడి, ఎన్నడూ తప్పనివాడవు. (ఋగ్వేదం 1.189.7)',
  'வழிபடத்தக்க அக்னியே, இருவகை மனிதர்களையும் அறிந்த நீ காலையில் அவர்களிடம் வருகிறாய்; மாலையில் மனிதனுக்கு அழைக்கத்தக்கவனாகி, ஆர்வமுள்ள ருத்விக்குகளால் ஒளியூட்டப்பட்டு, என்றும் தவறாதவனாக இருக்கிறாய். (ருக்வேதம் 1.189.7)'),
 ('अवोचाम निवचनान्यस्मिन्मानस्य सूनुः सहसाने अग्नौ ।\nवयं सहस्रमृषिभिः सनेम विद्यामेषं वृजनं जीरदानुम् ॥',
  'We, the son of Mana, have spoken these words of praise to this mighty Agni; may we with the seers win a thousandfold; may we find nourishment, strength and quickening gifts. (Rigveda 1.189.8)',
  'ಮಾನನ ಮಗನಾದ ನಾವು ಈ ಬಲಶಾಲಿ ಅಗ್ನಿಗೆ ಈ ಸ್ತುತಿವಚನಗಳನ್ನು ಹೇಳಿದ್ದೇವೆ; ಋಷಿಗಳೊಡನೆ ನಾವು ಸಾವಿರಪಟ್ಟು ಗಳಿಸೋಣ; ಅನ್ನ, ಬಲ, ಚೈತನ್ಯದಾಯಕ ದಾನಗಳನ್ನು ಪಡೆಯೋಣ. (ಋಗ್ವೇದ ೧.೧೮೯.೮)',
  'मान के पुत्र हमने इस बलवान अग्नि के लिए ये स्तुतिवचन कहे; ऋषियों के साथ हम सहस्रगुना प्राप्त करें; अन्न, बल और स्फूर्तिदायक दान पाएँ। (ऋग्वेद 1.189.8)',
  'మానుని కుమారులమైన మేము ఈ బలశాలి అగ్నికి ఈ స్తుతివచనాలు పలికాము; ఋషులతో కలిసి మేము వేయిరెట్లు పొందుదుముగాక; అన్నం, బలం, ఉత్సాహం కలిగించే దానాలు పొందుదుముగాక. (ఋగ్వేదం 1.189.8)',
  'மானனின் மகனான நாங்கள் இந்த வலிய அக்னிக்கு இப்புகழ்மொழிகளைச் சொன்னோம்; ருஷிகளுடன் நாங்கள் ஆயிரமடங்கு பெறுவோமாக; உணவு, வலிமை, உற்சாகம் தரும் கொடைகளைப் பெறுவோமாக. (ருக்வேதம் 1.189.8)'),
]
for t, en, kn, hi, te, ta in AN:
    agnenaya.append(V(t, en, kn, hi, te, ta))
bsama = V('बृहत्साम क्षत्रभृद्वृद्धवृष्णियं त्रिष्टुभौजः शुभितमुग्रवीरम् ।\nइन्द्र स्तोमेन पञ्चदशेन मध्यमिदं वातेन सगरेण रक्ष ॥',
          'The Brihat Saman, bearer of rule, of great virile strength, with the might of the Trishtubh, splendid, with mighty heroes: O Indra, with the fifteenfold stoma and the wind Sagara, protect this middle (the body). (Said applying the raksha ash; Ashvalayana Shrauta Sutra 4.12.2; M1 and the Mylapore manual.)',
          'ಕ್ಷತ್ರವನ್ನು ಧರಿಸುವ, ಮಹಾಬಲವುಳ್ಳ ಬೃಹತ್ಸಾಮ, ತ್ರಿಷ್ಟುಪ್ಪಿನ ತೇಜಸ್ಸು, ಶೋಭಾಯಮಾನ, ಉಗ್ರವೀರರುಳ್ಳದ್ದು: ಓ ಇಂದ್ರನೇ, ಪಂಚದಶ ಸ್ತೋಮದಿಂದಲೂ ಸಗರ ಎಂಬ ವಾಯುವಿನಿಂದಲೂ ಈ ಮಧ್ಯವನ್ನು (ದೇಹವನ್ನು) ರಕ್ಷಿಸು. (ರಕ್ಷೆಯ ಭಸ್ಮ ಧರಿಸುವಾಗ; ಆಶ್ವಲಾಯನ ಶ್ರೌತಸೂತ್ರ ೪.೧೨.೨; ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ, ಮೈಲಾಪುರ ಗ್ರಂಥ.)',
          'क्षत्र को धारण करने वाला, महान बल वाला बृहत्साम, त्रिष्टुप् का ओज, शोभित, उग्र वीरों वाला: हे इन्द्र, पंचदश स्तोम और सगर वायु से इस मध्य (शरीर) की रक्षा करो। (रक्षा-भस्म धारण करते समय; आश्वलायन श्रौतसूत्र 4.12.2)',
          'క్షత్రాన్ని ధరించే, మహాబలం గల బృహత్సామం, త్రిష్టుప్పు తేజస్సు, శోభితం, ఉగ్రవీరులు గలది: ఓ ఇంద్రా, పంచదశ స్తోమంతో, సగరమనే వాయువుతో ఈ మధ్యభాగాన్ని (దేహాన్ని) రక్షించు. (రక్షాభస్మం ధరించేటప్పుడు; ఆశ్వలాయన శ్రౌతసూత్రం 4.12.2)',
          'க்ஷத்ரத்தைத் தாங்கும், பெருவலிமையுள்ள ப்ருஹத்ஸாமம், த்ரிஷ்டுப்பின் ஓஜஸ், ஒளிர்வது, உக்ர வீரர்கள் உடையது: இந்திரனே, பஞ்சதச ஸ்தோமத்தாலும் ஸகரம் என்ற காற்றாலும் இந்த நடுப்பகுதியை (உடலை) காப்பாயாக. (ரக்ஷா பஸ்மம் தரிக்கும்போது; ஆச்வலாயன ச்ரௌதஸூத்ரம் 4.12.2)')

A(S('अग्न्युपस्थानम्', 'Agni upasthana (praise of the fire)',
    'Take away the paristarana darbha to the north; give a gift to the Brahma (ब्रह्मणे वरं ददामि). Decorate the fire again with gandha, flowers and akshata with विश्वानि नो… (as before), go round it four times, and stand before it with folded hands praising it with अग्ने त्वं नो… (Rigveda 5.24.1-4) and बोधा मे… (Rigveda 1.147.2) (M1).',
    'ಪರಿಸ್ತರಣ ದರ್ಭೆಗಳನ್ನು ಉತ್ತರಕ್ಕೆ ತೆಗೆಯಿರಿ; ಬ್ರಹ್ಮನಿಗೆ ದಾನ ನೀಡಿ (ಬ್ರಹ್ಮಣೇ ವರಂ ದದಾಮಿ). “ವಿಶ್ವಾನಿ ನೋ…” ಎಂದು ಮತ್ತೆ ಗಂಧ–ಹೂವು–ಅಕ್ಷತೆಗಳಿಂದ ಅಗ್ನಿಯನ್ನು ಅಲಂಕರಿಸಿ, ನಾಲ್ಕು ಪ್ರದಕ್ಷಿಣೆ ಮಾಡಿ, ಕೈಮುಗಿದು “ಅಗ್ನೇ ತ್ವಂ ನೋ…” (ಋಗ್ವೇದ ೫.೨೪.೧–೪) ಮತ್ತು “ಬೋಧಾ ಮೇ…” (ಋಗ್ವೇದ ೧.೧೪೭.೨) ಎಂದು ಸ್ತುತಿಸಿ (ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ).',
    [mv(28, 1), mv(28, 2)], when=M))
s = OLDS(P, 29)
s['verses'] = [s['verses'][0], bsama, s['verses'][1]]
s['note'] = ('Take a little ash (bhasma) from the north side of the fire with मा नस्तोके… and apply it with the ring finger with बृहत्साम… and these mantras: त्र्यायुषं जमदग्नेः on the forehead, कश्यपस्य त्र्यायुषम् on the throat, अगस्त्यस्य त्र्यायुषम् on the navel, यद्देवानां त्र्यायुषम् on the right shoulder, तन्मे अस्तु त्र्यायुषम् on the left shoulder, सर्वमस्तु शतायुषम् on the head, and बलायुषम् over the whole body (M1).')
s['noteKn'] = ('“ಮಾ ನಸ್ತೋಕೇ…” ಎಂದು ಅಗ್ನಿಯ ಉತ್ತರ ಭಾಗದಿಂದ ಸ್ವಲ್ಪ ಭಸ್ಮ ತೆಗೆದು, “ಬೃಹತ್ಸಾಮ…” ಮತ್ತು ಈ ಮಂತ್ರಗಳಿಂದ ಉಂಗುರಬೆರಳಿನಿಂದ ಧರಿಸಿ: “ತ್ರ್ಯಾಯುಷಂ ಜಮದಗ್ನೇಃ” ಹಣೆಗೆ, “ಕಶ್ಯಪಸ್ಯ ತ್ರ್ಯಾಯುಷಮ್” ಕಂಠಕ್ಕೆ, “ಅಗಸ್ತ್ಯಸ್ಯ ತ್ರ್ಯಾಯುಷಮ್” ನಾಭಿಗೆ, “ಯದ್ದೇವಾನಾಂ ತ್ರ್ಯಾಯುಷಮ್” ಬಲಭುಜಕ್ಕೆ, “ತನ್ಮೇ ಅಸ್ತು ತ್ರ್ಯಾಯುಷಮ್” ಎಡಭುಜಕ್ಕೆ, “ಸರ್ವಮಸ್ತು ಶತಾಯುಷಮ್” ತಲೆಗೆ, “ಬಲಾಯುಷಮ್” ಸರ್ವಾಂಗಕ್ಕೆ (ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ).')
A(s)
A(S('अग्न्यन्तर्गतभगवत्पूजा अग्नेर्नयेति प्रदक्षिणं च', 'Worship of the Lord in the fire and agne naya',
    'At the end of the homa worship the Lord within the fire (यज्ञपुरुषान्तर्यामी श्रीभारतीरमणमुख्यप्राणान्तर्गत हरिणीपतिपरशुरामाय नमः) with the sixteen upacharas: sweep and sprinkle round the fire, decorate it with gandha, flowers and akshata, and offer naivedya and tambula. M1 then has the yajamana pray to Agni for faith, wisdom, fame, learning, prosperity, strength, long life, lustre and health (that prayer is not printed here), and say the abhivadana with his gotra. Go round the fire reciting the whole of अग्ने नय… (Rigveda 1.189, eight verses).',
    'ಹೋಮದ ಕೊನೆಯಲ್ಲಿ ಅಗ್ನಿಯೊಳಗಿನ ಭಗವಂತನನ್ನು (ಯಜ್ಞಪುರುಷಾಂತರ್ಯಾಮಿ ಶ್ರೀಭಾರತೀರಮಣಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಹರಿಣೀಪತಿಪರಶುರಾಮಾಯ ನಮಃ) ಷೋಡಶೋಪಚಾರಗಳಿಂದ ಪೂಜಿಸಿ: ಅಗ್ನಿಯ ಸುತ್ತ ಪರಿಸಮೂಹನ–ಪರ್ಯುಕ್ಷಣ ಮಾಡಿ, ಗಂಧ–ಹೂವು–ಅಕ್ಷತೆಗಳಿಂದ ಅಲಂಕರಿಸಿ, ನೈವೇದ್ಯ–ತಾಂಬೂಲ ಅರ್ಪಿಸಿ. ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗದಲ್ಲಿ ಆಮೇಲೆ ಶ್ರದ್ಧೆ, ಮೇಧೆ, ಯಶಸ್ಸು, ವಿದ್ಯೆ, ಸಂಪತ್ತು, ಬಲ, ಆಯುಸ್ಸು, ತೇಜಸ್ಸು, ಆರೋಗ್ಯಗಳಿಗಾಗಿ ಅಗ್ನಿಪ್ರಾರ್ಥನೆ (ಇಲ್ಲಿ ಮುದ್ರಿಸಿಲ್ಲ), ಗೋತ್ರಸಹಿತ ಅಭಿವಾದನ. “ಅಗ್ನೇ ನಯ…” ಸೂಕ್ತವನ್ನು (ಋಗ್ವೇದ ೧.೧೮೯, ಎಂಟು ಋಕ್ಕು) ಪೂರ್ತಿ ಹೇಳುತ್ತ ಪ್ರದಕ್ಷಿಣೆ ಮಾಡಿ.',
    agnenaya, when=M))
A(S('प्रार्थना', 'Closing prayers',
    'With folded hands, recite these prayers asking the Lord of sacrifice to make the rite complete (M1; the Apastamba manuals give them too).',
    'ಕೈಮುಗಿದು, ಕರ್ಮವನ್ನು ಪೂರ್ಣಗೊಳಿಸಲು ಯಜ್ಞೇಶನನ್ನು ಬೇಡುವ ಈ ಪ್ರಾರ್ಥನೆಗಳನ್ನು ಹೇಳಿ (ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ; ಆಪಸ್ತಂಬ ಗ್ರಂಥಗಳಲ್ಲೂ ಇವೆ).',
    [mv(31, 0), mv(31, 1), mv(31, 2), mv(31, 3)], when=M))
A(OLDS(P, 32))

# ===================== SMARTA UTTARANGA =====================
def sv(si, vi):
    return OLD(P, si, vi, when=None)

JAYA = [('चित्तं च', 'चित्ताय', 'thought', 'ಚಿತ್ತ', 'चित्त', 'చిత్తం', 'சித்தம்'),
        ('चित्तिश्च', 'चित्त्या', 'thinking', 'ಚಿತ್ತಿ', 'चित्ति', 'చిత్తి', 'சித்தி'),
        ('आकूतं च', 'आकूताय', 'intent', 'ಆಕೂತ', 'आकूत', 'ఆకూతం', 'ஆகூதம்'),
        ('आकूतिश्च', 'आकूत्या', 'intention', 'ಆಕೂತಿ', 'आकूति', 'ఆకూతి', 'ஆகூதி'),
        ('विज्ञातं च', 'विज्ञाताय', 'the known', 'ವಿಜ್ಞಾತ', 'विज्ञात', 'విజ్ఞాతం', 'விஜ்ஞாதம்'),
        ('विज्ञानं च', 'विज्ञानाय', 'knowledge', 'ವಿಜ್ಞಾನ', 'विज्ञान', 'విజ్ఞానం', 'விஜ்ஞானம்'),
        ('मनश्च', 'मनस', 'mind', 'ಮನಸ್ಸು', 'मन', 'మనస్సు', 'மனம்'),
        ('शक्वरीश्च', 'शक्वरीभ्य', 'the powers', 'ಶಕ್ವರೀ', 'शक्वरी', 'శక్వరీ', 'சக்வரீ'),
        ('दर्शश्च', 'दर्शाय', 'the new moon', 'ದರ್ಶ', 'दर्श', 'దర్శ', 'தர்சம்'),
        ('पूर्णमासश्च', 'पूर्णमासाय', 'the full moon', 'ಪೂರ್ಣಮಾಸ', 'पूर्णमास', 'పూర్ణమాసం', 'பூர்ணமாஸம்'),
        ('बृहच्च', 'बृहत', 'the Brihat', 'ಬೃಹತ್', 'बृहत्', 'బృహత్', 'ப்ருஹத்'),
        ('रथन्तरं च', 'रथन्तराय', 'the Rathantara', 'ರಥಂತರ', 'रथन्तर', 'రథంతరం', 'ரதந்தரம்')]
def jaya_verse(items, rng):
    t = '\n'.join(f'{a} स्वाहा । {b} इदं न मम ।' for a, b, *_ in items)
    t = t[:-1] + '॥'
    en = 'To ' + ', '.join(x[2] for x in items) + ' — to each, svaha; each is for that power, not mine. (Jaya offerings %s, Taittiriya Samhita 3.4.4.)' % rng
    kn = ', '.join(x[3] for x in items) + ' — ಪ್ರತಿಯೊಂದಕ್ಕೂ ಸ್ವಾಹಾ; ಪ್ರತಿಯೊಂದೂ ಆ ದೇವತೆಗೆ, ನನ್ನದಲ್ಲ. (ಜಯಾಹುತಿಗಳು %s, ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೩.೪.೪.)' % rng.translate(str.maketrans('0123456789', KND))
    hi = ', '.join(x[4] for x in items) + ' — प्रत्येक को स्वाहा; प्रत्येक आहुति उसी के लिए है, मेरी नहीं। (जयाहुतियाँ %s, तैत्तिरीय संहिता 3.4.4)' % rng
    te = ', '.join(x[5] for x in items) + ' — ప్రతి దానికీ స్వాహా; ప్రతిదీ ఆ దేవతకే, నాది కాదు. (జయాహుతులు %s, తైత్తిరీయ సంహిత 3.4.4)' % rng
    ta = ', '.join(x[6] for x in items) + ' — ஒவ்வொன்றுக்கும் ஸ்வாஹா; ஒவ்வொன்றும் அந்தத் தேவதைக்கே, என்னுடையதல்ல. (ஜயா ஆஹுதிகள் %s, தைத்திரீய ஸம்ஹிதை 3.4.4)' % rng
    return V(t, en, kn, hi, te, ta)
jayas = [jaya_verse(JAYA[:6], '1-6'), jaya_verse(JAYA[6:], '7-12'),
         V('प्रजापतिर्जयानिन्द्राय वृष्णे प्रायच्छदुग्रः पृतनाज्येषु ।\nतस्मै विशः समनमन्त सर्वाः स उग्रः स हि हव्यो बभूव स्वाहा ।\nप्रजापतय इदं न मम ॥',
           'Prajapati gave these victories to mighty Indra, fierce in battles; to him all the people bowed; he became fierce and worthy of offering, svaha. This is for Prajapati, not mine. (The thirteenth jaya offering, Taittiriya Samhita 3.4.4.)',
           'ಪ್ರಜಾಪತಿಯು ಈ ಜಯಗಳನ್ನು ಯುದ್ಧಗಳಲ್ಲಿ ಉಗ್ರನಾದ ಬಲಶಾಲಿ ಇಂದ್ರನಿಗೆ ಕೊಟ್ಟನು; ಎಲ್ಲ ಪ್ರಜೆಗಳೂ ಅವನಿಗೆ ತಲೆಬಾಗಿದರು; ಅವನು ಉಗ್ರನೂ ಹವಿಸ್ಸಿಗೆ ಯೋಗ್ಯನೂ ಆದನು, ಸ್ವಾಹಾ. ಇದು ಪ್ರಜಾಪತಿಗೆ, ನನ್ನದಲ್ಲ. (ಹದಿಮೂರನೆಯ ಜಯಾಹುತಿ, ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೩.೪.೪.)',
           'प्रजापति ने ये जय युद्धों में उग्र बलवान इन्द्र को दिए; सब प्रजाएँ उसके आगे झुकीं; वह उग्र और हवि के योग्य हुआ, स्वाहा। यह प्रजापति के लिए है, मेरा नहीं। (तेरहवीं जयाहुति)',
           'ప్రజాపతి ఈ జయాలను యుద్ధాలలో ఉగ్రుడైన బలశాలి ఇంద్రునికి ఇచ్చాడు; ప్రజలందరూ అతనికి తలవంచారు; అతడు ఉగ్రుడూ హవిస్సుకు యోగ్యుడూ అయ్యాడు, స్వాహా. ఇది ప్రజాపతికి, నాది కాదు. (పదమూడవ జయాహుతి)',
           'ப்ரஜாபதி இந்த வெற்றிகளைப் போர்களில் உக்ரனான வலிய இந்திரனுக்கு அளித்தார்; எல்லா மக்களும் அவனை வணங்கினர்; அவன் உக்ரனாகவும் ஹவிஸுக்குத் தகுந்தவனாகவும் ஆனான், ஸ்வாஹா. இது ப்ரஜாபதிக்கு, என்னுடையதல்ல. (பதின்மூன்றாவது ஜயா ஆஹுதி)')]
A(S('जयादिहोमः', 'Uttaranga: the jaya offerings',
    'From here the uttaranga (the closing part) begins. Say the sankalpa एतत्कर्मसमृद्ध्यर्थं जयादिहोमं करिष्ये and offer ghee with the thirteen jaya mantras, the eighteen abhyatana and the twelve rashtrabhrt mantras, the Prajapati verse and the three vyahritis, one oblation each (Apastamba Grihya Sutra: jayabhyatanan rashtrabhrtah prajapatyam vyahritih; Muddu Shrauti, Mylapore manual).',
    'ಇಲ್ಲಿಂದ ಉತ್ತರಾಂಗ. “ಏತತ್ಕರ್ಮಸಮೃದ್ಧ್ಯರ್ಥಂ ಜಯಾದಿಹೋಮಂ ಕರಿಷ್ಯೇ” ಎಂದು ಸಂಕಲ್ಪಿಸಿ ಹದಿಮೂರು ಜಯ, ಹದಿನೆಂಟು ಅಭ್ಯಾತಾನ, ಹನ್ನೆರಡು ರಾಷ್ಟ್ರಭೃತ್ ಮಂತ್ರಗಳು, ಪ್ರಜಾಪತಿ ಮಂತ್ರ ಮತ್ತು ಮೂರು ವ್ಯಾಹೃತಿಗಳಿಂದ ಒಂದೊಂದು ಆಜ್ಯಾಹುತಿ ನೀಡಿ (ಆಪಸ್ತಂಬ ಗೃಹ್ಯಸೂತ್ರ; ಮುದ್ದು ಶ್ರೌತಿ, ಮೈಲಾಪುರ ಗ್ರಂಥ).',
    jayas, when=SM))

TAIL = 'अस्मिन्ब्रह्मन्नस्मिन्क्षत्रेऽस्यामाशिष्यस्यां पुरोधायामस्मिन्कर्मन्नस्यां देवहूत्यां स्वाहा ।'
ABH = [
 ('अग्निर्भूतानामधिपतिः स मावतु', 'अग्नय', 'Agni, lord of beings', 'ಭೂತಗಳ ಒಡೆಯನಾದ ಅಗ್ನಿ', 'प्राणियों के स्वामी अग्नि', 'భూతాలకు అధిపతి అయిన అగ్ని', 'உயிர்களின் தலைவனான அக்னி', 'Agni', 'ಅಗ್ನಿಗೆ', 'अग्नि', 'అగ్నికి', 'அக்னிக்கு'),
 ('इन्द्रो ज्येष्ठानामधिपतिः स मावतु', 'इन्द्राय', 'Indra, lord of the eldest', 'ಜ್ಯೇಷ್ಠರ ಒಡೆಯನಾದ ಇಂದ್ರ', 'ज्येष्ठों के स्वामी इन्द्र', 'జ్యేష్ఠులకు అధిపతి అయిన ఇంద్రుడు', 'மூத்தோரின் தலைவனான இந்திரன்', 'Indra', 'ಇಂದ್ರನಿಗೆ', 'इन्द्र', 'ఇంద్రునికి', 'இந்திரனுக்கு'),
 ('यमः पृथिव्या अधिपतिः स मावतु', 'यमाय', 'Yama, lord of the earth', 'ಭೂಮಿಯ ಒಡೆಯನಾದ ಯಮ', 'पृथ्वी के स्वामी यम', 'భూమికి అధిపతి అయిన యముడు', 'பூமியின் தலைவனான யமன்', 'Yama', 'ಯಮನಿಗೆ', 'यम', 'యమునికి', 'யமனுக்கு'),
 ('वायुरन्तरिक्षस्याधिपतिः स मावतु', 'वायव', 'Vayu, lord of the mid-air', 'ಅಂತರಿಕ್ಷದ ಒಡೆಯನಾದ ವಾಯು', 'अन्तरिक्ष के स्वामी वायु', 'అంతరిక్షానికి అధిపతి అయిన వాయువు', 'அந்தரிக்ஷத்தின் தலைவனான வாயு', 'Vayu', 'ವಾಯುವಿಗೆ', 'वायु', 'వాయువుకు', 'வாயுவுக்கு'),
 ('सूर्यो दिवोऽधिपतिः स मावतु', 'सूर्याय', 'Surya, lord of heaven', 'ದ್ಯುಲೋಕದ ಒಡೆಯನಾದ ಸೂರ್ಯ', 'द्युलोक के स्वामी सूर्य', 'ద్యులోకానికి అధిపతి అయిన సూర్యుడు', 'வானுலகின் தலைவனான ஸூர்யன்', 'Surya', 'ಸೂರ್ಯನಿಗೆ', 'सूर्य', 'సూర్యునికి', 'ஸூர்யனுக்கு'),
 ('चन्द्रमा नक्षत्राणामधिपतिः स मावतु', 'चन्द्रमस', 'the Moon, lord of the stars', 'ನಕ್ಷತ್ರಗಳ ಒಡೆಯನಾದ ಚಂದ್ರ', 'नक्षत्रों के स्वामी चन्द्रमा', 'నక్షత్రాలకు అధిపతి అయిన చంద్రుడు', 'நட்சத்திரங்களின் தலைவனான சந்திரன்', 'the Moon', 'ಚಂದ್ರನಿಗೆ', 'चन्द्रमा', 'చంద్రునికి', 'சந்திரனுக்கு'),
 ('बृहस्पतिर्ब्रह्मणोऽधिपतिः स मावतु', 'बृहस्पतय', 'Brihaspati, lord of sacred speech', 'ಬ್ರಹ್ಮದ (ಮಂತ್ರದ) ಒಡೆಯನಾದ ಬೃಹಸ್ಪತಿ', 'ब्रह्म (मन्त्र) के स्वामी बृहस्पति', 'బ్రహ్మానికి (మంత్రానికి) అధిపతి అయిన బృహస్పతి', 'ப்ரஹ்மத்தின் (மந்திரத்தின்) தலைவனான ப்ருஹஸ்பதி', 'Brihaspati', 'ಬೃಹಸ್ಪತಿಗೆ', 'बृहस्पति', 'బృహస్పతికి', 'ப்ருஹஸ்பதிக்கு'),
 ('मित्रः सत्यानामधिपतिः स मावतु', 'मित्राय', 'Mitra, lord of truths', 'ಸತ್ಯಗಳ ಒಡೆಯನಾದ ಮಿತ್ರ', 'सत्यों के स्वामी मित्र', 'సత్యాలకు అధిపతి అయిన మిత్రుడు', 'உண்மைகளின் தலைவனான மித்ரன்', 'Mitra', 'ಮಿತ್ರನಿಗೆ', 'मित्र', 'మిత్రునికి', 'மித்ரனுக்கு'),
 ('वरुणोऽपामधिपतिः स मावतु', 'वरुणाय', 'Varuna, lord of the waters', 'ಜಲಗಳ ಒಡೆಯನಾದ ವರುಣ', 'जलों के स्वामी वरुण', 'జలాలకు అధిపతి అయిన వరుణుడు', 'நீர்களின் தலைவனான வருணன்', 'Varuna', 'ವರುಣನಿಗೆ', 'वरुण', 'వరుణునికి', 'வருணனுக்கு'),
 ('समुद्रः स्रोत्यानामधिपतिः स मावतु', 'समुद्राय', 'the Ocean, lord of the streams', 'ಪ್ರವಾಹಗಳ ಒಡೆಯನಾದ ಸಮುದ್ರ', 'धाराओं के स्वामी समुद्र', 'ప్రవాహాలకు అధిపతి అయిన సముద్రుడు', 'நீரோட்டங்களின் தலைவனான ஸமுத்ரம்', 'the Ocean', 'ಸಮುದ್ರನಿಗೆ', 'समुद्र', 'సముద్రునికి', 'ஸமுத்ரத்துக்கு'),
 ('अन्नं साम्राज्यानामधिपति तन्मावतु', 'अन्नाय', 'Food, lord of sovereignties', 'ಸಾಮ್ರಾಜ್ಯಗಳ ಒಡೆಯನಾದ ಅನ್ನ', 'साम्राज्यों का स्वामी अन्न', 'సామ్రాజ్యాలకు అధిపతి అయిన అన్నం', 'பேரரசுகளின் தலைவனான அன்னம்', 'Food', 'ಅನ್ನಕ್ಕೆ', 'अन्न', 'అన్నానికి', 'அன்னத்துக்கு'),
 ('सोम ओषधीनामधिपतिः स मावतु', 'सोमाय', 'Soma, lord of the plants', 'ಓಷಧಿಗಳ ಒಡೆಯನಾದ ಸೋಮ', 'ओषधियों के स्वामी सोम', 'ఓషధులకు అధిపతి అయిన సోముడు', 'மூலிகைகளின் தலைவனான ஸோமன்', 'Soma', 'ಸೋಮನಿಗೆ', 'सोम', 'సోమునికి', 'ஸோமனுக்கு'),
 ('सविता प्रसवानामधिपतिः स मावतु', 'सवित्र', 'Savitri, lord of impulses', 'ಪ್ರೇರಣೆಗಳ ಒಡೆಯನಾದ ಸವಿತೃ', 'प्रेरणाओं के स्वामी सविता', 'ప్రేరణలకు అధిపతి అయిన సవిత', 'தூண்டுதல்களின் தலைவனான ஸவிதா', 'Savitri', 'ಸವಿತೃವಿಗೆ', 'सविता', 'సవితకు', 'ஸவிதாவுக்கு'),
 ('रुद्रः पशूनामधिपतिः स मावतु', 'रुद्राय', 'Rudra, lord of the animals', 'ಪಶುಗಳ ಒಡೆಯನಾದ ರುದ್ರ', 'पशुओं के स्वामी रुद्र', 'పశువులకు అధిపతి అయిన రుద్రుడు', 'பசுக்களின் தலைவனான ருத்ரன்', 'Rudra', 'ರುದ್ರನಿಗೆ', 'रुद्र', 'రుద్రునికి', 'ருத்ரனுக்கு'),
 ('त्वष्टा रूपाणामधिपतिः स मावतु', 'त्वष्ट्र', 'Tvashtri, lord of forms', 'ರೂಪಗಳ ಒಡೆಯನಾದ ತ್ವಷ್ಟೃ', 'रूपों के स्वामी त्वष्टा', 'రూపాలకు అధిపతి అయిన త్వష్ట', 'உருவங்களின் தலைவனான த்வஷ்டா', 'Tvashtri', 'ತ್ವಷ್ಟೃವಿಗೆ', 'त्वष्टा', 'త్వష్టకు', 'த்வஷ்டாவுக்கு'),
 ('विष्णुः पर्वतानामधिपतिः स मावतु', 'विष्णव', 'Vishnu, lord of the mountains', 'ಪರ್ವತಗಳ ಒಡೆಯನಾದ ವಿಷ್ಣು', 'पर्वतों के स्वामी विष्णु', 'పర్వతాలకు అధిపతి అయిన విష్ణువు', 'மலைகளின் தலைவனான விஷ்ணு', 'Vishnu', 'ವಿಷ್ಣುವಿಗೆ', 'विष्णु', 'విష్ణువుకు', 'விஷ்ணுவுக்கு'),
 ('मरुतो गणानामधिपतयस्ते मावन्तु', 'मरुद्भ्य', 'the Maruts, lords of the hosts', 'ಗಣಗಳ ಒಡೆಯರಾದ ಮರುತ್ತುಗಳು', 'गणों के स्वामी मरुद्गण', 'గణాలకు అధిపతులైన మరుత్తులు', 'கணங்களின் தலைவர்களான மருத்துகள்', 'the Maruts', 'ಮರುತ್ತುಗಳಿಗೆ', 'मरुद्गण', 'మరుత్తులకు', 'மருத்துகளுக்கு'),
 ('पितरः पितामहाः परेऽवरे ततास्ततामहा इह मावत', 'पितृभ्य', 'the fathers and grandfathers, near and far, the forefathers', 'ತಂದೆ, ಅಜ್ಜ, ದೂರದ ಮತ್ತು ಹತ್ತಿರದ ಪಿತೃಗಳು, ಪೂರ್ವಜರು', 'पिता, पितामह, दूर और निकट के पितर, पूर्वज', 'తండ్రులు, తాతలు, దూరపు దగ్గరి పితరులు, పూర్వీకులు', 'தந்தையர், பாட்டனார், தொலைவிலும் அருகிலும் உள்ள பித்ருக்கள், முன்னோர்', 'the Pitris', 'ಪಿತೃಗಳಿಗೆ', 'पितर', 'పితృదేవతలకు', 'பித்ருக்களுக்கு'),
]
abh = []
for i, (t, tya, en, kn, hi, te, ta, en2, kn2, hi2, te2, ta2) in enumerate(ABH):
    plural = i >= 16
    text = f'{t}\n{TAIL}\n{tya} इदं न मम ॥'
    ctx_en = ' in this prayer, this rule, this blessing, this office of priest, this rite and this invocation of the gods' if i == 0 else ' in this rite'
    e = f'{en}: may {"they" if plural else "he"} protect me{ctx_en}, svaha. This is for {en2}, not mine. (Abhyatana {i+1}, Taittiriya Samhita 3.4.5.)'
    k = f'{kn} — ಈ ಬ್ರಹ್ಮ, ಈ ಕ್ಷತ್ರ, ಈ ಆಶೀರ್ವಾದ, ಈ ಪುರೋಹಿತ್ಯ, ಈ ಕರ್ಮ, ಈ ದೇವಾಹ್ವಾನದಲ್ಲಿ ನನ್ನನ್ನು ಕಾಪಾಡಲಿ, ಸ್ವಾಹಾ. ಇದು {kn2}, ನನ್ನದಲ್ಲ. (ಅಭ್ಯಾತಾನ {kd(i+1)}, ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೩.೪.೫.)' if i == 0 else f'{kn} ಈ ಕರ್ಮದಲ್ಲಿ ನನ್ನನ್ನು ಕಾಪಾಡಲಿ, ಸ್ವಾಹಾ. ಇದು {kn2}, ನನ್ನದಲ್ಲ. (ಅಭ್ಯಾತಾನ {kd(i+1)})'
    h = (f'{hi} — इस ब्रह्म, इस क्षत्र, इस आशीर्वाद, इस पुरोहित-कर्म, इस कर्म और इस देवाह्वान में मेरी रक्षा करें, स्वाहा। यह {hi2} के लिए है, मेरा नहीं। (अभ्यातान {i+1}, तैत्तिरीय संहिता 3.4.5)' if i == 0 else f'{hi} इस कर्म में मेरी रक्षा करें, स्वाहा। यह {hi2} के लिए है, मेरा नहीं। (अभ्यातान {i+1})')
    tt = (f'{te} — ఈ బ్రహ్మంలో, ఈ క్షత్రంలో, ఈ ఆశీర్వాదంలో, ఈ పౌరోహిత్యంలో, ఈ కర్మలో, ఈ దేవాహ్వానంలో నన్ను కాపాడుగాక, స్వాహా. ఇది {te2}, నాది కాదు. (అభ్యాతానం {i+1}, తైత్తిరీయ సంహిత 3.4.5)' if i == 0 else f'{te} ఈ కర్మలో నన్ను కాపాడుగాక, స్వాహా. ఇది {te2}, నాది కాదు. (అభ్యాతానం {i+1})')
    tm = (f'{ta} — இந்த ப்ரஹ்மத்திலும், இந்த க்ஷத்ரத்திலும், இந்த ஆசியிலும், இந்தப் புரோகிதத்திலும், இந்தக் கர்மத்திலும், இந்தத் தேவ அழைப்பிலும் என்னைக் காக்கட்டும், ஸ்வாஹா. இது {ta2}, என்னுடையதல்ல. (அப்யாதானம் {i+1}, தைத்திரீய ஸம்ஹிதை 3.4.5)' if i == 0 else f'{ta} இந்தக் கர்மத்தில் என்னைக் காக்கட்டும், ஸ்வாஹா. இது {ta2}, என்னுடையதல்ல. (அப்யாதானம் {i+1})')
    abh.append(V(text, e, k, h, tt, tm))
A(S('अभ्यातानाः', 'The eighteen abhyatana offerings',
    'One oblation of ghee with each, touching water after the fourteenth (to Rudra) and after the eighteenth (to the Pitris) (Muddu Shrauti, Mylapore manual; Taittiriya Samhita 3.4.5).',
    'ಪ್ರತಿಯೊಂದರಿಂದ ಒಂದು ಆಜ್ಯಾಹುತಿ; ಹದಿನಾಲ್ಕನೆಯದರ (ರುದ್ರ) ಮತ್ತು ಹದಿನೆಂಟನೆಯದರ (ಪಿತೃಗಳು) ನಂತರ ನೀರು ಮುಟ್ಟಿ (ಮುದ್ದು ಶ್ರೌತಿ, ಮೈಲಾಪುರ ಗ್ರಂಥ; ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೩.೪.೫).',
    abh, when=SM))

REF = 'स इदं ब्रह्म क्षत्रं पातु ता इदं ब्रह्म क्षत्रं पान्तु तस्मै स्वाहा ।'
RB = [
 ('ऋताषाडृतधामाग्निर्गन्धर्वस्तस्यौषधयोऽप्सरस ऊर्जो नाम ।', 'अग्नये गन्धर्वाय', 'ओषधीभ्योऽप्सरोभ्य',
  ('Agni, the gandharva who prevails by order and whose abode is order; his apsarases are the plants, named Urjas', 'ಋತದಿಂದ ಗೆಲ್ಲುವ, ಋತವೇ ನೆಲೆಯಾದ ಗಂಧರ್ವ ಅಗ್ನಿ; ಅವನ ಅಪ್ಸರೆಯರು ಓಷಧಿಗಳು, “ಊರ್ಜ” ಎಂಬವರು', 'ऋत से जीतने वाला, ऋत-धाम गन्धर्व अग्नि; उसकी अप्सराएँ ओषधियाँ हैं, जिनका नाम ऊर्ज है', 'ఋతంతో గెలిచే, ఋతమే నెలవైన గంధర్వుడు అగ్ని; అతని అప్సరసలు ఓషధులు, “ఊర్జ” అనే పేరుగలవారు', 'ருதத்தால் வெல்லும், ருதமே இருப்பிடமான கந்தர்வன் அக்னி; அவனுடைய அப்ஸரஸ்கள் மூலிகைகள், “ஊர்ஜ” என்ற பெயருடையவர்')),
 ('संहितो विश्वसामा सूर्यो गन्धर्वस्तस्य मरीचयोऽप्सरस आयुवो नाम ।', 'सूर्याय गन्धर्वाय', 'मरीचिभ्योऽप्सरोभ्य',
  ('Surya, the gandharva who joins all and whose song is all; his apsarases are the rays, named Ayus', 'ಎಲ್ಲವನ್ನೂ ಕೂಡಿಸುವ, ಸರ್ವಸಾಮನಾದ ಗಂಧರ್ವ ಸೂರ್ಯ; ಅವನ ಅಪ್ಸರೆಯರು ಕಿರಣಗಳು, “ಆಯುವ” ಎಂಬವರು', 'सबको जोड़ने वाला, सर्वसाम गन्धर्व सूर्य; उसकी अप्सराएँ किरणें हैं, जिनका नाम आयु है', 'అన్నిటినీ కలిపే, సర్వసామమైన గంధర్వుడు సూర్యుడు; అతని అప్సరసలు కిరణాలు, “ఆయువ” అనే పేరుగలవారు', 'அனைத்தையும் இணைக்கும், ஸர்வஸாமனான கந்தர்வன் ஸூர்யன்; அவனுடைய அப்ஸரஸ்கள் கதிர்கள், “ஆயுவ” என்ற பெயருடையவர்')),
 ('सुषुम्नः सूर्यरश्मिश्चन्द्रमा गन्धर्वस्तस्य नक्षत्राण्यप्सरसो बेकुरयो नाम ।', 'चन्द्रमसे गन्धर्वाय', 'नक्षत्रेभ्योऽप्सरोभ्य',
  ('the Moon, the gracious gandharva with the sun’s ray; his apsarases are the stars, named Bekuris', 'ಸೂರ್ಯಕಿರಣವುಳ್ಳ ಸುಷುಮ್ನ ಗಂಧರ್ವ ಚಂದ್ರ; ಅವನ ಅಪ್ಸರೆಯರು ನಕ್ಷತ್ರಗಳು, “ಬೇಕುರಿ” ಎಂಬವರು', 'सूर्य-किरण वाला सुषुम्न गन्धर्व चन्द्रमा; उसकी अप्सराएँ नक्षत्र हैं, जिनका नाम बेकुरी है', 'సూర్యకిరణం గల సుషుమ్న గంధర్వుడు చంద్రుడు; అతని అప్సరసలు నక్షత్రాలు, “బేకురి” అనే పేరుగలవారు', 'சூரியக் கதிர் உடைய ஸுஷும்ன கந்தர்வன் சந்திரன்; அவனுடைய அப்ஸரஸ்கள் நட்சத்திரங்கள், “பேகுரி” என்ற பெயருடையவர்')),
 ('भुज्युः सुपर्णो यज्ञो गन्धर्वस्तस्य दक्षिणा अप्सरसः स्तवा नाम ।', 'यज्ञाय गन्धर्वाय', 'दक्षिणाभ्योऽप्सरोभ्य',
  ('the Sacrifice, the gandharva who nourishes, of fair wings; his apsarases are the gifts, named Stavas', 'ಪೋಷಿಸುವ, ಸುಂದರ ರೆಕ್ಕೆಗಳ ಗಂಧರ್ವ ಯಜ್ಞ; ಅವನ ಅಪ್ಸರೆಯರು ದಕ್ಷಿಣೆಗಳು, “ಸ್ತವ” ಎಂಬವರು', 'पोषक, सुन्दर पंखों वाला गन्धर्व यज्ञ; उसकी अप्सराएँ दक्षिणाएँ हैं, जिनका नाम स्तव है', 'పోషించే, అందమైన రెక్కల గంధర్వుడు యజ్ఞం; అతని అప్సరసలు దక్షిణలు, “స్తవ” అనే పేరుగలవారు', 'காக்கும், அழகிய சிறகுடைய கந்தர்வன் யஜ்ஞம்; அவனுடைய அப்ஸரஸ்கள் தக்ஷிணைகள், “ஸ்தவ” என்ற பெயருடையவர்')),
 ('प्रजापतिर्विश्वकर्मा मनो गन्धर्वस्तस्यर्क्सामान्यप्सरसो वह्नयो नाम ।', 'मनसे गन्धर्वाय', 'ऋक्सामेभ्योऽप्सरोभ्य',
  ('Mind, the gandharva who is Prajapati and Vishvakarma; his apsarases are the Rik and Saman verses, named Vahnis', 'ಪ್ರಜಾಪತಿಯೂ ವಿಶ್ವಕರ್ಮನೂ ಆದ ಗಂಧರ್ವ ಮನಸ್ಸು; ಅವನ ಅಪ್ಸರೆಯರು ಋಕ್–ಸಾಮಗಳು, “ವಹ್ನಿ” ಎಂಬವರು', 'प्रजापति और विश्वकर्मा रूप गन्धर्व मन; उसकी अप्सराएँ ऋक् और साम हैं, जिनका नाम वह्नि है', 'ప్రజాపతి, విశ్వకర్మ అయిన గంధర్వుడు మనస్సు; అతని అప్సరసలు ఋక్ సామాలు, “వహ్ని” అనే పేరుగలవారు', 'ப்ரஜாபதியும் விச்வகர்மாவுமான கந்தர்வன் மனம்; அவனுடைய அப்ஸரஸ்கள் ருக்கும் ஸாமமும், “வஹ்னி” என்ற பெயருடையவர்')),
 ('इषिरो विश्वव्यचा वातो गन्धर्वस्तस्यापोऽप्सरसो मुदा नाम ।', 'वाताय गन्धर्वाय', 'अद्भ्योऽप्सरोभ्य',
  ('the Wind, the swift all-pervading gandharva; his apsarases are the waters, named Mudas', 'ವೇಗವಾದ, ಸರ್ವವ್ಯಾಪಿ ಗಂಧರ್ವ ವಾಯು; ಅವನ ಅಪ್ಸರೆಯರು ಜಲಗಳು, “ಮುದಾ” ಎಂಬವರು', 'वेगवान, सर्वव्यापी गन्धर्व वायु; उसकी अप्सराएँ जल हैं, जिनका नाम मुदा है', 'వేగవంతుడు, సర్వవ్యాపి అయిన గంధర్వుడు వాయువు; అతని అప్సరసలు జలాలు, “ముదా” అనే పేరుగలవారు', 'விரைவான, எங்கும் பரவிய கந்தர்வன் வாயு; அவனுடைய அப்ஸரஸ்கள் நீர்கள், “முதா” என்ற பெயருடையவர்')),
 None,
 ('परमेष्ठ्यधिपतिर्मृत्युर्गन्धर्वस्तस्य विश्वमप्सरसो भुवो नाम ।', 'मृत्यवे गन्धर्वाय', 'विश्वस्मा अप्सरोभ्य',
  ('Death, the supreme overlord gandharva; his apsarases are the whole world, named Bhuvas', 'ಪರಮೇಷ್ಠಿ, ಅಧಿಪತಿ ಗಂಧರ್ವ ಮೃತ್ಯು; ಅವನ ಅಪ್ಸರೆಯರು ವಿಶ್ವ, “ಭುವ” ಎಂಬವರು', 'परमेष्ठी, अधिपति गन्धर्व मृत्यु; उसकी अप्सराएँ विश्व है, जिनका नाम भुव है', 'పరమేష్ఠి, అధిపతి అయిన గంధర్వుడు మృత్యువు; అతని అప్సరసలు విశ్వం, “భువ” అనే పేరుగలవారు', 'பரமேஷ்டியும் அதிபதியுமான கந்தர்வன் ம்ருத்யு; அவனுடைய அப்ஸரஸ்கள் உலகம், “புவ” என்ற பெயருடையவர்')),
 ('सुक्षितिः सुभूतिर्भद्रकृत्सुवर्वान्पर्जन्यो गन्धर्वस्तस्य विद्युतोऽप्सरसो रुचो नाम ।', 'पर्जन्याय गन्धर्वाय', 'विद्युद्भ्योऽप्सरोभ्य',
  ('Parjanya, the gandharva of good dwelling and good welfare, doer of good, full of light; his apsarases are the lightnings, named Ruchs', 'ಸುಕ್ಷಿತಿ, ಸುಭೂತಿ, ಭದ್ರಕಾರಿ, ಪ್ರಕಾಶಮಾನ ಗಂಧರ್ವ ಪರ್ಜನ್ಯ; ಅವನ ಅಪ್ಸರೆಯರು ಮಿಂಚುಗಳು, “ರುಚ್” ಎಂಬವರು', 'सुक्षिति, सुभूति, कल्याणकारी, प्रकाशमान गन्धर्व पर्जन्य; उसकी अप्सराएँ बिजलियाँ हैं, जिनका नाम रुच् है', 'సుక్షితి, సుభూతి, భద్రకారి, ప్రకాశవంతుడైన గంధర్వుడు పర్జన్యుడు; అతని అప్సరసలు మెరుపులు, “రుచ్” అనే పేరుగలవారు', 'நல்லிருப்பும் நல்வாழ்வும் தருபவன், நன்மை செய்பவன், ஒளி நிறைந்த கந்தர்வன் பர்ஜன்யன்; அவனுடைய அப்ஸரஸ்கள் மின்னல்கள், “ருச்” என்ற பெயருடையவர்')),
 ('दूरेहेतिरमृडयो मृत्युर्गन्धर्वस्तस्य प्रजा अप्सरसो भीरुवो नाम ।', 'मृत्यवे गन्धर्वाय', 'प्रजाभ्योऽप्सरोभ्य',
  ('Death, the merciless gandharva whose missile strikes from afar; his apsarases are the creatures, named Bhirus', 'ದೂರದಿಂದ ಆಯುಧ ಎಸೆಯುವ, ದಯೆಯಿಲ್ಲದ ಗಂಧರ್ವ ಮೃತ್ಯು; ಅವನ ಅಪ್ಸರೆಯರು ಪ್ರಜೆಗಳು, “ಭೀರು” ಎಂಬವರು', 'दूर से अस्त्र चलाने वाला, निर्दय गन्धर्व मृत्यु; उसकी अप्सराएँ प्रजाएँ हैं, जिनका नाम भीरु है', 'దూరం నుండి ఆయుధం విసిరే, దయలేని గంధర్వుడు మృత్యువు; అతని అప్సరసలు ప్రజలు, “భీరు” అనే పేరుగలవారు', 'தொலைவிலிருந்து ஆயுதம் எறியும், இரக்கமற்ற கந்தர்வன் ம்ருத்யு; அவனுடைய அப்ஸரஸ்கள் உயிர்கள், “பீரு” என்ற பெயருடையவர்')),
 ('चारुः कृपणकाशी कामो गन्धर्वस्तस्याधयोऽप्सरसः शोचयन्तीर्नाम ।', 'कामाय गन्धर्वाय', 'आधिभ्योऽप्सरोभ्य',
  ('Desire, the charming gandharva who makes the wretched shine; his apsarases are the longings, named Shochayantis', 'ಮನೋಹರ, ದೀನರನ್ನು ಬೆಳಗಿಸುವ ಗಂಧರ್ವ ಕಾಮ; ಅವನ ಅಪ್ಸರೆಯರು ಹಂಬಲಗಳು, “ಶೋಚಯಂತೀ” ಎಂಬವರು', 'मनोहर, दीन को चमकाने वाला गन्धर्व काम; उसकी अप्सराएँ चिन्ताएँ हैं, जिनका नाम शोचयन्ती है', 'మనోహరుడు, దీనులను ప్రకాశింపజేసే గంధర్వుడు కాముడు; అతని అప్సరసలు ఆరాటాలు, “శోచయంతీ” అనే పేరుగలవారు', 'அழகிய, எளியோரை ஒளிரச்செய்யும் கந்தர்வன் காமன்; அவனுடைய அப்ஸரஸ்கள் ஏக்கங்கள், “சோசயந்தீ” என்ற பெயருடையவர்')),
]
rb = []
EN_REF = ' — may he protect this priesthood and this rule; may they protect this priesthood and this rule; to him svaha, to them svaha.'
KN_REF = ' — ಅವನು ಈ ಬ್ರಹ್ಮ–ಕ್ಷತ್ರಗಳನ್ನು ಕಾಪಾಡಲಿ, ಅವರು ಈ ಬ್ರಹ್ಮ–ಕ್ಷತ್ರಗಳನ್ನು ಕಾಪಾಡಲಿ; ಅವನಿಗೆ ಸ್ವಾಹಾ, ಅವರಿಗೆ ಸ್ವಾಹಾ.'
HI_REF = ' — वह इस ब्रह्म और क्षत्र की रक्षा करे, वे इस ब्रह्म और क्षत्र की रक्षा करें; उसे स्वाहा, उन्हें स्वाहा।'
TE_REF = ' — అతడు ఈ బ్రహ్మ క్షత్రాలను కాపాడుగాక, వారు ఈ బ్రహ్మ క్షత్రాలను కాపాడుదురుగాక; అతనికి స్వాహా, వారికి స్వాహా.'
TA_REF = ' — அவன் இந்த ப்ரஹ்ம க்ஷத்ரங்களைக் காக்கட்டும், அவர்கள் இந்த ப்ரஹ்ம க்ஷத்ரங்களைக் காக்கட்டும்; அவனுக்கு ஸ்வாஹா, அவர்களுக்கு ஸ்வாஹா.'
bhuv1 = V('भुवनस्य पते यस्य त उपरि गृहा इह च ।\nस नो रास्वाज्यानिं रायस्पोषं सुवीर्यं संवत्सरीणां स्वस्तिं स्वाहा ।\nभुवनस्य पतय इदं न मम ॥',
          'O lord of the world, whose dwellings are above and here, grant us unfailing increase of wealth, good strength and the well-being of the whole year, svaha. This is for the lord of the world, not mine. (Rashtrabhrt 7, Taittiriya Samhita 3.4.7.)',
          'ಓ ಭುವನದ ಒಡೆಯನೇ, ಮೇಲೆಯೂ ಇಲ್ಲಿಯೂ ಯಾರ ಮನೆಗಳಿವೆಯೋ ಆ ನೀನು ನಮಗೆ ಕ್ಷಯಿಸದ ಸಂಪದ್ವೃದ್ಧಿ, ಉತ್ತಮ ಬಲ, ವರ್ಷವಿಡೀ ಕ್ಷೇಮವನ್ನು ಕೊಡು, ಸ್ವಾಹಾ. ಇದು ಭುವನಪತಿಗೆ, ನನ್ನದಲ್ಲ. (ರಾಷ್ಟ್ರಭೃತ್ ೭)',
          'हे भुवन के स्वामी, जिसके घर ऊपर भी हैं और यहाँ भी, हमें अक्षय धन-वृद्धि, उत्तम बल और वर्ष भर का कल्याण दो, स्वाहा। यह भुवनपति के लिए है, मेरा नहीं। (राष्ट्रभृत् 7)',
          'ఓ భువనపతీ, పైనా ఇక్కడా ఎవరి గృహాలు ఉన్నాయో ఆ నీవు మాకు క్షయించని సంపద్వృద్ధి, ఉత్తమ బలం, సంవత్సరమంతా క్షేమం ఇవ్వు, స్వాహా. ఇది భువనపతికి, నాది కాదు. (రాష్ట్రభృత్ 7)',
          'உலகின் தலைவனே, மேலும் இங்கும் உன் இல்லங்கள் உள்ளன; எங்களுக்குக் குறையாத செல்வ வளர்ச்சியும் நல்ல வலிமையும் ஆண்டு முழுவதும் நலமும் தா, ஸ்வாஹா. இது புவனபதிக்கு, என்னுடையதல்ல. (ராஷ்ட்ரப்ருத் 7)')
bhuv2 = V('स नो भुवनस्य पते यस्य त उपरि गृहा इह च ।\nउरु ब्रह्मणेऽस्मै क्षत्राय महि शर्म यच्छ स्वाहा ।\nभुवनस्य पतये ब्रह्मण इदं न मम ॥',
          'O lord of the world, whose dwellings are above and here, give wide and great shelter to this priesthood and this rule, svaha. This is for the lord of the world, for Brahman, not mine. (Rashtrabhrt 12, Taittiriya Samhita 3.4.7.)',
          'ಓ ಭುವನದ ಒಡೆಯನೇ, ಮೇಲೆಯೂ ಇಲ್ಲಿಯೂ ಮನೆಗಳುಳ್ಳವನೇ, ಈ ಬ್ರಹ್ಮಕ್ಕೂ ಈ ಕ್ಷತ್ರಕ್ಕೂ ವಿಶಾಲವಾದ ಮಹತ್ತಾದ ಆಶ್ರಯವನ್ನು ಕೊಡು, ಸ್ವಾಹಾ. ಇದು ಭುವನಪತಿ ಬ್ರಹ್ಮನಿಗೆ, ನನ್ನದಲ್ಲ. (ರಾಷ್ಟ್ರಭೃತ್ ೧೨)',
          'हे भुवन के स्वामी, जिसके घर ऊपर और यहाँ हैं, इस ब्रह्म और इस क्षत्र को विस्तृत, महान शरण दो, स्वाहा। यह भुवनपति ब्रह्म के लिए है, मेरा नहीं। (राष्ट्रभृत् 12)',
          'ఓ భువనపతీ, పైనా ఇక్కడా గృహాలు గలవాడా, ఈ బ్రహ్మానికి, ఈ క్షత్రానికి విశాలమైన గొప్ప ఆశ్రయాన్ని ఇవ్వు, స్వాహా. ఇది భువనపతి బ్రహ్మకు, నాది కాదు. (రాష్ట్రభృత్ 12)',
          'உலகின் தலைவனே, மேலும் இங்கும் இல்லங்கள் உடையவனே, இந்த ப்ரஹ்மத்துக்கும் இந்த க்ஷத்ரத்துக்கும் பரந்த பெரிய அடைக்கலம் தா, ஸ்வாஹா. இது புவனபதியான ப்ரஹ்மனுக்கு, என்னுடையதல்ல. (ராஷ்ட்ரப்ருத் 12)')
for i, item in enumerate(RB):
    if item is None:
        rb.append(bhuv1)
        continue
    t, g, a, (en, kn, hi, te, ta) = item
    text = f'{t}\n{REF}\n{g} इदं न मम । ताभ्यः स्वाहा । {a} इदं न मम ॥'
    rb.append(V(text, f'{en}{EN_REF} This is for the gandharva and for the apsarases, not mine. (Rashtrabhrt {i+1}, Taittiriya Samhita 3.4.7.)',
                f'{kn}{KN_REF} ಇದು ಗಂಧರ್ವನಿಗೆ, ಅಪ್ಸರೆಯರಿಗೆ, ನನ್ನದಲ್ಲ. (ರಾಷ್ಟ್ರಭೃತ್ {kd(i+1)})',
                f'{hi}{HI_REF} यह गन्धर्व और अप्सराओं के लिए है, मेरा नहीं। (राष्ट्रभृत् {i+1})',
                f'{te}{TE_REF} ఇది గంధర్వునికి, అప్సరసలకు, నాది కాదు. (రాష్ట్రభృత్ {i+1})',
                f'{ta}{TA_REF} இது கந்தர்வனுக்கும் அப்ஸரஸ்களுக்கும், என்னுடையதல்ல. (ராஷ்ட்ரப்ருத் {i+1})'))
rb.append(bhuv2)
A(S('राष्ट्रभृतः', 'The twelve rashtrabhrt offerings',
    'For each gandharva two oblations: one at तस्मै स्वाहा, to the gandharva, and one at ताभ्यः स्वाहा, to his apsarases; the seventh and twelfth (to the lord of the world) are single oblations (Muddu Shrauti, Mylapore manual; Taittiriya Samhita 3.4.7).',
    'ಪ್ರತಿ ಗಂಧರ್ವನಿಗೆ ಎರಡು ಆಹುತಿ: “ತಸ್ಮೈ ಸ್ವಾಹಾ”ದಲ್ಲಿ ಗಂಧರ್ವನಿಗೆ, “ತಾಭ್ಯಃ ಸ್ವಾಹಾ”ದಲ್ಲಿ ಅವನ ಅಪ್ಸರೆಯರಿಗೆ; ಏಳನೆಯ ಮತ್ತು ಹನ್ನೆರಡನೆಯವು (ಭುವನಪತಿಗೆ) ಒಂದೊಂದೇ ಆಹುತಿ (ಮುದ್ದು ಶ್ರೌತಿ, ಮೈಲಾಪುರ ಗ್ರಂಥ; ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೩.೪.೭).',
    rb, when=SM))

vy3 = V('भूः स्वाहा । अग्नय इदं न मम ।\nभुवः स्वाहा । वायव इदं न मम ।\nसुवः स्वाहा । सूर्यायेदं न मम ॥',
        'Earth, svaha — for Agni, not mine. Sky, svaha — for Vayu, not mine. Heaven, svaha — for Surya, not mine. (The three vyahritis.)',
        'ಭೂಃ ಸ್ವಾಹಾ — ಅಗ್ನಿಗೆ, ನನ್ನದಲ್ಲ. ಭುವಃ ಸ್ವಾಹಾ — ವಾಯುವಿಗೆ, ನನ್ನದಲ್ಲ. ಸುವಃ ಸ್ವಾಹಾ — ಸೂರ್ಯನಿಗೆ, ನನ್ನದಲ್ಲ. (ಮೂರು ವ್ಯಾಹೃತಿಗಳು)',
        'भूः स्वाहा — अग्नि के लिए, मेरा नहीं। भुवः स्वाहा — वायु के लिए, मेरा नहीं। सुवः स्वाहा — सूर्य के लिए, मेरा नहीं। (तीन व्याहृतियाँ)',
        'భూః స్వాహా — అగ్నికి, నాది కాదు. భువః స్వాహా — వాయువుకు, నాది కాదు. సువః స్వాహా — సూర్యునికి, నాది కాదు. (మూడు వ్యాహృతులు)',
        'பூ: ஸ்வாஹா — அக்னிக்கு, என்னுடையதல்ல. புவ: ஸ்வாஹா — வாயுவுக்கு, என்னுடையதல்ல. ஸுவ: ஸ்வாஹா — ஸூர்யனுக்கு, என்னுடையதல்ல. (மூன்று வ்யாஹ்ருதிகள்)')
A(S('प्राजापत्या व्याहृतयः स्विष्टकृच्च', 'Prajapati, the vyahritis and svishtakrit',
    'Offer ghee with प्रजापते न त्वदेतानि… and the three vyahritis, which close the jaya group; then the svishtakrit, offered in the north-eastern part of the fire (Muddu Shrauti, Mylapore manual; Apastamba Grihya Sutra 2.7).',
    '“ಪ್ರಜಾಪತೇ ನ ತ್ವದೇತಾನಿ…” ಮತ್ತು ಮೂರು ವ್ಯಾಹೃತಿಗಳಿಂದ ಆಜ್ಯಾಹುತಿ (ಜಯಾದಿ ಗುಂಪಿನ ಕೊನೆ); ನಂತರ ಅಗ್ನಿಯ ಈಶಾನ್ಯ ಭಾಗದಲ್ಲಿ ಸ್ವಿಷ್ಟಕೃತ್ (ಮುದ್ದು ಶ್ರೌತಿ, ಮೈಲಾಪುರ ಗ್ರಂಥ; ಆಪಸ್ತಂಬ ಗೃಹ್ಯಸೂತ್ರ ೨.೭).',
    [sv(23, 0), vy3, sv(20, 1)], when=SM))

samsr_s = V('स्वाहा । वसुभ्यो रुद्रेभ्य आदित्येभ्यः संस्रावभागेभ्य इदं न मम ।\nॐ भूर्भुवः सुवः स्वाहा । प्रजापतय इदं न मम ॥',
            'Svaha — this is for the Vasus, the Rudras and the Adityas, whose share is the samsrava, not mine. Om, earth, sky and heaven, svaha — for Prajapati, not mine. (Muddu Shrauti.)',
            'ಸ್ವಾಹಾ — ಇದು ಸಂಸ್ರಾವಭಾಗಿಗಳಾದ ವಸುಗಳು, ರುದ್ರರು, ಆದಿತ್ಯರಿಗೆ, ನನ್ನದಲ್ಲ. ಓಂ ಭೂರ್ಭುವಃ ಸುವಃ ಸ್ವಾಹಾ — ಪ್ರಜಾಪತಿಗೆ, ನನ್ನದಲ್ಲ. (ಮುದ್ದು ಶ್ರೌತಿ)',
            'स्वाहा — यह संस्राव के भागी वसुओं, रुद्रों और आदित्यों के लिए है, मेरा नहीं। ॐ भूर्भुवः सुवः स्वाहा — प्रजापति के लिए, मेरा नहीं।',
            'స్వాహా — ఇది సంస్రావభాగులైన వసువులు, రుద్రులు, ఆదిత్యులకు, నాది కాదు. ఓం భూర్భువః సువః స్వాహా — ప్రజాపతికి, నాది కాదు.',
            'ஸ்வாஹா — இது ஸம்ஸ்ராவ பாகிகளான வஸுக்கள், ருத்ரர்கள், ஆதித்யர்களுக்கு, என்னுடையதல்ல. ஓம் பூர்புவஸ்ஸுவ: ஸ்வாஹா — ப்ரஜாபதிக்கு, என்னுடையதல்ல.')
A(S('परिध्यञ्जनं संस्रावश्च', 'Paridhi anointing and the samsrava',
    'Silently: with the big darvi anoint the paridhis with ghee, middle, south and north; dip the tip, middle and root of the darbha that held the vessels in the darvi, the small darvi and the ghee vessel three times, keep one blade aside and put the rest into the fire, then that blade; point three times at the fire with a finger and address it with both hands near the paridhis; touch the earth. Put the middle paridhi into the fire, tip east, then the other two together, and with both darvis pour the samsrava over the paridhis (Muddu Shrauti, Mylapore manual).',
    'ಮೌನವಾಗಿ: ದೊಡ್ಡ ದರ್ವಿಯಿಂದ ಪರಿಧಿಗಳಿಗೆ — ಮಧ್ಯ, ದಕ್ಷಿಣ, ಉತ್ತರ — ತುಪ್ಪ ಸವರಿ; ಪಾತ್ರಾಸಾದನದ ದರ್ಭೆಯ ತುದಿ, ಮಧ್ಯ, ಬುಡಗಳನ್ನು ದರ್ವಿ, ಚಿಕ್ಕ ದರ್ವಿ, ಆಜ್ಯಪಾತ್ರೆಗಳಲ್ಲಿ ಮೂರು ಬಾರಿ ಅದ್ದಿ, ಒಂದು ಎಸಳನ್ನು ಬೇರೆ ಇಟ್ಟು ಉಳಿದದ್ದನ್ನು ಅಗ್ನಿಗೆ, ನಂತರ ಆ ಎಸಳನ್ನು ಹಾಕಿ; ಬೆರಳಿನಿಂದ ಮೂರು ಬಾರಿ ಅಗ್ನಿಯನ್ನು ತೋರಿಸಿ, ಪರಿಧಿಗಳ ಬಳಿ ಎರಡು ಕೈ ಇಟ್ಟು ಪ್ರಾರ್ಥಿಸಿ; ಭೂಮಿಯನ್ನು ಮುಟ್ಟಿ. ಮಧ್ಯದ ಪರಿಧಿಯನ್ನು ತುದಿ ಪೂರ್ವಕ್ಕಿರುವಂತೆ ಅಗ್ನಿಗೆ ಹಾಕಿ, ಉಳಿದೆರಡನ್ನು ಒಟ್ಟಿಗೆ ಹಾಕಿ, ಎರಡು ದರ್ವಿಗಳಿಂದ ಸಂಸ್ರಾವವನ್ನು ಪರಿಧಿಗಳ ಮೇಲೆ ಸುರಿಯಿರಿ (ಮುದ್ದು ಶ್ರೌತಿ, ಮೈಲಾಪುರ ಗ್ರಂಥ).',
    [samsr_s], when=SM))

vy4 = V('भूः स्वाहा । अग्नय इदं न मम ।\nभुवः स्वाहा । वायव इदं न मम ।\nसुवः स्वाहा । सूर्यायेदं न मम ।\nॐ भूर्भुवः सुवः स्वाहा । प्रजापतय इदं न मम ॥',
        'Earth, svaha — for Agni; sky, svaha — for Vayu; heaven, svaha — for Surya; Om, earth, sky and heaven, svaha — for Prajapati; none of it is mine.',
        'ಭೂಃ ಸ್ವಾಹಾ — ಅಗ್ನಿಗೆ; ಭುವಃ ಸ್ವಾಹಾ — ವಾಯುವಿಗೆ; ಸುವಃ ಸ್ವಾಹಾ — ಸೂರ್ಯನಿಗೆ; ಓಂ ಭೂರ್ಭುವಃ ಸುವಃ ಸ್ವಾಹಾ — ಪ್ರಜಾಪತಿಗೆ; ಯಾವುದೂ ನನ್ನದಲ್ಲ.',
        'भूः स्वाहा — अग्नि के लिए; भुवः स्वाहा — वायु के लिए; सुवः स्वाहा — सूर्य के लिए; ॐ भूर्भुवः सुवः स्वाहा — प्रजापति के लिए; कुछ भी मेरा नहीं।',
        'భూః స్వాహా — అగ్నికి; భువః స్వాహా — వాయువుకు; సువః స్వాహా — సూర్యునికి; ఓం భూర్భువః సువః స్వాహా — ప్రజాపతికి; ఏదీ నాది కాదు.',
        'பூ: ஸ்வாஹா — அக்னிக்கு; புவ: ஸ்வாஹா — வாயுவுக்கு; ஸுவ: ஸ்வாஹா — ஸூர்யனுக்கு; ஓம் பூர்புவஸ்ஸுவ: ஸ்வாஹா — ப்ரஜாபதிக்கு; எதுவும் என்னுடையதல்ல.')
sv231 = sv(23, 1)
sv231['text'] = 'ॐ भूर्भुवः सुवः स्वाहा । प्रजापतय इदं न मम ।\nश्रीविष्णवे स्वाहा । विष्णवे परमात्मन इदं न मम ।\nनमो रुद्राय पशुपतये स्वाहा । रुद्राय पशुपतय इदं न मम ॥'
sv231['en'] = 'Om, earth, sky and heaven, svaha — for Prajapati, not for me. To Sri Vishnu, svaha — for Vishnu, the Supreme Self, not for me. Salutation to Rudra, lord of beings, svaha — for Rudra Pashupati, not for me (then touch water).'
A(S('प्रायश्चित्तहोमः', 'Prayaschitta: for known and unknown faults',
    'Say अस्मिन् अमुकहोमकर्मणि अविज्ञातप्रायश्चित्तादीनि होष्यामि and offer ghee with the three verses (Taittiriya Brahmana 3.7.11, with the Taittiriya मर्तासः), then the four vyahritis. Then say the sankalpa अस्मिन् अमुकहोमकर्मणि मध्ये सम्भावितसमस्तमन्त्रलोपतन्त्रलोपद्रव्यलोपक्रियालोपाज्यलोपन्यूनातिरेकविस्मृतिविपर्यासप्रायश्चित्तार्थं सर्वप्रायश्चित्तं होष्यामि and offer to Prajapati with the vyahritis, to Vishnu and to Rudra Pashupati, and touch water (Muddu Shrauti, Mylapore manual).',
    '“ಅಸ್ಮಿನ್ ಅಮುಕಹೋಮಕರ್ಮಣಿ ಅವಿಜ್ಞಾತಪ್ರಾಯಶ್ಚಿತ್ತಾದೀನಿ ಹೋಷ್ಯಾಮಿ” ಎಂದು ಹೇಳಿ ಮೂರು ಮಂತ್ರಗಳಿಂದ (ತೈತ್ತಿರೀಯ ಬ್ರಾಹ್ಮಣ ೩.೭.೧೧, “ಮರ್ತಾಸಃ”) ಮತ್ತು ನಾಲ್ಕು ವ್ಯಾಹೃತಿಗಳಿಂದ ಆಜ್ಯಾಹುತಿ. ನಂತರ “ಅಸ್ಮಿನ್ ಅಮುಕಹೋಮಕರ್ಮಣಿ ಮಧ್ಯೇ ಸಂಭಾವಿತ… ಸರ್ವಪ್ರಾಯಶ್ಚಿತ್ತಂ ಹೋಷ್ಯಾಮಿ” ಎಂದು ಸಂಕಲ್ಪಿಸಿ ವ್ಯಾಹೃತಿಗಳಿಂದ ಪ್ರಜಾಪತಿಗೆ, ವಿಷ್ಣುವಿಗೆ, ಪಶುಪತಿ ರುದ್ರನಿಗೆ ಆಹುತಿ ನೀಡಿ ನೀರು ಮುಟ್ಟಿ (ಮುದ್ದು ಶ್ರೌತಿ, ಮೈಲಾಪುರ ಗ್ರಂಥ).',
    [sv(22, 0), sv(22, 1), sv(22, 3), vy4, sv231], when=SM))

s251 = sv(25, 1)
s251['text'] = s251['text'].replace('घृतेन स्वाहा ॥', 'घृतेन स्वाहा ।\nअग्नये सप्तवत इदं न मम ॥')
s251['en'] = 'Seven are your fuels, O Agni, seven your tongues, seven the seers, seven your beloved abodes; seven priests worship you in seven ways; fill your seven sources with ghee, svaha. This is for Agni of the sevens, not mine. (Taittiriya Samhita 4.6.5.)'
s251['kn'] = s251['kn'].rstrip() + ' ಇದು “ಸಪ್ತವಾನ್” ಅಗ್ನಿಗೆ, ನನ್ನದಲ್ಲ.'
s251['hi'] = s251['hi'].rstrip() + ' यह सप्तवान अग्नि के लिए है, मेरा नहीं।'
s251['te'] = s251['te'].rstrip() + ' ఇది సప్తవంతుడైన అగ్నికి, నాది కాదు.'
s251['ta'] = s251['ta'].rstrip() + ' இது ஸப்தவானான அக்னிக்கு, என்னுடையதல்ல.'
A(S('पूर्णाहुतिः', 'Purnahuti (the full offering)',
    'Say the sankalpa अस्मिन् होमकर्मणि सम्पूर्णफलप्राप्त्यर्थं पूर्णाहुतिं होष्यामि. Fill the sruk with ghee, or wrap a coconut or fruit in a silk cloth (as the homa prescribes), stand and say the purnahuti mantra (Taittiriya Brahmana 3.8.10), then offer it with the main Vedic mantra of the homa ending in svaha, as the homa text gives it (Mylapore manual: गणानां त्वा… for the Ganapati homa), and go on offering the remaining materials with the mula mantra until all are consumed. Then offer ghee with सप्त ते अग्ने… (Muddu Shrauti, Mylapore manual; some families pour it in an unbroken stream as the vasordhara, and in large homas the Chamakam is recited during the vasordhara).',
    '“ಅಸ್ಮಿನ್ ಹೋಮಕರ್ಮಣಿ ಸಂಪೂರ್ಣಫಲಪ್ರಾಪ್ತ್ಯರ್ಥಂ ಪೂರ್ಣಾಹುತಿಂ ಹೋಷ್ಯಾಮಿ” ಎಂದು ಸಂಕಲ್ಪಿಸಿ. ಸ್ರುಕ್ಕನ್ನು ತುಪ್ಪದಿಂದ ತುಂಬಿ, ಅಥವಾ ತೆಂಗಿನಕಾಯಿ/ಫಲವನ್ನು ರೇಷ್ಮೆ ವಸ್ತ್ರದಲ್ಲಿ ಸುತ್ತಿ (ಹೋಮಕ್ಕೆ ತಕ್ಕಂತೆ), ನಿಂತು ಪೂರ್ಣಾಹುತಿ ಮಂತ್ರ (ತೈತ್ತಿರೀಯ ಬ್ರಾಹ್ಮಣ ೩.೮.೧೦) ಹೇಳಿ, ಹೋಮದ ಪಠ್ಯ ಕೊಟ್ಟ ಪ್ರಧಾನ ವೈದಿಕ ಮಂತ್ರವನ್ನು ಸ್ವಾಹಾದೊಡನೆ ಹೇಳಿ ಅರ್ಪಿಸಿ (ಮೈಲಾಪುರ: ಗಣಪತಿ ಹೋಮಕ್ಕೆ “ಗಣಾನಾಂ ತ್ವಾ…”); ಉಳಿದ ದ್ರವ್ಯಗಳು ಮುಗಿಯುವವರೆಗೆ ಮೂಲಮಂತ್ರದಿಂದ ಅರ್ಪಿಸಿ. ನಂತರ “ಸಪ್ತ ತೇ ಅಗ್ನೇ…” ಎಂದು ಆಜ್ಯಾಹುತಿ (ಮುದ್ದು ಶ್ರೌತಿ, ಮೈಲಾಪುರ; ಕೆಲವರು ಇದನ್ನು ವಸೋರ್ಧಾರೆಯಾಗಿ ಅಖಂಡ ಧಾರೆಯಲ್ಲಿ ಸುರಿಯುತ್ತಾರೆ, ದೊಡ್ಡ ಹೋಮಗಳಲ್ಲಿ ಆಗ ಚಮಕ ಪಠಣ).',
    [sv(25, 0), s251], when=SM))

mj_s = V('प्राच्याम् । दक्षिणायाम् । प्रतीच्याम् । उदीच्याम् । ऊर्ध्वायाम् । अधः ॥',
         'To the east; to the south; to the west; to the north; upwards; downwards. (Said while sprinkling the pranita water, two drops in each direction and the rest downwards to the east; Mylapore manual.)',
         'ಪೂರ್ವಕ್ಕೆ; ದಕ್ಷಿಣಕ್ಕೆ; ಪಶ್ಚಿಮಕ್ಕೆ; ಉತ್ತರಕ್ಕೆ; ಮೇಲಕ್ಕೆ; ಕೆಳಕ್ಕೆ. (ಪ್ರಣೀತಾ ಜಲವನ್ನು ಪ್ರತಿ ದಿಕ್ಕಿಗೆ ಎರಡು ಹನಿ, ಉಳಿದದ್ದು ಪೂರ್ವದ ಕಡೆ ಕೆಳಗೆ; ಮೈಲಾಪುರ ಗ್ರಂಥ.)',
         'पूर्व में; दक्षिण में; पश्चिम में; उत्तर में; ऊपर; नीचे। (प्रणीता जल प्रत्येक दिशा में दो बूँद, शेष पूर्व की ओर नीचे; मैलापुर ग्रन्थ)',
         'తూర్పుకు; దక్షిణానికి; పడమరకు; ఉత్తరానికి; పైకి; క్రిందికి. (ప్రణీతా జలాన్ని ప్రతి దిక్కుకు రెండు బిందువులు, మిగిలినది తూర్పు వైపు క్రిందికి; మైలాపూర్ గ్రంథం)',
         'கிழக்கில்; தெற்கில்; மேற்கில்; வடக்கில்; மேலே; கீழே. (ப்ரணீதா நீரை ஒவ்வொரு திசையிலும் இரு துளிகள், மீதியைக் கிழக்கு நோக்கிக் கீழே; மைலாப்பூர் நூல்)')
vara = V('ब्रह्मन् वरं ते ददामि । ब्रह्मणे नमः । सकलाराधनैः स्वर्चितम् ॥',
         'O Brahma, I give you a gift. Salutation to the Brahma; may he be well worshipped with all the honours. (Giving dakshina to the Brahma; Muddu Shrauti, Mylapore manual.)',
         'ಓ ಬ್ರಹ್ಮನೇ, ನಿನಗೆ ವರ (ದಾನ) ಕೊಡುತ್ತೇನೆ. ಬ್ರಹ್ಮನಿಗೆ ನಮಸ್ಕಾರ; ಎಲ್ಲ ಉಪಚಾರಗಳಿಂದ ಪೂಜಿತನಾಗಲಿ. (ಬ್ರಹ್ಮನಿಗೆ ದಕ್ಷಿಣೆ ನೀಡುತ್ತ.)',
         'हे ब्रह्मा, मैं तुम्हें वर (दान) देता हूँ। ब्रह्मा को नमस्कार; सब उपचारों से पूजित हों। (ब्रह्मा को दक्षिणा देते हुए)',
         'ఓ బ్రహ్మా, నీకు వరం (దానం) ఇస్తున్నాను. బ్రహ్మకు నమస్కారం; సకల ఉపచారాలతో పూజితుడు కావాలి. (బ్రహ్మకు దక్షిణ ఇస్తూ)',
         'ப்ரஹ்மாவே, உமக்கு வரம் (தானம்) தருகிறேன். ப்ரஹ்மாவுக்கு நமஸ்காரம்; எல்லா உபசாரங்களாலும் பூஜிக்கப்படட்டும். (ப்ரஹ்மாவுக்குத் தக்ஷிணை தரும்போது)')
A(S('परिषेचनं मार्जनं वरदानं च', 'Parishechana, marjana and the gift to the Brahma',
    'Set the ghee vessel and the rest to the north, do pranayama, and sprinkle water round the fire with the closing words (Apastamba Grihya Sutra 2.8): along the south, the west and the north, then all round. Put akshata into the pranita water with वरुणाय नमः, set the vessel before you and, holding it with the left hand, sprinkle its water to the directions; pour a little on the ground to the east and sprinkle yourself and your wife. Give a gift to the Brahma (Muddu Shrauti, Mylapore manual).',
    'ಆಜ್ಯಪಾತ್ರೆ ಮುಂತಾದವನ್ನು ಉತ್ತರಕ್ಕಿಟ್ಟು, ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ಸಮಾಪ್ತಿಯ ಪದಗಳಿಂದ (ಆಪಸ್ತಂಬ ಗೃಹ್ಯಸೂತ್ರ ೨.೮) ಅಗ್ನಿಯ ಸುತ್ತ — ದಕ್ಷಿಣ, ಪಶ್ಚಿಮ, ಉತ್ತರ, ನಂತರ ಸುತ್ತಲೂ — ನೀರು ಪ್ರೋಕ್ಷಿಸಿ. “ವರುಣಾಯ ನಮಃ” ಎಂದು ಪ್ರಣೀತಾ ಜಲಕ್ಕೆ ಅಕ್ಷತೆ ಹಾಕಿ, ಪಾತ್ರೆಯನ್ನು ಮುಂದೆ ಇಟ್ಟು ಎಡಗೈಯಲ್ಲಿ ಹಿಡಿದು ದಿಕ್ಕುಗಳಿಗೆ ಪ್ರೋಕ್ಷಿಸಿ; ಸ್ವಲ್ಪ ಪೂರ್ವಕ್ಕೆ ನೆಲಕ್ಕೆ ಸುರಿದು ತನಗೂ ಪತ್ನಿಗೂ ಪ್ರೋಕ್ಷಿಸಿ. ಬ್ರಹ್ಮನಿಗೆ ದಾನ ನೀಡಿ (ಮುದ್ದು ಶ್ರೌತಿ, ಮೈಲಾಪುರ ಗ್ರಂಥ).',
    [sv(27, 3), mj_s, vara], when=SM))

agnaye_n = sv(28, 0)
agnaye_n['text'] = agnaye_n['text'].replace('विधेम ॥', 'विधेम ॥\nअग्नये नमः ॥')
agnaye_n['en'] = agnaye_n['en'].rstrip() + ' Salutation to Agni.'
agnaye_n['kn'] = agnaye_n['kn'].rstrip() + ' ಅಗ್ನಿಗೆ ನಮಸ್ಕಾರ.'
agnaye_n['hi'] = agnaye_n['hi'].rstrip() + ' अग्नि को नमस्कार।'
agnaye_n['te'] = agnaye_n['te'].rstrip() + ' అగ్నికి నమస్కారం.'
agnaye_n['ta'] = agnaye_n['ta'].rstrip() + ' அக்னிக்கு நமஸ்காரம்.'
A(S('अग्न्युपस्थानम्', 'Agni upasthana (praise of the fire)',
    'Put one samidh on the fire with स्वाहा, say अग्नेरुपस्थानं करिष्ये, stand and praise the fire with अग्ने नय… and these prayers; bow and say the abhivadana with your gotra (Muddu Shrauti, Mylapore manual).',
    '“ಸ್ವಾಹಾ” ಎಂದು ಒಂದು ಸಮಿಧೆಯನ್ನು ಅಗ್ನಿಗೆ ಇಟ್ಟು, “ಅಗ್ನೇರುಪಸ್ಥಾನಂ ಕರಿಷ್ಯೇ” ಎಂದು ಹೇಳಿ, ನಿಂತು “ಅಗ್ನೇ ನಯ…” ಮತ್ತು ಈ ಪ್ರಾರ್ಥನೆಗಳಿಂದ ಅಗ್ನಿಯನ್ನು ಸ್ತುತಿಸಿ; ನಮಸ್ಕರಿಸಿ ಗೋತ್ರಸಹಿತ ಅಭಿವಾದನ ಮಾಡಿ (ಮುದ್ದು ಶ್ರೌತಿ, ಮೈಲಾಪುರ ಗ್ರಂಥ).',
    [agnaye_n, sv(33, 0), sv(31, 3), sv(31, 0), sv(31, 1), sv(31, 2)], when=SM))

s = OLDS(P, 30)
s['verses'] = [dict(bsama)]
s['note'] = 'Take a little ash (bhasma) from the north-eastern side of the fire, apply it on the forehead with this mantra, and give it to the family (Mylapore manual; the Madhva manual uses the same verse).'
s['noteKn'] = 'ಅಗ್ನಿಯ ಈಶಾನ್ಯ ಭಾಗದಿಂದ ಸ್ವಲ್ಪ ಭಸ್ಮ ತೆಗೆದು ಈ ಮಂತ್ರದಿಂದ ಹಣೆಗೆ ಧರಿಸಿ, ಮನೆಯವರಿಗೂ ಕೊಡಿ (ಮೈಲಾಪುರ ಗ್ರಂಥ; ಮಾಧ್ವ ಗ್ರಂಥದಲ್ಲೂ ಇದೇ ಮಂತ್ರ).'
A(s)

s = OLDS(P, 33)
fin = V('मया कृतमिदम् अमुकहोमाख्यं कर्म ।\nॐ तत्सत् ब्रह्मार्पणमस्तु ॥',
        'This rite called the … homa, done by me — Om tat sat — may it be an offering to Brahman. (Mylapore manual.)',
        'ನಾನು ಮಾಡಿದ ಈ ಇಂತಹ ಹೋಮವೆಂಬ ಕರ್ಮ — ಓಂ ತತ್ಸತ್ — ಬ್ರಹ್ಮಾರ್ಪಣವಾಗಲಿ. (ಮೈಲಾಪುರ ಗ್ರಂಥ)',
        'मेरे द्वारा किया गया यह … होम नामक कर्म — ॐ तत्सत् — ब्रह्म को अर्पित हो।',
        'నేను చేసిన ఈ … హోమమనే కర్మ — ఓం తత్సత్ — బ్రహ్మార్పణమగుగాక.',
        'என்னால் செய்யப்பட்ட இந்த … ஹோமம் என்ற கர்மம் — ஓம் தத்ஸத் — ப்ரஹ்மார்ப்பணமாகட்டும்.')
s['verses'] = [sv(33, 1), OLD(NP, 38, 1, when=None), fin]
s['note'] = 'Take akshata and water in the hand, recite these and let the water fall to the ground, naming the homa in place of अमुक (Mylapore manual). If the fire is not kept, take it back into your heart (अग्निम् आत्मनि उद्वासयामि). Give dakshina to the priests, distribute the prasada and the kalasha water, and if possible feed brahmins.'
s['noteKn'] = 'ಅಕ್ಷತೆ–ನೀರು ಕೈಯಲ್ಲಿ ಹಿಡಿದು ಇವುಗಳನ್ನು ಹೇಳಿ, “ಅಮುಕ”ದ ಸ್ಥಳದಲ್ಲಿ ಹೋಮದ ಹೆಸರು ಹೇಳಿ ನೀರನ್ನು ನೆಲಕ್ಕೆ ಬಿಡಿ (ಮೈಲಾಪುರ ಗ್ರಂಥ). ಅಗ್ನಿಯನ್ನು ಇಟ್ಟುಕೊಳ್ಳದಿದ್ದರೆ “ಅಗ್ನಿಮ್ ಆತ್ಮನಿ ಉದ್ವಾಸಯಾಮಿ” ಎಂದು ಹೃದಯಕ್ಕೆ ತೆಗೆದುಕೊಳ್ಳಿ. ಪುರೋಹಿತರಿಗೆ ದಕ್ಷಿಣೆ, ಪ್ರಸಾದ ಮತ್ತು ಕಲಶಜಲ ವಿತರಣೆ; ಸಾಧ್ಯವಾದರೆ ಬ್ರಾಹ್ಮಣ ಭೋಜನ.'
A(s)

META = {
    'export': 'homaPurvanga',
    'id': 'homa-purvanga',
    'title': 'होमविधिः — पूर्वाङ्गम् उत्तराङ्गं च',
    'titleEn': 'Homa: Common Procedure (Purvanga and Uttaranga)',
    'order': 1,
    'deity': 'Agni; the Lord within Agni (Madhva: Harinipati Parashurama within Mukhyaprana)',
    'source': 'Madhva (Rigvedi, Ashvalayana): Haranahalli Aravindacharya, Agnimukha Prayoga; H. Satyanarayanacharya, Homa-Havana; Tantrasara-sangraha. Smarta (Apastamba): Muddu Shrautigal, Apastambiya Purvapara Prayoga; Mylapore Vedadhyayana Sabha, Mahaganapati Homa; Apastamba and Ashvalayana Grihya and Shrauta Sutras',
    'summary': 'The parts every homa shares, printed in full in the order they are done: achamana, pranayama and sankalpa, kalasha and the short punyahavachana, the sthandila, bringing and installing the fire, the agni-mukha (Madhva: anvadhana, paristarana, the Brahma, the ghee, idhma, aghara, ajyabhaga, the sixteen samskaras of Agni and the Vaishnava offerings with the Purusha Sukta; Smarta: paristarana, vessels, paridhis, parishechana, idhma, aghara, ajyabhaga, agnimukha), then, after the main offerings given in each homa text, the uttaranga: svishtakrit, the prayaschitta offerings, purnahuti, samsrava, marjana, agni upasthana, raksha and samarpana (Smarta also the jaya, abhyatana and rashtrabhrt offerings). Choose Madhva or Smarta at the top.',
    'summaryKn': 'ಎಲ್ಲ ಹೋಮಗಳಿಗೂ ಸಮಾನವಾದ ಭಾಗಗಳು, ಮಾಡುವ ಕ್ರಮದಲ್ಲಿ ಪೂರ್ತಿಯಾಗಿ: ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ, ಸಂಕಲ್ಪ, ಕಲಶ ಮತ್ತು ಸಂಕ್ಷಿಪ್ತ ಪುಣ್ಯಾಹವಾಚನ, ಸ್ಥಂಡಿಲ, ಅಗ್ನಿಯನ್ನು ತಂದು ಪ್ರತಿಷ್ಠಿಸುವುದು, ಅಗ್ನಿಮುಖ (ಮಾಧ್ವ: ಅನ್ವಾಧಾನ, ಪರಿಸ್ತರಣ, ಬ್ರಹ್ಮ, ಆಜ್ಯಸಂಸ್ಕಾರ, ಇಧ್ಮ, ಆಘಾರ, ಆಜ್ಯಭಾಗ, ಅಗ್ನಿಯ ಷೋಡಶ ಸಂಸ್ಕಾರಗಳು ಮತ್ತು ಪುರುಷಸೂಕ್ತಸಹಿತ ವೈಷ್ಣವಾಹುತಿಗಳು; ಸ್ಮಾರ್ತ: ಪರಿಸ್ತರಣ, ಪಾತ್ರಾಸಾದನ, ಪರಿಧಿ, ಪರಿಷೇಚನ, ಇಧ್ಮ, ಆಘಾರ, ಆಜ್ಯಭಾಗ, ಅಗ್ನಿಮುಖ); ಪ್ರತಿಯೊಂದು ಹೋಮದ ಪಠ್ಯದಲ್ಲಿರುವ ಪ್ರಧಾನಾಹುತಿಗಳ ನಂತರ ಉತ್ತರಾಂಗ: ಸ್ವಿಷ್ಟಕೃತ್, ಪ್ರಾಯಶ್ಚಿತ್ತ ಆಹುತಿಗಳು, ಪೂರ್ಣಾಹುತಿ, ಸಂಸ್ರಾವ, ಮಾರ್ಜನ, ಅಗ್ನ್ಯುಪಸ್ಥಾನ, ರಕ್ಷೆ, ಸಮರ್ಪಣೆ (ಸ್ಮಾರ್ತರಲ್ಲಿ ಜಯ, ಅಭ್ಯಾತಾನ, ರಾಷ್ಟ್ರಭೃತ್ ಆಹುತಿಗಳೂ). ಮೇಲ್ಭಾಗದಲ್ಲಿ ಮಾಧ್ವ ಅಥವಾ ಸ್ಮಾರ್ತ ಆರಿಸಿ.',
    'variants': [{'key': 'tradition', 'title': 'Tradition', 'titleKn': 'ಸಂಪ್ರದಾಯ',
                  'options': [('madhva', 'Madhva', 'ಮಾಧ್ವ'), ('smarta', 'Smarta', 'ಸ್ಮಾರ್ತ')]}],
    'difficulty': 'advanced',
    'completeness': 'complete',
    'contentNote': 'The whole common rite, from achamana to samarpana, with every mantra printed at its step; the main offerings of each homa are in that homa’s own text, which sends you back here for the uttaranga. Homas are traditionally done with a trained priest. The Madhva form is the Rigvedi (Ashvalayana) agnimukha of the Madhva manuals; Rigvedi Smartas follow it with the plain tyaga. The Smarta form is the Apastamba (Yajurvedi) agnimukha of the Tamil and Karnataka manuals. Three short meditations that only one Madhva manual prints (the dhyana of Svaha and of Bharati in the kunda, and the smriti-dhyana of Agni), the Brahma’s japa and two prayers to Agni at the end are described in the notes but not printed; the offerings to the tattva-nyasa, matrika-nyasa and avarana deities are for the initiated and are received from the guru. Families who do the full punyahavachana open that text in the library. Follow your family manual and purohita where they differ.',
}

SUMMARIES = {
    'hi': 'सभी होमों के साझा भाग, करने के क्रम में पूरे मन्त्रों सहित: आचमन, प्राणायाम, संकल्प, कलश और संक्षिप्त पुण्याहवाचन, स्थण्डिल, अग्नि लाना और स्थापित करना, अग्निमुख (माध्व: अन्वाधान, परिस्तरण, ब्रह्मा, आज्यसंस्कार, इध्म, आघार, आज्यभाग, अग्नि के सोलह संस्कार और पुरुषसूक्त सहित वैष्णव आहुतियाँ; स्मार्त: परिस्तरण, पात्रासादन, परिधि, परिषेचन, इध्म, आघार, आज्यभाग, अग्निमुख); फिर प्रत्येक होम के पाठ में दी गई प्रधान आहुतियों के बाद उत्तराङ्ग: स्विष्टकृत्, प्रायश्चित्त आहुतियाँ, पूर्णाहुति, संस्राव, मार्जन, अग्न्युपस्थान, रक्षा और समर्पण (स्मार्तों में जय, अभ्यातान और राष्ट्रभृत् आहुतियाँ भी)। ऊपर माध्व या स्मार्त चुनें।',
    'te': 'అన్ని హోమాలకు సమానమైన భాగాలు, చేసే క్రమంలో పూర్తి మంత్రాలతో: ఆచమనం, ప్రాణాయామం, సంకల్పం, కలశం, సంక్షిప్త పుణ్యాహవాచనం, స్థండిలం, అగ్నిని తెచ్చి ప్రతిష్ఠించడం, అగ్నిముఖం (మాధ్వ: అన్వాధానం, పరిస్తరణం, బ్రహ్మ, ఆజ్యసంస్కారం, ఇధ్మం, ఆఘారం, ఆజ్యభాగం, అగ్నికి షోడశ సంస్కారాలు, పురుషసూక్తంతో వైష్ణవాహుతులు; స్మార్త: పరిస్తరణం, పాత్రాసాదనం, పరిధులు, పరిషేచనం, ఇధ్మం, ఆఘారం, ఆజ్యభాగం, అగ్నిముఖం); ప్రతి హోమ పాఠంలోని ప్రధానాహుతుల తరువాత ఉత్తరాంగం: స్విష్టకృత్తు, ప్రాయశ్చిత్త ఆహుతులు, పూర్ణాహుతి, సంస్రావం, మార్జనం, అగ్న్యుపస్థానం, రక్ష, సమర్పణ (స్మార్తులలో జయ, అభ్యాతాన, రాష్ట్రభృత్ ఆహుతులు కూడా). పైన మాధ్వ లేదా స్మార్త ఎంచుకోండి.',
    'ta': 'எல்லா ஹோமங்களுக்கும் பொதுவான பகுதிகள், செய்யும் வரிசையில் முழு மந்திரங்களுடன்: ஆசமனம், ப்ராணாயாமம், ஸங்கல்பம், கலசமும் சுருக்கமான புண்யாஹவாசனமும், ஸ்தண்டிலம், அக்னியைக் கொண்டுவந்து ப்ரதிஷ்டை செய்தல், அக்னிமுகம் (மாத்வ: அன்வாதானம், பரிஸ்தரணம், ப்ரஹ்மா, ஆஜ்ய ஸம்ஸ்காரம், இத்மம், ஆகாரம், ஆஜ்யபாகம், அக்னிக்குப் பதினாறு ஸம்ஸ்காரங்கள், புருஷஸூக்தத்துடன் வைஷ்ணவ ஆஹுதிகள்; ஸ்மார்த்த: பரிஸ்தரணம், பாத்ராஸாதனம், பரிதிகள், பரிஷேசனம், இத்மம், ஆகாரம், ஆஜ்யபாகம், அக்னிமுகம்); ஒவ்வொரு ஹோம நூலிலும் உள்ள பிரதான ஆஹுதிகளுக்குப் பின் உத்தராங்கம்: ஸ்விஷ்டக்ருத், ப்ராயச்சித்த ஆஹுதிகள், பூர்ணாஹுதி, ஸம்ஸ்ராவம், மார்ஜனம், அக்னி உபஸ்தானம், ரக்ஷை, ஸமர்ப்பணம் (ஸ்மார்த்தர்களுக்கு ஜயா, அப்யாதான, ராஷ்ட்ரப்ருத் ஆஹுதிகளும்). மேலே மாத்வ அல்லது ஸ்மார்த்த தேர்ந்தெடுக்கவும்.',
}
