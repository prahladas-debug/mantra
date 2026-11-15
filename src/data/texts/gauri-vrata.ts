/**
 * Swarna Gauri Vrata (Bhadrapada shukla tritiya): the Madhva puja of Swarna Gauri with a 16-knot
 * dora, and the Smarta points where it differs. Only what is specific to this vrata is given;
 * the common steps are in the app's Shodashopachara Puja text. Collated Nov 2026.
 *
 * WITNESSES
 *   VM  Vrata Muktavali, ed. Vid. Venkatanarasimhacharya Rajapurohit, Sri Raghavendra Swami Matha,
 *       Mantralaya 2005 (Kannada script), "Sri Swarna Gauri Puja Paddhati", pp. 108-132
 *       (archive.org Vrata_Muktaavali_-_Raghavendra_Swami_Matha_Mantralya_). Madhva. The 16 names of
 *       the knots were read from the page images of pp. 124-125, because the OCR drops one line.
 *   R   Satika Vrata Ratnamala (Kannada script, Smarta; archive.org satika-vrata-ratnamala),
 *       "Swarna Gauri Vrata Kalpa" and the Skanda Purana katha, pp. 43-57.
 *   N   stotranidhi.com "Sri Gowri Pooja Vidhanam" (Telugu script; a general Gauri puja), consulted
 *       for the Smarta structure only.
 *
 * CHOICES
 *   Sankalpa (Madhva): VM. Smarta: R (its text is partly damaged in the scan; the clauses given are
 *   those legible in R and shared with the standard Gauri sankalpa of N).
 *   Dhyana (Madhva) अक्षमालाभयाब्जानि: VM only; the scan shows ब्दानि, read as ब्जानि (lotus), the
 *   sense required by the list of what the Goddess holds. Smarta dhyana and avahana verses differ
 *   between books and are not given; only the name formula is.
 *   Dora verses भक्तप्रिये महादेवि and करिष्यामि व्रतं देवि: VM and R. Granthi names: VM.
 *   Vayana verses: VM and R. Katha: retold in the note from R (Skanda Purana, Skanda-Shiva samvada).
 *
 */
import type { Mantra } from '../types';

export const gauriVrata: Mantra = {
  id: "gauri-vrata",
  title: "श्रीस्वर्णगौरीव्रतपूजा",
  titleEn: "Swarna Gauri Vrata",
  category: "puja",
  deity: "Sri Swarna Gauri (Parvati)",
  source: "Skanda Purana katha; Vrata Muktavali (Raghavendra Matha), Satika Vrata Ratnamala",
  summary: "The worship of Swarna Gauri on Bhadrapada shukla tritiya, the day before Ganesha Chaturthi, by women (and families) for lasting marital well-being and children: sankalpa, dhyana and avahana, the thread (dora) with sixteen knots worshipped knot by knot, dhupa, dipa, naivedya, prayer, tying the thread, the vayana gift, and the katha of King Chandraprabha and his two queens.",
  summaryKn: "ಗಣೇಶ ಚತುರ್ಥಿಯ ಹಿಂದಿನ ದಿನ ಭಾದ್ರಪದ ಶುಕ್ಲ ತೃತೀಯಾದಂದು ಸ್ತ್ರೀಯರು (ಕುಟುಂಬದವರು) ದೀರ್ಘ ಸೌಮಂಗಲ್ಯ ಮತ್ತು ಸಂತಾನಕ್ಕಾಗಿ ಮಾಡುವ ಸ್ವರ್ಣಗೌರೀ ಪೂಜೆ: ಸಂಕಲ್ಪ, ಧ್ಯಾನ, ಆವಾಹನೆ, ಹದಿನಾರು ಗಂಟಿನ ದೋರದ ಗ್ರಂಥಿಪೂಜೆ, ಧೂಪ, ದೀಪ, ನೈವೇದ್ಯ, ಪ್ರಾರ್ಥನೆ, ದೋರಬಂಧನ, ವಾಯನದಾನ ಮತ್ತು ಚಂದ್ರಪ್ರಭ ರಾಜನ ಇಬ್ಬರು ರಾಣಿಯರ ಕಥೆ.",
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
  contentNote: "Gives only what is specific to this vrata. Acamana, pranayama, desha-kala sankalpa, Mahaganapati puja, kalasha puja and the sixteen upacharas are as in the Shodashopachara Puja text, with the deity name changed. Left out: prana-pratishtha, the Gauri ashtottara (read it from your manual), the Smarta dhyana and avahana verses (books differ), the Vedic avahana mantra, the udyapana, and the Sanskrit verses of the Skanda Purana katha, which are retold in the note of the last section because only a damaged scan was available.",
  sections: [
    {
      title: "सङ्कल्पः",
      titleEn: "Sankalpa (Madhva)",
      note: "Swarna Gauri is worshipped on Bhadrapada shukla tritiya (if the tritiya overlaps the chaturthi, follow the panchanga and your matha). Prepare a kalasha of silver or copper with a Lakshmi (Gauri) face drawn in turmeric and kumkuma, a coconut, a new thread with sixteen strands and sixteen knots smeared with kumkuma, sixteen fruits, flowers and betel leaves. Do the family shalagrama puja first, then Mahaganapati puja, kalasha puja and prana-pratishtha. In the Madhva manner the goddess is worshipped as a form in which Sri Hari as Sankarshana, husband of Jaya, dwells (Jayapati Sankarshana). Wording of the Raghavendra Matha manual.",
      noteKn: "ಭಾದ್ರಪದ ಶುಕ್ಲ ತೃತೀಯಾದಂದು ಸ್ವರ್ಣಗೌರೀ ಪೂಜೆ (ತದಿಗೆ ಚೌತಿಯೊಡನೆ ಸೇರಿದರೆ ಪಂಚಾಂಗ ಮತ್ತು ಮಠದ ಕ್ರಮದಂತೆ). ಬೆಳ್ಳಿ ಅಥವಾ ತಾಮ್ರದ ಕಲಶಕ್ಕೆ ಅರಿಶಿನ-ಕುಂಕುಮದಿಂದ ಲಕ್ಷ್ಮೀಮುಖ ಬರೆದು ಅಲಂಕರಿಸಿ, ತೆಂಗಿನಕಾಯಿ, ಹದಿನಾರು ಎಳೆ-ಹದಿನಾರು ಗಂಟಿನ ಕುಂಕುಮಲೇಪಿತ ಹೊಸ ದಾರ, ಹದಿನಾರು ಹಣ್ಣು, ಹೂವು, ವೀಳ್ಯದೆಲೆಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಿ. ಮೊದಲು ಮನೆಯ ಸಾಲಿಗ್ರಾಮ ಪೂಜೆ, ನಂತರ ಮಹಾಗಣಪತಿ ಪೂಜೆ, ಕಲಶಪೂಜೆ, ಪ್ರಾಣಪ್ರತಿಷ್ಠೆ. ಮಾಧ್ವ ಕ್ರಮದಲ್ಲಿ ದೇವಿಯ ಅಂತರ್ಗತನಾದ ಜಯಾಪತಿ ಸಂಕರ್ಷಣ ರೂಪಿ ಶ್ರೀಹರಿಯ ಪೂಜೆ. ರಾಘವೇಂದ್ರ ಮಠದ ಪುಸ್ತಕದ ಪಾಠ.",
      when: {
        tradition: [
          "madhva",
        ],
      },
      verses: [
        {
          text: "अस्माकं सकुटुम्बानां क्षेमस्थैर्यविजयवीर्यायुरारोग्यैश्वर्याभिवृद्ध्यर्थं\nधर्मार्थकाममोक्षाख्यचतुर्विधपुरुषार्थसिद्ध्यर्थं\nस्त्रीपुत्रपौत्रधनविद्याजयकीर्त्यायुरारोग्याद्यखिलाभीष्टसिद्ध्यर्थं\nसत्सन्तानचिरकालसौमङ्गल्यसिद्ध्यर्थं ज्ञानभक्तिवैराग्यसिद्ध्यर्थं\nपरमात्मनि अचलभक्तिसिद्ध्यर्थं श्रीमद्राघवेन्द्रतीर्थगुर्वन्तर्गत\nस्वर्णगौर्यन्तर्गतभारतीरमणमुख्यप्राणान्तर्गत\nश्रीजयापतिसङ्कर्षणप्रेरणया श्रीजयापतिसङ्कर्षणप्रीत्यर्थं\nस्वर्णगौर्याः ध्यानावाहनादिषोडशोपचारपूजां करिष्ये ॥",
          meaning: {
            en: "For the growth of well-being, steadiness, victory, vigour, long life, health and prosperity for us and our family; for the four aims of life; for every wish such as wife, sons, grandsons, wealth, learning, victory, fame, long life and health; for good children and long-lasting marital auspiciousness; for knowledge, devotion and detachment; for unwavering devotion to the Supreme: prompted by and for the pleasure of Sri Jayapati Sankarshana, who dwells in Mukhyaprana, who dwells in Swarna Gauri, who dwells in my guru Sri Raghavendra Tirtha, I shall perform the sixteen-step worship of Swarna Gauri beginning with meditation and invocation.",
            kn: "ನಮಗೂ ನಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ಕ್ಷೇಮ, ಸ್ಥೈರ್ಯ, ವಿಜಯ, ವೀರ್ಯ, ಆಯುಷ್ಯ, ಆರೋಗ್ಯ, ಐಶ್ವರ್ಯಗಳ ವೃದ್ಧಿಗಾಗಿ; ಧರ್ಮ-ಅರ್ಥ-ಕಾಮ-ಮೋಕ್ಷ ಎಂಬ ನಾಲ್ಕು ಪುರುಷಾರ್ಥಗಳ ಸಿದ್ಧಿಗಾಗಿ; ಸ್ತ್ರೀ, ಪುತ್ರ, ಪೌತ್ರ, ಧನ, ವಿದ್ಯೆ, ಜಯ, ಕೀರ್ತಿ, ಆಯುಷ್ಯ, ಆರೋಗ್ಯ ಮೊದಲಾದ ಎಲ್ಲ ಇಷ್ಟಾರ್ಥಗಳ ಸಿದ್ಧಿಗಾಗಿ; ಉತ್ತಮ ಸಂತಾನ ಮತ್ತು ಚಿರಕಾಲದ ಸೌಮಂಗಲ್ಯಕ್ಕಾಗಿ; ಜ್ಞಾನ-ಭಕ್ತಿ-ವೈರಾಗ್ಯಗಳಿಗಾಗಿ; ಪರಮಾತ್ಮನಲ್ಲಿ ಅಚಲ ಭಕ್ತಿಗಾಗಿ; ಶ್ರೀರಾಘವೇಂದ್ರತೀರ್ಥ ಗುರುಗಳ ಅಂತರ್ಗತ, ಸ್ವರ್ಣಗೌರಿಯ ಅಂತರ್ಗತ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣನ ಅಂತರ್ಗತ ಶ್ರೀಜಯಾಪತಿ ಸಂಕರ್ಷಣನ ಪ್ರೇರಣೆಯಿಂದ ಅವನ ಪ್ರೀತಿಗಾಗಿ ಸ್ವರ್ಣಗೌರಿಯ ಧ್ಯಾನ-ಆವಾಹನಾದಿ ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.",
          },
        },
      ],
    },
    {
      title: "सङ्कल्पः",
      titleEn: "Sankalpa (Smarta)",
      note: "Swarna Gauri is worshipped on Bhadrapada shukla tritiya; if the tritiya overlaps the chaturthi, the Smarta books say to keep the vrata on the tritiya that is joined to the chaturthi (so the Smarta and Madhva dates can differ; follow your panchanga). Some people worship a painted Gauri, some a golden image, some a goddess invoked in a kalasha, according to family custom. Prepare the thread with sixteen strands and knots, sixteen fruits and betel leaves. Do ganapati puja, kalasha puja and prana-pratishtha first.",
      noteKn: "ಭಾದ್ರಪದ ಶುಕ್ಲ ತೃತೀಯಾದಂದು ಸ್ವರ್ಣಗೌರೀ ವ್ರತ; ತದಿಗೆ ಚೌತಿಯೊಡನೆ ಸೇರಿದರೆ ಚೌತಿಯ ವಾಸನೆಯುಳ್ಳ ತದಿಗೆಯಲ್ಲೇ ವ್ರತವೆಂದು ಸ್ಮಾರ್ತ ಗ್ರಂಥಗಳು ಹೇಳುತ್ತವೆ (ಆದ್ದರಿಂದ ಸ್ಮಾರ್ತ-ಮಾಧ್ವ ದಿನಾಂಕ ಬೇರೆಯಾಗಬಹುದು; ಪಂಚಾಂಗ ನೋಡಿ). ಕುಲಾಚಾರದಂತೆ ಕೆಲವರು ಬಣ್ಣದ ಗೌರಿ, ಕೆಲವರು ಸ್ವರ್ಣ ಗೌರಿ, ಕೆಲವರು ಕಲಶದಲ್ಲಿ ಆವಾಹಿಸಿದ ಗೌರಿಯನ್ನು ಪೂಜಿಸುತ್ತಾರೆ. ಹದಿನಾರು ಎಳೆ-ಗಂಟಿನ ದಾರ, ಹದಿನಾರು ಹಣ್ಣು, ವೀಳ್ಯದೆಲೆ ಸಿದ್ಧಪಡಿಸಿ. ಮೊದಲು ಗಣಪತಿ ಪೂಜೆ, ಕಲಶಪೂಜೆ, ಪ್ರಾಣಪ್ರತಿಷ್ಠೆ.",
      when: {
        tradition: [
          "smarta",
        ],
      },
      verses: [
        {
          text: "मम यावज्जीवं दीर्घसौमङ्गल्याभिवृद्ध्यर्थं\nपुत्रपौत्राभिवृद्ध्यर्थं मम वाञ्छाफलसिद्धिद्वारा\nश्रीस्वर्णगौरीदेवतामुद्दिश्य श्रीस्वर्णगौरीप्रीत्यर्थं\nकल्पोक्तप्रकारेण यावच्छक्ति\nध्यानावाहनादिषोडशोपचारपूजां करिष्ये ॥",
          meaning: {
            en: "For the growth of long-lasting marital auspiciousness for me through all my life, and of sons and grandsons, and for the fulfilment of my wishes, I shall perform, as far as I am able and as the vrata kalpa teaches, the sixteen-step worship beginning with meditation and invocation, dedicated to the goddess Sri Swarna Gauri and for her pleasure.",
            kn: "ನನ್ನ ಜೀವನಪರ್ಯಂತ ದೀರ್ಘ ಸೌಮಂಗಲ್ಯ ಮತ್ತು ಪುತ್ರ-ಪೌತ್ರರ ವೃದ್ಧಿಗಾಗಿ, ನನ್ನ ಇಷ್ಟಫಲಸಿದ್ಧಿಗಾಗಿ, ಶ್ರೀಸ್ವರ್ಣಗೌರೀ ದೇವತೆಯನ್ನು ಉದ್ದೇಶಿಸಿ ಅವಳ ಪ್ರೀತಿಗಾಗಿ ಕಲ್ಪದಲ್ಲಿ ಹೇಳಿದಂತೆ ಯಥಾಶಕ್ತಿ ಧ್ಯಾನ-ಆವಾಹನಾದಿ ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.",
          },
        },
      ],
    },
    {
      title: "ध्यानावाहनम्",
      titleEn: "Dhyana and avahana",
      note: "Offer flowers and akshata to the kalasha or image. The Madhva dhyana verse is below. For the avahana, Madhva books use the verse below (preceded by a Vedic mantra, gaurir mimaya salilani takshati, from the Rigveda) and then name the Lord within the goddess. In the Smarta manuals the dhyana and avahana verses differ from book to book; say the verses your manual gives, with the formula ॐ श्रीस्वर्णगौर्यै नमः । ध्यायामि । आवाहयामि ॥. Then place the new thread before the goddess and continue with the sixteen upacharas of the Shodashopachara Puja up to the offering of flowers, the ashtottara and the granthi puja.",
      noteKn: "ಕಲಶ ಅಥವಾ ಮೂರ್ತಿಗೆ ಹೂವು-ಅಕ್ಷತೆ ಅರ್ಪಿಸಿ. ಮಾಧ್ವ ಧ್ಯಾನ ಶ್ಲೋಕ ಕೆಳಗಿದೆ. ಆವಾಹನೆಗೆ ಮಾಧ್ವ ಗ್ರಂಥಗಳಲ್ಲಿ ಕೆಳಗಿನ ಶ್ಲೋಕ (ಅದಕ್ಕೆ ಮೊದಲು ಋಗ್ವೇದದ \"ಗೌರೀರ್ಮಿಮಾಯ ಸಲಿಲಾನಿ ತಕ್ಷತಿ\" ಮಂತ್ರ) ಮತ್ತು ದೇವಿಯ ಅಂತರ್ಗತ ಭಗವಂತನ ನಾಮ. ಸ್ಮಾರ್ತ ಪುಸ್ತಕಗಳಲ್ಲಿ ಧ್ಯಾನ-ಆವಾಹನ ಶ್ಲೋಕಗಳು ಪುಸ್ತಕದಿಂದ ಪುಸ್ತಕಕ್ಕೆ ಬೇರೆ; ನಿಮ್ಮ ಪುಸ್ತಕದಲ್ಲಿರುವ ಶ್ಲೋಕಗಳನ್ನು \"ಓಂ ಶ್ರೀಸ್ವರ್ಣಗೌರ್ಯೈ ನಮಃ, ಧ್ಯಾಯಾಮಿ, ಆವಾಹಯಾಮಿ\" ಎಂದು ಹೇಳಿ. ನಂತರ ಹೊಸ ದಾರವನ್ನು ದೇವಿಯ ಮುಂದಿಟ್ಟು, ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯಂತೆ ಹೂವಿನ ಅರ್ಪಣೆ, ಅಷ್ಟೋತ್ತರ, ಗ್ರಂಥಿಪೂಜೆಯವರೆಗೆ ಮುಂದುವರಿಸಿ.",
      verses: [
        {
          text: "अक्षमालाभयाब्जानि करैः शूलं च बिभ्रतीम् ।\nस्वर्णरत्नधरां देवीं दिव्यमौक्तिकधारिणीम् ॥\nपूर्णेन्दुवदनां देवीं कोटिसूर्यसमप्रभाम् ।\nरत्नसंयुक्तहारां च ब्रह्मसूत्रेण शोभिताम् ॥\nरुद्राणीं रुद्रवामाङ्गीं शङ्करीं लोकशङ्करीम् ।\nसमस्तलोकजननीं स्वर्णगौरीं नमाम्यहम् ॥",
          meaning: {
            en: "I bow to Swarna Gauri, who holds in her hands a rosary, the sign of fearlessness, a lotus and a trident; who wears gold and gems and splendid pearls; the goddess with a face like the full moon, shining like a crore of suns, with a jewelled necklace and the sacred thread; Rudrani, the left half of Rudra, Shankari, the bringer of welfare to the worlds, mother of all the worlds.",
            kn: "ಕೈಗಳಲ್ಲಿ ಅಕ್ಷಮಾಲೆ, ಅಭಯ, ಕಮಲ, ತ್ರಿಶೂಲಗಳನ್ನು ಧರಿಸಿದ, ಚಿನ್ನ-ರತ್ನಗಳನ್ನೂ ದಿವ್ಯ ಮುತ್ತುಗಳನ್ನೂ ಧರಿಸಿದ, ಪೂರ್ಣಚಂದ್ರನಂತಹ ಮುಖದ, ಕೋಟಿ ಸೂರ್ಯರ ಪ್ರಭೆಯ, ರತ್ನಹಾರ ಮತ್ತು ಬ್ರಹ್ಮಸೂತ್ರದಿಂದ ಶೋಭಿಸುವ, ರುದ್ರಾಣಿ, ರುದ್ರನ ವಾಮಾಂಗಿ, ಶಂಕರಿ, ಲೋಕಶಂಕರಿ, ಸಮಸ್ತ ಲೋಕಗಳ ಜನನಿಯಾದ ಸ್ವರ್ಣಗೌರಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ.",
          },
          when: {
            tradition: [
              "madhva",
            ],
          },
        },
        {
          text: "आगच्छ देवि देवेशि मर्त्यलोकहितेच्छया ।\nसुव्रतं भवतु क्षिप्रं मम पूजां गृहाण भोः ॥\nआवाहयामि त्वां देवि पूजार्थं शिववल्लभे ।\nदयां कुरु मयि प्रीत्या स्थिरा भव हरप्रिये ॥",
          meaning: {
            en: "Come, O goddess, queen of the gods, out of wish for the good of the mortal world; let this vow be fruitful soon; accept my worship. I invite you, O goddess beloved of Shiva, for this worship; show me kindness, with love; be steady here, dear to Hara.",
            kn: "ದೇವಿಯೇ, ದೇವೇಶಿಯೇ, ಮರ್ತ್ಯಲೋಕದ ಹಿತವನ್ನು ಬಯಸಿ ಬಾ; ವ್ರತವು ಬೇಗ ಸಫಲವಾಗಲಿ; ನನ್ನ ಪೂಜೆಯನ್ನು ಸ್ವೀಕರಿಸು. ಶಿವವಲ್ಲಭೆಯೇ, ಪೂಜೆಗಾಗಿ ನಿನ್ನನ್ನು ಆವಾಹಿಸುತ್ತೇನೆ; ಪ್ರೀತಿಯಿಂದ ನನ್ನ ಮೇಲೆ ದಯೆ ತೋರು; ಹರಪ್ರಿಯೇ, ಇಲ್ಲಿ ಸ್ಥಿರವಾಗಿರು.",
          },
          when: {
            tradition: [
              "madhva",
            ],
          },
        },
        {
          text: "श्रीस्वर्णगौर्यन्तर्गतभारतीरमणमुख्यप्राणान्तर्गतश्रीजयापतिसङ्कर्षणाय नमः ।\nध्यायामि । आवाहयामि ॥",
          meaning: {
            en: "Salutations to Sri Jayapati Sankarshana, who dwells in Mukhyaprana, who dwells in Swarna Gauri; I meditate on him and invoke him.",
            kn: "ಸ್ವರ್ಣಗೌರಿಯ ಅಂತರ್ಗತ ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣನ ಅಂತರ್ಗತ ಶ್ರೀಜಯಾಪತಿ ಸಂಕರ್ಷಣನಿಗೆ ನಮಸ್ಕಾರ; ಧ್ಯಾನಿಸುತ್ತೇನೆ, ಆವಾಹಿಸುತ್ತೇನೆ.",
          },
          when: {
            tradition: [
              "madhva",
            ],
          },
        },
        {
          text: "ॐ श्रीस्वर्णगौर्यै नमः ।\nध्यायामि । आवाहयामि ॥",
          meaning: {
            en: "Om, salutations to Sri Swarna Gauri; I meditate on her and invoke her.",
            kn: "ಓಂ ಶ್ರೀಸ್ವರ್ಣಗೌರ್ಯೈ ನಮಃ; ಧ್ಯಾನಿಸುತ್ತೇನೆ, ಆವಾಹಿಸುತ್ತೇನೆ.",
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
      title: "नूतनदोरस्थापनम्",
      titleEn: "Placing the new thread (dora)",
      note: "Place the thread (16 strands, 16 knots, smeared with kumkuma) in a plate with two betel leaves before the goddess and say this. (The introductory note of the Smarta book mentions a thread of fourteen knots, but its own katha speaks of sixteen strands, as here.)",
      noteKn: "ಹದಿನಾರು ಎಳೆ, ಹದಿನಾರು ಗಂಟಿನ, ಕುಂಕುಮ ಲೇಪಿತ ದಾರವನ್ನು ಎರಡು ವೀಳ್ಯದೆಲೆಯೊಡನೆ ತಟ್ಟೆಯಲ್ಲಿ ದೇವಿಯ ಮುಂದಿಟ್ಟು ಈ ಶ್ಲೋಕ ಹೇಳಿ. (ಸ್ಮಾರ್ತ ಪುಸ್ತಕದ ಪೀಠಿಕೆಯಲ್ಲಿ ಹದಿನಾಲ್ಕು ಗಂಟಿನ ದಾರದ ಉಲ್ಲೇಖವಿದೆ, ಆದರೆ ಅದರ ಕಥೆಯಲ್ಲಿ ಹದಿನಾರು ಎಳೆ ಎಂದಿದೆ; ಇಲ್ಲಿ ಹದಿನಾರು.)",
      verses: [
        {
          text: "देव्यास्तु पुरतः सम्यङ्नवसूत्रं प्रकल्पये ।\nग्रन्थिषोडशकोपेतं कुङ्कुमेन विराजितम् ॥",
          meaning: {
            en: "Before the goddess I properly arrange the new thread, with its sixteen knots, shining with kumkuma.",
            kn: "ದೇವಿಯ ಮುಂದೆ ಹದಿನಾರು ಗಂಟುಗಳಿಂದ ಕೂಡಿದ, ಕುಂಕುಮದಿಂದ ಶೋಭಿಸುವ ಹೊಸ ದಾರವನ್ನು ಚೆನ್ನಾಗಿ ಇಡುತ್ತೇನೆ.",
          },
        },
      ],
    },
    {
      title: "दोरग्रन्थिपूजा",
      titleEn: "Worship of the sixteen knots",
      note: "With each name offer a little akshata to the corresponding knot of the thread, saying the knot number.",
      noteKn: "ಪ್ರತಿ ನಾಮಕ್ಕೆ ದಾರದ ಆಯಾ ಗಂಟಿಗೆ ಸ್ವಲ್ಪ ಅಕ್ಷತೆ ಹಾಕಿ, ಗಂಟಿನ ಸಂಖ್ಯೆಯನ್ನು ಹೇಳಿ.",
      verses: [
        {
          text: "शिवायै नमः । प्रथमग्रन्थिं पूजयामि ।\nभवान्यै नमः । द्वितीयग्रन्थिं पूजयामि ।\nरुद्राण्यै नमः । तृतीयग्रन्थिं पूजयामि ।\nगिरिजायै नमः । चतुर्थग्रन्थिं पूजयामि ।\nकान्तायै नमः । पञ्चमग्रन्थिं पूजयामि ।\nहरकान्तायै नमः । षष्ठग्रन्थिं पूजयामि ।\nसिंहवाहनायै नमः । सप्तमग्रन्थिं पूजयामि ।\nअम्बिकायै नमः । अष्टमग्रन्थिं पूजयामि ॥",
          meaning: {
            en: "Salutations to Shiva (the auspicious one): I worship the first knot; to Bhavani: the second; to Rudrani: the third; to Girija, daughter of the mountain: the fourth; to Kanta, the beloved: the fifth; to Harakanta, beloved of Hara: the sixth; to her who rides a lion: the seventh; to Ambika, the mother: the eighth.",
            kn: "ಶಿವೆಗೆ ಮೊದಲನೆಯ ಗಂಟು, ಭವಾನಿಗೆ ಎರಡನೆಯ, ರುದ್ರಾಣಿಗೆ ಮೂರನೆಯ, ಗಿರಿಜೆಗೆ ನಾಲ್ಕನೆಯ, ಕಾಂತೆಗೆ ಐದನೆಯ, ಹರಕಾಂತೆಗೆ ಆರನೆಯ, ಸಿಂಹವಾಹನೆಗೆ ಏಳನೆಯ, ಅಂಬಿಕೆಗೆ ಎಂಟನೆಯ ಗಂಟನ್ನು ಪೂಜಿಸುತ್ತೇನೆ.",
          },
          when: {
            tradition: [
              "madhva",
            ],
          },
        },
        {
          text: "विशालवक्षःस्थलायै नमः । नवमग्रन्थिं पूजयामि ।\nलोकधारिण्यै नमः । दशमग्रन्थिं पूजयामि ।\nकुम्भस्तन्यै नमः । एकादशग्रन्थिं पूजयामि ।\nनीलकण्ठप्रियायै नमः । द्वादशग्रन्थिं पूजयामि ।\nमन्दस्मितायै नमः । त्रयोदशग्रन्थिं पूजयामि ।\nउत्पलाक्ष्यै नमः । चतुर्दशग्रन्थिं पूजयामि ।\nलोकवन्दितायै नमः । पञ्चदशग्रन्थिं पूजयामि ।\nस्वर्णगौर्यै नमः । षोडशग्रन्थिं पूजयामि ॥",
          meaning: {
            en: "Salutations to her of the broad breast: I worship the ninth knot; to the sustainer of the world: the tenth; to her of pitcher-like breasts: the eleventh; to the beloved of the blue-throated Shiva: the twelfth; to her of gentle smile: the thirteenth; to the lotus-eyed: the fourteenth; to her whom the worlds adore: the fifteenth; to Swarna Gauri: the sixteenth.",
            kn: "ವಿಶಾಲವಕ್ಷಸ್ಥಲೆಗೆ ಒಂಬತ್ತನೆಯ ಗಂಟು, ಲೋಕಧಾರಿಣಿಗೆ ಹತ್ತನೆಯ, ಕುಂಭಸ್ತನಿಗೆ ಹನ್ನೊಂದನೆಯ, ನೀಲಕಂಠಪ್ರಿಯೆಗೆ ಹನ್ನೆರಡನೆಯ, ಮಂದಸ್ಮಿತೆಗೆ ಹದಿಮೂರನೆಯ, ಉತ್ಪಲಾಕ್ಷಿಗೆ ಹದಿನಾಲ್ಕನೆಯ, ಲೋಕವಂದಿತೆಗೆ ಹದಿನೈದನೆಯ, ಸ್ವರ್ಣಗೌರಿಗೆ ಹದಿನಾರನೆಯ ಗಂಟನ್ನು ಪೂಜಿಸುತ್ತೇನೆ.",
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
      title: "धूपदीपनैवेद्यानि",
      titleEn: "Dhupa, dipa and naivedya",
      note: "Continue with the offerings of the Shodashopachara Puja, using these verses. Offer the naivedya first to the Lord, then to Lakshmi and Vayu, then serve a plate to Gauri (VM).",
      noteKn: "ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯಂತೆ ಮುಂದುವರಿಸಿ, ಈ ಶ್ಲೋಕಗಳನ್ನು ಹೇಳಿ. ನೈವೇದ್ಯವನ್ನು ಮೊದಲು ಪರಮಾತ್ಮನಿಗೆ, ನಂತರ ಲಕ್ಷ್ಮೀದೇವಿಗೂ ವಾಯುದೇವರಿಗೂ, ಅನಂತರ ಪ್ರತ್ಯೇಕ ತಟ್ಟೆಯಲ್ಲಿ ಗೌರಿಗೆ ನಿವೇದಿಸಿ (ವ್ರತಮುಕ್ತಾವಲಿ).",
      verses: [
        {
          text: "दशाङ्गं गुग्गुलोपेतं सुगन्धं च मनोहरम् ।\nधूपं दास्यामि देवेशि स्वर्णगौरि गृहाण तम् ॥",
          meaning: {
            en: "I give incense of ten ingredients, with guggula, fragrant and charming. O queen of the gods, Swarna Gauri, accept it.",
            kn: "ಗುಗ್ಗುಳ ಸೇರಿದ ದಶಾಂಗ, ಸುಗಂಧ, ಮನೋಹರವಾದ ಧೂಪವನ್ನು ಕೊಡುತ್ತೇನೆ; ದೇವೇಶಿ ಸ್ವರ್ಣಗೌರಿಯೇ, ಅದನ್ನು ಸ್ವೀಕರಿಸು.",
          },
        },
        {
          text: "घृताक्तवर्तिसंयुक्तमन्धकारविनाशकम् ।\nदीपं दास्यामि ते देवि गृहाण मुदिता भव ॥",
          meaning: {
            en: "I give you, O goddess, a lamp with a wick soaked in ghee that destroys darkness; accept it and be glad.",
            kn: "ದೇವಿಯೇ, ತುಪ್ಪದಲ್ಲಿ ಅದ್ದಿದ ಬತ್ತಿಯಿಂದ ಕೂಡಿದ, ಕತ್ತಲೆಯನ್ನು ನಾಶಮಾಡುವ ದೀಪವನ್ನು ನಿನಗೆ ಕೊಡುತ್ತೇನೆ; ಸ್ವೀಕರಿಸಿ ಸಂತುಷ್ಟಳಾಗು.",
          },
        },
        {
          text: "नैवेद्यं षड्रसोपेतं दधिमध्वाज्यसंयुतम् ।\nनानाभक्ष्यफलोपेतं गृहाण हरवल्लभे ॥\nअन्नं चतुर्विधं स्वादु रसैः षड्भिः समन्वितम् ।\nभक्ष्यभोज्यसमायुक्तं नैवेद्यं प्रतिगृह्यताम् ॥",
          meaning: {
            en: "O beloved of Hara, accept this naivedya with the six tastes, with curd, honey and ghee, with many sweets and fruits. Let this food of four kinds, tasty, with the six flavours, with things to chew and to eat, be accepted as naivedya.",
            kn: "ಹರವಲ್ಲಭೆಯೇ, ಆರು ರಸಗಳಿಂದ ಕೂಡಿದ, ಮೊಸರು-ಜೇನು-ತುಪ್ಪ ಸೇರಿದ, ನಾನಾ ಭಕ್ಷ್ಯ-ಫಲಗಳಿಂದ ಕೂಡಿದ ನೈವೇದ್ಯವನ್ನು ಸ್ವೀಕರಿಸು. ಆರು ರಸಗಳಿಂದ ಕೂಡಿದ ರುಚಿಯಾದ ನಾಲ್ಕು ವಿಧದ ಅನ್ನ, ಭಕ್ಷ್ಯ-ಭೋಜ್ಯಗಳಿಂದ ಕೂಡಿದ ನೈವೇದ್ಯವನ್ನು ಸ್ವೀಕರಿಸಲಿ.",
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
      title: "प्रार्थना दोरबन्धनं च",
      titleEn: "Prayer and tying the thread",
      note: "Pray with folded hands. Then hold the thread and say the first verse; as it is tied on the right wrist (women often wear it on the right arm; some tie it round the neck) say the second. Place one thread beside the goddess and give another with tambula and dakshina to a married woman (suvasini), then have the husband tie yours, holding a fruit. The Madhva manual repeats the first verse for tying, the Smarta one repeats the prayer verse; both are given.",
      noteKn: "ಕೈಜೋಡಿಸಿ ಪ್ರಾರ್ಥಿಸಿ. ನಂತರ ದಾರವನ್ನು ಕೈಯಲ್ಲಿ ಹಿಡಿದು ಮೊದಲ ಶ್ಲೋಕ ಹೇಳಿ; ಬಲಗೈಗೆ ಕಟ್ಟುವಾಗ ಎರಡನೆಯದು (ಕೆಲವರು ಕತ್ತಿಗೆ ಧರಿಸುತ್ತಾರೆ). ಒಂದು ದಾರವನ್ನು ದೇವಿಯ ಬಳಿ ಇಟ್ಟು, ತಾಂಬೂಲ-ದಕ್ಷಿಣೆಯೊಂದಿಗೆ ಇನ್ನೊಂದನ್ನು ಮುತ್ತೈದೆಗೆ ಕೊಟ್ಟು, ಕೈಯಲ್ಲಿ ಫಲ ಹಿಡಿದು ಪತಿಯಿಂದ ಕಟ್ಟಿಸಿಕೊಳ್ಳಿ.",
      verses: [
        {
          text: "करिष्यामि व्रतं देवि त्वद्भक्त्या त्वत्परायणा ।\nवाञ्छितं देहि मे नित्यं त्वयि भक्तिमचञ्चलाम् ॥\nपुत्रान्देहि धनं देहि सौभाग्यं देहि सुव्रते ।\nअन्यांश्च सर्वकामांश्च देहि देवि नमोऽस्तु ते ॥",
          meaning: {
            en: "O goddess, I shall keep this vow with devotion to you, wholly devoted to you; always grant me what I wish, and steady devotion to you. Give sons, give wealth, give good fortune, O keeper of vows; and give all other wishes too. O goddess, salutations to you.",
            kn: "ದೇವಿಯೇ, ನಿನ್ನ ಭಕ್ತಿಯಿಂದ, ನಿನ್ನಲ್ಲೇ ನಿಷ್ಠಳಾಗಿ ವ್ರತವನ್ನು ಮಾಡುತ್ತೇನೆ; ನನ್ನ ಇಷ್ಟವನ್ನೂ ನಿನ್ನಲ್ಲಿ ಅಚಂಚಲ ಭಕ್ತಿಯನ್ನೂ ಸದಾ ನೀಡು. ಸುವ್ರತೆಯೇ, ಪುತ್ರರನ್ನು, ಧನವನ್ನು, ಸೌಭಾಗ್ಯವನ್ನು ಕೊಡು; ಮತ್ತು ಉಳಿದ ಎಲ್ಲ ಇಷ್ಟಗಳನ್ನು ಕೊಡು; ದೇವಿಯೇ ನಿನಗೆ ನಮಸ್ಕಾರ.",
          },
        },
        {
          text: "भक्तप्रिये महादेवि सर्वैश्वर्यप्रदायिनि ।\nसूत्रं ते धारयिष्यामि ममाभीष्टं सदा कुरु ॥",
          meaning: {
            en: "O great goddess, fond of your devotees, giver of every prosperity, I shall wear your thread; always fulfil my wish.",
            kn: "ಭಕ್ತಪ್ರಿಯೆಯೇ, ಮಹಾದೇವಿಯೇ, ಸರ್ವೈಶ್ವರ್ಯಗಳನ್ನು ಕೊಡುವವಳೇ, ನಿನ್ನ ಸೂತ್ರವನ್ನು ಧರಿಸುತ್ತೇನೆ; ನನ್ನ ಇಷ್ಟವನ್ನು ಸದಾ ನೆರವೇರಿಸು.",
          },
        },
        {
          text: "करिष्यामि व्रतं देवि त्वद्भक्त्या त्वत्परायणा ।\nसूत्रं बध्नामि सुभगे सर्वसम्पत्समृद्धये ॥",
          meaning: {
            en: "O goddess, with devotion to you I shall keep the vow, wholly devoted to you; O fortunate one, I tie the thread for the abundance of all prosperity.",
            kn: "ದೇವಿಯೇ, ನಿನ್ನ ಭಕ್ತಿಯಿಂದ ನಿನ್ನಲ್ಲೇ ನಿಷ್ಠಳಾಗಿ ವ್ರತವನ್ನು ಮಾಡುತ್ತೇನೆ; ಸುಭಗೆಯೇ, ಸರ್ವ ಸಂಪತ್ತಿನ ಸಮೃದ್ಧಿಗಾಗಿ ಸೂತ್ರವನ್ನು ಕಟ್ಟಿಕೊಳ್ಳುತ್ತೇನೆ.",
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
      title: "वायनदानम्",
      titleEn: "Vayana dana",
      note: "After the puja honour a brahmana (or a married woman) with a vayana: rice in a plantain leaf or winnowing tray with two coconuts, five betel leaves and areca nuts, fruits and dakshina, covered with another leaf. Say the first verse over it, then the second; the giver says दत्तं न मम (given, not mine) and the receiver says प्रतिगृह्णामि. This is the form of the Madhva manual; the Smarta book has the same two verses with a gift of twelve (or sixteen) cakes, and its own udyapana after sixteen years.",
      noteKn: "ಪೂಜೆಯ ನಂತರ ಬ್ರಾಹ್ಮಣನಿಗೆ (ಅಥವಾ ಮುತ್ತೈದೆಗೆ) ವಾಯನ ದಾನ: ಬಾಳೆಎಲೆ ಅಥವಾ ಮೊರದಲ್ಲಿ ಅಕ್ಕಿ, ಎರಡು ತೆಂಗಿನಕಾಯಿ, ಐದು ವೀಳ್ಯದೆಲೆ-ಅಡಿಕೆ, ಹಣ್ಣು, ದಕ್ಷಿಣೆಯನ್ನಿಟ್ಟು ಇನ್ನೊಂದು ಎಲೆಯಿಂದ ಮುಚ್ಚಿ, ಮೊದಲ ಶ್ಲೋಕ, ನಂತರ ಎರಡನೆಯದನ್ನು ಹೇಳಿ; ಕೊಡುವವರು \"ದತ್ತಂ ನ ಮಮ\" ಎನ್ನುತ್ತಾರೆ, ಸ್ವೀಕರಿಸುವವರು \"ಪ್ರತಿಗೃಹ್ಣಾಮಿ\". ಇದು ಮಾಧ್ವ ಪುಸ್ತಕದ ಕ್ರಮ; ಸ್ಮಾರ್ತ ಪುಸ್ತಕದಲ್ಲಿ ಇದೇ ಎರಡು ಶ್ಲೋಕಗಳೊಡನೆ ಹನ್ನೆರಡು (ಅಥವಾ ಹದಿನಾರು) ಕಡುಬುಗಳ ದಾನ, ಹದಿನಾರು ವರ್ಷಗಳ ನಂತರ ಉದ್ಯಾಪನ.",
      verses: [
        {
          text: "गृहाणेदं द्विजश्रेष्ठ वायनं दक्षिणान्वितम् ।\nभवान्याश्च महादेव्याः व्रतसम्पूर्तिहेतवे ।\nप्रीतये द्विजवर्याय वायनं प्रददाम्यहम् ॥",
          meaning: {
            en: "O best of the twice-born, accept this vayana with dakshina. For the completion of the vow of Bhavani, the great goddess, and for the pleasure of this excellent brahmana, I give the vayana.",
            kn: "ದ್ವಿಜಶ್ರೇಷ್ಠನೇ, ದಕ್ಷಿಣೆಯೊಡನೆ ಕೂಡಿದ ಈ ವಾಯನವನ್ನು ಸ್ವೀಕರಿಸು. ಮಹಾದೇವಿ ಭವಾನಿಯ ವ್ರತದ ಸಂಪೂರ್ಣತೆಗಾಗಿ, ದ್ವಿಜಶ್ರೇಷ್ಠನ ಪ್ರೀತಿಗಾಗಿ ವಾಯನವನ್ನು ಕೊಡುತ್ತೇನೆ.",
          },
        },
        {
          text: "भवानी प्रतिगृह्णाति भवानी वै ददाति च ।\nभवानी तारका द्वाभ्यां स्वर्णगौर्यै नमो नमः ॥",
          meaning: {
            en: "Bhavani receives, and Bhavani gives; Bhavani saves both the giver and the receiver. Salutations again and again to Swarna Gauri.",
            kn: "ಭವಾನಿಯೇ ಸ್ವೀಕರಿಸುತ್ತಾಳೆ, ಭವಾನಿಯೇ ಕೊಡುತ್ತಾಳೆ; ಭವಾನಿಯು ಇಬ್ಬರನ್ನೂ ತಾರಿಸುತ್ತಾಳೆ. ಸ್ವರ್ಣಗೌರಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.",
          },
        },
      ],
    },
    {
      title: "समर्पणं कथा च",
      titleEn: "Samarpana and the katha",
      note: "Close with यस्य स्मृत्या and the samarpana verse of the Shodashopachara Puja, then: अनेन स्वर्णगौरीपूजनेन … श्रीजयापतिसङ्कर्षणः प्रीयताम् (Madhva) or श्रीस्वर्णगौरी सुप्रीता सुप्रसन्ना वरदा भवतु (Smarta). Then read or hear the katha. The Skanda Purana katha (told by Shiva to Skanda; sung by Suta to Shaunaka, and told by Krishna to Yudhishthira) runs thus. In the city of Vimala on the Sarasvati, King Chandraprabha had two queens, and loved the elder more. Hunting in the forest he came to a lake where apsarases were worshipping Gauri on Bhadrapada shukla tritiya with a sixteen-knot thread and sixteen fruits, flowers and betel. They taught him the vrata, to be kept sixteen years and closed with an udyapana, and he tied the thread on his right arm. At home he urged both queens to keep it. The elder scorned the vow, tore the thread off his arm and threw it on a dry tree; by its touch the tree turned green and fruitful. Seeing this, the younger queen took the thread, kept the vow with devotion and lived in happiness with sons and grandsons. The elder lost her wealth, wandered in the forest, was rejected even by sages, and wept. Gauri took pity on her and appeared; the queen praised her, asked pardon, and with the goddess's blessing returned, kept the vow, and gained children, long married life and, in the end, union with the Goddess. Whoever hears or tells this katha gains happiness here and hereafter.",
      noteKn: "\"ಯಸ್ಯ ಸ್ಮೃತ್ಯಾ\" ಮತ್ತು ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯ ಸಮರ್ಪಣೆ ಶ್ಲೋಕದೊಡನೆ ಮುಗಿಸಿ: \"ಅನೇನ ಸ್ವರ್ಣಗೌರೀಪೂಜನೇನ … ಶ್ರೀಜಯಾಪತಿಸಂಕರ್ಷಣಃ ಪ್ರೀಯತಾಮ್\" (ಮಾಧ್ವ) ಅಥವಾ \"ಶ್ರೀಸ್ವರ್ಣಗೌರೀ ಸುಪ್ರೀತಾ ಸುಪ್ರಸನ್ನಾ ವರದಾ ಭವತು\" (ಸ್ಮಾರ್ತ). ನಂತರ ಕಥೆ ಓದಿ/ಕೇಳಿ. ಸ್ಕಾಂದಪುರಾಣದ ಕಥೆ (ಶಿವನು ಸ್ಕಂದನಿಗೆ ಹೇಳಿದ್ದು; ಸೂತನು ಶೌನಕರಿಗೆ ಹೇಳಿದ್ದು; ಕೃಷ್ಣನು ಯುಧಿಷ್ಠಿರನಿಗೆ ಹೇಳಿದ್ದು): ಸರಸ್ವತೀ ತೀರದ ವಿಮಲಾ ಪಟ್ಟಣದಲ್ಲಿ ಚಂದ್ರಪ್ರಭ ರಾಜನಿಗೆ ಇಬ್ಬರು ರಾಣಿಯರು; ಹಿರಿಯಳನ್ನು ಹೆಚ್ಚು ಪ್ರೀತಿಸುತ್ತಿದ್ದನು. ಬೇಟೆಗೆ ಹೋದಾಗ ಸರೋವರದ ಬಳಿ ಅಪ್ಸರೆಯರು ಭಾದ್ರಪದ ಶುಕ್ಲ ತದಿಗೆಯಂದು ಹದಿನಾರು ಗಂಟಿನ ದಾರ, ಹದಿನಾರು ಹಣ್ಣು-ಹೂವು-ವೀಳ್ಯಗಳಿಂದ ಗೌರಿಯನ್ನು ಪೂಜಿಸುತ್ತಿದ್ದರು. ಅವರು ಹದಿನಾರು ವರ್ಷ ಆಚರಿಸಿ ಉದ್ಯಾಪನೆ ಮಾಡುವ ವ್ರತವನ್ನು ಹೇಳಿದರು; ರಾಜನು ಬಲಗೈಗೆ ದಾರ ಕಟ್ಟಿಕೊಂಡನು. ಮನೆಗೆ ಬಂದು ಇಬ್ಬರು ರಾಣಿಯರಿಗೂ ಮಾಡಲು ಹೇಳಿದನು. ಹಿರಿಯವಳು ವ್ರತವನ್ನು ಧಿಕ್ಕರಿಸಿ ದಾರವನ್ನು ಕಿತ್ತು ಒಣಗಿದ ಮರದ ಮೇಲೆ ಎಸೆದಳು; ದಾರದ ಸ್ಪರ್ಶದಿಂದ ಮರ ಚಿಗುರಿ ಹೂ-ಹಣ್ಣಿನಿಂದ ತುಂಬಿತು. ಅದನ್ನು ನೋಡಿ ಕಿರಿಯ ರಾಣಿಯು ಆ ದಾರವನ್ನು ತೆಗೆದು ಭಕ್ತಿಯಿಂದ ವ್ರತ ಮಾಡಿ ಪುತ್ರ-ಪೌತ್ರರೊಡನೆ ಸುಖದಿಂದಿದ್ದಳು. ಹಿರಿಯವಳು ಸಂಪತ್ತನ್ನು ಕಳೆದುಕೊಂಡು ಕಾಡಿನಲ್ಲಿ ಅಲೆದು, ಋಷಿಗಳಿಂದಲೂ ತಿರಸ್ಕೃತಳಾಗಿ ಅಳುತ್ತಿದ್ದಾಗ ಗೌರಿ ಕರುಣಿಸಿ ಪ್ರತ್ಯಕ್ಷಳಾದಳು; ರಾಣಿ ಸ್ತುತಿಸಿ ಕ್ಷಮೆ ಬೇಡಿ, ವರ ಪಡೆದು ಹಿಂದಿರುಗಿ ವ್ರತ ಮಾಡಿ ಸಂತಾನ, ದೀರ್ಘ ಸೌಮಂಗಲ್ಯ ಮತ್ತು ಕೊನೆಗೆ ದೇವಿಯ ಸಾಯುಜ್ಯವನ್ನು ಪಡೆದಳು. ಈ ಕಥೆಯನ್ನು ಕೇಳುವವರು, ಹೇಳುವವರು ಇಹ-ಪರಗಳಲ್ಲಿ ಸುಖ ಪಡೆಯುತ್ತಾರೆ.",
      verses: [
        {
          text: "यस्य स्मृत्या च नामोक्त्या तपःपूजाक्रियादिषु ।\nन्यूनं सम्पूर्णतां याति सद्यो वन्दे तमच्युतम् ॥\nमन्त्रहीनं क्रियाहीनं भक्तिहीनं रमापते ।\nयत्पूजितं मया देवि परिपूर्णं तदस्तु ते ॥",
          meaning: {
            en: "I bow to Achyuta, by remembering whom and speaking whose name any lack in austerity, worship or rite is at once made complete. O lord of Rama (Lakshmi), whatever worship I have done, lacking in mantra, rite and devotion, O goddess, may it be complete for you.",
            kn: "ಯಾರ ಸ್ಮರಣೆಯಿಂದಲೂ ನಾಮೋಚ್ಚಾರಣೆಯಿಂದಲೂ ತಪಸ್ಸು, ಪೂಜೆ, ಕ್ರಿಯೆಗಳಲ್ಲಿನ ಕೊರತೆ ತಕ್ಷಣ ಪೂರ್ಣವಾಗುವುದೋ ಆ ಅಚ್ಯುತನಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ. ರಮಾಪತಿಯೇ, ಮಂತ್ರಹೀನ, ಕ್ರಿಯಾಹೀನ, ಭಕ್ತಿಹೀನವಾಗಿ ನಾನು ಮಾಡಿದ ಪೂಜೆ, ದೇವಿಯೇ, ನಿನಗೆ ಪರಿಪೂರ್ಣವಾಗಲಿ.",
          },
        },
      ],
    },
  ],
};
