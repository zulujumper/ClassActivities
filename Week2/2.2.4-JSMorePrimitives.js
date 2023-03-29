// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let str = "string";
let num = 47;
let bool = true;
let und;
let nothing = null;
// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof und);
console.log(typeof nothing);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let tempLit = `${str} ${num}`;
// reassign the value of the variable that references "null"
nothing = "nada";
// print the value and its type
console.log(nothing);
console.log(typeof nothing);
// print a variable that causes a ReferenceError
console.log(dogs);
// alter the previous line to no longer cause a ReferenceError
console.log(bool);
