const express = require('express');
const server = express();
const port = 4000;
var database = {};

server.get('/', (request, response) => {
  response.send('Hello from Kyaw Node Server!')
});

server.get('/set', (request, response) => {
  for (var key in request.query) {
    database[key] = request.query[key];
    console.log('data saved as: { ' + key + ':' + request.query[key] + '}');
  }
  response.send(database);
});

server.get('/get', (request, response) => {
  if (database[request.query.key] !== undefined) {
    response.send(database[request.query.key]);
  } else {
    response.send('No record with the key: ' + request.query.key)
  }
});

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log('server is listening on ' + port)
});






// const requestHandler = (request, response) => {
//   console.log(request.url)
//   response.end('Welcome to Node Universe!')
// }
//
// const server = http.createServer(requestHandler)
//
// server.get()
//
// server.listen(port, (err) => {
//   if (err) {
//     return console.log('Error', err)
//   }
//
//   console.log('server is listening on ' + port)
// })
