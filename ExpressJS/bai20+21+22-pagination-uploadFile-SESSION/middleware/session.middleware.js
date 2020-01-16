var shortid = require('shortid');
var db = require('../db');

// kiểm tra đã set cookie chưa
module.exports = function(req, res, next) {
	if (!req.signedCookies.sessionID) {
		var sessionID = shortid.generate();
		res.cookie('sessionID', sessionID, { signed: true });
	
		db.get('sessions').push({
			id: sessionID
		}).write();
	}

	// res.locals.cart = user; 
	next();
	// hàm kiểm tra cookie này hoạt động ở tất cả các route
}