const {createServer} = require('http');

const server = createServer();

server.on('request', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html',
    });
    res.end('<h1>Hell-ou from node </h1>');
});

server.listen(3000, 'localhost');
