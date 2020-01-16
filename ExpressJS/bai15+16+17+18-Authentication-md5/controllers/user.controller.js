// module.exports = {
// 	a: 1, 
// 	b: 2
// }

// =

// module.exports.a = 1;
// module.exports.b = 2;




var db = require('../db');
var shortid = require('shortid');

module.exports.index = function(req, res) {
	// res.send('User list');
	res.render('users/index', {
		users: db.get('users').value()
	});
}

module.exports.search = function(req, res) {
	console.log(req.query); 
	// /search?q=th&age=10 -> {q: 'th', age: '10'} 
	var q = req.query.q;
	var users = db.get('users').value();
	var matchedUsers = users.filter(function(user) {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	
	res.render('users/index', {
		users: matchedUsers,
		param: q
	});
}

module.exports.getCreate = function(req, res) {
	res.render('users/create');
	console.log(req.cookies); 
	// watch returned cookie of server
	// need to install cookie-parser
	// mỗi lần thực hiện request bất kì, client đều gửi mã cookie đã nhận từ server trước đó lên server
}

module.exports.infoUser = function(req, res) {
	var id = req.params.id;
	var user = db.get('users')
	             .find({ id: id })
	             .value();
	res.render('users/view', {
		user: user
	}); 
}

module.exports.postCreate = function(req, res) {
	console.log(req.body); 
	// print post value
	// need to install body-parser
	// need to install body-parser
	// users.push(req.body);

	console.log(res.locals);
	
	req.body.id = shortid.generate();

	db.get('users')
	  .push(req.body)
	  .write();
	res.redirect('/users');
}

