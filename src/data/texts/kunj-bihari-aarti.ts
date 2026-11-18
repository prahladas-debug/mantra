/**
 * Āratī Kuñjabihārī kī, Hindi (Braj), in Devanagari. Traditional; the author is not named in the copies.
 *
 * Collated Nov 2026 against three typed copies: bhaktibharat.com (B), shubhpanchang.com (S) and a
 * third typed copy kept as AU. All three agree in every line apart from spelling ("बजावै/बजावे", "बिलसै/बिलसे", "तरसैं/तरसे",
 * "हरै/हरे", "श्रीबनवारी"). The first two lines are the refrain, sung again after each stanza. In the printed copies each stanza
 * runs on: three long lines, then a short run of three or four phrases ("भ्रमर सी अलक, कस्तूरी तिलक, चंद्र सी झलक"), and a closing
 * line that rhymes with the stanza's end; each stanza is given in that form. Nukta letters are written without the dot.
 * Meanings are original.
 */
import type { Mantra } from '../types';

export const kunjBihariAarti: Mantra = {
  id: 'kunj-bihari-aarti',
  title: 'आरती कुंजबिहारी की',
  titleEn: 'Aarti Kunj Bihari Ki',
  category: 'aarti',
  order: 30,
  deity: 'Śrī Kṛṣṇa (Kuñjabihārī, Giridhara)',
  source: 'Traditional Hindi (Braj) aarti',
  summary: 'The Hindi aarti to Krishna, the one who plays in the groves, sung at Janmashtami and in Krishna temples. Four stanzas show his dark form with a Vaijayanti garland, flute and earrings beside Radha; his golden peacock crown while the gods long for his sight; the Ganga that sprang from his feet and rests in Shiva\'s hair; and the moonlit banks of Vrindavan where the cowherds sing, and he hears the cry of the afflicted.',
  summaryKn: 'ಜನ್ಮಾಷ್ಟಮಿ ಮತ್ತು ಕೃಷ್ಣ ದೇವಾಲಯಗಳಲ್ಲಿ ಹಾಡುವ, ಕುಂಜಗಳಲ್ಲಿ ವಿಹರಿಸುವ ಕೃಷ್ಣನ ಹಿಂದಿ ಆರತಿ. ನಾಲ್ಕು ಪದ್ಯಗಳಲ್ಲಿ ರಾಧೆಯ ಬಳಿ ವೈಜಯಂತಿ ಮಾಲೆ, ಕೊಳಲು, ಕುಂಡಲಗಳ ಶ್ಯಾಮರೂಪ; ದೇವತೆಗಳು ದರ್ಶನಕ್ಕೆ ಹಂಬಲಿಸುವ ಚಿನ್ನದ ನವಿಲುಗರಿ ಕಿರೀಟ; ಅವನ ಪಾದದಿಂದ ಹುಟ್ಟಿ ಶಿವನ ಜಟೆಯಲ್ಲಿ ನೆಲೆಸಿದ ಗಂಗೆ; ವೃಂದಾವನದ ಚಂದ್ರಿಕೆಯ ದಂಡೆಗಳು, ಅಲ್ಲಿ ಗೋಪಾಲರು ಹಾಡುತ್ತಾರೆ ಮತ್ತು ಅವನು ದುಃಖಿತರ ಕೂಗು ಕೇಳುತ್ತಾನೆ.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'The refrain, sung again after each stanza.',
      noteKn: 'ಪ್ರತಿ ಪದ್ಯದ ನಂತರ ಮತ್ತೆ ಹಾಡುವ ಪಲ್ಲವಿ.',
      verses: [
        {
          text: 'आरती कुंजबिहारी की,\nश्री गिरिधर कृष्ण मुरारी की ॥',
          meaning: { en: 'The aarti of Kunjbihari, of Sri Krishna Murari, who held up the mountain.', kn: 'ಕುಂಜಬಿಹಾರಿಯ ಆರತಿ; ಗಿರಿಯನ್ನು ಎತ್ತಿದ ಶ್ರೀ ಕೃಷ್ಣ ಮುರಾರಿಯ ಆರತಿ.' },
        },
      ],
    },
    {
      title: 'पद',
      titleEn: 'Stanzas',
      note: 'After each stanza the refrain is sung.',
      noteKn: 'ಪ್ರತಿ ಪದ್ಯದ ನಂತರ ಪಲ್ಲವಿ ಹಾಡುತ್ತಾರೆ.',
      verses: [
        {
          n: 1,
          text: 'गले में बैजंती माला, बजावै मुरली मधुर बाला ।\nश्रवण में कुण्डल झलकाला, नंद के आनंद नंदलाला ।\nगगन सम अंग कांति काली, राधिका चमक रही आली ।\nलतन में ठाढ़े बनमाली,\nभ्रमर सी अलक, कस्तूरी तिलक, चंद्र सी झलक,\nललित छवि श्यामा प्यारी की,\nश्री गिरिधर कृष्ण मुरारी की ॥',
          meaning: { en: 'A Vaijayanti garland at his throat, the sweet boy plays the flute; earrings glitter at his ears, he is Nanda\'s joy, Nandalala. The hue of his limbs is dark like the sky, and Radha shines beside him, friend; the garland-wearer stands among the creepers, with curls like bees, a musk mark on his brow and a glow like the moon: the lovely beauty of the dear one with Shyama, Sri Krishna Murari.', kn: 'ಕೊರಳಲ್ಲಿ ವೈಜಯಂತಿ ಮಾಲೆ, ಮಧುರ ಬಾಲ ಕೊಳಲು ನುಡಿಸುತ್ತಾನೆ; ಕಿವಿಯಲ್ಲಿ ಕುಂಡಲಗಳು ಹೊಳೆಯುತ್ತವೆ, ನಂದನ ಆನಂದ ನಂದಲಾಲ. ಆಕಾಶದಂತೆ ಕಪ್ಪಾದ ದೇಹಕಾಂತಿ, ರಾಧಿಕೆ ಅಲ್ಲಿ ಹೊಳೆಯುತ್ತಿದ್ದಾಳೆ, ಗೆಳತಿ; ಬಳ್ಳಿಗಳ ನಡುವೆ ವನಮಾಲಿ ನಿಂತಿದ್ದಾನೆ, ದುಂಬಿಯಂತೆ ಗುಂಗುರು ಕೂದಲು, ಹಣೆಯಲ್ಲಿ ಕಸ್ತೂರಿ ತಿಲಕ, ಚಂದ್ರನಂತೆ ಕಾಂತಿ: ಪ್ರಿಯ ಶ್ಯಾಮನ ಸುಂದರ ರೂಪ, ಶ್ರೀ ಗಿರಿಧರ ಕೃಷ್ಣ ಮುರಾರಿ.' },
        },
        {
          n: 2,
          text: 'कनकमय मोर मुकुट बिलसै, देवता दरसन को तरसैं ।\nगगन सों सुमन रासि बरसै ।\nबजे मुरचंग, मधुर मिरदंग, ग्वालिन संग,\nअतुल रति गोप कुमारी की,\nश्री गिरिधर कृष्ण मुरारी की ॥',
          meaning: { en: 'A golden peacock crown shines on him, and the gods long for a sight of him; a shower of flowers falls from the sky. The jaw-harp sounds and the sweet drum, with the cowherd women around him: the matchless love of the cowherd girls, for Sri Krishna Murari.', kn: 'ಚಿನ್ನದ ನವಿಲುಗರಿ ಕಿರೀಟ ಹೊಳೆಯುತ್ತದೆ, ದೇವತೆಗಳು ದರ್ಶನಕ್ಕೆ ಹಂಬಲಿಸುತ್ತಾರೆ; ಆಕಾಶದಿಂದ ಹೂವಿನ ರಾಶಿ ಸುರಿಯುತ್ತದೆ. ಮುರಚಂಗ ಮೊಳಗುತ್ತದೆ, ಮಧುರ ಮೃದಂಗ, ಗೋಪಿಯರ ಜೊತೆ: ಗೋಪಕುಮಾರಿಯರ ಅಸಮಾನ ಪ್ರೇಮ, ಶ್ರೀ ಗಿರಿಧರ ಕೃಷ್ಣ ಮುರಾರಿಗೆ.' },
        },
        {
          n: 3,
          text: 'जहां ते प्रकट भई गंगा, सकल मन हारिणि श्री गंगा ।\nस्मरन ते होत मोह भंगा,\nबसी शिव सीस, जटा के बीच, हरै अघ कीच,\nचरन छवि श्रीबनवारी की,\nश्री गिरिधर कृष्ण मुरारी की ॥',
          meaning: { en: 'From where the Ganga appeared, the Ganga who carries away all the heart\'s troubles, by remembering whom delusion is broken, she lives on Shiva\'s head, in the midst of his matted hair, washing away the mire of sin; such is the beauty of the feet of Sri Banwari, Sri Krishna Murari.', kn: 'ಗಂಗೆ ಎಲ್ಲಿಂದ ಪ್ರಕಟವಾದಳೋ, ಮನದ ಎಲ್ಲ ಭಾರ ಹರಿಸುವ ಶ್ರೀ ಗಂಗೆ, ಸ್ಮರಣೆಯಿಂದ ಮೋಹ ಮುರಿಯುತ್ತದೆ; ಅವಳು ಶಿವನ ತಲೆಯಲ್ಲಿ, ಜಟೆಯ ನಡುವೆ ನೆಲೆಸಿ ಪಾಪದ ಕೆಸರನ್ನು ತೊಳೆಯುತ್ತಾಳೆ: ಶ್ರೀ ವನಮಾಲಿಯ ಚರಣದ ಕಾಂತಿ, ಶ್ರೀ ಗಿರಿಧರ ಕೃಷ್ಣ ಮುರಾರಿಯದು.' },
        },
        {
          n: 4,
          text: 'चमकती उज्ज्वल तट रेनू, बज रही वृंदावन बेनू ।\nचहुं दिसि गोपि ग्वाल धेनू,\nहंसत मृदु मंद, चांदनी चंद, कटत भव फंद,\nटेर सुन दीन दुखारी की,\nश्री गिरिधर कृष्ण मुरारी की ॥',
          meaning: { en: 'The bright dust of the riverbank glitters and the flute sounds in Vrindavan; on all sides are gopis, cowherds and cows. He smiles softly and gently, the moon casts its light, the snares of worldly life are cut: hear the cry of the poor and afflicted, Sri Krishna Murari.', kn: 'ನದಿದಂಡೆಯ ಉಜ್ವಲ ಧೂಳು ಹೊಳೆಯುತ್ತದೆ, ವೃಂದಾವನದಲ್ಲಿ ಕೊಳಲು ಮೊಳಗುತ್ತದೆ; ನಾಲ್ಕೂ ದಿಕ್ಕುಗಳಲ್ಲಿ ಗೋಪಿಯರು, ಗೊಲ್ಲರು, ಹಸುಗಳು. ಮೃದುವಾಗಿ, ಮಂದವಾಗಿ ನಗುತ್ತಾನೆ, ಚಂದ್ರನ ಬೆಳದಿಂಗಳು, ಸಂಸಾರಪಾಶ ಕತ್ತರಿಸುತ್ತದೆ: ದೀನ ದುಃಖಿಯ ಕೂಗನ್ನು ಕೇಳು, ಶ್ರೀ ಗಿರಿಧರ ಕೃಷ್ಣ ಮುರಾರಿ.' },
        },
      ],
    },
  ],
};
