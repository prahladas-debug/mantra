// Draws the book covers (assets/covers/*.jpg) and the round deity emblems (assets/deities/*.png)
// as gold line art, then renders them with the pre-installed Chromium:  node build.js
const { chromium } = require('playwright');
const path = require('path');

const G = '#EBCB7E'; // gold
const line = (w = 5) => `fill="none" stroke="${G}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"`;

// ---- emblems, each drawn in a 200 x 200 box ----
const E = {
  // Krishna: flute and peacock feather
  flute: () => `
    <g transform="rotate(-20 100 132)">
      <rect x="22" y="124" width="156" height="15" rx="7.5" ${line(4.5)}/>
      <path d="M40 124 v15 M48 124 v15 M160 124 v15" ${line(3)}/>
      ${[72, 90, 108, 126, 144].map((x) => `<circle cx="${x}" cy="131.5" r="3" fill="${G}"/>`).join('')}
    </g>
    <path d="M92 150 C 96 118, 104 86, 122 58" ${line(4)}/>
    ${[[97, 128, -40], [100, 114, -38], [104, 100, -36], [109, 86, -32]].map(([x, y, a]) => `<path d="M${x} ${y} l-16 -9 M${x} ${y} l17 -3" ${line(2.5)} transform="rotate(${a + 36} ${x} ${y})"/>`).join('')}
    <g transform="translate(128 46) rotate(24)">
      <path d="M0 -38 C 26 -32, 34 -2, 0 30 C -34 -2, -26 -32, 0 -38 Z" ${line(4)}/>
      <path d="M0 -24 C 16 -20, 21 -2, 0 18 C -21 -2, -16 -20, 0 -24 Z" fill="${G}" fill-opacity="0.28" stroke="${G}" stroke-width="2.5"/>
      <ellipse cx="0" cy="-5" rx="7.5" ry="10" fill="${G}"/>
    </g>`,
  // Vishnu: urdhva-pundra between the chakra and the conch
  vishnu: () => `
    <path d="M82 52 V118 Q82 150 100 150 Q118 150 118 118 V52" ${line(9)}/>
    <path d="M100 64 V134" fill="none" stroke="#F3A65A" stroke-width="8" stroke-linecap="round"/>
    <g transform="translate(42 100)">
      <circle r="24" ${line(4)}/><circle r="7" fill="${G}"/>
      ${[0, 45, 90, 135].map((a) => `<path d="M-24 0 H24" ${line(2.5)} transform="rotate(${a})"/>`).join('')}
      ${[0, 45, 90, 135, 180, 225, 270, 315].map((a) => `<path d="M-5 -26 L0 -37 L5 -26 Z" fill="${G}" transform="rotate(${a})"/>`).join('')}
    </g>
    <g transform="translate(158 100)">
      <path d="M-2 -36 C 22 -32, 32 -8, 24 12 C 18 30, 4 40, -8 50 C -10 36, -20 26, -24 12 C -30 -10, -20 -32, -2 -36 Z" ${line(4)}/>
      <path d="M-18 -16 C -6 -24, 12 -20, 22 -8 M-23 0 C -8 -10, 12 -8, 25 6" ${line(2.5)}/>
      <path d="M6 12 C 12 22, 6 34, -6 42" ${line(2.5)}/>
      <path d="M-2 -36 L2 -48" ${line(4)}/>
    </g>`,
  // Hanuman: the mace
  gada: (waves) => `
    <g transform="rotate(${waves ? 24 : 0} 100 110) translate(0 ${waves ? -8 : 0})">
      <circle cx="100" cy="30" r="6" fill="${G}"/>
      <circle cx="100" cy="68" r="31" ${line(4.5)}/>
      <ellipse cx="100" cy="68" rx="11" ry="31" ${line(2.5)}/><ellipse cx="100" cy="68" rx="22" ry="31" ${line(2.5)}/>
      <rect x="87" y="99" width="26" height="9" rx="3" fill="${G}"/>
      <path d="M95 108 L97 172 H103 L105 108 Z" ${line(4)}/>
      <path d="M90 128 h20 M91 146 h18" ${line(2.5)}/>
      <circle cx="100" cy="180" r="7" fill="${G}"/>
    </g>
    ${waves ? `<path d="M22 168 q13 -12 26 0 t26 0 t26 0 t26 0 t26 0 t26 0" ${line(3.5)}/><path d="M35 184 q13 -12 26 0 t26 0 t26 0 t26 0 t26 0" ${line(3)}/>` : ''}`,
  // The Haridasas: the tambura
  tambura: () => `
    <g transform="rotate(30 100 104)">
      <circle cx="100" cy="146" r="38" ${line(4.5)}/>
      <circle cx="100" cy="146" r="27" ${line(1.8)}/>
      <rect x="86" y="140" width="28" height="7" rx="2" fill="${G}"/>
      <path d="M92 108 V28 Q92 14 100 14 Q108 14 108 28 V108" ${line(4.5)}/>
      <path d="M92 34 h-13 M92 50 h-13 M108 42 h13 M108 58 h13" ${line(4)}/>
      <path d="M96 26 V160 M100 26 V160 M104 26 V160" ${line(1.4)}/>
    </g>`,
  // A book on its folding stand (vyasa-pitha)
  book: () => `
    <path d="M52 178 L140 112 M148 178 L60 112" ${line(5.5)}/>
    <path d="M100 104 C 80 88, 52 84, 30 92 V56 C 52 48, 80 52, 100 68 Z" ${line(4.5)}/>
    <path d="M100 104 C 120 88, 148 84, 170 92 V56 C 148 48, 120 52, 100 68 Z" ${line(4.5)}/>
    <path d="M44 68 C 58 64, 74 66, 88 74 M44 80 C 58 76, 74 78, 88 86 M112 74 C 126 66, 142 64, 156 68 M112 86 C 126 78, 142 76, 156 80" ${line(2.2)}/>
    <path d="M100 40 C 107 30, 106 22, 100 14 C 94 22, 93 30, 100 40 Z" fill="${G}"/>`,
  // Valmiki Ramayana: Rama's bow (Kodanda) with three arrows
  bow: () => {
    const arrow = (a) => `<g transform="rotate(${a} 72 100)">
      <path d="M72 100 H176" ${line(3.5)}/>
      <path d="M190 100 L172 91 L176 100 L172 109 Z" fill="${G}"/>
      <path d="M84 100 l-9 -9 M92 100 l-9 -9 M84 100 l-9 9 M92 100 l-9 9" ${line(2.4)}/>
    </g>`;
    return `
    ${[-24, 0, 24].map(arrow).join('')}
    <path d="M74 16 C 22 54, 22 146, 74 184" ${line(6.5)}/>
    <path d="M74 16 C 80 12, 88 14, 88 22 M74 184 C 80 188, 88 186, 88 178" ${line(4)}/>
    <path d="M74 16 L72 100 L74 184" ${line(1.8)}/>
    <rect x="28" y="86" width="16" height="28" rx="5" fill="${G}"/>
    <path d="M30 74 h12 M30 126 h12" ${line(3)}/>`;
  },
  // Mahabharata: the chariot wheel
  wheel: () => `
    <circle cx="100" cy="100" r="84" ${line(7)}/>
    <circle cx="100" cy="100" r="70" ${line(2.5)}/>
    ${Array.from({ length: 24 }, (_, i) => { const a = (i * 15 * Math.PI) / 180; return `<circle cx="${(100 + 77 * Math.cos(a)).toFixed(1)}" cy="${(100 + 77 * Math.sin(a)).toFixed(1)}" r="2.6" fill="${G}"/>`; }).join('')}
    ${Array.from({ length: 12 }, (_, i) => `<path d="M100 82 V30" ${line(4)} transform="rotate(${i * 30} 100 100)"/><circle cx="100" cy="46" r="3.4" fill="${G}" transform="rotate(${i * 30} 100 100)"/>`).join('')}
    <circle cx="100" cy="100" r="18" ${line(4.5)}/>
    <circle cx="100" cy="100" r="7" fill="${G}"/>`,
  // Vayu: a banner in the wind
  flag: () => `
    <path d="M62 24 V180" ${line(5.5)}/><circle cx="62" cy="20" r="6" fill="${G}"/>
    <path d="M62 34 C 92 22, 112 48, 150 34 L132 62 L150 90 C 112 104, 92 78, 62 90 Z" ${line(4.5)}/>
    <circle cx="98" cy="62" r="11" ${line(3)}/>
    <path d="M92 124 h56 q14 0 14 -12 q0 -10 -10 -10 q-8 0 -8 8" ${line(3.5)}/>
    <path d="M84 146 h78 q14 0 14 12 q0 10 -10 10 q-8 0 -8 -8" ${line(3.5)}/>
    <path d="M96 168 h34" ${line(3.5)}/>`,
  // Devi / Shiva: the trident
  trishula: (lotus) => `
    <path d="M100 26 V${lotus ? 150 : 182}" ${line(5.5)}/>
    <path d="M100 26 l-9 20 h18 Z" fill="${G}"/>
    <path d="M100 104 C 62 104, 52 74, 58 40" ${line(5)}/><path d="M100 104 C 138 104, 148 74, 142 40" ${line(5)}/>
    <path d="M58 30 l-8 18 h16 Z M142 30 l-8 18 h16 Z" fill="${G}"/>
    <path d="M84 118 h32" ${line(5)}/>
    ${lotus
      ? `<path d="M100 150 C 112 160, 112 172, 100 182 C 88 172, 88 160, 100 150 Z" ${line(3.5)}/>
         <path d="M100 182 C 78 182, 66 170, 64 156 C 78 156, 90 164, 100 182 Z M100 182 C 122 182, 134 170, 136 156 C 122 156, 110 164, 100 182 Z" ${line(3.5)}/>
         <path d="M48 176 C 62 186, 84 186, 100 182 C 116 186, 138 186, 152 176" ${line(3.5)}/>`
      : `<path d="M82 132 L118 156 M118 132 L82 156 M82 132 h36 M82 156 h36" ${line(3.5)}/>`}`,
  // Lalita: the Sri Chakra
  srichakra: () => `
    <circle cx="100" cy="100" r="88" ${line(3.5)}/><circle cx="100" cy="100" r="66" ${line(3)}/>
    ${[0, 45, 90, 135, 180, 225, 270, 315].map((a) => `<path d="M100 12 C 112 22, 112 30, 100 34 C 88 30, 88 22, 100 12 Z" ${line(2.6)} transform="rotate(${a + 22.5} 100 100)"/>`).join('')}
    <path d="M100 160 L46 70 H154 Z M100 140 L62 80 H138 Z M100 122 L78 90 H122 Z" ${line(3)}/>
    <path d="M100 38 L44 128 H156 Z M100 60 L64 118 H136 Z" ${line(3)}/>
    <circle cx="100" cy="101" r="4.5" fill="${G}"/>`,
  // A lotus, with waves for the "wave of beauty"
  lotus: (waves) => `
    <g transform="translate(0 ${waves ? -14 : 4})">
      <path d="M100 44 C 122 74, 122 112, 100 140 C 78 112, 78 74, 100 44 Z" ${line(4.5)}/>
      <path d="M100 140 C 70 128, 54 100, 58 66 C 76 76, 90 96, 96 118" ${line(4.5)}/><path d="M100 140 C 130 128, 146 100, 142 66 C 124 76, 110 96, 104 118" ${line(4.5)}/>
      <path d="M100 140 C 62 142, 34 124, 24 96 C 44 94, 62 102, 76 116" ${line(4.5)}/><path d="M100 140 C 138 142, 166 124, 176 96 C 156 94, 138 102, 124 116" ${line(4.5)}/>
      <path d="M40 140 C 60 156, 140 156, 160 140" ${line(4.5)}/>
    </g>
    ${waves ? `<path d="M22 164 q13 -12 26 0 t26 0 t26 0 t26 0 t26 0 t26 0" ${line(3.5)}/><path d="M35 182 q13 -12 26 0 t26 0 t26 0 t26 0 t26 0" ${line(3)}/>` : ''}`,
  // Ganesha: the modaka on a leaf
  modaka: () => `
    <path d="M100 40 C 104 58, 150 84, 150 120 C 150 146, 128 158, 100 158 C 72 158, 50 146, 50 120 C 50 84, 96 58, 100 40 Z" ${line(4.5)}/>
    <path d="M100 44 V156 M97 60 C 78 88, 70 116, 72 152 M103 60 C 122 88, 130 116, 128 152" ${line(2.6)}/>
    <path d="M28 166 C 60 184, 140 184, 172 166" ${line(4.5)}/>`,
  // Surya
  sun: () => `
    <circle cx="100" cy="100" r="34" ${line(4.5)}/><circle cx="100" cy="100" r="22" ${line(2)}/>
    ${Array.from({ length: 12 }, (_, i) => `<path d="M${i % 2 ? '-6 -46 L0 -64 L6 -46' : '-7 -46 L0 -84 L7 -46'} Z" fill="${G}" transform="translate(100 100) rotate(${i * 30})"/>`).join('')}`,
  // Subrahmanya: the vel
  vel: () => `
    <path d="M100 104 V186" ${line(5.5)}/>
    <path d="M100 12 C 116 46, 134 78, 100 108 C 66 78, 84 46, 100 12 Z" ${line(4.5)}/>
    <path d="M100 34 V98" ${line(2.6)}/>
    <path d="M78 118 h44 M86 130 h28" ${line(5)}/>
    <circle cx="100" cy="188" r="5" fill="${G}"/>`,
};

// ---- a cover: cloth, spine, frame and a medallion; the title is drawn by the app ----
const W = 450, H = 630, SP = 30;
function cover({ id, top, bottom, emblem }) {
  const u = (n) => `${n}-${id}`;
  const cx = (SP + W) / 2, cy = 196, r = 112;
  const x1 = SP + 20, y1 = 22, x2 = W - 20, y2 = H - 22, k = 18;
  const frame = (d) => `M${x1 + k + d} ${y1 + d} H${x2 - k - d} A${k} ${k} 0 0 0 ${x2 - d} ${y1 + k + d} V${y2 - k - d} A${k} ${k} 0 0 0 ${x2 - k - d} ${y2 - d} H${x1 + k + d} A${k} ${k} 0 0 0 ${x1 + d} ${y2 - k - d} V${y1 + k + d} A${k} ${k} 0 0 0 ${x1 + k + d} ${y1 + d} Z`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <defs>
    <linearGradient id="${u('cloth')}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${top}"/><stop offset="1" stop-color="${bottom}"/></linearGradient>
    <radialGradient id="${u('glow')}" cx="50%" cy="31%" r="55%"><stop offset="0" stop-color="#fff" stop-opacity="0.16"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
    <linearGradient id="${u('spine')}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#000" stop-opacity="0.42"/><stop offset="0.8" stop-color="#000" stop-opacity="0.18"/><stop offset="1" stop-color="#000" stop-opacity="0.34"/></linearGradient>
    <pattern id="${u('weave')}" width="26" height="26" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 H26 M0 0 V26" stroke="${G}" stroke-width="1" opacity="0.10"/><circle cx="13" cy="13" r="1.4" fill="${G}" opacity="0.14"/></pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#${u('cloth')})"/><rect width="${W}" height="${H}" fill="url(#${u('weave')})"/><rect width="${W}" height="${H}" fill="url(#${u('glow')})"/>
  <rect width="${SP}" height="${H}" fill="url(#${u('spine')})"/><path d="M${SP} 0 V${H}" stroke="${G}" stroke-width="1.5" opacity="0.55"/>
  <path d="M0 40 H${SP} M0 48 H${SP} M0 ${H - 40} H${SP} M0 ${H - 48} H${SP}" stroke="${G}" stroke-width="2" opacity="0.6"/>
  <path d="${frame(0)}" fill="none" stroke="${G}" stroke-width="3.5"/><path d="${frame(9)}" fill="none" stroke="${G}" stroke-width="1.2" opacity="0.8"/>
  ${[[x1, y1], [x2, y1], [x1, y2], [x2, y2]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5" fill="${G}"/>`).join('')}
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="#000" fill-opacity="0.16"/>
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${G}" stroke-width="3"/><circle cx="${cx}" cy="${cy}" r="${r - 13}" fill="none" stroke="${G}" stroke-width="1.2"/>
  ${Array.from({ length: 40 }, (_, i) => { const a = (i * 9 * Math.PI) / 180; return `<circle cx="${(cx + (r - 6.5) * Math.cos(a)).toFixed(1)}" cy="${(cy + (r - 6.5) * Math.sin(a)).toFixed(1)}" r="2" fill="${G}"/>`; }).join('')}
  <g transform="translate(${cx - 90} ${cy - 90}) scale(0.9)">${emblem}</g>
  </svg>`;
}

// ---- a wide banner for the top of a book's own page: words on the left (drawn by the app), emblem on the right ----
const BW = 900, BH = 520;
function banner({ id, top, bottom, emblem }) {
  const u = (n) => `b${n}-${id}`;
  const cx = 664, cy = 260, r = 154;
  const x1 = 18, y1 = 18, x2 = BW - 18, y2 = BH - 18, k = 22;
  const frame = (d) => `M${x1 + k + d} ${y1 + d} H${x2 - k - d} A${k} ${k} 0 0 0 ${x2 - d} ${y1 + k + d} V${y2 - k - d} A${k} ${k} 0 0 0 ${x2 - k - d} ${y2 - d} H${x1 + k + d} A${k} ${k} 0 0 0 ${x1 + d} ${y2 - k - d} V${y1 + k + d} A${k} ${k} 0 0 0 ${x1 + k + d} ${y1 + d} Z`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${BW} ${BH}" width="${BW}" height="${BH}">
  <defs>
    <linearGradient id="${u('cloth')}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${top}"/><stop offset="1" stop-color="${bottom}"/></linearGradient>
    <radialGradient id="${u('glow')}" cx="76%" cy="50%" r="42%"><stop offset="0" stop-color="#fff" stop-opacity="0.20"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
    <pattern id="${u('weave')}" width="26" height="26" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 H26 M0 0 V26" stroke="${G}" stroke-width="1" opacity="0.09"/><circle cx="13" cy="13" r="1.4" fill="${G}" opacity="0.12"/></pattern>
  </defs>
  <rect width="${BW}" height="${BH}" fill="url(#${u('cloth')})"/><rect width="${BW}" height="${BH}" fill="url(#${u('weave')})"/><rect width="${BW}" height="${BH}" fill="url(#${u('glow')})"/>
  <path d="${frame(0)}" fill="none" stroke="${G}" stroke-width="3"/><path d="${frame(9)}" fill="none" stroke="${G}" stroke-width="1.2" opacity="0.8"/>
  ${Array.from({ length: 24 }, (_, i) => `<path d="M0 ${-r - 8} C 16 ${-r - 26}, 16 ${-r - 40}, 0 ${-r - 52} C -16 ${-r - 40}, -16 ${-r - 26}, 0 ${-r - 8} Z" fill="none" stroke="${G}" stroke-width="1.6" opacity="0.55" transform="translate(${cx} ${cy}) rotate(${i * 15})"/>`).join('')}
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="#000" fill-opacity="0.18"/>
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${G}" stroke-width="3.5"/><circle cx="${cx}" cy="${cy}" r="${r - 16}" fill="none" stroke="${G}" stroke-width="1.3"/>
  ${Array.from({ length: 48 }, (_, i) => { const a = (i * 7.5 * Math.PI) / 180; return `<circle cx="${(cx + (r - 8) * Math.cos(a)).toFixed(1)}" cy="${(cy + (r - 8) * Math.sin(a)).toFixed(1)}" r="2.4" fill="${G}"/>`; }).join('')}
  <g transform="translate(${cx - 124} ${cy - 124}) scale(1.24)">${emblem}</g>
  </svg>`;
}

// ---- a round emblem for a deity ----
function disc({ id, top, bottom, emblem }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="240" height="240">
  <defs><radialGradient id="d-${id}" cx="50%" cy="38%" r="70%"><stop offset="0" stop-color="${top}"/><stop offset="1" stop-color="${bottom}"/></radialGradient></defs>
  <circle cx="120" cy="120" r="118" fill="url(#d-${id})"/><circle cx="120" cy="120" r="110" fill="none" stroke="${G}" stroke-width="2.5"/>
  <g transform="translate(36 36) scale(0.84)">${emblem}</g></svg>`;
}

const COVERS = [
  { id: 'gita', top: '#A8401B', bottom: '#63190A', emblem: E.flute() },
  { id: 'vishnu-sahasranama', top: '#2A4F86', bottom: '#12264A', emblem: E.vishnu() },
  { id: 'sundarakanda', top: '#37714A', bottom: '#173A24', emblem: E.gada(true) },
  { id: 'ramayana', top: '#66752A', bottom: '#2E380D', emblem: E.bow() },
  { id: 'mahabharata', top: '#7A3328', bottom: '#3A110C', emblem: E.wheel() },
  { id: 'harikathamrutasara', top: '#267177', bottom: '#0F3B40', emblem: E.tambura() },
  { id: 'sumadhvavijaya', top: '#7E5226', bottom: '#412710', emblem: E.book() },
  { id: 'vayu-stuti', top: '#B4691C', bottom: '#6A3608', emblem: E.flag() },
  { id: 'devimahatmya', top: '#A72650', bottom: '#5A0F28', emblem: E.trishula(true) },
  { id: 'lalitha-sahasranama', top: '#8B3480', bottom: '#461542', emblem: E.srichakra() },
  { id: 'saundarya-lahari', top: '#54479C', bottom: '#261E55', emblem: E.lotus(true) },
];
const DISCS = [
  { id: 'vishnu', top: '#2A4F86', bottom: '#12264A', emblem: E.vishnu() },
  { id: 'devi', top: '#A72650', bottom: '#5A0F28', emblem: E.lotus(false) },
  { id: 'shiva', top: '#4A5568', bottom: '#1F2733', emblem: E.trishula(false) },
  { id: 'ganesha', top: '#B4691C', bottom: '#6A3608', emblem: E.modaka() },
  { id: 'vayu', top: '#37714A', bottom: '#173A24', emblem: E.gada(false) },
  { id: 'surya', top: '#B8501A', bottom: '#6E2408', emblem: E.sun() },
  { id: 'subrahmanya', top: '#8B3480', bottom: '#461542', emblem: E.vel() },
  { id: 'guru', top: '#7E5226', bottom: '#412710', emblem: E.book() },
];

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage();
  const shot = async (svg, out, w, h, transparent) => {
    await p.setViewportSize({ width: w, height: h });
    await p.setContent(`<html><body style="margin:0;background:transparent">${svg}</body></html>`);
    await p.screenshot(out.endsWith('.jpg') ? { path: out, type: 'jpeg', quality: 86, clip: { x: 0, y: 0, width: w, height: h } } : { path: out, omitBackground: transparent, clip: { x: 0, y: 0, width: w, height: h } });
  };
  const root = path.join(__dirname, '..', '..');
  for (const c of COVERS) await shot(cover(c), path.join(root, 'covers', `${c.id}.jpg`), W, H, false);
  for (const c of COVERS.filter((c) => ['gita', 'sundarakanda', 'ramayana', 'mahabharata', 'harikathamrutasara', 'sumadhvavijaya', 'devimahatmya'].includes(c.id))) await shot(banner(c), path.join(root, 'covers', `${c.id}-banner.jpg`), BW, BH, false);
  for (const d of DISCS) await shot(disc(d), path.join(root, 'deities', `${d.id}.png`), 240, 240, true);
  // contact sheet for checking the drawings
  const sheet = `<div style="zoom:0.6">${banner(COVERS[0])}${banner(COVERS[3])}${banner(COVERS[4])}</div>` + `<div style="display:flex;flex-wrap:wrap;gap:8px;background:#fff9f0;padding:8px;width:1180px">${COVERS.map((c) => `<div style="zoom:0.5">${cover(c)}</div>`).join('')}</div><div style="display:flex;gap:8px;background:#fff9f0;padding:8px">${DISCS.map((d) => `<div style="zoom:0.55">${disc(d)}</div>`).join('')}</div>`;
  await p.setViewportSize({ width: 1200, height: 900 });
  await p.setContent(`<html><body style="margin:0">${sheet}</body></html>`);
  if (process.argv[2]) await p.screenshot({ path: process.argv[2], fullPage: true });
  await b.close();
})();
