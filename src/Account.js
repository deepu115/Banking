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
        if (value < this.#depositLimit && value > 0) {
            this.#balance += value;
        } else {
            throw new Error('Invalid Deposit Amount');
        }
    }


}
export default Account;