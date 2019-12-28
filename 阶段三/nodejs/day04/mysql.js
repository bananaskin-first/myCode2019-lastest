

//连接


const mysql = require('mysql');
//创建连接对象，配置参数
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'banana'


});

connection.connect();

connection.query('select * from userin', function (error, results, field) {
    if (error) throw error;
    console.log('The solution is: ', results);
});

connection.close();//关闭连接