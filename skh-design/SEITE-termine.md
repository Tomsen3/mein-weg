# SEITE-termine.md – Unterseite „Termine“ im Stil „Foto“

Stand: 25.09.2026 · Verantwortlich: Tom (Webseite/Marketing)
Vorschau: `skh-design/vorschau-foto-termine.html` (im Browser öffnen, Ordner `fotos/` muss daneben liegen)
Stilregeln: `DESIGN-foto.md` · Bausteine für Unterseiten: `SEITE-weiterbildung.md`, Abschnitt 5, `SEITE-sing-mit.md`, `SEITE-einrichtungen.md` und `SEITE-mitglied-sein.md`, jeweils Abschnitt 6 ·
Nachbarseiten: `vorschau-foto.html` (Start), `vorschau-foto-weiterbildung.html`, `vorschau-foto-sing-mit.html`, `vorschau-foto-einrichtungen.html`, `vorschau-foto-mitglied-sein.html` · Ist-Zustand: `IST-STRUKTUR.md`

Dieses Dokument erklärt, **wie die neue Seite „Termine“ aufgebaut ist, woher jeder Termin stammt, welche Seite
für welche Termine zuständig ist und warum**. Eine Person ohne Vorkenntnisse soll die Seite damit in Wix nachbauen
und später pflegen können.

**Rolle der Seite:** „Termine“ ist der **Gesamtkalender** des Vereins: Hier stehen alle öffentlichen Termine in
zeitlicher Reihenfolge (Module, Schnupperkurse, Come-together, Jahrestagung mit Liedernacht und
Mitgliederversammlung) und die **Vorschau aufs nächste Jahr**. Hauptort ist die Seite außerdem für die
**Online-Schnupperkurse** (Termine und Zugang). Einzelheiten zu einem Termin – Inhalte, Preise, Anmeldung – stehen
dort, wo sie hingehören (Weiterbildung, Veranstaltungsseite, Jahrestagung); „Termine“ fasst in einer Zeile zusammen
und verlinkt dorthin (Grundregel aus `DESIGN-foto.md`, Abschnitt 4).

**Zielgruppen:** (1) Interessierte, die wissen wollen, *wann* es losgehen kann, (2) Teilnehmende der Weiterbildung,
die ihr nächstes Modul oder schon das nächste Jahr planen, (3) Singleiter:innen (Come-together, Jahrestagung),
(4) Mitglieder (Mitgliederversammlung; ihre Online-Runden finden sie über einen Hinweis auf „Mitglied sein“).

---

## 1. Ausgangslage – was es heute gibt

Die Seite `/termine` (Menüpunkt TERMINE, ohne Unterpunkte) heißt heute „UNSERE VERANSTALTUNGEN 2025/26“. Beim
Auslesen am 25.09.2026 enthielt sie von oben nach unten:

| Nr. | Heutiger Inhalt | Beobachtung |
|---|---|---|
| 1 | Titel, zwei Sätze: „Unser Veranstaltungskalender ist prall gefüllt mit spannenden sikra-internen Events! Freu dich auf Weiterbildungsmodule, Online-Schnupperkurse, Supervisions-Runden, die Gitarre- und Ukulele-Factory und unsere beliebten Liedernächte …“ | „sikra-intern“ ist Vereinsjargon; die Liedernacht steht gar nicht im Kalender |
| 2 | „Gratis-Schnupperkurs“: zu jedem Modul vorher online, i. d. R. freitags 18:00–18:45 Uhr; Buttons **SCHNUPPERKURS-TERMINE** (PDF) und **zum Online-Schnupperkurs** (Teams-Link); „direkt über den Browser, ohne Installation und ohne Microsoft-Konto“ | gut – der einzige Ort mit dem aktuellen Schnupperkurs-PDF und dem Zugang |
| 3 | „Guitar- & Ukulele-Factory & Singleiter im Gespräch“: Buttons **MITGLIEDERTERMINE** (PDF) und **Zum Online-Angebot für Mitglieder**; Satz „Dieses Online-Angebot ist ausschließlich für Mitglieder“ | Doppelung mit „Mitglied sein“ (dort Hauptort) |
| 4 | Veranstaltungsliste (Wix-Events): Modul F, Modul P, Come-together – je Datum, Ort, Untertitel, „Infos & Anmeldung“ | nur **drei** Termine; Module in Österreich, Schnupperkurse und Jahrestagung fehlen |
| 5 | Newsletter, Spenden (Rumänien-Projekt), Kontakt Sonja Heim, Vera Kimmig, Sandra Roß-Lünenschloß | dieselben Kästen wie auf anderen Seiten |

### Woher die Termine heute kommen

| Terminart | Quelle heute | Automatisch? |
|---|---|---|
| Module in Deutschland, Come-together | **Wix-Events-App** (Veranstaltungen mit eigener Seite `/event-details/…`). Nur **3 Veranstaltungen** angelegt: Modul F, Modul P, Come-together. Dieselben 3 erscheinen auf `/termine` und auf der Startseite. | ja (vergangene fallen weg) |
| Anmeldung zu diesen Modulen | Wix-Events ist auf **externe Anmeldung** gestellt: „Anmelden“ führt nach `https://sonjaheim9.wixsite.com/my-site-3/anmeldung` (kostenlose Wix-Adresse statt `singende-krankenhaeuser.de/anmeldung`) | – (Abschnitt 7, Punkt 1) |
| Alle Module 2026 beider Zweige (auch vergangene) | **handgepflegte** Kästen auf den Zweig-Seiten `/kranken-und-gesundheitshäuser` und `/pflege-und-senioren`, je mit Modul-PDF | nein |
| Module in Österreich | nur auf den Zweig-Seiten und im Flyer; Anmeldung über Sybille Mikula (singende-krankenhaeuser.at) | nein |
| Schnupperkurse | nur als **PDF** („Schnupperkurstermine 2026“) | nein |
| Online-Termine für Mitglieder | nur als **PDF** („Online-Termine 2026 für Mitglieder“), auf `/termine` und `/mitglied-sein` | nein |
| Jahrestagung 2027 | eigener Bereich (9 Seiten); Anmeldung über ein **Wix-Formular** (`/anmeldungjahrestagung`), nicht über Wix-Events | nein |
| Vorschau 2027 | nur als **PDF** („Terminvorschau 2027“), verlinkt auf Startseite und Zweig-Seiten | nein |

**Ergebnis:** Nur 3 von 11 kommenden Terminen kommen automatisch aus Wix-Events; alles andere ist über PDFs und
handgepflegte Kästen auf vier Seiten verteilt.

### Die verlinkten PDFs (alle vollständig gelesen)

| PDF (Button, Seite) | Wix-Datei | Inhalt | Wichtige Funde |
|---|---|---|---|
| **Schnupperkurstermine 2026** (SCHNUPPERKURS-TERMINE, `/termine`) | `7530fd_7014b5c2…pdf`, 2 Seiten, 09.09.2026 | 15 Termine Jan.–Nov. 2026, freitags 18:00–18:45, „Kostenlos · Öffentlich · Teilnahme via Teams“, je beworbenes Modul und Dozent:innen; Kontakt Sonja Heim | **„Fr., 14. Mai 2026“** ist ein Donnerstag (Christi Himmelfahrt; vergangen). Schnupperkurs 23.10. nennt für „Modul B – Singen in der Traumatherapie“ den **30.10.–01.11.**, das Modul ist aber am **27.–29.11. in Wien**. Österreich-Online-Modul heißt hier „Modul C“. |
| **Jahresplanung** (JAHRESPLANUNG, beide Zweig-Seiten) | `7530fd_5584e7d4…pdf`, 2 Seiten, Dez. 2025 | **ältere Fassung** derselben Schnupperkurs-Liste | Enthält zwei Termine, die in der neuen Fassung fehlen: Schnupperkurs 04.09. zu „Modul A-Österreich 25.–27.9. Mit dem Herzen pflegen“ und **18.09. zu „P Modul V 23.–25.10.26 Singen in der Pflege, Pflichtmodul“**. → Zwei Fassungen im Umlauf; die Zweig-Seiten verlinken die veraltete. |
| **Alle Termine 2026** (ALLE TERMINE 2026, beide Zweig-Seiten) | `7530fd_44a0d86e…pdf`, 6 Seiten, Flyer „Weiterbildung Singleitung 2026“ (Stand Okt. 2025, reine Bilddatei – Text nicht durchsuchbar) | Einleitung, beide Zweige mit allen Modulen 2026, Österreich-Module, **„Jedes Modul kostet 320 €, erm. 15 % für Mitglieder 272 €“**, Kontakt Vera Kimmig (Malsch, 07246 9444-330 oder 0152 04301191) | **Modul F falsch:** „Kraftquelle: Gesundheitsförderndes Singen in der Psychoonkologie, Norbert Hermanns und Elke Ohlwein“ – tatsächlich „Mit der Stimme zur Stärke“ mit Jan Henning Foh und Monika Ananda Wiese. **Modul V (Pflichtmodul Pflege) 23.–25.10.2026 Einbeck** steht nur hier und in der alten Jahresplanung. Schnupperkurse „18–19 Uhr“ und „**Zoom**-Link“ (richtig: 18:00–18:45, Teams). „Singleiter/in“, „Senioren“ nicht gegendert. |
| **Terminvorschau 2027** (Startseite, beide Zweig-Seiten) | `7530fd_cdbbfb85…pdf`, 1 Seite, „Stand: August 2026“ | 12 Termine Zweig Krankenhaus, 5 Termine Zweig Pflege, je Datum, Titel, Leitung, Ort | **Sie-Ansprache** („finden Sie“), sonst überall du. Tippfehler „Tönener Atem“, „Jan Hennig Foh“. Die **Jahrestagung 2027** fehlt. Nicht chronologisch (Online I vor Modul A). Buchstaben wechseln gegenüber 2026 (z. B. „Mit der Stimme zur Stärke“ 2026 = F, 2027 = D; Pflichtmodul Pflege 2027 = Modul III). |
| **Online-Termine 2026 für Mitglieder** (MITGLIEDERTERMINE) | `7530fd_6b186319…pdf` | beschrieben in `SEITE-mitglied-sein.md`, Abschnitt 1 | – |
| **Modul-PDFs** (Modul F, P, Come-together, Österreich-Online-Modul, Modul B Wien) | je 1 Seite | Beschreibung, Zielgruppe, **Modulgebühr 320 €, 272 € für Mitglieder** (ohne Unterkunft/Verpflegung), Seminarzeiten Fr 18:00 bis So 13:00 | Preis steht nur hier und im Flyer, nicht auf der Webseite (offener Punkt 4 in `SEITE-weiterbildung.md`). |
| **Hinführung Jahrestagung** (Jahrestagung 2027) | `7530fd_ef984f32…pdf`, 2 Seiten | Text von Elke Wünnenberg zum Thema „Flow – ins Fließen kommen. Wandlungskraft Singen“ | – |

### Weitere Funde beim Abgleich

| Fund | Wo | Folge |
|---|---|---|
| Hinweise „regelmäßig wiederkehrend (nächster Termin …)“ auf den Zweig-Seiten widersprechen der Terminvorschau 2027 in mehreren Fällen: Modul B „Juni 2027“ (PDF: März), Tönender Atem „März 2027“ (PDF: Juni), Mit der Stimme zur Stärke „November 2027“ (PDF: Juli), Modul P „Oktober 2027“ (PDF: November), Musik als Brücke „Juli 2027“ (steht 2027 gar nicht im Plan) | Zweig-Seiten | ein Grund mehr für **eine** Terminquelle (Abschnitt 2) |
| Liedernacht-Ort: „Evangelische Stellinger Kirche“ (Programm) und „**Stellenberger** Kirche, Molkenbuhrstraße 8“ (Seite Liedernacht) | Jahrestagung | Vorschau schreibt „Stellinger Kirche“; Abschnitt 7, Punkt 5 |
| Tagungshotel „Hagenbecker**straße** 150“ | Jahrestagung | Schreibweise prüfen (vermutlich „Hagenbeckstraße“); Vorschau nennt nur „Parkhotel Hagenbeck, Hamburg“ |
| Jahrestagung: Mitglieder zahlen 210 € statt 280 € (Frühbucher) bzw. 250 € statt 320 € – das sind **25 % bzw. 22 %** weniger, nicht 15 % | Anmeldung Jahrestagung | „Mitglied sein“ und Startseite sagen „15 % auf Module **und Jahrestagungen**“. Abschnitt 7, Punkt 6 |
| Modul V „Mit dem Herzen pflegen“ (Pflichtmodul Pflege, 23.–25.10.2026, Einbeck) steht **weder** auf der Pflege-Seite **noch** in Wix-Events | Flyer, alte Jahresplanung | Findet es statt? Abschnitt 7, Punkt 2 – **wichtig**, weil es das Pflichtmodul des Pflege-Zweigs ist |

---

## 2. Hauptort für Termine – Vorschlag und Begründung

**Vorschlag:** **„Termine“ = Gesamtkalender** (was ist wann, für alle Arten), **„Weiterbildung“ = Module mit
Auswahl und Anmeldung** (welches Modul passt zu meinem Zweig, was kostet es, wie melde ich mich an). Beide Listen
kommen in Wix **aus derselben Quelle, der Wix-Events-App** – der Termin wird nur einmal angelegt und erscheint
automatisch auf beiden Seiten und auf der Startseite. Damit gibt es keine doppelte Pflege, obwohl der Termin an
drei Stellen sichtbar ist.

**Warum nicht nur eine Seite mit Modulen?** Die beiden Seiten beantworten verschiedene Fragen. Wer auf
„Weiterbildung“ ist, hat sich für den Weg interessiert und braucht den Filter nach Zweig und die Anmeldung.
Wer auf „Termine“ klickt, will wissen, *was als Nächstes kommt* – egal ob Modul, Schnupperkurs oder Tagung.
Die Grundregel „ein Hauptort je Information“ zielt auf **Pflege** (nur eine Stelle ändern) und **Widerspruchsfreiheit**;
beides ist erfüllt, wenn beide Listen aus Wix-Events kommen. Handgepflegte Terminlisten dagegen gibt es nur noch
an einer Stelle: der Vorschau aufs nächste Jahr auf „Termine“ (bis die Termine in Wix-Events stehen).

| Thema | Steht auch auf … | Hauptort | Auf der anderen Seite (Vorschau) | Grund |
|---|---|---|---|---|
| **Wann ist welcher Termin?** (alle Arten, chronologisch) | Startseite (Band 4), Weiterbildung (Module) | **Termine** (`#kalender`) | Startseite: die **3 nächsten** Termine automatisch + „Alle Termine →“; Weiterbildung: Module mit Zweig-Filter + „Alle Termine auf einen Blick →“ | eine Übersicht für alles; die Teilansichten kommen aus derselben Datenquelle |
| **Modul-Inhalte, Zweig, Zertifikat, Preis, Anmeldung** | Termine (eine Zeile je Modul) | **Weiterbildung** (`#module`) bzw. Veranstaltungsseite in Wix | Termine: Kasten „Gut zu wissen“ mit **einem** Satz + Link „Module nach Zweig filtern →“; je Modul „Details & anmelden →“ | Termine zeigt nur Datum, Ort, Leitung und Etiketten |
| **Online-Schnupperkurse** (Termine, Zeit, Zugang, PDF) | Weiterbildung (Bereich „Erst mal reinschnuppern“), Zweig-Seiten („Jahresplanung“) | **Termine** (`#schnuppern`) | Weiterbildung: Bereich bleibt (wichtiger Schritt vor der Entscheidung), aber Button **„Termine & Zugang“ → Termine** statt „Jahresplanung & Online-Zugang“ (PDF) | Die Schnupperkurse sind Termine; ihr Zugang ist öffentlich. Heute liegen die aktuelle Liste und der Zugang schon auf `/termine`. |
| **Vorschau aufs nächste Jahr** | Startseite, Zweig-Seiten, Weiterbildung (PDF-Links) | **Termine** (`#vorschau`) | Startseite und Weiterbildung: Link „Vorschau 2027 →“ statt direkt aufs PDF | Liste auf der Seite ist auf dem Handy lesbar, das PDF bleibt als Download |
| **Online-Runden für Mitglieder** (Factory, Singleiter:innen im Gespräch) | Termine (heute eigener Kasten mit PDF und Zugang) | **Mitglied sein** (`#unterstuetzung`) – wie festgelegt | Termine: **ein** Hinweis ohne Daten, Link „Zu den Online-Terminen für Mitglieder →“ | nur für Mitglieder; Termine und Zugang werden an einer Stelle gepflegt |
| **Jahrestagung** (Programm, Preise, Anmeldung, Liedernacht) | Termine, Startseite (Hinweisleiste) | **Jahrestagung-Bereich** | Termine: 3 Zeilen im Kalender (Tagung, Mitgliederversammlung, Liedernacht) + Bereich mit 5 Eckdaten, Buttons „Zur Jahrestagung“ / „Programm ansehen“; **keine Preise**, nur „Frühbucherpreis bis 31.01.2027 – Mitglieder zahlen weniger“ | Preise und Programm ändern sich; sie werden nur im Jahrestagung-Bereich gepflegt |
| **Singgruppen vor Ort** (wöchentliche Singkreise) | Singende Landkarte | **Singende Landkarte** | Termine: ein Hinweis mit Link | Diese Termine pflegen die Singleiter:innen selbst; eine zweite Liste würde veralten |
| **Weiterbildungsberatung** (Vera Kimmig) | Weiterbildung, Jahrestagung | **Weiterbildung** (`#beratung`) | Termine: ein Satz (Zeiten) + Link; Österreich: Sybille Mikula | Kontaktdaten nur an einer Stelle pflegen |
| **Flyer „Weiterbildung Singleitung 2026“** (PDF „Alle Termine 2026“) | Zweig-Seiten, Weiterbildung (Link) | **Weiterbildung** (als Werbeflyer, **erst nach Korrektur**) | Termine: nicht verlinkt; Weiterbildung: Link „Alle Termine 2026 (PDF)“ ersetzt durch „Alle Termine auf einen Blick →“ | Der Flyer nennt ein falsches Modul F (Abschnitt 1); die Liste auf „Termine“ ersetzt ihn als Terminübersicht |

### Korrekturen auf den Nachbar-Vorschauen (25.09.2026)

| Seite | Stelle | Vorher | Nachher | Grund |
|---|---|---|---|---|
| alle fünf | Menüpunkt „Termine“ | `#` | → `vorschau-foto-termine.html` | Seite gibt es jetzt |
| Startseite | Band 4 „Die nächsten Termine“ | „Terminkalender →“ (`#`), „Terminvorschau 2027 (PDF) →“ | „Alle Termine →“ (`#kalender`), „Vorschau 2027 →“ (`#vorschau`) | Hauptort Termine; die 3 Termine und „Details & anmelden“ bleiben |
| Weiterbildung | unter „Die nächsten Module“ | „Alle Termine 2026 (PDF) →“, „Terminvorschau 2027 (PDF) →“ | „Alle Termine auf einen Blick →“, „Vorschau 2027 →“ | wie oben; Flyer-PDF erst nach Korrektur wieder verlinken |
| Weiterbildung | „Erst mal reinschnuppern“ | Faktenzeile „Wo: online – den Zugang findest du in der Jahresplanung“, Button „Jahresplanung & Online-Zugang“ | „Wo: online über Microsoft Teams, direkt im Browser“, Button „Termine & Zugang“ → `#schnuppern` | Die „Jahresplanung“ ist eine veraltete PDF und enthält keinen Zugang |

Nicht geändert: „Details & anmelden“ (führt in Wix auf die Veranstaltungsseite, in der Vorschau Platzhalter `#`),
Hinweisleiste „Zur Jahrestagung →“ (Hauptort Jahrestagung), „Alle Termine 2026 (PDF)“ auf „Mitglied sein“ (das
ist das Mitglieder-PDF, Hauptort dort).

---

## 3. Aufbau von oben nach unten (6 Bereiche)

| Nr. | Fläche | Bereich (Sprungmarke) | Inhalt | Warum an dieser Stelle |
|---|---|---|---|---|
| – | Weizen | Hinweisleiste | Jahrestagung 2027 | auf allen Seiten gleich |
| 0 | Weiß | Kopfleiste | Logo, 6 Menüpunkte, „Termine“ **gelb unterstrichen**, Button „Mitglied werden“ | zeigt, wo man ist |
| – | Leinen | Brotkrumen | „Start › Termine“ | Rückweg |
| 1 | Titelfoto + Tiefgrün-Kasten links | **Wann singen wir zusammen?** | ein Satz, was es alles gibt; Buttons „Nächste Termine“ und „Kostenlos reinschnuppern →“ | die zwei häufigsten Absichten; die Menschen im Foto stehen rechts, deshalb Kasten links |
| – | Leinen | Sprungleiste | 5 Sprungziele | wie auf den anderen Unterseiten |
| 2 | Leinen | **Die nächsten Termine** (`#kalender`) | Filter nach Art (Alle / Module / Schnupperkurse / Treffen & Jahrestagung); Liste mit Monatszeilen, je Datum, Titel, Ort, Leitung, Etiketten, Link; Kasten „Gut zu wissen“; Links Vorschau 2027 und Online-Termine für Mitglieder | Das ist die Antwort auf die Frage, mit der man die Seite öffnet |
| 3 | Salbei | **Erst mal reinschnuppern** (`#schnuppern`) | Erklärung, Faktenliste (Wann, Wo, Kosten, Für wen), Button „Zum Online-Schnupperkurs“ (Teams-Link), PDF; Foto | niedrigste Hürde; Hauptort für Zugang und Liste |
| 4 | Weizen | **Drei Tage im Fluss – in Hamburg** (`#jahrestagung`) | Thema, 5 Eckdaten (Wann, Wo, Frühbucher, Liedernacht, Mitgliederversammlung), Buttons; Foto links | größter Termin des Jahres, aber nur Kurzfassung |
| 5 | Leinen | **Vorschau 2027** (`#vorschau`) | Satz zum Stand, Hinweis Jahrestagung, PDF; Foto; zwei kompakte Listen nach Zweig (12 + 5 Termine), Pflichtmodule markiert | Planung übers Jahr hinaus |
| 6 | Salbei | **Was du hier nicht findest** (`#mehr`) | Foto; drei Hinweise: Online-Runden für Mitglieder → Mitglied sein; Singgruppe in deiner Nähe → Landkarte; Fragen → Weiterbildungsberatung (und Sybille Mikula für Österreich) | fängt Besucher:innen auf, die hier etwas anderes suchen |
| 7 | Tiefgrün | **Nichts verpassen – sei dabei.** (`#mitglied`) | Mitgliedervorteile in einem Satz, Buttons „Mitglied werden“, „Alle Vorteile →“; Newsletter | Abschluss wie auf allen Unterseiten |
| – | Tiefgrün | Fußzeile | wie Startseite | |

Die Reihenfolge folgt den Fragen: **Was kommt als Nächstes? → Kann ich erst mal reinschauen? → Was ist das große
Treffen? → Was kommt nächstes Jahr? → Und wenn ich etwas anderes suche?**
Die Bänder wechseln Leinen → Salbei → Weizen → Leinen → Salbei → Tiefgrün.

**Stand der Liste:** gezeigt werden Termine **ab dem 25.09.2026** (Tag der Vorschau). Das Wiener Modul „Mit dem
Herzen pflegen“ (25.–27.09.) lief an diesem Wochenende und ist deshalb nicht mehr dabei.

---

## 4. Woher die Inhalte stammen

| Bereich / Termin | Quelle |
|---|---|
| Modul F, Modul P, Come-together (Datum, Uhrzeit, Ort) | Wix-Events (`/event-details/…`), `/termine` |
| Leitung, Untertitel, „findet nur einmal statt“, „wird nicht angerechnet“, Österreich-Module | Zweig-Seiten und Modul-PDFs |
| „Alle Module Fr 18:00 bis So 13:00“ | Modul-PDFs, Veranstaltungsseiten |
| Schnupperkurse 02.10., 23.10., 06.11., Zeiten, „ohne Installation und ohne Microsoft-Konto“ | Schnupperkurstermine 2026 (PDF), `/termine` |
| Jahrestagung: Datum, Ort, Thema, „Drei Tage voller Stimmen …“, Frühbucher bis 31.01.2027, Mitgliederversammlung, Liedernacht, Beginn 10:30 und Ende gegen 13:15 | `/jahrestagung2027`, `/programmjahrestagung`, `/anmeldungjahrestagung`, `/liedernacht` |
| Vorschau 2027 | Terminvorschau 2027 (PDF) |
| Sprechzeiten Vera Kimmig | Zweig-Seiten |
| Mitgliedervorteile (15 %, Online-Runden) | `SEITE-mitglied-sein.md` |

**Bearbeitung:** du-Ansprache (auch statt „Sie“ im 2027-PDF), gegendert mit Doppelpunkt, gekürzt. Tippfehler
berichtigt: „Tönener Atem“ → „Tönender Atem“, „Jan Hennig Foh“ → „Jan Henning Foh“, „SingleiterInnen und
SängerInnen“ → gekürzt auf „Stimmcoaching“. Die Vorschau 2027 ist nach Datum sortiert (im PDF steht das Online-Modul
vor Modul A). Titel einheitlich wie auf der Webseite (z. B. Österreich-Online-Modul „Die heilende Kraft des Singens
in der Trauer- und Sterbebegleitung“; Flyer und Schnupperkurs-PDF nennen es „Lieder der Liebe und der Hoffnung“).
Namen wie in der Quelle („Alwine Deege“ – Schreibweise offen, siehe `SEITE-weiterbildung.md`, Abschnitt 7, Punkt 1).

**Selbst formuliert** (bitte bei der Abnahme gegenlesen): Titel „Wann singen wir zusammen?“ und Titeltext,
„Alle Veranstaltungen, zu denen du dich anmelden oder einfach dazukommen kannst. Vergangene Termine verschwinden von
selbst.“, „Drei Tage im Fluss – in Hamburg“, „Sobald ein Modul zur Anmeldung freigeschaltet ist, steht es oben im
Kalender.“, „Was du hier nicht findest“ mit den drei Hinweisen, „Nichts verpassen – sei dabei.“, „Für wen: für alle
Interessierten, auch ohne Mitgliedschaft“ (laut PDF „öffentlich“), „einige Wochen vor dem Modul“ (abgeleitet aus den
Terminen). **Annahme:** Der Newsletter kündigt neue Termine an – bitte bestätigen.

---

## 5. Fotos

Alle Fotos stammen von der heutigen Webseite (Wix-Medien) und liegen verkleinert in `fotos/` mit dem Präfix `tm-`.
Keines ist auf einer anderen Foto-Vorschau verwendet (per Bildvergleich geprüft). In Wix das **Original** nehmen.

| Datei | Bereich | Motiv | Herkunft (heutige Seite, Wix-Datei) |
|---|---|---|---|
| `tm-titel.jpg` | Titelfoto | sonniger Saal, viele Menschen strecken die Arme hoch | `/termine`, Bild zu Modul F, `7530fd_30d7d4ea…jpg` – Original nur **1594 px** breit (unter der Empfehlung von 2400 px, siehe `DESIGN-foto.md`); reicht für die Unterseite, für eine größere Darstellung ein schärferes Foto suchen |
| `tm-schnupperkurs.jpg` | Schnupperkurse | Frau mit buntem Schal und Mann singen | Workshops (Jahrestagung), `29_singendes-paar.jpg` (Wix: `7530fd_1a9b35ba…jpg`) |
| `tm-jahrestagung.jpg` | Jahrestagung | Tanz und Gesang im großen Saal | Jahrestagung 2027 (Rückblick), `1000 Meilen.jpg` (Wix: `7530fd_57650ff4…jpg`), Original 1024 px |
| `tm-vorschau.jpg` | Vorschau 2027 | Hand mit Notizblatt und Stift | Jahrestagung 2027, `HeilendesSingen_mid_012.jpg` |
| `tm-mehr.jpg` | Was du hier nicht findest | Frau mit Brille singt lachend | Workshops (Jahrestagung), `DSC00201.JPG` |

**Nicht verwendet:** die Bilder zu Modul P und Come-together (sind schon als `frage1-singleiterin.jpg` auf der
Startseite bzw. ohne gutes Motiv), Fotos von Hamburg und Hotel (Stock- bzw. Werbefotos, gehören auf die
Jahrestagung-Seiten).

**Datenschutz:** Vor der Veröffentlichung prüfen, ob die Einwilligungen der erkennbaren Personen auch diese
Verwendung abdecken (besonders `tm-schnupperkurs.jpg` und `tm-mehr.jpg` als Nahaufnahmen).

---

## 6. Neue Bausteine und Umsetzung in Wix

Farben, Schriften und Rundungen wie in `DESIGN-foto.md`; Filter, Etiketten, Terminliste und Hinweiskasten wie in
`SEITE-weiterbildung.md`, Abschnitt 5; Sprungleiste wie in `SEITE-sing-mit.md`, Abschnitt 6. **Neu auf dieser Seite:**

| Baustein | Aussehen | Begründung |
|---|---|---|
| **Monatszeile** im Kalender | kleine Überschrift in Großbuchstaben (Blattgrün-Schrift, 15 px, fett) über den Terminen eines Monats; beim Filtern verschwinden leere Monate | Ältere Besucher:innen orientieren sich an Monaten schneller als an Zahlen |
| **Etikett nach Art** | wie Weiterbildung, zusätzlich „Schnupperkurs“, „Treffen“, „Jahrestagung“, „für Mitglieder“, „kostenlos“ | Die Art des Termins ist ohne Lesen des Titels erkennbar |
| **Zweispaltige Jahresvorschau** | zwei kompakte Listen (Datum links, Titel fett, Ort und Leitung darunter), auf dem Handy untereinander | lange Liste bleibt überschaubar, die Zweige getrennt |

Kontraste: nur bereits geprüfte Kombinationen (Anthrazit auf Leinen/Salbei/Weizen/Weiß, Blattgrün-Schrift auf
Leinen, Anthrazit auf Gelb, Weiß und Gelb auf Tiefgrün) – alle über 4,5 : 1. Fließtext 18 px; kleiner sind nur
Etiketten, Monatszeilen, Datumszusätze und Brotkrumen (wie auf allen Unterseiten).

### Umsetzung in Wix – Schritt für Schritt

> Wie bei der Startseite: zuerst an der **duplizierten Website** testen.

1. **Alle Termine in Wix-Events anlegen** (*Dashboard → Veranstaltungen*): zusätzlich zu Modul F, P und Come-together
   auch die Österreich-Module, die **Schnupperkurse** (Ort: online, Anmeldung: keine bzw. externer Link auf den
   Teams-Zugang), die **Jahrestagung**, die **Liedernacht** und die **Mitgliederversammlung**. Grund: Dann füllt sich
   der Kalender von selbst, und vergangene Termine verschwinden – niemand muss Listen von Hand pflegen.
2. **Kategorien vergeben** (*Veranstaltungen → Kategorien*): für die Art „Modul“, „Schnupperkurs“, „Treffen &
   Jahrestagung“ und für den Zweig „Krankenhaus & Gesundheit“, „Pflege & Senior:innen“ (siehe
   `SEITE-weiterbildung.md`, Abschnitt 6, Schritt 4). Auf „Termine“ filtert das Element *Veranstaltungsliste* nach
   Art, auf „Weiterbildung“ nach Zweig – eine Datenquelle, zwei Ansichten.
3. **Anmeldelink korrigieren:** in jeder Veranstaltung unter *Anmeldung → externer Link* die Adresse
   `https://sonjaheim9.wixsite.com/my-site-3/anmeldung` durch `https://www.singende-krankenhaeuser.de/anmeldung`
   ersetzen (Abschnitt 7, Punkt 1).
4. **Seite `/termine` behalten** (Adresse nicht ändern) und nach Abschnitt 3 neu aufbauen. Das Element
   *Veranstaltungsliste* als **Liste**, nur **kommende** Veranstaltungen, Filter nach Kategorie einschalten.
5. **Anker setzen:** `kalender`, `schnuppern`, `jahrestagung`, `vorschau`, `mehr`, `mitglied`.
6. **Mitglieder-Kasten ersetzen:** den Kasten „Guitar- & Ukulele-Factory & Singleiter im Gespräch“ auf `/termine`
   durch den Hinweis aus Bereich 6 ersetzen (Hauptort ist „Mitglied sein“).
7. **Vorschau 2027** als Text anlegen (zwei Listen). Sobald die 2027-Termine in Wix-Events stehen, den Bereich
   leeren bzw. auf das Jahr danach umstellen.
8. **Nachbarseiten** umstellen wie in Abschnitt 2 („Korrekturen auf den Nachbar-Vorschauen“); auf den Zweig-Seiten
   den Button JAHRESPLANUNG (alte PDF) entfernen oder auf `/termine#schnuppern` setzen.
9. **Fotos** nach Abschnitt 5 einsetzen (Ecken 20 px, kein Rahmen, kein Schatten).
10. **Handy-Ansicht prüfen**, dann Vorschau an Vera (Termine, Anmeldung), Sonja (Geschäftsführung) und Martin und
    Paula (Vorstand) zur Abnahme.

### Pflege-Ablauf

| Wann | Was | Wo |
|---|---|---|
| neuer Termin | als Veranstaltung in Wix-Events anlegen, Kategorien setzen, Modul-PDF anhängen | Wix-Events (erscheint automatisch auf Termine, Weiterbildung, Startseite) |
| neuer Schnupperkurs-Plan | Schnupperkurse als Veranstaltungen anlegen **und** PDF über *Datei ersetzen* austauschen (Link bleibt gleich) | Wix-Events, `#schnuppern` |
| August (Jahresvorschau fertig) | Vorschau fürs nächste Jahr eintragen, PDF ersetzen | `#vorschau` |
| nach jeder Jahrestagung | Eckdaten der nächsten Tagung eintragen | `#jahrestagung`, Hinweisleiste auf allen Seiten |
| Terminänderung | **nur** in Wix-Events ändern; PDFs bei der nächsten Gelegenheit nachziehen | Wix-Events |

Solange Schritt 1 nicht umgesetzt ist, müssen Schnupperkurse, Österreich-Module und Jahrestagung auf „Termine“ **von
Hand** gepflegt werden. Zuständigkeit klären (Abschnitt 7, Punkt 7).

---

## 7. Offene Punkte – vor der Veröffentlichung klären

1. **Anmeldelink der Veranstaltungen:** zeigt auf `sonjaheim9.wixsite.com/my-site-3/anmeldung` (kostenlose
   Wix-Adresse). Konnte in dieser Umgebung nicht geöffnet werden; vermutlich leitet sie auf die eigene Domain um. →
   In Wix-Events auf `singende-krankenhaeuser.de/anmeldung` ändern (Schritt 3). **Sofort umsetzbar.**
2. **Pflichtmodul Pflege 2026:** Modul V „Mit dem Herzen pflegen“, 23.–25.10.2026, Einbeck (Melanie Wilde, Paula
   Bieker) steht nur im Flyer und in der alten Jahresplanung, nicht auf der Pflege-Seite und nicht in Wix-Events.
   Findet es statt? Wenn ja: anlegen und in die Vorschau aufnehmen (fehlt dort bewusst). Wenn nein: Flyer korrigieren.
   → Vera.
3. **Flyer „Weiterbildung Singleitung 2026“** (PDF „Alle Termine 2026“): Modul F falsch, „Zoom“ statt Teams,
   Schnupperkurs „18–19 Uhr“ statt 18:00–18:45; reine Bilddatei (für Vorleseprogramme nicht lesbar). → Korrigieren
   (Gestaltung: Die Gründerin) und dann nur auf „Weiterbildung“ verlinken.
4. **Zwei Fassungen der Schnupperkurs-Liste:** Zweig-Seiten verlinken die alte („Jahresplanung“, Dez. 2025),
   `/termine` die neue. → Alte Datei entfernen. In der neuen: „Fr., 14. Mai“ → „Do.“ (bzw. Termin prüfen) und den
   Termin des Wiener Moduls (27.–29.11. statt 30.10.–01.11.) korrigieren.
5. **Ort der Liedernacht:** „Stellinger Kirche“ oder „Stellenberger Kirche“, Adresse Molkenbuhrstraße 8? Und
   „Hagenbeckerstraße“ oder „Hagenbeckstraße“ (Hotel)? → Auf den Jahrestagung-Seiten vereinheitlichen.
6. **Mitgliederrabatt Jahrestagung:** tatsächlich 25 % (Frühbucher) bzw. 22 % – „Mitglied sein“ und Startseite
   sprechen von 15 % auf Module **und Jahrestagungen**. Die Vorschau „Termine“ sagt deshalb nur „Mitgliederpreis“.
   → Entscheiden, ob die Formulierung auf „Mitglied sein“ (`#vorteile`) und der Startseite (Band 7) angepasst wird
   (Vorschlag: „15 % auf alle Module, Mitgliederpreis bei der Jahrestagung“).
7. **Wer pflegt die Termine?** Heute verteilen sich Termine auf Wix-Events (3), zwei Zweig-Seiten und vier PDFs.
   → Eine zuständige Person festlegen (naheliegend: Vera, Geschäftsstelle) und Schritt 1 der Wix-Umsetzung
   umsetzen, damit nur noch an einer Stelle gepflegt wird.
8. **Terminvorschau 2027:** auf du umstellen, Tippfehler berichtigen, Jahrestagung ergänzen, nach Datum sortieren;
   die Hinweise „nächster Termin …“ auf den Zweig-Seiten an die Vorschau angleichen oder löschen.
9. **Schnupperkurse offen oder mit Anmeldung?** Das PDF sagt „öffentlich“; ob man sich vorher melden soll, steht
    nirgends. Die Vorschau sagt „für alle Interessierten“. → Vera bestätigt.
10. **Einwilligungen** der fotografierten Personen (Abschnitt 5); besseres Titelfoto (Originalbreite 1594 px).

---

## 8. Checkliste für diese Seite

- [ ] Alle kommenden Termine in Wix-Events, Kategorien gesetzt, Filter nach Art funktioniert?
- [ ] Startseite, Weiterbildung und Termine zeigen dieselben Termine (dieselbe Quelle)?
- [ ] Anmeldelink der Veranstaltungen zeigt auf `singende-krankenhaeuser.de/anmeldung`?
- [ ] Schnupperkurs-Zugang funktioniert ohne Konto?
- [ ] Nur **eine** Schnupperkurs-PDF im Umlauf, Button JAHRESPLANUNG entfernt?
- [ ] Menüpunkt „Termine“ und alle Links „Alle Termine“ / „Vorschau“ auf allen Seiten → `/termine`?
- [ ] Jahrestagung: Datum, Ort, Frühbucherfrist hier und im Jahrestagung-Bereich gleich?
- [ ] Alle Sprungziele funktionieren (auch auf dem Handy), kein horizontales Scrollen?
- [ ] Alle Punkte aus Abschnitt 7 geklärt?
- [ ] Checkliste aus `DESIGN-foto.md`, Abschnitt 7, erfüllt?
