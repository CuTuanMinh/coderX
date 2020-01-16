// ...rest - còn lại
// rest return array 
// arguments return array-like object

function log(a, ...numbers) {
	console.log(a); //1
	console.log(numbers); //[2, 3, 4]
	console.log(arguments);
}

function log2(...numbers) {
	console.log(numbers);
	console.log(arguments);
}

log(1, 2, 3, 4);
log2(1, 2, 3, 4);


function sum(...numbers) {
	return numbers.reduce((a, b) => a + b);
}

console.log(sum(2, 4, 5));


function concat(seperator, ...strings) {
	let result = strings.join(seperator);
	console.log(result);
	console.log(arguments);
}

concat('.', 'a', 'b', 'c');
//=> 'a.b.c'