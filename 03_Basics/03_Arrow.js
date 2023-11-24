const user = {
    username: "rohit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sam"; // now the user context will change for this; i.e. username = "sam";
// user.welcomeMessage();
// user.username = "satya";
// user.welcomeMessage();

// console.log(this); // this will now refer to an empty object since it's not referring to anything; as there is nothing in the global environment (or in node (external environment to run JS));

// if we do 'console.log(this);' in browser it will return something (object type) that are windows events (global), function (because of these browser are able to capture windows actions, click, alert, etc);


// Arrow Function

// function chai() {
//     let username = "rohit";
//     console.log(this.username); // this will o/p undefined; i.e. 'this' doesn't work inside functions
//     // console.log(this); // it will return some properties; what??
// }

// chai();

// const chai = function() {
//     let username = "rohit";
//     console.log(this.username);
// }

// chai();


// *********************************** ARROW FUNCTION ***********************************

const chai = () => {
    let username = "rohit";
    // console.log(this.username);
    console.log(this);
}

// chai();

// Syntax () => {};
// can store inside a variable

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// There is one more way to write the above ↑ arrow function; i.e. implicit return

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username: "rohit"});

console.log(addTwo(3, 4));

// const myArray = [2, 3, 5, 6, 7];

// myArray.forEach(function() {});
// myArray.forEach(() => {});
// myArray.forEach(() => ());
// The above are the different ways to do some operations over an array; either we can return a function using normally, can use arrow function (with both return and not return statement);