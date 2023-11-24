let a = 10;
const b = 20;
var c = 30;
// Global Scope
// The above variables are global scoped that mean they can be used anywhere inside any function, scope, loop;


if(true) {
    // a = 100;
    // b = 200; // this will give error since constant variable cannot be changed.
    // c = 300;

    // but now, Local Scope
    let a = 100;
    const b = 200;
    var c = 300;
    // Now the above variables are scoped within the if-scope i.e. these variables cannot be used outside of the if loop doing so will generate error, but variable c can be since it's a 'var' type and that is the reason we avoid (or nowadays not being used) the use of var.
    // console.log(a);
    // console.log(b);
    // console.log(c);
}

// console.log(a);
// console.log(b);
// console.log(c);


// Scope level and mini hoisting in JS

function one() {
    const username = "rohit";

    function two() {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website); // this will give error since the website variable has the scope defined within the function two(); It's like inner function can access the variables of bigger one but vice versa is not true;

    two();
}

// one();

// for every function call there is a different stack created for it.

if(true) {
    const username = "rohit";
    if(username === "rohit") {
        const website = " youtube";
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// *************************************** Interesting ***************************************

console.log(addone(5));

function addone(num) {
    return num + 1;
}

// addone(5);

// addTwo(5); // error; ReferenceError: Cannot access 'addTwo' before initialization; because this is a kind of variable which is being used before is initialization (concept of hoisting);

const addTwo = function(num) { // This can be also called as expression
    return num + 2;
}

// addTwo(5);