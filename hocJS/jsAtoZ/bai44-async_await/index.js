//async await dùng như node co
var fs = require('fs');

function readFilePromise(path) {
	return new Promise(function(resolve, reject) {
		fs.readFile(path, { encoding: "utf8" }, function(err, data) {
			if (err) reject(err);
			else resolve(data);
		});
	});
}

async function run() {
	//hàm này dùng các method của async nên cần khai báo đây là hàm async bằng cách thêm 'async' vào trc tên hàm
	var song1 = await readFilePromise('song1.txt');
	var song2 = await readFilePromise('song2.txt');
	// console.log(song1, song2);
	return [song1, song2];
	//await giống yield trong generator func 
}

run().then(function(values) {
	console.log(values);
});

//chú ý: 
// async function ko await đc cả mảng promise mà phải chuyển về Promise.all
// ví dụ
// var values = await Promise.all(files.map(function(file) {
// 	return readFilePromise(file);
// }));
