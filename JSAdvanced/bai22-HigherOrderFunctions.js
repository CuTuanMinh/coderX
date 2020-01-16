// Higher order functions là hàm có thể nhận function
// vào làm tham số hoặc trả về function  

function waitAndRun(ms, func) {
	setTimeout(func, ms);
}

function run() {
	console.log('running');
}

waitAndRun(2000, run);

// Ứng dụng để chia nhỏ 1 hàm thành các hàm nhỏ hơn
// để dễ kiểm soát 