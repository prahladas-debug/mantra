import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { useCalcMethod } from '../components/PanchangaCard';
import { nb } from '../components/PanchangaParts';
import { birthStar } from '../lib/janma';
import { useI18n } from '../lib/i18n';
import { cityById, cityLabel, parseIso, searchCities, todayIn, type City } from '../lib/panchanga';
import { scriptFont } from '../lib/fonts';
import { useSettings } from '../lib/settings';
import { translit, translitTitle } from '../lib/transliterate';

const digits = (s: string, max: number) => s.replace(/\D/g, '').slice(0, max);

/** Janma nakshatra: the Moon's star, pada and rashi, and the tithi, for a birth date, time and place. Nothing is stored. */
export default function JanmaNakshatra() {
  const { theme, settings } = useSettings();
  const { tr } = useI18n();
  const [method] = useCalcMethod();
  const home = cityById(settings.city);
  const [picked, setPicked] = useState<City | null>(null);
  const city = picked ?? home;
  const [q, setQ] = useState('');
  const [choosing, setChoosing] = useState(false);
  // A starting date near today helps typing; the year is left to the person.
  const [today] = useState(() => parseIso(todayIn(home)));
  const [dd, setDd] = useState('');
  const [mm, setMm] = useState('');
  const [yy, setYy] = useState('');
  const [hh, setHh] = useState('');
  const [mi, setMi] = useState('');

  const d = Number(dd), m = Number(mm), y = Number(yy), h = Number(hh), n = Number(mi || '0');
  const valid =
    dd !== '' && mm !== '' && yy.length === 4 && hh !== '' &&
    y >= 1900 && y <= today[0] + 1 && m >= 1 && m <= 12 && d >= 1 && d <= new Date(Date.UTC(y, m, 0)).getUTCDate() && h <= 23 && n <= 59;
  const star = useMemo(() => (valid ? birthStar(city, y, m, d, h, n, method) : null), [valid, city, y, m, d, h, n, method]);

  const t = (s: string) => (settings.script === 'english' ? translitTitle(s, settings.script) : translit(s, settings.script));
  const font = scriptFont(settings.script, settings.bookFonts);
  const field = (label: string, value: string, set: (v: string) => void, max: number, width: number, placeholder: string) => (
    <View style={{ width }}>
      <Text style={{ color: theme.gold, fontSize: 13, fontWeight: '700', marginBottom: 4 }}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={(s) => set(digits(s, max))}
        keyboardType="number-pad"
        maxLength={max}
        placeholder={placeholder}
        placeholderTextColor={theme.textMuted}
        accessibilityLabel={label}
        style={{ color: theme.text, fontSize: 18, paddingVertical: 10, paddingHorizontal: 12, borderRadius: 12, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card }}
      />
    </View>
  );
  const results = choosing ? searchCities(q).slice(0, 8) : [];
  const card = { marginHorizontal: 16, borderRadius: 16, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card } as const;

  return (
    <ScrollView style={{ backgroundColor: theme.bg }} contentContainerStyle={{ paddingVertical: 16, paddingBottom: 40 }} keyboardShouldPersistTaps="handled">
      <Text style={{ color: theme.textMuted, fontSize: 15, lineHeight: 21, marginHorizontal: 16, marginBottom: 14 }}>
        {tr('Enter the date, time and place of birth to find the Moon’s nakshatra, rashi and the tithi.')}
      </Text>

      <View style={{ flexDirection: 'row', gap: 10, marginHorizontal: 16 }}>
        {field(tr('Day'), dd, setDd, 2, 64, 'DD')}
        {field(tr('Month'), mm, setMm, 2, 64, 'MM')}
        {field(tr('Year'), yy, setYy, 4, 88, 'YYYY')}
      </View>
      <View style={{ flexDirection: 'row', gap: 10, marginHorizontal: 16, marginTop: 12 }}>
        {field(tr('Hour (0–23)'), hh, setHh, 2, 104, 'HH')}
        {field(tr('Minute'), mi, setMi, 2, 72, 'MM')}
      </View>

      <Text style={{ color: theme.gold, fontSize: 13, fontWeight: '700', marginHorizontal: 16, marginTop: 16, marginBottom: 4 }}>{tr('Place of birth')}</Text>
      <Pressable
        onPress={() => setChoosing(!choosing)}
        accessibilityRole="button"
        style={({ pressed }) => [card, { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 12, paddingHorizontal: 14, opacity: pressed ? 0.7 : 1 }]}
      >
        <MaterialCommunityIcons name="map-marker-outline" size={22} color={theme.gold} />
        <Text style={{ flex: 1, color: theme.text, fontSize: 16 }}>{cityLabel(city)}</Text>
        <MaterialCommunityIcons name={choosing ? 'chevron-up' : 'chevron-down'} size={22} color={theme.textMuted} />
      </Pressable>
      {choosing && (
        <View style={[card, { marginTop: 8, overflow: 'hidden' }]}>
          <TextInput
            value={q}
            onChangeText={setQ}
            autoFocus
            autoCorrect={false}
            placeholder={tr('Search city or town (e.g. Udupi, Bangalore)')}
            placeholderTextColor={theme.textMuted}
            accessibilityLabel={tr('Search city')}
            style={{ color: theme.text, fontSize: 16, paddingVertical: 12, paddingHorizontal: 14, borderBottomWidth: 1, borderColor: theme.cardBorder }}
          />
          {results.map((c) => (
            <Pressable
              key={c.id}
              onPress={() => {
                setPicked(c);
                setChoosing(false);
                setQ('');
              }}
              accessibilityRole="button"
              style={({ pressed }) => ({ paddingVertical: 11, paddingHorizontal: 14, borderTopWidth: 1, borderColor: theme.cardBorder, opacity: pressed ? 0.6 : 1 })}
            >
              <Text style={{ color: theme.text, fontSize: 16 }}>{cityLabel(c)}</Text>
            </Pressable>
          ))}
        </View>
      )}

      {star && (
        <View style={[card, { marginTop: 22, padding: 16 }]}>
          <Text style={{ color: theme.gold, fontSize: 13, fontWeight: '700' }}>{tr('Janma nakshatra')}</Text>
          <Text style={{ color: theme.text, fontSize: 24, marginTop: 4, fontFamily: font, fontWeight: font ? undefined : '700' }}>{t(star.nakshatra)}</Text>
          <Text style={{ color: theme.textMuted, fontSize: 15, marginTop: 2 }}>{tr('Pada {n}', { n: star.pada })}</Text>

          <View style={{ height: 1, backgroundColor: theme.cardBorder, marginVertical: 14 }} />
          <View style={{ flexDirection: 'row', gap: 16 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ color: theme.gold, fontSize: 13, fontWeight: '700' }}>{tr('Moon sign')}</Text>
              <Text style={{ color: theme.text, fontSize: 18, marginTop: 4, fontFamily: font, fontWeight: font ? undefined : '600' }}>{t(star.rashi)}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ color: theme.gold, fontSize: 13, fontWeight: '700' }}>{tr('Tithi')}</Text>
              <Text style={{ color: theme.text, fontSize: 18, marginTop: 4, fontFamily: font, fontWeight: font ? undefined : '600' }}>{t(`${star.paksha} ${star.tithi}`)}</Text>
            </View>
          </View>
        </View>
      )}
      {!star && (
        <Text style={{ color: theme.textMuted, fontSize: 14, marginHorizontal: 16, marginTop: 20 }}>{nb(tr('Nothing is saved.'))}</Text>
      )}
      <Text style={{ color: theme.textMuted, fontSize: 14, lineHeight: 19, marginHorizontal: 16, marginTop: 16 }}>
        {tr('Calculated for the place and time given (local time, with daylight saving where it applied). Close to a change of nakshatra, the exact birth time matters; for horoscopes follow your family panchanga.')}
      </Text>
    </ScrollView>
  );
}
