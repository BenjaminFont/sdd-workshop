---
layout: cc
variant: title
nologo: true
---

<span class="secno">02</span>
<h1>Drei Frameworks,<br>vier Phasen</h1>
<div class="subtitle">Dieselbe Idee, drei Schweregrade</div>

<!--
Titelfolie zu Akt 2 — die Framework-Tour.
Ziel: Erwartung setzen — wir lehren nicht drei Tools, sondern zeigen eine gemeinsame Struktur in drei Schweregraden.
Sagen kannst du:
„Wir schauen uns spec-kit, OpenSpec und BMAD an — aber nicht als Tutorial.
Die Pointe ist: alle drei laufen denselben Weg, nur unterschiedlich schwer.
25 Minuten, reiner Input, eine Leitmatrix als Anker."
-->

---
layout: cc
variant: center
---

<span class="secno">02</span>
<p class="huge">Dieselbe Idee.<br>Drei Schweregrade.</p>

<!--
Leitsatz-Folie, die These des ganzen Akts auf einer Zeile.
Ziel: Den roten Faden verankern, bevor Details kommen — die Frameworks unterscheiden sich in Ceremony, nicht im Prinzip.
Sagen kannst du:
„Merkt euch diesen Satz. Egal welches Framework — die Idee dahinter ist immer dieselbe:
Intention vor Code, ein versionierbares Artefakt dazwischen.
Was sich unterscheidet, ist nur das Gewicht — wie viel Zeremonie das Framework verlangt."
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
Zeigt die vier Phasen Spec → Plan → Tasks → Implement als gemeinsame Achse.
Ziel: Die Vergleichs-Achse einführen, an der wir gleich alle drei Frameworks aufreihen — das ist das Raster für die Matrix-Folie.
Sagen kannst du:
„Vier Phasen: erst Spec (was soll gebaut werden), dann Plan (wie, Architektur/Contracts),
dann Tasks (in umsetzbare Häppchen schneiden), dann Implement (bauen).
Jedes der drei Frameworks geht genau diesen Weg — nur mit anderen Befehlen und anderem Gewicht.
Damit habt ihr das Raster für die nächste Folie."
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
    <tr><td><strong>Default</strong></td><td><span class="pill red">schwer</span></td><td><span class="pill green">leicht</span></td><td><span class="pill red">am schwersten</span></td></tr>
  </tbody>
</table>

<!--
Die zentrale Leitmatrix des Akts — drei Frameworks in den Spalten, vier Phasen in den Zeilen.
Ziel: Auf einen Blick zeigen, dass dieselben Phasen überall auftauchen, nur unterschiedlich benannt und unterschiedlich schwer. Das ist der didaktische Kern.
Sagen kannst du:
„Lest die Tabelle zeilenweise: jede Phase, drei Mal.
Spec heißt bei spec-kit /specify, bei OpenSpec /opsx:propose plus Delta, bei BMAD ein PRD mit FR1, FR2…
Bei den Tasks der sichtbarste Unterschied: spec-kit schneidet nach User Story, OpenSpec macht eine flache Checkliste, BMAD geht Epics → Stories.
Unterste Zeile ist die Pointe: spec-kit schwer, OpenSpec leicht, BMAD am schwersten — das vertiefen die nächsten drei Folien."
Nicht jede Zelle vorlesen — die Achse zählt.
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
Erstes Framework-Porträt: spec-kit — ein charakteristischer Zug, ein Problem.
Ziel: spec-kit als das Framework mit den stärksten Kontroll-Gates positionieren — und gleich die Grenze dieser Gates zeigen.
Sagen kannst du:
„spec-kits Markenzeichen sind die Gates: /clarify zwingt offene Fragen vor den Plan,
/analyze prüft read-only auf Konsistenz, die Constitution hält Projektregeln fest.
Tasks werden nach User Story geschnitten — jede Story ein testbares Inkrement.
Das Problem: schwergewichtig, und das Versprechen „Specs sind ausführbar" bleibt eine Vision.
/analyze ist ein LLM-Urteil, keine deterministische Bindung an den Code — wichtig für die Schluss-Pointe."
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
Zweites Porträt: OpenSpec — der leichteste, brownfield-orientierte Ansatz.
Ziel: Den Gegenpol zu spec-kit zeigen — „actions, not phases", fluide statt starr — und seine eigene Schwachstelle benennen.
Sagen kannst du:
„OpenSpec ist brownfield-first: statt einer kompletten Spec beschreibt man nur das Delta —
was wird ADDED, MODIFIED, REMOVED. Das passt zu bestehenden Codebasen.
Es denkt in Aktionen, nicht in Phasen — ein fluider Ablauf, am leichtesten von den dreien.
Das Problem: verify ist LLM-basiert und nicht-blockierend — die Spec wird gepflegt, aber nicht erzwungen.
Wieder dasselbe Muster: lebend, nicht durchgesetzt."
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
Drittes Porträt: BMAD — der vollste Lebenszyklus, am schwersten per Default.
Ziel: BMADs Stärke (Rollen + lückenlose Traceability) fair würdigen und zugleich den Preis dieser Vollständigkeit zeigen — wichtig, weil BMAD später dual gebaut wird.
Sagen kannst du:
„BMAD bringt Rollen mit — Analyst, PM, Architect, Dev — jeweils in eigenem, frischem Chat.
Architektur kommt vor den Stories, und jede Anforderung wird per FR→Epic-Map lückenlos nachverfolgt — echte Traceability.
Der Preis: 8–12 Workflows, Persona- und Approval-Ballast, und die Gefahr von Artefakt-Drift, wenn Doku und Code auseinanderlaufen.
Das spürt ihr in Akt 5 selbst — dort baut ihr denselben Schnitt einmal mit BMAD."
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
Erste Vertiefungsfolie zu BMAD — gibt den Teilnehmern eine echte Einführung, bevor sie es in Akt 5 selbst bauen.
Ziel: Die Teilnehmer abholen, die wegen „BMAD" gekommen sind — sie sollen verstehen, was BMAD im Kern ausmacht und dass es eine durchdachte, skalierbare Methode ist.
Was du sagen kannst:
• Der Name: in v6 steht BMAD für Build More Architect Dreams (laut offizieller Doku & README; das ältere v4/v5-Akronym „Breakthrough Method for Agile AI-Driven Development" steht nur noch im GitHub-Metadatenfeld). Eine offene Community-Methode, nicht an einen Vendor gebunden.
• Der Unterschied zu „mal eben prompten": BMAD strukturiert den gesamten Weg von der Idee bis zum Code über drei Bausteine — Rollen (spezialisierte Agenten), Artefakte (die aufeinander aufbauen) und Workflows (geführte Abläufe).
• Jede Rolle läuft typischerweise in frischem Kontext — gut für Fokus, aber Teil des Gewichts.
• Wichtig: BMAD ist scale-adaptive — für einen kleinen Fix nimmt man den schlanken quick-dev-Workflow, für ein großes Vorhaben den vollen Lebenszyklus. Man muss nicht alles fahren. quick-dev fährt NICHT die volle 4-Phasen-Pipeline, sondern komprimiert den Intent, lässt eine Spec bestätigen und routet dann zum kleinsten sicheren Pfad (One-Shot direkt, sonst leichte Planung). Genauer als „überspringt Phasen 1–3".
• Aktuelle Generation ist v6, intern „BMM" (BMad Method) genannt — die nächste Folie zeigt die vier Phasen konkret.
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
<p class="note" style="margin-top:0.6em"><strong>Architecture vor Stories</strong> (v6) · FR→Epic-Coverage-Map sichert lückenlose Traceability · Phase 4 läuft in einem <code class="inline">dev-story</code>-Loop.</p>

<!--
Zweite Vertiefungsfolie — das Herzstück: die vier BMAD-Phasen mit Rolle, Workflow und Artefakt je Phase.
Ziel: Konkret zeigen, wie BMAD arbeitet und welche Möglichkeiten (Workflows) es pro Phase gibt — damit niemand das Gefühl hat, BMAD sei nur ein Schlagwort geblieben.
Was du sagen kannst:
• Lest die Tabelle zeilenweise — jede Phase hat ihre eigene Rolle, ihren Workflow und ihr Artefakt.
• Analysis (Analyst): optional, klärt mit brainstorm/research das Problem → Project Brief.
• Planning (PM): prd macht aus dem Brief ein PRD mit nummerierten Anforderungen (FR1, FR2 …).
• Solutioning (Architect): architecture trifft die Tech-Entscheidungen und hält sie als ADRs fest — in v6 bewusst vor den Stories.
• Implementation (Dev): create-story konkretisiert eine Story, dev-story setzt sie um, code-review prüft — das läuft als Loop pro Story.
• Es gibt weitere Workflows drumherum (z. B. sprint-planning, retrospective) — man kombiniert sie nach Bedarf.
• Die FR→Epic-Coverage-Map ist BMADs Stärke: keine Anforderung geht zwischen PRD und Stories verloren (Traceability). Das ist der Mehrwert, der die Schwere rechtfertigt — genau das fahrt ihr in Akt 5 selbst.
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
Rahmen-Folie: Das gemeinsame Kernproblem aller drei Frameworks zuspitzen, bevor wir es im Detail vergleichen.
Ziel: Die These setzen — alle predigen „Spec als Source of Truth", aber keines lebt sie wirklich. Ab dem Moment, in dem Code existiert und weiterentwickelt wird, ist faktisch der Code die Wahrheit.
Sagen kannst du: „Alle drei haben dasselbe Versprechen auf dem Etikett — die Spec sei die Source of Truth. Wir schauen uns jetzt an, WIE jedes mit Specs umgeht: wie sie entstehen und was im Entwicklungszyklus mit ihnen passiert. Die unbequeme Beobachtung vorweg: sobald Code da ist, lebt die Wahrheit im Code, nicht in der Spec — mit einer Teil-Ausnahme, OpenSpec."
Wichtig (Fairness): OpenSpec ist die Ausnahme im PFLEGE-Sinn (erzwungener Delta-Merge hält die Domänen-Spec lebend). Aber auch dort keine maschinelle Garantie, dass Spec == Code. Das lösen wir gleich auf.
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
<p class="note">Drei völlig verschiedene Zuschnitte: <strong>Feature-Snapshot</strong> vs. <strong>Requirement-Delta</strong> vs. <strong>Phasen-Dokument</strong>.</p>

<!--
Vergleichsfolie 1: Wie eine Spec überhaupt entsteht — der Genese-Zuschnitt unterscheidet sich fundamental.
Ziel: Zeigen, dass „Spec" in jedem Framework etwas anderes meint, schon bei der Entstehung.
Was du sagen kannst:
• spec-kit: /speckit.specify erzeugt PRO Feature ein volles Bündel (spec.md, plan.md, data-model.md, contracts/, tasks.md), festgenagelt an einen Git-Branch. Voll-Spec, kein Delta.
• OpenSpec: arbeitet nie direkt an der lebenden Spec, sondern schreibt ein DELTA (ADDED/MODIFIED/REMOVED) auf Requirement-/Scenario-Ebene innerhalb einer Domänen-Spec.
• BMAD: erzeugt eine Kette von Planungs-Dokumenten entlang des SDLC — Brief → PRD → Architecture → Epics/Stories; jedes Dokument ist Input der nächsten Phase.
• Die Pointe: drei völlig verschiedene Granularitäten — Feature, Requirement-Delta, Phasen-Dokument. Das prägt alles Weitere.
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
Vergleichsfolie 2: Die Taktung des Entwicklungszyklus — hier liegt die eigentlich interessante Differenz.
Ziel: Das Spektrum kleinteilig-iterativ ↔ groß-upfront aufspannen — und ein verbreitetes Vorurteil korrigieren.
Wichtige KORREKTUR (aus der Recherche): spec-kit ist NICHT der schnelle, kleinteilige Vertreter, als der es oft neben OpenSpec gestellt wird. Es ist Feature-/Branch-granular, schreibt Voll-Specs statt Deltas und hat starre Phasen (Constitution Check, Simplicity Gate). Auf der Achse „vorab/schwer/phasenreich" steht spec-kit näher bei BMAD. „Schneller/kleinteiliger als BMAD" gilt belegbar nur für OpenSpec.
Was du sagen kannst:
• OpenSpec: kleinteilig & fluid — kleine Change-Deltas, „actions, not phases", lite by default, brownfield-first. Der schnellste, leichteste Zyklus.
• BMAD: groß & upfront — schwere Planungspipeline (PRD + Architecture VOR der ersten Codezeile). „Front-loaded waterfall" im Planungsteil; die Implementierung läuft danach iterativ-agil Story-für-Story. Skaliert mit Projektgröße.
• Fairer Zusatz — BMADs schlanker Modus: quick-dev (NICHT default) ist BMADs Antwort auf „zu schwer". Er fährt nicht die volle 4-Phasen-Pipeline, sondern komprimiert Intent → lässt eine Spec bestätigen → routet zum kleinsten sicheren Pfad (One-Shot direkt, sonst leichte Planung) und läuft dann länger autonom. ABER: Die „Spec" bleibt ein eingefrorener, einmalig approved Intent (generativ, nicht an den Code gebunden); der Review ist agentisch/LLM-basiert und bewusst nicht erschöpfend. quick-dev macht den Zyklus schmaler — nicht erzwungen. Keine Drift-Detection. Stützt also „lebend ≠ erzwungen".
• spec-kit: dazwischen, aber näher bei BMAD — mittleres Upfront, starre Phasenreihenfolge.
• Ehrlich bleiben: „schneller" ist abgeleitet aus lite/fluid/iterativ, keine Stoppuhr-Messung.
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
Vergleichsfolie 3: Die faktische Source of Truth — wo der „aktuelle Stand" tatsächlich liegt.
Ziel: Die Kernaussage belegen — bei zwei von drei ist faktisch der Code die Wahrheit.
Was du sagen kannst:
• spec-kit: Code. Jede spec.md hängt an ihrem Feature-Branch; es gibt KEINEN Mechanismus, der Feature-Specs in eine lebende Domänen-Spec zurückführt. Ändert Feature 007 das Session-Timeout von Feature 001, widersprechen sich die Specs — und nichts gleicht das ab.
• BMAD: Code. Die Doku sagt wörtlich „archive them, delete them" über die Planungs-Artefakte; bmad-document-project SCANNT den Code und generiert Doku neu — der Code ist die Quelle, Doku wird bei Bedarf nachgezogen. Das Gegenteil von Drift-Detection.
• OpenSpec: die EINZIGE Ausnahme. Der erzwungene Merge beim Archive ist der einzige Weg, einen Change abzuschließen — dadurch bleibt specs/ aktuell. Aber: Prozessdisziplin, keine maschinelle Garantie.
• Pointe: Das Etikett „Spec als Source of Truth" tragen alle drei — einlösen tut es faktisch nur OpenSpec, und auch nur durch Disziplin, nicht durch Erzwingung.
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
<p class="note" style="margin-top:0.8em">spec-kit &amp; BMAD: sofort / by-design. OpenSpec: bleibt gepflegt, kann aber driften. <strong>Keine maschinelle Garantie, dass Spec = Code.</strong></p>

<!--
Vergleichsfolie 4: Der gemeinsame zeitliche Kern — die Spec veraltet, sobald weiterentwickelt wird.
Ziel: Den temporalen Drift greifbar machen, der allen dreien gemeinsam ist.
Sprech-Faden: Alle drei erzeugen die Spec VOR oder PARALLEL zum Code. Ab dem Moment, in dem weiterentwickelt wird, fällt die Spec hinter den Code zurück.
• spec-kit & BMAD: im Pflege-Sinn passiert das SOFORT — die Spec wird nie zurückgemergt (spec-kit) bzw. ist sogar als Wegwerf-Artefakt gedacht (BMAD). Der Code wird zur faktischen Wahrheit.
• OpenSpec: hält die Spec über erzwungenes Mergen lebend — mildert die Veraltung also. Aber auch hier kann sie technisch driften, wenn jemand außerhalb des Change-Flows am Code ändert.
• Der gemeinsame Kern, der bleibt: Keines hat eine maschinelle Garantie, dass Spec und Code übereinstimmen. Spec und Code können auseinanderlaufen, ohne dass es jemand merkt.
-->

---
layout: cc
---

<span class="secno">02</span>
<h2 class="slash">BMAD-Spezialfall: Analyse ja, Automatik nein</h2>
<p class="body">Ein verbreitetes Vorurteil: „BMAD merkt gar nicht, wenn sich die Spec ändern müsste." Das stimmt <em class="u">nicht</em> — es hat eine Change-Impact-Analyse:</p>
<ul class="dots compact" style="margin-top:0.4em">
  <li class="g"><strong>+</strong> <code class="inline">bmad-correct-course</code> — „Artifact Conflict &amp; Impact Analysis" gegen PRD, Architektur (inkl. API-Contracts), UX</li>
  <li class="g"><strong>+</strong> erzeugt ein <strong>Sprint Change Proposal</strong> mit konkreten Old→New-Edits</li>
  <li class="p"><strong>–</strong> aber: <strong>agentisch, on-demand, human-in-the-loop</strong> — kein automatisches, deterministisches Urteil</li>
</ul>
<p class="note">Der Mangel ist nicht die fehlende Analyse — sondern ihr fehlender <strong>Determinismus</strong>. Niemand muss sie auslösen, nichts erzwingt sie.</p>

<!--
Vergleichsfolie 5: Der BMAD-Spezialfall — bewusst fair, korrigiert ein naheliegendes Vorurteil.
Ziel: Präzision. Die naive These „BMAD hat gar keine Analyse, ob sich die Spec mit-geändert hat" ist FALSCH und würde uns angreifbar machen. Wir benennen genau, was wirklich fehlt.
FAKTENBASIS (recherchiert): BMAD HAT eine Spec-Change-Impact-Analyse über den Workflow bmad-correct-course. Dessen „Artifact Conflict and Impact Analysis" prüft explizit, ob PRD, Architecture (inkl. API-Contracts) und UX mit-verändert werden müssen, und erzeugt ein „Sprint Change Proposal" mit konkreten Old→New-Edits.
Was du sagen kannst:
• Korrektur des Vorurteils: BMAD merkt sehr wohl, wenn Artefakte auseinanderlaufen — correct-course ist genau dafür da.
• ABER der entscheidende Unterschied: Es ist agentisch (LLM-Urteil), on-demand (jemand muss es starten) und human-in-the-loop. Es ist KEIN automatisches, deterministisches CI rot/grün.
• Der echte Mangel ist also nicht „keine Analyse", sondern „keine erzwungene, deterministische Analyse". Niemand muss sie auslösen, nichts blockiert ohne sie.
• Das ist genau die Brücke zur nächsten Folie: alle haben höchstens mahnende, manuelle Checks — keiner erzwingt.
-->

---
layout: cc
variant: center
---

<span class="secno">02</span>
<p class="huge">lebend<br>≠<br>erzwungen</p>
<p class="lead" style="margin-top:0.6em">Deterministische Drift-Detection hat <strong>keines</strong> der drei.</p>

<!--
Pointe und Überleitung — die Lücke, die alle drei Frameworks teilen.
Ziel: Die These des Akts zuspitzen und die Brücke zu Akt 3 (unserer eigenen Form) schlagen: alle halten die Spec „lebend", aber keiner erzwingt sie deterministisch.
Sagen kannst du:
„Hier die faire Pointe: Alle drei zwingen Intention vor Code und schaffen ein versionierbares Artefakt — die Wahl ist Ceremony, Brownfield oder Lock-in, nicht „besser/schlechter".
Aber: jede Verifikation — spec-kits /analyze, OpenSpecs verify, BMADs code-review — ist ein LLM-Urteil: probabilistisch, meist nicht-blockierend.
„Lebend" heißt gepflegt, nicht erzwungen. Deterministische Drift-Detection gegen den Code hat keines der drei.
Genau diese Lücke schließen wir im nächsten Akt."
-->
