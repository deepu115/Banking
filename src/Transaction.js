class Transaction {
    constructor() {
        this.transactionList = [];
    }

    addTransaction(transfer) {
        this.transactionList.push(transfer);
    }

    getTransactionList() {
        return this.transactionList;
    }
}

export default Transaction;
