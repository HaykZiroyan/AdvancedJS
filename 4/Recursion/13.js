/* 
13. Write a recursive function to generate all combinations of a given array. 
*/

// function generateCombinations(arr, lengths, newArr = [], start = 0) {
//     if (start + lengths >= arr.length) return newArr

//     // for(let i = start; i < arr.length; i++) {
//     //     const array = [arr[start]]
//     //     newArr.push(array)
//     // }
// }

// const inputArray = [1, 2, 3, 4]; 
// console.log(generateCombinations(inputArray, 2));


// function combine(arr) {
//     let result = [];
//     let f = function(prefix, arr) {
//         for (let i = 0; i < arr.length; i++) {
//             result.push(prefix.concat(arr[i]));
//             f(prefix.concat(arr[i]), arr.slice(i + 1));
//         }
//     }
//     f([], arr);
//     return result;
// }

// let array = [1, 2, 3];
// console.log(combine(array));

function combine(arr) {
    let result = [];
    generateCombinations(arr, 0, []);
    return result;

    function generateCombinations(arr, index, currentCombination) {
        result.push([...currentCombination]);

        for (let i = index; i < arr.length; i++) {
            currentCombination.push(arr[i]);
            generateCombinations(arr, i + 1, currentCombination);
            currentCombination.pop();
        }
    }
}

let array = [1, 2, 3];
console.log(combine(array));