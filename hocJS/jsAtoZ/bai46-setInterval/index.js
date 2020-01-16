//setInterval
//clearInterval

setInterval(func, ms) sau mỗi ms thì lại thực hiện func
var i = 0;
var intervalId = setInterval(function() {
	++i;
	console.log(i);
	if (i === 5) {
		clearInterval(intervalId);
	}
}, 1000);


//write a function count from 1 to 10
//return a promise
function countFrom(a, b) {
	return new Promise(function(resolve, reject) {
		var intervalId = setInterval(function() {
			console.log(a);
			a++;
			if (a === b) {
				clearInterval(intervalId); 
				resolve();
			} 	
		}, 1000);
	});
}

countFrom(1, 10).then(function() {
	console.log('Done');
});