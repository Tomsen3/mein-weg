# DESIGN-plakat.md – Alternative „Plakat“ für Singende Krankenhäuser e.V.

Stand: 25.09.2026 · Verantwortlich: Tom (Webseite/Marketing)
Vorschau: `skh-design/vorschau-plakat.html` · Hauptvariante: `skh-design/DESIGN.md` („Fable“)

Dieses Dokument beschreibt eine **zweite, mutigere Stilrichtung** als Alternative zur
Hauptvariante „Fable“. Es ist so geschrieben, dass eine Person ohne Vorkenntnisse
verstehen kann, worin sich die beiden Varianten unterscheiden, und die Plakat-Variante
in Wix umsetzen kann.

---

## 1. Idee und Herkunft

**Vorlage:** Refero-Stil „Patrick Miller“ – „übergroße Schrift auf kreidigen Farbflächen,
eine Webseite, die sich wie ein gedrucktes Plakat verhält“.
Quelle: https://styles.refero.design/style/bb63a015-b018-4bd9-be66-0973ac6be753

**Stimmung:** laut, fröhlich, selbstbewusst – wie ein Konzertplakat für das Mitsingen.
Die Kernbotschaft („Singen tut gut.“) steht riesig im Kopfbereich.

**Was wir gegenüber der Vorlage geändert haben – und warum:**

| Vorlage | Unsere Anpassung | Grund |
|---|---|---|
| Orange, Rosé, Salbei, Tintenblau | Logofarben (Gelb, Grün, Anthrazit) und helle Abstufungen davon | Logo und Webseite sollen zusammenpassen |
| Schrift „MlrStandard“ (nicht frei erhältlich) | **PT Sans** für alles (Überschriften fett, Text normal) | kostenlos, passt zum Logo-Schriftzug, nur eine Schrift = einfache Pflege in Wix |
| fast kein Text, nur ein Portfolio | geteilte Farbflächen (50/50) mit normal großem Fließtext | unsere Seite hat viel Inhalt (Module, Termine) |
| reines Schwarz auf Farbe | Anthrazit aus dem Logo, Kontrast geprüft | Markenbezug, gute Lesbarkeit |

**Vergleich mit der Hauptvariante „Fable“:**

| | Fable (Hauptvariante) | Plakat (Alternative) |
|---|---|---|
| Wirkung | ruhig, warm, buchartig | laut, fröhlich, selbstbewusst |
| Überschriften | Serifenschrift (Newsreader), normal groß | PT Sans fett, sehr groß |
| Hauptfarbe Kopfbereich | Tiefgrün | Logo-Gelb |
| Gut für | Vertrauen bei Kliniken, Pflegeleitungen, Förderern | Aufmerksamkeit, Mitsingen, Mitglieder, Social Media |
| Risiko | wirkt etwas zurückhaltend | kann auf Klinikleitungen unseriös wirken; lange Wörter brauchen Trennung |
| Aufwand in Wix | mittel | mittel bis hoch (große Schrift auf Handy prüfen) |

---

## 2. Farben

| Name | Hex | Wofür | Wofür NICHT |
|---|---|---|---|
| **Logo-Gelb** | `#EFB110` | Kopfbereich (große Fläche), Überschrift im Band „Mitglied werden“, runde Buttons auf Anthrazit | weiße Schrift darauf |
| **Logo-Grün** | `#96B839` | Band „Sing mit“ (große Aussage) | weiße Schrift darauf |
| **Anthrazit** | `#393434` | alle Schrift, runde Buttons, Band „Mitglied werden“, Fußzeile | – |
| **Gelb hell** | `#F8E3A3` | geteilte Fläche (z. B. Zertifikat 1) | – |
| **Grün hell** | `#DBE7BD` | geteilte Fläche (z. B. Zertifikat 2) | – |
| **Papier** | `#FBF6E6` | ruhige Bereiche, z. B. Termine | – |
| **Weiß** | `#FFFFFF` | Kopfleiste mit Logo, schräges Etikett („Jetzt Mitglied werden“) | – |

**Geprüfte Kontraste (Mindestwert 4,5 : 1):**

| Kombination | Kontrast | Erlaubt? |
|---|---|---|
| Anthrazit auf Logo-Gelb | 6,4 : 1 | ja |
| Anthrazit auf Logo-Grün | 5,4 : 1 | ja |
| Anthrazit auf Gelb hell | 9,6 : 1 | ja |
| Anthrazit auf Grün hell | 9,4 : 1 | ja |
| Anthrazit auf Papier | 11,3 : 1 | ja |
| Logo-Gelb auf Anthrazit | 6,4 : 1 | ja |
| **Weiß auf Logo-Gelb / Logo-Grün** | **1,9 / 2,3 : 1** | **nein** |

---

## 3. Schrift

Eine einzige Schrift: **PT Sans** (Google Fonts, kostenlos, Open Font License).

| Rolle | Desktop | Handy | Schnitt | Zeilenabstand |
|---|---|---|---|---|
| Plakat-Überschrift (nur Kopfbereich) | 160–210 px | 64 px | Bold 700 | 0,82 |
| Große Aussage (Band) | 110–128 px | 44 px | Bold 700 | 0,88 |
| Abschnittsüberschrift | 64 px | 36 px | Bold 700 | 0,95 |
| Kleine Überschrift (GROSSBUCHSTABEN) | 15 px | 15 px | Bold 700, Laufweite +4 % | – |
| Einleitung | 26 px | 20 px | Regular 400 | 1,35 |
| **Fließtext** | **18 px** | **17 px** | Regular 400 | 1,6 |

Regeln:
- Plakat-Überschriften kurz halten: **höchstens 4 Wörter pro Zeile**, am besten 2–6 Wörter insgesamt.
- Lange Wörter (z. B. „Gesundheitseinrichtungen“) von Hand trennen, sonst laufen sie auf dem Handy aus dem Bild.
- Pro Seite nur **eine** Plakat-Überschrift.

---

## 4. Bausteine

- **Runder Pfeil-Button:** Kreis 64 px, Anthrazit mit weißem Pfeil (auf Anthrazit-Band: Gelb mit Anthrazit-Pfeil).
  Daneben der Linktext fett. Das ist der einzige Button-Typ.
- **Schräges Etikett:** weißes Quadrat 120 px, um −12° gedreht, oben rechts im Kopfbereich.
  Höchstens eines pro Seite, nur für die wichtigste Handlung (z. B. „Jetzt Mitglied werden“).
- **Geteilte Flächen:** zwei gleich breite Farbflächen nebeneinander (Handy: untereinander),
  ohne Rahmen, ohne Schatten, ohne Rundung.
- **Terminliste:** Linien in Anthrazit (2 px) statt Karten; Schlagworte als umrandete Pillen.
- **Verboten:** Schatten, Verläufe, abgerundete Karten, mehr als eine Plakat-Überschrift pro Seite.

---

## 5. Seitenaufbau Startseite

0. **Weiß** – Kopfleiste mit Logo und Menü
1. **Logo-Gelb** – Plakat-Überschrift „Singen tut gut.“, Einleitung, Button „Zur Weiterbildung“, schräges Etikett
2. **Gelb hell | Grün hell** – die zwei Zertifikate nebeneinander
3. **Logo-Grün** – große Aussage „Keine Noten. Keine Vorkenntnisse. Einfach mitsingen.“
4. **Papier** – Termine als Linienliste
5. **Anthrazit** – „Mitsingen. Mitmachen. Mitglied werden.“ in Gelb, Buttons Mitglied/Spenden
6. **Anthrazit** – Fußzeile

---

## 6. Umsetzung in Wix (Kurzfassung)

Die Schritte entsprechen Abschnitt 7 in `DESIGN.md`, mit diesen Unterschieden:
1. Nur **PT Sans** hochladen bzw. auswählen (keine zweite Schrift nötig).
2. Farbschema mit den Werten aus Abschnitt 2 dieses Dokuments anlegen.
3. Runden Button als Vorlage speichern (Form: Kreis, 64 × 64 px, Symbol Pfeil).
4. Geteilte Flächen: Wix-Abschnitt mit zwei Spalten („Streifen“ mit 2 Spalten), jede Spalte eigene Hintergrundfarbe.
5. **Handy-Ansicht besonders prüfen:** Plakat-Überschriften im Handy-Editor verkleinern (Werte aus Abschnitt 3).

---

## 7. Checkliste

- [ ] Nur eine Plakat-Überschrift pro Seite, höchstens 6 Wörter?
- [ ] Alle Schrift Anthrazit (außer Gelb auf Anthrazit)?
- [ ] Keine weiße Schrift auf Gelb oder Grün?
- [ ] Nur runde Pfeil-Buttons, keine Schatten, keine gerundeten Karten?
- [ ] Lange Wörter in großen Überschriften getrennt, Handy-Ansicht geprüft?
