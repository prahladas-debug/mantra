import { Ionicons } from '@expo/vector-icons';
import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Chip, ScriptPicker } from '../../components/ui';
import { categoryById, getMantra, type Mantra, type Section, type Verse } from '../../data';
import { useSettings } from '../../lib/settings';
import type { ThemeName } from '../../lib/theme';
import { bindDandas, translit, translitInline, translitTitle, verseNumber } from '../../lib/transliterate';

type Row =
  | { kind: 'intro'; key: string }
  | { kind: 'section'; key: string; section: Section; si: number }
  | { kind: 'verse'; key: string; verse: Verse; si: number; vi: number };

function flatten(m: Mantra): Row[] {
  const rows: Row[] = [{ kind: 'intro', key: 'intro' }];
  m.sections.forEach((section, si) => {
    if (section.title || section.titleEn || section.note) rows.push({ kind: 'section', key: `s${si}`, section, si });
    section.verses.forEach((verse, vi) => rows.push({ kind: 'verse', key: `v${si}-${vi}`, verse, si, vi }));
  });
  return rows;
}

const KEEP_AWAKE_TAG = 'reader';

export default function Reader() {
  const params = useLocalSearchParams<{ id: string; si?: string; vi?: string }>();
  const mantra = getMantra(params.id);
  const { theme, settings, update, favorites, toggleFavorite, markRead } = useSettings();
  const [panelOpen, setPanelOpen] = useState(false);
  const [highlight, setHighlight] = useState<string | null>(null);
  const listRef = useRef<FlatList<Row>>(null);

  const rows = useMemo(() => (mantra ? flatten(mantra) : []), [mantra]);

  useEffect(() => {
    if (mantra) markRead(mantra.id);
  }, [mantra, markRead]);

  useEffect(() => {
    if (!settings.keepAwake) return;
    activateKeepAwakeAsync(KEEP_AWAKE_TAG).catch(() => {});
    return () => {
      deactivateKeepAwake(KEEP_AWAKE_TAG).catch(() => {});
    };
  }, [settings.keepAwake]);

  // Jump to a verse when opened from search.
  useEffect(() => {
    if (params.si === undefined || params.vi === undefined) return;
    const key = `v${params.si}-${params.vi}`;
    const index = rows.findIndex((r) => r.key === key);
    if (index < 0) return;
    setHighlight(key);
    const t1 = setTimeout(() => scrollTo(index), 250);
    const t2 = setTimeout(() => setHighlight(null), 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [params.si, params.vi, rows]);

  function scrollTo(index: number) {
    listRef.current?.scrollToIndex({ index, viewPosition: 0.1, animated: true });
  }

  if (!mantra) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.bg }}>
        <Stack.Screen options={{ title: 'Not found' }} />
        <Text style={{ color: theme.text }}>Text not found.</Text>
      </View>
    );
  }

  const script = settings.script;
  const second = settings.secondaryScript && settings.secondaryScript !== script ? settings.secondaryScript : null;
  const scale = settings.fontScale;
  const isFav = favorites.includes(mantra.id);
  const sectionsWithTitles = mantra.sections
    .map((s, si) => ({ s, si }))
    .filter(({ s }) => s.title || s.titleEn);

  const renderRow = ({ item }: { item: Row }) => {
    switch (item.kind) {
      case 'intro':
        return (
          <View style={r.intro}>
            <Text style={[r.title, { color: theme.accent, fontSize: 28 * scale, lineHeight: 42 * scale }]}>
              {translitTitle(mantra.title, script)}
            </Text>
            <Text style={{ color: theme.text, fontSize: 16, fontWeight: '600' }}>{mantra.titleEn}</Text>
            <Text style={{ color: theme.textMuted, fontSize: 13, marginTop: 4 }}>
              {[categoryById[mantra.category]?.titleEn, mantra.deity, mantra.source].filter(Boolean).join(' · ')}
            </Text>
            <Text style={{ color: theme.textMuted, fontSize: 15, marginTop: 10, lineHeight: 22 }}>{translitInline(mantra.summary, script)}</Text>
            {mantra.contentNote && (
              <View style={[r.notice, { backgroundColor: theme.warningBg }]}>
                <Ionicons name="information-circle" size={18} color={theme.warningText} />
                <Text style={{ color: theme.warningText, flex: 1, fontSize: 14, lineHeight: 20 }}>
                  {translitInline(mantra.contentNote, script)}
                </Text>
              </View>
            )}
          </View>
        );
      case 'section':
        return (
          <View style={[r.section, { borderColor: theme.cardBorder }]}>
            {item.section.title && (
              <Text style={{ color: theme.accent, fontSize: 21 * scale, lineHeight: 32 * scale, fontWeight: '700' }}>
                {translitTitle(item.section.title, script)}
              </Text>
            )}
            {item.section.titleEn && (
              <Text style={{ color: theme.textMuted, fontSize: 14, fontWeight: '600', textTransform: 'uppercase', letterSpacing: 0.8 }}>
                {item.section.titleEn}
              </Text>
            )}
            {item.section.note && (
              <Text style={{ color: theme.textMuted, fontSize: 14, fontStyle: 'italic', marginTop: 6, lineHeight: 20 }}>
                {translitInline(item.section.note, script)}
              </Text>
            )}
          </View>
        );
      case 'verse': {
        const { verse } = item;
        // The text ends with ॥; when a number follows, render a single "॥ n ॥" instead of "॥ ॥ n ॥".
        const main = bindDandas(translit(verse.n !== undefined ? verse.text.replace(/\s*॥\s*$/, '') : verse.text, script));
        const fs = (script === 'iast' ? 19 : 22) * scale;
        return (
          <View
            style={[r.verse, item.key === highlight && { backgroundColor: theme.accentSoft }]}
            accessible
          >
            <Text style={{ color: theme.text, fontSize: fs, lineHeight: fs * 1.65 }} selectable>
              {main}
              {verse.n !== undefined && (
                <Text style={{ color: theme.verseNumber, fontWeight: '600' }}>{'\u00A0' + verseNumber(verse.n, script)}</Text>
              )}
            </Text>
            {second && (
              <Text style={{ color: theme.textMuted, fontSize: 16 * scale, lineHeight: 24 * scale, marginTop: 6 }} selectable>
                {bindDandas(translit(verse.text, second))}
              </Text>
            )}
            {settings.showMeanings && verse.meaning && (
              <Text style={[r.meaning, { color: theme.textMuted, borderColor: theme.accent, fontSize: 15 * Math.min(scale, 1.3) }]}>
                {translitInline(verse.meaning, script)}
              </Text>
            )}
          </View>
        );
      }
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.bg }}>
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
        <View style={[r.panel, { backgroundColor: theme.card, borderColor: theme.cardBorder }]}>
          <PanelLabel>Script</PanelLabel>
          <ScriptPicker value={script} onChange={(v) => v && update({ script: v })} />
          <PanelLabel>Also show below each verse</PanelLabel>
          <ScriptPicker allowNone value={settings.secondaryScript} onChange={(v) => update({ secondaryScript: v })} />
          <View style={r.panelRow}>
            <Chip label="A−" onPress={() => update({ fontScale: Math.max(0.7, +(scale - 0.1).toFixed(1)) })} />
            <Text style={{ color: theme.text, minWidth: 48, textAlign: 'center' }}>{Math.round(scale * 100)}%</Text>
            <Chip label="A+" onPress={() => update({ fontScale: Math.min(2.2, +(scale + 0.1).toFixed(1)) })} />
            <View style={{ width: 12 }} />
            {(['light', 'sepia', 'dark'] as ThemeName[]).map((t) => (
              <Chip key={t} label={t[0].toUpperCase() + t.slice(1)} active={theme.name === t && settings.theme !== 'system'} onPress={() => update({ theme: t })} />
            ))}
          </View>
          <View style={r.panelRow}>
            <Chip label={settings.showMeanings ? 'Meanings: on' : 'Meanings: off'} active={settings.showMeanings} onPress={() => update({ showMeanings: !settings.showMeanings })} />
          </View>
          {sectionsWithTitles.length > 1 && (
            <>
              <PanelLabel>Jump to section</PanelLabel>
              <View style={[r.panelRow, { flexWrap: 'wrap' }]}>
                {sectionsWithTitles.map(({ s, si }) => (
                  <Chip
                    key={si}
                    label={s.titleEn ?? translit(s.title!, script)}
                    onPress={() => {
                      const index = rows.findIndex((row) => row.key === `s${si}`);
                      if (index >= 0) scrollTo(index);
                      setPanelOpen(false);
                    }}
                  />
                ))}
              </View>
            </>
          )}
        </View>
      )}

      <FlatList
        ref={listRef}
        data={rows}
        keyExtractor={(row) => row.key}
        renderItem={renderRow}
        extraData={[settings, highlight]}
        initialNumToRender={20}
        windowSize={11}
        contentContainerStyle={{ paddingBottom: 48 }}
        onScrollToIndexFailed={(info) => {
          listRef.current?.scrollToOffset({ offset: info.averageItemLength * info.index, animated: false });
          setTimeout(() => scrollTo(info.index), 120);
        }}
      />
    </View>
  );
}

function PanelLabel({ children }: { children: React.ReactNode }) {
  const { theme } = useSettings();
  return <Text style={[r.panelLabel, { color: theme.textMuted }]}>{children}</Text>;
}

const r = StyleSheet.create({
  intro: { padding: 20, paddingBottom: 8 },
  title: { fontWeight: '700', marginBottom: 4 },
  notice: { flexDirection: 'row', gap: 8, padding: 12, borderRadius: 10, marginTop: 14 },
  section: { marginTop: 18, marginHorizontal: 20, paddingTop: 14, borderTopWidth: 1, marginBottom: 4 },
  verse: { paddingHorizontal: 20, paddingVertical: 12 },
  meaning: { marginTop: 8, paddingLeft: 10, borderLeftWidth: 2, lineHeight: 21, fontStyle: 'italic' },
  panel: { borderBottomWidth: 1, paddingVertical: 10, gap: 4 },
  panelLabel: { fontSize: 12, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.8, marginHorizontal: 16, marginTop: 8, marginBottom: 4 },
  panelRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, gap: 8, marginTop: 8 },
});
