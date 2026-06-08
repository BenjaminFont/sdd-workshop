---
layout: cc
variant: title
nologo: true
---

<span class="secno">06</span>
<h1>Pfad B — Unsere Form</h1>
<div class="subtitle">Schlank per Default · 🛠</div>

<!--
Titelfolie zu Akt 6 — dem Hands-on-Höhepunkt des Workshops (ca. 70 min).
Ziel: Den Bogen spannen — wir verlassen die Theorie und bauen jetzt selbst einen ausführbaren, drift-sicheren Contract.
Was du sagen kannst: „Pfad B ist unsere schlanke Default-Form." Bewusst kommt dieser Akt nach dem Vergleich — erst die Erleichterung, dann der Payoff. „Schlank per Default" heißt: nur so viel Zeremonie wie nötig. Kurz ankündigen, dass es jetzt praktisch wird.
-->

---
layout: cc
variant: center
---

<span class="secno">06</span>
<p class="huge">Pfad B:<br>unsere Form</p>
<p class="lead" style="margin-top:0.7em">Dieselben Karten — jetzt zum <span class="accent">Contract</span>.</p>

<!--
Einstiegsfolie: derselbe Input wie zuvor (die grünen Karten aus dem Example Mapping), aber ein neues Ziel.
Ziel: Klarmachen, dass wir nichts Neues erfinden — wir nehmen die bekannten grünen Karten und führen sie bis zum ausführbaren Contract.
Was du sagen kannst: „Wir starten nicht bei null." Die grünen Karten sind Beispiele „Input → erwartetes Ergebnis". Genau die werden jetzt zur lebenden, erzwungenen Spezifikation. Betone „Contract" als das Wort für eine Spec, die nicht mehr unbemerkt falsch werden kann.
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
<h2 class="slash">strict</h2>
<p class="big">Ein Szenario ohne Step<br>→ <span class="red">roter Lauf</span>.</p>
<p class="note">Konstituierend — gehört in die <code class="inline">cucumber.json</code>.</p>

<!--
Die Folie erklärt das strict-Flag: ein Szenario ohne passende Step-Definition lässt den Build rot werden.
Ziel: Klarmachen, dass strict nicht optional ist — es schließt die zweite Art von Drift (Spec-Zeile ohne Test).
Was du sagen kannst:
• Ohne strict wird ein undefiniertes Szenario nur gemeldet, zählt aber als grün — eine Spec-Zeile, die nichts erzwingt, ist genau der Drift, den wir töten wollen.
• Mit strict: true wird daraus ein lauter roter Lauf (Exit-Code ≠ 0).
• Wichtig: explizit in die cucumber.json setzen — nicht auf den Framework-Default verlassen. Deshalb „konstituierend".
-->

---
layout: cc
variant: center
---

<span class="secno">06</span>
<p class="huge">Der Drift-Moment</p>
<div class="flow" style="margin-top:0.7em">
  <span class="pill green">grün</span><span class="arrow">→</span>
  <span class="step">Zahl ändern</span><span class="arrow">→</span>
  <span class="pill red">rot</span>
</div>
<p class="big" style="margin-top:0.8em">Die Spec kann nicht mehr<br><em class="u">unbemerkt</em> falsch werden.</p>

<!--
Die Folie zeigt den Drift-Moment: grün → Zahl ändern → rot. Das ist der charakteristische Punkt des ganzen Akts.
Ziel: Den Aha-Moment erlebbar machen — Drift wird deterministisch sichtbar, statt unbemerkt einzusickern.
Was du sagen kannst:
• Konkretes Beispiel aus session.feature: das Timeout (15 min) lebt nur in der Fließtext; der Step liest die Zahl zur Laufzeit. Es gibt keine eingefrorene Kopie im Test.
• Ändert man die Spec so, dass sie dem Code widerspricht, wirft der Step → CI rot → man muss Spec und Code versöhnen.
• Ehrlich bleiben: Nicht jede Änderung wird rot — nur ein echter Widerspruch. „15 → 30 min" kann grün bleiben, wenn die Aussage weiter gilt. Rot heißt: Spec und Code widersprechen sich wirklich.
-->

---
layout: cc
---

<span class="secno">06</span>
<h2 class="slash">Eure Aufgabe</h2>
<ul class="dots">
  <li class="y">Gherkin aus den Karten schreiben.</li>
  <li class="b">Binden + <code class="inline">strict</code> setzen.</li>
  <li class="g">Gegen-grün bauen.</li>
  <li class="p">Drift auslösen.</li>
</ul>
<p class="note">Charakteristischer Punkt: <strong>Contract grün + Drift rot</strong> — erlebt.</p>

<!--
Die Übergabe-Folie ins Hands-on: vier Schritte, die das Publikum jetzt selbst macht.
Ziel: Den Auftrag klar formulieren und das Erfolgskriterium benennen — „Contract grün + Drift rot, selbst erlebt".
Was du sagen kannst:
• Zuerst Gherkin aus den grünen Karten schreiben, dann binden und strict setzen, dann Code bauen bis grün, schließlich Drift bewusst auslösen.
• Erfolg ist nicht „läuft", sondern das Erlebnis beider Zustände — grün und absichtlich rot.
• Sicherheitsnetz erwähnen: Wer beim Cucumber-Bootstrapping hängt, schaut in examples-for-bdd/bdd/ als Referenz.
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
