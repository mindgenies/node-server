var request = require('request');
module.exports = function (calback)
{
    	var url = "http://ipinfo.io";
		request({url: url,json: true},function (error, response, body) {
		if(error)
		{
			calback("Error in fetch Location.");
		}

		var city = body.city;
		calback(city);
		
	});
};