# DESIGN.md – Singende Krankenhäuser e.V.

Gestaltungsregeln für www.singende-krankenhaeuser.de (Wix).
Stand: 25.09.2026 (Version 2: Logofarben) · Verantwortlich: Tom (Webseite/Marketing)

Dieses Dokument ist so geschrieben, dass eine Person ohne Vorkenntnisse die Webseite
im neuen Stil pflegen oder erweitern kann. Es enthält die Regeln **und** die Gründe dafür.

---

## 1. Hintergrund und Entscheidung

**Ausgangslage:** Die Webseite soll einen eigenen, wiedererkennbaren Stil bekommen.
Als Vorlage diente die Sammlung *Refero Styles* (https://styles.refero.design), die
Gestaltungssysteme bekannter Webseiten als Textbeschreibung (DESIGN.md) bereitstellt.

**Verglichene Optionen (September 2026):**

| Option | Stil | Ergebnis |
|---|---|---|
| 1 | **Fable** – „Leseecke mit cremefarbenem Papier“ (hell, ruhig) | **gewählt** |
| 2 | Patrick Miller – Plakatstil mit riesiger Schrift (mutig) | verworfen: für textreiche Seiten (Module, Termine) ungeeignet, schwarze Schrift auf Orange schlecht lesbar |
| 3 | MasterClass – dunkle Bühne mit Magenta (dunkel) | verworfen: wirkt im Gesundheitswesen kühl, helle Schrift auf Dunkel für ältere Menschen schwerer lesbar, Schrift teuer |
| 4 | Headspace – weich, rund, illustriert | als Alternative „Rund“ ausgearbeitet: `DESIGN-rund.md` (braucht Illustrationen) |
| 5 | Monocle – Qualitätszeitung auf Cremepapier | als Alternative „Zeitung“ ausgearbeitet: `DESIGN-zeitung.md` (Fable recht ähnlich, sehr seriös) |
| 6 | sweetgreen – große Fotos, Waldgrün, ein gelber Knopf | als Alternative „Foto“ ausgearbeitet: `DESIGN-foto.md` (braucht gute Fotos) |

Quelle Option 1: https://styles.refero.design/style/ab650279-aa18-43e5-a998-34190d7bedc7

**Warum Fable:** warm und vertrauensvoll, aber fachlich seriös. Das Grün aus unserem Logo ist im
Gesundheitsbereich vertraut. Die Seite wird in farbige „Bänder“ gegliedert, was zu
unseren Hauptthemen passt (Weiterbildung, Mitsingen, Mitglied werden, Spenden).

**Was wir gegenüber dem Original bewusst geändert haben** (siehe Abschnitt 7):
Farben aus dem Vereinslogo statt Fable-Grün/-Blau, kostenlose Schriften statt
Lizenzschrift (Textschrift passend zum Logo), größere Grundschrift für ältere
Leserinnen und Leser, Kontraste nach WCAG geprüft.

---

## 2. Farben

**Grundlage ist das Vereinslogo.** Die drei Logofarben wurden direkt aus der Logodatei
gemessen. Aus Fable übernommen sind nur der Aufbau (farbige Bänder, Papiercreme,
Pillen-Buttons). Das Fable-Waldgrün und -Himmelblau wurden durch Logofarben ersetzt,
damit Logo und Webseite zusammenpassen.

| Name | Hex | Herkunft | Wofür | Wofür NICHT |
|---|---|---|---|---|
| **Anthrazit** | `#393434` | Logo (Notenschlüssel, Schriftzug) | Überschriften, Fließtext, dunkle Buttons | – |
| **Logo-Gelb** | `#EFB110` | Logo („Internationales Netzwerk“) | zweites Farbband (z. B. „Sing mit“), Linie unter dem Kopfbereich, Kleinüberschriften auf Tiefgrün | Fließtext auf Weiß, weiße Schrift darauf |
| **Logo-Grün** | `#96B839` | Logo (Kreis, Webadresse) | Schmuck: Kreise, Symbole, Illustrationen | Schriftfarbe, Button, weiße Schrift darauf |
| **Tiefgrün** | `#2F4A14` | Logo-Grün, stark abgedunkelt | Kopfbereich (Hero), Band „Mitglied werden“ | – |
| **Blattgrün-Schrift** | `#4D6B1F` | Logo-Grün, abgedunkelt | kleine Überschriften (Großbuchstaben) auf Creme/Weiß | große Flächen |
| **Papiercreme** | `#F7F4EE` | Fable | Hintergrund für Karten und ruhige Bänder | – |
| **Weiß** | `#FFFFFF` | – | Seitenhintergrund, Kopfleiste mit Logo, Schrift auf Tiefgrün/Anthrazit | – |
| **Nebel** | `#ECEBE6` | – | Schlagwort-Etiketten, Platzhalter | – |
| **Fußzeile** | `#262222` | Anthrazit, abgedunkelt | Fußzeile | – |

**Warum ein abgedunkeltes Grün statt des Logo-Grüns für Flächen?**
Das Logo-Grün ist hell. Weiße Schrift darauf erreicht nur 2,3 : 1 und ist damit
schlecht lesbar. Das Tiefgrün hat denselben Farbton, trägt aber weiße Schrift gut.

**Geprüfte Kontraste (WCAG, Mindestwert 4,5 : 1 für Text):**

| Kombination | Kontrast | Erlaubt? |
|---|---|---|
| Anthrazit auf Weiß | 12,3 : 1 | ja |
| Anthrazit auf Papiercreme | 11,2 : 1 | ja |
| Weiß auf Tiefgrün | 10,0 : 1 | ja |
| Weiß auf Anthrazit (Button) | 12,3 : 1 | ja |
| Anthrazit auf Logo-Gelb | 6,4 : 1 | ja |
| Anthrazit auf Logo-Grün | 5,4 : 1 | ja (nur falls nötig) |
| Logo-Gelb auf Tiefgrün | 5,2 : 1 | ja |
| Blattgrün-Schrift auf Papiercreme | 5,6 : 1 | ja |
| **Weiß auf Logo-Gelb** | **1,9 : 1** | **nein** – nie verwenden |
| **Weiß auf Logo-Grün** | **2,3 : 1** | **nein** – nie verwenden |

**Logo-Platzierung:** Das Logo hat dunkle Schrift und einen transparenten Hintergrund.
Es steht deshalb immer auf Weiß oder Creme (Kopfleiste), nie auf Tiefgrün oder Gelb.

---

## 3. Schrift

| Rolle | Schrift | Schnitt | Kosten |
|---|---|---|---|
| Überschriften | **Newsreader** (Google Fonts) | Regular 400, für kleine Überschriften Medium 500 | kostenlos (Open Font License) |
| Text, Menü, Buttons | **PT Sans** (Google Fonts) | Regular 400, Bold 700 | kostenlos (Open Font License) |

**Warum Newsreader statt Heldane Display:** Heldane (Original bei Fable) kostet
Lizenzgebühren bei der Schriftgießerei Klim. Newsreader hat denselben ruhigen,
buchartigen Charakter und ist frei nutzbar – auch zum Hochladen in Wix.

**Warum PT Sans statt Inter:** Der Schriftzug im Logo ist PT Sans sehr ähnlich
(bitte bei der Person/Agentur, die das Logo erstellt hat, bestätigen lassen).
Mit PT Sans als Textschrift wirken Logo und Webseite wie aus einem Guss.
PT Sans ist gut lesbar und hat alle deutschen Sonderzeichen.

**Schriftgrößen (Desktop / Handy):**

| Rolle | Desktop | Handy | Zeilenabstand |
|---|---|---|---|
| Hauptüberschrift (H1) | 64 px | 40 px | 1,0 |
| Abschnittsüberschrift (H2) | 44 px | 32 px | 1,05 |
| Zwischenüberschrift (H3) | 26 px | 22 px | 1,25 |
| Einleitung | 21 px | 19 px | 1,45 |
| **Fließtext** | **18 px** | **17 px** | 1,6 |
| Kleingedrucktes | 14 px | 14 px | 1,5 |

Regel: Newsreader nur ab 22 px verwenden, niemals für Fließtext, Menü oder Buttons.
Fließtext nie unter 17 px (Zielgruppe: auch ältere Menschen).

---

## 4. Formen und Abstände

- **Buttons:** immer Pille (Rundung 60 px), Innenabstand 16 px oben/unten, 28 px seitlich.
  Dunkler Button = Anthrazit mit weißer Schrift (auf Weiß/Creme).
  Heller Button = Weiß mit Anthrazit-Schrift (auf Tiefgrün/Gelb).
- **Karten:** Papiercreme, Rundung 12 px, Innenabstand 24 px, ohne Rahmen.
- **Große Feature-Karte:** Weiß, Rundung 48 px, Innenabstand 40 px, weicher Schatten.
- **Abstand zwischen Abschnitten:** 80–120 px (Handy: 56–72 px).
- **Maximale Inhaltsbreite:** 1200 px, Fließtext max. ca. 65 Zeichen pro Zeile.
- **Keine** Verläufe, keine Leuchteffekte, keine farbigen Schatten, keine Rahmenlinien in Bändern.

---

## 5. Seitenaufbau (Bänder-System)

Jede Seite ist eine Folge von vollbreiten Farbbändern. Der Farbwechsel ersetzt Trennlinien.
Nie zwei gleichfarbige Bänder direkt untereinander.

Empfohlene Reihenfolge der Startseite:

0. **Weiß** – Kopfleiste mit Logo und Menü, darunter 6 px Linie in Logo-Gelb
1. **Tiefgrün** – Kopfbereich: Kernaussage + Button „Zur Weiterbildung“
2. **Papiercreme** – Was ist Heilsames Singen? (Erklärung)
3. **Weiß** – Die zwei Zertifikate als Karten (Krankenhaus / Pflege & Senioren)
4. **Logo-Gelb** – Sing mit: offene Singangebote (Schrift in Anthrazit!)
5. **Papiercreme** – Termine / Zertifizierte Singleiter finden
6. **Tiefgrün** – Mitglied werden / Spenden
7. **Fußzeile (#262222)** – Fußzeile (Impressum, Datenschutz, Kontakt)

---

## 6. Bilder

- Bevorzugt echte Fotos aus Singgruppen: Menschen, Gesichter, Hände, Gemeinschaft.
  Warmes, natürliches Licht, keine gestellten Stockfotos.
- Fotos mit 12 px Rundung oder vollbreit ohne Rundung.
- Keine Texte ins Foto schreiben (schlecht lesbar, schlecht für Suchmaschinen).
- Optional: flache Illustrationen in den Logofarben (Anthrazit, Gelb, Grün), z. B. Noten und Kreise wie im Logo.

---

## 7. Umsetzung in Wix – Schritt für Schritt

> Vorher: Seite duplizieren (Wix-Dashboard → Website → „Website duplizieren“) und
> den neuen Stil zuerst an der Kopie testen. So bleibt die Live-Seite unberührt.

1. **Schriften hochladen** (falls nicht in der Wix-Auswahl):
   Editor → Text markieren → Schriftart → „Schriftarten hochladen“.
   Dateien: https://fonts.google.com/specimen/Newsreader und
   https://fonts.google.com/specimen/PT+Sans (jeweils „Get font“ → Download).
2. **Website-Farben festlegen:** Editor → *Website-Design* → *Farben* →
   eigenes Farbschema mit den Hex-Werten aus Abschnitt 2.
3. **Text-Themen festlegen:** Editor → *Website-Design* → *Text* →
   Überschrift 1–3 = Newsreader, Absatz = PT Sans, Größen aus Abschnitt 3.
4. **Button-Vorlage anlegen:** einen Button gestalten (Anthrazit, Rundung 60 px),
   dann „Design speichern“ – und nur noch diese Vorlage verwenden.
   Eine zweite Vorlage für den hellen Button (Weiß).
5. **Abschnitte umbauen:** Abschnitt markieren → *Hintergrund ändern* → Farbe aus Abschnitt 2.
   Reihenfolge wie in Abschnitt 5.
6. **Handy-Ansicht prüfen:** Wix-Editor → Handy-Symbol → Schriftgrößen und Abstände
   aus den Tabellen (Spalte „Handy“) kontrollieren.
7. **Abnahme:** Vorschau an Sonja (Geschäftsführung) und den Vorstand (Martin, Paula)
   schicken, erst danach auf der Live-Seite umsetzen.

**Vorschau des Stils:** `skh-design/vorschau.html` (im Browser öffnen) zeigt eine
Beispiel-Startseite mit allen Farben, Schriften und Bausteinen.

---

## 8. Kurz-Checkliste für neue Seiten

- [ ] Steht das Logo auf Weiß oder Creme?
- [ ] Beginnt die Seite mit einem Tiefgrün- oder Creme-Band?
- [ ] Wechseln sich die Bandfarben ab (nie zweimal dieselbe hintereinander)?
- [ ] Überschriften in Newsreader, Text in PT Sans, Fließtext ≥ 17 px?
- [ ] Buttons als Pille, dunkel auf hell / hell auf Farbe?
- [ ] Keine weiße Schrift auf Logo-Gelb oder Logo-Grün?
- [ ] Handy-Ansicht geprüft?
