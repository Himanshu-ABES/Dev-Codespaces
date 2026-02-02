alert("hey!");
console.log("hello world");

// here console is an object and inside this object we have lots of methods such as log etc

let name = "Himanshu";
let whatDoYouWannaBeInYourLife = "a web developer";
const gender = "male";
let twitterHandle = "@explore_himanshu";

console.log(name);
console.log(whatDoYouWannaBeInYourLife);
console.log(gender);
console.log(twitterHandle);

let num = 10;
let num2 = -20;
let num3 = 3.14;
console.log(typeof num);

let fistFavNumber = 7;
let secondFavNumber = 17;
console.log(fistFavNumber + secondFavNumber);
console.log(fistFavNumber - secondFavNumber);
console.log(fistFavNumber * secondFavNumber);
console.log(fistFavNumber / secondFavNumber);
console.log(fistFavNumber % secondFavNumber);
console.log(fistFavNumber ** secondFavNumber);


// Boolean Values in JavaScript
let isWebDeveloper = true;
let isFoodLover = false;
console.log(typeof isWebDeveloper);
console.log(isWebDeveloper);
console.log(isFoodLover);

// Null and Undefined in JavaScript
let undef = undefined;
let empty = null;
console.log(undef);
console.log(empty);
console.log(typeof undef);
console.log(typeof empty);

// NaN in JavaScript
let myPhoneNumber = "9876543210";
let tryToConvertStringToNumber = Number(myPhoneNumber); // typecasting
console.log(tryToConvertStringToNumber);
console.log(typeof tryToConvertStringToNumber);

// Truthy and Falsy Values in JavaScript
// 1. Falsy Values: false, 0, "", null, undefined, NaN
// 2. Truthy Values: All values other than falsy values

let isJavaScriptFun = true;
let isJsHard = false;
let favNumber = 17;
console.log(favNumber + undefined); // NaN
console.log(favNumber + null); // 17
console.log(favNumber + 0); // 17
console.log(favNumber + ""); // "17"