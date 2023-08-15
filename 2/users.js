/*
8. Write a function which remove users with language equals to 'ru.
*/

const users = [ 
    { 
      username: "Yuri Gagarin", 
      lang: "ru", 
    }, 
    { 
      username: "Nil Armstrong", 
      lang: "ENG", 
    }, 
]; 

function filterUsers(user) {
    // user.map((elem, i)=> {
    //     if(elem.lang == 'ru') {
    //         console.log(user.elem)
    //         delete user[i]
    //     }
    // })
    // return user


    const newUser = []
    user.map(elem => {
        if(elem.lang != 'ru') {
            newUser.push(elem)
        }
    })
    return newUser
}

console.log(filterUsers(users)); // [{ username: "Nil Armstrong, lang: "ENG" }]