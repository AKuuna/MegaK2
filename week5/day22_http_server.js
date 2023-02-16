// const http = require('http');

// const server = http.createServer();


const {createServer} = require('http');

createServer( (request, response) => {
    // console.log('Hello!');

    response.writeHead(200, {
        'Content-Type': 'text/html',
    });

    response.end('<h1>Hell-ou from Node</h1>');

}).listen(3000, '127.0.0.1');


