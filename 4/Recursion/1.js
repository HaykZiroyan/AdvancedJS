/*
1. Write a recursive function to calculate the factorial of a given positive integer.
*/

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1
    }
    return factorial(n - 1) * n
}

console.log(factorial(5));