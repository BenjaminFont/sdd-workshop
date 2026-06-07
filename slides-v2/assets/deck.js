// Gemeinsames Init für alle SDD-Workshop-Decks.
// Injiziert das codecentric-Logo unten rechts auf jeder Folie und
// startet reveal.js mit einheitlichen Optionen.
import Reveal from './reveal.esm.js';
import Highlight from './plugin/highlight/highlight.esm.js';
import Notes from './plugin/notes/notes.esm.js';

// Logo auf jede Section ohne eigenen Footer setzen
document.querySelectorAll('.reveal .slides > section').forEach((sec) => {
  const targets = sec.querySelectorAll('section').length
    ? sec.querySelectorAll('section')
    : [sec];
  targets.forEach((s) => {
    if (s.dataset.nologo === undefined && !s.querySelector('.footer-logo')) {
      const f = document.createElement('div');
      f.className = 'footer-logo';
      f.innerHTML = '<img src="assets/img/logo-black.svg" alt="codecentric">';
      s.appendChild(f);
    }
  });
});

Reveal.initialize({
  hash: true,
  slideNumber: 'c/t',
  controls: true,
  progress: true,
  center: false,
  transition: 'fade',
  transitionSpeed: 'fast',
  width: 1280,
  height: 720,
  margin: 0.06,
  plugins: [Highlight, Notes],
});
