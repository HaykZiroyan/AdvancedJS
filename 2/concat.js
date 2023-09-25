/*
1. Concatenate the two arrays
*/

const arr1 = [1, 2, 3, 4]; 
const arr2 = [5, 6, 7, 8, 9];

function concats(a, b) {
    return a.concat(b)
}

const arr3 = concats(arr1, arr2)
console.log(arr3)