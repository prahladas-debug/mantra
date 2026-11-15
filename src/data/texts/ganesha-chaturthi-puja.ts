/**
 * Sri Ganesha Chaturthi: Sri Varasiddhi Vinayaka vrata puja, with the 21-leaf patra puja,
 * the dūrvā-yugma puja and the Syamantaka verse. Only what is specific to this vrata is given;
 * the common steps are in the app's Shodashopachara Puja text. Collated Nov 2026.
 *
 * WITNESSES
 *   VM  Vrata Muktāvalī, ed. Vid. Venkatanarasimhacharya Rajapurohit, Sri Raghavendra Swami Matha,
 *       Mantralaya 2005 (Kannada script), "Sri Varasiddhi Vinayaka Puja Paddhati", pp. 136-164
 *       (archive.org Vrata_Muktaavali_-_Raghavendra_Swami_Matha_Mantralya_). Madhva.
 *   U   Ganesha Puja Vidhi (Sri Siddhi Vinayaka Puja Vidhi), Sri Madhva Siddhanta Granthalaya,
 *       Udupi (Kannada script; archive.org siddhivinayaka-pooja-vidhi). Madhva; includes the
 *       Sanskrit Syamantakopakhyana (Skanda Purana) with Kannada meaning.
 *   R   Satika Vrata Ratnamala (Kannada script, Smarta; archive.org satika-vrata-ratnamala),
 *       Varasiddhi Vinayaka vrata kalpa, pp. 17-21.
 *   K   Sri Varasiddhi Vinayaka Vrata Kalpa (Kannada booklet, Smarta; archive.org
 *       varasiddhi-vinayaka-vrata-pooja-and-katha).
 *   N   stotranidhi.com, "Sri Siddhi Vinayaka Vrata Kalpam" parts 1-4 (Telugu script; Telugu
 *       Smarta usage), checked for the dhyana, avahana, arghya and naivedya slokas.
 *
 * CHOICES
 *   Dhyana एकदन्तं शूर्पकर्णं (VM U R N); second dhyana ध्यायेद्देवं महाकायं (VM U; Smarta books
 *   have ध्यायेद्गजाननं देवं instead, R N) with शुण्डाग्र (U; VM तुण्डाग्र).
 *   Avahana: Madhva आवाहयामि विघ्नेश … पूजार्थं गणनायक (VM U); Smarta अत्रागच्छ जगद्वन्द्य …
 *   गौरीगर्भसमुद्भव (R N). Smarta arghya गौरीपुत्र नमस्तेऽस्तु (R N).
 *   Madhva patra list (VM U; U गजकर्णाय, धत्तूर, मरुग): 21 names and leaves differ from the
 *   Smarta list (R K agree; N, a Telugu book, has a third list, not used).
 *   Dūrvā-yugma: the same ten names in VM U K and the closing śloka in VM K.
 *   Prarthana यन्मया चरितं देव … गणेश त्वं प्रसन्नः सन् (U; VM त्वत्प्रसादात् गणेश त्वं).
 *   Naivedya सुगन्धान्सुकृतांश्चैव (VM N); the 21-modaka śloka एकविंशतिसंख्याकान् is U only and is
 *   described in the note, not printed.
 *   Syamantaka śloka (VM U K R N; ह्येष U R, N "शमंतकः" not followed).
 *   The full Syamantakopakhyana (about 100 ślokas in U) is retold in the note, not reproduced.
 */
import type { Mantra } from '../types';

export const ganeshaChaturthiPuja: Mantra = {
  id: "ganesha-chaturthi-puja",
  title: "श्रीवरसिद्धिविनायकव्रतपूजा",
  titleEn: "Ganesha Chaturthi Puja (Varasiddhi Vinayaka Vrata)",
  category: "puja",
  deity: "Sri Ganesha (Varasiddhi Vinayaka)",
  source: "Vrata kalpa (Skanda Purana katha); Vrata Muktavali (Raghavendra Matha), Udupi Ganesha Puja Vidhi, Satika Vrata Ratnamala",
  summary: "The Bhadrapada shukla chaturthi worship of Sri Varasiddhi Vinayaka: sankalpa, dhyana and avahana, the offering of 21 kinds of leaves with 21 names, the pairs of durva grass with ten names, modaka naivedya, prayer, and the Syamantaka story with its verse that removes the blame of seeing the moon on this night. The common sixteen steps are those of the Shodashopachara Puja.",
  summaryKn: "ಭಾದ್ರಪದ ಶುಕ್ಲ ಚತುರ್ಥಿಯಂದು ಮಾಡುವ ಶ್ರೀವರಸಿದ್ಧಿವಿನಾಯಕ ಪೂಜೆ: ಸಂಕಲ್ಪ, ಧ್ಯಾನ, ಆವಾಹನೆ, ಇಪ್ಪತ್ತೊಂದು ನಾಮಗಳಿಂದ ಇಪ್ಪತ್ತೊಂದು ಬಗೆಯ ಪತ್ರೆಗಳ ಪೂಜೆ, ಹತ್ತು ನಾಮಗಳಿಂದ ದೂರ್ವಾಯುಗ್ಮ ಪೂಜೆ, ಮೋದಕ ನೈವೇದ್ಯ, ಪ್ರಾರ್ಥನೆ ಮತ್ತು ಈ ರಾತ್ರಿ ಚಂದ್ರನನ್ನು ನೋಡಿದ ದೋಷವನ್ನು ಕಳೆಯುವ ಸ್ಯಮಂತಕ ಕಥೆ ಹಾಗೂ ಶ್ಲೋಕ. ಉಳಿದ ಹದಿನಾರು ಉಪಚಾರಗಳು ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯಂತೆ.",
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
  contentNote: "Gives only what is specific to this vrata. Achamana, pranayama, the full desha-kala sankalpa, kalasha puja and the sixteen upacharas (asana to pradakshina) are as in the Shodashopachara Puja text, with the deity name changed. Left out: prana-pratishtha, the avarana and anga puja, the Ganesha ashtottara (read the 108 names from your manual), the vayana dana and the full Sanskrit Syamantakopakhyana, which is retold in the note to the last section instead.",
  sections: [
    {
      title: "सङ्कल्पः",
      titleEn: "Sankalpa (Madhva)",
      note: "Ganesha Chaturthi falls on Bhadrapada shukla chaturthi; in Karnataka Swarna Gauri is worshipped the day before. Bring a clay image, keep 21 modakas (kadubu), 21 kinds of leaves and durva ready, and worship the family shalagrama first. Do achamana, pranayama and the desha-kala part of the sankalpa as in the Shodashopachara Puja, then say this. In the Madhva manner the puja is offered to Sri Hari as Vishvambhara, dwelling within Vayu who dwells within Ganesha. This is the Raghavendra Matha wording; followers of other mathas name the guru their manual gives.",
      noteKn: "ಭಾದ್ರಪದ ಶುಕ್ಲ ಚತುರ್ಥಿಯಂದು ಗಣೇಶ ಚತುರ್ಥಿ; ಕರ್ನಾಟಕದಲ್ಲಿ ಹಿಂದಿನ ದಿನ ಸ್ವರ್ಣಗೌರಿ ಪೂಜೆ. ಮಣ್ಣಿನ ಮೂರ್ತಿ, ಇಪ್ಪತ್ತೊಂದು ಕಡುಬು (ಮೋದಕ), ಇಪ್ಪತ್ತೊಂದು ಬಗೆಯ ಪತ್ರೆ ಮತ್ತು ಗರಿಕೆಯನ್ನು ಸಿದ್ಧಪಡಿಸಿ; ಮೊದಲು ಮನೆಯ ಸಾಲಿಗ್ರಾಮ ಪೂಜೆ ಮಾಡಿ. ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ ಮತ್ತು ದೇಶಕಾಲ ಸಂಕೀರ್ತನೆಯನ್ನು ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯಂತೆ ಮಾಡಿ ಇದನ್ನು ಹೇಳಿ. ಮಾಧ್ವ ಕ್ರಮದಲ್ಲಿ ಗಣಪತಿಯ ಅಂತರ್ಗತ ಮುಖ್ಯಪ್ರಾಣನ ಅಂತರ್ಗತನಾದ ವಿಶ್ವಂಭರ ನಾಮಕ ಶ್ರೀಹರಿಗೆ ಪೂಜೆ. ಇದು ರಾಘವೇಂದ್ರ ಮಠದ ಪಾಠ; ಬೇರೆ ಮಠದವರು ತಮ್ಮ ಪುಸ್ತಕದಲ್ಲಿರುವ ಗುರುಗಳ ಹೆಸರನ್ನು ಹೇಳುತ್ತಾರೆ.",
      when: {
        tradition: [
          "madhva",
        ],
      },
      verses: [
        {
          text: "अस्माकं सकुटुम्बानां क्षेमस्थैर्यविजयवीर्यायुरारोग्यैश्वर्याभिवृद्ध्यर्थं\nसकलकार्येषु निर्विघ्नतासिद्धिद्वारा भगवदनुग्रहसिद्ध्यर्थं\nश्रीमद्राघवेन्द्रतीर्थगुर्वन्तर्गत श्रीसिद्धिविनायकान्तर्गत\nभारतीरमणमुख्यप्राणान्तर्गत श्रीविश्वम्भरमूर्तिप्रेरणया\nश्रीविश्वम्भरमूर्तिप्रीत्यर्थं सिद्धिविनायकस्य\nध्यानावाहनादिषोडशोपचारपूजां करिष्ये ॥",
          meaning: {
            en: "For the growth of well-being, steadiness, victory, vigour, long life, health and prosperity for us and our family, and to win the Lord's grace by success without obstacles in every undertaking, prompted by and for the pleasure of Sri Vishvambhara, who dwells in Mukhyaprana (the lord of Bharati), who dwells in Siddhi Vinayaka, who dwells in my guru Sri Raghavendra Tirtha, I shall perform the sixteen-step worship of Siddhi Vinayaka, beginning with meditation and invocation.",
            kn: "ನಮಗೂ ನಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ಕ್ಷೇಮ, ಸ್ಥೈರ್ಯ, ವಿಜಯ, ವೀರ್ಯ, ಆಯುಷ್ಯ, ಆರೋಗ್ಯ, ಐಶ್ವರ್ಯಗಳು ವೃದ್ಧಿಯಾಗಲೆಂದು, ಎಲ್ಲ ಕಾರ್ಯಗಳು ನಿರ್ವಿಘ್ನವಾಗಿ ನಡೆದು ಭಗವಂತನ ಅನುಗ್ರಹ ದೊರೆಯಲೆಂದು, ಶ್ರೀರಾಘವೇಂದ್ರತೀರ್ಥ ಗುರುಗಳ ಅಂತರ್ಗತ, ಸಿದ್ಧಿವಿನಾಯಕನ ಅಂತರ್ಗತ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣನ ಅಂತರ್ಗತ ಶ್ರೀವಿಶ್ವಂಭರಮೂರ್ತಿಯ ಪ್ರೇರಣೆಯಿಂದ ಅವನ ಪ್ರೀತಿಗಾಗಿ ಸಿದ್ಧಿವಿನಾಯಕನ ಧ್ಯಾನ-ಆವಾಹನಾದಿ ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.",
          },
        },
      ],
    },
    {
      title: "सङ्कल्पः",
      titleEn: "Sankalpa (Smarta)",
      note: "Ganesha Chaturthi falls on Bhadrapada shukla chaturthi; in Karnataka Swarna Gauri is worshipped the day before. Bring a clay image, keep 21 modakas (kadubu), 21 kinds of leaves and durva ready. Do achamana, pranayama and the desha-kala part of the sankalpa as in the Shodashopachara Puja, then say this. Many Smarta books add Mahaganapati puja and prana-pratishtha here.",
      noteKn: "ಭಾದ್ರಪದ ಶುಕ್ಲ ಚತುರ್ಥಿಯಂದು ಗಣೇಶ ಚತುರ್ಥಿ; ಕರ್ನಾಟಕದಲ್ಲಿ ಹಿಂದಿನ ದಿನ ಸ್ವರ್ಣಗೌರಿ ಪೂಜೆ. ಮಣ್ಣಿನ ಮೂರ್ತಿ, ಇಪ್ಪತ್ತೊಂದು ಕಡುಬು, ಇಪ್ಪತ್ತೊಂದು ಬಗೆಯ ಪತ್ರೆ ಮತ್ತು ಗರಿಕೆಯನ್ನು ಸಿದ್ಧಪಡಿಸಿ. ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ, ದೇಶಕಾಲ ಸಂಕೀರ್ತನೆಯನ್ನು ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯಂತೆ ಮಾಡಿ ಇದನ್ನು ಹೇಳಿ. ಅನೇಕ ಸ್ಮಾರ್ತ ಪುಸ್ತಕಗಳಲ್ಲಿ ಇಲ್ಲಿ ಮಹಾಗಣಪತಿ ಪೂಜೆ ಮತ್ತು ಪ್ರಾಣಪ್ರತಿಷ್ಠೆ ಇದೆ.",
      when: {
        tradition: [
          "smarta",
        ],
      },
      verses: [
        {
          text: "अस्माकं सकुटुम्बानां क्षेमस्थैर्यविजयायुरारोग्यैश्वर्याभिवृद्ध्यर्थं\nसमस्तमङ्गलावाप्त्यर्थं सर्वाभीष्टसिद्ध्यर्थं\nश्रीवरसिद्धिविनायकदेवतामुद्दिश्य श्रीवरसिद्धिविनायकप्रीत्यर्थं\nकल्पोक्तप्रकारेण यावच्छक्ति ध्यानावाहनादिषोडशोपचारपूजां करिष्ये ॥",
          meaning: {
            en: "For the growth of well-being, steadiness, victory, long life, health and prosperity for us and our family, to gain every blessing and the fulfilment of all wishes, I shall perform, as far as I am able and in the manner the vrata kalpa teaches, the sixteen-step worship beginning with meditation and invocation, dedicated to Sri Varasiddhi Vinayaka and for his pleasure.",
            kn: "ನಮಗೂ ನಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ಕ್ಷೇಮ, ಸ್ಥೈರ್ಯ, ವಿಜಯ, ಆಯುಷ್ಯ, ಆರೋಗ್ಯ, ಐಶ್ವರ್ಯಗಳು ವೃದ್ಧಿಯಾಗಲೆಂದು, ಎಲ್ಲ ಮಂಗಳಗಳು ದೊರೆತು ಎಲ್ಲ ಇಷ್ಟಾರ್ಥಗಳು ಸಿದ್ಧಿಸಲೆಂದು, ಶ್ರೀವರಸಿದ್ಧಿವಿನಾಯಕನನ್ನು ಉದ್ದೇಶಿಸಿ ಅವನ ಪ್ರೀತಿಗಾಗಿ ವ್ರತಕಲ್ಪದಲ್ಲಿ ಹೇಳಿದಂತೆ ಯಥಾಶಕ್ತಿ ಧ್ಯಾನ-ಆವಾಹನಾದಿ ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.",
          },
        },
      ],
    },
    {
      title: "ध्यानम्",
      titleEn: "Dhyana",
      note: "With folded hands holding flowers and akshata, meditate on Siddhi Vinayaka, then offer them to the image.",
      noteKn: "ಹೂವು-ಅಕ್ಷತೆಗಳನ್ನು ಹಿಡಿದು ಕೈಮುಗಿದು ಸಿದ್ಧಿವಿನಾಯಕನನ್ನು ಧ್ಯಾನಿಸಿ, ಅವನ್ನು ಮೂರ್ತಿಗೆ ಅರ್ಪಿಸಿ.",
      verses: [
        {
          text: "एकदन्तं शूर्पकर्णं गजवक्त्रं चतुर्भुजम् ।\nपाशाङ्कुशधरं देवं ध्यायेत्सिद्धिविनायकम् ॥",
          meaning: {
            en: "One should meditate on the god Siddhi Vinayaka: single-tusked, with ears like winnowing fans, elephant-faced, four-armed, holding the noose and the goad.",
            kn: "ಒಂದೇ ದಂತವುಳ್ಳ, ಮೊರದಂತಹ ಕಿವಿಗಳುಳ್ಳ, ಆನೆಮುಖದ, ನಾಲ್ಕು ಭುಜಗಳ, ಪಾಶ-ಅಂಕುಶಗಳನ್ನು ಹಿಡಿದ ಸಿದ್ಧಿವಿನಾಯಕ ದೇವನನ್ನು ಧ್ಯಾನಿಸಬೇಕು.",
          },
        },
        {
          text: "ध्यायेद्देवं महाकायं तप्तकाञ्चनसन्निभम् ।\nदन्ताक्षमालापरशुपूर्णमोदकहस्तकम् ।\nमोदकासक्तशुण्डाग्रमेकदन्तं विनायकम् ॥",
          meaning: {
            en: "Meditate on the god of mighty body, bright as molten gold, holding in his hands the tusk, the rosary, the axe and a full modaka, the tip of his trunk resting on a modaka: the single-tusked Vinayaka.",
            kn: "ಮಹಾಕಾಯನಾದ, ಕರಗಿದ ಚಿನ್ನದಂತೆ ಹೊಳೆಯುವ, ಕೈಗಳಲ್ಲಿ ದಂತ, ಅಕ್ಷಮಾಲೆ, ಕೊಡಲಿ, ತುಂಬಿದ ಮೋದಕ ಹಿಡಿದ, ಸೊಂಡಿಲಿನ ತುದಿಯನ್ನು ಮೋದಕದ ಮೇಲಿಟ್ಟ ಏಕದಂತ ವಿನಾಯಕನನ್ನು ಧ್ಯಾನಿಸಬೇಕು.",
          },
          when: {
            tradition: [
              "madhva",
            ],
          },
        },
        {
          text: "ध्यायेद्गजाननं देवं तप्तकाञ्चनसन्निभम् ।\nचतुर्भुजं महाकायं सर्वाभरणभूषितम् ॥",
          meaning: {
            en: "Meditate on the elephant-faced god, bright as molten gold, four-armed, of mighty body, adorned with every ornament.",
            kn: "ಕರಗಿದ ಚಿನ್ನದಂತೆ ಹೊಳೆಯುವ, ನಾಲ್ಕು ಭುಜಗಳ, ಮಹಾಕಾಯನಾದ, ಸರ್ವಾಭರಣಭೂಷಿತನಾದ ಗಜಾನನ ದೇವನನ್ನು ಧ್ಯಾನಿಸಬೇಕು.",
          },
          when: {
            tradition: [
              "smarta",
            ],
          },
        },
        {
          text: "श्रीसिद्धिविनायकान्तर्गतभारतीरमणमुख्यप्राणान्तर्गतश्रीविश्वम्भराय नमः ।\nध्यायामि । ध्यानं समर्पयामि ॥",
          meaning: {
            en: "Salutations to Sri Vishvambhara, who dwells in Mukhyaprana, who dwells in Siddhi Vinayaka; I meditate on him and offer this meditation.",
            kn: "ಸಿದ್ಧಿವಿನಾಯಕನ ಅಂತರ್ಗತ ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣನ ಅಂತರ್ಗತ ಶ್ರೀವಿಶ್ವಂಭರನಿಗೆ ನಮಸ್ಕಾರ; ಧ್ಯಾನಿಸಿ ಧ್ಯಾನವನ್ನು ಸಮರ್ಪಿಸುತ್ತೇನೆ.",
          },
          when: {
            tradition: [
              "madhva",
            ],
          },
        },
        {
          text: "ॐ श्रीसिद्धिविनायकाय नमः ।\nध्यायामि । ध्यानं समर्पयामि ॥",
          meaning: {
            en: "Om, salutations to Sri Siddhi Vinayaka; I meditate on him and offer this meditation.",
            kn: "ಓಂ ಶ್ರೀಸಿದ್ಧಿವಿನಾಯಕನಿಗೆ ನಮಸ್ಕಾರ; ಧ್ಯಾನಿಸಿ ಧ್ಯಾನವನ್ನು ಸಮರ್ಪಿಸುತ್ತೇನೆ.",
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
      title: "आवाहनम्",
      titleEn: "Avahana",
      note: "Offer akshata and flowers to the image while inviting the deity. From asana to pradakshina continue with the sixteen upacharas of the Shodashopachara Puja, using the name formula above.",
      noteKn: "ಅಕ್ಷತೆ-ಹೂಗಳನ್ನು ಮೂರ್ತಿಗೆ ಅರ್ಪಿಸುತ್ತಾ ಆಹ್ವಾನಿಸಿ. ಆಸನದಿಂದ ಪ್ರದಕ್ಷಿಣೆಯವರೆಗಿನ ಉಪಚಾರಗಳನ್ನು ಮೇಲಿನ ನಾಮದೊಂದಿಗೆ ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯಂತೆ ಮಾಡಿ.",
      verses: [
        {
          text: "आवाहयामि विघ्नेश सुरराजार्चितेश्वर ।\nअनाथनाथ सर्वज्ञ पूजार्थं गणनायक ॥",
          meaning: {
            en: "O lord of obstacles, lord worshipped by the king of the gods, protector of the helpless, all-knowing leader of the ganas, I invite you for this worship.",
            kn: "ವಿಘ್ನೇಶನೇ, ದೇವೇಂದ್ರನಿಂದ ಪೂಜಿತನಾದ ಈಶ್ವರನೇ, ಅನಾಥರ ನಾಥನೇ, ಸರ್ವಜ್ಞನೇ, ಗಣನಾಯಕನೇ, ಪೂಜೆಗಾಗಿ ನಿನ್ನನ್ನು ಆವಾಹಿಸುತ್ತೇನೆ.",
          },
          when: {
            tradition: [
              "madhva",
            ],
          },
        },
        {
          text: "अत्रागच्छ जगद्वन्द्य सुरराजार्चितेश्वर ।\nअनाथनाथ सर्वज्ञ गौरीगर्भसमुद्भव ॥",
          meaning: {
            en: "Come here, O lord adored by the world and worshipped by the king of the gods, protector of the helpless, all-knowing one, born of Gauri.",
            kn: "ಜಗದ್ವಂದ್ಯನೇ, ದೇವೇಂದ್ರನಿಂದ ಪೂಜಿತನಾದ ಈಶ್ವರನೇ, ಅನಾಥನಾಥನೇ, ಸರ್ವಜ್ಞನೇ, ಗೌರಿಯ ಗರ್ಭದಿಂದ ಜನಿಸಿದವನೇ, ಇಲ್ಲಿಗೆ ಬಾ.",
          },
          when: {
            tradition: [
              "smarta",
            ],
          },
        },
        {
          text: "श्रीसिद्धिविनायकान्तर्गतभारतीरमणमुख्यप्राणान्तर्गतश्रीविश्वम्भराय नमः ।\nआवाहयामि ॥",
          meaning: {
            en: "Salutations to Sri Vishvambhara within Mukhyaprana within Siddhi Vinayaka; I invoke him.",
            kn: "ಸಿದ್ಧಿವಿನಾಯಕನ ಅಂತರ್ಗತ ಮುಖ್ಯಪ್ರಾಣನ ಅಂತರ್ಗತ ಶ್ರೀವಿಶ್ವಂಭರನಿಗೆ ನಮಸ್ಕಾರ; ಆವಾಹಿಸುತ್ತೇನೆ.",
          },
          when: {
            tradition: [
              "madhva",
            ],
          },
        },
        {
          text: "ॐ श्रीसिद्धिविनायकाय नमः ।\nआवाहयामि ॥",
          meaning: {
            en: "Om, salutations to Sri Siddhi Vinayaka; I invoke him.",
            kn: "ಓಂ ಶ್ರೀಸಿದ್ಧಿವಿನಾಯಕನಿಗೆ ನಮಸ್ಕಾರ; ಆವಾಹಿಸುತ್ತೇನೆ.",
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
      title: "एकविंशतिपत्रपूजा",
      titleEn: "Patra puja: 21 leaves with 21 names (Madhva)",
      note: "After the gandha and flower offerings, offer one kind of leaf with each name, saying पत्रं समर्पयामि. The Kannada names of the leaves (from VM): malati, kadigaragu (bhringaraja), bilva, white garike, bore (badari), ummatti (dattura), tulasi, banni (shami), uttarane (apamarga), brihati, kanagile (karavira), ekka (arka), arjuna, vishnukranti, dalimbe, devadaru, marugu (maruvaka), ashvattha, jaji, kedige (ketaki), agase (agasti). VM notes that tulasi already offered to Hari may be offered to Ganesha on this day only. If a leaf is not available, offer akshata.",
      noteKn: "ಗಂಧ-ಪುಷ್ಪ ಸಮರ್ಪಣೆಯ ನಂತರ ಪ್ರತಿ ನಾಮಕ್ಕೆ ಒಂದು ಬಗೆಯ ಪತ್ರೆಯನ್ನು \"ಪತ್ರಂ ಸಮರ್ಪಯಾಮಿ\" ಎಂದು ಅರ್ಪಿಸಿ. ಪತ್ರೆಗಳು: ಮಾಲತಿ, ಕಾಡಿಗರಗು (ಭೃಂಗರಾಜ), ಬಿಲ್ವ, ಬಿಳಿಗರಿಕೆ, ಬೋರೆ (ಬದರಿ), ಉಮ್ಮತ್ತಿ, ತುಳಸಿ, ಬನ್ನಿ (ಶಮಿ), ಉತ್ತರಣೆ (ಅಪಾಮಾರ್ಗ), ಬೃಹತಿ, ಕಣಗಿಲೆ (ಕರವೀರ), ಎಕ್ಕ (ಅರ್ಕ), ಅರ್ಜುನ, ವಿಷ್ಣುಕ್ರಾಂತಿ, ದಾಳಿಂಬೆ, ದೇವದಾರು, ಮರುಗ, ಅಶ್ವತ್ಥ, ಜಾಜಿ, ಕೇದಿಗೆ, ಅಗಸೆ. ಹರಿಗೆ ನಿವೇದಿಸಿದ ತುಳಸಿಯನ್ನು ಈ ದಿನ ಮಾತ್ರ ಗಣಪತಿಗೆ ಅರ್ಪಿಸಬಹುದು ಎಂದು ವ್ರತಮುಕ್ತಾವಲಿ ಹೇಳುತ್ತದೆ. ಪತ್ರೆ ಸಿಗದಿದ್ದರೆ ಅಕ್ಷತೆ ಅರ್ಪಿಸಿ.",
      when: {
        tradition: [
          "madhva",
        ],
      },
      verses: [
        {
          text: "ॐ सुमुखाय नमः । मालतीपत्रं समर्पयामि ।\nॐ गणाधिपाय नमः । भृङ्गराजपत्रं समर्पयामि ।\nॐ उमापुत्राय नमः । बिल्वपत्रं समर्पयामि ।\nॐ गजाननाय नमः । श्वेतदूर्वापत्रं समर्पयामि ।\nॐ लम्बोदराय नमः । बदरीपत्रं समर्पयामि ।\nॐ हरसूनवे नमः । दत्तूरपत्रं समर्पयामि ।\nॐ गजकर्णकाय नमः । तुलसीपत्रं समर्पयामि ॥",
          meaning: {
            en: "Salutations to the fair-faced one: I offer a malati leaf; to the lord of the ganas: a bhringaraja leaf; to Uma's son: a bilva leaf; to the elephant-faced: white durva; to the big-bellied: a badari leaf; to Hara's son: a dattura leaf; to the elephant-eared: a tulasi leaf.",
            kn: "ಸುಮುಖನಿಗೆ ಮಾಲತಿ ಪತ್ರೆ, ಗಣಾಧಿಪನಿಗೆ ಭೃಂಗರಾಜ ಪತ್ರೆ, ಉಮಾಪುತ್ರನಿಗೆ ಬಿಲ್ವಪತ್ರೆ, ಗಜಾನನನಿಗೆ ಬಿಳಿಗರಿಕೆ, ಲಂಬೋದರನಿಗೆ ಬದರೀ ಪತ್ರೆ, ಹರಸೂನುವಿಗೆ ಉಮ್ಮತ್ತಿ ಪತ್ರೆ, ಗಜಕರ್ಣನಿಗೆ ತುಳಸೀಪತ್ರೆಯನ್ನು ಅರ್ಪಿಸುತ್ತೇನೆ.",
          },
        },
        {
          text: "ॐ वक्रतुण्डाय नमः । शमीपत्रं समर्पयामि ।\nॐ गुहाग्रजाय नमः । अपामार्गपत्रं समर्पयामि ।\nॐ एकदन्ताय नमः । बृहतीपत्रं समर्पयामि ।\nॐ विकटाय नमः । करवीरपत्रं समर्पयामि ।\nॐ कपिलाय नमः । अर्कपत्रं समर्पयामि ।\nॐ गजदन्ताय नमः । अर्जुनपत्रं समर्पयामि ।\nॐ विघ्नराजाय नमः । विष्णुक्रान्तिपत्रं समर्पयामि ॥",
          meaning: {
            en: "To the one of curved trunk: a shami leaf; to the elder brother of Guha: an apamarga leaf; to the single-tusked: a brihati leaf; to the formidable one: a karavira leaf; to the tawny one: an arka leaf; to the elephant-tusked: an arjuna leaf; to the king of obstacles: a vishnukranti leaf.",
            kn: "ವಕ್ರತುಂಡನಿಗೆ ಬನ್ನಿಪತ್ರೆ, ಗುಹಾಗ್ರಜನಿಗೆ ಉತ್ತರಣೆ ಪತ್ರೆ, ಏಕದಂತನಿಗೆ ಬೃಹತೀ ಪತ್ರೆ, ವಿಕಟನಿಗೆ ಕಣಗಿಲೆ ಪತ್ರೆ, ಕಪಿಲನಿಗೆ ಎಕ್ಕದ ಎಲೆ, ಗಜದಂತನಿಗೆ ಅರ್ಜುನ ಪತ್ರೆ, ವಿಘ್ನರಾಜನಿಗೆ ವಿಷ್ಣುಕ್ರಾಂತಿ ಪತ್ರೆಯನ್ನು ಅರ್ಪಿಸುತ್ತೇನೆ.",
          },
        },
        {
          text: "ॐ वटवे नमः । दाडिमपत्रं समर्पयामि ।\nॐ सुराग्रजाय नमः । देवदारुपत्रं समर्पयामि ।\nॐ फालचन्द्राय नमः । मरुवकपत्रं समर्पयामि ।\nॐ हेरम्बाय नमः । अश्वत्थपत्रं समर्पयामि ।\nॐ चतुर्भुजाय नमः । जातीपत्रं समर्पयामि ।\nॐ विनायकाय नमः । केतकीपत्रं समर्पयामि ।\nॐ सर्वेश्वराय नमः । अगस्तिपत्रं समर्पयामि ॥",
          meaning: {
            en: "To the boy: a pomegranate leaf; to the first-born of the gods: a devadaru leaf; to the one with the moon on his brow: a maruvaka leaf; to Heramba: an ashvattha leaf; to the four-armed: a jati leaf; to Vinayaka: a ketaki leaf; to the lord of all: an agasti leaf.",
            kn: "ವಟುವಿಗೆ ದಾಳಿಂಬೆ ಎಲೆ, ಸುರಾಗ್ರಜನಿಗೆ ದೇವದಾರು ಪತ್ರೆ, ಫಾಲಚಂದ್ರನಿಗೆ ಮರುಗ, ಹೇರಂಬನಿಗೆ ಅಶ್ವತ್ಥ ಪತ್ರೆ, ಚತುರ್ಭುಜನಿಗೆ ಜಾಜಿ ಪತ್ರೆ, ವಿನಾಯಕನಿಗೆ ಕೇದಿಗೆ, ಸರ್ವೇಶ್ವರನಿಗೆ ಅಗಸೆ ಪತ್ರೆಯನ್ನು ಅರ್ಪಿಸುತ್ತೇನೆ.",
          },
        },
      ],
    },
    {
      title: "एकविंशतिपत्रपूजा",
      titleEn: "Patra puja: 21 leaves with 21 names (Smarta)",
      note: "After the gandha and flower offerings, offer one kind of leaf with each name, saying पत्रं समर्पयामि (some books say पूजयामि). Kannada names: machi (davana family), brihati, bilva, garike, ummatti, bore, uttarane, tulasi, mavu (chuta), kanagile, vishnukranti, dalimbe, devadaru, marugu, lakki (sinduvara), jaji, gandaki, banni, ashvattha, arjuna, ekka. Telugu manuals give a different list of names. If a leaf is not available, offer akshata.",
      noteKn: "ಗಂಧ-ಪುಷ್ಪ ಸಮರ್ಪಣೆಯ ನಂತರ ಪ್ರತಿ ನಾಮಕ್ಕೆ ಒಂದು ಬಗೆಯ ಪತ್ರೆಯನ್ನು \"ಪತ್ರಂ ಸಮರ್ಪಯಾಮಿ\" (ಕೆಲವು ಪುಸ್ತಕಗಳಲ್ಲಿ \"ಪೂಜಯಾಮಿ\") ಎಂದು ಅರ್ಪಿಸಿ. ಪತ್ರೆಗಳು: ಮಾಚಿ, ಬೃಹತಿ, ಬಿಲ್ವ, ಗರಿಕೆ, ಉಮ್ಮತ್ತಿ, ಬೋರೆ, ಉತ್ತರಣೆ, ತುಳಸಿ, ಮಾವು, ಕಣಗಿಲೆ, ವಿಷ್ಣುಕ್ರಾಂತಿ, ದಾಳಿಂಬೆ, ದೇವದಾರು, ಮರುಗ, ಲಕ್ಕಿ (ಸಿಂಧುವಾರ), ಜಾಜಿ, ಗಂಡಕಿ, ಬನ್ನಿ, ಅಶ್ವತ್ಥ, ಅರ್ಜುನ, ಎಕ್ಕ. ತೆಲುಗು ಪುಸ್ತಕಗಳಲ್ಲಿ ನಾಮಗಳು ಬೇರೆ. ಪತ್ರೆ ಸಿಗದಿದ್ದರೆ ಅಕ್ಷತೆ ಅರ್ಪಿಸಿ.",
      when: {
        tradition: [
          "smarta",
        ],
      },
      verses: [
        {
          text: "ॐ सुमुखाय नमः । माचीपत्रं समर्पयामि ।\nॐ गणाधिपाय नमः । बृहतीपत्रं समर्पयामि ।\nॐ उमापुत्राय नमः । बिल्वपत्रं समर्पयामि ।\nॐ गजाननाय नमः । दूर्वायुग्मं समर्पयामि ।\nॐ हरसूनवे नमः । दत्तूरपत्रं समर्पयामि ।\nॐ लम्बोदराय नमः । बदरीपत्रं समर्पयामि ।\nॐ गुहाग्रजाय नमः । अपामार्गपत्रं समर्पयामि ॥",
          meaning: {
            en: "Salutations to the fair-faced one: I offer a machi leaf; to the lord of the ganas: a brihati leaf; to Uma's son: a bilva leaf; to the elephant-faced: a pair of durva; to Hara's son: a dattura leaf; to the big-bellied: a badari leaf; to the elder brother of Guha: an apamarga leaf.",
            kn: "ಸುಮುಖನಿಗೆ ಮಾಚಿ ಪತ್ರೆ, ಗಣಾಧಿಪನಿಗೆ ಬೃಹತೀ ಪತ್ರೆ, ಉಮಾಪುತ್ರನಿಗೆ ಬಿಲ್ವಪತ್ರೆ, ಗಜಾನನನಿಗೆ ಜೋಡಿ ಗರಿಕೆ, ಹರಸೂನುವಿಗೆ ಉಮ್ಮತ್ತಿ ಪತ್ರೆ, ಲಂಬೋದರನಿಗೆ ಬೋರೆ ಪತ್ರೆ, ಗುಹಾಗ್ರಜನಿಗೆ ಉತ್ತರಣೆ ಪತ್ರೆಯನ್ನು ಅರ್ಪಿಸುತ್ತೇನೆ.",
          },
        },
        {
          text: "ॐ गजकर्णाय नमः । तुलसीपत्रं समर्पयामि ।\nॐ एकदन्ताय नमः । चूतपत्रं समर्पयामि ।\nॐ विकटाय नमः । करवीरपत्रं समर्पयामि ।\nॐ भिन्नदन्ताय नमः । विष्णुक्रान्तपत्रं समर्पयामि ।\nॐ वटवे नमः । दाडिमीपत्रं समर्पयामि ।\nॐ सर्वेश्वराय नमः । देवदारुपत्रं समर्पयामि ।\nॐ फालचन्द्राय नमः । मरुवकपत्रं समर्पयामि ॥",
          meaning: {
            en: "To the elephant-eared: a tulasi leaf; to the single-tusked: a mango leaf; to the formidable one: a karavira leaf; to the one of broken tusk: a vishnukranta leaf; to the boy: a pomegranate leaf; to the lord of all: a devadaru leaf; to the one with the moon on his brow: a maruvaka leaf.",
            kn: "ಗಜಕರ್ಣನಿಗೆ ತುಳಸಿ, ಏಕದಂತನಿಗೆ ಮಾವಿನ ಎಲೆ, ವಿಕಟನಿಗೆ ಕಣಗಿಲೆ, ಭಿನ್ನದಂತನಿಗೆ ವಿಷ್ಣುಕ್ರಾಂತಿ, ವಟುವಿಗೆ ದಾಳಿಂಬೆ, ಸರ್ವೇಶ್ವರನಿಗೆ ದೇವದಾರು, ಫಾಲಚಂದ್ರನಿಗೆ ಮರುಗ ಪತ್ರೆಯನ್ನು ಅರ್ಪಿಸುತ್ತೇನೆ.",
          },
        },
        {
          text: "ॐ हेरम्बाय नमः । सिन्धुवारपत्रं समर्पयामि ।\nॐ शूर्पकर्णाय नमः । जातीपत्रं समर्पयामि ।\nॐ सुराग्रजाय नमः । गण्डकीपत्रं समर्पयामि ।\nॐ इभवक्त्राय नमः । शमीपत्रं समर्पयामि ।\nॐ विनायकाय नमः । अश्वत्थपत्रं समर्पयामि ।\nॐ सुरसेविताय नमः । अर्जुनपत्रं समर्पयामि ।\nॐ कपिलाय नमः । अर्कपत्रं समर्पयामि ॥",
          meaning: {
            en: "To Heramba: a sinduvara leaf; to the one with ears like winnowing fans: a jati leaf; to the first-born of the gods: a gandaki leaf; to the elephant-faced: a shami leaf; to Vinayaka: an ashvattha leaf; to the one served by the gods: an arjuna leaf; to the tawny one: an arka leaf.",
            kn: "ಹೇರಂಬನಿಗೆ ಲಕ್ಕಿ (ಸಿಂಧುವಾರ), ಶೂರ್ಪಕರ್ಣನಿಗೆ ಜಾಜಿ, ಸುರಾಗ್ರಜನಿಗೆ ಗಂಡಕಿ, ಇಭವಕ್ತ್ರನಿಗೆ ಬನ್ನಿ, ವಿನಾಯಕನಿಗೆ ಅಶ್ವತ್ಥ, ಸುರಸೇವಿತನಿಗೆ ಅರ್ಜುನ, ಕಪಿಲನಿಗೆ ಎಕ್ಕದ ಪತ್ರೆಯನ್ನು ಅರ್ಪಿಸುತ್ತೇನೆ.",
          },
        },
      ],
    },
    {
      title: "दूर्वायुग्मपूजा",
      titleEn: "Durva-yugma puja (pairs of durva)",
      note: "Gather 21 blades of durva grass. With each of the ten names offer two blades (a yugma, pair) saying दूर्वायुग्मं समर्पयामि; then, saying the closing verse, offer the one remaining blade with flowers and akshata. Telugu manuals use 21 other names here.",
      noteKn: "ಇಪ್ಪತ್ತೊಂದು ಗರಿಕೆಗಳನ್ನು ಸಂಗ್ರಹಿಸಿ. ಹತ್ತು ನಾಮಗಳಲ್ಲಿ ಪ್ರತಿಯೊಂದಕ್ಕೂ ಎರಡೆರಡು ಗರಿಕೆಯನ್ನು \"ದೂರ್ವಾಯುಗ್ಮಂ ಸಮರ್ಪಯಾಮಿ\" ಎಂದು ಅರ್ಪಿಸಿ; ಕೊನೆಯ ಶ್ಲೋಕ ಹೇಳಿ ಉಳಿದ ಒಂದು ಗರಿಕೆಯನ್ನು ಹೂ-ಅಕ್ಷತೆಗಳೊಡನೆ ಅರ್ಪಿಸಿ. ತೆಲುಗು ಪುಸ್ತಕಗಳಲ್ಲಿ ಇಲ್ಲಿ ಬೇರೆ ಇಪ್ಪತ್ತೊಂದು ನಾಮಗಳಿವೆ.",
      verses: [
        {
          text: "ॐ गणाधिपाय नमः । ॐ उमापुत्राय नमः । ॐ अघनाशनाय नमः ।\nॐ विनायकाय नमः । ॐ ईशपुत्राय नमः । ॐ सर्वसिद्धिप्रदायकाय नमः ।\nॐ एकदन्ताय नमः । ॐ इभवक्त्राय नमः । ॐ मूषकवाहनाय नमः ।\nॐ कुमारगुरवे नमः । दूर्वायुग्मं समर्पयामि ॥",
          meaning: {
            en: "Salutations to the lord of the ganas, to Uma's son, to the destroyer of sin, to Vinayaka, to the son of Isha, to the giver of every success, to the single-tusked, to the elephant-faced, to the one who rides the mouse, to the elder of Kumara: to each I offer a pair of durva.",
            kn: "ಗಣಾಧಿಪ, ಉಮಾಪುತ್ರ, ಅಘನಾಶನ, ವಿನಾಯಕ, ಈಶಪುತ್ರ, ಸರ್ವಸಿದ್ಧಿಪ್ರದಾಯಕ, ಏಕದಂತ, ಇಭವಕ್ತ್ರ, ಮೂಷಕವಾಹನ, ಕುಮಾರಗುರು ಎಂಬ ಪ್ರತಿಯೊಂದು ನಾಮಕ್ಕೂ ನಮಸ್ಕರಿಸಿ ಜೋಡಿ ಗರಿಕೆಯನ್ನು ಅರ್ಪಿಸುತ್ತೇನೆ.",
          },
        },
        {
          text: "गणाधिप नमस्तेऽस्तु उमापुत्राघनाशन ।\nएकदन्तेभवक्त्रेति तथा मूषकवाहन ॥\nविनायकेशपुत्रेति सर्वसिद्धिप्रदायक ।\nकुमारगुरवे तुभ्यमर्पयामि सुमाञ्जलिम् ॥",
          meaning: {
            en: "Salutations to you, lord of the ganas, son of Uma, destroyer of sin, single-tusked, elephant-faced, rider of the mouse, Vinayaka, son of Isha, giver of every success: to you, the elder of Kumara, I offer this handful of flowers.",
            kn: "ಗಣಾಧಿಪನೇ, ಉಮಾಪುತ್ರನೇ, ಪಾಪನಾಶಕನೇ, ಏಕದಂತನೇ, ಆನೆಮುಖನೇ, ಮೂಷಕವಾಹನನೇ, ವಿನಾಯಕನೇ, ಈಶಪುತ್ರನೇ, ಸರ್ವಸಿದ್ಧಿಪ್ರದಾಯಕನೇ, ನಿನಗೆ ನಮಸ್ಕಾರ; ಕುಮಾರನ ಅಣ್ಣನಾದ ನಿನಗೆ ಈ ಪುಷ್ಪಾಂಜಲಿಯನ್ನು ಅರ್ಪಿಸುತ್ತೇನೆ.",
          },
        },
      ],
    },
    {
      title: "नैवेद्यम्",
      titleEn: "Naivedya of modakas",
      note: "Offer the 21 modakas (kadubu), other dishes, bananas and coconut. In the Madhva manner (VM) the food is first offered to the Lord (Hari), then to Lakshmi and Mukhyaprana, and then placed before Ganesha; the Udupi book has a separate verse for offering 21 modakas. Then give water, tambula, dakshina and arati as in the Shodashopachara Puja.",
      noteKn: "ಇಪ್ಪತ್ತೊಂದು ಕಡುಬು (ಮೋದಕ), ಇತರ ಭಕ್ಷ್ಯಗಳು, ಬಾಳೆಹಣ್ಣು, ತೆಂಗಿನಕಾಯಿಗಳನ್ನು ನಿವೇದಿಸಿ. ಮಾಧ್ವ ಕ್ರಮದಲ್ಲಿ ಮೊದಲು ಪರಮಾತ್ಮನಿಗೆ, ಅನಂತರ ಲಕ್ಷ್ಮೀದೇವಿ-ಪ್ರಾಣದೇವರಿಗೆ ಸಮರ್ಪಿಸಿ ಆಮೇಲೆ ಗಣಪತಿಗೆ ನಿವೇದಿಸಬೇಕು (ವ್ರತಮುಕ್ತಾವಲಿ); ಉಡುಪಿಯ ಪುಸ್ತಕದಲ್ಲಿ ಇಪ್ಪತ್ತೊಂದು ಮೋದಕ ಅರ್ಪಣೆಗೆ ಪ್ರತ್ಯೇಕ ಶ್ಲೋಕವಿದೆ. ಆಮೇಲೆ ಜಲ, ತಾಂಬೂಲ, ದಕ್ಷಿಣೆ, ಮಂಗಳಾರತಿಗಳನ್ನು ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯಂತೆ ಮಾಡಿ.",
      verses: [
        {
          text: "सुगन्धान्सुकृतांश्चैव मोदकान्घृतपाचितान् ।\nनैवेद्यं गृह्यतां देव चणमुद्गैः प्रकल्पितान् ॥\nभक्ष्यं भोज्यं च लेह्यं च चोष्यं पानीयमेव च ।\nगृहाण देव नैवेद्यं मया दत्तं विनायक ॥",
          meaning: {
            en: "O God, accept as naivedya these fragrant, well-made modakas cooked in ghee and prepared with gram and green gram. O Vinayaka, accept the food I offer: things to chew, to eat, to lick and to suck, and drink.",
            kn: "ದೇವನೇ, ಕಡಲೆ-ಹೆಸರುಗಳಿಂದ ಸಿದ್ಧಪಡಿಸಿ ತುಪ್ಪದಲ್ಲಿ ಬೇಯಿಸಿದ ಸುಗಂಧಭರಿತವಾದ ಚೆನ್ನಾಗಿ ಮಾಡಿದ ಈ ಮೋದಕಗಳನ್ನು ನೈವೇದ್ಯವಾಗಿ ಸ್ವೀಕರಿಸು. ವಿನಾಯಕನೇ, ನಾನು ಅರ್ಪಿಸುವ ಭಕ್ಷ್ಯ, ಭೋಜ್ಯ, ಲೇಹ್ಯ, ಚೋಷ್ಯ, ಪಾನೀಯಗಳ ನೈವೇದ್ಯವನ್ನು ಸ್ವೀಕರಿಸು.",
          },
        },
      ],
    },
    {
      title: "अर्घ्यम्",
      titleEn: "Arghya (Smarta)",
      note: "Smarta books give arghya with a fruit, gandha, flowers and akshata in the water, and a second arghya (punar-arghya) after the puja.",
      noteKn: "ಸ್ಮಾರ್ತ ಪುಸ್ತಕಗಳಲ್ಲಿ ನೀರಿನಲ್ಲಿ ಹಣ್ಣು, ಗಂಧ, ಹೂವು, ಅಕ್ಷತೆಗಳನ್ನಿಟ್ಟು ಅರ್ಘ್ಯ, ಮತ್ತು ಪೂಜೆಯ ನಂತರ ಪುನರರ್ಘ್ಯ ಕೊಡುವ ಕ್ರಮವಿದೆ.",
      when: {
        tradition: [
          "smarta",
        ],
      },
      verses: [
        {
          text: "गौरीपुत्र नमस्तेऽस्तु शङ्करप्रियनन्दन ।\nगृहाणार्घ्यं मया दत्तं गन्धपुष्पाक्षतैर्युतम् ॥",
          meaning: {
            en: "Salutations to you, son of Gauri, dear child of Shankara; accept the arghya I give, with sandal paste, flowers and akshata.",
            kn: "ಗೌರೀಪುತ್ರನೇ, ಶಂಕರನ ಪ್ರೀತಿಯ ಕುಮಾರನೇ, ನಿನಗೆ ನಮಸ್ಕಾರ; ಗಂಧ-ಪುಷ್ಪ-ಅಕ್ಷತೆಗಳಿಂದ ಕೂಡಿದ, ನಾನು ಕೊಡುವ ಅರ್ಘ್ಯವನ್ನು ಸ್ವೀಕರಿಸು.",
          },
        },
      ],
    },
    {
      title: "प्रार्थना",
      titleEn: "Prarthana (Madhva)",
      note: "With folded hands pray, then offer a whole fruit with betel leaves and dakshina beside the image (purna-phala). Close with यस्य स्मृत्या and the samarpana of the Shodashopachara Puja: अनेन सिद्धिविनायकपूजनेन श्रीविश्वम्भरः प्रीयताम्.",
      noteKn: "ಕೈಜೋಡಿಸಿ ಪ್ರಾರ್ಥಿಸಿ, ದೇವರ ಬಲಭಾಗದಲ್ಲಿ ವೀಳ್ಯದೆಲೆ, ಅಡಿಕೆ, ದಕ್ಷಿಣೆ, ತೆಂಗಿನಕಾಯಿ ಇಡಿ (ಪೂರ್ಣಫಲ). \"ಯಸ್ಯ ಸ್ಮೃತ್ಯಾ\" ಮತ್ತು ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯ ಸಮರ್ಪಣೆಯೊಂದಿಗೆ \"ಅನೇನ ಸಿದ್ಧಿವಿನಾಯಕಪೂಜನೇನ ಶ್ರೀವಿಶ್ವಂಭರಃ ಪ್ರೀಯತಾಮ್\" ಎಂದು ಮುಗಿಸಿ.",
      when: {
        tradition: [
          "madhva",
        ],
      },
      verses: [
        {
          text: "यन्मया चरितं देव व्रतमेतत्सुदुर्लभम् ।\nगणेश त्वं प्रसन्नः सन् सफलं कुरु सर्वदा ॥",
          meaning: {
            en: "O God, this most precious vrata that I have kept: O Ganesha, be pleased and make it fruitful always.",
            kn: "ದೇವನೇ, ನಾನು ಆಚರಿಸಿದ ಈ ಅತಿದುರ್ಲಭವಾದ ವ್ರತವನ್ನು, ಗಣೇಶನೇ, ಪ್ರಸನ್ನನಾಗಿ ಸದಾ ಸಫಲಗೊಳಿಸು.",
          },
        },
      ],
    },
    {
      title: "स्यमन्तकोपाख्यानम्",
      titleEn: "The Syamantaka story",
      note: "The story is read or heard after the puja; seeing the moon on this night brings false blame, and hearing the story and saying the verse below removes it. The Skanda Purana version in the Udupi book, told by Krishna to Yudhishthira, runs: Satrajit received the Syamantaka jewel from the Sun. His brother Prasena wore it while hunting and was killed by a lion; the lion was killed by Jambavan, who took the jewel to his cave and gave it to his child as a plaything. People blamed Krishna for the theft, because he had once asked for the jewel and because he had seen the moon on Bhadrapada chaturthi. Krishna followed the tracks into the cave, heard the nurse singing this verse to the child, fought Jambavan for many days and won; Jambavan knew him as his lord Rama, gave him the jewel and his daughter Jambavati. Krishna returned the jewel to Satrajit before the assembly, and Satrajit, ashamed, gave him Satyabhama. The book adds that the moon, who laughed at Ganesha, was cursed, and that keeping this vrata and hearing this story frees one from false blame. VM (Madhva) explains Ganesha as a great devotee of the Lord and reads the story as the Lord honouring his devotee.",
      noteKn: "ಪೂಜೆಯ ನಂತರ ಈ ಕಥೆಯನ್ನು ಓದಬೇಕು ಅಥವಾ ಕೇಳಬೇಕು; ಈ ರಾತ್ರಿ ಚಂದ್ರನನ್ನು ನೋಡಿದರೆ ಅಪವಾದ ಬರುತ್ತದೆ; ಕಥೆ ಕೇಳಿ ಕೆಳಗಿನ ಶ್ಲೋಕ ಹೇಳಿದರೆ ಅದು ಪರಿಹಾರವಾಗುತ್ತದೆ. ಉಡುಪಿಯ ಪುಸ್ತಕದಲ್ಲಿರುವ ಸ್ಕಾಂದಪುರಾಣದ ಕಥೆ (ಕೃಷ್ಣ-ಯುಧಿಷ್ಠಿರ ಸಂವಾದ): ಸತ್ರಾಜಿತನಿಗೆ ಸೂರ್ಯನಿಂದ ಸ್ಯಮಂತಕ ಮಣಿ ದೊರೆಯಿತು. ಅವನ ತಮ್ಮ ಪ್ರಸೇನನು ಅದನ್ನು ಧರಿಸಿ ಬೇಟೆಗೆ ಹೋದಾಗ ಸಿಂಹವು ಅವನನ್ನು ಕೊಂದಿತು; ಜಾಂಬವಂತನು ಸಿಂಹವನ್ನು ಕೊಂದು ಮಣಿಯನ್ನು ತನ್ನ ಗುಹೆಗೆ ತಂದು ಮಗುವಿಗೆ ಆಟಕ್ಕೆ ಕೊಟ್ಟನು. ಹಿಂದೆ ಮಣಿಯನ್ನು ಕೇಳಿದ್ದರಿಂದಲೂ ಭಾದ್ರಪದ ಚತುರ್ಥಿಯ ಚಂದ್ರನನ್ನು ನೋಡಿದ್ದರಿಂದಲೂ ಜನರು ಕೃಷ್ಣನ ಮೇಲೆ ಕಳ್ಳತನದ ಅಪವಾದ ಹೊರಿಸಿದರು. ಕೃಷ್ಣನು ಹೆಜ್ಜೆಗುರುತು ಹಿಡಿದು ಗುಹೆಗೆ ಹೋಗಿ, ದಾದಿಯು ಮಗುವಿಗೆ ಈ ಶ್ಲೋಕ ಹಾಡುವುದನ್ನು ಕೇಳಿ, ಅನೇಕ ದಿನ ಜಾಂಬವಂತನೊಡನೆ ಯುದ್ಧಮಾಡಿ ಗೆದ್ದನು; ಜಾಂಬವಂತನು ಅವನನ್ನು ತನ್ನ ಸ್ವಾಮಿ ಶ್ರೀರಾಮನೆಂದು ಅರಿತು ಮಣಿಯನ್ನೂ ಮಗಳು ಜಾಂಬವತಿಯನ್ನೂ ಕೊಟ್ಟನು. ಕೃಷ್ಣನು ಸಭೆಯಲ್ಲಿ ಮಣಿಯನ್ನು ಸತ್ರಾಜಿತನಿಗೆ ಹಿಂದಿರುಗಿಸಿದನು; ನಾಚಿದ ಸತ್ರಾಜಿತನು ಸತ್ಯಭಾಮೆಯನ್ನು ಕೊಟ್ಟನು. ಗಣಪತಿಯನ್ನು ನೋಡಿ ನಕ್ಕ ಚಂದ್ರನಿಗೆ ಶಾಪವಾಯಿತೆಂದೂ ಈ ವ್ರತ ಮಾಡಿ ಕಥೆ ಕೇಳುವವರಿಗೆ ಅಪವಾದ ಬಾರದೆಂದೂ ಪುಸ್ತಕ ಹೇಳುತ್ತದೆ. ವ್ರತಮುಕ್ತಾವಲಿ (ಮಾಧ್ವ) ಗಣಪತಿಯನ್ನು ಭಗವಂತನ ಮಹಾಭಕ್ತನೆಂದು ವಿವರಿಸಿ, ಈ ಕಥೆಯನ್ನು ಭಗವಂತನು ತನ್ನ ಭಕ್ತನನ್ನು ಗೌರವಿಸಿದುದಾಗಿ ತಿಳಿಸುತ್ತದೆ.",
      verses: [
        {
          text: "सिंहः प्रसेनमवधीत्सिंहो जाम्बवता हतः ।\nसुकुमारक मा रोदीस्तव ह्येष स्यमन्तकः ॥",
          meaning: {
            en: "The lion killed Prasena, and the lion was killed by Jambavan. Do not cry, little darling: this Syamantaka is yours.",
            kn: "ಸಿಂಹವು ಪ್ರಸೇನನನ್ನು ಕೊಂದಿತು, ಆ ಸಿಂಹವನ್ನು ಜಾಂಬವಂತನು ಕೊಂದನು. ಮುದ್ದು ಮಗುವೇ, ಅಳಬೇಡ; ಈ ಸ್ಯಮಂತಕವು ನಿನ್ನದೇ.",
          },
        },
      ],
    },
    {
      titleEn: "Visarjana",
      note: "In the evening (or on the day the family immerses the image) do a short uttara-puja with gandha, flowers and the twelve names (सुमुखाय नमः, एकदन्ताय नमः …), incense, lamp, naivedya and arati, then move the image slightly saying that the deity departs to his own place, and immerse the clay image in water. VM explains that clay returns to the water from which it came.",
      noteKn: "ಸಂಜೆ (ಅಥವಾ ಕುಟುಂಬದ ಸಂಪ್ರದಾಯದ ದಿನ) ಗಂಧ, ಹೂವು, ಸುಮುಖ-ಏಕದಂತಾದಿ ಹನ್ನೆರಡು ನಾಮಗಳು, ಧೂಪ, ದೀಪ, ನೈವೇದ್ಯ, ಮಂಗಳಾರತಿಗಳಿಂದ ಉತ್ತರಪೂಜೆ ಮಾಡಿ, ದೇವತೆಯು ತನ್ನ ಸ್ಥಾನಕ್ಕೆ ತೆರಳಿದನೆಂದು ಮೂರ್ತಿಯನ್ನು ಸ್ವಲ್ಪ ಸರಿಸಿ, ಮಣ್ಣಿನ ಮೂರ್ತಿಯನ್ನು ನೀರಿನಲ್ಲಿ ವಿಸರ್ಜಿಸಿ. ನೀರಿನಿಂದ ಹುಟ್ಟಿದ ಮಣ್ಣು ನೀರಿನಲ್ಲಿಯೇ ಸೇರುವುದು ಉಚಿತ ಎಂದು ವ್ರತಮುಕ್ತಾವಲಿ ಹೇಳುತ್ತದೆ.",
      verses: [
        {
          text: "ॐ सुमुखाय नमः । ॐ एकदन्ताय नमः । ॐ कपिलाय नमः ।\nॐ गजकर्णकाय नमः । ॐ लम्बोदराय नमः । ॐ विकटाय नमः ।\nॐ विघ्नराजाय नमः । ॐ गणाधिपाय नमः । ॐ धूमकेतवे नमः ।\nॐ गणाध्यक्षाय नमः । ॐ फालचन्द्राय नमः । ॐ गजाननाय नमः ॥",
          meaning: {
            en: "Salutations to the fair-faced, the single-tusked, the tawny, the elephant-eared, the big-bellied, the formidable, the king of obstacles, the lord of the ganas, the smoke-bannered, the chief of the ganas, the one with the moon on his brow, the elephant-faced.",
            kn: "ಸುಮುಖ, ಏಕದಂತ, ಕಪಿಲ, ಗಜಕರ್ಣಕ, ಲಂಬೋದರ, ವಿಕಟ, ವಿಘ್ನರಾಜ, ಗಣಾಧಿಪ, ಧೂಮಕೇತು, ಗಣಾಧ್ಯಕ್ಷ, ಫಾಲಚಂದ್ರ, ಗಜಾನನ ಎಂಬ ಹನ್ನೆರಡು ನಾಮಗಳಿಗೆ ನಮಸ್ಕಾರ.",
          },
        },
      ],
    },
  ],
};
