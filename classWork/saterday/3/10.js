/* 
10. Write a function that, given a date (in the format MM/DD/YYYY), returns the day of the week as a
string. Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday",
"Wednesday", "Thursday", "Friday", or "Saturday".
To illustrate, the day of the week for "12/07/2016" is "Wednesday".
This challenge assumes the week starts on Sunday.*
InputOutput
getDay("12/07/2016") "Wednesday"
InputOutput
getDay("09/04/2016") "Sunday"
getDay("12/08/2011") "Thursday"

*/

function weekDay(str) {
    const days = ["sunday",  "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    const time = new Date("12/07/2016")
    let key = time.getDay()
    return days[key]
}
console.log(weekDay("12/07/2016"))