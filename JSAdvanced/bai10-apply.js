// different between 'call' & 'apply'
// call: func.call(this, param1, param2,...)
// apply: func.apply(this, [param1, param2,...])

function greeting() {
	console.log(`Hi! ${this.name}. I 'm ${this.age}`);
}

const cat = {
	name: 'Tom',
	age: '100'
};

greeting.call(cat);
greeting.apply(cat);



function sum() {
	const number = Array.from(arguments);
	return number.reduce((sum, item) => sum + item, 0);
}

function average() {
	var x = sum.apply(null, arguments);
	return x / arguments.length;
}
console.log(average(1, 2, 3, 6));
