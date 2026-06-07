---
name: bind-contract
description: >
  Bind an existing .feature file to executable step
  definitions via Cucumber and turn on strict mode, so the
  prose spec becomes an enforced contract that goes red on
  drift. Binds — it does not generate a second test file.
when_to_use: >
  When a Gherkin .feature spec exists (e.g. from
  /gherkin-spec) and the user wants to make it enforced
  rather than just readable: "bind this to a test", "make
  the spec executable", "wire up Cucumber", "enable strict
  mode", "show the drift demo".
argument-hint: "[path to .feature file]"
allowed-tools: Read Glob Grep Write Edit Bash AskUserQuestion
---

# /bind-contract

Take a prose `.feature` file and **bind** it to executable
step definitions, then set Cucumber's `strict` mode — so the
spec stops being *maintained* and becomes *enforced*. A
contradiction between scenario and code now turns CI red.

This is the last step of the chain: Example Mapping →
`/gherkin-spec` → **`/bind-contract`**. See
`spec-driven-development-erkenntnisse.md` Kap. 12–15 and the
runnable reference `examples-for-bdd/bdd/`.

## When to Invoke

Invoke when:

- A `.feature` file already exists (Gherkin scenarios, read
  by a domain expert) and should become an enforced contract
- The user wants deterministic drift detection (red/green in
  CI) instead of an LLM "probably not covered" verdict

## Refusal Cases

Do **not** run when:

- No `.feature` file exists yet — there is nothing to bind.
  Send the user to `/gherkin-spec` (or Example Mapping)
  first; refuse to invent scenarios here
- The scenarios are still being explored / churning — a
  contract is only worth writing once the boundary is
  stable (Kap. 9, "erst explorieren, dann einfrieren").
  Binding a moving target just churns
- The user wants you to **generate** a separate test file
  from the scenario — that is the drift trap (see below).
  Bind instead

## Core Discipline — Bind, Do Not Generate

> **Only binding closes the loop. Generating reopens it.**

| | (a) **bind** — scenario *is* the test | (b) generate a test from the scenario |
|---|---|---|
| Mechanic | `.feature` runs directly; each G/W/T line is matched to a step definition at run time | scenario emits a separate test file |
| Artifacts | **one** (scenario = test) | **two** (scenario + test) |
| Drift possible? | **no** — nothing to diverge from | **yes** — between scenario and test |

With (b) the scenario and the generated test drift apart
after the one-time generation — exactly spec-kit's sin, one
layer down. **Never generate a second test file.** The
`.feature` file is the single source; the step definitions
read values out of it at run time.

## The Two Layers (readability is preserved)

```
features/*.feature   ← LAYER 1: PROSE. The domain expert reads this. = the spec
        │  (the BDD runner joins both at run time)
steps/*.js           ← LAYER 2: CODE. The developer writes it ONCE, reusable
```

- The `.feature` file looks **identical** whether it is
  "dead" prose or executable. Executability is added from
  *below* (step definitions), never by editing the spec. You
  do not trade the readable spec for test code — you add a
  translation layer underneath it.
- A step definition matches a **sentence shape**, not a
  single sentence. Use placeholders like `{int}` / `{string}`
  so one step serves every scenario using that shape. The
  concrete number (15, 10, 20) lives **only** in the
  `.feature` file — never duplicated in the step file, so
  there is no frozen copy to drift.
- **New test = usually just prose.** With a known vocabulary
  a new scenario needs no code. Only new vocabulary adds one
  step definition, once. The code layer grows sublinearly.

## strict Mode is Constitutive

> `strict: true` belongs in the **Cucumber config**
> (`cucumber.json` / profile), **never** in a step file.

- **Effect:** an **undefined step** (a scenario with no step
  definition) fails the run (exit code ≠ 0) instead of being
  silently counted as a pass. That is what turns "spec
  coverage > test coverage" from a silent gap into a loud
  red.
- **Not optional.** Without strict, a spec line that enforces
  nothing slips through green and drift returns. Set it
  explicitly — do not even rely on the framework default.
- **Do not confuse** `strict: true` with
  `assert.strictEqual`. The latter is a Node assertion
  (`===` vs `==`) inside *one* step, affecting *one* check.
  `strict: true` is a Cucumber run mode affecting the
  *whole* run. Different scope, different file.

## When it goes red — the exact rule

> **RED ⟺ (what the scenario asserts) ≠ (what the code does).**
> Not "on every change" — only on a **contradiction** between
> spec and code.

Use this to drive the **drift demo**: change a number or a
boundary in the `.feature` file and re-run.

- Flip the claim (`15 min → still valid` when code expires
  it), push a value across the boundary
  (`10 min → still valid` → `20 min → still valid`), or land
  exactly on it (`15 min → still valid`, exposes `<` vs `<=`)
  → **RED**. That red *is* the drift detection.
- Editing only prose (`Scenario:` title, `Feature:`
  description, a comment) or moving a value to the same side
  of the boundary (`15 min → invalid` → `30 min → invalid`)
  → stays **GREEN**.
- A new requirement with no step definition → **UNDEFINED**,
  which is RED **only under strict** — the reason strict is
  constitutive.

## Steps

1. **Locate the `.feature` file.** Read it. Confirm it is
   stable and that every requirement lives in
   Given/When/Then — not in free-text description (free text
   is never enforced; Kap. 13). If a requirement hides in the
   description, flag it and move it into a scenario before
   binding.

2. **Pick the stack and its conventions.** Match the user's
   language. Use `AskUserQuestion` if unclear.

   | Stack | Runner | Step files (convention) | Strict / config |
   |---|---|---|---|
   | JS/TS | cucumber-js (`@cucumber/cucumber`) | `steps/*.steps.js` | `cucumber.json` → `"strict": true` |
   | Python | pytest-bdd | `tests/step_defs/*.py` (`@given/@when/@then`) | `--strict-markers` / `addopts` |
   | .NET | SpecFlow / Reqnroll | `*.Steps.cs` (`[Given]/[When]/[Then]`) | `<Reqnroll>` strict in config |
   | Java | Cucumber-JVM | `*Steps.java` (glue) | `@CucumberOptions(strict = true)` |

   `.feature` is **mandatory** — Cucumber finds feature
   files only by that extension, across languages. The step
   file name is **pure convention**; the runner loads
   whatever `require`/`import`/glue path you point it at.

3. **Catalogue the sentence shapes.** List the distinct
   Given/When/Then sentence shapes across all scenarios.
   Each distinct shape → one step definition. Identify the
   parameters (numbers → `{int}`, quoted text → `{string}`)
   so a single step covers every scenario using that shape.

4. **Write the step definitions, once.** One per sentence
   shape, reused across scenarios. Each step calls the
   **real** system under test (the actual code), not a toy
   stand-in — the toy in `examples-for-bdd/bdd/` exists only
   so the example runs alone. Put the assertion in the
   `Then` step. Keep the captured value flowing from the
   `.feature` file; never hard-code a duplicate constant.

5. **Set strict in the config, not the step file.** Create
   or edit `cucumber.json` (or the stack's equivalent) with
   `strict: true`, plus `paths` (features) and `require`
   (steps). Mirror `examples-for-bdd/bdd/cucumber.json`.

6. **Run green.** Execute the runner against the config and
   confirm every bound scenario passes. Resolve any
   `UNDEFINED` step (under strict, these are red): either add
   the missing step + the code behind it, or remove the
   scenario. The red forces the choice.

7. **Demonstrate drift (optional but recommended).** Change
   one number/boundary in the `.feature` file per the rule
   above, re-run, show it go **RED**, then revert. This is
   the payoff: deterministic drift detection none of
   spec-kit / OpenSpec / BMAD provide.

If the user gets stuck bootstrapping Cucumber, point them at
`examples-for-bdd/bdd/` (`features/session.feature`,
`steps/session.steps.js`, `cucumber.json` with `strict: true`)
as a runnable fallback to copy from.

## Honest Limits (do not oversell)

1. **Green = conformance, not correctness.** A green test
   proves *code matches the scenario*, not that the scenario
   is *right*. Correctness is secured earlier, by Example
   Mapping (the right rules + examples from the domain
   expert). Two different jobs.
2. **Only scenario-ized behavior is protected.** The
   guarantee is exactly as large as scenario coverage.
   Direction Spec → Code is enforceable (strict); direction
   Code → Spec is not deterministically enforceable — new
   code with no scenario stays green even if broken. Coverage
   tools (`nyc`/`c8`, coverage.py, Coverlet, JaCoCo) mitigate
   *measurably* but not deterministically.
3. **Free text is never enforced.** A requirement put in the
   `Feature:`/`Scenario:` description instead of a scenario
   is silently green. Requirement → Given/When/Then, always.
4. **Not everything is gherkin-able.** Performance, security
   posture, architecture constraints need other contract
   forms (OpenAPI, schemas, IaC, ADRs). The Gherkin contract
   is the *behavioral* truth, not the whole truth.

## Anti-Patterns

- **Generating a separate test file** from the scenario. →
  Wrong: reopens the drift you came to close. Bind instead.
- **Putting `strict` in a step file** (or confusing it with
  `assert.strictEqual`). → Wrong: strict is a run mode, it
  lives in the config.
- **Relying on the framework default for strict.** → Wrong:
  set it explicitly, every project.
- **Duplicating the constant** (the `15`) in the step file. →
  Wrong: now there are two sources to drift. Capture it from
  the `.feature` line with `{int}`.
- **A requirement in the description text** instead of a
  scenario. → Wrong: it is never run, never enforced.
- **Binding scenarios that are still churning.** → Wrong:
  stabilize the boundary first, then freeze it as a contract.
- **One step definition per sentence instead of per shape.**
  → Wrong: the code layer explodes; parameterize with
  `{int}`/`{string}` and reuse.
