//Destructuring - phá bỏ 
// áp dụng cho array, object 

//for array
const arr = [10, 20, 30, 40, 50];
const [a, b, c, d, e] = arr;
console.log(a, e); //=> 10, 50

const [g, h] = arr; //=> g=10, h=20

const [i, , , , j] = arr;// j = 50; 20, 30, 40 ko dc gán cho biến nào
// cách này dùng để tiết kiệm bộ nhớ

const [i, ...j] = arr; //j = [20, 30, 40, 50]


const arr = [10];
const [a, b = 20] = arr;
console.log(a, b); //a = 10, b = 20



//for object
const obj = {
	a: 1,
	b: 2, 
	c: 3
};

const { a: x, b: y, c: z } = obj;
console.log(x, y, z); //1, 2, 3

const { a, ...c } = obj;
console.log(a, c); //1 { b: 2, c: 3 }

