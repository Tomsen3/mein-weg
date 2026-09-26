# SEITE-veranstaltung.md – Veranstaltungsseiten (Wix-Events-Vorlage) im Stil „Foto“

Stand: 26.09.2026 · Verantwortlich: Tom (Webseite/Marketing, IT)
Vorschau: `skh-design/vorschau-foto-veranstaltung.html` (im Browser öffnen, Ordner `fotos/` muss daneben liegen). Oben in der
Vorschau gibt es einen Schalter „Anmeldung offen / Termin vorbei / Abgesagt“ – er zeigt, wie dieselbe Vorlage in den drei
Zuständen aussieht. Den Schalter gibt es nur in der Vorschau, nicht in Wix.
Stilregeln: `DESIGN-foto.md` · Bausteine für Unterseiten: `SEITE-weiterbildung.md`, Abschnitt 5, `SEITE-sing-mit.md`, `SEITE-einrichtungen.md`, `SEITE-termine.md`, `SEITE-kontakt.md` und `SEITE-anmeldung.md`, jeweils Abschnitt 6 ·
Nachbarseiten: `vorschau-foto-termine.html` (von dort kommt man meistens hierher), `vorschau-foto.html` (Start, Band 4), `vorschau-foto-weiterbildung.html` (Modul-Liste), `vorschau-foto-anmeldung.html` (Ziel des Knopfs „Anmelden“) · Ist-Zustand: `IST-STRUKTUR.md`

Dieses Dokument erklärt, **was die Veranstaltungsseiten heute sind, was beim vollständigen Auslesen aller 40 Seiten aufgefallen
ist, wie die neue Vorlage aussieht, welche Seite für welche Information zuständig ist und wie man das in Wix umsetzt und
pflegt**. Eine Person ohne Vorkenntnisse soll damit arbeiten können.

**Was eine „Veranstaltungsseite“ ist:** Jede Veranstaltung, die in der Wix-App **Wix-Events** angelegt wird, bekommt automatisch
eine eigene Seite mit der Adresse `/event-details/<name>` (Beispiel: `/event-details/modul-f-mit-der-stimme-zur-starke`). Alle
diese Seiten haben **eine gemeinsame Vorlage** (in Wix: Seite „Veranstaltungsdetails“). Wer die Vorlage gestaltet, gestaltet
alle Veranstaltungsseiten auf einmal – die Inhalte (Titel, Datum, Ort, Text, Bild) kommen aus den Feldern der jeweiligen
Veranstaltung. Dazu gehört außerdem die Listenseite `/veranstaltungen`, die Wix-Events beim Einrichten selbst angelegt hat.

**Rolle der Seite:** Die Veranstaltungsseite beantwortet **„Was genau passiert bei diesem einen Termin – und wie komme ich
hin?“**. Hauptort ist sie für die **Beschreibung eines einzelnen Moduls oder Treffens** (Inhalt, Leitung, Zielgruppe, genaue
Zeiten, Ort, Modul-PDF). Anmeldung, Kosten und Gesamtkalender stehen woanders; die Seite fasst sie in einem Satz zusammen und
verlinkt dorthin (Grundregel aus `DESIGN-foto.md`, Abschnitt 4).

**Zielgruppen:** (1) Interessierte, die auf „Termine“, der Startseite oder „Weiterbildung“ auf „Details & anmelden“ geklickt
haben, (2) Menschen, die über Google oder einen geteilten Link direkt auf einer Veranstaltung landen – auch auf alten, (3)
Angemeldete, die Zeiten und Ort nachsehen.

**Kopfleiste:** Die Veranstaltungsseiten gehören zu **Termine** – dort ist der Menüpunkt gelb unterstrichen.
Brotkrumen: „Start › Termine › <Titel der Veranstaltung>“.

---

## 1. Ausgangslage – was es heute gibt

Ausgelesen am 26.09.2026: alle 40 Adressen aus der Sitemap `event-pages-sitemap.xml`, jeweils der Seitenquelltext (Wix liefert
die Veranstaltungsdaten dort als JSON im Block `EventsPageInitialState`), dazu die Liste `/veranstaltungen`, die an die
Veranstaltungen angehängten PDFs und drei Seiten im Browser (offene, vergangene, abgesagte Veranstaltung).

### Was auf jeder Veranstaltungsseite steht (heutige Vorlage)

Von oben nach unten: altes Menü (11 Punkte) · ein schmaler Fotostreifen (`7530fd_8ce0249…png`, 212 × 473 px, auf die ganze Breite
gezogen, deshalb unscharf) · Datum und Ort in einer Zeile („Fr., 16. Okt. | Kloster Oberzell 2“) · **Titel** · **Kurzbeschreibung**
(ein Satz) · Knopf **ANMELDEN** · „Zeit & Ort“ · „Über die Veranstaltung“ mit **nur einer PDF-Datei** und dem Knopf „Mehr anzeigen“
· noch einmal ANMELDEN · „Diese Veranstaltung teilen“ (Facebook, X, LinkedIn) · alte Fußzeile.
Bei vergangenen und abgesagten Veranstaltungen steht statt ANMELDEN „Anmeldung geschlossen“ und der Knopf „Jetzt andere
Veranstaltungen ansehen“ (führt auf `/veranstaltungen`).

### Die 40 Veranstaltungen

| Zustand in Wix-Events | Anzahl | Welche |
|---|---|---|
| **kommend**, Anmeldung offen (externer Link) | 3 | Modul F „Mit der Stimme zur Stärke“ 16.–18.10.2026 · Modul P „Singen als Dialog“ 30.10.–01.11.2026 · Come-together 04.–06.12.2026 |
| **abgesagt** | 4 | **Modul V „Mit dem Herzen pflegen“ 23.–25.10.2026, Einbeck** (Melanie Wilde, Paula Bieker) · **Modul F „Kraftquelle“ 16.–18.10.2026, Hofgeismar** (Norbert Hermanns, Elke Ohlwein) · Modul P2 28.–30.11.2025 (Doppel) · Guitar-Factory 02.07.2025 |
| **vorbei** | 33 | 23 aus 2025, 10 aus 2026 (letzte: Modul IV, 18.–20.09.2026) |

Alle 40 Seiten sind für Suchmaschinen freigegeben (`robots: index`) und stehen in der Sitemap – auch die abgesagten.

### Funde beim Auslesen

| Nr. | Fund | Wo / Beleg | Folge |
|---|---|---|---|
| 1 | **Anmelden** führt bei 36 Veranstaltungen auf `https://sonjaheim9.wixsite.com/my-site-3/anmeldung` – eine kostenlose Wix-Adresse (vermutlich eine ältere Kopie der Webseite). Aus dieser Umgebung nicht erreichbar (vom Netzwerk-Filter gesperrt), daher ungeprüft, ob sie umleitet. | Feld `registration.external` | Entscheidung 3; Abschnitt 7, Punkt 4 |
| 2 | Zwei vergangene Österreich-Veranstaltungen (2025) verlinken ein Anmelde-PDF auf **Jimdo** (alte Webseite). Das Österreich-Online-Modul A (Jan. 2026) verlinkt **Toms persönliches OneDrive** (`…-my.sharepoint.com/personal/tom_jansen…`). | wie oben | persönliche Ablage ist kein Ort für öffentliche Links (verschwindet, wenn das Konto sich ändert). Entscheidung 3 |
| 3 | **Modul V „Mit dem Herzen pflegen“ steht in Wix-Events – als abgesagt.** Bisher hieß es, es fehle dort (`SEITE-termine.md`, Punkt 2; `SEITE-anmeldung.md`, Punkt 7). Das angehängte PDF „26 Modul V.pdf“ ist gelöscht (Download ergibt „Seite nicht gefunden“). | Status `3` = abgesagt, Google-Daten `EventCancelled` | Die Frage „Findet es statt?“ ist damit fast beantwortet: **nein** – Vera bestätigt (Abschnitt 7, Punkt 1) |
| 4 | **Der falsche Modul-F-Eintrag im Flyer ist eine abgesagte Planung:** In Wix-Events steht für denselben Termin (16.–18.10.2026) noch „Modul F · Kraftquelle“ in Hofgeismar, **abgesagt**. Ersetzt wurde es durch „Mit der Stimme zur Stärke“ in Zell am Main. | zwei Veranstaltungen mit gleichem Datum | erklärt den Flyer-Fehler (`SEITE-termine.md`, Punkt 3) |
| 5 | **Abgesagte Veranstaltungen sehen aus wie vergangene:** Die Seite sagt nur „Anmeldung geschlossen“, nirgends „abgesagt“. Wer über Google auf „Modul F · Kraftquelle“ kommt, glaubt, das Modul sei ausgebucht. | Browser-Ansicht der abgesagten Seite | Entscheidung 6 |
| 6 | **Die eigentliche Beschreibung steht nur im PDF.** Das Feld „Über die Veranstaltung“ ist bei allen 39 Modulen leer bis auf das angehängte PDF. Auf dem Handy muss man das PDF öffnen; Google und Vorleseprogramme finden den Inhalt nicht. | Feld `longDescription` | Entscheidung 4 |
| 7 | **Leitung uneinheitlich:** 19 Veranstaltungen nennen „Leitung: …“ in der Kurzbeschreibung, die 3 kommenden nicht (nur im PDF). | Feld `description` | Entscheidung 4 (feste Zeile „Leitung“) |
| 8 | **Ortsangaben:** Ortsname mal Hausname („Gästehaus Sonnenberg“), mal Stadt („Hofgeismar“), mal Adresse („Kloster Oberzell 2“). Modul F nennt „Kloster Oberzell **2**“, frühere Module „Haus Klara, Kloster Oberzell **1**“. Im Hintergrund steht bei fast allen Orten die Stadt **„Bad Herrenalb“** (auch bei Wien, Einbeck, Zell am Main) – die Adresse wurde offenbar aus einer Vorlage kopiert und nur der sichtbare Text geändert. Zwei Einträge in Einbeck nennen verschiedene Straßen (Hubeweg 23 / Am Brockenblick 2). | Feld `location` | Abschnitt 6, Schritt 7; Abschnitt 7, Punkt 2 |
| 9 | **Österreichische Monatsnamen:** Die App ist auf Deutsch (Österreich) eingestellt – deshalb „23. **Jänner** 2026“. Zeitzone Wien (gleiche Uhrzeit wie Berlin, also kein Fehler). | `locale: de-AT` | Abschnitt 6, Schritt 3 |
| 10 | **Gästeliste öffentlich** ist bei allen 40 eingeschaltet. Bei „externem Link“ gibt es keine Gäste in Wix; bei der Guitar-Factory lief die Anmeldung aber **über Wix (Zusage per Formular)** – dort wäre die Liste der Angemeldeten für alle sichtbar gewesen. | `guestListConfig.publicGuestList` | Abschnitt 6, Schritt 3; Abschnitt 7, Punkt 3 |
| 11 | **Keine Kategorien** vergeben (bei allen 40 leer). Ohne Kategorien funktioniert der Filter nach Art auf „Termine“ und nach Zweig auf „Weiterbildung“ nicht. | Feld `categories` | schon beschrieben in `SEITE-termine.md`, Abschnitt 6, Schritt 2 |
| 12 | **Doppelte Veranstaltungen:** Modul P2 (Nov. 2025) zweimal (eine abgesagt), Online-Modul 1 „Singen als Co-Regulation“ viermal (Jan., Feb., März, Apr. 2025, als Einzelabende angelegt). Zwei Adressen in der Sitemap enden auf `/form` (Formular-Unterseite statt Veranstaltung). | Sitemap | Abschnitt 6, Schritt 6 |
| 13 | **Uneinheitliche Titel:** Trennzeichen „\|“ (meist), „I“ („Modul P2 I Praxismodul“), „–“ (Sommerakademie); Anführungszeichen gemischt. Tippfehler: „Fatigué“ (Online-Modul 1), „belastenden Kindern“ (Modul A/B „Bitte hör nicht auf zu träumen“, gemeint: belasteten), „Elke Oelwein“ (richtig laut PDF und Dozent:innen-Seite: Ohlwein). „Achtung!!! Das Modul wird nicht auf die Weiterbildung angerechnet.“ bei Come-together und Sommerakademie. | Titel, Kurzbeschreibung | betrifft fast nur Vergangenes; Pflegeregel in Abschnitt 6 |
| 14 | **Titelfoto doppelt:** Das Hauptbild von Modul F ist dasselbe Foto wie das Titelfoto der neuen Seite „Termine“ (`tm-titel.jpg`, pHash-Abstand 0). Das Bild von Modul P ist das Foto der Startseite, Frage 1; Come-together das Foto „draußen“ der Landkarte. | pHash-Vergleich | Abschnitt 5 |
| 15 | **Seitentitel für Google** endet auf „\| **Sikra Deutschland**“ (Beispiel: „Modul F \| Mit der Stimme zur Stärke \| Sikra Deutschland“). „Sikra“ ist Vereinskürzel; nach außen heißt der Verein „Singende Krankenhäuser e.V.“ | `og:site_name` | Abschnitt 6, Schritt 3 (Website-Name in den SEO-Einstellungen) |
| 16 | Der Fotostreifen oben ist ein kleines Bild (212 × 473 px), das auf 1200 px gezogen wird – wirkt verschwommen. | Seitenelement `WPhoto` | entfällt in der neuen Vorlage |

### Die Liste `/veranstaltungen`

Überschrift „Bevorstehende Veranstaltungen“, darunter die 3 kommenden Veranstaltungen mit den Knöpfen **„Mehr Infos“** und
**„Antworten“** (so hat Wix das englische „RSVP“ übersetzt – für Besucher:innen unverständlich), danach **alle vergangenen**
Veranstaltungen rückwärts mit „Details“, Daten ohne Jahreszahl, und „Mehr laden“. Die abgesagten fehlen dort. Kein Menüpunkt
führt dorthin; die Seite steht aber in der Sitemap, und jede vergangene Veranstaltung verlinkt sie („Jetzt andere
Veranstaltungen ansehen“). Sie zeigt dasselbe wie der Kalender auf „Termine“, nur schlechter.

### Die angehängten PDFs (die drei kommenden und zwei abgesagte gelesen)

| PDF | Inhalt | Fund |
|---|---|---|
| 26_Modul F.pdf („Mit der Stimme zur Stärke“, Jan. 2026) | Zitat Menuhin, Beschreibung, Anwendungsbezug, 5 Seminarziele, Zielgruppe, 320 € / 272 €, Fr 18:00 – So 13:00; Leitung Jan Henning Foh, Monika Ananda Wiese; Zell am Main | Ansprache „euch“, „SinggruppenleiterIn“ |
| 26_Modul P.pdf (Okt. 2025) | Beschreibung, 3 Seminarziele, Zielgruppe, „Pflichtmodul“, Empfehlung als Abschlussmodul; Leitung Elke Wünnenberg, Kordula Voss; Hofgeismar | „Singleiter/in“, „Therapeuten“ nicht gegendert |
| 26 Come-together.pdf (Okt. 2025) | „Singleiter-Austausch“, Embodiment, Zielgruppe praktizierende Singleiter:innen, 320 € / 272 €; Thomas Jüchter, Monika Ananda Wiese; Hellenthal | – |
| 26_Modul F.pdf („Kraftquelle“, abgesagt) | Psychoonkologie, Hermanns/Ohlwein, Hofgeismar | Quelle des falschen Flyer-Eintrags |
| 26 Modul V.pdf (abgesagt) | – | Datei gelöscht, Link ins Leere |

---

## 2. Gliederung und Hauptorte – Entscheidungen und Begründung

### Entscheidung 1: **Nur die Vorlage gestalten** (Vorschlag aus `DESIGN-foto.md`, Abschnitt 5, bestätigt)

Wix-Events hat **eine** Vorlage für alle Veranstaltungsseiten. Gestaltet wird also einmal, und alle 40 heutigen und alle künftigen
Veranstaltungen sehen gleich aus. Einzelne Veranstaltungen bekommen nur ihre **Inhalte** (Felder in Wix-Events).
**Begründung:** geringster Aufwand, keine Pflege je Seite. Was die Vorlage nicht kann (siehe Abschnitt 6, „Grenzen von
Wix-Events“), wird bewusst in Kauf genommen.

### Entscheidung 2: **`/veranstaltungen` wird auf `/termine` umgeleitet**

**Begründung:** Die Liste zeigt dieselben Veranstaltungen wie „Termine“, aber ohne Schnupperkurse, Jahrestagung und Vorschau,
mit dem unverständlichen Knopf „Antworten“ und mit allen alten Terminen. „Termine“ ist Hauptort für den Gesamtkalender
(`SEITE-termine.md`, Abschnitt 2). Zwei Listen würden sich auseinanderentwickeln.
**Technischer Haken:** Wix leitet eine Adresse nur um, wenn unter ihr **keine Seite mehr** liegt. Die Seite „Veranstaltungen“
gehört aber zur App. Deshalb (Abschnitt 6, Schritt 9): Seite umbenennen (Adresse `/veranstaltungen-liste`), auf „nicht
indexieren“ stellen, dann `/veranstaltungen` → `/termine` umleiten. Der Wix-Knopf „Jetzt andere Veranstaltungen ansehen“ zeigt
danach auf die umbenannte Seite – das ist akzeptabel, weil die neue Vorlage zusätzlich einen eigenen Link „Alle Termine →“
hat. **Vorher an der Kopie der Website ausprobieren**; geht das Umbenennen nicht, reicht als Notlösung „nicht indexieren“.

### Entscheidung 3: **„Anmelden“ führt auf `/anmeldung`** – Österreich auf die österreichische Seite

Alle Veranstaltungen in Deutschland: *Anmeldung → externer Link* `https://www.singende-krankenhaeuser.de/anmeldung`
(so schon `SEITE-anmeldung.md`, Entscheidung 1: ein Formular für alle Module, Wix-Events bleibt Terminquelle).
Veranstaltungen in Österreich: externer Link `https://www.singende-krankenhaeuser.at` (Anmeldung bei Sybille Mikula).
**Nicht mehr verwendet:** `sonjaheim9.wixsite.com`, Jimdo-PDF, persönliche OneDrive-Links.
**Warum nicht direkt das passende Modul im Formular vorauswählen?** Das kann ein Wix-Formular nur mit Programmierung (Velo).
Der Aufwand lohnt nicht – im Formular sind ohnehin nur die offenen Module aufgelistet.

### Entscheidung 4: **Die Beschreibung steht als Text auf der Seite, das PDF bleibt als Download**

Bei jeder **kommenden** Veranstaltung wird der Text des Modul-PDFs in das Feld „Über die Veranstaltung“ übernommen, in fester
Reihenfolge: **Leitung · Weiterbildung (Zweig, Anrechnung) · Für wen**, dann der Beschreibungstext, dann „Das erwartet dich“
(die Seminarziele als Liste). Das PDF bleibt darunter als Download.
**Begründung:** Auf dem Handy liest man keinen PDF-Anhang; Google und Vorleseprogramme erfassen nur Text auf der Seite
(Barrierefreiheit). Aufwand: etwa 10–15 Minuten je Veranstaltung. **Sparhinweis:** Die Modul-PDFs haben eine Textebene – Text
kopieren statt abtippen. Vergangene Veranstaltungen werden **nicht** nachbearbeitet.
Dabei an die Webseite angleichen: „du“ statt „euch/Sie“, Gendern mit Doppelpunkt (Singleiter:in).

### Entscheidung 5: **Keine Preise in der einzelnen Veranstaltung**

Kursgebühr, Übernachtung, Verpflegung, Rücktritt stehen auf der Anmeldeseite (`#vorher`, Hauptort laut `SEITE-anmeldung.md`).
Unter jeder Veranstaltung steht ein **fester Bereich „Anmeldung & Kosten“** (einmal für alle angelegt) mit einem Satz und dem Link
„Kosten, Übernachtung, Rücktritt →“. Der feste Bereich nennt bewusst **keine Zahl**: Er steht unter allen Veranstaltungen, und
nicht jede kostet 320 € (Online-Module, Sommerakademie können abweichen). **Ausnahme:** Weicht eine Veranstaltung vom Standard ab,
bekommt sie im Text eine Zeile „Kosten: …“.

### Entscheidung 6: **Abgesagte Veranstaltungen werden als „Abgesagt“ gekennzeichnet und dann gelöscht**

Wix-Events zeigt bei abgesagten Veranstaltungen nur „Anmeldung geschlossen“ (Fund 5). Deshalb: (1) in Wix „Veranstaltung
absagen“, (2) die **Kurzbeschreibung** ändern in „Abgesagt: Dieser Termin findet nicht statt. …“ (erscheint im Titelkasten, siehe
Vorschau, Zustand „Abgesagt“), (3) Angemeldete benachrichtigen, (4) **nach 4 Wochen löschen**. Heute sofort löschbar
(nach Bestätigung von Vera): Modul F „Kraftquelle“ 2026, Modul P2 (Doppel), Guitar-Factory; Modul V erst nach Punkt 1 in Abschnitt 7.

### Entscheidung 7: **Vergangene Veranstaltungen bleiben ein Jahr stehen**

Vergangene Seiten schaden nicht: Die neue Vorlage zeigt „Anmeldung geschlossen“ und den Knopf „Nächste Termine ansehen“.
Sie dienen Teilnehmenden als Nachweis (Datum, Leitung). **Einmal im Jahr (Januar)** werden Veranstaltungen gelöscht, die älter
als ein Jahr sind. Folge: alte Links führen dann auf die Wix-Fehlerseite – bei über ein Jahr alten Terminen vertretbar.
Das spart jährliches Aufräumen einzelner Termine unter dem Jahr.

### Entscheidung 8: **Titelfoto ja – jede Veranstaltung ihr eigenes**

Veranstaltungsseiten sind **keine Service-Seiten** (anders als Downloads, Anmeldung): Das Hauptbild der Veranstaltung erscheint
groß im Kopf, mit Tiefgrün-Kasten rechts (die Person im Foto steht meist links). Regel wie überall: **jedes Foto nur einmal auf
der Webseite** – das Hauptbild einer Veranstaltung darf nicht zugleich Titelfoto einer anderen Seite sein (Fund 14, Abschnitt 5).
Wiederkehrende Module dürfen ihr Bild behalten (dasselbe Modul ein Jahr später ist dieselbe „Sache“).

### Hauptorte – was abgeglichen wurde

| Thema | Steht auch auf … | Hauptort | Auf der Veranstaltungsseite (Vorschau) | Grund |
|---|---|---|---|---|
| **Beschreibung eines einzelnen Termins** (Inhalt, Leitung, Zielgruppe, Zeiten, Ort, Modul-PDF) | Termine, Weiterbildung, Startseite (je eine Zeile), Downloads (Verweis) | **Veranstaltungsseite** | vollständig | Die anderen Seiten zeigen nur Titel, Datum, Ort und verlinken mit „Details & anmelden“ |
| **Anmeldeformular** | Weiterbildung | **Anmeldung** | Knopf „Anmelden“ (Kopf) und „Zur Anmeldung“ (fester Bereich) | ein Formular für alle Module |
| **Kosten, Übernachtung, Verpflegung, Rücktritt** | Weiterbildung, Modul-PDFs, AGB | **Anmeldung** (`#vorher`) | ein Satz + Link „Kosten, Übernachtung, Rücktritt →“ | Entscheidung 5 |
| **Anmeldung in Österreich** | Termine, Weiterbildung, Anmeldung | Geschäftsstelle Österreich | Hinweiskasten im festen Bereich | gleicher Satz wie auf der Anmeldeseite |
| **Weiterbildungsberatung** (Vera Kimmig) | Weiterbildung (`#beratung`), Anmeldung, Kontakt | Weiterbildung; Kontakt = Übersicht | Kasten „Fragen zum Modul? Vera Kimmig“ – **gleiches Porträt, Telefon, Sprechzeiten** wie Anmeldung und Kontakt | Regel aus `SEITE-kontakt.md`; wer vor der Entscheidung steht, soll nicht suchen müssen |
| **Porträts und Werdegänge der Dozent:innen** | Dozent:innen | **Dozent:innen** | nur Namen + „Zu den Dozent:innen →“ | Porträts nur an einer Stelle pflegen |
| **Gesamtkalender** | Startseite, Weiterbildung | **Termine** | 3 nächste Termine (automatisch) + „Alle Termine →“ | gleiche Quelle Wix-Events |
| **Liste `/veranstaltungen`** | – | entfällt → **Termine** | – | Entscheidung 2 |

### Korrekturen auf den Nachbar-Vorschauen (26.09.2026)

| Seite | Stelle | Vorher | Nachher | Grund |
|---|---|---|---|---|
| Startseite | Band 4, Modul F „Details & anmelden →“ | `#` | → `vorschau-foto-veranstaltung.html` | Vorschau der Vorlage gibt es jetzt |
| Termine | Kalender (`#kalender`), Modul F „Details & anmelden →“ | `#` | → `vorschau-foto-veranstaltung.html` | wie oben |
| Weiterbildung | „Die nächsten Module“, Modul F „Details & anmelden →“ | `#` | → `vorschau-foto-veranstaltung.html` | wie oben |
| `SEITE-termine.md` | Abschnitt 7, Punkt 2 (Modul V) | „nicht in Wix-Events“ | Nachtrag: steht dort als **abgesagt** | Fund 3 |
| `SEITE-anmeldung.md` | Abschnitt 7, Punkt 7 (Modul V) | „fehlt in Wix-Events“ | Nachtrag: steht dort als **abgesagt** | Fund 3 |

Nicht geändert: Die übrigen „Details & anmelden“ (Modul P, Wien, Come-together, Österreich-Online-Modul) bleiben in den
Vorschauen `#` – sie würden auf dieselbe Vorlage führen, nur mit anderem Inhalt. „Anmelden“ zeigte schon auf die
Anmelde-Vorschau. Kopfleiste und Fußzeile (mit „Vertrag widerrufen“) sind aus `vorschau-foto-anmeldung.html` übernommen.

---

## 3. Aufbau von oben nach unten

Spalte „Woher“: **App** = kommt je Veranstaltung automatisch aus Wix-Events · **fest** = einmal auf der Vorlagen-Seite angelegt,
gleich für alle Veranstaltungen.

| Nr. | Fläche | Bereich (Sprungmarke) | Inhalt | Woher | Warum an dieser Stelle |
|---|---|---|---|---|---|
| – | Weizen | Hinweisleiste | Jahrestagung 2027 | Kopf aller Seiten | |
| 0 | Weiß | Kopfleiste | Logo, 6 Menüpunkte (**Termine** unterstrichen), „Mitglied werden“ | Kopf aller Seiten | gehört zu Termine |
| – | Leinen | Brotkrumen | „Start › Termine › Titel“ | fest (Titel: App, falls möglich – sonst nur „Start › Termine“) | Rückweg |
| 1 | Titelfoto + Tiefgrün-Kasten rechts | **Titel der Veranstaltung** | kleine Überschrift „Modul · Weiterbildung Singleitung“, Titel, Kurzbeschreibung, Datum und Ort, Knöpfe „Anmelden“ und „Worum es geht →“; bei vorbei/abgesagt: „Anmeldung geschlossen“ + „Nächste Termine ansehen“ | App | Die zwei Fragen beim Ankommen: *Was ist das? Kann ich mich anmelden?* |
| – | Leinen | Sprungleiste | Worum es geht · Anmeldung & Kosten · Fragen · Weitere Termine | fest | wie auf allen Unterseiten |
| 2 | Leinen | **Zeit & Ort** + **Worum es geht** (`#inhalt`) | links (bleibt beim Scrollen stehen): Wann, Wo, „Weg dorthin (Karte) →“, „Modulbeschreibung als PDF →“, Teilen; rechts: Leitung, Weiterbildung, Für wen, Zitat, Text, „Das erwartet dich“ (Häkchen-Liste) | App | der eigentliche Inhalt |
| 3 | Salbei | **So meldest du dich an** (`#anmelden`, `#fragen`) | ein gemeinsames Formular, ein Satz zu Kosten + Links, Hinweiskasten Österreich; rechts Kasten Vera Kimmig | fest | Entscheidung 5 |
| 4 | Leinen | **Das kommt als Nächstes** (`#weitere`) | 3 nächste Termine, Links „Alle Termine →“, „Kostenlos reinschnuppern →“, „Module nach Zweig filtern →“ | Wix-Element *Veranstaltungsliste* (fest eingefügt, Inhalt automatisch) | fängt auf, wer diesen Termin nicht kann |
| 5 | Tiefgrün | **Werde Teil des Netzwerks.** (`#mitglied`) | wie auf allen Seiten | fest | |
| – | Tiefgrün | Fußzeile | wie Startseite, mit „Vertrag widerrufen“ | Fußzeile aller Seiten | |

Bänder: Leinen → Salbei → Leinen → Tiefgrün.
**Handy:** Tiefgrün-Kasten rutscht unter bzw. über den unteren Fotorand, Zeit & Ort steht über dem Text, Vera unter dem
Anmeldetext. Geprüft bei 1280 px und 390 px: kein seitliches Scrollen.

**Die drei Zustände** (Schalter in der Vorschau):

| Zustand | Titelkasten | Wie es in Wix entsteht |
|---|---|---|
| Anmeldung offen | kleine Überschrift, Kurzbeschreibung, „Anmelden“, „Worum es geht →“ | automatisch bis zum Beginn |
| Termin vorbei | „Anmeldung geschlossen.“ + „Nächste Termine ansehen“ | automatisch nach dem Ende |
| Abgesagt | Etikett „Abgesagt“, Kurzbeschreibung „Abgesagt: Dieser Termin findet nicht statt …“, sonst wie „vorbei“ | Veranstaltung absagen **und** Kurzbeschreibung ändern (Entscheidung 6). Das weiße Etikett kann Wix nicht anzeigen – dort genügt das Wort „Abgesagt:“ am Anfang der Kurzbeschreibung. |

---

## 4. Woher die Inhalte stammen

| Bereich | Quelle |
|---|---|
| Titel, Kurzbeschreibung, Datum, Uhrzeit, Ort, Hauptbild, Zustand, Anmelde-Link | Wix-Events, Veranstaltung „Modul F \| Mit der Stimme zur Stärke“ (JSON im Seitenquelltext, 26.09.2026) |
| Leitung, Zitat Menuhin, Beschreibung, Seminarziele, Zielgruppe, 235 KB | PDF „26_Modul F.pdf“ (`7530fd_8a2ab8fb…pdf`, Stand 28.01.2026) |
| „Modul in beiden Zweigen“ | Vorschauen Termine und Weiterbildung (Etikett „beide Zweige“) |
| Vera Kimmig (Funktion, Telefon, Sprechzeiten, E-Mail) | Vorschau Anmeldung / Kontakt |
| Österreich-Hinweis | Vorschau Anmeldung (gleicher Wortlaut) |
| Nächste Termine (Modul P, Singen für die Seele, Come-together) | Vorschau Termine, Kalender |

**Selbst formuliert** (bitte bei der Abnahme gegenlesen): „Modul · Weiterbildung Singleitung“, „Worum es geht“, die Zeilen
„Weiterbildung: Modul in beiden Zweigen, zählt für das Zertifikat“ und „Für wen“ (gekürzt aus der Zielgruppe des PDFs),
„Das erwartet dich“ (umformuliert aus „In diesem Seminar möchten wir“, Aufzählung gekürzt), Ansprache von „euch“ auf „dich“
und „SinggruppenleiterIn“ auf „Singleiter:in“ umgestellt, der ganze feste Bereich „So meldest du dich an“, „Das kommt als
Nächstes“, der Abgesagt-Text, „Nächste Termine ansehen“ (statt Wix-Standard „Jetzt andere Veranstaltungen ansehen“),
„Weg dorthin (Karte) →“.

---

## 5. Fotos

| Datei | Wo | Herkunft | Geprüft |
|---|---|---|---|
| `ev-titel.jpg` | Titelfoto der Vorlage | Hauptbild der Veranstaltung **Modul D „PersSonare“** (Juli 2026, vorbei) in Wix-Events, `7530fd_78826481e40f4434a45b50248f00126d~mv2.jpg`, 1600 × 1022 px | pHash gegen alle 91 Fotos in `fotos/`: kleinster Abstand 20 (`wb-zweig-krankenhaus.jpg`), mit dem Auge verglichen → anderes Foto, kein Doppel |
| `uu-vera-kimmig.jpg` | Kasten „Fragen zum Modul?“ | wie Über uns, Kontakt, Landkarte, Anmeldung | **begründete Ausnahme:** Porträts bleiben überall gleich (`SEITE-ueber-uns.md`, Abschnitt 5) |

**Warum nicht das echte Bild von Modul F?** Es ist das Titelfoto der Seite Termine (`tm-titel.jpg`, Abstand 0). Die Vorschau
zeigt deshalb, wie die Seite mit einem **eigenen** Bild aussieht. **Empfehlung für Wix:** Modul F bekommt als Hauptbild das Foto
von Modul D (oben). Weitere Doppel bei kommenden Veranstaltungen, gleich mitlösen:

| Veranstaltung | Hauptbild heute | ist schon verwendet als | Vorschlag |
|---|---|---|---|
| Modul F „Mit der Stimme zur Stärke“ | `7530fd_30d7d4…` | Titelfoto Termine | Bild von Modul D |
| Modul P „Singen als Dialog“ | `7530fd_efda15…` | Startseite, Frage 1 (Abstand 10 = gleiches Foto, anderer Ausschnitt) | anderes Bild aus der Wix-Medienverwaltung, z. B. von Modul P2 (`7530fd_3cef5b…`, bisher nirgends verwendet) |
| Come-together | `7530fd_e1f23a…` | Landkarte, „draußen“ | Bild des Österreich-Moduls B 2025 (`7530fd_66a20a…`, Kreis mit Handfassung im Saal – passt zum Thema Singen und Tanzen), bisher nirgends verwendet |

**So wurde geprüft – und was dabei auffiel:** Alle 24 verschiedenen Hauptbilder aus Wix-Events wurden per pHash mit den Fotos
in `fotos/` verglichen und jeder Treffer unter Abstand 25 **mit dem Auge** nachgesehen. Abstand 0–10 war immer dasselbe Foto.
Aber auch **Abstand 14 und 18 waren dasselbe Foto, nur anders beschnitten**: das Bild der Sommerakademie Bodypercussion
(`7530fd_ffcc72…`) ist das Dozent:innen-Porträt `dz-baumann-loda.jpg`, das Bild von Modul P2 (2025, `7530fd_7f1806…`) ist
`uu-anliegen.jpg`. **Regel für künftige Prüfungen:** Abstand unter 20 immer mit dem Auge vergleichen. Das Guitar-Factory-Bild
ist eine Grafik, kein Foto – für den Foto-Stil ungeeignet.

In Wix die Originale aus der Medienverwaltung nehmen, nicht die verkleinerte Datei aus `fotos/`. **Einwilligungen:** Die Person
im Titelfoto ist gut erkennbar – vor dem Einsatz als großes Titelfoto prüfen, ob ihre Einwilligung diese Verwendung abdeckt.

---

## 6. Neue Bausteine, Umsetzung in Wix, Pflege

Farben, Schriften, Rundungen wie in `DESIGN-foto.md`; Titelfoto mit Kasten rechts wie Weiterbildung; Faktenliste und
Häkchen-Liste wie Weiterbildung; Sprungleiste wie Sing mit; Ansprechperson mit Foto wie Für Einrichtungen; Hinweiskasten wie
Weiterbildung; kompakte Terminliste wie Termine. **Neu auf dieser Seite:**

| Baustein | Aussehen | Begründung |
|---|---|---|
| **Datumszeile im Titelkasten** | unter der Kurzbeschreibung, durch eine feine Linie abgesetzt, Datum fett, Ort darunter | Datum und Ort sind bei einem Termin die wichtigste Angabe |
| **Zeit-&-Ort-Spalte** | schmale linke Spalte, bleibt beim Scrollen stehen (auf dem Handy nicht); Faktenliste „Wann / Wo“, Textlinks Karte und PDF, Teilen | beim Lesen des langen Textes bleiben Datum und Ort sichtbar |
| **Meta-Zeilen** | drei Zeilen mit fettem Begriff (Leitung, Weiterbildung, Für wen) über dem Text | immer an derselben Stelle – so vergleicht man Module schnell |
| **Zustands-Darstellung** | drei Fassungen des Titelkastens (Abschnitt 3) | abgesagt muss man erkennen |

### Grenzen von Wix-Events (bewusst in Kauf genommen)

Die Vorlage ist ein App-Baustein. Nach unserem Kenntnisstand lassen sich dort **Farben, Schrift, Knopf-Form, Anordnung von
Bild und Text, ein-/ausblendbare Teile und Texte der Knöpfe** einstellen – nicht aber jedes Detail der Vorschau. Was Wix
anders darstellt, ist kein Fehler, solange Farben, Schrift, gelber Pillen-Knopf und Reihenfolge stimmen. Voraussichtlich
nicht 1 : 1 möglich: 20-px-Rundung des Titelfotos, die kleine Überschrift „Modul · Weiterbildung Singleitung“ über dem Titel (Wix-Events hat dafür kein Feld; sie entfällt, die Art steht dann in der Zeile „Weiterbildung“), das Etikett „Abgesagt“, die klebende linke Spalte, Häkchen als Symbole
(im Text wird es eine normale Aufzählung). Die Namen der Menüpunkte in Wix können leicht abweichen – sinngemäß suchen.

### Umsetzung in Wix – Schritt für Schritt

> Wie bei allen Seiten: zuerst an der **duplizierten Website** testen (Wix-Dashboard → Website → „Website duplizieren“).

1. **Sofort (auch ohne Neugestaltung), je ca. 1 Minute pro Veranstaltung:** Bei den 3 kommenden Veranstaltungen
   *Dashboard → Veranstaltungen → Veranstaltung öffnen → Anmeldung → Externer Link* auf
   `https://www.singende-krankenhaeuser.de/anmeldung` stellen. Danach auf der Live-Seite „Anmelden“ klicken und prüfen.
2. **Abgesagte Veranstaltungen aufräumen** (nach Rückmeldung von Vera, Abschnitt 7, Punkt 1): Modul F „Kraftquelle“ 2026,
   Modul P2 (abgesagte Doppel), Guitar-Factory löschen; bei Modul V erst die Kurzbeschreibung „Abgesagt: …“, nach 4 Wochen löschen.
3. **Einstellungen der App** (*Dashboard → Veranstaltungen → Einstellungen*): Sprache/Region **Deutsch (Deutschland)** statt
   Österreich (Fund 9); bei jeder Veranstaltung **Gästeliste nicht öffentlich** (Fund 10). In den SEO-Einstellungen der Website
   den Website-Namen „Sikra Deutschland“ durch „Singende Krankenhäuser e.V.“ ersetzen (Fund 15 – betrifft alle Seiten, vorher
   mit Sonja abstimmen).
4. **Vorlage gestalten:** Im Editor die Seite **„Veranstaltungsdetails“** öffnen → App-Baustein anklicken → *Einstellungen*:
   – *Layout:* Bild und Text nebeneinander bzw. Bild als Hintergrund mit Textkasten; Kasten **Tiefgrün**, Schrift weiß,
     Bild rechts/links so, dass die Personen im Foto frei bleiben.
   – *Design:* Schrift PT Sans (Titel Regular 400, nicht fett), Text 18 px Anthrazit, Hintergrund Leinen; Knopf **Logo-Gelb,
     Anthrazit-Schrift, ganz rund**.
   – *Anzeigen:* Kurzbeschreibung an, „Zeit & Ort“ an, **Karte aus** (Link „Weg dorthin“ steht im Text), Teilen an,
     Gästeliste aus, zweiter „Anmelden“-Knopf unten aus (er steht im festen Bereich).
   – *Texte:* Knopf „Anmelden“; „Jetzt andere Veranstaltungen ansehen“ → „Nächste Termine ansehen“; „Über die Veranstaltung“
     bleibt.
   – Den alten Fotostreifen oberhalb des Bausteins **löschen** (Fund 16).
5. **Feste Bereiche unter dem App-Baustein** auf derselben Seite anlegen (erscheinen unter jeder Veranstaltung):
   Sprungleiste (optional), Salbei-Bereich „So meldest du dich an“ mit Vera-Kasten, Leinen-Bereich „Das kommt als Nächstes“
   mit dem Element *Veranstaltungsliste* (*Hinzufügen → Veranstaltungen*, Ansicht Liste, 3 kommende, ohne Bild), Tiefgrün-Band.
   Anker setzen: `anmelden`, `fragen`, `weitere`. Prüfen, dass die Bereiche bei **jeder** Veranstaltung erscheinen
   (zwei verschiedene Veranstaltungen im Editor durchklicken).
6. **Doppelte Einträge** (Fund 12): Die vier Einträge „Online-Modul 1“ und die `/form`-Adressen verschwinden mit dem
   Löschen nach Entscheidung 7 (alle aus 2025) – sonst nichts tun.
7. **Inhalte der kommenden Veranstaltungen** (je 10–15 Minuten, Entscheidung 4): Feld *Über die Veranstaltung* füllen
   (Reihenfolge: Leitung · Weiterbildung · Für wen · Text · Das erwartet dich), PDF darunter lassen; **Ort** neu auswählen,
   damit Stadt und Adresse im Hintergrund stimmen (Fund 8): *Ortsname* = Haus und Stadt („Kloster Oberzell, Zell am Main“),
   *Adresse* über die Adresssuche wählen; Hauptbild nach Abschnitt 5 tauschen; **Kategorie** setzen (`SEITE-termine.md`,
   Schritt 2).
8. **Österreich-Veranstaltungen:** externer Link `https://www.singende-krankenhaeuser.at` (oder die dort genannte
   Anmeldeseite, Abschnitt 7, Punkt 4).
9. **Liste `/veranstaltungen` umleiten** (Entscheidung 2): *Menüs & Seiten → Seite „Veranstaltungen“ → SEO-Grundlagen*:
   Adresse auf `veranstaltungen-liste` ändern, „Seite in Suchergebnissen anzeigen“ ausschalten, im Menü ausgeblendet lassen.
   Dann *Dashboard → Marketing & SEO → SEO-Tools → URL-Weiterleitungen*: `/veranstaltungen` → `/termine` (301) (alle Weiterleitungen gesammelt: `SEITE-aufraeumen.md`, Abschnitt 3).
   Test: `singende-krankenhaeuser.de/veranstaltungen` im privaten Browserfenster aufrufen → landet auf Termine.
10. **Handy-Ansicht prüfen** (Wix-Handy-Editor): Titelkasten lesbar, Knopf gut antippbar, kein seitliches Scrollen.
11. **Abnahme:** Vera (Inhalte, Orte, Zweig-Angaben), Sandra (Anmeldeweg), Sonja und Vorstand (Gesamtbild).

### Pflege-Ablauf

| Wann | Was | Wer |
|---|---|---|
| neues Modul / neuer Termin | in Wix-Events anlegen: Titel nach Muster „Modul F \| Mit der Stimme zur Stärke“, Kurzbeschreibung (ein Satz, ohne „Leitung“), Datum, Ort (Adresssuche), Hauptbild (noch nirgends verwendet), Kategorie, Text nach Entscheidung 4, PDF anhängen, *Anmeldung → Externer Link* `/anmeldung`; **gleichzeitig** im Anmeldeformular eintragen (`SEITE-anmeldung.md`, Pflege-Ablauf) | Vera |
| Termin wird abgesagt | Veranstaltung absagen, Kurzbeschreibung „Abgesagt: …“, Angemeldete informieren, aus dem Anmeldeformular nehmen, nach 4 Wochen löschen | Vera (Info an Angemeldete: Sandra) |
| Änderung (Datum, Ort, Leitung) | **nur** in Wix-Events ändern, PDF bei Gelegenheit nachziehen | Vera |
| jedes Jahr im Januar | Veranstaltungen löschen, die älter als ein Jahr sind (Entscheidung 7) | Vera |
| halbjährlich | eine Veranstaltung durchklicken: „Anmelden“ führt auf `/anmeldung`, PDF lässt sich öffnen | Tom |

Zuständigkeit: Vorschlag Vera (wie in `SEITE-termine.md`, Punkt 7), weil sie die Module plant und die Formular-Liste pflegt.

---

## 7. Offene Punkte – vor der Veröffentlichung klären

1. **Modul V „Mit dem Herzen pflegen“ (23.–25.10.2026, Einbeck):** In Wix-Events **abgesagt** (Fund 3). Bestätigen – dann:
   Flyer „Alle Termine 2026“ und alte Jahresplanung korrigieren (sie nennen es noch), Kurzbeschreibung „Abgesagt: …“, später
   löschen. Wichtig, weil es das Pflichtmodul des Pflege-Zweigs 2026 war: Wo holen Teilnehmende es nach (2027 = Modul III laut
   Terminvorschau)? → **Vera**.
2. **Ort Modul F:** „Kloster Oberzell **2**“ (Wix-Events) oder „Haus Klara, Kloster Oberzell **1**“ (frühere Module)? Die Vorschau
   schreibt nur „Kloster Oberzell, 97299 Zell am Main“. → **Vera**.
3. **Alte Zusagen der Guitar-Factory:** Die Anmeldung lief über Wix (Name, E-Mail) bei öffentlicher Gästeliste. Mit dem Löschen der
   Veranstaltung verschwinden die Daten; vorher prüfen, ob sie noch gebraucht werden (fachliche Einschätzung, keine
   Rechtsberatung: nicht mehr benötigte Anmeldedaten sollen gelöscht werden). → **Tom**.
4. **Anmeldeweg Österreich:** Welche Adresse soll „Anmelden“ bei Österreich-Modulen öffnen – Startseite
   `singende-krankenhaeuser.at` oder eine Anmeldeseite dort? Den persönlichen OneDrive-Link ersetzen. → **Vera** mit **Sybille Mikula**.
5. **Was ist `sonjaheim9.wixsite.com/my-site-3`?** Vermutlich eine ältere Kopie der Webseite unter Sonjas Wix-Konto. Wenn sie
   noch veröffentlicht ist: Veröffentlichung aufheben (alte Formulare und Texte im Netz). **Sparhinweis:** Falls für diese Kopie
   ein bezahlter Tarif läuft, kündigen. → **Sonja**, **Tom**.
6. **Umleitung von `/veranstaltungen` testen** (Entscheidung 2, Schritt 9) – geht das Umbenennen einer App-Seite? → **Tom**
   (bei Problemen **Andy**).
7. **Anrechnung Modul F:** „Modul in beiden Zweigen, zählt für das Zertifikat“ bestätigen. → **Vera**.
8. **Website-Name „Sikra Deutschland“** in Google-Titeln ändern (betrifft alle Seiten). → **Sonja** entscheidet, **Tom** setzt um.
   Nachtrag 26.09.2026: betroffen sind 24 der 38 normalen Seiten plus alle Veranstaltungs- und Shop-Seiten; Vorgehen und Titel-Liste
   in `SEITE-aufraeumen.md`, Abschnitt 4.
9. **Karte und Datenschutz** (fachliche Einschätzung, keine Rechtsberatung): Eine eingebettete Google-Karte lädt beim Öffnen
   Daten von Google und braucht nach gängiger Auffassung eine Einwilligung (Cookie-Banner). Die Vorschau nutzt deshalb nur einen
   Link („Weg dorthin“), die Karte in Wix bleibt aus. Beim Test der Live-Seiten wurden Verbindungsversuche zu `google.com`
   beobachtet (Herkunft nicht geklärt). Mit dem nächsten Datenschutz-Check der Website prüfen. → **Tom**.
10. **Einwilligung** der Person im Titelfoto (`ev-titel.jpg`) und bei den getauschten Hauptbildern (Abschnitt 5). → **Tom**.

---

## 8. Checkliste für diese Seite

- [ ] „Anmelden“ führt bei allen kommenden Veranstaltungen auf `singende-krankenhaeuser.de/anmeldung` (Österreich: `.at`)?
- [ ] Kein Link mehr auf `sonjaheim9.wixsite.com`, Jimdo oder persönliche OneDrive-Ordner?
- [ ] Abgesagte Veranstaltungen als „Abgesagt:“ gekennzeichnet oder gelöscht?
- [ ] Kommende Veranstaltungen: Beschreibung als Text, Leitung · Weiterbildung · Für wen, PDF darunter?
- [ ] Ort über die Adresssuche gewählt (keine „Bad Herrenalb“-Reste), Kategorie gesetzt?
- [ ] Hauptbild nirgends sonst auf der Webseite verwendet, Einwilligung liegt vor?
- [ ] Region Deutsch (Deutschland) – kein „Jänner“ mehr? Gästeliste nicht öffentlich?
- [ ] Feste Bereiche (Anmeldung & Kosten, nächste Termine) erscheinen unter jeder Veranstaltung, ohne Preiszahl?
- [ ] `/veranstaltungen` landet auf `/termine`?
- [ ] Kopfleiste: „Termine“ unterstrichen; Fußzeile mit „Vertrag widerrufen“?
- [ ] Handy geprüft, kein seitliches Scrollen?
- [ ] Alle Punkte aus Abschnitt 7 geklärt (mindestens 1, 4 und 6 vor dem Veröffentlichen)?
- [ ] Checkliste aus `DESIGN-foto.md`, Abschnitt 7, erfüllt?
