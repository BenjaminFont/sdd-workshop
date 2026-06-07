# LAYER 1 — THE SPECIFICATION (prose, read by humans / domain experts)
#
# This file IS the spec. Nothing in here is code. A non-developer can
# read it and confirm "yes, that is what we want." It looks exactly the
# same whether it is "dead" prose or executable — the difference is the
# steps file next to it, never this file.

Feature: Session management
  Sessions expire after inactivity so that an unattended,
  logged-in machine does not stay authenticated forever.

  Scenario: Session expires after inactivity
    Given a logged-in user
    When 15 minutes pass without activity
    Then the session is invalid

  # Same vocabulary, different number — note this scenario needs NO new
  # step code. The "{int} minutes" step below already covers it.
  Scenario: Activity keeps the session alive
    Given a logged-in user
    When 10 minutes pass without activity
    Then the session is still valid

  # DRIFT OF THE SECOND KIND: a new requirement with NO step definition.
  # The "When"/"Then" sentences below match nothing in session.steps.js.
  # - strict mode  -> these steps are UNDEFINED -> build fails (RED)
  # - non-strict   -> reported but counted as a pass (GREEN) -> the spec
  #                   silently outruns the tests. That is why strict is
  #                   not optional if the spec is meant to be the source
  #                   of truth.
  # Fix: either add the missing step definitions (and the code behind
  # them), or remove the scenario. The red forces the choice.
  Scenario: Locked account cannot log in
    Given a locked user account
    When the user submits valid credentials
    Then login is refused
