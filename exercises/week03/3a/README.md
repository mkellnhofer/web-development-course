# Block 3a — Your first CSS

**Goal:** take a plain HTML page and give it a look with your own **external stylesheet**,
using **type**, **class**, and **id** selectors and your first properties.

**Time:** ~45 minutes · **You need:** a browser and a terminal (Node from Block 0)

## Setup

```bash
cd exercises/week03/3a/starter
npm install     # once
npm start       # serves at http://localhost:3000
```

Open <http://localhost:3000>. The page is unstyled on purpose. You'll edit
`styles.css`, **save**, and **reload** to see each change.

---

## Task 1 — Attach the stylesheet

`styles.css` already exists, but the page isn't loading it yet. In `index.html`'s
`<head>`, add:

```html
<link rel="stylesheet" href="styles.css" />
```

Reload. The page font should change (from the browser default to the example rule in
`styles.css`). That proves the stylesheet is connected.

## Task 2 — Type selectors

In `styles.css`, style whole *kinds* of element:

- `body` — a `background-color` and a `color`
- `h1` — `text-align: center;`
- Pick one more (`h2`, `a`, or `li`) and change its `color`

## Task 3 — Class selectors

Target elements by their `class` (note the leading `.`):

- `.card` — give the two sections a `background-color`
- `.lead` — make the intro paragraph stand out (a bigger `font-size`, bold `font-weight`)
- `.note` — give the tip its own colour so it reads as an aside

> A class is **reusable** — `.card` styles *both* sections at once. Change the rule, both update.

## Task 4 — An id selector

Target one element by its `id` (note the leading `#`):

- Give `#about` **or** `#skills` a different `background-color` from the other card.

Notice: even though both are `.card`, the `#id` rule hits only that one section.
(*Which rule wins when `.card` and `#about` disagree? That's the cascade — Block 3b.*)

---

## Requirements checklist

- [ ] `styles.css` is linked from the `<head>` and loading
- [ ] At least **three type** selectors (e.g. `body`, `h1`, `h2`)
- [ ] At least **two class** selectors (`.card`, `.lead`, or `.note`)
- [ ] **One id** selector (`#about` or `#skills`)
- [ ] You used `color`, `background-color`, `font-size`, and `text-align` somewhere
- [ ] Every change lives in `styles.css` (no `style="…"` attributes in the HTML)

## Stretch goals (optional)

- **Group** selectors: `h1, h2 { … }` to style both headings at once.
- **Descendant** selector: `nav a { … }` to style only the links inside the nav.
- Add an inline `style="color: red"` to one element and reload — notice it **overrides**
  your stylesheet. Why might that be? (That's *specificity* — Block 3b.)
- Don't worry that things look cramped — **spacing** (margins & padding) is Block 3c.
