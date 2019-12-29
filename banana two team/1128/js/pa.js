

const request = require('request');

const cheerio = require('cheerio');//引入模块
const path = require('path');
const fs = require('fs');

request('https://www.pzhan.com', (err, res, body) => {
    // console.log(body);

    let $ = cheerio.load(body);

    let datalist = [];

    $('.pic-content .pic-box').each((index, ele) => {

        let data = {};
        data.id = index + 1;
        data.url = $(ele).find('.pic a img').attr('src');

        // console.log(data.url);


        let writestr = fs.createWriteStream('./pic/');
        request(data.url).pipe(writestr);
    })

})