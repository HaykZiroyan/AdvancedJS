/*
2. Convert a long phrase to its acronym
*/

function acronym(str) {
    str = str.split(' ')
    let newStr = ""
    str.map(elem => newStr += elem[0].toUpperCase())
    return newStr
}


console.log(acronym("Have a good night"))