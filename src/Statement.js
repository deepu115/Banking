import Transaction from './Transaction.js';

class Statement {
    constructor(transaction) {
        this.transaction = transaction || new Transaction();
    }

    formatDate(date) {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
    }

    printStatement() {
        let statement = 'Date       || Credit  || Debit  || Balance\n';
        let balance = 0;

        const transactions = this.transaction.getTransactionList();

        // Sort transactions in ascending order based on date
        transactions.sort((a, b) => a.date - b.date);

        for (let i = 0; i < transactions.length; i++) {
            const { date, type, amount } = transactions[i];

            if (type === 'credit') {
                balance += amount;
            } else if (type === 'debit') {
                balance -= amount;
            }

            statement += `${this.formatDate(date)} || ${type === 'credit' ? amount.toFixed(2) : '       '} || ${type === 'debit' ? amount.toFixed(2) : '      '} || ${balance.toFixed(2)}\n`;
        }

        return statement;
    }

}

export default Statement;
