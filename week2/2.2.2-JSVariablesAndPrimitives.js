const { type } = require("os");

// create a variable called "name" that references a string
let name = "DrewP";
// create a variable called "favoriteSong" that references a string
let favoriteSong = "The Thrill is Gone";
// create a variable called "wage" that references a number
let wage = 33;
// create a variable called "age" that references a number
let age = 52;
// create a variable called "onlyChild" that references a boolean
let onlyChild = false;
// create a variable called "satisfied" that references a boolean
let satisfied = false;
// create a variable called "favoriteThing" that references ANY primitive value
let favoriteThing = "dogs";
// print the data type of "favoriteThing"
console.log(typeof favoriteThing);
// You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"
favoriteSong = "Fancy Like";
// You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type
favoriteThing = 47;
console.log(typeof favoriteThing);
// Happy Birthday!
// Reassign "age" to a new value
age = 53;
// You got a big raise at work.
// Reassign "wage" to a new value
wage = 70;
// Your raise changed your job satisfaction.
// Assign "satisfied" to true
satisfied = true;
// use "console.log()" and "+" to print a sentence that includes two of the above variables
console.log("I like " + wage + " or " + favoriteThing + " dogs.");
