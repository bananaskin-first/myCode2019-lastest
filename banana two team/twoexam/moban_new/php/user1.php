<?php
header("Content-type:text/html;charset=utf-8");//防止中文乱码
//连接数据库
include 'conn.php';


//接收前端的数据
$name = isset($_REQUEST['username'])?$_REQUEST['username']:'';

//查询

$sql = "SELECT *FROM nomaluser WHERE name ='$name'";
//执行语句
$res = $res = $conn->query($sql);

//判断
if($res->num_rows){
    echo '1';
}
else{
    echo '0';
}
$res ->close();
$conn ->close();


 ?>