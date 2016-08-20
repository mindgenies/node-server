var accounts = [];

function createAccount(account)
{
	accounts.push(account);
}

function getAccount(username1)
{
	var acc= '';
	accounts.some(function (account) {
		
		if(account.username == username1)
		{
			acc = account;
			return true;
		}
	});
	return acc;
}

function deposit(account,amount)
{
	account.balance += amount; 
}

function withdraw(account,amount)
{
	account.balance -= amount; 
}

function getBalance(account)
{
	return account.balance; 
}

var account1 = {};
account1.username = "dhananjay";
account1.balance = 0;

createAccount(account1);

var account2 = {};
account2.username = "santosh" 
account2.balance = 100

createAccount(account2);
//console.log(accounts);
var acc1 = getAccount("dhananjay");
deposit(acc1,1000);
withdraw(acc1,100);
console.log(getBalance(acc1));
var acc2 = getAccount("santosh");
console.log(getBalance);