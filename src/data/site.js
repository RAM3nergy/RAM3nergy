// ---------------------------------------------------------------------------
// RAM3nergy site-wide data — single source of truth for products, pricing,
// calculator physics, and contact channels.
// ---------------------------------------------------------------------------

export const WHATSAPP_NUMBER = '923455124790'; // E.164, no '+' — replace with the business line
export const PHONE_DISPLAY = '+92 345 5124 790';
export const EMAIL = 'sales@ram3nergy.pk';
export const ADDRESS = 'Islamabad, Pakistan';

export const waLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

// --- WhatsApp message templates --------------------------------------------
export const WA_DEFAULT =
  'Assalam-o-Alaikum RAM3nergy! I need help sizing a LiFePO4 battery pack for my home. Can you advise?';

export const WA_QUOTE = (series) =>
  `Assalam-o-Alaikum RAM3nergy! I would like a formal quotation for the ${series} series LiFePO4 battery pack. Please share availability and delivery time for Islamabad.`;

export const WA_CALC = ({ name, qty, loadW, runtimeH, pack, backupH, energyWh }) =>
  `Assalam-o-Alaikum RAM3nergy! I just used your online load calculator.\n\n` +
  `My connected load: ${loadW} W\n` +
  `Appliances: ${qty} item(s)${name ? ` — ${name}` : ''}\n` +
  `Daily energy need: ~${energyWh} Wh\n` +
  `Recommended pack: ${pack}\n` +
  `Backup target: ${backupH} hour(s)\n\n` +
  `Please confirm the sizing and share a quotation.`;

export const WA_CONTACT = ({ name, inquiry, capacity, custom, location, message }) => {
  const lines = [
    'Assalam-o-Alaikum RAM3nergy! Inquiry from your website:',
    `Name: ${name}`,
    `Inquiry type: ${inquiry}`,
  ];
  if (capacity) lines.push(`Solar capacity: ${capacity}`);
  if (custom) lines.push(`Custom build: ${custom}`);
  lines.push(`Location: ${location}`);
  if (message) lines.push(`Details: ${message}`);
  return lines.join('\n');
};

// --- Product catalog --------------------------------------------------------
export const SERIES = {
  markhor: {
    id: 'markhor',
    name: 'Markhor Series',
    tier: 'Apex Tier',
    icon: '🐐',
    blurb:
      'Flagship packs built exclusively on verified Grade-A+ prismatic cells with active-balancing BMS. For mission-critical homes, offices, and anyone who refuses to compromise.',
    highlight: 'Grade-A+ cells · Active balancing · 5-year warranty',
    priceNote: 'Premium executive pricing',
  },
  urial: {
    id: 'urial',
    name: 'Urial Series',
    tier: 'Value Tier',
    icon: '🐏',
    blurb:
      'The generator-killer. Grade-A cells with a standard smart BMS at a price point engineered to retire your petrol generator for good.',
    highlight: 'Grade-A cells · Smart BMS · 3-year warranty',
    priceNote: 'Generator-replacement pricing',
  },
};

// Estimated street prices in PKR (indicative — formal quotes on WhatsApp).
export const PRODUCTS = [
  {
    id: 'urial-5k',
    series: 'urial',
    model: 'Urial 5K',
    capacityKwh: 5.12,
    voltage: '51.2 V',
    config: '16S1P · 280 Ah',
    discharge: '100 A continuous (≈5 kW)',
    bms: 'Smart BMS (Bluetooth, Daly/JBD class)',
    cellGrade: 'Grade-A',
    warrantyYears: 3,
    pricePkr: 295000,
  },
  {
    id: 'urial-10k',
    series: 'urial',
    model: 'Urial 10K',
    capacityKwh: 10.24,
    voltage: '51.2 V',
    config: '16S1P · 560 Ah (2P280)',
    discharge: '200 A continuous (≈10 kW)',
    bms: 'Smart BMS (Bluetooth, Daly/JBD class)',
    cellGrade: 'Grade-A',
    warrantyYears: 3,
    pricePkr: 560000,
  },
  {
    id: 'markhor-7k',
    series: 'markhor',
    model: 'Markhor 7K',
    capacityKwh: 7.17,
    voltage: '51.2 V',
    config: '16S1P · EVE/REPT 314 Ah class',
    discharge: '150 A continuous (≈7.5 kW)',
    bms: 'Active-balancing BMS (1 A balance current)',
    cellGrade: 'Grade-A+',
    warrantyYears: 5,
    pricePkr: 465000,
  },
  {
    id: 'markhor-14k',
    series: 'markhor',
    model: 'Markhor 14K',
    capacityKwh: 14.34,
    voltage: '51.2 V',
    config: '16S1P · 280 Ah × 2 strings',
    discharge: '200 A continuous (≈10 kW)',
    bms: 'Active-balancing BMS (2 A balance current)',
    cellGrade: 'Grade-A+',
    warrantyYears: 5,
    pricePkr: 850000,
  },
];

export const MARCO_POLO = {
  name: 'Marco Polo Series',
  tier: 'C&I Commercial BESS',
  blurb:
    'Three-phase commercial energy storage from 50 kWh to 500 kWh+. Rack-mounted, parallel-ready, with remote monitoring — engineered for factories, plazas, cold-storage, and tube-well clusters.',
  specs: [
    ['Capacity', '50 kWh – 500 kWh+ (modular, rack-mounted)'],
    ['Architecture', '3-phase 400 V, up to 8 packs in parallel'],
    ['Cells', 'Grade-A+ LFP, QR-traceable, lab-verified'],
    ['BMS', 'Active balancing + CAN/RS485 inverter integration'],
    ['Protection', 'Overcurrent, short-circuit, thermal cutoff, precharge'],
    ['Monitoring', 'Remote telemetry, SOC/SOH dashboards'],
    ['Warranty', '5 years (extendable with O&M contract)'],
  ],
};

// --- Load calculator ---------------------------------------------------------
export const APPLIANCES = [
  { id: 'inverter-ac', label: 'Inverter AC (1–1.5 ton)', watts: 1200, surgeWatts: 2400, hours: 6, max: 4 },
  { id: 'fan', label: 'Ceiling / pedestal fan', watts: 80, surgeWatts: 120, hours: 10, max: 8 },
  { id: 'led', label: 'LED lights (per 5 bulbs)', watts: 50, surgeWatts: 50, hours: 8, max: 6 },
  { id: 'fridge', label: 'Refrigerator (inverter type)', watts: 150, surgeWatts: 600, hours: 8, max: 2 },
  { id: 'freezer', label: 'Deep freezer', watts: 200, surgeWatts: 800, hours: 8, max: 2 },
  { id: 'laptop', label: 'Laptop / computer', watts: 65, surgeWatts: 90, hours: 8, max: 4 },
  { id: 'tv', label: 'LED TV + router', watts: 110, surgeWatts: 150, hours: 6, max: 2 },
  { id: 'wifi', label: 'WiFi router / ONT', watts: 15, surgeWatts: 15, hours: 24, max: 2 },
  { id: 'washing', label: 'Washing machine', watts: 500, surgeWatts: 1500, hours: 1, max: 1 },
  { id: 'water-pump', label: 'Water pump (0.5 HP)', watts: 400, surgeWatts: 1200, hours: 1, max: 1 },
];

export const CALC = {
  SYSTEM_VOLTAGE: 51.2, // volts
  MAX_DOD: 0.85, // usable depth of discharge
  INVERTER_EFF: 0.92, // inverter + wiring efficiency
};

// Pack options the recommendation engine chooses from (ordered small → large).
export const CALC_PACKS = [
  { id: 'urial-5k', name: 'Urial 5K', series: 'urial', usableKwh: 5.12 * CALC.MAX_DOD, maxWatts: 5000 },
  { id: 'urial-10k', name: 'Urial 10K', series: 'urial', usableKwh: 10.24 * CALC.MAX_DOD, maxWatts: 10000 },
  { id: 'markhor-14k', name: 'Markhor 14K', series: 'markhor', usableKwh: 14.34 * CALC.MAX_DOD, maxWatts: 10000 },
  { id: 'marco-polo', name: 'Marco Polo C&I BESS', series: 'marco', usableKwh: 50 * CALC.MAX_DOD, maxWatts: 25000 },
];

export const formatPKR = (n) =>
  'PKR ' + Math.round(n).toLocaleString('en-PK').replace(/,/g, ',');
