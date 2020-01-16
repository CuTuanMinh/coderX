var a = {
	foo: 'bar',
	run: function() {
		setTimeout(function() {
			console.log(this.foo);
		}.bind(a), 2000);
	}
};

var b = {
	foo: 'bar',
	run: function() {
		setTimeout(() => {
			console.log(this.foo);
		}, 2000);
	}
};

a.run();
b.run();