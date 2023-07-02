import Transaction from './Transaction.js';

class Statement {
    constructor(transaction) {
        this.transaction = transaction || new Transaction();
    }

    formatDate(date) {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    formatAmount(amount) {
        if (typeof amount === 'number') {
            return amount.toFixed(2);
        }
        return '';
    }


    printStatement() {
        const transactions = this.transaction.getTransactionList().reverse();


        let balance = 0;
        let statement = '';

        statement += 'Date      || Credit    || Debit     || Balance\n';

        transactions.forEach((transaction) => {
            const formattedDate = this.formatDate(transaction.getDate());
            const formattedCredit = this.formatAmount(transaction.getType() === 'credit' ? transaction.getAmount() : '').padStart(10);
            const formattedDebit = this.formatAmount(transaction.getType() === 'debit' ? transaction.getAmount() : '').padStart(10);

            balance += transaction.getType() === 'credit' ? transaction.getAmount() : -transaction.getAmount();

            statement += `${formattedDate}|| ${formattedCredit}|| ${formattedDebit}|| ${this.formatAmount(balance)}\n`;

        });

        return statement;
    }
}

export default Statement;
