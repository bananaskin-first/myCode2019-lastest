const request = require('request');

const http = require('http');



http.createServer((req, res) => {

    request('https://api.bilibili.com/x/web-interface/ranking?rid=0&day=3&jsonp=jsonp', (err, res2, body) => {
        res.writeHead(200, {
            'Access-Control-Allow-Origin': '*'
        });

        res.end(body);
    })
}).listen('10086', () => {
    console.log('服务器开启为10086');
})