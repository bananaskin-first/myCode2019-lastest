<?php

//1连接数据库   2 书写查询语句 执行语句 得到结果 返回前端


$severname = '127.0.0.1';
$username='root';
$password= '1234';
$dbname= 'banana';


$conn = new mysqli($severname,$username,$password,$dbname);

// var_dump($conn);

//书写查询语句

// $sql = 'SELECT *FROM userinf';

// $res = $conn ->query($sql);

// // var_dump($res);

// $arr = $res ->fetch_all(MYSQLI_ASSOC);//得到数组
//fetch_all     可以返回所有查到的数据

// // var_dump($arr);
// //返回给前端

// echo json_encode($arr,JSON_UNESCAPED_UNICODE);

// $res->close();

// $conn ->close();



?>