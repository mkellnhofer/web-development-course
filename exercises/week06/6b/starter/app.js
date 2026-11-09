// Block 6b — interactive to-do list. Runs in the BROWSER.
// Open the page and follow ../README.md.

const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");

// TODO 1 — handle the form's "submit" event:
//   - e.preventDefault()  (no page reload)
//   - read input.value and .trim() it; if it's empty, stop (return)
//   - call addItem(text)
//   - clear the input (input.value = "")

// TODO 2 — build one item.
//   Create an <li> containing the text and a delete button
//   (<button class="delete">✕</button>), then append it to `list`.
//   Use createElement + textContent (NOT innerHTML) so user text stays safe.
function addItem(text) {
  // ...
}

// TODO 3 — one listener on `list` (event delegation):
//   - if a ".delete" button was clicked  → remove its <li>
//   - otherwise (the item itself)         → toggle the "done" class on its <li>
