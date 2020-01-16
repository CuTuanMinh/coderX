var db = require('../../db');

module.exports.get = function(req, res) {
	var page = parseInt(req.query.page) || 1; // nếu ko có thì mặc định = 1
	var perPage = 2;

	var begin = (page - 1)*perPage;
	var end = page*perPage;

	var products = db.get("products").value().slice(begin, end);

	res.json(products); // nhận vào object, trả về json string cho client

	// app postman
};

module.exports.create = function(req, res) {
	var product = req.body;
	db.get('products').push(product).write();
	res.json(product);
}
// formula pagination
// page thứ n 
// mỗi page có x 
// begin = (n-1)*x 
// end = nx 
// items = array.slice(begin, end) 


