// 1.1
// Create the following variables so that they can be reassigned:
// 'student' and assign it to a string containing a name
let student = "DrewP";
// Create the following variables so that they cannot be reassigned:
// 'college' and assign it to this string 'SavvyCoder University'
const college = "SavvyCoder University";
// Below is a variable that references a template literal
// Inside the template literal, utilize 'student'and 'college' to complete the sentence
const studentInfo = `The student's name is ${student} and they go to ${college}.`;

// Print the variable - Example Output below
// The student's name is Gary and they go to SavvyCoder University
console.log(studentInfo);
// 1.2
// Using let, create a variable called 'grade' and assign it to 80
// Using let, create a variable called 'passing' but don't assign it
// Using const, create a variable called 'passingMin' and assign it to 75
let grade = 74;
let passing;
const passingMin = 75;
// Create a conditonal so that if 'grade' is greater than or equal to 'passingMin', a string prints out saying 'Passing Score'
// If the conditonal fails, print 'Failing Score'
// You can test this by reassigning grade to be a number below 75
if (grade >= passingMin) {
    console.log("Passing Score");
} else {
    console.log("Failing Score");
}