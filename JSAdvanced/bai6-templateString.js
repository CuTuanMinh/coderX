// truyền giá trị vào chuỗi

var greeting = name => 'Hi, ' + name + '!';
console.log(greeting('Minh'));

// return template String 
var greeting2 = name => `Hi, ${name}!`;
console.log(greeting2('Ngan'));

var greeting3 = name => `Hi,

${name}!`;
console.log(greeting3('Ha'));


var greeting4 = name => `Hi, ${name} ${1 + 29} tuổi`;
console.log(greeting4('Nga'));


// trong ${} có thể viết biểu thức js, hàm, chèn nhiều biến,...