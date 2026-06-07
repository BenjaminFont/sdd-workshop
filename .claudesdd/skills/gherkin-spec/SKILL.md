---
name: gherkin-spec
description: >
  Translate the green cards from an Example Mapping session
  into domain Gherkin — the readable, executable behaviour
  spec. Output is one stack-neutral `.feature` file organised
  by domain (Domain → Requirement → Scenario), with every
  requirement living in Given/When/Then, never in free text.
when_to_use: >
  After an Example Mapping session, when the user wants to
  turn the rules (blue) and examples (green) into an
  executable behaviour spec, or says "write the Gherkin",
  "turn these into scenarios", or "make the spec executable".
argument-hint: "[path to example-mapping file]"
allowed-tools: Read Glob Grep Write Edit AskUserQuestion
---

# /gherkin-spec

Translate the **green cards** of an Example Mapping session into
**domain Gherkin** — a `.feature` file a domain expert can read and
confirm, and which the `bind-contract` skill later makes executable
via Cucumber. The file looks identical whether "dead" or executable;
executability is added *below* it (step definitions), never by
changing this layer. See `erkenntnisse.md` Kap. 11–13.

This is the second link in the chain:

```
Example Mapping   →  the right rules + examples            (correctness)
   ↓ green cards
Gherkin spec      →  behaviour spec, sorted by domain      (this skill)
   ↓ bound, NOT generated
Cucumber + strict →  RED on drift in CI                    (bind-contract)
```

## When to Invoke

Invoke when:

- An Example Mapping file (or its cards) exists and the user wants the
  executable behaviour spec
- The rules and examples are concrete enough to phrase as
  Given/When/Then (few or no open red cards remain)

## Refusal Cases

Do **not** run when:

- There are no green cards / no concrete examples — send the user to
  `/example-mapping` first; do **not** invent scenarios
- Unresolved red cards still gate the behaviour — resolve them with the
  user before phrasing a scenario, rather than guessing the outcome
- The user asks you to "just write the spec yourself" — the examples
  carry the user's domain knowledge; a fabricated `.feature` looks
  executable but encodes your guesses

## Core Discipline

### One requirement lives in Given/When/Then — NEVER in free text

Gherkin allows free-text description lines under `Feature:` (and before
the first step). They are **swallowed silently** — parsed like a
comment, never executed. A requirement written there produces a spec
**that is never checked**. This is the single most important rule of
this skill.

```gherkin
# WRONG — the rule is in the description. It runs GREEN forever,
# because nothing executes it. The spec silently lies.
Feature: Rule import
  When a newer version is imported it overwrites the existing rule,
  but an older version is rejected.

# RIGHT — the rule is a Scenario. It can go RED when the code disagrees.
Feature: Rule import

  Scenario: Newer version overwrites the existing rule
    Given an installed rule at version "1.2.0"
    When a rule with the same name at version "1.3.0" is imported
    Then the installed rule is at version "1.3.0"
```

> **RED happens ⟺ (what the scenario asserts) ≠ (what the code does).**
> A requirement that never reaches Given/When/Then can never reach RED.

### Domain form: file = one domain, not one feature

A `.feature` file is **one domain / bounded context**, not one feature.
Inside it (OpenSpec form, Kap. 4):

```
import.feature        ← the domain (one file)
  Feature: …          ← Requirement (smallest add/modify/remove unit)
    Scenario: …       ← Given/When/Then, testable
    Scenario: …
```

New behaviour is a **new Scenario inside an existing domain file**, not
a new file per feature — so `features/` grows per domain, not per
feature. A blue **Rule** card becomes a Requirement; a green **Example**
card becomes a Scenario.

### Vocabulary discipline — reuse sentence building blocks

Every distinct Given/When/Then phrasing forces a new step definition in
`bind-contract`. Drifting wording ("a rule at version X" vs. "an
installed rule whose version is X") splinters the step layer for no
behavioural reason. Therefore:

- Reuse the **same sentence stem** across scenarios; vary only the data.
- Put the varying value in quotes/numbers so one parametrised step
  (`{string}`, `{int}`) covers all cases — e.g. `version "1.3.0"`.
- Keep a small, consistent verb set (`is imported`, `is installed`,
  `is rejected`) rather than synonyms.

## Steps

1. **Read the input.** Read the Example Mapping file (or take the cards
   the user supplies). Identify the **blue rules** (→ Requirements) and
   the **green examples** (→ Scenarios). If only prose exists, stop and
   ask for the cards.

2. **Confirm the domain.** Name the domain the file represents (e.g.
   `import`). One domain per file; if the cards span two domains, ask
   the user whether to split.

3. **Phrase one Scenario per green card.** Each `input → expected
   output` becomes `Given (input/context) / When (action) / Then
   (expected output)`. Include boundary cards (equal version, downgrade,
   first install) — they are exactly the scenarios that expose `<` vs.
   `<=` style bugs.

4. **Fix the vocabulary.** Before writing, settle the canonical sentence
   stems and the parametrised slots. Use `AskUserQuestion` only if a
   phrasing choice changes meaning; otherwise pick the consistent stem.

5. **Keep requirements out of free text.** Use the `Feature:`
   description line only for *why this domain exists* (non-binding
   context). Every binding statement goes into a Scenario. Re-scan the
   draft for any rule hiding in description text.

6. **Write the `.feature` file.** Default to
   `features/<domain>.feature`, stack-neutral (no language, no step
   code). Confirm the path with the user.

7. **Report and point to the next step.** State the file path, how many
   Requirements/Scenarios it holds, and that every requirement is in
   Given/When/Then. Then: "Invoke `/bind-contract <path>` to bind these
   scenarios to Cucumber (strict) and watch drift turn the CI red."

## Concrete Example

Green cards from the `import` mapping (workshop project — import a rule,
SemVer comparison decides overwrite):

- install rule "no-emojis" v1.2.0 into empty repo → installed at 1.2.0
- import v1.3.0 over installed v1.2.0 → overwritten, now 1.3.0
- import v1.1.0 over installed v1.2.0 → rejected, stays 1.2.0
- import v1.2.0 over installed v1.2.0 → rejected (equal), stays 1.2.0

Resulting domain Gherkin:

```gherkin
Feature: Rule import
  The tool imports rules into a target repo and uses a SemVer
  comparison to decide, on a name conflict, whether to overwrite —
  so a repo never silently downgrades a rule.

  Scenario: First install of a rule
    Given a repo with no rule named "no-emojis"
    When the rule "no-emojis" at version "1.2.0" is imported
    Then the rule "no-emojis" is installed at version "1.2.0"

  Scenario: Newer version overwrites the existing rule
    Given an installed rule "no-emojis" at version "1.2.0"
    When the rule "no-emojis" at version "1.3.0" is imported
    Then the rule "no-emojis" is installed at version "1.3.0"

  Scenario: Older version is rejected
    Given an installed rule "no-emojis" at version "1.2.0"
    When the rule "no-emojis" at version "1.1.0" is imported
    Then the import is rejected
    And the rule "no-emojis" is installed at version "1.2.0"

  Scenario: Equal version is rejected
    Given an installed rule "no-emojis" at version "1.2.0"
    When the rule "no-emojis" at version "1.2.0" is imported
    Then the import is rejected
    And the rule "no-emojis" is installed at version "1.2.0"
```

Note the shared stems — `an installed rule {string} at version {string}`,
`the rule {string} at version {string} is imported`, `installed at
version {string}` — so `bind-contract` writes three or four steps, not
twelve. The equal-version and older-version scenarios are the boundary
cards that pin down the SemVer rule precisely.

## Anti-Patterns

- **Requirement in free text.** Stating the overwrite rule under
  `Feature:` instead of in a Scenario. → Wrong. It runs GREEN forever.
- **One file per feature.** Creating `overwrite.feature`,
  `reject.feature`, … → Wrong. One domain file, many Scenarios.
- **Inventing a scenario.** No green card for the equal-version case but
  writing it anyway. → Wrong. Ask, or send the user back to
  `/example-mapping`.
- **Vocabulary drift.** "a rule at v1.2.0" in one scenario, "an
  installed rule whose version is 1.2.0" in the next. → Wrong. Splinters
  the step layer. Reuse the stem.
- **Putting the value in the sentence, not in a slot.** `Then version
  1.3.0 wins` forces a new step per number. → Wrong. Use a `{string}`
  slot.
- **Phrasing the HOW.** "Then the JSON file on disk has `version`
  field 1.3.0". → Wrong. Stay in domain language (WAS); the storage
  mechanism is the plan/step layer's concern (WIE).

## Next Step

After writing the file, suggest exactly one of:

- **If clean (every requirement in G/W/T, vocabulary consistent):**
  "Invoke `/bind-contract <path>` to bind the scenarios to Cucumber in
  strict mode and experience Contract-green + Drift-red."
- **If green cards were missing for a behaviour:** "Resolve it in
  `/example-mapping` first, then amend this file."

The `.feature` file is stack-neutral and reusable: it is the spec a
domain expert signs off, and the exact artifact `bind-contract`
consumes.
