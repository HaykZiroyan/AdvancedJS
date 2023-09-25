/*
9. Each year has 365 or 366 days. Given a string date representing a Gregorian calendar date formatted
as month/day/year, return the day-number of the year. All input strings in the tests are valid dates.
InputOutput
dayOfYear("12/13/2020") 348
dayOfYear("12/17/2020") 352
dayOfYear("11/16/2020") 321
dayOfYear("1/9/2019") 9
dayOfYear("3/1/2004") 61
dayOfYear("12/31/2000") 366
*/

function dayOfYear(time) {
    const date = new Date(time)
    console.log(date)
    
    let year = date.getFullYear()
    console.log(year)
    console.log(new Date(year, 0, 0))
    const fistday = new Date(year, 0, 0)
    return (date - fistday)/60/60/24/1000
    
}

console.log(dayOfYear("12/13/2020"))