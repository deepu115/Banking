import Transaction from './Transaction.js';

class Account {
    #balance;
    #depositLimit;
    #transaction;

    constructor() {
        this.#balance = 0;
        this.#depositLimit = 5000;
        this.#transaction = new Transaction();
    }

    getBalance() {
        return this.#balance;
    }

    deposit(value) {
        if (value > this.#depositLimit || value <= 0) {
            throw new Error('Invalid Deposit Amount');
        }
        // Check if the deposit amount exceeds the limit or is not greater than zero
        this.#balance += value;
        this.#transaction.addTransaction({ date: new Date().toISOString(), type: 'credit', amount: value, balance: this.getBalance(), });
        // Add a new transaction with the current date, type, amount, and balance   
    }

    withdraw(amount) {
        const isInvalidAmount = typeof amount !== 'number' || isNaN(amount) || amount <= 0;
        const isInsufficientFunds = amount > this.#balance;
        // Check if the withdrawal amount is invalid or there are insufficient funds
        isInvalidAmount || isInsufficientFunds ? (() => { throw new Error('Invalid withdrawal amount'); })() : null;

        this.#balance -= amount;
        this.#transaction.addTransaction({ date: new Date().toISOString(), type: 'debit', amount: amount, balance: this.getBalance(), });
        // Add a new transaction with the current date, type, amount, and balance  
    }
}

export default Account;
