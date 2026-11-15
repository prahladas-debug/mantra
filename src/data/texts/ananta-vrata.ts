/**
 * Ananta Padmanabha Vrata (Bhadrapada shukla chaturdashi): worship of Sri Anantapadmanabha
 * (with Yamuna and Shesha) and the dora (thread) with fourteen knots, and the katha of Sushila
 * and Kaundinya. Only what is specific to this vrata is given; the common steps are in the app's
 * Shodashopachara Puja text. Collated Nov 2026.
 *
 * WITNESSES
 *   VM  Vrata Muktavali, ed. Vid. Venkatanarasimhacharya Rajapurohit, Sri Raghavendra Swami Matha,
 *       Mantralaya 2005 (Kannada script), "Sri Ananta Chaturdashi", pp. 210-257
 *       (archive.org Vrata_Muktaavali_-_Raghavendra_Swami_Matha_Mantralya_). Madhva.
 *   A   "Ananta Padmanabha Vrata Pooja Vidhi and Kathe" (Kannada booklet; archive.org
 *       ananta-padmanabha-vrata-pooja-vidhi-and-kathe-kannada), same list of the fourteen
 *       knot-names and same dora verses as VM.
 *   N   stotranidhi.com "Sri Anantha Padmanabha Swamy Vratham" (Telugu script; Smarta usage),
 *       with the Telugu katha.
 *   R   Satika Vrata Ratnamala (Kannada script, Smarta; archive.org satika-vrata-ratnamala),
 *       Ananta vrata kalpa: used to check the dora verses; its list of knot-names differs.
 *
 * CHOICES
 *   Yamuna dhyana: Madhva लोकपालस्तुतां देवीम् (VM A); Smarta क्षीरोदार्णवसम्भूते (N).
 *   Anantapadmanabha dhyana कृत्वा दर्भमयं देवम्: N; VM uses the same verses for the dhyana of Shesha
 *   in the Sankarshana puja before the Ananta puja. Avahana आगच्छानन्त देवेश: VM N.
 *   Fourteen knot-names: VM and A agree (अनन्त, नारसिंह, विष्णु, कृष्ण, हरि, शिव, ब्रह्मा, भास्कर, शेष,
 *   सर्वव्यापी, ईश्वर, विश्वरूप, महाकाय, सृष्टिस्थित्यन्तकारक). The Smarta books give other names
 *   (N: कृष्ण, विष्णु, जिष्णु, काल, ब्रह्मा, भास्कर, शेष, सोम, ईश्वर, विश्वात्मा, महाकाल,
 *   सृष्टिस्थित्यन्तकारी, अच्युत, अनन्तपद्मनाभ; R: अनन्त, कलात्मा, केशव, सङ्कर्षण, हलायुध ...): not given.
 *   Dora verses: अनन्तसंसारमहासमुद्रमग्नम् (VM N R), संसारगह्वरगुहासु (VM N R), प्रार्थना
 *   अनन्ताय नमस्तुभ्यम् (VM; N has the first line at the asana). Vayana: VM उभयोस्तारको यस्मात्
 *   (N अनन्तस्तारकोभाभ्याम्). Visarjana of the old thread: VM and N differ and both are given.
 *   Madhva sankalpa: the middle clauses (भगवतो बलेन ...) are damaged in the scan and not printed.
 *   Katha: retold from VM (Kannada prose, Bhavishyottara Purana, Krishna to Yudhishthira) and N.
 *
 */
import type { Mantra } from '../types';

export const anantaVrata: Mantra = {
  id: "ananta-vrata",
  title: "श्रीअनन्तपद्मनाभव्रतम्",
  titleEn: "Ananta Padmanabha Vrata (Ananta Chaturdashi)",
  category: "puja",
  deity: "Sri Ananta Padmanabha (Vishnu on Shesha)",
  source: "Bhavishyottara Purana katha; Vrata Muktavali (Raghavendra Matha); stotranidhi Ananta Padmanabha Vratam",
  summary: "The worship of Sri Anantapadmanabha on Bhadrapada shukla chaturdashi: sankalpa, the Yamuna kalasha, the darbha image of Shesha and the Lord, the thread (dora) with fourteen knots worshipped knot by knot, taking and tying it on the right arm with its prayer verses, giving up the old thread, the vayana gift, and the katha of Sushila and Kaundinya told by Krishna to Yudhishthira.",
  summaryKn: "ಭಾದ್ರಪದ ಶುಕ್ಲ ಚತುರ್ದಶಿಯಂದು ಶ್ರೀಅನಂತಪದ್ಮನಾಭನ ಪೂಜೆ: ಸಂಕಲ್ಪ, ಯಮುನಾ ಕಲಶ, ದರ್ಭೆಯ ಶೇಷ ಮತ್ತು ಭಗವಂತನ ಪ್ರತಿಮೆ, ಹದಿನಾಲ್ಕು ಗಂಟಿನ ದೋರದ ಗ್ರಂಥಿಪೂಜೆ, ಅದನ್ನು ಸ್ವೀಕರಿಸಿ ಬಲಗೈಗೆ ಕಟ್ಟಿಕೊಳ್ಳುವ ಮಂತ್ರಗಳು, ಹಳೆಯ ದಾರದ ವಿಸರ್ಜನೆ, ವಾಯನದಾನ, ಮತ್ತು ಕೃಷ್ಣನು ಯುಧಿಷ್ಠಿರನಿಗೆ ಹೇಳಿದ ಶೀಲೆ-ಕೌಂಡಿನ್ಯರ ಕಥೆ.",
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
  contentNote: "Gives only what is specific to this vrata. Acamana, pranayama, desha-kala sankalpa, Ganapati puja, kalasha puja, prana-pratishtha and the sixteen upacharas (with the Purusha Sukta rik for each) are as in the Shodashopachara Puja text, with the deity name changed. Left out: the Madhva Shesha-Sankarshana puja verses, the Yamuna puja upacharas, the Anantapadmanabha ashtottara, the Smarta lists of knot-names (they differ from book to book), the udyapana, and the Sanskrit/Telugu katha text, which is retold in the note of the last section.",
  sections: [
    {
      title: "सङ्कल्पः",
      titleEn: "Sankalpa (Madhva)",
      note: "Ananta Chaturdashi is on Bhadrapada shukla chaturdashi, at the end of the Ganesha festival. Madhva practice (Raghavendra Matha manual): set up a kalasha for Yamuna and make an image of Shesha in darbha, and a second kalasha for Anantapadmanabha; offer food cooked from a measure of rice (half to the brahmanas, half eaten). Do the family puja, Ganapati puja, kalasha puja, Yamuna puja, then Shesha (with Sankarshana within) and then Ananta puja. The clauses in the middle of the sankalpa (bhagavato balena, viryena …) are damaged in the scan and are not printed; say them as your manual gives.",
      noteKn: "ಭಾದ್ರಪದ ಶುಕ್ಲ ಚತುರ್ದಶಿಯಂದು ಅನಂತ ಚತುರ್ದಶಿ. ಮಾಧ್ವ ಕ್ರಮ (ರಾಘವೇಂದ್ರ ಮಠದ ಪುಸ್ತಕ): ಯಮುನೆಗೆ ಒಂದು ಕಲಶ, ದರ್ಭೆಯಿಂದ ಶೇಷನ ಪ್ರತಿಮೆ, ಅನಂತಪದ್ಮನಾಭನಿಗೆ ಇನ್ನೊಂದು ಕಲಶ; ಒಂದು ಸೇರು ಅಕ್ಕಿಯಿಂದ ಅಡುಗೆ ಮಾಡಿ ಅರ್ಧ ಬ್ರಾಹ್ಮಣರಿಗೆ, ಅರ್ಧ ತನಗೆ. ಮನೆಯ ಪೂಜೆ, ಗಣಪತಿ ಪೂಜೆ, ಕಲಶಪೂಜೆ, ಯಮುನಾ ಪೂಜೆ, ಶೇಷ (ಅಂತರ್ಗತ ಸಂಕರ್ಷಣ) ಪೂಜೆ, ನಂತರ ಅನಂತ ಪೂಜೆ. ಸಂಕಲ್ಪದ ಮಧ್ಯದ ವಾಕ್ಯಗಳು (ಭಗವತೋ ಬಲೇನ, ವೀರ್ಯೇಣ …) ಸ್ಕ್ಯಾನ್‌ನಲ್ಲಿ ಹಾಳಾಗಿದ್ದು ಇಲ್ಲಿ ಕೊಟ್ಟಿಲ್ಲ; ನಿಮ್ಮ ಪುಸ್ತಕದಂತೆ ಹೇಳಿ.",
      when: {
        tradition: [
          "madhva",
        ],
      },
      verses: [
        {
          text: "अस्माकं सकुटुम्बानां क्षेमस्थैर्यविजयवीर्यायुरारोग्यैश्वर्याभिवृद्ध्यर्थं\nधर्मार्थकाममोक्षाख्यचतुर्विधपुरुषार्थसिद्ध्यर्थं\nज्ञानभक्तिवैराग्यसिद्ध्यर्थं श्रीमद्राघवेन्द्रतीर्थगुर्वन्तर्गत\nभारतीरमणमुख्यप्राणान्तर्गत श्रीअनन्तपद्मनाभप्रेरणया\nश्रीअनन्तपद्मनाभप्रीत्यर्थं\nध्यानावाहनादिषोडशोपचारपूजां करिष्ये ॥",
          meaning: {
            en: "For the growth of well-being, steadiness, victory, vigour, long life, health and prosperity for us and our family; for the four aims of life; for knowledge, devotion and detachment: prompted by and for the pleasure of Sri Anantapadmanabha, who dwells in Mukhyaprana, who dwells in my guru Sri Raghavendra Tirtha, I shall perform the sixteen-step worship beginning with meditation and invocation.",
            kn: "ನಮಗೂ ನಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ಕ್ಷೇಮ, ಸ್ಥೈರ್ಯ, ವಿಜಯ, ವೀರ್ಯ, ಆಯುಷ್ಯ, ಆರೋಗ್ಯ, ಐಶ್ವರ್ಯಗಳ ವೃದ್ಧಿಗಾಗಿ; ನಾಲ್ಕು ಪುರುಷಾರ್ಥಗಳ ಸಿದ್ಧಿಗಾಗಿ; ಜ್ಞಾನ-ಭಕ್ತಿ-ವೈರಾಗ್ಯಗಳಿಗಾಗಿ; ಶ್ರೀರಾಘವೇಂದ್ರತೀರ್ಥ ಗುರುಗಳ ಅಂತರ್ಗತ, ಭಾರತೀರಮಣ ಮುಖ್ಯಪ್ರಾಣನ ಅಂತರ್ಗತ ಶ್ರೀಅನಂತಪದ್ಮನಾಭನ ಪ್ರೇರಣೆಯಿಂದ ಅವನ ಪ್ರೀತಿಗಾಗಿ ಧ್ಯಾನ-ಆವಾಹನಾದಿ ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.",
          },
        },
      ],
    },
    {
      title: "सङ्कल्पः",
      titleEn: "Sankalpa (Smarta)",
      note: "Smarta practice (Karnataka and Andhra books): do Ganapati puja, then the Yamuna puja on a second kalasha (kalasha puja, sankalpa for Yamuna puja, dhyana, arati, mantra-pushpa, pradakshina), then the Anantapadmanabha puja on a darbha image (or a kalasha) after a fresh sankalpa. The Smarta vrata is described as to be kept every year.",
      noteKn: "ಸ್ಮಾರ್ತ ಕ್ರಮ (ಕರ್ನಾಟಕ-ಆಂಧ್ರ ಪುಸ್ತಕಗಳು): ಗಣಪತಿ ಪೂಜೆ, ನಂತರ ಎರಡನೆಯ ಕಲಶದಲ್ಲಿ ಯಮುನಾ ಪೂಜೆ (ಕಲಶಪೂಜೆ, ಸಂಕಲ್ಪ, ಧ್ಯಾನ, ನೀರಾಜನ, ಮಂತ್ರಪುಷ್ಪ, ಪ್ರದಕ್ಷಿಣೆ), ನಂತರ ಹೊಸ ಸಂಕಲ್ಪದೊಂದಿಗೆ ದರ್ಭೆಯ ಪ್ರತಿಮೆ (ಅಥವಾ ಕಲಶ) ಯಲ್ಲಿ ಅನಂತಪದ್ಮನಾಭ ಪೂಜೆ. ಈ ವ್ರತವನ್ನು ವರ್ಷ ವರ್ಷ ಆಚರಿಸಬೇಕೆಂದು ಹೇಳಲಾಗಿದೆ.",
      when: {
        tradition: [
          "smarta",
        ],
      },
      verses: [
        {
          text: "अस्माकं सहकुटुम्बानां क्षेमस्थैर्यविजयायुरारोग्यैश्वर्याभिवृद्ध्यर्थं\nधर्मार्थकाममोक्षचतुर्विधपुरुषार्थफलसिद्ध्यर्थं\nइष्टकाम्यार्थसिद्ध्यर्थं सत्सन्तानसौभाग्यशुभफलावाप्त्यर्थं वर्षे वर्षे\nप्रयुक्तश्रीअनन्तपद्मनाभदेवतामुद्दिश्य\nश्रीअनन्तपद्मनाभदेवताप्रीत्यर्थं कल्पोक्तप्रकारेण यावच्छक्ति\nध्यानावाहनादिषोडशोपचारपूजां करिष्ये ॥",
          meaning: {
            en: "For the growth of well-being, steadiness, victory, long life, health and prosperity for us and our family; for the fruit of the four aims of life; for the fulfilment of cherished wishes; for good children, good fortune and auspicious fruit, as undertaken year after year, dedicated to the god Sri Anantapadmanabha and for his pleasure, I shall perform, as far as I am able and as the kalpa teaches, the sixteen-step worship beginning with meditation and invocation.",
            kn: "ನಮಗೂ ನಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ಕ್ಷೇಮ, ಸ್ಥೈರ್ಯ, ವಿಜಯ, ಆಯುಷ್ಯ, ಆರೋಗ್ಯ, ಐಶ್ವರ್ಯಗಳ ವೃದ್ಧಿಗಾಗಿ; ನಾಲ್ಕು ಪುರುಷಾರ್ಥ ಫಲಸಿದ್ಧಿಗಾಗಿ; ಇಷ್ಟಕಾಮ್ಯಾರ್ಥ ಸಿದ್ಧಿಗಾಗಿ; ಸತ್ಸಂತಾನ, ಸೌಭಾಗ್ಯ, ಶುಭಫಲ ಪ್ರಾಪ್ತಿಗಾಗಿ; ವರ್ಷ ವರ್ಷ ಆಚರಿಸುವ ಶ್ರೀಅನಂತಪದ್ಮನಾಭ ದೇವತೆಯನ್ನು ಉದ್ದೇಶಿಸಿ ಅವನ ಪ್ರೀತಿಗಾಗಿ ಕಲ್ಪದಲ್ಲಿ ಹೇಳಿದಂತೆ ಯಥಾಶಕ್ತಿ ಧ್ಯಾನ-ಆವಾಹನಾದಿ ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯನ್ನು ಮಾಡುತ್ತೇನೆ.",
          },
        },
      ],
    },
    {
      title: "यमुनापूजा",
      titleEn: "Yamuna: dhyana",
      note: "On the Yamuna kalasha. Madhva and Smarta books give different dhyana verses; each is followed by the formula श्रीयमुनायै नमः । ध्यायामि । ध्यानं समर्पयामि. Then do the avahana and the sixteen upacharas for Yamuna as in the Shodashopachara Puja.",
      noteKn: "ಯಮುನಾ ಕಲಶದಲ್ಲಿ. ಮಾಧ್ವ ಮತ್ತು ಸ್ಮಾರ್ತ ಪುಸ್ತಕಗಳಲ್ಲಿ ಧ್ಯಾನ ಶ್ಲೋಕ ಬೇರೆ; ಪ್ರತಿಯೊಂದರ ನಂತರ \"ಶ್ರೀಯಮುನಾಯೈ ನಮಃ, ಧ್ಯಾಯಾಮಿ, ಧ್ಯಾನಂ ಸಮರ್ಪಯಾಮಿ\". ನಂತರ ಆವಾಹನೆ ಮತ್ತು ಷೋಡಶೋಪಚಾರಗಳನ್ನು ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯಂತೆ ಮಾಡಿ.",
      verses: [
        {
          text: "लोकपालस्तुतां देवीमिन्द्रनीलसमप्रभाम् ।\nयमुने त्वामहं ध्याये सर्वकामार्थसिद्धये ॥",
          meaning: {
            en: "O Yamuna, goddess praised by the guardians of the worlds, bright as a sapphire, I meditate on you for the fulfilment of all wishes.",
            kn: "ಲೋಕಪಾಲಕರಿಂದ ಸ್ತುತಿಸಲ್ಪಟ್ಟ, ಇಂದ್ರನೀಲದಂತೆ ಹೊಳೆಯುವ ದೇವಿ ಯಮುನೆಯೇ, ಸರ್ವ ಕಾಮ-ಅರ್ಥಗಳ ಸಿದ್ಧಿಗಾಗಿ ನಿನ್ನನ್ನು ಧ್ಯಾನಿಸುತ್ತೇನೆ.",
          },
          when: {
            tradition: [
              "madhva",
            ],
          },
        },
        {
          text: "क्षीरोदार्णवसम्भूते इन्द्रनीलसमप्रभे ।\nध्यानं करोमि यमुने विष्णुरूपि नमोऽस्तु ते ॥",
          meaning: {
            en: "O Yamuna, born of the ocean of milk, bright as a sapphire, who have the form of Vishnu, I meditate on you; salutations to you.",
            kn: "ಕ್ಷೀರಸಾಗರದಲ್ಲಿ ಹುಟ್ಟಿದ, ಇಂದ್ರನೀಲದಂತೆ ಹೊಳೆಯುವ, ವಿಷ್ಣುರೂಪಿಣಿಯಾದ ಯಮುನೆಯೇ, ಧ್ಯಾನಿಸುತ್ತೇನೆ; ನಿನಗೆ ನಮಸ್ಕಾರ.",
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
      title: "अनन्तपद्मनाभपूजा",
      titleEn: "Anantapadmanabha: dhyana and avahana",
      note: "The Lord is worshipped on a darbha image placed in the second kalasha (in the Madhva manual the Shesha image is worshipped first with its own Sankarshana puja, using the same dhyana verses). Meditate with flowers in hand, then invite him, and continue with the sixteen upacharas with the Purusha Sukta rik for each, using the formula ॐ श्रीमदनन्तपद्मनाभाय नमः. The dhyana verse is the one of the Smarta manual; the Madhva manual gives it for Shesha.",
      noteKn: "ಎರಡನೆಯ ಕಲಶದಲ್ಲಿರಿಸಿದ ದರ್ಭೆಯ ಪ್ರತಿಮೆಯಲ್ಲಿ ಭಗವಂತನ ಪೂಜೆ (ಮಾಧ್ವ ಪುಸ್ತಕದಲ್ಲಿ ಮೊದಲು ಶೇಷನ ಪ್ರತಿಮೆಗೆ ಸಂಕರ್ಷಣ ಪೂಜೆ ಇದೇ ಧ್ಯಾನ ಶ್ಲೋಕಗಳೊಡನೆ). ಹೂವು ಹಿಡಿದು ಧ್ಯಾನಿಸಿ, ಆವಾಹಿಸಿ, ಪ್ರತಿ ಉಪಚಾರಕ್ಕೆ ಪುರುಷಸೂಕ್ತದ ಋಕ್ ಸಹಿತ \"ಓಂ ಶ್ರೀಮದನಂತಪದ್ಮನಾಭಾಯ ನಮಃ\" ಎಂದು ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯಂತೆ ಮುಂದುವರಿಸಿ. ಧ್ಯಾನ ಶ್ಲೋಕ ಸ್ಮಾರ್ತ ಪುಸ್ತಕದ್ದು; ಮಾಧ್ವ ಪುಸ್ತಕದಲ್ಲಿ ಅದು ಶೇಷನ ಧ್ಯಾನಕ್ಕೆ.",
      verses: [
        {
          text: "कृत्वा दर्भमयं देवं परिधानसमन्वितम् ।\nफणैः सप्तभिराविष्टं पिङ्गलाक्षं चतुर्भुजम् ॥\nदक्षिणाग्रकरे पद्मं शङ्खं तस्याप्यधः करे ।\nचक्रमूर्ध्वकरे वामे गदां तस्याप्यधः करे ॥\nअव्ययं सर्वलोकेशं पीताम्बरधरं हरिम् ।\nदुग्धाब्धिशायिनं ध्यात्वा दैवमावाहयेत्सुधीः ॥",
          meaning: {
            en: "Having made the god in darbha grass, clothed, covered with seven hoods, tawny-eyed, four-armed, with a lotus in the front right hand and a conch in the lower, a discus in the upper left and a mace in the lower, the imperishable lord of all the worlds, clad in yellow, Hari, resting on the milk ocean: having meditated thus, the wise one should invoke the god.",
            kn: "ದರ್ಭೆಯಿಂದ ವಸ್ತ್ರ ಸಹಿತವಾದ, ಏಳು ಹೆಡೆಗಳಿಂದ ಕೂಡಿದ, ಪಿಂಗಲ ನೇತ್ರದ, ಚತುರ್ಭುಜನಾದ, ಬಲಗೈಯ ತುದಿಯಲ್ಲಿ ಪದ್ಮ, ಅದರ ಕೆಳಗಿನ ಕೈಯಲ್ಲಿ ಶಂಖ, ಎಡದ ಮೇಲಿನ ಕೈಯಲ್ಲಿ ಚಕ್ರ, ಅದರ ಕೆಳಗಿನ ಕೈಯಲ್ಲಿ ಗದೆ ಧರಿಸಿದ, ಅವ್ಯಯನಾದ ಸರ್ವಲೋಕೇಶನಾದ ಪೀತಾಂಬರಧಾರಿ ಹರಿಯನ್ನು ಕ್ಷೀರಸಾಗರಶಾಯಿಯೆಂದು ಧ್ಯಾನಿಸಿ ಬುದ್ಧಿವಂತನು ದೇವನನ್ನು ಆವಾಹಿಸಬೇಕು.",
          },
          when: {
            tradition: [
              "smarta",
            ],
          },
        },
        {
          text: "ॐ नमो भगवते वासुदेवाय श्रीअनन्तपद्मनाभाय नमः ।\nध्यानं समर्पयामि ॥",
          meaning: {
            en: "Om, salutations to the Lord Vasudeva, to Sri Anantapadmanabha; I offer this meditation.",
            kn: "ಓಂ ಭಗವಾನ್ ವಾಸುದೇವನಿಗೆ, ಶ್ರೀಅನಂತಪದ್ಮನಾಭನಿಗೆ ನಮಸ್ಕಾರ; ಧ್ಯಾನವನ್ನು ಸಮರ್ಪಿಸುತ್ತೇನೆ.",
          },
          when: {
            tradition: [
              "smarta",
            ],
          },
        },
        {
          text: "आगच्छानन्त देवेश तेजोराशे जगत्पते ।\nइमां मया कृतां पूजां गृहाण सुरसत्तम ॥\nॐ श्रीमदनन्तपद्मनाभाय नमः । आवाहयामि ॥",
          meaning: {
            en: "Come, O Ananta, lord of the gods, mass of radiance, lord of the world; accept this worship that I have made, O best of the gods. Om, salutations to Sri Anantapadmanabha; I invoke him.",
            kn: "ಅನಂತನೇ, ದೇವೇಶನೇ, ತೇಜೋರಾಶಿಯೇ, ಜಗತ್ಪತಿಯೇ, ಬಾ; ಸುರಶ್ರೇಷ್ಠನೇ, ನಾನು ಮಾಡಿದ ಈ ಪೂಜೆಯನ್ನು ಸ್ವೀಕರಿಸು. ಓಂ ಶ್ರೀಮದನಂತಪದ್ಮನಾಭನಿಗೆ ನಮಸ್ಕಾರ; ಆವಾಹಿಸುತ್ತೇನೆ.",
          },
        },
      ],
    },
    {
      title: "नूतनदोरस्थापनं ग्रन्थिपूजा",
      titleEn: "The new thread and the fourteen knots",
      note: "Prepare a firm thread of cotton or silk, reddened with kumkuma, with fourteen knots (made by the family, or bought), place it in a plate with two betel leaves before the Lord, and worship the knots in turn. Madhva: the fourteen names below are all names of Hari (Ananta, Narasimha, Vishnu, Krishna, Hari, Shiva, Brahma, Bhaskara, Shesha, Sarvavyapi, Ishvara, Vishvarupa, Mahakaya, Srishtisthityantakaraka), as given by the Raghavendra Matha manual and the Kannada booklet. The Smarta books use other names (and some begin with Krishna); say the list in your manual.",
      noteKn: "ಕುಂಕುಮದಿಂದ ಕೆಂಪಾದ, ಹದಿನಾಲ್ಕು ಗಂಟುಳ್ಳ ದೃಢವಾದ (ಹತ್ತಿ ಅಥವಾ ರೇಶಿಮೆಯ) ದಾರವನ್ನು ಎರಡು ವೀಳ್ಯದೆಲೆಯೊಡನೆ ತಟ್ಟೆಯಲ್ಲಿ ದೇವರ ಮುಂದಿಟ್ಟು ಗಂಟುಗಳನ್ನು ಕ್ರಮವಾಗಿ ಪೂಜಿಸಿ. ಮಾಧ್ವ: ಕೆಳಗಿನ ಹದಿನಾಲ್ಕು ನಾಮಗಳೂ ಹರಿಯ ನಾಮಗಳೇ (ರಾಘವೇಂದ್ರ ಮಠದ ಪುಸ್ತಕ ಮತ್ತು ಕನ್ನಡ ಕಿರುಹೊತ್ತಿಗೆಯಂತೆ). ಸ್ಮಾರ್ತ ಪುಸ್ತಕಗಳಲ್ಲಿ ನಾಮಗಳು ಬೇರೆ (ಕೆಲವು ಕೃಷ್ಣನಿಂದ ಆರಂಭ); ನಿಮ್ಮ ಪುಸ್ತಕದ ಪಟ್ಟಿಯನ್ನು ಹೇಳಿ.",
      verses: [
        {
          text: "तस्याग्रतो दृढं सूत्रं कुङ्कुमाक्तं सुदोरकम् ।\nचतुर्दशग्रन्थियुक्तमुपकल्प्य प्रपूजयेत् ॥",
          meaning: {
            en: "Before him one should arrange a firm, good thread smeared with kumkuma, with fourteen knots, and worship it.",
            kn: "ಅವನ ಮುಂದೆ ಕುಂಕುಮದಿಂದ ಲೇಪಿತವಾದ, ಹದಿನಾಲ್ಕು ಗಂಟುಗಳಿಂದ ಕೂಡಿದ ದೃಢವಾದ ಒಳ್ಳೆಯ ದಾರವನ್ನು ಸಿದ್ಧಪಡಿಸಿಟ್ಟು ಪೂಜಿಸಬೇಕು.",
          },
        },
        {
          text: "ॐ अनन्ताय नमः । प्रथमग्रन्थिं पूजयामि ।\nॐ नारसिंहाय नमः । द्वितीयग्रन्थिं पूजयामि ।\nॐ विष्णवे नमः । तृतीयग्रन्थिं पूजयामि ।\nॐ कृष्णाय नमः । चतुर्थग्रन्थिं पूजयामि ।\nॐ हरये नमः । पञ्चमग्रन्थिं पूजयामि ।\nॐ शिवाय नमः । षष्ठग्रन्थिं पूजयामि ।\nॐ ब्रह्मणे नमः । सप्तमग्रन्थिं पूजयामि ॥",
          meaning: {
            en: "Salutations to Ananta: I worship the first knot; to Narasimha: the second; to Vishnu: the third; to Krishna: the fourth; to Hari: the fifth; to Shiva (the auspicious one): the sixth; to Brahma (the great one): the seventh.",
            kn: "ಅನಂತನಿಗೆ ಮೊದಲನೆಯ ಗಂಟು, ನಾರಸಿಂಹನಿಗೆ ಎರಡನೆಯ, ವಿಷ್ಣುವಿಗೆ ಮೂರನೆಯ, ಕೃಷ್ಣನಿಗೆ ನಾಲ್ಕನೆಯ, ಹರಿಗೆ ಐದನೆಯ, ಶಿವನಿಗೆ ಆರನೆಯ, ಬ್ರಹ್ಮನಿಗೆ ಏಳನೆಯ ಗಂಟನ್ನು ಪೂಜಿಸುತ್ತೇನೆ.",
          },
          when: {
            tradition: [
              "madhva",
            ],
          },
        },
        {
          text: "ॐ भास्कराय नमः । अष्टमग्रन्थिं पूजयामि ।\nॐ शेषाय नमः । नवमग्रन्थिं पूजयामि ।\nॐ सर्वव्यापिने नमः । दशमग्रन्थिं पूजयामि ।\nॐ ईश्वराय नमः । एकादशग्रन्थिं पूजयामि ।\nॐ विश्वरूपाय नमः । द्वादशग्रन्थिं पूजयामि ।\nॐ महाकायाय नमः । त्रयोदशग्रन्थिं पूजयामि ।\nॐ सृष्टिस्थित्यन्तकारकाय नमः । चतुर्दशग्रन्थिं पूजयामि ॥",
          meaning: {
            en: "Salutations to Bhaskara, the sun: I worship the eighth knot; to Shesha: the ninth; to the all-pervading: the tenth; to Ishvara, the Lord: the eleventh; to the one of universal form: the twelfth; to the great-bodied: the thirteenth; to the cause of creation, preservation and dissolution: the fourteenth.",
            kn: "ಭಾಸ್ಕರನಿಗೆ ಎಂಟನೆಯ ಗಂಟು, ಶೇಷನಿಗೆ ಒಂಬತ್ತನೆಯ, ಸರ್ವವ್ಯಾಪಿಗೆ ಹತ್ತನೆಯ, ಈಶ್ವರನಿಗೆ ಹನ್ನೊಂದನೆಯ, ವಿಶ್ವರೂಪನಿಗೆ ಹನ್ನೆರಡನೆಯ, ಮಹಾಕಾಯನಿಗೆ ಹದಿಮೂರನೆಯ, ಸೃಷ್ಟಿ-ಸ್ಥಿತಿ-ಅಂತ್ಯಕಾರಕನಿಗೆ ಹದಿನಾಲ್ಕನೆಯ ಗಂಟನ್ನು ಪೂಜಿಸುತ್ತೇನೆ.",
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
      title: "दोरग्रहणं बन्धनं च",
      titleEn: "Prayer, taking and tying the thread",
      note: "After the pradakshina and namaskara, pray to the thread and take it from the Lord's presence with the first verse. Salute the thread with the second. Then tie it: men on the right arm; women touch it to the left hand and tie it on the right (Madhva) or wear it at the neck (some Smarta families). Say the third verse (the Kaundinya verse, from the katha) as it is tied. Wear it for fourteen days or until the next vrata; the old thread of the previous year is given up as below.",
      noteKn: "ಪ್ರದಕ್ಷಿಣೆ-ನಮಸ್ಕಾರದ ನಂತರ ದೋರವನ್ನು ಪ್ರಾರ್ಥಿಸಿ ಮೊದಲ ಶ್ಲೋಕ ಹೇಳಿ ದೇವರ ಸನ್ನಿಧಿಯಿಂದ ಸ್ವೀಕರಿಸಿ. ಎರಡನೆಯ ಶ್ಲೋಕದಿಂದ ದೋರಕ್ಕೆ ನಮಸ್ಕರಿಸಿ. ಮೂರನೆಯ ಶ್ಲೋಕ (ಕಥೆಯಲ್ಲಿರುವ ಕೌಂಡಿನ್ಯ ಶ್ಲೋಕ) ಹೇಳುತ್ತಾ ಕಟ್ಟಿಕೊಳ್ಳಿ: ಪುರುಷರು ಬಲತೋಳಿಗೆ; ಸ್ತ್ರೀಯರು ಎಡಗೈಗೆ ಮುಟ್ಟಿಸಿ ಬಲಗೈಗೆ (ಮಾಧ್ವ) ಅಥವಾ ಕೆಲವು ಸ್ಮಾರ್ತ ಕುಟುಂಬಗಳಲ್ಲಿ ಕುತ್ತಿಗೆಗೆ ಧರಿಸುತ್ತಾರೆ. ಹದಿನಾಲ್ಕು ದಿನ ಅಥವಾ ಮುಂದಿನ ವ್ರತದವರೆಗೆ ಧರಿಸಿ; ಹಿಂದಿನ ವರ್ಷದ ಹಳೆಯ ದಾರವನ್ನು ಕೆಳಗಿನಂತೆ ಬಿಡಿ.",
      verses: [
        {
          text: "अनन्ताय नमस्तुभ्यं सहस्रशिरसे नमः ।\nनमोऽस्तु पद्मनाभाय नागानां पतये नमः ॥\nअनन्तः कामदः श्रीमाननन्तो मे प्रयच्छतु ।\nअनन्तो दोररूपेण पुत्रपौत्रान् विवर्धय ॥",
          meaning: {
            en: "Salutations to Ananta, salutations to him of the thousand heads; salutations to Padmanabha, lord of the serpents. May the prosperous Ananta, giver of wishes, grant me my wish; O Ananta, in the form of the thread, make my sons and grandsons grow.",
            kn: "ಅನಂತನಿಗೆ ನಮಸ್ಕಾರ, ಸಾವಿರ ಶಿರಗಳುಳ್ಳವನಿಗೆ ನಮಸ್ಕಾರ; ಪದ್ಮನಾಭನಿಗೆ, ನಾಗಗಳ ಒಡೆಯನಿಗೆ ನಮಸ್ಕಾರ. ಕಾಮದನಾದ ಶ್ರೀಮಂತನಾದ ಅನಂತನು ನನಗೆ ಕೊಡಲಿ; ದೋರರೂಪಿಯಾದ ಅನಂತನೇ, ಪುತ್ರ-ಪೌತ್ರರನ್ನು ವೃದ್ಧಿಸು.",
          },
          when: {
            tradition: [
              "madhva",
            ],
          },
        },
        {
          text: "अनन्तसंसारमहासमुद्रमग्नं समभ्युद्धर वासुदेव ।\nअनन्तरूपिन् विनियोजयस्व ह्यनन्तसूत्राय नमो नमस्ते ॥",
          meaning: {
            en: "Lift me, sunk in the great ocean of endless worldly life, O Vasudeva; O Lord of endless forms, engage me (in your service). Salutations again and again to you in the endless thread.",
            kn: "ಅನಂತವಾದ ಸಂಸಾರ ಮಹಾಸಮುದ್ರದಲ್ಲಿ ಮುಳುಗಿದ ನನ್ನನ್ನು, ವಾಸುದೇವನೇ, ಮೇಲೆತ್ತು; ಅನಂತರೂಪಿಯೇ, ನನ್ನನ್ನು (ನಿನ್ನ ಸೇವೆಯಲ್ಲಿ) ತೊಡಗಿಸು. ಅನಂತಸೂತ್ರ ರೂಪಿಯಾದ ನಿನಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.",
          },
        },
        {
          text: "संसारगह्वरगुहासु सुखं विहर्तुं\nवाञ्छन्ति ये कुरुकुलोद्वह शुद्धसत्त्वाः ।\nसम्पूज्य च त्रिभुवनेशमनन्तरूपं\nबध्नन्ति दक्षिणकरे वरदोरकं ते ॥",
          meaning: {
            en: "O scion of the Kuru line, pure-hearted people who wish to move happily through the dark caves of worldly life worship the lord of the three worlds in his endless form and tie this excellent thread on the right arm.",
            kn: "ಕುರುಕುಲೋದ್ಧಾರಕನೇ, ಸಂಸಾರವೆಂಬ ಗಹನ ಗುಹೆಗಳಲ್ಲಿ ಸುಖವಾಗಿ ಸಂಚರಿಸಲು ಬಯಸುವ ಶುದ್ಧಸತ್ತ್ವರು ಅನಂತರೂಪಿ ತ್ರಿಭುವನೇಶನನ್ನು ಪೂಜಿಸಿ ಬಲಗೈಗೆ ಈ ಶ್ರೇಷ್ಠ ದೋರವನ್ನು ಕಟ್ಟಿಕೊಳ್ಳುತ್ತಾರೆ.",
          },
        },
      ],
    },
    {
      title: "जीर्णदोरविसर्जनं वायनदानं च",
      titleEn: "Giving up the old thread; vayana",
      note: "If you wore a thread last year, untie it now, saying one of these verses (Madhva first, Smarta second), salute it and give it up (for example into water or at the foot of a tulasi). Then honour a brahmana: give the vayana (fruit, food, tambula, dakshina; in the Madhva manual with water poured and the dana vakya ending दत्तं न मम), saying the third verse. The brahmana says प्रतिगृह्णामि.",
      noteKn: "ಹಿಂದಿನ ವರ್ಷದ ದಾರವನ್ನು ಧರಿಸಿದ್ದರೆ, ಈಗ ಬಿಚ್ಚಿ ಈ ಶ್ಲೋಕಗಳಲ್ಲಿ ಒಂದನ್ನು (ಮೊದಲನೆಯದು ಮಾಧ್ವ, ಎರಡನೆಯದು ಸ್ಮಾರ್ತ) ಹೇಳಿ ನಮಸ್ಕರಿಸಿ ವಿಸರ್ಜಿಸಿ (ನೀರಿನಲ್ಲಿ ಅಥವಾ ತುಳಸಿಯ ಬುಡದಲ್ಲಿ). ನಂತರ ಬ್ರಾಹ್ಮಣನನ್ನು ಗೌರವಿಸಿ ವಾಯನ ಕೊಡಿ (ಹಣ್ಣು, ಅನ್ನ, ತಾಂಬೂಲ, ದಕ್ಷಿಣೆ; ಮಾಧ್ವ ಕ್ರಮದಲ್ಲಿ ನೀರು ಬಿಟ್ಟು \"ದತ್ತಂ ನ ಮಮ\" ಎಂಬ ದಾನವಾಕ್ಯ), ಮೂರನೆಯ ಶ್ಲೋಕ ಹೇಳಿ. ಬ್ರಾಹ್ಮಣನು \"ಪ್ರತಿಗೃಹ್ಣಾಮಿ\" ಎನ್ನುತ್ತಾನೆ.",
      verses: [
        {
          text: "विसर्जयामि देवेश पूर्वं सूत्रं धृतं परम् ।\nसम्पूर्णं व्रतमस्त्वत्र मत्कृतं त्वदनुज्ञया ॥",
          meaning: {
            en: "O lord of the gods, I give up the previous thread that I wore; by your leave, may the vow I kept be complete here.",
            kn: "ದೇವೇಶನೇ, ಹಿಂದೆ ಧರಿಸಿದ ದಾರವನ್ನು ವಿಸರ್ಜಿಸುತ್ತೇನೆ; ನಿನ್ನ ಅನುಜ್ಞೆಯಿಂದ ನಾನು ಮಾಡಿದ ವ್ರತ ಇಲ್ಲಿ ಸಂಪೂರ್ಣವಾಗಲಿ.",
          },
          when: {
            tradition: [
              "madhva",
            ],
          },
        },
        {
          text: "अनन्तानन्त देवेश ह्यनन्तफलदायक ।\nसूत्रग्रन्थिषु संस्थाय विश्वरूपाय ते नमः ॥",
          meaning: {
            en: "O Ananta, endless lord of the gods, giver of endless fruit, abiding in the knots of the thread, O one of universal form, salutations to you.",
            kn: "ಅನಂತನೇ, ದೇವೇಶನೇ, ಅನಂತ ಫಲದಾಯಕನೇ, ಸೂತ್ರದ ಗಂಟುಗಳಲ್ಲಿ ನೆಲೆಸಿದ ವಿಶ್ವರೂಪನೇ, ನಿನಗೆ ನಮಸ್ಕಾರ.",
          },
          when: {
            tradition: [
              "smarta",
            ],
          },
        },
        {
          text: "अनन्तः प्रतिगृह्णाति अनन्तो वै ददाति च ।\nउभयोस्तारको यस्मादनन्ताय नमो नमः ॥",
          meaning: {
            en: "Ananta receives and Ananta gives; because he saves both, salutations again and again to Ananta.",
            kn: "ಅನಂತನೇ ಸ್ವೀಕರಿಸುತ್ತಾನೆ, ಅನಂತನೇ ಕೊಡುತ್ತಾನೆ; ಅವನು ಇಬ್ಬರನ್ನೂ ತಾರಿಸುವುದರಿಂದ ಅನಂತನಿಗೆ ಮತ್ತೆ ಮತ್ತೆ ನಮಸ್ಕಾರ.",
          },
        },
      ],
    },
    {
      title: "समर्पणं कथा च",
      titleEn: "Samarpana and the katha of Sushila and Kaundinya",
      note: "Close with यस्य स्मृत्या and the samarpana of the Shodashopachara Puja, then: अनेन श्रीमदनन्तपद्मनाभपूजनेन … श्रीलक्ष्मीनारायणः प्रीयताम् (Madhva). Then hear the katha. In Naimisharanya Suta told the sages what Krishna told Yudhishthira, who had asked about the vrata after Duryodhana, at the Rajasuya hall, mistook the crystal floor for water and was laughed at, and the Ananta vrata saved the Pandavas from sorrow. Sushila, daughter of the brahmana Sumantu and Diksha, grew up in her stepmother Karkasha's house and was married to the sage Kaundinya. Karkasha gave the couple nothing but a packet of flour. Crossing the Yamuna, Kaundinya went to bathe, and Sushila saw women in red worshipping Ananta on the fourteenth day. They taught her the vrata: cook a measure of rice, offer half to Ananta and give half to a brahmana, worship a darbha Shesha on a bank with sandal, flowers, lamp and food, with a fourteen-knot kumkuma thread before him, and tie the thread on the arm. Sushila kept the vrata and her house prospered. Kaundinya, seeing the thread, was angry, tore it off and burned it. Ruin came upon him. He wandered, asking a mango tree, a cow, a bull, a lake and an old brahmana (who was Ananta) who led him into a cave to a vision of the divine; Ananta forgave him, and he kept the vrata for fourteen years and regained everything. Whoever keeps the vrata with devotion, and hears the katha, is freed from poverty and sorrow.",
      noteKn: "\"ಯಸ್ಯ ಸ್ಮೃತ್ಯಾ\" ಮತ್ತು ಷೋಡಶೋಪಚಾರ ಪೂಜೆಯ ಸಮರ್ಪಣೆಯೊಂದಿಗೆ ಮುಗಿಸಿ: \"ಅನೇನ ಶ್ರೀಮದನಂತಪದ್ಮನಾಭಪೂಜನೇನ … ಶ್ರೀಲಕ್ಷ್ಮೀನಾರಾಯಣಃ ಪ್ರೀಯತಾಮ್\" (ಮಾಧ್ವ). ನಂತರ ಕಥೆ ಕೇಳಿ. ನೈಮಿಷಾರಣ್ಯದಲ್ಲಿ ಸೂತನು ಹೇಳಿದ ಕೃಷ್ಣ-ಯುಧಿಷ್ಠಿರ ಸಂವಾದ: ರಾಜಸೂಯ ಯಜ್ಞಶಾಲೆಯಲ್ಲಿ ದುರ್ಯೋಧನನು ಸ್ಫಟಿಕದ ನೆಲವನ್ನು ನೀರೆಂದು ಭ್ರಮಿಸಿ ನಗೆಗೀಡಾದ ಮೇಲೆ ಯುಧಿಷ್ಠಿರನು ಪಾಂಡವರನ್ನು ದುಃಖದಿಂದ ಕಾಪಾಡಿದ ಅನಂತ ವ್ರತದ ಬಗ್ಗೆ ಕೇಳಿದನು. ಸುಮಂತು ಬ್ರಾಹ್ಮಣ ಮತ್ತು ದೀಕ್ಷೆಯ ಮಗಳು ಶೀಲೆ ಮಲತಾಯಿ ಕರ್ಕಶೆಯ ಮನೆಯಲ್ಲಿ ಬೆಳೆದು ಕೌಂಡಿನ್ಯ ಮುನಿಗೆ ಮದುವೆಯಾದಳು; ಕರ್ಕಶೆ ಬುತ್ತಿಯ ಹಿಟ್ಟನ್ನಷ್ಟೇ ಕೊಟ್ಟಳು. ಯಮುನಾ ತೀರದಲ್ಲಿ ಕೌಂಡಿನ್ಯನು ಸ್ನಾನಕ್ಕೆ ಹೋದಾಗ ಶೀಲೆ ಕೆಂಪು ವಸ್ತ್ರದ ಸ್ತ್ರೀಯರು ಚತುರ್ದಶಿಯಂದು ಅನಂತನನ್ನು ಪೂಜಿಸುವುದನ್ನು ಕಂಡಳು. ಅವರು ವ್ರತವನ್ನು ಹೇಳಿದರು: ಒಂದು ಸೇರು ಅಕ್ಕಿಯಿಂದ ಅಡುಗೆ ಮಾಡಿ ಅರ್ಧ ಅನಂತನಿಗೆ ಅರ್ಪಿಸಿ ಅರ್ಧ ಬ್ರಾಹ್ಮಣನಿಗೆ ಕೊಡಿ; ನದಿ ತೀರದಲ್ಲಿ ದರ್ಭೆಯ ಶೇಷನನ್ನು ಗಂಧ-ಪುಷ್ಪ-ದೀಪ-ನೈವೇದ್ಯಗಳಿಂದ ಪೂಜಿಸಿ, ಹದಿನಾಲ್ಕು ಗಂಟಿನ ಕುಂಕುಮದ ದಾರವನ್ನು ಮುಂದಿಟ್ಟು ಅದನ್ನು ತೋಳಿಗೆ ಕಟ್ಟಿಕೊಳ್ಳಿ. ಶೀಲೆ ವ್ರತ ಮಾಡಿದಳು, ಮನೆ ಸಂಪದ್ಭರಿತವಾಯಿತು. ದಾರವನ್ನು ಕಂಡ ಕೌಂಡಿನ್ಯನು ಕೋಪದಿಂದ ಅದನ್ನು ಕಿತ್ತು ಬೆಂಕಿಗೆ ಹಾಕಿದನು; ಸಂಪತ್ತು ನಾಶವಾಯಿತು. ಅವನು ಮಾವಿನ ಮರ, ಹಸು, ಎತ್ತು, ಕೊಳ ಮತ್ತು ವೃದ್ಧ ಬ್ರಾಹ್ಮಣನನ್ನು (ಅವನೇ ಅನಂತ) ಕೇಳುತ್ತಾ ಅಲೆದು, ಗುಹೆಯಲ್ಲಿ ದಿವ್ಯ ದರ್ಶನ ಪಡೆದನು; ಅನಂತನು ಕ್ಷಮಿಸಿದನು; ಹದಿನಾಲ್ಕು ವರ್ಷ ವ್ರತ ಮಾಡಿ ಎಲ್ಲವನ್ನೂ ಮರಳಿ ಪಡೆದನು. ಭಕ್ತಿಯಿಂದ ವ್ರತ ಮಾಡಿ ಕಥೆ ಕೇಳುವವರು ದಾರಿದ್ರ್ಯ-ದುಃಖಗಳಿಂದ ಮುಕ್ತರಾಗುತ್ತಾರೆ.",
      verses: [
        {
          text: "यस्य स्मृत्या च नामोक्त्या तपःपूजाक्रियादिषु ।\nन्यूनं सम्पूर्णतां याति सद्यो वन्दे तमच्युतम् ॥\nमन्त्रहीनं क्रियाहीनं भक्तिहीनं रमापते ।\nयत्पूजितं मया देव परिपूर्णं तदस्तु मे ॥",
          meaning: {
            en: "I bow to Achyuta, by remembering whom and speaking whose name any lack in austerity, worship or rite is at once made complete. O lord of Rama (Lakshmi), whatever worship I have done, lacking in mantra, rite and devotion, O God, may it be complete for me.",
            kn: "ಯಾರ ಸ್ಮರಣೆಯಿಂದಲೂ ನಾಮೋಚ್ಚಾರಣೆಯಿಂದಲೂ ತಪಸ್ಸು, ಪೂಜೆ, ಕ್ರಿಯೆಗಳಲ್ಲಿನ ಕೊರತೆ ತಕ್ಷಣ ಪೂರ್ಣವಾಗುವುದೋ ಆ ಅಚ್ಯುತನಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ. ರಮಾಪತಿಯೇ, ಮಂತ್ರಹೀನ, ಕ್ರಿಯಾಹೀನ, ಭಕ್ತಿಹೀನವಾಗಿ ನಾನು ಮಾಡಿದ ಪೂಜೆ, ದೇವನೇ, ನನಗೆ ಪರಿಪೂರ್ಣವಾಗಲಿ.",
          },
        },
      ],
    },
  ],
};
