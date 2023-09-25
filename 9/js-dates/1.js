/*
Write a JavaScript function that takes a birthdate as input and calculates the age of a person in
years. The function should return the age. 
*/


function birthdate(time) {
    const date = new Date(time)
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDay()
    
    let currentDate = new Date()
    let currentYear = currentDate.getFullYear()
    let currentMonth = currentDate.getMonth()
    let currentDay = currentDate.getDay()

    let result = currentYear - year

    if(currentMonth >= month && currentDay >= day) {
        return result
    }
    return result - 1
}

console.log(birthdate("12/12/1995"))