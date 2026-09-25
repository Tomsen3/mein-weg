# DESIGN-zeitung.md – Alternative „Zeitung“ für Singende Krankenhäuser e.V.

Stand: 25.09.2026 · Verantwortlich: Tom (Webseite/Marketing)
Vorschau: `skh-design/vorschau-zeitung.html` (im Browser öffnen) · Hauptvariante: `skh-design/DESIGN.md` („Fable“)
Weitere Alternativen: `DESIGN-plakat.md`, `DESIGN-rund.md`, `DESIGN-foto.md`

Dieses Dokument beschreibt die Stilrichtung **„Zeitung“**: sachlich, geordnet, glaubwürdig.
Es ist so geschrieben, dass eine Person ohne Vorkenntnisse die Entscheidungen versteht
und den Stil in Wix umsetzen kann.

---

## 1. Idee und Herkunft

**Vorlage:** Refero-Stil „Monocle“ („Quality broadsheet on cream paper“).
Quelle: https://styles.refero.design/style/9165ecb1-f068-4093-8783-1f3c98898b8a
Monocle ist ein internationales Magazin. Die Webseite sieht aus wie eine gute Wochenzeitung.

**Stimmung:** eine Qualitätszeitung auf Cremepapier. Spalten, feine Trennlinien, eckige
Formen – und genau **eine** Farbe, die etwas zu sagen hat: Gelb.

**Warum dieser Stil zu uns passt:** Das Monocle-Gelb `#FFC500` ist fast identisch mit
unserem Logo-Gelb `#EFB110`. Der Stil wirkt von allen Varianten am **fachlich
glaubwürdigsten** und verträgt viel Inhalt (Module, Termine, Presse, Forschung, Neuigkeiten).

**Was wir gegenüber der Vorlage geändert haben – und warum:**

| Vorlage | Unsere Anpassung | Grund |
|---|---|---|
| Schwarz `#000000` | **Anthrazit `#393434`** | Logo-Farbe, wirkt weicher als Schwarz |
| Signalgelb `#FFC500` | **Logo-Gelb `#EFB110`** | Markenfarbe |
| Schrift Plantin (Lizenz) | **PT Serif** | kostenlos; gehört zur selben Familie wie PT Sans (Logo-Schrift) |
| Helvetica Neue für Menü/Buttons | **PT Sans** | kostenlos, Logo-Schrift |
| Rubrik-Zeilen 13 px | **15 px** | Lesbarkeit für ältere Menschen |
| Gelb nur am Abo-Button | Gelb an **zwei** Stellen: Button „Mitglied werden“ und Kasten „Mitsingen“ | Mitsingen ist unser zweitwichtigstes Angebot |
| Illustrationen mit Blau | Grün-Töne statt Blau (Fotos/Illustrationen) | Blau ist keine Logofarbe |

**Vergleich mit den anderen Varianten:**

| | Fable (Haupt) | Plakat | **Zeitung** |
|---|---|---|---|
| Wirkung | ruhig, warm, buchartig | laut, fröhlich | **sachlich, geordnet, seriös** |
| Überschriften | Newsreader (Serife) | PT Sans fett, riesig | **PT Serif, normal stark** |
| Formen | runde Buttons | Kreise, schräges Etikett | **alles eckig, Trennlinien** |
| Gut für | Kliniken, Förderer | Mitsingen, Social Media | **Kliniken, Presse, Fachpublikum, textreiche Seiten** |
| Risiko | etwas zurückhaltend | unseriös für Kliniken | **Fable recht ähnlich (Serife auf Creme); wirkt weniger warm; braucht gute Fotos** |

---

## 2. Farben

| Name | Hex | Wofür | Wofür NICHT |
|---|---|---|---|
| **Anthrazit** | `#393434` | alle Schrift, dicke Trennlinien, Fußzeile | – |
| **Logo-Gelb** | `#EFB110` | **nur** Button „Mitglied werden“ und **ein** Kasten pro Seite (z. B. Mitsingen) | Fließtext, weiße Schrift darauf, weitere Flächen |
| **Blattgrün-Schrift** | `#4D6B1F` | Rubrik-Zeilen („WEITERBILDUNG“) | Flächen |
| **Zeitungscreme** | `#FDFCF3` | Seitenhintergrund | – |
| **Linie** | `#D9D5CC` | dünne 1-px-Trennlinien zwischen Spalten und Beiträgen | Schrift |
| **Grau** | `#6B6464` | Autorenzeile, Datum, Bildunterschrift – nur auf Creme/Weiß | auf Gelb |
| **Logo-Grün** | `#96B839` | nur in Illustrationen oder Grafiken | Schrift, Buttons |
| **Weiß** | `#FFFFFF` | Beschriftungsschild auf Fotos | – |

**Geprüfte Kontraste (Mindestwert nach WCAG: 4,5 : 1):**

| Kombination | Kontrast | Erlaubt? |
|---|---|---|
| Anthrazit auf Zeitungscreme | 11,9 : 1 | ja |
| Anthrazit auf Logo-Gelb | 6,4 : 1 | ja |
| Blattgrün-Schrift auf Zeitungscreme | 5,9 : 1 | ja |
| Grau auf Zeitungscreme | 5,6 : 1 | ja |
| Creme auf Anthrazit (Fußzeile) | 11,9 : 1 | ja |
| Grau auf Logo-Gelb | 3,0 : 1 | **nein** |
| **Weiß auf Logo-Gelb** | **1,9 : 1** | **nein** |

---

## 3. Schrift

| Rolle | Schrift | Desktop | Handy | Schnitt | Zeilenabstand |
|---|---|---|---|---|---|
| Aufmacher-Überschrift | PT Serif | 44–48 px | 34 px | Regular 400, Laufweite −2 % | 1,08 |
| Abschnittsüberschrift | PT Serif | 32–36 px | 28 px | Regular 400 | 1,1 |
| Beitragsüberschrift | PT Serif | 23–26 px | 23 px | Regular 400 | 1,15 |
| Vorspann (kursiv) | PT Serif | 21 px | 19 px | Italic 400 | 1,45 |
| Rubrik-Zeile | PT Serif | 15 px | 15 px | Bold 700, GROSSBUCHSTABEN, Laufweite +7 % | – |
| **Fließtext** | PT Serif | **18 px** | **18 px** | Regular 400 | 1,6 |
| Menü, Buttons, Datum | PT Sans | 15–17 px | 15–17 px | Regular/Bold | – |

Regeln:
- Überschriften **immer linksbündig**, nie zentriert (Zeitungsstil). Ausnahme: Logo-Kopf.
- Überschriften **nicht fett** – die Wirkung kommt aus der Größe und der Serife.
- Fließtext immer Serife; PT Sans nur für Menü, Buttons, Datum, Tabellenköpfe.

---

## 4. Bausteine

- **Zeitungskopf:** Logo mittig auf Creme, darunter eine Zeile (links „Neuigkeiten aus dem
  Netzwerk“, rechts Jahreszeit), dann eine **doppelte Linie** in Anthrazit.
- **Rubrik-Menü:** Menüpunkte in einer Reihe, getrennt durch senkrechte dünne Linien.
- **Service-Leiste ganz oben:** links TERMINE / PRESSE / KONTAKT, rechts gelber Button „MITGLIED WERDEN“.
- **Buttons:** eckig (Rundung 0), Großbuchstaben PT Sans fett.
  *Gelb:* Logo-Gelb mit Anthrazit-Schrift. *Rahmen:* 1 px Anthrazit, transparent.
- **Spalten:** Startseite in 3 Spalten (Aufmacher | Beitragsstapel | gelber Kasten), getrennt durch 1-px-Linien.
- **Abschnittskopf:** 3-px-Linie Anthrazit, darunter Überschrift links und „Alle … →“ rechts.
- **Fotos:** ohne Rahmen; nur in der Viererreihe 8 px Rundung. Beschriftung als kleines Schild unten links.
- **Termine:** als echte Tabelle (Datum | Modul | Ort | Zertifikat) mit dünnen Linien.
- **Verboten:** Schatten, Verläufe, runde Buttons, weitere Farben, zentrierte Beitragsüberschriften.

---

## 5. Seitenaufbau Startseite

0. Service-Leiste (Termine, Presse, Kontakt | Button „Mitglied werden“)
1. Zeitungskopf mit Logo, doppelte Linie, Rubrik-Menü
2. Drei Spalten: **Aufmacher** Weiterbildung mit Foto | **Stapel** Zertifikat 1, Zertifikat 2,
   Voraussetzung Mitgliedschaft | **gelber Kasten** „Offene Singgruppen diese Woche“ + Zitat
3. „Aus dem Netzwerk“ – vier Beiträge mit Foto (Einrichtungen, Forschung, Mitglieder, Spenden)
4. „Termine der Weiterbildung“ – Tabelle
5. Mitglieder-Band zwischen zwei doppelten Linien: „Mitsingen. Mitmachen. *Mitglied werden.*“
6. Fußzeile Anthrazit

---

## 6. Umsetzung in Wix – Schritt für Schritt

> Vorher: Website duplizieren (Wix-Dashboard → Website → „Website duplizieren“) und den
> Stil zuerst an der Kopie testen.

1. **Schriften:** PT Serif und PT Sans in der Wix-Schriftauswahl wählen; falls nicht vorhanden:
   Text markieren → Schriftart → „Schriftarten hochladen“.
   Download: https://fonts.google.com/specimen/PT+Serif und https://fonts.google.com/specimen/PT+Sans
2. **Farben:** *Website-Design* → *Farben* → eigenes Farbschema mit den Werten aus Abschnitt 2.
3. **Text-Themen:** Überschrift 1–3 = PT Serif **Regular** (nicht fett), Absatz = PT Serif 18 px,
   „Kleiner Text“ = PT Sans 15 px.
4. **Button-Vorlagen:** Ecken **0 px**, Schrift PT Sans fett, Großbuchstaben.
   Vorlage 1 Gelb (Logo-Gelb, Anthrazit-Schrift), Vorlage 2 Rahmen (1 px Anthrazit). „Design speichern“.
5. **Linien:** *Hinzufügen* → *Linien* → horizontale Linie 1 px `#D9D5CC` zwischen Beiträgen,
   3 px Anthrazit über Abschnitten. Senkrechte Linien zwischen Spalten: Spalten-Rahmen nur rechts, 1 px.
6. **Startseite:** Wix-Abschnitt mit 3 Spalten (Verhältnis ca. 45 : 30 : 25). Die rechte Spalte
   bekommt eine Box mit Hintergrund Logo-Gelb.
7. **Termine:** Wix-Tabelle („Tabelle“ aus *Hinzufügen* → *Liste*) oder Wix-Veranstaltungen im
   Listen-Layout, Rahmen nur waagerecht.
8. **Handy-Ansicht prüfen:** Spalten untereinander, Reihenfolge Aufmacher → Stapel → gelber Kasten.
9. **Abnahme:** Vorschau an Sonja, Martin und Paula schicken, erst danach live umsetzen.

---

## 7. Checkliste für jede neue Seite

- [ ] Gelb höchstens an zwei Stellen (Button „Mitglied werden“ + ein Kasten)?
- [ ] Überschriften PT Serif, nicht fett, linksbündig?
- [ ] Fließtext PT Serif 18 px?
- [ ] Alle Ecken eckig (0 px), keine Schatten?
- [ ] Beiträge und Spalten durch Linien getrennt statt durch Farbflächen?
- [ ] Keine weiße oder graue Schrift auf Gelb?
- [ ] Fotos vorhanden und gut (keine leeren Platzhalter)?
- [ ] Handy-Ansicht geprüft?
