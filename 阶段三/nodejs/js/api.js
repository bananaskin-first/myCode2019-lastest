//需求：写一个方法，导出，供别人使用

//导出接口==暴露接口

var http = require('http');

http.createServer(function (reqeust, response) {
    response.end('服务器启动成功，端口为8080');
}).listen(8080);