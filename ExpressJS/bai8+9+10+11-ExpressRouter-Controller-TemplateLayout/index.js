// install: 
// npm init
// npm install express --save
// run -> node index.js 

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var userRoutes = require('./routes/user.route');

var port = 4000;

// bai6-lowdb

//config of body-parser
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug'); /*thiết lập kiểu engine*/
app.set('views', './views'); /*thiết lập thư mục chứa các view là 'views'*/
// install pug package for highlight code -> ctrl shift P


// bai11-static files
app.use(express.static('public')); 
//khai bao luu cac file static trong public -> localhost:4000/styles/custom.css

app.get('/', function(request, response) {
	// response.send('<h1>Hello world!</h1><a href="/users">User list</a>');
	response.render('index.pug', { 
		// đường dẫn tính từ views folder
		name: "Vu Hai Ngan"
	});
});
// active 'get' request, server return by response

app.use('/users', userRoutes);

app.listen(port, function() {
	console.log('Server listening on port ', port);
});


