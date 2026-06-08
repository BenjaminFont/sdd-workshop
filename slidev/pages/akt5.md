---
layout: cc
variant: title
nologo: true
---

<span class="secno">05</span>
<h1>Pfad A — BMAD</h1>

<!--
• Pfad A: BMAD, erster Hands-on-Pfad
• gleicher import-Schnitt aus Example Mapping, jetzt durch BMAD
• „schwer per Default" — Schwere/Zeremonie bewusst zuerst spüren
• 70 Min, Einzelarbeit, nicht bis fertiges Feature
• BMAD vorab installiert, nur loslegen
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
• Aufgabe: import-Schnitt durch BMAD, bis Stories vorliegen, + erster dev-story-Lauf
• Stopp-Punkt: nicht fertiges Feature
• Aha liegt im Weg: Rollen, PRD→Arch→Epics, Traceability, frische Chats, viele Approvals
• Stoppen, sobald Stories da + dev-story einmal angestoßen
• Notausgang bei Zeitnot: bmad-quick-dev (schlank, nicht default), aber verliert Rollen/Artefakte → primär voller Pfad
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

<!--
• Voraussetzung: BMAD via npx bmad-method install (Modul BMM), heute nur verifizieren
• Aufruf-Mechanik: Workflows über Skill-Namen, IDE erkennt sie; pro Workflow frischer Chat; bmad-help navigiert
• Reihenfolge: Planning bmad-prd → Solutioning bmad-create-architecture + bmad-create-epics-and-stories (Arch vor Stories) → bmad-check-implementation-readiness → Implementation bmad-sprint-planning, dann Loop create-story → dev-story → code-review
• Optionale Analysis-Phase (brainstorming, product-brief) überspringen, Mapping reicht als PRD-Input
• Stopp: Stories da + dev-story einmal angestoßen, nicht fertiges Feature
• Notausgang Zeitnot: bmad-quick-dev (schlank, nicht default), kleinster sicherer Pfad, aber verliert Rollen/Artefakte; keine Drift-Detection → primär voller Pfad
• Reflexion / Brücke Akt 6: „Spürt das Gewicht, wie viel Prozess pro Zeile Code?"
-->
