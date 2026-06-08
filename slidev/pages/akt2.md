---
layout: cc
variant: title
nologo: true
---

<span class="secno">02</span>
<h1>Drei Frameworks,<br>vier Phasen</h1>

<!--
• spec-kit, OpenSpec, BMAD — kein Tutorial
• gemeinsame Struktur, drei Schweregrade
• alle denselben Weg, nur unterschiedlich schwer
• 25 Min Input, Leitmatrix als Anker
-->

---
layout: cc
variant: center
---

<span class="secno">02</span>
<p class="huge">Dieselbe Idee.<br>Drei Umsetzungen.</p>

<!--
• Kernthese: dieselbe Idee, drei Umsetzungen
• Intention vor Code, versionierbares Artefakt
• Unterschied nur Gewicht/Ceremony, nicht Prinzip
-->

---
layout: cc
---

<span class="secno">02</span>
<h2 class="slash">Die vier Phasen</h2>
<div class="flow" style="margin-top:0.7em">
  <span class="step">Spec</span><span class="arrow">→</span>
  <span class="step">Plan</span><span class="arrow">→</span>
  <span class="step">Tasks</span><span class="arrow">→</span>
  <span class="step">Implement</span>
</div>
<p class="big" style="margin-top:0.8em">Jedes Framework läuft <em class="u">denselben</em> Weg.</p>

<!--
• Spec (was), Plan (wie/Architektur), Tasks (Häppchen), Implement (bauen)
• gemeinsame Vergleichs-Achse aller drei
• andere Befehle, anderes Gewicht — gleicher Weg
• Raster für nächste Matrix-Folie
-->

---
layout: cc
---

<span class="secno">02</span>
<h2 class="slash">Drei Frameworks × vier Phasen</h2>
<table>
  <thead><tr><th>Phase</th><th>spec-kit</th><th>OpenSpec</th><th>BMAD</th></tr></thead>
  <tbody>
    <tr><td><strong>Spec</strong></td><td><code class="inline">/specify</code></td><td><code class="inline">/opsx:propose</code> + Delta</td><td><code class="inline">bmad-prd</code></td></tr>
    <tr><td><strong>Plan</strong></td><td><code class="inline">/plan</code> + contracts</td><td><code class="inline">design.md</code> (opt.)</td><td>Architecture + ADRs</td></tr>
    <tr><td><strong>Tasks</strong></td><td>nach User Story</td><td>flache Checkliste</td><td>Epics → Stories</td></tr>
    <tr><td><strong>Implement</strong></td><td><code class="inline">/implement</code> + <code class="inline">/analyze</code></td><td><code class="inline">/opsx:apply</code></td><td><code class="inline">dev-story</code>-Loop</td></tr>
  </tbody>
</table>

<!--
• zentrale Leitmatrix: zeilenweise lesen, jede Phase 3x
• gleiche Phasen, anders benannt, anders schwer
• Tasks: User Story vs. flache Checkliste vs. Epics → Stories
• Pointe unten: spec-kit schwer, OpenSpec leicht, BMAD am schwersten
• nicht jede Zelle vorlesen, Achse zählt
-->

---
layout: cc
---

<span class="secno">02</span>
<h2 class="slash">spec-kit <span class="src-tag">· GitHub</span></h2>
<p class="big">Stärkste <em class="u">Gates</em>.</p>
<p class="note" style="margin-top:0.3em">Ein <strong>Gate</strong> = ein Prüfschritt, der den nächsten erst freigibt.</p>
<ul class="dots compact" style="margin-top:0.5em">
  <li class="g"><strong>+</strong> <code class="inline">/clarify</code> erzwingt offene Fragen vor dem Plan</li>
  <li class="g"><strong>+</strong> <code class="inline">/analyze</code> prüft Konsistenz, <strong>Constitution</strong> hält Projektregeln</li>
  <li class="p"><strong>–</strong> schwergewichtig; „Specs ausführbar" bleibt Vision — keine deterministische Bindung</li>
</ul>

<!--
• spec-kit: stärkste Gates
• /clarify zwingt Fragen vor Plan, /analyze read-only Konsistenz
• Constitution hält Projektregeln; Tasks nach User Story
• Problem: schwergewichtig, „Specs ausführbar" bleibt Vision
• /analyze = LLM-Urteil, keine deterministische Bindung (Schluss-Pointe)
-->

---
layout: cc
---

<span class="secno">02</span>
<h2 class="slash">OpenSpec</h2>
<p class="big"><em class="u">Brownfield</em>-first.</p>
<p class="note" style="margin-top:0.3em"><strong>Brownfield</strong> = Arbeit an bestehendem Code, nicht auf grüner Wiese.</p>
<ul class="dots compact" style="margin-top:0.5em">
  <li class="g"><strong>+</strong> beschreibt nur das <strong>Delta</strong>: ADDED / MODIFIED / REMOVED</li>
  <li class="g"><strong>+</strong> „actions, not phases" — fluide, leichtester der drei</li>
  <li class="p"><strong>–</strong> <code class="inline">verify</code> ist LLM-basiert &amp; nicht-blockierend — gepflegt, nicht erzwungen</li>
</ul>

<!--
• OpenSpec: brownfield-first, Gegenpol zu spec-kit
• nur Delta: ADDED / MODIFIED / REMOVED
• „actions, not phases", fluid, leichtester der drei
• Problem: verify LLM-basiert, nicht-blockierend
• Muster: lebend, nicht erzwungen
-->

---
layout: cc
---

<span class="secno">02</span>
<h2 class="slash">BMAD</h2>
<p class="big">Rollen &amp; <em class="u">Traceability</em>.</p>
<p class="note" style="margin-top:0.3em"><strong>Traceability</strong> = jede Anforderung lückenlos bis zum Code nachverfolgbar.</p>
<ul class="dots compact" style="margin-top:0.5em">
  <li class="g"><strong>+</strong> Rollen-Agenten: Analyst · PM · Architect · Dev</li>
  <li class="g"><strong>+</strong> Architecture <strong>vor</strong> Stories; FR→Epic-Map verliert keine Anforderung</li>
  <li class="p"><strong>–</strong> 8–12 Workflows, Persona-Ballast, Gefahr von Artefakt-Drift</li>
</ul>

<!--
• BMAD: vollster Lebenszyklus, per Default am schwersten
• Rollen: Analyst, PM, Architect, Dev — je frischer Chat
• Architektur vor Stories; FR→Epic-Map = echte Traceability
• Preis: 8–12 Workflows, Persona-Ballast, Artefakt-Drift
• selbst erleben in Akt 5
-->

---
layout: cc
---

<span class="secno">02</span>
<h2 class="slash">BMAD genauer — was steckt drin?</h2>
<p class="body"><strong>B</strong>uild <strong>M</strong>ore <strong>A</strong>rchitect <strong>D</strong>reams (v6) —
eine offene Community-Methode, an keinen Anbieter gebunden. Statt einzelner Prompts organisiert sie den
<strong>ganzen Lebenszyklus</strong> über drei Bausteine:</p>
<ul class="dots compact" style="margin-top:0.4em">
  <li class="y"><strong>Rollen-Agenten</strong> — Analyst · PM · Architect · Dev, jede:r mit eigenem Fokus &amp; frischem Kontext</li>
  <li class="b"><strong>Strukturierte Artefakte</strong> — Brief, PRD, Architecture, Epics &amp; Stories bauen aufeinander auf</li>
  <li class="g"><strong>Workflows</strong> — geführte Abläufe pro Schritt; man wählt sie nach Projektgröße</li>
</ul>
<p class="note">Aktuell: <strong>v6 / BMM</strong> (BMad Method). Skaliert von <code class="inline">quick-dev</code> (schlanker Modus, routet zum kleinsten sicheren Pfad) bis zum vollen Lebenszyklus.</p>

<!--
• echte BMAD-Einführung vor Akt 5
• Name v6: Build More Architect Dreams; alt v4/v5 anders, nur in Metadaten
• offene Community-Methode, kein Vendor-Lock
• mehr als „mal prompten": drei Bausteine — Rollen, Artefakte, Workflows
• jede Rolle frischer Kontext: Fokus, aber Gewicht
• scale-adaptive: quick-dev schlank ↔ voller Lebenszyklus
• quick-dev: nicht volle Pipeline, Intent komprimiert, Spec bestätigt, kleinster sicherer Pfad
• aktuell v6 / BMM; nächste Folie: vier Phasen
-->

---
layout: cc
---

<span class="secno">02</span>
<h2 class="slash">BMAD — vier Phasen, je eigene Workflows</h2>
<table>
  <thead><tr><th>Phase</th><th>Rolle</th><th>Workflow</th><th>Artefakt</th></tr></thead>
  <tbody>
    <tr><td><strong>Analysis</strong></td><td>Analyst</td><td><code class="inline">brainstorm</code> · <code class="inline">research</code></td><td>Project Brief</td></tr>
    <tr><td><strong>Planning</strong></td><td>PM</td><td><code class="inline">prd</code></td><td>PRD — FR1, FR2 …</td></tr>
    <tr><td><strong>Solutioning</strong></td><td>Architect</td><td><code class="inline">architecture</code></td><td>Architecture + ADRs</td></tr>
    <tr><td><strong>Implementation</strong></td><td>Dev</td><td><code class="inline">create-story</code> → <code class="inline">dev-story</code> → <code class="inline">code-review</code></td><td>Stories → Code</td></tr>
  </tbody>
</table>

<!--
• Herzstück: vier Phasen, je Rolle, Workflow, Artefakt
• Analysis (Analyst): optional, brainstorm/research → Project Brief
• Planning (PM): prd → PRD mit FR1, FR2 …
• Solutioning (Architect): architecture, ADRs, vor den Stories
• Implementation (Dev): create-story → dev-story → code-review als Loop
• weitere Workflows (sprint-planning, retrospective) nach Bedarf
• Stärke: FR→Epic-Map, nichts geht verloren — rechtfertigt Schwere, Akt 5
-->

---
layout: cc
variant: center
---

<span class="secno">02</span>
<p class="lead">Das Kernproblem aller drei</p>
<p class="huge" style="margin-top:0.3em">Keines lebt<br>„Spec als <span class="accent">Source of Truth</span>".</p>
<p class="big" style="margin-top:0.7em">Sobald Code existiert,<br>ist faktisch der <em class="u">Code</em> die Wahrheit.</p>

<!--
• Kernproblem aller drei: „Spec als Source of Truth" wird nicht gelebt
• sobald Code existiert: Code = Wahrheit
• jetzt: WIE entsteht Spec, was passiert im Zyklus
• Teil-Ausnahme OpenSpec (Pflege-Sinn, erzwungener Delta-Merge)
• aber keine maschinelle Garantie Spec = Code, gleich auflösen
-->

---
layout: cc
---

<span class="secno">02</span>
<h2 class="slash">Wie entsteht eine Spec? Drei Modelle</h2>
<table>
  <thead><tr><th>&nbsp;</th><th>spec-kit</th><th>OpenSpec</th><th>BMAD</th></tr></thead>
  <tbody>
    <tr><td><strong>Zuschnitt</strong></td><td>pro Feature / Git-Branch</td><td>Delta pro Requirement</td><td>Dokument pro SDLC-Phase</td></tr>
    <tr><td><strong>Form</strong></td><td>volle <code class="inline">spec.md</code> (+ plan, contracts)</td><td>ADDED / MODIFIED / REMOVED</td><td>Brief → PRD → Arch → Stories</td></tr>
    <tr><td><strong>Ebene</strong></td><td>Feature-Snapshot</td><td>Domäne → Requirement → Scenario</td><td>Phasen-Kette, top-down</td></tr>
  </tbody>
</table>

<!--
• „Spec" meint überall etwas anderes, schon bei Entstehung
• spec-kit: pro Feature volles Bündel an Git-Branch, kein Delta
• OpenSpec: Delta (ADDED/MODIFIED/REMOVED) auf Requirement/Scenario
• BMAD: Kette Brief → PRD → Architecture → Stories, je Input der nächsten
• Pointe: drei Granularitäten — Feature, Delta, Phasen-Dokument
-->

---
layout: cc
---

<span class="secno">02</span>
<h2 class="slash">Taktung: kleinteilig vs. groß-upfront</h2>
<table>
  <thead><tr><th>&nbsp;</th><th>spec-kit</th><th>OpenSpec</th><th>BMAD</th></tr></thead>
  <tbody>
    <tr><td><strong>Taktung</strong></td><td>vorab, Voll-Specs</td><td>kleinteilig &amp; fluid</td><td>groß-upfront <span class="lead">(<code class="inline">quick-dev</code> schlank)</span></td></tr>
    <tr><td><strong>Dev-Loop</strong></td><td>Phasen + Gates</td><td>„actions, not phases"</td><td>Waterfall-Planung, dann iterativ</td></tr>
    <tr><td><strong>Upfront-Design</strong></td><td><span class="pill blue">mittel</span></td><td><span class="pill green">gering</span></td><td><span class="pill red">Big-Upfront</span></td></tr>
  </tbody>
</table>
<p class="note">Belegbar „klein &amp; schnell" ist <strong>nur OpenSpec</strong>. spec-kit steht mit Voll-Specs &amp; starren Phasen näher bei <strong>BMAD</strong>. BMAD hat mit <code class="inline">quick-dev</code> einen schlanken Modus (nicht default) — schmaler, aber <strong>weiterhin generativ, ohne Drift-Detection</strong>.</p>

<!--
• Spektrum kleinteilig-iterativ ↔ groß-upfront
• KORREKTUR: spec-kit NICHT der schnelle, kleinteilige — steht näher bei BMAD
• OpenSpec: kleinteilig/fluid, lite, brownfield — schnellster Zyklus
• BMAD: groß-upfront, PRD + Architecture vorab, dann iterativ Story-für-Story
• quick-dev (nicht default): schmaler, aber Spec eingefroren, Review LLM, keine Drift-Detection — stützt „lebend ≠ erzwungen"
• spec-kit: dazwischen, näher bei BMAD, starre Phasen
• ehrlich: „schneller" abgeleitet, keine Stoppuhr
-->

---
layout: cc
---

<span class="secno">02</span>
<h2 class="slash">Wo lebt der aktuelle Stand?</h2>
<ul class="dots">
  <li class="p"><strong>spec-kit</strong> → der <em class="u">Code</em>. Jede <code class="inline">spec.md</code> ist eine Branch-Momentaufnahme, kein Rückmerge.</li>
  <li class="p"><strong>BMAD</strong> → der <em class="u">Code</em>. Planungs-Artefakte sind Wegwerf-Gerüst; Doku wird rückwärts aus dem Code gezogen.</li>
  <li class="g"><strong>OpenSpec</strong> → die <em class="u">Spec</em>. Einzige Ausnahme: erzwungener Delta-Merge hält die Domänen-Spec lebend.</li>
</ul>
<p class="note">Das laute Versprechen „Spec als Source of Truth" hält faktisch <strong>nur OpenSpec</strong> — und auch das nur per Prozessdisziplin.</p>

<!--
• faktische Source of Truth: bei 2 von 3 der Code
• spec-kit → Code: spec.md am Branch, kein Rückmerge; Feature 007 vs. 001 widersprüchlich
• BMAD → Code: „archive/delete" Artefakte, document-project scannt Code → Doku neu
• OpenSpec → Spec: einzige Ausnahme, erzwungener Merge beim Archive; nur Disziplin
• Pointe: Etikett tragen alle, einlösen nur OpenSpec, per Disziplin
-->

---
layout: cc
variant: center
---

<span class="secno">02</span>
<p class="huge">Sobald entwickelt wird,<br>veraltet die Spec.</p>
<div class="flow compact" style="margin-top:0.9em;justify-content:center">
  <span class="step">Spec entsteht</span><span class="arrow">→</span>
  <span class="step">Code wird gebaut</span><span class="arrow">→</span>
  <span class="step">weiterentwickelt</span><span class="arrow">→</span>
  <span class="step">Spec fällt zurück</span>
</div>

<!--
• gemeinsamer Kern: Spec veraltet, sobald weiterentwickelt wird
• alle erzeugen Spec vor/parallel zum Code, dann fällt sie zurück
• spec-kit & BMAD: sofort, kein Rückmerge bzw. Wegwerf-Artefakt
• OpenSpec: mildert per Merge, kann aber außerhalb des Flows driften
• keines hat maschinelle Garantie Spec = Code — Drift unbemerkt
-->

---
layout: cc
---

<span class="secno">02</span>
<h2 class="slash">Vor- &amp; Nachteile</h2>
<table style="font-size:0.6em">
  <thead><tr><th>&nbsp;</th><th>Stärke</th><th>Schwäche</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>spec-kit</strong></td>
      <td>Startet ein neues Feature komplett: erzeugt aus einer Idee alle Plan-Dokumente, mit strengen Kontrollschritten. Reif, von GitHub.</td>
      <td>Jedes Feature lebt für sich — kein Gesamtbild. Specs widersprechen sich mit der Zeit, niemand merkt's. Aufwand fällt jedes Mal neu an.</td>
    </tr>
    <tr>
      <td><strong>OpenSpec</strong></td>
      <td>Hält als einziges die Spec dauerhaft aktuell. Leicht &amp; schnell, gut für mehrere Leute parallel, später wenig Aufwand. Reines Markdown — kaum Abhängigkeit.</td>
      <td>Die Prüfung ist nur ein KI-Hinweis, nicht verpflichtend. Funktioniert nur, wenn man diszipliniert pflegt. Kleines Projekt, ein Maintainer.</td>
    </tr>
    <tr>
      <td><strong>BMAD</strong></td>
      <td>Kompletter Ablauf von Idee bis Code mit klaren Rollen. Architektur zuerst, nichts geht verloren. Anpassbar an die Projektgröße, sehr reif.</td>
      <td>Spec ist nur Wegwerf-Planung — am Ende zählt der Code. Viel Aufwand, der nicht bleibt. Stärkste Bindung an das Tool selbst.</td>
    </tr>
  </tbody>
</table>

<!--
• Pro/Contra einfach, fair, kein Ranking
• spec-kit: stark zum Feature-Start, reif/GitHub — aber kein Gesamtbild, Aufwand jedes Mal neu
• OpenSpec: hält Spec aktuell, leicht, teamtauglich, wenig Lock-in — aber Prüfung nur KI-Hinweis, Disziplin, klein
• BMAD: voller Prozess, Rollen, Architektur zuerst, skaliert, reif — aber Spec Wegwerf, viel Aufwand, stärkste Tool-Bindung
• Kernsatz: drei Tools, drei Aufträge, kein universeller Sieger
-->

---
layout: cc
variant: center
---

<span class="secno">02</span>
<p class="huge">lebend<br>≠<br>erzwungen</p>
<p class="lead" style="margin-top:0.6em">Deterministische Drift-Detection hat <strong>keines</strong> der drei.</p>

<!--
• Pointe: gemeinsame Lücke aller drei, Brücke zu Akt 3
• alle: Intention vor Code + versionierbares Artefakt; Wahl = Ceremony/Brownfield/Lock-in, nicht besser/schlechter
• jede Verifikation (/analyze, verify, code-review) = LLM-Urteil, meist nicht-blockierend
• lebend = gepflegt, nicht erzwungen
• keines hat deterministische Drift-Detection — diese Lücke schließt Akt 3
-->
