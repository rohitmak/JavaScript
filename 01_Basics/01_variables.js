const accountId = 144553
let accountEmail = "abc123@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"  // It is possible to declare variable like this in JS, but is not the recommended way to do!
let accountState;

// accountId = 2 // Not allowed as constant cannot be changed!

accountEmail = "rm123@google.com"
accountPassword = "357159"
accountCity = "Mumbai"

console.log(accountId);

/*
    Prefer not to use 'var',
    because of the issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])