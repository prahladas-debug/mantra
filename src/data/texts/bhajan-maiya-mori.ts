/**
 * Maiyā Morī Maiṁ Nahiṁ Mākhana Khāyo, the pada of Sūradāsa on the child Kṛṣṇa answering Yaśodā, from the Sūrasāgara
 * (Braj Bhasha), in Devanagari.
 *
 * Collated Nov 2026 against three typed copies: bhaktibharat.com "Maiya Mori Mai Nahi Makhan Khayo" (B, base), the NCERT
 * Class 6 Hindi reader "Malhar", chapter 9 "मैया मैं नहिं माखन खायो" (N, as printed in the Chapter 9 PDF mirrored on
 * competishun.com) and hindwi.org "मैया मैं नहिं माखन खायो" (H). The four stanzas and their order agree in all three.
 * Readings against the base: the opening "मैया मोरी मैं नहिं माखन खायो" (B, the form sung and named in the title) against
 * "मैया मैं नहिं माखन खायो" (N, H); where N and H agree against B their reading is taken: "मधुबन मोहि पठायो",
 * "चार पहर बंसीवट भटक्यो", "बहियन", "छीको केहि बिधि पायो" (B "छींको किहि"), "तू माता मन की अति भोरी" (B "तू जननी"),
 * "इनके कहे पतियायो" (B "पतिआयो"), "जिय तेरे कछु भेद उपजि हैं" (B "उपजि है"), "ये ले अपनी लकुटि कमरिया" (B "यह लै"),
 * "बिहँसि". The opening line is also the refrain of the sung pada and is written once. Kavitakosh has no
 * entry for this pada under this opening and was not used. Nukta letters are written without the dot. Meanings are original.
 */
import type { Mantra } from '../types';

export const bhajanMaiyaMori: Mantra = {
  id: 'bhajan-maiya-mori',
  title: 'मैया मोरी मैं नहिं माखन खायो',
  titleEn: 'Maiya Mori Main Nahin Makhan Khayo (Surdas)',
  category: 'aarti',
  order: 43,
  deity: 'Śrī Kṛṣṇa',
  source: 'Sūradāsa, Sūrasāgara (Braj Bhasha)',
  summary: 'A pada of Surdas in which the child Krishna, accused of stealing butter, pleads his innocence to Yashoda. He was sent out with the cows at dawn, he is a small boy who cannot reach the hanging pot, and the cowherd boys smeared his mouth to get him into trouble. Yashoda laughs and takes him to her heart.',
  difficulty: 'easy',
  completeness: 'complete',
  sections: [
    {
      title: 'पल्लवी',
      titleEn: 'Pallavi',
      note: 'The first line is the refrain.',
      verses: [
        {
          text: 'मैया मोरी मैं नहिं माखन खायो ।',
          meaning: { en: 'Mother, I did not eat the butter.' },
        },
      ],
    },
    {
      title: 'पद',
      titleEn: 'Stanzas',
      verses: [
        {
          n: 1,
          text: 'भोर भयो गैयन के पाछे, मधुबन मोहि पठायो ।\nचार पहर बंसीवट भटक्यो, साँझ परे घर आयो ॥',
          meaning: { en: 'At daybreak you sent me to Madhuvan behind the cows. I wandered about the banyan tree of the flute for four watches of the day and came home only when evening fell.' },
        },
        {
          n: 2,
          text: 'मैं बालक बहियन को छोटो, छीको केहि बिधि पायो ।\nग्वाल बाल सब बैर परे हैं, बरबस मुख लपटायो ॥',
          meaning: { en: 'I am a child with short arms; how could I have reached the hanging pot? All the cowherd boys have turned against me and forcibly smeared my mouth.' },
        },
        {
          n: 3,
          text: 'तू माता मन की अति भोरी, इनके कहे पतियायो ।\nजिय तेरे कछु भेद उपजि हैं, जानि परायो जायो ॥',
          meaning: { en: 'Mother, you are very simple at heart and have believed what they say. A doubt has surely arisen in your mind, that I am another\'s child.' },
        },
        {
          n: 4,
          text: 'ये ले अपनी लकुटि कमरिया, बहुतहिं नाच नचायो ।\nसूरदास तब बिहँसि जसोदा, लै उर कंठ लगायो ॥',
          meaning: { en: 'Here, take back your stick and blanket; you have made me dance enough. Then, says Surdas, Yashoda laughed and clasped him to her breast and neck.' },
        },
      ],
    },
  ],
};
