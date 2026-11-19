import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
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

/** Songs in other languages, one folded row per language that opens on a tap. */
export function OtherLanguages({ others, entriesFor, heading = true }: {
  others: Map<SongLang, Mantra[]>;
  /** The list of one language under its sub-headings (title '' for none). */
  entriesFor: (list: Mantra[]) => { id: string; title: string; entries: Entry[] }[];
  heading?: boolean;
}) {
  const { theme } = useSettings();
  const { tr } = useI18n();
  const [open, setOpen] = useState<SongLang[]>([]);
  if (others.size === 0) return null;
  return (
    <>
      {heading && <SectionHeading>{tr('In other languages')}</SectionHeading>}
      {[...others.entries()].map(([l, list]) => {
        const isOpen = open.includes(l);
        return (
          <View key={l}>
            <Pressable
              onPress={() => setOpen(isOpen ? open.filter((x) => x !== l) : [...open, l])}
              style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, marginBottom: 8, paddingVertical: 12, paddingHorizontal: 14, borderRadius: 12, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card }}
              accessibilityRole="button"
              accessibilityState={{ expanded: isOpen }}
            >
              <Text style={{ flex: 1, color: theme.text, fontSize: 16 }}>{SONG_LANG_NAMES[l]}</Text>
              <Text style={{ color: theme.textMuted, fontSize: 14, marginRight: 6 }}>{list.length}</Text>
              <MaterialCommunityIcons name={isOpen ? 'chevron-up' : 'chevron-down'} size={20} color={theme.textMuted} />
            </Pressable>
            {isOpen &&
              entriesFor(list).map((g) => (
                <View key={g.id} style={{ marginBottom: 10 }}>
                  {!!g.title && <Text style={{ color: theme.textMuted, fontSize: 14, marginHorizontal: 20, marginBottom: 6 }}>{tr(g.title)}</Text>}
                  <EntryCard entries={g.entries} />
                </View>
              ))}
          </View>
        );
      })}
    </>
  );
}
