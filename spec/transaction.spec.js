import Transaction from '../src/Transaction.js';

describe('Transactions', () => {
    let transaction;

    beforeEach(() => {
        transaction = new Transaction();
    });

    afterEach(() => {
        transaction = null;
    });

    it('should add a transaction to the transaction list', () => {
        // Arrange
        const transactionFormat = {
            date: new Date(),
            type: 'credit',
            amount: 1000,
        };

        // Act
        transaction.addTransaction(transactionFormat);

        // Assert
        const transactionList = transaction.getTransactionList();
        expect(transactionList).toContain(transactionFormat);
    });

    it('should increase the transaction list length when a transaction is added', () => {
        // Arrange
        const initialLength = transaction.getTransactionList().length;
        const transactionFormat = {
            date: new Date(),
            type: 'debit',
            amount: 500,
        };

        // Act
        transaction.addTransaction(transactionFormat);

        // Assert
        const updatedLength = transaction.getTransactionList().length;
        expect(updatedLength).toBe(initialLength + 1);
    });
});
