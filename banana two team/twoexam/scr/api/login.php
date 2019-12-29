<?php
//连接数据库
include 'good.php';

//接收前端数据
$name = isset($_REQUEST['username'])?$_REQUEST['username']:'';
$password = isset($_REQUEST['password'])?$_REQUEST['password']:'';


//查询语句
$sql ="SELECT *FROM userin WHERE name = '$name' AND psw = '$password'";

//执行语句
$res = $conn ->query($sql);

$arr = $res->fetch_all(MYSQLI_ASSOC);//得到数组  [{},{},{}]
$conn->set_charset('utf8');
echo json_encode($arr,JSON_UNESCAPED_UNICODE);//把数组转成字

$conn ->close();
$res ->close();



?>