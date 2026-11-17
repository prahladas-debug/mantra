import { MaterialCommunityIcons } from '@expo/vector-icons';
import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, Text, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AutoControl } from '../../components/reader/AutoControl';
import { BookReader, isSpread, type BookHandle } from '../../components/reader/BookReader';
import { FindSheet, type FindHit } from '../../components/reader/FindSheet';
import { MarkSheet } from '../../components/reader/MarkSheet';
import { useVolumeKeys } from '../../components/reader/useVolumeKeys';
import { ReaderContext, type ReaderState } from '../../components/reader/context';
import { ContentsSheet, shownSections } from '../../components/reader/ContentsSheet';
import { DisplayPanel } from '../../components/reader/DisplayPanel';
import { autoPace, flatten } from '../../components/reader/rows';
import { ScrollReader } from '../../components/reader/ScrollReader';
import { usePinch } from '../../components/reader/usePinch';
import { getMantra, getMantraInfo, type Mantra } from '../../data';
import { bookNeighbours, isBookUnit, loadBookUnit, peekBookUnit, prefetchBookUnit } from '../../lib/books';
import { useI18n } from '../../lib/i18n';
import { nameOf } from '../../lib/transliterate';
import { useSettings } from '../../lib/settings';
import { choicesFor } from '../../lib/variants';

const KEEP_AWAKE_TAG = 'reader';

/**
 * A text opened for reading. Texts of the library are at hand; a sarga/adhyaya of the Ramayana or
 * Mahabharata is read from its asset first (src/lib/books.ts), with a short loading state.
 */
export default function Reader() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const book = isBookUnit(id);
  return book ? <BookUnitReader key={id} id={id} /> : <ReaderView key={id} mantra={getMantra(id)} />;
}

function BookUnitReader({ id }: { id: string }) {
  const { theme, settings } = useSettings();
  const { lang, tr } = useI18n();
  const [mantra, setMantra] = useState<Mantra | undefined>(() => peekBookUnit(id));
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (mantra) return;
    let live = true;
    loadBookUnit(id).then(
      (m) => live && setMantra(m),
      (e: Error) => live && setError(e.message),
    );
    return () => {
      live = false;
    };
  }, [id, mantra, attempt]);

  // Read the next sarga ahead, so Next opens at once.
  useEffect(() => {
    if (mantra) prefetchBookUnit(bookNeighbours(id)?.next);
  }, [id, mantra]);

  if (mantra) return <ReaderView mantra={mantra} />;
  const info = getMantraInfo(id);
  const name = info ? (lang === 'en' ? info.titleEn : nameOf(info, settings.script)) : undefined;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 14, padding: 24, backgroundColor: theme.bg }}>
      <Stack.Screen options={{ title: name ?? '' }} />
      {error ? (
        <>
          <Text style={{ color: theme.text, fontSize: 16, textAlign: 'center' }}>{tr('This {title} could not be opened.', { title: name ?? tr('text') })}</Text>
          <Text style={{ color: theme.textMuted, fontSize: 14, textAlign: 'center' }}>{error}</Text>
          <Pressable
            onPress={() => {
              setError(null);
              setAttempt((n) => n + 1);
            }}
            accessibilityRole="button"
            style={{ paddingHorizontal: 18, paddingVertical: 10, borderRadius: 20, backgroundColor: theme.accent }}
          >
            <Text style={{ color: theme.onAccent, fontWeight: '700' }}>{tr('Try again')}</Text>
          </Pressable>
        </>
      ) : (
        <>
          <ActivityIndicator color={theme.accent} />
          <Text style={{ color: theme.textMuted, fontSize: 14 }}>{tr('Opening…')}</Text>
        </>
      )}
    </View>
  );
}

function ReaderView({ mantra }: { mantra: Mantra | undefined }) {
  const params = useLocalSearchParams<{ id: string; si?: string; vi?: string }>();
  const { lang, tr } = useI18n();
  const { theme, settings, update, favorites, toggleFavorite, markRead, markFinished, positions, savePosition } = useSettings();
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const setScale = useCallback((fontScale: number) => update({ fontScale }), [update]);
  const pinch = usePinch(settings.fontScale, setScale);
  const [panelOpen, setPanelOpen] = useState(false);
  const [focus, setFocus] = useState(false);
  const [contentsOpen, setContentsOpen] = useState(false);
  const [opened, setOpened] = useState<ReadonlySet<string>>(() => new Set());
  const [practice, setPractice] = useState(false);
  const [revealed, setRevealed] = useState<Record<string, number>>({});
  const handle = useRef<BookHandle | null>(null);
  const [findOpen, setFindOpen] = useState(false);
  const [markKey, setMarkKey] = useState<string | null>(null);
  const [highlightTerm, setHighlightTerm] = useState<string | null>(null);
  // Hands-free reading: the control is shown while `autoOn`; it runs while `autoPlaying`.
  const [autoOn, setAutoOn] = useState(false);
  const [autoPlaying, setAutoPlaying] = useState(false);
  const pauseAuto = useCallback(() => setAutoPlaying(false), []);

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

  // A verse opened from search, a bookmark or Find stays highlighted for a few seconds.
  useEffect(() => {
    if (!highlight) return;
    const t = setTimeout(() => {
      setHighlight(null);
      setHighlightTerm(null);
    }, 4000);
    return () => clearTimeout(t);
  }, [highlight]);

  // Read to the end once in this sitting: counted for the book's progress and the day's lamp.
  const finishedNow = useRef(false);
  const onFinish = useCallback(() => {
    setAutoPlaying(false);
    if (finishedNow.current || !mantra) return;
    finishedNow.current = true;
    markFinished(mantra.id);
  }, [mantra, markFinished]);

  // Android: the volume buttons turn the page (book) or move a screenful (scroll), when chosen.
  useVolumeKeys(settings.volumeKeys, (dir) => handle.current?.step(dir));

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
        <Stack.Screen options={{ title: tr('Not found') }} />
        <Text style={{ color: theme.text }}>{tr('Text not found.')}</Text>
      </View>
    );
  }

  // A wide page: a tablet, unless its pages are shown two side by side.
  const wide = width >= 720 && !(settings.layout === 'book' && isSpread(width, height));
  const ctx: ReaderState = {
    mantra, choices, opened, toggleMeaning, highlight, practice, revealed, reveal, pinching: pinch.active, focus,
    toggleFocus: () => setFocus((f) => !f),
    highlightTerm, openMark: setMarkKey, wide, autoPlaying, autoPace: autoPace(settings.autoSpeed ?? 4), pauseAuto, onFinish,
  };
  const onFind = (hit: FindHit, term: string) => {
    setFindOpen(false);
    if (hit.inMeaning && !opened.has(hit.key)) toggleMeaning(hit.key);
    handle.current?.jumpToKey(hit.key);
    setHighlight(hit.key);
    setHighlightTerm(term);
  };
  const isFav = favorites.includes(mantra.id);
  const hasContents = shownSections(mantra, rows).length > 1;
  const Layout = settings.layout === 'book' ? BookReader : ScrollReader;

  return (
    <ReaderContext.Provider value={ctx}>
      <View style={{ flex: 1, backgroundColor: theme.bg }} {...pinch.panHandlers}>
        <Stack.Screen
          options={{
            headerShown: !focus,
            title: lang === 'en' ? mantra.titleEn : nameOf(mantra, settings.script),
            headerRight: () => (
              <View style={{ flexDirection: 'row', gap: 18 }}>
                <Pressable hitSlop={10} onPress={() => setFindOpen(true)} accessibilityLabel={tr('Find in this text')}>
                  <MaterialCommunityIcons name="magnify" size={22} color={theme.accent} />
                </Pressable>
                {hasContents && (
                  <Pressable hitSlop={10} onPress={() => setContentsOpen(true)} accessibilityLabel={tr('Contents')}>
                    <MaterialCommunityIcons name="format-list-bulleted" size={22} color={theme.accent} />
                  </Pressable>
                )}
                <Pressable hitSlop={10} onPress={() => setPanelOpen((o) => !o)} accessibilityLabel={tr('Display options')}>
                  <MaterialCommunityIcons name="format-size" size={22} color={theme.accent} />
                </Pressable>
                <Pressable hitSlop={10} onPress={() => toggleFavorite(mantra.id)} accessibilityLabel={isFav ? tr('Remove favourite') : tr('Add favourite')}>
                  <MaterialCommunityIcons name={isFav ? 'star' : 'star-outline'} size={22} color={theme.accent} />
                </Pressable>
              </View>
            ),
          }}
        />
        <DisplayPanel
          visible={panelOpen}
          onClose={() => setPanelOpen(false)}
          practice={practice}
          setPractice={(v) => {
            setPractice(v);
            setRevealed({});
          }}
          onHandsFree={() => {
            setPanelOpen(false);
            setAutoOn(true);
            setAutoPlaying(true);
          }}
        />
        <FindSheet visible={findOpen} onClose={() => setFindOpen(false)} mantra={mantra} rows={rows} onJump={onFind} />
        {markKey && <MarkSheet mantraId={mantra.id} rowKey={markKey} onClose={() => setMarkKey(null)} />}
        <ContentsSheet
          visible={contentsOpen}
          onClose={() => setContentsOpen(false)}
          mantra={mantra}
          rows={rows}
          onJump={(key) => {
            setContentsOpen(false);
            handle.current?.jumpToKey(key);
          }}
        />
        <Layout key={settings.layout} rows={rows} initialKey={openAt} onPosition={onPosition} ref={handle} />
        {autoOn && (
          <AutoControl
            playing={autoPlaying}
            setPlaying={setAutoPlaying}
            onClose={() => {
              setAutoPlaying(false);
              setAutoOn(false);
            }}
            bottom={(settings.layout === 'book' ? (focus ? 24 : 64) : 20) + (settings.layout === 'book' ? 0 : insets.bottom)}
          />
        )}
        {pinch.preview !== null && (
          <View pointerEvents="none" style={{ position: 'absolute', top: 16, alignSelf: 'center', paddingHorizontal: 14, paddingVertical: 6, borderRadius: 16, backgroundColor: theme.accent }}>
            <Text style={{ color: theme.onAccent, fontSize: 16, fontWeight: '700' }}>{tr('Text size {pct}%', { pct: Math.round(pinch.preview * 100) })}</Text>
          </View>
        )}
      </View>
    </ReaderContext.Provider>
  );
}
