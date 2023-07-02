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

        this.#balance += value;
        this.#transaction.addTransaction({
            date: new Date().toISOString(),
            type: 'credit',
            amount: value,
            balance: this.getBalance(),
        });
    }

    withdraw(amount) {
        const isInvalidAmount = typeof amount !== 'number' || isNaN(amount) || amount <= 0;
        const isInsufficientFunds = amount > this.#balance;

        if (isInvalidAmount || isInsufficientFunds) {
            throw new Error('Invalid withdrawal amount');
        }

        this.#balance -= amount;
        this.#transaction.addTransaction({
            date: new Date().toISOString(),
            type: 'debit',
            amount: amount,
            balance: this.getBalance(),
        });
    }
}

export default Account;
