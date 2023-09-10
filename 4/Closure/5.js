/* 
5. Write a function that received callback and set of arguments and calculate the result via callback
using closure
*/

function add(a, b, c) { 
    return a + b + c; 
}

function partial(sum, num) {
    let sumNumbers = num

    return (num1, num2) => {
        return sumNumbers + num1 + num2
    }

}
const add5 = partial(add, 5); 
console.log(add5(10, 20));