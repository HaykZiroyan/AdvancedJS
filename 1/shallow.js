/* 
14. Given two objects. Write a function that performs shallow compare.
*/

let a = { a: '1', b: '2'};
let b = { a: '1', b: '2'};
function shallowCompare(a, b) {
    if (Object.keys(b).length != Object.keys(a).length) return false
    if (Object.keys(b).length == 0 && Object.keys(a).length == 0) return true
    if (Object.keys(b).length == Object.keys(a).length) {
        let comp = 0
        for (i = 0; i< Object.keys(b).length;i++) {
            if (!(Object.keys(a)[i] == Object.keys(b)[i] && a[Object.keys(a)[i]] == b[Object.keys(b)[i]])) {
                comp++
            }
        }
        if(comp == 0) return true
        return false
    }
}
console.log(shallowCompare(a,b))


