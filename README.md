# Bank

This challenge helps you practice your OO design skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification
### User Story 1 
As a client, 
I want to access my Account,
So that I can see the balance any time.

### Domain Model

|Object |Properties	     | Messages	  | Output    |
|Account|balance @number |getBalance()|	@Number   |

###
* Test that Account has an initial balance of zero.
* Test that calling the getBalance method on a Account instance returns the correct balance.

### User Story 2
As a client, 
I want to deposit amount in my Account,
So that I can increase the balance.

### Domain Model

|Object |Properties	     | Messages	    | Output      |
|Account|balance @number |deposit@number|	void()    |
|       |                |getBalance()  |	@number   |

###
* Test that making a deposit increases the balance of the Account by the deposited amount.
* Test that getting the current account balance after a successful deposit is equal to the sum of all previous balances.
* Test that deposit amount don't exceed the deposit limit
* Test that deposit value will be greater than zero.

### User Story 3
As a client, 
I want to withdraw amount from my Account,
So that I can use money.

### Domain Model

|Object |Properties	     | Messages	    | Output      |
|Account|balance @number |withdraw@number|	void()    |
|       |                |getBalance()  |	@number   |


* Test that making a withdrawal decreases the balance of the Account by the withdrawn amount.
* Test if there is enough funds available for withdrawal. 
* Test withdrawal amount is a valid number.
* Test withdrawal amount is greater than zero.


### Requirements

* Results of your code should display via the JavaScript console.  (NB: You don't need to implement a command line interface that takes user input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, credit or debit amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```


#### Standard
- [ ] Meets the spec
- [ ] Developed test-first
- [ ] Passes tests and code is clean and well formatted
- [ ] Encapsulates adding and storing Transactions in a class
- [ ] Encapsulates Statement formatting in a class
- [ ] Encapsulates Transaction data in a class

#### Extended
- [ ] Can you format the console output?  Credited values should be GREEN and debited values should be RED.  The balance should be GREEN if positive and RED if negative

You may find this link useful [Output to the command line using NodeJS](https://nodejs.dev/en/learn/output-to-the-command-line-using-nodejs/) - check the formatting section (and this links out to a GitHub doc on the [ANSI color codes](https://gist.github.com/iamnewton/8754917))
