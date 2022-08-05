const http = require('http')
const moment = require('moment');

const port = process.env.PORT || 1337;

http.createServer(function(_req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Write something that leverages a yarn installed package.
  res.end('Hello World, v.2.2 \n' + moment().format());
}).listen(port);