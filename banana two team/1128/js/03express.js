

const express = require('express');


const app = express();



app.use(express.static('./'));//中间件


app.get('/', (req, res) => {
    res.send('傻逼');

});

let goodlist = [{
    uid: 1,
    price: 1990
}, {
    uid: 2,
    price: 10000
}]

app.get('/good', (req, res) => {
    //es6 解构的写法
    let { uid } = req.query;


    let good = goodlist.filter((item, index) => {

        return item.uid == uid;
    })

    res.send(good);


})






app.listen(10086, () => {
    console.log('服务器端口10086');
})
