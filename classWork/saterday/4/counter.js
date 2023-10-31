function counter() {

    let count = 0
    return () => {
        return ++count
    }
}
let counts = counter()
console.log(counts())
console.log(counts())
console.log(counts())
