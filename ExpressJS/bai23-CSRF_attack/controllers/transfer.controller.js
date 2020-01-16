var db = require('../db');
var shortid = require('shortid');

module.exports.create = function(req, res, next) {
	res.render('transfer/create', {
		csrfToken: req.csrfToken()
		// dùng csurf, request tự tạo ra method csrfToken()
	});
};

module.exports.postCreate = function(req, res, next) {
	var data = {
		id: shortid.generate(),
		amount: parseInt(req.body.amount),
		accountID: req.body.accountID,
		userID: req.signedCookies.userID
	}

	db.get('transfers')
	  .push(data)
	  .write();
	res.redirect('/transfer/create');
};