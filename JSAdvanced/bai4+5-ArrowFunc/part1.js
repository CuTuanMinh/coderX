// way1
function sum(a, b) {
	return a + b;
}
console.log(sum(1, 2));


// way2
var sum2 = function(a, b) {
	return a + b;
}
console.log(sum2(1, 2));

// arrow function way 1
var sum3 = (a, b) => {
	return a + b;
}
console.log(sum3(1, 2));


// array function way 2
var sum4 = (a, b) => a + b;
console.log(sum4(1, 2));

var square = x => x*x; // có 1 tham số thì ko cần ngoặc
console.log(square(5));



var arr = [1, 2, 3];
var squareArr = arr.map(item => item*item);
console.log(squareArr);