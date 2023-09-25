/* 
Notes
The returned array should include the months of dateStart and dateEnd (inclusive)
The returned array must not include duplicate values
The month names returned by the function should be sorted (not alphabetically, but ordered by
which comes first (January = 1st month, February = 2nd month, ... , December = 12th month))
The function should produce the same output even if dateStart is greater than dateEnd
InputOutput
let january = new Date(2017, 0, 1); let march = new
Date(2017, 2, 1); monthsInterval(january, march) ['January', 'February', March']
let december = new Date(2017, 11, 1); let january =
new Date(2018, 0, 1); monthsInterval(december,
january)
['January', 'December']
let january2017 = new Date(2017, 0, 1); let
january2018 = new Date(2018, 0, 1);
monthsInterval(january2017, january2018)
['January', 'February', 'March', 'April', 'May',
'June', 'July', 'August', 'September', 'October',
'November', 'December']
*/

function returnedMonths(startDate, endDate) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    if(startDate.getFullYear() === endDate.getFullYear()) {
        
    }
}

let january = new Date(2017, 0, 1)
let march = new Date(2017, 2, 1)

let december = new Date(2017, 11, 1)
let january1 = new Date(2018, 0, 1)

let january2017 = new Date(2017, 0, 1)
let january2018 = new Date(2018, 0, 1)

returnedMonths(january, march)
returnedMonths(december, january1)
returnedMonths(january2017, january2018)
