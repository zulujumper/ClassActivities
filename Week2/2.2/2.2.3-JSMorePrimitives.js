// Create a variable "timeOfDay" and assign it a string
let timeOfDay = "noon";
// Create a variable "greeting" that references a template literal
// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
let greeting = `Howdy ${timeOfDay}`;
// Print "greeting"
console.log(greeting);
// Create a new variable, but do not assign it a value
let newV;
// Print the new variable and its type
console.log(newV);
console.log(typeof newV);
// What type should we expect? -- undefined

// Assign the variable a value that indicates the variable is purposely blank
// What value should we assign?
newV = "";
// Print the variable and its type again
// What type should we expect? -- nothing, a blank
console.log(newV);
console.log(typeof newV);
// Try to print a variable that does not exist
// What should we expect to print in the CLI? -- ReferenceError: dogs is not defined
console.log(dogs);
// Print "greeting" again
// Will this line run? -- no, because of the above error
console.log(greeting);
