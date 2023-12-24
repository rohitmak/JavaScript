// Loops on Objects;

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// We use 'for in' loop for this.

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// 'for in' loop on arrays

const programming = ['js', 'rb', 'py', 'java', 'cpp'];

for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
}

// over Map

const map = new Map();

map.set('IN', "India");
map.set('US', "United States of America");
map.set('RU', "Russia");
map.set('IN', "India");

for (const key in map) {
    // console.log(key);
} // this will return nothing since maps are not iteratable and those which are not iteratable cannot be written inside a loop.