// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 > 1);
// console.log(2 == 1);
// console.log(2 != 1);

// Above are some basic comparisons (or comparisons on same data type values)
// But the problem arises when datatypes of values are different

// console.log("2" > 1);
// console.log("02" > 1);

// These is not allowed as it may result some undesired outputs, so it's better to use same data types while doing comparison, which is why TypeScript is preferred.

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// The working of equality check (==) and comparisons (>, <, >=, <=) works differently
// comparisons convert null to a number, treating it as 0.
// That's why (0)null >= 0 is true and (1)null > 0 is false.

// console.log(undefined == 0); // false
// console.log(undefined < 0); // false
// console.log(undefined > 0); // false

// ===, strict conversion check, it check values and data type both

console.log("2" === 2);
console.log("2" === "2");