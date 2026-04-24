let selectedLogDate = TODAY();

function LOG_DATE() {
  return selectedLogDate || TODAY();
}

function setLogDate(value) {
  selectedLogDate = value || TODAY();
  sbLoadDayData(selectedLogDate)
    .then(d => { if (d) renderLog(); })
    .catch(e => console.warn('sbLoadDayData Fehler:', e));
  renderLog();
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
  toast('Einstellungen aktualisiert.');
}

// ---------- TAGESLOG ----------


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
  if (!name) { toast('Bitte einen Namen eingeben.'); return; }
  if (!kcal || kcal < 0) { toast('Bitte kcal pro 100 g eingeben.'); return; }
  const db = getFoodDB();
  if (foodModalMode === 'edit') {
    const id = document.getElementById('food-modal-id').value;
    const idx = db.findIndex(f => f.id === id);
    if (idx >= 0) db[idx] = { id, name, kat, kcal };
    toast('Lebensmittel aktualisiert.');
  } else {
    db.push({ id: genFoodId(), name, kat, kcal });
    toast('Lebensmittel gespeichert.');
  }
  saveFoodDB(db); closeFoodModal(); renderDB();
}

function deleteFoodItem(id) {
  if (!confirm('Lebensmittel aus der Datenbank löschen?')) return;
  saveFoodDB(getFoodDB().filter(f => f.id !== id));
  renderDB(); toast('Lebensmittel gelöscht.');
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
    listEl.innerHTML = '<div style="color:var(--muted);font-size:13px;padding:12px 0;text-align:center;">Keine Einträge gefunden.</div>';
  } else {
    listEl.innerHTML = filtered.map(f => `
      <div class="db-item">
        <div class="db-item-left">
          <div class="db-item-name">${f.name}</div>
          <div class="db-item-meta">${f.kat} · ${f.kcal} kcal/100g</div>
        </div>
        <div class="db-item-actions">
          <button class="btn btn-ghost btn-sm" onclick="openEditFoodModal('${f.id}')">✏️</button>
          <button class="btn btn-danger btn-sm" onclick="deleteFoodItem('${f.id}')">🗑️</button>
        </div>
      </div>
    `).join('');
  }
  const countEl = document.getElementById('db-count');
  if (countEl) countEl.textContent = `${filtered.length} von ${db.length} Einträgen`;
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
    suggBox.innerHTML = `<div class="food-not-found">„${escHtml(q)}" nicht gefunden – <a onclick="openAddFoodModal('${escHtml(q)}')">Neu anlegen?</a></div>`;
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
  if (!g || g <= 0) { toast('Bitte eine Menge in Gramm eingeben.'); return; }
  const kcal = Math.round((selectedFood.kcal * g) / 100);
  const d = getDayData(LOG_DATE());
  d.meals = d.meals || [];
  d.meals.push({ name: selectedFood.name, gramm: g, kcal, time: new Date().toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'}) });
  saveDayData(LOG_DATE(), d);
  clearFoodSelection(); renderAll(); toast(`${selectedFood.name} hinzugefügt.`);
}

function addMealManual() {
  const name = document.getElementById('inp-meal-name').value.trim();
  const kcal = parseInt(document.getElementById('inp-meal-kcal').value);
  if (!name) { toast('Bitte einen Namen eingeben.'); return; }
  const d = getDayData(LOG_DATE());
  d.meals = d.meals || [];
  d.meals.push({ name, kcal: kcal || 0, time: new Date().toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'}) });
  saveDayData(LOG_DATE(), d);
  document.getElementById('inp-meal-name').value = '';
  document.getElementById('inp-meal-kcal').value = '';
  renderAll(); toast('Mahlzeit hinzugefügt.');
}

function deleteMeal(idx) {
  const d = getDayData(LOG_DATE());
  d.meals.splice(idx, 1);
  saveDayData(LOG_DATE(), d);
  renderAll();
}

function editMeal(idx) {
  const d = getDayData(LOG_DATE());
  const meal = (d.meals || [])[idx];
  if (!meal) return;

  const name = prompt('Name der Mahlzeit', meal.name || '');
  if (name === null) return;
  const kcalInput = prompt('Kalorien', String(meal.kcal || 0));
  if (kcalInput === null) return;
  const kcal = parseInt(kcalInput, 10);
  if (!name.trim() || !Number.isFinite(kcal) || kcal < 0) {
    toast('Bitte gültige Mahlzeitendaten eingeben.');
    return;
  }

  d.meals[idx] = { ...meal, name: name.trim(), kcal };
  saveDayData(LOG_DATE(), d);
  renderAll();
  toast('Mahlzeit aktualisiert.');
}

document.addEventListener('click', e => {
  if (!e.target.closest('.food-search-wrap')) {
    const s = document.getElementById('food-suggestions');
    if (s) s.style.display = 'none';
  }
});

document.addEventListener('click', e => {
  const btn = e.target.closest('[data-meal-action]');
  if (!btn) return;
  const idx = parseInt(btn.dataset.mealIndex, 10);
  if (!Number.isInteger(idx)) return;

  if (btn.dataset.mealAction === 'edit') editMeal(idx);
  if (btn.dataset.mealAction === 'delete') deleteMeal(idx);
});

// ============================================================
// SUPABASE: REZEPTE
// ============================================================


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
    listEl.innerHTML = '<div class="loading-row"><div class="spinner"></div>Lade Rezepte…</div>';
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
        ${q ? '🔍 Keine Treffer für „' + escHtml(q) + '".' :
          _rezFilter === 'favs' ? '⭐ Noch keine Favoriten.' : '🥗 Noch keine Rezepte.<br><br>'}
        ${!q ? '<button class="btn btn-primary btn-sm" style="margin-top:12px;" onclick="openRezeptModal()">+ Erstes Rezept anlegen</button>' : ''}
      </div>`;
    return;
  }

  listEl.innerHTML = list.map(r => {
    const isFav  = _favoritenCache.has(r.id);
    const sterne = _bewertungenCache[r.id] || 0;
    const tags   = (r.tags || []);
    const tagHtml = tags.map(t => {
      if (t === 'if')    return '<span class="tag tag-if">⏱️ IF-geeignet</span>';
      if (t === 'low')   return '<span class="tag tag-low">🥗 kalorienarm</span>';
      if (t === 'vegan') return '<span class="tag tag-user">🌱 Vegan</span>';
if (t === 'veg')   return '<span class="tag tag-low">🥦 Vegetarisch</span>';
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
            title="Favorit">⭐</button>
          <span id="rez-arrow-${r.id}" style="font-size:16px;color:var(--muted);transition:transform 0.2s;">▾</span>
        </div>
      </div>
      <div id="rez-body-${r.id}" style="display:none;margin-top:10px;">
        ${tagHtml ? '<div style="margin-bottom:8px;">' + tagHtml + '</div>' : ''}
        ${r.anleitung ? '<div class="rezept-body">' + escHtml(r.anleitung) + '</div>' : ''}
        <div class="rezept-actions">
          <div class="sterne-row" id="sterne-${r.id}">
            ${[1,2,3,4,5].map(n => `<span class="stern ${n <= sterne ? 'aktiv' : ''}"
              onclick="bewerte('${r.id}',${n})" title="${n} Stern${n>1?'e':''}">★</span>`).join('')}
            <span class="stern-label">${sterne ? sterne + '/5' : 'bewerten'}</span>
          </div>
          <div style="margin-left:auto;display:flex;gap:8px;">
            <button class="btn btn-ghost btn-sm" onclick="openRezeptModal('${r.id}')">✏️</button>
            <button class="btn btn-danger btn-sm" onclick="loescheRezept('${r.id}')">🗑️</button>
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
  btn.disabled = true; btn.textContent = 'Speichern …';

  try {
    if (id) {
      await sbPatch('mw_rezepte?id=eq.'+id+'&user_id=eq.'+USER_ID, body);
    toast('Rezept aktualisiert.');
    } else {
      const [neu] = await sbPost('mw_rezepte', body);
      if (neu) _rezepteCache = [neu, ...(_rezepteCache||[])];
    }
    closeRezeptModal();
    await loadRezepteData(true);
    renderRezepte();
    renderHomeFav();
    toast(id ? 'Rezept aktualisiert.' : 'Rezept gespeichert.');
  } catch(e) {
    toast('Fehler: ' + e.message);
    console.error(e);
  } finally {
    btn.disabled = false; btn.textContent = 'Speichern';
  }
}

async function loescheRezept(id) {
  if (!confirm('Rezept wirklich löschen?')) return;
  try {
    await sbDelete('mw_rezepte?id=eq.'+id+'&user_id=eq.'+USER_ID);
    await loadRezepteData(true);
    renderRezepte();
    renderHomeFav();
    toast('Rezept gelöscht');
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
    toast('Bewertung gespeichert.');
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
      toast('Zu Favoriten hinzugefügt.');
    }
    // Stern-Button sofort umschalten
    const allFavBtns = document.querySelectorAll(`.fav-btn`);
    allFavBtns.forEach(btn => {
      // data-id wäre sauberer, wir matchen über onclick-String
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
    const sternStr = sterne ? '★'.repeat(sterne) : '';
    const emojis = ['🥗','🍳','🫕','🥘','🍲','🥙','🫔'];
    const em = emojis[r.titel.charCodeAt(0) % emojis.length];
    return `
    <div class="fav-card" onclick="gotoPageById('rezepte')">
      <div class="fav-card-emoji">${em}</div>
      <div class="fav-card-body">
        <div class="fav-card-title">${escHtml(r.titel)}</div>
        <div class="fav-card-meta">${escHtml(r.beschreibung||'')}${sternStr ? ' · <span class="fav-card-sterne">'+sternStr+'</span>' : ''}</div>
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


function saveKg() {
  const v = parseFloat(document.getElementById('inp-kg').value);
  if (!v || v < 30 || v > 300) { toast('Bitte einen gültigen Wert eingeben.'); return; }
  const date = LOG_DATE();
  const d = getDayData(date);
  d.kg = v;
  saveDayData(date, d);    // speichert auch in Supabase mw_tageslog
  const wlog = ls('wlog') || [];
  const ex = wlog.findIndex(e => e.date === date);
  if (ex >= 0) wlog[ex].kg = v; else wlog.push({ date, kg: v });
  wlog.sort((a,b) => a.date.localeCompare(b.date));
  lsSet('wlog', wlog);
  sbSaveGewicht(date, v);  // zusaetzlich in mw_gewicht (separates log)
  document.getElementById('inp-kg').value = '';
  renderAll();
  toast('Gewicht gespeichert.');
}

// ============================================================
// WASSER
// ============================================================

function addWasser(delta) {
  const d = getDayData(LOG_DATE());
  d.wasser = Math.max(0, Math.round((d.wasser + delta) * 100) / 100);
  saveDayData(LOG_DATE(), d);
  renderAll();
}

// ============================================================
// SCHRITTE
// ============================================================

function saveSchritte() {
  const v = parseInt(document.getElementById('inp-schritte').value);
  if (!v || v < 0) { toast('Bitte einen gültigen Wert eingeben.'); return; }
  const d = getDayData(LOG_DATE());
  d.schritte = v;
  saveDayData(LOG_DATE(), d);
  document.getElementById('inp-schritte').value = '';
  renderAll(); toast('Schritte gespeichert.');
}

// ============================================================
// FASTEN
// ============================================================


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
    const entry = {zielH: s.zielH, startedAt: s.start, endedAt: Date.now()};
    fastenLog[TODAY()] = entry;
    lsSet('fasten_log', fastenLog);
    const day = getDayData(TODAY());
    day.fasten = entry;
    saveDayData(TODAY(), day);
    s.active = false; s.start = null;
    toast('Fasten beendet! Gut gemacht! 🎉');
  } else {
    s.active = true; s.start = Date.now();
    toast('Fasten gestartet ✓');
  }
  saveFastenState(s); renderFastenPage(); renderHome();
}

function getFastenEntries() {
  const fastenLog = ls('fasten_log') || {};
  const entries = Object.entries(fastenLog).map(([date, entry]) => ({ date, ...entry }));

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key || !key.startsWith(KEY + 'day_')) continue;
    const date = key.slice((KEY + 'day_').length);
    const day = ls('day_' + date);
    if (day && day.fasten && !entries.some(e => e.date === date)) {
      entries.push({ date, ...day.fasten });
    }
  }

  return entries
    .filter(e => e.startedAt && e.endedAt && e.endedAt > e.startedAt)
    .map(e => {
      const durationH = (e.endedAt - e.startedAt) / 3600000;
      const zielH = Number(e.zielH || 16);
      return { ...e, durationH, zielH, reached: durationH >= zielH };
    })
    .sort((a,b) => a.date.localeCompare(b.date));
}

function renderFastenStats(entries) {
  const countEl = document.getElementById('fasten-count');
  if (!countEl) return;

  if (entries.length === 0) {
    document.getElementById('fasten-avg').textContent = '–';
    document.getElementById('fasten-goal-rate').textContent = '–';
    document.getElementById('fasten-best-week').textContent = '–';
    countEl.textContent = '0';
    return;
  }

  const avg = entries.reduce((sum, e) => sum + e.durationH, 0) / entries.length;
  const reached = entries.filter(e => e.reached).length;
  const weeks = {};
  entries.forEach(e => {
    if (!e.reached) return;
    const d = new Date(e.date + 'T00:00:00');
    const monday = new Date(d);
    monday.setDate(d.getDate() - ((d.getDay() + 6) % 7));
    const key = dateKey(monday);
    weeks[key] = (weeks[key] || 0) + 1;
  });
  const best = Object.values(weeks).reduce((max, n) => Math.max(max, n), 0);

  document.getElementById('fasten-avg').textContent = avg.toFixed(1) + 'h';
  document.getElementById('fasten-goal-rate').textContent = Math.round((reached / entries.length) * 100) + '%';
  document.getElementById('fasten-best-week').textContent = best ? String(best) : '–';
  countEl.textContent = String(entries.length);
}

function renderFastenCalendar(entries) {
  const cal = document.getElementById('fasten-calendar');
  if (!cal) return;

  const today = new Date();
  const first = new Date(today.getFullYear(), today.getMonth(), 1);
  const last = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const title = document.getElementById('fasten-calendar-title');
  if (title) title.textContent = 'Fasten-Kalender ' + today.toLocaleDateString('de-DE', { month:'long', year:'numeric' });

  const byDate = {};
  entries.forEach(e => { byDate[e.date] = e; });
  const heads = ['Mo','Di','Mi','Do','Fr','Sa','So'].map(d => `<div class="fasten-cal-head">${d}</div>`);
  const cells = [];
  for (let i = 0; i < ((first.getDay() + 6) % 7); i++) cells.push('<div class="fasten-cal-day empty"></div>');
  for (let day = 1; day <= last.getDate(); day++) {
    const dt = new Date(today.getFullYear(), today.getMonth(), day);
    const key = dateKey(dt);
    const entry = byDate[key];
    const cls = entry ? (entry.reached ? ' done' : ' missed') : '';
    const isToday = key === TODAY() ? ' today' : '';
    const titleText = entry ? `${entry.durationH.toFixed(1)}h / Ziel ${entry.zielH}h` : 'Kein Eintrag';
    cells.push(`<div class="fasten-cal-day${cls}${isToday}" title="${titleText}">${day}</div>`);
  }
  cal.innerHTML = heads.join('') + cells.join('');
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
    label.textContent = 'Fasten läuft 🔥';
    ring.style.strokeDashoffset = circumf * (1 - pct);
    ring.style.stroke = pct >= 1 ? 'var(--green)' : 'var(--accent)';
    if (pct >= 1) {
      sub.textContent = 'Ziel erreicht! 🎉';
      btn.style.background = 'var(--green)';
    } else {
      const rh = Math.floor(rem/3600000);
      const rm2= Math.floor((rem%3600000)/60000);
      sub.textContent = `Noch ${rh}h ${String(rm2).padStart(2,'0')}m`;
      btn.style.background = 'var(--red)';
    }
    btn.textContent = 'Fasten beenden';
    info.textContent = `Gestartet: ${new Date(ss.start).toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'})} Uhr · Ziel: ${ss.zielH}h`;
  }
  tick();
  if (s.active) fastenInterval = setInterval(tick, 1000);

  const fastenLog = ls('fasten_log') || {};
  const streakEl  = document.getElementById('fasten-streak');
  streakEl.innerHTML = '';
  for (let i=13; i>=0; i--) {
    const dt = new Date(); dt.setDate(dt.getDate()-i);
    const key = dateKey(dt);
    const dot = document.createElement('div');
    const syncedDay = getDayData(key);
    dot.className = 'streak-dot' + ((fastenLog[key] || syncedDay.fasten)?' done':'') + (i===0?' today':'');
    dot.title = key;
    dot.textContent = dt.getDate();
    streakEl.appendChild(dot);
  }

  const entries = getFastenEntries();
  renderFastenStats(entries);
  renderFastenCalendar(entries);
}

// ============================================================
// RENDER HOME
// ============================================================

const MOTIVATIONS = [
  {q:"Jeder Schritt zählt – auch der kleinste.", a:"Mein Weg"},
  {q:"Du bist stärker als dein stärkster Hunger.", a:"Mein Weg"},
  {q:"Fortschritt, nicht Perfektion.", a:"Mein Weg"},
  {q:"Was du heute tust, macht dein Morgen leichter.", a:"Mein Weg"},
  {q:"Kleine Gewohnheiten, große Veränderung.", a:"Mein Weg"},
  {q:"Dein Körper kann mehr, als du denkst.", a:"Mein Weg"},
  {q:"Heute ist der beste Tag, anzufangen.", a:"Mein Weg"},
];

function renderHome() {
  const s    = getSettings();
  const d    = getDayData(TODAY());
  const wlog = ls('wlog') || [];

  document.getElementById('home-date').textContent = formatDate(TODAY());

  const idx = new Date().getDate() % MOTIVATIONS.length;
  const mv  = MOTIVATIONS[idx];
  document.getElementById('motivator-box').innerHTML = `<div class="quote">"${mv.q}"</div><div class="author">— ${mv.a}</div>`;

  const lastKg = wlog.length ? wlog[wlog.length-1].kg : null;
  document.getElementById('home-kg').textContent   = lastKg ? lastKg.toFixed(1)+' kg' : '– kg';
  document.getElementById('lbl-start').textContent = s.start+' kg';
  document.getElementById('lbl-ziel').textContent  = s.ziel+' kg';

  if (lastKg) {
    const verloren = s.start - lastKg;
    const total    = s.start - s.ziel;
    const pct      = total > 0 ? Math.max(0, Math.min(100, (verloren/total)*100)) : 0;
    document.getElementById('home-prog').style.width = pct+'%';
    document.getElementById('home-pct').textContent  = pct.toFixed(1)+'% geschafft';
    const el = document.getElementById('home-kg-diff');
    el.textContent = verloren > 0 ? '−'+verloren.toFixed(1)+' kg' : verloren < 0 ? '+'+Math.abs(verloren).toFixed(1)+' kg' : '';
    el.style.color = verloren > 0 ? 'var(--green)' : 'var(--red)';
    document.getElementById('home-badge').innerHTML = `<span class="badge">${pct.toFixed(0)}% 🎯</span>`;
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
    document.getElementById('home-fasten-h').textContent   = '–';
    document.getElementById('home-fasten-sub').textContent = 'inaktiv';
    document.getElementById('dot-fasten').style.background = 'var(--purple)';
  }

  // Streak
  const streakEl = document.getElementById('streak-row');
  streakEl.innerHTML = '';
  for (let i=6; i>=0; i--) {
    const dt  = new Date(); dt.setDate(dt.getDate()-i);
    const key = dateKey(dt);
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
  const date = LOG_DATE();
  const d = getDayData(date);
  const dateInput = document.getElementById('log-date-input');
  if (dateInput && dateInput.value !== date) dateInput.value = date;
  document.getElementById('log-date').textContent = formatDate(date);
  const selectedIsToday = date === TODAY();

  document.getElementById('log-wasser').textContent = d.wasser.toFixed(2);
  document.getElementById('wasser-bar').style.width = Math.min(100,(d.wasser/s.wasserMax)*100)+'%';
  document.getElementById('schritte-bar').style.width = Math.min(100,(d.schritte/s.schritteMax)*100)+'%';
  document.getElementById('inp-kg').placeholder = d.kg ? d.kg.toFixed(1) + ' kg (aktuell)' : 'z.B. 102.5';
  document.getElementById('inp-schritte').placeholder = d.schritte ? d.schritte.toLocaleString('de-DE')+' (aktuell)' : 'z.B. 6500';

  const meals    = d.meals || [];
  const kcalTotal= meals.reduce((a,m)=>a+(m.kcal||0),0);
  const remaining= s.kcalMax - kcalTotal;
  const pct      = Math.min(100,(kcalTotal/s.kcalMax)*100);

  document.getElementById('log-kcal-total').textContent  = kcalTotal;
  document.getElementById('kcal-goal-label').textContent = `Ziel: ${s.kcalMax} kcal`;

  const remEl = document.getElementById('kcal-remaining');
  if (remaining < 0) {
    remEl.textContent = Math.abs(remaining)+' kcal über Ziel';
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
    ml.innerHTML = `<div style="color:var(--muted);font-size:13px;padding:8px 0;">Noch keine Einträge ${selectedIsToday ? 'heute' : 'an diesem Tag'}.</div>`;
  } else {
    ml.innerHTML = meals.map((m,i) => `
      <div class="meal-item">
        <div style="flex:1;min-width:0;">
          <div class="meal-name">${escHtml(m.name)}</div>
          <div class="meal-detail">${m.time ? m.time+' Uhr · ' : ''}${m.gramm ? m.gramm+'g · ' : ''}${m.kcal} kcal</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
          <span class="meal-kcal">${m.kcal} kcal</span>
          <button class="meal-del" data-meal-action="edit" data-meal-index="${i}">✎</button>
          <button class="meal-del" data-meal-action="delete" data-meal-index="${i}">✕</button>
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
    document.getElementById('p-avg').textContent      = '–';
  } else {
    document.getElementById('p-verloren').textContent = '0';
    document.getElementById('p-noch').textContent     = (s.start-s.ziel).toFixed(1);
    document.getElementById('p-avg').textContent      = '–';
  }

  const wll = document.getElementById('weight-log-list');
  if (wlog.length === 0) {
    wll.innerHTML = '<div style="color:var(--muted);font-size:13px;">Noch keine Einträge.</div>';
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
  if (!confirm('Wirklich den gesamten Gewichtsverlauf löschen?')) return;
  createSafetyBackup('vor-verlauf-loeschen');
  lsSet('wlog', []);
  sbClearWeightLog();
  renderProgress(); renderHome(); toast('Verlauf gelöscht');
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
      toast('Die App ist aktuell (v' + APP_VERSION + ').');
    }
  } catch (e) {
    if (manual) toast('Update-Prüfung fehlgeschlagen – bitte später erneut versuchen.');
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
  if (window.__pendingServiceWorker) {
    window.__pendingServiceWorker.postMessage({ type: 'SKIP_WAITING' });
    return;
  }
  if ('caches' in window) {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => caches.delete(k)));
  }
  location.reload(true);
}
// ============================================================
// GERÄTE-SYNC
// ============================================================

function copyUserId() {
  const uid = localStorage.getItem('meinweg_uid') || '';
  navigator.clipboard.writeText(uid).then(() => {
    toast('Geräte-ID kopiert.');
  }).catch(() => {
    const el = document.getElementById('sync-uid-display');
    el.select();
    document.execCommand('copy');
    toast('Geräte-ID kopiert.');
  });
}


function showQrCode() {
  const uid = localStorage.getItem('meinweg_uid') || '';
  const canvas = document.getElementById('sync-uid-canvas');
  const url = 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=' + encodeURIComponent(uid);
  canvas.innerHTML = '<img src="' + url + '" style="border-radius:8px;border:1px solid var(--border);" alt="QR-Code"><div style="font-size:11px;color:var(--muted);margin-top:6px;">UUID ablesen und auf anderem Gerät einfügen</div>';
}

function initSyncUid() {
  const uid = localStorage.getItem('meinweg_uid') || '';
  const el = document.getElementById('sync-uid-display');
  if (el) el.value = uid;
}

function downloadBackup() {
  createBackupDownload('backup');
  toast('Backup exportiert.');
}

function createBackupDownload(label = 'backup') {
  const payload = getBackupPayload();
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  const stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-');
  link.href = url;
  link.download = `meinweg-${label}-${stamp}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function createSafetyBackup(reason) {
  createBackupDownload('sicherheitsbackup-' + reason);
  toast('Sicherheitsbackup erstellt.');
}

function triggerBackupImport() {
  const input = document.getElementById('backup-import-input');
  if (!input) return;
  input.value = '';
  input.click();
}

function importBackupFile(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(String(reader.result || '{}'));
      createSafetyBackup('vor-backup-import');
      applyBackupPayload(payload);
      toast('Backup importiert. Die App wird neu geladen ...');
      setTimeout(() => location.reload(), 1200);
    } catch (e) {
      console.error('Backup-Import fehlgeschlagen:', e);
      toast('Backup konnte nicht importiert werden.');
    }
  };
  reader.onerror = () => {
    toast('Datei konnte nicht gelesen werden.');
  };
  reader.readAsText(file, 'utf-8');
}

function downloadFoodDB() {
  const payload = getFoodDBPayload();
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  const stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-');
  link.href = url;
  link.download = `meinweg-lebensmittel-${stamp}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  toast('Lebensmittel exportiert.');
}

function triggerFoodDBImport() {
  const input = document.getElementById('food-db-import-input');
  if (!input) return;
  input.value = '';
  input.click();
}

function importFoodDBFile(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(String(reader.result || '{}'));
      applyFoodDBPayload(payload);
      renderDB();
      toast('Lebensmittel importiert.');
    } catch (e) {
      console.error('Lebensmittel-Import fehlgeschlagen:', e);
      toast('Lebensmittel konnten nicht importiert werden.');
    }
  };
  reader.onerror = () => {
    toast('Datei konnte nicht gelesen werden.');
  };
  reader.readAsText(file, 'utf-8');
}

// Ueberschreibt aeltere Sync-Logik ohne Aktivierungscode.
function applyUserId() {
  const input = document.getElementById('sync-uid-input').value.trim();
  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (!uuidPattern.test(input)) {
    toast('Bitte eine gültige Geräte-ID eingeben.');
    return;
  }
  if (!confirm('Geräte-ID wirklich übernehmen? Die App wird danach neu geladen.')) return;
  createSafetyBackup('vor-geraete-id');
  localStorage.setItem('meinweg_uid', input);
  toast('Geräte-ID übernommen. Die App wird neu geladen ...');
  setTimeout(() => location.reload(), 1500);
}
// ============================================================
