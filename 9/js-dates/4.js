/*
Write a JavaScript function that takes a start year and an end year as input and calculates the
total number of days in the range of years (inclusive). This should account for leap years.
*/

function calculateDays(start, end) {
    let startDate = new Date("01/01/" + start)
    let endDate = new Date("12/31/" + end)

    return (endDate - startDate) / 24 / 60 / 60 / 1000 + 1
}

console.log(calculateDays(2016, 2022))