var db = require('../db');
var md5 = require('md5'); 

module.exports.login = function(req, res) {
	res.render('auth/login', {
		csrfToken: req.csrfToken()
	});
};

module.exports.postLogin = function(req, res) {
	var email = req.body.email;
	var password = req.body.password;

	var user = db.get('users')
	             .find({ email: email })
	             .value();
	if (!user) {
		res.render('auth/login', {
			errors: ['User does not exist'],
			value: req.body
		});
		return;
	}

	if (user.password !== md5(password)) {
		res.render('auth/login', {
			errors: ['Wrong password'],
			value: req.body 
		});
		return;
	}

	res.cookie('userID', user.id, { signed: true });
	res.redirect('/users');
};