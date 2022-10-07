const http = require('http');
const fs = require('fs').promises

const server1 = http.createServer( (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-80000' })

    res.write('<h1>Hello JY<h1>');

    res.end('<p>Bye HS</p>');
} );

server1.listen(8000);

server1.on('listening', ()=>{console.log("8000 리스닝 중")});

server1.on('error', (error) => { console.log(error); });

;