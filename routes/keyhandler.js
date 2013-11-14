// key handling
var keys=require('../script/keys');
var sys = require('sys');
var exec = require('child_process').exec;

function puts(error, stdout, stderr) { sys.puts(stdout) }

function keystrokeCmd(keystroke){
	return 'osascript -e \'tell application "System Events" to keystroke ' + keystroke + "'";
}


exports.presskey = function(req, res){
	var key = keys.getKeyById(req.query.key);
	res.send('Keypressed = ' + key.label);
	if(key.type === 'ascii'){
		exec(keystrokeCmd("(ASCII character " + key.key + ")"), puts);
	}
	else{
		exec(keystrokeCmd('"' + key.key + '"'), puts);
	}
};

