var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World! Home');
  res.end();
}).listen(5000, function () {
  console.log('run dashboard port 5000')
});
