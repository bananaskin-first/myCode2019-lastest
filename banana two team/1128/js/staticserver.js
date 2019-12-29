const http = require('http');

const fs = require('fs');

const url = require('url');
const path = require('path');


const mime = require('./mime');

//1开启服务器


http.createServer((req, res) => {

    let pathname = url.parse(req.url).pathname;
    let ext = path.extname(pathname).slice(1);
    // console.log(pathname);

    pathname = path.join(__dirname, pathname);

    fs.readFile(pathname, (err, data) => {

        if (err) throw err;

        res.writeHead(200, { 'content-Type': `${mime[ext]};charset=utf-8` });

        res.end(data)
    });


}).listen(1008, () => {
    console.log('服务器已经开启，请访问：http://localhost:1008');
});