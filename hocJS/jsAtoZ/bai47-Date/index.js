var now = new Date();
var myBirthday = new Date(1995, 10, 20); //20-11-1995
// january = 0 ,..., december = 11

//mỗi Date object đều chứa số milisecond from 1-1-1970 -> present
//để lấy dùng getTime()
console.log(now.getTime());

//moment.js
//npm install moment --save 
var moment = require('moment');
var now = moment(); 
var day = moment('2019-08-12 17:00');
console.log(day.fromNow());


var day = new Date('2018/08/11');
console.log(day.getDay());
var options = { weekday: 'long' };  
console.log(new Intl.DateTimeFormat('en-US', options).format(day));


// get number of days between 2 dates
function diff(fromDate, toDate) {
  var res = Math.abs(toDate - fromDate) / 1000;
  return Math.floor(res / 86400);
}