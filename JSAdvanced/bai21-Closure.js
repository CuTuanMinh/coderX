// closure
//trong JS: hàm có thể trả về hàm
//closure là 1 funcion gọi biến nằm ngoài scope của function đó 
//closure ứng dụng trong function factory


function sum(a, b) {
	const c = a + b;
	return function() {
		console.log(c);
	};
}

sum(1, 2)();

function debug(name) {
	return function(str) {
		console.log(`[${name}] ${str}`);
	}
}

const log = debug('Mouse');
log('Error happend');// => [Mouse] Error happend

// 2 dòng trên tương đương với
debug('Mouse')('Error happend');