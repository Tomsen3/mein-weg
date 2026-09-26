# vorschau-paket – Vorschau der neuen Webseite unter eigener Adresse (ohne Claude)

Stand: 26.09.2026 · Verantwortlich: Tom (IT, Webseite) · Hilfe bei DNS: Andy (externer IT)
Hintergrund und Entscheidung: `ABNAHME.md`, Abschnitt 3 („Nachtrag 26.09.2026“). Bisher liegt die Abnahme als privater Link bei
Claude; das Leitungsteam soll sie **unter einer eigenen Adresse** sehen, ohne Claude-Konto.

## 1. Was das Paket ist

`erzeuge_paket.py` baut aus den Vorschauen in `skh-design/` einen fertigen Ordner (`ausgabe/`) und eine ZIP-Datei
(`vorschau-paket.zip`, ca. 11 MB):

| Datei | Inhalt |
|---|---|
| `index.html` | Abnahme-Übersicht (aus `abnahme.html`) – Startseite der Vorschau-Adresse |
| `vorschau-foto*.html` | alle 17 Vorschauseiten |
| `fotos/`, `abnahme/` | nur die tatsächlich verwendeten Bilder |
| `robots.txt` | Suchmaschinen ausgesperrt (zusätzlich `noindex` in jeder Seite) |

Unterschiede zur Claude-Fassung: kein Claude-Speicher, kein Skript von Claude. Der **Rückmeldebogen** speichert nicht mehr selbst;
stattdessen ein Knopf „Rückmeldung abgeben“ zu einem **Microsoft-Forms-Formular** (Abschnitt 4), der Bogen zum Ausdrucken bleibt.
Das Skript prüft am Ende, dass in keiner Seite „claude“, „anthropic“ oder „artifact“ vorkommt.

**Neu erzeugen** (nach jeder Änderung an den Vorschauen), im Ordner `skh-design`:
```
python3 vorschau-paket/erzeuge_paket.py "https://forms.office.com/…"
```

## 2. Entscheidungen

| Frage | Entscheidung | Grund |
|---|---|---|
| Wo liegen die Dateien? | **Cloudflare Pages** (kostenlos) | lädt einen fertigen Ordner hoch, eigene Adresse möglich, 0 € |
| Wer kommt hinein? | **Cloudflare Access** (kostenlos bis 50 Personen): nur freigegebene E-Mail-Adressen, Anmeldung mit Einmal-Code per E-Mail | kein Konto, kein Passwort; Vorschau ist nicht öffentlich |
| Adresse | `vorschau.singende-krankenhaeuser.de` (Vorschlag) | eigene Domain, kein Hinweis auf Dienstleister |
| DNS-Eintrag | im **Wix-Dashboard** (Tom: „ich kann in Wix eine eigene Subdomain anlegen“) | Domain wird über Wix verwaltet |
| Rückmeldungen | **Microsoft Forms** (Non-Profit-M365) | kostenlos, Antworten landen gesammelt in Excel |
| Nicht gewählt | Wix-Subdomain als eigene Wix-Website (Nachbau + eigenes Premium-Abo); ZIP über OneDrive (umständlich, am Handy kaum nutzbar) | Aufwand bzw. Kosten |

**Datenschutz:** Cloudflare (USA, EU-US Data Privacy Framework) sieht die IP-Adressen der Besucher:innen und die E-Mail-Adressen
für den Code. Es ist eine interne Vorschau für das Leitungsteam; die Seiten enthalten nur Inhalte, die schon öffentlich auf der
Webseite stehen. Nach der Abnahme das Cloudflare-Projekt löschen (Abschnitt 5).

## 3. Einrichten – Schritt für Schritt (ca. 45 Minuten)

**A. Cloudflare-Konto** (5 Min.): `dash.cloudflare.com/sign-up` – mit einer Vereinsadresse (z. B. tom.jansen@…), kostenloser Tarif.

**B. Seiten hochladen** (10 Min.):
1. *Workers & Pages → Erstellen → Pages → Assets hochladen* (engl. „Upload assets“).
2. Projektname: `skh-vorschau` → *Projekt erstellen*.
3. Die ZIP-Datei `vorschau-paket.zip` hochladen (oder den entpackten Ordner hineinziehen) → *Bereitstellen*.
4. Cloudflare zeigt eine Adresse `skh-vorschau.pages.dev` – kurz öffnen, Startseite muss die Abnahme-Übersicht zeigen.

**C. Eigene Adresse** (10 Min.):
1. Im Pages-Projekt *Benutzerdefinierte Domains → Domain einrichten* → `vorschau.singende-krankenhaeuser.de`.
2. Cloudflare nennt einen **CNAME-Eintrag**: Name `vorschau`, Ziel `skh-vorschau.pages.dev`.
3. Im **Wix-Dashboard**: *Einstellungen → Domains → (eure Domain) → DNS-Einträge verwalten → CNAME → Eintrag hinzufügen*,
   Host `vorschau`, Wert `skh-vorschau.pages.dev`, speichern. (Nicht `www` oder `@` ändern!)
4. Warten, bis Cloudflare „Aktiv“ zeigt (einige Minuten bis wenige Stunden).

**D. Zugangsschutz** (15 Min.) – **vor** dem Verschicken der Adresse:
1. *Zero Trust* öffnen (beim ersten Mal Teamnamen wählen, Tarif **Free**; es wird ggf. eine Zahlungsart abgefragt, berechnet wird im
   Free-Tarif nichts).
2. *Access → Anwendungen → Anwendung hinzufügen → Selbst gehostet* („Self-hosted“).
3. Name „SKH Vorschau“; **zwei** Adressen eintragen: `vorschau.singende-krankenhaeuser.de` **und** `skh-vorschau.pages.dev`
   (sonst ist die pages.dev-Adresse offen!).
4. Richtlinie „Leitungsteam“: Aktion *Zulassen*, Regel *E-Mails* → die Adressen von Martin, Paula, Sonja, Vera, Sandra, Tom.
5. Anmeldemethode: *Einmal-PIN* („One-time PIN“).
6. Test im privaten Browserfenster: Adresse öffnen → E-Mail eingeben → Code aus der Mail → Übersicht erscheint. Mit einer **nicht**
   freigegebenen Adresse darf kein Code kommen.

**E. Forms-Formular** (Abschnitt 4), Link ins Paket (Skript mit Link aufrufen), ZIP erneut hochladen (*Neue Bereitstellung*).

**F. Einladung verschicken:** Adresse `https://vorschau.singende-krankenhaeuser.de`, Hinweis „Anmeldung mit deiner E-Mail-Adresse,
du bekommst einen Code“, Rückmeldefrist.

## 4. Microsoft-Forms-Formular

*forms.office.com → Neues Formular* „Rückmeldung neue Webseite“. Einstellungen: *Nur Personen in meiner Organisation* **aus**
(falls nicht alle ein Vereinskonto haben), *Namen erfassen* bzw. Pflichtfrage „Dein Name“. Je Zeile unten eine Frage vom Typ
**Auswahl** („passt“ / „ändern“) und darunter eine **Text**-Frage „Anmerkung“ (nicht Pflicht). Zum Schluss „Gesamteindruck“ (Text).
Link über *Antworten sammeln → Link kopieren*.

1. Grundsatz 1 · Stil „Vorschlag Tom“
2. Grundsatz 2 · Menü mit sechs Punkten
3. Grundsatz 3 · Jahrestagung bleibt
4. Grundsatz 4 · Weniger Seiten
5. Grundsatz 5 · Drei neue Seiten
6. Grundsatz 6 · Jede Information an einer Stelle
7. Grundsatz 7 · Du-Ansprache und Gendern
8. Grundsatz 8 · Ein Rechtstexte-Auftrag (Budget)
9. Grundsatz 9 · Name bei Google
10. Seite · Startseite
11. Seite · Weiterbildung
12. Seite · Dozent:innen
13. Seite · Anmeldung Weiterbildung
14. Seite · Für Singleiter:innen (Sing mit)
15. Seite · Singende Landkarte
16. Seite · Für Einrichtungen
17. Seite · Termine
18. Seite · Veranstaltungsseite
19. Seite · Über uns
20. Seite · Mitglied sein
21. Seite · Aus dem Netzwerk
22. Seite · Kontakt
23. Seite · Downloads & Formulare
24. Seite · Shop
25. Seite · Häufige Fragen
26. Seite · Rechtliches

## 5. Pflege und Abbau

| Wann | Was |
|---|---|
| Vorschau geändert | Skript neu ausführen, ZIP in Cloudflare als neue Bereitstellung hochladen |
| Person kommt dazu | Zero Trust → Access → Anwendung → Richtlinie → E-Mail ergänzen |
| Abnahme abgeschlossen | Cloudflare-Projekt löschen, Access-Anwendung löschen, CNAME `vorschau` in Wix löschen |

## 6. Checkliste

- [ ] Paket mit Forms-Link erzeugt, keine Fehlermeldung des Skripts?
- [ ] Beide Adressen (eigene und `pages.dev`) nur mit Code erreichbar?
- [ ] Mit nicht freigegebener E-Mail kein Zugang?
- [ ] Alle Seiten und Bilder laden, Direktlinks (`/#dozenten`) funktionieren?
- [ ] Forms-Formular getestet, Antworten kommen in Excel an?
- [ ] Nach der Abnahme alles wieder abgebaut?
