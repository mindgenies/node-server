var weatherit = require("./weather.js");
var locit = require("./location.js");

var argv = require("yargs").option('city',{demand: false, description: "Please enter city",type: 'string'}).help().argv;

if(typeof argv.city === 'undefined')
{
	locit(function (lc) {
		weatherit(lc,function (msg) {
		   console.log(msg);
		});

	});
}
else
{
	weatherit(argv.city,function (msg) {
	   console.log(msg);
	});
}



