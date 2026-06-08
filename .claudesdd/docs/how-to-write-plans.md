# How to Write Implementation Plans

A plan is the **HOW and WHEN** -- purely technical. It answers how the
work gets built, in what order, and how it is tested. It never
re-negotiates the **WHAT** (that is the spec's job, or the agreed intent
in chat). If a business question surfaces while planning, stop and go
back to the spec / intent.

A plan can be **fileless** (lives in chat, for the Plan-Track) or a file
(`specs/<feature>-implementation-plan.md`). Promote a fileless plan to a
file as soon as it must persist or be handed over.

Unlike specs which are stable, implementation plans evolve during implementation.

## When to Create an Implementation Plan

Create an implementation plan for:
- Features with multiple interconnected components
- Changes that affect existing code in multiple places
- Features where the implementation approach isn't immediately obvious
- Complex features that benefit from breaking into phases

Skip the implementation plan for:
- Simple, single-file changes
- Obvious implementations with <3 steps
- Bug fixes with known solutions

## What to Include in an Implementation Plan

1. **Implementation Steps** (ordered list)
   - Specific files to create or modify
   - Dependencies between steps
   - What to implement in each step
   - Testing approach for each step (see Testing Strategy below)

2. **Key Decision Points**
   - Where alternative approaches were considered
   - Why specific choices were made during planning

3. **Risks and Unknowns**
   - Areas where the approach might need adjustment
   - Dependencies on external factors

## Testing Strategy

Each implementation step should define how it will be tested. **This must be determined interactively with the user** - go through each step one by one and ask about the testing approach.

**Acceptance tests come from the `.feature`, not from the plan.** On
the Spec track the green cards of the example mapping become an
executable `.feature` via `/gherkin-spec` and an enforced contract via
`/bind-contract` (Cucumber + strict). Those scenarios are the **outer
(ATDD) loop** — the acceptance criteria that define "done". Do **not**
re-list them as prose test cases here; that would duplicate the
`.feature` and reopen drift. The plan's testing strategy covers the
**inner (TDD) loop** instead: how each implementation step is unit/
integration tested on the way to making the `.feature` go green.

If no example mapping / `.feature` exists (Plan track, or a feature
without business rules worth mapping), define the test cases for each
step here directly.

Common testing decisions to discuss:
- Real dependencies vs mocks (e.g., real crypto vs stubbed)
- Integration vs unit tests
- What to stub (external CLIs, user input, file system)
- Shared test fixtures and helpers

Document the agreed approach in each step's **Testing:** section.

## Writing Guidelines

- Break work into logical, testable steps
- Identify dependencies between steps
- Note potential issues before starting
- Update the plan as you learn during implementation
- Focus on approach, not a granular task checklist
- Reference spec sections by header name for traceability (e.g., "see spec: Encryption")

**Small code snippets are useful** for clarity:
- Constants and their values
- Data structure definitions (structs, classes)
- Error class hierarchies
- Function signatures

## Cross-Reference Against Spec

Before finalizing the plan, review it against the feature spec to catch inconsistencies:

**Checklist:**
- [ ] All commands/operations from spec are covered in implementation steps
- [ ] All CLI flags mentioned in spec are included
- [ ] File formats and paths match spec exactly
- [ ] All modules referenced in spec exist in the plan
- [ ] Error cases from spec have corresponding handling
- [ ] Constants and magic values match between spec and plan

This review often reveals ambiguities or missing details in both documents.

## Optional: Tasks section (only for large plans)

If the plan does not fit comfortably into a single implementation
context (roughly >3-5 steps, multiple files, sessions, or agents),
break it down into a `## Tasks` section **inside the plan** — a flat,
grouped checklist derived from the plan steps:

```markdown
## Tasks

## 1. <group name>
- [ ] 1.1 <action with file path> [P]
- [ ] 1.2 <action with file path>
```

`[P]` marks tasks that can run in parallel. One task = fits in one
agent context without extra research, and names a file path. This is
the conditional Tasks phase of the `sdd` skill — skip it when the
whole plan already fits in one context, and never create a separate
`tasks.md` unless it must persist (same promotion logic as the plan).

Store plans in `specs/` with suffix `-implementation-plan.md`.