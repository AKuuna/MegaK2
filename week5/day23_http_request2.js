const {createServer} = require('http');

const {readFile} = require ('fs').promises;

const server = createServer();

server.on( 'request', async (req, res) => {   //async! we need async functions on a server

        const html = await readFile('./index.html', 'utf-8');
    
        res.writeHead(200, {
            'Content-Type': 'text/html',
        })

        res.end(html);
    
});

server.listen(3000, 'localhost');


