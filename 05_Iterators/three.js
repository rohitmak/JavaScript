// Array specific loops

// 'for of' loop

const arr = [1, 3, 5, 7, 9];

for (const num of arr) { // object here is the broader term used to describe over which we have to iterate.
    // console.log(num);
}

const greetings = "Hello World!";

for (const greet of greetings) {
    if(greet == ' ') {
        // continue;
        break;
    }
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map();

map.set('IN', "India");
map.set('US', "United States of America");
map.set('RU', "Russia");
map.set('IN', "India"); // This entry will not be entered again in map.
// Maps store unique values

// console.log(map);

for (const key of map) {
    // console.log(key);
} // This will output the map items as it is.

for(const [key, value] of map) {
    // console.log(key, ':-', value);
} // In this we have destructured the array and seperated the key & value of map.

// On Objects

const myObject = {
    'game1': 'NFS',
    'game2': 'GTA-V'
}

for (const [key, value] of myObject) {
    // console.log(key, ':-', value);
} // objects can't be iterated using 'for of' loop.