/* mapToDo, reduce, filter */


// function changed(item) {
//     return item*2
// }
// function mapToDo(obj, toDo) {
//     const arr = []
//     for (let i = 0; i < obj.length; i++) {
//         arr[i] = toDo(obj[i])
//     }
//     return arr
// }
// console.log(mapToDo([1,2,3], changed))


// Array.prototype.mymap = function(callback) {
//     const newArray = [];
//     for (let index = 0; index < this.length; index++) {
//         newArray.push(callback(this[index], index, this));
//     }
//     return newArray;
// }
const arr = [1, 2, 3]
// let b = arr.mymap(function(value) {
//     return value*2
// })
// console.log(b)



/* const cb = (acc, item) => item + acc

// arr.__proto__.myreduce = function() {}
Array.prototype.myReduce = function(callback, initValue) {
    let i = initValue === undefined ? 1 : 0
    // initValue = initValue || this[0]
    let acc = initValue || this[0]
    
        for (i = 0; i < this.length; i++) {
            acc = callback(acc, this[i])
        }
    return acc
}
console.log(arr.myReduce(cb))

*/
const ages = [32, 33, 16, 40];
Array.prototype.myFilter = function(callback) {
    const newArr = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            newArr[newArr.length] = this[i]
        }
    }
    return newArr
}
const newCB = (item) => item >= 18
console.log(ages.myFilter(newCB))
