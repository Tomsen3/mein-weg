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

  try {
    await checkSbConnection();
  } catch (e) {
    console.warn('initApp Supabase-Fehler:', e);
    setSbStatus(false, 'Nicht verbunden');
  }

  if (sbOnline) {
    try {
      const sbSettings = await sbLoadSettings();
      if (sbSettings) renderAll();

      const didLoadWeightLog = await syncWeightLog();
      if (didLoadWeightLog) {
        renderAll();
        renderProgress();
      }

      const didLoadRecentDays = await syncRecentDayData(14);
      if (didLoadRecentDays) {
        renderAll();
        renderFastenPage();
      }

      const sbFasten = await sbLoadFastenState();
      if (sbFasten) renderFastenPage();

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

function notifyServiceWorkerUpdate(worker) {
  window.__pendingServiceWorker = worker;
  showUpdateModal(APP_VERSION, [
    'Neue App-Dateien wurden installiert.',
    'Tippe auf Jetzt aktualisieren, damit die neue Version aktiv wird.'
  ]);
}

initApp().catch(e => {
  console.error('initApp Fehler:', e);
  if (typeof setSbStatus === 'function') setSbStatus(false, 'Nicht verbunden');
  try {
    toast('App-Start unvollst\u00e4ndig. Bitte Seite neu laden.');
  } catch (_) {}
});

if ('serviceWorker' in navigator) {
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });

  navigator.serviceWorker.register('sw.js').then(reg => {
    if (reg.waiting && navigator.serviceWorker.controller) {
      notifyServiceWorkerUpdate(reg.waiting);
    }

    reg.addEventListener('updatefound', () => {
      const w = reg.installing;
      if (!w) return;
      w.addEventListener('statechange', () => {
        if (w.state === 'installed' && navigator.serviceWorker.controller) {
          notifyServiceWorkerUpdate(w);
        }
      });
    });
  }).catch(e => {
    console.warn('Service Worker Registrierung fehlgeschlagen:', e);
  });
}
