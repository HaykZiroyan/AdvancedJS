/*
1.Create a counter function using closure that increments a count every time it's called
*/

function createCounter() {
    let count = 0
    return function () {
        return ++count
    }
}

const counter = createCounter(); 
console.log(counter());
console.log(counter());
console.log(counter());