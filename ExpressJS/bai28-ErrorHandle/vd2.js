function reject() {
	return new Promise(function(resolve, reject) {
		reject(new Error('Promise error'));
	});
}

reject().catch(function(e) {
	console.log(e.message);
});