# SEITE-weiterbildung.md – Unterseite „Weiterbildung“ im Stil „Foto“

Stand: 25.09.2026 · Verantwortlich: Tom (Webseite/Marketing)
Vorschau: `skh-design/vorschau-foto-weiterbildung.html` (im Browser öffnen, Ordner `fotos/` muss daneben liegen)
Stilregeln: `DESIGN-foto.md` · Startseite: `vorschau-foto.html` · Ist-Zustand: `IST-STRUKTUR.md`
Nachbarseite: **Sing mit** (Zertifikat beantragen) → `SEITE-sing-mit.md` + `vorschau-foto-sing-mit.html` ·
**Für Einrichtungen** (Mitarbeitende weiterbilden) → `SEITE-einrichtungen.md` + `vorschau-foto-einrichtungen.html` ·
**Mitglied sein** (Beiträge, 15 % Rabatt, auch für Mitgliedseinrichtungen) → `SEITE-mitglied-sein.md` + `vorschau-foto-mitglied-sein.html` ·
**Termine** (Gesamtkalender, Schnupperkurse, Vorschau 2027) → `SEITE-termine.md` + `vorschau-foto-termine.html`

Dieses Dokument erklärt, **wie die neue Weiterbildungsseite aufgebaut ist, woher jeder Inhalt
stammt und warum er so angeordnet ist**. Eine Person ohne Vorkenntnisse soll die Seite damit in
Wix nachbauen und später pflegen können.

---

## 1. Ausgangslage – warum eine neue Seite?

Heute gibt es unter dem Menüpunkt WEITERBILDUNG fünf Unterseiten (siehe `IST-STRUKTUR.md`).
Beim Auslesen am 25.09.2026 ist aufgefallen:

| Beobachtung | Folge für Besucher:innen |
|---|---|
| Die Seiten **„Weiterbildung“ und „Wichtige Infos“ haben exakt denselben Inhalt.** | doppelter Pflegeaufwand, Verwirrung („habe ich das schon gelesen?“) |
| Die Zweig-Seiten „Kranken- & Gesundheitshäuser“ und „Pflege & Senioren“ listen **alle Module seit Januar**, auch längst vergangene. | man muss weit scrollen, bis ein Termin kommt, den man noch buchen kann |
| Viele Module stehen auf **beiden** Zweig-Seiten (z. B. Modul C, D, F, Come-together). | dieselbe Information muss an zwei Stellen geändert werden |
| Wichtige Fakten (Rabatt 15 %, Zimmerpreise, Rücktritt) stehen verstreut, teils nur im Anmeldeformular. | Fragen landen per Telefon bei der Weiterbildungsberatung |

**Entscheidung:** Eine einzige Übersichtsseite „Weiterbildung“ beantwortet alle Grundfragen
(Welcher Zweig? Wie viele Module? Was lerne ich? Was kostet die Unterkunft? Wann ist das
nächste Modul?). „Wichtige Infos“ geht in dieser Seite auf.

**Entscheidung Zweig-Seiten (25.09.2026, Tom (Vorstand)):** Die Seiten `/kranken-und-gesundheitshäuser` und `/pflege-und-senioren`
werden **nicht** neu gestaltet, sondern per 301 auf `/weiterbildung` umgeleitet (ursprünglich sollten sie für die
vollständige Modulliste bestehen bleiben). Begründung:
1. **Doppelte Pflege:** Viele Module stehen heute auf beiden Seiten; jede Änderung muss zweimal gemacht werden, und
   die Hinweise „nächster Termin …“ widersprechen schon jetzt der Terminvorschau 2027 (`SEITE-termine.md`, Abschnitt 1).
2. **Der Filter ersetzt sie:** Die Modulliste auf „Weiterbildung“ (`#module`) zeigt nach Zweig gefiltert alle
   kommenden Module aus Wix-Events – das ist genau der Inhalt der Zweig-Seiten, nur ohne vergangene Termine.
3. **Alles andere hat schon einen Hauptort:** Zielgruppen-Texte und Buchstabe/römische Zahl → Weiterbildung
   (Bereich „Wähle deinen Schwerpunkt“ und Modulliste); Schnupperkurse, Vorschau und Österreich-Module mit
   Sybille Mikula → Termine; Beratung Vera Kimmig → Weiterbildung (`#beratung`); Modulbeschreibung und Preis → jeweilige
   Veranstaltungsseite in Wix-Events.
4. **Veraltete PDFs verschwinden mit:** „Jahresplanung“ (alte Schnupperkurs-Liste) und „Alle Termine 2026“ (Flyer mit
   falschem Modul F) sind nur dort verlinkt.

**Reihenfolge ist wichtig:** Erst umleiten, wenn **alle** Module beider Zweige (auch Österreich) als Veranstaltungen mit
Zweig-Kategorie in Wix-Events stehen (`SEITE-termine.md`, Abschnitt 6, Schritte 1–2). Sonst fehlen nach der Umleitung
Module. In der Vorschau führen die Links „Alle Module dieses Zweigs →“ jetzt zur gefilterten Modulliste.

---

## 2. Aufbau von oben nach unten (10 Bereiche)

| Nr. | Fläche | Bereich | Inhalt | Warum an dieser Stelle |
|---|---|---|---|---|
| – | Weizen | Hinweisleiste | Jahrestagung 2027 (wie Startseite) | auf allen Seiten gleich |
| 0 | Weiß | Kopfleiste | Logo, 6 Menüpunkte, „Weiterbildung“ **gelb unterstrichen** | zeigt, auf welcher Seite man ist |
| – | Leinen | Brotkrumen | „Start › Weiterbildung“ | ältere Besucher:innen finden leichter zurück |
| 1 | Titelfoto + Tiefgrün-Kasten | **Werde Singleiter:in** | Zitat Ya Beppo, Begrüßung, Buttons „Nächste Module“ und „Kostenlos reinschnuppern“ | die zwei häufigsten Absichten sofort erreichbar |
| 2 | Leinen | **Wähle deinen Schwerpunkt** | die zwei Zweige als große Fotokarten mit „Zertifikat 1/2“, Kasten „Gut zu wissen“ (Module einzeln buchbar) | erste Entscheidung, die man treffen muss |
| 3 | Salbei | **So viele Module brauchst du** (Sprungmarke `#modulzahl`) | 5 / 4 / 2 Module mit Erklärung, Pflichtmodul je Zweig, Link „Zertifikat beantragen“ auf die Seite Sing mit | beantwortet die häufigste Frage mit einer großen Zahl; der Antrag selbst steht auf Sing mit (siehe `SEITE-sing-mit.md`, Abschnitt 2) |
| 4 | Leinen | **Was du mitbringst / Was du lernst** | zwei Fotos mit Häkchen-Listen | nimmt Unsicherheit („Kann ich das?“) |
| 5 | Weizen | **So läuft die Weiterbildung** | Faktenliste: Form, Orte, Reihenfolge, Rhythmus, Mitgliedschaft, Unterkunft, Rücktritt | alle praktischen Fakten an einem Ort |
| 6 | Leinen | **Die nächsten Module** | nur kommende Termine, Filter nach Zweig, Etiketten, Erklärung Buchstabe/römische Zahl; Links „Alle Termine auf einen Blick →“ und „Vorschau 2027 →“ auf die Seite Termine (geändert 25.09.2026, vorher PDFs – siehe `SEITE-termine.md`, Abschnitt 2) | ein Termin-Überblick statt zwei langer Listen; dieselbe Quelle (Wix-Events) wie der Kalender auf „Termine“ |
| 7 | Salbei | **Erst mal reinschnuppern** | kostenloser Online-Schnupperkurs; Button „Termine & Zugang“ → Termine (`#schnuppern`), dem Hauptort für Schnupperkurs-Termine und Zugang (geändert 25.09.2026) | niedrige Einstiegshürde vor dem Buchen |
| 8 | Leinen | **Das sagen Teilnehmende** | drei Stimmen (Martin, Jeanine, Martina), Link Dozent:innen | Vertrauen vor der Anmeldung |
| 9 | Weizen | **Hast du Fragen?** (Sprungmarke `#beratung`) | Weiterbildungsberatung Vera Kimmig mit Foto, Telefonnummer, Zeiten | persönliche Ansprechperson senkt die Hürde |
| 10 | Tiefgrün | **Mitglied werden – und 15 % sparen** | Mitgliedschaft als Voraussetzung + Rabatt; Satz „Arbeitest du in einer Mitgliedseinrichtung? Dann gilt der Rabatt auch für dich.“ mit Link auf **Mitglied sein** (`#vorteile`, „Alle Vorteile der Mitgliedschaft →“; ergänzt 25.09.2026 mit Link auf Für Einrichtungen, am selben Tag umgestellt, weil „Mitglied sein“ Hauptort für den Rabatt ist – siehe `SEITE-mitglied-sein.md`, Abschnitt 2); Button „Mitglied werden“ → Mitglied sein; Newsletter | Abschluss mit der wichtigsten Handlung |
| – | Tiefgrün | Fußzeile | wie Startseite | auf allen Seiten gleich |

Die Reihenfolge folgt den Fragen, die sich Interessierte nacheinander stellen:
**Was ist das? → Welcher Weg? → Wie lange? → Schaffe ich das? → Wie läuft es ab? → Wann? →
Kann ich es ausprobieren? → Ist es gut? → Wen frage ich? → Was muss ich tun?**

---

## 3. Woher die Inhalte stammen

Alle Texte stammen von der bestehenden Webseite (Stand 25.09.2026). Sie wurden **auf Du mit
kleinem „du“** umgestellt (die alte Seite schreibt „Du/Dein“ groß – heute ist klein üblich und
steht so auch auf der neuen Startseite), gekürzt und mit Doppelpunkt gegendert.

| Bereich | Quelle |
|---|---|
| Titel, Zitat, Zweige, „Gut zu wissen“, 5/4/2 Module, Mitbringen, Lernen, Aufbau, Stimmen | `/weiterbildung` (= `/wichtige-infos`) |
| Zielgruppen-Texte der Zweige, Schnupperkurs, Erklärung Buchstabe/römische Zahl, Modultermine, Beratung Vera Kimmig | `/kranken-und-gesundheitshäuser` und `/pflege-und-senioren` |
| Zimmerpreise 160–230 €, Rücktritt bis 4 Wochen | `/anmeldung` (Formular) |
| Modul F: Uhrzeit, Adresse | `/event-details/modul-f-mit-der-stimme-zur-starke` |

**Modulliste:** Gezeigt werden nur Termine **ab dem 16.10.2026** (die Vorschau entstand am
25.09.2026; das Wiener Modul „Mit dem Herzen pflegen“ lief an diesem Wochenende bereits).
In Wix muss diese Liste später **automatisch** aus der Veranstaltungs-App kommen (siehe
Abschnitt 6), damit niemand sie von Hand pflegen muss.

---

## 4. Fotos

Die Fotos stammen von der bestehenden Seite (Wix-Medien) und liegen verkleinert in `fotos/`.
In Wix immer das **Original** aus der Medienverwaltung verwenden.

| Datei | Bereich | Motiv |
|---|---|---|
| `wb-titel.jpg` | Titelfoto | Teilnehmerin im roten Pullover mit erhobenen Armen, Gruppe dahinter |
| `wb-zweig-krankenhaus.jpg` | Zweig Krankenhaus | Gruppe singt mit erhobenen Armen |
| `wb-zweig-pflege.jpg` | Zweig Pflege | Hände auf den Schultern der Nachbarin |
| `wb-mitbringen.jpg` | Was du mitbringst | zwei Frauen singen lachend |
| `wb-lernen.jpg` | Was du lernst | lachende Gruppe mit Namensschildern |
| `wb-aufbau.jpg` | So läuft die Weiterbildung | Dozent mit Gitarre im sonnigen Seminarraum |
| `wb-schnupperkurs.jpg` | Erst mal reinschnuppern | voller Saal mit Band, Arme erhoben |
| `wb-vera-kimmig.jpg` | Hast du Fragen? | Porträt Vera Kimmig |

**Datenschutz:** Vor der Veröffentlichung prüfen, ob die Einwilligungen der erkennbaren Personen
auch die neue, größere Verwendung abdecken (besonders Titelfoto und Zweig-Fotos).

---

## 5. Neue Bausteine (Ergänzung zu `DESIGN-foto.md`)

Alle Farben, Schriftgrößen und Rundungen bleiben wie in `DESIGN-foto.md`. Neu hinzugekommen:

| Baustein | Aussehen | Begründung |
|---|---|---|
| **Titelkasten rechts** | Tiefgrün-Kasten unten **rechts** statt links | Beim Titelfoto steht die Person links; der Kasten darf das Hauptmotiv nicht verdecken. Regel: *Kasten auf die Seite, auf der das Foto ruhig ist.* |
| **Niedrigeres Titelfoto** | 400–540 px statt 440–640 px | Auf Unterseiten wollen Besucher:innen schneller zum Inhalt. |
| **Aktiver Menüpunkt** | fett, 3 px gelb unterstrichen | Orientierung: „Hier bin ich gerade.“ |
| **Brotkrumen** | „Start › Weiterbildung“, 16 px | Rückweg ohne Zurück-Taste. |
| **Große Zahl** | 72–104 px, normale Stärke, darunter „MODULE“ | Die Zahl ist die eigentliche Antwort und soll zuerst ins Auge fallen. |
| **Häkchen-Liste** | Tiefgrüner Kreis mit weißem Haken | Tiefgrün statt Logo-Grün, weil Logo-Grün auf Leinen nur 2,0 : 1 Kontrast hat (Symbole brauchen mind. 3 : 1); Tiefgrün auf Leinen: 8,9 : 1. |
| **Etikett (Chip)** | Salbei oder Weizen, Anthrazit-Schrift fett, 15 px, rund | zeigt Zweig / „online“ / „Österreich“; Kontrast 9,5 : 1 |
| **Filter** | fette Textschalter, aktiver mit gelber Linie darunter | kein weiterer Button-Typ nötig; die gelbe Pille bleibt der einzige gefüllte Button |
| **Hinweiskasten** | weiße Fläche, 20 px Rundung („Gut zu wissen“) | hebt einen einzelnen wichtigen Satz ab, ohne neue Farbe |
| **Telefonnummer groß** | 26–34 px, als Text markierbar | ältere Besucher:innen sollen sie gut abtippen können |

**Kontrollierte Kontraste der neuen Kombinationen:** Anthrazit auf Weiß 12,2 : 1 · Anthrazit
auf Salbei 9,5 : 1 · Anthrazit auf Weizen 9,5 : 1 · Weiß auf Tiefgrün (Haken) 10,0 : 1 – alle über 4,5 : 1.
Die gelbe Unterstreichung ist nur Schmuck; die Information „aktiv“ steckt zusätzlich im Attribut
für Vorleseprogramme (`aria-current`).

---

## 6. Umsetzung in Wix – Schritt für Schritt

> Wie bei der Startseite: zuerst an der **duplizierten Website** testen.

1. **Seiten zusammenlegen:** Seite „Weiterbildung“ neu aufbauen. Seite „Wichtige Infos“ im Menü
   ausblenden und eine **301-Weiterleitung** einrichten (*Dashboard → Marketing & SEO → SEO →
   URL-Weiterleitungen*: `/wichtige-infos` → `/weiterbildung`). Grund: alte Links in Mails,
   PDFs und bei Google funktionieren weiter.
2. **Bereiche anlegen:** In der Reihenfolge aus Abschnitt 2; Hintergrundfarben der Bänder
   genau wie dort (Leinen, Salbei, Weizen, Tiefgrün).
3. **Titelbereich:** wie in `DESIGN-foto.md` Schritt 7, aber Kasten unten **rechts**. In der
   Handy-Ansicht Kasten unter das Foto setzen.
4. **Modulliste automatisch:** Die Module liegen schon als Veranstaltungen in der Wix-Events-App
   (Links „Details & anmelden“ zeigen auf `/event-details/...`). Das Element *Veranstaltungsliste*
   einfügen, Ansicht **Liste**, nur **kommende** Veranstaltungen. Für den Filter jeder
   Veranstaltung eine **Kategorie** geben („Krankenhaus & Gesundheit“, „Pflege & Senior:innen“,
   bei Modulen für beide Zweige beide Kategorien) und im Element *Filter nach Kategorie*
   einschalten. Grund: Vergangene Module verschwinden dann von selbst.
5. **Stimmen, Zahlen, Faktenlisten:** als normale Text-Elemente; Faktenliste mit 1-px-Linien in
   Anthrazit (Wix: *Linie* einfügen).
6. **Kontakt:** Telefonnummer als Text **und** als Link `tel:+4915204301191`; E-Mail-Button
   erst nach Klärung von Punkt 7.1 verlinken.
7. **Zweig-Seiten umleiten** (erst nach Schritt 4 und wenn alle Module in Wix-Events stehen): beide Zweig-Seiten aus
   dem Menü nehmen und im URL-Weiterleitungsmanager `/kranken-und-gesundheitshäuser` und `/pflege-und-senioren` mit
   **301** auf `/weiterbildung` leiten; erst danach löschen. Die Links „Alle Module dieses Zweigs →“ zeigen auf die
   Modulliste (Anker `module`) – Wix kann den Filter nicht per Link vorwählen, deshalb dort den Hinweis „Filter oben
   auf deinen Zweig stellen“ als kleinen Text ergänzen oder zwei Veranstaltungslisten mit festem Filter verwenden.
8. **Handy-Ansicht prüfen** und Vorschau an Sandra (Weiterbildung), Vera und Sonja zur
   inhaltlichen Abnahme schicken.

---

## 7. Offene Punkte – vor der Veröffentlichung klären

1. **E-Mail-Adresse der Weiterbildungsberatung prüfen:** Auf der heutigen Seite verlinkt der
   Knopf „E-Mail schreiben“ auf `vera.kimmig@singende-krankenhauser.de` – **ohne „e“ nach dem „a“**
   (die Vereinsadresse lautet `singende-krankenhaeuser.de`). Wahrscheinlich kommen diese Mails
   nicht an. Mit Andy (IT) klären, ob die Schreibweise als Umleitung existiert, sonst auf der
   Live-Seite sofort korrigieren. In der Vorschau ist der Knopf deshalb noch ohne Ziel.
2. **Schreibweise von Namen vereinheitlichen:** „Elke Wünneberg“ (Modul C) vs. „Elke Wünnenberg“
   (Modul D, P); „Alwine Deege“ (Dozentenseite, Modul IV) vs. „Alwine Deegen“ (Startseite).
   In der Vorschau steht „Wünnenberg“. Bitte bei den Personen selbst nachfragen.
   **Geklärt (25.09.2026, Tom):** Richtig ist **„Alwine Deege“**. Auf der Live-Startseite (Blog des Monats)
   „Deegen“ korrigieren; in der Startseiten-Vorschau ist es berichtigt.
3. **Porträt Vera Kimmig:** Die beiden Zweig-Seiten verwenden zwei unterschiedliche Fotos. Klären,
   welches aktuell ist; die Vorschau nutzt das der Seite Krankenhäuser. **Vorschlag (25.09.2026):** überall das
   Studioporträt der Team-Seite verwenden (`fotos/uu-vera-kimmig.jpg`), siehe `SEITE-ueber-uns.md`, Abschnitt 5.
4. **Kursgebühren fehlen** auf allen öffentlichen Seiten (nur in den Modul-PDFs). Empfehlung:
   eine Zeile „Kursgebühr“ in die Faktenliste aufnehmen – das spart Rückfragen am Telefon.
   Wert bei Sandra erfragen. **Ergänzung 25.09.2026:** Modul-PDFs und Flyer 2026 nennen 320 € je Modul, 272 € für
   Mitglieder, ohne Unterkunft und Verpflegung (`SEITE-termine.md`, Abschnitt 1) – nur noch bestätigen lassen.
   **Ergänzung 26.09.2026:** Die Gebühr steht auch öffentlich in den AGB, Abschnitt 12.2 (mit Zahlungsfrist); auf der neuen
   Anmeldeseite steht sie groß im Bereich „Vorher wissen“ (`SEITE-anmeldung.md`). Beide Knöpfe „Zur Anmeldung“ zeigen jetzt dorthin.
5. ~~**Pflichtmodul benennen**~~ – **geklärt (25.09.2026):** Laut Antragsformularen ist es im Zweig
   Krankenhaus „Singen als Dialog“ (Modul P), im Zweig Pflege „Mit dem Herzen pflegen“. Beide stehen jetzt
   in der Vorschau (Bereich „So viele Module brauchst du“). Details und Folgefragen: `SEITE-sing-mit.md`, Abschnitt 7.
6. **Einwilligungen** der fotografierten Personen (siehe Abschnitt 4).

---

## 8. Checkliste für diese Seite

- [ ] Nur kommende Module sichtbar, Filter funktioniert?
- [ ] „Wichtige Infos“ leitet auf „Weiterbildung“ weiter?
- [ ] Alle Module beider Zweige in Wix-Events, danach beide Zweig-Seiten per 301 auf „Weiterbildung“ umgeleitet?
- [ ] Alle Punkte aus Abschnitt 7 geklärt?
- [ ] Checkliste aus `DESIGN-foto.md`, Abschnitt 7, erfüllt?
