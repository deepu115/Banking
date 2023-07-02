class Transaction {
    constructor(date, type, amount, balance) {
        this.date = new Date(date);
        this.type = type;
        this.amount = amount;
        this.transactionList = [];
        this.balance = balance;
    }

    addTransaction(transaction) {
        // Add a transaction to the transaction list
        this.transactionList.push(transaction);
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
    getDate() {
        return this.date;
    }
    getType() {
        return this.type;
    }
    getAmount() {
        return this.amount;
    }
}

export default Transaction;
