var classes = [
	{
		id: 0,
		name: "1A",
		teacher: 0,
	},
	{
		id: 1,
		name: "2A",
		teacher: 1,
	},
	{
		id: 2,
		name: "3A",
		teacher: 2,
	},
	{
		id: 3,
		name: "4A",
		teacher: 3,
	},
	{
		id: 4,
		name: "5A",
		teacher: 4,
	}
];

var teachers = [
	{		
			id: 0,
			name: "Quynh",
			age: 20
	},
	{
			id: 1,
			name: "Chinh",
			age: 30
	},
	{
			id: 2,
			name: "Nguyet",
			age: 32
	},
	{
			id: 3,
			name: "Huong",
			age: 29
	},
	{
			id: 4,
			name: "Hong",
			age: 40
	},
];

var students = [
	{ id:0, name: "Minh", height: 165, class: 0},
	{ id:1, name: "Ngan", height: 160, class: 0},
	{ id:2, name: "Huyen", height: 162, class: 1},
	{ id:3, name: "Nga", height: 172, class: 1},
	{ id:4, name: "Duong", height: 160, class: 2},
	{ id:5, name: "Hanh", height: 161, class: 2},
	{ id:6, name: "Nam", height: 170, class: 3},
	{ id:7, name: "Thang", height: 166, class: 3},
	{ id:8, name: "Ha", height: 180, class: 4},
	{ id:9, name: "Chi Mai", height: 168, class: 4}
];

function getStudentsInClass(className) {
	var classObj = classes.find(function(item) {
		return item.name === className;
	});
	var studentsInClass = students.filter(function(item) {
		return item.class === classObj.id;
	});
	return studentsInClass;
}

var studentsInClass = getStudentsInClass("1A");
console.log(studentsInClass);

