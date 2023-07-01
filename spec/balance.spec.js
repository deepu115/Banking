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

    it('should throw an error if deposit amount exceeds the limit', () => {
        //Arrange
        const initialBalance = account.getBalance();
        //Act
        //Assert
        expect(() => { account.deposit(100000) }).toThrowError('Deposit amount exceeds limit');
        expect(account.getBalance()).toBe(initialBalance);
    });
    it('should throw an error if deposit amount is not greater than zero', () => {
        // Arrange
        const invalidDepositAmount = 0;

        // Act and Assert
        expect(() => {
            account.deposit(invalidDepositAmount);
        }).toThrowError('Invalid deposit amount');

        expect(account.getBalance()).toBe(0);
    });

});



