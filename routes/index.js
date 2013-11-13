
/*
 * GET home page.
 */
var keys=require('./keys');

exports.index = function(req, res){
	res.render('index', { title: 'Virtual Keypad', keyboard: keys.data});
};
