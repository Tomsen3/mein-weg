'use strict';

// ============================================================
// KONFIGURATION – HIER ANPASSEN
// ============================================================

// SUPABASE – Werte aus Supabase → Project Settings → API
const SB_URL     = 'https://cnlgpviurgpxcrjtfxqi.supabase.co';
const SB_ANON    = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNubGdwdml1cmdweGNyanRmeHFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3NjExMjQsImV4cCI6MjA4ODMzNzEyNH0.FQ842Ete0xJ1MgCM0aBejDVkBL15-OaCGuN_0Cu80Og';

// VERSION
const APP_VERSION        = '1.16';
const VERSION_URL        = 'https://raw.githubusercontent.com/tomsen3/mein-weg/main/version.json';
const UPDATE_INTERVAL_MS = 6 * 60 * 60 * 1000; // 6 Stunden

// Nutzer-ID (UUID für Supabase – einmalig erzeugt, in localStorage gespeichert)
// Diese ID identifiziert DIESES Gerät ohne Auth-Login.
function getUserId() {
  let uid = localStorage.getItem('meinweg_uid');
  if (!uid) {
    uid = (window.crypto && typeof window.crypto.randomUUID === 'function')
      ? window.crypto.randomUUID()
      : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
          const r = Math.random() * 16 | 0;
          const v = c === 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
    localStorage.setItem('meinweg_uid', uid);
  }
  return uid;
}
const USER_ID = getUserId();
