var a = 2;
function test(a) {
	return console.log(a*2); 
}
test(5);

for (var i=0; i<3; i++) {
	console.log(i);	
	//setTimeout(() => console.log(i), 1);
}

for (let i=0; i<3; i++) {
	console.log(i);	
	//setTimeout(() => console.log(i), 1);
}

var obj = {
	0: {name: 'Minh'},
	1: {name: 'Ngan'}
};

console.log(obj, typeof obj);
var string = JSON.stringify(obj);
console.log(string, typeof string)

let c = 9;
var d = 10;
let c = 10; //can't assign
// c > 0 ? (c += 10, d+=1) : (c -= 1, d -= 1);
console.log(c, d);






