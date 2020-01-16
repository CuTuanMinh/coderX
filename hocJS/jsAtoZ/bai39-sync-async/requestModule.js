console.time("Time this");

var request = require('request');
request('https://randomuser.me/api/', function (error, response, body) {
	console.log('error:', error);
	console.log('statusCode:', response && response.statusCode);
	console.log('body:', body);
});

console.timeEnd("Time this");