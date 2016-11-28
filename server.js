const express = require('express');
const server = express();
const port = 4000;
var database = {};

server.get('/', (request, response) => {
  response.send('Hello from Kyaw Node Server!')
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
