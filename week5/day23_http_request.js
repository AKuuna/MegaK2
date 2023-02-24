/** req.url - url path
 *  req.method - default GET
 *  req.headers - object with a pair: name-value
 * 
 * res.writeHead()
 * res.statusCode()
 * res.write()
 * res.end()
 * 
*/

const server = createServer();

server.on( 'request', (req, res) => {
    //console.log(req.url);
    //console.log(req.method);
    //console.log(req.headers['cache-control']);  as an array to get to element with '-' in the name

    if (req.url ==='/' && req.method === 'GET'){
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'X-My-header': 'Hello, World!',   
        });
        res.write('<h1>Hell-ou from Node</h1>');
        res.end();
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
        });
        res.end('<h1>Not found</h1>');
    }
});

server.listen(3000, 'localhost');


