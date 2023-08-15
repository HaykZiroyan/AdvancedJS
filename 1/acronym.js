/*
10. Write a function to convert a long phrase to its acronym.
*/

function acronym(str) {
    let newStr = ""
    newStr += str[0].toUpperCase()
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            newStr += str[i + 1].toUpperCase()
        }
    }
    return newStr
}


console.log(acronym("Have a good night"))