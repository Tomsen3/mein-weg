'use strict';

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

  // Supabase-Verbindung prüfen, dann Daten laden
  try {
    await checkSbConnection();

    if (sbOnline) {
      // Settings aus Supabase laden (überschreibt localStorage falls vorhanden)
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

      // Tageslog für heute vorausladen (Hintergrund)
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
          toast('Update verfügbar – App wird neu geladen …');
          setTimeout(() => location.reload(), 2000);
        }
      };
    };
  });
}
