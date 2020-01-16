// constructor function
function Mouse(name) {
	this.name = name;
}

Mouse.prototype.run = function() {
	console.log(`${this.name} is running`);
}

const mickey = new Mouse('Mickey');
mickey.run();



// objetc literals
const jerry = {
	name: 'Jerry',
	run: function() {
		console.log(`${this.name} is running`);
	}
}

jerry.run();


//Enhanced object literals (ES6)
const name = 'Tom';
const cat = {
	name, // ~ name: name
	run() {
		console.log(`${this.name} is running`);	
	}
}
cat.run();