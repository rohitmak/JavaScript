// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}
// variable 'i' is not accessible outside of the loop.
// console.log(element);

for(let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for(let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop is ${i}`);
        // console.log(i + 'x' + j + ' = ' + (i * j)); // printing the table
    }
}

let myArray = ["flash", "batman", "superman"];

// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// We can sometimes stop the loop at certain conditions;
// For that we use 'break' & 'continue';

for (let index = 1; index <= 20; index++) {
    if(index == 5) {
        // console.log(`Detected 5`);
        break; // It will stop the control flow and will take flow out of the loop;
    }
    // console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if(index == 5) {
        console.log(`Detected 5`);
        continue; // It will skip the particular iteration of the loop, but will not come out of loop.
    }
    console.log(`Value of i is ${index}`);
}