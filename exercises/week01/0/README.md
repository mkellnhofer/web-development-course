# Block 0 — Set up your tools

**Goal:** install the tools for this course, get the course material with **Git**, and serve
your first page with **Node**. At the end, you get Block 1 with Git — live, in class.

**Time:** ~45 minutes · **You need:** your laptop (or a lab PC) and internet

> You don't have the course material on your computer yet. Read this sheet on GitHub until
> task 2c. After that, you can open it in VS Code.

**The terminal:** all commands on this sheet run in a terminal. Use the one in VS Code:
**Terminal → New Terminal** (`` Ctrl + ` ``).

> ⚠️ After you install a tool, **close VS Code completely and open it again**. A terminal
> that was already open doesn't know the new command yet.

---

## Task 1 — VS Code and Chrome

The lab PCs have both. On your own laptop, install what's missing:

- **VS Code:** <https://code.visualstudio.com>
- **Chrome:** <https://www.google.com/chrome>

---

## Task 2 — Git

### 2a — Install Git

- **Windows:** download the installer from <https://git-scm.com/downloads/win>. Keep the
  default settings.
- **macOS:** run `git --version` in a terminal. If Git is missing, macOS offers to install
  the *Command Line Developer Tools*. Accept, and wait until it's done.
- **Linux:** install it with your package manager, e.g. `sudo apt install git`.

Check it — this must print a version number:

```bash
git --version
```

### 2b — Set up Git

Git writes your **name** and **email** into every commit you make:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Sometimes Git opens an editor, e.g. for the message of a merge. By default, that editor is
**Vim**, which is hard to use if you don't know it. Tell Git to use **VS Code** instead:

```bash
git config --global core.editor "code --wait"
```

> 🍎 **macOS:** first make the `code` command available. In VS Code, press `Cmd + Shift + P`
> and run **Shell Command: Install 'code' command in PATH**. Then open a new terminal.

Check it — you should see your name, your email, and the editor:

```bash
git config --global --list
```

### 2c — Get the course material

In the terminal, go to the folder where you want to keep the course (for example your
*Documents* folder). Then **clone** the course repo, and create **your own branch**:

```bash
cd ~/Documents
git clone https://github.com/mkellnhofer/web-development-course.git
cd web-development-course
git switch -c my-work
```

`git switch -c my-work` creates a new branch called `my-work` and switches to it. All your
own work goes there.

> ⚠️ **Never commit on `main`.** `main` holds the course material. If you commit on it, getting
> new material later fails.

Now open the course in VS Code: **File → Open Folder…** → `web-development-course`. The
terminal in this window starts in the course folder — all following commands expect that.
From here on, you can read this sheet in VS Code: open `exercises/week01/0/README.md` and
press `Ctrl + Shift + V` (macOS: `Cmd + Shift + V`) for the preview.

Check it — the `*` marks the branch you're on:

```bash
git branch
```

### 2d — Your first commit

1. Open `exercises/week01/0/setup.txt`. Replace `______` with the output of `git --version`.
   Save the file.
2. Ask Git what changed:

   ```bash
   git status
   ```

   Git lists `setup.txt` as **modified**.
3. **Stage** the change — this chooses what goes into the next commit — and **commit** it:

   ```bash
   git add exercises/week01/0/setup.txt
   git commit -m "Add my Git version"
   ```

4. Check it — your commit is on top:

   ```bash
   git log --oneline
   ```

---

## Task 3 — Node.js

### 3a — Install Node.js

Download **Node.js 24 (LTS)** from <https://nodejs.org> and install it. On Linux, follow the
instructions for Linux on the same page.

> 🖥️ **Lab PC:** if the installer asks for an administrator password, tell me.

Close VS Code and open it again (see the note at the top). Check it — both must print a
version number, and Node's must start with `v24`:

```bash
node --version
npm --version
```

### 3b — Install the dependencies

The `starter/` folder is a tiny web project. Its `package.json` says which packages it needs.
`npm install` downloads them into the folder `node_modules/`:

```bash
cd exercises/week01/0/starter
npm install
```

### 3c — Serve the page

Start a small web server for this folder:

```bash
npm start
```

Open **<http://localhost:3000>** in Chrome. You should see **Hello Web Development!** Your
computer is now a web server — Block 1 shows what happens between the browser and the
server.

The server keeps running in this terminal. You stop it later with `Ctrl + C`.

### 3d — Change the page

1. Open `exercises/week01/0/starter/index.html` in VS Code.
2. Change `Hello Web Development!` to `Hello` and your name, e.g. `Hello Anna!`. Save the file.
3. **Reload** the page in Chrome (`F5`). You see your change.

### 3e — Commit your change

Open a **second terminal** with the **+** in the terminal panel. The server keeps running in
the first one. The new terminal starts in the course folder.

```bash
git status
```

You should see exactly **one** changed file: `index.html`. The folder `node_modules/` isn't
listed, because `starter/.gitignore` tells Git to ignore it.

```bash
git add exercises/week01/0/starter/index.html
git commit -m "Say hello with my name"
git log --oneline
```

Your two commits are on top.

---

## Task 4 — Get Block 1 (live)

**Wait until I publish Block 1** at the end of the session. Then get it, the same way you'll
get new material every week:

```bash
git switch main
git pull
git switch my-work
git merge main
```

1. `git switch main` — go to the course material
2. `git pull` — download what's new
3. `git switch my-work` — back to your own branch
4. `git merge main` — bring the new material into your branch

Git opens a tab in VS Code with a message for the merge. **Close the tab** to finish the
merge.

Check it — the folder `exercises/week01/1/` is there now, and the log shows the merge:

```bash
git log --oneline --graph
```

> 💡 **Short version:** on your own branch, `git pull --no-rebase origin main` does all four
> steps at once. `--no-rebase` tells Git to *merge* the new material into your branch.

---

## Done when…

- [ ] `git --version`, `node --version` and `npm --version` all print a version
- [ ] `git branch` shows `* my-work`
- [ ] Your page shows **Hello** and your name at <http://localhost:3000>
- [ ] `git log --oneline` shows your two commits
- [ ] After task 4: the folder `exercises/week01/1/` is there

## Stretch goals (optional)

- Open the **Source Control** view in VS Code (`Ctrl + Shift + G`). Find your commits, and look
  at the change you made in `index.html`.
- Run `git log --oneline --graph --all`. Find `main` and `my-work` — it's the diagram from the
  slides.
- Learn more Git: the free book **Pro Git**, chapters 1–3: <https://git-scm.com/book>

## Something went wrong?

- **`git`, `node`, `npm` or `code` is "not recognized" / "not found":** close VS Code
  completely and open it again. Still not found? Ask.
- **Windows, PowerShell says "running scripts is disabled on this system":** run this once,
  then try again:

  ```powershell
  Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
  ```

- **`git commit` says "Please tell me who you are":** you skipped task 2b.
- **Port 3000 is in use:** `npm start` picks another port. Use the address it prints.
- **The merge opened Vim anyway:** type `:wq` and press `Enter`. Then do task 2b again.
