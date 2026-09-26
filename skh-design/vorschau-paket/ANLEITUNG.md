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
| Wo liegen die Dateien? | **Cloudflare Workers** (Assets-Hosting, kostenlos; hat Cloudflare Pages inzwischen abgelöst) | lädt einen fertigen Ordner hoch, 0 € |
| Wer kommt hinein? | **Cloudflare Access** (kostenlos bis 50 Personen): nur freigegebene E-Mail-Adressen, Anmeldung mit Einmal-Code per E-Mail | kein Konto, kein Passwort; Vorschau ist nicht öffentlich |
| Adresse | `sikra-vorschau.<Cloudflare-Benutzername>.workers.dev` (**nicht** die ursprünglich geplante eigene Domain – siehe „Abweichungen“ in Abschnitt 3) | kein Claude/Anthropic-Bezug, 0 €, kein DNS-Risiko für die echte Webseite |
| DNS-Eintrag | **entfällt** – keine eigene Domain nötig | Wix-DNS und E-Mail (MX) bleiben unangetastet |
| Rückmeldungen | **Microsoft Forms** (Non-Profit-M365) | kostenlos, Antworten landen gesammelt in Excel |
| Nicht gewählt | Eigene Domain `vorschau.singende-krankenhaeuser.de` (würde Nameserver-Umstellung der ganzen Domain zu Cloudflare erfordern, Risiko für Wix-Webseite und E-Mail); Wix-Subdomain als eigene Wix-Website (Nachbau + eigenes Premium-Abo); ZIP über OneDrive (umständlich, am Handy kaum nutzbar) | Aufwand bzw. Risiko/Kosten |

**Datenschutz:** Cloudflare (USA, EU-US Data Privacy Framework) sieht die IP-Adressen der Besucher:innen und die E-Mail-Adressen
für den Code. Es ist eine interne Vorschau für das Leitungsteam; die Seiten enthalten nur Inhalte, die schon öffentlich auf der
Webseite stehen. Nach der Abnahme das Cloudflare-Projekt löschen (Abschnitt 5).

## 3. Einrichten – Schritt für Schritt (ca. 45 Minuten)

**Hinweis (Stand 26.09.2026, tatsächlicher Ablauf – weicht an zwei Stellen von der ursprünglichen Planung ab, Details siehe
„Abweichungen“ unten):**

**A. Cloudflare-Konto** (5 Min.): `dash.cloudflare.com/sign-up` – mit einer Vereinsadresse (z. B. tom.jansen@…), kostenloser Tarif.

**B. Seiten hochladen** (10 Min.):
1. Cloudflare-Startseite → Kachel „Ship something new“ → die ZIP-Datei `vorschau-paket.zip` in das Feld „Drop a folder, or a zip“
   ziehen. (Workers und Pages sind bei Cloudflare inzwischen zusammengelegt; es gibt keinen separaten „Pages“-Menüpunkt mehr.)
2. *Bereitstellen* klicken. Cloudflare vergibt automatisch einen Zufallsnamen (z. B. `nameless-scene-xxxx`) und eine Adresse
   `<name>.<dein-cloudflare-benutzername>.workers.dev`.
3. Projekt umbenennen: *Workers und Pages → Projekt öffnen → Einstellungen → Allgemeines → Name* → `sikra-vorschau` eintragen,
   *Bereitstellen*. Adresse ist danach `sikra-vorschau.<benutzername>.workers.dev`.
4. Adresse öffnen, Startseite muss die Abnahme-Übersicht zeigen.

**C. Eigene Adresse – entfällt, siehe Abweichung 1 unten.** Wir bleiben bei der `workers.dev`-Adresse aus Schritt B.

**D. Zugangsschutz** (15–20 Min., mit den Cloudflare-Eigenheiten unten eher 25 Min.) – **vor** dem Verschicken der Adresse:
1. *Zero Trust* öffnen (beim ersten Mal Teamnamen wählen, Tarif **Free**; evtl. wird eine Zahlungsart abgefragt, berechnet wird im
   Free-Tarif nichts – 0 $/Monat bis 50 Nutzer:innen).
2. *Zugriffssteuerungen → Anwendungen → Neue Anwendung erstellen → Selbst gehostet und privat*.
3. Bei „Ziele“ den Reiter **„Workers“** wählen (nicht „Öffentliches DNS“ – Custom Domains für Workers verlangen sonst, dass die
   ganze Domain-Zone zu Cloudflare transferiert wird, siehe Abweichung 1), Worker `sikra-vorschau` auswählen, **und auf
   „+ Workers hinzufügen“ klicken** (die reine Dropdown-Auswahl reicht nicht, sie muss extra bestätigt werden – die „Vorschau“
   unten auf der Seite aktualisiert sich dabei nicht zuverlässig live, das ist eine Anzeige-Macke, kein Fehler).
4. Richtlinie „Leitungsteam“ neu erstellen: Aktion *Erlauben*, Regel *E-Mails* → die Adressen von Martin, Paula, Sonja, Vera,
   Sandra und Tom eintragen.
5. Name der Anwendung ausfüllen (**Pflichtfeld**, wird leicht übersehen): `SKH Vorschau`.
6. Ganz nach unten scrollen und wirklich auf **„Erstellen“** klicken – nicht vorher zu einer anderen Dashboard-Seite wechseln,
   sonst geht die Konfiguration verloren (ist uns beim ersten Versuch passiert).
7. **Anmeldemethode prüfen** (wichtigster Stolperpunkt, siehe Abweichung 2): *Zugriffssteuerungen → Integrationen von
   Identitätsanbietern*. Falls dort ein Anbieter „Cloudflare“ steht: löschen (drei Punkte → Löschen) – der führt sonst zum
   normalen Cloudflare-Account-Login (Passwort/Google/GitHub), den externe Nutzer:innen nicht haben. Dann
   „+ Identitätsanbieter hinzufügen“ → **„One-time PIN“** auswählen. Ohne diesen Schritt bekommen Besucher:innen die Meldung
   „There are no login methods available for this account“.
8. Test im privaten Browserfenster: Adresse öffnen → E-Mail eingeben → „Send login code“ → Code aus der Mail eingeben →
   Übersicht muss erscheinen. Mit einer **nicht** freigegebenen Adresse darf kein Code funktionieren (Gegentest empfohlen).

**E. Forms-Formular** (Abschnitt 4), Link ins Paket (Skript mit Link aufrufen), ZIP erneut hochladen (*Neue Bereitstellung*,
gleicher Weg wie B.1–B.2, diesmal auf das bestehende Projekt `sikra-vorschau`).

**F. Einladung verschicken:** Adresse `https://sikra-vorschau.<benutzername>.workers.dev`, Hinweis „Anmeldung mit deiner
E-Mail-Adresse, du bekommst einen Code“, Rückmeldefrist.

### Abweichungen von der ursprünglichen Planung (26.09.2026)

1. **Keine eigene Domain (`vorschau.singende-krankenhaeuser.de`) – stattdessen `workers.dev`-Adresse.** Grund: Cloudflare hat
   Workers und Pages zusammengelegt; die „Custom Domain“-Funktion für Workers verlangt jetzt, dass die **komplette Domain**
   (`singende-krankenhaeuser.de`) als Zone zu Cloudflare gehört (Nameserver-Umstellung) – nicht mehr nur ein CNAME-Eintrag im
   Wix-Dashboard wie ursprünglich geplant. Eine Nameserver-Umstellung würde die live laufende Wix-Webseite und den
   E-Mail-Empfang (MX-Einträge) der ganzen Organisation betreffen – zu viel Risiko für eine interne Vorschau. Die
   `workers.dev`-Adresse erfüllt die eigentliche Anforderung („kein Claude/Anthropic-Bezug sichtbar“) genauso gut, kostet 0 €
   und hat kein DNS-Risiko. Falls doch mal eine eigene Domain gewünscht ist: entweder die Nameserver-Umstellung bewusst und mit
   Zeitpuffer separat planen, oder prüfen, ob Cloudflare zu einem späteren Zeitpunkt wieder eine einfachere Custom-Domain-Option
   für Workers anbietet.
2. **Anmeldemethode „One-time PIN“ musste explizit hinzugefügt werden.** In diesem Cloudflare-Konto war unter „Integrationen von
   Identitätsanbietern“ bereits ein Anbieter „Cloudflare“ vorhanden (Standard-Account-Login) – der hat den eigentlich als
   Vorgabe dokumentierten Einmalcode-Login verdrängt. Erst nach Löschen dieses Anbieters und explizitem Hinzufügen von
   „One-time PIN“ hat der Zugang wie geplant funktioniert. Bei einem ganz neuen/leeren Cloudflare-Zero-Trust-Konto ist dieser
   Schritt möglicherweise nicht nötig – aber sicherheitshalber immer unter „Integrationen von Identitätsanbietern“ prüfen.

## 4. Microsoft-Forms-Formular

*forms.office.com → Neues Formular* „Rückmeldung neue Webseite“. Einstellungen: *Nur Personen in meiner Organisation* **aus**
(falls nicht alle ein Vereinskonto haben), *Namen erfassen* bzw. Pflichtfrage „Dein Name“. Je Zeile unten eine Frage vom Typ
**Auswahl** („passt“ / „ändern“) und darunter eine **Text**-Frage „Anmerkung“ (nicht Pflicht). Zum Schluss „Gesamteindruck“ (Text).
Link über *Antworten sammeln → Link kopieren*.

**Achtung, häufiger Fehler:** Der Link muss der **Ausfüll-Link** sein (kurz, Form `forms.cloud.microsoft/e/…` oder
`forms.office.com/r/…`). **Nicht** den Link aus der Adresszeile beim Bearbeiten des Formulars verwenden
(`…DesignPageV2.aspx?...subpage=design…`) – der öffnet bei den Empfänger:innen die Bearbeitungsansicht statt des Formulars und
verlangt ggf. eine Anmeldung mit Rechte-Fehler. Den richtigen Link holt man über den Reiter **„Antworten“** im Formular → Knopf
**„Antworten sammeln“** → Link kopieren.

Aktueller Link (Formular „Rückmeldung neue Webseite“, angelegt 26.09.2026): `https://forms.cloud.microsoft/e/X0hy5Qp9bt`

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
| Abnahme abgeschlossen | Cloudflare-Projekt (`sikra-vorschau`) löschen, Access-Anwendung „SKH Vorschau“ löschen |

## 6. Checkliste

- [ ] Paket mit Forms-Link erzeugt, keine Fehlermeldung des Skripts?
- [ ] `workers.dev`-Adresse nur mit E-Mail-Code erreichbar (Anmeldemethode „One-time PIN“ unter „Integrationen von
      Identitätsanbietern“ geprüft, kein störender „Cloudflare“-Anbieter aktiv)?
- [ ] Mit nicht freigegebener E-Mail kein Zugang?
- [ ] Alle Seiten und Bilder laden, Direktlinks (`/#dozenten`) funktionieren?
- [ ] Forms-Formular getestet, Antworten kommen in Excel an?
- [ ] Nach der Abnahme alles wieder abgebaut?
