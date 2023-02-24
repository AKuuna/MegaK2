const {createServer} = require ('http');

const server = createServer();

let counter = 1;

server.on('request', (req, res) => {
    //console.log('Hello,World!');

    if (req.url === '/') {
    res.writeHead( 200, {
        'Content-type': 'text/plain',
    });

    // setTimeout( () => {
        
    //     res.end('1');
    // }, 500);

    res.end(counter++ + '');
    }   
});

server.listen(3000, 'localhost');

