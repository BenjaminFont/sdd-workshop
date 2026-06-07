// LAYER 2 — THE TRANSLATION LAYER (code, written once by a developer)
//
// A domain expert never reads this file. It maps each *sentence shape*
// from the .feature file onto real calls against the system. This is
// the only "code" you add to make the prose spec executable — and it
// is reusable: one step definition serves every scenario that uses
// that sentence.
//
// Cucumber.js style (@cucumber/cucumber). The point is the SHAPE, not
// the framework — pytest-bdd, SpecFlow, Behave all look analogous.

const assert = require("node:assert");
const { Given, When, Then, Before } = require("@cucumber/cucumber");

// --- The system under test (toy stand-in for your real Auth code) ----
// In a real project these calls would hit your actual session service.
// Here it is a tiny in-memory model so the example runs on its own.
const SESSION_TIMEOUT_MINUTES = 15;

function makeSystem() {
  return {
    loggedIn: false,
    idleMinutes: 0,
    login() {
      this.loggedIn = true;
      this.idleMinutes = 0;
    },
    advanceMinutes(m) {
      this.idleMinutes += m;
    },
    sessionIsValid() {
      return this.loggedIn && this.idleMinutes < SESSION_TIMEOUT_MINUTES;
    },
  };
}

// Fresh system before each scenario so they don't bleed into each other.
Before(function () {
  this.system = makeSystem();
});

// --- Step definitions: one per sentence SHAPE, reused across scenarios -

Given("a logged-in user", function () {
  this.system.login();
});

// {int} captures the number FROM the sentence. The "15" and the "10"
// in the two scenarios both flow through here — no duplicated constant
// lives in this file, so the .feature file is the single source.
When("{int} minutes pass without activity", function (minutes) {
  this.system.advanceMinutes(minutes);
});

Then("the session is invalid", function () {
  assert.strictEqual(this.system.sessionIsValid(), false);
});

Then("the session is still valid", function () {
  assert.strictEqual(this.system.sessionIsValid(), true);
});

// --- Why there is no drift -------------------------------------------
// There is no second copy of "15" or "10" here. The runner reads the
// number out of the .feature file at run time. Change the prose to
// "12 minutes" and the assertion runs against 12 automatically. If the
// system's real timeout disagrees with what the scenario asserts, the
// step throws and CI goes RED — forcing spec and code back into sync.
