# DESIGN-rund.md – Alternative „Rund“ für Singende Krankenhäuser e.V.

Stand: 25.09.2026 · Verantwortlich: Tom (Webseite/Marketing)
Vorschau: `skh-design/vorschau-rund.html` (im Browser öffnen) · Hauptvariante: `skh-design/DESIGN.md` („Fable“)
Weitere Alternativen: `DESIGN-plakat.md`, `DESIGN-zeitung.md`, `DESIGN-foto.md`

Dieses Dokument beschreibt die Stilrichtung **„Rund“**, weich, freundlich und illustriert.
Es ist so geschrieben, dass eine Person ohne Vorkenntnisse die Entscheidungen versteht
und den Stil in Wix umsetzen kann.

---

## 1. Idee und Herkunft

**Vorlage:** Refero-Stil „Headspace“ („Sunlit wellness retreat on warm paper“).
Quelle: https://styles.refero.design/style/035a098b-5a27-48a3-8a3a-c68a698e3eab
Headspace ist eine App für Meditation und psychische Gesundheit. Der Stil stammt also
aus dem Gesundheitsbereich und ist darauf angelegt, **nicht klinisch** zu wirken.

**Stimmung:** ein sonniger Rückzugsort auf warmem Papier. Alles ist abgerundet
(Karten, Buttons, Etiketten), dazu flache, fröhliche Illustrationen.

**Was wir gegenüber der Vorlage geändert haben – und warum:**

| Vorlage | Unsere Anpassung | Grund |
|---|---|---|
| Sonnengelb `#FFCE00` | **Logo-Gelb `#EFB110`** | Markenfarbe aus dem Logo |
| Blau `#0061EF` für die wichtigste Aktion | **Anthrazit `#393434`** (dunkler Pillen-Button) | Blau kommt im Logo nicht vor; Anthrazit ist die Logo-Schriftfarbe |
| Violett/Blau in Illustrationen | Logo-Grün, Logo-Gelb, helle Abstufungen | Logo und Bilder sollen zusammenpassen |
| Schrift „Headspace Apercu“ (Lizenz, nicht frei) | **Figtree** (Überschriften) + **PT Sans** (Text) | beide kostenlos (Google Fonts); PT Sans entspricht der Logo-Schrift |
| Grundschrift 15–16 px | **18 px** | ältere Menschen gehören zur Zielgruppe |
| warmes Dunkel `#2D2C2B` für Text | Anthrazit `#393434` | fast gleich, aber aus dem Logo |

Übernommen haben wir: Creme `#F9F4F2` als Seitenhintergrund, sehr runde Buttons
(„Pillen“), Karten mit 24–40 px Rundung, dünne Linien statt Schatten, der kleine versetzte
„Sticker-Schatten“ am hellen Button, eine gelbe Hinweisleiste ganz oben und die Regel
„Fließtext linksbündig, nur kurze Überschriften zentriert“.

**Vergleich mit den anderen Varianten:**

| | Fable (Haupt) | Plakat | **Rund** |
|---|---|---|---|
| Wirkung | ruhig, buchartig | laut, fröhlich | **weich, zugewandt, tröstlich** |
| Überschriften | Serifenschrift Newsreader | PT Sans fett, riesig | **Figtree fett, mittelgroß, zentriert** |
| Bildsprache | Fotos | fast keine | **Illustrationen und Symbole** |
| Gut für | Kliniken, Förderer | Mitsingen, Social Media | **Pflege, Therapie, Seelsorge, Mitsingende** |
| Risiko | zurückhaltend | unseriös für Kliniken | **wirkt ohne Illustrationen leer; etwas „App-haft“** |

**Bekannter Nachteil:** Der Stil braucht Illustrationen. Die in der Vorschau sind einfache
Platzhalter. Für die echte Seite: entweder eine Illustratorin beauftragen (Kosten!) oder
kostenlose Illustrationen nutzen (z. B. https://undraw.co oder https://www.opendoodles.com,
Farben dort auf Logo-Grün/Logo-Gelb einstellbar). **Spartipp:** Die Kreis-Symbole
(Abschnitt 4) lassen sich mit Wix-Formen und den kostenlosen Wix-Symbolen selbst bauen.

---

## 2. Farben

| Name | Hex | Wofür | Wofür NICHT |
|---|---|---|---|
| **Anthrazit** | `#393434` | alle Schrift, Haupt-Button (Pille), Rahmen der hellen Buttons | – |
| **Logo-Gelb** | `#EFB110` | Hinweisleiste ganz oben, Überschrift im grünen Mitglieder-Kasten, Illustrationen | Fließtext auf Weiß, weiße Schrift darauf |
| **Logo-Grün** | `#96B839` | Illustrationen, Symbol-Kreise | jede Schrift, Buttons |
| **Tiefgrün** | `#2F4A14` | ein großer Kasten pro Seite („Mitglied werden“) | – |
| **Blattgrün-Schrift** | `#4D6B1F` | Text in den kleinen Etiketten („Zertifikat 1“) | große Flächen |
| **Papiercreme** | `#F9F4F2` | Seitenhintergrund | – |
| **Grün hell** | `#DBE7BD` | Karte Zertifikat 1, Schlagwort-Etiketten | – |
| **Gelb hell** | `#F8E3A3` | Karte Zertifikat 2, Schlagwort-Etiketten | – |
| **Leinen** | `#E2DED9` | 1-px-Rahmen um Karten und Leisten | Schrift |
| **Grau** | `#6B6464` | Nebentexte (z. B. Wochentag) – nur auf Weiß oder Creme | auf Grün hell / Gelb hell (zu knapp) |
| **Weiß** | `#FFFFFF` | Kopfleiste mit Logo, Karten, Schrift auf Tiefgrün | – |

**Geprüfte Kontraste (Mindestwert nach WCAG: 4,5 : 1):**

| Kombination | Kontrast | Erlaubt? |
|---|---|---|
| Anthrazit auf Papiercreme | 11,2 : 1 | ja |
| Anthrazit auf Weiß | 12,2 : 1 | ja |
| Anthrazit auf Grün hell | 9,4 : 1 | ja |
| Anthrazit auf Gelb hell | 9,6 : 1 | ja |
| Anthrazit auf Logo-Gelb | 6,4 : 1 | ja |
| Weiß auf Anthrazit (Button) | 12,2 : 1 | ja |
| Weiß auf Tiefgrün | 10,0 : 1 | ja |
| Logo-Gelb auf Tiefgrün | 5,2 : 1 | ja (nur große Schrift, fett) |
| Blattgrün-Schrift auf Weiß / Creme | 6,1 / 5,6 : 1 | ja |
| Grau auf Weiß / Creme | 5,8 / 5,3 : 1 | ja |
| Grau auf Grün hell / Gelb hell | 4,5 : 1 | nein (zu knapp, nicht verwenden) |
| **Weiß auf Logo-Gelb / Logo-Grün** | **1,9 / 2,3 : 1** | **nein** |

---

## 3. Schrift

| Rolle | Schrift | Desktop | Handy | Schnitt | Zeilenabstand |
|---|---|---|---|---|---|
| Hauptüberschrift (H1) | Figtree | 64–76 px | 40 px | Bold 700, Laufweite −3 % | 1,02 |
| Abschnittsüberschrift (H2) | Figtree | 44–52 px | 32 px | Bold 700, Laufweite −3 % | 1,08 |
| Kartenüberschrift (H3) | Figtree | 26–34 px | 24 px | Bold 700 | 1,1 |
| Etikett (Pille) | PT Sans | 15 px | 15 px | Bold 700 | – |
| Einleitung | PT Sans | 22 px | 19 px | Regular 400 | 1,5 |
| **Fließtext** | PT Sans | **18 px** | **18 px** | Regular 400 | 1,6 |
| Button | PT Sans | 18 px | 18 px | Bold 700 | – |

Warum zwei Schriften? **Figtree** ist rund und freundlich wie die Vorlage und gibt den
Überschriften Charakter. **PT Sans** ist die Logo-Schrift und sehr gut lesbar im Fließtext.

Regeln:
- Überschriften dürfen zentriert sein, **Fließtext immer linksbündig** (besser lesbar).
- Die enge Laufweite (−3 %) nur bei Überschriften, nie im Text.

---

## 4. Bausteine

- **Pillen-Buttons** (Rundung 800 px = komplett rund):
  - *Dunkel:* Anthrazit, weiße Schrift – nur **einer pro Bildschirm**, für die wichtigste Aktion.
  - *Hell:* Weiß, 2 px Anthrazit-Rahmen, darunter ein versetzter Schatten (3 px nach rechts
    und unten, Anthrazit, ohne Weichzeichnung) – der „Sticker-Effekt“.
- **Etikett:** kleine weiße Pille mit 1-px-Leinen-Rahmen und Blattgrün-Schrift, über Überschriften.
- **Karten:** Rundung 24–32 px, Hintergrund Grün hell oder Gelb hell (große Karten) bzw.
  Creme mit Leinen-Rahmen (kleine Karten). **Kein Schatten.**
- **Symbol-Kreise:** 64 px große gefüllte Kreise (Logo-Grün, Logo-Gelb, Grün hell, Gelb hell)
  mit einem gefüllten Anthrazit-Symbol. Keine reinen Linien-Symbole.
- **Großer Kasten:** ein Tiefgrün-Kasten pro Seite mit 40 px Rundung (Mitglied werden).
- **Verboten:** eckige Karten oder Buttons, starke Schatten, Verläufe, neue Farben außerhalb Abschnitt 2.

---

## 5. Seitenaufbau Startseite

0. **Logo-Gelb** – schmale Hinweisleiste (z. B. Anmeldeschluss)
1. **Weiß** – Kopfleiste: Logo links, Menü Mitte, dunkler Button „Mitglied werden“ rechts
2. **Creme** – Etikett, zentrierte Überschrift „Singen tut gut. Gemeinsam noch mehr.“, Einleitung, zwei Buttons;
   darunter zwei große Karten: Zertifikat 1 (Grün hell) und Zertifikat 2 (Gelb hell), je mit Illustration
3. **Weiß** – „Für wen wir da sind“: vier kleine Karten mit Symbol-Kreisen (Weiterbildung, Einrichtungen, Mitsingen, Spenden)
4. **Creme** – Termine als weiße, runde Zeilen mit farbigem Etikett
5. **Creme** – großer Tiefgrün-Kasten „Mitsingen. Mitmachen. Mitglied werden.“ (Überschrift Logo-Gelb)
6. **Creme** – Fußzeile mit Linkspalten

---

## 6. Umsetzung in Wix – Schritt für Schritt

> Vorher: Website duplizieren (Wix-Dashboard → Website → „Website duplizieren“) und den
> Stil zuerst an der Kopie testen. So bleibt die Live-Seite unberührt.

1. **Schriften:** Figtree und PT Sans sind in der Wix-Schriftauswahl meist vorhanden.
   Falls nicht: Editor → Text markieren → Schriftart → „Schriftarten hochladen“.
   Download: https://fonts.google.com/specimen/Figtree und https://fonts.google.com/specimen/PT+Sans
2. **Farben:** Editor → *Website-Design* → *Farben* → eigenes Farbschema mit den Werten aus Abschnitt 2.
3. **Text-Themen:** *Website-Design* → *Text* → Überschrift 1–3 = Figtree Bold, Absatz = PT Sans 18 px.
   Laufweite der Überschriften auf −0,03 em (in Wix: „Zeichenabstand“ −3 bzw. etwas negativ) stellen.
4. **Button-Vorlagen:** Button gestalten → *Design* → Ecken **100 px** (ganz rund);
   Vorlage 1 dunkel (Anthrazit, weiße Schrift), Vorlage 2 hell (Weiß, 2 px Rand Anthrazit,
   Schatten: Abstand 3 px, Winkel 135°, Weichzeichnen 0, Farbe Anthrazit, Deckkraft 100 %).
   Jeweils „Design speichern“.
5. **Hinweisleiste:** Streifen ganz oben, Hintergrund Logo-Gelb, Text Anthrazit fett. Nur bei echten Hinweisen einblenden.
6. **Karten:** *Hinzufügen* → *Box/Container* → Ecken 32 px, Hintergrund Grün hell bzw. Gelb hell, kein Schatten.
7. **Illustrationen:** als SVG oder PNG hochladen (*Medien* → *Hochladen*). Farben vorher auf
   Logo-Grün/Logo-Gelb/Anthrazit setzen (bei undraw.co oben rechts die Farbe eingeben).
8. **Handy-Ansicht prüfen:** Editor → Handy-Symbol → Größen aus Abschnitt 3 (Spalte „Handy“),
   Karten untereinander.
9. **Abnahme:** Vorschau an Sonja (Geschäftsführung) und den Vorstand (Martin, Paula) schicken,
   erst danach live umsetzen.

---

## 7. Checkliste für jede neue Seite

- [ ] Hintergrund Creme, Kopfleiste Weiß mit Logo?
- [ ] Alle Ecken rund (Buttons ganz rund, Karten 24–40 px)?
- [ ] Höchstens **ein** dunkler Button pro Bildschirm?
- [ ] Keine Schatten außer dem Sticker-Schatten am hellen Button?
- [ ] Fließtext linksbündig, mindestens 18 px?
- [ ] Keine weiße Schrift auf Gelb oder Grün, kein Grau auf den hellen Farbkarten?
- [ ] Illustrationen nur in Logo-Farben?
- [ ] Handy-Ansicht geprüft?
