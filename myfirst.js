var http = require('http')
var dt   = require('./myfirstmodule')
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type':'text/plain'})
    res.end('Hello World')
}).listen(8080)