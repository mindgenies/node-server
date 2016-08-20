module.exports = function (city,calback)
{
	var request = require('request');
	var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=0c909f3be2116b60d7e78f1061a20f1d";
	request({url: url,json: true},function (error, response, body) {
		if(error)
		{
			calback("Error in fetch weather.");
		}
		calback("Temprature of "+ city + " is " + body.main.temp);
	});
};


