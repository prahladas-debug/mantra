import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router, type Href } from 'expo-router';
import { Image, ImageBackground, Pressable, StyleSheet, Text, View, type ImageSourcePropType } from 'react-native';
import { categoryById, categoryCounts, getMantraInfo, type CategoryId } from '../data';
import { bookWork, isBookWork } from '../data/books';
import type { DeityGroup } from '../lib/deities';
import { headingFont, scriptFont } from '../lib/fonts';
import { T, useI18n } from '../lib/i18n';
import { categoryTitle } from '../lib/labels';
import { useSettings } from '../lib/settings';
import { LinearGradient } from 'expo-linear-gradient';
import { ART, DEITY_ART as DEITY_PAINTING, type ArtKey } from '../lib/art';
import { useShowEnglish } from './useGloss';
import { translit, type ScriptId, isRoman } from '../lib/transliterate';

type Icon = keyof typeof MaterialCommunityIcons.glyphMap;

/** The long works people read as parayana, shown as book covers. */
export interface GreatWork {
  /** A whole section of the library, or one long text. */
  category?: CategoryId;
  textId?: string;
  titleEn: string;
  /** Under the name: its size, then what it is (small covers show only the size). */
  size: string;
  about?: string;
  /** The title broken into short lines (Devanagari), for scripts whose own name is one long word. */
  lines: string[];
  /** Everyday spellings that should be kept as they are. */
  own?: Partial<Record<ScriptId, string[]>>;
  /** Cover cloth colour (dark) and its lighter edge; text is always cream and gold. */
  cloth: string;
  edge: string;
  /** The English title broken for a narrow card, where one word is too long for it. */
  cardEn?: string;
  /** Shown later for readers of the other tradition. */
  tradition?: 'madhva' | 'smarta';
  /** A painting for the card (src/lib/art.ts); works without one keep their cloth cover. */
  art?: ArtKey;
}

export const GREAT_WORKS: GreatWork[] = [
  { category: 'gita', titleEn: 'Bhagavad Gita', size: T('18 chapters'), about: T('700 verses'), lines: ['भगवद्गीता'], own: { kannada: ['ಭಗವದ್ಗೀತೆ'], telugu: ['భగవద్గీత'] }, cloth: '#7E2A12', edge: '#A8431F', art: 'gita' },
  { textId: 'vishnu-sahasranama', titleEn: 'Vishnu Sahasranama', size: T('1000 names'), lines: ['विष्णु', 'सहस्रनाम'], cloth: '#1E3A64', edge: '#2F558C', art: 'vishnu' },
  { category: 'sundarakanda', titleEn: 'Sundarakanda', size: T('68 sargas'), about: 'Ramayana', lines: ['सुन्दर', 'काण्ड'], cloth: '#2C5638', edge: '#3F7650', art: 'sundarakanda' },
  { category: 'ramayana', titleEn: 'Valmiki Ramayana', size: T('7 kandas'), about: T('24,000 verses'), lines: ['वाल्मीकि', 'रामायण'], cloth: '#3F4A17', edge: '#5C6B22', art: 'ramayana' },
  { category: 'mahabharata', titleEn: 'Mahabharata', size: T('18 parvas'), about: 'Vyasa', lines: ['महाभारतम्'], own: { kannada: ['ಮಹಾಭಾರತ'], telugu: ['మహాభారతం'], tamil: ['மகாபாரதம்'], malayalam: ['മഹാഭാരതം'], gujarati: ['મહાભારત'], bengali: ['মহাভারত'], oriya: ['ମହାଭାରତ'] }, cloth: '#4E1E18', edge: '#7A3328', art: 'mahabharata' },
  { category: 'harikathamrutasara', titleEn: 'Harikathamrutasara', cardEn: 'Harikathamruta Sara', size: T('32 sandhis'), about: 'Jagannatha Dasa', lines: ['हरिकथामृत', 'सार'], cloth: '#1D5458', edge: '#2E7479', tradition: 'madhva', art: 'harikathamrutasara' },
  { category: 'sumadhvavijaya', titleEn: 'Sumadhva Vijaya', size: T('16 sargas'), about: T('life of Madhva'), lines: ['सुमध्व', 'विजय'], cloth: '#5B3A1C', edge: '#7E542C', tradition: 'madhva', art: 'sumadhvavijaya' },
  { textId: 'vayu-stuti', titleEn: 'Hari Vayu Stuti', size: T('41 verses'), about: 'Trivikrama Pandita', lines: ['हरिवायु', 'स्तुति'], cloth: '#8A4B12', edge: '#B0691F', tradition: 'madhva', art: 'vayustuti' },
  { category: 'devimahatmya', titleEn: 'Devi Mahatmyam', size: T('13 chapters'), about: 'Durga Saptashati', lines: ['देवी', 'माहात्म्य'], cloth: '#831B3C', edge: '#A93256', tradition: 'smarta', art: 'devimahatmya' },
  { textId: 'lalitha-sahasranama', titleEn: 'Lalita Sahasranama', size: T('1000 names'), lines: ['ललिता', 'सहस्रनाम'], cloth: '#6A2260', edge: '#8C3A80', tradition: 'smarta', art: 'lalita' },
  { textId: 'saundarya-lahari', titleEn: 'Saundarya Lahari', size: T('100 verses'), about: 'Shankaracharya', lines: ['सौन्दर्य', 'लहरी'], cloth: '#3B2F6B', edge: '#56489A', tradition: 'smarta', art: 'saundaryalahari' },
];

/** Works of the reader's own tradition first; nothing is hidden. */
export function greatWorks(tradition: string | undefined): GreatWork[] {
  const own = tradition === 'smarta' ? 'smarta' : 'madhva';
  return [...GREAT_WORKS].sort((a, b) => Number(!!a.tradition && a.tradition !== own) - Number(!!b.tradition && b.tradition !== own));
}

const CREAM = '#FFF4DC';
const GOLD = '#E9C77B';

/**
 * The cover title as short lines: the script's own everyday name when it is written as separate
 * words (Tamil "பகவத் கீதை"), otherwise the Sanskrit name broken at its natural joint, so a long
 * compound never runs off the cover.
 */
export function coverLines(work: GreatWork, script: ScriptId): string[] {
  if (work.own?.[script]) return work.own[script]!;
  if (work.category) {
    const words = categoryTitle(categoryById[work.category], script).split(' ');
    if (words.length > 1 && words.length <= 3) return words;
  }
  const lines = work.lines.map((l) => translit(l, script));
  return isRoman(script) ? lines.map((l) => l.charAt(0).toUpperCase() + l.slice(1)) : lines;
}

/** Cover art (assets/design/covers/build.js draws it): cloth, frame and an emblem for the work. */
const COVER_ART: Record<string, ImageSourcePropType> = {
  gita: require('../../assets/covers/gita.jpg'),
  'vishnu-sahasranama': require('../../assets/covers/vishnu-sahasranama.jpg'),
  sundarakanda: require('../../assets/covers/sundarakanda.jpg'),
  ramayana: require('../../assets/covers/ramayana.jpg'),
  mahabharata: require('../../assets/covers/mahabharata.jpg'),
  harikathamrutasara: require('../../assets/covers/harikathamrutasara.jpg'),
  sumadhvavijaya: require('../../assets/covers/sumadhvavijaya.jpg'),
  'vayu-stuti': require('../../assets/covers/vayu-stuti.jpg'),
  devimahatmya: require('../../assets/covers/devimahatmya.jpg'),
  'lalitha-sahasranama': require('../../assets/covers/lalitha-sahasranama.jpg'),
  'saundarya-lahari': require('../../assets/covers/saundarya-lahari.jpg'),
};

/**
 * A great work as a painted card (the Gita apps' chapter cards): the painting, darkened towards
 * the foot, with the title in the reader's script. Works without a painting keep their cloth cover.
 */
export function WorkCard({ work, width = 140 }: { work: GreatWork; width?: number }) {
  const { settings, theme } = useSettings();
  const { tr } = useI18n();
  const showEn = useShowEnglish();
  if (!work.art) return <BookCover work={work} width={width} />;
  if (work.textId && !getMantraInfo(work.textId)) return null;
  if (work.category && isBookWork(work.category) && !bookWork(work.category)) return null;
  const font = scriptFont(settings.script, settings.bookFonts);
  const height = Math.round(width * 1.4);
  const size = (width < 130 ? 15 : 17) * (settings.script === 'malayalam' ? 0.85 : 1);
  const title = isRoman(settings.script) ? [work.cardEn ?? work.titleEn] : coverLines(work, settings.script);
  const roman = isRoman(settings.script);
  // A long single word (Sundarakanda) must fit the card's width without breaking.
  const longest = Math.max(...title.flatMap((l) => l.split(' ')).map((w) => w.length));
  const fit = Math.min(size, (width - 20) / (longest * (roman ? 0.64 : 0.8)));
  return (
    <Pressable
      onPress={() => router.push((work.category ? `/category/${work.category}` : `/mantra/${work.textId}`) as Href)}
      accessibilityRole="link"
      accessibilityLabel={[showEn || isRoman(settings.script) ? work.titleEn : title.join(' '), tr(work.size)].join(', ')}
      style={({ pressed }) => [c.art, { width, height, opacity: pressed ? 0.9 : 1, transform: [{ scale: pressed ? 0.97 : 1 }] }]}
    >
      <Image source={ART[work.art].card} style={{ position: 'absolute', width, height, opacity: theme.artOpacity }} resizeMode="cover" />
      <LinearGradient colors={['transparent', 'rgba(14,9,5,0.55)', 'rgba(14,9,5,0.94)']} locations={[0.35, 0.62, 1]} style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }} />
      <View style={{ position: 'absolute', left: 10, right: 10, bottom: 10 }}>
        {title.map((line) => (
          <Text key={line} style={{ color: CREAM, fontSize: fit, lineHeight: fit * 1.35, fontFamily: font, fontWeight: font ? undefined : '700' }} numberOfLines={roman ? 2 : 1} adjustsFontSizeToFit={!roman} minimumFontScale={0.7}>
            {line}
          </Text>
        ))}
        <Text style={{ color: GOLD, fontSize: 12, marginTop: 3 }} numberOfLines={1}>
          {tr(work.size)}
        </Text>
      </View>
    </Pressable>
  );
}

/** A cloth-bound book cover: the work's emblem above, its title in the reader's script below. */
export function BookCover({ work, width = 156, still }: { work: GreatWork; width?: number; /** Shown on the work's own page: not a link. */ still?: boolean }) {
  const { settings, theme } = useSettings();
  const { tr } = useI18n();
  const showEn = useShowEnglish();
  if (work.textId && !getMantraInfo(work.textId)) return null;
  // A long work shows once its book.json is in (scripts/build-books.ts), even before its sargas are.
  if (work.category && isBookWork(work.category) && !bookWork(work.category)) return null;
  const font = scriptFont(settings.script, settings.bookFonts);
  const small = width < 140;
  const height = Math.round(width * 1.4);
  // Malayalam letters are wide; phones also shrink a line that is still too long, the web does not.
  const size = (width < 115 ? 14.5 : small ? 16 : 19) * (settings.script === 'malayalam' ? 0.82 : 1);
  return (
    <Pressable
      disabled={still}
      onPress={() => router.push((work.category ? `/category/${work.category}` : `/mantra/${work.textId}`) as Href)}
      accessibilityRole={still ? 'image' : 'link'}
      accessibilityLabel={[showEn || isRoman(settings.script) ? work.titleEn : coverLines(work, settings.script).join(' '), tr(work.size), work.about && tr(work.about)].filter(Boolean).join(', ')}
      style={({ pressed }) => [c.cover, { width, height, backgroundColor: work.cloth, opacity: pressed ? 0.85 : 1 }]}
    >
      <ImageBackground source={COVER_ART[work.category ?? work.textId!]} style={{ width, height }} imageStyle={{ opacity: theme.artOpacity }} resizeMode="cover">
        {/* The art leaves the lower half of the frame free for the words. */}
        <View style={c.words}>
          <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center' }}>
            {coverLines(work, settings.script).map((line) => (
              <Text
                key={line}
                style={{ color: CREAM, fontSize: size, lineHeight: size * 1.5, textAlign: 'center', fontFamily: font, fontWeight: font ? undefined : '700' }}
                numberOfLines={1}
                adjustsFontSizeToFit
                minimumFontScale={0.6}
              >
                {line}
              </Text>
            ))}
          </View>
          <View style={[c.rule, { backgroundColor: GOLD }]} />
          {!small && showEn && (
            <Text style={{ color: CREAM, fontSize: 13, fontWeight: '600', textAlign: 'center' }} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.8}>
              {work.titleEn}
            </Text>
          )}
          <Text style={{ color: GOLD, fontSize: small ? 10.5 : 11, textAlign: 'center' }} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.8}>
            {tr(work.size)}
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
}

const BANNER_ART: Partial<Record<CategoryId, ImageSourcePropType>> = {
  gita: require('../../assets/covers/gita-banner.jpg'),
  sundarakanda: require('../../assets/covers/sundarakanda-banner.jpg'),
  ramayana: require('../../assets/covers/ramayana-banner.jpg'),
  mahabharata: require('../../assets/covers/mahabharata-banner.jpg'),
  harikathamrutasara: require('../../assets/covers/harikathamrutasara-banner.jpg'),
  sumadhvavijaya: require('../../assets/covers/sumadhvavijaya-banner.jpg'),
  devimahatmya: require('../../assets/covers/devimahatmya-banner.jpg'),
};

/**
 * The top of a book's own page: a wide banner in the book's cloth with its emblem on the right,
 * and on the left the title, its size, where you are in it, and Continue / Begin.
 */
export function BookBanner({ category, firstId, lastId, lastLabel }: { category: CategoryId; firstId: string; lastId?: string; lastLabel?: string }) {
  const { settings, theme } = useSettings();
  const { tr } = useI18n();
  const showEn = useShowEnglish();
  const work = GREAT_WORKS.find((w) => w.category === category);
  const art = BANNER_ART[category];
  if (!work || !art) return null;
  const font = scriptFont(settings.script, settings.bookFonts);
  const size = 26 * (settings.script === 'malayalam' ? 0.82 : 1);
  const go = (id: string) => router.push(`/mantra/${id}` as Href);
  return (
    <View style={[c.banner, { backgroundColor: work.cloth }]}>
      {/* The work's painting, darkened behind the words, or else its cloth with the emblem.
          Sized by the banner itself: an ImageBackground without a fixed size shows the picture at its own size. */}
      {work.art ? (
        <>
          <Image source={ART[work.art].hero} style={{ position: 'absolute', width: '100%', height: '100%' }} resizeMode="cover" />
          <LinearGradient
            colors={['rgba(14,9,5,0.9)', 'rgba(14,9,5,0.62)', 'rgba(14,9,5,0)']}
            locations={[0, 0.5, 0.88]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={StyleSheet.absoluteFill}
          />
        </>
      ) : (
        <Image source={art} style={{ position: 'absolute', width: '100%', height: '100%', opacity: theme.artOpacity }} resizeMode="cover" />
      )}
      <View style={c.bannerWords}>
        {coverLines(work, settings.script).map((line) => (
          <Text key={line} style={{ color: CREAM, fontSize: size, lineHeight: size * 1.45, fontFamily: font, fontWeight: font ? undefined : '700' }} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.6}>
            {line}
          </Text>
        ))}
        {showEn && (
          <Text style={{ color: CREAM, fontSize: 14, fontWeight: '600', marginTop: 2 }} numberOfLines={1}>
            {work.titleEn}
          </Text>
        )}
        <Text style={{ color: GOLD, fontSize: 13, marginTop: 1 }} numberOfLines={2}>
          {[tr(work.size), work.about && tr(work.about)].filter(Boolean).join(' · ')}
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
          {lastId && lastId !== firstId ? (
            <>
              <Pressable onPress={() => go(lastId)} accessibilityRole="button" style={({ pressed }) => [c.bannerBtn, { backgroundColor: GOLD, borderColor: GOLD, opacity: pressed ? 0.8 : 1 }]}>
                <Text style={{ color: work.cloth, fontSize: 14, fontWeight: '700' }} numberOfLines={1}>
                  {lastLabel ? tr('Continue · {label} ›', { label: lastLabel }) : tr('Continue ›')}
                </Text>
              </Pressable>
              <Pressable onPress={() => go(firstId)} accessibilityRole="button" style={({ pressed }) => [c.bannerBtn, { borderColor: GOLD, opacity: pressed ? 0.7 : 1 }]}>
                <Text style={{ color: CREAM, fontSize: 14, fontWeight: '600' }}>{tr('From the start')}</Text>
              </Pressable>
            </>
          ) : (
            <Pressable onPress={() => go(firstId)} accessibilityRole="button" style={({ pressed }) => [c.bannerBtn, { backgroundColor: GOLD, borderColor: GOLD, opacity: pressed ? 0.8 : 1 }]}>
              <Text style={{ color: work.cloth, fontSize: 14, fontWeight: '700' }}>{tr('Begin reading ›')}</Text>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
}

/** A deity's page opens with its painting, the name in the reader's script over the darkened left. */
export function DeityBanner({ deity, count }: { deity: DeityGroup; count: number }) {
  const { settings } = useSettings();
  const { tr } = useI18n();
  const showEn = useShowEnglish();
  const key = DEITY_PAINTING[deity.id];
  if (!key) return null;
  const roman = settings.script === 'english';
  const font = roman ? headingFont('en', settings.bookFonts) : scriptFont(settings.script, settings.bookFonts);
  const size = 28 * (settings.script === 'malayalam' ? 0.82 : 1);
  return (
    <View style={[c.banner, { backgroundColor: '#2A1E14' }]}>
      <Image source={ART[key].hero} style={{ position: 'absolute', width: '100%', height: '100%' }} resizeMode="cover" />
      <LinearGradient
        colors={['rgba(14,9,5,0.9)', 'rgba(14,9,5,0.62)', 'rgba(14,9,5,0)']}
        locations={[0, 0.5, 0.88]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={StyleSheet.absoluteFill}
      />
      <View style={c.bannerWords}>
        <Text style={{ color: CREAM, fontSize: size, lineHeight: size * 1.4, fontFamily: font, fontWeight: font ? undefined : '700' }} numberOfLines={2} adjustsFontSizeToFit minimumFontScale={0.6}>
          {roman ? deity.titleEn.split(' · ')[0] : translit(deity.short ?? deity.title, settings.script)}
        </Text>
        {(roman || showEn) && (
          <Text style={{ color: CREAM, fontSize: 14, fontWeight: '600', marginTop: 2 }} numberOfLines={2}>
            {deity.titleEn}
          </Text>
        )}
        <Text style={{ color: GOLD, fontSize: 13, marginTop: 4 }} numberOfLines={1}>
          {tr('{n} texts', { n: count })}
        </Text>
      </View>
    </View>
  );
}

/** A deity's name for a small label: its English name in English, else its own in the reader's script. */
export function deityLabel(deity: DeityGroup, script: ScriptId): string {
  return script === 'english' ? deity.titleEn.split(' · ')[0] : translit(deity.short ?? deity.title, script);
}

const DEITY_ART: Record<string, ImageSourcePropType> = {
  vishnu: require('../../assets/deities/vishnu.png'),
  devi: require('../../assets/deities/devi.png'),
  shiva: require('../../assets/deities/shiva.png'),
  ganesha: require('../../assets/deities/ganesha.png'),
  vayu: require('../../assets/deities/vayu.png'),
  surya: require('../../assets/deities/surya.png'),
  subrahmanya: require('../../assets/deities/subrahmanya.png'),
  guru: require('../../assets/deities/guru.png'),
};

/** A deity as a round emblem with the name under it. */
export function DeityMedallion({ deity, width = 76 }: { deity: DeityGroup; width?: number }) {
  const { theme, settings } = useSettings();
  const font = scriptFont(settings.script, settings.bookFonts);
  const d = Math.min(64, width - 8);
  return (
    <Pressable
      onPress={() => router.push(`/deity/${deity.id}` as Href)}
      accessibilityRole="link"
      accessibilityLabel={deityLabel(deity, settings.script)}
      style={({ pressed }) => ({ width, alignItems: 'center', opacity: pressed ? 0.85 : 1, transform: [{ scale: pressed ? 0.96 : 1 }] })}
    >
      {/* A painting where there is one (round, in a thin gold ring); the gurus keep their emblem. */}
      <View style={{ width: d + 6, height: d + 6, borderRadius: (d + 6) / 2, borderWidth: 1.5, borderColor: theme.gold + '99', alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={DEITY_PAINTING[deity.id] ? ART[DEITY_PAINTING[deity.id]!].thumb : DEITY_ART[deity.id]}
          style={{ width: d, height: d, borderRadius: d / 2, opacity: theme.artOpacity }}
        />
      </View>
      <Text style={{ color: theme.text, fontSize: 14, lineHeight: 21, textAlign: 'center', marginTop: 4, fontFamily: font }} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.75}>
        {deityLabel(deity, settings.script)}
      </Text>
    </Pressable>
  );
}

export const CATEGORY_ICONS: Record<CategoryId, Icon> = {
  nitya: 'weather-sunset-up',
  sandhya: 'hands-pray',
  puja: 'oil-lamp',
  stotra: 'spa-outline',
  sahasranama: 'dots-circle',
  vedic: 'om',
  madhva: 'temple-hindu-outline',
  'dasara-pada': 'music-note-outline',
  kirtana: 'music-note-outline',
  aarti: 'candle',
  samskara: 'water-outline',
  homa: 'fire',
  gita: 'book-open-page-variant-outline',
  sundarakanda: 'book-open-page-variant-outline',
  devimahatmya: 'spa-outline',
  sumadhvavijaya: 'book-open-page-variant-outline',
  harikathamrutasara: 'book-open-page-variant-outline',
  ramayana: 'book-open-page-variant-outline',
  mahabharata: 'book-open-page-variant-outline',
};

/** A section of the library as a tile: icon, name in the reader's script, English name and size. */
export function CategoryTile({ id, wide }: { id: CategoryId; wide?: boolean }) {
  const { theme, settings } = useSettings();
  const { tr } = useI18n();
  const showEn = useShowEnglish();
  const cat = categoryById[id];
  const count = categoryCounts()[id];
  const font = scriptFont(settings.script, settings.bookFonts);
  if (!count) return null;
  return (
    <Pressable
      onPress={() => router.push(`/category/${id}` as Href)}
      accessibilityRole="link"
      accessibilityLabel={tr('{title}, {count} texts', { title: categoryTitle(cat, settings.script), count })}
      style={({ pressed }) => [c.tile, { width: wide ? '100%' : '48.5%', backgroundColor: theme.card, borderColor: theme.cardBorder, opacity: pressed ? 0.85 : 1, transform: [{ scale: pressed ? 0.98 : 1 }] }]}
    >
      <View style={[c.iconSmall, { backgroundColor: theme.goldSoft }]}>
        <MaterialCommunityIcons name={CATEGORY_ICONS[id]} size={22} color={theme.gold} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ color: theme.text, fontSize: 16, lineHeight: 25, fontFamily: font, fontWeight: font ? undefined : '600' }} numberOfLines={2}>
          {categoryTitle(cat, settings.script)}
        </Text>
        {showEn && (
          <Text style={{ color: theme.textMuted, fontSize: 13 }} numberOfLines={1}>
            {cat.titleEn}
          </Text>
        )}
      </View>
    </Pressable>
  );
}

/**
 * One shelf of the library as a single grouped list (like a book's table of contents): icon,
 * name, and how many texts, one category per row.
 */
export function CategoryList({ ids }: { ids: CategoryId[] }) {
  const { theme, settings } = useSettings();
  const { tr } = useI18n();
  const showEn = useShowEnglish();
  const counts = categoryCounts();
  const font = scriptFont(settings.script, settings.bookFonts);
  const shown = ids.filter((id) => counts[id]);
  return (
    <View style={[c.list, { backgroundColor: theme.card, borderColor: theme.cardBorder }]}>
      {shown.map((id, i) => {
        const cat = categoryById[id];
        return (
          <Pressable
            key={id}
            onPress={() => router.push(`/category/${id}` as Href)}
            accessibilityRole="link"
            accessibilityLabel={tr('{title}, {count} texts', { title: categoryTitle(cat, settings.script), count: counts[id] })}
            style={({ pressed }) => [c.row, i > 0 && { borderTopWidth: StyleSheet.hairlineWidth, borderColor: theme.cardBorder }, { backgroundColor: pressed ? theme.accentSoft : 'transparent' }]}
          >
            <View style={[c.rowIcon, { backgroundColor: theme.goldSoft }]}>
              <MaterialCommunityIcons name={CATEGORY_ICONS[id]} size={20} color={theme.gold} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ color: theme.text, fontSize: 16, lineHeight: 24, fontFamily: font, fontWeight: font ? undefined : '600' }} numberOfLines={1}>
                {categoryTitle(cat, settings.script)}
              </Text>
              {showEn && (
                <Text style={{ color: theme.textMuted, fontSize: 13 }} numberOfLines={1}>
                  {cat.titleEn}
                </Text>
              )}
            </View>
            <Text style={{ color: theme.textMuted, fontSize: 14 }}>{counts[id]}</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color={theme.textMuted} />
          </Pressable>
        );
      })}
    </View>
  );
}

/** A small square shortcut: icon above a short label. */
export function QuickTile({ icon, label, href }: { icon: Icon; label: string; href: string }) {
  const { theme } = useSettings();
  const { tr } = useI18n();
  return (
    <Pressable
      onPress={() => router.push(href as Href)}
      accessibilityRole="link"
      accessibilityLabel={tr(label)}
      style={({ pressed }) => [c.quick, { backgroundColor: theme.card, borderColor: theme.cardBorder, opacity: pressed ? 0.85 : 1, transform: [{ scale: pressed ? 0.97 : 1 }] }]}
    >
      <View style={[c.iconWrap, { backgroundColor: theme.goldSoft }]}>
        <MaterialCommunityIcons name={icon} size={26} color={theme.gold} />
      </View>
      <Text style={{ color: theme.text, fontSize: 14, textAlign: 'center', marginTop: 6 }} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.8}>
        {tr(label)}
      </Text>
    </Pressable>
  );
}

/** "GREAT WORKS" with an optional link on the right. */
export function ShelfHeading({ title, action, onAction }: { title: string; action?: string; onAction?: () => void }) {
  const { theme, settings } = useSettings();
  const { tr, lang } = useI18n();
  const hf = headingFont(lang, settings.bookFonts);
  return (
    <View style={c.heading}>
      <MaterialCommunityIcons name="spa-outline" size={18} color={theme.gold} style={{ marginRight: 8 }} />
      <Text style={{ flex: 1, color: theme.text, fontSize: 16, fontFamily: hf, fontWeight: hf ? undefined : '700', letterSpacing: 0.2 }} accessibilityRole="header">
        {tr(title)}
      </Text>
      {action && (
        <Pressable onPress={onAction} hitSlop={10} accessibilityRole="link">
          <Text style={{ color: theme.accent, fontSize: 14 }}>{tr(action)}</Text>
        </Pressable>
      )}
    </View>
  );
}

const c = StyleSheet.create({
  art: { borderRadius: 14, overflow: 'hidden', backgroundColor: '#2A1E14' },
  list: { marginHorizontal: 16, borderRadius: 16, borderWidth: 1, overflow: 'hidden' },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 14, paddingVertical: 11 },
  rowIcon: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  cover: { borderRadius: 6, overflow: 'hidden', elevation: 4, shadowColor: '#000', shadowOpacity: 0.22, shadowRadius: 6, shadowOffset: { width: 0, height: 3 } },
  words: { position: 'absolute', top: '51%', bottom: '6.5%', left: '14%', right: '8%', alignItems: 'center' },
  rule: { width: 26, height: 1, marginBottom: 4, opacity: 0.8 },
  banner: { marginHorizontal: 16, marginTop: 14, aspectRatio: 900 / 520, borderRadius: 16, overflow: 'hidden' },
  bannerWords: { flex: 1, justifyContent: 'center', paddingLeft: '7%', width: '52%' },
  bannerBtn: { paddingHorizontal: 13, paddingVertical: 7, borderRadius: 18, borderWidth: 1 },
  tile: { flexDirection: 'row', alignItems: 'center', gap: 8, padding: 10, borderRadius: 16, borderWidth: 1 },
  iconWrap: { width: 38, height: 38, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  iconSmall: { width: 34, height: 34, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  quick: { width: '31.5%', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 4, borderRadius: 16, borderWidth: 1 },
  heading: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, marginTop: 24, marginBottom: 10 },
});
