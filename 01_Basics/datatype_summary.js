// Based on how the data is stored in memory we have defined data types in:

// 1. Primitive (call by value)
// 1.1 String
// 1.2 Number
// 1.3 Boolean
// 1.4 null, it's empty
// 1.5 undefined, variable declared but not assigned any value
// 1.6 symbol, for uniqueness
// 1.7 BigInt, some scientific numbers

const score = 100;
const scoreValue = 100.33;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

// const bigNumber = 456789123456789n


// 2. Non-Primitive (call by reference)
// 2.1 Arrays
// 2.2 Objects
// 2.3 Functions

const heroes = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Rohit",
    age: 19,
}

const myFunction = function() {
    console.log("Hello World");
}
// typeof all reference data types are objects, like for function it's function object.

console.log(typeof heroes);