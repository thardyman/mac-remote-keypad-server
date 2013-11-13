// Use an immediate function
(function(){
	"use strict";
	var express = require('express');
	var app = express();
	var port = 4444;

	app.get('/index.html', function(req, res){
		res.send('My QWERTY Keyboard app');
	});

	app.listen(port);
	console.log('Listening on port ' + port);
})();
