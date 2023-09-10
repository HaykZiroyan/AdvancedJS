/* 
13. Write a recursive function to generate all combinations of a given array. 
*/

function generateCombinations(arr, lengths, newArr = [], start = 0) {
    if (start + lengths >= arr.length) return newArr

    // for(let i = start; i < arr.length; i++) {
    //     const array = [arr[start]]
    //     newArr.push(array)
    // }
}

const inputArray = [1, 2, 3, 4]; 
console.log(generateCombinations(inputArray, 2));