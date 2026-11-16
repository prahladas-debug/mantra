/**
 * Homa: the common procedure (purvanga and uttaranga) shared by every homa in the app, printed in
 * full in the order it is done: achamana, pranayama, deshakala and sankalpa, kalasha and the short
 * punyahavachana, the sthandila, bringing and installing the fire, the agni-mukha, then (after the
 * pradhana homa given in each homa's own text) the uttaranga: Madhva (Rigvedi, Ashvalayana) and
 * Smarta (Yajurvedi, Apastamba) forms as reader-selectable variants.
 *
 * Sources:
 *  - Madhva (M1): "Agnimukha Prayogah" (Rigvediya agnimukha prayoga, Madhva), ed. Haranahalli
 *    Aravindacharya. archive.org: agnimukha. The whole Madhva sequence: sankalpa, six lines, Svaha,
 *    Bharati and Lakshmi in the kunda, juṣṭo damūnā / ehy agne avahana, pratishthapana, catvāri
 *    śṛṅgā, Mukhyaprana and Parashurama dhyana, eṣa hi devaḥ, the anvadhana list, paristarana,
 *    pātrāsādana, Brahma (nirastaḥ parāvasuḥ, idam aham arvāvasoḥ sadane sīdāmi), savitus tvā,
 *    agni-alankarana (viśvāni no, yas tvā hṛdā, yasmai tvam sukṛte), ayaṃ ta idhma, aghara,
 *    ajyabhaga, the sixteen samskaras and Vaishnava offerings, svishtakrit, idhma-bandhana to Rudra,
 *    ayāś cāgne, ato devā, idaṃ viṣṇuḥ, the four vyahritis to Aniruddha … Vasudeva, anājñātam,
 *    puruṣasammitaḥ, yat pākatrā, yad vo devā, sarvaprayaschitta, samudrād ūrmiḥ, vi jyotiṣā,
 *    samsrava, pūrṇam asi, the marjana, āpo asmān, idam āpaḥ, māhaṃ prajām, agne tvaṃ no,
 *    bodhā me, mā nas toke, bṛhat sāma, tryāyuṣam, agne naya (eight verses), the closing prayers.
 *  - Madhva (M2): Dr. H. Satyanarayanacharya, "Homa-Havana", Sri Raghavendra Darshana Kendra,
 *    Bangalore 2012 (archive.org: 20230827_20230827_0721): sthandila, fire, the kravyada part thrown
 *    away with the Sudarshana astra mantra, samskaras and vishnu-ahutis, the five kinds of worship.
 *  - Madhva: Tantrasara-sangraha of Sri Madhvacharya, Mysore 2003 (archive.org:
 *    tantrasarasangraha-of-sri-anandatirtha-bhagavatpadacharya-2003) 2.13-14, 2.18-21.
 *  - "Sri Mahasudarshana Kalpa", ed. S. R. Narasimha Murthy (archive.org: mahasudarshanakalpa),
 *    homa-vidhi: a second Karnataka Rigvedi witness for the anvadhana list (ayāsam agniṃ devān
 *    viṣṇum agniṃ vāyuṃ sūryaṃ prajāpatiṃ ca prāyaścitta-devatāḥ, agniṃ trivāram, marutaś ca,
 *    viśvān devān saṃsrāveṇa) and for samudrād ūrmiḥ as purnahuti.
 *  - Smarta (S1): Muddu Shrautigal, "Apastambiya Purvapara Prayoga" (Raja Veda Kavya Pathashala,
 *    Kumbakonam; Grantha), "sarvatantra-sadharana agnimukha-prayoga", transcribed in
 *    vishvasa/vedAH_yajuH (taittirIyam/sUtram/ApastambaH/gRhyam/paddhatiH/muddu-shrautI/
 *    prayoga-ratnam/angam/agni-mukham): ullekhana, pratishtha, paristarana, patrasadana,
 *    brahmavarana, ajya and darvi samskara, paridhis, parishechana, idhma, aghara, ajyabhaga,
 *    agnimukha, prayaschitta, jaya-abhyatana-rashtrabhrt, prajapati, vyahritis, svishtakrit,
 *    paridhi-praharana, samsrava, anājñātam, sarvaprayaschitta, sapta te agne, parishechana,
 *    marjana, varadana, upasthana.
 *  - Smarta (S2): "Mahaganapati Homah", Mylapore Vedadhyayana Sabha (E. Balasubrahmanya Sastri,
 *    Janbunatha Sastri, N. V. Nataraja Dikshitar; publ. A. Subbaraman), transcribed in the same
 *    repository (…/paddhatiH/mailApura-vedAdhyayana-sabhA/ganapati_homa): the same Apastamba
 *    agnimukha and uttaranga, with purnahuti, the upasthana prayers, bṛhat sāma raksha and
 *    kāyena vācā samarpana.
 *  - Smarta: Apastamba Grihya Sutra with Haradatta and Sudarshanacharya (GRETIL) 1.12-19, 2.3-8;
 *    "Apastamba Purva Prayogam", Srirama Ramanuja Acharya (srimatham.com 2012; archive.org:
 *    apastamba_pUrva_prayoga_srImaTham_2012), pp. 16-29 (candramā manaso jātaḥ at pratishtha, the
 *    vyahriti offerings before the pradhana homa).
 *  - Vedic and sutra texts checked: Rigveda (GRETIL, Aufrecht) 1.22.16-17, 1.76.2, 1.114.8, 1.147.2,
 *    1.189.1-8, 4.58.1-11, 5.4.9-11, 5.24.1-4, 10.2.5, 10.9.8, 10.90.1-16; Ashvalayana Shrauta
 *    Sutra (GRETIL) 1.11.6-8 (pūrṇam asi, the marjana, māhaṃ prajām), 1.11.13 (ayāś cāgne),
 *    3.13.18 (yad vo devā), 4.12.2 (bṛhat sāma), and the Brahma's mantras (nirastaḥ parāvasuḥ);
 *    Shankhayana Shrauta Sutra 4.11.3 (pūrṇam asi); Taittiriya Samhita 3.4.4 (jaya), 3.4.5
 *    (abhyatana), 3.4.7 (rashtrabhrt), 1.8.14, 4.6.5; Taittiriya Brahmana 3.7.11, 3.8.10 (vishvAsa/
 *    vedAH_yajuH); Bhagavata 6.8.10 (oṃ viṣṇave namaḥ, the Vishnu shadakshara).
 *  - Prayers shared with the app's Nitya Puja (achamana, pranayama, deshakala, kalasha, kāyena
 *    vācā) are copied from that text so the readings agree; Gita 3.10 as in the app's Gita.
 * Not printed (said so in contentNote): the Svaha and Bharati dhyana verses and the smriti-dhyana of
 * Agni (saptahastaś catuḥśṛṅgaḥ …), found in M1 alone; the Brahma's japa and the prayers ca me
 * svaraś ca me and svasti śraddhāṃ medhām (M1 alone, not found in the sutras checked); the
 * initiation offerings to the tattva-nyasa, matrika-nyasa and avarana deities.
 */
import type { Mantra } from '../types';

export const homaPurvanga: Mantra = {
  id: 'homa-purvanga',
  title: 'होमविधिः — पूर्वाङ्गम् उत्तराङ्गं च',
  titleEn: 'Homa: Common Procedure (Purvanga and Uttaranga)',
  category: 'homa',
  order: 1,
  deity: 'Agni; the Lord within Agni (Madhva: Harinipati Parashurama within Mukhyaprana)',
  source: 'Madhva (Rigvedi, Ashvalayana): Haranahalli Aravindacharya, Agnimukha Prayoga; H. Satyanarayanacharya, Homa-Havana; Tantrasara-sangraha. Smarta (Apastamba): Muddu Shrautigal, Apastambiya Purvapara Prayoga; Mylapore Vedadhyayana Sabha, Mahaganapati Homa; Apastamba and Ashvalayana Grihya and Shrauta Sutras',
  summary: 'The parts every homa shares, printed in full in the order they are done: achamana, pranayama and sankalpa, kalasha and the short punyahavachana, the sthandila, bringing and installing the fire, the agni-mukha (Madhva: anvadhana, paristarana, the Brahma, the ghee, idhma, aghara, ajyabhaga, the sixteen samskaras of Agni and the Vaishnava offerings with the Purusha Sukta; Smarta: paristarana, vessels, paridhis, parishechana, idhma, aghara, ajyabhaga, agnimukha), then, after the main offerings given in each homa text, the uttaranga: svishtakrit, the prayaschitta offerings, purnahuti, samsrava, marjana, agni upasthana, raksha and samarpana (Smarta also the jaya, abhyatana and rashtrabhrt offerings). Choose Madhva or Smarta at the top.',
  summaryKn: 'ಎಲ್ಲ ಹೋಮಗಳಿಗೂ ಸಮಾನವಾದ ಭಾಗಗಳು, ಮಾಡುವ ಕ್ರಮದಲ್ಲಿ ಪೂರ್ತಿಯಾಗಿ: ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ, ಸಂಕಲ್ಪ, ಕಲಶ ಮತ್ತು ಸಂಕ್ಷಿಪ್ತ ಪುಣ್ಯಾಹವಾಚನ, ಸ್ಥಂಡಿಲ, ಅಗ್ನಿಯನ್ನು ತಂದು ಪ್ರತಿಷ್ಠಿಸುವುದು, ಅಗ್ನಿಮುಖ (ಮಾಧ್ವ: ಅನ್ವಾಧಾನ, ಪರಿಸ್ತರಣ, ಬ್ರಹ್ಮ, ಆಜ್ಯಸಂಸ್ಕಾರ, ಇಧ್ಮ, ಆಘಾರ, ಆಜ್ಯಭಾಗ, ಅಗ್ನಿಯ ಷೋಡಶ ಸಂಸ್ಕಾರಗಳು ಮತ್ತು ಪುರುಷಸೂಕ್ತಸಹಿತ ವೈಷ್ಣವಾಹುತಿಗಳು; ಸ್ಮಾರ್ತ: ಪರಿಸ್ತರಣ, ಪಾತ್ರಾಸಾದನ, ಪರಿಧಿ, ಪರಿಷೇಚನ, ಇಧ್ಮ, ಆಘಾರ, ಆಜ್ಯಭಾಗ, ಅಗ್ನಿಮುಖ); ಪ್ರತಿಯೊಂದು ಹೋಮದ ಪಠ್ಯದಲ್ಲಿರುವ ಪ್ರಧಾನಾಹುತಿಗಳ ನಂತರ ಉತ್ತರಾಂಗ: ಸ್ವಿಷ್ಟಕೃತ್, ಪ್ರಾಯಶ್ಚಿತ್ತ ಆಹುತಿಗಳು, ಪೂರ್ಣಾಹುತಿ, ಸಂಸ್ರಾವ, ಮಾರ್ಜನ, ಅಗ್ನ್ಯುಪಸ್ಥಾನ, ರಕ್ಷೆ, ಸಮರ್ಪಣೆ (ಸ್ಮಾರ್ತರಲ್ಲಿ ಜಯ, ಅಭ್ಯಾತಾನ, ರಾಷ್ಟ್ರಭೃತ್ ಆಹುತಿಗಳೂ). ಮೇಲ್ಭಾಗದಲ್ಲಿ ಮಾಧ್ವ ಅಥವಾ ಸ್ಮಾರ್ತ ಆರಿಸಿ.',
  variants: [
    {
      key: 'tradition',
      title: 'Tradition',
      titleKn: 'ಸಂಪ್ರದಾಯ',
      options: [
        { id: 'madhva', label: 'Madhva', labelKn: 'ಮಾಧ್ವ' },
        { id: 'smarta', label: 'Smarta', labelKn: 'ಸ್ಮಾರ್ತ' },
      ],
    },
  ],
  difficulty: 'advanced',
  completeness: 'complete',
  contentNote: 'The whole common rite, from achamana to samarpana, with every mantra printed at its step; the main offerings of each homa are in that homa’s own text, which sends you back here for the uttaranga. Homas are traditionally done with a trained priest. The Madhva form is the Rigvedi (Ashvalayana) agnimukha of the Madhva manuals; Rigvedi Smartas follow it with the plain tyaga. The Smarta form is the Apastamba (Yajurvedi) agnimukha of the Tamil and Karnataka manuals. Three short meditations that only one Madhva manual prints (the dhyana of Svaha and of Bharati in the kunda, and the smriti-dhyana of Agni), the Brahma’s japa and two prayers to Agni at the end are described in the notes but not printed; the offerings to the tattva-nyasa, matrika-nyasa and avarana deities are for the initiated and are received from the guru. Families who do the full punyahavachana open that text in the library. Follow your family manual and purohita where they differ.',
  sections: [
    {
      title: 'होमारम्भः',
      titleEn: 'Before you begin',
      note: 'A homa is an offering into a consecrated fire. This text gives the parts every homa shares, in order; each homa text (Ganapati, Sudarshana and the rest) has its own sankalpa, deity worship and main offerings, and tells you where to come back here. Keep ready: a sthandila (a square platform of sand or brick about four fingers high, or a copper or brick kunda; never iron), dry fuel sticks (samidh) of a span (Madhvas: ashvattha, palasha and other milky trees; amrita, i.e. guduchi, for health), three paridhi sticks (Smarta), a bundle of darbha, ghee (ajya) in a vessel, two ladles (sruk and sruva, or for Smartas two leaves as darvi), a prokshani vessel of water, a pranita vessel, akshata, flowers, gandha, a kalasha of water, the materials of the particular homa, camphor, betel and dakshina. The yajamana sits facing east, with his wife on his right; a Brahma (a learned person, or a kurcha of darbha on a seat) sits to the south of the fire; the acharya or purohita guides the rite. Do bath, sandhyavandane and your daily puja first. Choose Madhva (Rigvedi, Ashvalayana) or Smarta (Yajurvedi, Apastamba) at the top; Rigvedi Smartas follow the Ashvalayana steps shown for Madhvas, saying the plain tyaga (अग्नय इदं न मम) where the Madhva form names the Lord within the deity. Mantras are said aloud unless the note says "silently".',
      noteKn: 'ಹೋಮವೆಂದರೆ ಸಂಸ್ಕರಿಸಿದ ಅಗ್ನಿಯಲ್ಲಿ ನೀಡುವ ಆಹುತಿ. ಎಲ್ಲ ಹೋಮಗಳಿಗೂ ಸಮಾನವಾದ ಭಾಗಗಳನ್ನು ಇಲ್ಲಿ ಕ್ರಮವಾಗಿ ಕೊಡಲಾಗಿದೆ; ಪ್ರತಿಯೊಂದು ಹೋಮದ ಪಠ್ಯದಲ್ಲಿ (ಗಣಪತಿ, ಸುದರ್ಶನ ಇತ್ಯಾದಿ) ಅದರ ಸಂಕಲ್ಪ, ದೇವತಾಪೂಜೆ, ಪ್ರಧಾನಾಹುತಿಗಳು ಇವೆ, ಮತ್ತು ಯಾವಾಗ ಇಲ್ಲಿಗೆ ಮರಳಬೇಕೆಂದು ಹೇಳುತ್ತದೆ. ಸಿದ್ಧಪಡಿಸಿಕೊಳ್ಳಿ: ಸ್ಥಂಡಿಲ (ಮರಳು ಅಥವಾ ಇಟ್ಟಿಗೆಯ ನಾಲ್ಕು ಅಂಗುಲ ಎತ್ತರದ ಚೌಕ ವೇದಿಕೆ, ಅಥವಾ ತಾಮ್ರ/ಇಟ್ಟಿಗೆಯ ಕುಂಡ; ಕಬ್ಬಿಣ ಬೇಡ), ಗೇಣುದ್ದದ ಒಣ ಸಮಿಧೆಗಳು (ಮಾಧ್ವರಲ್ಲಿ ಅಶ್ವತ್ಥ, ಪಲಾಶ ಮುಂತಾದ ಕ್ಷೀರವೃಕ್ಷಗಳು; ಆರೋಗ್ಯಕ್ಕಾಗಿ ಅಮೃತಬಳ್ಳಿ), ಮೂರು ಪರಿಧಿ ಕಡ್ಡಿಗಳು (ಸ್ಮಾರ್ತ), ದರ್ಭೆಯ ಕಟ್ಟು, ತುಪ್ಪ, ಸ್ರುಕ್–ಸ್ರುವ (ಸ್ಮಾರ್ತರಲ್ಲಿ ದರ್ವಿಯಾಗಿ ಎರಡು ಎಲೆಗಳು), ಪ್ರೋಕ್ಷಣೀ ಪಾತ್ರೆ, ಪ್ರಣೀತಾ ಪಾತ್ರೆ, ಅಕ್ಷತೆ, ಹೂವು, ಗಂಧ, ನೀರಿನ ಕಲಶ, ಆ ಹೋಮದ ದ್ರವ್ಯಗಳು, ಕರ್ಪೂರ, ವೀಳ್ಯ, ದಕ್ಷಿಣೆ. ಯಜಮಾನನು ಪೂರ್ವಾಭಿಮುಖನಾಗಿ, ಪತ್ನಿ ಬಲಭಾಗದಲ್ಲಿ; ಅಗ್ನಿಯ ದಕ್ಷಿಣಕ್ಕೆ ಬ್ರಹ್ಮ (ವಿದ್ವಾಂಸರು ಅಥವಾ ಆಸನದ ಮೇಲೆ ದರ್ಭೆಯ ಕೂರ್ಚ); ಆಚಾರ್ಯರು ಕರ್ಮವನ್ನು ನಡೆಸಿಕೊಡುತ್ತಾರೆ. ಮೊದಲು ಸ್ನಾನ, ಸಂಧ್ಯಾವಂದನೆ, ನಿತ್ಯಪೂಜೆ ಮುಗಿಸಿ. ಮೇಲ್ಭಾಗದಲ್ಲಿ ಮಾಧ್ವ (ಋಗ್ವೇದಿ, ಆಶ್ವಲಾಯನ) ಅಥವಾ ಸ್ಮಾರ್ತ (ಯಜುರ್ವೇದಿ, ಆಪಸ್ತಂಬ) ಆರಿಸಿ; ಋಗ್ವೇದಿ ಸ್ಮಾರ್ತರು ಮಾಧ್ವರಿಗೆ ತೋರಿಸಿದ ಆಶ್ವಲಾಯನ ಕ್ರಮವನ್ನೇ ಅನುಸರಿಸಿ, ಮಾಧ್ವ ರೂಪದಲ್ಲಿ ಅಂತರ್ಯಾಮಿಯನ್ನು ಹೆಸರಿಸುವಲ್ಲಿ ಸಾಮಾನ್ಯ ತ್ಯಾಗ (ಅಗ್ನಯ ಇದಂ ನ ಮಮ) ಹೇಳುತ್ತಾರೆ. “ಮೌನವಾಗಿ” ಎಂದಿಲ್ಲದಿದ್ದರೆ ಮಂತ್ರಗಳನ್ನು ಗಟ್ಟಿಯಾಗಿ ಹೇಳಿ.',
      verses: [
        {
          text: 'सहयज्ञाः प्रजाः सृष्ट्वा पुरोवाच प्रजापतिः ।\nअनेन प्रसविष्यध्वमेष वोऽस्त्विष्टकामधुक् ॥',
          meaning: {
            en: 'In the beginning the Creator brought forth beings together with sacrifice and said: by this you shall prosper; let this be the cow that yields all you desire. (Bhagavad Gita 3.10)',
            kn: 'ಆದಿಯಲ್ಲಿ ಪ್ರಜಾಪತಿಯು ಯಜ್ಞದೊಡನೆ ಪ್ರಜೆಗಳನ್ನು ಸೃಷ್ಟಿಸಿ ಹೇಳಿದನು: ಇದರಿಂದ ನೀವು ಅಭಿವೃದ್ಧಿ ಹೊಂದಿರಿ; ಇದು ನಿಮಗೆ ಬಯಸಿದ್ದನ್ನು ಕರೆಯುವ ಕಾಮಧೇನುವಾಗಲಿ. (ಭಗವದ್ಗೀತೆ ೩.೧೦)',
          },
        },
      ],
    },
    {
      title: 'होमप्रयोजनम्',
      titleEn: 'Why a homa is done (Tantrasara)',
      note: 'Sri Madhvacharya gives the occasions for a homa and its counts. In the Madhva view the homa is offered to the Lord, Janardana, within the fire, through Mukhyaprana; all the deities named in the offerings are worshipped as his abodes.',
      noteKn: 'ಹೋಮವನ್ನು ಯಾವಾಗ, ಎಷ್ಟು ಸಂಖ್ಯೆಯಲ್ಲಿ ಮಾಡಬೇಕೆಂಬುದನ್ನು ಶ್ರೀಮಧ್ವಾಚಾರ್ಯರು ತಿಳಿಸುತ್ತಾರೆ. ಮಾಧ್ವ ದೃಷ್ಟಿಯಲ್ಲಿ ಹೋಮವು ಅಗ್ನಿಯ ಒಳಗಿರುವ ಜನಾರ್ದನನಿಗೆ ಮುಖ್ಯಪ್ರಾಣರ ಮೂಲಕ ಸಲ್ಲುತ್ತದೆ; ಆಹುತಿಗಳಲ್ಲಿ ಹೆಸರಿಸುವ ಎಲ್ಲ ದೇವತೆಗಳು ಅವನ ಅಧಿಷ್ಠಾನಗಳೆಂದು ಪೂಜಿಸಲ್ಪಡುತ್ತಾರೆ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'उपसर्गेषु जातेषु दैवभूतात्महेतुषु ।\nआयुषे वाऽथ शान्त्यै वा श्रिये वा पुण्यवृद्धये ॥',
          meaning: {
            en: 'When troubles arise from the gods, from other beings or from oneself, or for long life, for peace, for prosperity or for the growth of merit… (Tantrasara-sangraha 2.13)',
            kn: 'ದೈವ, ಭೂತ (ಇತರ ಜೀವಿಗಳು), ಆತ್ಮ (ತನ್ನಿಂದಲೇ) — ಇವುಗಳ ಕಾರಣದಿಂದ ಉಪದ್ರವಗಳು ಉಂಟಾದಾಗ, ಅಥವಾ ಆಯುಸ್ಸಿಗಾಗಿ, ಶಾಂತಿಗಾಗಿ, ಸಂಪತ್ತಿಗಾಗಿ, ಪುಣ್ಯವೃದ್ಧಿಗಾಗಿ… (ತಂತ್ರಸಾರಸಂಗ್ರಹ ೨.೧೩)',
          },
        },
        {
          text: 'योग्यतायै मन्त्रसिद्ध्यै विष्णोः प्रीत्यर्थमेव वा ।\nजुहुयात्सहस्रमयुतं लक्षं कोटिमथापि वा ।\nपूर्ववत्संस्कृते वह्नौ ध्यात्वा देवं जनार्दनम् ॥',
          meaning: {
            en: '…for fitness, for mastery of a mantra, or simply for the pleasure of Vishnu, one should offer a thousand, ten thousand, a lakh or even a crore oblations into a fire consecrated as taught, meditating on the Lord Janardana. (Tantrasara-sangraha 2.14)',
            kn: '…ಯೋಗ್ಯತೆಗಾಗಿ, ಮಂತ್ರಸಿದ್ಧಿಗಾಗಿ, ಅಥವಾ ಕೇವಲ ವಿಷ್ಣುಪ್ರೀತಿಗಾಗಿ, ಹಿಂದೆ ಹೇಳಿದಂತೆ ಸಂಸ್ಕರಿಸಿದ ಅಗ್ನಿಯಲ್ಲಿ ಜನಾರ್ದನನನ್ನು ಧ್ಯಾನಿಸುತ್ತಾ ಸಾವಿರ, ಹತ್ತುಸಾವಿರ, ಲಕ್ಷ ಅಥವಾ ಕೋಟಿ ಆಹುತಿಗಳನ್ನು ಹೋಮಿಸಬೇಕು. (ತಂತ್ರಸಾರಸಂಗ್ರಹ ೨.೧೪)',
          },
        },
      ],
    },
    {
      title: 'आचमनं प्राणायामो देशकालश्च',
      titleEn: 'Achamana, pranayama and the time and place',
      note: 'Sip water three times with the first three names (केशवाय स्वाहा …), touch the limbs with the rest, then do pranayama: close the nostrils, and with the breath held say the pranayama mantra once in the mind (three times in all). Then, holding akshata and water, say the time and place, replacing each अमुक with today’s year, season, month, fortnight, tithi, weekday and nakshatra (and, outside the Godavari region, your own place). Smartas first remember Ganapati with शुक्लाम्बरधरं….',
      noteKn: 'ಮೊದಲ ಮೂರು ನಾಮಗಳಿಂದ (ಕೇಶವಾಯ ಸ್ವಾಹಾ …) ಮೂರು ಬಾರಿ ನೀರು ಆಚಮನ ಮಾಡಿ, ಉಳಿದ ನಾಮಗಳಿಂದ ಅಂಗಸ್ಪರ್ಶ ಮಾಡಿ; ನಂತರ ಪ್ರಾಣಾಯಾಮ: ಮೂಗನ್ನು ಮುಚ್ಚಿ, ಉಸಿರು ಹಿಡಿದಿರುವಾಗ ಪ್ರಾಣಾಯಾಮ ಮಂತ್ರವನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಹೇಳಿ (ಒಟ್ಟು ಮೂರು ಬಾರಿ). ಆಮೇಲೆ ಅಕ್ಷತೆ–ನೀರು ಹಿಡಿದು ದೇಶಕಾಲ ಹೇಳಿ: ಪ್ರತಿಯೊಂದು “ಅಮುಕ”ದ ಸ್ಥಳದಲ್ಲಿ ಇಂದಿನ ಸಂವತ್ಸರ, ಅಯನ, ಋತು, ಮಾಸ, ಪಕ್ಷ, ತಿಥಿ, ವಾರ, ನಕ್ಷತ್ರಗಳನ್ನು (ಗೋದಾವರೀ ಪ್ರದೇಶದ ಹೊರಗಿದ್ದರೆ ನಿಮ್ಮ ಸ್ಥಳವನ್ನೂ) ಹೇಳಿ. ಸ್ಮಾರ್ತರು ಮೊದಲು “ಶುಕ್ಲಾಂಬರಧರಂ…” ಎಂದು ಗಣಪತಿಯನ್ನು ಸ್ಮರಿಸುತ್ತಾರೆ.',
      verses: [
        {
          text: 'शुक्लाम्बरधरं विष्णुं शशिवर्णं चतुर्भुजम् ।\nप्रसन्नवदनं ध्यायेत्सर्वविघ्नोपशान्तये ॥',
          meaning: {
            en: 'To remove all obstacles, one should meditate on the all-pervading one clad in white, moon-coloured, four-armed, with a gracious face.',
            kn: 'ಎಲ್ಲಾ ವಿಘ್ನಗಳ ಶಾಂತಿಗಾಗಿ, ಬಿಳಿಯ ವಸ್ತ್ರ ಧರಿಸಿದ, ಚಂದ್ರನಂತೆ ಬಿಳುಪಾದ, ನಾಲ್ಕು ಭುಜಗಳುಳ್ಳ, ಪ್ರಸನ್ನಮುಖನಾದ ಸರ್ವವ್ಯಾಪಿಯನ್ನು ಧ್ಯಾನಿಸಬೇಕು.',
          },
          when: { tradition: ['smarta'] },
        },
        {
          text: 'ॐ केशवाय स्वाहा ।\nॐ नारायणाय स्वाहा ।\nॐ माधवाय स्वाहा ॥',
          meaning: {
            en: 'Offering to Keshava, to Narayana and to Madhava: with each of these names of the Lord a sip of water is taken.',
            kn: 'ಕೇಶವ, ನಾರಾಯಣ, ಮಾಧವ ಎಂಬ ಭಗವಂತನ ನಾಮಗಳನ್ನು ಹೇಳಿ, ಒಂದೊಂದು ನಾಮಕ್ಕೂ ಜಲವನ್ನು ಅರ್ಪಿಸಿ ಆಚಮನ ಮಾಡುತ್ತೇನೆ.',
          },
        },
        {
          text: 'ॐ गोविन्दाय नमः । ॐ विष्णवे नमः ।\nॐ मधुसूदनाय नमः । ॐ त्रिविक्रमाय नमः ।\nॐ वामनाय नमः । ॐ श्रीधराय नमः ।\nॐ हृषीकेशाय नमः । ॐ पद्मनाभाय नमः ।\nॐ दामोदराय नमः । ॐ सङ्कर्षणाय नमः ।\nॐ वासुदेवाय नमः । ॐ प्रद्युम्नाय नमः ।\nॐ अनिरुद्धाय नमः । ॐ पुरुषोत्तमाय नमः ।\nॐ अधोक्षजाय नमः । ॐ नारसिंहाय नमः ।\nॐ अच्युताय नमः । ॐ जनार्दनाय नमः ।\nॐ उपेन्द्राय नमः । ॐ हरये नमः ।\nॐ श्रीकृष्णाय नमः ॥',
          meaning: {
            en: 'Salutations to the Lord by his holy names, from Govinda and Vishnu to Hari and Sri Krishna; with each, the Lord is remembered as present in the part of the body that is touched.',
            kn: 'ಗೋವಿಂದ, ವಿಷ್ಣು ಮೊದಲ್ಗೊಂಡು ಹರಿ, ಶ್ರೀಕೃಷ್ಣನವರೆಗಿನ ಭಗವಂತನ ಪವಿತ್ರ ನಾಮಗಳಿಗೆ ನಮಸ್ಕಾರ; ಒಂದೊಂದು ನಾಮ ಹೇಳುವಾಗಲೂ ಮುಟ್ಟಿದ ಅಂಗದಲ್ಲಿ ಆ ರೂಪದ ಭಗವಂತನಿದ್ದಾನೆಂದು ಸ್ಮರಿಸಬೇಕು.',
          },
        },
        {
          text: 'ॐ भूः । ॐ भुवः । ॐ स्वः । ॐ महः ।\nॐ जनः । ॐ तपः । ॐ सत्यम् ।\nॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ।\nॐ आपो ज्योती रसोऽमृतं ब्रह्म भूर्भुवः स्वरोम् ॥',
          meaning: {
            en: 'Om is recalled with each of the seven worlds, from Bhuh to Satya. We meditate on the adorable radiance of the divine Savitri, who moves our minds. Om — he is the waters, the light, the essence, the immortal, Brahman; he fills earth, sky and heaven.',
            kn: 'ಭೂಃ ಲೋಕದಿಂದ ಸತ್ಯಲೋಕದವರೆಗಿನ ಏಳು ಲೋಕಗಳನ್ನು ಓಂಕಾರದೊಂದಿಗೆ ಸ್ಮರಿಸುತ್ತೇನೆ. ನಮ್ಮ ಬುದ್ಧಿಯನ್ನು ಪ್ರೇರೇಪಿಸುವ ಸವಿತೃದೇವನ ಪೂಜನೀಯ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ. ಜಲ, ಜ್ಯೋತಿ, ರಸ, ಅಮೃತ ಎಲ್ಲವೂ ಅವನೇ; ಭೂಮಿ, ಅಂತರಿಕ್ಷ, ಸ್ವರ್ಗಗಳನ್ನು ವ್ಯಾಪಿಸಿರುವ ಪರಬ್ರಹ್ಮನೂ ಅವನೇ.',
          },
        },
        {
          text: 'शुभे शोभने मुहूर्ते विष्णोराज्ञया प्रवर्तमानस्य\nअद्य ब्रह्मणो द्वितीये परार्धे श्वेतवराहकल्पे वैवस्वतमन्वन्तरे\nअष्टाविंशतितमे कलियुगे प्रथमपादे\nजम्बूद्वीपे भरतवर्षे भरतखण्डे दण्डकारण्ये गोदावर्या दक्षिणे तीरे\nशालिवाहनशके बौद्धावतारे रामक्षेत्रे\nअस्मिन् वर्तमाने व्यावहारिके चान्द्रमानेन अमुकनामसंवत्सरे\nअमुकायने अमुकऋतौ अमुकमासे अमुकपक्षे\nअमुकतिथौ अमुकवासरे अमुकनक्षत्रे शुभयोगे शुभकरणे\nएवंगुणविशेषणविशिष्टायां शुभतिथौ ।',
          meaning: {
            en: 'At this good and auspicious moment, today, in the age that runs by the command of Vishnu — the second half of Brahma’s life, the Shveta-varaha kalpa, the Vaivasvata manvantara, the first quarter of the twenty-eighth Kali-yuga — in Bharatavarsha, in Dandakaranya south of the Godavari, in the Shalivahana era, in the present year, ayana, season, month, fortnight, tithi, weekday and star so named, on this auspicious day so marked…',
            kn: 'ಶುಭವೂ ಮಂಗಳಕರವೂ ಆದ ಈ ಮುಹೂರ್ತದಲ್ಲಿ, ಇಂದು, ಶ್ರೀವಿಷ್ಣುವಿನ ಆಜ್ಞೆಯಿಂದ ನಡೆಯುತ್ತಿರುವ ಬ್ರಹ್ಮದೇವರ ದ್ವಿತೀಯ ಪರಾರ್ಧದ ಶ್ವೇತವರಾಹ ಕಲ್ಪ, ವೈವಸ್ವತ ಮನ್ವಂತರ, ಇಪ್ಪತ್ತೆಂಟನೆಯ ಕಲಿಯುಗದ ಪ್ರಥಮ ಪಾದದಲ್ಲಿ, ಭರತವರ್ಷದಲ್ಲಿ ಗೋದಾವರಿಯ ದಕ್ಷಿಣ ತೀರದ ದಂಡಕಾರಣ್ಯದಲ್ಲಿ, ಶಾಲಿವಾಹನ ಶಕದಲ್ಲಿ, ಈಗ ನಡೆಯುತ್ತಿರುವ ಇಂತಹ ಸಂವತ್ಸರ, ಅಯನ, ಋತು, ಮಾಸ, ಪಕ್ಷ, ತಿಥಿ, ವಾರ, ನಕ್ಷತ್ರಗಳಿಂದ ಕೂಡಿದ ಈ ಶುಭದಿನದಂದು…',
          },
        },
      ],
    },
    {
      title: 'सङ्कल्पः',
      titleEn: 'Sankalpa of the homa',
      note: 'Holding akshata and water, make the sankalpa of the homa: say its name in place of अमुक (for example गणहोमाख्यं, सुदर्शनहोमाख्यं, पवमानहोमाख्यं) and, where the homa text gives one, add its own purpose and count. Let the water fall into the plate (M1).',
      noteKn: 'ಅಕ್ಷತೆ–ನೀರು ಹಿಡಿದು ಹೋಮದ ಸಂಕಲ್ಪ ಮಾಡಿ: “ಅಮುಕ”ದ ಸ್ಥಳದಲ್ಲಿ ಹೋಮದ ಹೆಸರು (ಉದಾ: ಗಣಹೋಮಾಖ್ಯಂ, ಸುದರ್ಶನಹೋಮಾಖ್ಯಂ, ಪವಮಾನಹೋಮಾಖ್ಯಂ) ಹೇಳಿ; ಆ ಹೋಮದ ಪಠ್ಯವು ಪ್ರಯೋಜನ ಮತ್ತು ಸಂಖ್ಯೆಯನ್ನು ಕೊಟ್ಟಿದ್ದರೆ ಅದನ್ನೂ ಸೇರಿಸಿ. ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ (ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ).',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'यज्ञपुरुषान्तर्यामि श्रीभारतीरमणमुख्यप्राणान्तर्गत\nश्रीहरिणीपतिपरशुरामप्रेरणया तत्प्रीत्यर्थम्\nअमुकहोमाख्यं कर्म करिष्ये ।\nतदङ्गं स्थण्डिलोल्लेपनोल्लेखनाद्यग्निप्रतिष्ठापनं करिष्ये ॥',
          meaning: {
            en: 'Prompted by Sri Parashurama, the Lord of Harini (Lakshmi), who dwells within Mukhyaprana, the beloved of Bharati, and is the inner ruler of the Yajnapurusha, and for his pleasure, I shall perform the rite called the … homa; as its part I shall prepare the sthandila, smearing and marking it, and install the fire.',
            kn: 'ಯಜ್ಞಪುರುಷನ ಅಂತರ್ಯಾಮಿಯಾದ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನಾದ ಹರಿಣೀಪತಿ (ಲಕ್ಷ್ಮೀಪತಿ) ಶ್ರೀಪರಶುರಾಮನ ಪ್ರೇರಣೆಯಿಂದ, ಅವನ ಪ್ರೀತಿಗಾಗಿ, ಇಂತಹ ಹೋಮವೆಂಬ ಕರ್ಮವನ್ನು ಮಾಡುತ್ತೇನೆ; ಅದರ ಅಂಗವಾಗಿ ಸ್ಥಂಡಿಲವನ್ನು ಸಾರಿಸಿ ರೇಖೆಗಳನ್ನು ಬರೆದು ಅಗ್ನಿಪ್ರತಿಷ್ಠೆ ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'सङ्कल्पः',
      titleEn: 'Sankalpa of the homa',
      note: 'Holding akshata and water, make the sankalpa: name the homa and its purpose in place of अमुक (the homa text gives its own full sankalpa where it has one, as the Mahaganapati homa does). Let the water fall into the plate.',
      noteKn: 'ಅಕ್ಷತೆ–ನೀರು ಹಿಡಿದು ಸಂಕಲ್ಪ ಮಾಡಿ: “ಅಮುಕ”ದ ಸ್ಥಳದಲ್ಲಿ ಹೋಮದ ಹೆಸರು ಮತ್ತು ಪ್ರಯೋಜನ ಹೇಳಿ (ಮಹಾಗಣಪತಿ ಹೋಮದಂತೆ, ಹೋಮದ ಪಠ್ಯದಲ್ಲಿ ಪೂರ್ಣ ಸಂಕಲ್ಪವಿದ್ದರೆ ಅದನ್ನು ಹೇಳಿ). ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'ममोपात्तसमस्तदुरितक्षयद्वारा श्रीपरमेश्वरप्रीत्यर्थम्\nअमुकफलसिद्ध्यर्थम् अमुकहोमं करिष्ये ।\nतदङ्गं स्थण्डिलोल्लेखनाद्यग्निप्रतिष्ठापनं करिष्ये ॥',
          meaning: {
            en: 'For the removal of all my accumulated sins and for the pleasure of the Supreme Lord, for the attainment of (the purpose), I shall perform the … homa; as its part I shall prepare and mark the sthandila and install the fire.',
            kn: 'ನಾನು ಸಂಪಾದಿಸಿದ ಎಲ್ಲ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ, ಇಂತಹ ಫಲದ ಸಿದ್ಧಿಗಾಗಿ ಇಂತಹ ಹೋಮವನ್ನು ಮಾಡುತ್ತೇನೆ; ಅದರ ಅಂಗವಾಗಿ ಸ್ಥಂಡಿಲದಲ್ಲಿ ರೇಖೆಗಳನ್ನು ಬರೆದು ಅಗ್ನಿಪ್ರತಿಷ್ಠೆ ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'कलशस्थापनं पुण्याहवाचनं च',
      titleEn: 'Kalasha and punyahavachana (short)',
      note: 'To the north-east of the fire, on a little rangoli design or a heap of rice, set a kalasha of water with mango leaves and a coconut. Closing its mouth with the right hand, recite the kalasha verses; then invite Varuna into it with इमं मे वरुण…, offer gandha, akshata and flowers, and keep it touched while the main mantras of the homa are recited, so that its water is charged; at the end the family is sprinkled with it (Homa-Havana; Mylapore manual). For the short punyahavachana the yajamana asks the brahmins (or the purohita) three times and they answer: punyaham, svasti and riddhi. Sprinkle the place, the materials and yourself with the water, saying अपवित्रः पवित्रो वा…. Families who do the full punyahavachana (with the Vedic verses for each call) open the Punyahavachana text in the library at this point.',
      noteKn: 'ಅಗ್ನಿಯ ಈಶಾನ್ಯಕ್ಕೆ, ಸಣ್ಣ ರಂಗೋಲಿ ಅಥವಾ ಅಕ್ಕಿಯ ರಾಶಿಯ ಮೇಲೆ, ಮಾವಿನೆಲೆ–ತೆಂಗಿನಕಾಯಿಯೊಡನೆ ನೀರಿನ ಕಲಶ ಇಡಿ. ಬಲಗೈಯಿಂದ ಅದರ ಬಾಯಿ ಮುಚ್ಚಿ ಕಲಶ ಶ್ಲೋಕಗಳನ್ನು ಹೇಳಿ; ನಂತರ “ಇಮಂ ಮೇ ವರುಣ…” ಎಂದು ವರುಣನನ್ನು ಆವಾಹಿಸಿ, ಗಂಧ–ಅಕ್ಷತೆ–ಹೂವು ಅರ್ಪಿಸಿ; ಹೋಮದ ಪ್ರಧಾನ ಮಂತ್ರಗಳನ್ನು ಹೇಳುವಾಗ ಕಲಶವನ್ನು ಮುಟ್ಟಿಕೊಂಡಿರಿ, ಅದರ ಜಲ ಮಂತ್ರಪೂತವಾಗುತ್ತದೆ; ಕೊನೆಯಲ್ಲಿ ಮನೆಯವರಿಗೆ ಅದನ್ನು ಪ್ರೋಕ್ಷಿಸುತ್ತಾರೆ (ಹೋಮ–ಹವನ; ಮೈಲಾಪುರ ಗ್ರಂಥ). ಸಂಕ್ಷಿಪ್ತ ಪುಣ್ಯಾಹವಾಚನದಲ್ಲಿ ಯಜಮಾನನು ಬ್ರಾಹ್ಮಣರನ್ನು (ಅಥವಾ ಪುರೋಹಿತರನ್ನು) ಮೂರು ಬಾರಿ ಕೇಳುತ್ತಾನೆ, ಅವರು “ಪುಣ್ಯಾಹಂ, ಸ್ವಸ್ತಿ, ಋದ್ಧಿ” ಎಂದು ಉತ್ತರಿಸುತ್ತಾರೆ. “ಅಪವಿತ್ರಃ ಪವಿತ್ರೋ ವಾ…” ಎಂದು ಸ್ಥಳ, ದ್ರವ್ಯಗಳು ಮತ್ತು ತನ್ನ ಮೇಲೆ ನೀರು ಪ್ರೋಕ್ಷಿಸಿ. ಪೂರ್ಣ ಪುಣ್ಯಾಹವಾಚನ ಮಾಡುವವರು ಇಲ್ಲಿ ಗ್ರಂಥಾಲಯದ “ಪುಣ್ಯಾಹವಾಚನ” ಪಠ್ಯವನ್ನು ತೆರೆಯಿರಿ.',
      verses: [
        {
          text: 'कलशस्य मुखे विष्णुः कण्ठे रुद्रः समाश्रितः ।\nमूले तत्र स्थितो ब्रह्मा मध्ये मातृगणाः स्मृताः ॥',
          meaning: {
            en: 'Vishnu dwells in the mouth of the kalasha and Rudra in its neck; Brahma stands at its base, and the hosts of Mother-goddesses are said to be in its middle.',
            kn: 'ಕಲಶದ ಮುಖದಲ್ಲಿ ವಿಷ್ಣುವೂ, ಕಂಠದಲ್ಲಿ ರುದ್ರನೂ, ಮೂಲದಲ್ಲಿ ಬ್ರಹ್ಮದೇವರೂ, ಮಧ್ಯದಲ್ಲಿ ಮಾತೃಗಣಗಳೂ ನೆಲೆಸಿದ್ದಾರೆ.',
          },
        },
        {
          text: 'कुक्षौ तु सागराः सर्वे सप्तद्वीपा वसुन्धरा ।\nऋग्वेदोऽथ यजुर्वेदः सामवेदो ह्यथर्वणः ॥\nअङ्गैश्च सहिताः सर्वे कलशं तु समाश्रिताः ।\nअत्र गायत्री सावित्री शान्तिः पुष्टिकरी तथा ॥',
          meaning: {
            en: 'In its belly dwell all the oceans and the earth with its seven continents; the Rigveda, Yajurveda, Samaveda and Atharvaveda with their limbs all rest in the kalasha. Here too are Gayatri, Savitri, and the powers that bring peace and nourishment.',
            kn: 'ಕಲಶದ ಹೊಟ್ಟೆಯಲ್ಲಿ ಎಲ್ಲ ಸಮುದ್ರಗಳೂ ಸಪ್ತದ್ವೀಪಗಳುಳ್ಳ ಭೂಮಿಯೂ ಇವೆ; ಋಗ್ವೇದ, ಯಜುರ್ವೇದ, ಸಾಮವೇದ, ಅಥರ್ವವೇದಗಳು ಅಂಗಗಳ ಸಹಿತ ಕಲಶವನ್ನು ಆಶ್ರಯಿಸಿವೆ. ಇಲ್ಲಿ ಗಾಯತ್ರೀ, ಸಾವಿತ್ರೀ, ಶಾಂತಿ ಮತ್ತು ಪುಷ್ಟಿಯನ್ನು ಕೊಡುವ ಶಕ್ತಿಗಳೂ ಇವೆ.',
          },
        },
        {
          text: 'सर्वे समुद्राः सरितस्तीर्थानि जलदा नदाः ।\nआयान्तु देवपूजार्थं दुरितक्षयकारकाः ॥',
          meaning: {
            en: 'May all the oceans, rivers, holy waters, clouds and streams, which destroy sin, come here for the worship of the Lord.',
            kn: 'ಪಾಪನಾಶಕವಾದ ಎಲ್ಲ ಸಮುದ್ರಗಳೂ ನದಿಗಳೂ ತೀರ್ಥಗಳೂ ಮೋಡಗಳೂ ಪ್ರವಾಹಗಳೂ ದೇವರ ಪೂಜೆಗಾಗಿ ಇಲ್ಲಿಗೆ ಬರಲಿ.',
          },
        },
        {
          text: 'गङ्गे च यमुने चैव गोदावरि सरस्वति ।\nनर्मदे सिन्धु कावेरि जलेऽस्मिन् सन्निधिं कुरु ॥',
          meaning: {
            en: 'O Ganga, Yamuna, Godavari, Sarasvati, Narmada, Sindhu and Kaveri, be present in this water.',
            kn: 'ಓ ಗಂಗೆ, ಯಮುನೆ, ಗೋದಾವರಿ, ಸರಸ್ವತಿ, ನರ್ಮದೆ, ಸಿಂಧು, ಕಾವೇರಿ ನದಿಗಳೇ, ಈ ಜಲದಲ್ಲಿ ಸಾನ್ನಿಧ್ಯವನ್ನು ನೀಡಿರಿ.',
          },
        },
        {
          text: 'इमं मे वरुण श्रुधी हवमद्या च मृळय ।\nत्वामवस्युरा चके ॥',
          meaning: {
            en: 'O Varuna, hear this call of mine and be gracious to us today; longing for your protection I call upon you. (Rigveda 1.25.19; Varuna is invited into the kalasha.)',
            kn: 'ಓ ವರುಣನೇ, ನನ್ನ ಈ ಕರೆಯನ್ನು ಕೇಳು, ಇಂದು ನಮಗೆ ಸುಖವನ್ನು ಕೊಡು; ನಿನ್ನ ರಕ್ಷಣೆಯನ್ನು ಬಯಸಿ ನಿನ್ನನ್ನು ಕರೆಯುತ್ತೇನೆ. (ಋಗ್ವೇದ ೧.೨೫.೧೯; ಕಲಶದಲ್ಲಿ ವರುಣನ ಆವಾಹನೆ.)',
          },
        },
        {
          text: 'अस्य यजमानस्य पुण्याहं भवन्तो ब्रुवन्तु । ॐ पुण्याहम् ।\nअस्य यजमानस्य स्वस्ति भवन्तो ब्रुवन्तु । ॐ स्वस्ति ।\nअस्य यजमानस्य ऋद्धिं भवन्तो ब्रुवन्तु । ॐ ऋद्धिरस्तु ॥',
          meaning: {
            en: 'May you declare this day holy for this yajamana — "Om, it is a holy day." May you declare well-being for him — "Om, well-being." May you declare prosperity for him — "Om, may there be prosperity." (Each call is said three times.)',
            kn: 'ಈ ಯಜಮಾನನಿಗೆ ಇದು ಪುಣ್ಯದಿನವೆಂದು ನೀವು ಹೇಳಿರಿ — “ಓಂ, ಪುಣ್ಯಾಹ.” ಇವನಿಗೆ ಸ್ವಸ್ತಿಯನ್ನು ಹೇಳಿರಿ — “ಓಂ, ಸ್ವಸ್ತಿ.” ಇವನಿಗೆ ಸಮೃದ್ಧಿಯನ್ನು ಹೇಳಿರಿ — “ಓಂ, ಸಮೃದ್ಧಿಯಾಗಲಿ.” (ಪ್ರತಿ ಕರೆಯೂ ಮೂರು ಬಾರಿ.)',
          },
        },
        {
          text: 'अपवित्रः पवित्रो वा सर्वावस्थां गतोऽपि वा ।\nयः स्मरेत्पुण्डरीकाक्षं स बाह्याभ्यन्तरः शुचिः ॥',
          meaning: {
            en: 'Whether pure or impure, in whatever state one may be, whoever remembers the lotus-eyed Lord becomes clean within and without. (Said while sprinkling the kalasha water.)',
            kn: 'ಶುದ್ಧನಾಗಿರಲಿ ಅಶುದ್ಧನಾಗಿರಲಿ, ಯಾವ ಸ್ಥಿತಿಯಲ್ಲಿದ್ದರೂ, ಕಮಲನಯನನಾದ ಶ್ರೀಹರಿಯನ್ನು ಸ್ಮರಿಸುವವನು ಒಳಗೂ ಹೊರಗೂ ಶುದ್ಧನಾಗುತ್ತಾನೆ. (ಕಲಶಜಲವನ್ನು ಪ್ರೋಕ್ಷಿಸುವಾಗ.)',
          },
        },
      ],
    },
    {
      title: 'स्थण्डिलसंस्कारः',
      titleEn: 'Preparing the sthandila: the six lines',
      note: 'Smear the sthandila (or the floor of the kunda) and decorate it with rangoli; in Udupi and coastal usage two lines are drawn along each side with ashvattha-leaf shapes in the four directions and lotus shapes in the corners (Homa-Havana). With the root of a sacrificial stick (or the handle of the sruva) draw six lines, each a span long: first one line running south to north at the west; then from its two ends two lines running west to east, not touching it; between them three more lines west to east (Ashvalayana Grihya Sutra 1.3.1). In the lines remember Brahma, Vishnu, Rudra, Uma, Lakshmi and Sarasvati. Lay the stick on the lines pointing north, sprinkle the sthandila with water, break the stick and throw it to the south-west, touch water, and from now keep silence except for the mantras.',
      noteKn: 'ಸ್ಥಂಡಿಲವನ್ನು (ಅಥವಾ ಕುಂಡದ ತಳವನ್ನು) ಸಾರಿಸಿ ರಂಗೋಲಿಯಿಂದ ಅಲಂಕರಿಸಿ; ಉಡುಪಿ–ಕರಾವಳಿಯಲ್ಲಿ ಪ್ರತಿ ಬದಿಯಲ್ಲಿ ಎರಡೆರಡು ರೇಖೆಗಳು, ನಾಲ್ಕು ದಿಕ್ಕುಗಳಲ್ಲಿ ಅಶ್ವತ್ಥದಳದ ಆಕೃತಿ, ಮೂಲೆಗಳಲ್ಲಿ ಪದ್ಮಾಕೃತಿ ಬರೆಯುತ್ತಾರೆ (ಹೋಮ–ಹವನ). ಯಜ್ಞೀಯ ಕಟ್ಟಿಗೆಯ ಬುಡದಿಂದ (ಅಥವಾ ಸ್ರುವದ ಹಿಡಿಯಿಂದ) ಗೇಣುದ್ದದ ಆರು ರೇಖೆಗಳನ್ನು ಬರೆಯಿರಿ: ಮೊದಲು ಪಶ್ಚಿಮದಲ್ಲಿ ದಕ್ಷಿಣದಿಂದ ಉತ್ತರಕ್ಕೆ ಒಂದು ರೇಖೆ; ಅದರ ಎರಡು ತುದಿಗಳಿಂದ, ಅದನ್ನು ಮುಟ್ಟದಂತೆ, ಪಶ್ಚಿಮದಿಂದ ಪೂರ್ವಕ್ಕೆ ಎರಡು ರೇಖೆಗಳು; ಅವುಗಳ ನಡುವೆ ಪಶ್ಚಿಮದಿಂದ ಪೂರ್ವಕ್ಕೆ ಇನ್ನೂ ಮೂರು ರೇಖೆಗಳು (ಆಶ್ವಲಾಯನ ಗೃಹ್ಯಸೂತ್ರ ೧.೩.೧). ರೇಖೆಗಳಲ್ಲಿ ಬ್ರಹ್ಮ, ವಿಷ್ಣು, ರುದ್ರ, ಉಮಾ, ಲಕ್ಷ್ಮೀ, ಸರಸ್ವತಿಯರನ್ನು ಸ್ಮರಿಸಿ. ಕಟ್ಟಿಗೆಯನ್ನು ಉತ್ತರಾಗ್ರವಾಗಿ ರೇಖೆಗಳ ಮೇಲಿಟ್ಟು, ಸ್ಥಂಡಿಲಕ್ಕೆ ನೀರು ಪ್ರೋಕ್ಷಿಸಿ, ಕಟ್ಟಿಗೆಯನ್ನು ಮುರಿದು ನೈರುತ್ಯಕ್ಕೆ ಎಸೆದು, ನೀರು ಮುಟ್ಟಿ; ಇನ್ನು ಮುಂದೆ ಮಂತ್ರಗಳ ಹೊರತು ಮೌನವಾಗಿರಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'ब्रह्मा विष्णुश्च रुद्रश्च उमा लक्ष्मीः सरस्वती ।\nषड्रेखादेवताः प्रोक्ताः स्थण्डिलोल्लेखनक्रमात् ॥',
          meaning: {
            en: 'Brahma, Vishnu, Rudra, Uma, Lakshmi and Sarasvati are declared the deities of the six lines, in the order in which the sthandila is marked.',
            kn: 'ಸ್ಥಂಡಿಲದಲ್ಲಿ ರೇಖೆಗಳನ್ನು ಬರೆಯುವ ಕ್ರಮದಲ್ಲಿ ಬ್ರಹ್ಮ, ವಿಷ್ಣು, ರುದ್ರ, ಉಮಾ, ಲಕ್ಷ್ಮೀ, ಸರಸ್ವತೀ — ಇವರು ಆರು ರೇಖೆಗಳ ದೇವತೆಗಳೆಂದು ಹೇಳಲಾಗಿದೆ.',
          },
        },
      ],
    },
    {
      title: 'स्थण्डिलसंस्कारः',
      titleEn: 'Preparing the sthandila: the lines',
      note: 'Smear the sthandila (or the floor of the kunda), sprinkle it with rice flour or decorate it with rangoli, and smooth it with the hand. Holding a darbha or a chip of wood between thumb and ring finger, draw three lines from west to east, beginning in the south, and three from south to north across them, beginning in the west (Muddu Shrauti; Apastamba Grihya Sutra as the commentators explain the lekhana). The Mylapore manual has the lines drawn with the verses ब्रह्म जज्ञानम्, नाके सुपर्णम्, आप्यायस्व, यो रुद्रो अग्नौ, इदं विष्णुः and इन्द्रं विश्वा, one for each line; the sutra and Muddu Shrauti draw them silently. Lay the darbha on the lines, sprinkle the sthandila with water, throw the darbha to the south-west and touch water.',
      noteKn: 'ಸ್ಥಂಡಿಲವನ್ನು (ಅಥವಾ ಕುಂಡದ ತಳವನ್ನು) ಸಾರಿಸಿ, ಅಕ್ಕಿಹಿಟ್ಟು ಅಥವಾ ರಂಗೋಲಿಯಿಂದ ಅಲಂಕರಿಸಿ, ಕೈಯಿಂದ ಸಮಗೊಳಿಸಿ. ಹೆಬ್ಬೆರಳು–ಉಂಗುರಬೆರಳುಗಳ ನಡುವೆ ದರ್ಭೆ ಅಥವಾ ಸಮಿಧೆಯ ಚೂರು ಹಿಡಿದು, ದಕ್ಷಿಣದಿಂದ ಆರಂಭಿಸಿ ಪಶ್ಚಿಮದಿಂದ ಪೂರ್ವಕ್ಕೆ ಮೂರು ರೇಖೆ, ಪಶ್ಚಿಮದಿಂದ ಆರಂಭಿಸಿ ದಕ್ಷಿಣದಿಂದ ಉತ್ತರಕ್ಕೆ ಅಡ್ಡವಾಗಿ ಮೂರು ರೇಖೆ ಎಳೆಯಿರಿ (ಮುದ್ದು ಶ್ರೌತಿ; ಆಪಸ್ತಂಬ ಗೃಹ್ಯಸೂತ್ರ ವ್ಯಾಖ್ಯಾನ). ಮೈಲಾಪುರ ಗ್ರಂಥದಲ್ಲಿ ಪ್ರತಿ ರೇಖೆಗೂ ಒಂದು ಮಂತ್ರ (ಬ್ರಹ್ಮ ಜಜ್ಞಾನಮ್, ನಾಕೇ ಸುಪರ್ಣಮ್, ಆಪ್ಯಾಯಸ್ವ, ಯೋ ರುದ್ರೋ ಅಗ್ನೌ, ಇದಂ ವಿಷ್ಣುಃ, ಇಂದ್ರಂ ವಿಶ್ವಾ); ಸೂತ್ರ ಮತ್ತು ಮುದ್ದು ಶ್ರೌತಿ ಮೌನವಾಗಿ ಎಳೆಯಲು ಹೇಳುತ್ತಾರೆ. ದರ್ಭೆಯನ್ನು ರೇಖೆಗಳ ಮೇಲೆ ಇಟ್ಟು, ಸ್ಥಂಡಿಲಕ್ಕೆ ನೀರು ಪ್ರೋಕ್ಷಿಸಿ, ದರ್ಭೆಯನ್ನು ನೈಋತ್ಯಕ್ಕೆ ಎಸೆದು ನೀರು ಮುಟ್ಟಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'प्राचीरुदीचीश्च तिस्रस्तिस्रो लेखा लिखित्वा अद्भिरवोक्ष्य ॥',
          meaning: {
            en: 'Having drawn three lines running east and three running north, and sprinkled them with water… (the Apastamba instruction for marking the place of the fire)',
            kn: 'ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ಮೂರು, ಉತ್ತರಾಭಿಮುಖವಾಗಿ ಮೂರು ರೇಖೆಗಳನ್ನು ಬರೆದು, ನೀರಿನಿಂದ ಪ್ರೋಕ್ಷಿಸಿ… (ಅಗ್ನಿಯ ಸ್ಥಾನವನ್ನು ಗುರುತಿಸುವ ಆಪಸ್ತಂಬ ವಿಧಿ)',
          },
        },
      ],
    },
    {
      title: 'अग्निप्रतिष्ठापनम्',
      titleEn: 'Bringing and installing the fire',
      note: 'The best fire is churned from arani sticks; next, fire brought from the house of a shrotriya; otherwise fire from your own hearth; never from a cremation ground, a kitchen where meat is cooked, or a smoky fire. Suvasinis bring burning smokeless coals in a clay or copper dish covered with another, and set it in the south-east of the sthandila (Homa-Havana). In the kunda remember Svaha (red-clad, seated in the lap of her lord Agni), Bharati within her, and within Bharati Lakshmi in the form of Harini (M1; the Svaha and Bharati verses are not printed here), and the Lord within yourself, with the first two verses. With a darbha lit from the fire and the Sudarshana astra mantra, throw a little of the fire (its kravyada part, the flesh-eating fire of the pyre) to the south-west and wash your hands (Homa-Havana). Invite Agni with the two Rigvedic verses, scattering akshata, uncover the dish, then lay the coals on the six lines with the vyahritis, naming the fire according to the rite (Homa-Havana: Varada for shanti, Balavardhana for paushtika, Vitapa for prayaschitta). Sprinkle akshata-water into the empty dish, add fuel and tulasi wood, and blow the fire alight with a bamboo tube.',
      noteKn: 'ಅರಣಿಮಥನದ ಅಗ್ನಿ ಶ್ರೇಷ್ಠ; ನಂತರ ಶ್ರೋತ್ರಿಯರ ಮನೆಯಿಂದ ತಂದ ಅಗ್ನಿ; ಇಲ್ಲವೇ ಸ್ವಗೃಹದ ಒಲೆಯ ಅಗ್ನಿ; ಸ್ಮಶಾನ, ಮಾಂಸ ಬೇಯಿಸುವ ಅಡುಗೆಮನೆ, ಹೊಗೆಯಾಡುವ ಬೆಂಕಿ ಬೇಡ. ಸುವಾಸಿನಿಯರು ಹೊಗೆಯಿಲ್ಲದ ಕೆಂಡವನ್ನು ಮಣ್ಣು ಅಥವಾ ತಾಮ್ರದ ತಟ್ಟೆಯಲ್ಲಿ ಇನ್ನೊಂದರಿಂದ ಮುಚ್ಚಿ ತಂದು ಸ್ಥಂಡಿಲದ ಆಗ್ನೇಯದಲ್ಲಿ ಇಡುತ್ತಾರೆ (ಹೋಮ–ಹವನ). ಕುಂಡದಲ್ಲಿ ಸ್ವಾಹಾದೇವಿಯನ್ನು (ಕೆಂಪು ವಸ್ತ್ರದವಳು, ಪತಿ ಅಗ್ನಿಯ ತೊಡೆಯ ಮೇಲೆ), ಅವಳೊಳಗೆ ಭಾರತಿಯನ್ನು, ಭಾರತಿಯೊಳಗೆ ಹರಿಣೀರೂಪಿಣಿ ಲಕ್ಷ್ಮಿಯನ್ನು (ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ; ಸ್ವಾಹಾ, ಭಾರತೀ ಶ್ಲೋಕಗಳನ್ನು ಇಲ್ಲಿ ಮುದ್ರಿಸಿಲ್ಲ), ತನ್ನೊಳಗೆ ಹರಿಯನ್ನು ಮೊದಲ ಎರಡು ಶ್ಲೋಕಗಳಿಂದ ಸ್ಮರಿಸಿ. ಅಗ್ನಿಯಿಂದ ಹಚ್ಚಿದ ದರ್ಭೆಯಿಂದ, ಸುದರ್ಶನ ಅಸ್ತ್ರಮಂತ್ರ ಹೇಳುತ್ತ, ಅಗ್ನಿಯ ಸ್ವಲ್ಪ ಭಾಗವನ್ನು (ಕ್ರವ್ಯಾದ, ಚಿತೆಯ ಮಾಂಸಭಕ್ಷಕ ಅಗ್ನಿ) ನೈಋತ್ಯಕ್ಕೆ ಎಸೆದು ಕೈ ತೊಳೆಯಿರಿ (ಹೋಮ–ಹವನ). ಎರಡು ಋಙ್ಮಂತ್ರಗಳಿಂದ ಅಕ್ಷತೆ ಹಾಕಿ ಅಗ್ನಿಯನ್ನು ಆವಾಹಿಸಿ, ತಟ್ಟೆಯ ಮುಚ್ಚಳ ತೆಗೆದು, ವ್ಯಾಹೃತಿಗಳಿಂದ ಕೆಂಡವನ್ನು ಆರು ರೇಖೆಗಳ ಮೇಲೆ ಇಡಿ; ಕರ್ಮಕ್ಕೆ ತಕ್ಕ ಅಗ್ನಿಯ ಹೆಸರು ಹೇಳಿ (ಶಾಂತಿಗೆ ವರದ, ಪೌಷ್ಟಿಕಕ್ಕೆ ಬಲವರ್ಧನ, ಪ್ರಾಯಶ್ಚಿತ್ತಕ್ಕೆ ವಿಟಪ). ಖಾಲಿ ತಟ್ಟೆಗೆ ಅಕ್ಷತೆ–ನೀರು ಹಾಕಿ, ಸಮಿಧೆ–ತುಳಸೀಕಾಷ್ಠ ಇಟ್ಟು ಬಿದಿರಿನ ಕೊಳವೆಯಿಂದ ಊದಿ ಉರಿಸಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'तदात्मनि हरिं ध्यात्वा कुण्डे देवीं श्रियं तथा ।\nविष्णुवीर्यात्मकं वह्निं निक्षिपेत्प्रणवेन तु ॥',
          meaning: {
            en: 'Meditating on Hari within oneself and on the goddess Sri in the kunda, one should place the fire, which is the energy of Vishnu, with the pranava. (Tantrasara-sangraha 2.18)',
            kn: 'ತನ್ನೊಳಗೆ ಶ್ರೀಹರಿಯನ್ನೂ ಕುಂಡದಲ್ಲಿ ಶ್ರೀದೇವಿಯನ್ನೂ ಧ್ಯಾನಿಸಿ, ವಿಷ್ಣುವಿನ ವೀರ್ಯಸ್ವರೂಪವಾದ ಅಗ್ನಿಯನ್ನು ಪ್ರಣವದೊಡನೆ ಇಡಬೇಕು. (ತಂತ್ರಸಾರಸಂಗ್ರಹ ೨.೧೮)',
          },
        },
        {
          text: 'कौशेयपीतवसनामरविन्दनेत्रां\nपद्मद्वयाभयवरोद्यतपद्महस्ताम् ।\nउद्यच्छतार्कसदृशीं परमाङ्कसंस्थां\nध्यायेद्विधीशनुतपादयुगां जनित्रीम् ॥',
          meaning: {
            en: 'One should meditate on the Mother of all, clad in yellow silk, lotus-eyed, her lotus hands holding two lotuses and showing fearlessness and boons, bright as a hundred rising suns, seated in the lap of the Supreme Lord, whose two feet Brahma and Shiva praise. (Lakshmi in the kunda, as M1 has it; the same verse is the dhyana of the Lakshmi Hridaya.)',
            kn: 'ಹಳದಿ ರೇಷ್ಮೆ ಉಟ್ಟ, ಕಮಲನಯನೆಯಾದ, ಕಮಲಹಸ್ತಗಳಲ್ಲಿ ಎರಡು ಕಮಲಗಳನ್ನೂ ಅಭಯ–ವರಗಳನ್ನೂ ಧರಿಸಿದ, ನೂರು ಉದಯಸೂರ್ಯರಂತೆ ಹೊಳೆಯುವ, ಪರಮಾತ್ಮನ ತೊಡೆಯ ಮೇಲೆ ಕುಳಿತ, ಬ್ರಹ್ಮ–ರುದ್ರರು ಸ್ತುತಿಸುವ ಪಾದಯುಗಳುಳ್ಳ ಜಗನ್ಮಾತೆಯನ್ನು ಧ್ಯಾನಿಸಬೇಕು. (ಕುಂಡದಲ್ಲಿ ಲಕ್ಷ್ಮೀಧ್ಯಾನ, ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗದಂತೆ; ಇದೇ ಶ್ಲೋಕ ಲಕ್ಷ್ಮೀಹೃದಯದ ಧ್ಯಾನ.)',
          },
        },
        {
          text: 'ॐ सहस्रार हुं फट् ॥',
          meaning: {
            en: 'Om, O thousand-spoked (discus), hum phat. (The astra mantra of Sudarshana, said while the kravyada part of the fire is thrown to the south-west.)',
            kn: 'ಓಂ, ಸಾವಿರ ಅರಗಳುಳ್ಳ (ಚಕ್ರವೇ), ಹುಂ ಫಟ್. (ಸುದರ್ಶನನ ಅಸ್ತ್ರಮಂತ್ರ; ಅಗ್ನಿಯ ಕ್ರವ್ಯಾದ ಭಾಗವನ್ನು ನೈಋತ್ಯಕ್ಕೆ ಎಸೆಯುವಾಗ ಹೇಳುವುದು.)',
          },
        },
        {
          text: 'जुष्टो दमूना अतिथिर्दुरोण इमं नो यज्ञमुप याहि विद्वान् ।\nविश्वा अग्ने अभियुजो विहत्या शत्रूयतामा भरा भोजनानि ॥',
          meaning: {
            en: 'Beloved friend of the house, guest in our home, come to this sacrifice of ours, O knowing one. O Agni, strike down all who attack us and bring us the riches of those who are hostile. (Rigveda 5.4.5)',
            kn: 'ಪ್ರಿಯನಾದ ಗೃಹಮಿತ್ರನೇ, ನಮ್ಮ ಮನೆಯ ಅತಿಥಿಯೇ, ಜ್ಞಾನಿಯೇ, ನಮ್ಮ ಈ ಯಜ್ಞಕ್ಕೆ ಬಾ. ಓ ಅಗ್ನಿಯೇ, ನಮ್ಮನ್ನು ಆಕ್ರಮಿಸುವವರೆಲ್ಲರನ್ನೂ ನಾಶಮಾಡಿ, ವೈರಿಗಳ ಭೋಗ್ಯವಸ್ತುಗಳನ್ನು ನಮಗೆ ತಂದುಕೊಡು. (ಋಗ್ವೇದ ೫.೪.೫)',
          },
        },
        {
          text: 'एह्यग्न इह होता नि षीदादब्धः सु पुरएता भवा नः ।\nअवतां त्वा रोदसी विश्वमिन्वे यजा महे सौमनसाय देवान् ॥',
          meaning: {
            en: 'Come, O Agni, sit here as our priest; unharmed, be our leader. May heaven and earth, which pervade all, protect you; worship the gods for our great good will. (Rigveda 1.76.2; with these two verses akshata are offered to invite Agni.)',
            kn: 'ಓ ಅಗ್ನಿಯೇ, ಬಾ, ಇಲ್ಲಿ ಹೋತೃವಾಗಿ ಕುಳಿತುಕೋ; ಯಾರಿಂದಲೂ ಬಾಧಿಸಲ್ಪಡದೆ ನಮ್ಮ ಮುಂದಾಳುವಾಗು. ಎಲ್ಲವನ್ನೂ ವ್ಯಾಪಿಸಿರುವ ದ್ಯಾವಾಪೃಥಿವಿಗಳು ನಿನ್ನನ್ನು ರಕ್ಷಿಸಲಿ; ನಮ್ಮ ಸೌಮನಸ್ಯಕ್ಕಾಗಿ ದೇವತೆಗಳನ್ನು ಪೂಜಿಸು. (ಋಗ್ವೇದ ೧.೭೬.೨; ಈ ಎರಡು ಮಂತ್ರಗಳಿಂದ ಅಕ್ಷತೆ ಹಾಕಿ ಅಗ್ನಿಯ ಆವಾಹನೆ.)',
          },
        },
        {
          text: 'ॐ भूर्भुवः स्वः विष्णुवीर्यात्मकम् अमुकनामानम् अग्निं प्रतिष्ठापयामि ॥',
          meaning: {
            en: 'Om, earth, sky, heaven: I install the fire, the energy of Vishnu, called (by the name proper to this rite).',
            kn: 'ಓಂ ಭೂಃ ಭುವಃ ಸ್ವಃ — ವಿಷ್ಣುವೀರ್ಯಸ್ವರೂಪನಾದ, ಈ ಕರ್ಮಕ್ಕೆ ತಕ್ಕ ಹೆಸರಿನ ಅಗ್ನಿಯನ್ನು ಪ್ರತಿಷ್ಠಾಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'अग्निप्रतिष्ठापनम्',
      titleEn: 'Installing the fire',
      note: 'Place a few twigs on the sthandila. Bring the fire (fire from a shrotriya’s house or your own hearth, or kindle camphor in a copper dish), stand east of the sthandila facing west, and set it on the lines with भूर्भुवः सुवरोम् (Muddu Shrauti, Mylapore manual), naming the fire proper to the rite; some Apastamba manuals first recite the Purusha Sukta verse on the birth of Agni from the Lord’s mouth. Put akshata and water in the dish that brought the fire. Pour the rest of the water used for sprinkling to the east, set a fresh vessel of water there, put a samidh on the fire and fan it into flame.',
      noteKn: 'ಸ್ಥಂಡಿಲದ ಮೇಲೆ ಕೆಲವು ಕಡ್ಡಿಗಳನ್ನಿಡಿ. ಅಗ್ನಿಯನ್ನು ತಂದು (ಶ್ರೋತ್ರಿಯರ ಮನೆ ಅಥವಾ ಸ್ವಗೃಹದ ಒಲೆ, ಇಲ್ಲವೇ ತಾಮ್ರದ ತಟ್ಟೆಯಲ್ಲಿ ಕರ್ಪೂರ), ಸ್ಥಂಡಿಲದ ಪೂರ್ವದಲ್ಲಿ ಪಶ್ಚಿಮಾಭಿಮುಖವಾಗಿ ನಿಂತು “ಭೂರ್ಭುವಃ ಸುವರೋಮ್” ಎಂದು ರೇಖೆಗಳ ಮೇಲೆ ಇಡಿ (ಮುದ್ದು ಶ್ರೌತಿ, ಮೈಲಾಪುರ ಗ್ರಂಥ); ಕರ್ಮಕ್ಕೆ ತಕ್ಕ ಅಗ್ನಿಯ ಹೆಸರು ಹೇಳಿ; ಕೆಲವು ಆಪಸ್ತಂಬ ಗ್ರಂಥಗಳಲ್ಲಿ ಮೊದಲು ಪುರುಷಸೂಕ್ತದ “ಚಂದ್ರಮಾ ಮನಸೋ ಜಾತಃ” ಮಂತ್ರ. ಅಗ್ನಿ ತಂದ ತಟ್ಟೆಗೆ ಅಕ್ಷತೆ–ನೀರು ಹಾಕಿ. ಪ್ರೋಕ್ಷಣೆಯ ಉಳಿದ ನೀರನ್ನು ಪೂರ್ವಕ್ಕೆ ಚೆಲ್ಲಿ, ಅಲ್ಲಿ ಹೊಸ ನೀರಿನ ಪಾತ್ರೆ ಇಡಿ; ಸಮಿಧೆ ಇಟ್ಟು ಉರಿಸಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'चन्द्रमा मनसो जातः । चक्षोः सूर्यो अजायत ।\nमुखादिन्द्रश्चाग्निश्च । प्राणाद्वायुरजायत ॥',
          meaning: {
            en: 'The Moon was born from his mind, the Sun from his eye; from his mouth came Indra and Agni, from his breath the Wind. (Purusha Sukta, Taittiriya Aranyaka 3.12)',
            kn: 'ಅವನ ಮನಸ್ಸಿನಿಂದ ಚಂದ್ರ, ಕಣ್ಣಿನಿಂದ ಸೂರ್ಯ ಹುಟ್ಟಿದರು; ಮುಖದಿಂದ ಇಂದ್ರ–ಅಗ್ನಿಗಳು, ಪ್ರಾಣದಿಂದ ವಾಯು ಹುಟ್ಟಿದರು. (ಪುರುಷಸೂಕ್ತ, ತೈತ್ತಿರೀಯ ಆರಣ್ಯಕ ೩.೧೨)',
          },
        },
        {
          text: 'ॐ भूर्भुवः सुवरोम् ।\nअमुकनामानम् अग्निं प्रतिष्ठापयामि ॥',
          meaning: {
            en: 'Om, earth, sky, heaven: I install the fire called (by the name proper to this rite).',
            kn: 'ಓಂ ಭೂಃ ಭುವಃ ಸುವಃ — ಈ ಕರ್ಮಕ್ಕೆ ತಕ್ಕ ಹೆಸರಿನ ಅಗ್ನಿಯನ್ನು ಪ್ರತಿಷ್ಠಾಪಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'अग्निध्यानम्',
      titleEn: 'Meditation on Agni',
      note: 'With folded hands meditate on Agni with these Vedic verses: the four horns are the four Vedas, the three feet the three times (or svaras), the two heads the two kinds of fire, the seven hands the seven metres. In the second verse he is the one present in every direction, born before all, facing every way.',
      noteKn: 'ಕೈಮುಗಿದು ಈ ವೈದಿಕ ಮಂತ್ರಗಳಿಂದ ಅಗ್ನಿಯನ್ನು ಧ್ಯಾನಿಸಿ: ನಾಲ್ಕು ಕೊಂಬುಗಳು ನಾಲ್ಕು ವೇದಗಳು, ಮೂರು ಪಾದಗಳು ಮೂರು ಕಾಲಗಳು (ಅಥವಾ ಸ್ವರಗಳು), ಎರಡು ತಲೆಗಳು ಎರಡು ಬಗೆಯ ಅಗ್ನಿ, ಏಳು ಕೈಗಳು ಏಳು ಛಂದಸ್ಸುಗಳು. ಎರಡನೆಯ ಮಂತ್ರದಲ್ಲಿ ಅವನು ಎಲ್ಲ ದಿಕ್ಕುಗಳಲ್ಲಿರುವವನು, ಎಲ್ಲರಿಗಿಂತ ಮೊದಲು ಹುಟ್ಟಿದವನು, ಎಲ್ಲ ಕಡೆ ಮುಖವುಳ್ಳವನು.',
      verses: [
        {
          text: 'चत्वारि शृङ्गा त्रयो अस्य पादा द्वे शीर्षे सप्त हस्तासो अस्य ।\nत्रिधा बद्धो वृषभो रोरवीति महो देवो मर्त्याँ आ विवेश ॥',
          meaning: {
            en: 'Four are his horns, three his feet, two his heads, seven his hands; bound in three ways, the bull roars aloud; the great god has entered into mortals. (Rigveda 4.58.3)',
            kn: 'ಅವನಿಗೆ ನಾಲ್ಕು ಕೊಂಬುಗಳು, ಮೂರು ಪಾದಗಳು, ಎರಡು ತಲೆಗಳು, ಏಳು ಕೈಗಳು; ಮೂರು ಬಗೆಯಲ್ಲಿ ಬಂಧಿತನಾದ ವೃಷಭನು ಗರ್ಜಿಸುತ್ತಾನೆ; ಆ ಮಹಾದೇವನು ಮನುಷ್ಯರೊಳಗೆ ಪ್ರವೇಶಿಸಿದ್ದಾನೆ. (ಋಗ್ವೇದ ೪.೫೮.೩)',
          },
        },
        {
          text: 'एष हि देवः प्रदिशोऽनु सर्वाः पूर्वो हि जातः स उ गर्भे अन्तः ।\nस विजायमानः स जनिष्यमाणः प्रत्यङ्मुखास्तिष्ठति विश्वतोमुखः ॥',
          meaning: {
            en: 'This god indeed pervades all the directions; he was born first and he is within the womb; he is being born and will be born; facing every way, he stands before all beings.',
            kn: 'ಈ ದೇವನೇ ಎಲ್ಲ ದಿಕ್ಕುಗಳನ್ನೂ ವ್ಯಾಪಿಸಿದ್ದಾನೆ; ಎಲ್ಲರಿಗಿಂತ ಮೊದಲು ಹುಟ್ಟಿದವನು, ಗರ್ಭದೊಳಗೂ ಇರುವವನು; ಹುಟ್ಟುತ್ತಿರುವವನೂ ಮುಂದೆ ಹುಟ್ಟುವವನೂ ಅವನೇ; ಎಲ್ಲ ಕಡೆ ಮುಖವುಳ್ಳವನಾಗಿ ಎಲ್ಲ ಜೀವಿಗಳ ಎದುರು ನಿಂತಿದ್ದಾನೆ.',
          },
        },
      ],
    },
    {
      title: 'अग्न्यन्तर्गतभगवद्ध्यानम्',
      titleEn: 'Mukhyaprana and Parashurama within Agni',
      note: 'In the fire meditate on Mukhyaprana (Vayu) seated in the lap of Achyuta, and within him on Harinipati Parashurama; then pray to Agni, facing west towards you, to be gracious. Then do the anvadhana: say the deshakala again and the sankalpa अस्मिन्… होमकर्मणि देवतापरिग्रहार्थम् अन्वाधानं करिष्ये; take two samidhs in the hand and recite the list of the deities who will receive offerings, naming in place of अमुक the deity, count and material of the pradhana homa as the homa text gives them (if the homa has pitha or avarana deities, name them there too); then lay the two samidhs on the fire with the vyahriti offering below. Elders are asked: अन्वाधानमुहूर्तः सुमुहूर्तोऽस्त्विति अनुगृह्णन्तु, and answer सुमुहूर्तोऽस्तु (M1).',
      noteKn: 'ಅಗ್ನಿಯಲ್ಲಿ ಅಚ್ಯುತನ ತೊಡೆಯ ಮೇಲೆ ಕುಳಿತ ಮುಖ್ಯಪ್ರಾಣರನ್ನು, ಅವರೊಳಗೆ ಹರಿಣೀಪತಿ ಪರಶುರಾಮನನ್ನು ಧ್ಯಾನಿಸಿ; ನಂತರ ಪಶ್ಚಿಮಾಭಿಮುಖನಾಗಿ ತನ್ನತ್ತ ತಿರುಗಿ ಪ್ರಸನ್ನನಾಗಲು ಅಗ್ನಿಯನ್ನು ಪ್ರಾರ್ಥಿಸಿ. ಆಮೇಲೆ ಅನ್ವಾಧಾನ: ಮತ್ತೆ ದೇಶಕಾಲ ಹೇಳಿ “ಅಸ್ಮಿನ್… ಹೋಮಕರ್ಮಣಿ ದೇವತಾಪರಿಗ್ರಹಾರ್ಥಂ ಅನ್ವಾಧಾನಂ ಕರಿಷ್ಯೇ” ಎಂದು ಸಂಕಲ್ಪಿಸಿ; ಎರಡು ಸಮಿಧೆ ಕೈಯಲ್ಲಿ ಹಿಡಿದು ಆಹುತಿ ಪಡೆಯುವ ದೇವತೆಗಳ ಪಟ್ಟಿಯನ್ನು ಹೇಳಿ — “ಅಮುಕ”ದ ಸ್ಥಳದಲ್ಲಿ ಹೋಮದ ಪಠ್ಯ ಕೊಟ್ಟ ಪ್ರಧಾನ ದೇವತೆ, ಸಂಖ್ಯೆ, ದ್ರವ್ಯ (ಪೀಠ/ಆವರಣ ದೇವತೆಗಳಿದ್ದರೆ ಅವರನ್ನೂ) ಹೇಳಿ; ನಂತರ ಕೆಳಗಿನ ವ್ಯಾಹೃತಿ ಆಹುತಿಯೊಡನೆ ಎರಡು ಸಮಿಧೆಗಳನ್ನು ಅಗ್ನಿಗೆ ಇಡಿ. ಹಿರಿಯರನ್ನು “ಅನ್ವಾಧಾನಮುಹೂರ್ತಃ ಸುಮುಹೂರ್ತೋಸ್ತ್ವಿತಿ ಅನುಗೃಹ್ಣಂತು” ಎಂದು ಕೇಳಿದಾಗ ಅವರು “ಸುಮುಹೂರ್ತೋಸ್ತು” ಎನ್ನುತ್ತಾರೆ (ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ).',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'उद्यद्रविप्रकरसन्निभमच्युताङ्के\nस्वासीनमस्य नुतिनित्यवचःप्रवृत्तिम् ।\nध्यायेद्गदाभयकरं सुकृताञ्जलिं तं\nप्राणं यथेष्टतनुमुन्नतकर्मशक्तिम् ॥',
          meaning: {
            en: 'One should meditate on Prana (Vayu), bright as a mass of rising suns, seated well in the lap of Achyuta, whose speech is ever engaged in praising him, holding the mace and showing the gesture of fearlessness, with hands joined in devotion, taking whatever form he wishes, of lofty power of action. (Tantrasara-sangraha 4.69)',
            kn: 'ಉದಯಿಸುವ ಸೂರ್ಯರ ಸಮೂಹದಂತೆ ಹೊಳೆಯುವ, ಅಚ್ಯುತನ ಅಂಕದಲ್ಲಿ ಚೆನ್ನಾಗಿ ಕುಳಿತಿರುವ, ಯಾವಾಗಲೂ ಅವನ ಸ್ತುತಿಯಲ್ಲೇ ಮಾತು ತೊಡಗಿರುವ, ಗದೆ–ಅಭಯ ಹಸ್ತವುಳ್ಳ, ಭಕ್ತಿಯಿಂದ ಅಂಜಲಿ ಜೋಡಿಸಿದ, ಇಚ್ಛಿಸಿದ ರೂಪ ಧರಿಸಬಲ್ಲ, ಮಹಾ ಕರ್ಮಶಕ್ತಿಯುಳ್ಳ ಪ್ರಾಣದೇವರನ್ನು ಧ್ಯಾನಿಸಬೇಕು. (ತಂತ್ರಸಾರಸಂಗ್ರಹ ೪.೬೯)',
          },
        },
        {
          text: 'अङ्गारवर्णमभितोऽण्डबहिः प्रभाभि-\nर्व्याप्तं परश्वधधनुर्धरमेकवीरम् ।\nध्यायेदजेशपुरुहूतमुखैः स्तुवद्भि-\nरावीतमात्मपदवीं प्रतिपादयन्तम् ॥',
          meaning: {
            en: 'One should meditate on Parashurama, the colour of glowing embers, whose radiance fills all within and beyond the cosmic egg, bearing axe and bow, the matchless hero, surrounded by Brahma, Shiva, Indra and the others singing his praise, who leads souls to their true state. (Tantrasara-sangraha 4.35)',
            kn: 'ಕೆಂಡದ ಬಣ್ಣದ, ತನ್ನ ಪ್ರಭೆಯಿಂದ ಬ್ರಹ್ಮಾಂಡದ ಒಳಗೂ ಹೊರಗೂ ವ್ಯಾಪಿಸಿರುವ, ಕೊಡಲಿ–ಧನುಸ್ಸುಗಳನ್ನು ಧರಿಸಿದ, ಅದ್ವಿತೀಯ ವೀರನಾದ, ಬ್ರಹ್ಮ–ರುದ್ರ–ಇಂದ್ರಾದಿಗಳು ಸ್ತುತಿಸುತ್ತಾ ಸುತ್ತುವರಿದಿರುವ, ಜೀವರಿಗೆ ಅವರ ಸ್ವರೂಪಪದವಿಯನ್ನು ಕೊಡುವ ಪರಶುರಾಮನನ್ನು ಧ್ಯಾನಿಸಬೇಕು. (ತಂತ್ರಸಾರಸಂಗ್ರಹ ೪.೩೫)',
          },
        },
        {
          text: 'हे अग्ने शाण्डिल्यगोत्र मेषध्वज वैश्वानर प्राङ्मुखो देव\nअग्न्यन्तर्गत श्रीभारतीरमणमुख्यप्राणान्तर्गत हरिणीपते परशुराम\nप्रत्यङ्मुखः सन् मम अभिमुखो वरदः सुप्रसन्नो भव ॥',
          meaning: {
            en: 'O Agni of the Shandilya gotra, with the ram on your banner, Vaishvanara, god who faces east; O Parashurama, Lord of Harini, who dwell within Agni and within Mukhyaprana, the beloved of Bharati: facing west, turn towards me, grant boons and be fully gracious.',
            kn: 'ಓ ಶಾಂಡಿಲ್ಯಗೋತ್ರದ, ಮೇಷಧ್ವಜನಾದ ವೈಶ್ವಾನರ ಅಗ್ನಿಯೇ, ಪೂರ್ವಾಭಿಮುಖ ದೇವನೇ; ಅಗ್ನಿಯೊಳಗೂ ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣರೊಳಗೂ ಇರುವ ಹರಿಣೀಪತಿ ಪರಶುರಾಮನೇ, ಪಶ್ಚಿಮಾಭಿಮುಖನಾಗಿ ನನಗೆ ಅಭಿಮುಖನಾಗು, ವರದನಾಗು, ಸುಪ್ರಸನ್ನನಾಗು.',
          },
        },
        {
          text: 'अस्मिन्नन्वाहिताग्नौ जातवेदसमग्निमिध्मेन प्रजापतिं प्रजापतिं चाघाराभ्याम्\nअग्नीषोमौ चक्षुषी आज्येन ।\nअग्नेर्वैष्णवत्वसिद्ध्यर्थं मूलमन्त्रेण नारायणमष्टवारं द्वादशाक्षरमन्त्रेण वासुदेवं द्वादशवारं\nपुरुषसूक्तेन प्रत्यृचं सकृत्सकृन्महापुरुषं विष्णुषडक्षरमन्त्रेण विष्णुं षड्वारमाज्येन ।\nअत्र प्रधानम् अमुकदेवताम् अमुकसङ्ख्यया अमुकद्रव्येण ।\nशेषेण स्विष्टकृतम् इध्मसन्नहनेन रुद्रम्\nअयासमग्निं देवान्विष्णुमग्निं वायुं सूर्यं प्रजापतिं चैताः प्रायश्चित्तदेवता आज्येन ।\nज्ञाताज्ञातकृतदोषनिर्हरणार्थमग्निं त्रिवारं मरुतश्चाज्येन विश्वान्देवान्संस्रावेण ।\nअङ्गदेवताः प्रधानदेवताश्च सर्वाः सन्निहिताः सन्तु । एवं साङ्गेन कर्मणा सद्यो यक्ष्ये ॥',
          meaning: {
            en: 'In this fire, now set down, I shall worship: Agni Jatavedas with the idhma; Prajapati and Prajapati with the two aghara streams; Agni and Soma, the two eyes, with ghee; to make the fire Vaishnava, Narayana eight times with the mula mantra, Vasudeva twelve times with the twelve-syllable mantra, Mahapurusha once with each verse of the Purusha Sukta and Vishnu six times with the six-syllable mantra, with ghee; here as the main offering the deity of this homa, with its count and material; with the remainder Svishtakrit; Rudra with the string that bound the idhma; Ayas Agni, the gods, Vishnu, Agni, Vayu, Surya and Prajapati, the deities of expiation, with ghee; Agni three times and the Maruts with ghee to remove faults known and unknown; the Vishvedevas with the samsrava. May all the subsidiary and main deities be present; thus I shall worship at once with the rite and all its parts. (Anvadhana, M1; the same list in the Sudarshana Kalpa.)',
            kn: 'ಈಗ ಇಟ್ಟ ಈ ಅಗ್ನಿಯಲ್ಲಿ ನಾನು ಪೂಜಿಸುವೆನು: ಜಾತವೇದ ಅಗ್ನಿಯನ್ನು ಇಧ್ಮದಿಂದ; ಎರಡು ಆಘಾರಗಳಿಂದ ಪ್ರಜಾಪತಿಯನ್ನು; ಚಕ್ಷುಸ್ಸುಗಳಾದ ಅಗ್ನಿ–ಸೋಮರನ್ನು ಆಜ್ಯದಿಂದ; ಅಗ್ನಿಯ ವೈಷ್ಣವತ್ವಕ್ಕಾಗಿ ಮೂಲಮಂತ್ರದಿಂದ ನಾರಾಯಣನನ್ನು ಎಂಟು ಬಾರಿ, ದ್ವಾದಶಾಕ್ಷರದಿಂದ ವಾಸುದೇವನನ್ನು ಹನ್ನೆರಡು ಬಾರಿ, ಪುರುಷಸೂಕ್ತದ ಪ್ರತಿ ಋಕ್ಕಿನಿಂದ ಒಮ್ಮೆ ಮಹಾಪುರುಷನನ್ನು, ವಿಷ್ಣು ಷಡಕ್ಷರದಿಂದ ವಿಷ್ಣುವನ್ನು ಆರು ಬಾರಿ ಆಜ್ಯದಿಂದ; ಇಲ್ಲಿ ಪ್ರಧಾನವಾಗಿ ಈ ಹೋಮದ ದೇವತೆಯನ್ನು ಅದರ ಸಂಖ್ಯೆ–ದ್ರವ್ಯಗಳಿಂದ; ಶೇಷದಿಂದ ಸ್ವಿಷ್ಟಕೃತ್ತನ್ನು; ಇಧ್ಮದ ಕಟ್ಟುಹಗ್ಗದಿಂದ ರುದ್ರನನ್ನು; ಅಯಸ್ ಅಗ್ನಿ, ದೇವತೆಗಳು, ವಿಷ್ಣು, ಅಗ್ನಿ, ವಾಯು, ಸೂರ್ಯ, ಪ್ರಜಾಪತಿ ಎಂಬ ಪ್ರಾಯಶ್ಚಿತ್ತ ದೇವತೆಗಳನ್ನು ಆಜ್ಯದಿಂದ; ತಿಳಿದು ತಿಳಿಯದೆ ಮಾಡಿದ ದೋಷಗಳ ನಿವಾರಣೆಗೆ ಅಗ್ನಿಯನ್ನು ಮೂರು ಬಾರಿ, ಮರುತ್ತುಗಳನ್ನು ಆಜ್ಯದಿಂದ; ವಿಶ್ವೇದೇವತೆಗಳನ್ನು ಸಂಸ್ರಾವದಿಂದ. ಎಲ್ಲ ಅಂಗದೇವತೆಗಳೂ ಪ್ರಧಾನದೇವತೆಗಳೂ ಸನ್ನಿಹಿತರಾಗಲಿ; ಹೀಗೆ ಸಾಂಗವಾದ ಕರ್ಮದಿಂದ ಈಗಲೇ ಪೂಜಿಸುವೆನು. (ಅನ್ವಾಧಾನ, ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ; ಸುದರ್ಶನಕಲ್ಪದಲ್ಲೂ ಇದೇ ಪಟ್ಟಿ.)',
          },
        },
        {
          text: 'ॐ भूर्भुवः स्वः स्वाहा । प्रजापतये श्रीवासुदेवाय इदं न मम ॥',
          meaning: {
            en: 'Om, earth, sky, heaven, svaha: this is for Prajapati and for Sri Vasudeva within him, not for me. (With two samidhs at the anvadhana.)',
            kn: 'ಓಂ ಭೂಃ ಭುವಃ ಸ್ವಃ ಸ್ವಾಹಾ — ಇದು ಪ್ರಜಾಪತಿಗೂ ಅವನೊಳಗಿನ ಶ್ರೀವಾಸುದೇವನಿಗೂ, ನನ್ನದಲ್ಲ. (ಅನ್ವಾಧಾನದಲ್ಲಿ ಎರಡು ಸಮಿಧೆಗಳೊಡನೆ.)',
          },
        },
      ],
    },
    {
      title: 'अग्निप्रार्थना',
      titleEn: 'Prayer to Agni',
      note: 'Offer akshata and flowers to the fire and pray to Agni, who faces east, to turn towards you and be gracious. Then worship the guardians of the directions around the fire with flowers if your manual has it.',
      noteKn: 'ಅಗ್ನಿಗೆ ಅಕ್ಷತೆ–ಹೂವು ಅರ್ಪಿಸಿ, ಪೂರ್ವಾಭಿಮುಖನಾದ ಅಗ್ನಿಯು ನಿಮಗೆ ಅಭಿಮುಖನಾಗಿ ಪ್ರಸನ್ನನಾಗಲೆಂದು ಪ್ರಾರ್ಥಿಸಿ. ನಿಮ್ಮ ಪದ್ಧತಿಯಲ್ಲಿದ್ದರೆ ಅಗ್ನಿಯ ಸುತ್ತ ದಿಕ್ಪಾಲಕರನ್ನು ಹೂವಿನಿಂದ ಪೂಜಿಸಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'हे अग्ने प्राङ्मुखो देव मम अभिमुखो भव ॥',
          meaning: {
            en: 'O Agni, god facing east, turn towards me.',
            kn: 'ಓ ಅಗ್ನಿಯೇ, ಪೂರ್ವಾಭಿಮುಖ ದೇವನೇ, ನನಗೆ ಅಭಿಮುಖನಾಗು.',
          },
        },
      ],
    },
    {
      title: 'परिस्तरणं ब्रह्मवरणं च',
      titleEn: 'Paristarana, the vessels and the Brahma',
      note: 'Wipe round the fire three times with a wet hand, starting from the north-east. Spread darbha round the fire: in the east and west with tips to the north, in the south and north with tips to the east (Apastamba Grihya Sutra 1.12-13; the Madhva manual gives four darbhas on each side, the southern laid over the ends of the eastern and western ones). Spread darbha to the south for the Brahma’s seat and to the north for the vessels, and set the vessels there in pairs, mouth downward: the charu pot if charu is cooked, the prokshani, the sruk and sruva, the pranita, the ghee vessel and the bundle of fuel. Purify the prokshani water with two darbha blades (pavitra) and sprinkle all the vessels with it, turned upright. Ask the Brahma to take his seat with this sentence (if no person, place a kurcha of darbha on the seat). Fill the pranita with water strained through the pavitra, add gandha, flowers and akshata, place it north of the fire on darbha and cover it with darbha. Smarta (Muddu Shrauti): then set the three paridhi sticks round the fire — the thickest to the west, tip north; a long thin one to the south and the shortest to the north, tips east — touching one another, and place two aghara samidhs at the south-east and north-east.',
      noteKn: 'ಈಶಾನ್ಯದಿಂದ ಆರಂಭಿಸಿ ಒದ್ದೆ ಕೈಯಿಂದ ಅಗ್ನಿಯ ಸುತ್ತ ಮೂರು ಬಾರಿ ಒರೆಸಿ (ಪರಿಸಮೂಹನ). ಅಗ್ನಿಯ ಸುತ್ತ ದರ್ಭೆ ಹರಡಿ: ಪೂರ್ವ–ಪಶ್ಚಿಮಗಳಲ್ಲಿ ಉತ್ತರಾಗ್ರವಾಗಿ, ದಕ್ಷಿಣ–ಉತ್ತರಗಳಲ್ಲಿ ಪೂರ್ವಾಗ್ರವಾಗಿ (ಆಪಸ್ತಂಬ ಗೃಹ್ಯಸೂತ್ರ ೧.೧೨–೧೩; ಮಾಧ್ವ ಪದ್ಧತಿಯಲ್ಲಿ ಪ್ರತಿ ದಿಕ್ಕಿಗೆ ನಾಲ್ಕು ದರ್ಭೆಗಳು, ದಕ್ಷಿಣದವು ಪೂರ್ವ–ಪಶ್ಚಿಮ ದರ್ಭೆಗಳ ಬುಡದ ಮೇಲೆ). ದಕ್ಷಿಣಕ್ಕೆ ಬ್ರಹ್ಮಾಸನಕ್ಕಾಗಿ, ಉತ್ತರಕ್ಕೆ ಪಾತ್ರೆಗಳಿಗಾಗಿ ದರ್ಭೆ ಹರಡಿ, ಪಾತ್ರೆಗಳನ್ನು ಜೋಡಿಯಾಗಿ ಬೋರಲಾಗಿ ಇಡಿ: ಚರು ಬೇಯಿಸುವುದಾದರೆ ಚರುಸ್ಥಾಲಿ, ಪ್ರೋಕ್ಷಣೀ, ಸ್ರುಕ್–ಸ್ರುವ, ಪ್ರಣೀತಾ, ಆಜ್ಯಪಾತ್ರೆ, ಇಧ್ಮದ ಕಟ್ಟು. ಎರಡು ದರ್ಭೆಗಳ ಪವಿತ್ರದಿಂದ ಪ್ರೋಕ್ಷಣೀ ಜಲವನ್ನು ಶುದ್ಧಗೊಳಿಸಿ, ಪಾತ್ರೆಗಳನ್ನು ನೆಟ್ಟಗೆ ಮಾಡಿ ಅವುಗಳಿಗೆ ಪ್ರೋಕ್ಷಿಸಿ. ಈ ವಾಕ್ಯದಿಂದ ಬ್ರಹ್ಮನನ್ನು ಆಸನಕ್ಕೆ ಆಹ್ವಾನಿಸಿ (ವ್ಯಕ್ತಿ ಇಲ್ಲದಿದ್ದರೆ ಆಸನದ ಮೇಲೆ ದರ್ಭೆಯ ಕೂರ್ಚ). ಪವಿತ್ರದಿಂದ ಶೋಧಿಸಿದ ನೀರಿನಿಂದ ಪ್ರಣೀತೆಯನ್ನು ತುಂಬಿ, ಗಂಧ–ಹೂವು–ಅಕ್ಷತೆ ಹಾಕಿ, ಅಗ್ನಿಯ ಉತ್ತರಕ್ಕೆ ದರ್ಭೆಯ ಮೇಲಿಟ್ಟು ದರ್ಭೆಯಿಂದ ಮುಚ್ಚಿ. ಸ್ಮಾರ್ತ (ಮುದ್ದು ಶ್ರೌತಿ): ನಂತರ ಮೂರು ಪರಿಧಿಗಳನ್ನು ಅಗ್ನಿಯ ಸುತ್ತ ಇಡಿ — ದಪ್ಪದ್ದು ಪಶ್ಚಿಮದಲ್ಲಿ ತುದಿ ಉತ್ತರಕ್ಕೆ, ಉದ್ದವಾದ ತೆಳುವಾದದ್ದು ದಕ್ಷಿಣದಲ್ಲಿ, ಚಿಕ್ಕದ್ದು ಉತ್ತರದಲ್ಲಿ, ತುದಿಗಳು ಪೂರ್ವಕ್ಕೆ — ಒಂದನ್ನೊಂದು ಮುಟ್ಟುವಂತೆ; ಆಗ್ನೇಯ ಮತ್ತು ಈಶಾನ್ಯದಲ್ಲಿ ಎರಡು ಆಘಾರ ಸಮಿಧೆಗಳನ್ನಿಡಿ.',
      verses: [
        {
          text: 'अस्मिन् अमुकहोमकर्मणि ब्रह्माणं त्वामहं वृणे ॥',
          meaning: {
            en: 'In this rite I choose you as the Brahma (the overseer of the sacrifice).',
            kn: 'ಈ ಕರ್ಮದಲ್ಲಿ ನಿಮ್ಮನ್ನು ಬ್ರಹ್ಮರನ್ನಾಗಿ (ಯಜ್ಞದ ಮೇಲ್ವಿಚಾರಕರನ್ನಾಗಿ) ವರಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'निरस्तः परावसुः ॥\nइदमहमर्वावसोः सदने सीदामि ॥',
          meaning: {
            en: 'Paravasu (the hostile one) is driven out. I sit down in the seat of Arvavasu (the friendly one). (Said by the Brahma as he throws one darbha from his seat to the south-west and sits; Ashvalayana Shrauta Sutra, M1.)',
            kn: 'ಪರಾವಸು (ಅಹಿತಕಾರಿ) ಹೊರಹಾಕಲ್ಪಟ್ಟನು. ಅರ್ವಾವಸುವಿನ (ಹಿತಕಾರಿ) ಆಸನದಲ್ಲಿ ನಾನು ಕುಳಿತುಕೊಳ್ಳುತ್ತೇನೆ. (ಬ್ರಹ್ಮನು ತನ್ನ ಆಸನದಿಂದ ಒಂದು ದರ್ಭೆಯನ್ನು ನೈಋತ್ಯಕ್ಕೆ ಎಸೆದು ಕುಳಿತುಕೊಳ್ಳುವಾಗ; ಆಶ್ವಲಾಯನ ಶ್ರೌತಸೂತ್ರ, ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ.)',
          },
          when: { tradition: ['madhva'] },
        },
        {
          text: 'वरुणाय नमः । सकलाराधनैः स्वर्चितम् ॥\nब्रह्मणे नमः । सकलाराधनैः स्वर्चितम् ॥',
          meaning: {
            en: 'Salutation to Varuna; may he be well worshipped with all the honours (said over the pranita water, placing akshata in it). Salutation to the Brahma; may he be well worshipped with all the honours (said to the Brahma or the kurcha). (Muddu Shrauti, Mylapore manual.)',
            kn: 'ವರುಣನಿಗೆ ನಮಸ್ಕಾರ; ಎಲ್ಲ ಉಪಚಾರಗಳಿಂದ ಚೆನ್ನಾಗಿ ಪೂಜಿತನಾಗಲಿ (ಪ್ರಣೀತಾ ಜಲಕ್ಕೆ ಅಕ್ಷತೆ ಹಾಕುತ್ತ). ಬ್ರಹ್ಮನಿಗೆ ನಮಸ್ಕಾರ; ಎಲ್ಲ ಉಪಚಾರಗಳಿಂದ ಪೂಜಿತನಾಗಲಿ (ಬ್ರಹ್ಮ ಅಥವಾ ಕೂರ್ಚಕ್ಕೆ). (ಮುದ್ದು ಶ್ರೌತಿ, ಮೈಲಾಪುರ ಗ್ರಂಥ.)',
          },
          when: { tradition: ['smarta'] },
        },
      ],
    },
    {
      title: 'पर्युक्षणम् आज्यसंस्कारश्च',
      titleEn: 'Paryukshana and purifying the ghee',
      note: 'Sprinkle water round the fire silently, three times, starting from the north-east (Ashvalayana Grihya Sutra 1.3.1: tushnim paryukshanam). Pour ghee into the ghee vessel with the pavitra in it; draw some coals with ash out to the north beyond the darbha, warm the ghee on them and wave a burning darbha over it; drop two thumb-joint lengths of darbha tips into it; carry the burning darbha round the ghee (and the charu) three times; draw the vessel back across the ground to the north and return the coals to the fire. Then, holding the pavitra with thumbs and ring fingers, lift the ghee towards the east once with the mantra and twice silently; sprinkle the pavitra and drop it into the fire. Place the ghee on the spread darbha west of the fire, heat the sruk and sruva over the fire, wipe them with darbha tips and roots three times each, sprinkle them, and lay them north of the ghee. Pour a little ghee over the charu and set it between the fire and the ghee. Decorate the fire with gandha, flowers and akshata, one pada in each of the eight directions, with विश्वानि नो…, यस्त्वा हृदा… and यस्मै त्वं सुकृते….',
      noteKn: 'ಈಶಾನ್ಯದಿಂದ ಆರಂಭಿಸಿ ಅಗ್ನಿಯ ಸುತ್ತ ಮೂರು ಬಾರಿ ಮೌನವಾಗಿ ನೀರು ಪ್ರೋಕ್ಷಿಸಿ (ಆಶ್ವಲಾಯನ ಗೃಹ್ಯಸೂತ್ರ ೧.೩.೧: ತೂಷ್ಣೀಂ ಪರ್ಯುಕ್ಷಣಮ್). ಪವಿತ್ರವಿಟ್ಟ ಆಜ್ಯಪಾತ್ರೆಗೆ ತುಪ್ಪ ಹಾಕಿ; ಕೆಲವು ಕೆಂಡಗಳನ್ನು ಬೂದಿಯೊಡನೆ ಉತ್ತರಕ್ಕೆ ದರ್ಭೆಯ ಹೊರಗೆ ಎಳೆದು ಅವುಗಳ ಮೇಲೆ ತುಪ್ಪವನ್ನು ಕಾಯಿಸಿ, ಉರಿಯುವ ದರ್ಭೆಯನ್ನು ಅದರ ಮೇಲೆ ಆಡಿಸಿ; ಹೆಬ್ಬೆರಳಿನ ಗಿಣ್ಣಿನಷ್ಟು ಉದ್ದದ ಎರಡು ದರ್ಭಾಗ್ರಗಳನ್ನು ಅದರಲ್ಲಿ ಹಾಕಿ; ಉರಿಯುವ ದರ್ಭೆಯನ್ನು ತುಪ್ಪದ (ಮತ್ತು ಚರುವಿನ) ಸುತ್ತ ಮೂರು ಬಾರಿ ಸುತ್ತಿಸಿ; ಪಾತ್ರೆಯನ್ನು ನೆಲದ ಮೇಲೆ ಉತ್ತರಕ್ಕೆ ಎಳೆದು ಕೆಂಡಗಳನ್ನು ಅಗ್ನಿಗೆ ಹಿಂತಿರುಗಿಸಿ. ನಂತರ ಹೆಬ್ಬೆರಳು–ಉಂಗುರದ ಬೆರಳುಗಳಿಂದ ಪವಿತ್ರವನ್ನು ಹಿಡಿದು ಮಂತ್ರದೊಡನೆ ಒಮ್ಮೆ, ಮೌನವಾಗಿ ಎರಡು ಬಾರಿ ತುಪ್ಪವನ್ನು ಪೂರ್ವಕ್ಕೆ ಎತ್ತಿ (ಉತ್ಪವನ); ಪವಿತ್ರವನ್ನು ಪ್ರೋಕ್ಷಿಸಿ ಅಗ್ನಿಗೆ ಹಾಕಿ. ತುಪ್ಪವನ್ನು ಅಗ್ನಿಯ ಪಶ್ಚಿಮದಲ್ಲಿ ಹರಡಿದ ದರ್ಭೆಯ ಮೇಲಿಟ್ಟು, ಸ್ರುಕ್–ಸ್ರುವಗಳನ್ನು ಅಗ್ನಿಯಲ್ಲಿ ಕಾಯಿಸಿ, ದರ್ಭಾಗ್ರ–ಮೂಲಗಳಿಂದ ಮೂರು ಮೂರು ಬಾರಿ ಒರೆಸಿ, ಪ್ರೋಕ್ಷಿಸಿ ತುಪ್ಪದ ಉತ್ತರಕ್ಕಿಡಿ. ಚರುವಿಗೆ ಸ್ವಲ್ಪ ತುಪ್ಪ ಹಾಕಿ ಅಗ್ನಿ–ಆಜ್ಯಗಳ ನಡುವೆ ಇಡಿ. “ವಿಶ್ವಾನಿ ನೋ…”, “ಯಸ್ತ್ವಾ ಹೃದಾ…” ಮಂತ್ರಗಳ ಒಂದೊಂದು ಪಾದದಿಂದ ಎಂಟು ದಿಕ್ಕುಗಳಲ್ಲಿ ಗಂಧ–ಹೂವು–ಅಕ್ಷತೆಗಳಿಂದ ಅಗ್ನಿಯನ್ನು ಅಲಂಕರಿಸಿ. ಅಲಂಕರಣದ ಮೂರನೆಯ ಮಂತ್ರ “ಯಸ್ಮೈ ತ್ವಂ ಸುಕೃತೇ…”.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'सवितुष्ट्वा प्रसव उत्पुनाम्यच्छिद्रेण पवित्रेण वसोः सूर्यस्य रश्मिभिः ॥',
          meaning: {
            en: 'At the impulse of Savitri I purify you with this flawless strainer, with the rays of the bright Sun. (Ashvalayana Grihya Sutra 1.3.3; said while lifting the ghee with the pavitra.)',
            kn: 'ಸವಿತೃದೇವನ ಪ್ರೇರಣೆಯಿಂದ, ದೋಷರಹಿತವಾದ ಈ ಪವಿತ್ರದಿಂದ, ಬೆಳಗುವ ಸೂರ್ಯನ ಕಿರಣಗಳಿಂದ ನಿನ್ನನ್ನು ಶುದ್ಧಗೊಳಿಸುತ್ತೇನೆ. (ಆಶ್ವಲಾಯನ ಗೃಹ್ಯಸೂತ್ರ ೧.೩.೩; ಪವಿತ್ರದಿಂದ ತುಪ್ಪವನ್ನು ಎತ್ತುವಾಗ.)',
          },
        },
        {
          text: 'विश्वानि नो दुर्गहा जातवेदः सिन्धुं न नावा दुरिताति पर्षि ।\nअग्ने अत्रिवन्नमसा गृणानोऽस्माकं बोध्यविता तनूनाम् ॥',
          meaning: {
            en: 'O Jatavedas, carry us across all hardships and wrongs as across a river in a boat. O Agni, praised with reverence as by Atri, be watchful as the guardian of our bodies. (Rigveda 5.4.9)',
            kn: 'ಓ ಜಾತವೇದನೇ, ದೋಣಿಯಿಂದ ನದಿಯನ್ನು ದಾಟಿಸುವಂತೆ ಎಲ್ಲ ಸಂಕಟಗಳಿಂದಲೂ ಪಾಪಗಳಿಂದಲೂ ನಮ್ಮನ್ನು ದಾಟಿಸು. ಓ ಅಗ್ನಿಯೇ, ಅತ್ರಿಯಂತೆ ನಮಸ್ಕಾರದಿಂದ ಸ್ತುತಿಸಲ್ಪಡುವ ನೀನು ನಮ್ಮ ದೇಹಗಳ ರಕ್ಷಕನಾಗಿ ಎಚ್ಚರವಾಗಿರು. (ಋಗ್ವೇದ ೫.೪.೯)',
          },
        },
        {
          text: 'यस्त्वा हृदा कीरिणा मन्यमानोऽमर्त्यं मर्त्यो जोहवीमि ।\nजातवेदो यशो अस्मासु धेहि प्रजाभिरग्ने अमृतत्वमश्याम् ॥',
          meaning: {
            en: 'I, a mortal, call again and again on you, the immortal, thinking of you with a singing heart: O Jatavedas, give us renown; O Agni, through our offspring may I attain immortality. (Rigveda 5.4.10)',
            kn: 'ಮರ್ತ್ಯನಾದ ನಾನು ಸ್ತುತಿಸುವ ಹೃದಯದಿಂದ ನಿನ್ನನ್ನು ನೆನೆಯುತ್ತಾ ಅಮರ್ತ್ಯನಾದ ನಿನ್ನನ್ನು ಮತ್ತೆ ಮತ್ತೆ ಕರೆಯುತ್ತೇನೆ: ಓ ಜಾತವೇದನೇ, ನಮಗೆ ಯಶಸ್ಸನ್ನು ಕೊಡು; ಓ ಅಗ್ನಿಯೇ, ಸಂತಾನದ ಮೂಲಕ ನಾನು ಅಮೃತತ್ವವನ್ನು ಪಡೆಯುವಂತಾಗಲಿ. (ಋಗ್ವೇದ ೫.೪.೧೦)',
          },
        },
        {
          text: 'यस्मै त्वं सुकृते जातवेद उ लोकमग्ने कृणवः स्योनम् ।\nअश्विनं स पुत्रिणं वीरवन्तं गोमन्तं रयिं नशते स्वस्ति ॥',
          meaning: {
            en: 'O Jatavedas Agni, the doer of good for whom you make a pleasant world gains wealth rich in horses, sons, heroes and cattle, and well-being. (Rigveda 5.4.11, the third verse for decorating the fire in M1.)',
            kn: 'ಓ ಜಾತವೇದ ಅಗ್ನಿಯೇ, ಯಾವ ಸತ್ಕರ್ಮಿಗೆ ನೀನು ಸುಖಕರ ಲೋಕವನ್ನು ಮಾಡುವೆಯೋ ಅವನು ಕುದುರೆ, ಮಕ್ಕಳು, ವೀರರು, ಗೋವುಗಳಿಂದ ಕೂಡಿದ ಸಂಪತ್ತನ್ನೂ ಕ್ಷೇಮವನ್ನೂ ಪಡೆಯುತ್ತಾನೆ. (ಋಗ್ವೇದ ೫.೪.೧೧; ಅಗ್ನ್ಯಲಂಕರಣದ ಮೂರನೆಯ ಮಂತ್ರ.)',
          },
        },
      ],
    },
    {
      title: 'परिषेचनम् आज्यसंस्कारश्च',
      titleEn: 'Parishechana and purifying the ghee',
      note: 'Purify the ghee silently: see that nothing impure is in it, pass the pavitra through it, set it on coals drawn out to the south-east, wave a burning darbha round it, return the coals, and throw the pavitra into the fire (Apastamba Grihya Sutra 1.19: these are done silently). Heat the ladles in the fire, wipe them with darbha and sprinkle them. Then sprinkle water round the fire with the hand: along the south from west to east with अदिते…, along the west from south to north with अनुमते…, along the north from west to east with सरस्वते…, and all round, clockwise from the south-east, with देव सवितः… (Apastamba Grihya Sutra 2.3).',
      noteKn: 'ತುಪ್ಪವನ್ನು ಮೌನವಾಗಿ ಶುದ್ಧಗೊಳಿಸಿ: ಅದರಲ್ಲಿ ಅಶುದ್ಧ ವಸ್ತು ಇಲ್ಲವೆಂದು ನೋಡಿ, ಪವಿತ್ರವನ್ನು ಅದರಲ್ಲಿ ಆಡಿಸಿ, ಆಗ್ನೇಯಕ್ಕೆ ಎಳೆದ ಕೆಂಡಗಳ ಮೇಲಿಟ್ಟು, ಉರಿಯುವ ದರ್ಭೆಯನ್ನು ಸುತ್ತಿಸಿ, ಕೆಂಡಗಳನ್ನು ಹಿಂತಿರುಗಿಸಿ, ಪವಿತ್ರವನ್ನು ಅಗ್ನಿಗೆ ಹಾಕಿ (ಆಪಸ್ತಂಬ ಗೃಹ್ಯಸೂತ್ರ ೧.೧೯: ಇವು ಮೌನವಾಗಿ). ಸ್ರುಕ್–ಸ್ರುವಗಳನ್ನು ಅಗ್ನಿಯಲ್ಲಿ ಕಾಯಿಸಿ, ದರ್ಭೆಯಿಂದ ಒರೆಸಿ ಪ್ರೋಕ್ಷಿಸಿ. ನಂತರ ಕೈಯಿಂದ ಅಗ್ನಿಯ ಸುತ್ತ ನೀರು ಹಾಕಿ: ದಕ್ಷಿಣದಲ್ಲಿ ಪಶ್ಚಿಮದಿಂದ ಪೂರ್ವಕ್ಕೆ “ಅದಿತೇ…”, ಪಶ್ಚಿಮದಲ್ಲಿ ದಕ್ಷಿಣದಿಂದ ಉತ್ತರಕ್ಕೆ “ಅನುಮತೇ…”, ಉತ್ತರದಲ್ಲಿ ಪಶ್ಚಿಮದಿಂದ ಪೂರ್ವಕ್ಕೆ “ಸರಸ್ವತೇ…”, ಆಗ್ನೇಯದಿಂದ ಪ್ರದಕ್ಷಿಣವಾಗಿ ಸುತ್ತಲೂ “ದೇವ ಸವಿತಃ…” (ಆಪಸ್ತಂಬ ಗೃಹ್ಯಸೂತ್ರ ೨.೩).',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'अदितेऽनुमन्यस्व । अनुमतेऽनुमन्यस्व ।\nसरस्वतेऽनुमन्यस्व । देव सवितः प्रसुव ॥',
          meaning: {
            en: 'O Aditi, give your consent; O Anumati, give your consent; O Sarasvati, give your consent; O god Savitri, impel us (to this rite).',
            kn: 'ಓ ಅದಿತಿಯೇ, ಅನುಮತಿ ಕೊಡು; ಓ ಅನುಮತಿಯೇ, ಅನುಮತಿ ಕೊಡು; ಓ ಸರಸ್ವತಿಯೇ, ಅನುಮತಿ ಕೊಡು; ಓ ಸವಿತೃದೇವನೇ, (ಈ ಕರ್ಮಕ್ಕೆ) ನಮ್ಮನ್ನು ಪ್ರೇರೇಪಿಸು.',
          },
        },
      ],
    },
    {
      title: 'इध्माधानम्',
      titleEn: 'Placing the fuel (idhma)',
      note: 'Wash the hand, take the bundle of fuel, put its tying string down there, dip the bundle in ghee at root, middle and tip, decorate it, yourself and the Brahma with gandha, and place it on the fire with this verse. Some manuals add a request to the elders: अस्मिन्… होमे इध्मप्रक्षेपणमुहूर्तः सुमुहूर्तोऽस्त्विति अनुगृह्णन्तु, and they answer सुमुहूर्तोऽस्तु.',
      noteKn: 'ಕೈ ತೊಳೆದು ಇಧ್ಮದ ಕಟ್ಟನ್ನು ತೆಗೆದುಕೊಂಡು, ಅದರ ಹಗ್ಗವನ್ನು ಅಲ್ಲೇ ಇಟ್ಟು, ಕಟ್ಟನ್ನು ಬುಡ, ನಡು, ತುದಿಗಳಲ್ಲಿ ತುಪ್ಪದಲ್ಲಿ ಅದ್ದಿ, ಅದನ್ನೂ ನಿಮ್ಮನ್ನೂ ಬ್ರಹ್ಮರನ್ನೂ ಗಂಧದಿಂದ ಅಲಂಕರಿಸಿ, ಈ ಮಂತ್ರದಿಂದ ಅಗ್ನಿಯ ಮೇಲಿಡಿ. ಕೆಲವು ಪದ್ಧತಿಗಳಲ್ಲಿ ಹಿರಿಯರನ್ನು “ಅಸ್ಮಿನ್… ಹೋಮೇ ಇಧ್ಮಪ್ರಕ್ಷೇಪಣಮುಹೂರ್ತಃ ಸುಮುಹೂರ್ತೋಽಸ್ತ್ವಿತಿ ಅನುಗೃಹ್ಣಂತು” ಎಂದು ಕೇಳುತ್ತಾರೆ, ಅವರು “ಸುಮುಹೂರ್ತೋಽಸ್ತು” ಎನ್ನುತ್ತಾರೆ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'अयं त इध्म आत्मा जातवेदस्तेनेध्यस्व वर्धस्व चेद्ध वर्धय चास्मान्\nप्रजया पशुभिर्ब्रह्मवर्चसेनान्नाद्येन समेधय स्वाहा ।\nअग्नये जातवेदसे इदं न मम ॥',
          meaning: {
            en: 'O Jatavedas, this fuel is your very self; be kindled by it and grow, and, kindled, make us grow; prosper us with offspring, cattle, the radiance of sacred learning and food, svaha. This is for Agni Jatavedas, not for me. (Ashvalayana Grihya Sutra 1.10.12)',
            kn: 'ಓ ಜಾತವೇದನೇ, ಈ ಇಧ್ಮವೇ ನಿನ್ನ ಆತ್ಮ; ಇದರಿಂದ ಪ್ರಜ್ವಲಿಸು, ಬೆಳೆ, ಪ್ರಜ್ವಲಿಸಿ ನಮ್ಮನ್ನೂ ಬೆಳೆಸು; ಸಂತಾನ, ಪಶು, ಬ್ರಹ್ಮವರ್ಚಸ್ಸು, ಅನ್ನಗಳಿಂದ ನಮ್ಮನ್ನು ಸಮೃದ್ಧಗೊಳಿಸು, ಸ್ವಾಹಾ. ಇದು ಅಗ್ನಿ ಜಾತವೇದನಿಗೆ, ನನ್ನದಲ್ಲ. (ಆಶ್ವಲಾಯನ ಗೃಹ್ಯಸೂತ್ರ ೧.೧೦.೧೨)',
          },
        },
      ],
    },
    {
      title: 'इध्माधानम्',
      titleEn: 'Placing the fuel (idhma)',
      note: 'Smear the bundle of fuel with ghee and tell the Brahma you are placing it; place it on the fire (Muddu Shrauti, Mylapore manual; the sutra has it placed silently).',
      noteKn: 'ಇಧ್ಮದ ಕಟ್ಟಿಗೆ ತುಪ್ಪ ಹಚ್ಚಿ, ಇಡುತ್ತಿದ್ದೇನೆಂದು ಬ್ರಹ್ಮನಿಗೆ ಹೇಳಿ ಅಗ್ನಿಯ ಮೇಲೆ ಇಡಿ (ಮುದ್ದು ಶ್ರೌತಿ, ಮೈಲಾಪುರ ಗ್ರಂಥ; ಸೂತ್ರದಲ್ಲಿ ಮೌನವಾಗಿ).',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'अस्मिन् अमुकहोमकर्मणि ब्रह्मन्निध्ममाधास्ये ॥',
          meaning: {
            en: 'O Brahma, in this … homa I shall place the fuel on the fire. (The Brahma answers: om adhatsva, place it.)',
            kn: 'ಓ ಬ್ರಹ್ಮನೇ, ಈ ಇಂತಹ ಹೋಮಕರ್ಮದಲ್ಲಿ ಇಧ್ಮವನ್ನು ಇಡುತ್ತೇನೆ. (ಬ್ರಹ್ಮನು “ಓಂ ಆಧತ್ಸ್ವ — ಇಡು” ಎನ್ನುತ್ತಾನೆ.)',
          },
        },
      ],
    },
    {
      title: 'आघारावाज्यभागौ',
      titleEn: 'Aghara and ajyabhaga',
      note: 'Aghara: with the sruva pour two unbroken streams of ghee across the fire, saying the mantra in the mind. Madhva (Haranahalli manual): both to Prajapati, the first from the north-west to the south-east, the second from the south-west to the north-east. Smarta (Apastamba): silently, the first to Prajapati, the second to Indra. Ajyabhaga (the two “eyes” of Agni): one oblation to Agni in the north-eastern part of the fire and one to Soma in the south-eastern part, level with it (Apastamba Grihya Sutra 2.6). Every offering is followed by the tyaga, इदं न मम, “this is not mine”; when an offering is made with the sruva, a drop left in it is shaken into the prokshani or a separate vessel in some families. Smarta: then a third oblation to Agni in the middle of the fire (the agnimukha), and the all-expiation offering for any lapse so far (Muddu Shrauti, Mylapore manual). Madhva: the expiation offering comes at the start of the next section.',
      noteKn: 'ಆಘಾರ: ಸ್ರುವದಿಂದ ಅಗ್ನಿಯ ಮೇಲೆ ಅಡ್ಡಲಾಗಿ ತುಪ್ಪದ ಎರಡು ಅಖಂಡ ಧಾರೆಗಳನ್ನು ಸುರಿಯಿರಿ, ಮಂತ್ರವನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಹೇಳುತ್ತಾ. ಮಾಧ್ವ (ಹರನಹಳ್ಳಿ ಪದ್ಧತಿ): ಎರಡೂ ಪ್ರಜಾಪತಿಗೆ — ಮೊದಲನೆಯದು ವಾಯವ್ಯದಿಂದ ಆಗ್ನೇಯಕ್ಕೆ, ಎರಡನೆಯದು ನೈರುತ್ಯದಿಂದ ಈಶಾನ್ಯಕ್ಕೆ. ಸ್ಮಾರ್ತ (ಆಪಸ್ತಂಬ): ಮೌನವಾಗಿ, ಮೊದಲನೆಯದು ಪ್ರಜಾಪತಿಗೆ, ಎರಡನೆಯದು ಇಂದ್ರನಿಗೆ. ಆಜ್ಯಭಾಗ (ಅಗ್ನಿಯ ಎರಡು “ಕಣ್ಣುಗಳು”): ಅಗ್ನಿಯ ಈಶಾನ್ಯಭಾಗದಲ್ಲಿ ಅಗ್ನಿಗೆ ಒಂದು, ಆಗ್ನೇಯಭಾಗದಲ್ಲಿ ಅದರ ಸಮಕ್ಕೆ ಸೋಮನಿಗೆ ಒಂದು ಆಹುತಿ (ಆಪಸ್ತಂಬ ಗೃಹ್ಯಸೂತ್ರ ೨.೬). ಪ್ರತಿ ಆಹುತಿಯ ನಂತರ “ಇದಂ ನ ಮಮ” — “ಇದು ನನ್ನದಲ್ಲ” ಎಂಬ ತ್ಯಾಗ; ಸ್ರುವದಲ್ಲಿ ಉಳಿದ ತೊಟ್ಟನ್ನು ಕೆಲವು ಮನೆತನಗಳಲ್ಲಿ ಪ್ರೋಕ್ಷಣೀಗೆ ಅಥವಾ ಬೇರೆ ಪಾತ್ರೆಗೆ ಹಾಕುತ್ತಾರೆ. ಸ್ಮಾರ್ತ: ನಂತರ ಅಗ್ನಿಯ ಮಧ್ಯದಲ್ಲಿ ಅಗ್ನಿಗೆ ಮೂರನೆಯ ಆಹುತಿ (ಅಗ್ನಿಮುಖ), ಮತ್ತು ಇಲ್ಲಿಯವರೆಗಿನ ಲೋಪಗಳಿಗೆ ಸರ್ವಪ್ರಾಯಶ್ಚಿತ್ತ (ಮುದ್ದು ಶ್ರೌತಿ, ಮೈಲಾಪುರ ಗ್ರಂಥ). ಮಾಧ್ವ: ಪ್ರಾಯಶ್ಚಿತ್ತ ಆಹುತಿ ಮುಂದಿನ ಭಾಗದ ಆರಂಭದಲ್ಲಿದೆ.',
      verses: [
        {
          text: 'प्रजापतये स्वाहा । प्रजापतय इदं न मम ॥',
          meaning: {
            en: 'To Prajapati, svaha; this is for Prajapati, not for me. (Said in the mind with each of the two streams of ghee.)',
            kn: 'ಪ್ರಜಾಪತಿಗೆ ಸ್ವಾಹಾ; ಇದು ಪ್ರಜಾಪತಿಗೆ, ನನ್ನದಲ್ಲ. (ಎರಡೂ ಧಾರೆಗಳೊಡನೆ ಮನಸ್ಸಿನಲ್ಲಿ.)',
          },
          when: { tradition: ['madhva'] },
        },
        {
          text: 'प्रजापतये स्वाहा । प्रजापतय इदं न मम ।\nइन्द्राय स्वाहा । इन्द्रायेदं न मम ॥',
          meaning: {
            en: 'To Prajapati, svaha; this is for Prajapati, not for me. To Indra, svaha; this is for Indra, not for me. (The two streams of ghee, the mantras said in the mind.)',
            kn: 'ಪ್ರಜಾಪತಿಗೆ ಸ್ವಾಹಾ; ಇದು ಪ್ರಜಾಪತಿಗೆ, ನನ್ನದಲ್ಲ. ಇಂದ್ರನಿಗೆ ಸ್ವಾಹಾ; ಇದು ಇಂದ್ರನಿಗೆ, ನನ್ನದಲ್ಲ. (ಎರಡು ಧಾರೆಗಳು, ಮಂತ್ರ ಮನಸ್ಸಿನಲ್ಲಿ.)',
          },
          when: { tradition: ['smarta'] },
        },
        {
          text: 'अग्नये स्वाहा । अग्नय इदं न मम ।\nसोमाय स्वाहा । सोमायेदं न मम ॥',
          meaning: {
            en: 'To Agni, svaha; this is for Agni, not for me. To Soma, svaha; this is for Soma, not for me. (The two ajyabhaga oblations.)',
            kn: 'ಅಗ್ನಿಗೆ ಸ್ವಾಹಾ; ಇದು ಅಗ್ನಿಗೆ, ನನ್ನದಲ್ಲ. ಸೋಮನಿಗೆ ಸ್ವಾಹಾ; ಇದು ಸೋಮನಿಗೆ, ನನ್ನದಲ್ಲ. (ಎರಡು ಆಜ್ಯಭಾಗ ಆಹುತಿಗಳು.)',
          },
        },
        {
          text: 'अग्नये स्वाहा । अग्नय इदं न मम ॥',
          meaning: {
            en: 'To Agni, svaha; this is for Agni, not mine. (The agnimukha offering in the middle of the fire, Smarta: Muddu Shrauti, Mylapore manual.)',
            kn: 'ಅಗ್ನಿಗೆ ಸ್ವಾಹಾ; ಇದು ಅಗ್ನಿಗೆ, ನನ್ನದಲ್ಲ. (ಅಗ್ನಿಯ ಮಧ್ಯದಲ್ಲಿ ಅಗ್ನಿಮುಖ ಆಹುತಿ, ಸ್ಮಾರ್ತ.)',
          },
          when: { tradition: ['smarta'] },
        },
        {
          text: 'सङ्कल्पप्रभृत्येतत्क्षणपर्यन्तं मध्ये सम्भावितसमस्तदोषप्रायश्चित्तार्थं सर्वप्रायश्चित्तं होष्यामि ।\nॐ भूर्भुवः सुवः स्वाहा । प्रजापतय इदं न मम ॥',
          meaning: {
            en: 'For the expiation of all faults that may have occurred from the sankalpa until this moment, I shall make the all-expiation offering. Om, earth, sky and heaven, svaha; this is for Prajapati, not mine. (Smarta, before the pradhana homa: Muddu Shrauti, Mylapore manual.)',
            kn: 'ಸಂಕಲ್ಪದಿಂದ ಈ ಕ್ಷಣದವರೆಗೆ ನಡುವೆ ಆಗಿರಬಹುದಾದ ಎಲ್ಲ ದೋಷಗಳ ಪ್ರಾಯಶ್ಚಿತ್ತಕ್ಕಾಗಿ ಸರ್ವಪ್ರಾಯಶ್ಚಿತ್ತ ಹೋಮ ಮಾಡುತ್ತೇನೆ. ಓಂ ಭೂರ್ಭುವಃ ಸುವಃ ಸ್ವಾಹಾ; ಇದು ಪ್ರಜಾಪತಿಗೆ, ನನ್ನದಲ್ಲ. (ಸ್ಮಾರ್ತ, ಪ್ರಧಾನ ಹೋಮಕ್ಕೆ ಮೊದಲು.)',
          },
          when: { tradition: ['smarta'] },
        },
      ],
    },
    {
      title: 'अग्निसंस्कारा वैष्णवाहुतयश्च',
      titleEn: 'The samskaras of Agni and the Vaishnava offerings',
      note: 'Madhva manuals now make the fire fit for the Lord. First an expiatory offering for any lapse since the sankalpa. Then the sixteen samskaras of Agni, as for a child, each with ghee offered with the vyahritis (Tantrasara-sangraha 2.19 with its commentary; M1). Then the Vaishnava offerings of ghee: the eight-syllable mula mantra to Narayana eight times, the twelve-syllable mantra to Vasudeva twelve times, each verse of the Purusha Sukta once to Mahapurusha (next section), and the six-syllable Vishnu mantra to Vishnu six times (Homa-Havana: “a homa without offerings to Vishnu is called asura”; Homa-Havana adds the Krishna six-syllable mantra and the Vishnu Gayatri). Those initiated also offer once to each deity of the tattva-nyasa, the matrika-nyasa and the avarana, with the mantras received from the guru; they are not printed here.',
      noteKn: 'ಮಾಧ್ವ ಗ್ರಂಥಗಳಲ್ಲಿ ಈಗ ಅಗ್ನಿಯನ್ನು ಭಗವಂತನಿಗೆ ಯೋಗ್ಯವಾಗಿಸುತ್ತಾರೆ. ಮೊದಲು ಸಂಕಲ್ಪದಿಂದ ಈವರೆಗಿನ ಲೋಪಕ್ಕೆ ಪ್ರಾಯಶ್ಚಿತ್ತ ಆಹುತಿ. ನಂತರ ಮಗುವಿಗೆ ಮಾಡುವಂತೆ ಅಗ್ನಿಗೆ ಹದಿನಾರು ಸಂಸ್ಕಾರಗಳು, ಪ್ರತಿಯೊಂದಕ್ಕೂ ವ್ಯಾಹೃತಿಗಳಿಂದ ಆಜ್ಯಾಹುತಿ (ತಂತ್ರಸಾರ ೨.೧೯ ವ್ಯಾಖ್ಯಾನ; ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ). ಆಮೇಲೆ ವೈಷ್ಣವಾಹುತಿಗಳು: ಅಷ್ಟಾಕ್ಷರದಿಂದ ನಾರಾಯಣನಿಗೆ ಎಂಟು, ದ್ವಾದಶಾಕ್ಷರದಿಂದ ವಾಸುದೇವನಿಗೆ ಹನ್ನೆರಡು, ಪುರುಷಸೂಕ್ತದ ಪ್ರತಿ ಋಕ್ಕಿನಿಂದ ಮಹಾಪುರುಷನಿಗೆ ಒಂದೊಂದು (ಮುಂದಿನ ಭಾಗ), ವಿಷ್ಣು ಷಡಕ್ಷರದಿಂದ ವಿಷ್ಣುವಿಗೆ ಆರು (ಹೋಮ–ಹವನ: “ವಿಷ್ಣ್ವಾಹುತಿವಿಹೀನಂ ತು ಹೋಮಮಾಸುರಸಂಜ್ಞಕಮ್”; ಹೋಮ–ಹವನದಲ್ಲಿ ಕೃಷ್ಣ ಷಡಕ್ಷರ ಮತ್ತು ವಿಷ್ಣುಗಾಯತ್ರಿಯೂ ಇವೆ). ದೀಕ್ಷಿತರು ತತ್ತ್ವನ್ಯಾಸ, ಮಾತೃಕಾನ್ಯಾಸ, ಆವರಣ ದೇವತೆಗಳಿಗೂ ಗುರೂಪದಿಷ್ಟ ಮಂತ್ರಗಳಿಂದ ಒಂದೊಂದು ಆಹುತಿ ನೀಡುತ್ತಾರೆ; ಅವುಗಳನ್ನು ಇಲ್ಲಿ ಮುದ್ರಿಸಿಲ್ಲ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'सङ्कल्पप्रभृत्येतत्क्षणपर्यन्तं मध्ये सम्भावितदोषप्रायश्चित्तार्थम्\nॐ भूर्भुवः स्वः स्वाहा । प्रजापतये श्रीवासुदेवाय इदं न मम ॥',
          meaning: {
            en: 'In expiation of any fault that may have occurred from the sankalpa up to this moment: Om, earth, sky, heaven, svaha; this is for Prajapati and Sri Vasudeva within him, not for me.',
            kn: 'ಸಂಕಲ್ಪದಿಂದ ಈ ಕ್ಷಣದವರೆಗೆ ನಡುವೆ ಸಂಭವಿಸಿರಬಹುದಾದ ದೋಷಗಳ ಪ್ರಾಯಶ್ಚಿತ್ತಕ್ಕಾಗಿ: ಓಂ ಭೂಃ ಭುವಃ ಸ್ವಃ ಸ್ವಾಹಾ; ಇದು ಪ್ರಜಾಪತಿಗೂ ಅವನೊಳಗಿನ ಶ್ರೀವಾಸುದೇವನಿಗೂ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'अग्नेः षोडशसंस्कारार्थं व्याहृतिहोमं करिष्ये ।\nअग्नेर्वैष्णवत्वसिद्ध्यर्थं मूलमन्त्रेण नारायणम् अष्टवारम्\nद्वादशाक्षरमन्त्रेण वासुदेवं द्वादशवारं पुरुषसूक्तेन प्रत्यृचं महापुरुषं\nविष्णुषडक्षरमन्त्रेण विष्णुं षड्वारम् आज्येन यक्ष्ये ॥',
          meaning: {
            en: 'I shall perform the vyahriti offerings for the sixteen samskaras of Agni. To make the fire Vaishnava I shall worship with ghee Narayana eight times with the mula mantra, Vasudeva twelve times with the twelve-syllable mantra, Mahapurusha with each verse of the Purusha Sukta, and Vishnu six times with the six-syllable Vishnu mantra.',
            kn: 'ಅಗ್ನಿಯ ಹದಿನಾರು ಸಂಸ್ಕಾರಗಳಿಗಾಗಿ ವ್ಯಾಹೃತಿಹೋಮ ಮಾಡುತ್ತೇನೆ. ಅಗ್ನಿಯ ವೈಷ್ಣವತ್ವಸಿದ್ಧಿಗಾಗಿ ಮೂಲಮಂತ್ರದಿಂದ ನಾರಾಯಣನನ್ನು ಎಂಟು ಬಾರಿ, ದ್ವಾದಶಾಕ್ಷರದಿಂದ ವಾಸುದೇವನನ್ನು ಹನ್ನೆರಡು ಬಾರಿ, ಪುರುಷಸೂಕ್ತದ ಪ್ರತಿ ಋಕ್ಕಿನಿಂದ ಮಹಾಪುರುಷನನ್ನು, ವಿಷ್ಣು ಷಡಕ್ಷರದಿಂದ ವಿಷ್ಣುವನ್ನು ಆರು ಬಾರಿ ಆಜ್ಯದಿಂದ ಯಜಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'अग्नेः गर्भाधानसंस्कारार्थम् ॐ भूर्भुवः स्वः स्वाहा । प्रजापतये श्रीवासुदेवायेदं न मम ॥',
          meaning: {
            en: 'For the garbhadhana samskara of Agni: Om, earth, sky and heaven, svaha; this is for Prajapati and Sri Vasudeva within him, not mine. (Repeat, naming in turn pumsavana, simantonnayana, vaishnava-bali, jatakarma, namakarana, nishkramana, annaprashana, chaula, upanayana, mahanamni, mahavrata, upanishad-vrata, godana, samavartana and vivaha: sixteen offerings in all.)',
            kn: 'ಅಗ್ನಿಯ ಗರ್ಭಾಧಾನ ಸಂಸ್ಕಾರಕ್ಕಾಗಿ: ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ ಸ್ವಾಹಾ; ಇದು ಪ್ರಜಾಪತಿ ಮತ್ತು ಅವನೊಳಗಿನ ಶ್ರೀವಾಸುದೇವನಿಗೆ, ನನ್ನದಲ್ಲ. (ಪುಂಸವನ, ಸೀಮಂತೋನ್ನಯನ, ವೈಷ್ಣವಬಲಿ, ಜಾತಕರ್ಮ, ನಾಮಕರಣ, ನಿಷ್ಕ್ರಮಣ, ಅನ್ನಪ್ರಾಶನ, ಚೌಲ, ಉಪನಯನ, ಮಹಾನಾಮ್ನೀ, ಮಹಾವ್ರತ, ಉಪನಿಷದ್ವ್ರತ, ಗೋದಾನ, ಸಮಾವರ್ತನ, ವಿವಾಹ — ಕ್ರಮವಾಗಿ ಹೆಸರಿಸಿ ಪುನರಾವರ್ತಿಸಿ; ಒಟ್ಟು ಹದಿನಾರು.)',
          },
        },
        {
          text: 'ॐ नमो नारायणाय स्वाहा । नारायणायेदं न मम ॥',
          meaning: {
            en: 'Om, salutation to Narayana, svaha; this is for Narayana, not mine. (The eight-syllable mula mantra: eight offerings of ghee.)',
            kn: 'ಓಂ ನಾರಾಯಣನಿಗೆ ನಮಸ್ಕಾರ, ಸ್ವಾಹಾ; ಇದು ನಾರಾಯಣನಿಗೆ, ನನ್ನದಲ್ಲ. (ಅಷ್ಟಾಕ್ಷರ ಮೂಲಮಂತ್ರ: ಎಂಟು ಆಜ್ಯಾಹುತಿ.)',
          },
        },
        {
          text: 'ॐ नमो भगवते वासुदेवाय स्वाहा । वासुदेवायेदं न मम ॥',
          meaning: {
            en: 'Om, salutation to the Lord Vasudeva, svaha; this is for Vasudeva, not mine. (The twelve-syllable mantra: twelve offerings.)',
            kn: 'ಓಂ ಭಗವಂತ ವಾಸುದೇವನಿಗೆ ನಮಸ್ಕಾರ, ಸ್ವಾಹಾ; ಇದು ವಾಸುದೇವನಿಗೆ, ನನ್ನದಲ್ಲ. (ದ್ವಾದಶಾಕ್ಷರ ಮಂತ್ರ: ಹನ್ನೆರಡು ಆಹುತಿ.)',
          },
        },
      ],
    },
    {
      title: 'पुरुषसूक्तहोमः विष्णुषडक्षरहोमश्च',
      titleEn: 'Purusha Sukta offerings and the Vishnu six-syllable mantra',
      note: 'Offer ghee once with each of the sixteen verses of the Purusha Sukta in its Rigveda form (10.90), to Mahapurusha, then six times with the six-syllable Vishnu mantra (M1). Rigvedi Madhvas recite the Rigveda text given here; the Taittiriya form in the library is the one Yajurvedis chant.',
      noteKn: 'ಪುರುಷಸೂಕ್ತದ ಋಗ್ವೇದ ಪಾಠದ (೧೦.೯೦) ಹದಿನಾರು ಋಕ್ಕುಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದರಿಂದ ಮಹಾಪುರುಷನಿಗೆ ಒಂದೊಂದು ಆಜ್ಯಾಹುತಿ, ನಂತರ ವಿಷ್ಣು ಷಡಕ್ಷರದಿಂದ ಆರು ಆಹುತಿ (ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ). ಋಗ್ವೇದಿ ಮಾಧ್ವರು ಇಲ್ಲಿನ ಋಗ್ವೇದ ಪಾಠವನ್ನು ಹೇಳುತ್ತಾರೆ; ಗ್ರಂಥಾಲಯದಲ್ಲಿರುವ ತೈತ್ತಿರೀಯ ಪಾಠ ಯಜುರ್ವೇದಿಗಳದು.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'सहस्रशीर्षा पुरुषः सहस्राक्षः सहस्रपात् ।\nस भूमिं विश्वतो वृत्वात्यतिष्ठद्दशाङ्गुलम् स्वाहा ।\nमहापुरुषायेदं न मम ॥',
          meaning: {
            en: 'The Supreme Person has a thousand heads, a thousand eyes and a thousand feet. Pervading the earth on every side, He stands beyond it by ten fingers’ breadth, that is, beyond all measure. Svaha; this is for Mahapurusha, not mine. (Rigveda 10.90.1)',
            kn: 'ಪರಮಪುರುಷನಿಗೆ ಸಾವಿರಾರು ತಲೆಗಳು, ಸಾವಿರಾರು ಕಣ್ಣುಗಳು, ಸಾವಿರಾರು ಪಾದಗಳು. ಅವನು ಭೂಮಿಯನ್ನು ಎಲ್ಲ ಕಡೆಯಿಂದಲೂ ವ್ಯಾಪಿಸಿ, ಅದನ್ನು ಮೀರಿ ಹತ್ತು ಅಂಗುಲ ಮೇಲೆ ನಿಂತಿದ್ದಾನೆ; ಅಂದರೆ ಅವನು ಜಗತ್ತಿಗಿಂತಲೂ ಮಿಗಿಲಾದವನು. ಸ್ವಾಹಾ; ಇದು ಮಹಾಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೧೦.೯೦.೧)',
          },
        },
        {
          text: 'पुरुष एवेदं सर्वं यद्भूतं यच्च भव्यम् ।\nउतामृतत्वस्येशानो यदन्नेनातिरोहति स्वाहा ।\nमहापुरुषायेदं न मम ॥',
          meaning: {
            en: 'All this is the Purusha alone: whatever has been and whatever is yet to be. He is the lord of immortality, and He rises far above all that grows by food. Svaha; this is for Mahapurusha, not mine. (Rigveda 10.90.2)',
            kn: 'ಹಿಂದೆ ಇದ್ದದ್ದು, ಮುಂದೆ ಬರುವುದು, ಈ ಎಲ್ಲವೂ ಆ ಪರಮಪುರುಷನೇ. ಅವನು ಅಮೃತತ್ವಕ್ಕೆ (ಮೋಕ್ಷಕ್ಕೆ) ಒಡೆಯನು; ಅನ್ನದಿಂದ ಬೆಳೆಯುವ ಈ ಜಗತ್ತನ್ನು ಮೀರಿ ನಿಂತವನು. ಸ್ವಾಹಾ; ಇದು ಮಹಾಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೧೦.೯೦.೨)',
          },
        },
        {
          text: 'एतावानस्य महिमातो ज्यायांश्च पूरुषः ।\nपादोऽस्य विश्वा भूतानि त्रिपादस्यामृतं दिवि स्वाहा ।\nमहापुरुषायेदं न मम ॥',
          meaning: {
            en: 'Such is His glory, yet the Purusha is greater still. All beings are but one quarter of Him; three quarters of Him are immortal, in the highest heaven. Svaha; this is for Mahapurusha, not mine. (Rigveda 10.90.3)',
            kn: 'ಇದೆಲ್ಲವೂ ಅವನ ಮಹಿಮೆ; ಆದರೆ ಪುರುಷನು ಇದಕ್ಕಿಂತಲೂ ಹಿರಿಯನು. ಸಮಸ್ತ ಜೀವಿಗಳು ಅವನ ಒಂದು ಪಾದ ಮಾತ್ರ; ಉಳಿದ ಮೂರು ಪಾದಗಳು ಅಮೃತರೂಪವಾಗಿ ಪರಮಪದದಲ್ಲಿ ಬೆಳಗುತ್ತವೆ. ಸ್ವಾಹಾ; ಇದು ಮಹಾಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೧೦.೯೦.೩)',
          },
        },
        {
          text: 'त्रिपादूर्ध्व उदैत्पुरुषः पादोऽस्येहाभवत्पुनः ।\nततो विष्वङ्व्यक्रामत्साशनानशने अभि स्वाहा ।\nमहापुरुषायेदं न मम ॥',
          meaning: {
            en: 'With three quarters the Purusha rose on high; one quarter of Him comes to be here again and again as the world. From that He spread out everywhere, into all that eats and all that does not. Svaha; this is for Mahapurusha, not mine. (Rigveda 10.90.4)',
            kn: 'ಮೂರು ಪಾದಗಳಿಂದ ಪುರುಷನು ಮೇಲೆ ನೆಲೆಸಿದನು; ಅವನ ಒಂದು ಪಾದವೇ ಇಲ್ಲಿ ಮತ್ತೆ ಮತ್ತೆ ಜಗತ್ತಾಗಿ ಮೂಡುತ್ತದೆ. ಅಲ್ಲಿಂದ ಅವನು ಆಹಾರ ಸೇವಿಸುವ ಜೀವಿಗಳಲ್ಲೂ ಸೇವಿಸದ ಜಡವಸ್ತುಗಳಲ್ಲೂ ಎಲ್ಲೆಡೆ ವ್ಯಾಪಿಸಿದನು. ಸ್ವಾಹಾ; ಇದು ಮಹಾಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೧೦.೯೦.೪)',
          },
        },
        {
          text: 'तस्माद्विराळजायत विराजो अधि पूरुषः ।\nस जातो अत्यरिच्यत पश्चाद्भूमिमथो पुरः स्वाहा ।\nमहापुरुषायेदं न मम ॥',
          meaning: {
            en: 'From Him the cosmic form, Virat, was born, and within Virat the Purusha dwelt. Once manifest, He extended beyond it, and then brought forth the earth and the bodies of beings. Svaha; this is for Mahapurusha, not mine. (Rigveda 10.90.5)',
            kn: 'ಅವನಿಂದ ವಿರಾಟ್ ಎಂಬ ಬ್ರಹ್ಮಾಂಡರೂಪ ಹುಟ್ಟಿತು; ಆ ವಿರಾಟನಲ್ಲಿ ಪುರುಷನು ಅಂತರ್ಯಾಮಿಯಾಗಿ ನೆಲೆಸಿದನು. ಹಾಗೆ ಪ್ರಕಟನಾದ ಅವನು ಅದನ್ನೂ ಮೀರಿ ನಿಂತು, ಬಳಿಕ ಭೂಮಿಯನ್ನೂ ಜೀವಿಗಳ ಶರೀರಗಳನ್ನೂ ಸೃಷ್ಟಿಸಿದನು. ಸ್ವಾಹಾ; ಇದು ಮಹಾಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೧೦.೯೦.೫)',
          },
        },
        {
          text: 'यत्पुरुषेण हविषा देवा यज्ञमतन्वत ।\nवसन्तो अस्यासीदाज्यं ग्रीष्म इध्मः शरद्धविः स्वाहा ।\nमहापुरुषायेदं न मम ॥',
          meaning: {
            en: 'When the gods performed a sacrifice with the Purusha Himself as the offering, spring was its ghee, summer its firewood, and autumn its oblation. Svaha; this is for Mahapurusha, not mine. (Rigveda 10.90.6)',
            kn: 'ದೇವತೆಗಳು ಪುರುಷನನ್ನೇ ಹವಿಸ್ಸಾಗಿ ಭಾವಿಸಿ ಯಜ್ಞವನ್ನು ನಡೆಸಿದಾಗ, ವಸಂತ ಋತುವೇ ಅದರ ತುಪ್ಪವಾಯಿತು, ಗ್ರೀಷ್ಮ ಋತುವೇ ಸಮಿಧೆಯಾಯಿತು, ಶರದೃತುವೇ ಹವಿಸ್ಸಾಯಿತು. ಸ್ವಾಹಾ; ಇದು ಮಹಾಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೧೦.೯೦.೬)',
          },
        },
        {
          text: 'तं यज्ञं बर्हिषि प्रौक्षन्पुरुषं जातमग्रतः ।\nतेन देवा अयजन्त साध्या ऋषयश्च ये स्वाहा ।\nमहापुरुषायेदं न मम ॥',
          meaning: {
            en: 'On the sacred grass they consecrated that Purusha, born before all, as the sacrifice itself. Through Him the gods, the Sadhyas and the sages offered worship. Svaha; this is for Mahapurusha, not mine. (Rigveda 10.90.7)',
            kn: 'ಎಲ್ಲಕ್ಕಿಂತ ಮೊದಲು ಪ್ರಕಟನಾದ ಆ ಯಜ್ಞರೂಪಿ ಪುರುಷನನ್ನು ದರ್ಭೆಯ ಮೇಲೆ ಇರಿಸಿ ಪ್ರೋಕ್ಷಿಸಿದರು. ಅವನ ಮೂಲಕವೇ ದೇವತೆಗಳೂ ಸಾಧ್ಯರೂ ಋಷಿಗಳೂ ಯಜ್ಞವನ್ನು ಮಾಡಿದರು. ಸ್ವಾಹಾ; ಇದು ಮಹಾಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೧೦.೯೦.೭)',
          },
        },
        {
          text: 'तस्माद्यज्ञात्सर्वहुतः सम्भृतं पृषदाज्यम् ।\nपशून्ताँश्चक्रे वायव्यानारण्यान्ग्राम्याश्च ये स्वाहा ।\nमहापुरुषायेदं न मम ॥',
          meaning: {
            en: 'From that sacrifice in which everything was offered, the ghee mixed with curds was gathered. From it He made the creatures of the air, and the animals of the forest and of the village. Svaha; this is for Mahapurusha, not mine. (Rigveda 10.90.8)',
            kn: 'ಸರ್ವವನ್ನೂ ಅರ್ಪಿಸಿದ ಆ ಯಜ್ಞದಿಂದ ಮೊಸರು ಬೆರೆತ ತುಪ್ಪ (ಪೃಷದಾಜ್ಯ) ಸಂಗ್ರಹವಾಯಿತು. ಅದರಿಂದ ಆಕಾಶದಲ್ಲಿ ಸಂಚರಿಸುವ ಜೀವಿಗಳನ್ನೂ, ಕಾಡಿನ ಮತ್ತು ಊರಿನ ಪ್ರಾಣಿಗಳನ್ನೂ ಭಗವಂತನು ಸೃಷ್ಟಿಸಿದನು. ಸ್ವಾಹಾ; ಇದು ಮಹಾಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೧೦.೯೦.೮)',
          },
        },
        {
          text: 'तस्माद्यज्ञात्सर्वहुत ऋचः सामानि जज्ञिरे ।\nछन्दांसि जज्ञिरे तस्माद्यजुस्तस्मादजायत स्वाहा ।\nमहापुरुषायेदं न मम ॥',
          meaning: {
            en: 'From that all-offering sacrifice were born the Rik verses and the Saman chants; from it the metres were born, and from it the Yajus arose. Svaha; this is for Mahapurusha, not mine. (Rigveda 10.90.9)',
            kn: 'ಸರ್ವಹುತವಾದ ಆ ಯಜ್ಞದಿಂದ ಋಙ್ಮಂತ್ರಗಳೂ ಸಾಮಗಾನಗಳೂ ಹುಟ್ಟಿದವು. ಅದರಿಂದಲೇ ಛಂದಸ್ಸುಗಳು ಹುಟ್ಟಿದವು; ಯಜುರ್ಮಂತ್ರಗಳೂ ಅದರಿಂದಲೇ ಉದಿಸಿದವು. ಸ್ವಾಹಾ; ಇದು ಮಹಾಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೧೦.೯೦.೯)',
          },
        },
        {
          text: 'तस्मादश्वा अजायन्त ये के चोभयादतः ।\nगावो ह जज्ञिरे तस्मात्तस्माज्जाता अजावयः स्वाहा ।\nमहापुरुषायेदं न मम ॥',
          meaning: {
            en: 'From it were born horses and all animals with teeth in both jaws. From it were born the cows, and from it the goats and sheep. Svaha; this is for Mahapurusha, not mine. (Rigveda 10.90.10)',
            kn: 'ಅದರಿಂದ ಕುದುರೆಗಳೂ, ಮೇಲೆ ಕೆಳಗೆ ಎರಡೂ ಸಾಲು ಹಲ್ಲುಗಳಿರುವ ಪ್ರಾಣಿಗಳೂ ಹುಟ್ಟಿದವು. ಗೋವುಗಳು ಅದರಿಂದಲೇ ಹುಟ್ಟಿದವು; ಆಡು ಕುರಿಗಳೂ ಅದರಿಂದಲೇ ಜನಿಸಿದವು. ಸ್ವಾಹಾ; ಇದು ಮಹಾಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೧೦.೯೦.೧೦)',
          },
        },
        {
          text: 'यत्पुरुषं व्यदधुः कतिधा व्यकल्पयन् ।\nमुखं किमस्य कौ बाहू का ऊरू पादा उच्येते स्वाहा ।\nमहापुरुषायेदं न मम ॥',
          meaning: {
            en: 'When they envisioned the Purusha, in how many ways did they conceive Him? What was His mouth, what His arms, and what are called His thighs and feet? Svaha; this is for Mahapurusha, not mine. (Rigveda 10.90.11)',
            kn: 'ದೇವತೆಗಳು ಪುರುಷನನ್ನು ಧ್ಯಾನದಲ್ಲಿ ಕಲ್ಪಿಸಿಕೊಂಡಾಗ ಎಷ್ಟು ಬಗೆಯಾಗಿ ಕಂಡರು? ಅವನ ಮುಖ ಯಾವುದು? ಬಾಹುಗಳು ಯಾವುವು? ತೊಡೆಗಳು, ಪಾದಗಳು ಯಾವುವು ಎಂದು ಹೇಳಲಾಗುತ್ತದೆ? ಸ್ವಾಹಾ; ಇದು ಮಹಾಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೧೦.೯೦.೧೧)',
          },
        },
        {
          text: 'ब्राह्मणोऽस्य मुखमासीद्बाहू राजन्यः कृतः ।\nऊरू तदस्य यद्वैश्यः पद्भ्यां शूद्रो अजायत स्वाहा ।\nमहापुरुषायेदं न मम ॥',
          meaning: {
            en: 'The Brahmana was His mouth, the Kshatriya was made His arms, the Vaishya was His thighs, and from His feet the Shudra was born. Thus all orders of society arise from the one Lord, like the limbs of a single body. Svaha; this is for Mahapurusha, not mine. (Rigveda 10.90.12)',
            kn: 'ಬ್ರಾಹ್ಮಣನು ಅವನ ಮುಖವಾದನು; ಕ್ಷತ್ರಿಯನು ಅವನ ಬಾಹುಗಳಾದನು; ವೈಶ್ಯನು ಅವನ ತೊಡೆಗಳಾದನು; ಪಾದಗಳಿಂದ ಶೂದ್ರನು ಹುಟ್ಟಿದನು. ಹೀಗೆ ಸಮಾಜದ ಎಲ್ಲ ವರ್ಗಗಳೂ ಒಬ್ಬನೇ ಭಗವಂತನಿಂದ ಹುಟ್ಟಿ, ಒಂದೇ ಶರೀರದ ಅಂಗಗಳಂತೆ ಇವೆ. ಸ್ವಾಹಾ; ಇದು ಮಹಾಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೧೦.೯೦.೧೨)',
          },
        },
        {
          text: 'चन्द्रमा मनसो जातश्चक्षोः सूर्यो अजायत ।\nमुखादिन्द्रश्चाग्निश्च प्राणाद्वायुरजायत स्वाहा ।\nमहापुरुषायेदं न मम ॥',
          meaning: {
            en: 'The moon was born from His mind and the sun from His eyes; Indra and Agni came from His mouth, and Vayu from His breath. Svaha; this is for Mahapurusha, not mine. (Rigveda 10.90.13)',
            kn: 'ಅವನ ಮನಸ್ಸಿನಿಂದ ಚಂದ್ರನು ಹುಟ್ಟಿದನು; ಕಣ್ಣುಗಳಿಂದ ಸೂರ್ಯನು ಹುಟ್ಟಿದನು. ಮುಖದಿಂದ ಇಂದ್ರನೂ ಅಗ್ನಿಯೂ, ಪ್ರಾಣದಿಂದ ವಾಯುವೂ ಜನಿಸಿದರು. ಸ್ವಾಹಾ; ಇದು ಮಹಾಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೧೦.೯೦.೧೩)',
          },
        },
        {
          text: 'नाभ्या आसीदन्तरिक्षं शीर्ष्णो द्यौः समवर्तत ।\nपद्भ्यां भूमिर्दिशः श्रोत्रात्तथा लोकाँ अकल्पयन् स्वाहा ।\nमहापुरुषायेदं न मम ॥',
          meaning: {
            en: 'From His navel came the mid-region, and from His head the heavens took shape; from His feet came the earth and from His ears the directions. In this way the worlds were fashioned. Svaha; this is for Mahapurusha, not mine. (Rigveda 10.90.14)',
            kn: 'ಅವನ ನಾಭಿಯಿಂದ ಅಂತರಿಕ್ಷವೂ, ಶಿರಸ್ಸಿನಿಂದ ದ್ಯುಲೋಕವೂ ಉಂಟಾದವು. ಪಾದಗಳಿಂದ ಭೂಮಿಯೂ, ಕಿವಿಗಳಿಂದ ದಿಕ್ಕುಗಳೂ ಹುಟ್ಟಿದವು. ಹೀಗೆ ಲೋಕಗಳು ರೂಪುಗೊಂಡವು. ಸ್ವಾಹಾ; ಇದು ಮಹಾಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೧೦.೯೦.೧೪)',
          },
        },
        {
          text: 'सप्तास्यासन्परिधयस्त्रिः सप्त समिधः कृताः ।\nदेवा यद्यज्ञं तन्वाना अबध्नन्पुरुषं पशुम् स्वाहा ।\nमहापुरुषायेदं न मम ॥',
          meaning: {
            en: 'That sacrifice had seven enclosing sticks and thrice seven fuel-sticks, when the gods, unfolding it, bound the Purusha as its offering. Svaha; this is for Mahapurusha, not mine. (Rigveda 10.90.15)',
            kn: 'ಆ ಯಜ್ಞಕ್ಕೆ ಏಳು ಪರಿಧಿಗಳೂ ಇಪ್ಪತ್ತೊಂದು ಸಮಿಧೆಗಳೂ ಇದ್ದವು. ಯಜ್ಞವನ್ನು ವಿಸ್ತರಿಸುತ್ತಿದ್ದ ದೇವತೆಗಳು ಪುರುಷನನ್ನೇ ಯಜ್ಞಪಶುವಾಗಿ ಭಾವಿಸಿ ಧ್ಯಾನಿಸಿದರು. ಸ್ವಾಹಾ; ಇದು ಮಹಾಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೧೦.೯೦.೧೫)',
          },
        },
        {
          text: 'यज्ञेन यज्ञमयजन्त देवास्तानि धर्माणि प्रथमान्यासन् ।\nते ह नाकं महिमानः सचन्त यत्र पूर्वे साध्याः सन्ति देवाः स्वाहा ।\nमहापुरुषायेदं न मम ॥',
          meaning: {
            en: 'The gods worshipped the Lord, who is Sacrifice itself, by means of sacrifice; these were the first of all dharmas. Those great souls reach the highest heaven, where the ancient Sadhyas and gods abide. Svaha; this is for Mahapurusha, not mine. (Rigveda 10.90.16)',
            kn: 'ದೇವತೆಗಳು ಯಜ್ಞಸ್ವರೂಪನಾದ ಭಗವಂತನನ್ನು ಯಜ್ಞದಿಂದಲೇ ಆರಾಧಿಸಿದರು; ಅವೇ ಮೊದಲ ಧರ್ಮಗಳಾದವು. ಹಾಗೆ ಆರಾಧಿಸುವ ಮಹಾತ್ಮರು ಹಿಂದಿನ ಸಾಧ್ಯರೂ ದೇವತೆಗಳೂ ನೆಲೆಸಿರುವ ಉನ್ನತ ಲೋಕವನ್ನು ಸೇರುತ್ತಾರೆ. ಸ್ವಾಹಾ; ಇದು ಮಹಾಪುರುಷನಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೧೦.೯೦.೧೬)',
          },
        },
        {
          text: 'ॐ विष्णवे नमः स्वाहा । विष्णव इदं न मम ॥',
          meaning: {
            en: 'Om, salutation to Vishnu, svaha; this is for Vishnu, not mine. (The six-syllable Vishnu mantra, as in Bhagavata 6.8.10: six offerings.)',
            kn: 'ಓಂ ವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ, ಸ್ವಾಹಾ; ಇದು ವಿಷ್ಣುವಿಗೆ, ನನ್ನದಲ್ಲ. (ವಿಷ್ಣು ಷಡಕ್ಷರ ಮಂತ್ರ, ಭಾಗವತ ೬.೮.೧೦ರಂತೆ: ಆರು ಆಹುತಿ.)',
          },
        },
      ],
    },
    {
      title: 'व्याहृतिहोमः',
      titleEn: 'Vyahriti offerings before the main homa',
      note: 'Some Apastamba prayoga manuals (Srimatham) offer ghee with the three vyahritis and then all three together before the pradhana homa; Muddu Shrauti and the Mylapore manual go straight to the main offerings. Follow your family manual.',
      noteKn: 'ಕೆಲವು ಆಪಸ್ತಂಬ ಪ್ರಯೋಗ ಗ್ರಂಥಗಳು (ಶ್ರೀಮಠಮ್) ಪ್ರಧಾನ ಹೋಮಕ್ಕೆ ಮೊದಲು ಮೂರು ವ್ಯಾಹೃತಿಗಳಿಂದ ಮತ್ತು ಮೂರೂ ಸೇರಿ ಆಜ್ಯಾಹುತಿ ಕೊಡುತ್ತವೆ; ಮುದ್ದು ಶ್ರೌತಿ ಮತ್ತು ಮೈಲಾಪುರ ಗ್ರಂಥ ನೇರವಾಗಿ ಪ್ರಧಾನಾಹುತಿಗೆ ಹೋಗುತ್ತವೆ. ನಿಮ್ಮ ಮನೆತನದ ಪದ್ಧತಿ ಅನುಸರಿಸಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'ॐ भूः स्वाहा । अग्नय इदं न मम ।\nॐ भुवः स्वाहा । वायव इदं न मम ।\nॐ सुवः स्वाहा । सूर्यायेदं न मम ।\nॐ भूर्भुवः सुवः स्वाहा । प्रजापतय इदं न मम ॥',
          meaning: {
            en: 'Om, earth, svaha — for Agni, not for me. Om, sky, svaha — for Vayu, not for me. Om, heaven, svaha — for Surya, not for me. Om, earth, sky and heaven, svaha — for Prajapati, not for me.',
            kn: 'ಓಂ ಭೂಃ ಸ್ವಾಹಾ — ಅಗ್ನಿಗೆ, ನನ್ನದಲ್ಲ. ಓಂ ಭುವಃ ಸ್ವಾಹಾ — ವಾಯುವಿಗೆ, ನನ್ನದಲ್ಲ. ಓಂ ಸುವಃ ಸ್ವಾಹಾ — ಸೂರ್ಯನಿಗೆ, ನನ್ನದಲ್ಲ. ಓಂ ಭೂರ್ಭುವಃಸುವಃ ಸ್ವಾಹಾ — ಪ್ರಜಾಪತಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
      ],
    },
    {
      title: 'प्रधानहोमः',
      titleEn: 'The main offerings (pradhana homa)',
      note: 'Now open the text of the homa you are doing (Ganapati, Navagraha, Mrityunjaya, Sudarshana, Chandika, Lakshmi, Ayushya or Pavamana homa): do its invocation of the deity in the fire and make its main offerings with its mantras, materials and counts. Offer ghee with the sruva, solid materials with the right hand (Madhva manuals use the mrigi mudra for til and grains: the thumb with the middle and ring fingers, index and little finger held apart like a deer’s horns); say svaha as the offering touches the fire and the tyaga after it. Meanwhile others recite the chosen stotras, keep the kalasha touched for japa, and do tarpana to the main deity (Homa-Havana). When the count is complete, come back here for the uttaranga (Madhva or Smarta, below). Smarta (Muddu Shrauti): the part from the lines to the ajyabhaga is the “front frame”, from the jaya offerings to the last parishechana the “back frame”, and the main offerings are made between them.',
      noteKn: 'ಈಗ ನೀವು ಮಾಡುತ್ತಿರುವ ಹೋಮದ ಪಠ್ಯವನ್ನು (ಗಣಪತಿ, ನವಗ್ರಹ, ಮೃತ್ಯುಂಜಯ, ಸುದರ್ಶನ, ಚಂಡಿಕಾ, ಲಕ್ಷ್ಮೀ, ಆಯುಷ್ಯ, ಪವಮಾನ) ತೆರೆಯಿರಿ: ಅಗ್ನಿಯಲ್ಲಿ ದೇವತೆಯ ಆವಾಹನೆ ಮಾಡಿ ಅದರ ಮಂತ್ರ, ದ್ರವ್ಯ, ಸಂಖ್ಯೆಗಳಿಂದ ಪ್ರಧಾನಾಹುತಿ ನೀಡಿ. ತುಪ್ಪವನ್ನು ಸ್ರುವದಿಂದ, ಘನ ದ್ರವ್ಯಗಳನ್ನು ಬಲಗೈಯಿಂದ (ಮಾಧ್ವರಲ್ಲಿ ಎಳ್ಳು–ಧಾನ್ಯಗಳಿಗೆ ಮೃಗೀಮುದ್ರೆ); ಆಹುತಿ ಅಗ್ನಿಯನ್ನು ಮುಟ್ಟುವಾಗ ಸ್ವಾಹಾ, ನಂತರ ತ್ಯಾಗ. ಇತರರು ಸ್ತೋತ್ರ ಪಠಿಸುತ್ತ, ಕಲಶವನ್ನು ಮುಟ್ಟಿ ಜಪಿಸುತ್ತ, ಪ್ರಧಾನ ದೇವತೆಗೆ ತರ್ಪಣ ನೀಡುತ್ತಾರೆ (ಹೋಮ–ಹವನ). ಸಂಖ್ಯೆ ಮುಗಿದ ಮೇಲೆ ಉತ್ತರಾಂಗಕ್ಕಾಗಿ ಇಲ್ಲಿಗೆ ಮರಳಿ (ಕೆಳಗೆ ಮಾಧ್ವ ಅಥವಾ ಸ್ಮಾರ್ತ). ಸ್ಮಾರ್ತ (ಮುದ್ದು ಶ್ರೌತಿ): ರೇಖೆಗಳಿಂದ ಆಜ್ಯಭಾಗದವರೆಗೆ “ಪುರಸ್ತಾತ್ ತಂತ್ರ”, ಜಯಾದಿಯಿಂದ ಕೊನೆಯ ಪರಿಷೇಚನದವರೆಗೆ “ಉಪರಿಷ್ಟಾತ್ ತಂತ್ರ”, ಅವುಗಳ ನಡುವೆ ಪ್ರಧಾನಾಹುತಿಗಳು.',
      verses: [
        {
          text: 'अथ प्रधानहोमः ॥',
          meaning: {
            en: 'Now the main homa. (Make the offerings given in the text of your homa.)',
            kn: 'ಈಗ ಪ್ರಧಾನಹೋಮ. (ನಿಮ್ಮ ಹೋಮದ ಪಠ್ಯದಲ್ಲಿರುವ ಆಹುತಿಗಳನ್ನು ನೀಡಿ.)',
          },
        },
        {
          text: 'आज्येन वा पायसेन समिद्भिः क्षीरिणामथ ।\nतिलैर्वा तण्डुलैर्वापि मधुरैस्त्रिभिरेव वा ॥\nब्रह्मवृक्षसमिद्भिर्वा समिद्भिर्वाऽमृतोद्भवैः ।\nअमृताः समिधो ज्ञेयाः सर्वत्र चतुरङ्गुलाः ॥',
          meaning: {
            en: 'Offer with ghee, or with payasa, or with samidhs of the milky trees, or with til, or with rice, or with the three sweet things (milk, ghee and honey); or with samidhs of the ashvattha, or of the amrita creeper (guduchi); amrita samidhs are always four fingers long. (Tantrasara-sangraha 2.20-21)',
            kn: 'ಆಜ್ಯದಿಂದ, ಪಾಯಸದಿಂದ, ಕ್ಷೀರವೃಕ್ಷಗಳ ಸಮಿಧೆಗಳಿಂದ, ಎಳ್ಳಿನಿಂದ, ಅಕ್ಕಿಯಿಂದ, ಅಥವಾ ಮೂರು ಮಧುರಗಳಿಂದ (ಹಾಲು, ತುಪ್ಪ, ಜೇನು) ಹೋಮಿಸಬೇಕು; ಅಥವಾ ಅಶ್ವತ್ಥದ ಸಮಿಧೆಗಳಿಂದ, ಅಮೃತಬಳ್ಳಿಯ ಸಮಿಧೆಗಳಿಂದ; ಅಮೃತಸಮಿಧೆಗಳು ಎಲ್ಲೆಡೆ ನಾಲ್ಕು ಅಂಗುಲ ಉದ್ದ. (ತಂತ್ರಸಾರಸಂಗ್ರಹ ೨.೨೦–೨೧)',
          },
          when: { tradition: ['madhva'] },
        },
      ],
    },
    {
      title: 'स्विष्टकृद्धोमः',
      titleEn: 'Uttaranga: svishtakrit',
      note: 'From here the uttaranga (the closing part) begins. Take ghee (with a little of the charu or other material, if used), pour ghee over it twice, and offer it in the north-eastern part of the fire, apart from the earlier offerings, to Agni Svishtakrit, who makes the offering well-offered (M1).',
      noteKn: 'ಇಲ್ಲಿಂದ ಉತ್ತರಾಂಗ. ತುಪ್ಪವನ್ನು (ಚರು ಮುಂತಾದ ದ್ರವ್ಯವಿದ್ದರೆ ಸ್ವಲ್ಪ ಅದನ್ನೂ) ತೆಗೆದು ಎರಡು ಬಾರಿ ತುಪ್ಪ ಸವರಿ, ಹಿಂದಿನ ಆಹುತಿಗಳಿಂದ ಬೇರೆಯಾಗಿ ಅಗ್ನಿಯ ಈಶಾನ್ಯ ಭಾಗದಲ್ಲಿ ಸ್ವಿಷ್ಟಕೃತ್ ಅಗ್ನಿಗೆ ಅರ್ಪಿಸಿ (ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ).',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'यदस्य कर्मणोऽत्यरीरिचं यद्वा न्यूनमिहाकरम् ।\nअग्निष्टत्स्विष्टकृद्विद्वान्सर्वं स्विष्टं सुहुतं करोतु मे ।\nअग्नये स्विष्टकृते सुहुतहुते सर्वप्रायश्चित्ताहुतीनां कामानां समर्धयित्रे\nसर्वान्नः कामान्त्समर्धय स्वाहा । अग्नये स्विष्टकृत इदं न मम ॥',
          meaning: {
            en: 'Whatever in this rite I have done in excess, or whatever I have done short of what is due, may Agni the Svishtakrit, who knows it, make it all well-sacrificed and well-offered for me. To Agni Svishtakrit, who makes the offering well-offered, who fulfils all expiatory offerings and all wishes: fulfil all our wishes, svaha. This is for Agni Svishtakrit, not for me. (Ashvalayana Grihya Sutra 1.10.23)',
            kn: 'ಈ ಕರ್ಮದಲ್ಲಿ ನಾನು ಏನನ್ನು ಹೆಚ್ಚಾಗಿ ಮಾಡಿದೆನೋ, ಅಥವಾ ಕಡಿಮೆಯಾಗಿ ಮಾಡಿದೆನೋ, ಅದನ್ನು ತಿಳಿದ ಸ್ವಿಷ್ಟಕೃತ್ ಅಗ್ನಿಯು ಎಲ್ಲವನ್ನೂ ನನಗೆ ಸ್ವಿಷ್ಟವಾಗಿಯೂ ಸುಹುತವಾಗಿಯೂ ಮಾಡಲಿ. ಸುಹುತವಾಗಿಸುವ, ಎಲ್ಲ ಪ್ರಾಯಶ್ಚಿತ್ತಾಹುತಿಗಳನ್ನೂ ಕಾಮನೆಗಳನ್ನೂ ಪೂರೈಸುವ ಸ್ವಿಷ್ಟಕೃತ್ ಅಗ್ನಿಗೆ: ನಮ್ಮ ಎಲ್ಲ ಕಾಮನೆಗಳನ್ನೂ ಈಡೇರಿಸು, ಸ್ವಾಹಾ. ಇದು ಸ್ವಿಷ್ಟಕೃತ್ ಅಗ್ನಿಗೆ, ನನ್ನದಲ್ಲ. (ಆಶ್ವಲಾಯನ ಗೃಹ್ಯಸೂತ್ರ ೧.೧೦.೨೩)',
          },
        },
      ],
    },
    {
      title: 'प्रायश्चित्तहोमः',
      titleEn: 'Prayaschitta: Rudra, Ayas Agni, Vishnu and the vyahritis',
      note: 'Untie the string of the fuel bundle, sprinkle it, soak it in ghee and offer it to Rudra; touch water. Then offer ghee with these verses for faults in the rite, and with the vyahritis to the forms of the Lord within Agni, Vayu, Surya and Prajapati (Aniruddha, Pradyumna, Sankarshana and Vasudeva) (M1). M1 has the Brahma also offer seven oblations of ghee with अयाश्च…, अतो देवा…, इदं विष्णुः… and the four vyahritis, without naming the seer and metre.',
      noteKn: 'ಇಧ್ಮದ ಕಟ್ಟುಹಗ್ಗದ ಗಂಟು ಬಿಚ್ಚಿ, ಪ್ರೋಕ್ಷಿಸಿ, ತುಪ್ಪದಲ್ಲಿ ಅದ್ದಿ ರುದ್ರನಿಗೆ ಅರ್ಪಿಸಿ; ನೀರು ಮುಟ್ಟಿ. ನಂತರ ಕರ್ಮದ ದೋಷಗಳಿಗಾಗಿ ಈ ಮಂತ್ರಗಳಿಂದ, ಮತ್ತು ಅಗ್ನಿ, ವಾಯು, ಸೂರ್ಯ, ಪ್ರಜಾಪತಿಗಳೊಳಗಿನ ಅನಿರುದ್ಧ, ಪ್ರದ್ಯುಮ್ನ, ಸಂಕರ್ಷಣ, ವಾಸುದೇವರಿಗೆ ವ್ಯಾಹೃತಿಗಳಿಂದ ಆಜ್ಯಾಹುತಿ (ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ). ಬ್ರಹ್ಮನೂ “ಅಯಾಶ್ಚ…, ಅತೋ ದೇವಾ…, ಇದಂ ವಿಷ್ಣುಃ…” ಮತ್ತು ನಾಲ್ಕು ವ್ಯಾಹೃತಿಗಳಿಂದ ಏಳು ಆಜ್ಯಾಹುತಿ ನೀಡುತ್ತಾನೆ, ಋಷಿ–ಛಂದಸ್ಸು ಹೇಳದೆ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'पशुपतये रुद्राय स्वाहा ।\nरुद्रान्तर्गतभारतीरमणमुख्यप्राणान्तर्गतश्रीसङ्कर्षणायेदं न मम ॥',
          meaning: {
            en: 'To Rudra, lord of beings, svaha. This is for Sri Sankarshana, who dwells within Mukhyaprana, the beloved of Bharati, within Rudra; not for me.',
            kn: 'ಪಶುಪತಿಯಾದ ರುದ್ರನಿಗೆ ಸ್ವಾಹಾ. ಇದು ರುದ್ರಾಂತರ್ಗತ ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಶ್ರೀಸಂಕರ್ಷಣನಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'अयाश्चाग्नेऽस्यनभिशस्तीश्च सत्यमित्त्वमया असि ।\nअयासा वयसा कृतोऽयासन्हव्यमूहिषेऽया नो धेहि भेषजं स्वाहा ।\nअग्नये अयस इदं न मम ॥',
          meaning: {
            en: 'O Agni, you are the one who goes to us and you are blameless; truly you are Ayas. Made the one who goes with vigour, going, you carry the offering; give us healing, svaha. This is for Agni Ayas, not mine. (Ashvalayana Shrauta Sutra 1.11.13; M1.)',
            kn: 'ಓ ಅಗ್ನಿಯೇ, ನೀನು ನಮ್ಮತ್ತ ಸಾಗುವವನು, ನಿಂದಾರಹಿತನು; ನಿಜವಾಗಿ ನೀನು “ಅಯಸ್”. ವೇಗದಿಂದ ಸಾಗುವವನಾಗಿ ಹವಿಸ್ಸನ್ನು ಹೊತ್ತೊಯ್ಯುತ್ತೀಯೆ; ನಮಗೆ ಔಷಧವನ್ನು ಕೊಡು, ಸ್ವಾಹಾ. ಇದು ಅಯಸ್ ಅಗ್ನಿಗೆ, ನನ್ನದಲ್ಲ. (ಆಶ್ವಲಾಯನ ಶ್ರೌತಸೂತ್ರ ೧.೧೧.೧೩.)',
          },
        },
        {
          text: 'अतो देवा अवन्तु नो यतो विष्णुर्विचक्रमे ।\nपृथिव्याः सप्त धामभिः स्वाहा । देवेभ्य इदं न मम ॥',
          meaning: {
            en: 'May the gods protect us from the place whence Vishnu strode forth, through the seven regions of the earth, svaha. This is for the gods, not for me. (Rigveda 1.22.16)',
            kn: 'ವಿಷ್ಣುವು ಎಲ್ಲಿಂದ ಹೆಜ್ಜೆಯಿಟ್ಟನೋ ಅಲ್ಲಿಂದ, ಭೂಮಿಯ ಏಳು ಧಾಮಗಳ ಮೂಲಕ ದೇವತೆಗಳು ನಮ್ಮನ್ನು ರಕ್ಷಿಸಲಿ, ಸ್ವಾಹಾ. ಇದು ದೇವತೆಗಳಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೧.೨೨.೧೬)',
          },
        },
        {
          text: 'इदं विष्णुर्वि चक्रमे त्रेधा नि दधे पदम् ।\nसमूळ्हमस्य पांसुरे स्वाहा । विष्णव इदं न मम ॥',
          meaning: {
            en: 'Vishnu strode over this (universe); three times he set down his foot; it is hidden in his dusty footprint, svaha. This is for Vishnu, not for me. (Rigveda 1.22.17)',
            kn: 'ವಿಷ್ಣುವು ಇದನ್ನು (ಜಗತ್ತನ್ನು) ಅಳೆದನು; ಮೂರು ಬಾರಿ ಹೆಜ್ಜೆಯಿಟ್ಟನು; ಅದೆಲ್ಲವೂ ಅವನ ಧೂಳಿನ ಹೆಜ್ಜೆಯಲ್ಲಿ ಅಡಗಿದೆ, ಸ್ವಾಹಾ. ಇದು ವಿಷ್ಣುವಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೧.೨೨.೧೭)',
          },
        },
        {
          text: 'ॐ भूः स्वाहा । अग्नये श्रीअनिरुद्धाय इदं न मम ।\nॐ भुवः स्वाहा । वायवे श्रीप्रद्युम्नाय इदं न मम ।\nॐ स्वः स्वाहा । सूर्याय श्रीसङ्कर्षणाय इदं न मम ।\nॐ भूर्भुवः स्वः स्वाहा । प्रजापतये श्रीवासुदेवाय इदं न मम ॥',
          meaning: {
            en: 'Om, earth, svaha — for Agni and Sri Aniruddha within him. Om, sky, svaha — for Vayu and Sri Pradyumna within him. Om, heaven, svaha — for Surya and Sri Sankarshana within him. Om, earth, sky and heaven, svaha — for Prajapati and Sri Vasudeva within him. None of it is mine.',
            kn: 'ಓಂ ಭೂಃ ಸ್ವಾಹಾ — ಅಗ್ನಿಗೂ ಅವನೊಳಗಿನ ಶ್ರೀಅನಿರುದ್ಧನಿಗೂ. ಓಂ ಭುವಃ ಸ್ವಾಹಾ — ವಾಯುವಿಗೂ ಶ್ರೀಪ್ರದ್ಯುಮ್ನನಿಗೂ. ಓಂ ಸ್ವಃ ಸ್ವಾಹಾ — ಸೂರ್ಯನಿಗೂ ಶ್ರೀಸಂಕರ್ಷಣನಿಗೂ. ಓಂ ಭೂರ್ಭುವಃಸ್ವಃ ಸ್ವಾಹಾ — ಪ್ರಜಾಪತಿಗೂ ಶ್ರೀವಾಸುದೇವನಿಗೂ. ಯಾವುದೂ ನನ್ನದಲ್ಲ.',
          },
        },
      ],
    },
    {
      title: 'प्रायश्चित्तहोमः',
      titleEn: 'Prayaschitta: for known and unknown faults',
      note: 'Offer ghee with these verses, which ask Agni to set right whatever was done wrongly, knowingly or unknowingly (Taittiriya Brahmana 3.7.11; the third is Rigveda 10.2.5, said with the Rigvedic मर्त्यासः), then with यद्वो देवा… for any reversal of mantra, rite, time, material or deity, and finish with the all-expiation offering (M1).',
      noteKn: 'ತಿಳಿದು ಅಥವಾ ತಿಳಿಯದೆ ತಪ್ಪಾಗಿ ಮಾಡಿದ್ದನ್ನು ಸರಿಪಡಿಸಲು ಅಗ್ನಿಯನ್ನು ಬೇಡುವ ಈ ಮಂತ್ರಗಳಿಂದ ಆಜ್ಯಾಹುತಿ (ತೈತ್ತಿರೀಯ ಬ್ರಾಹ್ಮಣ ೩.೭.೧೧; ಮೂರನೆಯದು ಋಗ್ವೇದ ೧೦.೨.೫, “ಮರ್ತ್ಯಾಸಃ” ಎಂದು), ನಂತರ ಮಂತ್ರ, ತಂತ್ರ, ಕಾಲ, ದ್ರವ್ಯ, ದೇವತಾ ವಿಪರ್ಯಾಸಗಳಿಗೆ “ಯದ್ವೋ ದೇವಾ…”, ಕೊನೆಯಲ್ಲಿ ಸರ್ವಪ್ರಾಯಶ್ಚಿತ್ತ (ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ).',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'अनाज्ञातं यदाज्ञातं यज्ञस्य क्रियते मिथु ।\nअग्ने तदस्य कल्पय त्वं हि वेत्थ यथातथं स्वाहा । अग्नय इदं न मम ॥',
          meaning: {
            en: 'Whatever in the sacrifice is done wrongly, unknowingly or knowingly — O Agni, set it right, for you know it as it truly is, svaha. This is for Agni, not for me.',
            kn: 'ಯಜ್ಞದಲ್ಲಿ ತಿಳಿಯದೆಯೋ ತಿಳಿದೋ ತಪ್ಪಾಗಿ ಮಾಡಿದ್ದನ್ನು, ಓ ಅಗ್ನಿಯೇ, ಸರಿಪಡಿಸು; ಅದನ್ನು ಇದ್ದಂತೆ ನೀನೇ ಬಲ್ಲೆ, ಸ್ವಾಹಾ. ಇದು ಅಗ್ನಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'पुरुषसम्मितो यज्ञो यज्ञः पुरुषसम्मितः ।\nअग्ने तदस्य कल्पय त्वं हि वेत्थ यथातथं स्वाहा । अग्नय इदं न मम ॥',
          meaning: {
            en: 'The sacrifice is measured to the person, the person to the sacrifice; O Agni, set it right, for you know it as it truly is, svaha. This is for Agni, not for me.',
            kn: 'ಯಜ್ಞವು ಪುರುಷನಿಗೆ ಸಮಾನ, ಪುರುಷನು ಯಜ್ಞಕ್ಕೆ ಸಮಾನ; ಓ ಅಗ್ನಿಯೇ, ಇದನ್ನು ಸರಿಪಡಿಸು, ಇದ್ದಂತೆ ನೀನೇ ಬಲ್ಲೆ, ಸ್ವಾಹಾ. ಇದು ಅಗ್ನಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'यत्पाकत्रा मनसा दीनदक्षा न यज्ञस्य मन्वते मर्त्यासः ।\nअग्निष्टद्धोता क्रतुविद्विजानन्यजिष्ठो देवाँ ऋतुशो यजाति स्वाहा । अग्नय इदं न मम ॥',
          meaning: {
            en: 'What mortals of simple mind and little skill do not understand of the sacrifice, Agni the priest, knower of rites, understanding it, best of worshippers, offers to the gods at their proper seasons, svaha. This is for Agni, not for me. (Rigveda 10.2.5)',
            kn: 'ಮುಗ್ಧಮನಸ್ಸಿನ, ಅಲ್ಪಸಾಮರ್ಥ್ಯದ ಮನುಷ್ಯರು ಯಜ್ಞದಲ್ಲಿ ಯಾವುದನ್ನು ಅರಿಯರೋ, ಅದನ್ನು ಕರ್ಮಜ್ಞನಾದ ಹೋತೃ ಅಗ್ನಿಯು ತಿಳಿದು, ಶ್ರೇಷ್ಠ ಯಾಜಕನಾಗಿ ತಕ್ಕ ಕಾಲದಲ್ಲಿ ದೇವತೆಗಳಿಗೆ ಅರ್ಪಿಸುತ್ತಾನೆ, ಸ್ವಾಹಾ. ಇದು ಅಗ್ನಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೧೦.೨.೫)',
          },
        },
        {
          text: 'यद्वो देवा अतिपातयानि वाचा च प्रयुती देवहेळनम् ।\nअरायो अस्माँ अभिदुच्छुनायतेऽन्यत्रास्मन्मरुतस्तन्निधेतन स्वाहा ।\nमरुद्भ्यो देवेभ्य इदं न मम ॥',
          meaning: {
            en: 'O gods, whatever I let fall short of you, and whatever offence to the gods I commit in speech and in purpose: the niggard who seeks to harm us — set that fault elsewhere, away from us, O Maruts, svaha. This is for the Maruts, the gods, not mine. (Ashvalayana Shrauta Sutra 3.13.18, said for any mistake in mantra, rite, time, material or deity; M1.)',
            kn: 'ಓ ದೇವತೆಗಳೇ, ನಿಮಗೆ ನಾನು ಏನು ಕೊರತೆ ಮಾಡಿದೆನೋ, ಮಾತಿನಿಂದಲೂ ಉದ್ದೇಶದಿಂದಲೂ ದೇವತೆಗಳಿಗೆ ಏನು ಅಪರಾಧ ಮಾಡಿದೆನೋ — ನಮಗೆ ಕೇಡು ಬಯಸುವ ಲೋಭಿಯ ಕಡೆಗೆ, ನಮ್ಮಿಂದ ದೂರ, ಆ ದೋಷವನ್ನು ಇಡಿ, ಓ ಮರುತ್ತುಗಳೇ, ಸ್ವಾಹಾ. ಇದು ಮರುದ್ದೇವತೆಗಳಿಗೆ, ನನ್ನದಲ್ಲ. (ಆಶ್ವಲಾಯನ ಶ್ರೌತಸೂತ್ರ ೩.೧೩.೧೮; ಮಂತ್ರ, ತಂತ್ರ, ಕಾಲ, ದ್ರವ್ಯ, ದೇವತಾ ವಿಪರ್ಯಾಸಗಳಿಗೆ.)',
          },
        },
        {
          text: 'सर्वप्रायश्चित्तार्थम् ॐ भूर्भुवः स्वः स्वाहा । प्रजापतये श्रीवासुदेवायेदं न मम ॥',
          meaning: {
            en: 'For the expiation of everything: Om, earth, sky and heaven, svaha; this is for Prajapati and Sri Vasudeva within him, not mine. (M1.)',
            kn: 'ಎಲ್ಲದರ ಪ್ರಾಯಶ್ಚಿತ್ತಕ್ಕಾಗಿ: ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ ಸ್ವಾಹಾ; ಇದು ಪ್ರಜಾಪತಿ ಮತ್ತು ಅವನೊಳಗಿನ ಶ್ರೀವಾಸುದೇವನಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
      ],
    },
    {
      title: 'पूर्णाहुतिः',
      titleEn: 'Purnahuti (the full offering)',
      note: 'Fill the sruk with ghee (with a coconut, cloth, fruit or other offering as the homa prescribes), lay the sruva on it face down with flowers and akshata at its tip, stand, and recite the whole hymn samudrad urmih (Rigveda 4.58, eleven verses), pouring the ghee in an unbroken stream at the svaha of the last verse (M1; the Sudarshana Kalpa the same). Then offer what is left with वि ज्योतिषा… (Rigveda 5.2.9).',
      noteKn: 'ಸ್ರುಕ್ಕನ್ನು ತುಪ್ಪದಿಂದ ತುಂಬಿ (ಹೋಮಕ್ಕೆ ತಕ್ಕಂತೆ ತೆಂಗಿನಕಾಯಿ, ವಸ್ತ್ರ, ಫಲ ಮುಂತಾದವುಗಳೊಡನೆ), ಅದರ ಮೇಲೆ ಸ್ರುವವನ್ನು ಬೋರಲಾಗಿಟ್ಟು ತುದಿಯಲ್ಲಿ ಹೂವು–ಅಕ್ಷತೆ ಇಟ್ಟು, ನಿಂತುಕೊಂಡು “ಸಮುದ್ರಾದೂರ್ಮಿಃ” ಸೂಕ್ತವನ್ನು (ಋಗ್ವೇದ ೪.೫೮, ಹನ್ನೊಂದು ಋಕ್ಕು) ಪೂರ್ತಿ ಹೇಳಿ, ಕೊನೆಯ ಋಕ್ಕಿನ ಸ್ವಾಹಾದಲ್ಲಿ ತುಪ್ಪವನ್ನು ಅಖಂಡ ಧಾರೆಯಾಗಿ ಸುರಿಯಿರಿ (ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ; ಸುದರ್ಶನಕಲ್ಪದಲ್ಲೂ ಹೀಗೆ). ಉಳಿದದ್ದನ್ನು “ವಿ ಜ್ಯೋತಿಷಾ…” (ಋಗ್ವೇದ ೫.೨.೯) ಎಂದು ಅರ್ಪಿಸಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'समुद्रादूर्मिर्मधुमाँ उदारदुपांशुना सममृतत्वमानट् ।\nघृतस्य नाम गुह्यं यदस्ति जिह्वा देवानाममृतस्य नाभिः ॥',
          meaning: {
            en: 'From the ocean a honeyed wave has risen; with the soma-stalk it has reached immortality. It is the secret name of ghee, the tongue of the gods, the navel of immortality.',
            kn: 'ಸಮುದ್ರದಿಂದ ಮಧುರವಾದ ಅಲೆಯೊಂದು ಮೇಲೆದ್ದಿದೆ; ಸೋಮದೊಡನೆ ಅದು ಅಮೃತತ್ವವನ್ನು ಪಡೆದಿದೆ. ಅದು ಘೃತದ ಗುಹ್ಯನಾಮ, ದೇವತೆಗಳ ನಾಲಿಗೆ, ಅಮೃತದ ನಾಭಿ.',
          },
        },
        {
          text: 'वयं नाम प्र ब्रवामा घृतस्यास्मिन्यज्ञे धारयामा नमोभिः ।\nउप ब्रह्मा शृणवच्छस्यमानं चतुःशृङ्गोऽवमीद्गौर एतत् ॥',
          meaning: {
            en: 'Let us proclaim the name of ghee and hold it in this sacrifice with reverence. May the Brahma hear it as it is praised; the four-horned bright one has sent it forth.',
            kn: 'ಘೃತದ ಹೆಸರನ್ನು ನಾವು ಘೋಷಿಸೋಣ, ಈ ಯಜ್ಞದಲ್ಲಿ ನಮಸ್ಕಾರಗಳೊಡನೆ ಅದನ್ನು ಧರಿಸೋಣ. ಸ್ತುತಿಸಲ್ಪಡುವುದನ್ನು ಬ್ರಹ್ಮನು ಕೇಳಲಿ; ನಾಲ್ಕು ಕೊಂಬುಗಳ ಬೆಳಗುವವನು ಇದನ್ನು ಹೊರಹೊಮ್ಮಿಸಿದ್ದಾನೆ.',
          },
        },
        {
          text: 'चत्वारि शृङ्गा त्रयो अस्य पादा द्वे शीर्षे सप्त हस्तासो अस्य ।\nत्रिधा बद्धो वृषभो रोरवीति महो देवो मर्त्याँ आ विवेश ॥',
          meaning: {
            en: 'Four are his horns, three his feet, two his heads, seven his hands; bound in three ways, the bull roars aloud; the great god has entered into mortals.',
            kn: 'ಅವನಿಗೆ ನಾಲ್ಕು ಕೊಂಬುಗಳು, ಮೂರು ಪಾದಗಳು, ಎರಡು ತಲೆಗಳು, ಏಳು ಕೈಗಳು; ಮೂರು ಬಗೆಯಲ್ಲಿ ಬಂಧಿತನಾದ ವೃಷಭನು ಗರ್ಜಿಸುತ್ತಾನೆ; ಆ ಮಹಾದೇವನು ಮನುಷ್ಯರೊಳಗೆ ಪ್ರವೇಶಿಸಿದ್ದಾನೆ.',
          },
        },
        {
          text: 'त्रिधा हितं पणिभिर्गुह्यमानं गवि देवासो घृतमन्वविन्दन् ।\nइन्द्र एकं सूर्य एकं जजान वेनादेकं स्वधया निष्टतक्षुः ॥',
          meaning: {
            en: 'The ghee placed in three ways, hidden by the Panis in the cow, the gods found. Indra produced one part, the Sun another; the third they fashioned by their own power from the radiant one.',
            kn: 'ಮೂರು ಬಗೆಯಲ್ಲಿ ಇಡಲ್ಪಟ್ಟ, ಪಣಿಗಳು ಗೋವಿನಲ್ಲಿ ಅಡಗಿಸಿದ್ದ ಘೃತವನ್ನು ದೇವತೆಗಳು ಕಂಡುಕೊಂಡರು. ಒಂದನ್ನು ಇಂದ್ರ, ಇನ್ನೊಂದನ್ನು ಸೂರ್ಯ ಹುಟ್ಟಿಸಿದರು; ಮೂರನೆಯದನ್ನು ಬೆಳಗುವವನಿಂದ ತಮ್ಮ ಶಕ್ತಿಯಿಂದ ರೂಪಿಸಿದರು.',
          },
        },
        {
          text: 'एता अर्षन्ति हृद्यात्समुद्राच्छतव्रजा रिपुणा नावचक्षे ।\nघृतस्य धारा अभि चाकशीमि हिरण्ययो वेतसो मध्य आसाम् ॥',
          meaning: {
            en: 'These streams flow from the ocean of the heart in a hundred channels, not to be seen by the enemy. I behold the streams of ghee; in their midst is the golden reed.',
            kn: 'ಈ ಧಾರೆಗಳು ಹೃದಯಸಮುದ್ರದಿಂದ ನೂರು ಕಾಲುವೆಗಳಲ್ಲಿ ಹರಿಯುತ್ತವೆ, ಶತ್ರುವಿಗೆ ಕಾಣದಂತೆ. ಘೃತಧಾರೆಗಳನ್ನು ನಾನು ನೋಡುತ್ತೇನೆ; ಅವುಗಳ ನಡುವೆ ಸುವರ್ಣದ ವೇತಸವಿದೆ.',
          },
        },
        {
          text: 'सम्यक्स्रवन्ति सरितो न धेना अन्तर्हृदा मनसा पूयमानाः ।\nएते अर्षन्त्यूर्मयो घृतस्य मृगा इव क्षिपणोरीषमाणाः ॥',
          meaning: {
            en: 'Like rivers the streams of praise flow together, purified within by heart and mind. These waves of ghee rush on like deer fleeing the hunter.',
            kn: 'ಹೃದಯ–ಮನಸ್ಸುಗಳಿಂದ ಒಳಗೆ ಶುದ್ಧವಾದ ಸ್ತುತಿಧಾರೆಗಳು ನದಿಗಳಂತೆ ಒಟ್ಟಾಗಿ ಹರಿಯುತ್ತವೆ. ಈ ಘೃತದ ಅಲೆಗಳು ಬೇಟೆಗಾರನಿಂದ ಓಡುವ ಜಿಂಕೆಗಳಂತೆ ಧಾವಿಸುತ್ತವೆ.',
          },
        },
        {
          text: 'सिन्धोरिव प्राध्वने शूघनासो वातप्रमियः पतयन्ति यह्वाः ।\nघृतस्य धारा अरुषो न वाजी काष्ठा भिन्दन्नूर्मिभिः पिन्वमानः ॥',
          meaning: {
            en: 'As in the rush of a river, the swift young streams fly on, faster than the wind; the streams of ghee, like a red racehorse breaking the bounds, swell with their waves.',
            kn: 'ನದಿಯ ರಭಸದಂತೆ ವೇಗವಾದ ಎಳೆಯ ಧಾರೆಗಳು ಗಾಳಿಗಿಂತ ವೇಗವಾಗಿ ಹಾರುತ್ತವೆ; ಘೃತಧಾರೆಗಳು ಎಲ್ಲೆಯನ್ನು ಮುರಿದು ಓಡುವ ಕೆಂಪು ಕುದುರೆಯಂತೆ ಅಲೆಗಳಿಂದ ಉಕ್ಕುತ್ತವೆ.',
          },
        },
        {
          text: 'अभि प्रवन्त समनेव योषाः कल्याण्यः स्मयमानासो अग्निम् ।\nघृतस्य धाराः समिधो नसन्त ता जुषाणो हर्यति जातवेदाः ॥',
          meaning: {
            en: 'Like fair women going to a festival, smiling, they lean towards Agni; the streams of ghee reach the kindled fuel, and Jatavedas, delighting in them, longs for them.',
            kn: 'ಉತ್ಸವಕ್ಕೆ ಹೋಗುವ ಸುಂದರಿಯರಂತೆ ನಗುತ್ತಾ ಅವು ಅಗ್ನಿಯೆಡೆಗೆ ಬಾಗುತ್ತವೆ; ಘೃತಧಾರೆಗಳು ಸಮಿಧೆಗಳನ್ನು ಸೇರುತ್ತವೆ, ಜಾತವೇದನು ಅವುಗಳಲ್ಲಿ ಸಂತೋಷಿಸಿ ಅವನ್ನು ಬಯಸುತ್ತಾನೆ.',
          },
        },
        {
          text: 'कन्या इव वहतुमेतवा उ अञ्ज्यञ्जाना अभि चाकशीमि ।\nयत्र सोमः सूयते यत्र यज्ञो घृतस्य धारा अभि तत्पवन्ते ॥',
          meaning: {
            en: 'Like maidens adorned with ointment going to their wedding, so I behold them; where soma is pressed, where the sacrifice is, there the streams of ghee flow purifying.',
            kn: 'ಅಲಂಕೃತರಾಗಿ ವಿವಾಹಕ್ಕೆ ಹೊರಟ ಕನ್ಯೆಯರಂತೆ ಅವನ್ನು ನಾನು ನೋಡುತ್ತೇನೆ; ಎಲ್ಲಿ ಸೋಮವನ್ನು ಹಿಂಡುತ್ತಾರೋ, ಎಲ್ಲಿ ಯಜ್ಞವಿದೆಯೋ ಅಲ್ಲಿಗೆ ಘೃತಧಾರೆಗಳು ಶುದ್ಧವಾಗಿ ಹರಿಯುತ್ತವೆ.',
          },
        },
        {
          text: 'अभ्यर्षत सुष्टुतिं गव्यमाजिमस्मासु भद्रा द्रविणानि धत्त ।\nइमं यज्ञं नयत देवता नो घृतस्य धारा मधुमत्पवन्ते ॥',
          meaning: {
            en: 'Flow towards our fair praise, towards the prize of cattle; bestow auspicious riches on us. Lead this sacrifice of ours to the gods; the streams of ghee flow, rich in honey.',
            kn: 'ನಮ್ಮ ಸುಂದರ ಸ್ತುತಿಯೆಡೆಗೆ, ಗೋಸಂಪತ್ತಿನ ಫಲದೆಡೆಗೆ ಹರಿಯಿರಿ; ನಮಗೆ ಮಂಗಳಕರ ಸಂಪತ್ತನ್ನು ಕೊಡಿ. ನಮ್ಮ ಈ ಯಜ್ಞವನ್ನು ದೇವತೆಗಳೆಡೆಗೆ ಕೊಂಡೊಯ್ಯಿರಿ; ಮಧುರವಾದ ಘೃತಧಾರೆಗಳು ಹರಿಯುತ್ತಿವೆ.',
          },
        },
        {
          text: 'धामन्ते विश्वं भुवनमधि श्रितमन्तः समुद्रे हृद्यन्तरायुषि ।\nअपामनीके समिथे य आभृतस्तमश्याम मधुमन्तं त ऊर्मिं स्वाहा ।\nअग्नय इदं न मम ॥',
          meaning: {
            en: 'The whole world rests in your abode, within the ocean, within the heart, within life. May we taste that honeyed wave of yours which is brought to the meeting-place of the waters, svaha. This is for Agni, not for me.',
            kn: 'ಇಡೀ ಜಗತ್ತು ನಿನ್ನ ಧಾಮದಲ್ಲಿ — ಸಮುದ್ರದೊಳಗೆ, ಹೃದಯದೊಳಗೆ, ಆಯುಸ್ಸಿನೊಳಗೆ — ನೆಲೆಸಿದೆ. ಜಲಗಳ ಸಂಗಮಕ್ಕೆ ತರಲ್ಪಟ್ಟ ನಿನ್ನ ಆ ಮಧುರ ಅಲೆಯನ್ನು ನಾವು ಸವಿಯುವಂತಾಗಲಿ, ಸ್ವಾಹಾ. ಇದು ಅಗ್ನಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'वि ज्योतिषा बृहता भात्यग्निराविर्विश्वानि कृणुते महित्वा ।\nप्रादेवीर्मायाः सहते दुरेवाः शिशीते शृङ्गे रक्षसे विनिक्षे स्वाहा ।\nअग्नय इदं न मम ॥',
          meaning: {
            en: 'Agni shines forth with great light and by his greatness makes all things manifest; he overcomes ungodly, evil deceptions and sharpens his horns to pierce the demon, svaha. This is for Agni, not for me. (Rigveda 5.2.9; offering what remains of the purnahuti.)',
            kn: 'ಅಗ್ನಿಯು ಮಹಾ ಜ್ಯೋತಿಯಿಂದ ಬೆಳಗುತ್ತಾನೆ, ತನ್ನ ಮಹಿಮೆಯಿಂದ ಎಲ್ಲವನ್ನೂ ಪ್ರಕಟಗೊಳಿಸುತ್ತಾನೆ; ದೈವವಿರೋಧಿ ದುಷ್ಟ ಮಾಯೆಗಳನ್ನು ಜಯಿಸುತ್ತಾನೆ, ರಾಕ್ಷಸನನ್ನು ಇರಿಯಲು ಕೊಂಬುಗಳನ್ನು ಮಸೆಯುತ್ತಾನೆ, ಸ್ವಾಹಾ. ಇದು ಅಗ್ನಿಗೆ, ನನ್ನದಲ್ಲ. (ಋಗ್ವೇದ ೫.೨.೯; ಪೂರ್ಣಾಹುತಿಶೇಷ.)',
          },
        },
      ],
    },
    {
      title: 'संस्रावहोमः',
      titleEn: 'The samsrava offering',
      note: 'Offer the ghee that has gathered in the sruva during the homa to the Vishvedevas (M1).',
      noteKn: 'ಹೋಮದ ಸಮಯದಲ್ಲಿ ಸ್ರುವದಲ್ಲಿ ಸಂಗ್ರಹವಾದ ತುಪ್ಪವನ್ನು (ಸಂಸ್ರಾವ) ವಿಶ್ವೇದೇವತೆಗಳಿಗೆ ಅರ್ಪಿಸಿ (ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ).',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'विश्वेभ्यो देवेभ्यः संस्रावभागेभ्यः स्वाहा ।\nविश्वेभ्यो देवेभ्यः संस्रावभागेभ्य इदं न मम ॥',
          meaning: {
            en: 'To all the gods, whose share is the gathered ghee, svaha. This is for all the gods whose share is the samsrava, not for me.',
            kn: 'ಸಂಸ್ರಾವವೇ ಭಾಗವಾದ ವಿಶ್ವೇದೇವರಿಗೆ ಸ್ವಾಹಾ. ಇದು ಸಂಸ್ರಾವಭಾಗದ ವಿಶ್ವೇದೇವರಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
      ],
    },
    {
      title: 'पूर्णपात्रं मार्जनं च',
      titleEn: 'The purna-patra and marjana',
      note: 'Set the ghee vessel to the north. Pour out the pranita water (the purna-patra) on the barhis and touch it with पूर्णमसि…. With darbha tips sprinkle its water towards the five directions with प्राच्यां दिशि…, sprinkle your head with आपो अस्मान्… and इदमापः…, and pour a little to the south-west. The Brahma then pours the remaining water into the joined palms of the yajamana’s wife, saying माहं प्रजाम्…; say शान्तिरस्तु पुष्टिरस्तु, put akshata on the head and sprinkle yourself and your wife (M1).',
      noteKn: 'ತುಪ್ಪದ ಪಾತ್ರೆಯನ್ನು ಉತ್ತರಕ್ಕಿಡಿ. ಪ್ರಣೀತಾ ಜಲವನ್ನು (ಪೂರ್ಣಪಾತ್ರ) ಬರ್ಹಿಸ್ಸಿನ ಮೇಲೆ ಸುರಿದು “ಪೂರ್ಣಮಸಿ…” ಎಂದು ಮುಟ್ಟಿ. ದರ್ಭಾಗ್ರಗಳಿಂದ ಆ ಜಲವನ್ನು “ಪ್ರಾಚ್ಯಾಂ ದಿಶಿ…” ಎಂದು ಐದು ದಿಕ್ಕುಗಳಿಗೆ ಪ್ರೋಕ್ಷಿಸಿ, “ಆಪೋ ಅಸ್ಮಾನ್…”, “ಇದಮಾಪಃ…” ಎಂದು ತಲೆಗೆ ಪ್ರೋಕ್ಷಿಸಿ, ಸ್ವಲ್ಪ ನೈಋತ್ಯಕ್ಕೆ ಸುರಿಯಿರಿ. ನಂತರ ಬ್ರಹ್ಮನು ಉಳಿದ ಜಲವನ್ನು “ಮಾಹಂ ಪ್ರಜಾಮ್…” ಎಂದು ಯಜಮಾನಪತ್ನಿಯ ಬೊಗಸೆಗೆ ಸುರಿಯುತ್ತಾನೆ; “ಶಾಂತಿರಸ್ತು ಪುಷ್ಟಿರಸ್ತು” ಎಂದು ತಲೆಗೆ ಅಕ್ಷತೆ ಹಾಕಿ, ತನಗೂ ಪತ್ನಿಗೂ ಪ್ರೋಕ್ಷಿಸಿ (ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ).',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'पूर्णमसि पूर्णं मे भूयाः सुपूर्णमसि सुपूर्णं मे भूयाः\nसदसि सन्मे भूयाः सर्वमसि सर्वं मे भूया अक्षितिरसि मा मे क्षेष्ठाः ॥',
          meaning: {
            en: 'You are full, may I be full; you are well filled, may I be well filled; you are the real, may I be real; you are all, may I have all; you are imperishable, do not perish for me. (Said touching the pranita vessel, the purna-patra; Ashvalayana Shrauta Sutra 1.11.6; M1.)',
            kn: 'ನೀನು ಪೂರ್ಣ, ನಾನು ಪೂರ್ಣನಾಗಲಿ; ನೀನು ಸುಪೂರ್ಣ, ನಾನು ಸುಪೂರ್ಣನಾಗಲಿ; ನೀನು ಸತ್, ನಾನು ಸತ್ತಾಗಲಿ; ನೀನು ಸರ್ವ, ನನಗೆ ಸರ್ವವೂ ಆಗಲಿ; ನೀನು ಅಕ್ಷಯ, ನನಗೆ ಕ್ಷಯಿಸಬೇಡ. (ಪ್ರಣೀತಾ ಪಾತ್ರೆಯನ್ನು — ಪೂರ್ಣಪಾತ್ರ — ಮುಟ್ಟಿ ಹೇಳುವುದು; ಆಶ್ವಲಾಯನ ಶ್ರೌತಸೂತ್ರ ೧.೧೧.೬.)',
          },
        },
        {
          text: 'प्राच्यां दिशि देवा ऋत्विजो मार्जयन्ताम् । दक्षिणस्यां दिशि मासाः पितरो मार्जयन्ताम् ।\nप्रतीच्यां दिशि गृहाः पशवो मार्जयन्ताम् । उदीच्यां दिशि आप ओषधयो वनस्पतयो मार्जयन्ताम् ।\nऊर्ध्वायां दिशि यज्ञः संवत्सरः प्रजापतिर्मार्जयन्ताम् ॥',
          meaning: {
            en: 'In the east may the gods and the priests be sprinkled (and purify us); in the south the months and the ancestors; in the west the houses and the cattle; in the north the waters, the plants and the trees; above, the sacrifice, the year and Prajapati. (Ashvalayana Shrauta Sutra 1.11.7.)',
            kn: 'ಪೂರ್ವದಲ್ಲಿ ದೇವತೆಗಳೂ ಋತ್ವಿಜರೂ, ದಕ್ಷಿಣದಲ್ಲಿ ಮಾಸಗಳೂ ಪಿತೃಗಳೂ, ಪಶ್ಚಿಮದಲ್ಲಿ ಮನೆಗಳೂ ಪಶುಗಳೂ, ಉತ್ತರದಲ್ಲಿ ಜಲ, ಓಷಧಿ, ವನಸ್ಪತಿಗಳೂ, ಮೇಲೆ ಯಜ್ಞ, ಸಂವತ್ಸರ, ಪ್ರಜಾಪತಿಗಳೂ ಪ್ರೋಕ್ಷಿಸಲ್ಪಡಲಿ (ನಮ್ಮನ್ನು ಶುದ್ಧಗೊಳಿಸಲಿ). (ಆಪಸ್ತಂಬ ಪದ್ಧತಿಯಲ್ಲಿ ಕೊನೆಗೆ “ಯಜ್ಞಃ ಸಂವತ್ಸರೋ ಯಜ್ಞಪತಿಃ”.)',
          },
        },
        {
          text: 'आपो अस्मान्मातरः शुन्धयन्तु घृतेन नो घृतप्वः पुनन्तु ।\nविश्वं हि रिप्रं प्रवहन्ति देवीरुदिदाभ्यः शुचिरा पूत एमि ॥',
          meaning: {
            en: 'May the Waters, our mothers, cleanse us; may they who purify with ghee purify us with ghee. The divine Waters carry away all impurity; I come up out of them pure and cleansed. (Rigveda 10.17.10)',
            kn: 'ತಾಯಂದಿರಾದ ಜಲದೇವತೆಗಳು ನಮ್ಮನ್ನು ಶುದ್ಧಗೊಳಿಸಲಿ; ಘೃತದಿಂದ ಶುದ್ಧಗೊಳಿಸುವವರು ಘೃತದಿಂದ ನಮ್ಮನ್ನು ಪವಿತ್ರಗೊಳಿಸಲಿ. ದಿವ್ಯಜಲಗಳು ಎಲ್ಲ ಕೊಳೆಯನ್ನೂ ಕೊಚ್ಚಿಕೊಂಡು ಹೋಗುತ್ತವೆ; ಅವುಗಳಿಂದ ನಾನು ಶುಚಿಯಾಗಿ ಪವಿತ್ರನಾಗಿ ಮೇಲೆ ಬರುತ್ತೇನೆ. (ಋಗ್ವೇದ ೧೦.೧೭.೧೦)',
          },
        },
        {
          text: 'इदमापः प्र वहत यत्किं च दुरितं मयि ।\nयद्वाहमभिदुद्रोह यद्वा शेप उतानृतम् ॥\nसुमित्र्या न आप ओषधयः सन्तु दुर्मित्र्यास्तस्मै सन्तु योऽस्मान्द्वेष्टि यं च वयं द्विष्मः ॥',
          meaning: {
            en: 'O Waters, carry away whatever wrong is in me, whatever harm I have done, whatever curse I have spoken, and any untruth. (Rigveda 1.23.22) May the waters and plants be friendly to us, and unfriendly to him who hates us and whom we hate (said as water is poured to the south-west; M1, Shankhayana Shrauta Sutra).',
            kn: 'ಓ ಜಲಗಳೇ, ನನ್ನಲ್ಲಿರುವ ಯಾವುದೇ ಪಾಪವನ್ನೂ, ನಾನು ಮಾಡಿದ ದ್ರೋಹವನ್ನೂ, ಆಡಿದ ಶಾಪವನ್ನೂ, ಸುಳ್ಳನ್ನೂ ಕೊಚ್ಚಿಕೊಂಡು ಹೋಗಿರಿ. (ಋಗ್ವೇದ ೧.೨೩.೨೨) ಜಲಗಳೂ ಓಷಧಿಗಳೂ ನಮಗೆ ಮಿತ್ರರಾಗಲಿ; ನಮ್ಮನ್ನು ದ್ವೇಷಿಸುವವನಿಗೆ, ನಾವು ದ್ವೇಷಿಸುವವನಿಗೆ ಅಮಿತ್ರರಾಗಲಿ (ನೈಋತ್ಯಕ್ಕೆ ನೀರು ಸುರಿಯುತ್ತ).',
          },
        },
        {
          text: 'माहं प्रजां परासिचं या नः सयावरीः स्थन ।\nसमुद्रे वो निनयानि स्वं पाथो अपीथ ॥',
          meaning: {
            en: 'May I not pour away the offspring, you waters who go along with us; I pour you into the ocean: go to your own abode. (The Brahma pours the rest of the pranita water into the joined palms of the yajamana’s wife; Ashvalayana Shrauta Sutra 1.11.8; M1.)',
            kn: 'ನಮ್ಮೊಡನೆ ಸಾಗುವ ಜಲಗಳೇ, ನಾನು ಸಂತಾನವನ್ನು ಚೆಲ್ಲಿಬಿಡದಿರಲಿ; ನಿಮ್ಮನ್ನು ಸಮುದ್ರಕ್ಕೆ ಸುರಿಯುತ್ತೇನೆ, ನಿಮ್ಮ ಸ್ವಸ್ಥಾನವನ್ನು ಸೇರಿರಿ. (ಬ್ರಹ್ಮನು ಉಳಿದ ಪ್ರಣೀತಾ ಜಲವನ್ನು ಯಜಮಾನಪತ್ನಿಯ ಬೊಗಸೆಗೆ ಸುರಿಯುವಾಗ; ಆಶ್ವಲಾಯನ ಶ್ರೌತಸೂತ್ರ ೧.೧೧.೮.)',
          },
        },
      ],
    },
    {
      title: 'अग्न्युपस्थानम्',
      titleEn: 'Agni upasthana (praise of the fire)',
      note: 'Take away the paristarana darbha to the north; give a gift to the Brahma (ब्रह्मणे वरं ददामि). Decorate the fire again with gandha, flowers and akshata with विश्वानि नो… (as before), go round it four times, and stand before it with folded hands praising it with अग्ने त्वं नो… (Rigveda 5.24.1-4) and बोधा मे… (Rigveda 1.147.2) (M1).',
      noteKn: 'ಪರಿಸ್ತರಣ ದರ್ಭೆಗಳನ್ನು ಉತ್ತರಕ್ಕೆ ತೆಗೆಯಿರಿ; ಬ್ರಹ್ಮನಿಗೆ ದಾನ ನೀಡಿ (ಬ್ರಹ್ಮಣೇ ವರಂ ದದಾಮಿ). “ವಿಶ್ವಾನಿ ನೋ…” ಎಂದು ಮತ್ತೆ ಗಂಧ–ಹೂವು–ಅಕ್ಷತೆಗಳಿಂದ ಅಗ್ನಿಯನ್ನು ಅಲಂಕರಿಸಿ, ನಾಲ್ಕು ಪ್ರದಕ್ಷಿಣೆ ಮಾಡಿ, ಕೈಮುಗಿದು “ಅಗ್ನೇ ತ್ವಂ ನೋ…” (ಋಗ್ವೇದ ೫.೨೪.೧–೪) ಮತ್ತು “ಬೋಧಾ ಮೇ…” (ಋಗ್ವೇದ ೧.೧೪೭.೨) ಎಂದು ಸ್ತುತಿಸಿ (ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ).',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'अग्ने त्वं नो अन्तम उत त्राता शिवो भवा वरूथ्यः ।\nवसुरग्निर्वसुश्रवा अच्छा नक्षि द्युमत्तमं रयिं दाः ।\nस नो बोधि श्रुधी हवमुरुष्या णो अघायतः समस्मात् ।\nतं त्वा शोचिष्ठ दीदिवः सुम्नाय नूनमीमहे सखिभ्यः ॥',
          meaning: {
            en: 'O Agni, be our nearest friend, our protector, kind and sheltering. Good Agni, famed for wealth, come to us and give us the most splendid riches. Heed us, hear our call, guard us from every evil-wisher. O brightest, shining one, we pray to you now for happiness for our friends. (Rigveda 5.24.1-4)',
            kn: 'ಓ ಅಗ್ನಿಯೇ, ನಮಗೆ ಅತಿ ಸಮೀಪದ ಮಿತ್ರನಾಗು, ರಕ್ಷಕನಾಗು, ಮಂಗಳಕರನಾಗು, ಆಶ್ರಯದಾತನಾಗು. ಸಂಪತ್ತಿನಿಂದ ಪ್ರಸಿದ್ಧನಾದ ಅಗ್ನಿಯೇ, ನಮ್ಮೆಡೆಗೆ ಬಂದು ಅತ್ಯಂತ ಉಜ್ವಲ ಸಂಪತ್ತನ್ನು ಕೊಡು. ನಮ್ಮನ್ನು ಗಮನಿಸು, ನಮ್ಮ ಕರೆಯನ್ನು ಕೇಳು, ಎಲ್ಲ ದುಷ್ಟರಿಂದ ನಮ್ಮನ್ನು ಕಾಪಾಡು. ಓ ಅತಿ ತೇಜಸ್ವಿಯೇ, ಬೆಳಗುವವನೇ, ನಮ್ಮ ಸ್ನೇಹಿತರ ಸುಖಕ್ಕಾಗಿ ಈಗ ನಿನ್ನನ್ನು ಬೇಡುತ್ತೇವೆ. (ಋಗ್ವೇದ ೫.೨೪.೧–೪)',
          },
        },
        {
          text: 'बोधा मे अस्य वचसो यविष्ठ मंहिष्ठस्य प्रभृतस्य स्वधावः ।\nपीयति त्वो अनु त्वो गृणाति वन्दारुस्ते तन्वं वन्दे अग्ने ॥',
          meaning: {
            en: 'Heed this most generous word that I bring you, O youngest, self-powerful Agni. One reviles, another praises; I, your worshipper, bow to your very form, O Agni. (Rigveda 1.147.2)',
            kn: 'ಓ ಅತಿ ತರುಣನೇ, ಸ್ವಶಕ್ತಿಯುಳ್ಳ ಅಗ್ನಿಯೇ, ನಾನು ತಂದ ಈ ಶ್ರೇಷ್ಠ ಸ್ತುತಿವಾಕ್ಯವನ್ನು ಗಮನಿಸು. ಒಬ್ಬನು ನಿಂದಿಸುತ್ತಾನೆ, ಇನ್ನೊಬ್ಬನು ಸ್ತುತಿಸುತ್ತಾನೆ; ಭಕ್ತನಾದ ನಾನು ಓ ಅಗ್ನಿಯೇ, ನಿನ್ನ ಸ್ವರೂಪಕ್ಕೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ. (ಋಗ್ವೇದ ೧.೧೪೭.೨)',
          },
        },
      ],
    },
    {
      title: 'रक्षाधारणम्',
      titleEn: 'Wearing the raksha (sacred ash)',
      note: 'Take a little ash (bhasma) from the north side of the fire with मा नस्तोके… and apply it with the ring finger with बृहत्साम… and these mantras: त्र्यायुषं जमदग्नेः on the forehead, कश्यपस्य त्र्यायुषम् on the throat, अगस्त्यस्य त्र्यायुषम् on the navel, यद्देवानां त्र्यायुषम् on the right shoulder, तन्मे अस्तु त्र्यायुषम् on the left shoulder, सर्वमस्तु शतायुषम् on the head, and बलायुषम् over the whole body (M1).',
      noteKn: '“ಮಾ ನಸ್ತೋಕೇ…” ಎಂದು ಅಗ್ನಿಯ ಉತ್ತರ ಭಾಗದಿಂದ ಸ್ವಲ್ಪ ಭಸ್ಮ ತೆಗೆದು, “ಬೃಹತ್ಸಾಮ…” ಮತ್ತು ಈ ಮಂತ್ರಗಳಿಂದ ಉಂಗುರಬೆರಳಿನಿಂದ ಧರಿಸಿ: “ತ್ರ್ಯಾಯುಷಂ ಜಮದಗ್ನೇಃ” ಹಣೆಗೆ, “ಕಶ್ಯಪಸ್ಯ ತ್ರ್ಯಾಯುಷಮ್” ಕಂಠಕ್ಕೆ, “ಅಗಸ್ತ್ಯಸ್ಯ ತ್ರ್ಯಾಯುಷಮ್” ನಾಭಿಗೆ, “ಯದ್ದೇವಾನಾಂ ತ್ರ್ಯಾಯುಷಮ್” ಬಲಭುಜಕ್ಕೆ, “ತನ್ಮೇ ಅಸ್ತು ತ್ರ್ಯಾಯುಷಮ್” ಎಡಭುಜಕ್ಕೆ, “ಸರ್ವಮಸ್ತು ಶತಾಯುಷಮ್” ತಲೆಗೆ, “ಬಲಾಯುಷಮ್” ಸರ್ವಾಂಗಕ್ಕೆ (ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ).',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'मा नस्तोके तनये मा न आयौ मा नो गोषु मा नो अश्वेषु रीरिषः ।\nवीरान्मा नो रुद्र भामितो वधीर्हविष्मन्तः सदमित्त्वा हवामहे ॥',
          meaning: {
            en: 'Harm us not in our children and grandchildren, nor in our life, nor in our cattle, nor in our horses. O Rudra, in anger strike not our heroes; bearing offerings we call on you always. (Rigveda 1.114.8; said while taking the ash.)',
            kn: 'ನಮ್ಮ ಮಕ್ಕಳು–ಮೊಮ್ಮಕ್ಕಳಲ್ಲಿ, ನಮ್ಮ ಆಯುಸ್ಸಿನಲ್ಲಿ, ನಮ್ಮ ಗೋವುಗಳಲ್ಲಿ, ಕುದುರೆಗಳಲ್ಲಿ ನಮಗೆ ಹಾನಿ ಮಾಡಬೇಡ. ಓ ರುದ್ರನೇ, ಕೋಪದಿಂದ ನಮ್ಮ ವೀರರನ್ನು ಕೊಲ್ಲಬೇಡ; ಹವಿಸ್ಸನ್ನು ಹಿಡಿದು ನಾವು ಯಾವಾಗಲೂ ನಿನ್ನನ್ನು ಕರೆಯುತ್ತೇವೆ. (ಋಗ್ವೇದ ೧.೧೧೪.೮; ಭಸ್ಮ ತೆಗೆದುಕೊಳ್ಳುವಾಗ.)',
          },
        },
        {
          text: 'बृहत्साम क्षत्रभृद्वृद्धवृष्णियं त्रिष्टुभौजः शुभितमुग्रवीरम् ।\nइन्द्र स्तोमेन पञ्चदशेन मध्यमिदं वातेन सगरेण रक्ष ॥',
          meaning: {
            en: 'The Brihat Saman, bearer of rule, of great virile strength, with the might of the Trishtubh, splendid, with mighty heroes: O Indra, with the fifteenfold stoma and the wind Sagara, protect this middle (the body). (Said applying the raksha ash; Ashvalayana Shrauta Sutra 4.12.2; M1 and the Mylapore manual.)',
            kn: 'ಕ್ಷತ್ರವನ್ನು ಧರಿಸುವ, ಮಹಾಬಲವುಳ್ಳ ಬೃಹತ್ಸಾಮ, ತ್ರಿಷ್ಟುಪ್ಪಿನ ತೇಜಸ್ಸು, ಶೋಭಾಯಮಾನ, ಉಗ್ರವೀರರುಳ್ಳದ್ದು: ಓ ಇಂದ್ರನೇ, ಪಂಚದಶ ಸ್ತೋಮದಿಂದಲೂ ಸಗರ ಎಂಬ ವಾಯುವಿನಿಂದಲೂ ಈ ಮಧ್ಯವನ್ನು (ದೇಹವನ್ನು) ರಕ್ಷಿಸು. (ರಕ್ಷೆಯ ಭಸ್ಮ ಧರಿಸುವಾಗ; ಆಶ್ವಲಾಯನ ಶ್ರೌತಸೂತ್ರ ೪.೧೨.೨; ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ, ಮೈಲಾಪುರ ಗ್ರಂಥ.)',
          },
        },
        {
          text: 'त्र्यायुषं जमदग्नेः । कश्यपस्य त्र्यायुषम् । अगस्त्यस्य त्र्यायुषम् ।\nयद्देवानां त्र्यायुषम् । तन्मे अस्तु त्र्यायुषम् । सर्वमस्तु शतायुषम् ॥',
          meaning: {
            en: 'The threefold life-span of Jamadagni, the threefold life-span of Kashyapa, the threefold life-span of Agastya, the threefold life-span of the gods — may that threefold life-span be mine; may all of it be a life of a hundred years.',
            kn: 'ಜಮದಗ್ನಿಯ ತ್ರಿಗುಣ ಆಯುಸ್ಸು, ಕಶ್ಯಪನ ತ್ರಿಗುಣ ಆಯುಸ್ಸು, ಅಗಸ್ತ್ಯನ ತ್ರಿಗುಣ ಆಯುಸ್ಸು, ದೇವತೆಗಳ ತ್ರಿಗುಣ ಆಯುಸ್ಸು — ಆ ತ್ರಿಗುಣ ಆಯುಸ್ಸು ನನಗಾಗಲಿ; ಎಲ್ಲವೂ ನೂರು ವರ್ಷದ ಆಯುಸ್ಸಾಗಲಿ.',
          },
        },
      ],
    },
    {
      title: 'अग्न्यन्तर्गतभगवत्पूजा अग्नेर्नयेति प्रदक्षिणं च',
      titleEn: 'Worship of the Lord in the fire and agne naya',
      note: 'At the end of the homa worship the Lord within the fire (यज्ञपुरुषान्तर्यामी श्रीभारतीरमणमुख्यप्राणान्तर्गत हरिणीपतिपरशुरामाय नमः) with the sixteen upacharas: sweep and sprinkle round the fire, decorate it with gandha, flowers and akshata, and offer naivedya and tambula. M1 then has the yajamana pray to Agni for faith, wisdom, fame, learning, prosperity, strength, long life, lustre and health (that prayer is not printed here), and say the abhivadana with his gotra. Go round the fire reciting the whole of अग्ने नय… (Rigveda 1.189, eight verses).',
      noteKn: 'ಹೋಮದ ಕೊನೆಯಲ್ಲಿ ಅಗ್ನಿಯೊಳಗಿನ ಭಗವಂತನನ್ನು (ಯಜ್ಞಪುರುಷಾಂತರ್ಯಾಮಿ ಶ್ರೀಭಾರತೀರಮಣಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತ ಹರಿಣೀಪತಿಪರಶುರಾಮಾಯ ನಮಃ) ಷೋಡಶೋಪಚಾರಗಳಿಂದ ಪೂಜಿಸಿ: ಅಗ್ನಿಯ ಸುತ್ತ ಪರಿಸಮೂಹನ–ಪರ್ಯುಕ್ಷಣ ಮಾಡಿ, ಗಂಧ–ಹೂವು–ಅಕ್ಷತೆಗಳಿಂದ ಅಲಂಕರಿಸಿ, ನೈವೇದ್ಯ–ತಾಂಬೂಲ ಅರ್ಪಿಸಿ. ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗದಲ್ಲಿ ಆಮೇಲೆ ಶ್ರದ್ಧೆ, ಮೇಧೆ, ಯಶಸ್ಸು, ವಿದ್ಯೆ, ಸಂಪತ್ತು, ಬಲ, ಆಯುಸ್ಸು, ತೇಜಸ್ಸು, ಆರೋಗ್ಯಗಳಿಗಾಗಿ ಅಗ್ನಿಪ್ರಾರ್ಥನೆ (ಇಲ್ಲಿ ಮುದ್ರಿಸಿಲ್ಲ), ಗೋತ್ರಸಹಿತ ಅಭಿವಾದನ. “ಅಗ್ನೇ ನಯ…” ಸೂಕ್ತವನ್ನು (ಋಗ್ವೇದ ೧.೧೮೯, ಎಂಟು ಋಕ್ಕು) ಪೂರ್ತಿ ಹೇಳುತ್ತ ಪ್ರದಕ್ಷಿಣೆ ಮಾಡಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'अग्ने नय सुपथा राये अस्मान्विश्वानि देव वयुनानि विद्वान् ।\nयुयोध्यस्मज्जुहुराणमेनो भूयिष्ठां ते नम उक्तिं विधेम ॥',
          meaning: {
            en: 'O Agni, lead us by the good path to prosperity, O god who know all our ways. Keep far from us the sin that leads astray; we offer you our fullest words of homage. (Rigveda 1.189.1; Taittiriya Samhita 1.1.14)',
            kn: 'ಓ ಅಗ್ನಿಯೇ, ನಮ್ಮ ಎಲ್ಲ ನಡೆಗಳನ್ನೂ ಬಲ್ಲ ದೇವನೇ, ಸನ್ಮಾರ್ಗದಿಂದ ನಮ್ಮನ್ನು ಶ್ರೇಯಸ್ಸಿನೆಡೆಗೆ ಕೊಂಡೊಯ್ಯು. ದಾರಿ ತಪ್ಪಿಸುವ ಪಾಪವನ್ನು ನಮ್ಮಿಂದ ದೂರಮಾಡು; ನಿನಗೆ ಅತಿಶಯವಾದ ನಮಸ್ಕಾರವಚನಗಳನ್ನು ಅರ್ಪಿಸುತ್ತೇವೆ. (ಋಗ್ವೇದ ೧.೧೮೯.೧; ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೧.೧.೧೪)',
          },
        },
        {
          text: 'अग्ने त्वं पारया नव्यो अस्मान्स्वस्तिभिरति दुर्गाणि विश्वा ।\nपूश्च पृथ्वी बहुला न उर्वी भवा तोकाय तनयाय शं योः ॥',
          meaning: {
            en: 'O Agni, you who are ever new, carry us across all difficulties with your blessings; be a broad, wide and spacious stronghold for us, and health and happiness for our children and descendants. (Rigveda 1.189.2)',
            kn: 'ಓ ಅಗ್ನಿಯೇ, ಸದಾ ನವೀನನಾದ ನೀನು ನಿನ್ನ ಮಂಗಳಗಳಿಂದ ನಮ್ಮನ್ನು ಎಲ್ಲ ಸಂಕಟಗಳಿಂದ ಪಾರುಮಾಡು; ನಮಗೆ ವಿಶಾಲವಾದ ದುರ್ಗವಾಗಿಯೂ, ನಮ್ಮ ಮಕ್ಕಳು–ಮೊಮ್ಮಕ್ಕಳಿಗೆ ಆರೋಗ್ಯ ಸುಖಗಳಾಗಿಯೂ ಇರು. (ಋಗ್ವೇದ ೧.೧೮೯.೨)',
          },
        },
        {
          text: 'अग्ने त्वमस्मद्युयोध्यमीवा अनग्नित्रा अभ्यमन्त कृष्टीः ।\nपुनरस्मभ्यं सुविताय देव क्षां विश्वेभिरमृतेभिर्यजत्र ॥',
          meaning: {
            en: 'O Agni, drive away from us the diseases that have attacked the people who keep no fire; O god worthy of worship, make the earth prosper again for us, with all the immortals. (Rigveda 1.189.3)',
            kn: 'ಓ ಅಗ್ನಿಯೇ, ಅಗ್ನಿಯನ್ನು ಪೋಷಿಸದ ಜನರನ್ನು ಆಕ್ರಮಿಸಿದ ರೋಗಗಳನ್ನು ನಮ್ಮಿಂದ ದೂರಮಾಡು; ಪೂಜ್ಯ ದೇವನೇ, ಎಲ್ಲ ಅಮರರೊಡನೆ ಭೂಮಿಯನ್ನು ಮತ್ತೆ ನಮ್ಮ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ಮಾಡು. (ಋಗ್ವೇದ ೧.೧೮೯.೩)',
          },
        },
        {
          text: 'पाहि नो अग्ने पायुभिरजस्रैरुत प्रिये सदन आ शुशुक्वान् ।\nमा ते भयं जरितारं यविष्ठ नूनं विदन्मापरं सहस्वः ॥',
          meaning: {
            en: 'Protect us, O Agni, with your unceasing protections, shining in your beloved seat; O youngest, mighty one, let no fear touch your praiser now or hereafter. (Rigveda 1.189.4)',
            kn: 'ಓ ಅಗ್ನಿಯೇ, ನಿನ್ನ ಪ್ರಿಯ ಸ್ಥಾನದಲ್ಲಿ ಪ್ರಜ್ವಲಿಸುತ್ತ ನಿರಂತರ ರಕ್ಷಣೆಗಳಿಂದ ನಮ್ಮನ್ನು ಕಾಪಾಡು; ಓ ಯುವತಮನೇ, ಬಲಶಾಲಿಯೇ, ನಿನ್ನನ್ನು ಸ್ತುತಿಸುವವನನ್ನು ಈಗಾಗಲೀ ಮುಂದಾಗಲೀ ಭಯ ಸೋಕದಿರಲಿ. (ಋಗ್ವೇದ ೧.೧೮೯.೪)',
          },
        },
        {
          text: 'मा नो अग्नेऽव सृजो अघायाविष्यवे रिपवे दुच्छुनायै ।\nमा दत्वते दशते मादते नो मा रीषते सहसावन्परा दाः ॥',
          meaning: {
            en: 'O Agni, do not abandon us to the evil-doer, the greedy enemy, or misfortune; O mighty one, do not hand us over to the toothed one that bites, nor to the toothless, nor to the one who harms. (Rigveda 1.189.5)',
            kn: 'ಓ ಅಗ್ನಿಯೇ, ಪಾಪಿಗೂ ಲೋಭಿ ಶತ್ರುವಿಗೂ ದುರ್ಭಾಗ್ಯಕ್ಕೂ ನಮ್ಮನ್ನು ಬಿಟ್ಟುಕೊಡಬೇಡ; ಬಲಶಾಲಿಯೇ, ಹಲ್ಲಿನಿಂದ ಕಚ್ಚುವವನಿಗೂ ಹಲ್ಲಿಲ್ಲದವನಿಗೂ ಹಿಂಸಕನಿಗೂ ನಮ್ಮನ್ನು ಒಪ್ಪಿಸಬೇಡ. (ಋಗ್ವೇದ ೧.೧೮೯.೫)',
          },
        },
        {
          text: 'वि घ त्वावाँ ऋतजात यंसद्गृणानो अग्ने तन्वे वरूथम् ।\nविश्वाद्रिरिक्षोरुत वा निनित्सोरभिह्रुतामसि हि देव विष्पट् ॥',
          meaning: {
            en: 'O Agni, born of the cosmic order, one like you, praised, will give shelter to our bodies; for you, O god, are the one who wards off every would-be harmer and reviler, and those who would trip us. (Rigveda 1.189.6)',
            kn: 'ಓ ಋತದಿಂದ ಹುಟ್ಟಿದ ಅಗ್ನಿಯೇ, ಸ್ತುತಿಸಲ್ಪಟ್ಟ ನಿನ್ನಂಥವನು ನಮ್ಮ ದೇಹಗಳಿಗೆ ಆಶ್ರಯ ಕೊಡುವನು; ದೇವನೇ, ಹಿಂಸಿಸಬಯಸುವ, ನಿಂದಿಸಬಯಸುವ, ಕೆಡವಬಯಸುವ ಎಲ್ಲರನ್ನೂ ತಡೆಯುವವನು ನೀನೇ. (ಋಗ್ವೇದ ೧.೧೮೯.೬)',
          },
        },
        {
          text: 'त्वं ताँ अग्न उभयान्वि विद्वान्वेषि प्रपित्वे मनुषो यजत्र ।\nअभिपित्वे मनवे शास्यो भूर्मर्मृजेन्य उशिग्भिर्नाक्रः ॥',
          meaning: {
            en: 'O Agni worthy of worship, knowing both kinds of men, you come to them at the morning; at evening you become the one to be invoked for man, made bright by the eager priests, never failing. (Rigveda 1.189.7)',
            kn: 'ಓ ಪೂಜ್ಯ ಅಗ್ನಿಯೇ, ಎರಡು ಬಗೆಯ ಮನುಷ್ಯರನ್ನೂ ಅರಿತ ನೀನು ಬೆಳಿಗ್ಗೆ ಅವರ ಬಳಿ ಬರುತ್ತೀಯೆ; ಸಂಜೆ ಮನುಷ್ಯನಿಗೆ ಆಹ್ವಾನಯೋಗ್ಯನಾಗಿ, ಉತ್ಸುಕ ಋತ್ವಿಜರಿಂದ ಬೆಳಗಿಸಲ್ಪಟ್ಟು, ಎಂದೂ ತಪ್ಪದವನಾಗಿರುವೆ. (ಋಗ್ವೇದ ೧.೧೮೯.೭)',
          },
        },
        {
          text: 'अवोचाम निवचनान्यस्मिन्मानस्य सूनुः सहसाने अग्नौ ।\nवयं सहस्रमृषिभिः सनेम विद्यामेषं वृजनं जीरदानुम् ॥',
          meaning: {
            en: 'We, the son of Mana, have spoken these words of praise to this mighty Agni; may we with the seers win a thousandfold; may we find nourishment, strength and quickening gifts. (Rigveda 1.189.8)',
            kn: 'ಮಾನನ ಮಗನಾದ ನಾವು ಈ ಬಲಶಾಲಿ ಅಗ್ನಿಗೆ ಈ ಸ್ತುತಿವಚನಗಳನ್ನು ಹೇಳಿದ್ದೇವೆ; ಋಷಿಗಳೊಡನೆ ನಾವು ಸಾವಿರಪಟ್ಟು ಗಳಿಸೋಣ; ಅನ್ನ, ಬಲ, ಚೈತನ್ಯದಾಯಕ ದಾನಗಳನ್ನು ಪಡೆಯೋಣ. (ಋಗ್ವೇದ ೧.೧೮೯.೮)',
          },
        },
      ],
    },
    {
      title: 'प्रार्थना',
      titleEn: 'Closing prayers',
      note: 'With folded hands, recite these prayers asking the Lord of sacrifice to make the rite complete (M1; the Apastamba manuals give them too).',
      noteKn: 'ಕೈಮುಗಿದು, ಕರ್ಮವನ್ನು ಪೂರ್ಣಗೊಳಿಸಲು ಯಜ್ಞೇಶನನ್ನು ಬೇಡುವ ಈ ಪ್ರಾರ್ಥನೆಗಳನ್ನು ಹೇಳಿ (ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ; ಆಪಸ್ತಂಬ ಗ್ರಂಥಗಳಲ್ಲೂ ಇವೆ).',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'नमस्ते गार्हपत्याय नमस्ते दक्षिणाग्नये ।\nनम आहवनीयाय महावेद्यै नमो नमः ॥',
          meaning: {
            en: 'Salutations to you as the Garhapatya fire, salutations to you as the Dakshina fire; salutations to the Ahavaniya fire and again and again to the great altar.',
            kn: 'ಗಾರ್ಹಪತ್ಯಾಗ್ನಿಯಾದ ನಿನಗೆ ನಮಸ್ಕಾರ, ದಕ್ಷಿಣಾಗ್ನಿಯಾದ ನಿನಗೆ ನಮಸ್ಕಾರ; ಆಹವನೀಯಾಗ್ನಿಗೆ ನಮಸ್ಕಾರ, ಮಹಾವೇದಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'काण्डद्वयोपपाद्याय कर्मब्रह्मस्वरूपिणे ।\nस्वर्गापवर्गदात्रे च यज्ञेशाय नमो नमः ॥',
          meaning: {
            en: 'Salutations again and again to the Lord of sacrifice, who is taught by both parts of the Veda, whose form is both ritual and Brahman, and who grants heaven and liberation.',
            kn: 'ವೇದದ ಎರಡು ಕಾಂಡಗಳಿಂದಲೂ ಪ್ರತಿಪಾದಿತನಾದ, ಕರ್ಮ–ಬ್ರಹ್ಮಸ್ವರೂಪನಾದ, ಸ್ವರ್ಗ–ಮೋಕ್ಷಗಳನ್ನು ಕೊಡುವ ಯಜ್ಞೇಶನಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'यज्ञेशाच्युत गोविन्द माधवानन्त केशव ।\nकृष्ण विष्णो हृषीकेश वासुदेव नमोऽस्तु ते ॥',
          meaning: {
            en: 'O Lord of sacrifice, Achyuta, Govinda, Madhava, Ananta, Keshava, Krishna, Vishnu, Hrishikesha, Vasudeva — salutations to you.',
            kn: 'ಓ ಯಜ್ಞೇಶನೇ, ಅಚ್ಯುತ, ಗೋವಿಂದ, ಮಾಧವ, ಅನಂತ, ಕೇಶವ, ಕೃಷ್ಣ, ವಿಷ್ಣು, ಹೃಷೀಕೇಶ, ವಾಸುದೇವ — ನಿನಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'प्रायश्चित्तान्यशेषाणि तपःकर्मात्मकानि वै ।\nयानि तेषामशेषाणां कृष्णानुस्मरणं परम् ॥',
          meaning: {
            en: 'Of all the expiations there are, consisting of austerity and ritual action, the highest is the constant remembrance of Krishna.',
            kn: 'ತಪಸ್ಸು, ಕರ್ಮ ರೂಪವಾದ ಎಲ್ಲ ಪ್ರಾಯಶ್ಚಿತ್ತಗಳಲ್ಲಿಯೂ ಶ್ರೀಕೃಷ್ಣನ ಅನುಸ್ಮರಣೆಯೇ ಶ್ರೇಷ್ಠ.',
          },
        },
      ],
    },
    {
      title: 'समर्पणम्',
      titleEn: 'Samarpana and farewell to Agni',
      note: 'Meditate on Hari in the circle of the fire, ask that whatever was done carelessly be made whole by remembering Vishnu, offer the homa with water into the plate (naming the homa in place of अमुक), and bid Agni go to his place. Finish with तद्विष्णोः परमं पदम् and श्रीमध्वेशार्पणमस्तु. Prasada and the kalasha water are given to the family.',
      noteKn: 'ಅಗ್ನಿಮಂಡಲದಲ್ಲಿ ಶ್ರೀಹರಿಯನ್ನು ಧ್ಯಾನಿಸಿ, ಪ್ರಮಾದದಿಂದ ಆದ ಲೋಪಗಳು ವಿಷ್ಣುಸ್ಮರಣೆಯಿಂದ ಪೂರ್ಣವಾಗಲೆಂದು ಬೇಡಿ, “ಅಮುಕ” ಬದಲು ಹೋಮದ ಹೆಸರು ಹೇಳಿ ನೀರಿನೊಡನೆ ಹೋಮವನ್ನು ತಟ್ಟೆಗೆ ಸಮರ್ಪಿಸಿ, ಅಗ್ನಿಯನ್ನು ಅವನ ಸ್ಥಾನಕ್ಕೆ ಕಳುಹಿಸಿ. “ತದ್ವಿಷ್ಣೋಃ ಪರಮಂ ಪದಂ” ಮತ್ತು “ಶ್ರೀಮಧ್ವೇಶಾರ್ಪಣಮಸ್ತು” ಎಂದು ಮುಗಿಸಿ. ಮನೆಯವರಿಗೆ ಪ್ರಸಾದ ಮತ್ತು ಕಲಶಜಲ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'प्रमादात्कुर्वतां कर्म प्रच्यवेताध्वरेषु यत् ।\nस्मरणादेव तद्विष्णोः सम्पूर्णं स्यादिति श्रुतिः ॥',
          meaning: {
            en: 'Whatever slips away in the rites of those who perform them through carelessness becomes complete merely by remembering Vishnu; so says the scripture.',
            kn: 'ಕರ್ಮ ಮಾಡುವವರ ಪ್ರಮಾದದಿಂದ ಯಜ್ಞಗಳಲ್ಲಿ ಏನು ಲೋಪವಾಗುತ್ತದೆಯೋ ಅದು ವಿಷ್ಣುಸ್ಮರಣೆಯಿಂದಲೇ ಪೂರ್ಣವಾಗುತ್ತದೆ ಎಂದು ಶ್ರುತಿ ಹೇಳುತ್ತದೆ.',
          },
        },
        {
          text: 'अग्निमण्डलमध्यस्थं चतुर्बाहुं किरीटिनम् ।\nभक्ताभीष्टप्रदातारं ध्यायेद्यज्ञभुजं हरिम् ॥',
          meaning: {
            en: 'One should meditate on Hari, the enjoyer of the sacrifice, standing in the midst of the circle of fire, four-armed and crowned, who grants his devotees what they desire.',
            kn: 'ಅಗ್ನಿಮಂಡಲದ ಮಧ್ಯದಲ್ಲಿರುವ, ನಾಲ್ಕು ಭುಜಗಳ, ಕಿರೀಟಧಾರಿಯಾದ, ಭಕ್ತರ ಅಭೀಷ್ಟವನ್ನು ಕೊಡುವ, ಯಜ್ಞಭೋಕ್ತನಾದ ಶ್ರೀಹರಿಯನ್ನು ಧ್ಯಾನಿಸಬೇಕು.',
          },
        },
        {
          text: 'अनेन अमुकहोमेन यज्ञपुरुषान्तर्यामी श्रीभारतीरमणमुख्यप्राणान्तर्गतः\nहरिणीपतिः श्रीपरशुरामः प्रीयताम् । श्रीकृष्णार्पणमस्तु ॥',
          meaning: {
            en: 'By this … homa may Sri Parashurama, Lord of Harini, the inner ruler of the Yajnapurusha, who dwells within Mukhyaprana, the beloved of Bharati, be pleased. May it be an offering to Sri Krishna.',
            kn: 'ಈ ಇಂತಹ ಹೋಮದಿಂದ ಯಜ್ಞಪುರುಷಾಂತರ್ಯಾಮಿಯಾದ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣಾಂತರ್ಗತನಾದ ಹರಿಣೀಪತಿ ಶ್ರೀಪರಶುರಾಮನು ಪ್ರೀತನಾಗಲಿ. ಶ್ರೀಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು.',
          },
        },
        {
          text: 'गच्छ गच्छ सुरश्रेष्ठ देवासुरसुपूजित ।\nयत्र ब्रह्मादयो देवास्तत्र गच्छ हुताशन ॥',
          meaning: {
            en: 'Go, go, best of the gods, worshipped by gods and asuras; go, O eater of offerings, to where Brahma and the other gods are.',
            kn: 'ದೇವಾಸುರರಿಂದ ಪೂಜಿತನಾದ ಓ ದೇವಶ್ರೇಷ್ಠನೇ, ಹೋಗು; ಓ ಹುತಾಶನನೇ, ಬ್ರಹ್ಮಾದಿ ದೇವತೆಗಳಿರುವಲ್ಲಿಗೆ ಹೋಗು.',
          },
        },
      ],
    },
    {
      title: 'जयादिहोमः',
      titleEn: 'Uttaranga: the jaya offerings',
      note: 'From here the uttaranga (the closing part) begins. Say the sankalpa एतत्कर्मसमृद्ध्यर्थं जयादिहोमं करिष्ये and offer ghee with the thirteen jaya mantras, the eighteen abhyatana and the twelve rashtrabhrt mantras, the Prajapati verse and the three vyahritis, one oblation each (Apastamba Grihya Sutra: jayabhyatanan rashtrabhrtah prajapatyam vyahritih; Muddu Shrauti, Mylapore manual).',
      noteKn: 'ಇಲ್ಲಿಂದ ಉತ್ತರಾಂಗ. “ಏತತ್ಕರ್ಮಸಮೃದ್ಧ್ಯರ್ಥಂ ಜಯಾದಿಹೋಮಂ ಕರಿಷ್ಯೇ” ಎಂದು ಸಂಕಲ್ಪಿಸಿ ಹದಿಮೂರು ಜಯ, ಹದಿನೆಂಟು ಅಭ್ಯಾತಾನ, ಹನ್ನೆರಡು ರಾಷ್ಟ್ರಭೃತ್ ಮಂತ್ರಗಳು, ಪ್ರಜಾಪತಿ ಮಂತ್ರ ಮತ್ತು ಮೂರು ವ್ಯಾಹೃತಿಗಳಿಂದ ಒಂದೊಂದು ಆಜ್ಯಾಹುತಿ ನೀಡಿ (ಆಪಸ್ತಂಬ ಗೃಹ್ಯಸೂತ್ರ; ಮುದ್ದು ಶ್ರೌತಿ, ಮೈಲಾಪುರ ಗ್ರಂಥ).',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'चित्तं च स्वाहा । चित्ताय इदं न मम ।\nचित्तिश्च स्वाहा । चित्त्या इदं न मम ।\nआकूतं च स्वाहा । आकूताय इदं न मम ।\nआकूतिश्च स्वाहा । आकूत्या इदं न मम ।\nविज्ञातं च स्वाहा । विज्ञाताय इदं न मम ।\nविज्ञानं च स्वाहा । विज्ञानाय इदं न मम ॥',
          meaning: {
            en: 'To thought, thinking, intent, intention, the known, knowledge — to each, svaha; each is for that power, not mine. (Jaya offerings 1-6, Taittiriya Samhita 3.4.4.)',
            kn: 'ಚಿತ್ತ, ಚಿತ್ತಿ, ಆಕೂತ, ಆಕೂತಿ, ವಿಜ್ಞಾತ, ವಿಜ್ಞಾನ — ಪ್ರತಿಯೊಂದಕ್ಕೂ ಸ್ವಾಹಾ; ಪ್ರತಿಯೊಂದೂ ಆ ದೇವತೆಗೆ, ನನ್ನದಲ್ಲ. (ಜಯಾಹುತಿಗಳು ೧-೬, ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೩.೪.೪.)',
          },
        },
        {
          text: 'मनश्च स्वाहा । मनस इदं न मम ।\nशक्वरीश्च स्वाहा । शक्वरीभ्य इदं न मम ।\nदर्शश्च स्वाहा । दर्शाय इदं न मम ।\nपूर्णमासश्च स्वाहा । पूर्णमासाय इदं न मम ।\nबृहच्च स्वाहा । बृहत इदं न मम ।\nरथन्तरं च स्वाहा । रथन्तराय इदं न मम ॥',
          meaning: {
            en: 'To mind, the powers, the new moon, the full moon, the Brihat, the Rathantara — to each, svaha; each is for that power, not mine. (Jaya offerings 7-12, Taittiriya Samhita 3.4.4.)',
            kn: 'ಮನಸ್ಸು, ಶಕ್ವರೀ, ದರ್ಶ, ಪೂರ್ಣಮಾಸ, ಬೃಹತ್, ರಥಂತರ — ಪ್ರತಿಯೊಂದಕ್ಕೂ ಸ್ವಾಹಾ; ಪ್ರತಿಯೊಂದೂ ಆ ದೇವತೆಗೆ, ನನ್ನದಲ್ಲ. (ಜಯಾಹುತಿಗಳು ೭-೧೨, ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೩.೪.೪.)',
          },
        },
        {
          text: 'प्रजापतिर्जयानिन्द्राय वृष्णे प्रायच्छदुग्रः पृतनाज्येषु ।\nतस्मै विशः समनमन्त सर्वाः स उग्रः स हि हव्यो बभूव स्वाहा ।\nप्रजापतय इदं न मम ॥',
          meaning: {
            en: 'Prajapati gave these victories to mighty Indra, fierce in battles; to him all the people bowed; he became fierce and worthy of offering, svaha. This is for Prajapati, not mine. (The thirteenth jaya offering, Taittiriya Samhita 3.4.4.)',
            kn: 'ಪ್ರಜಾಪತಿಯು ಈ ಜಯಗಳನ್ನು ಯುದ್ಧಗಳಲ್ಲಿ ಉಗ್ರನಾದ ಬಲಶಾಲಿ ಇಂದ್ರನಿಗೆ ಕೊಟ್ಟನು; ಎಲ್ಲ ಪ್ರಜೆಗಳೂ ಅವನಿಗೆ ತಲೆಬಾಗಿದರು; ಅವನು ಉಗ್ರನೂ ಹವಿಸ್ಸಿಗೆ ಯೋಗ್ಯನೂ ಆದನು, ಸ್ವಾಹಾ. ಇದು ಪ್ರಜಾಪತಿಗೆ, ನನ್ನದಲ್ಲ. (ಹದಿಮೂರನೆಯ ಜಯಾಹುತಿ, ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೩.೪.೪.)',
          },
        },
      ],
    },
    {
      title: 'अभ्यातानाः',
      titleEn: 'The eighteen abhyatana offerings',
      note: 'One oblation of ghee with each, touching water after the fourteenth (to Rudra) and after the eighteenth (to the Pitris) (Muddu Shrauti, Mylapore manual; Taittiriya Samhita 3.4.5).',
      noteKn: 'ಪ್ರತಿಯೊಂದರಿಂದ ಒಂದು ಆಜ್ಯಾಹುತಿ; ಹದಿನಾಲ್ಕನೆಯದರ (ರುದ್ರ) ಮತ್ತು ಹದಿನೆಂಟನೆಯದರ (ಪಿತೃಗಳು) ನಂತರ ನೀರು ಮುಟ್ಟಿ (ಮುದ್ದು ಶ್ರೌತಿ, ಮೈಲಾಪುರ ಗ್ರಂಥ; ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೩.೪.೫).',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'अग्निर्भूतानामधिपतिः स मावतु\nअस्मिन्ब्रह्मन्नस्मिन्क्षत्रेऽस्यामाशिष्यस्यां पुरोधायामस्मिन्कर्मन्नस्यां देवहूत्यां स्वाहा ।\nअग्नय इदं न मम ॥',
          meaning: {
            en: 'Agni, lord of beings: may he protect me in this prayer, this rule, this blessing, this office of priest, this rite and this invocation of the gods, svaha. This is for Agni, not mine. (Abhyatana 1, Taittiriya Samhita 3.4.5.)',
            kn: 'ಭೂತಗಳ ಒಡೆಯನಾದ ಅಗ್ನಿ — ಈ ಬ್ರಹ್ಮ, ಈ ಕ್ಷತ್ರ, ಈ ಆಶೀರ್ವಾದ, ಈ ಪುರೋಹಿತ್ಯ, ಈ ಕರ್ಮ, ಈ ದೇವಾಹ್ವಾನದಲ್ಲಿ ನನ್ನನ್ನು ಕಾಪಾಡಲಿ, ಸ್ವಾಹಾ. ಇದು ಅಗ್ನಿಗೆ, ನನ್ನದಲ್ಲ. (ಅಭ್ಯಾತಾನ ೧, ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೩.೪.೫.)',
          },
        },
        {
          text: 'इन्द्रो ज्येष्ठानामधिपतिः स मावतु\nअस्मिन्ब्रह्मन्नस्मिन्क्षत्रेऽस्यामाशिष्यस्यां पुरोधायामस्मिन्कर्मन्नस्यां देवहूत्यां स्वाहा ।\nइन्द्राय इदं न मम ॥',
          meaning: {
            en: 'Indra, lord of the eldest: may he protect me in this rite, svaha. This is for Indra, not mine. (Abhyatana 2, Taittiriya Samhita 3.4.5.)',
            kn: 'ಜ್ಯೇಷ್ಠರ ಒಡೆಯನಾದ ಇಂದ್ರ ಈ ಕರ್ಮದಲ್ಲಿ ನನ್ನನ್ನು ಕಾಪಾಡಲಿ, ಸ್ವಾಹಾ. ಇದು ಇಂದ್ರನಿಗೆ, ನನ್ನದಲ್ಲ. (ಅಭ್ಯಾತಾನ ೨)',
          },
        },
        {
          text: 'यमः पृथिव्या अधिपतिः स मावतु\nअस्मिन्ब्रह्मन्नस्मिन्क्षत्रेऽस्यामाशिष्यस्यां पुरोधायामस्मिन्कर्मन्नस्यां देवहूत्यां स्वाहा ।\nयमाय इदं न मम ॥',
          meaning: {
            en: 'Yama, lord of the earth: may he protect me in this rite, svaha. This is for Yama, not mine. (Abhyatana 3, Taittiriya Samhita 3.4.5.)',
            kn: 'ಭೂಮಿಯ ಒಡೆಯನಾದ ಯಮ ಈ ಕರ್ಮದಲ್ಲಿ ನನ್ನನ್ನು ಕಾಪಾಡಲಿ, ಸ್ವಾಹಾ. ಇದು ಯಮನಿಗೆ, ನನ್ನದಲ್ಲ. (ಅಭ್ಯಾತಾನ ೩)',
          },
        },
        {
          text: 'वायुरन्तरिक्षस्याधिपतिः स मावतु\nअस्मिन्ब्रह्मन्नस्मिन्क्षत्रेऽस्यामाशिष्यस्यां पुरोधायामस्मिन्कर्मन्नस्यां देवहूत्यां स्वाहा ।\nवायव इदं न मम ॥',
          meaning: {
            en: 'Vayu, lord of the mid-air: may he protect me in this rite, svaha. This is for Vayu, not mine. (Abhyatana 4, Taittiriya Samhita 3.4.5.)',
            kn: 'ಅಂತರಿಕ್ಷದ ಒಡೆಯನಾದ ವಾಯು ಈ ಕರ್ಮದಲ್ಲಿ ನನ್ನನ್ನು ಕಾಪಾಡಲಿ, ಸ್ವಾಹಾ. ಇದು ವಾಯುವಿಗೆ, ನನ್ನದಲ್ಲ. (ಅಭ್ಯಾತಾನ ೪)',
          },
        },
        {
          text: 'सूर्यो दिवोऽधिपतिः स मावतु\nअस्मिन्ब्रह्मन्नस्मिन्क्षत्रेऽस्यामाशिष्यस्यां पुरोधायामस्मिन्कर्मन्नस्यां देवहूत्यां स्वाहा ।\nसूर्याय इदं न मम ॥',
          meaning: {
            en: 'Surya, lord of heaven: may he protect me in this rite, svaha. This is for Surya, not mine. (Abhyatana 5, Taittiriya Samhita 3.4.5.)',
            kn: 'ದ್ಯುಲೋಕದ ಒಡೆಯನಾದ ಸೂರ್ಯ ಈ ಕರ್ಮದಲ್ಲಿ ನನ್ನನ್ನು ಕಾಪಾಡಲಿ, ಸ್ವಾಹಾ. ಇದು ಸೂರ್ಯನಿಗೆ, ನನ್ನದಲ್ಲ. (ಅಭ್ಯಾತಾನ ೫)',
          },
        },
        {
          text: 'चन्द्रमा नक्षत्राणामधिपतिः स मावतु\nअस्मिन्ब्रह्मन्नस्मिन्क्षत्रेऽस्यामाशिष्यस्यां पुरोधायामस्मिन्कर्मन्नस्यां देवहूत्यां स्वाहा ।\nचन्द्रमस इदं न मम ॥',
          meaning: {
            en: 'the Moon, lord of the stars: may he protect me in this rite, svaha. This is for the Moon, not mine. (Abhyatana 6, Taittiriya Samhita 3.4.5.)',
            kn: 'ನಕ್ಷತ್ರಗಳ ಒಡೆಯನಾದ ಚಂದ್ರ ಈ ಕರ್ಮದಲ್ಲಿ ನನ್ನನ್ನು ಕಾಪಾಡಲಿ, ಸ್ವಾಹಾ. ಇದು ಚಂದ್ರನಿಗೆ, ನನ್ನದಲ್ಲ. (ಅಭ್ಯಾತಾನ ೬)',
          },
        },
        {
          text: 'बृहस्पतिर्ब्रह्मणोऽधिपतिः स मावतु\nअस्मिन्ब्रह्मन्नस्मिन्क्षत्रेऽस्यामाशिष्यस्यां पुरोधायामस्मिन्कर्मन्नस्यां देवहूत्यां स्वाहा ।\nबृहस्पतय इदं न मम ॥',
          meaning: {
            en: 'Brihaspati, lord of sacred speech: may he protect me in this rite, svaha. This is for Brihaspati, not mine. (Abhyatana 7, Taittiriya Samhita 3.4.5.)',
            kn: 'ಬ್ರಹ್ಮದ (ಮಂತ್ರದ) ಒಡೆಯನಾದ ಬೃಹಸ್ಪತಿ ಈ ಕರ್ಮದಲ್ಲಿ ನನ್ನನ್ನು ಕಾಪಾಡಲಿ, ಸ್ವಾಹಾ. ಇದು ಬೃಹಸ್ಪತಿಗೆ, ನನ್ನದಲ್ಲ. (ಅಭ್ಯಾತಾನ ೭)',
          },
        },
        {
          text: 'मित्रः सत्यानामधिपतिः स मावतु\nअस्मिन्ब्रह्मन्नस्मिन्क्षत्रेऽस्यामाशिष्यस्यां पुरोधायामस्मिन्कर्मन्नस्यां देवहूत्यां स्वाहा ।\nमित्राय इदं न मम ॥',
          meaning: {
            en: 'Mitra, lord of truths: may he protect me in this rite, svaha. This is for Mitra, not mine. (Abhyatana 8, Taittiriya Samhita 3.4.5.)',
            kn: 'ಸತ್ಯಗಳ ಒಡೆಯನಾದ ಮಿತ್ರ ಈ ಕರ್ಮದಲ್ಲಿ ನನ್ನನ್ನು ಕಾಪಾಡಲಿ, ಸ್ವಾಹಾ. ಇದು ಮಿತ್ರನಿಗೆ, ನನ್ನದಲ್ಲ. (ಅಭ್ಯಾತಾನ ೮)',
          },
        },
        {
          text: 'वरुणोऽपामधिपतिः स मावतु\nअस्मिन्ब्रह्मन्नस्मिन्क्षत्रेऽस्यामाशिष्यस्यां पुरोधायामस्मिन्कर्मन्नस्यां देवहूत्यां स्वाहा ।\nवरुणाय इदं न मम ॥',
          meaning: {
            en: 'Varuna, lord of the waters: may he protect me in this rite, svaha. This is for Varuna, not mine. (Abhyatana 9, Taittiriya Samhita 3.4.5.)',
            kn: 'ಜಲಗಳ ಒಡೆಯನಾದ ವರುಣ ಈ ಕರ್ಮದಲ್ಲಿ ನನ್ನನ್ನು ಕಾಪಾಡಲಿ, ಸ್ವಾಹಾ. ಇದು ವರುಣನಿಗೆ, ನನ್ನದಲ್ಲ. (ಅಭ್ಯಾತಾನ ೯)',
          },
        },
        {
          text: 'समुद्रः स्रोत्यानामधिपतिः स मावतु\nअस्मिन्ब्रह्मन्नस्मिन्क्षत्रेऽस्यामाशिष्यस्यां पुरोधायामस्मिन्कर्मन्नस्यां देवहूत्यां स्वाहा ।\nसमुद्राय इदं न मम ॥',
          meaning: {
            en: 'the Ocean, lord of the streams: may he protect me in this rite, svaha. This is for the Ocean, not mine. (Abhyatana 10, Taittiriya Samhita 3.4.5.)',
            kn: 'ಪ್ರವಾಹಗಳ ಒಡೆಯನಾದ ಸಮುದ್ರ ಈ ಕರ್ಮದಲ್ಲಿ ನನ್ನನ್ನು ಕಾಪಾಡಲಿ, ಸ್ವಾಹಾ. ಇದು ಸಮುದ್ರನಿಗೆ, ನನ್ನದಲ್ಲ. (ಅಭ್ಯಾತಾನ ೧೦)',
          },
        },
        {
          text: 'अन्नं साम्राज्यानामधिपति तन्मावतु\nअस्मिन्ब्रह्मन्नस्मिन्क्षत्रेऽस्यामाशिष्यस्यां पुरोधायामस्मिन्कर्मन्नस्यां देवहूत्यां स्वाहा ।\nअन्नाय इदं न मम ॥',
          meaning: {
            en: 'Food, lord of sovereignties: may he protect me in this rite, svaha. This is for Food, not mine. (Abhyatana 11, Taittiriya Samhita 3.4.5.)',
            kn: 'ಸಾಮ್ರಾಜ್ಯಗಳ ಒಡೆಯನಾದ ಅನ್ನ ಈ ಕರ್ಮದಲ್ಲಿ ನನ್ನನ್ನು ಕಾಪಾಡಲಿ, ಸ್ವಾಹಾ. ಇದು ಅನ್ನಕ್ಕೆ, ನನ್ನದಲ್ಲ. (ಅಭ್ಯಾತಾನ ೧೧)',
          },
        },
        {
          text: 'सोम ओषधीनामधिपतिः स मावतु\nअस्मिन्ब्रह्मन्नस्मिन्क्षत्रेऽस्यामाशिष्यस्यां पुरोधायामस्मिन्कर्मन्नस्यां देवहूत्यां स्वाहा ।\nसोमाय इदं न मम ॥',
          meaning: {
            en: 'Soma, lord of the plants: may he protect me in this rite, svaha. This is for Soma, not mine. (Abhyatana 12, Taittiriya Samhita 3.4.5.)',
            kn: 'ಓಷಧಿಗಳ ಒಡೆಯನಾದ ಸೋಮ ಈ ಕರ್ಮದಲ್ಲಿ ನನ್ನನ್ನು ಕಾಪಾಡಲಿ, ಸ್ವಾಹಾ. ಇದು ಸೋಮನಿಗೆ, ನನ್ನದಲ್ಲ. (ಅಭ್ಯಾತಾನ ೧೨)',
          },
        },
        {
          text: 'सविता प्रसवानामधिपतिः स मावतु\nअस्मिन्ब्रह्मन्नस्मिन्क्षत्रेऽस्यामाशिष्यस्यां पुरोधायामस्मिन्कर्मन्नस्यां देवहूत्यां स्वाहा ।\nसवित्र इदं न मम ॥',
          meaning: {
            en: 'Savitri, lord of impulses: may he protect me in this rite, svaha. This is for Savitri, not mine. (Abhyatana 13, Taittiriya Samhita 3.4.5.)',
            kn: 'ಪ್ರೇರಣೆಗಳ ಒಡೆಯನಾದ ಸವಿತೃ ಈ ಕರ್ಮದಲ್ಲಿ ನನ್ನನ್ನು ಕಾಪಾಡಲಿ, ಸ್ವಾಹಾ. ಇದು ಸವಿತೃವಿಗೆ, ನನ್ನದಲ್ಲ. (ಅಭ್ಯಾತಾನ ೧೩)',
          },
        },
        {
          text: 'रुद्रः पशूनामधिपतिः स मावतु\nअस्मिन्ब्रह्मन्नस्मिन्क्षत्रेऽस्यामाशिष्यस्यां पुरोधायामस्मिन्कर्मन्नस्यां देवहूत्यां स्वाहा ।\nरुद्राय इदं न मम ॥',
          meaning: {
            en: 'Rudra, lord of the animals: may he protect me in this rite, svaha. This is for Rudra, not mine. (Abhyatana 14, Taittiriya Samhita 3.4.5.)',
            kn: 'ಪಶುಗಳ ಒಡೆಯನಾದ ರುದ್ರ ಈ ಕರ್ಮದಲ್ಲಿ ನನ್ನನ್ನು ಕಾಪಾಡಲಿ, ಸ್ವಾಹಾ. ಇದು ರುದ್ರನಿಗೆ, ನನ್ನದಲ್ಲ. (ಅಭ್ಯಾತಾನ ೧೪)',
          },
        },
        {
          text: 'त्वष्टा रूपाणामधिपतिः स मावतु\nअस्मिन्ब्रह्मन्नस्मिन्क्षत्रेऽस्यामाशिष्यस्यां पुरोधायामस्मिन्कर्मन्नस्यां देवहूत्यां स्वाहा ।\nत्वष्ट्र इदं न मम ॥',
          meaning: {
            en: 'Tvashtri, lord of forms: may he protect me in this rite, svaha. This is for Tvashtri, not mine. (Abhyatana 15, Taittiriya Samhita 3.4.5.)',
            kn: 'ರೂಪಗಳ ಒಡೆಯನಾದ ತ್ವಷ್ಟೃ ಈ ಕರ್ಮದಲ್ಲಿ ನನ್ನನ್ನು ಕಾಪಾಡಲಿ, ಸ್ವಾಹಾ. ಇದು ತ್ವಷ್ಟೃವಿಗೆ, ನನ್ನದಲ್ಲ. (ಅಭ್ಯಾತಾನ ೧೫)',
          },
        },
        {
          text: 'विष्णुः पर्वतानामधिपतिः स मावतु\nअस्मिन्ब्रह्मन्नस्मिन्क्षत्रेऽस्यामाशिष्यस्यां पुरोधायामस्मिन्कर्मन्नस्यां देवहूत्यां स्वाहा ।\nविष्णव इदं न मम ॥',
          meaning: {
            en: 'Vishnu, lord of the mountains: may he protect me in this rite, svaha. This is for Vishnu, not mine. (Abhyatana 16, Taittiriya Samhita 3.4.5.)',
            kn: 'ಪರ್ವತಗಳ ಒಡೆಯನಾದ ವಿಷ್ಣು ಈ ಕರ್ಮದಲ್ಲಿ ನನ್ನನ್ನು ಕಾಪಾಡಲಿ, ಸ್ವಾಹಾ. ಇದು ವಿಷ್ಣುವಿಗೆ, ನನ್ನದಲ್ಲ. (ಅಭ್ಯಾತಾನ ೧೬)',
          },
        },
        {
          text: 'मरुतो गणानामधिपतयस्ते मावन्तु\nअस्मिन्ब्रह्मन्नस्मिन्क्षत्रेऽस्यामाशिष्यस्यां पुरोधायामस्मिन्कर्मन्नस्यां देवहूत्यां स्वाहा ।\nमरुद्भ्य इदं न मम ॥',
          meaning: {
            en: 'the Maruts, lords of the hosts: may they protect me in this rite, svaha. This is for the Maruts, not mine. (Abhyatana 17, Taittiriya Samhita 3.4.5.)',
            kn: 'ಗಣಗಳ ಒಡೆಯರಾದ ಮರುತ್ತುಗಳು ಈ ಕರ್ಮದಲ್ಲಿ ನನ್ನನ್ನು ಕಾಪಾಡಲಿ, ಸ್ವಾಹಾ. ಇದು ಮರುತ್ತುಗಳಿಗೆ, ನನ್ನದಲ್ಲ. (ಅಭ್ಯಾತಾನ ೧೭)',
          },
        },
        {
          text: 'पितरः पितामहाः परेऽवरे ततास्ततामहा इह मावत\nअस्मिन्ब्रह्मन्नस्मिन्क्षत्रेऽस्यामाशिष्यस्यां पुरोधायामस्मिन्कर्मन्नस्यां देवहूत्यां स्वाहा ।\nपितृभ्य इदं न मम ॥',
          meaning: {
            en: 'the fathers and grandfathers, near and far, the forefathers: may they protect me in this rite, svaha. This is for the Pitris, not mine. (Abhyatana 18, Taittiriya Samhita 3.4.5.)',
            kn: 'ತಂದೆ, ಅಜ್ಜ, ದೂರದ ಮತ್ತು ಹತ್ತಿರದ ಪಿತೃಗಳು, ಪೂರ್ವಜರು ಈ ಕರ್ಮದಲ್ಲಿ ನನ್ನನ್ನು ಕಾಪಾಡಲಿ, ಸ್ವಾಹಾ. ಇದು ಪಿತೃಗಳಿಗೆ, ನನ್ನದಲ್ಲ. (ಅಭ್ಯಾತಾನ ೧೮)',
          },
        },
      ],
    },
    {
      title: 'राष्ट्रभृतः',
      titleEn: 'The twelve rashtrabhrt offerings',
      note: 'For each gandharva two oblations: one at तस्मै स्वाहा, to the gandharva, and one at ताभ्यः स्वाहा, to his apsarases; the seventh and twelfth (to the lord of the world) are single oblations (Muddu Shrauti, Mylapore manual; Taittiriya Samhita 3.4.7).',
      noteKn: 'ಪ್ರತಿ ಗಂಧರ್ವನಿಗೆ ಎರಡು ಆಹುತಿ: “ತಸ್ಮೈ ಸ್ವಾಹಾ”ದಲ್ಲಿ ಗಂಧರ್ವನಿಗೆ, “ತಾಭ್ಯಃ ಸ್ವಾಹಾ”ದಲ್ಲಿ ಅವನ ಅಪ್ಸರೆಯರಿಗೆ; ಏಳನೆಯ ಮತ್ತು ಹನ್ನೆರಡನೆಯವು (ಭುವನಪತಿಗೆ) ಒಂದೊಂದೇ ಆಹುತಿ (ಮುದ್ದು ಶ್ರೌತಿ, ಮೈಲಾಪುರ ಗ್ರಂಥ; ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೩.೪.೭).',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'ऋताषाडृतधामाग्निर्गन्धर्वस्तस्यौषधयोऽप्सरस ऊर्जो नाम ।\nस इदं ब्रह्म क्षत्रं पातु ता इदं ब्रह्म क्षत्रं पान्तु तस्मै स्वाहा ।\nअग्नये गन्धर्वाय इदं न मम । ताभ्यः स्वाहा । ओषधीभ्योऽप्सरोभ्य इदं न मम ॥',
          meaning: {
            en: 'Agni, the gandharva who prevails by order and whose abode is order; his apsarases are the plants, named Urjas — may he protect this priesthood and this rule; may they protect this priesthood and this rule; to him svaha, to them svaha. This is for the gandharva and for the apsarases, not mine. (Rashtrabhrt 1, Taittiriya Samhita 3.4.7.)',
            kn: 'ಋತದಿಂದ ಗೆಲ್ಲುವ, ಋತವೇ ನೆಲೆಯಾದ ಗಂಧರ್ವ ಅಗ್ನಿ; ಅವನ ಅಪ್ಸರೆಯರು ಓಷಧಿಗಳು, “ಊರ್ಜ” ಎಂಬವರು — ಅವನು ಈ ಬ್ರಹ್ಮ–ಕ್ಷತ್ರಗಳನ್ನು ಕಾಪಾಡಲಿ, ಅವರು ಈ ಬ್ರಹ್ಮ–ಕ್ಷತ್ರಗಳನ್ನು ಕಾಪಾಡಲಿ; ಅವನಿಗೆ ಸ್ವಾಹಾ, ಅವರಿಗೆ ಸ್ವಾಹಾ. ಇದು ಗಂಧರ್ವನಿಗೆ, ಅಪ್ಸರೆಯರಿಗೆ, ನನ್ನದಲ್ಲ. (ರಾಷ್ಟ್ರಭೃತ್ ೧)',
          },
        },
        {
          text: 'संहितो विश्वसामा सूर्यो गन्धर्वस्तस्य मरीचयोऽप्सरस आयुवो नाम ।\nस इदं ब्रह्म क्षत्रं पातु ता इदं ब्रह्म क्षत्रं पान्तु तस्मै स्वाहा ।\nसूर्याय गन्धर्वाय इदं न मम । ताभ्यः स्वाहा । मरीचिभ्योऽप्सरोभ्य इदं न मम ॥',
          meaning: {
            en: 'Surya, the gandharva who joins all and whose song is all; his apsarases are the rays, named Ayus — may he protect this priesthood and this rule; may they protect this priesthood and this rule; to him svaha, to them svaha. This is for the gandharva and for the apsarases, not mine. (Rashtrabhrt 2, Taittiriya Samhita 3.4.7.)',
            kn: 'ಎಲ್ಲವನ್ನೂ ಕೂಡಿಸುವ, ಸರ್ವಸಾಮನಾದ ಗಂಧರ್ವ ಸೂರ್ಯ; ಅವನ ಅಪ್ಸರೆಯರು ಕಿರಣಗಳು, “ಆಯುವ” ಎಂಬವರು — ಅವನು ಈ ಬ್ರಹ್ಮ–ಕ್ಷತ್ರಗಳನ್ನು ಕಾಪಾಡಲಿ, ಅವರು ಈ ಬ್ರಹ್ಮ–ಕ್ಷತ್ರಗಳನ್ನು ಕಾಪಾಡಲಿ; ಅವನಿಗೆ ಸ್ವಾಹಾ, ಅವರಿಗೆ ಸ್ವಾಹಾ. ಇದು ಗಂಧರ್ವನಿಗೆ, ಅಪ್ಸರೆಯರಿಗೆ, ನನ್ನದಲ್ಲ. (ರಾಷ್ಟ್ರಭೃತ್ ೨)',
          },
        },
        {
          text: 'सुषुम्नः सूर्यरश्मिश्चन्द्रमा गन्धर्वस्तस्य नक्षत्राण्यप्सरसो बेकुरयो नाम ।\nस इदं ब्रह्म क्षत्रं पातु ता इदं ब्रह्म क्षत्रं पान्तु तस्मै स्वाहा ।\nचन्द्रमसे गन्धर्वाय इदं न मम । ताभ्यः स्वाहा । नक्षत्रेभ्योऽप्सरोभ्य इदं न मम ॥',
          meaning: {
            en: 'the Moon, the gracious gandharva with the sun’s ray; his apsarases are the stars, named Bekuris — may he protect this priesthood and this rule; may they protect this priesthood and this rule; to him svaha, to them svaha. This is for the gandharva and for the apsarases, not mine. (Rashtrabhrt 3, Taittiriya Samhita 3.4.7.)',
            kn: 'ಸೂರ್ಯಕಿರಣವುಳ್ಳ ಸುಷುಮ್ನ ಗಂಧರ್ವ ಚಂದ್ರ; ಅವನ ಅಪ್ಸರೆಯರು ನಕ್ಷತ್ರಗಳು, “ಬೇಕುರಿ” ಎಂಬವರು — ಅವನು ಈ ಬ್ರಹ್ಮ–ಕ್ಷತ್ರಗಳನ್ನು ಕಾಪಾಡಲಿ, ಅವರು ಈ ಬ್ರಹ್ಮ–ಕ್ಷತ್ರಗಳನ್ನು ಕಾಪಾಡಲಿ; ಅವನಿಗೆ ಸ್ವಾಹಾ, ಅವರಿಗೆ ಸ್ವಾಹಾ. ಇದು ಗಂಧರ್ವನಿಗೆ, ಅಪ್ಸರೆಯರಿಗೆ, ನನ್ನದಲ್ಲ. (ರಾಷ್ಟ್ರಭೃತ್ ೩)',
          },
        },
        {
          text: 'भुज्युः सुपर्णो यज्ञो गन्धर्वस्तस्य दक्षिणा अप्सरसः स्तवा नाम ।\nस इदं ब्रह्म क्षत्रं पातु ता इदं ब्रह्म क्षत्रं पान्तु तस्मै स्वाहा ।\nयज्ञाय गन्धर्वाय इदं न मम । ताभ्यः स्वाहा । दक्षिणाभ्योऽप्सरोभ्य इदं न मम ॥',
          meaning: {
            en: 'the Sacrifice, the gandharva who nourishes, of fair wings; his apsarases are the gifts, named Stavas — may he protect this priesthood and this rule; may they protect this priesthood and this rule; to him svaha, to them svaha. This is for the gandharva and for the apsarases, not mine. (Rashtrabhrt 4, Taittiriya Samhita 3.4.7.)',
            kn: 'ಪೋಷಿಸುವ, ಸುಂದರ ರೆಕ್ಕೆಗಳ ಗಂಧರ್ವ ಯಜ್ಞ; ಅವನ ಅಪ್ಸರೆಯರು ದಕ್ಷಿಣೆಗಳು, “ಸ್ತವ” ಎಂಬವರು — ಅವನು ಈ ಬ್ರಹ್ಮ–ಕ್ಷತ್ರಗಳನ್ನು ಕಾಪಾಡಲಿ, ಅವರು ಈ ಬ್ರಹ್ಮ–ಕ್ಷತ್ರಗಳನ್ನು ಕಾಪಾಡಲಿ; ಅವನಿಗೆ ಸ್ವಾಹಾ, ಅವರಿಗೆ ಸ್ವಾಹಾ. ಇದು ಗಂಧರ್ವನಿಗೆ, ಅಪ್ಸರೆಯರಿಗೆ, ನನ್ನದಲ್ಲ. (ರಾಷ್ಟ್ರಭೃತ್ ೪)',
          },
        },
        {
          text: 'प्रजापतिर्विश्वकर्मा मनो गन्धर्वस्तस्यर्क्सामान्यप्सरसो वह्नयो नाम ।\nस इदं ब्रह्म क्षत्रं पातु ता इदं ब्रह्म क्षत्रं पान्तु तस्मै स्वाहा ।\nमनसे गन्धर्वाय इदं न मम । ताभ्यः स्वाहा । ऋक्सामेभ्योऽप्सरोभ्य इदं न मम ॥',
          meaning: {
            en: 'Mind, the gandharva who is Prajapati and Vishvakarma; his apsarases are the Rik and Saman verses, named Vahnis — may he protect this priesthood and this rule; may they protect this priesthood and this rule; to him svaha, to them svaha. This is for the gandharva and for the apsarases, not mine. (Rashtrabhrt 5, Taittiriya Samhita 3.4.7.)',
            kn: 'ಪ್ರಜಾಪತಿಯೂ ವಿಶ್ವಕರ್ಮನೂ ಆದ ಗಂಧರ್ವ ಮನಸ್ಸು; ಅವನ ಅಪ್ಸರೆಯರು ಋಕ್–ಸಾಮಗಳು, “ವಹ್ನಿ” ಎಂಬವರು — ಅವನು ಈ ಬ್ರಹ್ಮ–ಕ್ಷತ್ರಗಳನ್ನು ಕಾಪಾಡಲಿ, ಅವರು ಈ ಬ್ರಹ್ಮ–ಕ್ಷತ್ರಗಳನ್ನು ಕಾಪಾಡಲಿ; ಅವನಿಗೆ ಸ್ವಾಹಾ, ಅವರಿಗೆ ಸ್ವಾಹಾ. ಇದು ಗಂಧರ್ವನಿಗೆ, ಅಪ್ಸರೆಯರಿಗೆ, ನನ್ನದಲ್ಲ. (ರಾಷ್ಟ್ರಭೃತ್ ೫)',
          },
        },
        {
          text: 'इषिरो विश्वव्यचा वातो गन्धर्वस्तस्यापोऽप्सरसो मुदा नाम ।\nस इदं ब्रह्म क्षत्रं पातु ता इदं ब्रह्म क्षत्रं पान्तु तस्मै स्वाहा ।\nवाताय गन्धर्वाय इदं न मम । ताभ्यः स्वाहा । अद्भ्योऽप्सरोभ्य इदं न मम ॥',
          meaning: {
            en: 'the Wind, the swift all-pervading gandharva; his apsarases are the waters, named Mudas — may he protect this priesthood and this rule; may they protect this priesthood and this rule; to him svaha, to them svaha. This is for the gandharva and for the apsarases, not mine. (Rashtrabhrt 6, Taittiriya Samhita 3.4.7.)',
            kn: 'ವೇಗವಾದ, ಸರ್ವವ್ಯಾಪಿ ಗಂಧರ್ವ ವಾಯು; ಅವನ ಅಪ್ಸರೆಯರು ಜಲಗಳು, “ಮುದಾ” ಎಂಬವರು — ಅವನು ಈ ಬ್ರಹ್ಮ–ಕ್ಷತ್ರಗಳನ್ನು ಕಾಪಾಡಲಿ, ಅವರು ಈ ಬ್ರಹ್ಮ–ಕ್ಷತ್ರಗಳನ್ನು ಕಾಪಾಡಲಿ; ಅವನಿಗೆ ಸ್ವಾಹಾ, ಅವರಿಗೆ ಸ್ವಾಹಾ. ಇದು ಗಂಧರ್ವನಿಗೆ, ಅಪ್ಸರೆಯರಿಗೆ, ನನ್ನದಲ್ಲ. (ರಾಷ್ಟ್ರಭೃತ್ ೬)',
          },
        },
        {
          text: 'भुवनस्य पते यस्य त उपरि गृहा इह च ।\nस नो रास्वाज्यानिं रायस्पोषं सुवीर्यं संवत्सरीणां स्वस्तिं स्वाहा ।\nभुवनस्य पतय इदं न मम ॥',
          meaning: {
            en: 'O lord of the world, whose dwellings are above and here, grant us unfailing increase of wealth, good strength and the well-being of the whole year, svaha. This is for the lord of the world, not mine. (Rashtrabhrt 7, Taittiriya Samhita 3.4.7.)',
            kn: 'ಓ ಭುವನದ ಒಡೆಯನೇ, ಮೇಲೆಯೂ ಇಲ್ಲಿಯೂ ಯಾರ ಮನೆಗಳಿವೆಯೋ ಆ ನೀನು ನಮಗೆ ಕ್ಷಯಿಸದ ಸಂಪದ್ವೃದ್ಧಿ, ಉತ್ತಮ ಬಲ, ವರ್ಷವಿಡೀ ಕ್ಷೇಮವನ್ನು ಕೊಡು, ಸ್ವಾಹಾ. ಇದು ಭುವನಪತಿಗೆ, ನನ್ನದಲ್ಲ. (ರಾಷ್ಟ್ರಭೃತ್ ೭)',
          },
        },
        {
          text: 'परमेष्ठ्यधिपतिर्मृत्युर्गन्धर्वस्तस्य विश्वमप्सरसो भुवो नाम ।\nस इदं ब्रह्म क्षत्रं पातु ता इदं ब्रह्म क्षत्रं पान्तु तस्मै स्वाहा ।\nमृत्यवे गन्धर्वाय इदं न मम । ताभ्यः स्वाहा । विश्वस्मा अप्सरोभ्य इदं न मम ॥',
          meaning: {
            en: 'Death, the supreme overlord gandharva; his apsarases are the whole world, named Bhuvas — may he protect this priesthood and this rule; may they protect this priesthood and this rule; to him svaha, to them svaha. This is for the gandharva and for the apsarases, not mine. (Rashtrabhrt 8, Taittiriya Samhita 3.4.7.)',
            kn: 'ಪರಮೇಷ್ಠಿ, ಅಧಿಪತಿ ಗಂಧರ್ವ ಮೃತ್ಯು; ಅವನ ಅಪ್ಸರೆಯರು ವಿಶ್ವ, “ಭುವ” ಎಂಬವರು — ಅವನು ಈ ಬ್ರಹ್ಮ–ಕ್ಷತ್ರಗಳನ್ನು ಕಾಪಾಡಲಿ, ಅವರು ಈ ಬ್ರಹ್ಮ–ಕ್ಷತ್ರಗಳನ್ನು ಕಾಪಾಡಲಿ; ಅವನಿಗೆ ಸ್ವಾಹಾ, ಅವರಿಗೆ ಸ್ವಾಹಾ. ಇದು ಗಂಧರ್ವನಿಗೆ, ಅಪ್ಸರೆಯರಿಗೆ, ನನ್ನದಲ್ಲ. (ರಾಷ್ಟ್ರಭೃತ್ ೮)',
          },
        },
        {
          text: 'सुक्षितिः सुभूतिर्भद्रकृत्सुवर्वान्पर्जन्यो गन्धर्वस्तस्य विद्युतोऽप्सरसो रुचो नाम ।\nस इदं ब्रह्म क्षत्रं पातु ता इदं ब्रह्म क्षत्रं पान्तु तस्मै स्वाहा ।\nपर्जन्याय गन्धर्वाय इदं न मम । ताभ्यः स्वाहा । विद्युद्भ्योऽप्सरोभ्य इदं न मम ॥',
          meaning: {
            en: 'Parjanya, the gandharva of good dwelling and good welfare, doer of good, full of light; his apsarases are the lightnings, named Ruchs — may he protect this priesthood and this rule; may they protect this priesthood and this rule; to him svaha, to them svaha. This is for the gandharva and for the apsarases, not mine. (Rashtrabhrt 9, Taittiriya Samhita 3.4.7.)',
            kn: 'ಸುಕ್ಷಿತಿ, ಸುಭೂತಿ, ಭದ್ರಕಾರಿ, ಪ್ರಕಾಶಮಾನ ಗಂಧರ್ವ ಪರ್ಜನ್ಯ; ಅವನ ಅಪ್ಸರೆಯರು ಮಿಂಚುಗಳು, “ರುಚ್” ಎಂಬವರು — ಅವನು ಈ ಬ್ರಹ್ಮ–ಕ್ಷತ್ರಗಳನ್ನು ಕಾಪಾಡಲಿ, ಅವರು ಈ ಬ್ರಹ್ಮ–ಕ್ಷತ್ರಗಳನ್ನು ಕಾಪಾಡಲಿ; ಅವನಿಗೆ ಸ್ವಾಹಾ, ಅವರಿಗೆ ಸ್ವಾಹಾ. ಇದು ಗಂಧರ್ವನಿಗೆ, ಅಪ್ಸರೆಯರಿಗೆ, ನನ್ನದಲ್ಲ. (ರಾಷ್ಟ್ರಭೃತ್ ೯)',
          },
        },
        {
          text: 'दूरेहेतिरमृडयो मृत्युर्गन्धर्वस्तस्य प्रजा अप्सरसो भीरुवो नाम ।\nस इदं ब्रह्म क्षत्रं पातु ता इदं ब्रह्म क्षत्रं पान्तु तस्मै स्वाहा ।\nमृत्यवे गन्धर्वाय इदं न मम । ताभ्यः स्वाहा । प्रजाभ्योऽप्सरोभ्य इदं न मम ॥',
          meaning: {
            en: 'Death, the merciless gandharva whose missile strikes from afar; his apsarases are the creatures, named Bhirus — may he protect this priesthood and this rule; may they protect this priesthood and this rule; to him svaha, to them svaha. This is for the gandharva and for the apsarases, not mine. (Rashtrabhrt 10, Taittiriya Samhita 3.4.7.)',
            kn: 'ದೂರದಿಂದ ಆಯುಧ ಎಸೆಯುವ, ದಯೆಯಿಲ್ಲದ ಗಂಧರ್ವ ಮೃತ್ಯು; ಅವನ ಅಪ್ಸರೆಯರು ಪ್ರಜೆಗಳು, “ಭೀರು” ಎಂಬವರು — ಅವನು ಈ ಬ್ರಹ್ಮ–ಕ್ಷತ್ರಗಳನ್ನು ಕಾಪಾಡಲಿ, ಅವರು ಈ ಬ್ರಹ್ಮ–ಕ್ಷತ್ರಗಳನ್ನು ಕಾಪಾಡಲಿ; ಅವನಿಗೆ ಸ್ವಾಹಾ, ಅವರಿಗೆ ಸ್ವಾಹಾ. ಇದು ಗಂಧರ್ವನಿಗೆ, ಅಪ್ಸರೆಯರಿಗೆ, ನನ್ನದಲ್ಲ. (ರಾಷ್ಟ್ರಭೃತ್ ೧೦)',
          },
        },
        {
          text: 'चारुः कृपणकाशी कामो गन्धर्वस्तस्याधयोऽप्सरसः शोचयन्तीर्नाम ।\nस इदं ब्रह्म क्षत्रं पातु ता इदं ब्रह्म क्षत्रं पान्तु तस्मै स्वाहा ।\nकामाय गन्धर्वाय इदं न मम । ताभ्यः स्वाहा । आधिभ्योऽप्सरोभ्य इदं न मम ॥',
          meaning: {
            en: 'Desire, the charming gandharva who makes the wretched shine; his apsarases are the longings, named Shochayantis — may he protect this priesthood and this rule; may they protect this priesthood and this rule; to him svaha, to them svaha. This is for the gandharva and for the apsarases, not mine. (Rashtrabhrt 11, Taittiriya Samhita 3.4.7.)',
            kn: 'ಮನೋಹರ, ದೀನರನ್ನು ಬೆಳಗಿಸುವ ಗಂಧರ್ವ ಕಾಮ; ಅವನ ಅಪ್ಸರೆಯರು ಹಂಬಲಗಳು, “ಶೋಚಯಂತೀ” ಎಂಬವರು — ಅವನು ಈ ಬ್ರಹ್ಮ–ಕ್ಷತ್ರಗಳನ್ನು ಕಾಪಾಡಲಿ, ಅವರು ಈ ಬ್ರಹ್ಮ–ಕ್ಷತ್ರಗಳನ್ನು ಕಾಪಾಡಲಿ; ಅವನಿಗೆ ಸ್ವಾಹಾ, ಅವರಿಗೆ ಸ್ವಾಹಾ. ಇದು ಗಂಧರ್ವನಿಗೆ, ಅಪ್ಸರೆಯರಿಗೆ, ನನ್ನದಲ್ಲ. (ರಾಷ್ಟ್ರಭೃತ್ ೧೧)',
          },
        },
        {
          text: 'स नो भुवनस्य पते यस्य त उपरि गृहा इह च ।\nउरु ब्रह्मणेऽस्मै क्षत्राय महि शर्म यच्छ स्वाहा ।\nभुवनस्य पतये ब्रह्मण इदं न मम ॥',
          meaning: {
            en: 'O lord of the world, whose dwellings are above and here, give wide and great shelter to this priesthood and this rule, svaha. This is for the lord of the world, for Brahman, not mine. (Rashtrabhrt 12, Taittiriya Samhita 3.4.7.)',
            kn: 'ಓ ಭುವನದ ಒಡೆಯನೇ, ಮೇಲೆಯೂ ಇಲ್ಲಿಯೂ ಮನೆಗಳುಳ್ಳವನೇ, ಈ ಬ್ರಹ್ಮಕ್ಕೂ ಈ ಕ್ಷತ್ರಕ್ಕೂ ವಿಶಾಲವಾದ ಮಹತ್ತಾದ ಆಶ್ರಯವನ್ನು ಕೊಡು, ಸ್ವಾಹಾ. ಇದು ಭುವನಪತಿ ಬ್ರಹ್ಮನಿಗೆ, ನನ್ನದಲ್ಲ. (ರಾಷ್ಟ್ರಭೃತ್ ೧೨)',
          },
        },
      ],
    },
    {
      title: 'प्राजापत्या व्याहृतयः स्विष्टकृच्च',
      titleEn: 'Prajapati, the vyahritis and svishtakrit',
      note: 'Offer ghee with प्रजापते न त्वदेतानि… and the three vyahritis, which close the jaya group; then the svishtakrit, offered in the north-eastern part of the fire (Muddu Shrauti, Mylapore manual; Apastamba Grihya Sutra 2.7).',
      noteKn: '“ಪ್ರಜಾಪತೇ ನ ತ್ವದೇತಾನಿ…” ಮತ್ತು ಮೂರು ವ್ಯಾಹೃತಿಗಳಿಂದ ಆಜ್ಯಾಹುತಿ (ಜಯಾದಿ ಗುಂಪಿನ ಕೊನೆ); ನಂತರ ಅಗ್ನಿಯ ಈಶಾನ್ಯ ಭಾಗದಲ್ಲಿ ಸ್ವಿಷ್ಟಕೃತ್ (ಮುದ್ದು ಶ್ರೌತಿ, ಮೈಲಾಪುರ ಗ್ರಂಥ; ಆಪಸ್ತಂಬ ಗೃಹ್ಯಸೂತ್ರ ೨.೭).',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'प्रजापते न त्वदेतान्यन्यो विश्वा जातानि परि ता बभूव ।\nयत्कामास्ते जुहुमस्तन्नो अस्तु वयं स्याम पतयो रयीणां स्वाहा ।\nप्रजापतय इदं न मम ॥',
          meaning: {
            en: 'O Prajapati, none but you encompasses all these created things. May that for which we offer to you be ours; may we be lords of riches, svaha. This is for Prajapati, not for me. (Taittiriya Samhita 1.8.14; Rigveda 10.121.10)',
            kn: 'ಓ ಪ್ರಜಾಪತಿಯೇ, ನಿನ್ನ ಹೊರತು ಬೇರೆ ಯಾರೂ ಈ ಎಲ್ಲ ಸೃಷ್ಟಿಗಳನ್ನು ಆವರಿಸಿಲ್ಲ. ಯಾವ ಕಾಮನೆಯಿಂದ ನಿನಗೆ ಹೋಮಿಸುತ್ತೇವೆಯೋ ಅದು ನಮಗಾಗಲಿ; ನಾವು ಸಂಪತ್ತಿನ ಒಡೆಯರಾಗೋಣ, ಸ್ವಾಹಾ. ಇದು ಪ್ರಜಾಪತಿಗೆ, ನನ್ನದಲ್ಲ. (ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೧.೮.೧೪; ಋಗ್ವೇದ ೧೦.೧೨೧.೧೦)',
          },
        },
        {
          text: 'भूः स्वाहा । अग्नय इदं न मम ।\nभुवः स्वाहा । वायव इदं न मम ।\nसुवः स्वाहा । सूर्यायेदं न मम ॥',
          meaning: {
            en: 'Earth, svaha — for Agni, not mine. Sky, svaha — for Vayu, not mine. Heaven, svaha — for Surya, not mine. (The three vyahritis.)',
            kn: 'ಭೂಃ ಸ್ವಾಹಾ — ಅಗ್ನಿಗೆ, ನನ್ನದಲ್ಲ. ಭುವಃ ಸ್ವಾಹಾ — ವಾಯುವಿಗೆ, ನನ್ನದಲ್ಲ. ಸುವಃ ಸ್ವಾಹಾ — ಸೂರ್ಯನಿಗೆ, ನನ್ನದಲ್ಲ. (ಮೂರು ವ್ಯಾಹೃತಿಗಳು)',
          },
        },
        {
          text: 'यदस्य कर्मणोऽत्यरीरिचं यद्वा न्यूनमिहाकरम् ।\nअग्निष्टत्स्विष्टकृद्विद्वान्सर्वं स्विष्टं सुहुतं करोतु स्वाहा ।\nअग्नये स्विष्टकृत इदं न मम ॥',
          meaning: {
            en: 'Whatever in this rite I have done in excess, or whatever I have done short of what is due, may Agni the Svishtakrit, who knows it, make it all well-sacrificed and well-offered, svaha. This is for Agni Svishtakrit, not for me. (Apastamba Grihya Sutra 2.7)',
            kn: 'ಈ ಕರ್ಮದಲ್ಲಿ ನಾನು ಏನನ್ನು ಹೆಚ್ಚಾಗಿ ಮಾಡಿದೆನೋ, ಅಥವಾ ಕಡಿಮೆಯಾಗಿ ಮಾಡಿದೆನೋ, ಅದನ್ನು ತಿಳಿದ ಸ್ವಿಷ್ಟಕೃತ್ ಅಗ್ನಿಯು ಎಲ್ಲವನ್ನೂ ಸ್ವಿಷ್ಟವಾಗಿಯೂ ಸುಹುತವಾಗಿಯೂ ಮಾಡಲಿ, ಸ್ವಾಹಾ. ಇದು ಸ್ವಿಷ್ಟಕೃತ್ ಅಗ್ನಿಗೆ, ನನ್ನದಲ್ಲ. (ಆಪಸ್ತಂಬ ಗೃಹ್ಯಸೂತ್ರ ೨.೭)',
          },
        },
      ],
    },
    {
      title: 'परिध्यञ्जनं संस्रावश्च',
      titleEn: 'Paridhi anointing and the samsrava',
      note: 'Silently: with the big darvi anoint the paridhis with ghee, middle, south and north; dip the tip, middle and root of the darbha that held the vessels in the darvi, the small darvi and the ghee vessel three times, keep one blade aside and put the rest into the fire, then that blade; point three times at the fire with a finger and address it with both hands near the paridhis; touch the earth. Put the middle paridhi into the fire, tip east, then the other two together, and with both darvis pour the samsrava over the paridhis (Muddu Shrauti, Mylapore manual).',
      noteKn: 'ಮೌನವಾಗಿ: ದೊಡ್ಡ ದರ್ವಿಯಿಂದ ಪರಿಧಿಗಳಿಗೆ — ಮಧ್ಯ, ದಕ್ಷಿಣ, ಉತ್ತರ — ತುಪ್ಪ ಸವರಿ; ಪಾತ್ರಾಸಾದನದ ದರ್ಭೆಯ ತುದಿ, ಮಧ್ಯ, ಬುಡಗಳನ್ನು ದರ್ವಿ, ಚಿಕ್ಕ ದರ್ವಿ, ಆಜ್ಯಪಾತ್ರೆಗಳಲ್ಲಿ ಮೂರು ಬಾರಿ ಅದ್ದಿ, ಒಂದು ಎಸಳನ್ನು ಬೇರೆ ಇಟ್ಟು ಉಳಿದದ್ದನ್ನು ಅಗ್ನಿಗೆ, ನಂತರ ಆ ಎಸಳನ್ನು ಹಾಕಿ; ಬೆರಳಿನಿಂದ ಮೂರು ಬಾರಿ ಅಗ್ನಿಯನ್ನು ತೋರಿಸಿ, ಪರಿಧಿಗಳ ಬಳಿ ಎರಡು ಕೈ ಇಟ್ಟು ಪ್ರಾರ್ಥಿಸಿ; ಭೂಮಿಯನ್ನು ಮುಟ್ಟಿ. ಮಧ್ಯದ ಪರಿಧಿಯನ್ನು ತುದಿ ಪೂರ್ವಕ್ಕಿರುವಂತೆ ಅಗ್ನಿಗೆ ಹಾಕಿ, ಉಳಿದೆರಡನ್ನು ಒಟ್ಟಿಗೆ ಹಾಕಿ, ಎರಡು ದರ್ವಿಗಳಿಂದ ಸಂಸ್ರಾವವನ್ನು ಪರಿಧಿಗಳ ಮೇಲೆ ಸುರಿಯಿರಿ (ಮುದ್ದು ಶ್ರೌತಿ, ಮೈಲಾಪುರ ಗ್ರಂಥ).',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'स्वाहा । वसुभ्यो रुद्रेभ्य आदित्येभ्यः संस्रावभागेभ्य इदं न मम ।\nॐ भूर्भुवः सुवः स्वाहा । प्रजापतय इदं न मम ॥',
          meaning: {
            en: 'Svaha — this is for the Vasus, the Rudras and the Adityas, whose share is the samsrava, not mine. Om, earth, sky and heaven, svaha — for Prajapati, not mine. (Muddu Shrauti.)',
            kn: 'ಸ್ವಾಹಾ — ಇದು ಸಂಸ್ರಾವಭಾಗಿಗಳಾದ ವಸುಗಳು, ರುದ್ರರು, ಆದಿತ್ಯರಿಗೆ, ನನ್ನದಲ್ಲ. ಓಂ ಭೂರ್ಭುವಃ ಸುವಃ ಸ್ವಾಹಾ — ಪ್ರಜಾಪತಿಗೆ, ನನ್ನದಲ್ಲ. (ಮುದ್ದು ಶ್ರೌತಿ)',
          },
        },
      ],
    },
    {
      title: 'प्रायश्चित्तहोमः',
      titleEn: 'Prayaschitta: for known and unknown faults',
      note: 'Say अस्मिन् अमुकहोमकर्मणि अविज्ञातप्रायश्चित्तादीनि होष्यामि and offer ghee with the three verses (Taittiriya Brahmana 3.7.11, with the Taittiriya मर्तासः), then the four vyahritis. Then say the sankalpa अस्मिन् अमुकहोमकर्मणि मध्ये सम्भावितसमस्तमन्त्रलोपतन्त्रलोपद्रव्यलोपक्रियालोपाज्यलोपन्यूनातिरेकविस्मृतिविपर्यासप्रायश्चित्तार्थं सर्वप्रायश्चित्तं होष्यामि and offer to Prajapati with the vyahritis, to Vishnu and to Rudra Pashupati, and touch water (Muddu Shrauti, Mylapore manual).',
      noteKn: '“ಅಸ್ಮಿನ್ ಅಮುಕಹೋಮಕರ್ಮಣಿ ಅವಿಜ್ಞಾತಪ್ರಾಯಶ್ಚಿತ್ತಾದೀನಿ ಹೋಷ್ಯಾಮಿ” ಎಂದು ಹೇಳಿ ಮೂರು ಮಂತ್ರಗಳಿಂದ (ತೈತ್ತಿರೀಯ ಬ್ರಾಹ್ಮಣ ೩.೭.೧೧, “ಮರ್ತಾಸಃ”) ಮತ್ತು ನಾಲ್ಕು ವ್ಯಾಹೃತಿಗಳಿಂದ ಆಜ್ಯಾಹುತಿ. ನಂತರ “ಅಸ್ಮಿನ್ ಅಮುಕಹೋಮಕರ್ಮಣಿ ಮಧ್ಯೇ ಸಂಭಾವಿತ… ಸರ್ವಪ್ರಾಯಶ್ಚಿತ್ತಂ ಹೋಷ್ಯಾಮಿ” ಎಂದು ಸಂಕಲ್ಪಿಸಿ ವ್ಯಾಹೃತಿಗಳಿಂದ ಪ್ರಜಾಪತಿಗೆ, ವಿಷ್ಣುವಿಗೆ, ಪಶುಪತಿ ರುದ್ರನಿಗೆ ಆಹುತಿ ನೀಡಿ ನೀರು ಮುಟ್ಟಿ (ಮುದ್ದು ಶ್ರೌತಿ, ಮೈಲಾಪುರ ಗ್ರಂಥ).',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'अनाज्ञातं यदाज्ञातं यज्ञस्य क्रियते मिथु ।\nअग्ने तदस्य कल्पय त्वं हि वेत्थ यथातथं स्वाहा । अग्नय इदं न मम ॥',
          meaning: {
            en: 'Whatever in the sacrifice is done wrongly, unknowingly or knowingly — O Agni, set it right, for you know it as it truly is, svaha. This is for Agni, not for me.',
            kn: 'ಯಜ್ಞದಲ್ಲಿ ತಿಳಿಯದೆಯೋ ತಿಳಿದೋ ತಪ್ಪಾಗಿ ಮಾಡಿದ್ದನ್ನು, ಓ ಅಗ್ನಿಯೇ, ಸರಿಪಡಿಸು; ಅದನ್ನು ಇದ್ದಂತೆ ನೀನೇ ಬಲ್ಲೆ, ಸ್ವಾಹಾ. ಇದು ಅಗ್ನಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'पुरुषसम्मितो यज्ञो यज्ञः पुरुषसम्मितः ।\nअग्ने तदस्य कल्पय त्वं हि वेत्थ यथातथं स्वाहा । अग्नय इदं न मम ॥',
          meaning: {
            en: 'The sacrifice is measured to the person, the person to the sacrifice; O Agni, set it right, for you know it as it truly is, svaha. This is for Agni, not for me.',
            kn: 'ಯಜ್ಞವು ಪುರುಷನಿಗೆ ಸಮಾನ, ಪುರುಷನು ಯಜ್ಞಕ್ಕೆ ಸಮಾನ; ಓ ಅಗ್ನಿಯೇ, ಇದನ್ನು ಸರಿಪಡಿಸು, ಇದ್ದಂತೆ ನೀನೇ ಬಲ್ಲೆ, ಸ್ವಾಹಾ. ಇದು ಅಗ್ನಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'यत्पाकत्रा मनसा दीनदक्षा न यज्ञस्य मन्वते मर्तासः ।\nअग्निष्टद्धोता क्रतुविद्विजानन्यजिष्ठो देवां ऋतुशो यजाति स्वाहा । अग्नय इदं न मम ॥',
          meaning: {
            en: 'What mortals of simple mind and little skill do not understand of the sacrifice, Agni the priest, knower of rites, understanding it, best of worshippers, offers to the gods at their proper seasons, svaha. This is for Agni, not for me. (Taittiriya Brahmana 3.7.11)',
            kn: 'ಮುಗ್ಧಮನಸ್ಸಿನ, ಅಲ್ಪಸಾಮರ್ಥ್ಯದ ಮನುಷ್ಯರು ಯಜ್ಞದಲ್ಲಿ ಯಾವುದನ್ನು ಅರಿಯರೋ, ಅದನ್ನು ಕರ್ಮಜ್ಞನಾದ ಹೋತೃ ಅಗ್ನಿಯು ತಿಳಿದು, ಶ್ರೇಷ್ಠ ಯಾಜಕನಾಗಿ ತಕ್ಕ ಕಾಲದಲ್ಲಿ ದೇವತೆಗಳಿಗೆ ಅರ್ಪಿಸುತ್ತಾನೆ, ಸ್ವಾಹಾ. ಇದು ಅಗ್ನಿಗೆ, ನನ್ನದಲ್ಲ. (ತೈತ್ತಿರೀಯ ಬ್ರಾಹ್ಮಣ ೩.೭.೧೧)',
          },
        },
        {
          text: 'भूः स्वाहा । अग्नय इदं न मम ।\nभुवः स्वाहा । वायव इदं न मम ।\nसुवः स्वाहा । सूर्यायेदं न मम ।\nॐ भूर्भुवः सुवः स्वाहा । प्रजापतय इदं न मम ॥',
          meaning: {
            en: 'Earth, svaha — for Agni; sky, svaha — for Vayu; heaven, svaha — for Surya; Om, earth, sky and heaven, svaha — for Prajapati; none of it is mine.',
            kn: 'ಭೂಃ ಸ್ವಾಹಾ — ಅಗ್ನಿಗೆ; ಭುವಃ ಸ್ವಾಹಾ — ವಾಯುವಿಗೆ; ಸುವಃ ಸ್ವಾಹಾ — ಸೂರ್ಯನಿಗೆ; ಓಂ ಭೂರ್ಭುವಃ ಸುವಃ ಸ್ವಾಹಾ — ಪ್ರಜಾಪತಿಗೆ; ಯಾವುದೂ ನನ್ನದಲ್ಲ.',
          },
        },
        {
          text: 'ॐ भूर्भुवः सुवः स्वाहा । प्रजापतय इदं न मम ।\nश्रीविष्णवे स्वाहा । विष्णवे परमात्मन इदं न मम ।\nनमो रुद्राय पशुपतये स्वाहा । रुद्राय पशुपतय इदं न मम ॥',
          meaning: {
            en: 'Om, earth, sky and heaven, svaha — for Prajapati, not for me. To Sri Vishnu, svaha — for Vishnu, the Supreme Self, not for me. Salutation to Rudra, lord of beings, svaha — for Rudra Pashupati, not for me (then touch water).',
            kn: 'ಓಂ ಭೂರ್ಭುವಃಸುವಃ ಸ್ವಾಹಾ — ಪ್ರಜಾಪತಿಗೆ, ನನ್ನದಲ್ಲ. ಓಂ ಶ್ರೀವಿಷ್ಣುವಿಗೆ ಸ್ವಾಹಾ — ಪರಮಾತ್ಮನಾದ ವಿಷ್ಣುವಿಗೆ, ನನ್ನದಲ್ಲ. ಓಂ ಪಶುಪತಿ ರುದ್ರನಿಗೆ ಸ್ವಾಹಾ — ಪಶುಪತಿ ರುದ್ರನಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
      ],
    },
    {
      title: 'पूर्णाहुतिः',
      titleEn: 'Purnahuti (the full offering)',
      note: 'Say the sankalpa अस्मिन् होमकर्मणि सम्पूर्णफलप्राप्त्यर्थं पूर्णाहुतिं होष्यामि. Fill the sruk with ghee, or wrap a coconut or fruit in a silk cloth (as the homa prescribes), stand and say the purnahuti mantra (Taittiriya Brahmana 3.8.10), then offer it with the main Vedic mantra of the homa ending in svaha, as the homa text gives it (Mylapore manual: गणानां त्वा… for the Ganapati homa), and go on offering the remaining materials with the mula mantra until all are consumed. Then offer ghee with सप्त ते अग्ने… (Muddu Shrauti, Mylapore manual; some families pour it in an unbroken stream as the vasordhara, and in large homas the Chamakam is recited during the vasordhara).',
      noteKn: '“ಅಸ್ಮಿನ್ ಹೋಮಕರ್ಮಣಿ ಸಂಪೂರ್ಣಫಲಪ್ರಾಪ್ತ್ಯರ್ಥಂ ಪೂರ್ಣಾಹುತಿಂ ಹೋಷ್ಯಾಮಿ” ಎಂದು ಸಂಕಲ್ಪಿಸಿ. ಸ್ರುಕ್ಕನ್ನು ತುಪ್ಪದಿಂದ ತುಂಬಿ, ಅಥವಾ ತೆಂಗಿನಕಾಯಿ/ಫಲವನ್ನು ರೇಷ್ಮೆ ವಸ್ತ್ರದಲ್ಲಿ ಸುತ್ತಿ (ಹೋಮಕ್ಕೆ ತಕ್ಕಂತೆ), ನಿಂತು ಪೂರ್ಣಾಹುತಿ ಮಂತ್ರ (ತೈತ್ತಿರೀಯ ಬ್ರಾಹ್ಮಣ ೩.೮.೧೦) ಹೇಳಿ, ಹೋಮದ ಪಠ್ಯ ಕೊಟ್ಟ ಪ್ರಧಾನ ವೈದಿಕ ಮಂತ್ರವನ್ನು ಸ್ವಾಹಾದೊಡನೆ ಹೇಳಿ ಅರ್ಪಿಸಿ (ಮೈಲಾಪುರ: ಗಣಪತಿ ಹೋಮಕ್ಕೆ “ಗಣಾನಾಂ ತ್ವಾ…”); ಉಳಿದ ದ್ರವ್ಯಗಳು ಮುಗಿಯುವವರೆಗೆ ಮೂಲಮಂತ್ರದಿಂದ ಅರ್ಪಿಸಿ. ನಂತರ “ಸಪ್ತ ತೇ ಅಗ್ನೇ…” ಎಂದು ಆಜ್ಯಾಹುತಿ (ಮುದ್ದು ಶ್ರೌತಿ, ಮೈಲಾಪುರ; ಕೆಲವರು ಇದನ್ನು ವಸೋರ್ಧಾರೆಯಾಗಿ ಅಖಂಡ ಧಾರೆಯಲ್ಲಿ ಸುರಿಯುತ್ತಾರೆ, ದೊಡ್ಡ ಹೋಮಗಳಲ್ಲಿ ಆಗ ಚಮಕ ಪಠಣ).',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'पूर्णाहुतिमुत्तमां जुहोति । सर्वं वै पूर्णाहुतिः । सर्वमेवाप्नोति ।\nअथो इयं वै पूर्णाहुतिः । अस्यामेव प्रतितिष्ठति स्वाहा ॥',
          meaning: {
            en: 'He offers the full offering as the last and highest. The full offering is everything; by it he obtains everything. And this earth is the full offering; on it he stands firm, svaha.',
            kn: 'ಕೊನೆಯ ಶ್ರೇಷ್ಠ ಆಹುತಿಯಾಗಿ ಪೂರ್ಣಾಹುತಿಯನ್ನು ನೀಡುತ್ತಾನೆ. ಪೂರ್ಣಾಹುತಿಯೇ ಸರ್ವಸ್ವ; ಅದರಿಂದ ಎಲ್ಲವನ್ನೂ ಪಡೆಯುತ್ತಾನೆ. ಈ ಭೂಮಿಯೇ ಪೂರ್ಣಾಹುತಿ; ಇದರಲ್ಲೇ ಅವನು ಸ್ಥಿರವಾಗಿ ನಿಲ್ಲುತ್ತಾನೆ, ಸ್ವಾಹಾ.',
          },
        },
        {
          text: 'सप्त ते अग्ने समिधः सप्त जिह्वाः सप्तर्षयः सप्त धाम प्रियाणि ।\nसप्त होत्राः सप्तधा त्वा यजन्ति सप्त योनीरा पृणस्वा घृतेन स्वाहा ।\nअग्नये सप्तवत इदं न मम ॥',
          meaning: {
            en: 'Seven are your fuels, O Agni, seven your tongues, seven the seers, seven your beloved abodes; seven priests worship you in seven ways; fill your seven sources with ghee, svaha. This is for Agni of the sevens, not mine. (Taittiriya Samhita 4.6.5.)',
            kn: 'ಓ ಅಗ್ನಿಯೇ, ನಿನಗೆ ಏಳು ಸಮಿಧೆಗಳು, ಏಳು ನಾಲಿಗೆಗಳು, ಏಳು ಋಷಿಗಳು, ಏಳು ಪ್ರಿಯ ಧಾಮಗಳು; ಏಳು ಹೋತೃಗಳು ಏಳು ಬಗೆಯಲ್ಲಿ ನಿನ್ನನ್ನು ಯಜಿಸುತ್ತಾರೆ; ನಿನ್ನ ಏಳು ಯೋನಿಗಳನ್ನು ಘೃತದಿಂದ ತುಂಬಿಕೋ, ಸ್ವಾಹಾ. (ವಸೋರ್ಧಾರಾ.) ಇದು “ಸಪ್ತವಾನ್” ಅಗ್ನಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
      ],
    },
    {
      title: 'परिषेचनं मार्जनं वरदानं च',
      titleEn: 'Parishechana, marjana and the gift to the Brahma',
      note: 'Set the ghee vessel and the rest to the north, do pranayama, and sprinkle water round the fire with the closing words (Apastamba Grihya Sutra 2.8): along the south, the west and the north, then all round. Put akshata into the pranita water with वरुणाय नमः, set the vessel before you and, holding it with the left hand, sprinkle its water to the directions; pour a little on the ground to the east and sprinkle yourself and your wife. Give a gift to the Brahma (Muddu Shrauti, Mylapore manual).',
      noteKn: 'ಆಜ್ಯಪಾತ್ರೆ ಮುಂತಾದವನ್ನು ಉತ್ತರಕ್ಕಿಟ್ಟು, ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ಸಮಾಪ್ತಿಯ ಪದಗಳಿಂದ (ಆಪಸ್ತಂಬ ಗೃಹ್ಯಸೂತ್ರ ೨.೮) ಅಗ್ನಿಯ ಸುತ್ತ — ದಕ್ಷಿಣ, ಪಶ್ಚಿಮ, ಉತ್ತರ, ನಂತರ ಸುತ್ತಲೂ — ನೀರು ಪ್ರೋಕ್ಷಿಸಿ. “ವರುಣಾಯ ನಮಃ” ಎಂದು ಪ್ರಣೀತಾ ಜಲಕ್ಕೆ ಅಕ್ಷತೆ ಹಾಕಿ, ಪಾತ್ರೆಯನ್ನು ಮುಂದೆ ಇಟ್ಟು ಎಡಗೈಯಲ್ಲಿ ಹಿಡಿದು ದಿಕ್ಕುಗಳಿಗೆ ಪ್ರೋಕ್ಷಿಸಿ; ಸ್ವಲ್ಪ ಪೂರ್ವಕ್ಕೆ ನೆಲಕ್ಕೆ ಸುರಿದು ತನಗೂ ಪತ್ನಿಗೂ ಪ್ರೋಕ್ಷಿಸಿ. ಬ್ರಹ್ಮನಿಗೆ ದಾನ ನೀಡಿ (ಮುದ್ದು ಶ್ರೌತಿ, ಮೈಲಾಪುರ ಗ್ರಂಥ).',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'अदितेऽन्वमंस्थाः । अनुमतेऽन्वमंस्थाः ।\nसरस्वतेऽन्वमंस्थाः । देव सवितः प्रासावीः ॥',
          meaning: {
            en: 'O Aditi, you have consented; O Anumati, you have consented; O Sarasvati, you have consented; O god Savitri, you have impelled us. (The closing parishechana, Apastamba Grihya Sutra 2.8.)',
            kn: 'ಓ ಅದಿತಿಯೇ, ನೀನು ಅನುಮತಿಸಿದೆ; ಓ ಅನುಮತಿಯೇ, ನೀನು ಅನುಮತಿಸಿದೆ; ಓ ಸರಸ್ವತಿಯೇ, ನೀನು ಅನುಮತಿಸಿದೆ; ಓ ಸವಿತೃದೇವನೇ, ನೀನು ಪ್ರೇರೇಪಿಸಿದೆ. (ಸಮಾಪ್ತಿಯ ಪರಿಷೇಚನ, ಆಪಸ್ತಂಬ ಗೃಹ್ಯಸೂತ್ರ ೨.೮.)',
          },
        },
        {
          text: 'प्राच्याम् । दक्षिणायाम् । प्रतीच्याम् । उदीच्याम् । ऊर्ध्वायाम् । अधः ॥',
          meaning: {
            en: 'To the east; to the south; to the west; to the north; upwards; downwards. (Said while sprinkling the pranita water, two drops in each direction and the rest downwards to the east; Mylapore manual.)',
            kn: 'ಪೂರ್ವಕ್ಕೆ; ದಕ್ಷಿಣಕ್ಕೆ; ಪಶ್ಚಿಮಕ್ಕೆ; ಉತ್ತರಕ್ಕೆ; ಮೇಲಕ್ಕೆ; ಕೆಳಕ್ಕೆ. (ಪ್ರಣೀತಾ ಜಲವನ್ನು ಪ್ರತಿ ದಿಕ್ಕಿಗೆ ಎರಡು ಹನಿ, ಉಳಿದದ್ದು ಪೂರ್ವದ ಕಡೆ ಕೆಳಗೆ; ಮೈಲಾಪುರ ಗ್ರಂಥ.)',
          },
        },
        {
          text: 'ब्रह्मन् वरं ते ददामि । ब्रह्मणे नमः । सकलाराधनैः स्वर्चितम् ॥',
          meaning: {
            en: 'O Brahma, I give you a gift. Salutation to the Brahma; may he be well worshipped with all the honours. (Giving dakshina to the Brahma; Muddu Shrauti, Mylapore manual.)',
            kn: 'ಓ ಬ್ರಹ್ಮನೇ, ನಿನಗೆ ವರ (ದಾನ) ಕೊಡುತ್ತೇನೆ. ಬ್ರಹ್ಮನಿಗೆ ನಮಸ್ಕಾರ; ಎಲ್ಲ ಉಪಚಾರಗಳಿಂದ ಪೂಜಿತನಾಗಲಿ. (ಬ್ರಹ್ಮನಿಗೆ ದಕ್ಷಿಣೆ ನೀಡುತ್ತ.)',
          },
        },
      ],
    },
    {
      title: 'अग्न्युपस्थानम्',
      titleEn: 'Agni upasthana (praise of the fire)',
      note: 'Put one samidh on the fire with स्वाहा, say अग्नेरुपस्थानं करिष्ये, stand and praise the fire with अग्ने नय… and these prayers; bow and say the abhivadana with your gotra (Muddu Shrauti, Mylapore manual).',
      noteKn: '“ಸ್ವಾಹಾ” ಎಂದು ಒಂದು ಸಮಿಧೆಯನ್ನು ಅಗ್ನಿಗೆ ಇಟ್ಟು, “ಅಗ್ನೇರುಪಸ್ಥಾನಂ ಕರಿಷ್ಯೇ” ಎಂದು ಹೇಳಿ, ನಿಂತು “ಅಗ್ನೇ ನಯ…” ಮತ್ತು ಈ ಪ್ರಾರ್ಥನೆಗಳಿಂದ ಅಗ್ನಿಯನ್ನು ಸ್ತುತಿಸಿ; ನಮಸ್ಕರಿಸಿ ಗೋತ್ರಸಹಿತ ಅಭಿವಾದನ ಮಾಡಿ (ಮುದ್ದು ಶ್ರೌತಿ, ಮೈಲಾಪುರ ಗ್ರಂಥ).',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'अग्ने नय सुपथा राये अस्मान्विश्वानि देव वयुनानि विद्वान् ।\nयुयोध्यस्मज्जुहुराणमेनो भूयिष्ठां ते नम उक्तिं विधेम ॥\nअग्नये नमः ॥',
          meaning: {
            en: 'O Agni, lead us by the good path to prosperity, O god who know all our ways. Keep far from us the sin that leads astray; we offer you our fullest words of homage. (Rigveda 1.189.1; Taittiriya Samhita 1.1.14) Salutation to Agni.',
            kn: 'ಓ ಅಗ್ನಿಯೇ, ನಮ್ಮ ಎಲ್ಲ ನಡೆಗಳನ್ನೂ ಬಲ್ಲ ದೇವನೇ, ಸನ್ಮಾರ್ಗದಿಂದ ನಮ್ಮನ್ನು ಶ್ರೇಯಸ್ಸಿನೆಡೆಗೆ ಕೊಂಡೊಯ್ಯು. ದಾರಿ ತಪ್ಪಿಸುವ ಪಾಪವನ್ನು ನಮ್ಮಿಂದ ದೂರಮಾಡು; ನಿನಗೆ ಅತಿಶಯವಾದ ನಮಸ್ಕಾರವಚನಗಳನ್ನು ಅರ್ಪಿಸುತ್ತೇವೆ. (ಋಗ್ವೇದ ೧.೧೮೯.೧; ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೧.೧.೧೪) ಅಗ್ನಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'मन्त्रहीनं क्रियाहीनं भक्तिहीनं हुताशन ।\nयद्धुतं तु मया देव परिपूर्णं तदस्तु ते ॥',
          meaning: {
            en: 'O Agni, whatever I have offered lacking in mantra, in action or in devotion — O god, may it be complete for you.',
            kn: 'ಓ ಹುತಾಶನನೇ, ಮಂತ್ರ, ಕ್ರಿಯೆ, ಭಕ್ತಿಗಳಲ್ಲಿ ಕೊರತೆಯಿಂದ ನಾನು ಏನನ್ನು ಹೋಮಿಸಿದ್ದೇನೋ, ಓ ದೇವ, ಅದು ನಿನಗೆ ಪರಿಪೂರ್ಣವಾಗಲಿ.',
          },
        },
        {
          text: 'प्रायश्चित्तान्यशेषाणि तपःकर्मात्मकानि वै ।\nयानि तेषामशेषाणां कृष्णानुस्मरणं परम् ॥',
          meaning: {
            en: 'Of all the expiations there are, consisting of austerity and ritual action, the highest is the constant remembrance of Krishna.',
            kn: 'ತಪಸ್ಸು, ಕರ್ಮ ರೂಪವಾದ ಎಲ್ಲ ಪ್ರಾಯಶ್ಚಿತ್ತಗಳಲ್ಲಿಯೂ ಶ್ರೀಕೃಷ್ಣನ ಅನುಸ್ಮರಣೆಯೇ ಶ್ರೇಷ್ಠ.',
          },
        },
        {
          text: 'नमस्ते गार्हपत्याय नमस्ते दक्षिणाग्नये ।\nनम आहवनीयाय महावेद्यै नमो नमः ॥',
          meaning: {
            en: 'Salutations to you as the Garhapatya fire, salutations to you as the Dakshina fire; salutations to the Ahavaniya fire and again and again to the great altar.',
            kn: 'ಗಾರ್ಹಪತ್ಯಾಗ್ನಿಯಾದ ನಿನಗೆ ನಮಸ್ಕಾರ, ದಕ್ಷಿಣಾಗ್ನಿಯಾದ ನಿನಗೆ ನಮಸ್ಕಾರ; ಆಹವನೀಯಾಗ್ನಿಗೆ ನಮಸ್ಕಾರ, ಮಹಾವೇದಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'काण्डद्वयोपपाद्याय कर्मब्रह्मस्वरूपिणे ।\nस्वर्गापवर्गदात्रे च यज्ञेशाय नमो नमः ॥',
          meaning: {
            en: 'Salutations again and again to the Lord of sacrifice, who is taught by both parts of the Veda, whose form is both ritual and Brahman, and who grants heaven and liberation.',
            kn: 'ವೇದದ ಎರಡು ಕಾಂಡಗಳಿಂದಲೂ ಪ್ರತಿಪಾದಿತನಾದ, ಕರ್ಮ–ಬ್ರಹ್ಮಸ್ವರೂಪನಾದ, ಸ್ವರ್ಗ–ಮೋಕ್ಷಗಳನ್ನು ಕೊಡುವ ಯಜ್ಞೇಶನಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.',
          },
        },
        {
          text: 'यज्ञेशाच्युत गोविन्द माधवानन्त केशव ।\nकृष्ण विष्णो हृषीकेश वासुदेव नमोऽस्तु ते ॥',
          meaning: {
            en: 'O Lord of sacrifice, Achyuta, Govinda, Madhava, Ananta, Keshava, Krishna, Vishnu, Hrishikesha, Vasudeva — salutations to you.',
            kn: 'ಓ ಯಜ್ಞೇಶನೇ, ಅಚ್ಯುತ, ಗೋವಿಂದ, ಮಾಧವ, ಅನಂತ, ಕೇಶವ, ಕೃಷ್ಣ, ವಿಷ್ಣು, ಹೃಷೀಕೇಶ, ವಾಸುದೇವ — ನಿನಗೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'रक्षाधारणम्',
      titleEn: 'Wearing the raksha (sacred ash)',
      note: 'Take a little ash (bhasma) from the north-eastern side of the fire, apply it on the forehead with this mantra, and give it to the family (Mylapore manual; the Madhva manual uses the same verse).',
      noteKn: 'ಅಗ್ನಿಯ ಈಶಾನ್ಯ ಭಾಗದಿಂದ ಸ್ವಲ್ಪ ಭಸ್ಮ ತೆಗೆದು ಈ ಮಂತ್ರದಿಂದ ಹಣೆಗೆ ಧರಿಸಿ, ಮನೆಯವರಿಗೂ ಕೊಡಿ (ಮೈಲಾಪುರ ಗ್ರಂಥ; ಮಾಧ್ವ ಗ್ರಂಥದಲ್ಲೂ ಇದೇ ಮಂತ್ರ).',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'बृहत्साम क्षत्रभृद्वृद्धवृष्णियं त्रिष्टुभौजः शुभितमुग्रवीरम् ।\nइन्द्र स्तोमेन पञ्चदशेन मध्यमिदं वातेन सगरेण रक्ष ॥',
          meaning: {
            en: 'The Brihat Saman, bearer of rule, of great virile strength, with the might of the Trishtubh, splendid, with mighty heroes: O Indra, with the fifteenfold stoma and the wind Sagara, protect this middle (the body). (Said applying the raksha ash; Ashvalayana Shrauta Sutra 4.12.2; M1 and the Mylapore manual.)',
            kn: 'ಕ್ಷತ್ರವನ್ನು ಧರಿಸುವ, ಮಹಾಬಲವುಳ್ಳ ಬೃಹತ್ಸಾಮ, ತ್ರಿಷ್ಟುಪ್ಪಿನ ತೇಜಸ್ಸು, ಶೋಭಾಯಮಾನ, ಉಗ್ರವೀರರುಳ್ಳದ್ದು: ಓ ಇಂದ್ರನೇ, ಪಂಚದಶ ಸ್ತೋಮದಿಂದಲೂ ಸಗರ ಎಂಬ ವಾಯುವಿನಿಂದಲೂ ಈ ಮಧ್ಯವನ್ನು (ದೇಹವನ್ನು) ರಕ್ಷಿಸು. (ರಕ್ಷೆಯ ಭಸ್ಮ ಧರಿಸುವಾಗ; ಆಶ್ವಲಾಯನ ಶ್ರೌತಸೂತ್ರ ೪.೧೨.೨; ಅಗ್ನಿಮುಖ ಪ್ರಯೋಗ, ಮೈಲಾಪುರ ಗ್ರಂಥ.)',
          },
        },
      ],
    },
    {
      title: 'समर्पणम्',
      titleEn: 'Samarpana',
      note: 'Take akshata and water in the hand, recite these and let the water fall to the ground, naming the homa in place of अमुक (Mylapore manual). If the fire is not kept, take it back into your heart (अग्निम् आत्मनि उद्वासयामि). Give dakshina to the priests, distribute the prasada and the kalasha water, and if possible feed brahmins.',
      noteKn: 'ಅಕ್ಷತೆ–ನೀರು ಕೈಯಲ್ಲಿ ಹಿಡಿದು ಇವುಗಳನ್ನು ಹೇಳಿ, “ಅಮುಕ”ದ ಸ್ಥಳದಲ್ಲಿ ಹೋಮದ ಹೆಸರು ಹೇಳಿ ನೀರನ್ನು ನೆಲಕ್ಕೆ ಬಿಡಿ (ಮೈಲಾಪುರ ಗ್ರಂಥ). ಅಗ್ನಿಯನ್ನು ಇಟ್ಟುಕೊಳ್ಳದಿದ್ದರೆ “ಅಗ್ನಿಮ್ ಆತ್ಮನಿ ಉದ್ವಾಸಯಾಮಿ” ಎಂದು ಹೃದಯಕ್ಕೆ ತೆಗೆದುಕೊಳ್ಳಿ. ಪುರೋಹಿತರಿಗೆ ದಕ್ಷಿಣೆ, ಪ್ರಸಾದ ಮತ್ತು ಕಲಶಜಲ ವಿತರಣೆ; ಸಾಧ್ಯವಾದರೆ ಬ್ರಾಹ್ಮಣ ಭೋಜನ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'यस्य स्मृत्या च नामोक्त्या तपोयज्ञक्रियादिषु ।\nन्यूनं सम्पूर्णतां याति सद्यो वन्दे तमच्युतम् ॥',
          meaning: {
            en: 'I bow to Achyuta, by remembering whom and uttering whose name whatever is lacking in austerity, sacrifice and ritual at once becomes complete.',
            kn: 'ಯಾರ ಸ್ಮರಣೆಯಿಂದಲೂ ನಾಮೋಚ್ಚಾರಣೆಯಿಂದಲೂ ತಪಸ್ಸು, ಯಜ್ಞ, ಕ್ರಿಯೆಗಳಲ್ಲಿನ ಕೊರತೆ ಕೂಡಲೇ ಪೂರ್ಣವಾಗುತ್ತದೆಯೋ ಆ ಅಚ್ಯುತನಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'कायेन वाचा मनसेन्द्रियैर्वा\nबुद्ध्यात्मना वा प्रकृतेः स्वभावात् ।\nकरोमि यद्यत्सकलं परस्मै\nनारायणायेति समर्पयामि ॥',
          meaning: {
            en: 'Whatever I do with body, speech, mind or senses, with intellect or self, or by my natural disposition, all of it I offer to the Supreme Narayana.',
            kn: 'ದೇಹದಿಂದ, ಮಾತಿನಿಂದ, ಮನಸ್ಸಿನಿಂದ, ಇಂದ್ರಿಯಗಳಿಂದ, ಬುದ್ಧಿಯಿಂದ, ಆತ್ಮದಿಂದ ಅಥವಾ ಸ್ವಭಾವವಶದಿಂದ ನಾನು ಏನೇನು ಮಾಡುತ್ತೇನೋ ಅದೆಲ್ಲವನ್ನೂ ಪರಮಪುರುಷನಾದ ಶ್ರೀನಾರಾಯಣನಿಗೆ ಸಮರ್ಪಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'मया कृतमिदम् अमुकहोमाख्यं कर्म ।\nॐ तत्सत् ब्रह्मार्पणमस्तु ॥',
          meaning: {
            en: 'This rite called the … homa, done by me — Om tat sat — may it be an offering to Brahman. (Mylapore manual.)',
            kn: 'ನಾನು ಮಾಡಿದ ಈ ಇಂತಹ ಹೋಮವೆಂಬ ಕರ್ಮ — ಓಂ ತತ್ಸತ್ — ಬ್ರಹ್ಮಾರ್ಪಣವಾಗಲಿ. (ಮೈಲಾಪುರ ಗ್ರಂಥ)',
          },
        },
      ],
    },
  ],
};
