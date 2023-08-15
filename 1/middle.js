/*
6. Takes two arrays and insert the second array in the middle of the first array. The first array always has
two elements.
*/

function mixed(arr1, arr2) {
    const newArr = []
    newArr[0] = arr1[0]
    for (let i = 0; i < arr2.length; i++) {
        newArr.push(arr2[i])
    };
    
    newArr.push(arr1[1]);
    return newArr
}
let arr = mixed([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])
console.log(arr)