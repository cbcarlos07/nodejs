var http = require('http')

//create a server object
http.createServer(function (req, res) {
    res.write('Hello world!')//Write a response to the client
    res.end()
}).listen(8080)