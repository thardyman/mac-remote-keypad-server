// key handling
var keys=require('./keys');
var sys = require('sys');
var exec = require('child_process').exec;

function puts(error, stdout, stderr) { sys.puts(stdout) }

function sendKey(key){
		exec("script/sendkey.sh " + key, puts);
}
function sendAscii(key){
		exec("script/sendascii.sh " + key, puts);
}

exports.presskey = function(req, res){
	var key = keys.getKeyById(req.query.key);
	res.send('Keypressed = ' + key.label);
	key.type === 'ascii' ? sendAscii(key.key) : sendKey(key.key);
};

