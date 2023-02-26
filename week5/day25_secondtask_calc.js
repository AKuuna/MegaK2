const {createServer} = require ('http');
const {calc} = require ('./calc25');
 
const server = createServer();

server.on('request', (req, res) => {
    //console.log(req.url.split('/'));

    const [, operation, a, b] = req.url.split('/');
    console.log(operation, a, b); //these are still strings

    const result = calc(operation, Number(a), Number(b));
    console.log(result);
    
    res.writeHead( 200, {
        'Content-type': 'text/plain',
    });

    res.end(result +'');

});

server.listen(3000, 'localhost');
