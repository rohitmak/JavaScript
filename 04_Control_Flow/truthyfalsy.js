// truthy | falsy are the assumed true or false values respectively in a code, just like the below 'userEmail' was considered true in the if-condition and got executed.

// const userEmail = "r@hit.ai";
// const userEmail = "";
const userEmail = [];

if(userEmail) {
    console.log("Got User Email!");
}
else {
    console.log("Don't have user email!");
}

// Rules or values that are assumed to be truly or falsy.

// falsy values

// false, 0, -0, BigInt -> 0n, "", null, undefined, NaN; else all are truthy values;

// Some truthy values are

// "0", 'false', " " (space), [], {}, function() {} (empty function)

// To check the above 'userEmail' array:

// if(userEmail.length === 0) {
//     console.log("Array is Empty!");
// }

// for empty objects:

const emptyObj = {};

if(Object.keys(emptyObj).length === 0) { // Objects.key(object_name) returns a array of keys in object, then we can check like above if the length of array is 0 or not.
    console.log("Object is Empty!");
}

// false == 0; // true
// false == ''; // true
// 0 == ''; // true

// Nullish Coalescing Operator (??) : only for null, undefined
// This operator is new and used in case of fetching data from database where we get the data in very uncertain format or value so in case we know what to do ahead.

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 110 ?? 20; // In this case the first value (after null) will be assigned to 'val1' variable;

// console.log(val1);

// Ternary Operator:
// Syntax:
// (condition) ? true : false;

const iceTeaPrice = 100;

iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");