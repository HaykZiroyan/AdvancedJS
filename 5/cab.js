/* 
Write your own call, apply and bind methods
*/

// function myCall(obj, arg) {
//     return this(obj, arg)
// }

// function f(n, r) {
//     return n.c + r
// }

// f.__proto__.myCall = myCall

// const obj = {
//     c: 6,
// }

// console.log(f.myCall(obj, 5))


function myCall(obj, ...arg) {
    obj.props = this
    obj.props(obj,...arg)
    delete obj.props
    // return this(obj,...arg)
}
function f(obj,num) {
    // console.log(obj)
    return obj.c + num
}
let obj = {
    c : 1
}
Function.prototype.myCall = myCall
console.log(f.myCall(obj,2))
console.log(obj)

// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
// const member = {
//     firstName:"Hege",
//     lastName: "Nilsen",
// }

// function myBind(obj) {
//     obj.__proto__[this.name] = this()
//     // console.log(obj.__proto__)
//     return this()
// }

// person.__proto__.myBind = myBind

// console.log(person.fullName.myBind(member))