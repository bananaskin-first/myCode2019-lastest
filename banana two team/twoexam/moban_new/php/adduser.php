<?php

//连接数据库
include 'conn.php';

//接收前端数据
$name = isset($_REQUEST['username'])?$_REQUEST['username']:'';
$email = isset($_REQUEST['emailval'])?$_REQUEST['emailval']:'';
$dateval = isset($_REQUEST['dateval'])?$_REQUEST['dateval']:'';

//插入
$sql = "INSERT INTO nomaluser(name,psw,mail) VALUES('$name','$dateval','$email')";

//执行语句

$res = $conn ->query($sql);

if($res->num_rows){
    echo '1';
}
else{
    echo '0';
}
$res ->close();
$conn ->close();



?>