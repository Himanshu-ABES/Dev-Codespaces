// console.log("Hello world!");
// console.log(2+3);

// // variable and datatypes in javascript
// var name = "John"; // string
// // var age = 25; // number
// var isStudent = true; // boolean    
// var address; // undefined
// var phone = null; // null

// console.log(name);
// console.log(age);
// console.log(isStudent);
// console.log(address); // undefined
// console.log(phone);
// console.log(hero); // not defined error or Temporal Dead Zone (TDZ) error for let and const

// // let and const
// let city = "New York";
// const country = "USA";

// console.log(city);
// console.log(country);

// console.log(typeof(name)); // string

// // Note: var is either function scoped or globally scoped while let and const are block scoped.
// // var can be re-declared and updated while let can be updated but not re-declared and const can neither be updated nor re-declared.

// // var x = 10;
// // var x = 20; // re-declaration is allowed
// // x = 30; // update is allowed
// // console.log(x); // 30

// let y = 10;
// // let y = 20; // re-declaration is not allowed
// y = 30; // update is allowed
// console.log(y); // 30

// const z = 10;
// // const z = 20; // re-declaration is not allowed
// // z = 30; // update is not allowed
// console.log(z); // 10

// // Note: Always use let and const instead of var to avoid issues related to scope and re-declaration.

// // variable naming conventions in javascript:
// // 1. variable names can contain letters, digits, underscores, and dollar signs. eg. myVariable, my_variable, my$variable, myVariable1
// // 2. variable names must begin with a letter, underscore, or dollar sign. eg. myVariable, _myVariable, $myVariable
// // 3. variable names are case sensitive. eg. myVariable and myvariable are different variables
// // 4. variable names cannot be a reserved keyword. eg. var, let, const, if, else, for, while, function, return, etc.

// // camelCase is the most common convention in javascript. eg. myVariableName
// // snake_case is also used sometimes. eg. my_variable_name
// // PascalCase is used for naming classes. eg. MyClassName

// // no of reserved keywords in javascript: 64

// // operators in javascript:
// // arithmetic operators: +, -, *, /, %, ++, --
// // assignment operators: =, +=, -=, *=, /=, %= // also known as shorthand notation
// // comparison operators: ==, ===, !=, !==, >, <, >=, <= // return true or false
// // logical operators: &&, ||, !
// // bitwise operators: &, |, ^, ~, <<, >>, >>>
// // and mein dono true hone chahiye, or mein ek bhi true ho to true return karega, xor mein dono alag hone chahiye true return karne ke liye, not mein true ko false aur false ko true kar dega

// let a = 10;
// let b = 5;

// console.log(a + b); // 15
// console.log(a - b); // 5
// console.log(a * b); // 50
// console.log(a / b); // 2
// console.log(b / a); // 0.5
// console.log(a % b); // 0
// console.log(a++); // 10 (returns the value before incrementing)
// console.log(++a); // 12 (increments first, then returns the value)
// console.log(b--); // 5 (returns the value before decrementing)
// console.log(--b); // 3 (decrements first, then returns the value)

// console.log(a == b); // false (checks value only)
// console.log(a === b); // false (checks value and type)
// console.log(a != b); // true (checks value only)
// console.log(a !== b); // true (checks value and type)
// console.log(a > b); // true
// console.log(a < b); // false
// console.log(a >= b); // true
// console.log(a <= b); // false

// console.log(a > 5 && b < 10); // true (both conditions must be true)
// console.log(a > 5 || b > 10); // true (at least one condition must be true)
// console.log(!(a > 5)); // false (negates the condition)

// // truthy and falsy values in javascript:
// // falsy values: undefined, null, 0, false, NaN, "" (empty string)
// // truthy values: which is not falsy

// // shortcircuit evaluation in javascript:
// // OR (||) operator returns the first truthy value or the last value if all are falsy
// console.log(false || true || false || true); // true
// console.log(0 || "" || null || "Hello" || 42); // "Hello"
// console.log(0 || "" || null || undefined); // undefined (all are falsy, returns the last value)

// // AND (&&) operator returns the first falsy value or the last value if all are truthy
// console.log(true && true && true); // true
// console.log("Hello" && 42 && true); // true (all are truthy, returns the last value)
// console.log("Hello" && 0 && true); // 0 (first falsy value)
// console.log(true && false && true); // false (first falsy value)

// console.log(2|5); // 7 (bitwise OR) 2 ko binary mein 0010 aur 5 ko binary mein 0101 likhenge, dono ka OR karenge to 0111 hi milega jo decimal mein 7 hoga
// console.log(2&5); // 0 (bitwise AND) 2 ko binary mein 0010 aur 5 ko binary mein 0101 likhenge, dono ka AND karenge to 0000 hi milega jo decimal mein 0 hoga
// console.log(2^5); // 7 (bitwise XOR) 2 ko binary mein 0010 aur 5 ko binary mein 0101 likhenge, dono ka XOR karenge to 0111 hi milega jo decimal mein 7 hoga
// console.log(~2); // -3 (bitwise NOT) 2 ko binary mein 0010 likhenge, iska NOT karenge to 1101 hi milega jo decimal mein -3 hoga (2's complement)
// console.log(2<<1); // 4 (left shift) 2 ko binary mein 0010 likhenge, ise left shift karenge to 0100 hi milega jo decimal mein 4 hoga
// console.log(5>>1); // 2 (right shift) 5 ko binary mein 0101 likhenge, ise right shift karenge to 0010 hi milega jo decimal mein 2 hoga

// left shift karte time value double hoti hai aur right shift karte time value half ho jati hai

// conditionals in javascript:
// let age = 20;
// if (age < 18){
//     console.log("You are a minor.");
// }
// else{
//     console.log("You are an adult.");
// }

// swtich-case expressions in javascript:
// let marks = 85;
// switch(marks){
//     case 90:
//         console.log("A+ grade");
//         break;
//     case 80:
//         console.log("A grade");
//         break;
//     case 70:
//         console.log("B grade");
//         break;
//     default:
//         console.log("C grade");
// }
// now switch case mein phle ek variable declare karte hain jiska value hum check karna chahte hain, phir switch ke andar us variable ko pass karte hain aur case ke andar us variable ke possible values ko check karte hain. agar variable ka value case ke value ke barabar hota hai to us case ke andar ka code execute hota hai. break statement ka use karte hain taaki ek case ke baad dusre case mein na jaye. agar koi bhi case match nahi hota to default case execute hota hai.

// loops and string in javascript:
// there are various types of loops in javascript:
// 1. for loop
// 2. while loop
// 3. do-while loop
// 4. for-in loop
// 5. for-of loop

// // for-loop example:
// for(let i = 1; i<=10; i++){
//     console.log(i); // 1 2 3 4 5
// }

// // while-loop example:
// let i = 5
// while (i >= 0){
//     console.log(i); // 5 4 3 2 1 0
//     i--;
// }

// break and continue statements in loops:
// break kehta hai ki jis bhi iteration par ho whi ruk jo and loop se bahar aa jao,
// continue kehta hai ki jis bhi iteration par ho us iteration ko skip kar do aur next iteration par chalo

// for (let i = 1; i<=6; i++){
//     if (i === 4){
//         break;
//     }
//     else{
//         console.log(i); // 1 2 3 isme 4=4 par condition true hogi aur loop break ho jayega
//     }
// }

// for(let i = 1; i<=6; i++){
//     if (i === 4){
//         continue;
//     }
//     else{
//         console.log(i); // 1 2 3 5 6 isme 4=4 par condition true hogi aur continue statement execute hoga jisse 4 skip ho jayega aur loop continue karega
//     }
// }

// do-while loop in javascript:
// let i = 0;
// do{
//     console.log(i);
//     i++;
// }
// while(i<=10)


// String in javascript:
// let firstName = "John";
// let lastName = `Doe
// This is similar
// to pre tag in html`;
// let fullName = new String("John Doe");

// difference between string literal and string object is that string literal is a primitive data type while string object is an object. String object has properties and methods while string literal does not have properties and methods.

// String Operations in javascript:
// let str1 = "Hello";
// let str2 = "World";

// let output = str1 + str2; // concatenation
// let output2 = `${str1} ${str2}`; // template literals
// let output3 = str1.concat(" ", str2); // concat method
// console.log(output); // HelloWorld

// printing length of string
// console.log(str1.length); // 5

// accessing characters in string
// console.log(str1[0]); // H
// console.log(str1.charAt(1)); // e

// finding index of a character in string
// console.log(str1.indexOf("l")); // 2 (first occurrence)
// console.log(str1.lastIndexOf("l")); // 3 (last occurrence)

// slicing a string
// let str1 = "Hello";
// // console.log(str1.slice(0, 3)); // Hel (start index inclusive, end index exclusive)
// console.log(str1.slice(0, )); // Hel (start index inclusive, end index exclusive)
// console.log(str1.substring(0, 3)); // Hel (same as slice method)
// console.log(str1.substr(0, 3)); // Hel (start index and length)

// replacing a part of string
// console.log(str1.replace("H", "h")); // hello (only first occurrence)
// console.log(str1.replaceAll("l", "L")); // HeLLo (all occurrences)

// changing case of string
// console.log(str1.toUpperCase()); // HELLO
// console.log(str1.toLowerCase()); // hello

// trimming whitespace from string
// let str3 = "   Hello World   ";
// console.log(str3.trim()); // "Hello World" (removes whitespace from both ends)
// console.log(str3.trimStart()); // "Hello World   " (removes whitespace from start)
// console.log(str3.trimEnd()); // "   Hello World" (removes whitespace from end)

// splitting a string
// let str4 = "apple,banana,cherry";
// console.log(str4.split(",")); // ["apple", "banana", "cherry"] (splits string into array based on delimiter)

// checking if a string includes a substring
// console.log(str1.includes("lo")); // true
// console.log(str1.startsWith("He")); // true
// console.log(str1.endsWith("lo")); // true

// repeating a string
// console.log(str1.repeat(3)); // HelloHelloHello (repeats the string n times)

// // functions in javascript:
// function greet(name){
//     return `Hello, ${name}!`;
// }
// // console.log(greet("John")); // Hello, John!

// function sum(a,b){
//     return a + b;
// }
// let sumResult = sum(5, 10);
// // console.log(sumResult); // 15

// // arrow functions in javascript:
// const multiply = (a, b) => {
//     return a * b;
// }
// // console.log(multiply(5, 10)); // 50

// const add = (a, b) => a + b; // if there is only one expression, we can omit the curly braces and return statement

// const square = x => x * x; // if there is only one parameter, we can omit the parentheses and if there is only one expression, we can omit the curly braces and return statement
// // console.log(square(5)); // 25

// reference types in javascript: (PRIMITIVE TAKES STACK MEMORY WHILE REFERENCE TAKES HEAP MEMORY)
// 1. Object
// 2. Array
// 3. Function

// Object in javascript: collection of key value pairs
// let person = {
//     name: "John",
//     age: 30,
//     isStudent: false,
//     address: {
//         street: "123 Main St",
//         city: "New York",
//         state: "NY"
//     },
//     hobbies: ["reading", "traveling", "swimming"],
//     greet: sayHello = name => `Hello, ${name}!`
// };

// console.log(person); // entire object
// console.log(person.name); // John (dot notation)
// console.log(person['age']); // 30 (bracket notation)
// console.log(person.age); // 30 (dot notation)

// study about shallow copy and deep copy in javascript:
// shallow copy mein agar object ke andar koi aur object hai to wo reference copy hota hai, yani dono object same nested object ko point karte hain. isliye agar ek object ke nested object ko change karte hain to dusre object ke nested object bhi change ho jata hai.
// deep copy mein pura object hi copy hota hai, yani dono object alag alag nested object ko point karte hain. isliye agar ek object ke nested object ko change karte hain to dusre object ke nested object change nahi hota.

// arrays in javascript:
// let arr = [1, 'Hello', true, null, undefined, {name: 'John', age: 30}, [1, 2, 3]];

// // console.log(arr); // entire array
// // console.log(arr[0]); // 1 (accessing first element)
// // console.log(arr[5]); // {name: 'John', age: 30} (accessing object at index 5)
// // console.log(arr[6]); // [1, 2, 3] (accessing array at index 6)
// // console.log(arr.length); // 7 (length of array)

// // array methods in javascript:
// // 1. push(): adds one or more elements to the end of an array and returns the new length of the array
// arr.push(42);
// console.log(arr); // [1, 'Hello', true, null, undefined, {name: 'John', age: 30}, [1, 2, 3], 42]

// // 2. pop(): removes the last element from an array and returns that element
// let poppedElement = arr.pop();
// console.log(poppedElement); // 42
// console.log(arr); // [1, 'Hello', true, null, undefined, {name: 'John', age: 30}, [1, 2, 3]]

// // 3. unshift(): adds one or more elements to the beginning of an array and returns the new length of the array
// arr.unshift(0);
// console.log(arr); // [0, 1, 'Hello', true, null, undefined, {name: 'John', age: 30}, [1, 2, 3]]

// // 4. shift(): removes the first element from an array and returns that element
// let shiftedElement = arr.shift();
// console.log(shiftedElement); // 0
// console.log(arr); // [1, 'Hello', true, null, undefined, {name: 'John', age: 30}, [1, 2, 3]]

// // 5. indexOf(): returns the first index at which a given element can be found in the array, or -1 if it is not present
// console.log(arr.indexOf(true)); // 2
// console.log(arr.indexOf('World')); // -1

// // 6. includes(): determines whether an array includes a certain value among its entries, returning true or false as appropriate
// console.log(arr.includes('Hello')); // true
// console.log(arr.includes('World')); // false

// // 7. splice(): changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// arr.splice(2, 1, 'World'); // at index 2, remove 1 element and add 'World'
// console.log(arr); // [1, 'Hello', 'World', true, null, undefined, {name: 'John', age: 30}, [1, 2, 3]]

// // 8. slice(): returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
// let newArr = arr.slice(1, 4); // from index 1 to index 4 (not included)
// console.log(newArr); // ['Hello', 'World', true]

// // 9. join(): joins all elements of an array into a string and returns this string
// let str = arr.join(' - '); // join elements with ' - ' separator
// console.log(str); // "1 - Hello - World - true - null - undefined - [object Object] - 1,2,3"

// // 10. forEach(): executes a provided function once for each array element
// arr.forEach((element, index) => {
//     console.log(`Element at index ${index}: ${element}`);
// });

// // 11. map(): creates a new array populated with the results of calling a provided function on every element in the calling array
// let squareArr = [1, 2, 3, 4, 5].map(num => num * num);
// console.log(squaredArr); // [1, 4, 9, 16, 25]

// let arr1 = [10, 20, 30];
// let ansArr = arr1.map((number) => {
//     return number**2;
// });

// 12. filter(): creates a new array with all elements that pass the test implemented by the provided function
// let evenArr = [1, 2, 3, 4, 5, 6].filter(num => num % 2 === 0);
// console.log(evenArr); // [2, 4, 6]

// let arr2 = [10, 15, 20, 25, 30];
// let ansArr2 = arr.filter((number) => {
//     return number > 15;
// });
// console.log(ansArr2); // [20, 25, 30]

// 13. reduce(): executes a reducer function (that you provide) on each element of the array, resulting in a single output value
// let sumOfArr = [1, 2, 3, 4, 5].reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sumOfArr); // 15

// let arr3 = [10, 20, 30, 40];
// let ansArr3 = arr3.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);
// console.log(ansArr3); // 100

// 14. sort(): sorts the elements of an array in place and returns the sorted array
// let arr4 = [5, 3, 8, 1, 2];
// arr4.sort((a, b) => a - b); // ascending order
// console.log(arr4); // [1, 2, 3, 5, 8]
// arr4.reverse(); // descending order
// console.log(arr4); // [8, 5, 3, 2, 1]

// foreach loop in javascript:
// let arr = [10, 20, 30, 40, 50];
// arr.forEach((element, index) => {
//     console.log(`${index}: ${element}`);
// });
// console.log(arr.length); // 5

// hoisting in javascript:
// hoisting mein hum variable aur function declarations ko unke scope ke top par le aate hain. isliye hum variable aur function ko unke declaration se pehle bhi use kar sakte hain. lekin ye sirf declarations ke liye hota hai, initializations ke liye nahi.
// variable-hoisting : isme var keyword se declare kiye gaye variables hoist hote hain aur unki value undefined hoti hai. let aur const se declare kiye gaye variables hoist nahi hote hain aur unhe unke declaration se pehle use karne par ReferenceError aata hai.
// function-hoisting : isme function declarations hoist hote hain aur unhe unke declaration se pehle bhi call kiya ja sakta hai. lekin function expressions (jo variable mein store kiye gaye hain) hoist nahi hote hain aur unhe unke declaration se pehle call karne par TypeError aata hai.


// class and objects in javascript:
// class Human {

// }

// const obj1 = new Human();

// stack in javascript:
// call stack: it stores the functions sequence in which they are executed in LIFO order

// functions are also known as first class citizens due to the following reasons:
// 1. it can be assigned to variable
// 2. can be passed as an argument to another function
// 3. it can be used to return something
// 4. can be used in dsa

// let obj = {
//     name : "John",
//     age : 20,
//     greet : () => {
//         console.log("hello `${obj.name}`");
//     }
// }
// console.log(obj);

// // classes and default parameters in javascript:
// class Person {
//     // properties
//     age = 13; // public by default
//     #wt = 80; // marked explicitly as private using #
//     height = 180;
    
//     // behaviour
//     walking(){
//         console.log('I am walking');
//     }

//     running(){
//         console.log('I am running');
//     }

//     get wt(){
//         return this.#wt;
//     }

//     set wt(newWt){
//         this.#wt = newWt;
//     }
// }

// let obj = new Person();
// console.log(obj.age);
// console.log(obj.height);
// // console.log(obj.wt); // error: private property cannot be accessed outside the class, we use getter and setter to access private properties
// obj.walking();
// obj.running();

// // make sure that getter and settter are defined in the class body only

// default parameters in javascript:
// function add(a=0,b=7){
//     return a+b;
// }

// console.log(add());


// in-built objects in javascript:
// 1. Math object
// console.log(Math.PI); // 3.141592653589793

// let arr = [3, 5, 1, 8, 2];
// console.log(Math.max(...arr)); // 8 (spread operator to pass array elements as individual arguments)

// // ... is known as spread operator, it is used to spread the elements of an array or object to individual elements

// console.log(Math.min(...arr)); // 1
// // console.log(Math.sum(...arr)); // NaN (Math object does not have sum method)
// // console.log(Math.avg(...arr)); // NaN (Math object does not have avg method)
// console.log(Math.sqrt(16)); // 4
// console.log(Math.abs(-5)); // 5
// console.log(Math.pow(2, 3)); // 8
// console.log(Math.floor(4.7)); // 4 (rounds down to nearest integer)
// console.log(Math.ceil(4.2)); // 5 (rounds up to nearest integer)
// console.log(Math.round(4.5)); // 5 (rounds to nearest integer)
// console.log(Math.random()); // random number between 0 and 1
// console.log(Math.random(...arr)); // NaN (Math.random() does not take any arguments)

// 2. Date object
// let date = new Date();
// console.log(date); // current date and time
// console.log(date.getFullYear()); // current year
// console.log(date.getMonth()); // current month (0-11)
// console.log(date.getDate()); // current date (1-31)
// console.log(date.getDay()); // current day (0-6) (0=Sunday, 1=Monday, ..., 6=Saturday)
// console.log(date.getHours()); // current hours (0-23)
// console.log(date.getMinutes()); // current minutes (0-59)
// console.log(date.getSeconds()); // current seconds (0-59)
// console.log(date.getMilliseconds()); // current milliseconds (0-999)
// console.log(date.getTime()); // milliseconds since January 1, 1970


// object clonning in javascript:
// jab hum kisi object ko dusre object mein assign karte hain to wo reference copy hota hai, yani dono object same memory location ko point karte hain. isliye agar ek object ke property ko change karte hain to dusre object ke property bhi change ho jata hai. is problem ko solve karne ke liye hum object cloning ka use karte hain, jisme hum ek object ka pura copy bana lete hain jisse dono object alag alag memory location ko point karte hain. isliye agar ek object ke property ko change karte hain to dusre object ke property change nahi hota.

// it is similar to call by value and call by reference in functions

// 1. spread operator
// let obj1 = {
//     name: "John",
//     age: 30
// };

// let obj2 = {...obj1}; // spread operator to clone obj1 to obj2
// obj2.name = "Doe"; // changing obj2 name property
// console.log(obj1); // {name: "John", age: 30} (obj1 remains unchanged)
// console.log(obj2); // {name: "Doe", age: 30} (obj2 is changed)

// 2. Object.assign() method
// let obj1 = {
//     name: "John",
//     age: 30
// };

// let obj2 = Object.assign({}, obj1); // Object.assign() method to clone obj1 to obj2
// obj2.name = "Doe"; // changing obj2 name property
// console.log(obj1); // {name: "John", age: 30} (obj1 remains unchanged)
// console.log(obj2); // {name: "Doe", age: 30} (obj2 is changed)

// 3. iteration method
// let obj1 = {
//     name: "John",
//     age: 30
// };

// let obj2 = {};
// for (let key in obj1){
//     obj2[key] = obj1[key]; // iterating through obj1 and assigning its properties to obj2
// }
// obj2.name = "Doe"; // changing obj2 name property
// console.log(obj1); // {name: "John", age: 30} (obj1 remains unchanged)
// console.log(obj2); // {name: "Doe", age: 30} (obj2 is changed)

// Garbage Collector in javascript:
// it is an automatic memory management feature in javascript that helps in reclaiming memory occupied by objects that are no longer in use or reachable in the program. it helps in preventing memory leaks and optimizing memory usage.
// it works by periodically checking for objects that are no longer referenced by any part of the program and freeing up the memory occupied by those objects.
// it uses algorithms like mark-and-sweep, reference counting, and generational garbage collection to identify and collect garbage objects.
// developers do not have direct control over the garbage collector, but they can help it by avoiding circular references, nullifying references to unused objects, and using weak references when appropriate.

