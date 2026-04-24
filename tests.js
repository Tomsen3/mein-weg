'use strict';

const fs = require('fs');

function assert(name, condition) {
  if (!condition) throw new Error(name);
  console.log('ok - ' + name);
}

function dateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function kcalForGrams(kcal100, grams) {
  return Math.round((kcal100 * grams) / 100);
}

function kcalPerRecipePortion(totalKcal, portions) {
  return Math.round(totalKcal / Math.max(1, portions || 1));
}

function classifySupabaseError(error) {
  const status = error && error.status;
  const msg = String((error && (error.message || error.details || error.name)) || '').toLowerCase();

  if (status === 401 || status === 403 || msg.includes('jwt') || msg.includes('api key')) {
    return 'Nicht verbunden: Supabase/API-Key';
  }
  if (status === 404 || status === 406 || status === 409 || msg.includes('relation') || msg.includes('permission') || msg.includes('policy') || msg.includes('rls')) {
    return 'Nicht verbunden: Tabelle/Rechte';
  }
  if (msg.includes('timeout') || msg.includes('failed to fetch') || msg.includes('network') || msg.includes('load failed') || msg.includes('internet') || msg.includes('abort')) {
    return 'Nicht verbunden: Netzwerk';
  }
  if (status && status >= 500) {
    return 'Nicht verbunden: Supabase/API-Key';
  }
  return 'Nicht verbunden: Netzwerk';
}

function applyBackupPayload(payload, storage) {
  if (!payload || payload.app !== 'meinweg-backup' || typeof payload.storage !== 'object') {
    throw new Error('Ungueltiges Backup-Format');
  }

  Object.keys(storage).forEach(key => {
    if (key === 'meinweg_uid' || key.startsWith('meinweg_')) delete storage[key];
  });
  Object.entries(payload.storage).forEach(([key, value]) => {
    if (typeof value === 'string') storage[key] = value;
  });
}

function collectAttrValues(text, attr) {
  return [...text.matchAll(new RegExp(attr + '="([^"]+)"', 'g'))].map(match => match[1]);
}

function collectObjectKeys(text, objectName) {
  const match = text.match(new RegExp('const ' + objectName + ' = \\{([\\s\\S]*?)\\n\\};'));
  if (!match) return [];
  return [...match[1].matchAll(/^  ([A-Za-z0-9_]+):/gm)].map(match => match[1]);
}

const config = fs.readFileSync('config.js', 'utf8');
const sw = fs.readFileSync('sw.js', 'utf8');
const indexHtml = fs.readFileSync('index.html', 'utf8');
const uiJs = fs.readFileSync('ui.js', 'utf8');
const appUi = indexHtml + '\n' + uiJs;
const versionJson = JSON.parse(fs.readFileSync('version.json', 'utf8'));
const appVersion = config.match(/APP_VERSION\s*=\s*'([^']+)'/)[1];
const cacheVersion = sw.match(/meinweg-v([^']+)/)[1];
const textFiles = ['index.html', 'ui.js', 'data.js', 'styles.css', 'manifest.json', 'version.json'];
const mojibakeCodepoints = new Set([0x00C2, 0x00C3, 0x00E2, 0x00F0]);

assert('dateKey uses local calendar parts', dateKey(new Date(2026, 0, 2, 23, 59)) === '2026-01-02');
assert('version.json matches APP_VERSION', versionJson.version === appVersion);
assert('service worker cache matches APP_VERSION', cacheVersion === appVersion);
assert('kcal calculation rounds grams correctly', kcalForGrams(372, 35) === 130);
assert('recipe kcal calculation rounds per portion correctly', kcalPerRecipePortion(550, 4) === 138);
assert('Supabase auth errors are classified', classifySupabaseError({ status: 401 }) === 'Nicht verbunden: Supabase/API-Key');
assert('Supabase table errors are classified', classifySupabaseError({ status: 404, message: 'relation missing' }) === 'Nicht verbunden: Tabelle/Rechte');
assert('Supabase network errors are classified', classifySupabaseError({ message: 'Failed to fetch' }) === 'Nicht verbunden: Netzwerk');

const storage = {
  meinweg_uid: 'old',
  meinweg_settings: '{"start":1}',
  unrelated: 'keep'
};
applyBackupPayload({
  app: 'meinweg-backup',
  storage: {
    meinweg_uid: 'new',
    meinweg_settings: '{"start":104}'
  }
}, storage);
assert('backup import replaces app storage', storage.meinweg_uid === 'new' && storage.meinweg_settings === '{"start":104}');
assert('backup import keeps unrelated storage', storage.unrelated === 'keep');
assert('text files do not contain common mojibake markers', textFiles.every(file => {
  const text = fs.readFileSync(file, 'utf8');
  return [...text].every(ch => !mojibakeCodepoints.has(ch.codePointAt(0)));
}));
assert('static and dynamic app UI actions use data attributes instead of inline onclick',
  !indexHtml.includes('onclick=') &&
  !uiJs.includes('onclick='));
assert('index.html uses delegated data attributes instead of inline input/change handlers',
  !indexHtml.includes('oninput=') &&
  !indexHtml.includes('onchange='));

const dataActions = new Set(collectAttrValues(appUi, 'data-action'));
const clickActionKeys = new Set(collectObjectKeys(uiJs, 'clickActions'));
const inputActions = new Set(collectAttrValues(indexHtml, 'data-input-action'));
const inputActionKeys = new Set(collectObjectKeys(uiJs, 'inputActions'));
const changeActions = new Set(collectAttrValues(indexHtml, 'data-change-action'));
const changeActionKeys = new Set(collectObjectKeys(uiJs, 'changeActions'));

assert('every data-action has a clickActions handler',
  [...dataActions].every(action => clickActionKeys.has(action)));
assert('every clickActions handler is used by data-action markup',
  [...clickActionKeys].every(action => dataActions.has(action)));
assert('every data-input-action has an inputActions handler',
  [...inputActions].every(action => inputActionKeys.has(action)));
assert('every inputActions handler is used by data-input-action markup',
  [...inputActionKeys].every(action => inputActions.has(action)));
assert('every data-change-action has a changeActions handler',
  [...changeActions].every(action => changeActionKeys.has(action)));
assert('every changeActions handler is used by data-change-action markup',
  [...changeActionKeys].every(action => changeActions.has(action)));
assert('dynamic food text in HTML templates is escaped',
  !uiJs.includes('${f.name}') &&
  !uiJs.includes('${f.kat}') &&
  uiJs.includes('${escHtml(f.name)}') &&
  uiJs.includes('${escHtml(f.kat)}'));
assert('dynamic recipe DOM ids and attributes are escaped',
  !uiJs.includes('id="rez-${r.id}') &&
  !uiJs.includes('id="rez-arrow-${r.id}') &&
  !uiJs.includes('id="rez-body-${r.id}') &&
  !uiJs.includes('id="sterne-${r.id}') &&
  uiJs.includes('id="rez-${escAttr(r.id)}') &&
  uiJs.includes('id="sterne-${escAttr(r.id)}'));
assert('favorite button updates use data attributes instead of legacy onclick matching',
  !uiJs.includes("getAttribute('onclick')") &&
  uiJs.includes('.fav-btn[data-value="${cssAttr(rezeptId)}"]'));
assert('recipes can be added to the calorie log via data-action',
  uiJs.includes('function addRecipeToLog') &&
  uiJs.includes('data-action="addRecipeToLog"') &&
  uiJs.includes("name: 'Rezept: ' +"));
assert('secondary innerHTML templates escape dynamic text and attributes',
  uiJs.includes('title="${escAttr(titleText)}"') &&
  uiJs.includes('${escHtml(mv.q)}') &&
  uiJs.includes('${escHtml(mv.a)}') &&
  uiJs.includes("${m.time ? escHtml(m.time)+' Uhr") &&
  uiJs.includes('${escHtml(formatDate(e.date))}') &&
  uiJs.includes("'<img src=\"' + escAttr(url)"));
