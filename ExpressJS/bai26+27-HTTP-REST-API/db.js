var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json'); 
var db = low(adapter);

// Set some defaults (required if your JSON file is empty), create if don't have JSON file
db.defaults({ users: [], sessions: [], transfers: [] })
  .write();

module.exports = db;


// vào mockaroo đê tạo dữ liệu ngẫu nhiên
//lowdb xây dựng từ lodash. Trong JS Lodash đc sử dụng nhiều