# Space Sleuths — V2 review and testing

Space Sleuths is a single-page browser detective game. Its five case stories and logic live in `index.html`. The illustrated V2 styles and reusable vector backgrounds are in `assets/`.

## Run locally

Open the repository on your computer and run:

```sh
python3 -m http.server 4173
```

Visit http://localhost:4173 in a browser. Using an HTTP server is recommended so SVG and CSS paths resolve consistently.

## Browser smoke tests

Install Node.js 22+ and run:

```sh
npm install
npx playwright install chromium
npx playwright test
```

The automated checks cover the start/briefing/board sequence, evidence inspection, choosing an answer, case completion, opening all five case files, and a 390px mobile viewport.

## Visual acceptance checklist

- On desktop, the observatory illustration appears behind live Space Sleuths text and the Start Investigation button.
- The mission briefing features a tracking-station illustration and readable message.
- The evidence board has five selectable files and progress advances when a case is solved.
- Each case displays evidence, options and a readable conclusion.
- At 390px wide, content remains usable without horizontal overflow.
- The sound toggle remains available and keyboard focus is visible.

## Artwork

The V2 backgrounds are independently authored SVG illustrations, not screenshots or traced graphics from another game. Content, buttons, case data and navigation remain live HTML and JavaScript.

## Current verification note

The repository's initial GitHub Actions jobs concluded as failures but provided no usable step-level output via the connector. This document does **not** claim those tests passed. Confirm the workflow environment can start a runner, then complete browser checks before merging PR #2.
