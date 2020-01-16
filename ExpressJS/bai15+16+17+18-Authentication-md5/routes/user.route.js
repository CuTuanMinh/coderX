var express = require('express');
var router = express.Router();
var controller = require('../controllers/user.controller');
var validate = require('../validate/user.validate');
var authMiddleware = require('../middleware/auth.middleware');

router.get('/', authMiddleware.requireAuth, controller.index);

// bai14-cookie
router.get('/cookie', function(req, res, next) {
	res.cookie('user-id', 12345); // server return cookie to client
	res.send('hello');
});
// ------------------

router.get('/search', controller.search);

router.get('/create', controller.getCreate);

router.post('/create', validate.postCreate, controller.postCreate);

router.get('/:id', controller.infoUser);

module.exports = router;