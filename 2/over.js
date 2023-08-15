/*
10. Given an array, return the sum of numbers that are 18 or over.
*/


const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43]; 
function sum(arrays) {
    let sums = 0
    arrays.map( elem => {
        if (elem >= 18) {
            sums += elem
        }
    })
    return sums
}
console.log(sum(arr))