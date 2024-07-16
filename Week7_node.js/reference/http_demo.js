const http = require('http');

//Create server object c
http.createServer((req, res) => {
    //write response -> output to the write
    res.write('Hello World');
    res.end()
}).listen(5000, () => console.log('server running'));//list on a port