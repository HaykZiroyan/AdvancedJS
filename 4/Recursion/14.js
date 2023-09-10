/* 
14. Write a recursive function to find if there is a subset of a given array that adds up to a target sum.
*/

function subsetSum(arr, result, sum = 0) {
    if(arr = []) return result === sum
    const newArr = [...arr]
    sum = arr[arr.length - 1]
    newArr.length--
    console.log(newArr)

    subsetSum(newArr, result, sum)

}

const inputArray = [2, 4, 6, 8]; 
console.log(subsetSum(inputArray, 10));