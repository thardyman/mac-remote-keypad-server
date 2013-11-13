// Use an immediate function
(function(){
	"use strict";
	var express = require('express');
	var app = express();
	var port = 4444;
	var sys = require('sys');
	var exec = require('child_process').exec;

	var keys = [
		{key:0, label:'0', id:'0'},
		{key:1, label:'1', id:'1'},
		{key:2, label:'2', id:'2'},
		{key:3, label:'3', id:'3'},
		{key:4, label:'4', id:'4'},
		{key:5, label:'5', id:'5'},
		{key:6, label:'6', id:'6'},
		{key:7, label:'7', id:'7'},
		{key:8, label:'8', id:'8'},
		{key:9, label:'9', id:'9'},
		{key:',', label:',', id:'comma'},
		{key:'.', label:'.', id:'dot'}];

	// Host the static assets
	app.use(express.static('../public'));

	app.get('/index.html', function(req, res){
		var keyboard = "";

		keys.forEach(function(theKey){
			keyboard += '<li class=key-' + theKey.id +'><a href=keypress?key='+theKey.id+' target=key-sender>' + theKey.label + '</a></li>'
		});
		res.send('<h1>Virtual Keypad</h1>' +
				'<ul>'+ keyboard +'</ul>' +
				'<iframe name=key-sender src="#" class=hidden></iframe>');

	});

	app.get('/keypress', function(req, res){
		var key = keys.filter(function(item){return item.id === req.query.key})[0];
		res.send('Keypressed = ' + key.label);
		sendKey(key.key);
	});

	function puts(error, stdout, stderr) { sys.puts(stdout) }

	function sendKey(key){
		exec("../script/sendkey.sh " + key, puts);
	}

	app.listen(port);
	console.log('Listening on port ' + port);
})();
