/*
exports.render = function(req, res) {
	res.send('Hello World');
};
*/

/*
exports.render = function(req, res) {
res.render('index', {
title: 'Hello World'
})
};
*/

exports.render = function(req, res) {

  if (req.session.lastVisit) {
    console.log(req.session.lastVisit);
  }

  req.session.lastVisit = new Date();

  res.render('index', {
    title: 'Hello World'
  });

};
