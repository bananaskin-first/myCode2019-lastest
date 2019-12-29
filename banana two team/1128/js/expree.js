//开启服务器


const express = require('express');


const app = express();


app.use(express.static('./'));//中间件

app.get('/', (req, res) => {
    res.send('欢迎来到服务器');
});

app.get('/login', (req, res) => {
    res.send('登陆页get');
});

app.post('/login', (req, res) => {
    res.send('登陆页post');
});

app.get('/reg', (req, res) => {
    res.send('注册页');
});


app.listen(8080, () => {
    console.log('8080服务器');
})