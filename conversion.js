// CONVERSIONS IN JAVASCRIPT
let score = "abc";

// console.log(typeof score );
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof(valueInNumber))
// console.log(valueInNumber);

//Notes: 
// "33" => 33
// "33 abc" => NaN
// "Undifined" => NaN
// "Null" => 0
// "Ture" => 1; "false" => 0



let isLoggedIn = "f";

let inBoolean = Boolean(isLoggedIn);
//console.log(inBoolean);

// "1" => true
// "0" => false
// "" => false
// "Dev" => true

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

