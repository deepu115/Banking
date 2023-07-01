import Account from '../src/Account.js';
describe('Accounts', () => {
    let bankAccount
    beforeEach(() => {
        bankAccount = new Account();
    });
    afterEach(() => {
        bankAccount = null;
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
    afterEach(() => {
        account = null;
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
        expect(() => { account.deposit(100000) }).toThrowError('Invalid Deposit Amount');
        expect(account.getBalance()).toBe(initialBalance);
    });
    it('should throw an error if deposit amount is not greater than zero', () => {
        // Arrange
        const invalidDepositAmount = 0;

        // Act and Assert
        expect(() => {
            account.deposit(invalidDepositAmount);
        }).toThrowError('Invalid Deposit Amount');

        expect(account.getBalance()).toBe(0);
    });

});

describe('Making a withdrawal', () => {
    let account;

    beforeEach(() => {
        account = new Account();
    });
    afterEach(() => {
        account = null;
    });

    it('should decrease the balance when a withdrawal is made', () => {
        // Arrange
        const initialBalance = 1000;
        account.deposit(initialBalance);
        const withdrawalAmount = 500;

        // Act
        account.withdraw(withdrawalAmount);

        // Assert
        const newBalance = account.getBalance();
        expect(newBalance).toBe(initialBalance - withdrawalAmount);
    });
    it('should throw an error if there are not enough funds available for withdrawal', () => {
        // Arrange
        const insufficientFunds = 1000;

        // Act and Assert
        expect(() => {
            account.withdraw(insufficientFunds);
        }).toThrowError('Invalid withdrawal amount');

        expect(account.getBalance()).toBe(0);
    });
    it('should throw an error if the withdrawal amount is not a number', () => {
        // Arrange
        const initialBalance = 1000;
        const invalidWithdrawalAmount = '500';
        account.deposit(initialBalance);

        // Act and Assert
        expect(() => {
            account.withdraw(invalidWithdrawalAmount);
        }).toThrowError('Invalid withdrawal amount');

        expect(account.getBalance()).toBe(initialBalance);
    });
    it('should throw an error if the withdrawal amount is not greater than zero', () => {
        // Arrange
        const initialBalance = 1000;
        const invalidWithdrawalAmount = -2;
        account.deposit(initialBalance);

        // Act and Assert
        expect(() => {
            account.withdraw(invalidWithdrawalAmount);
        }).toThrowError('Invalid withdrawal amount');

        expect(account.getBalance()).toBe(initialBalance);
    });

});


