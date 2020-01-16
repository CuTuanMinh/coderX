// khác nhau giữa arrow function và function thường

var a = {
	name: "Nguyen Thu Ha",
	run: function() {
		var run2 = function() {
			console.log(this.name);
			// this là của run2, mà context của run2 là global context
			// => a.run() = undefined
		}
		// run2(); // => a.run() = undefined

		run2.bind(a)(); // => a.run() = Nguyen Thu Ha
		//tương đương với
		// var run3 = run2.bind(a);
		// run3();
	}
};


// cách viết khác
var a = {
	name: "Nguyen Thu Ha",
	run: function() {
		var run2 = function() {
			console.log(this.name);
		}.bind(a); //or bind(this);
		run2();
	}
}

a.run();



// if use arrow function
var b = {
	name: "Vu Hai Ngan",
	jum: function() {
		var jum2 = () => {
			console.log(this.name);
		};
		jum2(); // => b.jum() = Vu Hai Ngan
		// Vì arrow function ko có context,
		// this truyền vào jum2() là context của hàm cha của nó(jum), tức là b
		// nói cách khác, context của arrow function là context của hàm cha của arrow function
	}
};

b.jum();