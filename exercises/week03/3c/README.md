# Block 3c — A colour & type system

**Goal:** style a plain article with a small, **consistent** system — colours, a type
scale, and spacing — all driven by **CSS variables**. Then change one token and watch the
whole page follow.

**Time:** ~45 minutes, at home · **You need:** a browser and a terminal (Node from Block 0)

## Setup

```bash
cd exercises/week03/3c/starter
npm install
npm start       # http://localhost:3000
```

Open <http://localhost:3000>. The page is unstyled; you'll build its look in `styles.css`.

---

## At home

There is no class time for this exercise. Do all tasks after class.

### Task 1 — Define your tokens

In `:root`, define a small set of variables (uncomment and tweak the starter hints):

- **Colours**: `--color-text`, `--color-muted`, `--color-brand`, `--color-bg`, `--color-card`
- **Spacing**: one `--space` step (e.g. `1rem`) — you'll build the rest as multiples
- **Font**: a `--font` stack (end with a generic family!)

> Pick colours that work together. Try writing one in `hsl()` and nudging its lightness for
> a second shade.

### Task 2 — Apply the base

Style `<body>` **using your tokens**:

- `font-family: var(--font);`
- `color: var(--color-text);`
- `background-color: var(--color-bg);`
- a readable `line-height` (≈ `1.6`)

### Task 3 — A type scale

Give the headings and text a **scale in `rem`** — related sizes, not random ones:

- `h1` ≈ `2.5rem`, `h2` ≈ `1.75rem`, `h3` ≈ `1.25rem`, `p` = `1rem`
- Make `.lead` a bit larger and `--color-muted`, so the intro stands out

### Task 4 — Spacing & rhythm

Apply spacing **from a consistent scale** (`var(--space)` and its multiples):

- `margin` between the `<section>`s (a consistent gap = rhythm)
- `padding` inside `.card`, and give it `background: var(--color-card);`
- a `max-width` on `main` (≈ `40rem`) so lines stay a readable length — center it with
  `margin: 0 auto;`

### Task 5 — The payoff

Change **one** token in `:root` — e.g. `--color-brand`, or bump `--space` from `1rem` to
`1.25rem`. Save, reload.

- How many places updated from that single edit? `______`
- That's the whole point of a system: **define once, reuse everywhere.**

---

## Requirements checklist

- [ ] At least **4 colour tokens**, a `--space` step, and a `--font` in `:root`
- [ ] `<body>` styled entirely through `var(--…)` (no hard-coded colours/fonts)
- [ ] A **type scale in `rem`** for `h1`/`h2`/`h3`/`p`, plus a sane `line-height`
- [ ] Spacing taken from your scale; `main` has a readable `max-width`
- [ ] Changing one `:root` token visibly updates multiple places

## Stretch goals (optional)

- Use `calc()` for spacing multiples: `margin-bottom: calc(var(--space) * 2);`
- Add a `.brand` class coloured with `--color-brand`, and a hover shade using `hsl()`.
- Load a **web font** (Google Fonts `<link>` in the `<head>`) and set it as `--font` — your
  first custom typeface.
- Add a `:root` "dark" variant by overriding the colour tokens, and swap between them.
