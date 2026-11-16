import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { router, type Href } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { categoryById, getMantraInfo, mantrasInCategory, scriptFor, type Mantra, type Section, type Verse } from '../../data';
import { bookNeighbours, isBookUnit, wholePartNeighbours } from '../../data/books';
import { leading, meaningFont, scriptFont } from '../../lib/fonts';
import { MEANING_BUTTON, meaningsToShow, primaryLang, summaryFor } from '../../lib/meaning';
import { planStatus } from '../../lib/plans';
import { useI18n } from '../../lib/i18n';
import { useRoutineDay, useSettings } from '../../lib/settings';

import { reportCorrection, shareVerse } from '../../lib/share';
import { bindDandas, translit, translitInline, translitTitle, verseNumber } from '../../lib/transliterate';
import { SankalpaCard } from '../PanchangaCard';
import { Chip } from '../ui';
import { useReader } from './context';
import { plain } from '../../lib/plain';

const getMantraTitle = (id: string) => getMantraInfo(id)?.titleEn;

/** Small ornamental rule, as in printed stotra books. */
export function Ornament({ small }: { small?: boolean }) {
  const { theme } = useSettings();
  return (
    <View style={[b.ornamentRow, small && { marginVertical: 8 }]} accessibilityElementsHidden importantForAccessibility="no">
      <View style={[b.rule, { backgroundColor: theme.ornament }]} />
      <Text style={{ color: theme.ornament, fontSize: small ? 12 : 16, marginHorizontal: 10 }}>❁</Text>
      <View style={[b.rule, { backgroundColor: theme.ornament }]} />
    </View>
  );
}

/** Title page / introduction of a text. */
export function IntroBlock({ book }: { book?: boolean }) {
  const { theme, settings, update } = useSettings();
  const { mantra, choices } = useReader();
  const script = settings.script;
  const pLang = primaryLang(settings.meaningLang, script);
  const preferKn = pLang === 'kn';
  const summary = summaryFor(mantra, pLang);
  const scale = settings.fontScale;
  // The title of a Tamil-language text stays in Tamil: Tamil font and line height.
  const titleScript = scriptFor(mantra, script);
  const titleFont = scriptFont(titleScript, settings.bookFonts);
  return (
    <View style={[b.intro, book && { alignItems: 'center' }]}>
      {book && (
        <Text style={{ color: theme.ornament, fontSize: 18, fontFamily: scriptFont('devanagari', settings.bookFonts), marginBottom: 12 }}>
          {translit('॥ श्रीः ॥', script)}
        </Text>
      )}
      <Text
        style={{
          color: theme.accent,
          fontSize: 30 * scale,
          lineHeight: 30 * scale * leading(titleScript, settings.bookFonts),
          fontFamily: titleFont,
          fontWeight: titleFont ? undefined : '700',
          textAlign: book ? 'center' : 'left',
        }}
      >
        {translitTitle(mantra.title, script)}
      </Text>
      <Text style={{ color: theme.text, fontSize: 16, fontFamily: settings.bookFonts ? 'BookSerifBold' : undefined, fontWeight: settings.bookFonts ? undefined : '600', textAlign: book ? 'center' : 'left', marginTop: 4 }}>
        {mantra.titleEn}
      </Text>
      <Text style={{ color: theme.textMuted, fontSize: 13, marginTop: 4, textAlign: book ? 'center' : 'left' }} numberOfLines={3}>
        {plain([categoryById[mantra.category]?.titleEn, mantra.deity, mantra.source].filter(Boolean).join(' · '))}
      </Text>
      {book && <Ornament />}
      {/* Choices first: they decide which steps follow. */}
      <View style={{ alignSelf: 'stretch' }}>
        {mantra.variants?.map((v) => (
          <View key={v.key} style={[b.variantBox, { borderColor: theme.cardBorder, backgroundColor: theme.card }]}>
            <Text style={{ color: theme.textMuted, fontSize: 13, fontWeight: '700', marginBottom: 6 }}>
              {preferKn && v.titleKn ? v.titleKn : v.title}
            </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
              {v.options.map((o) => (
                <Chip
                  key={o.id}
                  label={preferKn && o.labelKn ? o.labelKn : o.label}
                  active={choices[v.key] === o.id}
                  onPress={() => update({ variants: { ...settings.variants, [v.key]: o.id } })}
                />
              ))}
            </View>
          </View>
        ))}
      </View>
      <Text
        style={{
          color: theme.textMuted,
          fontSize: 15,
          marginTop: book ? 0 : 10,
          lineHeight: summary.lang === 'en' ? 22 : 25,
          fontFamily: summary.lang === 'en' ? (settings.bookFonts ? 'BookSerif' : undefined) : meaningFont(summary.lang, settings.bookFonts),
          textAlign: book ? 'center' : 'left',
          alignSelf: 'stretch',
        }}
      >
        {summary.lang === 'en' ? translitInline(summary.text, script) : summary.text}
      </Text>
      <View style={{ alignSelf: 'stretch' }}>
        {(mantra.category === 'sandhya' || mantra.category === 'puja') && <SankalpaCard />}
        {mantra.contentNote && (
          <View style={[b.notice, { backgroundColor: theme.warningBg }]}>
            <Ionicons name="information-circle" size={18} color={theme.warningText} />
            <Text style={{ color: theme.warningText, flex: 1, fontSize: 14, lineHeight: 20 }}>
              {translitInline(mantra.contentNote, script)}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

export function SectionBlock({ section, book }: { section: Section; book?: boolean }) {
  const { theme, settings } = useSettings();
  const { mantra } = useReader();
  const script = scriptFor(mantra, settings.script);
  const scale = settings.fontScale;
  const font = scriptFont(script, settings.bookFonts);
  const align = book ? 'center' : 'left';
  return (
    <View style={[b.section, { borderColor: theme.cardBorder }, book && { borderTopWidth: 0, alignItems: 'center' }]}>
      {book && <Ornament small />}
      {section.title && (
        <Text style={{ color: theme.accent, fontSize: 22 * scale, lineHeight: 22 * scale * leading(script, settings.bookFonts), fontFamily: font, fontWeight: font ? undefined : '700', textAlign: align }}>
          {translitTitle(section.title, script)}
        </Text>
      )}
      {section.titleEn && (
        <Text style={{ color: theme.textMuted, fontSize: 13, fontWeight: '600', textTransform: 'uppercase', letterSpacing: 1, textAlign: align }}>
          {section.titleEn}
        </Text>
      )}
      {section.note && <SectionNote section={section} align={align} />}
    </View>
  );
}

/** A step's instructions; long ones show three lines with "more" so the mantras stay in view. */
function SectionNote({ section, align }: { section: Section; align: 'center' | 'left' }) {
  const { tr } = useI18n();
  const { theme, settings } = useSettings();
  const preferKn = primaryLang(settings.meaningLang, settings.script) === 'kn';
  const kn = preferKn && !!section.noteKn;
  const text = kn ? section.noteKn! : translitInline(section.note!, settings.script);
  const long = text.length > 220;
  const [open, setOpen] = useState(false);
  return (
    <View style={{ alignSelf: 'stretch', marginTop: 6 }}>
      <Text
        numberOfLines={long && !open ? 3 : undefined}
        style={{ color: theme.textMuted, fontSize: 14, fontStyle: kn ? 'normal' : 'italic', lineHeight: 21, textAlign: long ? 'left' : align, fontFamily: kn ? meaningFont('kn', settings.bookFonts) : undefined }}
      >
        {text}
      </Text>
      {long && (
        <Pressable onPress={() => setOpen(!open)} hitSlop={8} accessibilityRole="button" style={{ alignSelf: long ? 'flex-start' : 'center', marginTop: 2 }}>
          <Text style={{ color: theme.accent, fontSize: 13, fontWeight: kn ? undefined : '600', fontFamily: kn ? meaningFont('kn', settings.bookFonts) : undefined }}>{open ? tr('Less ▴') : kn ? 'ಇನ್ನಷ್ಟು · More ▾' : tr('More ▾')}</Text>
        </Pressable>
      )}
    </View>
  );
}

export function VerseBlock({ verse, rowKey, book }: { verse: Verse; rowKey: string; book?: boolean }) {
  const { theme, settings, bookmarks, toggleBookmark } = useSettings();
  const { tr } = useI18n();
  const { mantra, opened, toggleMeaning, highlight, practice, revealed, reveal } = useReader();
  // The verse of a Tamil-language text is in Tamil whatever the reading script (font, size,
  // digits), and has no second script: it would only repeat the same Tamil lines.
  const script = scriptFor(mantra, settings.script);
  const scale = settings.fontScale;
  const second = mantra.sourceScript !== 'tamil' && settings.secondaryScript && settings.secondaryScript !== script ? settings.secondaryScript : null;
  // Meanings and notes follow the reader's own script and language.
  const meanings = meaningsToShow(verse.meaning, settings.meaningLang, settings.script);
  const pLang = primaryLang(settings.meaningLang, settings.script);
  const isOpen = opened.has(rowKey);
  const showMeaning = settings.alwaysShowMeanings || isOpen;
  const marked = bookmarks.some((x) => x.mantraId === mantra.id && x.key === rowKey);
  const center = book && settings.centerVerses;
  const font = scriptFont(script, settings.bookFonts);
  // The text ends with ॥; when a number follows, render a single "॥ n ॥" instead of "॥ ॥ n ॥".
  const main = bindDandas(translit(verse.n !== undefined ? verse.text.replace(/\s*॥\s*$/, '') : verse.text, script));
  const fs = (script === 'iast' ? 19 : 22) * scale;
  const lh = fs * leading(script, settings.bookFonts);
  const label = settings.meaningLang === 'both' && pLang !== 'en' ? `${MEANING_BUTTON[pLang]} · Meaning` : MEANING_BUTTON[pLang];

  // Memorisation practice: show the first N lines, hide the rest until tapped.
  const lines = main.split('\n');
  const shown = practice ? Math.min(lines.length, revealed[rowKey] ?? 1) : lines.length;
  const hiddenCount = lines.length - shown;
  const numberText = verse.n !== undefined ? ' ' + verseNumber(verse.n, script) : '';

  return (
    // Not one accessibility element: on iOS that would hide the Meaning, bookmark and share
    // buttons inside it from VoiceOver. The verse text (with its number) is read as one.
    <View style={[b.verse, rowKey === highlight && { backgroundColor: theme.accentSoft }, center && { alignItems: 'center' }]}>
      <Text style={{ color: theme.text, fontSize: fs, lineHeight: lh, fontFamily: font, textAlign: center ? 'center' : 'left', alignSelf: 'stretch' }} selectable={!practice}>
        {lines.slice(0, shown).join('\n')}
        {hiddenCount === 0 && verse.n !== undefined && <Text style={{ color: theme.verseNumber }}>{numberText}</Text>}
      </Text>
      {hiddenCount > 0 && (
        <Pressable onPress={() => reveal(rowKey, shown + 1)} accessibilityRole="button" accessibilityLabel={tr('Reveal next line')} style={b.practiceHidden}>
          {Array.from({ length: hiddenCount }, (_, i) => (
            <View key={i} style={[b.practiceBar, { backgroundColor: theme.accentSoft, height: lh * 0.55, marginVertical: lh * 0.225 }]} />
          ))}
          <Text style={{ color: theme.accent, fontSize: 12, marginTop: 2 }}>{tr('Tap to reveal the next line')}</Text>
        </Pressable>
      )}
      {second && (
        <Text style={{ color: theme.textMuted, fontSize: 16 * scale, lineHeight: 16 * scale * leading(second, settings.bookFonts), marginTop: 6, fontFamily: scriptFont(second, settings.bookFonts), textAlign: center ? 'center' : 'left', alignSelf: 'stretch' }} selectable>
          {bindDandas(translit(verse.text, second))}
        </Text>
      )}
      <View style={[b.actions, center && { justifyContent: 'center' }]}>
        {meanings.length > 0 && !settings.alwaysShowMeanings && (
          <Pressable
            onPress={() => toggleMeaning(rowKey)}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityState={{ expanded: isOpen }}
            style={[b.meaningToggle, { borderColor: theme.cardBorder, backgroundColor: isOpen ? theme.accentSoft : 'transparent' }]}
          >
            <Text style={{ color: theme.accent, fontSize: 13, fontWeight: pLang === 'en' ? '600' : undefined, fontFamily: pLang === 'en' ? undefined : meaningFont(pLang, settings.bookFonts) }}>
              {label} {isOpen ? '▴' : '▾'}
            </Text>
          </Pressable>
        )}
        <Pressable hitSlop={8} onPress={() => toggleBookmark(mantra.id, rowKey)} accessibilityLabel={marked ? tr('Remove bookmark') : tr('Bookmark this verse')} style={b.iconBtn}>
          <Ionicons name={marked ? 'bookmark' : 'bookmark-outline'} size={16} color={marked ? theme.accent : theme.textMuted} />
        </Pressable>
        <Pressable hitSlop={8} onPress={() => shareVerse(mantra, verse, script, meanings[0]?.text)} accessibilityLabel={tr('Share this verse')} style={b.iconBtn}>
          <Ionicons name="share-social-outline" size={16} color={theme.textMuted} />
        </Pressable>
        <Pressable hitSlop={8} onPress={() => reportCorrection(mantra, verse, rowKey)} accessibilityLabel={tr('Report a correction')} style={b.iconBtn}>
          <Ionicons name="flag-outline" size={15} color={theme.textMuted} />
        </Pressable>
      </View>
      {showMeaning &&
        meanings.map(({ lang, text }) => (
          <Text
            key={lang}
            style={[
              b.meaning,
              {
                color: theme.textMuted,
                borderColor: theme.ornament,
                fontSize: (lang !== 'en' ? 16 : 15) * Math.min(scale, 1.4),
                lineHeight: (lang !== 'en' ? 26 : 22) * Math.min(scale, 1.4),
                fontFamily: meaningFont(lang, settings.bookFonts),
                fontStyle: lang === 'en' && !settings.bookFonts ? 'italic' : 'normal',
                alignSelf: 'stretch',
              },
            ]}
          >
            {lang === 'en' ? translitInline(text, settings.script) : text}
          </Text>
        ))}
    </View>
  );
}

/** Pārāyaṇa controls for this text: mark read (read-through plans) or count a recitation (vows). */
export function PlanControls({ mantraId }: { mantraId: string }) {
  const { theme, plans, markPlanItemRead, addRecitation } = useSettings();
  const { tr } = useI18n();
  const reading = plans.filter((p) => p.kind === 'readthrough' && p.items.includes(mantraId) && !planStatus(p).finished);
  const vows = plans.filter((p) => p.kind === 'vow' && p.items[0] === mantraId && !planStatus(p).finished);
  if (!reading.length && !vows.length) return null;
  const isRead = reading.some((p) => p.read.includes(mantraId));
  return (
    <View style={[b.planBox, { borderColor: theme.cardBorder, backgroundColor: theme.card }]}>
      <Text style={{ color: theme.textMuted, fontSize: 12, fontWeight: '700', letterSpacing: 0.8 }}>{tr('PARAYANA')}</Text>
      {reading.length > 0 && (
        <Pressable onPress={() => markPlanItemRead(mantraId, !isRead)} style={[b.planButton, { backgroundColor: isRead ? theme.accentSoft : theme.accent }]}>
          <Text style={{ color: isRead ? theme.accent : theme.onAccent, fontWeight: '700', fontSize: 15 }}>
            {isRead ? tr('✓ Read') : tr('Mark as read')}
          </Text>
        </Pressable>
      )}
      {vows.map((p) => {
        const st = planStatus(p);
        return (
          <View key={p.id} style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10 }}>
            <Text style={{ color: theme.text, flex: 1 }}>
              {tr('{title}: today {done}/{total}', { title: p.title, done: p.perDay - st.todayRemaining, total: p.perDay })}
            </Text>
            <Chip label="+1" active onPress={() => addRecitation(p.id, 1)} />
          </View>
        );
      })}
    </View>
  );
}

/** Previous / next buttons for texts read in sequence (e.g. Gita chapters). */
export function SeriesNav({ mantra }: { mantra: Mantra }) {
  const { theme, settings } = useSettings();
  const { tr } = useI18n();
  if (mantra.order === undefined) return null;
  const seriesId = mantra.series ?? mantra.category;
  const series = mantrasInCategory(mantra.category).filter((m) => m.order !== undefined && (m.series ?? m.category) === seriesId);
  const i = series.findIndex((m) => m.id === mantra.id);
  let prev: Mantra | undefined = series[i - 1];
  let next: Mantra | undefined = series[i + 1];
  // The long works: sarga after sarga across the kandas; from the ends of the Sundarakanda
  // (a section of the library and the Ramayana's fifth kanda) on to the kandas around it.
  const info = (id?: string) => (id ? getMantraInfo(id) : undefined);
  if (isBookUnit(mantra.id)) {
    const nb = bookNeighbours(mantra.id);
    prev = info(nb?.prev);
    next = info(nb?.next);
  } else {
    const nb = wholePartNeighbours(mantra.id);
    prev ??= info(nb?.prev);
    next ??= info(nb?.next);
  }
  const button = (m: Mantra, label: string, align: 'flex-start' | 'flex-end') => (
    <Pressable
      key={m.id}
      onPress={() => router.replace(`/mantra/${m.id}` as Href)}
      style={({ pressed }) => [b.navButton, { borderColor: theme.cardBorder, backgroundColor: theme.card, alignItems: align, opacity: pressed ? 0.7 : 1 }]}
    >
      <Text style={{ color: theme.textMuted, fontSize: 12, fontWeight: '600' }}>{label}</Text>
      <Text style={{ color: theme.accent, fontSize: 16, fontFamily: scriptFont(scriptFor(m, settings.script), settings.bookFonts) }} numberOfLines={1}>
        {translitTitle(m.title, settings.script)}
      </Text>
    </Pressable>
  );
  return (
    <View style={b.navRow}>
      {prev ? button(prev, tr('← Previous'), 'flex-start') : <View style={{ flex: 1 }} />}
      {next ? button(next, tr('Next →'), 'flex-end') : <View style={{ flex: 1 }} />}
    </View>
  );
}

/** Closing matter: इति, pārāyaṇa controls, previous/next. */
/** End of a text: tick it off in today's routine (and go to the next), or add it to the routine. */
function RoutineControl({ mantraId }: { mantraId: string }) {
  const { tr } = useI18n();
  const { theme, settings, routine, routineDone, setRoutine, setRoutineDone } = useSettings();
  const day = useRoutineDay(settings.city);
  const inRoutine = routine.includes(mantraId);
  const done = (routineDone[day] ?? []).includes(mantraId);
  // The next text still to do today; an id no longer in the library is passed over, not a dead end.
  const next = routine.find((id) => id !== mantraId && !(routineDone[day] ?? []).includes(id) && getMantraTitle(id) !== undefined);
  const nextMantra = next ? getMantraTitle(next) : undefined;
  if (!inRoutine) {
    return (
      <Pressable onPress={() => setRoutine([...routine, mantraId])} style={{ alignSelf: 'center', marginTop: 20, padding: 8 }} accessibilityRole="button">
        <Text style={{ color: theme.textMuted, fontSize: 14 }}>{tr('＋ Add to my daily routine')}</Text>
      </Pressable>
    );
  }
  return (
    <View style={[b.planBox, { borderColor: theme.cardBorder, backgroundColor: theme.card }]}>
      <Pressable
        onPress={() => setRoutineDone(day, mantraId, !done)}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: done }}
        style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
      >
        <Ionicons name={done ? 'checkmark-circle' : 'ellipse-outline'} size={24} color={done ? theme.accent : theme.textMuted} />
        <Text style={{ color: theme.text, fontSize: 16, fontWeight: '600', flex: 1 }}>{done ? tr('Done for today') : tr('Mark done for today')}</Text>
      </Pressable>
      {done && next && nextMantra && (
        <Pressable onPress={() => router.replace(`/mantra/${next}` as Href)} style={[b.planButton, { backgroundColor: theme.accent }]} accessibilityRole="button">
          <Text style={{ color: theme.onAccent, fontSize: 15, fontWeight: '700' }}>{tr('Next in routine: {title} ›', { title: nextMantra })}</Text>
        </Pressable>
      )}
    </View>
  );
}

export function EndMatter() {
  const { theme, settings } = useSettings();
  const { tr } = useI18n();
  const { mantra } = useReader();
  return (
    <View style={{ paddingBottom: 24 }}>
      <Ornament />
      <Text style={{ color: theme.ornament, textAlign: 'center', fontSize: 18, fontFamily: scriptFont(settings.script, settings.bookFonts) }}>
        {translit('॥ हरिः ॐ ॥', settings.script)}
      </Text>
      <RoutineControl mantraId={mantra.id} />
      <PlanControls mantraId={mantra.id} />
      {(mantra.category === 'nitya' || mantra.id.endsWith('-mantra')) && (
        <Pressable onPress={() => router.push(`/japa?mantra=${mantra.id}` as Href)} style={[b.planBox, { borderColor: theme.cardBorder, backgroundColor: theme.card, flexDirection: 'row', alignItems: 'center', gap: 10 }]}>
          <Ionicons name="ellipse-outline" size={20} color={theme.accent} />
          <Text style={{ color: theme.accent, fontSize: 15, fontWeight: '600', flex: 1 }}>{tr('Count japa')}</Text>
          <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
        </Pressable>
      )}
      <SeriesNav mantra={mantra} />
    </View>
  );
}

export const b = StyleSheet.create({
  intro: { padding: 20, paddingBottom: 8 },
  variantBox: { marginTop: 14, padding: 12, borderRadius: 12, borderWidth: 1 },
  notice: { flexDirection: 'row', gap: 8, padding: 12, borderRadius: 10, marginTop: 14 },
  section: { marginTop: 18, marginHorizontal: 20, paddingTop: 14, borderTopWidth: 1, marginBottom: 4 },
  verse: { paddingHorizontal: 20, paddingVertical: 12 },
  meaning: { marginTop: 8, paddingLeft: 10, borderLeftWidth: 2 },
  meaningToggle: { paddingHorizontal: 10, paddingVertical: 3, borderRadius: 12, borderWidth: 1 },
  actions: { flexDirection: 'row', alignItems: 'center', gap: 14, marginTop: 8 },
  iconBtn: { padding: 2 },
  practiceHidden: { alignSelf: 'stretch' },
  practiceBar: { borderRadius: 6, alignSelf: 'stretch' },
  planBox: { marginHorizontal: 16, marginTop: 24, padding: 14, borderRadius: 14, borderWidth: 1 },
  planButton: { marginTop: 10, padding: 12, borderRadius: 12, alignItems: 'center' },
  navRow: { flexDirection: 'row', gap: 10, marginHorizontal: 16, marginTop: 24 },
  navButton: { flex: 1, padding: 12, borderRadius: 12, borderWidth: 1, gap: 2 },
  ornamentRow: { flexDirection: 'row', alignItems: 'center', alignSelf: 'stretch', marginVertical: 14, marginHorizontal: 24 },
  rule: { flex: 1, height: StyleSheet.hairlineWidth * 2, opacity: 0.6 },
});
