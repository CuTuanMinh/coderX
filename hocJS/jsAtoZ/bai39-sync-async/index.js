//Sync lập trình đồng bộ (làm lần lượt, tuần tự -> tốn time)

//Async lập trình không đồng bộ (tranh thủ việc này đang diễn ra đi làm việc khác -> tiết kiệm time)


var fs = require('fs');
//Sync example
console.log('start');
var content = fs.readFileSync("./content.txt", { encoding: "utf8" });
console.log('end');
//output: start -> content -> end


//Async example
console.log('start');
fs.readFile('content.txt', { encoding: "utf8"}, function(err, data){
	console.log(data);
});
console.log('end');
//output: start -> end -> content

