import Account from '../src/Account.js';
import Transaction from '../src/Transaction.js';

describe('Account', () => {
    let account;

    beforeEach(() => {
        account = new Account();
    });

    afterEach(() => {
        account = null;
    });

    it('should add a transaction to the transaction list', () => {
        // Arrange
        const transaction = new Transaction(new Date(), 'deposit', 1000);

        // Act
        account.addTransaction(transaction);

        // Assert
        const transactionList = account.getTransactionList();
        expect(transactionList).toContain(transaction);
    });

    it('should increase the transaction list length when a transaction is added', () => {
        // Arrange
        const initialLength = account.getTransactionList().length;
        const transaction = new Transaction(new Date(), 'deposit', 2000);

        // Act
        account.addTransaction(transaction);

        // Assert
        const updatedLength = account.getTransactionList().length;
        expect(updatedLength).toBe(initialLength + 1);
    });
});
