const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);

// console.log(balance.toFixed(2));

const otherNumber = 1123.8966;

// console.log(otherNumber.toPrecision(3)); // returns a string upto the given precision

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// ******************** Maths ********************
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.3));
// console.log(Math.min(4, 3, 2, 1, 5));
// console.log(Math.max(4, 3, 2, 1, 5));

// console.log(Math.random()); // values always between (0, 1);

// console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1); // gives an integer which is less than or equal to the random number.

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // IMP