'use strict';

// ============================================================
// APP INIT
// ============================================================

async function initApp() {
  const verEl = document.getElementById('settings-app-version');
  if (verEl) verEl.textContent = 'v' + APP_VERSION;
  initSyncUid();

  try {
    getFoodDB();
    renderAll();
    renderFastenPage();
  } catch (e) {
    console.warn('initApp Render-Fehler:', e);
  }

  // Supabase-Verbindung prüfen, dann Daten laden
  try {
    await checkSbConnection();
  } catch (e) {
    console.warn('initApp Supabase-Fehler:', e);
    setSbStatus(false, 'Nicht verbunden');
  }

  if (sbOnline) {
    try {
      // Settings aus Supabase laden (überschreibt localStorage falls vorhanden)
      const sbSettings = await sbLoadSettings();
      if (sbSettings) renderAll();

      // Fasten-State aus Supabase laden
      const sbFasten = await sbLoadFastenState();
      if (sbFasten) renderFastenPage();

      // Tageslog für heute vorausladen (Hintergrund)
      sbLoadDayData(TODAY())
        .then(d => { if (d) renderAll(); })
        .catch(e => console.warn('sbLoadDayData Fehler:', e));
    } catch (e) {
      console.warn('initApp Supabase-Datenfehler:', e);
    }
  }

  loadRezepteData()
    .then(() => renderHomeFav())
    .catch(e => console.warn('loadRezepteData Fehler:', e));

  checkForUpdate(false);
}

// Beim Laden starten
initApp().catch(e => {
  console.error('initApp Fehler:', e);
  if (typeof setSbStatus === 'function') setSbStatus(false, 'Nicht verbunden');
  try {
    toast('App-Start unvollst\u00e4ndig. Bitte Seite neu laden.');
  } catch (_) {}
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(reg => {
    reg.onupdatefound = () => {
      const w = reg.installing;
      w.onstatechange = () => {
        if (w.state === 'installed' && navigator.serviceWorker.controller) {
          toast('Update verfügbar – App wird neu geladen …');
          setTimeout(() => location.reload(), 2000);
        }
      };
    };
  });
}
