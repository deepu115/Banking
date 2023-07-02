import Transaction from "./Transaction.js";


class Statement {
    constructor(transaction) {
        this.transaction = transaction || new Transaction(); // Initialize with a transaction object or create a new instance of Transaction
    }

    formatDate(date) {
        // Format the date as "dd/mm/yyyy"
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    formatAmount(amount) {
        // Format the amount with two decimal places if it's a number
        return typeof amount === 'number' ? amount.toFixed(2) : '';
        //Return an empty string if the amount is not a number
    }


    printStatement() {
        // Get the list of transactions and reverse it to print in descending order
        const transactions = this.transaction.getTransactionList().reverse();


        let balance = 0;
        let statement = '';
        // Add the header line to the statement
        statement += 'Date       || Credit     || Debit      || Balance\n';
        // Format the credit and debit amounts
        transactions.forEach((transaction) => {
            const formattedDate = this.formatDate(transaction.getDate());
            const formattedCredit = this.formatAmount(transaction.getType() === 'credit' ? transaction.getAmount() : '').padStart(10);
            const formattedDebit = this.formatAmount(transaction.getType() === 'debit' ? transaction.getAmount() : '').padStart(10);
            // Update the balance based on the transaction type and amount
            balance += transaction.getType() === 'credit' ? transaction.getAmount() : -transaction.getAmount();
            const formattedBalance = this.formatAmount(balance);// Format the balance and add color based on its value
            const balanceColor = balance < 0 ? '\x1b[31m' : '\x1b[32m';
            statement += `${formattedDate} || ${formattedCredit ? '\x1b[32m' + formattedCredit + '\x1b[0m' : ''} || ${formattedDebit ? '\x1b[31m' + formattedDebit + '\x1b[0m' : ''} || ${balanceColor + formattedBalance + '\x1b[0m'}\n`;
            // Construct the statement line with formatted values and colors
        });

        return statement;
    }
}

export default Statement;
