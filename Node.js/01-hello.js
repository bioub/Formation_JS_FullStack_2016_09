const http = require('http');

var server = http.createServer((req, res) => {

    switch (req.url) {
        case '/':
            res.writeHead(200);
            res.end('hello world\n');
            break;
        case '/toto':
            res.writeHead(200);
            res.end('toto\n');
            break;
        default:
            res.writeHead(302, {
                Location: '/'
            });
            res.end('Redirect\n');
    }
});

server.listen(8000, () => {
    console.log(`J'écoute`);
});
