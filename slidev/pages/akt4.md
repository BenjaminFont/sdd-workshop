---
layout: cc
variant: title
nologo: true
---

<span class="secno">04</span>
<h1>Vision &amp; Discovery</h1>

<!--
Titelfolie zu Akt 4 — Start des Hands-on-Teils.
Ziel: Den Wechsel vom Konzept-Bogen in die praktische Gruppenarbeit markieren und die Leitidee setzen: ein Schnitt, eine gemeinsame Discovery, die später zwei Pfade speist.
Was du sagen kannst:
• Ab jetzt arbeiten wir selbst — erst Setup, dann gemeinsam Example Mapping.
• Wir bauen heute nichts fertig; wir üben an EINEM kleinen Schnitt, den wir gleich gemeinsam aufschließen.
• Diese eine Discovery ist der gemeinsame Ausgangspunkt für Pfad A (BMAD) und Pfad B (unsere Form) — so wird der Vergleich später sauber.
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
Diese Folie stellt das durchgehende Projekt vor: eine CLI, die AI-Coding-Artefakte zentral verwaltet — jetzt mit mehr Kontext zur Produktvision.
Ziel: Die Teilnehmer sollen die Idee des Tools wirklich verstehen, damit der gleich folgende verengte Schnitt als bewusster Fokus auf einen Befehl erkennbar wird — nicht als das ganze Tool.
Was du sagen kannst:
• Das Problem: In jedem Projekt sammeln sich AI-Artefakte — Skills, Rules, CLAUDE.md, MCP-Configs. Sie liegen verstreut, werden kopiert, driften auseinander, niemand pflegt sie zentral.
• Die Lösung: ein zentraler Katalog + eine CLI, die diese Artefakte per Kommando in Ziel-Repos bringt: import (holen), augment (bestehende ergänzen), diff (Abweichungen zeigen), mcp add / list.
• Warum die Idee passt: Meta-Dogfooding — das Tool verwaltet genau die Artefakte, über die der Workshop lehrt; existiert real in Ansätzen (Stichwort .claude/-dotfiles, ruler).
• Wichtig zu betonen: Das wird heute nicht fertig — es ist nur das Vehikel, an dem wir die Methoden üben. Gleich verengen wir auf einen einzigen Befehl.
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
Diese Folie ist der Kern des Hands-on-Setups: Sie beschreibt die heute zu lösende Aufgabe als Fließtext und erklärt die zentrale Idee — denselben Schnitt zweimal bauen.
Ziel: Den Teilnehmern eine große, klare Idee der Aufgabe geben und den dualen Bau (mit/ohne BMAD) verständlich machen, bevor es in die Gruppenarbeit geht.
Was du sagen kannst:
• Die Aufgabe: aus der Vision nur import — ein beliebiges Artefakt (Rule, Skill, CLAUDE.md, MCP-Config) aus dem Katalog in ein bestehendes Repo holen.
• Warum es nicht trivial ist: die Geschäftsregeln — Existiert das Ziel? Welche Version (major/minor/patch)? Überschreiben, überspringen, abbrechen? Was macht dry-run? Klein genug für die Zeit, regelreich genug für echte Methodik.
• Die zentrale Idee — dual bauen: Denselben Schnitt fahren wir einmal mit BMAD (Pfad A) und einmal mit unserer schlanken, contract-getriebenen Form (Pfad B).
• Wichtig — die beiden Pfade starten unterschiedlich: Pfad B beginnt mit Example Mapping in der Gruppe; die grünen Karten werden direkt zur Spec (→ Gherkin → Contract). Pfad A (BMAD) leitet seine Anforderungen über sein eigenes PRD ab — Example Mapping ist kein BMAD-Artefakt. Das gemeinsame Mapping liefert beiden Pfaden dasselbe Domänenverständnis, aber nur Pfad B nutzt die Karten als formale Spec.
• Stopp-Punkt (erst auf den späteren Aufgaben-Folien betonen): beide Pfade nur bis zum charakteristischen Punkt, nicht bis zum fertigen Feature.
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
Diese Folie führt die Technik Example Mapping mit ihren vier Kartenfarben ein.
Ziel: Den Gruppen ein einfaches, gemeinsames Format geben, um den import-Schnitt strukturiert aufzuschließen, bevor irgendein Tool ins Spiel kommt.
Was du sagen kannst:
• Gelb = Story (was wollen wir?), blau = Rules (die Geschäftsregeln dahinter), grün = Examples (konkrete Fälle pro Regel), rot = Open Questions (was noch offen ist).
• Der Fluss: eine Story nehmen, Regeln benennen, jede Regel mit konkreten Beispielen abklopfen — Unklarheiten werden zu roten Karten.
• Moderationshinweis: timeboxen, eine Karte nach der anderen; lieber viele kleine konkrete Beispiele als abstrakte Regeln.
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
Konkretes Beispiel, wie Example Mapping am import-Schnitt aussieht — nachgebaut nach dem EXACT-Coding-Schaubild, aber in unserer Domäne.
Ziel: Den Gruppen ein greifbares Muster zeigen, bevor sie selbst mappen — links die vier Kartenfarben am echten Beispiel, rechts wohin die grünen Karten in Pfad B wandern.
Was du sagen kannst:
• Links, gemeinsam im Team entwickelt: eine gelbe Story, darunter blaue Rules (z. B. „existiert nicht → kopieren", „Konflikt → höhere SemVer gewinnt"), pro Regel grüne Examples mit konkretem Ergebnis (✓/✗), und eine rote offene Frage („Was bei gleicher Version?").
• Rechts: In Pfad B wird jedes grüne Beispiel zu einem Gherkin-Szenario (Given/When/Then) — und das ist später die Grundlage für den gebundenen, erzwungenen Contract.
• Wichtig nochmal klarstellen: Diese Gherkin-Umsetzung gehört zu Pfad B. In Pfad A (BMAD) fließt dasselbe Domänenwissen stattdessen ins PRD.
• Die rote Karte ist bewusst drin — sie zeigt: Unsicherheit wird dokumentiert, nicht geraten.
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
Übergangsfolie: Sie übersetzt die Technik in den konkreten Arbeitsauftrag und leitet in die Gruppenarbeit über.
Ziel: Die Gruppen organisatorisch sauber loslassen — Vierergruppen, Miro-Board, klarer Mapping-Auftrag.
Was du sagen kannst:
• Organisation: Bitte in Vierergruppen zusammenfinden. Jede Gruppe hat ein eigenes Miro-Board — ihr seid bereits draufgekommen, dort arbeitet ihr gemeinsam.
• Auftrag: Mappt den import-Schnitt — Story, Geschäftsregeln (Existiert das Ziel? Welche Version? Wie bei Konflikt? Was macht dry-run?), konkrete Beispiele pro Regel, rote Karten für alles Offene.
• Format/Timebox: vier Kartenfarben, ~20–30 min, eine Karte nach der anderen; lieber viele kleine konkrete Beispiele als abstrakte Regeln.
• Was danach passiert: Die Karten sind das gemeinsame Domänenverständnis. Wichtig: In Pfad B werden die grünen Karten direkt zur formalen Spec (→ Gherkin → Contract); Pfad A (BMAD) nutzt dasselbe Verständnis, formuliert aber sein eigenes PRD — Example Mapping ist kein BMAD-Schritt.
• Setup-Hinweis: Repo steht, BMAD ist vorab installiert — hier nur verifizieren, nicht installieren.
-->
