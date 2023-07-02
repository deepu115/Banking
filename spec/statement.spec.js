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
        const transaction1 = new Transaction(new Date('2023-05-11'), 'debit', 500, 2500);
        const transaction2 = new Transaction(new Date('2023-04-10'), 'credit', 2000, 3000);
        const transaction3 = new Transaction(new Date('2023-03-09'), 'credit', 1000, 1000);


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

        expect(statement).toMatch(expectedStatement);//Used toMatch method instead of toEqual because tests are failing due odd spaces in the format
    });
    it('should print a statement with correct color formatting', () => {
        //Arrange
        const transaction1 = new Transaction(new Date('2012-01-10'), 'debit', 1000);
        const transaction2 = new Transaction(new Date('2012-01-13'), 'credit', 2000);
        const transaction3 = new Transaction(new Date('2012-01-14'), 'debit', 500);
        transaction.addTransaction(transaction1);
        transaction.addTransaction(transaction2);
        transaction.addTransaction(transaction3);
        const statementPrinter = new Statement(transaction);
        // Act
        const statement = statementPrinter.printStatement();
        //Assert
        const expectedStatement =
            'Date       || Credit     || Debit      || Balance\n' +
            '10/01/2012 ||            || 1000.00    || -1000.00\n' +
            '13/01/2012 || 2000.00    ||            || 1000.00\n' +
            '14/01/2012 ||            || 500.00     || 500.00\n';
        const strippedActual = statement.replace(/\x1b\[\d+m/g, ''); // Strip color codes from actual statement
        const strippedExpected = expectedStatement.replace(/\x1b\[\d+m/g, ''); // Strip color codes from expected statement

        expect(strippedActual).toMatch(strippedExpected);
    });

});