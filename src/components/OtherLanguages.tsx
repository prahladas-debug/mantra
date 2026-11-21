import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState, type ReactNode } from 'react';
import { Pressable, Text, View } from 'react-native';
import { mantrasInCategory, type CategoryId } from '../data';
import type { Mantra } from '../data/types';
import { AUDIENCE_SONG_LANGS } from '../lib/audience';
import { songLanguage, SONG_LANG_NAMES, type Entry, type SongLang } from '../lib/groups';
import { useI18n } from '../lib/i18n';
import { useSettings } from '../lib/settings';
import { useAudience } from '../lib/useAudience';
import { EntryCard } from './TextList';
import { SectionHeading } from './ui';

/**
 * Splits a list into the songs in the reader's own languages (and everything that is not a
 * regional song) and the songs in other languages, by language. 'All India' readers keep all.
 */
export function useSongSplit() {
  const audience = useAudience();
  const langs = AUDIENCE_SONG_LANGS[audience];
  const isMine = (m: Mantra) => {
    const l = songLanguage(m);
    return !langs || !l || langs.includes(l);
  };
  const split = (list: Mantra[]) => {
    const own = list.filter(isMine);
    const others = new Map<SongLang, Mantra[]>();
    for (const m of list) if (!isMine(m)) others.set(songLanguage(m)!, [...(others.get(songLanguage(m)!) ?? []), m]);
    return { own, others };
  };
  return { isMine, split };
}

/** How many texts of a category the reader meets before opening "In other languages". */
export function useOwnCount() {
  const { isMine } = useSongSplit();
  return (id: CategoryId) => mantrasInCategory(id).filter(isMine).length;
}

/** A row that opens on a tap to show what it holds: a name, a count and a chevron. */
export function Folded({ label, count, children, icon }: { label: string; count?: number; children: ReactNode; icon?: keyof typeof MaterialCommunityIcons.glyphMap }) {
  const { theme } = useSettings();
  const [open, setOpen] = useState(false);
  return (
    <View>
      <Pressable
        onPress={() => setOpen(!open)}
        style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginHorizontal: 16, marginBottom: 8, paddingVertical: 12, paddingHorizontal: 14, borderRadius: 12, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card }}
        accessibilityRole="button"
        accessibilityState={{ expanded: open }}
      >
        {icon && <MaterialCommunityIcons name={icon} size={20} color={theme.textMuted} />}
        <Text style={{ flex: 1, color: theme.text, fontSize: 16 }}>{label}</Text>
        {count !== undefined && <Text style={{ color: theme.textMuted, fontSize: 14, marginRight: 6 }}>{count}</Text>}
        <MaterialCommunityIcons name={open ? 'chevron-up' : 'chevron-down'} size={20} color={theme.textMuted} />
      </Pressable>
      {open && children}
    </View>
  );
}

/** Songs in other languages, one folded row per language that opens on a tap. */
export function OtherLanguages({ others, entriesFor, heading = true }: {
  others: Map<SongLang, Mantra[]>;
  /** The list of one language under its sub-headings (title '' for none). */
  entriesFor: (list: Mantra[]) => { id: string; title: string; entries: Entry[] }[];
  heading?: boolean;
}) {
  const { theme } = useSettings();
  const { tr } = useI18n();
  if (others.size === 0) return null;
  return (
    <>
      {heading && <SectionHeading>{tr('In other languages')}</SectionHeading>}
      {[...others.entries()].map(([l, list]) => (
        <Folded key={l} label={SONG_LANG_NAMES[l]} count={list.length}>
          {entriesFor(list).map((g) => (
            <View key={g.id} style={{ marginBottom: 10 }}>
              {!!g.title && <Text style={{ color: theme.textMuted, fontSize: 14, marginHorizontal: 20, marginBottom: 6 }}>{tr(g.title)}</Text>}
              <EntryCard entries={g.entries} />
            </View>
          ))}
        </Folded>
      ))}
    </>
  );
}
