# SEITE-shop.md – Shop (Wix Stores) im Stil „Foto“

Stand: 26.09.2026 · Verantwortlich: Tom (Webseite/Marketing, IT) · Fachlich zuständig: Sandra Roß-Lünenschloß (Shop, Bestellungen)
Vorschau: `skh-design/vorschau-foto-shop.html` (im Browser öffnen, Ordner `fotos/` muss daneben liegen). Oben in der Vorschau
gibt es einen Schalter „Übersicht / Produktseite“ – er zeigt die beiden Vorlagen des Shops. Den Schalter gibt es nur in der
Vorschau, nicht in Wix.
Stilregeln: `DESIGN-foto.md` · Bausteine für Unterseiten: `SEITE-weiterbildung.md`, Abschnitt 5, `SEITE-sing-mit.md`, `SEITE-mitglied-sein.md`, `SEITE-downloads.md` und `SEITE-veranstaltung.md`, jeweils Abschnitt 6 ·
Nachbarseiten: `vorschau-foto-kontakt.html` (Wegweiser „Bestellungen im Shop“), `vorschau-foto-downloads.html` (kostenlose PDFs),
`vorschau-foto-mitglied-sein.html` (Rabatt), `vorschau-foto-ueber-uns.html` (Spenden, Rumänien) · Ist-Zustand: `IST-STRUKTUR.md`

Dieses Dokument erklärt, **was der Shop heute ist, was beim vollständigen Auslesen aller 93 Produktseiten aufgefallen ist, wie
die neue Gestaltung aussieht, welche Seite für welche Information zuständig ist und wie man das in Wix umsetzt und pflegt**.
Eine Person ohne Vorkenntnisse soll damit arbeiten können.

**Was „der Shop“ technisch ist:** Der Shop läuft über die Wix-App **Wix Stores**. Sie legt zwei Arten von Seiten automatisch an:
(1) **Kategorieseiten** mit der Adresse `/category/<name>` – die Übersicht „Alle Produkte“ (`/category/all-products`) und je eine
Seite pro Kategorie (Bücher, CD's, …) – und (2) **Produktseiten** mit der Adresse `/product-page/<name>`, eine pro Produkt.
Beide Arten haben **je eine gemeinsame Vorlage** (in Wix: Seiten „Kategorieseite“ und „Produktseite“). Wer die Vorlagen gestaltet,
gestaltet alle 93 Produkte und 7 Kategorien auf einmal; Name, Preis, Bild und Text kommen aus den Feldern des jeweiligen Produkts.
Dazu gehören noch Warenkorb (`/cart-page`) und Kasse (Checkout), die Wix vorgibt.

**Rolle der Seite:** Der Shop beantwortet **„Was kann ich beim Verein kaufen – und wie bekomme ich es?“**. Hauptort ist er für
**das Warenangebot** (Liederbücher, CDs, DVDs, Bücher, Liedpostkarten und Fanartikel, Liedblätter als PDF, Videokurse) und den
**Bestellweg**. Versand, Zahlung und Widerruf regeln die AGB und die Seite Widerrufsrecht; der Shop fasst sie in einem Satz
zusammen und verlinkt dorthin (Grundregel aus `DESIGN-foto.md`, Abschnitt 4).

**Zielgruppen:** (1) Singleiter:innen und Teilnehmende der Weiterbildung, die Liederbücher und die zugehörigen CDs brauchen,
(2) Teilnehmende der Guitar- und Ukulele-Factory, die das Material zum Abend kaufen, (3) Menschen, die ein Geschenk suchen
(Liedpostkarten, Tasche, Pin), (4) Besucher:innen, die über Google auf einem einzelnen Produkt landen.

**Kopfleiste:** Der Shop ist **kein Menüpunkt** mehr (`DESIGN-foto.md`, Abschnitt 5: „Menüpunkte KONTAKT, SHOP → Fußzeile“).
Kein Menüpunkt ist unterstrichen; der Weg in den Shop führt über die Fußzeile („Shop“ unter „Service“) und über Links auf
Kontakt, Downloads und Mitglied sein. Brotkrumen: „Start › Shop“ bzw. „Start › Shop › <Produktname>“.

---

## 1. Ausgangslage – was es heute gibt

Ausgelesen am 26.09.2026: alle 93 Adressen aus der Sitemap `store-products-sitemap.xml` und die 7 Adressen aus
`store-categories-sitemap.xml`, jeweils der Seitenquelltext (Wix liefert die Produktdaten dort als JSON im Block
`wix-warmup-data`, Schlüssel `"product"`; die Gestaltungswerte der Vorlage als CSS-Variablen `--gallery_…`), dazu Warenkorb,
AGB und Widerrufsrecht. Ausgewertet mit einem kleinen Python-Skript (Name, Preis, Kategorie, Art, Gewicht, Artikelnummer, Bilder,
Zusatzinfos, Seitentitel, Suchmaschinen-Freigabe, Links im Text).
**Grenze:** Die Gestaltungs- und Skriptdateien von Wix (`static.parastorage.com`) sind aus dieser Arbeitsumgebung gesperrt. Die
Seiten ließen sich im Browser deshalb nur **ohne Gestaltung** öffnen; Kasse, Versandkosten und Zahlungsarten konnten nicht
angesehen werden (Abschnitt 7, Punkt 5). Alles Inhaltliche stammt aus dem Quelltext und ist vollständig.

### Was auf den Seiten steht (heutige Vorlagen)

**Übersicht `/category/all-products`** von oben nach unten: altes Menü (11 Punkte, „SHOP“ als letzter) · Überschrift
**„UNSER SHOP“** · Einleitung („Unser Shop enthält alles, was man braucht, um sich intensiv mit dem gesundheitsfördernden Singen
zu beschäftigen …“) · fetter Hinweis **„Weltweiter Versand digitaler Produkte – kostenlos“**, Bestellung von außerhalb
Deutschlands per E-Mail an Sandra · Brotkrumen „Start › **All Products**“ · Titel „Alle Produkte“ mit dem Satz „Hier findest Du alle
unsere Produkte auf einen Blick.“ – **zweimal** (einmal als Text, einmal mit „Mehr erfahren“) · links Filter **„Bestseller“**
(enthält in Wahrheit die Kategorien) und „Individueller Filter“ (dieselben Kategorien noch einmal, ohne Downloads) · „93 Produkte“,
„Sortieren nach: Empfohlen“ · Raster mit 4 Spalten, 20 Produkte pro Seite, 5 Seiten zum Blättern; jede Karte mit Bild,
„Schnellansicht“, Name, Preis und Knopf **„In den Warenkorb“** · alte Fußzeile.
**Produktseite** `/product-page/<name>`: altes Menü · Bild (meist nur eins) · Beschreibung · Name · „Artikelnummer: 0003“ ·
Preis · „Anzahl*“ · **„In den Warenkorb“** · Aufklapptexte (Zusatzinfos) · Teilen (Facebook, Pinterest, WhatsApp, X).

**Gestaltung der Vorlage heute** (aus den CSS-Variablen): Schriften **Avenir Light** (Titel, Kategorie 54 px fett) und **League
Spartan Light** (Text, Preise, Knöpfe 16 px); Knopf „In den Warenkorb“ **Anthrazit `#333333` mit cremeweißer Schrift, 10 px
Rundung**, beim Darüberfahren **Gelb `rgb(240,176,16)`** – das ist schon fast unser Logo-Gelb `#EFB110`; Hintergrund Creme
`#FFFAF1`; Produktbilder **ohne Rundung**; Etiketten („Ribbon“) Dunkelbraun `#36342C`. Keine dieser Schriften ist PT Sans.

### Das Sortiment (93 Produkte, 6 Kategorien)

| Kategorie in Wix | Anzahl | Preise | Was |
|---|---|---|---|
| **Bücher** | 27 | 8,30–34,95 € | Liederbücher (Buch der heilsamen Lieder I/II, Come together Songs I–IV, Sacred Songs III/IV, Songbooks Bossinger), Fachbücher (Kreutz, Bossinger, Tagungsband „Singen als heilsame Kraft“), Gitarrenbuch |
| **CD's** | 25 | 10,00–20,00 € | Heilsame Lieder CD 1–4, CDs zu den Come-together-Liederbüchern, Mantras, Tina Elay, zwei **Benefiz-CDs** |
| **DVD's** | 2 | 10,00–19,90 € | „Krebs – Singen ist Leben“, „Schwingung und Gesundheit“ |
| **Geschenke** | 16 | 1,00–10,00 € | 11 Liedpostkarten, Liedpostkarten-Set, Benefiz-Pin, Button, Kugelschreiber, Tragetasche |
| **Downloads** | 19 | je 3,00 € | Liedblätter (PDF) zu den Abenden der **Guitar-Factory** (13) und **Ukulele-Factory** (6) |
| **Videokurse** | 4 | 40–169 € | Gitarren-Videokurs (Elay/Röhling), Ukulele Basics, zwei Video-Reihen von Tina Elay |

Alle 93 sind sichtbar, als „auf Lager“ markiert (ohne Lagerbestand, `isTrackingInventory: false`) und für Suchmaschinen
freigegeben (`robots: index`). Keine Rabatte, keine Varianten (Optionen), keine Abos, keine Etiketten.

### Funde beim Auslesen

| Nr. | Fund | Wo / Beleg | Folge |
|---|---|---|---|
| 1 | **Wix-Platzhaltertexte auf 19 Produktseiten** (18 CDs, darunter beide Benefiz-CDs, und die DVD „Krebs“): Aufklapptexte **PRODUKTINFO** („Das ist ein Produktdetail. Füge hier Informationen zu deinem Produkt hinzu …“), **RÜCKGABERICHTLINIE** („… Klare Widerrufs- und Rückgabebedingungen sind rechtlich vorgeschrieben …“) und **VERSANDINFO**. Beispiel: `/product-page/heilsame-lieder-cd-2` | Feld `additionalInfo` | wirkt unfertig; ausgerechnet unter „Rückgaberichtlinie“ steht keine. **Sofort löschen** (Abschnitt 6, Schritt 1) |
| 2 | **Zwei Bestellwege für dieselben Produkte:** Bei allen 19 PDFs und 4 Videokursen steht „Bestellung bitte per E-Mail an sandra.ross-luenenschloss@…“ – zugleich gibt es den Knopf „In den Warenkorb“. Die Übersicht sagt außerdem: aus dem Ausland per E-Mail. | Beschreibung + Knopf | Besucher:innen wissen nicht, was gilt. Entscheidung 3 |
| 3 | **Download-Produkte sind als „physisch“ angelegt** (Gewicht 0). Die Datei bzw. der Link wird nach Zahlungseingang **von Hand** per E-Mail verschickt (Zusatzinfo „Download“). Wix Stores kann **digitale Produkte** selbst ausliefern (Download-Link nach der Zahlung). | `productType: physical`, `digitalProductFileItems: []` | Handarbeit bei Sandra für jede 3-€-Bestellung. Entscheidung 4 (**Einsparmöglichkeit**) |
| 4 | **„Weltweiter Versand digitaler Produkte – kostenlos“** (Übersicht) ↔ **AGB 7.1 „Die Lieferung erfolgt nur innerhalb Deutschlands.“** | Übersicht ↔ `/agb` | Widerspruch; Abschnitt 7, Punkt 2 |
| 5 | **AGB 6.2 verweist auf eine „Seite Versand“** mit einer Übersicht der Versandkosten – diese Seite gibt es nicht (nicht in der Sitemap). Die 19 Aufklapptexte „VERSANDINFO“ sind Platzhalter (Fund 1). Die Versandkosten stehen damit **nirgends vor der Kasse**. | `/agb`, Sitemap | Abschnitt 7, Punkt 2 |
| 6 | **Kein Hinweis „inkl. MwSt., zzgl. Versand“ am Preis.** Die Produktseiten zeigen nur „€ 18,00 Preis“. Nach gängiger Auffassung gehört dieser Hinweis in die Nähe des Preises (Preisangabenverordnung). *Fachliche Einschätzung, keine Rechtsberatung.* Wix Stores hat dafür eine Einstellung. | Seitentext | Abschnitt 6, Schritt 4; Abschnitt 7, Punkt 1 |
| 7 | **Widerrufsbelehrung im Shop veraltet** („innerhalb von **zwei Wochen**“, Wertersatz-Regel mit „40 Euro“ – alter Mustertext); für **digitale Inhalte** (PDFs, Videokurse) fehlt der Hinweis, wann das Widerrufsrecht erlischt. Der Widerrufs-Knopf „Vertrag widerrufen“ fehlt im Shop noch (bekannt: `SEITE-anmeldung.md`, Abschnitt 7, Punkt 3). | `/agb` Abschnitt 5, `/widerrufsrecht` | gehört in den Rechtstexte-Auftrag (Zeile „Rechtliches“ in `DESIGN-foto.md`); hier nur Verweis, Abschnitt 7, Punkt 1 |
| 8 | **Falsches Gewicht:** „Stimmwunder und Körperglück“ wiegt laut Wix **248 kg** (gemeint 0,248 kg). Wenn die Versandkosten nach Gewicht berechnet werden, wird diese Bestellung falsch oder gar nicht berechnet. | Feld `weight` | Abschnitt 6, Schritt 1 |
| 9 | **Adressen passen nicht zum Produkt:** 6 Produkte haben Adressen, die mit **`kopie-von-…`** beginnen (beim Duplizieren entstanden). `/product-page/kopie-von-guitar-factory-25-03-i-choose-to-live-pdf` ist in Wahrheit „Ukulele-Factory 25-04 – blues“. | Sitemap | Adressen umbenennen, Umleitung setzen (Abschnitt 6, Schritt 6) |
| 10 | **Seitentitel für Google** enden bei allen 100 Shop-Seiten auf „\| **Sikra Deutschland**“; die Übersicht heißt „**All Products** \| Sikra Deutschland“, die Brotkrumen „Start › All Products“ (Englisch). Keine Seite hat eine Beschreibung für Google (`meta description` leer, 93 von 93). | `<title>`, Meta | „Sikra“ bekannt (`SEITE-veranstaltung.md`, Fund 15); Kategorie umbenennen (Abschnitt 6, Schritt 3) |
| 11 | **Kategorie „Downloads“ verwechselbar** mit der neuen Seite **„Downloads & Formulare“** (kostenlose PDFs, `SEITE-downloads.md`). Im Shop sind es kostenpflichtige Liedblätter. | Kategorienamen | Umbenennen in **„Liedblätter (PDF)“**, Entscheidung 5 |
| 12 | **Filter falsch beschriftet:** Der Kategorienfilter heißt „**Bestseller**“; ein zweiter Filter „Individueller Filter“ wiederholt die Kategorien (ohne Downloads). Kategorienamen mit Deppen-Apostroph: „CD's“, „DVD's“. | Übersicht | Abschnitt 6, Schritt 3 |
| 13 | **Erster Eindruck:** Die Sortierung „Empfohlen“ (= Reihenfolge von Hand) zeigt zuerst **fünf Liedblätter zu 3 €** mit derselben Gitarren-/Ukulele-Grafik. Die bekanntesten Produkte (Liederbücher) kommen erst danach. | Übersicht | Entscheidung 6 |
| 14 | **Bilder klein oder doppelt:** 33 von 93 Hauptbildern sind kleiner als 500 px (12 CD-Cover nur **231 × 231 px**) – auf großen Bildschirmen unscharf. **Gleiches Bild** bei: CD 1 und CD 2 zu Liederbuch I; Mantras 1 CD und Songbook; alle 13 Guitar-Factory- bzw. 6 Ukulele-Liedblätter je eine Grafik. | Feld `media` | Abschnitt 5; Abschnitt 6, Pflege |
| 15 | **Artikelnummer fehlt** bei 4 Produkten (neuere Liedblätter); die anderen sind fortlaufend `0001`–`0112`. | Feld `sku` | beim Anlegen immer vergeben (Pflege-Ablauf) |
| 16 | **Ansprache gemischt:** 16 Produkttexte siezen („Mit dem Erwerb … unterstützen **Sie**“), die Videokurse duzen. Viele Texte sind Klappentexte der Verlage – die bleiben, wie sie sind. **Eigene** Texte des Vereins (Pin, Button, Tasche, Kugelschreiber, Liedblätter) auf „du“ umstellen. | Beschreibungen | Pflege, niedrige Priorität |
| 17 | **Veraltete Texte:** Benefiz-Pin „gerade in der gesangsreduzierten **Corona-Zeit**“; Tragetasche heißt „… – **NEU** FAIRTRADE“; Heilsame Lieder CD 2 enthält einen Absatz **doppelt**; Tippfehler „Weihnachstlieder“ (Benefiz-CD New York), „Love ist the Key“ (CD 2). | Beschreibungen | Abschnitt 6, Schritt 1 |
| 18 | **Benefiz-CD „Kinderlieder für Rumänien“** unterstützt laut Text „das Rumänienprojekt ‚Heilsames Singen für Frauen in der rumänischen **Psychiatrie**‘“ (Edith Hajnalka Toth, 2014). Die Seite Über uns nennt als heutiges Rumänien-Projekt das Singen mit **Menschen mit Behinderung** (Erzsébet Gazdag, seit 2023). | Beschreibung ↔ `SEITE-ueber-uns.md` | Wohin geht der Erlös heute? Abschnitt 7, Punkt 4 |
| 19 | **Ein Outlook-Schutzlink im Produkttext:** Der Videokurs 1 verlinkt auf das Gitarrenbuch über `deu01.safelinks.protection.outlook.com/…` – mit **Sandras E-Mail-Adresse und Kennungen des Vereins-Postfachs** im Link. Beim Kopieren aus einer E-Mail entstanden. | Beschreibung | durch den direkten Link ersetzen (Abschnitt 6, Schritt 1) |
| 20 | **Kein Mitgliederrabatt im Shop.** Wix Stores hat keine Rabatte oder Gutscheine eingestellt. Die Webseite spricht von „15 % bei Weiterbildung und Jahrestagung“ (Start, Mitglied sein) – der Shop ist also nicht gemeint. | `discount` leer | nur klären, ob das so gewollt ist (Abschnitt 7, Punkt 6) |
| 21 | **Region Österreich:** Auch die Shop-Seiten laufen mit `locale: de-at` (wie Wix-Events, `SEITE-veranstaltung.md`, Fund 9). | Seitenquelltext | mit derselben Einstellung erledigen |
| 22 | Die Hörproben (14 MP3-Dateien bei Wix) funktionieren. Links auf fremde Seiten (`tinaelay.at`, `chakraklang.de`, YouTube) waren aus dieser Umgebung **nicht prüfbar** (vom Netzwerk-Filter gesperrt). | Links im Text | halbjährlich durchklicken (Pflege-Ablauf) |

### Warenkorb, Kasse und Rechtstexte

- **Warenkorb** `/cart-page`: „Mein Warenkorb“, „Bestellübersicht“ – Wix-Standard.
- **AGB (Shop-Teil):** Vertrag kommt mit Auftragsbestätigung per E-Mail zustande (3.2, Knopf „Kaufen“) · Preise inkl. MwSt. (6.1) ·
  Versandkosten „auf der Seite Versand“ (6.2, Seite fehlt, Fund 5) · **Lieferung nur innerhalb Deutschlands**, 3–5 Werktage (7) ·
  **Zahlung ausschließlich Vorkasse**, Rechnung liegt bei (8.1) · Versand mit DHL oder Post, Standardversandkosten bis 1 kg (11).
  Rücksendeadresse und Kontakt: Sandra Roß-Lünenschloß, Wuppertal.
- **Nicht geprüft** (Kasse gesperrt, siehe oben): welche Zahlungsarten die Kasse anbietet (passt das zu „ausschließlich Vorkasse“?),
  wie der Bestellknopf heißt („Kaufen“ laut AGB; „Button-Lösung“ → `SEITE-anmeldung.md`, Abschnitt 7, Punkt 2), welche
  Versandregeln eingestellt sind. → Abschnitt 7, Punkt 5.

---

## 2. Gliederung und Hauptorte – Entscheidungen und Begründung

*(folgt im nächsten Schritt)*

## 3. Aufbau von oben nach unten

*(folgt)*

## 4. Woher die Inhalte stammen

*(folgt)*

## 5. Fotos

*(folgt)*

## 6. Neue Bausteine, Umsetzung in Wix, Pflege

*(folgt)*

## 7. Offene Punkte – vor der Veröffentlichung klären

*(folgt)*

## 8. Checkliste für diese Seite

*(folgt)*
