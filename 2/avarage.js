/**
11. Write a function which calculates average age of users 
 */

const users = [ 
    { 
      username: "Yuri Gagarin", 
      lang: "ru", 
      age: 56, 
    }, 
    { 
      username: "Nil Armstrong", 
      lang: "ENG", 
      age: 54, 
    }, 
  ]; 


  function getAverageAge(user) {
    let sum = 0
    user.map(elem => {
        sum += elem.age
    })
   
    return sum/user.length
  }

  console.log(getAverageAge(users));