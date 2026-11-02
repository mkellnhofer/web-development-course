// Block 5b — Objects, Arrays, Closures, and a Module.
// Run with:  node main.js   (or: npm start)

import { Stack } from "./stack.js";

console.log("=== Task 1: object as a dictionary ===");
// TODO 1 — Count how many times each word appears in `words`, using a plain
//   object { } as a dictionary. Log the tally.
const words = ["red", "blue", "red", "green", "blue", "red"];
// expected: { red: 3, blue: 2, green: 1 }

console.log("=== Task 2: dynamic arrays + transforms ===");
const nums = [1, 2, 3, 4, 5, 6];
// TODO 2a — push 7 and 8 onto nums, then log it.
// TODO 2b — `doubled`: every number * 2            (map)
// TODO 2c — `evens`:   only the even numbers         (filter)
// TODO 2d — `total`:   the sum of all numbers        (reduce)
// Log each result.

console.log("=== Task 3: a closure ===");
// TODO 3 — Write makeCounter() that returns a function. Each call increments
//   and returns a PRIVATE count. Show that the count can't be read from outside.
//   const next = makeCounter();  next() -> 1;  next() -> 2

console.log("=== Task 4: the Stack module ===");
// TODO 4 — Finish ./stack.js, then this should print 2, "b", "a", 1:
const s = new Stack();
s.push("a");
s.push("b");
console.log("size:", s.size); // 2
console.log("pop :", s.pop()); // "b"
console.log("peek:", s.peek()); // "a"
console.log("size:", s.size); // 1
