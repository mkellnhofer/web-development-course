# Block 4 — Rebuild it with Bootstrap

**Goal:** take the **same layout** you hand-built in Block 3d and rebuild it with **Bootstrap** —
the grid, a card component, a navbar, and utilities — writing (almost) no CSS of your own.

**Time:** ~45 minutes · **You need:** a browser, a terminal (Node from Block 0), and an
**internet connection** (Bootstrap loads from a CDN)

## Setup

```bash
cd exercises/week04/4/starter
npm install
npm start       # http://localhost:3000
```

Open <http://localhost:3000>. Right now it's unstyled — you'll add Bootstrap classes to the
existing HTML. Keep resizing the window to watch it respond.

---

## Task 1 — Add Bootstrap

In the `<head>`, add the CDN stylesheet:

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet" />
```

Reload. The fonts and default spacing should change immediately — Bootstrap is live.

## Task 2 — Lay out the grid

- Wrap `<main>`'s content in a **`.container`** (or add `container` to `main`).
- Wrap the six card `<div>`s in a single **`.row g-3`** (`g-3` adds gutters).
- Give **each** card `<div>` the classes **`col-12 col-md-6 col-lg-4`** — one column on phones,
  two on tablets, three on desktop.

Resize: the cards should reflow 1 → 2 → 3, exactly like your Block 3d media queries — but with no CSS.

## Task 3 — Bootstrap cards

Turn each block into a **card** component:

```html
<div class="col-12 col-md-6 col-lg-4">
  <div class="card h-100">
    <div class="card-body">
      <h2 class="card-title h5">HTML</h2>
      <p class="card-text">Structure and meaning.</p>
      <a href="#" class="btn btn-primary">Learn</a>
    </div>
  </div>
</div>
```

- `card` → `card-body` → `card-title` / `card-text`
- `h-100` makes every card the same height in its row
- the link becomes `btn btn-primary`

## Task 4 — A navbar

Replace the plain `<nav>` with a Bootstrap navbar (this stays horizontal without any JS):

```html
<nav class="navbar navbar-expand bg-dark" data-bs-theme="dark">
  <div class="container">
    <a class="navbar-brand" href="#">◗ webeng</a>
    <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Docs</a></li>
      <li class="nav-item"><a class="nav-link" href="#">About</a></li>
    </ul>
  </div>
</nav>
```

## Task 5 — Tidy with utilities

Use utility classes (no CSS file) for the finishing touches:

- Space out the heading: add `my-4` to the `<h1>`
- Center it: `text-center`
- Anything else that looks tight: reach for `m-*` / `p-*`

---

## Requirements checklist

- [ ] Bootstrap loads (CDN link in `<head>`)
- [ ] Cards laid out with `container` → `row` → responsive `col-*` (1 → 2 → 3)
- [ ] Each card uses the `card` component + a `btn`
- [ ] A working Bootstrap `navbar`
- [ ] Spacing/text handled with **utilities** — essentially **no custom CSS**

## Reflect

- Roughly how many lines of your **own CSS** did this take, versus Block 3d? `______`
- What did you **give up** compared to writing it yourself? `______`

## At home

Do this task after class. It continues the numbering, so you can ask about it by number.

### Task 6 — Style a form with Bootstrap

`register.html` holds the registration form from Block 2b: plain HTML, with Bootstrap
already linked. Open <http://localhost:3000/register.html> and style it with Bootstrap's
form classes. The [Forms](https://getbootstrap.com/docs/5.3/forms/overview/) pages of the
Bootstrap docs show each one.

1. Put the form in a `container`. Keep it narrow on big screens with the grid: a
   `row justify-content-center` with one `col-md-8 col-lg-6` inside.
2. Give every `<label>` the class `form-label`, every text-like `<input>` the class
   `form-control`, and the `<select>` the class `form-select`.
3. Space out the fields: add `mb-3` to each `<div>` around a field.
4. Radio buttons and checkboxes work differently. Give their `<div>` the class `form-check`,
   the input `form-check-input`, and the label `form-check-label`.
5. Make the button a `btn btn-primary`.
6. Click **Sign up** with an empty form. Does the validation from Block 2b still work? Why?
   `______`

## Stretch goals (optional)

- Make the first card a feature: add Bootstrap's `border-primary` and a `badge`.
- Add the Bootstrap **JS bundle** and turn the navbar links into a working dropdown.
