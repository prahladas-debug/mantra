import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router, type Href } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { verseCount, type Mantra } from '../data';
import { scriptFont } from '../lib/fonts';
import type { Entry } from '../lib/groups';
import { useI18n } from '../lib/i18n';
import { useSettings } from '../lib/settings';
import { translit, type ScriptId, nameOf } from '../lib/transliterate';
import { useShowEnglish } from './useGloss';

/** Tamil-language works are always shown in Tamil; everything else in the reader's script. */
export function titleFor(m: Mantra, script: ScriptId): { text: string; script: ScriptId } {
  return m.sourceScript === 'tamil' ? { text: m.title, script: 'tamil' } : { text: nameOf(m, script), script };
}

/** "Venkatesha Suprabhatam · 29 verses · partial" */
function subtitleFor(m: Mantra, tr: (s: string, vars?: Record<string, string | number>) => string, showEn: boolean, override?: string) {
  const n = verseCount(m);
  return [showEn ? (override ?? m.titleEn) : '', n === 1 ? tr('{n} verse', { n }) : tr('{n} verses', { n }), m.completeness === 'partial' ? tr('partial') : ''].filter(Boolean).join(' · ');
}

/**
 * The English name without what the list already says: in a numbered book the part's own
 * name ("Sundarakanda · Sarga 1 · Hanuman's leap" → "Hanuman's leap"); for a song the song,
 * the composer after it, or left out for Purandara Dasa ("Purandara Dasa · Jagadoddharana" → "Jagadoddharana").
 */
function shortName(m: Mantra, numbered?: boolean): string | undefined {
  const parts = m.titleEn.split(' · ');
  if (parts.length < 2) return undefined;
  if (numbered) return parts[parts.length - 1];
  // Most songs are Purandara Dasa's: name the composer only for the others.
  if (m.category === 'dasara-pada') return parts[0] === 'Purandara Dasa' ? parts.slice(1).join(' · ') : `${parts.slice(1).join(' · ')} · ${parts[0]}`;
  return undefined;
}

/** One compact line for a text: title in the reader's script, English name and verse count under it. */
export function TextRow({ mantra, subtitle, badge, divider, indent }: { mantra: Mantra; subtitle?: string; badge?: string; divider?: boolean; indent?: boolean }) {
  const { theme, settings, favorites } = useSettings();
  const { tr } = useI18n();
  const showEn = useShowEnglish();
  const t = titleFor(mantra, settings.script);
  const font = scriptFont(t.script, settings.bookFonts);
  return (
    <Pressable
      onPress={() => router.push(`/mantra/${mantra.id}` as Href)}
      accessibilityRole="link"
      style={({ pressed }) => [s.row, { borderTopWidth: divider ? StyleSheet.hairlineWidth : 0, borderColor: theme.cardBorder, opacity: pressed ? 0.6 : 1, paddingLeft: indent ? 26 : 14 }]}
    >
      {badge !== undefined && (
        <View style={[s.badge, { backgroundColor: theme.accentSoft }]}>
          <Text style={{ color: theme.accent, fontSize: 14.5, fontWeight: '700' }}>{badge}</Text>
        </View>
      )}
      <View style={{ flex: 1 }}>
        <Text style={{ color: theme.text, fontSize: 17, fontFamily: font, fontWeight: font ? undefined : '600' }} numberOfLines={1}>
          {t.text}
        </Text>
        <Text style={{ color: theme.textMuted, fontSize: 14.5, marginTop: 1 }} numberOfLines={1}>
          {subtitleFor(mantra, tr, showEn, subtitle)}
        </Text>
      </View>
      {favorites.includes(mantra.id) && <MaterialCommunityIcons name="star" size={17} color={theme.gold} />}
      <MaterialCommunityIcons name="chevron-right" size={19} color={theme.textMuted} />
    </Pressable>
  );
}

/** A multi-part work folded into one line; tap to show its parts. */
function SeriesRow({ entry, divider }: { entry: Entry; divider?: boolean }) {
  const { theme, settings } = useSettings();
  const { tr } = useI18n();
  const showEn = useShowEnglish();
  const [open, setOpen] = useState(false);
  const parts = entry.parts!;
  const first = titleFor(entry.mantra, settings.script);
  // A Tamil-language series keeps its Tamil title and font whatever the reading script.
  const own = entry.mantra.sourceScript === 'tamil';
  const font = scriptFont(own ? first.script : settings.script, settings.bookFonts);
  const title = entry.seriesTitle && !own ? translit(entry.seriesTitle.title, settings.script) : first.text;
  const en = entry.seriesTitle?.titleEn ?? entry.mantra.titleEn.split(' · ')[0];
  return (
    <View>
      <Pressable
        onPress={() => setOpen(!open)}
        accessibilityRole="button"
        accessibilityState={{ expanded: open }}
        style={({ pressed }) => [s.row, { borderTopWidth: divider ? StyleSheet.hairlineWidth : 0, borderColor: theme.cardBorder, opacity: pressed ? 0.6 : 1 }]}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ color: theme.text, fontSize: 17, fontFamily: font, fontWeight: font ? undefined : '600' }} numberOfLines={1}>
            {title}
          </Text>
          <Text style={{ color: theme.textMuted, fontSize: 14.5, marginTop: 1 }} numberOfLines={1}>
            {showEn ? tr('{en} · {n} parts', { en, n: parts.length }) : tr('{en} · {n} parts', { en: '', n: parts.length }).replace(/^\s*·\s*/, '')}
          </Text>
        </View>
        <MaterialCommunityIcons name={open ? 'chevron-up' : 'chevron-down'} size={19} color={theme.accent} />
      </Pressable>
      {open && parts.map((m, i) => <TextRow key={m.id} mantra={m} divider indent badge={String(m.order ?? i + 1)} />)}
    </View>
  );
}

/** A card holding a group's lines. */
export function EntryCard({ entries, numbered }: { entries: Entry[]; numbered?: boolean }) {
  const { theme } = useSettings();
  return (
    <View style={[s.card, { backgroundColor: theme.card, borderColor: theme.cardBorder }]}>
      {entries.map((e, i) =>
        e.parts && e.parts.length > 1 ? (
          <SeriesRow key={e.mantra.id} entry={e} divider={i > 0} />
        ) : (
          <TextRow
            key={e.mantra.id}
            mantra={e.mantra}
            divider={i > 0}
            badge={numbered ? String(e.mantra.order ?? i + 1) : undefined}
            subtitle={shortName(e.mantra, numbered)}
          />
        ),
      )}
    </View>
  );
}

const s = StyleSheet.create({
  card: { marginHorizontal: 16, borderRadius: 16, borderWidth: 1, overflow: 'hidden' },
  row: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 10, paddingRight: 12, paddingLeft: 14 },
  badge: { minWidth: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 6 },
});
