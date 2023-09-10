/*
9. Write a recursive function to count the occurrences of a value in an array.
*/

function countOccurrences(arr, num, count = 0, start = 0) {
    for (let i = start; i < arr.length; i++) {
        if(arr[i] === num) {
            ++count;
            ++start;
            countOccurrences(arr, num, count, start)
        }
    }
    return count
}

const numbers = [2, 3, 4, 2, 5, 2, 6, 2]; 
console.log(countOccurrences(numbers, 2));
console.log(numbers)