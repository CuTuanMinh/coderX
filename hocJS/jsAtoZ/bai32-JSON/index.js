// JSON object (2 method) 
// 1. stringify - convert an object to a JSON string 
// 2. parse - convert a JSON string to an object 

var myDog = {
	name: 'Milu',
	age: 1,
	dead: false
};

var myDogString = JSON.stringify(myDog);
console.log(typeof myDogString); 
//myDogString is a string

var myCatString = '{"name": "Tom", "age": 2}';
var myCat = JSON.parse(myCatString);
console.log(typeof myCat);
//myCat is an object