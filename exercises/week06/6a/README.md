# Block 6a — DOM lab

**Goal:** find and change elements on a real page from JavaScript — text, classes, and
attributes — then build new elements and render an array into a list.

**Time:** ~45 minutes · **You need:** a browser and a terminal (Node from Block 0)

## Setup

```bash
cd exercises/week06/6a/starter
npm install
npm start       # http://localhost:3000
```

Open <http://localhost:3000> **and** the dev-tools **Console** (`F12`). Edit `app.js`,
save, and **reload** to see your changes on the page and in the console.

> `app.js` is loaded as a **module** in the `<head>`, so it runs *after* the page is parsed —
> the elements you query already exist.

---

## Task 1 — Find an element

Query the `<h1>` (it has `id="page-title"`) and `console.log` it. Confirm you see the real
element in the console, not `null`. (If it's `null`, your selector is wrong.)

## Task 2 — Change things

- **2a** — Set the `<h1>`'s **text** to `"DOM lab — powered by JS"` (`textContent`).
- **2b** — On the `.status` paragraph: **add the `highlight` class** (`classList.add`) and change
  its text to `"JavaScript is running!"`. The stylesheet already styles `.highlight`, so you'll
  *see* it change.
- **2c** — Change the logo's image: set its **`src`** from `a.svg` to `b.svg` (the square should
  flip from blue **A** to orange **B**).

## Task 3 — Create an element

Make a new `<p>` with the text `"Created from JavaScript."` and **`append`** it to the
`<body>`. It should appear at the bottom of the page.

## Task 4 — Render data into the list

Loop over the `fruits` array and, for each fruit, **create an `<li>`**, set its text, and
append it to `<ul id="fruit-list">`. You should see all four fruits appear.

- **Bonus:** give the `<li>` for `"plum"` the `done` class (it'll show struck-through).

---

## Requirements checklist

- [ ] Task 1 logs the real `<h1>` element (not `null`)
- [ ] `<h1>` text changed; `.status` is highlighted with new text
- [ ] Logo image switched from `a.svg` to `b.svg`
- [ ] A new `<p>` was created and appended
- [ ] All four fruits rendered as `<li>`s; "plum" is struck-through

## Stretch goals (optional)

- Use `querySelectorAll("li")` to log how many fruits are now in the list.
- Render each fruit as `<li>fruit — N letters</li>` (use the string `.length`).
- Add a `<button>` to the HTML and, in the console, read its `.textContent`. (Making it *do*
  something on click is Block 6b.)
