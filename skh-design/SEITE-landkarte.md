# SEITE-landkarte.md – Seite „Singende Landkarte“ im Stil „Foto“

Stand: 26.09.2026 · Verantwortlich: Tom (Webseite/Marketing, IT)
Vorschau: `skh-design/vorschau-foto-landkarte.html` (im Browser öffnen, Ordner `fotos/` muss daneben liegen)
Stilregeln: `DESIGN-foto.md` · Bausteine für Unterseiten: `SEITE-weiterbildung.md`, Abschnitt 5, `SEITE-sing-mit.md`, `SEITE-einrichtungen.md`, `SEITE-mitglied-sein.md`, `SEITE-termine.md`, `SEITE-ueber-uns.md` und `SEITE-kontakt.md`, jeweils Abschnitt 6 ·
Nachbarseiten: `vorschau-foto.html` (Start), `vorschau-foto-weiterbildung.html`, `vorschau-foto-sing-mit.html`, `vorschau-foto-einrichtungen.html`, `vorschau-foto-mitglied-sein.html`, `vorschau-foto-termine.html`, `vorschau-foto-ueber-uns.html`, `vorschau-foto-dozenten.html`, `vorschau-foto-kontakt.html`, `vorschau-foto-downloads.html` · Ist-Zustand: `IST-STRUKTUR.md`
Bedienungsanleitung der Karte (Datenpflege, Makro, Hochladen): OneDrive Tom, `000_Neu/09_Website_Redaktion_und_Aktualisierung/Kartenerstellung/04_Gemeinsame Karte/2026_03_04_SKH_Netzwerkkarte_Anleitung.docx`

Dieses Dokument erklärt, **wie die Seite „Singende Landkarte“ aufgebaut ist, wie die Karte technisch funktioniert, woher die
Daten kommen, welche Personendaten gezeigt werden dürfen und welche Seite für welche Information zuständig ist**. Eine Person
ohne Vorkenntnisse soll die Seite damit in Wix nachbauen und die Karte später pflegen können.

**Rolle der Seite:** Die Landkarte beantwortet die Frage **„Wo kann ich in meiner Nähe singen – und wen spreche ich an?“**.
Hauptort ist sie für das **Verzeichnis** aller Singleiter:innen, Singkreise und zertifizierten Einrichtungen in Deutschland,
Österreich und der Schweiz (Karte, Suche, Druckliste) und für die Frage **„Wie komme ich auf die Karte, wie ändere ich meinen
Eintrag, was wird gezeigt?“**. Andere Seiten verlinken mit einem Satz hierher.

**Zielgruppen:** (1) Menschen, die mitsingen wollen (Patient:innen, Angehörige, Interessierte), (2) Einrichtungen, die eine
Singleitung suchen, (3) Singleiter:innen, die sich vernetzen oder ihren Eintrag ändern wollen, (4) Pflegekräfte, die eine Liste
für den Aushang brauchen.

**Adresse:** `/singende-landkarte` bleibt. Menüpunkt „Singende Landkarte“ (dritter von sechs), in der Vorschau unterstrichen.
Brotkrumen: „Start › Singende Landkarte“.

---

## 1. Ausgangslage – was es heute gibt

Die Seite `/singende-landkarte` wurde am 25./26.09.2026 ausgelesen (Seitenquelltext per `curl`). Aufbau von oben nach unten:

| Nr. | Bereich | Inhalt | Beobachtung |
|---|---|---|---|
| 1 | Überschrift „SINGENDE LANDKARTE“ | „Singleiter:innen, Singkreise und zertifizierte Einrichtungen – auf einen Blick. Entdecke unser Netzwerk in Deutschland, Österreich und der Schweiz und finde Angebote in deiner Nähe.“ | |
| 2 | drei Erklärungen mit Symbol (4 PNG-Symbole) | **Singleiter:innen** „Zertifizierte Mitglieder unseres Netzwerks, die Singgruppen in Einrichtungen und sozialen Räumen anleiten.“ · **Singkreise** „Offene Singgruppen unserer Mitglieder — für alle zugänglich, oft unabhängig von Einrichtungen.“ · **Einrichtungen** „Zertifizierte Krankenhäuser, Pflege- und Gesundheitseinrichtungen mit regelmäßigen Singangeboten.“ | Einrichtungen stehen in der Kartendatei **nicht** (siehe unten) |
| 3 | Hinweise | „Die Markerfarbe zeigt das Land: 🟢 Deutschland · 🔴 Österreich · 🟡 Schweiz“ · „Mit dem Button ‚PDF / Drucken‘ unten links in der Karte kannst du die aktuelle Auswahl als druckbare Liste öffnen.“ | Farbe nach **Land**, obwohl man nach **Art** sucht; Rot und Knallgelb passen nicht zum Stil |
| 4 | Karte | Wix-Element „HTML einbetten“ (Element `comp-mmal0lh0`, 980 × 762 px) | Inhalt siehe „Technik“ |
| 5 | zwei Knöpfe | „Mitglied werden“ → **direkt die Beitrittserklärung als PDF** (`7530fd_53d75037…pdf`, 1 Seite, Stand Mai 2025) · „unsere Weiterbildung“ → `/weiterbildung` | Überall sonst führt „Mitglied werden“ auf `/mitglied-sein` (`SEITE-mitglied-sein.md`) |

### Technik: Wie ist die Karte eingebunden, woher kommen die Daten?

**Ergebnis: keine Wix-App und keine Wix-Datensammlung (CMS).** Die Karte ist eine **selbst gebaute HTML-Datei** mit der freien
Kartenbibliothek **Leaflet**. Sie wird in Wix über ein Element **„HTML einbetten“ (iframe)** angezeigt. Die Daten stehen **fest in
der HTML-Datei**; sie werden aus einer Excel-Datei erzeugt.

```
Netzwerkkarte_stammdaten.xlsm  ──┐
(Excel, eine Zeile je Eintrag,   │  Makro-Knopf 1 „Karte aktualisieren“
 Pflege: Tom)                    ├──────────────────────────────────►  netzwerkkarte.html
Netzwerk_Vorlage.html  ──────────┘                                      │
(Gestaltung + Programm, nicht direkt bearbeiten)                        │ in Wix-Medien hochladen,
                                                                        ▼ URL ins HTML-Element eintragen
                                                         Seite /singende-landkarte (HTML einbetten)
```

| Frage | Antwort | Quelle |
|---|---|---|
| Wo liegen die Dateien? | OneDrive Tom: `000_Neu/09_Website_Redaktion_und_Aktualisierung/Kartenerstellung/04_Gemeinsame Karte/` (Excel `.xlsm`, `Netzwerk_Vorlage.html`, `netzwerkkarte.html`, Anleitung). Ältere Stände in `Alt/`, `Test/`, `Singleiter_aus_mymaps/` (die Karte ersetzte früher eine Google-My-Maps-Karte). | SharePoint-Suche über Microsoft 365 |
| Welche Fassung ist live? | **Nicht prüfbar**: Die Seitenbeschreibung (`siteassets.parastorage.com`) und der Inhalt des HTML-Elements (`…filesusr.com`) sind aus der Arbeitsumgebung gesperrt. Ausgewertet wurde deshalb die Datei `netzwerkkarte.html` im OneDrive, **Stand 23.08.2026**. → Offener Punkt 1 | |
| Welche Bausteine lädt die Karte? | Leaflet 1.9.4 (cdnjs/Cloudflare), Kartenkacheln **CARTO** („light_all“, Daten OpenStreetMap), Schriften **Google Fonts** (Nunito, Source Sans 3), Vorschaubilder der Webseiten über den **Google-Favicon-Dienst**, Umkreissuche über **Nominatim** (OpenStreetMap), erst beim Klick auf „Suchen“ | Quelltext |
| Was kann die Karte? | Reiter Alle · Singleiter · Singkreise · Einrichtungen · 🌐 (Online); Freitextsuche (Name, Ort, PLZ); **Umkreissuche nach PLZ** (25–200 km); Länderknöpfe; Auswahl Region (Bundesland/Kanton) und Einrichtungstyp; Liste links; Klick auf Punkt → Kasten mit Name, Art, PLZ Ort, Bundesland, Beruf, Telefon, E-Mail, Webseite | Quelltext |
| Wie funktioniert „PDF / Drucken“? | Öffnet ein neues Fenster mit einer Tabelle der **aktuellen Auswahl**, gruppiert nach Art, sortiert nach Nachname: Name · Ort · Kontakt (Telefon, E-Mail, Webseite). Fußzeile „Abgerufen am …“. Hinweis „Strg+P → Als PDF speichern“. Kein echtes PDF, sondern die Druckfunktion des Browsers. | Quelltext |
| Kosten | 0 € (freie Bibliotheken, CARTO-Kacheln im kostenlosen Rahmen, Wix-Element im Tarif enthalten) | |

**Die Daten in der Kartendatei (Stand 23.08.2026, nur gezählt – keine Namen in dieser Doku):**

| Art | Deutschland | Österreich | Schweiz | ohne Ort | Summe |
|---|---|---|---|---|---|
| Singleiter:innen | 311 | 42 | 8 | – | **361** |
| Singkreise | 121 | 41 | 1 | – | **163** |
| Online | – | – | – | 1 | **1** |
| **Einrichtungen** | 0 | 0 | 0 | – | **0** (Live-Karte am 26.09.2026: **82**, siehe unten) |
| **Summe** | 432 | 83 | 9 | 1 | **525** |

Angaben je Eintrag: E-Mail 497 ×, Telefon 280 ×, Webseite 229 ×, **Beruf 50 ×** (nicht von der Einwilligung gedeckt, Abschnitt 7).

**Befunde:**

1. ~~**Keine einzige zertifizierte Einrichtung auf der Karte**~~ – **überholt** (Korrektur Tom, 26.09.2026): Auf der **Live-Karte** stehen
   **82 Einrichtungen** (von Tom über den Filter „Einrichtungen“ geprüft). Die Datei im OneDrive (23.08.2026) ist also nicht die
   Live-Fassung – Offener Punkt 1 damit beantwortet. Die Vorschau zählt die 82 mit (Etikett „82 Einträge“, Zähler 607), zeichnet sie
   aber nicht ein, weil ihre Orte nicht vorlagen. Früherer Befund: – obwohl die Seite, „Für Einrichtungen“ (`SEITE-einrichtungen.md`,
   Abschnitt 2: „Liste der zertifizierten Einrichtungen → Singende Landkarte“) und die Ehrenvorsitzenden-Seite („100 zertifizierte
   Einrichtungen“) das versprechen. Reiter und Filter „Einrichtung“ sind leer. → Offener Punkt 2.
2. **„Stand:“ oben in der Karte zeigt immer das heutige Datum** (wird beim Öffnen berechnet), nicht das Datum der Daten. Das
   täuscht Aktualität vor.
3. **Markerfarbe nach Land** (Grün/Rot/Gelb) – Besucher:innen suchen aber nach Art. Rot ist keine Vereinsfarbe.
4. **Google-Dienste ohne Einwilligung** (Favicons, Schriften) – Abschnitt 7.
5. **Beruf wird angezeigt**, obwohl der Antrag nur Name, PLZ, Ort, E-Mail, Telefon und Homepage nennt – Abschnitt 7.
6. Die Anleitung nennt als Ablageort „OneDrive → SKH → Webseite → Netzwerkkarte“; tatsächlich liegen die Dateien in Toms
   persönlichem OneDrive (Pfad oben). Für eine Nachfolge müssen sie in eine Vereinsablage. → Offener Punkt 6.
8. **Neu (26.09.2026, Hinweis Tom): Die Straßenkarte lädt nicht mehr.** Statt der Karte erscheinen Kacheln mit „API KEY REQUIRED –
   carto.com/basemaps/apikey“; die Punkte werden weiter angezeigt. Ursache: Der Kartenanbieter **CARTO** liefert seine Kacheln
   (`basemaps.cartocdn.com/light_all`) nicht mehr ohne Schlüssel aus. **Sofortmaßnahme** (kostenlos, ohne Anmeldung): in
   `Netzwerk_Vorlage.html` die Kachel-Zeile auf **OpenStreetMap** umstellen, Makro ausführen, neue Datei hochladen:
   ```
   L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{
     attribution:"&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a>-Mitwirkende", maxZoom:19
   }).addTo(map);
   ```
   OpenStreetMap-Kacheln sind farbiger als CARTO „light“. Damit die Karte ruhig bleibt, im `<style>` der Vorlage ergänzen:
   `.leaflet-tile-pane{filter:grayscale(.55) brightness(1.04) contrast(.95)}`. Nutzungsbedingungen der OSM-Kacheln: Namensnennung
   (steht unten rechts) und nur geringe Last – für eine Vereinsseite erfüllt. **Datenschutz:** In der Datenschutzerklärung
   „CARTO“ durch „OpenStreetMap Foundation (Kartenkacheln)“ ersetzen (Rechtstexte-Auftrag, `SEITE-rechtliches.md`, Abschnitt 4).
   Die neu gestaltete Vorlage (Weg A, Entscheidung Tom 26.09.2026) verwendet von Anfang an OpenStreetMap.
7. Die Anleitung empfiehlt, die alte `netzwerkkarte.html` in den Wix-Medien „zur Sicherheit als Backup zu behalten“. Jede hochgeladene
   Datei hat aber eine **öffentliche Adresse** – gelöschte oder geänderte Einträge bleiben dort abrufbar. → Abschnitt 7, Punkt 6.

### Die zugehörigen Listen und PDFs (alle gelesen)

| Datei | Ort | Inhalt | Befund |
|---|---|---|---|
| Singleiter Deutschland.pdf, Singleiter Deutschland DACH.pdf, Singleiter DA.pdf, Singleiter Deutschland neu.docx, Deutschland für Google.xlsx | SharePoint „Singende Krankenhäuser Homepage“ › `500 Kommunikation & Marketing/520 Website & Social Media/Webseite/Dateien/Listen PDF/Singleiter` (Stand Feb./März 2025) | frühere Singleiter-Listen zum Herunterladen | **auf keiner der 38 Live-Seiten mehr verlinkt** (geprüft 26.09.2026) – ersetzt durch „PDF / Drucken“ |
| **Singleiter Österreich.pdf** (4 Seiten) + `.xlsx` | ebenda (auch in Toms OneDrive `Webseite/Dateien/Listen PDF/Singleiter`) | Kopf „www.singende-krankenhaeuser.at – Singleiter:innen Österreich“; Excel-Spalten PLZ, Ort, Name, Vorname, **Adresse**, Tätigkeit, Telefon, E-Mail, Website | enthält **Straße und Hausnummer** |
| **Singleiter Schweiz_Rumänien_Niederlande.pdf** + `.xlsx`, Singleiter Schweiz.pdf | ebenda | Schweiz 9, Rumänien 2, Niederlande 1 Singleiter:in; teils **mit Straße und Hausnummer**, Beruf, Telefon, E-Mail | Rumänien und Niederlande fehlen auf der Karte (sie kennt nur DE/AT/CH) → Offener Punkt 7 |
| SKL Österreich.docx/.pdf, SKL_Österreich_komplett.xlsx (März 2025) | Toms OneDrive | Singleiterliste Österreich nach Bundesland, mit Adresse | wie oben |
| Singleiter gesamt.pdf (Feb. 2025) | Toms OneDrive `SIKRA aktuell/100 Organisation/Personen/Singleiter/PDF` | Sammelliste mit Länderauswahl | wie oben |
| **Antrag Zertifikat Singleiter:in** (Krankenhaus `7530fd_4addfbfe…pdf`, Pflege `7530fd_550a2965…pdf`, je 4 Seiten) | Wix, verlinkt auf `/sing-mit` | **Einwilligung:** „Ich bin damit einverstanden, dass meine Kontaktdaten auf der Homepage von Singende Krankenhäuser e.V. unter der Rubrik ‚Singende Landkarte‘ auf unserer Homepage veröffentlicht werden ☐ Ja ☐ Nein. Die Kontaktdaten werden wie folgt veröffentlicht: **PLZ Ort, Vor- und Nachname, E-Mail, Telefon, ggf. eigene Homepage.** ☐ Kein Telefon bzw. diese Tel.Nr. verwenden … ☐ Keine E-Mail-Adresse bzw. diese verwenden …“ | Grundlage für Abschnitt 7 |
| Entwurf „Landkarte.dc.html“ (20.08.2026) | Toms OneDrive, `09_Website_Redaktion_und_Aktualisierung/Singende Krankenhäuser Website Mockup` | früherer Seitenentwurf: „Finde eine Singgruppe in Deiner Nähe“, Kästen „Eintrag anfragen“ und „Noch keine Gruppe in Deiner Nähe? Werde selbst Singleiter:in“ | beide Ideen übernommen (Bereiche 4 und 5) |

---

## 2. Gliederung und Hauptorte – Entscheidung und Begründung

### Entscheidung: **Die Karte bleibt, wie sie technisch ist – nur neu gestaltet und datenschutzfest** (Vorschlag 26.09.2026)

Geprüft wurde, ob die Karte besser mit Wix-Bordmitteln (Datensammlung + Wix-Karte) gebaut wird. **Nein**, aus drei Gründen:
1. **Funktion:** Die Wix-Karte (Google Maps) kann keine Umkreissuche nach PLZ, keine Reiter und keine Druckliste. Genau das
   brauchen die Besucher:innen.
2. **Kosten und Aufwand:** Die eigene Karte kostet 0 €, der Ablauf (Excel → Makro → Hochladen) ist dokumentiert und eingespielt.
   Ein Umbau auf Wix-Datensammlung bräuchte Programmierung (Velo) und eine neue Datenpflege.
3. **Datenschutz:** Google Maps überträgt mehr Daten an Google als die CARTO-Kacheln; bei der eigenen Datei bestimmen wir selbst,
   was geladen wird.

Was sich ändert: **Gestaltung der Vorlage** (Farben, Schrift, Markerfarbe nach Art), **Datenschutz** (Abschnitt 7) und die
**Seite um die Karte herum** (Abschnitt 3). Die Änderungen an der Vorlage macht Tom oder Andy einmalig in `Netzwerk_Vorlage.html`;
die Datenpflege macht **Tom** (Korrektur 26.09.2026: Tom betreut die Landkarte, nicht Vera oder Sonja).

### Hauptorte – was abgeglichen wurde

| Thema | Steht auch auf … | Hauptort | Auf der anderen Seite (Vorschau) | Grund |
|---|---|---|---|---|
| **Verzeichnis** Singleiter:innen, Singkreise, zertifizierte Einrichtungen (DE/AT/CH) | Sing mit (`#netzwerk`), Für Einrichtungen (`#singleitung`), Termine (`#mehr`), Kontakt (Hinweis im Wegweiser), Startseite (Frage 3, Titelknopf) | **Landkarte** (`#karte`) | je ein Satz + Link auf `#karte` | eine gepflegte Liste statt mehrerer, die veralten |
| **Liste der zertifizierten Einrichtungen** | Für Einrichtungen | **Landkarte** (`#angebote`, Ebene „Einrichtungen“) | Für Einrichtungen: „Zertifizierte Einrichtungen auf der Singenden Landkarte →“ zeigt auf `#angebote` | so schon in `SEITE-einrichtungen.md` festgelegt – **fehlt aber in den Daten** (Offener Punkt 2) |
| **Singleiter-Listen als PDF** | früher Wix-Downloads, heute nirgends verlinkt | **Landkarte** („PDF / Drucken“) | Downloads (`#nicht-hier`): neue Zeile „Listen der Singleiter:innen und Singkreise → Landkarte“ | keine veralteten Dateien mit Anschriften mehr |
| **Zustimmung zur Landkarte** (Einwilligung) | Antrag Singleiter-Zertifikat (PDF), Sing mit („Gut zu wissen“), Downloads (Antragsbeschreibung) | **Antrag** = rechtlich; **Landkarte** (`#eintrag`, `#datenschutz`) = Erklärung, was gezeigt wird | Sing mit: Link „Singenden Landkarte“ zeigt auf `#eintrag` | Wer ankreuzt, soll nachlesen können, was mit den Daten passiert |
| **Zertifikat beantragen** | Sing mit | **Sing mit** (`#zertifikat`) | Landkarte: ein Satz + Link | |
| **Wie ein Singkreis abläuft**, Mitsingen ohne Vorkenntnisse | Sing mit (`#mitsingen`), Startseite (Frage 3) | **Sing mit** | Landkarte: Karte „Singkreise“ mit Link | Landkarte = *wo*, Sing mit = *wie* |
| **Singleitung für Einrichtungen, Vergütung 90 €** | Für Einrichtungen, Sing mit | **Für Einrichtungen** (`#singleitung`, `#verguetung`) | Landkarte: Link in der Karte „Singleiter:innen“ und in „Nichts in der Nähe?“ | |
| **Schnupperkurse** | Termine, Weiterbildung, Startseite | **Termine** (`#schnuppern`) | Landkarte: Link in „Nichts in der Nähe?“ | |
| **Online-Runden für Mitglieder** | Mitglied sein, Termine | **Mitglied sein** | nicht auf der Landkarte – auf der Karte stehen nur **öffentliche** Online-Singkreise (Filter „Online“) | nicht vermischen: Mitglieder-Angebot ≠ offene Gruppe |
| **Ansprechperson für Einträge** (Datenpflege) | Anleitung (veraltet: „Vera = Datenpflege“), Kontakt | **Landkarte** (ein Kontaktkasten, `#eintrag`: **Tom Jansen**); im Wegweiser der Kontaktseite eine Zeile „Singende Landkarte“ | Landkarte verlinkt „Kontakt → `#wegweiser`“ | Regel aus `SEITE-kontakt.md`: Aufgabenseite zeigt die **eine** zuständige Person |
| **Mitglied werden** (Knopf) | alle Seiten | **Mitglied sein** | Tiefgrün-Band wie überall → `/mitglied-sein` | heute führt der Knopf auf der Landkarte direkt auf die PDF-Beitrittserklärung |
| **Zahl „3 Länder“** | Sing mit (`#netzwerk`, große Zahl) | Landkarte | bleibt | stimmt (Rumänien/Niederlande nur in alten PDF-Listen) |
| **Zahl der Einträge** („über 500“) | – | Landkarte (Titel, Etiketten 361 / 163) | – | bei jedem Karten-Update prüfen (Abschnitt 6, Pflege) |

**Nicht geändert, aber aufgefallen:** Sing mit (`#netzwerk`) und die Live-Seite sprechen von „zertifizierten Einrichtungen“ auf der
Karte; das stimmt erst, wenn Offener Punkt 2 erledigt ist. Die Ehrenvorsitzenden-Seite nennt „100 zertifizierte Einrichtungen“
(`SEITE-ueber-uns.md`, Punkt 11) – die Zahl lässt sich erst mit der Einrichtungsliste prüfen.

### Korrekturen auf den Nachbar-Vorschauen (26.09.2026)

| Seite | Stelle | Vorher | Nachher |
|---|---|---|---|
| alle zehn | Menüpunkt „Singende Landkarte“ | `#` | → `vorschau-foto-landkarte.html` |
| Startseite | Titelkasten „Singgruppe in deiner Nähe →“ | `#` | → `…landkarte.html#karte` |
| Startseite | Frage 3, Knopf „Ja!“ | `#` | → `…landkarte.html#karte` |
| Sing mit | „Gut zu wissen: Im Antrag kannst du zustimmen, dass du auf der Singenden Landkarte erscheinst …“ | `#` | → `…landkarte.html#eintrag` |
| Sing mit | Netzwerk, „Zur Singenden Landkarte →“ | `#` | → `…landkarte.html#karte` |
| Sing mit | Mitsingen, „Singkreis in deiner Nähe →“ | `#` | → `…landkarte.html#karte` |
| Für Einrichtungen | „Zertifizierte Einrichtungen auf der Singenden Landkarte →“ | `#` | → `…landkarte.html#angebote` |
| Für Einrichtungen | Singleitung, „Zur Singenden Landkarte →“ | `#` | → `…landkarte.html#karte` |
| Termine | „Noch mehr singen“, „Zur Singenden Landkarte →“ | `#` | → `…landkarte.html#karte` |
| Kontakt | Hinweis „Du suchst eine Singgruppe in deiner Nähe?“ | `#`, Text „mit Ort, **Einrichtung** und Ansprechperson“ | → `…landkarte.html#karte`, Text „mit Ort und Ansprechperson“ (Einrichtungen fehlen noch) |
| Downloads | „Was du an anderer Stelle findest“ | – | neue Zeile „Listen der Singleiter:innen und Singkreise“ → `…landkarte.html#karte` |

---

## 3. Aufbau von oben nach unten (6 Bereiche)

| Nr. | Fläche | Bereich (Sprungmarke) | Inhalt | Warum an dieser Stelle |
|---|---|---|---|---|
| – | Weizen | Hinweisleiste | Jahrestagung 2027 | auf allen Seiten gleich |
| 0 | Weiß | Kopfleiste | Logo, 6 Menüpunkte (**Singende Landkarte** unterstrichen), Button „Mitglied werden“ | |
| – | Leinen | Brotkrumen | „Start › Singende Landkarte“ | |
| 1 | Titelfoto + Tiefgrün-Kasten links | **Singen in deiner Nähe.** | ein Satz (über 500 Einträge, drei Länder, PLZ-Suche); Buttons „Zur Karte“, „Du willst auf die Karte? →“ | Die Frage der Besucher:innen steht im Titel |
| – | Leinen | Sprungleiste | Karte · Was du findest · Nichts in der Nähe? · Auf die Karte · Datenschutz | |
| 2 | Leinen | **Finde Singleiter:innen und Singkreise** (`#karte`) | Einleitung; **Karten-Rahmen** (Filter links, Karte rechts, Handy: Karte oben); Legende; drei Tipps (PLZ-Suche, Kontakt aufnehmen, Liste ausdrucken) | Die Karte ist der Zweck der Seite – sofort sichtbar, ohne Scrollen hinter Text |
| 3 | Salbei | **Drei Arten, mitzusingen** (`#angebote`) | 3 Foto-Karten mit Etikett (Anzahl): Singleiter:innen → Für Einrichtungen `#singleitung`; Singkreise → Sing mit `#mitsingen`; Zertifizierte Einrichtungen („in Vorbereitung“) → Für Einrichtungen `#voraussetzungen`; Hinweis „Auch online“ | erklärt, was hinter den Reitern steckt |
| 4 | Weizen | **Dann fang doch an.** (`#keine-gruppe`) | Foto hochkant; drei Wege: Schnupperkurs → Termine `#schnuppern`; Singleiter:in werden → Weiterbildung; In deiner Einrichtung fragen → Für Einrichtungen `#singleitung` | fängt auf, wer nichts in der Nähe findet – statt leerer Suche eine Handlung |
| 5 | Leinen | **Du willst auf die Karte – oder etwas ändern?** (`#eintrag`) | drei Wege (Singleiter:in → Sing mit `#zertifikat`; Singkreis → E-Mail an Tom; Einrichtung → Für Einrichtungen `#antrag`); Kontaktkasten Tom Jansen mit Foto und E-Mail (keine Telefonnummer), Link Kontakt `#wegweiser` | für Mitglieder; Pflege-Anlaufstelle |
| 6 | Salbei | **Was wir von dir zeigen – und was nicht** (`#datenschutz`) | zwei Häkchen-Listen („Das steht auf der Karte“ / „Das zeigen wir nie“); Hinweiskasten „Jederzeit widerrufen“ + Link Datenschutzerklärung | Pflicht zur Information (Art. 13 DSGVO) und Vertrauen für neue Einträge |
| 7 | Tiefgrün | **Werde Teil des Netzwerks.** (`#mitglied`) | wie Kontakt | Abschluss wie auf allen Seiten |
| – | Tiefgrün | Fußzeile | wie Startseite | |

Bänder: Leinen → Salbei → Weizen → Leinen → Salbei → Tiefgrün.

**Was von der heutigen Seite wegfällt – und warum:**

| Heute | Neu | Grund |
|---|---|---|
| Hinweis „Markerfarbe zeigt das Land“ | Legende „Farbe = Art“ unter der Karte; Land über die Länderknöpfe | man sucht nach Art, nicht nach Land |
| vier PNG-Symbole | Fotos in Bereich 3 | Foto-Stil: das Foto *ist* die Karte |
| Knopf „Mitglied werden“ → Beitrittserklärung (PDF) | Tiefgrün-Band → `/mitglied-sein` | einheitlich auf allen Seiten |
| Knopf „unsere Weiterbildung“ | Link in Bereich 4 | dort mit Begründung („selbst Singleiter:in werden“) |

---

## 4. Woher die Inhalte stammen

| Bereich | Quelle |
|---|---|
| Drei Arten (Texte gekürzt), drei Länder, Druckfunktion | `/singende-landkarte` |
| Funktionen der Karte, Zahlen 361 / 163 / 1 / 0 | `netzwerkkarte.html` (OneDrive, Stand 23.08.2026) |
| Was gezeigt wird (Name, PLZ, Ort, E-Mail, Telefon, Homepage) | Einwilligungstext der beiden Zertifikatsanträge |
| „Punkt in der Ortsmitte, keine Privatadresse“ | Bedienungsanleitung Netzwerkkarte, Abschnitt 3.3 |
| Tom Jansen betreut die Karte | Hinweis Tom, 26.09.2026 (die Bedienungsanleitung, Abschnitt 8, nennt noch „Büro (Vera)“ – dort anpassen) |
| „Eintrag anfragen“, „Noch keine Gruppe? Werde selbst Singleiter:in“ | Entwurf `Landkarte.dc.html` |

**Selbst formuliert** (bitte bei der Abnahme gegenlesen): Titel „Singen in deiner Nähe.“ und Titeltext, alle Überschriften, die
drei Tipps, „Dann fang doch an.“ mit den drei Wegen, der Ablauf „Mit deinem Singkreis“ (Meldung per E-Mail – Abschnitt 8, Punkt 3),
beide Datenschutz-Listen, „Jederzeit widerrufen … eine E-Mail an die Geschäftsstelle genügt“, „Sie kommen als eigene Ebene auf
die Karte“ (Einrichtungen), Etikett „in Vorbereitung“.

**Keine echten Personendaten in der Vorschau:** Die Karte in der Vorschau zeigt nur die **Anzahl der Einträge je Rasterfeld**
(ca. 25 × 25 km, auf 0,25 Grad gerundet), ohne Namen und Kontakte; die Beispiel-Einträge („Vorname Nachname“, „12345 Musterstadt“)
sind erfunden. Grund: Die Vorschau wird als Artifact geteilt, die echte Karte gehört nur auf die Vereinsseite.

---

## 5. Fotos

| Datei | Bereich | Motiv | Herkunft |
|---|---|---|---|
| `lk-titel.jpg` | Titelfoto | Viele Menschen stehen im Saal beieinander und singen, vorne eine lachende Frau mit grauem Haar | Veranstaltung „Modul I – Klangvolle Gemeinschaft“ (`/veranstaltungen`), `7530fd_28a578f4…jpg`, Original **4604 × 3095 px** (über der Empfehlung 2400 px) |
| `lk-singleitung.jpg` | Drei Arten: Singleiter:innen | Drei Frauen singen und zeigen lachend in die Runde | Startseite/Jahrestagung, `7530fd_df954bef…jpg`, 2048 px |
| `lk-singkreis.jpg` | Drei Arten: Singkreise | Frau mit Gitarre, dahinter singt eine Gruppe auf einer Bank | Veranstaltung „Modul B – Bitte hör nicht auf zu träumen“, `7530fd_f2981968…jpg`, 2048 px |
| `lk-einrichtung.jpg` | Drei Arten: Einrichtungen | Von hinten: Stuhlkreis, vorne Frau mit bunter Strickjacke und eine Ordensschwester | Startseite, `7530fd_9635e3e2…jpg`, 2835 px. **Vorteil:** keine Gesichter erkennbar |
| `lk-draussen.jpg` | Nichts in der Nähe? | Gruppe steht im Gegenlicht auf einer Wiese und singt | Veranstaltung „Come-together Singleiter-Austausch“ (Startseite, Termine), `7530fd_e1f23a03…jpg`, **nur 680 × 1021 px** (reicht für das Hochformat-Feld, für die echte Seite höher aufgelöstes Original erfragen) |

**Per Bildvergleich geprüft (26.09.2026):** Alle 116 Fotos der 38 Live-Seiten wurden mit den 80 Fotos in `fotos/` verglichen
(Wahrnehmungs-Prüfsumme „pHash“). Die fünf `lk-`-Fotos sind auf keiner anderen Foto-Vorschau verwendet; der Abstand zum
ähnlichsten anderen Foto liegt bei 40–49 (gleiches Motiv läge unter 10).

**Begründete Ausnahme (Foto auf mehreren Seiten):** `uu-vera-kimmig.jpg` – wie auf Über uns und Kontakt (Regel „Porträts überall
gleich“, `SEITE-ueber-uns.md`, Abschnitt 5).

**Bewusst nicht verwendet:** `7530fd_d8a96f65…jpg` (Frau mit Gitarre, sehr gutes Foto) – es ist ein Porträt von Sybille Mikula
(Dozentenseite der Jahrestagung); von ihr gibt es schon `dz-mikula.jpg`, ein zweites Porträt widerspricht der Porträt-Regel.

---

## 6. Neue Bausteine und Umsetzung in Wix

Farben, Schriften, Rundungen wie in `DESIGN-foto.md`; Sprungleiste wie in `SEITE-sing-mit.md`, Abschnitt 6; Foto-Karten wie auf
der Startseite; Ansprechperson mit Foto wie Weiterbildung (Beratung); Häkchen-Liste wie Weiterbildung; Hinweiskasten wie
Weiterbildung. **Neu auf dieser Seite:**

| Baustein | Aussehen | Begründung |
|---|---|---|
| **Karten-Rahmen** | weiße Fläche, 20 px Rundung; links Filterspalte (360 px), rechts Karte; Handy: Karte oben (fast quadratisch), Filter und Liste darunter | Die heutige Karte hat auf dem Handy die Filter oben und die Karte erst nach 55 % Bildschirmhöhe – man sieht zuerst keine Karte |
| **Filter-Pillen** | Umriss-Pillen (1 px Anthrazit, Leinen-Fläche), gewählte Pille Tiefgrün mit weißer Schrift; `aria-pressed` | groß genug zum Tippen; **keine gelbe Fläche**, weil Gelb für den einen Hauptknopf reserviert ist |
| **Punkte nach Art** | Tiefgrün = Singleiter:innen, Logo-Grün = Singkreise, Logo-Gelb = Einrichtungen; weißer Rand; mehrere Einträge am Ort = größerer Punkt | Farben aus der Palette; Logo-Grün ist laut `DESIGN-foto.md` „für Symbole“ erlaubt |
| **Eintrags-Kasten** (Klick auf Punkt) | weiß, 14 px Rundung, Name fett, gelbes Etikett (Art), PLZ Ort, dann Textlinks „Anrufen“, „E-Mail schreiben“, „Webseite ↗“ | Textlinks statt langer E-Mail-Adresse: lesbarer auf dem Handy |
| **Datenschutz-Doppelliste** | Häkchen Tiefgrün („steht drauf“), Kreuz Anthrazit („zeigen wir nie“) | zeigt auf einen Blick, was mit den Daten passiert |

Kontraste: nur geprüfte Kombinationen (Weiß auf Tiefgrün 10 : 1, Anthrazit auf Leinen/Weiß). Die Punkte tragen keine Schrift.

### Umsetzung in Wix – Schritt für Schritt

### Umbau der Kartenvorlage – erledigt am 26.09.2026 (Entscheidung Tom: Weg A, Pflege mit Excel bleibt)

**Entscheidung (Tom, 26.09.2026):** Die Pflege bleibt wie bisher – Excel `Netzwerkkarte_stammdaten.xlsm` → Makro „Karte
aktualisieren“ → `netzwerkkarte.html` → in Wix hochladen. Nur die **Vorlage** `Netzwerk_Vorlage.html` wird neu gestaltet.
**Nicht gewählt:** Daten direkt in einer Wix-Datensammlung (Weg B) – wäre ohne Makro und Hochladen gegangen, hätte aber Wix-Code
gebraucht und die Prüf-Makros („Webseiten prüfen“, „Kontakt prüfen“) ersetzt.

**Neue Vorlage:** `skh-design/landkarte/Netzwerk_Vorlage.html` (Grundlage: Toms Vorlage vom 12.06.2026, identisch mit der Datei
im Ordner `04_Gemeinsame Karte`). Testbilder mit erfundenen Daten: `landkarte/test-computer.png`, `landkarte/test-handy.png`.

| Was | vorher | jetzt | Grund |
|---|---|---|---|
| Kartenhintergrund | CARTO „light_all“ – zeigt seit 2026 „API KEY REQUIRED“ | **OpenStreetMap**, leicht entsättigt | Karte lädt wieder; kostenlos, ohne Anmeldung (Befund 8) |
| Punktfarbe | nach **Land** (Grün/Rot/Gold) | nach **Art**: Tiefgrün = Singleiter:innen, Logo-Grün = Singkreise, Logo-Gelb = Einrichtungen; Symbole (Sänger, Note, Kreuz) bleiben | man sucht nach Art, nicht nach Land; Rot ist keine Vereinsfarbe (Befund 3) |
| Legende | keine | unten links in der Karte | Farben erklären sich |
| Schrift | Nunito + Source Sans 3 von **Google Fonts** | **PT Sans**, in die Datei eingebettet (Lizenz SIL OFL) | Vereinsschrift; keine Verbindung zu Google (Abschnitt 7, Punkt 2) |
| Logos der Webseiten | beim Besuch über Google (`s2/favicons`) | **aus** – Schalter `logosAnzeigen` oben im Programmteil | IP-Adresse ging ohne Einwilligung an Google (Abschnitt 7, Punkt 1) |
| Beruf von Singleiter:innen | angezeigt | **aus** – Schalter `berufAnzeigen` | von der Einwilligung im Antrag nicht gedeckt (Befund 5) |
| „Stand:“ | immer das heutige Datum | Datum der Kartendatei; ohne Dateidatum keine Anzeige | täuschte Aktualität vor (Befund 2) |
| Filter | kleine Reiter, „Singleiter“, „🌐“ | Filter-Pillen wie die Vorschau: „Was suchst du?“ (Alle, Singleiter:innen, Singkreise, Einrichtungen, Online), „Land“ | größer, gegendert, verständlich |
| Umkreissuche | hinter einem Knopf versteckt | immer sichtbar: „In der Nähe von“ + Postleitzahl + Umkreis, Knopf „Suchen“ als gelbe Pille | häufigste Suche, ohne Umweg |
| „PDF / Drucken“ | grüner Balken | gelbe Pille unten in der Spalte, mit Erklärsatz | Hauptknopf der Karte |
| Eintrags-Kasten | Schatten, Logo, blaue Links | weißer Kasten mit feinem Rand, Etikett (Art), Name, PLZ Ort · Region · Land, Telefon, E-Mail, Webseite als fette Textlinks | Stil „Foto“; Telefonnummer und E-Mail-Adresse bleiben sichtbar (am Computer funktionieren „tel:“-Links oft nicht) |
| Handy | Filter oben, Karte erst nach 55 % Höhe | **Karte zuerst** (62 % der Höhe), darunter Filter und Liste | man sieht sofort die Karte |
| Druckliste | Arial, Blau | PT Sans, Anthrazit/Tiefgrün, Titel „Singende Landkarte“ | einheitlich |

**Unverändert (wichtig für das Makro):** die Zeile `var EMBEDDED_DATA = [];` und der Kommentar darüber, alle Spaltennamen
(`typ`, `name`, `vorname`, `nachname`, `plz`, `ort`, `bundesland`, `land`, `lat`, `lng`, `email`, `telefon`, `webseite`, `beruf`,
`einrichtung_typ`, `zertifizierung_datum`), Suche, Umkreissuche (Nominatim), Filter Region und Art der Einrichtung, Liste,
Druckfunktion mit Logo. Leaflet 1.9.4 kommt weiter von cdnjs.

**So setzt du die neue Vorlage ein (ca. 20 Minuten):**
1. Im Ordner `04_Gemeinsame Karte` die bisherige `Netzwerk_Vorlage.html` nach `Alt/` verschieben und umbenennen in
   `Netzwerk_Vorlage_bis_2026-09-26.html` (Rückweg, falls etwas nicht klappt).
2. Die neue `Netzwerk_Vorlage.html` (aus dem Repo bzw. von Claude geschickt) in `04_Gemeinsame Karte` legen – **gleicher Name**,
   damit das Makro sie findet. Excel-Datei und Vorlage offline im selben Ordner (Anleitung, Abschnitt 2).
3. Excel öffnen, **Makro „Karte aktualisieren“** ausführen. Die neue `netzwerkkarte.html` im Browser öffnen und prüfen: Karte
   sichtbar, Zahl oben rechts stimmt (26.09.2026: 82 Einrichtungen), Klick auf einen Punkt, „Suchen“ mit einer PLZ, „PDF / Drucken“.
4. **Falls die Karte leer bleibt** („Karte wird geladen …“ bleibt stehen): Das Makro sucht die Zeile `var EMBEDDED_DATA = [];`.
   Prüfen, ob es im VBA-Code eine andere Suchzeile verwendet (VBA-Editor mit Alt + F11, nach `EMBEDDED_DATA` suchen) – dann Tom/Andy.
   Zurück zur alten Vorlage geht jederzeit über Schritt 1.
5. In Wix wie gewohnt hochladen, die Adresse im HTML-Element tauschen, **alte Datei in den Wix-Medien löschen**.
   Größe des HTML-Elements: Computer volle Inhaltsbreite, ca. 700 px hoch; Handy ca. 1100 px hoch.
6. **Datenschutzerklärung:** „CARTO“ durch „OpenStreetMap Foundation (Kartenkacheln)“ ersetzen, Google Fonts und
   Google-Favicon-Dienst für die Karte streichen (Rechtstexte-Auftrag, `SEITE-rechtliches.md`, Abschnitt 4).

Damit sind die Schritte 1–4 unten erledigt (in der Vorlage umgesetzt); Schritt 1 „alte Dateien löschen“ bleibt bei jedem Hochladen.

> Wie bei der Startseite: zuerst an der **duplizierten Website** testen. Die Karte selbst wird **nicht** in Wix gebaut, sondern
> in der Vorlage `Netzwerk_Vorlage.html` geändert (Schritte 1–4, einmalig, Tom oder Andy). Danach wie gewohnt mit dem Makro erzeugen.

1. **Sofort (auch ohne Neugestaltung) – Datenschutz**, siehe Abschnitt 7: in der Vorlage den Favicon-Aufruf
   (`faviconFromUrl`, `popup-header-fav`) entfernen; die Anzeige des Berufs im Kasten und in der Druckliste entfernen
   (`popup-note` bei Singleiter:innen) – oder erst nach neuer Einwilligung; „Stand:“ nicht mehr aus dem heutigen Datum,
   sondern vom Makro als Erzeugungsdatum einsetzen lassen; alte `netzwerkkarte*.html` in den Wix-Medien löschen.
2. **Schrift in der Vorlage:** Google-Fonts-Zeile löschen, `font-family:'PT Sans','Trebuchet MS',system-ui,sans-serif` setzen.
   PT Sans nur verwenden, wenn sie lokal installiert ist oder als Datei selbst eingebunden wird (keine Verbindung zu Google).
3. **Farben in der Vorlage** (`:root`-Variablen): Tiefgrün `#2F4A14` für Knöpfe, Kopf und gewählte Filter; Markerfarben nach **Art**
   (Tiefgrün / Logo-Grün `#96B839` / Logo-Gelb `#EFB110`) statt nach Land; Knopf „PDF / Drucken“ als gelbe Pille; Rundungen 20 px.
4. **Handy-Ansicht der Vorlage:** in `@media (max-width:780px)` die Reihenfolge umdrehen (Karte zuerst, `order:-1`), Karte ca. 70 vh.
5. **Seite `/singende-landkarte` neu aufbauen** nach Abschnitt 3 (Adresse nicht ändern). Das vorhandene HTML-Element behalten
   (die URL darin bleibt gültig), auf volle Inhaltsbreite (1200 px) und ca. 700 px Höhe ziehen; auf dem Handy ca. 1100 px.
6. **Texte „Markerfarbe zeigt das Land“ und „Button unten links“ löschen**, Legende und die drei Tipps einsetzen.
7. **Knopf „Mitglied werden“** → `/mitglied-sein` (statt PDF).
8. **Anker setzen:** `karte`, `angebote`, `keine-gruppe`, `eintrag`, `datenschutz`, `mitglied`.
9. **Nachbarseiten:** Links wie in Abschnitt 2 („Korrekturen“) auf `/singende-landkarte#…` stellen. Auf `/sing-mit` den Link
   „Landkarte“ reparieren (zeigt heute auf `/sing-mit` selbst, `SEITE-sing-mit.md`).
10. **Datenschutzerklärung ergänzen** (Abschnitt 7, Punkt 5) – vor dem Veröffentlichen.
11. **Einrichtungen eintragen**, sobald die Liste da ist (Offener Punkt 2): Zeilen mit `typ` = `Einrichtung`, Spalten
    `einrichtung_typ` und `zertifizierung_datum` füllen; Punkt auf die Adresse der Einrichtung (keine Person, kein Datenschutzproblem).
12. **Prüfen** (Desktop und Handy): Filter, PLZ-Suche, Klick auf Punkt, „PDF / Drucken“; dann Abnahme durch Tom.

### Pflege-Ablauf

| Wann | Was | Wer |
|---|---|---|
| bei jedem neuen Zertifikat mit „Ja“ zur Landkarte | Zeile in der Excel-Datei anlegen (nur freigegebene Kontaktwege), Ortskoordinate = Ortsmitte | Tom |
| bei Änderungs- oder Löschwunsch | Zeile ändern/löschen, Karte neu erzeugen und hochladen, **alte Datei in Wix-Medien löschen** – spätestens innerhalb eines Monats | Tom |
| monatlich (wenn sich etwas geändert hat) | Makro „Karte aktualisieren“, hochladen, URL im HTML-Element tauschen | Tom |
| halbjährlich | Makro-Knöpfe „Webseiten prüfen“ und „Kontakt prüfen“; Zahlen auf der Seite (Titel, Etiketten) anpassen | Tom |
| jährlich | Stichprobe: Liegt für jeden Eintrag eine Einwilligung vor? Einträge ohne Nachweis anschreiben oder entfernen | Tom |

Zuständigkeit: **Tom** betreut die Landkarte vollständig – Daten pflegen, Karte erzeugen und hochladen, Einwilligungsfragen
(Korrektur 26.09.2026 durch Tom; vorher hier als Vorschlag Vera/Tom/Sonja). Die Bedienungsanleitung (Abschnitt 8) entsprechend anpassen.

---

## 7. Datenschutz – welche Personendaten dürfen auf die Karte?

Die Karte veröffentlicht Namen und Kontaktdaten **natürlicher Personen** im Internet. Das ist nur mit **Einwilligung** erlaubt
(Art. 6 Abs. 1 lit. a DSGVO). Die Einwilligung muss freiwillig, für einen bestimmten Zweck und informiert sein und **jederzeit
widerrufbar** – so einfach, wie sie erteilt wurde (Art. 7 Abs. 3 DSGVO). *Hinweis: Das ist eine fachliche Einschätzung, keine
Rechtsberatung. Bei Zweifeln die Datenschutzbeauftragte bzw. den Verein beraten lassen.*

### Was die Einwilligung abdeckt

| Angabe | Im Antrag genannt? | Heute auf der Karte | Entscheidung (Vorschlag) |
|---|---|---|---|
| Vor- und Nachname | ja | ja | **zeigen** |
| PLZ und Ort | ja | ja, Punkt in der Ortsmitte | **zeigen**, Punkt weiter nur Ortsmitte |
| E-Mail | ja (abwählbar/änderbar) | ja (497 ×) | **zeigen**, wie freigegeben |
| Telefon | ja (abwählbar/änderbar) | ja (280 ×) | **zeigen**, wie freigegeben |
| eigene Homepage | ja („ggf.“) | ja (229 ×) | **zeigen** |
| **Beruf / Tätigkeit** | **nein** | ja (50 ×) | **entfernen** – oder den Antrag um „Beruf/Tätigkeit“ ergänzen und nur bei neuer Zustimmung zeigen |
| **Straße, Hausnummer** | nein | nein (nur in alten PDF-/Excel-Listen) | **nie** veröffentlichen; alte Listen nicht mehr verwenden (Punkt 4) |
| Geburtsdatum, Ausbildung, Module | nein | nein | nie |

### Wer auf der Karte steht – und ob eine Einwilligung vorliegt

| Gruppe | Einwilligung | Handlungsbedarf |
|---|---|---|
| Singleiter:innen mit Zertifikat nach aktuellem Antrag | ja, im Antrag angekreuzt | Ankreuzung „Nein“ muss in der Excel-Datei beachtet sein – Stichprobe (Offener Punkt 4) |
| Singleiter:innen aus älteren Listen (Übernahme aus Google My Maps, PDF-Listen 2025) | unklar – ältere Anträge hatten evtl. einen anderen Text | Nachweis prüfen; wo keiner da ist: kurze E-Mail „Möchtest du weiter auf der Karte stehen?“ (Offener Punkt 4) |
| **Singkreise** (163) | **unklar** – sie kommen nicht aus dem Zertifikatsantrag. Viele Einträge tragen den **Namen der Leitung** als Gruppennamen und deren E-Mail | Einwilligung der Leitung einholen (einfaches Formular oder E-Mail-Bestätigung, Muster in Abschnitt 8, Punkt 3); bis dahin nur Einträge zeigen, deren Angaben die Leitung selbst öffentlich macht (eigene Webseite) |
| Online-Angebot (1) | wie Singkreise | wie Singkreise |
| Einrichtungen | keine Personendaten, sofern keine Ansprechperson genannt wird; Zustimmung über die Zertifizierungs-Vereinbarung | in der Vereinbarung einen Satz zur Veröffentlichung auf der Karte ergänzen (Offener Punkt 2) |

### Technik und Drittanbieter

1. **Google-Favicon-Dienst:** Beim Öffnen eines Eintrags lädt die Karte das Webseiten-Symbol über `google.com/s2/favicons`. Dabei
   gehen die IP-Adresse der Besucher:in und die angesehene Webseite an Google – **ohne Einwilligung**. → **Entfernen** (Abschnitt 6,
   Schritt 1). Kein Nutzen, der das rechtfertigt.
2. **Google Fonts** in der Karte: gleiches Problem (bekanntes Urteil LG München I, 20.01.2022, 3 O 17493/20). → Schrift ohne
   Google laden (Schritt 2).
3. **Kartenkacheln (CARTO) und Leaflet (cdnjs/Cloudflare):** werden beim Seitenaufruf geladen; IP-Adresse geht an CARTO und Cloudflare.
   Üblich und vertretbar (berechtigtes Interesse), muss aber in der **Datenschutzerklärung** stehen. Strengere Alternative
   (kostenlos): Karte erst nach Klick auf „Karte laden“ anzeigen („Zwei-Klick-Lösung“); Liste und Suche funktionieren auch ohne
   Karte. → Entscheidung Vorstand (Offener Punkt 5).
4. **Umkreissuche (Nominatim/OpenStreetMap):** nur nach Klick auf „Suchen“, übertragen wird die eingegebene PLZ. In die
   Datenschutzerklärung aufnehmen.
5. **Datenschutzerklärung** (`/datenschutz`) um einen Abschnitt „Singende Landkarte“ ergänzen: Zweck, Rechtsgrundlage
   (Einwilligung), welche Angaben, Widerruf an die Geschäftsstelle, Drittanbieter aus Punkt 3 und 4.
6. **Alte Kartendateien löschen:** Jede in Wix hochgeladene `netzwerkkarte.html` hat eine öffentliche Adresse. Nach dem Hochladen
   einer neuen Fassung die alte **löschen** (nicht „als Backup behalten“, wie die Anleitung heute empfiehlt – Backup bleibt die
   Excel-Datei im OneDrive). Sonst sind gelöschte Einträge weiter im Netz.
7. **Druckliste:** Sie macht es leicht, alle E-Mail-Adressen auf einmal abzuschreiben (Spam). Die Veröffentlichung ist von der
   Einwilligung gedeckt; trotzdem abwägen: E-Mail in der Druckliste weglassen oder nur Telefon/Webseite drucken? → Offener Punkt 5.
8. **Alte Listen mit Anschriften** (Österreich, Schweiz/Rumänien/Niederlande, SKL Österreich, Singleiter gesamt): nicht mehr
   veröffentlichen, intern nur im geschützten Bereich aufbewahren oder löschen, wenn die Daten in der Excel-Datei stehen.
9. **Die Vorschau selbst** enthält keine Personendaten (Abschnitt 4).

---

## 8. Offene Punkte – vor der Veröffentlichung klären

1. ~~**Live-Fassung der Karte bestätigen:**~~ – **erledigt** 26.09.2026: Live ist eine neuere Fassung (mit 82 Einrichtungen). Die aktuelle
   Excel-Datei bzw. `netzwerkkarte.html` bitte in den Ordner `04_Gemeinsame Karte` legen, damit Doku und Ablage stimmen. Ursprüngliche Frage: Ist die Datei im Wix-HTML-Element dieselbe wie `netzwerkkarte.html` vom 23.08.2026 im
   OneDrive? (Wix-Editor → Element anklicken → „Code bearbeiten“ → URL ansehen.) → Tom.
2. ~~**Zertifizierte Einrichtungen fehlen auf der Karte**~~ – **erledigt**: 82 auf der Live-Karte (26.09.2026). Offen bleibt nur, ob die
   Zertifizierungs-Vereinbarung einen Satz zur Veröffentlichung enthält. Ursprünglich: (0 statt „100“). Liste der zertifizierten Einrichtungen mit Ort, Typ und
   Zertifizierungsdatum zusammenstellen; Zustimmung zur Veröffentlichung (Satz in der Vereinbarung) klären; dann eintragen. Bis
   dahin: Etikett „in Vorbereitung“ (so in der Vorschau) oder Reiter ausblenden. → Tom (Liste der zertifizierten Einrichtungen ggf. aus den Zertifizierungsunterlagen).
3. **Singkreise – Einwilligung:** Woher stammen die 163 Einträge, gibt es Einwilligungen? Vorschlag Meldetext für neue Gruppen:
   „Ich leite den Singkreis … und bin einverstanden, dass Name der Gruppe, PLZ/Ort, [E-Mail/Telefon/Webseite] auf der Singenden
   Landkarte veröffentlicht werden. Widerruf jederzeit per E-Mail an tom.jansen@singende-krankenhaeuser.de.“ Ob Singkreis-Leitungen Mitglied sein
   müssen (Live-Text: „Singgruppen unserer Mitglieder“), festlegen. → Tom.
4. **Einwilligungen prüfen:** Stichprobe bei Singleiter:innen (auch „Nein“-Ankreuzungen); Beruf-Angaben entfernen oder
   Antrag erweitern (bei der nächsten Überarbeitung der Anträge, `SEITE-sing-mit.md`). → Tom.
5. **Vorstandsentscheidungen Datenschutz:** Zwei-Klick-Lösung für die Karte ja/nein; E-Mail in der Druckliste ja/nein. → Martin,
   Paula, Tom (Vorstand).
6. **Ablage für die Nachfolge:** Die Kartendateien liegen in Toms persönlichem OneDrive. In die Vereinsablage (SharePoint
   „Singende Krankenhäuser Homepage“, `520 Website & Social Media/Webseite/`) verschieben, Anleitung (Pfad, Punkt „alte Datei
   behalten“) anpassen. **Achtung:** Das Makro braucht die Dateien offline im selben Ordner (Anleitung, Abschnitt 2). → Tom, Andy.
7. **Rumänien und Niederlande:** 3 Singleiter:innen aus den alten Listen sind nicht auf der Karte (sie kennt nur DE/AT/CH). Aufnehmen
   (Land ergänzen) oder bewusst weglassen? → Tom.
8. **Österreich:** Die alte Österreich-Liste trägt „www.singende-krankenhaeuser.at“ – pflegt Österreich eine eigene Karte oder
   Liste? Doppelpflege vermeiden. → Tom mit Sybille Mikula.
9. **Titelfoto** `lk-titel.jpg` und `lk-draussen.jpg`: erkennbare Personen – Einwilligung für die Verwendung als Titel- bzw.
   Seitenfoto prüfen; für `lk-draussen.jpg` höher aufgelöstes Original erfragen. → Tom.
10. **Texte gegenlesen** (Abschnitt 4, „Selbst formuliert“), besonders den Datenschutz-Bereich. → Tom, ggf. Datenschutzberatung.

---

## 9. Checkliste für diese Seite

- [ ] Favicon-Aufruf und Google Fonts aus der Kartenvorlage entfernt?
- [ ] Beruf nur bei ausdrücklicher Einwilligung sichtbar?
- [ ] „Stand“ in der Karte = Datum der Daten, nicht das heutige Datum?
- [ ] Alte `netzwerkkarte.html`-Dateien in den Wix-Medien gelöscht?
- [ ] Datenschutzerklärung um „Singende Landkarte“ ergänzt?
- [ ] Markerfarbe nach Art, Legende stimmt?
- [ ] Filter, PLZ-Suche, Klick auf Punkt und „PDF / Drucken“ auf Desktop **und** Handy getestet?
- [ ] Etikett „Einrichtungen“ zeigt die aktuelle Zahl (26.09.2026: 82)?
- [ ] Zahlen auf der Seite (Titel, Etiketten) stimmen mit der Karte überein?
- [ ] Knopf „Mitglied werden“ → `/mitglied-sein`?
- [ ] Alle Links der Nachbarseiten zeigen auf die richtigen Sprungmarken?
- [ ] Alle Punkte aus Abschnitt 8 geklärt?
- [ ] Checkliste aus `DESIGN-foto.md`, Abschnitt 7, erfüllt?
