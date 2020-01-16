// value types  - kiểu giá trị 
// reference types - kiểu tham chiếu




let a1 = 1;
let a2 = 1;
console.log(a1 === a2);//true

let obj1 = { a: 1 };
let obj2 = { a: 1 };
console.log(obj1 === obj2);//false
// obj như 1 cái nhà, biến ko đủ khả năng lưu trữ cả nhà
// => nên chỉ lưu số nhà(địa chỉ)
// => so sánh 2 obj thực chất là so sánh 2 địa chỉ của obj
// => kết quả ra false

// => kiểu dữ liệu object, array, function là kiểu reference types
// các kiểu dữ liệu cơ bản còn lại là value types 




let a3 = a2;
a3 = 2;
console.log(a2); 
// a2 vẫn bằng 1
// giá trị của a2 đc gán sang a3
// a3 thay đổi ko liên quan gì a2




let obj3 = obj2;
obj3.a = 2;
console.log(obj2); //obj2.a = 2
// obj3 và obj2 cùng tham chiếu đến 1 địa chỉ
// =>obj3 thay đổi thì obj2 cũng thay đổi theo






// Đối vs function:
// Khi tham số truyền vào là object, 
// nếu trong hàm thay đổi giá trị object đó,
// thì object ban đầu truyền từ ngoài hàm vào cũng thay đổi

function log(x) {
	x.a = 5;
}

log(obj1); 
// => obj1.a = 5
// ban đầu obj1.a = 1
// => cách làm này nguy hiểm 