/*
4. Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each
row and print them as an array.
*/
function dimensional(arr) {
    let newArr = []
    for(const elem of arr) {
       if (typeof(elem) === 'object') {
        let sum = 0
        for(const elems of elem) {
            sum += elems
        }
        newArr.push(sum)
       } else {
        newArr.push(elem)
       }
    }
    return newArr
}
let arr2 =dimensional([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]])
console.log(arr2)