// Block 5a — Values & Functions
// Run with:  node script.js   (or: npm start)
// Work through the TODOs top to bottom. Use console.log to check yourself.

console.log("=== Task 1: Equality ===");

// TODO 1a — PREDICT each result in the comment BEFORE running, then compare.
console.log(1 == "1"); //            predict: ____
console.log(1 === "1"); //           predict: ____
console.log(0 == ""); //             predict: ____
console.log(null == undefined); //   predict: ____
console.log(null === undefined); //  predict: ____

// TODO 1b — This guard is buggy because of `==`. It should report an age as
//   "missing" only when it's empty/absent — but "0" is a real value a user typed.
//   Fix isAgeMissing so that isAgeMissing("0") is FALSE.
function isAgeMissing(age) {
  return age == false; // BUG: 0, "0", "" all sneak through as "missing"
}
console.log("missing '' :", isAgeMissing("")); //  want: true
console.log("missing '0':", isAgeMissing("0")); // want: false  ← currently wrong

console.log("=== Task 2: Truthiness & optionals ===");

// TODO 2a — Print each value together with "truthy" or "falsy".
const values = [false, 0, "0", "", "hello", null, undefined, [], NaN];
// for (const v of values) { ... use Boolean(v) or an if ... }
// Print v with console.log("%O", v). Then strings keep their quotes, and you
// can tell 0 from "0".

// TODO 2b —`user` has no address. Reading user.address.city would CRASH.
//   Use optional chaining (?.) to read it safely; it should be undefined.
const user = { name: "Ada" };
// const city = ____;
// console.log("city:", city); // want: undefined

console.log("=== Task 3: Functions as values ===");

// TODO 3a — Store a function in a variable `square` that returns n * n.

// TODO 3b — Write applyTwice(fn, x) that returns fn(fn(x)).
//   Then: console.log(applyTwice(square, 3)) → 81

// TODO 3c — Write adder(n) that RETURNS a function adding n to its argument.
//   const add10 = adder(10);  console.log(add10(5)) → 15
