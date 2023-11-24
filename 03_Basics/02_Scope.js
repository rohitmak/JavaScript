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
}

console.log(a);
console.log(b);
console.log(c);