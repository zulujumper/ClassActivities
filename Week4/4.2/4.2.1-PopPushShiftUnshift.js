const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let num1 = nums.pop();
let num2 = nums.pop();


// remove each of the first two items with shift(), saving each item to a variable
let num3 = nums.shift();
let num4 = nums.shift();


// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.unshift(num1, num2);
nums.push(num4, num3);
console.log(nums);
