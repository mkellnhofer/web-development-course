# Block 3b — Cascade & box-model lab

**Goal:** make CSS conflicts **predictable**, then take an element's **box** apart layer by
layer. Most of this happens in the **dev tools** — you'll read the answers off the screen.

**Time:** ~45 minutes · **You need:** a browser and a terminal (Node from Block 0)

## Setup

```bash
cd exercises/week03/3b/starter
npm install
npm start       # http://localhost:3000
```

Open <http://localhost:3000> and open the **dev tools** (`F12`).

---

## Task 1 — Predict the winner

`styles.css` sets the paragraph's colour **three times** (`p`, `.lead`, `#intro`).

1. Remove the comment around the `<link>` to `styles.css`.
2. **Before looking:** which colour do you expect the paragraph to be? `______`
3. Reload and check. Were you right?
4. Select the paragraph in **Elements** → **Styles**. The two losing `color`
   declarations are shown **~~struck through~~**. Which selector won, and what's its
   specificity `(id, class, type)`? `______`

## Task 2 — Change the winner

Make the **gray** (`.lead`) colour win — **without deleting the `#intro` rule**.

- Try just moving `.lead` *below* `#intro`. Does source order help here? Why not? `______`
- Now actually make it win. (Hint: you must beat `#intro`'s **specificity**, or use the
  escape hatch.) Write what you did: `______`
- If you used `!important` — how would a teammate override *that*? `______`

## Task 3 — Measure the box

The `.box` has `width: 200px`, `padding: 20px`, `border: 5px`.

1. **Predict** its total on-screen width: `______`
2. In dev tools, select `.box` and open the **box-model diagram** (bottom of the
   **Styles**/**Computed** pane). Read the real numbers. Total width? `______`
3. Does it match `200 + 20 + 20 + 5 + 5`? Which sizing model is this (`content-box`)?

## Task 4 — box-sizing

1. Add `box-sizing: border-box;` inside the `.box` rule. Save, reload.
2. Measure again. What's the total width now? `______`
3. In one sentence: what did `border-box` change? `______`

## Task 5 — Inheritance

Below the box rule, add:

```css
body {
  color: orange;
  border: 5px solid gold;
  border-radius: 1rem;
}
```

- Did the box's **text** colour change? `______`  Why?
- Did the box get **round corners** like the page? `______`  Why?
- Select the box in **Elements**. In **Styles**, find the section **Inherited from body**.
  Which of the three `body` declarations apply to the box? `______`
- Which kind of property inherits, and which doesn't?

---

## Requirements checklist

- [ ] Correctly identified the winning colour **and** its specificity (Task 1)
- [ ] Made `.lead` win, and can explain why source order alone couldn't (Task 2)
- [ ] Measured the box at **250px** (`content-box`) and **200px** (`border-box`)
- [ ] Explained which property inherited in Task 5 and which didn't

## Stretch goals (optional)

- Add an inline `style="color: green"` to the paragraph. It beats *all three* rules — where
  does inline sit on the specificity ladder?
- Move `box-sizing: border-box;` out of `.box` and into a universal rule
  `* { box-sizing: border-box; }` at the top — the way real projects do it.
- Give the box a `margin: 30px;` and watch the box-model diagram gain an outer ring.
