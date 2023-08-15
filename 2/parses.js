/*
6. Write a function which parses string integers. If it's not possible to parse, then add null.
*/

function numeric(str) {
    if(!isNaN(str)) {
        return JSON.parse(str);
    }
    return null
}

function parseInteger(obj) {
    const newObj = [];
    obj.map(elem => {
        let changed = numeric(elem)
        newObj.push(changed)
    })

    return newObj
}

console.log(parseInteger(["1", "2", "34"])); 
console.log(parseInteger(["1", "px", "2323"]));

