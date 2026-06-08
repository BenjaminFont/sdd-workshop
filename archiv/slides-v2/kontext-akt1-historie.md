# Kontext-Doku: Software-Historie für Akt 1

**Was ist das hier?**
Diese Doku ist dein Spickzettel für Akt 1. Sie gibt dir ein solides Grundverständnis der historischen Stationen, die auf den Folien vorkommen — genug, um sicher und frei darüber zu sprechen, ohne dich in Details zu verlieren. Kein akademischer Vortrag, sondern „erklär es mir, damit ich es auf der Bühne erklären kann".

Roter Faden von Akt 1: Der Begriff **„Spec"** (Spezifikation) ist uralt, und der heutige **„Contract"**-Begriff beim KI-Coding hat tiefe historische Wurzeln. Die Geschichte zeigt: Anforderungen vorab klar festzuhalten und sie *prüfbar* zu machen, ist keine neue Mode — neu ist nur, dass ein nicht-deterministischer Generator (die KI) einen deterministischen Prüfer (den Contract) braucht.

**Eine Ehrlichkeitsregel vorweg:** Mehrere dieser Geschichten werden in der Branche gern überspitzt erzählt. Diese Doku markiert die Stellen, an denen du *nicht* übertreiben solltest. Fakten-Genauigkeit schlägt eine gute Pointe.

---

## 1. Das Phasenmodell / Wasserfallmodell

**Was ist ein Phasenmodell?**
Ein Phasenmodell teilt die Softwareentwicklung in klar abgegrenzte Abschnitte, die nacheinander durchlaufen werden. Die Idee dahinter ist Ordnung: Erst denken, dann bauen. Man will nicht planlos drauflos programmieren, sondern jede Etappe sauber abschließen, bevor die nächste beginnt.

**Die klassischen Phasen:**

1. **Requirements (Anforderungen)** — Was soll die Software können? Wünsche und Bedingungen werden gesammelt und festgehalten.
2. **Design (Entwurf)** — Wie wird das gebaut? Architektur, Module, Schnittstellen.
3. **Code (Implementierung)** — Das eigentliche Programmieren.
4. **Test (Prüfung)** — Funktioniert alles wie gewünscht? Fehler werden gesucht.
5. **Betrieb (Wartung)** — Die Software läuft beim Kunden, wird gepflegt und angepasst.

**Warum „Wasserfall"?**
Das Bild ist ein Wasserfall: Wasser fließt immer nur nach unten. Jede Phase fließt in die nächste — und ein Wasserfall fließt nicht zurück. Sobald du eine Phase abgeschlossen hast, gehst du nicht mehr hoch. Du legst die Anforderungen fest, dann designst du, dann codest du. Theoretisch kein Zurück.

**Die Schwäche — und das ist der Kern für die Folie:**
Das Problem ist genau dieses „kein Zurück". Fehler und Missverständnisse in den frühen Phasen fallen oft erst ganz am Ende auf — beim Test oder schlimmer noch beim Kunden. Ein falsch verstandenes Anforderungs-Detail wird durch Design und Code mitgeschleppt und ist dann teuer zu korrigieren. Dazu kommt: Anforderungen ändern sich. Was zu Projektbeginn festgelegt wurde, passt ein Jahr später oft nicht mehr. Ein starrer Wasserfall kann darauf schlecht reagieren.

> **Das sagst du auf der Folie:** Das Wasserfallmodell ist der Klassiker — saubere Phasen von Anforderung bis Betrieb, jede fließt in die nächste, kein Zurück. Klingt ordentlich, aber genau das ist die Falle: Missverständnisse fallen erst spät auf, und auf geänderte Anforderungen kann man kaum reagieren.

---

## 2. Royce 1970 — der Mythos und die Wahrheit

**Was hat Royce wirklich getan?**
Winston Royce veröffentlichte 1970 das Paper *„Managing the Development of Large Software Systems"*. Darin zeichnete er das berühmte sequenzielle Diagramm: die Phasen, die schön von oben nach unten fließen. Dieses Diagramm gilt als die „Geburtsstunde des Wasserfallmodells".

**Hier kommt der Mythos:**
Royce hat das Wort **„Waterfall" nie benutzt**. Und vor allem: Er zeichnete dieses rein sequenzielle Modell nicht als Empfehlung, sondern als das *einfachste, aber riskante* Vorgehen. Er warnte ausdrücklich davor — sinngemäß: dieses Vorgehen sei „risky and invites failure" (riskant und lädt zum Scheitern ein). Sein eigentlicher Punkt war, dass man **iterieren** muss: Rückkopplungsschleifen einbauen, Erkenntnisse aus späteren Phasen in frühere zurückspielen, am besten Dinge zweimal bauen (Prototyp). Ironie der Geschichte: Das Diagramm, das eine Warnung sein sollte, wurde zum Vorbild genommen.

**WICHTIG — die Fairness-Korrektur (nicht in die andere Richtung übertreiben):**
Jetzt erzählen manche die Geschichte zu enthusiastisch: „Royce war eigentlich schon agil!" Das stimmt nicht. Royce empfahl weiterhin gründliche Dokumentation und ausführliches Design — nur eben *iterativ* statt stur einmalig durchgezogen. Er war kein verkappter Agilist, der Dokumentation ablehnte. Er war ein Ingenieur, der sequenzielles Vorgehen für naiv hielt, aber an Planung und Dokumentation festhielt.

> **Das sagst du auf der Folie:** Royce hat 1970 das Wasserfall-Diagramm gezeichnet — aber als Warnung, nicht als Empfehlung. Er nannte es nie „Waterfall" und schrieb, das stur sequenzielle Vorgehen sei riskant; man müsse iterieren. Trotzdem wurde genau dieses Diagramm zum Standard. Wichtig: Er war deshalb nicht „heimlich agil" — er wollte weiter Doku und Design, nur in Schleifen.

---

## 3. DoD-STD-2167 (1985) — wie ein Militärstandard die Branche prägte

**Was ist das?**
DoD-STD-2167 ist ein Standard des US-Verteidigungsministeriums (Department of Defense) aus dem Jahr 1985. Er schrieb vor, wie Software-Auftragnehmer für das US-Militär ihre Projekte zu entwickeln und zu dokumentieren hatten. Wer fürs Pentagon Software baute, musste sich daran halten.

**Warum ist das relevant?**
Hier schließt sich der Kreis zu Royce. Royce hatte vor dem starren sequenziellen Modell *gewarnt* — DoD-STD-2167 machte genau diese starre Variante zur **vertraglichen Pflicht**. Der Standard zementierte das Phasenmodell mit klar getrennten, nacheinander abzuliefernden Schritten und Dokumenten. Was als Warnung gemeint war, wurde so zum verbindlichen Industriestandard für einen riesigen, einflussreichen Auftraggeber.

**Warum prägt ein Militärstandard die ganze Branche?**
Zwei Gründe. Erstens: Das DoD war (und ist) ein gigantischer Software-Auftraggeber. Wenn der größte Kunde der Welt ein Vorgehen vorschreibt, richten sich tausende Firmen danach — und übernehmen die Methode auch für andere Projekte. Zweitens — und das ist die eigentliche Logik dahinter — die **Auftragslogik** passt perfekt zum Wasserfall: Wenn du einen externen Auftragnehmer bezahlst, willst du **vorab vertraglich festschreiben, WAS gebaut wird**, bevor er anfängt zu bauen. Du brauchst eine vollständige Spezifikation als Vertragsgrundlage, damit am Ende prüfbar ist, ob geliefert wurde, was bestellt war. Genau dafür ist ein striktes „erst alles spezifizieren, dann bauen" ideal. Der Wasserfall ist also nicht nur eine technische, sondern eine **vertragliche** Denkweise.

> **Das sagst du auf der Folie:** 1985 machte das US-Verteidigungsministerium mit DoD-STD-2167 das starre Phasenmodell für seine Auftragnehmer verbindlich — also genau die Variante, vor der Royce gewarnt hatte. Warum ein Militärstandard die Branche prägte? Weil das DoD ein riesiger Auftraggeber war und weil Auftragslogik den Wasserfall liebt: Erst vertraglich festschreiben, WAS gebaut wird, dann bauen lassen.

---

## 4. IEEE 830 — Anforderungen, die man prüfen kann

**Was ist das?**
IEEE 830 ist ein Standard mit dem Titel *„Recommended Practice for Software Requirements Specifications"* (Empfohlene Vorgehensweise für Software-Anforderungsspezifikationen). Er beschreibt, wie man eine gute **SRS** schreibt — eine Software Requirements Specification.

**Was ist eine SRS?**
Eine SRS ist das Dokument, das festhält, was die Software leisten soll: alle Anforderungen, gesammelt und strukturiert. Es ist die Brücke zwischen „was der Kunde will" und „was die Entwickler bauen". IEEE 830 sagt nicht nur *dass* man so etwas schreiben soll, sondern gibt **Qualitätskriterien** vor, wann eine Anforderung gut ist.

**Die Qualitätskriterien für gute Anforderungen:**
Eine gute Anforderung soll unter anderem sein:

- **Vollständig** — nichts Wesentliches fehlt.
- **Konsistent** — keine Widersprüche zwischen Anforderungen.
- **Eindeutig** — nur eine Interpretation möglich, keine schwammigen Formulierungen.
- **Verifizierbar** — und das ist der wichtigste Punkt für unseren Workshop.

**Warum „verifizierbar" der Knaller ist:**
Verifizierbar heißt: Man kann objektiv und mit endlichem Aufwand prüfen, ob die fertige Software die Anforderung erfüllt. „Das System soll schnell sein" ist *nicht* verifizierbar (was heißt schnell?). „Das System antwortet in unter 2 Sekunden" ist verifizierbar — man kann es messen. Der Clou für die Folie: **„Verifizierbar" wurde schon 1998 gefordert** (in der maßgeblichen Fassung des Standards). Die Idee, dass eine Anforderung prüfbar sein muss, damit sie etwas wert ist, ist also keine Erfindung des KI-Zeitalters. Sie ist die direkte historische Vorform des heutigen „Contract"-Gedankens: eine Spezifikation, gegen die man maschinell prüfen kann.

**Und heute?**
IEEE 830 ist mittlerweile zurückgezogen und wurde durch den moderneren Standard **ISO/IEC/IEEE 29148** abgelöst. Der Gedanke lebt also weiter, nur unter neuer Nummer.

> **Das sagst du auf der Folie:** IEEE 830 beschreibt, wie eine gute Anforderungsspezifikation aussieht: vollständig, konsistent, eindeutig — und vor allem verifizierbar, also objektiv prüfbar. Dass eine Anforderung prüfbar sein muss, wurde schon 1998 gefordert. Genau dieser Gedanke ist die Wurzel unseres „Contract". Heute heißt der Standard ISO/IEC/IEEE 29148.

---

## 5. Design by Contract — woher der „Contract" kommt

**Wer und wann?**
Design by Contract (DbC) stammt von Bertrand Meyer und wurde ab 1986 mit der Programmiersprache **Eiffel** bekannt. Die Idee: Teile eines Programms schließen miteinander einen **Vertrag** — eindeutige, im Code prüfbare Zusagen darüber, was sie voneinander erwarten und liefern.

**Die drei Bausteine (mit Mini-Beispielen):**

- **Vorbedingung (Precondition)** — Was muss gelten, *bevor* eine Funktion aufgerufen wird? Die Verantwortung liegt beim Aufrufer.
  *Alltag:* Bevor ich Geld abhebe, muss mein Konto gedeckt sein.
  *Pseudocode:* `abheben(betrag)` verlangt `betrag <= kontostand`.

- **Nachbedingung (Postcondition)** — Was garantiert die Funktion, *nachdem* sie gelaufen ist? Die Verantwortung liegt beim Aufgerufenen.
  *Alltag:* Nach dem Abheben ist der neue Kontostand exakt alt minus Betrag.
  *Pseudocode:* nach `abheben(betrag)` gilt `kontostand == alt - betrag`.

- **Invariante (Invariant)** — Was muss *immer* wahr sein, egal was passiert? Eine dauerhafte Spielregel.
  *Alltag:* Der Kontostand darf nie negativ werden — vor, während und nach jeder Operation.

**Woher kommt das Wort „Contract"?**
Meyer wählte das Bild des Vertrags bewusst: Wie im Geschäftsleben gibt es zwei Seiten mit Rechten und Pflichten. Hält der Aufrufer die Vorbedingung ein, garantiert die Funktion die Nachbedingung. Bricht jemand den Vertrag, fliegt sofort ein Fehler — der Bruch wird sichtbar, statt sich still durchs System zu schleichen.

**Die Wurzel und die Brücke zum KI-Coding:**
Theoretisch steht dahinter die **Hoare-Logik** (Tony Hoare, Ende der 1960er) — eine formale Methode, um Aussagen über Programmzustände mit Vor- und Nachbedingungen zu beweisen. DbC hat diese Theorie praktisch in eine Sprache gegossen. Und genau hier liegt die historische Wurzel des heutigen „Contract"-Begriffs beim KI-Coding: **Der Begriff ist rund 40 Jahre alt.** Wir erfinden ihn nicht neu, wir nutzen ihn neu.

Der entscheidende Bezug für den Workshop: Ein Contract ist ein **deterministischer Prüfer** — er sagt immer eindeutig „erfüllt" oder „verletzt". Die KI dagegen ist ein **nicht-deterministischer Generator** — sie produziert plausiblen, aber nicht garantiert korrekten Code. Der Contract ist die Instanz, die den unzuverlässigen Generator an der kurzen Leine hält.

**Fairness-Hinweis (nicht überverkaufen):**
Formale Methoden wie strenge DbC oder formale Verifikation sind in der breiten Industrie eine **Nische** geblieben — aber sie sind nicht *gescheitert*. Sie haben sich in sicherheitskritischen Bereichen bewährt und ihre Ideen leben in Typsystemen, Tests und eben Contracts weiter. Erzähl es also nicht als „die haben damals versagt", sondern als „die Idee war richtig und kommt jetzt voll zum Tragen".

> **Das sagst du auf der Folie:** Design by Contract kommt von Bertrand Meyer und der Sprache Eiffel, ab 1986. Code-Teile schließen Verträge: Vorbedingungen (was muss vorher gelten), Nachbedingungen (was wird garantiert) und Invarianten (was gilt immer). Der Begriff „Contract" ist also 40 Jahre alt, mit Wurzeln in der Hoare-Logik. Genau das brauchen wir beim KI-Coding: einen deterministischen Prüfer gegen einen nicht-deterministischen Generator.

---

## 6. Agile 2001 — die Spec ist nicht verschwunden

**Was war das?**
2001 schrieben 17 Software-Entwickler das **Agile Manifesto** — eine kurze Erklärung mit vier Wertepaaren, die die schwerfälligen Wasserfall-Prozesse aufbrechen sollte. Es wurde zum Startschuss der agilen Bewegung (Scrum, XP und Co.).

**Die berühmte Zeile — und ihre korrekte Lesart:**
Das wohl meistzitierte Wertepaar lautet: *„Working software over comprehensive documentation"* — funktionierende Software *über* umfassende Dokumentation. Achtung, hier wird ständig falsch zitiert. Das „over" heißt **nicht** „statt" oder „anstelle von". Das Manifesto sagt im selben Atemzug ausdrücklich: Beide Seiten haben Wert, aber wenn man sich entscheiden muss, gewichtet man die linke Seite höher. Es ist eine **Relativierung, keine Abwertung**. Dokumentation wird nicht für überflüssig erklärt — sie wird nur entthront als Selbstzweck.

**Der entscheidende Punkt für den Workshop:**
Die Spezifikation ist mit Agile nicht verschwunden. Sie hat nur die **Form gewechselt**. Statt dicker Vorab-Dokumente, die niemand mehr liest, wanderte die Spezifikation dorthin, wo sie lebendig und prüfbar bleibt:

- in **Tests** (z. B. Unit-Tests, die festhalten, was gelten muss),
- in **Akzeptanzkriterien** (klare „fertig wenn"-Bedingungen pro Anforderung),
- in **Typen** (das Typsystem als maschinengeprüfte Spezifikation),
- in **Contracts** (Vor-/Nachbedingungen, Invarianten — siehe Abschnitt 5).

So schließt sich der Bogen von Akt 1: Die Anforderung, dass eine Spec *verifizierbar* sein muss (IEEE 830), und die Idee prüfbarer Verträge (Design by Contract) sind in der agilen Welt nicht verloren gegangen — sie sind eingewandert in Tests, Typen und Contracts. Und genau dort holen wir sie für das KI-Coding wieder ab.

> **Das sagst du auf der Folie:** 2001 kam das Agile Manifesto. „Working software over comprehensive documentation" heißt nicht „keine Doku mehr" — das „over" relativiert, es wertet nicht ab. Beide haben Wert. Wichtig: Die Spec ist nicht verschwunden, sie ist umgezogen — in Tests, Akzeptanzkriterien, Typen und Contracts. Genau dort knüpfen wir an.

---

## Spickzettel der Stolperfallen (nicht überverkaufen)

- **Royce** hat „Waterfall" nicht erfunden, sondern davor gewarnt — aber er war auch *nicht* heimlich agil. Er wollte Doku und Design, nur iterativ.
- **Etymologie ≠ Ingenieurzweck:** Dass „Spec" alt ist, ist eine schöne Pointe, beweist aber für sich genommen nichts über die richtige Entwicklungsmethode. Nutze es als Bild, nicht als Beweis.
- **Formale Methoden** (Hoare, strenge DbC) sind eine *Nische*, nicht ein *Scheitern*. Ihre Ideen leben weiter.
- **Agile** wertet Dokumentation nicht ab, sondern relativiert sie.
