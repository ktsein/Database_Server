const http = require('http')
const port = 4000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Welcome to Node Universe!')
}

const server = http.createServer(requestHandler)




server.listen(port, (err) => {
  if (err) {
    return console.log('Error', err)
  }

  console.log('server is listening on ' + port)
})
