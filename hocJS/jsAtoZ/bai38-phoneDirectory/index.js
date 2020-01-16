var fs = require("fs");
var readlineSync = require("readline-sync");
var dataString = fs.readFileSync("./data.json", {encoding: "utf8"});
var data = JSON.parse(dataString);

function main(callback){
	callback();
}

function showMenu(){
	console.log('1.Enter contact');
	console.log('2.Fix contact');
	console.log('3.Delete contact');
	console.log('4.Search contact');
	console.log('5.Exit');
	var option = readlineSync.question("Enter option >  ");
	console.log('\n');
	switch (option) {
		case '1':
			enterContact();
			showMenu();
			break;

		case '2':
			fixContact();
			showMenu();
			break;

		case '3':
			delContact();
			showMenu();
			break;

		case '4':
			searchContact();
			showMenu();
			break;

		case '5':
			break;

		default:
			console.log('Enter wrong!')
			showMenu();
			break;
	}
}

function enterContact(){
	var name = readlineSync.question("Enter name: ");
	var phoneNumber = readlineSync.question("Enter phone number: ");
	var customer = {
		name: name,
		phone: phoneNumber
	};
	data.push(customer);
	fs.writeFileSync("./data.json", JSON.stringify(data), {encoding: "utf8"});
	console.log("Saved\n");
}

function fixContact(){
	var name = readlineSync.question("Enter name: ");
	var mark = data.find(function(item){
		return item.name === name;
 	});

	var newNumber = readlineSync.question("Enter new number: ");
	mark['phone'] = newNumber;
	fs.writeFileSync("./data.json", JSON.stringify(data), {encoding: "utf8"});
	console.log('Fixed\n');
}

function delContact(){
	var name = readlineSync.question("Enter name: ");
	var phoneNumber = readlineSync.question("Enter phone number: ");
	for (var i = 0; i < data.length; i++){
		if (data[i].name === name && data[i].phone === phoneNumber){
			var mark = i;
			break;
		}
	}
	data.splice(mark,1);
	fs.writeFileSync("./data.json", JSON.stringify(data), {encoding: "utf8"});
	console.log('Deleted\n');
}

function searchContact(){
	console.log('まだできません\n');
}

main(showMenu);