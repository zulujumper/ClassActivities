const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
const firstA = arr.indexOf('a');
const firstB = arr.indexOf('b');
const firstC = arr.indexOf('c');
// find the last index of "a", "b", and "c"
const lastA = arr.lastIndexOf('a');
const lastB = arr.lastIndexOf('b');
const lastC = arr.lastIndexOf('c');
// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
function removeDuplicate (array, duplicateValue) {
    let firstIndex = array.indexOf(duplicateValue);
    let lastIndex = array.lastIndexOf(duplicateValue);
    while (firstIndex !== lastIndex) {
        array.splice(lastIndex, 1);
        lastIndex = array.lastIndexOf(duplicateValue);
    } return array;
}