/**
 * Pieces of the Panchanga tab: the day timeline, the "right now" card, the five-limb tiles,
 * tinted timing rows and the choghadiya / hora / durmuhurta / varjyam lists. Colours come from
 * the theme; inauspicious is a muted terracotta (the theme's accent in Light, a softened one in
 * Dark where the accent is gold), auspicious is the theme's quiet green.
 */
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fragment } from 'react';
import { Text, View } from 'react-native';
import { segmentAt, type Quality, type Segment } from '../lib/muhurta';
import { useI18n, T } from '../lib/i18n';
import type { Panchanga } from '../lib/panchanga';
import { useSettings } from '../lib/settings';
import { scriptFont } from '../lib/fonts';
import type { Theme } from '../lib/theme';

/** Keep a phrase on one line. */
export const nb = (s: string) => s.replace(/ /g, ' ');

/** `color` (#RRGGBB) at the given opacity, as #RRGGBBAA. */
export const tint = (color: string, alpha: number) => color + Math.round(alpha * 255).toString(16).padStart(2, '0');

export function tones(theme: Theme) {
  const dark = theme.statusBar === 'light';
  return { bad: dark ? '#CC8A72' : theme.accent, good: theme.success, neutral: theme.textMuted };
}
const toneOf = (theme: Theme, q: Quality) => tones(theme)[q === 'good' ? 'good' : q === 'bad' ? 'bad' : 'neutral'];

const QUALITY: Record<Quality, string> = { good: T('Auspicious'), neutral: T('Neutral'), bad: T('Inauspicious') };

type Window = [Date, Date];
type Fmt = (d: Date) => string;

// ---------- day timeline ----------

export function DayTimeline({ p, tm, now, rahu, yama, gulika, abhijit, amrita }: {
  p: Panchanga; tm: Fmt; now: number | null;
  rahu: Window; yama: Window; gulika: Window; abhijit: Window; amrita: Window[];
}) {
  const { theme } = useSettings();
  const { tr } = useI18n();
  const tn = tones(theme);
  const a0 = p.sunrise.getTime();
  const len = p.sunset.getTime() - a0;
  const frac = (t: number) => Math.min(1, Math.max(0, (t - a0) / len));
  const bars: { key: string; label: string; w: Window; lane: 'bad' | 'good' }[] = ([
    { key: 'rahu', label: tr('Rahu kala'), w: rahu, lane: 'bad' as const },
    { key: 'yama', label: tr('Yamaganda'), w: yama, lane: 'bad' },
    { key: 'gulika', label: tr('Gulika kala'), w: gulika, lane: 'bad' },
    { key: 'abhijit', label: tr('Abhijit muhurta'), w: abhijit, lane: 'good' },
    ...amrita.map((w, i) => ({ key: `amrita${i}`, label: tr('Amrita kala'), w, lane: 'good' as const })),
  ] as { key: string; label: string; w: Window; lane: 'bad' | 'good' }[]).filter((b) => b.w[1].getTime() > a0 && b.w[0].getTime() < p.sunset.getTime());
  const legend = bars.filter((b, i) => bars.findIndex((x) => x.label === b.label) === i);
  const nowFrac = now !== null && now >= a0 && now <= p.sunset.getTime() ? frac(now) : null;
  return (
    <View
      accessible
      accessibilityLabel={`${tr('Sunrise')} ${tm(p.sunrise)}, ${tr('Sunset')} ${tm(p.sunset)}`}
      style={{ marginHorizontal: 16, marginTop: 14, padding: 14, borderRadius: 16, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
          <MaterialCommunityIcons name="weather-sunset-up" size={20} color={theme.gold} />
          <Text style={{ color: theme.text, fontSize: 15, fontWeight: '600' }}>{nb(tm(p.sunrise))}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
          <Text style={{ color: theme.text, fontSize: 15, fontWeight: '600' }}>{nb(tm(p.sunset))}</Text>
          <MaterialCommunityIcons name="weather-sunset-down" size={20} color={theme.gold} />
        </View>
      </View>
      <View style={{ height: 24, justifyContent: 'center' }}>
        <View style={{ height: 14, borderRadius: 7, overflow: 'hidden', backgroundColor: theme.bgSecondary, borderWidth: 1, borderColor: theme.cardBorder }}>
          {bars.map((b) => {
            const l = frac(b.w[0].getTime());
            const r = frac(b.w[1].getTime());
            return (
              <View
                key={b.key}
                style={{
                  position: 'absolute', left: `${l * 100}%`, width: `${(r - l) * 100}%`,
                  top: b.lane === 'bad' ? 0 : 6, height: 6,
                  backgroundColor: tint(b.lane === 'bad' ? tn.bad : tn.good, 0.62),
                }}
              />
            );
          })}
        </View>
        {nowFrac !== null && (
          <View pointerEvents="none" style={{ position: 'absolute', top: 0, bottom: 0, left: `${nowFrac * 100}%`, width: 2, marginLeft: -1, borderRadius: 1, backgroundColor: theme.text }}>
            <View style={{ position: 'absolute', top: -2, left: -3, width: 8, height: 8, borderRadius: 4, backgroundColor: theme.text, borderWidth: 2, borderColor: theme.card }} />
          </View>
        )}
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', columnGap: 14, rowGap: 4, marginTop: 10 }}>
        {legend.map((b) => (
          <View key={b.key} style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <View style={{ width: 10, height: 10, borderRadius: 3, backgroundColor: tint(b.lane === 'bad' ? tn.bad : tn.good, 0.62) }} />
            <Text style={{ color: theme.textMuted, fontSize: 13 }}>{b.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

// ---------- right now ----------

export function RightNow({ choghadiya, now, t, tm }: { choghadiya: Segment[]; now: number; t: (s: string) => string; tm: Fmt }) {
  const { theme, settings } = useSettings();
  const { tr } = useI18n();
  const i = segmentAt(choghadiya, now);
  if (i < 0) return null;
  const cur = choghadiya[i];
  const next = choghadiya[i + 1];
  const color = toneOf(theme, cur.quality);
  const total = cur.end.getTime() - cur.start.getTime();
  const done = Math.min(1, Math.max(0, (now - cur.start.getTime()) / total));
  const mins = Math.max(1, Math.round((cur.end.getTime() - now) / 60000));
  const h = Math.floor(mins / 60);
  const left = h ? tr('{h}h {m}m left', { h, m: mins % 60 }) : tr('{m}m left', { m: mins });
  const font = scriptFont(settings.script, settings.bookFonts);
  return (
    <View style={{ marginHorizontal: 16, marginTop: 14, padding: 14, borderRadius: 16, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card }}>
      <Text style={{ color: theme.gold, fontSize: 13, fontWeight: '700', letterSpacing: 0.4 }}>{tr('Right now')}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, marginTop: 4 }}>
        <View style={{ flexDirection: 'row', alignItems: 'baseline', flexShrink: 1, gap: 8 }}>
          <Text style={{ color: theme.text, fontSize: 18, fontWeight: font ? undefined : '700', fontFamily: font }}>{t(cur.name)}</Text>
          <Text style={{ color, fontSize: 13, fontWeight: '600' }}>{tr(QUALITY[cur.quality])}</Text>
        </View>
        <Text style={{ color: theme.textMuted, fontSize: 14 }}>{nb(left)}</Text>
      </View>
      <View style={{ height: 4, borderRadius: 2, marginTop: 10, backgroundColor: theme.bgSecondary, overflow: 'hidden' }}>
        <View style={{ width: `${done * 100}%`, height: 4, borderRadius: 2, backgroundColor: tint(color, 0.75) }} />
      </View>
      {next && (
        <Text style={{ color: theme.textMuted, fontSize: 14, marginTop: 8 }}>
          {tr('Next: {name} · {time}', { name: t(next.name), time: tm(next.start) })}
        </Text>
      )}
    </View>
  );
}

// ---------- the five limbs ----------

export interface Limb {
  label: string;
  /** One or more values, each with the end of its span (omitted when it needs none). */
  items: { name: string; till?: string }[];
}

export function LimbGrid({ limbs }: { limbs: Limb[] }) {
  const { theme, settings } = useSettings();
  const { tr } = useI18n();
  const font = scriptFont(settings.script, settings.bookFonts);
  const rows: Limb[][] = [];
  for (let i = 0; i < limbs.length; i += 2) rows.push(limbs.slice(i, i + 2));
  return (
    <View style={{ marginHorizontal: 16, gap: 10 }}>
      {rows.map((row, r) => (
        <View key={r} style={{ flexDirection: 'row', gap: 10 }}>
          {row.map((l) => (
            <View key={l.label} style={{ flex: 1, padding: 12, borderRadius: 16, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card }}>
              <Text style={{ color: theme.gold, fontSize: 13, fontWeight: '700' }}>{tr(l.label)}</Text>
              {l.items.map((it, k) => (
                <View key={k} style={{ marginTop: k ? 8 : 4 }}>
                  <Text style={{ color: theme.text, fontSize: 18, lineHeight: 26, fontFamily: font, fontWeight: font ? undefined : '600' }}>{it.name}</Text>
                  {it.till ? <Text style={{ color: theme.textMuted, fontSize: 13 }}>{nb(tr('till {time}', { time: it.till }))}</Text> : null}
                </View>
              ))}
            </View>
          ))}
          {row.length === 1 && <View style={{ flex: 1 }} />}
        </View>
      ))}
    </View>
  );
}

// ---------- tinted timing rows ----------

export interface TimingRow {
  label: string;
  value: string;
  tone: 'good' | 'bad';
}

export function TimingRows({ rows }: { rows: TimingRow[] }) {
  const { theme } = useSettings();
  const { tr } = useI18n();
  const tn = tones(theme);
  return (
    <View style={{ marginHorizontal: 16, gap: 8 }}>
      {rows.map((r) => {
        const c = r.tone === 'good' ? tn.good : tn.bad;
        return (
          <View
            key={r.label}
            style={{
              flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12,
              paddingVertical: 10, paddingHorizontal: 14, borderRadius: 10, borderLeftWidth: 3, borderLeftColor: c, backgroundColor: tint(c, 0.12),
            }}
          >
            <Text style={{ color: theme.text, fontSize: 16, fontWeight: '600', flexShrink: 1 }}>{tr(r.label)}</Text>
            <Text style={{ color: theme.text, fontSize: 16, textAlign: 'right', flexShrink: 1, lineHeight: 22 }}>{r.value}</Text>
          </View>
        );
      })}
    </View>
  );
}

// ---------- choghadiya / hora lists ----------

export function SegmentList({ segs, now, t, tm }: { segs: Segment[]; now: number | null; t: (s: string) => string; tm: Fmt }) {
  const { theme, settings } = useSettings();
  const { tr } = useI18n();
  const font = scriptFont(settings.script, settings.bookFonts);
  const cur = now === null ? -1 : segmentAt(segs, now);
  return (
    <View style={{ marginHorizontal: 16, borderRadius: 16, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card, overflow: 'hidden' }}>
      {segs.map((s, i) => {
        const isCur = i === cur;
        return (
          <Fragment key={i}>
            {s.night && !segs[i - 1]?.night && (
              <Text style={{ color: theme.textMuted, fontSize: 13, fontWeight: '700', paddingHorizontal: 14, paddingTop: 10, paddingBottom: 4, backgroundColor: theme.bgSecondary, borderTopWidth: 1, borderColor: theme.cardBorder }}>
                {tr('Night')}
              </Text>
            )}
            {i === 0 && (
              <Text style={{ color: theme.textMuted, fontSize: 13, fontWeight: '700', paddingHorizontal: 14, paddingTop: 10, paddingBottom: 4, backgroundColor: theme.bgSecondary }}>
                {tr('Day')}
              </Text>
            )}
            <View
              accessibilityState={{ selected: isCur }}
              style={{
                flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 9, paddingHorizontal: 14,
                borderTopWidth: i === 0 || (s.night && !segs[i - 1]?.night) ? 0 : 1, borderColor: theme.cardBorder,
                borderLeftWidth: 3, borderLeftColor: isCur ? theme.accent : 'transparent', backgroundColor: isCur ? theme.accentSoft : 'transparent',
              }}
            >
              <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: toneOf(theme, s.quality) }} />
              <Text style={{ flex: 1, color: theme.text, fontSize: 16, fontFamily: font, fontWeight: isCur ? '700' : font ? undefined : '500' }}>{t(s.name)}</Text>
              <Text style={{ color: isCur ? theme.text : theme.textMuted, fontSize: 15, fontWeight: isCur ? '600' : '400' }}>{nb(`${tm(s.start)} – ${tm(s.end)}`)}</Text>
            </View>
          </Fragment>
        );
      })}
    </View>
  );
}

/** A plain list of time windows (durmuhurta, varjyam). */
export function WindowList({ windows, tm, now }: { windows: Window[]; tm: Fmt; now: number | null }) {
  const { theme } = useSettings();
  const { tr } = useI18n();
  const bad = tones(theme).bad;
  return (
    <View style={{ marginHorizontal: 16, borderRadius: 16, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card }}>
      {windows.length === 0 ? (
        <Text style={{ color: theme.textMuted, fontSize: 15, padding: 14 }}>{tr('None this day')}</Text>
      ) : (
        windows.map((w, i) => {
          const isCur = now !== null && now >= w[0].getTime() && now < w[1].getTime();
          return (
            <View
              key={i}
              style={{
                flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 11, paddingHorizontal: 14, borderTopWidth: i ? 1 : 0, borderColor: theme.cardBorder,
                borderLeftWidth: 3, borderLeftColor: isCur ? bad : 'transparent', backgroundColor: isCur ? tint(bad, 0.12) : 'transparent',
              }}
            >
              <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: bad }} />
              <Text style={{ color: theme.text, fontSize: 16, fontWeight: isCur ? '700' : '500' }}>{nb(`${tm(w[0])} – ${tm(w[1])}`)}</Text>
            </View>
          );
        })
      )}
    </View>
  );
}
