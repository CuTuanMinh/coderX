var a = 1;
let b = 2;
const c = 3;
console.log(a, b, c);

var a = 2; 
// thay doi a thanh 2
console.log(a)

let b = 3; 
console.log(b); 
// error

const c = 4;
console.log(c);
// error
//khai bao const bat buoc phai gan gia tri


// 1. var have hoisting, let + const no
// 2. let + const have block scope; var has function scope


// block scope
if (true) {
	let x = 1;
	// const x = 1;
	console.log(x); // => 1
}
console.log(x); // error
// bất kể cặp dấu {} nào cũng là scope, trừ object 
// block scope là biến chỉ có giá trị trong phạm vi cặp {} đó thôi

// => nên dùng let, const để tránh lỗi