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
| 7 | **Widerrufsbelehrung im Shop veraltet** („innerhalb von **zwei Wochen**“, Wertersatz-Regel mit „40 Euro“ – alter Mustertext); für **digitale Inhalte** (PDFs, Videokurse) fehlt der Hinweis, wann das Widerrufsrecht erlischt. Der Widerrufs-Knopf „Vertrag widerrufen“ fehlt im Shop noch (bekannt: `SEITE-anmeldung.md`, Abschnitt 7, Punkt 3). | `/agb` Abschnitt 5, `/widerrufsrecht` | gehört in den Rechtstexte-Auftrag (`SEITE-rechtliches.md`, Abschnitt 7, Punkt 1); hier nur Verweis, Abschnitt 7, Punkt 1 |
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
| 21 | **Region Österreich:** Auch die Shop-Seiten laufen mit `locale: de-at` (wie Wix-Events, `SEITE-veranstaltung.md`, Fund 9). Deshalb steht der Preis als „€ 18,00“ statt „18,00 €“. | Seitenquelltext | mit derselben Einstellung erledigen (Abschnitt 6, Schritt 2) |
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

### Entscheidung 1: **Nur die Vorlagen gestalten** (Vorschlag aus `DESIGN-foto.md`, Abschnitt 5, bestätigt)

Wix Stores bleibt. Angepasst werden **Farben, Schrift, Knöpfe, Rundungen und Texte** der beiden Vorlagen (Kategorieseite,
Produktseite) sowie der Kopfbereich über dem Shop. Einzelne Produkte bekommen nur Inhalts-Korrekturen (Abschnitt 6, Schritt 1).
**Begründung:** geringster Aufwand, keine Pflege je Seite; 93 Produktseiten einzeln zu gestalten wäre unverhältnismäßig.
**Nicht gewählt:** den Shop abschaffen und nur noch per E-Mail bestellen lassen. Das würde alle Arbeit zu Sandra verschieben;
ob dadurch ein günstigerer Wix-Tarif reichen würde, hängt auch von anderen Funktionen ab (Wix-Events, Formulare) und ist nicht
geprüft. Erst die Verkaufszahlen ansehen (Abschnitt 7, Punkt 7), dann weiterentscheiden.

### Entscheidung 2: **Kopf ohne Titelfoto** – wie bei Downloads

Der Shop ist eine **Service-Seite**: Wer hierher kommt, will etwas finden und bestellen. Die Produktbilder sind die Bilder der
Seite. Deshalb: Überschrift, zwei Sätze Einleitung und **ein** Hinweiskasten „Versand und Zahlung“ (Baustein „Kopf ohne
Titelfoto“ aus `SEITE-downloads.md`, Abschnitt 6). Der heutige fette Hinweis „Weltweiter Versand … kostenlos“ entfällt (Fund 4).

### Entscheidung 3: **Ein Bestellweg – der Warenkorb**

Alle Produkte, auch Liedblätter und Videokurse, werden über **„In den Warenkorb“** bestellt. Der Satz „Bestellung bitte per
E-Mail an …“ wird aus den 23 Beschreibungen gelöscht (Fund 2). Wer aus dem Ausland bestellen will oder eine Frage hat, schreibt
Sandra – das steht **einmal** im Kasten „Fragen zur Bestellung“, nicht in jedem Produkt.
**Begründung:** Zwei Wege verwirren; der Warenkorb liefert Sandra eine vollständige Bestellung mit Adresse, und die
Auftragsbestätigung (AGB 3.2) geht automatisch raus.

### Entscheidung 4: **Liedblätter als digitale Produkte** (Einsparmöglichkeit)

Die 19 Liedblätter werden in Wix Stores auf **„Digitales Produkt“** umgestellt und die PDF-Datei direkt am Produkt
hochgeladen. Wix schickt den Download-Link dann selbst, sobald die Bestellung bezahlt ist.
**Ersparnis:** Heute schreibt Sandra für jede 3-€-Bestellung eine E-Mail mit Anhang. Bei Vorkasse per Überweisung muss sie die
Bestellung weiterhin als „bezahlt“ markieren – das Verschicken entfällt. **Videokurse:** erst testen. Sie bestehen aus einer
Video-Reihe und einem Forum bei Tina Elay, nicht aus einer Datei; möglich ist ein PDF mit Zugangslink als „Datei“. Solange das
nicht geklärt ist, bleibt es beim Versand des Links von Hand (Abschnitt 7, Punkt 3).
**Rechtlicher Hinweis** (*fachliche Einschätzung, keine Rechtsberatung*): Bei digitalen Inhalten erlischt das Widerrufsrecht
nur, wenn die Käuferin vorher ausdrücklich zustimmt, dass der Download vor Ablauf der Frist beginnt. Das gehört in den
Rechtstexte-Auftrag (Abschnitt 7, Punkt 1), nicht in diese Gestaltung.

### Entscheidung 5: **Kategorien umbenennen und aufräumen**

| heute | neu | Grund |
|---|---|---|
| All Products | **Alle Produkte** (Seitentitel und Brotkrumen) | Englisch (Fund 10) |
| Bücher | Bücher | – |
| CD's / DVD's | **CDs / DVDs** | Apostroph falsch |
| Geschenke | **Geschenke & Postkarten** | 12 der 16 sind Liedpostkarten |
| Downloads | **Liedblätter (PDF)** | nicht mit „Downloads & Formulare“ verwechseln (Fund 11) |
| Videokurse | Videokurse | – |
| Filter „Bestseller“ + „Individueller Filter“ | **ein** Filter „Kategorien“ | Fund 12 |

**Adressen:** Wix legt für jede Kategorie eine Adresse aus dem Namen an. Wenn sich die Adresse beim Umbenennen ändert, alte
Adresse umleiten (Abschnitt 6, Schritt 6).

### Entscheidung 6: **Reihenfolge und ruhige Karten**

Reihenfolge „Empfohlen“ neu von Hand: **Liederbücher → CDs zu den Liederbüchern → Fachbücher → DVDs → Geschenke & Postkarten →
Videokurse → Liedblätter** (Fund 13). In der Übersicht **kein Knopf „In den Warenkorb“** auf jeder Karte: Bild, Art, Name und
Preis reichen, ein Klick führt zur Produktseite. **Begründung:** Regel „nur **ein** gelber Knopf-Typ, sparsam“
(`DESIGN-foto.md`, Abschnitt 4) – 20 gelbe Knöpfe auf einer Seite wären das Gegenteil. Der gelbe Knopf erscheint auf der
Produktseite, wo die Entscheidung fällt.

### Entscheidung 7: **Versand, Zahlung, Widerruf: ein fester Bereich statt 93 Einzeltexte**

Die 19 Platzhalter werden gelöscht. Unter dem Produkt-Baustein steht auf der Vorlage **einmal** ein fester Bereich „Gut zu
wissen“ mit drei Aufklapptexten: **Versand & Zahlung**, **Widerruf**, **Fragen zur Bestellung**. Er erscheint unter allen
Produkten. Einzelne Produkte behalten nur Zusatzinfos, die **nur für sie** gelten (z. B. Liedblätter: „So bekommst du die Datei“).
**Wichtig:** Die Sätze in „Gut zu wissen“ geben nur wieder, was in den AGB steht (Lieferung Deutschland, DHL/Post, 3–5 Werktage,
Vorkasse, Versandkosten vor dem Bestellen) und verlinken dorthin. Es werden **keine** neuen Rechtstexte geschrieben; Frist und
Einzelheiten stehen in AGB und Widerrufsbelehrung. Werden diese überarbeitet, die Sätze hier nachziehen.

### Hauptorte – was abgeglichen wurde

| Thema | Steht auch auf … | Hauptort | Im Shop (Vorschau) | Grund |
|---|---|---|---|---|
| **Warenangebot** (Bücher, CDs, Postkarten, Liedblätter, Videokurse), **Bestellweg** | Kontakt (Wegweiser), Downloads (Verweis) | **Shop** | vollständig | – |
| **Versand, Lieferzeit, Zahlung** | – | **AGB** (6–8, 11) | Hinweiskasten + „Gut zu wissen“, je ein Satz + Link | Rechtstext an einer Stelle |
| **Widerruf** | Anmeldung (`#widerruf`) | **Widerrufsrecht** + Seite „Vertrag widerrufen“ | Aufklapptext mit zwei Links | eine Widerrufsseite für alles (`SEITE-anmeldung.md`, Entscheidung 4) |
| **Kostenlose PDFs** (Formulare, Flyer) | – | **Downloads & Formulare** | Verweis „Nicht im Shop“ | Shop = kostenpflichtig |
| **Mitgliederrabatt** | Start, Weiterbildung, Mitglied sein | **Mitglied sein** (`#vorteile`) | Verweis: „gilt für Weiterbildung und Jahrestagung“ | Fund 20 |
| **Spenden, Rumänien-Projekt** | Start, Kontakt | **Über uns** (`#spenden`) | Verweis | Benefiz-CDs bleiben Produkte; Zweck klären (Abschnitt 7, Punkt 4) |
| **Ansprechperson Bestellungen** | Kontakt (Wegweiser) | Shop; Kontakt = Übersicht | Kasten Sandra mit Porträt und E-Mail (ohne Telefon, wie auf Mitglied sein) | – |

### Korrekturen auf den Nachbar-Vorschauen (26.09.2026)

| Seite | Stelle | Vorher | Nachher | Grund |
|---|---|---|---|---|
| alle 13 Vorschauen | Fußzeile, „Mitmachen“ → Shop | `#` | → `vorschau-foto-shop.html` | Vorschau gibt es jetzt |
| Kontakt | Wegweiser „Bestellungen im Shop“, „Zum Shop →“ | `#` | → `vorschau-foto-shop.html` | wie oben |
| alle 16 Foto-Vorschauen (Nachtrag 26.09.2026, nach Abnahme-Hinweis von Tom) | Kopfleiste | Shop nur in der Fußzeile | zusätzlich kleiner Link „Shop“ mit Tüten-Symbol neben „Mitglied werden“; auf den Shop-Seiten gelb unterstrichen | Besucher:innen suchen den Shop oben; kein 7. Menüpunkt (`DESIGN-foto.md`, Abschnitte 4 und 5) |
| Downloads | „Nicht dabei?“ | – | neue Zeile „Liedblätter zur Guitar- und Ukulele-Factory, Liederbücher, CDs – kostenpflichtig – Shop“ | wer Liedblätter unter Downloads sucht, findet den Weg (Fund 11) |

Kopfleiste und Fußzeile (mit „Vertrag widerrufen“) sowie das gesamte CSS sind aus `vorschau-foto-veranstaltung.html`
übernommen; angehängt ist der Block „Ergänzungen für die Seite ‚Shop‘“.

---

## 3. Aufbau von oben nach unten

Spalte „Woher“: **App** = kommt automatisch aus Wix Stores · **fest** = einmal auf der Vorlagen-Seite angelegt.

**Übersicht** (`/category/all-products`, gleiche Vorlage für jede Kategorie):

| Nr. | Fläche | Bereich | Inhalt | Woher |
|---|---|---|---|---|
| – | Weizen | Hinweisleiste | Jahrestagung 2027 | Kopf aller Seiten |
| 0 | Weiß | Kopfleiste | Logo, 6 Menüpunkte (keiner unterstrichen), „Mitglied werden“ | Kopf aller Seiten |
| – | Leinen | Brotkrumen | „Start › Shop“ | App |
| 1 | Leinen | **Kopf ohne Titelfoto** | kleine Überschrift „Shop“, Titel „Liederbücher, CDs und mehr“, Einleitung, Hinweiskasten „Versand und Zahlung“ | fest |
| 2 | Leinen | **Produkte** (`#produkte`) | links Kategorien mit Anzahl (auf dem Handy als Zeile über dem Raster), rechts Anzahl, Sortierung, Raster 4 Spalten (Handy 2), Karten: Bild auf weißer Kachel, Art, Name, Preis; Seitenzahlen | App |
| 3 | Salbei | **Fragen zur Bestellung** (`#fragen`) + **Nicht im Shop** | Sandra mit Porträt und E-Mail; Verweise Downloads, Mitglied sein, Über uns | fest |
| 4 | Tiefgrün | **Werde Teil des Netzwerks.** | wie auf allen Seiten | fest |
| – | Tiefgrün | Fußzeile | mit „Vertrag widerrufen“ | Fußzeile aller Seiten |

**Produktseite** (`/product-page/…`):

| Nr. | Fläche | Bereich | Inhalt | Woher |
|---|---|---|---|---|
| – | Leinen | Brotkrumen | „Start › Shop › Kategorie › Produkt“ | App |
| 1 | Leinen | **Kaufbereich** | links Bild auf weißer Kachel; rechts Art, Name, Preis mit „inkl. MwSt., zzgl. Versandkosten“, Anzahl, **gelber Knopf „In den Warenkorb“**, Artikelnummer, eine Zeile Versand | App (Versandzeile: fest in den Einstellungen) |
| 2 | Leinen | **Über die CD / das Buch** + **Gut zu wissen** | links die Beschreibung (Aufklapptext für Rückmeldungen); rechts drei Aufklapptexte, Teilen | links App, rechts fest (Entscheidung 7) |
| 3 | Leinen | **Das passt dazu** | 3 verwandte Produkte | App (Baustein „Ähnliche Produkte“) |
| 4 | Tiefgrün | Mitglieder-Band, Fußzeile | wie oben | fest |

**Handy:** Kategorien als umbrechende Zeile, Raster 2 Spalten, Produktbild über dem Kaufbereich. Geprüft bei 1280 px und
390 px: kein seitliches Scrollen. Warenkorb und Kasse gibt Wix vor; dort gelten nur Farben und Schrift aus den
Website-Einstellungen.

---

## 4. Woher die Inhalte stammen

| Bereich | Quelle |
|---|---|
| Produktnamen, Preise, Artikelnummer, Kategorien und ihre Anzahl, Beschreibung „Heilsame Lieder CD 2“ | Wix Stores, JSON im Seitenquelltext (26.09.2026) |
| Versand, Lieferzeit, Zahlung | AGB, Abschnitte 6, 7, 8 und 11 (`/agb`) |
| Sandra (Funktion, E-Mail, Porträt) | Vorschau Mitglied sein / Kontakt |
| Heutige Gestaltungswerte der Vorlage | CSS-Variablen `--gallery_…` und `--wix-font-…` der Kategorieseite |

**Selbst formuliert** (bitte bei der Abnahme gegenlesen): Titel „Liederbücher, CDs und mehr“, die Einleitung einschließlich
„Jeder Kauf unterstützt die Arbeit des Vereins“, der Hinweiskasten, die Texte in „Gut zu wissen“, „Fragen zur Bestellung“,
„Nicht im Shop“, „Das passt dazu“, die Arten auf den Karten (Liederbuch, CD, Geschenk …), die neuen Kategorienamen, die
Namensform „Guitar-Factory 06/2023 · Hold me“ und „Liedpostkarten-Set (alle Motive)“.
**Beschreibung CD 2:** Verlagstext, nur die Fehler aus Fund 17 berichtigt (Doppelung gelöscht, „Love is“, „Hoffnung“), „euren
Resonanzen“ → „den Rückmeldungen“, die Hinweise „Hörprobe auf healingsongs.de“ (ohne Link) weggelassen. Klappentexte von
Verlagen werden sonst nicht umgeschrieben (auch nicht gegendert).

---

## 5. Fotos

Im Shop gibt es **keine Stimmungsfotos**, nur Produktbilder (Cover, Postkarten, Tasche). Sie stehen auf weißen Kacheln mit
20 px Rundung – das Cover selbst wird nicht beschnitten.

| Datei | Wo | Herkunft (Wix-Medien) | Geprüft |
|---|---|---|---|
| `sh-buch-heilsame-lieder.jpg` | Raster, „Das passt dazu“ | Produkt „Das Buch der heilsamen Lieder“, `c14a34_a2cd15…png` | pHash gegen alle 92 Dateien in `fotos/`: kleinster Abstand 22 |
| `sh-buch-heilsame-lieder-2.jpg` | Raster | „Das Buch der heilsamen Lieder II“, `c14a34_e7c221…png` | 22 |
| `sh-come-together-4.jpg` | Raster | „Come together Songs – Band IV“, `c14a34_94d64e…png` | 22 |
| `sh-cd-heilsame-lieder-2.jpg` | Raster, Produktseite | „Heilsame Lieder CD 2“, `7530fd_5e9fe4…jpg` | 22 |
| `sh-cd-heilsame-lieder-1.jpg` | „Das passt dazu“ | „Heilsame Lieder CD 1“, `7530fd_075e83…jpg` | 20 |
| `sh-ich-schenke-dir.jpg` | Raster, „Das passt dazu“ | „Ich schenke dir ein Lied“, `7530fd_014500…jpg` | 20 |
| `sh-postkartenset.jpg` | Raster | „Liedpostkartenset-komplett“, `c14a34_612a4b…jpeg` | 22 |
| `sh-tragetasche.jpg` | Raster | „Tragetasche“, `7530fd_9fbbb4…png` | 24 |
| `sh-liedblatt-gitarre.jpg` | Raster | Grafik der Guitar-Factory, `7530fd_2bac06…png` | **18** zu `uu-lombardo.jpg` → mit dem Auge verglichen: Grafik mit Gitarre ↔ Porträtfoto mit Gitarre, **kein Doppel** |
| `mg-sandra.jpg` | Fragen zur Bestellung | wie Mitglied sein, Kontakt | **begründete Ausnahme:** Porträts bleiben überall gleich |

**Untereinander:** Buch I ↔ Buch II Abstand 6, CD 1 ↔ CD 2 Abstand 10 – mit dem Auge verglichen: **verschiedene Cover derselben
Reihe** (gleiche Gestaltung, anderer Titel und Farbe), kein Doppel. PNGs mit Transparenz wurden für die Vorschau auf Weiß
gesetzt und auf höchstens 700 px verkleinert; in Wix die Originale verwenden.
**Bildqualität in Wix** (Fund 14): Die 12 CD-Cover mit 231 × 231 px bei Gelegenheit gegen größere Scans tauschen (mind. 800 px);
Bezugsquelle sind die Verlage bzw. Künstler:innen. Zwei Produkte mit gleichem Bild (CD 1 / CD 2 zu Liederbuch I) brauchen je
ihr eigenes Cover. **Einwilligungen:** Auf Covern und dem Postkarten-Foto sind Personen abgebildet; die Bilder stammen von den
Verlagen und sind für den Verkauf gedacht – kein weiterer Handlungsbedarf, solange sie nur im Shop stehen.

---

## 6. Neue Bausteine, Umsetzung in Wix, Pflege

Farben, Schrift, Rundungen wie in `DESIGN-foto.md`; Kopf ohne Titelfoto wie Downloads; Ansprechperson mit Foto wie Für
Einrichtungen; Aufklapptext wie Mitglied sein; Verweisliste wie Downloads; Ansicht-Schalter nur Vorschau (wie Veranstaltung).
**Neu auf dieser Seite:**

| Baustein | Aussehen | Begründung |
|---|---|---|
| **Produktkarte** | quadratische weiße Kachel, 20 px Rundung, Bild eingepasst (nicht beschnitten); darunter Art (klein, Blattgrün), Name, Preis fett; kein Knopf | Cover haben verschiedene Formate; „das Bild ist die Karte“ |
| **Kategorienliste** | links, Einträge mit Anzahl, gewählte Kategorie fett mit gelber Unterstreichung (wie Filter auf Weiterbildung) | man sieht sofort, wie viel es gibt |
| **Kaufbereich** | Preis groß mit Hinweis „inkl. MwSt., zzgl. Versandkosten“, runde Anzahl-Auswahl, gelbe Pille | ein klarer nächster Schritt |

### Gestaltung: heute → neu (Werte für die Wix-Einstellungen)

| Einstellung in Wix Stores | heute | neu |
|---|---|---|
| Schrift Titel / Kategoriename | Avenir Light, 54 px **fett** | **PT Sans Regular 400**, 56–64 px (Handy 38 px) |
| Schrift Produktname, Text, Preis | League Spartan Light 16 px | **PT Sans**, Name 20 px Regular, Preis 18 px **fett**, Text 18 px |
| Knopf „In den Warenkorb“ | Anthrazit `#333333`, Schrift Creme, 10 px Rundung, Hover Gelb 70 % | **Logo-Gelb `#EFB110`**, Schrift **Anthrazit `#393434`** fett 17 px, **ganz rund** (100 px), Hover `#DCA00A` |
| Knopf in der Übersicht | an | **aus** (Entscheidung 6) |
| Hintergrund Seite / Karte | Creme `#FFFAF1` / durchsichtig | **Leinen `#F5F3E8`** / Bildfläche **Weiß** |
| Bildrundung | 0 | **20 px** |
| Bildmodus | – | **Einpassen** („Fit“), nicht Zuschneiden |
| Schriftfarbe | `#333333` | **Anthrazit `#393434`** |
| Etikett (Ribbon) | Dunkelbraun | Logo-Gelb, Anthrazit-Schrift (nur wenn nötig, z. B. „Neu“) |
| Spalten / Produkte pro Seite | 4 / 20, Seitenzahlen | 4 / 20, Seitenzahlen (bleibt) |

### Umsetzung in Wix – Schritt für Schritt

> Wie bei allen Seiten: zuerst an der **duplizierten Website** testen (Wix-Dashboard → Website → „Website duplizieren“).
> Die Namen der Menüpunkte in Wix können leicht abweichen – sinngemäß suchen.

1. **Sofort (auch ohne Neugestaltung), ca. 1 Stunde:** *Dashboard → Shop-Produkte*:
   – bei den 19 Produkten aus Fund 1 die drei Zusatzinfos **PRODUKTINFO, RÜCKGABERICHTLINIE, VERSANDINFO löschen**;
   – „Stimmwunder und Körperglück“: Gewicht **0,248** statt 248 (Fund 8);
   – Videokurs 1: den Outlook-Link durch `https://www.singende-krankenhaeuser.de/product-page/heilsame-lieder-mit-der-gitarre-begleiten-tina-elay-ilka-röhling` ersetzen (Fund 19);
   – Benefiz-Pin: Satz mit „Corona-Zeit“ streichen; Tragetasche: „NEU“ aus dem Namen; CD 2: doppelten Absatz löschen (Fund 17).
2. **Region:** *Einstellungen → Sprache und Region* auf **Deutsch (Deutschland)** – dann steht der Preis als „18,00 €“ (Fund 21;
   gleiche Einstellung wie bei Wix-Events, `SEITE-veranstaltung.md`, Schritt 3).
3. **Kategorien** (*Dashboard → Shop-Produkte → Kategorien*): umbenennen nach Entscheidung 5. Im Editor auf der
   Kategorieseite → Baustein anklicken → *Einstellungen → Filter*: nur **einen** Filter „Kategorien“, Titel so benennen,
   „Individueller Filter“ löschen.
4. **Vorlage „Kategorieseite“ gestalten** (Editor → *Seiten → Shop-Seiten → Kategorieseite* → Baustein → *Einstellungen*):
   *Design* nach der Tabelle oben; *Anzeigen*: „In den Warenkorb“ **aus**, Schnellansicht aus, Kategorienliste an,
   Sortierung an. Oberhalb des Bausteins den heutigen Textkasten („UNSER SHOP“, „Weltweiter Versand …“) durch Titel,
   Einleitung und Hinweiskasten ersetzen (Texte aus der Vorschau). **Hinweis Preis:** In den Shop-Einstellungen
   (*Einstellungen → Shop → Produkte*) den Hinweis „Steuern inklusive“ und „Versand wird an der Kasse berechnet“ einschalten
   (Fund 6; Wortlaut prüfen).
5. **Vorlage „Produktseite“ gestalten:** Baustein → *Design* nach der Tabelle; *Anzeigen*: Artikelnummer an, Teilen an
   (Facebook, WhatsApp, E-Mail; Pinterest und X aus), „Ähnliche Produkte“ an (3 Stück). Unter dem Baustein einen
   **festen Bereich „Gut zu wissen“** mit drei Aufklapptexten anlegen (Entscheidung 7) und den Salbei-Bereich „Fragen zur
   Bestellung“ mit Sandra. An zwei verschiedenen Produkten prüfen, dass die Bereiche erscheinen.
6. **Adressen aufräumen** (Fund 9): die 6 Produkte mit `kopie-von-…` umbenennen (*Produkt → SEO → URL*), z. B.
   `ukulele-factory-25-04-blues-pdf`. Danach *Marketing & SEO → SEO-Tools → URL-Weiterleitungen*: alte → neue Adresse (301); die sechs alten Adressen stehen in `SEITE-aufraeumen.md`, Abschnitt 3, Gruppe C.
   Genauso für geänderte Kategorie-Adressen.
7. **Bestellweg vereinheitlichen** (Entscheidung 3): in den 23 Beschreibungen den Satz „Bestellung bitte per E-Mail …“ löschen.
8. **Liedblätter digital** (Entscheidung 4): je Produkt *Produktart → Digitales Produkt*, PDF hochladen, Zusatzinfo „Download“
   ändern in „Nach der Zahlung bekommst du den Download-Link per E-Mail.“ Mit **einem** Produkt anfangen und eine Testbestellung
   machen (Zahlung als „bezahlt“ markieren, kommt der Link an?).
9. **Reihenfolge** (Entscheidung 6): *Dashboard → Shop-Produkte → Kategorie „Alle Produkte“ → Sortieren* per Ziehen.
10. **SEO:** Website-Name „Sikra Deutschland“ (betrifft alle Seiten, `SEITE-veranstaltung.md`, Schritt 3); je Kategorie eine
    Beschreibung für Google (ein Satz); Produktbeschreibungen für Google nur bei den 10 meistverkauften Produkten (spart Zeit).
11. **Handy-Ansicht prüfen**, dann **Abnahme:** Sandra (Bestellweg, Texte, Reihenfolge), Sonja und Vorstand (Gesamtbild).

**Aufwand grob:** Schritt 1–3 etwa 2 Stunden, 4–5 etwa 2–3 Stunden, 6–9 etwa 3 Stunden (19 PDFs hochladen). Kein Geld nötig.

### Pflege-Ablauf

| Wann | Was | Wer |
|---|---|---|
| neues Produkt | anlegen mit Name nach Muster („Guitar-Factory MM/JJJJ · Liedtitel“, „Liedpostkarte ‚…‘“), **Artikelnummer** (nächste freie), Gewicht in **kg**, Kategorie, Bild mind. 800 px, Beschreibung in Du-Form (Verlagstexte bleiben), keine E-Mail-Bestellhinweise. **Beim Duplizieren** Adresse (URL) prüfen – kein `kopie-von` | Sandra |
| Liedblatt zu einem neuen Factory-Abend | Produkt duplizieren, Name, Adresse, PDF tauschen, Artikelnummer | Sandra (PDF liefert Tom) |
| Preis- oder Versandänderung | im Produkt bzw. in den Versandregeln; ändert sich etwas an AGB-Inhalten, Text „Gut zu wissen“ nachziehen | Sandra, Freigabe Sonja |
| Produkt ausverkauft oder eingestellt | ausblenden („Im Shop anzeigen“ aus) statt löschen; nach einem Jahr löschen und Adresse auf die Kategorie umleiten | Sandra |
| halbjährlich | eine Testbestellung bis vor „Kaufen“, Links in Beschreibungen (Hörproben, fremde Seiten) durchklicken | Tom |

**Einsparmöglichkeit Pflege:** Die 11 einzelnen Liedpostkarten könnten **ein** Produkt mit Auswahl „Motiv“ werden (Wix:
*Produktoptionen*, jedes Motiv mit eigenem Bild). Das spart 10 Produktseiten in der Pflege. Nachteil: Alte Adressen brauchen
Umleitungen, und Google findet die einzelnen Karten schlechter. Entscheidung durch Sandra (Abschnitt 7, Punkt 8).

---

## 7. Offene Punkte – vor der Veröffentlichung klären

1. **Rechtstexte für den Shop** (*fachliche Einschätzung, keine Rechtsberatung*): veraltete Widerrufsbelehrung (Fund 7), Hinweis
   bei digitalen Inhalten (Entscheidung 4), fehlende „Seite Versand“ (Fund 5), Hinweis „inkl. MwSt., zzgl. Versand“ (Fund 6),
   Widerrufs-Knopf auch für Shop-Käufe. **Nicht einzeln beauftragen**, sondern in den gemeinsamen Rechtstexte-Auftrag geben
   (`SEITE-rechtliches.md`, Abschnitt 7, Punkt 1; `SEITE-anmeldung.md`, Abschnitt 7, Punkt 3). **Spartipp:** ein Auftrag für alle
   Rechtstexte ist günstiger als mehrere. → Vorstand (Martin, Paula), Tom.
2. **Ausland und Versandkosten:** Die AGB sagen „nur innerhalb Deutschlands“, die Shopseite „weltweiter Versand digitaler
   Produkte“ (Fund 4). Was soll gelten – auch für Österreich und die Schweiz? Und wie hoch sind die Versandkosten? (Sie gehören
   vor die Kasse, Fund 5.) → Sandra, Sonja.
3. **Videokurse digital?** Lässt sich der Zugang zu den Videokursen als Datei ausliefern, oder bleibt es beim Link von Hand
   (Entscheidung 4)? → Sandra mit Tina Elay.
4. **Wohin geht der Erlös der Benefiz-CD „Kinderlieder für Rumänien“?** Der Text nennt das Psychiatrie-Projekt von 2014, Über
   uns das heutige Projekt (Fund 18). Text anpassen, sobald geklärt. → Sonja.
5. **Kasse ansehen** (aus dieser Umgebung nicht möglich): Welche Zahlungsarten bietet die Kasse an (AGB: „ausschließlich
   Vorkasse“)? Wie heißt der Bestellknopf (AGB: „Kaufen“; „zahlungspflichtig bestellen“, `SEITE-anmeldung.md`, Punkt 2)?
   Welche Versandregeln sind eingestellt (nach Gewicht? Fund 8)? → Tom (einmal bis vor „Kaufen“ durchklicken).
6. **Mitgliederrabatt im Shop** – bewusst nicht (Fund 20)? Wenn doch: Wix-Gutscheincode, dann auf Mitglied sein erwähnen.
   → Sonja.
7. **Lohnt der Shop?** Umsatz und Anzahl Bestellungen der letzten 12 Monate ansehen (*Dashboard → Analysen → Verkäufe*).
   Produkte, die in zwei Jahren nicht verkauft wurden, ausblenden – spart Pflege und macht den Shop übersichtlicher. Auch
   klären, ob alle 93 Produkte wirklich vorrätig sind (Lagerbestand ist nicht eingeschaltet). → Sandra, Sonja.
8. **Liedpostkarten zusammenlegen?** (Pflege-Ablauf, Einsparmöglichkeit) → Sandra.

---

## 8. Checkliste für diese Seite

- [ ] Keine Wix-Platzhaltertexte mehr (PRODUKTINFO, RÜCKGABERICHTLINIE, VERSANDINFO)?
- [ ] Ein Bestellweg: kein „Bestellung bitte per E-Mail“ mehr in den Produkten?
- [ ] Kategorien: „Alle Produkte“, „CDs“, „DVDs“, „Geschenke & Postkarten“, „Liedblätter (PDF)“; ein Filter „Kategorien“?
- [ ] Liederbücher stehen in der Übersicht vorn; kein Warenkorb-Knopf auf den Karten?
- [ ] Knopf „In den Warenkorb“ gelb, rund, Anthrazit-Schrift; Schrift PT Sans, Überschriften nicht fett?
- [ ] Produktbilder mit 20 px Rundung, eingepasst, auf Weiß?
- [ ] Preis mit „inkl. MwSt., zzgl. Versandkosten“, Format „18,00 €“ (Region Deutschland)?
- [ ] Fester Bereich „Gut zu wissen“ und „Fragen zur Bestellung“ unter jedem Produkt?
- [ ] Keine `kopie-von`-Adressen; alte Adressen umgeleitet?
- [ ] Gewicht „Stimmwunder“ korrigiert, Outlook-Link ersetzt?
- [ ] Liedblätter als digitales Produkt getestet (Testbestellung)?
- [ ] Fußzeile mit „Shop“ und „Vertrag widerrufen“; kein Menüpunkt unterstrichen?
- [ ] Handy geprüft, kein seitliches Scrollen?
- [ ] Punkte 1, 2 und 5 aus Abschnitt 7 vor dem Veröffentlichen geklärt?
- [ ] Checkliste aus `DESIGN-foto.md`, Abschnitt 7, erfüllt?
