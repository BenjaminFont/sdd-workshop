---
layout: cc
variant: title
nologo: true
---

<span class="secno">03</span>
<h1>Die Spec als Source of Truth</h1>
<div class="subtitle">Ausführbar und an den Code gebunden</div>

<!--
Titelfolie zu Akt 3 „Die Spec als Source of Truth" (~20 min).
Ziel: Die in Akt 2 aufgezeigte Framework-Lücke mit unseren eigenen Erkenntnissen schließen und den Bauplan unserer Form auf den Tisch legen.
Sag etwas wie: „Ihr habt drei Frameworks gesehen — keines erzwingt das Verhalten wirklich. In den nächsten 20 Minuten zeige ich, warum Fließtext zwangsläufig driftet und wie wir aus einem Szenario einen echten, erzwungenen Contract machen." Das ist der theoretische Teil vor dem dualen Hands-on.
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
Die Folie zeigt den Kerndefekt jeder Fließtext-Spec: Sie ist passiv.
Ziel: Klarmachen, warum „eine schöne Markdown-Spec" das Drift-Problem nicht löst — und damit den Bedarf an Erzwingung motivieren.
Sprech-Faden: Eine Fließtext-Spec beschreibt nur, sie prüft nichts — keine Maschine sieht je nach, ob der Code ihr noch entspricht. Code ändert sich, das Dokument bleibt stehen, beide laufen auseinander (Drift). „Lebendig" ist kein Gefühl, sondern eine harte Eigenschaft: Eine Spec ist genau dann lebendig, wenn sie nicht unbemerkt falsch werden kann — und das geht nur durch Erzwingung.
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
<p class="note">Aus BDD (Dan North, ~2006); als <strong>Gherkin</strong> formalisiert durch Cucumber (~2008).</p>

<!--
Einführungsfolie: Was ist überhaupt ein Given-When-Then-Szenario — bevor wir behaupten, es sei fast ein Test.
Ziel: Das Format konkret machen, damit die folgende „fast ein Test"-Aussage trägt.
Sprech-Faden: Ein Szenario hat immer dieselben drei Teile — Given (die Ausgangslage/Vorbedingung), When (die Aktion) und Then (das erwartete Ergebnis). Das ist bewusst so geschrieben, dass es sowohl ein Mensch lesen als auch eine Maschine ausführen kann. Beispiel rechts in unserer Domäne: Liegt eine Rule in v1.0 im Repo und ich importiere v1.2, wird sie überschrieben.
Herkunft kurz einordnen: Das stammt aus BDD (Behavior-Driven Development, Dan North, ~2006) und wurde als Gherkin-Sprache durch das Tool Cucumber (~2008) formalisiert. Jahreszahlen sind die etablierten Community-Eckdaten.
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
    <p class="lead"><code class="inline">#### Scenario:</code> mit Given/When/Then in den Requirements <strong>und</strong> in den Delta-Specs (ADDED/MODIFIED/REMOVED).</p>
  </div>
  <div class="card g">
    <h3>BMAD</h3>
    <p class="lead">Das Epics-Template schreibt <strong>Akzeptanzkriterien im Given/When/Then-Format</strong> für jede Story fest vor.</p>
  </div>
</div>
<p class="note">Nur: dort bleibt es <strong>Prosa/Markdown</strong>. Wir machen es gleich <em class="u">ausführbar</em>.</p>

<!--
Glaubwürdigkeitsfolie: Das Given-When-Then-Format ist etabliert — zwei der vorgestellten Frameworks bauen direkt darauf.
Ziel: Zeigen, dass wir nichts Exotisches einführen; wir machen nur konsequent ausführbar, was andere als Prosa stehen lassen. (Recherchiert aus den offiziellen Repos.)
Stichpunkte:
• OpenSpec nutzt #### Scenario: mit Given/When/Then sowohl in den festen Specs als auch in den Delta-Specs (ADDED/MODIFIED/REMOVED) — die Doku nennt Szenarien ausdrücklich „concrete examples that can be verified".
• BMAD verdrahtet im Epics-Template die Akzeptanzkriterien jeder Story im Given/When/Then-Format („Each AC should be independently testable").
• Der entscheidende Unterschied: In beiden bleibt das GWT Markdown/Prosa — es wird nicht an den Code gebunden. Genau diesen letzten Schritt (ausführbar machen) gehen wir gleich.
-->

---
layout: cc
variant: center
---

<span class="secno">03</span>
<p class="big">Ein Szenario ist schon<br>der <em class="u">größte Teil</em> eines Tests.</p>
<p class="note" style="margin-top:0.5em">Es fehlt nur die Bindung an den Code — die <strong>Step Definitions</strong>.</p>
<p class="huge" style="margin-top:0.7em">binden statt generieren<br>→ <span class="accent">Contract</span></p>

<!--
Die zentrale Aha-Folie: Ein Given-When-Then-Szenario ist schon der größte Teil eines ausführbaren Tests.
Ziel: Den gedanklichen Sprung verankern — der Weg zum erzwungenen Contract ist viel kürzer, als man denkt.
Ehrliche Präzisierung (bewusst keine erfundene Prozentzahl): Ein Szenario ist bereits die vollständige Test-Spezifikation — Vorbedingung, Aktion, erwartetes Ergebnis stehen drin. Was zum lauffähigen Test fehlt, ist die technische Anbindung: die Step Definitions (Glue Code), die jeden Given/When/Then-Satz an echten Code knüpfen.
Entscheidend ist „binden statt generieren": Wir lassen die KI den Test nicht aus der Spec generieren (dann driftet er wieder weg), sondern binden das Szenario fest an den Code. Aus „⚠ wahrscheinlich korrekt" wird ein deterministisches rot/grün — ein Contract. Das „binden vs. generieren" greifen wir auf der nächsten Folie konkret auf.
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
Die Folie zeigt den konkreten Bauweg unserer Form vom Beispiel bis zum CI-Urteil.
Ziel: Die Mechanik greifbar machen — wie aus einer Domänenform ein erzwungener Contract wird.
Sprech-Faden: Aus Specification by Example und Example Mapping entstehen konkrete Beispiele, die wir in Gherkin (Given-When-Then) fassen. Dieses Feature-File wird via Cucumber im strict-Modus an den Code gebunden — Step Definitions sind die Übersetzungsschicht. In der CI gibt es nur noch zwei Zustände: grün oder rot. „strict" ist wichtig: undefinierte oder ausstehende Schritte lassen den Lauf fehlschlagen statt durchzurutschen. So wird aus dem unsicheren „⚠ wahrscheinlich" ein deterministisches Urteil — das ist die fehlende Frontlinie gegen Drift.
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
Die Folie ordnet unsere Form historisch ein — nichts davon ist neu, wir kombinieren Bewährtes.
Ziel: Glaubwürdigkeit geben und zeigen, dass die Idee „erzwingbares Beispiel als Spec" eine 20-jährige Lineage hat.
Lineage sauber benennen: ATDD (Ward Cunningham, 2002) → BDD (Dan North, 2006) → Specification by Example (Gojko Adzic, 2011 — er hat den Begriff popularisiert, nicht geprägt) → Example Mapping (Matt Wynne, ~2015). Verwandt, aber aus anderer Ecke: Ubiquitous Language von Eric Evans (DDD, 2003) — die gemeinsame Sprache von Fachseite und Code. Kernbotschaft: Wir erfinden kein neues Framework, wir spannen erprobte Praktiken auf KI-Coding.
-->

---
layout: cc
variant: center
---

<span class="secno">03</span>
<p class="huge">Grün = Konformität,<br>nicht Korrektheit.</p>
<p class="lead" style="margin-top:0.6em">Korrektheit holt Example Mapping.</p>
<p class="big" style="margin-top:0.7em"><span class="accent">Erzwingen</span>, wo eine Maschine prüfen kann.<br>Beschreiben, wo nicht.</p>

<!--
Die ehrliche Grenze unserer Form — bewusst keine Überverkaufsfolie.
Ziel: Erwartungen kalibrieren: Ein grüner Contract ist stark, aber er beweist nicht, dass die Absicht richtig war.
Stichpunkte: Grün beweist nur Konformität (Code tut, was das Szenario sagt), nicht Korrektheit (ob das Szenario das Richtige sagt). Ein falsches, aber grünes Szenario ist immer noch falsch. Korrektheit holt man vorher ab — durch Example Mapping, das die richtigen Regeln und Beispiele abringt. Zwei verschiedene Jobs.
Merksatz „Erzwingen, wo eine Maschine prüfen kann. Beschreiben, wo nicht.": An den formalen Grenzen (API, Daten, Verhalten an der Kante) wird das Verhalten als Contract erzwungen; Kontext, Begründung und alles ohne prüfbare Grenze bleibt lesbarer Fließtext. Nicht alles lässt sich erzwingen — und das ist in Ordnung.
-->

---
layout: cc
variant: center
---

<span class="secno">03</span>
<p class="huge">Praxisblock</p>

<!--
Reine Übergabe-Folie vom Theorieteil in den Hands-on-Teil — bewusst nüchtern, nur ein Wort.
Ziel: Klarer Schnitt. Ab hier wird gebaut.
Überleitung in die Aufgabe: „Genug Theorie — ab jetzt baut ihr selbst." Details (gemeinsame Discovery, dann derselbe Schnitt zweimal mit BMAD und unserer Form) kommen auf den Folien von Akt 4.
-->
