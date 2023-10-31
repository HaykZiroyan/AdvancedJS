const formatDate = (date) => {
  const months = ['January', 'February', 'March', 'April',
                'May', 'June', 'July', 'August', 'September',
                'October', 'November', 'December'];
    let a = new Date(date)
    let day = a.getDay() 
    let month = a.getMonth()
    let year = a.getFullYear()
    return day + " "  + months[month] + " " + year; 
  }; 
   
  console.log("Actual output: ", formatDate(new Date("2020-05-14"))); 
  console.log("Expected output", "14 May 2020");