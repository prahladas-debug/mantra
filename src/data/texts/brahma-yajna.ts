/**
 * Brahma-yajna (svadhyaya): the daily recitation of the Veda, with the nitya tarpana of the gods, sages and teachers in the
 * Rigvedic form. Rigveda (Ashvalayana) and Yajurveda (Taittiriya) forms, Madhva and Smarta.
 * Sources (collated Nov 2026):
 *  Rigveda - Ashvalayana Grihya Sutra 3.1-3.4 (GRETIL, sa_AzvalAyanagRhyasUtra: the rite, the order of the recitation, the
 *    namo-brahmane concluding mantra, the lists of devatas, rishis and acharyas); Srinivasa S. Mathad, "Upaneetarige Upayukta
 *    Upadesha", the chapter "Brahmayajna" (Madhva: sankalpa, the pratika list of the Vedas and sastras, the tarpana lists, the
 *    concluding prayer); the Madhva "Rig-Yajurveda Vaishnava Ahnika Paddhati" (Belgaum, 1892, OCR "atha brahmayajnah"); the
 *    Rigveda samhita (GRETIL) for RV 1.1.1 and 1.164.39 and 10.9.4.
 *  Yajurveda - Taittiriya Aranyaka 2.10-2.12 (the Brahmayajna brahmana; the opening and the "namo brahmane" paridhaniya mantra),
 *    Shridatta Dixit, "Sandhyavandanadi Nityakarmagalu" (Taittiriya, Smarta; chapter 9, the sankalpa and the list of pratikas of
 *    the Vedangas, darshanas and smritis), and stotranidhi.com "Yajurveda Brahma Yagna Vidhi".
 * The Madhva Yajurveda form uses the same Vedic words with the Madhva sankalpa and concluding prayer (the Uttaradi matha
 * "Yajurvediya Trikala Sandhyavandane" as scanned does not print the brahmayajna).
 * Not included: the long passages the reciter has learnt by heart (Samhita, Brahmana, Aranyaka portions of his own shakha),
 * and the pitru-tarpana that Madhvas add after the acharya-tarpana (see the text "Pitru Tarpana").
 */
import type { Mantra } from '../types';

export const brahmaYajna: Mantra = {
  id: 'brahma-yajna',
  title: 'ब्रह्मयज्ञः',
  titleEn: 'Brahma Yajna (Daily Vedic Recitation)',
  category: 'nitya',
  deity: 'Veda / Sri Vishnu',
  source: 'Ashvalayana Grihya Sutra 3.1-3.4; Taittiriya Aranyaka 2.10-2.12; nityakarma manuals',
  summary: 'The brahma-yajna, one of the five daily mahayajnas: the daily recitation (svadhyaya) of the Veda, done after the morning sandhya by those who have had the upanayana. The text gives the sankalpa, the Gayatri and the opening of each Veda and branch of learning, the closing "namo brahmane" mantra, and for Rigvedins the tarpana of the gods, sages and teachers. Choose your Veda (Rigveda or Yajurveda) and tradition at the top.',
  summaryKn: 'ದೈನಂದಿನ ಪಂಚ ಮಹಾಯಜ್ಞಗಳಲ್ಲಿ ಒಂದಾದ ಬ್ರಹ್ಮಯಜ್ಞ: ಉಪನಯನವಾದವರು ಪ್ರಾತಃಸಂಧ್ಯೆಯ ನಂತರ ಮಾಡುವ ನಿತ್ಯ ವೇದಪಾರಾಯಣ (ಸ್ವಾಧ್ಯಾಯ). ಇದರಲ್ಲಿ ಸಂಕಲ್ಪ, ಗಾಯತ್ರಿ, ಪ್ರತಿ ವೇದ ಮತ್ತು ಶಾಸ್ತ್ರದ ಆರಂಭ ವಾಕ್ಯಗಳು, ಕೊನೆಯ “ನಮೋ ಬ್ರಹ್ಮಣೇ” ಮಂತ್ರ, ಮತ್ತು ಋಗ್ವೇದಿಗಳಿಗೆ ದೇವ-ಋಷಿ-ಆಚಾರ್ಯ ತರ್ಪಣ ಇವೆ. ಮೇಲೆ ನಿಮ್ಮ ವೇದ (ಋಗ್ವೇದ ಅಥವಾ ಯಜುರ್ವೇದ) ಮತ್ತು ಸಂಪ್ರದಾಯವನ್ನು ಆರಿಸಿ.',
  variants: [
    {
      key: 'tradition',
      title: 'Tradition',
      titleKn: 'ಸಂಪ್ರದಾಯ',
      options: [
        {
          id: 'madhva',
          label: 'Madhva',
          labelKn: 'ಮಾಧ್ವ',
        },
        {
          id: 'smarta',
          label: 'Smarta',
          labelKn: 'ಸ್ಮಾರ್ತ',
        },
      ],
    },
    {
      key: 'veda',
      title: 'Veda',
      titleKn: 'ವೇದ',
      options: [
        {
          id: 'rigveda',
          label: 'Rigveda (Ashvalayana)',
          labelKn: 'ಋಗ್ವೇದ (ಆಶ್ವಲಾಯನ)',
        },
        {
          id: 'yajurveda',
          label: 'Yajurveda (Taittiriya)',
          labelKn: 'ಯಜುರ್ವೇದ (ತೈತ್ತಿರೀಯ)',
        },
      ],
    },
  ],
  difficulty: 'advanced',
  completeness: 'partial',
  contentNote: 'Given in full: the sankalpa, the Gayatri, the opening words of each Veda and shastra, the concluding mantras, and (Rigveda) the tarpana lists. Not included: the passages of your own Veda that you have learnt by heart and recite here (for Yajurvedins the Samhita, Brahmana and Aranyaka portions; the first anuvaka of the Taittiriya Samhita is given only by its opening words), the pitru-tarpana that Madhvas add after the acharya-tarpana (see "Pitru Tarpana"), and the Yajurvedic nitya tarpana of devas, rishis and pitris (it is given in the Yajurveda Sandhyavandane). For the Madhva Yajurveda form no scanned Madhva manual printed the brahmayajna, so the Vedic words of the Taittiriya form are given with the Madhva sankalpa and prayer.',
  sections: [
    {
      title: 'सङ्कल्पः (माध्वः)',
      titleEn: 'Sankalpa (Madhva)',
      note: 'Sit on a darbha mat facing east (or north), with the sacred thread over the left shoulder (upavita), do achamana and pranayama, state the place and time as in the sandhya sankalpa (see the Sandhyavandane text), and say this resolve.',
      noteKn: 'ದರ್ಭಾಸನದ ಮೇಲೆ ಪೂರ್ವ (ಅಥವಾ ಉತ್ತರ) ಮುಖವಾಗಿ ಯಜ್ಞೋಪವೀತವು ಎಡಭುಜದ ಮೇಲಿರುವಂತೆ (ಉಪವೀತಿ) ಕುಳಿತು, ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ, ಸಂಧ್ಯಾವಂದನೆಯ ಸಂಕಲ್ಪದಂತೆ ದೇಶಕಾಲಗಳನ್ನು ಹೇಳಿ (ಸಂಧ್ಯಾವಂದನೆ ಪಾಠ ನೋಡಿ), ಈ ಸಂಕಲ್ಪ ಮಾಡಿ.',
      when: {
        tradition: ['madhva'],
      },
      verses: [
        {
          text: 'श्रीभारतीरमणमुख्यप्राणान्तर्गत श्रीविष्णुप्रेरणया\nश्रीविष्णुप्रीत्यर्थं देवर्ष्याचार्यपितृतुष्ट्यर्थं ब्रह्मयज्ञेन यक्ष्ये ॥',
          meaning: {
            en: 'Prompted by Sri Vishnu, who dwells within Mukhyaprana, the consort of Bharati, and for the pleasure of Sri Vishnu and the satisfaction of the gods, sages, teachers and ancestors, I shall perform the brahma-yajna.',
            kn: 'ಭಾರತೀರಮಣರಾದ ಮುಖ್ಯಪ್ರಾಣದೇವರ ಅಂತರ್ಯಾಮಿಯಾದ ಶ್ರೀವಿಷ್ಣುವಿನ ಪ್ರೇರಣೆಯಿಂದ, ಶ್ರೀವಿಷ್ಣುವಿನ ಪ್ರೀತಿಗಾಗಿ ಮತ್ತು ದೇವತೆಗಳು, ಋಷಿಗಳು, ಆಚಾರ್ಯರು, ಪಿತೃಗಳ ತೃಪ್ತಿಗಾಗಿ ಬ್ರಹ್ಮಯಜ್ಞವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'सङ्कल्पः (स्मार्तः)',
      titleEn: 'Sankalpa (Smarta)',
      note: 'Sit on a darbha mat facing east, with the sacred thread over the left shoulder, do achamana and pranayama, and say this resolve (Dixit, Taittiriya; Rigvedins take the same form with the sankalpa of their sandhya manual).',
      noteKn: 'ದರ್ಭಾಸನದ ಮೇಲೆ ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ಯಜ್ಞೋಪವೀತ ಎಡಭುಜದ ಮೇಲಿರುವಂತೆ ಕುಳಿತು ಆಚಮನ, ಪ್ರಾಣಾಯಾಮ ಮಾಡಿ ಈ ಸಂಕಲ್ಪ ಹೇಳಿ (ದೀಕ್ಷಿತರ ತೈತ್ತಿರೀಯ ಪುಸ್ತಕ; ಋಗ್ವೇದಿಗಳು ತಮ್ಮ ಸಂಧ್ಯಾವಂದನೆ ಪುಸ್ತಕದ ಸಂಕಲ್ಪದಂತೆ).',
      when: {
        tradition: ['smarta'],
      },
      verses: [
        {
          text: 'मम उपात्तदुरितक्षयद्वारा\nश्रीपरमेश्वरप्रीत्यर्थं ब्रह्मयज्ञेन यक्ष्ये ॥',
          meaning: {
            en: 'For the destruction of all the sins I have gathered, and through that for the pleasure of the Supreme Lord, I shall perform the brahma-yajna.',
            kn: 'ನಾನು ಗಳಿಸಿಕೊಂಡಿರುವ ಸಮಸ್ತ ಪಾಪಗಳ ನಾಶದ ಮೂಲಕ ಪರಮೇಶ್ವರನ ಪ್ರೀತಿಗಾಗಿ ಬ್ರಹ್ಮಯಜ್ಞವನ್ನು ಮಾಡುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'शुद्धिः',
      titleEn: 'Water touch and posture',
      note: 'Say this and touch water. Following the Taittiriya Aranyaka (2.11), the one who does the brahma-yajna sips water three times, wipes the lips twice, touches the water once, sprinkles the left hand and the feet, and touches the head, eyes, nostrils, ears and heart, each with water. Then spread darbha, sit facing east with the right foot placed on the bent left knee, the left palm turned up and the right palm over it (the right hand held with the pavitra), and recite.',
      noteKn: 'ಇದನ್ನು ಹೇಳಿ ನೀರನ್ನು ಸ್ಪರ್ಶಿಸಿ. ತೈತ್ತಿರೀಯ ಆರಣ್ಯಕ (2.11) ಹೇಳುವಂತೆ: ಮೂರು ಬಾರಿ ನೀರು ಕುಡಿದು, ಎರಡು ಬಾರಿ ತುಟಿ ಒರೆಸಿ, ಒಮ್ಮೆ ನೀರು ಮುಟ್ಟಿ, ಎಡಗೈ ಮತ್ತು ಪಾದಗಳನ್ನು ಪ್ರೋಕ್ಷಿಸಿ, ತಲೆ, ಕಣ್ಣು, ಮೂಗು, ಕಿವಿ, ಹೃದಯಗಳನ್ನು ನೀರಿನಿಂದ ಮುಟ್ಟಿ. ನಂತರ ದರ್ಭೆ ಹರಡಿ ಪೂರ್ವಾಭಿಮುಖವಾಗಿ ಕುಳಿತು, ಎಡ ಮೊಣಕಾಲಿನ ಮೇಲೆ ಬಲಗಾಲನ್ನಿಟ್ಟು, ಎಡ ಅಂಗೈಯನ್ನು ಮೇಲ್ಮುಖವಾಗಿ ಮಾಡಿ ಅದರ ಮೇಲೆ ಬಲ ಅಂಗೈಯನ್ನಿಟ್ಟು (ಪವಿತ್ರದೊಂದಿಗೆ) ಪಾರಾಯಣ ಮಾಡಿ.',
      verses: [
        {
          text: 'ॐ विद्युदसि विद्य मे पाप्मानमृतात्सत्यमुपैमि ॥',
          meaning: {
            en: 'You are the lightning: scatter my sin. From the unreal (rita-breaking) I come to the truth.',
            kn: 'ನೀನು ಮಿಂಚು; ನನ್ನ ಪಾಪವನ್ನು ಛೇದಿಸು. ಅಸತ್ಯದಿಂದ ಸತ್ಯವನ್ನು ಸೇರುತ್ತೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'सावित्री',
      titleEn: 'The Gayatri',
      note: 'The Gayatri is said three times: first padasah (foot by foot), then ardharcasah (half-verse by half-verse), then entire (Ashvalayana Grihya Sutra 3.2; Taittiriya Aranyaka 2.11). Before it the pranava and the vyahritis are said.',
      noteKn: 'ಗಾಯತ್ರಿಯನ್ನು ಮೂರು ಬಾರಿ ಹೇಳಬೇಕು: ಮೊದಲು ಪಾದಶಃ, ನಂತರ ಅರ್ಧರ್ಚಶಃ, ನಂತರ ಪೂರ್ಣವಾಗಿ (ಆಶ್ವಲಾಯನ ಗೃಹ್ಯ ಸೂತ್ರ 3.2; ತೈತ್ತಿರೀಯ ಆರಣ್ಯಕ 2.11). ಇದಕ್ಕೆ ಮೊದಲು ಪ್ರಣವ ಮತ್ತು ವ್ಯಾಹೃತಿಗಳನ್ನು ಹೇಳಬೇಕು.',
      verses: [
        {
          text: 'ॐ भूर्भुवः सुवः ।\nतत्सवितुर्वरेण्यम् । भर्गो देवस्य धीमहि । धियो यो नः प्रचोदयात् ॥',
          meaning: {
            en: 'Om, Bhur Bhuvah Svah. We meditate on the glorious light of the divine Savitri; may he inspire our minds. (Said three times: first foot by foot, then half by half, then entire.)',
            kn: 'ಓಂ ಭೂರ್ಭುವಃ ಸುವಃ. ಸವಿತೃದೇವನ ಶ್ರೇಷ್ಠ ತೇಜಸ್ಸನ್ನು ಧ್ಯಾನಿಸುತ್ತೇವೆ; ಅವನು ನಮ್ಮ ಬುದ್ಧಿಗಳನ್ನು ಪ್ರೇರಿಸಲಿ. (ಮೂರು ಬಾರಿ: ಮೊದಲು ಪಾದ ಪಾದವಾಗಿ, ನಂತರ ಅರ್ಧ ಅರ್ಧವಾಗಿ, ನಂತರ ಪೂರ್ಣವಾಗಿ.)',
          },
        },
        {
          text: 'ॐ परो रजसि सावदोम् ॥',
          meaning: {
            en: 'Om. (He is) beyond the worlds, the Self, Om.',
            kn: 'ಓಂ. ಅವನು ಲೋಕಗಳನ್ನು ಮೀರಿದವನು, ಓಂ.',
          },
          when: {
            veda: ['yajurveda'],
          },
        },
      ],
    },
    {
      title: 'ऋग्वेदाध्ययनम्',
      titleEn: 'Recitation (Rigveda)',
      note: 'Rigvedins (Ashvalayana Grihya Sutra 3.3) recite the Rik, Yajus, Saman, Atharvangirasa, Brahmana, Kalpa, Gatha, Narashamsi, itihasa and purana, each of which satisfies the gods with its own offerings (milk, ghee, honey, soma and nectar). The openings below follow the manual of Mathad (Madhva); Smarta manuals may choose other openings. Recite them, then whatever else you have learnt.',
      noteKn: 'ಋಗ್ವೇದಿಗಳು (ಆಶ್ವಲಾಯನ ಗೃಹ್ಯ ಸೂತ್ರ 3.3) ಋಕ್, ಯಜುಸ್, ಸಾಮ, ಅಥರ್ವಾಂಗಿರಸ, ಬ್ರಾಹ್ಮಣ, ಕಲ್ಪ, ಗಾಥಾ, ನಾರಾಶಂಸೀ, ಇತಿಹಾಸ, ಪುರಾಣಗಳನ್ನು ಪಠಿಸುತ್ತಾರೆ; ಪ್ರತಿಯೊಂದೂ ತನ್ನ ಆಹುತಿಗಳಿಂದ (ಹಾಲು, ತುಪ್ಪ, ಜೇನು, ಸೋಮ, ಅಮೃತ) ದೇವತೆಗಳನ್ನು ತೃಪ್ತಿಪಡಿಸುತ್ತದೆ. ಕೆಳಗಿನ ಆರಂಭ ವಾಕ್ಯಗಳು ಮಠದ ಅವರ (ಮಾಧ್ವ) ಪುಸ್ತಕದಂತೆ; ಸ್ಮಾರ್ತ ಪುಸ್ತಕಗಳಲ್ಲಿ ಬೇರೆ ವಾಕ್ಯಗಳಿರಬಹುದು. ಇವನ್ನು ಹೇಳಿ, ನಂತರ ನೀವು ಕಲಿತ ಇತರ ಭಾಗಗಳನ್ನು ಪಠಿಸಿ.',
      when: {
        veda: ['rigveda'],
      },
      verses: [
        {
          text: 'ॐ अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम् ।\nहोतारं रत्नधातमम् ॥',
          meaning: {
            en: 'I praise Agni, the household priest, the god, the priest of the sacrifice, the invoker who bestows treasure. (Rigveda 1.1.1)',
            kn: 'ಯಜ್ಞದ ಪುರೋಹಿತನಾದ, ದೇವನಾದ, ಋತ್ವಿಜನಾದ, ಹೋತೃವಾದ, ರತ್ನಗಳನ್ನು ಕೊಡುವ ಅಗ್ನಿಯನ್ನು ಸ್ತುತಿಸುತ್ತೇನೆ. (ಋಗ್ವೇದ 1.1.1)',
          },
        },
        {
          text: 'अग्निर्वै देवानामवमो विष्णुः परमः ।',
          meaning: {
            en: 'Agni is the lowest of the gods and Vishnu the highest. (Opening of the Aitareya Brahmana)',
            kn: 'ದೇವತೆಗಳಲ್ಲಿ ಅಗ್ನಿ ಅವರ (ಕೆಳಗಿನ) ಮೊದಲಿಗನು, ವಿಷ್ಣು ಪರಮನು. (ಐತರೇಯ ಬ್ರಾಹ್ಮಣದ ಆರಂಭ)',
          },
        },
        {
          text: 'अथ महाव्रतम् । एष पन्था एतत्कर्म ।\nअथातः संहिताया उपनिषत् । विदा मघवन्विदा ।',
          meaning: {
            en: 'Now the Mahavrata: this is the path, this is the rite. Now the Upanishad of the Samhita: "know, O Maghavan, know." (Openings of the Aitareya Aranyaka)',
            kn: 'ಅಥ ಮಹಾವ್ರತ: ಇದೇ ಮಾರ್ಗ, ಇದೇ ಕರ್ಮ. ಅಥಾತಃ ಸಂಹಿತೆಯ ಉಪನಿಷತ್ತು: “ವಿದಾ ಮಘವನ್ ವಿದಾ”. (ಐತರೇಯ ಆರಣ್ಯಕದ ಆರಂಭ ವಾಕ್ಯಗಳು)',
          },
        },
        {
          text: 'ॐ इषे त्वोर्जे त्वा ।',
          meaning: {
            en: 'For nourishment you, for strength you. (Opening of the Yajurveda)',
            kn: 'ಅನ್ನಕ್ಕಾಗಿ ನಿನ್ನನ್ನು, ಬಲಕ್ಕಾಗಿ ನಿನ್ನನ್ನು. (ಯಜುರ್ವೇದದ ಆರಂಭ)',
          },
        },
        {
          text: 'ॐ अग्न आयाहि वीतये गृणानो हव्यदातये ।\nनि होता सत्सि बर्हिषि ॥',
          meaning: {
            en: 'Come, O Agni, to the feast, praised, to bring the offerings; sit down as the invoker on the sacred grass. (Opening of the Samaveda)',
            kn: 'ಅಗ್ನಿಯೇ, ಹವಿಸ್ಸನ್ನು ಸ್ವೀಕರಿಸಲು, ಸ್ತುತಿಸಲ್ಪಟ್ಟು ಬಾ; ಹೋತೃವಾಗಿ ದರ್ಭೆಯ ಮೇಲೆ ಕುಳಿತುಕೊ. (ಸಾಮವೇದದ ಆರಂಭ)',
          },
        },
        {
          text: 'ॐ शं नो देवीरभिष्टय आपो भवन्तु पीतये ।\nशं योरभि स्रवन्तु नः ॥',
          meaning: {
            en: 'May the divine waters be good for us, for our wish and our drinking; may they flow to us with health and well-being. (Opening of the Atharvaveda)',
            kn: 'ದಿವ್ಯ ಜಲಗಳು ನಮ್ಮ ಅಭೀಷ್ಟ ಮತ್ತು ಪಾನಕ್ಕೆ ಶುಭಕರವಾಗಲಿ; ಆರೋಗ್ಯ ಮತ್ತು ಕ್ಷೇಮದೊಂದಿಗೆ ನಮ್ಮತ್ತ ಹರಿಯಲಿ. (ಅಥರ್ವವೇದದ ಆರಂಭ)',
          },
        },
      ],
    },
    {
      title: 'यजुर्वेदाध्ययनम्',
      titleEn: 'Recitation (Yajurveda, Taittiriya)',
      note: 'The Yajurvedin first says the Rik on the "imperishable syllable" (Taittiriya Aranyaka 2.11), then the Gayatri, then his own Veda: the Samhita, Brahmana and Aranyaka and Upanishad portions he has learnt (Dixit: after the first anuvaka of the Samhita, the openings of the other Vedas as below). Only the opening words are printed here.',
      noteKn: 'ಯಜುರ್ವೇದಿ ಮೊದಲು “ಋಚೋ ಅಕ್ಷರೇ ಪರಮೇ ವ್ಯೋಮನ್” ಋಕ್ಕನ್ನು ಹೇಳಿ (ತೈತ್ತಿರೀಯ ಆರಣ್ಯಕ 2.11), ನಂತರ ಗಾಯತ್ರಿ, ನಂತರ ತನ್ನ ವೇದ: ತಾನು ಕಲಿತ ಸಂಹಿತೆ, ಬ್ರಾಹ್ಮಣ, ಆರಣ್ಯಕ, ಉಪನಿಷತ್ ಭಾಗಗಳನ್ನು ಪಠಿಸುತ್ತಾನೆ (ದೀಕ್ಷಿತರ ಪ್ರಕಾರ ಸಂಹಿತೆಯ ಮೊದಲ ಅನುವಾಕದ ನಂತರ ಕೆಳಗಿನ ಇತರ ವೇದಗಳ ಆರಂಭ ವಾಕ್ಯಗಳು). ಇಲ್ಲಿ ಆರಂಭ ಪದಗಳನ್ನು ಮಾತ್ರ ಕೊಟ್ಟಿದೆ.',
      when: {
        veda: ['yajurveda'],
      },
      verses: [
        {
          text: 'ऋचो अक्षरे परमे व्योमन् यस्मिन्देवा अधि विश्वे निषेदुः ।\nयस्तन्न वेद किमृचा करिष्यति य इत्तद्विदुस्त इमे समासते ॥',
          meaning: {
            en: 'In the imperishable syllable of the Rik, in the highest heaven, all the gods have taken their seat. He who does not know that, what will he do with the Rik? Those who know it are the ones who sit here.',
            kn: 'ಋಕ್ಕಿನ ಅಕ್ಷರದಲ್ಲಿ, ಪರಮ ಆಕಾಶದಲ್ಲಿ, ಎಲ್ಲ ದೇವತೆಗಳೂ ಕುಳಿತಿದ್ದಾರೆ. ಅದನ್ನು ತಿಳಿಯದವನು ಋಕ್ಕಿನಿಂದ ಏನು ಮಾಡುವನು? ಅದನ್ನು ತಿಳಿದವರೇ ಇಲ್ಲಿ ಕುಳಿತಿರುವವರು.',
          },
        },
        {
          text: 'ॐ इषे त्वोर्जे त्वा वायवस्स्थ ।',
          meaning: {
            en: 'For nourishment you, for strength you; you are the winds. (Opening of the Taittiriya Samhita 1.1.1; recite the Samhita portion you have learnt)',
            kn: 'ಅನ್ನಕ್ಕಾಗಿ ನಿನ್ನನ್ನು, ಬಲಕ್ಕಾಗಿ ನಿನ್ನನ್ನು; ನೀವು ವಾಯುಗಳು. (ತೈತ್ತಿರೀಯ ಸಂಹಿತೆ 1.1.1 ರ ಆರಂಭ; ನೀವು ಕಲಿತ ಸಂಹಿತಾ ಭಾಗವನ್ನು ಪಠಿಸಿ)',
          },
        },
        {
          text: 'ॐ ब्रह्म सन्धत्तं तन्मे जिन्वतम् ।\nक्षत्रं सन्धत्तं तन्मे जिन्वतम् ॥',
          meaning: {
            en: 'Join the brahmana power and quicken it for me; join the kshatra power and quicken it for me. (Opening of the Taittiriya Brahmana; recite the Brahmana portion you have learnt)',
            kn: 'ಬ್ರಹ್ಮತೇಜಸ್ಸನ್ನು ಸೇರಿಸಿ ನನಗಾಗಿ ವೃದ್ಧಿಪಡಿಸಿ; ಕ್ಷತ್ರತೇಜಸ್ಸನ್ನು ಸೇರಿಸಿ ನನಗಾಗಿ ವೃದ್ಧಿಪಡಿಸಿ. (ತೈತ್ತಿರೀಯ ಬ್ರಾಹ್ಮಣದ ಆರಂಭ; ನೀವು ಕಲಿತ ಬ್ರಾಹ್ಮಣ ಭಾಗವನ್ನು ಪಠಿಸಿ)',
          },
        },
        {
          text: 'ॐ अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम् ।\nहोतारं रत्नधातमम् ॥',
          meaning: {
            en: 'I praise Agni, the household priest, the god, the priest of the sacrifice, the invoker who bestows treasure. (Rigveda 1.1.1)',
            kn: 'ಯಜ್ಞದ ಪುರೋಹಿತನಾದ, ದೇವನಾದ, ಋತ್ವಿಜನಾದ, ಹೋತೃವಾದ, ರತ್ನಗಳನ್ನು ಕೊಡುವ ಅಗ್ನಿಯನ್ನು ಸ್ತುತಿಸುತ್ತೇನೆ. (ಋಗ್ವೇದ 1.1.1)',
          },
        },
        {
          text: 'ॐ अग्न आयाहि वीतये गृणानो हव्यदातये ।\nनि होता सत्सि बर्हिषि ॥',
          meaning: {
            en: 'Come, O Agni, to the feast, praised, to bring the offerings; sit down as the invoker on the sacred grass. (Opening of the Samaveda)',
            kn: 'ಅಗ್ನಿಯೇ, ಹವಿಸ್ಸನ್ನು ಸ್ವೀಕರಿಸಲು, ಸ್ತುತಿಸಲ್ಪಟ್ಟು ಬಾ; ಹೋತೃವಾಗಿ ದರ್ಭೆಯ ಮೇಲೆ ಕುಳಿತುಕೊ. (ಸಾಮವೇದದ ಆರಂಭ)',
          },
        },
        {
          text: 'ॐ शं नो देवीरभिष्टय आपो भवन्तु पीतये ।\nशं योरभि स्रवन्तु नः ॥',
          meaning: {
            en: 'May the divine waters be good for us, for our wish and our drinking; may they flow to us with health and well-being. (Opening of the Atharvaveda)',
            kn: 'ದಿವ್ಯ ಜಲಗಳು ನಮ್ಮ ಅಭೀಷ್ಟ ಮತ್ತು ಪಾನಕ್ಕೆ ಶುಭಕರವಾಗಲಿ; ಆರೋಗ್ಯ ಮತ್ತು ಕ್ಷೇಮದೊಂದಿಗೆ ನಮ್ಮತ್ತ ಹರಿಯಲಿ. (ಅಥರ್ವವೇದದ ಆರಂಭ)',
          },
        },
      ],
    },
    {
      title: 'वेदाङ्गादिपठनम्',
      titleEn: 'Openings of the Vedangas, shastras and smritis',
      note: 'After the Veda, the Vedangas and shastras are recalled by their opening words (Mathad for the Madhva form; Dixit and stotranidhi for the Taittiriya form). The first lines are common to Madhva and Smarta; the Madhva manual adds the openings of the Mahabharata Tatparya Nirnaya, the Bhagavata and the Anubhashya, and the prayer "tac-chamyor-avrinimahe". Smartas add, as their manual gives, the openings of the Gita, Ramayana, Manu and the other darshanas.',
      noteKn: 'ವೇದದ ನಂತರ ವೇದಾಂಗ, ಶಾಸ್ತ್ರಗಳನ್ನು ಅವುಗಳ ಆರಂಭ ವಾಕ್ಯಗಳಿಂದ ಸ್ಮರಿಸುತ್ತಾರೆ (ಮಾಧ್ವ ರೂಪಕ್ಕೆ ಮಠದ ಅವರ ಪುಸ್ತಕ; ತೈತ್ತಿರೀಯ ರೂಪಕ್ಕೆ ದೀಕ್ಷಿತ ಮತ್ತು ಸ್ತೋತ್ರನಿಧಿ). ಮೊದಲ ಸಾಲುಗಳು ಮಾಧ್ವ ಮತ್ತು ಸ್ಮಾರ್ತ ಇಬ್ಬರಿಗೂ ಸಾಮಾನ್ಯ; ಮಾಧ್ವ ಪುಸ್ತಕದಲ್ಲಿ ಮಹಾಭಾರತ ತಾತ್ಪರ್ಯ ನಿರ್ಣಯ, ಭಾಗವತ, ಅನುಭಾಷ್ಯಗಳ ಆರಂಭ ಮತ್ತು “ತಚ್ಛಂಯೋರಾವೃಣೀಮಹೇ” ಪ್ರಾರ್ಥನೆ ಹೆಚ್ಚುವರಿ. ಸ್ಮಾರ್ತರು ತಮ್ಮ ಪುಸ್ತಕದಂತೆ ಗೀತೆ, ರಾಮಾಯಣ, ಮನುಸ್ಮೃತಿ ಮತ್ತು ಇತರ ದರ್ಶನಗಳ ಆರಂಭವನ್ನು ಸೇರಿಸುತ್ತಾರೆ.',
      verses: [
        {
          text: 'अथैतस्य समाम्नायस्य समाम्नायः समाम्नातः ।',
          meaning: {
            en: 'Now this collection of words, handed down as a collection. (Opening of the Nirukta)',
            kn: 'ಇದೀಗ ಈ ಸಮಾಮ್ನಾಯದ (ಪದಸಮೂಹದ) ಸಮಾಮ್ನಾಯ ಪರಂಪರೆಯಿಂದ ಬಂದಿದೆ. (ನಿರುಕ್ತದ ಆರಂಭ)',
          },
        },
        {
          text: 'मयरसतजभनलगसम्मितम् ।',
          meaning: {
            en: 'Counted by the groups ma, ya, ra, sa, ta, ja, bha, na, la, ga. (Opening of the Chandas, metre)',
            kn: 'ಮ, ಯ, ರ, ಸ, ತ, ಜ, ಭ, ನ, ಲ, ಗ ಗಣಗಳಿಂದ ಎಣಿಸಲ್ಪಟ್ಟದ್ದು. (ಛಂದಶ್ಶಾಸ್ತ್ರದ ಆರಂಭ)',
          },
        },
        {
          text: 'गौः ग्मा ज्मा ।',
          meaning: {
            en: 'Gauh, gma, jma (words for the earth). (Opening of the Nighantu)',
            kn: 'ಗೌಃ, ಗ್ಮಾ, ಜ್ಮಾ (ಭೂಮಿಯ ಹೆಸರುಗಳು). (ನಿಘಂಟುವಿನ ಆರಂಭ)',
          },
        },
        {
          text: 'पञ्चसंवत्सरमयम् ।',
          meaning: {
            en: 'The cycle of five years. (Opening of the Jyotisha)',
            kn: 'ಐದು ಸಂವತ್ಸರಗಳ ಚಕ್ರ. (ಜ್ಯೋತಿಷದ ಆರಂಭ)',
          },
        },
        {
          text: 'अथ शिक्षां प्रवक्ष्यामि ।',
          meaning: {
            en: 'Now I shall explain the Shiksha (phonetics).',
            kn: 'ಈಗ ಶಿಕ್ಷೆಯನ್ನು (ಉಚ್ಚಾರಣಾ ಶಾಸ್ತ್ರ) ಹೇಳುತ್ತೇನೆ.',
          },
        },
        {
          text: 'वृद्धिरादैच् ।',
          meaning: {
            en: 'The vriddhi vowels are a, ai, au. (Opening of Panini\'s Vyakarana)',
            kn: 'ವೃದ್ಧಿ ಸ್ವರಗಳು ಆ, ಐ, ಔ. (ಪಾಣಿನಿಯ ವ್ಯಾಕರಣದ ಆರಂಭ)',
          },
        },
        {
          text: 'अथातो धर्मजिज्ञासा । अथातो ब्रह्मजिज्ञासा ॥',
          meaning: {
            en: 'Now, therefore, the inquiry into dharma. Now, therefore, the inquiry into Brahman. (Openings of the Purva Mimamsa Sutra and the Brahma Sutra)',
            kn: 'ಇನ್ನು ಧರ್ಮ ಜಿಜ್ಞಾಸೆ. ಇನ್ನು ಬ್ರಹ್ಮ ಜಿಜ್ಞಾಸೆ. (ಪೂರ್ವಮೀಮಾಂಸಾ ಸೂತ್ರ ಮತ್ತು ಬ್ರಹ್ಮಸೂತ್ರದ ಆರಂಭ)',
          },
        },
        {
          text: 'योगीश्वरं याज्ञवल्क्यं ।',
          meaning: {
            en: 'To Yajnavalkya, lord of yogis. (Opening of the Yajnavalkya Smriti)',
            kn: 'ಯೋಗೀಶ್ವರನಾದ ಯಾಜ್ಞವಲ್ಕ್ಯನನ್ನು. (ಯಾಜ್ಞವಲ್ಕ್ಯ ಸ್ಮೃತಿಯ ಆರಂಭ)',
          },
        },
        {
          text: 'नारायणं नमस्कृत्य ।',
          meaning: {
            en: 'Having saluted Narayana. (Opening of the Mahabharata)',
            kn: 'ನಾರಾಯಣನಿಗೆ ನಮಸ್ಕರಿಸಿ. (ಮಹಾಭಾರತದ ಆರಂಭ)',
          },
        },
        {
          text: 'नारायणाय परिपूर्णगुणार्णवाय ।',
          meaning: {
            en: 'To Narayana, the ocean of perfect qualities. (Opening of the Mahabharata Tatparya Nirnaya)',
            kn: 'ಪರಿಪೂರ್ಣ ಗುಣಸಾಗರನಾದ ನಾರಾಯಣನಿಗೆ. (ಮಹಾಭಾರತ ತಾತ್ಪರ್ಯ ನಿರ್ಣಯದ ಆರಂಭ)',
          },
          when: {
            tradition: ['madhva'],
          },
        },
        {
          text: 'जन्माद्यस्य यतोऽन्वयादितरतश्चार्थेष्वभिज्ञः ।',
          meaning: {
            en: 'From whom the origin and the rest of this world proceed, who is aware of all things. (Opening of the Bhagavata)',
            kn: 'ಯಾರಿಂದ ಈ ಜಗತ್ತಿನ ಜನ್ಮ ಮೊದಲಾದವು ಉಂಟಾಗುತ್ತವೋ, ಎಲ್ಲ ವಿಷಯಗಳನ್ನು ತಿಳಿದವನು. (ಭಾಗವತದ ಆರಂಭ)',
          },
          when: {
            tradition: ['madhva'],
          },
        },
        {
          text: 'नारायणं गुणैः सर्वैरुदीर्णं दोषवर्जितम् ।\nज्ञेयं गम्यं गुरूंश्चापि नत्वा सूत्रार्थ उच्यते ॥',
          meaning: {
            en: 'Having bowed to Narayana, rich in all excellent qualities and free from all fault, who is to be known and reached, and to the teachers, the meaning of the sutras is stated. (Opening of the Anubhashya)',
            kn: 'ಸರ್ವಗುಣ ಸಂಪನ್ನನೂ ದೋಷರಹಿತನೂ, ತಿಳಿಯಬೇಕಾದವನೂ ಸೇರಬೇಕಾದವನೂ ಆದ ನಾರಾಯಣನಿಗೂ ಗುರುಗಳಿಗೂ ನಮಸ್ಕರಿಸಿ ಸೂತ್ರಾರ್ಥವನ್ನು ಹೇಳಲಾಗುತ್ತದೆ. (ಅನುಭಾಷ್ಯದ ಆರಂಭ)',
          },
          when: {
            tradition: ['madhva'],
          },
        },
        {
          text: 'ॐ तच्छंयोरावृणीमहे । गातुं यज्ञाय । गातुं यज्ञपतये ।\nदैवी स्वस्तिरस्तु नः । स्वस्तिर्मानुषेभ्यः ।\nऊर्ध्वं जिगातु भेषजम् । शं नो अस्तु द्विपदे । शं चतुष्पदे ॥',
          meaning: {
            en: 'We ask for that blessing: a way for the sacrifice, a way for the lord of the sacrifice. May divine well-being be ours, and well-being for human beings; may healing rise upward; may it be well for our two-footed and four-footed creatures.',
            kn: 'ನಾವು ಆ ಶುಭವನ್ನು ಬೇಡುತ್ತೇವೆ: ಯಜ್ಞಕ್ಕೆ ಮಾರ್ಗ, ಯಜ್ಞಪತಿಗೆ ಮಾರ್ಗ. ನಮಗೆ ದೈವೀ ಸ್ವಸ್ತಿ, ಮನುಷ್ಯರಿಗೆ ಸ್ವಸ್ತಿ ಇರಲಿ; ಔಷಧಿ ಮೇಲೇರಲಿ; ನಮ್ಮ ಎರಡು ಕಾಲಿನ ಮತ್ತು ನಾಲ್ಕು ಕಾಲಿನ ಜೀವಿಗಳಿಗೆ ಕ್ಷೇಮವಿರಲಿ.',
          },
          when: {
            tradition: ['madhva'],
          },
        },
      ],
    },
    {
      title: 'परिधानीयम्',
      titleEn: 'The concluding mantra',
      note: 'Say the first mantra three times (Ashvalayana Grihya Sutra 3.3: "namo brahmane ... karomi"; Taittiriya Aranyaka 2.12), then touch water with the second and touch the head, eyes, nostrils, ears and heart with water, one after another. (Taittiriya followers of stotranidhi.com first say "bhur bhuvah svah satyam tapah shraddhayam juhomi" before the second mantra.)',
      noteKn: 'ಮೊದಲ ಮಂತ್ರವನ್ನು ಮೂರು ಬಾರಿ ಹೇಳಿ (ಆಶ್ವಲಾಯನ ಗೃಹ್ಯ ಸೂತ್ರ 3.3: “ನಮೋ ಬ್ರಹ್ಮಣೇ ... ಕರೋಮಿ”; ತೈತ್ತಿರೀಯ ಆರಣ್ಯಕ 2.12), ಎರಡನೆಯದನ್ನು ಹೇಳಿ ನೀರನ್ನು ಮುಟ್ಟಿ, ತಲೆ, ಕಣ್ಣು, ಮೂಗು, ಕಿವಿ, ಹೃದಯಗಳನ್ನು ಒಂದೊಂದಾಗಿ ನೀರಿನಿಂದ ಮುಟ್ಟಿ. (ಸ್ತೋತ್ರನಿಧಿಯ ತೈತ್ತಿರೀಯರು ಎರಡನೆಯ ಮಂತ್ರಕ್ಕೆ ಮೊದಲು “ಭೂರ್ಭುವಸ್ಸುವಸ್ಸತ್ಯಂ ತಪಶ್ಶ್ರದ್ಧಾಯಾಂ ಜುಹೋಮಿ” ಹೇಳುತ್ತಾರೆ.)',
      verses: [
        {
          text: 'ॐ नमो ब्रह्मणे नमो अस्त्वग्नये नमः पृथिव्यै नम ओषधीभ्यः ।\nनमो वाचे नमो वाचस्पतये नमो विष्णवे बृहते करोमि ॥\nॐ शान्तिः शान्तिः शान्तिः ॥',
          meaning: {
            en: 'Salutations to Brahman; salutations to Agni; to the Earth, to the plants; salutations to Speech and to the Lord of Speech; to the great Vishnu I make my salutation. Om peace, peace, peace. (Said three times.)',
            kn: 'ಬ್ರಹ್ಮನಿಗೆ ನಮಸ್ಕಾರ; ಅಗ್ನಿಗೆ ನಮಸ್ಕಾರ; ಪೃಥ್ವಿಗೆ, ಓಷಧಿಗಳಿಗೆ ನಮಸ್ಕಾರ; ವಾಕ್ಕಿಗೆ, ವಾಚಸ್ಪತಿಗೆ ನಮಸ್ಕಾರ; ಮಹಾ ವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕರಿಸುತ್ತೇನೆ. ಓಂ ಶಾಂತಿಃ ಶಾಂತಿಃ ಶಾಂತಿಃ. (ಮೂರು ಬಾರಿ ಹೇಳಬೇಕು.)',
          },
        },
        {
          text: 'वृष्टिरसि वृश्च मे पाप्मानमृतात्सत्यमुपागाम् ॥',
          meaning: {
            en: 'You are the rain: cut off my sin. From the unreal I have come to the truth.',
            kn: 'ನೀನು ವೃಷ್ಟಿ; ನನ್ನ ಪಾಪವನ್ನು ಕತ್ತರಿಸು. ಅಸತ್ಯದಿಂದ ಸತ್ಯವನ್ನು ಸೇರಿದ್ದೇನೆ.',
          },
        },
      ],
    },
    {
      title: 'देवतर्पणम्',
      titleEn: 'Tarpana of the gods (Rigveda)',
      note: 'Tarpana (Ashvalayana Grihya Sutra 3.4; Mathad): with the sacred thread over the left shoulder (savya, upavita), facing east (as in the nitya tarpana of Dixit), offer water from the tips of the fingers (the deva-tirtha) with each phrase; in the Madhva manner (Mathad) the nirmalya tirtha, the water offered to the Lord, is used. The first two names (Agni, Vishnu) are added in the Madhva manual (Mathad).',
      noteKn: 'ತರ್ಪಣ (ಆಶ್ವಲಾಯನ ಗೃಹ್ಯ ಸೂತ್ರ 3.4; ಮಠದ ಅವರು): ಯಜ್ಞೋಪವೀತ ಎಡಭುಜದ ಮೇಲಿರುವಂತೆ (ಸವ್ಯ), ಪೂರ್ವಾಭಿಮುಖವಾಗಿ (ದೀಕ್ಷಿತರ ನಿತ್ಯ ತರ್ಪಣದಂತೆ) ಕುಳಿತು, ಪ್ರತಿ ವಾಕ್ಯಕ್ಕೂ ಬೆರಳ ತುದಿಗಳಿಂದ (ದೇವತೀರ್ಥ) ನೀರನ್ನು ಬಿಡಿ; ಮಾಧ್ವ ಕ್ರಮದಲ್ಲಿ (ಮಠದ ಅವರು) ದೇವರ ನಿರ್ಮಾಲ್ಯ ತೀರ್ಥವನ್ನು ಬಳಸುತ್ತಾರೆ. ಮೊದಲ ಎರಡು ಹೆಸರುಗಳು (ಅಗ್ನಿ, ವಿಷ್ಣು) ಮಠದ ಅವರ ಮಾಧ್ವ ಪುಸ್ತಕದಲ್ಲಿ ಹೆಚ್ಚುವರಿ.',
      when: {
        veda: ['rigveda'],
      },
      verses: [
        {
          text: 'ॐ अग्निस्तृप्यतु । विष्णुस्तृप्यतु । प्रजापतिस्तृप्यतु । ब्रह्मा तृप्यतु ।\nवेदास्तृप्यन्तु । देवास्तृप्यन्तु । ऋषयस्तृप्यन्तु । सर्वाणि च्छन्दांसि तृप्यन्तु ।\nॐकारस्तृप्यतु । वषट्कारस्तृप्यतु । व्याहृतयस्तृप्यन्तु । सावित्री तृप्यतु ।\nयज्ञास्तृप्यन्तु । द्यावापृथिव्यौ तृप्येताम् । अन्तरिक्षं तृप्यतु । अहोरात्राणि तृप्यन्तु ॥',
          meaning: {
            en: 'May Agni, Vishnu, Prajapati and Brahma be satisfied; the Vedas, the gods, the sages and all the metres; Omkara, Vashatkara, the vyahritis and Savitri; the sacrifices, heaven and earth, the sky, and days and nights.',
            kn: 'ಅಗ್ನಿ, ವಿಷ್ಣು, ಪ್ರಜಾಪತಿ, ಬ್ರಹ್ಮರು ತೃಪ್ತರಾಗಲಿ; ವೇದಗಳು, ದೇವತೆಗಳು, ಋಷಿಗಳು, ಎಲ್ಲ ಛಂದಸ್ಸುಗಳು; ಓಂಕಾರ, ವಷಟ್ಕಾರ, ವ್ಯಾಹೃತಿಗಳು, ಸಾವಿತ್ರೀ; ಯಜ್ಞಗಳು, ದ್ಯಾವಾಪೃಥಿವಿಗಳು, ಅಂತರಿಕ್ಷ, ಹಗಲು-ರಾತ್ರಿಗಳು ತೃಪ್ತರಾಗಲಿ.',
          },
        },
        {
          text: 'सङ्ख्यास्तृप्यन्तु । सिद्धास्तृप्यन्तु । समुद्रास्तृप्यन्तु । नद्यस्तृप्यन्तु । गिरयस्तृप्यन्तु ।\nक्षेत्रौषधिवनस्पतिगन्धर्वाप्सरसस्तृप्यन्तु । नागास्तृप्यन्तु । वयांसि तृप्यन्तु । गावस्तृप्यन्तु ।\nसाध्यास्तृप्यन्तु । विप्रास्तृप्यन्तु । यक्षास्तृप्यन्तु । रक्षांसि तृप्यन्तु ।\nभूतानि तृप्यन्तु । एवमन्तानि तृप्यन्तु ॥',
          meaning: {
            en: 'May the numbers, the perfected beings, the oceans, rivers and mountains be satisfied; the fields, plants, trees, gandharvas and apsarases; the serpents, birds and cows; the sadhyas, the learned, the yakshas, the rakshasas; all beings, and all that end the list.',
            kn: 'ಸಂಖ್ಯೆಗಳು, ಸಿದ್ಧರು, ಸಮುದ್ರಗಳು, ನದಿಗಳು, ಪರ್ವತಗಳು ತೃಪ್ತರಾಗಲಿ; ಕ್ಷೇತ್ರ, ಓಷಧಿ, ವನಸ್ಪತಿ, ಗಂಧರ್ವ, ಅಪ್ಸರೆಯರು; ನಾಗಗಳು, ಪಕ್ಷಿಗಳು, ಗೋವುಗಳು; ಸಾಧ್ಯರು, ವಿಪ್ರರು, ಯಕ್ಷರು, ರಾಕ್ಷಸರು; ಭೂತಗಳು, ಹೀಗೆ ಕೊನೆಯವರೆಗಿನ ಎಲ್ಲರೂ ತೃಪ್ತರಾಗಲಿ.',
          },
        },
      ],
    },
    {
      title: 'ऋषितर्पणम्',
      titleEn: 'Tarpana of the rishis (Rigveda)',
      note: 'The rishi-tarpana is done with the sacred thread worn like a garland (nivita), facing north (as in the nitya tarpana of Dixit), from the base of the little finger of the right hand (the prajapati-tirtha), as Mathad prescribes.',
      noteKn: 'ಋಷಿತರ್ಪಣವನ್ನು ಯಜ್ಞೋಪವೀತವನ್ನು ಮಾಲೆಯಂತೆ (ನಿವೀತ) ಧರಿಸಿ, ಉತ್ತರಾಭಿಮುಖವಾಗಿ (ದೀಕ್ಷಿತರ ನಿತ್ಯ ತರ್ಪಣದಂತೆ), ಬಲಗೈ ಕಿರುಬೆರಳಿನ ಬುಡದಿಂದ (ಪ್ರಜಾಪತಿ ತೀರ್ಥ) ಮಠದ ಅವರು ಹೇಳುವಂತೆ ಮಾಡಬೇಕು.',
      when: {
        veda: ['rigveda'],
      },
      verses: [
        {
          text: 'ॐ शतर्चिनस्तृप्यन्तु । माध्यमास्तृप्यन्तु । गृत्समदस्तृप्यतु । विश्वामित्रस्तृप्यतु ।\nवामदेवस्तृप्यतु । अत्रिस्तृप्यतु । भरद्वाजस्तृप्यतु । वसिष्ठस्तृप्यतु ।\nप्रगाथास्तृप्यन्तु । पावमान्यस्तृप्यन्तु । क्षुद्रसूक्तास्तृप्यन्तु । महासूक्तास्तृप्यन्तु ॥',
          meaning: {
            en: 'May the Shatarchins, the Madhyamas, Gritsamada, Vishvamitra, Vamadeva, Atri, Bharadvaja, Vasishtha, the Pragathas, the Pavamanis, the Kshudra-suktas and the Maha-suktas be satisfied.',
            kn: 'ಶತರ್ಚಿಗಳು, ಮಾಧ್ಯಮರು, ಗೃತ್ಸಮದ, ವಿಶ್ವಾಮಿತ್ರ, ವಾಮದೇವ, ಅತ್ರಿ, ಭರದ್ವಾಜ, ವಸಿಷ್ಠ, ಪ್ರಗಾಥರು, ಪಾವಮಾನ್ಯರು, ಕ್ಷುದ್ರಸೂಕ್ತರು, ಮಹಾಸೂಕ್ತರು ತೃಪ್ತರಾಗಲಿ.',
          },
        },
      ],
    },
    {
      title: 'आचार्यतर्पणम्',
      titleEn: 'Tarpana of the teachers (Rigveda)',
      note: 'Acharya-tarpana is done with the sacred thread over the right shoulder (apasavya, prachinavita), from between the thumb and forefinger (the pitru-tirtha) (Mathad). Bharadvaja in the list is read in the Madhva manual and is not in the Sutra text. Whoever\'s father is dead then offers the pitru-tarpana (see "Pitru Tarpana"); those whose father is alive stop here (Mathad: "up to here one whose father is living may also do it").',
      noteKn: 'ಆಚಾರ್ಯ ತರ್ಪಣವನ್ನು ಯಜ್ಞೋಪವೀತ ಬಲಭುಜದ ಮೇಲಿರುವಂತೆ (ಅಪಸವ್ಯ, ಪ್ರಾಚೀನಾವೀತಿ), ಹೆಬ್ಬೆರಳು ಮತ್ತು ತೋರುಬೆರಳಿನ ನಡುವಿನಿಂದ (ಪಿತೃತೀರ್ಥ) ಮಾಡಬೇಕು (ಮಠದ ಅವರು). ಪಟ್ಟಿಯಲ್ಲಿನ ಭರದ್ವಾಜ ಹೆಸರು ಮಾಧ್ವ ಪುಸ್ತಕದಲ್ಲಿದೆ; ಸೂತ್ರದ ಪಾಠದಲ್ಲಿ ಇಲ್ಲ. ತಂದೆ ಇಲ್ಲದವರು ಇದರ ನಂತರ ಪಿತೃತರ್ಪಣ ಮಾಡುತ್ತಾರೆ (“ಪಿತೃ ತರ್ಪಣ” ನೋಡಿ); ತಂದೆ ಜೀವಂತವಾಗಿರುವವರು ಇಲ್ಲಿಗೇ ನಿಲ್ಲಿಸುತ್ತಾರೆ (ಮಠದ ಅವರು: “ಇಲ್ಲಿಯವರೆಗೆ ತಂದೆಯಿದ್ದರೂ ಮಾಡಬಹುದು”).',
      when: {
        veda: ['rigveda'],
      },
      verses: [
        {
          text: 'सुमन्तुजैमिनिवैशम्पायनपैलसूत्रभाष्यभारतमहाभारतधर्माचार्यास्तृप्यन्तु ।\nजानन्तिबाहविगार्ग्यगौतमशाकल्यबाभ्रव्यमाण्डव्यमाण्डूकेयास्तृप्यन्तु ।\nगार्गी वाचक्नवी तृप्यतु । वडवा प्रातीथेयी तृप्यतु । सुलभा मैत्रेयी तृप्यतु ॥',
          meaning: {
            en: 'May the teachers of dharma Sumantu, Jaimini, Vaishampayana, Paila, and the authors of the sutras, commentaries, Bharata and Mahabharata be satisfied; Jananti, Bahavi, Gargya, Gautama, Shakalya, Babhravya, Mandavya and Mandukeya; Gargi Vachaknavi, Vadava Pratitheyi and Sulabha Maitreyi.',
            kn: 'ಧರ್ಮಾಚಾರ್ಯರಾದ ಸುಮಂತು, ಜೈಮಿನಿ, ವೈಶಂಪಾಯನ, ಪೈಲ, ಸೂತ್ರ-ಭಾಷ್ಯ-ಭಾರತ-ಮಹಾಭಾರತ ಕರ್ತೃಗಳು ತೃಪ್ತರಾಗಲಿ; ಜಾನಂತಿ, ಬಾಹವಿ, ಗಾರ್ಗ್ಯ, ಗೌತಮ, ಶಾಕಲ್ಯ, ಬಾಭ್ರವ್ಯ, ಮಾಂಡವ್ಯ, ಮಾಂಡೂಕೇಯರು; ಗಾರ್ಗೀ ವಾಚಕ್ನವೀ, ವಡವಾ ಪ್ರಾತೀಥೇಯೀ, ಸುಲಭಾ ಮೈತ್ರೇಯೀ ತೃಪ್ತರಾಗಲಿ.',
          },
        },
        {
          text: 'कहोलं कौषीतकं महाकौषीतकं भारद्वाजं पैङ्ग्यं महापैङ्ग्यं सुयज्ञं शाङ्खायनमैतरेयं महैतरेयं\nशाकलं बाष्कलं सुजातवक्त्रमौदवाहिं महौदवाहिं सौजामिं शौनकमाश्वलायनं तर्पयामि ।\nये चान्ये आचार्यास्ते सर्वे तृप्यन्तु तृप्यन्तु तृप्यन्तु ॥',
          meaning: {
            en: 'I satisfy Kahola, Kaushitaka, Mahakaushitaka, Bharadvaja, Paingya, Mahapaingya, Suyajna, Sankhayana, Aitareya, Mahaitareya, Shakala, Bashkala, Sujatavaktra, Audavahi, Mahaudavahi, Saujami, Shaunaka and Ashvalayana; and whatever other teachers there are, may they all be satisfied, satisfied, satisfied.',
            kn: 'ಕಹೋಳ, ಕೌಷೀತಕ, ಮಹಾಕೌಷೀತಕ, ಭಾರದ್ವಾಜ, ಪೈಂಗ್ಯ, ಮಹಾಪೈಂಗ್ಯ, ಸುಯಜ್ಞ, ಶಾಂಖಾಯನ, ಐತರೇಯ, ಮಹೈತರೇಯ, ಶಾಕಲ, ಬಾಷ್ಕಲ, ಸುಜಾತವಕ್ತ್ರ, ಔದವಾಹಿ, ಮಹೌದವಾಹಿ, ಸೌಜಾಮಿ, ಶೌನಕ, ಆಶ್ವಲಾಯನರನ್ನು ತೃಪ್ತಿಪಡಿಸುತ್ತೇನೆ; ಇನ್ನೂ ಯಾವ ಆಚಾರ್ಯರಿದ್ದಾರೋ ಅವರೆಲ್ಲರೂ ತೃಪ್ತರಾಗಲಿ, ತೃಪ್ತರಾಗಲಿ, ತೃಪ್ತರಾಗಲಿ.',
          },
        },
      ],
    },
    {
      title: 'समर्पणम्',
      titleEn: 'Concluding prayer (Madhva)',
      note: 'Say these to close the brahma-yajna (Mathad; Belgaum manual).',
      noteKn: 'ಬ್ರಹ್ಮಯಜ್ಞವನ್ನು ಮುಗಿಸಲು ಇವನ್ನು ಹೇಳಿ (ಮಠದ ಅವರು; ಬೆಳಗಾವಿ ಪುಸ್ತಕ).',
      when: {
        tradition: ['madhva'],
      },
      verses: [
        {
          text: 'यस्य स्मृत्या च नामोक्त्या तपोयज्ञक्रियादिषु ।\nन्यूनं सम्पूर्णतां याति सद्यो वन्दे तमच्युतम् ॥\nमन्त्रहीनं क्रियाहीनं भक्तिहीनं जनार्दन ।\nयत्कृतं तु मया देव परिपूर्णं तदस्तु मे ॥',
          meaning: {
            en: 'I bow to that Achyuta, by remembering whom and speaking whose name any shortfall in austerity, sacrifice or rite becomes complete at once. Whatever I have done, O Janardana, lacking in mantra, in action and in devotion, O God, let it be complete for me.',
            kn: 'ಯಾರನ್ನು ಸ್ಮರಿಸುವುದರಿಂದ ಮತ್ತು ಯಾರ ನಾಮ ಹೇಳುವುದರಿಂದ ತಪಸ್ಸು, ಯಜ್ಞ, ಕ್ರಿಯೆಗಳಲ್ಲಿನ ಕೊರತೆ ಕೂಡಲೇ ಪೂರ್ಣವಾಗುತ್ತದೋ ಆ ಅಚ್ಯುತನಿಗೆ ವಂದಿಸುತ್ತೇನೆ. ಜನಾರ್ದನ, ಮಂತ್ರ, ಕ್ರಿಯೆ, ಭಕ್ತಿಗಳಲ್ಲಿ ಕೊರತೆಯಿದ್ದರೂ ನಾನು ಮಾಡಿದ್ದು, ದೇವ, ನನಗೆ ಪರಿಪೂರ್ಣವಾಗಲಿ.',
          },
        },
        {
          text: 'अनेन ब्रह्मयज्ञेन देवर्ष्याचार्यपितृतर्पणेन\nभगवान् श्रीमज्जनार्दनवासुदेवः प्रीयतां प्रीतो भवतु ।\nश्रीमध्वान्तर्गत श्रीकृष्णार्पणमस्तु ॥\n(द्विराचम्य) विष्णवे नमः । विष्णवे नमः । विष्णवे नमः ॥',
          meaning: {
            en: 'By this brahma-yajna and the tarpana of the gods, sages, teachers and ancestors, may the Lord Janardana Vasudeva be pleased and gracious. Let it be offered to Sri Krishna within Sri Madhva. (Do achamana twice:) Salutations to Vishnu, Vishnu, Vishnu.',
            kn: 'ಈ ಬ್ರಹ್ಮಯಜ್ಞ ಮತ್ತು ದೇವ-ಋಷಿ-ಆಚಾರ್ಯ-ಪಿತೃ ತರ್ಪಣಗಳಿಂದ ಭಗವಾನ್ ಶ್ರೀಮಜ್ಜನಾರ್ದನ ವಾಸುದೇವನು ಪ್ರೀತನಾಗಲಿ. ಶ್ರೀಮಧ್ವರ ಅಂತರ್ಗತ ಶ್ರೀಕೃಷ್ಣನಿಗೆ ಅರ್ಪಿತವಾಗಲಿ. (ಎರಡು ಬಾರಿ ಆಚಮನ ಮಾಡಿ:) ವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ, ವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ, ವಿಷ್ಣುವಿಗೆ ನಮಸ್ಕಾರ.',
          },
        },
      ],
    },
    {
      title: 'समर्पणम्',
      titleEn: 'Concluding prayer (Smarta)',
      note: 'Say these to close the brahma-yajna (Dixit, Taittiriya).',
      noteKn: 'ಬ್ರಹ್ಮಯಜ್ಞವನ್ನು ಮುಗಿಸಲು ಇವನ್ನು ಹೇಳಿ (ದೀಕ್ಷಿತರು, ತೈತ್ತಿರೀಯ).',
      when: {
        tradition: ['smarta'],
      },
      verses: [
        {
          text: 'अनेन ब्रह्मयज्ञकर्मणा श्रीपरमेश्वरः प्रीयताम् ॥\n(द्विराचम्य) ब्रह्मयज्ञकाले स्वरवर्णमन्त्रतन्त्रन्यूनातिरिक्तलोपदोषप्रायश्चित्तार्थं नामत्रयजपमहं करिष्ये ।\nॐ अच्युताय नमः । ॐ अनन्ताय नमः । ॐ गोविन्दाय नमः ।\nॐ विष्णवे नमः । विष्णवे नमः । विष्णवे नमः ॥',
          meaning: {
            en: 'By this brahma-yajna, may the Supreme Lord be pleased. (Do achamana twice.) To atone for any fault of accent, letter, mantra or procedure, any omission or excess in the brahma-yajna, I shall recite the three names. Om, salutations to Achyuta, Ananta and Govinda; salutations to Vishnu, Vishnu, Vishnu.',
            kn: 'ಈ ಬ್ರಹ್ಮಯಜ್ಞ ಕರ್ಮದಿಂದ ಶ್ರೀಪರಮೇಶ್ವರನು ಪ್ರೀತನಾಗಲಿ. (ಎರಡು ಬಾರಿ ಆಚಮನ ಮಾಡಿ.) ಬ್ರಹ್ಮಯಜ್ಞದಲ್ಲಿ ಸ್ವರ, ವರ್ಣ, ಮಂತ್ರ, ತಂತ್ರಗಳ ಕೊರತೆ, ಹೆಚ್ಚಳ, ಲೋಪದೋಷಗಳ ಪ್ರಾಯಶ್ಚಿತ್ತಕ್ಕಾಗಿ ನಾಮತ್ರಯ ಜಪವನ್ನು ಮಾಡುತ್ತೇನೆ. ಓಂ ಅಚ್ಯುತಾಯ ನಮಃ, ಅನಂತಾಯ ನಮಃ, ಗೋವಿಂದಾಯ ನಮಃ; ವಿಷ್ಣವೇ ನಮಃ, ವಿಷ್ಣವೇ ನಮಃ, ವಿಷ್ಣವೇ ನಮಃ.',
          },
        },
      ],
    },
  ],
};
