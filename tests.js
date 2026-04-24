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

const config = fs.readFileSync('config.js', 'utf8');
const sw = fs.readFileSync('sw.js', 'utf8');
const versionJson = JSON.parse(fs.readFileSync('version.json', 'utf8'));
const appVersion = config.match(/APP_VERSION\s*=\s*'([^']+)'/)[1];
const cacheVersion = sw.match(/meinweg-v([^']+)/)[1];
const textFiles = ['index.html', 'ui.js', 'data.js', 'styles.css', 'manifest.json', 'version.json'];
const mojibakeCodepoints = new Set([0x00C2, 0x00C3, 0x00E2, 0x00F0]);

assert('dateKey uses local calendar parts', dateKey(new Date(2026, 0, 2, 23, 59)) === '2026-01-02');
assert('version.json matches APP_VERSION', versionJson.version === appVersion);
assert('service worker cache matches APP_VERSION', cacheVersion === appVersion);
assert('kcal calculation rounds grams correctly', kcalForGrams(372, 35) === 130);
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
  !fs.readFileSync('index.html', 'utf8').includes('onclick=') &&
  !fs.readFileSync('ui.js', 'utf8').includes('onclick='));
