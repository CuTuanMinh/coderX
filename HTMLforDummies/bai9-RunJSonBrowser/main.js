function Cat(){
	this.stomach = [];
}

Cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse);
}

function Mouse(name) {
	this.name = name;
}

var tom = new Cat();
var mickey = new Mouse();
tom.eat(mickey);
console.log(tom);