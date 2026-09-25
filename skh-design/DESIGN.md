# DESIGN.md – Singende Krankenhäuser e.V.

Gestaltungsregeln für www.singende-krankenhaeuser.de (Wix).
Stand: 25.09.2026 · Verantwortlich: Tom (Webseite/Marketing)

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

Quelle Option 1: https://styles.refero.design/style/ab650279-aa18-43e5-a998-34190d7bedc7

**Warum Fable:** warm und vertrauensvoll, aber fachlich seriös. Grün ist im
Gesundheitsbereich vertraut. Die Seite wird in farbige „Bänder“ gegliedert, was zu
unseren Hauptthemen passt (Weiterbildung, Mitsingen, Mitglied werden, Spenden).

**Was wir gegenüber dem Original bewusst geändert haben** (siehe Abschnitt 7):
kostenlose Schriften statt Lizenzschrift, größere Grundschrift für ältere Leserinnen
und Leser, dunkle statt weiße Schrift auf dem blauen Band (Kontrast).

---

## 2. Farben

| Name | Hex | Wofür | Wofür NICHT |
|---|---|---|---|
| **Waldgrün** | `#064C37` | Kopfbereich (Hero), Hauptband, Überschriften auf Creme | Buttonfläche |
| **Himmelblau** | `#43A1D7` | zweites Farbband (z. B. „Sing mit“) | Button, Fließtext, weiße Schrift darauf |
| **Papiercreme** | `#F7F4EE` | Standard-Hintergrund für Karten und Textbereiche | – |
| **Tinte** | `#161015` | Überschriften, Schrift auf Blau | – |
| **Pflaume** | `#292229` | Buttons (dunkel), dunkle Flächen | – |
| **Graphit** | `#3F383D` | Fließtext | – |
| **Kohle** | `#070607` | Fußzeile | – |
| **Weiß** | `#FFFFFF` | Seitenhintergrund, Schrift auf Grün/Pflaume, helle Buttons auf Farbbändern | – |
| **Nebel** | `#EDEDED` | Platzhalter, ruhige Flächen | – |

**Geprüfte Kontraste (WCAG, Mindestwert 4,5 : 1 für Text):**

| Kombination | Kontrast | Erlaubt? |
|---|---|---|
| Weiß auf Waldgrün | 10,0 : 1 | ja |
| Graphit auf Papiercreme | 10,4 : 1 | ja |
| Tinte auf Himmelblau | 6,5 : 1 | ja |
| Weiß auf Pflaume | 15,5 : 1 | ja |
| **Weiß auf Himmelblau** | **2,9 : 1** | **nein** – nie verwenden |

---

## 3. Schrift

| Rolle | Schrift | Schnitt | Kosten |
|---|---|---|---|
| Überschriften | **Newsreader** (Google Fonts) | Regular 400, für kleine Überschriften Medium 500 | kostenlos (Open Font License) |
| Text, Menü, Buttons | **Inter** (Google Fonts) | 400 Text, 500 Buttons, 600 Hervorhebung | kostenlos (Open Font License) |

**Warum Newsreader statt Heldane Display:** Heldane (Original bei Fable) kostet
Lizenzgebühren bei der Schriftgießerei Klim. Newsreader hat denselben ruhigen,
buchartigen Charakter und ist frei nutzbar – auch zum Hochladen in Wix.

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
  Dunkler Button = Pflaume mit weißer Schrift (auf Weiß/Creme).
  Heller Button = Weiß mit Tinte-Schrift (auf Grün/Blau).
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

1. **Waldgrün** – Kopfbereich: Kernaussage + Button „Zur Weiterbildung“
2. **Papiercreme** – Was ist Heilsames Singen? (Erklärung)
3. **Weiß** – Die zwei Zertifikate als Karten (Krankenhaus / Pflege & Senioren)
4. **Himmelblau** – Sing mit: offene Singangebote (Schrift in Tinte!)
5. **Papiercreme** – Termine / Zertifizierte Singleiter finden
6. **Waldgrün** – Mitglied werden / Spenden
7. **Kohle** – Fußzeile (Impressum, Datenschutz, Kontakt)

---

## 6. Bilder

- Bevorzugt echte Fotos aus Singgruppen: Menschen, Gesichter, Hände, Gemeinschaft.
  Warmes, natürliches Licht, keine gestellten Stockfotos.
- Fotos mit 12 px Rundung oder vollbreit ohne Rundung.
- Keine Texte ins Foto schreiben (schlecht lesbar, schlecht für Suchmaschinen).
- Optional: flache Illustrationen in den Stilfarben (wie beim Original Fable).

---

## 7. Umsetzung in Wix – Schritt für Schritt

> Vorher: Seite duplizieren (Wix-Dashboard → Website → „Website duplizieren“) und
> den neuen Stil zuerst an der Kopie testen. So bleibt die Live-Seite unberührt.

1. **Schriften hochladen** (falls nicht in der Wix-Auswahl):
   Editor → Text markieren → Schriftart → „Schriftarten hochladen“.
   Dateien: https://fonts.google.com/specimen/Newsreader und
   https://fonts.google.com/specimen/Inter (jeweils „Get font“ → Download).
2. **Website-Farben festlegen:** Editor → *Website-Design* → *Farben* →
   eigenes Farbschema mit den Hex-Werten aus Abschnitt 2.
3. **Text-Themen festlegen:** Editor → *Website-Design* → *Text* →
   Überschrift 1–3 = Newsreader, Absatz = Inter, Größen aus Abschnitt 3.
4. **Button-Vorlage anlegen:** einen Button gestalten (Pflaume, Rundung 60 px),
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

- [ ] Beginnt die Seite mit einem Waldgrün- oder Creme-Band?
- [ ] Wechseln sich die Bandfarben ab (nie zweimal dieselbe hintereinander)?
- [ ] Überschriften in Newsreader, Text in Inter, Fließtext ≥ 17 px?
- [ ] Buttons als Pille, dunkel auf hell / hell auf Farbe?
- [ ] Keine weiße Schrift auf Himmelblau?
- [ ] Handy-Ansicht geprüft?
