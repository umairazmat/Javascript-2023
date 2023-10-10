const accountID = 123456789;
let accountEmail = "umair@gmail.com"; 
var accountPassword = "123456"; // used for old browsers and have scope issues
accountCity = "Lahore";  // not recommended
let accountState;
// const PI;  const variable must be initialized
// PI = 3.14;  const variable can not be changed



console.table([accountID, accountEmail, accountPassword, accountCity, accountState])

let x = 10;
// Here x is 10
console.log("before block",x);

{
let x = 2;
// Here x is 2
console.log("Inside block",x);


}
console.log("after block ",x);

// Here x is 10
