var locit = require("./location.js");
var weatherit = require("./weather.js");
var argv = require("yargs").option("city",{description: "please enter city"}).help("help").argv;

function getLocation(city)
{
	return new Promise(function(resolve,reject)	
	{
       if(city !="")
       {
       		resolve(city);
       }
       
       locit(function (lc) {
		resolve(lc);
	   });
	});
}

function getWeather(location)
{
	return new Promise(function(resolve,reject)	
	{
		weatherit(location,function (msg) {
		   resolve(msg);
		});
	});
}

var locationdata = "";
if(typeof argv.city != "undefined")
{
	locationdata = argv.city;
}


getLocation(locationdata).then(function (location) {
	return getWeather(location);
}).then(function (data) {
	console.log(data);
}).catch(function () {
	console.log("Error");
});