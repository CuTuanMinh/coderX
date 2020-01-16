module.exports.postCreate = function (req, res, next) {
	var errors = [];
	if (!req.body.name) {
		errors.push('Name is required');
	}
	if (!req.body.phone) {
		errors.push('Phone is required');
	}
	if (errors.length) {
		// = errors.length > 0
		// falsy, truthy 
		res.render('users/create', {
			errors: errors,
			value: req.body
		});
		return; //ko thuc hien code phia sau nua
	}

	res.locals.success = true; 
	//object 'res.locals' luu data de truyen tu middleware1 -> middleware2
	next();
}