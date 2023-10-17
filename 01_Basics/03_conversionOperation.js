let score = "RR"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score) // score is converted into number from string.
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN, but the type of converted one will be number.
// true => 1; false => 0

let isLoggedIn = "RR"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "RR" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(typeof stringNumber);
// console.log(stringNumber);

let newString = stringNumber + 20
// console.log(newString)

// ******************** Operations ********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 ** 2);
// console.log(2 ** 3);
// console.log(2 % 3);

let str1 = "hello";
let str2 = " Rohit"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log(1 + 3 + "3");

// console.log(true);
// console.log(+true);
// console.log(true+); // gives error as it cannot be performed
// console.log(+ "");

let x = 3;
const y = x++; // y: 3, because postfix operator first assign value and then increment/decrement it.

console.log(`x: ${x}, y: ${y}`);

let a = 3;
const b = ++a;

console.log(`a: ${a}, b: ${b}`);
