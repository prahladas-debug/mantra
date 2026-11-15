/**
 * Homa: the common procedure (purvanga and uttaranga) that every homa in the app refers to:
 * sankalpa, a short kalasha and punyahavachana, agni pratishthapana and agni-mukha, then (after
 * the main offerings of the particular homa) svishtakrit, prayaschitta, purnahuti, vasordhara,
 * agni upasthana, raksha and samarpana. Madhva and Smarta forms as reader-selectable variants.
 * NOT YET PROOFREAD against one printed edition.
 *
 * Sources:
 *  - Madhva (M1): "Agnimukha Prayogah" (Rigvediya agnimukha prayoga, Madhva), ed. Haranahalli
 *    Aravindacharya. archive.org: agnimukha. Sankalpa with yajnapurusha-antaryami Harinipati
 *    Parashurama, six lines and their deities, Svaha/Lakshmi in the kunda, fire from a
 *    shrotriya's house, juṣṭo damūnā / ehy agna avahana, viṣṇuvīryātmaka agni pratishthapana,
 *    Mukhyaprana and Parashurama dhyana in Agni, anvadhana, the sixteen samskaras of Agni by the
 *    vyahritis, the Vaishnava offerings, aghara/ajyabhaga, svishtakrit, prayaschitta with the
 *    vyahritis to Aniruddha, Pradyumna, Sankarshana and Vasudeva, purnahuti with samudrād ūrmiḥ,
 *    marjana, agni upasthana, raksha, the closing prayers and samarpana.
 *  - Madhva (M2): Dr. H. Satyanarayanacharya, "Homa-Havana (vidhi-vidhanagala parichayatmaka
 *    kaipidi)", Sri Raghavendra Darshana Kendra, Sri Raghavendra Swamy Matha, Kengeri,
 *    Bangalore 2012, with the blessing of Sri Vishvesha Tirtha of the Pejavar Matha.
 *    archive.org: 20230827_20230827_0721. Chapter "Agnimukha": sthandila and the six lines,
 *    where to bring the fire from, discarding the kravyada part, the samskaras and vishnu-ahutis
 *    ("viṣṇvāhutivihīnaṃ tu homam āsurasaṃjñakam"), the five kinds of worship around the fire.
 *  - Madhva: Sri Madhvacharya, Tantrasara-sangraha, ed. Oriental Research Institute, Mysore 2003
 *    (with the Gudhartha-sangraha of Srinivasacharya). archive.org:
 *    tantrasarasangraha-of-sri-anandatirtha-bhagavatpadacharya-2003. 2.13-14 (why a homa is
 *    done), 2.18 (Hari, Sri in the kunda, the fire as Vishnu's energy), 2.19-21 (the sixteen
 *    samskaras; offerings and samidhs), 4.35 (Parashurama dhyana), 4.69 (Mukhyaprana dhyana).
 *  - Smarta (Apastamba): Apastamba Grihya Sutra with the commentaries of Haradatta and
 *    Sudarshanacharya (GRETIL, sa_ApastambagRhyasUtra-comm): 1.12 paristarana, 1.19 pavitra and
 *    prokshani silently, 2.3 parishechana (adite 'numanyasva …), 2.5 idhma and aghara silently,
 *    2.6 ajyabhaga, 2.7 the uttaranga offerings and svishtakrit, 2.8 parishechana (anvamaṃsthāḥ).
 *  - Smarta (Apastamba): "Apastamba Purva Prayogam", Srirama Ramanuja Acharya (Simha
 *    Publications / srimatham.com, 2012), Agni-mukham and Uttaranga, pp. 22-29, and Laghu
 *    Punyahavachana, pp. 16-18. archive.org: apastamba_pUrva_prayoga_srImaTham_2012. (A Sri
 *    Vaishnava publication; the Apastamba agnimukha it gives is the grihya procedure common to
 *    Apastambins, and is used here only for that.)
 *  - Ashvalayana Grihya Sutra (GRETIL, Stenzler ed.): 1.3.1-3 (six lines, silent paryukshana,
 *    savitus tvā), 1.10.12 (ayaṃ ta idhma), 1.10.23 (svishtakrit) — the Rigvedi form followed by
 *    the Madhva manual M1 and by Rigvedi Smartas.
 *  - "Sri Mahasudarshana Kalpa", ed. S. R. Narasimha Murthy (Bangalore; archive.org:
 *    mahasudarshanakalpa), homa-vidhi: sankalpa, sva-shakha agnimukha and the anvadhana list
 *    (a Karnataka witness for the order of the offerings and for the samsrava to the Vishvedevas).
 *  - Vedic mantras checked against the Rigveda (GRETIL, Aufrecht) and the Taittiriya Samhita,
 *    Brahmana and Aranyaka (vishvAsa/vedAH_yajuH on GitHub): RV 4.58 (samudrād ūrmiḥ, catvāri
 *    śṛṅgā), 5.4.5, 1.76.2, 5.4.9-10, 1.22.16-17, 10.2.5, 5.2.9, 10.17.10, 1.23.22, 1.189.1,
 *    5.24.1-4, 1.147.2, 1.114.8, 1.25.19; TS 1.8.14 (prajāpate na tvat), 4.6.5 (sapta te agne);
 *    TB 3.7.11 (anājñātam …), 3.8.10 (pūrṇāhutim uttamām); TA 3.12 (candramā manaso jātaḥ).
 *  - Gita 3.10 as in the app's Bhagavad Gita; prayers shared with the app's Nitya Puja.
 * Not included (said so in contentNote): the Madhva smriti-dhyana of Agni (saptahastaś
 * catuḥśṛṅgaḥ …), the Svaha / Bharati / Lakshmi dhyana in the kunda, the full anvadhana list,
 * the purna-patra formula and the brihat sama raksha verse (each found in only one manual), the
 * prayaschitta verses ayāś cāgne and yad vo devā (not found in the samhitas checked), the
 * Ashvalayana agni-alankarana names of the Apastamba manual, and the long punyahavachana.
 */
import type { Mantra } from '../types';

export const homaPurvanga: Mantra = {
  id: 'homa-purvanga',
  title: 'होमविधिः — पूर्वाङ्गम् उत्तराङ्गं च',
  titleEn: 'Homa: Common Procedure (Purvanga and Uttaranga)',
  category: 'homa',
  order: 1,
  deity: 'Agni; the Lord within Agni (Madhva: Harinipati Parashurama within Mukhyaprana)',
  source: 'Madhva: Tantrasara-sangraha practice (Haranahalli Aravindacharya, Agnimukha Prayoga; H. Satyanarayanacharya, Homa-Havana). Smarta: Apastamba and Ashvalayana Grihya Sutras and Apastamba prayoga manuals',
  summary: 'The steps every homa shares, in order: sankalpa, a short kalasha and punyahavachana, preparing the sthandila, installing and invoking the fire, the agni-mukha (paristarana, paryukshana, ghee, fuel, aghara and ajyabhaga), then, after the main offerings of the homa you are doing, the uttaranga: svishtakrit, prayaschitta, purnahuti, vasordhara, agni upasthana, raksha and samarpana. Choose Madhva or Smarta at the top. Each homa text in the app sends you here for these steps.',
  summaryKn: 'ಎಲ್ಲ ಹೋಮಗಳಿಗೂ ಸಮಾನವಾದ ಹಂತಗಳು ಕ್ರಮವಾಗಿ: ಸಂಕಲ್ಪ, ಸಂಕ್ಷಿಪ್ತ ಕಲಶ–ಪುಣ್ಯಾಹವಾಚನ, ಸ್ಥಂಡಿಲ ಸಂಸ್ಕಾರ, ಅಗ್ನಿಪ್ರತಿಷ್ಠೆ–ಧ್ಯಾನ, ಅಗ್ನಿಮುಖ (ಪರಿಸ್ತರಣ, ಪರ್ಯುಕ್ಷಣ, ಆಜ್ಯಸಂಸ್ಕಾರ, ಇಧ್ಮ, ಆಘಾರ, ಆಜ್ಯಭಾಗ); ನೀವು ಮಾಡುವ ಹೋಮದ ಪ್ರಧಾನ ಆಹುತಿಗಳ ನಂತರ ಉತ್ತರಾಂಗ: ಸ್ವಿಷ್ಟಕೃತ್, ಪ್ರಾಯಶ್ಚಿತ್ತ, ಪೂರ್ಣಾಹುತಿ, ವಸೋರ್ಧಾರಾ, ಅಗ್ನ್ಯುಪಸ್ಥಾನ, ರಕ್ಷಾಧಾರಣ, ಸಮರ್ಪಣೆ. ಮೇಲ್ಭಾಗದಲ್ಲಿ ಮಾಧ್ವ ಅಥವಾ ಸ್ಮಾರ್ತ ಆರಿಸಿ. ಆ್ಯಪ್‌ನ ಪ್ರತಿಯೊಂದು ಹೋಮವೂ ಈ ಹಂತಗಳಿಗಾಗಿ ಇಲ್ಲಿಗೆ ಕಳುಹಿಸುತ್ತದೆ.',
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
  completeness: 'partial',
  contentNote: 'A guide for understanding and following along; homas are traditionally done with a trained priest. The Madhva form follows the Rigvedi (Ashvalayana) agnimukha of the Madhva manuals; the Smarta form follows the Apastamba (Yajurvedi) grihya order, and Rigvedi Smartas follow the Ashvalayana steps shown for Madhvas without the Madhva anusandhana. Left out because only one manual gave them or the wording could not be confirmed: the Madhva smriti-dhyana of Agni, the dhyana of Svaha and Lakshmi in the kunda, the full anvadhana list, the purna-patra formula, the prayaschitta verses अयाश्चाग्ने and यद्वो देवा, the brihat sama raksha verse, the names used to decorate the fire in Apastamba manuals, and the long punyahavachana. Follow your family manual and purohita where they differ.',
  sections: [
    {
      title: 'होमारम्भः',
      titleEn: 'Before you begin',
      note: 'A homa is an offering into a consecrated fire. Keep ready: a sthandila (a square platform of sand or brick about four fingers high, or a copper or brick kunda; never iron), dry fuel sticks (samidh) of a span (Madhvas: ashvattha, palasha and other milky trees; amrita, i.e. guduchi, for health), a bundle of darbha, ghee (ajya) in a vessel, two ladles (sruk and sruva), a prokshani vessel of water, a pranita vessel, akshata, flowers, gandha, a kalasha of water, the materials of the particular homa (given in its own text), camphor, betel and dakshina. The yajamana sits facing east, with his wife on his right in household rites; a brahma (a learned person, or a kurcha of darbha on a seat) sits to the south of the fire; the acharya or purohita guides the rite. Do bath, sandhyavandane and your daily puja first. The steps marked Madhva or Smarta change with the choice at the top; follow your family manual where it differs.',
      noteKn: 'ಹೋಮವೆಂದರೆ ಸಂಸ್ಕರಿಸಿದ ಅಗ್ನಿಯಲ್ಲಿ ನೀಡುವ ಆಹುತಿ. ಸಿದ್ಧಪಡಿಸಿಕೊಳ್ಳಿ: ಸ್ಥಂಡಿಲ (ಮರಳು ಅಥವಾ ಇಟ್ಟಿಗೆಯಿಂದ ನಾಲ್ಕು ಅಂಗುಲ ಎತ್ತರದ ಚೌಕಾಕಾರದ ವೇದಿಕೆ, ಅಥವಾ ತಾಮ್ರ/ಇಟ್ಟಿಗೆಯ ಕುಂಡ; ಕಬ್ಬಿಣ ಬೇಡ), ಗೇಣುದ್ದದ ಒಣ ಸಮಿಧೆಗಳು (ಮಾಧ್ವರಲ್ಲಿ ಅಶ್ವತ್ಥ, ಪಲಾಶ ಮುಂತಾದ ಕ್ಷೀರವೃಕ್ಷಗಳು; ಆರೋಗ್ಯಕ್ಕಾಗಿ ಅಮೃತಬಳ್ಳಿ), ದರ್ಭೆಯ ಕಟ್ಟು, ಪಾತ್ರೆಯಲ್ಲಿ ತುಪ್ಪ (ಆಜ್ಯ), ಸ್ರುಕ್–ಸ್ರುವಗಳು, ಪ್ರೋಕ್ಷಣೀ ಪಾತ್ರೆ, ಪ್ರಣೀತಾ ಪಾತ್ರೆ, ಅಕ್ಷತೆ, ಹೂವು, ಗಂಧ, ನೀರಿನ ಕಲಶ, ಆ ಹೋಮಕ್ಕೆ ಬೇಕಾದ ದ್ರವ್ಯಗಳು (ಅದರ ಪಠ್ಯದಲ್ಲಿ ಕೊಡಲಾಗಿದೆ), ಕರ್ಪೂರ, ವೀಳ್ಯ, ದಕ್ಷಿಣೆ. ಯಜಮಾನನು ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ಕುಳಿತುಕೊಳ್ಳುತ್ತಾನೆ, ಗೃಹ್ಯಕರ್ಮಗಳಲ್ಲಿ ಪತ್ನಿ ಬಲಭಾಗದಲ್ಲಿ; ಅಗ್ನಿಯ ದಕ್ಷಿಣಕ್ಕೆ ಬ್ರಹ್ಮ (ವಿದ್ವಾಂಸರು, ಅಥವಾ ಆಸನದ ಮೇಲೆ ದರ್ಭೆಯ ಕೂರ್ಚ); ಆಚಾರ್ಯರು ಅಥವಾ ಪುರೋಹಿತರು ಕರ್ಮವನ್ನು ನಡೆಸಿಕೊಡುತ್ತಾರೆ. ಮೊದಲು ಸ್ನಾನ, ಸಂಧ್ಯಾವಂದನೆ, ನಿತ್ಯಪೂಜೆ ಮುಗಿಸಿ. ಮಾಧ್ವ ಅಥವಾ ಸ್ಮಾರ್ತ ಎಂದು ಗುರುತಿಸಿದ ಹಂತಗಳು ಮೇಲಿನ ಆಯ್ಕೆಗೆ ತಕ್ಕಂತೆ ಬದಲಾಗುತ್ತವೆ; ವ್ಯತ್ಯಾಸವಿರುವಲ್ಲಿ ನಿಮ್ಮ ಮನೆತನದ ಪದ್ಧತಿಯನ್ನು ಅನುಸರಿಸಿ.',
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
      title: 'सङ्कल्पः',
      titleEn: 'Achamana, pranayama and sankalpa',
      note: 'Do achamana and pranayama as in Sandhyavandane, and say the deshakala (place and time) as in the Daily Puja sankalpa, replacing each अमुक with today’s details. Then, holding akshata and water, make the sankalpa of the homa: say its name in place of अमुक (for example गणहोमाख्यं, पवमानहोमाख्यं). Let the water fall into the plate.',
      noteKn: 'ಸಂಧ್ಯಾವಂದನೆಯಲ್ಲಿರುವಂತೆ ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ನಿತ್ಯಪೂಜೆಯ ಸಂಕಲ್ಪದಲ್ಲಿರುವಂತೆ ದೇಶಕಾಲಗಳನ್ನು ಹೇಳಿ; “ಅಮುಕ” ಬದಲು ಇಂದಿನ ವಿವರ ಹೇಳಿ. ನಂತರ ಅಕ್ಷತೆ–ನೀರು ಹಿಡಿದು ಹೋಮದ ಸಂಕಲ್ಪ ಮಾಡಿ: “ಅಮುಕ” ಬದಲು ಹೋಮದ ಹೆಸರು ಹೇಳಿ (ಉದಾ. ಗಣಹೋಮಾಖ್ಯಂ, ಪವಮಾನಹೋಮಾಖ್ಯಂ). ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          text: 'आचम्य । प्राणानायम्य । देशकालौ सङ्कीर्त्य ॥',
          meaning: {
            en: 'Having sipped water (achamana), controlled the breath (pranayama) and stated the place and time…',
            kn: 'ಆಚಮನ ಮಾಡಿ, ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ದೇಶಕಾಲಗಳನ್ನು ಹೇಳಿ…',
          },
        },
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
      titleEn: 'Ganapati smarana, achamana and sankalpa',
      note: 'Remember Ganapati with शुक्लाम्बरधरं…, do achamana and pranayama as in Sandhyavandane, and say the deshakala (place and time) as in the Daily Puja sankalpa. Then, holding akshata and water, make the sankalpa of the homa: name the homa and its purpose in place of अमुक. Let the water fall into the plate. Many families first do a short Ganapati puja and punyahavachana (next section).',
      noteKn: '“ಶುಕ್ಲಾಂಬರಧರಂ…” ಎಂದು ಗಣಪತಿಯನ್ನು ಸ್ಮರಿಸಿ, ಸಂಧ್ಯಾವಂದನೆಯಲ್ಲಿರುವಂತೆ ಆಚಮನ–ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ನಿತ್ಯಪೂಜೆಯ ಸಂಕಲ್ಪದಲ್ಲಿರುವಂತೆ ದೇಶಕಾಲಗಳನ್ನು ಹೇಳಿ. ನಂತರ ಅಕ್ಷತೆ–ನೀರು ಹಿಡಿದು ಹೋಮದ ಸಂಕಲ್ಪ ಮಾಡಿ: “ಅಮುಕ” ಬದಲು ಹೋಮದ ಹೆಸರು ಮತ್ತು ಉದ್ದೇಶ ಹೇಳಿ. ನೀರನ್ನು ತಟ್ಟೆಗೆ ಬಿಡಿ. ಅನೇಕ ಮನೆತನಗಳಲ್ಲಿ ಮೊದಲು ಸಂಕ್ಷಿಪ್ತ ಗಣಪತಿಪೂಜೆ ಮತ್ತು ಪುಣ್ಯಾಹವಾಚನ (ಮುಂದಿನ ಭಾಗ) ಮಾಡುತ್ತಾರೆ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'शुक्लाम्बरधरं विष्णुं शशिवर्णं चतुर्भुजम् ।\nप्रसन्नवदनं ध्यायेत्सर्वविघ्नोपशान्तये ॥',
          meaning: {
            en: 'To remove all obstacles, one should meditate on the all-pervading one clad in white, moon-coloured, four-armed, with a gracious face.',
            kn: 'ಎಲ್ಲಾ ವಿಘ್ನಗಳ ಶಾಂತಿಗಾಗಿ, ಬಿಳಿಯ ವಸ್ತ್ರ ಧರಿಸಿದ, ಚಂದ್ರನಂತೆ ಬಿಳುಪಾದ, ನಾಲ್ಕು ಭುಜಗಳುಳ್ಳ, ಪ್ರಸನ್ನಮುಖನಾದ ಸರ್ವವ್ಯಾಪಿಯನ್ನು ಧ್ಯಾನಿಸಬೇಕು.',
          },
        },
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
      note: 'To the north-east of the fire, on a little rangoli design or a heap of rice, set a kalasha of water with mango leaves and a coconut. Invite Varuna into it with इमं मे वरुण…, offer gandha, akshata and flowers, and keep it touched while the main mantras of the homa are recited, so that its water is charged; at the end the family is sprinkled with it (Homa-Havana). For the short punyahavachana the yajamana asks the brahmins (or the purohita) three times and they answer: punyaham, svasti and riddhi. Sprinkle the place, the materials and yourself with the water, saying अपवित्रः पवित्रो वा…. Families who do the full punyahavachana (with the Vedic verses for each call and the panchagavya) follow their manual.',
      noteKn: 'ಅಗ್ನಿಯ ಈಶಾನ್ಯದಲ್ಲಿ ಚಿಕ್ಕ ರಂಗೋಲಿ ಅಥವಾ ಅಕ್ಕಿಯ ರಾಶಿಯ ಮೇಲೆ ಮಾವಿನೆಲೆ–ತೆಂಗಿನಕಾಯಿ ಸಹಿತ ನೀರಿನ ಕಲಶವನ್ನಿಡಿ. “ಇಮಂ ಮೇ ವರುಣ…” ಎಂದು ಅದರಲ್ಲಿ ವರುಣನನ್ನು ಆವಾಹಿಸಿ, ಗಂಧ–ಅಕ್ಷತೆ–ಹೂವು ಅರ್ಪಿಸಿ; ಹೋಮದ ಪ್ರಧಾನ ಮಂತ್ರಗಳನ್ನು ಹೇಳುವಾಗ ಅದನ್ನು ಮುಟ್ಟಿಕೊಂಡಿರಿ, ಹೀಗೆ ಅದರ ಜಲ ಅಭಿಮಂತ್ರಿತವಾಗುತ್ತದೆ; ಕೊನೆಯಲ್ಲಿ ಆ ಜಲದಿಂದ ಮನೆಯವರಿಗೆ ಪ್ರೋಕ್ಷಣೆ (ಹೋಮ–ಹವನ). ಸಂಕ್ಷಿಪ್ತ ಪುಣ್ಯಾಹವಾಚನದಲ್ಲಿ ಯಜಮಾನನು ಬ್ರಾಹ್ಮಣರನ್ನು (ಅಥವಾ ಪುರೋಹಿತರನ್ನು) ಮೂರು ಬಾರಿ ಕೇಳುತ್ತಾನೆ, ಅವರು “ಪುಣ್ಯಾಹ”, “ಸ್ವಸ್ತಿ”, “ಋದ್ಧಿ” ಎಂದು ಉತ್ತರಿಸುತ್ತಾರೆ. “ಅಪವಿತ್ರಃ ಪವಿತ್ರೋ ವಾ…” ಎಂದು ಸ್ಥಳ, ದ್ರವ್ಯಗಳು ಮತ್ತು ನಿಮ್ಮ ಮೇಲೆ ಆ ಜಲವನ್ನು ಪ್ರೋಕ್ಷಿಸಿ. ಪೂರ್ಣ ಪುಣ್ಯಾಹವಾಚನ (ಪ್ರತಿ ಕರೆಗೂ ವೈದಿಕ ಮಂತ್ರಗಳು, ಪಂಚಗವ್ಯ) ಮಾಡುವವರು ತಮ್ಮ ಪದ್ಧತಿಯಂತೆ ಮಾಡಲಿ.',
      verses: [
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
      note: 'Smear the sthandila (or the floor of the kunda), sprinkle it with rice flour or decorate it with rangoli, and smooth it with the hand. With the handle of the sruva draw three lines from west to east and three from south to north across them (Apastamba Grihya Sutra, as the commentators explain the lekhana). Take a pinch of earth from the middle with thumb and ring finger and throw it to the south-west; sprinkle the sthandila with water.',
      noteKn: 'ಸ್ಥಂಡಿಲವನ್ನು (ಅಥವಾ ಕುಂಡದ ತಳವನ್ನು) ಸಾರಿಸಿ, ಅಕ್ಕಿಹಿಟ್ಟು ಉದುರಿಸಿ ಅಥವಾ ರಂಗೋಲಿ ಹಾಕಿ, ಕೈಯಿಂದ ಸಮಗೊಳಿಸಿ. ಸ್ರುವದ ಹಿಡಿಯಿಂದ ಪಶ್ಚಿಮದಿಂದ ಪೂರ್ವಕ್ಕೆ ಮೂರು ರೇಖೆಗಳನ್ನೂ, ಅವುಗಳನ್ನು ದಾಟುವಂತೆ ದಕ್ಷಿಣದಿಂದ ಉತ್ತರಕ್ಕೆ ಮೂರು ರೇಖೆಗಳನ್ನೂ ಬರೆಯಿರಿ (ಆಪಸ್ತಂಬ ಗೃಹ್ಯಸೂತ್ರದ ವ್ಯಾಖ್ಯಾನಕಾರರು ವಿವರಿಸಿದಂತೆ). ನಡುವಿನಿಂದ ಹೆಬ್ಬೆರಳು–ಉಂಗುರದ ಬೆರಳಿನಿಂದ ಚಿಟಿಕೆ ಮಣ್ಣು ತೆಗೆದು ನೈರುತ್ಯಕ್ಕೆ ಎಸೆಯಿರಿ; ಸ್ಥಂಡಿಲಕ್ಕೆ ನೀರು ಪ್ರೋಕ್ಷಿಸಿ.',
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
      note: 'The best fire is churned from arani sticks; next, fire brought from the house of a shrotriya; otherwise fire from your own hearth; never from a cremation ground, a kitchen where meat is cooked, or a smoky fire. Suvasinis bring burning smokeless coals in a clay or copper dish covered with another, and set it in the south-east of the sthandila. Remember the Lord within yourself and Lakshmi in the kunda; with a darbha lit from the fire and the Sudarshana astra mantra, throw a little of the fire (its kravyada part, the flesh-eating fire of the pyre) to the south-west and wash your hands. Invite Agni with the two Rigvedic verses, then lay the coals on the six lines with the vyahritis, naming the fire according to the rite (Homa-Havana: Varada for shanti, Balavardhana for paushtika, Vitapa for prayaschitta). Sprinkle akshata-water into the empty dish, add fuel and tulasi wood, and blow the fire alight with a bamboo tube.',
      noteKn: 'ಅರಣಿಮಥನದಿಂದ ಹುಟ್ಟಿದ ಅಗ್ನಿ ಅತ್ಯುತ್ತಮ; ಶ್ರೋತ್ರಿಯರ ಮನೆಯಿಂದ ತಂದ ಅಗ್ನಿ ಉತ್ತಮ; ಇಲ್ಲವಾದರೆ ತನ್ನ ಮನೆಯ ಅಗ್ನಿ; ಸ್ಮಶಾನ, ಮಾಂಸ ಬೇಯಿಸುವ ಒಲೆ, ಹೊಗೆಯುಳ್ಳ ಅಗ್ನಿ ನಿಷಿದ್ಧ. ಸುವಾಸಿನಿಯರು ಮಣ್ಣಿನ ಅಥವಾ ತಾಮ್ರದ ತಟ್ಟೆಯಲ್ಲಿ ಹೊಗೆಯಿಲ್ಲದ ಕೆಂಡವನ್ನು ಇನ್ನೊಂದು ತಟ್ಟೆಯಿಂದ ಮುಚ್ಚಿ ತಂದು ಸ್ಥಂಡಿಲದ ಆಗ್ನೇಯದಲ್ಲಿ ಇಡುತ್ತಾರೆ. ತನ್ನೊಳಗೆ ಶ್ರೀಹರಿಯನ್ನೂ ಕುಂಡದಲ್ಲಿ ಲಕ್ಷ್ಮಿಯನ್ನೂ ಸ್ಮರಿಸಿ; ಅಗ್ನಿಯಿಂದ ಹಚ್ಚಿದ ದರ್ಭೆಯಿಂದ ಸುದರ್ಶನಾಸ್ತ್ರಮಂತ್ರದೊಡನೆ ಅಗ್ನಿಯ ಸ್ವಲ್ಪ ಭಾಗವನ್ನು (ಚಿತೆಯ ಮಾಂಸಭಕ್ಷಕ ಅಗ್ನಿಯಾದ ಕ್ರವ್ಯಾದಾಂಶ) ನೈರುತ್ಯಕ್ಕೆ ಎಸೆದು ಕೈ ತೊಳೆಯಿರಿ. ಎರಡು ಋಗ್ವೇದ ಮಂತ್ರಗಳಿಂದ ಅಗ್ನಿಯನ್ನು ಆವಾಹಿಸಿ, ವ್ಯಾಹೃತಿಗಳೊಡನೆ ಕೆಂಡವನ್ನು ಆರು ರೇಖೆಗಳ ಮೇಲೆ ಇಟ್ಟು, ಕರ್ಮಕ್ಕೆ ತಕ್ಕ ಹೆಸರಿನಿಂದ ಅಗ್ನಿಯನ್ನು ಕರೆಯಿರಿ (ಹೋಮ–ಹವನ: ಶಾಂತಿಕದಲ್ಲಿ ವರದ, ಪೌಷ್ಟಿಕದಲ್ಲಿ ಬಲವರ್ಧನ, ಪ್ರಾಯಶ್ಚಿತ್ತದಲ್ಲಿ ವಿಟಪ). ಖಾಲಿ ತಟ್ಟೆಗೆ ಅಕ್ಷತೆ–ನೀರು ಹಾಕಿ, ಸಮಿಧೆ ಮತ್ತು ತುಳಸೀಕಾಷ್ಠವನ್ನಿಟ್ಟು, ಬಿದಿರಿನ ಕೊಳವೆಯಿಂದ ಊದಿ ಅಗ್ನಿಯನ್ನು ಜ್ವಲಿಸಿ.',
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
      note: 'Place a few twigs on the sthandila. Bring the fire (fire from a shrotriya’s house or your own hearth, or kindle camphor in a copper dish), circle it round the sthandila three times and set it on the twigs, reciting the verse of the Purusha Sukta on the birth of Agni from the Lord’s mouth and the installation formula with the name of the fire proper to the rite. Sprinkle water and akshata on the dish that brought the fire, and feed the fire with small twigs.',
      noteKn: 'ಸ್ಥಂಡಿಲದ ಮೇಲೆ ಕೆಲವು ಚಿಕ್ಕ ಕಡ್ಡಿಗಳನ್ನಿಡಿ. ಅಗ್ನಿಯನ್ನು (ಶ್ರೋತ್ರಿಯರ ಮನೆಯ ಅಥವಾ ತನ್ನ ಮನೆಯ ಅಗ್ನಿ, ಅಥವಾ ತಾಮ್ರದ ತಟ್ಟೆಯಲ್ಲಿ ಹಚ್ಚಿದ ಕರ್ಪೂರ) ತಂದು ಸ್ಥಂಡಿಲದ ಸುತ್ತ ಮೂರು ಬಾರಿ ಸುತ್ತಿಸಿ, ಭಗವಂತನ ಮುಖದಿಂದ ಅಗ್ನಿಯ ಜನನವನ್ನು ಹೇಳುವ ಪುರುಷಸೂಕ್ತದ ಮಂತ್ರ ಮತ್ತು ಕರ್ಮಕ್ಕೆ ತಕ್ಕ ಅಗ್ನಿಯ ಹೆಸರಿನೊಡನೆ ಪ್ರತಿಷ್ಠಾಪನವಾಕ್ಯವನ್ನು ಹೇಳುತ್ತಾ ಕಡ್ಡಿಗಳ ಮೇಲಿಡಿ. ಅಗ್ನಿ ತಂದ ತಟ್ಟೆಗೆ ನೀರು–ಅಕ್ಷತೆ ಪ್ರೋಕ್ಷಿಸಿ, ಚಿಕ್ಕ ಕಡ್ಡಿಗಳಿಂದ ಅಗ್ನಿಯನ್ನು ಬೆಳೆಸಿ.',
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
          text: 'ॐ भूर्भुवः सुवः अमुकनामानम् अग्निं प्रतिष्ठापयामि ॥',
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
      note: 'In the fire meditate on Mukhyaprana (Vayu) seated in the lap of Achyuta, and within him on Harinipati Parashurama; then pray to Agni, facing west towards you, to be gracious. Then do the anvadhana: say the deshakala again and the sankalpa अस्मिन्… होमकर्मणि देवतापरिग्रहार्थम् अन्वाधानं करिष्ये, name in order the deities who will receive offerings in this homa (Agni for the samskaras; Narayana, Vasudeva, Mahapurusha and Vishnu for the Vaishnava offerings; Jatavedas with the idhma; Prajapati with the two aghara; Agni and Soma, the eyes; the deities of the pradhana homa with their count and material; Svishtakrit; Rudra; the prayaschitta deities; the Vishvedevas with the samsrava), and place two samidhs with the vyahriti offering below.',
      noteKn: 'ಅಗ್ನಿಯಲ್ಲಿ ಅಚ್ಯುತನ ಅಂಕದಲ್ಲಿ ಕುಳಿತ ಮುಖ್ಯಪ್ರಾಣರನ್ನು (ವಾಯುದೇವರನ್ನು), ಅವರೊಳಗೆ ಹರಿಣೀಪತಿ ಪರಶುರಾಮನನ್ನು ಧ್ಯಾನಿಸಿ; ನಿಮ್ಮೆಡೆಗೆ ಪಶ್ಚಿಮಾಭಿಮುಖನಾದ ಅಗ್ನಿಯನ್ನು ಪ್ರಸನ್ನನಾಗೆಂದು ಪ್ರಾರ್ಥಿಸಿ. ನಂತರ ಅನ್ವಾಧಾನ: ಮತ್ತೆ ದೇಶಕಾಲ ಹೇಳಿ “ಅಸ್ಮಿನ್… ಹೋಮಕರ್ಮಣಿ ದೇವತಾಪರಿಗ್ರಹಾರ್ಥಮ್ ಅನ್ವಾಧಾನಂ ಕರಿಷ್ಯೇ” ಎಂದು ಸಂಕಲ್ಪಿಸಿ, ಈ ಹೋಮದಲ್ಲಿ ಆಹುತಿ ಪಡೆಯುವ ದೇವತೆಗಳನ್ನು ಕ್ರಮವಾಗಿ ಹೆಸರಿಸಿ (ಸಂಸ್ಕಾರಗಳಿಗೆ ಅಗ್ನಿ; ವೈಷ್ಣವ ಆಹುತಿಗಳಿಗೆ ನಾರಾಯಣ, ವಾಸುದೇವ, ಮಹಾಪುರುಷ, ವಿಷ್ಣು; ಇಧ್ಮದಿಂದ ಜಾತವೇದ; ಎರಡು ಆಘಾರಗಳಿಂದ ಪ್ರಜಾಪತಿ; ಚಕ್ಷುಸ್ಸುಗಳಾದ ಅಗ್ನಿ–ಸೋಮರು; ಪ್ರಧಾನಹೋಮದ ದೇವತೆಗಳು ಅವುಗಳ ಸಂಖ್ಯೆ, ದ್ರವ್ಯದೊಡನೆ; ಸ್ವಿಷ್ಟಕೃತ್; ರುದ್ರ; ಪ್ರಾಯಶ್ಚಿತ್ತ ದೇವತೆಗಳು; ಸಂಸ್ರಾವದಿಂದ ವಿಶ್ವೇದೇವರು), ಕೆಳಗಿನ ವ್ಯಾಹೃತಿ ಆಹುತಿಯೊಡನೆ ಎರಡು ಸಮಿಧೆಗಳನ್ನಿಡಿ.',
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
      note: 'Wipe round the fire three times with a wet hand, starting from the north-east. Spread darbha round the fire: in the east and west with tips to the north, in the south and north with tips to the east (Apastamba Grihya Sutra 1.12-13; the Madhva manual gives four darbhas on each side, the southern laid over the ends of the eastern and western ones). Spread darbha to the south for the Brahma’s seat and to the north for the vessels, and set the vessels there in pairs, mouth downward: the charu pot if charu is cooked, the prokshani, the sruk and sruva, the pranita, the ghee vessel and the bundle of fuel. Purify the prokshani water with two darbha blades (pavitra) and sprinkle all the vessels with it, turned upright. Ask the Brahma to take his seat with this sentence (if no person, place a kurcha of darbha on the seat). Fill the pranita with water strained through the pavitra, add gandha, flowers and akshata, place it north of the fire on darbha and cover it with darbha.',
      noteKn: 'ಈಶಾನ್ಯದಿಂದ ಆರಂಭಿಸಿ ಒದ್ದೆ ಕೈಯಿಂದ ಅಗ್ನಿಯ ಸುತ್ತ ಮೂರು ಬಾರಿ ಒರೆಸಿ (ಪರಿಸಮೂಹನ). ಅಗ್ನಿಯ ಸುತ್ತ ದರ್ಭೆ ಹರಡಿ: ಪೂರ್ವ–ಪಶ್ಚಿಮಗಳಲ್ಲಿ ಉತ್ತರಾಗ್ರವಾಗಿ, ದಕ್ಷಿಣ–ಉತ್ತರಗಳಲ್ಲಿ ಪೂರ್ವಾಗ್ರವಾಗಿ (ಆಪಸ್ತಂಬ ಗೃಹ್ಯಸೂತ್ರ ೧.೧೨–೧೩; ಮಾಧ್ವ ಪದ್ಧತಿಯಲ್ಲಿ ಪ್ರತಿ ದಿಕ್ಕಿಗೆ ನಾಲ್ಕು ದರ್ಭೆಗಳು, ದಕ್ಷಿಣದವು ಪೂರ್ವ–ಪಶ್ಚಿಮ ದರ್ಭೆಗಳ ಬುಡದ ಮೇಲೆ). ದಕ್ಷಿಣಕ್ಕೆ ಬ್ರಹ್ಮಾಸನಕ್ಕಾಗಿ, ಉತ್ತರಕ್ಕೆ ಪಾತ್ರೆಗಳಿಗಾಗಿ ದರ್ಭೆ ಹರಡಿ, ಪಾತ್ರೆಗಳನ್ನು ಜೋಡಿಯಾಗಿ ಬೋರಲಾಗಿ ಇಡಿ: ಚರು ಬೇಯಿಸುವುದಾದರೆ ಚರುಸ್ಥಾಲಿ, ಪ್ರೋಕ್ಷಣೀ, ಸ್ರುಕ್–ಸ್ರುವ, ಪ್ರಣೀತಾ, ಆಜ್ಯಪಾತ್ರೆ, ಇಧ್ಮದ ಕಟ್ಟು. ಎರಡು ದರ್ಭೆಗಳ ಪವಿತ್ರದಿಂದ ಪ್ರೋಕ್ಷಣೀ ಜಲವನ್ನು ಶುದ್ಧಗೊಳಿಸಿ, ಪಾತ್ರೆಗಳನ್ನು ನೆಟ್ಟಗೆ ಮಾಡಿ ಅವುಗಳಿಗೆ ಪ್ರೋಕ್ಷಿಸಿ. ಈ ವಾಕ್ಯದಿಂದ ಬ್ರಹ್ಮನನ್ನು ಆಸನಕ್ಕೆ ಆಹ್ವಾನಿಸಿ (ವ್ಯಕ್ತಿ ಇಲ್ಲದಿದ್ದರೆ ಆಸನದ ಮೇಲೆ ದರ್ಭೆಯ ಕೂರ್ಚ). ಪವಿತ್ರದಿಂದ ಶೋಧಿಸಿದ ನೀರಿನಿಂದ ಪ್ರಣೀತೆಯನ್ನು ತುಂಬಿ, ಗಂಧ–ಹೂವು–ಅಕ್ಷತೆ ಹಾಕಿ, ಅಗ್ನಿಯ ಉತ್ತರಕ್ಕೆ ದರ್ಭೆಯ ಮೇಲಿಟ್ಟು ದರ್ಭೆಯಿಂದ ಮುಚ್ಚಿ.',
      verses: [
        {
          text: 'अस्मिन् कर्मणि ब्रह्माणं त्वामहं वृणे ॥',
          meaning: {
            en: 'In this rite I choose you as the Brahma (the overseer of the sacrifice).',
            kn: 'ಈ ಕರ್ಮದಲ್ಲಿ ನಿಮ್ಮನ್ನು ಬ್ರಹ್ಮರನ್ನಾಗಿ (ಯಜ್ಞದ ಮೇಲ್ವಿಚಾರಕರನ್ನಾಗಿ) ವರಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'पर्युक्षणम् आज्यसंस्कारश्च',
      titleEn: 'Paryukshana and purifying the ghee',
      note: 'Sprinkle water round the fire silently, three times, starting from the north-east (Ashvalayana Grihya Sutra 1.3.1: tushnim paryukshanam). Pour ghee into the ghee vessel with the pavitra in it; draw some coals with ash out to the north beyond the darbha, warm the ghee on them and wave a burning darbha over it; drop two thumb-joint lengths of darbha tips into it; carry the burning darbha round the ghee (and the charu) three times; draw the vessel back across the ground to the north and return the coals to the fire. Then, holding the pavitra with thumbs and ring fingers, lift the ghee towards the east once with the mantra and twice silently; sprinkle the pavitra and drop it into the fire. Place the ghee on the spread darbha west of the fire, heat the sruk and sruva over the fire, wipe them with darbha tips and roots three times each, sprinkle them, and lay them north of the ghee. Pour a little ghee over the charu and set it between the fire and the ghee. Decorate the fire with gandha, flowers and akshata, one pada in each of the eight directions, with विश्वानि नो… and यस्त्वा हृदा….',
      noteKn: 'ಈಶಾನ್ಯದಿಂದ ಆರಂಭಿಸಿ ಅಗ್ನಿಯ ಸುತ್ತ ಮೂರು ಬಾರಿ ಮೌನವಾಗಿ ನೀರು ಪ್ರೋಕ್ಷಿಸಿ (ಆಶ್ವಲಾಯನ ಗೃಹ್ಯಸೂತ್ರ ೧.೩.೧: ತೂಷ್ಣೀಂ ಪರ್ಯುಕ್ಷಣಮ್). ಪವಿತ್ರವಿಟ್ಟ ಆಜ್ಯಪಾತ್ರೆಗೆ ತುಪ್ಪ ಹಾಕಿ; ಕೆಲವು ಕೆಂಡಗಳನ್ನು ಬೂದಿಯೊಡನೆ ಉತ್ತರಕ್ಕೆ ದರ್ಭೆಯ ಹೊರಗೆ ಎಳೆದು ಅವುಗಳ ಮೇಲೆ ತುಪ್ಪವನ್ನು ಕಾಯಿಸಿ, ಉರಿಯುವ ದರ್ಭೆಯನ್ನು ಅದರ ಮೇಲೆ ಆಡಿಸಿ; ಹೆಬ್ಬೆರಳಿನ ಗಿಣ್ಣಿನಷ್ಟು ಉದ್ದದ ಎರಡು ದರ್ಭಾಗ್ರಗಳನ್ನು ಅದರಲ್ಲಿ ಹಾಕಿ; ಉರಿಯುವ ದರ್ಭೆಯನ್ನು ತುಪ್ಪದ (ಮತ್ತು ಚರುವಿನ) ಸುತ್ತ ಮೂರು ಬಾರಿ ಸುತ್ತಿಸಿ; ಪಾತ್ರೆಯನ್ನು ನೆಲದ ಮೇಲೆ ಉತ್ತರಕ್ಕೆ ಎಳೆದು ಕೆಂಡಗಳನ್ನು ಅಗ್ನಿಗೆ ಹಿಂತಿರುಗಿಸಿ. ನಂತರ ಹೆಬ್ಬೆರಳು–ಉಂಗುರದ ಬೆರಳುಗಳಿಂದ ಪವಿತ್ರವನ್ನು ಹಿಡಿದು ಮಂತ್ರದೊಡನೆ ಒಮ್ಮೆ, ಮೌನವಾಗಿ ಎರಡು ಬಾರಿ ತುಪ್ಪವನ್ನು ಪೂರ್ವಕ್ಕೆ ಎತ್ತಿ (ಉತ್ಪವನ); ಪವಿತ್ರವನ್ನು ಪ್ರೋಕ್ಷಿಸಿ ಅಗ್ನಿಗೆ ಹಾಕಿ. ತುಪ್ಪವನ್ನು ಅಗ್ನಿಯ ಪಶ್ಚಿಮದಲ್ಲಿ ಹರಡಿದ ದರ್ಭೆಯ ಮೇಲಿಟ್ಟು, ಸ್ರುಕ್–ಸ್ರುವಗಳನ್ನು ಅಗ್ನಿಯಲ್ಲಿ ಕಾಯಿಸಿ, ದರ್ಭಾಗ್ರ–ಮೂಲಗಳಿಂದ ಮೂರು ಮೂರು ಬಾರಿ ಒರೆಸಿ, ಪ್ರೋಕ್ಷಿಸಿ ತುಪ್ಪದ ಉತ್ತರಕ್ಕಿಡಿ. ಚರುವಿಗೆ ಸ್ವಲ್ಪ ತುಪ್ಪ ಹಾಕಿ ಅಗ್ನಿ–ಆಜ್ಯಗಳ ನಡುವೆ ಇಡಿ. “ವಿಶ್ವಾನಿ ನೋ…”, “ಯಸ್ತ್ವಾ ಹೃದಾ…” ಮಂತ್ರಗಳ ಒಂದೊಂದು ಪಾದದಿಂದ ಎಂಟು ದಿಕ್ಕುಗಳಲ್ಲಿ ಗಂಧ–ಹೂವು–ಅಕ್ಷತೆಗಳಿಂದ ಅಗ್ನಿಯನ್ನು ಅಲಂಕರಿಸಿ.',
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
      title: 'आघारावाज्यभागौ',
      titleEn: 'Aghara and ajyabhaga',
      note: 'Smarta: place the fuel on the fire silently (Apastamba Grihya Sutra 2.5); a manual may have you say to the Brahma अस्मिन् होमकर्मणि ब्रह्मन् इध्ममाधास्ये and he answers आधत्स्व. Aghara: with the sruva pour two unbroken streams of ghee across the fire, saying the mantra in the mind. Madhva (Haranahalli manual): both to Prajapati, the first from the north-west to the south-east, the second from the south-west to the north-east. Smarta (Apastamba): silently, the first to Prajapati, the second to Indra. Ajyabhaga (the two “eyes” of Agni): one oblation to Agni in the north-eastern part of the fire and one to Soma in the south-eastern part, level with it (Apastamba Grihya Sutra 2.6). Every offering is followed by the tyaga, इदं न मम, “this is not mine”; when an offering is made with the sruva, a drop left in it is shaken into the prokshani or a separate vessel in some families.',
      noteKn: 'ಸ್ಮಾರ್ತ: ಇಧ್ಮವನ್ನು ಮೌನವಾಗಿ ಅಗ್ನಿಯ ಮೇಲಿಡಿ (ಆಪಸ್ತಂಬ ಗೃಹ್ಯಸೂತ್ರ ೨.೫); ಕೆಲವು ಪದ್ಧತಿಗಳಲ್ಲಿ ಬ್ರಹ್ಮರಿಗೆ “ಅಸ್ಮಿನ್ ಹೋಮಕರ್ಮಣಿ ಬ್ರಹ್ಮನ್ ಇಧ್ಮಮಾಧಾಸ್ಯೇ” ಎನ್ನುತ್ತಾರೆ, ಅವರು “ಆಧತ್ಸ್ವ” ಎನ್ನುತ್ತಾರೆ. ಆಘಾರ: ಸ್ರುವದಿಂದ ಅಗ್ನಿಯ ಮೇಲೆ ಅಡ್ಡಲಾಗಿ ತುಪ್ಪದ ಎರಡು ಅಖಂಡ ಧಾರೆಗಳನ್ನು ಸುರಿಯಿರಿ, ಮಂತ್ರವನ್ನು ಮನಸ್ಸಿನಲ್ಲಿ ಹೇಳುತ್ತಾ. ಮಾಧ್ವ (ಹರನಹಳ್ಳಿ ಪದ್ಧತಿ): ಎರಡೂ ಪ್ರಜಾಪತಿಗೆ — ಮೊದಲನೆಯದು ವಾಯವ್ಯದಿಂದ ಆಗ್ನೇಯಕ್ಕೆ, ಎರಡನೆಯದು ನೈರುತ್ಯದಿಂದ ಈಶಾನ್ಯಕ್ಕೆ. ಸ್ಮಾರ್ತ (ಆಪಸ್ತಂಬ): ಮೌನವಾಗಿ, ಮೊದಲನೆಯದು ಪ್ರಜಾಪತಿಗೆ, ಎರಡನೆಯದು ಇಂದ್ರನಿಗೆ. ಆಜ್ಯಭಾಗ (ಅಗ್ನಿಯ ಎರಡು “ಕಣ್ಣುಗಳು”): ಅಗ್ನಿಯ ಈಶಾನ್ಯಭಾಗದಲ್ಲಿ ಅಗ್ನಿಗೆ ಒಂದು, ಆಗ್ನೇಯಭಾಗದಲ್ಲಿ ಅದರ ಸಮಕ್ಕೆ ಸೋಮನಿಗೆ ಒಂದು ಆಹುತಿ (ಆಪಸ್ತಂಬ ಗೃಹ್ಯಸೂತ್ರ ೨.೬). ಪ್ರತಿ ಆಹುತಿಯ ನಂತರ “ಇದಂ ನ ಮಮ” — “ಇದು ನನ್ನದಲ್ಲ” ಎಂಬ ತ್ಯಾಗ; ಸ್ರುವದಲ್ಲಿ ಉಳಿದ ತೊಟ್ಟನ್ನು ಕೆಲವು ಮನೆತನಗಳಲ್ಲಿ ಪ್ರೋಕ್ಷಣೀಗೆ ಅಥವಾ ಬೇರೆ ಪಾತ್ರೆಗೆ ಹಾಕುತ್ತಾರೆ.',
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
      ],
    },
    {
      title: 'अग्निसंस्कारा वैष्णवाहुतयश्च',
      titleEn: 'The samskaras of Agni and the Vaishnava offerings',
      note: 'Madhva manuals now make the fire fit for the Lord. First an expiatory offering for any lapse since the sankalpa. Then the sixteen samskaras of Agni, as for a child — garbhadhana, pumsavana, simantonnayana, vaishnava-bali, jatakarma, namakarana, nishkramana, annaprashana, chaula, upanayana, mahanamni, mahavrata, upanishad-vrata, godana, samavartana and vivaha — each with ghee offered with the vyahritis (Tantrasara-sangraha 2.19 with its commentary). Then the Vaishnava offerings of ghee: the eight-syllable mula mantra (ॐ नमो नारायणाय) to Narayana eight times, the twelve-syllable mantra (ॐ नमो भगवते वासुदेवाय) to Vasudeva twelve times, each verse of the Purusha Sukta once to Mahapurusha, and the six-syllable Vishnu mantra to Vishnu six times; some also offer with the Krishna six-syllable mantra and the Vishnu Gayatri (Homa-Havana: “a homa without offerings to Vishnu is called asura”). Those initiated also offer to the deities of tattva-nyasa, matrika-nyasa and the avarana. Ask your purohita for these mantras; they are not printed here.',
      noteKn: 'ಮಾಧ್ವ ಪದ್ಧತಿಗಳಲ್ಲಿ ಈಗ ಅಗ್ನಿಯನ್ನು ಭಗವದ್ಯೋಗ್ಯವಾಗಿಸುತ್ತಾರೆ. ಮೊದಲು ಸಂಕಲ್ಪದಿಂದ ಈ ಕ್ಷಣದವರೆಗಿನ ಲೋಪಗಳಿಗೆ ಪ್ರಾಯಶ್ಚಿತ್ತಾಹುತಿ. ನಂತರ ಮಗುವಿಗೆ ಮಾಡುವಂತೆ ಅಗ್ನಿಗೆ ಹದಿನಾರು ಸಂಸ್ಕಾರಗಳು — ಗರ್ಭಾಧಾನ, ಪುಂಸವನ, ಸೀಮಂತೋನ್ನಯನ, ವೈಷ್ಣವಬಲಿ, ಜಾತಕರ್ಮ, ನಾಮಕರಣ, ನಿಷ್ಕ್ರಮಣ, ಅನ್ನಪ್ರಾಶನ, ಚೌಲ, ಉಪನಯನ, ಮಹಾನಾಮ್ನೀ, ಮಹಾವ್ರತ, ಉಪನಿಷದ್ವ್ರತ, ಗೋದಾನ, ಸಮಾವರ್ತನ, ವಿವಾಹ — ಪ್ರತಿಯೊಂದಕ್ಕೂ ವ್ಯಾಹೃತಿಗಳಿಂದ ಆಜ್ಯಾಹುತಿ (ತಂತ್ರಸಾರಸಂಗ್ರಹ ೨.೧೯ ಮತ್ತು ವ್ಯಾಖ್ಯಾನ). ನಂತರ ವೈಷ್ಣವ ಆಜ್ಯಾಹುತಿಗಳು: ಅಷ್ಟಾಕ್ಷರ ಮೂಲಮಂತ್ರದಿಂದ (ಓಂ ನಮೋ ನಾರಾಯಣಾಯ) ನಾರಾಯಣನಿಗೆ ಎಂಟು, ದ್ವಾದಶಾಕ್ಷರದಿಂದ (ಓಂ ನಮೋ ಭಗವತೇ ವಾಸುದೇವಾಯ) ವಾಸುದೇವನಿಗೆ ಹನ್ನೆರಡು, ಪುರುಷಸೂಕ್ತದ ಪ್ರತಿ ಋಕ್ಕಿನಿಂದ ಮಹಾಪುರುಷನಿಗೆ ಒಂದೊಂದು, ವಿಷ್ಣು ಷಡಕ್ಷರದಿಂದ ವಿಷ್ಣುವಿಗೆ ಆರು; ಕೆಲವರು ಕೃಷ್ಣ ಷಡಕ್ಷರ, ವಿಷ್ಣುಗಾಯತ್ರಿಗಳಿಂದಲೂ ಹೋಮಿಸುತ್ತಾರೆ (ಹೋಮ–ಹವನ: “ವಿಷ್ಣ್ವಾಹುತಿ ಇಲ್ಲದ ಹೋಮ ಆಸುರ”). ದೀಕ್ಷಿತರು ತತ್ತ್ವನ್ಯಾಸ, ಮಾತೃಕಾನ್ಯಾಸ, ಆವರಣ ದೇವತೆಗಳಿಗೂ ಹೋಮಿಸುತ್ತಾರೆ. ಈ ಮಂತ್ರಗಳನ್ನು ಪುರೋಹಿತರಿಂದ ಪಡೆಯಿರಿ; ಇಲ್ಲಿ ಮುದ್ರಿಸಿಲ್ಲ.',
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
      ],
    },
    {
      title: 'व्याहृतिहोमः',
      titleEn: 'Vyahriti offerings before the main homa',
      note: 'Offer ghee with the three vyahritis — in the south, the north and the middle of the fire — and then with all three together, as Apastamba prayoga manuals give before the pradhana homa.',
      noteKn: 'ಮೂರು ವ್ಯಾಹೃತಿಗಳಿಂದ ಅಗ್ನಿಯ ದಕ್ಷಿಣ, ಉತ್ತರ, ಮಧ್ಯಭಾಗಗಳಲ್ಲಿ ಆಜ್ಯಾಹುತಿ ನೀಡಿ, ನಂತರ ಮೂರನ್ನೂ ಸೇರಿಸಿ ಒಂದು — ಆಪಸ್ತಂಬ ಪ್ರಯೋಗಗ್ರಂಥಗಳು ಪ್ರಧಾನಹೋಮಕ್ಕೆ ಮೊದಲು ಕೊಡುವಂತೆ.',
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
      note: 'Now open the text of the homa you are doing (Ganapati, Navagraha, Mrityunjaya, Sudarshana, Chandika, Lakshmi, Ayushya or Pavamana homa) and make its main offerings with its mantra, material and count. Offer ghee with the sruva, solid materials with the right hand (Madhva manuals use the mrigi mudra for til and grains: the thumb with the middle and ring fingers, index and little finger held apart like a deer’s horns); say svaha as the offering touches the fire and the tyaga after it. Meanwhile, where helpers are available, others recite the chosen stotras (Vishnu Sahasranama, Rudram and so on), keep the kalasha touched for japa, and do tarpana to the main deity (Homa-Havana). When the count is complete, return here for the uttaranga.',
      noteKn: 'ಈಗ ನೀವು ಮಾಡುತ್ತಿರುವ ಹೋಮದ ಪಠ್ಯವನ್ನು (ಗಣಪತಿ, ನವಗ್ರಹ, ಮೃತ್ಯುಂಜಯ, ಸುದರ್ಶನ, ಚಂಡಿಕಾ, ಲಕ್ಷ್ಮೀ, ಆಯುಷ್ಯ ಅಥವಾ ಪವಮಾನ ಹೋಮ) ತೆರೆದು ಅದರ ಮಂತ್ರ, ದ್ರವ್ಯ, ಸಂಖ್ಯೆಗಳಂತೆ ಪ್ರಧಾನಾಹುತಿಗಳನ್ನು ನೀಡಿ. ತುಪ್ಪವನ್ನು ಸ್ರುವದಿಂದ, ಘನದ್ರವ್ಯಗಳನ್ನು ಬಲಗೈಯಿಂದ ಹೋಮಿಸಿ (ಮಾಧ್ವ ಪದ್ಧತಿಯಲ್ಲಿ ಎಳ್ಳು–ಧಾನ್ಯಗಳಿಗೆ ಮೃಗೀಮುದ್ರೆ: ಹೆಬ್ಬೆರಳಿನೊಡನೆ ನಡುಬೆರಳು–ಉಂಗುರದ ಬೆರಳು, ತೋರುಬೆರಳು–ಕಿರುಬೆರಳು ಜಿಂಕೆಯ ಕೊಂಬಿನಂತೆ ದೂರ); ಆಹುತಿ ಅಗ್ನಿಯನ್ನು ಮುಟ್ಟುವಾಗ “ಸ್ವಾಹಾ”, ನಂತರ ತ್ಯಾಗ. ಸಹಾಯಕರಿದ್ದರೆ ಆ ಸಮಯದಲ್ಲಿ ಇತರರು ಸ್ತೋತ್ರಗಳನ್ನು (ವಿಷ್ಣುಸಹಸ್ರನಾಮ, ರುದ್ರ ಇತ್ಯಾದಿ) ಪಠಿಸುತ್ತಾರೆ, ಜಪಕ್ಕಾಗಿ ಕಲಶವನ್ನು ಮುಟ್ಟಿಕೊಂಡಿರುತ್ತಾರೆ, ಪ್ರಧಾನದೇವತೆಗೆ ತರ್ಪಣ ನೀಡುತ್ತಾರೆ (ಹೋಮ–ಹವನ). ಸಂಖ್ಯೆ ಪೂರ್ಣವಾದ ಮೇಲೆ ಉತ್ತರಾಂಗಕ್ಕಾಗಿ ಇಲ್ಲಿಗೆ ಹಿಂತಿರುಗಿ.',
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
      note: 'From here the uttaranga (the closing part) begins. Take ghee (and a little of the charu or other material, if used) and offer it in the north-eastern part of the fire, keeping it apart from the earlier offerings, to Agni Svishtakrit, who makes the offering well-offered. Madhva (Ashvalayana) form first; Smarta (Apastamba) form second.',
      noteKn: 'ಇಲ್ಲಿಂದ ಉತ್ತರಾಂಗ (ಸಮಾಪ್ತಿಯ ಭಾಗ) ಆರಂಭ. ತುಪ್ಪವನ್ನು (ಚರು ಅಥವಾ ಇತರ ದ್ರವ್ಯವಿದ್ದರೆ ಅದರ ಸ್ವಲ್ಪ ಭಾಗದೊಡನೆ) ತೆಗೆದುಕೊಂಡು, ಹಿಂದಿನ ಆಹುತಿಗಳಿಂದ ಬೇರೆಯಾಗಿ ಅಗ್ನಿಯ ಈಶಾನ್ಯಭಾಗದಲ್ಲಿ ಸ್ವಿಷ್ಟಕೃತ್ ಅಗ್ನಿಗೆ — ಆಹುತಿಯನ್ನು ಸುಹುತವಾಗಿಸುವವನಿಗೆ — ಹೋಮಿಸಿ. ಮಾಧ್ವ (ಆಶ್ವಲಾಯನ) ರೂಪ ಮೊದಲು; ಸ್ಮಾರ್ತ (ಆಪಸ್ತಂಬ) ರೂಪ ಎರಡನೆಯದು.',
      verses: [
        {
          text: 'यदस्य कर्मणोऽत्यरीरिचं यद्वा न्यूनमिहाकरम् ।\nअग्निष्टत्स्विष्टकृद्विद्वान्सर्वं स्विष्टं सुहुतं करोतु मे ।\nअग्नये स्विष्टकृते सुहुतहुते सर्वप्रायश्चित्ताहुतीनां कामानां समर्धयित्रे\nसर्वान्नः कामान्त्समर्धय स्वाहा । अग्नये स्विष्टकृत इदं न मम ॥',
          meaning: {
            en: 'Whatever in this rite I have done in excess, or whatever I have done short of what is due, may Agni the Svishtakrit, who knows it, make it all well-sacrificed and well-offered for me. To Agni Svishtakrit, who makes the offering well-offered, who fulfils all expiatory offerings and all wishes: fulfil all our wishes, svaha. This is for Agni Svishtakrit, not for me. (Ashvalayana Grihya Sutra 1.10.23)',
            kn: 'ಈ ಕರ್ಮದಲ್ಲಿ ನಾನು ಏನನ್ನು ಹೆಚ್ಚಾಗಿ ಮಾಡಿದೆನೋ, ಅಥವಾ ಕಡಿಮೆಯಾಗಿ ಮಾಡಿದೆನೋ, ಅದನ್ನು ತಿಳಿದ ಸ್ವಿಷ್ಟಕೃತ್ ಅಗ್ನಿಯು ಎಲ್ಲವನ್ನೂ ನನಗೆ ಸ್ವಿಷ್ಟವಾಗಿಯೂ ಸುಹುತವಾಗಿಯೂ ಮಾಡಲಿ. ಸುಹುತವಾಗಿಸುವ, ಎಲ್ಲ ಪ್ರಾಯಶ್ಚಿತ್ತಾಹುತಿಗಳನ್ನೂ ಕಾಮನೆಗಳನ್ನೂ ಪೂರೈಸುವ ಸ್ವಿಷ್ಟಕೃತ್ ಅಗ್ನಿಗೆ: ನಮ್ಮ ಎಲ್ಲ ಕಾಮನೆಗಳನ್ನೂ ಈಡೇರಿಸು, ಸ್ವಾಹಾ. ಇದು ಸ್ವಿಷ್ಟಕೃತ್ ಅಗ್ನಿಗೆ, ನನ್ನದಲ್ಲ. (ಆಶ್ವಲಾಯನ ಗೃಹ್ಯಸೂತ್ರ ೧.೧೦.೨೩)',
          },
          when: { tradition: ['madhva'] },
        },
        {
          text: 'यदस्य कर्मणोऽत्यरीरिचं यद्वा न्यूनमिहाकरम् ।\nअग्निष्टत्स्विष्टकृद्विद्वान्सर्वं स्विष्टं सुहुतं करोतु स्वाहा ।\nअग्नये स्विष्टकृत इदं न मम ॥',
          meaning: {
            en: 'Whatever in this rite I have done in excess, or whatever I have done short of what is due, may Agni the Svishtakrit, who knows it, make it all well-sacrificed and well-offered, svaha. This is for Agni Svishtakrit, not for me. (Apastamba Grihya Sutra 2.7)',
            kn: 'ಈ ಕರ್ಮದಲ್ಲಿ ನಾನು ಏನನ್ನು ಹೆಚ್ಚಾಗಿ ಮಾಡಿದೆನೋ, ಅಥವಾ ಕಡಿಮೆಯಾಗಿ ಮಾಡಿದೆನೋ, ಅದನ್ನು ತಿಳಿದ ಸ್ವಿಷ್ಟಕೃತ್ ಅಗ್ನಿಯು ಎಲ್ಲವನ್ನೂ ಸ್ವಿಷ್ಟವಾಗಿಯೂ ಸುಹುತವಾಗಿಯೂ ಮಾಡಲಿ, ಸ್ವಾಹಾ. ಇದು ಸ್ವಿಷ್ಟಕೃತ್ ಅಗ್ನಿಗೆ, ನನ್ನದಲ್ಲ. (ಆಪಸ್ತಂಬ ಗೃಹ್ಯಸೂತ್ರ ೨.೭)',
          },
          when: { tradition: ['smarta'] },
        },
      ],
    },
    {
      title: 'प्रायश्चित्तहोमः',
      titleEn: 'Prayaschitta: offerings for any fault',
      note: 'Madhva: untie the string of the fuel bundle, sprinkle it, soak it in ghee and offer it to Rudra; touch water. Then offer ghee with these verses for faults in the rite, and with the vyahritis to the forms of the Lord within Agni, Vayu, Surya and Prajapati (Aniruddha, Pradyumna, Sankarshana and Vasudeva). Madhva manuals also offer with अयाश्चाग्ने and यद्वो देवा; those verses are not given here.',
      noteKn: 'ಮಾಧ್ವ: ಇಧ್ಮದ ಕಟ್ಟಿನ ಹಗ್ಗದ ಗಂಟು ಬಿಚ್ಚಿ, ಪ್ರೋಕ್ಷಿಸಿ, ತುಪ್ಪದಲ್ಲಿ ಅದ್ದಿ ರುದ್ರನಿಗೆ ಹೋಮಿಸಿ; ನೀರು ಮುಟ್ಟಿ. ನಂತರ ಕರ್ಮದ ದೋಷಗಳಿಗಾಗಿ ಈ ಮಂತ್ರಗಳಿಂದ, ಹಾಗೂ ಅಗ್ನಿ, ವಾಯು, ಸೂರ್ಯ, ಪ್ರಜಾಪತಿಗಳೊಳಗಿನ ಭಗವದ್ರೂಪಗಳಿಗೆ (ಅನಿರುದ್ಧ, ಪ್ರದ್ಯುಮ್ನ, ಸಂಕರ್ಷಣ, ವಾಸುದೇವ) ವ್ಯಾಹೃತಿಗಳಿಂದ ಆಜ್ಯಾಹುತಿ. ಮಾಧ್ವ ಪದ್ಧತಿಗಳಲ್ಲಿ “ಅಯಾಶ್ಚಾಗ್ನೇ”, “ಯದ್ವೋ ದೇವಾಃ” ಮಂತ್ರಗಳಿಂದಲೂ ಹೋಮಿಸುತ್ತಾರೆ; ಅವನ್ನು ಇಲ್ಲಿ ಕೊಟ್ಟಿಲ್ಲ.',
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
      note: 'Offer ghee with these verses, which ask Agni to set right whatever was done wrongly, knowingly or unknowingly (Taittiriya Brahmana 3.7.11; the third is also Rigveda 10.2.5). Madhva manuals say the third with the Rigvedic मर्त्यासः, देवाँ; Apastamba manuals with the Taittiriya मर्तासः.',
      noteKn: 'ತಿಳಿದೋ ತಿಳಿಯದೆಯೋ ತಪ್ಪಾಗಿ ಮಾಡಿದ್ದನ್ನು ಸರಿಪಡಿಸೆಂದು ಅಗ್ನಿಯನ್ನು ಬೇಡುವ ಈ ಮಂತ್ರಗಳಿಂದ ಆಜ್ಯಾಹುತಿ ನೀಡಿ (ತೈತ್ತಿರೀಯ ಬ್ರಾಹ್ಮಣ ೩.೭.೧೧; ಮೂರನೆಯದು ಋಗ್ವೇದ ೧೦.೨.೫ ಕೂಡ). ಮಾಧ್ವ ಪದ್ಧತಿಯಲ್ಲಿ ಮೂರನೆಯದನ್ನು ಋಗ್ವೇದದ “ಮರ್ತ್ಯಾಸಃ, ದೇವಾಁ” ಎಂದೂ, ಆಪಸ್ತಂಬ ಪದ್ಧತಿಯಲ್ಲಿ ತೈತ್ತಿರೀಯದ “ಮರ್ತಾಸಃ” ಎಂದೂ ಹೇಳುತ್ತಾರೆ.',
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
          when: { tradition: ['madhva'] },
        },
        {
          text: 'यत्पाकत्रा मनसा दीनदक्षा न यज्ञस्य मन्वते मर्तासः ।\nअग्निष्टद्धोता क्रतुविद्विजानन्यजिष्ठो देवां ऋतुशो यजाति स्वाहा । अग्नय इदं न मम ॥',
          meaning: {
            en: 'What mortals of simple mind and little skill do not understand of the sacrifice, Agni the priest, knower of rites, understanding it, best of worshippers, offers to the gods at their proper seasons, svaha. This is for Agni, not for me. (Taittiriya Brahmana 3.7.11)',
            kn: 'ಮುಗ್ಧಮನಸ್ಸಿನ, ಅಲ್ಪಸಾಮರ್ಥ್ಯದ ಮನುಷ್ಯರು ಯಜ್ಞದಲ್ಲಿ ಯಾವುದನ್ನು ಅರಿಯರೋ, ಅದನ್ನು ಕರ್ಮಜ್ಞನಾದ ಹೋತೃ ಅಗ್ನಿಯು ತಿಳಿದು, ಶ್ರೇಷ್ಠ ಯಾಜಕನಾಗಿ ತಕ್ಕ ಕಾಲದಲ್ಲಿ ದೇವತೆಗಳಿಗೆ ಅರ್ಪಿಸುತ್ತಾನೆ, ಸ್ವಾಹಾ. ಇದು ಅಗ್ನಿಗೆ, ನನ್ನದಲ್ಲ. (ತೈತ್ತಿರೀಯ ಬ್ರಾಹ್ಮಣ ೩.೭.೧೧)',
          },
          when: { tradition: ['smarta'] },
        },
      ],
    },
    {
      title: 'सर्वप्रायश्चित्तम्',
      titleEn: 'Prajapati, the vyahritis and the final expiation',
      note: 'Smarta (Apastamba): offer to Prajapati with प्रजापते न त्वदेतानि…, then the three vyahritis and all three together; then, saying the sankalpa अस्मिन् होमकर्मणि मध्ये सम्भावितसमस्तदोषप्रायश्चित्तार्थं सर्वप्रायश्चित्तं होष्यामि, offer to Prajapati with the vyahritis, to Vishnu and to Rudra Pashupati. Madhva: the final sarva-prayaschitta is ॐ भूर्भुवः स्वः स्वाहा, offered to Prajapati and Sri Vasudeva, as in the earlier section.',
      noteKn: 'ಸ್ಮಾರ್ತ (ಆಪಸ್ತಂಬ): “ಪ್ರಜಾಪತೇ ನ ತ್ವದೇತಾನಿ…” ಎಂದು ಪ್ರಜಾಪತಿಗೆ, ನಂತರ ಮೂರು ವ್ಯಾಹೃತಿಗಳಿಂದ ಮತ್ತು ಮೂರನ್ನೂ ಸೇರಿಸಿ ಹೋಮಿಸಿ; ನಂತರ “ಅಸ್ಮಿನ್ ಹೋಮಕರ್ಮಣಿ ಮಧ್ಯೇ ಸಂಭಾವಿತಸಮಸ್ತದೋಷಪ್ರಾಯಶ್ಚಿತ್ತಾರ್ಥಂ ಸರ್ವಪ್ರಾಯಶ್ಚಿತ್ತಂ ಹೋಷ್ಯಾಮಿ” ಎಂದು ಸಂಕಲ್ಪಿಸಿ ವ್ಯಾಹೃತಿಗಳಿಂದ ಪ್ರಜಾಪತಿಗೂ, ವಿಷ್ಣುವಿಗೂ, ಪಶುಪತಿ ರುದ್ರನಿಗೂ ಹೋಮಿಸಿ. ಮಾಧ್ವ: ಕೊನೆಯ ಸರ್ವಪ್ರಾಯಶ್ಚಿತ್ತ “ಓಂ ಭೂರ್ಭುವಃ ಸ್ವಃ ಸ್ವಾಹಾ”, ಹಿಂದಿನ ಭಾಗದಲ್ಲಿರುವಂತೆ ಪ್ರಜಾಪತಿ–ಶ್ರೀವಾಸುದೇವರಿಗೆ.',
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
          text: 'ॐ भूर्भुवः सुवः स्वाहा । प्रजापतय इदं न मम ।\nॐ श्रीविष्णवे स्वाहा । विष्णवे परमात्मन इदं न मम ।\nॐ रुद्राय पशुपतये स्वाहा । रुद्राय पशुपतय इदं न मम ॥',
          meaning: {
            en: 'Om, earth, sky and heaven, svaha — for Prajapati, not for me. Om, to Sri Vishnu, svaha — for Vishnu, the Supreme Self, not for me. Om, to Rudra, lord of beings, svaha — for Rudra Pashupati, not for me.',
            kn: 'ಓಂ ಭೂರ್ಭುವಃಸುವಃ ಸ್ವಾಹಾ — ಪ್ರಜಾಪತಿಗೆ, ನನ್ನದಲ್ಲ. ಓಂ ಶ್ರೀವಿಷ್ಣುವಿಗೆ ಸ್ವಾಹಾ — ಪರಮಾತ್ಮನಾದ ವಿಷ್ಣುವಿಗೆ, ನನ್ನದಲ್ಲ. ಓಂ ಪಶುಪತಿ ರುದ್ರನಿಗೆ ಸ್ವಾಹಾ — ಪಶುಪತಿ ರುದ್ರನಿಗೆ, ನನ್ನದಲ್ಲ.',
          },
        },
      ],
    },
    {
      title: 'पूर्णाहुतिः',
      titleEn: 'Purnahuti (the full offering)',
      note: 'Fill the sruk with ghee (with a coconut, cloth, fruit or other offering as the homa prescribes), stand, and recite the whole hymn samudrad urmih (Rigveda 4.58, eleven verses), pouring the ghee in an unbroken stream at the svaha of the last verse. Then offer what is left with वि ज्योतिषा…, and the samsrava (the ghee gathered in the sruva) to the Vishvedevas.',
      noteKn: 'ಸ್ರುಕ್ಕನ್ನು ತುಪ್ಪದಿಂದ ತುಂಬಿ (ಹೋಮಕ್ಕೆ ವಿಹಿತವಾದ ತೆಂಗಿನಕಾಯಿ, ವಸ್ತ್ರ, ಫಲ ಇತ್ಯಾದಿಗಳೊಡನೆ), ಎದ್ದು ನಿಂತು “ಸಮುದ್ರಾದೂರ್ಮಿಃ” ಸೂಕ್ತವನ್ನು (ಋಗ್ವೇದ ೪.೫೮, ಹನ್ನೊಂದು ಋಕ್ಕುಗಳು) ಪೂರ್ತಿ ಹೇಳಿ, ಕೊನೆಯ ಋಕ್ಕಿನ “ಸ್ವಾಹಾ”ದಲ್ಲಿ ಅಖಂಡ ಧಾರೆಯಾಗಿ ತುಪ್ಪವನ್ನು ಸುರಿಯಿರಿ. ನಂತರ ಉಳಿದ ತುಪ್ಪವನ್ನು “ವಿ ಜ್ಯೋತಿಷಾ…” ಮಂತ್ರದಿಂದ, ಸ್ರುವದಲ್ಲಿ ಸಂಗ್ರಹವಾದ ಸಂಸ್ರಾವವನ್ನು ವಿಶ್ವೇದೇವರಿಗೆ ಹೋಮಿಸಿ.',
      when: { tradition: ['madhva'] },
      verses: [
        {
          n: 1,
          text: 'समुद्रादूर्मिर्मधुमाँ उदारदुपांशुना सममृतत्वमानट् ।\nघृतस्य नाम गुह्यं यदस्ति जिह्वा देवानाममृतस्य नाभिः ॥',
          meaning: {
            en: 'From the ocean a honeyed wave has risen; with the soma-stalk it has reached immortality. It is the secret name of ghee, the tongue of the gods, the navel of immortality.',
            kn: 'ಸಮುದ್ರದಿಂದ ಮಧುರವಾದ ಅಲೆಯೊಂದು ಮೇಲೆದ್ದಿದೆ; ಸೋಮದೊಡನೆ ಅದು ಅಮೃತತ್ವವನ್ನು ಪಡೆದಿದೆ. ಅದು ಘೃತದ ಗುಹ್ಯನಾಮ, ದೇವತೆಗಳ ನಾಲಿಗೆ, ಅಮೃತದ ನಾಭಿ.',
          },
        },
        {
          n: 2,
          text: 'वयं नाम प्र ब्रवामा घृतस्यास्मिन्यज्ञे धारयामा नमोभिः ।\nउप ब्रह्मा शृणवच्छस्यमानं चतुःशृङ्गोऽवमीद्गौर एतत् ॥',
          meaning: {
            en: 'Let us proclaim the name of ghee and hold it in this sacrifice with reverence. May the Brahma hear it as it is praised; the four-horned bright one has sent it forth.',
            kn: 'ಘೃತದ ಹೆಸರನ್ನು ನಾವು ಘೋಷಿಸೋಣ, ಈ ಯಜ್ಞದಲ್ಲಿ ನಮಸ್ಕಾರಗಳೊಡನೆ ಅದನ್ನು ಧರಿಸೋಣ. ಸ್ತುತಿಸಲ್ಪಡುವುದನ್ನು ಬ್ರಹ್ಮನು ಕೇಳಲಿ; ನಾಲ್ಕು ಕೊಂಬುಗಳ ಬೆಳಗುವವನು ಇದನ್ನು ಹೊರಹೊಮ್ಮಿಸಿದ್ದಾನೆ.',
          },
        },
        {
          n: 3,
          text: 'चत्वारि शृङ्गा त्रयो अस्य पादा द्वे शीर्षे सप्त हस्तासो अस्य ।\nत्रिधा बद्धो वृषभो रोरवीति महो देवो मर्त्याँ आ विवेश ॥',
          meaning: {
            en: 'Four are his horns, three his feet, two his heads, seven his hands; bound in three ways, the bull roars aloud; the great god has entered into mortals.',
            kn: 'ಅವನಿಗೆ ನಾಲ್ಕು ಕೊಂಬುಗಳು, ಮೂರು ಪಾದಗಳು, ಎರಡು ತಲೆಗಳು, ಏಳು ಕೈಗಳು; ಮೂರು ಬಗೆಯಲ್ಲಿ ಬಂಧಿತನಾದ ವೃಷಭನು ಗರ್ಜಿಸುತ್ತಾನೆ; ಆ ಮಹಾದೇವನು ಮನುಷ್ಯರೊಳಗೆ ಪ್ರವೇಶಿಸಿದ್ದಾನೆ.',
          },
        },
        {
          n: 4,
          text: 'त्रिधा हितं पणिभिर्गुह्यमानं गवि देवासो घृतमन्वविन्दन् ।\nइन्द्र एकं सूर्य एकं जजान वेनादेकं स्वधया निष्टतक्षुः ॥',
          meaning: {
            en: 'The ghee placed in three ways, hidden by the Panis in the cow, the gods found. Indra produced one part, the Sun another; the third they fashioned by their own power from the radiant one.',
            kn: 'ಮೂರು ಬಗೆಯಲ್ಲಿ ಇಡಲ್ಪಟ್ಟ, ಪಣಿಗಳು ಗೋವಿನಲ್ಲಿ ಅಡಗಿಸಿದ್ದ ಘೃತವನ್ನು ದೇವತೆಗಳು ಕಂಡುಕೊಂಡರು. ಒಂದನ್ನು ಇಂದ್ರ, ಇನ್ನೊಂದನ್ನು ಸೂರ್ಯ ಹುಟ್ಟಿಸಿದರು; ಮೂರನೆಯದನ್ನು ಬೆಳಗುವವನಿಂದ ತಮ್ಮ ಶಕ್ತಿಯಿಂದ ರೂಪಿಸಿದರು.',
          },
        },
        {
          n: 5,
          text: 'एता अर्षन्ति हृद्यात्समुद्राच्छतव्रजा रिपुणा नावचक्षे ।\nघृतस्य धारा अभि चाकशीमि हिरण्ययो वेतसो मध्य आसाम् ॥',
          meaning: {
            en: 'These streams flow from the ocean of the heart in a hundred channels, not to be seen by the enemy. I behold the streams of ghee; in their midst is the golden reed.',
            kn: 'ಈ ಧಾರೆಗಳು ಹೃದಯಸಮುದ್ರದಿಂದ ನೂರು ಕಾಲುವೆಗಳಲ್ಲಿ ಹರಿಯುತ್ತವೆ, ಶತ್ರುವಿಗೆ ಕಾಣದಂತೆ. ಘೃತಧಾರೆಗಳನ್ನು ನಾನು ನೋಡುತ್ತೇನೆ; ಅವುಗಳ ನಡುವೆ ಸುವರ್ಣದ ವೇತಸವಿದೆ.',
          },
        },
        {
          n: 6,
          text: 'सम्यक्स्रवन्ति सरितो न धेना अन्तर्हृदा मनसा पूयमानाः ।\nएते अर्षन्त्यूर्मयो घृतस्य मृगा इव क्षिपणोरीषमाणाः ॥',
          meaning: {
            en: 'Like rivers the streams of praise flow together, purified within by heart and mind. These waves of ghee rush on like deer fleeing the hunter.',
            kn: 'ಹೃದಯ–ಮನಸ್ಸುಗಳಿಂದ ಒಳಗೆ ಶುದ್ಧವಾದ ಸ್ತುತಿಧಾರೆಗಳು ನದಿಗಳಂತೆ ಒಟ್ಟಾಗಿ ಹರಿಯುತ್ತವೆ. ಈ ಘೃತದ ಅಲೆಗಳು ಬೇಟೆಗಾರನಿಂದ ಓಡುವ ಜಿಂಕೆಗಳಂತೆ ಧಾವಿಸುತ್ತವೆ.',
          },
        },
        {
          n: 7,
          text: 'सिन्धोरिव प्राध्वने शूघनासो वातप्रमियः पतयन्ति यह्वाः ।\nघृतस्य धारा अरुषो न वाजी काष्ठा भिन्दन्नूर्मिभिः पिन्वमानः ॥',
          meaning: {
            en: 'As in the rush of a river, the swift young streams fly on, faster than the wind; the streams of ghee, like a red racehorse breaking the bounds, swell with their waves.',
            kn: 'ನದಿಯ ರಭಸದಂತೆ ವೇಗವಾದ ಎಳೆಯ ಧಾರೆಗಳು ಗಾಳಿಗಿಂತ ವೇಗವಾಗಿ ಹಾರುತ್ತವೆ; ಘೃತಧಾರೆಗಳು ಎಲ್ಲೆಯನ್ನು ಮುರಿದು ಓಡುವ ಕೆಂಪು ಕುದುರೆಯಂತೆ ಅಲೆಗಳಿಂದ ಉಕ್ಕುತ್ತವೆ.',
          },
        },
        {
          n: 8,
          text: 'अभि प्रवन्त समनेव योषाः कल्याण्यः स्मयमानासो अग्निम् ।\nघृतस्य धाराः समिधो नसन्त ता जुषाणो हर्यति जातवेदाः ॥',
          meaning: {
            en: 'Like fair women going to a festival, smiling, they lean towards Agni; the streams of ghee reach the kindled fuel, and Jatavedas, delighting in them, longs for them.',
            kn: 'ಉತ್ಸವಕ್ಕೆ ಹೋಗುವ ಸುಂದರಿಯರಂತೆ ನಗುತ್ತಾ ಅವು ಅಗ್ನಿಯೆಡೆಗೆ ಬಾಗುತ್ತವೆ; ಘೃತಧಾರೆಗಳು ಸಮಿಧೆಗಳನ್ನು ಸೇರುತ್ತವೆ, ಜಾತವೇದನು ಅವುಗಳಲ್ಲಿ ಸಂತೋಷಿಸಿ ಅವನ್ನು ಬಯಸುತ್ತಾನೆ.',
          },
        },
        {
          n: 9,
          text: 'कन्या इव वहतुमेतवा उ अञ्ज्यञ्जाना अभि चाकशीमि ।\nयत्र सोमः सूयते यत्र यज्ञो घृतस्य धारा अभि तत्पवन्ते ॥',
          meaning: {
            en: 'Like maidens adorned with ointment going to their wedding, so I behold them; where soma is pressed, where the sacrifice is, there the streams of ghee flow purifying.',
            kn: 'ಅಲಂಕೃತರಾಗಿ ವಿವಾಹಕ್ಕೆ ಹೊರಟ ಕನ್ಯೆಯರಂತೆ ಅವನ್ನು ನಾನು ನೋಡುತ್ತೇನೆ; ಎಲ್ಲಿ ಸೋಮವನ್ನು ಹಿಂಡುತ್ತಾರೋ, ಎಲ್ಲಿ ಯಜ್ಞವಿದೆಯೋ ಅಲ್ಲಿಗೆ ಘೃತಧಾರೆಗಳು ಶುದ್ಧವಾಗಿ ಹರಿಯುತ್ತವೆ.',
          },
        },
        {
          n: 10,
          text: 'अभ्यर्षत सुष्टुतिं गव्यमाजिमस्मासु भद्रा द्रविणानि धत्त ।\nइमं यज्ञं नयत देवता नो घृतस्य धारा मधुमत्पवन्ते ॥',
          meaning: {
            en: 'Flow towards our fair praise, towards the prize of cattle; bestow auspicious riches on us. Lead this sacrifice of ours to the gods; the streams of ghee flow, rich in honey.',
            kn: 'ನಮ್ಮ ಸುಂದರ ಸ್ತುತಿಯೆಡೆಗೆ, ಗೋಸಂಪತ್ತಿನ ಫಲದೆಡೆಗೆ ಹರಿಯಿರಿ; ನಮಗೆ ಮಂಗಳಕರ ಸಂಪತ್ತನ್ನು ಕೊಡಿ. ನಮ್ಮ ಈ ಯಜ್ಞವನ್ನು ದೇವತೆಗಳೆಡೆಗೆ ಕೊಂಡೊಯ್ಯಿರಿ; ಮಧುರವಾದ ಘೃತಧಾರೆಗಳು ಹರಿಯುತ್ತಿವೆ.',
          },
        },
        {
          n: 11,
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
      title: 'पूर्णाहुतिर्वसोर्धारा च',
      titleEn: 'Purnahuti and vasordhara',
      note: 'Say the sankalpa: अस्मिन् होमकर्मणि सम्पूर्णफलप्राप्त्यर्थं पूर्णाहुतिं होष्यामि, तदनन्तरं साङ्गतासिद्ध्यर्थं वसोर्धारां होष्यामि. Fill the sruk with ghee (with the coconut, cloth or fruit the homa prescribes), stand and offer it with the purnahuti mantra (Taittiriya Brahmana 3.8.10). Then pour ghee in an unbroken stream (vasordhara) with सप्त ते अग्ने… (Taittiriya Samhita 4.6.5); in large homas the Chamakam is recited during the vasordhara. Then offer the samsrava (ghee gathered in the sruva); Apastamba manuals offer it to the Vasus, Rudras and Adityas, the Madhva manual and the Sudarshana Kalpa to the Vishvedevas.',
      noteKn: '“ಅಸ್ಮಿನ್ ಹೋಮಕರ್ಮಣಿ ಸಂಪೂರ್ಣಫಲಪ್ರಾಪ್ತ್ಯರ್ಥಂ ಪೂರ್ಣಾಹುತಿಂ ಹೋಷ್ಯಾಮಿ, ತದನಂತರಂ ಸಾಂಗತಾಸಿದ್ಧ್ಯರ್ಥಂ ವಸೋರ್ಧಾರಾಂ ಹೋಷ್ಯಾಮಿ” ಎಂದು ಸಂಕಲ್ಪಿಸಿ. ಸ್ರುಕ್ಕನ್ನು ತುಪ್ಪದಿಂದ ತುಂಬಿ (ಹೋಮಕ್ಕೆ ವಿಹಿತವಾದ ತೆಂಗಿನಕಾಯಿ, ವಸ್ತ್ರ, ಫಲಗಳೊಡನೆ), ಎದ್ದು ನಿಂತು ಪೂರ್ಣಾಹುತಿ ಮಂತ್ರದಿಂದ ಹೋಮಿಸಿ (ತೈತ್ತಿರೀಯ ಬ್ರಾಹ್ಮಣ ೩.೮.೧೦). ನಂತರ “ಸಪ್ತ ತೇ ಅಗ್ನೇ…” ಎಂದು ಅಖಂಡ ಧಾರೆಯಾಗಿ ತುಪ್ಪ ಸುರಿಯಿರಿ (ವಸೋರ್ಧಾರಾ; ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೪.೬.೫); ದೊಡ್ಡ ಹೋಮಗಳಲ್ಲಿ ವಸೋರ್ಧಾರೆಯ ಸಮಯದಲ್ಲಿ ಚಮಕವನ್ನು ಪಠಿಸುತ್ತಾರೆ. ನಂತರ ಸಂಸ್ರಾವವನ್ನು (ಸ್ರುವದಲ್ಲಿ ಸಂಗ್ರಹವಾದ ತುಪ್ಪ) ಹೋಮಿಸಿ; ಆಪಸ್ತಂಬ ಪದ್ಧತಿಯಲ್ಲಿ ವಸು–ರುದ್ರ–ಆದಿತ್ಯರಿಗೆ, ಮಾಧ್ವ ಪದ್ಧತಿ ಮತ್ತು ಸುದರ್ಶನಕಲ್ಪದಲ್ಲಿ ವಿಶ್ವೇದೇವರಿಗೆ.',
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
          text: 'सप्त ते अग्ने समिधः सप्त जिह्वाः सप्तर्षयः सप्त धाम प्रियाणि ।\nसप्त होत्राः सप्तधा त्वा यजन्ति सप्त योनीरा पृणस्वा घृतेन स्वाहा ॥',
          meaning: {
            en: 'Seven are your fuels, O Agni, seven your tongues, seven the seers, seven your beloved abodes; seven priests worship you in seven ways; fill your seven sources with ghee, svaha. (The vasordhara.)',
            kn: 'ಓ ಅಗ್ನಿಯೇ, ನಿನಗೆ ಏಳು ಸಮಿಧೆಗಳು, ಏಳು ನಾಲಿಗೆಗಳು, ಏಳು ಋಷಿಗಳು, ಏಳು ಪ್ರಿಯ ಧಾಮಗಳು; ಏಳು ಹೋತೃಗಳು ಏಳು ಬಗೆಯಲ್ಲಿ ನಿನ್ನನ್ನು ಯಜಿಸುತ್ತಾರೆ; ನಿನ್ನ ಏಳು ಯೋನಿಗಳನ್ನು ಘೃತದಿಂದ ತುಂಬಿಕೋ, ಸ್ವಾಹಾ. (ವಸೋರ್ಧಾರಾ.)',
          },
        },
      ],
    },
    {
      title: 'संस्रावहोमः',
      titleEn: 'The samsrava offering',
      note: 'Offer the ghee that has gathered in the sruva during the homa. Apastamba manuals name the Vasus, Rudras and Adityas instead of the Vishvedevas.',
      noteKn: 'ಹೋಮದ ಸಮಯದಲ್ಲಿ ಸ್ರುವದಲ್ಲಿ ಸಂಗ್ರಹವಾದ ತುಪ್ಪವನ್ನು ಹೋಮಿಸಿ. ಆಪಸ್ತಂಬ ಪದ್ಧತಿಗಳಲ್ಲಿ ವಿಶ್ವೇದೇವರ ಬದಲು ವಸು–ರುದ್ರ–ಆದಿತ್ಯರನ್ನು ಹೆಸರಿಸುತ್ತಾರೆ.',
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
      title: 'मार्जनम्',
      titleEn: 'Pouring out the pranita water and marjana',
      note: 'Set the ghee vessel to the north. Pour out the water of the pranita vessel on the darbha (Madhva manuals also touch it and recite पूर्णमसि…). With darbha tips sprinkle the water towards the five directions with these words, then sprinkle your head (Madhva: with आपो अस्मान्… and इदमापः…), and pour a little to the south-west. Smarta: then sprinkle water round the fire once more with the closing words of Apastamba Grihya Sutra 2.8 (अन्वमंस्थाः, प्रासावीः) and bid Varuna farewell from the pranita. The Brahma pours the remaining pranita water into the joined palms of the yajamana’s wife (Madhva), and all are sprinkled; akshata are placed on the head.',
      noteKn: 'ಆಜ್ಯಪಾತ್ರೆಯನ್ನು ಉತ್ತರಕ್ಕಿಡಿ. ಪ್ರಣೀತಾ ಪಾತ್ರೆಯ ನೀರನ್ನು ದರ್ಭೆಯ ಮೇಲೆ ಸುರಿಯಿರಿ (ಮಾಧ್ವ ಪದ್ಧತಿಯಲ್ಲಿ ಅದನ್ನು ಮುಟ್ಟಿ “ಪೂರ್ಣಮಸಿ…” ಎನ್ನುತ್ತಾರೆ). ದರ್ಭಾಗ್ರಗಳಿಂದ ಈ ವಾಕ್ಯಗಳೊಡನೆ ಐದು ದಿಕ್ಕುಗಳಿಗೆ ನೀರು ಪ್ರೋಕ್ಷಿಸಿ, ನಂತರ ತಲೆಗೆ ಪ್ರೋಕ್ಷಿಸಿಕೊಳ್ಳಿ (ಮಾಧ್ವ: “ಆಪೋ ಅಸ್ಮಾನ್…”, “ಇದಮಾಪಃ…” ಮಂತ್ರಗಳಿಂದ), ಸ್ವಲ್ಪ ನೀರನ್ನು ನೈರುತ್ಯಕ್ಕೆ ಬಿಡಿ. ಸ್ಮಾರ್ತ: ನಂತರ ಆಪಸ್ತಂಬ ಗೃಹ್ಯಸೂತ್ರ ೨.೮ರ ಸಮಾಪ್ತಿ ವಾಕ್ಯಗಳಿಂದ (ಅನ್ವಮಂಸ್ಥಾಃ, ಪ್ರಾಸಾವೀಃ) ಮತ್ತೆ ಅಗ್ನಿಯ ಸುತ್ತ ನೀರು ಹಾಕಿ, ಪ್ರಣೀತೆಯಿಂದ ವರುಣನನ್ನು ವಿಸರ್ಜಿಸಿ. ಉಳಿದ ಪ್ರಣೀತಾಜಲವನ್ನು ಬ್ರಹ್ಮರು ಯಜಮಾನಪತ್ನಿಯ ಅಂಜಲಿಗೆ ಸುರಿಯುತ್ತಾರೆ (ಮಾಧ್ವ); ಎಲ್ಲರಿಗೂ ಪ್ರೋಕ್ಷಣೆ; ತಲೆಯ ಮೇಲೆ ಅಕ್ಷತೆ.',
      verses: [
        {
          text: 'प्राच्यां दिशि देवा ऋत्विजो मार्जयन्ताम् । दक्षिणस्यां दिशि मासाः पितरो मार्जयन्ताम् ।\nप्रतीच्यां दिशि गृहाः पशवो मार्जयन्ताम् । उदीच्यां दिशि आप ओषधयो वनस्पतयो मार्जयन्ताम् ।\nऊर्ध्वायां दिशि यज्ञः संवत्सरः प्रजापतिर्मार्जयन्ताम् ॥',
          meaning: {
            en: 'In the east may the gods and the priests be sprinkled (and purify us); in the south the months and the ancestors; in the west the houses and the cattle; in the north the waters, the plants and the trees; above, the sacrifice, the year and Prajapati. (Apastamba manuals end: यज्ञः संवत्सरो यज्ञपतिः.)',
            kn: 'ಪೂರ್ವದಲ್ಲಿ ದೇವತೆಗಳೂ ಋತ್ವಿಜರೂ, ದಕ್ಷಿಣದಲ್ಲಿ ಮಾಸಗಳೂ ಪಿತೃಗಳೂ, ಪಶ್ಚಿಮದಲ್ಲಿ ಮನೆಗಳೂ ಪಶುಗಳೂ, ಉತ್ತರದಲ್ಲಿ ಜಲ, ಓಷಧಿ, ವನಸ್ಪತಿಗಳೂ, ಮೇಲೆ ಯಜ್ಞ, ಸಂವತ್ಸರ, ಪ್ರಜಾಪತಿಗಳೂ ಪ್ರೋಕ್ಷಿಸಲ್ಪಡಲಿ (ನಮ್ಮನ್ನು ಶುದ್ಧಗೊಳಿಸಲಿ). (ಆಪಸ್ತಂಬ ಪದ್ಧತಿಯಲ್ಲಿ ಕೊನೆಗೆ “ಯಜ್ಞಃ ಸಂವತ್ಸರೋ ಯಜ್ಞಪತಿಃ”.)',
          },
        },
        {
          text: 'आपो अस्मान्मातरः शुन्धयन्तु घृतेन नो घृतप्वः पुनन्तु ।\nविश्वं हि रिप्रं प्रवहन्ति देवीरुदिदाभ्यः शुचिरा पूत एमि ॥',
          meaning: {
            en: 'May the Waters, our mothers, cleanse us; may they who purify with ghee purify us with ghee. The divine Waters carry away all impurity; I come up out of them pure and cleansed. (Rigveda 10.17.10)',
            kn: 'ತಾಯಂದಿರಾದ ಜಲದೇವತೆಗಳು ನಮ್ಮನ್ನು ಶುದ್ಧಗೊಳಿಸಲಿ; ಘೃತದಿಂದ ಶುದ್ಧಗೊಳಿಸುವವರು ಘೃತದಿಂದ ನಮ್ಮನ್ನು ಪವಿತ್ರಗೊಳಿಸಲಿ. ದಿವ್ಯಜಲಗಳು ಎಲ್ಲ ಕೊಳೆಯನ್ನೂ ಕೊಚ್ಚಿಕೊಂಡು ಹೋಗುತ್ತವೆ; ಅವುಗಳಿಂದ ನಾನು ಶುಚಿಯಾಗಿ ಪವಿತ್ರನಾಗಿ ಮೇಲೆ ಬರುತ್ತೇನೆ. (ಋಗ್ವೇದ ೧೦.೧೭.೧೦)',
          },
          when: { tradition: ['madhva'] },
        },
        {
          text: 'इदमापः प्र वहत यत्किं च दुरितं मयि ।\nयद्वाहमभिदुद्रोह यद्वा शेप उतानृतम् ॥',
          meaning: {
            en: 'O Waters, carry away whatever wrong is in me, whatever harm I have done, whatever curse I have spoken, and any untruth. (Rigveda 1.23.22)',
            kn: 'ಓ ಜಲಗಳೇ, ನನ್ನಲ್ಲಿರುವ ಯಾವುದೇ ಪಾಪವನ್ನೂ, ನಾನು ಮಾಡಿದ ದ್ರೋಹವನ್ನೂ, ಆಡಿದ ಶಾಪವನ್ನೂ, ಸುಳ್ಳನ್ನೂ ಕೊಚ್ಚಿಕೊಂಡು ಹೋಗಿರಿ. (ಋಗ್ವೇದ ೧.೨೩.೨೨)',
          },
          when: { tradition: ['madhva'] },
        },
        {
          text: 'अदितेऽन्वमंस्थाः । अनुमतेऽन्वमंस्थाः ।\nसरस्वतेऽन्वमंस्थाः । देव सवितः प्रासावीः ॥',
          meaning: {
            en: 'O Aditi, you have consented; O Anumati, you have consented; O Sarasvati, you have consented; O god Savitri, you have impelled us. (The closing parishechana, Apastamba Grihya Sutra 2.8.)',
            kn: 'ಓ ಅದಿತಿಯೇ, ನೀನು ಅನುಮತಿಸಿದೆ; ಓ ಅನುಮತಿಯೇ, ನೀನು ಅನುಮತಿಸಿದೆ; ಓ ಸರಸ್ವತಿಯೇ, ನೀನು ಅನುಮತಿಸಿದೆ; ಓ ಸವಿತೃದೇವನೇ, ನೀನು ಪ್ರೇರೇಪಿಸಿದೆ. (ಸಮಾಪ್ತಿಯ ಪರಿಷೇಚನ, ಆಪಸ್ತಂಬ ಗೃಹ್ಯಸೂತ್ರ ೨.೮.)',
          },
          when: { tradition: ['smarta'] },
        },
      ],
    },
    {
      title: 'अग्न्युपस्थानम्',
      titleEn: 'Agni upasthana (praise of the fire)',
      note: 'Take away the paristarana darbha to the north; give a gift to the Brahma (ब्रह्मणे वरं ददामि). Decorate the fire again with gandha and flowers, go round it four times, and stand before it with folded hands praising it. Madhva manuals then worship the Lord within the fire (यज्ञपुरुषान्तर्यामी… परशुरामाय नमः) with the sixteen upacharas, offering naivedya and tambula, and recite the whole of अग्ने नय… (Rigveda 1.189, eight verses) during the pradakshina; then say the abhivadana with your gotra.',
      noteKn: 'ಪರಿಸ್ತರಣ ದರ್ಭೆಗಳನ್ನು ಉತ್ತರಕ್ಕೆ ತೆಗೆಯಿರಿ; ಬ್ರಹ್ಮರಿಗೆ ದಾನ ನೀಡಿ (“ಬ್ರಹ್ಮಣೇ ವರಂ ದದಾಮಿ”). ಮತ್ತೆ ಗಂಧ–ಹೂವುಗಳಿಂದ ಅಗ್ನಿಯನ್ನು ಅಲಂಕರಿಸಿ, ನಾಲ್ಕು ಪ್ರದಕ್ಷಿಣೆ ಮಾಡಿ, ಕೈಮುಗಿದು ಎದುರು ನಿಂತು ಸ್ತುತಿಸಿ. ಮಾಧ್ವ ಪದ್ಧತಿಯಲ್ಲಿ ನಂತರ ಅಗ್ನಿಯೊಳಗಿನ ಭಗವಂತನನ್ನು (“ಯಜ್ಞಪುರುಷಾಂತರ್ಯಾಮೀ… ಪರಶುರಾಮಾಯ ನಮಃ”) ಷೋಡಶೋಪಚಾರಗಳಿಂದ ಪೂಜಿಸಿ ನೈವೇದ್ಯ–ತಾಂಬೂಲ ಅರ್ಪಿಸುತ್ತಾರೆ, ಪ್ರದಕ್ಷಿಣೆಯ ಸಮಯದಲ್ಲಿ “ಅಗ್ನೇ ನಯ…” ಸೂಕ್ತವನ್ನು (ಋಗ್ವೇದ ೧.೧೮೯, ಎಂಟು ಋಕ್ಕುಗಳು) ಪೂರ್ತಿ ಹೇಳುತ್ತಾರೆ; ನಂತರ ಗೋತ್ರಸಹಿತ ಅಭಿವಾದನ.',
      verses: [
        {
          text: 'अग्ने नय सुपथा राये अस्मान्विश्वानि देव वयुनानि विद्वान् ।\nयुयोध्यस्मज्जुहुराणमेनो भूयिष्ठां ते नम उक्तिं विधेम ॥',
          meaning: {
            en: 'O Agni, lead us by the good path to prosperity, O god who know all our ways. Keep far from us the sin that leads astray; we offer you our fullest words of homage. (Rigveda 1.189.1; Taittiriya Samhita 1.1.14)',
            kn: 'ಓ ಅಗ್ನಿಯೇ, ನಮ್ಮ ಎಲ್ಲ ನಡೆಗಳನ್ನೂ ಬಲ್ಲ ದೇವನೇ, ಸನ್ಮಾರ್ಗದಿಂದ ನಮ್ಮನ್ನು ಶ್ರೇಯಸ್ಸಿನೆಡೆಗೆ ಕೊಂಡೊಯ್ಯು. ದಾರಿ ತಪ್ಪಿಸುವ ಪಾಪವನ್ನು ನಮ್ಮಿಂದ ದೂರಮಾಡು; ನಿನಗೆ ಅತಿಶಯವಾದ ನಮಸ್ಕಾರವಚನಗಳನ್ನು ಅರ್ಪಿಸುತ್ತೇವೆ. (ಋಗ್ವೇದ ೧.೧೮೯.೧; ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ ೧.೧.೧೪)',
          },
        },
        {
          text: 'अग्ने त्वं नो अन्तम उत त्राता शिवो भवा वरूथ्यः ।\nवसुरग्निर्वसुश्रवा अच्छा नक्षि द्युमत्तमं रयिं दाः ।\nस नो बोधि श्रुधी हवमुरुष्या णो अघायतः समस्मात् ।\nतं त्वा शोचिष्ठ दीदिवः सुम्नाय नूनमीमहे सखिभ्यः ॥',
          meaning: {
            en: 'O Agni, be our nearest friend, our protector, kind and sheltering. Good Agni, famed for wealth, come to us and give us the most splendid riches. Heed us, hear our call, guard us from every evil-wisher. O brightest, shining one, we pray to you now for happiness for our friends. (Rigveda 5.24.1-4)',
            kn: 'ಓ ಅಗ್ನಿಯೇ, ನಮಗೆ ಅತಿ ಸಮೀಪದ ಮಿತ್ರನಾಗು, ರಕ್ಷಕನಾಗು, ಮಂಗಳಕರನಾಗು, ಆಶ್ರಯದಾತನಾಗು. ಸಂಪತ್ತಿನಿಂದ ಪ್ರಸಿದ್ಧನಾದ ಅಗ್ನಿಯೇ, ನಮ್ಮೆಡೆಗೆ ಬಂದು ಅತ್ಯಂತ ಉಜ್ವಲ ಸಂಪತ್ತನ್ನು ಕೊಡು. ನಮ್ಮನ್ನು ಗಮನಿಸು, ನಮ್ಮ ಕರೆಯನ್ನು ಕೇಳು, ಎಲ್ಲ ದುಷ್ಟರಿಂದ ನಮ್ಮನ್ನು ಕಾಪಾಡು. ಓ ಅತಿ ತೇಜಸ್ವಿಯೇ, ಬೆಳಗುವವನೇ, ನಮ್ಮ ಸ್ನೇಹಿತರ ಸುಖಕ್ಕಾಗಿ ಈಗ ನಿನ್ನನ್ನು ಬೇಡುತ್ತೇವೆ. (ಋಗ್ವೇದ ೫.೨೪.೧–೪)',
          },
          when: { tradition: ['madhva'] },
        },
        {
          text: 'बोधा मे अस्य वचसो यविष्ठ मंहिष्ठस्य प्रभृतस्य स्वधावः ।\nपीयति त्वो अनु त्वो गृणाति वन्दारुस्ते तन्वं वन्दे अग्ने ॥',
          meaning: {
            en: 'Heed this most generous word that I bring you, O youngest, self-powerful Agni. One reviles, another praises; I, your worshipper, bow to your very form, O Agni. (Rigveda 1.147.2)',
            kn: 'ಓ ಅತಿ ತರುಣನೇ, ಸ್ವಶಕ್ತಿಯುಳ್ಳ ಅಗ್ನಿಯೇ, ನಾನು ತಂದ ಈ ಶ್ರೇಷ್ಠ ಸ್ತುತಿವಾಕ್ಯವನ್ನು ಗಮನಿಸು. ಒಬ್ಬನು ನಿಂದಿಸುತ್ತಾನೆ, ಇನ್ನೊಬ್ಬನು ಸ್ತುತಿಸುತ್ತಾನೆ; ಭಕ್ತನಾದ ನಾನು ಓ ಅಗ್ನಿಯೇ, ನಿನ್ನ ಸ್ವರೂಪಕ್ಕೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ. (ಋಗ್ವೇದ ೧.೧೪೭.೨)',
          },
          when: { tradition: ['madhva'] },
        },
      ],
    },
    {
      title: 'रक्षाधारणम्',
      titleEn: 'Wearing the raksha (sacred ash)',
      note: 'Take a little ash (bhasma) from the north side of the fire with the ring finger and apply it with these mantras: with त्र्यायुषं जमदग्नेः on the forehead, कश्यपस्य त्र्यायुषम् on the throat, अगस्त्यस्य त्र्यायुषम् on the navel, यद्देवानां त्र्यायुषम् on the right shoulder, तन्मे अस्तु त्र्यायुषम् on the left shoulder, and सर्वमस्तु शतायुषम् on the head (Madhva manual).',
      noteKn: 'ಅಗ್ನಿಯ ಉತ್ತರಭಾಗದಿಂದ ಉಂಗುರದ ಬೆರಳಿನಿಂದ ಸ್ವಲ್ಪ ಭಸ್ಮ ತೆಗೆದು ಈ ಮಂತ್ರಗಳಿಂದ ಧರಿಸಿ: “ತ್ರ್ಯಾಯುಷಂ ಜಮದಗ್ನೇಃ” ಹಣೆಗೆ, “ಕಶ್ಯಪಸ್ಯ ತ್ರ್ಯಾಯುಷಮ್” ಕಂಠಕ್ಕೆ, “ಅಗಸ್ತ್ಯಸ್ಯ ತ್ರ್ಯಾಯುಷಮ್” ನಾಭಿಗೆ, “ಯದ್ದೇವಾನಾಂ ತ್ರ್ಯಾಯುಷಮ್” ಬಲಭುಜಕ್ಕೆ, “ತನ್ಮೇ ಅಸ್ತು ತ್ರ್ಯಾಯುಷಮ್” ಎಡಭುಜಕ್ಕೆ, “ಸರ್ವಮಸ್ತು ಶತಾಯುಷಮ್” ತಲೆಗೆ (ಮಾಧ್ವ ಪದ್ಧತಿ).',
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
          text: 'त्र्यायुषं जमदग्नेः । कश्यपस्य त्र्यायुषम् । अगस्त्यस्य त्र्यायुषम् ।\nयद्देवानां त्र्यायुषम् । तन्मे अस्तु त्र्यायुषम् । सर्वमस्तु शतायुषम् ॥',
          meaning: {
            en: 'The threefold life-span of Jamadagni, the threefold life-span of Kashyapa, the threefold life-span of Agastya, the threefold life-span of the gods — may that threefold life-span be mine; may all of it be a life of a hundred years.',
            kn: 'ಜಮದಗ್ನಿಯ ತ್ರಿಗುಣ ಆಯುಸ್ಸು, ಕಶ್ಯಪನ ತ್ರಿಗುಣ ಆಯುಸ್ಸು, ಅಗಸ್ತ್ಯನ ತ್ರಿಗುಣ ಆಯುಸ್ಸು, ದೇವತೆಗಳ ತ್ರಿಗುಣ ಆಯುಸ್ಸು — ಆ ತ್ರಿಗುಣ ಆಯುಸ್ಸು ನನಗಾಗಲಿ; ಎಲ್ಲವೂ ನೂರು ವರ್ಷದ ಆಯುಸ್ಸಾಗಲಿ.',
          },
        },
      ],
    },
    {
      title: 'रक्षाधारणम्',
      titleEn: 'Wearing the raksha (sacred ash)',
      note: 'Take a little ash (bhasma) from the north side of the fire and apply it to the forehead and the other places your manual gives, and give it to the family; the Tamil Ganapati Homam manual says simply रक्षां धारयामि. Families who use the Vedic raksha mantras (for example मा नस्तोके… from the Rudram) follow their manual.',
      noteKn: 'ಅಗ್ನಿಯ ಉತ್ತರಭಾಗದಿಂದ ಸ್ವಲ್ಪ ಭಸ್ಮ ತೆಗೆದು ಹಣೆಗೂ ನಿಮ್ಮ ಪದ್ಧತಿಯಲ್ಲಿ ಹೇಳಿದ ಇತರ ಸ್ಥಾನಗಳಿಗೂ ಹಚ್ಚಿಕೊಂಡು, ಮನೆಯವರಿಗೂ ಕೊಡಿ; ತಮಿಳು ಗಣಪತಿಹೋಮ ಗ್ರಂಥವು “ರಕ್ಷಾಂ ಧಾರಯಾಮಿ” ಎಂದಷ್ಟೇ ಹೇಳುತ್ತದೆ. ವೈದಿಕ ರಕ್ಷಾಮಂತ್ರಗಳನ್ನು (ಉದಾ. ರುದ್ರದ “ಮಾ ನಸ್ತೋಕೇ…”) ಬಳಸುವ ಮನೆತನಗಳು ತಮ್ಮ ಪದ್ಧತಿಯಂತೆ ಮಾಡಲಿ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'रक्षां धारयामि ॥',
          meaning: {
            en: 'I wear the raksha (the protective ash of the homa).',
            kn: 'ರಕ್ಷೆಯನ್ನು (ಹೋಮದ ರಕ್ಷಾಭಸ್ಮವನ್ನು) ಧರಿಸುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'प्रार्थना',
      titleEn: 'Closing prayers',
      note: 'With folded hands, recite these prayers asking the Lord of sacrifice to make the rite complete. Both the Madhva and the Apastamba manuals give them.',
      noteKn: 'ಕೈಮುಗಿದು, ಕರ್ಮವನ್ನು ಪೂರ್ಣಗೊಳಿಸೆಂದು ಯಜ್ಞೇಶ್ವರನನ್ನು ಬೇಡುವ ಈ ಪ್ರಾರ್ಥನೆಗಳನ್ನು ಹೇಳಿ. ಮಾಧ್ವ ಮತ್ತು ಆಪಸ್ತಂಬ ಎರಡೂ ಪದ್ಧತಿಗಳು ಇವನ್ನು ಕೊಡುತ್ತವೆ.',
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
      title: 'समर्पणम्',
      titleEn: 'Samarpana',
      note: 'With folded hands ask Agni and the Lord to make good whatever was lacking, and offer the homa with water into the plate, naming the homa in place of अमुक. Then give Agni leave (some say अग्निम् आत्मनि उद्वासयामि, taking the fire back into one’s heart, if the fire is not kept). Prasada and the kalasha water are given to the family.',
      noteKn: 'ಕೈಮುಗಿದು ಕೊರತೆಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸೆಂದು ಅಗ್ನಿಯನ್ನೂ ಭಗವಂತನನ್ನೂ ಬೇಡಿ, “ಅಮುಕ” ಬದಲು ಹೋಮದ ಹೆಸರು ಹೇಳಿ ನೀರಿನೊಡನೆ ಹೋಮವನ್ನು ತಟ್ಟೆಗೆ ಸಮರ್ಪಿಸಿ. ನಂತರ ಅಗ್ನಿಯನ್ನು ವಿಸರ್ಜಿಸಿ (ಅಗ್ನಿಯನ್ನು ಕಾಪಾಡದಿದ್ದರೆ ಕೆಲವರು “ಅಗ್ನಿಮ್ ಆತ್ಮನಿ ಉದ್ವಾಸಯಾಮಿ” — ಅಗ್ನಿಯನ್ನು ತನ್ನ ಹೃದಯದಲ್ಲಿ ಸ್ಥಾಪಿಸಿಕೊಳ್ಳುತ್ತೇನೆ — ಎನ್ನುತ್ತಾರೆ). ಮನೆಯವರಿಗೆ ಪ್ರಸಾದ ಮತ್ತು ಕಲಶಜಲ.',
      when: { tradition: ['smarta'] },
      verses: [
        {
          text: 'मन्त्रहीनं क्रियाहीनं भक्तिहीनं हुताशन ।\nयद्धुतं तु मया देव परिपूर्णं तदस्तु ते ॥',
          meaning: {
            en: 'O Agni, whatever I have offered lacking in mantra, in action or in devotion — O god, may it be complete for you.',
            kn: 'ಓ ಹುತಾಶನನೇ, ಮಂತ್ರ, ಕ್ರಿಯೆ, ಭಕ್ತಿಗಳಲ್ಲಿ ಕೊರತೆಯಿಂದ ನಾನು ಏನನ್ನು ಹೋಮಿಸಿದ್ದೇನೋ, ಓ ದೇವ, ಅದು ನಿನಗೆ ಪರಿಪೂರ್ಣವಾಗಲಿ.',
          },
        },
        {
          text: 'यस्य स्मृत्या च नामोक्त्या तपोयज्ञक्रियादिषु ।\nन्यूनं सम्पूर्णतां याति सद्यो वन्दे तमच्युतम् ॥',
          meaning: {
            en: 'I bow to Achyuta, by remembering whom and uttering whose name whatever is lacking in austerity, sacrifice and ritual at once becomes complete.',
            kn: 'ಯಾರ ಸ್ಮರಣೆಯಿಂದಲೂ ನಾಮೋಚ್ಚಾರಣೆಯಿಂದಲೂ ತಪಸ್ಸು, ಯಜ್ಞ, ಕ್ರಿಯೆಗಳಲ್ಲಿನ ಕೊರತೆ ಕೂಡಲೇ ಪೂರ್ಣವಾಗುತ್ತದೆಯೋ ಆ ಅಚ್ಯುತನಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.',
          },
        },
        {
          text: 'अनेन अमुकहोमकर्मणा श्रीपरमेश्वरः प्रीयताम् ।\nॐ तत्सद्ब्रह्मार्पणमस्तु ॥',
          meaning: {
            en: 'By this … homa may the Supreme Lord be pleased. Om tat sat — may it be an offering to Brahman.',
            kn: 'ಈ ಇಂತಹ ಹೋಮಕರ್ಮದಿಂದ ಪರಮೇಶ್ವರನು ಪ್ರೀತನಾಗಲಿ. ಓಂ ತತ್ಸತ್ — ಇದು ಬ್ರಹ್ಮಾರ್ಪಣವಾಗಲಿ.',
          },
        },
      ],
    },
  ],
};
