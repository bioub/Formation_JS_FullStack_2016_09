const express = require('express');

var server = express();

server.get('/', (req, res) => {
    res.send('hello world\n');
});

server.get('/toto', (req, res) => {
    res.send('toto\n');
});
/*
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
*/

server.listen(8000, () => {
    console.log(`J'écoute`);
});
