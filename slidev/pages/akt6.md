---
layout: cc
variant: title
nologo: true
---

<span class="secno">06</span>
<h1>Pfad B — Unsere Form</h1>

<!--
• Akt 6: Hands-on-Höhepunkt, ca. 70 min
• Pfad B = schlanke Default-Form
• Theorie verlassen → ausführbarer, drift-sicherer Contract
• nach dem Vergleich: erst Erleichterung, dann Payoff
• Start nicht bei null: grüne Karten aus Example Mapping
-->

---
layout: cc
---

<span class="secno">06</span>
<h2 class="slash">Der Flow</h2>
<div class="flow" style="margin-top:0.8em">
  <span class="step">Grüne Karten</span><span class="arrow">→</span>
  <span class="step">Gherkin</span><span class="arrow">→</span>
  <span class="step">binden</span><span class="arrow">→</span>
  <span class="step">grün</span><span class="arrow">→</span>
  <span class="step">Drift</span>
</div>
<p class="note">Binden via Cucumber, <code class="inline">strict</code>. Am Ende: roter Lauf bei Abweichung.</p>

<!--
• roter Faden vorab: 5 Schritte als Pfeil-Kette
• grüne Karten → Gherkin (Given/When/Then)
• binden: Step-Defs koppeln Satz ans Verhalten, Cucumber strict
• grün: Agent baut Code bis Contract erfüllt
• Drift: Zahl/Grenze ändern → CI rot, der Höhepunkt
-->

---
layout: cc
---

<span class="secno">06</span>
<h2 class="slash">Zwei Schichten</h2>
<div class="two-col">
  <div class="card b">
    <h3>.feature</h3>
    <p class="lead">Fließtext, lesbar. Ein Domänenexperte stimmt zu.</p>
  </div>
  <div class="card g">
    <h3>steps/*</h3>
    <p class="lead">Code, einmalig geschrieben. Bindet die Sätze ans Verhalten.</p>
  </div>
</div>
<p class="note">Wir <em class="u">binden</em>, wir generieren nicht.</p>

<!--
• zwei Schichten: .feature-Fließtext vs. steps/*-Code
• Lesbarkeit + Ausführbarkeit kein Widerspruch, zwei Ebenen
• .feature: Domänenexperte liest/bestätigt, kein Code
• Step-Defs einmal geschrieben, binden jeden Satz-Typ
• Schlüssel: binden, nicht generieren
• keine zweite Testdatei → Drift strukturell unmöglich
-->

---
layout: cc
---

<span class="secno">06</span>
<h2 class="slash">Eure Aufgabe</h2>
<p class="body">Das Example Mapping habt ihr <strong>schon gemacht</strong> — die grünen Karten liegen vor. Jetzt führt ihr sie in unserer Form spec-driven bis zum erzwungenen Contract.</p>
<ul class="dots">
  <li class="y">Grüne Karten (Beispiele) → <strong>Szenarien</strong> in der <code class="inline">.feature</code>.</li>
  <li class="b">Binden + <code class="inline">strict</code> — Contract steht erst auf <span class="red">rot</span>.</li>
  <li class="g">Gegen-grün bauen — Schritt für Schritt (innen: TDD).</li>
  <li class="p">Drift auslösen → roter Lauf.</li>
</ul>
<p class="note">Charakteristischer Punkt: <strong>Contract grün + Drift rot</strong> — erlebt.</p>

<!--
• Hands-on Teil 1: Auftrag, Rückgriff Example Mapping
• nicht bei null: grüne Karten (Input → Ergebnis) sind Input
• Spec bleibt: Example Map + Feature-Spec = WAS/WARUM; .feature = Verhalten; Cucumber = Enforcement
• zwei Schleifen: außen .feature-Szenarien (ATDD), innen TDD
• Erfolg = beide Zustände erlebt: grün + absichtlich rot
-->

---
layout: cc
---

<span class="secno">06</span>
<h2 class="slash">So startet ihr — Schritt für Schritt</h2>
<ol class="steps" style="font-size:0.95em">
  <li><strong>Example Map fotografieren</strong> — Screenshot eurer Karten an der Wand</li>
  <li><strong>Ins Repo laden</strong> — Bild(er) ins Projekt legen</li>
  <li><strong>Map digitalisieren</strong> — <code class="inline">/digitize-mapping</code> auf den Screenshot → <code class="inline">import-example-mapping.md</code> (tippt ab, erfindet nichts)</li>
  <li><strong>Szenarien ableiten</strong> — <code class="inline">/gherkin-spec</code> → <code class="inline">features/import.feature</code> (grüne Karten → Given/When/Then)</li>
  <li><strong>Binden</strong> — <code class="inline">/bind-contract</code> → Cucumber + <code class="inline">strict</code>; Contract erst <span class="red">rot</span></li>
  <li><strong>Gegen-grün bauen</strong> — bis die <code class="inline">.feature</code> grün ist → dann Drift auslösen → <span class="red">rot</span></li>
</ol>

<!--
• Hands-on Teil 2: Schritt-für-Schritt, echte Skill-Namen
• Begriffe: grüne Karten = Beispiele → Szenarien; blaue Regeln = Feature-Rahmen; gebundene Szenarien = Akzeptanzkriterien
• 1 fotografieren: Screenshot der fertigen Example Map
• 2 ins Repo laden: Bild ins Projekt, Agent kann lesen
• 3 /digitize-mapping: liest Bild → import,example,mapping.md; nur abtippen, nichts erfinden, Unleserliches = rote Karte (live moderiert: /example-mapping)
• 4 /gherkin-spec: grüne Karten → features/import.feature, je Beispiel ein Scenario, eine Domäne eine Datei
• 5 /bind-contract: Step-Defs, jeden Satz binden, strict in cucumber.json; vor Code rot/undefiniert = Ziel (Außen-Loop ATDD)
• 6 gegen-grün: Plan + Code (innen TDD) bis alle Szenarien grün
• strict konstituierend: Szenario ohne Step zählt sonst grün = Drift
• Payoff: Zahl/Grenze in .feature ändern, widerspricht Code → roter Lauf; nur echter Widerspruch wird rot
• Sicherheitsnetz: examples-for-bdd/bdd/ zum Abschauen
-->

<!--
• Reserve strict: Szenario ohne Step → roter Lauf, konstituierend, in cucumber.json
• Reserve Drift: grün → Zahl ändern → rot, Spec nicht mehr unbemerkt falsch
-->

---
layout: cc
---

<span class="secno">06</span>
<h2 class="slash">Wenn der Plan groß wird: Tasks</h2>
<ul class="dots">
  <li class="b">Plan in kontext-große Tasks brechen.</li>
  <li class="g">Ein Task = passt in einen Agent-Kontext.</li>
  <li class="p">Nur bei Bedarf.</li>
</ul>
<p class="note">Die 4. Phase — schlank, bedingt.</p>

<!--
• optional: Tasks-Phase, nur bei großem Vorhaben
• 4. Phase, keine Pflicht
• großer Plan → kontext-große Tasks, ein Task = ein Agent-Kontext
• hält Agent fokussiert, Reviews überschaubar
• nur bei Bedarf, schlank per Default; bei Zeitnot überspringen
-->
