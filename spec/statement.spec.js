import Statement from '../src/Statement.js';
import Transaction from '../src/Transaction.js';

describe('Statement Printer', () => {
    let statementPrinter;
    let transaction;

    beforeEach(() => {
        statementPrinter = new Statement();
        transaction = new Transaction();
    });

    afterEach(() => {
        statementPrinter = null;
        transaction = null;
    });

    it('should print a statement with all transactions', () => {
        // Arrange
        const transaction1 = new Transaction('11/05/2023', 'debit', 500, 2500);
        const transaction2 = new Transaction('10/04/2023', 'credit', 2000, 3000);
        const transaction3 = new Transaction('09/03/2023', 'credit', 1000, 1000);
        transaction.addTransaction(transaction1);
        transaction.addTransaction(transaction2);
        transaction.addTransaction(transaction3);

        // Act
        const statement = statementPrinter.printStatement(transaction.getTransactions());

        // Assert
        expect(statement).toEqual(`Date       || Credit  || Debit  || Balance\n` +
            `11/05/2023 ||         || 500.00 || 2500.00\n` +
            `10/04/2023 || 2000.00 ||        || 3000.00\n` +
            `09/03/2023 || 1000.00 ||        || 1000.00\n`);
    });
});
