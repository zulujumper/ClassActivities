// Follow the steps below to create a **while** loop that TOTALS the numbers from 1 to 100

// 1) create a variable to represent the current number

// 2) create a variable to represent the current total

// 3) write a while loop that sums the numbers from 1 to 100
let x = 1;
let total = 0;
while (x <= 100) {
  total = total + x;
  x++;
}
console.log(total);

// Now using the same variables you created in steps 1 and 2, create a **for** loops that TOTALS the numbers from 1 to 100

// 1) write a for loop that sums the numbers from 1 to 100
total = 0;
for (x = 1; x <= 100; x = x + 5) {
  total = total + x;
}
console.log(total);
