var argv = require('yargs')
			.command('hello', 'make a get HTTP request', function (yargs) {
		    return yargs.option('name', {
		      demand: true,
		      alias: 'n',
		      description: 'Enter name'
		    }).option('lname', {
		      demand: true,
		      alias: 'l',
		      description: 'Enter lname'
		    })
		  })
		  .help()
		  .argv
console.log(argv);