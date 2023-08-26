/* 
5. Write a recursive function to check if a given string is a palindrome.
*/

function isPalindrome(str) {
    if(structuredClone.length === 0) return true
    let firstElem = str[0]
    let lastElem = str[str.length - 1]

    if (firstElem === lastElem) {
        return isPalindrome(str.slice(1, -1))
    }
    return false
}
console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));
// console.log("sgh".slice(1, -1))