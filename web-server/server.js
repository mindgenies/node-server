var express = require("express");
var app = express();
/**/
app.listen(3000);

var  middleWare = {
	middleW: function (req,res,next)
	{
		console.log("REQUEST " + req.method + " " + new Date().toString() + " "+ req.originalUrl);
		next();
	},
	localMiddle: function (req,res,next)
	{
		console.log("abount request");
		next();
	}
};

app.use(middleWare.middleW);
app.get('/about', middleWare.localMiddle ,function (req,res) {
	res.send("<b>I am santosh singh</b>");
});

app.use(express.static(__dirname + '/public'));