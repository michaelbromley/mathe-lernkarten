# Schularbeit App

Multi-SA study app: flashcards + exercises for school tests. Vanilla HTML/CSS/JS, no build step.

## Architecture

```
index.html              Landing page (SA picker)
app.html                Study app (loads SA data via ?sa= param)
shared/
  style.css             All CSS
  app.js                Rendering engine (generic)
  diagrams.js           SVG diagram registry (trapez, dreieck, etc.)
sa/
  registry.js           List of all SAs
  <sa-id>/data.js       One file per SA with all content
```

## Adding a New SA

1. Create folder `sa/<id>/` (format: `YYYY-MM-DD-fach-Nsa`, e.g. `2026-06-15-mathe-4sa`)
2. Create `data.js` in that folder with `SA_META`, `FLASHCARD_SECTIONS`, `EXERCISE_GROUPS`
3. Add one entry to `sa/registry.js`

## Data Format

### `sa/registry.js` entry
```js
{
  id: '2026-06-15-mathe-4sa',
  subject: 'Mathematik',
  title: '4. Schriftliche Arbeit',
  date: '2026-06-15',
  topics: ['Dreiecke', 'Kreise'],
  color: '#4a9b6f',
},
```

### `sa/<id>/data.js` structure
```js
const SA_META = {
  subject: 'Mathematik',
  title: '4. Schriftliche Arbeit',
  date: '15.6.2026',
  className: '2CD',
};

const FLASHCARD_SECTIONS = [
  {
    id: 'sec-dreiecke',
    label: 'Dreiecke',
    color: '#4a9b6f',
    cardColor: '#1a2744',
    cards: [
      { q: 'Question text', a: '<strong>Answer</strong>\n<f>formula</f>' },
    ],
  },
];

const EXERCISE_GROUPS = [
  {
    id: 'ex-dreieck-A',
    label: 'Dreieck – A berechnen',
    color: '#e8522a',
    diagram: 'dreieck',        // key from diagrams.js, or null
    variables: [
      { name: 'g', label: 'Grundlinie', unit: 'cm' },
      { name: 'h', label: 'Höhe', unit: 'cm' },
      { name: 'A', label: 'Fläche', unit: 'cm²' },
    ],
    exercises: [
      {
        find: 'A',
        given: { g: 8, h: 5 },
        answer: 20,
        label: 'Fläche berechnen',
        steps: [
          'Formel: <sf>A = g · h / 2</sf>',
          '<sf>A = 8 · 5 / 2 = 20 cm²</sf>',
        ],
      },
    ],
  },
];
```

## Shorthand Tags
- `<f>...</f>` in card answers: styled formula block
- `<sf>...</sf>` in exercise steps: inline formula

## Available Diagrams
- `trapez` — standard trapezoid with a, c, h labels
- `dreieck` — triangle with g, h labels
- `null` — no diagram (for non-geometry exercises)

## Deployment
Static site on Cloudflare Pages. Push to `main` triggers auto-deploy.
