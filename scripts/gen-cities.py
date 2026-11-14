#!/usr/bin/env python3
"""Builds src/data/cities.ts: every Indian city/town with population >= 15,000 (GeoNames
cities15000, CC BY 4.0, geonames.org) plus pilgrimage towns below that size.

Usage: python3 scripts/gen-cities.py <cities15000.txt> <admin1CodesASCII.txt>
"""
import json, re, sys

cities_path, admin_path = sys.argv[1], sys.argv[2]
states = {}
for line in open(admin_path, encoding='utf8'):
    code, name, *_ = line.rstrip('\n').split('\t')
    if code.startswith('IN.'):
        states[code[3:]] = name

# Current official names for places GeoNames lists under an older spelling; old name kept for search.
RENAME = {
    'Bangalore': 'Bengaluru', 'Mysore': 'Mysuru', 'Mangalore': 'Mangaluru', 'Belgaum': 'Belagavi',
    'Gulbarga': 'Kalaburagi', 'Bellary': 'Ballari', 'Hubli': 'Hubballi', 'Shimoga': 'Shivamogga',
    'Tumkur': 'Tumakuru', 'Bijapur': 'Vijayapura', 'Chikmagalur': 'Chikkamagaluru', 'Hospet': 'Hosapete',
    'Closepet': 'Ramanagara', 'French Rocks': 'Pandavapura', 'Bombay': 'Mumbai', 'Madras': 'Chennai',
    'Calcutta': 'Kolkata', 'Poona': 'Pune', 'Trivandrum': 'Thiruvananthapuram', 'Cochin': 'Kochi',
    'Calicut': 'Kozhikode', 'Gurgaon': 'Gurugram', 'Allahabad': 'Prayagraj', 'Baroda': 'Vadodara',
    'Pondicherry': 'Puducherry', 'Faizabad': 'Ayodhya', 'Trichur': 'Thrissur', 'Quilon': 'Kollam',
    'Alleppey': 'Alappuzha', 'Cannanore': 'Kannur', 'Palghat': 'Palakkad', 'Tanjore': 'Thanjavur',
    'Conjeeveram': 'Kanchipuram', 'Benares': 'Varanasi', 'Simla': 'Shimla', 'Cuttack': 'Cuttack',
    'Davangere': 'Davanagere', 'Chitradurga': 'Chitradurga', 'Hassan': 'Hassan', 'Bhatkal': 'Bhatkal',
    'Kolar': 'Kolar', 'Raichur': 'Raichur', 'Bidar': 'Bidar', 'Gadag': 'Gadag-Betageri',
}
# Familiar alternative names, searched but not shown.
ALIASES = {
    'Bengaluru': 'Bangalore', 'Mysuru': 'Mysore', 'Mangaluru': 'Mangalore', 'Belagavi': 'Belgaum',
    'Kalaburagi': 'Gulbarga', 'Ballari': 'Bellary', 'Hubballi': 'Hubli', 'Shivamogga': 'Shimoga',
    'Tumakuru': 'Tumkur', 'Vijayapura': 'Bijapur', 'Chikkamagaluru': 'Chikmagalur', 'Hosapete': 'Hospet',
    'Mumbai': 'Bombay', 'Chennai': 'Madras', 'Kolkata': 'Calcutta', 'Pune': 'Poona',
    'Thiruvananthapuram': 'Trivandrum', 'Kochi': 'Cochin Ernakulam', 'Kozhikode': 'Calicut',
    'Gurugram': 'Gurgaon', 'Prayagraj': 'Allahabad', 'Vadodara': 'Baroda', 'Puducherry': 'Pondicherry',
    'Varanasi': 'Banaras Benares Kashi', 'Visakhapatnam': 'Vizag', 'Tiruchirappalli': 'Trichy',
    'Thanjavur': 'Tanjore', 'Thrissur': 'Trichur', 'Kollam': 'Quilon', 'Alappuzha': 'Alleppey',
    'Kannur': 'Cannanore', 'Palakkad': 'Palghat', 'Ayodhya': 'Faizabad', 'Shimla': 'Simla',
    'Odisha': 'Orissa', 'Udupi': 'Udipi', 'Hubballi-Dharwad': 'Dharwar',
}
# Pilgrimage and maṭha towns below 15,000 people (coordinates of the temple / maṭha).
EXTRA = [
    ('Mantralayam', 'Andhra Pradesh', 15.94, 77.43), ('Sringeri', 'Karnataka', 13.42, 75.25),
    ('Dharmasthala', 'Karnataka', 12.95, 75.38), ('Kukke Subramanya', 'Karnataka', 12.66, 75.61),
    ('Kollur', 'Karnataka', 13.86, 74.81), ('Horanadu', 'Karnataka', 13.26, 75.33),
    ('Gokarna', 'Karnataka', 14.55, 74.32), ('Melukote', 'Karnataka', 12.66, 76.65),
    ('Hampi', 'Karnataka', 15.34, 76.46), ('Anegundi (Nava Brindavana)', 'Karnataka', 15.35, 76.48),
    ('Malkhed', 'Karnataka', 17.19, 77.16), ('Tirumala', 'Andhra Pradesh', 13.68, 79.35),
    ('Srisailam', 'Andhra Pradesh', 16.07, 78.87), ('Sabarimala', 'Kerala', 9.43, 77.08),
    ('Badrinath', 'Uttarakhand', 30.74, 79.49), ('Kedarnath', 'Uttarakhand', 30.73, 79.07),
    ('Gangotri', 'Uttarakhand', 30.99, 78.94), ('Yamunotri', 'Uttarakhand', 31.01, 78.46),
    ('Pushkar', 'Rajasthan', 26.49, 74.55), ('Omkareshwar', 'Madhya Pradesh', 22.24, 76.15),
    ('Trimbakeshwar', 'Maharashtra', 19.93, 73.53), ('Shirdi', 'Maharashtra', 19.77, 74.48),
    ('Srirangam', 'Tamil Nadu', 10.86, 78.69), ('Tiruvannamalai', 'Tamil Nadu', 12.23, 79.07),
]

out, seen = [], set()
for line in open(cities_path, encoding='utf8'):
    f = line.rstrip('\n').split('\t')
    if f[8] != 'IN':
        continue
    name = RENAME.get(f[2], f[2])
    state = states.get(f[10], '')
    lat, lon = round(float(f[4]), 2), round(float(f[5]), 2)
    pop = int(f[14] or 0)
    key = (name.lower(), state)
    if key in seen:
        continue
    seen.add(key)
    alias = ' '.join(x for x in {ALIASES.get(name, ''), f[2] if f[2] != name else ''} if x)
    out.append((name, state, lat, lon, pop, alias))
for name, state, lat, lon in EXTRA:
    if (name.lower(), state) not in seen:
        seen.add((name.lower(), state))
        out.append((name, state, lat, lon, 0, ''))
out.sort(key=lambda r: (r[0].lower(), r[1]))

rows = []
for name, state, lat, lon, pop, alias in out:
    # Population rank (0 = small, 3 = metro) orders search results.
    rank = 3 if pop >= 2_000_000 else 2 if pop >= 300_000 else 1 if pop >= 50_000 else 0
    rows.append(json.dumps([name, state, lat, lon, rank] + ([alias] if alias else []), ensure_ascii=False))
src = (
    '// AUTO-GENERATED by scripts/gen-cities.py — do not edit by hand.\n'
    '// Indian cities and towns with 15,000+ people from GeoNames (geonames.org, CC BY 4.0),\n'
    '// plus pilgrimage towns. [name, state, lat, lon, size rank 0–3, search aliases?]\n'
    'export type CityRow = [string, string, number, number, number, string?];\n'
    'export const INDIA_CITIES: CityRow[] = [\n' + ',\n'.join(rows) + ',\n];\n'
)
open('src/data/cities.ts', 'w', encoding='utf8').write(src)
print(len(rows), 'cities')
