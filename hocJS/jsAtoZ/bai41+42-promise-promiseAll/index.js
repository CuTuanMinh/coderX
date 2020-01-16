// Promise là 1 object
// 1 module sử dụng promise là Promise-fs (promide dành cho fs)
var fs = require("promise-fs");

// Cách 1
fs.readFile("song1.txt", { encoding: "utf8" })
	.then(function(song1){
		console.log(song1);
	})
	.catch(function(err){
		console.log(err);
	});

// Cách 2
function onDone(content) {
	console.log(content);
}

function onError(err) {
	console.log(err);
}

function readFile(path){
	return fs.readFile(path, { encoding: "utf8" });
}

readFile("song1.txt")
	.then(onDone)
	.catch(onError)
	.then(function() {
		return readFile('song2.txt');
	})
	.then(onDone)
	.catch(onError);

// //then, catch là các method của promise
 
// // ---------------------------------------------------

//khai báo và sử dụng promise
var fs2 = require("fs");

function readFilePromise(path) {
	return new Promise(function(resolve, reject) { //khai báo 1 obj Promise
		//resolve đc gọi khi function thực hiện xong, reject dc gọi khi function fail
		fs2.readFile(path, { encoding: "utf8"}, function(err, data) {
			if (err) reject(err); //những gì đc truyền vào reject sẽ đc truyền vào callback của catch
			else resolve(data); //những gì đc truyền vào resolve sẽ đc truyền vào callback của then
		});
	});
}

readFilePromise("song1.txt") //đọc lần lượt 3 file
	.then(function(content) {
		console.log(content);
	})
	.catch(function(err) {
		console.log(err);
	})
	.then(function() {
		return readFilePromise("song2.txt");
	})
	.then(function(content) {
		console.log(content);
	})
	.catch(function(err) {
		console.log(err);
	});

// -------------------------------------------------------
// Promise.all  -> đọc file ko cần thứ tự
Promise.all([
	readFilePromise("song1.txt"),
	readFilePromise("song2.txt")
]).then(function(values) {
	console.log(values); //values là mảng các kết quả
}).catch(function(error) {
	console.log(error);
});
