/*
8. Write a program to check the validity of password input by users. Validation :
*/

function validation(password) {
    if(password.length > 6 && password.length < 16 && /[a-zA-Z0-9]/.test(password) && /[$#@]/.test(password)) {
        return "Valid"
    }

    return "Invalid"
}
console.log(validation("srd$fs9F"))