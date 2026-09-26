# SEITE-anmeldung.md – Seite „Anmeldung Weiterbildung“ im Stil „Foto“

Stand: 26.09.2026 · Verantwortlich: Tom (Webseite/Marketing, IT)
Vorschau: `skh-design/vorschau-foto-anmeldung.html` (im Browser öffnen, Ordner `fotos/` muss daneben liegen)
Stilregeln: `DESIGN-foto.md` · Bausteine für Unterseiten: `SEITE-weiterbildung.md`, Abschnitt 5, `SEITE-sing-mit.md`, `SEITE-einrichtungen.md`, `SEITE-mitglied-sein.md`, `SEITE-termine.md`, `SEITE-ueber-uns.md`, `SEITE-kontakt.md`, `SEITE-downloads.md` und `SEITE-landkarte.md`, jeweils Abschnitt 6 ·
Nachbarseiten: `vorschau-foto-weiterbildung.html` (von dort kommt man hierher), `vorschau-foto-termine.html`, `vorschau-foto-mitglied-sein.html`, `vorschau-foto-kontakt.html` · Ist-Zustand: `IST-STRUKTUR.md`

Dieses Dokument erklärt, **wie die Seite „Anmeldung Weiterbildung“ aufgebaut ist, welche Fehler das heutige Formular hat,
warum die Anmeldung (vorerst) nicht über Wix-Events läuft, wie der gesetzlich vorgeschriebene Widerrufs-Knopf funktioniert
und welche Seite für welche Information zuständig ist**. Eine Person ohne Vorkenntnisse soll die Seite damit in Wix umbauen
und später pflegen können.

**Rolle der Seite:** Die Anmeldung beantwortet die Frage **„Wie melde ich mich verbindlich für ein Modul an – und was habe ich
damit zugesagt?“**. Hauptort ist sie für: das **Anmeldeformular** der Module in Deutschland, die **Kurzfassung der
Teilnahmebedingungen** (Gebühr, Zahlung, Rücktritt, Unterkunft, Haftung), den **Ablauf nach dem Absenden** (auch Inhalt der
Seite `/anmeldung-erfolgreich`) und den **Widerrufs-Knopf** („Vertrag widerrufen“). Rechtlich verbindlich bleiben die **AGB,
Abschnitt 12**; die Seite fasst sie in Alltagssprache zusammen und verlinkt sie.

**Zielgruppen:** (1) Interessierte, die sich nach dem Lesen der Weiterbildungsseite oder einer Veranstaltungsseite anmelden,
(2) Teilnehmende, die ein weiteres Modul buchen, (3) Mitarbeitende von Mitgliedseinrichtungen (Rabatt), (4) Angemeldete, die
widerrufen oder zurücktreten wollen.

**Adresse:** `/anmeldung` bleibt (Wix-Events und alte Links zeigen dorthin), ebenso `/anmeldung-erfolgreich`. Kein Menüpunkt;
die Seite gehört zu „Weiterbildung“ – in der Kopfleiste ist deshalb **Weiterbildung** unterstrichen (wie bei Dozent:innen).
Brotkrumen: „Start › Weiterbildung › Anmeldung“.

---

## 1. Ausgangslage – was es heute gibt

Die Seiten `/anmeldung`, `/anmeldung-erfolgreich` und `/agb` wurden am 26.09.2026 per `curl` ausgelesen, einschließlich der
Formular-Einstellungen, die Wix im Seitenquelltext mitliefert (Feldnamen, Pflichtfelder, Weiterleitung).

**Seite `/anmeldung`:** Überschrift „Anmeldung“, darunter nur das Formular, rechts daneben ein Kasten „Hast Du Fragen? Rufe
mich gerne an!“ mit Vera Kimmig (Mo–Do 9–12 Uhr, Knöpfe ANRUFEN und E-MAIL SCHREIBEN). Kein Hinweis auf Kursgebühr, Zahlung
oder was nach dem Absenden passiert.

**Das Formular (Wix Forms, Name „Anmeldung“), Felder in der Reihenfolge der Seite:**

| Feld | Pflicht | Art | Beobachtung |
|---|---|---|---|
| Vorname, Nachname | ja | Text | – |
| Adresse (Land, Straße, Zusatz, Stadt, PLZ) | nein | Anschriftfeld | – |
| Festnetz, Handy | nein | Telefon | zwei Felder für eine Telefonnummer |
| E-Mail-Adresse | ja | E-Mail | – |
| Geburtstag (Tag/Monat/Jahr) | nein | Datum | wird für die **Teilnehmerliste der Dozent:innen** gebraucht, damit sie sich auf die Gruppe vorbereiten können (geklärt 26.09.2026, Tom) – der Zweck stand bisher nirgends |
| Beruf | nein | Text | intern als „Firma“ gespeichert (`CONTACTS_COMPANY`) |
| Mitglied | ja | Auswahlliste „kein Mitglied“ / „Mitglied“ | Mitarbeitende von **Mitgliedseinrichtungen** (bekommen auch 15 %) haben keine passende Antwort |
| „Bitte bestätige, dass du ein oder mehrere Module ausgewählt hast“ | ja | eine Option „Ja“ | **Behelf**, weil die Modul-Listen selbst nicht Pflicht sind – man kann „Ja“ klicken, ohne ein Modul zu wählen |
| Kranken- & Gesundheitseinrichtungen | nein | Häkchen: Online Modul 1/26, Modul A, B, C, D, Sommerakademie, E, F, IV/26, P, Come-together | intern heißt das Feld **`how_did_you_hear_about_us`** („Wie hast du von uns gehört?“ – Rest der Wix-Vorlage); am 26.09.2026 liegen **8 von 11** Terminen in der Vergangenheit |
| Pflege & Senioren | nein | Häkchen: Online Modul 1/26, Modul I, II, III, C, D, Sommerakademie, IV/26, Come-together | intern **`what_are_you_interested_in`**; Modul C, D, Sommerakademie, IV/26 und Come-together stehen in **beiden** Listen (wer beide Zweige anklickt, meldet sich scheinbar doppelt an); **Modul V** (Pflichtmodul Pflege, 23.–25.10.2026) fehlt |
| Unterkunft & Verpflegung | ja | 3 Optionen: Einzelzimmer / Doppelzimmer „Ich reserviere im Seminarhaus … und bezahle es dort beim Check-in (160–230 € für Fr.–So.) Hinweis: Im Seminarhaus Sonnenberg in Einbeck bitte selbst reservieren“ / kein Zimmer, Verpflegungspauschale | lange Sätze, Hinweis zu Einbeck steht zweimal in den Optionen und ein drittes Mal darunter; unklar, **wer** reserviert (Abschnitt 7, Punkt 4) |
| Stornobedingungen | ja | Häkchen | „Bis zu vier Wochen vor Beginn … schriftlicher Rücktritt … Danach ist die Gesamtkursgebühr fällig **oder bei schwerwiegenden Gründen 70 % der Gebühr**.“ – **widerspricht den AGB** (siehe unten) |
| Haftungsausschluss | ja | Häkchen | „Mit der **Unterzeichnung** dieser Anmeldung …“ – online wird nichts unterzeichnet |
| „Ich akzeptiere die AGB.“ | ja | Häkchen | **Link führt auf `sonjaheim9.wixsite.com/my-site-3/agb`** – die alte kostenlose Wix-Adresse statt der Vereinsseite |
| „Was Du uns sonst noch mitteilen möchtest“ | nein | Textfeld | – |
| Knopf „Anmeldung senden“ | – | – | keine Datenschutz-Information; Beschriftung erfüllt nicht die „Button-Lösung“ (Abschnitt 7, Punkt 2) |

**Wer bekommt die Anmeldungen?** Die Benachrichtigung über jede Einsendung geht an **Sandra Roß-Lünenschloß** (geklärt 26.09.2026, Tom).
Sandra bearbeitet also die Anmeldung; Vera Kimmig bleibt Ansprechperson für **Fragen zur Weiterbildung** (Beratung, Kasten auf der Seite).

**Nach dem Absenden:** Das Formular leitet auf `/anmeldung-erfolgreich` weiter – eingestellt als **„in neuem Tab öffnen“**
(`target: BLANK`). Die Besucherin hat danach zwei Tabs, im alten steht das ausgefüllte Formular noch da. Die Erfolgsseite sagt
nur „Vielen Dank für Deine Anmeldung. Du erhältst in Kürze Nachricht von uns.“; ihr Seitentitel lautet „Anmeldung erfolgreich
| **Sikra Deutschland**“ (alle anderen Seiten: „Singende Krankenhäuser e.V. | …“).

**Weitere Funde:**

| Fund | Wo | Folge |
|---|---|---|
| E-Mail-Knopf von Vera: `mailto:vera.kimmig@singende-krankenha**u**ser.de` (ohne „e“) | `/anmeldung`, Kasten rechts | **Mails an Vera kommen nicht an.** Sofort korrigieren (Abschnitt 6, Schritt 1) |
| Rücktritt „bei schwerwiegenden Gründen **70 % der Gebühr** (fällig)“ ↔ AGB 12.3 „auf schriftlichen Antrag eine **Ermäßigung bis zu 70 %** möglich“ | Formular ↔ AGB | Das Formular sagt „du zahlst 70 %“, die AGB sagen „du zahlst mindestens 30 %“. Abschnitt 7, Punkt 1 |
| AGB, Abschnitt 5 „Widerrufsrecht“ gilt nur für **Waren** aus dem Shop, mit veralteter Frist „zwei Wochen“ und altem Mustertext | `/agb` | Für die Weiterbildung (Dienstleistung, online gebucht) fehlt eine Widerrufsbelehrung. Abschnitt 7, Punkt 3 |
| AGB **siezen** („Sie können …“), die Webseite duzt | `/agb` | beim Überarbeiten angleichen (niedrige Priorität) |
| Kursgebühr 320 € / 272 € steht **doch öffentlich** – in den AGB 12.2, samt Konto und Zahlungsfrist | `/agb` | Ergänzt `SEITE-weiterbildung.md`, Punkt 4 („fehlen auf allen öffentlichen Seiten“) |
| Wix-Events „Anmelden“ führt auf `sonjaheim9.wixsite.com/my-site-3/anmeldung` | Veranstaltungen | bekannt, `SEITE-termine.md`, Abschnitt 7, Punkt 1 |

---

## 2. Gliederung und Hauptorte – Entscheidungen und Begründung

### Entscheidung 1: **Anmeldung bleibt vorerst ein Wix-Formular, nicht Wix-Events** (Vorschlag 26.09.2026)

In `DESIGN-foto.md`, Abschnitt 5, war offen, ob künftig Wix-Events die Anmeldung übernimmt (jede Veranstaltung mit eigener
Anmeldung). **Vorschlag: jetzt nicht**, sondern das vorhandene Formular umbauen. Gründe:

1. **Nur 3 von 11 Terminen stehen in Wix-Events** (`SEITE-termine.md`, Abschnitt 1). Solange nicht alle Module dort liegen,
   bräuchte man ohnehin zusätzlich ein Formular.
2. **Pflegeaufwand:** Bei Wix-Events hat jede Veranstaltung ihr eigenes Anmeldeformular. Unterkunft, Rücktritt, Haftung und
   AGB-Häkchen müssten in **jeder** Veranstaltung eingerichtet und bei Änderungen überall nachgezogen werden. Ein Formular für
   alle Module wird an **einer** Stelle gepflegt.
3. **Mehrere Module auf einmal:** Wer drei Module bucht, müsste sich bei Wix-Events dreimal anmelden.
4. **Zahlung:** Der Verein arbeitet mit Überweisung und vergibt Plätze nach Zahlungseingang (AGB 12.2). Kostenpflichtige
   Tickets in Wix-Events laufen über die Online-Zahlung von Wix (Gebühren je Buchung) – das wäre eine neue Entscheidung mit
   Kosten und neuem Ablauf in der Buchhaltung.
5. **Kosten und Risiko:** Der Umbau des vorhandenen Formulars kostet 0 € und behält alle bisherigen Einsendungen und
   Benachrichtigungen.

**Was Wix-Events trotzdem macht:** Es bleibt die **Terminquelle** (Termine, Weiterbildung, Startseite). Der Knopf „Anmelden“
jeder Veranstaltung zeigt als *externer Link* auf `/anmeldung` (Abschnitt 6, Schritt 9).
**Wieder prüfen, wenn** alle Module in Wix-Events stehen (`SEITE-termine.md`, Schritt 1) – dann einmal mit **einem**
Modul 2027 testen, ob die Wix-Events-Anmeldung (automatische Teilnehmerliste, Platzbegrenzung, Warteliste) Vera Arbeit spart.

### Entscheidung 2: **Kopf ohne Titelfoto** (wie Downloads)

Wer auf `/anmeldung` kommt, hat sich schon entschieden. Ein Titelfoto würde das Formular um eine Bildschirmhöhe nach unten
schieben. Deshalb der Service-Kopf aus `SEITE-downloads.md`, Abschnitt 6: Überschrift, ein Satz, Knopf „Zum Formular“.
Nebeneffekt: kein neues Foto, keine neue Einwilligung.

### Entscheidung 3: **Eine Modul-Liste statt zwei, plus Frage nach dem Zweig**

Heute gibt es je Zweig eine Häkchen-Liste; fünf Module stehen in beiden. Neu: **eine** Liste aller offenen Module in
Deutschland (mit Datum, Ort, Leitung und Etikett „beide Zweige“ / „Krankenhaus & Gesundheit“ / „Pflichtmodul“ wie auf
Weiterbildung und Termine) und darunter die Frage „In welchem Zweig machst du die Weiterbildung?“ (Krankenhaus & Gesundheit /
Pflege & Senior:innen / Weiß ich noch nicht). Die Modul-Liste wird **Pflichtfeld** – das Behelfsfeld „Bitte bestätige …“
entfällt. **Vergangene Module werden gelöscht**, künftige erst eingetragen, wenn die Anmeldung dafür offen ist.

### Entscheidung 4: **Widerrufs-Knopf „Vertrag widerrufen“** (ergänzt 26.09.2026 auf Hinweis von Tom)

**Hintergrund:** Seit dem **19.06.2026** müssen Unternehmer, die Verträge mit Verbraucher:innen über eine Webseite schließen,
dort eine **elektronische Widerrufsfunktion** anbieten (§ 356a BGB, Umsetzung der EU-Richtlinie 2023/2673). Eine Anmeldung zu
einem kostenpflichtigen Modul über das Online-Formular ist so ein Vertrag; der Verein gilt dabei als Anbieter der Leistung.
*Fachliche Einschätzung, keine Rechtsberatung – Abschnitt 7, Punkt 3.*

**Was die Funktion können muss** (und was die Vorschau zeigt):

| Anforderung | Umsetzung in der Vorschau |
|---|---|
| Ein gut sichtbarer Knopf, beschriftet mit **„Vertrag widerrufen“** (oder gleich eindeutig) | gelbe Pille „Vertrag widerrufen“ im Bereich `#widerruf`; Link „Vertrag widerrufen“ in der **Fußzeile aller Seiten** (Rechtliches) |
| während der **ganzen Widerrufsfrist** leicht erreichbar | Fußzeile (auf jeder Seite), Sprungleiste, Hinweis bei „Vorher wissen“, Link in der Bestätigungs-E-Mail (Abschnitt 6) |
| danach Angaben: Name, welcher Vertrag, E-Mail für die Bestätigung | Formular mit Vorname, Nachname, E-Mail, „Welches Modul?“ – **keine** Frage nach dem Grund |
| zweiter Knopf **„Widerruf bestätigen“** | Absende-Knopf des Widerrufsformulars |
| **Eingangsbestätigung** sofort, mit Inhalt, Datum und Uhrzeit, auf einem dauerhaften Datenträger (E-Mail) | Meldung „Dein Widerruf ist angekommen … Eingegangen am …“; in Wix als automatische E-Mail (Abschnitt 6, Schritt 7) |

**Wo in Wix:** Als **eigene Seite** `/vertrag-widerrufen` (nicht im Menü, in der Fußzeile verlinkt) – nicht auf `/anmeldung`.
Grund: Auch **Shop-Käufe** (Wix Stores) und die **Anmeldung zur Jahrestagung** (`/anmeldungjahrestagung`) sind online
geschlossene Verträge; **eine** Widerrufsseite für alles ist einfacher zu pflegen und leichter zu finden. In der Vorschau steht
der Bereich aus Platzgründen unten auf der Anmeldeseite; der Fußzeilen-Link aller Vorschauen zeigt dorthin.
**Rücktritt ≠ Widerruf:** Der Widerruf (14 Tage, ohne Gründe, kostenlos) ist gesetzlich; der Rücktritt (bis vier Wochen vor
Beginn, AGB 12.3) ist die Regel des Vereins. Beide stehen getrennt bei „Vorher wissen“.

### Hauptorte – was abgeglichen wurde

| Thema | Steht auch auf … | Hauptort | Auf der anderen Seite (Vorschau) | Grund |
|---|---|---|---|---|
| **Anmeldeformular Module (Deutschland)** | Weiterbildung („Zur Anmeldung“), Veranstaltungsseiten („Anmelden“), Termine/Startseite („Details & anmelden“ → Veranstaltungsseite) | **Anmeldung** | Weiterbildung: beide Knöpfe „Zur Anmeldung“ zeigen hierher | ein Formular für alle Module |
| **Module in Österreich** | Termine, Weiterbildung | Geschäftsstelle Österreich (singende-krankenhaeuser.at) | hier Hinweiskasten oben | eigene Anmeldung bei Sybille Mikula; das heutige Formular enthält sie nicht |
| **Teilnahmebedingungen** (Gebühr, Zahlung, Rücktritt, Haftung) | AGB 12, Weiterbildung (Faktenliste: Unterkunft, Rücktritt), Modul-PDFs (Gebühr) | **AGB** = rechtlich; **Anmeldung** (`#vorher`) = Kurzfassung in Alltagssprache | Weiterbildung behält ihre zwei Faktenzeilen; Link „Alle Teilnahmebedingungen“ → AGB | wer sich anmeldet, soll vorher sehen, was er zusagt |
| **Kursgebühr 320 € / 272 €** | AGB, Flyer, Modul-PDFs, Mitglied sein (15 %) | **Anmeldung** (`#vorher`, große Zahlen); Rabatt-Regel: **Mitglied sein** | Weiterbildung: offener Punkt 4 dort („Kursgebühr“ in die Faktenliste) bleibt sinnvoll | Preis gehört vor die Anmeldung |
| **Zimmerpreise 160–230 €** | Weiterbildung (Faktenliste), heutiges Formular | Anmeldung | Weiterbildung: gleiche Zahl | stand bisher nur im Formular |
| **Ablauf nach dem Absenden** (Bestätigung, Zahlung, Zimmer) | – (heute nirgends) | **Anmeldung** (`#danach`) und `/anmeldung-erfolgreich` | – | beantwortet die häufigste Rückfrage |
| **Ansprechperson Weiterbildung** | Weiterbildung (`#beratung`), Kontakt (`#team`) | Kontakt = Übersicht; hier **ein** Kasten Vera Kimmig | gleiches Porträt, Telefon, Sprechzeiten wie Kontakt | Regel aus `SEITE-kontakt.md` |
| **Widerruf** | AGB 5 (nur Waren) | **Seite „Vertrag widerrufen“** (Vorschau: `#widerruf`) | Fußzeile aller Seiten | gesetzliche Pflicht, Entscheidung 4 |
| **Mitglied werden / Rabatt** | alle Seiten | Mitglied sein | hier Tipp im Formular (erscheint bei „Nein“) + Tiefgrün-Band | – |

### Korrekturen auf den Nachbar-Vorschauen (26.09.2026)

| Seite | Stelle | Vorher | Nachher |
|---|---|---|---|
| Weiterbildung | „Die nächsten Module“, Knopf „Zur Anmeldung“ | `#` | → `vorschau-foto-anmeldung.html` |
| Weiterbildung | Tiefgrün-Band, „Zur Anmeldung →“ | `#` | → `vorschau-foto-anmeldung.html` |
| Kontakt | Wegweiser, Zeile „Weiterbildung, Module und Anmeldung“ (nur Vera) | – | aufgeteilt (entschieden 26.09.2026, Tom): **Beratung: Vera** → Weiterbildung `#beratung`; **Anmeldung und Rechnungen: Sandra** → Anmeldung. Sandras Karte: „Anmeldung und Rechnungen der Weiterbildung“ statt „Organisation der Weiterbildung“ |
| alle zwölf Vorschauen | Fußzeile „Rechtliches & Kanäle“ | – | neuer Link **„Vertrag widerrufen“** → `vorschau-foto-anmeldung.html#widerruf` |

Nicht geändert: „Details & anmelden“ auf Start, Termine, Weiterbildung (führt in Wix auf die Veranstaltungsseite, von dort
„Anmelden“ → `/anmeldung`).

---

## 3. Aufbau von oben nach unten (5 Bereiche)

| Nr. | Fläche | Bereich (Sprungmarke) | Inhalt | Warum an dieser Stelle |
|---|---|---|---|---|
| – | Weizen | Hinweisleiste | Jahrestagung 2027 | auf allen Seiten gleich |
| 0 | Weiß | Kopfleiste | Logo, 6 Menüpunkte (**Weiterbildung** unterstrichen), Button „Mitglied werden“ | Anmeldung gehört zu Weiterbildung |
| – | Leinen | Brotkrumen | „Start › Weiterbildung › Anmeldung“ | |
| 1 | Leinen | Kopf ohne Titelfoto: **Melde dich an.** | ein Satz (fünf Minuten, Bestätigung, die Geschäftsstelle meldet sich); Knöpfe „Zum Formular“, „Erst das Wichtigste lesen →“; Hinweiskasten Österreich | Entscheidung 2 |
| – | Leinen | Sprungleiste | Vorher wissen · Formular · Nach dem Absenden · Fragen · Widerrufen | |
| 2 | Leinen | **Das Wichtigste auf einen Blick** (`#vorher`) | Beitrags-Reihe mit 4 großen Zahlen (320 € · 272 € · 160–230 € · 4 Wochen); Faktenliste: Zahlung, späterer Rücktritt, ohne Zimmer, Zeiten, Eigenverantwortung, **Widerrufsrecht**, Mitgliedschaft; Links AGB und Weiterbildung | man soll wissen, was man zusagt, **bevor** man ankreuzt |
| 3 | Salbei | **Deine Anmeldung** (`#formular`) | links: 4 Schritte, Hinweis Pflichtfelder, Kasten Vera Kimmig (`#fragen`); rechts: Formular-Karte in 4 nummerierten Teilen (Module + Zweig · Übernachtung · Über dich · Bedingungen + Nachricht), Knopf **„Zahlungspflichtig anmelden“**; nach dem Absenden: Bestätigung mit Zusammenfassung | Handy: Formular zuerst, Vera darunter, die 4 Schritte entfallen |
| 4 | Weizen | **So geht es weiter** (`#danach`) | Ablauf-Liste 1–4: Bestätigung per E-Mail · Kursgebühr überweisen · Zimmer · Das Modul | derselbe Text kommt auf `/anmeldung-erfolgreich` |
| 5 | Leinen | **Anmeldung widerrufen** (`#widerruf`) | Erklärung (14 Tage, ohne Gründe; Unterschied zum Rücktritt); Knopf „Vertrag widerrufen“ → Formular → „Widerruf bestätigen“ → Eingangsbestätigung | Entscheidung 4; in Wix eigene Seite |
| 6 | Tiefgrün | **Werde Teil des Netzwerks.** (`#mitglied`) | wie auf allen Seiten | |
| – | Tiefgrün | Fußzeile | wie Startseite, **plus** „Vertrag widerrufen“ | |

Bänder: Leinen → Salbei → Weizen → Leinen → Tiefgrün.

**Formularfelder neu – und was sich gegenüber heute ändert:**

| Teil | Feld | Pflicht | Änderung | Grund |
|---|---|---|---|---|
| 1 | Module (Häkchen, eine Liste) | ja | ersetzt zwei Listen + Behelfsfeld „Bitte bestätige …“ | Entscheidung 3 |
| 1 | Zweig (3 Optionen) | nein | neu | Vera sieht, für welchen Weg jemand plant, ohne doppelte Listen |
| 2 | Übernachtung (Einzel / Doppel / kein Zimmer) | ja | kurze Optionen, Preis und Einbeck-Hinweis **einmal** darunter | lesbar |
| 3 | Vorname, Nachname, E-Mail | ja | Beschriftung **über** dem Feld | wie Kontakt |
| 3 | Telefon | nein | **ein** Feld statt Festnetz + Handy | einfacher |
| 3 | Anschrift (Straße, PLZ, Ort, Land) | nein | unverändert freiwillig | ob Pflicht (z. B. für Rechnung), Abschnitt 7, Punkt 5 |
| 3 | Beruf | nein | mit Beispiel und Zweck | man versteht, wozu |
| 3 | Geburtsdatum | nein | bleibt, **mit Zweck** unter dem Feld („kommt auf die Teilnehmerliste für die Dozent:innen …“) | wer den Grund kennt, gibt es eher an; Informationspflicht (Abschnitt 7, Punkt 6) |
| 3 | Mitglied (Ja / Meine Einrichtung ist Mitglied / Nein) | ja | dritte Antwort neu; bei „Nein“ erscheint ein Tipp (272 € statt 320 €) | Rabatt gilt auch für Mitarbeitende von Mitgliedseinrichtungen |
| 4 | Teilnahmebedingungen (AGB 12) akzeptiert | ja | fasst „Stornobedingungen“ und „AGB“ zusammen, Link auf die **Vereinsseite** | ein Häkchen weniger; Text steht vorher bei `#vorher` |
| 4 | Haftung/Eigenverantwortung | ja | „Unterzeichnung“ entfällt, sonst inhaltlich gleich | stimmt online |
| 4 | Datenschutz | – | Satz mit Link (kein Häkchen), nennt die **Weitergabe an die Dozent:innen** (Name, Geburtsdatum, Beruf) | Rechtsgrundlage ist die Anmeldung selbst (Vertrag); ein Pflicht-Häkchen ist dafür nicht nötig – nur die Information |
| 4 | Nachricht | nein | Beispiele (Einrichtung, Essen, Anreise) | |
| – | Knopf | – | **„Zahlungspflichtig anmelden“** statt „Anmeldung senden“ | Button-Lösung, Abschnitt 7, Punkt 2 |

---

## 4. Woher die Inhalte stammen

| Bereich | Quelle |
|---|---|
| Formularfelder, Optionen, Unterkunftspreise, Einbeck-Hinweis, Haftungstext | `/anmeldung` (Formular-Einstellungen im Seitenquelltext) |
| Kursgebühr 320 € / 272 €, Zahlung spätestens drei Wochen vorher, Vergabe nach Zahlungseingang, Rücktritt, Ermäßigung bis 70 %, Zeiten (18 Uhr Abendessen – 13 Uhr nach dem Mittagessen), 14 Lehrstunden | `/agb`, Abschnitt 12 |
| Module mit Datum, Ort, Leitung, Etiketten | Vorschauen Weiterbildung und Termine (dort aus Wix-Events und Modul-PDFs) |
| Vera Kimmig: Funktion, Telefon, Sprechzeiten, E-Mail, „sprich aufs Band“ | Kontakt- und Weiterbildungs-Vorschau |
| Erfolgstext „Vielen Dank für Deine Anmeldung …“ | `/anmeldung-erfolgreich` |
| Widerrufs-Ablauf (zwei Knöpfe, Eingangsbestätigung) | § 356a BGB (gültig seit 19.06.2026) |

**Selbst formuliert** (bitte bei der Abnahme gegenlesen): Titel „Melde dich an.“ und Titeltext, alle Überschriften, die
Kurzfassung der Bedingungen, der Ablauf „So geht es weiter“ (Punkte 2 und 3 beruhen auf Annahmen – Abschnitt 7, Punkt 4),
alle Hinweistexte im Formular, „Zahlungspflichtig anmelden“, der ganze Widerrufs-Bereich, „Eine schon gezahlte Kursgebühr
bekommst du innerhalb von 14 Tagen zurück“ (gesetzliche Frist nach Widerruf).

---

## 5. Fotos

**Keine neuen Fotos** (Entscheidung 2). **Begründete Ausnahme (Foto auf mehreren Seiten):** `uu-vera-kimmig.jpg` – wie auf
Über uns, Kontakt und Landkarte (Regel „Porträts überall gleich“, `SEITE-ueber-uns.md`, Abschnitt 5).

---

## 6. Neue Bausteine und Umsetzung in Wix

Farben, Schriften, Rundungen wie in `DESIGN-foto.md`; Kopf ohne Titelfoto wie Downloads; Beitrags-Reihe wie Mitglied sein;
Ablauf-Liste wie Für Einrichtungen; Formular-Felder, Formular-Karte und Hinweiskasten wie Kontakt; Ansprechperson mit Foto
wie Für Einrichtungen; Sprungleiste wie Sing mit. **Neu auf dieser Seite:**

| Baustein | Aussehen | Begründung |
|---|---|---|
| **Formular in nummerierten Teilen** | große Zahl in Blattgrün + Überschrift (H3-Größe), Teile durch 1-px-Linien getrennt | lange Formulare wirken in Etappen machbar; man sieht, wo man ist |
| **Auswahl-Karte** | ganze Zeile anklickbar: weiße Fläche, 1 px Anthrazit-Rand, 12 px Rundung; gewählt: 2 px Tiefgrün-Rand, Leinen-Fläche; bei Modulen links Datum groß, rechts Titel, Ort, Etiketten | große Klickfläche statt kleinem Kästchen; Termin und Titel auf einen Blick – wie in der Modul-Liste |
| **Tipp-Kasten** | Leinen, 4 px gelber Strich links; erscheint nur bei passender Antwort | Hinweis genau dann, wenn er nützt |
| **Fehlermeldung** | fett, mit rundem Anthrazit-„!“ davor, direkt unter dem Feld | ohne Rot (keine Akzentfarbe), trotzdem klar erkennbar |
| **Widerrufs-Bereich** | Text links, weiße Karte rechts; Schritt 1 nur Knopf „Vertrag widerrufen“, Schritt 2 Formular mit „Widerruf bestätigen“, Schritt 3 Eingangsbestätigung | Ablauf, den § 356a BGB vorgibt |

### Umsetzung in Wix – Schritt für Schritt

> Wie bei der Startseite: zuerst an der **duplizierten Website** testen. **Das Formular nicht löschen und neu anlegen**,
> sondern umbauen – sonst gehen bisherige Einsendungen und Benachrichtigungen verloren.

1. **Sofort (auch ohne Neugestaltung):**
   a) Veras E-Mail-Knopf auf `/anmeldung`: `vera.kimmig@singende-krankenhauser.de` → `…krankenh**ae**user.de`.
   b) AGB-Link im Formular (Häkchen „Ich akzeptiere die AGB“ → Text anklicken → *Link*) von
      `sonjaheim9.wixsite.com/my-site-3/agb` auf `https://www.singende-krankenhaeuser.de/agb`.
   c) *Formular-Einstellungen → Nach dem Absenden → Weiterleitung*: „In neuem Tab öffnen“ ausschalten (gleiches Fenster).
   d) Vergangene Module aus beiden Listen löschen.
   e) Titel der Seite `/anmeldung-erfolgreich` (*Seiten-SEO*) auf „Singende Krankenhäuser e.V. | Anmeldung erfolgreich“.
2. **Storno-Regel klären** (Abschnitt 7, Punkt 1), dann Formular- und AGB-Text angleichen.
3. **Seite `/anmeldung` neu aufbauen** nach Abschnitt 3 (Adresse nicht ändern): Kopf, Bereich „Vorher wissen“, Formular auf
   Salbei, „So geht es weiter“, Tiefgrün-Band.
4. **Formular umbauen** nach der Feldtabelle in Abschnitt 3: zwei Modul-Listen zu einer zusammenlegen und auf *Pflichtfeld*
   stellen; Behelfsfeld „Bitte bestätige …“ löschen; beim „Geburtstag“ den Zweck als Hilfetext ergänzen; Festnetz + Handy zu
   „Telefon“; Mitglied-Auswahl um „Meine Einrichtung ist Mitglied“ ergänzen; Stornobedingungen und AGB zu einem Häkchen;
   Knopftext **„Zahlungspflichtig anmelden“**; interne Feldnamen umbenennen (`how_did_you_hear_about_us` → `module`,
   `what_are_you_interested_in` → entfällt), damit Exporte lesbar sind. *Formular-Logik*: bei Mitglied = „Nein“ Tipptext
   einblenden.
5. **Anker setzen:** `vorher`, `formular`, `fragen`, `danach`, `mitglied`.
6. **Erfolgsseite `/anmeldung-erfolgreich`:** Text „Danke! Deine Anmeldung ist bei uns.“ + Bereich „So geht es weiter“ (wie
   `#danach`) + Vera-Kasten; Kopf ohne Titelfoto.
7. **Automatische E-Mails** (*Automatisierungen → Neue Automatisierung → Auslöser „Formular abgeschickt“ → Aktion „E-Mail
   senden“*; prüfen, ob im Wix-Tarif enthalten):
   – an die angemeldete Person: Bestätigung mit ihren Angaben, Hinweis Zahlung, Link „Vertrag widerrufen“;
   – beim Widerrufsformular: Eingangsbestätigung mit Inhalt, **Datum und Uhrzeit** an die angegebene Adresse, Kopie an Sandra.
8. **Seite „Vertrag widerrufen“** (`/vertrag-widerrufen`) anlegen, im Menü ausblenden: Text aus `#widerruf`, Knopf „Vertrag
   widerrufen“ öffnet das neue Formular „Widerruf“ (Felder Vorname, Nachname, E-Mail, „Welcher Vertrag?“ – Modul **oder**
   Bestellnummer/Jahrestagung); Absende-Knopf „Widerruf bestätigen“. In die **Fußzeile** (gilt für alle Seiten, auch
   Jahrestagung) den Link „Vertrag widerrufen“ setzen. Test: Widerruf abschicken → kommt die Bestätigung mit Uhrzeit an?
9. **Wix-Events:** in jeder Veranstaltung *Anmeldung → externer Link* auf `https://www.singende-krankenhaeuser.de/anmeldung`
   (so schon `SEITE-termine.md`, Schritt 3).
10. **Handy-Ansicht prüfen:** Formular vor dem Vera-Kasten, Auswahl-Karten gut antippbar, Telefonnummer anrufbar.
11. **Test-Anmeldung** (Desktop und Handy) mit einer eigenen Adresse: Kommt die Einsendung bei Sandra an? Kommt die
    Bestätigung? Öffnet die Erfolgsseite im selben Fenster? Danach Test-Einsendung löschen.
12. **Abnahme:** Sandra (Anmeldungen, Teilnehmerlisten), Vera (Beratung, Modul-Liste), Sonja (Bedingungen, Widerruf), Vorstand (Rechtstexte).

### Pflege-Ablauf

| Wann | Was | Wer |
|---|---|---|
| sobald die Anmeldung für ein Modul öffnet | Modul in die Liste im Formular eintragen (Datum, Titel – gleiche Schreibweise wie in Wix-Events) | Vera |
| nach Beginn eines Moduls | Modul aus der Liste löschen | Vera |
| bei Preisänderung | Zahlen in `#vorher`, AGB 12.2, Tipp-Text im Formular, Modul-PDFs | Sandra, Tom |
| bei neuem Seminarhaus mit Selbstbuchung | Hinweis unter „Übernachtung“ und in `#danach` | Vera |
| laufend | Anmeldungen bearbeiten, Teilnehmerliste an die Dozent:innen schicken | Sandra |
| laufend (Benachrichtigung) | Widerrufe bearbeiten, Erstattung innerhalb von 14 Tagen | Sandra, Sonja (Erstattung) |
| nach dem Modul | Teilnehmerlisten bei den Dozent:innen löschen lassen (Speicherbegrenzung) | Sandra |
| halbjährlich | Test-Anmeldung und Test-Widerruf | Tom |

Zuständigkeit: Sandra bekommt und bearbeitet Anmeldungen und Widerrufe (Formular-Benachrichtigung geht an sie); Vorschlag: Vera pflegt die Modul-Liste und berät, Sonja gibt Bedingungen frei.

---

## 7. Offene Punkte – vor der Veröffentlichung klären

1. **Storno-Regel widersprüchlich:** Formular „bei schwerwiegenden Gründen **70 % der Gebühr**“ (fällig) ↔ AGB 12.3
   „**Ermäßigung bis zu 70 %**“. Welche Regel gilt? Die Vorschau folgt den **AGB** (sie sind die rechtliche Grundlage und im
   Formular verlinkt). Danach Formular und AGB gleich formulieren. → Sonja, Vorstand.
2. **„Button-Lösung“:** Bei kostenpflichtigen Online-Verträgen mit Verbraucher:innen muss der Absende-Knopf eindeutig auf die
   Zahlungspflicht hinweisen (§ 312j BGB), z. B. „zahlungspflichtig bestellen“. „Anmeldung senden“ reicht dafür vermutlich
   nicht; die Vorschau schreibt „Zahlungspflichtig anmelden“. Gilt ebenso für `/anmeldungjahrestagung`. → Tom, mit Punkt 3
   prüfen lassen.
3. **Widerrufsrecht und Widerrufsbelehrung für die Weiterbildung:** Die AGB enthalten nur eine (veraltete) Belehrung für
   Shop-Waren. Für online gebuchte Module braucht es vermutlich eine eigene Widerrufsbelehrung samt Muster-Widerrufsformular –
   und wenn jemand sich **weniger als 14 Tage vor Beginn** anmeldet, eine ausdrückliche Zustimmung, dass die Leistung vor Ende
   der Widerrufsfrist beginnt (sonst droht Widerruf nach dem Modul). Außerdem den Widerrufs-Knopf (Entscheidung 4) für Shop
   und Jahrestagung mitdenken. *Das ist eine fachliche Einschätzung, keine Rechtsberatung.* **Spartipp:** Zuerst fragen, ob
   der Verein über einen Dachverband kostenlose Rechtsberatung bekommt; sonst die Rechtstexte (AGB, Widerruf, Impressum
   nach DDG, `SEITE-kontakt.md`, Punkt 9) **in einem Auftrag** prüfen lassen statt einzeln. → Vorstand (Martin, Paula), Tom.
4. **Ablauf nach der Anmeldung bestätigen** (die Anmeldungen landen bei Sandra): Die Vorschau nimmt an, (a) dass die Geschäftsstelle die Zahlungsangaben schickt
   (oder zahlt man sofort nach AGB 12.2 auf das dort genannte Konto?), (b) dass der **Verein** die Zimmer im Seminarhaus
   reserviert (heutiger Text „Ich reserviere im Seminarhaus …“ ist doppeldeutig), außer in Einbeck, (c) wie hoch die
   Verpflegungspauschale ist. → Sandra, Vera.
5. **Anschrift Pflicht?** Wird für Rechnung oder Teilnahmebescheinigung eine Postanschrift gebraucht? Wenn ja, Pflichtfeld
   und Satz „für die Rechnung“. → Sandra.
6. ~~**Geburtsdatum:** Wofür wird es erhoben?~~ **Geklärt (26.09.2026, Tom):** für die Teilnehmerliste der Dozent:innen.
   Folgen: (a) Die Weitergabe an die Dozent:innen muss in der Datenschutzerklärung stehen (mit Punkt 8 erledigen);
   (b) Dozent:innen sollten die Liste nach dem Modul löschen – kurze schriftliche Bitte mit der Liste mitschicken;
   (c) Anregung (nicht nötig): Reicht den Dozent:innen das **Geburtsjahr**? Das wäre datensparsamer und genauso
   aussagekräftig für die Vorbereitung. → Sandra.
7. **Modul V „Mit dem Herzen pflegen“** (Pflichtmodul Pflege, 23.–25.10.2026, Einbeck) fehlt im Formular und in Wix-Events –
   findet es statt? Dann in die Liste aufnehmen (`SEITE-termine.md`, Punkt 2). → Vera.
8. **Datenschutzerklärung:** Enthält sie das Anmeldeformular (Zweck, Speicherdauer der Einsendungen, Wix als
   Auftragsverarbeiter, **Weitergabe von Name, Geburtsdatum und Beruf an die Dozent:innen**) und künftig das Widerrufsformular? → Tom.
9. **Wix-Tarif:** Sind automatische E-Mails (Schritt 7) im aktuellen Tarif enthalten? Falls nicht: Bestätigung vorerst von
   Hand aus dem Postfach der Geschäftsstelle – die Eingangsbestätigung beim **Widerruf** muss aber unverzüglich kommen. → Tom.

---

## 8. Checkliste für diese Seite

- [ ] Veras E-Mail-Link und AGB-Link korrigiert (Schritt 1)?
- [ ] Nur kommende Module in **einer** Liste, Modul-Auswahl ist Pflicht, Behelfsfeld entfernt?
- [ ] Storno-Regel in Formular, Seite und AGB gleich?
- [ ] Knopf „Zahlungspflichtig anmelden“?
- [ ] Erfolgsseite öffnet im selben Fenster, mit „So geht es weiter“?
- [ ] Bestätigungs-E-Mail kommt an und enthält den Link „Vertrag widerrufen“?
- [ ] Seite „Vertrag widerrufen“ erreichbar über die Fußzeile **jeder** Seite; zwei Knöpfe („Vertrag widerrufen“,
      „Widerruf bestätigen“); Eingangsbestätigung mit Datum und Uhrzeit kommt an?
- [ ] Wix-Events „Anmelden“ zeigt auf `singende-krankenhaeuser.de/anmeldung`?
- [ ] Porträt Vera gleich wie auf Über uns und Kontakt?
- [ ] Alle Punkte aus Abschnitt 7 geklärt (mindestens 1–3 vor dem Veröffentlichen)?
- [ ] Checkliste aus `DESIGN-foto.md`, Abschnitt 7, erfüllt?
