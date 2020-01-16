// ...spread - trải ra


//spread an array
const a = [1, 2, 3];
const b = [0, ...a, 4];
console.log(b); //[0, 1, 2, 3, 4]




const obj1 = {
	a: 1,
	b: 2,
	c: 3
}

let obj2 = {};
for (let key in obj1) {
	obj2[key] = obj1[key]
} 
// copy obj1 sang obj2 mà thay đổi obj2 ko làm thay đổi obj1
obj2.b = 5;
console.log({ ob1, obj2 });


// Trường hợp khác
const obj3 = {
	a: 1,
	b: 2,
	c: 3,
	d: { e: 10 }
}

let obj4 = {};
for (let key in obj3) {
	obj4[key] = obj3[key]
} 
obj4.d.e = 5;
// => obj3.d.e = 5
//vì key 'd' là 1 object và obj4.d với obj3.d cùng trỏ đến 1 địa chỉ của object
// thì khi 1 trong 2 thay đổi cái còn lại cũng thay đổi => đây gọi là shallow-copy(shadow-copy)



// search shadow-cloning for spread an object 
// search deep-cloning

//Với 2 object giống nhau 
//shadow-cloning là cách copy mà 1 cái thay đổi thì cái còn lại thay đổi theo
// deep-cloning là cách copy: 1 cái thay đổi cái còn lại ko ảnh hưởng



//spread an object
let obj5 = {
	...obj1,
	z: 100
}
//trải các key của obj1 ra cho obj5
