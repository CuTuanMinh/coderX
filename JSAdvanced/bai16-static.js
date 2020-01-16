class Foo {
	static someMethod() {
		console.log('some method');
	}

	anotherMethod() {
		console.log('another method');
	}
}


// static method/properties ko đc gọi từ instance mà gọi từ class của chính method/properties đó
Foo.someMethod();// console 'some method'

// Foo.anotherMethod();// can't action, must create instance

const foo = new Foo();
foo.anotherMethod();


// tương đương với:
// function Foo() {}
// Foo.prototype.anotherMethod = function() {}
// Foo.someMethod = function() {}




// ứng dụng:
// static method đc dùng khi ko đòi hỏi phải khai báo object tạo ra từ class 