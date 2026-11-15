import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatList, Modal, Platform, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { cityById, cityLabel, searchCities, type City } from '../lib/panchanga';
import { useSettings } from '../lib/settings';
import { useCalcMethod, useCalendarMode, useEkadashiRule, useSauraStart } from './PanchangaCard';
import { Segmented } from './ui';

/** Full-screen searchable list of every Indian town of 15,000+ people, plus places abroad. */
export function CityPicker({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const { theme, settings, update } = useSettings();
  const insets = useSafeAreaInsets();
  // On Android the modal covers the whole screen, under the status bar and the navigation
  // buttons; on iOS it is a sheet that starts below the status bar.
  const top = Platform.OS === 'android' ? insets.top : 0;
  const [q, setQ] = useState('');
  const results = searchCities(q);
  const choose = (c: City) => {
    update({ city: c.id });
    setQ('');
    onClose();
  };
  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet" onRequestClose={onClose}>
      <View style={{ flex: 1, backgroundColor: theme.bg, paddingTop: top + 12 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, gap: 10 }}>
          <Text style={{ flex: 1, color: theme.text, fontSize: 20, fontWeight: '700' }}>Choose your place</Text>
          <Pressable onPress={onClose} accessibilityRole="button" accessibilityLabel="Close" hitSlop={10}>
            <Ionicons name="close" size={26} color={theme.textMuted} />
          </Pressable>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 16, paddingHorizontal: 12, borderRadius: 12, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card }}>
          <Ionicons name="search" size={18} color={theme.textMuted} />
          <TextInput
            value={q}
            onChangeText={setQ}
            autoFocus
            placeholder="Search city or town (e.g. Udupi, Bangalore)"
            placeholderTextColor={theme.textMuted}
            autoCorrect={false}
            style={{ flex: 1, color: theme.text, fontSize: 16, paddingVertical: 12, paddingHorizontal: 8 }}
            accessibilityLabel="Search city"
          />
        </View>
        {!q && <Text style={{ color: theme.textMuted, fontSize: 13, marginHorizontal: 16, marginBottom: 6 }}>Popular · type to search about 3,800 places</Text>}
        <FlatList
          data={results}
          keyExtractor={(c) => c.id}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          contentContainerStyle={{ paddingBottom: insets.bottom + 12 }}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => choose(item)}
              accessibilityRole="button"
              style={({ pressed }) => ({ flexDirection: 'row', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 16, borderBottomWidth: 1, borderColor: theme.cardBorder, opacity: pressed ? 0.6 : 1 })}
            >
              <View style={{ flex: 1 }}>
                <Text style={{ color: theme.text, fontSize: 16 }}>{item.name}</Text>
                {item.state ? <Text style={{ color: theme.textMuted, fontSize: 13 }}>{item.state}</Text> : null}
              </View>
              {item.id === settings.city && <Ionicons name="checkmark" size={20} color={theme.accent} />}
            </Pressable>
          )}
          ListEmptyComponent={<Text style={{ color: theme.textMuted, margin: 16 }}>No place found. Try another spelling or a nearby larger town.</Text>}
        />
      </View>
    </Modal>
  );
}

/** Bottom sheet with the calendar choices: tradition, lunar/solar months, solar month start, calculation. */
export function CalendarOptionsSheet({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const { theme } = useSettings();
  const insets = useSafeAreaInsets();
  const [rule, setRule] = useEkadashiRule();
  const [mode, setMode] = useCalendarMode();
  const [start, setStart] = useSauraStart();
  const [method, setMethod] = useCalcMethod();
  const label = { color: theme.text, fontSize: 15, fontWeight: '700' as const, marginTop: 18, marginBottom: 8 };
  const hint = { color: theme.textMuted, fontSize: 13, marginTop: 6, lineHeight: 18 };
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable style={{ flex: 1, backgroundColor: '#0006' }} onPress={onClose} accessibilityLabel="Close options" />
      {/* Four choices with their notes are taller than a small phone: the sheet scrolls. */}
      <View style={{ maxHeight: '88%', backgroundColor: theme.bg, borderTopLeftRadius: 18, borderTopRightRadius: 18 }}>
        <View style={{ alignSelf: 'center', width: 40, height: 4, borderRadius: 2, backgroundColor: theme.cardBorder, marginTop: 8 }} />
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 16 }}>
          <Text style={{ flex: 1, color: theme.text, fontSize: 19, fontWeight: '700' }}>Calendar options</Text>
          <Pressable onPress={onClose} accessibilityRole="button" accessibilityLabel="Done" hitSlop={10}>
            <Text style={{ color: theme.accent, fontSize: 16, fontWeight: '700' }}>Done</Text>
          </Pressable>
        </View>
        <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: insets.bottom + 20 }}>

        <Text style={label}>Tradition</Text>
        <Segmented options={[{ id: 'madhva', label: 'Madhva' }, { id: 'smarta', label: 'Smarta' }]} value={rule} onChange={setRule} />
        <Text style={hint}>{rule === 'madhva' ? 'Ekadashi must be free of dashami at arunodaya; otherwise the fast moves a day.' : 'Ekadashi is the day with ekadashi at sunrise.'}</Text>

        <Text style={label}>Months</Text>
        <Segmented options={[{ id: 'chandra', label: 'Chandramana' }, { id: 'saura', label: 'Sauramana' }]} value={mode} onChange={setMode} />
        <Text style={hint}>{mode === 'saura' ? 'Solar months (Mesha …) as in Udupi and Tulu Nadu, with the Udupi festivals.' : 'Lunar months, new moon to new moon (Chaitra …).'}</Text>

        {mode === 'saura' && (
          <>
            <Text style={label}>Solar month begins</Text>
            <Segmented options={[{ id: 'next', label: 'Next day' }, { id: 'same', label: 'Same day' }]} value={start} onChange={setStart} />
            <Text style={hint}>When the sankranti falls in the daytime. Practice differs, even in Udupi.</Text>
          </>
        )}

        <Text style={label}>Calculation</Text>
        <Segmented options={[{ id: 'drik', label: 'Drik' }, { id: 'surya', label: 'Surya Siddhanta' }]} value={method} onChange={setMethod} />
        <Text style={hint}>{method === 'surya' ? 'As in traditional matha panchangas (Uttaradi, Raghavendra Matha).' : 'Modern astronomy, as in most printed and online panchangas.'}</Text>

        <Text style={[hint, { marginTop: 20 }]}>
          {method === 'surya'
            ? 'Surya Siddhanta panchanga: Sun and Moon by the classical text, with its own sunrise; times can differ from drik ones by a few hours, and sometimes a festival or ekadashi by a day.'
            : 'Drik panchanga: calculated from the true positions of the Sun and Moon (Lahiri ayanamsha), as drikpanchang.com does.'}
        </Text>
        </ScrollView>
      </View>
    </Modal>
  );
}

/** One compact row: place ▾, the calendar options ▾ and an optional trailing button. */
export function CalendarBar({ trailing }: { trailing?: React.ReactNode }) {
  const { theme, settings } = useSettings();
  const [rule] = useEkadashiRule();
  const [mode] = useCalendarMode();
  const [method] = useCalcMethod();
  const [picker, setPicker] = useState(false);
  const [sheet, setSheet] = useState(false);
  const city = cityById(settings.city);
  const pill = ({ pressed }: { pressed: boolean }) => ({
    flexDirection: 'row' as const, alignItems: 'center' as const, gap: 5, paddingHorizontal: 11, paddingVertical: 7,
    borderRadius: 18, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card, opacity: pressed ? 0.6 : 1,
  });
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginHorizontal: 16, marginTop: 10 }}>
      <Pressable onPress={() => setPicker(true)} style={(st) => [pill(st), { flexShrink: 1, maxWidth: '42%' }]} accessibilityRole="button" accessibilityLabel={`Place: ${cityLabel(city)}. Change`}>
        <Ionicons name="location-outline" size={15} color={theme.accent} />
        <Text numberOfLines={1} style={{ color: theme.text, fontSize: 14, flexShrink: 1 }}>{city.name}</Text>
        <Ionicons name="chevron-down" size={13} color={theme.textMuted} />
      </Pressable>
      <Pressable onPress={() => setSheet(true)} style={(st) => [pill(st), { flexShrink: 1 }]} accessibilityRole="button" accessibilityLabel="Calendar options">
        <Ionicons name="options-outline" size={15} color={theme.accent} />
        <Text numberOfLines={1} style={{ color: theme.text, fontSize: 14, flexShrink: 1 }}>
          {rule === 'madhva' ? 'Madhva' : 'Smarta'} · {mode === 'saura' ? 'Solar' : 'Lunar'}
          {method === 'surya' ? ' · SS' : ''}
        </Text>
        <Ionicons name="chevron-down" size={13} color={theme.textMuted} />
      </Pressable>
      <View style={{ flex: 1 }} />
      {trailing}
      <CityPicker visible={picker} onClose={() => setPicker(false)} />
      <CalendarOptionsSheet visible={sheet} onClose={() => setSheet(false)} />
    </View>
  );
}
