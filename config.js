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
