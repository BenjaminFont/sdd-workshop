---
layout: cc
variant: title
nologo: true
---

<span class="secno">04</span>
<h1>Vision &amp; Discovery</h1>

<!--
• Start Hands-on, Wechsel von Konzept zu Praxis
• ab jetzt selbst: erst Setup, dann Example Mapping
• nichts fertig bauen, EIN kleiner Schnitt
• eine Discovery → Ausgangspunkt für Pfad A (BMAD) und Pfad B
-->

---
layout: cc
---

<span class="secno">04</span>
<h2 class="slash">Die Vision: ein Katalog für AI-Artefakte</h2>
<p class="body">Teams sammeln über die Zeit <strong>Skills, Rule-Files, CLAUDE.md&shy;s und
MCP-Server-Configs</strong> an — verstreut über jedes Repo, von Hand kopiert, veraltet, nie synchron.
Unser CLI-Tool verwaltet sie an <em class="u">einem zentralen Ort</em> und bringt sie per Kommando
dorthin, wo sie gebraucht werden.</p>
<div class="flow" style="margin-top:1em">
  <span class="step"><code class="inline">import</code> — Artefakt ins Repo holen</span>
  <span class="step"><code class="inline">augment</code> — bestehende ergänzen</span>
  <span class="step"><code class="inline">diff</code> — Abweichung zeigen</span>
  <span class="step"><code class="inline">mcp add</code></span>
</div>

<!--
• durchgehendes Projekt: CLI verwaltet AI-Artefakte zentral
• Problem: Skills, Rules, CLAUDE.md, MCP-Configs verstreut, kopiert, driften
• Lösung: zentraler Katalog + CLI: import, augment, diff, mcp add/list
• Meta-Dogfooding: Tool verwaltet genau die Workshop-Artefakte (.claude-dotfiles, ruler)
• wird nicht fertig: nur Vehikel, gleich Fokus auf einen Befehl
-->

---
layout: cc
---

<span class="secno">04</span>
<h2 class="slash">Aufgabe heute</h2>

<p class="body" style="margin-top:0.2em">Aus der Vision nehmen wir <strong>einen</strong> Befehl:
<strong>import</strong> — ein Artefakt (Rule, Skill, <strong>CLAUDE.md</strong>, MCP-Config)
aus dem Katalog in ein bestehendes Repo holen. Klingt simpel, steckt aber voller <strong>Geschäftsregeln</strong>:
Existiert es schon? In welcher Version? Bei Konflikt per <em class="u">SemVer</em> überschreiben, überspringen
oder abbrechen?</p>

<p class="body" style="margin-top:0.8em">Denselben Schnitt entwickeln wir <strong>zweimal</strong> — aus derselben Aufgabe:</p>
<div class="two-col" style="margin-top:0.4em">
  <div class="card p"><h3>Pfad A — mit BMAD</h3><p class="lead">Anforderungen über das BMAD-<strong>PRD</strong>. Rollen, Architektur, Epics → Stories. Schwer per Default — ihr spürt die volle Zeremonie.</p></div>
  <div class="card g"><h3>Pfad B — schlanke Form</h3><p class="lead">Startet mit <strong>Example Mapping</strong> in der Gruppe → Gherkin → gebundener Contract. Leicht, drift-fest.</p></div>
</div>

<!--
• Aufgabe: nur import, Artefakt aus Katalog in Repo holen
• nicht trivial: Geschäftsregeln (existiert? Version? überschreiben/skip/abbrechen? dry-run?)
• zentrale Idee: denselben Schnitt zweimal bauen
• Pfad A mit BMAD, Pfad B schlank contract-getrieben
• unterschiedlicher Start: B mit Example Mapping → grüne Karten zur Spec; A leitet PRD ab
• gemeinsames Mapping = gleiches Domänenwissen, nur B nutzt Karten als Spec
• Stopp-Punkt (später betonen): nur bis charakteristischer Punkt, nicht fertig
-->

---
layout: cc
---

<span class="secno">04</span>
<h2 class="slash">Example Mapping</h2>
<div class="cards">
  <div class="card y"><h3>Story</h3><p class="lead">Was wollen wir? Eine gelbe Karte.</p></div>
  <div class="card b"><h3>Rules</h3><p class="lead">Die Geschäftsregeln dahinter.</p></div>
  <div class="card g"><h3>Examples</h3><p class="lead">Konkrete Fälle pro Regel.</p></div>
  <div class="card p"><h3>Open Questions</h3><p class="lead">Was wir (noch) nicht wissen.</p></div>
</div>

<!--
• Technik Example Mapping, vier Kartenfarben
• Gelb Story, Blau Rules, Grün Examples, Rot Open Questions
• Fluss: Story → Regeln benennen → Beispiele abklopfen → Unklares = rote Karte
• Moderation: timeboxen, Karte für Karte, lieber viele konkrete Beispiele
-->

---
layout: cc
---

<span class="secno">04</span>
<h2 class="slash">So sieht das aus — am import</h2>
<div class="two-col" style="margin-top:0.5em;gap:1.5em;align-items:flex-start">
  <div style="flex:1.05">
    <p class="note" style="margin:0 0 0.4em">Gemeinsam im Team gemappt</p>
    <div class="em-card em-story">🟡 <strong>Story:</strong> Nutzer importiert eine Rule ins Repo</div>
    <div class="em-row">
      <div class="em-card em-rule">🔵 <strong>Rule 1</strong><br>existiert nicht → kopieren</div>
      <div class="em-card em-rule">🔵 <strong>Rule 2</strong><br>Konflikt → höhere SemVer gewinnt</div>
    </div>
    <div class="em-row">
      <div class="em-card em-ex">🟢 leer → kopiert ✓</div>
      <div class="em-card em-ex">🟢 v1.2 ↔ v1.0 → überschreiben ✓</div>
      <div class="em-card em-ex">🟢 v1.0 ↔ v1.2 → skip ✗</div>
    </div>
    <div class="em-card em-q">🔴 Was bei <em>gleicher</em> Version?</div>
  </div>
  <div style="flex:1">
    <p class="note" style="margin:0 0 0.4em">Wird in Pfad B zur Spec</p>
    <pre style="margin:0"><code class="language-gherkin">Feature: Rule importieren&#10;&#10;  Scenario: Konflikt, neuere Version&#10;    Given Rule "x" v1.0 liegt im Repo&#10;    When ich "x" v1.2 importiere&#10;    Then wird sie überschrieben&#10;&#10;  Scenario: Konflikt, ältere Version&#10;    Given Rule "x" v1.2 liegt im Repo&#10;    When ich "x" v1.0 importiere&#10;    Then wird sie übersprungen</code></pre>
  </div>
</div>
<p class="note" style="margin-top:0.6em">Grüne Karten → Gherkin-Szenarien → später gebundener Contract.</p>

<!--
• konkretes Beispiel: Example Mapping am import-Schnitt
• links: gelbe Story, blaue Rules (existiert nicht → kopieren; Konflikt → höhere SemVer), grüne Examples (✓/✗), rote Frage (gleiche Version?)
• rechts (Pfad B): jedes grüne Beispiel → Gherkin Given/When/Then → später Contract
• Gherkin = Pfad B; in Pfad A fließt Domänenwissen ins PRD
• rote Karte bewusst: Unsicherheit dokumentieren, nicht raten
-->

---
layout: cc
---

<span class="secno">04</span>
<h2 class="slash">Eure Aufgabe — jetzt in Gruppen</h2>
<p class="body">Findet euch in <strong>Vierergruppen</strong> zusammen. Für jede Gruppe haben wir
ein <strong>Miro-Board</strong> bereitgestellt — ihr seid bereits darauf. Mappt dort gemeinsam
den <strong>import</strong>-Schnitt: Story oben, dann die <strong>Geschäftsregeln</strong> (existiert das Ziel?
welche Version? Konflikt? <strong>dry-run</strong>?), pro Regel konkrete Beispiele — und alles Unklare
wird eine <em class="u">rote Karte</em>.</p>
<div class="two-col" style="margin-top:0.5em">
  <div class="card y"><h3>Format</h3><p class="lead">Gelb Story · Blau Rules · Grün Examples · Rot offene Fragen. ~20–30 min, eine Karte nach der anderen.</p></div>
  <div class="card b"><h3>Danach</h3><p class="lead">Die Karten sind euer Domänenverständnis für beide Pfade. In <strong>Pfad B</strong> werden die grünen Karten direkt zur Spec.</p></div>
</div>

<!--
• Übergang in Gruppenarbeit
• Organisation: Vierergruppen, eigenes Miro-Board (schon drauf)
• Auftrag: import-Schnitt mappen — Story, Regeln (existiert? Version? Konflikt? dry-run?), Beispiele, rote Karten
• Format: vier Farben, ~20–30 min, Karte für Karte, viele konkrete Beispiele
• danach: Karten = Domänenverständnis; B → grüne Karten zur Spec (Gherkin, Contract), A nutzt PRD
• Setup: Repo steht, BMAD vorab installiert, nur verifizieren
-->
