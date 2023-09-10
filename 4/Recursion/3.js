/*
3. Write a recursive function to calculate the value of a number raised to an exponent.
*/

function power(base, exp) {
    if (exp === 0) {
        return 1;
    }
    return base * power(base, --exp)
}

console.log(power(2, 3));