# Store listing draft (Google Play / App Store)

**App name:** Nandadeepa — ನಂದಾದೀಪ

**Tagline:** तमसो मा ज्योतिर्गमय · Mantra · Parayana · Panchanga

**Short description (80 chars):**
Mantra, stotra, parayana, songs, puja & panchanga in Kannada, Sanskrit & more

**Full description:**

Nandadeepa, the lamp kept ever burning before the deity, is a companion for daily
practice: a pocket library of more than 400 Hindu sacred texts with a panchanga,
readable like a printed book in your own script: Devanagari (Sanskrit),
Kannada, Telugu, Tamil, Malayalam, Gujarati, Bengali, Odia or English (IAST).

📖 **Pārāyaṇa granthas**
- Bhagavad Gītā (all 18 chapters)
- Sundarakāṇḍa (68 sargas)
- Devī Māhātmya with Kavaca, Argalā and Kīlaka
- Sumadhva Vijaya
- Harikathāmṛtasāra (in progress)

🙏 **Stotras and sahasranāmas**
- Viṣṇu and Lalitā Sahasranāma, with meanings
- Veṅkaṭeśa Suprabhātam, Saundarya Laharī, Āditya Hṛdayam
- Hanumān Cālīsā, Rāma Rakṣā and many more

🔥 **Vedic**
- Puruṣa, Śrī, Nārāyaṇa and Manyu Sūktas
- Śrī Rudram (Namakam and Chamakam), Mantra Puṣpam

🪔 **Daily rituals**
- Step-by-step Ṛgveda and Yajurveda Sandhyāvandane (Mādhva / Smārta;
  morning, midday and evening)
- Ṣoḍaśopacāra pūjā
- Satyanārāyaṇa pūjā with the vrata kathā

🌺 **Mādhva and Haridāsa**
- Vāyu Stuti, Dvādaśa Stotra, Rāghavendra Stotra and Kavaca
- Lakṣmī Śobhāne, Dāsara pada

**Features**
- Meanings in Kannada, English, Hindi, Telugu and Tamil, shown when you tap
- Today's pañcāṅga, saṅkalpa details and a festival / Ekādaśī calendar
  (Mādhva and Smārta)
- Pārāyaṇa plans ("Sundarakāṇḍa in 7 days") with daily reminders
- Japa mālā counter
- Bookmarks, and the app remembers where you left off
- Book fonts, large-print mode and dark mode
- Works fully offline, with no ads and no tracking

Texts are collated from published editions. Readers can report corrections
from any verse.

**Category:** Books & Reference · **Content rating:** Everyone ·
**Privacy policy:** host docs/PRIVACY.md (for example on GitHub Pages) and
give its URL.

## Checklist before the first release

1. In `app.json`, set your own `android.package` / `ios.bundleIdentifier`. It
   cannot change after the first upload.
2. Build signed release bundles with EAS: `npx eas-cli build --platform all`.
   EAS creates and keeps your upload key.
3. Add your contact email to `docs/PRIVACY.md` and host it.
4. Change `src/lib/config.ts` → `CORRECTIONS_URL` if you want corrections
   sent somewhere else (for example a Google Form).
5. Take screenshots of: the home screen, a book page with a meaning open, the
   pañcāṅga and calendar, and Sandhyāvandane.
6. Have the texts reviewed (see PROOFREADING.md).
