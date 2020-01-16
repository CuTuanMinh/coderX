// constructor function
// function Mouse(name) {
// 	this.name = name;
// }

// Mouse.prototype.run = function() {
// 	console.log(`${this.name} is running`);
// }


//Cách viết theo class
class Mouse {
	constructor(name) {
		this.name = name;
	}
	run() {
		console.log(`${this.name} is running`);
	}
}

const mouse = new Mouse('Mickey');
mouse.run();


// inherit class

class Animal {
	constructor(name) {
		this.name = name;
	}
	eat() {
		console.log('Eating...');
	}
}

class Bird extends Animal {
	fly() {
		console.log('Flying...');
	}
}

class Parrot extends Bird {
	speak() {
		console.log('Speaking...');
	}
}

const bird = new Bird('Rio');
bird.fly();

const fernando = new Parrot('Fernando');
fernando.speak();

// -----------------




// inherit class write by constructor function

function Animal(name) {
	this.name = name;
}

Animal.prototype.eat = function() {
	console.log('Eating...');
}

function Bird(name) {
	Animal.apply(this, arguments);
}

Bird.prototype = new Animal();

