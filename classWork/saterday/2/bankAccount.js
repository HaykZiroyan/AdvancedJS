
class Key{
    key = 0
    constructor(){
        this.key++
    }
    addKey() {
        this.key++
        return this.key
    }
}
const ids = new Key

class Account {
    #balance = 0
    constructor(str, amount, newId = ids.addKey()) {
        this.#balance = amount
        this.id = newId
        this.name = str
        return this.id
    }
    get balance() {
        return this.#balance
    }
    set balance(amount) {
        this.#balance += amount
    }
    credit(amount) {
        this.#balance += amount
    }
    debit(amount) {
        this.#balance -= amount
    }
    transferTo(place, amount) {
        this.#balance -= amount
        place.balance = amount
    }

    static identifyAccounts(...args) {
        return 
    }
}


const saving = new Account("saving", 1000); 
const current = new Account("current", 8000); 

saving.credit(5000); 
saving.debit(1000); 
saving.debit(2000); 
saving.transferTo(current, 1000); 

console.log(saving.balance);
console.log(current.balance); 
 
const res = Account.identifyAccounts(current, saving); 
 
// console.log(saving.balance); 
// saving.balance = "hello"; 
 
// saving.submitBalance("hello"); 
// console.log(saving); 