---
name: sdd
description: >
  Trigger the Spec-Driven Development workflow: Spec → Plan →
  Tasks → Implement. Guides the user through writing a feature
  spec, reviewing it, creating an implementation plan, an
  optional task breakdown, and step-by-step implementation.
when_to_use: >
  When the user wants to build a new feature using the SDD
  workflow, or says "let's write a spec", "spec-driven",
  "plan this feature", or "I want to implement something
  with a spec first".
argument-hint: "[feature description]"
allowed-tools: Read Glob Grep Write Edit AskUserQuestion Bash
---

# Spec-Driven Development Workflow

Guide the user through Spec-Driven Development. The workflow
scales to the change: a small change stays lightweight
(in chat), a big or unclear one gets the full Spec → Plan →
Tasks → Implement cycle. Tasks is a thin, *conditional* layer
between Plan and Implement — default = no breakdown. Each phase
is a separate conversation step with explicit user approval
before moving on.

## Before Starting

1. Read `docs/how-to-write-specs.md` for the spec format
2. Read `docs/how-to-write-plans.md` for the plan format
3. Read `rules/development-workflow.md` for track selection
4. If these files don't exist, tell the user to copy them first

On the Spec track the executable chain is driven by sibling skills,
each with its own `SKILL.md`: `/example-mapping` (or `/digitize-mapping`
for existing cards) → `/gherkin-spec` → `/bind-contract`. This skill
orchestrates; those skills own the detail.

## Step 0: Choose the Track (always do this first)

Two questions decide everything. Ask them before any work.

**Question 1 — Is the business requirement (WHAT/WHY) clear
and uncontested?**
- NO  → **Spec-Track** (File-Pfad): go to Phase 1.
- YES → ask Question 2.

**Question 2 — Is the HOW trivial / obvious?**
- NO  → **Plan-Track** (fileless): skip Phase 1, go to Phase 2,
        but keep the plan *in chat* unless it must persist.
- YES → **Direkt-Track** (fileless): skip to Phase 4, implement
        directly.

Use **AskUserQuestion** to confirm the track when unsure. State
which track you picked and why before proceeding.

| Track | Spec? | Plan? | Tasks? | Where it lives |
|-------|-------|-------|--------|----------------|
| Direkt | no | no | never | chat (fileless) |
| Plan | no | yes | if needed | chat, promote to file if it must persist |
| Spec | yes | yes | normal case | files in `specs/` |

**Litmus test** for "do I need a spec": delete a sentence — if it
changes what a *domain expert* agrees to, that's a spec (WHAT). If it
only changes what a *developer* builds, that's a plan (HOW). Bugfixes,
refactorings, config changes almost never need a spec.

## Fileless tracks (Direkt & Plan): keep it light

On the Direkt- and Plan-Track, do **not** create spec/plan files.

- **Direkt-Track:** restate the agreed intent in one line, implement,
  test, confirm. Done.
- **Plan-Track:** write the plan **as a short chat message** following
  `docs/how-to-write-plans.md` (steps + testing approach). Get approval
  in chat, then implement step by step (Phase 4); add a `## Tasks`
  breakdown only if the plan won't fit one context. **Promote** it to
  `specs/<feature>-implementation-plan.md` only if it must persist or be
  handed over.

If, mid-work, a real business question appears, stop and escalate to the
Spec-Track (Phase 1).

## Phase 1: Write the Spec  (Spec-Track only)

### Step 1: Understand the Feature
- Ask the user to describe the feature they want to build
- Ask clarifying questions — do NOT assume:
  - "What problem does this solve?"
  - "Who is the user of this feature?"
  - "What are the inputs and expected outputs?"
  - "Are there security or performance requirements?"
  - "What should explicitly NOT be included?"
- Use **AskUserQuestion** for structured questions

**Recommended: start with Example Mapping.** If the feature has real
business rules or behaviour worth surfacing, begin with `/example-mapping`
instead of ad-hoc questions — it discovers rules (blue), concrete
examples (green), and open questions (red) collaboratively, by asking
the user rather than assuming. This is the recommended default on the
Spec track; skip it only when the WHAT is conceptually simple. If the
cards already exist (photo / typed list), use `/digitize-mapping` to
transcribe them instead. Either writes a standalone
`<feature>-example-mapping.md`. Carry its cards forward:
- **Story / Rules** → into the spec draft (Step 3).
- **Open questions (red)** → into the Spec Review (Phase 1.5).
- **Examples (green)** → into the executable `.feature` via
  `/gherkin-spec` then `/bind-contract` (Phase 2.5), *not* the spec and
  *not* as prose in the plan.

### Step 2: Explore the Codebase
- Use Glob and Grep to find related existing code
- Read relevant files to understand current patterns
- Identify where the feature integrates

### Step 3: Draft the Spec
Write the spec following `docs/how-to-write-specs.md`. Stay in
**domain language** — WHAT and WHY only, no architecture:
- **Overview** (2-4 sentences: what and why)
- **Business Constraints & Guardrails** (domain rules, not tech —
  frameworks/data structures/algorithms belong in the plan)
- **Usage** (1-2 concrete examples, behaviour the user sees)
- Keep it to 1-2 pages maximum
- Run the litmus test on each sentence: business stays, technical
  moves to the plan

### Step 4: Save the Spec
- Save to `specs/<feature-name>.md`
- Present a summary to the user
- **STOP — ask for user approval before continuing**

## Phase 1.5: Spec Review 

### Critical Review
Review the spec as if you were a critical colleague:
- What is unclear or ambiguous?
- What is missing?
- What is not testable?
- Are the constraints sufficient?
- Are the examples concrete enough?

**If an example-mapping file exists**, its unresolved **red cards**
(open questions) are the worklist for this review — resolve each one
with the user before the spec is confirmed, rather than inventing
critique points from scratch.

Present findings to the user using **AskUserQuestion**
for each issue that needs a decision.

Update the spec based on the review.

**STOP — ask the user to confirm the spec is ready
before moving to the plan.**

## Phase 2: Write the Plan 

### Step 1: Read the Spec and Codebase
- Re-read the approved spec
- Read relevant source files referenced by the spec
- Understand existing patterns and architecture

### Step 2: Draft the Plan
Write the plan following `docs/how-to-write-plans.md`:
- **Implementation Steps** (ordered, with dependencies)
- **Testing approach for each step** — discuss interactively
  with the user, do not decide alone:
  - Real dependencies vs mocks?
  - Integration vs unit tests?
  - What to stub?
  - **If an example-mapping file exists**, its **green cards** become
    the executable `.feature` (Phase 2.5), not prose here. The plan's
    testing strategy covers the **inner TDD loop** — how each step is
    unit/integration tested on the way to making the `.feature` green.
    Do not re-list the acceptance scenarios here (that duplicates the
    `.feature` and reopens drift).
- **Key Decision Points**
- **Risks and Unknowns**

### Step 3: Cross-Reference Against Spec
Before presenting the plan, verify:
- [ ] All operations from spec are covered
- [ ] File formats and paths match spec
- [ ] Error cases have corresponding handling
- [ ] Constants match between spec and plan

### Step 4: Save the Plan
- Save to `specs/<feature-name>-implementation-plan.md`
- Present a summary to the user
- **STOP — ask for user approval before implementing**

## Phase 2.5: Acceptance Contract (Spec-Track, when a mapping exists)

This is the **outer (ATDD) loop**. When an example-mapping file exists,
turn its green cards into an enforced acceptance contract *before*
implementing — so "done" is defined by executable scenarios, not by
opinion.

1. **Generate the `.feature`** — invoke `/gherkin-spec <mapping-path>`.
   Green cards (input → expected output) become `Scenario:` blocks in
   Given/When/Then; blue rules become the `Feature:`/Requirement. One
   domain per file (`features/<domain>.feature`), stack-neutral.
2. **Bind it** — invoke `/bind-contract <feature-path>`. This writes the
   step definitions, wires Cucumber with `strict: true`, and binds the
   scenarios to the real system under test. **Bind, never generate a
   second test file** — the `.feature` *is* the test.
3. **Confirm RED** — before the code exists, the bound scenarios are
   RED/UNDEFINED. That red is the acceptance target the implementation
   drives toward.

The `.feature` scenarios are now the **outer loop**: the feature is done
when they go GREEN. Each plan step (Phase 4) is the **inner TDD loop**
on the way there.

**STOP — confirm the acceptance contract with the user before
implementing.**

## Phase 3: Tasks (conditional — usually skip on Plan-Track)

Tasks is **not** a fourth mandatory artifact. It is a thin layer
at the Plan→Implement handoff. Default = **no breakdown**.

### Trigger (one line, like the WHAT/WHY litmus test)
**Does the whole plan fit into one implementation context?
Yes → no breakdown, go straight to Phase 4. No → cut it into
context-sized tasks.** "No" means the plan does not fit
comfortably into a single implementer context — roughly >3–5
steps, multiple files, sessions, or agents.

Per track: **Direkt = never · Plan = if needed · Spec = normal
case.**

### Where tasks live
**In the plan**, under a `## Tasks` section — no separate
`tasks.md`. **Promote** to `specs/<feature>-tasks.md` only if it
must persist or be handed over (same logic as the plan).

### Format (one rule)
A flat, grouped checklist **derived from the plan steps**:

```markdown
## Tasks

## 1. <group name>
- [ ] 1.1 <action with file path> [P]
- [ ] 1.2 <action with file path>

## 2. <group name>
- [ ] 2.1 <action with file path> [P]
```

`[P]` marks a task that can run in parallel with its siblings.

- **Granularity rule:** one task = fits in **one agent context
  without extra research**, names a file path. Too big → split.
  (This replaces any epic/story layer.)
- **Test binding (not optional):** each group references the
  testing strategy agreed in the plan (with Example Mapping:
  the green cards).
- **Coverage self-check (inline, 30 s, no command):** "Does
  every plan step map to ≥1 task?"

### Deliberately omitted (to stay lean)
User-story / epic level; a dedicated analyze/verify command; a
`tasks.md` by default; sprint planning / status models /
personas; FR→epic coverage maps; constitution gates.

**STOP — ask for user approval of the breakdown before
implementing.**

## Phase 4: Implement (Step by Step)

**If a `.feature` acceptance contract exists (Phase 2.5)**, it is the
**outer loop**: drive the implementation toward turning its scenarios
GREEN. Each plan step below is the **inner TDD loop**.

### For Each Step in the Plan:

1. **Announce** which step you're implementing
2. **Implement** the step — minimal code, follow existing
   patterns, respect spec constraints
3. **Test** — the inner TDD loop for this step (unit/integration per the
   plan's testing strategy)
4. **STOP — ask the user to confirm** before moving to the
   next step

If a `## Tasks` breakdown exists, work it phase by phase:
respect `[P]`, do one step → get approval → tick `[x]`.

### During Implementation
- Use the plan as a guide, not a rigid checklist
- If you discover something that contradicts the plan or
  spec, **stop and discuss** with the user
- Update the plan if new insights emerge
- Reference spec sections by header name for traceability

### After Implementation
- Verify all spec requirements are met
- **If a `.feature` contract exists: run Cucumber (strict) and confirm
  every acceptance scenario is GREEN** — that is the definition of done
  on the Spec track
- Run all tests
- Ask the user if the feature is complete

## Important Rules

- **Pick the track first** (Step 0) — don't default to the full
  workflow for every change
- **A spec is only for business clarification** (WHAT/WHY); never
  put architecture in it
- **Every phase requires user approval** before moving on
- **Never assume** — ask when something is unclear
- **Keep specs short** — 1-2 pages max, domain language
- **Plans evolve** — update them as you learn; the plan never
  re-negotiates the WHAT
- **Green cards become the `.feature`, not prose** — on the Spec
  track the example-mapping green cards drive `/gherkin-spec` →
  `/bind-contract` (executable acceptance contract, outer ATDD loop);
  never re-list them as plan test cases (that reopens drift). The spec
  stays: it carries WHAT/WHY, the `.feature` carries behaviour
- **Tasks are conditional** — break the plan down only when it
  won't fit one implementation context; tasks live in the plan
  (`## Tasks`), never an epic/story layer
- **Stay fileless when you can** — only the Spec-Track always uses
  files; promote a fileless plan only when it must persist
- **Step-by-step implementation** — one step at a time,
  wait for confirmation
- **Language**: Follow the user's language (German/English)

## Track Selection (summary)

| Change | Business req. clear? | HOW trivial? | Track | Tasks? |
|--------|:---:|:---:|-------|:---:|
| New feature / new entity, unclear WHAT | no | — | **Spec** | normal case |
| Migration with open business questions | no | — | **Spec** | normal case |
| Refactoring across multiple files | yes | no | **Plan** (fileless) | if needed |
| Larger bugfix (unclear cause, multi-file) | yes | no | **Plan** (fileless) | if needed |
| Small bugfix (known cause, 1-2 files) | yes | yes | **Direkt** | never |
| Config change, typo, dependency update | yes | yes | **Direkt** | never |

The WHAT being clear is what removes the spec. The HOW being trivial is
what removes the plan. Tasks are added only when the plan won't fit one
implementation context. See `rules/development-workflow.md`.