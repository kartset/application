/*
exports.render = function(req, res) {
	res.send('Hello World');
};
*/

exports.render = function(req, res) {
res.render('index', {
title: 'Hello World'
})
};
