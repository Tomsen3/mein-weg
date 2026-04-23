// ============================================================
// SUPABASE REST HELFER
'use strict';

// ============================================================

async function sbFetch(path, options = {}) {
  const url = SB_URL + '/rest/v1/' + path;
  const headers = {
    'apikey': SB_ANON,
    'Authorization': 'Bearer ' + SB_ANON,
    'Content-Type': 'application/json',
    'Prefer': options.prefer || 'return=representation',
    ...( options.headers || {} )
  };
  delete options.prefer;
  delete options.headers;
  const res = await fetch(url, { ...options, headers });
  if (!res.ok) {
    const err = await res.text();
    throw new Error('Supabase ' + res.status + ': ' + err);
  }
  if (res.status === 204) return null;
  return res.json();
}

// GET mit Filter-String, z.B. 'mw_rezepte?user_id=eq.UUID&order=created_at.desc'
async function sbGet(path) { return sbFetch(path, { method: 'GET' }); }

async function sbPost(table, body) {
  return sbFetch(table, { method: 'POST', body: JSON.stringify(body) });
}

async function sbPatch(path, body) {
  return sbFetch(path, { method: 'PATCH', body: JSON.stringify(body), prefer: 'return=representation' });
}

async function sbDelete(path) {
  return sbFetch(path, { method: 'DELETE', prefer: 'return=minimal', headers: { 'Prefer': 'return=minimal' } });
}

let sbOnline = null; // null = unbekannt, true = ok, false = fehler

function setSbStatus(ok, msg) {
  sbOnline = ok;
  ['settings'].forEach(ctx => {
    const dot  = document.getElementById('sb-dot-'+ctx);
    const text = document.getElementById('sb-text-'+ctx);
    if (dot)  dot.className  = 'sb-dot' + (ok ? ' ok' : ' err');
    if (text) text.textContent = msg;
  });
  const dotR  = document.getElementById('sb-dot-rez');
  const textR = document.getElementById('sb-text-rez');
  if (dotR)  dotR.className  = 'sb-dot' + (ok ? ' ok' : ' err');
  if (textR) textR.textContent = msg;
}

async function checkSbConnection() {
  try {
    await sbGet('mw_rezepte?limit=1&select=id');
    setSbStatus(true, 'Verbunden');
  } catch(e) {
    setSbStatus(false, 'Nicht verbunden');
  }
}
// ============================================================
// SUPABASE â€“ TAGESLOG
// ============================================================

async function sbSaveDayData(datum, daten) {
  try {
    await sbFetch('mw_tageslog?user_id=eq.' + USER_ID + '&datum=eq.' + datum, {
      method: 'POST',
      body: JSON.stringify({ user_id: USER_ID, datum: datum, daten: daten, updated_at: new Date().toISOString() }),
      prefer: 'resolution=merge-duplicates,return=minimal',
      headers: { 'Prefer': 'resolution=merge-duplicates,return=minimal' }
    });
  } catch(e) {
    console.warn('sbSaveDayData Fehler:', e);
  }
}

async function sbLoadDayData(datum) {
  try {
    const rows = await sbGet('mw_tageslog?user_id=eq.' + USER_ID + '&datum=eq.' + datum + '&limit=1');
    if (rows && rows.length > 0) {
      return rows[0].daten;
    }
    return null;
  } catch(e) {
    console.warn('sbLoadDayData Fehler:', e);
    return null;
  }
}
// ============================================================
// DATEN & SETTINGS (localStorage)
// ============================================================

const KEY   = 'meinweg_';
const TODAY = () => new Date().toISOString().slice(0,10);

function ls(k)      { try { return JSON.parse(localStorage.getItem(KEY+k)); } catch(e) { return null; } }
function lsSet(k,v) { localStorage.setItem(KEY+k, JSON.stringify(v)); }

const defaultSettings = { start: 104, ziel: 87, kcalMax: 1800, wasserMax: 2.5, schritteMax: 8000, fastenH: 16 };

// ---------- SETTINGS ----------

async function sbLoadSettings() {
  try {
    const rows = await sbGet('mw_einstellungen?user_id=eq.' + USER_ID + '&limit=1');
    if (rows && rows.length > 0) {
      const daten = rows[0].daten || {};
      lsSet('settings', daten);   // lokalen Cache aktualisieren
      return daten;
    }
    return null;
  } catch(e) {
    console.warn('sbLoadSettings Fehler â€“ nutze localStorage:', e);
    return null;
  }
}

async function sbSaveSettings(obj) {
  try {
    await sbFetch('mw_einstellungen?user_id=eq.' + USER_ID, {
      method: 'POST',
      body: JSON.stringify({ user_id: USER_ID, daten: obj }),
      prefer: 'resolution=merge-duplicates,return=minimal',
      headers: { 'Prefer': 'resolution=merge-duplicates,return=minimal' }
    });
  } catch(e) {
    console.warn('sbSaveSettings Fehler â€“ nur localStorage gespeichert:', e);
  }
}

function getSettings() {
  return Object.assign({}, defaultSettings, ls('settings') || {});
}

const _dayCache = {};   // RAM-Cache: date â†’ data (vermeidet doppelte SB-Calls pro Session)

async function sbLoadDayData(date) {
  try {
    const rows = await sbGet('mw_tageslog?user_id=eq.' + USER_ID + '&datum=eq.' + date + '&limit=1');
    if (rows && rows.length > 0) {
      const daten = rows[0].daten || { kg: null, wasser: 0, schritte: 0, meals: [] };
      lsSet('day_' + date, daten);
      _dayCache[date] = daten;
      return daten;
    }
    return null;
  } catch(e) {
    console.warn('sbLoadDayData Fehler:', e);
    return null;
  }
}

async function sbSaveDayData(date, obj) {
  try {
    await sbFetch('mw_tageslog?user_id=eq.' + USER_ID + '&datum=eq.' + date, {
      method: 'POST',
      body: JSON.stringify({ user_id: USER_ID, datum: date, daten: obj }),
      prefer: 'resolution=merge-duplicates,return=minimal',
      headers: { 'Prefer': 'resolution=merge-duplicates,return=minimal' }
    });
  } catch(e) {
    console.warn('sbSaveDayData Fehler â€“ nur localStorage gespeichert:', e);
  }
}

function getDayData(date) {
  // Gibt lokalen Cache / localStorage zurÃ¼ck (synchron fÃ¼r Render-Funktionen)
  if (_dayCache[date]) return _dayCache[date];
  const local = ls('day_' + date);
  if (local) { _dayCache[date] = local; return local; }
  return { kg: null, wasser: 0, schritte: 0, meals: [] };
}

function saveDayData(date, data) {
  _dayCache[date] = data;
  lsSet('day_' + date, data);   // sofort lokal (synchron)
  sbSaveDayData(date, data);    // Supabase im Hintergrund
}

// ============================================================
// LEBENSMITTEL-DATENBANK (localStorage)
// ============================================================

const FOOD_DB_DEFAULT = [
  {id:'v01',name:'Brokkoli',kat:'GemÃ¼se',kcal:34},{id:'v02',name:'Karotte',kat:'GemÃ¼se',kcal:41},
  {id:'v03',name:'Spinat',kat:'GemÃ¼se',kcal:23},{id:'v04',name:'Tomate',kat:'GemÃ¼se',kcal:18},
  {id:'v05',name:'Gurke',kat:'GemÃ¼se',kcal:15},{id:'v06',name:'Zucchini',kat:'GemÃ¼se',kcal:17},
  {id:'v07',name:'Paprika (rot)',kat:'GemÃ¼se',kcal:31},{id:'v08',name:'Blumenkohl',kat:'GemÃ¼se',kcal:25},
  {id:'v09',name:'Aubergine',kat:'GemÃ¼se',kcal:25},{id:'v10',name:'Zwiebel',kat:'GemÃ¼se',kcal:40},
  {id:'v11',name:'Knoblauch',kat:'GemÃ¼se',kcal:149},{id:'v12',name:'Feldsalat',kat:'GemÃ¼se',kcal:19},
  {id:'v13',name:'Eisbergsalat',kat:'GemÃ¼se',kcal:14},{id:'v14',name:'SÃ¼ÃŸkartoffel',kat:'GemÃ¼se',kcal:86},
  {id:'o01',name:'Apfel',kat:'Obst',kcal:52},{id:'o02',name:'Banane',kat:'Obst',kcal:89},
  {id:'o03',name:'Erdbeeren',kat:'Obst',kcal:32},{id:'o04',name:'Heidelbeeren',kat:'Obst',kcal:57},
  {id:'o05',name:'Orange',kat:'Obst',kcal:47},{id:'o06',name:'Weintrauben',kat:'Obst',kcal:69},
  {id:'o07',name:'Wassermelone',kat:'Obst',kcal:30},{id:'o08',name:'Avocado',kat:'Obst',kcal:160},
  {id:'o09',name:'Mango',kat:'Obst',kcal:60},{id:'o10',name:'Kiwi',kat:'Obst',kcal:61},
  {id:'h01',name:'Linsen (rot, roh)',kat:'HÃ¼lsenfrÃ¼chte',kcal:353},{id:'h02',name:'Kichererbsen (Dose)',kat:'HÃ¼lsenfrÃ¼chte',kcal:139},
  {id:'h03',name:'Kidneybohnen (Dose)',kat:'HÃ¼lsenfrÃ¼chte',kcal:127},{id:'h04',name:'WeiÃŸe Bohnen (Dose)',kat:'HÃ¼lsenfrÃ¼chte',kcal:114},
  {id:'h05',name:'Edamame',kat:'HÃ¼lsenfrÃ¼chte',kcal:121},
  {id:'t01',name:'Tofu (natur)',kat:'Tofu/Tempeh/Fleischersatz',kcal:76},{id:'t02',name:'Tempeh',kat:'Tofu/Tempeh/Fleischersatz',kcal:195},
  {id:'t03',name:'Seitan',kat:'Tofu/Tempeh/Fleischersatz',kcal:130},{id:'t04',name:'Soja-Granulat (trocken)',kat:'Tofu/Tempeh/Fleischersatz',kcal:345},
  {id:'f01',name:'HÃ¤hnchenbrust',kat:'Fleisch/Fisch',kcal:120},{id:'f02',name:'Lachs',kat:'Fleisch/Fisch',kcal:208},
  {id:'f03',name:'Thunfisch (Dose, Wasser)',kat:'Fleisch/Fisch',kcal:116},{id:'f04',name:'Ei',kat:'Fleisch/Fisch',kcal:155},
  {id:'m01',name:'Magerquark',kat:'Milchprodukte',kcal:67},{id:'m02',name:'Naturjoghurt (1,5%)',kat:'Milchprodukte',kcal:42},
  {id:'m03',name:'Skyr',kat:'Milchprodukte',kcal:63},{id:'m04',name:'HÃ¼ttenkÃ¤se',kat:'Milchprodukte',kcal:85},
  {id:'m05',name:'Gouda (jung)',kat:'Milchprodukte',kcal:356},{id:'m06',name:'Feta',kat:'Milchprodukte',kcal:264},
  {id:'m07',name:'Butter',kat:'Milchprodukte',kcal:740},{id:'m09',name:'Griechischer Joghurt (10%)',kat:'Milchprodukte',kcal:133},
  {id:'b01',name:'Haferflocken',kat:'Brot/Getreide',kcal:372},{id:'b02',name:'Vollkornbrot',kat:'Brot/Getreide',kcal:218},
  {id:'b03',name:'WeiÃŸbrot',kat:'Brot/Getreide',kcal:266},{id:'b04',name:'Basmati-Reis (roh)',kat:'Brot/Getreide',kcal:349},
  {id:'b05',name:'Vollkornnudeln (roh)',kat:'Brot/Getreide',kcal:330},{id:'b06',name:'Pasta (hell, roh)',kat:'Brot/Getreide',kcal:358},
  {id:'b07',name:'Quinoa (roh)',kat:'Brot/Getreide',kcal:368},{id:'b09',name:'KnÃ¤ckebrot (Roggen)',kat:'Brot/Getreide',kcal:321},
  {id:'n01',name:'Mandeln',kat:'NÃ¼sse/Samen',kcal:579},{id:'n02',name:'WalnÃ¼sse',kat:'NÃ¼sse/Samen',kcal:654},
  {id:'n03',name:'Cashews',kat:'NÃ¼sse/Samen',kcal:553},{id:'n04',name:'Chiasamen',kat:'NÃ¼sse/Samen',kcal:486},
  {id:'n05',name:'Sonnenblumenkerne',kat:'NÃ¼sse/Samen',kcal:584},{id:'n06',name:'Leinsamen',kat:'NÃ¼sse/Samen',kcal:534},
  {id:'s01',name:'Zartbitterschokolade (70%)',kat:'SÃ¼ÃŸigkeiten',kcal:579},{id:'s02',name:'Vollmilchschokolade',kat:'SÃ¼ÃŸigkeiten',kcal:535},
  {id:'s03',name:'GummibÃ¤rchen',kat:'SÃ¼ÃŸigkeiten',kcal:343},{id:'s05',name:'Milcheis (Vanille)',kat:'SÃ¼ÃŸigkeiten',kcal:207},
  {id:'k01',name:'Kartoffelchips',kat:'Snacks',kcal:536},{id:'k03',name:'Popcorn (gesalzen)',kat:'Snacks',kcal:387},
  {id:'k05',name:'ErdnÃ¼sse (gerÃ¶stet)',kat:'Snacks',kcal:589},
  {id:'l01',name:'OlivenÃ¶l',kat:'Ã–le/Fette',kcal:884},{id:'l02',name:'KokosÃ¶l',kat:'Ã–le/Fette',kcal:862},
  {id:'l03',name:'RapsÃ¶l',kat:'Ã–le/Fette',kcal:884},{id:'l04',name:'SesamsÃ¶l',kat:'Ã–le/Fette',kcal:884},
];

function getFoodDB() {
  const stored = ls('food_db');
  if (!stored) { lsSet('food_db', FOOD_DB_DEFAULT); return [...FOOD_DB_DEFAULT]; }
  return stored;
}
function saveFoodDB(db) { lsSet('food_db', db); }
function genFoodId() { return 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2,5); }

// Cache (lebt nur fÃ¼r diese Sitzung, verhindert zu viele API-Calls)
let _rezepteCache = null;
let _bewertungenCache = {};   // rezept_id â†’ sterne
let _favoritenCache = new Set(); // Set von rezept_ids

async function loadRezepteData(force = false) {
  if (_rezepteCache && !force) return;
  try {
    const [rezepte, bew, favs] = await Promise.all([
      sbGet('mw_rezepte?user_id=eq.' + USER_ID + '&order=created_at.desc'),
      sbGet('mw_bewertungen?user_id=eq.' + USER_ID),
      sbGet('mw_favoriten?user_id=eq.' + USER_ID),
    ]);
    _rezepteCache = rezepte || [];
    _bewertungenCache = {};
    (bew || []).forEach(b => { _bewertungenCache[b.rezept_id] = b.sterne; });
    _favoritenCache = new Set((favs || []).map(f => f.rezept_id));
  } catch(e) {
    console.error('Supabase Ladefehler:', e);
    _rezepteCache = [];
    setSbStatus(false, 'Fehler beim Laden');
  }
}

async function sbSaveGewicht(date, kg) {
  try {
    await sbFetch('mw_gewicht?user_id=eq.' + USER_ID + '&datum=eq.' + date, {
      method: 'POST',
      body: JSON.stringify({ user_id: USER_ID, datum: date, kg: kg }),
      prefer: 'resolution=merge-duplicates,return=minimal',
      headers: { 'Prefer': 'resolution=merge-duplicates,return=minimal' }
    });
  } catch(e) {
    console.warn('sbSaveGewicht Fehler â€“ nur localStorage:', e);
  }
}


let fastenInterval = null;

async function sbLoadFastenState() {
  try {
    const rows = await sbGet('mw_fasten?user_id=eq.' + USER_ID + '&limit=1');
    if (rows && rows.length > 0) {
      const r = rows[0];
      const state = {
        active:  r.start_time !== null,
        start:   r.start_time ? new Date(r.start_time).getTime() : null,
        zielH:   r.ziel_stunden || 16
      };
      lsSet('fasten', state);
      return state;
    }
    return null;
  } catch(e) {
    console.warn('sbLoadFastenState Fehler:', e);
    return null;
  }
}

async function sbSaveFastenState(s) {
  try {
    const payload = {
      user_id:       USER_ID,
      start_time:    s.active && s.start ? new Date(s.start).toISOString() : null,
      ziel_stunden:  s.zielH || 16
    };
    await sbFetch('mw_fasten?user_id=eq.' + USER_ID, {
      method: 'POST',
      body: JSON.stringify(payload),
      prefer: 'resolution=merge-duplicates,return=minimal',
      headers: { 'Prefer': 'resolution=merge-duplicates,return=minimal' }
    });
  } catch(e) {
    console.warn('sbSaveFastenState Fehler â€“ nur localStorage:', e);
  }
}

function getFastenState() {
  return ls('fasten') || { active: false, start: null, zielH: 16 };
}

function saveFastenState(s) {
  lsSet('fasten', s);       // sofort lokal
  sbSaveFastenState(s);     // Supabase im Hintergrund
}

function setFastenZiel(h) {
