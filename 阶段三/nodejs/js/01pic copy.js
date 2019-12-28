

const request = require('request');

const cheerio = require('cheerio');//引入模块
const path = require('path');
const fs = require('fs');

request('http://www.cosplay8.com/pic/chinacos/', (err, res, body) => {
    // console.log(body);

    let $ = cheerio.load(body);

    let datalist = [];

    $(' .pic_list ul li').each((index, ele) => {

        let data = {};
        data.id = index + 1;
        data.url = $(ele).find('a').attr('href');
        let pathurl = 'http://www.cosplay8.com/' + data.url;
        // console.log(pathurl);
        //https://www.pzhan.com/hua/70187/就是我想要的
        request(pathurl, (err2, res2, body2) => {
            // console.log(body2);
            let $ = cheerio.load(body2);

            let urlstr = $('.p_info  img').attr('src');//得到大图片

            // console.log(urlstr);

            if (urlstr != undefined) {
                let filename = path.basename(urlstr);
                // console.log(filename);  
                let ext = path.extname(path.basename(urlstr))
                let writestr = fs.createWriteStream('./pic/' + filename);
                //创建文件名字，可以顺便取名，重要的是讲网上资源url获取到后pipe下载

                request(urlstr).pipe(writestr);//请求讲网上资源下载到对应文件里


            }

            //案列
            // const fs=require('fs');
            // const request=require('request');

            // var writeStream=fs.createWriteStream('./mo/'+'error.jpg',{autoClose:true})

            // request(src).pipe(writeStream);

            // writeStream.on('finish',function(){
            //     console.log('文件写入成功')
            // })


        });

        // let writestr = fs.createWriteStream('./pic/');
        // request(data.url).pipe(writestr);
    })

})