# How to Write Feature Specifications

## Purpose

A spec exists for **one reason only**: to clarify a *business*
requirement -- the **WHAT and WHY** in domain language. A non-developer
domain expert should be able to read it and confirm "yes, that is what
we want."

A spec is **not** technical documentation. The HOW lives in the plan.

Specs serve as **interface documents for human engineers to guide AI
agents**. They provide:

- Clear feature descriptions in domain terms
- Business constraints and guardrails (not architecture)
- Success criteria a domain expert would recognize

Keep specs **short and concise** -- focus on what matters for the
desired outcome.

## The Litmus Test: does it belong in the spec?

Delete a sentence. Does it change **what a domain expert would agree
to**? -> it belongs in the spec. Does it only change **what a developer
builds** (files, classes, libraries, algorithms)? -> it is a plan
sentence in the wrong place. Move it to the plan.

## When you do NOT need a spec

Skip the spec entirely when the business requirement is already clear
and uncontested:

- **Bugfixes** -- the requirement already exists ("should do X, wrongly
  does Y"). Nothing business-level to clarify; you only fix the HOW.
- **Refactorings** -- behaviour is unchanged by definition.
- **Config, dependency bumps, renames, formatting.**
- Any change where the WHAT is obvious and only the WHEN/HOW is open.

In those cases go straight to a plan (or implement directly). See
`rules/development-workflow.md`.

## Spec Structure

### Required Sections

1. **Overview** (2-4 sentences)
   - What the feature does and why it exists, in domain language
   - Primary use case / who needs it

2. **Business Constraints & Guardrails**
   - Domain rules that must hold (e.g. "a tip can never exceed the
     bill", "users in region X must not see feature Y")
   - Regulatory, safety, or UX requirements
   - **Not** architecture, frameworks, or data structures -- those go
     in the plan

3. **Usage** (brief examples)
   - How a user interacts with the feature
   - 1-2 concrete examples showing typical input/output **behaviour**
     (what the user sees, not how it is computed)

### Optional Sections (only if business-critical)

- **Out of Scope** -- what this explicitly does NOT include
- **Integration Points** -- where this connects, at the level a domain
  expert cares about (e.g. "appears in the checkout flow")

## Writing Guidelines

**DO:**
- Keep it brief -- aim for 1-2 pages maximum
- Stay in domain language; pretend the reader cannot code
- Provide success criteria a domain expert would recognise
- Make business guardrails explicit

**DON'T:**
- Include code, function signatures, file paths, or class names
- Name frameworks, libraries, or data structures (-> plan)
- Decide architecture or algorithms (-> plan)
- Write implementation steps (-> plan)
- Duplicate what is obvious from the overview

## Creating a New Spec

1. Create a `.md` file in `specs/` using the structure above.
2. Keep it concise -- longer than 2 pages means it is too detailed.
3. Run the litmus test on each sentence: business -> stays,
   technical -> moves to the plan.
