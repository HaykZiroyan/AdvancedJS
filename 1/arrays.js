/*
11. Write a function, which receives an array as an argument which elements arrays of numbers. Find
product of biggest negative number of each array. If there is not any negative number, ignore that
array. Check that items of the given array are arrays.
*/

function check(arr) {
    const negativeArr = []
    for(const elem of arr) {
        if (typeof(elem) !== 'object') {
            return "Invalid Argument"            
        }
        let negativeItem = -Infinity
        for(const item of elem) {
            if ( item > negativeItem && item < 0) {
                negativeItem = item
            }
        }
        if (negativeItem != -Infinity) {
            negativeArr.push(negativeItem)
        }
        if (negativeArr.length == 0) {
            return "No negatives"
        }
    }
    let product = 1
    for(const elem of negativeArr) {
        product *= elem
    }
    return product
}
console.log(check([[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]))