/**
 * Taittiriya Upanishad, Shikshavalli (Taittiriya Aranyaka 7, Dravida
 * numbering; 12 anuvakas), with the opening and closing shanti mantras.
 *
 * Sources collated (Nov 2026):
 * - Taittiriya Upanishad with Shankara's bhashya, GRETIL (Sansknet input).
 * - Aitareyopanishad and Taittiriyopanishad with Shankara's commentary, ed. S.
 *   Sitarama Sastri (Madras 1923; eBharati Sampat no. 6194).
 * - Taittiriya Aranyaka, Dravida recension, saswara text on sa.wikisource
 *   (तैत्तिरीय-आरण्यकम्(विस्वर), prapathaka 5 of that numbering).
 * - stotranidhi.com Taittiriya Upanishad Shikshavalli.
 * Readings: तासामु ह स्मैतां (Sitarama, GRETIL; stotranidhi and Wikisource
 * run the words together); ये के चास्मच्छ्रेयांसः (Sitarama, Wikisource;
 * stotranidhi and GRETIL have चारुमच्छ्रेयांसः); विचिकित्सा (printed
 * editions; the saswara text has विचिकिथ्सा); सुमेधा अमृतोक्षितः (GRETIL,
 * stotranidhi, Wikisource; Sitarama has अमृतोऽक्षितः); यथाऽऽपः प्रवताऽऽयन्ति
 * (Sitarama, stotranidhi; GRETIL and Wikisource divide यथापः प्रवता यन्ति).
 * Wikisource's saswara text gives only the first of the five आ-मा-यन्तु
 * lines in 4.2 (the others are abbreviated); all printed editions give five.
 * Svaras omitted. The opening invocation ओं श्री गुरुभ्यो नमः । हरिः ओम् of
 * stotranidhi is not part of the text and is left out.
 */
import type { Mantra } from '../types';

const SAHA_NAVAVATU =
  'ॐ सह नाववतु । सह नौ भुनक्तु । सह वीर्यं करवावहै ।\nतेजस्वि नावधीतमस्तु मा विद्विषावहै ॥\nॐ शान्तिः शान्तिः शान्तिः ॥';

const SAHA_MEANING = {
  en: 'May He protect us both, teacher and student; may He nourish us both. May we work together with vigour; may what we have studied shine; may we never bear ill will toward each other. Om, peace, peace, peace.',
  kn: 'ಆ ಪರಮಾತ್ಮನು ಗುರು ಶಿಷ್ಯರಾದ ನಮ್ಮಿಬ್ಬರನ್ನೂ ಕಾಪಾಡಲಿ, ನಮ್ಮಿಬ್ಬರನ್ನೂ ಪೋಷಿಸಲಿ. ನಾವು ಒಟ್ಟಾಗಿ ಉತ್ಸಾಹದಿಂದ ಸಾಧನೆ ಮಾಡೋಣ. ನಾವು ಅಧ್ಯಯನ ಮಾಡಿದ ವಿದ್ಯೆ ತೇಜಸ್ವಿಯಾಗಲಿ; ನಾವು ಪರಸ್ಪರ ದ್ವೇಷಿಸದಿರೋಣ. ಓಂ ಶಾಂತಿಃ ಶಾಂತಿಃ ಶಾಂತಿಃ.',
};

export const taittiriyaShikshavalli: Mantra = {
  id: 'taittiriya-shikshavalli',
  title: 'तैत्तिरीयोपनिषत् शीक्षावल्ली',
  titleEn: 'Taittiriya Upanishad: Shikshavalli',
  category: 'vedic',
  deity: 'Brahman (Vishnu)',
  source: 'Taittiriya Upanishad (Taittiriya Aranyaka 7), Shikshavalli, anuvakas 1-12',
  summary:
    'The first chapter of the Taittiriya Upanishad, the chapter on Shiksha (the discipline of study). It contains the peace prayer to Mitra, Varuna and Vishnu, the teaching on correct recitation, the meditation on the Samhita, the prayers for wisdom and prosperity, the meditation on Om and the vyahritis, the duties of truth and self-study, and the teacher\'s farewell instruction to the graduating student: "speak the truth, follow dharma, let the mother, father, teacher and guest be as gods to you". It begins and ends with the shanti mantras.',
  summaryKn:
    'ತೈತ್ತಿರೀಯ ಉಪನಿಷತ್ತಿನ ಮೊದಲ ಅಧ್ಯಾಯ, ಶೀಕ್ಷಾ (ಅಧ್ಯಯನ ಶಿಸ್ತು) ವಲ್ಲಿ. ಮಿತ್ರ ವರುಣ ವಿಷ್ಣುಗಳಿಗೆ ಶಾಂತಿ ಪ್ರಾರ್ಥನೆ, ಸರಿಯಾದ ಉಚ್ಚಾರಣೆಯ ಬೋಧನೆ, ಸಂಹಿತೋಪಾಸನೆ, ಮೇಧೆ ಮತ್ತು ಸಂಪತ್ತಿಗಾಗಿ ಪ್ರಾರ್ಥನೆಗಳು, ಓಂಕಾರ ಮತ್ತು ವ್ಯಾಹೃತಿಗಳ ಉಪಾಸನೆ, ಸತ್ಯ ಸ್ವಾಧ್ಯಾಯಗಳ ಕರ್ತವ್ಯ ಮತ್ತು ಸ್ನಾತಕನಾಗುವ ಶಿಷ್ಯನಿಗೆ ಗುರುವಿನ ಕೊನೆಯ ಉಪದೇಶ ("ಸತ್ಯವನ್ನು ನುಡಿ, ಧರ್ಮವನ್ನು ನಡೆ; ತಾಯಿ, ತಂದೆ, ಗುರು, ಅತಿಥಿಯರನ್ನು ದೇವರಂತೆ ಕಾಣು") ಇದರಲ್ಲಿವೆ. ಶಾಂತಿಮಂತ್ರಗಳಿಂದ ಆರಂಭವಾಗಿ ಶಾಂತಿಮಂತ್ರಗಳಿಂದ ಮುಗಿಯುತ್ತದೆ.',
  difficulty: 'medium',
  completeness: 'complete',
  sections: [
    {
      title: 'शान्तिपाठः',
      titleEn: 'Opening Shanti',
      verses: [{ text: SAHA_NAVAVATU, meaning: SAHA_MEANING }],
    },
    {
      title: 'प्रथमोऽनुवाकः',
      titleEn: 'Anuvaka 1: Prayer for peace',
      verses: [
        {
          text: 'ॐ शं नो मित्रः शं वरुणः । शं नो भवत्वर्यमा ।\nशं न इन्द्रो बृहस्पतिः । शं नो विष्णुरुरुक्रमः ।\nनमो ब्रह्मणे । नमस्ते वायो ।\nत्वमेव प्रत्यक्षं ब्रह्मासि ।\nत्वमेव प्रत्यक्षं ब्रह्म वदिष्यामि ।\nऋतं वदिष्यामि । सत्यं वदिष्यामि ।\nतन्मामवतु । तद्वक्तारमवतु ।\nअवतु माम् । अवतु वक्तारम् ॥\nॐ शान्तिः शान्तिः शान्तिः ॥',
          meaning: {
            en: 'May Mitra be good to us, and Varuna; may Aryaman be good to us. May Indra and Brihaspati be good to us; may Vishnu of the wide stride be good to us. Salutation to Brahman. Salutation to you, Vayu: you are indeed the visible Brahman, and I shall call you the visible Brahman. I shall speak what is right; I shall speak what is true. May that protect me; may that protect the speaker. May it protect me; may it protect the speaker. Om, peace, peace, peace.',
            kn: 'ಮಿತ್ರನು ನಮಗೆ ಮಂಗಳವನ್ನು ಮಾಡಲಿ, ವರುಣನು ಮಂಗಳವನ್ನು ಮಾಡಲಿ; ಅರ್ಯಮನು ಮಂಗಳವನ್ನು ಮಾಡಲಿ. ಇಂದ್ರನೂ ಬೃಹಸ್ಪತಿಯೂ ಮಂಗಳವನ್ನು ಮಾಡಲಿ; ವಿಶಾಲವಾಗಿ ಹೆಜ್ಜೆಯಿಡುವ ವಿಷ್ಣುವು ಮಂಗಳವನ್ನು ಮಾಡಲಿ. ಬ್ರಹ್ಮನಿಗೆ ನಮಸ್ಕಾರ. ವಾಯುವೇ, ನಿನಗೆ ನಮಸ್ಕಾರ; ನೀನೇ ಪ್ರತ್ಯಕ್ಷ ಬ್ರಹ್ಮ, ನಿನ್ನನ್ನೇ ಪ್ರತ್ಯಕ್ಷ ಬ್ರಹ್ಮನೆಂದು ನಾನು ಹೇಳುವೆನು. ಋತವನ್ನು ನುಡಿಯುವೆನು, ಸತ್ಯವನ್ನು ನುಡಿಯುವೆನು. ಅದು ನನ್ನನ್ನು ಕಾಪಾಡಲಿ, ಹೇಳುವವನನ್ನು ಕಾಪಾಡಲಿ; ನನ್ನನ್ನು ಕಾಪಾಡಲಿ, ಹೇಳುವವನನ್ನು ಕಾಪಾಡಲಿ. ಓಂ ಶಾಂತಿಃ ಶಾಂತಿಃ ಶಾಂತಿಃ.',
          },
        },
      ],
    },
    {
      title: 'द्वितीयोऽनुवाकः',
      titleEn: 'Anuvaka 2: Shiksha, the science of pronunciation',
      verses: [
        {
          n: 1,
          text: 'ॐ शीक्षां व्याख्यास्यामः ।\nवर्णः स्वरः । मात्रा बलम् । साम सन्तानः ।\nइत्युक्तः शीक्षाध्यायः ॥',
          meaning: {
            en: 'Om. We shall explain Shiksha, the science of pronunciation: the letter, the pitch, the length, the effort of articulation, the evenness of delivery, the joining of sounds. Thus the chapter on Shiksha has been told.',
            kn: 'ಓಂ. ಶೀಕ್ಷೆಯನ್ನು, ಅಂದರೆ ಉಚ್ಚಾರಣಾಶಾಸ್ತ್ರವನ್ನು ವಿವರಿಸುತ್ತೇವೆ: ವರ್ಣ (ಅಕ್ಷರ), ಸ್ವರ (ಉದಾತ್ತಾದಿ), ಮಾತ್ರಾ (ಹ್ರಸ್ವ ದೀರ್ಘ), ಬಲ (ಉಚ್ಚಾರಣೆಯ ಪ್ರಯತ್ನ), ಸಾಮ (ಸಮತೆ), ಸಂತಾನ (ಅಕ್ಷರಗಳ ಜೋಡಣೆ). ಹೀಗೆ ಶೀಕ್ಷಾಧ್ಯಾಯವು ಹೇಳಲ್ಪಟ್ಟಿತು.',
          },
        },
      ],
    },
    {
      title: 'तृतीयोऽनुवाकः',
      titleEn: 'Anuvaka 3: Meditation on the Samhita',
      verses: [
        {
          n: 1,
          text: 'सह नौ यशः । सह नौ ब्रह्मवर्चसम् ।\nअथातः संहिताया उपनिषदं व्याख्यास्यामः ।\nपञ्चस्वधिकरणेषु ।\nअधिलोकमधिज्यौतिषमधिविद्यमधिप्रजमध्यात्मम् ।\nता महासंहिता इत्याचक्षते ॥',
          meaning: {
            en: 'May fame be ours together; may the radiance of sacred knowledge be ours together. Now we shall explain the meditation on the Samhita (the joining of sounds) under five heads: with regard to the worlds, the luminaries, knowledge, progeny and the self. These they call the great Samhitas.',
            kn: 'ನಮಗಿಬ್ಬರಿಗೂ ಒಟ್ಟಾಗಿ ಕೀರ್ತಿ ಲಭಿಸಲಿ; ನಮಗಿಬ್ಬರಿಗೂ ಒಟ್ಟಾಗಿ ಬ್ರಹ್ಮತೇಜಸ್ಸು ಲಭಿಸಲಿ. ಇನ್ನು ಸಂಹಿತೆಯ (ವರ್ಣಗಳ ಸಂಧಿಯ) ಉಪಾಸನೆಯನ್ನು ಐದು ಅಧಿಕರಣಗಳಲ್ಲಿ ವಿವರಿಸುತ್ತೇವೆ: ಲೋಕಗಳು, ಜ್ಯೋತಿಗಳು, ವಿದ್ಯೆ, ಪ್ರಜೆ ಮತ್ತು ಆತ್ಮ ಇವುಗಳ ಕುರಿತು. ಇವನ್ನು ಮಹಾಸಂಹಿತೆಗಳೆಂದು ಕರೆಯುತ್ತಾರೆ.',
          },
        },
        {
          n: 2,
          text: 'अथाधिलोकम् ।\nपृथिवी पूर्वरूपम् । द्यौरुत्तररूपम् ।\nआकाशः सन्धिः । वायुः सन्धानम् ।\nइत्यधिलोकम् ॥',
          meaning: {
            en: 'Now, with regard to the worlds: the earth is the first form, heaven the second form; space is the junction, and air the joining. This is with regard to the worlds.',
            kn: 'ಈಗ ಲೋಕಗಳ ಕುರಿತು: ಭೂಮಿಯು ಪೂರ್ವರೂಪ (ಮೊದಲ ಅಕ್ಷರ), ದ್ಯುಲೋಕವು ಉತ್ತರರೂಪ (ಎರಡನೆಯ ಅಕ್ಷರ); ಆಕಾಶವು ಸಂಧಿ, ವಾಯುವು ಸಂಧಾನ (ಜೋಡಿಸುವ ಸಾಧನ). ಇದು ಲೋಕಗಳ ಕುರಿತ ಉಪಾಸನೆ.',
          },
        },
        {
          n: 3,
          text: 'अथाधिज्यौतिषम् ।\nअग्निः पूर्वरूपम् । आदित्य उत्तररूपम् ।\nआपः सन्धिः । वैद्युतः सन्धानम् ।\nइत्यधिज्यौतिषम् ॥',
          meaning: {
            en: 'Now, with regard to the luminaries: fire is the first form, the sun the second form; water is the junction, and lightning the joining. This is with regard to the luminaries.',
            kn: 'ಈಗ ಜ್ಯೋತಿಗಳ ಕುರಿತು: ಅಗ್ನಿಯು ಪೂರ್ವರೂಪ, ಆದಿತ್ಯನು ಉತ್ತರರೂಪ; ಜಲವು ಸಂಧಿ, ವಿದ್ಯುತ್ತು ಸಂಧಾನ. ಇದು ಜ್ಯೋತಿಗಳ ಕುರಿತ ಉಪಾಸನೆ.',
          },
        },
        {
          n: 4,
          text: 'अथाधिविद्यम् ।\nआचार्यः पूर्वरूपम् । अन्तेवास्युत्तररूपम् ।\nविद्या सन्धिः । प्रवचनं सन्धानम् ।\nइत्यधिविद्यम् ॥',
          meaning: {
            en: 'Now, with regard to knowledge: the teacher is the first form, the student the second form; knowledge is the junction, and instruction the joining. This is with regard to knowledge.',
            kn: 'ಈಗ ವಿದ್ಯೆಯ ಕುರಿತು: ಆಚಾರ್ಯನು ಪೂರ್ವರೂಪ, ಶಿಷ್ಯನು ಉತ್ತರರೂಪ; ವಿದ್ಯೆಯು ಸಂಧಿ, ಪ್ರವಚನವು ಸಂಧಾನ. ಇದು ವಿದ್ಯೆಯ ಕುರಿತ ಉಪಾಸನೆ.',
          },
        },
        {
          n: 5,
          text: 'अथाधिप्रजम् ।\nमाता पूर्वरूपम् । पितोत्तररूपम् ।\nप्रजा सन्धिः । प्रजननं सन्धानम् ।\nइत्यधिप्रजम् ॥',
          meaning: {
            en: 'Now, with regard to progeny: the mother is the first form, the father the second form; the child is the junction, and procreation the joining. This is with regard to progeny.',
            kn: 'ಈಗ ಪ್ರಜೆಯ ಕುರಿತು: ತಾಯಿಯು ಪೂರ್ವರೂಪ, ತಂದೆಯು ಉತ್ತರರೂಪ; ಮಗುವು ಸಂಧಿ, ಜನನವು ಸಂಧಾನ. ಇದು ಪ್ರಜೆಯ ಕುರಿತ ಉಪಾಸನೆ.',
          },
        },
        {
          n: 6,
          text: 'अथाध्यात्मम् ।\nअधरा हनुः पूर्वरूपम् । उत्तरा हनुरुत्तररूपम् ।\nवाक्सन्धिः । जिह्वा सन्धानम् ।\nइत्यध्यात्मम् ॥',
          meaning: {
            en: 'Now, with regard to the self: the lower jaw is the first form, the upper jaw the second form; speech is the junction, and the tongue the joining. This is with regard to the self.',
            kn: 'ಈಗ ಆತ್ಮನ (ಶರೀರದ) ಕುರಿತು: ಕೆಳ ದವಡೆಯು ಪೂರ್ವರೂಪ, ಮೇಲಿನ ದವಡೆಯು ಉತ್ತರರೂಪ; ವಾಕ್ಕು ಸಂಧಿ, ನಾಲಿಗೆಯು ಸಂಧಾನ. ಇದು ಆತ್ಮನ ಕುರಿತ ಉಪಾಸನೆ.',
          },
        },
        {
          n: 7,
          text: 'इतीमा महासंहिताः ।\nय एवमेता महासंहिता व्याख्याता वेद ।\nसन्धीयते प्रजया पशुभिः ।\nब्रह्मवर्चसेनान्नाद्येन सुवर्ग्येण लोकेन ॥',
          meaning: {
            en: 'These are the great Samhitas. One who knows these great Samhitas, thus explained, is joined with progeny and cattle, with the radiance of sacred knowledge, with food, and with the world of heaven.',
            kn: 'ಇವೇ ಮಹಾಸಂಹಿತೆಗಳು. ಹೀಗೆ ವಿವರಿಸಲ್ಪಟ್ಟ ಈ ಮಹಾಸಂಹಿತೆಗಳನ್ನು ತಿಳಿದವನು ಸಂತಾನ, ಪಶುಗಳು, ಬ್ರಹ್ಮತೇಜಸ್ಸು, ಅನ್ನ ಮತ್ತು ಸ್ವರ್ಗಲೋಕಗಳೊಂದಿಗೆ ಸೇರುತ್ತಾನೆ.',
          },
        },
      ],
    },
    {
      title: 'चतुर्थोऽनुवाकः',
      titleEn: 'Anuvaka 4: Prayers for wisdom and prosperity',
      verses: [
        {
          n: 1,
          text: 'यश्छन्दसामृषभो विश्वरूपः ।\nछन्दोभ्योऽध्यमृतात्सम्बभूव ।\nस मेन्द्रो मेधया स्पृणोतु ।\nअमृतस्य देव धारणो भूयासम् ।\nशरीरं मे विचर्षणम् । जिह्वा मे मधुमत्तमा ।\nकर्णाभ्यां भूरि विश्रुवम् ।\nब्रह्मणः कोशोऽसि मेधयाऽपिहितः ।\nश्रुतं मे गोपाय ॥',
          meaning: {
            en: 'He who is the bull among the Vedic hymns, of every form, who arose from the immortal Vedas: may that Indra, the Lord, strengthen me with wisdom. O God, may I become a bearer of immortality. May my body be fit, my tongue most sweet; may my ears hear much. You are the sheath of Brahman, covered by wisdom: guard what I have learnt.',
            kn: 'ವೇದಮಂತ್ರಗಳಲ್ಲಿ ವೃಷಭನಂತೆ ಶ್ರೇಷ್ಠನಾದ, ಎಲ್ಲ ರೂಪಗಳುಳ್ಳ, ಅಮೃತಸ್ವರೂಪವಾದ ವೇದಗಳಿಂದ ಉದಯಿಸಿದ ಆ ಇಂದ್ರನು (ಪರಮೇಶ್ವರನು) ನನ್ನನ್ನು ಮೇಧೆಯಿಂದ ತುಂಬಲಿ. ದೇವನೇ, ನಾನು ಅಮೃತತ್ವವನ್ನು ಧರಿಸುವವನಾಗಲಿ. ನನ್ನ ಶರೀರ ಸಮರ್ಥವಾಗಲಿ, ನಾಲಿಗೆ ಅತಿ ಮಧುರವಾಗಲಿ; ನನ್ನ ಕಿವಿಗಳಿಂದ ನಾನು ಬಹಳ ಕೇಳುವಂತಾಗಲಿ. ನೀನು ಬ್ರಹ್ಮನ ಕೋಶ, ಲೌಕಿಕ ಬುದ್ಧಿಯಿಂದ ಮುಚ್ಚಲ್ಪಟ್ಟಿದ್ದೀಯೆ; ನಾನು ಕಲಿತದ್ದನ್ನು ಕಾಪಾಡು.',
          },
        },
        {
          n: 2,
          text: 'आवहन्ती वितन्वाना । कुर्वाणाऽचीरमात्मनः ।\nवासांसि मम गावश्च । अन्नपाने च सर्वदा ।\nततो मे श्रियमावह ।\nलोमशां पशुभिः सह स्वाहा ।\nआ मा यन्तु ब्रह्मचारिणः स्वाहा ।\nवि माऽऽयन्तु ब्रह्मचारिणः स्वाहा ।\nप्र माऽऽयन्तु ब्रह्मचारिणः स्वाहा ।\nदमायन्तु ब्रह्मचारिणः स्वाहा ।\nशमायन्तु ब्रह्मचारिणः स्वाहा ॥',
          meaning: {
            en: 'Bring me Shri, who brings and spreads and quickly provides for me clothes, cattle, and food and drink at all times, together with woolly sheep and other animals. Svaha. May students come to me from all sides, in many ways, in great numbers; may they gain self-control and calm. Svaha.',
            kn: 'ನನಗೆ ಬಟ್ಟೆಗಳನ್ನೂ ಗೋವುಗಳನ್ನೂ ಸದಾ ಅನ್ನಪಾನಗಳನ್ನೂ ತಂದು, ವಿಸ್ತರಿಸಿ, ಬೇಗನೆ ಒದಗಿಸುವ ಶ್ರೀದೇವಿಯನ್ನು, ಕುರಿ ಮೊದಲಾದ ಪಶುಗಳೊಂದಿಗೆ ನನ್ನ ಬಳಿಗೆ ತಾ. ಸ್ವಾಹಾ. ಬ್ರಹ್ಮಚಾರಿಗಳು ನನ್ನ ಬಳಿಗೆ ಬರಲಿ, ನಾನಾ ಕಡೆಗಳಿಂದ ಬರಲಿ, ಹೆಚ್ಚಾಗಿ ಬರಲಿ; ಅವರು ಇಂದ್ರಿಯದಮನವನ್ನೂ ಶಾಂತಿಯನ್ನೂ ಪಡೆಯಲಿ. ಸ್ವಾಹಾ.',
          },
        },
        {
          n: 3,
          text: 'यशो जनेऽसानि स्वाहा ।\nश्रेयान्वस्यसोऽसानि स्वाहा ।\nतं त्वा भग प्रविशानि स्वाहा ।\nस मा भग प्रविश स्वाहा ।\nतस्मिन्सहस्रशाखे ।\nनि भगाहं त्वयि मृजे स्वाहा ।\nयथाऽऽपः प्रवताऽऽयन्ति । यथा मासा अहर्जरम् ।\nएवं मां ब्रह्मचारिणः ।\nधातरायन्तु सर्वतः स्वाहा ।\nप्रतिवेशोऽसि प्र मा भाहि प्र मा पद्यस्व ॥',
          meaning: {
            en: 'May I be famous among people. Svaha. May I be better than the richest. Svaha. O glorious Lord, may I enter you. Svaha. Do you, O Lord, enter me. Svaha. In you, of a thousand branches, O Lord, I wash away my sins. Svaha. As waters run down a slope, as months run to the year, so may students come to me from every side, O Dhatr. Svaha. You are my neighbour and refuge: shine upon me; make your way into me.',
            kn: 'ಜನರಲ್ಲಿ ನಾನು ಕೀರ್ತಿವಂತನಾಗಲಿ. ಸ್ವಾಹಾ. ಅತಿ ಶ್ರೀಮಂತರಿಗಿಂತಲೂ ನಾನು ಶ್ರೇಷ್ಠನಾಗಲಿ. ಸ್ವಾಹಾ. ಭಗವಂತನೇ, ಅಂತಹ ನಿನ್ನನ್ನು ನಾನು ಪ್ರವೇಶಿಸುವೆನು. ಸ್ವಾಹಾ. ಭಗವಂತನೇ, ನೀನು ನನ್ನೊಳಗೆ ಪ್ರವೇಶಿಸು. ಸ್ವಾಹಾ. ಸಾವಿರ ಶಾಖೆಗಳುಳ್ಳ ನಿನ್ನಲ್ಲಿ ನಾನು ನನ್ನ ಪಾಪಗಳನ್ನು ತೊಳೆಯುತ್ತೇನೆ. ಸ್ವಾಹಾ. ನೀರುಗಳು ಇಳಿಜಾರಿನಲ್ಲಿ ಹರಿದು ಬರುವಂತೆ, ತಿಂಗಳುಗಳು ವರ್ಷದ ಕಡೆಗೆ ಸಾಗುವಂತೆ, ಧಾತೃವೇ, ಬ್ರಹ್ಮಚಾರಿಗಳು ಎಲ್ಲ ಕಡೆಗಳಿಂದ ನನ್ನ ಬಳಿಗೆ ಬರಲಿ. ಸ್ವಾಹಾ. ನೀನು ನನ್ನ ನೆರೆಯವನೂ ಆಶ್ರಯನೂ ಆಗಿದ್ದೀಯೆ: ನನ್ನ ಮೇಲೆ ಬೆಳಗು, ನನ್ನೊಳಗೆ ಪ್ರವೇಶಿಸು.',
          },
        },
      ],
    },
    {
      title: 'पञ्चमोऽनुवाकः',
      titleEn: 'Anuvaka 5: The vyahritis',
      verses: [
        {
          n: 1,
          text: 'भूर्भुवः सुवरिति वा एतास्तिस्रो व्याहृतयः ।\nतासामु ह स्मैतां चतुर्थीम् ।\nमाहाचमस्यः प्रवेदयते । मह इति ।\nतद्ब्रह्म । स आत्मा । अङ्गान्यन्या देवताः ।\nभूरिति वा अयं लोकः । भुव इत्यन्तरिक्षम् ।\nसुवरित्यसौ लोकः ॥',
          meaning: {
            en: '"Bhuh, bhuvah, suvah": these are the three vyahritis. To these Mahachamasya revealed a fourth, "mahah". That is Brahman; that is the Self; the other gods are its limbs. "Bhuh" is this world; "bhuvah" is the mid-region; "suvah" is that world yonder.',
            kn: '"ಭೂಃ ಭುವಃ ಸುವಃ" ಎಂಬ ಈ ಮೂರು ವ್ಯಾಹೃತಿಗಳು. ಅವುಗಳ ಜೊತೆಗೆ ಮಾಹಾಚಮಸ್ಯನು "ಮಹಃ" ಎಂಬ ನಾಲ್ಕನೆಯದನ್ನು ತಿಳಿಸಿದನು. ಅದೇ ಬ್ರಹ್ಮ; ಅದೇ ಆತ್ಮ; ಇತರ ದೇವತೆಗಳು ಅದರ ಅಂಗಗಳು. "ಭೂಃ" ಎಂದರೆ ಈ ಲೋಕ; "ಭುವಃ" ಎಂದರೆ ಅಂತರಿಕ್ಷ; "ಸುವಃ" ಎಂದರೆ ಆ ಲೋಕ (ಸ್ವರ್ಗ).',
          },
        },
        {
          n: 2,
          text: 'मह इत्यादित्यः । आदित्येन वाव सर्वे लोका महीयन्ते ।\nभूरिति वा अग्निः । भुव इति वायुः ।\nसुवरित्यादित्यः । मह इति चन्द्रमाः ।\nचन्द्रमसा वाव सर्वाणि ज्योतींषि महीयन्ते ।\nभूरिति वा ऋचः । भुव इति सामानि ।\nसुवरिति यजूंषि ॥',
          meaning: {
            en: '"Mahah" is the sun: by the sun all worlds are made great. "Bhuh" is fire, "bhuvah" is air, "suvah" is the sun, "mahah" is the moon: by the moon all luminaries are made great. "Bhuh" is the Rik verses, "bhuvah" the Saman chants, "suvah" the Yajus formulas.',
            kn: '"ಮಹಃ" ಎಂದರೆ ಆದಿತ್ಯ; ಆದಿತ್ಯನಿಂದಲೇ ಎಲ್ಲ ಲೋಕಗಳು ಮಹತ್ತನ್ನು ಪಡೆಯುತ್ತವೆ. "ಭೂಃ" ಎಂದರೆ ಅಗ್ನಿ, "ಭುವಃ" ವಾಯು, "ಸುವಃ" ಆದಿತ್ಯ, "ಮಹಃ" ಚಂದ್ರ; ಚಂದ್ರನಿಂದಲೇ ಎಲ್ಲ ಜ್ಯೋತಿಗಳು ಮಹತ್ತನ್ನು ಪಡೆಯುತ್ತವೆ. "ಭೂಃ" ಎಂದರೆ ಋಕ್ಕುಗಳು, "ಭುವಃ" ಸಾಮಗಳು, "ಸುವಃ" ಯಜುಸ್ಸುಗಳು.',
          },
        },
        {
          n: 3,
          text: 'मह इति ब्रह्म । ब्रह्मणा वाव सर्वे वेदा महीयन्ते ।\nभूरिति वै प्राणः । भुव इत्यपानः । सुवरिति व्यानः ।\nमह इत्यन्नम् । अन्नेन वाव सर्वे प्राणा महीयन्ते ।\nता वा एताश्चतस्रश्चतुर्धा ।\nचतस्रश्चतस्रो व्याहृतयः ।\nता यो वेद । स वेद ब्रह्म ।\nसर्वेऽस्मै देवा बलिमावहन्ति ॥',
          meaning: {
            en: '"Mahah" is Brahman (Om): by Brahman all the Vedas are made great. "Bhuh" is the prana breath, "bhuvah" the apana, "suvah" the vyana, and "mahah" is food: by food all the breaths are made great. So these four are fourfold: four vyahritis each of four kinds. One who knows them knows Brahman, and all the gods bring him offerings.',
            kn: '"ಮಹಃ" ಎಂದರೆ ಬ್ರಹ್ಮ (ಓಂಕಾರ); ಬ್ರಹ್ಮನಿಂದಲೇ ಎಲ್ಲ ವೇದಗಳು ಮಹತ್ತನ್ನು ಪಡೆಯುತ್ತವೆ. "ಭೂಃ" ಎಂದರೆ ಪ್ರಾಣ, "ಭುವಃ" ಅಪಾನ, "ಸುವಃ" ವ್ಯಾನ, "ಮಹಃ" ಅನ್ನ; ಅನ್ನದಿಂದಲೇ ಎಲ್ಲ ಪ್ರಾಣಗಳು ಮಹತ್ತನ್ನು ಪಡೆಯುತ್ತವೆ. ಹೀಗೆ ಈ ನಾಲ್ಕು ವ್ಯಾಹೃತಿಗಳು ಪ್ರತಿಯೊಂದೂ ನಾಲ್ಕು ಬಗೆಯವು. ಇವನ್ನು ತಿಳಿದವನು ಬ್ರಹ್ಮನನ್ನು ತಿಳಿದವನು; ಎಲ್ಲ ದೇವತೆಗಳೂ ಅವನಿಗೆ ಕಾಣಿಕೆಗಳನ್ನು ತರುತ್ತಾರೆ.',
          },
        },
      ],
    },
    {
      title: 'षष्ठोऽनुवाकः',
      titleEn: 'Anuvaka 6: The Person in the space of the heart',
      verses: [
        {
          n: 1,
          text: 'स य एषोऽन्तर्हृदय आकाशः ।\nतस्मिन्नयं पुरुषो मनोमयः ।\nअमृतो हिरण्मयः ।\nअन्तरेण तालुके । य एष स्तन इवावलम्बते ।\nसेन्द्रयोनिः । यत्रासौ केशान्तो विवर्तते ।\nव्यपोह्य शीर्षकपाले ।\nभूरित्यग्नौ प्रतितिष्ठति । भुव इति वायौ ॥',
          meaning: {
            en: 'In this space within the heart is the Person, made of mind, immortal and golden. Between the palates hangs that which is like a nipple: it is the gateway of Indra. Where the roots of the hair divide, it pierces the skull and opens upward. Through "bhuh" one is established in fire; through "bhuvah", in air.',
            kn: 'ಹೃದಯದೊಳಗಿರುವ ಈ ಆಕಾಶದಲ್ಲಿ ಮನೋಮಯನೂ ಅಮೃತನೂ ಹಿರಣ್ಮಯನೂ ಆದ ಈ ಪುರುಷನಿದ್ದಾನೆ. ತಾಲುಗಳ ನಡುವೆ ಮೊಲೆಯಂತೆ ತೂಗುವ ಅಂಗವಿದೆ; ಅದು ಇಂದ್ರನ ದ್ವಾರ (ಬ್ರಹ್ಮರಂಧ್ರಕ್ಕೆ ಹೋಗುವ ನಾಡಿಯ ಮೂಲ). ಕೂದಲಿನ ಬುಡ ಎರಡಾಗುವ ಸ್ಥಳದಲ್ಲಿ ಅದು ಕಪಾಲವನ್ನು ಭೇದಿಸಿ ಮೇಲೆ ತೆರೆಯುತ್ತದೆ. "ಭೂಃ" ಎಂಬುದರಿಂದ ಅಗ್ನಿಯಲ್ಲಿ ಪ್ರತಿಷ್ಠಿತನಾಗುತ್ತಾನೆ; "ಭುವಃ" ಎಂಬುದರಿಂದ ವಾಯುವಿನಲ್ಲಿ.',
          },
        },
        {
          n: 2,
          text: 'सुवरित्यादित्ये । मह इति ब्रह्मणि ।\nआप्नोति स्वाराज्यम् । आप्नोति मनसस्पतिम् ।\nवाक्पतिश्चक्षुष्पतिः । श्रोत्रपतिर्विज्ञानपतिः ।\nएतत्ततो भवति ।\nआकाशशरीरं ब्रह्म ।\nसत्यात्म प्राणारामं मन आनन्दम् ।\nशान्तिसमृद्धममृतम् ।\nइति प्राचीनयोग्योपास्स्व ॥',
          meaning: {
            en: 'Through "suvah" in the sun, through "mahah" in Brahman. He attains self-rule; he attains the lord of the mind, the lord of speech, the lord of the eye, the lord of the ear, the lord of knowledge. And more than this: Brahman has space for its body, truth for its self, the life-breath for its delight; its mind is bliss, it is full of peace and immortal. Meditate thus, O Prachinayogya.',
            kn: '"ಸುವಃ" ಎಂಬುದರಿಂದ ಆದಿತ್ಯನಲ್ಲಿ, "ಮಹಃ" ಎಂಬುದರಿಂದ ಬ್ರಹ್ಮನಲ್ಲಿ. ಅವನು ಸ್ವಾರಾಜ್ಯವನ್ನು ಪಡೆಯುತ್ತಾನೆ: ಮನಸ್ಸಿನ ಒಡೆಯನನ್ನೂ, ವಾಕ್ಕಿನ, ಕಣ್ಣಿನ, ಕಿವಿಯ, ವಿಜ್ಞಾನದ ಒಡೆಯರನ್ನೂ ಪಡೆಯುತ್ತಾನೆ. ಇದಕ್ಕಿಂತಲೂ ಹೆಚ್ಚಾಗಿ: ಬ್ರಹ್ಮನಿಗೆ ಆಕಾಶವೇ ಶರೀರ, ಸತ್ಯವೇ ಆತ್ಮ, ಪ್ರಾಣವೇ ವಿಹಾರ; ಅವನ ಮನಸ್ಸು ಆನಂದ, ಅವನು ಶಾಂತಿಯಿಂದ ತುಂಬಿದ ಅಮೃತನು. ಪ್ರಾಚೀನಯೋಗ್ಯನೇ, ಹೀಗೆ ಉಪಾಸನೆ ಮಾಡು.',
          },
        },
      ],
    },
    {
      title: 'सप्तमोऽनुवाकः',
      titleEn: 'Anuvaka 7: The fivefold (Pankta) meditation',
      verses: [
        {
          n: 1,
          text: 'पृथिव्यन्तरिक्षं द्यौर्दिशोऽवान्तरदिशाः ।\nअग्निर्वायुरादित्यश्चन्द्रमा नक्षत्राणि ।\nआप ओषधयो वनस्पतय आकाश आत्मा ।\nइत्यधिभूतम् ।\nअथाध्यात्मम् ।\nप्राणो व्यानोऽपान उदानः समानः ।\nचक्षुः श्रोत्रं मनो वाक्त्वक् ।\nचर्म मांसं स्नावास्थि मज्जा ।\nएतदधिविधाय ऋषिरवोचत् ।\nपाङ्क्तं वा इदं सर्वम् ।\nपाङ्क्तेनैव पाङ्क्तं स्पृणोतीति ॥',
          meaning: {
            en: 'Earth, mid-region, heaven, the quarters and the intermediate quarters; fire, air, sun, moon and stars; water, herbs, trees, space and the self: this is with regard to the elements. Now with regard to the self: prana, vyana, apana, udana, samana; eye, ear, mind, speech, skin; hide, flesh, sinew, bone and marrow. Having arranged all this, the seer said: "All this is fivefold; by the fivefold one fills the fivefold."',
            kn: 'ಭೂಮಿ, ಅಂತರಿಕ್ಷ, ದ್ಯುಲೋಕ, ದಿಕ್ಕುಗಳು, ಉಪದಿಕ್ಕುಗಳು; ಅಗ್ನಿ, ವಾಯು, ಆದಿತ್ಯ, ಚಂದ್ರ, ನಕ್ಷತ್ರಗಳು; ಜಲ, ಓಷಧಿಗಳು, ವನಸ್ಪತಿಗಳು, ಆಕಾಶ, ಆತ್ಮ: ಇದು ಭೂತಗಳ ಕುರಿತು. ಈಗ ಆತ್ಮನ ಕುರಿತು: ಪ್ರಾಣ, ವ್ಯಾನ, ಅಪಾನ, ಉದಾನ, ಸಮಾನ; ಕಣ್ಣು, ಕಿವಿ, ಮನಸ್ಸು, ವಾಕ್ಕು, ತ್ವಚೆ; ಚರ್ಮ, ಮಾಂಸ, ನರ, ಎಲುಬು, ಮಜ್ಜೆ. ಹೀಗೆ ವಿಂಗಡಿಸಿ ಋಷಿಯು ಹೇಳಿದನು: "ಇದೆಲ್ಲವೂ ಪಂಕ್ತಿಯಾದದ್ದು (ಐದು ಭಾಗದ್ದು); ಪಾಂಕ್ತದಿಂದಲೇ ಪಾಂಕ್ತವನ್ನು ಪೂರ್ಣಗೊಳಿಸುತ್ತಾನೆ."',
          },
        },
      ],
    },
    {
      title: 'अष्टमोऽनुवाकः',
      titleEn: 'Anuvaka 8: Om',
      verses: [
        {
          n: 1,
          text: 'ओमिति ब्रह्म । ओमितीदं सर्वम् ।\nओमित्येतदनुकृति ह स्म वा अप्योश्रावयेत्याश्रावयन्ति ।\nओमिति सामानि गायन्ति । ओं शोमिति शस्त्राणि शंसन्ति ।\nओमित्यध्वर्युः प्रतिगरं प्रतिगृणाति ।\nओमिति ब्रह्मा प्रसौति । ओमित्यग्निहोत्रमनुजानाति ।\nओमिति ब्राह्मणः प्रवक्ष्यन्नाह ब्रह्मोपाप्नवानीति ।\nब्रह्मैवोपाप्नोति ॥',
          meaning: {
            en: '"Om" is Brahman; "Om" is all this. "Om" is a word of assent: when they say "Om, recite", they make the order to recite. With "Om" the singers chant the Samans; with "Om Shom" the reciters recite the Shastras; with "Om" the Adhvaryu gives the response; with "Om" the Brahma priest gives the command; with "Om" one permits the Agnihotra. A Brahmin about to expound the Veda says "Om, may I attain Brahman", and he does attain Brahman.',
            kn: '"ಓಂ" ಎಂಬುದು ಬ್ರಹ್ಮ; "ಓಂ" ಎಂಬುದೇ ಇದೆಲ್ಲ. "ಓಂ" ಎಂಬುದು ಸಮ್ಮತಿಯ ಶಬ್ದ: "ಓಂ, ಹೇಳು" ಎಂದು ಪ್ರೇರೇಪಿಸುತ್ತಾರೆ. "ಓಂ" ಎಂದು ಸಾಮಗಾನ ಮಾಡುತ್ತಾರೆ; "ಓಂ ಶೋಮ್" ಎಂದು ಶಸ್ತ್ರಗಳನ್ನು ಪಠಿಸುತ್ತಾರೆ; "ಓಂ" ಎಂದು ಅಧ್ವರ್ಯುವು ಪ್ರತಿಗರವನ್ನು ಹೇಳುತ್ತಾನೆ; "ಓಂ" ಎಂದು ಬ್ರಹ್ಮನು ಅನುಜ್ಞೆ ಕೊಡುತ್ತಾನೆ; "ಓಂ" ಎಂದು ಅಗ್ನಿಹೋತ್ರಕ್ಕೆ ಅನುಮತಿ ಕೊಡುತ್ತಾನೆ. ವೇದವನ್ನು ಹೇಳಲಿರುವ ಬ್ರಾಹ್ಮಣನು "ಓಂ, ನಾನು ಬ್ರಹ್ಮನನ್ನು ಹೊಂದುವೆನು" ಎನ್ನುತ್ತಾನೆ; ಅವನು ಬ್ರಹ್ಮನನ್ನೇ ಹೊಂದುತ್ತಾನೆ.',
          },
        },
      ],
    },
    {
      title: 'नवमोऽनुवाकः',
      titleEn: 'Anuvaka 9: Truth, austerity and study',
      verses: [
        {
          n: 1,
          text: 'ऋतं च स्वाध्यायप्रवचने च ।\nसत्यं च स्वाध्यायप्रवचने च ।\nतपश्च स्वाध्यायप्रवचने च ।\nदमश्च स्वाध्यायप्रवचने च ।\nशमश्च स्वाध्यायप्रवचने च ।\nअग्नयश्च स्वाध्यायप्रवचने च ।\nअग्निहोत्रं च स्वाध्यायप्रवचने च ।\nअतिथयश्च स्वाध्यायप्रवचने च ।\nमानुषं च स्वाध्यायप्रवचने च ।\nप्रजा च स्वाध्यायप्रवचने च ।\nप्रजनश्च स्वाध्यायप्रवचने च ।\nप्रजातिश्च स्वाध्यायप्रवचने च ।\nसत्यमिति सत्यवचा राथीतरः ।\nतप इति तपोनित्यः पौरुशिष्टिः ।\nस्वाध्यायप्रवचने एवेति नाको मौद्गल्यः ।\nतद्धि तपस्तद्धि तपः ॥',
          meaning: {
            en: 'Right conduct, and study and teaching. Truth, and study and teaching. Austerity, and study and teaching. Self-control, and study and teaching. Calm of mind, and study and teaching. The sacred fires, and study and teaching. The Agnihotra, and study and teaching. Guests, and study and teaching. Human duties, and study and teaching. Offspring, and study and teaching. Begetting, and study and teaching. The raising of the family, and study and teaching. "Truth alone", says Satyavacha Rathitara. "Austerity alone", says Taponitya Paurushishti. "Study and teaching alone", says Naka Maudgalya, "for that is austerity, that is austerity."',
            kn: 'ಋತ (ಸದಾಚಾರ) ಮತ್ತು ಸ್ವಾಧ್ಯಾಯ ಪ್ರವಚನಗಳು. ಸತ್ಯ ಮತ್ತು ಸ್ವಾಧ್ಯಾಯ ಪ್ರವಚನಗಳು. ತಪಸ್ಸು ಮತ್ತು ಸ್ವಾಧ್ಯಾಯ ಪ್ರವಚನಗಳು. ದಮ ಮತ್ತು ಸ್ವಾಧ್ಯಾಯ ಪ್ರವಚನಗಳು. ಶಮ ಮತ್ತು ಸ್ವಾಧ್ಯಾಯ ಪ್ರವಚನಗಳು. ಅಗ್ನಿಗಳು ಮತ್ತು ಸ್ವಾಧ್ಯಾಯ ಪ್ರವಚನಗಳು. ಅಗ್ನಿಹೋತ್ರ ಮತ್ತು ಸ್ವಾಧ್ಯಾಯ ಪ್ರವಚನಗಳು. ಅತಿಥಿಗಳು ಮತ್ತು ಸ್ವಾಧ್ಯಾಯ ಪ್ರವಚನಗಳು. ಮಾನವಧರ್ಮ ಮತ್ತು ಸ್ವಾಧ್ಯಾಯ ಪ್ರವಚನಗಳು. ಪ್ರಜೆ ಮತ್ತು ಸ್ವಾಧ್ಯಾಯ ಪ್ರವಚನಗಳು. ಸಂತಾನೋತ್ಪತ್ತಿ ಮತ್ತು ಸ್ವಾಧ್ಯಾಯ ಪ್ರವಚನಗಳು. ವಂಶವೃದ್ಧಿ ಮತ್ತು ಸ್ವಾಧ್ಯಾಯ ಪ್ರವಚನಗಳು. "ಸತ್ಯವೇ" ಎಂದು ಸತ್ಯವಚ ರಾಥೀತರನು ಹೇಳುತ್ತಾನೆ. "ತಪಸ್ಸೇ" ಎಂದು ತಪೋನಿತ್ಯ ಪೌರುಶಿಷ್ಟಿ ಹೇಳುತ್ತಾನೆ. "ಸ್ವಾಧ್ಯಾಯ ಪ್ರವಚನಗಳೇ" ಎಂದು ನಾಕ ಮೌದ್ಗಲ್ಯನು ಹೇಳುತ್ತಾನೆ: ಅದೇ ತಪಸ್ಸು, ಅದೇ ತಪಸ್ಸು.',
          },
        },
      ],
    },
    {
      title: 'दशमोऽनुवाकः',
      titleEn: 'Anuvaka 10: Trishanku\'s Veda-recitation',
      verses: [
        {
          n: 1,
          text: 'अहं वृक्षस्य रेरिवा । कीर्तिः पृष्ठं गिरेरिव ।\nऊर्ध्वपवित्रो वाजिनीव स्वमृतमस्मि ।\nद्रविणं सवर्चसम् ।\nसुमेधा अमृतोक्षितः ।\nइति त्रिशङ्कोर्वेदानुवचनम् ॥',
          meaning: {
            en: 'I am the mover of the tree of the world; my fame is high like the peak of a mountain. I am pure, like the sun in the sky, and am the immortal self, as in the sun. I am radiant wealth, of good wisdom, immortal and imperishable. This is the Veda-recitation of Trishanku, spoken after realising Brahman.',
            kn: 'ನಾನು ಸಂಸಾರವೃಕ್ಷವನ್ನು ಕದಲಿಸುವವನು; ನನ್ನ ಕೀರ್ತಿಯು ಪರ್ವತದ ಶಿಖರದಂತೆ ಎತ್ತರವಾಗಿದೆ. ಸೂರ್ಯನಲ್ಲಿರುವಂತೆ ನಾನು ಮೇಲ್ಮುಖವಾಗಿ ಪವಿತ್ರನು, ಅಮೃತಸ್ವರೂಪನು. ನಾನು ತೇಜೋಮಯವಾದ ಸಂಪತ್ತು; ಸುಜ್ಞಾನಿ, ಅಮೃತನು, ಅಕ್ಷಯನು. ಇದು ತ್ರಿಶಂಕುವು ಬ್ರಹ್ಮಜ್ಞಾನ ಪಡೆದ ನಂತರ ಹೇಳಿದ ವೇದಾನುವಚನ.',
          },
        },
      ],
    },
    {
      title: 'एकादशोऽनुवाकः',
      titleEn: 'Anuvaka 11: The teacher\'s instruction to the student',
      verses: [
        {
          n: 1,
          text: 'वेदमनूच्याचार्योऽन्तेवासिनमनुशास्ति ।\nसत्यं वद । धर्मं चर । स्वाध्यायान्मा प्रमदः ।\nआचार्याय प्रियं धनमाहृत्य प्रजातन्तुं मा व्यवच्छेत्सीः ।\nसत्यान्न प्रमदितव्यम् । धर्मान्न प्रमदितव्यम् ।\nकुशलान्न प्रमदितव्यम् । भूत्यै न प्रमदितव्यम् ।\nस्वाध्यायप्रवचनाभ्यां न प्रमदितव्यम् ॥',
          meaning: {
            en: 'Having taught the Veda, the teacher instructs the student: Speak the truth. Follow dharma. Do not neglect your daily study. Having brought the teacher his due gift, do not cut off the line of descendants. Do not swerve from truth; do not swerve from dharma; do not neglect your welfare; do not neglect your prosperity; do not neglect study and teaching.',
            kn: 'ವೇದವನ್ನು ಬೋಧಿಸಿದ ನಂತರ ಆಚಾರ್ಯನು ಶಿಷ್ಯನಿಗೆ ಉಪದೇಶಿಸುತ್ತಾನೆ: ಸತ್ಯವನ್ನು ನುಡಿ. ಧರ್ಮವನ್ನು ನಡೆ. ಸ್ವಾಧ್ಯಾಯದಿಂದ ಪ್ರಮಾದ ಮಾಡಬೇಡ. ಆಚಾರ್ಯನಿಗೆ ಪ್ರಿಯವಾದ ಧನವನ್ನು ತಂದುಕೊಟ್ಟು ಸಂತತಿಯ ಸೂತ್ರವನ್ನು ಕತ್ತರಿಸಬೇಡ. ಸತ್ಯದಿಂದ ಪ್ರಮಾದ ಮಾಡಬಾರದು; ಧರ್ಮದಿಂದ ಪ್ರಮಾದ ಮಾಡಬಾರದು; ಕುಶಲದಿಂದ (ಕ್ಷೇಮದಿಂದ) ಪ್ರಮಾದ ಮಾಡಬಾರದು; ಐಶ್ವರ್ಯದಿಂದ ಪ್ರಮಾದ ಮಾಡಬಾರದು; ಸ್ವಾಧ್ಯಾಯ ಪ್ರವಚನಗಳಿಂದ ಪ್ರಮಾದ ಮಾಡಬಾರದು.',
          },
        },
        {
          n: 2,
          text: 'देवपितृकार्याभ्यां न प्रमदितव्यम् ।\nमातृदेवो भव । पितृदेवो भव ।\nआचार्यदेवो भव । अतिथिदेवो भव ।\nयान्यनवद्यानि कर्माणि तानि सेवितव्यानि नो इतराणि ।\nयान्यस्माकं सुचरितानि तानि त्वयोपास्यानि ॥',
          meaning: {
            en: 'Do not neglect your duties to the gods and the ancestors. Let your mother be a god to you; let your father be a god to you; let your teacher be a god to you; let your guest be a god to you. Do the actions that are blameless, and not others. Whatever good conduct of ours you have seen, follow that.',
            kn: 'ದೇವ ಪಿತೃ ಕಾರ್ಯಗಳಿಂದ ಪ್ರಮಾದ ಮಾಡಬಾರದು. ತಾಯಿಯನ್ನು ದೇವರಂತೆ ಕಾಣುವವನಾಗು; ತಂದೆಯನ್ನು ದೇವರಂತೆ ಕಾಣುವವನಾಗು; ಆಚಾರ್ಯನನ್ನು ದೇವರಂತೆ ಕಾಣುವವನಾಗು; ಅತಿಥಿಯನ್ನು ದೇವರಂತೆ ಕಾಣುವವನಾಗು. ನಿರ್ದೋಷವಾದ ಕರ್ಮಗಳನ್ನು ಮಾತ್ರ ಮಾಡಬೇಕು, ಇತರವನ್ನಲ್ಲ. ನಮ್ಮ ಒಳ್ಳೆಯ ನಡತೆಗಳನ್ನು ಮಾತ್ರ ನೀನು ಅನುಸರಿಸಬೇಕು.',
          },
        },
        {
          n: 3,
          text: 'नो इतराणि ।\nये के चास्मच्छ्रेयांसो ब्राह्मणाः ।\nतेषां त्वयाऽऽसनेन प्रश्वसितव्यम् ।\nश्रद्धया देयम् । अश्रद्धयाऽदेयम् ।\nश्रिया देयम् । ह्रिया देयम् । भिया देयम् । संविदा देयम् ।\nअथ यदि ते कर्मविचिकित्सा वा वृत्तविचिकित्सा वा स्यात् ॥',
          meaning: {
            en: 'Not the others. Whatever Brahmins there are who are better than we, you should refresh them with a seat. Give with faith; do not give without faith. Give with abundance; give with modesty; give with awe; give with fellow-feeling. Then, if you should have any doubt about a rite or about conduct,',
            kn: 'ಇತರವನ್ನಲ್ಲ. ನಮಗಿಂತ ಶ್ರೇಷ್ಠರಾದ ಬ್ರಾಹ್ಮಣರು ಯಾರಿದ್ದರೂ, ಅವರಿಗೆ ಆಸನ ಕೊಟ್ಟು ವಿಶ್ರಾಂತಿ ನೀಡಬೇಕು. ಶ್ರದ್ಧೆಯಿಂದ ಕೊಡಬೇಕು; ಶ್ರದ್ಧೆಯಿಲ್ಲದೆ ಕೊಡಬಾರದು. ಸಮೃದ್ಧಿಯಿಂದ ಕೊಡಬೇಕು; ನಾಚಿಕೆಯಿಂದ (ವಿನಯದಿಂದ) ಕೊಡಬೇಕು; ಭಯದಿಂದ (ಭಕ್ತಿಭಾವದಿಂದ) ಕೊಡಬೇಕು; ಸಹಾನುಭೂತಿಯಿಂದ ಕೊಡಬೇಕು. ಇನ್ನು ನಿನಗೆ ಯಾವುದಾದರೂ ಕರ್ಮದ ಬಗ್ಗೆ ಅಥವಾ ನಡತೆಯ ಬಗ್ಗೆ ಸಂಶಯ ಬಂದರೆ,',
          },
        },
        {
          n: 4,
          text: 'ये तत्र ब्राह्मणाः संमर्शिनः ।\nयुक्ता आयुक्ताः । अलूक्षा धर्मकामाः स्युः ।\nयथा ते तत्र वर्तेरन् । तथा तत्र वर्तेथाः ।\nअथाभ्याख्यातेषु ।\nये तत्र ब्राह्मणाः संमर्शिनः ।\nयुक्ता आयुक्ताः । अलूक्षा धर्मकामाः स्युः ।\nयथा ते तेषु वर्तेरन् । तथा तेषु वर्तेथाः ।\nएष आदेशः । एष उपदेशः ।\nएषा वेदोपनिषत् । एतदनुशासनम् ।\nएवमुपासितव्यम् । एवमु चैतदुपास्यम् ॥',
          meaning: {
            en: 'there, whatever Brahmins are thoughtful, devoted, whether or not appointed to the task, gentle and lovers of dharma, as they would conduct themselves in such a matter, so should you. Then, concerning those who are accused of fault: whatever Brahmins there are who are thoughtful, devoted, gentle and lovers of dharma, as they would behave toward such people, so should you behave toward them. This is the command; this is the teaching; this is the secret of the Veda; this is the instruction. Thus should one practise; thus indeed should this be practised.',
            kn: 'ಅಲ್ಲಿ ವಿಚಾರಶೀಲರೂ, ಕರ್ತವ್ಯನಿಷ್ಠರೂ (ನೇಮಿಸಲ್ಪಟ್ಟವರಾಗಲಿ ಇಲ್ಲದವರಾಗಲಿ), ಮೃದುಸ್ವಭಾವದವರೂ, ಧರ್ಮಪ್ರಿಯರೂ ಆದ ಬ್ರಾಹ್ಮಣರು ಯಾರಿರುತ್ತಾರೋ, ಅವರು ಅಂತಹ ಸಂದರ್ಭದಲ್ಲಿ ಹೇಗೆ ನಡೆಯುತ್ತಾರೋ ಹಾಗೆ ನೀನೂ ನಡೆ. ಇನ್ನು ದೋಷಾರೋಪಣೆಗೊಳಗಾದವರ ವಿಷಯದಲ್ಲಿ ವಿಚಾರಶೀಲರೂ ಕರ್ತವ್ಯನಿಷ್ಠರೂ ಮೃದುಸ್ವಭಾವದವರೂ ಧರ್ಮಪ್ರಿಯರೂ ಆದ ಬ್ರಾಹ್ಮಣರು ಅವರೊಡನೆ ಹೇಗೆ ನಡೆಯುತ್ತಾರೋ ಹಾಗೆ ನೀನೂ ಅವರೊಡನೆ ನಡೆ. ಇದು ಆಜ್ಞೆ; ಇದು ಉಪದೇಶ; ಇದು ವೇದದ ರಹಸ್ಯ; ಇದೇ ಅನುಶಾಸನ. ಹೀಗೆಯೇ ಆಚರಿಸಬೇಕು; ಹೀಗೆಯೇ ಇದನ್ನು ಆಚರಿಸಬೇಕು.',
          },
        },
      ],
    },
    {
      title: 'द्वादशोऽनुवाकः',
      titleEn: 'Anuvaka 12: Closing prayer for peace',
      verses: [
        {
          n: 1,
          text: 'ॐ शं नो मित्रः शं वरुणः । शं नो भवत्वर्यमा ।\nशं न इन्द्रो बृहस्पतिः । शं नो विष्णुरुरुक्रमः ।\nनमो ब्रह्मणे । नमस्ते वायो ।\nत्वमेव प्रत्यक्षं ब्रह्मासि ।\nत्वामेव प्रत्यक्षं ब्रह्मावादिषम् ।\nऋतमवादिषम् । सत्यमवादिषम् ।\nतन्मामावीत् । तद्वक्तारमावीत् ।\nआवीन्माम् । आवीद्वक्तारम् ॥\nॐ शान्तिः शान्तिः शान्तिः ॥',
          meaning: {
            en: 'May Mitra be good to us, and Varuna; may Aryaman be good to us. May Indra and Brihaspati be good to us; may Vishnu of the wide stride be good to us. Salutation to Brahman. Salutation to you, Vayu: you are indeed the visible Brahman, and I have called you the visible Brahman. I have spoken what is right; I have spoken what is true. That has protected me; that has protected the speaker. It has protected me; it has protected the speaker. Om, peace, peace, peace.',
            kn: 'ಮಿತ್ರನು ನಮಗೆ ಮಂಗಳವನ್ನು ಮಾಡಲಿ, ವರುಣನು ಮಂಗಳವನ್ನು ಮಾಡಲಿ; ಅರ್ಯಮನು ಮಂಗಳವನ್ನು ಮಾಡಲಿ. ಇಂದ್ರನೂ ಬೃಹಸ್ಪತಿಯೂ ಮಂಗಳವನ್ನು ಮಾಡಲಿ; ವಿಶಾಲವಾಗಿ ಹೆಜ್ಜೆಯಿಡುವ ವಿಷ್ಣುವು ಮಂಗಳವನ್ನು ಮಾಡಲಿ. ಬ್ರಹ್ಮನಿಗೆ ನಮಸ್ಕಾರ. ವಾಯುವೇ, ನಿನಗೆ ನಮಸ್ಕಾರ; ನೀನೇ ಪ್ರತ್ಯಕ್ಷ ಬ್ರಹ್ಮ, ನಿನ್ನನ್ನೇ ಪ್ರತ್ಯಕ್ಷ ಬ್ರಹ್ಮನೆಂದು ನಾನು ಹೇಳಿದ್ದೇನೆ. ಋತವನ್ನು ನುಡಿದಿದ್ದೇನೆ, ಸತ್ಯವನ್ನು ನುಡಿದಿದ್ದೇನೆ. ಅದು ನನ್ನನ್ನು ಕಾಪಾಡಿತು, ಹೇಳುವವನನ್ನು ಕಾಪಾಡಿತು; ನನ್ನನ್ನು ಕಾಪಾಡಿತು, ಹೇಳುವವನನ್ನು ಕಾಪಾಡಿತು. ಓಂ ಶಾಂತಿಃ ಶಾಂತಿಃ ಶಾಂತಿಃ.',
          },
        },
      ],
    },
    {
      title: 'शान्तिपाठः',
      titleEn: 'Closing Shanti',
      verses: [{ text: SAHA_NAVAVATU, meaning: SAHA_MEANING }],
    },
  ],
};
