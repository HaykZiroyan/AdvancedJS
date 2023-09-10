/*
6. Write a recursive function to perform a binary search on a sorted array.
*/

function binarySearch(arr, elem, num = 0) {
    if (arr.length - 1 === num && arr[arr.length - 1] !== elem) return -1

    if (arr[num] === elem) return num
    
    ++num
    return binarySearch(arr, elem, num)
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17]; 
console.log(binarySearch(sortedArray, 9));
console.log(binarySearch(sortedArray, 10));