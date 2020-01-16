var Mouse = require("./mouse");
var Cat = require("./cat");

var mickey = new Mouse('black');
var jerry = new Mouse('orange');

console.log(mickey);
console.log(jerry);

var tom = new Cat();
tom.eat(mickey);
try {
	tom.eat(mickey);
} catch(e) {
	// statements
	console.log("Cat can't eat ", e);
}
console.log(tom);