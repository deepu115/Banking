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
        if (value < this.#depositLimit) {
            this.#balance += value;
        } else {
            throw new Error('Deposit amount exceeds limit');
        }
    }
}
export default Account;