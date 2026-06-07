# Spec-Driven Development — Erkenntnisse

> Gesammelte inhaltliche Erkenntnisse aus einer ausführlichen
> Analyse-Session zu Spec-Driven Development (SDD), den Frameworks
> spec-kit / OpenSpec / BMAD, und der Frage, wie man Specs von
> *gepflegt* zu *erzwungen* bringt (BDD/Cucumber, Drift-Detection).
>
> Bewusst rein konzeptionell — keine Workshop- oder Vermittlungsplanung.

---

## 0. Die zentrale These in einem Satz

> **Fast alle SDD-Frameworks predigen „Spec als Source of Truth", aber
> kaum eines erzwingt es. „Lebendig" bedeutet nicht „wird gepflegt",
> sondern „kann nicht unbemerkt falsch werden". Und das schafft nur
> etwas, das eine Maschine erzwingt — ein Contract.**

Alles Weitere ist die Herleitung und Ausarbeitung dieses Satzes.

---

## 1. Was ist eine Spec wirklich? (Der harte Kern)

Es gibt sehr wohl eine trennscharfe Definition — sie lautet aber *nicht*
„fachlich vs. technisch". Der Lackmustest:

> Eine **Spec** ist ein präskriptiver, deklarativer Soll-Zustand, der
> *vor* der Implementierung existiert. Eine *gute (technische)* Spec ist
> eine, gegen die eine **Maschine prüfen kann, ob die Realität noch
> übereinstimmt**.

### Die zwei Achsen (statt „fachlich/technisch")

Die übliche Unterscheidung „fachliche vs. technische Spec" ist die
*weniger* wichtige. Schärfer sind zwei orthogonale Achsen:

**Achse 1 — Abstraktion: WAS/WARUM vs. WIE.**
- WAS/WARUM = das *Business*-Requirement, in Domänensprache; ein
  Domänenexperte könnte zustimmen. → gehört in die **Spec**.
- WIE/WANN = die technische Umsetzung: Dateien, Schritte, Architektur,
  Tests. → gehört in den **Plan**.
- Lackmustest: *Lösche einen Satz. Ändert er, was ein Domänenexperte
  zustimmt? → Spec. Ändert er nur, was ein Entwickler baut? → Plan.*

**Achse 2 — Enforcement: generativer Input vs. erzwungener Contract.**
*(Das ist die eigentlich interessante, oft übersehene Achse.)*
- **Generativ:** eine `spec.md` / ein PRD ist ein einmaliger Input, aus
  dem Code entsteht. Danach *driftet* sie — nichts prüft je wieder, ob
  der Code ihr noch entspricht.
- **Erzwungener Contract:** OpenAPI, JSON Schema, Protobuf, Terraform,
  Typen, Tests. Code wird *daraus* generiert UND zur Laufzeit/CI geprüft,
  ob die Realität *davon* abweicht.

Je technischer eine Spec wird, desto mehr nähert sie sich einem
deklarativen, maschinell erzwingbaren Desired State — und genau an dem
Punkt hört „Spec" auf, ein gut gemeintes Dokument zu sein, und wird ein
Vertrag.

---

## 2. Drei Disziplinen, die oft fälschlich alle „Spec" heißen

Ein häufiger Denkfehler: alles Mögliche „Spec" zu nennen. Sauber
getrennt sind es **drei verschiedene Disziplinen**:

1. **SDD i.e.S.** — Intent → Code (spec-kit, OpenSpec). Spec als Stufe im
   Generierungs-Workflow.
2. **Contract-first Engineering** — OpenAPI, GraphQL SDL, Protobuf,
   AsyncAPI, JSON Schema. Spec als *erzwungener Vertrag*.
3. **Standardisierung / Platform Engineering** — Templates, Blueprints,
   ADRs, Golden Paths. Konventionen + Wiederverwendung, *nicht* „mehr
   Specs".

### Abgrenzungen, die wichtig sind

- **ADRs sind keine Specs.** Eine ADR ist *retrospektiv und begründend*
  („warum haben wir X so entschieden"). Eine Spec ist *prospektiv und
  vorschreibend* („was soll X tun"). ADRs gehören zur Governance-/
  Principles-Ebene, nicht zur Verhaltens-Spec.
- **Eine „Service-Blaupause" ist keine Spec, sondern ein Template/
  Scaffold.** Eine Spec ist *abstrakt und unvollständig* (Beschreibung).
  Eine Blaupause ist *konkret und vollständig* (lauffähiger Code zum
  Kopieren). Das ist Platform Engineering (golden path / reference
  implementation / cookiecutter), nicht SDD.

---

## 3. Wo es WIRKLICH „echte" (erzwingbare) Specs gibt

Wendet man den Lackmustest „deklarativer Soll-Zustand, maschinell gegen
die Realität prüfbar" an, ergibt sich eine klare Liste dessen, was
echten Spec-Charakter (Achse 2) hat:

- **API-Contracts:** OpenAPI (sync), AsyncAPI (events/messaging),
  GraphQL SDL, gRPC/Protobuf
- **Daten:** JSON Schema, Avro/Protobuf-Schemas, DB-Migrationen als
  deklariertes Schema
- **Infrastruktur:** Terraform/Pulumi — IaC *ist* eine Spec;
  `terraform plan` = „weicht Realität vom Soll ab?"
- **Policy:** OPA/Rego, Kyverno — deklarativ, was erlaubt ist
- **Verhalten/Tests:** Gherkin/BDD, Property-based-Test-Specs — Tests
  *als* ausführbare Spec
- **UI:** Design Tokens, Storybook als Komponenten-Contract

Gemeinsamer Nenner ist *nicht* „technisch", sondern **declarative
desired state mit Drift-Detection**.

---

## 4. OpenSpec — im Detail (das einzige mit lebender Verhaltens-Spec)

OpenSpec (Fission-AI) ist das einzige der drei Frameworks, bei dem
„lebende Source of Truth" auch *mechanisch* stimmt.

### Das Zwei-Verzeichnis-Modell

```
openspec/
├── specs/          ← lebende Source of Truth: "wie das System HEUTE ist"
│   ├── auth/spec.md
│   ├── payments/spec.md
│   └── ui/spec.md
└── changes/        ← Vorschläge: "was sich ÄNDERN soll"
    ├── add-dark-mode/
    │   ├── proposal.md      (warum + scope)
    │   ├── design.md        (wie, technisch)
    │   ├── tasks.md         (checkliste)
    │   └── specs/ui/spec.md ← DELTA, nicht voll
    └── archive/
        └── 2025-01-24-add-2fa/   (fertige changes mit Historie)
```

Der Trick: `specs/` wird beim Entwickeln **nie direkt angefasst**. Man
arbeitet immer in `changes/<name>/`, und erst beim **Archivieren** wird
das Delta in `specs/` hineingemerged. Dadurch bleibt die lebende Spec
zwingend aktuell — Mergen ist der einzige Weg, einen Change
abzuschließen.

### Granularität — drei Ebenen

Eine Spec ist **eine Domäne / ein Bounded Context**, nicht ein Feature:

```
spec.md  (= eine Domäne, z.B. auth/)
 └── ## Requirements
      └── ### Requirement: User Authentication   ← kleinste Einheit (add/mod/remove)
           The system SHALL issue a JWT on login.
           └── #### Scenario: Valid credentials  ← Given/When/Then, testbar
           └── #### Scenario: Invalid credentials
```

Also: **Domäne (Datei) → Requirement → Scenario.** Ein Feature entsteht
*nicht* als eigene Spec, sondern als ein/mehrere neue **Requirements
innerhalb einer bestehenden Domänen-Spec**. Deshalb wuchert `specs/`
nicht: es wächst pro Domäne, nicht pro Feature. Das Feature ist
vergänglich (lebt im `changes/`-Ordner, wandert ins Archiv); die
Domänen-Spec ist permanent.

### Progressive Rigor (orthogonal zur Granularität)

- **Lite Spec (Default):** wenige behavior-first Requirements, Scope, ein
  paar Akzeptanz-Checks. Die meisten Changes bleiben hier.
- **Full Spec:** nur bei höherem Risiko — Cross-Team, API-/Contract-
  Changes, Migrationen, Security.

### Das Delta-Format (der Kern für Brownfield)

Im Change-Ordner liegt kein Voll-Spec, sondern ein Delta gegen die
lebende Spec:

```markdown
# Delta for Auth

## ADDED Requirements
### Requirement: Two-Factor Authentication
The system MUST support TOTP-based 2FA.
#### Scenario: 2FA login
- GIVEN a user with 2FA enabled ...

## MODIFIED Requirements
### Requirement: Session Expiration
The system MUST expire sessions after 15 minutes.
(Previously: 30 minutes)

## REMOVED Requirements
### Requirement: Remember Me
(Deprecated in favor of 2FA.)
```

Merge-Regeln beim Archive (Match-Schlüssel = Requirement-Name):

| Sektion | Merge-Regel |
|---|---|
| `ADDED` | Requirement wird an die Domänen-Spec angehängt |
| `MODIFIED` | gleichnamiges Requirement wird ersetzt |
| `REMOVED` | Requirement wird gelöscht |

Deshalb können zwei parallele Changes dieselbe `auth/spec.md` anfassen,
ohne zu kollidieren — solange sie *verschiedene* Requirements treffen.
`bulk-archive` erkennt Überlappungen und merged chronologisch.

### Lebenszyklus & „Actions, not phases"

```
/opsx:propose add-2fa  →  changes/add-2fa/ entsteht (proposal, delta, design, tasks)
/opsx:apply            →  Code wird gegen tasks.md geschrieben
/opsx:verify           →  prüft Code gegen die Artefakte (s.u.)
/opsx:sync             →  Delta wird in specs/ gemerged
/opsx:archive          →  changes/add-2fa/ → changes/archive/2025-01-24-add-2fa/
```

Das Schema (`schema.yaml`) definiert nur einen *Dependency-Graph*
(`tasks` braucht `specs`+`design`), aber das sind **Enabler, keine
Gates** — man darf `design` überspringen, Specs nach dem Design
schreiben etc. Das ist OpenSpecs Identität gegen spec-kits starre Phasen
(„fluid not rigid, iterative not waterfall, easy not complex,
brownfield-first").

### OpenSpecs „Drift Detection" = `/opsx:verify` — und ihre Grenze

`verify` prüft drei Dimensionen:

| Dimension | Was geprüft wird |
|---|---|
| **Completeness** | Alle Tasks erledigt? Jedes Requirement im Code? Szenarien getestet? |
| **Correctness** | Entspricht Implementierung dem Spec-*Intent*? Edge Cases? |
| **Coherence** | Spiegeln sich Design-Entscheidungen im Code? |

**Aber das ist agentische, LLM-basierte Prüfung „on demand", kein
deterministischer Enforcement-Mechanismus:**

| | OpenSpec `verify` | OpenAPI / `terraform plan` |
|---|---|---|
| Wer prüft? | ein LLM, prosaisch | eine Maschine, deterministisch |
| Wann? | wenn jemand es aufruft | jeder CI-Lauf, jeder Request |
| Ergebnis | „⚠ wahrscheinlich nicht abgedeckt" | rot/grün, exakt |
| Reproduzierbar? | nein (LLM-Varianz) | ja |
| Blockierend? | nein („won't block archive, but surfaces issues") | ja |

**Fazit OpenSpec:** Es macht die Spec zur *gepflegten* Source of Truth
(durch erzwungenen Merge beim Archive = Prozessdisziplin) — **nicht zur
*erzwungenen***. Die Spec driftet technisch trotzdem; OpenSpec macht das
Driften nur sichtbarer und billiger zu reparieren. Belegzitate aus der
Doku: *„won't block archive, but it surfaces issues"*, *„it will warn
you"*. → mahnt, erzwingt nicht.

---

## 5. spec-kit — im Detail (lautestes Versprechen, schwächste Mechanik)

spec-kit (GitHub) behauptet auf Philosophie-Ebene am radikalsten *„code
serves specifications … maintaining software means evolving
specifications"* — liefert es auf Mechanik-Ebene aber am wenigsten.

### Was `/speckit.specify` real erzeugt

```
specs/
├── 001-create-taskify/      ← Feature 1, eigener Branch 001-...
│   ├── spec.md
│   ├── plan.md
│   ├── data-model.md
│   ├── contracts/
│   └── tasks.md
├── 003-chat-system/         ← Feature 3, eigener Branch 003-...
│   └── ...
```

| | OpenSpec | spec-kit |
|---|---|---|
| Spec organisiert nach | **Domäne** | **Feature / Git-Branch** |
| Was ist permanent? | die Domänen-Spec | der Branch + Feature-Ordner |
| Merge zurück in lebende Spec? | **ja** | **nein** |
| Delta-Format? | ja | nein — jede Spec ist voll |
| Wo lebt „der aktuelle Stand"? | `specs/<domäne>/spec.md` | nirgends zentral — verstreut über N Feature-Ordner |

Jede `spec.md` ist eine **per-Feature-Momentaufnahme**, festgenagelt an
einen Git-Branch. Es gibt **keinen Mechanismus**, der Feature-Specs in
eine lebende Domänen-Spec zurückführt. Ändert Feature 007 das
Session-Timeout von Feature 001, *widersprechen* sich die Specs — und
nichts gleicht das ab. spec-kit fällt damit genau in die Drift-Falle,
gegen die es anschreibt.

### Die Constitution — lebend, aber NICHT die Verhaltens-Spec

spec-kit *hat* ein lebendes, gepflegtes Dokument: die Constitution
(`.specify/memory/constitution.md`). Belege aus dem
`constitution`-Command:
- Wird aktualisiert, nicht weggeworfen: *„always operate on the existing
  constitution file … overwrite"*.
- Versioniert wie Software: Semantic Versioning (MAJOR/MINOR/PATCH),
  `Ratified`/`Last Amended`-Daten, Sync Impact Report.
- Hat „Drift"-Mechanik **nach innen**: bei jedem Update läuft eine
  Consistency-Propagation-Checklist gegen `plan-template.md`,
  `spec-template.md`, `tasks-template.md` etc. Plus „Constitution
  Check"-Gates in jeder `plan.md`.

**Aber:** Die Constitution enthält **Prinzipien / Governance** („TDD ist
Pflicht", „≤3 Projekte", „Library-First", „kein Future-Proofing") —
*nicht* Verhalten. Sie ist projekt-*neutral*: man könnte sie auf eine
Foto-App, ein Spiel oder einen Webshop kleben. Sie sagt, *nach welchen
Regeln* gebaut wird, nicht *was* das System tut.

| | spec-kit **Constitution** | OpenSpec **Domain-Specs** |
|---|---|---|
| Inhalt | Prinzipien / Governance | Verhalten (Requirements + Szenarien) |
| Ebene | *Wie* das Team baut | *Was* das System tut |
| Lebt es? | ja, versioniert | ja, Delta-Merge |
| Drift wogegen? | gegen die Templates (intern) | gegen den Code (via verify) |

**Fazit spec-kit:** hält ein *Regel*-Dokument lebendig; das einzige
Framework mit lebendem *Verhaltens*-Dokument ist OpenSpec. „executable
specifications" heißt bei spec-kit „die Spec generiert Code", **nicht**
„die Spec wird gegen den Code erzwungen". Generierung ist Einbahnstraße;
die Rückkopplung (Enforcement) fehlt.

---

## 6. BMAD — im Detail (Planungs-Pipeline, gar kein lebendes Spec)

BMAD (Build More Architect Dreams / Breakthrough Method for Agile
AI-Driven Development) ist ein anderes Tier: eine **phasenbasierte
Planungs-Dokument-Pipeline** entlang des Agile-SDLC. Keine Drift
Detection, kein lebendes Spec.

```
Phase 1 Analysis → Phase 2 Planning → Phase 3 Solutioning → Phase 4 Implementation
brief/PRFAQ      → prd.md           → architecture.md (ADRs) → epics/stories → code
```

Drei Belege, dass es kein lebendes Spec gibt:

1. **4-Phasen-Pipeline, kein Lebenszyklus.** „Each document becomes
   context for the next phase." Jedes Dokument ist Input für die nächste
   Phase, danach erledigt.
2. **Man soll die Artefakte wegwerfen.** Aus `established-projects.md`,
   Step 1, wörtlich: *„Clean Up Completed Planning Artifacts … Archive
   them, delete them, or rely on version history."* Ein lebendes Spec
   löscht man nicht — BMAD-Artefakte sind **Wegwerf-Gerüst**.
3. **Synchronisation läuft rückwärts.** `bmad-document-project` **scannt
   den Code und generiert Doku neu** → der **Code ist die Source of
   Truth**, Doku wird bei Bedarf aus ihm nachgezogen. Das Gegenteil von
   Drift Detection. Plus `project-context.md` als „Constitution"
   (Konventionen/Regeln, kein Verhalten) — dieselbe Governance-Ebene wie
   spec-kits Constitution.

---

## 7. Der Framework-Vergleich (Gesamtbild)

| Framework | Spec organisiert nach | Spec lebt weiter? | Source of Truth | Drift-Behandlung |
|---|---|---|---|---|
| **spec-kit** | Feature / Git-Branch | ❌ Snapshot pro Branch | faktisch der **Code** | keine |
| **BMAD** | SDLC-Phase | ❌ Wegwerf nach Fertigstellung | der **Code** (document-project zieht Doku nach) | keine (rückwärts: Code→Doku) |
| **OpenSpec** | **Domäne** | ✅ ja (Delta-Merge) | die **Spec** | agentisch (verify), nicht deterministisch |

**Drei Tools, drei Aufträge** (gegen Äpfel-Birnen-Vergleich):
- **spec-kit** = Greenfield-Generator (reichste Templates +
  Constitution-Gates). Stark für 0→1.
- **BMAD** = Agile-Prozess-in-a-Box (12+ Rollen-Agenten,
  brainstorm→deploy). Stark für strukturierte Planung.
- **OpenSpec** = Brownfield-Spec-Pflege (delta-basiert, fluid). Stark für
  „bestehendes System weiterentwickeln".

**Kernaussage:** Alle drei predigen „Spec als Source of Truth". Nur
OpenSpec baut die Mechanik, die das wahr macht. spec-kit behauptet es am
lautesten und liefert am wenigsten; BMAD behauptet es gar nicht erst.
**Aber: „lebend" ≠ „erzwungen".** Echte deterministische Drift-Detection
(CI rot/grün gegen Contract) hat **keines** der drei.

---

## 8. Die Brücke: Warum Prosa-Specs grundsätzlich driften

Der Übergang vom Tool-Vergleich zur eigentlichen These.

> Das Problem ist nicht, dass die Frameworks schlechte Specs schreiben —
> es ist, dass **Prosa-Specs grundsätzlich nicht lebendig bleiben
> können**. Was lebendig bleibt, ist nur, was eine Maschine erzwingen
> kann. Und das ist ein Contract.

Die 4-Schritt-Kette:

1. **Befund:** Fast alle SDD-Frameworks haben driftende Specs (OpenSpec
   mildert es durch Prozessdisziplin).
2. **Warum?** Eine Prosa-Spec ist passiv. Nichts prüft je, ob der Code
   ihr noch entspricht.
3. **Einsicht:** „Lebendig" heißt nicht „wird gepflegt" — es heißt „kann
   nicht unbemerkt falsch werden". Das schafft nur Enforcement.
4. **Sprung:** Eine Spec, die sich selbst erzwingt, ist ein **Contract**
   — Code wird daraus generiert UND dagegen geprüft.

### Was ist eine „Prosa-Spec"?

„Prosa" = normaler Text in natürlicher Sprache (Gegensatz zu Code/
formaler Notation). Eine Prosa-Spec beschreibt gewünschtes Verhalten in
Sätzen, die ein Mensch versteht, aber eine **Maschine nicht ausführen
oder prüfen** kann.

| | Prosa-Spec | Contract |
|---|---|---|
| Sprache | natürliche Sprache | formal / maschinenlesbar |
| Wer versteht es? | nur Mensch (oder LLM) | Mensch UND Maschine |
| Prüfbar? | nein, nur interpretierbar | ja, deterministisch (CI rot/grün) |
| Beispiele | PRD, `spec.md`, Requirements | OpenAPI, JSON Schema, Typen, Tests |

### Das Spektrum zunehmender Erzwingbarkeit

```
weniger erzwingbar  ───────────────────────────────►  mehr erzwingbar
 PRD / brief    Prosa-Spec      Gherkin-Szenario     OpenAPI / JSON Schema
 (BMAD)         (spec-kit)      (OpenSpec)           Typen / Tests / IaC
   │               │                 │                      │
 driftet        driftet         fast Test           kann nicht unbemerkt
 sofort         leise           (ungebunden)        driften → CI rot/grün
```

Je weiter rechts, desto „lebendiger" — nicht weil jemand fleißiger
pflegt, sondern weil eine Maschine das Driften verhindert. **Contract-
first ist nicht das Gegenteil von SDD — es ist SDD am erzwingbaren Ende
des Spektrums.**

### Das Scharnier: OpenSpecs `Scenario:` ist zu 90% schon ein Testfall

```gherkin
#### Scenario: Valid credentials
- GIVEN a user with valid credentials
- WHEN the user submits the login form
- THEN a JWT token is returned
```

Es ist nur an keinen ausführbaren Test gebunden. **Binde es an einen
Test → aus der prosaischen Spec wird ein Contract.** Aus „⚠ wahrscheinlich
nicht abgedeckt" wird rot/grün. Genau diesen Schritt geht keines der drei
Frameworks.

---

## 9. Das richtige Modell: zwei Schichten, nicht „so viel Contract wie möglich"

Der naheliegende Schluss „dann mache ich so viel Contract wie möglich"
ist die *falsche Dosierung*. Drei Korrekturen:

1. **Nicht alles *kann* ein Contract sein.** Ein Contract existiert nur an
   einer *formalen Grenze* (API, Daten, Typen, Infra, Policy,
   Verhalten-an-der-Kante). Das *Warum* / die Geschäftsregel-Abwägung
   besteht den Lackmustest nicht — und das ist okay.
2. **Contracts haben Kosten.** Ein Contract ist rigide, kämpft gegen
   Iteration, muss gepflegt werden. „Alles vertraglich" ersetzt
   Code-Wartung durch Contract-Wartung. (Vgl. OpenSpecs „progressive
   rigor, lite by default", spec-kits „Simplicity Gate".)
3. **Ein Contract prüft Konformität, nicht Korrektheit-der-Absicht.** Eine
   OpenAPI-Spec garantiert die richtige *Form*, nicht das richtige *Tun*.
   Voll auf Contracts + Warum-Schicht weggelassen = perfekt konforme,
   falsche Software. Der Contract ist das Geländer, nicht das Ziel.

### Zwei Schichten

```
Intent-Schicht (Achse 1, Prosa)     → WARUM + Business-Regeln ohne formale Grenze
   sagt dem Agenten: wohin            → kein Maschinen-Check, nur Mensch/LLM
        │
        ▼  kristallisiert an jeder formalen Grenze zu …
Anchor-Schicht (Achse 2, Contract)  → API / Daten / Typen / Infra / Tests
   sagt dem Agenten: was du nicht     → deterministisch, CI rot/grün
   brechen darfst
```

Merksatz: **Contracts an jede Naht, Prosa in jeden Raum.** Rigor an den
Grenzen, Urteilsvermögen im Inneren. Nicht maximieren — *platzieren*.

### Die Sequenz (oft übersehen)

Ein Contract ist nur wertvoll, wenn er *stabil* ist. Harten Contract für
etwas zu schreiben, das man noch exploriert, churnt nur. Also: erst
unscharf explorieren (Intent), dann die Grenze einfrieren (Contract),
dann dagegen generieren. **Contract-first *innerhalb* eines verstandenen
Bereichs, exploration-first auf System-Ebene.**

### Warum das die Agenten-Varianz bändigt

Ein Contract ist ein **deterministisches Orakel**, ein Coding-Agent ist
**nicht-deterministisch**. Nicht-deterministischer Generator gegen
deterministischen Prüfer = die einzige Architektur, die Agenten-Varianz
bändigt. Der Contract ist der Teil des Kontexts, **der nicht lügen kann**:
Kommentare lügen, Prosa-Specs driften, aber ein bestehender
Contract-Test ist Ground Truth.

---

## 10. Beziehung zwischen Contract und Korrektheit (wichtige Präzisierung)

Formulierung „man vertestet die Requirements" ist leicht schief.
Präziser: **man testet den Code *gegen* die Requirements.** Das
Requirement (Szenario) ist das *Orakel*, nicht der Prüfling.

- **Grün beweist Konformität, nicht Richtigkeit.** Ein grüner Test
  beweist „Code = Szenario", nicht „Szenario ist sinnvoll".
- **Korrektheit der Szenarien** sichert man *vorher* — durch das
  Herausfragen von Regeln + Beispielen vom Domänenexperten (Example
  Mapping). Example Mapping sichert *Richtigkeit*; Tests sichern
  *Konformität*. Zwei verschiedene Jobs.

---

## 11. Example Mapping als Quelle der erzwingbaren Szenarien

Example Mapping beantwortet die Frage „woher kommen die Given-When-Then-
Szenarien überhaupt?". Es ist eine kollaborative Discovery-Methode:

| Karte | Bedeutung |
|---|---|
| **Story** (gelb) | die eine User-Story |
| **Rules** (blau) | Geschäftsregeln |
| **Examples** (grün) | konkrete `Input → erwartetes Ergebnis` = Proto-Given-When-Then |
| **Open Questions** (rot) | ungeklärte Punkte; werden NICHT geraten |

Kerndisziplin: **facilitate, do not invent** — der Facilitator kennt die
Domäne nicht, der User schon. Niemals Regeln/Beispiele erfinden, immer
fragen. Eine erfundene Map sieht vollständig aus, kodiert aber die
Gusses des Facilitators.

Die grünen Karten *sind* die Saat für die erzwingbaren Szenarien. Damit
schließt sich die Kette:

```
Example Mapping        →  ringt die richtigen Regeln + Beispiele ab   (Korrektheit)
   ↓ grüne Karten
Gherkin-Requirements   →  Verhaltens-Spec, nach Domänen sortiert       (OpenSpec-Form)
   ↓ als Test ausgeführt (gebunden, NICHT generiert)
Tests grün/rot in CI   →  erzwingt Konformität, erkennt Drift          (die fehlende Frontlinie)
```

---

## 12. BDD / Cucumber — die Spec ausführbar machen

Das ist seit ~20 Jahren erprobt (Cucumber, SpecFlow, Behave, pytest-bdd)
unter dem Namen BDD bzw. „executable specifications".

### „generieren" vs. „binden" — der entscheidende Unterschied

**„generieren" ist eine Einbahnstraße und driftet** (genau spec-kits
Sünde, eine Ebene tiefer):

| | (a) Szenario **wird** der Test | (b) Test wird aus Szenario **generiert** |
|---|---|---|
| Mechanik | `.feature`-File wird direkt ausgeführt; G/W/T an „step definitions" gebunden | Szenario erzeugt separate Testdatei |
| Artefakte | **eines** (Szenario = Test) | **zwei** (Szenario + Test) |
| Drift möglich? | **nein** — nichts, wovon es abweichen könnte | **ja** — zwischen Szenario und Test |

**Nur Variante (a) schließt die Schleife.** Bei (b) driften nach der
einmaligen Generierung Szenario und Test auseinander — das Problem ist
nur verschoben.

### Die zwei Schichten (Leserlichkeit bleibt erhalten)

```
features/*.feature   ← LAYER 1: PROSA. Domänenexperte liest. = die Spezifikation
        │  (BDD-Runner verbindet beide zur Laufzeit)
steps/*.js           ← LAYER 2: CODE. Entwickler schreibt EINMAL, wiederverwendbar
```

Entscheidend: Das `.feature`-File sieht „tot" und „ausführbar"
**identisch** aus. Ausführbarkeit kommt von *unten* (Step Definitions)
dazu, nicht von oben. Man tauscht die lesbare Spec *nicht* gegen
Test-Code — man fügt eine Übersetzungsschicht *darunter* hinzu. **Die
Leserlichkeit leidet nicht.**

### Beispiel (`.feature` = Spec)

```gherkin
Feature: Session management

  Scenario: Session expires after inactivity
    Given a logged-in user
    When 15 minutes pass without activity
    Then the session is invalid

  Scenario: Activity keeps the session alive
    Given a logged-in user
    When 10 minutes pass without activity
    Then the session is still valid
```

### Beispiel (Step Definitions = Übersetzungsschicht, „Step Definitions" ist der Fachbegriff)

```javascript
Given("a logged-in user", function () {
  this.system.login();
});

// {int} ist ein PLATZHALTER. Die konkrete Zahl (15, 10, 20) steht NIE
// im Step-File — sie wird zur Laufzeit aus dem Szenario als Parameter
// reingereicht. Ein Step deckt damit ALLE Zahlen ab.
When("{int} minutes pass without activity", function (minutes) {
  this.system.advanceMinutes(minutes);
});

Then("the session is invalid", function () {
  assert.strictEqual(this.system.sessionIsValid(), false);
});
```

### Wichtige Klarstellungen

- **Steps + Feature ZUSAMMEN sind die Tests.** Es gibt kein drittes
  „eigentliches Test-File". Die Assertion (`assert.strictEqual(...)`)
  steckt schon in der Step Definition. Arrange/Act/Assert sind über
  beide Files verteilt, aber vollständig.
- **Neuer Test = meist nur Prosa.** Bei bekanntem Vokabular schreibt man
  nur ein neues Szenario (kein Code). Nur bei neuem Vokabular ergänzt man
  *einmal* eine Step Definition. Die Code-Schicht wächst sublinear, die
  Prosa-Schicht frei.
- **In echten Projekten** rufen die Steps den *echten* Code auf (nicht
  ein Spielzeug-System). Nur das echte System hinter den Steps kommt
  real dazu — die Tests selbst sind mit Feature + Steps komplett.
- **Naming:** `.feature` ist **Pflicht** (Cucumber findet Feature-Files
  nur daran, sprachübergreifend). Der Step-File-Name (`*.steps.js`) ist
  **reine Konvention** — Cucumber lädt einfach die in `require`/`import`
  angegebenen Files. Python: `steps/*.py`, Java: `*Steps.java`.

---

## 13. Wann wird ein Test rot? Die genaue Regel

> **ROT entsteht ⟺ (was das Szenario behauptet) ≠ (was der Code tut).**
> Nicht „bei jeder Änderung" — nur bei einem **Widerspruch** zwischen
> Spec und Code.

Gegen die Logik `sessionIsValid = loggedIn && idleMinutes < 15`:

**Rote Fälle (Widerspruch):**
- Behauptung umdrehen: `15 min → still valid` (Code sagt invalid) → ROT
- Zahl über die Grenze: `10 min → still valid` zu `20 min → still valid`
  (bei 20 abgelaufen) → ROT
- Genau auf die Grenze: `15 min → still valid` (deckt `<` vs `<=` auf) → ROT
- Knapp unter Grenze: `14 min → invalid` (bei 14 noch gültig) → ROT
- **Neue Anforderung, die der Code nicht erfüllt:** neues Szenario
  `10 min → invalid` → ROT (= produktive To-do-Liste; Spec zieht den Code)

**Grüne Fälle (kein Widerspruch):**
- Wert auf derselben Seite ändern: `15 min → invalid` zu `30 min →
  invalid` (30 ist auch abgelaufen) → GRÜN
- Nur Prosa ändern: `Scenario:`-Titel, `Feature:`-Beschreibung,
  Kommentar → GRÜN

### Die drei Ausgänge bei „Quatsch" im Feature-File

Gherkin erlaubt absichtlich **Freitext-Beschreibungen** (kein `#`-
Kommentar, wird aber wie einer ignoriert). Daraus folgt eine „weiche
Zone":

```
Quatsch ins .feature-File
   │
   ├─ als Beschreibung (unter Feature: / vor erstem Step)  → GRÜN  ⚠️ still geschluckt
   │
   ├─ als Zeile zwischen/nach Steps                        → ROT (Parse-Fehler beim Laden)
   │
   └─ als Step-Zeile (Given/When/Then…) ohne Definition    → ROT (undefined, unter strict)
```

**Anforderung-als-Beschreibung-Falle:** Wer eine Anforderung als
Beschreibungstext statt als Szenario formuliert, bekommt eine Spec, die
nie geprüft wird. **Disziplin-Regel: Eine Anforderung steht in
Given/When/Then, niemals im Beschreibungstext.**

---

## 14. Zwei Arten von Drift — und strict mode

| Drift | Bedeutung | Signal |
|---|---|---|
| **Szenario vs. Code** | die Spec behauptet etwas, das der Code nicht tut | ROT (failed assertion) — **immer** |
| **Szenario vs. Test-Existenz** | ein Szenario hat *gar keine* Step-Definition (Spec-Abdeckung > Test-Abdeckung) | UNDEFINED — **nur ROT unter `strict`** |

### strict mode

- `strict: true` steht in der **Cucumber-Konfiguration** (`cucumber.json`/
  Profil), **NICHT** im Step-File.
- **Verwechslungsgefahr:** `assert.strictEqual` (im Step-File) ist etwas
  *völlig anderes* — das ist nur eine Node-Assertion (`===` statt `==`),
  betrifft *eine* Prüfung. `strict: true` betrifft den *ganzen Lauf*.
- Effekt: ein **undefined step** macht den Lauf rot (exit-code ≠ 0) statt
  ihn still als „pass" zu zählen.
- **strict ist konstituierend, nicht optional.** Ohne strict rutscht eine
  Spec-Zeile, die nichts erzwingt, still als grün durch — Drift kehrt
  zurück. Nicht mal auf den Framework-Default verlassen; explizit setzen.

### Wann es rot wird: Laufzeit, nicht „Build"

Cucumber hat keinen Compile-/Build-Schritt. Der undefined-Fehler fällt
**beim Ausführen der Tests** auf (typischerweise in der CI-Pipeline; der
Cucumber-Lauf endet mit exit ≠ 0 → Pipeline schlägt fehl). Bei
TypeScript gäbe es davor echtes Kompilieren, aber ein fehlendes Step ist
*kein* Compile-Fehler — es fällt trotzdem erst zur Laufzeit auf.

---

## 15. Die Grenze: Richtung Code → Spec ist NICHT deterministisch erzwingbar

Die Drift-Garantie gilt nur für **vertestetes Verhalten**. Zwei Lücken:

1. **Neues Feature ohne Szenario** → kein Test, nichts wird rot.
2. **Alten Code anfassen, den kein Szenario abdeckt** → bleibt grün,
   selbst wenn man ihn kaputt macht.

Cucumber prüft *Konformität zu vorhandenen Szenarien*, nicht
*Vollständigkeit der Abdeckung*. Die Garantie ist immer nur so groß wie
die Szenario-Abdeckung.

- Richtung **Spec → Code** ist erzwingbar (strict: Szenario ohne Step →
  rot).
- Richtung **Code → Spec** ist *prinzipiell nicht* erzwingbar: „existiert
  für diesen Code ein Requirement?" kann keine Maschine beantworten, weil
  sie das nie geschriebene Requirement nicht kennt. Bleibt menschliche
  Disziplin.

### Was die Lücke messbar (nicht deterministisch) schließt: Coverage

Es gibt Code-Coverage-Tools, die explizit messen, welche Code-Zeilen
*während des Cucumber-Laufs* ausgeführt wurden:
- **JS:** `nyc` (Istanbul) oder `c8` über den Cucumber-Lauf.
- Analog: pytest-bdd + coverage.py (Python), SpecFlow + Coverlet (.NET),
  Cucumber-JVM + JaCoCo (Java).

```bash
npx nyc --check-coverage --lines 80 cucumber-js --config <pfad>/cucumber.json
```

Mit einer CI-Schwelle (`--check-coverage --lines 80`) wird aus der
Warnung ein Gate: neuer Code ohne Szenario senkt die Quote → Build rot.

**Grenze:** Coverage misst nur, *ob* eine Zeile ausgeführt wurde, nicht
*ob ein sinnvolles Requirement* dafür existiert. Es schließt die Lücke
„neuer Code ohne Szenario" *messbar*, aber Korrektheit der Szenarien
bleibt menschliche Disziplin.

---

## 16. Die Synthese (das Gesamtbild)

```
Example Mapping   → die richtigen Regeln + Beispiele         (Korrektheit)
   ↓ grüne Karten
Gherkin-Specs      → lesbar, nach Domänen sortiert (OpenSpec-Form)
   ↓ gebunden (nicht generiert), strict mode
Rot / Grün in CI   → erzwingt Konformität + (mit Coverage) Vollständigkeit
   ↓
= die erzwungene, lebende Source of Truth, die keines der drei Tools liefert
```

OpenSpecs Domänen-Form + Example Mapping als Discovery + ausführbare
Bindung (BDD, strict) = die **erzwungene, lebende Verhaltens-Spec**.

### Die ehrlichen Grenzen (damit nichts überverkauft wird)

1. **Grün = Konformität, nicht Korrektheit.** Der Test prüft Code gegen
   Spec, nicht ob die Spec sinnvoll ist. (→ Example Mapping.)
2. **Nur szenarioisiertes Verhalten ist geschützt.** Richtung Code→Spec
   ist nicht deterministisch erzwingbar; Coverage mildert.
3. **Freitext im Feature-File wird nie erzwungen.** Anforderung gehört in
   Given/When/Then, nicht in die Beschreibung.
4. **Vokabular-Disziplin nötig** — uneinheitliche Sätze sprengen die
   Step-Schicht (Example Mapping erzeugt geteiltes Vokabular).
5. **Nicht alles ist gherkin-bar** — Performance, Security-Posture,
   Architektur-Constraints brauchen andere Contract-Formen (OpenAPI,
   Schemas, IaC, ADRs). Die Gherkin-Spec ist die *Verhaltens*-Wahrheit,
   nicht die ganze Wahrheit.

---

## 17. Begriffsdisziplin (wiederkehrende Verwechslungsquellen)

- **Spec (Verhalten)** vs. **Plan/Design (Technik)** vs. **Constitution
  (Governance/ADR)** — alle drei Tools mischen die; sauber trennen.
- **„lebendig" (gepflegt)** vs. **„erzwungen" (kann nicht unbemerkt
  falsch werden)** — OpenSpec hat ersteres, keines das zweite.
- **„generieren" (Einbahnstraße, driftet)** vs. **„binden" (eine Quelle,
  driftet nicht)**.
- **`assert.strictEqual`** (Node-Assertion, eine Prüfung) vs. **`strict:
  true`** (Cucumber-Modus, ganzer Lauf).
- **Konformität** (Code = Szenario) vs. **Korrektheit** (Szenario ist
  sinnvoll).
- **Step Definitions** = der korrekte Begriff für die JS/TS-Files (nicht
  „Cucumber-Definition").

---

## 18. Bezug zu den Artefakten in diesem Repo

- `sdd-comparison-slides.md` — Framework-Vergleich (lebende SoT, drei
  Aufträge, Kernaussage, Lücke).
- `bdd-living-spec-slides.md` — BDD als erzwungene Spec (Problem → Idee →
  zwei Schichten → kein Drift → zwei Drift-Arten → strict → Synthese).
- `examples/bdd/` (bzw. `examples-for-bdd/bdd/`) — lauffähiges Beispiel:
  `features/session.feature`, `steps/session.steps.js`, `cucumber.json`
  (`strict: true`), `README.md`. Demonstriert beide Drift-Arten zum
  Anfassen.
- `.claudesdd/` — abgespecktes eigenes SDD-Setup (Spec/Plan/Direct-
  Tracks, WAS/WIE-Litmus-Test); Example Mapping als optionaler Spec-
  Track-Einstieg integriert (Szenarien leben im Mapping-File → Plan-
  Testing, nicht in der Spec; kein Test-Binding — das ist der separate
  `/test-list` TDD-Pfad).
