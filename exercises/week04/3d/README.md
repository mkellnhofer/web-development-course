# Block 3d — Responsive card layout

**Goal:** pin a sticky navbar and a badge in place with **positioning**, lay out the navbar
and the cards with **Flexbox**, then make the cards **responsive** — first with `@media`
breakpoints, then with a single `flex` line.

**Time:** ~45 minutes · **You need:** a browser and a terminal (Node from Block 0)

## Setup

```bash
cd exercises/week04/3d/starter
npm install
npm start       # http://localhost:3000
```

Open <http://localhost:3000>. The cards and nav are there but unstyled for layout. You'll
add the layout in `styles.css`. **Resize the browser window** constantly to test.

> 💡 In dev tools, the **device toolbar** (the phone/tablet icon, `Ctrl/Cmd+Shift+M`) lets you
> preview narrow screens without shrinking your window.

---

## Task 1 — Pin things in place

Make the nav **sticky**, so it stays at the top while you scroll:

```css
.nav {
  position: sticky;
  top: 0;
}
```

Scroll down. If the page is too short to scroll, make the window lower.

Then move the orange **"New" badge** into the top-right corner of its card:

- `.badge { position: absolute; top: 0.5rem; right: 0.5rem; }`
- Reload. Where did the badge go? Now add `.card { position: relative; }` and reload again.

Scroll once more. Does the badge slide **over** the nav? Give `.nav` a `z-index: 1` and
check again.

## Task 2 — A flex navbar

Make `.nav` a flex row: **logo on the left, links on the right.**

- `.nav { display: flex; justify-content: space-between; align-items: center; }`
- Make `.nav-links` a flex row too (`display: flex; gap: 1rem;`) and remove the list
  bullets (`list-style: none; margin: 0; padding: 0;`)

## Task 3 — A wrapping card row

Make `.cards` a flex row that **wraps**, and give each card a share of the row:

```css
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.card { flex: 1 1 30%; }
```

You should now see the six cards in two rows of three. **Shrink the window** — the cards get
cramped, and on a phone width they break into pairs at no planned point. That's what we fix
next.

## Task 4 — Make it mobile-first

Rebuild the card widths so the layout adapts, **smallest screen first**:

```css
.card { flex: 1 1 100%; }                    /* base: phones, 1 card per row */

@media (min-width: 600px) {
  .card { flex-basis: 40%; }                 /* tablets: 2 cards per row */
}

@media (min-width: 900px) {
  .card { flex-basis: 30%; }                 /* desktop: 3 cards per row */
}
```

Resize the window slowly and watch it snap: 1 → 2 → 3 cards per row at the breakpoints.

Why `40%` and not `50%`? Two cards at `50%` plus the gap are wider than the row, so the
second card would wrap. `flex-grow` (the first `1`) stretches the cards to fill the rest.

## Task 5 — Fewer lines, same result

Comment out the Task-4 rules and replace them with **one line**:

```css
.card { flex: 1 1 200px; }
```

Resize again. The cards now reflow **on their own** — no breakpoints. Find a width where the
last row has fewer cards than the others. What happens to those cards, and why? `______`

Which approach do you prefer here, and why? `______`

---

## Requirements checklist

- [ ] `.nav` sticks to the top when you scroll, and nothing slides over it
- [ ] The badge sits in the top-right corner of its card
- [ ] `.nav` is a flex row with logo left, links right, vertically centered
- [ ] `.nav-links` is a flex row with a `gap` and no bullets
- [ ] `.cards` is a wrapping flex row with a `gap`
- [ ] The cards are **responsive**: 1 → 2 → 3 per row (via `@media`)
- [ ] You tried the `flex: 1 1 200px` version and resized to see it reflow

## Stretch goals (optional)

- Make the first card a **feature**: give it `flex-basis: 100%;` so it takes a whole row.
- Give the nav links a `:hover` colour.
- Add a `footer` and keep it full-width below the cards.
- Change the nav from `sticky` to `fixed`. What happens to the heading below it? Why?
- Curious about two-dimensional layouts? Read MDN's
  [Basic concepts of grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
  and rebuild the cards with `display: grid`.
