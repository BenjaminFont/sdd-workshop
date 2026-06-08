---
name: digitize-mapping
description: >
  Transcribe an ALREADY-FINISHED Example Mapping — a photo of
  the cards on a wall/whiteboard, or a roughly typed text/markdown
  file — into the canonical `<feature>-example-mapping.md` format
  that /gherkin-spec consumes. Transcribes, it does not facilitate:
  it copies what is on the cards, it never invents or "improves"
  rules and examples.
when_to_use: >
  When the user already DID the Example Mapping (cards exist on a
  wall, on stickies, or typed up loosely) and just wants it
  digitised into the right shape — "digitise these cards", "turn
  this photo into a mapping file", "I typed the cards up, put them
  in the right format". NOT for running a mapping session from
  scratch — that is /example-mapping.
argument-hint: "[path to image or text/markdown file]"
allowed-tools: Read Glob Grep Write Edit AskUserQuestion
---

# /digitize-mapping

Take an **already-finished** Example Mapping and transcribe it into
the canonical `<feature>-example-mapping.md` file — the exact format
`/gherkin-spec` reads. The input is whatever the participants produced:
a **photo** of the cards on a wall, or a **text/markdown file** they
typed up loosely. Your job is **transcription**, not facilitation.

This is the on-ramp for the "cards already exist" case. The chain:

```
cards on a wall / typed loosely
   ↓ transcribe (this skill)
<feature>-example-mapping.md   ← canonical format
   ↓ green cards
/gherkin-spec   →  .feature
   ↓ bound, NOT generated
/bind-contract  →  RED on drift
```

Use `/example-mapping` instead when there are **no** finished cards yet
and the mapping must be *discovered* through Q&A. This skill is its
sibling: same output artifact, opposite entry point.

## When to Invoke

Invoke when:

- The Example Mapping session already happened and the cards exist —
  as a **photo** (wall, whiteboard, table of stickies) or as a
  **loosely typed** text/markdown file
- The user wants it in the canonical format so the rest of the chain
  (`/gherkin-spec`, `/bind-contract`) can consume it

## Refusal Cases

Do **not** run when:

- No finished cards exist yet — the mapping still needs to be
  *worked out*. Send the user to `/example-mapping`; do not invent a
  mapping here
- The input is unreadable or far too sparse to transcribe (blurry
  photo, a single line) — say so and ask for a clearer source rather
  than guessing the content
- A current `<feature>-example-mapping.md` already exists and the user
  has not asked to refresh it — ask whether to amend rather than
  silently overwrite (same rule as `/example-mapping`)

## Core Discipline — Transcribe, Do Not Invent

> **You copy what is on the cards. You do not author cards.**

This is the mirror of `/example-mapping`'s "facilitate, do not invent",
applied to transcription. The participants already encoded their domain
knowledge onto the cards; your only job is to move it into the canonical
format **without changing meaning**.

- **NEVER add a rule** that is not on a card. If you think one is
  missing, that is the participants' call — do not fill the gap.
- **NEVER add an example** the cards do not show. No "for completeness"
  boundary cases that nobody wrote down.
- **NEVER "improve" wording** in a way that changes meaning. Light
  cleanup (typos, obvious abbreviations) is fine; reinterpreting a rule
  is not.
- **NEVER resolve an open question** yourself. A red card stays a red
  card.
- **When a card is unreadable or ambiguous, do NOT guess.** Either ask
  the user (`AskUserQuestion`) or record it verbatim as an **Open
  Question** with a marker (see below). An honest "unclear" beats a
  confident fabrication.

A transcriber that "tidies up" the cards produces a mapping that looks
clean but no longer matches what the room agreed on — and nobody can
tell which entries were changed. Same failure mode as inventing during
facilitation, one step later.

## Input Modes (both supported)

### A. Photo of the cards
Read the image with the `Read` tool. Then map by **card colour /
position** to the canonical sections:

| Card colour | Meaning | → Section |
|---|---|---|
| Yellow | Story | `## Story` |
| Blue | Rule | `## Rules` |
| Green | Example | `## Examples` (grouped under its rule) |
| Red / pink | Open question | `## Open Questions` |

If the photo has no colour convention, fall back to text/position
(the one-line story on top, rules as headers, examples beneath them).
Whatever you **cannot read with confidence** → Open Questions, marked
`[unreadable: <your best partial reading>]`. Do **not** silently drop a
card and do **not** invent its content.

### B. Typed text / markdown file
Read the file. It will likely be loose — bullets, a table, mixed
order. **Restructure** it into the canonical format **without changing
the words' meaning**:
- A one-line story → `## Story`
- Anything phrased as a rule/constraint → a `### Rule N` block
- Anything of the form `input → output` (or "given X, expect Y") →
  an example under the matching rule
- Anything phrased as a question / "?" / "TBD" / "unsure" → an Open
  Question

If you cannot tell which rule an example belongs to, ask — do not
guess the grouping.

## Steps

**All steps mandatory.** Do not skip step 4 (user review): the user is
the only authority on whether the transcription matches the cards.

1. **Read the input.** Image or text file (path from the argument). If
   both a photo and a typed file are given, treat the **typed file as
   authoritative** and the photo as a tie-breaker for unreadable bits.

2. **Confirm the story.** Extract the one-sentence story (yellow card /
   top line) and confirm it with the user before proceeding.

3. **Transcribe the cards into the canonical structure.** Rules (blue)
   → `### Rule N`. Examples (green) → grouped under their rule as
   `input → expected output`, **verbatim values** (keep the exact
   numbers/strings — they are the boundary cards `/gherkin-spec` needs).
   Open questions (red) → `## Open Questions`. Mark anything you could
   not read as `[unreadable: …]` and list it as an Open Question.

4. **Review with the user.** Present the full transcription and ask
   explicitly: *"Does this match your cards? Anything mis-read,
   re-worded, or missing?"* Iterate until the user confirms. This is
   where mis-reads get caught — do not skip it.

5. **Write the mapping file.** Ask where to save; default to
   `<feature-slug>-example-mapping.md` in the project root. Use the
   **exact** structure below (identical to `/example-mapping`'s output,
   so `/gherkin-spec` consumes it unchanged):

   ```markdown
   # Example Mapping: <feature name>

   ## Story

   <one-sentence user story>

   ## Rules

   ### Rule 1: <rule name>

   <description>

   ### Rule 2: <rule name>

   <description>

   ## Examples

   ### For Rule 1: <rule name>

   - <input> → <expected output>
   - <input> → <expected output>

   ### For Rule 2: <rule name>

   - <input> → <expected output>

   ## Open Questions

   - <question 1>
   - [unreadable: <partial reading>]
   ```

   Omit `## Open Questions` only if there are genuinely none (no red
   cards AND nothing unreadable).

6. **Report and point to the next step.** State the file path, the
   counts (rules / examples / open questions), and call out **anything
   marked unreadable or that you had to ask about** — so the user knows
   exactly what to double-check. Then suggest the next step.

## Health Indicators

Report after writing (same thresholds as `/example-mapping`, plus
transcription confidence):

| Indicator | Status | Meaning |
|---|---|---|
| Any `[unreadable]` entries remain | Not ready | Re-shoot the card / ask before deriving Gherkin |
| Many open questions (>3) | Not ready | Mapping needs more discussion first |
| Few examples per rule (<2) | Thin coverage | Cards may be incomplete — confirm with the room |
| All cards transcribed, no unreadable, few/no questions | Ready | Proceed to `/gherkin-spec` |

## Next Step

After writing the file, suggest exactly one of:

- **If clean (every card transcribed, nothing unreadable, few/no open
  questions):** "Invoke `/gherkin-spec <path>` to turn the green cards
  into an executable `.feature` spec."
- **If items are unreadable / open:** "Resolve the marked items (re-shoot
  the card or confirm the wording), amend this file, then run
  `/gherkin-spec`."

## Anti-Patterns

- **Inventing a missing rule/example** because the mapping "feels
  incomplete." → Wrong. Transcribe what exists; gaps are the room's call.
- **Reinterpreting a rule** into clearer-but-different wording. → Wrong.
  Keep the meaning; only fix typos/abbreviations.
- **Guessing an unreadable card** instead of marking it. → Wrong. Mark
  `[unreadable: …]` and ask.
- **Resolving a red card** to make the file look finished. → Wrong. A
  red card stays red.
- **Dropping the exact values** ("around 1.3" instead of "1.3.0"). →
  Wrong. The precise numbers are the boundary cards the next skill needs.
- **Silent overwrite** of an existing mapping. → Wrong. Ask whether to
  amend.
- **Skipping the review step** because the transcription looks clean. →
  Wrong. Only the user knows if it matches the cards.
