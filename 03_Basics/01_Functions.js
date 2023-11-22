function sayMyName() {
    console.log("R");
    console.log("O");
    console.log("H");
    console.log("I");
    console.log("T");
}

// sayMyName; // This is called function reference
// sayMyName(); // This is called function execution

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    let result = number1 + number2;
    return result;
    console.log("Sum");
}

// addTwoNumbers(3, 4); // 7
// addTwoNumbers(3, "4"); // 34
// addTwoNumbers(3, "a"); // 3a
// addTwoNumbers(3, null); // 3
// In these cases we can use if-else to check if the type of parameters are number or not.

// const result = addTwoNumbers(3, 4); // result here will be undefined since the function is called and has logged the sum but has not given us anything or (returned) therefore result is undefined.

const result = addTwoNumbers(3, 4);
// console.log(result); 

function loginUserMessage(username = "Sam") {
    if(username === undefined) { // also we can write (!username) it is same as the given one.
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("rohit"));
// console.log(loginUserMessage(""));
console.log(loginUserMessage()); // what if user/we don't pass the value; undefined, also we can give default value to be considered in case nothing is passed