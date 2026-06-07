# SDD-Workshop — Ablauf & Konzept (Ablauf2.md)

> Dieses Dokument hält den vollständigen Planungsstand eines Ganztags-Workshops
> zu **Spec-Driven Development (SDD)** fest. Es ist bewusst so geschrieben, dass
> es auch jemand versteht, der bei der Planungssession **nicht** dabei war:
> Es erklärt nicht nur *was* gemacht wird, sondern *warum* — inklusive der
> Entscheidungen, Alternativen und der didaktischen Logik dahinter.
>
> Stand: Planungssession vom 2026-06-05. Status: roter Faden steht,
> Detail-Moderationsskript je Modul noch offen (siehe „Offene Punkte" am Ende).

---

## 0. Ausgangslage & Auftrag

**Ziel des Workshops:** Teilnehmern SDD *näherbringen* — nicht durch Zuhören,
sondern durch **Erleben**. Es soll explizit **kein reiner Vortrag** werden.

**Rahmenbedingungen (vom Auftraggeber festgelegt):**
- **20 Teilnehmer.**
- Teilnehmer haben **bereits erste Erfahrung mit AI-Coding** (Cursor / Claude
  Code o.ä.). Keine kompletten Anfänger, aber auch keine SDD-Experten.
- **Ganztag (~6,5h netto + Pausen).**
- **Alle haben ein lauffähiges Agenten-Setup** (Claude Code / Cursor) am eigenen
  Rechner — echtes Bauen ist an jedem Platz möglich.

**Vorhandenes Material im Repo** (eigene Vorträge des Auftraggebers, die
verwertet werden sollen):
- `Spec Driven Development - English PD (2).pdf` — SDD-Grundlagen,
  Framework-Vergleich (Spec-Kit / OpenSpec / BMAD), „SDD – the hard truth",
  Brücke zu Contract / Gherkin / Cucumber.
- `EXACT Coding (1).pdf` + `EXACT Coding (2).pdf` — „Example-guided AI-Collaborative
  Test-driven Coding" (EXACT). Vibe Coding, Example Mapping, AI-TDD, plus ein
  **empirisches Experiment** (659 Runs, Claude Code headless) das zeigt, welche
  Workflow/Prompt/Modell-Kombination die beste Code-Qualität liefert.
- `Context Engineering - English (1).pdf` — Context Size, „Lost in the middle",
  Smart Zone, Context-Management-Strategien (Write/Select/Compress/Delegate),
  Context-File-Kategorien, CLAUDE.md, Rules, Subagents, Agent Teams.
- `spec-driven-development-erkenntnisse.md` — sehr ausführliche konzeptionelle
  Herleitung der zentralen These (s.u.). Das inhaltliche Rückgrat.
- `examples-for-bdd/bdd/` — **lauffähiges** Cucumber-Beispiel
  (`features/session.feature`, `steps/session.steps.js`, `cucumber.json` mit
  `strict: true`). Demonstriert beide Arten von Drift zum Anfassen.

---

## 1. Die zentrale These (der rote Faden)

Der gesamte Workshop hängt an **einem** Satz, der das Material vom generischen
„nutzt halt Spec-Kit"-Vortrag abhebt:

> **„Vibe → Spec → Vertrag."**
> Eine Spec ist erst dann *lebendig*, wenn sie **nicht unbemerkt falsch werden
> kann**. „Lebendig" heißt nicht „wird gepflegt", sondern „kann nicht
> unbemerkt driften". Das schafft nur **Erzwingung** — und Erzwingung heißt:
> die Spec ist **an einen ausführbaren Test gebunden**. Eine so erzwungene
> Spec hat einen Namen: ein **Contract**.

Die Herleitung (aus `spec-driven-development-erkenntnisse.md`, stark verdichtet):

1. **Befund:** Fast alle SDD-Frameworks predigen „Spec als Source of Truth",
   aber kaum eines erzwingt es. Specs *driften* — nichts prüft je wieder, ob
   der Code der Spec noch entspricht.
2. **Warum:** Eine Prosa-Spec ist *passiv*. Ein Mensch (oder LLM) kann sie lesen,
   aber keine Maschine kann deterministisch prüfen, ob die Realität noch passt.
3. **Einsicht:** „Lebendig" ≠ „fleißig gepflegt". Lebendig = „Driften ist
   unmöglich, weil eine Maschine es verhindert."
4. **Sprung:** Bindet man ein Given/When/Then-Szenario an einen echten,
   ausführbaren Test (BDD/Cucumber, `strict`), wird aus „⚠ wahrscheinlich nicht
   abgedeckt" ein hartes **rot/grün in CI**. Genau diesen Schritt geht keines
   der drei großen Frameworks. Das ist die „offene Frontlinie" von SDD.

**Zwei-Schichten-Merksatz** (wichtig fürs Framing, damit niemand „alles
vertraglich" missversteht):
> **Contracts an jede Naht, Prosa in jeden Raum.** Rigor an den formalen Grenzen
> (API, Daten, Typen, Verhalten-an-der-Kante), Urteilsvermögen im Inneren.
> Nicht maximieren — *platzieren*.

Und die ehrliche Grenze (nie überверkaufen):
> Grün beweist **Konformität** (Code = Szenario), nicht **Korrektheit**
> (Szenario ist sinnvoll). Korrektheit holt man *vorher* — durch **Example
> Mapping** mit dem Domänenexperten.

Daraus ergibt sich die Lernkette des ganzen Tages:

```
Example Mapping   → die RICHTIGEN Regeln + Beispiele      (Korrektheit)
   ↓ grüne Karten
Gherkin-Specs      → lesbare, nach Domäne sortierte Spec   (OpenSpec-Form)
   ↓ gebunden (nicht generiert!), strict mode
Rot / Grün in CI   → erzwingt Konformität, erkennt Drift   (die Erzwingung)
   ↓ mit dem Agenten im Loop
= erzwungene, lebende Verhaltens-Spec, die keines der Tools von Haus aus liefert
```

---

## 2. Das durchgehende Projekt: ein CLI-Tool (Meta-Dogfooding)

**Entscheidung des Auftraggebers:** Es wird **kein beliebiges Feature** gebaut,
sondern über den ganzen Tag **ein echtes Werkzeug**:

> Ein **CLI-Tool**, mit dem man **AI-Skills, Subagents, Rules und Context Files**
> (CLAUDE.md, AGENTS.md etc.) **zentral verwalten, vergleichen und bearbeiten**
> kann. Installierbar, sodass man aus **einer zentralen Stelle** diese Artefakte
> auf Wunsch in **bestimmte Repos importieren** kann.

Es ist **nicht** das Ziel, das Tool an einem Tag fertigzustellen. Das Tool ist
das *Vehikel*, an dem die SDD-Disziplinen geübt werden.

### Warum diese Idee gut ist (didaktische Begründung)

- **Meta-Dogfooding.** Die Teilnehmer bauen ein Tool, das genau die Artefakte
  verwaltet, über die sie den ganzen Tag lernen (Skills, Subagents, Rules,
  Context Files). Das **Lernobjekt ist das Werkzeug**. Jede Rule / CLAUDE.md /
  jeder Subagent, den sie lernen zu schreiben, ist potenziell Input für ihr
  eigenes Tool. Dieser Rückbezug beantwortet die „Wozu das alles?"-Frage
  permanent von selbst.
- **Echt & mitnehmbar.** Niemand wirft am Ende ein „Meeting-buchen"-Demo weg.
  Ein Verwaltungs-CLI für die eigene `.claude/`-Umgebung wollen die Leute
  *behalten*. Motivation bleibt hoch.
- **Existiert in Ansätzen real** (z.B. git-basierte dotfiles für `.claude/`,
  Tools wie `ruler`) — also keine künstliche Aufgabe.

### Die EINE Gefahr — und ihre Lösung

Die Lehr-Höhepunkte brauchen **kleine, scharf umrissene Verhaltens-Slices**:
- **Example Mapping** glänzt nur mit echten Edge-Cases (Regeln + konkrete
  Beispiele). Reines „Datei kopieren"-CRUD ist arm an Regeln.
- **Der Cucumber-Drift-Moment** braucht *eine* deterministische Logik mit einer
  Grenze/Zahl. Reine Filesystem-I/O ist dafür ungeeignet.

**Lösung:** Das Tool ist das übergreifende Projekt — aber **jedes Disziplin-Modul
zoomt auf einen Slice**, der zur Technik passt. Dieses Tool hat glücklicherweise
reichlich regelreiche, grenzlastige Logik:

| Modul | Tool-Slice | Warum geeignet |
|---|---|---|
| 1 · Vibe | „importiere ein Skill in ein Repo", frei drauflos | bewusst naiv, bricht später sichtbar |
| 3 · Example Mapping | Import-**Verhalten** mit Edge-Cases | reich an Regeln: existiert Ziel schon? Version älter/neuer? Konflikt mit lokaler Rule? `--dry-run`? partieller Import? → viele grüne & rote Karten |
| 5 · Drift/Cucumber | *eine* reine Logik, z.B. **SemVer-Vergleich** („überschreiben ja/nein?") oder **`applyTo`-Glob-Match** („gilt diese Rule für diesen Pfad?") | deterministisch, grenzlastig (`<` vs `<=`, `*` vs `**`) → sauberes rot/grün |
| 6 · EXACT-Loop | denselben Import-Slice end-to-end mit Agent | Vibe-Version (Modul 1) vs. EXACT-Version → das Experiment am eigenen Leib |
| 7 · Context Engineering | CLAUDE.md + Rules **für das Tool selbst** schreiben | rekursiv: ihre Artefakte werden Testdaten ihres Tools |

---

## 3. Wichtige getroffene Entscheidungen (mit Begründung & Alternativen)

Diese Entscheidungen wurden in der Planungssession bewusst getroffen. Wer den
Plan später anpasst, sollte die Trade-offs kennen.

### 3.1 Bau-Topologie: **Jeder allein, eigenes Repo**
- **Gewählt:** Jeder Teilnehmer baut sein **eigenes** Tool in seinem **eigenen**
  Repo, startet vom **leeren** Repo.
- **Begründung:** Maximale individuelle Erfahrung; jeder durchläuft jeden Schritt
  selbst und nimmt am Ende sein eigenes Werkzeug mit.
- **Verworfene Alternativen:**
  - *5 Teams je eigenes Repo* (war die ursprüngliche Empfehlung): robuster,
    weniger Merge-Chaos, 5 vergleichbare Ergebnisse — aber weniger „mir gehört das".
  - *Ein gemeinsames Repo für alle 20*: realistischer (echte Kollaboration,
    Agent Teams), aber hohes Merge-/Koordinationsrisiko bei dieser Gruppe.
- **Erkannte Spannung & Gegenmaßnahme:** „Jeder allein" kollidiert mit Example
  Mapping, das von Natur aus eine **Gruppenübung** ist (*facilitate, don't
  invent* — einer fragt, andere liefern Domänenwissen). Allein degeneriert es
  zu „ich schreibe mir selbst Karten".
  → **Gegenmaßnahme:** Modul 3 läuft trotzdem in **5 Tischgruppen à 4** als reine
  *Methoden-Übung* an einem gemeinsamen Slice. Danach nimmt jeder die Karten in
  sein eigenes Repo mit. Bauen bleibt individuell, Discovery wird sozial geübt.

### 3.2 Startpunkt: **Leeres Repo**
- **Gewählt:** Kein Vorab-Skelett. Start von null.
- **Begründung:** Realistischer; „erlebtes Bauen" von Anfang an.
- **Verworfene Alternative:** *Vorbereitetes Skelett* (war Empfehlung): hätte
  Setup-Frust gespart und alle synchron gehalten.
- **Erkannte Spannung & Gegenmaßnahme:** Leeres Repo + der Cucumber-Drift-Moment
  brauchen ein lauffähiges BDD-Setup. Bei 20 Leuten frisst `npm init` /
  Cucumber-Config / `strict` / erste grüne Pipeline sonst die Lernzeit.
  → **Gegenmaßnahme:** Das BDD-Setup wird **vom Agenten gebootstrappt** (s. 3.4).

### 3.3 Tech-Stack: **Frei pro Person — außer dem BDD-Teil**
- **Gewählt:** Jeder baut sein Tool in der **Sprache seiner Wahl**. ABER der
  **Cucumber-Drift-Slice (Modul 5) läuft für alle einheitlich in Node/TS**.
- **Begründung:** Autonomie beim Tool; gleichzeitig genau **ein** gemeinsamer,
  vorbereitbarer, demofähiger Slice für den wichtigsten Aha-Moment.
- **Verworfene Alternativen:**
  - *Node/TS komplett festlegen* (war Empfehlung): eine Setup-Anleitung,
    `session.feature` läuft direkt weiter, gemeinsame Demos — aber weniger
    Autonomie.
  - *Wirklich völlig frei*: maximale Autonomie, aber keine einheitliche
    Anleitung, keine gemeinsamen Live-Demos.
- **Praktische Konsequenz (wichtig für die Vorbereitung):** Für Teilnehmer, die
  ihr Tool z.B. in Python/Go bauen, ist der Drift-Slice ein **separates kleines
  Node-Verzeichnis `drift-demo/` NEBEN** ihrem Tool. Der Slice demonstriert das
  *Prinzip* (rot/grün, strict), er muss nicht im Haupt-Tool leben. Das ist
  didaktisch sauber und so eingeplant.

### 3.4 BDD-Setup: **Agent bootstrappt es** (Weg A)
- **Gewählt:** Das Aufsetzen von Cucumber + `strict` ist **selbst eine
  SDD-Lernübung**: „Lass deinen Agenten Cucumber + strict einrichten."
- **Begründung:** Ehrlich & realistisch — „den Agenten ein Test-Setup bauen
  lassen" ist ein echter SDD-Skill. Kostet ~20–30 min, ist aber Teil des Lernens.
- **Verworfene Alternativen:**
  - *Leeres Repo + Snippet-Netz (B)*: fertige Config-Snippets als Fallback.
  - *Stack festlegen (C)*: eine zentrale Anleitung.
- **Sicherheitsnetz (empfohlen, nicht zwingend):** Das lauffähige
  `examples-for-bdd/bdd/` aus dem Repo als Referenz/Fallback bereithalten, falls
  jemand beim Bootstrapping hängt — damit der Aha-Moment nicht an Setup scheitert.

---

## 4. Dramaturgie (warum die Reihenfolge so ist)

Aufbau **schmerz-zuerst**: SDD wird erst wertvoll, wenn man den Schmerz seines
Fehlens am eigenen Leib gespürt hat.

1. **Hook — der Schmerz.** Vibe-Coding-gone-wrong, Selbstverortung.
2. **Versprechen + harte Wahrheit.** Was SDD ist; Framework-Vergleich; die
   ehrliche Wendung: Specs driften. Der Sprung Spec → Contract.
3. **Korrektheit holen:** Example Mapping (kollaborativ).
4. **Erzwingung holen:** Gherkin/Cucumber + strict — Drift zum Anfassen.
5. **Synthese:** EXACT / AI-TDD — der ganze Loop mit dem Agenten; das Experiment
   als Beleg.
6. **Context Engineering** als *Enabler* darunter — damit der Agent in diesem
   Loop überhaupt zuverlässig arbeitet.

**Die didaktische Klammer (wichtigster Hebel des Tages):**
Modul 1 (Vibe) und Modul 6 (EXACT) bauen **denselben Slice zweimal** — einmal
naiv vibe-gecodet, einmal mit der vollen EXACT-Disziplin. Der **selbst erlebte
Qualitätsunterschied** *ist* das 659-Runs-Experiment aus dem EXACT-Deck — nur am
eigenen Rechner statt auf einer Folie. Das macht den empirischen Befund fühlbar.

**Der emotionale Kern:** Modul 5, der Drift-Moment. Spec und Code stimmen überein
(grün) → Teilnehmer ändert eine Zahl/Grenze in der Spec → CI wird **rot**. Dieses
Rot ist der Aha: *die Spec kann nicht mehr unbemerkt falsch werden.*

---

## 5. Tagesfahrplan (~6,5h netto)

> Zeiten als Orientierung, bewusst mit Puffer. Puls aus **kurzem Input
> (10–15 min)** und **Hands-on (20–45 min)** statt langer Vortragsblöcke.

| Zeit | Modul | Format | Kern / Tool-Slice |
|---|---|---|---|
| **09:00** | **0 · Hook: Der Schmerz** | Input + Selbstverortung | Vibe-Coding-gone-wrong (Tweet aus EXACT-Deck), Spektrum Handmade↔Vibe. „Wo steht ihr?" per Handzeichen. Tool-Idee & Tagesziel vorstellen. |
| **09:20** | **1 · Vibe bauen lassen** | 🛠 Hands-on #1 | Jeder vibe-coded den Slice **„importiere ein Skill in ein Repo"** frei mit dem Agenten — bewusst **ohne** Spec/Tests. Repo anlegen, Sprache wählen. |
| **09:50** | **2 · Brechen & SDD-Versprechen** | Input + Debrief | Was lief schief / fühlte sich unkontrolliert an? → SDD: Spec→Plan→Implement. Framework-Vergleich (Spec-Kit/OpenSpec/BMAD). **„SDD – the hard truth":** Specs sind passiv, driften. |
| **10:30** | *Pause* | | |
| **10:45** | **3 · Korrektheit: Example Mapping** | 🛠 Hands-on #2 — **5 Tischgruppen à 4** | Slice **„Import-Verhalten"** auf Karten: Story (gelb) / Rules (blau) / Examples (grün) / Open Questions (rot). Regeln wie: Ziel existiert? Version älter/neuer (SemVer)? Konflikt mit lokaler Rule? `--dry-run`? partieller Import? Prinzip **facilitate, don't invent**. Danach: Karten mit ins eigene Repo. |
| **11:45** | **4 · Spec → Contract** | Input | Warum Prosa driftet (Prosa-Spec vs. Contract-Tabelle). Das Scharnier: ein Gherkin-Szenario ist zu ~90% schon ein Test. „generieren" (driftet) vs. „binden" (driftet nicht). „That thing has a name: a contract." |
| **12:15** | *Mittag* | | |
| **13:15** | **5 · Erzwingung: Gherkin + Cucumber** | 🛠 Hands-on #3 (einheitlich Node/TS, `drift-demo/`) | Agent bootstrappt Cucumber + `strict`. Grüne Karten → `.feature`. *Eine* deterministische Logik (SemVer-Compare oder `applyTo`-Glob) als Step-Definition. **Der Drift-Moment:** Szenario/Zahl ändern → CI wird **rot**. `strict: true` an/aus erleben (undefined step = rot vs. still grün). |
| **14:15** | **6 · Der EXACT-Loop** | 🛠 Hands-on #4 (Höhepunkt) | Voller Loop: Example Mapping → Gherkin → Test (gebunden) → Agent baut gegen-grün (Red/Green/Refactor). Dann **direkter Vergleich zu Hands-on #1**: gleicher Slice, andere Qualität → das EXACT-Experiment selbst erlebt. Kurzer Bezug zum 659-Runs-Befund (v6.1-hybrid, Example-Mapping als Korrektheits-Hebel). |
| **14:45** | *Pause* | | |
| **15:00** | **7 · Context Engineering** | Input + 🛠 Mini | Als *Enabler* des Loops: „Lost in the middle" / Smart Zone (warum kurzer, kuratierter Kontext besser ist), Context-File-Kategorien (Plans/AGENT.md/Docu/Rules/Workflows), CLAUDE.md (Levels & Commands), Rules (conditional via `paths:`/`applyTo`, progressive disclosure), Subagents vs. Agent Teams. **Übung:** jeder schreibt eine `CLAUDE.md` + eine (conditional) Rule **für das eigene Tool** → rekursives Dogfooding. |
| **16:00** | **8 · Synthese & Transfer** | Diskussion | Gesamtbild (die Lernkette aus §1). „Contracts an jede Naht, Prosa in jeden Raum." Ehrliche Grenzen (grün = Konformität ≠ Korrektheit; nur szenarioisiertes Verhalten geschützt; nicht alles ist gherkin-bar). „Was setze ich montags ein?" |
| **16:30** | **Ende** | | |

---

## 6. Mapping: welche Folie/Material gehört in welches Modul

Damit beim Folienbau nichts doppelt oder verloren geht.

- **Modul 0:** EXACT-Deck — „Vibe Coding", „Vibe Coding – Gone wrong" (Tweet),
  „Vibe Coding vs Handmade" (Spektrum).
- **Modul 2:** SDD-Deck — „Spec driven development – SDD", „Levels of spec-driven"
  (Fowler-Grafik: spec-first / spec-anchored / spec-as-source), Framework-
  Vergleichstabellen, „SDD – the hard truth" (beide Varianten), „That thing has
  a name: a contract".
- **Modul 3:** EXACT-Deck — „Example Mapping" (WHAT/WHY/HOW, Vier-Farben,
  Book-Meeting-Beispiel als Vorlage für den Tool-Slice).
- **Modul 4:** SDD-Deck — „Example – OpenSpec Requirements", Prosa-vs-Contract,
  generieren-vs-binden; `erkenntnisse.md` Kap. 8–12.
- **Modul 5:** SDD-Deck — „Example – Gherkin BDD Tests with cucumber"
  (Ordnerstruktur, feature, steps, strict, der rote Blitz);
  lauffähiges `examples-for-bdd/bdd/` als Referenz; `erkenntnisse.md` Kap. 12–15.
- **Modul 6:** EXACT-Deck — „AI TDD" (WHAT/WHY), „The experiment" (659 Runs),
  „The three axes", „What they measured", „The result" (v6.1-hybrid × Opus ×
  Example-Mapping); „What we get" (AITDD: Gherkin→Cucumber→Code).
- **Modul 7:** Context-Engineering-Deck komplett — Context Size, Needle/Haystack,
  „Lost in the middle", „Working in the smart zone", Context-Management-
  Strategien, Context-File-Categories, CLAUDE.md, Rules (conditional/progressive
  disclosure), Subagents, Agent Teams, Subagents-vs-Agent-Teams-Tabelle.
- **Modul 8:** `erkenntnisse.md` Kap. 16 (Synthese) + Kap. 9 (zwei Schichten).

---

## 7. Offene Punkte / nächste Schritte

Diese Fragen sind noch **nicht** final entschieden und sollten vor der
Detailausarbeitung geklärt werden:

1. **Reihenfolge Context Engineering.** Aktuell am Ende (als Enabler). Alternative:
   ein **kurzer CE-Block vor Modul 1**, damit das erste Vibe-Coden nicht an
   Setup-/Kontext-Frust scheitert. Trade-off: früh = weniger Frust, aber CE wirkt
   zusammenhangslos; spät = sinnstiftender, aber das erste Bauen ist „roher".
2. **Tiefe Subagents / Agent Teams.** Das CE-Deck hat viel dazu (Review-Agent,
   Teams, MCP-Anbindung). Voll reinnehmen oder nur antippen? Risiko: Overload bei
   einer Gruppe, die SDD gerade erst kennenlernt.
3. **Konkreter Drift-Slice festlegen.** SemVer-Vergleich *oder* `applyTo`-Glob-
   Match? Beide sind deterministisch & grenzlastig. Einer muss als Referenz-
   Implementierung (feature + steps) vorbereitet werden.
4. **Sicherheitsnetz-Umfang.** Wie viel Fallback (fertige Configs / Referenz-Repo)
   bereitstellen, ohne die „leeres Repo + Agent bootstrappt"-Linie aufzuweichen?
5. **Detail-Moderationsskript je Modul** noch zu schreiben: genaues Timing,
   Übungsanleitungen als Handout, Facilitator-Skript für Example Mapping,
   Repo-/Setup-Checkliste, Debrief-Fragen.

---

## 8. Kurz-Glossar (für Mitlesende ohne SDD-Hintergrund)

- **SDD (Spec-Driven Development):** Erst Spezifikation, dann Code. Üblicher
  Fluss: Spec → Plan → Implement.
- **Spec vs. Plan:** Spec = WAS/WARUM (Business, domänensprachlich). Plan = WIE
  (Dateien, Schritte, Technik).
- **Contract:** eine Spec, die maschinell erzwingbar ist (OpenAPI, JSON Schema,
  Typen, **Tests**) — Code wird daraus generiert **und** dagegen geprüft.
- **Drift:** Spec und Code laufen unbemerkt auseinander.
- **Example Mapping:** kollaborative Discovery-Methode mit 4 Kartenfarben
  (Story/Rules/Examples/Questions), um die *richtigen* Regeln & Beispiele
  herauszuarbeiten. Sichert **Korrektheit**.
- **Gherkin / BDD / Cucumber:** Given/When/Then in `.feature`-Dateien (lesbare
  Spec), gebunden an „Step Definitions" (Code). Der BDD-Runner führt die Spec
  direkt aus → rot/grün. Sichert **Konformität**.
- **`strict` (Cucumber):** ein Szenario ohne Step-Definition macht den Lauf
  **rot** (statt es still als „pass" zu zählen). Konstituierend, nicht optional.
- **EXACT:** Example-guided AI-Collaborative Test-driven Coding — Example Mapping
  → Gherkin → Tests → Code, gemeinsam mit dem Agenten.
- **Context Engineering:** den Kontext des Agenten gezielt kuratieren
  (Write/Select/Compress/Delegate), damit er zuverlässig in der „Smart Zone"
  arbeitet statt im überladenen „Dumb Zone".
- **Subagent vs. Agent Team:** Subagent = eigener Kontext, berichtet an Main-Agent
  (günstiger, ergebnis-orientiert). Agent Team = mehrere autonome Agenten, die
  über eine geteilte Task-Liste kommunizieren (teurer, für komplexe Kollaboration).
