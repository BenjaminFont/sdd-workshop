---
layout: cc
variant: title
nologo: true
---

<span class="secno">05</span>
<h1>Pfad A — BMAD</h1>
<div class="subtitle">Schwer per Default · 🛠</div>

<!--
Titelfolie für Akt 5 „Pfad A: BMAD" - der erste der beiden Hands-on-Pfade.
Ziel: Den Rahmen setzen - wir fahren jetzt denselben import-Schnitt aus dem gemeinsamen Example Mapping durch BMAD. Das Stichwort „schwer per Default" ist programmatisch.
• BMAD bewusst zuerst - dramaturgisch, damit ihr die Schwere/Zeremonie körperlich spürt, bevor in Akt 6 die schlanke Form die Erleichterung bringt.
• 70 Minuten, Einzelarbeit. Wir bauen nicht bis zum fertigen Feature.
• Erinnern: BMAD ist vorab installiert, hier nur loslegen.
-->

---
layout: cc
variant: center
---

<span class="secno">05</span>
<p class="huge">Pfad A:<br>BMAD</p>
<p class="lead" style="margin-top:0.7em">Dieselben Karten — jetzt durch BMAD gefahren.</p>

<!--
Kernaussage des Akts: Es ist dieselbe Discovery wie zuvor - die grünen Example-Mapping-Karten - die jetzt durch BMAD läuft.
Ziel: Den Vergleich sauber isolieren. Gleicher Ausgangspunkt, zwei Formalisierungen - so wird der Unterschied selbst erlebt, nicht behauptet.
• Betonen: gleicher Input wie in Akt 6 - der Unterschied liegt allein im Weg der Methode.
• Brücke zur nächsten Folie: Schauen wir uns an, mit welchen Rollen BMAD diesen Weg organisiert.
-->

---
layout: cc
---

<span class="secno">05</span>
<h2 class="slash">BMAD — Rollen</h2>
<ul class="dots">
  <li class="y"><strong>Analyst</strong></li>
  <li class="b"><strong>PM</strong></li>
  <li class="g"><strong>Architect</strong></li>
  <li class="p"><strong>Dev</strong></li>
</ul>
<p class="note">Spezialisierte Rollen + strukturierte Artefakte — jede Phase ihr eigener Hut.</p>

<!--
Die vier BMAD-Rollen in v6 (BMM): Analyst, PM, Architect, Dev - einen separaten Scrum Master gibt es in v6 nicht mehr.
Ziel: Zeigen, dass BMAD über spezialisierte Personas plus strukturierte Artefakte arbeitet - genau das macht die Methode mächtig und schwer.
• Jede Phase trägt ihren eigenen „Hut": Analyst/PM für die Planung, Architect für die Lösung, Dev für die Umsetzung.
• Jede Rolle läuft typischerweise in einem frischen Chat - das ist Teil des Gewichts, das ihr gleich spürt.
• Vorteil dieser Schwere: lückenlose Traceability von der Anforderung bis zur Story.
-->

---
layout: cc
---

<span class="secno">05</span>
<h2 class="slash">Der Flow</h2>
<div class="flow" style="margin-top:0.8em">
  <span class="step">prd</span><span class="arrow">→</span>
  <span class="step">architecture</span><span class="arrow">→</span>
  <span class="step">epics &amp; stories</span><span class="arrow">→</span>
  <span class="step">create-story</span><span class="arrow">→</span>
  <span class="step">dev-story</span>
</div>

<!--
Der BMAD-BMM-Flow am import-Schnitt: prd → architecture → epics & stories → create-story → dev-story.
Ziel: Den konkreten Weg vorzeichnen, den ihr gleich abfahrt - vom PRD über die Architektur bis zum ersten umgesetzten Story-Lauf.
• prd: Anforderungen als FR1, FR2 … aus den Karten ableiten.
• architecture: Tech-Entscheidungen + ADRs - kommt in v6 bewusst vor den Stories (nächste Folie).
• epics & stories: Epics in Stories brechen, mit FR-Coverage-Map.
• create-story / dev-story: eine Story konkretisieren, dann der erste Umsetzungs-Loop.
-->

---
layout: cc
variant: center
---

<span class="secno">05</span>
<p class="big">Architecture <em class="u">vor</em> Stories.</p>
<p class="lead" style="margin-top:0.7em">Tech-Entscheidungen prägen das Breakdown (v6).</p>

<!--
Eine Eigenheit von BMAD v6: Die Architektur entsteht vor den Stories, nicht danach.
Ziel: Erklären, warum die Reihenfolge bewusst so gewählt ist - und was das für das Story-Breakdown bedeutet.
• Die Logik: getroffene Tech-Entscheidungen (z. B. SemVer-Vergleich beim Konflikt) prägen, wie sinnvoll man Epics in Stories schneidet.
• Andere Frameworks ziehen Plan/Design teils nach hinten - BMAD stellt die Lösungsphase bewusst voran.
• Brücke: Mit diesem Fahrplan im Kopf - jetzt eure konkrete Aufgabe.
-->

---
layout: cc
---

<span class="secno">05</span>
<h2 class="slash">Eure Aufgabe</h2>
<ul class="dots">
  <li class="g">Den <code class="inline">import</code>-Schnitt durch BMAD fahren.</li>
  <li class="b">Bis <strong>Stories vorliegen</strong>.</li>
  <li class="p">Ein erster <code class="inline">dev-story</code>-Lauf.</li>
</ul>
<p class="note">Charakteristischer Punkt — <strong>nicht</strong> bis zum fertigen Feature.</p>

<!--
Die konkrete Hands-on-Aufgabe: Den import-Schnitt durch BMAD fahren, bis Stories vorliegen, plus ein erster dev-story-Lauf.
Ziel: Den Stopp-Punkt glasklar setzen - der „charakteristische Punkt" ist nicht das fertige Feature.
• Der Aha liegt im Weg: Rollen, PRD→Arch→Epics, Traceability, frische Chats, viele Approvals - nicht im fertigen Code.
• Stoppt bewusst, sobald Stories liegen und ihr dev-story einmal angestoßen habt.
• Notausgang, falls die Zeit kippt: bmad-quick-dev (schlanker Modus, nicht default) fährt nicht die volle 4-Phasen-Pipeline, sondern routet zum kleinsten sicheren Pfad - aber dann verliert ihr genau die Rollen/Artefakte. Primär den vollen Pfad fahren.
-->

---
layout: cc
---

<span class="secno">05</span>
<h2 class="slash">So startet ihr — konkret</h2>
<p class="body">BMAD ist installiert (<code class="inline">npx bmad-method install</code>, Modul BMM).
Ihr ruft die Workflows in der IDE über ihren <strong>Skill-Namen</strong> auf — <strong>je Workflow ein frischer Chat</strong>.
Unsicher, was als Nächstes dran ist? <code class="inline">bmad-help</code> navigiert euch.</p>
<ol class="steps">
  <li><strong>Planning</strong> — <code class="inline">bmad-prd</code> → PRD mit FR1, FR2 … aus eurem Domänenverständnis</li>
  <li><strong>Solutioning</strong> — <code class="inline">bmad-create-architecture</code>, dann <code class="inline">bmad-create-epics-and-stories</code></li>
  <li><strong>Readiness</strong> — <code class="inline">bmad-check-implementation-readiness</code></li>
  <li><strong>Implementation</strong> — <code class="inline">bmad-sprint-planning</code>, dann der Loop:<br>
    <code class="inline">bmad-create-story</code> → <code class="inline">bmad-dev-story</code> → <code class="inline">bmad-code-review</code></li>
</ol>
<p class="note">Stopp bei vorliegenden Stories + erstem <code class="inline">bmad-dev-story</code>-Lauf. Notausgang bei Zeitnot: <code class="inline">bmad-quick-dev</code> (schlanker Modus, routet zum kleinsten sicheren Pfad). · <strong>Spürt das Gewicht: wie viel Prozess pro Zeile Code?</strong></p>

<!--
Konkrete Vorgehens-Folie: Wie startet man den BMAD-Prozess praktisch, nachdem BMAD aufgesetzt ist - mit den echten v6/BMM-Befehlen.
Ziel: Die Teilnehmer handlungsfähig machen - sie sollen wissen, welche Skills sie in welcher Reihenfolge aufrufen, statt vor einer leeren IDE zu sitzen.
Faktenbasis: recherchiert aus offizieller BMAD-Doku (docs.bmad-method.org) und README; Aufruf in v6 erfolgt über bmad-*-Skill-Namen (kein /bmad:-Slash, kein @agent), primär in der IDE (Claude Code / Cursor).
Was du sagen kannst:
• Voraussetzung: BMAD ist vorab via npx bmad-method install (Modul „BMad Method / BMM") eingerichtet - heute nur verifizieren.
• Aufruf-Mechanik: Workflows ruft ihr über ihren Skill-Namen auf, die IDE erkennt sie. Faustregel: pro Workflow ein frischer Chat (sauberer Kontext). bmad-help ist der Navigator und sagt euch kontextabhängig den nächsten Schritt.
• Reihenfolge (BMM, v6): Planning bmad-prd → Solutioning bmad-create-architecture + bmad-create-epics-and-stories (Architektur bewusst vor den Stories) → bmad-check-implementation-readiness → Implementation bmad-sprint-planning, dann pro Story der Loop bmad-create-story → bmad-dev-story → bmad-code-review.
• Optionale Analysis-Phase (Analyst: bmad-brainstorming, bmad-product-brief) überspringen wir heute - euer Domänenverständnis aus dem Mapping reicht als Input fürs PRD.
• Stopp-Punkt: Sobald Stories vorliegen und ihr bmad-dev-story einmal angestoßen habt - nicht bis zum fertigen Feature.
• Notausgang bei Zeitnot: bmad-quick-dev (schlanker Modus, nicht default) komprimiert Intent → lässt eine Spec bestätigen → routet zum kleinsten sicheren Pfad (One-Shot direkt, sonst leichte Planung) und läuft dann länger autonom - genauer als „überspringt Architektur/Phasen". Dann verliert ihr aber genau die Rollen/Artefakte, die den Aha ausmachen. Und auch quick-dev fügt KEINE Drift-Detection hinzu (Spec bleibt generativ, Review agentisch). Primär den vollen Pfad fahren.
• Reflexion zum Schluss (Brücke zu Akt 6): „Spürt das Gewicht - wie viel Prozess pro Zeile Code?" Gleich dieselbe Domäne durch die schlanke, contract-getriebene Form, dann urteilt ihr selbst.
-->
