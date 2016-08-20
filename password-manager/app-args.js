var stg = require("node-persist");
var crypto = require("crypto-js");
stg.initSync();

var argv = require("yargs")
		   .command('createAcc','Create New Account', function (yargs) {
		   		return yargs.option('name',{
		   			demand: true,
		   			description: 'Please enter name'
		   		})
		   		.option('username',{
		   			demand: true,
		   			description: 'Please enter username'
		   		})
		   		.option('password',{
		   			demand: true,
		   			description: 'Please enter password'
		   		})
		   		.option('masterpassword',{
		   			demand: true,
		   			description: 'Please enter master password'
		   		});
		   })
		    .command('getAcc','Get an Account', function (yargs) {
		   		return yargs.option('username',{
		   			demand: true,
		   			description: 'Please enter username'
		   		})
		   		.option('masterpassword',{
		   			demand: true,
		   			description: 'Please enter master password'
		   		});
		   })
		    .command('delAcc','delete an Account', function (yargs) {
		   		return yargs.option('username',{
		   			demand: true,
		   			description: 'Please enter username'
		   		});
		   })
		   .help('help')
		   .argv;

function createAcc(acc)
{
	var accounts = stg.getItemSync('accounts');
	if(typeof accounts == 'undefined')
	{
		accounts = [];
	}

	accounts.push(acc.toString());

	stg.setItemSync('accounts',accounts);
	return acc;
}

function getAcc(username,masterpassword)
{
	var accounts = stg.getItemSync('accounts');

	for(var i=0; i < accounts.length; i++)
	{
		try
		{
		var bytes = crypto.AES.decrypt(accounts[i],masterpassword);
		var acc = JSON.parse(bytes.toString(crypto.enc.Utf8));
		//console.log(acc);
		if(acc.username == username)
		{
			return acc;
		}
		}
		catch(e)
		{}
	}
}

function deleteAcc(username)
{
	var accounts = stg.getItemSync('accounts');
	if(typeof accounts == 'undefined')
	{
		accounts = [];
	}

	accounts.pop(username);
	stg.setItemSync('accounts',accounts);
}

var cmd = argv._[0];

if(cmd == 'createAcc')
{
	var acc = {'name':argv.name,'username':argv.username,'password':argv.password};
	var accString = JSON.stringify(acc);
	console.log(accString);
    var accEnc = crypto.AES.encrypt(accString,argv.masterpassword);
	var acc1 = createAcc(accEnc);
}
else if(cmd == 'getAcc')
{
	try
	{
		var account = getAcc(argv.username,argv.masterpassword);
		console.log(account);
	}
	catch(e)
	{
		console.log("Sorry! Unable to fetch account.");
	}
	
}
else if(cmd == 'delAcc')
{
	deleteAcc(argv.username);
	console.log("account deleted");
}
else
{
	var accounts = stg.getItemSync('accounts');
	console.log(accounts);
}

