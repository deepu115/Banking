import Transaction from '../src/Transaction.js';

describe('Transactions', () => {
    let transaction;

    beforeEach(() => {
        transaction = new Transaction(new Date(), 'credit', 1000);
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
        expect(updatedLength).toBe(1);
    });
    it('should show the recent transaction first', () => {
        // Arrange
        const transaction1 = new Transaction(new Date(2023, 4, 5), 'credit', 1000);
        const transaction2 = new Transaction(new Date(2023, 3, 4), 'debit', 500);
        const transaction3 = new Transaction(new Date(2023, 6, 3), 'credit', 2000);
        transaction.addTransaction(transaction1);
        transaction.addTransaction(transaction2);
        transaction.addTransaction(transaction3);

        // Act
        const transactionList = transaction.getTransactionList();

        // Assert
        expect(transactionList).toEqual([transaction3, transaction1, transaction2]);
    });
    it('if the both transactions are in same date debits show first', () => {
        // Arrange
        const transaction1 = new Transaction(new Date(2023, 2, 3), 'credit', 1000);
        const transaction2 = new Transaction(new Date(2023, 5, 5), 'debit', 500);
        const transaction3 = new Transaction(new Date(2023, 5, 5), 'credit', 2000);
        transaction.addTransaction(transaction1);
        transaction.addTransaction(transaction2);
        transaction.addTransaction(transaction3);

        // Act
        const transactionList = transaction.getTransactionList();

        // Assert
        expect(transactionList).toEqual([transaction2, transaction3, transaction1]);
    });
});
