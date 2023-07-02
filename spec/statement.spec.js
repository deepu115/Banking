import Statement from '../src/Statement.js';
import Transaction from '../src/Transaction.js';

describe('Statement Printer', () => {
    let statementPrinter;

    beforeEach(() => {
        statementPrinter = new Statement();
    });

    afterEach(() => {
        statementPrinter = null;
    });

    it('should print a statement with all transactions', () => {
        // Arrange
        const transaction1 = new Transaction(new Date('2023-05-11'), 'debit', 500, 2500);
        const transaction2 = new Transaction(new Date('2023-04-10'), 'credit', 2000, 3000);
        const transaction3 = new Transaction(new Date('2023-03-09'), 'credit', 1000, 1000);

        const transaction = new Transaction();
        transaction.addTransaction(transaction1);
        transaction.addTransaction(transaction2);
        transaction.addTransaction(transaction3);

        const statementPrinter = new Statement(transaction);

        // Act
        const statement = statementPrinter.printStatement();

        // Assert
        const expectedStatement =
            'Date       ||Credit    || Debit     || Balance\n' +
            '09/03/2023 ||   1000.00||           || 1000.00\n' +
            '10/04/2023 ||   2000.00||           || 3000.00\n' +
            '11/05/2023 ||          ||     500.00|| 2500.00\n';

        expect(statement).toMatch(expectedStatement);
    });


});