/*
15. Write a function which calculator average age of user (your function must use reduce method).
*/

const users = [
    {
    name: "John Doe",
    age: 30,
    isAdmin: false,
    },
    {
    name: "Jane Smith",
    age: 25,
    isAdmin: true,
    },
    {
    name: "Bob Johnson",
    age: 40,
    isAdmin: false,
    },
    ];

    function getAverageAge(obj) {
        let age = 0
        let count = 0
        for(const elem of obj) {
            console.log
            age += elem.age
            count++
        }
        let average = Math.floor(age/count)
        return average
    }

    getAverageAge(users);
    console.log(getAverageAge(users))