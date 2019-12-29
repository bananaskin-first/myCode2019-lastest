<?php
//连接数据库
$severname = '127.0.0.1';
$username='root';
$password= '1234';
$dbname= 'banana';
$conn = new mysqli($severname,$username,$password,$dbname);

if($conn->connect_error){
    die($conn->connect_error);
}else{
    // echo "连接成功！";
}

?>  