# Executable Specification — Two Layers, One Source of Truth

This example shows the difference between a **prose** Given/When/Then
file (readable but dead) and an **executable** one (readable *and*
enforced). The surprise: the readable file is **identical** in both
cases. Executability is added *underneath*, not on top.

## The two files

| File | Layer | Who reads it | What it is |
|------|-------|--------------|------------|
| [`features/session.feature`](features/session.feature) | **Specification** | humans / domain experts | pure prose — the scenarios |
| [`steps/session.steps.js`](steps/session.steps.js) | **Translation** | developers (write once) | code mapping each sentence shape to the system |

A BDD runner (Cucumber, pytest-bdd, SpecFlow, Behave…) reads the
`.feature` file, and for each `Given/When/Then` line finds the matching
step definition and executes it. The scenario *is* the test — there is
no generated second test file that could drift.

## Why no drift is possible

Drift needs **two sources of truth that disagree unnoticed**. Here the
number (`15`, `10`) lives **only** in the `.feature` file. The step
`When {int} minutes pass without activity` reads it at run time. There
is no frozen copy in the test to fall out of sync.

- Change the prose to `12 minutes` → the assertion runs against 12.
- If the system's real timeout no longer matches the scenario → the
  step throws → **CI goes red** → you must reconcile spec and code.

That red is the deterministic drift detection none of spec-kit /
OpenSpec / BMAD provide. The spec stops being *maintained* (OpenSpec's
best case) and becomes *enforced*.

## Readability is NOT sacrificed

Open `session.feature`: it is plain prose, no code, no test syntax. It
is exactly what a "dead" requirements file would contain. The code
lives in `session.steps.js`, which a domain expert never opens.

## The honest trade-offs

1. **The steps layer is code you maintain** — it can break and needs
   upkeep. This is the real cost vs. a dead prose file.
2. **Green proves conformance, not correctness** — the test proves
   *code matches the scenario*, not that the scenario is *right*. That
   is what Example Mapping is for: getting the right rules/examples from
   the domain expert before they become the oracle.
3. **Only scenario-ized behavior is protected** — behavior with no
   scenario has no step, runs nothing, can drift.
4. **Vocabulary discipline** — if everyone phrases steps differently
   ("15 minutes" / "a quarter hour" / "900 seconds"), the steps layer
   explodes. Example Mapping already nudges toward a shared vocabulary.

## How this connects to the SDD setup

```
Example Mapping (.claudesdd, optional Spec-track entry)
   green cards: input → expected output
        ↓  become
Given/When/Then scenarios  (features/*.feature)   ← the living, readable spec
        ↓  bound (not generated) via
Step definitions (steps/*.js)                     ← write once, reuse
        ↓  run in CI
red / green                                       ← enforced source of truth
```

In the current `.claudesdd` flow, green cards seed the **plan's testing
strategy** and binding to executable tests is a **separate, later
step** (the `/test-list` TDD path). This example is what that last step
looks like when you take it.

## Two kinds of drift — and the flag that closes the second

| Drift | What it means | Signal |
|-------|---------------|--------|
| **Scenario vs. code** | the spec asserts something the code does not do | RED (failed assertion) — always |
| **Scenario vs. test existence** | a scenario has *no step definition* at all (spec coverage > test coverage) | UNDEFINED — **only RED under `strict`**; silently GREEN otherwise |

The 4th scenario in `session.feature` (`Locked account cannot log in`)
demonstrates the second kind: its sentences match no step definition.
With [`cucumber.json`](cucumber.json) setting `strict: true`, that
scenario fails the build. Without strict, it would be *reported* but
counted as a pass — and a spec line that enforces nothing is exactly
the drift we are trying to kill. **Strict is constitutive here, not
optional.** Do not even rely on the framework default — set it
explicitly.

## Running it (optional)

```bash
npm install --save-dev @cucumber/cucumber
# uses cucumber.json (strict: true, paths, require)
npx cucumber-js --config examples/bdd/cucumber.json
```

With the 4th scenario present, this run is RED (undefined steps under
strict). To make it green you must either add the missing step
definitions plus the code behind them, or delete the scenario — the red
forces that choice instead of letting the requirement slip through
untested.

Try it: in **scenario 2**, change `10 minutes` to `20 minutes` and
re-run. That scenario fails — at 20 minutes the system has already
expired the session (timeout is 15), so it is *not* "still valid".
That failure *is* the drift detection.

Note what does NOT go red: changing scenario 1 from `15 minutes` to
`30 minutes` stays green — at 30 minutes the session is still expired,
so "is invalid" still holds. A test goes red only when your edit makes
the scenario assert something the code does not do — i.e. when spec and
code actually contradict each other. Editing non-step prose (the
`Feature:` description, a `Scenario:` title, a comment) changes nothing
either.
