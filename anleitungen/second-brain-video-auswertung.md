# Second Brain mit Claude Code: Auswertung des Videos und Anleitung für SKH

Stand: 07.10.2026 · Verantwortlich: Tom (IT, Webseite, Marketing, Vorstand) · Ablage: `anleitungen/` im Repo `mein-weg`

Dieses Dokument wertet ein YouTube-Video aus und übersetzt es in Schritte, die zu Singende Krankenhäuser e.V. (SKH) passen.
Eine Person ohne Vorkenntnisse soll damit verstehen, **was aus dem Video übernommen wurde, was bewusst nicht, warum, und wie
man die übernommenen Teile umsetzt**.

---

## 1. Das Video in Kürze

- **Titel:** „Der echte Weg zum Second Brain: Ohne Programmieren. Vergiss Obsidian.“
- **Kanal:** The Node AI (deutsch), veröffentlicht 19.07.2026, Länge 45:17
- **Link:** https://www.youtube.com/watch?v=mHSOsy_usAg

**Ausgangsproblem im Video:** Der Autor hat rund 2.000 Notizen gesammelt. Er findet Dinge nicht wieder, wenn er die genauen
Suchbegriffe vergessen hat. Außerdem widersprechen sich Notizen, ohne dass es jemand merkt (Beispiel: Zielwert im
Strategiepapier und tatsächliche Zahlen in einer anderen Datei).

**Seine Lösung besteht aus fünf Bausteinen:**

| Nr. | Baustein | Was er tut | KI nötig? |
|---|---|---|---|
| 1 | Ordnerstruktur (bei ihm in Obsidian) | Alle Notizen als einfache Textdateien (Markdown) in klaren Themenordnern | nein |
| 2 | Indexer | Kleines Programm, das einen Katalog (`INDEX.md`) und eine Übersichtskarte aller Dateien schreibt | nein |
| 3 | qmd | Lokale Suchmaschine: Stichwortsuche plus Bedeutungssuche („Untertitel“ findet auch „Captions“) | kleine lokale Modelle |
| 4 | Claude mit Regelwerk | Datei `CLAUDE.md` mit „Brain-First“-Regeln: erst Katalog, dann Wiki, dann Suche, dann genau eine Datei | ja |
| 5 | Web-App | Grafische Ansicht des Wissens („Galaxie“) | nein |

Dazu kommt ein **Wiki-Ordner, den nur Claude pflegt**. Neue Quellen werden eingearbeitet; Widersprüche zu bestehendem Wissen
werden markiert, aber nicht überschrieben. Entscheiden muss der Mensch.

**Messergebnis des Autors** (eigener Praxisvergleich, keine Studie): mit dem System rund 50 % weniger Token und 40 % weniger
Zeit bei gleicher Trefferquote. Ohne System kostete eine einzige Frage über 500.000 Token, weil Claude lange suchen musste.

**Seine sieben Lektionen:** (1) Referenzen schlagen Beschreibungen. (2) Kleine Schritte mit Abnahme. (3) Erst entscheiden,
dann bauen. (4) Normaler Code, wo es geht, KI nur wo Verstehen nötig ist. (5) Markdown-Dateien sind die einzige Wahrheit.
(6) Jede Behauptung braucht einen Prüfpunkt. (7) Der Mensch entscheidet, die KI liefert.

---

## 2. Was davon für SKH nützlich ist und was nicht

Ausgangslage bei SKH: Das Vereinswissen liegt überwiegend als Word-, Excel- und PDF-Dateien in **SharePoint/OneDrive
(Microsoft 365 Non-Profit)**, nicht als Markdown in Obsidian. Projektdokumentation zur Webseite liegt bereits als Markdown im
Repo `mein-weg` (z. B. `skh-design/ABNAHME.md`). Ziel bei SKH ist außerdem, dass eine Nachfolgeperson alles ohne Rückfragen
versteht.

| Idee aus dem Video | Nutzen für SKH | Empfehlung | Kosten |
|---|---|---|---|
| **Arbeitsweise:** Fragen → Spezifikation → Plan → kleine Schritte mit Abnahme | Hoch. Passt zu Webseite, Kursplanung, IT-Umstellungen. Wird beim Webseiten-Projekt schon teilweise so gemacht (Abnahme-Dokument). | **Übernehmen (Stufe A)** | 0 € |
| **Referenzen in drei Rollen** (Baustein, Muster, Messlatte) | Hoch. Spart Zeit bei Wix, Flyern, Social Media. | **Übernehmen (Stufe A)** | 0 € |
| **Erst Bild vom Ziel, dann bauen lassen** (Mockup statt Textbeschreibung) | Hoch für Webseite und Marketing. | **Übernehmen (Stufe A)**, Bilder mit Copilot (in M365 enthalten) statt ChatGPT-Abo | 0 € |
| **Katalog-Datei** (`INDEX.md` bzw. „Wegweiser“) | Hoch. Ist gleichzeitig eine Übergabe-Hilfe für Nachfolger. | **Übernehmen (Stufe B)** | 0 € |
| **Brain-First-Regeln** in `CLAUDE.md` | Hoch. Spart Token und damit Nutzungskontingent. | **Übernehmen (Stufe B)** | 0 € |
| **Widerspruchsprüfung** (Wiki-Idee nach Karpathy) | Mittel. Nützlich für veraltete Stände in Vereinsdokumenten (Preise, Termine, Zuständigkeiten). | **Später, vereinfacht (Stufe C)** | 0 € extra |
| **qmd** (lokale Bedeutungssuche) | Gering. Sucht nur in Markdown-Dateien; SKH-Wissen liegt als Word/PDF in SharePoint. Braucht Node.js 22 und ca. 2–3 GB Modelle auf dem Rechner. | **Nicht jetzt.** Erst prüfen, wenn das Repo deutlich über ~100 Markdown-Dateien hat. | 0 €, aber Einrichtungsaufwand |
| **Obsidian** | Gering. Wäre ein zusätzliches Werkzeug neben SharePoint; Kolleginnen arbeiten nicht damit. | **Nicht übernehmen** | – |
| **Eigene Web-App mit Wissens-Graph** | Gering. Der Autor sagt selbst: „die Kür“. | **Nicht übernehmen** | – |

**Kurz:** Die Arbeitsweise und die Katalog-Idee bringen den meisten Nutzen und kosten nichts. Technik zum Installieren (qmd,
Obsidian, App) lohnt sich für SKH derzeit nicht.

---

## 3. Anleitung

### Stufe A: Arbeitsweise übernehmen (ab sofort, kein Einrichtungsaufwand)

**A1. Vor jedem Projekt drei bis fünf Fähigkeiten aufschreiben (10 Minuten)**
1. Schreibe die Leitfrage auf, z. B. „Wie finden Interessierte in 30 Sekunden den passenden Kurs auf der Webseite?“
2. Schreibe darunter 3–5 Punkte, was das Ergebnis können muss. Jeder Punkt muss prüfbar sein.
   Beispiel: „Kurs-Seite zeigt Termin, Ort, Preis und Anmeldelink ohne Scrollen auf dem Handy.“
3. Erst danach über Werkzeuge nachdenken (Wix-App, Plugin usw.).

**A2. Claude erst fragen lassen, dann bauen lassen**
Prompt zum Kopieren für den Projektstart:

```
Ich möchte [Ziel]. Bevor du etwas erstellst: Stelle mir nacheinander Fragen (immer nur eine),
bis Zweck, Ausgangslage, Muss-Kriterien und Nicht-Ziele klar sind. Schlage danach 2–3 Ansätze
mit Vor- und Nachteilen vor. Ich entscheide. Dann schreibe eine kurze Spezifikation, die ich
abschnittsweise freigebe. Danach einen Plan mit kleinen Aufgaben, jede mit klarem Fertig-Kriterium.
Erst nach meiner Freigabe setzt du Aufgabe für Aufgabe um.
```

Optional in Claude Code (auf dem eigenen Rechner): Das Skill-Paket **Superpowers** erzwingt genau diesen Ablauf automatisch.
Installation in Claude Code: `/plugin install superpowers@claude-plugins-official`
Quelle: https://github.com/obra/superpowers

**A3. Referenzen bewusst einsetzen**
Bei jedem Vorhaben drei Fragen beantworten und in der Spezifikation festhalten:
- **Baustein:** Was gibt es fertig und wird direkt genutzt? (z. B. Wix-App statt Eigenbau)
- **Muster:** Welche Idee übernehme ich und setze sie selbst um? (z. B. Aufbau einer Kursseite eines anderen Chor-Vereins)
- **Messlatte:** Woran messe ich, ob es gut genug ist? (z. B. ein Mockup-Bild oder eine Vorbild-Webseite)

**A4. Bei Optik: erst Zielbild, dann umsetzen**
1. Zielbild erzeugen lassen, z. B. mit **Microsoft Copilot** (im M365-Non-Profit-Konto enthalten) oder Canva.
   Ein kostenpflichtiges ChatGPT-Abo ist dafür nicht nötig.
2. Das Bild an Claude geben: „Baue das so nach. Ein Schritt, dann zeige ich dir das Ergebnis.“
3. Nach jedem Schritt im Browser prüfen und erst dann den nächsten freigeben.
Hintergrund: Der Autor hat Stunden verloren, weil er Optik nur mit Worten beschrieben hat („mehr Tiefe, weniger Glow“).
Mit Bild ging es in Minuten.

### Stufe B: Katalog und Brain-First-Regeln (ca. 1 Stunde, einmalig)

**B1. Für das Repo `mein-weg`**
1. Im Repo-Hauptordner eine Datei `INDEX.md` anlegen: eine Zeile pro wichtiger Datei oder Ordner mit „Was ist das?“ und
   „Wann brauche ich es?“. Claude kann den Entwurf schreiben: „Geh durch alle Ordner und schreib eine INDEX.md, eine Zeile
   pro Bereich. Nicht jede Datei einzeln.“
2. Im Repo-Hauptordner eine Datei `CLAUDE.md` mit den Regeln aus Abschnitt 5 anlegen. Claude Code liest diese Datei bei
   jedem Start automatisch.
3. Regel: Wer eine neue Doku anlegt, ergänzt eine Zeile in `INDEX.md`.

**B2. Für SharePoint (Vereinswissen)**
Der gleiche Gedanke funktioniert ohne Zusatztechnik:
1. In der SharePoint-Hauptbibliothek ein Dokument **„00_Wegweiser“** anlegen (Word oder SharePoint-Seite).
2. Eine Zeile pro Bereich: Thema, Ablageort (Link), zuständige Person, Stand.
   Beispiel: „Weiterbildung/Kurse · Link · Sandra · Stand 10/2026“.
3. Wenn Claude über den Microsoft-365-Connector auf SharePoint zugreift, im Chat sagen: „Lies zuerst 00_Wegweiser, öffne
   dann nur die passende Datei.“ Das spart Suche und damit Kontingent.
4. Nebeneffekt: Der Wegweiser ist die Einstiegsseite für jede neue Person im Verein, auch ganz ohne KI.

### Stufe C: Widersprüche finden (später, wenn A und B laufen)

Vereinfachte Fassung der Wiki-Idee, ohne eigenes Wiki:
1. Einmal pro Quartal Claude bitten: „Vergleiche die Dateien [Liste aus dem Wegweiser] und liste Stellen auf, an denen sich
   Angaben widersprechen oder veraltet wirken (Preise, Termine, Zuständigkeiten, Kontaktdaten). Nichts ändern, nur auflisten,
   mit Fundstelle.“
2. Die Liste ist ein Arbeitsauftrag. **Die Quelle korrigieren, nicht nur den Hinweis abhaken.** Sonst taucht der Widerspruch
   beim nächsten Durchlauf wieder auf.
3. Entscheidung und Datum im Dokument selbst oder im Wegweiser vermerken.
4. Zuständig für die Entscheidung ist die jeweils verantwortliche Person (z. B. Sandra für Kursinhalte, Sonja für
   Geschäftsführungsthemen), nicht die KI.

---

## 4. Getroffene Entscheidungen und Begründung

1. **Kein Obsidian, kein qmd, keine eigene App.** SKH arbeitet mit SharePoint und Word. Ein zweites System würde doppelte
   Ablage erzeugen und Kolleginnen ausschließen. qmd durchsucht nur Markdown-Dateien. Neu bewerten, wenn das Repo stark wächst.
2. **Katalog statt Technik.** Der größte Teil des Nutzens im Video kommt nach Aussage des Autors aus vier einfachen Schritten
   (Ordnen, Katalog, Suche, Regeln). Ordnen, Katalog und Regeln sind bei SKH ohne Installation möglich.
3. **Copilot statt ChatGPT für Mockups.** Ist im M365-Non-Profit-Konto enthalten, also keine Zusatzkosten.
4. **Widerspruchsprüfung nur auflisten lassen.** Die KI ändert nichts selbst. Das entspricht Lektion 7 des Videos und
   verhindert, dass falsche Angaben unbemerkt in Vereinsdokumente gelangen.
5. **Datenschutz:** Wenn Claude Inhalte aus SharePoint liest, werden diese Ausschnitte an Anthropic übertragen. Dokumente mit
   personenbezogenen Daten (Mitglieder, Teilnehmende, Gesundheitsbezug) nicht in die Widerspruchsprüfung aufnehmen, solange
   keine Auftragsverarbeitungsvereinbarung (AVV) mit Anthropic geklärt ist. Ansprechpartner für die technische Seite: Andy.

---

## 5. Kopiervorlage: Brain-First-Regeln für `CLAUDE.md`

Angepasst aus der Videobeschreibung. Für SharePoint „INDEX.md“ durch „00_Wegweiser“ ersetzen.

```
## Brain-First: Reihenfolge bei jeder Wissensfrage
1. Lies zuerst INDEX.md (den Katalog). Steht die Quelle dort, öffne genau diese.
2. Erst wenn der Katalog nicht reicht: gezielt suchen (Dateinamen, Stichworte), Kandidaten
   prüfen, ohne alle Dateien zu öffnen.
3. Öffne genau EINE Datei, die beste, und lies nur den relevanten Abschnitt.
4. Dann antworten und die Quelle nennen.
5. Kein blindes Durchsuchen ganzer Ordner.
6. Widersprüche zwischen Dateien nicht selbst auflösen, sondern mit Fundstellen melden.
```

---

## 6. Quellen

- Video: https://www.youtube.com/watch?v=mHSOsy_usAg (Kapitel 6:20 Prozess, 11:37 Referenzen, 22:08 Brain-First-Leiter,
  25:04 Wiki-Test, 34:26 Optik, 43:05 Einstieg in vier Schritten)
- Superpowers (Skill-Paket für Claude Code): https://github.com/obra/superpowers
- qmd (lokale Suche, Voraussetzung Node.js ≥ 22): https://github.com/tobi/qmd
- LLM-Wiki-Idee von Andrej Karpathy: https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f
