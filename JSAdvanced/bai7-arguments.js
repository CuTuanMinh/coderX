// Array-like object & arguments
// arguments là biến nằm trong tất cả các hàm, trừ arrow function
// arguments là 1 object, giống vs array => nên gọi là Array-like object

const names = ['Ngan', 'Nga', 'Huyen'];
for (let i = 0; i < names.length; i++) {
	console.log(names[i]);
}

const obj = {
	0: 'Nga',
	1: 'Huyen',
	2: 'Ngan',
	length: 3
};
for (let i = 0; i < obj.length; i++) {
	console.log(obj[i]);
}

// obj is Array-like object, has 'length' property and index 
// but do not have method of Array




// arguments là 1 Array-like object tồn tại trong scope của 1 function
function sum() {
	console.log(arguments);
	console.log(arguments.length);
}
sum();
sum(1, 2, 3, 4, 10);

function sum2() {
	let result = 0;
	for (let i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}
	return result;
};

console.log('sum 2:', sum2(22, 44, 34));

// convert Array-like object to Array
// numbers = Array.from(arguments)

function sum3() {
	const numbers = Array.from(arguments);
	return numbers.reduce(function(sum, item) {
		return sum + item;
	});
} 

console.log('sum 3:', sum3(33,22,66));