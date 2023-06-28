import Account from '../src/Account.js';
describe('Balance Tests', () => {
    let bankAccount
    beforeEach(() => {
        bankAccount = new Account();
    });
    it("should return the balance zero", () => {
        expect(bankAccount.getBalance()).toBe(0);
    });
});