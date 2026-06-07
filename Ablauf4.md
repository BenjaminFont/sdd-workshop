# Workshop „From Vibe Coding to Professional Software Engineering" — Ablauf & Konzept (Ablauf4, deduktiv)

> Dieses Dokument hält den **kompletten Gedankengang** einer weiteren Planungs-
> Session fest — bewusst so ausführlich, dass es auch jemand versteht, der nicht
> dabei war: nicht nur *was* gemacht wird, sondern *warum*.
>
> **Ablauf4 ist KEINE Synthese von Ablauf1–3, sondern ein bewusst anderer
> Ansatz.** Ablauf1, 2 und 3 sind alle **induktiv / schmerz-zuerst**: erst lässt
> man die Teilnehmer Vibe-Coding-Schmerz fühlen, dann bietet man SDD als Rettung
> an. Ablauf4 dreht das um und geht **deduktiv / genetisch** vor:
>
> > Zuerst klären, **was eine Spezifikation überhaupt ist** und **warum sie
> > erfunden wurde** (ihre Wurzel und ihr Zweck) → dann **in die Welt schauen**:
> > welche SDD-Frameworks gibt es, mit ihren **Stärken UND Schwächen** → dann
> > **sukzessive zu unseren Erkenntnissen** kommen → und daraus eine **eigene
> > Form von SDD** ableiten, die am Beispielprojekt schrittweise aufgebaut wird.
>
> Am Ende werden die vier Varianten verglichen (siehe `Ablauf-Vergleich` unten
> bzw. §11). Welche tatsächlich durchgeführt wird, ist eine spätere Entscheidung.
>
> **Stand:** 2026-06-07.
> **Konzeptionelles Rückgrat:** `spec-driven-development-erkenntnisse.md`.
> **Historische Fundierung:** recherchiert & faktisch gegengeprüft (siehe §10
> „Faktencheck & Quellenlage").

---

## 0. Ausgangslage & Auftrag

**Titel des Workshops:** „From Vibe Coding to Professional Software Engineering —
mit Spec-Driven Development" *(genauer Wortlaut vom Auftraggeber noch
nachzureichen)*.

**Ziel:** Teilnehmer sollen am Ende
1. **verstanden haben, was Spec-Driven Development ist** — von der Wurzel her,
   nicht als Tool-Rezept;
2. eine **grobe Übersicht über die Framework-Landschaft** haben (Stärken *und*
   Schwächen);
3. **praktisch an etwas gearbeitet** haben — an einem durchgehenden
   Beispielprojekt;
4. die **eigenen SDD-Erkenntnisse** der letzten Sessions (Spec als Source,
   Example Mapping, Cucumber als Brücke Code↔Spec) angewendet haben;
5. die **SDD-Skills mitnehmen** und am Beispielprojekt weiterarbeiten können.

**Rahmenbedingungen:**

| Parameter | Entscheidung |
|---|---|
| **Dauer** | ~7 h inkl. Pausen |
| **Teilnehmer** | mit erster AI-Coding-Erfahrung (Cursor / Claude Code), keine SDD-Experten |
| **Setup** | Eigene Laptops, Agenten-Tool installiert & lauffähig |
| **Arbeitsform** | Grundsätzlich Einzelarbeit (Ausnahme: Example Mapping in Gruppen) |
| **Tech-Stack** | Freie Wahl je Teilnehmer (gemeinsamer Nenner = die Spec) |
| **Fokus** | **Spec-Driven Development + Contracts** |

**Vorhandenes Material im Repo:**
- `spec-driven-development-erkenntnisse.md` — die konzeptionelle Herleitung der
  zentralen These (inhaltliches Rückgrat).
- `Spec Driven Development - English PD (2).pdf` — SDD-Grundlagen,
  Framework-Vergleich, Brücke zu Contract / Gherkin / Cucumber.
- `EXACT Coding (1).pdf` + `(2).pdf` — Example Mapping, AI-TDD, 659-Runs-Experiment.
- `Context Engineering - English (1).pdf` — Smart Zone, Context-Strategien,
  CLAUDE.md, Rules, Subagents, Agent Teams.
- `examples-for-bdd/bdd/` — **lauffähiges** Cucumber-Beispiel
  (`features/session.feature`, `steps/session.steps.js`, `cucumber.json` mit
  `strict: true`).
- `slides-v1/` — bestehendes Foliendeck (für die induktive Variante gebaut; Teile
  daraus sind in Ablauf4 wiederverwendbar, der Anfang muss neu).

---

## 1. Die Leitidee von Ablauf4 (der rote Faden)

Ablauf1–3 hängen an: *„Vibe → Spec → Vertrag"* — emotional, vom Schmerz her.
Ablauf4 hängt an **einem anderen, ruhigeren Satz**, der den ganzen Tag trägt:

> **Eine Spezifikation existiert seit jeher aus einem einzigen Grund: eine
> Verständnisgrenze zu überbrücken — zwischen dem, der etwas *will*, und dem, der
> es *baut*. Der KI-Agent ist nur der neueste „Bauer" an dieser uralten Grenze.
> Und genau wie im Bauwesen und im Vertragsrecht ist eine Spezifikation erst dann
> wirklich wertvoll, wenn man *gegen sie abnehmen* kann.**

Daraus folgt der genetische Aufbau: Wir leiten SDD nicht aus dem Schmerz ab,
sondern aus der **Funktion**, die Spezifikationen seit Jahrhunderten erfüllen.
Wenn man verstanden hat, *wozu* es eine Spec gibt (Arbeitsteilung, Abnahme,
Haftung, Austauschbarkeit, Kommunikation über Grenzen), dann ist „Spec als
erzwungener Contract" keine Tool-Mode, sondern die **logische Fortsetzung** einer
sehr alten Idee im Zeitalter nicht-deterministischer Generatoren.

Die *eine Botschaft* bleibt dieselbe wie in den anderen Abläufen — aber sie wird
hier **hergeleitet** statt erlitten:

> **Nicht-deterministischer Generator (der KI-Agent) gegen deterministischen
> Prüfer (der Contract) — das ist die einzige Architektur, die KI-Coding
> bändigt.**

### Die Lernkette des Tages (identisch zu Ablauf3, nur anders motiviert)

```
Wurzel & Zweck der Spec  → WOZU gibt es Specs? (Abnahme über eine Verständnisgrenze)
   ↓ in die Welt schauen
Framework-Tour           → wie lösen es spec-kit / OpenSpec / BMAD / Kiro heute? (Stärken & Schwächen)
   ↓ Erkenntnis
„lebend ≠ erzwungen"      → keines erzwingt die Spec deterministisch → Contract
   ↓ unsere eigene Form
Example Mapping          → die RICHTIGEN Regeln + Beispiele       (Korrektheit)
   ↓ grüne Karten
Gherkin-Specs            → lesbare, nach Domäne sortierte Spec     (OpenSpec-Form)
   ↓ gebunden (nicht generiert!), strict mode
Rot / Grün in CI         → erzwingt Konformität, erkennt Drift     (die Erzwingung)
= unsere erzwungene, lebende Verhaltens-Spec — als mitnehmbare Skills
```

---

## 2. Das durchgehende Projekt: ein CLI-Tool zur Artefakt-Verwaltung

**Entscheidung des Auftraggebers** (identisch zu Ablauf1–3, hier mit breiterer
Vision):

> Ein **CLI-Tool**, mit dem man **AI-Coding-Artefakte zentral verwaltet** —
> Claude-Code-Skills, OpenCode-Skills, Rule-Files, `CLAUDE.md`s und **MCP-Server-
> Konfigurationen**. Das Tool kann zentral verwaltete Artefakte per Kommando
> **in ein neues Projekt importieren**, bestehende Projekt-Artefakte mit den
> zentral verwalteten **ergänzen** (`augment`), eine **Diff-Ansicht** liefern —
> und mehr.

### Scope-Entscheidung: breite Vision, ein Schnitt gebaut

Anders als Ablauf1–3 (die nur den einen Schnitt `import` überhaupt erwähnen)
präsentiert Ablauf4 die **volle Tool-Vision als Rahmen**, baut praktisch aber
**genau einen vertikalen Schnitt** durch:

| Kommando (Vision) | Was es tut | Im Workshop |
|---|---|---|
| **`import`** | zentrale Artefakte in ein Ziel-Repo holen | **gebaut** (der eine Schnitt) |
| `augment` | bestehende Projekt-Artefakte mit zentralen ergänzen | nur Vision (reicher Regel-Stoff für Example Mapping) |
| `diff` | zentrale vs. lokale Version vergleichen | nur Vision (zweite Contract-Art, als Ausblick) |
| `mcp add` | MCP-Server-Konfig zentral verwalten & einspielen | nur Vision |
| `list` / `registry` | zentrale Artefakte auflisten/registrieren | nur Vision |

**Warum breite Vision + ein Schnitt:**
- Die **breite Vision** macht das Projekt ambitioniert und „echt" — die
  Teilnehmer sehen ein Werkzeug, das sie *wirklich* wollen, und verstehen, wofür
  die Disziplin gut ist.
- Der **eine gebaute Schnitt** (`import`) hält die SDD-Disziplin scharf: Example
  Mapping glänzt nur an *einem* regelreichen Verhalten, der Drift-Moment braucht
  *eine* deterministische Logik mit einer Grenze. (Begründung wie in Ablauf3 §2.)

### Warum diese Produktidee gut passt

- **Meta-Dogfooding / selbstreferenziell.** Das Tool verwaltet genau die
  Artefakte, über die die Teilnehmer den ganzen Tag lernen. Das macht den
  Context-Engineering-Teil (Skills/Rules/CLAUDE.md/MCP) gleichzeitig zu
  **Domänen-/Pflichtenheft-Input** für das Produkt.
- **Echt & mitnehmbar.** Ein Verwaltungs-CLI für die eigene `.claude/`-Umgebung
  will man behalten — existiert real in Ansätzen (git-dotfiles für `.claude/`,
  Tools wie `ruler`).
- **Reich an echten Geschäftsregeln.** „Importiere eine Rule in ein Repo" hat von
  Natur aus viele Regeln (welches Level? still überschreiben? Format validieren?
  Versions-Drift? MCP-Server-Secret-Handling?) — genau was Example Mapping
  braucht.

---

## 3. Der konzeptionelle Bogen (Akt 1–3, ~90 min am Stück)

Dies ist das **Herzstück, das Ablauf4 von allen anderen unterscheidet.** Der
Bogen läuft kompakt am Stück, *bevor* gebaut wird (Auftraggeber-Entscheidung:
„kompakter Konzeptbogen, dann Hands-on"). Er ist als Spannungsbogen gebaut: von
der uralten, vertrauten Idee bis zur offenen Frontlinie, die unsere eigene Form
schließt.

### Akt 1 — Was *ist* eine Spezifikation, und warum gibt es sie? (~40 min)

**Didaktisches Ziel:** Den Begriff „Spec" von seiner Wurzel her aufladen, damit
„Contract" am Ende nicht als Tool-Mode, sondern als logische Konsequenz erscheint.

**(a) Die Wurzel des Begriffs.**
- Etymologie: lat. **`specere`** (sehen) → **`species`** (das Erblickte, die
  Art/Gestalt) → spätlat. **`specificare`** (etwas einer bestimmten Art zuordnen,
  „art-machen") → mittellat. `specificatio`. **Spezifizieren heißt wörtlich: das
  Unbestimmte bestimmt, das Allgemeine einzeln und sichtbar machen.**
- Wortgeschichte: engl. „specification" seit den 1610ern belegt; die *technische*
  Bedeutung („detailliert beschriebener Einzelposten") ab **1833 — ursprünglich
  im Patentrecht** (die genaue Beschreibung von Bau & Gebrauch einer Erfindung).
  Die Kurzform „spec" ab 1956, aus Fertigung & Bauwesen.
  → **Pointe:** Schon das *erste* technische „Spec" war ein **rechtlich
  prüfbarer Anspruch**, kein gut gemeintes Dokument. Das ist kein Zufall.

**(b) Wozu wurde die Spezifikation erfunden? Fünf Zwecke** (der Kern dieses Akts —
sie strukturieren alles Weitere):

| # | Zweck | Kurz |
|---|---|---|
| 1 | **Arbeitsteilung** Wollen ↔ Bauen | Eine Partei beschreibt das WAS, eine andere führt aus — entkoppelt in Zeit & Ort. *(Architekt spezifiziert, Bauunternehmer baut.)* |
| 2 | **Abnahme / Akzeptanz** | Ein objektives Kriterium für „fertig" und „richtig" — Abgleich statt Meinungsstreit. |
| 3 | **Haftung / Vertrag** | Die Leistungsbeschreibung im Werkvertrag bestimmt das geschuldete Werk; Abweichung = Mangel. Beweismittel. |
| 4 | **Austauschbarkeit / Standardisierung** | Genormte Maße/Toleranzen → austauschbare Teile (Whitworth-Gewinde 1841). Interoperabilität über Hersteller hinweg. |
| 5 | **Kommunikation über Verständnis- & Zeitgrenzen** | Persistentes, eindeutiges Wissen über Personen, Disziplinen, Jahrzehnte. Reduziert die Mehrdeutigkeit natürlicher Sprache. |

> **Die zentrale Beobachtung, die den Tag trägt (aus Zweck 1+2):** Eine Spec
> überbrückt eine **Verständnisgrenze** zwischen *Wollen* und *Bauen* — und sie
> ist erst wertvoll, wenn man **gegen sie abnehmen** kann (Zweck 2/3). Eine Spec,
> gegen die man nicht prüfen kann, erfüllt ihren ältesten Zweck nicht.

**(c) Wie die Spec in die Software kam — und was schiefging.**
- **Royce 1970** („Managing the Development of Large Software Systems"): zeichnete
  das sequenzielle Phasendiagramm — nannte es **NICHT** „Waterfall" und
  **warnte** ausdrücklich davor („risky and invites failure"), weil Testen erst
  am Ende kommt. Er empfahl Iteration & Prototyping. Die Industrie (und
  **DoD-STD-2167**, 1985) übernahm trotzdem die starre Vorab-Spec-Variante.
  → *Royce wurde zum Kronzeugen eines Modells, vor dem er gewarnt hatte.*
- **IEEE 830** (Software Requirements Specification): kodifizierte die SRS als
  Standardartefakt; Qualitätskriterien für gute Anforderungen (vollständig,
  konsistent, eindeutig, **verifizierbar**). Heute abgelöst durch ISO/IEC/IEEE
  29148. → *Schon 1998 stand „verifizierbar" als Qualitätsmerkmal — wir lösen es
  heute endlich ein.*
- **Formale Methoden** (Präzision auf die Spitze): Z-Notation (Abrial),
  VDM (IBM Wien), TLA+ (Lamport). **Design by Contract** (Bertrand Meyer, Eiffel,
  ab 1986): Vor-/Nachbedingungen & Invarianten als prüfbare **Verträge im Code**.
  → *Der Begriff „Contract" für eine maschinell prüfbare Spec ist 40 Jahre alt.*
- **Die Gegenbewegung:** Dicke Vorab-Specs veralteten schneller als ihre
  Umsetzung; „big design up front" verschob Risiko ans Ende. **Agile Manifesto
  (2001):** „working software over comprehensive documentation". → *Die Spec
  verschwand nicht — sie wanderte in **Tests, Akzeptanzkriterien, Typen,
  Contracts**. Genau dort setzen wir an.*

> **Ehrlichkeitsregel für Akt 1** (siehe §10): Der Royce-Mythos und die Adzic-
> Zuschreibung werden *korrekt* erzählt — nicht überverkauft. Keine ungebrochene
> Linie „von Rom bis IEEE 830" behaupten; formale Methoden sind *Nische*, nicht
> *gescheitert*; Agile wertet Doku nicht ab, sondern relativiert.

### Akt 2 — In die Welt schauen: die Framework-Landschaft (~30 min)

**Didaktisches Ziel:** *Nicht* die Tools lehren, sondern zeigen, wie die Welt das
„Spec → Code"-Problem heute löst — **ausgewogen, mit Stärken UND Schwächen** —
und dass *selbst die besten* eine bestimmte Lücke nicht schließen. Reiner Input +
Vergleichstabelle (kein Mitmach-Teil).

> Bewusster Unterschied zu Ablauf1–3: Dort ist die Framework-Tour schwächen-
> lastig (sie dient dort nur dazu, schnell zur Contract-These zu springen). In
> Ablauf4 ist sie **fair und voll** — die Teilnehmer sollen eine echte Landkarte
> bekommen, kein Strohmann-Setup.

| Framework | Stärken (echt) | Schwächen (echt) | Bestes Werkzeug für … |
|---|---|---|---|
| **GitHub spec-kit** | strukturierte Pipeline mit echten Gates (`/clarify`, `/analyze`, `/checklist`); breiteste Tool-Unterstützung (30+ Agents); sauberes Override-Schichtmodell; Constitution-Konzept; GitHub-Backing | schwergewichtig/zeremoniell; Greenfield-Bias; „Specs werden ausführbar" ist Vision, keine deterministische Bindung; viel Markdown-Pflege | größere Greenfield-Features; Orgs mit Compliance-/Audit-Bedarf |
| **OpenSpec** (Fission-AI) | geringe Ceremony, sofort startklar; **delta-/brownfield-first** (parallele Changes, sauberes Mergen); sehr hackbar (OPSX); klare Trennung `specs/` (Ist) vs. `changes/` (Vorschlag) | jüngeres Ökosystem (Beta-Features); weniger Gates → Disziplin beim Nutzer; `verify` ist LLM-basiert & **nicht-blockierend**; modellabhängig | Brownfield an bestehenden Codebasen; iteratives Arbeiten ohne schweren Prozess |
| **BMAD-METHOD** | voller Produktlebenszyklus (12+ Rollen-Agenten, 34+ Workflows); scale-adaptiv; modulares Ökosystem; sehr aktive Community | höchste Komplexität/Lernkurve; Persona-/Prozess-Framework statt präzisem Spec-Format; schnelle Evolution (Instabilität); tokenintensiv | komplexe Vorhaben; Teams, die End-to-End (Discovery→Delivery) wollen |
| **Amazon Kiro** (AWS) | SDD nativ in der IDE (requirements/design/tasks, Steering, Hooks); gute Brownfield-Brücken (MCP-Import aus JIRA/Confluence/Diagrammen); AWS-Backing | Vendor-/IDE-Lock-in; credit-basiertes Pricing; Workflow beim Spec-Start fixiert; jung (2025) | AWS-Umfeld; integrierte IDE-Erfahrung mit Automatisierung |
| *(Randnotiz)* **Tessl** | behandelt Agent-Kontext (Skills/Specs) als versioniertes, governiertes Artefakt (Security-Scan, Policy, Eval) | **Pivot** weg von reinem Spec→Code hin zu Skills-Governance; enterprise-/demo-orientiert; schnelllebig | Enterprises mit vielen Agenten/Skills |

**Landschaft 2026 (kurz):** Konvergenz auf ein gemeinsames Muster — Constitution/
Steering → requirements/spec → design/plan → tasks → implement → verify; verteilt
als Slash-Commands oder Agent-Skills über 20–30+ Agents. Bemerkenswert: „Spec"
und „Agent Skill" nähern sich als Format an (Tessls Pivot ist ein Signal). *(Was
schnelllebig/unsicher ist — Marktanteile, Beta-Reife — wird als solches markiert,
siehe §10.)*

**Die faire Pointe (Überleitung zu Akt 3):** Alle vier machen *dasselbe gut* —
sie zwingen Intention vor Code, schaffen ein versionierbares Artefakt zwischen
Mensch & Agent, dämmen Vibe-Coding ein. Die Wahl ist eine Frage von Ceremony,
Greenfield/Brownfield und Lock-in — **nicht** „besser/schlechter". Aber:

> **Was strukturell KEINEM gelingt: deterministische Drift-Detection gegen den
> Code.** Jede „Verifikation" (spec-kit `/analyze`, OpenSpec `/opsx:verify`,
> Kiros Reviews, BMADs Story-Checks) ist letztlich **LLM-Urteil** —
> probabilistisch, nicht reproduzierbar, meist nicht-blockierend. Keines
> kompiliert die Spec in maschinell prüfbare Invarianten (Typen, Contracts,
> Conformance-Tests), die ein CI hart gegen den Code laufen lässt.

### Akt 3 — Unsere Erkenntnisse: von „lebend" zu „erzwungen" (~25 min)

**Didaktisches Ziel:** Die Framework-Lücke aus Akt 2 mit *unseren* Erkenntnissen
schließen — und damit den Bauplan für „unsere eigene SDD-Form" auf den Tisch
legen. Quelle: `erkenntnisse.md` Kap. 8–12, 16.

**(a) Warum Prosa-Specs grundsätzlich driften.** Eine Prosa-Spec ist *passiv* —
nichts prüft je, ob der Code ihr noch entspricht. „Lebendig" heißt nicht „wird
gepflegt", sondern **„kann nicht unbemerkt falsch werden"**. Das schafft nur
Erzwingung.

**(b) Der Sprung: die Spec an einen Test binden = Contract.** Ein Given-When-Then-
Szenario ist zu ~90 % schon ein Testfall — es ist nur an keinen ausführbaren Test
gebunden. **Binde es → aus der Prosa-Spec wird ein Contract.** Aus „⚠ wahrschein-
lich nicht abgedeckt" wird rot/grün. *„generieren" (Einbahnstraße, driftet)* vs.
*„binden" (eine Quelle, driftet nicht)* — der entscheidende Unterschied.

**(c) Die Brücke, die wir in den letzten Sessions gefunden haben** — und die
unsere eigene Form ausmacht:

```
Specification by Example  → die richtigen Regeln + Beispiele abringen   (Korrektheit)
   ↓ (Example Mapping als Discovery-Technik)
Gherkin / OpenSpec-Form   → Verhaltens-Spec, nach Domänen sortiert       (lesbar)
   ↓ gebunden via Cucumber, strict mode  ← die Brücke Code ↔ Spezifikation
Rot / Grün in CI          → erzwingt Konformität, erkennt Drift          (die offene Frontlinie)
```

- **Specification by Example als Quelle.** Beispiele sind die präziseste geteilte
  Sprache zwischen Mensch & Maschine (genau die *Verständnisgrenze* aus Akt 1!).
  Historisch fundiert: ATDD (Cunningham, FIT 2002) → BDD (Dan North, 2006,
  Given-When-Then) → **Specification by Example** (Gojko Adzic, Buch 2011 —
  *konsolidiert & popularisiert*, siehe §10) → **Example Mapping** (Matt Wynne,
  ~2015). Verwandt: Eric Evans' **Ubiquitous Language** (DDD, 2003) — dieselbe
  „geteilte Sprache"-Idee.
- **Cucumber als Brücke** zwischen Code und Spezifikation: zwei Schichten —
  `.feature` (Prosa, lesbar) + Step Definitions (Code, einmalig). Die Spec wird
  *direkt ausgeführt*. `strict` ist konstituierend.

**(d) Die ehrliche Grenze (nie überverkaufen).** Grün beweist **Konformität**
(Code = Szenario), nicht **Korrektheit** (Szenario ist sinnvoll). Korrektheit
holt man *vorher* — durch Example Mapping. **Contracts an jede Naht, Prosa in
jeden Raum.**

> **Überleitung zum Hands-on:** „Genau diese Form — Example Mapping → Gherkin →
> gebunden + strict — bauen wir jetzt an unserem eigenen Tool. Und ihr nehmt sie
> als Skills mit nach Hause."

---

## 4. Der Hands-on-Teil (Akt 4–6): unsere eigene SDD-Form am Beispielprojekt

Nach dem Konzeptbogen wird durchgehend gebaut. Jeder Akt löst einen Schritt der
Lernkette aus §3(c) am `import`-Schnitt ein — **mit den vorbereiteten SDD-Skills**
(siehe §5).

### Akt 4 — Tool-Vision, Setup & Example Mapping

- **Vision-Pitch (Plenum, kurz):** Die volle Tool-Vision (import/augment/diff/
  mcp) vorstellen, dann auf den einen Schnitt `import` fokussieren.
- **Setup (einzeln):** Repo anlegen, Sprache wählen. *Optional* — falls man den
  „Schmerz" doch kurz spürbar machen will — ein **naiver erster Wurf ohne Spec**
  (10 min, bewusst klein): zeigt, dass 20 Leute 20 Annahmen treffen. *In Ablauf4
  ist das ein kleiner Kontrapunkt, nicht der Hook* (der Hook ist der konzeptio-
  nelle Bogen).
- **Example Mapping (Gruppen, ~60 min):** Den `import`-Schnitt als Story auf
  Karten — Story (gelb) / Rules (blau) / Examples (grün) / Open Questions (rot).
  Regeln wie: Ziel existiert schon? Version älter/neuer (SemVer)? Konflikt mit
  lokaler Rule? `--dry-run`? partieller Import? MCP-Secret-Handling? Prinzip
  **facilitate, don't invent.** Aha: rote Karten vor dem Code. → mit dem
  **Example-Mapping-Skill**.

### Akt 5 — Grüne Karten → Gherkin (einzeln, mit dem Gherkin-Skill)

Grüne Karten in Gherkin-Requirements übersetzen (Domänen-Form: Requirement →
Scenario, Given/When/Then). Disziplin: **Anforderung gehört in Given/When/Then,
nie in Freitext.** Die `.feature` ist stack-neutral — der gemeinsame Nenner über
alle Teilnehmer. → mit dem **Gherkin-Skill**.

### Akt 6 — Binden → rot/grün → Drift (einzeln, mit dem Binding-Skill) — Höhepunkt

Agent bootstrappt Cucumber + `strict` (Sicherheitsnetz: `examples-for-bdd/bdd/`).
Step Definitions im eigenen Stack. *Eine* deterministische Logik (SemVer-Compare
als Referenz-Empfehlung) als Step. Agent baut **gegen-grün**. **Der Drift-Moment:**
Szenario/Zahl ändern → CI wird **rot**. `strict: true` an/aus erleben. → mit dem
**Binding-Skill**.

### Akt 7 — Context Engineering für das Tool (rekursiv) + Synthese

- **Rekursives Dogfooding (kurz, einzeln):** Jeder schreibt eine `CLAUDE.md` +
  eine (conditional) Rule **für das eigene Tool** — ihre Artefakte werden zu
  Testdaten ihres eigenen Tools. Schließt den Meta-Kreis. Hier kommt das
  Context-Engineering-Vokabular (Smart Zone, Levels, Progressive Disclosure)
  *angewandt* vor, statt als Vorab-Vortrag (Unterschied zu Ablauf3, das CE als
  Akt 0 voranstellt).
- **Synthese (Plenum):** Die eine Architektur (Generator vs. Prüfer). Die
  Lernkette als Gesamtbild. Ehrliche Grenzen. **„Was nehmt ihr mit?"** → die
  Skills + das eigene Repo. Ausblick: AI-TDD als möglicher Folge-Workshop.

---

## 5. Die mitnehmbaren SDD-Skills (vorab gebaut)

**Entscheidung des Auftraggebers:** Die SDD-Skills werden **vor dem Workshop
fertig gebaut**, im Workshop am Beispielprojekt **angewendet** und **mitgenommen**
(verlässlich, geringes Risiko). Sie sind die konkrete Verkörperung „unserer
eigenen SDD-Form".

> Hinweis: Das in `erkenntnisse.md` Kap. 18 erwähnte `.claudesdd/`-Setup existiert
> in *diesem* Repo (noch) **nicht** — es muss als Vorarbeit erstellt werden. Das
> ist die wichtigste Vorbereitungsaufgabe für Ablauf4.

**Vorzubereitende Skills (Claude Code / OpenCode):**

| Skill | Zweck | Deckt ab |
|---|---|---|
| **`example-mapping`** | Facilitator-Skill für eine Mapping-Session | Vier-Farben-Format, „facilitate don't invent", Output-Struktur |
| **`gherkin-spec`** | grüne Karten → Domänen-Gherkin | Requirement→Scenario-Form, Given/When/Then-Disziplin, Freitext-Falle |
| **`bind-contract`** | `.feature` an Cucumber binden, strict | Step-Definitions-Gerüst, `strict`-Config, Drift-Demo |
| *(optional)* **`sdd-spec-plan`** | WAS/WIE-Litmustest, Spec- vs. Plan-Track | abgespeckte eigene SDD-Tracks (aus `erkenntnisse.md` Kap. 18) |

Diese Skills sind gleichzeitig **Domänen-Testdaten** für das CLI-Tool, das die
Teilnehmer bauen (Meta-Dogfooding) — ein Skill *ist* genau ein Artefakt, das das
Tool importieren können soll.

---

## 6. Tagesfahrplan (~7 h)

> Zeiten als Startgerüst mit bewusstem Puffer. Konzeptbogen kompakt am Stück,
> dann durchgehend Hands-on.

| Zeit | Akt | Format | Kern |
|---|---|---|---|
| **09:00** | **1 · Was ist eine Spec & warum?** (40') | Impuls | Wurzel (`specere`→Patentrecht 1833), fünf Zwecke, Spec in der Software (Royce/IEEE 830/Design by Contract/Agile). Die Verständnisgrenze. |
| **09:40** | **2 · Framework-Welt-Tour** (30') | Impuls + Tabelle | spec-kit / OpenSpec / BMAD / Kiro — Stärken **und** Schwächen. Pointe: „lebend ≠ erzwungen". |
| **10:10** | **3 · Unsere Erkenntnisse** (25') | Impuls | Prosa driftet → Contract; SbE/Example Mapping/Cucumber als Brücke; ehrliche Grenze. Bauplan für unsere Form. |
| 10:35 | *Pause* (15') | | |
| **10:50** | **4 · Vision + Setup + Example Mapping** (75') | Pitch + 🛠 Gruppen | Tool-Vision, Repo-Setup, `import`-Verhalten auf Karten. Skill: `example-mapping`. |
| 12:05 | *Mittag* (55') | | |
| **13:00** | **5 · Grüne Karten → Gherkin** (50') | 🛠 Einzeln | Domänen-Gherkin, `.feature` stack-neutral. Skill: `gherkin-spec`. |
| **13:50** | **6 · Binden → rot/grün → Drift** (95') | 🛠 Einzeln (Höhepunkt) | Cucumber + strict, Step Definitions, Agent baut gegen-grün, Drift-Moment. Skill: `bind-contract`. |
| 15:25 | *Pause* (15') | | |
| **15:40** | **7 · Context Eng. (rekursiv) + Synthese** (65') | 🛠 Mini + Plenum | CLAUDE.md + Rule fürs eigene Tool; Gesamtbild, ehrliche Grenzen, „Was nehmt ihr mit?", Ausblick. |
| **16:45** | **Ende** | | |

*(Netto ~6 h + ~85 min Pausen ≈ 7 h. Hands-on startet 10:50 — durch den kompakten
Bogen erst nach ~90 min, gemäß Auftraggeber-Entscheidung.)*

---

## 7. Wichtige Design-Entscheidungen (mit Begründung & Alternativen)

### 7.1 Deduktiv statt induktiv (die definierende Weiche)
- **Gewählt:** Konzeptbogen zuerst (Spec-Wurzel → Frameworks → Erkenntnisse →
  eigene Form), dann bauen.
- **Begründung:** Der Auftraggeber will explizit *diesen* anderen Ansatz, um ihn
  am Ende gegen die schmerz-zuerst-Variante (Ablauf1–3) zu vergleichen. Vorteil:
  „Contract" erscheint als logische Konsequenz einer alten Idee, nicht als
  Notlösung gegen Schmerz; intellektuell befriedigender, fundierter.
- **Trade-off:** Hands-on startet später (~90 min Input vorweg); das erste Tun
  kommt nicht in den ersten 30 min. Gegenmaßnahme: optionaler kurzer naiver Wurf
  in Akt 4; der Bogen selbst ist als Spannungsbogen gebaut, nicht als Vorlesung.

### 7.2 Framework-Tour fair & voll (Stärken UND Schwächen)
- **Gewählt:** balancierte Landkarte statt Strohmann.
- **Begründung:** Lernziel 2 ist „grobe Übersicht über Frameworks". Eine faire
  Tour respektiert die Teilnehmer und macht die „lebend ≠ erzwungen"-Pointe
  *stärker* (sie gilt sogar für die besten Tools).
- **Verworfen:** schwächen-lastige Kurztour (Ablauf3) — schneller, aber unfair
  und für ein eigenes Lernziel zu dünn.

### 7.3 Kompakter Konzeptbogen, dann Hands-on
- **Gewählt** (Auftraggeber). **Verworfene Alternativen:** *Interleaven*
  (concept→do→concept, Hände früher schmutzig, aber Bogen zerhackt); *früher
  Mini-Vorgeschmack* (anfassen→Konzept→Hands-on, unterbricht den Gedankengang).

### 7.4 SDD-Skills vorab bauen
- **Gewählt** (Auftraggeber): verlässlich, Sicherheitsnetz. **Verworfen:** *live
  erarbeiten* (authentischer, aber zeitriskant bei 7 h); *Hybrid* (Gerüst vorab,
  Feinschliff live).
- **Konsequenz:** `.claudesdd/`-Skills müssen vor dem Workshop erstellt werden
  (§5, §9).

### 7.5 Breite Vision, ein Schnitt gebaut
- **Gewählt** (Auftraggeber): Ambition (volle Tool-Vision) + Fokus (ein Schnitt).
  **Verworfen:** *nur ein Schnitt* (Ablauf1–3, disziplinierter aber weniger
  ambitioniert); *zwei Schnitte* (mehr Breite, weniger Tiefe bei 7 h).

### 7.6 Context Engineering angewandt statt vorangestellt
- **Gewählt:** CE kommt in Akt 7 *rekursiv* (CLAUDE.md/Rule fürs eigene Tool),
  nicht als Vorab-Vortrag.
- **Begründung:** Der deduktive Bogen beginnt bei der Spec, nicht beim Werkzeug-
  Kontext. CE-Vokabular wird im Bauen ohnehin gebraucht; angewandt bleibt es
  hängen. **Unterschied zu Ablauf1/3** (CE als Akt 0 vorangestellt) und zu
  Ablauf2 (CE als Enabler am Ende).
- **Trade-off:** Das erste Bauen läuft mit etwas weniger CE-Vorwissen; akzeptiert,
  weil der Agent das Setup ohnehin bootstrappt.

### 7.7 Example Mapping in Gruppen
- **Gewählt:** wie Ablauf1–3 — einzige Ausnahme von Einzelarbeit; *„facilitate,
  don't invent"* braucht Dialog. *(Vom Auftraggeber zu bestätigen.)*

---

## 8. Material-Mapping (welche Folie/Quelle in welchen Akt)

- **Akt 1 (NEU — nicht in slides-v1):** muss neu gebaut werden. Quellen: §3 +
  §10 dieses Dokuments (Etymologie, fünf Zwecke, Royce/IEEE 830/DbC/Agile).
- **Akt 2:** SDD-Deck (Framework-Vergleich) + Tabelle aus §3 dieses Dokuments
  (Stärken/Schwächen, Kiro/Tessl ergänzt) + `erkenntnisse.md` Kap. 4–7.
- **Akt 3:** SDD-Deck („SDD – the hard truth", „That thing has a name: a
  contract", generieren-vs-binden) + `erkenntnisse.md` Kap. 8–12, 16.
  `slides-v1/akt2-warum-sdd.html`, `akt3a/b/c` teilweise wiederverwendbar.
- **Akt 4:** EXACT-Deck „Example Mapping" + `slides-v1/akt3a-example-mapping.html`.
- **Akt 5:** `erkenntnisse.md` Kap. 11–12 + `slides-v1/akt3b-gherkin.html`.
- **Akt 6:** `examples-for-bdd/bdd/` (lauffähig) + `erkenntnisse.md` Kap. 12–15 +
  `slides-v1/akt3c-binden-rot-gruen.html`.
- **Akt 7:** Context-Engineering-Deck + `slides-v1/akt0-context-engineering.html`
  (umgewidmet von „Akt 0" zu „angewandt am Ende") + `erkenntnisse.md` Kap. 9, 16.

---

## 9. Offene Punkte / Vorbereitung

1. **Genauer Workshop-Titel** vom Auftraggeber nachreichen (§0).
2. **SDD-Skills bauen** (`.claudesdd/`: `example-mapping`, `gherkin-spec`,
   `bind-contract`, optional `sdd-spec-plan`) — **wichtigste Vorarbeit** (§5).
3. **Akt-1-Folien neu bauen** (Spec-Wurzel & Zweck) — gibt es in slides-v1 nicht.
4. **Drift-Slice festlegen:** SemVer-Compare (Empfehlung) oder `applyTo`-Glob.
   Referenz-Implementierung (feature + steps, Node/TS) vorbereiten.
5. **Beispiel-Registry** mit Demo-Skills/Rules/MCP-Configs (stack-neutral) als
   gemeinsame Ausgangsbasis fürs `import`-Beispiel.
6. **BDD-Vorlagen je Stack** verlinken (pytest-bdd, SpecFlow, Cucumber-JVM).
7. **Example Mapping in Gruppen** bestätigen; Miro/analog vorbereiten.
8. **Faktencheck offene Punkte** abschließen (§10): IEEE-830-Jahreszahlen,
   Z-Notation-Datum, Dan-North↔Ubiquitous-Language-Zuschreibung.
9. **Detail-Moderationsskript** je Akt (Timing, Handouts, Debrief-Fragen).

---

## 10. Faktencheck & Quellenlage (damit Akt 1 nichts überverkauft)

Die historische Fundierung wurde recherchiert und adversarisch gegengeprüft.
**Bestätigt:** Etymologie (`specere`→`species`→`specificare`→`specificatio`);
„specification" technisch ab 1833 im Patentrecht; „spec" ab 1956; Whitworth-
Gewinde 1841; Royce 1970 ohne „Waterfall"-Begriff; Adzics Vorläuferbuch 2009;
Dan North „Introducing BDD" 2006.

**Mit Vorsicht / präzise erzählen:**
- **Royce-Mythos:** Er hat „Waterfall" *nicht* erfunden und davor *gewarnt*. Aber
  auch nicht „eigentlich agil" — er empfahl weiterhin Doku & Design, nur iterativ.
- **Adzic & „Specification by Example":** Adzic hat den Begriff **nicht geprägt**,
  sondern die Praxis (aus ATDD/BDD/FIT) konsolidiert, dokumentiert und stark
  **popularisiert** (Buch 2011). Der Begriff existierte vorher im agilen Umfeld.
- **Etymologie ≠ Ingenieurzweck:** Die lat. Wurzel erklärt das *Wort*, nicht den
  technischen Zweck (späte semantische Verengung im 19. Jh.). Keine ungebrochene
  Linie „Rom → IEEE 830" behaupten.
- **Austauschbare Teile:** Idee älter & vielfach zugeschrieben (Blanc, Whitney —
  teils Legende). Nicht als Einzelheldengeschichte erzählen.
- **Formale Methoden:** *Nische* (Avionik, Bahn, Chips, AWS/Azure via TLA+), nicht
  *gescheitert*.
- **Agile:** wertet Doku nicht ab, sondern relativiert; Spec lebt in Tests/Typen/
  Contracts weiter.

**Noch gegenzuprüfen vor Zitat:** exakte IEEE-830-Versionsjahre (1984/1993/1998),
genaues Z-Notation-Erstdatum, die explizite Zuschreibung „North verband BDD mit
Evans' Ubiquitous Language" (an dannorth.net prüfen). Tessls aktuelle
Positionierung & SDD-Markt-Reifegrade sind schnelllebig.

---

## 11. Ablauf-Vergleich (das eigentliche Ziel der Session)

Vier Varianten liegen jetzt vor. Sie unterscheiden sich vor allem in **Dramaturgie
und Einstieg**, nicht im Kern-Material:

| | **Ablauf1/2/3** (induktiv) | **Ablauf4** (deduktiv) |
|---|---|---|
| **Einstieg** | Schmerz: Vibe-Coding gone wrong, selbst erleben | Wurzel: was *ist* eine Spec, warum erfunden |
| **Motivation für Contract** | aus erlittenem Schmerz | aus der Funktion (Abnahme über Verständnisgrenze) |
| **Hands-on-Start** | sehr früh (Akt 1, ~30 min) | nach kompaktem Bogen (~90 min) |
| **Framework-Tour** | knapp, schwächen-lastig | fair, Stärken **und** Schwächen, + Kiro/Tessl |
| **Context Engineering** | vorangestellt (1/3) bzw. Enabler am Ende (2) | rekursiv angewandt am Ende (Akt 7) |
| **Tool-Scope** | nur ein Schnitt (`import`) | breite Vision, ein Schnitt gebaut |
| **SDD-Skills** | nicht zentral | vorab gebaut, angewandt, mitgenommen |
| **Risiko** | „warum Theorie?" wenn Schmerz zu schwach | „wann bauen wir endlich?" wenn Bogen zu lang |
| **Stärke** | emotional, sofort greifbar | fundiert, intellektuell befriedigend, faire Landkarte |

**Empfehlung zur Entscheidung:** Beide Wege führen zur selben Lernkette. Ablauf4
ist die bessere Wahl für ein Publikum, das **Tiefe & Einordnung** schätzt und das
*Warum hinter dem Warum* hören will; die induktiven Abläufe sind besser, wenn der
**emotionale Hook** und das *frühe Selbermachen* Priorität haben. Eine
Mischvariante (kurzer Schmerz-Kontrapunkt in Akt 4 von Ablauf4) ist möglich und
oben bereits als Option eingebaut.
