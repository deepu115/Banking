class Transaction {
    constructor(date, type, amount) {
        this.date = date;
        this.type = type;
        this.amount = amount;
        this.transactionList = [];
    }

    addTransaction(transfer) {
        this.transactionList.push(transfer);
    }
    sortTransactionsByDate() {
        return this.transactionList.sort((a, b) => {
            if (b.date.getTime() === a.date.getTime()) {
                // If the dates are the same, sort debits before credits
                return a.type === 'debit' ? -1 : 1;
            }
            // Sort by date in descending order
            return b.date.getTime() - a.date.getTime();
        });
    }

    getTransactionList() {
        return this.sortTransactionsByDate();
    }
}

export default Transaction;
