# Workshop „Spec Driven Development & BMAD" — Ablauf & Konzept (Ablauf4-v2, deduktiv + dualer Bau)

> **Was ist neu gegenüber `Ablauf4.md`?** Ablauf4 war der erste Wurf des
> deduktiven Ansatzes (Wurzel → Frameworks → Erkenntnisse → eigene Form).
> Ablauf4-v2 schärft ihn anhand vier in der Planungssession getroffener
> Entscheidungen:
>
> 1. **Framework-Tour auf drei eingedampft** (spec-kit / OpenSpec / BMAD) —
>    Kiro/Tessl raus — und **entlang einer gemeinsamen Achse verglichen: den vier
>    Phasen Spec → Plan → Tasks → Implement.**
> 2. **Unsere eigene Form ist explizit 4-phasig** (Spec → Plan → **Tasks** →
>    Implement). Die fehlende Tasks-Phase wird ergänzt — aber als **schlanker,
>    bedingter Layer**, nicht als weiteres Framework.
> 3. **BMAD wird dual gebaut.** Die Teilnehmer bauen denselben Schnitt **einmal
>    mit BMAD und einmal mit unserer Form** → echter, selbst erlebter Vergleich.
>    (Erfüllt den Abstract, der BMAD prominent verspricht.)
> 4. **Geteilte Discovery, Bau bis zum charakteristischen Punkt.** Example Mapping
>    läuft *einmal* gemeinsam; beide Pfade bauen nicht bis zum fertigen Feature,
>    sondern bis zu dem Punkt, der sie auszeichnet. Der Konzeptbogen wird dafür
>    gestrafft.
>
> Geschrieben, damit es auch jemand versteht, der nicht dabei war: nicht nur
> *was*, sondern *warum* — inkl. verworfener Alternativen.
>
> **Stand:** 2026-06-07. **Rückgrat:** `spec-driven-development-erkenntnisse.md`.
> **Historie & Framework-Mechanik:** recherchiert & gegengeprüft (§10).

---

## 0. Ausgangslage & Auftrag

**Titel (echt, aus `workshop-info.md`):**
„**Spec Driven Development & BMAD – von Vibe Coding zu professioneller
Softwareentwicklung**"

**Abstract (echt, gekürzt):** KI-Coding-Tools methodisch in einen
Softwareentwicklungsprozess integrieren. Im Zentrum **Spec-Driven Development als
übergeordnete Methodik**, herangeführt über **Context Engineering**. Aufbauend
lernen die Teilnehmenden die **BMAD-Methode** kennen (Rollen + strukturierte
Artefakte). Ziel: ein **reproduzierbarer, übertragbarer Prozess**; hands-on an
eigenen Projekten; **direkt weiterverwendbare Artefakte** mitnehmen. Zielgruppe:
Entwickler:innen, Tech Leads, technisch versierte Product Owner.

> **Konsequenz für die Planung (wichtig):** Der Abstract nennt **BMAD
> namentlich** und verspricht „die BMAD-Methode kennenlernen". Ein harter Cut
> (BMAD nur erwähnen) würde die Erwartung enttäuschen. Deshalb: **dualer Bau**
> (§2.3, §3.4). Gleichzeitig verspricht der Abstract „weiterverwendbare
> Artefakte" → das sind unsere mitnehmbaren **SDD-Skills** (§5).

**Lernziele:**
1. verstehen, **was SDD ist** — von der Wurzel her, nicht als Tool-Rezept;
2. die **drei wichtigsten Frameworks** vergleichend kennen (Stärken & Schwächen),
   entlang der vier Phasen;
3. **praktisch gebaut** haben — am durchgehenden Beispielprojekt, **dual** (BMAD
   vs. eigene Form);
4. die eigenen **Erkenntnisse** (Spec als Source, Example Mapping, Cucumber als
   Brücke Code↔Spec) angewendet haben;
5. die **SDD-Skills mitnehmen** und weiterarbeiten können.

**Rahmenbedingungen:**

| Parameter | Entscheidung |
|---|---|
| **Dauer** | **~7 h hart** inkl. Pausen (Konzeptbogen darf dafür gestrafft werden, §7.6) |
| **Teilnehmer** | erste AI-Coding-Erfahrung (Cursor/Claude Code), keine SDD-Experten |
| **Setup** | Eigene Laptops, Agenten-Tool lauffähig; **BMAD vorab installiert** (§9, kritisch) |
| **Arbeitsform** | Einzelarbeit (Ausnahme: Example Mapping in Gruppen) |
| **Tech-Stack** | Freie Wahl je Teilnehmer (gemeinsamer Nenner = die Spec) |
| **Fokus** | **SDD + Contracts**, mit BMAD als verglichenem Gegenpol |

**Vorhandenes Material im Repo:**
- `spec-driven-development-erkenntnisse.md` — konzeptionelles Rückgrat.
- `.claudesdd/` — **unsere eigene SDD-Form als Skills** (Basis, wird erweitert,
  s. §5): `skills/sdd/`, `skills/example-mapping/`, `docs/how-to-write-specs.md`,
  `docs/how-to-write-plans.md`, `rules/development-workflow.md`.
- `Spec Driven Development - English PD (2).pdf`, `EXACT Coding (1/2).pdf`,
  `Context Engineering - English (1).pdf` — Vortrags-Decks.
- `examples-for-bdd/bdd/` — **lauffähiges** Cucumber-Beispiel (strict).
- `slides-v1/` — bestehendes Deck (induktiv gebaut; teils wiederverwendbar).
- `workshop-info.md` — echter Titel + Abstract.

---

## 1. Die Leitidee (der rote Faden)

Ablauf1–3 hängen an „Vibe → Spec → Vertrag" (schmerz-zuerst). Ablauf4-v2 bleibt
**deduktiv** und hängt an einem ruhigeren Satz:

> **Eine Spezifikation existiert seit jeher, um eine Verständnisgrenze zu
> überbrücken — zwischen dem, der etwas *will*, und dem, der es *baut*. Der
> KI-Agent ist nur der neueste „Bauer". Und wie im Bauwesen und Vertragsrecht ist
> eine Spec erst wertvoll, wenn man *gegen sie abnehmen* kann.**

Die *eine Botschaft* bleibt — aber sie wird **hergeleitet**, nicht erlitten:

> **Nicht-deterministischer Generator (der KI-Agent) gegen deterministischen
> Prüfer (der Contract) — die einzige Architektur, die KI-Coding bändigt.**

### Die zweite Achse von Ablauf4-v2: das Schwere-Spektrum

Weil BMAD dual gebaut wird, kommt eine Erkenntnis-Achse dazu, die alle vier
Phasen-Frameworks ordnet:

> **Alle ernsthaften Methoden — spec-kit, OpenSpec, BMAD und unsere Form —
> glauben an „scale to the change". Sie unterscheiden sich nur im *Default-
> Gewicht*: BMAD ist schwer per Default (lean nur über `quick-dev`); unsere Form
> ist schlank per Default (schwer nur, wenn das Vorhaben es erzwingt).**

Das ist der faire Rahmen, in dem BMAD *nicht abgewertet*, sondern *eingeordnet*
wird — und in dem unsere eigene Form ihre Berechtigung aus einer bewussten
Default-Entscheidung zieht, nicht aus „BMAD ist schlecht".

### Die Lernkette des Tages

```
Wurzel & Zweck der Spec  → WOZU Specs? (Abnahme über eine Verständnisgrenze)
   ↓ in die Welt schauen
3 Frameworks × 4 Phasen   → Spec→Plan→Tasks→Implement: dieselbe Idee, 3 Schweregrade
   ↓ Erkenntnis
„lebend ≠ erzwungen"      → keines erzwingt die Spec deterministisch → Contract
   ↓ unsere eigene 4-Phasen-Form, dual gegen BMAD gebaut
Example Mapping (geteilt) → die RICHTIGEN Regeln + Beispiele   (Korrektheit)
   ↓ grüne Karten speisen BEIDE Pfade
Pfad A: BMAD             Pfad B: unsere Form
PRD→Arch→Epics→Stories   Gherkin→Contract→grün→Drift rot
   ↓ Synthese
= selbst erlebter Vergleich: schwer-per-Default vs. schlank-per-Default,
  und der Contract als das, was keiner von beiden deterministisch liefert
```

---

## 2. Das durchgehende Projekt: CLI-Tool zur Artefakt-Verwaltung

**Produktidee (unverändert):** Ein **CLI-Tool**, das AI-Coding-Artefakte zentral
verwaltet — Claude-Code-Skills, OpenCode-Skills, Rule-Files, `CLAUDE.md`s,
**MCP-Server-Configs** — und sie per Kommando in Ziel-Repos **importiert**,
bestehende **ergänzt** (`augment`), **diff**t.

### 2.1 Scope: breite Vision, ein Schnitt — beim dualen Bau noch enger

| Kommando (Vision) | Im Workshop |
|---|---|
| **`import`** | **der eine Schnitt** — dual gebaut (BMAD + eigene Form) |
| `augment`, `diff`, `mcp add`, `list` | nur Vision (Rahmen) |

> **Wichtig für den dualen Bau:** Zwei Pfade in ~4 h Hands-on gehen nur, wenn der
> Schnitt **klein** ist. Empfehlung: den `import`-Schnitt auf **einen
> regelreichen Kern** verengen — z.B. „importiere eine Rule, entscheide bei
> Konflikt per **SemVer-Vergleich**, ob überschrieben wird". Das ist (a) reich an
> Regeln für Example Mapping, (b) deterministisch genug für den Contract/Drift-
> Moment, (c) klein genug, dass beide Pfade bis zu ihrem charakteristischen Punkt
> kommen.

### 2.2 Warum die Idee passt (kurz)

- **Meta-Dogfooding:** Das Tool verwaltet genau die Artefakte, über die der
  Workshop lehrt — die SDD-Skills (§5) sind selbst Testdaten des Tools.
- **Echt & mitnehmbar**, existiert real in Ansätzen (`.claude/`-dotfiles, `ruler`).
- **Regelreich:** Import hat viele Geschäftsregeln (Level? überschreiben?
  Versions-Drift? MCP-Secrets?) — Beispiel-Mapping-Futter.

### 2.3 Warum dualer Bau (die zentrale Weiche)

- **Der Abstract verspricht BMAD prominent.** Dual bauen löst die Erwartung ein,
  ohne dass wir BMAD schönreden müssen.
- **Der Vergleich ist selbst erlebt, nicht behauptet.** Die Teilnehmer *spüren*
  den Unterschied zwischen BMADs Rollen/PRD/Epics-Schwere und unserer schlanken,
  contract-getriebenen Form — am selben Schnitt, aus derselben Discovery.
- **Verworfene Alternativen:** *Harter Cut* (Abstract verfehlt); *nur BMAD-Demo*
  (sicherer, aber kein selbst erlebter Vergleich); *nur quick-dev zeigen*
  (verkauft genau die versprochenen Rollen/Artefakte unter Wert). Siehe §7.4.

---

## 3. Der konzeptionelle Bogen — gestrafft (Akt 1–3, ~75 min)

Gestrafft gegenüber Ablauf4 (~95 min), weil BMAD ohnehin praktisch erlebt wird
und der duale Bau Zeit braucht (§7.6).

### Akt 1 — Was *ist* eine Spezifikation, und warum gibt es sie? (~30 min)

**Ziel:** Den Begriff „Spec" von der Wurzel her aufladen, damit „Contract" als
logische Konsequenz erscheint, nicht als Tool-Mode.

**(a) Wurzel.** lat. `specere` (sehen) → `species` (Art/Gestalt) → spätlat.
`specificare` (einer Art zuordnen) → `specificatio`. **Spezifizieren = das
Unbestimmte bestimmt, das Allgemeine einzeln & sichtbar machen.** Wortgeschichte:
„specification" technisch ab **1833 im Patentrecht** (prüfbarer Anspruch!), „spec"
ab 1956. → *Schon das erste technische „Spec" war ein rechtlich prüfbarer
Anspruch.*

**(b) Fünf Zwecke** (strukturieren den ganzen Tag):

| # | Zweck | Kurz |
|---|---|---|
| 1 | **Arbeitsteilung** Wollen ↔ Bauen | eine Partei beschreibt WAS, eine andere baut |
| 2 | **Abnahme / Akzeptanz** | objektives Kriterium für „fertig & richtig" |
| 3 | **Haftung / Vertrag** | geschuldetes Werk; Abweichung = Mangel; Beweismittel |
| 4 | **Austauschbarkeit / Standard** | Normen → austauschbare Teile (Whitworth 1841) |
| 5 | **Kommunikation über Grenzen** | persistentes, eindeutiges, geteiltes Wissen |

> **Die Beobachtung, die den Tag trägt (Zweck 1+2):** Eine Spec überbrückt eine
> Verständnisgrenze — und ist erst wertvoll, wenn man **gegen sie abnehmen** kann.

**(c) Spec in der Software — was schiefging (kompakt).**
- **Royce 1970:** zeichnete das Phasendiagramm, nannte es *nicht* „Waterfall" und
  *warnte davor*; DoD-STD-2167 (1985) machte die starre Variante zum Standard.
- **IEEE 830:** SRS mit Qualitätskriterium **„verifizierbar"** — *1998 gefordert,
  heute erst eingelöst.*
- **Design by Contract** (Meyer/Eiffel, ab 1986): prüfbare Verträge im Code —
  *der Begriff „Contract" ist 40 Jahre alt.*
- **Agile 2001:** „working software over comprehensive documentation" — die Spec
  verschwand nicht, sie wanderte in **Tests, Akzeptanzkriterien, Typen,
  Contracts.**

> Ehrlichkeitsregel (§10): Royce-Mythos & Adzic-Zuschreibung korrekt, nicht
> überverkauft.

### Akt 2 — Drei Frameworks × vier Phasen (~25 min)

**Ziel:** *Nicht* die Tools lehren, sondern zeigen: **dieselbe Vier-Phasen-Idee
(Spec → Plan → Tasks → Implement) in drei Schweregraden** — fair, mit Stärken &
Schwächen. Reiner Input + *eine* Matrix als Leitfolie.

**Die Leitmatrix (gemeinsame Achse — der didaktische Kern dieses Akts):**

| Phase | **spec-kit** | **OpenSpec** | **BMAD (v6, BMM)** |
|---|---|---|---|
| **Spec** | `/speckit.specify` (+`/clarify`) → `spec.md` | `/opsx:propose` → `proposal.md` + **Delta-Specs** | `bmad-prd` → PRD (FR1, FR2…) |
| **Plan** | `/speckit.plan` → `plan.md`, `data-model`, `contracts/` | `design.md` (optional) | `bmad-create-architecture` → `architecture.md` + ADRs |
| **Tasks** | `/speckit.tasks` → `tasks.md`, **nach User Story** (`[P]`,`[US#]`) | `tasks.md` — flache, gruppierte Checkliste (aus specs+design) | `bmad-create-epics-and-stories` → Epics→Stories, **FR-Coverage-Map** |
| **Implement** | `/speckit.implement` (+`/analyze`) | `/opsx:apply` | `bmad-dev-story`-Loop (+`code-review`) |
| **Default-Gewicht** | **schwer** (strikte Gates) | **leicht** (actions, not phases) | **am schwersten** (Rollen, frische Chats) |
| **Scale-down?** | `lean`-Preset | von Natur aus fluid | `bmad-quick-dev` (überspringt Phasen 1–3) |

**Pro Framework genau ein charakteristischer Zug + ein Problem:**
- **spec-kit:** stärkste *Gates* (`/clarify`, read-only `/analyze`, Constitution);
  Task-Breakdown **nach User Story** (jede Story ein testbares MVP-Inkrement).
  *Problem:* schwergewichtig; Story-Unabhängigkeit oft unrealistisch; „Specs
  ausführbar" bleibt Vision (keine deterministische Bindung).
- **OpenSpec:** **brownfield-first** via Delta-Specs (ADDED/MODIFIED/REMOVED),
  fluider DAG statt Phasen. *Problem:* keine Story-Sharding-Stufe; `verify` ist
  LLM-basiert & nicht-blockierend → gepflegt, nicht erzwungen.
- **BMAD:** vollster Lebenszyklus, **Rollen** (Analyst/PM/Architect/Dev),
  **Architecture-first vor Stories**, lückenlose FR→Epic-**Traceability**.
  *Problem:* 8–12 Workflows in je frischem Chat; Persona-/Approval-Ballast;
  Artefakt-Drift; Phase-4-Automatisierung noch unfertig.

**Die faire Pointe (Überleitung):** Alle drei zwingen Intention vor Code und
schaffen ein versionierbares Artefakt zwischen Mensch & Agent — die Wahl ist
Ceremony/Brownfield/Lock-in, nicht „besser/schlechter". **Aber keines schließt
deterministische Drift-Detection gegen den Code:** jede „Verifikation"
(`/analyze`, `/opsx:verify`, BMADs `code-review`) ist **LLM-Urteil** —
probabilistisch, meist nicht-blockierend.

### Akt 3 — Unsere Erkenntnisse: von „lebend" zu „erzwungen" (~20 min)

**Ziel:** Die Framework-Lücke aus Akt 2 mit *unseren* Erkenntnissen schließen und
den Bauplan unserer Form auf den Tisch legen. Quelle: `erkenntnisse.md` Kap. 8–12.

- **Prosa driftet** (passiv, nichts prüft). „Lebendig" = „kann nicht unbemerkt
  falsch werden" → nur durch Erzwingung.
- **Der Sprung:** Ein Given-When-Then-Szenario ist zu ~90 % schon ein Test —
  **binden statt generieren** → Contract, rot/grün statt „⚠ wahrscheinlich".
- **Die Brücke (unsere Form):** Specification by Example → Example Mapping →
  Gherkin (OpenSpec-Domänenform) → **gebunden via Cucumber, strict** → CI rot/grün.
  Historisch fundiert: ATDD (Cunningham 2002) → BDD (North 2006) → SbE (Adzic
  2011, *popularisiert*, §10) → Example Mapping (Wynne ~2015); verwandt: Evans'
  Ubiquitous Language (2003).
- **Ehrliche Grenze:** Grün = **Konformität**, nicht **Korrektheit**. Korrektheit
  holt Example Mapping. **Contracts an jede Naht, Prosa in jeden Raum.**

> **Überleitung zum dualen Bau:** „Ihr habt drei Frameworks gesehen. Jetzt baut
> ihr denselben Schnitt zweimal — einmal mit **BMAD** (Rollen, PRD, Epics) und
> einmal mit **unserer schlanken, contract-getriebenen Form** — und urteilt
> selbst."

---

## 4. Der duale Hands-on-Teil (Akt 4–7, ~240 min)

Kern von Ablauf4-v2. Geteilte Discovery, dann zwei Pfade bis zum
**charakteristischen Punkt** (nicht bis zum fertigen Feature).

### Akt 4 — Vision, Setup & geteilte Discovery (~65 min)

- **Vision-Pitch (Plenum, kurz):** volle Tool-Vision → Fokus auf den verengten
  `import`-Schnitt (§2.1).
- **Setup (einzeln, ~15 min):** Repo anlegen, Sprache wählen. **BMAD ist vorab
  installiert** (§9) — hier nur verifizieren, nicht installieren.
- **Example Mapping — EINMAL, gemeinsam, in Gruppen (~50 min):** Story (gelb) /
  Rules (blau) / Examples (grün) / Open Questions (rot) für den `import`-Schnitt.
  *„facilitate, don't invent."* → mit dem **`example-mapping`-Skill**.
  **Dieselben Karten speisen beide Pfade** — das isoliert den Vergleich sauber:
  gleicher Ausgangspunkt, zwei Formalisierungen.

### Akt 5 — Pfad A: BMAD bis zum charakteristischen Punkt (~70 min)

**Bewusst zuerst** (dramaturgisch: Schwere spüren). Die Example-Mapping-Karten
sind der Input. Die Teilnehmer fahren den BMAD-BMM-Flow am `import`-Schnitt:

```
bmad-prd  →  bmad-create-architecture  →  bmad-create-epics-and-stories
          →  bmad-create-story  →  erster bmad-dev-story-Lauf
```

**Charakteristischer Punkt = „Stories liegen vor + erster `dev-story`-Lauf".**
*Nicht* bis zum fertigen Feature — der Aha liegt im *Weg* (Rollen, PRD→Arch→Epics,
Traceability, frische Chats, viele Approvals), nicht im fertigen Code.

> *Falls die Zeit kippt:* `bmad-quick-dev` als Notausgang — aber dann verliert man
> genau die Rollen/Artefakte, die der Abstract verspricht. Primär den vollen Pfad
> fahren.

### Akt 6 — Pfad B: unsere Form bis zum charakteristischen Punkt (~70 min)

**Bewusst danach** (Erleichterung + der Payoff als Höhepunkt). Dieselben Karten,
jetzt durch unsere 4-Phasen-Form:

```
grüne Karten → Gherkin (gherkin-spec)  →  binden via Cucumber + strict (bind-contract)
            →  Agent baut gegen-grün  →  Drift-Moment (Zahl/Grenze ändern → CI rot)
```

**Charakteristischer Punkt = „Contract grün + Drift rot erlebt".** Plus, wenn das
Vorhaben groß genug wirkt: die **Tasks-Phase** (§5.2) einmal anwenden — Plan in
kontext-große Tasks brechen — um die 4. Phase praktisch zu zeigen.

> Sicherheitsnetz: `examples-for-bdd/bdd/` als Referenz, falls jemand beim
> Cucumber-Bootstrapping hängt.

### Akt 7 — Synthese & Vergleich (~35 min)

- **Der selbst erlebte Vergleich (Plenum):** Was hat sich bei BMAD wie angefühlt,
  was bei unserer Form? Die Schwere-Achse: *schwer-per-Default vs.
  schlank-per-Default*. Wo glänzt BMAD wirklich (Discovery, Rollen, Traceability,
  große Vorhaben)? Wo unsere Form (Schlankheit, der **erzwungene Contract**, den
  BMAD nicht hat)?
- **Die eine Architektur:** Generator vs. Prüfer. Ehrliche Grenzen.
- **Context Engineering, rekursiv (kurz):** wenn Zeit — eine `CLAUDE.md` + Rule
  fürs eigene Tool (Dogfooding). Sonst nur als Mitnehm-Hinweis.
- **„Was nehmt ihr mit?"** → die **SDD-Skills** + das eigene Repo + ein
  begründetes Urteil über BMAD aus eigener Hand.

---

## 5. Unsere eigene SDD-Form als mitnehmbare Skills (`.claudesdd/`)

**Basis ist schon da** (`.claudesdd/`), wird für den Workshop erweitert. Sie ist
die konkrete Verkörperung „unserer Form" und der versprochene „weiterverwendbare
Artefakt".

### 5.1 Bestand (gelesen, gut nutzbar)

| Datei | Inhalt | Status |
|---|---|---|
| `skills/sdd/SKILL.md` | **3-Phasen**-Workflow Spec→Plan→Implement; Tracks Direkt/Plan/Spec; WAS/WIE-Litmustest | gut — **Phase „Tasks" fehlt** |
| `skills/example-mapping/SKILL.md` | Facilitator, „facilitate don't invent", Health-Indikatoren | gut, einsatzbereit |
| `docs/how-to-write-specs.md` | Spec-Format, Litmustest, wann *keine* Spec | gut |
| `docs/how-to-write-plans.md` | Plan-Format, Testing-Strategie, Cross-Reference | gut |
| `rules/development-workflow.md` | WAS/WIE, zwei Fragen → drei Tracks, fileless vs. file | gut |

### 5.2 Die zu ergänzende 4. Phase: **Tasks** — schlank & bedingt

> **Designprinzip (aus dem Framework-Vergleich destilliert):** Tasks wird **kein
> viertes Pflicht-Artefakt**, sondern ein **dünner, bedingter Layer** über dem
> bestehenden Plan. Default = *kein* Breakdown — genau wie der Default *fileless*
> ist. So wächst der Skill von 3 auf 4 Phasen, ohne ein Framework zu werden.

- **Tasks leben *im* Plan** (`## Tasks`-Sektion), keine eigene `tasks.md` außer
  per „Promotion" (gleiche Logik wie beim Plan heute).
- **Trigger statt Gate:** Breakdown nur, wenn der Plan **nicht bequem in EINEN
  Implementier-Kontext** passt (>~3–5 Schritte, mehrere Dateien/Sessions/Agenten).
  Entscheidungsregel als Einzeiler, analog zum WAS/WIE-Litmustest.
- **Pro Track:** Direkt = **nie** · Plan = **bei Bedarf** · Spec = **Normalfall**.
  Die bestehende Track-Tabelle bekommt nur eine Spalte „Tasks?".
- **Format (eine Regel):** flache, gruppierte, *aus den Plan-Schritten
  abgeleitete* Checkliste — `## 1. Gruppe` / `- [ ] 1.1 Aktion mit Dateipfad [P]`.
- **Granularitäts-Faustregel (von BMAD, simpel):** *ein Task = passt in einen
  Agent-Kontext ohne Zusatzrecherche.* Ersetzt die ganze Epic/Story-Maschinerie.
- **Coverage-Selbstcheck (von spec-kit, minimal):** „Deckt jeder Plan-Schritt
  ≥1 Task?" — 30 Sekunden inline, **kein** eigenes `/analyze`-Command.
- **Testbindung:** jede Gruppe referenziert die im Plan vereinbarte Testing-
  Strategie (bei Example Mapping: die grünen Karten) — nicht optional.

**Bewusst weggelassen** (um schlank zu bleiben): User-Story/Epic-Ebene; eigenes
Analyze/Verify-Command; eigene `tasks.md` by default; Sprint-Planning/Status-
Modelle/Personas; FR→Epic-Coverage-Maps; Constitution-Gates.

### 5.3 Weitere zu bauende Skills

| Skill | Zweck | Quelle |
|---|---|---|
| **`gherkin-spec`** | grüne Karten → Domänen-Gherkin (Requirement→Scenario) | `erkenntnisse.md` Kap. 11–12 |
| **`bind-contract`** | `.feature` an Cucumber binden, `strict`, Drift-Demo | `examples-for-bdd/bdd/`, Kap. 12–15 |
| **`sdd` (erweitern)** | bestehende 3 Phasen + **Tasks-Phase** (§5.2) | bestehend + Synthese |

> **Qualitäts-Anforderung wegen dualem Bau:** Da die Teilnehmer unsere Form
> *direkt neben BMAD* bedienen, müssen die Skills poliert sein — sonst wirkt
> unsere Form wie „Bastel-Markdown" gegen BMADs Politur. Das ist die wichtigste
> Vorbereitungsaufgabe (§9).

---

## 6. Tagesfahrplan (~7 h hart)

> Konzeptbogen gestrafft, damit der duale Bau Luft hat. Zeiten als Startgerüst.

| Zeit | Akt | Format | Kern |
|---|---|---|---|
| **09:00** | **1 · Was ist eine Spec & warum?** (30') | Impuls | Wurzel, fünf Zwecke, Spec in der Software (kompakt) |
| **09:30** | **2 · 3 Frameworks × 4 Phasen** (25') | Impuls + Matrix | spec-kit/OpenSpec/BMAD entlang Spec→Plan→Tasks→Implement; „lebend ≠ erzwungen" |
| **09:55** | **3 · Unsere Erkenntnisse** (20') | Impuls | Prosa driftet → Contract; SbE/Mapping/Cucumber; ehrliche Grenze |
| 10:15 | *Pause* (15') | | |
| **10:30** | **4 · Vision + Setup + Example Mapping** (65') | Pitch + 🛠 Gruppen | Verengter `import`-Schnitt; **eine geteilte Discovery**; Skill `example-mapping` |
| **11:35** | **5 · Pfad A: BMAD** (70') | 🛠 Einzeln | PRD→Arch→Epics→Stories→erster dev-story. Schwere spüren |
| 12:45 | *Mittag* (50') | | |
| **13:35** | **6 · Pfad B: unsere Form** (70') | 🛠 Einzeln (Höhepunkt) | Gherkin→Contract→grün→Drift rot; ggf. Tasks-Phase. Skills `gherkin-spec`/`bind-contract` |
| 14:45 | *Pause* (15') | | |
| **15:00** | **7 · Synthese & Vergleich** (35') | Plenum | Selbst erlebter Vergleich; Schwere-Achse; die eine Architektur; „Was nehmt ihr mit?" |
| **15:35** | **Puffer / vertieftes Bauen / CE rekursiv** (55') | 🛠 / offen | Reserve für Streuung bei 20 Plätzen; oder CLAUDE.md+Rule fürs Tool |
| **16:30** | **Ende** | | |

*(Netto ~5 h Arbeit + ~80 min Pausen ≈ 6 h 50. Der 55'-Puffer fängt die
Hands-on-Streuung bei 20 Einzelplätzen + den dualen Bau ab — bewusst großzügig,
weil zwei Pfade enger getaktet sind als einer.)*

---

## 7. Wichtige Design-Entscheidungen (mit Begründung & Alternativen)

### 7.1 Deduktiv statt induktiv (Erbe von Ablauf4)
Konzeptbogen zuerst (Wurzel → Frameworks → Erkenntnisse → eigene Form), dann
bauen. „Contract" als logische Konsequenz statt Notlösung gegen Schmerz. Optional
ein kurzer naiver Kontrapunkt im Bau, kein Schmerz-Hook.

### 7.2 Framework-Tour: drei, entlang der vier Phasen
- **Gewählt:** spec-kit/OpenSpec/BMAD, verglichen entlang Spec→Plan→Tasks→Implement.
- **Begründung:** *eine* gemeinsame Achse macht den Vergleich lehrreich (dieselbe
  Idee, drei Schweregrade) statt drei zusammenhanglose Steckbriefe. Eindampfen auf
  drei (Kiro/Tessl raus) gibt Tiefe und entlastet den gestrafften Bogen.
- **Verworfen:** breite 5er-Landkarte (Ablauf4) — mehr Breite, weniger Tiefe.

### 7.3 Eigene Form 4-phasig, Tasks schlank & bedingt
- **Gewählt:** Tasks als dünner, getriggerter Layer im Plan (§5.2).
- **Begründung:** erfüllt den Wunsch nach 4 Phasen *und* das Schlankheits-Ziel —
  Default ist kein Breakdown. Übernimmt die *Essenz* der drei (LLM-Format +
  Coverage von spec-kit, Ableitung + flache Checkliste von OpenSpec, Kontext-
  Faustregel von BMAD), lässt deren Schwergewicht weg.
- **Verworfen:** eigene `tasks.md` als Default (kippt ins Framework-Hafte);
  Story/Epic-Ebene (unsere Spec ist 1–2 Seiten, nichts zu sharden).
- **Risiko:** schleichende Schwere → „Tasks-im-Plan" hart als Default festschreiben.

### 7.4 BMAD: dualer Bau ⭐ (zentrale Weiche)
- **Gewählt:** Teilnehmer bauen `import` mit BMAD *und* unserer Form.
- **Begründung:** erfüllt den Abstract (BMAD prominent), liefert einen *selbst
  erlebten* Vergleich, platziert die Skepsis fair (BMADs Schwäche fällt im
  Vergleich von selbst auf, keine Abwertung nötig).
- **Verworfene Alternativen:** *Demo + Spektrum-Framing* (sicherer, aber kein
  selbst erlebter Vergleich — war meine erste Empfehlung, vom Auftraggeber
  zugunsten des stärkeren dualen Erlebnisses verworfen); *harter Cut* (Abstract
  verfehlt); *nur quick-dev* (verkauft die versprochenen Rollen unter Wert).
- **Erkannte Spannung & Gegenmaßnahmen:** dualer Bau ist eng in 7 h →
  (a) geteilte Discovery (§7.5), (b) Bau nur bis charakteristischer Punkt (§7.5),
  (c) BMAD-Setup vorab (§9), (d) Konzeptbogen gestrafft (§7.6), (e) verengter
  Schnitt (§2.1), (f) 55' Puffer (§6).

### 7.5 Geteilte Discovery, Bau bis charakteristischer Punkt
- **Gewählt:** Example Mapping *einmal*; BMAD bis „Stories + erster dev-story",
  unsere Form bis „Contract grün + Drift rot".
- **Begründung:** Discovery ist bei beiden gleich → einmal genügt und isoliert den
  Vergleich (gleicher Input, zwei Formalisierungen). Der Aha liegt im *Weg* der
  Planung, nicht im fertigen Feature; Implementierung ist bei beiden „Agent baut
  gegen Vorgaben" → wenig Vergleichswert, viel Zeit. Jeder Pfad nur bis zu seinem
  *charakteristischen* Punkt.
- **Verworfen:** *beide bis lauffähiger Code* (zu eng, Scope müsste winzig sein);
  *Planung dual, Implementierung nur eigene Form* (spart Zeit, opfert aber den
  Contract/Drift-Payoff im Vergleich).

### 7.6 7 h hart, Konzeptbogen kürzbar
- **Gewählt:** 7 h sind hart; der Bogen (~95→~75 min) wird gestrafft, v.a. die
  Framework-Tour, *weil BMAD ohnehin praktisch erlebt wird.*
- **Begründung:** der duale Bau braucht ~240 min Hands-on; die Kürzung holt die
  Zeit dort, wo Redundanz zum Praxisteil entsteht.
- **Verworfen:** *8 h* (Auftraggeber: 7 h hart); *Bogen unangetastet* (dualer Bau
  würde platzen).

### 7.7 Reihenfolge BMAD → eigene Form
BMAD zuerst (Schwere spüren), eigene Form danach (Erleichterung + Contract/Drift
als Höhepunkt). Dramaturgisch stärker als umgekehrt.

### 7.8 Context Engineering: angewandt am Ende, nicht vorangestellt
CE kommt rekursiv in Akt 7 (CLAUDE.md/Rule fürs Tool), wenn Zeit. Der deduktive
Bogen beginnt bei der Spec, nicht beim Werkzeug-Kontext. *Hinweis:* Der Abstract
nennt „herangeführt über Context Engineering" — minimal sollte CE-Vokabular im
Bau/Setup vorkommen (Smart Zone als Begründung für „klein schneiden"), damit der
Abstract gedeckt ist. (Offener Punkt §9.)

### 7.9 Example Mapping in Gruppen
Wie bisher — einzige Ausnahme von Einzelarbeit; *„facilitate, don't invent"*
braucht Dialog. *(Vom Auftraggeber zu bestätigen.)*

---

## 8. Material-Mapping

- **Akt 1 (NEU):** muss gebaut werden — §3 + §10 (Etymologie, fünf Zwecke,
  Royce/IEEE 830/DbC/Agile).
- **Akt 2 (NEU):** die 3×4-Leitmatrix aus §3 dieses Dokuments + `erkenntnisse.md`
  Kap. 4–7. SDD-Deck-Framework-Folien teils verwertbar.
- **Akt 3:** SDD-Deck („hard truth", „contract", generieren-vs-binden) +
  `erkenntnisse.md` Kap. 8–12; `slides-v1/akt2/3a/3b/3c` teils wiederverwendbar.
- **Akt 4:** EXACT-Deck „Example Mapping" + `slides-v1/akt3a-example-mapping.html`
  + `.claudesdd/skills/example-mapping/`.
- **Akt 5 (NEU):** BMAD-Walkthrough-Handout (BMM-Flow am `import`-Schnitt) —
  muss gebaut werden; Quelle: Recherche §10.
- **Akt 6:** `erkenntnisse.md` Kap. 11–15 + `examples-for-bdd/bdd/` +
  `.claudesdd/skills/{gherkin-spec,bind-contract}` + `slides-v1/akt3b/3c`.
- **Akt 7:** `erkenntnisse.md` Kap. 16 (Synthese) + die Schwere-Achse aus §1 +
  Context-Engineering-Deck (falls CE-Mini).

---

## 9. Offene Punkte / Vorbereitung (priorisiert)

**Kritisch für den dualen Bau:**
1. **BMAD-Setup vorab** lösen — `npx bmad-method install` + Node/Python/uv ist
   nicht trivial; bei 20 Leuten × 2 Frameworks sonst Lernzeit-Killer. Als Vorab-
   Hausaufgabe **mit Verifikations-Checkliste** ODER vorbereitetes Setup-Skript.
2. **`.claudesdd`-Skills polieren & vervollständigen** — `gherkin-spec` &
   `bind-contract` bauen, `sdd` um die **Tasks-Phase** (§5.2) erweitern. Müssen
   neben BMAD bestehen (Qualität!).
3. **`import`-Schnitt final verengen** (Empfehlung: Rule-Import + SemVer-
   Überschreib-Regel) — klein genug für zwei Pfade, regelreich für Mapping,
   deterministisch für Drift.
4. **BMAD-Walkthrough-Handout** für Akt 5 (welche Workflows, welche Eingaben am
   `import`-Schnitt, wo stoppen = charakteristischer Punkt).

**Inhaltlich:**
5. **Akt-1- & Akt-2-Folien neu** (Spec-Wurzel; 3×4-Matrix) — in slides-v1 nicht da.
6. **Faktencheck abschließen** (§10): IEEE-830-Jahre, Z-Notation-Datum, North↔
   Ubiquitous-Language.
7. **CE-Minimum festlegen** (§7.8), damit „herangeführt über Context Engineering"
   aus dem Abstract gedeckt ist.
8. **Beispiel-Registry** (Demo-Skills/Rules/MCP-Configs, stack-neutral).
9. **Example Mapping in Gruppen** bestätigen; Miro/analog vorbereiten.
10. **Detail-Moderationsskript** je Akt (Timing, Handouts, Debrief-Fragen,
    Repo-/Setup-Checkliste).

---

## 10. Faktencheck & Quellenlage

**Historie (bestätigt):** Etymologie `specere`→`specificatio`; „specification"
technisch ab 1833 (Patentrecht); „spec" ab 1956; Whitworth 1841; Royce 1970 ohne
„Waterfall"; Adzics Vorläuferbuch 2009; North „Introducing BDD" 2006.

**Präzise erzählen (nicht überverkaufen):**
- **Royce** hat „Waterfall" nicht erfunden, *davor gewarnt* — aber auch nicht
  „eigentlich agil".
- **Adzic** hat „Specification by Example" **popularisiert/konsolidiert**, nicht
  geprägt (Begriff existierte im ATDD/BDD-Umfeld vorher).
- **Etymologie ≠ Ingenieurzweck**; **formale Methoden** = Nische, nicht
  gescheitert; **Agile** wertet Doku nicht ab, sondern relativiert.

**Framework-Mechanik (recherchiert, Stand 2026):**
- **spec-kit** v0.9.x: Pipeline `constitution→specify→(clarify)→plan→tasks→
  (analyze)→implement`; Tasks **nach User Story** (`T### [P] [US#]` + Dateipfad);
  `/analyze` read-only; Tests per Default optional; `lean`-Preset existiert.
- **OpenSpec** (OPSX): „actions, not phases", DAG `proposal→specs→design→tasks→
  implement`; `propose/apply/archive` (core), `verify` nur im *expanded*-Profil &
  nicht-blockierend; Delta-Specs ADDED/MODIFIED/REMOVED; flache `tasks.md`.
- **BMAD** v6 (BMM): 4 Phasen Analysis/Planning/Solutioning/Implementation;
  Rollen Analyst/PM/Architect/Dev (kein separater SM mehr); Kette
  `prd→architecture→epics-and-stories→(readiness)→sprint-planning→create-story→
  dev-story→code-review→retrospective`; **Architecture vor Stories** (v6); FR→Epic-
  Coverage-Map; `bmad-quick-dev` überspringt Phasen 1–3; Phase-4-Vollautomatik
  „coming soon".

**Noch gegenzuprüfen:** exakte IEEE-830-Jahre, Z-Notation-Erstdatum, North↔
Ubiquitous-Language; BMAD-Versionsdetails sind schnelllebig (vor Workshop kurz
gegen das aktuelle Repo verifizieren).

---

## 11. Verhältnis zu den anderen Abläufen

| | **Ablauf1/2/3** (induktiv) | **Ablauf4** (deduktiv) | **Ablauf4-v2** (deduktiv + dual) |
|---|---|---|---|
| **Einstieg** | Schmerz | Spec-Wurzel | Spec-Wurzel (gestrafft) |
| **Frameworks** | knapp, schwächen-lastig | 5, fair | **3, entlang 4 Phasen** |
| **Eigene Form** | 3-phasig implizit | 4 Akte | **4 Phasen explizit, Tasks schlank** |
| **BMAD** | ausgelagert/erwähnt | Randnotiz | **dual gebaut** (Abstract-treu) |
| **Hands-on** | ein Pfad | ein Pfad | **zwei Pfade, geteilte Discovery** |
| **Risiko** | „warum Theorie?" | Bogen lang | **dualer Bau eng in 7 h** |
| **Stärke** | emotional, früh | fundiert, faire Karte | **selbst erlebter Vergleich, abstract-treu** |

**Wann Ablauf4-v2 die richtige Wahl ist:** wenn der Abstract (BMAD prominent)
eingelöst werden soll *und* ein Publikum bedient wird, das Tiefe + einen selbst
erlebten Methodenvergleich schätzt. Der Preis ist das engste Zeitbudget der vier
Varianten — abgefedert durch geteilte Discovery, Bau-bis-charakteristischer-Punkt,
Vorab-Setup und den gestrafften Bogen.
