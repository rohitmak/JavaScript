// Array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["Shaktiman", "Superman"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array Methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(-1); // Add element at the beginning
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

const newArr = myArr.join() // converts the array into string in comma seperated format

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// Slice & Splice

console.log("A ", myArr);

const myNewArr1 = myArr.slice(1, 3);
console.log(myNewArr1);
console.log("B ", myArr);

const myNewArr2 = myArr.splice(1, 3);
console.log(myNewArr2);
console.log("C ", myArr);