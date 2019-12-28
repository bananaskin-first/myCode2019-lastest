

const http = require('http');

// console.log(http);
let app = http.createServer(function (request, response) {
    //设置响应头v
    response.writeHead(200, { 'content-Type': 'text/html;charset=utf-8' });
    response.write('my server');
    response.write('<h1>my nodejs server</h1>');//如果不设置响应头，这里的h1是文本形式打印到页面

    //标记响应结束
    // response.end();
    response.end('<h1>早上就到这里</h1>');
});
app.listen(1010, function () {
    //服务器启动后会执行这里的代码
    console.log('服务器启动成功，端口号是1010');
});