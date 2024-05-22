const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.end('Hello from node.js');
});

server.listen(3000, ()=>{
    console.log('Servidor rodando na Porta 3000');
});