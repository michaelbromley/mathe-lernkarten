# Mathe Lernkarten – 2CD

Interactive flashcard + exercise app for the maths test on 19.3.2026.

## File structure

```
mathe-lernkarten/
├── index.html   — app shell, styles, and rendering logic (rarely needs editing)
└── data.js      — ALL content: flashcard sections and exercise groups
```

**Only `data.js` needs to be edited** to add or change cards and exercises.

---

## Local development

Open `index.html` directly in a browser — no build step, no server needed.

> **Note:** Because `data.js` is loaded as a separate `<script src>`, some
> browsers block local file imports for security reasons. If the app is blank,
> either use VS Code's Live Server extension, or run:
> ```bash
> npx serve .
> ```

---

## Deployment (GitHub → Cloudflare Pages)

### First time

```bash
git init
git add .
git commit -m "Initial version"
# create a repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/mathe-lernkarten.git
git push -u origin main
```

In the Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**:
- Select the repo
- Build command: *(leave empty)*
- Output directory: *(leave empty)*
- Save → Deploy

You'll get a live URL like `mathe-lernkarten.pages.dev` within ~30 seconds.

### Updating content

1. Edit `data.js` (add cards, fix answers, add exercise groups, etc.)
2. Push:
   ```bash
   git add data.js
   git commit -m "Add proportionality exercises"
   git push
   ```
3. Cloudflare redeploys automatically in ~30 seconds.

---

## How to add content to `data.js`

### Add a flashcard section

Append to the `FLASHCARD_SECTIONS` array:

```js
{
  id: 'sec-dreiecke',          // unique slug, no spaces
  label: 'Dreiecke',           // shown in heading + TOC
  color: '#e8522a',            // dot + formula border colour
  cardColor: '#2a1a1a',        // card front background
  cards: [
    {
      q: 'Wie berechnet man die Fläche eines Dreiecks?',
      a: `<strong>Basis mal Höhe, geteilt durch 2.</strong>
<f>A = (b · h) / 2</f>`,
    },
    // more cards...
  ],
},
```

**Shorthand tags in answers:**
- `<f>formula here</f>` → styled formula block

### Add an exercise group

Append to the `EXERCISE_GROUPS` array:

```js
{
  id: 'ex-group-dreieck-A',
  label: 'Dreieck – A berechnen',
  color: '#e8522a',
  exercises: [
    {
      find: 'A',          // variable to solve for
      b: 8, h: 5,         // given values (variable names are free-form)
      A: 20,              // correct answer
      unit: 'cm²',
      label: 'Fläche berechnen',
      steps: [
        'Formel: <sf>A = (b · h) / 2</sf>',
        '<sf>A = (8 · 5) / 2 = 40 / 2 = 20 cm²</sf>',
      ],
    },
  ],
},
```

**Shorthand tags in steps:**
- `<sf>formula here</sf>` → inline styled formula

> The SVG diagram currently only draws Trapez shapes. For other shapes,
> you can either extend `drawTrapez()` in `index.html` or add a custom
> `diagramFn` property to the exercise group (see the source comments).

---

## Tips for Claude Code

When working with Claude Code on this project, useful prompts:

- *"Add 5 more Trapez exercises finding h to data.js"*
- *"Add a new flashcard section for Dreiecke with 4 cards"*
- *"Add a third tab for Prüfungstipps with a checklist"*
- *"Make the app work offline with a service worker"*
