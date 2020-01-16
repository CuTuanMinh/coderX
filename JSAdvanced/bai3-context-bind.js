// global context
// function context
// bind

var mouse = {
	name: "mickey",
	sayHi: function() {
		console.log('Hi, my name is ', this.name);
	}
};

// context của 1 function là object mà function đó làm method

// mouse.sayHi();
// => nói context của sayHi() là mouse, this trong sayHi() trỏ đến mouse 

var say = mouse.sayHi;
say(); // => undefined
// => nói say() ko có context, vì ko có object nào đứng trc.
// hay nói đúng hơn context của say() là global context
// global context là windows, document,...


để thay đổi context của 1 function dùng bind
tất cả function đều có vài method dùng đc, 1 trong đó là bind


var say = mouse.sayHi.bind(mouse);
say();
// truyền vào bind object mà muốn làm this của function đó

// Example
var cat = {
	name: "Tom"
}

var say = mouse.sayHi.bind(cat);
say(); // => My name is Tom


// -----------------------

function run(cb) {
	console.log('run...');
	cb();
}

run(mouse.sayHi); // => My name is undefined (no have context)

run(mouse.sayHi.bind(mouse));// => My name is mickey