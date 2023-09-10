/*
10. Write a recursive function to calculate the sum of digits of a positive integer.
*/

function sumOfDigits(num, sum = 0) {

    if(num !== 0) {
        sum = sum + num%10
        num = (num - num%10)/10
        console.log(num)
        return sumOfDigits(num, sum)
    }
    return sum
}

console.log(sumOfDigits(12345))