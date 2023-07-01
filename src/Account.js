class Account {
    #balance
    constructor() {
        this.#balance = 0
    };
    getBalance() {
        return this.#balance;
    };
    deposit(value) {
        this.#balance += value;
    }
}
export default Account;