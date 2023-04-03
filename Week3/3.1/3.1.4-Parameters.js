// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function myFunction (para1, para2) {
    console.log(para1);
    console.log(para2);
    return para1 + para2;
}
// invoke the function and pass in two numbers
myFunction(47,52);
// invoke the function and pass in more than two numbers
myFunction(47,52,111);
// invoke the function and pass in only one number
myFunction(47);
// change the function to set default values for the parameters
function myFunction (para1 = 47, para2 = 52) {
    console.log(para1);
    console.log(para2);
    return para1 + para2;
}
// again, invoke the function and pass in only one number
myFunction(47);
// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function myFunction (para1, ...myRestPara) {
    console.log(para1);
    console.log(myRestPara);
    }
// again, invoke the function and pass in more than two numbers
myFunction(47,52,111);