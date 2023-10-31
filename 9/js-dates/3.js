/*
Create a JavaScript countdown timer that counts down from a specified date and time to the
current time. Display the remaining days, hours, minutes, and seconds in the HTML
*/

function countdown(time) {
    let countDownDate = new Date(time).getTime()
    let now = new Date().getTime();
    
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }

}

countdown("Jan 4, 2024 15:37:25")
console.log(document.querySelector(".jjj"))