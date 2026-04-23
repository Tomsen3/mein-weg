'use strict';

// ============================================================
// KONFIGURATION â€“ HIER ANPASSEN
// ============================================================

// SUPABASE â€“ Werte aus Supabase â†’ Project Settings â†’ API
const SB_URL     = 'https://cnlgpviurgpxcrjtfxqi.supabase.co';
const SB_ANON    = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNubGdwdml1cmdweGNyanRmeHFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3NjExMjQsImV4cCI6MjA4ODMzNzEyNH0.FQ842Ete0xJ1MgCM0aBejDVkBL15-OaCGuN_0Cu80Og';

// VERSION
const APP_VERSION        = '1.6';
const VERSION_URL        = 'https://raw.githubusercontent.com/tomsen3/mein-weg/main/version.json';
const UPDATE_INTERVAL_MS = 6 * 60 * 60 * 1000; // 6 Stunden

// Nutzer-ID (UUID fÃ¼r Supabase â€“ einmalig erzeugt, in localStorage gespeichert)
// Diese ID identifiziert DIESES GerÃ¤t ohne Auth-Login.
function getUserId() {
  let uid = localStorage.getItem('meinweg_uid');
  if (!uid) {
    uid = crypto.randomUUID();
    localStorage.setItem('meinweg_uid', uid);
  }
  return uid;
}
const USER_ID = getUserId();

// ============================================================
// SUPABASE REST HELFER
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

function fillSettingsForm() {
  const ss = getSettings();
  document.getElementById('set-start').value   = ss.start;
  document.getElementById('set-ziel').value    = ss.ziel;
  document.getElementById('set-kcal').value    = ss.kcalMax;
  document.getElementById('set-wasser').value  = ss.wasserMax;
  document.getElementById('set-schritte').value= ss.schritteMax;
}

function saveSettings() {
  const current = getSettings();
  const start = parseFloat(document.getElementById('set-start').value);
  const ziel = parseFloat(document.getElementById('set-ziel').value);
  const kcalMax = parseInt(document.getElementById('set-kcal').value, 10);
  const wasserMax = parseFloat(document.getElementById('set-wasser').value);
  const schritteMax = parseInt(document.getElementById('set-schritte').value, 10);

  if (!Number.isFinite(start) || !Number.isFinite(ziel) || start <= 0 || ziel <= 0) {
    fillSettingsForm();
    toast('Start- und Zielgewicht muessen gueltige Zahlen sein.');
    return;
  }
  if (start <= ziel) {
    fillSettingsForm();
    toast('Das Zielgewicht muss kleiner als das Startgewicht sein.');
    return;
  }
  if (!Number.isInteger(kcalMax) || kcalMax <= 0) {
    fillSettingsForm();
    toast('Bitte ein gueltiges Kalorienziel eingeben.');
    return;
  }
  if (!Number.isFinite(wasserMax) || wasserMax <= 0) {
    fillSettingsForm();
    toast('Bitte ein gueltiges Wasserziel eingeben.');
    return;
  }
  if (!Number.isInteger(schritteMax) || schritteMax <= 0) {
    fillSettingsForm();
    toast('Bitte ein gueltiges Schrittziel eingeben.');
    return;
  }

  const s = {
    ...current,
    start,
    ziel,
    kcalMax,
    wasserMax,
    schritteMax
  };
  lsSet('settings', s);           // sofort lokal speichern (synchron, UI reagiert sofort)
  sbSaveSettings(s);              // Supabase im Hintergrund (fire & forget)
  renderAll();
  toast('Einstellungen gespeichert âœ“');
}

// ---------- TAGESLOG ----------

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

// ============================================================
// FOOD MODAL
// ============================================================

let foodModalMode = 'add';

function openAddFoodModal(prefill) {
  foodModalMode = 'add';
  document.getElementById('food-modal-title').textContent = 'Lebensmittel anlegen';
  document.getElementById('food-modal-id').value = '';
  document.getElementById('fm-name').value = prefill || '';
  document.getElementById('fm-kat').value = 'Sonstiges';
  document.getElementById('fm-kcal').value = '';
  document.getElementById('food-modal').classList.add('open');
}

function openEditFoodModal(id) {
  const db = getFoodDB();
  const item = db.find(f => f.id === id);
  if (!item) return;
  foodModalMode = 'edit';
  document.getElementById('food-modal-title').textContent = 'Lebensmittel bearbeiten';
  document.getElementById('food-modal-id').value = id;
  document.getElementById('fm-name').value = item.name;
  document.getElementById('fm-kat').value = item.kat;
  document.getElementById('fm-kcal').value = item.kcal;
  document.getElementById('food-modal').classList.add('open');
}

function closeFoodModal() { document.getElementById('food-modal').classList.remove('open'); }

function saveFoodModal() {
  const name = document.getElementById('fm-name').value.trim();
  const kat  = document.getElementById('fm-kat').value;
  const kcal = parseInt(document.getElementById('fm-kcal').value);
  if (!name) { toast('Name eingeben'); return; }
  if (!kcal || kcal < 0) { toast('kcal/100g eingeben'); return; }
  const db = getFoodDB();
  if (foodModalMode === 'edit') {
    const id = document.getElementById('food-modal-id').value;
    const idx = db.findIndex(f => f.id === id);
    if (idx >= 0) db[idx] = { id, name, kat, kcal };
    toast('Lebensmittel aktualisiert âœ“');
  } else {
    db.push({ id: genFoodId(), name, kat, kcal });
    toast('Lebensmittel gespeichert âœ“');
  }
  saveFoodDB(db); closeFoodModal(); renderDB();
}

function deleteFoodItem(id) {
  if (!confirm('Lebensmittel aus der Datenbank lÃ¶schen?')) return;
  saveFoodDB(getFoodDB().filter(f => f.id !== id));
  renderDB(); toast('GelÃ¶scht');
}

// ============================================================
// DATENBANK-TAB
// ============================================================

let dbActiveCat = 'Alle';

function renderDB() {
  const db = getFoodDB();
  const searchVal = (document.getElementById('db-search')?.value || '').toLowerCase();
  const cats = ['Alle', ...new Set(db.map(f => f.kat))];
  const filterEl = document.getElementById('db-cat-filter');
  if (filterEl) {
    filterEl.innerHTML = cats.map(c =>
      `<button class="cat-chip ${c === dbActiveCat ? 'active' : ''}" onclick="setDBCat('${c}')">${c}</button>`
    ).join('');
  }
  let filtered = db;
  if (dbActiveCat !== 'Alle') filtered = filtered.filter(f => f.kat === dbActiveCat);
  if (searchVal) filtered = filtered.filter(f => f.name.toLowerCase().includes(searchVal) || f.kat.toLowerCase().includes(searchVal));
  filtered.sort((a,b) => a.name.localeCompare(b.name, 'de'));
  const listEl = document.getElementById('db-list');
  if (!listEl) return;
  if (filtered.length === 0) {
    listEl.innerHTML = '<div style="color:var(--muted);font-size:13px;padding:12px 0;text-align:center;">Keine EintrÃ¤ge gefunden.</div>';
  } else {
    listEl.innerHTML = filtered.map(f => `
      <div class="db-item">
        <div class="db-item-left">
          <div class="db-item-name">${f.name}</div>
          <div class="db-item-meta">${f.kat} Â· ${f.kcal} kcal/100g</div>
        </div>
        <div class="db-item-actions">
          <button class="btn btn-ghost btn-sm" onclick="openEditFoodModal('${f.id}')">âœï¸</button>
          <button class="btn btn-danger btn-sm" onclick="deleteFoodItem('${f.id}')">ðŸ—‘ï¸</button>
        </div>
      </div>
    `).join('');
  }
  const countEl = document.getElementById('db-count');
  if (countEl) countEl.textContent = `${filtered.length} von ${db.length} EintrÃ¤gen`;
}

function setDBCat(cat) { dbActiveCat = cat; renderDB(); }

// ============================================================
// FOOD SEARCH (Tagebuch)
// ============================================================

let selectedFood = null;

function onFoodSearch() {
  const q = document.getElementById('inp-food-search').value.trim().toLowerCase();
  const suggBox = document.getElementById('food-suggestions');
  if (q.length < 1) { suggBox.style.display = 'none'; return; }
  const db = getFoodDB();
  const matches = db.filter(f => f.name.toLowerCase().includes(q)).slice(0, 8);
  if (matches.length === 0) {
    suggBox.style.display = 'block';
    suggBox.innerHTML = `<div class="food-not-found">â€ž${escHtml(q)}" nicht gefunden â€“ <a onclick="openAddFoodModal('${escHtml(q)}')">Neu anlegen?</a></div>`;
    return;
  }
  suggBox.style.display = 'block';
  suggBox.innerHTML = matches.map(f => `
    <div class="food-sugg-item" onclick="selectFood('${f.id}')">
      <div>
        <div class="food-sugg-name">${f.name}</div>
        <div class="food-sugg-kcal">${f.kcal} kcal/100g</div>
      </div>
      <span class="food-sugg-cat">${f.kat}</span>
    </div>
  `).join('');
}

function selectFood(id) {
  const db = getFoodDB();
  selectedFood = db.find(f => f.id === id);
  if (!selectedFood) return;
  document.getElementById('food-suggestions').style.display = 'none';
  document.getElementById('inp-food-search').value = '';
  document.getElementById('sel-food-name').textContent = selectedFood.name;
  document.getElementById('sel-food-kcal100').textContent = selectedFood.kcal + ' kcal / 100g';
  document.getElementById('food-selected-row').style.display = 'block';
  document.getElementById('inp-food-gramm').value = '';
  document.getElementById('kcal-preview').textContent = '= 0 kcal';
  document.getElementById('inp-food-gramm').focus();
}

function clearFoodSelection() {
  selectedFood = null;
  document.getElementById('food-selected-row').style.display = 'none';
  document.getElementById('inp-food-search').value = '';
}

function updateKcalPreview() {
  if (!selectedFood) return;
  const g = parseFloat(document.getElementById('inp-food-gramm').value) || 0;
  document.getElementById('kcal-preview').textContent = '= ' + Math.round((selectedFood.kcal * g) / 100) + ' kcal';
}

function addMealFromDB() {
  if (!selectedFood) return;
  const g = parseFloat(document.getElementById('inp-food-gramm').value);
  if (!g || g <= 0) { toast('Menge in Gramm eingeben'); return; }
  const kcal = Math.round((selectedFood.kcal * g) / 100);
  const d = getDayData(TODAY());
  d.meals = d.meals || [];
  d.meals.push({ name: selectedFood.name, gramm: g, kcal, time: new Date().toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'}) });
  saveDayData(TODAY(), d);
  clearFoodSelection(); renderAll(); toast(`${selectedFood.name} hinzugefÃ¼gt âœ“`);
}

function addMealManual() {
  const name = document.getElementById('inp-meal-name').value.trim();
  const kcal = parseInt(document.getElementById('inp-meal-kcal').value);
  if (!name) { toast('Name eingeben'); return; }
  const d = getDayData(TODAY());
  d.meals = d.meals || [];
  d.meals.push({ name, kcal: kcal || 0, time: new Date().toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'}) });
  saveDayData(TODAY(), d);
  document.getElementById('inp-meal-name').value = '';
  document.getElementById('inp-meal-kcal').value = '';
  renderAll(); toast('Mahlzeit hinzugefÃ¼gt âœ“');
}

function deleteMeal(idx) {
  const d = getDayData(TODAY());
  d.meals.splice(idx, 1);
  saveDayData(TODAY(), d);
  renderAll();
}

document.addEventListener('click', e => {
  if (!e.target.closest('.food-search-wrap')) {
    const s = document.getElementById('food-suggestions');
    if (s) s.style.display = 'none';
  }
});

// ============================================================
// SUPABASE: REZEPTE
// ============================================================

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

// Rezepte-Anzeige Filter
let _rezFilter = 'alle';

function setRezFilter(f) {
  _rezFilter = f;
  ['alle','favs','if','low'].forEach(k => {
    const el = document.getElementById('rez-filter-'+k);
    if (el) el.style.opacity = k === f ? '1' : '0.5';
  });
  renderRezepte();
}

async function renderRezepte() {
  const listEl = document.getElementById('rezept-list');
  if (!listEl) return;
  if (!_rezepteCache) {
    listEl.innerHTML = '<div class="loading-row"><div class="spinner"></div>Lade Rezepteâ€¦</div>';
    await loadRezepteData();
  }

  // Suchbegriff
  const q = (document.getElementById('rezept-search')?.value || '').toLowerCase().trim();

  let list = _rezepteCache;
  if (_rezFilter === 'favs') list = list.filter(r => _favoritenCache.has(r.id));
  if (_rezFilter === 'if')   list = list.filter(r => (r.tags||[]).includes('if'));
  if (_rezFilter === 'low')  list = list.filter(r => (r.tags||[]).includes('low'));
if (_rezFilter === 'vegan') list = list.filter(r => (r.tags||[]).includes('vegan'));
if (_rezFilter === 'veg')  list = list.filter(r => (r.tags||[]).includes('veg'));
if (_rezFilter === 'meat') list = list.filter(r => (r.tags||[]).includes('meat'));

  // Suche: Titel + Beschreibung + Anleitung
  if (q) {
    list = list.filter(r =>
      (r.titel||'').toLowerCase().includes(q) ||
      (r.beschreibung||'').toLowerCase().includes(q) ||
      (r.anleitung||'').toLowerCase().includes(q)
    );
  }

  if (list.length === 0) {
    listEl.innerHTML = `
      <div style="text-align:center;padding:32px 0;color:var(--muted);">
        ${q ? 'ðŸ” Keine Treffer fÃ¼r â€ž' + escHtml(q) + '".' :
          _rezFilter === 'favs' ? 'â­ Noch keine Favoriten.' : 'ðŸ¥— Noch keine Rezepte.<br><br>'}
        ${!q ? '<button class="btn btn-primary btn-sm" style="margin-top:12px;" onclick="openRezeptModal()">+ Erstes Rezept anlegen</button>' : ''}
      </div>`;
    return;
  }

  listEl.innerHTML = list.map(r => {
    const isFav  = _favoritenCache.has(r.id);
    const sterne = _bewertungenCache[r.id] || 0;
    const tags   = (r.tags || []);
    const tagHtml = tags.map(t => {
      if (t === 'if')    return '<span class="tag tag-if">â±ï¸ IF-geeignet</span>';
      if (t === 'low')   return '<span class="tag tag-low">ðŸ¥— kalorienarm</span>';
      if (t === 'vegan') return '<span class="tag tag-user">ðŸŒ± Vegan</span>';
if (t === 'veg')   return '<span class="tag tag-low">ðŸ¥¦ Vegetarisch</span>';
      return '';
    }).join('');

    return `
    <div class="rezept" id="rez-${r.id}">
      <div style="display:flex;justify-content:space-between;align-items:center;cursor:pointer;"
        onclick="toggleRezeptBody('${r.id}')">
        <div style="flex:1;min-width:0;">
          <div class="rezept-title">${escHtml(r.titel)}</div>
          <div class="rezept-meta">${escHtml(r.beschreibung || '')}</div>
        </div>
        <div style="display:flex;align-items:center;gap:6px;">
          <button class="fav-btn ${isFav ? 'aktiv' : ''}" onclick="event.stopPropagation();toggleFavorit('${r.id}')"
            title="Favorit">â­</button>
          <span id="rez-arrow-${r.id}" style="font-size:16px;color:var(--muted);transition:transform 0.2s;">â–¾</span>
        </div>
      </div>
      <div id="rez-body-${r.id}" style="display:none;margin-top:10px;">
        ${tagHtml ? '<div style="margin-bottom:8px;">' + tagHtml + '</div>' : ''}
        ${r.anleitung ? '<div class="rezept-body">' + escHtml(r.anleitung) + '</div>' : ''}
        <div class="rezept-actions">
          <div class="sterne-row" id="sterne-${r.id}">
            ${[1,2,3,4,5].map(n => `<span class="stern ${n <= sterne ? 'aktiv' : ''}"
              onclick="bewerte('${r.id}',${n})" title="${n} Stern${n>1?'e':''}">â˜…</span>`).join('')}
            <span class="stern-label">${sterne ? sterne + '/5' : 'bewerten'}</span>
          </div>
          <div style="margin-left:auto;display:flex;gap:8px;">
            <button class="btn btn-ghost btn-sm" onclick="openRezeptModal('${r.id}')">âœï¸</button>
            <button class="btn btn-danger btn-sm" onclick="loescheRezept('${r.id}')">ðŸ—‘ï¸</button>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

function toggleRezeptBody(id) {
  const body  = document.getElementById('rez-body-' + id);
  const arrow = document.getElementById('rez-arrow-' + id);
  if (!body) return;
  const open = body.style.display === 'block';
  body.style.display = open ? 'none' : 'block';
  if (arrow) arrow.style.transform = open ? '' : 'rotate(180deg)';
}

// ============================================================
// REZEPT MODAL
// ============================================================

function openRezeptModal(id) {
  const r = id ? (_rezepteCache||[]).find(x => x.id === id) : null;
  document.getElementById('rezept-modal-title').textContent = r ? 'Rezept bearbeiten' : 'Rezept anlegen';
  document.getElementById('rm-id').value = r ? r.id : '';
  document.getElementById('rm-titel').value = r ? r.titel : '';
  document.getElementById('rm-beschreibung').value = r ? (r.beschreibung||'') : '';
  document.getElementById('rm-anleitung').value = r ? (r.anleitung||'') : '';
  document.getElementById('rm-kcal').value = r ? (r.kcal_gesamt||'') : '';
  document.getElementById('rm-portionen').value = r ? (r.portionen||1) : 1;
  const tags = r ? (r.tags||[]) : [];
  document.getElementById('rm-tag-if').checked    = tags.includes('if');
  document.getElementById('rm-tag-low').checked   = tags.includes('low');
  document.getElementById('rm-tag-vegan').checked = tags.includes('vegan');
document.getElementById('rm-tag-veg').checked   = tags.includes('veg');
  document.getElementById('rezept-modal').classList.add('open');
}

function closeRezeptModal() { document.getElementById('rezept-modal').classList.remove('open'); }

async function saveRezeptModal() {
  const id    = document.getElementById('rm-id').value.trim();
  const titel = document.getElementById('rm-titel').value.trim();
  if (!titel) { toast('Titel eingeben'); return; }

  const tags = [];
  if (document.getElementById('rm-tag-if').checked)    tags.push('if');
  if (document.getElementById('rm-tag-low').checked)   tags.push('low');
  if (document.getElementById('rm-tag-vegan').checked) tags.push('vegan');
if (document.getElementById('rm-tag-veg').checked)   tags.push('veg');

  const body = {
    user_id:     USER_ID,
    titel,
    beschreibung: document.getElementById('rm-beschreibung').value.trim() || null,
    anleitung:    document.getElementById('rm-anleitung').value.trim() || null,
    kcal_gesamt:  parseInt(document.getElementById('rm-kcal').value) || null,
    portionen:    parseInt(document.getElementById('rm-portionen').value) || 1,
    tags,
  };

  const btn = document.getElementById('rm-save-btn');
  btn.disabled = true; btn.textContent = 'Speichern â€¦';

  try {
    if (id) {
      await sbPatch('mw_rezepte?id=eq.'+id+'&user_id=eq.'+USER_ID, body);
      toast('Rezept aktualisiert âœ“');
    } else {
      const [neu] = await sbPost('mw_rezepte', body);
      if (neu) _rezepteCache = [neu, ...(_rezepteCache||[])];
    }
    closeRezeptModal();
    await loadRezepteData(true);
    renderRezepte();
    renderHomeFav();
    toast(id ? 'Rezept aktualisiert âœ“' : 'Rezept gespeichert âœ“');
  } catch(e) {
    toast('Fehler: ' + e.message);
    console.error(e);
  } finally {
    btn.disabled = false; btn.textContent = 'Speichern';
  }
}

async function loescheRezept(id) {
  if (!confirm('Rezept wirklich lÃ¶schen?')) return;
  try {
    await sbDelete('mw_rezepte?id=eq.'+id+'&user_id=eq.'+USER_ID);
    await loadRezepteData(true);
    renderRezepte();
    renderHomeFav();
    toast('Rezept gelÃ¶scht');
  } catch(e) { toast('Fehler: ' + e.message); }
}

// ============================================================
// SUPABASE: BEWERTUNGEN
// ============================================================

async function bewerte(rezeptId, sterne) {
  try {
    // UPSERT via POST mit onConflict
    await sbFetch('mw_bewertungen?on_conflict=user_id,rezept_id', {
      method: 'POST',
      body: JSON.stringify({ user_id: USER_ID, rezept_id: rezeptId, sterne }),
      headers: { 'Prefer': 'resolution=merge-duplicates,return=minimal' },
    });
    _bewertungenCache[rezeptId] = sterne;
    // Sterne sofort im DOM aktualisieren (ohne vollen Re-Render)
    const row = document.getElementById('sterne-'+rezeptId);
    if (row) {
      const sternEls = row.querySelectorAll('.stern');
      sternEls.forEach((el, i) => el.className = 'stern' + (i < sterne ? ' aktiv' : ''));
      const label = row.querySelector('.stern-label');
      if (label) label.textContent = sterne + '/5';
    }
    toast('Bewertung gespeichert âœ“');
    renderHomeFav();
  } catch(e) { toast('Fehler: ' + e.message); }
}

// ============================================================
// SUPABASE: FAVORITEN
// ============================================================

async function toggleFavorit(rezeptId) {
  try {
    if (_favoritenCache.has(rezeptId)) {
      await sbDelete('mw_favoriten?user_id=eq.'+USER_ID+'&rezept_id=eq.'+rezeptId);
      _favoritenCache.delete(rezeptId);
      toast('Aus Favoriten entfernt');
    } else {
      await sbPost('mw_favoriten', { user_id: USER_ID, rezept_id: rezeptId });
      _favoritenCache.add(rezeptId);
      toast('â­ Zu Favoriten hinzugefÃ¼gt');
    }
    // Stern-Button sofort umschalten
    const allFavBtns = document.querySelectorAll(`.fav-btn`);
    allFavBtns.forEach(btn => {
      // data-id wÃ¤re sauberer, wir matchen Ã¼ber onclick-String
      if (btn.getAttribute('onclick')?.includes(rezeptId)) {
        btn.className = 'fav-btn' + (_favoritenCache.has(rezeptId) ? ' aktiv' : '');
      }
    });
    renderHomeFav();
  } catch(e) { toast('Fehler: ' + e.message); }
}

// ============================================================
// FAVORITEN auf der Startseite
// ============================================================

async function renderHomeFav() {
  const card = document.getElementById('home-fav-card');
  const list = document.getElementById('home-fav-list');
  if (!list) return;

  if (_favoritenCache.size === 0) {
    card.style.display = 'none';
    return;
  }
  card.style.display = 'block';

  const favRezepte = (_rezepteCache||[]).filter(r => _favoritenCache.has(r.id)).slice(0,5);

  if (favRezepte.length === 0) {
    list.innerHTML = '<div style="font-size:13px;color:var(--muted);">Keine Rezepte gefunden.</div>';
    return;
  }

  list.innerHTML = favRezepte.map(r => {
    const sterne = _bewertungenCache[r.id] || 0;
    const sternStr = sterne ? 'â˜…'.repeat(sterne) : '';
    const emojis = ['ðŸ¥—','ðŸ³','ðŸ«•','ðŸ¥˜','ðŸ²','ðŸ¥™','ðŸ«”'];
    const em = emojis[r.titel.charCodeAt(0) % emojis.length];
    return `
    <div class="fav-card" onclick="gotoPageById('rezepte')">
      <div class="fav-card-emoji">${em}</div>
      <div class="fav-card-body">
        <div class="fav-card-title">${escHtml(r.titel)}</div>
        <div class="fav-card-meta">${escHtml(r.beschreibung||'')}${sternStr ? ' Â· <span class="fav-card-sterne">'+sternStr+'</span>' : ''}</div>
      </div>
    </div>
  `}).join('');
}

// ============================================================
// NAVIGATION
// ============================================================

function gotoPage(id, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('p-'+id).classList.add('active');
  if (btn) btn.classList.add('active');
  else {
    const nb = document.getElementById('nav-'+id);
    if (nb) nb.classList.add('active');
  }
  if (id === 'progress') { renderProgress(); renderDB(); }
  if (id === 'home')     { renderHome(); renderHomeFav(); }
  if (id === 'log')      renderLog();
  if (id === 'fasten')   renderFastenPage();
  if (id === 'rezepte')  {
    if (!_rezepteCache) loadRezepteData().then(() => renderRezepte());
    else renderRezepte();
  }
}

function gotoPageById(id) {
  const btn = document.getElementById('nav-'+id);
  gotoPage(id, btn);
}

function switchTab(tabId, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  btn.classList.add('active');
  if (tabId === 'tab-db') renderDB();
  if (tabId === 'tab-progress') renderProgress();
  if (tabId === 'tab-settings') fillSettingsForm();
}

// ============================================================
// TOAST
// ============================================================

function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

// ============================================================
// DATUM
// ============================================================

function formatDate(d) {
  const dn = ['So','Mo','Di','Mi','Do','Fr','Sa'];
  const dt = new Date(d + 'T00:00:00');
  return dn[dt.getDay()] + ', ' + dt.toLocaleDateString('de-DE', {day:'2-digit',month:'long'});
}

// ============================================================
// GEWICHT
// ============================================================

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

function saveKg() {
  const v = parseFloat(document.getElementById('inp-kg').value);
  if (!v || v < 30 || v > 300) { toast('UngÃ¼ltiger Wert'); return; }
  const d = getDayData(TODAY());
  d.kg = v;
  saveDayData(TODAY(), d);    // speichert auch in Supabase mw_tageslog
  const wlog = ls('wlog') || [];
  const ex = wlog.findIndex(e => e.date === TODAY());
  if (ex >= 0) wlog[ex].kg = v; else wlog.push({ date: TODAY(), kg: v });
  wlog.sort((a,b) => a.date.localeCompare(b.date));
  lsSet('wlog', wlog);
  sbSaveGewicht(TODAY(), v);  // zusÃ¤tzlich in mw_gewicht (separates log)
  document.getElementById('inp-kg').value = '';
  renderAll();
  toast('Gewicht gespeichert âœ“');
}

// ============================================================
// WASSER
// ============================================================

function addWasser(delta) {
  const d = getDayData(TODAY());
  d.wasser = Math.max(0, Math.round((d.wasser + delta) * 100) / 100);
  saveDayData(TODAY(), d);
  renderAll();
}

// ============================================================
// SCHRITTE
// ============================================================

function saveSchritte() {
  const v = parseInt(document.getElementById('inp-schritte').value);
  if (!v || v < 0) { toast('UngÃ¼ltiger Wert'); return; }
  const d = getDayData(TODAY());
  d.schritte = v;
  saveDayData(TODAY(), d);
  document.getElementById('inp-schritte').value = '';
  renderAll(); toast('Schritte gespeichert âœ“');
}

// ============================================================
// FASTEN
// ============================================================

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
  const s = getFastenState(); s.zielH = h; saveFastenState(s);
  document.getElementById('fasten-plan').value = h;
  renderFastenPage();
}

function saveFastenPlan() { setFastenZiel(parseInt(document.getElementById('fasten-plan').value)); }

function toggleFasten() {
  const s = getFastenState();
  if (s.active) {
    const fastenLog = ls('fasten_log') || {};
    fastenLog[TODAY()] = {zielH: s.zielH, startedAt: s.start, endedAt: Date.now()};
    lsSet('fasten_log', fastenLog);
    s.active = false; s.start = null;
    toast('Fasten beendet! Gut gemacht! ðŸŽ‰');
  } else {
    s.active = true; s.start = Date.now();
    toast('Fasten gestartet âœ“');
  }
  saveFastenState(s); renderFastenPage(); renderHome();
}

function renderFastenPage() {
  const s = getFastenState();
  const btn   = document.getElementById('fasten-start-btn');
  const label = document.getElementById('fasten-status-label');
  const sub   = document.getElementById('timer-sublabel');
  const info  = document.getElementById('fasten-info');
  const ring  = document.getElementById('ring-prog');
  const circumf = 502;
  document.getElementById('fasten-plan').value = s.zielH;
  if (fastenInterval) clearInterval(fastenInterval);

  function tick() {
    const ss = getFastenState();
    if (!ss.active || !ss.start) {
      document.getElementById('timer-hms').textContent = '00:00:00';
      label.textContent = 'Kein aktives Fasten';
      sub.textContent = 'bereit';
      btn.textContent = 'Fasten starten';
      btn.style.background = 'var(--accent)';
      ring.style.strokeDashoffset = circumf;
      ring.style.stroke = 'var(--accent)';
      info.textContent = ss.zielH ? `Ziel: ${ss.zielH} Stunden fasten` : '';
      return;
    }
    const elapsed = Date.now() - ss.start;
    const zielMs  = ss.zielH * 3600 * 1000;
    const pct = Math.min(1, elapsed / zielMs);
    const rem = Math.max(0, zielMs - elapsed);
    const h   = String(Math.floor(elapsed/3600000)).padStart(2,'0');
    const m   = String(Math.floor((elapsed%3600000)/60000)).padStart(2,'0');
    const sec = String(Math.floor((elapsed%60000)/1000)).padStart(2,'0');
    document.getElementById('timer-hms').textContent = h+':'+m+':'+sec;
    label.textContent = 'Fasten lÃ¤uft ðŸ”¥';
    ring.style.strokeDashoffset = circumf * (1 - pct);
    ring.style.stroke = pct >= 1 ? 'var(--green)' : 'var(--accent)';
    if (pct >= 1) {
      sub.textContent = 'Ziel erreicht! ðŸŽ‰';
      btn.style.background = 'var(--green)';
    } else {
      const rh = Math.floor(rem/3600000);
      const rm2= Math.floor((rem%3600000)/60000);
      sub.textContent = `Noch ${rh}h ${String(rm2).padStart(2,'0')}m`;
      btn.style.background = 'var(--red)';
    }
    btn.textContent = 'Fasten beenden';
    info.textContent = `Gestartet: ${new Date(ss.start).toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'})} Uhr Â· Ziel: ${ss.zielH}h`;
  }
  tick();
  if (s.active) fastenInterval = setInterval(tick, 1000);

  const fastenLog = ls('fasten_log') || {};
  const streakEl  = document.getElementById('fasten-streak');
  streakEl.innerHTML = '';
  for (let i=13; i>=0; i--) {
    const dt = new Date(); dt.setDate(dt.getDate()-i);
    const key = dt.toISOString().slice(0,10);
    const dot = document.createElement('div');
    dot.className = 'streak-dot' + (fastenLog[key]?' done':'') + (i===0?' today':'');
    dot.title = key;
    dot.textContent = dt.getDate();
    streakEl.appendChild(dot);
  }
}

// ============================================================
// RENDER HOME
// ============================================================

const MOTIVATIONS = [
  {q:"Jeder Schritt zÃ¤hlt â€“ auch der kleinste.", a:"Mein Weg"},
  {q:"Du bist stÃ¤rker als dein stÃ¤rkster Hunger.", a:"Mein Weg"},
  {q:"Fortschritt, nicht Perfektion.", a:"Mein Weg"},
  {q:"Was du heute tust, macht dein Morgen leichter.", a:"Mein Weg"},
  {q:"Kleine Gewohnheiten, groÃŸe VerÃ¤nderung.", a:"Mein Weg"},
  {q:"Dein KÃ¶rper kann mehr, als du denkst.", a:"Mein Weg"},
  {q:"Heute ist der beste Tag, anzufangen.", a:"Mein Weg"},
];

function renderHome() {
  const s    = getSettings();
  const d    = getDayData(TODAY());
  const wlog = ls('wlog') || [];

  document.getElementById('home-date').textContent = formatDate(TODAY());
  document.getElementById('log-date').textContent  = formatDate(TODAY());

  const idx = new Date().getDate() % MOTIVATIONS.length;
  const mv  = MOTIVATIONS[idx];
  document.getElementById('motivator-box').innerHTML = `<div class="quote">"${mv.q}"</div><div class="author">â€” ${mv.a}</div>`;

  const lastKg = wlog.length ? wlog[wlog.length-1].kg : null;
  document.getElementById('home-kg').textContent   = lastKg ? lastKg.toFixed(1)+' kg' : 'â€“ kg';
  document.getElementById('lbl-start').textContent = s.start+' kg';
  document.getElementById('lbl-ziel').textContent  = s.ziel+' kg';

  if (lastKg) {
    const verloren = s.start - lastKg;
    const total    = s.start - s.ziel;
    const pct      = total > 0 ? Math.max(0, Math.min(100, (verloren/total)*100)) : 0;
    document.getElementById('home-prog').style.width = pct+'%';
    document.getElementById('home-pct').textContent  = pct.toFixed(1)+'% geschafft';
    const el = document.getElementById('home-kg-diff');
    el.textContent = verloren > 0 ? 'âˆ’'+verloren.toFixed(1)+' kg' : verloren < 0 ? '+'+Math.abs(verloren).toFixed(1)+' kg' : '';
    el.style.color = verloren > 0 ? 'var(--green)' : 'var(--red)';
    document.getElementById('home-badge').innerHTML = `<span class="badge">${pct.toFixed(0)}% ðŸŽ¯</span>`;
  } else {
    document.getElementById('home-prog').style.width = '0%';
    document.getElementById('home-pct').textContent  = '0% geschafft';
  }

  const kcalTotal = (d.meals||[]).reduce((a,m)=>a+(m.kcal||0),0);
  document.getElementById('home-kal').textContent     = kcalTotal;
  document.getElementById('home-kal-max').textContent = s.kcalMax;
  document.getElementById('dot-kal').style.background = kcalTotal > s.kcalMax ? 'var(--red)' : kcalTotal > s.kcalMax*0.8 ? 'var(--accent2)' : 'var(--green)';

  document.getElementById('home-wasser').textContent     = d.wasser.toFixed(1);
  document.getElementById('home-wasser-max').textContent = s.wasserMax;

  document.getElementById('home-schritte').textContent     = d.schritte.toLocaleString('de-DE');
  document.getElementById('home-schritte-max').textContent = s.schritteMax.toLocaleString('de-DE');

  const fs = getFastenState();
  if (fs.active && fs.start) {
    const elapsed = Date.now() - fs.start;
    const h  = Math.floor(elapsed/3600000);
    const m2 = Math.floor((elapsed%3600000)/60000);
    document.getElementById('home-fasten-h').textContent   = h+'h'+String(m2).padStart(2,'0');
    document.getElementById('home-fasten-sub').textContent = 'aktiv';
    document.getElementById('dot-fasten').style.background = 'var(--accent)';
  } else {
    document.getElementById('home-fasten-h').textContent   = 'â€“';
    document.getElementById('home-fasten-sub').textContent = 'inaktiv';
    document.getElementById('dot-fasten').style.background = 'var(--purple)';
  }

  // Streak
  const streakEl = document.getElementById('streak-row');
  streakEl.innerHTML = '';
  for (let i=6; i>=0; i--) {
    const dt  = new Date(); dt.setDate(dt.getDate()-i);
    const key = dt.toISOString().slice(0,10);
    const dd  = getDayData(key);
    const done= dd.kg !== null || (dd.meals||[]).length > 0 || dd.schritte > 0;
    const dot = document.createElement('div');
    dot.className = 'streak-dot' + (done?' done':'') + (i===0?' today':'');
    const days = ['So','Mo','Di','Mi','Do','Fr','Sa'];
    dot.textContent = days[dt.getDay()];
    dot.style.fontSize = '10px';
    streakEl.appendChild(dot);
  }
}

// ============================================================
// RENDER LOG
// ============================================================

function renderLog() {
  const s = getSettings();
  const d = getDayData(TODAY());

  document.getElementById('log-wasser').textContent = d.wasser.toFixed(2);
  document.getElementById('wasser-bar').style.width = Math.min(100,(d.wasser/s.wasserMax)*100)+'%';
  document.getElementById('schritte-bar').style.width = Math.min(100,(d.schritte/s.schritteMax)*100)+'%';
  if (d.schritte) document.getElementById('inp-schritte').placeholder = d.schritte.toLocaleString('de-DE')+' (aktuell)';

  const meals    = d.meals || [];
  const kcalTotal= meals.reduce((a,m)=>a+(m.kcal||0),0);
  const remaining= s.kcalMax - kcalTotal;
  const pct      = Math.min(100,(kcalTotal/s.kcalMax)*100);

  document.getElementById('log-kcal-total').textContent  = kcalTotal;
  document.getElementById('kcal-goal-label').textContent = `Ziel: ${s.kcalMax} kcal`;

  const remEl = document.getElementById('kcal-remaining');
  if (remaining < 0) {
    remEl.textContent = Math.abs(remaining)+' kcal Ã¼ber Ziel';
    remEl.style.color = 'var(--red)';
  } else {
    remEl.textContent = remaining+' kcal frei';
    remEl.style.color = remaining < s.kcalMax*0.1 ? 'var(--red)' : 'var(--green)';
  }

  const barEl = document.getElementById('kal-bar');
  barEl.style.width = pct+'%';
  barEl.style.background = pct > 100 ? 'var(--red)' : pct > 80 ? 'linear-gradient(90deg,var(--accent),var(--accent2))' : 'linear-gradient(90deg,var(--green),var(--accent))';

  const ml = document.getElementById('meal-list');
  if (meals.length === 0) {
    ml.innerHTML = '<div style="color:var(--muted);font-size:13px;padding:8px 0;">Noch keine EintrÃ¤ge heute.</div>';
  } else {
    ml.innerHTML = meals.map((m,i) => `
      <div class="meal-item">
        <div style="flex:1;min-width:0;">
          <div class="meal-name">${escHtml(m.name)}</div>
          <div class="meal-detail">${m.time ? m.time+' Uhr Â· ' : ''}${m.gramm ? m.gramm+'g Â· ' : ''}${m.kcal} kcal</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
          <span class="meal-kcal">${m.kcal} kcal</span>
          <button class="meal-del" onclick="deleteMeal(${i})">âœ•</button>
        </div>
      </div>
    `).join('');
  }
}

// ============================================================
// RENDER ALL
// ============================================================

function renderAll() { renderHome(); renderLog(); }

// ============================================================
// FORTSCHRITT / CHART
// ============================================================

let weightChart = null;

function renderProgress() {
  const s    = getSettings();
  const wlog = ls('wlog') || [];
  document.getElementById('p-eintraege').textContent = wlog.length;

  if (wlog.length >= 2) {
    const first   = wlog[0].kg, last = wlog[wlog.length-1].kg;
    const verloren= first - last;
    document.getElementById('p-verloren').textContent = Math.max(0,verloren).toFixed(1);
    document.getElementById('p-noch').textContent     = Math.max(0,last-s.ziel).toFixed(1);
    const weeks = Math.max(1,(new Date(wlog[wlog.length-1].date)-new Date(wlog[0].date))/(7*86400000));
    document.getElementById('p-avg').textContent = (verloren/weeks).toFixed(2);
  } else if (wlog.length === 1) {
    document.getElementById('p-verloren').textContent = (s.start-wlog[0].kg).toFixed(1);
    document.getElementById('p-noch').textContent     = Math.max(0,wlog[0].kg-s.ziel).toFixed(1);
    document.getElementById('p-avg').textContent      = 'â€“';
  } else {
    document.getElementById('p-verloren').textContent = '0';
    document.getElementById('p-noch').textContent     = (s.start-s.ziel).toFixed(1);
    document.getElementById('p-avg').textContent      = 'â€“';
  }

  const wll = document.getElementById('weight-log-list');
  if (wlog.length === 0) {
    wll.innerHTML = '<div style="color:var(--muted);font-size:13px;">Noch keine EintrÃ¤ge.</div>';
  } else {
    const rev = [...wlog].reverse();
    wll.innerHTML = rev.map((e,i) => {
      const prev = i < rev.length-1 ? rev[i+1].kg : null;
      const diff = prev ? (e.kg - prev) : null;
      const diffStr = diff !== null
        ? `<span class="wlog-diff" style="color:${diff>0?'var(--red)':'var(--green)'}">${diff>0?'+':''}${diff.toFixed(1)} kg</span>` : '';
      return `<div class="wlog-item">
        <div><div class="wlog-date">${formatDate(e.date)}</div></div>
        <div style="display:flex;align-items:center;gap:10px;">${diffStr}<span class="wlog-kg">${e.kg.toFixed(1)} kg</span></div>
      </div>`;
    }).join('');
  }

  const canvas = document.getElementById('weight-chart');
  if (weightChart) { weightChart.destroy(); weightChart = null; }
  if (wlog.length === 0) return;
  weightChart = new Chart(canvas, {
    type: 'line',
    data: {
      labels: wlog.map(e => e.date.slice(5)),
      datasets: [{
        data: wlog.map(e => e.kg),
        borderColor: '#FF6B35',
        backgroundColor: 'rgba(255,107,53,0.08)',
        borderWidth: 2.5,
        pointBackgroundColor: '#FF6B35',
        pointRadius: wlog.length > 15 ? 2 : 4,
        tension: 0.35,
        fill: true,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: {display:false} },
      scales: {
        x: { ticks:{color:'#7a84a0',font:{size:10},maxTicksLimit:7}, grid:{color:'rgba(0,0,0,0.04)'} },
        y: { ticks:{color:'#7a84a0',font:{size:11},callback:v=>v+'kg'}, grid:{color:'rgba(0,0,0,0.04)'}, suggestedMin:s.ziel-1, suggestedMax:s.start+1 }
      }
    }
  });
}

function clearWeightLog() {
  if (!confirm('Wirklich den gesamten Gewichtsverlauf lÃ¶schen?')) return;
  lsSet('wlog', []); renderProgress(); renderHome(); toast('Verlauf gelÃ¶scht');
}

// ============================================================
// UTILS
// ============================================================

function escHtml(s) {
  if (!s) return '';
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ============================================================
// UPDATE-MECHANISMUS
// ============================================================

function isNewerVersion(local, remote) {
  const toNum = v => v.split('.').map(Number);
  const [lA, lB = 0] = toNum(local);
  const [rA, rB = 0] = toNum(remote);
  if (rA !== lA) return rA > lA;
  return rB > lB;
}

async function checkForUpdate(manual = false) {
  const now = Date.now();
  const lastCheck = parseInt(localStorage.getItem('meinweg_update_check') || '0');
  if (!manual && (now - lastCheck) < UPDATE_INTERVAL_MS) return;
  localStorage.setItem('meinweg_update_check', String(now));
  try {
    const res = await fetch(VERSION_URL + '?t=' + now);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    if (isNewerVersion(APP_VERSION, data.version)) {
      showUpdateModal(data.version, data.changelog || []);
    } else if (manual) {
      toast('App ist aktuell âœ“ (v' + APP_VERSION + ')');
    }
  } catch (e) {
    if (manual) toast('Update-PrÃ¼fung fehlgeschlagen â€“ bitte spÃ¤ter erneut versuchen.');
    console.warn('Update-Check fehlgeschlagen:', e);
  }
}

function showUpdateModal(newVersion, changelog) {
  document.getElementById('update-version').textContent = newVersion;
  const list = document.getElementById('update-changelog');
  list.innerHTML = changelog.map(line => '<li>' + escHtml(line) + '</li>').join('');
  document.getElementById('update-modal').classList.remove('hidden');
}

async function applyUpdate() {
  localStorage.setItem('meinweg_known_version', APP_VERSION);
  if ('caches' in window) {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => caches.delete(k)));
  }
  location.reload(true);
}
// ============================================================
// GERÃ„TE-SYNC
// ============================================================

function copyUserId() {
  const uid = localStorage.getItem('meinweg_uid') || '';
  navigator.clipboard.writeText(uid).then(() => {
    toast('GerÃ¤te-ID kopiert âœ“');
  }).catch(() => {
    const el = document.getElementById('sync-uid-display');
    el.select();
    document.execCommand('copy');
    toast('GerÃ¤te-ID kopiert âœ“');
  });
}


function showQrCode() {
  const uid = localStorage.getItem('meinweg_uid') || '';
  const canvas = document.getElementById('sync-uid-canvas');
  const url = 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=' + encodeURIComponent(uid);
  canvas.innerHTML = '<img src="' + url + '" style="border-radius:8px;border:1px solid var(--border);" alt="QR-Code"><div style="font-size:11px;color:var(--muted);margin-top:6px;">UUID ablesen und auf anderem GerÃ¤t einfÃ¼gen</div>';
}

function initSyncUid() {
  const uid = localStorage.getItem('meinweg_uid') || '';
  const el = document.getElementById('sync-uid-display');
  if (el) el.value = uid;
}

// Ueberschreibt aeltere Sync-Logik ohne Aktivierungscode.
function applyUserId() {
  const input = document.getElementById('sync-uid-input').value.trim();
  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (!uuidPattern.test(input)) {
    toast('Ungueltige Geraete-ID - bitte pruefen');
    return;
  }
  if (!confirm('Geraete-ID wirklich uebernehmen? Die App laedt danach neu.')) return;
  localStorage.setItem('meinweg_uid', input);
  toast('Geraete-ID uebernommen - App wird neu geladen ...');
  setTimeout(() => location.reload(), 1500);
}
// ============================================================
// APP INIT
// ============================================================

async function initApp() {
  getFoodDB();
  renderAll();
  renderFastenPage();

  const verEl = document.getElementById('settings-app-version');
  if (verEl) verEl.textContent = 'v' + APP_VERSION;
  initSyncUid();

  // Supabase-Verbindung prÃ¼fen, dann Daten laden
  try {
    await checkSbConnection();

    if (sbOnline) {
      // Settings aus Supabase laden (Ã¼berschreibt localStorage falls vorhanden)
      const sbSettings = await sbLoadSettings();
      if (sbSettings) {
        // UI neu rendern mit geladenen Settings
        renderAll();
      }

      // Fasten-State aus Supabase laden
      const sbFasten = await sbLoadFastenState();
      if (sbFasten) {
        renderFastenPage();
      }

      // Tageslog fÃ¼r heute vorausladen (Hintergrund)
      sbLoadDayData(TODAY()).then(d => { if (d) renderAll(); });

      // Rezepte laden
      loadRezepteData().then(() => renderHomeFav());
    } else {
      // Offline: nur Rezepte-Cache-Versuch
      loadRezepteData().then(() => renderHomeFav());
    }
  } catch(e) {
    console.warn('initApp Supabase-Fehler:', e);
    loadRezepteData().then(() => renderHomeFav());
  }

  checkForUpdate(false);
}

// Beim Laden starten
initApp();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(reg => {
    reg.onupdatefound = () => {
      const w = reg.installing;
      w.onstatechange = () => {
        if (w.state === 'installed' && navigator.serviceWorker.controller) {
          toast('Update verfÃ¼gbar â€“ App wird neu geladen â€¦');
          setTimeout(() => location.reload(), 2000);
        }
      };
    };
  });
}
