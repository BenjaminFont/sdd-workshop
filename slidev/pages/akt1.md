---
layout: cc
variant: title
nologo: true
---

<span class="secno">01</span>
<h1>Was ist eine Spec?</h1>

<!--
• Akt 1 „Was ist eine Spec & warum?" (30 min)
• nicht beim Werkzeug starten, sondern bei der Frage: was ist eine Spec
• Leitidee: Spec überbrückt Verständnisgrenze, wertvoll erst durch Abnahme
• KI-Agent nur der neueste „Bauer" in langer Reihe
-->

---
layout: cc
variant: center
---

<span class="secno">01</span>
<p class="huge">„Was ist eine<br>Spezifikation?"</p>

<!--
• Frage offen ins Publikum, 10–15 Sek Stille / Zurufe sammeln
• intuitive Antwort: „ein Dokument"
• Pointe: Wort & Geschichte sagen mehr — ums Bestimmen & Prüfen, nicht ums Dokument
-->

---
layout: cc
---

<span class="secno">01</span>
<h2 class="slash">Die Wurzel</h2>
<div class="flow etym" style="margin-top:0.7em">
  <span class="step">specere <span class="gl">sehen</span></span><span class="arrow">→</span>
  <span class="step">species <span class="gl">Art</span></span><span class="arrow">→</span>
  <span class="step">specificare <span class="gl">zuordnen</span></span><span class="arrow">→</span>
  <span class="step">specificatio <span class="gl">Bestimmung</span></span>
</div>
<p class="note">Etymologie belegt: vom Sehen zum Bestimmen einer Art.</p>

<!--
• Kette: specere (sehen) → species (Art) → specificare (zuordnen) → specificatio
• beginnt beim Sehen, dann Erkennen, dann Zuordnen
• spezifizieren = Vages greifbar, Allgemeines einzeln/bestimmt machen
• kein moderner Begriff, uralt — trägt den ganzen Tag
-->

---
layout: cc
variant: center
---

<span class="secno">01</span>
<p class="huge">Das Unbestimmte<br>bestimmt machen.</p>
<p class="lead" style="margin-top:0.7em">spezifizieren — wörtlich.</p>

<!--
• Kernsatz / roter Faden: Unbestimmtes bestimmt machen
• gleich daraus: prüfbarer Anspruch
• Schritt vom netten Dokument zur belastbaren Spec
-->

---
layout: cc
variant: center
---

<span class="secno">01</span>
<p class="lead">„specification" — technisch ab 1833</p>
<p class="huge">im Patentrecht</p>
<p class="big" style="margin-top:0.7em">Ein <em class="u">prüfbarer Anspruch</em>.</p>
<p class="note">Nicht ein gut gemeintes Dokument.</p>

<!--
• 1833 Patentrecht, erstes techn. Auftreten; „spec" ab 1956
• schon damals: rechtlich prüf- & durchsetzbarer Anspruch
• DNA der Spec: nicht „ungefähr so", sondern „dagegen abnehmbar"
• genau diese Prüfbarkeit fehlt heute Fließtext-Specs beim KI-Coding
-->

---
layout: cc
variant: center
---

<span class="secno">01</span>
<p class="big">Eine Spec überbrückt eine<br>Verständnisgrenze —</p>
<p class="big" style="margin-top:0.6em">wertvoll erst, wenn man gegen sie<br><span class="accent">abnehmen</span> kann.</p>

<!--
• Kernbeobachtung des Tages (aus Zweck 1 + 2)
• Spec überbrückt Grenze: wer will ↔ wer baut
• ohne Abnahme nur gut gemeintes Dokument; Prüfbarkeit macht wertvoll
• am Ende = deterministischer Contract
-->

---
layout: cc
variant: center
nologo: true
---

<span class="secno">01</span>
<p class="huge">Wie kam die Spec<br>in die Software?</p>

<!--
• Übergang: vom Spec-Begriff zur Software-Geschichte
• uralte Idee kam in Software, lief schief, verschwand nie
• voller Missverständnisse (Waterfall), Zweck blieb gleich
• 4 Stationen: Royce, IEEE 830, Design by Contract, Agile
-->

---
layout: cc
---

<span class="secno">01</span>
<h2 class="slash">Royce, 1970</h2>
<p class="big">Zeichnete die starre Phasenkette —<br>und <em class="u">warnte davor</em>.</p>
<div class="flow compact" style="margin-top:0.7em">
  <span class="step">Requirements</span><span class="arrow">→</span>
  <span class="step">Design</span><span class="arrow">→</span>
  <span class="step">Code</span><span class="arrow">→</span>
  <span class="step">Test</span><span class="arrow">→</span>
  <span class="step">Betrieb</span>
</div>
<p class="note">Eine Phase nach der anderen, kein Zurück — später „Waterfall" genannt.<br>DoD-STD-2167 (1985) machte genau diese starre Variante zur Vorschrift.</p>

<!--
• Station 1: Royce 1970, Waterfall-Mythos richtiggestellt
• Phasenmodell: jede Phase abgeschlossen → Input der nächsten, kein Zurück
• riskant: Fehler erst spät & teuer, Anforderungen ändern sich
• Royce nannte es nicht „Waterfall", warnte vor starrer Variante, empfahl Iteration
• erst DoD·STD·2167 (1985) machte starre Variante zur Vorschrift
• fair bleiben: Royce auch nicht „eigentlich agil"
• Lehre: nicht die Spec, sondern der Glaube an einmalige finale Festschreibung
-->

---
layout: cc
---

<span class="secno">01</span>
<h2 class="slash">Warum die starre Kette scheiterte</h2>
<ul class="dots">
  <li class="p">Fehler fallen erst <strong>im Test ganz am Ende</strong> auf</li>
  <li class="y">Je später entdeckt, desto <strong>teurer</strong> die Korrektur</li>
  <li class="b">Anforderungen <strong>ändern sich</strong> während der langen Bauzeit</li>
  <li class="g">Das Modell kennt <strong>kein Zurück</strong> — es kann das nicht aufnehmen</li>
</ul>
<p class="note">Nicht die Spec war das Problem — sondern der Glaube, sie einmal final festzuschreiben.</p>

<!--
• teurer Spätfehler: erst am Ende getestet, Missverständnis fällt Monate später auf
• Korrekturkosten steigen je Phase („cost of change curve")
• bewegliche Anforderungen: Welt ändert sich, Modell ohne Rücksprung kann nicht
• Lehre: nicht das Spezifizieren, sondern die finale Festschreibung
• Spec muss lebendig & prüfbar bleiben
-->

---
layout: cc
---

<span class="secno">01</span>
<h2 class="slash">IEEE 830</h2>
<p class="lead" style="margin-top:-0.3em">Software Requirements Specifications (SRS)</p>
<p class="big" style="margin-top:0.5em">Gefordert:<br>Anforderungen müssen <span class="accent">verifizierbar</span> sein.</p>
<p class="note">Der Standard für Software-Anforderungen (Ausgabe 1998).</p>

<!--
• Station 2: IEEE 830 — „Recommended Practice for Software Requirements Specifications (SRS)"
• Requirements/Dokumentations-Standard: wie schreibt man eine gute Spec
• „verifizierbar" = 1 von 8 Qualitätsmerkmalen (correct, unambiguous, complete …)
• Forderung alt (schon Ausgabe 1984) · zivil etabliert — Mil-Specs früher, also nicht „der erste"
• heute formal abgelöst durch ISO/IEC/IEEE 29148, Vokabular lebt weiter
• eingelöst erst heute: ausführbare, gebundene Specs — Werkzeug fehlte, Lücke füllt der Hands·on
-->

---
layout: cc
---

<span class="secno">01</span>
<h2 class="slash">Design by Contract</h2>
<p class="big">Der Begriff „Contract" ist<br><em class="u">40 Jahre alt</em>.</p>
<ul class="dots compact">
  <li class="b"><strong>Vorbedingung</strong> — was der Aufrufer garantieren muss</li>
  <li class="g"><strong>Nachbedingung</strong> — was die Funktion danach garantiert</li>
  <li class="y"><strong>Invariante</strong> — was immer gilt</li>
</ul>
<p class="note">Meyer / Eiffel, ab 1986 — prüfbare Zusicherungen direkt im Code.</p>

<!--
• Station 3: „Contract" ist 40 Jahre alt, nichts Neues
• Meyer / Eiffel ab 1986: Vor·, Nachbedingung, Invariante im Code
• Vorbedingung: Aufrufer muss garantieren (teile(a,b): b ≠ 0)
• Nachbedingung: Funktion garantiert danach (abheben: Saldo um Betrag kleiner)
• Invariante: gilt immer (Saldo nie negativ)
• „Contract": gegenseitige Pflichten Aufrufer ↔ Funktion
• Wurzel des heutigen KI-Coding: det. Prüfer gegen nicht-det. Generator
-->

---
layout: cc
---

<span class="secno">01</span>
<h2 class="slash">Agile, 2001</h2>
<p class="big">Die Spec verschwand nicht.</p>
<ul class="dots">
  <li class="b">wanderte in <strong>Tests</strong></li>
  <li class="g"><strong>Akzeptanzkriterien</strong></li>
  <li class="p"><strong>Typen</strong></li>
  <li class="y"><strong>Contracts</strong></li>
</ul>

<!--
• Station 4: Agile 2001, Missverständnis „Agile schafft Doku ab" korrigieren
• „working software over comprehensive documentation": Priorisierung, kein Verbot
• Spec verschwand nicht, wanderte: Tests, Akzeptanzkriterien, Typen, Contracts
• Clou: ausführbare Formen veralten nicht unbemerkt → Brücke zu unserer Form
-->

---
layout: cc
---

<span class="secno">01</span>
<h2 class="slash">Wozu Specs? Fünf Zwecke</h2>
<ul class="dots">
  <li class="y"><strong>Arbeitsteilung</strong> — einer beschreibt das WAS, ein anderer baut</li>
  <li class="b"><strong>Abnahme</strong> — objektives Kriterium für „fertig &amp; richtig"</li>
  <li class="g"><strong>Haftung</strong> — das geschuldete Werk; Abweichung = Mangel</li>
  <li class="p"><strong>Austauschbarkeit</strong> — gleiche Spec → ersetzbare Teile</li>
  <li class="y"><strong>Kommunikation</strong> — geteiltes, eindeutiges Wissen über Grenzen</li>
</ul>
<p class="note">Tragend für heute: <strong>Arbeitsteilung</strong> + <strong>Abnahme</strong>.</p>

<!--
• 5 Zwecke, strukturieren den Tag; tragend: Arbeitsteilung + Abnahme
• Arbeitsteilung: einer beschreibt WAS, anderer baut
• Abnahme: objektives Kriterium „fertig & richtig"
• Haftung: geschuldetes Werk, Abweichung = Mangel
• Austauschbarkeit: gleiche Spec → ersetzbare Teile (Whitworth·Gewinde 1841)
• Kommunikation: geteiltes eindeutiges Wissen über Grenzen
• bei Nachfrage: API-Spec → Implementierung austauschbar, Contract bleibt
• Spec ist stabiler Bezugspunkt, nicht der Code
-->

---
layout: cc
variant: center
---

<span class="secno">01</span>
<p class="lead">Heute:</p>
<p class="huge">derselbe alte Zweck,<br>ein neuer Abnehmer —<br>der <span class="accent">KI-Agent</span>.</p>

<!--
• Abschluss Akt 1 → Brücke Akt 2
• Zweck seit 1833 gleich: Grenze überbrücken, Abnahme ermöglichen
• neu nur der Bauer: KI-Agent, nicht-det. Generator, braucht prüfbare Vorgabe
• dafür Frameworks: spec-kit, OpenSpec, BMAD
• gleiche 4 Phasen: Spec → Plan → Tasks → Implement
-->
