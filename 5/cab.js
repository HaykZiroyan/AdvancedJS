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



const person = {
    firstName:"John",
    lastName: "Doe",
}

function fullName(obj) {
    return obj.firstName + " " + obj.lastName;
}

function myBind(obj) {
    return this(obj)
}

fullName.__proto__.myBind = myBind

console.log(fullName.myBind(person))


