# SDD-Workshop — Slidev

Das reveal.js-Deck aus `../slides-v2` neu gebaut mit [Slidev](https://sli.dev/).
Ein durchgehendes Deck statt acht separater HTML-Dateien.

## Starten

```bash
npm install
npm run dev      # Präsentation auf http://localhost:3030
```

- **Presenter-Modus** (mit Speaker-Notes): http://localhost:3030/presenter/
- **Übersicht**: Taste `o`
- Navigation: Pfeiltasten · `f` Vollbild

## Bauen / Exportieren

```bash
npm run build    # statisches dist/ (SPA)
npm run export   # PDF -> slides-export.pdf (playwright-chromium ist installiert)
```

## Struktur

- `slides.md` — Einstieg (Cover) + bindet die Akte via `src:` ein
- `pages/akt0.md` … `akt7.md` — je ein Akt (eine reveal-`<section>` = eine Folie)
- `layouts/cc.vue` — codecentric-Slide-Layout (Varianten `title` / `center`, Footer-Logo)
- `styles/main.css` — das portierte codecentric-Theme (aus `slides-v2/assets/theme.css`)
- `public/fonts`, `public/img` — Rubik-Schrift, Logos, Trainer-Bilder

## Konventionen pro Folie

```yaml
---
layout: cc
variant: center   # oder title  (weglassen = Standard-Inhaltsfolie)
nologo: true      # Footer-Logo unterdrücken
---
```

Folieninhalt ist bewusst **rohes HTML** mit den Theme-Klassen
(`.slash`, `.dots`, `.cards`, `.flow`, `.pill`, `.big`, `.huge` …),
1:1 aus dem reveal-Original übernommen. Speaker-Notes stehen als
`<!-- ... -->` am Ende jeder Folie.
