// Two ways to declare: 1. Literal & 2. Constructor
// Singleton: Object is of its type only (formed by declaring in constructor way)

// Object.create; // Constructor way (Singleton is formed here);

// Object Literals

// Symbols
const mySym = Symbol("key1");

const JSUser = {
    // the name key here is processed as "name" by the system (i.e; in the string format)
    name: "Rohit", 
    "full name": "rm",
    [mySym]: "myKey1", // this is how symbols are used in object using square brackets and the same way they are accessed.
    age: 19,
    location: "Indore",
    email: "rohit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// Accessing the object: Two ways: 1. Dot operator & 2. Square brackets

// console.log(JSUser.email);
// console.log(JSUser["email"]);
// console.log(JSUser["full name"]); // the "full name" property can be only accessed using square brackets only.
// console.log(JSUser[mySym]);
// console.log(typeof JSUser[mySym]);

JSUser.email = "rohit@microsoft.com";
// Object.freeze(JSUser); // this will not let any changes to be made in the object properties
JSUser.email = "rohit@openai.com";

// console.log(JSUser);

JSUser.greeting = function() {
    console.log("Hello JS User");
}

JSUser.greetingName = function() {
    console.log(`Hello JS User ${this.name}`); // whenever you have to access the properties of the object you are in we can use 'this' operator. Here this.name will access the name of JSUser object;
}

// console.log(JSUser.greeting); // this will just return the reference of funtion, function will not be returned;
console.log(JSUser.greeting()); // this will call the function and print the output;
console.log(JSUser.greetingName());