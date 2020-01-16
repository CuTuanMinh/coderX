//setTimeout
//clearTimeout

//syntax:
//setTimeout(function, time-ms)
//đếm ngược time-ms về 0 thì func chạy
var timeOutId = setTimeout(function() {
	console.log('finish');
}, 1000)
clearTimeout(timeOutId);// hủy lệnh setTimeout



/**
 * Tạo 1 hàm doAfter nhận vào 2 tham số:
 *  - Tham số thứ 1: 1 function
 *  - Tham số thứ 2: Thời gian x (ms)
 * Hàm này sẽ gọi function sau 1 khoảng thời gian x ms VÀ trả về 1 promise để có thể gọi như sau
 */
function doAfter(func, time) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      func();
      resolve();
    }, time)
  });
}

function sayHello() {
  console.log('Hello');
}

function sayGoodbye() {
  console.log('Goodbye');
}

doAfter(sayHello, 1000).then(sayGoodbye);
// Expect: 
// Đợi 1s
// Hello
// Goodbye