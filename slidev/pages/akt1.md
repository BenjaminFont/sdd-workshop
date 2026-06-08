---
layout: cc
variant: title
nologo: true
---

<span class="secno">01</span>
<h1>Was ist eine Spec?</h1>
<div class="subtitle">Die Wurzel — und ihr Zweck</div>

<!--
Titelfolie für Akt 1 „Was ist eine Spec & warum?" (30 min).
Ziel: Den Begriff „Spec" von der Wurzel her aufladen, damit „Contract" später als logische Konsequenz erscheint — nicht als Tool-Feature.
Sagen kann man:
Wir steigen bewusst nicht beim Werkzeug ein, sondern bei der Frage, was eine Spezifikation eigentlich ist und warum es sie seit Jahrhunderten gibt.
Die Leitidee des ganzen Tages: Eine Spec überbrückt eine Verständnisgrenze und ist erst dann wertvoll, wenn man gegen sie abnehmen kann.
Der KI-Agent ist dabei nur der neueste „Bauer" in einer langen Reihe.
-->

---
layout: cc
variant: center
---

<span class="secno">01</span>
<p class="huge">„Was ist eine<br>Spezifikation?"</p>

<!--
Eröffnungsfrage als Vollbild — ein bewusster Denkanstoß ins Publikum.
Ziel: Das Publikum kurz selbst überlegen lassen und die intuitive Antwort („ein Dokument, das beschreibt, was zu bauen ist") aktivieren, bevor wir sie schärfen.
Sagen kann man:
Stellt die Frage offen, lasst 10–15 Sekunden Stille oder sammelt zwei, drei Zurufe.
Die meisten denken an ein Dokument. Wir werden gleich sehen: Schon das Wort selbst und seine Geschichte erzählen mehr — es geht ums Bestimmen und ums Prüfen, nicht ums Dokument an sich.
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
Die Wortwurzel als Kette: lat. specere (sehen) → species (Art/Gestalt) → spätlat. specificare (einer Art zuordnen) → specificatio.
Ziel: Zeigen, dass „spezifizieren" wörtlich heißt, das Unbestimmte sichtbar und einzeln bestimmbar zu machen — das ist kein moderner Methoden-Begriff, sondern uralt.
Sagen kann man:
Es beginnt beim Sehen. Aus dem Sehen wird das Erkennen einer Art, daraus das Zuordnen zu einer Art, daraus die Spezifikation.
Spezifizieren heißt: aus dem Allgemeinen das Einzelne, Sichtbare, Bestimmte machen — das Vage greifbar machen.
Diese Bedeutung tragen wir den ganzen Tag mit.
-->

---
layout: cc
variant: center
---

<span class="secno">01</span>
<p class="huge">Das Unbestimmte<br>bestimmt machen.</p>
<p class="lead" style="margin-top:0.7em">spezifizieren — wörtlich.</p>

<!--
Die Kernbedeutung als Vollbild-Aussage: „Das Unbestimmte bestimmt machen."
Ziel: Die Etymologie auf einen einprägsamen Satz verdichten, der als roter Faden hängenbleibt.
Sagen kann man:
Das ist die ganze Wurzel in einem Satz. Spezifizieren ist nichts anderes, als Unbestimmtes bestimmt zu machen.
Haltet diesen Gedanken fest — gleich wird daraus ein prüfbarer Anspruch, und das ist der entscheidende Schritt vom netten Dokument zur belastbaren Spec.
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
Das erste technische Auftreten des Wortes: „specification" ab 1833 im Patentrecht (belegt, §10). „spec" als Kurzform ab 1956.
Ziel: Den Aha-Moment setzen — schon die allererste technische Spec war ein rechtlich prüfbarer Anspruch, kein gut gemeintes Beschreibungsdokument.
Sagen kann man:
Im Patentrecht musste die „specification" so präzise sein, dass man einen Anspruch dagegen prüfen und durchsetzen konnte.
Das ist die DNA der Spec: nicht „ungefähr so soll es sein", sondern „dagegen kann man abnehmen".
Genau diese Prüfbarkeit ist es, die heute beim KI-Coding wieder gebraucht wird — und an der die meisten Fließtext-Specs scheitern.
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
Die fünf Zwecke einer Spec, die den ganzen Tag strukturieren.
Ziel: Zeigen, dass eine Spec mehrere Jobs gleichzeitig erfüllt — und dass Zweck 1 und 2 (Arbeitsteilung + Abnahme) die tragenden für unseren Workshop sind.
Sagen kann man:
Arbeitsteilung: eine Partei beschreibt das WAS, eine andere baut. Abnahme: ein objektives Kriterium für „fertig und richtig". Haftung: das geschuldete Werk, Abweichung = Mangel, Beweismittel. Austauschbarkeit: Normen erlauben austauschbare Teile (Whitworth-Gewinde, 1841). Kommunikation: persistentes, eindeutiges, geteiltes Wissen über Grenzen hinweg.
Zur Austauschbarkeit/Standardisierung (falls jemand nachfragt): Eine präzise Spec — genormte Maße, Toleranzen, Schnittstellen — macht Teile verschiedener Hersteller kompatibel. Man kann ein Teil durch ein anderes ersetzen, solange beide derselben Spec entsprechen. Anschaulich: das Whitworth-Schraubgewinde (1841, erste Gewindenorm) — eine Schraube von Hersteller A passt in eine Mutter von Hersteller B. Weitere Beispiele: Munitionskaliber; und später Software — eine API-Spec erlaubt, die Implementierung dahinter auszutauschen, solange der Contract gleich bleibt. Brücke zum Workshop: Genau deshalb ist die Spec der stabile Bezugspunkt, nicht der Code — der Code ist austauschbar, die Spec hält.
Merkt euch besonders Arbeitsteilung und Abnahme — daraus folgt gleich die zentrale Beobachtung.
-->

---
layout: cc
variant: center
---

<span class="secno">01</span>
<p class="big">Eine Spec überbrückt eine<br>Verständnisgrenze —</p>
<p class="big" style="margin-top:0.6em">wertvoll erst, wenn man gegen sie<br><span class="accent">abnehmen</span> kann.</p>

<!--
Die Kernbeobachtung des Tages, hergeleitet aus Zweck 1 + 2.
Ziel: Den roten Faden explizit machen — eine Spec ist kein Selbstzweck, ihr Wert entsteht erst durch die Abnahme dagegen.
Sagen kann man:
Eine Spec überbrückt die Verständnisgrenze zwischen dem, der etwas will, und dem, der es baut.
Aber: Eine Spec, gegen die man nicht abnehmen kann, ist nur ein gut gemeintes Dokument.
Erst die Prüfbarkeit macht sie wertvoll. Diesen Satz spielen wir den ganzen Tag durch — und am Ende heißt prüfbare Abnahme bei uns: ein deterministischer Contract.
-->

---
layout: cc
variant: center
nologo: true
---

<span class="secno">01</span>
<p class="huge">Wie kam die Spec<br>in die Software?</p>

<!--
Übergangsfolie — Wechsel vom allgemeinen Spec-Begriff zur Software-Geschichte.
Ziel: Die Brücke schlagen: Die uralte Idee der prüfbaren Spec kam in die Softwareentwicklung — und dort lief einiges schief, aber die Idee verschwand nie.
Sagen kann man:
Wir haben gesehen, woher die Spec kommt und wozu sie da ist. Jetzt: Wie kam sie in die Software?
Die kurze Antwort vorweg — die Geschichte ist voller Missverständnisse (Stichwort Waterfall), aber der Zweck blieb derselbe. Die nächsten Folien sind vier Stationen: Royce, IEEE 830, Design by Contract, Agile.
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
Station 1: Winston Royce, 1970 — der berühmte Waterfall-Mythos, richtiggestellt.
Ziel: Ein verbreitetes Missverständnis korrigieren und damit Glaubwürdigkeit aufbauen — Fakten, nicht Folklore.
Zum Phasendiagramm (Flow auf der Folie): Ein Phasenmodell heißt — jede Phase wird abgeschlossen, bevor die nächste beginnt; das Ergebnis jeder Phase ist der Input der nächsten (Requirements → Design → Code → Test → Betrieb). „Wasserfall" heißt es, weil es nur nach unten fließt — kein Zurück. Das ist riskant: Fehler und Missverständnisse fallen erst beim Testen ganz am Ende auf, wenn Korrekturen teuer sind; und die Anforderungen ändern sich während der langen Bauzeit, das Modell kann das aber nicht aufnehmen.
Sagen kann man (Ehrlichkeitsregel, §10 — nicht überverkaufen):
Royce hat dieses Phasendiagramm gezeichnet, es aber nicht „Waterfall" genannt und ausdrücklich davor gewarnt, es starr und einmalig durchzuziehen — er empfahl Iteration.
Erst DoD-STD-2167 (1985) — ein verbindlicher US-Militär-Standard für Software-Auftragnehmer — machte die starre Variante zur Vorschrift.
Wichtig: Royce war damit aber auch nicht „eigentlich agil" — bleibt fair. Lehre: Nicht die Spec war das Problem, sondern der Glaube, man könne sie einmal final festschreiben.
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
Vertiefung der Royce-Station: warum die starre Phasenkette in der Praxis scheiterte.
Ziel: Den Mechanismus des Scheiterns greifbar machen — und die Pointe vorbereiten, dass das Problem nicht die Spezifikation selbst war.
Sagen kann man:
• Der teure Spätfehler: In der starren Kette wird erst ganz am Ende getestet. Ein Missverständnis aus der Anforderungsphase fällt also erst Monate später auf — wenn Design und Code längst darauf aufbauen. Die Korrekturkosten steigen mit jeder Phase (bekannt als „cost of change curve").
• Bewegliche Anforderungen: Während der langen Bauzeit ändert sich die Welt — neue Wünsche, neue Erkenntnisse. Ein Modell ohne Rücksprung kann das nicht abbilden.
• Die Lehre (Brücke): Das Problem war nicht, dass man spezifiziert hat, sondern der Glaube an die einmalige, finale Festschreibung. Eine Spec muss lebendig und prüfbar bleiben — genau dahin führt der Tag.
-->

---
layout: cc
---

<span class="secno">01</span>
<h2 class="slash">IEEE 830</h2>
<p class="big">Erstmals gefordert:<br>Anforderungen müssen <span class="accent">verifizierbar</span> sein.</p>
<p class="note">Der SRS-Standard für Software-Anforderungen (1998).</p>

<!--
Station 2: IEEE 830 (SRS-Standard) — das Qualitätskriterium „verifizierbar".
Ziel: Zeigen, dass die Forderung nach prüfbaren Specs in der Software seit Jahrzehnten existiert — aber lange nur Papier blieb.
Sagen kann man:
Der IEEE-830-Standard für Software Requirements Specifications forderte schon, dass jede Anforderung unter anderem verifizierbar sein müsse.
Das war 1998 formuliert — eingelöst wird es technisch eigentlich erst heute, mit ausführbaren, gebundenen Specs.
Die Forderung war richtig, es fehlte nur das Werkzeug, sie durchzusetzen. Genau diese Lücke füllen wir im Hands-on-Teil.
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
Station 3: Design by Contract — der Begriff „Contract" ist 40 Jahre alt.
Ziel: Den Begriff „Contract", der heute beim KI-Coding zentral wird, historisch verankern — er ist nichts Neues, nur lange unterschätzt.
Sagen kann man:
Bertrand Meyer prägte „Design by Contract" mit seiner Sprache Eiffel ab 1986: Vor- und Nachbedingungen sowie Invarianten als prüfbare Verträge direkt im Code.
Die drei Begriffe mit Mini-Beispiel: Vorbedingung — was der Aufrufer sicherstellen muss, bevor er ruft (z.B. teile(a, b) verlangt b ≠ 0). Nachbedingung — was die Funktion danach garantiert (z.B. nach abheben(betrag) ist der Kontostand um genau betrag kleiner). Invariante — was durchgehend und immer gilt, vorher wie nachher (z.B. ein Konto-Saldo wird nie negativ). Warum „Contract": wie ein Vertrag zwischen Aufrufer und Funktion mit gegenseitigen Pflichten — hält der Aufrufer die Vorbedingung ein, garantiert die Funktion die Nachbedingung.
Das heißt: Die Idee, Erwartungen maschinell prüfbar an den Code zu binden, ist 40 Jahre alt.
Das ist die historische Wurzel des „Contract"-Begriffs, der heute beim KI-Coding zentral wird — der deterministische, maschinenprüfbare Prüfer gegen den nicht-deterministischen Generator.
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
Station 4: Agile Manifesto, 2001 — was wirklich mit der Spec geschah.
Ziel: Das verbreitete Missverständnis „Agile schafft Dokumentation ab" korrigieren — die Spec verschwand nicht, sie wechselte die Form.
Sagen kann man (Ehrlichkeitsregel, §10):
Das Manifest sagt „working software over comprehensive documentation" — das relativiert Doku, es wertet sie nicht ab. Das „over" ist eine Priorisierung, kein Verbot.
Die Spezifikation verschwand nicht, sie wanderte: in Tests, in Akzeptanzkriterien, in Typen, in Contracts.
Das ist der Clou: Die ausführbaren Formen der Spec sind genau die, die nicht unbemerkt veralten können — die Brücke zu unserer Form.
-->

---
layout: cc
---

<span class="secno">01</span>
<h2 class="slash">Die Spec beim KI-Coding</h2>
<p class="big">Heute ist die Spec das, was den Agenten <em class="u">bindet</em>.</p>
<ul class="dots compact" style="margin-top:0.5em">
  <li class="y"><strong>Prompt</strong> — die unmittelbare Absicht</li>
  <li class="b"><strong>Kontext &amp; Regeln</strong> — <code class="inline">CLAUDE.md</code>, Rule-Files, Konventionen</li>
  <li class="g"><strong>Tests &amp; Contracts</strong> — die prüfbare, erzwungene Form</li>
</ul>
<p class="note">Verstreut und implizit — oder bewusst als prüfbare Spec geführt. Das ist die Wahl.</p>

<!--
Brückenfolie: Sie übersetzt den historischen Spec-Begriff in die KI-Coding-Gegenwart.
Ziel: Den Teilnehmern zeigen, dass sie längst „spezifizieren", wenn sie mit einem Agenten arbeiten — nur oft unbewusst und unprüfbar.
Sagen kann man:
• Beim KI-Coding ist die Spec alles, was dem Agenten sagt, was er tun soll und woran er gemessen wird: der Prompt (die unmittelbare Absicht), der Kontext und die Regeln (CLAUDE.md, Rule-Files, Projektkonventionen) und — am stärksten — Tests und Contracts als prüfbare, erzwungene Form.
• Die Pointe: Diese Spec existiert sowieso. Die Frage ist nur, ob sie verstreut und implizit bleibt (und damit driftet) oder bewusst als prüfbare Spec geführt wird.
• Brücke: Genau darum geht es heute — und dafür schauen wir uns gleich drei Frameworks an.
-->

---
layout: cc
variant: center
---

<span class="secno">01</span>
<p class="lead">Heute:</p>
<p class="huge">derselbe alte Zweck,<br>ein neuer Bauer —<br>der <span class="accent">KI-Agent</span>.</p>

<!--
Abschluss-/Brückenfolie von Akt 1 zu Akt 2.
Ziel: Den Bogen schließen — die jahrhundertealte Idee der Spec trifft auf einen neuen Akteur, den KI-Agenten — und auf Akt 2 (drei Frameworks) überleiten.
Sagen kann man:
Der Zweck der Spec ist seit 1833 derselbe: eine Verständnisgrenze überbrücken und Abnahme ermöglichen.
Neu ist nur der Bauer: Früher ein anderes Team, heute der KI-Agent — ein nicht-deterministischer Generator, der erst recht eine prüfbare Vorgabe braucht.
Brücke zu Akt 2: Genau dafür gibt es heute Frameworks. Wir schauen uns gleich drei an — spec-kit, OpenSpec und BMAD — entlang derselben vier Phasen Spec → Plan → Tasks → Implement.
-->
