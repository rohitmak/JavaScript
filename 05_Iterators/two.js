// While loop, do-while loop

let index = 0; // 1. define the index

while(index <= 10) { // 2. define the condition
    // console.log(`Value of index is ${index}`);
    index = index + 2; // 3. define the operation on index
}

let myArray = ["flash", "batman", "superman"];

let arr = 0;

while(arr < myArray.length) {
    // console.log(`Value is ${myArray[arr]}`);
    arr++;
}

// Do-While

// let score = 1;
let score = 11; // what if score is already > 10 in the below condition, there comes the 'do-while' loop exception where it will execute atleast once, whether condition satisfies or not.

do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);