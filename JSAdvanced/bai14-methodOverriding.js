// method overriding - ghi đè

class CoffeeMachine {
	makeCoffee() {
		console.log('making coffee...');
	}
}

class SpecialCoffeeMachine extends CoffeeMachine {
	makeCoffee(callback) {
		console.log('making coffe and do st...');
		callback();
	}
}

const coffeeMachine = new SpecialCoffeeMachine();
// coffeeMachine.makeCoffee(() => {
// 	console.log('go to company');
// });

var work = () => {
	console.log('Go to company');
}

coffeeMachine.makeCoffee(work);