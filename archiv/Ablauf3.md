# Workshop „Vom Vibe zum Vertrag" — Ablauf & Konzept (Ablauf3, Synthese)

> Dieses Dokument ist die **Synthese aus `Ablauf1.md` und `Ablauf2.md`**. Es
> übernimmt **Ablauf1s Dramaturgie und inhaltliche Schärfe** (Context Engineering
> zuerst, Schmerz = Mehrdeutigkeit, Specification by Example als Fundament,
> EXACT/AI-TDD ausgelagert) und kombiniert sie mit **Ablauf2s Dokumentations-
> reichtum** (Slice-pro-Modul-Tabelle, Material-Mapping, Entscheidungs-Doku mit
> Alternativen, Glossar, Zwei-Schichten-Framing).
>
> Es ist bewusst so geschrieben, dass es auch jemand versteht, der bei der
> Planung **nicht** dabei war: nicht nur *was* gemacht wird, sondern *warum* —
> inklusive der verworfenen Alternativen.
>
> **Stand:** 2026-06-05. Drei Weichen final entschieden (siehe §3): CE an den
> Anfang, EXACT in Folge-Workshop, Synthese-Ablauf. Verbleibende offene Punkte
> sind rein technischer Natur (siehe §9).
>
> **Konzeptionelles Rückgrat:** `spec-driven-development-erkenntnisse.md`.

---

## 0. Ausgangslage & Auftrag

**Ziel:** Teilnehmer SDD *erleben* lassen, nicht nur hören. Explizit **kein
reiner Vortrag**.

**Rahmenbedingungen (vom Auftraggeber festgelegt):**

| Parameter | Entscheidung |
|---|---|
| **Dauer** | Ganztag (~6,5 h netto + Pausen) |
| **Teilnehmer** | 20 Personen, mit erster AI-Coding-Erfahrung (Cursor/Claude Code), keine SDD-Experten |
| **Setup** | Eigene Laptops, Agenten-Tool installiert & lauffähig — echtes Bauen an jedem Platz |
| **Arbeitsform** | Grundsätzlich **Einzelarbeit** (Ausnahme: Example Mapping, s. §3.4) |
| **Tech-Stack** | **Freie Wahl je Teilnehmer** — kein vorgegebenes Skeleton |
| **Fokus** | **Spec Driven Development + Contracts** (nicht: tiefes AI-TDD) |

**Vorhandenes Material im Repo:**
- `Spec Driven Development - English PD (2).pdf` — SDD-Grundlagen, Framework-
  Vergleich (Spec-Kit/OpenSpec/BMAD), „SDD – the hard truth", Brücke zu
  Contract/Gherkin/Cucumber.
- `EXACT Coding (1).pdf` + `(2).pdf` — Example-guided AI-TDD. **Im Hauptfaden nur
  punktuell genutzt** (Vibe-Hook + 659-Runs-Evidenz); der TDD-Loop selbst ist
  ausgelagert (§3.3).
- `Context Engineering - English (1).pdf` — Context Size, „Lost in the middle",
  Smart Zone, Strategien (Write/Select/Compress/Delegate), Context-File-
  Kategorien, CLAUDE.md, Rules, Subagents, Agent Teams.
- `spec-driven-development-erkenntnisse.md` — die konzeptionelle Herleitung der
  zentralen These. Das inhaltliche Rückgrat.
- `examples-for-bdd/bdd/` — **lauffähiges** Cucumber-Beispiel
  (`features/session.feature`, `steps/session.steps.js`, `cucumber.json` mit
  `strict: true`). Demonstriert beide Arten von Drift zum Anfassen.

---

## 1. Die zentrale These (der rote Faden)

Der Workshop hängt an **einem** Satz, der das Material vom generischen „nutzt
halt Spec-Kit"-Vortrag abhebt:

> **„Vibe → Spec → Vertrag."**
> Eine Spec ist erst dann *lebendig*, wenn sie **nicht unbemerkt falsch werden
> kann**. „Lebendig" heißt nicht „wird gepflegt", sondern „kann nicht unbemerkt
> driften". Das schafft nur **Erzwingung** — und Erzwingung heißt: die Spec ist
> **an einen ausführbaren Test gebunden**. Eine so erzwungene Spec hat einen
> Namen: ein **Contract**.

Auf eine Formel gebracht (die *eine Botschaft* des Tages):

> **Nicht-deterministischer Generator (der KI-Agent) gegen deterministischen
> Prüfer (der Contract) — das ist die einzige Architektur, die KI-Coding
> bändigt.** Der Contract ist der Teil des Kontexts, *der nicht lügen kann*:
> Kommentare lügen, Prosa-Specs driften, ein bestehender Contract-Test ist
> Ground Truth.

Die Herleitung (aus `erkenntnisse.md` Kap. 8, verdichtet):

1. **Befund:** Fast alle SDD-Frameworks predigen „Spec als Source of Truth",
   kaum eines erzwingt es. Specs *driften* — nichts prüft je wieder, ob der Code
   der Spec noch entspricht.
2. **Warum:** Eine Prosa-Spec ist *passiv*. Ein Mensch (oder LLM) kann sie lesen,
   aber keine Maschine kann deterministisch prüfen, ob die Realität noch passt.
3. **Einsicht:** „Lebendig" ≠ „fleißig gepflegt". Lebendig = „Driften ist
   unmöglich, weil eine Maschine es verhindert."
4. **Sprung:** Bindet man ein Given/When/Then-Szenario an einen echten,
   ausführbaren Test (BDD/Cucumber, `strict`), wird aus „⚠ wahrscheinlich nicht
   abgedeckt" ein hartes **rot/grün in CI**. Genau diesen Schritt geht keines der
   drei großen Frameworks. Das ist die „offene Frontlinie" von SDD.

### Das Fundament unter dem Fundament: Specification by Example (Gojko Adzic)

*(Aus Ablauf1 übernommen — die Klammer, die in allen Decks implizit steckt, aber
nie benannt wird. Sie gehört prominent an den Anfang von Akt 2.)*

> Beispiele sind die präziseste Sprache, in der Mensch und Maschine sich über
> *Verhalten* einigen können — und dasselbe Beispiel ist gleichzeitig der
> Akzeptanztest. Eine Spezifikation aus Beispielen ist lebende, ausführbare
> Dokumentation.

Das ist die Idee, die **Example Mapping → Gherkin → Cucumber** zu *einer* Sache
verbindet statt zu drei Techniken.

### Zwei-Schichten-Merksatz (gegen „alles vertraglich")

> **Contracts an jede Naht, Prosa in jeden Raum.** Rigor an den formalen Grenzen
> (API, Daten, Typen, Verhalten-an-der-Kante), Urteilsvermögen im Inneren. Nicht
> maximieren — *platzieren*.

### Die ehrliche Grenze (nie überverkaufen)

> Grün beweist **Konformität** (Code = Szenario), nicht **Korrektheit** (Szenario
> ist sinnvoll). Korrektheit holt man *vorher* — durch **Example Mapping** mit dem
> Domänenexperten.

### Die Lernkette des ganzen Tages

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

**Entscheidung:** Es wird **kein beliebiges Feature** gebaut, sondern über den
ganzen Tag **ein echtes Werkzeug**:

> Ein **CLI-Tool**, mit dem man **AI-Skills, Subagents, Rules und Context Files**
> (CLAUDE.md, AGENTS.md etc.) **zentral verwalten, vergleichen und bearbeiten**
> kann. Installierbar, sodass man aus **einer zentralen Stelle** diese Artefakte
> auf Wunsch in **bestimmte Repos importieren** kann.

Das Tool wird an einem Tag **bewusst NICHT fertiggestellt.** Es ist das
*Vehikel*, an dem die SDD-Disziplinen geübt werden — gezogen an **einem dünnen
vertikalen Schnitt** (`import`), exemplarisch von Anfang bis Ende.

### Warum diese Idee gut ist (didaktische Begründung)

- **Meta-Dogfooding / selbstreferenziell.** Die Teilnehmer bauen ein Tool, das
  genau die Artefakte verwaltet, über die sie den ganzen Tag lernen. Das
  Context-Engineering-Wissen aus Akt 0 ist damit gleichzeitig **Methodik** *und*
  **Domänen-/Pflichtenheft-Input für das Produkt**: Man muss wissen, was eine
  Rule ist, welche Levels es gibt (Enterprise/Project/User), wie Progressive
  Disclosure funktioniert — *bevor* man ein Tool baut, das so etwas importiert.
  Der Rückbezug beantwortet die „Wozu das alles?"-Frage permanent von selbst.
- **Echt & mitnehmbar.** Niemand wirft am Ende ein „Meeting-buchen"-Demo weg. Ein
  Verwaltungs-CLI für die eigene `.claude/`-Umgebung will man *behalten*.
- **Existiert real in Ansätzen** (git-basierte dotfiles für `.claude/`, Tools wie
  `ruler`) — keine künstliche Aufgabe.
- **Reich an echten Geschäftsregeln.** „Importiere eine Rule in ein Repo" hat von
  Natur aus viele Regeln (auf welches Level? still überschreiben? Format
  validieren? was bei Versions-Drift?) — Example Mapping braucht genau das.

### Der vertikale Schnitt: `import` (Favorit)

SDD lebt vom **dünnen vertikalen Schnitt**: *ein* Kommando, end-to-end.

- **`import`** *(gewählt)* — Rule/Skill aus zentraler Stelle in ein Ziel-Repo
  holen. Reichste Regeln: korrektes Level (Project vs. User), kein stilles
  Überschreiben, Formatvalidierung, Umgang mit Progressive-Disclosure-Anhängen
  (`reference.md`), Versions-Drift.
- *Verworfene Alternativen:* `compare`/`diff` (gut, aber weniger
  Seiteneffekt-Regeln), `add`/`register` (neuen Artefakt zentral aufnehmen).

### Die EINE Gefahr — und ihre Lösung

Die Lehr-Höhepunkte brauchen **kleine, scharf umrissene Verhaltens-Slices**:
- **Example Mapping** glänzt nur mit echten Edge-Cases (Regeln + Beispiele).
  Reines „Datei kopieren"-CRUD ist arm an Regeln.
- **Der Cucumber-Drift-Moment** braucht *eine* deterministische Logik mit einer
  Grenze/Zahl. Reine Filesystem-I/O ist dafür ungeeignet.

**Lösung:** Das Tool ist das übergreifende Projekt — aber **jedes Disziplin-Modul
zoomt auf einen Slice**, der zur Technik passt:

| Akt | Tool-Slice | Warum geeignet |
|---|---|---|
| 1 · Schmerz (Vibe) | „importiere ein Skill/eine Rule in ein Repo", frei drauflos | bewusst naiv, ohne Spec → 20 Leute treffen 20 verschiedene Annahmen |
| 3a · Example Mapping | Import-**Verhalten** mit Edge-Cases | reich an Regeln: Ziel existiert? Version älter/neuer? Konflikt mit lokaler Rule? `--dry-run`? partieller Import? → viele grüne & rote Karten |
| 3c · Drift/Cucumber | *eine* reine Logik, z.B. **SemVer-Vergleich** („überschreiben ja/nein?") oder **`applyTo`-Glob-Match** („gilt diese Rule für diesen Pfad?") | deterministisch, grenzlastig (`<` vs `<=`, `*` vs `**`) → sauberes rot/grün |
| Schluss · Context Eng. (Vertiefung) | CLAUDE.md + Rules **für das Tool selbst** schreiben | rekursiv: ihre Artefakte werden Testdaten ihres Tools |

---

## 3. Wichtige getroffene Entscheidungen (mit Begründung & Alternativen)

### 3.1 Bau-Topologie: **Jeder allein, eigenes Repo, leeres Repo**

- **Gewählt:** Jeder baut sein **eigenes** Tool im **eigenen, leeren** Repo.
- **Begründung:** Maximale individuelle Erfahrung; jeder durchläuft jeden Schritt
  selbst und nimmt sein eigenes Werkzeug mit. „Erlebtes Bauen" von Anfang an.
- **Verworfene Alternativen:** *5 Teams je Repo* (robuster, weniger Merge-Chaos,
  aber weniger „mir gehört das"); *ein gemeinsames Repo für alle 20* (realistische
  Kollaboration, aber hohes Merge-/Koordinationsrisiko); *vorbereitetes Skelett*
  (spart Setup-Frust, hält alle synchron — aber weniger roh/realistisch).
- **Erkannte Spannung & Gegenmaßnahme:** „Jeder allein" kollidiert mit Example
  Mapping (von Natur aus Gruppenübung). → siehe §3.4.

### 3.2 Tech-Stack: **Frei pro Person** — der gemeinsame Nenner ist die Spec

- **Gewählt:** Jeder baut in der **Sprache seiner Wahl**. Kein gemeinsames
  Code-Skeleton.
- **Wichtige Konsequenz:** Der gemeinsame Nenner über alle 20 ist **nicht der
  Code, sondern die Spezifikation**. Example Mapping ist stack-neutral, die
  Gherkin-`.feature` ist stack-neutral; nur **Step Definitions** und
  **Implementierung** schreibt jeder in seiner Sprache (Cucumber-JS,
  `pytest-bdd`, SpecFlow, Cucumber-JVM …).
- **Didaktischer Bonus:** Das **beweist live** die SDD-Kernthese — *die
  Verhaltens-Spec ist der stabile Vertrag, unabhängig vom Stack.* Dieselbe
  `.feature` läuft beim TS- und beim Python-Entwickler; nur die
  Übersetzungsschicht darunter unterscheidet sich.
- **Trade-off (bewusst akzeptiert):** Keine 100% einheitliche Live-Demo im
  Drift-Modul. Gegenmaßnahme: Facilitator demonstriert den Drift-Moment live auf
  Node/TS (mit `examples-for-bdd/bdd/`), Teilnehmer übertragen das Prinzip in
  ihren Stack. Wer einen exotischen Stack hat und beim BDD-Setup hängt, nutzt ein
  separates kleines Node-Verzeichnis `drift-demo/` **neben** seinem Tool — der
  Slice demonstriert das *Prinzip*, er muss nicht im Haupt-Tool leben.

### 3.3 AI-TDD / EXACT: **ausgelagert in einen Folge-Workshop** ⭐ (zentrale Weiche)

- **Gewählt:** Der **EXACT-/AI-TDD-Hands-on-Block fliegt aus dem Hauptfaden.** Er
  wird ein **eigener Folge-Workshop**. Im heutigen Tag bleibt EXACT nur an zwei
  Stellen präsent: der **Vibe-Coding-Hook** (Akt 1) und **ein Evidenz-Slide** (das
  659-Runs-Experiment, Akt 2).
- **Begründung (der eigentliche Grund, warum dieser Tag fokussiert ist):**
  SDD und AI-TDD haben **zwei verschiedene „Warum"**, die man nicht in einen Tag
  pressen sollte:

  | | **Spec Driven / Specification by Example** | **AI-TDD (EXACT)** |
  |---|---|---|
  | Frage | Wie einigen wir uns präzise auf das **WAS** — und bleibt das wahr? | Wie hindern wir den Agenten am Über-Engineeren / Vibe-Coden? |
  | Wurzel | Gojko Adzic — geteilte Sprache + lebende Doku | Disziplin der Red-Green-Schleife, Code-Qualität |
  | Ergebnis | Korrektheit + driftfreie Verhaltens-Wahrheit | Wartbarkeit, weniger Komplexität |

  Sie treffen sich erst beim *Mechanismus* (etwas an Tests binden), aber die
  **Motivation ist verschieden**. `erkenntnisse.md` — das Rückgrat des Tages —
  behandelt ausschließlich das linke Warum; AI-TDD kommt darin gar nicht vor. Für
  einen SDD-fokussierten Tag reiten wir konsequent das linke Warum.
- **Verworfene Alternative (war Ablauf2s stärkster Hebel):** *„Denselben Slice
  zweimal bauen"* — einmal naiv vibe-gecodet (Akt 1), einmal mit voller
  EXACT-Disziplin als Höhepunkt. Das hätte das 659-Runs-Experiment am eigenen
  Rechner fühlbar gemacht. **Bewusst verworfen,** weil es das zweite Warum
  hereinholt und den Tag thematisch spaltet. Der Doppelbau-Hebel wandert in den
  Folge-Workshop.
- **Was vom Doppelbau bleibt:** Der Schmerz aus Akt 1 wird trotzdem eingelöst —
  aber als **Mehrdeutigkeits-Payoff** (siehe §3.5 / Akt 3), nicht als
  Qualitätsvergleich.

### 3.4 Example Mapping: **in 4er-Gruppen** (einzige Ausnahme von Einzelarbeit)

- **Gewählt:** Modul 3a läuft in **5 Tischgruppen à 4** als reine *Methoden-Übung*
  an einem gemeinsamen Slice. Danach nimmt jeder die Karten in sein eigenes Repo.
- **Begründung:** Die Kerndisziplin ist *„facilitate, do not invent"* — einer
  fragt, andere liefern Domänenwissen. **Allein am Laptop degeneriert es** zu „ich
  schreibe mir selbst Karten"; genau der Aha-Moment (rote Karten entstehen im
  Dialog) entfällt. Bauen bleibt individuell, **Discovery wird sozial geübt.**
- *(Vom Auftraggeber zu bestätigen — einzige Abweichung von „Einzelarbeit".)*

### 3.5 Dramaturgie-Weichen (CE zuerst, Schmerz = Mehrdeutigkeit)

**Context Engineering kommt komplett an den ANFANG (Akt 0).**
- **Begründung:** Beim Tool-Projekt ist Context-Wissen nicht nur Methodik, sondern
  **Pflichtenheft-Input** — das Produkt verwaltet ja Skills/Subagents/Rules/
  Context Files. Man muss diese Begriffe, ihre Levels und Progressive Disclosure
  kennen, *bevor* man ein Tool dafür baut. Zusätzlich motiviert die „Smart Zone"
  (Lost-in-the-middle, endlicher nutzbarer Kontext) *warum* SDD-Frameworks Arbeit
  in kleine Pakete zerlegen. Akt 0 ist damit **Vokabular + Domäne +
  Methodik-Motivation** in einem.
- **Verworfene Alternative:** *Schmerz zuerst, CE als Enabler am Ende* (Ablauf2).
  Emotional stärkerer Opener, aber CE wäre Pflichtenheft-Input, der erst *nach*
  dem ersten Bauen käme — das erste Vibe-Coden liefe ohne das nötige Vokabular.

**„Drift selbst erleben" gehört NICHT in Akt 1.** *(Wichtige Korrektur aus
Ablauf1.)*
- Drift ist ein **Evolutions-Phänomen** — frisch erzeugter Code *kann nicht
  driften*, weil es noch nichts gibt, wovon er abweichen könnte. Der Schmerz in
  Akt 1 ist ein **anderer: Mehrdeutigkeit.** Lässt man 20 Leute dieselbe Aufgabe
  „vibe-coden", bekommt man 20 verschiedene Ergebnisse — weil der Agent die
  ungesagten Regeln *raten* muss. Genau dieser Schmerz motiviert Specification by
  Example.
- **Drift wird zum Payoff später** (Akt 3c): Dann existieren gebundene Tests, eine
  Code-/Spec-Änderung macht einen Test rot — *jetzt* ist Drift erlebbar, als
  Belohnung, nicht als Hook.

### 3.6 BDD-Setup: **Agent bootstrappt es** (mit Sicherheitsnetz)

- **Gewählt:** Das Aufsetzen von Cucumber + `strict` ist **selbst eine
  SDD-Lernübung**: „Lass deinen Agenten Cucumber + strict einrichten." Ehrlich &
  realistisch — kostet ~20–30 min, ist aber Teil des Lernens.
- **Verworfene Alternativen:** *Snippet-Netz* (fertige Config-Snippets als
  Fallback); *Stack zentral festlegen* (eine Anleitung, weniger Autonomie).
- **Sicherheitsnetz (empfohlen):** Das lauffähige `examples-for-bdd/bdd/` als
  Referenz/Fallback bereithalten, falls jemand beim Bootstrapping hängt — damit
  der Aha-Moment nicht an Setup scheitert.

---

## 4. Dramaturgie (warum die Reihenfolge so ist)

Pro Akt ein **Sandwich**: kurzer Impuls (10–15 min) → Teilnehmer machen es selbst
→ kurze Reflexion. Statt langer Vortragsblöcke.

```
Akt 0  CONTEXT ENGINEERING   — Methodik + Domänenwissen fürs Tool
       Skills/Subagents/Rules/Context Files, Levels, Progressive Disclosure,
       Smart Zone / Lost-in-the-middle. = Vokabular UND Pflichtenheft.
       Begründet „klein schneiden".

Akt 1  DER SCHMERZ           — den Schnitt vibe-coden, OHNE Spec
       20 Leute, 20 verschiedene Annahmen → Mehrdeutigkeit als gefühltes Problem.

Akt 2  WARUM SDD             — Specification by Example (Gojko) + SDD-These
       Beispiele = geteilte Sprache = Akzeptanztest.
       „Spec driftet → Contract." 659-Runs-Experiment als Evidenz.

Akt 3a EXAMPLE MAPPING       — auf den einen Schnitt        (4er-Gruppen)
Akt 3b GRÜNE KARTEN → GHERKIN— die Verhaltens-Spec           (einzeln, mit AI)
Akt 3c BINDEN → ROT/GRÜN     — Contract, Drift erlebbar       (einzeln, mit AI)
       Agent implementiert den Schnitt gegen die roten Tests.

SCHLUSS  Dogfooding + Transfer · AI-TDD = Ausblick auf Folge-Workshop.
```

**Die zwei stärksten geplanten Erlebnisse:**
1. **Example Mapping live** (Akt 3a) — kollaborativ, ohne Code. Aha: rote Karten
   (offene Fragen) tauchen auf, *bevor* eine Zeile Code existiert.
2. **Drift zum Anfassen** (Akt 3c) — der emotionale Kern. Spec und Code stimmen
   überein (grün) → Teilnehmer ändert eine Zahl/Grenze → CI wird **rot**. Dieses
   Rot ist der Aha: *die Spec kann nicht mehr unbemerkt falsch werden.*

---

## 5. Tagesfahrplan (~6,5 h netto)

> Zeiten als Startgerüst mit bewusstem Puffer (Hands-on bei 20 Einzelplätzen
> streut). Puls aus **kurzem Input (10–15 min)** und **Hands-on**.

| Zeit | Akt | Format | Kern / Tool-Slice |
|---|---|---|---|
| **09:00** | **0 · Context Engineering** (45') | Impuls + Mini-Demo | Begriffe: Skills, Subagents, Rules, Context Files. Levels (Enterprise/Project/User), `CLAUDE.md`, Progressive Disclosure. **Smart Zone / Lost-in-the-middle** als Mini-Demo. Überleitung: *Das ist die Domäne unseres Tools — und der Grund, warum wir klein schneiden.* |
| **09:45** | **1 · Der Schmerz** (30') | 🛠 Einzeln, mit AI | Tool-Idee + Tagesziel vorstellen. Den Schnitt **„importiere ein Skill/eine Rule in ein Repo"** **ohne Spec** vibe-coden. Repo anlegen, Sprache wählen. Danach Ergebnisse vergleichen → **jeder traf andere Annahmen** (Level? Überschreiben? Format? Fehlerfälle?). Schmerz = **Mehrdeutigkeit**. |
| 10:15 | *Pause* (15') | | |
| **10:30** | **2 · Warum SDD** (45') | Impuls + Diskussion | Dreiteilig: **(a) Fundament** — Specification by Example (Gojko); SDD: Spec→Plan→Implement; Spec vs. Plan (Litmustest); die zwei Achsen (Abstraktion + **Enforcement**). **(b) Framework-Vergleich** (~12–15 min, eigener Mittelteil, reiner Input + Tabelle) — spec-kit / OpenSpec / BMAD, pro Tool *ein* konkretes Problem; Pointe: **„lebend ≠ erzwungen".** **(c) Der Sprung** — Prosa-Specs driften → **Contract**, „That thing has a name"; **659-Runs-Experiment als Evidenz** (0.28 → 1.00). |
| **11:15** | **3a · Example Mapping** (75') | 🛠 **5 Tischgruppen à 4** (analog/Miro) | Slice **„Import-Verhalten"** auf Karten: Story (gelb) / Rules (blau) / Examples (grün) / Open Questions (rot). Regeln: Ziel existiert? Version älter/neuer (SemVer)? Konflikt mit lokaler Rule? `--dry-run`? partieller Import? Prinzip **facilitate, don't invent**. Aha: rote Karten vor dem Code. Danach: Karten mit ins eigene Repo. |
| 12:30 | *Mittag* (60') | | |
| **13:30** | **3b · Grüne Karten → Gherkin** (45') | 🛠 Einzeln, mit AI | Grüne Karten in Gherkin-Requirements übersetzen (Domänen-Form: Requirement → Scenario, Given/When/Then). Agent hilft formulieren, Teilnehmer prüfen. Disziplin: **Anforderung gehört in Given/When/Then, nie in Freitext.** `.feature` ist stack-neutral. |
| **14:15** | **3c · Binden → rot/grün** (90') | 🛠 Einzeln, mit AI (Höhepunkt) | Agent bootstrappt Cucumber + `strict`. Step Definitions im eigenen Stack (Vorlage: `examples-for-bdd/bdd/`). *Eine* deterministische Logik (SemVer-Compare oder `applyTo`-Glob) als Step. Agent baut **gegen-grün**. **Der Drift-Moment:** Szenario/Zahl ändern → CI wird **rot**. `strict: true` an/aus erleben (undefined step = rot vs. still grün). |
| 15:45 | *Pause* (15') | | |
| **16:00** | **Schluss · Synthese & Transfer** (45') | Diskussion / Plenum | Die eine Architektur (Generator vs. Prüfer). Gesamtbild (Lernkette §1). „Contracts an jede Naht, Prosa in jeden Raum." Ehrliche Grenzen (grün = Konformität ≠ Korrektheit; nur szenarioisiertes Verhalten geschützt; nicht alles ist gherkin-bar). **Ausblick AI-TDD-Folge-Workshop.** „Was setze ich montags ein?" |
| **16:45** | **Ende** | | |

---

## 6. Mapping: welche Folie/Material gehört in welchen Akt

Damit beim Folienbau nichts doppelt oder verloren geht.

- **Akt 0:** Context-Engineering-Deck komplett — Context Size, Needle/Haystack,
  „Lost in the middle", „Working in the smart zone", Context-Management-Strategien
  (Write/Select/Compress/Delegate), Context-File-Kategorien, CLAUDE.md (Levels &
  Commands), Rules (conditional via `paths:`/`applyTo`, Progressive Disclosure),
  Subagents & Agent Teams (hier nur als *Begriffe*, da Domäne des Tools).
- **Akt 1:** EXACT-Deck — „Vibe Coding", „Vibe Coding – Gone wrong" (der
  „guys, i'm under attack"-Tweet), „Vibe Coding vs Handmade" (Spektrum).
- **Akt 2:** SDD-Deck — „Spec driven development – SDD", „Levels of spec-driven"
  (Fowler: spec-first / spec-anchored / spec-as-source), Framework-Vergleichs-
  tabellen, „SDD – the hard truth" (beide Varianten), „That thing has a name: a
  contract"; `erkenntnisse.md` Kap. 1–9. **Plus** EXACT-Deck „The experiment"
  (659 Runs, v6.1-hybrid × Example-Mapping, 0.28 → 1.00) als **einzelner
  Evidenz-Slide**.
- **Akt 3a:** EXACT-Deck — „Example Mapping" (WHAT/WHY/HOW, Vier-Farben,
  Book-Meeting-Beispiel als Vorlage für den Tool-Slice).
- **Akt 3b:** SDD-Deck — „Example – OpenSpec Requirements", Prosa-vs-Contract,
  generieren-vs-binden; `erkenntnisse.md` Kap. 11–12.
- **Akt 3c:** SDD-Deck — „Example – Gherkin BDD Tests with cucumber"
  (Ordnerstruktur, feature, steps, strict, der rote Blitz); lauffähiges
  `examples-for-bdd/bdd/` als Referenz; `erkenntnisse.md` Kap. 12–15.
- **Schluss:** `erkenntnisse.md` Kap. 16 (Synthese) + Kap. 9 (zwei Schichten) +
  Kap. 10/15 (ehrliche Grenzen). EXACT-Deck nur als **Ausblick** auf den
  Folge-Workshop (AI-TDD: Gherkin→Cucumber→Code, Red/Green/Refactor).

---

## 7. Inhaltliche Bausteine je Akt (Tiefe für die spätere Ausarbeitung)

### Akt 0 — Context Engineering
- Prompt- vs. Context-Engineering; Context window; Kuration.
- „More does not mean better"; Needle-in-the-haystack; Lost-in-the-middle
  (Primacy/Recency, schwacher Recall in der Mitte); **Smart Zone vs. Dumb Zone**.
- Strategien: Write / Select / Compress / Delegate.
- Context-File-Kategorien: Plans, AGENT.md/CLAUDE.md, Docu, Rules, Workflows.
- `CLAUDE.md`-Levels (Enterprise/Project/User) + Commands (`/init`, `/memory`,
  `@import`).
- Rules (topic-specific, conditional via `paths:`), Progressive Disclosure
  (SKILL.md → reference.md/forms.md — „nur laden, wenn gebraucht").
- Subagents & Agent Teams (nur als Begriffe — sie sind die Domäne des Tools).
- Überleitung: *Das ist die Domäne unseres Tools — und der Grund, klein zu
  schneiden.*

### Akt 1 — Der Schmerz
- Hook: „guys, i'm under attack"-Tweet (Vibe Coding gone wrong).
- Übung: `import`-Befehl **ohne** Spezifikation bauen lassen.
- Reflexion: Annahmen sichtbar machen (Level, Overwrite, Format, Fehlerfälle).
  **20 Leute → 20 Ergebnisse → Mehrdeutigkeit.**

### Akt 2 — Warum SDD
Dreiteiliger Aufbau: **(a) Fundament → (b) Framework-Vergleich → (c) Der Sprung.**

**(a) Fundament** (~12 min)
- **Specification by Example (Gojko Adzic)** als Fundament: Beispiele = präziseste
  geteilte Sprache = zugleich Akzeptanztest.
- SDD-Definition; Spec vs. Plan (WAS/WARUM vs. WIE); Litmustest (Satz löschen:
  ändert sich, *was ein Domänenexperte zustimmt* → Spec; *was ein Entwickler
  baut* → Plan).
- Die zwei Achsen: Abstraktion (WAS/WIE) und **Enforcement** (generativer Input
  vs. erzwungener Contract).

**(b) Framework-Vergleich** (~12–15 min, eigener Mittelteil, **reiner Input +
Vergleichstabelle**, kein Mitmach-Teil)
Quelle: `erkenntnisse.md` Kap. 4–7. Didaktisches Ziel: **nicht** die Tools lehren,
sondern zeigen, dass *selbst das beste* das Kernproblem nicht löst → das
rechtfertigt den Rest des Tages. Pro Framework **genau ein** konkretes Problem:

| Framework | Spec organisiert nach | Lebt die Spec? | Source of Truth | **Das Problem** |
|---|---|---|---|---|
| **spec-kit** | Feature / Git-Branch | ❌ Snapshot pro Branch | faktisch der **Code** | lauteste Behauptung, schwächste Mechanik: **kein Merge zurück** in eine lebende Spec → Feature-Specs widersprechen sich |
| **BMAD** | SDLC-Phase | ❌ Wegwerf nach Fertigstellung | der **Code** | Planungsdokumente sind **Wegwerf-Gerüst**; `document-project` zieht Doku **rückwärts aus dem Code** → Gegenteil von Drift-Detection |
| **OpenSpec** | **Domäne** | ✅ ja (Delta-Merge) | die **Spec** | einziges mit lebender Verhaltens-Spec — aber `verify` ist **LLM-basiert, „mahnt, erzwingt nicht"** → gepflegt, nicht erzwungen |

- **Die Pointe (der ganze Sinn des Vergleichs):** Alle drei predigen „Spec as
  Source of Truth". Nur OpenSpec baut überhaupt die Mechanik — und selbst die
  bleibt **„lebend ≠ erzwungen".** Deterministische Drift-Detection (CI rot/grün
  gegen Contract) hat **keines** der drei. Das ist die offene Frontlinie.

**(c) Der Sprung** (~12 min)
- Warum Prosa-Specs *grundsätzlich* driften (passiv, keine Maschine prüft).
- „Lebendig" ≠ „gepflegt" → **Contract**; „That thing has a name."
- Evidenz: **659-Runs-Experiment** (verification_pct 0.28 → 1.00) — „Struktur
  schlägt Vibe, empirisch gemessen". *Ein* Slide.

### Akt 3a — Example Mapping
- Vier-Farben-Framework: Story (gelb), Rules (blau), Examples (grün), Questions
  (rot). 3 Amigos / 20–30-Min-Format; **„facilitate, do not invent".**
- Output: Story-Kontext + Edge-Case-Beispiele, die zur Saat der Tests werden.

### Akt 3b — Grüne Karten → Gherkin
- Domänen-Form (OpenSpec): Domäne (Datei) → Requirement → Scenario.
- Grüne Karten = Proto-Given/When/Then → Gherkin-Szenarien.
- Disziplin: Anforderung gehört in Given/When/Then, nie in Freitext-Beschreibung.

### Akt 3c — Binden → rot/grün
- „Binden" vs. „generieren": nur Binden schließt die Schleife (kein Drift).
- Zwei Schichten: `*.feature` (Prosa, lesbar) + `steps/*` (Code, einmalig).
- `strict`-Modus ist **konstituierend** (undefined step → roter Lauf).
- Wann wird rot: ⟺ Widerspruch zwischen Szenario-Behauptung und Code-Verhalten.
- Drift-Demo: Wert über die Grenze ändern → Test rot.

### Schluss
- Synthese: Example Mapping (Korrektheit) → Gherkin (lesbar, Domänen-Form) →
  gebunden + strict → rot/grün in CI = erzwungene, lebende Verhaltens-Spec.
- Ehrliche Grenzen (Kap. 16): grün = Konformität ≠ Korrektheit; nur
  szenarioisiertes Verhalten geschützt; Freitext wird nie erzwungen;
  Vokabular-Disziplin nötig; nicht alles ist gherkin-bar.
- Ausblick: **AI-TDD-Folge-Workshop** (Red-Green-Refactor mit dem Agenten, der
  Doppelbau-Hebel, das zweite Warum).

---

## 8. Bewusst ausgelagert / nicht im Scope

- **AI-TDD (Red-Green-Refactor mit dem Agenten)** → eigener Folge-Workshop. Heute
  nur Vibe-Hook (Akt 1) + ein Evidenz-Slide (659 Runs, Akt 2) + Ausblick.
- **Der „denselben-Slice-zweimal-bauen"-Hebel** → wandert mit EXACT in den
  Folge-Workshop (siehe §3.3).
- **Vollständigkeit des Tools** — nur ein vertikaler Schnitt (`import`) wird
  durchgezogen.
- **Tiefe Contract-Formen jenseits von Gherkin** (OpenAPI, JSON Schema, IaC,
  Policy) — nur als Einordnung: Gherkin ist die *Verhaltens*-Wahrheit, nicht die
  ganze Wahrheit.
- **Tiefe Subagents / Agent Teams** — in Akt 0 nur als Begriffe (sind Domäne des
  Tools), keine eigene Übung.

---

## 9. Offene Punkte / nächste Schritte

Rein **technische** Restpunkte (die drei großen Weichen sind entschieden):

1. **Konkreter Drift-Slice festlegen.** SemVer-Vergleich *oder* `applyTo`-Glob-
   Match? Beide deterministisch & grenzlastig. **Einer** muss als Referenz-
   Implementierung (feature + steps, Node/TS) für die Live-Demo vorbereitet
   werden. *Empfehlung: SemVer-Compare — vertrauter, die `<` vs. `<=`-Grenze ist
   für alle sofort lesbar.*
2. **Example Mapping in 4er-Gruppen** — vom Auftraggeber zu bestätigen (einzige
   Abweichung von „Einzelarbeit").
3. **Vorbereitete „Beispiel-Registry"** mit ein paar Demo-Rules/Skills
   (stack-neutral, einfache `.md`), damit alle dieselbe Ausgangsbasis fürs
   `import`-Beispiel haben.
4. **BDD-Vorlagen je Stack** verlinken (pytest-bdd, SpecFlow, Cucumber-JVM), da
   freie Stack-Wahl gilt; `examples-for-bdd/bdd/` ist JS.
5. **Sicherheitsnetz-Umfang** — wie viel Fallback (fertige Configs / Referenz-
   Repo), ohne die „leeres Repo + Agent bootstrappt"-Linie aufzuweichen?
6. **Miro/Analog** für Example Mapping vorbereiten.
7. **Detail-Moderationsskript je Akt** — Timing, Übungsanleitungen als Handout,
   Facilitator-Skript für Example Mapping, Repo-/Setup-Checkliste, Debrief-Fragen.

---

## 10. Kurz-Glossar (für Mitlesende ohne SDD-Hintergrund)

- **SDD (Spec-Driven Development):** Erst Spezifikation, dann Code. Üblicher Fluss:
  Spec → Plan → Implement.
- **Spec vs. Plan:** Spec = WAS/WARUM (Business, domänensprachlich). Plan = WIE
  (Dateien, Schritte, Technik).
- **Specification by Example (Gojko Adzic):** Beispiele als präziseste geteilte
  Sprache zwischen Mensch und Maschine; das Beispiel *ist* zugleich der
  Akzeptanztest. Fundament unter Example Mapping → Gherkin → Cucumber.
- **Contract:** eine Spec, die maschinell erzwingbar ist (OpenAPI, JSON Schema,
  Typen, **Tests**) — Code wird daraus generiert **und** dagegen geprüft.
- **Drift:** Spec und Code laufen unbemerkt auseinander.
- **Example Mapping:** kollaborative Discovery-Methode mit 4 Kartenfarben
  (Story/Rules/Examples/Questions). Sichert **Korrektheit**.
- **Gherkin / BDD / Cucumber:** Given/When/Then in `.feature`-Dateien (lesbare
  Spec), gebunden an „Step Definitions" (Code). Der Runner führt die Spec direkt
  aus → rot/grün. Sichert **Konformität**.
- **`strict` (Cucumber):** ein Szenario ohne Step-Definition macht den Lauf
  **rot** (statt es still als „pass" zu zählen). Konstituierend, nicht optional.
- **EXACT / AI-TDD:** Example-guided AI-Collaborative Test-driven Coding —
  Red-Green-Refactor mit dem Agenten. **Eigener Folge-Workshop**, nicht dieser Tag.
- **Context Engineering:** den Kontext des Agenten gezielt kuratieren
  (Write/Select/Compress/Delegate), damit er in der „Smart Zone" arbeitet.
- **Konformität vs. Korrektheit:** Konformität = Code = Szenario (Tests).
  Korrektheit = Szenario ist sinnvoll (Example Mapping). Zwei verschiedene Jobs.
- **Subagent vs. Agent Team:** Subagent = eigener Kontext, berichtet an Main-Agent
  (günstiger). Agent Team = mehrere autonome Agenten über geteilte Task-Liste
  (teurer, komplexe Kollaboration).
