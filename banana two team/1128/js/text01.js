var http = require('http');

http.createServer(function (reqeust, response) {
    response.writeHead(200, { 'content-Type': 'text/html;charset=utf-8' });
    response.end('服务器启动成功，端口为8080');
}).listen(8080);