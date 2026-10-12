# Block 2a — Your first HTML page

**Goal:** hand-write a small, **semantic**, multi-section page about yourself — structure
only, no CSS. By the end it should pass the W3C validator with **zero errors**.

**Time:** ~45 minutes · **You need:** a text editor (VS Code) and a browser

## Setup

You'll **serve** your page over HTTP with Node — the toolchain you set up in **Block 0**.
(No Node yet? Do task 3a of exercise 0: install Node.js 24 and check it with `node --version`.)

1. Open a terminal in the `starter/` folder and start the local server:

   ```bash
   cd exercises/week02/2a/starter
   npm install     # once — downloads a small static server
   npm start       # serves this folder at http://localhost:3000
   ```

2. Open **<http://localhost:3000>** in your browser.

3. Edit `index.html` in your editor, **save**, then **reload** the browser. (The image
   `avatar.svg` is already in this folder, ready to use.)

> Write the HTML *by hand* — don't copy from the slides. The point is to build the muscle
> memory. Peek only when you're stuck.

---

## Task 1 — The skeleton, from memory

In `index.html`, write the document skeleton **without looking at the slides**:

- the doctype
- `<html>` with a `lang`
- a `<head>` containing the character set and a `<title>` (this shows in the browser tab)
- an empty `<body>`

Reload. The tab should show your title, and the page will be blank. That's correct —
nothing is in `<body>` yet.

## Task 2 — Lay out the landmarks

Inside `<body>`, add the four page **landmarks** — empty for now:

- `<header>` — will hold the page title
- `<nav>` — will hold links to your sections
- `<main>` — the main content
- `<footer>` — a closing line

Indent each so the structure mirrors the tree.

## Task 3 — Fill it with content

- In `<header>`: an `<h1>` with your name.
- In `<main>`, create **at least two** `<section>`s, each with its own `<h2>`. For example:
  - **About me** — one or two `<p>` paragraphs, and the image:
    `<img src="avatar.svg" alt="…">` — write a **meaningful** `alt`.
  - **What I want to learn** — an ordered or unordered **list** (`<ul>`/`<ol>`) of at least three items.
- Somewhere in `<main>`, add a **link** (`<a href="…">`) to a real website you like — this is *hypertext* in action.
- In `<nav>`: a small list of links. (In-page links work like `<a href="#about">About</a>` if you give a section `id="about"`.)
- In `<footer>`: a short line, e.g. your name and the year.

## Task 4 — Make it good, not just working

- Use **semantic** tags — no `<div>` in this exercise unless nothing else fits.
- Exactly **one `<h1>`** on the page; don't skip heading levels.
- **Close every tag** and nest them properly.
- **Indent** consistently so the code reads like the tree.

## Task 5 — Validate

1. Go to **<https://validator.w3.org/#validate_by_input>**.
2. Paste your HTML (or upload the file) and check it.
3. **Fix every error and warning** until it reports *"Document checking completed. No errors or warnings to show."*

---

## Requirements checklist

Your page must have:

- [ ] A valid skeleton: doctype, `<html lang>`, `<head>` with charset + `<title>`, `<body>`
- [ ] All four landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`
- [ ] Exactly one `<h1>`, plus at least two `<h2>` sections
- [ ] At least two paragraphs
- [ ] A list (`<ul>` or `<ol>`) with 3+ items
- [ ] A link (`<a>`) to an external site
- [ ] An image (`<img>`) with a meaningful `alt`
- [ ] **Zero** validator errors

## At home

Do this task after class. It continues the numbering, so you can ask about it by number.

### Task 6 — A second page

Real websites are many documents that link to each other. Give your site a second page —
real hypertext between your own documents.

1. Create `hobbies.html` next to `index.html`. Give it the same skeleton and the same four
   landmarks, an `<h1>`, and a short section about your hobbies.
2. In the `<nav>` of `index.html`, add a link to `hobbies.html`.
3. In the `<nav>` of `hobbies.html`, add a link back to `index.html`.
4. Open <http://localhost:3000> and click between the two pages.
5. Validate `hobbies.html` too — zero errors and warnings.

## Stretch goals (optional)

- Turn one section into an `<article>`, and add an `<aside>` with a fun fact.
- Wrap the image in `<figure>` with a `<figcaption>`.
- Add a `<time>` element to your footer for the year.
