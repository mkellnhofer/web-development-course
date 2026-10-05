# Web Development — Course Material

Hochschule Ansbach · 3rd semester · winter semester 2026/27 · Matthias Kellnhofer

This repository holds the slides and the exercises of the course **Web Development**.

## Start here

New to the course? Start with **exercise 0**:
[`exercises/week01/0/README.md`](exercises/week01/0/README.md). It shows you how to install
the tools, clone this repository, and create your own branch.

## What's inside

```text
web-development-course/
├── slides/
│   └── week02/
│       ├── 2a-html-basics.pdf
│       └── 2b-html-forms.pdf
└── exercises/
    └── week02/
        ├── 2a/
        │   ├── README.md  ← the exercise sheet
        │   └── starter/   ← your code
        └── 2b/
```

- One folder per **week**: `weekNN/`
- Every file starts with its **block ID**: `2a-html-basics.pdf` → `exercises/week02/2a/`
- **Slides** are PDFs. **Exercise sheets** are Markdown — GitHub and VS Code show them nicely.

The material for a week comes out **two days before the lecture** (Monday).

## Getting new material

Your own work goes on **your own branch** (exercise 0 calls it `my-work`). Never commit on
`main` — it holds the course material.

When new material is out, bring it into your branch:

```bash
git switch main
git pull
git switch my-work
git merge main
```

Short version, on your own branch:

```bash
git pull --no-rebase origin main
```

## Schedule

Wednesdays, 16:00–19:15, room 92.1.14

| Block | Topic | Week | Date |
|---|---|---|---|
| 0 | Intro | 1 | 07.10.2026 |
| 1 | Client/Server Model + HTTP | 1 | 07.10.2026 |
| 2a–2b | HTML | 2 | 14.10.2026 |
| 3a–3d | CSS | 3–4 | 21.10. + 28.10.2026 |
| 4 | Styling with a framework (Bootstrap) | 4 | 28.10.2026 |
| 5a–5b | JavaScript fundamentals | 5 | 04.11.2026 |
| 6a–6b | DOM + Events & Interactivity | 6 | 11.11.2026 |
| – | *No lecture (Blockwoche)* | – | 18.11.2026 |
| 7a–7b | Server-side rendering (SSR) | 7 | 25.11.2026 |
| 8a–8d | Client-side rendering (CSR) | 8–9 | 02.12. + 09.12.2026 |
| 9 | CSR with a framework (Vue) | 10 | 16.12.2026 |
| 10 | SSR vs CSR | 10 | 16.12.2026 |
| – | *No lecture (lecture-free period)* | – | 23.12.2026 – 06.01.2027 |
| – | Recap & questions | 11 | 13.01.2027 |
