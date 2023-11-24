// Immediately Invoked Function Expressions (IIFE)

// function chai() {
//     console.log(`DB-CONNECTED`);
// }

// chai(); // This is how normally we would call/invoke a function;

// IIFE is used to:
// sometimes access/invoke the data from database file or
// when we don't want functions to be polluted by global variables (b/c child can ask for to elders);

// So the above function can be IIFE as:

(function chai() {
    console.log(`DB CONNECTED`);
})();

// here the first('()') is to write the function definition and the second ('()') is used to invoke it just like we use it in 'chai()'; It saves the function from the pollution of global scope;

(function chaiaurcode() {
    // This is also called named IIFE as it has name;
    console.log(`DB CONNECTED`);
})();

( () => {
    // It's a simple IIFE (no name);
    console.log(`DB CONNECTED ARROW FUNCTION`);
} ) ();

// Now the above both function will not run and there will be an error; the reason is that immediate function does run the function immediatly but it doesn't know where to stop it's execution and hence we have top stop it using ';' (semicolon);

// Now how to pass parameter or log it;
( (name) => {
    console.log(`${name} DB CONNECTED ARROW FUNCTION`);
} ) ('Mongo');
// Just consider it same as normal function;