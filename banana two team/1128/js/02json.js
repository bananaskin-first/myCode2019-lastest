

//在网上爬取数据

//先引入模块


const request = require('request');

const cheerio = require('cheerio');

const fs = require('fs');

//请求对应的网站

request('https://cnodejs.org/', (err, res, body) => {

    //载入到模块里面才可以操控里面的元素

    let $ = cheerio.load(body);

    let datalist = [];
    $('#topic_list .cell').each((index, ele) => {
        data = {};

        data.id = index + 1;

        data.url = $(ele).find('.user_avatar img').attr('src');

        data.title = $(ele).find('.topic_title').attr('title');

        datalist.push(data);
    })

    //创建一个文件
    let writestr = fs.createWriteStream('./data/cnodejs.json');


    // console.log(datalist);
    //拿到数据了
    //写入数据，将对象转化成字符串

    let str = JSON.stringify(datalist);

    writestr.write(str);

    writestr.on('finish', () => {
        console.log('写ok');
    });




})