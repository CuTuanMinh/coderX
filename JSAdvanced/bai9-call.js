function greeting(name, fine) {
	console.log(`Hi ${name}, I 'm ${fine}`);
}

greeting.call(null, 'Tom', 'fine');

// tham số đầu tiên của call đại diện cho this nếu bên trong greeting() có this
// => ko có this thì tham số đầu tiên là gì cũng đc
// từ tham số thứ 2 của call trở đi sẽ là các tham số của greeting()


function greeting2() {
	console.log(`I 'm ${this.name}, ${this.age} years old`);
}

var cat = {
	name: 'Mickey',
	age: 100
}
greeting2.call(cat);