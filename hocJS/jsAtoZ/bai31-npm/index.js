//npm init  -> khoi tao project co dung cac package quan ly by npm (thuc ra tao file package.json)
//npm install package-name --save  ->  install package va save lai package trong package.json

//tóm lại: muốn dùng package của npm 
//b1: npm init
//b2: npm install package-name --save


var readlineSync = require("readline-sync");
var languages = [];
var language = readlineSync.question("Which language can you speak? ");
languages.push(language);
console.log(languages);

var info = {}
var name = readlineSync.question("What is your name? ");
var age = readlineSync.question("How old are you? ");
var gender = readlineSync.question("What is your gender? ");

info.name = name;
info.age = parseInt(age);
info.gender = gender;
for (var i in info) console.log(info[i]);
