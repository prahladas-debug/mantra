/**
 * Ekadashi vrata niyama, and the Chaturmasya vratas (shaka, dadhi, ksheera, dvidala): the rules of
 * fasting and parana, the sankalpa and samarpana verses of the three days (dashami, ekadashi,
 * dvadashi), the Madhva rule of arunodaya vedha, and the Chaturmasya sankalpa and samarpana verses.
 * This is a nitya (regular) text: the Panchanga gives the Ekadashi of the fortnight and the parana
 * time of the place. Collated Nov 2026.
 *
 * WITNESSES
 *   VM  Vrata Muktavali, ed. Vid. Venkatanarasimhacharya Rajapurohit, Sri Raghavendra Swami Matha,
 *       Mantralaya 2005 (Kannada script): "Dinatraya sankalpa" (dashami, ekadashi, dvadashi verses),
 *       p. 8, and "Chaturmasya vrata sankalpa", p. 164 (read from the page images; the OCR of
 *       this page is damaged), also the explanation of the Chaturmasya vratas, pp. 10-14
 *       (archive.org Vrata_Muktaavali_-_Raghavendra_Swami_Matha_Mantralya_). Madhva.
 *   C   "Chaturmasya Vratacharane", Srinivasa S. Mathada (Kannada script; archive.org
 *       chaturmasya_vratacharane_-_srinivasa_s.mathada): "Chaturmasya vrata sankalpa and samarpana
 *       mantras" and the rules, quoting the Skanda Purana. Madhva.
 *   E   Ekadashi Nirnaya of Sri Vadirajaswami with Kannada translation by B. P. Nagabhushana Rao
 *       (archive.org ekadashi_nirnaya_with_kannada_translation_-_srivadirajaswami_b.p.nagabhushanarao),
 *       for the arunodaya rule (verses 2 and 3). Madhva.
 *   D   Dharma Sastra Karadipika, Sringeri Sharada Samsthana 1986 (Kannada script; archive.org
 *       dharma-sastra-karadipika), "Ekadashi vrata niyamagalu", pp. 130-134. Smarta.
 *
 * CHOICES
 *   Dashami sankalpa: Madhva दशमी दिवसे प्राप्ते व्रतस्थोऽहं जनार्दन (VM); Smarta दशमीदिनमारभ्य
 *   करिष्येऽहं व्रतं तव (D); second half त्रिदिनं देवदेवेश निर्विघ्नं कुरु केशव is common.
 *   Ekadashi sankalpa एकादश्यां निराहारः: VM D. Dvadashi verses अज्ञानतिमिरान्धस्य and
 *   एकादश्युपवासेन: VM (two copies of the scan).
 *   Chaturmasya verses: VM (page images) C; readings agree except for OCR noise.
 *   Arunodaya verses: E. The Smarta rule (sunrise) in D.
 *   The parana time is not given: refer to the Panchanga.
 *
 */
import type { Mantra } from '../types';

export const ekadashiVrata: Mantra = {
  id: "ekadashi-vrata",
  title: "एकादशीव्रतनियमः चातुर्मास्यव्रतसङ्कल्पश्च",
  titleEn: "Ekadashi Vrata Niyama and Chaturmasya Vrata",
  category: "nitya",
  deity: "Sri Hari (Vishnu)",
  source: "Skanda Purana (quoted in the Madhva manuals); Ekadashi Nirnaya of Vadirajaswami; Vrata Muktavali (Raghavendra Matha); Chaturmasya Vratacharane; Dharma Sastra Karadipika",
  summary: "The rules of the Ekadashi vrata: the sankalpa verses of the three days, how Madhvas and Smartas reckon dashami vedha, fasting, vigil and parana, and the Chaturmasya vratas of the four months from the Ashadha shukla ekadashi, with their sankalpa and samarpana verses for the shaka, dadhi, ksheera and dvidala vratas.",
  summaryKn: "ಏಕಾದಶೀ ವ್ರತ ನಿಯಮಗಳು: ಮೂರು ದಿನಗಳ ಸಂಕಲ್ಪ ಶ್ಲೋಕಗಳು, ದಶಮೀ ವೇಧದ ಮಾಧ್ವ-ಸ್ಮಾರ್ತ ಲೆಕ್ಕಾಚಾರ, ಉಪವಾಸ, ಜಾಗರಣೆ, ಪಾರಣೆ ಮತ್ತು ಆಷಾಢ ಶುದ್ಧ ಏಕಾದಶಿಯಿಂದ ನಾಲ್ಕು ತಿಂಗಳ ಚಾತುರ್ಮಾಸ್ಯ ವ್ರತಗಳು (ಶಾಕ, ದಧಿ, ಕ್ಷೀರ, ದ್ವಿದಳ) ಅವುಗಳ ಸಂಕಲ್ಪ-ಸಮರ್ಪಣ ಶ್ಲೋಕಗಳೊಡನೆ.",
  variants: [
    {
      key: "tradition",
      title: "Tradition",
      titleKn: "ಸಂಪ್ರದಾಯ",
      options: [
        {
          id: "madhva",
          label: "Madhva",
          labelKn: "ಮಾಧ್ವ",
        },
        {
          id: "smarta",
          label: "Smarta",
          labelKn: "ಸ್ಮಾರ್ತ",
        },
      ],
    },
  ],
  difficulty: "medium",
  completeness: "partial",
  contentNote: "Gives the niyamas and the sankalpa and samarpana verses; the Ekadashi of each fortnight and its parana time (in the dvadashi morning, before the dvadashi ends or at the time the panchanga gives) must be taken from the Panchanga (see Panchanga in the app; Madhva and Smarta days differ when the dashami touches the arunodaya). Left out: the daily worship of Hari on the days, the Ekadashi-specific stotras, the Ekadashi katha for each Ekadashi, the udyapana of Chaturmasya, the Chandrayana and other Chaturmasya vratas (dharane-parane, ekabhukta, mauna-bhojana, dik-sadhana and others), which the Vrata Muktavali and the Mathada booklet describe; their rules are only mentioned in the notes.",
  sections: [
    {
      title: "एकादशीनियमाः",
      titleEn: "Rules of the Ekadashi vrata",
      note: "The Ekadashi of both fortnights is kept by fasting. Madhva rules (from the Ekadashi Nirnaya of Vadirajaswami and the Madhva manuals): Ekadashi is the day of the vrata on which no grain (and in the strict form no food and no water) is taken; the previous day (dashami) one meal at midday is taken after the sankalpa; at night keep vigil (jagarana) with stotra and Hari-smarana; do not sleep by day; speak the truth, avoid anger and contact with the unclean; worship Vishnu with gandha, flowers, incense, lamp and naivedya and stotra. The next morning (dvadashi) bathe, worship, give what you can, and break the fast (parana) with tirtha and Hari-naivedya at the time the Panchanga gives, before the dvadashi ends. Smarta rules (Sringeri manual): the same; those who cannot fast may take water, milk, fruit or one meal of non-grain food according to strength; mantra the water thrice with the ashtakshari before drinking after the sankalpa; if the rules were broken, repeat the ashtakshari mantra 108 times; eating an amalaka at the parana removes the fault of speaking with people in the fast. If a shraddha falls on Ekadashi, take the shesha as a smell only and give it to a cow; if mahalaya falls on Ekadashi, make the sankalpa for performing it with the mahalaya tantra and do it on the dvadashi. In sutaka (birth-pollution) fast alone and let a brahmana do the puja.",
      noteKn: "ಎರಡೂ ಪಕ್ಷದ ಏಕಾದಶಿಯಂದು ಉಪವಾಸ. ಮಾಧ್ವ ನಿಯಮಗಳು (ವಾದಿರಾಜರ ಏಕಾದಶೀ ನಿರ್ಣಯ ಮತ್ತು ಮಾಧ್ವ ಪುಸ್ತಕಗಳು): ಏಕಾದಶಿಯಂದು ಅನ್ನ (ಕಠಿಣ ರೂಪದಲ್ಲಿ ಆಹಾರ-ನೀರು ಇಲ್ಲದೆ) ಸ್ವೀಕರಿಸಬಾರದು; ಹಿಂದಿನ ದಿನ (ದಶಮಿ) ಸಂಕಲ್ಪದ ನಂತರ ಮಧ್ಯಾಹ್ನ ಒಂದು ಊಟ; ರಾತ್ರಿ ಸ್ತೋತ್ರ-ಹರಿಸ್ಮರಣೆಯೊಡನೆ ಜಾಗರಣೆ; ಹಗಲು ನಿದ್ರೆ ಬಿಡಿ; ಸತ್ಯ ನುಡಿಯಿರಿ, ಕೋಪ-ಅಶುಚಿ ಸಂಪರ್ಕ ಬಿಡಿ; ಗಂಧ-ಪುಷ್ಪ-ಧೂಪ-ದೀಪ-ನೈವೇದ್ಯ-ಸ್ತೋತ್ರಗಳಿಂದ ವಿಷ್ಣುವನ್ನು ಪೂಜಿಸಿ. ಮರುದಿನ (ದ್ವಾದಶಿ) ಸ್ನಾನ, ಪೂಜೆ, ದಾನ ಮಾಡಿ ಪಂಚಾಂಗ ಹೇಳಿದ ಸಮಯದಲ್ಲಿ, ದ್ವಾದಶಿ ಮುಗಿಯುವ ಮೊದಲು, ತೀರ್ಥ-ಹರಿನೈವೇದ್ಯದಿಂದ ಪಾರಣೆ ಮಾಡಿ. ಸ್ಮಾರ್ತ ನಿಯಮಗಳು (ಶೃಂಗೇರಿ ಪುಸ್ತಕ): ಇದೇ; ಶಕ್ತಿಯಿಲ್ಲದವರು ಶಕ್ತಿಗನುಸಾರ ನೀರು, ಹಾಲು, ಹಣ್ಣು ಅಥವಾ ಧಾನ್ಯವಲ್ಲದ ಒಂದು ಊಟ; ಸಂಕಲ್ಪದ ನಂತರ ನೀರನ್ನು ಅಷ್ಟಾಕ್ಷರೀ ಮಂತ್ರದಿಂದ ಮೂರು ಬಾರಿ ಮಂತ್ರಿಸಿ ಕುಡಿಯಿರಿ; ನಿಯಮ ಭಂಗವಾದರೆ ಅಷ್ಟಾಕ್ಷರೀ ಮಂತ್ರ 108 ಬಾರಿ; ಪಾರಣೆಯಂದು ನೆಲ್ಲಿಕಾಯಿ ತಿಂದರೆ ಜನರೊಡನೆ ಮಾತನಾಡಿದ ದೋಷ ನಾಶ. ಏಕಾದಶಿಯಂದು ಶ್ರಾದ್ಧ ಬಂದರೆ ಶೇಷವನ್ನು ವಾಸನೆ ಮಾತ್ರ ಮಾಡಿ ಹಸುವಿಗೆ ಕೊಡಿ; ಮಹಾಲಯ ಬಂದರೆ ತಂತ್ರೇಣ ಮಾಡುವ ಸಂಕಲ್ಪದೊಡನೆ ದ್ವಾದಶಿಯಂದು ಮಾಡಿ. ಸೂತಕದಲ್ಲಿ ಸ್ವತಃ ಉಪವಾಸ, ಪೂಜೆಯನ್ನು ಬ್ರಾಹ್ಮಣನ ಮೂಲಕ ಮಾಡಿಸಿ.",
      verses: [
        {
          text: "ॐ नमो नारायणाय ॥",
          meaning: {
            en: "Om, salutations to Narayana. (The ashtakshari mantra, with which the water is charmed and which is repeated through the vigil.)",
            kn: "ಓಂ ನಮೋ ನಾರಾಯಣಾಯ. (ಅಷ್ಟಾಕ್ಷರೀ ಮಂತ್ರ; ನೀರನ್ನು ಮಂತ್ರಿಸಲು ಮತ್ತು ಜಾಗರಣೆಯಲ್ಲಿ ಜಪಿಸಲು.)",
          },
        },
      ],
    },
    {
      title: "अरुणोदयवेधनिर्णयः",
      titleEn: "Dashami vedha: Madhva and Smarta reckoning",
      note: "Which day is the Ekadashi vrata when the dashami touches it (vedha)? Madhva: a dashami present at arunodaya (the four ghatikas, about 1 hr 36 min, before sunrise) makes the Ekadashi vedha-vitiddha and the fast is then kept on the next day (dvadashi), as taught by Madhvacharya and set out by Vadirajaswami in the Ekadashi Nirnaya. Smarta: the dashami is reckoned at sunrise, not at arunodaya, so that a dashami at sunrise makes the Ekadashi vedha; if neither Ekadashi nor dvadashi is wholly free of the dashami and both are long, the rules of the Dharmashastra karadipika apply. The two verses below open the Nirnaya of Vadirajaswami. Always follow the dates in the Panchanga; Madhva and Smarta days often differ by a day for this reason.",
      noteKn: "ದಶಮಿ ಸ್ಪರ್ಶಿಸಿದಾಗ (ವೇಧ) ಯಾವ ದಿನ ಏಕಾದಶೀ ವ್ರತ? ಮಾಧ್ವ: ಅರುಣೋದಯದಲ್ಲಿ (ಸೂರ್ಯೋದಯದ ಹಿಂದಿನ ನಾಲ್ಕು ಘಳಿಗೆ, ಸುಮಾರು 1 ಗಂಟೆ 36 ನಿಮಿಷ) ದಶಮಿ ಇದ್ದರೆ ಏಕಾದಶಿ ವೇಧ ವಿದ್ಧವಾಗುತ್ತದೆ, ಆಗ ಮರುದಿನ (ದ್ವಾದಶಿ) ಉಪವಾಸ — ಮಧ್ವಾಚಾರ್ಯರ ವಚನ, ವಾದಿರಾಜರು ಏಕಾದಶೀ ನಿರ್ಣಯದಲ್ಲಿ ವಿವರಿಸಿದ್ದಾರೆ. ಸ್ಮಾರ್ತ: ಸೂರ್ಯೋದಯಕ್ಕೆ ದಶಮಿ ಇದ್ದರೆ ವೇಧ (ಅರುಣೋದಯವಲ್ಲ); ಇದರಿಂದ ಮಾಧ್ವ-ಸ್ಮಾರ್ತ ದಿನಗಳು ಒಂದು ದಿನ ಭೇದವಾಗುವುದುಂಟು. ಕೆಳಗಿನ ಎರಡು ಶ್ಲೋಕಗಳು ವಾದಿರಾಜರ ನಿರ್ಣಯದ ಆರಂಭದವು. ಯಾವಾಗಲೂ ಪಂಚಾಂಗದ ದಿನಾಂಕದಂತೆ ಮಾಡಿ.",
      verses: [
        {
          text: "अरुणोदयवेलायां दशमी यदि दृश्यते ।\nपापमूलं तदा ज्ञेयमेकादश्युपवासनम् ॥\nचतस्रो घटिकाः प्रातररुणोदय उच्यते ।\nइत्याचार्यवचः स्मार्तं तद्विरोधोऽस्ति नः किल ॥",
          meaning: {
            en: "If the dashami is seen at the time of arunodaya, the fast on that Ekadashi should be known to be a root of sin. The words of the Acharya, that the four ghatikas of the morning are called arunodaya, are from the smriti; (the objectors say) that they conflict with us, and Vadirajaswami begins to answer them.",
            kn: "ಅರುಣೋದಯ ಕಾಲದಲ್ಲಿ ದಶಮಿ ಕಂಡರೆ ಆಗ ಏಕಾದಶೀ ಉಪವಾಸವು ಪಾಪಮೂಲವೆಂದು ತಿಳಿಯಬೇಕು. ಪ್ರಾತಃ ಕಾಲದ ನಾಲ್ಕು ಘಳಿಗೆಗಳು ಅರುಣೋದಯವೆನ್ನಲ್ಪಡುತ್ತದೆ ಎಂಬ ಆಚಾರ್ಯರ ವಚನ ಸ್ಮೃತಿಮೂಲಕವಾದುದು; ಅದರ ವಿರೋಧ ನಮಗೆ ಬರುತ್ತದೆ ಎನ್ನುವವರಿಗೆ ವಾದಿರಾಜರು ಉತ್ತರ ಕೊಡಲು ಆರಂಭಿಸುತ್ತಾರೆ.",
          },
          when: {
            tradition: [
              "madhva",
            ],
          },
        },
      ],
    },
    {
      title: "दिनत्रयसङ्कल्पः",
      titleEn: "The sankalpa of the three days",
      note: "Say these verses after achamana, pranayama and the desha-kala sankalpa as given in the Shodashopachara Puja. On dashami, after the daily rites, make the sankalpa and take one meal at midday (ekabhukta). On Ekadashi say the second verse (with akshata and water) and begin the fast. On dvadashi, after the puja, say the third and fourth verses, and break the fast with the parana verse of your manual. A Smarta manual adds: if the dashami lasts after sunrise and a Smarta Ekadashi follows, make the sankalpa on the night of Ekadashi or at midday of Ekadashi as the book gives.",
      noteKn: "ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ ಮತ್ತು ದೇಶಕಾಲ ಸಂಕೀರ್ತನೆಯ ನಂತರ ಈ ಶ್ಲೋಕಗಳನ್ನು ಹೇಳಿ. ದಶಮಿಯಂದು ನಿತ್ಯಕರ್ಮಗಳ ನಂತರ ಸಂಕಲ್ಪ ಮಾಡಿ ಮಧ್ಯಾಹ್ನ ಒಂದು ಊಟ (ಏಕಭುಕ್ತ). ಏಕಾದಶಿಯಂದು ಅಕ್ಷತೆ-ನೀರು ಹಿಡಿದು ಎರಡನೆಯ ಶ್ಲೋಕ ಹೇಳಿ ಉಪವಾಸ ಆರಂಭಿಸಿ. ದ್ವಾದಶಿಯಂದು ಪೂಜೆಯ ನಂತರ ಮೂರು-ನಾಲ್ಕನೆಯ ಶ್ಲೋಕ ಹೇಳಿ ನಿಮ್ಮ ಪುಸ್ತಕದ ಪಾರಣೆ ಶ್ಲೋಕದೊಡನೆ ಉಪವಾಸ ಮುಗಿಸಿ. ಸ್ಮಾರ್ತ ಪುಸ್ತಕದಲ್ಲಿ: ಸೂರ್ಯೋದಯದ ನಂತರವೂ ದಶಮಿ ಇದ್ದು ಸ್ಮಾರ್ತ ಏಕಾದಶಿ ಬಂದರೆ ಏಕಾದಶಿಯ ರಾತ್ರಿ ಅಥವಾ ಮಧ್ಯಾಹ್ನ ಸಂಕಲ್ಪ ಮಾಡಬೇಕೆಂದಿದೆ.",
      verses: [
        {
          text: "दशमी दिवसे प्राप्ते व्रतस्थोऽहं जनार्दन ।\nत्रिदिनं देवदेवेश निर्विघ्नं कुरु केशव ॥",
          meaning: {
            en: "Now that the day of the dashami has come, O Janardana, I am in the vow; O Kesava, lord of the gods, keep it free of obstacle for the three days.",
            kn: "ಜನಾರ್ದನನೇ, ದಶಮೀ ದಿನ ಬಂದಾಗ ನಾನು ವ್ರತಸ್ಥನಾಗಿದ್ದೇನೆ; ದೇವದೇವೇಶನೇ, ಕೇಶವನೇ, ಮೂರು ದಿನಗಳನ್ನೂ ನಿರ್ವಿಘ್ನವಾಗಿಸು.",
          },
          when: {
            tradition: [
              "madhva",
            ],
          },
        },
        {
          text: "दशमीदिनमारभ्य करिष्येऽहं व्रतं तव ।\nत्रिदिनं देवदेवेश निर्विघ्नं कुरु केशव ॥",
          meaning: {
            en: "Beginning from the day of the dashami, I shall keep your vow; O Kesava, lord of the gods, keep it free of obstacle for the three days.",
            kn: "ದಶಮೀ ದಿನದಿಂದ ಆರಂಭಿಸಿ ನಿನ್ನ ವ್ರತವನ್ನು ಮಾಡುತ್ತೇನೆ; ದೇವದೇವೇಶನೇ, ಕೇಶವನೇ, ಮೂರು ದಿನಗಳನ್ನೂ ನಿರ್ವಿಘ್ನವಾಗಿಸು.",
          },
          when: {
            tradition: [
              "smarta",
            ],
          },
        },
        {
          text: "एकादश्यां निराहारः स्थित्वाहमपरेऽहनि ।\nभोक्ष्यामि पुण्डरीकाक्ष शरणं मे भवाच्युत ॥",
          meaning: {
            en: "Having stayed without food on the Ekadashi, I shall eat on the following day, O lotus-eyed one; O Achyuta, be my refuge.",
            kn: "ಏಕಾದಶಿಯಂದು ನಿರಾಹಾರನಾಗಿದ್ದು ಮರುದಿನ ಭೋಜನ ಮಾಡುತ್ತೇನೆ, ಪುಂಡರೀಕಾಕ್ಷನೇ; ಅಚ್ಯುತನೇ, ನನಗೆ ಶರಣನಾಗು.",
          },
        },
        {
          text: "अज्ञानतिमिरान्धस्य व्रतेनानेन केशव ।\nप्रसन्नः सुमुखो भूत्वा ज्ञानदृष्टिप्रदो भव ॥\nएकादश्युपवासेन द्वादश्यां पारणेन च ।\nयदर्जितं मया पुण्यं तेन प्रीणातु केशवः ॥",
          meaning: {
            en: "O Kesava, by this vow, be pleased and kind to me, who am blinded by the darkness of ignorance, and be the giver of the eye of knowledge. By the merit that I have earned through the fast on the Ekadashi and the parana on the dvadashi, may Kesava be pleased. (Said on the dvadashi, with the samarpana, at the conclusion.)",
            kn: "ಕೇಶವನೇ, ಅಜ್ಞಾನದ ಕತ್ತಲೆಯಿಂದ ಕುರುಡನಾದ ನನ್ನ ಈ ವ್ರತದಿಂದ ಪ್ರಸನ್ನನೂ ಸುಮುಖನೂ ಆಗಿ ಜ್ಞಾನದೃಷ್ಟಿಯನ್ನು ಕೊಡು. ಏಕಾದಶೀ ಉಪವಾಸದಿಂದಲೂ ದ್ವಾದಶೀ ಪಾರಣೆಯಿಂದಲೂ ನಾನು ಗಳಿಸಿದ ಪುಣ್ಯದಿಂದ ಕೇಶವನು ಪ್ರೀತನಾಗಲಿ. (ದ್ವಾದಶಿಯಂದು ಸಮರ್ಪಣೆಯಲ್ಲಿ, ಕೊನೆಯಲ್ಲಿ ಹೇಳುವುದು.)",
          },
        },
      ],
    },
    {
      title: "चातुर्मास्यव्रतनियमाः",
      titleEn: "Chaturmasya: the four vratas",
      note: "Chaturmasya (the four months of the god's sleep, from Ashadha shukla Ekadashi to Kartika shukla Ekadashi or dvadashi) is observed with these vratas, each for one month, taught in the Skanda Purana and the Madhva manuals: (1) shaka vrata: from Ashadha shukla Ekadashi to Shravana shukla dashami, avoid the ten kinds of shaka (leaf, flower, fruit, stalk, tuber, bud, sesame flour, shoot, mushroom, and urad as the substitute for meat); (2) dadhi vrata: from Shravana shukla Ekadashi to Bhadrapada shukla dashami, avoid curd; (3) ksheera vrata: from Bhadrapada shukla Ekadashi to Ashvina shukla dashami, avoid milk; (4) dvidala vrata: from Ashvina shukla Ekadashi to Kartika shukla dashami, avoid pulses (dvidala, that which splits in two) and fruits with many seeds. Tulasi, amla, mango and agati are not forbidden; betel leaf and areca nut may be taken. If a forbidden shaka was eaten by mistake, do the chandrayana vrata. The vratas are begun after punyahavachana and a sankalpa (achamana, pranayama, desha-kala), the sankalpa verse of the month is said, and at the end of the month the samarpana verse. The month-lords: Vasudeva (Ashadha-Shravana), Sankarshana, Pradyumna, Aniruddha. The other Chaturmasya vratas of the Madhva manual (dharane-parane, chandrayana, ekabhukta, mauna-bhojana, dik-sadhana, taking water with the right hand, akhanda vrata) are not given here. Smarta householders: the same Skanda Purana rule on shaka, curd, milk and pulses is observed in many families; the Smarta manual read (Sringeri) gives only the sankalpa for ascetics and the rules for Chaturmasya in its own sections, so follow your manual for the verses.",
      noteKn: "ಚಾತುರ್ಮಾಸ್ಯ (ದೇವರ ನಿದ್ರೆಯ ನಾಲ್ಕು ತಿಂಗಳು, ಆಷಾಢ ಶುದ್ಧ ಏಕಾದಶಿಯಿಂದ ಕಾರ್ತೀಕ ಶುದ್ಧ ಏಕಾದಶಿ/ದ್ವಾದಶಿಯವರೆಗೆ) ವ್ರತಗಳು ಸ್ಕಾಂದಪುರಾಣ ಮತ್ತು ಮಾಧ್ವ ಪುಸ್ತಕಗಳ ಪ್ರಕಾರ ಒಂದೊಂದು ತಿಂಗಳು: (1) ಶಾಕವ್ರತ: ಆಷಾಢ ಶುದ್ಧ ಏಕಾದಶಿಯಿಂದ ಶ್ರಾವಣ ಶುದ್ಧ ದಶಮಿಯವರೆಗೆ ಹತ್ತು ವಿಧದ ಶಾಕ (ಎಲೆ, ಹೂವು, ಹಣ್ಣು, ಕಾಂಡ, ಗಡ್ಡೆ, ಮೊಗ್ಗು, ಎಳ್ಳುಹಿಟ್ಟು, ಚಿಗುರು, ಅಣಬೆ, ಮಾಂಸದ ಪ್ರತಿನಿಧಿಯಾದ ಉದ್ದು) ವರ್ಜ್ಯ; (2) ದಧಿವ್ರತ: ಶ್ರಾವಣ ಶುದ್ಧ ಏಕಾದಶಿಯಿಂದ ಭಾದ್ರಪದ ಶುದ್ಧ ದಶಮಿಯವರೆಗೆ ಮೊಸರು ವರ್ಜ್ಯ; (3) ಕ್ಷೀರವ್ರತ: ಭಾದ್ರಪದ ಶುದ್ಧ ಏಕಾದಶಿಯಿಂದ ಆಶ್ವಯುಜ ಶುದ್ಧ ದಶಮಿಯವರೆಗೆ ಹಾಲು ವರ್ಜ್ಯ; (4) ದ್ವಿದಳವ್ರತ: ಆಶ್ವಯುಜ ಶುದ್ಧ ಏಕಾದಶಿಯಿಂದ ಕಾರ್ತೀಕ ಶುದ್ಧ ದಶಮಿಯವರೆಗೆ ಬೇಳೆ (ಎರಡು ದಳವಾಗುವ ಧಾನ್ಯ) ಮತ್ತು ಬಹುಬೀಜದ ಫಲ ವರ್ಜ್ಯ. ತುಳಸಿ, ನೆಲ್ಲಿ, ಮಾವು, ಅಗಸೆ ನಿಷೇಧವಲ್ಲ; ವೀಳ್ಯದೆಲೆ-ಅಡಿಕೆ ತೆಗೆದುಕೊಳ್ಳಬಹುದು. ಅಭಕ್ಷ್ಯ ಶಾಕ ತಿಂದರೆ ಚಾಂದ್ರಾಯಣ ವ್ರತ. ಪುಣ್ಯಾಹವಾಚನದ ನಂತರ ಸಂಕಲ್ಪ (ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ, ದೇಶಕಾಲ), ತಿಂಗಳ ಸಂಕಲ್ಪ ಶ್ಲೋಕ ಹೇಳಿ ವ್ರತ ಆರಂಭಿಸಿ, ತಿಂಗಳ ಕೊನೆಯಲ್ಲಿ ಸಮರ್ಪಣ ಶ್ಲೋಕ. ತಿಂಗಳ ಅಭಿಮಾನಿ ದೇವತೆಗಳು: ವಾಸುದೇವ (ಆಷಾಢ-ಶ್ರಾವಣ), ಸಂಕರ್ಷಣ, ಪ್ರದ್ಯುಮ್ನ, ಅನಿರುದ್ಧ. ಮಾಧ್ವ ಪುಸ್ತಕದ ಇತರ ಚಾತುರ್ಮಾಸ್ಯ ವ್ರತಗಳು (ಧಾರಣೆ-ಪಾರಣೆ, ಚಾಂದ್ರಾಯಣ, ಏಕಭುಕ್ತ, ಮೌನಭೋಜನ, ದಿಕ್ಸಾಧನ, ಬಲಗೈಯಿಂದ ನೀರು ಕುಡಿಯುವುದು, ಅಖಂಡ ವ್ರತ) ಇಲ್ಲಿಲ್ಲ. ಸ್ಮಾರ್ತರು: ಅನೇಕ ಕುಟುಂಬಗಳಲ್ಲಿ ಶಾಕ, ಮೊಸರು, ಹಾಲು, ಬೇಳೆ ವರ್ಜ್ಯ ನಿಯಮ ಇದೆ; ಓದಿದ ಶೃಂಗೇರಿ ಪುಸ್ತಕದಲ್ಲಿ ಯತಿಗಳ ಸಂಕಲ್ಪ ಮತ್ತು ಬೇರೆ ವಿಭಾಗದಲ್ಲಿ ನಿಯಮ ಮಾತ್ರ ಇದೆ; ನಿಮ್ಮ ಪುಸ್ತಕದಂತೆ ಶ್ಲೋಕಗಳನ್ನು ಹೇಳಿ.",
      verses: [
        {
          text: "प्रथमे मासि कर्तव्यं नित्यं शाकव्रतं शुभम् ।\nद्वितीये मासि कर्तव्यं दधिव्रतमनुत्तमम् ॥",
          meaning: {
            en: "In the first month the auspicious, regular shaka vrata is to be kept; in the second month the excellent dadhi vrata. (Skanda Purana; the third is the ksheera vrata and the fourth the dvidala vrata.)",
            kn: "ಮೊದಲ ತಿಂಗಳಲ್ಲಿ ಶುಭವಾದ ನಿತ್ಯ ಶಾಕವ್ರತವನ್ನು ಮಾಡಬೇಕು; ಎರಡನೆಯ ತಿಂಗಳಲ್ಲಿ ಶ್ರೇಷ್ಠವಾದ ದಧಿವ್ರತ. (ಸ್ಕಾಂದಪುರಾಣ; ಮೂರನೆಯದು ಕ್ಷೀರವ್ರತ, ನಾಲ್ಕನೆಯದು ದ್ವಿದಳವ್ರತ.)",
          },
        },
      ],
    },
    {
      title: "शाकव्रतसङ्कल्पः",
      titleEn: "Shaka vrata (Ashadha shukla Ekadashi to Shravana shukla dashami)",
      note: "Madhva: after achamana, pranayama and sankalpa say the first verse, begin the vrata (the month of Vasudeva); at the end of the month the second verse.",
      noteKn: "ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ, ಸಂಕಲ್ಪದ ನಂತರ ಮೊದಲ ಶ್ಲೋಕ ಹೇಳಿ ವ್ರತ ಆರಂಭಿಸಿ (ವಾಸುದೇವನ ತಿಂಗಳು); ತಿಂಗಳ ಕೊನೆಯಲ್ಲಿ ಎರಡನೆಯ ಶ್ಲೋಕ.",
      verses: [
        {
          text: "वासुदेव शुचौ मासे शाकव्रतमनुत्तमम् ।\nत्वत्प्रीत्यर्थं करिष्येऽहं निर्विघ्नं कुरु माधव ॥",
          meaning: {
            en: "O Vasudeva, in the month of Shuci (Ashadha) I shall keep the excellent shaka vrata for your pleasure; O Madhava, keep it free of obstacle.",
            kn: "ವಾಸುದೇವನೇ, ಶುಚಿ (ಆಷಾಢ) ಮಾಸದಲ್ಲಿ ಶ್ರೇಷ್ಠವಾದ ಶಾಕವ್ರತವನ್ನು ನಿನ್ನ ಪ್ರೀತಿಗಾಗಿ ಮಾಡುತ್ತೇನೆ; ಮಾಧವನೇ, ನಿರ್ವಿಘ್ನವಾಗಿಸು.",
          },
        },
        {
          text: "वासुदेव नमस्तुभ्यं प्रथमे मासि मत्कृतम् ।\nशाकव्रतं मया तेन सन्तुष्टो भव माधव ॥",
          meaning: {
            en: "O Vasudeva, salutations to you; by the shaka vrata I have kept in the first month, be satisfied, O Madhava.",
            kn: "ವಾಸುದೇವನೇ, ನಿನಗೆ ನಮಸ್ಕಾರ; ಮೊದಲ ತಿಂಗಳಲ್ಲಿ ನಾನು ಮಾಡಿದ ಶಾಕವ್ರತದಿಂದ ಮಾಧವನೇ, ಸಂತುಷ್ಟನಾಗು.",
          },
        },
      ],
    },
    {
      title: "दधिव्रतसङ्कल्पः",
      titleEn: "Dadhi vrata (Shravana shukla Ekadashi to Bhadrapada shukla dashami)",
      note: "In the month of Sankarshana.",
      noteKn: "ಸಂಕರ್ಷಣನ ತಿಂಗಳು.",
      verses: [
        {
          text: "सङ्कर्षणारविन्दाक्ष करिष्येऽहं दधिव्रतम् ।\nद्वितीये मासि देवेश निर्विघ्नं कुरु मे प्रभो ॥",
          meaning: {
            en: "O lotus-eyed Sankarshana, I shall keep the dadhi vrata in the second month; O lord of the gods, O Lord, keep it free of obstacle for me.",
            kn: "ಕಮಲನಯನ ಸಂಕರ್ಷಣನೇ, ಎರಡನೆಯ ತಿಂಗಳಲ್ಲಿ ದಧಿವ್ರತವನ್ನು ಮಾಡುತ್ತೇನೆ; ದೇವೇಶನೇ, ಪ್ರಭುವೇ, ನನಗೆ ನಿರ್ವಿಘ್ನವಾಗಿಸು.",
          },
        },
        {
          text: "सङ्कर्षण नमस्तुभ्यं श्रवणे मत्कृतेन च ।\nदधिव्रतेन देवेश तुष्टो भव जनार्दन ॥",
          meaning: {
            en: "O Sankarshana, salutations to you; by the dadhi vrata kept by me in Shravana, O lord of the gods, O Janardana, be pleased.",
            kn: "ಸಂಕರ್ಷಣನೇ, ನಿನಗೆ ನಮಸ್ಕಾರ; ಶ್ರಾವಣದಲ್ಲಿ ನಾನು ಮಾಡಿದ ದಧಿವ್ರತದಿಂದ ದೇವೇಶನೇ, ಜನಾರ್ದನನೇ, ತುಷ್ಟನಾಗು.",
          },
        },
      ],
    },
    {
      title: "क्षीरव्रतसङ्कल्पः",
      titleEn: "Ksheera vrata (Bhadrapada shukla Ekadashi to Ashvina shukla dashami)",
      note: "In the month of Pradyumna.",
      noteKn: "ಪ್ರದ್ಯುಮ್ನನ ತಿಂಗಳು.",
      verses: [
        {
          text: "प्रद्युम्न तव तुष्ट्यर्थं प्रोष्ठपद्यां तृतीयके ।\nनिर्विघ्नं कुरु देवेश करिष्येऽहं पयोव्रतम् ॥",
          meaning: {
            en: "O Pradyumna, for your pleasure, in Proshthapada (Bhadrapada), the third month, I shall keep the payo (milk) vrata; O lord of the gods, keep it free of obstacle.",
            kn: "ಪ್ರದ್ಯುಮ್ನನೇ, ನಿನ್ನ ತೃಪ್ತಿಗಾಗಿ ಮೂರನೆಯ ತಿಂಗಳು ಪ್ರೋಷ್ಠಪದ (ಭಾದ್ರಪದ) ದಲ್ಲಿ ಪಯೋವ್ರತವನ್ನು ಮಾಡುತ್ತೇನೆ; ದೇವೇಶನೇ, ನಿರ್ವಿಘ್ನವಾಗಿಸು.",
          },
        },
        {
          text: "श्रीप्रद्युम्न नमस्तुभ्यं मासमारभ्य यत्कृतम् ।\nइष्टदो भव सर्वेश गृहीत्वा तु पयोव्रतम् ॥",
          meaning: {
            en: "O Sri Pradyumna, salutations to you; what I have done from the beginning of the month: O lord of all, accept the payo vrata and be the giver of my wish.",
            kn: "ಶ್ರೀಪ್ರದ್ಯುಮ್ನನೇ, ನಿನಗೆ ನಮಸ್ಕಾರ; ಮಾಸದ ಆರಂಭದಿಂದ ನಾನು ಮಾಡಿದ ಪಯೋವ್ರತವನ್ನು ಸ್ವೀಕರಿಸಿ ಸರ್ವೇಶನೇ, ಇಷ್ಟವನ್ನು ಕೊಡುವವನಾಗು.",
          },
        },
      ],
    },
    {
      title: "द्विदलव्रतसङ्कल्पः",
      titleEn: "Dvidala vrata (Ashvina shukla Ekadashi to Kartika shukla dashami)",
      note: "In the month of Aniruddha. The vrata ends with the Utthana (Prabodhini) dvadashi (Tulasi vivaha) after Kartika shukla Ekadashi; follow the Panchanga for its day and parana.",
      noteKn: "ಅನಿರುದ್ಧನ ತಿಂಗಳು. ಕಾರ್ತೀಕ ಶುದ್ಧ ಏಕಾದಶಿಯ ನಂತರದ ಉತ್ಥಾನ (ಪ್ರಬೋಧಿನೀ) ದ್ವಾದಶೀ (ತುಳಸೀ ವಿವಾಹ) ಯೊಂದಿಗೆ ವ್ರತ ಮುಗಿಯುತ್ತದೆ; ದಿನ-ಪಾರಣೆಗೆ ಪಂಚಾಂಗ ನೋಡಿ.",
      verses: [
        {
          text: "अनिरुद्ध सुरैर्वन्द्य द्विदलव्रतमुत्तमम् ।\nकरोम्यहमिषे मासे निर्विघ्नं कुरु मे प्रभो ॥",
          meaning: {
            en: "O Aniruddha, adored by the gods, I keep the excellent dvidala vrata in the month of Isha (Ashvina); O Lord, keep it free of obstacle for me.",
            kn: "ದೇವತೆಗಳಿಂದ ವಂದ್ಯನಾದ ಅನಿರುದ್ಧನೇ, ಇಷ (ಆಶ್ವಿನ) ಮಾಸದಲ್ಲಿ ಶ್ರೇಷ್ಠವಾದ ದ್ವಿದಳವ್ರತವನ್ನು ಮಾಡುತ್ತೇನೆ; ಪ್ರಭುವೇ, ನನಗೆ ನಿರ್ವಿಘ್ನವಾಗಿಸು.",
          },
        },
        {
          text: "अनिरुद्ध नमस्तुभ्यं द्विदलाख्यव्रतेन च ।\nयत्कृतेनाश्विने मासि प्रीत्यर्थं फलदो भव ॥",
          meaning: {
            en: "O Aniruddha, salutations to you; by the vrata called dvidala which I kept in the month of Ashvina, be the giver of fruit for your pleasure.",
            kn: "ಅನಿರುದ್ಧನೇ, ನಿನಗೆ ನಮಸ್ಕಾರ; ಆಶ್ವಿನ ಮಾಸದಲ್ಲಿ ನಾನು ಮಾಡಿದ ದ್ವಿದಳ ಎಂಬ ವ್ರತದಿಂದ ನಿನ್ನ ಪ್ರೀತಿಗಾಗಿ ಫಲವನ್ನು ಕೊಡುವವನಾಗು.",
          },
        },
      ],
    },
  ],
};
