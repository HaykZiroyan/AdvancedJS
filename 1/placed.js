/*
3. Given an array of a size smaller than 100. It consists of numbers from 0 to 99 in any order. Create a
new array where each element from that array is placed under the index of its value. Start from the
smallest value and end with the biggest one. If there are missing values, put in its places undefined.
*/

function placed(arr) {
    let arr2 = []
    for(const elem of arr) {
        arr2[elem] = elem
    }

    for(let i = 0; i < arr2.length; i++) {
        if(arr2[i] == undefined) {
            arr2[i] = undefined
        }
    }
    return arr2
}
newarr = placed([26, 30, 19, 5])
console.log(newarr)