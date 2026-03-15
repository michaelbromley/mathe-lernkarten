# Schularbeit Lernkarten & Übungen

Interactive flashcard + exercise app for school tests (Schularbeiten). Vanilla HTML/CSS/JS, no build step needed.

## Quick start

Open `index.html` in a browser to see the SA picker, or go directly to `app.html?sa=2026-03-19-mathe-3sa`.

> **Note:** Because scripts are loaded as separate files, some browsers block local file imports. Use VS Code's Live Server or `npx serve .`

## File structure

```
index.html              Landing page (SA picker)
app.html                Study app shell (loads SA data via ?sa= param)
shared/
  style.css             All CSS
  app.js                Generic rendering engine
  diagrams.js           SVG diagram registry
sa/
  registry.js           List of all SAs
  2026-03-19-mathe-3sa/
    data.js             Content: flashcards + exercises
```

## Adding a new SA

1. Create `sa/<id>/data.js` with `SA_META`, `FLASHCARD_SECTIONS`, `EXERCISE_GROUPS`
2. Add one line to `sa/registry.js`
3. Push — Cloudflare auto-deploys in ~30s

See `CLAUDE.md` for data format templates and full documentation.

## Deployment (Cloudflare Pages)

Connect to GitHub repo. No build command, no output directory needed.
