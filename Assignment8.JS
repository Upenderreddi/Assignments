Task1:
var name = "Alice";

let age = 25;

const isStudent = true;
// Reassign var to a number (was string)
name = 42; 

age = false; 

isStudent = "Yes"; 

1.var: Function-scoped and can be reassigned or change type.
  Example: Changing `"Alice"` to `42` is valid.

2.let: Block-scoped, can also be reassigned or change type.
  Example: Changing `25` to `false` is valid.

3.const: Block-scoped, cannot be reassigned.
  Example: Changing `true` to `"Yes"` causes an error.

Task:2

let userName = "Rajesh";        // camelCase is common and valid
let _age = 30;                 // underscore prefix is valid
let $balance = 100.50;         // dollar sign is valid
let isLoggedIn = true;         // starts with a lowercase letter, valid
let user1 = "Kiran";             // includes number but doesn't start with it, valid

let 1stUser = "Ram";   // Invalid: Cannot start with a number

let user name = "Upendra";   // Invalid: Variable names cannot contain spaces

let let = "value";         // Invalid: 'let' is a reserved keyword in JavaScript


Task:3

console.log(typeof "JavaScript");  // string
console.log(typeof 2024);          // number
console.log(typeof true);          // boolean
console.log(typeof undefined);     // undefined
console.log(typeof null);          // object ❗️(odd behavior)
console.log(typeof [1, 2, 3]);     // object ❗️(arrays are objects)
console.log(typeof {name: "Alex"}); // object
console.log(typeof function() {}); // function

Task:4

Primitive types:

let a = 10;
let b = a;
b = 20;

console.log("a:", a); // Output: 10
console.log("b:", b); // Output: 20

Reference type:

let obj1 = { name: "Sam" };
let obj2 = obj1;
obj2.name = "Alex";

console.log("obj1:", obj1); // Output: { name: "Sai" }
console.log("obj2:", obj2); // Output: { name: "Sai" }

Task 5:

let data;

// Step 1: Assign a number
data = 100;
console.log("Value:", data, "| Type:", typeof data);  // number

// Step 2: Change to string
data = "Now I'm a string";
console.log("Value:", data, "| Type:", typeof data);  // string

// Step 3: Change to object
data = { value: 100 };
console.log("Value:", data, "| Type:", typeof data);  // object

Task:6

a.
let resultA = "5" + 3;
console.log(resultA, typeof resultA);

Explanation:
Output: "53" string

Final Type: string

Explanation: The + operator with a string triggers string concatenation. The number 3 is coerced into a string, resulting in "5" + "3" → "53".

b.

let resultB = "5" - 2;
console.log(resultB, typeof resultB);

Explanation: 

Output: 3 number

Final Type: number

Explanation: The - operator triggers numeric coercion. "5" becomes the number 5, then 5 - 2 → 3.

C.
let resultC = true + 1;
console.log(resultC, typeof resultC);

Explanation: 
Output: 2 number

Final Type: number

Explanation: true is coerced to 1. So 1 + 1 → 2.

d.

let resultD = "hello" * 2;
console.log(resultD, typeof resultD);

Explanation:

Output: NaN number

Final Type: number

Explanation: JavaScript tries to coerce "hello" to a number (which fails), so the result is NaN (Not-a-Number), which still has the type "number".


e.

let resultE = null + 5;
console.log(resultE, typeof resultE);

Explanation: 

Output: 5 number

Final Type: number

Explanation: null is coerced to 0 in numeric operations. So 0 + 5 → 5.



