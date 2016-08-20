var storage = require("node-persist");
storage.initSync();

function createAccount(account)
{
	var accounts = storage.getItemSync("accountls");
	if(typeof accounts == "undifined")
	{
		accounts = [];
	}
	accounts.push(account);
	storage.setItemSync("accountls",accounts);
	return account;
}

function getAccount(userName)
{
	var gaccount = {};
	var accounts = storage.getItemSync("accountls");
	accounts.some(function (acc) {
		if(acc.username == userName)
		{
				gaccount = acc;
				return true;
		}
	});
	return gaccount;
}

//createAccount({"name":"Dhanajay","username":"dhan","password":"#dhan"});
console.log(getAccount("dhan"));