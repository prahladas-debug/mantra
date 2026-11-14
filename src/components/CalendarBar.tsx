import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { FlatList, Modal, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { cityById, cityLabel, searchCities, type City } from '../lib/panchanga';
import { useSettings } from '../lib/settings';
import { useCalendarMode, useEkadashiRule, useSauraStart } from './PanchangaCard';

/** Full-screen searchable list of every Indian town of 15,000+ people, plus places abroad. */
export function CityPicker({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const { theme, settings, update } = useSettings();
  const [q, setQ] = useState('');
  const results = searchCities(q);
  const choose = (c: City) => {
    update({ city: c.id });
    setQ('');
    onClose();
  };
  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet" onRequestClose={onClose}>
      <View style={{ flex: 1, backgroundColor: theme.bg, paddingTop: 12 }}>
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

function Option({ label, detail, active, onPress }: { label: string; detail: string; active: boolean; onPress: () => void }) {
  const { theme } = useSettings();
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="radio"
      accessibilityState={{ selected: active }}
      style={({ pressed }) => ({
        flexDirection: 'row', alignItems: 'center', gap: 12, padding: 12, borderRadius: 12, borderWidth: 1,
        borderColor: active ? theme.accent : theme.cardBorder, backgroundColor: active ? theme.accentSoft : theme.card, opacity: pressed ? 0.7 : 1,
      })}
    >
      <Ionicons name={active ? 'radio-button-on' : 'radio-button-off'} size={20} color={active ? theme.accent : theme.textMuted} />
      <View style={{ flex: 1 }}>
        <Text style={{ color: theme.text, fontSize: 16, fontWeight: '600' }}>{label}</Text>
        <Text style={{ color: theme.textMuted, fontSize: 13, marginTop: 2 }}>{detail}</Text>
      </View>
    </Pressable>
  );
}

/** Bottom sheet with the calendar choices: tradition, lunar/solar months, solar month start. */
export function CalendarOptionsSheet({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const { theme } = useSettings();
  const [rule, setRule] = useEkadashiRule();
  const [mode, setMode] = useCalendarMode();
  const [start, setStart] = useSauraStart();
  const head = { color: theme.textMuted, fontSize: 13, fontWeight: '700' as const, letterSpacing: 0.8, marginTop: 18, marginBottom: 8 };
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable style={{ flex: 1, backgroundColor: '#0006' }} onPress={onClose} accessibilityLabel="Close options" />
      <View style={{ maxHeight: '80%', backgroundColor: theme.bg, borderTopLeftRadius: 18, borderTopRightRadius: 18, paddingBottom: 24 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, paddingBottom: 0 }}>
          <Text style={{ flex: 1, color: theme.text, fontSize: 19, fontWeight: '700' }}>Calendar options</Text>
          <Pressable onPress={onClose} accessibilityRole="button" accessibilityLabel="Done" hitSlop={10}>
            <Text style={{ color: theme.accent, fontSize: 16, fontWeight: '700' }}>Done</Text>
          </Pressable>
        </View>
        <ScrollView contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}>
          <Text style={head}>TRADITION · EKADASHI DATES</Text>
          <Option label="Madhva" detail="Ekadashi by the Madhva / Vaishnava rule (no dashami touch at arunodaya)" active={rule === 'madhva'} onPress={() => setRule('madhva')} />
          <Option label="Smarta" detail="Ekadashi by the Smarta rule (tithi at sunrise)" active={rule === 'smarta'} onPress={() => setRule('smarta')} />
          <Text style={head}>MONTHS</Text>
          <Option label="Chandramana (lunar)" detail="Months from new moon to new moon: Chaitra, Vaishakha …" active={mode === 'chandra'} onPress={() => setMode('chandra')} />
          <Option label="Sauramana (solar)" detail="Solar months as in Udupi and Tulu Nadu: Mesha, Vrishabha … with Udupi festivals" active={mode === 'saura'} onPress={() => setMode('saura')} />
          {mode === 'saura' && (
            <>
              <Text style={head}>SOLAR MONTH STARTS (DAYTIME SANKRANTI)</Text>
              <Option label="Next day" detail="The day after the sankranti is day 1 (Tulu rule)" active={start === 'next'} onPress={() => setStart('next')} />
              <Option label="Same day" detail="The sankranti day itself is day 1 when the sankranti falls between sunrise and sunset" active={start === 'same'} onPress={() => setStart('same')} />
            </>
          )}
        </ScrollView>
      </View>
    </Modal>
  );
}

/** One compact line under a calendar header: place ▾ and the current options ▾. */
export function CalendarBar() {
  const { theme, settings } = useSettings();
  const [rule] = useEkadashiRule();
  const [mode] = useCalendarMode();
  const [picker, setPicker] = useState(false);
  const [sheet, setSheet] = useState(false);
  const city = cityById(settings.city);
  const pill = ({ pressed }: { pressed: boolean }) => ({
    flexDirection: 'row' as const, alignItems: 'center' as const, gap: 6, paddingHorizontal: 12, paddingVertical: 8,
    borderRadius: 20, borderWidth: 1, borderColor: theme.cardBorder, backgroundColor: theme.card, opacity: pressed ? 0.6 : 1, flexShrink: 1,
  });
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 8, marginTop: 10, marginHorizontal: 16 }}>
      <Pressable onPress={() => setPicker(true)} style={(st) => [pill(st), { flexShrink: 0, maxWidth: '45%' }]} accessibilityRole="button" accessibilityLabel={`Place: ${cityLabel(city)}. Change`}>
        <Ionicons name="location-outline" size={16} color={theme.accent} />
        <Text numberOfLines={1} style={{ color: theme.text, fontSize: 14, flexShrink: 1 }}>{city.name}</Text>
        <Ionicons name="chevron-down" size={14} color={theme.textMuted} />
      </Pressable>
      <Pressable onPress={() => setSheet(true)} style={pill} accessibilityRole="button" accessibilityLabel="Calendar options">
        <Ionicons name="options-outline" size={16} color={theme.accent} />
        <Text numberOfLines={1} style={{ color: theme.text, fontSize: 14 }}>
          {rule === 'madhva' ? 'Madhva' : 'Smarta'} · {mode === 'saura' ? 'Sauramana' : 'Chandramana'}
        </Text>
        <Ionicons name="chevron-down" size={14} color={theme.textMuted} />
      </Pressable>
      <CityPicker visible={picker} onClose={() => setPicker(false)} />
      <CalendarOptionsSheet visible={sheet} onClose={() => setSheet(false)} />
    </View>
  );
}
