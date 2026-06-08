---
layout: cc
variant: title
nologo: true
---

<span class="secno">03</span>
<h1>Die Spec als Source of Truth</h1>

<!--
• Akt 3, ~20 min, Theorieteil vor dualem Hands-on
• drei Frameworks gesehen, keines erzwingt Verhalten
• warum Fließtext driftet
• vom Szenario zum erzwungenen Contract
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">Warum eine Fließtext-Spec driftet</h2>
<ul class="dots">
  <li class="b">Eine Fließtext-Spec ist <strong>passiv</strong>.</li>
  <li class="p">Keine Maschine prüft je, ob der Code ihr noch entspricht.</li>
  <li class="g">„Lebendig" heißt: <em class="u">kann nicht unbemerkt falsch werden</em>.</li>
</ul>

<!--
• Kerndefekt: Fließtext-Spec ist passiv, beschreibt nur, prüft nichts
• Code ändert sich, Dokument bleibt stehen → Drift
• „lebendig" = kann nicht unbemerkt falsch werden, nur durch Erzwingung
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">Das Given-When-Then-Szenario</h2>
<p class="body">Ein Szenario beschreibt Verhalten in drei Schritten — lesbar für Mensch <em>und</em> Maschine:</p>
<div class="two-col" style="margin-top:0.5em">
  <div>
    <ul class="dots compact">
      <li class="b"><strong>Given</strong> — die Vorbedingung (Ausgangslage)</li>
      <li class="g"><strong>When</strong> — die Aktion (was passiert)</li>
      <li class="y"><strong>Then</strong> — das erwartete Ergebnis</li>
    </ul>
  </div>
  <div>
    <pre style="margin:0"><code class="language-gherkin">Szenario: Konflikt, neuere Version&#10;  Given Rule "x" v1.0 liegt im Repo&#10;  When  ich "x" v1.2 importiere&#10;  Then  wird sie überschrieben</code></pre>
  </div>
</div>

<!--
• drei Teile: Given (Vorbedingung), When (Aktion), Then (Ergebnis)
• lesbar für Mensch und Maschine
• Beispiel rechts: Rule v1.0 im Repo, v1.2 importieren → überschrieben
• Herkunft: BDD (North, ~2006), Gherkin via Cucumber (~2008)
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">Schon im Einsatz</h2>
<p class="body">Dieses Format ist kein Nischending — die Frameworks nutzen es längst:</p>
<div class="two-col" style="margin-top:0.5em">
  <div class="card b">
    <h3>OpenSpec</h3>
    <p class="lead"><strong>#### Scenario:</strong> mit Given/When/Then in den Requirements <strong>und</strong> in den Delta-Specs (ADDED/MODIFIED/REMOVED).</p>
  </div>
  <div class="card g">
    <h3>BMAD</h3>
    <p class="lead">Das Epics-Template schreibt <strong>Akzeptanzkriterien im Given/When/Then-Format</strong> für jede Story fest vor.</p>
  </div>
</div>
<p class="note">Nur: dort bleibt es <strong>Prosa/Markdown</strong>. Wir machen es gleich <em class="u">ausführbar</em>.</p>

<!--
• GWT-Format etabliert, nichts Exotisches
• OpenSpec: #### Scenario in Specs und Delta-Specs (ADDED/MODIFIED/REMOVED)
• BMAD: Akzeptanzkriterien jeder Story im GWT-Format
• Unterschied: dort bleibt es Prosa/Markdown, nicht an Code gebunden
• unser letzter Schritt: ausführbar machen
-->

---
layout: cc
variant: center
---

<span class="secno">03</span>
<p class="big">Ein Szenario ist schon<br>der <em class="u">größte Teil</em> eines Tests.</p>

<!--
• Aha: Szenario ist schon vollständige Test-Spezifikation
• fehlt nur: Step Definitions (Glue Code), die GWT an Code knüpfen
• binden statt generieren: generierter Test driftet wieder weg
• aus „⚠ wahrscheinlich" wird deterministisches rot/grün → Contract
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">Die Brücke</h2>
<div class="flow" style="margin-top:0.8em">
  <span class="step">Specification by Example</span><span class="arrow">→</span>
  <span class="step">Example Mapping</span><span class="arrow">→</span>
  <span class="step">Gherkin</span>
</div>
<div class="flow" style="margin-top:0.8em">
  <span class="step">gebunden — Cucumber, strict</span><span class="arrow">→</span>
  <span class="pill green">grün</span><span class="pill red">rot</span>
</div>
<p class="note">Aus „⚠ wahrscheinlich" wird ein deterministisches Urteil.</p>

<!--
• Bauweg: Specification by Example + Example Mapping → Beispiele → Gherkin
• Feature-File via Cucumber strict an Code gebunden, Step Definitions = Übersetzung
• CI nur grün oder rot
• strict: undefinierte/ausstehende Schritte → fehlschlagen statt durchrutschen
• deterministisches Urteil = Frontlinie gegen Drift
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">Woher das kommt</h2>
<ul class="dots">
  <li class="y"><strong>ATDD</strong> — Cunningham, 2002</li>
  <li class="b"><strong>BDD</strong> — North, 2006</li>
  <li class="g"><strong>Specification by Example</strong> — Adzic, 2011 (popularisiert)</li>
  <li class="p"><strong>Example Mapping</strong> — Wynne, ~2015</li>
</ul>
<p class="note">Verwandt: <em class="u">Ubiquitous Language</em> — Evans, 2003.</p>

<!--
• nichts neu, 20-jährige Lineage, Bewährtes kombiniert
• ATDD (Cunningham 2002) → BDD (North 2006) → SbE (Adzic 2011, popularisiert) → Example Mapping (Wynne ~2015)
• verwandt: Ubiquitous Language (Evans, DDD 2003)
• Kernbotschaft: erprobte Praktiken auf KI-Coding gespannt
-->

---
layout: cc
variant: center
---

<span class="secno">03</span>
<p class="huge">Grün = Konformität,<br>nicht Korrektheit.</p>
<p class="big" style="margin-top:0.7em">Example Mapping holt <span class="accent">Korrektheit</span>.</p>

<!--
• ehrliche Grenze, kein Überverkauf
• grün = Konformität (Code tut, was Szenario sagt), nicht Korrektheit (sagt Szenario das Richtige?)
• falsches aber grünes Szenario bleibt falsch
• Korrektheit vorher: Example Mapping ringt richtige Regeln/Beispiele ab
• Merksatz: erzwingen wo Maschine prüfen kann, beschreiben wo nicht
-->

---
layout: cc
variant: center
---

<span class="secno">03</span>
<p class="huge">Praxisblock</p>

<!--
• Übergang Theorie → Hands-on, klarer Schnitt
• genug Theorie, ab jetzt selbst bauen
• Details (Discovery, Schnitt zweimal: BMAD + unsere Form) in Akt 4
-->
