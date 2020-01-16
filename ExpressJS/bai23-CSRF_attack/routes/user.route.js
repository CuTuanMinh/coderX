var express = require('express');
var router = express.Router();
var controller = require('../controllers/user.controller');
var validate = require('../validate/user.validate');
var authMiddleware = require('../middleware/auth.middleware');

var multer = require('multer');
var upload = multer({ dest: './public/uploads' });
// -> multer hỗ trợ upload file 
// dest là path lưu trữ file upload
// req.file lưu thông tin về file upload

router.get('/', authMiddleware.requireAuth, controller.index);

// bai14-cookie
router.get('/cookie', function(req, res, next) {
	res.cookie('user-id', 12345); // server return cookie to client
	res.send('hello');
});
// ------------------

router.get('/search', controller.search);

router.get('/create', controller.getCreate);

router.post('/create', upload.single('avatar'), validate.postCreate, controller.postCreate);

router.get('/:id', controller.infoUser);

module.exports = router;