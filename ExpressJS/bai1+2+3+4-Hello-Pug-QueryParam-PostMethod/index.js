// install: 
// npm init
// npm install express --save
// run -> node index.js 

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = 4000;

var users = [
	{ id: 1, name: "Vu Hai Ngan"},
	{ id: 2, name: "Le Nhu Quy"}
]; 

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
	res.render('./users/index', {
		users: users });
});




// bai3-Query
app.get('/users/search', function(req, res) {
	console.log(req.query); 
	// /users/search?q=th&age=10 -> {q: 'th', age: '10'} 
	var q = req.query.q;
	var matchedUsers = users.filter(function(user) {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	
	res.render('./users/index', {
		users: matchedUsers,
		param: q
	});
});




// bai4-POST method
app.get('/users/create', function(req, res) {
	res.render('./users/create');
});

app.post('/users/create', function(req, res) {
	console.log(req.body); 
	// print post value
	// need to install body-parser
	// need to install body-parser
	users.push(req.body);
	res.redirect('/users');
});

app.listen(port, function() {
	console.log('Server listening on port ', port);
});


