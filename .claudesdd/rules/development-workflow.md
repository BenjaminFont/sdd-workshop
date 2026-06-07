# VERY IMPORTANT: Development Workflow

## The core idea: WHAT vs. HOW

There are only two kinds of question behind any change:

- **WHAT / WHY** -- the *business* requirement, in domain language.
  A domain expert (not a developer) could confirm it.
  -> This belongs in a **spec**.
- **HOW / WHEN** -- the *technical* implementation. Files, steps,
  architecture, tests.
  -> This belongs in a **plan**.

A spec exists **only** to clarify an open business question. If the
business requirement is already clear and uncontested, you do not need a
spec -- not even for larger changes.

## The decision: two questions, three tracks

```
Question 1: Is the business requirement (WHAT/WHY) clear & uncontested?
   │
   ├─ NO ──► SPEC track:  Spec → Plan → Implement   (file path)
   │
   └─ YES ──► Question 2: Is the HOW trivial / obvious?
              │
              ├─ NO ──► PLAN track:  Plan → Implement   (fileless)
              │
              └─ YES ──► DIRECT track:  implement immediately  (fileless)
```

## Two paths: fileless vs. file

Orthogonal to the tracks is the question of **where** the agreement
lives:

- **Fileless** (default for small changes): the agreement lives in
  chat. No file. Fast. Applies to the DIRECT and PLAN tracks.
- **File**: the agreement is captured as a file
  (`specs/<feature>.md`, `specs/<feature>-implementation-plan.md`).
  Needed when others must review/understand it, or it must persist.
  Always on the SPEC track.

**Promotion:** a fileless PLAN track may become a
`*-implementation-plan.md` at any time if it has to persist -- e.g.
because it grew larger than expected or is handed over.

## Litmus test: spec or plan?

Delete a sentence. Does it change **what a domain expert agrees to**?
-> spec. Does it only change **what a developer builds**? -> plan.

## Rule of thumb

- New business requirement, unclear or contested -> **Spec track**.
- Requirement clear, but implementation not obvious or >3 files
  -> **Plan track**.
- Known cause, small change, 1-2 files -> **Direct track**.

Bugfixes usually need **no** spec: the business requirement already
exists ("should do X, wrongly does Y"). There is nothing new to
clarify -- you only fix the HOW.

## Discovering the WHAT: Example Mapping (Spec track, optional)

On the **Spec track** the open question is the WHAT -- and that is
exactly when collaborative discovery pays off. The Spec track *may*
begin with `/example-mapping`: an interactive session that surfaces
the **rules** (blue cards), **concrete examples** (green cards), and
**open questions** (red cards) for the feature by asking the user,
never by assuming.

Fully optional -- the user decides. Offer it when the feature has real
business rules or behaviour worth surfacing; skip it when the WHAT is
conceptually simple even though it is new. It never applies to the
Direct or Plan track (there the WHAT is already clear).

The mapping is a **standalone file** (`<feature>-example-mapping.md`),
not part of the spec. It feeds the workflow without bloating the spec:

- **Story** (yellow) -> seeds the spec's Overview.
- **Rules** (blue) -> seed the spec's Business Constraints & Guardrails.
- **Open questions** (red) -> become the worklist for the Spec Review.
- **Examples** (green) -> seed the **Testing Strategy in the plan**
  (input -> expected output), *not* the spec. The spec stays lean and
  in domain language; the green cards live in the mapping file and flow
  into the plan.

## During implementation

- Use the plan as a guide, not a rigid checklist.
- Update the plan as new insights emerge.
- The plan never re-negotiates the WHAT. If a business question
  surfaces, go back to the spec (or the intent in chat).
- After completion: the plan can be deleted or kept as a reference.
