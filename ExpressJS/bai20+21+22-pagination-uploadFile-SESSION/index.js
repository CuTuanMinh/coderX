// install: 
// npm init
// npm install express --save
// run -> node index.js 

require('dotenv').config();
// khai báo để sử dụng .env, cần đã cài dotenv

console.log(process.env);  
// nơi lưu các biến môi trường

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var productRoute = require('./routes/product.route');
var cartRoute = require('./routes/cart.route');

var authMiddleware = require('./middleware/auth.middleware');
var sessionMiddleware = require('./middleware/session.middleware');

var port = 4000;

// bai6-lowdb

// app.use(cookieParser());
app.use(cookieParser("process.env.SESSION_SECRET"));
// dùng cookieParser và tạo signnature cookie 

//config of body-parser
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// bodyParser ko hỗ trợ multipart form-data -> gửi file sẽ bị lỗi
// -> dùng multer

app.use(sessionMiddleware); // ảnh hưởng đến tất cả các route

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

app.use('/users', userRoute);

// app.use('/users', authMiddleware.requireAuth, userRoute);
// use authMiddleware for all of user's Route

app.use('/products', productRoute);

app.use('/auth', authRoute);

app.use('/cart', cartRoute);

app.listen(port, function() {
	console.log('Server listening on port ', port);
});


