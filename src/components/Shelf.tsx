import { Ionicons } from '@expo/vector-icons';
import { router, type Href } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { categoryById, categoryCounts, getMantraInfo, type CategoryId } from '../data';
import { scriptFont } from '../lib/fonts';
import { categoryTitle } from '../lib/labels';
import { useSettings } from '../lib/settings';
import { translit, type ScriptId } from '../lib/transliterate';

type Icon = keyof typeof Ionicons.glyphMap;

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
  /** Shown later for readers of the other tradition. */
  tradition?: 'madhva' | 'smarta';
}

export const GREAT_WORKS: GreatWork[] = [
  { category: 'gita', titleEn: 'Bhagavad Gita', size: '18 chapters', about: '700 verses', lines: ['भगवद्गीता'], own: { kannada: ['ಭಗವದ್ಗೀತೆ'], telugu: ['భగవద్గీత'] }, cloth: '#7E2A12', edge: '#A8431F' },
  { textId: 'vishnu-sahasranama', titleEn: 'Vishnu Sahasranama', size: '1000 names', lines: ['विष्णु', 'सहस्रनाम'], cloth: '#1E3A64', edge: '#2F558C' },
  { category: 'sundarakanda', titleEn: 'Sundarakanda', size: '68 sargas', about: 'Ramayana', lines: ['सुन्दर', 'काण्ड'], cloth: '#2C5638', edge: '#3F7650' },
  { category: 'harikathamrutasara', titleEn: 'Harikathamrutasara', size: '32 sandhis', about: 'Jagannatha Dasa', lines: ['हरिकथामृत', 'सार'], cloth: '#1D5458', edge: '#2E7479', tradition: 'madhva' },
  { category: 'sumadhvavijaya', titleEn: 'Sumadhva Vijaya', size: '16 sargas', about: 'life of Madhva', lines: ['सुमध्व', 'विजय'], cloth: '#5B3A1C', edge: '#7E542C', tradition: 'madhva' },
  { textId: 'vayu-stuti', titleEn: 'Hari Vayu Stuti', size: '41 verses', about: 'Trivikrama Pandita', lines: ['हरिवायु', 'स्तुति'], cloth: '#8A4B12', edge: '#B0691F', tradition: 'madhva' },
  { category: 'devimahatmya', titleEn: 'Devi Mahatmyam', size: '13 chapters', about: 'Durga Saptashati', lines: ['देवी', 'माहात्म्य'], cloth: '#831B3C', edge: '#A93256', tradition: 'smarta' },
  { textId: 'lalitha-sahasranama', titleEn: 'Lalita Sahasranama', size: '1000 names', lines: ['ललिता', 'सहस्रनाम'], cloth: '#6A2260', edge: '#8C3A80', tradition: 'smarta' },
  { textId: 'saundarya-lahari', titleEn: 'Saundarya Lahari', size: '100 verses', about: 'Shankaracharya', lines: ['सौन्दर्य', 'लहरी'], cloth: '#3B2F6B', edge: '#56489A', tradition: 'smarta' },
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
function coverLines(work: GreatWork, script: ScriptId): string[] {
  if (work.own?.[script]) return work.own[script]!;
  if (work.category) {
    const words = categoryTitle(categoryById[work.category], script).split(' ');
    if (words.length > 1 && words.length <= 3) return words;
  }
  const lines = work.lines.map((l) => translit(l, script));
  return script === 'iast' ? lines.map((l) => l.charAt(0).toUpperCase() + l.slice(1)) : lines;
}

/** A cloth-bound book cover with the title in the reader's script. */
export function BookCover({ work, width = 150, height = 200 }: { work: GreatWork; width?: number; height?: number }) {
  const { settings } = useSettings();
  if (work.textId && !getMantraInfo(work.textId)) return null;
  const font = scriptFont(settings.script, settings.bookFonts);
  const small = width < 140;
  // Malayalam letters are wide; phones also shrink a line that is still too long, the web does not.
  const size = (small ? 16 : 20) * (settings.script === 'malayalam' ? 0.82 : 1);
  return (
    <Pressable
      onPress={() => router.push((work.category ? `/category/${work.category}` : `/mantra/${work.textId}`) as Href)}
      accessibilityRole="link"
      accessibilityLabel={[work.titleEn, work.size, work.about].filter(Boolean).join(', ')}
      style={({ pressed }) => [c.cover, { width, height, backgroundColor: work.cloth, borderColor: work.edge, opacity: pressed ? 0.85 : 1 }]}
    >
      <View style={[c.spine, { backgroundColor: work.edge }]} />
      <View style={[c.frame, { borderColor: GOLD }]}>
        <Text style={{ color: GOLD, fontSize: 12 }}>❁</Text>
        <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center' }}>
          {coverLines(work, settings.script).map((line) => (
            <Text
              key={line}
              style={{ color: CREAM, fontSize: size, lineHeight: size * 1.6, textAlign: 'center', fontFamily: font, fontWeight: font ? undefined : '700' }}
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.6}
            >
              {line}
            </Text>
          ))}
        </View>
        <View style={[c.rule, { backgroundColor: GOLD }]} />
        <Text style={{ color: CREAM, fontSize: small ? 11 : 12, fontWeight: '600', textAlign: 'center' }} numberOfLines={2}>
          {work.titleEn}
        </Text>
        <Text style={{ color: GOLD, fontSize: 11, textAlign: 'center', marginTop: 2 }} numberOfLines={small ? 1 : 2}>
          {small || !work.about ? work.size : `${work.size} · ${work.about}`}
        </Text>
      </View>
    </Pressable>
  );
}

export const CATEGORY_ICONS: Record<CategoryId, Icon> = {
  nitya: 'sunny-outline',
  sandhya: 'partly-sunny-outline',
  puja: 'flower-outline',
  stotra: 'book-outline',
  sahasranama: 'list-outline',
  vedic: 'flame-outline',
  madhva: 'ribbon-outline',
  'dasara-pada': 'musical-notes-outline',
  kirtana: 'musical-note-outline',
  samskara: 'people-outline',
  homa: 'bonfire-outline',
  gita: 'book-outline',
  sundarakanda: 'book-outline',
  devimahatmya: 'book-outline',
  sumadhvavijaya: 'book-outline',
  harikathamrutasara: 'book-outline',
};

/** A section of the library as a tile: icon, name in the reader's script, English name and size. */
export function CategoryTile({ id, wide }: { id: CategoryId; wide?: boolean }) {
  const { theme, settings } = useSettings();
  const cat = categoryById[id];
  const count = categoryCounts()[id];
  const font = scriptFont(settings.script, settings.bookFonts);
  if (!count) return null;
  return (
    <Pressable
      onPress={() => router.push(`/category/${id}` as Href)}
      accessibilityRole="link"
      accessibilityLabel={`${cat.titleEn}, ${count} texts`}
      style={({ pressed }) => [c.tile, { width: wide ? '100%' : '48.5%', backgroundColor: theme.card, borderColor: theme.cardBorder, opacity: pressed ? 0.7 : 1 }]}
    >
      <View style={[c.iconSmall, { backgroundColor: theme.accentSoft }]}>
        <Ionicons name={CATEGORY_ICONS[id]} size={18} color={theme.accent} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ color: theme.text, fontSize: 15, lineHeight: 23, fontFamily: font, fontWeight: font ? undefined : '600' }} numberOfLines={2}>
          {categoryTitle(cat, settings.script)}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: theme.textMuted, fontSize: 12, flexShrink: 1 }} numberOfLines={1}>
            {cat.titleEn}
          </Text>
          <Text style={{ color: theme.textMuted, fontSize: 12, flexShrink: 0 }} numberOfLines={1}>
            {` · ${count}`}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

/** A small square shortcut: icon above a short label. */
export function QuickTile({ icon, label, href }: { icon: Icon; label: string; href: string }) {
  const { theme } = useSettings();
  return (
    <Pressable
      onPress={() => router.push(href as Href)}
      accessibilityRole="link"
      accessibilityLabel={label}
      style={({ pressed }) => [c.quick, { backgroundColor: theme.card, borderColor: theme.cardBorder, opacity: pressed ? 0.7 : 1 }]}
    >
      <View style={[c.iconWrap, { backgroundColor: theme.accentSoft }]}>
        <Ionicons name={icon} size={20} color={theme.accent} />
      </View>
      <Text style={{ color: theme.text, fontSize: 13, textAlign: 'center', marginTop: 6 }} numberOfLines={2}>
        {label}
      </Text>
    </Pressable>
  );
}

/** "GREAT WORKS" with an optional link on the right. */
export function ShelfHeading({ title, action, onAction }: { title: string; action?: string; onAction?: () => void }) {
  const { theme } = useSettings();
  return (
    <View style={c.heading}>
      <Text style={{ flex: 1, color: theme.textMuted, fontSize: 12, fontWeight: '700', letterSpacing: 0.8 }} accessibilityRole="header">
        {title.toUpperCase()}
      </Text>
      {action && (
        <Pressable onPress={onAction} hitSlop={10} accessibilityRole="link">
          <Text style={{ color: theme.accent, fontSize: 14 }}>{action}</Text>
        </Pressable>
      )}
    </View>
  );
}

const c = StyleSheet.create({
  cover: { borderRadius: 8, borderWidth: 1, flexDirection: 'row', overflow: 'hidden', elevation: 3, shadowColor: '#000', shadowOpacity: 0.18, shadowRadius: 5, shadowOffset: { width: 0, height: 2 } },
  spine: { width: 7 },
  frame: { flex: 1, margin: 6, borderWidth: StyleSheet.hairlineWidth * 2, borderRadius: 4, paddingVertical: 8, paddingHorizontal: 4, alignItems: 'center' },
  rule: { width: 28, height: 1, marginBottom: 6, opacity: 0.8 },
  tile: { flexDirection: 'row', alignItems: 'center', gap: 8, padding: 10, borderRadius: 14, borderWidth: 1 },
  iconWrap: { width: 38, height: 38, borderRadius: 19, alignItems: 'center', justifyContent: 'center' },
  iconSmall: { width: 34, height: 34, borderRadius: 17, alignItems: 'center', justifyContent: 'center' },
  quick: { width: '31.5%', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 4, borderRadius: 14, borderWidth: 1 },
  heading: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, marginTop: 24, marginBottom: 10 },
});
