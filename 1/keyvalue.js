/*
12. Given an object. Invert it (keys become values and values become keys). If there is more than key for
that given value create an array.
*/

function keyValue(obj) {
    const newObj = {}
    for (const [key, value] of Object.entries(obj)) {
        if (newObj[value] === undefined) {
            newObj[value] = []
        }
        newObj[value].push(key)
    }
    for (const [key, value] of Object.entries(newObj)) {
        if (value.length === 1) {
            newObj[key] = value[0]
        }
    }
    return newObj
}
console.log(keyValue({ a: '1', b: '2'}))