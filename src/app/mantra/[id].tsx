import { Ionicons } from '@expo/vector-icons';
import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { BookReader, type BookHandle } from '../../components/reader/BookReader';
import { ReaderContext, type ReaderState } from '../../components/reader/context';
import { DisplayPanel } from '../../components/reader/DisplayPanel';
import { flatten } from '../../components/reader/rows';
import { ScrollReader } from '../../components/reader/ScrollReader';
import { usePinch } from '../../components/reader/usePinch';
import { getMantra } from '../../data';
import { useSettings } from '../../lib/settings';
import { choicesFor } from '../../lib/variants';

const KEEP_AWAKE_TAG = 'reader';

export default function Reader() {
  const params = useLocalSearchParams<{ id: string; si?: string; vi?: string }>();
  const mantra = getMantra(params.id);
  const { theme, settings, update, favorites, toggleFavorite, markRead, positions, savePosition } = useSettings();
  const setScale = useCallback((fontScale: number) => update({ fontScale }), [update]);
  const pinch = usePinch(settings.fontScale, setScale);
  const [panelOpen, setPanelOpen] = useState(false);
  const [opened, setOpened] = useState<ReadonlySet<string>>(() => new Set());
  const [practice, setPractice] = useState(false);
  const [revealed, setRevealed] = useState<Record<string, number>>({});
  const handle = useRef<BookHandle | null>(null);

  const choices = useMemo(() => (mantra ? choicesFor(mantra, settings.variants) : {}), [mantra, settings.variants]);
  const rows = useMemo(() => (mantra ? flatten(mantra, choices) : []), [mantra, choices]);

  // Verse opened from search or a bookmark: highlighted briefly.
  const targetKey = params.si !== undefined && params.vi !== undefined ? `v${params.si}-${params.vi}` : null;
  const [highlight, setHighlight] = useState<string | null>(targetKey);
  // Where to open: the requested verse, else where the reader left off.
  const [initialKey] = useState<string | null>(() => targetKey ?? (mantra ? positions[mantra.id] ?? null : null));
  // Switching between book and scroll mounts a new layout: open that one where the reader is now.
  const [shownLayout, setShownLayout] = useState(settings.layout);
  const [openAt, setOpenAt] = useState(initialKey);
  if (shownLayout !== settings.layout) {
    setShownLayout(settings.layout);
    setOpenAt((mantra && positions[mantra.id]) ?? openAt);
  }

  useEffect(() => {
    if (mantra) markRead(mantra.id);
  }, [mantra, markRead]);

  useEffect(() => {
    if (!targetKey) return;
    const t = setTimeout(() => setHighlight(null), 3000);
    return () => clearTimeout(t);
  }, [targetKey]);

  useEffect(() => {
    if (!settings.keepAwake) return;
    activateKeepAwakeAsync(KEEP_AWAKE_TAG).catch(() => {});
    return () => {
      deactivateKeepAwake(KEEP_AWAKE_TAG).catch(() => {});
    };
  }, [settings.keepAwake]);

  const toggleMeaning = useCallback(
    (key: string) =>
      setOpened((prev) => {
        const next = new Set(prev);
        if (next.has(key)) next.delete(key);
        else next.add(key);
        return next;
      }),
    [],
  );
  const reveal = useCallback((key: string, lines: number) => setRevealed((r) => ({ ...r, [key]: lines })), []);
  const onPosition = useCallback((key: string) => mantra && savePosition(mantra.id, key), [mantra, savePosition]);

  if (!mantra) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.bg }}>
        <Stack.Screen options={{ title: 'Not found' }} />
        <Text style={{ color: theme.text }}>Text not found.</Text>
      </View>
    );
  }

  const ctx: ReaderState = { mantra, choices, opened, toggleMeaning, highlight, practice, revealed, reveal };
  const isFav = favorites.includes(mantra.id);
  const Layout = settings.layout === 'book' ? BookReader : ScrollReader;

  return (
    <ReaderContext.Provider value={ctx}>
      <View style={{ flex: 1, backgroundColor: theme.bg }} {...pinch.panHandlers}>
        <Stack.Screen
          options={{
            title: mantra.titleEn,
            headerRight: () => (
              <View style={{ flexDirection: 'row', gap: 20 }}>
                <Pressable hitSlop={10} onPress={() => setPanelOpen((o) => !o)} accessibilityLabel="Display options">
                  <Ionicons name="text" size={22} color={theme.accent} />
                </Pressable>
                <Pressable hitSlop={10} onPress={() => toggleFavorite(mantra.id)} accessibilityLabel={isFav ? 'Remove favourite' : 'Add favourite'}>
                  <Ionicons name={isFav ? 'star' : 'star-outline'} size={22} color={theme.accent} />
                </Pressable>
              </View>
            ),
          }}
        />
        {panelOpen && (
          <DisplayPanel
            mantra={mantra}
            rows={rows}
            practice={practice}
            setPractice={(v) => {
              setPractice(v);
              setRevealed({});
            }}
            onJump={(key) => {
              handle.current?.jumpToKey(key);
              setPanelOpen(false);
            }}
          />
        )}
        <Layout key={settings.layout} rows={rows} initialKey={openAt} onPosition={onPosition} ref={handle} />
        {pinch.preview !== null && (
          <View pointerEvents="none" style={{ position: 'absolute', top: 16, alignSelf: 'center', paddingHorizontal: 14, paddingVertical: 6, borderRadius: 16, backgroundColor: theme.accent }}>
            <Text style={{ color: theme.onAccent, fontSize: 15, fontWeight: '700' }}>Text size {Math.round(pinch.preview * 100)}%</Text>
          </View>
        )}
      </View>
    </ReaderContext.Provider>
  );
}
