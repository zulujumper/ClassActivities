// // create an Array using an Array literal
let names = ["DrewP", "Shelley", "Carissa", "Cassandra", "Braedon", "Caitlynn"]

// // access the 1st item in the Array
// console.log(names[0]);
// // access the last item in the Array
// console.log(names[names.length - 1]);
// // print the length of the Array
// console.log(names.length);
// // use the length property to access the last item in the Array
// let lastName = names[names.length - 1];
// console.log(`Last child is ${lastName}`);
// // with for...of, loop over the Array, modify the value and add to a different Array

let newNames = [];
for (let name of names) {
  newNames.push("Mr. " + name);
}
for (let i of newNames) {
  console.log(i);
}
// console.log(newNames);
// console.log(newNames.length);