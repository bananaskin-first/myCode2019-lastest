

//引入

const express = require('express');


const app = express();//返回一个实例



//用express 开启静态服务器

app.use(express.static('./', { index: './main.html', maxAge: 360000 }));


//设置一个中间件


app.use('/good', (req, res, next) => {
    console.log('我是1');
    next();
    res.send('叼你妈 ')


})

app.use('/login', (req, res, next) => {
    console.log('我是2');
    res.send('傻逼 ')

})


app.listen(1911, () => {
    console.log('1911');
})