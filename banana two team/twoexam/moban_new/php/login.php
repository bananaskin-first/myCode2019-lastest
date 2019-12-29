<?php
//连接数据库
include 'conn.php';

//接收前端的数据
$username = isset($_REQUEST['name'])?$_REQUEST['name']:'';
$password = isset($_REQUEST['password'])?$_REQUEST['password']:'';

//查询数据

$sql = "SELECT *FROM userinf WHERE name ='$username' AND psw ='$password'";
//执行语句
$res = $conn->query($sql);
//判断
// var_dump($res);
if($res->num_rows){
echo '1';
}
else{
    echo '0';
}
$res ->close();
$conn ->close();



?>