var http = require('http');

http.createServer(function (req, res) {
  res.write('Hello World! v1\n');
  res.end();
}).listen(80);
