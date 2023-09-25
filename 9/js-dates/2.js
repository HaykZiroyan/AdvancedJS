/*
Write a JavaScript function that takes a JavaScript Date object and returns a formatted string
representing the date in a user-friendly format, like "October 5, 2023".
*/
function userFriendlyDate(time) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const inputDate = new Date(time)

    const inputYear = inputDate.getFullYear()
    const inputMonth = inputDate.getMonth()
    const inputDays = inputDate.getDate()
    
    return months[inputMonth] + " " + inputDays + " " + inputYear
}

console.log(userFriendlyDate("12/07/2016"))
