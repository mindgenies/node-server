function getWeather(city)
{
	return new Promise(function(resolve,reject)	{
		
			var request = require('request');
			var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=0c909f3be2116b60d7e78f1061a20f1d";
			request({url: url,json: true},function (error, response, body) {
				
				if(error)
				{
					reject("Error in fetch weather.");
				}
				resolve("Temprature of "+ city + " is " + body.main.temp);
			});
	});
}

console.log("RESULT:");

getWeather("london").then(
	function (data)
	{
			console.log(data);
	},
	function (error)
	{
			console.log(error);
	}
);