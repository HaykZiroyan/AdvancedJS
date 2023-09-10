/*
7. Write a recursive function to flatten an array of nested arrays.
*/

function flattenArray(arr, newArr = []) {
    for (const key in arr) {
        if (Array.isArray(arr[key])) {
            flattenArray(arr[key], newArr)
        } else {
            newArr.push(arr[key])
        }
    }
    return newArr;
}


const nestedArray = [1, [2, [3, 4], 5], 6]; 
console.log(flattenArray(nestedArray))