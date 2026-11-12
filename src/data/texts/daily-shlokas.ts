// Not yet proofread against a printed edition.
import type { Mantra } from '../types';

export const dailyShlokas: Mantra = {
  id: 'daily-shlokas',
  title: 'नित्यश्लोकाः',
  titleEn: 'Nitya Shlokas (Daily Prayers)',
  category: 'nitya',
  source: 'Traditional (various sources, noted per prayer)',
  summary:
    'Short traditional verses recited through the day: on waking, before study, before meals, when lighting the lamp and before sleep. Ideal for children and for beginning a daily practice.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      titleEn: 'On waking (Karāgre vasate Lakṣmīḥ)',
      note: 'Recite on waking, looking at the open palms of both hands before seeing anything else.',
      verses: [
        {
          text: 'कराग्रे वसते लक्ष्मीः करमध्ये सरस्वती ।\nकरमूले तु गोविन्दः प्रभाते करदर्शनम् ॥',
          meaning:
            'Lakṣmī dwells at the tips of the fingers, Sarasvatī in the middle of the palm, and Govinda at its base; so one should look at one’s hands at dawn. (Some recite “karamūle sthitā gaurī”.)',
        },
      ],
    },
    {
      titleEn: 'Touching the earth (Samudravasane devi)',
      note: 'Recite before stepping out of bed, touching the ground with the right hand and then the forehead.',
      verses: [
        {
          text: 'समुद्रवसने देवि पर्वतस्तनमण्डले ।\nविष्णुपत्नि नमस्तुभ्यं पादस्पर्शं क्षमस्व मे ॥',
          meaning:
            'O Goddess Earth, clothed by the oceans, with mountains for your bosom, consort of Viṣṇu, salutations to you; forgive me for touching you with my feet.',
        },
      ],
    },
    {
      titleEn: 'Śuklāmbaradharaṃ viṣṇum',
      note: 'Recited at the start of any prayer or undertaking for the removal of obstacles.',
      verses: [
        {
          text: 'शुक्लाम्बरधरं विष्णुं शशिवर्णं चतुर्भुजम् ।\nप्रसन्नवदनं ध्यायेत् सर्वविघ्नोपशान्तये ॥',
          meaning:
            'For the removal of all obstacles, one should meditate on the all-pervading Lord, clad in white, bright as the moon, four-armed, with a gracious face.',
        },
      ],
    },
    {
      titleEn: 'Vakratuṇḍa mahākāya',
      note: 'A prayer to Gaṇeśa before beginning any task.',
      verses: [
        {
          text: 'वक्रतुण्ड महाकाय सूर्यकोटिसमप्रभ ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥',
          meaning:
            'O Lord with the curved trunk and mighty body, radiant as a million suns, O God, always make all my undertakings free of obstacles.',
        },
      ],
    },
    {
      titleEn: 'Before study (Sarasvati namastubhyam)',
      note: 'Recite before beginning study or learning.',
      verses: [
        {
          text: 'सरस्वति नमस्तुभ्यं वरदे कामरूपिणि ।\nविद्यारम्भं करिष्यामि सिद्धिर्भवतु मे सदा ॥',
          meaning:
            'O Sarasvatī, giver of boons, who takes any form at will, salutations to you. I am beginning my studies; may I always attain success.',
        },
      ],
    },
    {
      titleEn: 'To the Guru (Gururbrahmā gururviṣṇuḥ)',
      note: 'A salutation to the teacher, recited before study, at the start of a class, or on Guru Pūrṇimā. Traditionally found in the Guru Gītā.',
      verses: [
        {
          text: 'गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः ।\nगुरुः साक्षात् परं ब्रह्म तस्मै श्रीगुरवे नमः ॥',
          meaning:
            'The Guru is Brahmā, the Guru is Viṣṇu, the Guru is the god Maheśvara; the Guru is verily the supreme Brahman. Salutations to that revered Guru.',
        },
      ],
    },
    {
      titleEn: 'Before meals (Brahmārpaṇam)',
      note: 'Recite before eating, offering the food to the Lord. Bhagavad Gītā 4.24, often followed by Gītā 15.14.',
      verses: [
        {
          text: 'ब्रह्मार्पणं ब्रह्म हविर्ब्रह्माग्नौ ब्रह्मणा हुतम् ।\nब्रह्मैव तेन गन्तव्यं ब्रह्मकर्मसमाधिना ॥',
          meaning:
            'The act of offering is Brahman, the offering is Brahman, offered by Brahman into the fire of Brahman. Brahman alone is reached by one absorbed in Brahman in all action.',
        },
        {
          text: 'अहं वैश्वानरो भूत्वा प्राणिनां देहमाश्रितः ।\nप्राणापानसमायुक्तः पचाम्यन्नं चतुर्विधम् ॥',
          meaning:
            'Becoming the digestive fire (Vaiśvānara) dwelling in the bodies of living beings, and joined with the in- and out-breaths, I digest the four kinds of food.',
        },
      ],
    },
    {
      titleEn: 'Before meals (Annapūrṇe sadāpūrṇe)',
      note: 'A prayer to Goddess Annapūrṇā, giver of food, recited before meals. From the Annapūrṇā Stotram attributed to Ādi Śaṅkarācārya.',
      verses: [
        {
          text: 'अन्नपूर्णे सदापूर्णे शङ्करप्राणवल्लभे ।\nज्ञानवैराग्यसिद्ध्यर्थं भिक्षां देहि च पार्वति ॥',
          meaning:
            'O Annapūrṇā, ever full, beloved of Śaṅkara, O Pārvatī, grant me alms so that I may attain knowledge and dispassion.',
        },
        {
          text: 'माता च पार्वती देवी पिता देवो महेश्वरः ।\nबान्धवाः शिवभक्ताश्च स्वदेशो भुवनत्रयम् ॥',
          meaning:
            'Goddess Pārvatī is my mother, Lord Maheśvara my father, the devotees of Śiva my kin, and the three worlds my homeland.',
        },
      ],
    },
    {
      titleEn: 'Lighting the lamp (Śubhaṃ karoti)',
      note: 'Recite at dusk while lighting the lamp before the deity.',
      verses: [
        {
          text: 'शुभं करोति कल्याणमारोग्यं धनसम्पदा ।\nशत्रुबुद्धिविनाशाय दीपज्योतिर्नमोऽस्तु ते ॥',
          meaning:
            'Salutations to the light of the lamp, which brings auspiciousness, well-being, health and wealth, and destroys hostile thoughts.',
        },
        {
          text: 'दीपज्योतिः परब्रह्म दीपज्योतिर्जनार्दनः ।\nदीपो हरतु मे पापं दीपज्योतिर्नमोऽस्तु ते ॥',
          meaning:
            'The light of the lamp is the supreme Brahman, the light of the lamp is Janārdana; may the lamp remove my sins. Salutations to the light of the lamp.',
        },
      ],
    },
    {
      titleEn: 'Offering all actions (Kāyena vācā)',
      note: 'Recited at the end of prayers or of the day, offering all actions to Nārāyaṇa. Based on Bhāgavata Purāṇa 11.2.36.',
      verses: [
        {
          text: 'कायेन वाचा मनसेन्द्रियैर्वा\nबुद्ध्यात्मना वा प्रकृतेः स्वभावात् ।\nकरोमि यद्यत्सकलं परस्मै\nनारायणायेति समर्पयामि ॥',
          meaning:
            'Whatever I do with body, speech, mind or senses, with intellect or heart, or by the impulse of my nature, all of it I offer to the Supreme, Nārāyaṇa.',
        },
      ],
    },
    {
      titleEn: 'Bedtime: asking forgiveness (Karacaraṇakṛtaṃ vā)',
      note: 'Recite before sleep, asking forgiveness for faults committed during the day. From the Śiva Aparādha Kṣamāpaṇa Stotram attributed to Ādi Śaṅkarācārya.',
      verses: [
        {
          text: 'करचरणकृतं वाक्कायजं कर्मजं वा\nश्रवणनयनजं वा मानसं वापराधम् ।\nविहितमविहितं वा सर्वमेतत्क्षमस्व\nजय जय करुणाब्धे श्रीमहादेव शम्भो ॥',
          meaning:
            'Whatever wrong I have done with hands or feet, by speech or body, by deed, through ears or eyes, or in the mind, whether enjoined or forbidden, forgive it all. Victory to you, ocean of compassion, Śrī Mahādeva, Śambhu.',
        },
      ],
    },
    {
      titleEn: 'Before sleep (Rāmaṃ skandaṃ hanūmantam)',
      note: 'Recite on lying down to sleep, for protection from bad dreams.',
      verses: [
        {
          text: 'रामं स्कन्दं हनूमन्तं वैनतेयं वृकोदरम् ।\nशयने यः स्मरेन्नित्यं दुःस्वप्नस्तस्य नश्यति ॥',
          meaning:
            'Whoever remembers Rāma, Skanda, Hanumān, Garuḍa (son of Vinatā) and Bhīma every night on going to bed is freed from bad dreams.',
        },
      ],
    },
    {
      titleEn: 'Tvameva mātā ca pitā tvameva',
      note: 'A prayer of complete surrender, often recited at the close of daily worship.',
      verses: [
        {
          text: 'त्वमेव माता च पिता त्वमेव\nत्वमेव बन्धुश्च सखा त्वमेव ।\nत्वमेव विद्या द्रविणं त्वमेव\nत्वमेव सर्वं मम देवदेव ॥',
          meaning:
            'You alone are my mother and my father; you alone are my kin and my friend; you alone are my knowledge and my wealth; you alone are my everything, O God of gods.',
        },
      ],
    },
  ],
};
