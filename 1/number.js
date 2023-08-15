/*
9. Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:
If the phone number is less than 10 and longer than 10 digits assume that it is a bad number
If the phone number consists of 11 symbols and the first one is + and others are numbers, then trim +
and return remaining 10 digits.
If the phone number contains + symbol more than one, consider it as a bad number.
If the phone number contains + symbol not as the first character, consider it as a bad number.
*/

function number(num) {
    num = num.split(' ').join('')
    if(num.length == 10 && !num.includes("+") || (num.length == 11 && num[0] == "+") && num.lastIndexOf("+")==0) {
        num = num.split('+').join('')
        return num
    }
    return "bad number"
}

console.log(number("+339 5+656888"))