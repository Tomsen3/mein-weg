# SEITE-aufraeumen.md – Aufräumen ohne Neugestaltung: Vorlagenseiten, Weiterleitungen, Seitentitel, Apps

Stand: 26.09.2026 · Verantwortlich: Tom (Webseite/Marketing, IT) · Mitentscheidung: Sonja (Website-Name), bei technischen Problemen Andy
Vorschau: **keine** – hier wird nichts gestaltet, nur aufgeräumt.
Stilregeln: `DESIGN-foto.md` · Ist-Zustand: `IST-STRUKTUR.md` · Gründe für einzelne Umleitungen: in den jeweiligen `SEITE-*.md` (verlinkt)

Dieses Dokument erklärt, **welche Seiten der heutigen Webseite weg können, welche alten Adressen wohin weitergeleitet werden,
wie die Seitentitel bei Google heißen sollen und welche Wix-Apps vermutlich überflüssig sind** – mit Begründung und Schritt-für-
Schritt-Anleitung. Eine Person ohne Vorkenntnisse soll damit arbeiten können.

**Warum das eigene Dokument:** Diese Arbeiten gehören zu keiner einzelnen Seite, gehen aber alle über dieselben Wix-Einstellungen
(Seiten, URL-Weiterleitungen, SEO, Apps). Gesammelt an einem Ort lassen sie sich **in einem Durchgang** erledigen, statt Seite für Seite
(**Einsparmöglichkeit**: Zeit). Dieses Dokument ist **Hauptort für die vollständige Weiterleitungsliste** (Abschnitt 3) und für die
**Seitentitel** der Seiten ohne eigene Regel (Abschnitt 4). Die Gründe für einzelne Umleitungen bleiben in den Seiten-Dokus.

---

## 1. Ausgangslage – was es heute gibt

Ausgelesen am 26.09.2026 per `curl`: Sitemap `sitemap.xml` mit fünf Teil-Sitemaps, davon `pages-sitemap.xml` (38 Seiten) vollständig,
jeweils Seitentitel und Robots-Angabe aus dem Quelltext. Die Teil-Sitemaps für Veranstaltungen (40), Produkte (93) und Kategorien (7)
sind in `SEITE-veranstaltung.md` und `SEITE-shop.md` ausgewertet.

### Die 38 Seiten und was aus ihnen wird

| Adresse | Zukunft | Wo begründet |
|---|---|---|
| `/` (Start), `/weiterbildung`, `/sing-mit`, `/singende-landkarte`, `/unsere-einrichtungen`, `/termine`, `/überuns`, `/mitglied-sein`, `/kontakt`, `/dozenten`, `/anmeldung`, `/anmeldung-erfolgreich`, `/impressum`, `/datenschutz`, `/agb`, `/widerrufsrecht` | bleiben, im Foto-Stil neu gestaltet (Adresse bleibt) | jeweilige `SEITE-*.md` |
| `/wichtige-infos`, `/kranken-und-gesundheitshäuser`, `/pflege-und-senioren` | Weiterleitung auf `/weiterbildung`, dann löschen | `SEITE-weiterbildung.md`, Abschnitte 1 und 6 |
| `/über-uns`, `/team-vorstand`, `/team-geschäftsführung`, `/ehrenvorsitzende`, `/botschafter-und-beirat`, `/singforschung` | Weiterleitung auf `/überuns`, dann löschen | `SEITE-ueber-uns.md`, Abschnitte 2 und 6 |
| `/veranstaltungen` | Weiterleitung auf `/termine` | `SEITE-veranstaltung.md`, Entscheidung 2 |
| `/jahrestagung2027`, `/programmjahrestagung`, `/dozentenjahrestagung`, `/workshops`, `/liedernacht`, `/organisation`, `/anmeldungjahrestagung`, `/teilnahmebedingungen`, `/faq` | bleiben, wie sie sind | `DESIGN-foto.md`, Abschnitt 5 |
| **`/inquiry-services-page`, `/lp-singing-family`, `/book-online`** | **löschen** (Entscheidung 1) | dieses Dokument |

Neu dazu kommen `/downloads` (`SEITE-downloads.md`), `/haeufige-fragen` (`SEITE-faq.md`) und `/vertrag-widerrufen` (`SEITE-anmeldung.md`).

### Funde

**Neu** = in keiner anderen Doku erwähnt.

| Nr. | Fund | Folge |
|---|---|---|
| 1 | **Neu:** **`/inquiry-services-page`** („Inquiry Services Page | Sikra Deutschland“) wirbt mit drei Absätzen für **„Individuelle Webgestaltung“, „Suchmaschinenoptimierung“ und „Online-Marketing-Kampagnen“** – ein Wix-Vorlagentext („… um die Online-Präsenz Ihres Unternehmens hervorzuheben“). Wer die Seite über Google findet, liest, der Verein verkaufe Webdesign. Gehört zur App „Wix Services“. | sofort löschen (Abschnitt 6, Schritt 1) |
| 2 | **Neu:** **`/lp-singing-family`** („LP_Singing_Family“) ist leer – nur Kopf- und Fußzeile. „LP“ steht bei Wix für Landingpage; vermutlich ein angefangener Entwurf. | kurz bei der Webdesignerin nachfragen, dann löschen (Abschnitt 7, Punkt 1) |
| 3 | **Neu:** **`/book-online`** („ONLINE BUCHEN“) zeigt „Hier gibt es gerade nichts zu buchen“, hat aber die Google-Beschreibung „Auf dieser Seite kannst Du Dich für unsere Veranstaltungen anmelden.“ – sie **konkurriert bei Google mit `/anmeldung` und `/termine`** und führt ins Leere. Gehört zur App „Wix Bookings“. | löschen, Weiterleitung auf `/termine` |
| 4 | **Neu:** Keine der drei Seiten ist von einer anderen Seite verlinkt (Quelltext aller 38 Seiten durchsucht) – alle drei stehen aber in der **Sitemap**, also findet Google sie. | Löschen bricht keinen Link |
| 5 | **Neu:** Im Quelltext sind **25 Wix-Apps** eingetragen, darunter mehrere, die auf der Webseite keine sichtbare Aufgabe haben: Wix Bookings, Wix Services, Wix Pricing Plans (Preispläne/Abos), Get Funding (Spendenaktion), Wix Chat, Countdown Timer, Wix Music, ShoutOut (Legacy, alter Newsletter – verschickt wird über CleverReach), Old Wix Forms and Payments. Jede App lädt Programmcode, legt ggf. Cookies und gehört in die Datenschutzerklärung. | prüfen und entfernen, was nicht gebraucht wird (Entscheidung 4, Abschnitt 6, Schritt 5) |
| 6 | **Bekannt, jetzt gezählt:** **24 der 38 Seiten** enden im Google-Titel auf „\| **Sikra Deutschland**“ – alle Seiten, für die kein eigener Titel eingetragen ist (auch Über-uns-Unterseiten, Zweig-Seiten, Dozenten, Jahrestagung). Hauptort: `SEITE-veranstaltung.md`, Abschnitt 7, Punkt 8. | eine Einstellung ändert alle (Abschnitt 4) |
| 7 | **Neu:** **`/singende-landkarte` hat gar keinen Seitentitel** (kein `<title>`, keine Beschreibung) – Google muss raten. | Titel und Beschreibung setzen (Abschnitt 4) |
| 8 | **Neu:** Seitentitel folgen **drei Mustern**: „SEITE \| Singende Krankenhäuser e.V.“ (Großbuchstaben, 11 Seiten), „Seite \| Sikra Deutschland“ (24), „Singende Krankenhäuser e.V. \| Anmeldung“ (umgekehrt, 1); dazu die Startseite und die Landkarte ohne Titel. | ein Muster für alle (Entscheidung 3) |
| 9 | **Neu:** **`/anmeldung-erfolgreich`** (Dankeseite nach dem Formular) steht in der Sitemap und ist für Google freigegeben. Wer sie über Google aufruft, liest „Vielen Dank für Deine Anmeldung“, ohne angemeldet zu sein. | auf „nicht indexieren“ stellen (Abschnitt 6, Schritt 4). Hauptort für die Seite ist `SEITE-anmeldung.md`; dort wird das nachgetragen, sobald die Doku wieder bearbeitet wird (Abschnitt 7, Punkt 5) |
| 10 | Teil-Sitemap `member-profiles_p_first-chunk-sitemap.xml` ist **leer** – der Mitgliederbereich („Members Area“) ist installiert, aber es gibt keine öffentlichen Profile. | nur prüfen, ob jemand den Login nutzt (Abschnitt 7, Punkt 3) |

---

## 2. Entscheidungen und Begründung

### Entscheidung 1: **Die drei Vorlagenseiten löschen, nicht nur ausblenden** (Vorschlag aus `DESIGN-foto.md`, Übersicht, bestätigt)

**Gründe:** (1) Ausgeblendete Seiten („nicht im Menü“) bleiben erreichbar und stehen weiter in der Sitemap. (2) Fund 1 schadet dem
Ansehen des Vereins, Fund 3 führt Anmeldewillige ins Leere. (3) Keine Seite verlinkt darauf (Fund 4), Löschen bricht also nichts.
**Ausnahme:** `/lp-singing-family` erst nach kurzer Rückfrage bei der Webdesignerin löschen (Abschnitt 7, Punkt 1); bis dahin
*SEO → Seite nicht indexieren* und aus dem Menü nehmen.
**Nach dem Löschen** je eine Weiterleitung, falls Google die Seite schon kennt (Abschnitt 3, Gruppe B).

### Entscheidung 2: **Eine Weiterleitungsliste für die ganze Webseite**

Alle Umleitungen, die in den Seiten-Dokus beschlossen sind, stehen **zusätzlich** gesammelt in Abschnitt 3 – mit Reihenfolge und
Status-Spalte. **Gründe:** (1) In Wix werden alle Weiterleitungen an einer Stelle eingetragen (*URL-Weiterleitungen*); wer dort sitzt,
braucht die vollständige Liste, nicht fünf Dokumente. (2) Man sieht, ob eine Adresse doppelt vergeben oder vergessen ist.
**Aufteilung der Hauptorte:** *Welche Adresse wohin* → hier. *Warum* → die Seiten-Doku (in der Liste verlinkt). Wer eine neue
Umleitung beschließt, trägt sie in beiden ein.

### Entscheidung 3: **Ein Muster für Seitentitel: „Seitenname | Singende Krankenhäuser e.V.“**

Normale Schreibweise (keine Großbuchstaben), zuerst der Seitenname, dann der Vereinsname. **Gründe:** (1) Google zeigt nur die ersten
rund 60 Zeichen – der Seitenname vorn sagt, was auf der Seite steht; der Vereinsname hinten sagt, von wem. (2) Großbuchstaben lesen
sich schlechter und wirken wie Schreien. (3) „Sikra Deutschland“ kennt außerhalb des Vereins niemand (Fund 6).
So schon festgelegt für Rechtliches (`SEITE-rechtliches.md`, Abschnitt 6) und Häufige Fragen (`SEITE-faq.md`, Entscheidung 3).
**Abweichung:** `SEITE-anmeldung.md`, Abschnitt 6, Schritt 5 e, nennt für die Dankeseite „Singende Krankenhäuser e.V. | Anmeldung
erfolgreich“ (umgekehrte Reihenfolge). Die Dankeseite wird nach Fund 9 ohnehin nicht indexiert, der Titel ist dort also nebensächlich;
angleichen, wenn `SEITE-anmeldung.md` wieder bearbeitet wird (Abschnitt 7, Punkt 5).

### Entscheidung 4: **Apps nur entfernen, wenn sicher ist, dass sie nichts tun**

Jede App aus Fund 5 wird vor dem Entfernen im Dashboard geprüft: Ist sie auf einer Seite eingebaut? Hat sie Daten (Buchungen,
Spenden, Chat-Verläufe, Abos)? Läuft ein bezahltes Abo? Erst wenn alles „nein“ ist, entfernen.
**Gründe:** (1) Weniger Apps = weniger Programmcode (schnellere Seite), weniger Cookies, **kürzere Datenschutzerklärung** – das senkt
den Prüfaufwand im Rechtstexte-Auftrag (`SEITE-rechtliches.md`, Abschnitt 7, Punkt 1; **Einsparmöglichkeit**). (2) Falls für eine
ungenutzte App ein Abo läuft, spart das Kündigen direkt Geld. (3) Umgekehrt kann eine App, die auf den ersten Blick überflüssig
wirkt, doch etwas tun (z. B. Countdown auf den Jahrestagung-Seiten, Wix Music für Hörbeispiele) – deshalb erst prüfen.

### Korrekturen auf den Nachbar-Dokus (26.09.2026)

| Doku | Stelle | Änderung | Grund |
|---|---|---|---|
| `DESIGN-foto.md` | Kopf, Übersicht | Aufräumen unter „fertig (Doku)“, Zeile aus „Noch offen“ entfernt; Verweis auf dieses Dokument | Übersicht aktuell halten |
| `SEITE-faq.md` | Abschnitt 6, Schritt 2, und Abschnitt 7, Punkt 6 | Verweis: vollständige Liste in `SEITE-aufraeumen.md`, Abschnitt 3 | Entscheidung 2 |
| `SEITE-weiterbildung.md`, `SEITE-ueber-uns.md`, `SEITE-veranstaltung.md`, `SEITE-shop.md` | jeweils der Umsetzungsschritt mit der Weiterleitung | Satz „alle Weiterleitungen gesammelt: `SEITE-aufraeumen.md`, Abschnitt 3“ | Entscheidung 2 |
| `SEITE-veranstaltung.md` | Abschnitt 7, Punkt 8 | Nachtrag: 24 von 38 Seiten betroffen, Vorgehen in `SEITE-aufraeumen.md`, Abschnitt 4 | Fund 6 |
| `SEITE-rechtliches.md` | Abschnitt 4, Dienste-Liste | neue Zeile „weitere installierte Wix-Apps“ mit Verweis auf Fund 5 | Datenschutzerklärung nennt nur, was übrig bleibt |
| `SEITE-anmeldung.md` | – | **nicht geändert** (gesperrt); Fund 9 und die Titel-Abweichung stehen in Abschnitt 7, Punkt 5 | Vorgabe |

---

## 3. Weiterleitungsliste (Hauptort)

Alle als **301** („dauerhaft“) anlegen. In Wix: *Dashboard → Marketing & SEO → SEO-Tools → URL-Weiterleitungen* (Bezeichnung kann
leicht abweichen). Spalte „erledigt“ beim Umsetzen mit Datum füllen.

**Gruppe A – sofort, auch vor jeder Neugestaltung** (die Adressen sind heute tot):

| Alte Adresse | Ziel | Grund | erledigt |
|---|---|---|---|
| `/haeufige-fragen.html` | vorläufig `/kontakt`, nach Veröffentlichung `/haeufige-fragen` | Fußzeilen-Link der alten Webseite (`SEITE-faq.md`, Entscheidung 3) | |
| `/singende-gesundheitseinrichtungen.html` | `/singende-landkarte` | Link in den Einrichtungs-Anträgen (`SEITE-einrichtungen.md`, Abschnitt 7, Punkt 4) – so funktionieren auch schon verschickte Anträge | |
| `/singende-altersheime.html` | `/singende-landkarte` | wie oben | |

**Gruppe B – beim Löschen der Vorlagenseiten** (Entscheidung 1):

| Alte Adresse | Ziel | Grund | erledigt |
|---|---|---|---|
| `/book-online` | `/termine` | wer „buchen“ wollte, findet dort alle Termine | |
| `/inquiry-services-page` | `/` | kein passender Inhalt | |
| `/lp-singing-family` | `/` | kein Inhalt (nach Rückfrage, Abschnitt 7, Punkt 1) | |

**Gruppe C – mit dem Umbau der jeweiligen Seite** (erst, wenn die Zielseite im neuen Stil steht):

| Alte Adresse | Ziel | Grund | erledigt |
|---|---|---|---|
| `/wichtige-infos` | `/weiterbildung` | gleicher Inhalt (`SEITE-weiterbildung.md`, Abschnitt 6) | |
| `/kranken-und-gesundheitshäuser` | `/weiterbildung` | Zweig-Seite entfällt (`SEITE-weiterbildung.md`, Abschnitt 6) | |
| `/pflege-und-senioren` | `/weiterbildung` | wie oben | |
| `/über-uns` | `/überuns` | Über uns wird eine Seite (`SEITE-ueber-uns.md`, Abschnitt 6, Schritt 2) | |
| `/team-vorstand` | `/überuns` | wie oben | |
| `/team-geschäftsführung` | `/überuns` | wie oben | |
| `/ehrenvorsitzende` | `/überuns` | wie oben | |
| `/botschafter-und-beirat` | `/überuns` | wie oben | |
| `/singforschung` | `/überuns` | wie oben | |
| `/veranstaltungen` | `/termine` | Liste entfällt (`SEITE-veranstaltung.md`, Entscheidung 2; App-Seite – Test offen, dort Abschnitt 7, Punkt 6) | |
| `/product-page/kopie-von-guitar-factory-23-07-23-ein-stück-himmel-teil-1-pdf` | neue Produktadresse nach dem Umbenennen | `SEITE-shop.md`, Fund 9 | |
| `/product-page/kopie-von-guitar-factory-03-06-sei-beschütz-sei-behütet-pdf` | wie oben | wie oben | |
| `/product-page/kopie-von-guitar-factory-26-09-01-mutsong-pdf` | wie oben | wie oben | |
| `/product-page/kopie-von-guitar-factory-25-03-i-choose-to-live-pdf` | wie oben (Inhalt ist „Ukulele-Factory 25-04 – blues“) | wie oben | |
| `/product-page/kopie-von-guitar-factory-23-09-23-i-like-the-flowers-pdf` | wie oben | wie oben | |
| `/product-page/kopie-von-come-together-songs-das-liederbuch-band-ii` | wie oben | wie oben | |

**Gruppe D – später:** alle weiteren Adressen, die die Google Search Console als „nicht gefunden“ meldet (Abschnitt 7, Punkt 2).

**Wichtig beim Anlegen:**
- **Reihenfolge:** Weiterleitung anlegen, dann die alte Seite löschen (so steht es in den Seiten-Dokus). Lehnt Wix die Weiterleitung ab,
  weil die Adresse noch zu einer Seite gehört: Seite löschen und die Weiterleitung **sofort** danach anlegen – die Lücke dauert Minuten.
- **Umlaute** (`/über-uns`, `/team-geschäftsführung`, `/kranken-und-gesundheitshäuser`, Produktadressen): nach dem Anlegen im privaten
  Browserfenster testen. Leitet die Adresse nicht weiter, eine zweite Weiterleitung mit der kodierten Schreibweise anlegen
  (z. B. `/%C3%BCber-uns` für `/über-uns`).
- **Keine Ketten:** Ziel ist immer die endgültige Seite. Wird `/haeufige-fragen` veröffentlicht, die vorläufige Weiterleitung auf
  `/kontakt` **ändern**, nicht eine zweite dahinterhängen.
- Wix leitet nur auf Seiten weiter, nicht auf Sprungmarken (`SEITE-ueber-uns.md`, Abschnitt 6, Schritt 2).

---

## 4. Seitentitel für Google

**Zuerst die eine Einstellung, die 24 Seiten auf einmal repariert** (Fund 6; **Einsparmöglichkeit**: statt 24 Seiten einzeln):
Den Website-Namen „Sikra Deutschland“ durch „Singende Krankenhäuser e.V.“ ersetzen. In Wix steht er in den *SEO-Einstellungen*
bzw. unter *Einstellungen → Allgemeine Infos → Website-Name*; die Titel-Vorlage „{Seitenname} | {Website-Name}“ übernimmt ihn dann
überall – auch für alle Veranstaltungs- und Shop-Seiten und die Jahrestagung (dort ändert sich nur der Name im Titel, nicht die Seite).
Wer entscheidet: Sonja (`SEITE-veranstaltung.md`, Abschnitt 7, Punkt 8).

**Danach die Seiten mit eigenem Titel** (*Seite → SEO-Grundlagen → Titel-Tag*). Beschreibung = der Satz, der bei Google unter dem Titel
steht (höchstens ca. 155 Zeichen).

| Seite | Titel heute | Titel neu | Beschreibung (Vorschlag) |
|---|---|---|---|
| `/` | Singende Krankenhäuser e.V. \| Singen und Gesundheit | *bleibt* (Startseite: Vereinsname vorn ist richtig) | – (bleibt) |
| `/weiterbildung` | WEITERBILDUNG \| … | Weiterbildung zur Singleiter:in \| Singende Krankenhäuser e.V. | Werde Singleiter:in für Krankenhaus, Pflege und Senioren: Module, Zertifikat, Termine und kostenloser Schnupperkurs. |
| `/sing-mit` | SING MIT \| … | Sing mit \| Singende Krankenhäuser e.V. | Was Singleiter:innen tun, wie du eine wirst und wie du dein Zertifikat beantragst. |
| `/singende-landkarte` | **keiner** (Fund 7) | Singende Landkarte \| Singende Krankenhäuser e.V. | Singleiter:innen, Singkreise und Singende Einrichtungen in Deutschland, Österreich und der Schweiz – finde ein Angebot in deiner Nähe. |
| `/unsere-einrichtungen` | UNSERE EINRICHTUNGEN \| … | Für Einrichtungen \| Singende Krankenhäuser e.V. | Singen im Krankenhaus, in der Pflege und im Hospiz: Voraussetzungen, Singleitung und Zertifizierung für deine Einrichtung. |
| `/termine` | TERMINE \| … | Termine \| Singende Krankenhäuser e.V. | Alle Module, Schnupperkurse und Treffen auf einen Blick – mit Filter und Vorschau aufs nächste Jahr. |
| `/überuns` | ÜBER UNS \| … | Über uns \| Singende Krankenhäuser e.V. | Wer wir sind, was wir wollen und wer das Netzwerk trägt – seit 2009. |
| `/mitglied-sein` | MITGLIED SEIN \| … | Mitglied werden \| Singende Krankenhäuser e.V. | Was dir die Mitgliedschaft bringt, was sie kostet und wie du beitrittst. |
| `/kontakt` | KONTAKT \| … | Kontakt \| Singende Krankenhäuser e.V. | Wer hilft bei was? Ansprechpersonen, Telefonzeiten, Kontaktformular und Presse. |
| `/dozenten` | Dozenten \| Sikra Deutschland | Dozent:innen der Weiterbildung \| Singende Krankenhäuser e.V. | Bei wem du lernst: Werdegang und Schwerpunkte unserer Dozent:innen. |
| `/impressum`, `/datenschutz`, `/agb`, `/widerrufsrecht` | Großbuchstaben | siehe `SEITE-rechtliches.md`, Abschnitt 6 | – |
| `/haeufige-fragen`, `/downloads` | (neu) | siehe `SEITE-faq.md`, Entscheidung 3, bzw. „Downloads & Formulare \| Singende Krankenhäuser e.V.“ | – |
| `/anmeldung`, `/anmeldung-erfolgreich` | umgekehrtes Muster | Abschnitt 7, Punkt 5 | – |
| Jahrestagung (9 Seiten) | „… Jahrestagung 2027 \| Sikra Deutschland“ | nur Website-Name ändert sich (siehe oben) | – |

Die Beschreibungen enthalten bewusst keine Preise oder Termine – sie würden bei Google veralten. Die Seitenkurznamen sind der
Menü- bzw. Fußzeilenname aus den Seiten-Dokus; Abweichungen dort gehen vor.

---

## 5. Fotos

Keine – dieses Dokument betrifft nur Einstellungen.

---

## 6. Umsetzung in Wix – Schritt für Schritt

Geschätzter Aufwand für Schritte 1–5: **1 bis 2 Stunden**. Alles geht **vor** der Neugestaltung und unabhängig von ihr.

1. **Vorlagenseiten** (ca. 10 Minuten): *Menüs & Seiten* → `Inquiry Services Page` und `ONLINE BUCHEN` → *Löschen*;
   danach Gruppe B der Weiterleitungsliste anlegen. `LP_Singing_Family` → *SEO → Seite nicht in Suchergebnissen anzeigen* und aus dem
   Menü nehmen, nach Rückfrage löschen (Abschnitt 7, Punkt 1).
2. **Weiterleitungen Gruppe A** (ca. 10 Minuten) nach Abschnitt 3; jede im privaten Browserfenster testen.
3. **Website-Name** (ca. 5 Minuten, nach Sonjas Zustimmung) und danach die Titel und Beschreibungen aus Abschnitt 4 (ca. 30 Minuten).
4. **Dankeseite** `/anmeldung-erfolgreich`: *SEO → Seite nicht in Suchergebnissen anzeigen* (Fund 9). Titel nicht ändern (Abschnitt 7, Punkt 5).
5. **Apps prüfen** (ca. 30 Minuten), je App aus Fund 5 unter *Dashboard → Apps verwalten*:
   a) Ist die App auf einer Seite eingebaut? (*Editor → Ebenen* bzw. die App im Dashboard öffnen und nachsehen, wo sie verwendet wird.)
   b) Enthält sie Daten? (Buchungen, Spenden, Chat-Verläufe, Preispläne.) Falls ja: exportieren, bevor sie entfernt wird.
   c) Läuft ein Abo? (*Einstellungen → Abos* bzw. *Premium-Abos*.) Falls ja und die App ist ungenutzt: kündigen.
   d) Alles „nein“ → *App entfernen*. In die Status-Tabelle unten eintragen.
   **Nicht entfernen**, ohne vorher zu prüfen: Countdown Timer (evtl. Jahrestagung), Wix Music (evtl. Hörbeispiele auf der Startseite),
   Members Area (Wix Stores und Events brauchen ihn evtl. für Kundenkonten), Old Wix Forms and Payments (alte Formulare könnten noch
   eingebaut sein).
6. **Sitemap prüfen:** `www.singende-krankenhaeuser.de/pages-sitemap.xml` im Browser öffnen – die gelöschten Seiten dürfen nicht mehr
   drinstehen (Wix aktualisiert das automatisch, kann aber einen Tag dauern).
7. **Datenschutz:** Liste der übrig gebliebenen Apps an die Dienste-Liste in `SEITE-rechtliches.md`, Abschnitt 4, geben.

**Status der Apps** (beim Prüfen ausfüllen):

| App | Vermutung | Befund (eingebaut? Daten? Abo?) | entfernt am |
|---|---|---|---|
| Wix Bookings | nur für `/book-online` | | |
| Wix Services | nur für `/inquiry-services-page` | | |
| Wix Pricing Plans | keine sichtbare Verwendung | | |
| Get Funding | keine sichtbare Verwendung (Spenden laufen per Überweisung, `SEITE-ueber-uns.md`) | | |
| Wix Chat | keine sichtbare Verwendung; würde Besucherdaten speichern | | |
| ShoutOut (Legacy) | alter Newsletter, ersetzt durch CleverReach | | |
| Countdown Timer | evtl. Jahrestagung – prüfen | | |
| Wix Music | evtl. Hörbeispiele – prüfen | | |
| Old Wix Forms and Payments | evtl. alte Formulare – prüfen | | |

### Pflege

| Wann | Was | Wer |
|---|---|---|
| eine Seite wird gelöscht oder bekommt eine neue Adresse | Weiterleitung anlegen **und** in Abschnitt 3 eintragen (mit Grund und Verweis) | wer die Seite ändert |
| eine neue Seite wird angelegt | Titel nach Entscheidung 3 und Beschreibung setzen, in Abschnitt 4 eintragen | Tom |
| eine neue App wird installiert | in Status-Tabelle und Dienste-Liste (`SEITE-rechtliches.md`, Abschnitt 4) eintragen | wer die App installiert |
| halbjährlich | Search Console: neue „nicht gefunden“-Adressen weiterleiten; Sitemap auf Vorlagenseiten prüfen | Tom |

---

## 7. Offene Punkte

1. **`/lp-singing-family`:** Bei der Webdesignerin („Die Gründerin“) kurz nachfragen, ob das ein Entwurf ist, der noch gebraucht wird.
   Wenn keine Antwort in zwei Wochen: löschen. → Tom.
2. **Google Search Console** einrichten bzw. prüfen (kostenlos): zeigt, welche alten Adressen noch aufgerufen werden (Gruppe D) und ob
   die gelöschten Seiten aus dem Index verschwinden. In Wix: *Marketing & SEO → SEO → Mit Google verbinden*. → Tom, ggf. Andy.
3. **Mitgliederbereich** (Fund 10): Nutzt jemand den Login (z. B. Shop-Kundenkonten)? Wenn nicht, kann er bei der App-Prüfung mit
   weg – vorher Schritt 5 a–c. → Tom.
4. **Website-Name „Sikra Deutschland“** ändern – Entscheidung Sonja (`SEITE-veranstaltung.md`, Abschnitt 7, Punkt 8).
5. **Nachtrag für `SEITE-anmeldung.md`** (dort gesperrt, deshalb hier gesammelt): (a) Dankeseite `/anmeldung-erfolgreich` auf „nicht
   indexieren“ (Fund 9); (b) Titel-Muster an Entscheidung 3 angleichen: „Anmeldung zur Weiterbildung | Singende Krankenhäuser e.V.“ und
   „Anmeldung erfolgreich | Singende Krankenhäuser e.V.“. Beim nächsten Auftrag zu `SEITE-anmeldung.md` dort übernehmen. → Tom.

---

## 8. Checkliste

- [ ] `/inquiry-services-page` und `/book-online` gelöscht, Weiterleitungen Gruppe B angelegt?
- [ ] `/lp-singing-family` nicht indexiert, nach Rückfrage gelöscht?
- [ ] Weiterleitungen Gruppe A angelegt und im privaten Browserfenster getestet (auch Umlaut-Adressen)?
- [ ] Website-Name „Singende Krankenhäuser e.V.“ – kein Google-Titel endet mehr auf „Sikra Deutschland“?
- [ ] `/singende-landkarte` hat Titel und Beschreibung?
- [ ] Alle Titel im Muster „Seitenname | Singende Krankenhäuser e.V.“, keine Großbuchstaben?
- [ ] `/anmeldung-erfolgreich` nicht indexiert?
- [ ] App-Status-Tabelle ausgefüllt, ungenutzte Apps entfernt, ungenutzte Abos gekündigt?
- [ ] Übrig gebliebene Apps an die Dienste-Liste (`SEITE-rechtliches.md`, Abschnitt 4) gegeben?
- [ ] Sitemap enthält keine Vorlagenseiten mehr?
- [ ] Gruppe C jeweils beim Umbau der Zielseite erledigt und hier abgehakt?
