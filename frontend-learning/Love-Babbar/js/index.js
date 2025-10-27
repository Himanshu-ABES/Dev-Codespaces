// ===============================
// JavaScript DOM & Core Concepts
// ===============================

// ---------------------------------
// 1. JavaScript Variables
// ---------------------------------
/*
Variables are containers for storing data values.
- var: function-scoped, can be redeclared and updated.
- let: block-scoped, can be updated but not redeclared in the same scope.
- const: block-scoped, cannot be updated or redeclared.
Best practice: Use let and const.
*/

let name = "John";
const PI = 3.14;
var age = 25;

// ---------------------------------
// 2. Functions and Types
// ---------------------------------
/*
Functions are blocks of code designed to perform a task.
Types:
- Function Declaration
- Function Expression
- Arrow Function
- IIFE (Immediately Invoked Function Expression)
- Constructor Function
*/

function greet() {
    console.log("Hello!");
}

const add = function(a, b) {
    return a + b;
};

const multiply = (a, b) => a * b;

(function() {
    // IIFE
    console.log("IIFE executed");
})();

function Person(name) {
    this.name = name;
}

// ---------------------------------
// 3. Scope, Closure, Scope Binding
// ---------------------------------
/*
Scope: Determines the accessibility of variables.
- Global Scope
- Function Scope
- Block Scope

Closure: A function that remembers its outer variables even after the outer function has executed.

Scope Binding: How variables are resolved in nested scopes.
*/

function outer() {
    let outerVar = "I am outside!";
    function inner() {
        console.log(outerVar); // Closure
    }
    return inner;
}
const myClosure = outer();
myClosure(); // Output: I am outside!

// ---------------------------------
// 4. Objects and Operations, 'this'
// ---------------------------------
/*
Objects are collections of key-value pairs.
- Create: {}, new Object()
- Access: dot notation, bracket notation
- Modify, delete properties
- Methods: functions inside objects
- 'this' keyword: refers to the object calling the method
*/

let user = {
    name: "Alice",
    age: 30,
    greet: function() {
        console.log("Hi, " + this.name);
    }
};
user.greet();
user.email = "alice@example.com";
delete user.age;

// Object.keys, Object.values, Object.entries
console.log(Object.keys(user));
console.log(Object.values(user));

// ---------------------------------
// 5. Arrays and Array Operations
// ---------------------------------
/*
Arrays are ordered collections.
- Create: [], new Array()
- Access by index
- Common methods: push, pop, shift, unshift, splice, slice, forEach, map, filter, reduce, find, includes
*/

let fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
fruits.pop();
fruits.unshift("mango");
fruits.splice(1, 1, "grape"); // Replace at index 1
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
let filtered = fruits.filter(fruit => fruit.startsWith("a"));

// ---------------------------------
// 6. DOM Manipulation
// ---------------------------------
/*
DOM (Document Object Model) represents the HTML structure as objects.
- Select: getElementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll
- Modify: innerHTML, textContent, style, setAttribute, removeAttribute
- Create: createElement, appendChild, insertBefore
- Remove: removeChild, remove
*/

console.log(document.getElementById("fheading")?.innerHTML);
console.log(document.querySelector(".home")?.innerHTML);

document.getElementById("fheading").innerHTML = "Hello JavaScript";
document.getElementById("fpara").textContent = "This is a simple JavaScript document.";

// Create and append new element
let newElement = document.createElement("h2");
newElement.textContent = "This is a new heading";
document.body.appendChild(newElement);

// Remove element
let elementToRemove = document.getElementById("spara");
if (elementToRemove) document.body.removeChild(elementToRemove);

// Add CSS styles
document.getElementById("fheading").style.cssText = "color: blue; background: lightgray; padding: 10px; text-align: center;";

// Loop through paragraphs and style
let pars = document.getElementsByTagName("p");
for (let i = 0; i < pars.length; i++) {
    pars[i].style.fontSize = "18px";
    pars[i].style.lineHeight = "1.6";
    pars[i].style.margin = "10px 0";
}

// Set and get attributes
let newLink = document.createElement("a");
newLink.href = "https://www.example.com";
newLink.target = "_blank";
newLink.textContent = "Go to Example.com";
document.body.appendChild(newLink);

let linkHref = newLink.getAttribute("href");
console.log("Link Href:", linkHref);

// ---------------------------------
// 7. Events & Event Handling
// ---------------------------------
/*
Events are actions that happen in the browser (click, input, load, etc).
- addEventListener(type, handler)
- removeEventListener(type, handler)
- Event object: event.target, event.type, event.preventDefault()
- Event propagation: bubbling, capturing
*/

let para = document.getElementById("fpara");
if (para) {
    para.style.cursor = "pointer";
    function paraClickHandler() {
        para.style.color = "red";
    }
    para.addEventListener("click", paraClickHandler);
    // To remove: para.removeEventListener("click", paraClickHandler);
}

// Prevent default link behavior
let link = document.querySelector("a");
if (link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Link click prevented!");
    });
}

// Event delegation example
let wrapper = document.getElementById("wrapper");
if (wrapper) {
    wrapper.addEventListener("click", function(event) {
        if (event.target.tagName === "P") {
            alert("You clicked on: " + event.target.textContent);
        }
    });
}

// DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function() {
    // DOM is fully loaded
    console.log("DOM fully loaded and parsed");
});

// ---------------------------------
// 8. Handling Forms with JS
// ---------------------------------
/*
- Access form elements: document.forms, document.getElementById
- Read/write input values: input.value
- Validate input, prevent default submit
*/

let myForm = document.getElementById("myForm");
if (myForm) {
    myForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let inputVal = document.getElementById("myInput").value;
        if (inputVal.trim() === "") {
            alert("Input cannot be empty!");
        } else {
            alert("Form submitted with: " + inputVal);
        }
    });
}

// ---------------------------------
// 9. Asynchronous JS (Timeouts, Intervals, Promises, Async/Await)
// ---------------------------------
/*
- setTimeout(fn, ms): runs fn after ms milliseconds
- setInterval(fn, ms): runs fn every ms milliseconds
- Promises: handle async operations, .then(), .catch(), .finally()
- async/await: syntactic sugar for promises
*/

console.log("Start");

setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);

let intervalId = setInterval(() => {
    console.log("Interval running");
    clearInterval(intervalId); // Stops after first run
}, 3000);

// Promise example
let promise1 = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a === 2) resolve("Success");
    else reject("Failed");
});
promise1.then(msg => console.log("Then: " + msg)).catch(msg => console.log("Catch: " + msg));

// Async/Await example
async function fetchUsers() {
    try {
        let response = await fetch("https://api.github.com/users");
        let users = await response.json();
        console.log(users);
    } catch (err) {
        console.log(err);
    }
}
// fetchUsers();

// ---------------------------------
// 10. Performance: DOM Manipulation
// ---------------------------------
/*
- Directly appending many elements to DOM is slow.
- Use DocumentFragment or append to a container, then append container to DOM.
*/

let start = performance.now();
for (let i = 0; i < 1000; i++) {
    let para = document.createElement("p");
    para.textContent = "This is paragraph " + (i + 1);
    document.body.appendChild(para);
}
let end = performance.now();
console.log("Direct append: " + (end - start) + " ms");

let start1 = performance.now();
let frag = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
    let para = document.createElement("p");
    para.textContent = "This is paragraph " + (i + 1);
    frag.appendChild(para);
}
document.body.appendChild(frag);
let end1 = performance.now();
console.log("Using DocumentFragment: " + (end1 - start1) + " ms");

// ---------------------------------
// 11. Cheatsheet
// ---------------------------------
/*
Variables: let, const, var
Functions: function, arrow, IIFE, constructor
Scope: global, function, block
Closure: function inside function, remembers outer scope
Objects: {}, methods, this, Object.keys/values/entries
Arrays: [], push, pop, shift, unshift, splice, slice, map, filter, reduce
DOM: getElementById, querySelector, createElement, appendChild, innerHTML, style
Events: addEventListener, removeEventListener, event object, preventDefault
Forms: input.value, form.submit, validation
Async: setTimeout, setInterval, Promise, async/await
*/

// ---------------------------------
// 12. Detailed Notes (in comments)
// ---------------------------------
/*
--- Variables ---
- Use let for variables that change, const for constants.
- var is function-scoped and can cause bugs due to hoisting.

--- Functions ---
- Function declarations are hoisted, expressions are not.
- Arrow functions do not have their own 'this'.
- IIFE runs immediately after definition.

--- Scope & Closures ---
- Variables declared with let/const are block-scoped.
- Closures allow inner functions to access outer variables even after the outer function has finished.

--- Objects ---
- Objects can have properties and methods.
- 'this' refers to the object calling the method.
- Use Object.keys/values/entries for iteration.

--- Arrays ---
- Arrays are zero-indexed.
- Use map/filter/reduce for functional programming.
- Spread operator (...) can copy or merge arrays.

--- DOM ---
- Use querySelector for CSS-like selection.
- Always check if element exists before manipulating.
- Use createElement and appendChild to add elements.

--- Events ---
- addEventListener is preferred over inline event handlers.
- Use event delegation for dynamic elements.
- Use event.preventDefault() to stop default actions.

--- Forms ---
- Validate input before submitting.
- Use input.value to get/set values.

--- Async JS ---
- setTimeout/setInterval for delays and intervals.
- Promises for async operations, use .then/.catch.
- async/await for cleaner async code.

--- Performance ---
- Minimize direct DOM manipulation in loops.
- Use DocumentFragment or append to a container.

--- Interview Questions & Answers ---

1. What is the difference between var, let, and const?
    - var is function-scoped and can be redeclared/updated; it is hoisted and can cause bugs. let is block-scoped, can be updated but not redeclared in the same scope. const is block-scoped and cannot be updated or redeclared.

2. Explain closures in JavaScript.
    - A closure is a function that remembers variables from its outer (enclosing) scope even after that scope has finished executing. This allows functions to have private variables.

3. What is event delegation?
    - Event delegation is a technique where a single event listener is added to a parent element to handle events for its child elements, using event bubbling. This is efficient for dynamic content.

4. How does 'this' keyword work in JS?
    - 'this' refers to the object that is executing the current function. In a method, it refers to the object; in a function, it refers to the global object (or undefined in strict mode); in event handlers, it refers to the element.

5. What are arrow functions and how are they different?
    - Arrow functions are a concise syntax for writing functions. They do not have their own 'this', arguments, or super, and cannot be used as constructors.

6. How do you handle asynchronous code in JS?
    - Using callbacks, promises (.then/.catch), and async/await for cleaner, more readable asynchronous code.

7. What is the DOM and how do you manipulate it?
    - The DOM (Document Object Model) is a tree-like structure representing HTML elements. You can manipulate it using methods like getElementById, querySelector, createElement, appendChild, innerHTML, etc.

8. What is the difference between == and ===?
    - == compares values after type coercion (loose equality), while === compares both value and type (strict equality).

9. How do you clone an object in JS?
    - Use Object.assign({}, obj), the spread operator {...obj}, or structuredClone(obj) for deep cloning (or JSON.parse(JSON.stringify(obj)) for simple objects).

10. What is a promise? How is it used?
     - A promise is an object representing the eventual completion or failure of an async operation. Use .then() for success, .catch() for errors, and .finally() for cleanup.

11. What is the difference between null and undefined?
     - undefined means a variable has been declared but not assigned a value. null is an assignment value that represents no value.

12. How does prototypal inheritance work?
     - Objects can inherit properties and methods from other objects via their prototype chain. This allows for shared behavior and efficient memory usage.

13. What is a callback function?
     - A callback is a function passed as an argument to another function, to be executed later, often after an async operation.

14. How do you prevent default form submission?
     - Call event.preventDefault() inside the form's submit event handler.

15. What is the difference between map and forEach?
     - map returns a new array with the results of calling a function on every element. forEach executes a function for each element but returns undefined.

16. How do you remove a property from an object?
     - Use the delete operator: delete obj.property;

17. What is hoisting in JS?
     - Hoisting is JavaScript's behavior of moving declarations (not initializations) to the top of their scope before code execution.

18. How do you debounce or throttle a function?
     - Debounce: ensures a function is called only after a certain time has passed since the last call. Throttle: ensures a function is called at most once in a specified time interval.

19. What is the event loop?
     - The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading operations to the browser and executing callbacks from the message queue.

20. How do you deep copy an array or object?
     - Use structuredClone(obj), or JSON.parse(JSON.stringify(obj)) for simple objects/arrays. For complex cases, use libraries like lodash's _.cloneDeep.
*/

// ===============================
// End of JavaScript Core Concepts
// ===============================
