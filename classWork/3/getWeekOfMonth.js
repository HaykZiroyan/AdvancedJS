const getWeekOfMonth = (date) => {
    // console.log(date)
    // const days = ["sunday",  "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

    let year = date.getFullYear()
    let month = date.getMonth()
    let firstDay = new Date(year, month, 1, 12)

    // console.log(days[firstDay.getDay()])

    let firstWeekDay = firstDay.getDay()
    // console.log(firstWeekDay)
    return Math.floor((date.getDate() + firstWeekDay)/7)+ 1

}; 
 
const result = getWeekOfMonth(new Date(2017, 11, 27));
console.log(result)