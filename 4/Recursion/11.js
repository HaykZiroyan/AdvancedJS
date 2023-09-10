/*
11. Write a recursive function to calculate the Greatest Common Divisor (GCD) of two positive integers.
*/

function gcd(a, b, divisor = 1, biggest = 1) {
    let checkLimit
    if(a >= b) {
        checkLimit = b
    } else {
        checkLimit = a
    }
    if (divisor <= checkLimit) {
        if(a%divisor === 0 && b%divisor === 0 ) {
            biggest = divisor
        }
        ++divisor
        return gcd(a, b, divisor, biggest)
    }

    return biggest
}

console.log(gcd(48, 18));