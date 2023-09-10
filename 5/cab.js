/* 
Write your own call, apply and bind methods
*/

function myCall(obj, arg) {
    return this(obj, arg)
}

function f(n, r) {
    return n.c + r
}

f.__proto__.myCall = myCall

const obj = {
    c: 6,
}

console.log(f.myCall(obj, 5))
