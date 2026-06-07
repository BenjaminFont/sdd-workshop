# Workshop „Vom Vibe zum Vertrag" — Ablauf & Konzept (Stand 1)

> Dieses Dokument hält den **kompletten Gedankengang** einer Planungs-Session
> fest. Es ist bewusst ausführlich geschrieben, damit eine Person, die *nicht*
> dabei war, sowohl den **Ablauf** als auch das **Warum hinter jeder
> Entscheidung** versteht und den Plan eigenständig weiterführen kann.
>
> Quelldokumente im Repo (Grundlage dieses Plans):
> - `spec-driven-development-erkenntnisse.md` — die konzeptionelle Analyse zu SDD
> - `Spec Driven Development - English PD (2).pdf` — Vortrags-Deck SDD
> - `EXACT Coding (1).pdf` / `(2).pdf` — Vortrags-Deck Example-guided AI TDD (EXACT)
> - `Context Engineering - English (1).pdf` — Vortrags-Deck Context Engineering
> - `examples-for-bdd/bdd/` — lauffähiges Cucumber-Beispiel (Drift zum Anfassen)

---

## 1. Rahmenbedingungen (vom Auftraggeber festgelegt)

| Parameter | Entscheidung |
|---|---|
| **Dauer** | Ganzer Tag (~6–7 h inkl. Pausen) |
| **Teilnehmer** | 20 Personen, mit anfänglicher AI-Coding-Erfahrung |
| **Setup** | Eigene Laptops, AI-Coding-Tool bereits installiert & lauffähig |
| **Arbeitsform** | Grundsätzlich **Einzelarbeit** (Ausnahme: Example Mapping, s.u.) |
| **Inhaltlicher Fokus** | **Spec Driven Development + Contracts** (nicht: tiefes AI-TDD) |
| **Tech-Stack** | **Freie Wahl je Teilnehmer** — kein vorgegebenes Skeleton |
| **Ziel** | Die Teilnehmer sollen SDD nicht nur hören, sondern **erleben** |

**Wichtige Konsequenz der freien Stack-Wahl:** Es gibt **kein gemeinsames
Code-Skeleton**. Der gemeinsame Nenner über alle 20 Teilnehmer hinweg ist
deshalb **nicht der Code, sondern die Spezifikation**:

- Das **Example Mapping** ist stack-neutral.
- Die **Gherkin-`.feature`-Datei** ist stack-neutral.
- Nur die **Step Definitions** und die **Implementierung** schreibt jeder in
  seiner eigenen Sprache (Cucumber gibt es für JS, Python (`pytest-bdd`),
  Java, .NET (`SpecFlow`) usw.).

Das ist didaktisch sogar ein Vorteil: Es **beweist live** die SDD-Kernthese —
*die Verhaltens-Spec ist der stabile Vertrag, unabhängig vom Stack.* Dieselbe
`.feature` läuft bei einem TS-Entwickler und einem Python-Entwickler; nur die
Übersetzungsschicht darunter unterscheidet sich.

---

## 2. Was die Teilnehmer bauen (das durchgehende Projekt)

**Produktidee:** Ein **CLI-Tool zur zentralen Verwaltung von AI-Coding-Artefakten**
— Skills, Subagents, Rules und Context Files. Das Tool wird installiert und kann
auf Wunsch diese Artefakte von einer **zentralen Stelle** in beliebige Repos
**importieren** (und perspektivisch vergleichen, bearbeiten).

**Wichtige Erwartungshaltung:** Das Tool wird an *einem Tag bewusst NICHT
fertiggestellt.* Es ist das **Vehikel**, an dem SDD geübt wird, nicht das
Lernziel selbst. Der Workshop zieht SDD an **einem einzigen vertikalen Schnitt**
exemplarisch von Anfang bis Ende durch.

### Warum diese Produktidee gut passt (Begründung)

1. **Selbstreferenziell / Dogfooding.** Das Tool verwaltet genau die Dinge, die
   der Workshop lehrt (Skills, Subagents, Rules, Context Files). Das Wissen aus
   dem Context-Engineering-Teil ist damit gleichzeitig **Methodik** *und*
   **Domänenwissen für das Produkt**. Man muss wissen, was eine Rule ist, welche
   Levels es gibt (Enterprise/Project/User) und wie Progressive Disclosure
   funktioniert — bevor man ein Tool baut, das so etwas importiert.
2. **Reich an echten Geschäftsregeln.** Example Mapping braucht eine Domäne mit
   echten Regeln und Randfällen, sonst wird das Mapping dünn. „Importiere eine
   Rule in ein Repo" hat von Natur aus viele Regeln (auf welches Level? still
   überschreiben? Format validieren? was bei Versions-Drift?).
3. **Drift wird im eigenen Produkt erlebbar.** Am Ende ändern die Teilnehmer
   Code, der den Import-Pfad betrifft, und sehen ihren gebundenen Test rot
   werden — Drift am eigenen Werk.

### Der vertikale Schnitt (noch final festzulegen)

SDD lebt vom **dünnen vertikalen Schnitt**: *ein* Kommando, end-to-end. Kandidaten:

- **`import`** *(Favorit)* — Rule/Skill aus zentraler Stelle in ein Ziel-Repo
  holen. Reichste Regeln: korrektes Level (Project vs. User), kein stilles
  Überschreiben, Formatvalidierung, Umgang mit Progressive-Disclosure-Anhängen
  (`reference.md`).
- **`compare` / `diff`** — zwei Versionen eines Skills/einer Rule vergleichen.
  Gut, aber weniger Seiteneffekt-Regeln.
- **`add` / `register`** — neuen Skill/Rule zentral aufnehmen + validieren.

**Entscheidung vertagt:** Der Schnitt wird erst festgelegt, *nachdem* Akt 0
(Context-Vokabular) ausgearbeitet ist — denn daraus ergibt sich, welcher Befehl
die didaktisch reichsten Regeln liefert. Aktueller Favorit bleibt `import`.

---

## 3. Die Leitidee des Tages (die eine Botschaft)

> **Nicht-deterministischer Generator (der KI-Agent) gegen deterministischen
> Prüfer (der Contract) — das ist die einzige Architektur, die KI-Coding
> bändigt.**

Alles im Workshop dient dieser einen Erkenntnis. Die Herleitung in vier
Gedankenschritten (aus `spec-driven-development-erkenntnisse.md`, Kap. 8):

1. **Befund:** Fast alle SDD-Frameworks haben driftende Specs.
2. **Warum:** Eine Prosa-Spec ist passiv — nichts prüft je, ob der Code ihr noch
   entspricht.
3. **Einsicht:** „Lebendig" heißt nicht „wird gepflegt", sondern „**kann nicht
   unbemerkt falsch werden**". Das schafft nur Enforcement.
4. **Sprung:** Eine Spec, die sich selbst erzwingt, ist ein **Contract** — Code
   wird daraus generiert UND dagegen geprüft.

---

## 4. Didaktisches Prinzip: Erleben statt Zuhören

Pro Akt ein **Sandwich**: kurzer Impuls (10–15 Min) → Teilnehmer machen es
selbst → kurze Reflexion. Die zwei stärksten geplanten Erlebnisse:

1. **Example Mapping live** (Akt 3a) — kollaborativ, ohne Code. Der Aha-Moment:
   rote Karten (offene Fragen) tauchen auf, *bevor* eine Zeile Code existiert.
2. **Drift zum Anfassen** (Akt 3c) — mit dem vorhandenen
   `examples-for-bdd/bdd/`-Beispiel als Vorlage: Test ist an ein Szenario
   gebunden, Code ändern → Test wird rot. Die Spec zieht den Code.

---

## 5. Die wichtigsten Design-Entscheidungen (und ihre Begründung)

Diese Diskussionspunkte sind der eigentliche Kern der Session. Wer den Plan
weiterführt, sollte sie verstehen, weil sie erklären, *warum* der Ablauf so und
nicht anders aussieht.

### 5.1 „Drift selbst erleben" gehört NICHT in Akt 1

**Ursprünglicher Fehler:** geplant war, dass Teilnehmer in Akt 1 durch freies
Vibe Coding „Drift erleben". Das ist mechanisch falsch.

**Korrektur:** Drift ist ein **Evolutions-Phänomen** — frisch erzeugter Code
*kann nicht driften*, weil es noch nichts gibt, wovon er abweichen könnte. Der
Schmerz in Akt 1 ist ein **anderer: Mehrdeutigkeit.** Lässt man 20 Leute
dieselbe Aufgabe „vibe-coden", bekommt man 20 verschiedene Ergebnisse — weil der
Agent die ungesagten Regeln *raten* muss. Genau dieser Schmerz motiviert
Specification by Example.

**Drift wird zum Payoff später** (Akt 3c): Dann existieren gebundene Tests,
Code-Änderung macht einen Test rot — *jetzt* ist Drift erlebbar, als Belohnung,
nicht als Hook.

### 5.2 Der fehlende Grundgedanke: Specification by Example (Gojko Adzic)

In allen drei Decks steckt die Idee implizit (Example Mapping, Gherkin, „grüne
Karten = Saat der Tests"), wird aber nie benannt. Sie gehört **prominent an den
Anfang von Akt 2** als das *Warum hinter dem Warum*:

> Beispiele sind die präziseste Sprache, in der Mensch und Maschine sich über
> *Verhalten* einigen können — und dasselbe Beispiel ist gleichzeitig der
> Akzeptanztest. Eine Spezifikation aus Beispielen ist lebende, ausführbare
> Dokumentation.

Das ist die Klammer, die Example Mapping → Gherkin → Cucumber zu *einer* Idee
verbindet statt zu drei Techniken.

### 5.3 Zwei verschiedene „Warum" — deshalb fliegt AI-TDD raus

| | **Spec Driven / Specification by Example** | **AI-TDD (EXACT)** |
|---|---|---|
| Frage | Wie einigen wir uns präzise auf das **WAS** — und bleibt das wahr? | Wie hindern wir den Agenten am Über-Engineeren / Vibe-Coden? |
| Wurzel | Gojko Adzic — geteilte Sprache + lebende Doku | Disziplin der Red-Green-Schleife, Code-Qualität |
| Ergebnis | Korrektheit + driftfreie Verhaltens-Wahrheit | Wartbarkeit, weniger Komplexität |

Die beiden treffen sich erst beim *Mechanismus* (etwas an Tests binden), aber die
**Motivation ist verschieden**. Für einen SDD-fokussierten Tag reiten wir
konsequent das linke Warum.

**Entscheidung:** AI-TDD wird ein **eigener Folge-Workshop**. Aus dem heutigen
Hauptfaden fliegt der TDD-Hands-on-Block raus. Das **659-Run-Experiment** aus dem
EXACT-Deck bleibt aber als **ein Evidenz-Slide in Akt 2** erhalten — als Beleg
„Struktur schlägt Vibe, empirisch gemessen" (v6.1-hybrid × Example-Mapping
erreicht perfekte externe Verifikation 1.00 vs. 0.28 bei reinem Vibe Coding).

### 5.4 Context Engineering kommt komplett an den ANFANG

**Begründung:** Beim Tool-Projekt ist Context-Wissen nicht nur Methodik, sondern
**Pflichtenheft-Input** — das Produkt verwaltet ja Skills/Subagents/Rules/Context
Files. Man muss diese Begriffe, ihre Levels und Progressive Disclosure kennen,
bevor man ein Tool dafür baut. Zusätzlich motiviert die „Smart Zone"
(Lost-in-the-middle, endlicher nutzbarer Kontext) *warum* SDD-Frameworks Arbeit
in kleine Pakete zerlegen. Damit ist Akt 0 gleichzeitig **Vokabular + Domäne +
Methodik-Motivation**.

### 5.5 Example Mapping in Gruppen statt einzeln (einzige Ausnahme)

Der Auftraggeber wünscht Einzelarbeit. Für **Example Mapping** wird eine Ausnahme
empfohlen: Die Kerndisziplin ist *„facilitate, do not invent"* — der Facilitator
fragt, andere liefern die Domänenregeln. Allein am Laptop entfällt genau der
Aha-Moment (rote Karten entstehen im Dialog). Empfehlung: **diese eine Phase in
4er-Gruppen**, der Rest einzeln. *(Vom Auftraggeber noch zu bestätigen.)*

---

## 6. Der rote Faden im Überblick

```
Akt 0  CONTEXT ENGINEERING   — Methodik + Domänenwissen fürs Tool
       Skills/Subagents/Rules/Context Files, Levels (Enterprise/Project/User),
       Progressive Disclosure, Smart Zone / Lost-in-the-middle.
       = Vokabular UND Pflichtenheft. Begründet „klein schneiden".

Akt 1  DER SCHMERZ           — den Schnitt vibe-coden, OHNE Spec
       20 Leute, 20 verschiedene Annahmen → Mehrdeutigkeit als gefühltes Problem.

Akt 2  WARUM SDD             — Specification by Example (Gojko Adzic) + SDD-These
       Beispiele = geteilte Sprache = Akzeptanztest.
       „Spec driftet → Contract." 659-Run-Experiment als Evidenz.

Akt 3a EXAMPLE MAPPING       — auf den einen Schnitt        (4er-Gruppen, analog/Miro)
Akt 3b GRÜNE KARTEN → GHERKIN— die Verhaltens-Spec           (einzeln, mit AI)
Akt 3c BINDEN → ROT/GRÜN     — Contract, Drift erlebbar       (einzeln, mit AI)
       Agent implementiert den Schnitt gegen die roten Tests.

SCHLUSS  Dogfooding + Transfer · AI-TDD = Ausblick auf Folge-Workshop.
```

---

## 7. Detaillierter Stundenplan (Vorschlag, ganzer Tag)

> Zeiten sind ein Startgerüst und werden nach der ersten Durchführung justiert.
> Puffer ist bewusst eingebaut, weil Hands-on-Phasen bei 20 Einzelplätzen
> streuen.

| Zeit | Block | Modus | Inhalt / Erlebnis |
|---|---|---|---|
| **09:00** | **Akt 0 — Context Engineering** (45') | Impuls + Mini-Demo | Begriffe: Skills, Subagents, Rules, Context Files. Levels (Enterprise/Project/User), `CLAUDE.md`, Progressive Disclosure. Smart Zone / Lost-in-the-middle als Mini-Demo. Überleitung: *Das ist die Domäne unseres Tools — und der Grund, warum wir klein schneiden.* |
| **09:45** | **Akt 1 — Der Schmerz** (30') | Einzeln, mit AI | Tool-Idee vorstellen, den vertikalen Schnitt (`import`) **ohne Spec** vibe-coden lassen. Danach Ergebnisse vergleichen → jeder hat andere Annahmen getroffen (Level? Überschreiben? Format?). Schmerz = Mehrdeutigkeit. |
| 10:15 | **Pause** (15') | | |
| **10:30** | **Akt 2 — Warum SDD** (45') | Impuls + Diskussion | Specification by Example (Gojko Adzic). SDD: Spec→Plan→Implement. Framework-Landschaft kurz (spec-kit/OpenSpec/BMAD). Kernthese: Prosa-Specs driften → Contract. 659-Run-Experiment als Evidenz. |
| **11:15** | **Akt 3a — Example Mapping** (75') | **4er-Gruppen** (analog/Miro) | Den Schnitt als Story durchspielen: Story (gelb), Regeln (blau), Beispiele (grün), offene Fragen (rot). Aha: rote Karten vor dem Code. *„facilitate, do not invent."* |
| 12:30 | **Mittag** (60') | | |
| **13:30** | **Akt 3b — Grüne Karten → Gherkin** (45') | Einzeln, mit AI | Grüne Karten in Gherkin-Requirements übersetzen (Domänen-Form: Requirement → Scenario, Given/When/Then). Agent hilft formulieren, Teilnehmer prüfen. `.feature` ist stack-neutral. |
| **14:15** | **Akt 3c — Binden → rot/grün** (90') | Einzeln, mit AI | Step Definitions im eigenen Stack schreiben (Vorlage: `examples-for-bdd/bdd/`). `strict`-Modus setzen. Agent implementiert den Schnitt gegen die **roten** Tests bis grün. Dann: Code ändern → Test wird rot = **Drift erlebbar**. |
| 15:45 | **Pause** (15') | | |
| **16:00** | **Schluss — Dogfooding + Transfer** (45') | Plenum | Die eine Architektur (Generator vs. Prüfer). Ehrliche Grenzen: grün = Konformität ≠ Korrektheit; nur vertestetes Verhalten ist geschützt; nicht alles ist gherkin-bar. Ausblick AI-TDD-Folge-Workshop. „Was nehme ich Montag mit?" |
| **16:45** | **Ende** | | |

---

## 8. Inhaltliche Bausteine je Akt (Tiefe für die spätere Ausarbeitung)

### Akt 0 — Context Engineering
Quelle: `Context Engineering - English (1).pdf`.
- Prompt- vs. Context-Engineering; Context window; Kuration.
- „More does not mean better"; Needle-in-the-haystack; Lost-in-the-middle
  (Primacy/Recency, schwacher Recall in der Mitte); **Smart Zone vs. Dumb Zone**.
- Context-Management-Strategien: Write / Select / Compress / Delegate.
- Context-File-Kategorien: Plans, AGENT.md/CLAUDE.md, Docu, Rules, Workflows.
- `CLAUDE.md`-Levels (Enterprise/Project/User) + Commands (`/init`, `/memory`,
  `@import`).
- Rules (topic-specific, conditional via `paths:`), Progressive Disclosure
  (SKILL.md verweist auf reference.md/forms.md — „nur laden, wenn gebraucht").
- Subagents & Agent Teams (nur als Begriffe, da Domäne des Tools).

### Akt 1 — Der Schmerz
- Hook: „guys, i'm under attack"-Tweet (Vibe Coding gone wrong) aus EXACT-Deck.
- Übung: `import`-Befehl ohne Spezifikation bauen lassen.
- Reflexion: Annahmen sichtbar machen (Level, Overwrite, Format, Fehlerfälle).

### Akt 2 — Warum SDD
Quellen: `Spec Driven Development - ... .pdf`, `spec-driven-development-erkenntnisse.md`.
- Specification by Example (Gojko Adzic) als Fundament.
- SDD-Definition; Spec vs. Plan (WAS/WARUM vs. WIE); Litmustest (Satz löschen:
  ändert sich, *was ein Domänenexperte zustimmt* → Spec; *was ein Entwickler
  baut* → Plan).
- Die zwei Achsen: Abstraktion (WAS/WIE) und **Enforcement** (generativer Input
  vs. erzwungener Contract).
- Framework-Vergleich kurz: spec-kit (Feature/Branch, kein Merge zurück),
  OpenSpec (Domäne, Delta-Merge, lebende Spec), BMAD (Wegwerf-Planung).
- Kernthese: alle predigen „spec as source of truth", nur OpenSpec baut die
  Mechanik — aber **„lebend" ≠ „erzwungen"**. → Contract.
- Evidenz: EXACT 659-Run-Experiment (verification_pct 0.28 → 1.00).

### Akt 3a — Example Mapping
Quelle: `EXACT Coding (1).pdf` (Example-Mapping-Slides).
- Vier-Farben-Framework: Story (gelb), Rules (blau), Examples (grün),
  Questions (rot).
- 3 Amigos / 20–30-Min-Format; „facilitate, do not invent".
- Output: Story-Kontext + Edge-Case-Beispiele, die zur Saat der Tests werden.

### Akt 3b — Grüne Karten → Gherkin
Quelle: `spec-driven-development-erkenntnisse.md` (Kap. 11–12), OpenSpec-Form.
- Domänen-Form: Domäne (Datei) → Requirement → Scenario.
- Grüne Karten = Proto-Given/When/Then → Gherkin-Szenarien.
- Disziplin: Anforderung gehört in Given/When/Then, nie in Freitext-Beschreibung.

### Akt 3c — Binden → rot/grün
Quelle: `examples-for-bdd/bdd/` (lauffähig), Erkenntnisse Kap. 12–14.
- „Binden" vs. „generieren": nur Binden schließt die Schleife (kein Drift).
- Zwei Schichten: `*.feature` (Prosa, lesbar) + `steps/*` (Code, einmalig).
- `strict`-Modus ist konstituierend (undefined step → roter Lauf).
- Wann wird rot: ⟺ Widerspruch zwischen Szenario-Behauptung und Code-Verhalten.
- Drift-Demo: Wert über die Grenze ändern → Test rot.

### Schluss
- Synthese: Example Mapping (Korrektheit) → Gherkin (lesbar, Domänen-Form) →
  gebunden + strict → rot/grün in CI = erzwungene, lebende Verhaltens-Spec.
- Ehrliche Grenzen (aus Erkenntnisse Kap. 16): grün = Konformität nicht
  Korrektheit; nur szenarioisiertes Verhalten geschützt; Freitext wird nie
  erzwungen; Vokabular-Disziplin nötig; nicht alles ist gherkin-bar.

---

## 9. Offene Punkte (vor der Durchführung zu klären)

1. **Example Mapping in 4er-Gruppen?** — Empfehlung ausgesprochen, vom
   Auftraggeber noch zu bestätigen (einzige Abweichung von „Einzelarbeit").
2. **Welcher vertikale Schnitt?** — `import` (Favorit) vs. `compare` vs. `add`.
   Entscheidung nach finaler Ausarbeitung von Akt 0.
3. **Vorbereitete Artefakte:** zentrale „Beispiel-Registry" mit ein paar
   Demo-Rules/Skills, damit alle dieselbe Ausgangsbasis fürs `import`-Beispiel
   haben (stack-neutral, z.B. einfache `.md`-Dateien).
4. **BDD-Vorlage je Stack:** `examples-for-bdd/bdd/` ist in JS. Für andere Stacks
   ggf. Hinweise/Links bereitstellen (pytest-bdd, SpecFlow, Cucumber-JVM), da
   freie Stack-Wahl gilt.
5. **Miro/Analog** für Example Mapping vorbereiten.

---

## 10. Bewusst ausgelagert / nicht im Scope

- **AI-TDD (Red-Green-Refactor mit dem Agenten)** → eigener Folge-Workshop. Nur
  als Ausblick + ein Evidenz-Slide (659 Runs) im heutigen Tag.
- **Vollständigkeit des Tools** — nur ein vertikaler Schnitt wird durchgezogen.
- **Tiefe Contract-Formen jenseits von Gherkin** (OpenAPI, JSON Schema, IaC,
  Policy) — nur als Einordnung erwähnt, dass Gherkin die *Verhaltens*-Wahrheit
  ist, nicht die ganze Wahrheit.
