

//引入express模块


const express = require('express');


const app = express();

app.use(express.static('./'));

app.get('/jspon', (req, res) => {
    let data = { username: 'banana' }

    res.send(data);
});

app.listen(10087, () => {


    console.log('10087');
})