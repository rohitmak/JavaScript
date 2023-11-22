const marvel_heroes = ["Thor", "IronMan", "SpiderMan"];
const dc_heroes = ["SuperMan", "Flash", "BatMan"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes); // Array takes the another array as a value in it so in this case the 'dc_heroes' array will be inserted in the 'marvel_heroes' array (just like a value);
// console.log(marvel_heroes.length);

// const allHeroes = marvel_heroes.concat(dc_heroes); // concate adds the two array and returns a new array;
// console.log(allHeroes);

// using spread operator
// const allNewHeroes = [...marvel_heroes, ...dc_heroes]; // more arrays can be add;
// console.log(allNewHeroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const realAnotherArray = anotherArray.flat(Infinity);

// console.log(realAnotherArray);


// While scrapping data from the website the data might be in either of the nodelist, string, etc format so in that case we can convert it to the array;

console.log(Array.isArray("Rohit"));
console.log(Array.from("Rohit"));
console.log(Array.from({name: "Rohit"})); // interesting case! because we need to specify whether we need to do on key or value;

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // can convert the given element in the array using '.of' which converts the set of elements in the array;