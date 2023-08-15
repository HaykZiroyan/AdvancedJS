/*
7. Given an array, return a new array that only includes the numbers.
*/

const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];

function numbers(obj) {
    let newObj = []
    obj.map(elem => {
        if(typeof(elem) === 'number' && elem === elem) {
            newObj.push(elem)
        }
    })
    return (newObj)
}
console.log(numbers(arr))