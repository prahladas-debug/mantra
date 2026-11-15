/**
 * Sri Krishna Janmashtami puja: fasting and worship of Sri Krishna at midnight, with the arghya to
 * Krishna and then to Chandra (the moon) at moonrise, the Madhva practice. Only what is specific to
 * this vrata is given; the common steps are in the app's Shodashopachara Puja text.
 * Collated Nov 2026.
 *
 * WITNESSES
 *   U   "Sri Krishna Janmashtami Pooja Vidhi", a Kannada pamphlet with a photograph of Sri Krishna of
 *       Udupi on its cover, chapter 15 of a vrata-anushthana compilation, pp. 240-261, with the
 *       Jayantikalpa of Sri Madhvacharya and its Kannada tatparya (archive.org item vrata-muktaavali,
 *       file "SriKrishna Janmashtami Pooja VidhiH 2.pdf"; read from the page images). Madhva.
 *       This is the main witness for the Madhva arghya mantras given here. It is not named as an
 *       Udupi matha publication in the file, so the attribution to Udupi rests on the cover only.
 *   VM  Vrata Muktavali, ed. Vid. Venkatanarasimhacharya Rajapurohit, Sri Raghavendra Swami Matha,
 *       Mantralaya 2005 (Kannada script), "Sri Krishna Janmashtami / Jayanti Pooja Paddhati",
 *       pp. 91-103 (archive.org Vrata_Muktaavali_-_Raghavendra_Swami_Matha_Mantralya_). Madhva.
 *   R   Satika Vrata Ratnamala (Kannada script, Smarta; archive.org satika-vrata-ratnamala),
 *       "Krishnashtami Vrata Kalpa", pp. 325-362 (partly damaged in the scan).
 *   K   "Krishna Janmashtami Vrata Pooja" (Kannada booklet, Smarta; archive.org
 *       krishna-janmashtami-vrata-pooja), used for the upavasa verse and the dhyana.
 *   Vr  Vratarajah, Vishvanatha Sharma, Bombay 1897 (Devanagari; archive.org), for the arghya
 *       verse जातः कंसवधार्थाय.
 *
 * CHOICES
 *   Upavasa verse (Madhva): U VM; Smarta (अद्य स्थित्वा ... भोक्ष्यामि देवकीपुत्र): R K.
 *   Madhva pooja sankalpa: U. Arghya sankalpa: U (VM has the Raghavendra Matha form, with
 *   श्रीमद्राघवेन्द्रतीर्थगुर्वन्तर्गत ... बालगोपालकृष्ण and जन्माष्टमी / जयन्तीव्रतसम्पूर्त्यर्थम्).
 *   Krishna arghya जातः कंसवधार्थाय ... गृहाणार्घ्यं मया दत्तं देवक्या सहितो हरे: U VM Vr (all agree).
 *   Chandra arghya क्षीरोदार्णवसम्भूत अत्रिनेत्रसमुद्भव: U reads गृहाणार्घ्यं शशाङ्केदं रोहिण्या सहितो
 *   मम; VM and R read गृहाणार्घ्यं मया दत्तं रोहिण्या सहितः शशिन्. The Udupi reading is printed,
 *   the other is given in the note. Chandra prayer शशिने चन्द्रदेवाय ... ज्योतिष्मते नमस्तुभ्यम्:
 *   U VM R. Prayer to Krishna अवतारसहस्राणि and to Devaki (अदिते देवमातस्त्वम्: U only).
 *   Smarta dhyana श्रीकृष्ण गोपीजनमुख्य ...: R K. Shayana/parana/samapana formulas: VM (U footnotes
 *   give yogaya, yajnaya, vishvaya, sarvaya, dharmaya forms of the same).
 *   The Uttaradi Matha manual was not available; only the Raghavendra Matha and the pamphlet were read.
 *
 */
import type { Mantra } from '../types';

export const janmashtamiPuja: Mantra = {
  id: "janmashtami-puja",
  title: "श्रीकृष्णजन्माष्टमीपूजा",
  titleEn: "Sri Krishna Janmashtami Puja",
  category: "puja",
  deity: "Sri Krishna (Gopalakrishna)",
  source: "Jayantikalpa of Sri Madhvacharya; Madhva pooja vidhi pamphlet; Vrata Muktavali (Raghavendra Matha); Satika Vrata Ratnamala",
  summary: "The fast and midnight worship of Sri Krishna on Shravana krishna ashtami (Krishna Janmashtami or Jayanti): the vow of fasting, sankalpa, prayers to Devaki and Krishna, the three arghyas to Krishna, then the arghya to Chandra (the moon) at moonrise with its prayer, the closing verses and the next-morning parana. The Madhva arghya mantras of the Udupi pamphlet and the Raghavendra Matha manual are given.",
  summaryKn: "ಶ್ರಾವಣ ಕೃಷ್ಣ ಅಷ್ಟಮಿಯಂದು (ಕೃಷ್ಣ ಜನ್ಮಾಷ್ಟಮಿ/ಜಯಂತಿ) ಉಪವಾಸ ಮತ್ತು ಮಧ್ಯರಾತ್ರಿಯ ಶ್ರೀಕೃಷ್ಣ ಪೂಜೆ: ಉಪವಾಸ ಸಂಕಲ್ಪ, ದೇವಕೀ ಮತ್ತು ಕೃಷ್ಣ ಪ್ರಾರ್ಥನೆ, ಕೃಷ್ಣನಿಗೆ ಮೂರು ಅರ್ಘ್ಯ, ಚಂದ್ರೋದಯದಲ್ಲಿ ಚಂದ್ರನಿಗೆ ಅರ್ಘ್ಯ ಮತ್ತು ಪ್ರಾರ್ಥನೆ, ಸಮಾಪನ ಶ್ಲೋಕಗಳು ಮತ್ತು ಮರುದಿನದ ಪಾರಣೆ. ಉಡುಪಿಯ ಕಿರುಹೊತ್ತಿಗೆ ಮತ್ತು ರಾಘವೇಂದ್ರ ಮಠದ ಪುಸ್ತಕದ ಮಾಧ್ವ ಅರ್ಘ್ಯ ಮಂತ್ರಗಳಿವೆ.",
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
  contentNote: "Gives only what is specific to this vrata. Acamana, pranayama, the full desha-kala sankalpa, kalasha puja, Ganapati puja and the sixteen upacharas of the midnight puja (with the Purusha Sukta) are as in the Shodashopachara Puja text, with the name Sri Gopalakrishna. The date of the arghya and of the parana follows the panchanga (Madhva and Smarta days can differ; refer to the Panchanga in the app, and for the moonrise time of your place). Left out: the Madhva dhyana and avahana verses (not in the manuals read), the full Smarta arghya verses (the only Smarta witness is damaged in the scan), the Krishna ashtottara (see the app), the Jayantikalpa verses (read from your manual), the Gokula decoration and the dahi-handi customs.",
  sections: [
    {
      title: "उपवाससङ्कल्पः",
      titleEn: "The vow of fasting",
      note: "On the day, bathe, do the daily rites and keep the fast (upavasa) until the next day's parana. Madhva practice follows the Jayantikalpa of Sri Madhvacharya: the fast is kept on the day that has the ashtami at midnight with Rohini where available; at night worship Krishna with Devaki, Vasudeva, Balarama, Nandagopa, Yashoda and Subhadra; give arghya to Krishna and then to the moon; do not sleep before the arghya. Say the fasting verse after acamana and pranayama: the Madhva form first; the Smarta form (kalpa of the Satika Vrata Ratnamala) is the second. Smarta sankalpa also names Devaki and Vasudeva with Krishna.",
      noteKn: "ದಿನ ಸ್ನಾನ, ನಿತ್ಯಕರ್ಮಗಳನ್ನು ಮುಗಿಸಿ ಮರುದಿನದ ಪಾರಣೆಯವರೆಗೆ ಉಪವಾಸ ಮಾಡಿ. ಮಾಧ್ವ ಕ್ರಮವು ಶ್ರೀಮಧ್ವಾಚಾರ್ಯರ ಜಯಂತೀಕಲ್ಪದಂತೆ: ಅರ್ಧರಾತ್ರಿಗೆ ಅಷ್ಟಮಿ (ಸಾಧ್ಯವಾದಲ್ಲಿ ರೋಹಿಣಿ) ಇರುವ ದಿನ ಉಪವಾಸ; ರಾತ್ರಿ ಕೃಷ್ಣನನ್ನು ದೇವಕಿ, ವಸುದೇವ, ಬಲರಾಮ, ನಂದಗೋಪ, ಯಶೋದೆ, ಸುಭದ್ರೆಯರೊಡನೆ ಪೂಜಿಸಿ; ಕೃಷ್ಣನಿಗೆ ಮತ್ತು ಚಂದ್ರನಿಗೆ ಅರ್ಘ್ಯ ಕೊಡಿ; ಅರ್ಘ್ಯಕ್ಕೆ ಮೊದಲು ಮಲಗಬಾರದು. ಆಚಮನ-ಪ್ರಾಣಾಯಾಮದ ನಂತರ ಉಪವಾಸ ಶ್ಲೋಕ ಹೇಳಿ: ಮೊದಲನೆಯದು ಮಾಧ್ವ ರೂಪ; ಎರಡನೆಯದು ಸ್ಮಾರ್ತ ಕಲ್ಪದ್ದು.",
      verses: [
        {
          text: "अद्य स्थित्वा निराहारः श्वोभूते पुरुषोत्तम ।\nभोक्ष्यामि पुण्डरीकाक्ष अस्मिन् जन्माष्टमीव्रते ॥",
          meaning: {
            en: "O Purushottama, having stayed without food today, I shall eat tomorrow, O lotus-eyed Lord, in this Janmashtami vrata.",
            kn: "ಪುರುಷೋತ್ತಮನೇ, ಇಂದು ನಿರಾಹಾರನಾಗಿದ್ದು ನಾಳೆ ಭೋಜನ ಮಾಡುತ್ತೇನೆ, ಪುಂಡರೀಕಾಕ್ಷನೇ, ಈ ಜನ್ಮಾಷ್ಟಮೀ ವ್ರತದಲ್ಲಿ.",
          },
          when: {
            tradition: [
              "madhva",
            ],
          },
        },
        {
          text: "अद्य स्थित्वा निराहारः श्वोभूते परमेश्वर ।\nभोक्ष्यामि देवकीपुत्र पूजां कृत्वा विधानतः ॥",
          meaning: {
            en: "O Supreme Lord, having stayed without food today, I shall eat tomorrow, O son of Devaki, after worshipping according to the rule.",
            kn: "ಪರಮೇಶ್ವರನೇ, ಇಂದು ನಿರಾಹಾರನಾಗಿದ್ದು ನಾಳೆ, ದೇವಕೀಪುತ್ರನೇ, ವಿಧಿಯಂತೆ ಪೂಜೆ ಮಾಡಿ ಭೋಜನ ಮಾಡುತ್ತೇನೆ.",
          },
          when: {
            tradition: [
              "smarta",
            ],
          },
        },
      ],
    },
    {
      title: "सङ्कल्पः",
      titleEn: "Sankalpa for the puja",
      note: "After the Ganapati and kalasha puja (as in the Shodashopachara Puja), make a golden, silver, copper or clay image of Bala Krishna (or use the household Krishna) and worship him by the Purusha Sukta with the sixteen upacharas, together with Devaki, Vasudeva, Balarama, Nandagopa, Yashoda and Subhadra. The Madhva sankalpa after the desha-kala part (Udupi pamphlet): the rest of the clause naming the day (Shravana krishna ashtami) and the family wishes is as in the other puja sankalpas of the app.",
      noteKn: "ಗಣಪತಿ-ಕಲಶಪೂಜೆಯ ನಂತರ (ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯಂತೆ) ಬಂಗಾರ, ಬೆಳ್ಳಿ, ತಾಮ್ರ ಅಥವಾ ಮಣ್ಣಿನ ಬಾಲಕೃಷ್ಣ ಪ್ರತಿಮೆಯಲ್ಲಿ (ಅಥವಾ ಮನೆಯ ಕೃಷ್ಣನಲ್ಲಿ) ಪುರುಷಸೂಕ್ತದಿಂದ ಷೋಡಶೋಪಚಾರ ಪೂಜೆ ಮಾಡಿ; ದೇವಕಿ, ವಸುದೇವ, ಬಲರಾಮ, ನಂದಗೋಪ, ಯಶೋದೆ, ಸುಭದ್ರೆಯರನ್ನೂ ಪೂಜಿಸಿ. ದೇಶಕಾಲ ಸಂಕೀರ್ತನೆಯ ನಂತರ ಮಾಧ್ವ ಸಂಕಲ್ಪ (ಉಡುಪಿಯ ಕಿರುಹೊತ್ತಿಗೆ): ದಿನದ ಹೆಸರು (ಶ್ರಾವಣ ಕೃಷ್ಣ ಅಷ್ಟಮಿ) ಮತ್ತು ಕುಟುಂಬದ ಇಷ್ಟಗಳ ವಾಕ್ಯಗಳು ಇತರ ಪೂಜಾ ಸಂಕಲ್ಪಗಳಂತೆ.",
      verses: [
        {
          text: "अनन्तकल्याणगुणपूर्ण क्षीराब्धिशायि\nश्रीगोपालकृष्णप्रेरणया श्रीगोपालकृष्णप्रीत्यर्थं\nमया यथाशक्ति यथाज्ञानं यथामिलितोपचारं\nसपरिवारश्रीकृष्णपूजां करिष्ये ॥",
          meaning: {
            en: "Prompted by and for the pleasure of Sri Gopalakrishna, the ocean-sleeping Lord full of endless auspicious qualities, I shall worship Sri Krishna with his family, as far as I am able, as well as I know, and with whatever offerings I have gathered.",
            kn: "ಅನಂತ ಕಲ್ಯಾಣ ಗುಣಪೂರ್ಣನಾದ ಕ್ಷೀರಾಬ್ಧಿಶಾಯಿ ಶ್ರೀಗೋಪಾಲಕೃಷ್ಣನ ಪ್ರೇರಣೆಯಿಂದ ಮತ್ತು ಅವನ ಪ್ರೀತಿಗಾಗಿ ನಾನು ಯಥಾಶಕ್ತಿ, ಯಥಾಜ್ಞಾನ, ಸಿಕ್ಕಿದ ಉಪಚಾರಗಳಿಂದ ಸಪರಿವಾರ ಶ್ರೀಕೃಷ್ಣನ ಪೂಜೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.",
          },
        },
      ],
    },
    {
      title: "ध्यानम्",
      titleEn: "Dhyana (Smarta)",
      note: "In the Smarta manuals the dhyana of Krishna is this verse, followed by the avahana and the sixteen upacharas with the formula श्रीकृष्णाय नमः (as in the Shodashopachara Puja). The Madhva manuals read here refer to the dhyana of the daily puja.",
      noteKn: "ಸ್ಮಾರ್ತ ಪುಸ್ತಕಗಳಲ್ಲಿ ಕೃಷ್ಣನ ಧ್ಯಾನ ಈ ಶ್ಲೋಕ; ನಂತರ ಆವಾಹನೆ ಮತ್ತು ಷೋಡಶೋಪಚಾರ (\"ಶ್ರೀಕೃಷ್ಣಾಯ ನಮಃ\" ಎಂದು) ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯಂತೆ. ಮಾಧ್ವ ಪುಸ್ತಕಗಳಲ್ಲಿ ದೈನಂದಿನ ಪೂಜೆಯ ಧ್ಯಾನವನ್ನು ಸೂಚಿಸಲಾಗಿದೆ.",
      when: {
        tradition: [
          "smarta",
        ],
      },
      verses: [
        {
          text: "श्रीकृष्ण गोपीजनमुख्यविष्णो ब्रह्माण्डकुक्षिंधर वासुदेव ।\nगोपाङ्गनावल्लभ सारसाक्ष गोविन्द पीताम्बर शङ्खचक्रिन् ॥\nएवं ध्यात्वा हरिं सम्यक् श्रीकृष्णं विश्वरूपिणम् ।\nइष्टकामार्थसिद्ध्यर्थं पूजां कुर्याद्यथाविधि ॥",
          meaning: {
            en: "O Krishna, chief of the gopis (or beloved of the gopa folk), Vishnu, Vasudeva who bears the universe in his womb, beloved of the cowherd women, lotus-eyed, Govinda, clad in yellow, bearing conch and discus: having thus meditated well on Hari, Krishna of the universal form, one should worship according to the rule for the fulfilment of cherished aims.",
            kn: "ಶ್ರೀಕೃಷ್ಣನೇ, ಗೋಪೀಜನ ಮುಖ್ಯನೇ, ವಿಷ್ಣುವೇ, ಬ್ರಹ್ಮಾಂಡವನ್ನು ಒಡಲಲ್ಲಿ ಧರಿಸಿದ ವಾಸುದೇವನೇ, ಗೋಪಾಂಗನೆಯರ ವಲ್ಲಭನೇ, ಕಮಲನಯನನೇ, ಗೋವಿಂದನೇ, ಪೀತಾಂಬರನೇ, ಶಂಖಚಕ್ರಧಾರಿಯೇ ಎಂದು ವಿಶ್ವರೂಪಿ ಹರಿ ಕೃಷ್ಣನನ್ನು ಚೆನ್ನಾಗಿ ಧ್ಯಾನಿಸಿ, ಇಷ್ಟಕಾಮಾರ್ಥ ಸಿದ್ಧಿಗಾಗಿ ವಿಧಿಯಂತೆ ಪೂಜೆ ಮಾಡಬೇಕು.",
          },
        },
      ],
    },
    {
      title: "प्रार्थना",
      titleEn: "Prayers to Devaki and Krishna",
      note: "After the puja prostrate and pray to Devaki, then to Krishna, with the verses below, offering tulasi, bilva or flowers. Then worship the seven: Krishna, Balarama, Vasudeva, Devaki, Yashoda, Nandagopa and Subhadra, with the verse कृष्णं च बलभद्रं च. The Devaki verse is from the Udupi pamphlet; the Krishna verses are in the pamphlet and the Raghavendra Matha manual.",
      noteKn: "ಪೂಜೆಯ ನಂತರ ನಮಸ್ಕರಿಸಿ ಮೊದಲು ದೇವಕಿಯನ್ನು, ನಂತರ ಕೃಷ್ಣನನ್ನು ಈ ಶ್ಲೋಕಗಳಿಂದ ಪ್ರಾರ್ಥಿಸಿ, ತುಳಸಿ-ಬಿಲ್ವ-ಪುಷ್ಪ ಅರ್ಪಿಸಿ. \"ಕೃಷ್ಣಂ ಚ ಬಲಭದ್ರಂ ಚ\" ಶ್ಲೋಕದಿಂದ ಕೃಷ್ಣ, ಬಲರಾಮ, ವಸುದೇವ, ದೇವಕಿ, ಯಶೋದೆ, ನಂದಗೋಪ, ಸುಭದ್ರೆಯರನ್ನು ಪೂಜಿಸಿ. ದೇವಕೀ ಶ್ಲೋಕ ಉಡುಪಿಯ ಕಿರುಹೊತ್ತಿಗೆಯದು; ಕೃಷ್ಣ ಶ್ಲೋಕಗಳು ಕಿರುಹೊತ್ತಿಗೆ ಮತ್ತು ರಾಘವೇಂದ್ರ ಮಠದ ಪುಸ್ತಕದಲ್ಲಿವೆ.",
      verses: [
        {
          text: "अदिते देवमातस्त्वं सर्वपापप्रणाशिनि ।\nअतस्त्वां पूजयिष्यामि भीतो भवभयादहम् ॥\nपूजिता तु यथा देवैः प्रसन्ना त्वं वरानने ।\nपूजिता त्वं मया भक्त्या प्रसादं कुरु सुव्रते ॥",
          meaning: {
            en: "O Aditi (Devaki), mother of the gods, destroyer of all sins, I, afraid of worldly existence, shall therefore worship you. As you, fair-faced one, are pleased when worshipped by the gods, so, worshipped by me with devotion, show your grace, O keeper of vows.",
            kn: "ಅದಿತಿಯೇ (ದೇವಕಿಯೇ), ದೇವಮಾತೆಯೇ, ಸರ್ವಪಾಪ ನಾಶಿನಿಯೇ, ಸಂಸಾರ ಭಯದಿಂದ ಹೆದರಿದ ನಾನು ಆದ್ದರಿಂದ ನಿನ್ನನ್ನು ಪೂಜಿಸುತ್ತೇನೆ. ವರಾನನೆಯೇ, ದೇವತೆಗಳಿಂದ ಪೂಜಿತಳಾಗಿ ನೀನು ಪ್ರಸನ್ನಳಾದಂತೆ, ಸುವ್ರತೆಯೇ, ನನ್ನಿಂದ ಭಕ್ತಿಯಿಂದ ಪೂಜಿತಳಾಗಿ ಅನುಗ್ರಹಿಸು.",
          },
          when: {
            tradition: [
              "madhva",
            ],
          },
        },
        {
          text: "अवतारसहस्राणि करोषि मधुसूदन ।\nन ते सङ्ख्यावताराणां कश्चिज्जानाति वै भुवि ॥\nदेवा ब्रह्मादयो वाऽपि स्वरूपं न विदुस्तव ।\nअतस्त्वां पूजयिष्यामि मातुरुत्सङ्गसंस्थितम् ॥\nवाञ्छितं कुरु मे देव संसारार्तिभयापह ।\nनमस्तुभ्यं जगन्नाथ देवकीतनय प्रभो ॥\nवसुदेवात्मजानन्त यशोदानन्दवर्धन ।\nगोविन्द गोकुलाधार गोपीकान्त नमोऽस्तु ते ॥\nकृष्णाय वासुदेवाय हरये परमात्मने ।\nप्रणतक्लेशनाशाय गोविन्दाय नमो नमः ॥",
          meaning: {
            en: "O Madhusudana, you take thousands of incarnations, and no one on earth knows their number; even gods such as Brahma do not know your true nature. Therefore I shall worship you as you sit in your mother's lap. O God, remover of the fear and pain of worldly life, fulfil my wish. Salutations to you, lord of the world, son of Devaki; son of Vasudeva, the endless, who increase Yashoda's joy, Govinda, support of Gokula, beloved of the gopis, salutations to you. Salutations again and again to Krishna, Vasudeva, Hari, the Supreme Self, Govinda, destroyer of the sorrows of those who bow to him.",
            kn: "ಮಧುಸೂದನನೇ, ನೀನು ಸಾವಿರಾರು ಅವತಾರಗಳನ್ನು ಮಾಡುತ್ತೀಯೆ; ಭೂಮಿಯಲ್ಲಿ ನಿನ್ನ ಅವತಾರಗಳ ಸಂಖ್ಯೆಯನ್ನು ಯಾರೂ ಅರಿಯರು; ಬ್ರಹ್ಮಾದಿ ದೇವತೆಗಳೂ ನಿನ್ನ ಸ್ವರೂಪವನ್ನು ಅರಿಯರು. ಆದ್ದರಿಂದ ತಾಯಿಯ ತೊಡೆಯ ಮೇಲೆ ಕುಳಿತ ನಿನ್ನನ್ನು ಪೂಜಿಸುತ್ತೇನೆ. ಸಂಸಾರ ದುಃಖ-ಭಯಗಳನ್ನು ಕಳೆಯುವ ದೇವನೇ, ನನ್ನ ಇಷ್ಟವನ್ನು ನೆರವೇರಿಸು. ಜಗನ್ನಾಥನೇ, ದೇವಕೀತನಯನೇ, ಪ್ರಭುವೇ, ನಿನಗೆ ನಮಸ್ಕಾರ; ವಸುದೇವಾತ್ಮಜನೇ, ಅನಂತನೇ, ಯಶೋದಾನಂದವರ್ಧನನೇ, ಗೋವಿಂದನೇ, ಗೋಕುಲಾಧಾರನೇ, ಗೋಪೀಕಾಂತನೇ, ನಿನಗೆ ನಮಸ್ಕಾರ. ಕೃಷ್ಣನಿಗೆ, ವಾಸುದೇವನಿಗೆ, ಹರಿಗೆ, ಪರಮಾತ್ಮನಿಗೆ, ನಮಿಸಿದವರ ಕ್ಲೇಶ ನಾಶಕನಾದ ಗೋವಿಂದನಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.",
          },
        },
        {
          text: "कृष्णं च बलभद्रं च वसुदेवं च देवकीम् ।\nयशोदां नन्दगोपं च सुभद्रां तत्र पूजयेत् ॥",
          meaning: {
            en: "There one should worship Krishna and Balabhadra, Vasudeva and Devaki, Yashoda and Nandagopa, and Subhadra.",
            kn: "ಅಲ್ಲಿ ಕೃಷ್ಣನನ್ನು, ಬಲಭದ್ರನನ್ನು, ವಸುದೇವನನ್ನು, ದೇವಕಿಯನ್ನು, ಯಶೋದೆಯನ್ನು, ನಂದಗೋಪನನ್ನು ಮತ್ತು ಸುಭದ್ರೆಯನ್ನು ಪೂಜಿಸಬೇಕು.",
          },
        },
      ],
    },
    {
      title: "अर्घ्यप्रदानसङ्कल्पः",
      titleEn: "Sankalpa for the arghya",
      note: "At midnight, when the moon has risen (check the moonrise time for your place in the Panchanga; if the moon is hidden, give the arghya at the time given by your matha), do acamana and pranayama, take tulasi or akshata in the right hand and water, say the sankalpa, and pour the water into the arghya vessel. The arghya to Krishna is given in a conch with pure water, tulasi, dakshina and fruit; the arghya to the moon is given in a conch with milk, fruit and dakshina, while remembering Chandra in a bowl of coconut kernel (the pamphlet) set near the tulasi platform. The Raghavendra Matha manual has the same sankalpa with the guru and Mukhyaprana named and the words जन्माष्टमी / जयन्तीव्रतसम्पूर्त्यर्थम्.",
      noteKn: "ಮಧ್ಯರಾತ್ರಿ ಚಂದ್ರೋದಯದ ಸಮಯದಲ್ಲಿ (ನಿಮ್ಮ ಊರಿನ ಚಂದ್ರೋದಯ ಸಮಯವನ್ನು ಪಂಚಾಂಗದಲ್ಲಿ ನೋಡಿ; ಚಂದ್ರ ಕಾಣದಿದ್ದರೆ ಮಠದ ಪದ್ಧತಿಯಂತೆ) ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ಬಲಗೈಯಲ್ಲಿ ತುಳಸಿ ಅಥವಾ ಅಕ್ಷತೆ ಮತ್ತು ನೀರು ಹಿಡಿದು ಸಂಕಲ್ಪ ಮಾಡಿ ಅರ್ಘ್ಯಪಾತ್ರೆಗೆ ಬಿಡಿ. ಕೃಷ್ಣನಿಗೆ ಶಂಖದಲ್ಲಿ ಶುದ್ಧ ಜಲ, ತುಳಸಿ, ದಕ್ಷಿಣೆ, ಫಲ ಇಟ್ಟು ಅರ್ಘ್ಯ; ಚಂದ್ರನಿಗೆ ಶಂಖದಲ್ಲಿ ಹಾಲು, ಫಲ, ದಕ್ಷಿಣೆ ಇಟ್ಟು, ತುಳಸಿಕಟ್ಟೆಯ ಬಳಿ ಕೊಬ್ಬರಿ ಬಟ್ಟಲಿನಲ್ಲಿ (ಕಿರುಹೊತ್ತಿಗೆ) ಚಂದ್ರನನ್ನು ಸ್ಮರಿಸುತ್ತಾ ಅರ್ಘ್ಯ ಕೊಡಿ. ರಾಘವೇಂದ್ರ ಮಠದ ಪುಸ್ತಕದಲ್ಲಿ ಇದೇ ಸಂಕಲ್ಪದಲ್ಲಿ ಗುರು-ಮುಖ್ಯಪ್ರಾಣರ ನಾಮ ಮತ್ತು \"ಜನ್ಮಾಷ್ಟಮೀ / ಜಯಂತೀವ್ರತಸಂಪೂರ್ತ್ಯರ್ಥಂ\" ಇದೆ.",
      verses: [
        {
          text: "श्रीगोपालकृष्णप्रेरणया श्रीगोपालकृष्णप्रीत्यर्थं\nजन्माष्टमीव्रतसम्पूर्णफलप्राप्त्यर्थं\nनिशीथे चन्द्रोदयकाले अर्घ्यप्रदानं करिष्ये ॥",
          meaning: {
            en: "Prompted by and for the pleasure of Sri Gopalakrishna, to obtain the full fruit of the Janmashtami vrata, at midnight at moonrise I shall give the arghya.",
            kn: "ಶ್ರೀಗೋಪಾಲಕೃಷ್ಣನ ಪ್ರೇರಣೆಯಿಂದ ಮತ್ತು ಅವನ ಪ್ರೀತಿಗಾಗಿ, ಜನ್ಮಾಷ್ಟಮೀ ವ್ರತದ ಸಂಪೂರ್ಣ ಫಲಪ್ರಾಪ್ತಿಗಾಗಿ ಮಧ್ಯರಾತ್ರಿ ಚಂದ್ರೋದಯ ಕಾಲದಲ್ಲಿ ಅರ್ಘ್ಯಪ್ರದಾನವನ್ನು ಮಾಡುತ್ತೇನೆ.",
          },
        },
      ],
    },
    {
      title: "कृष्णार्घ्यप्रदानम्",
      titleEn: "Arghya to Krishna",
      note: "Pour the water from the conch on the hands of the image three times: say the whole verse and then देवकीसहिताय श्रीकृष्णाय इदमर्घ्यमिदमर्घ्यमिदमर्घ्यम् (this arghya three times), or say the verse once and the formula three times. The Raghavendra Matha manual gives the same verse; its closing formula is देवकीसहिताय श्रीकृष्णाय इदमर्घ्यं समर्पयामि, said three times, with the whole verse. The verse is also found in the Vratarajah.",
      noteKn: "ಶಂಖದ ನೀರನ್ನು ಪ್ರತಿಮೆಯ ಕೈಗಳ ಮೇಲೆ ಮೂರು ಬಾರಿ ಬಿಡಿ: ಇಡೀ ಶ್ಲೋಕ ಹೇಳಿ \"ದೇವಕೀಸಹಿತಾಯ ಶ್ರೀಕೃಷ್ಣಾಯ ಇದಮರ್ಘ್ಯಮಿದಮರ್ಘ್ಯಮಿದಮರ್ಘ್ಯಮ್\" ಎನ್ನಿ. ರಾಘವೇಂದ್ರ ಮಠದ ಪುಸ್ತಕದಲ್ಲಿ ಇದೇ ಶ್ಲೋಕ; ಮುಕ್ತಾಯ \"ದೇವಕೀಸಹಿತಾಯ ಶ್ರೀಕೃಷ್ಣಾಯ ಇದಮರ್ಘ್ಯಂ ಸಮರ್ಪಯಾಮಿ\", ಮೂರು ಬಾರಿ. ಈ ಶ್ಲೋಕ ವ್ರತರಾಜದಲ್ಲಿಯೂ ಇದೆ.",
      verses: [
        {
          text: "जातः कंसवधार्थाय भूभारोत्तारणाय च ।\nकौरवाणां विनाशाय दैत्यानां निधनाय च ॥\nपाण्डवानां हितार्थाय धर्मसंस्थापनाय च ।\nगृहाणार्घ्यं मया दत्तं देवक्या सहितो हरे ॥\nदेवकीसहिताय श्रीकृष्णाय इदमर्घ्यमिदमर्घ्यमिदमर्घ्यम् ॥",
          meaning: {
            en: "You were born to kill Kamsa and to lift the burden of the earth, to destroy the Kauravas and to end the demons, for the good of the Pandavas and to re-establish dharma. O Hari, together with Devaki, accept the arghya I give. To Sri Krishna with Devaki: this arghya, this arghya, this arghya.",
            kn: "ಕಂಸನ ವಧೆಗಾಗಿ, ಭೂಭಾರ ಇಳಿಸಲು, ಕೌರವರ ವಿನಾಶಕ್ಕಾಗಿ, ದೈತ್ಯರ ಸಂಹಾರಕ್ಕಾಗಿ, ಪಾಂಡವರ ಹಿತಕ್ಕಾಗಿ ಮತ್ತು ಧರ್ಮಸಂಸ್ಥಾಪನೆಗಾಗಿ ಹುಟ್ಟಿದ ಹರಿಯೇ, ದೇವಕಿಯೊಡನೆ ಕೂಡಿ ನಾನು ಕೊಡುವ ಅರ್ಘ್ಯವನ್ನು ಸ್ವೀಕರಿಸು. ದೇವಕೀಸಹಿತ ಶ್ರೀಕೃಷ್ಣನಿಗೆ ಇದೋ ಅರ್ಘ್ಯ, ಇದೋ ಅರ್ಘ್ಯ, ಇದೋ ಅರ್ಘ್ಯ.",
          },
        },
      ],
    },
    {
      title: "चन्द्रार्घ्यप्रदानम्",
      titleEn: "Arghya to Chandra (the moon) at moonrise",
      note: "After the arghya to Krishna go to the tulasi platform, draw a mandala and, remembering the moon in a bowl of coconut kernel, give the arghya to Chandra three times, in a conch with milk, fruit and dakshina, with a bilva leaf offered at the first verse. Madhva (Udupi pamphlet): the arghya verse reads गृहाणार्घ्यं शशाङ्केदं रोहिण्या सहितो मम. The Raghavendra Matha manual and the Smarta book give गृहाणार्घ्यं मया दत्तं रोहिण्या सहितः शशिन्; either may be used as your matha or family practice has it. After the arghya, pray to the moon and remember Paramatma within him (chandrantargata paramatma). The Kannada tatparya adds: standing, with the arghya, say that the arghya is for the moon born from the ocean of milk and from the eye of Atri, together with Rohini.",
      noteKn: "ಕೃಷ್ಣಾರ್ಘ್ಯದ ನಂತರ ತುಳಸಿಕಟ್ಟೆಯ ಬಳಿ ಮಂಡಲ ಬರೆದು, ಕೊಬ್ಬರಿ ಬಟ್ಟಲಿನಲ್ಲಿ ಚಂದ್ರನನ್ನು ಸ್ಮರಿಸುತ್ತಾ ಶಂಖದಲ್ಲಿ ಹಾಲು, ಫಲ, ದಕ್ಷಿಣೆ ಇಟ್ಟು ಚಂದ್ರನಿಗೆ ಮೂರು ಬಾರಿ ಅರ್ಘ್ಯ ಕೊಡಿ; ಮೊದಲ ಶ್ಲೋಕದಲ್ಲಿ ಬಿಲ್ವಪತ್ರೆ ಅರ್ಪಿಸಿ. ಮಾಧ್ವ (ಉಡುಪಿಯ ಕಿರುಹೊತ್ತಿಗೆ): ಅರ್ಘ್ಯ ಶ್ಲೋಕ \"ಗೃಹಾಣಾರ್ಘ್ಯಂ ಶಶಾಂಕೇದಂ ರೋಹಿಣ್ಯಾ ಸಹಿತೋ ಮಮ\". ರಾಘವೇಂದ್ರ ಮಠದ ಪುಸ್ತಕ ಮತ್ತು ಸ್ಮಾರ್ತ ಪುಸ್ತಕದಲ್ಲಿ \"ಗೃಹಾಣಾರ್ಘ್ಯಂ ಮಯಾ ದತ್ತಂ ರೋಹಿಣ್ಯಾ ಸಹಿತಃ ಶಶಿನ್\"; ಮಠ-ಕುಟುಂಬ ಸಂಪ್ರದಾಯದಂತೆ ಯಾವುದನ್ನಾದರೂ ಹೇಳಬಹುದು. ಅರ್ಘ್ಯದ ನಂತರ ಚಂದ್ರನನ್ನು ಪ್ರಾರ್ಥಿಸಿ, ಚಂದ್ರಾಂತರ್ಗತ ಪರಮಾತ್ಮನನ್ನು ಸ್ಮರಿಸಿ.",
      verses: [
        {
          text: "शशिने चन्द्रदेवाय सोमदेवाय चेन्दवे ।\nमृगिणे शितबिम्बाय लोकदीपाय दीपिने ।\nशीतदीधितिबिम्बाय तारकापतये नमः ॥",
          meaning: {
            en: "Salutations to the moon, the god Chandra, the god Soma, Indu; to him who bears the deer, of the cool disc, the lamp of the world, the shining one; to the cool-rayed orb, the lord of the stars.",
            kn: "ಶಶಿಗೆ, ಚಂದ್ರದೇವನಿಗೆ, ಸೋಮದೇವನಿಗೆ, ಇಂದುವಿಗೆ, ಮೃಗಧಾರಿಗೆ, ಶೀತಬಿಂಬನಿಗೆ, ಲೋಕದೀಪನಿಗೆ, ಪ್ರಕಾಶಿಸುವವನಿಗೆ, ಶೀತಕಿರಣ ಬಿಂಬನಿಗೆ, ತಾರಾಪತಿಗೆ ನಮಸ್ಕಾರ.",
          },
        },
        {
          text: "क्षीरोदार्णवसम्भूत अत्रिनेत्रसमुद्भव ।\nगृहाणार्घ्यं शशाङ्केदं रोहिण्या सहितो मम ॥\nरोहिणीसहिताय चन्द्रमसे इदमर्घ्यमिदमर्घ्यमिदमर्घ्यम् ॥",
          meaning: {
            en: "O moon, born of the ocean of milk and from the eye of Atri, together with Rohini, accept this arghya of mine. To the moon with Rohini: this arghya, this arghya, this arghya.",
            kn: "ಕ್ಷೀರಸಾಗರದಲ್ಲಿ ಹುಟ್ಟಿದ, ಅತ್ರಿಯ ನೇತ್ರದಿಂದ ಜನಿಸಿದ ಚಂದ್ರನೇ, ರೋಹಿಣಿಯೊಡನೆ ಕೂಡಿ ನನ್ನ ಈ ಅರ್ಘ್ಯವನ್ನು ಸ್ವೀಕರಿಸು. ರೋಹಿಣೀಸಹಿತ ಚಂದ್ರನಿಗೆ ಇದೋ ಅರ್ಘ್ಯ, ಇದೋ ಅರ್ಘ್ಯ, ಇದೋ ಅರ್ಘ್ಯ.",
          },
          when: {
            tradition: [
              "madhva",
            ],
          },
        },
        {
          text: "क्षीरोदार्णवसम्भूत अत्रिनेत्रसमुद्भव ।\nगृहाणार्घ्यं मया दत्तं रोहिण्या सहितः शशिन् ॥\nरोहिणीसहिताय चन्द्रमसे इदमर्घ्यं समर्पयामि ॥",
          meaning: {
            en: "O moon, born of the ocean of milk and from the eye of Atri, accept the arghya I give, together with Rohini. To the moon with Rohini I offer this arghya.",
            kn: "ಕ್ಷೀರಸಾಗರದಲ್ಲಿ ಹುಟ್ಟಿದ, ಅತ್ರಿಯ ನೇತ್ರದಿಂದ ಜನಿಸಿದ ಚಂದ್ರನೇ, ರೋಹಿಣಿಯೊಡನೆ ಕೂಡಿ ನಾನು ಕೊಡುವ ಅರ್ಘ್ಯವನ್ನು ಸ್ವೀಕರಿಸು. ರೋಹಿಣೀಸಹಿತ ಚಂದ್ರನಿಗೆ ಈ ಅರ್ಘ್ಯವನ್ನು ಸಮರ್ಪಿಸುತ್ತೇನೆ.",
          },
          when: {
            tradition: [
              "smarta",
            ],
          },
        },
        {
          text: "ज्योतिष्मते नमस्तुभ्यं नमस्ते ज्योतिषां पते ।\nनमस्ते रोहिणीकान्त सुधाकर नमोऽस्तु ते ॥",
          meaning: {
            en: "Salutations to you, the radiant one; salutations to you, lord of the lights; salutations to you, beloved of Rohini, maker of nectar.",
            kn: "ಜ್ಯೋತಿರ್ಮಯನೇ ನಿನಗೆ ನಮಸ್ಕಾರ; ಜ್ಯೋತಿಗಳ ಒಡೆಯನೇ ನಿನಗೆ ನಮಸ್ಕಾರ; ರೋಹಿಣೀಕಾಂತನೇ, ಸುಧಾಕರನೇ ನಿನಗೆ ನಮಸ್ಕಾರ.",
          },
        },
      ],
    },
    {
      title: "समापनं पारणं च",
      titleEn: "Closing, resting and parana",
      note: "After the arghya, close the puja with यस्य स्मृत्या and the samarpana verse कायेन वाचा of the Shodashopachara Puja, then: अनेन … श्रीगोपालकृष्णः प्रीयताम् (Madhva: with the guru and Mukhyaprana named in the Raghavendra Matha form). Say the shayana formula and rest. Next morning bathe, do japa and puja, give dakshina as you can, say the parana formula and break the fast with tirtha and naivedya; then say the samapana formula to close the vrata. The Jayantikalpa of Madhvacharya (as explained in the Kannada tatparya) says: the fast is for all, brahmanas and others, especially Vaishnavas; one who eats on this day incurs sin; one worships Krishna at night, offers arghya at moonrise, and breaks the fast the next morning after the puja and dakshina.",
      noteKn: "ಅರ್ಘ್ಯದ ನಂತರ \"ಯಸ್ಯ ಸ್ಮೃತ್ಯಾ\" ಮತ್ತು \"ಕಾಯೇನ ವಾಚಾ\" ಸಮರ್ಪಣ ಶ್ಲೋಕದೊಡನೆ ಪೂಜೆ ಮುಗಿಸಿ: \"ಅನೇನ … ಶ್ರೀಗೋಪಾಲಕೃಷ್ಣಃ ಪ್ರೀಯತಾಮ್\" (ರಾಘವೇಂದ್ರ ಮಠದ ರೂಪದಲ್ಲಿ ಗುರು-ಮುಖ್ಯಪ್ರಾಣರ ನಾಮ ಸಹಿತ). ಶಯನ ಮಂತ್ರ ಹೇಳಿ ಮಲಗಿ. ಮರುದಿನ ಬೆಳಿಗ್ಗೆ ಸ್ನಾನ, ಜಪ, ಪೂಜೆ ಮಾಡಿ ಶಕ್ತ್ಯನುಸಾರ ದಕ್ಷಿಣೆ ಕೊಟ್ಟು, ಪಾರಣೆ ಮಂತ್ರ ಹೇಳಿ ತೀರ್ಥ-ನೈವೇದ್ಯದೊಡನೆ ಉಪವಾಸ ಮುಗಿಸಿ; ಸಮಾಪನ ಮಂತ್ರದಿಂದ ವ್ರತವನ್ನು ಮುಗಿಸಿ. ಮಧ್ವಾಚಾರ್ಯರ ಜಯಂತೀಕಲ್ಪದ (ಕನ್ನಡ ತಾತ್ಪರ್ಯದ) ಪ್ರಕಾರ ಬ್ರಾಹ್ಮಣರು, ವಿಶೇಷವಾಗಿ ವೈಷ್ಣವರು ಎಲ್ಲರೂ ಉಪವಾಸ ಮಾಡಬೇಕು; ಆ ದಿನ ಊಟ ಮಾಡಿದವನಿಗೆ ಪಾಪ; ರಾತ್ರಿ ಕೃಷ್ಣನನ್ನು ಪೂಜಿಸಿ, ಚಂದ್ರೋದಯದಲ್ಲಿ ಅರ್ಘ್ಯ ಕೊಟ್ಟು, ಮರುದಿನ ಪೂಜೆ-ದಕ್ಷಿಣೆಯ ನಂತರ ಪಾರಣೆ.",
      verses: [
        {
          text: "विश्वाय विश्वपतये विश्वेश्वराय\nविश्वसम्भवाय श्रीगोविन्दाय नमो नमः ॥",
          meaning: {
            en: "Salutations again and again to Sri Govinda, who is the universe, the lord of the universe, the ruler of the universe and the source of the universe. (Said before resting.)",
            kn: "ವಿಶ್ವಸ್ವರೂಪನಿಗೆ, ವಿಶ್ವಪತಿಗೆ, ವಿಶ್ವೇಶ್ವರನಿಗೆ, ವಿಶ್ವಸಂಭವನಿಗೆ ಶ್ರೀಗೋವಿಂದನಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ. (ಮಲಗುವ ಮೊದಲು.)",
          },
        },
        {
          text: "सर्वाय सर्वपतये सर्वेश्वराय\nसर्वसम्भवाय श्रीगोविन्दाय नमो नमः ॥",
          meaning: {
            en: "Salutations again and again to Sri Govinda, who is all, the lord of all, the ruler of all and the source of all. (Said at the parana.)",
            kn: "ಸರ್ವಸ್ವರೂಪನಿಗೆ, ಸರ್ವಪತಿಗೆ, ಸರ್ವೇಶ್ವರನಿಗೆ, ಸರ್ವಸಂಭವನಿಗೆ ಶ್ರೀಗೋವಿಂದನಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ. (ಪಾರಣೆಯ ಸಮಯದಲ್ಲಿ.)",
          },
        },
        {
          text: "धर्माय धर्मपतये धर्मेश्वराय\nधर्मसम्भवाय श्रीगोविन्दाय नमो नमः ॥",
          meaning: {
            en: "Salutations again and again to Sri Govinda, who is dharma, the lord of dharma, the ruler of dharma and the source of dharma. (Said to close the vrata.)",
            kn: "ಧರ್ಮಸ್ವರೂಪನಿಗೆ, ಧರ್ಮಪತಿಗೆ, ಧರ್ಮೇಶ್ವರನಿಗೆ, ಧರ್ಮಸಂಭವನಿಗೆ ಶ್ರೀಗೋವಿಂದನಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ. (ವ್ರತ ಸಮಾಪ್ತಿಯಲ್ಲಿ.)",
          },
        },
      ],
    },
  ],
};
