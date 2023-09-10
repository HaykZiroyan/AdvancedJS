const bankAccount = {
    accountNumber: "123456789",
    balance: 1000,
    accountHolder: "John Doe",
};

function deposit(amount) {
    if (amount < 0) {
        return ("Invalid deposit amount. Please deposit a positive amount.")
    }
    this.balance +=amount
    return `Deposited ${amount}. New balance:${this.balance}`
}

function withdraw(amount) {
    if (amount < 0) {
        return ("Invalid deposit amount. Please withdraw a positive amount.")
    }
    if (amount > bankAccount.balance) {
        return "Insufficient balance or invalid withdrawal amount."
    }
    this.balance -=amount
    return `Withdrew ${amount}. New balance:${this.balance}`

}

function updateBalance(amount, transaction) {
    if(transaction == "deposit") return deposit(amount)
    return withdraw(amount)
}


bankAccount.__proto__.updateBalance = updateBalance


console.log(bankAccount.updateBalance(500, "deposit"));
console.log(bankAccount.updateBalance(200, "withdraw"));
console.log(bankAccount.updateBalance(-100, "deposit"));
console.log(bankAccount.updateBalance(5000, "withdraw")); 
