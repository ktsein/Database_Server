# Database_Server

The http server is built using Node.js and Express.js and Mocha and Chai are used for testing.

## Tech Test

"Before your interview, write a program that runs a server that is accessible on `http://localhost:4000/`. When your server receives a request on `http://localhost:4000/set?somekey=somevalue` it should store the passed key and value in memory. When it receives a request on `http://localhost:4000/get?key=somekey` it should return the value stored at somekey.

During your interview, you will pair on saving the data to a file."

## Installation

If NVM and Node are not installed, find out more here [I'm an inline-style link](https://github.com/creationix/nvm).

Follow the command line instructions below:

```
$ git clone https://github.com/ktsein/Note-App.git
$ npm install
$ npm start
```

The server will be running on 'http://localhost:4000/'.
Use 'http://localhost:4000/set?somekey=somevalue' to store key and value as you wish by changing 'somekey' and 'somevalue'.
Use 'http://localhost:4000/get?key=somekey' to return the value of the key.

To run tests

```
$ npm test
```
