---
layout: cc
variant: title
nologo: true
---

<span class="secno">06</span>
<h1>Pfad B — Unsere Form</h1>

<!--
Titelfolie zu Akt 6 — dem Hands-on-Höhepunkt des Workshops (ca. 70 min).
Ziel: Den Bogen spannen — wir verlassen die Theorie und bauen jetzt selbst einen ausführbaren, drift-sicheren Contract.
Was du sagen kannst: „Pfad B ist unsere schlanke Default-Form." Bewusst kommt dieser Akt nach dem Vergleich — erst die Erleichterung, dann der Payoff. Wir starten nicht bei null: dieselben grünen Karten aus dem Example Mapping, jetzt zum ausführbaren Contract.
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
Diese Folie zeigt den kompletten Ablauf des Akts in fünf Schritten als Pfeil-Kette.
Ziel: Den roten Faden geben, bevor wir loslegen — damit jede:r weiß, wohin die Reise geht.
Was du sagen kannst:
• Grüne Karten werden zu Gherkin (Given/When/Then) — der lesbaren Fließtext-Spec.
• Binden heißt: Step-Definitionen schreiben, die jeden Satz ans echte Verhalten koppeln — via Cucumber, mit strict.
• Grün: Agent baut den Code, bis der Contract erfüllt ist.
• Drift: zum Schluss eine Zahl/Grenze ändern → CI wird rot. Das ist der Höhepunkt, auf den alles zuläuft.
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
Die Folie stellt die zwei Schichten gegenüber: die .feature-Fließtext und die steps/*-Code-Übersetzung.
Ziel: Die zentrale Einsicht setzen — Lesbarkeit und Ausführbarkeit schließen sich nicht aus, weil sie auf zwei Ebenen liegen.
Was du sagen kannst:
• Die .feature-Datei ist reine Fließtext — ein Domänenexperte liest und bestätigt sie, ohne je Code zu sehen.
• Die Step-Definitionen schreibt man einmal; sie binden jeden Satz-Typ ans System.
• Schlüsselsatz: „Wir binden, wir generieren nicht." Es gibt keine generierte zweite Testdatei, die auseinanderdriften könnte — das Szenario ist der Test. Genau deshalb ist Drift hier strukturell unmöglich.
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
Übergabe ins Hands-on, Teil 1 — der Auftrag mit Rückgriff auf das gemeinsame Example Mapping.
Ziel: Klarmachen, dass wir nicht bei null starten — die grünen Karten von vorhin sind der Input — und das Erfolgskriterium benennen: „Contract grün + Drift rot, selbst erlebt".
Was du sagen kannst:
• Rückgriff: „Das Example Mapping haben wir vorhin gemeinsam gemacht — die grünen Karten (Input → erwartetes Ergebnis) sind genau das, was wir jetzt zum Contract führen."
• Die Spec bleibt: Example Map + Feature-Spec tragen das WAS/WARUM; die .feature trägt das Verhalten; Cucumber das Enforcement. Drei Jobs, kein Widerspruch.
• Zwei Schleifen: außen die .feature-Szenarien (ATDD) als „fertig"-Definition, innen pro Schritt klassisch TDD.
• Erfolg ist nicht „läuft", sondern beide Zustände erlebt: grün und absichtlich rot.
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
Übergabe ins Hands-on, Teil 2 — die konkrete Schritt-für-Schritt-Anleitung unserer Form, damit niemand vor leerer IDE sitzt.
Ziel: Den genauen Weg vom Foto der Example Map bis zum erzwungenen Contract zeigen — mit den echten Skill-Namen.
Wichtige Begriffsklärung (falls gefragt): die GRÜNEN Karten sind die Beispiele (Input → erwartetes Ergebnis). Die werden zu SZENARIEN (Given/When/Then). Blaue Regeln werden zum Feature/Requirement-Rahmen. Erst die gebundenen Szenarien SIND die Akzeptanzkriterien.
Was du sagen kannst, Schritt für Schritt:
• 1 Fotografieren: Macht ein Foto/Screenshot eurer fertigen Example Map (die Karten an der Wand).
• 2 Ins Repo laden: Legt das Bild ins Projekt, damit der Agent es lesen kann.
• 3 /digitize-mapping <screenshot>: Der Skill LIEST das Bild und transkribiert die Karten ins kanonische import-example-mapping.md. Disziplin: er tippt nur ab, erfindet keine Regel/kein Beispiel; Unleserliches wird als offene/rote Karte markiert, nicht geraten. (Wer die Map live moderiert hat statt zu fotografieren: /example-mapping liefert dasselbe File.)
• 4 /gherkin-spec: Macht aus den grünen Karten features/import.feature — jedes Beispiel ein Scenario in Given/When/Then; eine Domäne, eine Datei.
• 5 /bind-contract: Schreibt die Step-Definitionen, bindet jeden Satz ans echte System und setzt strict in der cucumber.json. Wir binden, wir generieren keine zweite Testdatei. Vor dem Code ist der Contract rot/undefiniert — genau das ist das Ziel (Außen-Loop, ATDD).
• 6 Gegen-grün: Plan + Code, Schritt für Schritt (innen klassisch TDD), bis alle Akzeptanz-Szenarien grün sind.
• strict ist konstituierend: ein Szenario ohne Step zählt sonst als grün — genau der Drift, den wir töten.
• Die Spec bleibt: Example Map + kurze Feature-Spec tragen das WAS/WARUM; die .feature trägt das Verhalten; Cucumber das Enforcement. Drei Jobs, keine Redundanz.
• Payoff zum Schluss: eine Zahl/Grenze in der .feature ändern, die dem Code widerspricht → roter Lauf. Die Spec kann nicht mehr unbemerkt falsch werden. (Ehrlich: nur ein echter Widerspruch wird rot.)
• Sicherheitsnetz: examples-for-bdd/bdd/ (session.feature, steps, cucumber.json mit strict) zum Abschauen.
-->

<!--
ORIGINAL strict-Folie (entfernt, als Notiz): Ein Szenario ohne Step → roter Lauf. Konstituierend — gehört in die cucumber.json.
ORIGINAL Drift-Moment-Folie (entfernt): grün → Zahl ändern → rot. Die Spec kann nicht mehr unbemerkt falsch werden.
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
Optionale Folie: die Tasks-Phase — nur einsetzen, wenn das Vorhaben groß genug wirkt.
Ziel: Die 4. Phase der Form praktisch zeigen, ohne sie zur Pflicht zu machen.
Was du sagen kannst:
• Wenn der Plan groß wird, bricht man ihn in kontext-große Tasks: ein Task = passt in einen Agent-Kontext.
• Das hält den Agenten fokussiert und die Reviews überschaubar.
• Bewusst „nur bei Bedarf" — schlank per Default bleibt das Leitprinzip. Diese Folie überspringen, wenn die Zeit knapp oder das Beispiel klein ist.
-->
