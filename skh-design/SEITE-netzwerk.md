# SEITE-netzwerk.md – Seite „Aus dem Netzwerk“ im Stil „Foto“ (Wix Blog)

Stand: 26.09.2026 · Verantwortlich: Tom (Webseite/Marketing, IT) · **Redaktion (sammelt und stellt ein): Tom** (Entscheidung Tom, 26.09.2026 – Abschnitt 7, Punkt 1) · Abnahme: Vorstand (Martin, Paula)
Vorschau: `skh-design/vorschau-foto-netzwerk.html` (im Browser öffnen). Oben schaltet „Nur Vorschau – Ansicht“ zwischen der
**Übersicht** (Blog-Seite) und einem **Beitrag** (Vorlage) um. Direkt aufrufbar: `…netzwerk.html#beitrag-schnupperkurs`,
`#beitrag-sommerakademie`, `#beitrag-trauer`, `#beitrag-nicole`; Kategorien: `#kategorie-rueckblicke`, `#kategorie-blog`,
`#kategorie-fokus`.
Stilregeln: `DESIGN-foto.md` · Bausteine: `SEITE-downloads.md` (Kopf ohne Titelfoto), `SEITE-weiterbildung.md` (Filter),
`SEITE-shop.md` (Ansicht-Schalter, nur Vorschau), `SEITE-mitglied-sein.md` (Lied-Karte), jeweils Abschnitt 6 · Nachbarseiten:
Startseite `vorschau-foto.html` (`#netzwerk`), `vorschau-foto-mitglied-sein.html` (`#fokus`), alle `vorschau-foto*.html`
(Fußzeile „Mitmachen“) · Ist-Zustand: `IST-STRUKTUR.md`

Dieses Dokument erklärt, **warum es die Seite „Aus dem Netzwerk“ gibt, warum sie mit der App „Wix Blog“ gebaut wird, welche
Beiträge es gibt, wie Startseite und „Mitglied sein“ sich automatisch füllen und wie man einen neuen Beitrag einstellt**. Eine
Person ohne Vorkenntnisse soll damit arbeiten können.

**Rolle der Seite:** „Aus dem Netzwerk“ beantwortet die Frage **„Was ist bei euch los?“**. Hier stehen Geschichten: Rückblicke auf
Module, Schnupperkurse und Treffen, der Blog des Monats und MitgLIEDER im Fokus (Lied des Monats). Jeder Beitrag ist der Hauptort
**seiner Geschichte** – für Termine, Preise und Anmeldung bleibt er ein Verweis (Entscheidung 4).

**Zielgruppen:** (1) Mitglieder und Singleiter:innen, die wiederkommen, um Neues zu lesen und das Lied des Monats zu holen;
(2) Interessierte, die sehen wollen, wie das Netzwerk lebt, bevor sie ein Modul buchen oder Mitglied werden; (3) Menschen, die über
Google, den Newsletter oder Social Media auf einen einzelnen Beitrag kommen.

---

## 1. Ausgangslage – was es heute gibt

Geprüft am 26.09.2026 (Quelltext der Startseite per curl, `static.parastorage.com` ist aus der Arbeitsumgebung gesperrt).

| Was | Befund |
|---|---|
| Startseite, Abschnitt 5 „Aktuelles aus unserem Netzwerk“ | zwei Texte direkt auf der Seite: **Rückblick** „Rhythmus, der weiterklingt“ (Sommerakademie 28.–30.08.2026, Martina Baumann und Uwe Loda, zwei Fotos) und **Schnupperkurs** „Mit der Stimme zur Stärke“ (Rückblick auf den Schnupperkurs am 11.09.2026, Porträts Monika Ananda Wiese und Jan Henning Foh) |
| Startseite, Abschnitt 13 „Blog des Monats“ | „Singen mit Trauernden und Sterbenden“ mit Foto von Alwine Deege, Links auf Modul IV (Veranstaltungsseite) und ein Radio-Interview |
| Startseite, Abschnitt 14 „MitgLIEDER im Fokus“ + „Feedback des Monats“ | Anfang der Geschichte von Nicole Rubinstein-Gross, „Hier geht es weiter“ → `/mitglied-sein`; darunter ihr Bericht über Brigitta, 94 |
| „Mitglied sein“, Bereich MitgLIEDER im Fokus | Fortsetzung der Geschichte, Lied (Audio 1:57), Text & Noten (PDF vom 29.07.2026) |
| Blog-Funktion | **keine.** Wix Blog ist nicht installiert (nicht unter den 25 Apps im Quelltext, `SEITE-aufraeumen.md`, Fund 5); `/blog` und `/blog-feed.xml` antworten mit Fehler 404 |
| Archiv | **keins.** Ein neuer Text überschreibt den alten; frühere Rückblicke und Lieder des Monats sind auf der Webseite nicht mehr zu finden |

### Funde

| Nr. | Fund | Folge |
|---|---|---|
| 1 | **Neu:** Die Netzwerk-Geschichten stehen an **drei Stellen** der Startseite (Abschnitte 5, 13, 14) und zur Hälfte auf „Mitglied sein“. Jede Aktualisierung heißt: Startseite im Editor öffnen, Texte ersetzen, Fotos tauschen – an zwei Seiten. | Beiträge an einem Ort, Startseite und „Mitglied sein“ füllen sich automatisch (Entscheidung 3) |
| 2 | **Neu:** Die Texte haben **kein Datum**. Der Blog des Monats sagt am 26.09.2026 noch „Von 18. – 20.09.2026 findet … statt“ – wirkt veraltet, obwohl er es zum Zeitpunkt des Schreibens nicht war. | Beiträge tragen ihr Veröffentlichungsdatum; Zeitangaben im Text bleiben dann richtig |
| 3 | **Neu:** Kein Archiv (siehe oben). Die Lieder des Monats sind nach einem Monat weg, obwohl die Seite sie „für deine persönliche Sammlung“ anbietet. | Blog behält alle Beiträge, Kategorie „MitgLIEDER im Fokus“ ist die Sammlung |
| 4 | **Neu:** Kleine Fehler in den Texten: „Martina und Uwe **spiel** auf der Gouni“; „Diese **haben** es sich zur Aufgabe gemacht **haben**“; „Ein hörenswertes Radio-Interview … über ihre Trauer- und Singarbeit, in dem sie sagt …“ (Satz ohne Hauptverb); „am 11.09.26“; „Singleiterinnen und Singleiter“ (sonst Doppelpunkt). | in der Vorschau korrigiert (Abschnitt 2, „Korrekturen an den Texten“) |
| 5 | **Neu:** Fotonachweis „Foto: Alwine **Deegen**“, sonst überall „Alwine **Deege**“ (Text, Dozent:innen-Seite, ihre Webseite `alwine-deege.com`). | Vorschau schreibt „Deege“ – bestätigen lassen (Abschnitt 7, Punkt 4) |
| 6 | **Neu:** Der Link „Radio-Interview“ zeigt auf `alwine-deege.com/kopie-von-fährfrauen` – der Name „kopie-von“ deutet auf eine kopierte Seite hin. Aus der Arbeitsumgebung **nicht prüfbar** (gesperrt). | beim Übertragen anklicken (Abschnitt 7, Punkt 4) |
| 7 | **Bekannt:** Die Fokus-Geschichte ist auf zwei Seiten zerteilt (`SEITE-mitglied-sein.md`, Abschnitt 1). Dort war schon entschieden, sie ganz auf „Mitglied sein“ zu stellen. | wird durch diese Seite ersetzt: ganze Geschichte im Beitrag (Entscheidung 3) |

---

## 2. Entscheidungen und Begründung

### Entscheidung 1: **Eigene Seite mit Wix Blog, drei Kategorien** (Tom, 26.09.2026)

Zur Wahl standen: (a) wie bisher Texte direkt auf Startseite und „Mitglied sein“, (b) eigene Seite, von Hand gepflegt (Abschnitte im
Editor), (c) eigene Seite mit der App **Wix Blog**. **Gewählt: (c).**
**Gründe:** (1) Ein Beitrag wird **einmal** geschrieben und erscheint automatisch auf der Netzwerk-Seite, auf der Startseite und
(Fokus) auf „Mitglied sein“ – **Einsparmöglichkeit**: bisher zwei Seiten im Editor je Aktualisierung, künftig ein Formular im
Dashboard (geschätzt 20–30 Minuten weniger je Monat). (2) Beiträge schreibt man im **Dashboard**, ohne den Editor zu öffnen –
das geht schnell und ohne Gefahr, das Layout zu verschieben; bei Vertretung oder Nachfolge kann eine zweite Person
eine reine Blog-Rolle bekommen (Abschnitt 6, Pflege-Ablauf). (3) Jeder Beitrag hat Datum, eigene Adresse und wird von Google
gefunden; ein Link aus Newsletter oder Instagram zeigt genau auf diese Geschichte. (4) Archiv entsteht von selbst (Fund 3).
(5) **Kosten: keine** – Wix Blog ist eine kostenlose App von Wix, im bestehenden Paket enthalten.
**Warum nicht (b):** gleiche Handarbeit wie heute, nur an anderer Stelle; kein Datum, kein Archiv.
**Kategorien** (Toms Vorgabe): **Rückblicke** (Module, Schnupperkurse, Sommerakademie, Treffen), **Blog des Monats**,
**MitgLIEDER im Fokus**. Keine weiteren, damit die Filterzeile kurz bleibt.
**Nachteil:** Die App lädt eigenen Programmcode und gehört in die App-Liste und die Datenschutzerklärung (Abschnitt 6, Schritt 9).

### Entscheidung 2: **Name „Aus dem Netzwerk“, Adresse `/aus-dem-netzwerk`, kein Menüpunkt**

- **Name** wie die bisherige Überschrift „Aktuelles aus unserem Netzwerk“ – Besucher:innen kennen ihn. „Blog“ ist vielen älteren
  Besucher:innen nicht geläufig.
- **Adresse** `/aus-dem-netzwerk` (Blog-Seite). Beiträge bekommen von Wix die Form `/post/<titel>`, Kategorien
  `/aus-dem-netzwerk/categories/<name>` – genaue Form nach dem Anlegen prüfen und in Abschnitt 6 eintragen.
- **Im Menü als Unterpunkt „Über uns › Aus dem Netzwerk“** (Entscheidung Tom, 26.09.2026 – Korrektur: zuerst war „kein
  Menüpunkt“ geplant; Anlass: Frage Tom „wo ist die Seite Netzwerk zu finden?“). Es bleibt bei sechs Hauptpunkten
  (`DESIGN-foto.md`, Abschnitt 4, Untermenü). **Warum unter „Über uns“:** Dort geht es darum, wer das Netzwerk ist; die Beiträge
  zeigen, wie es lebt. Unter „Mitglied sein“ ginge nicht – das ist kein Menüpunkt, sondern der gelbe Knopf.
  Außerdem erreichbar über: Startseite („Alle Beiträge →“), Fußzeile „Mitmachen“ → „Aus dem Netzwerk“ (alle Seiten), „Mitglied sein“
  (`#fokus`, „Alle MitgLIEDER im Fokus →“), Newsletter und Social Media.

### Entscheidung 3: **Wo die Beiträge erscheinen – und wo ihr Hauptort ist**

| Stelle | Was sie zeigt | Wie (Wix) | Pflege |
|---|---|---|---|
| **Aus dem Netzwerk** (Hauptort) | alle Beiträge, neueste zuerst, Filter nach Kategorie | Blog-Seite von Wix Blog | Beitrag im Dashboard schreiben |
| **Startseite** (`#netzwerk`, Abschnitt 6) | die **drei neuesten** Beiträge aller Kategorien, Link „Alle Beiträge →“ (Entscheidung Tom) | Blog-Element „Beitragsliste“, 3 Beiträge, alle Kategorien | keine |
| **Mitglied sein** (`#fokus`) | der **neueste** Beitrag der Kategorie „MitgLIEDER im Fokus“ als Anriss (Foto, Name, Kurzzitat), Link auf den Beitrag und „Alle MitgLIEDER im Fokus →“ | Blog-Element „Beitragsliste“, Kategorie „MitgLIEDER im Fokus“, 1 Beitrag | keine |

- **Hauptort** jeder Geschichte ist der Beitrag. Lied (Audio), Text & Noten (PDF), ganze Geschichte und **Feedback des Monats**
  stehen nur noch dort. Das ersetzt die Regel aus `SEITE-mitglied-sein.md`, Abschnitt 2 („Geschichte vollständig auf Mitglied sein“).
- **Feedback des Monats** ist keine eigene Kategorie, sondern ein Abschnitt am Ende des Fokus-Beitrags desselben Monats
  (so war es auch bisher gemeint: dieselbe Person, dieselbe Seite). Kommt ein Feedback von jemand anderem, steht es trotzdem im
  Fokus-Beitrag des Monats – mit Namen der Singleitung.
- **Folge der „drei neuesten“:** Die Startseite zeigt nicht immer je einen Beitrag jeder Kategorie. In der Vorschau fehlt deshalb
  gerade Nicole (Juli), weil im September drei neuere Beiträge erschienen sind. Das ist in Kauf genommen: MitgLIEDER im Fokus ist
  auf „Mitglied sein“ immer zu sehen. **Nicht gewählt:** drei Elemente mit je einer Kategorie – dann zeigte die Startseite
  monatelang alte Rückblicke, wenn es keinen neuen gibt.

### Entscheidung 4: **Beitragsregel – Geschichte ja, Termine und Preise nur als Verweis**

- Ein Beitrag erzählt, was war oder wer jemand ist. **Nicht** in den Beitrag: Preise, Anmeldefristen, Anmeldeformular – dafür am
  Ende **ein Verweis-Kasten** (weiße Box, ein fetter Satz, ein Textlink) auf den Hauptort: Veranstaltungsseite, Termine,
  Weiterbildung oder Mitglied sein (`DESIGN-foto.md`, Abschnitt 4, Grundregel).
- Termine im Text („Das Modul findet vom 16. bis 18. Oktober statt“) sind erlaubt, weil der Beitrag ein Datum trägt – man sieht,
  von wann die Aussage ist (Fund 2). Sie werden nachträglich **nicht** geändert.
- Du-Ansprache und Gendern mit Doppelpunkt wie auf der ganzen Webseite; in Zitaten und Erfahrungsberichten bleibt der Wortlaut der
  Person (z. B. „Senioren“ bei Nicole).
- **Überschrift** höchstens ca. 60 Zeichen (so zeigt Google sie vollständig), **Auszug** ein bis zwei Sätze – er erscheint auf den
  Karten der Startseite.

### Entscheidung 5: **Blog ohne Kommentare, Likes, Aufrufzähler und Autorenzeile**

In den Blog-Einstellungen aus: Kommentare, „Gefällt mir“, Aufrufe, Lesezeit, Autor:in (Profilbild und Name des Wix-Kontos).
**Gründe:** (1) Kommentare brauchen ein Mitgliederkonto und Moderation – Arbeit ohne erkennbaren Nutzen; Rückmeldungen kommen per
E-Mail. (2) Weniger personenbezogene Daten, kürzere Datenschutzerklärung. (3) Ruhiges Bild wie im Stil „Foto“ vorgesehen.
(4) Die Autorenzeile zeigte das Wix-Konto (z. B. „Tom“) statt der Person, die erzählt – wer erzählt, steht im Text.

### Entscheidung 6: **Kopf ohne Titelfoto – der neueste Beitrag ist das große Foto**

Die Blog-Seite beginnt wie die Service-Seiten mit einem Kopf ohne Titelfoto (Überschrift, ein Satz); gleich darunter der
**neueste Beitrag groß** (Foto 3 : 2 links, Text rechts), danach die übrigen als Karten wie auf der Startseite.
**Grund:** Ein festes Titelfoto über dem großen Beitragsfoto wären zwei große Fotos übereinander; und das Beitragsfoto wechselt
von selbst, ein Titelfoto müsste gepflegt werden.

### Hauptorte – was wohin gehört

| Information | vorher | Hauptort neu | andere Seiten |
|---|---|---|---|
| Rückblicke auf Module, Schnupperkurse, Sommerakademie | Startseite, Abschnitt 5 | **Beitrag**, Kategorie Rückblicke | Startseite: Karte (automatisch) |
| Blog des Monats | Startseite, Abschnitt 13 | **Beitrag**, Kategorie Blog des Monats | Startseite: Karte (automatisch) |
| MitgLIEDER im Fokus (Geschichte, Lied, Noten) | halb Startseite, halb „Mitglied sein“ (`#fokus`) | **Beitrag**, Kategorie MitgLIEDER im Fokus | Mitglied sein `#fokus`: Anriss des neuesten (automatisch); Startseite: Karte, wenn unter den drei neuesten |
| Feedback des Monats | Startseite, Abschnitt 14 | **Fokus-Beitrag** des Monats | – |
| Termine, Preise, Anmeldung | – | unverändert (Termine, Veranstaltungsseite, Anmeldung, Mitglied sein) | Beitrag: ein Verweis-Kasten |

### Korrekturen an den Texten (in der Vorschau umgesetzt)

| Beitrag | Vorher (Live-Seite) | Nachher | Grund |
|---|---|---|---|
| Schnupperkurs | „am 11.09.26“ | „am 11. September 2026“ | Schreibweise wie sonst auf der Seite |
| Schnupperkurs | Überschrift „„Mit der Stimme zur Stärke““ | „„Mit der Stimme zur Stärke“ – so war der Schnupperkurs“ | Überschrift sagt, dass es ein Rückblick ist (sonst mit dem Modul verwechselbar) – **selbst formuliert** |
| Sommerakademie | „Martina und Uwe spiel auf der Gouni“ | „Martina und Uwe spielen auf der Gouni.“ | Tippfehler |
| Blog des Monats | „Singleiterinnen und Singleiter“ | „Singleiter:innen“ | Gendern mit Doppelpunkt |
| Blog des Monats | „Von 18. - 20.09.2026 findet … statt. Modul IV, bei dem …“ | ein Satz: „Vom 18. bis 20. September 2026 findet … statt, bei dem …“ | Satz war zerrissen |
| Blog des Monats | „Diese haben es sich zur Aufgabe gemacht haben“ | „Diese haben es sich zur Aufgabe gemacht“ | doppeltes „haben“ |
| Blog des Monats | „Ein hörenswertes Radio-Interview … in dem sie sagt, dass …“ | „Hörenswert ist ein Radio-Interview … Darin sagt sie, …“ | Satz ohne Hauptverb |
| Blog des Monats | „Foto: Alwine Deegen“ | „Foto: Alwine Deege“ | Schreibweise wie überall sonst (Fund 5, bestätigen) |
| Fokus, Feedback | Tippfehler („mindesten“, „platze“, „Epo itaitai“) | wie schon auf der „Mitglied sein“-Vorschau korrigiert | `SEITE-mitglied-sein.md`, Abschnitt 2 |

### Korrekturen auf den Nachbar-Vorschauen (26.09.2026)

| Seite | Stelle | Vorher | Nachher | Grund |
|---|---|---|---|---|
| Startseite | Abschnitt 6 „Aktuelles“ (jetzt `#netzwerk`) | drei feste Karten (Rückblick, Blog des Monats, MitgLIEDER im Fokus), „Alle Beiträge →“ und zwei „Weiterlesen“ auf `#` | die **drei neuesten** Beiträge mit Datum (Schnupperkurs, Sommerakademie, Blog des Monats), alle Links auf die Beiträge, „Alle Beiträge →“ auf die neue Seite, Randnotiz | Entscheidung 3 |
| Mitglied sein | `#fokus` | ganze Geschichte (aufklappbar), Audio, Noten, Mail-Link, Feedback des Monats | Anriss des neuesten Fokus-Beitrags: Datum, Foto, Name, Kurzzitat, „Ganze Geschichte, Lied und Noten →“, „Alle MitgLIEDER im Fokus →“, Randnotiz | Entscheidung 3 – ein Hauptort |
| alle 17 Foto-Vorschauen | Kopfleiste, Menüpunkt „Über uns“ | ohne Untermenü | Untermenü „Aus dem Netzwerk“ (Computer: Aufklappmenü rechtsbündig, weil letzter Menüpunkt; Handy: eingerückt) | Entscheidung 2 (Korrektur Tom) |
| alle 17 Foto-Vorschauen | Fußzeile „Mitmachen“ | Mitglied sein · Spenden · Newsletter · Shop | … Spenden · **Aus dem Netzwerk** · Newsletter … | Entscheidung 2 |
| `SEITE-mitglied-sein.md` | Abschnitte 2, 3, 6, 8 | Geschichte vollständig auf „Mitglied sein“, Pflege an zwei Stellen | Nachtrag mit Verweis auf diese Doku | Doku passend zur Vorschau |
| `DESIGN-foto.md` | Kopf, Abschnitte 4, 5, Übersicht | – | neue Seite, Baustein, Hauptort-Regel, Startseiten-Zeile 6, Fotoliste | Übersicht aktuell halten |
| `SEITE-aufraeumen.md` | App-Status-Tabelle | – | Zeile „Wix Blog (neu)“ | App-Liste vollständig |
| `ABNAHME.md`, `abnahme.html` | Teil 2, Bogen | – | Seite „Aus dem Netzwerk“, Direktlink `#netzwerk` | Abnahme |

Nicht angepasst: `vorschau-foto-anmeldung.html` nur in der Fußzeile (gemeinsam für alle Seiten), `SEITE-anmeldung.md` gar nicht;
Rechtstexte; Bereich Jahrestagung; die anderen Stilvarianten. Kopfleiste, Fußzeile und das gesamte CSS sind aus
`vorschau-foto-faq.html` übernommen (mit Handy-Block, Menü-Knopf, Untermenü, Shop-Link); angehängt ist der Block
„Ergänzungen für die Seite ‚Aus dem Netzwerk‘“.

---

## 3. Aufbau von oben nach unten

### Blog-Seite `/aus-dem-netzwerk`

| Nr. | Fläche | Bereich | Inhalt | Warum |
|---|---|---|---|---|
| – | Weizen / Weiß | Hinweisleiste, Kopfleiste | wie alle Seiten; im Untermenü „Über uns“ ist „Aus dem Netzwerk“ gelb unterstrichen | Entscheidung 2 |
| – | Leinen | Brotkrumen | „Start › Über uns › Aus dem Netzwerk“ | Rückweg, passend zum Menü |
| 1 | Leinen | **Kopf ohne Titelfoto** | kleine Überschrift „Aus unserem Netzwerk“, Titel, ein Satz | Entscheidung 6 |
| 2 | Leinen | **Kategorien** | Alle · Rückblicke · Blog des Monats · MitgLIEDER im Fokus, jeweils mit Anzahl; aktive Kategorie gelb unterstrichen | wer nur das Lied des Monats sucht, findet es mit einem Klick |
| 3 | Leinen | **Neuester Beitrag groß** | Foto 3 : 2 links; rechts Kategorie, Überschrift (bis 44 px), Datum, Auszug, „Weiterlesen →“ | Entscheidung 6 |
| 4 | Leinen | **Beitrags-Karten** (3 nebeneinander) | Foto 4 : 3, Kategorie, Überschrift 26 px, Datum, Auszug, „Weiterlesen →“ – dieselbe Karte wie auf der Startseite | man erkennt die Karte von der Startseite wieder |
| 5 | Salbei | **Du hast etwas zu erzählen?** | ein Satz; „Beitrag vorschlagen“ → Kontaktformular; „Keinen Beitrag verpassen“ → Newsletter | MitgLIEDER im Fokus braucht Mitglieder, die sich melden |
| 6 | Tiefgrün | **Werde Teil des Netzwerks.** (`#mitglied-band`) | wie Häufige Fragen | Abschluss wie auf allen Seiten |
| – | Tiefgrün | Fußzeile | wie alle Seiten, neu mit „Aus dem Netzwerk“ | – |

### Vorlage „Beitrag“ `/post/…`

| Nr. | Fläche | Bereich | Inhalt |
|---|---|---|---|
| 1 | Leinen | Brotkrumen | „Start › Über uns › Aus dem Netzwerk › <Kategorie>“ |
| 2 | Leinen | **Kopf in der Lesespalte** (880 px) | Kategorie (Link), Überschrift (64 px, Handy 34 px), Datum · Kategorie, Einleitungssatz 21 px |
| 3 | Leinen | **Titelbild** 3 : 2 mit Bildunterschrift; bei zwei Personen zwei Porträts nebeneinander | |
| 4 | Leinen | **Text** 18 px, höchstens 70 Zeichen breit; Zwischenüberschrift 28 px mit Linie darüber (z. B. „Feedback des Monats“); weitere Fotos mit Bildunterschrift; bei MitgLIEDER im Fokus: Lied-Karte (Abspielknopf Tiefgrün, weiße Karte) und Links „Text & Noten (PDF) →“, „<Name> schreiben →“ | |
| 5 | Weiß (Kasten) | **Verweis-Kasten** | ein fetter Satz + ein Textlink auf den Hauptort (Entscheidung 4) |
| 6 | Leinen | „← Alle Beiträge“ | |
| 7 | Weizen | **Weitere Beiträge** | drei Karten (in Wix „Verwandte Beiträge“) |
| 8 | Tiefgrün | Mitglied-Band, Fußzeile | wie Blog-Seite |

Auf dem Handy stehen die Karten untereinander, der große Beitrag hat das Foto oben; Fotos werden wie überall 3 : 2.

**Selbst formuliert** (bitte bei der Abnahme gegenlesen): Einleitungssatz der Seite, Band „Du hast etwas zu erzählen?“, alle
Auszüge (Karten-Texte), Einleitungssätze und Verweis-Kästen der vier Beiträge, Überschrift des Schnupperkurs-Rückblicks,
Bildunterschriften, Intro auf „Mitglied sein“ `#fokus`.

---

## 4. Woher die Inhalte stammen

| Bereich | Quelle |
|---|---|
| Rückblicke Sommerakademie und Schnupperkurs, Blog des Monats | Startseite `singende-krankenhaeuser.de`, Quelltext vom 26.09.2026 (per curl), Wortlaut übernommen, nur Korrekturen aus Abschnitt 2 |
| MitgLIEDER im Fokus, Feedback des Monats | Texte der Vorschau `vorschau-foto-mitglied-sein.html` (dort schon aus Startseite und `/mitglied-sein` zusammengeführt, `SEITE-mitglied-sein.md`, Abschnitt 4) |
| Veröffentlichungsdaten | **angenommen**: Fokus 29.07.2026 (Datum des Noten-PDFs), Blog des Monats 01.09.2026, Sommerakademie 04.09.2026, Schnupperkurs 14.09.2026. Beim Übertragen die echten Daten nehmen (Abschnitt 6, Schritt 5) |
| Wix Blog nicht installiert | App-Liste im Quelltext; `/blog` und `/blog-feed.xml` → 404 |

---

## 5. Fotos

Alle Fotos stammen von der Webseite (Wix-Medien). In Wix die **Originale** verwenden.

| Datei (Vorschau) | Wo | Motiv | Herkunft |
|---|---|---|---|
| `nw-schnupperkurs.jpg` (**neu**) | Beitragsbild Schnupperkurs (Karte, Startseite) | die Porträts von Monika Ananda Wiese und Jan Henning Foh nebeneinander | zusammengesetzt aus `dz-wiese.jpg` und `dz-foh.jpg` (neue Porträtserie, `SEITE-dozenten.md`, Abschnitt 5) |
| `dz-wiese.jpg`, `dz-foh.jpg` | im Beitrag Schnupperkurs, zwei Porträts | Porträts | wie Dozent:innen-Seite |
| `aktuell-martina-uwe.jpg` | Beitragsbild Sommerakademie | Martina Baumann mit Gouni, Uwe Loda mit Zither | Startseite, schon vorhanden |
| `nw-gouni.jpg` (**neu**) | im Beitrag Sommerakademie | Hände an den Saiten der Gouni | Startseite, Wix `7530fd_789cae41…png` („Martina und Uwe.png“), verkleinert auf 800 px |
| `aktuell-alwine.jpg` | Beitragsbild Blog des Monats | Alwine Deege mit Gitarre | Startseite, schon vorhanden |
| `aktuell-nicole.jpg` | Beitragsbild MitgLIEDER im Fokus (auch Mitglied sein `#fokus`) | Nicole Rubinstein-Gross mit Ukulele | wie bisher |

**Warum hier Fotos „doppelt“ vorkommen:** Das Beitragsbild erscheint absichtlich überall, wo der Beitrag angezeigt wird
(Blog-Seite, Startseite, Mitglied sein) – das macht Wix Blog automatisch, es ist dieselbe Datei, keine Kopie.
Für die Schnupperkurs-Karte wurden die Porträts aus der **neuen** Porträtserie genommen statt der älteren, uneinheitlichen
Fotos der Live-Seite (`7530fd_e6e0a094…png`, `7530fd_98176106…png`); eine pHash-Prüfung ergab: das ältere Foto von Jan Henning Foh
ist fast gleich wie `dz-foh.jpg` (Abstand 12), deshalb wurde es nicht zusätzlich gespeichert.
**Einwilligungen:** Die Personen stehen schon mit diesen Fotos auf der Webseite. Die neue Verwendung (dauerhaft im Archiv, als
Karte auf mehreren Seiten, beim Teilen in Social Media) vor dem Übertragen kurz bestätigen lassen (Abschnitt 7, Punkt 3).

---

## 6. Neue Bausteine, Umsetzung in Wix, Pflege

Farben, Schrift, Rundungen wie `DESIGN-foto.md`; Kopf ohne Titelfoto wie Downloads; Kategorien wie der Filter auf Weiterbildung;
Lied-Karte wie Mitglied sein; Randnotiz „Vor Veröffentlichung“ und Ansicht-Schalter nur Vorschau. **Neu:**

| Baustein | Aussehen | Begründung |
|---|---|---|
| **Beitrags-Karte** | Foto 4 : 3 (20 px Rundung), kleine Überschrift = Kategorie, Überschrift 26 px Regular, Datum 16 px, Auszug 18 px, „Weiterlesen →“; keine Kartenfläche | gleiche Karte auf Startseite, Blog-Seite und unter Beiträgen – man erkennt sie wieder |
| **Großer Beitrag** | erste Karte über die volle Breite: Foto 3 : 2 links, Text rechts, Überschrift bis 44 px, Linie darunter | ersetzt das Titelfoto (Entscheidung 6) |
| **Beitrag in der Lesespalte** | 880 px breit, Text höchstens 70 Zeichen; Bildunterschrift 15 px; Zwischenüberschrift 28 px mit Linie | lange Texte bleiben lesbar |
| **Verweis-Kasten** | weiße Box (20 px Rundung) am Ende: ein fetter Satz, ein Textlink | Entscheidung 4 – führt zum Hauptort |

### Umsetzung in Wix – Schritt für Schritt

1. **Vorher:** Website duplizieren und an der Kopie arbeiten (`DESIGN-foto.md`, Abschnitt 6).
2. **App installieren** (ca. 5 Minuten, kostenlos): *Editor → Hinzufügen → Blog* bzw. *Dashboard → Apps → Wix Blog*. Wix legt
   zwei Seiten an: **„Blog“** (Übersicht) und **„Beitrag“** (Vorlage, `/post/…`). Fragt Wix nach Mitgliederseiten für Autor:innen:
   ablehnen bzw. nicht einrichten.
3. **Blog-Seite einrichten:** *Menüs & Seiten* → „Blog“ umbenennen in **„Aus dem Netzwerk“**, *SEO-Grundlagen → URL-Endung*
   `aus-dem-netzwerk`; im Menü als **Unterseite von „Über uns“** (*Menüs & Seiten* → Seite auf „Über uns“ ziehen → „Als Unterseite“). Seitentitel für Google „Aus dem Netzwerk | Singende Krankenhäuser e.V.“,
   Beschreibung: „Rückblicke, Blog des Monats und MitgLIEDER im Fokus – Geschichten aus dem Netzwerk für heilsames Singen.“
   Oben Kopf (Leinen, kleine Überschrift, Titel, ein Satz) wie auf Downloads; darunter das Blog-Element.
4. **Blog-Element gestalten** (Element anklicken → *Einstellungen*): Layout „Seite an Seite“ bzw. „Hervorgehoben“ für den ersten
   Beitrag, danach Raster mit 3 Spalten; Bildformat 4 : 3; Kategorien-Menü einblenden; Schrift PT Sans (Überschrift Regular 26 px,
   Text 18 px), Farben Anthrazit auf Leinen, Ecken 20 px, keine Rahmen und Schatten. **Ausblenden:** Autor:in, Lesezeit, Aufrufe,
   Kommentare, „Gefällt mir“, Teilen-Symbole in der Karte (Entscheidung 5). *Blog-Einstellungen → Kommentare* ganz ausschalten.
5. **Kategorien und Beiträge** (*Dashboard → Blog*): Kategorien „Rückblicke“, „Blog des Monats“, „MitgLIEDER im Fokus“ anlegen.
   Die vier Beiträge aus der Vorschau übertragen (Text kopieren, Korrekturen aus Abschnitt 2 übernehmen), je Beitrag: Kategorie,
   **Titelbild** (*Einstellungen → Titelbild*), **Auszug** (Karten-Text), **Veröffentlichungsdatum** (*Einstellungen →
   Veröffentlichungsdatum* – das echte Datum, an dem der Text auf der Startseite erschien; wenn unbekannt: das Datum aus Abschnitt 4).
   Audio und PDF im Beitrag über *Hinzufügen → Audio* bzw. *Datei*. Am Ende den Verweis-Kasten als Zitat- oder Textblock mit Link.
6. **Vorlage „Beitrag“** im Editor: Schrift, Lesespalte, Farben wie Abschnitt 3; „Verwandte Beiträge“ einschalten (3), Autor:in,
   Kommentare, Likes, Aufrufe aus. Brotkrumen und Mitglied-Band als Abschnitte ober- bzw. unterhalb des Beitrags-Elements.
7. **Startseite:** die Abschnitte 5 (Aktuelles), 13 (Blog des Monats) und 14 (MitgLIEDER im Fokus, Feedback) **erst löschen, wenn
   die Beiträge stehen.** An ihre Stelle Abschnitt „Aktuelles“ mit dem Blog-Element **„Beitragsliste“** (*Hinzufügen → Blog →
   Beitragsliste*): 3 Beiträge, alle Kategorien, neueste zuerst, gleiche Karte wie auf der Blog-Seite; rechts oben Textlink
   „Alle Beiträge →“ auf `/aus-dem-netzwerk`. Anker `netzwerk` setzen.
8. **Mitglied sein** (`#fokus`): Geschichte, Audio, Noten, Aufklapptexte und Feedback löschen (**erst nach Schritt 5**);
   stattdessen Blog-Element „Beitragsliste“, Kategorie „MitgLIEDER im Fokus“, **1** Beitrag, Layout „Seite an Seite“ (Foto links,
   Auszug rechts); Überschrift, Einleitungssatz und Link „Alle MitgLIEDER im Fokus →“ (auf die Kategorie-Adresse) bleiben fest.
9. **Fußzeile** (einmal für alle Seiten): unter „Mitmachen“ Link „Aus dem Netzwerk“. **App-Liste und Datenschutz:** Wix Blog in die
   App-Status-Tabelle (`SEITE-aufraeumen.md`, Abschnitt 6) und an die Dienste-Liste für den Rechtstexte-Auftrag
   (`SEITE-rechtliches.md`, Abschnitt 4) geben – am Wortlaut der Rechtstexte selbst wird hier nichts geändert.
10. **Handy prüfen** (Mobil-Editor): Karten untereinander, Foto oben, Kategorien umbrechen sauber.
11. **Adressen eintragen:** tatsächliche Adressen von Blog-Seite, Kategorien und einem Beitrag in diese Doku (Entscheidung 2).
12. **Abnahme:** Gestaltung Vorstand (Martin, Paula), Texte und Einwilligungen Tom (Abschnitt 7).

**Einsparmöglichkeiten:**
- **Newsletter aus dem Blog füllen:** Wix Blog liefert einen RSS-Feed (`/blog-feed.xml`, erst nach der Installation erreichbar).
  CleverReach kann RSS-Beiträge als Block in einen Newsletter übernehmen – dann wird der Monatsnewsletter nicht neu geschrieben,
  sondern aus den Beiträgen des Monats zusammengestellt. Vorher prüfen, ob euer CleverReach-Tarif den RSS-Block enthält → Tom.
- **Social Media:** Beitrag teilen statt eigenen Text schreiben – Link des Beitrags bei Instagram (Story/Profil-Link) und Facebook.
- **Keine Kommentare** = keine Moderation (Entscheidung 5).

### Pflege-Ablauf

| Wann | Was | Wer (Vorschlag) |
|---|---|---|
| nach jedem Modul, Schnupperkurs, Treffen mit gutem Material | Rückblick: 3–6 Sätze, 1–2 Fotos (Einwilligung!), Verweis-Kasten auf die nächsten Termine | Dozent:in liefert, Tom stellt ein |
| monatlich (Anfang des Monats) | Blog des Monats | Tom (Themenvorschläge gern aus Vorstand und Geschäftsstelle) |
| monatlich | MitgLIEDER im Fokus: Foto, Geschichte, Lied (MP3), Text & Noten (PDF), ggf. Feedback des Monats | Mitglied liefert, Tom stellt ein |
| jeder neue Beitrag | Checkliste Abschnitt 8 (Punkte „Beitrag“); Startseite und Mitglied sein **nicht** anfassen – aktualisieren sich selbst | wer einstellt |
| halbjährlich | Links in den Verweis-Kästen der letzten Beiträge anklicken; tote Links auf alte Veranstaltungsseiten durch Termine ersetzen | Tom |
| jährlich im Januar | Beiträge ohne Einwilligung mehr (Widerruf) löschen; Kategorien und Anzahl prüfen | Tom |
| Urlaub, Vertretung, Nachfolge | zweite Person in Wix unter *Einstellungen → Rollen & Berechtigungen* als **„Blog-Autor:in“** bzw. **„Blog-Redakteur:in“** einladen – nur Blog, kein Editor, kostenlos. Diese Doku ist die Anleitung. | Tom lädt ein |

---

## 7. Offene Punkte – vor der Veröffentlichung klären

1. ~~Wer stellt ein, wer liefert?~~ – **erledigt**, entschieden am 26.09.2026 (Tom): **Tom sammelt die Beiträge und stellt sie ein.**
   Material kommt von Dozent:innen, Mitgliedern und der Geschäftsstelle; Vorschläge über das Kontaktformular (Band „Du hast etwas zu erzählen?“)
   gehen an die Geschäftsstelle – mit Vera absprechen, dass sie sie an Tom weiterleitet.
   Vertretung: siehe Pflege-Ablauf (Blog-Rolle).
2. **Echte Veröffentlichungsdaten** der vier Beiträge (Abschnitt 4 – angenommen). → Tom (Wix-Verlauf der Startseite).
3. **Einwilligungen** für Fotos und Namen im dauerhaften Archiv, besonders Nicole (auch ihre E-Mail-Adresse steht im Beitrag) und
   Brigitta (Vorname und Alter). → Tom (bei Nicole direkt, bei Brigitta über Nicole).
4. **Alwine Deege:** Schreibweise im Fotonachweis (Fund 5) und Link zum Radio-Interview (Fund 6) prüfen. → Tom.
5. **Ältere Beiträge nachtragen?** Frühere Rückblicke und Lieder des Monats sind auf der Webseite nicht mehr vorhanden (Fund 3).
   Wenn sie im Vereins-OneDrive oder im Newsletter-Archiv liegen, können sie mit ihrem alten Datum nachgetragen werden – **optional**,
   nur wenn Zeit ist. → Tom.
6. **Redaktionell verantwortlich:** Mit einem Blog gibt es eindeutig redaktionelle Inhalte; das Impressum nennt dafür heute keine
   natürliche Person (`SEITE-rechtliches.md`, Fund 4, Abschnitt 7, Punkt 4). Gehört in den Rechtstexte-Auftrag. → Vorstand.
7. **RSS im Newsletter** (Einsparmöglichkeit, Abschnitt 6): Tarif prüfen. → Tom.

---

## 8. Checkliste für diese Seite

Einmalig:
- [ ] Wix Blog installiert, Blog-Seite heißt „Aus dem Netzwerk“, Adresse `/aus-dem-netzwerk`, im Menü unter „Über uns“ (Computer und Handy), Seitentitel gesetzt?
- [ ] Kommentare, Likes, Aufrufe, Lesezeit und Autor:in aus?
- [ ] Drei Kategorien angelegt, vier Beiträge mit Titelbild, Auszug, Kategorie und echtem Datum übertragen?
- [ ] Startseite: „Beitragsliste“ mit 3 neuesten, „Alle Beiträge →“; alte Abschnitte 5, 13, 14 **erst danach** gelöscht?
- [ ] Mitglied sein `#fokus`: „Beitragsliste“ mit 1 Fokus-Beitrag; Geschichte, Audio, Noten, Feedback dort gelöscht?
- [ ] Fußzeile „Aus dem Netzwerk“ auf allen Seiten (auch Jahrestagung)?
- [ ] Wix Blog in App-Status-Tabelle und Dienste-Liste eingetragen?
- [ ] Handy geprüft, Randnotizen „Vor Veröffentlichung“ nicht auf der echten Seite?
- [ ] Checkliste aus `DESIGN-foto.md`, Abschnitt 7, erfüllt (Ausnahme: kein Titelfoto, begründet in Entscheidung 6)?

Bei jedem Beitrag:
- [ ] Richtige Kategorie, Titelbild (warm, scharf, Einwilligung liegt vor), Auszug ein bis zwei Sätze?
- [ ] Überschrift höchstens ca. 60 Zeichen, Du-Ansprache, Gendern mit Doppelpunkt (außer in Zitaten)?
- [ ] Keine Preise, Fristen, Anmeldeformulare – stattdessen Verweis-Kasten mit einem Link auf den Hauptort?
- [ ] Alle Links angeklickt, Audio und PDF laufen?
- [ ] Nach dem Veröffentlichen: Startseite und (bei Fokus) Mitglied sein zeigen den Beitrag?
