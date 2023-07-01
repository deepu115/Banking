class Account {
    #balance
    #depositLimit;
    constructor() {
        this.#balance = 0
        this.#depositLimit = 5000;
    };
    getBalance() {
        return this.#balance;
    };
    deposit(value) {
        if (value > this.#depositLimit || value <= 0) {
            throw new Error('Invalid Deposit Amount');
        }
        this.#balance += value;
    }
    withdraw(amount) {
        const isInvalidAmount = typeof amount !== 'number' || isNaN(amount) || amount <= 0;
        const isInsufficientFunds = amount > this.#balance;

        if (isInvalidAmount || isInsufficientFunds) {
            throw new Error('Invalid withdrawal amount');
        }

        this.#balance -= amount;
    }
}
export default Account;