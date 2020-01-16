var request = require("request");

function load(link) {
	return new Promise(function(resolve, reject) {
		request(link, function(error, response, body) {
			if (error) reject(error);
			else resolve(body);
		});
	});
}

var loadRequest = load("https://jsonplaceholder.typicode.com/todos/1");
loadRequest.then(function(content) {
				console.log("Done", content);
			})
			.catch(function(err) {
				console.log(err);
			});