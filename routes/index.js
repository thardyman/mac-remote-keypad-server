
/*
 * GET home page.
 */
var keys=require('../script/keys');

exports.index = function(req, res){
	res.render('index', { title: 'Virtual Keypad', keyboard: keys.data});
};
