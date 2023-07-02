import Statement from './Statement.js';
import Transaction from './Transaction.js';
// Create an instance of the Statement class
const transaction = new Transaction();

const transaction1 = new Transaction(new Date('2012-01-14'), 'debit', 500);
const transaction2 = new Transaction(new Date('2012-01-13'), 'credit', 2000);
const transaction3 = new Transaction(new Date('2012-01-10'), 'credit', 1000);
transaction.addTransaction(transaction1);
transaction.addTransaction(transaction2);
transaction.addTransaction(transaction3);
const statementPrinter = new Statement(transaction);


console.log(statementPrinter.printStatement());
