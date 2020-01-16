var axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    //always executed
  });
axios.get('https://jsonplaceholder.typicode.com/todos/2')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    //always executed
  });

Promise.all([
  axios.get('https://jsonplaceholder.typicode.com/todos/1'),
  axios.get('https://jsonplaceholder.typicode.com/todos/2'),
  axios.get('https://jsonplaceholder.typicode.com/todos/3')
]).then(function(values) {
  console.log(values);
});



