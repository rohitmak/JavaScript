// 'For Each' loop

const coding  = ['js', 'ruby', 'java', 'python', 'cpp'];

coding.forEach( function (val) { // the item variable will fetch the values from coding array inside the function defined and we can do anything with that.
    // console.log(val);
});

// We can also use arrow function to do the same as above ↑

coding.forEach( (val) => {
    // console.log(val);
});

// We can create a normal function and pass it to the forEach

function printMe(item) {
    console.log(item);
}

// coding.forEach(printMe); // We just need to give reference of function here, no need to execute it, it will be taken care by function itself.

// We sometimes can have have multiple parameters as 'item', 'index', 'arr' inside the function, depending on the usecases.

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
});

// The below operation is mostly used, because the values comes from databases are in these format.

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
];

myCoding.forEach( (item) => {
    // console.log(item.languageName);
    console.log(`The language ${item.languageName} has ${item.languageFileName} file name.`);
});