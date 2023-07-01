import Account from '../src/Account.js';
describe('Accounts', () => {
    let bankAccount
    beforeEach(() => {
        bankAccount = new Account();
    });
    it("should return the balance zero", () => {
        expect(bankAccount.getBalance()).toBe(0);
    });
});

describe('Making a deposit', () => {
    let account;

    beforeEach(() => {
        account = new Account();
    });

    it('should increase the balance when a deposit is made', () => {
        // Arrange
        const initialBalance = account.getBalance();
        const depositAmount = 1000;

        // Act
        account.deposit(depositAmount);

        // Assert
        const newBalance = account.getBalance();
        expect(newBalance).toBe(initialBalance + depositAmount);
    });
});



