# SEITE-rechtliches.md – Impressum, Datenschutz, AGB und Widerrufsrecht im Stil „Foto“

Stand: 26.09.2026 · Verantwortlich: Tom (Webseite/Marketing, IT) · Fachlich zuständig: Vorstand (Martin, Paula) für den Rechtstexte-Auftrag,
Sandra Roß-Lünenschloß (Shop, Rücksendungen)
Vorschau: `skh-design/vorschau-foto-rechtliches.html` (im Browser öffnen). Die Reiter unter der Kopfleiste wechseln zwischen den vier
Seiten; Adressen wie `vorschau-foto-rechtliches.html#agb-12` öffnen direkt einen Abschnitt.
Stilregeln: `DESIGN-foto.md` · Bausteine: `SEITE-downloads.md` (Kopf ohne Titelfoto, Verweisliste), `SEITE-sing-mit.md` (Sprungleiste),
`SEITE-anmeldung.md` (Widerrufs-Bereich), jeweils Abschnitt 6 · Nachbarseiten: alle `vorschau-foto*.html` (Fußzeile „Rechtliches & Kanäle“),
besonders `vorschau-foto-shop.html`, `vorschau-foto-anmeldung.html`, `vorschau-foto-kontakt.html` · Ist-Zustand: `IST-STRUKTUR.md`

> **Wichtig:** Alles Rechtliche in diesem Dokument ist eine **fachliche Einschätzung, keine Rechtsberatung**. Verbindlich wird
> ein Rechtstext erst, wenn eine fachkundige Stelle ihn geprüft hat (Abschnitt 7, Punkt 1).

Dieses Dokument erklärt, **was heute auf den vier Rechtstext-Seiten steht, was beim vollständigen Auslesen aufgefallen ist, wie die
neue Gestaltung aussieht, welche Seite für welche Information zuständig ist und wie man das in Wix umsetzt und pflegt**. Eine Person
ohne Vorkenntnisse soll damit arbeiten können.

**Was diese Seiten sind:** Vier einfache Wix-Textseiten, alle in der Fußzeile verlinkt, nicht im Menü:
`/impressum`, `/datenschutz`, `/agb`, `/widerrufsrecht`. Dazu kommt die neue Seite **`/vertrag-widerrufen`** (Widerrufs-Knopf,
Pflicht seit 19.06.2026) – sie ist bereits in `SEITE-anmeldung.md`, Entscheidung 4, beschrieben (Hauptort) und wird hier nur in die
Reiterleiste aufgenommen.

**Was diese Dokumentation bewusst nicht tut:** Sie schreibt **keine Rechtstexte neu**. Wortlaut von Datenschutzerklärung, AGB und
Widerrufsbelehrung bleibt, bis der gemeinsame Rechtstexte-Auftrag erledigt ist (Entscheidung 2). Die schon bekannten Punkte
Storno-Regel, „Button-Lösung“, Widerrufsbelehrung für die Weiterbildung und Anschrift im Formular haben ihren Hauptort in
`SEITE-anmeldung.md`, Abschnitt 7, und werden hier nur verlinkt, nicht wiederholt.

---

## 1. Ausgangslage – was es heute gibt

Ausgelesen am 26.09.2026 per `curl` aus dem Seitenquelltext (alle vier Seiten vollständig).

| Seite | Inhalt heute | Umfang | Ansprache |
|---|---|---|---|
| `/impressum` | Anschrift, „Vertreten durch Sonja Heim & Tom Jansen“, Telefon, E-Mail (Sonja), „Redaktionell verantwortlich: Singende Krankenhäuser e.V.“, EU-Streitschlichtung, Verbraucherschlichtung, Vereinsregister, Steuernummer, Haftung für Inhalte/Links, Urheberrecht | 1 Bildschirm Text | Sie |
| `/datenschutz` | Generator-Text in 9 Abschnitten: Überblick, Hosting (Wix), Pflichtinformationen, Datenerfassung (Cookies, Server-Logs, Kontaktformular, Kommentarfunktion), Soziale Medien (Facebook, Instagram, Tumblr), Newsletter, Plugins (YouTube, Vimeo, Google Maps, reCAPTCHA), eCommerce mit 12 Zahlungsdiensten, Zoom | ca. 430 Zeilen, kein Stand-Datum | Sie |
| `/agb` | 13 Abschnitte: 1–11 Shop, **12 Weiterbildung** (Module, Gebühr 320/272 €, Konto, Storno, Haftungsausschluss), 13 Datenschutz-Link; darin eine Widerrufsbelehrung (Abschnitt 5) | lang, „Übersicht“ ohne Links | Sie |
| `/widerrufsrecht` | Widerrufsbelehrung und Widerrufsfolgen, Rücksendeadresse Sandra in Wuppertal | kurz | Sie |
| `/vertrag-widerrufen` | **gibt es noch nicht** (Aufruf ergibt 404) – erwartet, wird mit `SEITE-anmeldung.md`, Schritt 8, angelegt | – | – |

Gestaltung heute: Wix-Standardtext auf weißem Grund, Überschriften gleich groß wie Fließtext oder fett, keine Sprungmarken, kein
Hinweis, wann der Text zuletzt geprüft wurde. Seitentitel für Google in Großbuchstaben („IMPRESSUM | Singende Krankenhäuser e.V.“).

### Funde beim Auslesen

**Neu** = in keiner anderen Seiten-Doku erwähnt. Bekannte Punkte sind nur mit Verweis aufgeführt.

| Nr. | Fund | Wo | Folge |
|---|---|---|---|
| 1 | **Neu – sofort:** Der Link „Informationen zum Datenschutz hier klicken“ in **AGB 13** führt über einen Outlook-Schutzlink (`emea01.safelinks.protection.outlook.com`) auf **`healingsongs.de/datenschutz`** – die Datenschutzerklärung einer **anderen** Webseite. Beim Kopieren aus einer E-Mail entstanden (wie `SEITE-shop.md`, Fund 19). | `/agb` | Link auf `/datenschutz` ersetzen – braucht keinen Rechtstexte-Auftrag (Abschnitt 6, Schritt 1) |
| 2 | **Neu:** **Zwei verschiedene Steuernummern**: Impressum „Finanzamt Ravensburg 77052/17622“, AGB 2 „St.-Nr.: 109/153/03302“. | `/impressum`, `/agb` | klären, welche gilt (Abschnitt 7, Punkt 3). Im Impressum ist die Steuernummer nicht vorgeschrieben – Vorschlag: dort weglassen |
| 3 | **Neu:** Hinweis und Link auf die **OS-Plattform der EU** („EU-Streitschlichtung“). Die Plattform wurde am **20.07.2025 abgeschaltet**; der Hinweis ist überholt. | `/impressum` | Absatz streichen; der Satz zur Verbraucherschlichtung bleibt |
| 4 | **Neu:** „Redaktionell verantwortlich: Singende Krankenhäuser e.V.“ – für redaktionelle Inhalte (Blog, Aktuelles) nennt § 18 Abs. 2 Medienstaatsvertrag eine **natürliche Person** mit Name und Anschrift. | `/impressum` | Person festlegen (Abschnitt 7, Punkt 4) |
| 5 | Impressum beruft sich auf **§ 5 TMG** und **§§ 7–10 TMG** (TMG seit Mai 2024 durch das DDG ersetzt); Klammerfehler „…244)“ in der Telefonnummer. **Bekannt:** `SEITE-kontakt.md`, Abschnitt 7, Punkt 9. | `/impressum` | „§ 5 DDG“, Telefonnummer berichtigen; Haftungsabsätze im Auftrag klären (Vorschlag in der Vorschau) |
| 6 | **Neu:** „Vertreten durch Sonja Heim & Tom Jansen“ – ob das die im Vereinsregister eingetragenen vertretungsberechtigten Vorstandsmitglieder (§ 26 BGB) sind, ist fraglich: Laut Team-Seite besteht der Vorstand aus **Tom Jansen, Martin Hanke und Paula Bieker**; Sonja Heim ist Geschäftsführerin (`SEITE-ueber-uns.md`, Abschnitt 1). Eine Geschäftsführerin vertritt den Verein nur, wenn die Satzung das vorsieht (z. B. als besondere Vertreterin nach § 30 BGB). | `/impressum` | mit Registerauszug abgleichen (Abschnitt 7, Punkt 4) |
| 7 | **Neu:** Datenschutz nennt als **verantwortliche Stelle „Sonja Heim“** statt den Verein; Anschrift ohne Zeilenumbruch („Rostocker Str. 288250 Weingarten“), gleicher Klammerfehler in der Telefonnummer. | `/datenschutz`, Abschnitt 3 | im Rechtstexte-Auftrag: Verantwortlicher ist der Verein, vertreten durch den Vorstand |
| 8 | **Neu:** Die Datenschutzerklärung ist ein **allgemeiner Generator-Text**. Sie beschreibt Dienste, die die Webseite nach dem Quelltext **nicht** nutzt (Tumblr, Kommentarfunktion, Vimeo, Bonitätsprüfung) und **12 Zahlungsdienste**, obwohl die AGB „ausschließlich Vorkasse“ sagen; Paydirekt und giropay gibt es inzwischen nicht mehr. | `/datenschutz`, Abschnitte 4, 5, 7, 8 | neu erstellen lassen, mit der Dienste-Liste aus Abschnitt 4 (**Einsparmöglichkeit**: kürzerer Text, weniger Prüfaufwand) |
| 9 | **Neu:** Es **fehlen** Dienste, die die Webseite nutzt: Newsletter-Versand über **CleverReach** (Anbieter nicht genannt), Wix-Formulare (Kontakt, Anmeldung), Wix Events, Wix Stores. **Bekannt:** Anmeldeformular samt Weitergabe an Dozent:innen (`SEITE-anmeldung.md`, Abschnitt 7, Punkt 8), Singende Landkarte (`SEITE-landkarte.md`, Abschnitt 7, Punkt 5). | `/datenschutz` | wie Fund 8 |
| 10 | **Neu:** Die Widerrufsbelehrung steht **zweimal** – in AGB 5 und auf `/widerrufsrecht` – und die beiden Fassungen **weichen voneinander ab**: AGB mit der 40-Euro-Regel für Rücksendekosten, „frei Haus zurücksenden“ und dem Satz zum Fristbeginn; `/widerrufsrecht` nur „Sie haben die Kosten der Rücksendung zu tragen“, ohne Fristbeginn. Dass beide veraltet sind, ist **bekannt** (`SEITE-shop.md`, Fund 7; `SEITE-anmeldung.md`, Abschnitt 7, Punkt 3). | `/agb`, `/widerrufsrecht` | Entscheidung 3 (nur noch eine Belehrung); Inhalt im Rechtstexte-Auftrag |
| 11 | **Neu:** AGB 1 „Für alle **Lieferungen** … an **Verbraucher**“ – Abschnitt 12 regelt aber die Weiterbildung (keine Lieferung), und Module buchen auch Einrichtungen (keine Verbraucher). | `/agb` | Geltungsbereich im Auftrag anpassen lassen |
| 12 | **Neu:** AGB 12.1 „Für Unterkunft und Verpflegung … schließen [die Teilnehmer] hierfür einen **Vertrag mit dem Seminarhaus** ab“ – widerspricht dem am 26.09.2026 geklärten Ablauf: Der **Verein reserviert** die Zimmer, nur in Einbeck buchen die Teilnehmenden selbst (`SEITE-anmeldung.md`, Abschnitt 7, Punkt 4). | `/agb` | Satz angleichen (Abschnitt 7, Punkt 2) |
| 13 | AGB 12.4 „Mit der **Unterzeichnung** der Anmeldung“ – **bekannt** (`SEITE-anmeldung.md`, Abschnitt 1). **Neu:** Tippfehler „für für“, „Ausbildung“ statt „Weiterbildung“, „Online finden **sie**“ (klein). | `/agb` | mit Punkt 2 berichtigen |
| 14 | **Bekannt:** Storno-Regel (AGB 12.3 ↔ Formular), Bestellknopf „Kaufen“ (AGB 3.2), fehlende „Seite Versand“ (AGB 6.2), „nur innerhalb Deutschlands“ ↔ Shop – siehe `SEITE-anmeldung.md`, Abschnitt 7, Punkte 1–2, und `SEITE-shop.md`, Funde 4–5. | `/agb` | nur Verweis |
| 15 | **Neu:** Rücksendeadresse für Widerrufe ist „Sandra Roß-Lünenschloß, Malzstr. 1, 42119 Wuppertal“ – vermutlich eine Privat- oder Büroanschrift von Sandra, die damit öffentlich steht. E-Mail-Adresse in AGB und Widerrufsrecht verschieden geschrieben (Groß-/Kleinschreibung, harmlos). | `/agb`, `/widerrufsrecht` | mit Sandra klären, ob die Adresse so veröffentlicht bleiben soll (Abschnitt 7, Punkt 5) |
| 16 | **Neu:** **Kein Stand-Datum** auf allen vier Seiten – man sieht nicht, wann ein Text zuletzt geprüft wurde. Die AGB-„Übersicht“ ist eine Liste **ohne Links**. | alle | Baustein „Stand-Zeile“ und Inhaltsverzeichnis mit Sprungmarken (Abschnitt 6) |
| 17 | **Bekannt:** Social-Media-Symbole in der Fußzeile führen auf die Konten **von Wix** (`SEITE-dozenten.md`, Abschnitt 1); FAQ-Link in der Fußzeile ist tot (`DESIGN-foto.md`, Übersicht offen). Auf den Rechtstext-Seiten besonders unglücklich, weil die Datenschutzerklärung Facebook und Instagram beschreibt. | Fußzeile | nur Verweis |
| 18 | Region steht auf `de-at` (wie Shop und Wix-Events, `SEITE-shop.md`, Fund 21). | Quelltext | mit derselben Einstellung erledigt |

---

## 2. Gliederung und Hauptorte – Entscheidungen und Begründung

### Entscheidung 1: **Eine Vorlage für vier Seiten, Kopf ohne Titelfoto** (Vorschlag aus `DESIGN-foto.md`, Übersicht offen, bestätigt)

Alle vier Seiten bekommen denselben Aufbau: Kopf ohne Titelfoto (wie Downloads und Shop), darunter eine **Reiterleiste
„Rechtliches“** (Impressum · Datenschutz · AGB · Widerrufsrecht · Vertrag widerrufen), links ein **Inhaltsverzeichnis**, rechts
der Text in einer **Lesespalte** (höchstens ca. 70 Zeichen breit).
**Gründe:** (1) Wer eine Rechtsseite öffnet, sucht eine bestimmte Angabe – ein Foto würde sie auf dem Handy eine Bildschirmhöhe nach
unten schieben (Begründung wie `SEITE-downloads.md`, Abschnitt 5). (2) Die Reiter ersetzen vier einzelne Fußzeilen-Klicks: Wer im
Impressum ist, findet die AGB mit einem Klick. (3) Lange Texte (Datenschutz, AGB) sind mit Inhaltsverzeichnis und klaren
Abschnittslinien leichter zu lesen – gerade für ältere Besucher:innen.
**Kein Mitglied-Band** am Seitenende: Rechtsseiten sind keine Werbefläche; die Fußzeile folgt direkt.

### Entscheidung 2: **Wortlaut nicht selbst umschreiben – Gestaltung jetzt, Inhalt mit dem Rechtstexte-Auftrag**

Die neue Gestaltung kann sofort umgesetzt werden, auch mit den heutigen Texten. Den Inhalt ändern wir **nicht selbst**, sondern
sammeln alle Funde und geben sie **in einem Auftrag** zur Prüfung (Abschnitt 7, Punkt 1).
**Gründe:** Rechtstexte hängen voneinander ab (AGB ↔ Widerrufsbelehrung ↔ Datenschutz ↔ Formular). Wer einzelne Sätze selbst
„verbessert“, riskiert neue Widersprüche. Ein gebündelter Auftrag ist außerdem günstiger als mehrere (**Einsparmöglichkeit**).
**Ausnahmen, die ohne Auftrag sofort gehen**, weil sie nichts rechtlich Neues regeln: falscher Datenschutz-Link in AGB 13 (Fund 1),
Tippfehler und Klammerfehler (Funde 5, 7, 13), Zeilenumbruch in der Anschrift. Für das Impressum enthält die Vorschau einen
**Vorschlag** mit allen Korrekturen (Funde 2–6) – er wird mit dem Auftrag bestätigt und dann übernommen.

### Entscheidung 3: **Die Widerrufsbelehrung steht nur noch an einem Ort – `/widerrufsrecht`** (Vorschlag für den Auftrag)

Heute zwei abweichende Fassungen (Fund 10). Vorschlag: Die Belehrung steht nur auf `/widerrufsrecht`; AGB 5 enthält einen Satz
und den Link dorthin. Die Seite `/widerrufsrecht` bekommt unten den Kasten „Vertrag widerrufen“ mit dem Knopf.
**Grund:** Grundregel „jede Information hat genau einen Hauptort“ – zwei Fassungen laufen zwangsläufig auseinander, wie man sieht.
**Wichtig:** Die Belehrung selbst (Inhalt, Frist, Kosten, Weiterbildung, digitale Inhalte) wird hier nicht angefasst; das ist Teil
des Auftrags (`SEITE-anmeldung.md`, Abschnitt 7, Punkt 3). Ob der Rechtsprüfer bei einer Stelle bleiben möchte, entscheidet er.

### Entscheidung 4: **Rahmen duzt, Rechtstexte bleiben vorerst beim „Sie“**

Titel, Einleitungssatz, Reiter, Kasten „Du suchst …“ und Kasten „Vertrag widerrufen“ duzen, wie die ganze Webseite. Der
Rechtstext selbst siezt heute und bleibt so, bis er im Auftrag neu gefasst wird. **Wunsch an den Auftrag:** neue Texte in
Du-Form und mit Doppelpunkt gegendert (Teilnehmer:innen), damit die Seiten einheitlich werden.
**Grund:** Ansprache in einem Rechtstext umzustellen ist mehr als Suchen-und-Ersetzen (Grammatik, Formulierungen aus dem
Gesetz); das soll die Person machen, die den Text ohnehin prüft.

### Entscheidung 5: **Keine Kurzfassung der Rechtstexte – stattdessen „Du suchst …“ mit Verweisen**

Kein Kasten „Das Wichtigste in Kürze“. Die leicht verständliche Fassung der Teilnahmebedingungen steht schon auf der Anmeldung
(`#vorher`), die von Versand und Zahlung im Shop (Hinweiskasten). Die Rechtsseiten verweisen dorthin.
**Grund:** Eine zweite Kurzfassung wäre ein dritter Ort für dieselbe Regel.

### Entscheidung 6: **Stand-Zeile unter dem Titel**

Jede der vier Seiten zeigt „Stand: [Datum]“ – das Datum der letzten Prüfung, nicht der letzten Tippfehler-Korrektur.
**Grund:** Man sieht sofort, ob ein Text veraltet ist (Fund 16); für die jährliche Prüfung im Pflege-Ablauf ist das der Anker.

### Hauptorte – was abgeglichen wurde

| Thema | Steht auch auf … | Hauptort | Auf den Rechtsseiten | Grund |
|---|---|---|---|---|
| **Anbieterangaben** (Anschrift, Vertretung, Register) | Kontakt (`#anschrift`, drei Zeilen mit Link) | **Impressum** | vollständig | Kontakt wiederholt bewusst kurz (`SEITE-kontakt.md`, Abschnitt 2) |
| **Ansprechpersonen, Telefonnummern** | Kontakt, Aufgabenseiten | **Kontakt** | Impressum: nur die eine Adresse für rechtliche Anliegen; „Du suchst …“ → Kontakt | – |
| **Teilnahmebedingungen Weiterbildung** (verbindlich) | Anmeldung (`#vorher`, Kurzfassung) | **AGB, Abschnitt 12** | vollständig; „Du suchst …“ → Anmeldung | so schon in `DESIGN-foto.md`, Abschnitt 4 |
| **Versand, Lieferung, Zahlung Shop** (verbindlich) | Shop (Hinweiskasten, „Gut zu wissen“) | **AGB, Abschnitte 6–8 und 11** | vollständig | wie `SEITE-shop.md`, Entscheidung 7 |
| **Widerrufsbelehrung** | heute auch AGB 5 | **Widerrufsrecht** | AGB 5: Satz + Link (nach dem Auftrag) | Entscheidung 3 |
| **Widerruf online (Knopf)** | Anmeldung, Shop | **Seite „Vertrag widerrufen“** (`SEITE-anmeldung.md`, Entscheidung 4) | Reiter + Kasten auf AGB und Widerrufsrecht | – |
| **Welche Daten die Landkarte zeigt** (in einfachen Worten) | Datenschutzerklärung (künftig) | **Singende Landkarte** (`#datenschutz`) | „Du suchst …“ → Landkarte | `SEITE-landkarte.md`, Abschnitt 2 |
| **Datenschutz-Informationen** (verbindlich) | AGB 13 | **Datenschutz** | vollständig; AGB 13 nur Link | Fund 1 |

### Korrekturen auf den Nachbar-Vorschauen (26.09.2026)

| Seite | Stelle | Vorher | Nachher | Grund |
|---|---|---|---|---|
| alle 14 Foto-Vorschauen | Fußzeile → Impressum, Datenschutz | `#` | → `vorschau-foto-rechtliches.html#impressum` bzw. `#datenschutz` | Vorschau gibt es jetzt |
| alle 14 Foto-Vorschauen | Fußzeile → „AGB · Widerrufsrecht“ | ein Link `#` | zwei Links: `…#agb` und `…#widerrufsrecht` | jede Seite direkt erreichbar |
| Shop | Preis „zzgl. Versandkosten“, Hinweiskasten „Versand, Zahlung, Widerruf →“ | `#` | → `…#agb-6` (Preise und Versandkosten) | bis die „Seite Versand“ geklärt ist (`SEITE-shop.md`, Abschnitt 7, Punkt 2) |
| Shop | „Alle Bedingungen in den AGB →“, „Widerrufsrecht →“ | `#` | → `…#agb` bzw. `…#widerrufsrecht` | – |
| Weiterbildung | „Teilnahmebedingungen & AGB →“ | `#` | → `…#agb-12` | Teilnahmebedingungen = AGB 12 |
| Anmeldung | „Alle Teilnahmebedingungen (AGB, Abschnitt 12) →“ | `#` | → `…#agb-12` | nur der Link in der Vorschau-HTML; `SEITE-anmeldung.md` bleibt unverändert |
| Kontakt | Bereich Post: „Impressum →“ | `#` | → `…#impressum` | – |
| `DESIGN-foto.md` | Kopf, Abschnitte 2–4, Übersicht, Abschnitt 7 | Zeile „Rechtliches“ unter „Noch offen“ | Rechtliches unter „fertig“ (nur Gestaltung); Rechtstexte-Auftrag als eigener offener Punkt; Gelb-Linie für Reiter (Abschnitt 2), Überschriftgröße Rechtstexte (Abschnitt 3), Bausteine und Hauptorte (Abschnitt 4), Checklisten-Punkt Fußzeile (Abschnitt 7) | Übersicht aktuell halten |
| `SEITE-shop.md` | Abschnitt 1, Fund 7, und Abschnitt 7, Punkt 1 | „Zeile ‚Rechtliches‘ in `DESIGN-foto.md`“ | „`SEITE-rechtliches.md`, Abschnitt 7, Punkt 1“ | die Zeile gibt es nicht mehr |
| `SEITE-kontakt.md` | Abschnitt 7, Punkt 9 | – | Nachtrag mit Verweis auf die weiteren Impressum-Funde | Punkt 9 bleibt Hauptort für TMG → DDG, Details jetzt hier |

Die anderen Stilvarianten (`vorschau.html`, `-plakat`, `-rund`, `-zeitung`) sind nicht angepasst – sie sind Entwürfe, keine
Seitensammlung. Kopfleiste und Fußzeile sowie das gesamte CSS sind aus `vorschau-foto-shop.html` übernommen; angehängt ist der
Block „Ergänzungen für die Seiten ‚Rechtliches‘“.

---

## 3. Aufbau von oben nach unten

Gleicher Aufbau für alle vier Seiten; nur Titel, Einleitungssatz, Inhaltsverzeichnis und Text wechseln.

| Nr. | Fläche | Bereich | Inhalt |
|---|---|---|---|
| – | Weizen / Weiß | Hinweisleiste, Kopfleiste | wie alle Seiten; **kein** Menüpunkt unterstrichen |
| 1 | Leinen | **Reiterleiste „Rechtliches“** | Impressum · Datenschutz · AGB · Widerrufsrecht · Vertrag widerrufen; aktive Seite mit gelber Linie darunter |
| – | Leinen | Brotkrumen | „Start › Rechtliches › Impressum“ (Rechtliches ohne Link – es gibt keine Übersichtsseite) |
| 2 | Leinen | **Kopf ohne Titelfoto** | kleine Überschrift „Rechtliches“, Titel (H1), ein Satz in Du-Form, **Stand-Zeile** |
| 3 | Leinen | **Inhaltsverzeichnis** (links, bleibt beim Scrollen stehen) + **Lesespalte** (rechts) | nummerierte Abschnitte mit Sprungmarken; Text mit Abschnittsüberschriften (28 px, Linie darüber), Unterüberschriften fett |
| 4 | Weiß (Kasten) | **„Du suchst …“** | zwei Verweise in Nutzersprache (je Seite verschieden, siehe unten) |
| 5 | Tiefgrün (Kasten) | **„Du möchtest einen Vertrag widerrufen?“** | nur auf AGB (Ende) und Widerrufsrecht (eigener Abschnitt „Online widerrufen“); gelber Knopf „Vertrag widerrufen“ |
| – | Tiefgrün | Fußzeile | wie alle Seiten, „AGB“ und „Widerrufsrecht“ als zwei Links |

**Titel und Einleitungssätze** (selbst formuliert, Du-Form):

| Seite | Titel | Einleitungssatz | „Du suchst …“ |
|---|---|---|---|
| Impressum | Impressum | Wer hinter dieser Webseite steht und wie du uns erreichst. | Ansprechperson/Telefon → Kontakt · Presse → Kontakt `#presse` |
| Datenschutz | Datenschutzerklärung | Welche Daten wir erheben, wenn du diese Webseite nutzt, wofür wir sie brauchen und welche Rechte du hast. | Landkarte → `#datenschutz` · Auskunft → Adresse im Impressum |
| AGB | Allgemeine Geschäftsbedingungen | Die Bedingungen für Bestellungen im Shop (Abschnitte 1–11) und für die Weiterbildung (Abschnitt 12). | Anmeldung in einfachen Worten → Anmeldung `#vorher` · Versand und Zahlung → Shop (oben) |
| Widerrufsrecht | Widerrufsrecht | Wann du einen Vertrag mit uns widerrufen kannst und was dann passiert. | – (stattdessen Kasten „Vertrag widerrufen“) |

Auf dem Handy rutscht das Inhaltsverzeichnis als weißer Kasten über den Text; die Reiter brechen in zwei Zeilen um.

---

## 4. Woher die Inhalte stammen – und welche Dienste die Webseite nutzt

| Bereich | Quelle |
|---|---|
| Texte der vier Seiten | `singende-krankenhaeuser.de/impressum`, `/datenschutz`, `/agb`, `/widerrufsrecht`, Seitenquelltext vom 26.09.2026 |
| Impressum-Vorschlag | heutiger Text, geändert nach Funden 2–6 (DDG, Telefon, Steuernummer weg, OS-Plattform weg, Platzhalter für die verantwortliche Person) |
| Ablauf Zimmerreservierung | `SEITE-anmeldung.md`, Abschnitt 7, Punkt 4 |

**In der Vorschau gekürzt:** Die Datenschutzerklärung ist nur mit Gliederung, Abschnitt „verantwortliche Stelle“ und Randnotizen
dargestellt (sie wird ohnehin neu erstellt). AGB und Widerrufsrecht stehen fast vollständig da; „[…]“ markiert Auslassungen,
AGB 5 wiederholt die Belehrung nicht. **Selbst formuliert** (bitte bei der Abnahme gegenlesen): Einleitungssätze, „Du suchst …“,
Kasten „Vertrag widerrufen“, alle Randnotizen.

### Dienste-Liste als Vorbereitung für die neue Datenschutzerklärung (Einsparmöglichkeit)

Wer eine Datenschutzerklärung prüfen oder erstellen lässt, muss zuerst wissen, **welche Dienste die Webseite wirklich nutzt**.
Diese Liste vorher zu liefern spart Stunden beim Auftrag. Stand nach Quelltext von Startseite, Kontakt, Mitglied sein, Anmeldung,
Termine, Landkarte (26.09.2026) und den Seiten-Dokus – **bitte mit Andy/Tom im Wix-Dashboard gegenprüfen** (Spalte „prüfen“).

| Dienst | Wofür | Heute in der Erklärung? | Gefunden / Quelle | prüfen |
|---|---|---|---|---|
| Wix (Hosting, Statistik, Cookies) | ganze Webseite | ja | Quelltext | welche Wix-Statistik/Cookie-Banner eingeschaltet sind |
| Wix-Formulare | Kontakt, Anmeldung Weiterbildung, künftig Widerruf | nur „Kontaktformular“ allgemein | Quelltext `wix-forms` | Speicherdauer der Einsendungen |
| Wix Events | Termine, Veranstaltungsseiten | nein | `SEITE-veranstaltung.md` | – |
| Wix Stores + Kasse | Shop | allgemein („eCommerce“) | `SEITE-shop.md` | welche Zahlungsarten in der Kasse aktiv sind (`SEITE-shop.md`, Punkt 5) |
| Google reCAPTCHA (bzw. Wix-Captcha) | Formulare | ja | Quelltext „captcha“ auf allen Formularseiten | ob Google reCAPTCHA oder Wix' eigenes Captcha |
| CleverReach | Newsletter | **nein** (nur „Newsletter“) | Fußzeilen-Link `seu.cleverreach.com` | – |
| Videos (Wix-Videoplayer) | Startseite | YouTube, Vimeo | Quelltext `VideoPlayer` | ob YouTube eingebettet ist; Vimeo vermutlich nicht |
| Leaflet (cdnjs/Cloudflare), CARTO-Kacheln, Nominatim, Google-Favicon-Dienst | Singende Landkarte | **nein** | `SEITE-landkarte.md`, Abschnitt 7, Punkte 3–5 | – |
| Microsoft SharePoint (Freigabelink) | Broschüre in der Fußzeile | nein | `SEITE-kontakt.md`, Punkt 5 | entfällt, wenn die PDF in die Wix-Medien kommt |
| Zoom | Online-Module | ja | Erklärung | ob weiter Zoom genutzt wird |
| Facebook, Instagram | Links in der Fußzeile | ja (als eingebettete Elemente) | Fußzeile (heute Wix-Konten, Fund 17) | nur Links, keine eingebetteten Elemente? Dann kürzer |
| Tumblr, Kommentarfunktion, Google Maps, Bonitätsprüfung, 12 Zahlungsdienste | – | ja | **nicht gefunden** | streichen, wenn bestätigt |

---

## 5. Fotos

Keine. **Entscheidung:** Rechtsseiten sind reine Service-Seiten (Begründung wie `SEITE-downloads.md`, Abschnitt 5; Entscheidung 1).
Es wurden daher auch keine Fotos heruntergeladen, eine pHash-Prüfung war nicht nötig. Das Logo in der Kopfleiste ist aus
`vorschau-foto-shop.html` übernommen.

---

## 6. Neue Bausteine, Umsetzung in Wix, Pflege

Farben, Schrift, Rundungen wie in `DESIGN-foto.md`; Kopf ohne Titelfoto und Verweisliste wie Downloads; Randnotiz „Vor
Veröffentlichung“ wie Downloads (nur Vorschau). **Neu auf diesen Seiten:**

| Baustein | Aussehen | Begründung |
|---|---|---|
| **Reiterleiste** | Zeile mit 5 fetten Textlinks über einer 1-px-Linie in Anthrazit; aktive Seite mit **3 px Logo-Gelb** darunter (keine Fläche, kein Button) | verbindet zusammengehörige Seiten ohne Menüpunkt; Gelb nur als feine Linie, bleibt „Akzent“ |
| **Stand-Zeile** | „**Stand:** 26.09.2026“, 16 px, unter dem Einleitungssatz | Entscheidung 6 |
| **Inhaltsverzeichnis mit Lesespalte** | links 260 px, kleine Überschrift „INHALT“, nummerierte Liste, bleibt beim Scrollen stehen; rechts Text max. ca. 70 Zeichen, Abschnittsüberschrift 28 px mit Linie darüber; Handy: Verzeichnis als weißer Kasten oben | lange Texte gliedern |
| **„Du suchst …“-Kasten** | weiße Fläche, 20 px Rundung, kleine Überschrift, zwei Einträge (Frage fett, darunter Textlink mit Pfeil) | Entscheidung 5 |
| **Widerrufs-Kasten** | Tiefgrün, 20 px Rundung, weißer Text links, gelber Pillen-Knopf „Vertrag widerrufen“ rechts | der einzige Knopf auf diesen Seiten; Weg zum Widerruf in einem Klick |

### Gestaltung: heute → neu (Werte für die Wix-Einstellungen)

| Element | heute | neu |
|---|---|---|
| Seitenhintergrund | Weiß | Leinen `#F5F3E8` |
| Titel (H1) | Wix-Standard | PT Sans Regular 44–76 px, Anthrazit |
| Abschnittsüberschrift | teils fett, Fließtextgröße | PT Sans Regular 28 px, Linie 1 px Anthrazit darüber |
| Unterüberschrift (z. B. „12.1 Module“) | fett | PT Sans Bold 19 px |
| Fließtext | Wix-Standard | PT Sans 18 px, Zeilenabstand 1,6 |
| Seitentitel für Google | „IMPRESSUM \| …“ (Großbuchstaben) | „Impressum \| Singende Krankenhäuser e.V.“ (ebenso Datenschutz, AGB, Widerrufsrecht) |

### Umsetzung in Wix – Schritt für Schritt

1. **Sofort, ohne Auftrag** (ca. 15 Minuten): AGB 13 – Link auf `/datenschutz` setzen (Fund 1). Tippfehler in AGB 12.4, Klammerfehler in
   Impressum und Datenschutz, Zeilenumbruch „Rostocker Str. 2 / 88250 Weingarten“ (Funde 5, 7, 13). EU-Streitschlichtung (Fund 3) streichen –
   das ist eine reine Entfernung eines überholten Hinweises; wer unsicher ist, gibt es mit in den Auftrag.
2. **Vorher:** Website duplizieren und an der Kopie arbeiten (wie `DESIGN-foto.md`, Abschnitt 6).
3. **Eine Seite gestalten, drei duplizieren:** Seite `/impressum` öffnen → Hintergrund Leinen → Kopf (kleine Überschrift, Titel, Satz,
   Stand-Zeile) anlegen → darunter einen Abschnitt mit zwei Spalten (links Inhaltsverzeichnis, rechts Text). Danach die Gestaltung auf
   Datenschutz, AGB und Widerrufsrecht übertragen (*Abschnitt kopieren → einfügen*, Text austauschen). Adressen bleiben gleich, damit
   alle Links und Google-Einträge gültig bleiben.
4. **Reiterleiste:** In Wix unter *Menüs & Seiten* ein **zweites Menü** „Rechtliches“ mit den 5 Seiten anlegen und auf jeder der vier Seiten
   als **horizontales Menü** einfügen. Gestaltung: Text fett, 17 px; Zustand „ausgewählt“ mit gelber Linie unten (3 px). Vorteil: Menü nur
   einmal pflegen. „Vertrag widerrufen“ erst aufnehmen, wenn die Seite existiert (`SEITE-anmeldung.md`, Schritt 8).
5. **Sprungmarken:** Vor jede Abschnittsüberschrift ein **Anker**-Element setzen (*Hinzufügen → Anker*), Namen wie in der Vorschau:
   Impressum `imp-anbieter` …, Datenschutz `ds-1` bis `ds-9`, AGB `agb-1` bis `agb-13`, Widerrufsrecht `wr-belehrung`, `wr-folgen`, `wr-online`.
   Das Inhaltsverzeichnis links sind Textlinks auf diese Anker. **Wichtig:** Mit den Ankern können andere Seiten direkt auf „AGB, Abschnitt 12“
   verlinken (Weiterbildung, Anmeldung) – das ist in den Nachbar-Vorschauen schon so gesetzt.
6. **Inhaltsverzeichnis „bleibt stehen“:** Spalte anklicken → *Scroll-Effekte* → *Fixieren* („Sticky“). Falls das in der Spalte nicht angeboten
   wird: weglassen – das Verzeichnis funktioniert auch ohne.
7. **Kästen:** „Du suchst …“ als weiße Box (20 px Ecken), Widerrufs-Kasten als Tiefgrün-Box mit der gelben Button-Vorlage.
8. **Seitentitel für Google:** *Seiten-Einstellungen → SEO-Grundlagen* → Titel in normaler Schreibweise (Tabelle oben).
   Die Rechtsseiten **nicht** auf „nicht indexieren“ setzen – man soll das Impressum finden können.
9. **Handy prüfen**, alle Sprungmarken und Reiter einmal anklicken.
10. **Abnahme:** Vorstand (Martin, Paula) für die Gestaltung; die neuen Texte kommen erst nach dem Rechtstexte-Auftrag hinein.

### Pflege-Ablauf

| Wann | Was | Wer (Vorschlag) |
|---|---|---|
| nach dem Rechtstexte-Auftrag | neue Texte einsetzen, Stand-Zeile auf das Prüfdatum setzen, Randnotizen aus dieser Doku abhaken | Tom |
| bei jedem neuen Dienst auf der Webseite (Formular, Video, Karte, App) | Dienste-Liste (Abschnitt 4) ergänzen, Datenschutzerklärung anpassen lassen | wer den Dienst einbaut, mit Tom |
| bei Preis-, Storno- oder Ablaufänderung der Weiterbildung | AGB 12 **und** die Kurzfassung auf der Anmeldung gleichzeitig ändern | Sandra, Tom |
| bei Vorstandswechsel | Impressum „Vertreten durch“ und verantwortliche Stelle anpassen | Vorstand, Tom |
| jährlich im Januar | alle vier Seiten lesen: stimmen Namen, Adressen, Dienste, Gesetzesverweise? Stand-Zeile nur nach inhaltlicher Prüfung ändern | Tom |

---

## 7. Offene Punkte – vor der Veröffentlichung klären

1. **Rechtstexte-Auftrag** (*fachliche Einschätzung, keine Rechtsberatung*): **ein** Auftrag für Impressum (Funde 2–6), Datenschutzerklärung
   neu (Funde 7–9, mit der Dienste-Liste aus Abschnitt 4), AGB (Funde 11–13; Geltungsbereich, Du-Form) und eine einzige Widerrufsbelehrung
   (Fund 10, Entscheidung 3). Die bekannten Punkte kommen aus `SEITE-anmeldung.md`, Abschnitt 7, Punkte 1–3 und 8, und `SEITE-shop.md`,
   Abschnitt 7, Punkt 1, dazu. **Einsparmöglichkeiten:** (a) zuerst fragen, ob der Verein über einen Dachverband kostenlose
   Rechtsberatung bekommt (`SEITE-anmeldung.md`, Punkt 3); (b) Angebote vergleichen zwischen einmaliger Prüfung durch eine Kanzlei und
   einem **Rechtstexte-Abo** (Anbieter von Rechtstexten für Webseiten und Online-Shops liefern AGB, Widerrufsbelehrung und
   Datenschutzerklärung und aktualisieren sie bei Gesetzesänderungen – das hätte TMG → DDG und die OS-Plattform automatisch erledigt);
   (c) diese Doku mit der Fund-Tabelle und der Dienste-Liste mitgeben, dann muss niemand die Webseite selbst durchsuchen.
   → Vorstand (Martin, Paula), Tom.
2. **AGB 12.1 an den geklärten Ablauf angleichen** (Fund 12) und Tippfehler (Fund 13): kann auch vor dem Auftrag passieren, wenn der Vorstand
   den neuen Satz freigibt (Vorschlag: „Die Zimmer reserviert der Verein für dich; im Seminarhaus Sonnenberg in Einbeck reservierst du selbst.
   Die Kosten für Unterkunft und Verpflegung trägst du.“ – Wortlaut vom Prüfer bestätigen lassen). → Sonja, Tom.
3. **Welche Steuernummer gilt?** (Fund 2) – beim Steuerbüro oder Finanzamt nachfragen; danach nur noch eine verwenden. → Sonja.
4. **Impressum: Wer vertritt den Verein, wer ist verantwortlich nach § 18 MStV?** (Funde 4, 6) – Vereinsregisterauszug ansehen (kostenlos
   einsehbar über das gemeinsame Registerportal der Länder); verantwortliche Person benennen. → Vorstand.
5. **Rücksendeadresse Sandra in Wuppertal** (Fund 15): Ist das eine Privatanschrift, und ist Sandra einverstanden, dass sie öffentlich steht?
   Alternative: Rücksendungen an die Vereinsanschrift in Weingarten, weitergeleitet. Mit dem Auftrag festlegen. → Sandra, Sonja.
6. **Dienste-Liste gegenprüfen** (Abschnitt 4, Spalte „prüfen“): im Wix-Dashboard nachsehen, welche Apps, Zahlungsarten, Captcha und
   Statistik aktiv sind. → Tom, ggf. mit Andy.
7. **Social-Media-Links** (Fund 17) mit dem Fußzeilen-Umbau richtig setzen – bekannt aus `SEITE-dozenten.md`; hier nur erinnert, weil die
   neue Datenschutzerklärung davon abhängt, ob Facebook/Instagram nur verlinkt oder eingebettet sind. → Tom.

---

## 8. Checkliste für diese Seiten

- [ ] Link in AGB 13 zeigt auf `/datenschutz` (nicht mehr auf healingsongs.de)?
- [ ] Alle vier Seiten mit Kopf ohne Titelfoto, Reiterleiste, Stand-Zeile, Inhaltsverzeichnis und Lesespalte?
- [ ] Sprungmarken `agb-1` … `agb-13` gesetzt; Links „AGB, Abschnitt 12“ von Weiterbildung und Anmeldung landen richtig?
- [ ] Widerrufsbelehrung nur noch an einer Stelle (nach dem Auftrag)?
- [ ] Impressum: § 5 DDG, keine OS-Plattform, richtige Vertretung, verantwortliche Person, Telefonnummer ohne Klammerfehler?
- [ ] Datenschutzerklärung nennt nur Dienste, die die Webseite nutzt, und alle, die sie nutzt (Dienste-Liste)?
- [ ] Stand-Zeile zeigt das Datum der letzten Prüfung?
- [ ] Kasten „Vertrag widerrufen“ auf AGB und Widerrufsrecht, sobald die Seite `/vertrag-widerrufen` online ist?
- [ ] Fußzeile: „AGB“ und „Widerrufsrecht“ als zwei Links; kein Menüpunkt unterstrichen?
- [ ] Seitentitel für Google in normaler Schreibweise; Seiten nicht auf „nicht indexieren“?
- [ ] Handy geprüft, kein seitliches Scrollen?
- [ ] Punkte 1, 3 und 4 aus Abschnitt 7 geklärt?
- [ ] Checkliste aus `DESIGN-foto.md`, Abschnitt 7, erfüllt (Ausnahme: kein Titelfoto, begründet in Abschnitt 5)?
