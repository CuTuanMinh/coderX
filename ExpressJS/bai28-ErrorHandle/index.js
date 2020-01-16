function add(a, b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw new Error('Wrong type');
	}
	return a + b;
}

try {
	var result = add('a', 1);
} catch(e) {
	console.log(e);
}

console.log('done'); 
// dùng try catch dù hàm sai thì vẫn chạy tiếp code sau đó
