// install: 
// npm init
// npm install express --save
// run -> node index.js 

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var shortid = require('shortid');

var port = 4000;

// bai6-lowdb

var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json'); 
var db = low(adapter);

// Set some defaults (required if your JSON file is empty), create if don't have JSON file
db.defaults({ users: [] })
  .write();

// var users = [
// 	{ id: 1, name: "Vu Hai Ngan"},
// 	{ id: 2, name: "Le Nhu Quy"}
// ]; 

//config of body-parser
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug'); /*thiết lập kiểu engine*/
app.set('views', './views'); /*thiết lập thư mục chứa các view là 'views'*/
// install pug package for highlight code -> ctrl shift P

app.get('/', function(request, response) {
	// response.send('<h1>Hello world!</h1><a href="/users">User list</a>');
	response.render('index.pug', { 
		// đường dẫn tính từ views folder
		name: "Vu Hai Ngan"
	});
});
// active 'get' request, server return by response

app.get('/users', function(req, res) {
	// res.send('User list');
	res.render('users/index', {
		users: db.get('users').value() });
});




// bai3-Query
app.get('/users/search', function(req, res) {
	console.log(req.query); 
	// /users/search?q=th&age=10 -> {q: 'th', age: '10'} 
	var q = req.query.q;
	var users = db.get('users').value();
	var matchedUsers = users.filter(function(user) {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	
	res.render('users/index', {
		users: matchedUsers,
		param: q
	});
});




// bai4-POST method
// use shortid for create id

app.get('/users/create', function(req, res) {
	res.render('users/create');
});

app.post('/users/create', function(req, res) {
	console.log(req.body); 
	req.body.id = shortid.generate();
	// print post value
	// need to install body-parser
	// need to install body-parser
	// users.push(req.body);
	db.get('users')
	  .push(req.body)
	  .write();
	res.redirect('/users');
});





// bai7 - view user

app.get('/users/:id', function(req, res) {
	var id = req.params.id;
	var user = db.get('users')
	             .find({ id: id })
	             .value();
	res.render('users/view', {
		user: user
	}); 
});

app.listen(port, function() {
	console.log('Server listening on port ', port);
});


