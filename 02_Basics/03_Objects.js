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
    mySym: "myKey1",
    age: 19,
    location: "Indore",
    email: "rohit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// Accessing the object: Two ways: 1. Dot operator & 2. Square brackets

console.log(JSUser.email);
console.log(JSUser["email"]);
console.log(JSUser["full name"]); // the "full name" property can be only accessed using square brackets only.
console.log(JSUser.mySym);
console.log(typeof JSUser.mySym);