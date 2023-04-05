// create an Array using an Array literal
let names = ["DrewP", "Shelley", "Carissa", "Cassandra", "Braedon", "Caitlynn"]

// access the 1st item in the Array
console.log(names[0]);
// access the last item in the Array
console.log(names[5]);
// print the length of the Array
console.log(names.length);
// use the length property to access the last item in the Array
lastName = names[names.length - 1];
console.log(`Last child is ${lastName}`);
// with for...of, loop over the Array, modify the value and add to a different Array
for (let name of names) {
  name[3] = "Rissa";
}