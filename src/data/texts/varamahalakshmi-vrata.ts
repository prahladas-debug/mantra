/**
 * Varamahalakshmi Vrata (the Friday before Shravana purnima): kalasha puja of Sri Varamahalakshmi
 * with a thread (dora) of nine strands and knots, and the katha of Charumati. Only what is
 * specific to this vrata is given; the common steps are in the app's Shodashopachara Puja text.
 * Collated Nov 2026.
 *
 * WITNESSES
 *   VM  Vrata Muktavali, ed. Vid. Venkatanarasimhacharya Rajapurohit, Sri Raghavendra Swami Matha,
 *       Mantralaya 2005 (Kannada script), "Sri Varamahalakshmi Vratam", pp. 51-79
 *       (archive.org Vrata_Muktaavali_-_Raghavendra_Swami_Matha_Mantralya_). Madhva.
 *   N   stotranidhi.com "Sri Varalakshmi Vrata Kalpam" (Telugu script; Smarta usage of Andhra),
 *       the Telugu katha and the Smarta structure.
 *
 * CHOICES
 *   Madhva sankalpa: VM. Smarta sankalpa: N (the only Smarta witness read; wording is the common
 *   one of Smarta manuals).
 *   Dhyana/avahana: first verse of the dhyana and the avahana verse are in VM and N; the second
 *   dhyana verse differs (VM क्षीरसागरसम्भूतां; N क्षीरोदार्णवसम्भूते).
 *   Thread: nine strands, nine knots (VM N). Knot names (VM N agree on all nine).
 *   Dora namaskara and the second couplet of dora-bandhana (दारिद्र्यसागरे): VM only; the first
 *   couplet बध्नामि दक्षिणे हस्ते: VM N. Vayana dana verse इन्दिरा प्रतिगृह्णाति: VM N.
 *   Arghya क्षीरोदार्णवसम्भूते: VM only. Katha: retold from N (Skanda Purana; Suta to Shaunaka,
 *   Shiva to Parvati) and compared with the Kannada prose katha of VM.
 *   The Vedic mantras (Purusha Sukta and Sri Sukta rks with each upachara in VM) are not repeated.
 *
 */
import type { Mantra } from '../types';

export const varamahalakshmiVrata: Mantra = {
  id: "varamahalakshmi-vrata",
  title: "श्रीवरमहालक्ष्मीव्रतम्",
  titleEn: "Varamahalakshmi Vrata",
  category: "puja",
  deity: "Sri Varamahalakshmi",
  source: "Skanda Purana katha; Vrata Muktavali (Raghavendra Matha); stotranidhi Varalakshmi Vrata Kalpam",
  summary: "The worship of Sri Varamahalakshmi in a kalasha on the Friday before the Shravana full moon, kept by women for the well-being of the family: sankalpa, dhyana and avahana, the new thread (dora) of nine strands worshipped at nine knots, offerings of leaves and flowers with names of Lakshmi, arghya, prayer, tying the thread on the right wrist, the vayana gift, and the katha of Charumati.",
  summaryKn: "ಶ್ರಾವಣ ಹುಣ್ಣಿಮೆಗೆ ಮೊದಲು ಬರುವ ಶುಕ್ರವಾರ ಸ್ತ್ರೀಯರು ಕುಟುಂಬದ ಶ್ರೇಯಸ್ಸಿಗಾಗಿ ಕಲಶದಲ್ಲಿ ಮಾಡುವ ಶ್ರೀವರಮಹಾಲಕ್ಷ್ಮೀ ಪೂಜೆ: ಸಂಕಲ್ಪ, ಧ್ಯಾನ, ಆವಾಹನೆ, ಒಂಬತ್ತು ಎಳೆಯ ಹೊಸ ದೋರದ ಒಂಬತ್ತು ಗಂಟುಗಳ ಪೂಜೆ, ಲಕ್ಷ್ಮೀ ನಾಮಗಳಿಂದ ಪತ್ರ-ಪುಷ್ಪ ಪೂಜೆ, ಅರ್ಘ್ಯ, ಪ್ರಾರ್ಥನೆ, ಬಲಗೈಗೆ ದೋರಬಂಧನ, ವಾಯನದಾನ ಮತ್ತು ಚಾರುಮತಿಯ ಕಥೆ.",
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
  contentNote: "Gives only what is specific to this vrata. Acamana, pranayama, desha-kala sankalpa, Ganapati puja, kalasha puja, prana-pratishtha and the sixteen upacharas are as in the Shodashopachara Puja text, with the deity name changed (Purusha Sukta and Sri Sukta can be read from the app). Left out: the Lakshmi ashtottara (108 names, read it from your manual or the app), the full lists of leaves and flowers, Yamuna puja in the Madhva manner, the udyapana, and the Sanskrit/Telugu katha text, which is retold in the note of the last section.",
  sections: [
    {
      title: "सङ्कल्पः",
      titleEn: "Sankalpa (Madhva)",
      note: "Varamahalakshmi is worshipped on the Friday before the full moon of Shravana (or the nearest auspicious Friday). In the morning decorate a kalasha: a silver or copper pot with a mangala-sutra, ornaments, a coconut, mango leaves, with turmeric and kumkuma, set on rice in a mandapa; a Lakshmi image or face may be added. Welcome the kalasha at the door with music and arati, place it in the mandapa and do Ganesha puja and the shalagrama puja first. Madhva practice worships Lakshmi together with Narayana, in whom Hari dwells (Lakshminarayana). Wording of the Raghavendra Matha manual.",
      noteKn: "ಶ್ರಾವಣ ಹುಣ್ಣಿಮೆಗೆ ಮೊದಲು ಬರುವ ಶುಕ್ರವಾರ (ಅಥವಾ ಹತ್ತಿರದ ಶುಭ ಶುಕ್ರವಾರ) ವರಮಹಾಲಕ್ಷ್ಮೀ ಪೂಜೆ. ಬೆಳಿಗ್ಗೆ ಕಲಶವನ್ನು (ಬೆಳ್ಳಿ/ತಾಮ್ರದ ಕಲಶ, ಮಂಗಲಸೂತ್ರ, ಆಭರಣ, ತೆಂಗಿನಕಾಯಿ, ಮಾವಿನ ಎಲೆ, ಅರಿಶಿನ-ಕುಂಕುಮ) ಅಲಂಕರಿಸಿ ಮಂಟಪದಲ್ಲಿ ಅಕ್ಕಿಯ ಮೇಲಿಡಿ. ಮನೆಯ ಬಾಗಿಲಲ್ಲಿ ಮಂಗಲವಾದ್ಯ, ಆರತಿಯೊಡನೆ ಕಲಶವನ್ನು ಬರಮಾಡಿಕೊಂಡು ಮಂಟಪದಲ್ಲಿಟ್ಟು, ಮೊದಲು ಗಣಪತಿ ಪೂಜೆ ಮತ್ತು ಸಾಲಿಗ್ರಾಮ ಪೂಜೆ ಮಾಡಿ. ಮಾಧ್ವ ಕ್ರಮದಲ್ಲಿ ಲಕ್ಷ್ಮೀಯನ್ನು ನಾರಾಯಣನೊಡನೆ ಪೂಜಿಸುತ್ತಾರೆ (ಲಕ್ಷ್ಮೀನಾರಾಯಣರ ಅಂತರ್ಗತ ಹರಿ). ರಾಘವೇಂದ್ರ ಮಠದ ಪುಸ್ತಕದ ಪಾಠ.",
      when: {
        tradition: [
          "madhva",
        ],
      },
      verses: [
        {
          text: "अस्माकं सकुटुम्बानां क्षेमस्थैर्यविजयवीर्यायुरारोग्यैश्वर्याभिवृद्ध्यर्थं\nधर्मार्थकाममोक्षाख्यचतुर्विधपुरुषार्थसिद्ध्यर्थं\nस्त्रीपुत्रपौत्रधनविद्याजयकीर्त्यायुरारोग्याद्यखिलाभीष्टसिद्ध्यर्थं\nसत्सन्तानचिरकालसौमङ्गल्यसिद्ध्यर्थं ज्ञानभक्तिवैराग्यसिद्ध्यर्थं\nपरमात्मनि अचलभक्तिसिद्ध्यर्थं श्रीमद्राघवेन्द्रगुर्वन्तर्गत\nभारतीरमणमुख्यप्राणान्तर्गतश्रीलक्ष्मीनारायणस्य प्रीतिं कामयमानाः\nश्रीवरमहालक्ष्म्याः ध्यानावाहनादिषोडशोपचारपूजां करिष्ये ॥",
          meaning: {
            en: "For the growth of well-being, steadiness, victory, vigour, long life, health and prosperity for us and our family; for the four aims of life; for every wish; for good children and long-lasting marital auspiciousness; for knowledge, devotion and detachment; for unwavering devotion to the Supreme: desiring the pleasure of Sri Lakshminarayana, who dwells in Mukhyaprana, who dwells in my guru Sri Raghavendra, I shall perform the sixteen-step worship of Sri Varamahalakshmi beginning with meditation and invocation.",
            kn: "ನಮಗೂ ನಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ಕ್ಷೇಮ, ಸ್ಥೈರ್ಯ, ವಿಜಯ, ವೀರ್ಯ, ಆಯುಷ್ಯ, ಆರೋಗ್ಯ, ಐಶ್ವರ್ಯಗಳ ವೃದ್ಧಿಗಾಗಿ; ನಾಲ್ಕು ಪುರುಷಾರ್ಥಗಳ ಸಿದ್ಧಿಗಾಗಿ; ಎಲ್ಲ ಇಷ್ಟಾರ್ಥಗಳ ಸಿದ್ಧಿಗಾಗಿ; ಉತ್ತಮ ಸಂತಾನ ಮತ್ತು ಚಿರಕಾಲದ ಸೌಮಂಗಲ್ಯಕ್ಕಾಗಿ; ಜ್ಞಾನ-ಭಕ್ತಿ-ವೈರಾಗ್ಯಗಳಿಗಾಗಿ; ಪರಮಾತ್ಮನಲ್ಲಿ ಅಚಲ ಭಕ್ತಿಗಾಗಿ; ಶ್ರೀರಾಘವೇಂದ್ರ ಗುರುಗಳ ಅಂತರ್ಗತ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣನ ಅಂತರ್ಗತ ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣನ ಪ್ರೀತಿಯನ್ನು ಬಯಸಿ ಶ್ರೀವರಮಹಾಲಕ್ಷ್ಮಿಯ ಧ್ಯಾನ-ಆವಾಹನಾದಿ ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.",
          },
        },
      ],
    },
    {
      title: "सङ्कल्पः",
      titleEn: "Sankalpa (Smarta)",
      note: "Varalakshmi Vratam is kept on the Friday before the full moon of Shravana. Decorate a kalasha (rice, mango leaves or five leaves, coconut, cloth, a Lakshmi face) on a mandapa smeared with cow-dung or on a decorated stool, with new rice spread beneath. Do Ganapati puja first, then the kalasha puja and prana-pratishtha. Women tie the nine-strand thread on the right wrist after the puja.",
      noteKn: "ಶ್ರಾವಣ ಹುಣ್ಣಿಮೆಗೆ ಮೊದಲು ಬರುವ ಶುಕ್ರವಾರ ವರಲಕ್ಷ್ಮೀ ವ್ರತ. ಹೊಸ ಅಕ್ಕಿ ಹರಡಿದ ಮಂಟಪದಲ್ಲಿ ಕಲಶ (ಅಕ್ಕಿ, ಮಾವಿನ ಎಲೆ ಅಥವಾ ಪಂಚಪಲ್ಲವ, ತೆಂಗಿನಕಾಯಿ, ವಸ್ತ್ರ, ಲಕ್ಷ್ಮೀಮುಖ) ಇಟ್ಟು ಅಲಂಕರಿಸಿ. ಮೊದಲು ಗಣಪತಿ ಪೂಜೆ, ನಂತರ ಕಲಶಪೂಜೆ, ಪ್ರಾಣಪ್ರತಿಷ್ಠೆ. ಪೂಜೆಯ ನಂತರ ಒಂಬತ್ತು ಎಳೆಯ ದಾರವನ್ನು ಬಲಗೈಗೆ ಕಟ್ಟಿಕೊಳ್ಳುತ್ತಾರೆ.",
      when: {
        tradition: [
          "smarta",
        ],
      },
      verses: [
        {
          text: "अस्माकं सहकुटुम्बानां क्षेमस्थैर्यविजयायुरारोग्यैश्वर्याभिवृद्ध्यर्थं\nधर्मार्थकाममोक्षचतुर्विधपुरुषार्थफलसिद्ध्यर्थं\nसत्सन्तानसौभाग्यफलावाप्त्यर्थं\nश्रीवरलक्ष्मीदेवतामुद्दिश्य श्रीवरलक्ष्मीदेवताप्रीत्यर्थं\nकल्पोक्तविधानेन यावच्छक्ति\nध्यानावाहनादिषोडशोपचारपूजां करिष्ये ॥",
          meaning: {
            en: "For the growth of well-being, steadiness, victory, long life, health and prosperity for us and our family; for the fruit of the four aims of life; for good children and the fruit of good fortune, dedicated to the goddess Sri Varalakshmi and for her pleasure, I shall perform, as far as I am able and as the vrata kalpa teaches, the sixteen-step worship beginning with meditation and invocation.",
            kn: "ನಮಗೂ ನಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ಕ್ಷೇಮ, ಸ್ಥೈರ್ಯ, ವಿಜಯ, ಆಯುಷ್ಯ, ಆರೋಗ್ಯ, ಐಶ್ವರ್ಯಗಳ ವೃದ್ಧಿಗಾಗಿ; ಧರ್ಮ-ಅರ್ಥ-ಕಾಮ-ಮೋಕ್ಷ ಎಂಬ ನಾಲ್ಕು ಪುರುಷಾರ್ಥ ಫಲಸಿದ್ಧಿಗಾಗಿ; ಸತ್ಸಂತಾನ ಮತ್ತು ಸೌಭಾಗ್ಯ ಫಲಪ್ರಾಪ್ತಿಗಾಗಿ; ಶ್ರೀವರಲಕ್ಷ್ಮೀ ದೇವತೆಯನ್ನು ಉದ್ದೇಶಿಸಿ ಅವಳ ಪ್ರೀತಿಗಾಗಿ ಕಲ್ಪದಲ್ಲಿ ಹೇಳಿದ ವಿಧಾನದಂತೆ ಯಥಾಶಕ್ತಿ ಧ್ಯಾನ-ಆವಾಹನಾದಿ ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.",
          },
        },
      ],
    },
    {
      title: "ध्यानावाहनम्",
      titleEn: "Dhyana and avahana",
      note: "Offer tulasi or flowers and akshata to the kalasha while meditating and inviting. In the Madhva manual each of these is preceded by Vedic mantras (a rik of the Purusha Sukta and a rik of the Sri Sukta: sahasrashirsha purusha…, hiranyavarnam harinim…, and purusha evedam…, tam ma avaha jatavedo…); in Smarta practice Sri Sukta is read in the puja. After the avahana, continue with the Shodashopachara Puja (asana to pradakshina) and Sri Sukta or Purusha Sukta.",
      noteKn: "ಧ್ಯಾನ ಮತ್ತು ಆವಾಹನೆಗಳಲ್ಲಿ ತುಳಸಿ ಅಥವಾ ಹೂವು-ಅಕ್ಷತೆಗಳನ್ನು ಕಲಶಕ್ಕೆ ಸಮರ್ಪಿಸಿ. ಮಾಧ್ವ ಪುಸ್ತಕದಲ್ಲಿ ಇವುಗಳ ಮೊದಲು ವೇದಮಂತ್ರಗಳಿವೆ (ಪುರುಷಸೂಕ್ತದ ಒಂದು ಋಕ್ ಮತ್ತು ಶ್ರೀಸೂಕ್ತದ ಒಂದು ಋಕ್: ಸಹಸ್ರಶೀರ್ಷಾ…, ಹಿರಣ್ಯವರ್ಣಾಂ ಹರಿಣೀಂ…, ಪುರುಷ ಏವೇದಂ…, ತಾಂ ಮ ಆವಹ ಜಾತವೇದೋ…); ಸ್ಮಾರ್ತ ಕ್ರಮದಲ್ಲಿ ಪೂಜೆಯಲ್ಲಿ ಶ್ರೀಸೂಕ್ತ ಪಾರಾಯಣ. ಆವಾಹನೆಯ ನಂತರ ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯಂತೆ (ಆಸನದಿಂದ ಪ್ರದಕ್ಷಿಣೆಯವರೆಗೆ) ಮುಂದುವರಿಸಿ.",
      verses: [
        {
          text: "पद्मासने पद्मकरे सर्वलोकैकपूजिते ।\nनारायणप्रिये देवि सुप्रीता भव सर्वदा ॥",
          meaning: {
            en: "O goddess seated on a lotus, lotus in hand, worshipped alone by all the worlds, beloved of Narayana, be well pleased always.",
            kn: "ಪದ್ಮಾಸನೆಯೇ, ಪದ್ಮಹಸ್ತೆಯೇ, ಸರ್ವಲೋಕಗಳಿಂದ ಏಕಮಾತ್ರ ಪೂಜಿತಳೇ, ನಾರಾಯಣಪ್ರಿಯೆಯೇ, ದೇವಿಯೇ, ಸದಾ ಸುಪ್ರೀತಳಾಗು.",
          },
        },
        {
          text: "क्षीरसागरसम्भूतां क्षीरवर्णसमप्रभाम् ।\nक्षीरवर्णसमं वस्त्रं दधानां हरिवल्लभाम् ॥",
          meaning: {
            en: "I meditate on her who was born of the ocean of milk, bright as the colour of milk, wearing a garment as white as milk, the beloved of Hari.",
            kn: "ಕ್ಷೀರಸಾಗರದಲ್ಲಿ ಹುಟ್ಟಿದ, ಹಾಲಿನ ಬಣ್ಣದ ಕಾಂತಿಯ, ಹಾಲಿನಂತಹ ಬಿಳಿಯ ವಸ್ತ್ರವನ್ನು ಧರಿಸಿದ ಹರಿವಲ್ಲಭೆಯನ್ನು ಧ್ಯಾನಿಸುತ್ತೇನೆ.",
          },
          when: {
            tradition: [
              "madhva",
            ],
          },
        },
        {
          text: "क्षीरोदार्णवसम्भूते कमले कमलालये ।\nसुस्थिरा भव मे गेहे सुरासुरनमस्कृते ॥",
          meaning: {
            en: "O lotus-goddess, born of the ocean of milk, dwelling in the lotus, worshipped by gods and demons, remain steady in my house.",
            kn: "ಕ್ಷೀರಸಾಗರದಲ್ಲಿ ಹುಟ್ಟಿದ, ಕಮಲದಲ್ಲಿ ನೆಲೆಸಿದ, ದೇವ-ದಾನವರಿಂದ ನಮಸ್ಕೃತಳಾದ ಕಮಲೆಯೇ, ನನ್ನ ಮನೆಯಲ್ಲಿ ಸ್ಥಿರಳಾಗಿರು.",
          },
          when: {
            tradition: [
              "smarta",
            ],
          },
        },
        {
          text: "सर्वमङ्गलमाङ्गल्ये विष्णुवक्षःस्थलालये ।\nआवाहयामि देवि त्वां सुप्रीता भव सर्वदा ॥",
          meaning: {
            en: "O auspiciousness of all that is auspicious, who dwell on the breast of Vishnu, I invoke you, O goddess; be well pleased always.",
            kn: "ಸರ್ವಮಂಗಲಗಳಿಗೂ ಮಂಗಲ ರೂಪಳೇ, ವಿಷ್ಣುವಿನ ವಕ್ಷಃಸ್ಥಲದಲ್ಲಿ ನೆಲೆಸಿದವಳೇ, ದೇವಿಯೇ, ನಿನ್ನನ್ನು ಆವಾಹಿಸುತ್ತೇನೆ; ಸದಾ ಸುಪ್ರೀತಳಾಗು.",
          },
        },
        {
          text: "श्रीलक्ष्मीनारायणाभ्यां नमः ।\nश्रीवरमहालक्ष्म्यै नमः । ध्यायामि । आवाहयामि ॥",
          meaning: {
            en: "Salutations to Lakshmi and Narayana. Salutations to Sri Varamahalakshmi; I meditate on her and invoke her.",
            kn: "ಲಕ್ಷ್ಮೀನಾರಾಯಣರಿಗೆ ನಮಸ್ಕಾರ. ಶ್ರೀವರಮಹಾಲಕ್ಷ್ಮಿಗೆ ನಮಸ್ಕಾರ; ಧ್ಯಾನಿಸುತ್ತೇನೆ, ಆವಾಹಿಸುತ್ತೇನೆ.",
          },
        },
      ],
    },
    {
      title: "नूतनदोरस्थापनं ग्रन्थिपूजा च",
      titleEn: "The new thread and the nine knots",
      note: "Soak a thread of nine strands (VM: nine or twelve) in turmeric, tie nine knots, smear it with kumkuma and place it on betel leaves to the right of the goddess. With each name offer akshata to one knot. After this, offer leaves with Lakshmi names (the Madhva manual lists 21 beginning with इन्दिरायै नमः, पद्मपत्रं and following), flowers, and the Lakshmi ashtottara; women may do kumkuma-archana with the 108 names. Dhupa, dipa, naivedya and the other upacharas follow as in the Shodashopachara Puja; the Madhva naivedya is offered first to Hari, then to Lakshmi and Vayu.",
      noteKn: "ಒಂಬತ್ತು ಎಳೆಯ (ವ್ರತಮುಕ್ತಾವಲಿಯಲ್ಲಿ ಒಂಬತ್ತು ಅಥವಾ ಹನ್ನೆರಡು) ದಾರವನ್ನು ಅರಿಶಿನದಲ್ಲಿ ನೆನೆಸಿ, ಒಂಬತ್ತು ಗಂಟು ಹಾಕಿ, ಕುಂಕುಮ ಹಚ್ಚಿ, ವೀಳ್ಯದೆಲೆಯ ಮೇಲೆ ದೇವಿಯ ಬಲಭಾಗದಲ್ಲಿಡಿ. ಪ್ರತಿ ನಾಮಕ್ಕೆ ಒಂದು ಗಂಟಿಗೆ ಅಕ್ಷತೆ ಹಾಕಿ. ನಂತರ ಲಕ್ಷ್ಮೀ ನಾಮಗಳಿಂದ ಪತ್ರ ಪೂಜೆ (ಮಾಧ್ವ ಪುಸ್ತಕದಲ್ಲಿ \"ಇಂದಿರಾಯೈ ನಮಃ, ಪದ್ಮಪತ್ರಂ\" ಮೊದಲಾದ ಇಪ್ಪತ್ತೊಂದು), ಪುಷ್ಪ ಪೂಜೆ, ಲಕ್ಷ್ಮೀ ಅಷ್ಟೋತ್ತರ; ಸ್ತ್ರೀಯರು ಕುಂಕುಮಾರ್ಚನೆ ಮಾಡಬಹುದು. ಧೂಪ, ದೀಪ, ನೈವೇದ್ಯ ಮೊದಲಾದ ಉಪಚಾರಗಳು ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯಂತೆ; ಮಾಧ್ವ ಕ್ರಮದಲ್ಲಿ ನೈವೇದ್ಯವನ್ನು ಮೊದಲು ಹರಿಗೆ, ನಂತರ ಲಕ್ಷ್ಮೀ-ವಾಯುವಿಗೆ ಸಮರ್ಪಿಸಬೇಕು.",
      verses: [
        {
          text: "देव्यास्तु पुरतः सम्यङ्नवसूत्रं प्रकल्पये ।\nनवग्रन्थिसमायुक्तं कुङ्कुमेन विराजितम् ॥",
          meaning: {
            en: "Before the goddess I properly arrange the new thread with its nine knots, shining with kumkuma.",
            kn: "ದೇವಿಯ ಮುಂದೆ ಒಂಬತ್ತು ಗಂಟುಗಳಿಂದ ಕೂಡಿದ, ಕುಂಕುಮದಿಂದ ಶೋಭಿಸುವ ಹೊಸ ದಾರವನ್ನು ಚೆನ್ನಾಗಿ ಇಡುತ್ತೇನೆ.",
          },
        },
        {
          text: "कमलायै नमः । प्रथमग्रन्थिं पूजयामि ।\nरमायै नमः । द्वितीयग्रन्थिं पूजयामि ।\nलोकमात्रे नमः । तृतीयग्रन्थिं पूजयामि ।\nविश्वजनन्यै नमः । चतुर्थग्रन्थिं पूजयामि ।\nमहालक्ष्म्यै नमः । पञ्चमग्रन्थिं पूजयामि ।\nक्षीराब्धितनयायै नमः । षष्ठग्रन्थिं पूजयामि ।\nविश्वसाक्षिण्यै नमः । सप्तमग्रन्थिं पूजयामि ।\nचन्द्रसोदर्यै नमः । अष्टमग्रन्थिं पूजयामि ।\nहरिवल्लभायै नमः । नवमग्रन्थिं पूजयामि ॥",
          meaning: {
            en: "Salutations to Kamala: I worship the first knot; to Rama: the second; to the mother of the world: the third; to the mother of the universe: the fourth; to Mahalakshmi: the fifth; to the daughter of the ocean of milk: the sixth; to the witness of all: the seventh; to the sister of the moon: the eighth; to the beloved of Hari: the ninth.",
            kn: "ಕಮಲೆಗೆ ಮೊದಲನೆಯ ಗಂಟು, ರಮೆಗೆ ಎರಡನೆಯ, ಲೋಕಮಾತೆಗೆ ಮೂರನೆಯ, ವಿಶ್ವಜನನಿಗೆ ನಾಲ್ಕನೆಯ, ಮಹಾಲಕ್ಷ್ಮಿಗೆ ಐದನೆಯ, ಕ್ಷೀರಾಬ್ಧಿತನಯೆಗೆ ಆರನೆಯ, ವಿಶ್ವಸಾಕ್ಷಿಣಿಗೆ ಏಳನೆಯ, ಚಂದ್ರಸೋದರಿಗೆ ಎಂಟನೆಯ, ಹರಿವಲ್ಲಭೆಗೆ ಒಂಬತ್ತನೆಯ ಗಂಟನ್ನು ಪೂಜಿಸುತ್ತೇನೆ.",
          },
        },
      ],
    },
    {
      title: "धूपदीपौ",
      titleEn: "Dhupa and dipa (Madhva)",
      note: "Offered after the ashtottara, with the name formula श्रीवरमहालक्ष्म्यै नमः । धूपमाघ्रापयामि / दीपं दर्शयामि.",
      noteKn: "ಅಷ್ಟೋತ್ತರದ ನಂತರ \"ಶ್ರೀವರಮಹಾಲಕ್ಷ್ಮ್ಯೈ ನಮಃ, ಧೂಪಮಾಘ್ರಾಪಯಾಮಿ / ದೀಪಂ ದರ್ಶಯಾಮಿ\" ಎಂದು ಈ ಶ್ಲೋಕಗಳೊಡನೆ ಅರ್ಪಿಸಿ.",
      when: {
        tradition: [
          "madhva",
        ],
      },
      verses: [
        {
          text: "दशाङ्गं गुग्गुलोपेतं सुगन्धं च मनोहरम् ।\nधूपं दास्यामि देवेशि वरलक्ष्मि गृहाण तम् ॥",
          meaning: {
            en: "I give incense of ten ingredients, with guggula, fragrant and charming. O queen of the gods, Varalakshmi, accept it.",
            kn: "ಗುಗ್ಗುಳ ಸೇರಿದ ದಶಾಂಗ, ಸುಗಂಧ, ಮನೋಹರವಾದ ಧೂಪವನ್ನು ಕೊಡುತ್ತೇನೆ; ದೇವೇಶಿ ವರಲಕ್ಷ್ಮಿಯೇ, ಅದನ್ನು ಸ್ವೀಕರಿಸು.",
          },
        },
        {
          text: "घृताक्तवर्तिसंयुक्तमन्धकारविनाशकम् ।\nदीपं दास्यामि ते देवि गृहाण मुदिता भव ॥",
          meaning: {
            en: "I give you, O goddess, a lamp with a wick soaked in ghee that destroys darkness; accept it and be glad.",
            kn: "ದೇವಿಯೇ, ತುಪ್ಪದಲ್ಲಿ ಅದ್ದಿದ ಬತ್ತಿಯಿಂದ ಕೂಡಿದ, ಕತ್ತಲೆಯನ್ನು ನಾಶಮಾಡುವ ದೀಪವನ್ನು ನಿನಗೆ ಕೊಡುತ್ತೇನೆ; ಸ್ವೀಕರಿಸಿ ಸಂತುಷ್ಟಳಾಗು.",
          },
        },
      ],
    },
    {
      title: "अर्घ्यप्रदानम्",
      titleEn: "Arghya (Madhva)",
      note: "After the naivedya and the prayer, pour water three times into the arghya vessel in front of the image, showing it with the formula below.",
      noteKn: "ನೈವೇದ್ಯ ಮತ್ತು ಪ್ರಾರ್ಥನೆಯ ನಂತರ ಮೂರು ಬಾರಿ ದೇವರಿಗೆ ತೋರಿಸಿ ಅರ್ಘ್ಯಪಾತ್ರೆಗೆ ನೀರು ಬಿಡಿ.",
      when: {
        tradition: [
          "madhva",
        ],
      },
      verses: [
        {
          text: "क्षीरोदार्णवसम्भूते विष्णुपत्नि सुशोभने ।\nविष्णुना सहिता देवि गृहाणार्घ्यं नमोऽस्तु ते ॥\nमहालक्ष्मीसहिताय नारायणाय इदमर्घ्यमिदमर्घ्यमिदमर्घ्यम् ॥",
          meaning: {
            en: "O beautiful wife of Vishnu, born of the ocean of milk, goddess together with Vishnu, accept the arghya; salutations to you. To Narayana with Mahalakshmi: this arghya, this arghya, this arghya.",
            kn: "ಕ್ಷೀರಸಾಗರದಲ್ಲಿ ಹುಟ್ಟಿದ ವಿಷ್ಣುಪತ್ನಿಯೇ, ಸುಶೋಭನೆಯೇ, ವಿಷ್ಣುವಿನೊಡನೆ ಕೂಡಿದ ದೇವಿಯೇ, ಅರ್ಘ್ಯವನ್ನು ಸ್ವೀಕರಿಸು; ನಿನಗೆ ನಮಸ್ಕಾರ. ಮಹಾಲಕ್ಷ್ಮೀಸಹಿತ ನಾರಾಯಣನಿಗೆ ಇದೋ ಅರ್ಘ್ಯ, ಇದೋ ಅರ್ಘ್ಯ, ಇದೋ ಅರ್ಘ್ಯ.",
          },
        },
      ],
    },
    {
      title: "प्रार्थना दोरबन्धनं च",
      titleEn: "Prayer, and tying the thread",
      note: "Pray with akshata and flowers in hand and offer them. Then offer one thread to the goddess and give another to a married woman; sitting facing east with a fruit in your hand and the flower used in the worship, have the thread tied on your right wrist by your husband (or by a married woman), saying the verses.",
      noteKn: "ಕೈಯಲ್ಲಿ ಮಂತ್ರಾಕ್ಷತೆ-ಹೂ ಹಿಡಿದು ಪ್ರಾರ್ಥಿಸಿ ಸಮರ್ಪಿಸಿ. ನಂತರ ಒಂದು ದಾರವನ್ನು ದೇವಿಗೆ ಅರ್ಪಿಸಿ, ಇನ್ನೊಂದನ್ನು ಮುತ್ತೈದೆಗೆ ಕೊಟ್ಟು, ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ಕುಳಿತು ಫಲ ಮತ್ತು ಪೂಜೆಯ ಹೂವನ್ನು ಹಿಡಿದು, ಪತಿಯಿಂದ (ಅಥವಾ ಮುತ್ತೈದೆಯಿಂದ) ಬಲಗೈಗೆ ದಾರ ಕಟ್ಟಿಸಿಕೊಳ್ಳುವಾಗ ಈ ಶ್ಲೋಕಗಳನ್ನು ಹೇಳಿ.",
      verses: [
        {
          text: "दीर्घमायुर्धनं धान्यं सौमङ्गल्यं च पुत्रताम् ।\nदेहि मे देवि सुप्रीते पशुपुत्रादिसम्पदः ॥\nकरिष्यामि व्रतं देवि त्वद्भक्त्या त्वत्परायणा ।\nवाञ्छितं देहि मे नित्यं हरौ भक्तिमचञ्चलाम् ॥",
          meaning: {
            en: "O well-pleased goddess, give me long life, wealth, grain, lasting marital auspiciousness, sons, and the riches of cattle and children. I shall keep this vow, devoted to you; always grant me what I wish and steady devotion to Hari.",
            kn: "ಸುಪ್ರೀತಳಾದ ದೇವಿಯೇ, ನನಗೆ ದೀರ್ಘಾಯುಸ್ಸು, ಧನ, ಧಾನ್ಯ, ಸೌಮಂಗಲ್ಯ, ಪುತ್ರರನ್ನು ಮತ್ತು ಪಶು-ಪುತ್ರಾದಿ ಸಂಪತ್ತುಗಳನ್ನು ಕೊಡು. ದೇವಿಯೇ, ನಿನ್ನ ಭಕ್ತಿಯಿಂದ ನಿನ್ನಲ್ಲೇ ನಿಷ್ಠಳಾಗಿ ವ್ರತ ಮಾಡುತ್ತೇನೆ; ನನ್ನ ಇಷ್ಟವನ್ನೂ ಹರಿಯಲ್ಲಿ ಅಚಂಚಲ ಭಕ್ತಿಯನ್ನೂ ಸದಾ ನೀಡು.",
          },
          when: {
            tradition: [
              "madhva",
            ],
          },
        },
        {
          text: "कमले दोररूपेण स्थिते सर्वाघहारिणि ।\nनमस्त्रैलोक्यजननि दारिद्र्यं मे निवारय ॥",
          meaning: {
            en: "O lotus-goddess, present in the form of the thread, remover of all sin, mother of the three worlds, salutations to you; remove my poverty.",
            kn: "ದೋರರೂಪದಲ್ಲಿ ನೆಲೆಸಿದ, ಸರ್ವಪಾಪಹಾರಿಣಿಯಾದ, ತ್ರೈಲೋಕ್ಯಜನನಿಯಾದ ಕಮಲೆಯೇ, ನಿನಗೆ ನಮಸ್ಕಾರ; ನನ್ನ ದಾರಿದ್ರ್ಯವನ್ನು ನಿವಾರಿಸು.",
          },
          when: {
            tradition: [
              "madhva",
            ],
          },
        },
        {
          text: "बध्नामि दक्षिणे हस्ते नवसूत्रं शुभप्रदम् ।\nपुत्रपौत्राभिवृद्धिं च सौभाग्यं देहि मे रमे ॥\nदारिद्र्यसागरे मग्ना भीत्वाहं भवभीतिभिः ।\nदोरं गृह्णामि कमले ममाभीष्टप्रदा भव ॥",
          meaning: {
            en: "I tie on my right hand this auspicious thread of nine strands; O Rama, give me the growth of sons and grandsons and good fortune. Sunk in an ocean of poverty and afraid of the fears of worldly life, I take this thread, O Kamala; grant my wish.",
            kn: "ಶುಭವನ್ನು ಕೊಡುವ ಒಂಬತ್ತು ಎಳೆಯ ಸೂತ್ರವನ್ನು ಬಲಗೈಗೆ ಕಟ್ಟಿಕೊಳ್ಳುತ್ತೇನೆ; ರಮೆಯೇ, ಪುತ್ರ-ಪೌತ್ರರ ವೃದ್ಧಿಯನ್ನೂ ಸೌಭಾಗ್ಯವನ್ನೂ ಕೊಡು. ದಾರಿದ್ರ್ಯ ಸಾಗರದಲ್ಲಿ ಮುಳುಗಿ, ಸಂಸಾರ ಭಯಗಳಿಂದ ಹೆದರಿದ ನಾನು, ಕಮಲೆಯೇ, ಈ ದೋರವನ್ನು ಸ್ವೀಕರಿಸುತ್ತೇನೆ; ನನ್ನ ಇಷ್ಟವನ್ನು ನೆರವೇರಿಸು.",
          },
          when: {
            tradition: [
              "madhva",
            ],
          },
        },
        {
          text: "बध्नामि दक्षिणे हस्ते नवसूत्रं शुभप्रदम् ।\nपुत्रपौत्राभिवृद्धिं च सौभाग्यं देहि मे रमे ॥",
          meaning: {
            en: "I tie on my right hand this auspicious thread of nine strands; O Rama, give me the growth of sons and grandsons and good fortune.",
            kn: "ಶುಭವನ್ನು ಕೊಡುವ ಒಂಬತ್ತು ಎಳೆಯ ಸೂತ್ರವನ್ನು ಬಲಗೈಗೆ ಕಟ್ಟಿಕೊಳ್ಳುತ್ತೇನೆ; ರಮೆಯೇ, ಪುತ್ರ-ಪೌತ್ರರ ವೃದ್ಧಿಯನ್ನೂ ಸೌಭಾಗ್ಯವನ್ನೂ ಕೊಡು.",
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
      title: "वायनदानम्",
      titleEn: "Vayana dana",
      note: "Honour a brahmana (and a married woman) and give the vayana: rice or twelve cakes (apupa) with fruit, betel and dakshina covered with a leaf. Madhva: say the first verse while worshipping the vayana, then uncover it and say the second; the giver then says the dana vakya (this vayana with dakshina and tambula … I give, not mine). Smarta: the verse एवं सम्पूज्य gives twelve cakes to the brahmana, followed by the second verse.",
      noteKn: "ಬ್ರಾಹ್ಮಣನನ್ನು (ಮತ್ತು ಮುತ್ತೈದೆಯನ್ನು) ಗೌರವಿಸಿ ವಾಯನ ಕೊಡಿ: ಅಕ್ಕಿ ಅಥವಾ ಹನ್ನೆರಡು ಕಜ್ಜಾಯ, ಹಣ್ಣು, ವೀಳ್ಯ, ದಕ್ಷಿಣೆ, ಎಲೆಯಿಂದ ಮುಚ್ಚಿ. ಮಾಧ್ವ: ವಾಯನವನ್ನು ಪೂಜಿಸುವಾಗ ಮೊದಲ ಶ್ಲೋಕ, ಎಲೆ ತೆಗೆದು ಎರಡನೆಯದು; ದಾನವಾಕ್ಯ (ಇದಂ ವಾಯನಂ ಸದಕ್ಷಿಣಾಕಂ ಸತಾಂಬೂಲಂ … ದತ್ತಂ ನ ಮಮ). ಸ್ಮಾರ್ತ: \"ಏವಂ ಸಂಪೂಜ್ಯ\" ಶ್ಲೋಕದಿಂದ ಹನ್ನೆರಡು ಅಪೂಪಗಳ ದಾನ, ನಂತರ ಎರಡನೆಯ ಶ್ಲೋಕ.",
      verses: [
        {
          text: "वायनं ते प्रदास्यामि व्रतसम्पूर्तिहेतवे ।\nप्रीतये द्विजवर्याय सहिरण्यं ददाम्यहम् ॥",
          meaning: {
            en: "I shall give you the vayana for the completion of the vow; for the pleasure of the excellent brahmana I give it with gold (dakshina).",
            kn: "ವ್ರತ ಸಂಪೂರ್ತಿಗಾಗಿ ನಿನಗೆ ವಾಯನವನ್ನು ಕೊಡುತ್ತೇನೆ; ದ್ವಿಜವರ್ಯನ ಪ್ರೀತಿಗಾಗಿ ಹಿರಣ್ಯದೊಡನೆ (ದಕ್ಷಿಣೆಯೊಡನೆ) ಕೊಡುತ್ತೇನೆ.",
          },
          when: {
            tradition: [
              "madhva",
            ],
          },
        },
        {
          text: "एवं सम्पूज्य कल्याणीं वरलक्ष्मीं स्वशक्तितः ।\nदातव्यं द्वादशापूपं वायनं हि द्विजातये ॥",
          meaning: {
            en: "Having thus worshipped the auspicious Varalakshmi as far as one can, one should give twelve cakes as vayana to a brahmana.",
            kn: "ಹೀಗೆ ಕಲ್ಯಾಣಿ ವರಲಕ್ಷ್ಮಿಯನ್ನು ಯಥಾಶಕ್ತಿ ಪೂಜಿಸಿ, ಬ್ರಾಹ್ಮಣನಿಗೆ ಹನ್ನೆರಡು ಅಪೂಪಗಳ ವಾಯನವನ್ನು ಕೊಡಬೇಕು.",
          },
          when: {
            tradition: [
              "smarta",
            ],
          },
        },
        {
          text: "इन्दिरा प्रतिगृह्णाति इन्दिरा वै ददाति च ।\nइन्दिरा तारका द्वाभ्यां इन्दिरायै नमो नमः ॥",
          meaning: {
            en: "Indira receives and Indira gives; Indira saves both. Salutations again and again to Indira (Lakshmi).",
            kn: "ಇಂದಿರೆಯೇ ಸ್ವೀಕರಿಸುತ್ತಾಳೆ, ಇಂದಿರೆಯೇ ಕೊಡುತ್ತಾಳೆ; ಇಂದಿರೆಯು ಇಬ್ಬರನ್ನೂ ತಾರಿಸುತ್ತಾಳೆ. ಇಂದಿರೆಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.",
          },
        },
      ],
    },
    {
      title: "समर्पणं कथा च",
      titleEn: "Samarpana and the katha of Charumati",
      note: "Close with यस्य स्मृत्या and the samarpana of the Shodashopachara Puja: अनेन वरमहालक्ष्मीपूजनेन … श्रीलक्ष्मीनारायणः प्रीयताम् (Madhva) or … सुप्रीता सुप्रसन्ना वरदा भवतु (Smarta). Then hold akshata and hear the katha. Suta told Shaunaka and the sages the vrata Shiva taught Parvati when she asked for a vrata that gives women every good fortune and children: the Varalakshmi vrata, on the Friday before the Shravana full moon. In the golden city of Kundina in Magadha lived Charumati, devoted to her duties and elders. Lakshmi appeared to her in a dream and told her to worship her on that Friday. Charumati and the women of the town rose early, made a kalasha with five leaves in a decorated place, invoked Varalakshmi, did the sixteen upacharas, tied the nine-strand thread on the right wrist, offered food and circled the goddess. At the first circumambulation their anklets sounded; at the second their ornaments appeared; at the third they were adorned from head to foot and their houses became golden, filled with chariots, elephants and horses. They gave vayana to the priest, shared the food with their kin, went home, and kept the vrata every year, prospering with children and grandchildren. Whoever hears or reads this katha receives the grace of Varalakshmi.",
      noteKn: "\"ಯಸ್ಯ ಸ್ಮೃತ್ಯಾ\" ಮತ್ತು ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯ ಸಮರ್ಪಣೆಯೊಂದಿಗೆ ಮುಗಿಸಿ: \"ಅನೇನ ವರಮಹಾಲಕ್ಷ್ಮೀಪೂಜನೇನ … ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣಃ ಪ್ರೀಯತಾಮ್\" (ಮಾಧ್ವ) ಅಥವಾ \"… ಸುಪ್ರೀತಾ ಸುಪ್ರಸನ್ನಾ ವರದಾ ಭವತು\" (ಸ್ಮಾರ್ತ). ನಂತರ ಅಕ್ಷತೆ ಹಿಡಿದು ಕಥೆ ಕೇಳಿ. ಸ್ತ್ರೀಯರಿಗೆ ಸರ್ವ ಸೌಭಾಗ್ಯ-ಸಂತಾನ ಕೊಡುವ ವ್ರತವನ್ನು ಪಾರ್ವತಿ ಕೇಳಿದಾಗ ಶಿವನು ಹೇಳಿದ ವರಲಕ್ಷ್ಮೀ ವ್ರತವನ್ನು (ಶ್ರಾವಣ ಹುಣ್ಣಿಮೆಗೆ ಮೊದಲಿನ ಶುಕ್ರವಾರ) ಸೂತನು ಶೌನಕಾದಿಗಳಿಗೆ ಹೇಳಿದನು. ಮಗಧ ದೇಶದ ಸುವರ್ಣಮಯ ಕುಂಡಿನ ಪಟ್ಟಣದಲ್ಲಿ ಹಿರಿಯರ ಸೇವೆ-ಗೃಹಕರ್ತವ್ಯಗಳಲ್ಲಿ ನಿರತಳಾದ ಚಾರುಮತಿ ಇದ್ದಳು. ಲಕ್ಷ್ಮೀ ಕನಸಿನಲ್ಲಿ ಬಂದು ಆ ಶುಕ್ರವಾರ ತನ್ನನ್ನು ಪೂಜಿಸಲು ಹೇಳಿದಳು. ಚಾರುಮತಿ ಮತ್ತು ಊರ ಸ್ತ್ರೀಯರು ಬೆಳಿಗ್ಗೆ ಎದ್ದು ಪಂಚಪಲ್ಲವದ ಕಲಶದಲ್ಲಿ ವರಲಕ್ಷ್ಮಿಯನ್ನು ಆವಾಹಿಸಿ ಷೋಡಶೋಪಚಾರ ಪೂಜೆ ಮಾಡಿ, ಒಂಬತ್ತು ಎಳೆಯ ದಾರವನ್ನು ಬಲಗೈಗೆ ಕಟ್ಟಿಕೊಂಡು ನೈವೇದ್ಯ ಮಾಡಿ ಪ್ರದಕ್ಷಿಣೆ ಹಾಕಿದರು. ಮೊದಲ ಪ್ರದಕ್ಷಿಣೆಯಲ್ಲಿ ಕಾಲ್ಗೆಜ್ಜೆಗಳ ಧ್ವನಿ, ಎರಡನೆಯದರಲ್ಲಿ ಆಭರಣಗಳು, ಮೂರನೆಯದರಲ್ಲಿ ಸರ್ವಾಭರಣಭೂಷಿತರಾದರು; ಅವರ ಮನೆಗಳು ಸ್ವರ್ಣಮಯವಾಗಿ ರಥ-ಆನೆ-ಕುದುರೆಗಳಿಂದ ತುಂಬಿದವು. ಅವರು ಪುರೋಹಿತನಿಗೆ ವಾಯನ ಕೊಟ್ಟು, ಬಂಧುಗಳೊಡನೆ ಪ್ರಸಾದ ಸ್ವೀಕರಿಸಿ, ಪ್ರತಿವರ್ಷ ವ್ರತ ಮಾಡುತ್ತಾ ಪುತ್ರ-ಪೌತ್ರರೊಡನೆ ಸುಖದಿಂದಿದ್ದರು. ಈ ಕಥೆಯನ್ನು ಕೇಳುವವರಿಗೆ, ಓದುವವರಿಗೆ ವರಲಕ್ಷ್ಮಿಯ ಅನುಗ್ರಹ ದೊರೆಯುತ್ತದೆ.",
      verses: [
        {
          text: "यस्य स्मृत्या च नामोक्त्या तपःपूजाक्रियादिषु ।\nन्यूनं सम्पूर्णतां याति सद्यो वन्दे तमच्युतम् ॥\nमन्त्रहीनं क्रियाहीनं भक्तिहीनं रमापते ।\nयत्कृतं तु मया देव परिपूर्णं तदस्तु मे ॥",
          meaning: {
            en: "I bow to Achyuta, by remembering whom and speaking whose name any lack in austerity, worship or rite is at once made complete. O lord of Rama (Lakshmi), whatever I have done, lacking in mantra, rite and devotion, O God, may it be complete for me.",
            kn: "ಯಾರ ಸ್ಮರಣೆಯಿಂದಲೂ ನಾಮೋಚ್ಚಾರಣೆಯಿಂದಲೂ ತಪಸ್ಸು, ಪೂಜೆ, ಕ್ರಿಯೆಗಳಲ್ಲಿನ ಕೊರತೆ ತಕ್ಷಣ ಪೂರ್ಣವಾಗುವುದೋ ಆ ಅಚ್ಯುತನಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ. ರಮಾಪತಿಯೇ, ಮಂತ್ರಹೀನ, ಕ್ರಿಯಾಹೀನ, ಭಕ್ತಿಹೀನವಾಗಿ ನಾನು ಮಾಡಿದುದು, ದೇವನೇ, ನನಗೆ ಪರಿಪೂರ್ಣವಾಗಲಿ.",
          },
        },
      ],
    },
  ],
};
