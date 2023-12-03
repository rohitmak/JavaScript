// Sometimes not whole code needs to be executed either a piece of it needs to be or other based on certain conditions for that we use conditionals.

// if(condition) { // body }, executes only when condition evaluates to true.

if(2 == 2) {
    console.log("2 == 2");
}

const isUserLoggedIn = true;

if(isUserLoggedIn) {
    console.log("Yes");
}

// <(less than), >, <=, >=(greater than & equal to), =(assignment), ==(equal), !=(not equal), ===(equal to + checks the type of operands(true if same type else false)), !==(not equal + not same data type);

if(2 === "2") {
    console.log("This is ===");
} // not be executed even though 2 == "2", but their data types are not same.

if(2 !== "2") {
    console.log("This is !==");
} 

const temperature = 41;

if(temperature < 50) {
    console.log("less than 50");
}
else {
    console.log("greater than 50");
}

console.log("This is going to execute irrespective of any conditionals.");

const score = 200;

if(score > 100) {
    // const power = "Fly";
    // var power = "Fly"; // This will not give error thatswhy var is avoided.
    // console.log(`User Power: ${power}`);
}
// console.log(`User Power: ${power}`); // The variable power is out of scope(only accessible within if loop);

const balance = 1000;

// if(balance > 500) console.log("test"); // This is called implicit scope (just one line after condition);

// if(balance > 500) console.log("test1"),
// console.log("test2"); // This is the way of handling with implicit scope but it's highly unreadable hence avoided.

// Sometimes we want to check on continuous conditions for that:

// if(balance < 500) {
//     console.log("Balance is less than 500");
// }
// else if(balance < 750) {
//     console.log("Balance is less than 750");
// }
// else if(balance < 900) {
//     console.log("Balance is less than 900");
// }
// else {
//     console.log("Balance is less than 1200");
// }

// if to check multiple conditions

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard) { // both statement needs to be true for this loop to executed.
    console.log("User is allowed to purchase the course!");
}

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in.");
}
// will use this conditional rendering in upcoming development.

