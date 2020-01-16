var fs = require("fs"); //khai bao module file system
var text = fs.readFileSync("./test.txt", {encoding: "utf8"});
console.log(text);

fs.writeFileSync("./test.txt", "Codes.Tokyo");
 

